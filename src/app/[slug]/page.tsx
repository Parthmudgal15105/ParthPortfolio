import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppIcon, PlatformBadges, ProductCtas, Screenshot, StatusPill } from "@/components/ui";
import { getProduct, products } from "@/content/registry";
import { site } from "@/content/site";
import { Rich } from "@/components/rich";
import type { Product } from "@/content/types";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    keywords: p.keywords,
    alternates: { canonical: `/${p.slug}` },
    openGraph: { title: p.seoTitle, description: p.seoDescription, url: `/${p.slug}`, type: "website" },
    twitter: { card: "summary_large_image", title: p.seoTitle, description: p.seoDescription },
  };
}

const category: Record<Product["category"], string> = {
  Productivity: "ProductivityApplication",
  "Music & audio": "MultimediaApplication",
  "Developer tools": "DeveloperApplication",
  "Health & fitness": "HealthApplication",
  "AI & research": "UtilitiesApplication",
  Utilities: "UtilitiesApplication",
};

function jsonLd(p: Product) {
  const url = `${site.url}/${p.slug}`;
  const app: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": p.platforms.includes("Web") && p.platforms.length === 1 ? "WebApplication" : "SoftwareApplication",
    name: p.name,
    description: p.description,
    url,
    image: `${url}/opengraph-image`,
    applicationCategory: category[p.category],
    operatingSystem: p.requirements ?? p.platforms.join(", "),
    author: { "@type": "Person", name: site.name, url: site.url },
  };
  // Only released products are described with a download location.
  if (p.status === "available" && p.primaryCta) app.downloadUrl = p.primaryCta.href;
  if (p.screenshots[0]) app.screenshot = `${site.url}${p.screenshots[0].src}`;

  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Apps", item: `${site.url}/#apps` },
      { "@type": "ListItem", position: 2, name: p.name, item: url },
    ],
  };
  const faq = p.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;
  return [app, crumbs, faq].filter(Boolean);
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const [hero, ...rest] = p.screenshots;
  const layout = p.heroLayout ?? (hero && hero.width / hero.height > 1.45 ? "stacked" : "split");
  const phones = rest.filter((s) => (s.frame ?? (s.height > s.width ? "phone" : "mac")) === "phone");
  const wides = rest.filter((s) => !phones.includes(s));
  const related = products.filter((o) => o.slug !== p.slug && (o.category === p.category || o.platforms.some((pl) => p.platforms.includes(pl)))).slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(p)) }} />

      <section className={`p-hero p-hero--${layout}`} aria-labelledby="p-title">
        <div className="wrap p-hero__grid">
          <div className="p-hero__copy">
            <div className="p-hero__id">
              <AppIcon product={p} size={72} className="p-hero__icon" />
              <div style={{ display: "grid", gap: 6, justifyItems: layout === "stacked" ? "center" : "start" }}>
                <span className="p-hero__name">{p.name}</span>
                <StatusPill status={p.status} note={p.statusNote} />
              </div>
            </div>
            <h1 id="p-title" className="p-hero__title display">
              {p.headline}
            </h1>
            <p className="lede">{p.description}</p>
            <ProductCtas product={p} />
            <PlatformBadges platforms={p.platforms} />
            {p.requirements || p.statusNote ? (
              <p className="p-hero__req">{[p.statusNote, p.requirements].filter(Boolean).join(" · ")}</p>
            ) : null}
          </div>
          {hero ? (
            <div className="p-hero__media">
              <Screenshot shot={hero} priority sizes={layout === "stacked" ? "(min-width: 1100px) 1040px, 100vw" : "(min-width: 960px) 58vw, 100vw"} />
            </div>
          ) : null}
        </div>
      </section>

      {p.problem ? (
        <section className="section" aria-labelledby="problem-title">
          <div className="wrap problem">
            <div>
              <p className="eyebrow">Why it exists</p>
              <h2 id="problem-title" className="h2 display" style={{ marginTop: 14 }}>
                {p.problem.heading}
              </h2>
            </div>
            <p>{p.problem.body}</p>
          </div>
        </section>
      ) : null}

      <section className="section" aria-labelledby="features-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Features</p>
            <h2 id="features-title" className="h2 display">
              What {p.name} does
            </h2>
          </div>
          <ul className="features">
            {p.features.map((f) => (
              <li key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </li>
            ))}
          </ul>
          {wides.length > 0 ? (
            <div className={`gallery ${wides.length > 1 ? "gallery--2" : ""}`} style={{ marginTop: 48 }}>
              {wides.slice(0, 4).map((s) => (
                <Screenshot key={s.src} shot={s} sizes="(min-width: 820px) 50vw, 100vw" />
              ))}
            </div>
          ) : null}
          {phones.length > 0 ? (
            <div className="gallery gallery--phones" style={{ marginTop: 48 }}>
              {phones.slice(0, 3).map((s) => (
                <Screenshot key={s.src} shot={s} />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {p.workflow ? (
        <section className="section" aria-labelledby="workflow-title">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">How it works</p>
              <h2 id="workflow-title" className="h2 display">
                {p.workflow.heading}
              </h2>
            </div>
            <ol className="steps">
              {p.workflow.steps.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {p.differentiators?.length ? (
        <section className="section" aria-labelledby="diff-title">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Why {p.name}</p>
              <h2 id="diff-title" className="h2 display">
                Built differently
              </h2>
            </div>
            <div className="diffs">
              {p.differentiators.map((d) => (
                <div key={d.title}>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {p.faq?.length ? (
        <section className="section" aria-labelledby="faq-title">
          <div className="wrap problem">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 id="faq-title" className="h2 display" style={{ marginTop: 14 }}>
                Questions, answered
              </h2>
              <p className="muted" style={{ marginTop: 16, fontSize: 16 }}>
                More help on the <Link href={`/${p.slug}/support`}>{p.name} support page</Link>.
              </p>
            </div>
            <div className="faq">
              {p.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>
                    <Rich text={f.a} />
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section" aria-labelledby="get-title">
        <div className="wrap">
          <div className="get">
            <AppIcon product={p} size={96} className="get__icon" />
            <div style={{ display: "grid", gap: 10 }}>
              <h2 id="get-title">{p.status === "available" ? `Get ${p.name}` : `${p.name} is on its way`}</h2>
              <p className="muted" style={{ color: "var(--ink-2)" }}>
                {p.status === "available"
                  ? p.tagline
                  : p.status === "in-review"
                    ? "Submitted to Apple and waiting for App Review. This page will link to the App Store as soon as it’s approved."
                    : p.status === "open-source"
                      ? "The source is public — build it yourself, or follow along as it matures."
                      : "It isn’t available to download yet. Email me if you’d like to hear when it is."}
              </p>
              <p style={{ fontSize: 15 }}>
                <Link href={`/${p.slug}/support`}>Support</Link>
                {p.privacy ? (
                  <>
                    {" · "}
                    <Link href={`/${p.slug}/privacy`}>Privacy policy</Link>
                  </>
                ) : null}
                {p.sourceUrl ? (
                  <>
                    {" · "}
                    <a href={p.sourceUrl}>Source code</a>
                  </>
                ) : null}
              </p>
            </div>
            <ProductCtas product={p} compact />
          </div>

          {related.length ? (
            <div style={{ marginTop: 56 }}>
              <p className="eyebrow">More from Parth</p>
              <ul className="related">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/${r.slug}`}>
                      <AppIcon product={r} size={28} />
                      {r.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/#apps">All apps →</Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
