"use server";

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { evaluations, profiles, simulationMessages, simulationSessions } from "@/lib/db/schema";
import { requireUser } from "@/lib/auth/session";
import { getRubric, getScenario } from "@/lib/content/service";
import { simulationTurn } from "@/lib/ai/agents/simulation";
import { evaluate, verifyEvaluation } from "@/lib/ai/agents/evaluation";
import { coach } from "@/lib/ai/agents/coaching";
import { uid } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";
import { checkRateLimit } from "@/lib/auth/rate-limit";
import { track } from "./analytics";
import { applyPendingMasteryForEvaluation } from "./mastery-bridge";

async function consentGiven(userId: string): Promise<boolean> {
  const rows = await db.select().from(profiles).where(eq(profiles.userId, userId)).limit(1);
  return Boolean(rows[0]?.aiProcessingConsentAt);
}

/**
 * Unlike the auth endpoints (signIn/signUp/requestPasswordReset), these
 * three actions run the full AI provider chain (or, for `startSimulation`,
 * just writes — but still one a spammed loop could hammer) plus multiple DB
 * writes per call, with no throttle at all before this. Keyed by user id,
 * not IP: these all require `requireUser()` already, so the caller's
 * identity is real, not spoofable the way an IP is.
 */
// 20/hour was the original figure; raised to 40 after this repo's own e2e
// suite -- itself a real, if intensive, usage pattern of one account --
// grew past 20 real startSimulation() calls in a single run (18 scenario
// tests + natural-maxTurns-end tests). That's exactly the case this limit
// is meant to allow: a motivated learner working through many short
// scenarios in one focused session. 40/hour still closes off an
// unthrottled loop against remote-provider cost while giving real headroom
// above the platform's own 18-scenario catalog.
const SIMULATION_START_LIMIT = { windowMs: 60 * 60 * 1000, max: 40 };
const SIMULATION_MESSAGE_LIMIT = { windowMs: 15 * 60 * 1000, max: 60 };

export async function startSimulation(
  scenarioId: string,
  unitId: string | null,
  locale: Locale,
  modality: "text" | "voice",
): Promise<{ sessionId: string; opening: string }> {
  const user = await requireUser();
  const startLimit = await checkRateLimit(`simulation:start:${user.id}`, SIMULATION_START_LIMIT);
  if (!startLimit.allowed) throw new Error("Too many simulations started — please wait a while and try again.");

  const scenario = await getScenario(scenarioId);
  if (!scenario) throw new Error("Scenario not found");

  const id = uid("sim");
  const now = Date.now();
  await db.insert(simulationSessions).values({
    id,
    userId: user.id,
    scenarioId,
    unitId,
    locale,
    modality,
    state: "active",
    turnCount: 0,
    startedAt: now,
    lastActiveAt: now,
  });

  const opening = scenario.opening[locale];
  await db.insert(simulationMessages).values({
    id: uid("msg"),
    sessionId: id,
    turn: 0,
    role: "character",
    content: opening,
  });

  await track(user.id, null, "simulation_started", { scenarioId });
  return { sessionId: id, opening };
}

export interface SimulationTurnResult {
  reply: string;
  shouldEnd: boolean;
  turn: number;
}

/** Same bound as `textResponse` in responses.ts, kept in sync deliberately. */
const MAX_MESSAGE_LENGTH = 8000;

export async function sendSimulationMessage(sessionId: string, message: string): Promise<SimulationTurnResult> {
  const user = await requireUser();
  const messageLimit = await checkRateLimit(`simulation:message:${user.id}`, SIMULATION_MESSAGE_LIMIT);
  if (!messageLimit.allowed) throw new Error("Too many messages sent — please wait a while and try again.");

  const trimmed = message.trim();
  if (trimmed.length === 0 || trimmed.length > MAX_MESSAGE_LENGTH) {
    throw new Error("Invalid message");
  }
  message = trimmed;
  const rows = await db.select().from(simulationSessions).where(eq(simulationSessions.id, sessionId)).limit(1);
  const session = rows[0];
  if (!session || session.userId !== user.id) throw new Error("Session not found");
  if (session.state !== "active") throw new Error("Session already ended");

  const scenario = await getScenario(session.scenarioId);
  if (!scenario) throw new Error("Scenario not found");

  const historyRows = await db
    .select()
    .from(simulationMessages)
    .where(eq(simulationMessages.sessionId, sessionId));
  const history = historyRows
    .sort((a, b) => a.turn - b.turn)
    .map((m) => ({ role: m.role === "system" ? "character" as const : m.role, content: m.content }));

  const allowRemote = await consentGiven(user.id);
  const nextTurn = session.turnCount + 1;

  const result = await simulationTurn(
    {
      scenario,
      locale: session.locale as Locale,
      turn: nextTurn,
      revealedFactIds: session.revealedFacts,
      reachedDecisionPoints: session.reachedDecisionPoints,
      history,
      emotionalState: historyRows.at(-1)?.role === "character" ? "guarded" : "calm",
      userId: user.id,
      organizationId: null,
      allowRemote,
    },
    message,
  );

  await db.insert(simulationMessages).values({
    id: uid("msg"),
    sessionId,
    turn: nextTurn,
    role: "learner",
    content: message,
  });
  await db.insert(simulationMessages).values({
    id: uid("msg"),
    sessionId,
    turn: nextTurn,
    role: "character",
    content: result.data.reply,
    modelRunId: result.runId,
  });

  const shouldEnd = result.data.shouldEnd || nextTurn >= scenario.maxTurns;

  await db
    .update(simulationSessions)
    .set({
      turnCount: nextTurn,
      revealedFacts: Array.from(new Set([...session.revealedFacts, ...result.data.revealedFactIds])),
      reachedDecisionPoints: result.data.decisionPointId
        ? Array.from(new Set([...session.reachedDecisionPoints, result.data.decisionPointId]))
        : session.reachedDecisionPoints,
      state: shouldEnd ? "evaluating" : "active",
      lastActiveAt: Date.now(),
    })
    .where(eq(simulationSessions.id, sessionId));

  return { reply: result.data.reply, shouldEnd, turn: nextTurn };
}

export interface SimulationEvaluationResult {
  evaluationId: string;
  overallScore: number;
  maxScore: number;
  passed: boolean;
  strengths: string[];
  missedOpportunities: string[];
  criticalMistakes: string[];
  priorityImprovement: string;
  nextTimeTry: string;
  confidence: number;
  needsHumanReview: boolean;
  /**
   * True when a configured remote provider was attempted for this
   * evaluation and/or its coaching pass but failed, and the scorecard shown
   * came from the deterministic offline fallback instead —
   * `AgentResult.degraded` from `src/lib/ai/provider.ts`. Not set (false)
   * when no remote provider was ever configured at all.
   */
  degraded: boolean;
}

/**
 * Ends the session and produces the scorecard. The full transcript — learner
 * turns only would let a lawyer "win" by asking good questions once and coasting
 * — goes to the Evaluation Agent, which is a different call with a different
 * prompt than the Simulation Agent that played the other side. Same
 * verification-then-coaching pipeline as written activities.
 */
export async function finishSimulation(sessionId: string, locale: Locale): Promise<SimulationEvaluationResult> {
  const user = await requireUser();
  const rows = await db.select().from(simulationSessions).where(eq(simulationSessions.id, sessionId)).limit(1);
  const session = rows[0];
  if (!session || session.userId !== user.id) throw new Error("Session not found");

  const scenario = await getScenario(session.scenarioId);
  if (!scenario) throw new Error("Scenario not found");
  const rubric = await getRubric(scenario.rubricId);
  if (!rubric) throw new Error("Rubric not found");

  const historyRows = await db
    .select()
    .from(simulationMessages)
    .where(eq(simulationMessages.sessionId, sessionId));
  const transcript = historyRows
    .sort((a, b) => a.turn - b.turn)
    .map((m) => `${m.role === "learner" ? "LAWYER" : "CLIENT"}: ${m.content}`)
    .join("\n");

  const allowRemote = await consentGiven(user.id);
  const t = (loc: Locale) => (v: { ar: string; en: string }) => v[loc];
  const tt = t(locale);

  const raw = await evaluate({
    rubric,
    locale,
    task: `${tt(scenario.title)} — ${tt(scenario.userGoal)}`,
    learnerText: transcript,
    expectations: {
      expected: scenario.expectedBehaviors.map(tt),
      criticalMistakes: scenario.criticalMistakes.map(tt),
      successConditions: scenario.successConditions.map(tt),
    },
    userId: user.id,
    organizationId: null,
    allowRemote,
  });
  const verified = verifyEvaluation(raw.data, rubric, transcript);

  const coaching = await coach({
    evaluation: verified,
    learnerText: transcript,
    skillName: scenario.skillIds[0] ?? scenario.id,
    locale,
    userId: user.id,
    organizationId: null,
    allowRemote,
  });

  const evaluationId = uid("eval");
  await db.insert(evaluations).values({
    id: evaluationId,
    userId: user.id,
    subjectType: "simulation_session",
    subjectId: sessionId,
    rubricId: rubric.id,
    rubricVersion: rubric.version,
    overallScore: verified.overallScore,
    maxScore: verified.maxScore,
    passed: verified.passed,
    criteria: verified.criteria,
    strengths: verified.strengths,
    missedOpportunities: verified.missedOpportunities,
    criticalMistakes: verified.criticalMistakeIds,
    priorityImprovement: verified.priorityImprovement,
    betterAlternative: verified.betterAlternative,
    recommendedPractice: coaching.data.practiceSuggestionSkillIds,
    confidence: verified.confidence,
    modelRunId: raw.runId,
    humanReviewStatus: verified.needsHumanReview ? "queued" : "not_required",
    humanReviewReason: verified.humanReviewReason,
    pendingMastery: scenario.skillIds.map((skillId) => ({
      skillId,
      targetLevel: scenario.stage + 1,
      depth: "simulation" as const,
    })),
    masteryApplied: false,
  });

  await db
    .update(simulationSessions)
    .set({ state: "completed", completedAt: Date.now() })
    .where(eq(simulationSessions.id, sessionId));

  // See `applyPendingMasteryForEvaluation()` — a queued (human-review-pending)
  // evaluation does not fold into mastery until a reviewer confirms it.
  if (!verified.needsHumanReview) {
    await applyPendingMasteryForEvaluation(evaluationId);
  }

  await track(user.id, null, "simulation_completed", { scenarioId: scenario.id, score: verified.overallScore });

  return {
    evaluationId,
    overallScore: verified.overallScore,
    maxScore: verified.maxScore,
    passed: verified.passed,
    strengths: verified.strengths,
    missedOpportunities: verified.missedOpportunities,
    criticalMistakes: verified.criticalMistakeIds,
    priorityImprovement: verified.priorityImprovement,
    nextTimeTry: coaching.data.nextTimeTry,
    confidence: verified.confidence,
    needsHumanReview: verified.needsHumanReview,
    degraded: raw.degraded || coaching.degraded,
  };
}

export async function abandonSimulation(sessionId: string): Promise<void> {
  const user = await requireUser();
  await db
    .update(simulationSessions)
    .set({ state: "abandoned" })
    .where(and(eq(simulationSessions.id, sessionId), eq(simulationSessions.userId, user.id)));
}
