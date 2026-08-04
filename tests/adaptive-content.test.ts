import { test, describe } from "node:test";
import assert from "node:assert/strict";
import {
  structuralKey,
  normalizeText,
  textFingerprint,
  estimatedSimilarity,
  noveltyScore,
  NOVELTY_THRESHOLD,
} from "@/lib/adaptive/fingerprint";
import { evaluateQuality, type HookCandidate } from "@/lib/adaptive/quality-gates";
import { composeHookOffline } from "@/lib/adaptive/hook-composer";
import { HOOK_TYPES_IMPLEMENTED } from "@content/adaptive/dimensions";

/**
 * The adaptive content engine's testable core: novelty/repetition detection
 * and the quality gates, both pure and deterministic (no DB, no network) --
 * the same properties that make them safe to run on every request. This is
 * the mechanical subset of the build spec's 18-category test list (Exact
 * Duplicate, Near-Duplicate, Semantic Similarity, Structural Repetition,
 * Quality Gate, Schema Validation); the DB-backed categories (User/Cohort
 * Exposure, Retry Variation, Tenant Isolation) are integration-level and
 * covered instead by tests/e2e/adaptive-content.spec.ts's real end-to-end run.
 */

describe("structuralKey — structural repetition detection", () => {
  test("the same dimension combination produces the same key regardless of property order", () => {
    const a = structuralKey({ skillId: "s1", hookType: "quick_dilemma", tone: "calm" });
    const b = structuralKey({ tone: "calm", skillId: "s1", hookType: "quick_dilemma" });
    assert.equal(a, b);
  });

  test("changing a single dimension changes the key", () => {
    const a = structuralKey({ skillId: "s1", hookType: "quick_dilemma", tone: "calm" });
    const b = structuralKey({ skillId: "s1", hookType: "quick_dilemma", tone: "impatient" });
    assert.notEqual(a, b);
  });

  test("the exact same combination with a different language produces a different key -- language is part of the fingerprint (spec §8)", () => {
    const ar = structuralKey({ skillId: "s1", hookType: "quick_dilemma", language: "ar" });
    const en = structuralKey({ skillId: "s1", hookType: "quick_dilemma", language: "en" });
    assert.notEqual(ar, en, "an Arabic and an English hook for the same combo must not collide");
  });
});

describe("normalizeText / textFingerprint — near-duplicate detection", () => {
  test("identical text produces an identical fingerprint", () => {
    const text = "A difficult client, impatient, reaches you by email about active listening.";
    assert.deepEqual(textFingerprint(text), textFingerprint(text));
  });

  test("normalization strips case, punctuation, and collapses whitespace", () => {
    assert.equal(normalizeText("Hello,   World!!"), normalizeText("hello world"));
  });

  test("two texts sharing most of their wording are estimated as highly similar", () => {
    const a = "A difficult client, impatient, reaches you by email about active listening. What do you say first?";
    const b = "A difficult client, impatient, reaches you by phone about active listening. What do you say first?";
    const similarity = estimatedSimilarity(textFingerprint(a), textFingerprint(b));
    assert.ok(similarity > 0.5, `expected high similarity for a near-paraphrase, got ${similarity}`);
  });

  test("two unrelated texts are estimated as dissimilar", () => {
    const a = "A difficult client, impatient, reaches you by email about active listening.";
    const b = "Three team members are waiting on your delegation decision this afternoon.";
    const similarity = estimatedSimilarity(textFingerprint(a), textFingerprint(b));
    assert.ok(similarity < 0.3, `expected low similarity for unrelated text, got ${similarity}`);
  });
});

describe("noveltyScore", () => {
  test("with no recent exposures, novelty is maximal", () => {
    const candidate = { structuralKey: "abc", textFingerprint: textFingerprint("some hook text here") };
    assert.equal(noveltyScore(candidate, []), 1);
  });

  test("an exact structural repeat is floored at 0.6 similarity (novelty <= 0.4) even with different wording", () => {
    const candidate = { structuralKey: "same-key", textFingerprint: textFingerprint("Completely different wording here") };
    const recent = [{ structuralKey: "same-key", textFingerprint: textFingerprint("Totally unrelated other text") }];
    const novelty = noveltyScore(candidate, recent);
    assert.ok(novelty <= 0.4, `expected novelty <= 0.4 for a structural repeat, got ${novelty}`);
  });

  test("a near-identical text (different structural key) scores low novelty", () => {
    const text = "A difficult client, impatient, reaches you by email about active listening.";
    const candidate = { structuralKey: "key-a", textFingerprint: textFingerprint(text) };
    const recent = [{ structuralKey: "key-b", textFingerprint: textFingerprint(text) }];
    assert.ok(noveltyScore(candidate, recent) < 0.2);
  });

  test("genuinely different content scores high novelty even with exposure history", () => {
    const candidate = { structuralKey: "key-fresh", textFingerprint: textFingerprint("A brand new situation about delegation and trust.") };
    const recent = [{ structuralKey: "key-a", textFingerprint: textFingerprint("A difficult client is angry about the fee.") }];
    assert.ok(noveltyScore(candidate, recent) > 0.7);
  });
});

function makeCandidate(overrides: Partial<HookCandidate> = {}): HookCandidate {
  return {
    skillId: "skill.active-listening",
    language: "en",
    payload: { title: "Quick dilemma", body: "A new client, calm, reaches you by email. What's the one line you say first?" },
    fingerprint: { structuralKey: "k1", textFingerprint: textFingerprint("A new client, calm, reaches you by email.") },
    ...overrides,
  };
}

describe("evaluateQuality — AI Quality Gates", () => {
  const knownSkills = new Set(["skill.active-listening"]);

  test("a well-formed candidate for a known skill, with no recent exposures, is approved", () => {
    const result = evaluateQuality(makeCandidate(), knownSkills, []);
    assert.equal(result.status, "approved");
    assert.equal(result.qualityScore, 1);
    assert.deepEqual(result.rejectionReasons, []);
  });

  test("an unknown skill id fails Skill Alignment and is hard-rejected", () => {
    const result = evaluateQuality(makeCandidate({ skillId: "skill.does-not-exist" }), knownSkills, []);
    assert.equal(result.status, "rejected");
    assert.ok(result.rejectionReasons.includes("skillAlignment"));
  });

  test("a guaranteed-outcome phrase (English) fails Safety and is hard-rejected, never just flagged", () => {
    const candidate = makeCandidate({
      payload: { title: "Quick dilemma", body: "Tell the client we guarantee you will win this case easily." },
    });
    const result = evaluateQuality(candidate, knownSkills, []);
    assert.equal(result.status, "rejected");
    assert.ok(result.rejectionReasons.includes("safety"));
  });

  test("a guaranteed-outcome phrase (Arabic) also fails Safety", () => {
    const candidate = makeCandidate({
      language: "ar",
      payload: { title: "معضلة", body: "أخبر الموكل بأننا نضمن الفوز في هذه القضية." },
    });
    const result = evaluateQuality(candidate, knownSkills, []);
    assert.equal(result.status, "rejected");
    assert.ok(result.rejectionReasons.includes("safety"));
  });

  test("body text over the mobile length cap fails Mobile Fit but only routes to human review, not a hard rejection", () => {
    const candidate = makeCandidate({ payload: { title: "Quick dilemma", body: "x".repeat(400) } });
    const result = evaluateQuality(candidate, knownSkills, []);
    assert.equal(result.report.mobileFit, false);
    assert.equal(result.status, "human_review_required");
  });

  test("Arabic-language content that's actually in English fails Language Quality", () => {
    const candidate = makeCandidate({ language: "ar", payload: { title: "Quick dilemma", body: "This is plain English text with no Arabic script at all." } });
    const result = evaluateQuality(candidate, knownSkills, []);
    assert.equal(result.report.languageQuality, false);
    assert.equal(result.status, "human_review_required");
  });

  test("a leftover template placeholder fails Language Quality (a real formatting bug, not a style nitpick)", () => {
    const candidate = makeCandidate({ payload: { title: "Quick dilemma", body: "Reaches you about {{skillName}} today." } });
    const result = evaluateQuality(candidate, knownSkills, []);
    assert.equal(result.report.languageQuality, false);
  });

  test("content that repeats a recent structural key fails Non-Repetition and routes to human review, using the same NOVELTY_THRESHOLD the module exports", () => {
    const fp = { structuralKey: "repeat-me", textFingerprint: textFingerprint("Some hook text.") };
    const candidate = makeCandidate({ fingerprint: fp });
    const result = evaluateQuality(candidate, knownSkills, [fp]);
    assert.ok(result.noveltyScore < NOVELTY_THRESHOLD);
    assert.equal(result.report.nonRepetition, false);
    assert.equal(result.status, "human_review_required");
  });
});

describe("composeHookOffline — the deterministic Controlled Generative Template layer", () => {
  test("every implemented hook type produces non-empty, gate-passing bilingual output for the same skill+dimensions", () => {
    const knownSkills = new Set(["skill.active-listening"]);
    for (const hookTypeId of HOOK_TYPES_IMPLEMENTED) {
      for (const locale of ["ar", "en"] as const) {
        const payload = composeHookOffline({
          skillName: locale === "ar" ? "الإصغاء الفاعل" : "Active listening",
          hookTypeId,
          careerStageId: "trainee",
          counterpartyId: "difficult_client",
          channelId: "phone_call",
          toneId: "impatient",
          goalId: "clarify",
          locale,
        });
        assert.ok(payload.title.length > 0, `${hookTypeId}/${locale} produced an empty title`);
        assert.ok(payload.body.length > 0, `${hookTypeId}/${locale} produced an empty body`);

        const quality = evaluateQuality(
          {
            skillId: "skill.active-listening",
            language: locale,
            payload: { title: payload.title, body: payload.body, attribution: payload.attribution ?? undefined },
            fingerprint: { structuralKey: `${hookTypeId}-${locale}`, textFingerprint: textFingerprint(payload.body) },
          },
          knownSkills,
          [],
        );
        assert.equal(quality.status, "approved", `${hookTypeId}/${locale} did not pass the quality gates: ${JSON.stringify(quality.report)}`);
      }
    }
  });

  test("two different hook types for the same skill+dimensions produce structurally and textually different output (not just reworded)", () => {
    const a = composeHookOffline({
      skillName: "Active listening",
      hookTypeId: "quick_dilemma",
      careerStageId: "trainee",
      counterpartyId: "difficult_client",
      channelId: "phone_call",
      toneId: "impatient",
      goalId: "clarify",
      locale: "en",
    });
    const b = composeHookOffline({
      skillName: "Active listening",
      hookTypeId: "spot_the_risk",
      careerStageId: "trainee",
      counterpartyId: "difficult_client",
      channelId: "phone_call",
      toneId: "impatient",
      goalId: "clarify",
      locale: "en",
    });
    const similarity = estimatedSimilarity(textFingerprint(a.body), textFingerprint(b.body));
    assert.ok(similarity < 0.5, `expected different hook types to read as different text, got similarity ${similarity}`);
  });
});
