import "server-only";
import { and, desc, eq, inArray, notInArray } from "drizzle-orm";
import { db } from "@/lib/db";
import { adaptiveContent, userContentExposure } from "@/lib/db/schema";
import { getSkillMap } from "@/lib/content/service";
import type { Locale } from "@content/types";
import {
  CHANNELS,
  COUNTERPARTIES,
  GOALS,
  HOOK_TYPES_IMPLEMENTED,
  TONES,
  type ImplementedHookType,
} from "@content/adaptive/dimensions";
import { generateHook } from "@/lib/ai/agents/adaptive-hook";
import { evaluateQuality, type HookCandidate } from "./quality-gates";
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
 * Selection order, cheapest first (never generate when a good unseen item
 * already exists -- the spec's Content Reservoir principle):
 *   1. An approved/published reservoir item for this skill the user hasn't
 *      seen, preferring one whose hook type differs from their last exposure.
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

export interface PersonalizedHookRequest {
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

export interface PersonalizedHook {
  id: string;
  hookTypeId: string;
  title: string;
  body: string;
  attribution: string | null;
  source: "reservoir" | "generated" | "safe_default";
  noveltyScore: number;
  qualityScore: number;
}

function pickRandom<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)]!;
}

async function recentExposures(userId: string, limit = RECENT_EXPOSURE_WINDOW) {
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

async function recordExposure(userId: string, content: { id: string; skillId: string; structuralKey: string }, context?: Record<string, string>) {
  await db.insert(userContentExposure).values({
    id: uid("exp"),
    userId,
    contentId: content.id,
    contentType: "hook",
    skillId: content.skillId,
    structuralKey: content.structuralKey,
    context: context ?? null,
  });
}

export async function getPersonalizedHook(req: PersonalizedHookRequest): Promise<PersonalizedHook> {
  const exposures = await recentExposures(req.userId);
  const excludeIds = exposures.map((e) => e.contentId);
  const recentStructuralKeys = new Set(exposures.map((e) => e.structuralKey));

  // The single most recent exposure's hook type, for the diversity scheduler
  // rule "don't show the same hook type twice in a row" -- a cheap lookup
  // since it's only needed for one row, not the whole window.
  let lastHookTypeId: string | null = null;
  if (excludeIds.length > 0) {
    const lastRow = await db
      .select({ dimensions: adaptiveContent.dimensions })
      .from(adaptiveContent)
      .where(eq(adaptiveContent.id, excludeIds[0]!))
      .limit(1);
    lastHookTypeId = lastRow[0]?.dimensions.hookType ?? null;
  }

  // --- 1. Reservoir lookup -------------------------------------------------
  const reservoirConditions = [eq(adaptiveContent.skillId, req.skillId), inArray(adaptiveContent.status, ["approved", "published"])];
  if (excludeIds.length > 0) reservoirConditions.push(notInArray(adaptiveContent.id, excludeIds));
  const candidates = await db
    .select()
    .from(adaptiveContent)
    .where(and(...reservoirConditions))
    .orderBy(desc(adaptiveContent.qualityScore), desc(adaptiveContent.noveltyScore))
    .limit(5);

  const chosen = candidates.find((c) => c.dimensions.hookType !== lastHookTypeId) ?? candidates[0];
  if (chosen) {
    await recordExposure(req.userId, chosen, req.context);
    return {
      id: chosen.id,
      hookTypeId: chosen.dimensions.hookType ?? "quick_dilemma",
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

  async function attempt(combo: {
    hookTypeId: ImplementedHookType;
    counterpartyId: string;
    channelId: string;
    toneId: string;
    goalId: string;
  }) {
    const dims: Record<string, string> = {
      skillId: req.skillId,
      language: req.locale,
      hookType: combo.hookTypeId,
      careerStage: req.careerStageId,
      counterparty: combo.counterpartyId,
      channel: combo.channelId,
      tone: combo.toneId,
      goal: combo.goalId,
    };
    const key = structuralKey(dims);

    const result = await generateHook({
      skillName: req.skillName,
      hookTypeId: combo.hookTypeId,
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
    const candidate: HookCandidate = {
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
      contentType: "hook",
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
      promptVersion: "hook-2026.08.1",
      status: quality.status === "approved" ? "approved" : quality.status === "rejected" ? "rejected" : "human_review_required",
      // A 90-day horizon -- long enough to amortise generation cost across
      // many learners, short enough that a stale variant doesn't linger
      // forever (Content Lifecycle expectation from the spec).
      expiresAt: now + 90 * 24 * 60 * 60 * 1000,
    });

    return { id, quality, payload: candidate.payload, structuralKey: key, hookTypeId: combo.hookTypeId };
  }

  function randomCombo(): { hookTypeId: ImplementedHookType; counterpartyId: string; channelId: string; toneId: string; goalId: string } {
    const availableHookTypes = HOOK_TYPES_IMPLEMENTED.filter((h) => h !== lastHookTypeId);
    return {
      hookTypeId: pickRandom(availableHookTypes.length > 0 ? availableHookTypes : HOOK_TYPES_IMPLEMENTED),
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
    for (let reroll = 0; reroll < 3 && recentStructuralKeys.has(structuralKey({ skillId: req.skillId, language: req.locale, hookType: combo.hookTypeId, careerStage: req.careerStageId, counterparty: combo.counterpartyId, channel: combo.channelId, tone: combo.toneId, goal: combo.goalId })); reroll++) {
      combo = randomCombo();
    }
    const result = await attempt(combo);
    if (result.quality.status === "approved") {
      await recordExposure(req.userId, { id: result.id, skillId: req.skillId, structuralKey: result.structuralKey }, req.context);
      return {
        id: result.id,
        hookTypeId: result.hookTypeId,
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
  // learner without a hook at all.
  const safe = await attempt({ hookTypeId: "quick_dilemma", counterpartyId: "new_client", channelId: "email", toneId: "cooperative", goalId: "clarify" });
  await recordExposure(req.userId, { id: safe.id, skillId: req.skillId, structuralKey: safe.structuralKey }, req.context);
  return {
    id: safe.id,
    hookTypeId: safe.hookTypeId,
    title: safe.payload.title,
    body: safe.payload.body,
    attribution: safe.payload.attribution ?? null,
    source: "safe_default",
    noveltyScore: safe.quality.noveltyScore,
    qualityScore: safe.quality.qualityScore,
  };
}
