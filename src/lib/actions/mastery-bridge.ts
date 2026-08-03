"use server";

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { evidence, masteryRecords, reviewSchedule } from "@/lib/db/schema";
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

export async function recordSimulationEvidence(args: {
  userId: string;
  skillId: string;
  score: number;
  targetLevel: number;
  refId: string;
  note: string;
}): Promise<{ levelChanged: boolean; newLevel: number }> {
  return recordEvidenceAndUpdateMastery({ ...args, depth: "simulation", refKind: "simulation" });
}
