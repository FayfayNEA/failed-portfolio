/**
 * Global tucan-catch counter.
 *
 * Storage: Upstash Redis REST API (free tier).
 * Set these env vars in Vercel dashboard (or .env.local for dev):
 *   UPSTASH_REDIS_REST_URL   = https://your-region.upstash.io
 *   UPSTASH_REDIS_REST_TOKEN = AXxx...
 *
 * Without those vars the route still responds but returns 0 / falls back to
 * localStorage in the client.
 */

const KEY = "tucan-catches";

async function upstash(path: string, method: "GET" | "POST" = "GET"): Promise<number | null> {
  const url   = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  try {
    const res = await fetch(`${url}/${path}`, {
      method,
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { result: unknown };
    const n = Number(json.result);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

export async function GET() {
  const count = await upstash(`get/${KEY}`);
  return Response.json({ value: count ?? 0 });
}

export async function POST() {
  const count = await upstash(`incr/${KEY}`, "POST");
  return Response.json({ value: count ?? 1 });
}
