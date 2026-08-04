import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { masteryRecords, profiles } from "@/lib/db/schema";
import { getSessionUser } from "@/lib/auth/session";
import { getDictionary, fill, pick } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { buildHomeData, buildSkillMap, computeStreak } from "@/lib/learning/dashboard";
import { getPathById, getSkillMap } from "@/lib/content/service";
import { levelKey } from "@/lib/learning/mastery";
import { getPersonalizedDailyChallenge, type PersonalizedAdaptiveContent } from "@/lib/adaptive/hooks";
import { Page, AppHeader, BottomNav, SectionTitle } from "@/components/layout/app-shell";
import { Card, CardBody, CardFooter } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { Badge, MasteryMeter } from "@/components/ui/badge";
import { ScoreRing } from "@/components/ui/progress";
import { Callout, EmptyState } from "@/components/ui/feedback";
import { GlobeIcon } from "@/components/ui/icons";
import { HeroMark } from "@/components/home/hero-mark";
import { DashboardCard } from "@/components/home/dashboard-card";
import { ContinueCard } from "@/components/home/continue-card";
import { SkillChip } from "@/components/home/skill-chip";

const LEGAL_ENGLISH_PATH_ID = "path.legal-english-client-communication";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  const user = await getSessionUser();
  if (!user) redirect(`/${locale}/sign-in`);

  const profileRows = await db.select().from(profiles).where(eq(profiles.userId, user.id)).limit(1);
  const profile = profileRows[0];
  if (!profile || !profile.onboardingCompletedAt) redirect(`/${locale}/onboarding`);
  if (!profile.diagnosticCompletedAt) redirect(`/${locale}/diagnostic`);

  const [home, skillMap, legalEnglishPath, masteryEntries, streakDays] = await Promise.all([
    buildHomeData(user.id, profile.weeklyMinutesGoal),
    getSkillMap(),
    getPathById(LEGAL_ENGLISH_PATH_ID),
    buildSkillMap(user.id),
    computeStreak(user.id),
  ]);

  // "Your stage" summary -- the same real per-skill evidence the full
  // Progress dashboard is built from (see progress/page.tsx), condensed to
  // one glance: an overall level, how much is tracked, and the strongest
  // skills so far. Not a separate/invented metric.
  const assessedCount = masteryEntries.length;
  const dueForReviewCount = masteryEntries.filter((e) => e.dueForReview).length;
  const averageLevel =
    assessedCount > 0 ? Math.round(masteryEntries.reduce((sum, e) => sum + e.level, 0) / assessedCount) : 0;
  const topSkills = [...masteryEntries].sort((a, b) => b.level - a.level).slice(0, 3);
  // Share of the platform's full skill map with at least one real evidence
  // point -- what the dashboard's progress ring shows. Real and derivable
  // from data already fetched above, not a separate query.
  const percentAssessed = skillMap.size > 0 ? Math.round((assessedCount / skillMap.size) * 100) : 0;

  let currentSkillLevel = 0;
  if (home.continueUnit) {
    const rows = await db
      .select()
      .from(masteryRecords)
      .where(
        and(eq(masteryRecords.userId, user.id), eq(masteryRecords.skillId, home.continueUnit.unit.primarySkillId)),
      )
      .limit(1);
    currentSkillLevel = rows[0]?.level ?? 0;
  }
  const currentSkill = home.continueUnit ? skillMap.get(home.continueUnit.unit.primarySkillId) : null;

  // Adaptive Professional Journey Engine -- a short, personalized prompt tied
  // to whatever skill the learner is actually working on right now, never
  // the same one twice in a row (see src/lib/adaptive/hooks.ts). Phase 2
  // (docs/ADAPTIVE_ENGINE_ARCHITECTURE.md §14) made this card genuinely a
  // Daily Challenge -- a concrete micro-action, through
  // getPersonalizedDailyChallenge() -- rather than a Hook (a reflective
  // prompt) rendered under a "Daily challenge" label, which is what this
  // card actually was in Phase 1. Best-effort: this is an engagement
  // add-on, not core functionality, so a failure here must never break
  // Home itself.
  const dailyChallengeSkillId = home.continueUnit?.unit.primarySkillId ?? topSkills[0]?.skillId ?? null;
  let dailyChallenge: PersonalizedAdaptiveContent | null = null;
  if (dailyChallengeSkillId) {
    const skillDef = skillMap.get(dailyChallengeSkillId);
    if (skillDef) {
      try {
        dailyChallenge = await getPersonalizedDailyChallenge({
          userId: user.id,
          organizationId: user.organization?.id ?? null,
          skillId: dailyChallengeSkillId,
          skillName: pick(skillDef.name, locale),
          careerStageId: profile.careerStage,
          locale,
          allowRemote: Boolean(profile.aiProcessingConsentAt),
          context: { surface: "home_daily_challenge" },
        });
      } catch {
        dailyChallenge = null;
      }
    }
  }

  const showStudio = user.systemRole !== "learner";

  return (
    <>
      <Page>
        <AppHeader title={fill(dict.home.greeting, { name: user.name }, locale)} showStudio={showStudio} wrap />

        {/* 0 — Identity mark. Small and understated on purpose — see
            hero-mark.tsx's own comment. */}
        <div className="flex justify-center pb-1 pt-2">
          <HeroMark />
        </div>

        {/* 1 — Premium dashboard: consolidates the old Your stage / Weekly
            goal / Recent achievement sections into one glance (design
            overhaul, Phase 1 — "اجعل الشاشة الأولى تُظهر أهم المعلومات فقط
            خلال 3 ثوانٍ"). The full breakdown still lives on /progress. Kept
            its own heading (compact, not removed) -- a screen-reader user
            still needs a real landmark to jump to, even though the three
            old sections' visual chrome is now one card. */}
        <SectionTitle compact>{dict.home.yourStage}</SectionTitle>
        {assessedCount > 0 ? (
          <DashboardCard
            percentAssessed={percentAssessed}
            levelLabel={dict.progress.masteryLevels[levelKey(averageLevel)]}
            streakDays={streakDays}
            streakLabel={fill(dict.progress.streak, { n: streakDays }, locale)}
            weeklyMinutesDone={home.weeklyMinutesDone}
            weeklyMinutesGoal={home.weeklyMinutesGoal}
            weeklyGoalLabel={dict.home.weeklyGoal}
            weeklyGoalValueLabel={fill(
              dict.home.weeklyGoalProgress,
              { done: home.weeklyMinutesDone, goal: home.weeklyMinutesGoal },
              locale,
            )}
            skillsTrackedLabel={fill(dict.home.stageSummary, { tracked: assessedCount, due: dueForReviewCount }, locale)}
            recentAchievementLabel={home.recentAchievement?.label ?? null}
          />
        ) : (
          <EmptyState
            title={dict.home.stageEmpty}
            action={
              <LinkButton variant="secondary" href={`/${locale}/progress`}>
                {dict.home.seeFullProgress}
              </LinkButton>
            }
          />
        )}

        {topSkills.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {topSkills.map((entry) => {
              const skill = skillMap.get(entry.skillId);
              return skill ? <SkillChip key={entry.skillId} name={pick(skill.name, locale)} /> : null;
            })}
          </div>
        )}

        {assessedCount > 0 && (
          <div className="mt-2 flex justify-end">
            <LinkButton variant="ghost" size="sm" href={`/${locale}/progress`}>
              {dict.home.seeFullProgress}
            </LinkButton>
          </div>
        )}

        {/* 1.5 — Daily challenge (adaptive, Phase 2 §14) */}
        {dailyChallenge && (
          <>
            <SectionTitle compact>{dict.home.dailyChallenge}</SectionTitle>
            <Callout tone="brand" title={dailyChallenge.title}>
              <span dir="auto">{dailyChallenge.body}</span>
            </Callout>
          </>
        )}

        {/* 2 — Continue learning: merges the old "Continue your journey" and
            "Today's mission" sections (identical unit, shown twice before)
            into one CTA per the design overhaul's redundancy note. */}
        <SectionTitle compact>{dict.home.continueJourney}</SectionTitle>
        {home.continueUnit ? (
          <ContinueCard
            pathTitle={pick(home.continueUnit.path.title, locale)}
            unitTitle={pick(home.continueUnit.unit.title, locale)}
            href={`/${locale}/unit/${home.continueUnit.unit.id}`}
            ctaLabel={home.continueUnit.status === "in_progress" ? dict.common.resume : dict.common.start}
            minutesLabel={`${home.continueUnit.unit.estimatedMinutes} ${dict.common.minutesShort}`}
          />
        ) : (
          <EmptyState
            title={dict.home.startEmpty}
            action={
              <LinkButton variant="primary" href={`/${locale}/learn`}>
                {dict.nav.learn}
              </LinkButton>
            }
          />
        )}

        {/* 3 — Current skill */}
        {home.continueUnit && currentSkill && (
          <>
            <SectionTitle compact>{dict.home.currentSkill}</SectionTitle>
            <Card>
              <CardBody className="flex items-center justify-between gap-3">
                <p dir="auto" className="text-section-title min-w-0 truncate">
                  {pick(currentSkill.name, locale)}
                </p>
                <MasteryMeter
                  level={currentSkillLevel}
                  label={dict.progress.masteryLevels[levelKey(currentSkillLevel)]}
                  a11yLabel={fill(dict.a11y.masteryLabel, { level: currentSkillLevel }, locale)}
                />
              </CardBody>
            </Card>
          </>
        )}

        {/* 4 — Recommended review */}
        <SectionTitle compact>{dict.home.recommendedReview}</SectionTitle>
        {home.dueReviews.length > 0 ? (
          <Card as="div" className="overflow-hidden">
            <ul className="divide-y divide-[var(--border)]">
              {home.dueReviews.map((review) => {
                const skill = skillMap.get(review.skillId);
                return (
                  <li key={review.skillId}>
                    <LinkButton
                      href={`/${locale}/practice`}
                      variant="ghost"
                      block
                      className="justify-between rounded-none border-0 px-4 py-3 shadow-none"
                    >
                      <span dir="auto" className="min-w-0 truncate text-start text-[0.9375rem] font-medium text-[var(--foreground)]">
                        {skill ? pick(skill.name, locale) : review.skillId}
                      </span>
                      <Badge tone="info">{dict.home.reviewReason[review.reason]}</Badge>
                    </LinkButton>
                  </li>
                );
              })}
            </ul>
          </Card>
        ) : (
          <EmptyState
            title={dict.home.nothingDue}
            action={
              <LinkButton variant="secondary" href={`/${locale}/practice`}>
                {dict.nav.practice}
              </LinkButton>
            }
          />
        )}

        {/* 5 — Latest feedback */}
        {home.latestEvaluation && (
          <>
            <SectionTitle compact>{dict.home.latestFeedback}</SectionTitle>
            <Card>
              <CardBody className="flex items-center gap-4">
                <ScoreRing
                  value={home.latestEvaluation.overallScore}
                  max={home.latestEvaluation.maxScore}
                  label={dict.home.latestFeedback}
                  size={72}
                />
                <p dir="auto" className="wrap-anywhere min-w-0 flex-1 text-sm leading-relaxed">
                  {home.latestEvaluation.priorityImprovement}
                </p>
              </CardBody>
            </Card>
          </>
        )}

        {/* 6 — Legal English quick practice */}
        {legalEnglishPath && (
          <>
            <SectionTitle compact>{dict.home.legalEnglishQuick}</SectionTitle>
            <Card>
              <CardBody className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-[var(--color-brand)]">
                  <GlobeIcon size={22} />
                </span>
                <div className="min-w-0 flex-1">
                  <p dir="auto" className="text-section-title">
                    {pick(legalEnglishPath.title, locale)}
                  </p>
                  <p dir="auto" className="text-supporting mt-1">
                    {pick(legalEnglishPath.tagline, locale)}
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <LinkButton variant="secondary" block href={`/${locale}/learn/${legalEnglishPath.slug}`}>
                  {dict.common.start}
                </LinkButton>
              </CardFooter>
            </Card>
          </>
        )}
      </Page>
      <BottomNav showStudio={showStudio} />
    </>
  );
}
