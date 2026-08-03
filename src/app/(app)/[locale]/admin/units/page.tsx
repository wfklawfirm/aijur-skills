import { asc } from "drizzle-orm";
import { fill, getDictionary, pick } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { db } from "@/lib/db";
import { paths, units } from "@/lib/db/schema";
import { getReviewGateStatus } from "@/lib/actions/admin";
import { getSessionUser } from "@/lib/auth/session";
import { can } from "@/lib/auth/rbac";
import type { PathDef, UnitDef } from "@content/types";
import { Card, CardBody } from "@/components/ui/card";
import { Badge, MasteryMeter } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/feedback";
import { SectionTitle } from "@/components/layout/app-shell";
import { GatePanel, type GateRow } from "../_components/gate-panel";

const LEGAL_ENGLISH_PATH_ID = "path.legal-english-client-communication";

export default async function AdminUnitsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  const [user, pathRows, unitRows] = await Promise.all([
    getSessionUser(),
    db.select().from(paths),
    db.select().from(units).orderBy(asc(units.order)),
  ]);

  const canReview = !!user && can(user, "content.review");
  const canPublish = !!user && can(user, "content.publish");

  const gatesByUnit = new Map<string, GateRow[]>(
    await Promise.all(
      unitRows.map(async (u) => [u.id, await getReviewGateStatus("unit", u.id)] as [string, GateRow[]]),
    ),
  );

  const unitsByPath = new Map<string, typeof unitRows>();
  for (const u of unitRows) {
    const list = unitsByPath.get(u.pathId) ?? [];
    list.push(u);
    unitsByPath.set(u.pathId, list);
  }

  if (unitRows.length === 0) {
    return (
      <div>
        <SectionTitle>{dict.admin.units}</SectionTitle>
        <EmptyState title={dict.common.empty} />
      </div>
    );
  }

  return (
    <div>
      {pathRows.map((path) => {
        const group = unitsByPath.get(path.id);
        if (!group || group.length === 0) return null;
        const pathData = path.data as PathDef;
        return (
          <section key={path.id}>
            <SectionTitle>{pick(pathData.title, loc)}</SectionTitle>
            <ul className="space-y-2.5">
              {group.map((unit) => {
                const data = unit.data as Omit<UnitDef, "activities">;
                const gates = gatesByUnit.get(unit.id) ?? [];
                return (
                  <Card as="li" key={unit.id}>
                    <CardBody>
                      <p dir="auto" className="font-semibold leading-snug">
                        {pick(data.title, loc)}
                      </p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-3">
                        <Badge tone="neutral">
                          {dict.common.level} <span className="num">{unit.stage}</span>
                        </Badge>
                        <MasteryMeter
                          level={unit.targetLevel}
                          label={dict.progress.masteryLevels[`l${unit.targetLevel}` as keyof typeof dict.progress.masteryLevels]}
                          a11yLabel={fill(dict.a11y.masteryLabel, { level: unit.targetLevel }, loc)}
                          compact
                        />
                      </div>
                      <GatePanel
                        entityType="unit"
                        entityId={unit.id}
                        initialGates={gates}
                        initialStatus={unit.status}
                        canReview={canReview}
                        canPublish={canPublish}
                        requiresLegalEnglish={unit.pathId === LEGAL_ENGLISH_PATH_ID}
                      />
                    </CardBody>
                  </Card>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
