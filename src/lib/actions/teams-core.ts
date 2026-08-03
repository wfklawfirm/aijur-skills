import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { memberships, teams } from "@/lib/db/schema";
import { assertTenant, require_ } from "@/lib/auth/rbac";
import type { SessionUser } from "@/lib/auth/session";
import { uid } from "@/lib/utils";

/**
 * Team management — the `org.assign` half of tenant-scoped org admin
 * (`org.members.manage`/`org.reports` are `org-core.ts`). Same split as
 * `org-core.ts`/`org.ts`: this is a plain module taking a resolved
 * `SessionUser`, so it's testable directly; `teams.ts` ("use server")
 * resolves the real session and delegates. Every function here calls
 * `require_(user, "org.assign")` + `assertTenant(user, organizationId)`
 * before touching a row.
 */

export interface Team {
  id: string;
  name: string;
  memberCount: number;
}

export async function listTeamsCore(user: SessionUser, organizationId: string): Promise<Team[]> {
  require_(user, "org.assign");
  assertTenant(user, organizationId);

  const rows = await db.select().from(teams).where(eq(teams.organizationId, organizationId));
  const memberRows = await db
    .select({ teamId: memberships.teamId })
    .from(memberships)
    .where(eq(memberships.organizationId, organizationId));

  const counts = new Map<string, number>();
  for (const m of memberRows) {
    if (!m.teamId) continue;
    counts.set(m.teamId, (counts.get(m.teamId) ?? 0) + 1);
  }

  return rows.map((t) => ({ id: t.id, name: t.name, memberCount: counts.get(t.id) ?? 0 }));
}

export async function createTeamCore(user: SessionUser, organizationId: string, name: string): Promise<Team> {
  require_(user, "org.assign");
  assertTenant(user, organizationId);

  const trimmed = name.trim();
  if (!trimmed) throw new Error("invalid_team_name");

  const id = uid("team");
  await db.insert(teams).values({ id, organizationId, name: trimmed });
  return { id, name: trimmed, memberCount: 0 };
}

export async function renameTeamCore(
  user: SessionUser,
  organizationId: string,
  teamId: string,
  name: string,
): Promise<void> {
  require_(user, "org.assign");
  assertTenant(user, organizationId);

  const trimmed = name.trim();
  if (!trimmed) throw new Error("invalid_team_name");

  const target = (await db.select().from(teams).where(eq(teams.id, teamId)).limit(1))[0];
  if (!target || target.organizationId !== organizationId) throw new Error("team_not_found");

  await db.update(teams).set({ name: trimmed }).where(eq(teams.id, teamId));
}

/**
 * Deletes a team. Members assigned to it are not deleted or blocked from
 * removal — they're unassigned (`teamId` set back to `null`), the same way
 * removing a folder doesn't delete the files in it. This is a product
 * choice, not a safety gap: unlike the last-owner guard on role changes,
 * there is no invariant that requires a team to keep any members.
 */
export async function deleteTeamCore(user: SessionUser, organizationId: string, teamId: string): Promise<void> {
  require_(user, "org.assign");
  assertTenant(user, organizationId);

  const target = (await db.select().from(teams).where(eq(teams.id, teamId)).limit(1))[0];
  if (!target || target.organizationId !== organizationId) throw new Error("team_not_found");

  await db
    .update(memberships)
    .set({ teamId: null })
    .where(and(eq(memberships.organizationId, organizationId), eq(memberships.teamId, teamId)));
  await db.delete(teams).where(eq(teams.id, teamId));
}

/**
 * Assigns (or, with `teamId: null`, unassigns) a member to a team. Both the
 * membership row and the team row are independently checked to belong to
 * `organizationId` — `assertTenant()` alone only validates the caller's own
 * organization, not that the two ids given actually point at rows inside
 * it (see the identical note in `org-core.ts`'s role/remove functions).
 */
export async function assignMemberTeamCore(
  user: SessionUser,
  organizationId: string,
  membershipId: string,
  teamId: string | null,
): Promise<void> {
  require_(user, "org.assign");
  assertTenant(user, organizationId);

  const membership = (await db.select().from(memberships).where(eq(memberships.id, membershipId)).limit(1))[0];
  if (!membership || membership.organizationId !== organizationId) throw new Error("member_not_found");

  if (teamId !== null) {
    const team = (await db.select().from(teams).where(eq(teams.id, teamId)).limit(1))[0];
    if (!team || team.organizationId !== organizationId) throw new Error("team_not_found");
  }

  await db.update(memberships).set({ teamId }).where(eq(memberships.id, membershipId));
}
