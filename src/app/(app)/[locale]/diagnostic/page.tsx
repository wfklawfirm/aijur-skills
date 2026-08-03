import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { getSessionUser } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { profiles } from "@/lib/db/schema";
import { DEFAULT_DIAGNOSTIC_ID, getDiagnostic, getPaths } from "@/lib/content/service";
import type { Locale } from "@/lib/i18n/config";
import { DiagnosticFlow } from "./diagnostic-flow";

export default async function DiagnosticPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;

  const user = await getSessionUser();
  if (!user) redirect(`/${loc}/sign-in`);

  const [diagnostic, paths, profileRows] = await Promise.all([
    getDiagnostic(DEFAULT_DIAGNOSTIC_ID),
    getPaths(),
    db
      .select({ weeklyMinutesGoal: profiles.weeklyMinutesGoal })
      .from(profiles)
      .where(eq(profiles.userId, user.id))
      .limit(1),
  ]);

  if (!diagnostic) redirect(`/${loc}/home`);

  const pathTitles = paths.map((p) => ({ id: p.id, title: p.title }));
  const weeklyMinutesGoal = profileRows[0]?.weeklyMinutesGoal ?? 60;

  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-sm flex-col px-5 py-8">
      <DiagnosticFlow
        locale={loc}
        diagnostic={diagnostic}
        pathTitles={pathTitles}
        weeklyMinutesGoal={weeklyMinutesGoal}
      />
    </main>
  );
}
