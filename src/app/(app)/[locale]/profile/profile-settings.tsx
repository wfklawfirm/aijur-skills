"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/providers";
import {
  exportMyData,
  setAiConsent,
  signOutEverywhere,
  updateAccessibility,
  updateWeeklyGoal,
} from "@/lib/actions/profile";
import { signOutAction } from "@/lib/actions/auth";
import { resendVerificationEmail } from "@/lib/actions/email-verification";
import type { Locale } from "@/lib/i18n/config";
import { SectionTitle } from "@/components/layout/app-shell";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field, Input, Toggle } from "@/components/ui/form";
import { Callout } from "@/components/ui/feedback";
import { Sheet } from "@/components/ui/sheet";

type AccessibilityKey = "reducedMotion" | "largeText" | "noAudio" | "noDrag" | "captions";
const ACCESSIBILITY_KEYS: AccessibilityKey[] = [
  "reducedMotion",
  "largeText",
  "noAudio",
  "noDrag",
  "captions",
];

interface OrganizationPolicy {
  name: string;
  managersSeeScores: boolean;
  managersSeeTranscripts: boolean;
  retentionDays: number;
}

export function ProfileSettings({
  locale,
  weeklyMinutesGoal,
  accessibility,
  aiConsentGranted,
  organization,
  emailVerified,
}: {
  locale: Locale;
  weeklyMinutesGoal: number;
  accessibility: Record<string, boolean>;
  aiConsentGranted: boolean;
  organization: OrganizationPolicy | null;
  emailVerified: boolean;
}) {
  const { dict, t } = useI18n();
  const router = useRouter();

  // --- email verification -----------------------------------------------------
  const [resending, setResending] = React.useState(false);
  const [resendResult, setResendResult] = React.useState<"sent" | "rate_limited" | "already_verified" | null>(null);
  async function handleResendVerification() {
    setResending(true);
    setResendResult(null);
    const result = await resendVerificationEmail(locale);
    setResendResult(result.alreadyVerified ? "already_verified" : result.sent ? "sent" : "rate_limited");
    setResending(false);
  }

  // --- weekly goal -----------------------------------------------------
  const [goal, setGoal] = React.useState(weeklyMinutesGoal);
  const [goalInput, setGoalInput] = React.useState(String(weeklyMinutesGoal));
  const [savingGoal, setSavingGoal] = React.useState(false);

  async function saveGoal() {
    const minutes = Math.min(600, Math.max(10, Number(goalInput) || goal));
    setSavingGoal(true);
    await updateWeeklyGoal(minutes);
    setGoal(minutes);
    setGoalInput(String(minutes));
    setSavingGoal(false);
  }

  // --- accessibility -----------------------------------------------------
  const [a11y, setA11y] = React.useState<Record<string, boolean>>(accessibility);
  async function toggleA11y(key: AccessibilityKey, next: boolean) {
    setA11y((prev) => ({ ...prev, [key]: next }));
    await updateAccessibility({ [key]: next });
  }

  // --- AI consent -----------------------------------------------------
  const [consent, setConsent] = React.useState(aiConsentGranted);
  const [savingConsent, setSavingConsent] = React.useState(false);
  async function toggleConsent(next: boolean) {
    setConsent(next);
    setSavingConsent(true);
    await setAiConsent(next);
    setSavingConsent(false);
  }

  // --- export -----------------------------------------------------
  const [exported, setExported] = React.useState<Awaited<ReturnType<typeof exportMyData>> | null>(null);
  const [exporting, setExporting] = React.useState(false);
  async function runExport() {
    setExporting(true);
    const data = await exportMyData();
    setExported(data);
    setExporting(false);
  }

  // --- delete account -----------------------------------------------------
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  // --- sign out everywhere -----------------------------------------------------
  const [signingOutEverywhere, setSigningOutEverywhere] = React.useState(false);
  async function handleSignOutEverywhere() {
    setSigningOutEverywhere(true);
    await signOutEverywhere();
    router.push(`/${locale}/sign-in`);
  }

  return (
    <>
      {!emailVerified && (
        <Card>
          <CardBody className="space-y-2">
            <Callout tone="warning">{dict.auth.emailNotVerified}</Callout>
            <Button variant="secondary" block onClick={handleResendVerification} loading={resending}>
              {dict.auth.resendVerification}
            </Button>
            {resendResult === "sent" && (
              <p className="text-supporting" aria-live="polite">
                {dict.auth.verificationSent}
              </p>
            )}
            {resendResult === "rate_limited" && (
              <p className="text-supporting" aria-live="polite">
                {dict.auth.verificationRateLimited}
              </p>
            )}
            {resendResult === "already_verified" && (
              <p className="text-supporting" aria-live="polite">
                {dict.auth.emailVerified}
              </p>
            )}
          </CardBody>
        </Card>
      )}

      <SectionTitle>{dict.profile.preferences}</SectionTitle>
      <Card>
        <CardBody className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[0.9375rem] font-medium">{dict.profile.weeklyGoal}</span>
            <span className="num text-supporting">
              {goal} {dict.common.minutes}
            </span>
          </div>
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <Field label={dict.profile.editGoal}>
                {(p) => (
                  <Input
                    type="number"
                    inputMode="numeric"
                    min={10}
                    max={600}
                    value={goalInput}
                    onChange={(e) => setGoalInput(e.target.value)}
                    {...p}
                  />
                )}
              </Field>
            </div>
            <Button variant="primary" onClick={saveGoal} loading={savingGoal}>
              {dict.common.save}
            </Button>
          </div>
        </CardBody>
      </Card>

      <SectionTitle>{dict.profile.accessibility}</SectionTitle>
      <Card>
        <CardBody className="divide-y divide-[var(--border)]">
          {ACCESSIBILITY_KEYS.map((key) => (
            <Toggle
              key={key}
              label={dict.onboarding.accessibility[key]}
              checked={Boolean(a11y[key])}
              onChange={(next) => toggleA11y(key, next)}
            />
          ))}
        </CardBody>
      </Card>

      <SectionTitle>{dict.profile.privacy}</SectionTitle>
      <Card>
        <CardBody className="space-y-4">
          <div>
            <Toggle
              label={dict.profile.aiConsent}
              description={dict.profile.aiConsentBody}
              checked={consent}
              onChange={toggleConsent}
            />
            <p className="text-supporting mt-1" aria-live="polite">
              {savingConsent ? dict.common.loading : consent ? dict.profile.consentGiven : dict.profile.consentWithheld}
            </p>
          </div>

          <div className="border-t border-[var(--border)] pt-4">
            <Button variant="secondary" block onClick={runExport} loading={exporting}>
              {dict.profile.exportData}
            </Button>
            {exported && (
              <div className="mt-3 space-y-2">
                <Callout tone="positive">{dict.common.saved}</Callout>
                <details className="text-supporting">
                  <summary className="cursor-pointer font-medium">{dict.common.showMore}</summary>
                  <pre className="thin-scroll mt-2 max-h-64 overflow-auto whitespace-pre-wrap break-words text-xs">
                    {JSON.stringify(exported, null, 2)}
                  </pre>
                </details>
              </div>
            )}
          </div>

          {organization && (
            <div className="border-t border-[var(--border)] pt-4">
              <p className="text-[0.9375rem] font-medium">{dict.profile.organization}</p>
              <p dir="auto" className="text-supporting mt-0.5">
                {organization.name}
              </p>
              <p className="text-label mt-3">{dict.profile.orgVisibility}</p>
              <ul className="mt-1.5 space-y-1">
                {organization.managersSeeScores && (
                  <li className="text-supporting">{dict.profile.orgSeesScores}</li>
                )}
                {organization.managersSeeTranscripts && (
                  <li className="text-supporting">{dict.profile.orgSeesTranscripts}</li>
                )}
                {!organization.managersSeeScores && !organization.managersSeeTranscripts && (
                  <li className="text-supporting">{dict.profile.orgSeesNothing}</li>
                )}
              </ul>
              <p className="text-supporting mt-2">
                {t(dict.profile.retention, { days: organization.retentionDays })}
              </p>
            </div>
          )}

          <div className="border-t border-[var(--border)] pt-4">
            <Button variant="destructive" block onClick={() => setDeleteOpen(true)}>
              {dict.profile.deleteAccount}
            </Button>
          </div>

          <div className="border-t border-[var(--border)] pt-4">
            <Button
              variant="secondary"
              block
              onClick={handleSignOutEverywhere}
              loading={signingOutEverywhere}
            >
              {dict.profile.signOutEverywhere}
            </Button>
          </div>
        </CardBody>
      </Card>

      <Sheet
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        title={dict.profile.deleteAccount}
        closeLabel={dict.a11y.closeDialog}
        footer={
          <div className="flex gap-2">
            <Button variant="secondary" block onClick={() => setDeleteOpen(false)}>
              {dict.common.cancel}
            </Button>
            <Button variant="destructive" block disabled title={dict.common.errorBody}>
              {dict.profile.deleteAccount}
            </Button>
          </div>
        }
      >
        <p className="text-supporting">{dict.profile.deleteBody}</p>
        <div className="mt-3">
          <Callout tone="warning">{dict.common.errorBody}</Callout>
        </div>
      </Sheet>

      <div className="mt-6">
        <Button variant="ghost" block onClick={() => signOutAction(locale)}>
          {dict.common.signOut}
        </Button>
      </div>
    </>
  );
}
