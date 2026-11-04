import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/content/registry";
import { Rich } from "@/components/rich";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return products.filter((p) => p.privacy).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p?.privacy) return {};
  return {
    title: `${p.name} Privacy Policy`,
    description: `How ${p.name} handles your data. ${p.privacy.summary}`.slice(0, 160),
    alternates: { canonical: `/${p.slug}/privacy` },
  };
}

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00Z");
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export default async function PrivacyPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p?.privacy) notFound();
  const { privacy } = p;

  return (
    <article className="doc">
      <div className="wrap">
        <header className="doc__head">
          <p className="eyebrow">Privacy policy</p>
          <h1 className="display">{p.name} Privacy Policy</h1>
          <p className="muted">
            Last updated <time dateTime={privacy.updated}>{formatDate(privacy.updated)}</time>
          </p>
          <p className="callout">
            <strong>In short: </strong>
            {privacy.summary}
          </p>
        </header>
        <div className="prose">
          {privacy.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((para, i) => (
                <p key={i}>
                  <Rich text={para} />
                </p>
              ))}
            </section>
          ))}
          <section>
            <h2>Contact</h2>
            <p>
              {p.name} is made by Parth Mudgal, an independent developer in Delhi, India. Questions about this policy or your data:{" "}
              <a href={`mailto:${p.support.email}?subject=${encodeURIComponent(p.name + " privacy")}`}>{p.support.email}</a>.
            </p>
            <p>
              <Link href={`/${p.slug}`}>← Back to {p.name}</Link> · <Link href={`/${p.slug}/support`}>Support</Link>
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
