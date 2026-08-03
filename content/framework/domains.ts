import type { DomainDef } from "../types";

/**
 * The ten competency domains of the AIJUR Professional Skills Lab.
 * Order drives the order of the domain rail in the app.
 */
export const DOMAINS: DomainDef[] = [
  {
    id: "dom.client-relations",
    name: {
      ar: "العلاقة مع الموكّل",
      en: "Client Relations",
    },
    description: {
      ar: "بناء علاقة مهنية يثق بها الموكّل: الاستعداد للقاء، الإصغاء، السؤال الجيد، ضبط التوقّعات، والمتابعة بعد انتهاء الاجتماع.",
      en: "Building a professional relationship the client trusts: preparing for the meeting, listening, asking well, setting expectations, and following up after the meeting ends.",
    },
    order: 1,
    icon: "handshake",
  },
  {
    id: "dom.communication",
    name: {
      ar: "التواصل المهني",
      en: "Professional Communication",
    },
    description: {
      ar: "نقل الفكرة القانونية بلغة يفهمها غير القانوني، شفويًا وكتابيًا، وإدارة الاجتماعات والعروض بوضوح واختصار.",
      en: "Carrying a legal idea across in language a non-lawyer understands, in speech and in writing, and running meetings and presentations clearly and briefly.",
    },
    order: 2,
    icon: "message",
  },
  {
    id: "dom.negotiation-influence",
    name: {
      ar: "التفاوض والتأثير",
      en: "Negotiation and Influence",
    },
    description: {
      ar: "التحضير للتفاوض، فهم مصالح الطرف الآخر، بناء الحجّة المقنعة، وإدارة الخلاف دون إفساد العلاقة أو تجاوز حدود التفويض.",
      en: "Preparing to negotiate, reading the other side's interests, building a persuasive case, and handling disagreement without damaging the relationship or exceeding your mandate.",
    },
    order: 3,
    icon: "scale",
  },
  {
    id: "dom.self-management",
    name: {
      ar: "إدارة الذات",
      en: "Self-Management",
    },
    description: {
      ar: "إدارة الوقت والأولويات ضمن طاقة محدودة، وضبط الانفعال تحت الضغط، والحفاظ على القدرة على العمل بعد الأيام الصعبة.",
      en: "Managing time and priorities within a fixed capacity, staying steady under pressure, and keeping the ability to work after a hard day.",
    },
    order: 4,
    icon: "clock",
  },
  {
    id: "dom.teamwork-leadership",
    name: {
      ar: "العمل الجماعي والقيادة",
      en: "Teamwork and Leadership",
    },
    description: {
      ar: "التفويض الواضح، إعطاء الملاحظات وتلقّيها، إدارة العلاقة مع المشرف والفريق، وقيادة زملاء لا تملك عليهم سلطة مباشرة.",
      en: "Delegating clearly, giving and receiving feedback, managing the relationship with a supervisor and a team, and leading colleagues you have no direct authority over.",
    },
    order: 5,
    icon: "users",
  },
  {
    id: "dom.business-development",
    name: {
      ar: "تنمية العمل",
      en: "Business Development",
    },
    description: {
      ar: "بناء شبكة علاقات مهنية مستدامة، وفهم عمل الموكّل التجاري، وتحويل السمعة المهنية إلى توكيلات دون مبالغة أو وعود.",
      en: "Building a durable professional network, understanding the client's business, and turning professional reputation into instructions without overselling or promising.",
    },
    order: 6,
    icon: "growth",
  },
  {
    id: "dom.firm-operations",
    name: {
      ar: "إدارة المكتب والملفّات",
      en: "Firm and Matter Operations",
    },
    description: {
      ar: "استقبال التوكيل، تنظيم الملف، تصميم سير العمل، حفظ المعرفة داخل المكتب، وضبط جودة المخرجات قبل خروجها.",
      en: "Taking on a matter, organising the file, designing the workflow, keeping knowledge inside the firm, and checking the quality of work before it leaves.",
    },
    order: 7,
    icon: "folder",
  },
  {
    id: "dom.professional-judgment",
    name: {
      ar: "التقدير المهني والأخلاقيات",
      en: "Professional Judgment and Ethics",
    },
    description: {
      ar: "القرار الصائب في وضع غامض: حدود ما يمكن وعده، تضارب المصالح، السرّية، والاعتراف بالخطأ ومعالجته في وقته.",
      en: "Sound decisions in unclear situations: the limits of what may be promised, conflicts of interest, confidentiality, and naming and fixing an error in time.",
    },
    order: 8,
    icon: "shield",
  },
  {
    id: "dom.digital-ai",
    name: {
      ar: "التقنية والذكاء الاصطناعي",
      en: "Digital Tools and AI",
    },
    description: {
      ar: "استخدام أدوات المكتب الرقمية والذكاء الاصطناعي بمسؤولية: التحقّق من المخرجات، حماية بيانات الموكّل، ومعرفة متى لا تُستخدم الأداة.",
      en: "Using firm software and AI responsibly: verifying output, protecting client data, and knowing when the tool should not be used at all.",
    },
    order: 9,
    icon: "chip",
  },
  {
    id: "dom.legal-english",
    name: {
      ar: "الإنجليزية القانونية",
      en: "Legal English",
    },
    description: {
      ar: "التعامل مع الموكّل بالإنجليزية بوضوح وسجلّ مهني: التعريف بالنفس، أسئلة الوقائع، شرح الخطوات، المواعيد، والمراسلة المكتوبة.",
      en: "Dealing with a client in English clearly and in a professional register: introducing yourself, fact questions, explaining next steps, dates, and written correspondence.",
    },
    order: 10,
    icon: "globe",
  },
];
