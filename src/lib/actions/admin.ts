"use server";

import { and, desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
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
import { requireUser } from "@/lib/auth/session";
import { require_ } from "@/lib/auth/rbac";
import { uid } from "@/lib/utils";
import { applyPendingMasteryForEvaluation } from "./mastery-bridge";

const GATES = ["sme", "learning_design", "legal_english", "language", "accessibility", "qa"] as const;
type Gate = (typeof GATES)[number];
type EntityType = "unit" | "activity" | "scenario" | "skill";

export async function getReviewGateStatus(entityType: EntityType, entityId: string) {
  const rows = await db
    .select()
    .from(contentReviews)
    .where(and(eq(contentReviews.entityType, entityType), eq(contentReviews.entityId, entityId)));
  return GATES.map((gate) => {
    const row = rows.find((r) => r.gate === gate);
    return { gate, status: row?.status ?? "pending", notes: row?.notes ?? null };
  });
}

export async function decideGate(
  entityType: EntityType,
  entityId: string,
  gate: Gate,
  decision: "approved" | "changes_requested",
  notes?: string,
): Promise<void> {
  const user = await requireUser();
  require_(user, "content.review");
  await db
    .insert(contentReviews)
    .values({ id: `rev.${entityId}.${gate}`, entityType, entityId, gate, status: decision, reviewerId: user.id, notes, decidedAt: Date.now() })
    .onConflictDoUpdate({
      target: contentReviews.id,
      set: { status: decision, reviewerId: user.id, notes, decidedAt: Date.now() },
    });
  revalidatePath("/[locale]/admin", "page");
}

/** Publication is blocked — not just discouraged — until every applicable gate is approved. */
export async function publishEntity(entityType: EntityType, entityId: string, requiresLegalEnglish: boolean): Promise<{ ok: boolean; missing: Gate[] }> {
  const user = await requireUser();
  require_(user, "content.publish");

  const gates = await getReviewGateStatus(entityType, entityId);
  const missing = gates
    .filter((g) => (requiresLegalEnglish || g.gate !== "legal_english"))
    .filter((g) => g.status !== "approved")
    .map((g) => g.gate);

  if (missing.length > 0) return { ok: false, missing };

  const table = entityType === "unit" ? units : entityType === "scenario" ? scenarios : entityType === "skill" ? skills : null;
  if (table) {
    await db.update(table).set({ status: "published", updatedAt: Date.now() }).where(eq(table.id, entityId));
  }
  revalidatePath("/[locale]/admin", "page");
  return { ok: true, missing: [] };
}

export async function unpublishEntity(entityType: EntityType, entityId: string): Promise<void> {
  const user = await requireUser();
  require_(user, "content.publish");
  const table = entityType === "unit" ? units : entityType === "scenario" ? scenarios : entityType === "skill" ? skills : null;
  if (table) await db.update(table).set({ status: "archived", updatedAt: Date.now() }).where(eq(table.id, entityId));
  revalidatePath("/[locale]/admin", "page");
}

// ---------------------------------------------------------------------------
// Assisted knowledge ingestion queue
// ---------------------------------------------------------------------------

export async function listPendingIngestion() {
  return db
    .select()
    .from(ingestionSuggestions)
    .where(eq(ingestionSuggestions.status, "pending"))
    .orderBy(desc(ingestionSuggestions.confidence));
}

export async function decideIngestionSuggestion(
  id: string,
  decision: "accepted" | "edited" | "merged" | "rejected",
): Promise<void> {
  const user = await requireUser();
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

export async function listQueuedEvaluations(limit = 25) {
  return db
    .select()
    .from(evaluations)
    .where(eq(evaluations.humanReviewStatus, "queued"))
    .orderBy(desc(evaluations.createdAt))
    .limit(limit);
}

export async function decideEvaluationReview(
  evaluationId: string,
  decision: "upheld" | "overturned" | "edited" | "rejected",
  notes?: string,
): Promise<void> {
  const user = await requireUser();
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

export async function listSources() {
  return db.select().from(sources).orderBy(desc(sources.createdAt));
}
