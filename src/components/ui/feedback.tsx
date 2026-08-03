import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertIcon, CheckIcon, InfoIcon } from "./icons";

/** Skeletons, not spinners — an empty page that reflows is worse than a slow one. */
export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("skeleton", className)} aria-hidden="true" />;
}

export function SkeletonCard() {
  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <Skeleton className="h-3.5 w-24" />
      <Skeleton className="mt-3 h-5 w-3/4" />
      <Skeleton className="mt-2 h-4 w-1/2" />
      <Skeleton className="mt-4 h-11 w-full rounded-[var(--radius-control)]" />
    </div>
  );
}

export function LoadingRegion({ label }: { label: string }) {
  return (
    <div role="status" aria-live="polite" className="space-y-3">
      <span className="sr-only">{label}</span>
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

export function EmptyState({
  title,
  body,
  action,
  icon,
}: {
  title: string;
  body?: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-[var(--radius-card)] border border-dashed border-[var(--border-strong)] bg-[var(--surface-soft)] px-5 py-9 text-center">
      {icon && <span className="text-[var(--foreground-muted)]">{icon}</span>}
      <p className="text-section-title">{title}</p>
      {body && <p className="text-supporting max-w-sm">{body}</p>}
      {action}
    </div>
  );
}

export function ErrorState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: React.ReactNode;
}) {
  return (
    <div
      role="alert"
      className="rounded-[var(--radius-card)] border border-[var(--color-negative-tint)] bg-[var(--color-negative-tint)] p-4"
    >
      <p className="flex items-center gap-2 font-semibold text-[var(--color-negative)]">
        <AlertIcon size={18} />
        {title}
      </p>
      <p className="text-supporting mt-1 text-[var(--foreground-secondary)]">{body}</p>
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}

type CalloutTone = "info" | "positive" | "warning" | "negative" | "brand";

const CALLOUT: Record<CalloutTone, { wrap: string; text: string }> = {
  info: { wrap: "bg-[var(--color-info-tint)] border-[var(--color-info-tint)]", text: "text-[var(--color-info)]" },
  positive: {
    wrap: "bg-[var(--color-positive-tint)] border-[var(--color-positive-tint)]",
    text: "text-[var(--color-positive)]",
  },
  warning: {
    wrap: "bg-[var(--color-warning-tint)] border-[var(--color-warning-tint)]",
    text: "text-[var(--color-warning)]",
  },
  negative: {
    wrap: "bg-[var(--color-negative-tint)] border-[var(--color-negative-tint)]",
    text: "text-[var(--color-negative)]",
  },
  brand: { wrap: "bg-[var(--color-brand-tint)] border-[var(--color-brand-tint)]", text: "text-[var(--color-brand)]" },
};

export function Callout({
  tone = "info",
  title,
  children,
  icon,
}: {
  tone?: CalloutTone;
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  const styles = CALLOUT[tone];
  const defaultIcon =
    tone === "positive" ? <CheckIcon size={18} /> : tone === "info" || tone === "brand" ? <InfoIcon size={18} /> : <AlertIcon size={18} />;
  return (
    <div className={cn("rounded-[var(--radius-control)] border p-3.5", styles.wrap)}>
      <div className={cn("flex items-start gap-2", styles.text)}>
        <span className="mt-0.5 shrink-0">{icon ?? defaultIcon}</span>
        <div className="min-w-0 flex-1">
          {title && <p className="font-semibold leading-tight">{title}</p>}
          <div className={cn("wrap-anywhere text-sm leading-relaxed", title && "mt-1", "text-[var(--foreground-secondary)]")}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
