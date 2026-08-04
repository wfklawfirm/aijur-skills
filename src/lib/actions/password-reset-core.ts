import "server-only";
import { createHash, randomBytes } from "node:crypto";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { passwordResetTokens, users } from "@/lib/db/schema";
import { hashPassword, passwordProblems } from "@/lib/auth/password";
import { revokeAllSessions } from "@/lib/auth/session";
import { uid } from "@/lib/utils";

/**
 * Token lifecycle, split out from `password-reset.ts` (the `"use server"`
 * wrapper) for the same reason `org-core.ts`/`teams-core.ts` are split from
 * their wrappers: this file touches nothing request-scoped (`headers()`,
 * rate limiting, email sending), so it's directly callable from a test
 * without a live Next.js request — see `tests/password-reset.test.ts`.
 */

export const RESET_TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hour

function hashToken(raw: string): string {
  return createHash("sha256").update(raw).digest("hex");
}

/**
 * Always creates and returns a real, usable token for the given user id.
 * The "does this email actually belong to an account" ambiguity is handled
 * one layer up — `requestPasswordReset()` only calls this after its own
 * lookup succeeds, and returns the same generic response either way so a
 * caller can't distinguish "sent" from "no such account" or "rate limited".
 */
export async function createResetTokenCore(userId: string): Promise<string> {
  const raw = randomBytes(32).toString("base64url");
  await db.insert(passwordResetTokens).values({
    id: uid("prt"),
    userId,
    tokenHash: hashToken(raw),
    expiresAt: Date.now() + RESET_TOKEN_TTL_MS,
  });
  return raw;
}

export type RedeemResetTokenResult =
  | { ok: true }
  | {
      ok: false;
      code: "invalid_token" | "expired_token" | "used_token" | "password_length" | "password_variety";
    };

/**
 * Validates the token first (invalid/used/expired all short-circuit before
 * the new password is even inspected), then the new password, then commits
 * the password change, marks this token used, marks every other
 * outstanding token for the same user used too (a second unredeemed reset
 * link from an earlier request shouldn't remain live after one succeeds),
 * and revokes every existing session for the account — a password reset is
 * exactly the moment an attacker's stolen session should stop working too.
 */
export async function redeemResetTokenCore(
  rawToken: string,
  newPassword: string,
): Promise<RedeemResetTokenResult> {
  const tokenHash = hashToken(rawToken);
  const row = (
    await db.select().from(passwordResetTokens).where(eq(passwordResetTokens.tokenHash, tokenHash)).limit(1)
  )[0];
  if (!row) return { ok: false, code: "invalid_token" };
  if (row.usedAt) return { ok: false, code: "used_token" };
  if (row.expiresAt < Date.now()) return { ok: false, code: "expired_token" };

  const problems = passwordProblems(newPassword);
  if (problems.includes("length")) return { ok: false, code: "password_length" };
  if (problems.includes("variety")) return { ok: false, code: "password_variety" };

  const passwordHash = await hashPassword(newPassword);
  await db.update(users).set({ passwordHash }).where(eq(users.id, row.userId));
  await db
    .update(passwordResetTokens)
    .set({ usedAt: Date.now() })
    .where(eq(passwordResetTokens.userId, row.userId));
  await revokeAllSessions(row.userId);

  return { ok: true };
}
