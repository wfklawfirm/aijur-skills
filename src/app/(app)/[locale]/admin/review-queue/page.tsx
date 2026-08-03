import { fill, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { listPendingIngestion, listQueuedEvaluations } from "@/lib/actions/admin";
import { getSessionUser } from "@/lib/auth/session";
import { can } from "@/lib/auth/rbac";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Callout, EmptyState } from "@/components/ui/feedback";
import { SectionTitle } from "@/components/layout/app-shell";
import { IngestionActions } from "../_components/ingestion-actions";
import { EvaluationActions } from "../_components/evaluation-actions";
import { formatPercent, humanize } from "../_lib/format";

export default async function AdminReviewQueuePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  const [user, suggestions, evaluationRows] = await Promise.all([
    getSessionUser(),
    listPendingIngestion(),
    listQueuedEvaluations(),
  ]);

  const canDecideIngestion = !!user && can(user, "ingestion.decide");
  const canReviewEvaluations = !!user && can(user, "evaluation.review");

  return (
    <div className="space-y-6">
      <section>
        <SectionTitle>{dict.admin.ingestion}</SectionTitle>
        <Callout tone="info" title={dict.admin.noAutoPublish}>
          {dict.admin.ingestionExplainer}
        </Callout>

        {suggestions.length === 0 ? (
          <div className="mt-3">
            <EmptyState title={dict.common.empty} />
          </div>
        ) : (
          <ul className="mt-3 space-y-2.5">
            {suggestions.map((s) => {
              const snippet = JSON.stringify(s.payload).slice(0, 220);
              return (
                <Card as="li" key={s.id}>
                  <CardBody className="space-y-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge tone="brand">{humanize(s.suggestionType)}</Badge>
                      <Badge tone="neutral">
                        {dict.admin.confidence} {formatPercent(s.confidence, loc)}
                      </Badge>
                      {s.similarEntityId && (
                        <Badge tone="warning">
                          {fill(dict.admin.similarTo, { name: s.similarEntityId }, loc)}
                          {s.similarity != null ? ` · ${formatPercent(s.similarity, loc)}` : ""}
                        </Badge>
                      )}
                    </div>
                    <p dir="auto" className="text-supporting break-all font-mono text-[0.75rem] leading-relaxed">
                      {snippet}
                      {JSON.stringify(s.payload).length > snippet.length ? "…" : ""}
                    </p>
                    <div>
                      <p className="text-label">{dict.admin.suggestionReason}</p>
                      <p dir="auto" className="text-supporting mt-0.5">
                        {s.rationale}
                      </p>
                    </div>
                    {canDecideIngestion && <IngestionActions suggestionId={s.id} />}
                  </CardBody>
                </Card>
              );
            })}
          </ul>
        )}
      </section>

      <section>
        <SectionTitle>{dict.admin.evaluationsPending}</SectionTitle>
        {evaluationRows.length === 0 ? (
          <EmptyState title={dict.common.empty} />
        ) : (
          <ul className="space-y-2.5">
            {evaluationRows.map((e) => (
              <Card as="li" key={e.id}>
                <CardBody className="space-y-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Badge tone="neutral">{e.rubricId}</Badge>
                    <Badge tone="brand">
                      <span className="num">
                        {e.overallScore}/{e.maxScore}
                      </span>
                    </Badge>
                    <Badge tone="neutral">
                      {dict.admin.confidence} {formatPercent(e.confidence, loc)}
                    </Badge>
                  </div>
                  {canReviewEvaluations && <EvaluationActions evaluationId={e.id} />}
                </CardBody>
              </Card>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
