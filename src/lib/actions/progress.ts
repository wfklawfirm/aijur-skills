"use server";

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { attempts, evaluations, humanReviews, profiles, savedSummaries, unitProgress } from "@/lib/db/schema";
import { requireUser } from "@/lib/auth/session";
import { getRubric, getUnit } from "@/lib/content/service";
import { gradeActivity, requiresAiGrading, summariseUnit } from "@/lib/learning/grading";
import { depthOf } from "@/lib/learning/mastery";
import { activityResponseSchema, type ActivityResponse } from "@/lib/learning/responses";
import { evaluate, verifyEvaluation } from "@/lib/ai/agents/evaluation";
import { coach } from "@/lib/ai/agents/coaching";
import { uid } from "@/lib/utils";
import { track } from "./analytics";
import { recordEvidenceAndUpdateMastery } from "./mastery-bridge";
import type { Locale } from "@/lib/i18n/config";

export interface SubmitActivityResult {
  kind: "graded" | "queued_for_ai";
  score?: number;
  maxScore?: number;
  passed?: boolean;
  levelChanged?: boolean;
  newLevel?: number;
  evaluationId?: string;
}

/**
 * Submits one activity attempt.
 *
 * Deterministic kinds are scored, recorded and folded into mastery in one
 * round trip. Written kinds (`short_written`, `email_rewrite`) are sent to the
 * Evaluation Agent, run through the verification layer that checks every
 * quoted score against the learner's actual text, then coached — and only the
 * *verified* result is what mastery, evidence and the review schedule see.
 */
export async function submitActivity(args: {
  unitId: string;
  activityId: string;
  response: ActivityResponse;
  locale: Locale;
}): Promise<SubmitActivityResult> {
  const user = await requireUser();
  const unit = await getUnit(args.unitId);
  const activity = unit?.activities.find((a) => a.id === args.activityId);
  if (!unit || !activity) throw new Error("Activity not found");

  // A Server Action is a public RPC endpoint, not a type-checked function call
  // — `args.response` is `ActivityResponse` only from TypeScript's point of
  // view. Anything reachable from the browser must be validated again here,
  // the same as a REST body would be.
  const parsedResponse = activityResponseSchema.safeParse(args.response);
  if (!parsedResponse.success) throw new Error("Invalid activity response");
  args = { ...args, response: parsedResponse.data };

  await track(user.id, null, "activity_attempted", { activityId: activity.id, kind: activity.kind });

  if (requiresAiGrading(activity)) {
    if (activity.kind !== "short_written" && activity.kind !== "email_rewrite") {
      throw new Error("Unexpected AI-graded kind");
    }
    const rubric = await getRubric(activity.rubricId);
    if (!rubric) throw new Error("Rubric not found");
    const text = "text" in args.response ? args.response.text : "";

    const profileRows = await db.select().from(profiles).where(eq(profiles.userId, user.id)).limit(1);
    const allowRemote = Boolean(profileRows[0]?.aiProcessingConsentAt);

    const raw = await evaluate({
      rubric,
      locale: args.locale,
      task: activity.prompt[args.locale],
      learnerText: text,
      userId: user.id,
      organizationId: null,
      allowRemote,
    });
    const verified = verifyEvaluation(raw.data, rubric, text);

    const coaching = await coach({
      evaluation: verified,
      learnerText: text,
      skillName: activity.skillId,
      locale: args.locale,
      userId: user.id,
      organizationId: null,
      allowRemote,
    });

    const evaluationId = uid("eval");
    await db.insert(evaluations).values({
      id: evaluationId,
      userId: user.id,
      subjectType: "attempt",
      subjectId: activity.id,
      rubricId: rubric.id,
      rubricVersion: rubric.version,
      overallScore: verified.overallScore,
      maxScore: verified.maxScore,
      passed: verified.passed,
      criteria: verified.criteria,
      strengths: verified.strengths,
      missedOpportunities: verified.missedOpportunities,
      criticalMistakes: verified.criticalMistakeIds,
      priorityImprovement: coaching.data.nextTimeTry || verified.priorityImprovement,
      betterAlternative: verified.betterAlternative,
      recommendedPractice: coaching.data.practiceSuggestionSkillIds,
      confidence: verified.confidence,
      modelRunId: raw.runId,
      humanReviewStatus: verified.needsHumanReview ? "queued" : "not_required",
    });

    await db.insert(attempts).values({
      id: uid("att"),
      userId: user.id,
      activityId: activity.id,
      unitId: unit.id,
      skillId: activity.skillId,
      response: args.response,
      score: verified.overallScore,
      maxScore: verified.maxScore,
      passed: verified.passed,
      gradedBy: "ai_rubric",
    });

    const { levelChanged, newLevel } = await recordEvidenceAndUpdateMastery({
      userId: user.id,
      skillId: activity.skillId,
      score: verified.overallScore / verified.maxScore,
      targetLevel: unit.targetLevel,
      depth: depthOf(activity.kind),
      refKind: "evaluation",
      refId: evaluationId,
      note: verified.priorityImprovement,
    });

    if (verified.passed) await track(user.id, null, "activity_passed", { activityId: activity.id });

    return {
      kind: "queued_for_ai",
      score: verified.overallScore,
      maxScore: verified.maxScore,
      passed: verified.passed,
      levelChanged,
      newLevel,
      evaluationId,
    };
  }

  const grade = gradeActivity(activity, args.response);

  await db.insert(attempts).values({
    id: uid("att"),
    userId: user.id,
    activityId: activity.id,
    unitId: unit.id,
    skillId: activity.skillId,
    response: args.response,
    score: grade.score,
    maxScore: grade.maxScore,
    passed: grade.passed,
    gradedBy: grade.gradedBy,
  });

  let levelChanged = false;
  let newLevel: number | undefined;
  if (activity.kind !== "reflection") {
    const result = await recordEvidenceAndUpdateMastery({
      userId: user.id,
      skillId: activity.skillId,
      score: grade.maxScore > 0 ? grade.score / grade.maxScore : 0,
      targetLevel: unit.targetLevel,
      depth: depthOf(activity.kind),
      refKind: "attempt",
      refId: activity.id,
      note: `${activity.kind} — ${grade.verdict}`,
    });
    levelChanged = result.levelChanged;
    newLevel = result.newLevel;
  }

  if (grade.passed) await track(user.id, null, "activity_passed", { activityId: activity.id });

  return { kind: "graded", score: grade.score, maxScore: grade.maxScore, passed: grade.passed, levelChanged, newLevel };
}

export async function startUnit(unitId: string): Promise<void> {
  const user = await requireUser();
  const now = Date.now();
  await db
    .insert(unitProgress)
    .values({ id: `up.${user.id}.${unitId}`, userId: user.id, unitId, state: "in_progress", stepIndex: 0, startedAt: now, lastActiveAt: now })
    .onConflictDoUpdate({ target: unitProgress.id, set: { state: "in_progress", lastActiveAt: now } });
  await track(user.id, null, "unit_started", { unitId });
}

export async function saveUnitStep(unitId: string, stepIndex: number): Promise<void> {
  const user = await requireUser();
  await db
    .update(unitProgress)
    .set({ stepIndex, lastActiveAt: Date.now() })
    .where(and(eq(unitProgress.userId, user.id), eq(unitProgress.unitId, unitId)));
}

export async function completeUnit(
  unitId: string,
  results: { score: number; maxScore: number; kind: string }[],
): Promise<{ score: number; maxScore: number; passed: boolean }> {
  const user = await requireUser();
  const summary = summariseUnit(results);
  const now = Date.now();

  await db
    .update(unitProgress)
    .set({
      state: "completed",
      score: summary.score,
      maxScore: summary.maxScore,
      passed: summary.passed,
      completedAt: now,
      lastActiveAt: now,
    })
    .where(and(eq(unitProgress.userId, user.id), eq(unitProgress.unitId, unitId)));

  await track(user.id, null, "unit_completed", { unitId, score: summary.score, maxScore: summary.maxScore });
  return summary;
}

export async function saveSummaryCard(summaryCardId: string, unitId: string): Promise<void> {
  const user = await requireUser();
  await db.insert(savedSummaries).values({ id: uid("card"), userId: user.id, summaryCardId, unitId }).onConflictDoNothing();
  await track(user.id, null, "summary_saved", { summaryCardId });
}

export async function requestHumanReview(evaluationId: string): Promise<void> {
  const user = await requireUser();
  await db
    .update(evaluations)
    .set({ humanReviewStatus: "queued" })
    .where(and(eq(evaluations.id, evaluationId), eq(evaluations.userId, user.id)));
  await db.insert(humanReviews).values({ id: uid("hrev"), subjectType: "evaluation", subjectId: evaluationId, reason: "learner_requested" });
}
