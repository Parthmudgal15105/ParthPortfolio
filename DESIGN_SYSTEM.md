# Design system

All tokens live in `src/app/globals.css`. Components are in `src/components/`.

## Principles

1. **The products are the hero.** The developer brand stays quiet: warm paper, ink and a serif display face. Each product brings its own color.
2. **Consistency comes from structure, not sameness.** Every product page shares the same type scale, spacing and components. Accent color, hero layout (`split` or `stacked`), imagery and copy differ per product.
3. **Honest UI.** Status pills and CTAs come straight from the registry. An in-review app can never render a download button.
4. **Fast by default.** Static HTML, self-hosted fonts, `next/image` with AVIF/WebP, minimal client JS, no trackers.

## Tokens

| Token | Light | Dark | Use |
|---|---|---|---|
| `--paper` | `#f5f3ee` | `#11110e` | page background |
| `--surface` | `#ffffff` | `#1b1b17` | cards |
| `--ink` / `--ink-2` / `--muted` | `#17160f` / `#3b3932` / `#6a665c` | `#eeebe3` / `#cfcbc0` / `#9c978b` | text, in three levels |
| `--line` / `--line-strong` | `#e1ddd3` / `#cbc6ba` | `#2c2b25` / `#3d3b33` | hairlines |
| `--accent` / `--accent-ink` | per product | per product | buttons, feature markers, glows |
| `--accent-soft` / `--accent-line` | `color-mix` of the accent into paper or line | same | tinted panels |
| status | ok `#1f7a4d`, info `#2950b8`, warn `#9a5b00` | lighter variants | status pills |

**Accents:** the registry requires `#rrggbb`. Each product's accent must reach 4.5:1 against its `accentInk`, because it is used as a button background.

**Type:**
- Geist (UI and body): 17px / 1.6.
- Instrument Serif (display): `.display`, used for h1/h2 at `clamp()` sizes.
- Geist Mono: eyebrows, badges and dates.

**Radius:** 8 / 14 / 22 / 32 px.
**Spacing:** sections use `clamp(56px, 9vw, 112px)`; the gutter is `clamp(16px, 4vw, 40px)`; max width is 1180px.

## Components

| Component | File | Notes |
|---|---|---|
| Header / Footer | `chrome.tsx` | Sticky blurred header. The footer lists every app from the registry |
| App card | `catalog.tsx` (`AppCard`) | Icon, name, category, tagline, platform badges, status pill. The whole card is clickable through a stretched link |
| Catalogue + filters | `catalog.tsx` (`Catalog`) | Platform filter buttons use `aria-pressed`, plus a live-region count |
| Featured card | `app/page.tsx` | Accent-tinted panel with the hero screenshot |
| Product hero | `app/[slug]/page.tsx` | `split` (copy plus window shot) or `stacked` (centered copy plus wide shot) |
| Status pill | `ui.tsx` `StatusPill` | Available / In App Review / Coming soon / Open source … |
| Platform badges | `ui.tsx` `PlatformBadges` | Shows a combined "iPhone & iPad" badge when both are present |
| CTAs | `ui.tsx` `ProductCtas`, `CtaButton` | Shows a static "Coming to the App Store" state when there is no CTA. External links announce that they open in a new tab |
| Screenshot | `ui.tsx` `Screenshot` | Frames: `mac` (rounded and shadowed), `web` (browser chrome), `phone` (bezel), `plain` |
| Gallery | CSS `.gallery`, `.gallery--2`, `.gallery--phones` | |
| Feature grid | CSS `.features` | Hairline grid; an accent square marks each item |
| Workflow steps | CSS `.steps` | Numbered with a CSS counter |
| FAQ | CSS `.faq` | Native `<details>`, works without JS and is keyboard accessible |
| Get / download block | CSS `.get` | Repeats the CTAs plus support and privacy links |
| Sub-nav | `subnav.tsx` | Overview, Support and Privacy, with `aria-current` |
| Privacy / support layouts | `app/[slug]/privacy`, `app/[slug]/support` | `.doc`, `.prose`, `.callout`, `.support-card` |
| Rich text | `rich.tsx` | Turns bare URLs and emails in registry text into links |
| OG image | `lib/og.tsx` | 1200×630 image per product: icon, headline, accent glow |

## Accessibility baseline

- Skip link; visible 2.5px focus ring on everything (`:focus-visible`).
- Semantic landmarks, one h1 per page, and sections labelled by their headings.
- Touch targets of at least 40px (nav, filters, sub-nav) and 48px (buttons).
- `prefers-reduced-motion` disables smooth scroll and transitions. `prefers-color-scheme` gets full dark tokens.
- Decorative icons use `alt=""`. Screenshots require descriptive alt text, which the registry validation enforces.
