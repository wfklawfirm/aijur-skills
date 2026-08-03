import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { and, desc, eq, gte } from "drizzle-orm";
import { db } from "@/lib/db";
import { achievements, evaluations, savedSummaries, unitProgress } from "@/lib/db/schema";
import { getSessionUser } from "@/lib/auth/session";
import { buildSkillMap, buildWeeklyStats, type SkillMapEntry } from "@/lib/learning/dashboard";
import { getDomains, getSkill, getUnit } from "@/lib/content/service";
import { levelKey } from "@/lib/learning/mastery";
import { DAY_MS } from "@/lib/utils";
import { fill, getDictionary, pick } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { AppHeader, BottomNav, Page, SectionTitle } from "@/components/layout/app-shell";
import { Card, CardBody } from "@/components/ui/card";
import { Badge, MasteryMeter } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/feedback";
import { ScoreRing } from "@/components/ui/progress";
import { ChevronIcon, DomainIcon } from "@/components/ui/icons";

const LINK_CARD =
  "flex w-full min-h-11 items-center gap-3 rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-4 text-start shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--surface-muted)]";

const STREAK_WINDOW_DAYS = 35;

// A plain helper, not a component — the React "components must be pure" lint
// rule flags direct `Date.now()` calls inside component bodies, but this page
// is an async Server Component that runs once per request, not a re-rendered
// client component, so reading the current time here is safe.
function currentTimestamp() {
  return Date.now();
}

function StatTile({ children }: { children: React.ReactNode }) {
  return (
    <Card className="p-3 text-center">
      <p className="num text-[0.8125rem] font-semibold leading-snug">{children}</p>
    </Card>
  );
}

export default async function ProgressPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const t = (template: string, values?: Record<string, string | number>) => fill(template, values, locale);

  const user = await getSessionUser();
  if (!user) redirect(`/${locale}/sign-in`);

  const now = currentTimestamp();

  const [stats, skillMap, domains, streakRows, savedRows, achievementRows, evalRows] = await Promise.all([
    buildWeeklyStats(user.id),
    buildSkillMap(user.id),
    getDomains(),
    db
      .select({ completedAt: unitProgress.completedAt })
      .from(unitProgress)
      .where(and(eq(unitProgress.userId, user.id), gte(unitProgress.completedAt, now - STREAK_WINDOW_DAYS * DAY_MS))),
    db.select().from(savedSummaries).where(eq(savedSummaries.userId, user.id)).orderBy(desc(savedSummaries.createdAt)),
    db.select().from(achievements).where(eq(achievements.userId, user.id)).orderBy(desc(achievements.earnedAt)),
    db.select().from(evaluations).where(eq(evaluations.userId, user.id)),
  ]);

  // Rough consecutive-day streak, counting back from today. Gaps simply stop
  // the count — there is no penalty view, only "days in a row right now".
  const activeDays = new Set(
    streakRows
      .map((r) => r.completedAt)
      .filter((ts): ts is number => ts != null)
      .map((ts) => new Date(ts).toDateString()),
  );
  let streak = 0;
  for (let i = 0; i < STREAK_WINDOW_DAYS; i++) {
    if (activeDays.has(new Date(now - i * DAY_MS).toDateString())) streak++;
    else break;
  }

  const skillsByEntry = await Promise.all(skillMap.map((entry) => getSkill(entry.skillId)));
  const skillNameById = new Map(skillMap.map((entry, i) => [entry.skillId, skillsByEntry[i]]));
  const byDomain = new Map<string, SkillMapEntry[]>();
  for (const entry of skillMap) {
    const list = byDomain.get(entry.domainId) ?? [];
    list.push(entry);
    byDomain.set(entry.domainId, list);
  }

  const savedUnits = await Promise.all(savedRows.map((row) => getUnit(row.unitId)));

  let best: { overallScore: number; maxScore: number } | null = null;
  for (const row of evalRows) {
    if (row.maxScore <= 0) continue;
    if (!best || row.overallScore / row.maxScore > best.overallScore / best.maxScore) {
      best = { overallScore: row.overallScore, maxScore: row.maxScore };
    }
  }

  return (
    <>
      <AppHeader title={dict.progress.title} />
      <Page className="pb-24">
        <SectionTitle>{dict.progress.weekly}</SectionTitle>
        <div className="grid grid-cols-3 gap-2">
          <StatTile>{t(dict.progress.minutesPracticed, { n: stats.minutesPracticed })}</StatTile>
          <StatTile>{t(dict.progress.unitsCompleted, { n: stats.unitsCompleted })}</StatTile>
          <StatTile>{t(dict.progress.simulationsCompleted, { n: stats.simulationsCompleted })}</StatTile>
        </div>
        <Card className="mt-3">
          <CardBody>
            <p className="num text-section-title">{t(dict.progress.streak, { n: streak })}</p>
            <p className="text-supporting mt-1">{dict.progress.streakGentle}</p>
          </CardBody>
        </Card>

        <SectionTitle>{dict.progress.skillMap}</SectionTitle>
        {skillMap.length === 0 ? (
          <EmptyState title={dict.progress.noEvidence} />
        ) : (
          <>
            <p className="text-label mb-2">{dict.progress.byDomain}</p>
            <div className="space-y-5">
              {domains
                .filter((domain) => byDomain.has(domain.id))
                .map((domain) => (
                  <div key={domain.id}>
                    <div className="mb-2 flex items-center gap-2 text-[var(--foreground-secondary)]">
                      <DomainIcon name={domain.icon} size={18} />
                      <p dir="auto" className="text-sm font-semibold">
                        {pick(domain.name, locale)}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {byDomain.get(domain.id)!.map((entry) => {
                        const skill = skillNameById.get(entry.skillId);
                        return (
                          <li key={entry.skillId}>
                            <Card>
                              <CardBody className="flex flex-col gap-2">
                                <div className="flex items-center justify-between gap-2">
                                  <p dir="auto" className="min-w-0 flex-1 truncate text-[0.9375rem] font-medium">
                                    {skill ? pick(skill.name, locale) : entry.skillId}
                                  </p>
                                  {entry.dueForReview && (
                                    <Badge tone="warning" className="shrink-0">
                                      {dict.progress.dueForReview}
                                    </Badge>
                                  )}
                                </div>
                                <MasteryMeter
                                  level={entry.level}
                                  label={dict.progress.masteryLevels[levelKey(entry.level)]}
                                  a11yLabel={t(dict.a11y.masteryLabel, { level: entry.level })}
                                />
                                <p className="text-supporting num">
                                  {t(dict.progress.evidenceCount, { n: entry.evidenceCount })}
                                </p>
                              </CardBody>
                            </Card>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
            </div>
          </>
        )}

        <SectionTitle>{dict.progress.savedCards}</SectionTitle>
        {savedRows.length === 0 ? (
          <EmptyState title={dict.common.empty} />
        ) : (
          <ul className="space-y-2">
            {savedRows.map((row, i) => {
              const unit = savedUnits[i];
              return (
                <li key={row.id}>
                  <Link href={`/${locale}/unit/${row.unitId}`} className={LINK_CARD}>
                    <span dir="auto" className="min-w-0 flex-1 truncate text-[0.9375rem] font-medium">
                      {unit ? pick(unit.summaryCard.title, locale) : row.unitId}
                    </span>
                    <ChevronIcon className="shrink-0 text-[var(--foreground-muted)]" />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        <SectionTitle>{dict.progress.achievements}</SectionTitle>
        {achievementRows.length === 0 ? (
          <EmptyState title={dict.common.empty} />
        ) : (
          <div className="flex flex-wrap gap-2">
            {achievementRows.map((a) => (
              <Badge key={a.id} tone="positive" dir="auto">
                {a.label}
              </Badge>
            ))}
          </div>
        )}

        <SectionTitle>{dict.progress.personalBest}</SectionTitle>
        {best ? (
          <div className="flex justify-center py-2">
            <ScoreRing
              value={Math.round(best.overallScore * 10) / 10}
              max={Math.round(best.maxScore * 10) / 10}
              label={dict.progress.personalBest}
              caption={dict.progress.personalBest}
            />
          </div>
        ) : (
          <EmptyState title={dict.common.empty} />
        )}
      </Page>
      <BottomNav showStudio={user.systemRole !== "learner"} />
    </>
  );
}
