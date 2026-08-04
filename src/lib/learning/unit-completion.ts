import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { attempts } from "@/lib/db/schema";
import { getUnit } from "@/lib/content/service";
import { summariseUnit } from "./grading";

/**
 * The real source of truth for a unit's final score — reconstructed from
 * `attempts` (what the server actually recorded per activity submission),
 * never from client input.
 *
 * `completeUnit()` in `src/lib/actions/progress.ts` used to take a
 * `results: {score, maxScore, kind}[]` argument straight from the client
 * and hand it to `summariseUnit()` unchecked. A `"use server"` export is an
 * independently callable RPC endpoint, not just page-rendered data, so any
 * signed-in caller could mark any unit "completed" with a fabricated
 * perfect score — which `computePathStatuses()` uses to unlock the next
 * unit, and which an org's manager-facing report counts as
 * `unitsCompleted`. It also meant an honest learner who navigated to a
 * simulation step and back (a full page load, resetting the client's
 * in-memory results array) had their earlier steps silently dropped from
 * their own final score.
 *
 * Split out of `progress.ts` (which needs a live Next.js request for
 * `requireUser()`'s cookie access) so this — the actual query and
 * reconstruction logic — is testable directly with a real `userId`, the
 * same way `org-core.ts`/`admin-core.ts` split their query logic out for
 * testability. Not itself a `"use server"` export: it takes `userId` as a
 * plain parameter, so it must never be reachable from the client with an
 * attacker-controlled `userId` — `completeUnit()` is the only caller, and
 * it always passes `requireUser()`'s own id, never anything client-supplied.
 */
export async function computeUnitCompletionSummary(
  userId: string,
  unitId: string,
): Promise<{ score: number; maxScore: number; passed: boolean }> {
  const unit = await getUnit(unitId);
  if (!unit) throw new Error("Unit not found");

  const activityKindById = new Map(unit.activities.map((a) => [a.id, a.kind] as const));

  const rows = await db
    .select()
    .from(attempts)
    .where(and(eq(attempts.userId, userId), eq(attempts.unitId, unitId)));

  // Keep only the latest attempt per activity — a learner can end up with
  // more than one row for the same activityId if they redid a step across
  // separate page loads. createdAt is a real server timestamp, not a
  // client-controlled one.
  const latestByActivity = new Map<string, (typeof rows)[number]>();
  for (const row of rows) {
    const existing = latestByActivity.get(row.activityId);
    if (!existing || row.createdAt > existing.createdAt) latestByActivity.set(row.activityId, row);
  }

  const results = [...latestByActivity.values()]
    .map((row) => {
      const kind = activityKindById.get(row.activityId);
      // Defensive: an attempt for an activity id no longer in the unit's
      // current definition (content was edited after the learner attempted
      // it) contributes nothing rather than guessing a kind.
      return kind ? { score: row.score, maxScore: row.maxScore, kind: kind as string } : null;
    })
    .filter((r): r is { score: number; maxScore: number; kind: string } => r !== null);

  return summariseUnit(results);
}
