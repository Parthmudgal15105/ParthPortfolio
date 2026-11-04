# QA report

Run 2026-11-05 against:
- the production build (`next build && next start`, localhost:3100)
- Vercel preview https://portfolioparth-me70t7hzo-parths-projects-13e50cb0.vercel.app (protected; checked with `vercel curl`)

## Results

| Area | Check | Result |
|---|---|---|
| Build | `tsc --noEmit`, `next build` (58 static pages, registry validation) | ✅ Pass |
| Routes | All 40 sitemap URLs (home + 13 × overview, support, privacy) return 200, locally and on the preview | ✅ 40/40 |
| Special routes | `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, 13 × `/{slug}/opengraph-image` (PNG), `/resume.pdf`, `/logo.svg`, `/projects/*` | ✅ 200 |
| 404 | `/nope` and `/nope/privacy` → 404 with the custom page | ✅ |
| Redirects | `/bounce`, `/gym-journal`, `/transcript-vault` → 308 to the canonical slug | ✅ |
| Internal links | Every `href` on every page (144 unique) | ✅ 0 broken |
| External links | All outbound links: store listings, GitHub releases, product sites, GitHub, Marketplace | ✅ 200. Codeforces 403 and LinkedIn 999 block bots but work in a browser |
| Images | Every `src` and `srcset` width on every page (~500 URLs) returns `image/*` | ✅ after fix (see below) |
| Images on Vercel | 83 sampled `/_next/image` URLs on the preview → 200 AVIF | ✅ |
| Responsive | Horizontal overflow at 320 / 375 / 768 / 1024 / 1440 px on all 40 pages (in-browser iframe measurement) | ✅ after 2 fixes |
| Navigation | Card → product → sub-nav Support (`aria-current` set) → back → back → forward; direct load and refresh of nested routes | ✅ |
| Catalogue filter | All 13, Mac 8, iPhone & iPad 5, Browser & editor 5, Android 1; `aria-pressed` toggles | ✅ |
| Keyboard | First Tab reaches the skip link (becomes visible); `:focus-visible` gives a 2.5px solid ring on links and buttons | ✅ |
| Semantics | One h1 per page; every `<img>` has `alt`; no empty links; canonical, description and `og:image` on every page | ✅ |
| Accessibility (Lighthouse 12) | Light: home, closer, catch, catch/privacy, palmdeck, loopstudio, gym, transcription. Dark: home, gesturepad, bestnotch, closer | ✅ 100 on all |
| Best practices / SEO (Lighthouse) | Same pages | ✅ 100 / 100 |
| Performance (Lighthouse mobile, throttled, local `next start`) | See the table below | 95–97 |
| Security headers (preview) | nosniff, Referrer-Policy, X-Frame-Options SAMEORIGIN, Permissions-Policy | ✅ |
| Copy truthfulness | No in-review app has a store or download CTA (build-time guard plus grep); no prices; no hype words; no personal identifiers rendered | ✅ |

## Performance (actual measurements, Lighthouse 12 mobile preset)

| Page | Perf | FCP | LCP | CLS | TBT | Transfer |
|---|---|---|---|---|---|---|
| `/` | 95 | 0.9 s | 2.9 s | 0 | 20 ms | 337 KB |
| `/closer` | 96 | 0.8 s | 2.8 s | 0 | 20 ms | 353 KB |
| `/catch` | 96 | 0.8 s | 2.8 s | 0 | 20 ms | 355 KB |
| `/palmdeck` | 96 | 0.8 s | 2.7 s | 0 | 20 ms | 337 KB |
| `/loopstudio` | 97 | 0.8 s | 2.6 s | 0 | 20 ms | 324 KB |
| `/gym` | 96 | 0.8 s | 2.8 s | 0 | 20 ms | 369 KB |
| `/transcription` | 96 | 0.8 s | 2.7 s | 0 | 10 ms | 338 KB |

These were measured locally, not on the Vercel CDN. LCP is the hero screenshot. For comparison, the old site shipped a 1.2 MB main bundle (later 316 KB plus an 805 KB 3D chunk) and about 18 MB of GLTF/texture assets.

## Defects found and fixed

1. **Optimized images returned 400** (critical). Next 16 only allows quality 75 by default, and screenshots requested 82. Fixed with `images.qualities: [75, 82]`, then re-verified locally and on the preview.
   - My first image check missed this: it only inspected images that had finished loading. It was replaced by fetching every `src`/`srcset` URL.
   - The first Lighthouse numbers were taken while this bug existed. The table above is from the re-run.
2. `/bestnotch/privacy` overflowed at 375 px because of a long GitHub URL. Fixed with `overflow-wrap: anywhere` on prose, FAQ and callouts.
3. The homepage overflowed at 320 px because of the email button in Contact. Buttons there now wrap.
4. Chrome permission patterns (`https://chatgpt.com/*`) were being turned into links. They now render as `<code>`.
5. Featured grid layout: four cards left an orphan in 3 columns, so it is now 2×2. Feature grids showed an empty-cell color; galleries had orphan items and a left-aligned single phone; the project list was 3+1, now 2 columns.
6. The Palmdeck differentiator implied a paid price ("one purchase") while the paid agreement is pending. Reworded to stay price-neutral.

## Not covered or limitations

- No real-device testing (iOS Safari, Android Chrome). Responsive checks used Chromium at emulated widths.
- No screen-reader walkthrough (VoiceOver). Automated checks and semantics only.
- Lighthouse was not run against the Vercel preview because Deployment Protection blocks unauthenticated tools. Run it on production after launch.
- Production (parthmudgal.com) is **not** updated yet. It still serves the old site and is waiting for owner approval. See DEPLOYMENT.md.
- ChatGPT-in-Chrome critique was not used. Research and copy review were done by Claude workers using web search. Sources are in `research/*.md`.
