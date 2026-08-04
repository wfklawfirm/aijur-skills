import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { listSources } from "@/lib/actions/admin";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Callout, EmptyState } from "@/components/ui/feedback";
import { SectionTitle } from "@/components/layout/app-shell";
import { requireContentAuthorOrRedirect } from "../_lib/guard";

/**
 * There is no book-upload/parsing pipeline built yet. This page is an honest
 * placeholder: it shows which registered sources are waiting to be analysed
 * and explains the intended workflow, but the "Start analysis" action is
 * inert — it must never look like it did something it didn't.
 */
export default async function AdminIngestionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  await requireContentAuthorOrRedirect(loc);
  const sources = await listSources();
  const pending = sources.filter((s) => s.analysisStatus === "pending");

  return (
    <div>
      <SectionTitle>{dict.admin.ingestion}</SectionTitle>
      <Callout tone="warning" title={dict.admin.ingestionNotWired}>
        {dict.admin.ingestionExplainer}
      </Callout>

      {pending.length === 0 ? (
        <div className="mt-3">
          <EmptyState title={dict.common.empty} />
        </div>
      ) : (
        <ul className="mt-3 space-y-2.5">
          {pending.map((s) => (
            <Card as="li" key={s.id}>
              <CardBody className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p dir="auto" className="truncate font-semibold leading-snug">
                    {s.title}
                  </p>
                  <p dir="auto" className="text-supporting mt-0.5">
                    {s.author}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <Badge tone="neutral">{s.analysisStatus}</Badge>
                  <Button type="button" size="sm" variant="secondary" disabled title={dict.admin.ingestionNotWired}>
                    {dict.common.start}
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </ul>
      )}
    </div>
  );
}
