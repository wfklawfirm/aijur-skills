"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth/session";
import {
  assignMemberTeamCore,
  createTeamCore,
  deleteTeamCore,
  listTeamsCore,
  renameTeamCore,
  type Team,
} from "./teams-core";

// Types are intentionally not re-exported here — see the note in `org.ts`:
// a "use server" file's exports are all rewritten into RPC proxy references
// at build time, and `export type` breaks that rewrite. Consumers import
// `Team` straight from `./teams-core`.

/**
 * Thin "use server" wrappers around `teams-core.ts`, mirroring `org.ts`:
 * `requireUser()` resolves the real session (the only part that needs a
 * live request), then delegates to the core function, which does the real
 * `require_("org.assign")` + `assertTenant()` + query work.
 */

export async function listTeams(organizationId: string): Promise<Team[]> {
  const user = await requireUser();
  return listTeamsCore(user, organizationId);
}

export async function createTeam(organizationId: string, name: string): Promise<Team> {
  const user = await requireUser();
  const team = await createTeamCore(user, organizationId, name);
  revalidatePath("/[locale]/admin/organization", "page");
  return team;
}

export async function renameTeam(organizationId: string, teamId: string, name: string): Promise<void> {
  const user = await requireUser();
  await renameTeamCore(user, organizationId, teamId, name);
  revalidatePath("/[locale]/admin/organization", "page");
}

export async function deleteTeam(organizationId: string, teamId: string): Promise<void> {
  const user = await requireUser();
  await deleteTeamCore(user, organizationId, teamId);
  revalidatePath("/[locale]/admin/organization", "page");
}

export async function assignMemberTeam(
  organizationId: string,
  membershipId: string,
  teamId: string | null,
): Promise<void> {
  const user = await requireUser();
  await assignMemberTeamCore(user, organizationId, membershipId, teamId);
  revalidatePath("/[locale]/admin/organization", "page");
}
