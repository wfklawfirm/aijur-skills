"use client";

import * as React from "react";
import { useI18n } from "@/components/providers";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field, Input, Select } from "@/components/ui/form";
import { Callout } from "@/components/ui/feedback";
import { formatDate } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n/dictionaries/ar";
import type { Locale } from "@/lib/i18n/config";
import { createPlatformAccount, extendPlatformAccess, setPlatformAccountStatus } from "@/lib/actions/platform-accounts";
import type { PlatformAccount, SystemRole } from "@/lib/actions/platform-accounts-core";

const SYSTEM_ROLES: SystemRole[] = ["learner", "author", "reviewer", "admin"];

/** End of the chosen calendar day, in the browser's local time — a date
 *  picker returns "2026-09-01" with no time component, and "expires on the
 *  day I picked" should mean through the end of that day, not midnight at
 *  its start. */
function endOfDayTimestamp(dateStr: string): number | null {
  if (!dateStr) return null;
  const d = new Date(`${dateStr}T23:59:59.999`);
  return Number.isNaN(d.getTime()) ? null : d.getTime();
}

function errorMessage(err: unknown, dict: Dictionary): string {
  const code = err instanceof Error ? err.message : "";
  switch (code) {
    case "email_taken":
      return dict.admin.accounts.emailTaken;
    case "invalid_email":
    case "invalid_name":
      return dict.common.errorBody;
    case "account_not_found":
      return dict.common.errorBody;
    default:
      return dict.common.errorBody;
  }
}

export function PlatformAccounts({
  locale,
  accounts,
  initialSearch,
}: {
  locale: Locale;
  accounts: PlatformAccount[];
  initialSearch: string;
}) {
  const { dict, t } = useI18n();
  const base = `/${locale}/admin/accounts`;

  // Create-account form
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState<SystemRole>("learner");
  const [expiresInput, setExpiresInput] = React.useState("");
  const [createPending, startCreateTransition] = React.useTransition();
  const [createError, setCreateError] = React.useState<string | null>(null);
  const [createdEmail, setCreatedEmail] = React.useState<string | null>(null);

  // Row actions
  const [busyId, setBusyId] = React.useState<string | null>(null);
  const [actionError, setActionError] = React.useState<string | null>(null);
  const [extendingId, setExtendingId] = React.useState<string | null>(null);
  const [extendDate, setExtendDate] = React.useState("");
  const [pending, startTransition] = React.useTransition();

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setCreateError(null);
    setCreatedEmail(null);
    startCreateTransition(async () => {
      try {
        const result = await createPlatformAccount(locale, {
          email,
          name,
          systemRole: role,
          accessExpiresAt: endOfDayTimestamp(expiresInput),
        });
        setCreatedEmail(result.email);
        setEmail("");
        setName("");
        setRole("learner");
        setExpiresInput("");
      } catch (err) {
        setCreateError(errorMessage(err, dict));
      }
    });
  }

  function handleStatus(id: string, status: "active" | "suspended") {
    setActionError(null);
    setBusyId(id);
    startTransition(async () => {
      try {
        await setPlatformAccountStatus(id, status);
      } catch (err) {
        setActionError(errorMessage(err, dict));
      } finally {
        setBusyId(null);
      }
    });
  }

  function handleExtend(id: string, expiresAt: number | null) {
    setActionError(null);
    setBusyId(id);
    startTransition(async () => {
      try {
        await extendPlatformAccess(id, expiresAt);
        setExtendingId(null);
        setExtendDate("");
      } catch (err) {
        setActionError(errorMessage(err, dict));
      } finally {
        setBusyId(null);
      }
    });
  }

  function quickExtend(id: string, days: number) {
    handleExtend(id, Date.now() + days * 24 * 60 * 60 * 1000);
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardBody className="space-y-3">
          <h3 className="font-semibold">{dict.admin.accounts.createTitle}</h3>
          <form onSubmit={handleCreate} className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label={dict.admin.accounts.namePlaceholder} required>
                {(p) => (
                  <Input required placeholder={dict.admin.accounts.namePlaceholder} value={name} onChange={(e) => setName(e.target.value)} {...p} />
                )}
              </Field>
              <Field label={dict.admin.accounts.emailPlaceholder} required>
                {(p) => (
                  <Input
                    type="email"
                    required
                    placeholder={dict.admin.accounts.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    {...p}
                  />
                )}
              </Field>
              <Field label={dict.admin.accounts.roleLabel}>
                {(p) => (
                  <Select value={role} onChange={(e) => setRole(e.target.value as SystemRole)} {...p}>
                    {SYSTEM_ROLES.map((r) => (
                      <option key={r} value={r}>
                        {dict.admin.accounts.systemRoles[r]}
                      </option>
                    ))}
                  </Select>
                )}
              </Field>
              <Field label={dict.admin.accounts.accessExpiresLabel}>
                {(p) => <Input type="date" value={expiresInput} onChange={(e) => setExpiresInput(e.target.value)} {...p} />}
              </Field>
            </div>
            <Button type="submit" variant="primary" loading={createPending} disabled={!email || !name}>
              {dict.admin.accounts.createCta}
            </Button>
          </form>
          {createError && <Callout tone="negative">{createError}</Callout>}
          {createdEmail && <Callout tone="positive">{t(dict.admin.accounts.accountCreated, { email: createdEmail })}</Callout>}
        </CardBody>
      </Card>

      <form method="get" action={base} className="flex items-end gap-2">
        <Field label={dict.admin.accounts.searchPlaceholder}>
          {(p) => <Input type="search" name="q" defaultValue={initialSearch} placeholder={dict.admin.accounts.searchPlaceholder} {...p} />}
        </Field>
        <Button type="submit" variant="secondary">
          {dict.common.check}
        </Button>
      </form>

      {actionError && <Callout tone="negative">{actionError}</Callout>}

      {accounts.length === 0 ? (
        <p className="text-supporting">{dict.admin.accounts.noResults}</p>
      ) : (
        <ul className="space-y-2.5">
          {accounts.map((a) => {
            const rowBusy = pending && busyId === a.id;
            return (
              <Card as="li" key={a.id}>
                <CardBody className="space-y-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p dir="auto" className="truncate font-semibold leading-snug">
                        {a.name}
                      </p>
                      <p dir="auto" className="text-supporting truncate">
                        {a.email}
                      </p>
                    </div>
                    <Badge tone={a.accountStatus === "active" ? "positive" : "negative"} className="shrink-0">
                      {a.accountStatus === "active" ? dict.admin.accounts.statusActive : dict.admin.accounts.statusSuspended}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    <Badge tone="neutral">{dict.admin.accounts.systemRoles[a.systemRole]}</Badge>
                    <Badge tone={a.emailVerifiedAt ? "info" : "warning"}>
                      {a.emailVerifiedAt ? dict.admin.accounts.verified : dict.admin.accounts.unverified}
                    </Badge>
                  </div>

                  <p className="text-supporting num">
                    {a.accessExpiresAt ? t(dict.admin.accounts.expiresOn, { date: formatDate(a.accessExpiresAt, locale) }) : dict.admin.accounts.neverExpires}
                    {" · "}
                    {t(dict.admin.accounts.createdOn, { date: formatDate(a.createdAt, locale) })}
                    {" · "}
                    {a.lastSeenAt ? t(dict.admin.accounts.lastSeen, { date: formatDate(a.lastSeenAt, locale) }) : dict.admin.accounts.neverSignedIn}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    {a.accountStatus === "active" ? (
                      <Button type="button" size="sm" variant="destructive" disabled={rowBusy} loading={rowBusy} onClick={() => handleStatus(a.id, "suspended")}>
                        {dict.admin.accounts.suspend}
                      </Button>
                    ) : (
                      <Button type="button" size="sm" variant="secondary" disabled={rowBusy} loading={rowBusy} onClick={() => handleStatus(a.id, "active")}>
                        {dict.admin.accounts.reactivate}
                      </Button>
                    )}
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      disabled={rowBusy}
                      onClick={() => {
                        setExtendingId(extendingId === a.id ? null : a.id);
                        setExtendDate("");
                      }}
                    >
                      {dict.admin.accounts.extendAccess}
                    </Button>
                    {a.accessExpiresAt !== null && (
                      <Button type="button" size="sm" variant="ghost" disabled={rowBusy} loading={rowBusy} onClick={() => handleExtend(a.id, null)}>
                        {dict.admin.accounts.clearExpiration}
                      </Button>
                    )}
                  </div>

                  {extendingId === a.id && (
                    <div className="flex flex-wrap items-end gap-2 rounded-[var(--radius-control)] border border-[var(--border)] bg-[var(--surface-muted)] p-3">
                      <Button type="button" size="sm" variant="secondary" disabled={rowBusy} onClick={() => quickExtend(a.id, 30)}>
                        {dict.admin.accounts.quickExtend30}
                      </Button>
                      <Button type="button" size="sm" variant="secondary" disabled={rowBusy} onClick={() => quickExtend(a.id, 90)}>
                        {dict.admin.accounts.quickExtend90}
                      </Button>
                      <Button type="button" size="sm" variant="secondary" disabled={rowBusy} onClick={() => quickExtend(a.id, 365)}>
                        {dict.admin.accounts.quickExtend365}
                      </Button>
                      <Field label={dict.admin.accounts.accessExpiresLabel}>
                        {(p) => <Input type="date" value={extendDate} onChange={(e) => setExtendDate(e.target.value)} {...p} />}
                      </Field>
                      <Button
                        type="button"
                        size="sm"
                        variant="primary"
                        disabled={rowBusy || !extendDate}
                        loading={rowBusy}
                        onClick={() => handleExtend(a.id, endOfDayTimestamp(extendDate))}
                      >
                        {dict.admin.accounts.extendCta}
                      </Button>
                    </div>
                  )}
                </CardBody>
              </Card>
            );
          })}
        </ul>
      )}
    </div>
  );
}
