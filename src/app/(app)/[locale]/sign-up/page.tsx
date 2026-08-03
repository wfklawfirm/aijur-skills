import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { SignUpForm } from "./sign-up-form";

export default async function SignUpPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-sm flex-col justify-center gap-8 px-5 py-10">
      <header className="text-center">
        <p className="text-page-title">{dict.auth.signUp}</p>
      </header>
      <SignUpForm locale={loc} />
    </main>
  );
}
