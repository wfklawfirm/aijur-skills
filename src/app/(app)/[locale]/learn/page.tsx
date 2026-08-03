import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import type { PathDef } from "@content/types";
import { db } from "@/lib/db";
import { masteryRecords, pathEnrollments, unitProgress } from "@/lib/db/schema";
import { getSessionUser } from "@/lib/auth/session";
import { getDictionary, fill, pick } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { getPaths, getPrerequisiteMap } from "@/lib/content/service";
import { computePathStatuses, pathCompletion } from "@/lib/learning/progression";
import { Page, AppHeader, BottomNav, SectionTitle } from "@/components/layout/app-shell";
import { CardLinkAction } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronIcon } from "@/components/ui/icons";

const TRACKS = ["professional", "legal_english"] as const;

export default async function LearnPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  const user = await getSessionUser();
  if (!user) redirect(`/${locale}/sign-in`);

  const [paths, enrollments, progressRows, masteryRows, prereqMap] = await Promise.all([
    getPaths(),
    db.select().from(pathEnrollments).where(eq(pathEnrollments.userId, user.id)),
    db.select().from(unitProgress).where(eq(unitProgress.userId, user.id)),
    db.select().from(masteryRecords).where(eq(masteryRecords.userId, user.id)),
    getPrerequisiteMap(),
  ]);

  const enrolledIds = new Set(enrollments.map((e) => e.pathId));
  const progressMap = new Map(
    progressRows.map((r) => [r.unitId, { state: r.state, score: r.score, maxScore: r.maxScore }]),
  );
  const masteryMap = new Map(masteryRows.map((r) => [r.skillId, r.level]));

  const byTrack = new Map<PathDef["track"], PathDef[]>();
  for (const path of paths) {
    const list = byTrack.get(path.track) ?? [];
    list.push(path);
    byTrack.set(path.track, list);
  }

  const showStudio = user.systemRole !== "learner";

  return (
    <>
      <Page>
        <AppHeader title={dict.learn.title} />

        {TRACKS.map((track) => {
          const pathsForTrack = byTrack.get(track);
          if (!pathsForTrack || pathsForTrack.length === 0) return null;
          return (
            <div key={track}>
              <SectionTitle>{dict.learn.tracks[track]}</SectionTitle>
              <div className="space-y-3">
                {pathsForTrack.map((path) => {
                  const enrolled = enrolledIds.has(path.id);
                  const statuses = computePathStatuses(path, {
                    progress: progressMap,
                    mastery: masteryMap,
                    prerequisites: prereqMap,
                  });
                  const completion = pathCompletion(statuses);
                  return (
                    <CardLinkAction key={path.id} href={`/${locale}/learn/${path.slug}`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <p dir="auto" className="text-section-title">
                            {pick(path.title, locale)}
                          </p>
                          <p dir="auto" className="text-supporting mt-1">
                            {pick(path.tagline, locale)}
                          </p>
                          <p className="text-supporting num mt-2">
                            {fill(dict.learn.estimatedWeeks, { weeks: path.estimatedWeeks }, locale)}
                          </p>
                        </div>
                        <ChevronIcon size={20} className="mt-1 shrink-0 text-[var(--foreground-muted)]" />
                      </div>
                      <div className="mt-3">
                        {enrolled ? (
                          <Badge tone="brand">
                            {fill(dict.learn.unitsCompleted, { done: completion.done, total: completion.total }, locale)}
                          </Badge>
                        ) : (
                          <Badge tone="neutral">{dict.learn.enroll}</Badge>
                        )}
                      </div>
                    </CardLinkAction>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Page>
      <BottomNav showStudio={showStudio} />
    </>
  );
}
