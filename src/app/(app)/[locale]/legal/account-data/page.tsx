import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { LegalPageShell } from "../legal-page-shell";
import { Card, CardBody } from "@/components/ui/card";

/**
 * "Account & Data" — required by the native app conversion brief's
 * privacy/permissions checklist, distinct from the Privacy Policy: a short,
 * plain-language summary of what's actually stored and where to act on it
 * (change consent, delete the account), rather than legal prose.
 */
export default async function AccountDataPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const ar = locale === "ar";

  return (
    <LegalPageShell locale={locale} title={dict.profile.accountData} backHref={`/${locale}/legal`}>
      <Card>
        <CardBody className="space-y-3 text-[0.9375rem]">
          <p>
            {ar
              ? "نخزّن اسمك وبريدك الإلكتروني وتقدّمك التعليمي (الدرجات، سجلّات الإتقان، نصوص إجاباتك وتمارين المحاكاة) وتفضيلاتك (اللغة، إمكانية الوصول)."
              : "We store your name, email, and learning progress (scores, mastery records, the text of your answers and simulation exercises) plus your preferences (language, accessibility)."}
          </p>
          <p>
            {ar
              ? "إن استخدمت التطبيق على الجوال وفعّلت الإشعارات، نخزّن أيضًا رمز إشعارات جهازك — لا شيء آخر يتعلق بجهازك."
              : "If you use the mobile app and enable notifications, we also store your device's push-notification token — nothing else about your device."}
          </p>
          <p>{dict.profile.aiConsentBody}</p>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 gap-2">
        <Link href={`/${locale}/legal/privacy`} className="underline text-supporting">
          {dict.profile.privacyPolicy}
        </Link>
        <Link href={`/${locale}/profile#settings`} className="underline text-supporting">
          {ar ? "تعديل موافقة الذكاء الاصطناعي أو حذف حسابك ← صفحة حسابي" : "Change AI consent or delete your account → Profile"}
        </Link>
      </div>
    </LegalPageShell>
  );
}
