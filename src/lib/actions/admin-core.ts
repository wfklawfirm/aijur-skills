import { and, desc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  contentReviews,
  evaluations,
  humanReviews,
  ingestionSuggestions,
  scenarios,
  skills,
  sources,
  units,
} from "@/lib/db/schema";
import { require_ } from "@/lib/auth/rbac";
import type { SessionUser } from "@/lib/auth/session";
import { uid } from "@/lib/utils";
import { applyPendingMasteryForEvaluation } from "./mastery-bridge";

/**
 * Content Studio's actual query/mutation logic, taking the resolved
 * `SessionUser` as a parameter rather than resolving it from cookies
 * itself — same split as `org-core.ts`/`teams-core.ts`. `admin.ts`'s
 * "use server" exports are thin wrappers: `requireUser()` resolves the
 * real session (the only part that needs a live Next.js request), then
 * delegates here, where the real `require_()` check and the actual query
 * run. That split is what lets `tests/admin-access-control.test.ts`
 * exercise these directly with a fabricated session user.
 *
 * This file exists because every read function here used to have NO
 * permission check at all — `content.read`, the permission the layout
 * gate at `src/app/(app)/[locale]/admin/layout.tsx` checked, is held by
 * every signed-in user including a plain learner, so the gate blocked
 * nobody but anonymous visitors, and the read functions below had nothing
 * of their own. A learner navigating straight to `/admin/review-queue` (or
 * calling `listQueuedEvaluations()` directly, since a `"use server"` export
 * is an independently callable RPC endpoint, not just page-rendered data)
 * could see every learner's queued AI evaluations and the raw ingestion
 * queue. Fixed by requiring `content.author` on every read here (the
 * narrower `evaluation.review` for evaluation data specifically, since
 * scored learner work is more sensitive than draft content) — see
 * `docs/SECURITY.md` for the write-up.
 */

const GATES = ["sme", "learning_design", "legal_english", "language", "accessibility", "qa"] as const;
export type Gate = (typeof GATES)[number];
export type EntityType = "unit" | "activity" | "scenario" | "skill";

export async function getReviewGateStatusCore(user: SessionUser, entityType: EntityType, entityId: string) {
  require_(user, "content.author");
  const rows = await db
    .select()
    .from(contentReviews)
    .where(and(eq(contentReviews.entityType, entityType), eq(contentReviews.entityId, entityId)));
  return GATES.map((gate) => {
    const row = rows.find((r) => r.gate === gate);
    return { gate, status: row?.status ?? "pending", notes: row?.notes ?? null };
  });
}

export async function decideGateCore(
  user: SessionUser,
  entityType: EntityType,
  entityId: string,
  gate: Gate,
  decision: "approved" | "changes_requested",
  notes?: string,
): Promise<void> {
  require_(user, "content.review");
  await db
    .insert(contentReviews)
    .values({ id: `rev.${entityId}.${gate}`, entityType, entityId, gate, status: decision, reviewerId: user.id, notes, decidedAt: Date.now() })
    .onConflictDoUpdate({
      target: contentReviews.id,
      set: { status: decision, reviewerId: user.id, notes, decidedAt: Date.now() },
    });
}

/** Publication is blocked — not just discouraged — until every applicable gate is approved. */
export async function publishEntityCore(
  user: SessionUser,
  entityType: EntityType,
  entityId: string,
  requiresLegalEnglish: boolean,
): Promise<{ ok: boolean; missing: Gate[] }> {
  require_(user, "content.publish");

  const gates = await getReviewGateStatusCore(user, entityType, entityId);
  const missing = gates
    .filter((g) => (requiresLegalEnglish || g.gate !== "legal_english"))
    .filter((g) => g.status !== "approved")
    .map((g) => g.gate);

  if (missing.length > 0) return { ok: false, missing };

  const table = entityType === "unit" ? units : entityType === "scenario" ? scenarios : entityType === "skill" ? skills : null;
  if (table) {
    await db.update(table).set({ status: "published", updatedAt: Date.now() }).where(eq(table.id, entityId));
  }
  return { ok: true, missing: [] };
}

export async function unpublishEntityCore(user: SessionUser, entityType: EntityType, entityId: string): Promise<void> {
  require_(user, "content.publish");
  const table = entityType === "unit" ? units : entityType === "scenario" ? scenarios : entityType === "skill" ? skills : null;
  if (table) await db.update(table).set({ status: "archived", updatedAt: Date.now() }).where(eq(table.id, entityId));
}

// ---------------------------------------------------------------------------
// Assisted knowledge ingestion queue
// ---------------------------------------------------------------------------

export async function listPendingIngestionCore(user: SessionUser) {
  require_(user, "content.author");
  return db
    .select()
    .from(ingestionSuggestions)
    .where(eq(ingestionSuggestions.status, "pending"))
    .orderBy(desc(ingestionSuggestions.confidence));
}

export async function decideIngestionSuggestionCore(
  user: SessionUser,
  id: string,
  decision: "accepted" | "edited" | "merged" | "rejected",
): Promise<void> {
  require_(user, "ingestion.decide");
  await db
    .update(ingestionSuggestions)
    .set({ status: decision, decidedById: user.id, decidedAt: Date.now() })
    .where(eq(ingestionSuggestions.id, id));
  // Deliberately no auto-publish path here, even on "accepted" — accepting a
  // suggestion creates a draft for an author to develop, per the no-auto-publish rule.
}

// ---------------------------------------------------------------------------
// Evaluation human-review queue
// ---------------------------------------------------------------------------

/**
 * Gated on `evaluation.review` specifically, not the broader `content.
 * author` the other read functions in this file use — this returns other
 * learners' scored work (rubric id, score, confidence), which is more
 * sensitive than draft content and should only go to whoever is actually
 * authorised to review evaluations, matching `decideEvaluationReviewCore()`'s
 * own gate below.
 */
export async function listQueuedEvaluationsCore(user: SessionUser, limit = 25) {
  require_(user, "evaluation.review");
  return db
    .select()
    .from(evaluations)
    .where(eq(evaluations.humanReviewStatus, "queued"))
    .orderBy(desc(evaluations.createdAt))
    .limit(limit);
}

export async function decideEvaluationReviewCore(
  user: SessionUser,
  evaluationId: string,
  decision: "upheld" | "overturned" | "edited" | "rejected",
  notes?: string,
): Promise<void> {
  require_(user, "evaluation.review");
  const status = decision === "overturned" || decision === "rejected" ? "overturned" : "upheld";
  await db.update(evaluations).set({ humanReviewStatus: status }).where(eq(evaluations.id, evaluationId));
  await db.insert(humanReviews).values({
    id: uid("hrev"),
    subjectType: "evaluation",
    subjectId: evaluationId,
    reviewerId: user.id,
    reason: "queued_review",
    decision,
    notes,
    decidedAt: Date.now(),
  });

  // Only now — a human has actually looked at it — does this evaluation's
  // score get to count toward the learner's mastery record. "upheld" and
  // "edited" both confirm the score is trustworthy enough to use; a rejected
  // or overturned evaluation never applies (`applyPendingMasteryForEvaluation`
  // stays a no-op for it forever, which is correct: bad evidence should never
  // retroactively count).
  if (status === "upheld") {
    await applyPendingMasteryForEvaluation(evaluationId);
  }
}

export async function listSourcesCore(user: SessionUser) {
  require_(user, "content.author");
  return db.select().from(sources).orderBy(desc(sources.createdAt));
}
