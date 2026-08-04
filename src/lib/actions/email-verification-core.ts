import "server-only";
import { createHash, randomBytes } from "node:crypto";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { emailVerificationTokens, users } from "@/lib/db/schema";
import { uid } from "@/lib/utils";

/**
 * Token lifecycle for email verification — same split and same reasoning as
 * `password-reset-core.ts`: no request-scoped dependency, so it's directly
 * callable from `tests/email-verification.test.ts` without a live Next.js
 * request.
 */

export const VERIFICATION_TOKEN_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

function hashToken(raw: string): string {
  return createHash("sha256").update(raw).digest("hex");
}

export async function createVerificationTokenCore(userId: string): Promise<string> {
  const raw = randomBytes(32).toString("base64url");
  await db.insert(emailVerificationTokens).values({
    id: uid("evt"),
    userId,
    tokenHash: hashToken(raw),
    expiresAt: Date.now() + VERIFICATION_TOKEN_TTL_MS,
  });
  return raw;
}

export type RedeemVerificationTokenResult =
  | { ok: true }
  | { ok: false; code: "invalid_token" | "expired_token" | "used_token" };

/**
 * Unlike password reset, redeeming a verification token doesn't invalidate
 * sibling tokens or touch sessions — confirming an email address twice (via
 * two different links from two separate signup/resend requests) is harmless,
 * so there's no reason to burn a still-valid second link just because the
 * first one was used.
 */
export async function redeemVerificationTokenCore(rawToken: string): Promise<RedeemVerificationTokenResult> {
  const tokenHash = hashToken(rawToken);
  const row = (
    await db.select().from(emailVerificationTokens).where(eq(emailVerificationTokens.tokenHash, tokenHash)).limit(1)
  )[0];
  if (!row) return { ok: false, code: "invalid_token" };
  if (row.usedAt) return { ok: false, code: "used_token" };
  if (row.expiresAt < Date.now()) return { ok: false, code: "expired_token" };

  await db.update(users).set({ emailVerifiedAt: Date.now() }).where(eq(users.id, row.userId));
  await db.update(emailVerificationTokens).set({ usedAt: Date.now() }).where(eq(emailVerificationTokens.id, row.id));

  return { ok: true };
}
