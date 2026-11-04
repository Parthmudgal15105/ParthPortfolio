"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { CardProduct as Product } from "@/content/types";
import { platformFilters } from "@/content/labels";
import { PlatformBadges, StatusPill, accentStyle } from "./ui";

export function AppCard({ product }: { product: Product }) {
  return (
    <article className="app-card" style={accentStyle(product)}>
      <div className="app-card__top">
        <Image src={product.icon} alt="" width={56} height={56} className="app-card__icon" unoptimized={product.icon.endsWith(".svg")} />
        <div>
          <h3 className="app-card__name">
            <Link href={`/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="app-card__cat">{product.category}</p>
        </div>
      </div>
      <p className="app-card__tag">{product.tagline}</p>
      <div className="app-card__foot">
        <PlatformBadges platforms={product.platforms} />
        <StatusPill status={product.status} note={product.statusNote} />
      </div>
    </article>
  );
}

export function Catalog({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState("all");
  const active = platformFilters.find((f) => f.id === filter)!;
  const shown = active.match.length === 0 ? products : products.filter((p) => p.platforms.some((pl) => active.match.includes(pl)));
  const available = platformFilters.filter((f) => f.match.length === 0 || products.some((p) => p.platforms.some((pl) => f.match.includes(pl))));

  return (
    <>
      <div className="catalog-head">
        <div>
          <p className="eyebrow">Every app</p>
          <h2 className="h2 display" id="catalog-title">
            The full catalogue
          </h2>
        </div>
        <div className="filters" role="group" aria-label="Filter apps by platform">
          {available.map((f) => (
            <button key={f.id} type="button" className="filter" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <p className="visually-hidden" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "app" : "apps"}
      </p>
      <ul className="app-grid" aria-labelledby="catalog-title">
        {shown.map((p) => (
          <li key={p.slug}>
            <AppCard product={p} />
          </li>
        ))}
      </ul>
    </>
  );
}
