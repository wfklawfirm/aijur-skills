"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/providers";
import { formatNumber } from "@/lib/i18n";
import { LOCALE_META, type Locale } from "@/lib/i18n/config";
import { saveOnboarding } from "@/lib/actions/onboarding";
import { Button } from "@/components/ui/button";
import { StepDots } from "@/components/ui/progress";
import { ChoiceGroup, Input, SegmentedControl, Toggle } from "@/components/ui/form";

type CareerStage = "student" | "trainee" | "junior" | "experienced" | "manager";
type Modality = "text" | "voice" | "both";

interface AccessibilityPrefs {
  reducedMotion: boolean;
  largeText: boolean;
  noAudio: boolean;
  noDrag: boolean;
  captions: boolean;
}

interface FormState {
  language: Locale;
  country: string;
  careerStage: CareerStage | "";
  yearsExperience: string;
  goals: string[];
  englishSelfRating: number;
  weeklyMinutesGoal: number;
  practicePreference: Modality;
  accessibility: AccessibilityPrefs;
}

const STEP_COUNT = 9;
const MINUTE_PRESETS = [15, 30, 60, 90, 120, 180];

export function OnboardingFlow({ locale }: { locale: Locale }) {
  const { dict, t } = useI18n();
  const router = useRouter();

  const [step, setStep] = React.useState(0);
  const [saving, setSaving] = React.useState(false);
  const [form, setForm] = React.useState<FormState>({
    language: locale,
    country: "",
    careerStage: "",
    yearsExperience: "0",
    goals: [],
    englishSelfRating: 0,
    weeklyMinutesGoal: 60,
    practicePreference: "both",
    accessibility: {
      reducedMotion: false,
      largeText: false,
      noAudio: false,
      noDrag: false,
      captions: false,
    },
  });

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function updateAccessibility(key: keyof AccessibilityPrefs, value: boolean) {
    setForm((f) => ({ ...f, accessibility: { ...f.accessibility, [key]: value } }));
  }

  const canContinue = React.useMemo(() => {
    switch (step) {
      case 0:
        return Boolean(form.language);
      case 1:
        return form.country.trim().length >= 2;
      case 2:
        return Boolean(form.careerStage);
      case 3:
        return form.yearsExperience.trim().length > 0;
      case 4:
        return form.goals.length > 0;
      case 5:
        return form.englishSelfRating > 0;
      case 6:
        return form.weeklyMinutesGoal > 0;
      case 7:
        return Boolean(form.practicePreference);
      case 8:
        return true;
      default:
        return false;
    }
  }, [step, form]);

  async function finish() {
    if (!form.careerStage) return;
    setSaving(true);
    try {
      await saveOnboarding({
        locale: form.language,
        country: form.country.trim().toUpperCase(),
        careerStage: form.careerStage,
        yearsExperience: Number(form.yearsExperience) || 0,
        goals: form.goals,
        englishSelfRating: form.englishSelfRating,
        weeklyMinutesGoal: form.weeklyMinutesGoal,
        practicePreference: form.practicePreference,
        accessibility: { ...form.accessibility } as Record<string, boolean>,
      });
      router.push(`/${locale}/diagnostic`);
    } catch {
      setSaving(false);
    }
  }

  function next() {
    if (step === STEP_COUNT - 1) {
      void finish();
      return;
    }
    setStep((s) => Math.min(STEP_COUNT - 1, s + 1));
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <header className="space-y-3">
        <StepDots
          total={STEP_COUNT}
          current={step}
          label={t(dict.onboarding.stepOf, { current: step + 1, total: STEP_COUNT })}
        />
        <p className="text-supporting num">{t(dict.onboarding.stepOf, { current: step + 1, total: STEP_COUNT })}</p>
        <div>
          <p className="text-page-title">{dict.onboarding.title}</p>
          <p className="text-supporting mt-1">{dict.onboarding.subtitle}</p>
        </div>
      </header>

      <div className="flex-1">{renderStep()}</div>

      <div className="sticky bottom-0 flex gap-3 border-t border-[var(--border)] bg-[var(--background)] pb-2 pt-4 safe-bottom">
        {step > 0 && (
          <Button variant="secondary" onClick={back} disabled={saving}>
            {dict.common.back}
          </Button>
        )}
        <Button variant="primary" block onClick={next} disabled={!canContinue || saving} loading={saving}>
          {step === STEP_COUNT - 1 ? dict.onboarding.finish : dict.common.next}
        </Button>
      </div>
    </div>
  );

  function renderStep() {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <p className="text-section-title">{dict.onboarding.language.q}</p>
              <p className="text-supporting mt-1">{dict.onboarding.language.hint}</p>
            </div>
            <SegmentedControl
              label={dict.onboarding.language.q}
              value={form.language}
              onChange={(v) => update("language", v as Locale)}
              options={[
                { value: "ar", label: LOCALE_META.ar.label },
                { value: "en", label: LOCALE_META.en.label },
              ]}
            />
          </div>
        );

      case 1:
        return (
          <div className="space-y-3">
            <p className="text-section-title">{dict.onboarding.country.q}</p>
            <Input
              value={form.country}
              onChange={(e) => update("country", e.target.value.toUpperCase())}
              placeholder={dict.onboarding.country.placeholder}
              maxLength={4}
              dir="auto"
              autoFocus
            />
          </div>
        );

      case 2:
        return (
          <ChoiceGroup
            legend={dict.onboarding.stage.q}
            name="careerStage"
            value={form.careerStage ? [form.careerStage] : []}
            onChange={(v) => update("careerStage", (v[0] as CareerStage) ?? "")}
            options={[
              { value: "student", label: dict.onboarding.stage.student },
              { value: "trainee", label: dict.onboarding.stage.trainee },
              { value: "junior", label: dict.onboarding.stage.junior },
              { value: "experienced", label: dict.onboarding.stage.experienced },
              { value: "manager", label: dict.onboarding.stage.manager },
            ]}
          />
        );

      case 3:
        return (
          <div className="space-y-3">
            <p className="text-section-title">{dict.onboarding.years.q}</p>
            <Input
              type="number"
              inputMode="numeric"
              min={0}
              max={60}
              step={1}
              value={form.yearsExperience}
              onChange={(e) => update("yearsExperience", e.target.value)}
            />
            <p className="text-supporting">{dict.onboarding.years.none}</p>
          </div>
        );

      case 4:
        return (
          <ChoiceGroup
            legend={dict.onboarding.goals.q}
            hint={dict.onboarding.goals.hint}
            multiple
            name="goals"
            value={form.goals}
            onChange={(v) => {
              if (v.length <= 3) update("goals", v);
            }}
            options={Object.entries(dict.onboarding.goals.options).map(([value, label]) => ({
              value,
              label,
            }))}
          />
        );

      case 5:
        return (
          <ChoiceGroup
            legend={dict.onboarding.english.q}
            name="englishSelfRating"
            value={form.englishSelfRating ? [String(form.englishSelfRating)] : []}
            onChange={(v) => update("englishSelfRating", Number(v[0] ?? 0))}
            options={[
              { value: "1", label: dict.onboarding.english.l1 },
              { value: "2", label: dict.onboarding.english.l2 },
              { value: "3", label: dict.onboarding.english.l3 },
              { value: "4", label: dict.onboarding.english.l4 },
              { value: "5", label: dict.onboarding.english.l5 },
            ]}
          />
        );

      case 6:
        return (
          <div className="space-y-3">
            <div>
              <p className="text-section-title">{dict.onboarding.time.q}</p>
              <p className="text-supporting mt-1">{dict.onboarding.time.hint}</p>
            </div>
            <ChoiceGroup
              legend={dict.onboarding.time.q}
              name="weeklyMinutesGoal"
              value={[String(form.weeklyMinutesGoal)]}
              onChange={(v) => update("weeklyMinutesGoal", Number(v[0] ?? 60))}
              options={MINUTE_PRESETS.map((m) => ({
                value: String(m),
                label: `${formatNumber(m, form.language)} ${dict.common.minutes}`,
              }))}
            />
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <p className="text-section-title">{dict.onboarding.modality.q}</p>
            <SegmentedControl
              label={dict.onboarding.modality.q}
              value={form.practicePreference}
              onChange={(v) => update("practicePreference", v as Modality)}
              options={[
                { value: "text", label: dict.onboarding.modality.text },
                { value: "voice", label: dict.onboarding.modality.voice },
                { value: "both", label: dict.onboarding.modality.both },
              ]}
            />
          </div>
        );

      case 8:
        return (
          <div>
            <p className="text-section-title">{dict.onboarding.accessibility.q}</p>
            <p className="text-supporting mt-1">{dict.onboarding.accessibility.hint}</p>
            <div className="mt-3 divide-y divide-[var(--border)]">
              <Toggle
                label={dict.onboarding.accessibility.reducedMotion}
                checked={form.accessibility.reducedMotion}
                onChange={(v) => updateAccessibility("reducedMotion", v)}
              />
              <Toggle
                label={dict.onboarding.accessibility.largeText}
                checked={form.accessibility.largeText}
                onChange={(v) => updateAccessibility("largeText", v)}
              />
              <Toggle
                label={dict.onboarding.accessibility.noAudio}
                checked={form.accessibility.noAudio}
                onChange={(v) => updateAccessibility("noAudio", v)}
              />
              <Toggle
                label={dict.onboarding.accessibility.noDrag}
                checked={form.accessibility.noDrag}
                onChange={(v) => updateAccessibility("noDrag", v)}
              />
              <Toggle
                label={dict.onboarding.accessibility.captions}
                checked={form.accessibility.captions}
                onChange={(v) => updateAccessibility("captions", v)}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  }
}
