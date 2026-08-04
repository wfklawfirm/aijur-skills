/**
 * Layer 2 of the hybrid content model (see docs/ADAPTIVE_ENGINE_ARCHITECTURE.md
 * §2): Controlled Generative Templates. Pure, deterministic, offline --
 * this is what actually runs whenever no AI provider key is configured
 * (the product's default mode), and is also the `offline()` fallback wired
 * into the AI agent wrapper (src/lib/ai/agents/adaptive-hook.ts) so the two
 * paths never diverge in shape.
 *
 * Each hook type is a genuinely different sentence structure, not a reworded
 * copy of another -- hookType is itself part of the structural fingerprint
 * (see fingerprint.ts), so two hook types that only swapped nouns would be
 * exactly the "structural repetition" the novelty system exists to catch.
 */
import type { Locale } from "@content/types";
import {
  type DimensionOption,
  type ImplementedHookType,
  pickCareerStage,
  pickChannel,
  pickCounterparty,
  pickGoal,
  pickTone,
} from "@content/adaptive/dimensions";

export interface HookComposeInput {
  skillName: string;
  hookTypeId: ImplementedHookType;
  careerStageId: string;
  counterpartyId: string;
  channelId: string;
  toneId: string;
  goalId: string;
  locale: Locale;
}

export interface HookPayload {
  title: string;
  body: string;
  attribution: string | null;
}

function capitalize(s: string): string {
  return s.length > 0 ? s[0]!.toUpperCase() + s.slice(1) : s;
}

const CLIENT_QUOTES: Record<string, { ar: string; en: string }> = {
  clarify: { en: "I just need to understand what's actually happening.", ar: "أريد فقط أن أفهم ما الذي يحدث فعلاً." },
  set_expectations: { en: "So when exactly will this be over?", ar: "إذن متى بالضبط سينتهي هذا؟" },
  prioritize: { en: "Which of these matters most, honestly?", ar: "أي من هذه الأمور هو الأهم فعلاً، بصراحة؟" },
  de_escalate: { en: "I'm not happy about how this has gone.", ar: "لست راضيًا عن الطريقة التي سار بها الأمر." },
  persuade: { en: "Why should I trust your judgment on this?", ar: "لماذا يجب أن أثق برأيك في هذا الأمر؟" },
  obtain_information: { en: "There are a few things I haven't told you yet.", ar: "هناك بعض الأمور التي لم أخبرك بها بعد." },
};

type Template = (opts: {
  skillName: string;
  role: DimensionOption;
  counterparty: DimensionOption;
  channel: DimensionOption;
  tone: DimensionOption;
  goal: DimensionOption;
  locale: Locale;
}) => HookPayload;

const TEMPLATES: Record<ImplementedHookType, Template> = {
  quick_dilemma: ({ skillName, counterparty, channel, tone, goal, locale }) =>
    locale === "en"
      ? {
          title: "Quick dilemma",
          body: `${capitalize(counterparty.label.en)}, ${tone.label.en}, reaches you ${channel.label.en} about ${skillName}. Your goal: ${goal.label.en}. What's the one line you say first?`,
          attribution: null,
        }
      : {
          title: "معضلة سريعة",
          body: `${counterparty.label.ar} ${tone.label.ar} يتواصل معك ${channel.label.ar} بخصوص ${skillName}. هدفك: ${goal.label.ar}. ما أول جملة تقولها؟`,
          attribution: null,
        },

  unexpected_mistake: ({ skillName, counterparty, channel, tone, locale }) =>
    locale === "en"
      ? {
          title: "Unexpected mistake",
          body: `You just noticed a real slip in how you handled ${skillName} with ${counterparty.label.en}, ${channel.label.en}. Before you can fix it, they reply — ${tone.label.en}. Do you own it first, or gather more facts first?`,
          attribution: null,
        }
      : {
          title: "خطأ غير متوقع",
          body: `اكتشفت للتو خللاً حقيقيًا في تعاملك بخصوص ${skillName} مع ${counterparty.label.ar}، ${channel.label.ar}. وقبل أن تتمكن من إصلاحه، يرد عليك وهو ${tone.label.ar}. هل تعترف بالخطأ أولاً، أم تجمع مزيدًا من المعلومات أولاً؟`,
          attribution: null,
        },

  myth_vs_reality: ({ skillName, counterparty, channel, tone, locale }) =>
    locale === "en"
      ? {
          title: "Myth or reality?",
          body: `Myth or reality: staying quiet is the safest move when ${counterparty.label.en} is ${tone.label.en}, ${channel.label.en}? Think about what ${skillName} actually calls for.`,
          attribution: null,
        }
      : {
          title: "شائعة أم حقيقة؟",
          body: `شائعة أم حقيقة: الصمت هو الخيار الأكثر أمانًا حين يكون ${counterparty.label.ar} ${tone.label.ar}، ${channel.label.ar}؟ فكّر بما تتطلبه فعلًا مهارة ${skillName}.`,
          attribution: null,
        },

  what_would_you_do: ({ skillName, counterparty, channel, tone, goal, locale }) =>
    locale === "en"
      ? {
          title: "What would you do?",
          body: `${capitalize(counterparty.label.en)} is ${tone.label.en}, and reaches you ${channel.label.en} in the middle of a busy day. Your goal, on ${skillName}: ${goal.label.en}. What would you do in the first 30 seconds?`,
          attribution: null,
        }
      : {
          title: "ماذا كنت لتفعل؟",
          body: `${counterparty.label.ar} ${tone.label.ar}، ويتواصل معك ${channel.label.ar} في خضم يوم مزدحم. هدفك بخصوص ${skillName}: ${goal.label.ar}. ماذا كنت لتفعل في أول 30 ثانية؟`,
          attribution: null,
        },

  fast_prioritization: ({ skillName, counterparty, channel, tone, goal, locale }) =>
    locale === "en"
      ? {
          title: "Fast prioritization",
          body: `In the next five minutes you have: a message from ${counterparty.label.en} (${tone.label.en}, ${channel.label.en}), and everything else on your desk. If the goal is to ${goal.label.en} on ${skillName}, what comes first?`,
          attribution: null,
        }
      : {
          title: "ترتيب أولويات سريع",
          body: `خلال الدقائق الخمس القادمة لديك: رسالة من ${counterparty.label.ar} (${tone.label.ar}، ${channel.label.ar})، وكل شيء آخر على مكتبك. إذا كان الهدف هو ${goal.label.ar} بخصوص ${skillName}، فما الذي يأتي أولًا؟`,
          attribution: null,
        },

  spot_the_risk: ({ skillName, counterparty, channel, tone, goal, locale }) =>
    locale === "en"
      ? {
          title: "Spot the risk",
          body: `${capitalize(counterparty.label.en)} asks you a simple-sounding question ${channel.label.en}, ${tone.label.en}. Answering too fast could put your goal — ${goal.label.en} — at risk, on ${skillName}. Where's the risk here?`,
          attribution: null,
        }
      : {
          title: "اكتشف الخطر",
          body: `يطرح عليك ${counterparty.label.ar} سؤالًا يبدو بسيطًا ${channel.label.ar}، وهو ${tone.label.ar}. الإجابة بسرعة زائدة قد تهدد هدفك — ${goal.label.ar} — بخصوص ${skillName}. أين يكمن الخطر هنا؟`,
          attribution: null,
        },

  client_quote: ({ skillName, counterparty, channel, tone, goal, locale }) => {
    const quote = CLIENT_QUOTES[goal.id] ?? CLIENT_QUOTES.clarify!;
    return locale === "en"
      ? {
          title: "In their words",
          body: `"${quote.en}" — ${counterparty.label.en}, ${tone.label.en}, ${channel.label.en}. What's the most professional reply, with ${skillName} in mind?`,
          attribution: null,
        }
      : {
          title: "بكلماتهم",
          body: `"${quote.ar}" — ${counterparty.label.ar}، ${tone.label.ar}، ${channel.label.ar}. ما هو أفضل رد مهني، مع مراعاة ${skillName}؟`,
          attribution: null,
        };
  },

  decision_under_pressure: ({ skillName, counterparty, channel, tone, goal, locale }) =>
    locale === "en"
      ? {
          title: "Decision under pressure",
          body: `You have maybe two minutes left. ${capitalize(counterparty.label.en)} is ${tone.label.en}, ${channel.label.en}, and you still haven't managed to ${goal.label.en} on ${skillName}. What's your next move?`,
          attribution: null,
        }
      : {
          title: "قرار تحت ضغط",
          body: `أمامك دقيقتان تقريبًا. ${counterparty.label.ar} ${tone.label.ar}، ${channel.label.ar}، ولم تتمكن بعد من ${goal.label.ar} بخصوص ${skillName}. ما هي خطوتك التالية؟`,
          attribution: null,
        },
};

/** The deterministic composer -- Phase 1's primary content source (the
 * product runs with zero AI keys by default), and the `offline()` fallback
 * for the AI-agent wrapper when a key IS configured. */
export function composeHookOffline(input: HookComposeInput): HookPayload {
  const role = pickCareerStage(input.careerStageId);
  const counterparty = pickCounterparty(input.counterpartyId);
  const channel = pickChannel(input.channelId);
  const tone = pickTone(input.toneId);
  const goal = pickGoal(input.goalId);
  const template = TEMPLATES[input.hookTypeId];
  return template({ skillName: input.skillName, role, counterparty, channel, tone, goal, locale: input.locale });
}
