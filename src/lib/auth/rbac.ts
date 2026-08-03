import "server-only";
import { AuthError, type SessionUser } from "./session";

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
  if (!can(user, permission)) throw new AuthError("forbidden");
}

/**
 * Tenant isolation. Any query that touches organisation-scoped data must pass
 * the requested org through here first; a user may only ever act inside the
 * organisation their current session is bound to.
 */
export function assertTenant(user: SessionUser, organizationId: string): void {
  if (user.systemRole === "admin") return;
  if (!user.organization || user.organization.id !== organizationId) {
    throw new AuthError("forbidden");
  }
}
