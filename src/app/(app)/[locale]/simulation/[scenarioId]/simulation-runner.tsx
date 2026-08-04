"use client";

import * as React from "react";
import type { ScenarioDef } from "@content/types";
import { useI18n, useLocalized } from "@/components/providers";
import { AppHeader } from "@/components/layout/app-shell";
import { Button, LinkButton } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Callout } from "@/components/ui/feedback";
import { ScoreRing } from "@/components/ui/progress";
import { Sheet } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/form";
import { CheckIcon, AlertIcon } from "@/components/ui/icons";
import { AiThinking } from "@/components/activities/activity-player";
import {
  abandonSimulation,
  finishSimulation,
  sendSimulationMessage,
  startSimulation,
  type SimulationEvaluationResult,
} from "@/lib/actions/simulation";
import { saveUnitStep } from "@/lib/actions/progress";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";

type Phase = "brief" | "chat" | "evaluating" | "result";

interface Message {
  role: "learner" | "character";
  content: string;
}

export function SimulationRunner({
  scenario,
  locale,
  unitId,
  returnStepIndex,
  showStudio,
}: {
  scenario: ScenarioDef;
  locale: Locale;
  unitId: string | null;
  returnStepIndex?: number;
  showStudio: boolean;
}) {
  const { dict, t } = useI18n();
  const L = useLocalized();

  const [phase, setPhase] = React.useState<Phase>("brief");
  const [starting, setStarting] = React.useState(false);
  const [sessionId, setSessionId] = React.useState<string | null>(null);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [turn, setTurn] = React.useState(0);
  const [inputText, setInputText] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const [endSheetOpen, setEndSheetOpen] = React.useState(false);
  const [evaluation, setEvaluation] = React.useState<SimulationEvaluationResult | null>(null);

  const listRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, phase]);

  // Best-effort: if the learner leaves mid-conversation (browser back, tab
  // close) rather than finishing or explicitly ending, mark the session so it
  // does not linger as "active" forever.
  const liveSessionRef = React.useRef<{ id: string; active: boolean } | null>(null);
  React.useEffect(() => {
    liveSessionRef.current = sessionId ? { id: sessionId, active: phase === "chat" } : null;
  }, [sessionId, phase]);
  React.useEffect(() => {
    return () => {
      const live = liveSessionRef.current;
      if (live?.active) void abandonSimulation(live.id).catch(() => {});
    };
  }, []);

  const awayHref = unitId ? `/${locale}/unit/${unitId}` : `/${locale}/practice`;

  async function handleBegin() {
    setStarting(true);
    try {
      const { sessionId: id, opening } = await startSimulation(scenario.id, unitId, locale, "text");
      setSessionId(id);
      setMessages([{ role: "character", content: opening }]);
      setTurn(0);
      setPhase("chat");
    } finally {
      setStarting(false);
    }
  }

  async function handleFinish(currentSessionId: string) {
    setPhase("evaluating");
    const result = await finishSimulation(currentSessionId, locale);
    setEvaluation(result);
    setPhase("result");
    if (unitId && returnStepIndex !== undefined) {
      void saveUnitStep(unitId, returnStepIndex).catch(() => {});
    }
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = inputText.trim();
    if (!sessionId || !text || sending) return;
    setMessages((prev) => [...prev, { role: "learner", content: text }]);
    setInputText("");
    setSending(true);
    try {
      const result = await sendSimulationMessage(sessionId, text);
      setMessages((prev) => [...prev, { role: "character", content: result.reply }]);
      setTurn(result.turn);
      if (result.shouldEnd) {
        await handleFinish(sessionId);
      }
    } finally {
      setSending(false);
    }
  }

  function handleAbandonBack() {
    if (phase !== "chat") return;
    setEndSheetOpen(true);
  }

  const headerBack =
    phase === "chat"
      ? { onClick: handleAbandonBack, label: dict.common.back }
      : { href: awayHref, label: dict.common.back };

  return (
    <div className="flex min-h-dvh flex-col bg-[var(--background)]">
      <AppHeader
        title={L(scenario.title)}
        back={headerBack}
        showStudio={showStudio}
        right={
          phase === "chat" ? (
            <Button variant="ghost" size="sm" onClick={() => setEndSheetOpen(true)}>
              {dict.simulation.endEarly}
            </Button>
          ) : undefined
        }
      />

      <main id="main" className="mx-auto flex w-full max-w-lg flex-1 flex-col px-4 py-4">
        {phase === "brief" && (
          <BriefScreen scenario={scenario} L={L} starting={starting} onBegin={() => void handleBegin()} />
        )}

        {phase === "chat" && (
          <div className="flex flex-1 flex-col">
            <div ref={listRef} className="thin-scroll flex-1 space-y-3 overflow-y-auto py-2">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[85%] rounded-[var(--radius-card)] px-3.5 py-2.5",
                    m.role === "learner"
                      ? "ms-auto bg-[var(--color-brand-tint)] text-[var(--foreground)]"
                      : "me-auto bg-[var(--surface-muted)] text-[var(--foreground)]",
                  )}
                >
                  <p dir="auto" className="wrap-anywhere text-[0.9375rem] leading-relaxed">
                    {m.content}
                  </p>
                </div>
              ))}
              {sending && (
                <div
                  role="status"
                  aria-label={dict.common.loading}
                  className="me-auto flex max-w-[40%] items-center gap-1 rounded-[var(--radius-card)] bg-[var(--surface-muted)] px-3.5 py-3"
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--foreground-muted)]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--foreground-muted)] [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--foreground-muted)] [animation-delay:300ms]" />
                </div>
              )}
            </div>

            <p className="text-supporting num py-1.5 text-center">
              {t(dict.simulation.turnOf, { current: turn, max: scenario.maxTurns })}
            </p>

            <form
              onSubmit={(e) => void handleSend(e)}
              className="sticky bottom-0 flex items-end gap-2 border-t border-[var(--border)] bg-[var(--background)]/95 py-3 backdrop-blur safe-bottom"
            >
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={dict.simulation.typePlaceholder}
                disabled={sending}
                rows={1}
                className="min-h-11 flex-1 resize-none"
                aria-label={dict.simulation.typePlaceholder}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void handleSend(e);
                  }
                }}
              />
              <Button type="submit" variant="primary" disabled={!inputText.trim() || sending} loading={sending}>
                {dict.simulation.send}
              </Button>
            </form>
          </div>
        )}

        {phase === "evaluating" && (
          <div className="flex flex-1 items-center justify-center">
            <AiThinking title={dict.simulation.evaluating} hint={dict.simulation.evaluatingHint} />
          </div>
        )}

        {phase === "result" && evaluation && (
          <ResultScreen evaluation={evaluation} awayHref={awayHref} />
        )}
      </main>

      <Sheet
        open={endSheetOpen}
        onClose={() => setEndSheetOpen(false)}
        title={dict.simulation.endEarly}
        closeLabel={dict.common.close}
        footer={
          <div className="flex gap-2">
            <Button variant="secondary" block onClick={() => setEndSheetOpen(false)}>
              {dict.unit.exitStay}
            </Button>
            <Button
              variant="primary"
              block
              onClick={() => {
                setEndSheetOpen(false);
                if (sessionId) void handleFinish(sessionId);
              }}
            >
              {dict.simulation.endEarly}
            </Button>
          </div>
        }
      >
        <p dir="auto" className="wrap-anywhere text-[0.9375rem] leading-relaxed">
          {dict.simulation.endConfirm}
        </p>
      </Sheet>
    </div>
  );
}

function BriefScreen({
  scenario,
  L,
  starting,
  onBegin,
}: {
  scenario: ScenarioDef;
  L: (value: { ar: string; en: string }) => string;
  starting: boolean;
  onBegin: () => void;
}) {
  const { dict, locale } = useI18n();
  const background = locale === "en" ? scenario.background.en : scenario.background.ar;

  return (
    <div className="space-y-4">
      <Callout tone="brand" title={dict.simulation.brief}>
        {dict.simulation.accessibilityNote}
      </Callout>
      <Card>
        <CardBody className="space-y-3">
          <div>
            <p className="text-label">{dict.simulation.yourRole}</p>
            <p dir="auto" className="wrap-anywhere text-[0.9375rem]">
              {L(scenario.userRole)}
            </p>
          </div>
          <div>
            <p className="text-label">{dict.simulation.yourGoal}</p>
            <p dir="auto" className="wrap-anywhere text-[0.9375rem]">
              {L(scenario.userGoal)}
            </p>
          </div>
          <div>
            <p className="text-label">{dict.simulation.background}</p>
            <div className="mt-1 space-y-1.5">
              {background.map((line, i) => (
                <p key={i} dir="auto" className="wrap-anywhere text-[0.9375rem] leading-relaxed text-[var(--foreground-secondary)]">
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-label">{dict.simulation.character}</p>
            <p dir="auto" className="wrap-anywhere text-[0.9375rem]">
              {L(scenario.character.name)} — {L(scenario.character.role)}
            </p>
          </div>
        </CardBody>
      </Card>
      <Button variant="primary" block loading={starting} onClick={onBegin}>
        {dict.simulation.begin}
      </Button>
    </div>
  );
}

function ResultScreen({ evaluation, awayHref }: { evaluation: SimulationEvaluationResult; awayHref: string }) {
  const { dict } = useI18n();

  return (
    <div className="space-y-5 py-2">
      <div className="flex flex-col items-center gap-2">
        <ScoreRing value={evaluation.overallScore} max={evaluation.maxScore} label={dict.feedback.overall} />
        <p className="text-page-title">{dict.simulation.ended}</p>
      </div>

      {evaluation.strengths.length > 0 && (
        <div>
          <p className="text-label mb-1.5">{dict.feedback.strengths}</p>
          <ul className="space-y-1.5">
            {evaluation.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-[var(--color-positive)]">
                  <CheckIcon size={16} />
                </span>
                <span dir="auto" className="wrap-anywhere text-sm leading-relaxed">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {evaluation.missedOpportunities.length > 0 && (
        <div>
          <p className="text-label mb-1.5">{dict.feedback.missed}</p>
          <ul className="space-y-1.5">
            {evaluation.missedOpportunities.map((s, i) => (
              <li key={i} dir="auto" className="wrap-anywhere text-sm leading-relaxed text-[var(--foreground-secondary)]">
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}

      {evaluation.criticalMistakes.length > 0 && (
        <div>
          <p className="text-label mb-1.5">{dict.feedback.critical}</p>
          <ul className="space-y-1.5">
            {evaluation.criticalMistakes.map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-[var(--color-negative)]">
                  <AlertIcon size={16} />
                </span>
                <span dir="auto" className="wrap-anywhere text-sm leading-relaxed">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Callout tone="brand" title={dict.feedback.priority}>
        <span dir="auto" className="wrap-anywhere">
          {evaluation.priorityImprovement}
        </span>
      </Callout>

      {evaluation.nextTimeTry && (
        <Callout tone="info">
          <span dir="auto" className="wrap-anywhere">
            {evaluation.nextTimeTry}
          </span>
        </Callout>
      )}

      <div className="flex items-center justify-between rounded-[var(--radius-control)] border border-[var(--border)] p-3">
        <span className="text-sm font-semibold">{dict.feedback.confidence}</span>
        <span className="num">{Math.round(evaluation.confidence * 100)}%</span>
      </div>

      {evaluation.needsHumanReview && <Callout tone="warning">{dict.feedback.lowConfidence}</Callout>}
      {evaluation.degraded && <Callout tone="warning">{dict.feedback.degraded}</Callout>}

      <LinkButton variant="primary" block href={awayHref}>
        {dict.common.continue}
      </LinkButton>
    </div>
  );
}
