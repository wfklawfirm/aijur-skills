import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { requirePlatformOwnerOrRedirect } from "../_lib/guard";
import { listPlatformAccounts } from "@/lib/actions/platform-accounts";
import { SectionTitle } from "@/components/layout/app-shell";
import { PlatformAccounts } from "../_components/platform-accounts";

/**
 * The one platform-wide surface gated on `isPlatformOwner()` rather than any
 * `Permission` — see `rbac.ts`. Search is a plain GET query string
 * (`?q=`), read server-side, so the list works with no client JS at all;
 * the client component below only needs interactivity for the mutating
 * actions (create / suspend / reactivate / extend).
 */
export default async function AdminAccountsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  await requirePlatformOwnerOrRedirect(loc);
  const { q } = await searchParams;
  const search = q ?? "";

  const accounts = await listPlatformAccounts(search);

  return (
    <div>
      <SectionTitle>{dict.admin.accounts.title}</SectionTitle>
      <p className="text-supporting -mt-1 mb-3">{dict.admin.accounts.body}</p>
      <PlatformAccounts locale={loc} accounts={accounts} initialSearch={search} />
    </div>
  );
}
