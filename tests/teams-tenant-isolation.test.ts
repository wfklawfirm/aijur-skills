import { test, describe, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { auditLog, memberships, organizations, teams, users } from "@/lib/db/schema";
import { AuthError, type SessionUser } from "@/lib/auth/session";
import {
  assignMemberTeamCore,
  createTeamCore,
  deleteTeamCore,
  listTeamsCore,
  renameTeamCore,
} from "@/lib/actions/teams-core";
import { uid } from "@/lib/utils";

/**
 * Same shape and reasoning as `tests/org-tenant-isolation.test.ts`, for the
 * `org.assign` half of the org-admin surface (`teams-core.ts`) rather than
 * the `org.members.manage`/`org.reports` half (`org-core.ts`). Two real
 * organizations, a real cross-org caller, proving `assertTenant()` actually
 * blocks team management and member-team assignment across organizations —
 * not just that the primitive throws in isolation (`tests/rbac.test.ts`).
 */

const ORG_A_ID = uid("org");
const ORG_B_ID = uid("org");
const USER_A_ID = uid("testuser");
const USER_B_ID = uid("testuser");
const MEMBERSHIP_A_ID = uid("mem");
const MEMBERSHIP_B_ID = uid("mem");
const TEAM_A_ID = uid("team");
const TEAM_B_ID = uid("team");

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

async function cleanup() {
  await db.delete(memberships).where(eq(memberships.organizationId, ORG_A_ID));
  await db.delete(memberships).where(eq(memberships.organizationId, ORG_B_ID));
  await db.delete(teams).where(eq(teams.organizationId, ORG_A_ID));
  await db.delete(teams).where(eq(teams.organizationId, ORG_B_ID));
  // require_()/assertTenant() log a fire-and-forget audit_log row (actorId
  // -> users.id, a real FK) on every forbidden call these tests deliberately
  // trigger — must be cleared before the users themselves, or the delete
  // below fails on the foreign key.
  await db.delete(auditLog).where(eq(auditLog.actorId, USER_A_ID));
  await db.delete(auditLog).where(eq(auditLog.actorId, USER_B_ID));
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
  await db.insert(teams).values([
    { id: TEAM_A_ID, organizationId: ORG_A_ID, name: "Team A" },
    { id: TEAM_B_ID, organizationId: ORG_B_ID, name: "Team B" },
  ]);
});

after(cleanup);

describe("teams-core tenant isolation — cross-organization access is rejected", () => {
  test("listTeamsCore: org A's owner cannot list org B's teams", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assert.rejects(() => listTeamsCore(caller, ORG_B_ID), AuthError);
  });

  test("listTeamsCore: org A's owner can list org A's own teams", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    const rows = await listTeamsCore(caller, ORG_A_ID);
    assert.equal(rows.length, 1);
    assert.equal(rows[0]?.id, TEAM_A_ID);
  });

  test("createTeamCore: org A's owner cannot create a team in org B", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assert.rejects(() => createTeamCore(caller, ORG_B_ID, "Intruder Team"), AuthError);
    const rows = await db.select().from(teams).where(eq(teams.organizationId, ORG_B_ID));
    assert.equal(rows.length, 1, "org B still has only its original team");
  });

  test("renameTeamCore: org A's owner cannot rename org B's team", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assert.rejects(() => renameTeamCore(caller, ORG_B_ID, TEAM_B_ID, "Renamed"), AuthError);
    const row = (await db.select().from(teams).where(eq(teams.id, TEAM_B_ID)))[0];
    assert.equal(row?.name, "Team B", "org B's team name must be untouched");
  });

  test("deleteTeamCore: org A's owner cannot delete org B's team", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assert.rejects(() => deleteTeamCore(caller, ORG_B_ID, TEAM_B_ID), AuthError);
    const row = (await db.select().from(teams).where(eq(teams.id, TEAM_B_ID)))[0];
    assert.ok(row, "org B's team must still exist");
  });

  test("assignMemberTeamCore: org A's owner cannot assign org B's member to a team", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assert.rejects(() => assignMemberTeamCore(caller, ORG_B_ID, MEMBERSHIP_B_ID, TEAM_B_ID), AuthError);
    const row = (await db.select().from(memberships).where(eq(memberships.id, MEMBERSHIP_B_ID)))[0];
    assert.equal(row?.teamId, null, "org B's member must remain unassigned");
  });

  test("assignMemberTeamCore: a membership id from another org is rejected even inside the caller's own org", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assert.rejects(
      () => assignMemberTeamCore(caller, ORG_A_ID, MEMBERSHIP_B_ID, TEAM_A_ID),
      /member_not_found/,
    );
  });

  test("assignMemberTeamCore: a team id from another org is rejected even inside the caller's own org", async () => {
    // The caller's org (A) and the target membership (A) both check out —
    // but the team id given belongs to org B. Must still be rejected.
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assert.rejects(
      () => assignMemberTeamCore(caller, ORG_A_ID, MEMBERSHIP_A_ID, TEAM_B_ID),
      /team_not_found/,
    );
  });

  test("assignMemberTeamCore: same-org assignment succeeds and unassignment (null) works", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assignMemberTeamCore(caller, ORG_A_ID, MEMBERSHIP_A_ID, TEAM_A_ID);
    let row = (await db.select().from(memberships).where(eq(memberships.id, MEMBERSHIP_A_ID)))[0];
    assert.equal(row?.teamId, TEAM_A_ID);

    await assignMemberTeamCore(caller, ORG_A_ID, MEMBERSHIP_A_ID, null);
    row = (await db.select().from(memberships).where(eq(memberships.id, MEMBERSHIP_A_ID)))[0];
    assert.equal(row?.teamId, null);
  });

  test("deleteTeamCore: deleting a team unassigns its members rather than blocking or orphaning them", async () => {
    const caller = ownerOf(ORG_A_ID, "Org A", USER_A_ID);
    await assignMemberTeamCore(caller, ORG_A_ID, MEMBERSHIP_A_ID, TEAM_A_ID);

    await deleteTeamCore(caller, ORG_A_ID, TEAM_A_ID);

    const row = (await db.select().from(memberships).where(eq(memberships.id, MEMBERSHIP_A_ID)))[0];
    assert.equal(row?.teamId, null, "the member must be unassigned, not left pointing at a deleted team");
    const teamRow = (await db.select().from(teams).where(eq(teams.id, TEAM_A_ID)))[0];
    assert.equal(teamRow, undefined, "the team row itself must be gone");
  });
});
