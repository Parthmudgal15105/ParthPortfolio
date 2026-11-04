# Adding a new app to parthmudgal.com

Each product is one file plus a folder of assets. The registry builds the page, support page, privacy page, sitemap entries, OG image, homepage card and footer link.

## 1. Discover the product and its repository

- Find the project folder and the most advanced branch or worktree.
- Read the README, release/state docs, store metadata, Info.plist/manifest (bundle id, minimum OS) and any existing website.

## 2. Verify capabilities and status

- List only features you can point to in code or docs.
- Pick a truthful `status`:
  - `available`: a public link works today; check it with `curl -I`.
  - `in-review`: submitted and waiting. **No store CTA.**
  - `coming-soon`: built but not submitted.
  - `open-source`: public source, no trusted binary.
  - `beta` / `in-development`
- Never state a price, rating or download count you can't verify.

## 3. Gather assets → `public/apps/{slug}/`

```bash
sips -Z 512 path/to/icon-1024.png --out public/apps/{slug}/icon.png
sips -s format jpeg -s formatOptions 80 -Z 1800 path/to/mac-shot.png --out public/apps/{slug}/01-main.jpg
sips -s format jpeg -s formatOptions 80 -Z 1600 path/to/iphone-shot.png --out public/apps/{slug}/02-phone.jpg
sips -g pixelWidth -g pixelHeight public/apps/{slug}/*.jpg   # record width/height
```

Use real screenshots only. Don't use images that show personal data.

## 4. Research the market → `research/{slug}.md`

Cover audience, problem, competitors (with URLs and date), keywords, positioning, and the workflows worth demoing. Tag claims as `[verified-product]`, `[verified-external]`, `[proposed-copy]` or `[hypothesis]`. Use `reports/WORKER_BRIEF.md` as the full template.

## 5. Produce the page

1. Create `src/content/products/{slug}.ts`. Copy a similar product, such as `closer.ts` (available) or `catch.ts` (in review), and edit it.
2. Register it in `src/content/registry.ts`: add one import and one array entry.
3. Port the product's real privacy policy into `privacy`. Put anything uncertain in `ownerToConfirm`.
4. Pick an accent with at least 4.5:1 contrast against `accentInk`.

## 6. Run the acceptance tests

```bash
npm run typecheck
npm run build          # registry validation runs here and fails on bad data
npm start              # then open http://localhost:3000/{slug}
```

Check the new page, `/support`, `/privacy`, the homepage card and its filter, and `/{slug}/opengraph-image` at phone, tablet and desktop widths.

## 7. Deploy

```bash
npx vercel deploy            # preview URL → re-check pages there
npx vercel deploy --prod     # or merge to the production branch
```

## 8. Update the sitemap and stores

The sitemap is generated automatically. Submit `https://parthmudgal.com/sitemap.xml` in Google Search Console after big additions.

When the store listing goes live:
1. Switch `status` to `available`.
2. Add the `primaryCta`.
3. Use `https://parthmudgal.com/{slug}/support` and `/privacy` as the store's Support and Privacy URLs.
