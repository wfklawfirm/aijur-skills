import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { adminSettings } from "@/lib/db/schema";
import { getDictionary } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n/config";
import type { AdminSettingsShape } from "@/lib/actions/subscribers-core";
import { LegalPageShell } from "../legal-page-shell";
import { Card, CardBody } from "@/components/ui/card";
import { Callout } from "@/components/ui/feedback";

/**
 * Reuses the same `adminSettings.contactInfoForRenewal` value the
 * subscription-ended screen already shows (spec §8) — one real, admin-
 * configured contact channel, not a second hardcoded/invented one.
 *
 * Forced dynamic: unlike the other legal pages (static prose), this one
 * reads a DB value an admin can change at any time. Next would otherwise
 * happily prerender it once at build time and freeze that value in the
 * static HTML forever -- the exact "stale data shown as fresh" failure
 * mode the brief warns about for offline caching, except here it would
 * happen on every request, online or not.
 */
export const dynamic = "force-dynamic";

export default async function ContactSupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  const settingsRow = (await db.select().from(adminSettings).where(eq(adminSettings.key, "admin_settings")).limit(1))[0];
  const contact = (settingsRow?.value as Partial<AdminSettingsShape> | undefined)?.contactInfoForRenewal;

  return (
    <LegalPageShell locale={locale} title={dict.profile.contactSupport} backHref={`/${locale}/legal`}>
      <Card>
        <CardBody className="space-y-2">
          {contact ? (
            <p className="font-medium" dir="auto">
              {contact}
            </p>
          ) : (
            <Callout tone="info">
              {locale === "ar"
                ? "لم يحدّد المشرف بعد وسيلة تواصل. [FILL IN — أضف بريد/رقم دعم حقيقي من صفحة إعدادات الإدارة]."
                : "No support contact has been configured yet. [FILL IN — add a real support email/phone from the Admin Settings page]."}
            </Callout>
          )}
        </CardBody>
      </Card>
    </LegalPageShell>
  );
}
