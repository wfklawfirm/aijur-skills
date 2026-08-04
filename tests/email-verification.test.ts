import { test, describe, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { emailVerificationTokens, users } from "@/lib/db/schema";
import { createVerificationTokenCore, redeemVerificationTokenCore } from "@/lib/actions/email-verification-core";
import { uid } from "@/lib/utils";

/**
 * Integration test against the real DB for the email-verification token
 * lifecycle (`docs/SECURITY.md` gap: "Not enforced — set unconditionally at
 * signup"). Exercises `email-verification-core.ts` directly, same
 * request-scope-free boundary as `tests/password-reset.test.ts`.
 */

const USER_ID = uid("testuser");

function hashToken(raw: string): string {
  return createHash("sha256").update(raw).digest("hex");
}

async function cleanup() {
  await db.delete(emailVerificationTokens).where(eq(emailVerificationTokens.userId, USER_ID));
  await db.delete(users).where(eq(users.id, USER_ID));
}

beforeEach(async () => {
  await cleanup();
  await db.insert(users).values({
    id: USER_ID,
    email: `${USER_ID}@test.invalid`,
    passwordHash: "scrypt$1$1$1$test$test",
    name: "Verify Test User",
  });
});

after(cleanup);

describe("createVerificationTokenCore + redeemVerificationTokenCore", () => {
  test("a fresh account has no emailVerifiedAt until a token is redeemed", async () => {
    const row = (await db.select().from(users).where(eq(users.id, USER_ID)))[0];
    assert.equal(row?.emailVerifiedAt, null);
  });

  test("a valid token sets emailVerifiedAt and marks itself used", async () => {
    const raw = await createVerificationTokenCore(USER_ID);

    const result = await redeemVerificationTokenCore(raw);
    assert.deepEqual(result, { ok: true });

    const userRow = (await db.select().from(users).where(eq(users.id, USER_ID)))[0];
    assert.ok(userRow?.emailVerifiedAt, "emailVerifiedAt must be set after redemption");

    const tokenRow = (
      await db.select().from(emailVerificationTokens).where(eq(emailVerificationTokens.tokenHash, hashToken(raw)))
    )[0];
    assert.ok(tokenRow?.usedAt, "token must be marked used after redemption");
  });

  test("redeeming the same token twice fails the second time", async () => {
    const raw = await createVerificationTokenCore(USER_ID);
    await redeemVerificationTokenCore(raw);

    const second = await redeemVerificationTokenCore(raw);
    assert.deepEqual(second, { ok: false, code: "used_token" });
  });

  test("a garbage/unknown token is rejected as invalid", async () => {
    const result = await redeemVerificationTokenCore("not-a-real-token");
    assert.deepEqual(result, { ok: false, code: "invalid_token" });
  });

  test("an expired token is rejected even though it was never used", async () => {
    const raw = await createVerificationTokenCore(USER_ID);
    await db
      .update(emailVerificationTokens)
      .set({ expiresAt: Date.now() - 1000 })
      .where(eq(emailVerificationTokens.tokenHash, hashToken(raw)));

    const result = await redeemVerificationTokenCore(raw);
    assert.deepEqual(result, { ok: false, code: "expired_token" });
  });

  test("a second, still-valid token for the same user is unaffected by the first being redeemed", async () => {
    // Unlike password reset, verifying an account isn't a security-sensitive
    // event that should burn sibling tokens — two live links from two
    // separate requests can both still work.
    const rawA = await createVerificationTokenCore(USER_ID);
    const rawB = await createVerificationTokenCore(USER_ID);

    const first = await redeemVerificationTokenCore(rawA);
    assert.deepEqual(first, { ok: true });

    const second = await redeemVerificationTokenCore(rawB);
    assert.deepEqual(second, { ok: true });
  });
});
