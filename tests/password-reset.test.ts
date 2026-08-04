import { test, describe, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { passwordResetTokens, sessions, users } from "@/lib/db/schema";
import { verifyPassword } from "@/lib/auth/password";
import { createResetTokenCore, redeemResetTokenCore } from "@/lib/actions/password-reset-core";
import { uid } from "@/lib/utils";

/**
 * Integration test against the real DB for the previously-missing password
 * reset flow (`docs/PRODUCT_AUDIT.md` gap: "no resetPassword/forgotPassword
 * action, route, or token table"). Exercises `password-reset-core.ts`
 * directly — the request-scoped wrapper (`password-reset.ts`, which reads
 * `headers()` and sends the actual email) isn't unit-testable outside a
 * live Next.js request, same boundary as `signIn`/`signUp` in `auth.ts`.
 */

const USER_ID = uid("testuser");
const OLD_PASSWORD_HASH = "scrypt$1$1$1$test$test"; // never verified against; just a seed value

function hashToken(raw: string): string {
  return createHash("sha256").update(raw).digest("hex");
}

async function cleanup() {
  await db.delete(sessions).where(eq(sessions.userId, USER_ID));
  await db.delete(passwordResetTokens).where(eq(passwordResetTokens.userId, USER_ID));
  await db.delete(users).where(eq(users.id, USER_ID));
}

beforeEach(async () => {
  await cleanup();
  await db.insert(users).values({
    id: USER_ID,
    email: `${USER_ID}@test.invalid`,
    passwordHash: OLD_PASSWORD_HASH,
    name: "Reset Test User",
  });
});

after(cleanup);

describe("createResetTokenCore + redeemResetTokenCore", () => {
  test("a valid token changes the password and marks itself used", async () => {
    const raw = await createResetTokenCore(USER_ID);

    const result = await redeemResetTokenCore(raw, "Str0ng!Passw0rd");
    assert.deepEqual(result, { ok: true });

    const userRow = (await db.select().from(users).where(eq(users.id, USER_ID)))[0];
    assert.ok(userRow);
    assert.ok(await verifyPassword("Str0ng!Passw0rd", userRow.passwordHash));

    const tokenRow = (
      await db.select().from(passwordResetTokens).where(eq(passwordResetTokens.tokenHash, hashToken(raw)))
    )[0];
    assert.ok(tokenRow?.usedAt, "token must be marked used after redemption");
  });

  test("redeeming the same token twice fails the second time", async () => {
    const raw = await createResetTokenCore(USER_ID);
    await redeemResetTokenCore(raw, "Str0ng!Passw0rd");

    const second = await redeemResetTokenCore(raw, "AnotherStr0ng!Pass");
    assert.deepEqual(second, { ok: false, code: "used_token" });
  });

  test("a garbage/unknown token is rejected as invalid", async () => {
    const result = await redeemResetTokenCore("not-a-real-token", "Str0ng!Passw0rd");
    assert.deepEqual(result, { ok: false, code: "invalid_token" });
  });

  test("an expired token is rejected even though it was never used", async () => {
    const raw = await createResetTokenCore(USER_ID);
    await db
      .update(passwordResetTokens)
      .set({ expiresAt: Date.now() - 1000 })
      .where(eq(passwordResetTokens.tokenHash, hashToken(raw)));

    const result = await redeemResetTokenCore(raw, "Str0ng!Passw0rd");
    assert.deepEqual(result, { ok: false, code: "expired_token" });
  });

  test("a too-short new password is rejected and the token stays usable", async () => {
    const raw = await createResetTokenCore(USER_ID);

    const rejected = await redeemResetTokenCore(raw, "short1!");
    assert.deepEqual(rejected, { ok: false, code: "password_length" });

    // token was not consumed by the failed attempt — a valid password still works
    const accepted = await redeemResetTokenCore(raw, "Str0ng!Passw0rd");
    assert.deepEqual(accepted, { ok: true });
  });

  test("a low-variety new password is rejected", async () => {
    const raw = await createResetTokenCore(USER_ID);
    const result = await redeemResetTokenCore(raw, "aaaaaaaaaaaaaaaa");
    assert.deepEqual(result, { ok: false, code: "password_variety" });
  });

  test("redeeming one token invalidates every other outstanding token for the same user", async () => {
    const rawA = await createResetTokenCore(USER_ID);
    const rawB = await createResetTokenCore(USER_ID);

    const first = await redeemResetTokenCore(rawA, "Str0ng!Passw0rd");
    assert.deepEqual(first, { ok: true });

    const second = await redeemResetTokenCore(rawB, "AnotherStr0ng!Pass");
    assert.deepEqual(second, { ok: false, code: "used_token" });
  });

  test("a successful redemption revokes every existing session for the account", async () => {
    // Inserted directly rather than via `createSession()` — that helper calls
    // `cookies()` from `next/headers`, which requires a live request scope
    // this plain node:test run doesn't have. `revokeAllSessions()` (what
    // `redeemResetTokenCore` actually calls) only touches the DB, so a
    // hand-inserted row exercises it identically.
    await db.insert(sessions).values({
      id: uid("sess"),
      userId: USER_ID,
      expiresAt: Date.now() + 60_000,
      userAgent: "test-agent",
    });
    const before = await db.select().from(sessions).where(eq(sessions.userId, USER_ID));
    assert.equal(before.length, 1);
    assert.equal(before[0]?.revokedAt, null);

    const raw = await createResetTokenCore(USER_ID);
    await redeemResetTokenCore(raw, "Str0ng!Passw0rd");

    const after_ = await db.select().from(sessions).where(eq(sessions.userId, USER_ID));
    assert.equal(after_.length, 1);
    assert.ok(after_[0]?.revokedAt, "the pre-existing session must be revoked after a password reset");
  });
});
