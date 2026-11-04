import { getProduct, products } from "@/content/registry";
import { statusLabel } from "@/content/labels";
import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Product overview";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug)!;
  return ogImage({
    eyebrow: `${p.name} · ${statusLabel[p.status]}`,
    title: p.headline,
    subtitle: p.tagline,
    accent: p.accent,
    icon: p.icon,
  });
}
