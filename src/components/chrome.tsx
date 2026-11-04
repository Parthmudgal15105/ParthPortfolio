import Link from "next/link";
import { products } from "@/content/registry";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap site-header__row">
        <Link href="/" className="brand" aria-label="Parth Mudgal — home">
          <span className="brand__mark" aria-hidden="true">
            P
          </span>
          <span>Parth Mudgal</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/#apps">Apps</Link>
          <Link href="/#work" className="nav__hide-sm">
            Work
          </Link>
          <Link href="/#about" className="nav__hide-sm">
            About
          </Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const half = Math.ceil(products.length / 2);
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__grid">
          <div>
            <h2>Apps</h2>
            <ul>
              {products.slice(0, half).map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 aria-hidden="true">&nbsp;</h2>
            <ul>
              {products.slice(half).map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Help</h2>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>Email support</a>
              </li>
              <li>
                <Link href="/#apps">Find an app’s support page</Link>
              </li>
              <li>
                <a href={site.resume}>Résumé (PDF)</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Elsewhere</h2>
            <ul>
              <li>
                <a href={site.links.github} rel="me">
                  GitHub
                </a>
              </li>
              <li>
                <a href={site.links.linkedin} rel="me">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.links.x} rel="me">
                  X
                </a>
              </li>
              <li>
                <a href={site.links.codeforces}>Codeforces</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer__base">
          <span>© {new Date().getFullYear()} Parth Mudgal · {site.location}</span>
          <span>Made by hand. No trackers on this site.</span>
        </div>
      </div>
    </footer>
  );
}
