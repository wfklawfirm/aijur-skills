"use client";

import * as React from "react";
import { useI18n } from "@/components/providers";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field, Input, Select } from "@/components/ui/form";
import { Callout } from "@/components/ui/feedback";
import { formatDate } from "@/lib/i18n";
import { addOrgMember, removeOrgMember, updateMemberRole } from "@/lib/actions/org";
import type { OrgMember, OrgRole } from "@/lib/actions/org-core";

const ROLES: OrgRole[] = ["owner", "admin", "manager", "author", "member"];

const ERROR_KEYS: Record<string, "memberNotFound" | "alreadyMember" | "cannotRemoveLastOwner"> = {
  member_not_found: "memberNotFound",
  already_member: "alreadyMember",
  cannot_remove_last_owner: "cannotRemoveLastOwner",
};

/**
 * The whole org-admin surface: add a member by email, change a role, remove
 * a member. Every one of these calls a Server Action that re-checks
 * `require_()` + `assertTenant()` itself — this component only controls what
 * is *offered*; the actions are what actually enforce it.
 */
export function OrgMembers({ organizationId, members }: { organizationId: string; members: OrgMember[] }) {
  const { dict, locale, t } = useI18n();
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState<OrgRole>("member");
  const [error, setError] = React.useState<string | null>(null);
  const [pending, startTransition] = React.useTransition();
  const [busyId, setBusyId] = React.useState<string | null>(null);

  function errorMessage(err: unknown): string {
    const code = err instanceof Error ? err.message : "";
    const key = ERROR_KEYS[code];
    return key ? dict.admin.organization[key] : dict.common.errorBody;
  }

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      try {
        await addOrgMember(organizationId, email, role);
        setEmail("");
        setRole("member");
      } catch (err) {
        setError(errorMessage(err));
      }
    });
  }

  function handleRoleChange(membershipId: string, next: OrgRole) {
    setError(null);
    setBusyId(membershipId);
    startTransition(async () => {
      try {
        await updateMemberRole(organizationId, membershipId, next);
      } catch (err) {
        setError(errorMessage(err));
      } finally {
        setBusyId(null);
      }
    });
  }

  function handleRemove(membershipId: string) {
    setError(null);
    setBusyId(membershipId);
    startTransition(async () => {
      try {
        await removeOrgMember(organizationId, membershipId);
      } catch (err) {
        setError(errorMessage(err));
      } finally {
        setBusyId(null);
      }
    });
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardBody className="space-y-3">
          <form onSubmit={handleAdd} className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_auto] sm:items-end">
              <Field label={dict.admin.organization.addMember}>
                {(p) => (
                  <Input
                    type="email"
                    required
                    placeholder={dict.admin.organization.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    {...p}
                  />
                )}
              </Field>
              <Field label={dict.admin.organization.role}>
                {(p) => (
                  <Select value={role} onChange={(e) => setRole(e.target.value as OrgRole)} {...p}>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {dict.admin.organization.roles[r]}
                      </option>
                    ))}
                  </Select>
                )}
              </Field>
              <Button type="submit" variant="primary" loading={pending && busyId === null} disabled={!email}>
                {dict.admin.organization.addCta}
              </Button>
            </div>
          </form>
          {error && <Callout tone="negative">{error}</Callout>}
        </CardBody>
      </Card>

      <ul className="space-y-2.5">
        {members.map((m) => (
          <Card as="li" key={m.membershipId}>
            <CardBody className="space-y-2.5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p dir="auto" className="truncate font-semibold leading-snug">
                    {m.name}
                  </p>
                  <p dir="auto" className="text-supporting truncate">
                    {m.email}
                  </p>
                </div>
                <Badge tone={m.role === "owner" ? "brand" : "neutral"} className="shrink-0">
                  {dict.admin.organization.roles[m.role]}
                </Badge>
              </div>
              <p className="text-supporting num">
                {t(dict.admin.organization.joinedAt, { date: formatDate(m.joinedAt, locale) })}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <Select
                  aria-label={dict.admin.organization.role}
                  value={m.role}
                  disabled={pending && busyId === m.membershipId}
                  onChange={(e) => handleRoleChange(m.membershipId, e.target.value as OrgRole)}
                  className="w-auto"
                >
                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {dict.admin.organization.roles[r]}
                    </option>
                  ))}
                </Select>
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  disabled={pending && busyId === m.membershipId}
                  loading={pending && busyId === m.membershipId}
                  onClick={() => handleRemove(m.membershipId)}
                >
                  {dict.admin.organization.remove}
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </ul>
    </div>
  );
}
