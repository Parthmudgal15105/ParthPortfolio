import type { Product } from "./types";

import closer from "./products/closer";
import catchApp from "./products/catch";
import transcription from "./products/transcription";
import macVideoFullscreen from "./products/mac-video-fullscreen";
import loopstudio from "./products/loopstudio";
import palmdeck from "./products/palmdeck";
import gesturepad from "./products/gesturepad";
import bestnotch from "./products/bestnotch";
import gym from "./products/gym";
import thelooper from "./products/thelooper";
import localjudge from "./products/localjudge";
import localVoice from "./products/local-voice";
import tabletAwake from "./products/tablet-awake";

const all: Product[] = [
  closer,
  catchApp,
  transcription,
  macVideoFullscreen,
  loopstudio,
  palmdeck,
  gesturepad,
  bestnotch,
  gym,
  thelooper,
  localjudge,
  localVoice,
  tabletAwake,
];

// Slugs that would collide with site routes.
const RESERVED = new Set(["about", "apps", "projects", "contact", "privacy", "support", "api", "resume.pdf", "sitemap.xml", "robots.txt", "opengraph-image"]);
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Throws at build time if the registry is inconsistent. */
export function validate(products: Product[]): Product[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  for (const p of products) {
    const at = `[${p.slug || "?"}]`;
    if (!SLUG.test(p.slug)) errors.push(`${at} invalid slug`);
    if (RESERVED.has(p.slug)) errors.push(`${at} slug is reserved`);
    if (seen.has(p.slug)) errors.push(`${at} duplicate slug`);
    seen.add(p.slug);
    for (const k of ["name", "tagline", "headline", "description", "icon", "seoTitle", "seoDescription", "accent"] as const) {
      if (!p[k] || String(p[k]).trim() === "") errors.push(`${at} missing ${k}`);
    }
    if (!/^#[0-9a-f]{6}$/i.test(p.accent)) errors.push(`${at} accent must be #rrggbb`);
    if (p.platforms.length === 0) errors.push(`${at} needs at least one platform`);
    if (p.features.length < 3) errors.push(`${at} needs at least 3 features`);
    if (!p.icon.startsWith("/")) errors.push(`${at} icon must be an absolute public path`);
    for (const s of p.screenshots) {
      if (!s.alt || s.alt.length < 8) errors.push(`${at} screenshot ${s.src} needs descriptive alt text`);
      if (!s.width || !s.height) errors.push(`${at} screenshot ${s.src} needs width/height`);
    }
    // Truthfulness guard: only "available" products may have a store/download primary CTA.
    if (p.status === "in-review" && p.primaryCta && ["app-store", "download"].includes(p.primaryCta.kind)) {
      errors.push(`${at} in-review products cannot have an App Store/download primary CTA`);
    }
    if (p.status === "coming-soon" && p.primaryCta && p.primaryCta.kind !== "waitlist") {
      errors.push(`${at} coming-soon products can only have a waitlist CTA`);
    }
    if (p.support.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(p.support.email)) errors.push(`${at} bad support email`);
  }
  if (errors.length) throw new Error("Product registry is invalid:\n" + errors.join("\n"));
  return products;
}

export const products: Product[] = validate(all).sort((a, b) => a.order - b.order);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export { statusLabel, platformLabel, platformFilters } from "./labels";
