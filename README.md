# parthmudgal.com

Personal site and product pages for Parth Mudgal's apps. Next.js 16 (App Router), fully static, deployed on Vercel.

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # validates the product registry, then builds every page
```

- Products: one file per app in `src/content/products/`, registered in `src/content/registry.ts`.
- Docs: [ARCHITECTURE.md](ARCHITECTURE.md), [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md), [ADD_NEW_APP.md](ADD_NEW_APP.md), [DEPLOYMENT.md](DEPLOYMENT.md).
