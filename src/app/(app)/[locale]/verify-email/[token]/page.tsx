import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { BrandMark } from "@/components/layout/brand-mark";
import { VerifyEmailForm } from "./verify-email-form";

export default async function VerifyEmailPage({
  params,
}: {
  params: Promise<{ locale: string; token: string }>;
}) {
  const { locale, token } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-sm flex-col justify-center gap-8 px-5 py-10">
      <div className="flex justify-end">
        <LanguageSwitcher />
      </div>
      <header className="flex flex-col items-center gap-3 text-center">
        <BrandMark size={56} />
        <h1 className="text-page-title">{dict.auth.verifyEmailTitle}</h1>
      </header>
      <VerifyEmailForm locale={loc} token={token} />
    </main>
  );
}
