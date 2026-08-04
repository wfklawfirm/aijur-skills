import { desc, eq, like, or } from "drizzle-orm";
import { db } from "@/lib/db";
import { profiles, users } from "@/lib/db/schema";
import { requirePlatformOwner } from "@/lib/auth/rbac";
import { revokeAllSessions, type SessionUser } from "@/lib/auth/session";
import { hashPassword } from "@/lib/auth/password";
import { createResetTokenCore } from "@/lib/actions/password-reset-core";
import { uid } from "@/lib/utils";

/**
 * Platform-wide account lifecycle, factored out of `platform-accounts.ts`
 * ("use server") the same way `org-core.ts` is split from `org.ts` — every
 * function here takes the already-resolved `SessionUser` and calls
 * `requirePlatformOwner()` itself, so this is directly testable with a
 * fabricated session user and carries the real security boundary even if a
 * caller somehow bypassed the `/admin/accounts` page's own redirect guard.
 */

export type SystemRole = "learner" | "author" | "reviewer" | "admin";
export type AccountStatus = "active" | "suspended";

export interface PlatformAccount {
  id: string;
  email: string;
  name: string;
  systemRole: SystemRole;
  accountStatus: AccountStatus;
  accessExpiresAt: number | null;
  emailVerifiedAt: number | null;
  lastSeenAt: number | null;
  createdAt: number;
}

const LIST_LIMIT = 50;

export async function listAccountsCore(user: SessionUser, search: string): Promise<PlatformAccount[]> {
  requirePlatformOwner(user);

  const trimmed = search.trim();
  const where = trimmed
    ? or(like(users.email, `%${trimmed}%`), like(users.name, `%${trimmed}%`))
    : undefined;

  const rows = await db
    .select({
      id: users.id,
      email: users.email,
      name: users.name,
      systemRole: users.systemRole,
      accountStatus: users.accountStatus,
      accessExpiresAt: users.accessExpiresAt,
      emailVerifiedAt: users.emailVerifiedAt,
      lastSeenAt: users.lastSeenAt,
      createdAt: users.createdAt,
    })
    .from(users)
    .where(where)
    .orderBy(desc(users.createdAt))
    .limit(LIST_LIMIT);

  return rows;
}

/**
 * Creates a real account with no password the platform owner ever sees or
 * sets — a random, never-persisted-in-plaintext placeholder is hashed and
 * stored so the account exists (and can be listed/suspended/extended)
 * immediately, but cannot be signed into until the new owner follows the
 * emailed link and sets their own password. That link reuses the existing
 * password-reset token flow (`createResetTokenCore` / `/reset-password/
 * [token]`) rather than inventing a parallel "invite token" mechanism — a
 * freshly created account and a "you forgot your password" account both
 * reduce to the same real question, "prove you control this inbox, then set
 * a password", so one flow honestly covers both.
 *
 * `emailVerifiedAt` is set immediately: the platform owner is vouching for
 * this address by typing it in themselves, and clicking the emailed link is
 * itself proof of inbox control — a second, separate verification email
 * would be redundant friction, not extra safety.
 */
export async function createAccountCore(
  user: SessionUser,
  input: { email: string; name: string; systemRole: SystemRole; accessExpiresAt: number | null },
): Promise<{ userId: string; resetToken: string }> {
  requirePlatformOwner(user);

  const email = input.email.trim().toLowerCase();
  const name = input.name.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("invalid_email");
  if (!name) throw new Error("invalid_name");

  const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1);
  if (existing.length > 0) throw new Error("email_taken");

  // Never returned, never logged, never usable as a real credential -- only
  // its scrypt hash is stored, and the raw value is discarded the instant
  // this function returns.
  const unusablePassword = uid("unset");
  const passwordHash = await hashPassword(unusablePassword);

  const id = uid("user");
  const now = Date.now();
  await db.insert(users).values({
    id,
    email,
    passwordHash,
    name,
    systemRole: input.systemRole,
    emailVerifiedAt: now,
    accountStatus: "active",
    accessExpiresAt: input.accessExpiresAt,
  });
  await db.insert(profiles).values({ userId: id });

  const resetToken = await createResetTokenCore(id);
  return { userId: id, resetToken };
}

/**
 * Suspending revokes every existing session immediately (mirrors
 * `redeemResetTokenCore`'s "a password reset is exactly the moment a stolen
 * session should stop working too" reasoning) -- "توقيفها" (stop it) means
 * now, not "block it from signing in again next time".
 */
export async function setAccountStatusCore(
  user: SessionUser,
  targetUserId: string,
  status: AccountStatus,
): Promise<void> {
  requirePlatformOwner(user);
  const target = (await db.select({ id: users.id }).from(users).where(eq(users.id, targetUserId)).limit(1))[0];
  if (!target) throw new Error("account_not_found");

  await db.update(users).set({ accountStatus: status }).where(eq(users.id, targetUserId));
  if (status === "suspended") await revokeAllSessions(targetUserId);
}

/**
 * `expiresAt: null` clears the expiration entirely ("Remove expiration").
 * Setting a value already in the past revokes sessions immediately, the
 * same as an explicit suspend, rather than waiting for the lazy check in
 * `getSessionUser()` on that account's next request.
 */
export async function setAccessExpiresAtCore(
  user: SessionUser,
  targetUserId: string,
  expiresAt: number | null,
): Promise<void> {
  requirePlatformOwner(user);
  const target = (await db.select({ id: users.id }).from(users).where(eq(users.id, targetUserId)).limit(1))[0];
  if (!target) throw new Error("account_not_found");

  await db.update(users).set({ accessExpiresAt: expiresAt }).where(eq(users.id, targetUserId));
  if (expiresAt !== null && expiresAt < Date.now()) await revokeAllSessions(targetUserId);
}
