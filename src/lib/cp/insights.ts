// Pure, client-safe helpers that combine several PlatformStats into one picture.

import { PLATFORM_META, type Count, type Platform, type PlatformStats } from "./types";

export const DAY = 864e5;
export const dayKey = (ms: number) => new Date(ms).toISOString().slice(0, 10);
export const todayUTC = () => {
  const d = new Date();
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
};

/** Sum per-day activity across platforms (optionally just one). */
export function combinedHeatmap(stats: PlatformStats[], only?: Platform): Record<string, number> {
  const out: Record<string, number> = {};
  for (const s of stats) {
    if (only && s.platform !== only) continue;
    for (const [k, v] of Object.entries(s.heatmap)) out[k] = (out[k] ?? 0) + v;
  }
  return out;
}

export function streaks(map: Record<string, number>, days = 365) {
  const today = todayUTC();
  let longest = 0;
  let run = 0;
  for (let i = days - 1; i >= 0; i--) {
    if ((map[dayKey(today - i * DAY)] ?? 0) > 0) longest = Math.max(longest, ++run);
    else run = 0;
  }
  // Current streak may start yesterday: today isn't over yet.
  let current = 0;
  let i = (map[dayKey(today)] ?? 0) > 0 ? 0 : 1;
  while ((map[dayKey(today - i * DAY)] ?? 0) > 0) {
    current++;
    i++;
  }
  return { current, longest };
}

export function windowStats(map: Record<string, number>, days = 365) {
  const today = todayUTC();
  let active = 0;
  let total = 0;
  let best = { day: "", count: 0 };
  const weekday = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < days; i++) {
    const t = today - i * DAY;
    const c = map[dayKey(t)] ?? 0;
    if (c > 0) active++;
    total += c;
    weekday[new Date(t).getUTCDay()] += c;
    if (c > best.count) best = { day: dayKey(t), count: c };
  }
  return { active, total, best, weekday };
}

export function sumRange(map: Record<string, number>, fromDaysAgo: number, toDaysAgo: number) {
  const today = todayUTC();
  let s = 0;
  for (let i = toDaysAgo; i < fromDaysAgo; i++) s += map[dayKey(today - i * DAY)] ?? 0;
  return s;
}

// Codeforces and LeetCode name the same topics differently.
const TAG_ALIAS: Record<string, string> = {
  dp: "Dynamic Programming",
  "dynamic programming": "Dynamic Programming",
  greedy: "Greedy",
  math: "Math",
  "number theory": "Number Theory",
  graphs: "Graphs",
  graph: "Graphs",
  "graph theory": "Graphs",
  "binary search": "Binary Search",
  strings: "Strings",
  string: "Strings",
  trees: "Trees",
  tree: "Trees",
  "binary tree": "Trees",
  sortings: "Sorting",
  sorting: "Sorting",
  "two pointers": "Two Pointers",
  bitmasks: "Bit Manipulation",
  "bit manipulation": "Bit Manipulation",
  "dfs and similar": "DFS / BFS",
  "depth-first search": "DFS / BFS",
  "breadth-first search": "DFS / BFS",
  dsu: "Union Find",
  "union find": "Union Find",
  "shortest paths": "Shortest Paths",
  "shortest path": "Shortest Paths",
  hashing: "Hashing",
  "hash table": "Hashing",
  "hash function": "Hashing",
  combinatorics: "Combinatorics",
  geometry: "Geometry",
  "data structures": "Data Structures",
  implementation: "Implementation",
  "brute force": "Brute Force",
  "constructive algorithms": "Constructive",
  array: "Arrays",
  matrix: "Matrix",
  "prefix sum": "Prefix Sums",
  simulation: "Simulation",
  "sliding window": "Sliding Window",
  "heap (priority queue)": "Heaps",
  heap: "Heaps",
  "union-find": "Union Find",
  bitmask: "Bit Manipulation",
  queue: "Queues",
  "monotonic queue": "Queues",
  stack: "Stacks",
  "monotonic stack": "Stacks",
  "segment tree": "Segment Tree",
  "game theory": "Game Theory",
  games: "Game Theory",
  interactive: "Interactive",
  probabilities: "Probability",
  "divide and conquer": "Divide & Conquer",
  backtracking: "Backtracking",
  recursion: "Recursion",
  "linked list": "Linked List",
  "topological sort": "Topological Sort",
  "binary indexed tree": "Fenwick Tree",
  trie: "Trie",
};

export function mergedTags(stats: PlatformStats[]): (Count & { by: Partial<Record<Platform, number>> })[] {
  const m = new Map<string, { count: number; by: Partial<Record<Platform, number>> }>();
  for (const s of stats) {
    for (const t of s.tags ?? []) {
      const key = TAG_ALIAS[t.label.toLowerCase()] ?? t.label.replace(/\b\w/g, (c) => c.toUpperCase());
      const e = m.get(key) ?? { count: 0, by: {} };
      e.count += t.count;
      e.by[s.platform] = (e.by[s.platform] ?? 0) + t.count;
      m.set(key, e);
    }
  }
  return [...m.entries()].map(([label, v]) => ({ label, ...v })).sort((a, b) => b.count - a.count);
}

// Topics every interview/contest prep list expects. Low counts here are real gaps.
export const CORE_TOPICS = [
  "Arrays",
  "Strings",
  "Hashing",
  "Sorting",
  "Two Pointers",
  "Binary Search",
  "Greedy",
  "Math",
  "Dynamic Programming",
  "Trees",
  "Graphs",
  "DFS / BFS",
  "Stacks",
  "Heaps",
  "Bit Manipulation",
  "Backtracking",
  "Prefix Sums",
  "Sliding Window",
  "Union Find",
  "Shortest Paths",
];

export type Insight = { title: string; body: string };

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const fmtDay = (k: string) => new Date(k + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export function buildInsights(stats: PlatformStats[]): Insight[] {
  const out: Insight[] = [];
  const map = combinedHeatmap(stats);
  const w = windowStats(map);
  const last30 = sumRange(map, 30, 0);
  const prev30 = sumRange(map, 60, 30);

  if (last30 || prev30) {
    const diff = prev30 ? Math.round(((last30 - prev30) / prev30) * 100) : null;
    out.push({
      title: diff === null ? "Back in action" : diff >= 0 ? `Up ${diff}% this month` : `Down ${Math.abs(diff)}% this month`,
      body: `${last30} submissions in the last 30 days, against ${prev30} in the 30 days before.`,
    });
  }
  if (w.total) {
    const top = w.weekday.indexOf(Math.max(...w.weekday));
    out.push({
      title: `${WEEKDAYS[top]} is your day`,
      body: `${Math.round((w.weekday[top] / w.total) * 100)}% of the past year’s submissions landed on a ${WEEKDAYS[top]}. Your biggest single day was ${fmtDay(w.best.day)}, with ${w.best.count}.`,
    });
    out.push({
      title: `${Math.round((w.active / 365) * 100)}% consistency`,
      body: `You were active on ${w.active} of the last 365 days. ${w.active < 120 ? "Short daily sessions beat occasional marathons — try a problem a day." : "That’s a solid habit — keep the chain going."}`,
    });
  }

  const tags = mergedTags(stats);
  if (tags.length >= 5) {
    const byName = new Map(tags.map((t) => [t.label, t.count]));
    const gaps = CORE_TOPICS.map((t) => ({ t, c: byName.get(t) ?? 0 }))
      .sort((a, b) => a.c - b.c)
      .slice(0, 3);
    out.push({
      title: `Strongest: ${tags[0].label}`,
      body: `${tags
        .slice(0, 3)
        .map((t) => `${t.label} (${t.count})`)
        .join(", ")} lead your solved problems, from your LeetCode and Codeforces topic tags.`,
    });
    out.push({
      title: `Practise next: ${gaps[0].t}`,
      body: `The least-practised core topics are ${gaps.map((g) => `${g.t} (${g.c})`).join(", ")}.`,
    });
  }

  const cf = stats.find((s) => s.platform === "codeforces");
  if (cf?.problemRatings?.length) {
    const all = cf.problemRatings.flatMap((b) => Array(b.count).fill(Number(b.label)) as number[]).sort((a, b) => a - b);
    const median = all[Math.floor(all.length / 2)];
    const cur = cf.rating?.current;
    const target = Math.min(3500, cur ? Math.round((cur + 200) / 100) * 100 : median + 200);
    const atTarget = cf.problemRatings.filter((b) => Number(b.label) >= target).reduce((a, b) => a + b.count, 0);
    const next = cur && cur >= 3300 ? "" : ` To climb${cur ? ` from ${cur}` : ""}, practise around ${target}+ — you’ve solved ${atTarget} problem${atTarget === 1 ? "" : "s"} there so far.`;
    out.push({
      title: `Comfort zone: ${median}`,
      body: `Half your Codeforces solves are rated ${median} or lower.${next}`,
    });
  }

  for (const s of stats) {
    const h = s.rating?.history ?? [];
    if (h.length >= 4) {
      const recent = h.slice(-5);
      const delta = recent[recent.length - 1].rating - recent[0].rating;
      if (Math.abs(delta) >= 25)
        out.push({
          title: `${PLATFORM_META[s.platform].name} ${delta > 0 ? "▲" : "▼"} ${Math.abs(delta)}`,
          body: `Rating change over your last ${recent.length} rated contests (now ${recent[recent.length - 1].rating}).`,
        });
    }
  }
  return out;
}
