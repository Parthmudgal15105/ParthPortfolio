import type { Platform, Status } from "./types";

// Client-safe labels (no product data imports).
export const statusLabel: Record<Status, string> = {
  available: "Available",
  "in-review": "In App Review",
  beta: "Beta",
  "coming-soon": "Coming soon",
  "in-development": "In development",
  "open-source": "Open source",
};

export const platformLabel: Record<Platform, string> = {
  macOS: "Mac",
  iOS: "iPhone",
  iPadOS: "iPad",
  Web: "Web",
  Chrome: "Chrome",
  "VS Code": "VS Code",
  Android: "Android",
};

/** Filter groups on the homepage catalogue. */
export const platformFilters: { id: string; label: string; match: Platform[] }[] = [
  { id: "all", label: "All", match: [] },
  { id: "mac", label: "Mac", match: ["macOS"] },
  { id: "iphone", label: "iPhone & iPad", match: ["iOS", "iPadOS"] },
  { id: "browser", label: "Browser & editor", match: ["Chrome", "Web", "VS Code"] },
  { id: "android", label: "Android", match: ["Android"] },
];
