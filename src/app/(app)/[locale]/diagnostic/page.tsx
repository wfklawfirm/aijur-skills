import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { getSessionUser } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { profiles } from "@/lib/db/schema";
import { DEFAULT_DIAGNOSTIC_ID, getDiagnostic, getPaths, getSkillMap } from "@/lib/content/service";
import type { Locale } from "@/lib/i18n/config";
import { DiagnosticFlow } from "./diagnostic-flow";

export default async function DiagnosticPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;

  const user = await getSessionUser();
  if (!user) redirect(`/${loc}/sign-in`);

  const [diagnostic, paths, skillMap, profileRows] = await Promise.all([
    getDiagnostic(DEFAULT_DIAGNOSTIC_ID),
    getPaths(),
    getSkillMap(),
    db
      .select({ weeklyMinutesGoal: profiles.weeklyMinutesGoal })
      .from(profiles)
      .where(eq(profiles.userId, user.id))
      .limit(1),
  ]);

  if (!diagnostic) redirect(`/${loc}/home`);

  const pathTitles = paths.map((p) => ({ id: p.id, title: p.title }));
  // A Map isn't serializable across the Server/Client boundary -- flatten to
  // the same {id, title/name} array shape pathTitles already uses above.
  const skillTitles = Array.from(skillMap.entries()).map(([id, skill]) => ({ id, name: skill.name }));
  const weeklyMinutesGoal = profileRows[0]?.weeklyMinutesGoal ?? 60;

  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-sm flex-col px-5 py-8">
      <DiagnosticFlow
        locale={loc}
        diagnostic={diagnostic}
        pathTitles={pathTitles}
        skillTitles={skillTitles}
        weeklyMinutesGoal={weeklyMinutesGoal}
      />
    </main>
  );
}
