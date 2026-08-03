"use client";

import * as React from "react";
import type { Activity, Localized } from "@content/types";
import { cn, seededShuffle } from "@/lib/utils";
import { gradeActivity, isSelfReported, requiresAiGrading, type GradeResult } from "@/lib/learning/grading";
import type { ActivityResponse } from "@/lib/learning/responses";
import { useI18n, useLocalized } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/feedback";
import { MicIcon, PlayIcon, SparkIcon } from "@/components/ui/icons";
import { SegmentedControl, Textarea } from "@/components/ui/form";
import { ActivityFrame, BucketSorter, OptionList, OrderableList, Rationale } from "./parts";

export interface ActivityOutcome {
  response: ActivityResponse;
  grade: GradeResult | null;
  /** Set for rubric-graded activities once the server responds. */
  evaluationId?: string;
}

/**
 * One player for every activity kind.
 *
 * Deterministic kinds are graded locally the instant the learner submits — so
 * feedback is immediate and works with no connection — and then posted to the
 * server, which re-grades authoritatively. Written work goes straight to the
 * evaluation endpoint. Either way the learner sees *why*, never just a mark.
 */
export function ActivityPlayer({
  activity,
  onSubmitted,
  onContinue,
  submitting,
  aiResult,
}: {
  activity: Activity;
  onSubmitted: (outcome: ActivityOutcome) => void;
  onContinue: () => void;
  submitting?: boolean;
  /** Rendered under a written activity once the server has assessed it. */
  aiResult?: React.ReactNode;
}) {
  const { dict, t } = useI18n();
  const L = useLocalized();

  const [selected, setSelected] = React.useState<string[]>([]);
  const [order, setOrder] = React.useState<string[]>([]);
  const [assignments, setAssignments] = React.useState<Record<string, string>>({});
  const [pairs, setPairs] = React.useState<Record<string, string>>({});
  const [blanks, setBlanks] = React.useState<Record<string, number>>({});
  const [text, setText] = React.useState("");
  const [branchPath, setBranchPath] = React.useState<string[]>([]);
  const [branchNode, setBranchNode] = React.useState<string | null>(null);
  const [selfRating, setSelfRating] = React.useState(2);
  const [showTranscript, setShowTranscript] = React.useState(false);
  const [hintShown, setHintShown] = React.useState(false);
  const [grade, setGrade] = React.useState<GradeResult | null>(null);
  const [submitted, setSubmitted] = React.useState(false);

  const kindLabel = dict.activity[activity.kind];
  const context = activity.context ? L({ ar: "", en: "" }) : undefined; // placeholder, replaced below
  void context;
  const contextBlocks = activity.context
    ? (activity.context as { ar: string[]; en: string[] })[useI18n().locale === "en" ? "en" : "ar"]
    : undefined;

  function buildResponse(): ActivityResponse | null {
    switch (activity.kind) {
      case "multiple_choice":
      case "multiple_select":
      case "true_false":
      case "best_response":
      case "find_mistake":
      case "listening":
        return selected.length ? { selected } : null;
      case "ordering":
      case "priority_ranking":
        return { order: order.length ? order : seededShuffle(activity.items.map((i) => i.id), activity.id) };
      case "categorization":
      case "swipe_classify":
        return Object.keys(assignments).length === activity.items.length ? { assignments } : null;
      case "matching":
        return Object.keys(pairs).length === activity.pairs.length ? { pairs } : null;
      case "fill_blank":
        return Object.keys(blanks).length === activity.blanks.length ? { answers: blanks } : null;
      case "branching_decision":
        return branchPath.length ? { path: branchPath } : null;
      case "short_written":
      case "email_rewrite":
      case "reflection":
        return text.trim().length >= (("minChars" in activity && activity.minChars) || 1) ? { text } : null;
      case "pronunciation":
        return { selfRating, attempted: true };
    }
  }

  const response = buildResponse();
  const canSubmit = response !== null && !submitted && !submitting;

  function submit() {
    if (!response) return;
    setSubmitted(true);
    if (requiresAiGrading(activity)) {
      onSubmitted({ response, grade: null });
      return;
    }
    const result = gradeActivity(activity, response);
    setGrade(result);
    onSubmitted({ response, grade: result });
  }

  const verdictBanner = grade && (
    <Callout
      tone={grade.verdict === "correct" ? "positive" : grade.verdict === "partial" ? "warning" : "negative"}
      title={
        grade.verdict === "correct"
          ? dict.unit.correct
          : grade.verdict === "partial"
            ? dict.unit.partial
            : dict.unit.incorrect
      }
    >
      <span className="num">
        {grade.score} / {grade.maxScore}
      </span>
    </Callout>
  );

  return (
    <ActivityFrame
      kindLabel={kindLabel}
      prompt={L(activity.prompt)}
      context={contextBlocks}
      hint={activity.hint ? L(activity.hint) : undefined}
      showHint={hintShown}
      onShowHint={() => setHintShown(true)}
    >
      {renderBody()}

      {activity.accessibleAlternative && !submitted && (
        <p className="text-supporting">{L(activity.accessibleAlternative)}</p>
      )}

      {verdictBanner}
      {aiResult}

      <div className="sticky bottom-0 -mx-4 border-t border-[var(--border)] bg-[var(--background)]/95 px-4 py-3 backdrop-blur safe-bottom">
        {submitted ? (
          <Button variant="primary" block onClick={onContinue} loading={submitting}>
            {dict.common.continue}
          </Button>
        ) : (
          <Button variant="primary" block disabled={!canSubmit} onClick={submit} loading={submitting}>
            {isSelfReported(activity) ? dict.common.continue : dict.common.check}
          </Button>
        )}
      </div>
    </ActivityFrame>
  );

  function renderBody() {
    switch (activity.kind) {
      case "multiple_choice":
      case "multiple_select":
      case "true_false":
      case "best_response":
      case "find_mistake":
        return (
          <OptionList
            options={activity.options}
            multiple={activity.kind === "multiple_select"}
            selected={selected}
            onSelect={setSelected}
            submitted={submitted}
            revealIds={grade?.revealIds ?? []}
            seed={activity.id}
          />
        );

      case "listening":
        return (
          <div className="space-y-3">
            <AudioPrompt script={L(activity.script)} audioUrl={activity.audioUrl} />
            <button
              type="button"
              onClick={() => setShowTranscript((v) => !v)}
              className="text-sm font-semibold text-[var(--color-brand)] underline underline-offset-4"
            >
              {showTranscript ? dict.activity.hideTranscript : dict.activity.showTranscript}
            </button>
            {showTranscript && (
              <p dir="auto" className="wrap-anywhere rounded-[var(--radius-control)] bg-[var(--surface-muted)] p-3 text-sm">
                {L(activity.transcript)}
              </p>
            )}
            <OptionList
              options={activity.options}
              multiple={false}
              selected={selected}
              onSelect={setSelected}
              submitted={submitted}
              revealIds={grade?.revealIds ?? []}
              seed={activity.id}
            />
          </div>
        );

      case "ordering":
      case "priority_ranking":
        return (
          <OrderableList
            items={activity.items}
            order={order}
            onReorder={setOrder}
            submitted={submitted}
            wrongPositions={grade?.wrongPositions}
            seed={activity.id}
          />
        );

      case "categorization":
      case "swipe_classify":
        return (
          <BucketSorter
            buckets={activity.buckets}
            items={activity.items}
            assignments={assignments}
            onAssign={setAssignments}
            submitted={submitted}
            seed={activity.id}
          />
        );

      case "matching":
        return (
          <MatchingBody
            pairs={activity.pairs}
            value={pairs}
            onChange={setPairs}
            submitted={submitted}
            seed={activity.id}
          />
        );

      case "fill_blank":
        return (
          <FillBlankBody
            template={L(activity.template)}
            blanks={activity.blanks}
            value={blanks}
            onChange={setBlanks}
            submitted={submitted}
          />
        );

      case "branching_decision": {
        const nodeId = branchNode ?? activity.startNodeId;
        const node = activity.nodes.find((n) => n.id === nodeId);
        return (
          <div className="space-y-3">
            {branchPath.map((choiceId) => {
              const choice = activity.nodes.flatMap((n) => n.choices).find((c) => c.id === choiceId);
              if (!choice) return null;
              return (
                <Rationale
                  key={choiceId}
                  tone={
                    choice.quality === "strong"
                      ? "correct"
                      : choice.quality === "critical_mistake" || choice.quality === "weak"
                        ? "incorrect"
                        : "neutral"
                  }
                  label={L(choice.label)}
                  text={L(choice.rationale)}
                />
              );
            })}
            {node && !submitted && (
              <>
                <p dir="auto" className="wrap-anywhere rounded-[var(--radius-control)] bg-[var(--surface-muted)] p-3.5 text-[0.9375rem]">
                  {L(node.text)}
                </p>
                <ul className="space-y-2">
                  {node.choices.map((choice) => (
                    <li key={choice.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setBranchPath((p) => [...p, choice.id]);
                          setBranchNode(choice.nextNodeId);
                        }}
                        className="w-full min-h-11 rounded-[var(--radius-control)] border border-[var(--border)] bg-[var(--surface)] p-3.5 text-start text-[0.9375rem] hover:bg-[var(--surface-muted)]"
                      >
                        <span dir="auto" className="wrap-anywhere">
                          {L(choice.label)}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {!node && !submitted && (
              <p className="text-supporting">{t(dict.common.done)}</p>
            )}
          </div>
        );
      }

      case "pronunciation":
        return (
          <div className="space-y-4">
            <div className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
              <p className="text-page-title" dir="ltr" lang="en">
                {activity.target}
              </p>
              {activity.ipa && (
                <p className="text-supporting mt-1" dir="ltr">
                  {activity.ipa}
                </p>
              )}
              <p dir="auto" className="mt-2 text-sm">
                {L(activity.meaning)}
              </p>
              <p dir="ltr" lang="en" className="text-supporting mt-3 italic">
                {L(activity.exampleSentence)}
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <SpeakButton text={activity.target} label={dict.activity.playAudio} />
                <RecordButton label={dict.activity.record} stopLabel={dict.activity.stopRecording} deniedLabel={dict.activity.micDenied} />
              </div>
            </div>
            <Callout tone="info" title={dict.activity.selfRate}>
              {dict.activity.selfRateHint}
            </Callout>
            <SegmentedControl
              label={dict.activity.selfRate}
              value={String(selfRating)}
              onChange={(v) => setSelfRating(Number(v))}
              options={[
                { value: "1", label: dict.activity.selfRate1 },
                { value: "2", label: dict.activity.selfRate2 },
                { value: "3", label: dict.activity.selfRate3 },
              ]}
            />
          </div>
        );

      case "short_written":
      case "email_rewrite":
      case "reflection": {
        const minChars = "minChars" in activity ? (activity.minChars ?? 0) : 0;
        const remaining = Math.max(0, minChars - text.trim().length);
        const draft =
          activity.kind === "email_rewrite" && activity.draft
            ? (activity.draft as { ar: string[]; en: string[] })
            : null;
        return (
          <div className="space-y-3">
            {draft && (
              <div className="rounded-[var(--radius-control)] border border-[var(--border)] bg-[var(--surface-muted)] p-3.5">
                <p className="text-label mb-1.5">{dict.activity.draft}</p>
                {(useI18n().locale === "en" ? draft.en : draft.ar).map((line, i) => (
                  <p key={i} dir="auto" className="wrap-anywhere text-sm leading-relaxed [&+p]:mt-2">
                    {line}
                  </p>
                ))}
              </div>
            )}
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={submitted}
              placeholder={activity.kind === "email_rewrite" ? dict.activity.yourRewrite : undefined}
              aria-label={L(activity.prompt)}
            />
            {remaining > 0 && <p className="text-supporting num">{t(dict.activity.charactersLeft, { n: remaining })}</p>}
            {submitted && "modelAnswer" in activity && (
              <ModelAnswer activity={activity} />
            )}
          </div>
        );
      }
    }
  }
}

function ModelAnswer({ activity }: { activity: Extract<Activity, { kind: "short_written" | "email_rewrite" }> }) {
  const { dict, locale } = useI18n();
  const L = useLocalized();
  const model = locale === "en" ? activity.modelAnswer.en : activity.modelAnswer.ar;
  const weak = activity.weakAnswer;
  return (
    <div className="space-y-3">
      <div className="rounded-[var(--radius-control)] border-s-4 border-[var(--color-positive)] bg-[var(--color-positive-tint)] p-3.5">
        <p className="text-label mb-1.5 text-[var(--color-positive)]">{dict.unit.modelAnswer}</p>
        {model.map((line, i) => (
          <p key={i} dir="auto" className="wrap-anywhere text-sm leading-relaxed [&+p]:mt-2">
            {line}
          </p>
        ))}
      </div>
      {weak && (
        <div className="rounded-[var(--radius-control)] border-s-4 border-[var(--color-negative)] bg-[var(--color-negative-tint)] p-3.5">
          <p className="text-label mb-1.5 text-[var(--color-negative)]">{dict.unit.weakAnswerLabel}</p>
          {(locale === "en" ? weak.text.en : weak.text.ar).map((line, i) => (
            <p key={i} dir="auto" className="wrap-anywhere text-sm leading-relaxed [&+p]:mt-2">
              {line}
            </p>
          ))}
          <p dir="auto" className="mt-2 text-sm font-semibold text-[var(--color-negative)]">
            {L(weak.whatIsWrong)}
          </p>
        </div>
      )}
    </div>
  );
}

function MatchingBody({
  pairs,
  value,
  onChange,
  submitted,
  seed,
}: {
  pairs: { id: string; left: Localized; right: Localized; rationale?: Localized }[];
  value: Record<string, string>;
  onChange: (next: Record<string, string>) => void;
  submitted: boolean;
  seed: string;
}) {
  const L = useLocalized();
  const { dict } = useI18n();
  const rights = React.useMemo(() => seededShuffle(pairs, `${seed}-r`), [pairs, seed]);

  return (
    <ul className="space-y-2.5">
      {pairs.map((pair) => {
        const chosen = value[pair.id];
        const correct = submitted && chosen === pair.id;
        return (
          <li
            key={pair.id}
            className={cn(
              "rounded-[var(--radius-control)] border p-3",
              submitted && correct && "border-[var(--color-positive)] bg-[var(--color-positive-tint)]",
              submitted && !correct && "border-[var(--color-negative)] bg-[var(--color-negative-tint)]",
              !submitted && "border-[var(--border)] bg-[var(--surface)]",
            )}
          >
            <p dir="auto" className="wrap-anywhere text-[0.9375rem] font-medium">
              {L(pair.left)}
            </p>
            <select
              disabled={submitted}
              value={chosen ?? ""}
              onChange={(e) => onChange({ ...value, [pair.id]: e.target.value })}
              aria-label={L(pair.left)}
              className="mt-2 w-full min-h-11 rounded-[var(--radius-control)] border border-[var(--border-strong)] bg-[var(--surface)] px-3 text-sm"
            >
              <option value="">—</option>
              {rights.map((r) => (
                <option key={r.id} value={r.id}>
                  {L(r.right)}
                </option>
              ))}
            </select>
            {submitted && !correct && (
              <p className="mt-2 text-sm text-[var(--color-negative)]">
                <span className="font-semibold">{dict.unit.modelAnswer}: </span>
                <span dir="auto">{L(pair.right)}</span>
              </p>
            )}
            {submitted && pair.rationale && (
              <Rationale tone={correct ? "correct" : "incorrect"} text={L(pair.rationale)} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

function FillBlankBody({
  template,
  blanks,
  value,
  onChange,
  submitted,
}: {
  template: string;
  blanks: { id: string; options: Localized[]; answerIndex: number; rationale: Localized }[];
  value: Record<string, number>;
  onChange: (next: Record<string, number>) => void;
  submitted: boolean;
}) {
  const L = useLocalized();
  const parts = template.split(/(\{\{\d+\}\})/g);

  return (
    <div className="space-y-4">
      <p dir="auto" className="wrap-anywhere rounded-[var(--radius-control)] bg-[var(--surface-muted)] p-3.5 text-[0.9375rem] leading-loose">
        {parts.map((part, i) => {
          const match = part.match(/\{\{(\d+)\}\}/);
          if (!match) return <span key={i}>{part}</span>;
          const index = Number(match[1]);
          const blank = blanks[index];
          if (!blank) return <span key={i}>{part}</span>;
          const chosen = value[blank.id];
          const correct = submitted && chosen === blank.answerIndex;
          return (
            <span
              key={i}
              className={cn(
                "mx-1 inline-block rounded px-1.5 font-semibold",
                submitted && correct && "bg-[var(--color-positive-tint)] text-[var(--color-positive)]",
                submitted && !correct && "bg-[var(--color-negative-tint)] text-[var(--color-negative)]",
                !submitted && "bg-[var(--color-brand-tint)] text-[var(--color-brand)]",
              )}
            >
              {chosen === undefined ? "____" : L(blank.options[chosen] ?? { ar: "", en: "" })}
            </span>
          );
        })}
      </p>

      {blanks.map((blank, index) => (
        <fieldset key={blank.id} disabled={submitted}>
          <legend className="text-label mb-1.5 num">{index + 1}</legend>
          <div className="flex flex-wrap gap-2">
            {blank.options.map((opt, i) => {
              const chosen = value[blank.id] === i;
              const isAnswer = submitted && i === blank.answerIndex;
              return (
                <button
                  key={i}
                  type="button"
                  aria-pressed={chosen}
                  onClick={() => onChange({ ...value, [blank.id]: i })}
                  className={cn(
                    "min-h-11 rounded-[var(--radius-pill)] border px-3.5 text-sm font-medium",
                    isAnswer && "border-[var(--color-positive)] bg-[var(--color-positive-tint)] text-[var(--color-positive)]",
                    submitted && chosen && !isAnswer && "border-[var(--color-negative)] bg-[var(--color-negative-tint)] text-[var(--color-negative)]",
                    !submitted && chosen && "border-[var(--color-brand)] bg-[var(--color-brand-tint)]",
                    !submitted && !chosen && "border-[var(--border-strong)] bg-[var(--surface)]",
                  )}
                >
                  <span dir="auto">{L(opt)}</span>
                </button>
              );
            })}
          </div>
          {submitted && <Rationale tone={value[blank.id] === blank.answerIndex ? "correct" : "incorrect"} text={L(blank.rationale)} />}
        </fieldset>
      ))}
    </div>
  );
}

function AudioPrompt({ script, audioUrl }: { script: string; audioUrl?: string }) {
  const { dict } = useI18n();
  if (audioUrl) {
    return <audio controls src={audioUrl} className="w-full" aria-label={dict.activity.playAudio} />;
  }
  return <SpeakButton text={script} label={dict.activity.playAudio} block />;
}

/**
 * Speech synthesis via the browser. No audio files to host, no provider bill,
 * works offline, and every listening activity still carries a full transcript
 * so a learner who cannot use audio loses nothing.
 */
function SpeakButton({ text, label, block }: { text: string; label: string; block?: boolean }) {
  const { dict } = useI18n();
  const [supported, setSupported] = React.useState(true);

  React.useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
  }, []);

  if (!supported) return <p className="text-supporting">{dict.activity.speechUnsupported}</p>;

  return (
    <Button
      variant="secondary"
      block={block}
      onClick={() => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-GB";
        utterance.rate = 0.92;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      }}
    >
      <PlayIcon size={18} />
      {label}
    </Button>
  );
}

function RecordButton({
  label,
  stopLabel,
  deniedLabel,
}: {
  label: string;
  stopLabel: string;
  deniedLabel: string;
}) {
  const [state, setState] = React.useState<"idle" | "recording" | "denied">("idle");
  const streamRef = React.useRef<MediaStream | null>(null);

  React.useEffect(() => () => streamRef.current?.getTracks().forEach((t) => t.stop()), []);

  if (state === "denied") return <p className="text-supporting">{deniedLabel}</p>;

  return (
    <Button
      variant={state === "recording" ? "destructive" : "secondary"}
      onClick={async () => {
        if (state === "recording") {
          streamRef.current?.getTracks().forEach((t) => t.stop());
          streamRef.current = null;
          setState("idle");
          return;
        }
        try {
          streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
          setState("recording");
        } catch {
          // A denied microphone is a supported path, not an error state: the
          // activity is self-assessed anyway.
          setState("denied");
        }
      }}
    >
      <MicIcon size={18} />
      {state === "recording" ? stopLabel : label}
    </Button>
  );
}

export function AiThinking({ title, hint }: { title: string; hint: string }) {
  return (
    <Callout tone="brand" title={title} icon={<SparkIcon size={18} />}>
      {hint}
    </Callout>
  );
}
