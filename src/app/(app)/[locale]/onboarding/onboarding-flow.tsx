"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/providers";
import { formatNumber } from "@/lib/i18n";
import { LOCALE_META, type Locale } from "@/lib/i18n/config";
import { saveOnboarding } from "@/lib/actions/onboarding";
import { Button } from "@/components/ui/button";
import { StepDots } from "@/components/ui/progress";
import { ChoiceGroup, Input, Select, SegmentedControl, Toggle } from "@/components/ui/form";
import { COUNTRIES } from "@/lib/i18n/countries";
import { cn } from "@/lib/utils";

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

/**
 * Scoped per-user (not just per-browser) so a second account signing up on
 * the same device/browser never sees a stranger's half-finished onboarding
 * offered back to them. Versioned (`v1`) so a future shape change can be
 * detected and the stale draft discarded instead of crashing on parse.
 */
function draftKey(userId: string): string {
  return `aijur:onboarding:draft:v1:${userId}`;
}

/**
 * Set immediately before navigating to a different locale's onboarding URL
 * (see `switchLanguage`) so the *next* mount knows to resume the just-saved
 * draft silently, rather than showing the "continue or start over?" prompt
 * that a genuine return-visit gets. `sessionStorage`, not `localStorage`, so
 * it can never survive past this one navigation and accidentally suppress a
 * real resume prompt later.
 */
const JUST_SWITCHED_LANGUAGE_KEY = "aijur:onboarding:justSwitchedLanguage";

interface Draft {
  step: number;
  form: FormState;
}

export function OnboardingFlow({ locale, userId }: { locale: Locale; userId: string }) {
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

  // Whether we've finished checking localStorage for a saved draft yet --
  // gates the persist effect below so it never overwrites a real saved
  // draft with the fresh default state during the one render before we've
  // had a chance to read it.
  const [hydrated, setHydrated] = React.useState(false);
  // A draft found on mount that the learner hasn't yet chosen to resume or
  // discard. While this is set, the wizard itself doesn't render -- see the
  // early return below.
  const [resumeDraft, setResumeDraft] = React.useState<Draft | null>(null);

  React.useEffect(() => {
    let draft: Draft | null = null;
    try {
      const raw = localStorage.getItem(draftKey(userId));
      if (raw) draft = JSON.parse(raw) as Draft;
    } catch {
      draft = null; // corrupt/foreign JSON -- treat as no draft, don't crash
    }

    let justSwitched = false;
    try {
      justSwitched = sessionStorage.getItem(JUST_SWITCHED_LANGUAGE_KEY) === "1";
      sessionStorage.removeItem(JUST_SWITCHED_LANGUAGE_KEY);
    } catch {
      // sessionStorage unavailable (e.g. private-mode edge cases) -- fall
      // back to always showing the resume prompt rather than silently
      // guessing the learner just switched language.
    }

    // localStorage/sessionStorage are unavailable during SSR, so the initial
    // render (server and first client paint alike) always shows the fresh
    // wizard at step 0 -- matching this component's `useState` defaults
    // exactly, which is what keeps this hydration-mismatch-free (same
    // reasoning as `SpeakButton` in activity-player.tsx). Correcting to a
    // resumed/saved state only after mount is deliberate, not a shortcut.
    if (draft && justSwitched) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm(draft.form);
      setStep(draft.step);
    } else if (draft) {
      setResumeDraft(draft);
    }
    setHydrated(true);
    // Intentionally runs once on mount only -- re-checking on every render
    // would re-trigger the resume prompt after the learner already resolved
    // it once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (!hydrated || resumeDraft) return;
    try {
      localStorage.setItem(draftKey(userId), JSON.stringify({ step, form } satisfies Draft));
    } catch {
      // best-effort -- storage full/unavailable shouldn't block onboarding
    }
  }, [hydrated, resumeDraft, step, form, userId]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function updateAccessibility(key: keyof AccessibilityPrefs, value: boolean) {
    setForm((f) => ({ ...f, accessibility: { ...f.accessibility, [key]: value } }));
  }

  function continueDraft() {
    if (!resumeDraft) return;
    setForm(resumeDraft.form);
    setStep(resumeDraft.step);
    setResumeDraft(null);
  }

  function restartDraft() {
    try {
      localStorage.removeItem(draftKey(userId));
    } catch {
      // best-effort
    }
    // `form`/`step` were never overwritten with the draft's values (the
    // persist effect above is gated on `!resumeDraft`), so they're still
    // sitting at their fresh defaults -- clearing the prompt is enough.
    setResumeDraft(null);
  }

  /**
   * Real navigation to the other locale's onboarding URL, not a client-only
   * dict swap -- this keeps `<html dir/lang>` (set server-side from the URL
   * segment in `[locale]/layout.tsx`) correct, rather than maintaining a
   * second, easily-divergent source of truth for direction/language. The
   * in-progress answers survive the navigation via the same draft mechanism
   * that powers "resume where I left off".
   */
  function switchLanguage(newLocale: Locale) {
    if (newLocale === locale) return;
    try {
      localStorage.setItem(
        draftKey(userId),
        JSON.stringify({ step, form: { ...form, language: newLocale } } satisfies Draft),
      );
      sessionStorage.setItem(JUST_SWITCHED_LANGUAGE_KEY, "1");
    } catch {
      // best-effort -- worst case the learner lands on a fresh step 0 in
      // the new language instead of resuming, which is still a safe state.
    }
    router.push(`/${newLocale}/onboarding`);
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
      try {
        localStorage.removeItem(draftKey(userId));
      } catch {
        // best-effort -- a leftover draft after a successful finish would
        // just offer a harmless (and ignorable) resume prompt if this
        // learner ever revisits /onboarding directly, not a real bug.
      }
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

  const languageSwitcher = (
    <div className="flex items-center gap-1" role="group" aria-label={dict.onboarding.switchLanguage}>
      {(["ar", "en"] as const).map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLanguage(loc)}
          aria-pressed={locale === loc}
          className={cn(
            "min-h-9 rounded-full px-3 text-sm font-semibold transition-colors",
            locale === loc
              ? "bg-[var(--color-brand)] text-white"
              : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]",
          )}
        >
          {LOCALE_META[loc].label}
        </button>
      ))}
    </div>
  );

  // A saved draft exists and hasn't been resolved yet -- offer to resume or
  // start fresh instead of rendering the wizard (and instead of silently
  // picking one for the learner). The language switcher stays available
  // here too, since "read this prompt in the language I actually understand"
  // matters just as much on this screen as on any step.
  if (resumeDraft) {
    return (
      <div className="flex flex-1 flex-col gap-6">
        <div className="flex justify-end">{languageSwitcher}</div>
        <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
          <div>
            <h1 className="text-page-title">{dict.onboarding.resume.title}</h1>
            <p className="text-supporting mt-2">
              {t(dict.onboarding.resume.body, { step: resumeDraft.step + 1, total: STEP_COUNT })}
            </p>
          </div>
          <div className="flex w-full max-w-xs flex-col gap-3">
            <Button variant="primary" block onClick={continueDraft}>
              {dict.onboarding.resume.continueBtn}
            </Button>
            <Button variant="secondary" block onClick={restartDraft}>
              {dict.onboarding.resume.restartBtn}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <header className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <StepDots
            total={STEP_COUNT}
            current={step}
            label={t(dict.onboarding.stepOf, { current: step + 1, total: STEP_COUNT })}
          />
          {languageSwitcher}
        </div>
        <p className="text-supporting num">{t(dict.onboarding.stepOf, { current: step + 1, total: STEP_COUNT })}</p>
        <div>
          <h1 className="text-page-title">{dict.onboarding.title}</h1>
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

      case 1: {
        // Real country picker, not a free-text field capped at 4 characters
        // -- that used to silently truncate "Lebanon" to "LEBA" with no
        // explanation, despite the placeholder promising "Choose a country".
        // Grouped with the 22 Arab League states first (this product is
        // Arabic-first and most learners will pick one of these), sorted
        // alphabetically within each group in whichever language is
        // currently on screen.
        const collator = new Intl.Collator(locale);
        const byDisplayName = (a: (typeof COUNTRIES)[number], b: (typeof COUNTRIES)[number]) =>
          collator.compare(locale === "ar" ? a.ar : a.en, locale === "ar" ? b.ar : b.en);
        const arabCountries = COUNTRIES.filter((c) => c.arab).sort(byDisplayName);
        const otherCountries = COUNTRIES.filter((c) => !c.arab).sort(byDisplayName);

        return (
          <div className="space-y-3">
            <p className="text-section-title">{dict.onboarding.country.q}</p>
            <Select value={form.country} onChange={(e) => update("country", e.target.value)} dir="auto" autoFocus>
              <option value="" disabled>
                {dict.onboarding.country.placeholder}
              </option>
              <optgroup label={dict.onboarding.country.arabGroup}>
                {arabCountries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {locale === "ar" ? c.ar : c.en}
                  </option>
                ))}
              </optgroup>
              <optgroup label={dict.onboarding.country.otherGroup}>
                {otherCountries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {locale === "ar" ? c.ar : c.en}
                  </option>
                ))}
              </optgroup>
            </Select>
          </div>
        );
      }

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
