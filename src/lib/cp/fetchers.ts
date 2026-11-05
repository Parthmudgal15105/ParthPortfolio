// Server-only fetchers. Each one turns a platform's public (mostly unofficial) data
// into PlatformStats. Only Codeforces has an official API; the rest read the same
// endpoints or HTML the platform's own profile page uses, so expect them to need a
// fix when a site changes.

import { PLATFORM_META, type Count, type Platform, type PlatformStats, type RatingPoint } from "./types";

export class NotFoundError extends Error {}
export class UpstreamError extends Error {}

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
const TIMEOUT = 9000;

async function get(url: string, init: RequestInit = {}): Promise<Response> {
  let res: Response;
  try {
    res = await fetch(url, {
      ...init,
      cache: "no-store",
      signal: AbortSignal.timeout(TIMEOUT),
      headers: { "User-Agent": UA, Accept: "application/json, text/html;q=0.9, */*;q=0.8", ...(init.headers ?? {}) },
    });
  } catch (e) {
    throw new UpstreamError(`Could not reach ${new URL(url).host}: ${(e as Error).message}`);
  }
  return res;
}

async function json<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await get(url, init);
  if (res.status === 404) throw new NotFoundError("Profile not found");
  const text = await res.text();
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new UpstreamError(`${new URL(url).host} returned ${res.status} (not JSON)`);
  }
}

const dayKey = (ms: number) => new Date(ms).toISOString().slice(0, 10);
const pad = (d: string) => {
  const [y, m, dd] = d.split("-");
  return `${y}-${m.padStart(2, "0")}-${dd.padStart(2, "0")}`;
};
const num = (n: number) => n.toLocaleString("en-US");
const base = (platform: Platform, handle: string) => ({
  platform,
  handle,
  profileUrl: PLATFORM_META[platform].profile(handle),
  fetchedAt: new Date().toISOString(),
});

/* ---------------- Codeforces (official API) ---------------- */

type CfResp<T> = { status: "OK" | "FAILED"; comment?: string; result: T };
type CfUser = { handle: string; firstName?: string; lastName?: string; rating?: number; maxRating?: number; rank?: string; maxRank?: string; contribution?: number; friendOfCount?: number };
type CfRating = { contestName: string; rank: number; ratingUpdateTimeSeconds: number; newRating: number };
type CfSub = { creationTimeSeconds: number; verdict?: string; problem: { contestId?: number; index: string; name: string; rating?: number; tags: string[] } };

async function cf<T>(path: string): Promise<T> {
  const r = await json<CfResp<T>>(`https://codeforces.com/api/${path}`);
  if (r.status !== "OK") {
    if (/not found/i.test(r.comment ?? "")) throw new NotFoundError("Codeforces handle not found");
    throw new UpstreamError(r.comment ?? "Codeforces API error");
  }
  return r.result;
}

async function codeforces(handle: string): Promise<PlatformStats> {
  const [users, ratings, subs] = await Promise.all([
    cf<CfUser[]>(`user.info?handles=${encodeURIComponent(handle)}`),
    cf<CfRating[]>(`user.rating?handle=${encodeURIComponent(handle)}`),
    cf<CfSub[]>(`user.status?handle=${encodeURIComponent(handle)}&from=1&count=10000`),
  ]);
  const u = users[0];
  const heatmap: Record<string, number> = {};
  const solved = new Map<string, CfSub["problem"]>();
  for (const s of subs) {
    const k = dayKey(s.creationTimeSeconds * 1000);
    heatmap[k] = (heatmap[k] ?? 0) + 1;
    if (s.verdict === "OK") solved.set(`${s.problem.contestId ?? "gym"}-${s.problem.index}-${s.problem.name}`, s.problem);
  }
  const tags = new Map<string, number>();
  const buckets = new Map<number, number>();
  let unrated = 0;
  for (const p of solved.values()) {
    for (const t of p.tags) tags.set(t, (tags.get(t) ?? 0) + 1);
    if (p.rating) buckets.set(p.rating, (buckets.get(p.rating) ?? 0) + 1);
    else unrated++;
  }
  const problemRatings = [...buckets.entries()].sort((a, b) => a[0] - b[0]).map(([r, c]) => ({ label: String(r), count: c }));
  const band = (lo: number, hi: number) => [...buckets.entries()].filter(([r]) => r >= lo && r < hi).reduce((a, [, c]) => a + c, 0);
  const history: RatingPoint[] = ratings.map((r) => ({ t: r.ratingUpdateTimeSeconds * 1000, rating: r.newRating, name: r.contestName, rank: r.rank }));
  const best = ratings.length ? Math.min(...ratings.map((r) => r.rank)) : null;
  return {
    ...base("codeforces", u.handle),
    name: [u.firstName, u.lastName].filter(Boolean).join(" ") || undefined,
    solved: solved.size,
    difficulty: [
      { label: "< 1200", count: band(0, 1200) },
      { label: "1200–1599", count: band(1200, 1600) },
      { label: "1600–1999", count: band(1600, 2000) },
      { label: "2000+", count: band(2000, 10000) },
      ...(unrated ? [{ label: "Unrated", count: unrated }] : []),
    ],
    rating: { current: u.rating ?? null, max: u.maxRating ?? null, title: u.rank, contests: ratings.length, history },
    heatmap,
    tags: [...tags.entries()].map(([label, count]) => ({ label, count })).sort((a, b) => b.count - a.count),
    problemRatings,
    facts: [
      ...(u.maxRank ? [{ label: "Max rank", value: u.maxRank }] : []),
      ...(best ? [{ label: "Best contest rank", value: num(best) }] : []),
      { label: "Submissions", value: num(subs.length) },
      ...(u.contribution !== undefined ? [{ label: "Contribution", value: String(u.contribution) }] : []),
    ],
  };
}

/* ---------------- LeetCode (public GraphQL) ---------------- */

const LC_QUERY = `query($u:String!){
  matchedUser(username:$u){
    username profile{ranking realName}
    submitStatsGlobal{acSubmissionNum{difficulty count}}
    userCalendar{streak totalActiveDays submissionCalendar}
    tagProblemCounts{advanced{tagName problemsSolved} intermediate{tagName problemsSolved} fundamental{tagName problemsSolved}}
  }
  userContestRanking(username:$u){rating attendedContestsCount globalRanking topPercentage badge{name}}
  userContestRankingHistory(username:$u){attended rating ranking contest{title startTime}}
}`;

type LcTag = { tagName: string; problemsSolved: number };
type LcResp = {
  errors?: { message: string }[];
  data?: {
    matchedUser: null | {
      username: string;
      profile: { ranking: number; realName?: string };
      submitStatsGlobal: { acSubmissionNum: { difficulty: string; count: number }[] };
      userCalendar: { streak: number; totalActiveDays: number; submissionCalendar: string };
      tagProblemCounts: { advanced: LcTag[]; intermediate: LcTag[]; fundamental: LcTag[] };
    };
    userContestRanking: null | { rating: number; attendedContestsCount: number; globalRanking: number; topPercentage: number; badge?: { name: string } | null };
    userContestRankingHistory: null | { attended: boolean; rating: number; ranking: number; contest: { title: string; startTime: number } }[];
  };
};

async function leetcode(handle: string): Promise<PlatformStats> {
  const r = await json<LcResp>("https://leetcode.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Referer: "https://leetcode.com/" },
    body: JSON.stringify({ query: LC_QUERY, variables: { u: handle } }),
  });
  const m = r.data?.matchedUser;
  if (!m) {
    if (r.errors?.some((e) => /not exist/i.test(e.message)) || r.data) throw new NotFoundError("LeetCode user not found");
    throw new UpstreamError(r.errors?.[0]?.message ?? "LeetCode API error");
  }
  const ac = m.submitStatsGlobal.acSubmissionNum;
  const heatmap: Record<string, number> = {};
  for (const [s, c] of Object.entries(JSON.parse(m.userCalendar.submissionCalendar || "{}") as Record<string, number>)) {
    heatmap[dayKey(Number(s) * 1000)] = c;
  }
  const tags = [...m.tagProblemCounts.fundamental, ...m.tagProblemCounts.intermediate, ...m.tagProblemCounts.advanced]
    .filter((t) => t.problemsSolved > 0)
    .map((t) => ({ label: t.tagName, count: t.problemsSolved }))
    .sort((a, b) => b.count - a.count);
  const history = (r.data?.userContestRankingHistory ?? [])
    .filter((h) => h.attended)
    .map((h) => ({ t: h.contest.startTime * 1000, rating: Math.round(h.rating), name: h.contest.title, rank: h.ranking }));
  const cr = r.data?.userContestRanking;
  return {
    ...base("leetcode", m.username),
    name: m.profile.realName || undefined,
    solved: ac.find((a) => a.difficulty === "All")?.count ?? 0,
    difficulty: ac.filter((a) => a.difficulty !== "All").map((a) => ({ label: a.difficulty, count: a.count })),
    rating: cr
      ? {
          current: Math.round(cr.rating),
          max: history.length ? Math.max(...history.map((h) => h.rating)) : Math.round(cr.rating),
          title: cr.badge?.name,
          contests: cr.attendedContestsCount,
          history,
        }
      : undefined,
    heatmap,
    tags,
    facts: [
      { label: "Global rank", value: num(m.profile.ranking) },
      ...(cr ? [{ label: "Contest top", value: `${cr.topPercentage}%` }, { label: "Contest rank", value: num(cr.globalRanking) }] : []),
      { label: "Active days (1y)", value: num(m.userCalendar.totalActiveDays) },
      { label: "Max streak (1y)", value: `${m.userCalendar.streak}d` },
    ],
  };
}

/* ---------------- CodeChef (profile HTML) ---------------- */

async function codechef(handle: string): Promise<PlatformStats> {
  const res = await get(`https://www.codechef.com/users/${encodeURIComponent(handle)}`, { headers: { Accept: "text/html" } });
  const html = await res.text();
  if (res.status === 404 || !html.includes("user-details-container")) {
    if (res.status >= 500 || res.status === 403 || res.status === 429) throw new UpstreamError(`CodeChef returned ${res.status}`);
    throw new NotFoundError("CodeChef user not found");
  }
  const grab = (re: RegExp) => html.match(re)?.[1];
  const parseArr = <T,>(re: RegExp): T[] => {
    const s = grab(re);
    try {
      return s ? (JSON.parse(s) as T[]) : [];
    } catch {
      return [];
    }
  };
  type CcRating = { code: string; rating: string; rank: string; name: string; end_date: string };
  const all = parseArr<CcRating>(/var all_rating = (\[[\s\S]*?\]);/);
  const daily = parseArr<{ date: string; value: number }>(/userDailySubmissionsStats = (\[[\s\S]*?\]);/);
  const current = grab(/class="rating-number">\s*(\d+)/);
  const max = grab(/Highest Rating (\d+)/);
  const starBlock = grab(/class="rating-star">([\s\S]*?)<\/div>/) ?? "";
  const stars = (starBlock.match(/&#9733;|★/g) ?? []).length;
  const rank = (label: string) => grab(new RegExp(`<strong>\\s*([0-9]+|Inactive)\\s*</strong>\\s*</a>\\s*${label}`));
  const history: RatingPoint[] = all.map((r) => ({
    t: Date.parse(r.end_date.replace(" ", "T") + "+05:30"),
    rating: Number(r.rating),
    name: r.name,
    rank: Number(r.rank) || undefined,
  }));
  const heatmap: Record<string, number> = {};
  for (const d of daily) heatmap[pad(d.date)] = d.value;
  const gr = rank("Global Rank");
  const cr = rank("Country Rank");
  return {
    ...base("codechef", handle),
    name: grab(/<h1 class="h2-style">([^<]+)<\/h1>/)?.trim(),
    solved: Number(grab(/Total Problems Solved:\s*(\d+)/) ?? 0),
    difficulty: [],
    rating: {
      current: current ? Number(current) : null,
      max: max && max !== "0" ? Number(max) : history.length ? Math.max(...history.map((h) => h.rating)) : null,
      title: stars ? `${stars}★` : undefined,
      contests: history.length,
      history,
    },
    heatmap,
    facts: [
      ...(gr ? [{ label: "Global rank", value: gr === "Inactive" ? "Inactive" : num(Number(gr)) }] : []),
      ...(cr ? [{ label: "Country rank", value: cr === "Inactive" ? "Inactive" : num(Number(cr)) }] : []),
    ],
  };
}

/* ---------------- GeeksforGeeks (practice APIs) ---------------- */

type GfgProfile = { data?: null | { name: string; score: number; monthly_score: number; total_problems_solved: number; institute_rank: number | string; institute_name?: string | null; pod_solved_longest_streak: number; pod_solved_current_streak: number } };
type GfgSubs = { status: string; result: Record<string, Record<string, unknown>> | Record<string, number> };

async function gfgPost(body: object) {
  return json<GfgSubs>("https://practiceapi.geeksforgeeks.org/api/v1/user/problems/submissions/", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: "https://www.geeksforgeeks.org", Referer: "https://www.geeksforgeeks.org/" },
    body: JSON.stringify(body),
  });
}

async function gfg(handle: string): Promise<PlatformStats> {
  const year = new Date().getUTCFullYear();
  const [p, subs, y1, y0] = await Promise.all([
    json<GfgProfile>(`https://authapi.geeksforgeeks.org/api-get/user-profile-info/?handle=${encodeURIComponent(handle)}&article_count=false&redirect=true`),
    gfgPost({ handle, requestType: "", year: "", month: "" }),
    gfgPost({ handle, requestType: "getYearwiseUserSubmissions", year: String(year), month: "" }).catch(() => null),
    gfgPost({ handle, requestType: "getYearwiseUserSubmissions", year: String(year - 1), month: "" }).catch(() => null),
  ]);
  const d = p.data;
  if (!d) throw new NotFoundError("GeeksforGeeks user not found");
  const order = ["School", "Basic", "Easy", "Medium", "Hard"];
  const byDiff = (subs.result ?? {}) as Record<string, Record<string, unknown>>;
  const difficulty = order.map((label) => ({ label, count: Object.keys(byDiff[label] ?? {}).length }));
  const heatmap: Record<string, number> = {};
  for (const y of [y0, y1]) {
    if (!y || typeof y.result !== "object") continue;
    for (const [k, v] of Object.entries(y.result as Record<string, number>)) if (typeof v === "number") heatmap[k] = v;
  }
  return {
    ...base("gfg", handle),
    name: d.name,
    solved: d.total_problems_solved,
    difficulty,
    heatmap,
    facts: [
      { label: "Coding score", value: num(d.score) },
      { label: "POTD streak", value: `${d.pod_solved_current_streak}d (best ${d.pod_solved_longest_streak}d)` },
      { label: "Score this month", value: num(d.monthly_score) },
      ...(d.institute_rank ? [{ label: "Institute rank", value: String(d.institute_rank) }] : []),
    ],
  };
}

/* ---------------- Code360 by Coding Ninjas (public_section APIs) ---------------- */

const C360 = "https://www.naukri.com/code360/api/v3/public_section";
const q360 = "app_context=publicsection&naukri_request=true";
type C360Resp<T> = { data: T | null; status: number };
type C360User = {
  uuid: string;
  name: string;
  screen_name?: string;
  profile?: { name?: string };
  user_level_name?: string;
  user_exp?: number;
  dsa_domain_data?: { problem_count_data?: { total_count: number; difficulty_data: { level: string; count: number }[] } };
};

async function code360(handle: string): Promise<PlatformStats> {
  const u = await json<C360Resp<C360User>>(`${C360}/profile/user_details?uuid=${encodeURIComponent(handle)}&${q360}`).catch((e) => {
    throw e instanceof NotFoundError ? new NotFoundError("Code360 profile not found") : e;
  });
  if (!u.data) throw new NotFoundError("Code360 profile not found");
  const id = u.data.uuid;
  const end = new Date();
  const start = new Date(end.getTime() - 366 * 864e5);
  const [rating, streak, contrib] = await Promise.all([
    json<C360Resp<{ current_user_rating: number | null; user_rating_data: { rating: number; rank: number; date: number; name: string }[] }>>(
      `${C360}/user_rating_data?uuid=${id}&${q360}`,
    ).catch(() => null),
    json<C360Resp<{ current_streak: number; longest_streak: number }>>(`${C360}/streaks/fetch_curr_and_long_streak?uuid=${id}&${q360}`).catch(() => null),
    json<C360Resp<{ contribution_map: Record<string, { total: number }> }>>(
      `${C360}/profile/contributions?uuid=${id}&start_date=${encodeURIComponent(start.toISOString())}&end_date=${encodeURIComponent(end.toISOString())}&is_stats_required=true&unified=true&${q360}`,
    ).catch(() => null),
  ]);
  const pc = u.data.dsa_domain_data?.problem_count_data;
  const history: RatingPoint[] = (rating?.data?.user_rating_data ?? []).map((r) => ({ t: r.date * 1000, rating: Math.round(r.rating), name: r.name, rank: r.rank }));
  const heatmap: Record<string, number> = {};
  for (const [k, v] of Object.entries(contrib?.data?.contribution_map ?? {})) heatmap[k] = v.total;
  const cur = rating?.data?.current_user_rating;
  return {
    ...base("code360", u.data.screen_name || handle),
    name: u.data.profile?.name || u.data.name,
    solved: pc?.total_count ?? 0,
    difficulty: (pc?.difficulty_data ?? []).map((d) => ({ label: d.level, count: d.count })),
    rating:
      cur || history.length
        ? { current: cur ? Math.round(cur) : null, max: history.length ? Math.max(...history.map((h) => h.rating)) : null, contests: history.length, history }
        : undefined,
    heatmap,
    facts: [
      ...(u.data.user_level_name ? [{ label: "Level", value: u.data.user_level_name }] : []),
      ...(u.data.user_exp ? [{ label: "XP", value: num(u.data.user_exp) }] : []),
      ...(streak?.data ? [{ label: "Streak", value: `${streak.data.current_streak}d (best ${streak.data.longest_streak}d)` }] : []),
    ],
  };
}

export const FETCHERS: Record<Platform, (handle: string) => Promise<PlatformStats>> = {
  codeforces,
  leetcode,
  codechef,
  gfg,
  code360,
};

export type { Count };
