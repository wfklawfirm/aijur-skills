import { redirect } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

/**
 * `/admin/accounts` has been unified into `/admin/subscribers` (spec's own
 * "if a partial Admin system already exists, do not create a duplicate
 * system — complete and unify it"). The account create/suspend/reactivate/
 * extend-access logic this page used to render inline
 * (`platform-accounts-core.ts`) is unchanged and still the code path
 * `subscribers-core.ts` builds on — this route just stops being a second,
 * competing entry point to it. A bookmark or old link still lands somewhere
 * useful instead of a broken/empty page.
 */
export default async function AdminAccountsRedirectPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  redirect(`/${loc}/admin/subscribers`);
}
