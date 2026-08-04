import type { RubricDef } from "../types";

/**
 * Assessment rubrics for the Firm & Matter Operations domain
 * (`dom.firm-operations`) of AIJUR Professional Skills Lab.
 *
 * This domain's highest-risk failure mode is not a bad checklist or a messy
 * memo — it is a learner who finds a real problem (an error in a colleague's
 * work, a gap in a matter about to change hands) and quietly avoids saying
 * so, in writing or out loud, to skip an uncomfortable moment. Every rubric
 * here treats concealing a genuine quality issue with the same severity that
 * other AIJUR domains reserve for promising a guaranteed legal outcome — see
 * `cm.written-buried-error` and `cm.sim-conceals-quality-issue` below. No
 * descriptor refers to attitude, confidence, personality or accent — only to
 * observable features of what was written or said.
 */
export const FIRM_OPERATIONS_RUBRICS: RubricDef[] = [
  // -------------------------------------------------------------------------
  // 1. Written firm-operations output — quality-control notes, billing
  //    narratives, handover memos
  // -------------------------------------------------------------------------
  {
    id: "rubric.firm-operations-written.v1",
    name: {
      ar: "جودة المخرجات المكتوبة في عمليات المكتب والملفات (ملاحظة ضبط جودة، مذكّرة أتعاب، مذكّرة تسليم)",
      en: "Quality of written firm-operations output (quality-control note, billing narrative, handover memo)",
    },
    version: "1.0.0",
    skillIds: [
      "skill.output-quality-control",
      "skill.time-and-billing-narratives",
      "skill.matter-handover",
      "skill.file-organisation",
    ],
    criteria: [
      {
        id: "cr.specificity-actionability",
        name: {
          ar: "التحديد والقابلية للتنفيذ الفوري",
          en: "Specificity and immediate actionability",
        },
        description: {
          ar: "يُقاس بما إذا سمّى النص الموضع أو الوثيقة أو الرقم أو المهلة المحددة بدل الاكتفاء بوصف عام، بحيث يستطيع القارئ التصرف بناءً على المكتوب دون طرح سؤال إضافي.",
          en: "Measured by whether the text names the specific location, document, figure or deadline rather than settling for a general description, so the reader can act on what is written without needing to ask a follow-up question.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "لا تحديد لأي موضع أو رقم أو مهلة في أي جزء من النص؛ ملاحظة الجودة تكتفي بعبارة («هناك مشكلة في المذكّرة») دون تسمية الفقرة أو البند، أو مذكّرة التسليم تكتفي بذكر اسم الملف دون أي تفصيل عن وضعه.",
            en: "No specific location, figure or deadline appears anywhere; the quality note says only \"there's a problem with the memo\" without naming the paragraph or clause, or the handover memo names only the file with no detail about its status.",
          },
          {
            ar: "يُسمَّى موضع المشكلة أو الملف المعني، لكن طبيعة الخطأ أو الحالة الفعلية تبقى غامضة (مثلاً: «الفقرة الثالثة فيها خطأ» دون بيان ما هو الخطأ بالضبط).",
            en: "The location of the problem or the matter concerned is named, but the nature of the error or the actual status stays vague (e.g. \"paragraph three has a mistake\" without saying what the mistake is).",
          },
          {
            ar: "معظم عناصر النص محدّدة، لكن عنصراً جوهرياً واحداً يبقى غائباً (تُذكَر الفقرة والخطأ في ملاحظة الجودة، لكن لا يُذكَر أثره المحتمل لو خرج العمل بهذا الشكل؛ أو تُذكَر المهلات في مذكّرة التسليم لكن دون تحديد أين تُحفظ المستندات الداعمة).",
            en: "Most elements of the text are specific, but one central element is missing (the paragraph and the error are named in the quality note, but its likely consequence if the work went out this way is not; or the deadlines are listed in the handover memo but where the supporting documents are kept is not stated).",
          },
          {
            ar: "كل عنصر محدّد بدقة: ملاحظة الجودة تسمّي الفقرة أو البند بالضبط، وتصف الخطأ بجملة واحدة واضحة، وتذكر أثره المحتمل؛ أو مذكّرة التسليم تسمّي كل مهلة قائمة وتاريخها، وموقع كل مستند، والخطوة التالية المطلوبة من الزميل، بحيث يستطيع التصرف من القراءة الأولى دون أي سؤال إضافي.",
            en: "Every element is precisely specific: the quality note names the exact paragraph or clause, describes the error in one clear sentence, and states its likely consequence; or the handover memo names every live deadline and its date, the location of every document, and the next step required from the colleague, so they can act on the first reading with no follow-up question needed.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.professional-tone",
        name: {
          ar: "النبرة المهنية البنّاءة",
          en: "Constructive professional tone",
        },
        description: {
          ar: "يُقاس بما إذا بقيت الصياغة واقعية وبنّاءة عند وصف خطأ أو نقص وجده الكاتب في عمل غيره، بدل نبرة لوم أو تهويل أو دفاعية.",
          en: "Measured by whether the wording stays factual and constructive when describing an error or gap the writer found in someone else's work, rather than a tone of blame, alarm or defensiveness.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "الصياغة تهاجم الزميل شخصياً («هذا إهمال واضح») أو تهوّل الموقف بلا داعٍ («الملف كارثة»)، أو — في حال كان الكاتب هو من ارتكب الخطأ — تتهرّب من ذكره بصيغة دفاعية تُحمّل المسؤولية لظرف خارجي.",
            en: "The wording attacks the colleague personally (\"this is obvious carelessness\") or overstates the situation needlessly (\"the file is a disaster\"), or — where the writer is the one who made the error — dodges naming it with a defensive line that shifts responsibility onto an outside circumstance.",
          },
          {
            ar: "لا هجوم شخصي صريح، لكن النبرة تميل إلى التقليل من شأن الخطأ («أمر بسيط لا يستحق الذكر») رغم أنه يستحق الانتباه، أو إلى صياغة مبالَغ فيها تُضعف وضوح المشكلة الفعلية.",
            en: "No explicit personal attack, but the tone leans toward minimising the error (\"nothing worth mentioning\") even though it deserves attention, or toward inflated language that obscures how the actual problem should be read.",
          },
          {
            ar: "النبرة واقعية وبنّاءة في معظم النص، مع جملة واحدة تنزلق إلى صيغة لوم أو تبرير لا حاجة لها.",
            en: "The tone is factual and constructive throughout most of the text, with one sentence that slips into unnecessary blame or self-justification.",
          },
          {
            ar: "النبرة واقعية وبنّاءة من أول النص إلى آخره: الخطأ يوصف بوصفه واقعة قابلة للتصحيح لا صفة شخصية، ولا لوم لأي طرف ولا تهوين من شأن ما يستحق الانتباه، ولا تبرير دفاعي حين يكون الكاتب نفسه مصدر الملاحظة.",
            en: "The tone is factual and constructive from the first line to the last: the error is described as a correctable fact, not a personal trait, with no blame of any party, no minimising of what deserves attention, and no defensive self-justification when the writer themself is the source of the note.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.accuracy-completeness",
        name: {
          ar: "الدقة واكتمال المعلومات الجوهرية",
          en: "Accuracy and completeness of the essential facts",
        },
        description: {
          ar: "يُقاس بمطابقة كل تاريخ واسم ومبلغ وحالة واردة في النص لما هو في الملف الفعلي، وبعدم إغفال أي عنصر جوهري يحتاجه القارئ.",
          en: "Measured by whether every date, name, amount and status stated in the text matches the actual file, and by whether any essential element the reader needs is omitted.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "تاريخ أو مبلغ أو اسم طرف وارد في النص لا يطابق الملف الفعلي، أو يُغفَل عنصر جوهري بالكامل (مذكّرة تسليم تخلو من ذكر أي مهلة قائمة رغم وجود مهلة قريبة فعلاً).",
            en: "A date, amount or party name in the text does not match the actual file, or an essential element is omitted entirely (a handover memo that mentions no live deadline at all, even though a near deadline actually exists).",
          },
          {
            ar: "لا خطأ صريح، لكن رقماً أو تاريخاً وارداً بصيغة غير مؤكّدة أو تقريبية دون بيان مصدره («تقريباً في الأسبوع المقبل») في موضع يحتاج القارئ فيه إلى معلومة دقيقة.",
            en: "No outright error, but a figure or date is stated in an unverified or approximate form with no source (\"sometime next week\") at a point where the reader needs a precise fact.",
          },
          {
            ar: "معظم العناصر الجوهرية حاضرة ودقيقة، لكن عنصراً واحداً يبقى غائباً (بيان الوضع الحالي والمهلات في مذكّرة التسليم، لكن دون ذكر ما الذي طلبه الموكّل تحديداً في آخر اتصال).",
            en: "Most essential elements are present and accurate, but one item is missing (the current status and deadlines are stated in the handover memo, but what the client specifically asked for in the last contact is not).",
          },
          {
            ar: "كل تاريخ ومبلغ واسم طرف وحالة واردة في النص مطابقة تماماً للملف، ولا عنصر جوهري مُغفَل: مذكّرة التسليم تغطي كل مهلة ومستند وطلب من الموكّل لم يُنجَز بعد، أو مذكّرة الأتعاب تسرد كل مهمة أُنجزت بدقة زمنية وموضوعية.",
            en: "Every date, amount, party name and status in the text matches the file exactly, and no essential element is omitted: the handover memo covers every deadline, document and unfinished client request, or the billing narrative lists every task performed with precise time and substance.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.appropriate-escalation",
        name: {
          ar: "تمييز ما يستدعي تنبيه الشريك المسؤول عمّا يمكن التصرف به مباشرة",
          en: "Distinguishing what needs a partner's attention from what can be handled directly",
        },
        description: {
          ar: "يُقاس بما إذا ميّز الكاتب بين خطأ أو نقص جوهري يستدعي تصعيداً صريحاً إلى الشريك المسؤول (مهلة فائتة، خطأ واقعي في مستند مقدَّم)، وبين مسألة روتينية يمكنه معالجتها بنفسه دون تصعيد غير ضروري.",
          en: "Measured by whether the writer distinguished a material error or gap that genuinely needs explicit escalation to the supervising partner (a missed deadline, a factual error in a filed document) from a routine matter they can handle themselves without unnecessary escalation.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "لا إشارة إلى ضرورة تصعيد أي مسألة، رغم وجود خطأ جوهري في النص يستدعي تنبيه الشريك المسؤول فوراً؛ أو على العكس، يُصعَّد كل تفصيل مهما كان بسيطاً بحيث يضيع الجوهري وسط التفاصيل الروتينية.",
            en: "No indication that anything needs escalating, even though the text contains a material error that genuinely requires alerting the supervising partner immediately; or conversely, every detail is escalated regardless of size, so the material issue is lost among routine ones.",
          },
          {
            ar: "يُشار إلى ضرورة إبلاغ الشريك المسؤول، لكن دون تمييز واضح بين ما يستدعي ذلك فعلاً وما هو تفصيل روتيني يمكن حسمه دون تصعيد.",
            en: "The need to inform the supervising partner is mentioned, but with no clear line between what genuinely requires it and what is a routine detail that could be resolved without escalation.",
          },
          {
            ar: "التمييز بين ما يستدعي التصعيد وما لا يستدعيه صحيح في معظم النص، لكن مسألة واحدة مصنّفة بشكل غير دقيق (خطأ جوهري يُعامَل كتفصيل روتيني، أو العكس).",
            en: "The distinction between what needs escalation and what does not is correct through most of the text, but one item is miscategorised (a material error treated as routine, or the reverse).",
          },
          {
            ar: "التمييز دقيق وصريح في كل موضع: كل خطأ أو نقص يمسّ الموكّل أو المهلة أو المسؤولية المهنية يُسمّى بوضوح كأمر يستدعي تنبيه الشريك المسؤول فوراً، وكل مسألة روتينية (خطأ إملائي، تنسيق) تُعالَج مباشرة دون تصعيد غير ضروري.",
            en: "The distinction is precise and explicit everywhere: every error or gap that touches the client, a deadline or professional responsibility is named clearly as something requiring immediate attention from the supervising partner, and every routine matter (a typo, formatting) is handled directly with no unnecessary escalation.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.audience-fit",
        name: {
          ar: "ملاءمة الشكل والتفصيل للقارئ المقصود",
          en: "Format and level of detail matched to the intended reader",
        },
        description: {
          ar: "يُقاس بما إذا اختلف مستوى التفصيل والشكل بحسب القارئ: مذكّرة تسليم موجّهة لزميل تحتاج تفاصيل تشغيلية كاملة، مقابل مذكّرة أتعاب موجّهة لموكّل تحتاج لغة يفهمها غير القانوني، مقابل ملاحظة جودة موجّهة للشريك المسؤول تحتاج إيجازاً وتركيزاً على القرار المطلوب.",
          en: "Measured by whether the level of detail and format shift with the reader: a handover memo for a colleague needs full operational detail, a billing narrative for a client needs language a non-lawyer follows, and a quality note for the supervising partner needs brevity focused on the decision required.",
        },
        weight: 0.1,
        descriptors: [
          {
            ar: "الشكل والتفصيل لا يناسبان القارئ إطلاقاً: مذكّرة أتعاب موجّهة للموكّل مكتوبة بمصطلحات إجرائية داخلية دون شرح، أو مذكّرة تسليم للزميل مختصرة لدرجة تفتقر لأي تفصيل تشغيلي.",
            en: "The format and detail do not suit the reader at all: a billing narrative for the client is written in internal procedural jargon with no explanation, or a handover memo for the colleague is so brief it lacks any operational detail.",
          },
          {
            ar: "مستوى التفصيل مناسب في أغلب النص، لكن جزءاً واحداً يخالف ما يحتاجه القارئ (فقرة كاملة من مذكّرة الأتعاب موجّهة للموكّل تعيد نص الالتزام التعاقدي دون تبسيط).",
            en: "The level of detail fits for most of the text, but one part goes against what the reader needs (a full paragraph of the client-facing billing narrative reproducing contractual language verbatim with no simplification).",
          },
          {
            ar: "الشكل والتفصيل مناسبان للقارئ في معظم النص، مع هفوة بسيطة واحدة لا تغيّر الفهم (مصطلح واحد غير مُفسَّر في مذكّرة أتعاب موجّهة لموكّل).",
            en: "The format and detail suit the reader through most of the text, with one minor slip that does not affect understanding (one unexplained term in a client-facing billing narrative).",
          },
          {
            ar: "الشكل والتفصيل مضبوطان تماماً بحسب القارئ والغرض: مذكّرة التسليم تفصيلية وتشغيلية كاملة الأركان لتقرأها زميلة تتولى الملف، ومذكّرة الأتعاب مكتوبة بلغة يفهمها الموكّل غير القانوني وتربط كل بند بعمل فعلي، وملاحظة الجودة للشريك المسؤول موجزة ومركّزة على القرار المطلوب منه بالتحديد.",
            en: "The format and detail are fully calibrated to the reader and purpose: the handover memo is fully detailed and operational for a colleague taking over the matter, the billing narrative is written in language the non-lawyer client can follow and ties every line item to actual work, and the quality note to the supervising partner is brief and focused precisely on the decision needed from them.",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.written-buried-error",
        label: {
          ar: "التقليل من شأن خطأ فعلي أو التستّر عليه في ملاحظة جودة أو مذكّرة تسليم بدل تسميته بوضوح — مثل وصف مهلة فائتة بأنها «تفصيل بسيط» أو حذف ذكر خطأ واقعي وُجد في مستند مقدَّم.",
          en: "Minimising or glossing over a real error in a quality note or a handover memo instead of naming it clearly — such as describing a missed deadline as \"a minor detail\", or leaving out mention of a factual error found in a filed document.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.written-unusable-handover",
        label: {
          ar: "مذكّرة تسليم غامضة لدرجة يتعذّر معها على الزميل الذي يتسلّم الملف التصرف بناءً عليها دون التواصل مجدداً مع المحامي الأصلي أو الموكّل لمعرفة معلومات أساسية.",
          en: "A handover memo so vague that the colleague taking over the matter cannot act on it without contacting the original lawyer or the client again for basic information.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.written-vague-billing-narrative",
        label: {
          ar: "مذكّرة أتعاب مصاغة بعبارات عامة («خدمات قانونية»، «متابعة الملف») لا تسمح للموكّل أو أي مراجع بمعرفة العمل الفعلي المنجز أو تبرير الوقت المحتسب.",
          en: "A billing narrative written in generic phrases (\"legal services\", \"attention to file\") that lets neither the client nor any reviewer tell what work was actually done or justify the time billed.",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },

  // -------------------------------------------------------------------------
  // 2. Firm-operations conversation simulation performance — flagging a
  //    quality issue to a supervising lawyer, handing over a matter live
  // -------------------------------------------------------------------------
  {
    id: "rubric.firm-operations-sim.v1",
    name: {
      ar: "أداء محادثة عمليات المكتب في المحاكاة (الإبلاغ عن مشكلة جودة، تسليم ملف)",
      en: "Performance in a firm-operations conversation simulation (flagging a quality issue, handing over a matter)",
    },
    version: "1.0.0",
    skillIds: [
      "skill.output-quality-control",
      "skill.matter-handover",
      "skill.managing-up",
    ],
    criteria: [
      {
        id: "cr.clear-issue-disclosure",
        name: {
          ar: "وضوح الإبلاغ عن المشكلة الفعلية",
          en: "Clarity in disclosing the actual problem",
        },
        description: {
          ar: "يُقاس بما إذا سمّى المتدرّب الخطأ أو الخطر الفعلي بجملة صريحة ومبكرة في الحوار، بدل التلميح أو الدوران حول الموضوع.",
          en: "Measured by whether the learner names the actual error or risk in an explicit, early sentence in the conversation, rather than hinting at it or talking around it.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "لا يذكر المتدرّب المشكلة الفعلية بوضوح في أي موضع من الحوار؛ يكتفي بعبارات عامة («هناك أمر أحببت مراجعته معك») دون تسمية الخطأ أو موقعه.",
            en: "The learner never states the actual problem clearly anywhere in the conversation; they settle for general phrases (\"there's something I wanted to go over with you\") without naming the error or where it is.",
          },
          {
            ar: "يذكر المتدرّب موضوع الملف أو المستند المعني، لكن طبيعة الخطأ نفسه تبقى غامضة حتى بعد سؤال الشريك المسؤول عنه مباشرة.",
            en: "The learner names the matter or the document concerned, but the nature of the error itself stays vague even after the supervising lawyer asks about it directly.",
          },
          {
            ar: "يذكر المتدرّب الخطأ بوضوح في النهاية، لكن بعد عدة أدوار حوارية من المراوغة، أو فقط بعد أن يسأله الشريك المسؤول صراحةً عمّا يريد قوله.",
            en: "The learner eventually states the error clearly, but only after several conversational turns of hedging, or only once the supervising lawyer directly asks what they want to say.",
          },
          {
            ar: "يسمّي المتدرّب الخطأ أو الخطر الفعلي بجملة واضحة ومحددة في وقت مبكّر من الحوار ودون أن يُسأل عنه («في مراجعتي للمذكّرة، وجدت أن تاريخ التبليغ المذكور في الفقرة الثانية لا يطابق ما في المستندات؛ هذا يستدعي التصحيح قبل التقديم»).",
            en: "The learner names the actual error or risk in a clear, specific sentence early in the conversation, without being asked (\"reviewing the memo, I found that the notice date in paragraph two doesn't match the documents; this needs correcting before filing\").",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.non-accusatory-tone",
        name: {
          ar: "نبرة غير اتهامية عند الإبلاغ، وشفافية دون تحميل اللوم عند التسليم",
          en: "Non-accusatory tone when flagging an issue, and transparency without blame when handing over",
        },
        description: {
          ar: "يُقاس بما إذا وصف المتدرّب الخطأ أو حالة الملف بوصفها وقائع قابلة للمعالجة، لا صفة شخصية للزميل صاحب العمل الأصلي أو للمحامي الذي سبقه في الملف.",
          en: "Measured by whether the learner describes the error or the state of the file as facts to be dealt with, not as a personal trait of the colleague who did the original work or the lawyer who held the matter before.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "يصف المتدرّب الخطأ بعبارات تهاجم الزميل شخصياً («لم ينتبه كعادته») أو يحمّله اللوم أمام الشريك المسؤول بدل التركيز على الوقائع، أو يهاجم — عند التسليم — طريقة عمل المحامي السابق في الملف.",
            en: "The learner describes the error with language that personally attacks the colleague (\"as usual, he wasn't paying attention\") or lays blame on them in front of the supervising lawyer instead of focusing on the facts, or — during a handover — criticises the previous lawyer's way of working the matter.",
          },
          {
            ar: "لا لوم صريح، لكن الصياغة تحمل تلميحاً متكرراً إلى تقصير الزميل أو المحامي السابق، أو نبرة دفاعية غير مبرَّرة عند وصف حالة الملف.",
            en: "No explicit blame, but the phrasing carries repeated implicit digs at the colleague's or previous lawyer's shortcomings, or an unwarranted defensive tone when describing the state of the matter.",
          },
          {
            ar: "النبرة واقعية وخالية من اللوم في معظم الحوار، مع جملة واحدة تنزلق إلى تعليق شخصي أو دفاعي لا حاجة له.",
            en: "The tone is factual and free of blame through most of the conversation, with one sentence that slips into an unnecessary personal or defensive comment.",
          },
          {
            ar: "النبرة واقعية وخالية من اللوم طوال الحوار: الخطأ يُعرَض كواقعة قابلة للتصحيح، وحالة الملف — بما فيها ما لم يُنجَز بعد — تُعرَض بشفافية كاملة دون تجميل ودون تحميل المسؤولية لأي طرف بعينه.",
            en: "The tone is factual and free of blame throughout: the error is presented as a correctable fact, and the state of the matter — including what remains undone — is presented with full transparency, with no polishing over gaps and no assigning responsibility to any particular person.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.information-completeness-transfer",
        name: {
          ar: "اكتمال المعلومات المنقولة",
          en: "Completeness of the information transferred",
        },
        description: {
          ar: "يُقاس، بحسب المحادثة، باكتمال ما يحتاجه الشريك المسؤول ليقرر (ماذا وُجد، لماذا يهم، ماذا يقترح المتدرّب)، أو ما يحتاجه الزميل المتسلّم (المهلات، الوقائع، توقعات الموكّل، ما تبقى منجزاً).",
          en: "Measured, depending on the conversation, by the completeness of what the supervising lawyer needs to decide (what was found, why it matters, what the learner proposes), or what the receiving colleague needs (deadlines, facts, client expectations, what remains outstanding).",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "معظم المعلومات الأساسية غائبة عن الحوار: لا يُذكر أثر الخطأ ولا اقتراح لمعالجته، أو ينتهي التسليم دون ذكر أي مهلة قائمة أو توقع للموكّل.",
            en: "Most of the essential information is missing from the conversation: neither the effect of the error nor any suggested fix is mentioned, or the handover ends with no live deadline or client expectation stated at all.",
          },
          {
            ar: "عنصر واحد فقط من العناصر الأساسية حاضر (يُذكر الخطأ لكن لا أثره؛ أو تُذكر مهلة واحدة دون بقية عناصر الملف).",
            en: "Only one essential element is present (the error is named but not its effect; or one deadline is mentioned with none of the matter's other elements).",
          },
          {
            ar: "معظم العناصر الأساسية حاضرة، لكن عنصراً واحداً يبقى غائباً (تُنقَل المهلات والوقائع في التسليم لكن دون ذكر ما الذي يتوقعه الموكّل من الخطوة التالية).",
            en: "Most essential elements are present, but one remains missing (deadlines and facts are transferred in the handover, but what the client expects from the next step is not mentioned).",
          },
          {
            ar: "كل العناصر الأساسية حاضرة: في الإبلاغ عن المشكلة — ما وُجد، وأثره المحتمل، ومقترح لمعالجته؛ في التسليم — كل مهلة قائمة وتاريخها، والوقائع الجوهرية، وما يتوقعه الموكّل، وما أُنجز وما تبقى، وموقع كل مستند.",
            en: "All essential elements are present: in flagging a problem — what was found, its likely effect, and a suggested fix; in a handover — every live deadline and its date, the essential facts, what the client expects, what has been done and what remains, and the location of every document.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.composure-under-pressure",
        name: {
          ar: "الاتزان المهني عند المفاجأة أو الانزعاج",
          en: "Professional composure when met with surprise or displeasure",
        },
        description: {
          ar: "يُقاس بما يفعله المتدرّب حين يبدي الشريك المسؤول انزعاجاً أو مفاجأة من الخطأ، أو حين يبدو الزميل المتسلّم مرهقاً أو مقاوماً لتحمّل ملف إضافي.",
          en: "Measured by what the learner does when the supervising lawyer shows displeasure or surprise at the error, or when the receiving colleague seems overwhelmed or resistant to taking on another matter.",
        },
        weight: 0.15,
        descriptors: [
          {
            ar: "يرتبك المتدرّب أو يتراجع عن ذكر تفاصيل الخطأ عند أول انزعاج من الشريك المسؤول، أو يتخلى عن تسليم معلومات جوهرية لأن الزميل بدا غير مرحّب بها.",
            en: "The learner becomes flustered or backs off from stating the details of the error at the first sign of the supervising lawyer's displeasure, or abandons handing over essential information because the colleague seemed unwelcoming to it.",
          },
          {
            ar: "يستمر المتدرّب في الحوار، لكن نبرته تتغيّر بشكل ملحوظ (اعتذار متكرر غير مبرَّر، أو ردود مقتضبة) بعد أول تعبير عن الانزعاج أو المقاومة.",
            en: "The learner continues the conversation, but their tone visibly shifts (repeated unwarranted apology, or clipped replies) after the first sign of displeasure or resistance.",
          },
          {
            ar: "يحافظ المتدرّب على اتزانه في معظم الحوار، مع لحظة واحدة يبدو فيها متردداً أو يتراجع جزئياً عن نقطة كان قد ذكرها بوضوح.",
            en: "The learner stays composed through most of the conversation, with one moment where they seem to hesitate or partially retreat from a point they had already stated clearly.",
          },
          {
            ar: "يحافظ المتدرّب على نبرة هادئة ومهنية طوال الحوار، ولا يتراجع عن أي معلومة جوهرية ذكرها رغم انزعاج الشريك المسؤول أو تردد الزميل، بل يستمر في نقل الوقائع والمعلومات كما هي.",
            en: "The learner maintains a calm, professional tone throughout, and does not retreat from any essential piece of information already stated despite the supervising lawyer's displeasure or the colleague's hesitation, continuing instead to convey the facts as they are.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.actionable-outcome",
        name: {
          ar: "الخروج بخطوة تالية محددة ومملوكة",
          en: "Ending with a specific, owned next step",
        },
        description: {
          ar: "يُقاس بما إذا انتهى الحوار بإجراء متفق عليه، ومسؤول عن تنفيذه، وموعد له — بدل أن ينتهي بمجرد الإقرار بالمشكلة أو بتسليم عام دون تحديد من يفعل ماذا.",
          en: "Measured by whether the conversation ends with an agreed action, a named owner and a deadline — rather than ending with the problem merely acknowledged, or a general handover with no clarity on who does what.",
        },
        weight: 0.15,
        descriptors: [
          {
            ar: "ينتهي الحوار دون أي خطوة تالية أو اتفاق يذكره أي من الطرفين.",
            en: "The conversation ends with no next step or agreement named by either party.",
          },
          {
            ar: "تُذكَر خطوة تالية بصيغة عامة («سنرى كيف نعالج الأمر») دون تحديد من سينفّذها ومتى.",
            en: "A next step is mentioned in vague terms (\"we'll figure out how to handle it\") with no named owner and no date.",
          },
          {
            ar: "تُذكَر خطوة تالية محددة مع أحد العنصرين (المسؤول أو الموعد)، لكن ليس كليهما معاً.",
            en: "A specific next step is named with one of the two elements (the owner or the date), but not both together.",
          },
          {
            ar: "ينتهي الحوار بإجراء محدد، ومسؤول واضح عن تنفيذه، وموعد له، يُقرّ به الطرفان صراحة (مثلاً: «سأصحح تاريخ التبليغ اليوم وأرسل لك النسخة المعدّلة قبل الثالثة»، أو: «سأتولى متابعة الجلسة القادمة بحلول الاثنين وسأراجع المستندات المحفوظة في المجلد المشترك»).",
            en: "The conversation ends with a specific action, a clearly named owner and a date, explicitly acknowledged by both parties (e.g. \"I'll correct the notice date today and send you the revised copy before three\", or \"I'll take over preparing for the next hearing by Monday and will review the documents saved in the shared folder\").",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.sim-conceals-quality-issue",
        label: {
          ar: "عدم الإفصاح عن الخطأ أو الخطر الفعلي إطلاقاً خلال المحادثة مع الشريك المسؤول — التحدث حول الموضوع أو تخفيفه لدرجة اختفائه تجنباً لموقف محرج، بحيث يخرج الشريك من الحوار دون أن يعرف أن هناك مشكلة فعلية.",
          en: "Never disclosing the actual error or risk during the conversation with the supervising lawyer — talking around it or softening it out of existence to avoid an awkward moment, so the lawyer leaves the conversation with no idea a real problem exists.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.sim-handover-critical-gap",
        label: {
          ar: "إنهاء محادثة تسليم الملف دون ذكر مهلة قائمة وعاجلة أو إجراء حاسم يحتاج الزميل المتسلّم إلى معرفته فوراً، بحيث يبقى غافلاً عنه بعد انتهاء الحوار.",
          en: "Ending a matter-handover conversation without mentioning a live, urgent deadline or a critical pending action the receiving colleague needs to know immediately, leaving them unaware of it once the conversation ends.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.sim-blames-colleague",
        label: {
          ar: "تحويل محادثة الإبلاغ عن مشكلة جودة إلى هجوم شخصي على كفاءة الزميل صاحب العمل الأصلي أو المحامي السابق في الملف، بدل التركيز على الخطأ المحدد ومعالجته.",
          en: "Turning a quality-flagging conversation into a personal attack on the competence of the colleague who did the original work or the lawyer who previously held the matter, instead of focusing on the specific error and its fix.",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },
];
