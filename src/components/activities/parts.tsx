"use client";

import * as React from "react";
import { cn, seededShuffle } from "@/lib/utils";
import { useI18n, useLocalized } from "@/components/providers";
import { Button, IconButton } from "@/components/ui/button";
import { ArrowDownIcon, ArrowUpIcon, CheckIcon, XIcon } from "@/components/ui/icons";
import type { ChoiceOption, Localized } from "@content/types";

/** Shared shell: prompt, optional context, the interaction, then the rationale. */
export function ActivityFrame({
  kindLabel,
  prompt,
  context,
  hint,
  showHint,
  onShowHint,
  children,
}: {
  kindLabel: string;
  prompt: string;
  context?: string[];
  hint?: string;
  showHint?: boolean;
  onShowHint?: () => void;
  children: React.ReactNode;
}) {
  const { dict } = useI18n();
  return (
    <div className="space-y-4">
      <p className="text-label">{kindLabel}</p>
      {context && context.length > 0 && (
        <div className="rounded-[var(--radius-control)] border-s-4 border-[var(--color-brand-light)] bg-[var(--surface-muted)] p-3.5">
          {context.map((block, i) => (
            <p key={i} dir="auto" className="wrap-anywhere text-[0.9375rem] leading-relaxed [&+p]:mt-2">
              {block}
            </p>
          ))}
        </div>
      )}
      <p dir="auto" className="wrap-anywhere text-[1.0625rem] font-semibold leading-snug">
        {prompt}
      </p>
      {children}
      {hint &&
        (showHint ? (
          <p className="rounded-[var(--radius-control)] bg-[var(--color-info-tint)] p-3 text-sm text-[var(--color-info)]">
            <span className="font-semibold">{dict.unit.hint}: </span>
            <span dir="auto">{hint}</span>
          </p>
        ) : (
          <Button variant="ghost" size="sm" onClick={onShowHint}>
            {dict.unit.showHint}
          </Button>
        ))}
    </div>
  );
}

export function Rationale({
  tone,
  label,
  text,
}: {
  tone: "correct" | "incorrect" | "neutral";
  label?: string;
  text: string;
}) {
  const styles =
    tone === "correct"
      ? "border-[var(--color-positive)] bg-[var(--color-positive-tint)] text-[var(--color-positive)]"
      : tone === "incorrect"
        ? "border-[var(--color-negative)] bg-[var(--color-negative-tint)] text-[var(--color-negative)]"
        : "border-[var(--border-strong)] bg-[var(--surface-muted)] text-[var(--foreground-secondary)]";
  return (
    <div className={cn("mt-2 rounded-[var(--radius-control)] border-s-4 p-3", styles)}>
      {label && (
        <p className="flex items-center gap-1.5 text-sm font-bold">
          {tone === "correct" ? <CheckIcon size={16} /> : tone === "incorrect" ? <XIcon size={16} /> : null}
          {label}
        </p>
      )}
      <p dir="auto" className="wrap-anywhere mt-1 text-sm leading-relaxed text-[var(--foreground-secondary)]">
        {text}
      </p>
    </div>
  );
}

/**
 * Options list for every choice-shaped activity. Correctness is signalled by
 * an icon, a border, a background *and* a written label — never colour alone.
 */
export function OptionList({
  options,
  multiple,
  selected,
  onSelect,
  submitted,
  revealIds,
  seed,
}: {
  options: ChoiceOption[];
  multiple: boolean;
  selected: string[];
  onSelect: (next: string[]) => void;
  submitted: boolean;
  revealIds: string[];
  seed: string;
}) {
  const { dict } = useI18n();
  const L = useLocalized();
  // Shuffled once per activity id: stable across renders, retries and devices.
  const ordered = React.useMemo(() => seededShuffle(options, seed), [options, seed]);

  return (
    <ul className="space-y-2">
      {ordered.map((option) => {
        const isSelected = selected.includes(option.id);
        const reveal = submitted && revealIds.includes(option.id);
        const isCorrect = Boolean(option.correct);
        return (
          <li key={option.id}>
            <button
              type="button"
              disabled={submitted}
              aria-pressed={isSelected}
              onClick={() =>
                onSelect(
                  multiple
                    ? isSelected
                      ? selected.filter((id) => id !== option.id)
                      : [...selected, option.id]
                    : [option.id],
                )
              }
              className={cn(
                "flex w-full min-h-11 items-start gap-3 rounded-[var(--radius-control)] border p-3.5 text-start transition-colors",
                !submitted && isSelected && "border-[var(--color-brand)] bg-[var(--color-brand-tint)]",
                !submitted && !isSelected && "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-muted)]",
                submitted && isCorrect && "border-[var(--color-positive)] bg-[var(--color-positive-tint)]",
                submitted && !isCorrect && isSelected && "border-[var(--color-negative)] bg-[var(--color-negative-tint)]",
                submitted && !isCorrect && !isSelected && "border-[var(--border)] bg-[var(--surface)] opacity-70",
                submitted && "cursor-default",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "mt-0.5 grid h-5 w-5 shrink-0 place-items-center border",
                  multiple ? "rounded-[5px]" : "rounded-full",
                  isSelected || (submitted && isCorrect)
                    ? "border-transparent bg-[var(--color-brand)] text-white"
                    : "border-[var(--border-strong)]",
                  submitted && isCorrect && "bg-[var(--color-positive)]",
                  submitted && !isCorrect && isSelected && "bg-[var(--color-negative)]",
                )}
              >
                {submitted ? (
                  isCorrect ? (
                    <CheckIcon size={14} />
                  ) : isSelected ? (
                    <XIcon size={14} />
                  ) : null
                ) : isSelected ? (
                  <CheckIcon size={14} />
                ) : null}
              </span>
              <span className="min-w-0 flex-1">
                <span dir="auto" className="wrap-anywhere block text-[0.9375rem] leading-snug">
                  {L(option.label)}
                </span>
                {submitted && (
                  <span className="sr-only">
                    {isCorrect ? dict.a11y.correctLabel : dict.a11y.incorrectLabel}
                  </span>
                )}
              </span>
            </button>
            {reveal && (
              <Rationale
                tone={isCorrect ? "correct" : "incorrect"}
                label={isCorrect ? dict.unit.correct : isSelected ? dict.unit.incorrect : undefined}
                text={L(option.rationale)}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Reorderable list.
 *
 * Move-up / move-down buttons are the *primary* interaction, not a fallback:
 * they work with a keyboard, a screen reader, a switch device and one thumb,
 * and they never lose an item behind the on-screen keyboard. Pointer dragging
 * is layered on top for people who want it.
 */
export function OrderableList({
  items,
  order,
  onReorder,
  submitted,
  wrongPositions,
  seed,
}: {
  items: { id: string; label: Localized; rationale?: Localized }[];
  order: string[];
  onReorder: (next: string[]) => void;
  submitted: boolean;
  wrongPositions?: number[];
  seed: string;
}) {
  const { dict } = useI18n();
  const L = useLocalized();
  const byId = React.useMemo(() => new Map(items.map((i) => [i.id, i])), [items]);
  const current = order.length ? order : seededShuffle(items.map((i) => i.id), seed);

  function move(index: number, delta: number) {
    const next = [...current];
    const target = index + delta;
    if (target < 0 || target >= next.length) return;
    const a = next[index]!;
    const b = next[target]!;
    next[index] = b;
    next[target] = a;
    onReorder(next);
  }

  return (
    <ol className="space-y-2">
      {current.map((id, index) => {
        const item = byId.get(id);
        if (!item) return null;
        const wrong = submitted && wrongPositions?.includes(index);
        const right = submitted && !wrong;
        return (
          <li
            key={id}
            className={cn(
              "flex items-center gap-2 rounded-[var(--radius-control)] border bg-[var(--surface)] p-2.5",
              right && "border-[var(--color-positive)] bg-[var(--color-positive-tint)]",
              wrong && "border-[var(--color-negative)] bg-[var(--color-negative-tint)]",
              !submitted && "border-[var(--border)]",
            )}
          >
            <span className="num grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--surface-muted)] text-sm font-bold">
              {index + 1}
            </span>
            <span dir="auto" className="wrap-anywhere min-w-0 flex-1 text-[0.9375rem] leading-snug">
              {L(item.label)}
            </span>
            {!submitted && (
              <span className="flex shrink-0 items-center gap-1">
                <IconButton
                  label={dict.common.moveUp}
                  disabled={index === 0}
                  onClick={() => move(index, -1)}
                >
                  <ArrowUpIcon size={17} />
                </IconButton>
                <IconButton
                  label={dict.common.moveDown}
                  disabled={index === current.length - 1}
                  onClick={() => move(index, 1)}
                >
                  <ArrowDownIcon size={17} />
                </IconButton>
              </span>
            )}
          </li>
        );
      })}
      {submitted && (
        <li className="pt-1">
          {items.map((item) =>
            item.rationale ? (
              <Rationale key={item.id} tone="neutral" label={L(item.label)} text={L(item.rationale)} />
            ) : null,
          )}
        </li>
      )}
    </ol>
  );
}

/** Tap-an-item then tap-a-bucket. No drag required, no precision required. */
export function BucketSorter({
  buckets,
  items,
  assignments,
  onAssign,
  submitted,
  seed,
}: {
  buckets: { id: string; label: Localized }[];
  items: { id: string; label: Localized; bucketId: string; rationale: Localized }[];
  assignments: Record<string, string>;
  onAssign: (next: Record<string, string>) => void;
  submitted: boolean;
  seed: string;
}) {
  const { dict } = useI18n();
  const L = useLocalized();
  const [active, setActive] = React.useState<string | null>(null);
  const ordered = React.useMemo(() => seededShuffle(items, seed), [items, seed]);
  const unassigned = ordered.filter((i) => !assignments[i.id]);

  return (
    <div className="space-y-4">
      {!submitted && (
        <div>
          <p className="text-label mb-2">{dict.activity.unassigned}</p>
          <div className="flex flex-wrap gap-2">
            {unassigned.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={active === item.id}
                onClick={() => setActive(active === item.id ? null : item.id)}
                className={cn(
                  "min-h-11 rounded-[var(--radius-control)] border px-3 py-2 text-start text-sm",
                  active === item.id
                    ? "border-[var(--color-brand)] bg-[var(--color-brand-tint)]"
                    : "border-[var(--border-strong)] bg-[var(--surface)]",
                )}
              >
                <span dir="auto" className="wrap-anywhere">
                  {L(item.label)}
                </span>
              </button>
            ))}
            {unassigned.length === 0 && <p className="text-supporting">{dict.common.done}</p>}
          </div>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {buckets.map((bucket) => {
          const inBucket = ordered.filter((i) => assignments[i.id] === bucket.id);
          return (
            <div
              key={bucket.id}
              className="rounded-[var(--radius-control)] border border-dashed border-[var(--border-strong)] bg-[var(--surface-soft)] p-3"
            >
              <div className="flex items-center justify-between gap-2">
                <p dir="auto" className="text-sm font-semibold">
                  {L(bucket.label)}
                </p>
                {!submitted && active && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      onAssign({ ...assignments, [active]: bucket.id });
                      setActive(null);
                    }}
                  >
                    {dict.activity.dropHere}
                  </Button>
                )}
              </div>
              <ul className="mt-2 space-y-1.5">
                {inBucket.map((item) => {
                  const correct = item.bucketId === bucket.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        disabled={submitted}
                        onClick={() => {
                          const next = { ...assignments };
                          delete next[item.id];
                          onAssign(next);
                        }}
                        className={cn(
                          "w-full min-h-11 rounded-[var(--radius-control)] border p-2.5 text-start text-sm",
                          submitted && correct && "border-[var(--color-positive)] bg-[var(--color-positive-tint)]",
                          submitted && !correct && "border-[var(--color-negative)] bg-[var(--color-negative-tint)]",
                          !submitted && "border-[var(--border)] bg-[var(--surface)]",
                        )}
                      >
                        <span dir="auto" className="wrap-anywhere">
                          {L(item.label)}
                        </span>
                        {submitted && (
                          <span className="sr-only">
                            {correct ? dict.a11y.correctLabel : dict.a11y.incorrectLabel}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {submitted && (
        <div>
          {ordered
            .filter((i) => assignments[i.id] !== i.bucketId)
            .map((item) => (
              <Rationale key={item.id} tone="incorrect" label={L(item.label)} text={L(item.rationale)} />
            ))}
        </div>
      )}
    </div>
  );
}
