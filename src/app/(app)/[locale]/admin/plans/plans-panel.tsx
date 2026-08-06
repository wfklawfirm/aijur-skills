"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/providers";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/form";
import { Callout } from "@/components/ui/feedback";
import { createSubscriptionPlan, updateSubscriptionPlan } from "@/lib/actions/subscribers";

interface PlanRow {
  id: string;
  name: string;
  description: string | null;
  status: "active" | "archived";
  defaultDurationDays: number | null;
  features: Record<string, unknown>;
  visibility: "public" | "internal";
}

export function PlansPanel({ plans, canManage }: { plans: PlanRow[]; canManage: boolean }) {
  const { dict } = useI18n();
  const d = dict.admin.plans;
  const router = useRouter();
  const [pending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | null>(null);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [defaultDurationDays, setDefaultDurationDays] = React.useState("");
  const [visibility, setVisibility] = React.useState<"public" | "internal">("public");
  const [featuresText, setFeaturesText] = React.useState("");

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      try {
        const features: Record<string, boolean> = {};
        for (const line of featuresText.split("\n").map((l) => l.trim()).filter(Boolean)) features[line] = true;
        await createSubscriptionPlan({
          name,
          description: description || undefined,
          defaultDurationDays: defaultDurationDays ? Number(defaultDurationDays) : null,
          visibility,
          features,
        });
        setName("");
        setDescription("");
        setDefaultDurationDays("");
        setFeaturesText("");
        router.refresh();
      } catch (err) {
        setError(err instanceof Error && err.message === "invalid_name" ? d.invalidName : dict.common.errorBody);
      }
    });
  }

  function toggleStatus(plan: PlanRow) {
    startTransition(async () => {
      await updateSubscriptionPlan(plan.id, { status: plan.status === "active" ? "archived" : "active" });
      router.refresh();
    });
  }

  return (
    <div className="space-y-3">
      {error && <Callout tone="negative">{error}</Callout>}

      {plans.length === 0 ? (
        <p className="text-supporting">{d.noPlans}</p>
      ) : (
        <div className="space-y-2">
          {plans.map((plan) => (
            <Card key={plan.id} as="div">
              <CardHeader>
                <CardTitle level={3}>{plan.name}</CardTitle>
                <Badge tone={plan.status === "active" ? "positive" : "neutral"}>{plan.status === "active" ? d.statusActive : d.statusArchived}</Badge>
              </CardHeader>
              <CardBody className="space-y-2 text-sm text-[var(--foreground-secondary)]">
                {plan.description && <p>{plan.description}</p>}
                <p>{plan.visibility === "public" ? d.visibilityPublic : d.visibilityInternal}</p>
                {Object.keys(plan.features).length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {Object.keys(plan.features).map((f) => (
                      <Badge key={f} tone="brand">{f}</Badge>
                    ))}
                  </div>
                )}
                {canManage && (
                  <Button size="sm" variant="outline" loading={pending} onClick={() => toggleStatus(plan)}>
                    {plan.status === "active" ? d.archive : d.activate}
                  </Button>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      )}

      {canManage && (
        <Card as="div">
          <CardHeader>
            <CardTitle level={3}>{d.addCta}</CardTitle>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleCreate} className="space-y-3">
              <Field label={d.nameLabel} required>{(p) => <Input {...p} value={name} onChange={(e) => setName(e.target.value)} required />}</Field>
              <Field label={d.descriptionLabel}>{(p) => <Input {...p} value={description} onChange={(e) => setDescription(e.target.value)} />}</Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label={d.defaultDurationLabel}>{(p) => <Input {...p} type="number" min={1} value={defaultDurationDays} onChange={(e) => setDefaultDurationDays(e.target.value)} />}</Field>
                <Field label={d.visibilityLabel}>
                  {(p) => (
                    <Select {...p} value={visibility} onChange={(e) => setVisibility(e.target.value as "public" | "internal")}>
                      <option value="public">{d.visibilityPublic}</option>
                      <option value="internal">{d.visibilityInternal}</option>
                    </Select>
                  )}
                </Field>
              </div>
              <Field label={d.featuresLabel} hint={d.featuresHint}>
                {(p) => <Textarea {...p} value={featuresText} onChange={(e) => setFeaturesText(e.target.value)} />}
              </Field>
              <Button type="submit" variant="primary" block loading={pending}>
                {d.createCta}
              </Button>
            </form>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
