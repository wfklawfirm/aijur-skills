"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { IconButton } from "./button";
import { XIcon } from "./icons";

/**
 * One component, two presentations: a bottom sheet on a phone, a centred dialog
 * from `sm` up. Same DOM, same focus trap — only the alignment changes.
 */
export function Sheet({
  open,
  onClose,
  title,
  closeLabel,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  closeLabel: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  const panelRef = React.useRef<HTMLDivElement>(null);
  const titleId = React.useId();

  React.useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    panel?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={cn(
          "relative flex max-h-[88vh] w-full flex-col bg-[var(--surface)] shadow-[var(--shadow-lg)]",
          "rounded-t-[1.25rem] sm:max-w-lg sm:rounded-[1.25rem]",
          "animate-rise safe-bottom",
        )}
      >
        <div className="flex items-start justify-between gap-3 border-b border-[var(--border)] px-4 py-3.5">
          {/* dir="auto" — modal titles are often built from learner or client text. */}
          <h2 id={titleId} dir="auto" className="text-section-title">
            {title}
          </h2>
          <IconButton label={closeLabel} onClick={onClose}>
            <XIcon />
          </IconButton>
        </div>
        <div className="thin-scroll flex-1 overflow-y-auto px-4 py-4">{children}</div>
        {footer && (
          <div className="border-t border-[var(--border)] px-4 py-3">{footer}</div>
        )}
      </div>
    </div>
  );
}
