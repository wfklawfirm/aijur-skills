import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { masteryRecords, profiles } from "@/lib/db/schema";
import { getSessionUser } from "@/lib/auth/session";
import { getDictionary, fill, pick } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { buildHomeData, buildSkillMap } from "@/lib/learning/dashboard";
import { getPathById, getSkillMap } from "@/lib/content/service";
import { levelKey } from "@/lib/learning/mastery";
import { getPersonalizedDailyChallenge, type PersonalizedAdaptiveContent } from "@/lib/adaptive/hooks";
import { Page, AppHeader, BottomNav, SectionTitle } from "@/components/layout/app-shell";
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { Badge, MasteryMeter } from "@/components/ui/badge";
import { ProgressBar, ScoreRing } from "@/components/ui/progress";
import { Callout, EmptyState } from "@/components/ui/feedback";
import { ClockIcon, GlobeIcon, SparkIcon } from "@/components/ui/icons";

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

  const [home, skillMap, legalEnglishPath, masteryEntries] = await Promise.all([
    buildHomeData(user.id, profile.weeklyMinutesGoal),
    getSkillMap(),
    getPathById(LEGAL_ENGLISH_PATH_ID),
    buildSkillMap(user.id),
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

        {/* 1 — Your stage */}
        <SectionTitle>{dict.home.yourStage}</SectionTitle>
        {assessedCount > 0 ? (
          <Card>
            <CardBody className="flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-section-title">{dict.progress.masteryLevels[levelKey(averageLevel)]}</p>
                <p className="text-supporting num mt-1">
                  {fill(dict.home.stageSummary, { tracked: assessedCount, due: dueForReviewCount }, locale)}
                </p>
              </div>
              <MasteryMeter
                level={averageLevel}
                label={dict.progress.masteryLevels[levelKey(averageLevel)]}
                a11yLabel={fill(dict.a11y.masteryLabel, { level: averageLevel }, locale)}
                compact
              />
            </CardBody>
            {topSkills.length > 0 && (
              <CardBody className="flex flex-wrap gap-2 pt-0">
                {topSkills.map((entry) => {
                  const skill = skillMap.get(entry.skillId);
                  return skill ? (
                    <Badge key={entry.skillId} tone="positive" dir="auto">
                      {pick(skill.name, locale)}
                    </Badge>
                  ) : null;
                })}
              </CardBody>
            )}
            <CardFooter>
              <LinkButton variant="ghost" size="sm" href={`/${locale}/progress`}>
                {dict.home.seeFullProgress}
              </LinkButton>
            </CardFooter>
          </Card>
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

        {/* 1.5 — Daily challenge (adaptive, Phase 2 §14) */}
        {dailyChallenge && (
          <>
            <SectionTitle>{dict.home.dailyChallenge}</SectionTitle>
            <Callout tone="brand" title={dailyChallenge.title}>
              <span dir="auto">{dailyChallenge.body}</span>
            </Callout>
          </>
        )}

        {/* 2 — Continue your journey */}
        <SectionTitle>{dict.home.continueJourney}</SectionTitle>
        {home.continueUnit ? (
          <Card>
            <CardHeader>
              <div className="min-w-0">
                <p className="text-supporting">{pick(home.continueUnit.path.title, locale)}</p>
                <CardTitle>{pick(home.continueUnit.unit.title, locale)}</CardTitle>
              </div>
            </CardHeader>
            <CardBody>
              <p dir="auto" className="text-supporting">
                {pick(home.continueUnit.unit.subtitle, locale)}
              </p>
            </CardBody>
            <CardFooter>
              <LinkButton
                variant="primary"
                block
                href={`/${locale}/unit/${home.continueUnit.unit.id}`}
              >
                {home.continueUnit.status === "in_progress" ? dict.common.resume : dict.common.start}
              </LinkButton>
            </CardFooter>
          </Card>
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

        {/* 3 — Today's mission */}
        {home.continueUnit && (
          <>
            <SectionTitle>{dict.home.todaysMission}</SectionTitle>
            <Card>
              <CardBody className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p dir="auto" className="text-section-title">
                    {pick(home.continueUnit.unit.title, locale)}
                  </p>
                  <p className="text-supporting num mt-1 flex items-center gap-1.5">
                    <ClockIcon size={15} />
                    {`${home.continueUnit.unit.estimatedMinutes} ${dict.common.minutesShort}`}
                  </p>
                </div>
                <LinkButton
                  variant="secondary"
                  size="sm"
                  href={`/${locale}/unit/${home.continueUnit.unit.id}`}
                >
                  {dict.common.start}
                </LinkButton>
              </CardBody>
            </Card>
          </>
        )}

        {/* 4 — Current skill */}
        {home.continueUnit && currentSkill && (
          <>
            <SectionTitle>{dict.home.currentSkill}</SectionTitle>
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

        {/* 5 — Recommended review */}
        <SectionTitle>{dict.home.recommendedReview}</SectionTitle>
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

        {/* 6 — Latest feedback */}
        {home.latestEvaluation && (
          <>
            <SectionTitle>{dict.home.latestFeedback}</SectionTitle>
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

        {/* 7 — Weekly goal */}
        <SectionTitle>{dict.home.weeklyGoal}</SectionTitle>
        <Card>
          <CardBody>
            <ProgressBar
              value={home.weeklyMinutesDone}
              max={home.weeklyMinutesGoal}
              label={dict.home.weeklyGoal}
              showValue={fill(dict.home.weeklyGoalProgress, { done: home.weeklyMinutesDone, goal: home.weeklyMinutesGoal }, locale)}
            />
          </CardBody>
        </Card>

        {/* 8 — Recent achievement */}
        {home.recentAchievement && (
          <>
            <SectionTitle>{dict.home.recentAchievement}</SectionTitle>
            <Callout tone="positive" title={home.recentAchievement.label} icon={<SparkIcon size={18} />}>
              {dict.home.recentAchievement}
            </Callout>
          </>
        )}

        {/* 9 — Legal English quick practice */}
        {legalEnglishPath && (
          <>
            <SectionTitle>{dict.home.legalEnglishQuick}</SectionTitle>
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
