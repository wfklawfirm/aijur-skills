"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useI18n, useOnline } from "@/components/providers";
import {
  HomeIcon,
  LearnIcon,
  PracticeIcon,
  ProfileIcon,
  ProgressIcon,
  StudioIcon,
} from "@/components/ui/icons";

/**
 * Five destinations, no more. A sixth tab on a phone means every tab is a
 * guess. The Studio tab only appears for roles that have it, so learners never
 * see a section they cannot enter.
 */
export function BottomNav({ showStudio }: { showStudio: boolean }) {
  const { dict, locale } = useI18n();
  const pathname = usePathname();

  const items = [
    { href: `/${locale}/home`, label: dict.nav.home, Icon: HomeIcon },
    { href: `/${locale}/learn`, label: dict.nav.learn, Icon: LearnIcon },
    { href: `/${locale}/practice`, label: dict.nav.practice, Icon: PracticeIcon },
    { href: `/${locale}/progress`, label: dict.nav.progress, Icon: ProgressIcon },
    showStudio
      ? { href: `/${locale}/admin`, label: dict.nav.admin, Icon: StudioIcon }
      : { href: `/${locale}/profile`, label: dict.nav.profile, Icon: ProfileIcon },
  ];

  return (
    <nav
      aria-label={dict.nav.home}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur safe-bottom"
    >
      <ul className="mx-auto flex max-w-lg items-stretch">
        {items.map(({ href, label, Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  // 44px floor comes from min-h-[3.25rem] plus the label row.
                  "flex min-h-[3.25rem] flex-col items-center justify-center gap-1 px-1 py-2 transition-colors",
                  active ? "text-[var(--color-brand)]" : "text-[var(--foreground-muted)]",
                )}
              >
                <Icon size={22} />
                <span className="text-[0.6875rem] font-semibold leading-none">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function AppHeader({
  title,
  right,
  back,
}: {
  title: string;
  right?: React.ReactNode;
  /** A plain link back, or — for flows that must confirm before leaving — a handler. */
  back?: { href: string; label: string } | { onClick: () => void; label: string };
}) {
  const arrow = (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flip-rtl"
    >
      <path d="M15 19l-7-7 7-7" />
    </svg>
  );
  const backClass =
    "-ms-2.5 flex h-11 w-11 items-center justify-center rounded-full text-[var(--foreground-secondary)] hover:bg-[var(--surface-muted)]";
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--background)]/92 backdrop-blur safe-top">
      <div className="mx-auto flex max-w-lg items-center gap-2 px-4 py-3">
        {back &&
          ("href" in back ? (
            <Link href={back.href} aria-label={back.label} className={backClass}>
              {arrow}
            </Link>
          ) : (
            <button type="button" onClick={back.onClick} aria-label={back.label} className={backClass}>
              {arrow}
            </button>
          ))}
        <h1 dir="auto" className="text-page-title min-w-0 flex-1 truncate">
          {title}
        </h1>
        {right}
      </div>
    </header>
  );
}

export function OfflineBanner() {
  const { dict } = useI18n();
  const online = useOnline();
  if (online) return null;
  return (
    <div
      role="status"
      className="border-b border-[var(--color-warning-tint)] bg-[var(--color-warning-tint)] px-4 py-2 text-center text-sm text-[var(--color-warning)]"
    >
      {dict.common.offline}
    </div>
  );
}

export function Page({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <main id="main" className={cn("mx-auto w-full max-w-lg px-4 py-4 app-scroll", className)}>
      {children}
    </main>
  );
}

export function SectionTitle({ children, action }: { children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="mb-2.5 mt-6 flex items-baseline justify-between gap-3 first:mt-0">
      <h2 className="text-label">{children}</h2>
      {action}
    </div>
  );
}
