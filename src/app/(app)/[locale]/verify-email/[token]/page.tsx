import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
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
      <header className="text-center">
        <h1 className="text-page-title">{dict.auth.verifyEmailTitle}</h1>
      </header>
      <VerifyEmailForm locale={loc} token={token} />
    </main>
  );
}
