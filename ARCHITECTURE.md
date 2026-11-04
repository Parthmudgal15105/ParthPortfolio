# Architecture

## Decision: Option C (hybrid), centered on a unified Next.js site

- **parthmudgal.com** is one Next.js 16 (App Router, React 19, TypeScript) project, deployed on the **existing** Vercel project `portfolioparth`. That project already owns the apex domain, so there are no DNS or domain changes.
- Every product page, support page and privacy policy is generated from **one registry** (`src/content/registry.ts` plus one file per product in `src/content/products/`).
- Existing standalone product sites (`closer-web`, `catch-notes-support`, `bounce-music-support`, `transcription-vault`, `gym-journal`, `thelooper`, GitHub Pages sites) stay live and untouched. Each product page links to its standalone site ("Product site ↗"). They may be the URLs registered in App Store Connect / Chrome Web Store, so breaking them is not an option.

### Why not proxy the existing sites under `/{slug}` (Option B)?

- Path routing to other Vercel projects requires rewrites with every app built under a matching `basePath`. That means rebuilding `closer-web` with `basePath: "/closer"`, which breaks its own `*.vercel.app` root and any store links pointing at it. The static sites (Catch, LoopStudio, Transcription) use root-absolute asset paths (`/styles.css`, `/assets/...`), so a rewrite would serve broken CSS and images.
- Vercel Microfrontends would solve the routing, but it adds per-project configuration and couples deployments. Five of the eight sites are single static pages, so that complexity buys nothing.
- Attaching `parthmudgal.com` to several projects does **not** do path routing. One domain resolves to one project.

### Why not keep the old Vite SPA?

- It client-rendered everything (an 814-byte HTML shell), so crawlers and social previews saw no product content. Product pages need SSG HTML, per-page metadata, OG images, a sitemap and structured data.
- It shipped two Three.js scenes (about 18 MB of GLTF and textures, plus an 805 KB JS chunk) for decoration.

## Rendering

- Everything is statically generated at build time. `generateStaticParams` with `dynamicParams = false` returns 404 for unknown slugs.
- Pages: `/` (home), `/{slug}`, `/{slug}/support` (all 13), `/{slug}/privacy` (products with a policy), `/sitemap.xml`, `/robots.txt`, `/opengraph-image` and `/{slug}/opengraph-image` (generated with `next/og` at build).
- Client JS is limited to the catalogue filter and the product sub-nav's active state. Client components receive `CardProduct` (a slim projection), never full product records.
- Fonts (Geist, Geist Mono, Instrument Serif) are self-hosted through `next/font`. No third-party requests and no analytics.

## Registry validation (build-time)

`validate()` in `registry.ts` throws during `next build` on any of these:

- invalid, duplicate or reserved slug
- missing required field
- invalid accent hex
- screenshot without alt text or dimensions
- fewer than 3 features
- an **in-review** product with an App Store or download CTA (truthfulness guard)
- a **coming-soon** product with any CTA other than a waitlist

## Redirects (next.config.ts and vercel.json)

- The legacy domains `dialafastener.com`, `www.dialafastener.com` and `portfolioparth.vercel.app` keep their 308s to parthmudgal.com. These are unchanged from the old `vercel.json`.
- `/bounce` → `/loopstudio`, `/gym-journal` → `/gym`, `/transcript-vault` → `/transcription`, `/apps` → `/#apps`.

## Preserved URLs

`/resume.pdf`, `/logo.svg` and `/projects/*.{png,jpg}` remain in `public/`, so old links and caches keep working.

## Vercel settings

`vercel.json` sets `"framework": "nextjs"`, `npm ci`, `npm run build`. This overrides the project's old "Vite" preset per deployment, so no dashboard change is needed.

## Branching and rollback

- `master` is the old Vite site as last committed.
- `archive/vite-live-snapshot` is the exact working tree that was live, including uncommitted changes, committed so nothing was lost.
- `site-v2` is this site.
- Rollback: `vercel rollback <previous-deployment-url>` or "Promote to Production" on the last Vite deployment in the dashboard. See DEPLOYMENT.md.
