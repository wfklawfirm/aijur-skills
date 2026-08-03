import { redirect } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { getSessionUser } from "@/lib/auth/session";
import { can } from "@/lib/auth/rbac";
import { AppHeader, BottomNav, Page } from "@/components/layout/app-shell";
import { AdminSubNav } from "./_components/sub-nav";

/**
 * Content Studio's gate. Learners never see the Studio tab in the bottom nav,
 * but hiding a tab is UI, not security — every request into `/admin` is
 * checked here too, server-side, before any content-studio data is read.
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
  if (!user || !can(user, "content.read")) {
    redirect(`/${loc}/home`);
  }

  return (
    <>
      <AppHeader title={dict.admin.title} />
      <Page>
        <AdminSubNav />
        {children}
      </Page>
      <BottomNav showStudio />
    </>
  );
}
