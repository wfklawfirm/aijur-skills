import { desc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { adaptiveContent } from "@/lib/db/schema";
import { require_ } from "@/lib/auth/rbac";
import type { SessionUser } from "@/lib/auth/session";

/**
 * Admin read/decide logic for the adaptive content engine's "Adaptive
 * Content Intelligence" monitor (build spec §39-40, scoped for Phase 1 --
 * see docs/ADAPTIVE_ENGINE_ARCHITECTURE.md for what's deferred: separate
 * Generation/Repetition/Personalization/Performance dashboards become one
 * page here, since the data volume doesn't yet justify four).
 *
 * Reuses the exact same permission split as the ingestion-suggestion queue
 * it's modelled on: `content.author` to view, `ingestion.decide` to act --
 * this content is AI-suggested in the same sense ingestion suggestions are.
 */

export interface AdaptiveContentStats {
  total: number;
  byStatus: Record<string, number>;
  byHookType: { hookType: string; count: number }[];
  bySkill: { skillId: string; count: number }[];
  averageQualityScore: number;
  averageNoveltyScore: number;
}

export async function getAdaptiveContentStatsCore(user: SessionUser): Promise<AdaptiveContentStats> {
  require_(user, "content.author");
  const rows = await db.select().from(adaptiveContent);

  const byStatus: Record<string, number> = {};
  const hookTypeCounts = new Map<string, number>();
  const skillCounts = new Map<string, number>();
  let qualitySum = 0;
  let noveltySum = 0;

  for (const row of rows) {
    byStatus[row.status] = (byStatus[row.status] ?? 0) + 1;
    const hookType = row.dimensions.hookType ?? "unknown";
    hookTypeCounts.set(hookType, (hookTypeCounts.get(hookType) ?? 0) + 1);
    skillCounts.set(row.skillId, (skillCounts.get(row.skillId) ?? 0) + 1);
    qualitySum += row.qualityScore;
    noveltySum += row.noveltyScore;
  }

  return {
    total: rows.length,
    byStatus,
    byHookType: [...hookTypeCounts.entries()]
      .map(([hookType, count]) => ({ hookType, count }))
      .sort((a, b) => b.count - a.count),
    bySkill: [...skillCounts.entries()]
      .map(([skillId, count]) => ({ skillId, count }))
      .sort((a, b) => b.count - a.count),
    averageQualityScore: rows.length > 0 ? qualitySum / rows.length : 0,
    averageNoveltyScore: rows.length > 0 ? noveltySum / rows.length : 0,
  };
}

export async function listAdaptiveContentReviewQueueCore(user: SessionUser, limit = 25) {
  require_(user, "content.author");
  return db
    .select()
    .from(adaptiveContent)
    .where(eq(adaptiveContent.status, "human_review_required"))
    .orderBy(desc(adaptiveContent.createdAt))
    .limit(limit);
}

export async function decideAdaptiveContentCore(
  user: SessionUser,
  id: string,
  decision: "approved" | "rejected",
  note?: string,
): Promise<void> {
  require_(user, "ingestion.decide");
  await db
    .update(adaptiveContent)
    .set({
      status: decision === "approved" ? "approved" : "rejected",
      reviewedBy: user.id,
      reviewedAt: Date.now(),
      reviewNote: note ?? null,
      updatedAt: Date.now(),
    })
    .where(eq(adaptiveContent.id, id));
}
