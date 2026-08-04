import type { PathDef } from "../types";
import { CC_UNITS_01_04 } from "./cc-units-01-04";
import { CC_UNITS_05_07 } from "./cc-units-05-07";
import { CC_UNITS_08_10 } from "./cc-units-08-10";
import { LE_UNITS_01_05 } from "./le-units-01-05";
import { LE_UNITS_06_10 } from "./le-units-06-10";
import { NI_UNITS_01_05 } from "./ni-units-01-05";
import { NI_UNITS_06_10 } from "./ni-units-06-10";
import { SM_UNITS_01_05 } from "./sm-units-01-05";
import { SM_UNITS_06_10 } from "./sm-units-06-10";
import { TL_UNITS_01_05 } from "./tl-units-01-05";
import { TL_UNITS_06_10 } from "./tl-units-06-10";
import { BD_UNITS_01_05 } from "./bd-units-01-05";
import { BD_UNITS_06_10 } from "./bd-units-06-10";
import { FO_UNITS_01_05 } from "./fo-units-01-05";
import { FO_UNITS_06_10 } from "./fo-units-06-10";

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

export const NEGOTIATION_INFLUENCE_PATH: PathDef = {
  id: "path.negotiation-influence",
  slug: "negotiation-influence",
  title: {
    ar: "التفاوض والتأثير",
    en: "Negotiation and Influence",
  },
  tagline: {
    ar: "التحضير يفوز قبل أن تبدأ الجلسة.",
    en: "Preparation wins before the session even starts.",
  },
  description: {
    ar: "عشر وحدات تنقلك من تحضير ورقة تفاوض إلى إدارة جلسة مع طرف عدائي: كيف تبني حجة مقنعة، وتقرأ مصالح الطرف الآخر، وتتفاوض على المصالح لا على الأرقام، وتلتزم بحدود تفويضك، وتتعامل مع أساليب الضغط دون أن تفقد الاتفاق أو أعصابك، وتُغلق الجلسة بالتزام واضح موثّق كتابيًا.",
    en: "Ten units that take you from preparing a negotiation sheet to running a session against a hostile counterpart: building a persuasive case, reading the other side's real interests, negotiating on interests rather than numbers, staying inside your mandate, handling pressure tactics without losing the deal or your composure, and closing with a clear commitment confirmed in writing.",
  },
  track: "professional",
  audience: ["trainee", "junior", "experienced"],
  estimatedWeeks: 4,
  domainIds: ["dom.negotiation-influence"],
  chapters: [
    {
      id: "ch.ni.preparing",
      pathId: "path.negotiation-influence",
      order: 1,
      title: { ar: "التحضير للتفاوض", en: "Preparing to negotiate" },
      description: {
        ar: "الهدف، وحد التنازل، والبديل — قبل أن تبني الحجة وتقرأ الطرف الآخر.",
        en: "The goal, the walk-away point, and the alternative — before you build the case and read the other side.",
      },
    },
    {
      id: "ch.ni.running-the-session",
      pathId: "path.negotiation-influence",
      order: 2,
      title: { ar: "إدارة الجلسة", en: "Running the session" },
      description: {
        ar: "التفاوض على المصالح لا المواقف، والبقاء ضمن حدود التفويض.",
        en: "Negotiating on interests rather than positions, and staying inside your mandate.",
      },
    },
    {
      id: "ch.ni.under-pressure",
      pathId: "path.negotiation-influence",
      order: 3,
      title: { ar: "تحت الضغط", en: "Under pressure" },
      description: {
        ar: "تسمية أساليب الضغط، وجلسة كاملة مع طرف عدائي.",
        en: "Naming pressure tactics, and a full session against a hostile counterpart.",
      },
    },
    {
      id: "ch.ni.closing",
      pathId: "path.negotiation-influence",
      order: 4,
      title: { ar: "الإغلاق والتوثيق", en: "Closing and documenting" },
      description: {
        ar: "التزام واضح لا يحتمل التأويل، وتوثيق فوري ودقيق.",
        en: "A clear commitment that leaves no room for a later dispute, confirmed promptly and precisely.",
      },
    },
  ],
  units: [...NI_UNITS_01_05, ...NI_UNITS_06_10],
};

export const SELF_MANAGEMENT_PATH: PathDef = {
  id: "path.self-management",
  slug: "self-management",
  title: {
    ar: "إدارة الذات",
    en: "Self-Management",
  },
  tagline: {
    ar: "الطاقة محدودة. الأسبوع الذي يعترف بذلك ينجح.",
    en: "Capacity is fixed. The week that admits it is the one that works.",
  },
  description: {
    ar: "عشر وحدات تنقلك من رؤية طاقتك الحقيقية إلى الإفصاح المبكر عن موعد ستفوته: كيف تفرز العاجل عن المهم عن طارئ شخص آخر، وتبني خطة تصمد بعد الاثنين، وتحمي وقتًا للتركيز الحقيقي، وترفض طلبًا غير معقول دون أن تُفسد العلاقة، وتلاحظ توتّرك قبل أن يظهر في ردٍّ متسرّع، وتبدأ المهمة التي تتجنّبها، وتُفصح عن موعد ستفوته بخطة تعافٍ واضحة بدل الاختباء.",
    en: "Ten units that take you from seeing your real capacity to disclosing a deadline you're about to miss: sorting the urgent from the important from someone else's emergency, building a plan that survives Monday, protecting real focus time, saying no to an unreasonable ask without damaging the relationship, noticing your own stress before it leaks into a reply, starting the task you're avoiding, and disclosing a missed deadline with a real recovery plan instead of hiding it.",
  },
  track: "professional",
  audience: ["student", "trainee", "junior", "experienced"],
  estimatedWeeks: 4,
  domainIds: ["dom.self-management"],
  chapters: [
    {
      id: "ch.sm.planning-your-week",
      pathId: "path.self-management",
      order: 1,
      title: { ar: "تخطيط أسبوعك", en: "Planning your week" },
      description: {
        ar: "الطاقة الحقيقية لا المعلنة، وفرز العاجل عن المهم، وخطة تصمد بعد الاثنين.",
        en: "Real capacity, not declared capacity — sorting urgent from important, and a plan that survives Monday.",
      },
    },
    {
      id: "ch.sm.protecting-your-focus",
      pathId: "path.self-management",
      order: 2,
      title: { ar: "حماية تركيزك", en: "Protecting your focus" },
      description: {
        ar: "وقت تركيز حقيقي لا يُقاطَع، ورفض مهني لطلب يتجاوز طاقتك.",
        en: "Real, uninterrupted focus time, and a professional refusal when a request exceeds your capacity.",
      },
    },
    {
      id: "ch.sm.staying-steady",
      pathId: "path.self-management",
      order: 3,
      title: { ar: "الثبات تحت الضغط", en: "Staying steady" },
      description: {
        ar: "ملاحظة توتّرك مبكرًا، والثبات حين يتصاعد الآخرون، وإعادة ضبط سريعة بين مهمة وأخرى.",
        en: "Noticing your own stress early, staying steady when someone else escalates, and a fast reset between tasks.",
      },
    },
    {
      id: "ch.sm.recovering-and-sustaining",
      pathId: "path.self-management",
      order: 4,
      title: { ar: "التعافي والاستمرارية", en: "Recovering and sustaining" },
      description: {
        ar: "بدء المهمة التي تتجنّبها، والإفصاح المبكر عن موعد ستفوته بخطة تعافٍ واضحة.",
        en: "Starting the task you're avoiding, and disclosing a deadline you're about to miss with a clear recovery plan.",
      },
    },
  ],
  units: [...SM_UNITS_01_05, ...SM_UNITS_06_10],
};

export const TEAMWORK_LEADERSHIP_PATH: PathDef = {
  id: "path.teamwork-leadership",
  slug: "teamwork-leadership",
  title: {
    ar: "العمل الجماعي والقيادة",
    en: "Teamwork and Leadership",
  },
  tagline: {
    ar: "القيادة لا تنتظر منصبًا.",
    en: "Leadership doesn't wait for a title.",
  },
  description: {
    ar: "عشر وحدات تنقلك من تفويض مهمة بوضوح إلى إقناع زميل مشغول بإعطاء ملفك الأولوية: كيف تختار الشخص المناسب للمهمة المناسبة، وتكتب تعليمات قابلة للتنفيذ فورًا، وتتابع دون أن تُشعِر أحدًا بعدم الثقة، وتعطي ملاحظة محددة تُستخدم، وتتلقى ملاحظة دون دفاع، وتحدّث مشرفك قبل أن يسألك، وتطلب المساعدة قبل أن تتحول المشكلة لأزمة، وتختلف مع مشرفك باحترام دون خضوع صامت أو تمرّد، وتتحدث في الاجتماع بما يُسمَع، وتقود زميلاً لا سلطة لك عليه.",
    en: "Ten units that take you from delegating a task clearly to persuading a busy peer to prioritize your file: choosing the right person for the right task, writing instructions that can be acted on immediately, checking in without signalling distrust, giving feedback that actually gets used, receiving feedback without getting defensive, updating your supervisor before they have to ask, asking for help before a problem becomes a crisis, disagreeing with your supervisor respectfully without silent compliance or insubordination, speaking in a meeting in a way that actually gets heard, and leading a colleague you have no authority over.",
  },
  track: "professional",
  audience: ["trainee", "junior", "experienced", "manager"],
  estimatedWeeks: 4,
  domainIds: ["dom.teamwork-leadership"],
  chapters: [
    {
      id: "ch.tl.delegating-clearly",
      pathId: "path.teamwork-leadership",
      order: 1,
      title: { ar: "التفويض بوضوح", en: "Delegating clearly" },
      description: {
        ar: "الشخص المناسب للمهمة المناسبة، وتعليمات يمكن العمل بها فورًا، ومتابعة لا تُشعِر بعدم الثقة.",
        en: "The right person for the right task, instructions that can be acted on immediately, and check-ins that don't signal distrust.",
      },
    },
    {
      id: "ch.tl.feedback-that-lands",
      pathId: "path.teamwork-leadership",
      order: 2,
      title: { ar: "ملاحظات تُستخدم فعلاً", en: "Feedback that lands" },
      description: {
        ar: "ملاحظة محددة تصف السلوك وأثره، وتلقّي الملاحظة دون تبرير أو دفاع.",
        en: "Specific feedback that names the behavior and its effect, and receiving feedback without justifying or getting defensive.",
      },
    },
    {
      id: "ch.tl.managing-up",
      pathId: "path.teamwork-leadership",
      order: 3,
      title: { ar: "إدارة العلاقة مع المشرف", en: "Managing up" },
      description: {
        ar: "تحديث استباقي، وطلب مساعدة مبكر، واختلاف محترم مع من يشرف عليك.",
        en: "Proactive updates, asking for help early, and a respectful disagreement with the person supervising you.",
      },
    },
    {
      id: "ch.tl.leading-without-authority",
      pathId: "path.teamwork-leadership",
      order: 4,
      title: { ar: "القيادة بلا سلطة رسمية", en: "Leading without authority" },
      description: {
        ar: "التحدث في الاجتماع بما يُسمَع فعلاً، وإقناع زميل لا سلطة لك عليه بإعطاء طلبك الأولوية.",
        en: "Speaking in a meeting in a way that's actually heard, and persuading a peer you have no authority over to prioritize your ask.",
      },
    },
  ],
  units: [...TL_UNITS_01_05, ...TL_UNITS_06_10],
};

export const BUSINESS_DEVELOPMENT_PATH: PathDef = {
  id: "path.business-development",
  slug: "business-development",
  title: {
    ar: "تطوير الأعمال",
    en: "Business Development",
  },
  tagline: {
    ar: "الثقة تُبنى قبل أن يُطلب الملف.",
    en: "Trust is built before the file is ever asked for.",
  },
  description: {
    ar: "عشر وحدات تنقلك من بناء شبكة علاقات حقيقية إلى تحويل اهتمام عابر إلى تكليف فعلي: كيف تبقى حاضرًا في ذهن معارفك دون إلحاح، وتفهم أعمال عميلك لا مجرد ملفه القانوني، وتطلب إحالة دون إحراج، وتحوّل تواصلاً غير رسميًا إلى فرصة عمل حقيقية — دون أن تعد يومًا بنتيجة قانونية مضمونة.",
    en: "Ten units that take you from building a real network to converting a passing moment of interest into an actual instruction: staying present in your contacts' minds without being pushy, understanding your client's business rather than just their legal file, asking for a referral without awkwardness, and converting an informal contact into real work — without ever promising a guaranteed legal outcome.",
  },
  track: "professional",
  audience: ["trainee", "junior", "experienced"],
  estimatedWeeks: 4,
  domainIds: ["dom.business-development"],
  chapters: [
    {
      id: "ch.bd.building-the-network",
      pathId: "path.business-development",
      order: 1,
      title: { ar: "بناء الشبكة", en: "Building the network" },
      description: {
        ar: "التعارف بهدف واضح، والمتابعة التي لا تبدو مصلحية.",
        en: "Purposeful introductions, and follow-up that doesn't read as self-interested.",
      },
    },
    {
      id: "ch.bd.understanding-the-business",
      pathId: "path.business-development",
      order: 2,
      title: { ar: "فهم أعمال العميل", en: "Understanding the business" },
      description: {
        ar: "أسئلة تكشف أولويات العميل التجارية، لا فقط سؤاله القانوني.",
        en: "Questions that surface the client's commercial priorities, not just their legal question.",
      },
    },
    {
      id: "ch.bd.staying-visible",
      pathId: "path.business-development",
      order: 3,
      title: { ar: "البقاء حاضرًا", en: "Staying visible" },
      description: {
        ar: "التواصل الدوري ذو القيمة، وطلب إحالة دون إحراج الطرفين.",
        en: "Periodic contact that adds value, and asking for a referral without embarrassing either side.",
      },
    },
    {
      id: "ch.bd.converting-to-instructions",
      pathId: "path.business-development",
      order: 4,
      title: { ar: "التحويل إلى تكليف", en: "Converting to instructions" },
      description: {
        ar: "من اهتمام عابر إلى خطوة تالية محددة، دون وعد بنتيجة.",
        en: "From a passing moment of interest to a concrete next step, with no promise of an outcome.",
      },
    },
  ],
  units: [...BD_UNITS_01_05, ...BD_UNITS_06_10],
};

export const FIRM_OPERATIONS_PATH: PathDef = {
  id: "path.firm-operations",
  slug: "firm-matter-operations",
  title: {
    ar: "إدارة المكتب والملفات",
    en: "Firm and Matter Operations",
  },
  tagline: {
    ar: "الملف الذي يفهمه أي أحد هو الملف الذي لا ينهار تحت الضغط.",
    en: "A file anyone can pick up is a file that doesn't collapse under pressure.",
  },
  description: {
    ar: "عشر وحدات تنقلك من استلام تكليف جديد بشكل صحيح إلى تسليم ملفك لزميل في محادثة مباشرة: كيف تؤكد نطاق العمل كتابيًا، وتنظّم الملف من اليوم الأول، وتصمم قائمة تحقق تصمد تحت الضغط، وتحفظ الدرس بعد إغلاق الملف، وتراجع المخرجات قبل خروجها، وتكتب مذكّرة أتعاب واضحة، وتُبلغ عن خطأ حقيقي دون إخفائه أو تحميل الآخرين المسؤولية، وتسلّم ملفك بإيجاز لا ينسى شيئًا مهمًا.",
    en: "Ten units that take you from properly taking on a new instruction to handing your matter to a colleague in a live conversation: confirming scope in writing, organizing a file from day one, designing a checklist that survives time pressure, capturing the lesson after a file closes, checking output before it leaves, writing a billing narrative that holds up, disclosing a real error without hiding it or blaming someone else, and handing over a matter without losing anything that matters.",
  },
  track: "professional",
  audience: ["trainee", "junior", "experienced"],
  estimatedWeeks: 4,
  domainIds: ["dom.firm-operations"],
  chapters: [
    {
      id: "ch.fo.taking-on-a-matter",
      pathId: "path.firm-operations",
      order: 1,
      title: { ar: "استلام التكليف", en: "Taking on a matter" },
      description: {
        ar: "تأكيد نطاق العمل كتابيًا قبل البدء، وفتح الملف بالشكل الصحيح.",
        en: "Confirming scope in writing before work starts, and opening the file correctly.",
      },
    },
    {
      id: "ch.fo.organizing-the-file",
      pathId: "path.firm-operations",
      order: 2,
      title: { ar: "تنظيم الملف", en: "Organizing the file" },
      description: {
        ar: "بنية ملف يجدها أي أحد خلال ثوانٍ، وقائمة تحقق تصمد تحت الضغط.",
        en: "A file structure anyone can navigate in seconds, and a checklist that survives time pressure.",
      },
    },
    {
      id: "ch.fo.quality-before-it-leaves",
      pathId: "path.firm-operations",
      order: 3,
      title: { ar: "الجودة قبل الخروج", en: "Quality before it leaves" },
      description: {
        ar: "مراجعة أخيرة دقيقة، مذكّرة أتعاب واضحة، والإبلاغ عن خطأ حقيقي دون إخفائه.",
        en: "A careful final check, a billing narrative that holds up, and disclosing a real error without hiding it.",
      },
    },
    {
      id: "ch.fo.closing-and-handover",
      pathId: "path.firm-operations",
      order: 4,
      title: { ar: "الإغلاق والتسليم", en: "Closing and handover" },
      description: {
        ar: "مذكّرة تسليم لا تنسى شيئًا مهمًا، ومحادثة تسليم مباشرة مع الزميل الذي يخلفك.",
        en: "A handover note that doesn't lose anything that matters, and a live handover conversation with your successor.",
      },
    },
  ],
  units: [...FO_UNITS_01_05, ...FO_UNITS_06_10],
};

export const PATHS: PathDef[] = [
  CLIENT_COMMUNICATION_PATH,
  LEGAL_ENGLISH_PATH,
  NEGOTIATION_INFLUENCE_PATH,
  SELF_MANAGEMENT_PATH,
  TEAMWORK_LEADERSHIP_PATH,
  BUSINESS_DEVELOPMENT_PATH,
  FIRM_OPERATIONS_PATH,
];
