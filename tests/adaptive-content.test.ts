import { test, describe, before, after } from "node:test";
import assert from "node:assert/strict";
import { eq, inArray } from "drizzle-orm";
import {
  structuralKey,
  normalizeText,
  textFingerprint,
  estimatedSimilarity,
  noveltyScore,
  NOVELTY_THRESHOLD,
} from "@/lib/adaptive/fingerprint";
import { evaluateQuality, type AdaptiveContentCandidate } from "@/lib/adaptive/quality-gates";
import { composeHookOffline } from "@/lib/adaptive/hook-composer";
import { composeChallengeOffline } from "@/lib/adaptive/challenge-composer";
import { CHALLENGE_TYPES_IMPLEMENTED, HOOK_TYPES_IMPLEMENTED } from "@content/adaptive/dimensions";
import { getPersonalizedDailyChallenge, getPersonalizedHook } from "@/lib/adaptive/hooks";
import { db } from "@/lib/db";
import { adaptiveContent, userContentExposure, users } from "@/lib/db/schema";
import { uid } from "@/lib/utils";

/**
 * The adaptive content engine's testable core: novelty/repetition detection
 * and the quality gates, both pure and deterministic (no DB, no network) --
 * the same properties that make them safe to run on every request. This is
 * the mechanical subset of the build spec's 18-category test list (Exact
 * Duplicate, Near-Duplicate, Semantic Similarity, Structural Repetition,
 * Quality Gate, Schema Validation).
 *
 * One DB-backed integration case was added below (reservoir language
 * selection) as a direct regression test for a real bug reported against
 * the Home v3 redesign: the Daily Challenge card could render Arabic
 * content on an /en/home load. The rest of the DB-backed categories (full
 * User/Cohort Exposure history, Retry Variation, Tenant Isolation) remain
 * integration-level and not covered by a dedicated e2e spec -- see
 * docs/ADAPTIVE_ENGINE_ARCHITECTURE.md §10 and §14 for this honestly-stated
 * gap; an earlier version of this comment claimed a
 * tests/e2e/adaptive-content.spec.ts that was never actually written --
 * corrected here rather than left standing.
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

function makeCandidate(overrides: Partial<AdaptiveContentCandidate> = {}): AdaptiveContentCandidate {
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

describe("composeChallengeOffline — Phase 2's second content type through the same Controlled Generative Template layer", () => {
  test("every implemented challenge type produces non-empty, gate-passing bilingual output for the same skill+dimensions", () => {
    const knownSkills = new Set(["skill.active-listening"]);
    for (const challengeTypeId of CHALLENGE_TYPES_IMPLEMENTED) {
      for (const locale of ["ar", "en"] as const) {
        const payload = composeChallengeOffline({
          skillName: locale === "ar" ? "الإصغاء الفاعل" : "Active listening",
          challengeTypeId,
          careerStageId: "trainee",
          counterpartyId: "difficult_client",
          channelId: "phone_call",
          toneId: "impatient",
          goalId: "clarify",
          locale,
        });
        assert.ok(payload.title.length > 0, `${challengeTypeId}/${locale} produced an empty title`);
        assert.ok(payload.body.length > 0, `${challengeTypeId}/${locale} produced an empty body`);

        const quality = evaluateQuality(
          {
            skillId: "skill.active-listening",
            language: locale,
            payload: { title: payload.title, body: payload.body, attribution: payload.attribution ?? undefined },
            fingerprint: { structuralKey: `${challengeTypeId}-${locale}`, textFingerprint: textFingerprint(payload.body) },
          },
          knownSkills,
          [],
        );
        assert.equal(quality.status, "approved", `${challengeTypeId}/${locale} did not pass the quality gates: ${JSON.stringify(quality.report)}`);
      }
    }
  });

  test("two different challenge types for the same skill+dimensions produce structurally and textually different output (not just reworded)", () => {
    const a = composeChallengeOffline({
      skillName: "Active listening",
      challengeTypeId: "apply_today",
      careerStageId: "trainee",
      counterpartyId: "difficult_client",
      channelId: "phone_call",
      toneId: "impatient",
      goalId: "clarify",
      locale: "en",
    });
    const b = composeChallengeOffline({
      skillName: "Active listening",
      challengeTypeId: "teach_it_back",
      careerStageId: "trainee",
      counterpartyId: "difficult_client",
      channelId: "phone_call",
      toneId: "impatient",
      goalId: "clarify",
      locale: "en",
    });
    const similarity = estimatedSimilarity(textFingerprint(a.body), textFingerprint(b.body));
    assert.ok(similarity < 0.5, `expected different challenge types to read as different text, got similarity ${similarity}`);
  });
});

describe("Reservoir language selection -- regression for the Home v3 locale-mismatch bug", () => {
  // Real, DB-backed integration test against the dev/seed database, same
  // style as tests/platform-accounts.test.ts and tests/org-tenant-isolation
  // .test.ts. Reproduces the exact reported symptom directly: seed one
  // published reservoir item in Arabic and one in English for the same
  // skill + content type, request the content in English, and assert the
  // English item comes back -- this would have failed before the fix (the
  // reservoir query had no `language` filter, so it could return either).
  //
  // Uses a synthetic skill id, not a real one (e.g. skill.active-listening),
  // deliberately: `npm run generate:adaptive` (item #49) has already
  // populated the real dev DB with a genuine reservoir for every real skill,
  // including English rows that can legitimately tie this test's own
  // qualityScore/noveltyScore=1 seed data. The reservoir lookup doesn't
  // validate skill existence (only the generation path does, via
  // knownSkillIds), so a fake id is safe here and keeps the test
  // deterministic regardless of what real content happens to exist.
  const skillId = "skill.__test-reservoir-lang-regression__";
  const userIdEn = uid("testuser");
  const userIdAr = uid("testuser");
  const insertedContentIds: string[] = [];

  before(async () => {
    // userContentExposure.userId is a real FK into users -- fabricated ids
    // alone (without a backing row) fail the insert, same as any other
    // DB-backed test in this suite (e.g. tests/password-reset.test.ts).
    await db.insert(users).values([
      { id: userIdEn, email: `${userIdEn}@test.invalid`, passwordHash: "x", name: "Reservoir Test EN" },
      { id: userIdAr, email: `${userIdAr}@test.invalid`, passwordHash: "x", name: "Reservoir Test AR" },
    ]);
  });

  after(async () => {
    if (insertedContentIds.length > 0) {
      await db.delete(userContentExposure).where(inArray(userContentExposure.contentId, insertedContentIds));
      await db.delete(adaptiveContent).where(inArray(adaptiveContent.id, insertedContentIds));
    }
    await db.delete(users).where(inArray(users.id, [userIdEn, userIdAr]));
  });

  async function seedReservoirItem(
    contentType: "hook" | "daily_challenge",
    language: "en" | "ar",
    title: string,
    body: string,
    noveltyScore: number,
  ) {
    const id = uid("adc");
    const dims = {
      skillId,
      language,
      [contentType === "hook" ? "hookType" : "challengeType"]: "quick_dilemma",
      careerStage: "junior",
      counterparty: "new_client",
      channel: "email",
      tone: "cooperative",
      goal: "clarify",
    };
    await db.insert(adaptiveContent).values({
      id,
      contentType,
      skillId,
      language,
      difficulty: 1,
      dimensions: dims,
      structuralKey: structuralKey(dims),
      payload: { title, body },
      textFingerprint: textFingerprint(body),
      noveltyScore,
      qualityScore: 1,
      qualityGateReport: {},
      generatedBy: "template",
      promptVersion: "test",
      status: "published",
      expiresAt: Date.now() + 90 * 24 * 60 * 60 * 1000,
    });
    insertedContentIds.push(id);
    return id;
  }

  test("an English-locale request for a Daily Challenge never returns an Arabic reservoir item, even when one exists for the same skill", async () => {
    // The Arabic distractor is deliberately given a HIGHER novelty score
    // than the correct English item (1.0 vs 0.5) and is inserted first --
    // both `ORDER BY quality DESC, novelty DESC` and any insertion-order
    // tiebreak would pick the Arabic row if the query weren't filtering by
    // language at all. This makes the test fail deterministically without
    // the fix, not by accident of SQLite's tie-break behavior.
    await seedReservoirItem("daily_challenge", "ar", "عنوان التحدي بالعربية", "نص التحدي بالعربية، طويل بما يكفي ليكون واقعيًا.", 1);
    const enId = await seedReservoirItem("daily_challenge", "en", "English challenge title", "English challenge body, long enough to be plausible.", 0.5);

    const result = await getPersonalizedDailyChallenge({
      userId: userIdEn,
      organizationId: null,
      skillId,
      skillName: "Active listening",
      careerStageId: "junior",
      locale: "en",
      allowRemote: false,
    });

    assert.equal(result.source, "reservoir", "expected the seeded reservoir item to be picked, not a fresh generation");
    assert.equal(result.id, enId, "an /en request must never be served the higher-novelty Arabic reservoir item");
    assert.equal(result.title, "English challenge title");
  });

  test("an Arabic-locale request for a Hook never returns an English reservoir item, even when one exists for the same skill", async () => {
    // Same asymmetric-novelty technique as the test above, mirrored: the
    // English distractor has the higher novelty score and is inserted
    // first, so only a real language filter -- not insertion order or luck
    // -- can make this pass.
    await seedReservoirItem("hook", "en", "English hook title", "English hook body, long enough to be plausible for the gates.", 1);
    const arId = await seedReservoirItem("hook", "ar", "عنوان بالعربية", "نص التلميح بالعربية، طويل بما يكفي ليكون واقعيًا لبوابات الجودة.", 0.5);

    const result = await getPersonalizedHook({
      userId: userIdAr,
      organizationId: null,
      skillId,
      skillName: "Active listening",
      careerStageId: "junior",
      locale: "ar",
      allowRemote: false,
    });

    assert.equal(result.source, "reservoir", "expected the seeded reservoir item to be picked, not a fresh generation");
    assert.equal(result.id, arId, "an /ar request must never be served the higher-novelty English reservoir item");
    assert.equal(result.title, "عنوان بالعربية");
  });
});
