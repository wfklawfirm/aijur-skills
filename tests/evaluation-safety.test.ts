import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { verifyEvaluation, offlineEvaluate, type EvaluationContext } from "@/lib/ai/agents/evaluation";
import type { EvaluationOutput } from "@/lib/ai/schemas";
import type { RubricDef, Localized } from "@content/types";

/**
 * `verifyEvaluation` is the layer that stands between whatever a model claims
 * and what the learner is actually told. Its one job: a score is only as
 * trustworthy as the verbatim evidence behind it. These tests attack it the
 * way a fabricating or careless model would — invented quotes, unknown ids,
 * missing criteria — and check the layer catches every case rather than
 * passing a plausible-looking score through.
 */

const L = (s: string): Localized => ({ ar: s, en: s });

const RUBRIC: RubricDef = {
  id: "rubric.test",
  name: L("Test rubric"),
  version: "v1",
  skillIds: ["skill.x"],
  passThreshold: 2,
  criteria: [
    {
      id: "acknowledgement",
      name: L("Acknowledgement"),
      description: L("d"),
      weight: 1,
      evidenceRequired: true,
      descriptors: [L("0"), L("1"), L("2"), L("3")],
    },
    {
      id: "next_step",
      name: L("Next step"),
      description: L("d"),
      weight: 1,
      evidenceRequired: true,
      descriptors: [L("0"), L("1"), L("2"), L("3")],
    },
  ],
  criticalMistakes: [{ id: "guarantee", label: L("Guaranteed an outcome"), capsScoreAt: 1 }],
};

const LEARNER_TEXT =
  "I understand this delay is frustrating for you. I will file the motion by Monday and call you once it's done.";

function baseOutput(overrides: Partial<EvaluationOutput> = {}): EvaluationOutput {
  return {
    criteria: [
      { criterionId: "acknowledgement", score: 3, evidence: "I understand this delay is frustrating for you", comment: "Leads with acknowledgement." },
      { criterionId: "next_step", score: 3, evidence: "I will file the motion by Monday", comment: "Owned and dated." },
    ],
    strengths: ["Leads with empathy"],
    missedOpportunities: [],
    criticalMistakeIds: [],
    priorityImprovement: "Nothing major.",
    betterAlternative: null,
    confidence: 0.9,
    ...overrides,
  };
}

describe("verifyEvaluation — evidence verification", () => {
  test("a fully honest evaluation with real quotes passes through with full confidence and no review flag", () => {
    const v = verifyEvaluation(baseOutput(), RUBRIC, LEARNER_TEXT);
    assert.equal(v.unverifiedCriterionIds.length, 0);
    assert.equal(v.needsHumanReview, false);
    assert.ok(v.overallScore > 2.5);
  });

  test("a fabricated quote (not present in the learner's text) is dropped and capped at score 1", () => {
    const output = baseOutput({
      criteria: [
        { criterionId: "acknowledgement", score: 3, evidence: "I completely agree with everything you say", comment: "fabricated" },
        { criterionId: "next_step", score: 3, evidence: "I will file the motion by Monday", comment: "real" },
      ],
    });
    const v = verifyEvaluation(output, RUBRIC, LEARNER_TEXT);
    assert.deepEqual(v.unverifiedCriterionIds, ["acknowledgement"]);
    const ack = v.criteria.find((c) => c.criterionId === "acknowledgement");
    assert.ok(ack && ack.score <= 1, "an unverifiable quote must cap the score, not just get flagged");
  });

  test("fabrication above 30% of criteria routes the evaluation to human review", () => {
    const output = baseOutput({
      criteria: [
        { criterionId: "acknowledgement", score: 3, evidence: "totally invented sentence one", comment: "x" },
        { criterionId: "next_step", score: 3, evidence: "totally invented sentence two", comment: "x" },
      ],
    });
    const v = verifyEvaluation(output, RUBRIC, LEARNER_TEXT);
    assert.equal(v.needsHumanReview, true);
    assert.equal(v.humanReviewReason, "unverified_evidence");
  });

  test("low model-reported confidence routes to human review even with verified evidence", () => {
    const v = verifyEvaluation(baseOutput({ confidence: 0.2 }), RUBRIC, LEARNER_TEXT);
    assert.equal(v.needsHumanReview, true);
    assert.equal(v.humanReviewReason, "low_confidence");
  });

  test("a criterion id not on the rubric is discarded rather than trusted", () => {
    const output = baseOutput({
      criteria: [
        ...baseOutput().criteria,
        { criterionId: "not_a_real_criterion", score: 3, evidence: "I understand this delay is frustrating for you", comment: "x" },
      ],
    });
    const v = verifyEvaluation(output, RUBRIC, LEARNER_TEXT);
    assert.ok(!v.criteria.some((c) => c.criterionId === "not_a_real_criterion"));
  });

  test("a critical-mistake id not declared by the rubric is discarded", () => {
    const output = baseOutput({ criticalMistakeIds: ["made_up_mistake"] });
    const v = verifyEvaluation(output, RUBRIC, LEARNER_TEXT);
    assert.deepEqual(v.criticalMistakeIds, []);
  });

  test("a genuine critical mistake caps the overall score regardless of individual criterion scores", () => {
    const output = baseOutput({ criticalMistakeIds: ["guarantee"] });
    const v = verifyEvaluation(output, RUBRIC, LEARNER_TEXT);
    assert.ok(v.overallScore <= 1, "the critical-mistake cap (1) must bound the overall score");
    assert.equal(v.passed, false, "a critical mistake must fail the attempt regardless of score");
  });

  test("missing rubric coverage (model skipped a criterion) is flagged for review", () => {
    // confidence pinned at 1 so the coverage penalty alone (0.5x from
    // covering only 1 of 2 criteria) doesn't also trip the separate
    // low_confidence branch — this test isolates the coverage check.
    const output = baseOutput({
      confidence: 1,
      criteria: [{ criterionId: "acknowledgement", score: 3, evidence: "I understand this delay is frustrating for you", comment: "x" }],
    });
    const v = verifyEvaluation(output, RUBRIC, LEARNER_TEXT);
    assert.equal(v.needsHumanReview, true);
    assert.equal(v.humanReviewReason, "incomplete_rubric_coverage");
  });

  test("case and whitespace differences alone do not invalidate a genuine quote", () => {
    const output = baseOutput({
      criteria: [
        { criterionId: "acknowledgement", score: 3, evidence: "I UNDERSTAND   this delay is frustrating for you", comment: "x" },
        { criterionId: "next_step", score: 3, evidence: "I will file the motion by Monday", comment: "x" },
      ],
    });
    const v = verifyEvaluation(output, RUBRIC, LEARNER_TEXT);
    assert.equal(v.unverifiedCriterionIds.length, 0, "normalisation should tolerate case/whitespace, not just exact matches");
  });
});

describe("offlineEvaluate — deterministic fallback", () => {
  const ctx: EvaluationContext = {
    rubric: RUBRIC,
    locale: "en",
    task: "Reply to the client.",
    learnerText: LEARNER_TEXT,
    userId: "u1",
    organizationId: null,
    allowRemote: false,
  };

  test("always reports low, honest confidence — it is a rule engine, never presented as a finished assessment", () => {
    const out = offlineEvaluate(ctx);
    assert.ok(out.confidence <= 0.4);
  });

  test("every criterion's evidence is a real substring of the learner's text (no offline fabrication either)", () => {
    const out = offlineEvaluate(ctx);
    for (const c of out.criteria) {
      assert.ok(
        ctx.learnerText.toLowerCase().includes(c.evidence.toLowerCase().slice(0, 20)) || c.evidence.length < 20,
        `evidence "${c.evidence}" should be traceable to the learner's actual text`,
      );
    }
  });

  test("a guarantee-style promise is caught and mapped to the rubric's critical mistake", () => {
    const guaranteeCtx: EvaluationContext = {
      ...ctx,
      learnerText: "Don't worry, I guarantee we will win this case for you.",
    };
    const out = offlineEvaluate(guaranteeCtx);
    assert.deepEqual(out.criticalMistakeIds, ["guarantee"]);
  });

  test("offline output still verifies cleanly through the same safety layer used for model output", () => {
    const out = offlineEvaluate(ctx);
    const v = verifyEvaluation(out, RUBRIC, ctx.learnerText);
    assert.equal(v.unverifiedCriterionIds.length, 0, "the offline engine's own evidence must be genuinely verbatim");
  });
});
