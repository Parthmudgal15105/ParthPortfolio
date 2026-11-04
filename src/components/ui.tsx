import Image from "next/image";
import type { CSSProperties } from "react";
import type { Cta, Platform, Product, Shot, Status } from "@/content/types";
import { platformLabel, statusLabel } from "@/content/labels";
import { ArrowUpRight, Clock, CtaIcon, PlatformIcon } from "./icons";

export function accentStyle(p: Pick<Product, "accent" | "accentInk">): CSSProperties {
  return { ["--accent" as string]: p.accent, ["--accent-ink" as string]: p.accentInk ?? "#ffffff" };
}

export function StatusPill({ status, note }: { status: Status; note?: string }) {
  return (
    <span className={`pill pill--${status}`}>
      <span className="pill__dot" aria-hidden="true" />
      <span className="pill__label">{statusLabel[status]}</span>
      {note ? <span className="visually-hidden">— {note}</span> : null}
    </span>
  );
}

/** Collapses iOS + iPadOS into one badge when both are present. */
export function PlatformBadges({ platforms }: { platforms: Platform[] }) {
  const list = platforms.filter((p) => !(p === "iPadOS" && platforms.includes("iOS")));
  return (
    <ul className="badges" aria-label="Platforms">
      {list.map((p) => (
        <li key={p} className="badge">
          <PlatformIcon platform={p} />
          {p === "iOS" && platforms.includes("iPadOS") ? "iPhone & iPad" : platformLabel[p]}
        </li>
      ))}
    </ul>
  );
}

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function CtaButton({ cta, variant = "accent" }: { cta: Cta; variant?: "accent" | "ghost" }) {
  const ext = isExternal(cta.href);
  return (
    <a
      className={`btn btn--${variant}`}
      href={cta.href}
      {...(ext ? { target: "_blank", rel: "noopener" } : {})}
    >
      <CtaIcon kind={cta.kind} />
      {cta.label}
      {ext ? <span className="visually-hidden"> (opens in a new tab)</span> : null}
    </a>
  );
}

/** Primary action area. Never renders a download for products that aren't available. */
export function ProductCtas({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { primaryCta, secondaryCtas = [], status, externalSite } = product;
  const pending: Partial<Record<Status, string>> = {
    "in-review": "Coming to the App Store",
    "coming-soon": "Coming soon",
    "in-development": "In development",
    beta: "Beta",
  };
  return (
    <div className="btn-row">
      {primaryCta ? (
        <CtaButton cta={primaryCta} />
      ) : (
        <span className="btn btn--static" role="status">
          <Clock />
          {pending[status] ?? "Not yet available"}
        </span>
      )}
      {secondaryCtas.map((c) => (
        <CtaButton key={c.href} cta={c} variant="ghost" />
      ))}
      {!compact && externalSite ? (
        <a className="btn btn--ghost" href={externalSite} target="_blank" rel="noopener">
          Product site <ArrowUpRight />
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      ) : null}
    </div>
  );
}

export function Screenshot({ shot, priority = false, sizes, caption }: { shot: Shot; priority?: boolean; sizes?: string; caption?: string }) {
  const frame = shot.frame ?? (shot.height > shot.width ? "phone" : "mac");
  return (
    <figure className={`shot shot--${frame}`}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        priority={priority}
        sizes={sizes ?? (frame === "phone" ? "(min-width: 820px) 30vw, 80vw" : "(min-width: 960px) 60vw, 100vw")}
        quality={82}
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function AppIcon({ product, size, className }: { product: Product; size: number; className?: string }) {
  return <Image src={product.icon} alt="" width={size} height={size} className={className} unoptimized={product.icon.endsWith(".svg")} />;
}
