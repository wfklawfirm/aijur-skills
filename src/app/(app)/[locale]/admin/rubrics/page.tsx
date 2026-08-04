import { getDictionary, pick } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { db } from "@/lib/db";
import { rubrics } from "@/lib/db/schema";
import type { RubricDef } from "@content/types";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/feedback";
import { SectionTitle } from "@/components/layout/app-shell";
import { contentStatusTone } from "../_lib/format";
import { requireContentAuthorOrRedirect } from "../_lib/guard";

/**
 * Rubrics are foundational content, edited far less often than skills, units
 * or scenarios — a browse view is enough; there is no gate/publish workflow
 * here in this pass.
 */
export default async function AdminRubricsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  await requireContentAuthorOrRedirect(loc);

  const rows = await db.select().from(rubrics);

  return (
    <div>
      <SectionTitle>{dict.admin.rubrics}</SectionTitle>
      {rows.length === 0 ? (
        <EmptyState title={dict.common.empty} />
      ) : (
        <ul className="space-y-2.5">
          {rows.map((rubric) => {
            const data = rubric.data as RubricDef;
            return (
              <Card as="li" key={rubric.id}>
                <CardBody>
                  <div className="flex items-start justify-between gap-3">
                    <p dir="auto" className="min-w-0 font-semibold leading-snug">
                      {pick(data.name, loc)}
                    </p>
                    <span className="text-supporting num shrink-0">v{rubric.version}</span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    <Badge tone={contentStatusTone(rubric.status)}>{dict.admin.status[rubric.status]}</Badge>
                    <Badge tone="neutral">
                      {dict.feedback.criterion} <span className="num">{data.criteria.length}</span>
                    </Badge>
                    <Badge tone="negative">
                      {dict.feedback.critical} <span className="num">{data.criticalMistakes.length}</span>
                    </Badge>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </ul>
      )}
    </div>
  );
}
