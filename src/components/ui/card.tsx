import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Card({
  className,
  as: As = "section",
  ...rest
}: React.HTMLAttributes<HTMLElement> & { as?: "section" | "article" | "div" | "li" }) {
  return (
    <As
      className={cn(
        "rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)]",
        "shadow-[var(--shadow-sm)]",
        className,
      )}
      {...rest}
    />
  );
}

export function CardHeader({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-start justify-between gap-3 p-4 pb-0", className)} {...rest} />;
}

/**
 * Renders an `<h2>` by default, and takes a `level` when a page's structure
 * needs otherwise. A shared title component that hard-codes its heading level
 * silently breaks the document outline the moment it's reused a level deeper.
 */
export function CardTitle({
  className,
  level = 2,
  children,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement> & { level?: 2 | 3 | 4 }) {
  const Tag = (`h${level}` as const) satisfies keyof React.JSX.IntrinsicElements;
  return (
    <Tag className={cn("text-section-title text-[var(--foreground)]", className)} {...rest}>
      {children}
    </Tag>
  );
}

export function CardBody({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4", className)} {...rest} />;
}

export function CardFooter({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center gap-2 border-t border-[var(--border)] p-4", className)}
      {...rest}
    />
  );
}

/** A tappable card. Uses a real link/button inside so keyboard and SR work. */
export function CardAction({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "w-full rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-4 text-start",
        "shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--surface-muted)]",
        "min-h-11",
        className,
      )}
      {...rest}
    />
  );
}

/** `CardAction`'s shape for a card whose whole surface navigates somewhere. */
export function CardLinkAction({
  className,
  ...rest
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "block w-full rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-4 text-start",
        "shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--surface-muted)]",
        "min-h-11",
        className,
      )}
      {...rest}
    />
  );
}
