"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PLATFORMS, PLATFORM_META, HANDLE_RE, type Platform, type PlatformStats, type RatingPoint } from "@/lib/cp/types";
import { DAY, buildInsights, combinedHeatmap, dayKey, mergedTags, streaks, sumRange, todayUTC, windowStats } from "@/lib/cp/insights";

type Handles = Record<Platform, string>;
type Result = { status: "loading" } | { status: "ok"; data: PlatformStats } | { status: "error"; error: string };

const EMPTY: Handles = { leetcode: "", codeforces: "", codechef: "", gfg: "", code360: "" };
const PARAM: Record<Platform, string> = { leetcode: "lc", codeforces: "cf", codechef: "cc", gfg: "gfg", code360: "c360" };
const STORE = "cp-tracker:handles";
// Order shown in the form: the two most common first.
const FORM_ORDER: Platform[] = ["leetcode", "codeforces", "codechef", "gfg", "code360"];

const color = (p: Platform) => `var(--cp-s${PLATFORM_META[p].slot})`;
const fmt = (n: number) => n.toLocaleString("en-US");
const fmtDate = (t: number) => new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

function readStored(): Handles | null {
  try {
    const raw = localStorage.getItem(STORE);
    return raw ? { ...EMPTY, ...(JSON.parse(raw) as Partial<Handles>) } : null;
  } catch {
    return null;
  }
}

export function Tracker() {
  const [handles, setHandles] = useState<Handles>(EMPTY);
  const [results, setResults] = useState<Partial<Record<Platform, Result>>>({});
  const [copied, setCopied] = useState(false);
  const ran = useRef(false);

  const run = useCallback((h: Handles) => {
    const active = PLATFORMS.filter((p) => h[p].trim());
    const next: Partial<Record<Platform, Result>> = {};
    for (const p of active) next[p] = { status: "loading" };
    setResults(next);

    const params = new URLSearchParams();
    for (const p of active) params.set(PARAM[p], h[p].trim());
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
    try {
      localStorage.setItem(STORE, JSON.stringify(h));
    } catch {}

    for (const p of active) {
      const handle = h[p].trim();
      if (!HANDLE_RE.test(handle)) {
        setResults((r) => ({ ...r, [p]: { status: "error", error: "Handles use letters, numbers, _ . - only" } }));
        continue;
      }
      fetch(`/api/cp/${p}?handle=${encodeURIComponent(handle)}`)
        .then(async (res) => {
          const body = await res.json().catch(() => ({ error: `Request failed (${res.status})` }));
          if (!res.ok) throw new Error(body.error ?? `Request failed (${res.status})`);
          setResults((r) => ({ ...r, [p]: { status: "ok", data: body as PlatformStats } }));
        })
        .catch((e: Error) => setResults((r) => ({ ...r, [p]: { status: "error", error: e.message } })));
    }
  }, []);

  // Load from ?lc=…&cf=… (shareable) first, then from this browser's last lookup.
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const q = new URLSearchParams(window.location.search);
    const fromUrl = { ...EMPTY };
    let any = false;
    for (const p of PLATFORMS) {
      const v = q.get(PARAM[p]);
      if (v) {
        fromUrl[p] = v;
        any = true;
      }
    }
    const initial = any ? fromUrl : readStored();
    if (initial) {
      setHandles(initial);
      if (PLATFORMS.some((p) => initial[p].trim())) run(initial);
    }
  }, [run]);

  const ok = useMemo(
    () => PLATFORMS.flatMap((p) => (results[p]?.status === "ok" ? [(results[p] as { data: PlatformStats }).data] : [])),
    [results],
  );
  const loading = PLATFORMS.some((p) => results[p]?.status === "loading");
  const anyHandle = PLATFORMS.some((p) => handles[p].trim());

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <div className="cp">
      <form
        className="cp-form"
        onSubmit={(e) => {
          e.preventDefault();
          run(handles);
        }}
      >
        <div className="cp-form__grid">
          {FORM_ORDER.map((p) => (
            <label key={p} className="cp-field">
              <span className="cp-field__label">
                <i className="cp-swatch" style={{ background: color(p) }} aria-hidden="true" />
                {PLATFORM_META[p].name}
              </span>
              <input
                value={handles[p]}
                onChange={(e) => setHandles((h) => ({ ...h, [p]: e.target.value }))}
                placeholder={PLATFORM_META[p].hint}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                autoComplete="off"
                maxLength={64}
              />
            </label>
          ))}
        </div>
        <div className="btn-row">
          <button className="btn" type="submit" disabled={!anyHandle || loading}>
            {loading ? "Fetching…" : "Track"}
          </button>
          {ok.length > 0 && (
            <button className="btn btn--ghost" type="button" onClick={share}>
              {copied ? "Link copied" : "Copy share link"}
            </button>
          )}
          <span className="cp-note">Fill any platforms you use. Nothing is stored on a server; stats refresh every 30 minutes.</span>
        </div>
      </form>

      {Object.keys(results).length > 0 && (
        <>
          <Overview stats={ok} />
          {ok.length > 0 && <HeatmapSection stats={ok} />}
          {ok.some((s) => (s.rating?.history.length ?? 0) > 1) && <RatingSection stats={ok} />}
          {ok.length > 0 && <InsightsSection stats={ok} />}
          {ok.some((s) => s.tags?.length) && <TopicsSection stats={ok} />}
          <section className="cp-block" aria-labelledby="cp-platforms">
            <h2 id="cp-platforms" className="cp-h">Platforms</h2>
            <div className="cp-cards">
              {PLATFORMS.filter((p) => results[p]).map((p) => (
                <PlatformCard key={p} platform={p} handle={handles[p]} result={results[p]!} onRetry={() => run(handles)} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

/* ---------------- Overview ---------------- */

function Overview({ stats }: { stats: PlatformStats[] }) {
  const map = combinedHeatmap(stats);
  const st = streaks(map);
  const w = windowStats(map);
  const solved = stats.reduce((a, s) => a + s.solved, 0);
  const contests = stats.reduce((a, s) => a + (s.rating?.contests ?? 0), 0);
  const tiles = [
    { label: "Problems solved", value: fmt(solved), sub: `across ${stats.length} platform${stats.length === 1 ? "" : "s"}` },
    { label: "Current streak", value: `${st.current}d`, sub: `longest this year ${st.longest}d` },
    { label: "Active days", value: fmt(w.active), sub: "in the last 365" },
    { label: "Last 30 days", value: fmt(sumRange(map, 30, 0)), sub: "submissions" },
    { label: "Rated contests", value: fmt(contests), sub: "all platforms" },
  ];
  const max = Math.max(1, ...stats.map((s) => s.solved));
  return (
    <section className="cp-block" aria-labelledby="cp-overview">
      <h2 id="cp-overview" className="cp-h">Overview</h2>
      {stats.length === 0 ? (
        <p className="cp-note">Waiting for at least one platform…</p>
      ) : (
        <>
          <div className="cp-tiles">
            {tiles.map((t) => (
              <div key={t.label} className="cp-tile">
                <span className="cp-tile__label">{t.label}</span>
                <strong className="cp-tile__value">{t.value}</strong>
                <span className="cp-tile__sub">{t.sub}</span>
              </div>
            ))}
          </div>
          <div className="cp-panel">
            <h3 className="cp-h3">Solved by platform</h3>
            <ul className="cp-hbars">
              {[...stats]
                .sort((a, b) => b.solved - a.solved)
                .map((s) => (
                  <li key={s.platform} title={`${PLATFORM_META[s.platform].name}: ${fmt(s.solved)} solved`}>
                    <span className="cp-hbars__label">{PLATFORM_META[s.platform].name}</span>
                    <span className="cp-hbars__track">
                      <span className="cp-hbars__bar" style={{ width: `${(s.solved / max) * 100}%`, background: color(s.platform) }} />
                    </span>
                    <span className="cp-hbars__value">{fmt(s.solved)}</span>
                  </li>
                ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}

/* ---------------- Heatmap ---------------- */

const CELL = 11;
const GAP = 3;

function HeatmapSection({ stats }: { stats: PlatformStats[] }) {
  const [only, setOnly] = useState<Platform | "all">("all");
  const [tip, setTip] = useState<{ x: number; y: number; text: string } | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const map = combinedHeatmap(stats, only === "all" ? undefined : only);

  const today = todayUTC();
  const end = today;
  const start = today - 364 * DAY - new Date(today - 364 * DAY).getUTCDay() * DAY; // back to a Sunday
  const days: { t: number; c: number; col: number; row: number }[] = [];
  for (let t = start, i = 0; t <= end; t += DAY, i++) days.push({ t, c: map[dayKey(t)] ?? 0, col: Math.floor(i / 7), row: new Date(t).getUTCDay() });
  const cols = days[days.length - 1].col + 1;

  const nonzero = days.map((d) => d.c).filter(Boolean).sort((a, b) => a - b);
  const q = (p: number) => nonzero[Math.min(nonzero.length - 1, Math.floor(p * nonzero.length))] ?? 1;
  const cuts = [q(0.25), q(0.5), q(0.75)];
  const level = (c: number) => (c === 0 ? 0 : c <= cuts[0] ? 1 : c <= cuts[1] ? 2 : c <= cuts[2] ? 3 : 4);
  const total = days.reduce((a, d) => a + d.c, 0);

  const left = 28;
  const top = 18;
  const W = left + cols * (CELL + GAP);
  const H = top + 7 * (CELL + GAP);
  const months: { x: number; label: string }[] = [];
  let lastM = -1;
  for (const d of days) {
    const m = new Date(d.t).getUTCMonth();
    if (d.row === 0 && m !== lastM) {
      lastM = m;
      months.push({ x: left + d.col * (CELL + GAP), label: new Date(d.t).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }) });
    }
  }
  if (months.length > 1 && months[1].x - months[0].x < 30) months.shift();

  const show = (e: React.MouseEvent | React.FocusEvent, d: (typeof days)[number]) => {
    const box = boxRef.current?.getBoundingClientRect();
    const r = (e.currentTarget as SVGRectElement).getBoundingClientRect();
    if (!box) return;
    setTip({ x: r.left - box.left + r.width / 2, y: r.top - box.top, text: `${d.c} submission${d.c === 1 ? "" : "s"} · ${fmtDate(d.t)}` });
  };

  return (
    <section className="cp-block" aria-labelledby="cp-heat">
      <div className="cp-head">
        <h2 id="cp-heat" className="cp-h">Activity</h2>
        <div className="cp-chips" role="group" aria-label="Show activity for">
          {(["all", ...stats.map((s) => s.platform)] as const).map((p) => (
            <button key={p} type="button" className="cp-chip" aria-pressed={only === p} onClick={() => setOnly(p)}>
              {p !== "all" && <i className="cp-swatch" style={{ background: color(p) }} aria-hidden="true" />}
              {p === "all" ? "All" : PLATFORM_META[p].short}
            </button>
          ))}
        </div>
      </div>
      <div className="cp-panel">
        <p className="cp-panel__lede">
          <strong>{fmt(total)}</strong> submissions in the last year
        </p>
        <div className="cp-heat" ref={boxRef} onMouseLeave={() => setTip(null)}>
          <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} role="img" aria-label={`Submission heatmap: ${total} submissions in the last year`}>
            {months.map((m) => (
              <text key={m.x} x={m.x} y={11} className="cp-axis">
                {m.label}
              </text>
            ))}
            {[1, 3, 5].map((r) => (
              <text key={r} x={0} y={top + r * (CELL + GAP) + CELL - 2} className="cp-axis">
                {["", "Mon", "", "Wed", "", "Fri", ""][r]}
              </text>
            ))}
            {days.map((d) => (
              <rect
                key={d.t}
                x={left + d.col * (CELL + GAP)}
                y={top + d.row * (CELL + GAP)}
                width={CELL}
                height={CELL}
                rx={2.5}
                className={`cp-l${level(d.c)}`}
                onMouseEnter={(e) => show(e, d)}
              />
            ))}
          </svg>
          {tip && (
            <div className="cp-tip" style={{ left: tip.x, top: tip.y }} role="status">
              {tip.text}
            </div>
          )}
        </div>
        <div className="cp-legend cp-legend--scale" aria-hidden="true">
          Less {[0, 1, 2, 3, 4].map((l) => <i key={l} className={`cp-cell cp-l${l}`} />)} More
        </div>
      </div>
    </section>
  );
}

/* ---------------- Rating chart ---------------- */

const RANGES = [
  { id: "all", label: "All time", days: Infinity },
  { id: "3y", label: "3 years", days: 3 * 365 },
  { id: "1y", label: "1 year", days: 365 },
] as const;

function niceStep(span: number) {
  const raw = span / 5;
  const pow = 10 ** Math.floor(Math.log10(raw));
  return [1, 2, 2.5, 5, 10].map((m) => m * pow).find((s) => s >= raw) ?? raw;
}

function RatingSection({ stats }: { stats: PlatformStats[] }) {
  const [range, setRange] = useState<(typeof RANGES)[number]["id"]>("all");
  const [hover, setHover] = useState<{ p: Platform; pt: RatingPoint; x: number; y: number } | null>(null);
  const series = stats.filter((s) => (s.rating?.history.length ?? 0) > 1);
  const cutoff = Date.now() - RANGES.find((r) => r.id === range)!.days * DAY;
  const data = series.map((s) => ({ p: s.platform, pts: s.rating!.history.filter((h) => h.t >= cutoff) })).filter((s) => s.pts.length);

  const W = 760;
  const H = 300;
  const m = { l: 46, r: 64, t: 14, b: 28 };
  const all = data.flatMap((d) => d.pts);
  if (!all.length) return null;
  const t0 = Math.min(...all.map((p) => p.t));
  const t1 = Math.max(...all.map((p) => p.t));
  const step = niceStep(Math.max(200, Math.max(...all.map((p) => p.rating)) - Math.min(...all.map((p) => p.rating))));
  const y0 = Math.floor((Math.min(...all.map((p) => p.rating)) - step / 4) / step) * step;
  const y1 = Math.ceil((Math.max(...all.map((p) => p.rating)) + step / 4) / step) * step;
  const X = (t: number) => m.l + ((t - t0) / Math.max(1, t1 - t0)) * (W - m.l - m.r);
  const Y = (r: number) => m.t + (1 - (r - y0) / (y1 - y0)) * (H - m.t - m.b);
  const yTicks: number[] = [];
  for (let v = y0; v <= y1; v += step) yTicks.push(v);
  const y0Year = new Date(t0).getUTCFullYear();
  const y1Year = new Date(t1).getUTCFullYear();
  const yearStep = Math.max(1, Math.ceil((y1Year - y0Year + 1) / 8));
  const xTicks: { t: number; label: string }[] = [];
  if (y1Year - y0Year >= 1) {
    for (let y = y0Year + 1; y <= y1Year; y += yearStep) xTicks.push({ t: Date.UTC(y, 0, 1), label: String(y) });
  } else {
    for (let t = t0; t <= t1; t += 61 * DAY) xTicks.push({ t, label: new Date(t).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }) });
  }

  // Direct labels at line ends, nudged apart so they don't collide.
  const ends = data
    .map((d) => ({ p: d.p, y: Y(d.pts[d.pts.length - 1].rating), v: d.pts[d.pts.length - 1].rating }))
    .sort((a, b) => a.y - b.y);
  for (let i = 1; i < ends.length; i++) if (ends[i].y - ends[i - 1].y < 14) ends[i].y = ends[i - 1].y + 14;

  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const r = svg.getBoundingClientRect();
    const sx = ((e.clientX - r.left) / r.width) * W;
    const sy = ((e.clientY - r.top) / r.height) * H;
    let best: typeof hover = null;
    let bd = Infinity;
    for (const d of data)
      for (const pt of d.pts) {
        const dx = X(pt.t) - sx;
        const dy = Y(pt.rating) - sy;
        const dist = dx * dx + dy * dy * 0.6;
        if (dist < bd) {
          bd = dist;
          best = { p: d.p, pt, x: X(pt.t), y: Y(pt.rating) };
        }
      }
    setHover(best);
  };

  return (
    <section className="cp-block" aria-labelledby="cp-rating">
      <div className="cp-head">
        <h2 id="cp-rating" className="cp-h">Contest rating</h2>
        <div className="cp-chips" role="group" aria-label="Time range">
          {RANGES.map((r) => (
            <button key={r.id} type="button" className="cp-chip" aria-pressed={range === r.id} onClick={() => setRange(r.id)}>
              {r.label}
            </button>
          ))}
        </div>
      </div>
      <div className="cp-panel">
        <ul className="cp-legend">
          {data.map((d) => {
            const s = stats.find((x) => x.platform === d.p)!;
            return (
              <li key={d.p}>
                <i className="cp-swatch cp-swatch--line" style={{ background: color(d.p) }} aria-hidden="true" />
                {PLATFORM_META[d.p].name}
                <span className="muted">
                  {" "}
                  {s.rating!.current ?? "—"} now · max {s.rating!.max ?? "—"}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="cp-chart">
          <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Contest rating over time" onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
            {yTicks.map((v) => (
              <g key={v}>
                <line x1={m.l} x2={W - m.r} y1={Y(v)} y2={Y(v)} className="cp-grid" />
                <text x={m.l - 8} y={Y(v) + 4} textAnchor="end" className="cp-axis">
                  {v}
                </text>
              </g>
            ))}
            {xTicks.map((x) => (
              <text key={x.t} x={X(x.t)} y={H - 8} textAnchor="middle" className="cp-axis">
                {x.label}
              </text>
            ))}
            {data.map((d) => (
              <path
                key={d.p}
                d={d.pts.map((pt, i) => `${i ? "L" : "M"}${X(pt.t).toFixed(1)},${Y(pt.rating).toFixed(1)}`).join("")}
                fill="none"
                stroke={color(d.p)}
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={hover && hover.p !== d.p ? 0.35 : 1}
              />
            ))}
            {ends.map((e) => (
              <text key={e.p} x={W - m.r + 8} y={e.y + 4} className="cp-endlabel">
                {PLATFORM_META[e.p].short} {e.v}
              </text>
            ))}
            {hover && (
              <g pointerEvents="none">
                <line x1={hover.x} x2={hover.x} y1={m.t} y2={H - m.b} className="cp-cross" />
                <circle cx={hover.x} cy={hover.y} r={5} fill={color(hover.p)} className="cp-dot" />
              </g>
            )}
          </svg>
          {hover && (
            <div className="cp-tip cp-tip--chart" style={{ left: `${(hover.x / W) * 100}%`, top: `${(hover.y / H) * 100}%` }} role="status">
              <strong>
                {PLATFORM_META[hover.p].name} · {hover.pt.rating}
              </strong>
              <span>{hover.pt.name}</span>
              <span className="muted">
                {fmtDate(hover.pt.t)}
                {hover.pt.rank ? ` · rank ${fmt(hover.pt.rank)}` : ""}
              </span>
            </div>
          )}
        </div>
        <details className="cp-table">
          <summary>Show rating history as a table</summary>
          <div className="cp-table__scroll">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Platform</th>
                  <th>Contest</th>
                  <th>Rank</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .flatMap((d) => d.pts.map((pt) => ({ p: d.p, pt })))
                  .sort((a, b) => b.pt.t - a.pt.t)
                  .map(({ p, pt }) => (
                    <tr key={`${p}-${pt.t}-${pt.name}`}>
                      <td>{fmtDate(pt.t)}</td>
                      <td>{PLATFORM_META[p].short}</td>
                      <td>{pt.name}</td>
                      <td>{pt.rank ? fmt(pt.rank) : "—"}</td>
                      <td>{pt.rating}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </section>
  );
}

/* ---------------- Insights ---------------- */

function InsightsSection({ stats }: { stats: PlatformStats[] }) {
  const items = buildInsights(stats);
  if (!items.length) return null;
  return (
    <section className="cp-block" aria-labelledby="cp-insights">
      <h2 id="cp-insights" className="cp-h">Insights</h2>
      <ul className="cp-insights">
        {items.map((i) => (
          <li key={i.title} className="cp-insight">
            <strong>{i.title}</strong>
            <p>{i.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------- Topics & CF difficulty ---------------- */

function TopicsSection({ stats }: { stats: PlatformStats[] }) {
  const tags = mergedTags(stats).slice(0, 14);
  const max = Math.max(1, ...tags.map((t) => t.count));
  const tagged = stats.filter((s) => s.tags?.length).map((s) => s.platform);
  const cf = stats.find((s) => s.platform === "codeforces" && s.problemRatings?.length);
  return (
    <section className="cp-block" aria-labelledby="cp-topics">
      <h2 id="cp-topics" className="cp-h">Topics</h2>
      <div className="cp-split">
        <div className="cp-panel">
          <h3 className="cp-h3">Most solved topics</h3>
          {tagged.length > 1 && (
            <ul className="cp-legend">
              {tagged.map((p) => (
                <li key={p}>
                  <i className="cp-swatch" style={{ background: color(p) }} aria-hidden="true" />
                  {PLATFORM_META[p].name}
                </li>
              ))}
            </ul>
          )}
          <ul className="cp-hbars">
            {tags.map((t) => (
              <li key={t.label} title={`${t.label}: ${tagged.map((p) => `${PLATFORM_META[p].short} ${t.by[p] ?? 0}`).join(", ")}`}>
                <span className="cp-hbars__label">{t.label}</span>
                <span className="cp-hbars__track">
                  <span className="cp-hbars__stack" style={{ width: `${(t.count / max) * 100}%` }}>
                    {tagged.map((p) =>
                      t.by[p] ? <span key={p} className="cp-hbars__seg" style={{ flexGrow: t.by[p], background: color(p) }} /> : null,
                    )}
                  </span>
                </span>
                <span className="cp-hbars__value">{fmt(t.count)}</span>
              </li>
            ))}
          </ul>
          <p className="cp-note">Tags come from LeetCode and Codeforces. A problem with several tags counts once per tag.</p>
        </div>
        {cf && <CfRatings stats={cf} />}
      </div>
    </section>
  );
}

function CfRatings({ stats }: { stats: PlatformStats }) {
  const b = stats.problemRatings!;
  const max = Math.max(...b.map((x) => x.count));
  const cur = stats.rating?.current ?? null;
  return (
    <div className="cp-panel">
      <h3 className="cp-h3">Codeforces solves by problem rating</h3>
      <div className="cp-vbars" role="img" aria-label={b.map((x) => `${x.label}: ${x.count}`).join(", ")}>
        {b.map((x) => (
          <div key={x.label} className="cp-vbars__col" title={`Rated ${x.label}: ${x.count} solved`}>
            <span
              className="cp-vbars__bar"
              style={{ height: `${(x.count / max) * 100}%`, background: cur !== null && Number(x.label) > cur ? "var(--cp-s1-soft)" : "var(--cp-s1)" }}
            />
            <span className="cp-vbars__label">{Number(x.label) % 400 === 0 || b.length < 12 ? x.label : ""}</span>
          </div>
        ))}
      </div>
      {cur !== null && <p className="cp-note">Lighter bars are problems rated above your current rating ({cur}).</p>}
    </div>
  );
}

/* ---------------- Per-platform card ---------------- */

function PlatformCard({ platform, handle, result, onRetry }: { platform: Platform; handle: string; result: Result; onRetry: () => void }) {
  const meta = PLATFORM_META[platform];
  if (result.status === "loading")
    return (
      <article className="cp-card cp-card--loading" aria-busy="true">
        <header className="cp-card__head">
          <i className="cp-swatch" style={{ background: color(platform) }} aria-hidden="true" />
          <h3>{meta.name}</h3>
        </header>
        <p className="cp-note">Fetching {handle}…</p>
      </article>
    );
  if (result.status === "error")
    return (
      <article className="cp-card cp-card--error">
        <header className="cp-card__head">
          <i className="cp-swatch" style={{ background: color(platform) }} aria-hidden="true" />
          <h3>{meta.name}</h3>
        </header>
        <p>
          <strong>{handle}</strong>: {result.error}
        </p>
        <button type="button" className="cp-chip" onClick={onRetry}>
          Try again
        </button>
      </article>
    );
  const s = result.data;
  const diffTotal = s.difficulty.reduce((a, d) => a + d.count, 0);
  return (
    <article className="cp-card">
      <header className="cp-card__head">
        <i className="cp-swatch" style={{ background: color(platform) }} aria-hidden="true" />
        <h3>{meta.name}</h3>
        <a href={s.profileUrl} target="_blank" rel="noopener noreferrer" className="cp-card__link">
          {s.handle} ↗<span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </header>
      {s.name && s.name !== s.handle && <p className="cp-card__name">{s.name}</p>}
      <div className="cp-card__nums">
        <div>
          <strong>{fmt(s.solved)}</strong>
          <span>solved</span>
        </div>
        {s.rating && (
          <>
            <div>
              <strong>{s.rating.current ?? "—"}</strong>
              <span>rating{s.rating.title ? ` · ${s.rating.title}` : ""}</span>
            </div>
            <div>
              <strong>{s.rating.max ?? "—"}</strong>
              <span>max · {s.rating.contests} contests</span>
            </div>
          </>
        )}
      </div>
      {diffTotal > 0 && (
        <div className="cp-diff">
          <div className="cp-diff__bar" role="img" aria-label={s.difficulty.map((d) => `${d.label} ${d.count}`).join(", ")}>
            {s.difficulty.map((d, i) =>
              d.count ? <span key={d.label} style={{ flexGrow: d.count, background: `var(--cp-d${Math.min(i, 4)})` }} /> : null,
            )}
          </div>
          <ul className="cp-diff__legend">
            {s.difficulty.map((d, i) => (
              <li key={d.label}>
                <i className="cp-swatch" style={{ background: `var(--cp-d${Math.min(i, 4)})` }} aria-hidden="true" />
                {d.label} <b>{fmt(d.count)}</b>
              </li>
            ))}
          </ul>
        </div>
      )}
      {s.facts.length > 0 && (
        <dl className="cp-facts">
          {s.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}
