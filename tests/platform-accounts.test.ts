import { test, describe, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { eq, inArray } from "drizzle-orm";
import { db } from "@/lib/db";
import { auditLog, passwordResetTokens, profiles, sessions, users } from "@/lib/db/schema";
import { AuthError, type SessionUser } from "@/lib/auth/session";
import { isPlatformOwner } from "@/lib/auth/rbac";
import { redeemResetTokenCore } from "@/lib/actions/password-reset-core";
import {
  createAccountCore,
  listAccountsCore,
  setAccessExpiresAtCore,
  setAccountStatusCore,
} from "@/lib/actions/platform-accounts-core";
import { uid } from "@/lib/utils";

/**
 * Integration test against the real (dev/seed) SQLite DB, same style as
 * `tests/org-tenant-isolation.test.ts` — `platform-accounts-core.ts` takes
 * the resolved `SessionUser` as a parameter rather than resolving it from
 * cookies itself, so it's directly callable here with a fabricated user
 * standing in for what `requireUser()` would have returned from a real
 * session. The `requirePlatformOwner()` calls inside run exactly as they
 * would in production.
 *
 * The email-allowlist gate (`isPlatformOwner()`/`PLATFORM_OWNER_EMAILS`,
 * `rbac.ts`) is exercised directly, not mocked around — a test that
 * fabricated a "platform owner" `SessionUser` with an arbitrary email would
 * prove nothing about the actual gate.
 */

const OWNER_EMAIL = "wfklawfirm@gmail.com";
const NON_OWNER_ID = uid("testuser");
const TEST_TARGET_ID = uid("testuser");

function owner(): SessionUser {
  return {
    id: uid("owneruser"),
    email: OWNER_EMAIL,
    name: "Platform Owner",
    locale: "en",
    systemRole: "learner",
    sessionId: "test-session",
    organization: null,
  };
}

function nonOwner(): SessionUser {
  return {
    id: NON_OWNER_ID,
    email: `${NON_OWNER_ID}@test.invalid`,
    name: "Regular Admin",
    // Even holding the broad `admin` systemRole must not grant platform
    // ownership -- that's the entire point of it being a separate,
    // hardcoded-email gate rather than a `Permission`.
    systemRole: "admin",
    locale: "en",
    sessionId: "test-session",
    organization: null,
  };
}

const TARGET_EMAILS = [
  `${TEST_TARGET_ID}@test.invalid`,
  `${TEST_TARGET_ID}@unmistakable-search-term.invalid`,
];

/**
 * `createAccountCore` assigns its own internal `uid("user")` id rather than
 * accepting a caller-supplied one -- exactly as it should for real callers,
 * since the platform owner never picks a user id by hand. That means
 * cleanup can't rely on `TEST_TARGET_ID` alone for rows created *through*
 * `createAccountCore` (as opposed to the direct `db.insert(users)` calls
 * elsewhere in this file, which do set `id: TEST_TARGET_ID`): it looks up
 * whatever id actually landed under each fixed test email and deletes that,
 * on top of the known constant id.
 */
async function cleanup() {
  const existing = await db.select({ id: users.id }).from(users).where(inArray(users.email, TARGET_EMAILS));
  const ids = new Set([TEST_TARGET_ID, ...existing.map((r) => r.id)]);
  for (const id of ids) {
    await db.delete(passwordResetTokens).where(eq(passwordResetTokens.userId, id));
    await db.delete(sessions).where(eq(sessions.userId, id));
    await db.delete(profiles).where(eq(profiles.userId, id));
    await db.delete(users).where(eq(users.id, id));
  }
  await db.delete(auditLog).where(eq(auditLog.actorId, NON_OWNER_ID));
  await db.delete(users).where(eq(users.id, NON_OWNER_ID));
}

beforeEach(async () => {
  await cleanup();
  await db.insert(users).values({
    id: NON_OWNER_ID,
    email: `${NON_OWNER_ID}@test.invalid`,
    passwordHash: "scrypt$1$1$1$test$test",
    name: "Regular Admin",
    systemRole: "admin",
  });
});

after(cleanup);

describe("isPlatformOwner — a hardcoded email allowlist, not a role", () => {
  test("the exact owner email matches, case-insensitively", () => {
    assert.equal(isPlatformOwner(owner()), true);
    assert.equal(isPlatformOwner({ ...owner(), email: "WFKlawfirm@GMAIL.com" }), true);
  });

  test("holding the broad 'admin' systemRole does not by itself grant platform ownership", () => {
    assert.equal(isPlatformOwner(nonOwner()), false);
  });
});

describe("platform-accounts-core — every mutation is gated on isPlatformOwner", () => {
  test("a non-owner (even with systemRole 'admin') cannot list accounts", async () => {
    await assert.rejects(() => listAccountsCore(nonOwner(), ""), AuthError);
  });

  test("a non-owner cannot create an account", async () => {
    await assert.rejects(
      () =>
        createAccountCore(nonOwner(), {
          email: `${TEST_TARGET_ID}@test.invalid`,
          name: "Should Not Exist",
          systemRole: "learner",
          accessExpiresAt: null,
        }),
      AuthError,
    );
    const rows = await db.select({ id: users.id }).from(users).where(eq(users.email, `${TEST_TARGET_ID}@test.invalid`));
    assert.equal(rows.length, 0, "no account was written despite the attempt");
  });

  test("a non-owner cannot suspend or extend an existing account", async () => {
    await assert.rejects(() => setAccountStatusCore(nonOwner(), NON_OWNER_ID, "suspended"), AuthError);
    await assert.rejects(() => setAccessExpiresAtCore(nonOwner(), NON_OWNER_ID, Date.now()), AuthError);
  });
});

describe("createAccountCore — real account creation with a self-service password", () => {
  test("creates a user + profile row, no password the caller ever sees, and a redeemable reset token", async () => {
    const { userId, resetToken } = await createAccountCore(owner(), {
      email: `${TEST_TARGET_ID}@test.invalid`,
      name: "New Client",
      systemRole: "learner",
      accessExpiresAt: null,
    });
    assert.ok(resetToken.length > 0);

    const userRow = (await db.select().from(users).where(eq(users.id, userId)))[0];
    assert.ok(userRow);
    assert.equal(userRow!.email, `${TEST_TARGET_ID}@test.invalid`);
    assert.equal(userRow!.accountStatus, "active");
    assert.equal(userRow!.accessExpiresAt, null);
    assert.ok(userRow!.emailVerifiedAt !== null, "admin-created accounts are marked verified immediately");

    const profileRow = (await db.select().from(profiles).where(eq(profiles.userId, userId)))[0];
    assert.ok(profileRow, "a profiles row exists so onboarding works normally");

    // The account cannot be signed into with anything guessable -- but it
    // *can* be signed into after redeeming the emailed token, proving the
    // "set your own password" flow this reuses actually works end to end.
    const redeemed = await redeemResetTokenCore(resetToken, "a-Real-Password-123");
    assert.deepEqual(redeemed, { ok: true });
  });

  test("a duplicate email is rejected and writes nothing", async () => {
    await createAccountCore(owner(), {
      email: `${TEST_TARGET_ID}@test.invalid`,
      name: "First",
      systemRole: "learner",
      accessExpiresAt: null,
    });
    await assert.rejects(
      () =>
        createAccountCore(owner(), {
          email: `${TEST_TARGET_ID}@test.invalid`,
          name: "Second",
          systemRole: "learner",
          accessExpiresAt: null,
        }),
      /email_taken/,
    );
    const rows = await db.select({ id: users.id }).from(users).where(eq(users.email, `${TEST_TARGET_ID}@test.invalid`));
    assert.equal(rows.length, 1, "still exactly the first account, no duplicate");
  });
});

describe("setAccountStatusCore — suspend is immediate, not just 'blocked next login'", () => {
  test("suspending revokes every existing session for that account right away", async () => {
    await db.insert(users).values({
      id: TEST_TARGET_ID,
      email: `${TEST_TARGET_ID}@test.invalid`,
      passwordHash: "scrypt$1$1$1$test$test",
      name: "Target",
    });
    const sessionId = uid("sess");
    await db.insert(sessions).values({ id: sessionId, userId: TEST_TARGET_ID, expiresAt: Date.now() + 100000 });

    await setAccountStatusCore(owner(), TEST_TARGET_ID, "suspended");

    const userRow = (await db.select().from(users).where(eq(users.id, TEST_TARGET_ID)))[0];
    assert.equal(userRow!.accountStatus, "suspended");
    const sessionRow = (await db.select().from(sessions).where(eq(sessions.id, sessionId)))[0];
    assert.ok(sessionRow!.revokedAt !== null, "the pre-existing session was revoked, not left live");
  });

  test("reactivating clears the suspended status", async () => {
    await db.insert(users).values({
      id: TEST_TARGET_ID,
      email: `${TEST_TARGET_ID}@test.invalid`,
      passwordHash: "scrypt$1$1$1$test$test",
      name: "Target",
      accountStatus: "suspended",
    });
    await setAccountStatusCore(owner(), TEST_TARGET_ID, "active");
    const userRow = (await db.select().from(users).where(eq(users.id, TEST_TARGET_ID)))[0];
    assert.equal(userRow!.accountStatus, "active");
  });
});

describe("setAccessExpiresAtCore — extend, clear, and immediate expiry", () => {
  test("setting a future date does not revoke a live session", async () => {
    await db.insert(users).values({
      id: TEST_TARGET_ID,
      email: `${TEST_TARGET_ID}@test.invalid`,
      passwordHash: "scrypt$1$1$1$test$test",
      name: "Target",
    });
    const sessionId = uid("sess");
    await db.insert(sessions).values({ id: sessionId, userId: TEST_TARGET_ID, expiresAt: Date.now() + 100000 });

    await setAccessExpiresAtCore(owner(), TEST_TARGET_ID, Date.now() + 30 * 24 * 60 * 60 * 1000);

    const sessionRow = (await db.select().from(sessions).where(eq(sessions.id, sessionId)))[0];
    assert.equal(sessionRow!.revokedAt, null, "a future expiration doesn't touch a currently-valid session");
  });

  test("setting a past date (immediate expiry) revokes the live session right away", async () => {
    await db.insert(users).values({
      id: TEST_TARGET_ID,
      email: `${TEST_TARGET_ID}@test.invalid`,
      passwordHash: "scrypt$1$1$1$test$test",
      name: "Target",
    });
    const sessionId = uid("sess");
    await db.insert(sessions).values({ id: sessionId, userId: TEST_TARGET_ID, expiresAt: Date.now() + 100000 });

    await setAccessExpiresAtCore(owner(), TEST_TARGET_ID, Date.now() - 1000);

    const sessionRow = (await db.select().from(sessions).where(eq(sessions.id, sessionId)))[0];
    assert.ok(sessionRow!.revokedAt !== null, "an already-past expiration date revokes existing sessions immediately");
  });

  test("null clears the expiration entirely", async () => {
    await db.insert(users).values({
      id: TEST_TARGET_ID,
      email: `${TEST_TARGET_ID}@test.invalid`,
      passwordHash: "scrypt$1$1$1$test$test",
      name: "Target",
      accessExpiresAt: Date.now() + 100000,
    });
    await setAccessExpiresAtCore(owner(), TEST_TARGET_ID, null);
    const userRow = (await db.select().from(users).where(eq(users.id, TEST_TARGET_ID)))[0];
    assert.equal(userRow!.accessExpiresAt, null);
  });
});

describe("listAccountsCore — search by name or email", () => {
  test("a search term filters to matching accounts only", async () => {
    await db.insert(users).values({
      id: TEST_TARGET_ID,
      email: `${TEST_TARGET_ID}@unmistakable-search-term.invalid`,
      passwordHash: "scrypt$1$1$1$test$test",
      name: "Findable Target",
    });
    const results = await listAccountsCore(owner(), "unmistakable-search-term");
    assert.equal(results.length, 1);
    assert.equal(results[0]?.id, TEST_TARGET_ID);

    const noMatch = await listAccountsCore(owner(), "no-such-term-anywhere-xyz");
    assert.equal(noMatch.length, 0);
  });
});
