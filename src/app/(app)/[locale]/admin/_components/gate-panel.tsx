"use client";

import * as React from "react";
import { useI18n } from "@/components/providers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/feedback";
import { decideGate, publishEntity, unpublishEntity } from "@/lib/actions/admin";
import { contentStatusTone, gateTone } from "../_lib/format";

const GATES = ["sme", "learning_design", "legal_english", "language", "accessibility", "qa"] as const;
type Gate = (typeof GATES)[number];
type GateDecision = "approved" | "changes_requested";
type ContentStatusValue = "draft" | "in_review" | "approved" | "published" | "archived";

export interface GateRow {
  gate: Gate;
  status: "pending" | GateDecision;
}

/**
 * The review-gate + publish workflow, reused on every content entity's row
 * (skill, unit, scenario). Publication is blocked — not just discouraged —
 * until every applicable gate reads "approved"; `publishEntity` enforces that
 * server-side, this just surfaces the same rule before a click can fail.
 */
export function GatePanel({
  entityType,
  entityId,
  initialGates,
  initialStatus,
  canReview,
  canPublish,
  requiresLegalEnglish,
}: {
  entityType: "skill" | "unit" | "scenario";
  entityId: string;
  initialGates: GateRow[];
  initialStatus: ContentStatusValue;
  canReview: boolean;
  canPublish: boolean;
  requiresLegalEnglish: boolean;
}) {
  const { dict, locale } = useI18n();
  const [gates, setGates] = React.useState(initialGates);
  const [status, setStatus] = React.useState<ContentStatusValue>(initialStatus);
  const [missing, setMissing] = React.useState<Gate[] | null>(null);
  const [error, setError] = React.useState(false);
  const [busyGate, setBusyGate] = React.useState<Gate | null>(null);
  const [busyPublish, setBusyPublish] = React.useState(false);
  const [pending, startTransition] = React.useTransition();

  function onDecide(gate: Gate, decision: GateDecision) {
    setError(false);
    setBusyGate(gate);
    startTransition(async () => {
      try {
        await decideGate(entityType, entityId, gate, decision);
        setGates((prev) => prev.map((g) => (g.gate === gate ? { ...g, status: decision } : g)));
      } catch {
        setError(true);
      } finally {
        setBusyGate(null);
      }
    });
  }

  function onPublish() {
    setError(false);
    setMissing(null);
    setBusyPublish(true);
    startTransition(async () => {
      try {
        const result = await publishEntity(entityType, entityId, requiresLegalEnglish);
        if (result.ok) {
          setStatus("published");
        } else {
          setMissing(result.missing as Gate[]);
        }
      } catch {
        setError(true);
      } finally {
        setBusyPublish(false);
      }
    });
  }

  function onUnpublish() {
    setError(false);
    setBusyPublish(true);
    startTransition(async () => {
      try {
        await unpublishEntity(entityType, entityId);
        setStatus("archived");
      } catch {
        setError(true);
      } finally {
        setBusyPublish(false);
      }
    });
  }

  const missingLabels =
    missing && missing.length > 0
      ? new Intl.ListFormat(locale === "ar" ? "ar" : "en", { style: "long", type: "conjunction" }).format(
          missing.map((g) => dict.admin.gates[g]),
        )
      : null;

  return (
    <div className="mt-3 space-y-3 border-t border-[var(--border)] pt-3">
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {gates.map((g) => (
          <div key={g.gate} className="flex items-center gap-1.5">
            <Badge tone={gateTone(g.status)}>{dict.admin.gates[g.gate]}</Badge>
            {canReview && (
              <span className="inline-flex gap-1">
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="min-h-8 px-2 text-xs"
                  disabled={pending}
                  loading={pending && busyGate === g.gate}
                  onClick={() => onDecide(g.gate, "approved")}
                >
                  {dict.admin.accept}
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="min-h-8 px-2 text-xs"
                  disabled={pending}
                  loading={pending && busyGate === g.gate}
                  onClick={() => onDecide(g.gate, "changes_requested")}
                >
                  {dict.admin.edit}
                </Button>
              </span>
            )}
          </div>
        ))}
      </div>

      {canPublish && (
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={contentStatusTone(status)}>{dict.admin.status[status]}</Badge>
          {status !== "published" ? (
            <Button
              type="button"
              size="sm"
              variant="primary"
              disabled={pending}
              loading={pending && busyPublish}
              onClick={onPublish}
            >
              {dict.admin.publish}
            </Button>
          ) : (
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={pending}
              loading={pending && busyPublish}
              onClick={onUnpublish}
            >
              {dict.admin.unpublish}
            </Button>
          )}
        </div>
      )}

      {missingLabels && (
        <Callout tone="warning" title={dict.admin.publishBlocked}>
          {missingLabels}
        </Callout>
      )}
      {error && <Callout tone="negative">{dict.common.errorBody}</Callout>}
    </div>
  );
}
