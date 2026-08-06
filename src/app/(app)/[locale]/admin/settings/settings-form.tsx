"use client";

import * as React from "react";
import { useI18n } from "@/components/providers";
import { Card, CardBody } from "@/components/ui/card";
import { Field, Input, Select } from "@/components/ui/form";
import { Toggle } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/feedback";
import { updatePlatformAdminSettings } from "@/lib/actions/subscribers";
import type { AdminSettingsShape } from "@/lib/actions/subscribers-core";

const TIMEZONES = ["Asia/Beirut", "UTC", "Asia/Riyadh", "Asia/Dubai", "Africa/Cairo", "Europe/London"];

export function SettingsForm({ settings, canManage }: { settings: AdminSettingsShape; canManage: boolean }) {
  const { dict } = useI18n();
  const d = dict.admin.adminSettings;
  const [form, setForm] = React.useState(settings);
  const [pending, startTransition] = React.useTransition();
  const [saved, setSaved] = React.useState(false);

  function handleSave() {
    setSaved(false);
    startTransition(async () => {
      await updatePlatformAdminSettings(form);
      setSaved(true);
    });
  }

  return (
    <Card as="div">
      <CardBody className="space-y-4">
        {saved && <Callout tone="positive">{d.saved}</Callout>}
        <Field label={d.timeZoneLabel}>
          {(p) => (
            <Select {...p} value={form.timeZone} disabled={!canManage} onChange={(e) => setForm({ ...form, timeZone: e.target.value })}>
              {TIMEZONES.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </Select>
          )}
        </Field>
        <Field label={d.expiringSoonDaysLabel}>
          {(p) => (
            <Input
              {...p}
              type="number"
              min={1}
              value={form.expiringSoonDays}
              disabled={!canManage}
              onChange={(e) => setForm({ ...form, expiringSoonDays: Number(e.target.value) })}
            />
          )}
        </Field>
        <Field label={d.gracePeriodLabel}>
          {(p) => (
            <Input
              {...p}
              type="number"
              min={0}
              value={form.gracePeriodDays ?? ""}
              disabled={!canManage}
              onChange={(e) => setForm({ ...form, gracePeriodDays: e.target.value ? Number(e.target.value) : null })}
            />
          )}
        </Field>
        <Field label={d.notificationLanguageLabel}>
          {(p) => (
            <Select {...p} value={form.notificationLanguage} disabled={!canManage} onChange={(e) => setForm({ ...form, notificationLanguage: e.target.value as "ar" | "en" })}>
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </Select>
          )}
        </Field>
        <Field label={d.contactInfoLabel}>
          {(p) => <Input {...p} value={form.contactInfoForRenewal} disabled={!canManage} onChange={(e) => setForm({ ...form, contactInfoForRenewal: e.target.value })} />}
        </Field>
        <Toggle
          label={d.expirationNotificationsLabel}
          checked={form.expirationNotificationsEnabled}
          onChange={(checked) => setForm({ ...form, expirationNotificationsEnabled: checked })}
        />
        {canManage && (
          <Button variant="primary" block loading={pending} onClick={handleSave}>
            {d.saveCta}
          </Button>
        )}
      </CardBody>
    </Card>
  );
}
