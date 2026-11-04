import Link from "next/link";

export const metadata = { title: "Page not found — Parth Mudgal", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="wrap" style={{ display: "grid", gap: 18, justifyItems: "center" }}>
        <p className="eyebrow">404</p>
        <h1 className="display">Nothing here.</h1>
        <p className="lede">That page doesn’t exist — it may have moved. Every app lives one click from the homepage.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link className="btn" href="/#apps">
            Browse all apps
          </Link>
          <Link className="btn btn--ghost" href="/">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
