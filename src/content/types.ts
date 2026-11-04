// Product registry schema. Every product page, card, sitemap entry and
// OG image is generated from one `Product` record in ./products.ts.

export type Platform = "macOS" | "iOS" | "iPadOS" | "Web" | "Chrome" | "VS Code" | "Android";

/**
 * Availability is shown verbatim on cards and CTAs, so it must be truthful.
 *  - available:   can be downloaded/used by the public today (verified link)
 *  - in-review:   submitted to a store, awaiting review — never shown as downloadable
 *  - beta:        public test build or early access (TestFlight/waitlist/direct beta)
 *  - coming-soon: built and being prepared for release, nothing to download yet
 *  - in-development: actively being built
 *  - open-source: source is public; build it yourself
 */
export type Status =
  | "available"
  | "in-review"
  | "beta"
  | "coming-soon"
  | "in-development"
  | "open-source";

export type Category = "Productivity" | "Music & audio" | "Developer tools" | "Health & fitness" | "AI & research" | "Utilities";

export interface Feature {
  title: string;
  body: string;
}

export interface Shot {
  src: string; // path under /public
  alt: string;
  width: number;
  height: number;
  /** "mac" = wide window, "phone" = portrait device, "web" = browser */
  frame?: "mac" | "phone" | "web" | "plain";
}

export interface Cta {
  label: string;
  href: string;
  kind: "app-store" | "download" | "web" | "chrome" | "vscode" | "github" | "waitlist" | "site";
}

export interface Faq {
  q: string;
  a: string;
}

export interface PrivacySection {
  heading: string;
  body: string[];
}

export interface Product {
  slug: string;
  name: string;
  /** Short value proposition for cards (≤ 90 chars). */
  tagline: string;
  /** Hero headline on the product page. */
  headline: string;
  /** Hero subtitle, 1–2 sentences. */
  description: string;
  category: Category;
  platforms: Platform[];
  /** e.g. "macOS 14 Sonoma or later" */
  requirements?: string;
  status: Status;
  /** Optional nuance shown next to the status pill, e.g. "iPhone version in App Review". */
  statusNote?: string;
  featured?: boolean;
  /** Ordering weight on the homepage (lower first). */
  order: number;

  accent: string; // hex
  accentInk?: string; // text color on accent; defaults to white
  heroLayout?: "split" | "stacked";
  icon: string; // path under /public
  screenshots: Shot[];

  problem?: { heading: string; body: string };
  features: Feature[];
  workflow?: { heading: string; steps: Feature[] };
  differentiators?: Feature[];
  faq?: Faq[];

  primaryCta?: Cta;
  secondaryCtas?: Cta[];
  /** Existing standalone product website, linked from the page. */
  externalSite?: string;
  sourceUrl?: string;

  support: {
    email: string;
    topics?: Faq[];
  };
  /** Omit to skip the /privacy route (e.g. web demo with no app). */
  privacy?: {
    updated: string; // ISO date
    summary: string;
    sections: PrivacySection[];
    /** Items that need the owner to confirm before the policy is final. */
    ownerToConfirm?: string[];
  };

  seoTitle: string;
  seoDescription: string;
  keywords?: string[];
}

/** Slim shape passed to client components (keeps page payloads small). */
export type CardProduct = Pick<Product, "slug" | "name" | "tagline" | "category" | "platforms" | "status" | "statusNote" | "icon" | "accent" | "accentInk">;

export function toCard(p: Product): CardProduct {
  const { slug, name, tagline, category, platforms, status, statusNote, icon, accent, accentInk } = p;
  return { slug, name, tagline, category, platforms, status, statusNote, icon, accent, accentInk };
}
