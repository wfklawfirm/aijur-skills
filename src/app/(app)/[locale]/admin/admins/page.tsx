import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { SectionTitle } from "@/components/layout/app-shell";
import { requireAdminsManageOrRedirect } from "../_lib/guard";
import { listPlatformAdmins } from "@/lib/actions/subscribers";
import { AdminsPanel } from "./admins-panel";

export default async function AdminsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  const actor = await requireAdminsManageOrRedirect(loc);

  const admins = await listPlatformAdmins();

  return (
    <div className="space-y-3">
      <SectionTitle>{dict.admin.admins.title}</SectionTitle>
      <p className="text-supporting -mt-1 mb-1">{dict.admin.admins.body}</p>
      <AdminsPanel admins={admins} actorId={actor.id} />
    </div>
  );
}
