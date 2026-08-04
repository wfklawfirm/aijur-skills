import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { ForgotPasswordForm } from "./forgot-password-form";

export default async function ForgotPasswordPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-sm flex-col justify-center gap-8 px-5 py-10">
      <header className="text-center">
        <h1 className="text-page-title">{dict.auth.forgotPasswordTitle}</h1>
        <p className="text-supporting mt-2">{dict.auth.forgotPasswordBody}</p>
      </header>
      <ForgotPasswordForm locale={loc} />
    </main>
  );
}
