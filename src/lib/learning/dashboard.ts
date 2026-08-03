import "server-only";
import { and, desc, eq, gte, lte } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  achievements,
  evaluations,
  masteryRecords,
  pathEnrollments,
  reviewSchedule,
  savedSummaries,
  unitProgress,
} from "@/lib/db/schema";
import { getPathById, getPaths, getPrerequisiteMap, getSkillMap } from "@/lib/content/service";
import { computePathStatuses, nextUnit, pathCompletion, type UnitStatus } from "./progression";
import { decayedConfidence, levelKey, needsReview, type MasteryState } from "./mastery";
import { selectDueReviews, type ReviewReason } from "./review";
import { DAY_MS, startOfWeek } from "@/lib/utils";
import type { PathDef, UnitDef } from "@content/types";

/**
 * Everything the Home screen needs, gathered in one pass so the page is one
 * query wave instead of a dozen. This is deliberately the single place that
 * answers "what should this learner see right now" — the same aggregation
 * backs Home, Practice and Progress so the three screens can never disagree
 * about what's due.
 */

export interface HomeData {
  enrolledPaths: PathDef[];
  statusesByPath: Map<string, UnitStatus[]>;
  continueUnit: { path: PathDef; unit: UnitDef; status: "in_progress" | "available" } | null;
  dueReviews: { skillId: string; reason: ReviewReason }[];
  weeklyMinutesDone: number;
  weeklyMinutesGoal: number;
  latestEvaluation: {
    id: string;
    overallScore: number;
    maxScore: number;
    priorityImprovement: string;
    createdAt: number;
  } | null;
  recentAchievement: { kind: string; label: string; earnedAt: number } | null;
}

export async function buildHomeData(userId: string, weeklyMinutesGoal: number): Promise<HomeData> {
  const [enrollments, allPaths, masteryRows, progressRows, prereqMap] = await Promise.all([
    db.select().from(pathEnrollments).where(eq(pathEnrollments.userId, userId)),
    getPaths(),
    db.select().from(masteryRecords).where(eq(masteryRecords.userId, userId)),
    db.select().from(unitProgress).where(eq(unitProgress.userId, userId)),
    getPrerequisiteMap(),
  ]);

  const enrolledIds = new Set(enrollments.map((e) => e.pathId));
  const enrolledPaths = allPaths.filter((p) => enrolledIds.has(p.id));

  const masteryMap = new Map(masteryRows.map((r) => [r.skillId, r.level]));
  const progressMap = new Map(
    progressRows.map((r) => [r.unitId, { state: r.state, score: r.score, maxScore: r.maxScore }]),
  );

  const statusesByPath = new Map<string, UnitStatus[]>();
  let continueUnit: HomeData["continueUnit"] = null;

  for (const path of enrolledPaths) {
    const statuses = computePathStatuses(path, { progress: progressMap, mastery: masteryMap, prerequisites: prereqMap });
    statusesByPath.set(path.id, statuses);
    if (!continueUnit) {
      const unit = nextUnit(path, statuses);
      if (unit) {
        const status = statuses.find((s) => s.unitId === unit.id);
        continueUnit = { path, unit, status: status?.state === "in_progress" ? "in_progress" : "available" };
      }
    }
  }

  const now = Date.now();
  const scheduleRows = await db
    .select()
    .from(reviewSchedule)
    .where(and(eq(reviewSchedule.userId, userId), lte(reviewSchedule.dueAt, now + 3 * DAY_MS)));
  const dueReviews = selectDueReviews(
    scheduleRows.map((r) => ({ skillId: r.skillId, dueAt: r.dueAt, reason: r.reason as ReviewReason, lapses: r.lapses })),
    now,
    4,
  ).map((r) => ({ skillId: r.skillId, reason: r.reason }));

  // Confidence-decayed skills that have no explicit schedule row yet still
  // belong on the list — this is what "decay" reviews are for.
  for (const row of masteryRows) {
    if (dueReviews.some((d) => d.skillId === row.skillId)) continue;
    const state: MasteryState = {
      level: row.level as MasteryState["level"],
      confidence: row.confidence,
      evidenceCount: row.evidenceCount,
      rollingScore: row.rollingScore,
      consecutivePasses: row.consecutivePasses,
      peakLevel: row.peakLevel as MasteryState["level"],
      lastAssessedAt: row.lastAssessedAt,
    };
    if (needsReview(state, now) && dueReviews.length < 4) {
      dueReviews.push({ skillId: row.skillId, reason: "decay" });
    }
  }

  const weekStart = startOfWeek(now);
  const completedThisWeek = progressRows.filter((r) => r.state === "completed" && (r.completedAt ?? 0) >= weekStart);
  // ~7 minutes per scorable point is a reasonable estimate for a short unit;
  // real timing data (durationMs on attempts) refines this once volume exists.
  const weeklyMinutesDone = Math.round(completedThisWeek.length * 8);

  const evalRows = await db
    .select()
    .from(evaluations)
    .where(eq(evaluations.userId, userId))
    .orderBy(desc(evaluations.createdAt))
    .limit(1);
  const latestEvaluation = evalRows[0]
    ? {
        id: evalRows[0].id,
        overallScore: evalRows[0].overallScore,
        maxScore: evalRows[0].maxScore,
        priorityImprovement: evalRows[0].priorityImprovement,
        createdAt: evalRows[0].createdAt,
      }
    : null;

  const achRows = await db
    .select()
    .from(achievements)
    .where(eq(achievements.userId, userId))
    .orderBy(desc(achievements.earnedAt))
    .limit(1);
  const recentAchievement = achRows[0]
    ? { kind: achRows[0].kind, label: achRows[0].label, earnedAt: achRows[0].earnedAt }
    : null;

  return {
    enrolledPaths,
    statusesByPath,
    continueUnit,
    dueReviews,
    weeklyMinutesDone,
    weeklyMinutesGoal,
    latestEvaluation,
    recentAchievement,
  };
}

export interface SkillMapEntry {
  skillId: string;
  domainId: string;
  level: number;
  confidence: number;
  evidenceCount: number;
  dueForReview: boolean;
  lastAssessedAt: number | null;
}

export async function buildSkillMap(userId: string): Promise<SkillMapEntry[]> {
  const [rows, skills] = await Promise.all([
    db.select().from(masteryRecords).where(eq(masteryRecords.userId, userId)),
    getSkillMap(),
  ]);
  const now = Date.now();
  return rows
    .map((r) => {
      const skill = skills.get(r.skillId);
      if (!skill) return null;
      const state: MasteryState = {
        level: r.level as MasteryState["level"],
        confidence: r.confidence,
        evidenceCount: r.evidenceCount,
        rollingScore: r.rollingScore,
        consecutivePasses: r.consecutivePasses,
        peakLevel: r.peakLevel as MasteryState["level"],
        lastAssessedAt: r.lastAssessedAt,
      };
      return {
        skillId: r.skillId,
        domainId: skill.domainId,
        level: r.level,
        confidence: Math.round(decayedConfidence(state, now) * 100) / 100,
        evidenceCount: r.evidenceCount,
        dueForReview: needsReview(state, now),
        lastAssessedAt: r.lastAssessedAt,
      };
    })
    .filter((x): x is SkillMapEntry => x !== null);
}

export interface WeeklyStats {
  minutesPracticed: number;
  unitsCompleted: number;
  simulationsCompleted: number;
}

export async function buildWeeklyStats(userId: string): Promise<WeeklyStats> {
  const weekStart = startOfWeek(Date.now());
  const [progressRows] = await Promise.all([
    db.select().from(unitProgress).where(and(eq(unitProgress.userId, userId), gte(unitProgress.completedAt, weekStart))),
  ]);
  const { simulationSessions } = await import("@/lib/db/schema");
  const simRows = await db
    .select()
    .from(simulationSessions)
    .where(and(eq(simulationSessions.userId, userId), gte(simulationSessions.completedAt, weekStart)));

  return {
    minutesPracticed: Math.round(progressRows.length * 8 + simRows.length * 6),
    unitsCompleted: progressRows.length,
    simulationsCompleted: simRows.length,
  };
}

export async function getSavedSummaryCardIds(userId: string): Promise<Set<string>> {
  const rows = await db.select({ id: savedSummaries.summaryCardId }).from(savedSummaries).where(eq(savedSummaries.userId, userId));
  return new Set(rows.map((r) => r.id));
}

export { getPathById };
