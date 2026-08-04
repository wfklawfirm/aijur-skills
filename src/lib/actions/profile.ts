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

