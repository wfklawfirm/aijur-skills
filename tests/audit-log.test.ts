import { test, describe, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { auditLog, users } from "@/lib/db/schema";
import { require_, assertTenant } from "@/lib/auth/rbac";
import { logAccessDenial } from "@/lib/auth/audit";
import { AuthError, type SessionUser } from "@/lib/auth/session";
import { uid } from "@/lib/utils";

/**
 * Integration test against the real `audit_log` table — the previously
 * "schema exists, unused" gap from `docs/SECURITY.md` §7. Covers both the
 * directly-exported `logAccessDenial()` (its own correctness) and the
 * indirect wiring through `require_()`/`assertTenant()` (fire-and-forget,
 * so these tests await a short settle delay before reading the DB — see
 * the comment on `logAccessDenial` in `src/lib/auth/audit.ts` for why it
 * isn't awaited at the call site).
 */

const TEST_USER_ID = uid("testuser");

function memberOf(orgId: string): SessionUser {
  return {
    id: TEST_USER_ID,
    email: `${TEST_USER_ID}@test.invalid`,
    name: "Audit Test User",
    locale: "en",
    systemRole: "learner",
    sessionId: "test-session",
    organization: { id: orgId, name: "Test Org", slug: orgId, role: "member" },
  };
}

async function wipe() {
  await db.delete(auditLog).where(eq(auditLog.actorId, TEST_USER_ID));
  await db.delete(auditLog).where(eq(auditLog.entityId, "anonymous"));
}

async function settle() {
  await new Promise((resolve) => setTimeout(resolve, 50));
}

beforeEach(async () => {
  await wipe();
  await db
    .insert(users)
    .values({ id: TEST_USER_ID, email: `${TEST_USER_ID}@test.invalid`, passwordHash: "scrypt$1$1$1$test$test", name: "Audit Test User" })
    .onConflictDoNothing();
});

after(async () => {
  await wipe();
  await db.delete(users).where(eq(users.id, TEST_USER_ID));
});

describe("logAccessDenial", () => {
  test("writes a forbidden-permission row with the permission in meta", async () => {
    const user = memberOf("org.test");
    await logAccessDenial(user, "forbidden", { permission: "content.publish" });

    const rows = await db.select().from(auditLog).where(eq(auditLog.actorId, TEST_USER_ID));
    assert.equal(rows.length, 1);
    assert.equal(rows[0]?.action, "auth.denied.forbidden");
    assert.equal(rows[0]?.entityType, "auth");
    assert.equal(rows[0]?.organizationId, "org.test");
    assert.deepEqual(rows[0]?.meta, { permission: "content.publish" });
  });

  test("an unauthenticated denial (no user) logs actorId null, entityId 'anonymous'", async () => {
    await logAccessDenial(null, "unauthenticated");

    const rows = await db.select().from(auditLog).where(eq(auditLog.entityId, "anonymous"));
    assert.equal(rows.length, 1);
    assert.equal(rows[0]?.action, "auth.denied.unauthenticated");
    assert.equal(rows[0]?.actorId, null);
  });
});

describe("require_() and assertTenant() actually trigger the audit write", () => {
  test("a require_() forbidden throw is logged with the permission", async () => {
    const user = memberOf("org.test"); // learner systemRole + member org role has no content.publish
    assert.throws(() => require_(user, "content.publish"), AuthError);
    await settle();

    const rows = await db.select().from(auditLog).where(eq(auditLog.actorId, TEST_USER_ID));
    assert.equal(rows.length, 1);
    assert.deepEqual(rows[0]?.meta, { permission: "content.publish" });
  });

  test("an assertTenant() forbidden throw is logged with the target organizationId", async () => {
    const user = memberOf("org.own");
    assert.throws(() => assertTenant(user, "org.other"), AuthError);
    await settle();

    const rows = await db.select().from(auditLog).where(eq(auditLog.actorId, TEST_USER_ID));
    assert.equal(rows.length, 1);
    assert.equal(rows[0]?.organizationId, "org.other");
  });

  test("a require_() call that succeeds writes nothing", async () => {
    const user = memberOf("org.test");
    require_(user, "content.read"); // learner has this
    await settle();

    const rows = await db.select().from(auditLog).where(eq(auditLog.actorId, TEST_USER_ID));
    assert.equal(rows.length, 0);
  });
});
