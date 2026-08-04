"use client";

import * as React from "react";
import type { Activity, Localized, LocalizedBlocks, ScenarioDef, UnitDef, UnitStep } from "@content/types";
import { useI18n, useLocalized } from "@/components/providers";
import { AppHeader } from "@/components/layout/app-shell";
import { Button, LinkButton } from "@/components/ui/button";
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Callout, EmptyState } from "@/components/ui/feedback";
import { Badge } from "@/components/ui/badge";
import { ScoreRing, StepDots } from "@/components/ui/progress";
import { Sheet } from "@/components/ui/sheet";
import { CheckIcon, MessageIcon, SparkIcon } from "@/components/ui/icons";
import { ActivityPlayer, AiThinking, type ActivityOutcome } from "@/components/activities/activity-player";
import {
  completeUnit,
  saveSummaryCard,
  saveUnitStep,
  submitActivity,
  type SubmitActivityResult,
} from "@/lib/actions/progress";
import { levelKey } from "@/lib/learning/mastery";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";

interface UnitResult {
  score: number;
  maxScore: number;
  kind: string;
}

interface MasteryChange {
  skillId: string;
  newLevel: number;
}

export function UnitPlayer({
  unit,
  locale,
  scenarios,
  skillNames,
  initialStepIndex,
  returnHref,
  nextUnitHref,
}: {
  unit: UnitDef;
  locale: Locale;
  scenarios: Record<string, ScenarioDef>;
  skillNames: Record<string, Localized>;
  initialStepIndex: number;
  returnHref: string;
  nextUnitHref: string | null;
}) {
  const { dict, t } = useI18n();
  const L = useLocalized();

  const [stepIndex, setStepIndex] = React.useState(initialStepIndex);
  // Local bookkeeping only -- completeUnit() no longer trusts this array for
  // scoring (see its doc comment in src/lib/actions/progress.ts): the server
  // reconstructs the real summary from the `attempts` it recorded, so a
  // fabricated or stale client-side array can no longer skew a unit's score
  // or completion state. Kept here in case a future UI wants an in-session
  // running tally; nothing currently reads `results` besides this comment's
  // neighbor at the completeUnit() call below, which now ignores it.
  const [results, setResults] = React.useState<UnitResult[]>([]);
  const [masteryChanges, setMasteryChanges] = React.useState<MasteryChange[]>([]);
  const [completing, setCompleting] = React.useState(false);
  const [completion, setCompletion] = React.useState<{ score: number; maxScore: number; passed: boolean } | null>(
    null,
  );
  const [exitSheetOpen, setExitSheetOpen] = React.useState(false);

  const step = unit.steps[stepIndex];
  const isLastStep = stepIndex >= unit.steps.length - 1;

  function addResult(result: UnitResult) {
    setResults((prev) => [...prev, result]);
  }

  function addMasteryChange(change: MasteryChange) {
    setMasteryChanges((prev) => (prev.some((c) => c.skillId === change.skillId) ? prev : [...prev, change]));
  }

  async function goNext() {
    if (isLastStep) {
      setCompleting(true);
      const summary = await completeUnit(unit.id);
      setCompletion(summary);
      setCompleting(false);
      return;
    }
    const next = stepIndex + 1;
    setStepIndex(next);
    void saveUnitStep(unit.id, next).catch(() => {});
  }

  if (completion) {
    return (
      <CompletionScreen
        summary={completion}
        masteryChanges={masteryChanges}
        skillNames={skillNames}
        returnHref={returnHref}
        nextUnitHref={nextUnitHref}
      />
    );
  }

  if (!step) {
    return (
      <EmptyState title={dict.errors.notFound} body={dict.errors.notFoundBody} />
    );
  }

  const isActivityStep = step.kind === "activity";

  return (
    <div className="flex min-h-dvh flex-col bg-[var(--background)]">
      <AppHeader
        title={L(unit.title)}
        back={{ onClick: () => setExitSheetOpen(true), label: dict.common.back }}
        right={
          <span className="text-supporting num shrink-0">
            {t(dict.unit.stepOf, { current: stepIndex + 1, total: unit.steps.length })}
          </span>
        }
      />
      <main id="main" className="mx-auto w-full max-w-lg flex-1 px-4 py-5">
        <div className="pb-3">
          <StepDots
            total={unit.steps.length}
            current={stepIndex}
            label={t(dict.unit.stepOf, { current: stepIndex + 1, total: unit.steps.length })}
          />
        </div>
        <StepView
          step={step}
          unit={unit}
          scenarios={scenarios}
          locale={locale}
          stepIndex={stepIndex}
          onActivityResult={addResult}
          onMasteryChange={addMasteryChange}
          onAdvance={() => void goNext()}
        />
      </main>

      {!isActivityStep && (
        <footer className="sticky bottom-0 border-t border-[var(--border)] bg-[var(--background)]/95 px-4 py-3 backdrop-blur safe-bottom">
          <div className="mx-auto max-w-lg">
            <Button variant="primary" block loading={completing} onClick={() => void goNext()}>
              {dict.common.continue}
            </Button>
          </div>
        </footer>
      )}

      <Sheet
        open={exitSheetOpen}
        onClose={() => setExitSheetOpen(false)}
        title={dict.common.back}
        closeLabel={dict.common.close}
        footer={
          <div className="flex gap-2">
            <Button variant="secondary" block onClick={() => setExitSheetOpen(false)}>
              {dict.unit.exitStay}
            </Button>
            <LinkButton variant="destructive" block href={returnHref}>
              {dict.unit.exitLeave}
            </LinkButton>
          </div>
        }
      >
        <p dir="auto" className="wrap-anywhere text-[0.9375rem] leading-relaxed">
          {dict.unit.exitConfirm}
        </p>
      </Sheet>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Step rendering
// ---------------------------------------------------------------------------

const TONE_BG: Record<string, string> = {
  positive: "border-[var(--color-positive-tint)] bg-[var(--color-positive-tint)] text-[var(--color-positive)]",
  negative: "border-[var(--color-negative-tint)] bg-[var(--color-negative-tint)] text-[var(--color-negative)]",
  neutral: "border-[var(--border)] bg-[var(--surface-muted)] text-[var(--foreground-secondary)]",
};

function pickBlocks(value: LocalizedBlocks, locale: Locale): string[] {
  return locale === "en" ? value.en : value.ar;
}

function StepView({
  step,
  unit,
  scenarios,
  locale,
  stepIndex,
  onActivityResult,
  onMasteryChange,
  onAdvance,
}: {
  step: UnitStep;
  unit: UnitDef;
  scenarios: Record<string, ScenarioDef>;
  locale: Locale;
  stepIndex: number;
  onActivityResult: (result: UnitResult) => void;
  onMasteryChange: (change: MasteryChange) => void;
  onAdvance: () => void;
}) {
  const { dict } = useI18n();
  const L = useLocalized();

  switch (step.kind) {
    case "hook":
      return (
        <blockquote className="rounded-[var(--radius-card)] border-s-4 border-[var(--color-brand)] bg-[var(--surface-muted)] p-5">
          <p className="text-label mb-2">{dict.unit.hook}</p>
          <p dir="auto" className="wrap-anywhere text-xl font-semibold leading-snug">
            {L(step.text)}
          </p>
          {step.attribution && (
            <footer dir="auto" className="text-supporting mt-3">
              — {L(step.attribution)}
            </footer>
          )}
        </blockquote>
      );

    case "why_it_matters":
      return (
        <div>
          <p className="text-label mb-2">{dict.unit.whyItMatters}</p>
          <p dir="auto" className="wrap-anywhere text-[1.0625rem] leading-relaxed">
            {L(step.text)}
          </p>
        </div>
      );

    case "learning_goal": {
      const goals = pickBlocks(step.goals, locale);
      return (
        <div>
          <p className="text-label mb-2">{dict.unit.learningGoal}</p>
          <ul className="space-y-2.5">
            {goals.map((goal, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0 text-[var(--color-brand)]">
                  <CheckIcon size={18} />
                </span>
                <span dir="auto" className="wrap-anywhere text-[0.9375rem] leading-snug">
                  {goal}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    case "micro_lesson": {
      const body = pickBlocks(step.body, locale);
      return (
        <div>
          <p className="text-label mb-2">{dict.unit.lesson}</p>
          <p dir="auto" className="wrap-anywhere text-lg font-semibold leading-snug">
            {L(step.title)}
          </p>
          <div className="mt-3 space-y-3">
            {body.map((p, i) => (
              <p key={i} dir="auto" className="wrap-anywhere text-[0.9375rem] leading-relaxed text-[var(--foreground-secondary)]">
                {p}
              </p>
            ))}
          </div>
        </div>
      );
    }

    case "visual":
      return (
        <div>
          <p className="text-label mb-3">{L(step.title)}</p>
          <VisualBody variant={step.variant} items={step.items} L={L} />
        </div>
      );

    case "worked_example": {
      const strongText = pickBlocks(step.strong.text, locale);
      const weakText = pickBlocks(step.weak.text, locale);
      return (
        <div className="space-y-3">
          <p className="text-label">{dict.unit.workedExample}</p>
          <div className="rounded-[var(--radius-card)] border-s-4 border-[var(--color-positive)] bg-[var(--color-positive-tint)] p-4">
            <p className="text-sm font-bold text-[var(--color-positive)]">
              {dict.unit.strong} — {L(step.strong.label)}
            </p>
            <div className="mt-2 space-y-2">
              {strongText.map((p, i) => (
                <p key={i} dir="auto" className="wrap-anywhere text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-[var(--color-positive)]">{dict.unit.why}</p>
            <p dir="auto" className="wrap-anywhere text-sm leading-relaxed">
              {L(step.strong.why)}
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] border-s-4 border-[var(--color-negative)] bg-[var(--color-negative-tint)] p-4">
            <p className="text-sm font-bold text-[var(--color-negative)]">
              {dict.unit.weak} — {L(step.weak.label)}
            </p>
            <div className="mt-2 space-y-2">
              {weakText.map((p, i) => (
                <p key={i} dir="auto" className="wrap-anywhere text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-[var(--color-negative)]">{dict.unit.why}</p>
            <p dir="auto" className="wrap-anywhere text-sm leading-relaxed">
              {L(step.weak.why)}
            </p>
          </div>
        </div>
      );
    }

    case "activity": {
      const activity = unit.activities.find((a) => a.id === step.activityId);
      if (!activity) {
        return <EmptyState title={dict.errors.notFound} body={dict.errors.notFoundBody} />;
      }
      return (
        <ActivityStepView
          activity={activity}
          unitId={unit.id}
          locale={locale}
          onResult={onActivityResult}
          onMasteryChange={onMasteryChange}
          onAdvance={onAdvance}
        />
      );
    }

    case "simulation": {
      const scenario = scenarios[step.scenarioId];
      if (!scenario) {
        return <EmptyState title={dict.errors.notFound} body={dict.errors.notFoundBody} />;
      }
      return (
        <div className="space-y-4">
          <Callout tone="brand" title={dict.unit.simulation} icon={<MessageIcon size={18} />}>
            {dict.simulation.accessibilityNote}
          </Callout>
          <Card>
            <CardHeader>
              <CardTitle>{L(scenario.title)}</CardTitle>
            </CardHeader>
            <CardBody className="space-y-3">
              <p dir="auto" className="wrap-anywhere text-supporting">
                {L(scenario.description)}
              </p>
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
            </CardBody>
            <CardFooter>
              <LinkButton
                variant="primary"
                block
                href={`/${locale}/simulation/${scenario.id}?unit=${unit.id}&return=${stepIndex + 1}`}
              >
                {dict.simulation.begin}
              </LinkButton>
            </CardFooter>
          </Card>
        </div>
      );
    }

    case "summary":
      return <SummaryStepView step={step} unit={unit} locale={locale} />;

    case "apply_tomorrow":
      return (
        <Callout tone="brand" title={dict.unit.applyTomorrow} icon={<SparkIcon size={18} />}>
          <p dir="auto" className="wrap-anywhere">
            {L(step.task)}
          </p>
          {step.detail && (
            <p dir="auto" className="wrap-anywhere mt-2 text-[var(--foreground-secondary)]">
              {L(step.detail)}
            </p>
          )}
        </Callout>
      );

    case "next_mission":
      return (
        <Callout tone="info" title={dict.unit.nextMission}>
          <p dir="auto" className="wrap-anywhere">
            {L(step.teaser)}
          </p>
        </Callout>
      );
  }
}

function VisualBody({
  variant,
  items,
  L,
}: {
  variant: "steps" | "comparison" | "timeline" | "scale";
  items: { label: Localized; detail?: Localized; tone?: "positive" | "negative" | "neutral" }[];
  L: (value: Localized) => string;
}) {
  if (variant === "steps") {
    return (
      <ol className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="num grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--color-brand-tint)] text-sm font-bold text-[var(--color-brand)]">
              {i + 1}
            </span>
            <div className="min-w-0">
              <p dir="auto" className="wrap-anywhere font-semibold">
                {L(item.label)}
              </p>
              {item.detail && (
                <p dir="auto" className="text-supporting wrap-anywhere mt-0.5">
                  {L(item.detail)}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (variant === "comparison") {
    return (
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, i) => (
          <div key={i} className={cn("rounded-[var(--radius-control)] border p-3", TONE_BG[item.tone ?? "neutral"])}>
            <p dir="auto" className="wrap-anywhere text-sm font-bold">
              {L(item.label)}
            </p>
            {item.detail && (
              <p dir="auto" className="wrap-anywhere mt-1 text-xs leading-relaxed">
                {L(item.detail)}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (variant === "timeline") {
    return (
      <ol className="relative ms-3 space-y-5 border-s-2 border-[var(--border)] ps-5">
        {items.map((item, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden="true"
              className="absolute -start-[1.6rem] top-1 h-3 w-3 rounded-full border-2 border-[var(--surface)] bg-[var(--color-brand)]"
            />
            <p dir="auto" className="wrap-anywhere font-semibold">
              {L(item.label)}
            </p>
            {item.detail && (
              <p dir="auto" className="text-supporting wrap-anywhere mt-0.5">
                {L(item.detail)}
              </p>
            )}
          </li>
        ))}
      </ol>
    );
  }

  // scale
  return (
    <div className="flex items-stretch gap-2 overflow-x-auto pb-1">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "min-w-[7rem] flex-1 rounded-[var(--radius-control)] border p-2.5 text-center",
            TONE_BG[item.tone ?? "neutral"],
          )}
        >
          <p dir="auto" className="wrap-anywhere text-xs font-bold">
            {L(item.label)}
          </p>
          {item.detail && (
            <p dir="auto" className="wrap-anywhere mt-1 text-[11px] leading-snug">
              {L(item.detail)}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Activity step — owns the local vs. AI grading flow
// ---------------------------------------------------------------------------

function ActivityStepView({
  activity,
  unitId,
  locale,
  onResult,
  onMasteryChange,
  onAdvance,
}: {
  activity: Activity;
  unitId: string;
  locale: Locale;
  onResult: (result: UnitResult) => void;
  onMasteryChange: (change: MasteryChange) => void;
  onAdvance: () => void;
}) {
  const { dict } = useI18n();
  const [submitting, setSubmitting] = React.useState(false);
  const [aiOutcome, setAiOutcome] = React.useState<SubmitActivityResult | null>(null);

  function handleSubmitted(outcome: ActivityOutcome) {
    if (outcome.grade) {
      onResult({ score: outcome.grade.score, maxScore: outcome.grade.maxScore, kind: activity.kind });
      submitActivity({ unitId, activityId: activity.id, response: outcome.response, locale })
        .then((result) => {
          if (result.levelChanged && result.newLevel !== undefined) {
            onMasteryChange({ skillId: activity.skillId, newLevel: result.newLevel });
          }
        })
        .catch(() => {});
      return;
    }

    setSubmitting(true);
    submitActivity({ unitId, activityId: activity.id, response: outcome.response, locale })
      .then((result) => {
        setAiOutcome(result);
        onResult({ score: result.score ?? 0, maxScore: result.maxScore ?? 1, kind: activity.kind });
        if (result.levelChanged && result.newLevel !== undefined) {
          onMasteryChange({ skillId: activity.skillId, newLevel: result.newLevel });
        }
      })
      .catch(() => {
        // The activity stays "submitted" in the player; the learner can still
        // continue — their answer is not lost, only the score display is.
        setAiOutcome({ kind: "queued_for_ai" });
      })
      .finally(() => setSubmitting(false));
  }

  const aiResultNode = submitting ? (
    <AiThinking title={dict.activity.evaluating} hint={dict.activity.evaluatingHint} />
  ) : aiOutcome && aiOutcome.score !== undefined && aiOutcome.maxScore !== undefined ? (
    <div className="space-y-2">
      <Callout tone={aiOutcome.passed ? "positive" : "warning"} title={aiOutcome.passed ? dict.unit.correct : dict.unit.partial}>
        <span className="num">
          {aiOutcome.score} / {aiOutcome.maxScore}
        </span>
      </Callout>
      {aiOutcome.pendingReview && <Callout tone="warning">{dict.unit.pendingReview}</Callout>}
      {aiOutcome.degraded && <Callout tone="warning">{dict.feedback.degraded}</Callout>}
      <a href="#" className="text-sm font-semibold text-[var(--color-brand)] underline underline-offset-4">
        {dict.feedback.title}
      </a>
    </div>
  ) : null;

  return (
    <ActivityPlayer
      activity={activity}
      onSubmitted={handleSubmitted}
      onContinue={onAdvance}
      submitting={submitting}
      aiResult={aiResultNode}
    />
  );
}

// ---------------------------------------------------------------------------
// Summary step
// ---------------------------------------------------------------------------

function SummaryStepView({ step, unit, locale }: { step: Extract<UnitStep, { kind: "summary" }>; unit: UnitDef; locale: Locale }) {
  const { dict } = useI18n();
  const L = useLocalized();
  const [saved, setSaved] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const card = unit.summaryCard;
  if (!card || card.id !== step.summaryCardId) {
    return <EmptyState title={dict.errors.notFound} body={dict.errors.notFoundBody} />;
  }

  const whatYouLearned = pickBlocks(card.whatYouLearned, locale);

  async function handleSave() {
    setSaving(true);
    try {
      await saveSummaryCard(card.id, unit.id);
      setSaved(true);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-label">{dict.unit.summary}</p>
      <Card>
        <CardHeader>
          <CardTitle>{L(card.title)}</CardTitle>
        </CardHeader>
        <CardBody className="space-y-4">
          <ul className="space-y-2">
            {whatYouLearned.map((line, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0 text-[var(--color-brand)]">
                  <CheckIcon size={16} />
                </span>
                <span dir="auto" className="wrap-anywhere text-sm leading-relaxed">
                  {line}
                </span>
              </li>
            ))}
          </ul>

          <div>
            <p dir="auto" className="wrap-anywhere text-sm font-bold">
              {L(card.framework.name)}
            </p>
            <ol className="mt-2 list-decimal space-y-1.5 ps-5">
              {card.framework.steps.map((s, i) => (
                <li key={i} dir="auto" className="wrap-anywhere text-sm leading-relaxed">
                  {L(s)}
                </li>
              ))}
            </ol>
          </div>

          <Callout tone="info">
            <p dir="auto" className="wrap-anywhere">
              {L(card.rememberThis)}
            </p>
          </Callout>

          <Callout tone="brand" title={dict.unit.applyTomorrow} icon={<SparkIcon size={16} />}>
            <p dir="auto" className="wrap-anywhere">
              {L(card.useItTomorrow)}
            </p>
          </Callout>

          {card.phrases && card.phrases.length > 0 && (
            <div className="space-y-2">
              {card.phrases.map((phrase, i) => (
                <div key={i} className="rounded-[var(--radius-control)] border border-[var(--border)] bg-[var(--surface-muted)] p-3">
                  <div className="flex items-start justify-between gap-2">
                    <p dir="ltr" lang="en" className="wrap-anywhere text-sm font-semibold">
                      {phrase.en}
                    </p>
                    <Badge tone="neutral" className="shrink-0 capitalize">
                      {phrase.register}
                    </Badge>
                  </div>
                  <p dir="auto" className="text-supporting wrap-anywhere mt-1">
                    {phrase.ar}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardBody>
        <CardFooter>
          <Button variant={saved ? "secondary" : "primary"} block disabled={saved} loading={saving} onClick={() => void handleSave()}>
            {saved ? dict.unit.cardSaved : dict.unit.saveCard}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Completion screen
// ---------------------------------------------------------------------------

function CompletionScreen({
  summary,
  masteryChanges,
  skillNames,
  returnHref,
  nextUnitHref,
}: {
  summary: { score: number; maxScore: number; passed: boolean };
  masteryChanges: MasteryChange[];
  skillNames: Record<string, Localized>;
  returnHref: string;
  nextUnitHref: string | null;
}) {
  const { dict, t } = useI18n();
  const L = useLocalized();

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-5 px-6 py-10">
      <ScoreRing
        value={summary.score}
        max={summary.maxScore}
        label={dict.unit.completeTitle}
        caption={t(dict.unit.completeScore, { score: summary.score, max: summary.maxScore })}
      />
      <h1 className="text-page-title text-center">{dict.unit.completeTitle}</h1>

      {masteryChanges.length > 0 && (
        <div className="w-full max-w-xs space-y-2">
          {masteryChanges.map((change) => (
            <Callout key={change.skillId} tone="positive" icon={<SparkIcon size={18} />}>
              <span dir="auto" className="wrap-anywhere">
                {t(dict.unit.masteryUp, {
                  skill: skillNames[change.skillId] ? L(skillNames[change.skillId]!) : change.skillId,
                  level: dict.progress.masteryLevels[levelKey(change.newLevel)],
                })}
              </span>
            </Callout>
          ))}
        </div>
      )}

      <div className="flex w-full max-w-xs flex-col gap-3">
        {nextUnitHref && (
          <LinkButton variant="primary" block href={nextUnitHref}>
            {dict.unit.nextUnit}
          </LinkButton>
        )}
        <LinkButton variant={nextUnitHref ? "secondary" : "primary"} block href={returnHref}>
          {dict.unit.backToPath}
        </LinkButton>
      </div>
    </div>
  );
}
