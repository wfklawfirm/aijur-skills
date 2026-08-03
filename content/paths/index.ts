import type { PathDef } from "../types";
import { CC_UNITS_01_04 } from "./cc-units-01-04";
import { CC_UNITS_05_07 } from "./cc-units-05-07";
import { CC_UNITS_08_10 } from "./cc-units-08-10";
import { LE_UNITS_01_05 } from "./le-units-01-05";
import { LE_UNITS_06_10 } from "./le-units-06-10";

export const CLIENT_COMMUNICATION_PATH: PathDef = {
  id: "path.client-communication-foundations",
  slug: "client-communication-foundations",
  title: {
    ar: "أسس التواصل مع الموكل",
    en: "Client Communication Foundations",
  },
  tagline: {
    ar: "الاجتماع الأول يحدّد كل ما بعده.",
    en: "The first meeting sets everything that follows.",
  },
  description: {
    ar: "عشر وحدات قصيرة تنقلك من الاستعداد للقاء الأول إلى إدارة موكل غاضب: كيف تبني الثقة، وتُصغي دون أن تشخّص مبكرًا، وتسأل أسئلة أفضل، وتشرح بلغة مفهومة، وتضبط التوقعات، وترفض الوعد بالنتيجة دون أن تفقد الموكل، وتغلق الاجتماع بخطوات لها مالك وتاريخ.",
    en: "Ten short units that take you from preparing for a first meeting to handling an angry client: building trust, listening without diagnosing too early, asking better questions, explaining in language a client can use, setting expectations, refusing to promise an outcome without losing the client, and closing a meeting with steps that have an owner and a date.",
  },
  track: "professional",
  audience: ["student", "trainee", "junior"],
  estimatedWeeks: 4,
  domainIds: ["dom.client-relations", "dom.communication", "dom.professional-judgment"],
  pairedPathId: "path.legal-english-client-communication",
  chapters: [
    {
      id: "ch.cc.first-contact",
      pathId: "path.client-communication-foundations",
      order: 1,
      title: { ar: "اللقاء الأول", en: "First contact" },
      description: {
        ar: "ما تفعله قبل أن يجلس الموكل، وما تفعله في الدقائق الخمس الأولى.",
        en: "What you do before the client sits down, and what you do in the first five minutes.",
      },
    },
    {
      id: "ch.cc.understanding",
      pathId: "path.client-communication-foundations",
      order: 2,
      title: { ar: "الفهم قبل الرأي", en: "Understanding before opinion" },
      description: {
        ar: "الأسئلة التي تكشف الوقائع، واللغة التي تجعل الجواب قابلًا للاستعمال.",
        en: "The questions that surface the facts, and the language that makes your answer usable.",
      },
    },
    {
      id: "ch.cc.setting-expectations",
      pathId: "path.client-communication-foundations",
      order: 3,
      title: { ar: "ضبط التوقعات", en: "Setting expectations" },
      description: {
        ar: "الوقت والكلفة والنتيجة — وكيف تقول الحقيقة دون أن تخسر الموكل.",
        en: "Time, cost and outcome — and how to tell the truth without losing the client.",
      },
    },
    {
      id: "ch.cc.keeping-trust",
      pathId: "path.client-communication-foundations",
      order: 4,
      title: { ar: "الحفاظ على الثقة", en: "Keeping trust" },
      description: {
        ar: "التحديث الذي لم يضطر الموكل لطلبه، والرد حين يغضب.",
        en: "The update the client never had to chase, and what you say when they are angry.",
      },
    },
  ],
  units: [...CC_UNITS_01_04, ...CC_UNITS_05_07, ...CC_UNITS_08_10],
};

export const LEGAL_ENGLISH_PATH: PathDef = {
  id: "path.legal-english-client-communication",
  slug: "legal-english-client-communication",
  title: {
    ar: "الإنجليزية القانونية للتواصل مع الموكل",
    en: "Legal English for Client Communication",
  },
  tagline: {
    ar: "لغة تعمل في المكالمة، لا في القاموس.",
    en: "English that works on the call, not in the dictionary.",
  },
  description: {
    ar: "طبقة لغوية كاملة فوق مهارات التواصل: كيف تقدّم نفسك، وتفتح المكالمة، وتسأل عن الخلفية، وتتحقق من الوقائع، وتشرح الخطوات، وتتحدث عن المواعيد دون لبس، وتضبط التوقعات دون وعدٍ عرضي، وتكتب تحديثًا للموكل، وتجيب عن سؤال صعب تحت الضغط. التقييم على الوضوح والاحتراف وقابلية الفهم — لا على اللكنة.",
    en: "A full language layer over the communication skills: introducing yourself, opening the call, asking for background, checking facts, explaining next steps, talking about deadlines without ambiguity, managing expectations without an accidental promise, writing a client update, and answering a hard question under pressure. Assessed on clarity, professionalism and intelligibility — never on accent.",
  },
  track: "legal_english",
  audience: ["student", "trainee", "junior", "experienced"],
  estimatedWeeks: 5,
  domainIds: ["dom.legal-english", "dom.client-relations", "dom.communication"],
  pairedPathId: "path.client-communication-foundations",
  chapters: [
    {
      id: "ch.le.meeting-people",
      pathId: "path.legal-english-client-communication",
      order: 1,
      title: { ar: "لقاء الناس", en: "Meeting people" },
      description: {
        ar: "التقديم، الترحيب، وفتح المكالمة بثقة.",
        en: "Introducing, welcoming, and opening the call with confidence.",
      },
    },
    {
      id: "ch.le.getting-the-facts",
      pathId: "path.legal-english-client-communication",
      order: 2,
      title: { ar: "الوصول إلى الوقائع", en: "Getting the facts" },
      description: {
        ar: "أسئلة الخلفية، والتحقق من الفهم، وشرح الخطوات التالية بلغة بسيطة.",
        en: "Background questions, checking understanding, and explaining next steps in plain English.",
      },
    },
    {
      id: "ch.le.explaining-and-planning",
      pathId: "path.legal-english-client-communication",
      order: 3,
      title: { ar: "الشرح والتخطيط", en: "Explaining and planning" },
      description: {
        ar: "المواعيد بلا لبس، والتوقعات بلا وعد.",
        en: "Deadlines without ambiguity, expectations without a promise.",
      },
    },
    {
      id: "ch.le.writing-and-pressure",
      pathId: "path.legal-english-client-communication",
      order: 4,
      title: { ar: "الكتابة وتحت الضغط", en: "Writing, and under pressure" },
      description: {
        ar: "تحديث مكتوب يقرأه الموكل مرة واحدة، وجواب هادئ عن سؤال صعب.",
        en: "A written update the client reads once, and a calm answer to a hard question.",
      },
    },
  ],
  units: [...LE_UNITS_01_05, ...LE_UNITS_06_10],
};

export const PATHS: PathDef[] = [CLIENT_COMMUNICATION_PATH, LEGAL_ENGLISH_PATH];
