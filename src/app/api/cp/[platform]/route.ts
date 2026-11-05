import { FETCHERS, NotFoundError } from "@/lib/cp/fetchers";
import { HANDLE_RE, PLATFORMS, type Platform } from "@/lib/cp/types";

// GET /api/cp/<platform>?handle=<handle>
// Responses are cached on Vercel's CDN, so repeat lookups of the same handle
// never re-run the function or hit the platform again for 30 minutes.

export const dynamic = "force-dynamic";
export const maxDuration = 20;

const CACHE_OK = "public, max-age=300, s-maxage=1800, stale-while-revalidate=86400";

function reply(body: unknown, status: number, cache: string) {
  return Response.json(body, { status, headers: { "Cache-Control": cache, "CDN-Cache-Control": cache } });
}

export async function GET(req: Request, { params }: { params: Promise<{ platform: string }> }) {
  const { platform } = await params;
  const handle = new URL(req.url).searchParams.get("handle")?.trim() ?? "";
  if (!PLATFORMS.includes(platform as Platform)) return reply({ error: "Unknown platform" }, 404, "public, s-maxage=86400");
  if (!HANDLE_RE.test(handle)) return reply({ error: "That doesn’t look like a valid handle" }, 400, "no-store");

  try {
    const stats = await FETCHERS[platform as Platform](handle);
    return reply(stats, 200, CACHE_OK);
  } catch (e) {
    if (e instanceof NotFoundError) return reply({ error: e.message }, 404, "public, s-maxage=600");
    console.error(`[cp:${platform}] ${handle}:`, e);
    return reply({ error: (e as Error).message || "Platform unavailable" }, 502, "public, s-maxage=60");
  }
}
