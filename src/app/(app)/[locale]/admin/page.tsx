import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { db } from "@/lib/db";
import { sources, skills, units } from "@/lib/db/schema";
import { listPendingIngestion, listQueuedEvaluations } from "@/lib/actions/admin";
import { getAdaptiveContentStats } from "@/lib/actions/adaptive-admin";
import { getSubscribersDashboardKpis } from "@/lib/actions/subscribers";
import { can, isPlatformOwner } from "@/lib/auth/rbac";
import type { SkillDef } from "@content/types";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, type Tone } from "@/components/ui/badge";
import { SectionTitle } from "@/components/layout/app-shell";
import { analysisStatusTone, contentStatusTone, humanize, reviewStatusTone } from "./_lib/format";
import { requireContentAuthorOrRedirect } from "./_lib/guard";

function groupCount<T>(rows: T[], key: (row: T) => string): { value: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const row of rows) {
    const k = key(row);
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  return [...counts.entries()].map(([value, count]) => ({ value, count }));
}

function SummaryCard({
  href,
  title,
  total,
  entries,
}: {
  href: string;
  title: string;
  total: number;
  entries: { label: string; count: number; tone: Tone }[];
}) {
  return (
    <Link href={href} className="block">
      <Card className="transition-colors hover:bg-[var(--surface-muted)]">
        <CardHeader>
          <CardTitle level={3}>{title}</CardTitle>
          <span className="text-kpi-value num shrink-0">{total}</span>
        </CardHeader>
        <CardBody className="flex flex-wrap gap-1.5 pt-2">
          {entries.length === 0 && <span className="text-supporting">0</span>}
          {entries.map((e) => (
            <Badge key={e.label} tone={e.tone}>
              {e.label}
              <span className="num">{e.count}</span>
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Link>
  );
}

export default async function AdminOverviewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  const user = await requireContentAuthorOrRedirect(loc);
  // listQueuedEvaluations() is gated on the stricter `evaluation.review`
  // (see src/lib/actions/admin.ts) -- a content author with no reviewer
  // role would otherwise get an unhandled AuthError from this call.
  const canReviewEvaluations = can(user, "evaluation.review");
  const showSubscriberKpis = can(user, "subscribers.read") || isPlatformOwner(user);

  const [sourceRows, skillRows, unitRows, pendingIngestion, queuedEvaluations, adaptiveStats, subscriberKpis] = await Promise.all([
    db.select().from(sources),
    db.select().from(skills),
    db.select().from(units),
    listPendingIngestion(),
    canReviewEvaluations ? listQueuedEvaluations() : Promise.resolve([]),
    getAdaptiveContentStats(),
    showSubscriberKpis ? getSubscribersDashboardKpis() : Promise.resolve(null),
  ]);

  const sourcesByStatus = groupCount(sourceRows, (r) => r.analysisStatus);
  const skillsByReview = groupCount(skillRows, (r) => (r.data as SkillDef).reviewStatus);
  const unitsByStatus = groupCount(unitRows, (r) => r.status);

  return (
    <div className="space-y-3">
      <SummaryCard
        href={`/${loc}/admin/sources`}
        title={dict.admin.sources}
        total={sourceRows.length}
        entries={sourcesByStatus.map((e) => ({
          label: humanize(e.value),
          count: e.count,
          tone: analysisStatusTone(e.value),
        }))}
      />
      <SummaryCard
        href={`/${loc}/admin/skills`}
        title={dict.admin.skills}
        total={skillRows.length}
        entries={skillsByReview.map((e) => ({
          label: humanize(e.value),
          count: e.count,
          tone: reviewStatusTone(e.value),
        }))}
      />
      <SummaryCard
        href={`/${loc}/admin/units`}
        title={dict.admin.units}
        total={unitRows.length}
        entries={unitsByStatus.map((e) => ({
          label: dict.admin.status[e.value as keyof typeof dict.admin.status] ?? humanize(e.value),
          count: e.count,
          tone: contentStatusTone(e.value),
        }))}
      />

      {subscriberKpis && (
        <>
          <SectionTitle
            action={
              <Link href={`/${loc}/admin/subscribers`} className="text-sm font-semibold text-[var(--color-brand)]">
                {dict.admin.subscribers.title}
              </Link>
            }
          >
            {dict.admin.subscribers.title}
          </SectionTitle>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Link href={`/${loc}/admin/subscribers`} className="block">
              <Card className="transition-colors hover:bg-[var(--surface-muted)]">
                <CardBody>
                  <p className="text-kpi-value num">{subscriberKpis.totalSubscribers}</p>
                  <p className="text-supporting mt-1">{dict.admin.subscribers.title}</p>
                </CardBody>
              </Card>
            </Link>
            <Link href={`/${loc}/admin/subscribers?status=active`} className="block">
              <Card className="transition-colors hover:bg-[var(--surface-muted)]">
                <CardBody>
                  <p className="text-kpi-value num">{subscriberKpis.activeSubscribers}</p>
                  <p className="text-supporting mt-1">{dict.admin.subscriberStatus.active}</p>
                </CardBody>
              </Card>
            </Link>
            <Link href={`/${loc}/admin/subscribers?status=expiring_soon`} className="block">
              <Card className="transition-colors hover:bg-[var(--surface-muted)]">
                <CardBody>
                  <p className="text-kpi-value num">{subscriberKpis.expiringWithin7Days}</p>
                  <p className="text-supporting mt-1">{dict.admin.subscriberStatus.expiring_soon}</p>
                </CardBody>
              </Card>
            </Link>
            <Link href={`/${loc}/admin/subscribers?status=expired`} className="block">
              <Card className="transition-colors hover:bg-[var(--surface-muted)]">
                <CardBody>
                  <p className="text-kpi-value num">{subscriberKpis.expiredSubscribers}</p>
                  <p className="text-supporting mt-1">{dict.admin.subscriberStatus.expired}</p>
                </CardBody>
              </Card>
            </Link>
          </div>
        </>
      )}

      <SectionTitle>{dict.admin.reviewQueue}</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        <Link href={`/${loc}/admin/review-queue`} className="block">
          <Card className="transition-colors hover:bg-[var(--surface-muted)]">
            <CardBody>
              <p className="text-kpi-value num">{pendingIngestion.length}</p>
              <p className="text-supporting mt-1">{dict.admin.ingestion}</p>
            </CardBody>
          </Card>
        </Link>
        <Link href={`/${loc}/admin/review-queue`} className="block">
          <Card className="transition-colors hover:bg-[var(--surface-muted)]">
            <CardBody>
              <p className="text-kpi-value num">{queuedEvaluations.length}</p>
              <p className="text-supporting mt-1">{dict.admin.evaluationsPending}</p>
            </CardBody>
          </Card>
        </Link>
        <Link href={`/${loc}/admin/adaptive-content`} className="block">
          <Card className="transition-colors hover:bg-[var(--surface-muted)]">
            <CardBody>
              <p className="text-kpi-value num">{adaptiveStats.total}</p>
              <p className="text-supporting mt-1">{dict.admin.adaptiveContent.title}</p>
            </CardBody>
          </Card>
        </Link>
      </div>
    </div>
  );
}
