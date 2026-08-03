import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  // The only variant that spends the brand colour. One per screen.
  primary:
    "bg-[var(--color-brand)] text-[var(--color-brand-contrast)] hover:bg-[var(--color-brand-dark)] active:bg-[var(--color-brand-active)] shadow-[var(--shadow-sm)]",
  secondary:
    "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border-strong)] hover:bg-[var(--surface-muted)] active:bg-[var(--surface-soft)] shadow-[var(--shadow-sm)]",
  outline:
    "bg-transparent text-[var(--foreground)] border border-[var(--border-strong)] hover:bg-[var(--surface-muted)]",
  ghost: "bg-transparent text-[var(--foreground-secondary)] hover:bg-[var(--surface-muted)]",
  destructive:
    "bg-[var(--color-negative)] text-white hover:brightness-110 active:brightness-95 shadow-[var(--shadow-sm)]",
};

const SIZES: Record<Size, string> = {
  sm: "text-sm px-3.5 gap-1.5",
  md: "text-[0.9375rem] px-4 gap-2",
  lg: "text-base px-5 gap-2.5",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  block?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "secondary", size = "md", loading, block, className, children, disabled, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      // Staying disabled while loading blocks double-submit without extra state.
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        "relative inline-flex items-center justify-center rounded-[var(--radius-control)] font-semibold",
        "transition-colors duration-150",
        // 44px floor on every control, not just icon buttons.
        "min-h-11",
        "disabled:opacity-55 disabled:pointer-events-none",
        VARIANTS[variant],
        SIZES[size],
        block && "w-full",
        className,
      )}
      {...rest}
    >
      {/* Children keep their box while loading, so the button never resizes. */}
      <span className={cn("inline-flex items-center gap-2", loading && "invisible")}>{children}</span>
      {loading && (
        <span className="absolute inset-0 grid place-items-center">
          <Spinner />
        </span>
      )}
    </button>
  );
});

/**
 * Same face as `Button`, but a real `<a>` under the hood. Navigation should
 * never be a `<button onClick={() => router.push(...)}>` — that loses
 * prefetching, right-click-to-open-in-new-tab and plain `<a>` semantics for no
 * benefit, so every "go somewhere" control uses this instead.
 */
export function LinkButton({
  variant = "secondary",
  size = "md",
  block,
  className,
  children,
  ...rest
}: React.ComponentProps<typeof Link> & { variant?: Variant; size?: Size; block?: boolean }) {
  return (
    <Link
      className={cn(
        "relative inline-flex items-center justify-center rounded-[var(--radius-control)] font-semibold",
        "transition-colors duration-150 min-h-11",
        VARIANTS[variant],
        SIZES[size],
        block && "w-full",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4 animate-spin", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required — an icon-only control with no accessible name is unusable. */
  label: string;
  tone?: "default" | "brand" | "danger";
}

/**
 * The icon stays visually small; the tap target is a full 44×44. The negative
 * margin pulls the *visual* footprint back so surrounding layout doesn't grow.
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, tone = "default", className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        "-m-2.5 flex h-11 w-11 items-center justify-center rounded-full transition-colors",
        "hover:bg-[var(--surface-muted)] disabled:opacity-50 disabled:pointer-events-none",
        tone === "brand" && "text-[var(--color-brand)]",
        tone === "danger" && "text-[var(--color-negative)]",
        tone === "default" && "text-[var(--foreground-secondary)]",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
});
