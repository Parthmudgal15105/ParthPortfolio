"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function ProductSubnav({ slug, name, icon, hasPrivacy }: { slug: string; name: string; icon: string; hasPrivacy: boolean }) {
  const path = usePathname();
  const items = [
    { href: `/${slug}`, label: "Overview" },
    { href: `/${slug}/support`, label: "Support" },
    ...(hasPrivacy ? [{ href: `/${slug}/privacy`, label: "Privacy" }] : []),
  ];
  return (
    <nav className="p-subnav" aria-label={`${name} sections`}>
      <div className="wrap p-subnav__row">
        <Link href={`/${slug}`} className="p-subnav__crumb" style={{ padding: "8px 4px" }}>
          <Image src={icon} alt="" width={24} height={24} unoptimized={icon.endsWith(".svg")} />
          {name}
        </Link>
        {items.map((i) => (
          <Link key={i.href} href={i.href} aria-current={path === i.href ? "page" : undefined}>
            {i.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
