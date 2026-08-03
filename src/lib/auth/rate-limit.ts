import "server-only";
import { headers } from "next/headers";
import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { rateLimits } from "@/lib/db/schema";

/**
 * A fixed-window counter backed by the `rate_limits` table — key + window
 * start + count, present in the schema since the foundation commit but,
 * like `assertTenant()` before it, never actually read from or written to
 * anywhere (`docs/SECURITY.md` §7, "Rate limiting on auth endpoints:
 * missing"). This is what wires it in.
 *
 * Every call in a given window (successful or failed) counts — there is no
 * "reset the counter on a successful sign-in" logic. That's a deliberate
 * simplicity trade-off, not an oversight: it means a legitimate user who
 * mistypes their password a few times then gets it right still consumes
 * attempts from the same budget, but it avoids a second code path that
 * itself would need to be tenant/user-scoped correctly. Five attempts per
 * fifteen minutes is generous enough that this practically never bites a
 * real user while still cutting off a brute-force loop.
 *
 * Read-then-write, not a single atomic upsert — under concurrent requests
 * for the same key within the same millisecond this can under-count by one
 * or two, same class of race as other lightweight counters in this
 * codebase (e.g. `masteryRecords.evidenceCount`). Acceptable for a
 * brute-force *deterrent*, not claimed to be a hard atomic guarantee.
 */

export interface RateLimitConfig {
  windowMs: number;
  max: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
}

export async function checkRateLimit(key: string, config: RateLimitConfig): Promise<RateLimitResult> {
  const windowStart = Math.floor(Date.now() / config.windowMs) * config.windowMs;

  const existing = (
    await db
      .select()
      .from(rateLimits)
      .where(and(eq(rateLimits.key, key), eq(rateLimits.windowStart, windowStart)))
      .limit(1)
  )[0];

  const nextCount = (existing?.count ?? 0) + 1;

  await db
    .insert(rateLimits)
    .values({ key, windowStart, count: 1 })
    .onConflictDoUpdate({ target: [rateLimits.key, rateLimits.windowStart], set: { count: nextCount } });

  return { allowed: nextCount <= config.max, remaining: Math.max(0, config.max - nextCount) };
}

/**
 * Best-effort client IP from the standard reverse-proxy headers. Trusts
 * `x-forwarded-for`/`x-real-ip` as set by the deployment's own proxy —
 * these are spoofable by the client on a deployment with no proxy in
 * front of it, which limits this to a deterrent, not a hard identity
 * check. Good enough for a rate-limit key; never used for auth decisions.
 */
export async function getClientIp(): Promise<string> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return h.get("x-real-ip") ?? "unknown";
}
