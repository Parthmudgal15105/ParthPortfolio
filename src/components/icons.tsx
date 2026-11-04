import type { SVGProps } from "react";
import type { Cta, Platform } from "@/content/types";

type P = SVGProps<SVGSVGElement>;
const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const Apple = (p: P) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M16.37 12.6c-.02-2.27 1.86-3.36 1.94-3.41-1.06-1.55-2.7-1.76-3.28-1.78-1.4-.14-2.73.82-3.44.82-.71 0-1.8-.8-2.96-.78-1.52.02-2.93.89-3.71 2.25-1.58 2.75-.4 6.82 1.14 9.05.75 1.09 1.65 2.32 2.82 2.27 1.13-.04 1.56-.73 2.93-.73 1.37 0 1.75.73 2.95.71 1.22-.02 1.99-1.11 2.73-2.21.86-1.27 1.22-2.5 1.24-2.56-.03-.01-2.37-.91-2.4-3.62ZM14.12 5.9c.62-.76 1.05-1.81.93-2.86-.9.04-1.99.6-2.64 1.36-.58.67-1.09 1.75-.95 2.78 1 .08 2.03-.51 2.66-1.28Z" />
  </svg>
);
export const Download = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M5 19h14" />
  </svg>
);
export const Globe = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.1 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.1-3.6-8.5S9.6 5.8 12 3.5Z" />
  </svg>
);
export const ChromeIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="3.3" />
    <path d="M12 8.7h8M9.1 13.7 5 6.6M14.9 13.7 11 20.5" />
  </svg>
);
export const Code = (p: P) => (
  <svg {...base} {...p}>
    <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5" />
  </svg>
);
export const Github = (p: P) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.47.09.65-.2.65-.46v-1.6c-2.65.58-3.2-1.27-3.2-1.27-.44-1.1-1.06-1.4-1.06-1.4-.87-.6.06-.58.06-.58.96.07 1.46.98 1.46.98.85 1.46 2.24 1.04 2.79.8.09-.62.33-1.04.6-1.28-2.11-.24-4.33-1.06-4.33-4.7 0-1.04.37-1.89.98-2.55-.1-.24-.42-1.21.09-2.53 0 0 .8-.26 2.62.97a9.1 9.1 0 0 1 4.77 0c1.82-1.23 2.62-.97 2.62-.97.52 1.32.19 2.29.1 2.53.6.66.97 1.51.97 2.55 0 3.65-2.22 4.45-4.34 4.69.34.3.65.88.65 1.78v2.63c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" />
  </svg>
);
export const Arrow = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14m0 0-5-5m5 5-5 5" />
  </svg>
);
export const ArrowUpRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const Clock = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);
export const Phone = (p: P) => (
  <svg {...base} {...p}>
    <rect x="7" y="2.8" width="10" height="18.4" rx="2.4" />
    <path d="M11 18h2" />
  </svg>
);
export const Laptop = (p: P) => (
  <svg {...base} {...p}>
    <rect x="4.5" y="5" width="15" height="10.5" rx="1.6" />
    <path d="M2.5 19h19" />
  </svg>
);
export const Android = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 10.5a6 6 0 0 1 12 0V17H6v-6.5ZM8 5l1.3 2M16 5l-1.3 2M10 13h.01M14 13h.01" />
  </svg>
);

export function PlatformIcon({ platform, ...p }: { platform: Platform } & P) {
  switch (platform) {
    case "macOS":
      return <Laptop {...p} />;
    case "iOS":
    case "iPadOS":
      return <Phone {...p} />;
    case "Chrome":
      return <ChromeIcon {...p} />;
    case "Web":
      return <Globe {...p} />;
    case "VS Code":
      return <Code {...p} />;
    case "Android":
      return <Android {...p} />;
  }
}

export function CtaIcon({ kind, ...p }: { kind: Cta["kind"] } & P) {
  switch (kind) {
    case "app-store":
      return <Apple {...p} />;
    case "download":
      return <Download {...p} />;
    case "chrome":
      return <ChromeIcon {...p} />;
    case "vscode":
      return <Code {...p} />;
    case "github":
      return <Github {...p} />;
    case "web":
    case "site":
      return <Globe {...p} />;
    case "waitlist":
      return <Clock {...p} />;
  }
}
