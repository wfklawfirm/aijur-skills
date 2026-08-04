import { test, describe, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { attempts, users } from "@/lib/db/schema";
import { computeUnitCompletionSummary } from "@/lib/learning/unit-completion";
import { uid } from "@/lib/utils";

/**
 * Regression test for a real integrity bug: `completeUnit()` used to take a
 * `results: {score, maxScore, kind}[]` argument straight from the client
 * and pass it to `summariseUnit()` unchecked. Since it's a `"use server"`
 * export, that argument is an independently callable RPC parameter, not
 * just page-rendered data — any signed-in caller could report a fabricated
 * perfect score for any unit regardless of what they actually did. It also
 * meant an honest learner's earlier steps were silently dropped from their
 * own score if the unit-player component remounted (navigating to a
 * simulation step and back) before the final step.
 *
 * `computeUnitCompletionSummary()` closes both: it takes only a `userId`
 * (always `requireUser()`'s own id at the real call site, never anything
 * client-supplied) and reconstructs the summary from `attempts` — the rows
 * `submitActivity()` actually wrote server-side — so what this test proves
 * is that the summary reflects the DB record regardless of what a caller
 * might have wanted it to say.
 *
 * Uses `unit.cc.01`'s real seeded activity `act.cc.01.1` (Client
 * Communication Foundations, the platform's original, longest-shipped
 * path) — requires the dev DB to be seeded (`npm run db:seed`), same
 * precondition every other DB-integration test in this suite already
 * relies on.
 */

const TEST_USER_ID = uid("testuser");
const UNIT_ID = "unit.cc.01";
const ACTIVITY_ID = "act.cc.01.1"; // multiple_choice, see content/paths/cc-units-01-04.ts

async function cleanup() {
  await db.delete(attempts).where(eq(attempts.userId, TEST_USER_ID));
  await db.delete(users).where(eq(users.id, TEST_USER_ID));
}

beforeEach(async () => {
  await cleanup();
  await db.insert(users).values({
    id: TEST_USER_ID,
    email: `${TEST_USER_ID}@test.invalid`,
    passwordHash: "scrypt$1$1$1$test$test",
    name: "Unit Completion Test User",
  });
});

after(cleanup);

describe("computeUnitCompletionSummary — server-recorded attempts are the only source of truth", () => {
  test("a unit with no recorded attempts summarises to zero, not an error or a guessed score", async () => {
    const summary = await computeUnitCompletionSummary(TEST_USER_ID, UNIT_ID);
    assert.deepEqual(summary, { score: 0, maxScore: 0, passed: false });
  });

  test("the summary reflects the real recorded score for a genuinely low attempt", async () => {
    await db.insert(attempts).values({
      id: uid("att"),
      userId: TEST_USER_ID,
      activityId: ACTIVITY_ID,
      unitId: UNIT_ID,
      skillId: "skill.test",
      response: { selected: ["wrong"] },
      score: 0,
      maxScore: 1,
      passed: false,
      gradedBy: "deterministic",
    });

    const summary = await computeUnitCompletionSummary(TEST_USER_ID, UNIT_ID);
    // Whatever a client might have claimed, the score here is exactly what
    // was recorded server-side -- there is no parameter through which a
    // caller could report anything else.
    assert.equal(summary.score, 0);
    assert.equal(summary.maxScore, 1);
    assert.equal(summary.passed, false);
  });

  test("a redone step across page loads counts once, using the latest attempt", async () => {
    const earlier = Date.now() - 60_000;
    const later = Date.now();

    await db.insert(attempts).values([
      {
        id: uid("att"),
        userId: TEST_USER_ID,
        activityId: ACTIVITY_ID,
        unitId: UNIT_ID,
        skillId: "skill.test",
        response: { selected: ["wrong"] },
        score: 0,
        maxScore: 1,
        passed: false,
        gradedBy: "deterministic",
        createdAt: earlier,
      },
      {
        id: uid("att"),
        userId: TEST_USER_ID,
        activityId: ACTIVITY_ID,
        unitId: UNIT_ID,
        skillId: "skill.test",
        response: { selected: ["right"] },
        score: 1,
        maxScore: 1,
        passed: true,
        gradedBy: "deterministic",
        createdAt: later,
      },
    ]);

    const summary = await computeUnitCompletionSummary(TEST_USER_ID, UNIT_ID);
    // Not 2 -- the two rows are the same activity redone, so only the later
    // (correct) attempt should count, not both summed together.
    assert.equal(summary.maxScore, 1);
    assert.equal(summary.score, 1);
  });

  test("an attempt recorded under a different unit id is not pulled into this unit's summary", async () => {
    await db.insert(attempts).values({
      id: uid("att"),
      userId: TEST_USER_ID,
      activityId: ACTIVITY_ID,
      unitId: "unit.cc.02",
      skillId: "skill.test",
      response: { selected: ["right"] },
      score: 1,
      maxScore: 1,
      passed: true,
      gradedBy: "deterministic",
    });

    const summary = await computeUnitCompletionSummary(TEST_USER_ID, UNIT_ID);
    assert.deepEqual(summary, { score: 0, maxScore: 0, passed: false });
  });
});
