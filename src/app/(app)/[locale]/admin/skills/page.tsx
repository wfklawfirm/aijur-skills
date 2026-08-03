import { asc } from "drizzle-orm";
import { getDictionary, pick } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { db } from "@/lib/db";
import { domains, skills } from "@/lib/db/schema";
import { getReviewGateStatus } from "@/lib/actions/admin";
import { getSessionUser } from "@/lib/auth/session";
import { can } from "@/lib/auth/rbac";
import type { DomainDef, SkillDef } from "@content/types";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/feedback";
import { SectionTitle } from "@/components/layout/app-shell";
import { GatePanel, type GateRow } from "../_components/gate-panel";
import { formatPercent, humanize, reviewStatusTone } from "../_lib/format";

export default async function AdminSkillsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  const [user, domainRows, skillRows] = await Promise.all([
    getSessionUser(),
    db.select().from(domains).orderBy(asc(domains.order)),
    db.select().from(skills),
  ]);

  const canReview = !!user && can(user, "content.review");
  const canPublish = !!user && can(user, "content.publish");

  const gatesBySkill = new Map<string, GateRow[]>(
    await Promise.all(
      skillRows.map(async (s) => [s.id, await getReviewGateStatus("skill", s.id)] as [string, GateRow[]]),
    ),
  );

  const skillsByDomain = new Map<string, typeof skillRows>();
  for (const s of skillRows) {
    const list = skillsByDomain.get(s.domainId) ?? [];
    list.push(s);
    skillsByDomain.set(s.domainId, list);
  }

  if (skillRows.length === 0) {
    return (
      <div>
        <SectionTitle>{dict.admin.skills}</SectionTitle>
        <EmptyState title={dict.common.empty} />
      </div>
    );
  }

  return (
    <div>
      {domainRows.map((domain) => {
        const group = skillsByDomain.get(domain.id);
        if (!group || group.length === 0) return null;
        const domainData = domain.data as DomainDef;
        return (
          <section key={domain.id}>
            <SectionTitle>{pick(domainData.name, loc)}</SectionTitle>
            <ul className="space-y-2.5">
              {group.map((skill) => {
                const data = skill.data as SkillDef;
                const gates = gatesBySkill.get(skill.id) ?? [];
                return (
                  <Card as="li" key={skill.id}>
                    <CardBody>
                      <div className="flex items-start justify-between gap-3">
                        <p dir="auto" className="min-w-0 font-semibold leading-snug">
                          {pick(data.name, loc)}
                        </p>
                        <span className="text-supporting num shrink-0">
                          {dict.admin.confidence} {formatPercent(skill.confidence, loc)}
                        </span>
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        <Badge tone={reviewStatusTone(data.reviewStatus)}>{humanize(data.reviewStatus)}</Badge>
                        <Badge tone="neutral">
                          {dict.admin.sources} <span className="num">{data.sourceIds.length}</span>
                        </Badge>
                      </div>
                      <GatePanel
                        entityType="skill"
                        entityId={skill.id}
                        initialGates={gates}
                        initialStatus={skill.status}
                        canReview={canReview}
                        canPublish={canPublish}
                        requiresLegalEnglish={false}
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
