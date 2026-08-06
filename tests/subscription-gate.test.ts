import { test, describe, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { subscriptionEvents, subscriptions, users } from "@/lib/db/schema";
import { subscriptionBlocksContent } from "@/lib/subscriptions/gate";
import type { SessionUser } from "@/lib/auth/session";
import { uid } from "@/lib/utils";

/**
 * Covers the learner-facing gate wired into `/home` (spec §8's "block
 * opening paid content ... show a clear screen") — a real DB-backed check
 * that an account with no subscription concept is never blocked, and that a
 * blocked subscription is detected without requiring any admin permission.
 */

const USER_ID = uid("t_gate");

function sessionFor(id: string): SessionUser {
  return {
    id,
    email: `${id}@test.invalid`,
    name: "Gate Test User",
    locale: "en",
    systemRole: "learner",
    platformRole: null,
    sessionId: "test-session",
    organization: null,
  };
}

async function cleanup() {
  const subs = await db.select({ id: subscriptions.id }).from(subscriptions).where(eq(subscriptions.userId, USER_ID));
  for (const s of subs) await db.delete(subscriptionEvents).where(eq(subscriptionEvents.subscriptionId, s.id));
  await db.delete(subscriptions).where(eq(subscriptions.userId, USER_ID));
  await db.delete(users).where(eq(users.id, USER_ID));
}

beforeEach(async () => {
  await cleanup();
  await db.insert(users).values({ id: USER_ID, email: `${USER_ID}@test.invalid`, passwordHash: "x", name: "Gate Test User" });
});
after(cleanup);

describe("subscriptionBlocksContent", () => {
  test("an account with no subscription row at all is never blocked", async () => {
    assert.equal(await subscriptionBlocksContent(sessionFor(USER_ID)), false);
  });

  test("an expired subscription blocks content", async () => {
    await db.insert(subscriptions).values({ id: uid("sub"), userId: USER_ID, status: "active", currentPeriodEnd: Date.UTC(2020, 0, 1) });
    assert.equal(await subscriptionBlocksContent(sessionFor(USER_ID)), true);
  });

  test("a suspended subscription blocks content even with a future end date", async () => {
    await db.insert(subscriptions).values({ id: uid("sub"), userId: USER_ID, status: "suspended", currentPeriodEnd: Date.now() + 30 * 86_400_000 });
    assert.equal(await subscriptionBlocksContent(sessionFor(USER_ID)), true);
  });

  test("an active subscription within its window does not block content", async () => {
    await db.insert(subscriptions).values({ id: uid("sub"), userId: USER_ID, status: "active", currentPeriodEnd: Date.now() + 30 * 86_400_000 });
    assert.equal(await subscriptionBlocksContent(sessionFor(USER_ID)), false);
  });

  test("a lifetime subscription never blocks content", async () => {
    await db.insert(subscriptions).values({ id: uid("sub"), userId: USER_ID, status: "lifetime", currentPeriodEnd: null });
    assert.equal(await subscriptionBlocksContent(sessionFor(USER_ID)), false);
  });
});
