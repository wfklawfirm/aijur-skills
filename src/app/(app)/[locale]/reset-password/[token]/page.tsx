import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { BrandLockup } from "@/components/layout/brand-mark";
import { ResetPasswordForm } from "./reset-password-form";

export default async function ResetPasswordPage({
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
        <BrandLockup width={128} />
        <h1 className="text-page-title">{dict.auth.resetPasswordTitle}</h1>
      </header>
      <ResetPasswordForm locale={loc} token={token} />
    </main>
  );
}
