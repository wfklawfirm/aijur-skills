"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/form";
import { Callout } from "@/components/ui/feedback";
import { Sheet } from "@/components/ui/sheet";
import type { Locale } from "@/lib/i18n/config";
import {
  cancelSubscription,
  changeSubscriptionPlan,
  grantLifetimeAccess,
  reactivateSubscriberAccount,
  reactivateSubscription,
  resendSubscriberInvite,
  signOutSubscriberSessions,
  suspendSubscriberAccount,
  suspendSubscription,
  updatePlatformSubscriber,
  updateSubscriptionPeriod,
  hidePlatformSubscriber,
} from "@/lib/actions/subscribers";
import type { SubscriberDetail } from "@/lib/actions/subscribers-core";

type PlanRow = { id: string; name: string; status: string };
type SheetKind =
  | "edit"
  | "extend"
  | "changePlan"
  | "suspendSub"
  | "reactivateSub"
  | "cancelSub"
  | "lifetime"
  | "suspendAccount"
  | "hideAccount"
  | null;

function errorMessage(err: unknown, common: { errorBody: string }, d: ReturnType<typeof useI18n>["dict"]["admin"]["subscriberDetail"]): string {
  const code = err instanceof Error ? err.message : "";
  if (code === "reason_required") return d.reasonRequired;
  return common.errorBody;
}

export function SubscriberActionsPanel({
  locale,
  subscriberId,
  subscriberEmail,
  subscriberName,
  accountStatus,
  subscription,
  plans,
}: {
  locale: Locale;
  subscriberId: string;
  subscriberEmail: string;
  subscriberName: string;
  accountStatus: "active" | "suspended";
  subscription: SubscriberDetail["subscription"];
  plans: PlanRow[];
}) {
  const { dict } = useI18n();
  const d = dict.admin.subscriberDetail;
  const router = useRouter();

  const [open, setOpen] = React.useState<SheetKind>(null);
  const [pending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | null>(null);
  const [notice, setNotice] = React.useState<string | null>(null);
  const [reason, setReason] = React.useState("");

  function close() {
    setOpen(null);
    setReason("");
    setError(null);
  }

  function run(action: () => Promise<void>) {
    setError(null);
    startTransition(async () => {
      try {
        await action();
        close();
        router.refresh();
      } catch (err) {
        setError(errorMessage(err, dict.common, d));
      }
    });
  }

  // --- Edit account ---
  const [editName, setEditName] = React.useState(subscriberName);
  const [editPhone, setEditPhone] = React.useState("");
  const [editCountry, setEditCountry] = React.useState("");

  // --- Extend / adjust period ---
  const [extendMode, setExtendMode] = React.useState<"add" | "set">("add");
  const [extendAmount, setExtendAmount] = React.useState(30);
  const [extendUnit, setExtendUnit] = React.useState<"days" | "months" | "years">("days");
  const [extendFrom, setExtendFrom] = React.useState<"today" | "current_end">("current_end");
  const [newEndDate, setNewEndDate] = React.useState("");

  // --- Change plan ---
  const [selectedPlanId, setSelectedPlanId] = React.useState(subscription?.planId ?? "");

  const subId = subscription?.id ?? null;

  return (
    <div className="space-y-3">
      {notice && <Callout tone="positive">{notice}</Callout>}
      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={() => setOpen("edit")}>{d.editAccount}</Button>
        {subId && (
          <>
            <Button size="sm" variant="outline" onClick={() => setOpen("extend")}>{d.extendSubscription}</Button>
            <Button size="sm" variant="outline" onClick={() => setOpen("changePlan")}>{d.changePlan}</Button>
            {subscription?.status === "suspended" ? (
              <Button size="sm" variant="outline" onClick={() => setOpen("reactivateSub")}>{d.reactivateSubscription}</Button>
            ) : (
              <Button size="sm" variant="outline" onClick={() => setOpen("suspendSub")}>{d.suspendSubscription}</Button>
            )}
            {subscription?.status !== "cancelled" && (
              <Button size="sm" variant="outline" onClick={() => setOpen("cancelSub")}>{d.cancelSubscription}</Button>
            )}
            {subscription?.status !== "lifetime" && (
              <Button size="sm" variant="outline" onClick={() => setOpen("lifetime")}>{d.grantLifetime}</Button>
            )}
          </>
        )}
        <Button
          size="sm"
          variant="outline"
          loading={pending}
          onClick={() =>
            run(async () => {
              await resendSubscriberInvite(locale, subscriberId, subscriberEmail, subscriberName);
              setNotice(d.inviteResent);
            })
          }
        >
          {d.resendInvite}
        </Button>
        <Button
          size="sm"
          variant="outline"
          loading={pending}
          onClick={() =>
            run(async () => {
              await signOutSubscriberSessions(subscriberId);
              setNotice(d.signedOutEverywhere);
            })
          }
        >
          {d.signOutSessions}
        </Button>
        {accountStatus === "suspended" ? (
          <Button size="sm" variant="outline" loading={pending} onClick={() => run(() => reactivateSubscriberAccount(subscriberId))}>
            {d.reactivateAccount}
          </Button>
        ) : (
          <Button size="sm" variant="destructive" onClick={() => setOpen("suspendAccount")}>{d.suspendAccount}</Button>
        )}
        <Button size="sm" variant="destructive" onClick={() => setOpen("hideAccount")}>{d.hideAccount}</Button>
      </div>

      {/* Edit account */}
      <Sheet open={open === "edit"} onClose={close} title={d.editAccount} closeLabel={dict.common.close}>
        {error && <div className="mb-3"><Callout tone="negative">{error}</Callout></div>}
        <div className="space-y-3">
          <Field label={dict.admin.subscriberNew.nameLabel}>{(p) => <Input {...p} value={editName} onChange={(e) => setEditName(e.target.value)} />}</Field>
          <Field label={dict.admin.subscriberNew.phoneLabel}>{(p) => <Input {...p} value={editPhone} onChange={(e) => setEditPhone(e.target.value)} />}</Field>
          <Field label={dict.admin.subscriberNew.countryLabel}>{(p) => <Input {...p} value={editCountry} onChange={(e) => setEditCountry(e.target.value)} />}</Field>
          <Button
            block
            variant="primary"
            loading={pending}
            onClick={() =>
              run(async () => {
                await updatePlatformSubscriber(subscriberId, { name: editName, phone: editPhone || undefined, country: editCountry || undefined });
              })
            }
          >
            {dict.common.save}
          </Button>
        </div>
      </Sheet>

      {/* Extend / adjust period */}
      <Sheet open={open === "extend"} onClose={close} title={d.extendSubscription} closeLabel={dict.common.close}>
        {error && <div className="mb-3"><Callout tone="negative">{error}</Callout></div>}
        <div className="space-y-3">
          <div className="flex gap-2">
            <Button type="button" size="sm" variant={extendMode === "add" ? "primary" : "outline"} onClick={() => setExtendMode("add")}>{d.extendModeAdd}</Button>
            <Button type="button" size="sm" variant={extendMode === "set" ? "primary" : "outline"} onClick={() => setExtendMode("set")}>{d.extendModeSet}</Button>
          </div>
          {extendMode === "add" ? (
            <>
              <div className="grid grid-cols-2 gap-3">
                <Field label={d.extendAmount}>{(p) => <Input {...p} type="number" min={1} value={extendAmount} onChange={(e) => setExtendAmount(Number(e.target.value))} />}</Field>
                <Field label={d.extendMode}>
                  {(p) => (
                    <Select {...p} value={extendUnit} onChange={(e) => setExtendUnit(e.target.value as typeof extendUnit)}>
                      <option value="days">{d.extendUnitDays}</option>
                      <option value="months">{d.extendUnitMonths}</option>
                      <option value="years">{d.extendUnitYears}</option>
                    </Select>
                  )}
                </Field>
              </div>
              <Field label={d.extendFrom}>
                {(p) => (
                  <Select {...p} value={extendFrom} onChange={(e) => setExtendFrom(e.target.value as typeof extendFrom)}>
                    <option value="current_end">{d.extendFromCurrentEnd}</option>
                    <option value="today">{d.extendFromToday}</option>
                  </Select>
                )}
              </Field>
            </>
          ) : (
            <Field label={d.newEndDateLabel}>{(p) => <Input {...p} type="date" value={newEndDate} onChange={(e) => setNewEndDate(e.target.value)} />}</Field>
          )}
          <Field label={d.reasonLabel}>{(p) => <Textarea {...p} value={reason} onChange={(e) => setReason(e.target.value)} />}</Field>
          <Button
            block
            variant="primary"
            loading={pending}
            onClick={() =>
              run(async () => {
                if (!subId) return;
                await updateSubscriptionPeriod(
                  subId,
                  extendMode === "add"
                    ? { mode: "add", amount: extendAmount, unit: extendUnit, from: extendFrom, reason: reason || undefined }
                    : { mode: "set", newEndDateStr: newEndDate, reason: reason || undefined },
                );
              })
            }
          >
            {d.confirmCta}
          </Button>
        </div>
      </Sheet>

      {/* Change plan */}
      <Sheet open={open === "changePlan"} onClose={close} title={d.changePlan} closeLabel={dict.common.close}>
        {error && <div className="mb-3"><Callout tone="negative">{error}</Callout></div>}
        <div className="space-y-3">
          <Field label={dict.admin.subscriberNew.planLabel}>
            {(p) => (
              <Select {...p} value={selectedPlanId} onChange={(e) => setSelectedPlanId(e.target.value)}>
                <option value="">{dict.admin.subscriberNew.noPlan}</option>
                {plans.map((pl) => (
                  <option key={pl.id} value={pl.id}>
                    {pl.name}
                  </option>
                ))}
              </Select>
            )}
          </Field>
          <Field label={d.reasonLabel}>{(p) => <Textarea {...p} value={reason} onChange={(e) => setReason(e.target.value)} />}</Field>
          <Button
            block
            variant="primary"
            loading={pending}
            onClick={() => run(async () => { if (subId) await changeSubscriptionPlan(subId, selectedPlanId || null, reason || undefined); })}
          >
            {d.confirmCta}
          </Button>
        </div>
      </Sheet>

      {/* Suspend subscription */}
      <Sheet open={open === "suspendSub"} onClose={close} title={d.suspendSubscription} closeLabel={dict.common.close}>
        {error && <div className="mb-3"><Callout tone="negative">{error}</Callout></div>}
        <div className="space-y-3">
          <Field label={d.reasonLabel} required>{(p) => <Textarea {...p} value={reason} onChange={(e) => setReason(e.target.value)} required />}</Field>
          <Button block variant="destructive" loading={pending} onClick={() => run(async () => { if (subId) await suspendSubscription(subId, reason); })}>
            {d.confirmCta}
          </Button>
        </div>
      </Sheet>

      {/* Reactivate subscription */}
      <Sheet open={open === "reactivateSub"} onClose={close} title={d.reactivateSubscription} closeLabel={dict.common.close}>
        {error && <div className="mb-3"><Callout tone="negative">{error}</Callout></div>}
        <div className="space-y-3">
          <Field label={d.reasonLabel}>{(p) => <Textarea {...p} value={reason} onChange={(e) => setReason(e.target.value)} />}</Field>
          <Button block variant="primary" loading={pending} onClick={() => run(async () => { if (subId) await reactivateSubscription(subId, reason || undefined); })}>
            {d.confirmCta}
          </Button>
        </div>
      </Sheet>

      {/* Cancel subscription */}
      <Sheet open={open === "cancelSub"} onClose={close} title={d.cancelSubscription} closeLabel={dict.common.close}>
        {error && <div className="mb-3"><Callout tone="negative">{error}</Callout></div>}
        <div className="space-y-3">
          <Field label={d.reasonLabel} required>{(p) => <Textarea {...p} value={reason} onChange={(e) => setReason(e.target.value)} required />}</Field>
          <Button block variant="destructive" loading={pending} onClick={() => run(async () => { if (subId) await cancelSubscription(subId, reason); })}>
            {d.confirmCta}
          </Button>
        </div>
      </Sheet>

      {/* Grant lifetime */}
      <Sheet open={open === "lifetime"} onClose={close} title={d.grantLifetime} closeLabel={dict.common.close}>
        {error && <div className="mb-3"><Callout tone="negative">{error}</Callout></div>}
        <div className="space-y-3">
          <Field label={d.reasonLabel}>{(p) => <Textarea {...p} value={reason} onChange={(e) => setReason(e.target.value)} />}</Field>
          <Button block variant="primary" loading={pending} onClick={() => run(async () => { if (subId) await grantLifetimeAccess(subId, reason || undefined); })}>
            {d.confirmCta}
          </Button>
        </div>
      </Sheet>

      {/* Suspend account */}
      <Sheet open={open === "suspendAccount"} onClose={close} title={d.suspendAccount} closeLabel={dict.common.close}>
        {error && <div className="mb-3"><Callout tone="negative">{error}</Callout></div>}
        <div className="space-y-3">
          <Field label={d.reasonLabel} required>{(p) => <Textarea {...p} value={reason} onChange={(e) => setReason(e.target.value)} required />}</Field>
          <Button block variant="destructive" loading={pending} onClick={() => run(async () => { await suspendSubscriberAccount(subscriberId, reason); })}>
            {d.confirmCta}
          </Button>
        </div>
      </Sheet>

      {/* Hide account */}
      <Sheet open={open === "hideAccount"} onClose={close} title={d.hideAccount} closeLabel={dict.common.close}>
        {error && <div className="mb-3"><Callout tone="negative">{error}</Callout></div>}
        <div className="space-y-3">
          <Field label={d.reasonLabel} required>{(p) => <Textarea {...p} value={reason} onChange={(e) => setReason(e.target.value)} required />}</Field>
          <Button
            block
            variant="destructive"
            loading={pending}
            onClick={() =>
              run(async () => {
                await hidePlatformSubscriber(subscriberId, reason);
                router.push(`/${locale}/admin/subscribers`);
              })
            }
          >
            {d.confirmCta}
          </Button>
        </div>
      </Sheet>
    </div>
  );
}
