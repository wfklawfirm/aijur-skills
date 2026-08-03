import { redirect } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { getSessionUser } from "@/lib/auth/session";
import { can } from "@/lib/auth/rbac";
import { getOrgReport, listOrgMembers } from "@/lib/actions/org";
import { listTeams } from "@/lib/actions/teams";
import { SectionTitle } from "@/components/layout/app-shell";
import { Card, CardBody } from "@/components/ui/card";
import { Callout } from "@/components/ui/feedback";
import { OrgMembers } from "../_components/org-members";

/**
 * The org-admin surface. `AdminLayout` already requires a signed-in user
 * with `content.read` to reach `/admin` at all, but that's too broad a gate
 * for org-scoped data — this page additionally requires the caller to be
 * scoped to an organization *and* hold `org.members.manage` or
 * `org.reports` for it, or it redirects. The actions called below
 * (`listOrgMembers`, `getOrgReport`, `listTeams`) enforce the same checks
 * again themselves via `require_()` + `assertTenant()` — this page-level
 * check is for a clean redirect, not the actual security boundary.
 */
export default async function AdminOrganizationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  const user = await getSessionUser();
  if (!user || !user.organization || !(can(user, "org.members.manage") || can(user, "org.reports"))) {
    redirect(`/${loc}/admin`);
  }
  const organizationId = user.organization.id;
  const canManageMembers = can(user, "org.members.manage");
  const canAssignTeams = can(user, "org.assign");

  const [members, report, teams] = await Promise.all([
    listOrgMembers(organizationId),
    getOrgReport(organizationId),
    canAssignTeams ? listTeams(organizationId) : Promise.resolve([]),
  ]);
  const scoresHidden = report.length > 0 && report.every((r) => r.avgMasteryLevel === null && r.unitsCompleted === 0);

  return (
    <div>
      <SectionTitle>{dict.admin.organization.title}</SectionTitle>
      <p className="text-supporting -mt-1 mb-3">
        {dict.admin.organization.body} — {user.organization.name}
      </p>

      <SectionTitle>{dict.admin.organization.report.title}</SectionTitle>
      {scoresHidden && (
        <div className="mb-2.5">
          <Callout tone="info">{dict.admin.organization.report.scoresHidden}</Callout>
        </div>
      )}
      <ul className="mb-6 space-y-2">
        {report.map((r) => (
          <Card as="li" key={r.userId}>
            <CardBody className="flex items-center justify-between gap-3">
              <p dir="auto" className="min-w-0 truncate font-semibold">
                {r.name}
              </p>
              <p className="text-supporting num shrink-0">
                {r.avgMasteryLevel === null
                  ? "—"
                  : `${dict.admin.organization.report.unitsCompleted}: ${r.unitsCompleted} · ${dict.admin.organization.report.avgMastery}: ${r.avgMasteryLevel}`}
              </p>
            </CardBody>
          </Card>
        ))}
      </ul>

      <SectionTitle>{dict.admin.organization.members}</SectionTitle>
      <OrgMembers
        organizationId={organizationId}
        members={members}
        teams={teams}
        canManageMembers={canManageMembers}
        canAssignTeams={canAssignTeams}
      />
    </div>
  );
}
