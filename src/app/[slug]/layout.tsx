import { notFound } from "next/navigation";
import { ProductSubnav } from "@/components/subnav";
import { accentStyle } from "@/components/ui";
import { getProduct, products } from "@/content/registry";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductLayout({ children, params }: { children: React.ReactNode; params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return (
    <div className="product" style={accentStyle(product)}>
      <ProductSubnav slug={product.slug} name={product.name} icon={product.icon} hasPrivacy={Boolean(product.privacy)} />
      {children}
    </div>
  );
}
