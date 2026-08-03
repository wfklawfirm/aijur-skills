import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";

/**
 * A locale-aware not-found page. Next.js renders not-found.tsx without access
 * to route params, so this can't read `[locale]` from the URL — it falls back
 * to the default locale, which is the right trade for a page whose only job is
 * "go home".
 */
export default function NotFound() {
  const dict = getDictionary(DEFAULT_LOCALE);
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-page-title">{dict.errors.notFound}</p>
      <p className="text-supporting max-w-sm">{dict.errors.notFoundBody}</p>
      <Link
        href={`/${DEFAULT_LOCALE}/home`}
        className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-control)] bg-[var(--color-brand)] px-5 font-semibold text-white"
      >
        {dict.errors.goHome}
      </Link>
    </main>
  );
}
