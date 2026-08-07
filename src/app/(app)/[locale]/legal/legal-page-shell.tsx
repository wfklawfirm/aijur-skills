import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

/**
 * Shared chrome for the required legal/support pages (Privacy Policy, Terms
 * of Use, Account & Data, Contact Support, App Version, Licenses). These
 * pages are deliberately outside the authenticated app shell (no bottom
 * nav) and reachable without signing in — both stores require the Privacy
 * Policy URL in particular to be publicly reachable, not gated behind a
 * login wall.
 */
export function LegalPageShell({
  locale,
  title,
  backHref,
  children,
}: {
  locale: Locale;
  title: string;
  backHref: string;
  children: React.ReactNode;
}) {
  const Back = locale === "ar" ? ChevronRight : ChevronLeft;
  return (
    <main id="main" className="mx-auto min-h-dvh max-w-2xl px-5 py-8 safe-x">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href={backHref}
          className="flex items-center gap-1 text-supporting"
          aria-label={locale === "ar" ? "رجوع" : "Back"}
        >
          <Back className="size-4" aria-hidden="true" />
          {locale === "ar" ? "رجوع" : "Back"}
        </Link>
        <LanguageSwitcher />
      </div>
      <h1 className="text-page-title mb-6">{title}</h1>
      <div className="space-y-6 text-[0.9375rem] leading-relaxed">{children}</div>
    </main>
  );
}
