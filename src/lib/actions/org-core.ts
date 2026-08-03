import { and, avg, count, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { masteryRecords, memberships, organizations, unitProgress, users } from "@/lib/db/schema";
import { assertTenant, require_ } from "@/lib/auth/rbac";
import type { SessionUser } from "@/lib/auth/session";
import { uid } from "@/lib/utils";

/**
 * The org-admin business logic, factored out of `org.ts` ("use server") so it
 * can be exercised directly in tests with a fabricated `SessionUser` — a
 * plain module has no RPC boundary, so nothing here is reachable by a client
 * except through `org.ts`'s thin wrappers, which are the only place
 * `requireUser()` (real session/cookie resolution) runs. Every function here
 * still takes the resolved user and still calls `require_()` +
 * `assertTenant()` itself; the split only removes `requireUser()`'s
 * request-scope dependency (Next's `cookies()`) from the code path under
 * test, it does not remove any check.
 */

export type OrgRole = "owner" | "admin" | "manager" | "author" | "member";

export interface OrgMember {
  membershipId: string;
  userId: string;
  name: string;
  email: string;
  role: OrgRole;
  joinedAt: number;
}

export async function listOrgMembersCore(user: SessionUser, organizationId: string): Promise<OrgMember[]> {
  require_(user, "org.reports");
  assertTenant(user, organizationId);

  const rows = await db
    .select({
      membershipId: memberships.id,
      userId: memberships.userId,
      name: users.name,
      email: users.email,
      role: memberships.role,
      joinedAt: memberships.createdAt,
    })
    .from(memberships)
    .innerJoin(users, eq(users.id, memberships.userId))
    .where(eq(memberships.organizationId, organizationId));

  return rows;
}

export async function addOrgMemberCore(
  user: SessionUser,
  organizationId: string,
  email: string,
  role: OrgRole,
): Promise<void> {
  require_(user, "org.members.manage");
  assertTenant(user, organizationId);

  const target = (await db.select().from(users).where(eq(users.email, email.trim().toLowerCase())).limit(1))[0];
  if (!target) throw new Error("member_not_found");

  const existing = (
    await db
      .select({ id: memberships.id })
      .from(memberships)
      .where(and(eq(memberships.userId, target.id), eq(memberships.organizationId, organizationId)))
      .limit(1)
  )[0];
  if (existing) throw new Error("already_member");

  await db.insert(memberships).values({ id: uid("mem"), userId: target.id, organizationId, role });
}

export async function updateMemberRoleCore(
  user: SessionUser,
  organizationId: string,
  membershipId: string,
  role: OrgRole,
): Promise<void> {
  require_(user, "org.members.manage");
  assertTenant(user, organizationId);

  // A membership id from a different organization must not be usable here —
  // assertTenant() only checks the *caller's* organization; this checks the
  // *target row* actually belongs to it too.
  const target = (await db.select().from(memberships).where(eq(memberships.id, membershipId)).limit(1))[0];
  if (!target || target.organizationId !== organizationId) throw new Error("member_not_found");

  if (target.role === "owner" && role !== "owner") {
    await assertNotLastOwner(organizationId, membershipId);
  }

  await db.update(memberships).set({ role }).where(eq(memberships.id, membershipId));
}

export async function removeOrgMemberCore(
  user: SessionUser,
  organizationId: string,
  membershipId: string,
): Promise<void> {
  require_(user, "org.members.manage");
  assertTenant(user, organizationId);

  const target = (await db.select().from(memberships).where(eq(memberships.id, membershipId)).limit(1))[0];
  if (!target || target.organizationId !== organizationId) throw new Error("member_not_found");

  if (target.role === "owner") {
    await assertNotLastOwner(organizationId, membershipId);
  }

  await db.delete(memberships).where(eq(memberships.id, membershipId));
}

/** An organization must always keep at least one owner — refuses to demote/remove the last one. */
async function assertNotLastOwner(organizationId: string, excludingMembershipId: string): Promise<void> {
  const owners = await db
    .select({ id: memberships.id })
    .from(memberships)
    .where(and(eq(memberships.organizationId, organizationId), eq(memberships.role, "owner")));
  const remaining = owners.filter((o) => o.id !== excludingMembershipId);
  if (remaining.length === 0) throw new Error("cannot_remove_last_owner");
}

export interface OrgReportRow {
  userId: string;
  name: string;
  email: string;
  unitsCompleted: number;
  avgMasteryLevel: number | null;
}

/**
 * A deliberately small report — a member's units-completed count and average
 * mastery level, not a full analytics dashboard. Respects the org's own
 * `privacyPolicy.managersSeeScores` setting: if the organization has opted
 * out of managers seeing scores, this returns member identity only.
 */
export async function getOrgReportCore(user: SessionUser, organizationId: string): Promise<OrgReportRow[]> {
  require_(user, "org.reports");
  assertTenant(user, organizationId);

  const org = (await db.select().from(organizations).where(eq(organizations.id, organizationId)).limit(1))[0];
  const canSeeScores = user.systemRole === "admin" || org?.privacyPolicy?.managersSeeScores !== false;

  const members = await db
    .select({ userId: memberships.userId, name: users.name, email: users.email })
    .from(memberships)
    .innerJoin(users, eq(users.id, memberships.userId))
    .where(eq(memberships.organizationId, organizationId));

  if (!canSeeScores) {
    return members.map((m) => ({ ...m, unitsCompleted: 0, avgMasteryLevel: null }));
  }

  const rows: OrgReportRow[] = [];
  for (const m of members) {
    const completedRow = (
      await db
        .select({ n: count() })
        .from(unitProgress)
        .where(and(eq(unitProgress.userId, m.userId), eq(unitProgress.state, "completed")))
    )[0];
    const masteryRow = (
      await db.select({ avgLevel: avg(masteryRecords.level) }).from(masteryRecords).where(eq(masteryRecords.userId, m.userId))
    )[0];
    rows.push({
      ...m,
      unitsCompleted: completedRow?.n ?? 0,
      avgMasteryLevel: masteryRow?.avgLevel != null ? Math.round(Number(masteryRow.avgLevel) * 10) / 10 : null,
    });
  }
  return rows;
}
