import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { getDictionary, formatDate } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { db } from "@/lib/db";
import { certificates, masteryRecords } from "@/lib/db/schema";
import { SectionTitle } from "@/components/layout/app-shell";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { computeStreak, buildWeeklyStats } from "@/lib/learning/dashboard";
import { requireSubscribersReadOrRedirect } from "../../_lib/guard";
import { getPlatformSubscriberDetail, listSubscriptionPlans } from "@/lib/actions/subscribers";
import { subscriptionStatusTone, accountStatusTone } from "../../_lib/format";
import { SubscriberActionsPanel } from "./actions-panel";
import { NotesPanel } from "./notes-panel";

export default async function SubscriberDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  await requireSubscribersReadOrRedirect(loc);

  let detail;
  try {
    detail = await getPlatformSubscriberDetail(id);
  } catch {
    notFound();
  }

  const [plans, masteryRows, certRows] = await Promise.all([
    listSubscriptionPlans(),
    db.select({ level: masteryRecords.level }).from(masteryRecords).where(eq(masteryRecords.userId, id)),
    db.select({ id: certificates.id }).from(certificates).where(eq(certificates.userId, id)),
  ]);
  const [streak, weekly] = await Promise.all([computeStreak(id), buildWeeklyStats(id)]);
  const progressPercent = masteryRows.length
    ? Math.round((masteryRows.reduce((sum, r) => sum + r.level, 0) / masteryRows.length / 6) * 100)
    : 0;

  const d = dict.admin.subscriberDetail;
  const { account, subscription, history, notes } = detail;

  return (
    <div className="space-y-3">
      <SectionTitle>{account.name}</SectionTitle>

      <Card as="div">
        <CardHeader>
          <CardTitle level={3}>{d.accountSection}</CardTitle>
          <Badge tone={accountStatusTone(account.accountStatus)}>
            {account.accountStatus === "suspended" ? dict.admin.accounts.statusSuspended : dict.admin.accounts.statusActive}
          </Badge>
        </CardHeader>
        <CardBody className="space-y-1 text-sm text-[var(--foreground-secondary)]">
          <p>{account.email}</p>
          {account.phone && <p>{account.phone}</p>}
          {(account.firmOrOffice || account.jobTitle) && <p>{[account.jobTitle, account.firmOrOffice].filter(Boolean).join(" — ")}</p>}
          {account.country && <p>{account.country}</p>}
          <p>{d.joinedOn.replace("{date}", formatDate(account.createdAt, loc))}</p>
          <p>{account.lastSeenAt ? d.lastSeenOn.replace("{date}", formatDate(account.lastSeenAt, loc)) : d.neverSignedIn}</p>
          {account.platformRole && (
            <p>
              <Badge tone="brand">{dict.admin.admins.roleValue[account.platformRole]}</Badge>
            </p>
          )}
        </CardBody>
      </Card>

      <Card as="div">
        <CardHeader>
          <CardTitle level={3}>{d.subscriptionSection}</CardTitle>
          {subscription && <Badge tone={subscriptionStatusTone(subscription.displayStatus)}>{dict.admin.subscriberStatus[subscription.displayStatus]}</Badge>}
        </CardHeader>
        <CardBody className="space-y-1 text-sm text-[var(--foreground-secondary)]">
          {subscription ? (
            <>
              <p className="font-semibold text-[var(--foreground)]">{subscription.planName ?? d.noPlanAssigned}</p>
              {subscription.startAt && <p>{d.startsOn.replace("{date}", formatDate(subscription.startAt, loc))}</p>}
              <p>{subscription.endAt ? d.endsOn.replace("{date}", formatDate(subscription.endAt, loc)) : d.noEndDate}</p>
              {subscription.daysRemaining !== null && <p className="num">{d.daysRemaining.replace("{count}", String(subscription.daysRemaining))}</p>}
              <p>{d.grantMethod}: {d.grantMethodValue[subscription.grantMethod as keyof typeof d.grantMethodValue] ?? subscription.grantMethod}</p>
              {subscription.lastEditedByName && <p>{d.lastEditedBy.replace("{name}", subscription.lastEditedByName)}</p>}
              <p>
                {d.contentAccess}: <Badge tone={subscription.canAccessContent ? "positive" : "negative"}>{subscription.canAccessContent ? d.accessGranted : d.accessBlocked}</Badge>
              </p>
            </>
          ) : (
            <p>{d.noSubscriptionYet}</p>
          )}
        </CardBody>
      </Card>

      <Card as="div">
        <CardHeader>
          <CardTitle level={3}>{d.learningSection}</CardTitle>
        </CardHeader>
        <CardBody className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
          <div>
            <p className="text-kpi-value num">{progressPercent}%</p>
            <p className="text-supporting">{d.progressPercent}</p>
          </div>
          <div>
            <p className="text-kpi-value num">{streak}</p>
            <p className="text-supporting">{d.dayStreak}</p>
          </div>
          <div>
            <p className="text-kpi-value num">{weekly.minutesPracticed}</p>
            <p className="text-supporting">{d.weeklyMinutes}</p>
          </div>
          <div>
            <p className="text-kpi-value num">{certRows.length}</p>
            <p className="text-supporting">{d.certificatesCount}</p>
          </div>
        </CardBody>
      </Card>

      <Card as="div">
        <CardHeader>
          <CardTitle level={3}>{d.actions}</CardTitle>
        </CardHeader>
        <CardBody>
          <SubscriberActionsPanel
            locale={loc}
            subscriberId={account.id}
            subscriberEmail={account.email}
            subscriberName={account.name}
            accountStatus={account.accountStatus}
            subscription={subscription}
            plans={plans}
          />
        </CardBody>
      </Card>

      <Card as="div">
        <CardHeader>
          <CardTitle level={3}>{d.historySection}</CardTitle>
        </CardHeader>
        <CardBody className="space-y-2">
          {history.length === 0 ? (
            <p className="text-supporting">{d.noHistory}</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {history.map((h) => (
                <li key={h.id} className="border-b border-[var(--border)] pb-2 last:border-0">
                  <p className="font-medium">
                    {d.eventType[h.type as keyof typeof d.eventType] ?? h.type} — {formatDate(h.createdAt, loc)}
                  </p>
                  {h.actorName && <p className="text-supporting">{h.actorName}</p>}
                  {h.reason && <p className="text-supporting">{h.reason}</p>}
                </li>
              ))}
            </ul>
          )}
        </CardBody>
      </Card>

      <Card as="div">
        <CardHeader>
          <CardTitle level={3}>{d.notesSection}</CardTitle>
        </CardHeader>
        <CardBody>
          <NotesPanel subscriberId={account.id} notes={notes} locale={loc} />
        </CardBody>
      </Card>
    </div>
  );
}
