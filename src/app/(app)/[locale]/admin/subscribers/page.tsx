import Link from "next/link";
import { getDictionary, formatDate } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { SectionTitle } from "@/components/layout/app-shell";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/form";
import { EmptyState } from "@/components/ui/feedback";
import { requireSubscribersReadOrRedirect } from "../_lib/guard";
import { listPlatformSubscribers } from "@/lib/actions/subscribers";
import type { SubscriberListParams } from "@/lib/actions/subscribers-core";
import { subscriptionStatusTone } from "../_lib/format";
import { ExportCsvButton } from "../_components/export-csv-button";

const STATUS_VALUES: Array<SubscriberListParams["status"]> = [
  "all",
  "scheduled",
  "trial",
  "active",
  "expiring_soon",
  "expired",
  "suspended",
  "cancelled",
  "lifetime",
  "no_subscription",
];
const SORT_VALUES = ["newest", "oldest", "expiring_soon", "name_asc", "most_active"] as const;

export default async function SubscribersListPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string; status?: string; sort?: string; page?: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  await requireSubscribersReadOrRedirect(loc);

  const sp = await searchParams;
  const search = sp.q ?? "";
  const status = (STATUS_VALUES.includes(sp.status as never) ? sp.status : "all") as NonNullable<SubscriberListParams["status"]>;
  const sort = (SORT_VALUES.includes(sp.sort as never) ? sp.sort : "newest") as NonNullable<SubscriberListParams["sort"]>;
  const page = Math.max(Number(sp.page) || 1, 1);
  const pageSize = 20;

  const result = await listPlatformSubscribers({ search, status, sort, page, pageSize });
  const totalPages = Math.max(Math.ceil(result.total / result.pageSize), 1);
  const base = `/${loc}/admin/subscribers`;

  function pageHref(p: number): string {
    const usp = new URLSearchParams();
    if (search) usp.set("q", search);
    if (status !== "all") usp.set("status", status);
    if (sort !== "newest") usp.set("sort", sort);
    if (p > 1) usp.set("page", String(p));
    const qs = usp.toString();
    return qs ? `${base}?${qs}` : base;
  }

  const hasFilters = Boolean(search) || status !== "all" || sort !== "newest";

  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <SectionTitle>{dict.admin.subscribers.title}</SectionTitle>
          <p className="text-supporting -mt-1 mb-1">{dict.admin.subscribers.body}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <LinkButton href={`${base}/new`} variant="primary" size="sm">
          {dict.admin.subscribers.addCta}
        </LinkButton>
        <ExportCsvButton params={{ search, status, sort }} label={dict.admin.subscribers.exportCsv} exportingLabel={dict.admin.subscribers.exporting} />
        {hasFilters && (
          <LinkButton href={base} variant="ghost" size="sm">
            {dict.admin.subscribers.resetFilters}
          </LinkButton>
        )}
        <span className="text-supporting ms-auto">{dict.admin.subscribers.totalCount.replace("{count}", String(result.total))}</span>
      </div>

      <form method="get" className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto_auto]">
        <Input type="search" name="q" defaultValue={search} placeholder={dict.admin.subscribers.searchPlaceholder} />
        <Select name="status" defaultValue={status} className="sm:w-44">
          <option value="all">{dict.admin.subscribers.allStatuses}</option>
          {STATUS_VALUES.filter((s): s is Exclude<typeof s, "all" | undefined> => Boolean(s) && s !== "all").map((s) => (
            <option key={s} value={s}>
              {dict.admin.subscriberStatus[s]}
            </option>
          ))}
        </Select>
        <Select name="sort" defaultValue={sort} className="sm:w-44">
          <option value="newest">{dict.admin.subscribers.sortNewest}</option>
          <option value="oldest">{dict.admin.subscribers.sortOldest}</option>
          <option value="expiring_soon">{dict.admin.subscribers.sortExpiringSoon}</option>
          <option value="name_asc">{dict.admin.subscribers.sortNameAsc}</option>
          <option value="most_active">{dict.admin.subscribers.sortMostActive}</option>
        </Select>
      </form>

      {result.items.length === 0 ? (
        <EmptyState title={dict.admin.subscribers.noResults} />
      ) : (
        <>
          {/* Desktop / tablet: a real table. */}
          <div className="hidden overflow-x-auto rounded-[var(--radius-card)] border border-[var(--border)] md:block">
            <table className="w-full min-w-[840px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface-muted)] text-start">
                  <th className="p-3 text-start font-semibold">{dict.admin.subscribers.colName}</th>
                  <th className="p-3 text-start font-semibold">{dict.admin.subscribers.colPlan}</th>
                  <th className="p-3 text-start font-semibold">{dict.admin.subscribers.colStatus}</th>
                  <th className="p-3 text-start font-semibold">{dict.admin.subscribers.colDaysRemaining}</th>
                  <th className="p-3 text-start font-semibold">{dict.admin.subscribers.colLastSeen}</th>
                  <th className="p-3 text-start font-semibold">{dict.admin.subscribers.colProgress}</th>
                </tr>
              </thead>
              <tbody>
                {result.items.map((s) => (
                  <tr key={s.id} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--surface-muted)]">
                    <td className="p-3">
                      <Link href={`${base}/${s.id}`} className="font-semibold text-[var(--foreground)] hover:underline">
                        {s.name}
                      </Link>
                      <p className="text-supporting">{s.email}</p>
                    </td>
                    <td className="p-3">{s.planName ?? dict.admin.subscriberDetail.noPlanAssigned}</td>
                    <td className="p-3">
                      <Badge tone={subscriptionStatusTone(s.displayStatus)}>{dict.admin.subscriberStatus[s.displayStatus]}</Badge>
                    </td>
                    <td className="p-3 num">
                      {s.displayStatus === "lifetime" ? dict.admin.subscribers.lifetimeBadge : (s.daysRemaining ?? dict.admin.subscribers.noSubscription)}
                    </td>
                    <td className="p-3">{s.lastSeenAt ? formatDate(s.lastSeenAt, loc) : dict.admin.subscriberDetail.neverSignedIn}</td>
                    <td className="p-3 num">{s.progressPercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: cards, not a squeezed table. */}
          <div className="space-y-2 md:hidden">
            {result.items.map((s) => (
              <Link key={s.id} href={`${base}/${s.id}`} className="block">
                <Card className="transition-colors hover:bg-[var(--surface-muted)]">
                  <CardBody className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate font-semibold">{s.name}</p>
                        <p className="text-supporting truncate">{s.email}</p>
                      </div>
                      <Badge tone={subscriptionStatusTone(s.displayStatus)}>{dict.admin.subscriberStatus[s.displayStatus]}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--foreground-secondary)]">
                      <span>{s.planName ?? dict.admin.subscriberDetail.noPlanAssigned}</span>
                      {s.daysRemaining !== null && <span className="num">{dict.admin.subscriberDetail.daysRemaining.replace("{count}", String(s.daysRemaining))}</span>}
                      <span className="num">{s.progressPercent}%</span>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-1">
              <LinkButton href={pageHref(Math.max(page - 1, 1))} variant="outline" size="sm" aria-disabled={page <= 1} className={page <= 1 ? "pointer-events-none opacity-50" : ""}>
                {dict.admin.subscribers.prevPage}
              </LinkButton>
              <span className="text-supporting">{dict.admin.subscribers.pageInfo.replace("{page}", String(page)).replace("{total}", String(totalPages))}</span>
              <LinkButton href={pageHref(Math.min(page + 1, totalPages))} variant="outline" size="sm" aria-disabled={page >= totalPages} className={page >= totalPages ? "pointer-events-none opacity-50" : ""}>
                {dict.admin.subscribers.nextPage}
              </LinkButton>
            </div>
          )}
        </>
      )}
    </div>
  );
}
