"use server";

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { attempts, evaluations, humanReviews, profiles, savedSummaries, unitProgress } from "@/lib/db/schema";
import { requireUser } from "@/lib/auth/session";
import { getRubric, getUnit } from "@/lib/content/service";
import { gradeActivity, requiresAiGrading } from "@/lib/learning/grading";
import { depthOf } from "@/lib/learning/mastery";
import { computeUnitCompletionSummary } from "@/lib/learning/unit-completion";
import { activityResponseSchema, type ActivityResponse } from "@/lib/learning/responses";
import { evaluate, verifyEvaluation } from "@/lib/ai/agents/evaluation";
import { coach } from "@/lib/ai/agents/coaching";
import { uid } from "@/lib/utils";
import { checkRateLimit } from "@/lib/auth/rate-limit";
import { track } from "./analytics";
import { applyPendingMasteryForEvaluation, recordEvidenceAndUpdateMastery } from "./mastery-bridge";
import type { Locale } from "@/lib/i18n/config";

const AI_GRADING_LIMIT = { windowMs: 15 * 60 * 1000, max: 30 };

export interface SubmitActivityResult {
  kind: "graded" | "queued_for_ai";
  score?: number;
  maxScore?: number;
  passed?: boolean;
  levelChanged?: boolean;
  newLevel?: number;
  evaluationId?: string;
  /**
   * True when `verifyEvaluation()` flagged this score for human review — the
   * learner sees their result immediately, but it has not yet counted toward
   * their mastery record. The UI should show this as provisional.
   */
  pendingReview?: boolean;
  /**
   * True when a configured remote provider (Anthropic/OpenAI) was attempted
   * for this evaluation and/or its coaching pass but failed, and the result
   * shown came from the deterministic offline fallback instead —
   * `AgentResult.degraded` from `src/lib/ai/provider.ts`. Not set (false) in
   * the common case of no provider configured at all: choosing offline
   * because nothing else was ever set up is not a degradation of anything.
   */
  degraded?: boolean;
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
    // Two AI calls per submission (evaluate() + coach()), unlike the
    // deterministic kinds below which never leave this process. Unlike the
    // auth endpoints (signIn/signUp), keyed by user id, not IP: this
    // already requires requireUser(), so the caller's identity is real.
    const aiGradingLimit = await checkRateLimit(`activity:ai-grade:${user.id}`, AI_GRADING_LIMIT);
    if (!aiGradingLimit.allowed) throw new Error("Too many submissions — please wait a while and try again.");

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
      humanReviewReason: verified.humanReviewReason,
      // Always "production": this branch only ever runs for short_written/
      // email_rewrite (see the guard above), and `depthOf()` maps both to
      // "production" — never "recognition", which `pendingMastery` doesn't
      // accept (recognition-level evidence never needs a human review gate).
      pendingMastery: [{ skillId: activity.skillId, targetLevel: unit.targetLevel, depth: "production" }],
      masteryApplied: false,
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

    // Evidence a human hasn't confirmed must not silently become a mastery
    // claim — see `applyPendingMasteryForEvaluation()`'s docstring. The
    // learner still sees their score immediately either way; only the
    // permanent mastery record waits.
    let levelChanged = false;
    let newLevel: number | undefined;
    if (!verified.needsHumanReview) {
      const applied = await applyPendingMasteryForEvaluation(evaluationId);
      levelChanged = applied[0]?.levelChanged ?? false;
      newLevel = applied[0]?.newLevel;
    }

    if (verified.passed) await track(user.id, null, "activity_passed", { activityId: activity.id });

    return {
      kind: "queued_for_ai",
      score: verified.overallScore,
      maxScore: verified.maxScore,
      passed: verified.passed,
      levelChanged,
      newLevel,
      pendingReview: verified.needsHumanReview,
      degraded: raw.degraded || coaching.degraded,
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

/**
 * The final score comes from what the server actually recorded, never from
 * the client. This used to take a `results: {score, maxScore, kind}[]`
 * argument straight from the client and hand it to `summariseUnit()`
 * unchecked — a `"use server"` export is an independently callable RPC
 * endpoint, not just page-rendered data, so any signed-in caller could mark
 * any unit "completed" with a fabricated perfect score, which
 * `computePathStatuses()` uses to unlock the next unit and which an org's
 * manager-facing report counts as `unitsCompleted`. It also meant a
 * perfectly honest learner who navigated to a simulation step and back (a
 * full page load, resetting the client's in-memory `results` array) had
 * their earlier steps silently dropped from their own final score. Fixed by
 * `computeUnitCompletionSummary()` (`src/lib/learning/unit-completion.ts`),
 * which reconstructs the summary from `attempts` — what the server actually
 * recorded per activity submission, keyed by this user and unit — instead.
 */
export async function completeUnit(unitId: string): Promise<{ score: number; maxScore: number; passed: boolean }> {
  const user = await requireUser();
  const summary = await computeUnitCompletionSummary(user.id, unitId);
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
