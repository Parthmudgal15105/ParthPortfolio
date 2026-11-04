# Deployment

## Current production state (recorded 2026-11-05, before any change)

- **Domain:** `parthmudgal.com`. GoDaddy nameservers (`ns05/ns06.domaincontrol.com`), apex `A 76.76.21.21` (Vercel), `www` CNAME `cname.vercel-dns.com` → 308 to the apex. HTTPS is valid. **No DNS changes are needed.**
- **Vercel project:** `portfolioparth` (team "Parth's projects", `prj_yEm7lQ2Ami1eI7Yy9xW61WcWgflO`).
  - Git-connected to `github.com/Parthmudgal15105/ParthPortfolio`; production branch is `master`.
  - Framework preset in the dashboard: Vite. This repo's `vercel.json` overrides it to `nextjs` per deployment.
- **Live production deployment:** `dpl_14SWYwFa5rexQTu1LHfaDduprzcN`, https://portfolioparth-qm9nfzr8n-parths-projects-13e50cb0.vercel.app (old Vite site, 13 Oct 2026). This is the rollback target.
- **Other product projects (untouched):** closer-web, catch-notes-support, bounce-music-support, transcription-vault, gym-journal, thelooper, codex-flow-waitlist, codex-plus-plus-waitlist, codeduel-cloud.

## Preview (done)

```bash
cd ParthPortfolio
vercel link --yes --project portfolioparth   # creates .vercel/ and .env.local (both gitignored)
vercel deploy --yes                          # preview only, production untouched
```

The verified preview is https://portfolioparth-me70t7hzo-parths-projects-13e50cb0.vercel.app. It is behind Vercel Deployment Protection, so open it while signed in to Vercel, or use `vercel curl <path> --deployment <url>`.

## Going to production (needs owner approval)

The project deploys `master` automatically, so production must come from `master`. Otherwise the next push to `master` would bring back the old site.

```bash
cd ParthPortfolio
git checkout master
git merge --ff-only site-v2        # or: git merge site-v2
git push origin master             # Vercel builds and promotes to parthmudgal.com
```

What this publishes to the **public** GitHub repo:
- the site source
- `research/*.md`
- ARCHITECTURE, DESIGN_SYSTEM, ADD_NEW_APP, QA_REPORT, DEPLOYMENT

PORTFOLIO.md, FINAL_REPORT.md and `reports/` are gitignored because they discuss private or excluded projects.

Alternative without touching git: `vercel deploy --prod`. A later push to `master` would then overwrite it.

## Post-deploy verification

```bash
for p in / /closer /catch/privacy /palmdeck/support /sitemap.xml /robots.txt /closer/opengraph-image /resume.pdf; do
  curl -s -o /dev/null -w "%{http_code} $p\n" https://parthmudgal.com$p; done
curl -sI https://www.parthmudgal.com | grep -i location    # → https://parthmudgal.com/
curl -sI https://dialafastener.com | grep -i location      # → https://parthmudgal.com/
```

Then:
1. Run Lighthouse on https://parthmudgal.com.
2. Submit `https://parthmudgal.com/sitemap.xml` in Google Search Console.

## Rollback

Either of these restores the old site within seconds, with no rebuild:

```bash
vercel rollback https://portfolioparth-qm9nfzr8n-parths-projects-13e50cb0.vercel.app
```

- Dashboard: portfolioparth → Deployments → the 13 Oct production deployment → "Promote to Production".

To make the rollback durable, revert `master`: `git revert -m 1 <merge-commit>` and push.

Old source is kept on these branches:
- `master` (before the merge)
- `archive/vite-live-snapshot`: the exact working tree that was live, including changes that were never committed.
