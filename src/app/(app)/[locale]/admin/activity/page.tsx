import { getDictionary, formatDate } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { SectionTitle } from "@/components/layout/app-shell";
import { Card, CardBody } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/feedback";
import { requireAuditReadOrRedirect } from "../_lib/guard";
import { listAdminActivityLog } from "@/lib/actions/subscribers";

const ENTITY_TYPES = ["user", "subscription", "plan", "settings", "report"];

export default async function ActivityPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ type?: string; page?: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  await requireAuditReadOrRedirect(loc);

  const sp = await searchParams;
  const entityType = ENTITY_TYPES.includes(sp.type ?? "") ? sp.type : undefined;
  const page = Math.max(Number(sp.page) || 1, 1);

  const { items, total } = await listAdminActivityLog({ entityType, page, pageSize: 50 });
  const d = dict.admin.activity;
  const base = `/${loc}/admin/activity`;

  return (
    <div className="space-y-3">
      <SectionTitle>{d.title}</SectionTitle>
      <p className="text-supporting -mt-1 mb-1">{d.body}</p>

      <div className="flex flex-wrap gap-2">
        <LinkButton href={base} variant={!entityType ? "primary" : "outline"} size="sm">
          {d.allTypes}
        </LinkButton>
        {ENTITY_TYPES.map((t) => (
          <LinkButton key={t} href={`${base}?type=${t}`} variant={entityType === t ? "primary" : "outline"} size="sm">
            {t}
          </LinkButton>
        ))}
      </div>

      {items.length === 0 ? (
        <EmptyState title={d.noEntries} />
      ) : (
        <div className="space-y-2">
          {items.map((i) => (
            <Card key={i.id} as="div">
              <CardBody className="space-y-1 text-sm">
                <p className="font-semibold">{i.action}</p>
                <p className="text-supporting">
                  {d.colActor}: {i.actorName ?? "—"} · {d.colEntity}: {i.entityType}/{i.entityId} · {formatDate(i.createdAt, loc)}
                </p>
                {Boolean(i.meta && typeof i.meta === "object" && "reason" in (i.meta as Record<string, unknown>)) && (
                  <p className="text-supporting">
                    {d.colReason}: {String((i.meta as Record<string, unknown>).reason)}
                  </p>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      )}

      {total > 50 && (
        <div className="flex items-center justify-between pt-1">
          <LinkButton
            href={`${base}?${entityType ? `type=${entityType}&` : ""}page=${Math.max(page - 1, 1)}`}
            variant="outline"
            size="sm"
            className={page <= 1 ? "pointer-events-none opacity-50" : ""}
          >
            {dict.admin.subscribers.prevPage}
          </LinkButton>
          <span className="text-supporting">{total}</span>
          <LinkButton
            href={`${base}?${entityType ? `type=${entityType}&` : ""}page=${page + 1}`}
            variant="outline"
            size="sm"
            className={page * 50 >= total ? "pointer-events-none opacity-50" : ""}
          >
            {dict.admin.subscribers.nextPage}
          </LinkButton>
        </div>
      )}
    </div>
  );
}
