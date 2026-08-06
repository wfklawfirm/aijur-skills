import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { SectionTitle } from "@/components/layout/app-shell";
import { can, isPlatformOwner } from "@/lib/auth/rbac";
import { requireSettingsManageOrRedirect } from "../_lib/guard";
import { getPlatformAdminSettings } from "@/lib/actions/subscribers";
import { SettingsForm } from "./settings-form";

export default async function AdminSettingsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  const actor = await requireSettingsManageOrRedirect(loc);
  const canManage = can(actor, "settings.manage") || isPlatformOwner(actor);

  const settings = await getPlatformAdminSettings();

  return (
    <div className="space-y-3">
      <SectionTitle>{dict.admin.adminSettings.title}</SectionTitle>
      <p className="text-supporting -mt-1 mb-1">{dict.admin.adminSettings.body}</p>
      <SettingsForm settings={settings} canManage={canManage} />
    </div>
  );
}
