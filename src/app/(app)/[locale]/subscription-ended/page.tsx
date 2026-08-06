import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { adminSettings } from "@/lib/db/schema";
import { getSessionUser } from "@/lib/auth/session";
import { subscriptionBlocksContent } from "@/lib/subscriptions/gate";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { AppHeader, Page } from "@/components/layout/app-shell";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signOutAction } from "@/lib/actions/auth";
import type { AdminSettingsShape } from "@/lib/actions/subscribers-core";

/**
 * Spec §8: the "clear screen stating the subscription ended" a blocked
 * learner sees instead of the app. Reachable only by a signed-in user whose
 * subscription actually blocks content (`subscriptionBlocksContent`) --
 * anyone else (including a learner whose subscription is fine again after a
 * renewal) is bounced back to `/home`, so this never becomes a stale page a
 * renewed subscriber gets stuck looking at.
 */
export default async function SubscriptionEndedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  const user = await getSessionUser();
  if (!user) redirect(`/${loc}/sign-in`);
  if (!(await subscriptionBlocksContent(user))) redirect(`/${loc}/home`);

  const settingsRow = (await db.select().from(adminSettings).where(eq(adminSettings.key, "admin_settings")).limit(1))[0];
  const contact = (settingsRow?.value as Partial<AdminSettingsShape> | undefined)?.contactInfoForRenewal;

  const d = dict.subscriptionEnded;

  return (
    <>
      <AppHeader title={d.title} />
      <Page>
        <Card as="div">
          <CardBody className="space-y-3 text-center">
            <p className="text-section-title">{d.title}</p>
            <p className="text-supporting">{d.body}</p>
            {contact && <p className="font-medium">{contact}</p>}
            <form action={signOutAction.bind(null, loc)}>
              <Button type="submit" variant="secondary" block>
                {dict.common.signOut}
              </Button>
            </form>
          </CardBody>
        </Card>
      </Page>
    </>
  );
}
