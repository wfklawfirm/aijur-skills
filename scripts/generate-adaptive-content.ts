/**
 * Background Generation Job (spec §12) -- pre-populates the adaptive content
 * reservoir so most learners get an unseen hook without ever waiting on
 * generation at request time (see src/lib/adaptive/hooks.ts's reservoir
 * lookup, which always tries this first).
 *
 * Idempotent: skips any (skill, locale, dimension combination) whose
 * structural key already exists in `adaptive_content` -- safe to re-run.
 *
 * Scope note: pre-generated reservoir items use a single fixed, neutral
 * career stage ("trainee") rather than varying it, because Phase 1's
 * template composer (src/lib/adaptive/hook-composer.ts) doesn't yet change
 * wording by career stage -- only the structural/reservoir-targeting layer
 * does. Varying an unused dimension here would create decoy variety rather
 * than real personalization. Per-user runtime generation (getPersonalizedHook)
 * still records the requesting learner's real career stage on any variant
 * it generates fresh, so cohort-specific wording is a Phase 2 template
 * change away, not a data-model change. See
 * docs/ADAPTIVE_ENGINE_ARCHITECTURE.md for the full scoping rationale.
 *
 * Run against Client Communication Foundations' skills, per the build
 * spec's explicit instruction to prove the system on that path.
 */
export {}; // makes this file a module, so top-level await is allowed under tsc

try {
  process.loadEnvFile(".env.local");
} catch {
  try {
    process.loadEnvFile(".env");
  } catch {
    // Defaults in db/index.ts cover local development.
  }
}

const { db } = await import("../src/lib/db/index.js");
const s = await import("../src/lib/db/schema.js");
const { eq } = await import("drizzle-orm");
const { uid } = await import("../src/lib/utils.js");
const dims = await import("../content/adaptive/dimensions.js");
const { composeHookOffline } = await import("../src/lib/adaptive/hook-composer.js");
const { evaluateQuality } = await import("../src/lib/adaptive/quality-gates.js");
const { structuralKey, textFingerprint } = await import("../src/lib/adaptive/fingerprint.js");

const TARGET_DOMAIN_ID = "dom.client-relations"; // Client Communication Foundations' primary domain
const COMBOS_PER_SKILL_LOCALE = 6;
const NEUTRAL_CAREER_STAGE = "trainee";

const skillRows = await db.select().from(s.skills).where(eq(s.skills.status, "published"));
const targetSkills = skillRows
  .map((r) => r.data as { id: string; domainId: string; name: { ar: string; en: string } })
  .filter((skill) => skill.domainId === TARGET_DOMAIN_ID);

console.log(`\nAIJUR adaptive content -- background generation\n`);
console.log(`Target skills (${TARGET_DOMAIN_ID}): ${targetSkills.length}`);

const knownSkillIds = new Set(targetSkills.map((sk) => sk.id));

let generated = 0;
let skipped = 0;
let rejected = 0;
let reviewRequired = 0;

for (let si = 0; si < targetSkills.length; si++) {
  const skill = targetSkills[si]!;
  for (const locale of ["ar", "en"] as const) {
    const existing = await db
      .select({ structuralKey: s.adaptiveContent.structuralKey, textFingerprint: s.adaptiveContent.textFingerprint })
      .from(s.adaptiveContent)
      .where(eq(s.adaptiveContent.skillId, skill.id));
    const existingKeys = new Set(existing.map((e) => e.structuralKey));
    const runFingerprints = existing.map((e) => ({ structuralKey: e.structuralKey, textFingerprint: e.textFingerprint }));

    for (let c = 0; c < COMBOS_PER_SKILL_LOCALE; c++) {
      const hookTypeId = dims.HOOK_TYPES_IMPLEMENTED[(si + c) % dims.HOOK_TYPES_IMPLEMENTED.length]!;
      const counterpartyId = dims.COUNTERPARTIES[(si * 2 + c) % dims.COUNTERPARTIES.length]!.id;
      const channelId = dims.CHANNELS[(si + c * 2) % dims.CHANNELS.length]!.id;
      const toneId = dims.TONES[(si + c) % dims.TONES.length]!.id;
      const goalId = dims.GOALS[(si * 3 + c) % dims.GOALS.length]!.id;

      const dimensions: Record<string, string> = {
        skillId: skill.id,
        language: locale,
        hookType: hookTypeId,
        careerStage: NEUTRAL_CAREER_STAGE,
        counterparty: counterpartyId,
        channel: channelId,
        tone: toneId,
        goal: goalId,
      };
      const key = structuralKey(dimensions);
      if (existingKeys.has(key)) {
        skipped++;
        continue;
      }

      const composed = composeHookOffline({
        skillName: skill.name[locale],
        hookTypeId,
        careerStageId: NEUTRAL_CAREER_STAGE,
        counterpartyId,
        channelId,
        toneId,
        goalId,
        locale,
      });
      const payload = { title: composed.title, body: composed.body, attribution: composed.attribution ?? undefined };
      const fingerprint = { structuralKey: key, textFingerprint: textFingerprint(payload.body) };
      const quality = evaluateQuality(
        { skillId: skill.id, language: locale, payload, fingerprint },
        knownSkillIds,
        runFingerprints,
      );

      const status = quality.status === "approved" ? "published" : quality.status === "rejected" ? "rejected" : "human_review_required";
      await db.insert(s.adaptiveContent).values({
        id: uid("adc"),
        contentType: "hook",
        skillId: skill.id,
        language: locale,
        difficulty: 1,
        dimensions,
        structuralKey: key,
        payload: { title: payload.title, body: payload.body, attribution: payload.attribution ?? undefined },
        textFingerprint: fingerprint.textFingerprint,
        noveltyScore: quality.noveltyScore,
        qualityScore: quality.qualityScore,
        qualityGateReport: quality.report as unknown as Record<string, boolean>,
        generatedBy: "template",
        promptVersion: "hook-2026.08.1",
        status,
        expiresAt: Date.now() + 90 * 24 * 60 * 60 * 1000,
      });

      existingKeys.add(key);
      runFingerprints.push(fingerprint);
      if (status === "published") generated++;
      else if (status === "rejected") rejected++;
      else reviewRequired++;
    }
  }
}

console.log(`  published              ${String(generated).padStart(5)}`);
console.log(`  human_review_required  ${String(reviewRequired).padStart(5)}`);
console.log(`  rejected               ${String(rejected).padStart(5)}`);
console.log(`  skipped (already existed) ${String(skipped).padStart(3)}`);
console.log(`\nDone.\n`);
process.exit(0);
