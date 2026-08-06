import "server-only";
import { and, desc, eq, inArray, notInArray } from "drizzle-orm";
import { db } from "@/lib/db";
import { adaptiveContent, userContentExposure } from "@/lib/db/schema";
import { getSkillMap } from "@/lib/content/service";
import type { Locale } from "@content/types";
import {
  CHANNELS,
  CHALLENGE_TYPES_IMPLEMENTED,
  COUNTERPARTIES,
  GOALS,
  HOOK_TYPES_IMPLEMENTED,
  TONES,
  type ImplementedChallengeType,
  type ImplementedHookType,
} from "@content/adaptive/dimensions";
import { generateHook } from "@/lib/ai/agents/adaptive-hook";
import { generateChallenge } from "@/lib/ai/agents/adaptive-challenge";
import type { AgentResult } from "@/lib/ai/provider";
import type { AdaptiveHookOutput } from "@/lib/ai/schemas";
import { evaluateQuality, type AdaptiveContentCandidate } from "./quality-gates";
import { structuralKey, textFingerprint, type ExposureFingerprint } from "./fingerprint";
import { uid } from "@/lib/utils";

/**
 * Orchestrator: the "Personalization Orchestrator" + "Content Reservoir
 * Service" + "Novelty Detection Service" from the build spec, consolidated
 * into one module for Phase 1 (see docs/ADAPTIVE_ENGINE_ARCHITECTURE.md for
 * the full service-to-file mapping and why they're not separate
 * microservices yet -- the spec explicitly permits logical-only separation
 * for an MVP).
 *
 * Phase 2 (§14) generalized this from "hooks only" to a shared
 * `getPersonalizedContent()` core parameterized by a `ContentTypeSpec`, with
 * `getPersonalizedHook()` and `getPersonalizedDailyChallenge()` as thin,
 * type-safe wrappers over it -- real evidence the reservoir/novelty/quality
 * pipeline generalizes to a second content type without duplicating the
 * selection logic, not just a second copy-pasted file. The two content
 * types share this module because they share every mechanic (reservoir
 * lookup, generation attempts, safe-default fallback, exposure recording);
 * only the dimension vocabulary, offline composer, and AI system prompt
 * differ, and those already lived in separate files per type before this
 * refactor (dimensions.ts, {hook,challenge}-composer.ts, adaptive-{hook,
 * challenge}.ts).
 *
 * Selection order, cheapest first (never generate when a good unseen item
 * already exists -- the spec's Content Reservoir principle):
 *   1. An approved/published reservoir item for this skill AND this content
 *      type the user hasn't seen, preferring one whose "shape" (hookType or
 *      challengeType) differs from their last exposure.
 *   2. A freshly generated variant (AI if a provider key is configured,
 *      otherwise the deterministic composer), run through the quality gates.
 *      Up to 2 randomized attempts.
 *   3. A final, fixed "safe" dimension combination -- guaranteed to pass the
 *      mechanical gates by construction -- so the learner is never blocked
 *      waiting on generation to succeed. Still real, still persisted, still
 *      exposure-tracked; not a separate hardcoded content bank.
 */

const RECENT_EXPOSURE_WINDOW = 20;
const MAX_GENERATION_ATTEMPTS = 2;

export interface PersonalizedContentRequest {
  userId: string;
  organizationId: string | null;
  skillId: string;
  skillName: string;
  careerStageId: string;
  locale: Locale;
  /** False when the learner hasn't consented to AI processing -- forces the
   * offline composer even if a provider key is configured. */
  allowRemote: boolean;
  context?: Record<string, string>;
}
/** Pre-Phase-2 name, kept as an alias -- the request shape never depended on
 * content type. */
export type PersonalizedHookRequest = PersonalizedContentRequest;

export interface PersonalizedAdaptiveContent {
  id: string;
  /** The "shape" dimension value that produced this item: a hookType id
   * (e.g. "quick_dilemma") for hooks, a challengeType id (e.g.
   * "apply_today") for daily challenges -- see ContentTypeSpec.typeDimensionKey. */
  typeId: string;
  title: string;
  body: string;
  attribution: string | null;
  source: "reservoir" | "generated" | "safe_default";
  noveltyScore: number;
  qualityScore: number;
}
/** Pre-Phase-2 name, kept as an alias for call sites that only ever dealt
 * with hooks (this type is identical; only `hookTypeId` renamed to the
 * content-type-neutral `typeId`, which is why this is a type alias, not a
 * separate shape). */
export type PersonalizedHook = PersonalizedAdaptiveContent;

function pickRandom<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)]!;
}

async function recentExposures(userId: string, limit = RECENT_EXPOSURE_WINDOW) {
  // Deliberately not filtered by contentType: this represents "the last N
  // adaptive-engine items this user has been shown, of any kind" -- a
  // reasonable, arguably more correct definition of "recent" for both the
  // exclude-list (content ids are globally unique via uid(), so excluding a
  // different content type's id here is a harmless no-op) and the
  // structural-key reroll bias (a hook's and a challenge's structural keys
  // can never collide -- see structuralKey()'s note on typeDimensionKey
  // below -- so mixing them in the "seen recently" set only makes the
  // reroll bias slightly more conservative, never wrong).
  return db
    .select({
      contentId: userContentExposure.contentId,
      structuralKey: userContentExposure.structuralKey,
    })
    .from(userContentExposure)
    .where(eq(userContentExposure.userId, userId))
    .orderBy(desc(userContentExposure.exposedAt))
    .limit(limit);
}

async function recordExposure(
  userId: string,
  contentType: "hook" | "daily_challenge",
  content: { id: string; skillId: string; structuralKey: string },
  context?: Record<string, string>,
) {
  await db.insert(userContentExposure).values({
    id: uid("exp"),
    userId,
    contentId: content.id,
    contentType,
    skillId: content.skillId,
    structuralKey: content.structuralKey,
    context: context ?? null,
  });
}

/**
 * Everything a content type needs to plug into the shared selection
 * pipeline below. One instance per content type (HOOK_SPEC, CHALLENGE_SPEC),
 * never constructed dynamically -- this is configuration, not user input.
 */
interface ContentTypeSpec<TType extends string> {
  contentType: "hook" | "daily_challenge";
  /** The key name used inside `adaptiveContent.dimensions` for this content
   * type's "shape" value -- "hookType" or "challengeType". Using a distinct
   * key name per content type (rather than a shared generic "type" key) is
   * what keeps structuralKey() naturally non-colliding between content
   * types with zero extra logic: `structuralKey()` hashes sorted
   * `key=value` pairs, so "hookType=quick_dilemma" and
   * "challengeType=apply_today" can never produce the same hash even if
   * every other dimension value matched. The reservoir query below also
   * explicitly filters by the `contentType` column as defense in depth --
   * two independent reasons the two pools never cross-contaminate. */
  typeDimensionKey: string;
  implementedTypes: readonly TType[];
  promptVersion: string;
  safeDefault: { typeId: TType; counterpartyId: string; channelId: string; toneId: string; goalId: string };
  generate: (params: {
    skillName: string;
    typeId: TType;
    careerStageId: string;
    counterpartyId: string;
    channelId: string;
    toneId: string;
    goalId: string;
    locale: Locale;
    userId: string;
    organizationId: string | null;
    allowRemote: boolean;
  }) => Promise<AgentResult<AdaptiveHookOutput>>;
}

const HOOK_SPEC: ContentTypeSpec<ImplementedHookType> = {
  contentType: "hook",
  typeDimensionKey: "hookType",
  implementedTypes: HOOK_TYPES_IMPLEMENTED,
  promptVersion: "hook-2026.08.1",
  safeDefault: { typeId: "quick_dilemma", counterpartyId: "new_client", channelId: "email", toneId: "cooperative", goalId: "clarify" },
  generate: (p) =>
    generateHook({
      skillName: p.skillName,
      hookTypeId: p.typeId,
      careerStageId: p.careerStageId,
      counterpartyId: p.counterpartyId,
      channelId: p.channelId,
      toneId: p.toneId,
      goalId: p.goalId,
      locale: p.locale,
      userId: p.userId,
      organizationId: p.organizationId,
      allowRemote: p.allowRemote,
    }),
};

const CHALLENGE_SPEC: ContentTypeSpec<ImplementedChallengeType> = {
  contentType: "daily_challenge",
  typeDimensionKey: "challengeType",
  implementedTypes: CHALLENGE_TYPES_IMPLEMENTED,
  promptVersion: "challenge-2026.08.1",
  safeDefault: { typeId: "apply_today", counterpartyId: "new_client", channelId: "email", toneId: "cooperative", goalId: "clarify" },
  generate: (p) =>
    generateChallenge({
      skillName: p.skillName,
      challengeTypeId: p.typeId,
      careerStageId: p.careerStageId,
      counterpartyId: p.counterpartyId,
      channelId: p.channelId,
      toneId: p.toneId,
      goalId: p.goalId,
      locale: p.locale,
      userId: p.userId,
      organizationId: p.organizationId,
      allowRemote: p.allowRemote,
    }),
};

async function getPersonalizedContent<TType extends string>(
  req: PersonalizedContentRequest,
  spec: ContentTypeSpec<TType>,
): Promise<PersonalizedAdaptiveContent> {
  const exposures = await recentExposures(req.userId);
  const excludeIds = exposures.map((e) => e.contentId);
  const recentStructuralKeys = new Set(exposures.map((e) => e.structuralKey));

  // The single most recent exposure's "shape" type (of any content type --
  // see recentExposures()'s note), for the diversity scheduler rule "don't
  // show the same shape twice in a row". If the most recent exposure was a
  // different content type, its dimensions won't have this spec's
  // typeDimensionKey at all, so this naturally resolves to null (no bias),
  // not a wrong value.
  let lastTypeId: string | null = null;
  if (excludeIds.length > 0) {
    const lastRow = await db
      .select({ dimensions: adaptiveContent.dimensions })
      .from(adaptiveContent)
      .where(eq(adaptiveContent.id, excludeIds[0]!))
      .limit(1);
    lastTypeId = lastRow[0]?.dimensions[spec.typeDimensionKey] ?? null;
  }

  // --- 1. Reservoir lookup -------------------------------------------------
  // Real bug found and fixed (Home redesign v3 follow-up): this query used
  // to have no `language` filter at all, so an Arabic reservoir item could
  // outrank an English one on quality/novelty and get served to an
  // English-locale learner (and vice versa) -- e.g. an Arabic Daily
  // Challenge rendering on /en/home. `adaptiveContent.language` is a real,
  // populated column (set on every insert in the generation path below) --
  // it was simply never applied as a lookup constraint.
  const reservoirConditions = [
    eq(adaptiveContent.skillId, req.skillId),
    eq(adaptiveContent.contentType, spec.contentType),
    eq(adaptiveContent.language, req.locale),
    inArray(adaptiveContent.status, ["approved", "published"]),
  ];
  if (excludeIds.length > 0) reservoirConditions.push(notInArray(adaptiveContent.id, excludeIds));
  const candidates = await db
    .select()
    .from(adaptiveContent)
    .where(and(...reservoirConditions))
    .orderBy(desc(adaptiveContent.qualityScore), desc(adaptiveContent.noveltyScore))
    .limit(5);

  const chosen = candidates.find((c) => c.dimensions[spec.typeDimensionKey] !== lastTypeId) ?? candidates[0];
  if (chosen) {
    await recordExposure(req.userId, spec.contentType, chosen, req.context);
    return {
      id: chosen.id,
      typeId: chosen.dimensions[spec.typeDimensionKey] ?? spec.safeDefault.typeId,
      title: chosen.payload.title,
      body: chosen.payload.body,
      attribution: chosen.payload.attribution ?? null,
      source: "reservoir",
      noveltyScore: chosen.noveltyScore,
      qualityScore: chosen.qualityScore,
    };
  }

  // --- 2 & 3. Generate, with a final fixed-safe attempt --------------------
  const knownSkillIds = new Set((await getSkillMap()).keys());

  // The last N adaptiveContent rows this user was exposed to, for the
  // novelty check -- needs a join since exposure rows don't duplicate the
  // (larger) text fingerprint.
  const recentContentRows =
    excludeIds.length > 0
      ? await db.select().from(adaptiveContent).where(inArray(adaptiveContent.id, excludeIds.slice(0, RECENT_EXPOSURE_WINDOW)))
      : [];
  const recentFingerprints: ExposureFingerprint[] = recentContentRows.map((r) => ({
    structuralKey: r.structuralKey,
    textFingerprint: r.textFingerprint,
  }));

  function keyFor(typeId: TType, counterpartyId: string, channelId: string, toneId: string, goalId: string): string {
    return structuralKey({
      skillId: req.skillId,
      language: req.locale,
      [spec.typeDimensionKey]: typeId,
      careerStage: req.careerStageId,
      counterparty: counterpartyId,
      channel: channelId,
      tone: toneId,
      goal: goalId,
    });
  }

  async function attempt(combo: { typeId: TType; counterpartyId: string; channelId: string; toneId: string; goalId: string }) {
    const dims: Record<string, string> = {
      skillId: req.skillId,
      language: req.locale,
      [spec.typeDimensionKey]: combo.typeId,
      careerStage: req.careerStageId,
      counterparty: combo.counterpartyId,
      channel: combo.channelId,
      tone: combo.toneId,
      goal: combo.goalId,
    };
    const key = structuralKey(dims);

    const result = await spec.generate({
      skillName: req.skillName,
      typeId: combo.typeId,
      careerStageId: req.careerStageId,
      counterpartyId: combo.counterpartyId,
      channelId: combo.channelId,
      toneId: combo.toneId,
      goalId: combo.goalId,
      locale: req.locale,
      userId: req.userId,
      organizationId: req.organizationId,
      allowRemote: req.allowRemote,
    });

    const fingerprint: ExposureFingerprint = { structuralKey: key, textFingerprint: textFingerprint(result.data.body) };
    const candidate: AdaptiveContentCandidate = {
      skillId: req.skillId,
      language: req.locale,
      payload: { title: result.data.title, body: result.data.body, attribution: result.data.attribution ?? undefined },
      fingerprint,
    };
    const quality = evaluateQuality(candidate, knownSkillIds, recentFingerprints);

    const id = uid("adc");
    const now = Date.now();
    await db.insert(adaptiveContent).values({
      id,
      contentType: spec.contentType,
      skillId: req.skillId,
      language: req.locale,
      difficulty: 1,
      dimensions: dims,
      structuralKey: key,
      payload: candidate.payload as { title: string; body: string; attribution?: string },
      textFingerprint: fingerprint.textFingerprint,
      noveltyScore: quality.noveltyScore,
      qualityScore: quality.qualityScore,
      qualityGateReport: quality.report as unknown as Record<string, boolean>,
      generatedBy: result.provider === "offline" ? "template" : `ai:${result.provider}`,
      promptVersion: spec.promptVersion,
      status: quality.status === "approved" ? "approved" : quality.status === "rejected" ? "rejected" : "human_review_required",
      // A 90-day horizon -- long enough to amortise generation cost across
      // many learners, short enough that a stale variant doesn't linger
      // forever (Content Lifecycle expectation from the spec).
      expiresAt: now + 90 * 24 * 60 * 60 * 1000,
    });

    return { id, quality, payload: candidate.payload, structuralKey: key, typeId: combo.typeId };
  }

  function randomCombo(): { typeId: TType; counterpartyId: string; channelId: string; toneId: string; goalId: string } {
    const availableTypes = spec.implementedTypes.filter((t) => t !== lastTypeId);
    return {
      typeId: pickRandom(availableTypes.length > 0 ? availableTypes : spec.implementedTypes),
      counterpartyId: pickRandom(COUNTERPARTIES).id,
      channelId: pickRandom(CHANNELS).id,
      toneId: pickRandom(TONES).id,
      goalId: pickRandom(GOALS).id,
    };
  }

  for (let i = 0; i < MAX_GENERATION_ATTEMPTS; i++) {
    let combo = randomCombo();
    // Best-effort: re-roll a few times if we land on a structural key this
    // user has seen recently. Not exhaustive search -- a small vocabulary
    // means an exact repeat is already unlikely, this just biases away from it.
    for (let reroll = 0; reroll < 3 && recentStructuralKeys.has(keyFor(combo.typeId, combo.counterpartyId, combo.channelId, combo.toneId, combo.goalId)); reroll++) {
      combo = randomCombo();
    }
    const result = await attempt(combo);
    if (result.quality.status === "approved") {
      await recordExposure(req.userId, spec.contentType, { id: result.id, skillId: req.skillId, structuralKey: result.structuralKey }, req.context);
      return {
        id: result.id,
        typeId: result.typeId,
        title: result.payload.title,
        body: result.payload.body,
        attribution: result.payload.attribution ?? null,
        source: "generated",
        noveltyScore: result.quality.noveltyScore,
        qualityScore: result.quality.qualityScore,
      };
    }
  }

  // Final fixed-safe attempt -- passes every mechanical gate by construction
  // except possibly novelty, which we accept here rather than leave the
  // learner without content at all.
  const safe = await attempt(spec.safeDefault);
  await recordExposure(req.userId, spec.contentType, { id: safe.id, skillId: req.skillId, structuralKey: safe.structuralKey }, req.context);
  return {
    id: safe.id,
    typeId: safe.typeId,
    title: safe.payload.title,
    body: safe.payload.body,
    attribution: safe.payload.attribution ?? null,
    source: "safe_default",
    noveltyScore: safe.quality.noveltyScore,
    qualityScore: safe.quality.qualityScore,
  };
}

export async function getPersonalizedHook(req: PersonalizedContentRequest): Promise<PersonalizedAdaptiveContent> {
  return getPersonalizedContent(req, HOOK_SPEC);
}

/** Phase 2 (§14): a second, real, architecturally distinct content type
 * through the exact same reservoir/novelty/quality pipeline as hooks -- see
 * this file's top doc comment. */
export async function getPersonalizedDailyChallenge(req: PersonalizedContentRequest): Promise<PersonalizedAdaptiveContent> {
  return getPersonalizedContent(req, CHALLENGE_SPEC);
}
