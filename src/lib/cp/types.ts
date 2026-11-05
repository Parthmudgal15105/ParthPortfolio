// Shared shape for every coding platform the /cp tracker reads.

export const PLATFORMS = ["leetcode", "codeforces", "codechef", "gfg", "code360"] as const;
export type Platform = (typeof PLATFORMS)[number];

export const PLATFORM_META: Record<Platform, { name: string; short: string; slot: number; hint: string; profile: (h: string) => string }> = {
  codeforces: { name: "Codeforces", short: "CF", slot: 1, hint: "e.g. tourist", profile: (h) => `https://codeforces.com/profile/${h}` },
  leetcode: { name: "LeetCode", short: "LC", slot: 2, hint: "username from leetcode.com/u/…", profile: (h) => `https://leetcode.com/u/${h}/` },
  codechef: { name: "CodeChef", short: "CC", slot: 3, hint: "username from codechef.com/users/…", profile: (h) => `https://www.codechef.com/users/${h}` },
  code360: { name: "Code360", short: "C360", slot: 4, hint: "from naukri.com/code360/profile/…", profile: (h) => `https://www.naukri.com/code360/profile/${h}` },
  gfg: { name: "GeeksforGeeks", short: "GFG", slot: 5, hint: "from geeksforgeeks.org/profile/…", profile: (h) => `https://www.geeksforgeeks.org/profile/${h}` },
};

export type RatingPoint = { t: number; rating: number; name: string; rank?: number };
export type Count = { label: string; count: number };

export type PlatformStats = {
  platform: Platform;
  handle: string;
  profileUrl: string;
  name?: string;
  solved: number;
  difficulty: Count[];
  rating?: {
    current: number | null;
    max: number | null;
    title?: string;
    contests: number;
    history: RatingPoint[];
  };
  /** Submissions (or solves, where that is all a platform exposes) per UTC day, keyed YYYY-MM-DD. */
  heatmap: Record<string, number>;
  tags?: Count[];
  /** Codeforces only: solved problems bucketed by problem rating. */
  problemRatings?: Count[];
  facts: { label: string; value: string }[];
  fetchedAt: string;
};

export const HANDLE_RE = /^[A-Za-z0-9_.\-]{1,64}$/;
