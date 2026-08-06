"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useI18n, useOnline } from "@/components/providers";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { BrandMark } from "@/components/layout/brand-mark";
import { BrandWordmark } from "@/components/layout/brand-wordmark";
import { signOutAction } from "@/lib/actions/auth";
import { IconButton } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import {
  HomeIcon,
  LearnIcon,
  LogoutIcon,
  MenuIcon,
  PracticeIcon,
  ProfileIcon,
  ProgressIcon,
  SettingsIcon,
  StudioIcon,
} from "@/components/ui/icons";
import type { Dictionary } from "@/lib/i18n/dictionaries/ar";
import type { Locale } from "@/lib/i18n/config";

/**
 * The same five destinations everywhere a nav list appears — `BottomNav` and
 * the `AppHeader` menu both build from this one function, so they can never
 * silently drift apart into two different lists.
 */
function navItems(dict: Dictionary, locale: Locale, showStudio: boolean) {
  return [
    { href: `/${locale}/home`, label: dict.nav.home, Icon: HomeIcon },
    { href: `/${locale}/learn`, label: dict.nav.learn, Icon: LearnIcon },
    { href: `/${locale}/practice`, label: dict.nav.practice, Icon: PracticeIcon },
    { href: `/${locale}/progress`, label: dict.nav.progress, Icon: ProgressIcon },
    showStudio
      ? { href: `/${locale}/admin`, label: dict.nav.admin, Icon: StudioIcon }
      : { href: `/${locale}/profile`, label: dict.nav.profile, Icon: ProfileIcon },
  ];
}

/**
 * Five destinations, no more. A sixth tab on a phone means every tab is a
 * guess. The Studio tab only appears for roles that have it, so learners never
 * see a section they cannot enter.
 */
export function BottomNav({ showStudio }: { showStudio: boolean }) {
  const { dict, locale } = useI18n();
  const pathname = usePathname();

  const items = navItems(dict, locale, showStudio);

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
  showStudio = false,
  wrap = false,
  variant = "default",
}: {
  /** Ignored when `variant === "brand"` — the brand lockup replaces the title slot entirely. */
  title?: string;
  right?: React.ReactNode;
  /** A plain link back, or — for flows that must confirm before leaving — a handler. */
  back?: { href: string; label: string } | { onClick: () => void; label: string };
  /** Whether the header menu shows Studio (in place of Profile) among its nav items. */
  showStudio?: boolean;
  /**
   * Titles are truncated with an ellipsis by default -- the right call for a
   * long unit/scenario/path name that would otherwise crowd the header. A
   * title built from a person's own name must never be cut, so it opts into
   * wrapping onto a second line instead. Ignored in `variant="brand"`.
   */
  wrap?: boolean;
  /**
   * `"default"` — the small 20px `BrandMark` + page title, used on every
   * screen (Learn, Practice, Progress, Profile, Content Studio, and every
   * detail screen). `"brand"` — the full icon+wordmark lockup instead of a
   * title, used ONLY on Home (Home redesign v3): "the logo appears exactly
   * once on the page" meant consolidating the header's small icon and the
   * page's separate standalone `HeroMark` into one placement, here. No
   * other screen passes this — every other of the 8 existing `AppHeader`
   * call sites is unaffected, same markup as before.
   */
  variant?: "default" | "brand";
}) {
  const { dict, locale } = useI18n();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

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

  const items = navItems(dict, locale, showStudio);

  return (
    <>
      {/*
        The Sheet below is a sibling of this header, never a child of it.
        `backdrop-blur` here compiles to `backdrop-filter`, which -- like
        `filter` or `transform` -- creates a new containing block for any
        `position: fixed` descendant. A Sheet nested inside would size and
        position itself against this header's own small box instead of the
        viewport, breaking the full-screen overlay (caught by actually
        screenshotting it, not by reading the JSX).
      */}
      <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--background)]/92 backdrop-blur safe-top">
        <div className="mx-auto flex max-w-lg items-center gap-2.5 px-4 py-2.5">
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
          {variant === "brand" ? (
            // Home only (see the prop doc above) -- the one on-page logo
            // placement, replacing both the small mark this header used to
            // show here AND the separate standalone mark Home used to
            // center below the header (now removed entirely).
            <BrandWordmark size={32} className="min-w-0 flex-1" />
          ) : (
            <>
              {/* The mark only fits comfortably on top-level screens -- a back
                  button already occupies that space on detail/task screens.
                  Sits at the row's start edge -- the far *right* in the app's
                  primary RTL layout, which is where "أقصى اليمين" (design
                  overhaul follow-up notes) asked for it; shrunk from 28px to
                  20px per the same notes ("صغّرها أكثر"). */}
              {!back && <BrandMark size={20} className="shrink-0 rounded-[0.35rem]" />}
              <h1
                dir="auto"
                className={cn(
                  "text-page-title min-w-0 flex-1",
                  // A name too long for one line wraps instead of truncating
                  // (the real bug this fixed originally), but bounded to 2
                  // lines instead of growing the header indefinitely -- the
                  // "shorten the header" follow-up note.
                  wrap ? "wrap-anywhere line-clamp-2 leading-snug" : "truncate",
                )}
              >
                {title}
              </h1>
            </>
          )}
          {right}
          <LanguageSwitcher compact />
          <IconButton label={dict.nav.menu} onClick={() => setMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
        </div>
      </header>

      <Sheet open={menuOpen} onClose={() => setMenuOpen(false)} title={dict.nav.menu} closeLabel={dict.common.close}>
        <nav aria-label={dict.nav.menu}>
          <ul className="space-y-1">
            {items.map(({ href, label, Icon }) => {
              const active = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex min-h-11 items-center gap-3 rounded-[var(--radius-control)] px-3 py-2.5 text-[0.9375rem] font-medium transition-colors",
                      active
                        ? "bg-[var(--color-brand-tint)] text-[var(--color-brand)]"
                        : "text-[var(--foreground)] hover:bg-[var(--surface-muted)]",
                    )}
                  >
                    <Icon size={20} />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="my-2 border-t border-[var(--border)]" />
          <ul className="space-y-1">
            <li>
              <Link
                href={`/${locale}/profile#settings`}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-11 items-center gap-3 rounded-[var(--radius-control)] px-3 py-2.5 text-[0.9375rem] font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-muted)]"
              >
                <SettingsIcon size={20} />
                {dict.common.settings}
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  void signOutAction(locale);
                }}
                className="flex min-h-11 w-full items-center gap-3 rounded-[var(--radius-control)] px-3 py-2.5 text-start text-[0.9375rem] font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-muted)]"
              >
                <LogoutIcon size={20} />
                {dict.common.signOut}
              </button>
            </li>
          </ul>
        </nav>
      </Sheet>
    </>
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

export function SectionTitle({
  children,
  action,
  compact = false,
}: {
  children: React.ReactNode;
  action?: React.ReactNode;
  /**
   * A ~35% tighter top/bottom margin (mt-4/mb-2 instead of mt-6/mb-2.5) —
   * default stays untouched everywhere except Home, which opted in as part
   * of the design overhaul's "reduce inter-section whitespace by 30-40%"
   * request (Phase 1, Home only).
   */
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-3 first:mt-0",
        compact ? "mb-2 mt-4" : "mb-2.5 mt-6",
      )}
    >
      <h2 className="text-label">{children}</h2>
      {action}
    </div>
  );
}
