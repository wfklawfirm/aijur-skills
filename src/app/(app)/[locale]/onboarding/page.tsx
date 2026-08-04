import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth/session";
import type { Locale } from "@/lib/i18n/config";
import { OnboardingFlow } from "./onboarding-flow";

export default async function OnboardingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;

  const user = await getSessionUser();
  if (!user) redirect(`/${loc}/sign-in`);

  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-sm flex-col px-5 py-8">
      <OnboardingFlow locale={loc} userId={user.id} />
    </main>
  );
}
