import { notFound, redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth/session";
import type { Locale } from "@/lib/i18n/config";
import { getScenario } from "@/lib/content/service";
import { SimulationRunner } from "./simulation-runner";

export default async function SimulationPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; scenarioId: string }>;
  searchParams: Promise<{ unit?: string; return?: string }>;
}) {
  const { locale: rawLocale, scenarioId } = await params;
  const locale = rawLocale as Locale;
  const { unit: unitId, return: returnStep } = await searchParams;

  const user = await getSessionUser();
  if (!user) redirect(`/${locale}/sign-in`);

  const scenario = await getScenario(scenarioId);
  if (!scenario) notFound();

  const returnStepIndex = returnStep !== undefined ? Number(returnStep) : undefined;

  return (
    <SimulationRunner
      scenario={scenario}
      locale={locale}
      unitId={unitId ?? null}
      returnStepIndex={Number.isFinite(returnStepIndex) ? returnStepIndex : undefined}
      showStudio={user.systemRole !== "learner"}
    />
  );
}
