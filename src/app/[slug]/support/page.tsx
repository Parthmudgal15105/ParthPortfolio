import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/content/registry";
import { statusLabel } from "@/content/labels";
import { Rich } from "@/components/rich";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} Support — Help & Contact`,
    description: `Get help with ${p.name}: troubleshooting, common questions and how to contact the developer directly.`,
    alternates: { canonical: `/${p.slug}/support` },
  };
}

export default async function SupportPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const topics = [...(p.support.topics ?? []), ...(p.faq ?? [])];
  const mail = `mailto:${p.support.email}?subject=${encodeURIComponent(p.name + " support")}`;

  return (
    <article className="doc">
      <div className="wrap">
        <header className="doc__head">
          <p className="eyebrow">Support</p>
          <h1 className="display">{p.name} Support</h1>
          <p className="lede">Something not working, or a question about {p.name}? Start with the answers below, or email me directly — I’m the developer and I reply personally.</p>
        </header>

        <div className="support-cards">
          <div className="support-card">
            <h2>Email the developer</h2>
            <p>Include your {p.platforms.join("/")} version and what you expected to happen. Screenshots help.</p>
            <a href={mail}>{p.support.email}</a>
          </div>
          <div className="support-card">
            <h2>Status &amp; requirements</h2>
            <p>
              {statusLabel[p.status]}
              {p.statusNote ? ` — ${p.statusNote}` : ""}.{p.requirements ? ` Requires ${p.requirements.replace(/^requires\s+/i, "")}.` : ""}
            </p>
            <Link href={`/${p.slug}`}>{p.name} overview</Link>
          </div>
          {p.privacy ? (
            <div className="support-card">
              <h2>Privacy</h2>
              <p>{p.privacy.summary}</p>
              <Link href={`/${p.slug}/privacy`}>Read the privacy policy</Link>
            </div>
          ) : null}
        </div>

        {topics.length ? (
          <section className="prose" aria-labelledby="topics-title" style={{ maxWidth: 880 }}>
            <h2 id="topics-title" style={{ marginTop: 0 }}>
              Troubleshooting &amp; common questions
            </h2>
            <div className="faq">
              {topics.map((t) => (
                <details key={t.q}>
                  <summary>{t.q}</summary>
                  <p>
                    <Rich text={t.a} />
                  </p>
                </details>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
