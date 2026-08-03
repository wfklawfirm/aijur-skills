import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { profiles, scenarios } from "@/lib/db/schema";
import { getSessionUser } from "@/lib/auth/session";
import { buildHomeData } from "@/lib/learning/dashboard";
import { getSkill } from "@/lib/content/service";
import { getDictionary, pick } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { AppHeader, BottomNav, Page, SectionTitle } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/feedback";
import { ChevronIcon, PlayIcon, PracticeIcon } from "@/components/ui/icons";
import type { ScenarioDef } from "@content/types";

/** Same tappable-card treatment as `CardAction`, but as a real link. */
const LINK_CARD =
  "flex w-full min-h-11 items-center gap-3 rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-4 text-start shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--surface-muted)]";

export default async function PracticePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  const user = await getSessionUser();
  if (!user) redirect(`/${locale}/sign-in`);

  const profileRows = await db.select().from(profiles).where(eq(profiles.userId, user.id)).limit(1);
  const weeklyMinutesGoal = profileRows[0]?.weeklyMinutesGoal ?? 60;

  const [homeData, scenarioRows] = await Promise.all([
    buildHomeData(user.id, weeklyMinutesGoal),
    db.select().from(scenarios).where(eq(scenarios.status, "published")),
  ]);

  const dueSkills = await Promise.all(
    homeData.dueReviews.map(async (review) => ({ ...review, skill: await getSkill(review.skillId) })),
  );

  return (
    <>
      <AppHeader title={dict.nav.practice} />
      <Page className="pb-24">
        <SectionTitle>{dict.home.recommendedReview}</SectionTitle>
        {dueSkills.length === 0 ? (
          <EmptyState title={dict.home.nothingDue} icon={<PracticeIcon size={28} />} />
        ) : (
          <ul className="space-y-2.5">
            {dueSkills.map(({ skillId, reason, skill }) => (
              <li key={skillId}>
                <Link href={`/${locale}/learn`} className={LINK_CARD}>
                  <span className="min-w-0 flex-1">
                    <span dir="auto" className="block truncate text-[0.9375rem] font-semibold">
                      {skill ? pick(skill.name, locale) : skillId}
                    </span>
                    <span className="mt-1.5 flex flex-wrap items-center gap-1.5">
                      <Badge tone="warning">{dict.progress.dueForReview}</Badge>
                      <span dir="auto" className="text-supporting">
                        {dict.home.reviewReason[reason]}
                      </span>
                    </span>
                  </span>
                  <ChevronIcon className="shrink-0 text-[var(--foreground-muted)]" />
                </Link>
              </li>
            ))}
          </ul>
        )}

        <SectionTitle>{dict.simulation.title}</SectionTitle>
        {scenarioRows.length === 0 ? (
          <EmptyState title={dict.common.empty} icon={<PlayIcon size={28} />} />
        ) : (
          <ul className="space-y-2.5">
            {scenarioRows.map((row) => {
              const scenario = row.data as ScenarioDef;
              return (
                <li key={row.id}>
                  <Link href={`/${locale}/simulation/${row.id}`} className={LINK_CARD}>
                    <span className="min-w-0 flex-1">
                      <span dir="auto" className="block truncate text-[0.9375rem] font-semibold">
                        {pick(scenario.title, locale)}
                      </span>
                      <span dir="auto" className="text-supporting mt-1 block line-clamp-2">
                        {pick(scenario.description, locale)}
                      </span>
                      <span className="text-supporting num mt-1.5 block">
                        {scenario.estimatedMinutes} {dict.common.minutes}
                      </span>
                    </span>
                    <Badge tone="brand" className="shrink-0">
                      {dict.simulation.begin}
                    </Badge>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </Page>
      <BottomNav showStudio={user.systemRole !== "learner"} />
    </>
  );
}
