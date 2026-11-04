import type { MetadataRoute } from "next";
import { products } from "@/content/registry";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...products.flatMap((p) => [
      { url: `${site.url}/${p.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: p.status === "available" ? 0.9 : 0.7 },
      { url: `${site.url}/${p.slug}/support`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 },
      ...(p.privacy ? [{ url: `${site.url}/${p.slug}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 }] : []),
    ]),
  ];
}
