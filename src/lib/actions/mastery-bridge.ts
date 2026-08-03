"use server";

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { evaluations, evidence, masteryRecords, reviewSchedule } from "@/lib/db/schema";
import { applyEvidence, emptyMastery, type MasteryState } from "@/lib/learning/mastery";
import { firstSchedule } from "@/lib/learning/review";
import { uid } from "@/lib/utils";
import { track } from "./analytics";

/**
 * Shared by activity submission and simulation completion: fold one verified
 * piece of evidence into a skill's mastery state, write the audit-trail
 * `evidence` row, and (re)schedule its next review. One implementation so both
 * call sites can never drift on how a level is earned.
 */

async function loadMastery(userId: string, skillId: string): Promise<MasteryState> {
  const rows = await db
    .select()
    .from(masteryRecords)
    .where(and(eq(masteryRecords.userId, userId), eq(masteryRecords.skillId, skillId)))
    .limit(1);
  const row = rows[0];
  if (!row) return emptyMastery();
  return {
    level: row.level as MasteryState["level"],
    confidence: row.confidence,
    evidenceCount: row.evidenceCount,
    rollingScore: row.rollingScore,
    consecutivePasses: row.consecutivePasses,
    peakLevel: row.peakLevel as MasteryState["level"],
    lastAssessedAt: row.lastAssessedAt,
  };
}

async function recentEvidenceItemIds(userId: string, skillId: string): Promise<string[]> {
  const rows = await db
    .select({ refId: evidence.refId })
    .from(evidence)
    .where(and(eq(evidence.userId, userId), eq(evidence.skillId, skillId)));
  return rows.map((r) => r.refId);
}

export async function recordEvidenceAndUpdateMastery(args: {
  userId: string;
  skillId: string;
  /** 0..1 normalised score. */
  score: number;
  targetLevel: number;
  depth: "recognition" | "production" | "simulation";
  refKind: "attempt" | "evaluation" | "simulation";
  refId: string;
  note: string;
}): Promise<{ levelChanged: boolean; newLevel: number }> {
  const now = Date.now();
  const state = await loadMastery(args.userId, args.skillId);
  const recentIds = await recentEvidenceItemIds(args.userId, args.skillId);

  const { next, levelChanged } = applyEvidence(
    state,
    {
      level: Math.min(6, Math.max(1, args.targetLevel)) as never,
      score: args.score,
      depth: args.depth,
      itemId: args.refId,
      at: now,
    },
    recentIds,
  );

  await db
    .insert(masteryRecords)
    .values({
      id: uid("mas"),
      userId: args.userId,
      skillId: args.skillId,
      level: next.level,
      confidence: next.confidence,
      evidenceCount: next.evidenceCount,
      rollingScore: next.rollingScore,
      consecutivePasses: next.consecutivePasses,
      peakLevel: next.peakLevel,
      lastAssessedAt: next.lastAssessedAt,
    })
    .onConflictDoUpdate({
      target: [masteryRecords.userId, masteryRecords.skillId],
      set: {
        level: next.level,
        confidence: next.confidence,
        evidenceCount: next.evidenceCount,
        rollingScore: next.rollingScore,
        consecutivePasses: next.consecutivePasses,
        peakLevel: next.peakLevel,
        lastAssessedAt: next.lastAssessedAt,
        updatedAt: now,
      },
    });

  await db.insert(evidence).values({
    id: uid("ev"),
    userId: args.userId,
    skillId: args.skillId,
    kind: args.refKind,
    refId: args.refId,
    level: next.level,
    score: args.score,
    note: args.note,
  });

  const existingSchedule = await db
    .select()
    .from(reviewSchedule)
    .where(and(eq(reviewSchedule.userId, args.userId), eq(reviewSchedule.skillId, args.skillId)))
    .limit(1);
  const passed = args.score >= 0.7;
  const sched = firstSchedule(now, passed);
  if (existingSchedule[0]) {
    await db
      .update(reviewSchedule)
      .set({ dueAt: sched.dueAt, intervalDays: sched.intervalDays, reason: sched.reason, lastReviewedAt: now })
      .where(eq(reviewSchedule.id, existingSchedule[0].id));
  } else {
    await db.insert(reviewSchedule).values({
      id: uid("rev"),
      userId: args.userId,
      skillId: args.skillId,
      dueAt: sched.dueAt,
      intervalDays: sched.intervalDays,
      ease: sched.ease,
      lapses: sched.lapses,
      reason: sched.reason,
      lastReviewedAt: now,
    });
  }

  if (levelChanged) await track(args.userId, null, "mastery_changed", { skillId: args.skillId, level: next.level });

  return { levelChanged, newLevel: next.level };
}

/**
 * Applies an evaluation's stored `pendingMastery` — the deferred half of the
 * "human review is mandatory before any content publishes" rule as it
 * applies to AI-graded work.
 *
 * An evaluation that did not need review (`humanReviewStatus: "not_required"`)
 * calls this immediately, at submission time, from `progress.ts`/
 * `simulation.ts`. An evaluation that *was* queued
 * (`verifyEvaluation()` found fabricated evidence, low confidence, or thin
 * rubric coverage) must NOT reach the learner's permanent mastery record on
 * the strength of an AI score alone — this function is only called for one
 * later, by `decideEvaluationReview()` in `admin.ts`, and only when a human
 * reviewer upholds or edits the result. An overturned/rejected evaluation
 * never calls this, so its score never counts.
 *
 * Idempotent: a second call on an already-applied (or never-pending)
 * evaluation is a no-op, so a reviewer re-opening a decided item, or a retry
 * after a partial failure, can never double-count evidence.
 */
export async function applyPendingMasteryForEvaluation(
  evaluationId: string,
): Promise<{ skillId: string; levelChanged: boolean; newLevel: number }[]> {
  const rows = await db.select().from(evaluations).where(eq(evaluations.id, evaluationId)).limit(1);
  const row = rows[0];
  if (!row || row.masteryApplied || !row.pendingMastery?.length) return [];

  const results: { skillId: string; levelChanged: boolean; newLevel: number }[] = [];
  for (const target of row.pendingMastery) {
    const { levelChanged, newLevel } = await recordEvidenceAndUpdateMastery({
      userId: row.userId,
      skillId: target.skillId,
      score: row.maxScore > 0 ? row.overallScore / row.maxScore : 0,
      targetLevel: target.targetLevel,
      depth: target.depth,
      refKind: "evaluation",
      refId: evaluationId,
      note: row.priorityImprovement,
    });
    results.push({ skillId: target.skillId, levelChanged, newLevel });
  }

  await db.update(evaluations).set({ masteryApplied: true }).where(eq(evaluations.id, evaluationId));
  return results;
}
