import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { SectionTitle } from "@/components/layout/app-shell";
import { requireSubscribersReadOrRedirect } from "../../_lib/guard";
import { listSubscriptionPlans } from "@/lib/actions/subscribers";
import { CreateSubscriberForm } from "./create-form";

export default async function NewSubscriberPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  await requireSubscribersReadOrRedirect(loc);

  const plans = await listSubscriptionPlans();

  return (
    <div className="space-y-3">
      <SectionTitle>{dict.admin.subscriberNew.title}</SectionTitle>
      <CreateSubscriberForm locale={loc} plans={plans.filter((p) => p.status === "active")} />
    </div>
  );
}
