import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { listSources } from "@/lib/actions/admin";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/feedback";
import { SectionTitle } from "@/components/layout/app-shell";
import { analysisStatusTone, humanize, reviewStatusTone } from "../_lib/format";

export default async function AdminSourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  const rows = await listSources();

  return (
    <div>
      <SectionTitle>{dict.admin.sources}</SectionTitle>
      <p className="text-supporting -mt-1 mb-3">{dict.admin.sourcesBody}</p>

      {rows.length === 0 ? (
        <EmptyState title={dict.common.empty} />
      ) : (
        <ul className="space-y-2.5">
          {rows.map((s) => (
            <Card as="li" key={s.id}>
              <CardBody className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <p dir="auto" className="min-w-0 font-semibold leading-snug">
                    {s.title}
                  </p>
                  {s.year != null && <span className="num text-supporting shrink-0">{s.year}</span>}
                </div>
                <p dir="auto" className="text-supporting">
                  {s.author} · {s.language.toUpperCase()}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge tone="neutral">{humanize(s.kind)}</Badge>
                  <Badge tone={analysisStatusTone(s.analysisStatus)}>{humanize(s.analysisStatus)}</Badge>
                  <Badge tone={reviewStatusTone(s.reviewStatus)}>{humanize(s.reviewStatus)}</Badge>
                </div>
              </CardBody>
            </Card>
          ))}
        </ul>
      )}
    </div>
  );
}
