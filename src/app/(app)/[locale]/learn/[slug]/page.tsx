import { notFound, redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import type { Localized } from "@content/types";
import { db } from "@/lib/db";
import { masteryRecords, unitProgress } from "@/lib/db/schema";
import { getSessionUser } from "@/lib/auth/session";
import { getDictionary, fill, pick } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { getPathById, getPathBySlug, getPrerequisiteMap, getSkillMap } from "@/lib/content/service";
import { computePathStatuses, type UnitState, type UnitStatus } from "@/lib/learning/progression";
import { levelKey } from "@/lib/learning/mastery";
import { Page, AppHeader, BottomNav, SectionTitle } from "@/components/layout/app-shell";
import { CardLinkAction } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertIcon,
  CheckIcon,
  GlobeIcon,
  LockIcon,
  PlayIcon,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export default async function PathPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  const user = await getSessionUser();
  if (!user) redirect(`/${locale}/sign-in`);

  const path = await getPathBySlug(slug);
  if (!path) notFound();

  const [progressRows, masteryRows, prereqMap, skillMap, pairedPath] = await Promise.all([
    db.select().from(unitProgress).where(eq(unitProgress.userId, user.id)),
    db.select().from(masteryRecords).where(eq(masteryRecords.userId, user.id)),
    getPrerequisiteMap(),
    getSkillMap(),
    path.pairedPathId ? getPathById(path.pairedPathId) : Promise.resolve(null),
  ]);

  const progressMap = new Map(
    progressRows.map((r) => [r.unitId, { state: r.state, score: r.score, maxScore: r.maxScore }]),
  );
  const masteryMap = new Map(masteryRows.map((r) => [r.skillId, r.level]));
  const statuses = computePathStatuses(path, { progress: progressMap, mastery: masteryMap, prerequisites: prereqMap });
  const statusByUnitId = new Map(statuses.map((s) => [s.unitId, s]));
  const unitTitleById = new Map(path.units.map((u) => [u.id, u.title as Localized]));

  const chapters = [...path.chapters].sort((a, b) => a.order - b.order);
  const showStudio = user.systemRole !== "learner";

  return (
    <>
      <Page>
        <AppHeader title={pick(path.title, locale)} back={{ href: `/${locale}/learn`, label: dict.common.back }} />

        <p dir="auto" className="text-supporting">
          {pick(path.description, locale)}
        </p>

        {pairedPath && (
          <CardLinkAction
            href={`/${locale}/learn/${pairedPath.slug}`}
            className="mt-4 flex items-center gap-3 bg-[var(--color-brand-tint)]"
          >
            <span className="shrink-0 text-[var(--color-brand)]">
              <GlobeIcon size={20} />
            </span>
            <span className="min-w-0 flex-1">
              <span dir="auto" className="block text-sm font-semibold">
                {dict.learn.pairedPath}
              </span>
              <span dir="auto" className="text-supporting mt-0.5 block truncate">
                {pick(pairedPath.title, locale)}
              </span>
            </span>
          </CardLinkAction>
        )}

        {chapters.map((chapter) => {
          const units = path.units.filter((u) => u.chapterId === chapter.id).sort((a, b) => a.order - b.order);
          if (units.length === 0) return null;
          return (
            <div key={chapter.id}>
              <SectionTitle>{pick(chapter.title, locale)}</SectionTitle>
              <ol className="space-y-2.5">
                {units.map((unit) => {
                  const status = statusByUnitId.get(unit.id);
                  if (!status) return null;
                  return (
                    <UnitNode
                      key={unit.id}
                      title={pick(unit.title, locale)}
                      status={status}
                      locale={locale}
                      dict={dict}
                      unitTitleById={unitTitleById}
                      skillMap={skillMap}
                      unitHref={`/${locale}/unit/${unit.id}`}
                    />
                  );
                })}
              </ol>
            </div>
          );
        })}
      </Page>
      <BottomNav showStudio={showStudio} />
    </>
  );
}

function StateIcon({ state }: { state: UnitState }) {
  if (state === "locked") return <LockIcon size={20} className="text-[var(--foreground-muted)]" />;
  if (state === "completed") return <CheckIcon size={20} className="text-[var(--color-positive)]" />;
  if (state === "needs_review") return <AlertIcon size={20} className="text-[var(--color-warning)]" />;
  if (state === "in_progress") return <PlayIcon size={20} className="text-[var(--color-brand)]" />;
  return (
    <span className="grid h-5 w-5 place-items-center" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand)]" />
    </span>
  );
}

function UnitNode({
  title,
  status,
  locale,
  dict,
  unitTitleById,
  skillMap,
  unitHref,
}: {
  title: string;
  status: UnitStatus;
  locale: Locale;
  dict: ReturnType<typeof getDictionary>;
  unitTitleById: Map<string, Localized>;
  skillMap: Map<string, { name: Localized }>;
  unitHref: string;
}) {
  const locked = status.state === "locked";

  const lockReason =
    status.lock?.kind === "previous_unit"
      ? fill(
          dict.learn.lockedReason,
          { unit: pick(unitTitleById.get(status.lock.unitId) ?? { ar: "", en: "" }, locale) },
          locale,
        )
      : status.lock?.kind === "skill_level"
        ? fill(
            dict.learn.lockedLevelReason,
            {
              level: dict.progress.masteryLevels[levelKey(status.lock.level)],
              skill: pick(skillMap.get(status.lock.skillId)?.name ?? { ar: "", en: "" }, locale),
            },
            locale,
          )
        : null;

  const content = (
    <div className="flex items-center gap-3">
      <span className="shrink-0">
        <StateIcon state={status.state} />
      </span>
      <div className="min-w-0 flex-1">
        <p dir="auto" className={cn("truncate font-semibold", locked && "text-[var(--foreground-muted)]")}>
          {title}
        </p>
        {locked && lockReason && (
          <p dir="auto" className="text-supporting mt-0.5">
            {lockReason}
          </p>
        )}
        {status.state === "completed" && status.score !== undefined && status.maxScore !== undefined && (
          <p className="text-supporting num mt-0.5">
            {fill(dict.unit.completeScore, { score: status.score, max: status.maxScore }, locale)}
          </p>
        )}
        {status.state === "in_progress" && <Badge tone="brand">{dict.learn.current}</Badge>}
        {status.state === "needs_review" && <Badge tone="warning">{dict.learn.needsReview}</Badge>}
      </div>
    </div>
  );

  if (locked) {
    return (
      <li
        role="img"
        aria-label={`${title} — ${dict.learn.locked}${lockReason ? `: ${lockReason}` : ""}`}
        className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface-soft)] p-3.5 opacity-75"
      >
        {content}
      </li>
    );
  }

  return (
    <li>
      <CardLinkAction href={unitHref} className="p-3.5">
        {content}
      </CardLinkAction>
    </li>
  );
}
