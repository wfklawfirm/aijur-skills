"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth/session";
import {
  decideEvaluationReviewCore,
  decideGateCore,
  decideIngestionSuggestionCore,
  getReviewGateStatusCore,
  listPendingIngestionCore,
  listQueuedEvaluationsCore,
  listSourcesCore,
  publishEntityCore,
  unpublishEntityCore,
  type EntityType,
  type Gate,
} from "./admin-core";

// Note: types are NOT re-exported from here (see org.ts for why "use server"
// files can't re-export types). Consumers import `EntityType`/`Gate` straight
// from `./admin-core`.

/**
 * Content Studio's action surface. Each export here is a thin wrapper:
 * `requireUser()` resolves the real signed-in session (the only part that
 * needs a live Next.js request), then delegates to `admin-core.ts`, which
 * does the actual `require_()` check and query/mutation. See
 * `admin-core.ts`'s file comment for why this split exists.
 */

export async function getReviewGateStatus(entityType: EntityType, entityId: string) {
  const user = await requireUser();
  return getReviewGateStatusCore(user, entityType, entityId);
}

export async function decideGate(
  entityType: EntityType,
  entityId: string,
  gate: Gate,
  decision: "approved" | "changes_requested",
  notes?: string,
): Promise<void> {
  const user = await requireUser();
  await decideGateCore(user, entityType, entityId, gate, decision, notes);
  revalidatePath("/[locale]/admin", "page");
}

/** Publication is blocked — not just discouraged — until every applicable gate is approved. */
export async function publishEntity(
  entityType: EntityType,
  entityId: string,
  requiresLegalEnglish: boolean,
): Promise<{ ok: boolean; missing: Gate[] }> {
  const user = await requireUser();
  const result = await publishEntityCore(user, entityType, entityId, requiresLegalEnglish);
  revalidatePath("/[locale]/admin", "page");
  return result;
}

export async function unpublishEntity(entityType: EntityType, entityId: string): Promise<void> {
  const user = await requireUser();
  await unpublishEntityCore(user, entityType, entityId);
  revalidatePath("/[locale]/admin", "page");
}

// ---------------------------------------------------------------------------
// Assisted knowledge ingestion queue
// ---------------------------------------------------------------------------

export async function listPendingIngestion() {
  const user = await requireUser();
  return listPendingIngestionCore(user);
}

export async function decideIngestionSuggestion(
  id: string,
  decision: "accepted" | "edited" | "merged" | "rejected",
): Promise<void> {
  const user = await requireUser();
  await decideIngestionSuggestionCore(user, id, decision);
}

// ---------------------------------------------------------------------------
// Evaluation human-review queue
// ---------------------------------------------------------------------------

export async function listQueuedEvaluations(limit = 25) {
  const user = await requireUser();
  return listQueuedEvaluationsCore(user, limit);
}

export async function decideEvaluationReview(
  evaluationId: string,
  decision: "upheld" | "overturned" | "edited" | "rejected",
  notes?: string,
): Promise<void> {
  const user = await requireUser();
  await decideEvaluationReviewCore(user, evaluationId, decision, notes);
}

export async function listSources() {
  const user = await requireUser();
  return listSourcesCore(user);
}
