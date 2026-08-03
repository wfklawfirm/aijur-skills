import { getDictionary, pick } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { db } from "@/lib/db";
import { scenarios } from "@/lib/db/schema";
import { getReviewGateStatus } from "@/lib/actions/admin";
import { getSessionUser } from "@/lib/auth/session";
import { can } from "@/lib/auth/rbac";
import type { ScenarioDef } from "@content/types";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/feedback";
import { SectionTitle } from "@/components/layout/app-shell";
import { GatePanel, type GateRow } from "../_components/gate-panel";
import { humanize } from "../_lib/format";

export default async function AdminScenariosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  const [user, scenarioRows] = await Promise.all([getSessionUser(), db.select().from(scenarios)]);

  const canReview = !!user && can(user, "content.review");
  const canPublish = !!user && can(user, "content.publish");

  const gatesByScenario = new Map<string, GateRow[]>(
    await Promise.all(
      scenarioRows.map(async (s) => [s.id, await getReviewGateStatus("scenario", s.id)] as [string, GateRow[]]),
    ),
  );

  return (
    <div>
      <SectionTitle>{dict.admin.scenarios}</SectionTitle>
      {scenarioRows.length === 0 ? (
        <EmptyState title={dict.common.empty} />
      ) : (
        <ul className="space-y-2.5">
          {scenarioRows.map((scenario) => {
            const data = scenario.data as ScenarioDef;
            const gates = gatesByScenario.get(scenario.id) ?? [];
            return (
              <Card as="li" key={scenario.id}>
                <CardBody>
                  <p dir="auto" className="font-semibold leading-snug">
                    {pick(data.title, loc)}
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                    <Badge tone="neutral">
                      {dict.common.level} <span className="num">{scenario.stage}</span>
                    </Badge>
                    <Badge tone="info">{humanize(scenario.languageMode)}</Badge>
                    <Badge tone="neutral">{scenario.rubricId}</Badge>
                  </div>
                  <GatePanel
                    entityType="scenario"
                    entityId={scenario.id}
                    initialGates={gates}
                    initialStatus={scenario.status}
                    canReview={canReview}
                    canPublish={canPublish}
                    requiresLegalEnglish={false}
                  />
                </CardBody>
              </Card>
            );
          })}
        </ul>
      )}
    </div>
  );
}
