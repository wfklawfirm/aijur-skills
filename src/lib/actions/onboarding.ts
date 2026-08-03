"use server";

import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/lib/db";
import { profiles, evidence, masteryRecords, reviewSchedule, pathEnrollments } from "@/lib/db/schema";
import { requireUser } from "@/lib/auth/session";
import { getDiagnostic, getPaths, getSkillMap } from "@/lib/content/service";
import { gradeActivity } from "@/lib/learning/grading";
import type { ActivityResponse } from "@/lib/learning/responses";
import { applyEvidence, emptyMastery, depthOf } from "@/lib/learning/mastery";
import { firstSchedule } from "@/lib/learning/review";
import { uid, DAY_MS } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";
import { track } from "./analytics";

const onboardingSchema = z.object({
  locale: z.enum(["ar", "en"]),
  country: z.string().min(2).max(4),
  careerStage: z.enum(["student", "trainee", "junior", "experienced", "manager"]),
  yearsExperience: z.coerce.number().int().min(0).max(60),
  goals: z.array(z.string()).max(3),
  englishSelfRating: z.coerce.number().int().min(1).max(5),
  weeklyMinutesGoal: z.coerce.number().int().min(10).max(600),
  practicePreference: z.enum(["text", "voice", "both"]),
  accessibility: z.record(z.string(), z.boolean()).default({}),
});

export async function saveOnboarding(input: z.infer<typeof onboardingSchema>): Promise<void> {
  const user = await requireUser();
  const data = onboardingSchema.parse(input);

  await db
    .update(profiles)
    .set({
      country: data.country,
      careerStage: data.careerStage,
      yearsExperience: data.yearsExperience,
      goals: data.goals,
      englishSelfRating: data.englishSelfRating,
      weeklyMinutesGoal: data.weeklyMinutesGoal,
      practicePreference: data.practicePreference,
      accessibility: data.accessibility,
      onboardingCompletedAt: Date.now(),
      updatedAt: Date.now(),
    })
    .where(eq(profiles.userId, user.id));

  await track(user.id, null, "onboarding_completed", { careerStage: data.careerStage });
}

/**
 * Grades every diagnostic item deterministically (they are all recognition-type
 * activities by design — see content/diagnostics.ts), folds the results into an
 * initial mastery snapshot, enrols the learner in the recommended path, and
 * seeds their first review items. This is what makes "start where you are" real
 * rather than a slogan: the first thing the home screen shows is grounded in
 * actual performance, not a self-report.
 */
export async function submitDiagnostic(
  responses: Record<string, ActivityResponse>,
): Promise<{ pathId: string; startingSkillIds: string[] }> {
  const user = await requireUser();
  const diagnostic = await getDiagnostic("diag.placement.v1");
  if (!diagnostic) throw new Error("Diagnostic not found");

  const skills = await getSkillMap();
  const now = Date.now();
  const skillScores = new Map<string, number[]>();

  for (const item of diagnostic.items) {
    const response = responses[item.activity.id];
    if (!response) continue;
    let ratio = 0.5;
    try {
      const graded = gradeActivity(item.activity, response);
      ratio = graded.maxScore > 0 ? graded.score / graded.maxScore : 0;
    } catch {
      ratio = 0.5;
    }
    for (const signal of item.signals) {
      if (signal.weight <= 0) continue;
      const arr = skillScores.get(signal.skillId) ?? [];
      arr.push(ratio * signal.weight);
      skillScores.set(signal.skillId, arr);
    }
  }

  const startingSkillIds: string[] = [];

  for (const [skillId, scores] of skillScores) {
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    const skill = skills.get(skillId);
    const targetLevel = avg >= 0.75 ? 2 : avg >= 0.4 ? 1 : 0;
    if (targetLevel === 0) continue;

    const state = applyEvidence(emptyMastery(), { level: targetLevel as 1 | 2, score: avg, depth: "recognition", itemId: `diag.${skillId}`, at: now }, []);
    // Diagnostic placement is a single signal, so it sets confidence directly
    // rather than routing through the two-pass consistency rule the unit
    // engine uses — that rule is for *awarding* levels, this is *placing* one.
    await db
      .insert(masteryRecords)
      .values({
        id: uid("mas"),
        userId: user.id,
        skillId,
        level: state.next.level || (avg >= 0.75 ? 1 : 0),
        confidence: Math.round(avg * 60) / 100,
        evidenceCount: 1,
        rollingScore: avg,
        consecutivePasses: 0,
        peakLevel: state.next.level || 0,
        lastAssessedAt: now,
      })
      .onConflictDoNothing();

    await db.insert(evidence).values({
      id: uid("ev"),
      userId: user.id,
      skillId,
      kind: "attempt",
      refId: "diag.placement.v1",
      level: state.next.level || 0,
      score: avg,
      note: "From the onboarding diagnostic.",
      createdAt: now,
    });

    if (avg < 0.7 && skill) {
      startingSkillIds.push(skillId);
      const schedule = firstSchedule(now, false);
      await db.insert(reviewSchedule).values({
        id: uid("rev"),
        userId: user.id,
        skillId,
        dueAt: schedule.dueAt,
        intervalDays: schedule.intervalDays,
        ease: schedule.ease,
        lapses: schedule.lapses,
        reason: schedule.reason,
      });
    }
  }

  const paths = await getPaths();
  const recommended = paths.find((p) => p.track === "professional") ?? paths[0];
  if (recommended) {
    await db
      .insert(pathEnrollments)
      .values({ id: uid("enr"), userId: user.id, pathId: recommended.id, source: "recommended" })
      .onConflictDoNothing();
  }

  await db.update(profiles).set({ diagnosticCompletedAt: now }).where(eq(profiles.userId, user.id));
  await track(user.id, null, "diagnostic_completed", { skillsSignalled: skillScores.size });

  return { pathId: recommended?.id ?? "", startingSkillIds };
}

export async function completeOnboardingRedirect(locale: Locale): Promise<never> {
  redirect(`/${locale}/diagnostic`);
}
