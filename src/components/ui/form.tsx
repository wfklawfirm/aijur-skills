"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Every field routes through `Field`, which owns the id and wires `htmlFor`,
 * `aria-describedby` and `aria-invalid`. A visually-styled label with no
 * programmatic pairing is the single most common real accessibility miss in
 * hand-built forms — this makes it impossible to forget.
 */
export function Field({
  label,
  hint,
  error,
  required,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: (props: {
    id: string;
    "aria-describedby": string | undefined;
    "aria-invalid": boolean | undefined;
    "aria-required": boolean | undefined;
  }) => React.ReactNode;
}) {
  const id = React.useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-[var(--foreground)]">
        {label}
        {required && (
          <span aria-hidden="true" className="ms-1 text-[var(--color-negative)]">
            *
          </span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="text-supporting">
          {hint}
        </p>
      )}
      {children({
        id,
        "aria-describedby": describedBy,
        "aria-invalid": error ? true : undefined,
        "aria-required": required || undefined,
      })}
      {error && (
        <p id={errorId} role="alert" className="text-sm font-medium text-[var(--color-negative)]">
          {error}
        </p>
      )}
    </div>
  );
}

// text-base (16px), not the app's usual text-[0.9375rem] (15px): iOS Safari
// (and the same WebKit engine inside the native app's WKWebView) auto-zooms
// the whole page on focus of any text input/textarea/select computed under
// 16px -- a jarring, native-app-breaking zoom the brief explicitly calls
// out (§21). This is the one place the app intentionally departs from its
// usual control text size, for every text input, textarea, and select.
const CONTROL =
  "w-full min-h-11 rounded-[var(--radius-control)] border border-[var(--border-strong)] bg-[var(--surface)] px-3.5 py-2.5 text-base text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] transition-colors focus:border-[var(--color-brand)] aria-[invalid=true]:border-[var(--color-negative)]";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...rest }, ref) {
    return <input ref={ref} className={cn(CONTROL, className)} {...rest} />;
  },
);

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, ...rest }, ref) {
  return (
    <textarea
      ref={ref}
      // dir="auto" so a learner answering in English inside an Arabic UI (or the
      // reverse) gets their own text laid out correctly.
      dir="auto"
      className={cn(CONTROL, "min-h-32 resize-y leading-relaxed", className)}
      {...rest}
    />
  );
});

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className, ...rest }, ref) {
  return <select ref={ref} className={cn(CONTROL, "pe-9", className)} {...rest} />;
});

/**
 * Radio/checkbox group rendered as large tappable rows. Uses real inputs so
 * keyboard, screen readers and form semantics all work; the visual state is
 * driven off `:checked` via peer styling rather than JS.
 */
export function ChoiceGroup({
  legend,
  hint,
  multiple,
  name,
  options,
  value,
  onChange,
  disabled,
}: {
  legend: string;
  hint?: string;
  multiple?: boolean;
  name: string;
  options: { value: string; label: React.ReactNode; description?: React.ReactNode }[];
  value: string[];
  onChange: (next: string[]) => void;
  disabled?: boolean;
}) {
  function toggle(v: string) {
    if (multiple) {
      onChange(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);
    } else {
      onChange([v]);
    }
  }

  return (
    <fieldset disabled={disabled} className="min-w-0">
      <legend className="block text-sm font-semibold text-[var(--foreground)]">{legend}</legend>
      {hint && <p className="text-supporting mt-1">{hint}</p>}
      <div className="mt-3 space-y-2">
        {options.map((opt) => {
          const checked = value.includes(opt.value);
          return (
            <label
              key={opt.value}
              className={cn(
                "flex min-h-11 cursor-pointer items-start gap-3 rounded-[var(--radius-control)] border p-3.5 transition-colors",
                checked
                  ? "border-[var(--color-brand)] bg-[var(--color-brand-tint)]"
                  : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-muted)]",
              )}
            >
              <input
                type={multiple ? "checkbox" : "radio"}
                name={name}
                value={opt.value}
                checked={checked}
                onChange={() => toggle(opt.value)}
                className="mt-1 h-4.5 w-4.5 shrink-0 accent-[var(--color-brand)]"
              />
              <span className="min-w-0 flex-1">
                <span dir="auto" className="block wrap-anywhere text-[0.9375rem] font-medium leading-snug">
                  {opt.label}
                </span>
                {opt.description && (
                  <span dir="auto" className="text-supporting mt-1 block wrap-anywhere">
                    {opt.description}
                  </span>
                )}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function SegmentedControl({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className="inline-flex rounded-[var(--radius-pill)] border border-[var(--border)] bg-[var(--surface-muted)] p-1"
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt.value)}
            className={cn(
              "min-h-9 rounded-[var(--radius-pill)] px-3.5 text-sm font-semibold transition-colors",
              active
                ? "bg-[var(--surface)] text-[var(--foreground)] shadow-[var(--shadow-sm)]"
                : "text-[var(--foreground-muted)]",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export function Toggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (next: boolean) => void;
}) {
  const id = React.useId();
  const descId = description ? `${id}-desc` : undefined;
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <div className="min-w-0">
        <label htmlFor={id} className="block text-[0.9375rem] font-medium">
          {label}
        </label>
        {description && (
          <p id={descId} className="text-supporting mt-0.5">
            {description}
          </p>
        )}
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-describedby={descId}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors",
          // The 44px target is provided by padding on the hit area, not the track.
          "before:absolute before:-inset-2.5 before:content-['']",
          checked ? "bg-[var(--color-brand)]" : "bg-[var(--border-strong)]",
        )}
      >
        <span
          className={cn(
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transition-transform",
            checked ? "translate-x-6 rtl:-translate-x-6" : "translate-x-1 rtl:-translate-x-1",
          )}
        />
      </button>
    </div>
  );
}
