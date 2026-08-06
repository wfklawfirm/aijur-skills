import "server-only";
import { AuthError, type SessionUser } from "./session";
import { logAccessDenial } from "./audit";

/**
 * Server-side authorisation. The UI hides what a user cannot do, but the UI is
 * never the check — every mutating route calls one of these.
 */

export type Permission =
  | "content.read"
  | "content.author"
  | "content.review"
  | "content.publish"
  | "source.manage"
  | "ingestion.decide"
  | "evaluation.review"
  | "org.members.manage"
  | "org.assign"
  | "org.reports"
  | "platform.admin"
  // Admin Dashboard (spec §1) -- granted via `platformRole`, a separate axis
  // from `systemRole`/org role below. Kept as fine-grained permissions (not
  // one big "admin" flag) so a future role can be given a subset.
  | "subscribers.read"
  | "subscribers.write"
  | "subscribers.manage_role"
  | "admins.manage"
  | "plans.manage"
  | "audit.read"
  | "reports.export"
  | "settings.manage";

const SYSTEM_ROLE_PERMISSIONS: Record<SessionUser["systemRole"], Permission[]> = {
  learner: ["content.read"],
  author: ["content.read", "content.author", "source.manage"],
  reviewer: [
    "content.read",
    "content.author",
    "content.review",
    "content.publish",
    "source.manage",
    "ingestion.decide",
    "evaluation.review",
  ],
  admin: [
    "content.read",
    "content.author",
    "content.review",
    "content.publish",
    "source.manage",
    "ingestion.decide",
    "evaluation.review",
    "org.members.manage",
    "org.assign",
    "org.reports",
    "platform.admin",
  ],
};

const ORG_ROLE_PERMISSIONS: Record<string, Permission[]> = {
  owner: ["org.members.manage", "org.assign", "org.reports", "content.author", "content.read"],
  admin: ["org.members.manage", "org.assign", "org.reports", "content.read"],
  manager: ["org.assign", "org.reports", "content.read"],
  author: ["content.author", "content.read"],
  member: ["content.read"],
};

/**
 * Admin Dashboard roles (spec §1). Non-null `SessionUser["platformRole"]`
 * values only -- a `null` platformRole contributes nothing here, same as an
 * absent org role contributes nothing from `ORG_ROLE_PERMISSIONS`.
 *
 *  - support: read-only visibility into subscribers/subscriptions, per spec
 *    ("editing permissions limited or unavailable").
 *  - admin: day-to-day subscriber/subscription management, reports, exports.
 *    Cannot manage other admins or plans, and (enforced in `subscribers-
 *    core.ts`, not here) cannot touch a Super Admin's account.
 *  - super_admin: everything, including managing other admins' platformRole
 *    and plans/settings.
 */
const PLATFORM_ROLE_PERMISSIONS: Record<
  NonNullable<SessionUser["platformRole"]>,
  Permission[]
> = {
  support: ["subscribers.read", "audit.read"],
  admin: ["subscribers.read", "subscribers.write", "audit.read", "reports.export"],
  super_admin: [
    "subscribers.read",
    "subscribers.write",
    "subscribers.manage_role",
    "admins.manage",
    "plans.manage",
    "audit.read",
    "reports.export",
    "settings.manage",
  ],
};

export function permissionsFor(user: SessionUser): Set<Permission> {
  const set = new Set<Permission>(SYSTEM_ROLE_PERMISSIONS[user.systemRole]);
  const orgRole = user.organization?.role;
  if (orgRole) for (const p of ORG_ROLE_PERMISSIONS[orgRole] ?? []) set.add(p);
  if (user.platformRole) for (const p of PLATFORM_ROLE_PERMISSIONS[user.platformRole]) set.add(p);
  // isPlatformOwner() stays a separate bootstrap check (see below) rather than
  // being folded in here, so the very first Super Admin can always be
  // assigned even before any `platformRole` row is set.
  if (isPlatformOwner(user)) for (const p of PLATFORM_ROLE_PERMISSIONS.super_admin) set.add(p);
  return set;
}

export function can(user: SessionUser, permission: Permission): boolean {
  return permissionsFor(user).has(permission);
}

export function require_(user: SessionUser, permission: Permission): void {
  if (!can(user, permission)) {
    void logAccessDenial(user, "forbidden", { permission });
    throw new AuthError("forbidden");
  }
}

/**
 * Tenant isolation. Any query that touches organisation-scoped data must pass
 * the requested org through here first; a user may only ever act inside the
 * organisation their current session is bound to.
 */
export function assertTenant(user: SessionUser, organizationId: string): void {
  if (user.systemRole === "admin") return;
  if (!user.organization || user.organization.id !== organizationId) {
    void logAccessDenial(user, "forbidden", { organizationId });
    throw new AuthError("forbidden");
  }
}

/**
 * Platform ownership -- deliberately NOT a `systemRole` or a `Permission`.
 * Every other capability in this file is something an org or a content team
 * could reasonably grant to more than one person; platform-wide account
 * lifecycle (create/suspend/extend access for *any* account, across every
 * organisation) is scoped to one specific, hardcoded owner instead, so it
 * can never be granted away by assigning someone the "admin" `systemRole`
 * for an unrelated reason (e.g. running Content Studio).
 *
 * Comparison is case-insensitive since email addresses are stored lowercase
 * (`signUp`'s zod schema normalises with `.toLowerCase()`) but this guard
 * should not depend on that always being true elsewhere.
 */
export const PLATFORM_OWNER_EMAILS = ["wfklawfirm@gmail.com"];

export function isPlatformOwner(user: SessionUser): boolean {
  return PLATFORM_OWNER_EMAILS.includes(user.email.toLowerCase());
}

export function requirePlatformOwner(user: SessionUser): void {
  if (!isPlatformOwner(user)) {
    void logAccessDenial(user, "forbidden", { permission: "platform.owner" });
    throw new AuthError("forbidden");
  }
}
