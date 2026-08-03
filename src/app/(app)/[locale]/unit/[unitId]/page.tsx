import { notFound, redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import type { Localized, ScenarioDef } from "@content/types";
import { db } from "@/lib/db";
import { units as unitsTable, unitProgress } from "@/lib/db/schema";
import { getSessionUser } from "@/lib/auth/session";
import type { Locale } from "@/lib/i18n/config";
import { getPathById, getScenario, getSkillMap, getUnit } from "@/lib/content/service";
import { startUnit } from "@/lib/actions/progress";
import { UnitPlayer } from "./unit-player";

export default async function UnitPage({
  params,
}: {
  params: Promise<{ locale: string; unitId: string }>;
}) {
  const { locale: rawLocale, unitId } = await params;
  const locale = rawLocale as Locale;

  const user = await getSessionUser();
  if (!user) redirect(`/${locale}/sign-in`);

  const unit = await getUnit(unitId);
  if (!unit) notFound();

  const [unitRow, progressRows, skillMap] = await Promise.all([
    db.select({ pathId: unitsTable.pathId }).from(unitsTable).where(eq(unitsTable.id, unitId)).limit(1),
    db
      .select()
      .from(unitProgress)
      .where(and(eq(unitProgress.userId, user.id), eq(unitProgress.unitId, unitId)))
      .limit(1),
    getSkillMap(),
  ]);

  const path = unitRow[0] ? await getPathById(unitRow[0].pathId) : null;

  const scenarioIds = Array.from(
    new Set(
      unit.steps
        .filter((s): s is Extract<(typeof unit.steps)[number], { kind: "simulation" }> => s.kind === "simulation")
        .map((s) => s.scenarioId),
    ),
  );
  const scenarioEntries = await Promise.all(scenarioIds.map(async (id) => [id, await getScenario(id)] as const));
  const scenarios: Record<string, ScenarioDef> = {};
  for (const [id, scenario] of scenarioEntries) {
    if (scenario) scenarios[id] = scenario;
  }

  const skillNames: Record<string, Localized> = {};
  for (const skillId of unit.skillIds) {
    const skill = skillMap.get(skillId);
    if (skill) skillNames[skillId] = skill.name;
  }

  await startUnit(unitId);

  const initialStepIndex = Math.min(progressRows[0]?.stepIndex ?? 0, Math.max(unit.steps.length - 1, 0));

  let nextUnitHref: string | null = null;
  if (path) {
    const ordered = [...path.units].sort((a, b) => a.order - b.order);
    const idx = ordered.findIndex((u) => u.id === unit.id);
    const next = idx >= 0 ? ordered[idx + 1] : undefined;
    nextUnitHref = next ? `/${locale}/unit/${next.id}` : null;
  }

  return (
    <UnitPlayer
      unit={unit}
      locale={locale}
      scenarios={scenarios}
      skillNames={skillNames}
      initialStepIndex={initialStepIndex}
      returnHref={path ? `/${locale}/learn/${path.slug}` : `/${locale}/learn`}
      nextUnitHref={nextUnitHref}
    />
  );
}
