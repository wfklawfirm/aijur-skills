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
import { addOrgMember, removeOrgMember, updateMemberRole } from "@/lib/actions/org";
import type { OrgMember, OrgRole } from "@/lib/actions/org-core";
import { assignMemberTeam, createTeam, deleteTeam, renameTeam } from "@/lib/actions/teams";
import type { Team } from "@/lib/actions/teams-core";

const ROLES: OrgRole[] = ["owner", "admin", "manager", "author", "member"];
const UNASSIGNED = "__unassigned__";

function errorMessage(err: unknown, dict: Dictionary): string {
  const code = err instanceof Error ? err.message : "";
  switch (code) {
    case "member_not_found":
      return dict.admin.organization.memberNotFound;
    case "already_member":
      return dict.admin.organization.alreadyMember;
    case "cannot_remove_last_owner":
      return dict.admin.organization.cannotRemoveLastOwner;
    case "invalid_team_name":
      return dict.admin.organization.teams.invalidTeamName;
    case "team_not_found":
      return dict.admin.organization.teams.teamNotFound;
    default:
      return dict.common.errorBody;
  }
}

/**
 * The org-admin surface: add a member by email, change a role, remove a
 * member, and — separately, gated on `org.assign` rather than
 * `org.members.manage` — create/rename/delete teams and assign members to
 * them. Every one of these calls a Server Action that re-checks
 * `require_()` + `assertTenant()` itself; `canManageMembers`/`canAssignTeams`
 * here only control what's *offered* in the UI for a cleaner experience,
 * not the actual security boundary.
 */
export function OrgMembers({
  organizationId,
  members,
  teams,
  canManageMembers,
  canAssignTeams,
}: {
  organizationId: string;
  members: OrgMember[];
  teams: Team[];
  canManageMembers: boolean;
  canAssignTeams: boolean;
}) {
  const { dict, locale, t } = useI18n();
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState<OrgRole>("member");
  const [error, setError] = React.useState<string | null>(null);
  const [pending, startTransition] = React.useTransition();
  const [busyId, setBusyId] = React.useState<string | null>(null);

  // `teams` (like `members`) is read straight from the prop, not mirrored
  // into local state — every mutation below calls a Server Action that
  // itself calls `revalidatePath()`, so once the awaited action resolves,
  // Next re-renders the parent Server Component with fresh data and this
  // prop updates on its own. No local optimistic copy needed.
  const [newTeamName, setNewTeamName] = React.useState("");
  const [editingTeamId, setEditingTeamId] = React.useState<string | null>(null);
  const [editingTeamName, setEditingTeamName] = React.useState("");
  const [teamPending, startTeamTransition] = React.useTransition();
  const [busyTeamId, setBusyTeamId] = React.useState<string | null>(null);

  const teamNameById = React.useMemo(() => new Map(teams.map((tm) => [tm.id, tm.name])), [teams]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      try {
        await addOrgMember(organizationId, email, role);
        setEmail("");
        setRole("member");
      } catch (err) {
        setError(errorMessage(err, dict));
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
        setError(errorMessage(err, dict));
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
        setError(errorMessage(err, dict));
      } finally {
        setBusyId(null);
      }
    });
  }

  function handleAssignTeam(membershipId: string, value: string) {
    setError(null);
    setBusyId(membershipId);
    startTransition(async () => {
      try {
        await assignMemberTeam(organizationId, membershipId, value === UNASSIGNED ? null : value);
      } catch (err) {
        setError(errorMessage(err, dict));
      } finally {
        setBusyId(null);
      }
    });
  }

  function handleCreateTeam(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTeamTransition(async () => {
      try {
        await createTeam(organizationId, newTeamName);
        setNewTeamName("");
      } catch (err) {
        setError(errorMessage(err, dict));
      }
    });
  }

  function startRename(t: Team) {
    setEditingTeamId(t.id);
    setEditingTeamName(t.name);
  }

  function handleRenameTeam(e: React.FormEvent, teamId: string) {
    e.preventDefault();
    setError(null);
    setBusyTeamId(teamId);
    startTeamTransition(async () => {
      try {
        await renameTeam(organizationId, teamId, editingTeamName);
        setEditingTeamId(null);
      } catch (err) {
        setError(errorMessage(err, dict));
      } finally {
        setBusyTeamId(null);
      }
    });
  }

  function handleDeleteTeam(teamId: string) {
    setError(null);
    setBusyTeamId(teamId);
    startTeamTransition(async () => {
      try {
        await deleteTeam(organizationId, teamId);
      } catch (err) {
        setError(errorMessage(err, dict));
      } finally {
        setBusyTeamId(null);
      }
    });
  }

  return (
    <div className="space-y-4">
      {canManageMembers && (
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
          </CardBody>
        </Card>
      )}

      {error && <Callout tone="negative">{error}</Callout>}

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
                {canAssignTeams &&
                  ` · ${m.teamId ? (teamNameById.get(m.teamId) ?? dict.admin.organization.teams.unassigned) : dict.admin.organization.teams.unassigned}`}
              </p>
              {(canManageMembers || canAssignTeams) && (
                <div className="flex flex-wrap items-center gap-2">
                  {canManageMembers && (
                    <>
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
                    </>
                  )}
                  {canAssignTeams && (
                    <Select
                      aria-label={dict.admin.organization.teams.assignTeam}
                      value={m.teamId ?? UNASSIGNED}
                      disabled={pending && busyId === m.membershipId}
                      onChange={(e) => handleAssignTeam(m.membershipId, e.target.value)}
                      className="w-auto"
                    >
                      <option value={UNASSIGNED}>{dict.admin.organization.teams.unassigned}</option>
                      {teams.map((tm) => (
                        <option key={tm.id} value={tm.id}>
                          {tm.name}
                        </option>
                      ))}
                    </Select>
                  )}
                </div>
              )}
            </CardBody>
          </Card>
        ))}
      </ul>

      {canAssignTeams && (
        <Card>
          <CardBody className="space-y-3">
            <h3 className="font-semibold">{dict.admin.organization.teams.title}</h3>
            <p className="text-supporting -mt-2">{dict.admin.organization.teams.body}</p>

            <form onSubmit={handleCreateTeam} className="flex flex-wrap items-end gap-3">
              <Field label={dict.admin.organization.teams.namePlaceholder}>
                {(p) => (
                  <Input
                    required
                    placeholder={dict.admin.organization.teams.namePlaceholder}
                    value={newTeamName}
                    onChange={(e) => setNewTeamName(e.target.value)}
                    {...p}
                  />
                )}
              </Field>
              <Button type="submit" variant="secondary" loading={teamPending && busyTeamId === null} disabled={!newTeamName.trim()}>
                {dict.admin.organization.teams.createCta}
              </Button>
            </form>

            {teams.length === 0 ? (
              <p className="text-supporting">{dict.admin.organization.teams.noTeams}</p>
            ) : (
              <ul className="space-y-2">
                {teams.map((tm) => (
                  <li key={tm.id} className="flex items-center justify-between gap-3 border-t border-[var(--border)] pt-2">
                    {editingTeamId === tm.id ? (
                      <form onSubmit={(e) => handleRenameTeam(e, tm.id)} className="flex flex-1 items-center gap-2">
                        <Input
                          autoFocus
                          value={editingTeamName}
                          onChange={(e) => setEditingTeamName(e.target.value)}
                          aria-label={dict.admin.organization.teams.namePlaceholder}
                        />
                        <Button type="submit" size="sm" variant="primary" loading={teamPending && busyTeamId === tm.id}>
                          {dict.admin.organization.teams.rename}
                        </Button>
                        <Button type="button" size="sm" variant="ghost" onClick={() => setEditingTeamId(null)}>
                          {dict.common.cancel}
                        </Button>
                      </form>
                    ) : (
                      <>
                        <div className="min-w-0">
                          <p dir="auto" className="truncate font-medium">
                            {tm.name}
                          </p>
                          <p className="text-supporting num">
                            {t(dict.admin.organization.teams.memberCount, { count: String(tm.memberCount) })}
                          </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          <Button type="button" size="sm" variant="ghost" onClick={() => startRename(tm)}>
                            {dict.admin.organization.teams.rename}
                          </Button>
                          <Button
                            type="button"
                            size="sm"
                            variant="destructive"
                            disabled={teamPending && busyTeamId === tm.id}
                            loading={teamPending && busyTeamId === tm.id}
                            onClick={() => handleDeleteTeam(tm.id)}
                          >
                            {dict.admin.organization.teams.delete}
                          </Button>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </CardBody>
        </Card>
      )}
    </div>
  );
}
