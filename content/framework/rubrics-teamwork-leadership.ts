import type { RubricDef } from "../types";

/**
 * Assessment rubrics for the Teamwork & Leadership domain
 * (`dom.teamwork-leadership`) of AIJUR Professional Skills Lab.
 *
 * Every descriptor describes something a reviewer can point to in the
 * learner's transcript or text. No descriptor refers to attitude,
 * motivation, confidence, personality or accent — only to observable
 * features of what was said or written.
 */
export const TEAMWORK_LEADERSHIP_RUBRICS: RubricDef[] = [
  // -------------------------------------------------------------------------
  // 1. Written leadership communication — delegation, feedback, status updates
  // -------------------------------------------------------------------------
  {
    id: "rubric.leadership-written.v1",
    name: {
      ar: "جودة المراسلة القيادية المكتوبة (تفويض، ملاحظات، تحديث للمشرف)",
      en: "Quality of written leadership communication (delegation, feedback, supervisor update)",
    },
    version: "1.0.0",
    skillIds: ["skill.delegation", "skill.feedback", "skill.managing-up"],
    criteria: [
      {
        id: "cr.clarity-specificity",
        name: { ar: "وضوح الطلب أو الملاحظة ومحدّديته", en: "Clarity and specificity of the ask or feedback" },
        description: {
          ar: "يُقاس بما إذا حدّدت التعليمات أو الملاحظة بدقة ما هو المطلوب فعلاً أو ما السلوك المقصود، بدل عبارات عامة تحتمل أكثر من تفسير.",
          en: "Measured by whether the instruction or feedback names precisely what is required, or precisely which behaviour is meant, rather than general language open to more than one reading.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "لا تحديد لأي مطلوب؛ التعليمة تكتفي بذكر الملف («تابعي ملف شركة الوليد للمقاولات») دون تسمية المهمّة، أو الملاحظة تبقى عامة («صياغتك بحاجة لتحسين») دون ذكر أي موضع أو سلوك محدّد.",
            en: "No specific ask appears anywhere; the instruction only names the file (\"follow up on the Al-Waleed Contracting matter\") without naming the task, or the feedback stays general (\"your drafting needs work\") without naming any specific instance or behaviour.",
          },
          {
            ar: "يُسمَّى موضوع المهمّة أو الملاحظة، لكن الإجراء المطلوب أو السلوك المقصود يبقى غامضاً («انظري في نزاع الدفع مع المقاول» دون تحديد: مذكّرة؟ اتصال بالموكّل؟ مراجعة عقد؟).",
            en: "The subject of the task or feedback is named, but the required action or the intended behaviour stays vague (\"look into the payment dispute with the contractor\" without specifying: a memo? a call to the client? a contract review?).",
          },
          {
            ar: "معظم عناصر الطلب أو الملاحظة محدّدة، لكن عنصراً جوهرياً واحداً يبقى غامضاً (تُذكَر المهمّة والملف لكن لا يُذكَر الشكل أو النطاق المطلوب للمخرج).",
            en: "Most elements of the ask or feedback are specific, but one central element stays vague (the task and the matter are named, but the required format or scope of the output is not).",
          },
          {
            ar: "الطلب أو الملاحظة محدّدان بالكامل: المهمّة، والملف، والنطاق أو الشكل المطلوب مذكورة صراحةً (مثلاً: «أعدّي مذكّرة من صفحتين تلخّص أسباب الطعن الثلاثة في قضية الشيك المرتجع ضدّ أحمد الحلبي، مع إرفاق نسخة عن العقد الأصلي»)، أو الملاحظة تشير إلى موضع محدّد وسلوك محدّد لا إلى انطباع عام.",
            en: "The ask or feedback is fully specific: the task, the matter, and the required scope or format are all named explicitly (e.g. \"draft a two-page memo summarising the three grounds of appeal in the dishonoured-cheque case against Ahmad al-Halabi, attaching a copy of the original contract\"), or the feedback points to a specific instance and a specific behaviour rather than a general impression.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.audience-tone",
        name: { ar: "مواءمة النبرة للمخاطَب", en: "Tone calibrated to the audience" },
        description: {
          ar: "يُقاس بما إذا تغيّرت درجة الرسمية والصياغة بما يناسب المخاطَب: تقرير موجز ومباشر للمشرف، وتعليمة واضحة وداعمة (لا متعالية ولا مفرطة التحوّط) لزميل مبتدئ.",
          en: "Measured by whether the register and framing shift appropriately for the recipient: a concise, direct report for a supervisor, and a clear, supportive instruction (neither condescending nor over-hedged) for a junior colleague.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "نبرة غير مناسبة للمخاطَب بشكل واضح: تحديث للمشرفة الأستاذة هالة يُكتب بلغة عابرة تفتقر إلى أي سياق أو خلاصة، أو تعليمة للمتدرّبة لينا تصاغ بأسلوب متعالٍ («كان يفترض أن تعرفي هذا أصلاً»).",
            en: "The tone is clearly mismatched to the recipient: an update to the supervising partner is written in a casual style with no context or bottom line, or an instruction to a junior colleague is phrased condescendingly (\"you should already know this\").",
          },
          {
            ar: "النبرة مقبولة عموماً، لكن انزلاقة واحدة واضحة تخالف المتوقّع من المخاطَب (تحوّط مفرط واعتذار متكرّر في تعليمة موجَّهة لمتدرّبة، ما يُضعف وضوح السلطة المطلوبة للتنفيذ).",
            en: "The tone is broadly acceptable, but one clear slip breaks what the recipient would expect (excessive hedging and repeated apology in an instruction to a trainee, which weakens the authority needed for it to be carried out).",
          },
          {
            ar: "النبرة مناسبة للمخاطَب في معظم النص، مع هفوة بسيطة واحدة لا تغيّر المعنى (جملة ختامية أكثر رسمية من اللازم في رسالة لزميل مقرّب).",
            en: "The tone fits the recipient through most of the text, with one minor slip that does not change the meaning (a closing line more formal than necessary in a message to a close colleague).",
          },
          {
            ar: "النبرة مضبوطة تماماً بحسب المخاطَب: التحديث الموجّه للأستاذة هالة موجز ويفتتح بالخلاصة والقرار المطلوب منها، والتعليمة الموجّهة للينا واضحة وداعمة معاً، دون تعالٍ ودون تحوّط مفرط.",
            en: "The tone is fully calibrated to the recipient: the update to the supervising partner is concise and opens with the bottom line and the decision needed from her, and the instruction to the junior colleague is clear and supportive at once, neither condescending nor over-hedged.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.actionability",
        name: { ar: "قابلية التنفيذ الفورية", en: "Immediate actionability" },
        description: {
          ar: "يُقاس بما إذا عرف القارئ، بعد قراءة واحدة، الخطوة التالية بالضبط، وموعدها، وما الذي يُعتبر إنجازاً ناجحاً لها، دون الحاجة لطرح سؤال توضيحي.",
          en: "Measured by whether the reader, after one read, knows the exact next step, its deadline, and what counts as it being done correctly, without needing to ask a follow-up question.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "لا خطوة تالية واضحة في أي موضع؛ يحتاج القارئ لسؤال إضافي ليعرف ماذا يفعل بالضبط أو متى.",
            en: "No clear next step appears anywhere; the reader would need to ask an additional question to know exactly what to do or by when.",
          },
          {
            ar: "خطوة تالية مذكورة، لكن الموعد أو تعريف الإنجاز الناجح غائبان كلاهما.",
            en: "A next step is named, but both the deadline and the definition of successful completion are missing.",
          },
          {
            ar: "خطوة تالية مذكورة مع أحد العنصرين (الموعد أو تعريف الإنجاز الناجح)، لكن ليس كليهما معاً.",
            en: "A next step is named along with one of the two elements (deadline or definition of successful completion), but not both together.",
          },
          {
            ar: "الخطوة التالية، وموعدها الدقيق، وتعريف واضح لما يُعتبر إنجازاً ناجحاً لها، مذكورة جميعها (مثلاً: «أرسلي لي المسوّدة بحلول ظهر الخميس، على أن تتضمّن الفقرات الثلاث المتعلّقة بشرط الفسخ فقط»).",
            en: "The next step, its precise deadline, and a clear definition of what successful completion looks like are all present (e.g. \"send me the draft by noon Thursday, covering only the three paragraphs on the termination clause\").",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.ownership-directness",
        name: { ar: "تحمّل المسؤولية والمباشرة", en: "Ownership and directness" },
        description: {
          ar: "يُقاس بما إذا صاغ الكاتب دوره أو قراره بصيغة مباشرة يتحمّل مسؤوليتها، بدل التحوّط أو استخدام صيغ مبنية للمجهول لإخفاء من فعل ماذا، أو إلقاء اللوم على الآخرين.",
          en: "Measured by whether the writer states their own role or decision plainly and owns it, rather than hedging or using passive constructions to obscure who did what, or shifting blame onto others.",
        },
        weight: 0.15,
        descriptors: [
          {
            ar: "لوم صريح لطرف آخر أو صيغة مبنية للمجهول تُخفي مسؤولية الكاتب نفسه («حصل تأخير في التسليم» بدل «تأخرتُ في التسليم»، أو «الفريق لم يُنسّق جيداً» عند وصف قرار اتّخذه الكاتب بنفسه).",
            en: "Explicit blaming of another party, or passive constructions that hide the writer's own responsibility (\"there was a delay in delivery\" instead of \"I was late delivering\", or \"the team didn't coordinate well\" when describing a decision the writer made alone).",
          },
          {
            ar: "لا لوم صريح، لكن التحوّط أو الصيغ غير المباشرة تتكرّر طوال النص بما يجعل من الصعب تحديد من قرّر أو من فعل ماذا.",
            en: "No explicit blame, but hedging or indirect phrasing recurs throughout the text, making it hard to identify who decided what or who did what.",
          },
          {
            ar: "النص مباشر وواضح في معظمه بشأن دور الكاتب، لكن جملة واحدة تتراجع إلى صيغة مبهمة أو تُحمّل جزءاً من المسؤولية لظرف خارجي دون داعٍ.",
            en: "The text is direct and clear about the writer's own role for most of its length, but one sentence slips into vague phrasing or attributes part of the responsibility to an external circumstance without cause.",
          },
          {
            ar: "الكاتب يتحدّث بصيغة المتكلّم عن قراره أو دوره طوال النص («قرّرتُ»، «سأتولّى»، «فاتني») دون أي لوم لطرف آخر أو صيغة مبنية للمجهول تُخفي المسؤولية.",
            en: "The writer speaks in the first person about their own decision or role throughout (\"I decided\", \"I will handle\", \"I missed\"), with no blaming of another party and no passive construction that hides responsibility.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.essential-completeness",
        name: { ar: "اكتمال المعلومات الأساسية", en: "Completeness of essential information" },
        description: {
          ar: "يُقاس بحسب نوع الرسالة: في التفويض — الموعد ومعيار الإنجاز ونطاق الصلاحية؛ في الملاحظة — مثال محدّد وأثره؛ في التحديث للمشرف — الوضع الفعلي والمخاطر وما هو مطلوب من المشرف.",
          en: "Measured according to the message type: for delegation — the deadline, the success criteria and the scope of authority; for feedback — a specific example and its impact; for a supervisor update — the actual status, the risk, and what is needed from the supervisor.",
        },
        weight: 0.15,
        descriptors: [
          {
            ar: "لا يتضمّن النص أياً من العناصر الأساسية المطلوبة لنوعه (تفويض دون موعد أو معيار إنجاز؛ ملاحظة دون مثال محدّد؛ تحديث للمشرف يخلو من ذكر أي مخاطرة فعلية).",
            en: "The text contains none of the essential elements required for its type (delegation with no deadline or success criteria; feedback with no specific example; a supervisor update that mentions no actual risk at all).",
          },
          {
            ar: "عنصر واحد فقط من العناصر الأساسية حاضر، وبقية العناصر غائبة.",
            en: "Only one of the essential elements is present, and the rest are missing.",
          },
          {
            ar: "معظم العناصر الأساسية حاضرة، لكن عنصراً واحداً يبقى غائباً (تحديث للمشرف يذكر الوضع والمخاطرة لكن دون تحديد ما هو مطلوب من المشرف بالضبط).",
            en: "Most of the essential elements are present, but one remains missing (a supervisor update that states the status and the risk but does not specify exactly what is needed from the supervisor).",
          },
          {
            ar: "جميع العناصر الأساسية حاضرة بحسب نوع الرسالة (تفويض بموعد ومعيار إنجاز ونطاق صلاحية كامل؛ أو ملاحظة بمثال محدّد وأثره على العمل أو الموكّل؛ أو تحديث يذكر الوضع الفعلي والمخاطرة وما هو مطلوب من المشرف بوضوح).",
            en: "All the essential elements are present for the message type (delegation with a deadline, success criteria and a defined scope of authority; or feedback with a specific example and its effect on the work or client; or an update stating the actual status, the risk, and clearly what is needed from the supervisor).",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.written-no-deadline-criteria",
        label: {
          ar: "تفويض مهمّة دون تحديد أي موعد أو معيار لإنجازها الناجح، بحيث يُترك المتلقّي دون أي مقياس يعرف به متى ينتهي العمل وكيف يبدو الإنجاز الصحيح.",
          en: "Delegating a task with no deadline and no success criteria stated, leaving the recipient with no way to know when the work is finished or what correct completion looks like.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.written-attacks-person",
        label: {
          ar: "ملاحظة تهاجم شخصية الزميل أو صفاته الذاتية («أنت مهمل» أو «لا تهتمّ بعملك») بدل التركيز على سلوك أو مخرج محدّد يمكن تعديله.",
          en: "Feedback that attacks the colleague's character or personal traits (\"you're careless\" or \"you don't take your work seriously\") rather than focusing on a specific behaviour or output that can be corrected.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.written-hides-problem",
        label: {
          ar: "تحديث للمشرف يُخفي مشكلة فعلية قائمة أو يُصوّرها أهون مما هي عليه (مهلة فائتة، خطأ في مذكّرة مقدَّمة، معلومة ناقصة لدى الموكّل)، بحيث لا يستطيع المشرف اتّخاذ قرار سليم بناءً عليه.",
          en: "A supervisor update that hides an actual existing problem or portrays it as smaller than it is (a missed deadline, an error in a filed memorandum, information the client is missing), such that the supervisor cannot make a sound decision based on it.",
        },
        capsScoreAt: 0,
      },
    ],
    passThreshold: 2,
  },

  // -------------------------------------------------------------------------
  // 2. Leadership conversation simulation performance
  // -------------------------------------------------------------------------
  {
    id: "rubric.leadership-conversation-sim.v1",
    name: {
      ar: "جودة أداء محادثة القيادة في المحاكاة (خلاف مع مشرف، تأثير على زميل)",
      en: "Quality of a leadership conversation in simulation (disagreement with a supervisor, influencing a peer)",
    },
    version: "1.0.0",
    skillIds: ["skill.managing-up", "skill.leading-without-authority", "skill.teamwork"],
    criteria: [
      {
        id: "cr.stakes-reasoning-clarity",
        name: {
          ar: "وضوح المخاطر والتعليل بدل مجرّد التمسّك بالموقف",
          en: "Clarity of stakes and reasoning, not just asserting a position",
        },
        description: {
          ar: "يُقاس بما إذا شرح المتدرّب لماذا يهمّ موقفه (خطر على الموكّل، مهلة قضائية، مسؤولية مهنية) بدل تكرار ما يريده فقط دون تعليل.",
          en: "Measured by whether the learner explains why their position matters (client risk, a court deadline, professional responsibility) rather than only repeating what they want with no reasoning behind it.",
        },
        weight: 0.3,
        descriptors: [
          {
            ar: "يكتفي المتدرّب بتكرار موقفه («لا أعتقد أنه ينبغي تقديم المذكّرة الآن») دون ذكر أي سبب أو مخاطرة محدّدة في أي موضع من الحوار.",
            en: "The learner only repeats their position (\"I don't think we should file the brief now\") without stating any reason or concrete stake anywhere in the conversation.",
          },
          {
            ar: "يذكر المتدرّب سبباً واحداً بصيغة عامة («قد لا يكون هذا الوقت الأنسب») دون ربطه بمخاطرة محدّدة على الموكّل أو الملف.",
            en: "The learner states one reason in general terms (\"this might not be the best timing\") without connecting it to a concrete risk to the client or the matter.",
          },
          {
            ar: "يربط المتدرّب موقفه بمخاطرة محدّدة (تقديم المذكّرة قبل التأكد من إفادة الموكّل قد يُدخل واقعة غير دقيقة في ملف قضية إنهاء الخدمة)، لكن دون توضيح كامل لسبب استبعاد البديل الذي يطرحه المشرف أو الزميل.",
            en: "The learner ties their position to a concrete risk (filing the brief before confirming the client's account could put an inaccurate fact into the employment-termination case file), but without fully explaining why the supervisor's or peer's proposed alternative should be ruled out.",
          },
          {
            ar: "يوضح المتدرّب المخاطرة المحدّدة والتعليل الكامل منذ وقت مبكّر في الحوار (مثلاً: «إذا قدّمنا المذكّرة اليوم دون تأكيد الموكّل، وتبيّن لاحقاً خطأ في الواقعة، نكون قد قدّمنا بياناً غير دقيق للمحكمة»)، ويربط ذلك صراحةً بسبب طرح موقفه.",
            en: "The learner explains the concrete risk and the full reasoning early in the conversation (e.g. \"if we file today without confirming with the client, and the fact turns out to be wrong, we'll have put an inaccurate statement before the court\"), explicitly connecting it to why their position is being raised.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.composure-nondefensive",
        name: {
          ar: "الاحتراف وعدم الدفاعية أو التمرّد تحت الضغط",
          en: "Professionalism and non-defensiveness under pushback",
        },
        description: {
          ar: "يُقاس بما إذا بقيت النبرة محترمة أمام معارضة المشرف أو مقاومة الزميل، مقابل الدفاعية أو التصعيد الشخصي أو المخالفة الصريحة لتوجيه المشرف.",
          en: "Measured by whether the tone stays respectful when the supervisor pushes back or the peer resists, versus becoming defensive, personal, or openly insubordinate toward the supervisor's direction.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "يردّ المتدرّب على المعارضة بتصعيد شخصي («أنت لا تفهم هذا الملف كما ينبغي») أو بمخالفة صريحة لتوجيه المشرف دون أي محاولة نقاش («سأفعل ما أراه صواباً بغضّ النظر»).",
            en: "The learner responds to pushback with a personal jab (\"you don't understand this file the way you should\") or with open insubordination toward the supervisor's direction, with no attempt to discuss it (\"I'll do what I think is right regardless\").",
          },
          {
            ar: "لا تصعيد شخصي ولا مخالفة صريحة، لكن المتدرّب يكرّر النبرة نفسها بصوت أكثر إلحاحاً دون معالجة اعتراض المشرف أو الزميل، بما يوحي بالعناد.",
            en: "No personal escalation and no open insubordination, but the learner repeats the same tone more insistently without addressing the supervisor's or peer's objection, reading as stubbornness.",
          },
          {
            ar: "يبقى المتدرّب محترماً ويردّ على المعارضة، لكن نبرته تبرد بشكل ملحوظ (ردود قصيرة ومقتضبة) بعد أول تحدٍّ مباشر.",
            en: "The learner stays respectful and responds to the pushback, but their tone cools noticeably (short, clipped replies) after the first direct challenge.",
          },
          {
            ar: "يحافظ المتدرّب على نبرة هادئة ومحترمة طوال الحوار، بما في ذلك عند تحدّيه مباشرة أو مخالفته أكثر من مرّة، دون أن يتحوّل ذلك إلى دفاعية أو تمرّد أو تصعيد شخصي.",
            en: "The learner maintains a calm, respectful tone throughout the conversation, including when directly challenged or contradicted more than once, without it turning into defensiveness, insubordination or a personal escalation.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.listening-adapting",
        name: {
          ar: "الإصغاء الفعلي والتكيّف مع ما يُطرَح",
          en: "Genuine listening and adapting",
        },
        description: {
          ar: "يُقاس بما إذا استجاب المتدرّب لما قاله الطرف الآخر فعلاً (تعديل الطلب، الإقرار بنقطة صحيحة، طرح سؤال توضيحي) بدل تكرار الحجّة نفسها بصرف النظر عمّا يُطرَح.",
          en: "Measured by whether the learner responds to what the other party actually said (adjusting the ask, acknowledging a valid point, asking a clarifying question) rather than repeating the same argument regardless of what is raised.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "يكرّر المتدرّب الحجّة نفسها بالصياغة نفسها تقريباً بعد أن يطرح المشرف أو الزميل نقطة أو اعتراضاً جديداً، دون أي تعديل يُلاحَظ.",
            en: "The learner repeats nearly the same argument in nearly the same wording after the supervisor or peer raises a new point or objection, with no observable adjustment.",
          },
          {
            ar: "يقرّ المتدرّب بأن الطرف الآخر تكلّم («أفهم وجهة نظرك») لكنه يعود إلى نقطته الأصلية دون أي تغيير فيها.",
            en: "The learner acknowledges that the other party spoke (\"I understand your point\") but returns to their original point unchanged.",
          },
          {
            ar: "يعدّل المتدرّب موقفه أو مقاربته مرّة واحدة استجابةً مباشرة لما طرحه المشرف أو الزميل، لكنه يعود بعدها إلى نهج ثابت لا يتغيّر رغم استمرار النقاش.",
            en: "The learner adjusts their position or approach once in direct response to what the supervisor or peer raised, but reverts afterward to a fixed approach even as the discussion continues.",
          },
          {
            ar: "يعدّل المتدرّب طلبه أو مقاربته أكثر من مرّة استجابةً لنقاط محدّدة طرحها المشرف أو الزميل، ويشير صراحةً إلى ما قاله الطرف الآخر عند إجراء كل تعديل (مثلاً: «بما أنك ذكرت أن الموكّل بحاجة للردّ اليوم، أقترح أن أنجز الجزء الأول فقط بحلول الظهر»).",
            en: "The learner adjusts their ask or approach more than once in response to specific points the supervisor or peer raised, explicitly referencing what the other party said each time an adjustment is made (e.g. \"since you mentioned the client needs a response today, let me propose finishing just the first part by noon\").",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.workable-resolution",
        name: {
          ar: "التوصّل إلى حلّ عملي أو خطوة تالية واضحة",
          en: "Reaching a workable resolution or clear next step",
        },
        description: {
          ar: "يُقاس بما إذا انتهى الحوار بإجراء متّفق عليه، بموعد ومسؤول عن تنفيذه، أو بمسار واضح لتصعيد الخلاف عند تعذّر حسمه، بدل أن ينتهي معلّقاً دون خلاصة.",
          en: "Measured by whether the conversation ends with an agreed action, a deadline and an owner, or an explicit path to escalate the disagreement when it cannot be resolved on the spot, rather than trailing off with no conclusion.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "ينتهي الحوار دون أي خلاصة أو خطوة تالية يذكرها أيّ من الطرفين.",
            en: "The conversation ends with no conclusion and no next step named by either party.",
          },
          {
            ar: "تُذكَر خطوة تالية بصيغة عامة غير محدّدة («سنرى لاحقاً» أو «سنتناقش مجدداً») دون تحديد موعد أو مسؤول.",
            en: "A next step is mentioned in vague general terms (\"we'll see later\" or \"we'll discuss it again\") with no date and no named owner.",
          },
          {
            ar: "تُذكَر خطوة تالية محدّدة مع أحد العنصرين (موعد أو مسؤول عن تنفيذها)، لكن ليس كليهما معاً.",
            en: "A specific next step is named with one of the two elements (a date or a named owner), but not both together.",
          },
          {
            ar: "ينتهي الحوار بإجراء محدّد، وموعد، ومسؤول واضح عن تنفيذه يُقرّ به الطرفان، أو — في حال بقاء خلاف جوهري — بمسار تصعيد محدّد بالاسم وبموعد (مثلاً: «سنعرض الأمر على الشريك المسؤول غداً صباحاً قبل الجلسة»).",
            en: "The conversation ends with a specific action, a date, and a clearly named owner that both parties acknowledge, or — where a genuine disagreement remains — an explicit escalation path named by person and date (e.g. \"we'll bring it to the supervising partner tomorrow morning before the hearing\").",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.sim-personal-conflict",
        label: {
          ar: "تحويل الخلاف المهني إلى صدام شخصي: اتهامات بالكفاءة أو النيّة، أو سخرية من الطرف الآخر، أو نبرة تصعيدية واضحة في النص.",
          en: "Turning a professional disagreement into a personal conflict: accusations about competence or intent, sarcasm toward the other party, or a clearly escalating tone in the transcript.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.sim-silent-cave",
        label: {
          ar: "التراجع الصامت عن تحفّظ جوهري كان يستحق أن يُطرَح (خطأ واقعي في مذكّرة، مخاطرة على الموكّل) دون ذكره في أي موضع من الحوار تجنّباً للمواجهة.",
          en: "Silently backing down from a genuine, material concern that deserved to be raised (a factual error in a memorandum, a risk to the client) without ever mentioning it in the conversation, purely to avoid confrontation.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.sim-unauthorized-commitment",
        label: {
          ar: "الالتزام نيابة عن طرف ثالث لا يملك المتدرّب صلاحية التعهّد باسمه (شريك آخر في المكتب، الموكّل، أو الفريق بأكمله) دون التحقّق من موافقته أولاً.",
          en: "Making a commitment on behalf of a third party the learner has no authority to speak for (another partner at the firm, the client, or the entire team) without first checking that they agree.",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },
];
