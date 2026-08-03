import { test, describe, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { evaluations, evidence, masteryRecords, reviewSchedule, users } from "@/lib/db/schema";
import { applyPendingMasteryForEvaluation } from "@/lib/actions/mastery-bridge";
import { uid } from "@/lib/utils";

/**
 * Integration test against the real (dev/seed) SQLite DB — this is the one
 * place in the suite that needs actual persistence, since the behavior under
 * test IS persistence: does a queued evaluation's score stay out of the
 * mastery record until a human applies it, and does applying it twice not
 * double-count?
 *
 * Uses a throwaway user and a synthetic skill id (mastery-bridge writes are
 * keyed by (userId, skillId) with no FK to the skills content table). Every
 * mastery/evidence/schedule/evaluation row this file creates is wiped in
 * `beforeEach` (so tests don't leak state into each other) and again in
 * `after` (so nothing survives the run) — this must never leave residue in a
 * database a human might also be looking at.
 */

const TEST_USER_ID = uid("testuser");
const TEST_SKILL_ID = "skill.__mastery_bridge_test__";

async function wipeTestUserEvidence() {
  await db.delete(evaluations).where(eq(evaluations.userId, TEST_USER_ID));
  await db.delete(evidence).where(eq(evidence.userId, TEST_USER_ID));
  await db.delete(reviewSchedule).where(eq(reviewSchedule.userId, TEST_USER_ID));
  await db.delete(masteryRecords).where(eq(masteryRecords.userId, TEST_USER_ID));
}

beforeEach(wipeTestUserEvidence);

after(async () => {
  await wipeTestUserEvidence();
  await db.delete(users).where(eq(users.id, TEST_USER_ID));
});

async function ensureTestUser() {
  await db
    .insert(users)
    .values({
      id: TEST_USER_ID,
      email: `${TEST_USER_ID}@test.invalid`,
      passwordHash: "scrypt$1$1$1$test$test",
      name: "Mastery Bridge Test User",
    })
    .onConflictDoNothing();
}

async function insertQueuedEvaluation(overrides: Partial<typeof evaluations.$inferInsert> = {}) {
  const id = uid("eval-test");
  await db.insert(evaluations).values({
    id,
    userId: TEST_USER_ID,
    subjectType: "attempt",
    subjectId: "activity.__test__",
    rubricId: "rubric.__test__",
    rubricVersion: "v1",
    overallScore: 2.7,
    maxScore: 3,
    passed: true,
    criteria: [],
    strengths: [],
    missedOpportunities: [],
    criticalMistakes: [],
    priorityImprovement: "test",
    recommendedPractice: [],
    confidence: 0.9,
    humanReviewStatus: "queued",
    pendingMastery: [{ skillId: TEST_SKILL_ID, targetLevel: 1, depth: "production" }],
    masteryApplied: false,
    ...overrides,
  });
  return id;
}

describe("applyPendingMasteryForEvaluation", () => {
  test("a queued evaluation contributes nothing to mastery until applied", async () => {
    await ensureTestUser();
    await insertQueuedEvaluation();

    const before = await db
      .select()
      .from(masteryRecords)
      .where(eq(masteryRecords.userId, TEST_USER_ID));
    assert.equal(before.length, 0, "no mastery record should exist before the evaluation is applied");
  });

  test("applying it writes a mastery record and an evidence row", async () => {
    await ensureTestUser();
    const evaluationId = await insertQueuedEvaluation();

    const results = await applyPendingMasteryForEvaluation(evaluationId);
    assert.equal(results.length, 1);
    assert.equal(results[0]?.skillId, TEST_SKILL_ID);

    const masteryRows = await db
      .select()
      .from(masteryRecords)
      .where(eq(masteryRecords.userId, TEST_USER_ID));
    assert.equal(masteryRows.length, 1, "exactly one mastery record for the test skill");
    assert.equal(masteryRows[0]?.evidenceCount, 1);

    const evidenceRows = await db.select().from(evidence).where(eq(evidence.userId, TEST_USER_ID));
    assert.equal(evidenceRows.length, 1);
    assert.equal(evidenceRows[0]?.kind, "evaluation");
    assert.equal(evidenceRows[0]?.refId, evaluationId);

    const evalRow = (await db.select().from(evaluations).where(eq(evaluations.id, evaluationId)))[0];
    assert.equal(evalRow?.masteryApplied, true, "the evaluation must be marked applied");
  });

  test("applying the same evaluation twice does not double-count evidence (idempotent)", async () => {
    await ensureTestUser();
    const evaluationId = await insertQueuedEvaluation();

    await applyPendingMasteryForEvaluation(evaluationId);
    const secondResult = await applyPendingMasteryForEvaluation(evaluationId);
    assert.deepEqual(secondResult, [], "a second call on an already-applied evaluation must be a no-op");

    const masteryRows = await db
      .select()
      .from(masteryRecords)
      .where(eq(masteryRecords.userId, TEST_USER_ID));
    assert.equal(masteryRows[0]?.evidenceCount, 1, "evidence count must not increase on the redundant call");

    const evidenceRows = await db.select().from(evidence).where(eq(evidence.userId, TEST_USER_ID));
    assert.equal(evidenceRows.length, 1, "only one evidence row, not two");
  });

  test("an evaluation with no pendingMastery is a no-op (nothing to apply)", async () => {
    await ensureTestUser();
    const evaluationId = await insertQueuedEvaluation({ pendingMastery: null });
    const result = await applyPendingMasteryForEvaluation(evaluationId);
    assert.deepEqual(result, []);
  });

  test("an unknown evaluation id is a no-op rather than throwing", async () => {
    const result = await applyPendingMasteryForEvaluation("eval.does-not-exist");
    assert.deepEqual(result, []);
  });
});
