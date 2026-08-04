/**
 * Layer 2 of the hybrid content model for Daily Challenge -- AIJUR's second
 * adaptive content type (see docs/ADAPTIVE_ENGINE_ARCHITECTURE.md §14).
 * Same role hook-composer.ts plays for hooks: pure, deterministic, offline,
 * and the `offline()` fallback wired into the AI agent wrapper
 * (src/lib/ai/agents/adaptive-challenge.ts), so the product's zero-AI-keys
 * guarantee holds for this content type too.
 *
 * A hook is a short reflective prompt or question -- it asks the learner to
 * think for a second. A challenge is a concrete micro-action: it asks the
 * learner to actually *do* something today, in real work or in the app.
 * That's the real distinction this content type exists to test (see the
 * "does the pattern generalize to a genuinely different communicative
 * purpose, not just a reworded hook" question the roadmap posed) -- every
 * template below ends in an instruction, not a question.
 */
import type { Locale } from "@content/types";
import {
  type DimensionOption,
  type ImplementedChallengeType,
  pickCareerStage,
  pickChannel,
  pickCounterparty,
  pickGoal,
  pickTone,
} from "@content/adaptive/dimensions";

export interface ChallengeComposeInput {
  skillName: string;
  challengeTypeId: ImplementedChallengeType;
  careerStageId: string;
  counterpartyId: string;
  channelId: string;
  toneId: string;
  goalId: string;
  locale: Locale;
}

export interface ChallengePayload {
  title: string;
  body: string;
  attribution: string | null;
}

type Template = (opts: {
  skillName: string;
  role: DimensionOption;
  counterparty: DimensionOption;
  channel: DimensionOption;
  tone: DimensionOption;
  goal: DimensionOption;
  locale: Locale;
}) => ChallengePayload;

const TEMPLATES: Record<ImplementedChallengeType, Template> = {
  apply_today: ({ skillName, counterparty, channel, tone, goal, locale }) =>
    locale === "en"
      ? {
          title: "Apply it today",
          body: `Today, when ${counterparty.label.en} reaches you ${channel.label.en} being ${tone.label.en}, use ${skillName} on purpose to ${goal.label.en}. Two lines tonight: what did you say?`,
          attribution: null,
        }
      : {
          title: "طبّقها اليوم",
          body: `اليوم، حين يتواصل معك ${counterparty.label.ar} ${channel.label.ar} وهو ${tone.label.ar}، استخدم مهارة ${skillName} عن قصد لأجل ${goal.label.ar}. سطران الليلة: ما الذي قلته فعلًا؟`,
          attribution: null,
        },

  rewrite_one: ({ skillName, counterparty, channel, locale }) =>
    locale === "en"
      ? {
          title: "Rewrite one thing",
          body: `Find one message you already sent ${channel.label.en} to someone like ${counterparty.label.en}. Rewrite just its opening line using ${skillName}. Keep both — what changed?`,
          attribution: null,
        }
      : {
          title: "أعد صياغة شيء واحد",
          body: `ابحث عن رسالة أرسلتها ${channel.label.ar} إلى شخص يشبه ${counterparty.label.ar}. أعد صياغة جملتها الأولى فقط باستخدام مهارة ${skillName}. احتفظ بالنسختين — ما الذي تغيّر؟`,
          attribution: null,
        },

  spot_and_log: ({ skillName, counterparty, tone, locale }) =>
    locale === "en"
      ? {
          title: "Spot it and log it",
          body: `Today, watch for one real moment ${skillName} was needed — someone ${tone.label.en}, like ${counterparty.label.en}. Write two lines: what happened, and did you use it?`,
          attribution: null,
        }
      : {
          title: "لاحظها ودوّنها",
          body: `راقب اليوم لحظة حقيقية احتاجت مهارة ${skillName} — شخص ${tone.label.ar}، يشبه ${counterparty.label.ar}. دوّن سطرين: ماذا جرى، وهل استخدمتها؟`,
          attribution: null,
        },

  teach_it_back: ({ skillName, goal, locale }) =>
    locale === "en"
      ? {
          title: "Teach it back",
          body: `Explain ${skillName} in two sentences today, as if teaching a trainee — specifically how it helps you ${goal.label.en}. Can't do it in two? That's today's real gap.`,
          attribution: null,
        }
      : {
          title: "اشرحها لغيرك",
          body: `اشرح مهارة ${skillName} اليوم بجملتين، كما لو كنت تُعلّم متدرّبًا — تحديدًا كيف تساعدك على ${goal.label.ar}. لم تستطع بجملتين؟ تلك هي الفجوة الحقيقية اليوم.`,
          attribution: null,
        },
};

/** The deterministic composer -- Phase 2's primary content source for Daily
 * Challenge, and the `offline()` fallback for the AI-agent wrapper when a
 * key IS configured. Mirrors composeHookOffline() exactly (see
 * hook-composer.ts) -- same shape, same fallback role, different
 * template set and a different communicative purpose (an instruction, not
 * a question). */
export function composeChallengeOffline(input: ChallengeComposeInput): ChallengePayload {
  const role = pickCareerStage(input.careerStageId);
  const counterparty = pickCounterparty(input.counterpartyId);
  const channel = pickChannel(input.channelId);
  const tone = pickTone(input.toneId);
  const goal = pickGoal(input.goalId);
  const template = TEMPLATES[input.challengeTypeId];
  return template({ skillName: input.skillName, role, counterparty, channel, tone, goal, locale: input.locale });
}
