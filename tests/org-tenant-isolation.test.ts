import { test, describe, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { memberships, organizations, users } from "@/lib/db/schema";
import { AuthError, type SessionUser } from "@/lib/auth/session";
import {
  addOrgMemberCore,
  getOrgReportCore,
  listOrgMembersCore,
  removeOrgMemberCore,
  updateMemberRoleCore,
} from "@/lib/actions/org-core";
import { uid } from "@/lib/utils";

/**
 * Integration test against the real (dev/seed) SQLite DB, exercising
 * `org-core.ts` — the actual query logic behind every org-admin Server
 * Action — with two real organizations and a real cross-org caller. This is
 * the test the tenant-isolation gap in `docs/SECURITY.md` was missing:
 * `assertTenant()` itself was unit-tested against mock users
 * (`tests/rbac.test.ts`), but nothing proved it was actually wired into a
 * real data-touching code path. This proves an owner of org A cannot read,
 * add to, edit, or remove members of org B, and that a same-org caller can.
 *
 * `org-core.ts` takes the resolved `SessionUser` as a parameter rather than
 * resolving it from cookies itself — that's what makes it callable here at
 * all outside of a live Next.js request. The fabricated users below stand
 * in for what `requireUser()` would have returned from a real session; the
 * `require_()`/`assertTenant()` calls inside `org-core.ts` run exactly as
 * they would in production.
 */

const ORG_A_ID = uid("org");
const ORG_B_ID = uid("org");
const USER_A_ID = uid("testuser");
const USER_B_ID = uid("testuser");
const MEMBERSHIP_A_ID = uid("mem");
const MEMBERSHIP_B_ID = uid("mem");

function ownerOf(orgId: string, orgName: string, userId: string): SessionUser {
  return {
    id: userId,
    email: `${userId}@test.invalid`,
    name: "Test Owner",
    locale: "en",
    systemRole: "learner",
    sessionId: "test-session",
    organization: { id: orgId, name: orgName, slug: orgId, role: "owner" },
  };
}

function noOrgUser(userId: string): SessionUser {
  return {
    id: userId,
    email: `${userId}@test.invalid`,
    name: "Test No-Org User",
    locale: "en",
    systemRole: "learner",
    sessionId: "test-session",
    organization: null,
  };
}

async function cleanup() {
  await db.delete(memberships).where(eq(memberships.organizationId, ORG_A_ID));
  await db.delete(memberships).where(eq(memberships.organizationId, ORG_B_ID));
  await db.delete(users).where(eq(users.id, USER_A_ID));
  await db.delete(users).where(eq(users.id, USER_B_ID));
  await db.delete(organizations).where(eq(organizations.id, ORG_A_ID));
  await db.delete(organizations).where(eq(organizations.id, ORG_B_ID));
}

beforeEach(async () => {
  await cleanup();
  await db.insert(organizations).values([
    { id: ORG_A_ID, name: "Org A", slug: ORG_A_ID, kind: "law_firm" },
    { id: ORG_B_ID, name: "Org B", slug: ORG_B_ID, kind: "law_firm" },
  ]);
  await db.insert(users).values([
    { id: USER_A_ID, email: `${USER_A_ID}@test.invalid`, passwordHash: "scrypt$1$1$1$test$test", name: "User A" },
    { id: USER_B_ID, email: `${USER_B_ID}@test.invalid`, passwordHash: "scrypt$1$1$1$test$test", name: "User B" },
  ]);
  await db.insert(memberships).values([
    { id: MEMBERSHIP_A_ID, userId: USER_A_ID, organizationId: ORG_A_ID, role: "owner" },
    { id: MEMBERSHIP_B_ID, userId: USER_B_ID, organizationId: ORG_B_ID, role: "owner" },
  ]);
});

after(cleanup);

describe("org-core tenant isolation — cross-organization access is rejected", () => {
  test("listOrgMembersCore: org A's owner cannot list org B's members", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assert.rejects(() => listOrgMembersCore(caller, ORG_B_ID), AuthError);
  });

  test("listOrgMembersCore: org A's owner can list org A's own members", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    const rows = await listOrgMembersCore(caller, ORG_A_ID);
    assert.equal(rows.length, 1);
    assert.equal(rows[0]?.userId, USER_A_ID);
  });

  test("addOrgMemberCore: org A's owner cannot add a member to org B", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assert.rejects(() => addOrgMemberCore(caller, ORG_B_ID, `${USER_B_ID}@test.invalid`, "member"), AuthError);
    // and the row must not have been written despite the attempt
    const rows = await db.select().from(memberships).where(eq(memberships.organizationId, ORG_B_ID));
    assert.equal(rows.length, 1, "org B still has only its original owner membership");
  });

  test("updateMemberRoleCore: org A's owner cannot change a role in org B", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assert.rejects(() => updateMemberRoleCore(caller, ORG_B_ID, MEMBERSHIP_B_ID, "admin"), AuthError);
    const row = (await db.select().from(memberships).where(eq(memberships.id, MEMBERSHIP_B_ID)))[0];
    assert.equal(row?.role, "owner", "org B's membership role must be untouched");
  });

  test("removeOrgMemberCore: org A's owner cannot remove a member from org B", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assert.rejects(() => removeOrgMemberCore(caller, ORG_B_ID, MEMBERSHIP_B_ID), AuthError);
    const row = (await db.select().from(memberships).where(eq(memberships.id, MEMBERSHIP_B_ID)))[0];
    assert.ok(row, "org B's membership must still exist");
  });

  test("getOrgReportCore: org A's owner cannot pull a report for org B", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assert.rejects(() => getOrgReportCore(caller, ORG_B_ID), AuthError);
  });

  test("getOrgReportCore: org A's owner can pull org A's own report", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    const rows = await getOrgReportCore(caller, ORG_A_ID);
    assert.equal(rows.length, 1);
    assert.equal(rows[0]?.userId, USER_A_ID);
  });

  test("a user with no organization cannot reach any org's data through org-core", async () => {
    const caller = noOrgUser(USER_A_ID);
    await assert.rejects(() => listOrgMembersCore(caller, ORG_A_ID), AuthError);
    await assert.rejects(() => getOrgReportCore(caller, ORG_A_ID), AuthError);
  });

  test("updateMemberRoleCore: a membership id from another org is rejected even inside the caller's own org", async () => {
    // Guards against the case where assertTenant() passes (correct caller org)
    // but the *target row* being mutated actually belongs to a different org —
    // organizationId and membershipId must agree, not just organizationId alone.
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assert.rejects(() => updateMemberRoleCore(caller, ORG_A_ID, MEMBERSHIP_B_ID, "admin"), /member_not_found/);
  });
});
