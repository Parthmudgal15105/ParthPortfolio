import Link from "next/link";
import Image from "next/image";
import { Catalog } from "@/components/catalog";
import { Arrow, Github } from "@/components/icons";
import { PlatformBadges, StatusPill, accentStyle } from "@/components/ui";
import { products } from "@/content/registry";
import { achievements, projects, site, stack, timeline } from "@/content/site";
import { toCard } from "@/content/types";

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const availableCount = products.filter((p) => p.status === "available").length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
    sameAs: [site.links.github, site.links.linkedin, site.links.x, site.links.codeforces],
    alumniOf: "Maharaja Agrasen Institute of Technology",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="home-hero">
        <div className="wrap">
          <p className="eyebrow">Parth Mudgal · {site.role}</p>
          <h1 className="home-hero__title display" style={{ marginTop: 18 }}>
            Small, careful software for Mac, iPhone <em>&amp; the browser.</em>
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            I design and build focused apps that solve one everyday problem well — quitting a pile of Mac apps, catching a thought before it’s gone, sketching a song idea. Most of them work entirely on your device, with no accounts and no tracking.
          </p>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <a className="btn" href="#apps">
              Browse {products.length} apps <Arrow />
            </a>
            <a className="btn btn--ghost" href={site.links.github}>
              <Github /> GitHub
            </a>
          </div>
          <div className="home-hero__meta">
            <span>{site.location}</span>
            <span>
              {availableCount} available now · {products.filter((p) => p.status === "in-review").length} in App Review
            </span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </section>

      <section className="section" id="apps" aria-labelledby="featured-title" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Featured</p>
            <h2 className="h2 display" id="featured-title">
              Apps worth a look
            </h2>
          </div>
          <div className="featured">
            {featured.map((p) => {
              const hero = p.screenshots[0];
              const phone = hero && hero.height > hero.width;
              return (
                <article key={p.slug} className="feature-card" style={accentStyle(p)}>
                  <div className="feature-card__body">
                    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                      <Image src={p.icon} alt="" width={44} height={44} style={{ borderRadius: 11 }} unoptimized={p.icon.endsWith(".svg")} />
                      <StatusPill status={p.status} note={p.statusNote} />
                    </div>
                    <h3 className="feature-card__title">
                      <Link href={`/${p.slug}`}>{p.name}</Link>
                    </h3>
                    <p className="muted" style={{ color: "var(--ink-2)" }}>
                      {p.tagline}
                    </p>
                    <PlatformBadges platforms={p.platforms} />
                  </div>
                  {hero ? (
                    <div className={`feature-card__media${phone ? " feature-card__media--phone" : ""}`}>
                      <Image src={hero.src} alt="" width={hero.width} height={hero.height} sizes="(min-width: 760px) 45vw, 90vw" quality={75} />
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
          <div style={{ marginTop: 72 }}>
            <Catalog products={products.map(toCard)} />
          </div>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Engineering work</p>
            <h2 className="h2 display" id="work-title">
              Systems &amp; experiments
            </h2>
            <p className="lede">Backend, AI and open-source work that isn’t an app you download — but shows how I build.</p>
          </div>
          <ul className="project-list">
            {projects.map((p) => (
              <li key={p.name} className="project">
                <p className="eyebrow">{p.kind}</p>
                <h3>{p.name}</h3>
                <p>{p.body}</p>
                <p className="badge" style={{ alignSelf: "flex-start", height: "auto", padding: "4px 10px" }}>
                  {p.stack}
                </p>
                <div className="project__links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="about" aria-labelledby="about-title">
        <div className="wrap about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="h2 display" id="about-title" style={{ marginTop: 14 }}>
              Hi, I’m Parth.
            </h2>
            <p className="lede" style={{ marginTop: 20 }}>
              I’m a computer science student in Delhi and a competitive programmer who ships real software. I care about native feel, honest privacy and finishing things — taking apps from a first sketch to signed builds, store submissions and their own product pages.
            </p>
            <div className="stat-row">
              {achievements.map((a) => (
                <a key={a.label} className="stat" href={a.href}>
                  <strong>{a.value}</strong>
                  <span>{a.label}</span>
                </a>
              ))}
            </div>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <a className="btn btn--ghost" href={site.resume}>
                Download résumé (PDF)
              </a>
            </div>
          </div>
          <div>
            <ol className="timeline" aria-label="Experience and education">
              {timeline.map((t) => (
                <li key={t.title}>
                  <time>{t.when}</time>
                  <div>
                    <h3>{t.title}</h3>
                    <p className="muted" style={{ marginTop: 2 }}>
                      {t.org}
                    </p>
                    <p>{t.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <dl className="stack-list">
              {stack.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <div className="wrap">
          <div className="contact">
            <p className="eyebrow muted">Contact &amp; support</p>
            <h2 className="h2 display" id="contact-title">
              Questions, bugs or ideas? Write to me.
            </h2>
            <p className="muted" style={{ maxWidth: "60ch" }}>
              I read every message. For app help, each product has a support page with fixes for common problems — or just email and mention the app’s name.
            </p>
            <div className="btn-row">
              <a className="btn" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="btn btn--ghost" href={site.links.linkedin}>
                LinkedIn
              </a>
              <a className="btn btn--ghost" href={site.links.x}>
                X / Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
