import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { SectionTitle } from "@/components/layout/app-shell";
import { can, isPlatformOwner } from "@/lib/auth/rbac";
import { requirePlansManageOrRedirect } from "../_lib/guard";
import { listSubscriptionPlans } from "@/lib/actions/subscribers";
import { PlansPanel } from "./plans-panel";

export default async function PlansPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  const actor = await requirePlansManageOrRedirect(loc);
  const canManage = can(actor, "plans.manage") || isPlatformOwner(actor);

  const plans = await listSubscriptionPlans();

  return (
    <div className="space-y-3">
      <SectionTitle>{dict.admin.plans.title}</SectionTitle>
      <p className="text-supporting -mt-1 mb-1">{dict.admin.plans.body}</p>
      <PlansPanel plans={plans} canManage={canManage} />
    </div>
  );
}
