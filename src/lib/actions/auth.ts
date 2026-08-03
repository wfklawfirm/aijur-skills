"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { users, profiles } from "@/lib/db/schema";
import { hashPassword, verifyPassword, passwordProblems } from "@/lib/auth/password";
import { createSession, destroySession, getSessionUser } from "@/lib/auth/session";
import { checkRateLimit, getClientIp } from "@/lib/auth/rate-limit";
import { uid } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";

export interface AuthFormState {
  error?: "invalid" | "email_taken" | "password_length" | "password_variety" | "server_error" | "rate_limited";
  fieldErrors?: Record<string, string>;
}

const LOGIN_EMAIL_LIMIT = { windowMs: 15 * 60 * 1000, max: 5 };
const LOGIN_IP_LIMIT = { windowMs: 15 * 60 * 1000, max: 20 };
const SIGNUP_IP_LIMIT = { windowMs: 60 * 60 * 1000, max: 5 };

const signInSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1),
  locale: z.string(),
});

const signUpSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1),
  locale: z.string(),
});

export async function signIn(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const parsed = signInSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: "invalid" };
  const { email, password, locale } = parsed.data;

  // Keyed by both the target email (stops a brute force against one
  // account regardless of source) and the caller's IP (stops one source
  // hammering many accounts) — either budget exhausting blocks the attempt.
  const ip = await getClientIp();
  const [emailLimit, ipLimit] = await Promise.all([
    checkRateLimit(`login:email:${email}`, LOGIN_EMAIL_LIMIT),
    checkRateLimit(`login:ip:${ip}`, LOGIN_IP_LIMIT),
  ]);
  if (!emailLimit.allowed || !ipLimit.allowed) return { error: "rate_limited" };

  const rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
  const user = rows[0];
  if (!user || user.deletedAt) return { error: "invalid" };

  const valid = await verifyPassword(password, user.passwordHash);
  if (!valid) return { error: "invalid" };

  const ua = (await headers()).get("user-agent") ?? undefined;
  await createSession(user.id, null, ua);
  await db.update(users).set({ lastSeenAt: Date.now() }).where(eq(users.id, user.id));

  const profileRows = await db.select().from(profiles).where(eq(profiles.userId, user.id)).limit(1);
  const onboarded = Boolean(profileRows[0]?.onboardingCompletedAt);
  redirect(`/${locale}/${onboarded ? "home" : "onboarding"}`);
}

export async function signUp(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const parsed = signUpSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: "invalid" };
  const { name, email, password, locale } = parsed.data;

  const ip = await getClientIp();
  const ipLimit = await checkRateLimit(`signup:ip:${ip}`, SIGNUP_IP_LIMIT);
  if (!ipLimit.allowed) return { error: "rate_limited" };

  const problems = passwordProblems(password);
  if (problems.includes("length")) return { error: "password_length" };
  if (problems.includes("variety")) return { error: "password_variety" };

  const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1);
  if (existing.length > 0) return { error: "email_taken" };

  const passwordHash = await hashPassword(password);
  const id = uid("user");
  const now = Date.now();

  try {
    await db.insert(users).values({
      id,
      email,
      passwordHash,
      name,
      locale: locale === "en" ? "en" : "ar",
      systemRole: "learner",
      emailVerifiedAt: now,
    });
    await db.insert(profiles).values({ userId: id });
  } catch {
    return { error: "server_error" };
  }

  const ua = (await headers()).get("user-agent") ?? undefined;
  await createSession(id, null, ua);
  redirect(`/${locale}/onboarding`);
}

export async function signOutAction(locale: Locale): Promise<void> {
  await destroySession();
  redirect(`/${locale}`);
}

export async function requireOnboardedUser(locale: Locale) {
  const user = await getSessionUser();
  if (!user) redirect(`/${locale}/sign-in`);
  return user;
}
