"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { profiles } from "@/lib/db/schema";
import { requireUser, revokeAllSessions } from "@/lib/auth/session";

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

/**
 * A learner's full evidence export — the data-portability guarantee named in
 * the profile screen. Deliberately excludes other people's data even inside a
 * shared organisation.
 */
export async function exportMyData(): Promise<{
  profile: unknown;
  attempts: unknown[];
  evaluations: unknown[];
  mastery: unknown[];
}> {
  const user = await requireUser();
  const { attempts, evaluations, masteryRecords } = await import("@/lib/db/schema");
  const [profileRows, attemptRows, evalRows, masteryRows] = await Promise.all([
    db.select().from(profiles).where(eq(profiles.userId, user.id)),
    db.select().from(attempts).where(eq(attempts.userId, user.id)),
    db.select().from(evaluations).where(eq(evaluations.userId, user.id)),
    db.select().from(masteryRecords).where(eq(masteryRecords.userId, user.id)),
  ]);
  return { profile: profileRows[0] ?? null, attempts: attemptRows, evaluations: evalRows, mastery: masteryRows };
}
