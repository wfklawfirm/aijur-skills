"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/providers";
import { Card, CardBody } from "@/components/ui/card";
import { Field, Input, Select, Textarea } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/feedback";
import type { Locale } from "@/lib/i18n/config";
import { createPlatformSubscriber } from "@/lib/actions/subscribers";
import type { DurationPreset } from "@/lib/subscriptions/access";

const PRESETS: DurationPreset[] = ["7d", "14d", "30d", "3m", "6m", "1y", "lifetime"];

type SubscriberNewDict = ReturnType<typeof useI18n>["dict"]["admin"]["subscriberNew"];
const PRESET_LABEL_KEY: Record<DurationPreset, (d: SubscriberNewDict) => string> = {
  "7d": (d) => d.preset7d,
  "14d": (d) => d.preset14d,
  "30d": (d) => d.preset30d,
  "3m": (d) => d.preset3m,
  "6m": (d) => d.preset6m,
  "1y": (d) => d.preset1y,
  lifetime: (d) => d.presetLifetime,
};

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export function CreateSubscriberForm({
  locale,
  plans,
}: {
  locale: Locale;
  plans: Array<{ id: string; name: string }>;
}) {
  const { dict } = useI18n();
  const d = dict.admin.subscriberNew;
  const router = useRouter();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [firmOrOffice, setFirmOrOffice] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [userLocale, setUserLocale] = React.useState<"ar" | "en">(locale);
  const [planId, setPlanId] = React.useState("");
  const [durationMode, setDurationMode] = React.useState<"preset" | "custom">("preset");
  const [preset, setPreset] = React.useState<DurationPreset>("30d");
  const [startDate, setStartDate] = React.useState(today());
  const [endDate, setEndDate] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const [pending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | null>(null);

  function errorMessage(err: unknown): string {
    const code = err instanceof Error ? err.message : "";
    switch (code) {
      case "email_taken":
        return d.emailTaken;
      case "invalid_email":
        return d.invalidEmail;
      case "invalid_name":
        return d.invalidName;
      case "end_before_start":
        return d.endBeforeStart;
      default:
        return dict.common.errorBody;
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      try {
        const { userId } = await createPlatformSubscriber(locale, {
          name,
          email,
          phone: phone || undefined,
          country: country || undefined,
          firmOrOffice: firmOrOffice || undefined,
          jobTitle: jobTitle || undefined,
          locale: userLocale,
          planId: planId || null,
          startDateStr: startDate,
          duration:
            durationMode === "preset"
              ? { mode: "preset", preset }
              : { mode: "custom", startDateStr: startDate, endDateStr: endDate || null },
          notes: notes || undefined,
        });
        router.push(`/${locale}/admin/subscribers/${userId}`);
      } catch (err) {
        setError(errorMessage(err));
      }
    });
  }

  return (
    <Card as="div">
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <Callout tone="negative">{error}</Callout>}

          <Field label={d.nameLabel} required>
            {(p) => <Input {...p} value={name} onChange={(e) => setName(e.target.value)} required />}
          </Field>
          <Field label={d.emailLabel} required>
            {(p) => <Input {...p} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />}
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label={d.phoneLabel}>{(p) => <Input {...p} value={phone} onChange={(e) => setPhone(e.target.value)} />}</Field>
            <Field label={d.countryLabel}>{(p) => <Input {...p} value={country} onChange={(e) => setCountry(e.target.value)} />}</Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label={d.firmLabel}>{(p) => <Input {...p} value={firmOrOffice} onChange={(e) => setFirmOrOffice(e.target.value)} />}</Field>
            <Field label={d.jobTitleLabel}>{(p) => <Input {...p} value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />}</Field>
          </div>
          <Field label={d.localeLabel}>
            {(p) => (
              <Select {...p} value={userLocale} onChange={(e) => setUserLocale(e.target.value as "ar" | "en")}>
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </Select>
            )}
          </Field>
          <Field label={d.planLabel}>
            {(p) => (
              <Select {...p} value={planId} onChange={(e) => setPlanId(e.target.value)}>
                <option value="">{d.noPlan}</option>
                {plans.map((pl) => (
                  <option key={pl.id} value={pl.id}>
                    {pl.name}
                  </option>
                ))}
              </Select>
            )}
          </Field>

          <div className="space-y-2">
            <p className="block text-sm font-semibold text-[var(--foreground)]">{d.durationLabel}</p>
            <div className="flex gap-2">
              <Button type="button" variant={durationMode === "preset" ? "primary" : "outline"} size="sm" onClick={() => setDurationMode("preset")}>
                {d.durationPreset}
              </Button>
              <Button type="button" variant={durationMode === "custom" ? "primary" : "outline"} size="sm" onClick={() => setDurationMode("custom")}>
                {d.durationCustom}
              </Button>
            </div>
          </div>

          <Field label={d.startDateLabel} required>
            {(p) => <Input {...p} type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />}
          </Field>

          {durationMode === "preset" ? (
            <Field label={d.durationLabel}>
              {(p) => (
                <Select {...p} value={preset} onChange={(e) => setPreset(e.target.value as DurationPreset)}>
                  {PRESETS.map((ps) => (
                    <option key={ps} value={ps}>
                      {PRESET_LABEL_KEY[ps](d)}
                    </option>
                  ))}
                </Select>
              )}
            </Field>
          ) : (
            <Field label={d.endDateLabel}>
              {(p) => <Input {...p} type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />}
            </Field>
          )}

          <Field label={d.notesLabel}>{(p) => <Textarea {...p} value={notes} onChange={(e) => setNotes(e.target.value)} />}</Field>

          <Button type="submit" variant="primary" block loading={pending}>
            {pending ? d.creating : d.submitCta}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
