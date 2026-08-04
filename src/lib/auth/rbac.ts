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
  | "platform.admin";

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

export function permissionsFor(user: SessionUser): Set<Permission> {
  const set = new Set<Permission>(SYSTEM_ROLE_PERMISSIONS[user.systemRole]);
  const orgRole = user.organization?.role;
  if (orgRole) for (const p of ORG_ROLE_PERMISSIONS[orgRole] ?? []) set.add(p);
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
const PLATFORM_OWNER_EMAILS = ["wfklawfirm@gmail.com"];

export function isPlatformOwner(user: SessionUser): boolean {
  return PLATFORM_OWNER_EMAILS.includes(user.email.toLowerCase());
}

export function requirePlatformOwner(user: SessionUser): void {
  if (!isPlatformOwner(user)) {
    void logAccessDenial(user, "forbidden", { permission: "platform.owner" });
    throw new AuthError("forbidden");
  }
}
