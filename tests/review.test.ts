import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { firstSchedule, nextSchedule, decayReview, selectDueReviews, type DueItem } from "@/lib/learning/review";
import { DAY_MS } from "@/lib/utils";

describe("firstSchedule", () => {
  test("a pass schedules a normal spaced review two days out", () => {
    const s = firstSchedule(0, true);
    assert.equal(s.reason, "spaced");
    assert.equal(s.dueAt, 2 * DAY_MS);
    assert.equal(s.lapses, 0);
  });

  test("a fail schedules an error review one day out and starts a lapse", () => {
    const s = firstSchedule(0, false);
    assert.equal(s.reason, "error");
    assert.equal(s.dueAt, 1 * DAY_MS);
    assert.equal(s.lapses, 1);
  });
});

describe("nextSchedule", () => {
  test("a passing review lengthens the interval", () => {
    const s0 = firstSchedule(0, true); // 2 days, ease 2.3
    const s1 = nextSchedule(s0, 0.9, 2 * DAY_MS);
    assert.ok(s1.intervalDays > s0.intervalDays, "interval should grow on a strong pass");
  });

  test("a failing review shortens the interval and increments lapses", () => {
    const s0 = firstSchedule(0, true);
    const s1 = nextSchedule(s0, 0.3, 2 * DAY_MS);
    assert.equal(s1.reason, "error");
    assert.equal(s1.lapses, s0.lapses + 1);
    assert.ok(s1.intervalDays <= 2);
  });

  test("three consecutive lapses drop the interval to the minimum (1 day)", () => {
    let s = firstSchedule(0, false); // lapses = 1
    s = nextSchedule(s, 0.2, DAY_MS); // lapses = 2
    s = nextSchedule(s, 0.2, 2 * DAY_MS); // lapses = 3
    assert.equal(s.lapses, 3);
    assert.equal(s.intervalDays, 1);
  });

  test("a long, healthy interval is reclassified for a new-context review, not a same-item repeat", () => {
    let s = firstSchedule(0, true);
    // Repeatedly pass with strong quality to grow the interval past 14 days.
    let now = s.dueAt;
    for (let i = 0; i < 6 && s.intervalDays < 14; i++) {
      s = nextSchedule(s, 0.95, now);
      now = s.dueAt;
    }
    assert.ok(s.intervalDays >= 14, `expected interval to reach 14+ days, got ${s.intervalDays}`);
    assert.equal(s.reason, "new_context");
  });

  test("interval is bounded at 180 days", () => {
    let s = firstSchedule(0, true);
    let now = s.dueAt;
    for (let i = 0; i < 40; i++) {
      s = nextSchedule(s, 1, now);
      now = s.dueAt;
    }
    assert.ok(s.intervalDays <= 180);
  });
});

describe("decayReview", () => {
  test("is due immediately, with reason 'decay'", () => {
    const s = decayReview(5000);
    assert.equal(s.reason, "decay");
    assert.equal(s.dueAt, 5000);
  });
});

describe("selectDueReviews", () => {
  const now = 10_000;

  function item(skillId: string, dueAt: number, reason: DueItem["reason"] = "spaced", lapses = 0): DueItem {
    return { skillId, dueAt, reason, lapses };
  }

  test("items not yet due are excluded", () => {
    const items = [item("a", now - 1), item("b", now + 1)];
    const due = selectDueReviews(items, now);
    assert.deepEqual(
      due.map((d) => d.skillId),
      ["a"],
    );
  });

  test("errors are prioritised ahead of spaced reviews regardless of due time", () => {
    const items = [item("a", now - 100, "spaced"), item("b", now - 1, "error")];
    const due = selectDueReviews(items, now);
    assert.equal(due[0]?.skillId, "b", "the error item should surface first");
  });

  test("interleaving avoids two consecutive items from the same skill when a perfect alternation exists", () => {
    // Two skills, two items each — a fully alternating order (x,y,x,y or
    // y,x,y,x) is achievable, so the scheduler has no excuse to stack them.
    const items = [
      item("x", now - 500, "error"),
      item("x", now - 400, "error"),
      item("y", now - 300, "error"),
      item("y", now - 200, "error"),
    ];
    const due = selectDueReviews(items, now, 4);
    let consecutiveSameSkill = false;
    for (let i = 1; i < due.length; i++) {
      if (due[i]?.skillId === due[i - 1]?.skillId) consecutiveSameSkill = true;
    }
    assert.equal(consecutiveSameSkill, false, "an interleaving pass should not stack the same skill back to back");
  });

  test("when one skill dominates the queue, interleaving still front-loads the alternation it can achieve", () => {
    // 3 items of x and 1 of y: the best achievable order is x,y,x,x — the
    // final pair is an unavoidable repeat, not a scheduler bug.
    const items = [
      item("x", now - 500, "error"),
      item("x", now - 400, "error"),
      item("y", now - 300, "error"),
      item("x", now - 200, "error"),
    ];
    const due = selectDueReviews(items, now, 4);
    assert.equal(due[0]?.skillId, "x");
    assert.equal(due[1]?.skillId, "y", "the only other skill should be pulled forward to break up the run of x");
  });

  test("respects the limit", () => {
    const items = Array.from({ length: 10 }, (_, i) => item(`s${i}`, now - i));
    const due = selectDueReviews(items, now, 3);
    assert.equal(due.length, 3);
  });
});
