"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import type { DiagnosticDef, Localized } from "@content/types";
import type { ActivityResponse } from "@/lib/learning/responses";
import { useI18n, useLocalized } from "@/components/providers";
import { submitDiagnostic } from "@/lib/actions/onboarding";
import { ActivityPlayer, type ActivityOutcome } from "@/components/activities/activity-player";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { StepDots } from "@/components/ui/progress";
import { CheckIcon } from "@/components/ui/icons";
import type { Locale } from "@/lib/i18n/config";

type Phase = "intro" | "items" | "submitting" | "result";

interface DiagnosticResult {
  pathId: string;
  startingSkillIds: string[];
}

/** Average unit length across the seeded content — used only to give the
 * "minutes a week ≈ N units" line a grounded estimate, never shown as fact. */
const AVG_UNIT_MINUTES = 10;

export function DiagnosticFlow({
  locale,
  diagnostic,
  pathTitles,
  weeklyMinutesGoal,
}: {
  locale: Locale;
  diagnostic: DiagnosticDef;
  pathTitles: { id: string; title: Localized }[];
  weeklyMinutesGoal: number;
}) {
  const { dict, t } = useI18n();
  const L = useLocalized();
  const router = useRouter();

  const [phase, setPhase] = React.useState<Phase>("intro");
  const [index, setIndex] = React.useState(0);
  const [responses, setResponses] = React.useState<Record<string, ActivityResponse>>({});
  const [result, setResult] = React.useState<DiagnosticResult | null>(null);

  const items = diagnostic.items;
  const currentItem = items[index];

  function handleSubmitted(outcome: ActivityOutcome) {
    if (!currentItem) return;
    const activityId = currentItem.activity.id;
    setResponses((prev) => ({ ...prev, [activityId]: outcome.response }));
  }

  async function handleContinue() {
    if (index < items.length - 1) {
      setIndex((i) => i + 1);
      return;
    }
    setPhase("submitting");
    try {
      const res = await submitDiagnostic(responses);
      setResult(res);
    } catch {
      setResult(null);
    }
    setPhase("result");
  }

  if (phase === "intro") {
    return (
      <div className="flex flex-1 flex-col justify-between gap-10 py-8">
        <div className="space-y-4 text-center">
          <p className="text-page-title">{dict.diagnostic.title}</p>
          <p className="text-supporting">{dict.diagnostic.intro}</p>
        </div>
        <Button variant="primary" block onClick={() => setPhase("items")}>
          {dict.common.start}
        </Button>
      </div>
    );
  }

  if (phase === "items" && currentItem) {
    const progressLabel = t(dict.diagnostic.itemOf, { current: index + 1, total: items.length });
    return (
      <div className="flex flex-1 flex-col gap-5">
        <div className="space-y-2">
          <StepDots total={items.length} current={index} label={progressLabel} />
          <p className="text-supporting num text-center">{progressLabel}</p>
        </div>
        <ActivityPlayer
          key={currentItem.activity.id}
          activity={currentItem.activity}
          onSubmitted={handleSubmitted}
          onContinue={handleContinue}
        />
      </div>
    );
  }

  if (phase === "submitting") {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-supporting">{dict.common.loading}</p>
      </div>
    );
  }

  // phase === "result"
  const recommendedPath = result ? pathTitles.find((p) => p.id === result.pathId) : undefined;
  const units = Math.max(1, Math.round(weeklyMinutesGoal / AVG_UNIT_MINUTES));

  return (
    <div className="flex flex-1 flex-col gap-6 py-8">
      <div className="space-y-2 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-positive-tint)] text-[var(--color-positive)]">
          <CheckIcon size={24} />
        </span>
        <p className="text-page-title">{dict.diagnostic.resultTitle}</p>
        <p className="text-supporting">{dict.diagnostic.resultBody}</p>
      </div>

      {recommendedPath && (
        <Card>
          <CardBody>
            <p className="text-label">{dict.diagnostic.recommendedPath}</p>
            <p dir="auto" className="text-section-title mt-1">
              {L(recommendedPath.title)}
            </p>
          </CardBody>
        </Card>
      )}

      <Card>
        <CardBody>
          <p className="text-label">{dict.diagnostic.weeklyPlan}</p>
          <p className="num mt-1 text-[0.9375rem]">
            {t(dict.diagnostic.weeklyPlanBody, { minutes: weeklyMinutesGoal, units })}
          </p>
        </CardBody>
      </Card>

      <div className="mt-auto space-y-3 text-center">
        <p className="text-label">{dict.diagnostic.firstMission}</p>
        <Button variant="primary" block onClick={() => router.push(`/${locale}/home`)}>
          {dict.diagnostic.startFirst}
        </Button>
      </div>
    </div>
  );
}
