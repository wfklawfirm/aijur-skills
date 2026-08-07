"use server";

import { and, eq, ne } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { memberships, profiles, users } from "@/lib/db/schema";
import { destroySession, requireUser, revokeAllSessions } from "@/lib/auth/session";
import { verifyPassword } from "@/lib/auth/password";
import { assertSuperAdminSurvives } from "@/lib/actions/subscribers-core";
import { logAdminAction } from "@/lib/auth/audit";

export async function updateWeeklyGoal(minutes: number): Promise<void> {
  const user = await requireUser();
  await db
    .update(profiles)
    .set({ weeklyMinutesGoal: Math.min(600, Math.max(10, minutes)), updatedAt: Date.now() })
    .where(eq(profiles.userId, user.id));
  revalidatePath("/", "layout");
}

export async function updateAccessibility(patch: Record<string, boolean>): Promise<void> {
  const user = await requireUser();
  const rows = await db.select({ accessibility: profiles.accessibility }).from(profiles).where(eq(profiles.userId, user.id)).limit(1);
  const current = rows[0]?.accessibility ?? {};
  await db
    .update(profiles)
    .set({ accessibility: { ...current, ...patch }, updatedAt: Date.now() })
    .where(eq(profiles.userId, user.id));
  revalidatePath("/", "layout");
}

export async function setAiConsent(granted: boolean): Promise<void> {
  const user = await requireUser();
  await db
    .update(profiles)
    .set({ aiProcessingConsentAt: granted ? Date.now() : null, updatedAt: Date.now() })
    .where(eq(profiles.userId, user.id));
  revalidatePath("/", "layout");
}

export async function signOutEverywhere(): Promise<void> {
  const user = await requireUser();
  await revokeAllSessions(user.id);
}

export type DeleteAccountResult =
  | { ok: true }
  | { ok: false; error: "invalid_password" | "last_super_admin" | "sole_org_owner" };

/**
 * Real, self-service account deletion — required by both App Store and
 * Google Play review guidelines when an app supports account creation
 * (native app conversion brief: "in-app account deletion path with
 * identity confirmation"). Previously the Profile screen's delete button
 * was disabled with a generic error Callout (a real "non-functional
 * button" gap, flagged honestly rather than shipped silently).
 *
 * Deliberately a hard `DELETE FROM users`, not the admin dashboard's
 * `hideSubscriberCore` soft-delete (`deletedAt`) — that mechanism exists so
 * an *admin* can suspend visibility while preserving every record for
 * dispute/audit purposes; this is the *user's own* data-deletion request,
 * which both stores' guidelines and general privacy expectations treat as
 * actual erasure. Every dependent table in `schema.ts` already declares
 * `onDelete: "cascade"` (progress, mastery, evaluations, profile, sessions,
 * push tokens, ...) or `onDelete: "set null"` for rows that must survive
 * as attribution-anonymized (audit log entries, content this user
 * reviewed/published) — verified this session that libSQL enforces
 * `PRAGMA foreign_keys = ON` by default, so one `db.delete(users)` call
 * performs the entire real cascade; no per-table cleanup code to keep in
 * sync by hand.
 */
export async function deleteOwnAccount(password: string): Promise<DeleteAccountResult> {
  const user = await requireUser();

  const row = (
    await db
      .select({ passwordHash: users.passwordHash, platformRole: users.platformRole })
      .from(users)
      .where(eq(users.id, user.id))
      .limit(1)
  )[0];
  if (!row) return { ok: false, error: "invalid_password" };

  const valid = await verifyPassword(password, row.passwordHash);
  if (!valid) return { ok: false, error: "invalid_password" };

  // Never let self-deletion silently lock the whole platform out of the
  // Admin Dashboard -- same invariant `subscribers-core.ts` enforces for
  // admin-initiated removal (spec §16).
  if (row.platformRole === "super_admin") {
    try {
      await assertSuperAdminSurvives(user.id);
    } catch {
      return { ok: false, error: "last_super_admin" };
    }
  }

  // Don't let the sole owner of a team with other real members vanish and
  // orphan it -- a narrower, self-service analogue of the same concern.
  if (user.organization) {
    const [ownerRow, otherMembers] = await Promise.all([
      db
        .select({ id: memberships.id })
        .from(memberships)
        .where(
          and(
            eq(memberships.userId, user.id),
            eq(memberships.organizationId, user.organization.id),
            eq(memberships.role, "owner"),
          ),
        )
        .limit(1),
      db
        .select({ id: memberships.id })
        .from(memberships)
        .where(and(eq(memberships.organizationId, user.organization.id), ne(memberships.userId, user.id)))
        .limit(1),
    ]);
    if (ownerRow.length > 0 && otherMembers.length > 0) {
      return { ok: false, error: "sole_org_owner" };
    }
  }

  void logAdminAction(user, {
    action: "account.self_deleted",
    entityType: "user",
    entityId: user.id,
  });

  await db.delete(users).where(eq(users.id, user.id));
  await destroySession();

  return { ok: true };
}

