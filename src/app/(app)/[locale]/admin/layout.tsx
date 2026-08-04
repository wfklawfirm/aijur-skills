import { redirect } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { getSessionUser } from "@/lib/auth/session";
import { can, isPlatformOwner } from "@/lib/auth/rbac";
import { AppHeader, BottomNav, Page } from "@/components/layout/app-shell";
import { AdminSubNav } from "./_components/sub-nav";

/**
 * Content Studio's gate. Learners never see the Studio tab in the bottom nav,
 * but hiding a tab is UI, not security — every request into `/admin` is
 * checked here too, server-side, before any content-studio data is read.
 *
 * Deliberately broad: `content.author` admits the content team; `org.
 * members.manage`/`org.reports` additionally admits an org admin/manager who
 * has no content role at all but needs `/admin/organization`. It is NOT a
 * substitute for a per-page check — `content.read` (which every signed-in
 * user, including a plain learner, holds) used to be the check here, which
 * meant this gate blocked nobody but anonymous visitors. Every actual
 * content-studio page now calls `requireContentAuthorOrRedirect()`
 * (`./_lib/guard.ts`) to enforce `content.author` specifically, the same way
 * `admin/organization/page.tsx` already re-checked its own narrower
 * requirement rather than trusting this layout gate alone.
 */
export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  const user = await getSessionUser();
  if (
    !user ||
    !(can(user, "content.author") || can(user, "org.members.manage") || can(user, "org.reports") || isPlatformOwner(user))
  ) {
    redirect(`/${loc}/home`);
  }

  const showOrganization = Boolean(
    user.organization && (can(user, "org.members.manage") || can(user, "org.reports")),
  );
  const showAccounts = isPlatformOwner(user);

  return (
    <>
      <AppHeader title={dict.admin.title} showStudio />
      <Page>
        <AdminSubNav showOrganization={showOrganization} showAccounts={showAccounts} />
        {children}
      </Page>
      <BottomNav showStudio />
    </>
  );
}
