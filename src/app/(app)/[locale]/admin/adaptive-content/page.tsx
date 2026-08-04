import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { getAdaptiveContentStats, listAdaptiveContentReviewQueue } from "@/lib/actions/adaptive-admin";
import { can } from "@/lib/auth/rbac";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Callout, EmptyState } from "@/components/ui/feedback";
import { SectionTitle } from "@/components/layout/app-shell";
import { AdaptiveContentActions } from "../_components/adaptive-content-actions";
import { formatPercent } from "../_lib/format";
import { requireContentAuthorOrRedirect } from "../_lib/guard";

/**
 * The "Adaptive Content Intelligence" monitor -- one page covering
 * generation counts, a repetition monitor (shape-type/skill usage, per
 * content type since Phase 2 added Daily Challenge alongside Hook --
 * docs/ADAPTIVE_ENGINE_ARCHITECTURE.md §14), quality/novelty averages, and
 * the human-review queue for anything the quality gates didn't auto-approve.
 * See adaptive-admin-core.ts for why this is one page instead of the build
 * spec's four separate dashboards.
 */
export default async function AdaptiveContentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  const user = await requireContentAuthorOrRedirect(loc);
  const canDecide = can(user, "ingestion.decide");

  const [stats, reviewQueue] = await Promise.all([getAdaptiveContentStats(), listAdaptiveContentReviewQueue()]);

  const statusOrder = ["published", "approved", "human_review_required", "rejected", "generated_draft", "retired"] as const;

  return (
    <div className="space-y-6">
      <Callout tone="info" title={dict.admin.adaptiveContent.title}>
        {dict.admin.adaptiveContent.body}
      </Callout>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardBody>
            <p className="text-kpi-value num">{stats.total}</p>
            <p className="text-supporting mt-1">{dict.admin.adaptiveContent.title}</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p className="text-kpi-value num">{formatPercent(stats.averageQualityScore, loc)}</p>
            <p className="text-supporting mt-1">{dict.admin.adaptiveContent.avgQuality}</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p className="text-kpi-value num">{formatPercent(stats.averageNoveltyScore, loc)}</p>
            <p className="text-supporting mt-1">{dict.admin.adaptiveContent.avgNovelty}</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p className="text-kpi-value num">{reviewQueue.length}</p>
            <p className="text-supporting mt-1">{dict.admin.evaluationsPending}</p>
          </CardBody>
        </Card>
      </div>

      <section>
        <SectionTitle>{dict.admin.adaptiveContent.title}</SectionTitle>
        <div className="flex flex-wrap gap-1.5">
          {statusOrder
            .filter((status) => stats.byStatus[status])
            .map((status) => (
              <Badge key={status} tone={status === "published" || status === "approved" ? "positive" : status === "rejected" ? "negative" : "neutral"}>
                {dict.admin.adaptiveContent[status]}
                <span className="num">{stats.byStatus[status]}</span>
              </Badge>
            ))}
        </div>
      </section>

      <section>
        <SectionTitle>{dict.admin.adaptiveContent.contentTypeSplit}</SectionTitle>
        <div className="flex flex-wrap gap-1.5">
          {stats.byContentType.map((c) => (
            <Badge key={c.contentType} tone="neutral">
              {c.contentType === "daily_challenge" ? dict.home.dailyChallenge : dict.admin.adaptiveContent.contentTypeHook}
              <span className="num">{c.count}</span>
            </Badge>
          ))}
        </div>
      </section>

      {stats.byHookType.length > 0 && (
        <section>
          <SectionTitle>{dict.admin.adaptiveContent.hookTypeUsage}</SectionTitle>
          <div className="flex flex-wrap gap-1.5">
            {stats.byHookType.map((h) => (
              <Badge key={h.hookType} tone="brand">
                {h.hookType.replace(/_/g, " ")}
                <span className="num">{h.count}</span>
              </Badge>
            ))}
          </div>
        </section>
      )}

      {stats.byChallengeType.length > 0 && (
        <section>
          <SectionTitle>{dict.admin.adaptiveContent.challengeTypeUsage}</SectionTitle>
          <div className="flex flex-wrap gap-1.5">
            {stats.byChallengeType.map((c) => (
              <Badge key={c.challengeType} tone="brand">
                {c.challengeType.replace(/_/g, " ")}
                <span className="num">{c.count}</span>
              </Badge>
            ))}
          </div>
        </section>
      )}

      <section>
        <SectionTitle>{dict.admin.adaptiveContent.skillCoverage}</SectionTitle>
        <div className="flex flex-wrap gap-1.5">
          {stats.bySkill.map((sk) => (
            <Badge key={sk.skillId} tone="info">
              {sk.skillId}
              <span className="num">{sk.count}</span>
            </Badge>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>{dict.admin.evaluationsPending}</SectionTitle>
        {reviewQueue.length === 0 ? (
          <EmptyState title={dict.admin.adaptiveContent.reviewQueueEmpty} />
        ) : (
          <ul className="space-y-2.5">
            {reviewQueue.map((item) => (
              <Card as="li" key={item.id}>
                <CardHeader>
                  <div className="min-w-0">
                    <p className="text-supporting">
                      {item.skillId} · {item.language} ·{" "}
                      {item.contentType === "daily_challenge" ? item.dimensions.challengeType : item.dimensions.hookType}
                    </p>
                    <CardTitle level={3}>{item.payload.title}</CardTitle>
                  </div>
                  <Badge tone="warning">
                    {dict.admin.adaptiveContent.avgQuality} {formatPercent(item.qualityScore, loc)}
                  </Badge>
                </CardHeader>
                <CardBody className="space-y-2">
                  <p dir="auto" className="text-supporting">
                    {item.payload.body}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {Object.entries(item.qualityGateReport).map(([gate, passed]) => (
                      <Badge key={gate} tone={passed ? "positive" : "negative"}>
                        {gate}
                      </Badge>
                    ))}
                  </div>
                  {canDecide && <AdaptiveContentActions contentId={item.id} />}
                </CardBody>
              </Card>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
