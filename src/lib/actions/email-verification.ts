"use server";

import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { requireUser } from "@/lib/auth/session";
import { checkRateLimit } from "@/lib/auth/rate-limit";
import { sendEmail } from "@/lib/email/mailer";
import { appOrigin } from "@/lib/http/origin";
import { createVerificationTokenCore, redeemVerificationTokenCore } from "./email-verification-core";
import type { Locale } from "@/lib/i18n/config";

const RESEND_LIMIT = { windowMs: 15 * 60 * 1000, max: 3 };

/**
 * Deliberately takes no `userId`/`email` parameters — everything comes from
 * the caller's own session via `requireUser()`. A version of this that
 * accepted an id/email pair would let anyone invoke the server action
 * directly with an arbitrary target and get a working verification link
 * mailed to an address of their choosing, which would let them mark a
 * victim account's `emailVerifiedAt` regardless of who owns the inbox.
 * Keeping the target implicit in the session closes that off entirely.
 */
export async function resendVerificationEmail(locale: Locale): Promise<{ sent: boolean; alreadyVerified?: boolean }> {
  const user = await requireUser();
  // `SessionUser` doesn't carry `emailVerifiedAt` (it's not needed for
  // auth/RBAC decisions) — the caller (profile page) already knows the
  // current status from its own query and only renders this action's UI
  // when unverified, but re-check here too rather than trust the client.
  const rows = await db.select({ emailVerifiedAt: users.emailVerifiedAt }).from(users).where(eq(users.id, user.id)).limit(1);
  if (rows[0]?.emailVerifiedAt) return { sent: false, alreadyVerified: true };

  const limit = await checkRateLimit(`verify:resend:${user.id}`, RESEND_LIMIT);
  if (!limit.allowed) return { sent: false };

  const token = await createVerificationTokenCore(user.id);
  const origin = await appOrigin();
  const link = `${origin}/${locale}/verify-email/${token}`;
  const isAr = locale === "ar";
  await sendEmail({
    to: user.email,
    subject: isAr ? "تأكيد بريدك الإلكتروني — AIJUR" : "Confirm your AIJUR email",
    text: isAr
      ? `اضغط على الرابط التالي لتأكيد بريدك الإلكتروني خلال ٢٤ ساعة:\n${link}\n\nإذا لم تطلب هذا، تجاهل هذه الرسالة.`
      : `Use this link to confirm your email within the next 24 hours:\n${link}\n\nIf you didn't request this, you can ignore this email.`,
  });

  return { sent: true };
}

export interface VerifyEmailState {
  error?: "invalid_token" | "expired_token" | "used_token";
  done?: boolean;
}

/**
 * Only ever takes the raw token — the token itself, not an id, is the
 * security boundary here (same reasoning as `resetPassword()`), so there's
 * no arbitrary-target risk in exposing this directly as a server action
 * triggered by a button click on the verify-email page.
 */
export async function verifyEmail(_prev: VerifyEmailState, formData: FormData): Promise<VerifyEmailState> {
  const token = formData.get("token");
  if (typeof token !== "string" || token.length === 0) return { error: "invalid_token" };

  const result = await redeemVerificationTokenCore(token);
  if (!result.ok) return { error: result.code };
  return { done: true };
}
