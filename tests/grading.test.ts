import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { gradeActivity, requiresAiGrading, isSelfReported, summariseUnit } from "@/lib/learning/grading";
import type { Activity, Localized } from "@content/types";

const L = (s: string): Localized => ({ ar: s, en: s });

describe("gradeActivity — multiple_choice", () => {
  const activity: Activity = {
    id: "a1",
    kind: "multiple_choice",
    skillId: "skill.x",
    stage: 1,
    prompt: L("prompt"),
    options: [
      { id: "opt.correct", label: L("right"), correct: true, rationale: L("because") },
      { id: "opt.wrong", label: L("wrong"), rationale: L("because not") },
    ],
  };

  test("the correct single selection passes", () => {
    const result = gradeActivity(activity, { selected: ["opt.correct"] });
    assert.equal(result.passed, true);
    assert.equal(result.verdict, "correct");
    assert.equal(result.score, result.maxScore);
  });

  test("the wrong selection fails and still reveals both rationales", () => {
    const result = gradeActivity(activity, { selected: ["opt.wrong"] });
    assert.equal(result.passed, false);
    assert.equal(result.verdict, "incorrect");
    assert.ok(result.revealIds.includes("opt.wrong"));
    assert.ok(result.revealIds.includes("opt.correct"), "the correct answer's rationale must always surface too");
  });
});

describe("gradeActivity — multiple_select (partial credit, penalised over-selection)", () => {
  const activity: Activity = {
    id: "a2",
    kind: "multiple_select",
    skillId: "skill.x",
    stage: 1,
    prompt: L("prompt"),
    options: [
      { id: "c1", label: L("c1"), correct: true, rationale: L("r") },
      { id: "c2", label: L("c2"), correct: true, rationale: L("r") },
      { id: "w1", label: L("w1"), rationale: L("r") },
    ],
  };

  test("selecting exactly the correct set scores full marks", () => {
    const result = gradeActivity(activity, { selected: ["c1", "c2"] });
    assert.equal(result.passed, true);
    assert.equal(result.score, result.maxScore);
  });

  test("over-selecting (a correct choice plus a wrong one) is penalised, not free credit", () => {
    const result = gradeActivity(activity, { selected: ["c1", "w1"] });
    assert.equal(result.passed, false);
    // hits=1, misses=1 -> max(0, 1-1)/2 = 0
    assert.equal(result.score, 0);
  });

  test("a correct subset without over-selecting scores partial credit", () => {
    const result = gradeActivity(activity, { selected: ["c1"] });
    assert.equal(result.verdict, "partial");
    assert.ok(result.score > 0 && result.score < result.maxScore);
  });
});

describe("gradeActivity — ordering", () => {
  const activity: Activity = {
    id: "a3",
    kind: "ordering",
    skillId: "skill.x",
    stage: 1,
    prompt: L("prompt"),
    items: [
      { id: "1", label: L("first") },
      { id: "2", label: L("second") },
      { id: "3", label: L("third") },
    ],
  };

  test("the exact order is a perfect, passing score", () => {
    const result = gradeActivity(activity, { order: ["1", "2", "3"] });
    assert.equal(result.passed, true);
    assert.deepEqual(result.wrongPositions, []);
  });

  test("a fully reversed order flags every wrong position bar the middle", () => {
    const result = gradeActivity(activity, { order: ["3", "2", "1"] });
    assert.equal(result.passed, false);
    assert.deepEqual(result.wrongPositions, [0, 2]);
  });
});

describe("gradeActivity — categorization", () => {
  const activity: Activity = {
    id: "a4",
    kind: "categorization",
    skillId: "skill.x",
    stage: 1,
    prompt: L("prompt"),
    buckets: [
      { id: "bucket.a", label: L("A") },
      { id: "bucket.b", label: L("B") },
    ],
    items: [
      { id: "i1", label: L("i1"), bucketId: "bucket.a", rationale: L("r") },
      { id: "i2", label: L("i2"), bucketId: "bucket.b", rationale: L("r") },
    ],
  };

  test("wrongly-bucketed items are listed first in revealIds", () => {
    const result = gradeActivity(activity, { assignments: { i1: "bucket.b", i2: "bucket.b" } });
    assert.equal(result.revealIds[0], "i1");
  });
});

describe("gradeActivity — matching, fill_blank, branching_decision, pronunciation, reflection", () => {
  test("matching: only exact left=right pairs count", () => {
    const activity: Activity = {
      id: "a5",
      kind: "matching",
      skillId: "skill.x",
      stage: 1,
      prompt: L("p"),
      pairs: [
        { id: "p1", left: L("l1"), right: L("r1") },
        { id: "p2", left: L("l2"), right: L("r2") },
      ],
    };
    const result = gradeActivity(activity, { pairs: { p1: "p1", p2: "wrong" } });
    assert.equal(result.verdict, "partial");
  });

  test("fill_blank: answerIndex must match exactly", () => {
    const activity: Activity = {
      id: "a6",
      kind: "fill_blank",
      skillId: "skill.x",
      stage: 1,
      prompt: L("p"),
      template: L("The {{0}} fox"),
      blanks: [{ id: "b1", options: [L("quick"), L("slow")], answerIndex: 0, rationale: L("r") }],
    };
    assert.equal(gradeActivity(activity, { answers: { b1: 0 } }).passed, true);
    assert.equal(gradeActivity(activity, { answers: { b1: 1 } }).passed, false);
  });

  test("branching_decision: a single critical mistake caps the score at 0.34x weight and fails the activity", () => {
    const activity: Activity = {
      id: "a7",
      kind: "branching_decision",
      skillId: "skill.x",
      stage: 3,
      prompt: L("p"),
      startNodeId: "n1",
      nodes: [
        {
          id: "n1",
          text: L("t"),
          choices: [
            { id: "c1", label: L("strong choice"), nextNodeId: null, quality: "strong", rationale: L("r") },
            { id: "c2", label: L("bad choice"), nextNodeId: null, quality: "critical_mistake", rationale: L("r") },
          ],
        },
      ],
    };
    const good = gradeActivity(activity, { path: ["c1"] });
    assert.equal(good.passed, true);
    assert.equal(good.verdict, "correct");

    const bad = gradeActivity(activity, { path: ["c2"] });
    assert.equal(bad.passed, false);
    assert.equal(bad.verdict, "incorrect");
    assert.ok(bad.score <= 0.34 * (activity.weight ?? 1) + 1e-9);
  });

  test("pronunciation is self-reported and never blocks progress", () => {
    const activity: Activity = {
      id: "a8",
      kind: "pronunciation",
      skillId: "skill.x",
      stage: 1,
      prompt: L("p"),
      target: "negotiate",
      meaning: L("m"),
      exampleSentence: L("s"),
      grading: "self_report",
    };
    const result = gradeActivity(activity, { selfRating: 1, attempted: true });
    assert.equal(result.passed, true, "self-reported activities never block progress");
    assert.equal(result.gradedBy, "self_report");
  });

  test("reflection passes on any non-empty text and carries no correctness verdict beyond 'correct'", () => {
    const activity: Activity = {
      id: "a9",
      kind: "reflection",
      skillId: "skill.x",
      stage: 1,
      prompt: L("p"),
      grading: "self_report",
    };
    assert.equal(gradeActivity(activity, { text: "  " }).passed, false);
    assert.equal(gradeActivity(activity, { text: "a real reflection" }).passed, true);
  });
});

describe("requiresAiGrading / isSelfReported", () => {
  test("only short_written and email_rewrite require AI rubric grading", () => {
    const base = { id: "x", skillId: "s", stage: 1 as const, prompt: L("p") };
    assert.equal(requiresAiGrading({ ...base, kind: "short_written", grading: "ai_rubric", rubricId: "r", modelAnswer: { ar: [], en: [] } } as Activity), true);
    assert.equal(requiresAiGrading({ ...base, kind: "multiple_choice", options: [] } as Activity), false);
  });

  test("reflection and pronunciation are self-reported", () => {
    const base = { id: "x", skillId: "s", stage: 1 as const, prompt: L("p") };
    assert.equal(isSelfReported({ ...base, kind: "reflection", grading: "self_report" } as Activity), true);
    assert.equal(
      isSelfReported({
        ...base,
        kind: "pronunciation",
        target: "t",
        meaning: L("m"),
        exampleSentence: L("s"),
        grading: "self_report",
      } as Activity),
      true,
    );
    assert.equal(isSelfReported({ ...base, kind: "multiple_choice", options: [] } as Activity), false);
  });
});

describe("summariseUnit", () => {
  test("excludes reflections from the pass/fail denominator", () => {
    const summary = summariseUnit([
      { score: 1, maxScore: 1, kind: "multiple_choice" },
      { score: 0, maxScore: 1, kind: "reflection" }, // must not drag the score down
    ]);
    assert.equal(summary.maxScore, 1, "reflection's maxScore must not count toward the total");
    assert.equal(summary.passed, true);
  });

  test("fails a unit below the 70% pass ratio", () => {
    const summary = summariseUnit([
      { score: 1, maxScore: 2, kind: "multiple_choice" },
      { score: 0, maxScore: 2, kind: "matching" },
    ]);
    assert.equal(summary.passed, false);
  });
});
