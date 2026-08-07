import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { LegalPageShell } from "./legal-page-shell";
import { Card, CardBody } from "@/components/ui/card";

const LINKS = [
  { href: "privacy", key: "privacyPolicy" as const },
  { href: "terms", key: "termsOfUse" as const },
  { href: "account-data", key: "accountData" as const },
  { href: "contact", key: "contactSupport" as const },
  { href: "about", key: "appVersion" as const },
];

export default async function LegalIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <LegalPageShell locale={locale} title={dict.profile.legal} backHref={`/${locale}/profile`}>
      <Card>
        <CardBody className="divide-y divide-[var(--border)] p-0">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}/legal/${link.href}`}
              className="flex items-center justify-between px-4 py-3.5 text-[0.9375rem]"
            >
              {dict.profile[link.key]}
            </Link>
          ))}
        </CardBody>
      </Card>
    </LegalPageShell>
  );
}
