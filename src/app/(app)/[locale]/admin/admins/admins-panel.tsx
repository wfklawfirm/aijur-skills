"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/providers";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field, Input, Select } from "@/components/ui/form";
import { Callout } from "@/components/ui/feedback";
import { listPlatformSubscribers, setSubscriberPlatformRole } from "@/lib/actions/subscribers";
import type { AdminListItem, PlatformRole } from "@/lib/actions/subscribers-core";

const ROLES: PlatformRole[] = ["super_admin", "admin", "support"];

function errorMessage(err: unknown, d: ReturnType<typeof useI18n>["dict"]["admin"]["admins"], common: string): string {
  const code = err instanceof Error ? err.message : "";
  if (code === "last_super_admin") return d.lastSuperAdmin;
  if (code === "cannot_demote_bootstrap_owner") return d.cannotDemoteBootstrapOwner;
  if (code === "subscriber_not_found") return d.userNotFound;
  return common;
}

export function AdminsPanel({ admins, actorId }: { admins: AdminListItem[]; actorId: string }) {
  const { dict } = useI18n();
  const d = dict.admin.admins;
  const router = useRouter();
  const [pending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState("");
  const [newRole, setNewRole] = React.useState<PlatformRole>("admin");

  function changeRole(userId: string, role: PlatformRole | null) {
    setError(null);
    startTransition(async () => {
      try {
        await setSubscriberPlatformRole(userId, role);
        router.refresh();
      } catch (err) {
        setError(errorMessage(err, d, dict.common.errorBody));
      }
    });
  }

  function handleGrant(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      try {
        const { items } = await listPlatformSubscribers({ search: email.trim(), pageSize: 5 });
        const match = items.find((i) => i.email.toLowerCase() === email.trim().toLowerCase());
        if (!match) {
          setError(d.userNotFound);
          return;
        }
        await setSubscriberPlatformRole(match.id, newRole);
        setEmail("");
        router.refresh();
      } catch (err) {
        setError(errorMessage(err, d, dict.common.errorBody));
      }
    });
  }

  return (
    <div className="space-y-3">
      {error && <Callout tone="negative">{error}</Callout>}

      {admins.length === 0 ? (
        <p className="text-supporting">{d.noAdmins}</p>
      ) : (
        <div className="space-y-2">
          {admins.map((a) => (
            <Card key={a.id} as="div">
              <CardBody className="flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold">{a.name}</p>
                  <p className="text-supporting">{a.email}</p>
                  {a.isBootstrapOwner && <Badge tone="brand">{d.bootstrapOwner}</Badge>}
                </div>
                {!a.isBootstrapOwner && (
                  <div className="flex items-center gap-2">
                    <Select
                      aria-label={d.roleLabel}
                      value={a.platformRole}
                      disabled={pending}
                      onChange={(e) => changeRole(a.id, e.target.value as PlatformRole)}
                      className="w-auto"
                    >
                      {ROLES.map((r) => (
                        <option key={r} value={r}>
                          {d.roleValue[r]}
                        </option>
                      ))}
                    </Select>
                    {a.id !== actorId && (
                      <Button size="sm" variant="outline" loading={pending} onClick={() => changeRole(a.id, null)}>
                        {d.removeRole}
                      </Button>
                    )}
                  </div>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      )}

      <Card as="div">
        <CardBody>
          <form onSubmit={handleGrant} className="space-y-3">
            <Field label={d.addAdminLabel} required>
              {(p) => <Input {...p} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />}
            </Field>
            <Field label={d.roleLabel}>
              {(p) => (
                <Select {...p} value={newRole} onChange={(e) => setNewRole(e.target.value as PlatformRole)}>
                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {d.roleValue[r]}
                    </option>
                  ))}
                </Select>
              )}
            </Field>
            <Button type="submit" variant="primary" block loading={pending}>
              {d.addAdminCta}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
