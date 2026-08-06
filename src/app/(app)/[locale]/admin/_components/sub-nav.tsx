"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useI18n } from "@/components/providers";

/**
 * Content Studio's work areas. A horizontally scrollable pill row rather
 * than a sidebar — the app has no desktop-only chrome, so the admin section
 * stays in the same shell as everything else, just denser.
 *
 * `showOrganization` adds an eighth pill for org owners/admins/managers only
 * — someone with only `content.*` permissions (an author or reviewer with no
 * organization) never sees a tab for a feature `assertTenant()` would just
 * reject them from anyway. `showSubscribers`/`showAdmins`/`showActivity`
 * are the same idea for the Admin Dashboard pills, gated on the matching
 * `Permission` (or the `isPlatformOwner()` bootstrap fallback — see
 * `rbac.ts`).
 */
export function AdminSubNav({
  showOrganization,
  showSubscribers,
  showAdmins,
  showActivity,
}: {
  showOrganization: boolean;
  showSubscribers: boolean;
  showAdmins: boolean;
  showActivity: boolean;
}) {
  const { dict, locale } = useI18n();
  const pathname = usePathname();
  const base = `/${locale}/admin`;

  const items = [
    { href: `${base}/sources`, label: dict.admin.sources },
    { href: `${base}/skills`, label: dict.admin.skills },
    { href: `${base}/units`, label: dict.admin.units },
    { href: `${base}/scenarios`, label: dict.admin.scenarios },
    { href: `${base}/rubrics`, label: dict.admin.rubrics },
    { href: `${base}/review-queue`, label: dict.admin.reviewQueue },
    { href: `${base}/ingestion`, label: dict.admin.ingestion },
    ...(showOrganization ? [{ href: `${base}/organization`, label: dict.admin.organization.title }] : []),
    // The Admin Dashboard cluster (spec §2) — a subscriber/subscription/
    // permissions management area unified with, not duplicated alongside,
    // the old `/admin/accounts` page (now a redirect into `subscribers`).
    ...(showSubscribers ? [{ href: `${base}/subscribers`, label: dict.admin.subscribers.title }] : []),
    ...(showSubscribers ? [{ href: `${base}/plans`, label: dict.admin.plans.title }] : []),
    ...(showAdmins ? [{ href: `${base}/admins`, label: dict.admin.admins.title }] : []),
    ...(showActivity ? [{ href: `${base}/activity`, label: dict.admin.activity.title }] : []),
    ...(showSubscribers ? [{ href: `${base}/settings`, label: dict.admin.adminSettings.title }] : []),
  ];

  return (
    <nav
      aria-label={dict.admin.title}
      className="-mx-4 mb-3 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "inline-flex min-h-9 shrink-0 items-center whitespace-nowrap rounded-[var(--radius-pill)] border px-3.5 text-sm font-semibold transition-colors",
              active
                ? "border-[var(--color-brand-tint)] bg-[var(--color-brand-tint)] text-[var(--color-brand)]"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-secondary)] hover:bg-[var(--surface-muted)]",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
