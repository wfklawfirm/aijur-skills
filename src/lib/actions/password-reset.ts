"use server";

import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { checkRateLimit, getClientIp } from "@/lib/auth/rate-limit";
import { sendEmail } from "@/lib/email/mailer";
import { appOrigin } from "@/lib/http/origin";
import { createResetTokenCore, redeemResetTokenCore } from "./password-reset-core";

const REQUEST_EMAIL_LIMIT = { windowMs: 60 * 60 * 1000, max: 3 };
const REQUEST_IP_LIMIT = { windowMs: 60 * 60 * 1000, max: 10 };

const requestSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  locale: z.string(),
});

export interface RequestResetState {
  submitted?: boolean;
}

/**
 * Always resolves to `{ submitted: true }` — whether the email belongs to a
 * real account, was rate-limited, or failed validation. Leaking any of
 * those distinctions through the response (or a differently-timed response)
 * would let an attacker enumerate registered emails; the UI shows the same
 * "check your inbox" message unconditionally. The rate limit still runs and
 * still suppresses the actual token/email work, it's just invisible to the
 * caller.
 */
export async function requestPasswordReset(
  _prev: RequestResetState,
  formData: FormData,
): Promise<RequestResetState> {
  const parsed = requestSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { submitted: true };
  const { email, locale } = parsed.data;

  const ip = await getClientIp();
  const [emailLimit, ipLimit] = await Promise.all([
    checkRateLimit(`pwreset:email:${email}`, REQUEST_EMAIL_LIMIT),
    checkRateLimit(`pwreset:ip:${ip}`, REQUEST_IP_LIMIT),
  ]);
  if (!emailLimit.allowed || !ipLimit.allowed) return { submitted: true };

  const rows = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1);
  const user = rows[0];
  if (user) {
    const token = await createResetTokenCore(user.id);
    const origin = await appOrigin();
    const link = `${origin}/${locale}/reset-password/${token}`;
    const isAr = locale === "ar";
    await sendEmail({
      to: email,
      subject: isAr ? "إعادة تعيين كلمة المرور — AIJUR" : "Reset your AIJUR password",
      text: isAr
        ? `اضغط على الرابط التالي لإعادة تعيين كلمة المرور خلال ساعة واحدة:\n${link}\n\nإذا لم تطلب هذا، تجاهل هذه الرسالة ولن يتغيّر شيء.`
        : `Use this link to reset your password within the next hour:\n${link}\n\nIf you didn't request this, you can safely ignore this email — nothing will change.`,
    });
  }

  return { submitted: true };
}

export interface ResetPasswordState {
  error?: "invalid_token" | "expired_token" | "used_token" | "password_length" | "password_variety";
  done?: boolean;
}

const resetSchema = z.object({
  token: z.string().min(1),
  password: z.string().min(1),
});

export async function resetPassword(_prev: ResetPasswordState, formData: FormData): Promise<ResetPasswordState> {
  const parsed = resetSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: "invalid_token" };

  const result = await redeemResetTokenCore(parsed.data.token, parsed.data.password);
  if (!result.ok) return { error: result.code };
  return { done: true };
}
