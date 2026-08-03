import { test, describe } from "node:test";
import assert from "node:assert/strict";
import {
  applyEvidence,
  emptyMastery,
  decayedConfidence,
  needsReview,
  levelKey,
  depthOf,
  REVIEW_CONFIDENCE_FLOOR,
  type MasteryState,
} from "@/lib/learning/mastery";
import { DAY_MS } from "@/lib/utils";

/**
 * The mastery algorithm is the product's central integrity claim: a level is
 * never granted for finishing content, only for demonstrated behaviour. These
 * tests exercise the four gates (correctness, consistency, breadth, depth)
 * independently, so a regression in any one of them fails loudly here rather
 * than silently inflating a learner's claimed skill.
 */

describe("applyEvidence — consistency gate", () => {
  test("a single pass, however strong, does not level up", () => {
    const state = emptyMastery();
    const r1 = applyEvidence(state, { level: 1, score: 0.95, depth: "recognition", itemId: "a", at: 1000 }, []);
    assert.equal(r1.next.level, 0, "one pass must not be enough on its own");
    assert.equal(r1.levelChanged, false);
    assert.equal(r1.reason, "needs_second_pass");
  });

  test("two consecutive passes on distinct items reach level 1", () => {
    const state = emptyMastery();
    const r1 = applyEvidence(state, { level: 1, score: 0.9, depth: "recognition", itemId: "a", at: 1000 }, []);
    const r2 = applyEvidence(r1.next, { level: 1, score: 0.9, depth: "recognition", itemId: "b", at: 2000 }, ["a"]);
    assert.equal(r2.next.level, 1);
    assert.equal(r2.levelChanged, true);
    assert.equal(r2.reason, "level_up");
  });

  test("a failure between two passes resets the consecutive-pass counter", () => {
    const state = emptyMastery();
    const r1 = applyEvidence(state, { level: 1, score: 0.9, depth: "recognition", itemId: "a", at: 1000 }, []);
    const r2 = applyEvidence(r1.next, { level: 1, score: 0.4, depth: "recognition", itemId: "b", at: 2000 }, ["a"]);
    assert.equal(r2.next.consecutivePasses, 0, "a fail must zero the streak");
    const r3 = applyEvidence(r2.next, { level: 1, score: 0.9, depth: "recognition", itemId: "c", at: 3000 }, ["a", "b"]);
    // Only one consecutive pass again (r3) after the reset — must not level up yet.
    assert.equal(r3.next.level, 0);
    assert.equal(r3.reason, "needs_second_pass");
  });
});

describe("applyEvidence — breadth gate", () => {
  test("two passes on the SAME item do not count as breadth", () => {
    const state = emptyMastery();
    const r1 = applyEvidence(state, { level: 1, score: 0.9, depth: "recognition", itemId: "a", at: 1000 }, []);
    const r2 = applyEvidence(r1.next, { level: 1, score: 0.9, depth: "recognition", itemId: "a", at: 2000 }, ["a"]);
    assert.equal(r2.next.level, 0, "repeating one memorised item must not grant the level");
    assert.equal(r2.reason, "needs_different_item");
  });
});

describe("applyEvidence — depth gate", () => {
  test("Applied (level 3) is withheld on recognition-only evidence even with consistency and breadth", () => {
    // Accumulates seen item ids across calls — `applyEvidence` needs the
    // caller to pass the *running* set of prior item ids, not just the
    // current one, for the breadth check to mean anything.
    let state: MasteryState = emptyMastery();
    const seen: string[] = [];
    function advance(level: 1 | 2 | 3, depth: "recognition" | "production", itemId: string, at: number) {
      const r = applyEvidence(state, { level, score: 0.9, depth, itemId, at }, seen);
      seen.push(itemId);
      state = r.next;
      return r;
    }

    // Walk up to level 2 first with recognition evidence (allowed below 3).
    advance(1, "recognition", "a", 1000);
    advance(1, "recognition", "b", 2000);
    assert.equal(state.level, 1);
    advance(2, "recognition", "c", 3000);
    advance(2, "recognition", "d", 4000);
    assert.equal(state.level, 2);

    // Now push for level 3 with recognition evidence only — should be blocked,
    // even once consistency (2 passes) and breadth (2 items) are satisfied.
    advance(3, "recognition", "e", 5000);
    const r2 = advance(3, "recognition", "f", 6000);
    assert.equal(r2.next.level, 2, "recognition evidence alone must not unlock level 3");
    assert.equal(r2.reason, "needs_production_evidence");

    // A single piece of production evidence — consistency and breadth are
    // already satisfied — closes the depth gate and levels up immediately.
    const r3 = advance(3, "production", "g", 7000);
    assert.equal(r3.next.level, 3);
    assert.equal(r3.reason, "level_up");
  });
});

describe("applyEvidence — correctness gate", () => {
  test("a below-threshold score never levels up regardless of streak bookkeeping", () => {
    const state = emptyMastery();
    const r1 = applyEvidence(state, { level: 1, score: 0.3, depth: "recognition", itemId: "a", at: 1000 }, []);
    assert.equal(r1.reason, "below_threshold");
    assert.equal(r1.next.level, 0);
  });

  test("levels never drop — repeated failures leave level unchanged, not regressed", () => {
    let state: MasteryState = { ...emptyMastery(), level: 2, peakLevel: 2 };
    const r = applyEvidence(state, { level: 2, score: 0.1, depth: "recognition", itemId: "x", at: 1000 }, []);
    assert.equal(r.next.level, 2, "a level, once earned, is never taken away by decay or failure");
  });
});

describe("decayedConfidence", () => {
  test("confidence is unchanged with no time elapsed", () => {
    const state: MasteryState = { ...emptyMastery(), confidence: 0.8, lastAssessedAt: 1000 };
    assert.equal(decayedConfidence(state, 1000), 0.8);
  });

  test("confidence roughly halves after one half-life (60 days)", () => {
    // A non-zero base timestamp: `lastAssessedAt: 0` is falsy in JS and would
    // be indistinguishable from "never assessed" (null) to `decayedConfidence`.
    const base = DAY_MS;
    const state: MasteryState = { ...emptyMastery(), confidence: 0.8, lastAssessedAt: base };
    const decayed = decayedConfidence(state, base + 60 * DAY_MS);
    assert.ok(Math.abs(decayed - 0.4) < 0.01, `expected ~0.4, got ${decayed}`);
  });

  test("never-assessed state returns its raw confidence (no lastAssessedAt to decay from)", () => {
    const state = emptyMastery();
    assert.equal(decayedConfidence(state, 1_000_000), state.confidence);
  });
});

describe("needsReview", () => {
  test("level 0 (never demonstrated) is never on the review list", () => {
    const state: MasteryState = { ...emptyMastery(), level: 0, confidence: 0.01, lastAssessedAt: 0 };
    assert.equal(needsReview(state, 100 * DAY_MS), false);
  });

  test("a decayed level >0 falls below the floor and needs review", () => {
    const base = DAY_MS;
    const state: MasteryState = { ...emptyMastery(), level: 2, confidence: 0.9, lastAssessedAt: base };
    const now = base + 200 * DAY_MS; // several half-lives out
    assert.ok(decayedConfidence(state, now) < REVIEW_CONFIDENCE_FLOOR);
    assert.equal(needsReview(state, now), true);
  });

  test("a freshly assessed level is not due for review", () => {
    const state: MasteryState = { ...emptyMastery(), level: 2, confidence: 0.9, lastAssessedAt: 1000 };
    assert.equal(needsReview(state, 1000), false);
  });
});

describe("levelKey", () => {
  test("clamps and rounds into the l0..l6 key space", () => {
    assert.equal(levelKey(-3), "l0");
    assert.equal(levelKey(0), "l0");
    assert.equal(levelKey(3.4), "l3");
    assert.equal(levelKey(3.6), "l4");
    assert.equal(levelKey(6), "l6");
    assert.equal(levelKey(99), "l6");
  });
});

describe("depthOf", () => {
  test("classifies each activity kind by evidentiary weight", () => {
    assert.equal(depthOf("simulation"), "simulation");
    assert.equal(depthOf("short_written"), "production");
    assert.equal(depthOf("email_rewrite"), "production");
    assert.equal(depthOf("branching_decision"), "production");
    assert.equal(depthOf("pronunciation"), "production");
    assert.equal(depthOf("multiple_choice"), "recognition");
    assert.equal(depthOf("matching"), "recognition");
  });
});
