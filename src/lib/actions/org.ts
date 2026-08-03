"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth/session";
import { can } from "@/lib/auth/rbac";
import {
  addOrgMemberCore,
  getOrgReportCore,
  listOrgMembersCore,
  removeOrgMemberCore,
  updateMemberRoleCore,
  type OrgMember,
  type OrgReportRow,
  type OrgRole,
} from "./org-core";

// Note: types are NOT re-exported from here. A "use server" file's exports
// are all rewritten into RPC proxy references by Next's build, including
// type-only ones — `export type` gets treated as a value export to proxy
// and fails at build time because the type doesn't exist at runtime.
// Consumers import `OrgMember`/`OrgReportRow`/`OrgRole` straight from
// `./org-core` instead.

/**
 * The org-admin action surface — every one of these is org-scoped data, so
 * every one of them is a real call site for `assertTenant()`. This is the
 * gap flagged in `docs/SECURITY.md`: the tenant-isolation primitive was
 * built and unit-tested but had zero call sites, because no org-scoped
 * mutation existed yet. These are the first.
 *
 * Each export here is a thin wrapper: `requireUser()` resolves the real
 * signed-in session (this is the only thing that needs a live Next.js
 * request — cookies), then delegates to `org-core.ts`, which does the
 * actual `require_()` (what the caller may do) + `assertTenant()` (whose
 * data they're doing it to) + query work. That split is what lets
 * `org-core.ts` be exercised directly in `tests/org-tenant-isolation.test.ts`
 * with a fabricated session user, without needing a live request scope.
 */

export async function listOrgMembers(organizationId: string): Promise<OrgMember[]> {
  const user = await requireUser();
  return listOrgMembersCore(user, organizationId);
}

export async function addOrgMember(organizationId: string, email: string, role: OrgRole): Promise<void> {
  const user = await requireUser();
  await addOrgMemberCore(user, organizationId, email, role);
  revalidatePath("/[locale]/admin/organization", "page");
}

export async function updateMemberRole(organizationId: string, membershipId: string, role: OrgRole): Promise<void> {
  const user = await requireUser();
  await updateMemberRoleCore(user, organizationId, membershipId, role);
  revalidatePath("/[locale]/admin/organization", "page");
}

export async function removeOrgMember(organizationId: string, membershipId: string): Promise<void> {
  const user = await requireUser();
  await removeOrgMemberCore(user, organizationId, membershipId);
  revalidatePath("/[locale]/admin/organization", "page");
}

export async function getOrgReport(organizationId: string): Promise<OrgReportRow[]> {
  const user = await requireUser();
  return getOrgReportCore(user, organizationId);
}

/** Whether the current session user should see the Organization admin tab at all. */
export async function canManageOwnOrg(): Promise<boolean> {
  const user = await requireUser().catch(() => null);
  if (!user || !user.organization) return false;
  return can(user, "org.members.manage") || can(user, "org.reports");
}
