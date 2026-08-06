import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { masteryRecords, profiles } from "@/lib/db/schema";
import { getSessionUser } from "@/lib/auth/session";
import { subscriptionBlocksContent } from "@/lib/subscriptions/gate";
import { getDictionary, fill, pick } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { buildHomeData, buildSkillMap, computeStreak } from "@/lib/learning/dashboard";
import { getDomains, getPathById, getSkillMap } from "@/lib/content/service";
import { levelKey } from "@/lib/learning/mastery";
import { getPersonalizedDailyChallenge, type PersonalizedAdaptiveContent } from "@/lib/adaptive/hooks";
import { Page, AppHeader, BottomNav, SectionTitle } from "@/components/layout/app-shell";
import { Card, CardBody, CardFooter } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { Badge, MasteryMeter } from "@/components/ui/badge";
import { ScoreRing } from "@/components/ui/progress";
import { EmptyState } from "@/components/ui/feedback";
import { GlobeIcon } from "@/components/ui/icons";
import { ProgressSummaryCard } from "@/components/home/progress-summary-card";
import { PrimaryAction } from "@/components/home/primary-action";
import { ActiveSkillRow } from "@/components/home/active-skill-row";
import { DailyChallengeCard } from "@/components/home/daily-challenge-card";

const LEGAL_ENGLISH_PATH_ID = "path.legal-english-client-communication";

/** First whitespace-separated token of a full name -- works the same for
 * Arabic and Latin names. Used only for the Home greeting; every other
 * screen (starting with Profile) still shows the full name. */
function firstNameOf(fullName: string): string {
  const trimmed = fullName.trim();
  return trimmed.split(/\s+/)[0] || trimmed;
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  const user = await getSessionUser();
  if (!user) redirect(`/${locale}/sign-in`);

  // Spec §8: a suspended/expired/not-yet-started subscription blocks paid
  // content but must NOT sign the user out (that stays `accountStatus`'s
  // job, enforced in `getSessionUser`) -- they land on a clear, dedicated
  // screen instead of the app. An account with no subscription row at all
  // (every pre-existing account, plus every content-team account) is never
  // affected -- see `subscriptionBlocksContent`'s doc comment.
  if (await subscriptionBlocksContent(user)) redirect(`/${locale}/subscription-ended`);

  const profileRows = await db.select().from(profiles).where(eq(profiles.userId, user.id)).limit(1);
  const profile = profileRows[0];
  if (!profile || !profile.onboardingCompletedAt) redirect(`/${locale}/onboarding`);
  if (!profile.diagnosticCompletedAt) redirect(`/${locale}/diagnostic`);

  const [home, skillMap, domains, legalEnglishPath, masteryEntries, streakDays] = await Promise.all([
    buildHomeData(user.id, profile.weeklyMinutesGoal),
    getSkillMap(),
    getDomains(),
    getPathById(LEGAL_ENGLISH_PATH_ID),
    buildSkillMap(user.id),
    computeStreak(user.id),
  ]);
  const domainIconById = new Map(domains.map((d) => [d.id, d.icon]));

  // "Your Progress" summary -- the same real per-skill evidence the full
  // Progress dashboard is built from (see progress/page.tsx), condensed to
  // one glance: how much of the skill map has evidence, streak, and
  // whatever's due for review. Not a separate/invented metric.
  const assessedCount = masteryEntries.length;
  const dueForReviewCount = masteryEntries.filter((e) => e.dueForReview).length;
  const topSkills = [...masteryEntries].sort((a, b) => b.level - a.level).slice(0, 3);
  // Share of the platform's full skill map with at least one real evidence
  // point -- what the progress ring shows. Real and derivable from data
  // already fetched above, not a separate query. Deliberately NOT paired
  // with an average-mastery-level caption here (the old card did this,
  // e.g. "8%" next to "Not assessed") -- both numbers were individually
  // correct but read as contradictory together at low evidence counts. The
  // full per-skill level breakdown stays on /progress, where it belongs
  // next to the actual skill list it describes.
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

  // The page's one primary action (Home redesign v3 -- "أضف CTA واحداً
  // واضحاً يمثل الخطوة التالية"). Chosen from real state, in priority
  // order: resume what's in progress, start what's next, work through
  // what's due for review, or -- the rare case of no enrollment and
  // nothing due -- go find something to start. Never a fabricated label:
  // "Start assessment" (one of the brief's own examples) never applies
  // here, since the diagnostic is always already complete by the time a
  // user reaches Home (redirected above otherwise).
  let ctaHref: string;
  let ctaLabel: string;
  let ctaContext: string | undefined;
  if (home.continueUnit) {
    ctaHref = `/${locale}/unit/${home.continueUnit.unit.id}`;
    ctaLabel = home.continueUnit.status === "in_progress" ? dict.home.ctaContinue : dict.home.ctaStart;
    ctaContext = pick(home.continueUnit.unit.title, locale);
  } else if (dueForReviewCount > 0) {
    ctaHref = `/${locale}/practice`;
    ctaLabel = dict.home.ctaReview;
    ctaContext = fill(dict.home.dueCount, { n: dueForReviewCount }, locale);
  } else {
    ctaHref = `/${locale}/learn`;
    ctaLabel = dict.home.ctaExplore;
    ctaContext = undefined;
  }

  const showStudio = user.systemRole !== "learner";

  return (
    <>
      <Page>
        {/* 1 — Header: the one logo placement on this page (icon + "AIJUR
            SKILLS" wordmark), consolidating what used to be two separate
            placements (a small icon here, a second standalone mark
            centered below it) into exactly one, per direct feedback that
            the logo was duplicated. */}
        <AppHeader variant="brand" showStudio={showStudio} />

        {/* 2 — Greeting: a real <h1> (the page's only one, satisfying the
            same a11y landmark the old header title used to provide), first
            name only -- a four-part legal name was overwhelming this slot
            and forcing an ugly two-line wrap. The full name is still shown
            on Profile. */}
        <div className="pb-1 pt-3">
          <h1 dir="auto" className="text-page-title">
            {fill(dict.home.greeting, { name: firstNameOf(user.name) }, locale)}
          </h1>
          <p dir="auto" className="text-supporting mt-1">
            {dict.home.greetingSubtitle}
          </p>
        </div>

        {/* 3 — Today's progress summary. See progress-summary-card.tsx's own
            comment for why this replaced the old "premium dashboard" card
            (a 132px ring, and a percent/level-caption pairing that read as
            contradictory). */}
        <SectionTitle compact>{dict.home.yourStage}</SectionTitle>
        {assessedCount > 0 ? (
          <ProgressSummaryCard
            percentAssessed={percentAssessed}
            skillMapLabel={fill(dict.home.skillMapCoverage, { percent: percentAssessed }, locale)}
            streakDays={streakDays}
            streakLabel={fill(dict.progress.streak, { n: streakDays }, locale)}
            dueLabel={dueForReviewCount > 0 ? fill(dict.home.dueCount, { n: dueForReviewCount }, locale) : null}
            weeklyMinutesDone={home.weeklyMinutesDone}
            weeklyMinutesGoal={home.weeklyMinutesGoal}
            weeklyGoalLabel={dict.home.weeklyGoal}
            weeklyGoalValueLabel={fill(
              dict.home.weeklyGoalProgress,
              { done: home.weeklyMinutesDone, goal: home.weeklyMinutesGoal },
              locale,
            )}
            viewFullProgressLabel={dict.home.seeFullProgress}
            viewFullProgressHref={`/${locale}/progress`}
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

        {/* 4 — Primary action: the single most important control on the
            page, full width, driven by real state (see the cta* variables
            above). */}
        <div className="mt-5">
          <PrimaryAction href={ctaHref} label={ctaLabel} context={ctaContext} />
        </div>

        {/* 5 — Active skills: 2-3 uniform full-width rows (same real
            top-mastery evidence as before, `topSkills`), replacing the old
            variable-width chip row. */}
        <SectionTitle
          compact
          action={
            topSkills.length > 0 && (
              <LinkButton variant="ghost" size="sm" href={`/${locale}/progress`}>
                {dict.home.viewAllSkills}
              </LinkButton>
            )
          }
        >
          {dict.home.activeSkills}
        </SectionTitle>
        {topSkills.length > 0 ? (
          <div className="space-y-2">
            {topSkills.map((entry) => {
              const skill = skillMap.get(entry.skillId);
              if (!skill) return null;
              return (
                <ActiveSkillRow
                  key={entry.skillId}
                  href={`/${locale}/progress`}
                  name={pick(skill.name, locale)}
                  domainIcon={domainIconById.get(entry.domainId) ?? "scale"}
                  level={entry.level}
                  levelLabel={dict.progress.masteryLevels[levelKey(entry.level)]}
                  a11yLabel={fill(dict.a11y.masteryLabel, { level: entry.level }, locale)}
                />
              );
            })}
          </div>
        ) : (
          <EmptyState title={dict.home.stageEmpty} />
        )}

        {/* 6 — Daily challenge (adaptive, Phase 2 §14) */}
        {dailyChallenge && (
          <>
            <SectionTitle compact>{dict.home.dailyChallenge}</SectionTitle>
            <DailyChallengeCard
              title={dailyChallenge.title}
              body={dailyChallenge.body}
              startLabel={dict.home.startChallenge}
              startHref={`/${locale}/practice`}
            />
          </>
        )}

        {/* 7a — Additional content: current skill */}
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

        {/* 7b — Additional content: recommended review */}
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

        {/* 7c — Additional content: latest feedback */}
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

        {/* 7d — Additional content: quick Legal English practice */}
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
