import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { privacyPolicy } from "@/lib/legal/content";
import { LegalPageShell } from "../legal-page-shell";
import { Callout } from "@/components/ui/feedback";

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const page = privacyPolicy[locale];

  return (
    <LegalPageShell locale={locale} title={page.title} backHref={`/${locale}/legal`}>
      <Callout tone="warning">{page.reviewBanner}</Callout>
      <p className="text-supporting">{page.updated}</p>
      {page.sections.map((section) => (
        <section key={section.heading} className="space-y-2">
          <h2 className="text-section-title">{section.heading}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i} dir="auto">
              {p}
            </p>
          ))}
        </section>
      ))}
    </LegalPageShell>
  );
}
