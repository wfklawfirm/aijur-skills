import { test, describe, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { rateLimits } from "@/lib/db/schema";
import { checkRateLimit } from "@/lib/auth/rate-limit";
import { uid } from "@/lib/utils";

/**
 * Integration test against the real `rate_limits` table — the behavior
 * under test is persistence and windowing, so a real DB is the point (same
 * reasoning as `tests/mastery-bridge.test.ts`). Uses synthetic keys so
 * nothing here collides with a real login/signup key in the dev DB, and
 * cleans them up before and after.
 */

const KEY_A = `test:${uid("rl")}`;
const KEY_B = `test:${uid("rl")}`;

async function wipe() {
  await db.delete(rateLimits).where(eq(rateLimits.key, KEY_A));
  await db.delete(rateLimits).where(eq(rateLimits.key, KEY_B));
}

beforeEach(wipe);
after(wipe);

describe("checkRateLimit", () => {
  test("allows calls up to the max, then blocks", async () => {
    const config = { windowMs: 60_000, max: 3 };

    const r1 = await checkRateLimit(KEY_A, config);
    assert.equal(r1.allowed, true);
    assert.equal(r1.remaining, 2);

    const r2 = await checkRateLimit(KEY_A, config);
    assert.equal(r2.allowed, true);
    assert.equal(r2.remaining, 1);

    const r3 = await checkRateLimit(KEY_A, config);
    assert.equal(r3.allowed, true);
    assert.equal(r3.remaining, 0);

    const r4 = await checkRateLimit(KEY_A, config);
    assert.equal(r4.allowed, false);
    assert.equal(r4.remaining, 0);
  });

  test("a blocked key keeps being blocked on further calls within the same window", async () => {
    const config = { windowMs: 60_000, max: 1 };
    await checkRateLimit(KEY_A, config);
    const second = await checkRateLimit(KEY_A, config);
    const third = await checkRateLimit(KEY_A, config);
    assert.equal(second.allowed, false);
    assert.equal(third.allowed, false);
  });

  test("different keys have independent budgets", async () => {
    const config = { windowMs: 60_000, max: 1 };
    const a1 = await checkRateLimit(KEY_A, config);
    const b1 = await checkRateLimit(KEY_B, config);
    assert.equal(a1.allowed, true);
    assert.equal(b1.allowed, true, "key B must not be affected by key A's budget");
  });

  test("a new window resets the budget", async () => {
    const config = { windowMs: 80, max: 1 };
    const first = await checkRateLimit(KEY_A, config);
    assert.equal(first.allowed, true);
    const blocked = await checkRateLimit(KEY_A, config);
    assert.equal(blocked.allowed, false);

    await new Promise((resolve) => setTimeout(resolve, 100));

    const afterWindow = await checkRateLimit(KEY_A, config);
    assert.equal(afterWindow.allowed, true, "a fresh window must have its own budget");
  });
});
