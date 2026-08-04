import { fill, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { listPendingIngestion, listQueuedEvaluations } from "@/lib/actions/admin";
import { can } from "@/lib/auth/rbac";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Callout, EmptyState } from "@/components/ui/feedback";
import { SectionTitle } from "@/components/layout/app-shell";
import { IngestionActions } from "../_components/ingestion-actions";
import { EvaluationActions } from "../_components/evaluation-actions";
import { formatPercent, humanize } from "../_lib/format";
import { requireContentAuthorOrRedirect } from "../_lib/guard";

export default async function AdminReviewQueuePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  const user = await requireContentAuthorOrRedirect(loc);
  const canDecideIngestion = can(user, "ingestion.decide");
  // listQueuedEvaluations() is gated on the stricter `evaluation.review`
  // (see src/lib/actions/admin.ts) -- a content author with no reviewer
  // role would otherwise get an unhandled AuthError from this call.
  const canReviewEvaluations = can(user, "evaluation.review");

  const [suggestions, evaluationRows] = await Promise.all([
    listPendingIngestion(),
    canReviewEvaluations ? listQueuedEvaluations() : Promise.resolve([]),
  ]);

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
            {evaluationRows.map((e) => {
              const criteria = e.criteria as { criterionId: string; score: number; evidence: string; comment: string }[];
              return (
                <Card as="li" key={e.id}>
                  <CardBody className="space-y-3">
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

                    {/* Why this landed in the queue — without this, "uphold or
                        overturn" is a guess. Fabricated evidence and low model
                        confidence call for very different reviewer scrutiny. */}
                    {e.humanReviewReason && (
                      <Callout tone="warning" title={dict.admin.queueReasonLabel}>
                        {dict.admin.queueReason[e.humanReviewReason]}
                      </Callout>
                    )}

                    {criteria.length > 0 && (
                      <div>
                        <p className="text-label">{dict.feedback.criterion}</p>
                        <ul className="mt-1 space-y-1.5">
                          {criteria.map((c) => (
                            <li key={c.criterionId} className="text-supporting">
                              <span className="num font-semibold text-[var(--foreground)]">
                                {c.criterionId} — {dict.feedback.score} {c.score}/3
                              </span>
                              <p dir="auto" className="mt-0.5 italic">
                                “{c.evidence}”
                              </p>
                              <p dir="auto" className="mt-0.5">
                                {c.comment}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {e.strengths.length > 0 && (
                      <div>
                        <p className="text-label">{dict.feedback.strengths}</p>
                        <ul className="mt-1 list-inside list-disc space-y-0.5">
                          {e.strengths.map((s, i) => (
                            <li dir="auto" key={i} className="text-supporting">
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {e.missedOpportunities.length > 0 && (
                      <div>
                        <p className="text-label">{dict.feedback.missed}</p>
                        <ul className="mt-1 list-inside list-disc space-y-0.5">
                          {e.missedOpportunities.map((s, i) => (
                            <li dir="auto" key={i} className="text-supporting">
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {e.criticalMistakes.length > 0 && (
                      <div>
                        <p className="text-label">{dict.feedback.critical}</p>
                        <div className="mt-1 flex flex-wrap gap-1.5">
                          {e.criticalMistakes.map((id) => (
                            <Badge key={id} tone="negative">
                              {id}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <p className="text-label">{dict.feedback.priority}</p>
                      <p dir="auto" className="text-supporting mt-0.5">
                        {e.priorityImprovement}
                      </p>
                    </div>

                    {e.betterAlternative && (
                      <div>
                        <p className="text-label">{dict.feedback.better}</p>
                        <p dir="auto" className="text-supporting mt-0.5">
                          {e.betterAlternative}
                        </p>
                      </div>
                    )}

                    {canReviewEvaluations && <EvaluationActions evaluationId={e.id} />}
                  </CardBody>
                </Card>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
