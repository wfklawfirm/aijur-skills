import { test, expect } from "@playwright/test";
import { signInAsAdmin, runSimulationToCompletion } from "./helpers";

/**
 * End-to-end coverage of the human review queue's payload rendering — added
 * after Milestone 4 (see the project changelog) fixed a real usability gap:
 * the queue used to show only a rubric id, score, and confidence percentage
 * per queued evaluation, not enough for a reviewer to make an informed
 * accept/reject decision, and no indication of *why* an evaluation was
 * queued in the first place.
 *
 * Rather than fabricating a DB row, this drives a real simulation to
 * completion (same flow as `simulation.spec.ts`) as the signed-in admin
 * account, then opens the review queue and confirms the resulting real
 * evaluation renders with a queue reason and the full AI payload. This is
 * deterministic without any mocking: the offline evaluator used everywhere
 * in this environment (no API key configured) always reports `confidence:
 * 0.35` (`src/lib/ai/agents/evaluation.ts`), which is under the 0.5
 * threshold `verifyEvaluation()` uses to queue for human review with reason
 * `"low_confidence"` — so a real, queued, low-confidence evaluation is a
 * guaranteed side effect of finishing any simulation in this build, not a
 * flaky or environment-dependent outcome.
 */
test.describe("Admin review queue", () => {
  test("a queued evaluation shows the AI's full reasoning and why it was queued", async ({ page }) => {
    await signInAsAdmin(page, "en");

    // Produce a real queued evaluation: same flow, and the same shared
    // helper, as simulation.spec.ts.
    await runSimulationToCompletion(
      page,
      "scn.first-client-meeting",
      "The first meeting",
      "Thank you for coming in. Before we talk about the notice, can you walk me through what happened from the beginning?",
    );

    // Now review it as the admin account. Re-running this suite against the
    // same persistent dev DB accumulates more than one queued evaluation on
    // this account over time (this test's own prior runs, plus
    // simulation.spec.ts's, land on the demo learner instead) — assert
    // against the first/most-recent card (`orderBy(desc(createdAt))`) rather
    // than assuming exactly one exists.
    await page.goto("/en/admin/review-queue");
    await expect(page.getByRole("heading", { name: "Assessments awaiting human review" })).toBeVisible();

    // The queue reason — this is the exact gap Milestone 4 fixed: previously
    // nothing here told a reviewer *why* an item was queued.
    await expect(page.getByText("Why this is queued").first()).toBeVisible();
    await expect(page.getByText("The model's own confidence in this score was low.").first()).toBeVisible();

    // The full AI payload, not just a rubric id/score/confidence badge row.
    // (Section labels render visually upper-cased via CSS `text-transform`,
    // but the underlying DOM text — which Playwright's text matching sees —
    // is the dictionary string as authored, e.g. "Criterion".)
    await expect(page.getByText("Criterion", { exact: false }).first()).toBeVisible();
    await expect(page.getByText("One priority to improve", { exact: false }).first()).toBeVisible();

    // A reviewer can actually act on it.
    await expect(page.getByRole("button", { name: "Accept" }).first()).toBeVisible();
    await expect(page.getByRole("button", { name: "Reject" }).first()).toBeVisible();
  });
});
