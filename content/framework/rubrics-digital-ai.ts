import type { RubricDef } from "../types";

/**
 * Assessment rubrics for the Digital Tools & AI domain (`dom.digital-ai`) of
 * AIJUR Professional Skills Lab.
 *
 * This domain's highest-risk failure mode is specific to AI and tool use:
 * a learner who treats AI-generated output as verified truth without
 * checking it, who notices something wrong and stays silent or blames the
 * tool instead of disclosing it, or who pastes confidential client
 * information into an unapproved tool. Every rubric here treats each of
 * these with the same severity that other AIJUR domains reserve for
 * guaranteeing a legal outcome — see `cm.written-unverified-as-fact`,
 * `cm.written-confidential-exposure`, `cm.sim-conceals-ai-error` and
 * `cm.sim-agrees-to-paste-confidential-data` below. No descriptor refers to
 * attitude, confidence, personality or accent — only to observable features
 * of what was written or said.
 */
export const DIGITAL_AI_RUBRICS: RubricDef[] = [
  // -------------------------------------------------------------------------
  // 1. Written firm-output involving digital tools/AI — verification notes,
  //    error-disclosure memos, short explanations of why a tool wasn't used
  // -------------------------------------------------------------------------
  {
    id: "rubric.digital-ai-written.v1",
    name: {
      ar: "جودة المخرجات المكتوبة المتعلقة بالأدوات الرقمية والذكاء الاصطناعي (مذكّرة تحقّق، مذكّرة إفصاح عن خطأ، تبرير عدم استخدام أداة)",
      en: "Quality of written output involving digital tools and AI (a verification note, an error-disclosure memo, an explanation of why a tool wasn't used)",
    },
    version: "1.0.0",
    skillIds: [
      "skill.ai-output-verification",
      "skill.disclosing-ai-errors",
      "skill.protecting-data-in-digital-tools",
    ],
    criteria: [
      {
        id: "cr.specificity-of-verification",
        name: {
          ar: "التحديد الدقيق لما جرى التحقّق منه وما وُجد",
          en: "Specificity of what was checked and what was found",
        },
        description: {
          ar: "يُقاس بما إذا سمّى النص المرجع أو الرقم أو البند تحديداً الذي جرى فحصه، والنتيجة الفعلية لهذا الفحص، بدل الاكتفاء بعبارة عامة تفيد أن «مراجعة» جرت.",
          en: "Measured by whether the text names the specific citation, figure or clause that was checked, and the actual outcome of that check, rather than settling for a general statement that \"a review\" took place.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "لا تسمية لأي مرجع أو رقم أو بند محدد في أي موضع من النص؛ المذكّرة تكتفي بعبارة («راجعت مسودة الأداة ووجدت ملاحظات») دون بيان أي عنصر بعينه أو نتيجة فحصه.",
            en: "No specific citation, figure or clause is named anywhere; the note says only \"I reviewed the tool's draft and had some notes\" without stating any specific item or the result of checking it.",
          },
          {
            ar: "يُسمَّى العنصر الذي جرى فحصه (اسم القضية، رقم المادة)، لكن نتيجة الفحص تبقى غامضة (مثلاً: «تحققت من الاستشهاد ووجدت أنه بحاجة لمراجعة») دون بيان ما الخطأ فيه بالضبط.",
            en: "The item that was checked is named (the case name, the article number), but the outcome stays vague (e.g. \"I checked the citation and it needs another look\") without stating exactly what is wrong with it.",
          },
          {
            ar: "معظم عناصر التحقّق محدّدة ونتيجتها مذكورة، لكن عنصراً جوهرياً واحداً يبقى غامضاً (يُذكر الاستشهاد الخاطئ ومصدر الخطأ، لكن لا يُذكر أين وردت الحاشية غير الدقيقة في المستند نفسه).",
            en: "Most verification items are specific with their outcome stated, but one central element stays vague (the wrong citation and its source are named, but where the inaccurate footnote appears in the document itself is not).",
          },
          {
            ar: "كل عنصر محدّد بدقة: يسمّي النص المرجع أو الرقم أو البند بعينه، ويصف بجملة واضحة ما الذي تبيّن عند التحقّق منه (مطابق، أم فيه خطأ ونوع الخطأ)، وأين يقع هذا العنصر في المستند أو الملف.",
            en: "Every element is precisely specific: the text names the exact citation, figure or clause, states in one clear sentence what the check found (accurate, or wrong and how), and where that item sits in the document or file.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.clarity-of-fix",
        name: {
          ar: "وضوح التصحيح أو التوصية المقترحة",
          en: "Clarity of the proposed fix or recommendation",
        },
        description: {
          ar: "يُقاس بما إذا اقترح النص تصحيحاً أو بديلاً ملموساً يمكن تنفيذه مباشرة، بدل الاكتفاء بالإشارة إلى وجود مشكلة دون بيان كيفية معالجتها.",
          en: "Measured by whether the text proposes a concrete fix or alternative that can be acted on directly, rather than merely flagging that a problem exists without saying how to address it.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "لا يقترح النص أي تصحيح أو بديل؛ ينتهي عند وصف المشكلة («الاستشهاد غير دقيق») دون أي إشارة إلى ما ينبغي فعله حياله.",
            en: "The text proposes no fix or alternative at all; it stops at describing the problem (\"the citation is inaccurate\") with no indication of what should be done about it.",
          },
          {
            ar: "يُقترَح تصحيح بصيغة عامة («يجب مراجعة الاستشهادات مجدداً») دون تحديد الاستشهاد الصحيح أو المصدر البديل أو الخطوة العملية التالية.",
            en: "A fix is suggested in general terms (\"the citations should be checked again\") without naming the correct citation, an alternative source, or the next practical step.",
          },
          {
            ar: "يُقترَح تصحيح محدد لمعظم المشكلات المذكورة، لكن مشكلة واحدة تبقى دون تصحيح مقترَح أو بديل واضح.",
            en: "A specific fix is proposed for most of the issues raised, but one remains without a suggested correction or clear alternative.",
          },
          {
            ar: "لكل مشكلة مذكورة تصحيح أو بديل ملموس ومحدد يمكن تنفيذه مباشرة (استبدال الاستشهاد بالمرجع الصحيح المُتحقَّق منه، أو حذف الفقرة المشكوك فيها حتى التحقّق، أو بديل محدد عن استخدام الأداة غير المعتمدة).",
            en: "Every issue raised has a concrete, specific fix or alternative that can be acted on directly (replacing the citation with the verified correct reference, removing the questionable passage until it is verified, or a specific alternative to using the unapproved tool).",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.appropriate-escalation",
        name: {
          ar: "التصعيد المناسب للمشرف أو الجهة المعنية",
          en: "Appropriate escalation to the supervisor or relevant party",
        },
        description: {
          ar: "يُقاس بما إذا ميّز النص بوضوح أن مستنداً بات جاهزاً للخروج (إلى محامٍ مشرف أو موكّل) يحتوي خطأ من أداة رقمية، وأن ذلك يستدعي تنبيهاً صريحاً قبل الإرسال، لا معالجة صامتة.",
          en: "Measured by whether the text clearly flags that a document about to go out (to a supervising lawyer or client) contains an error from a digital tool, and that this requires explicit notice before sending, not a silent fix.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "لا إشارة إلى ضرورة تنبيه أي جهة رغم أن الخطأ المذكور موجود في مستند بات جاهزاً للخروج إلى محامٍ مشرف أو موكّل.",
            en: "No indication that anyone needs to be alerted, even though the error described sits in a document already on its way to a supervising lawyer or client.",
          },
          {
            ar: "يُشار إلى ضرورة إبلاغ جهة ما، لكن دون تسمية من يجب إبلاغه أو متى (قبل الإرسال أم بعده).",
            en: "The need to inform someone is mentioned, but without naming who should be told or when (before sending, or after).",
          },
          {
            ar: "يُسمّى من يجب تنبيهه ومتى، لكن الصياغة لا توضح بجلاء أن المستند يجب أن يتوقف عن السير حتى يُصحَّح.",
            en: "Who should be alerted and when is named, but the wording doesn't make clear that the document should be held until the correction is made.",
          },
          {
            ar: "يوضح النص صراحةً من يجب تنبيهه، ويطلب إيقاف إرسال المستند أو سحبه حتى يُصحَّح الخطأ، بحيث لا يمكن لقارئ المذكّرة أن يفهم أن المعالجة يمكن أن تمر دون علم أحد.",
            en: "The text explicitly states who must be alerted, and asks that the document be held or withdrawn until the error is corrected, so no reader of the note could think this could be handled without anyone knowing.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.no-confidential-exposure-in-note",
        name: {
          ar: "خلوّ المذكّرة نفسها من كشف بيانات سرّية للموكّل بما يتجاوز الحاجة",
          en: "The note itself does not expose confidential client data beyond what is needed",
        },
        description: {
          ar: "يُقاس بما إذا اقتصر النص على المعلومات اللازمة لتوضيح المشكلة والتصحيح، دون نسخ بيانات حساسة عن الموكّل (أرقام حسابات، تفاصيل مالية دقيقة، معلومات صحية أو عائلية) لا حاجة فعلية لذكرها في مذكّرة داخلية عن جودة أداة.",
          en: "Measured by whether the text limits itself to the information necessary to explain the problem and the fix, without copying sensitive client data (account numbers, precise financial details, health or family information) that has no real need to appear in an internal note about a tool's output quality.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "تتضمن المذكّرة بيانات حساسة عن الموكّل (رقم حساب كامل، رقم هوية، تفاصيل صحية أو مالية دقيقة) لا حاجة فعلية لذكرها لتوضيح مشكلة التحقّق أو التصحيح المقترَح.",
            en: "The note includes sensitive client data (a full account number, a national ID number, precise health or financial details) that has no real need to appear in order to explain the verification issue or the proposed fix.",
          },
          {
            ar: "لا بيانات حساسة صريحة، لكن المذكّرة تنسخ فقرة كاملة من مستند الموكّل الأصلي حرفياً حين كانت الإشارة إلى موضعها كافية لتوضيح المشكلة.",
            en: "No explicit sensitive data, but the note copies an entire passage of the client's original document verbatim when simply pointing to its location would have been enough to explain the problem.",
          },
          {
            ar: "المذكّرة تقتصر في معظمها على ما يلزم، مع إشارة واحدة زائدة عن الحاجة (اسم الموكّل الكامل مذكور في موضع كان يكفي فيه رمز الملف).",
            en: "The note is limited to what is needed through most of its length, with one unnecessary inclusion (the client's full name appears where the matter reference would have sufficed).",
          },
          {
            ar: "لا تتضمن المذكّرة أي بيانات موكّل حساسة تتجاوز ما يلزم فعلاً لتوضيح المشكلة والتصحيح؛ يُشار إلى موضع الخطأ ونوعه دون نسخ محتوى سرّي غير ضروري.",
            en: "The note contains no client data more sensitive than what is genuinely needed to explain the problem and the fix; it points to the error's location and nature without copying unnecessary confidential content.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.tone-and-clarity",
        name: {
          ar: "وضوح الصياغة ونبرتها الواقعية عند وصف خلل أداة أو رفض استخدامها",
          en: "Clarity of wording and a factual tone when describing a tool's failure or declining to use it",
        },
        description: {
          ar: "يُقاس بما إذا وصف النص خلل الأداة أو سبب عدم استخدامها بوقائع محددة يفهمها القارئ من القراءة الأولى، بدل لغة تقنية مبهمة أو لوم الأداة كتبرير عام يعفي الكاتب من المسؤولية.",
          en: "Measured by whether the text describes the tool's failure or the reason it wasn't used in specific, plain terms the reader grasps on first reading, rather than vague technical language or blaming the tool as a general excuse that absolves the writer of responsibility.",
        },
        weight: 0.15,
        descriptors: [
          {
            ar: "الصياغة مبهمة لدرجة يتعذّر معها على القارئ فهم ما حدث فعلاً («الأداة أعطت نتيجة غير موثوقة»)، أو تحمّل الأداة المسؤولية الكاملة بلغة تعفي الكاتب من واجب التحقّق («الخطأ من الأداة وحدها»).",
            en: "The wording is so vague the reader cannot grasp what actually happened (\"the tool gave an unreliable result\"), or it places full responsibility on the tool in language that excuses the writer from the duty to verify (\"the error is entirely the tool's fault\").",
          },
          {
            ar: "الوقائع مذكورة، لكن الصياغة تميل إلى لغة تقنية غير مشروحة يصعب على قارئ غير متخصص فهمها، أو إلى جملة واحدة تُحمِّل الأداة اللوم عوضاً عن وصف ما حدث بوصفه واقعة.",
            en: "The facts are stated, but the wording leans toward unexplained technical language a non-specialist reader would struggle with, or includes one line that shifts blame onto the tool instead of describing what happened as a fact.",
          },
          {
            ar: "الصياغة واضحة وواقعية في معظم النص، مع جملة واحدة غامضة أو غير ضرورية لا تغيّر الفهم العام.",
            en: "The wording is clear and factual through most of the text, with one vague or unnecessary sentence that does not change the overall understanding.",
          },
          {
            ar: "الصياغة واضحة من أول النص إلى آخره، تصف ما حدث بوقائع محددة يفهمها أي قارئ من القراءة الأولى، ولا تُحمّل الأداة مسؤولية القرار أو التحقّق الذي يبقى واجباً على الكاتب.",
            en: "The wording is clear from the first line to the last, describing what happened in specific facts any reader grasps on first reading, and never assigns the tool responsibility for the decision or the verification duty that remains the writer's own.",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.written-unverified-as-fact",
        label: {
          ar: "إدراج معلومة أو استشهاد أو رقم من أداة ذكاء اصطناعي في المستند أو المذكّرة بوصفه حقيقة مؤكَّدة دون ذكر أي تحقّق منه — كأن يُساق استشهاد قضائي أنتجته الأداة بصيغة نهائية دون الإشارة إلى أنه رُوجِع أو أن مصدره تأكَّد.",
          en: "Presenting a fact, citation or figure from an AI tool in the document or note as confirmed truth with no mention of any check having been done on it — such as stating a case citation the tool produced in final form with no indication it was reviewed or its source confirmed.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.written-confidential-exposure",
        label: {
          ar: "كشف بيانات سرّية عن الموكّل داخل المذكّرة نفسها (اسم كامل غير ضروري، رقم حساب، تفاصيل مالية أو صحية دقيقة) تتجاوز ما يلزم فعلياً لتوضيح مشكلة التحقّق أو التصحيح.",
          en: "Exposing confidential client data within the note itself (an unnecessary full name, an account number, precise financial or health detail) beyond what is genuinely needed to explain the verification issue or the fix.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.written-silent-correction",
        label: {
          ar: "تصحيح خطأ الأداة بصمت في المستند النهائي دون أي ذكر — في المذكّرة أو في الملف — بأن الأداة أنتجت المحتوى الخاطئ أصلاً، بحيث لا يبقى أي أثر مكتوب يمكّن المشرف من تقييم حجم الاعتماد على الأداة.",
          en: "Silently correcting the tool's error in the final document with no mention anywhere — in the note or the file — that the tool originally produced the wrong content, leaving no written trace that would let a supervisor assess how much reliance was placed on the tool.",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },

  // -------------------------------------------------------------------------
  // 2. Digital-tools/AI conversation simulation performance — disclosing an
  //    AI drafting error, declining to use an unapproved tool or skip
  //    verification under pressure
  // -------------------------------------------------------------------------
  {
    id: "rubric.digital-ai-sim.v1",
    name: {
      ar: "أداء محادثة الأدوات الرقمية والذكاء الاصطناعي في المحاكاة (الإفصاح عن خطأ الأداة، رفض استخدام أداة غير معتمدة)",
      en: "Performance in a digital-tools/AI conversation simulation (disclosing a tool's error, declining an unapproved tool)",
    },
    version: "1.0.0",
    skillIds: [
      "skill.disclosing-ai-errors",
      "skill.protecting-data-in-digital-tools",
      "skill.ai-output-verification",
    ],
    criteria: [
      {
        id: "cr.prompt-clear-disclosure",
        name: {
          ar: "الإفصاح الواضح والمبكّر عن المشكلة الفعلية",
          en: "Clear, prompt disclosure of the actual problem",
        },
        description: {
          ar: "يُقاس بما إذا سمّى المتدرّب خطأ الأداة الفعلي بجملة صريحة ومبكّرة في الحوار، بدل التلميح أو الدوران حوله أو الانتظار حتى يُسأل.",
          en: "Measured by whether the learner names the tool's actual error in an explicit, early sentence in the conversation, rather than hinting at it, talking around it, or waiting to be asked.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "لا يذكر المتدرّب المشكلة الفعلية بوضوح في أي موضع من الحوار؛ يكتفي بعبارات عامة («أردت التأكد من نقطة في المذكّرة») دون تسمية الخطأ أو موقعه.",
            en: "The learner never states the actual problem clearly anywhere in the conversation; they settle for general phrases (\"I wanted to double-check something in the memo\") without naming the error or where it is.",
          },
          {
            ar: "يذكر المتدرّب أن هناك مشكلة في مستند أنتجته الأداة، لكن طبيعة الخطأ نفسه تبقى غامضة حتى بعد أن يسأله المحاور عنها مباشرة.",
            en: "The learner mentions that there is a problem with something the tool produced, but the nature of the error itself stays vague even after the other party asks about it directly.",
          },
          {
            ar: "يذكر المتدرّب الخطأ بوضوح في النهاية، لكن بعد عدة أدوار حوارية من المراوغة، أو فقط بعد أن يُسأل صراحةً عمّا يريد قوله.",
            en: "The learner eventually states the error clearly, but only after several conversational turns of hedging, or only once directly asked what they want to say.",
          },
          {
            ar: "يسمّي المتدرّب الخطأ الفعلي بجملة واضحة ومحددة في وقت مبكّر من الحوار ودون أن يُسأل عنه («قبل أن نرسل المذكّرة، وجدت أن الاستشهاد الذي أضافته الأداة في الفقرة الثانية غير صحيح ولا وجود له في المصدر»).",
            en: "The learner names the actual error in a clear, specific sentence early in the conversation, without being asked (\"before we send the memo, I found that the citation the tool added in paragraph two is wrong and doesn't exist in the source\").",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.no-blaming-tool-as-excuse",
        name: {
          ar: "عدم استخدام الأداة كذريعة تعفي من المسؤولية",
          en: "Not using the tool as an excuse that avoids responsibility",
        },
        description: {
          ar: "يُقاس بما إذا تحمّل المتدرّب مسؤولية التحقّق أو عدمه بوضوح، بدل صياغة الموقف على أن الأداة وحدها أخطأت وأن ذلك يعفيه من المساءلة.",
          en: "Measured by whether the learner clearly owns responsibility for verifying or not verifying, rather than framing the situation as the tool alone having erred, in a way that excuses them from accountability.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "يصوغ المتدرّب الموقف بحيث تتحمّل الأداة اللوم كاملاً («الأداة هي التي أخطأت، أنا فقط استخدمتها») دون أي إقرار بأن التحقّق كان مسؤوليته هو.",
            en: "The learner frames the situation so the tool carries all the blame (\"the tool made the mistake, I just used it\") with no acknowledgment that the verification was their own responsibility.",
          },
          {
            ar: "لا لوم صريح للأداة، لكن الصياغة تتجنب أي إقرار مباشر بأن التحقّق كان واجباً عليه، وتترك الانطباع بأن الأمر خارج عن إرادته.",
            en: "No explicit blaming of the tool, but the phrasing avoids any direct acknowledgment that verifying was the learner's duty, leaving the impression the matter was out of their hands.",
          },
          {
            ar: "يقرّ المتدرّب بمسؤوليته في معظم الحوار، مع جملة واحدة تنزلق نحو تحميل الأداة جزءاً من اللوم لا حاجة له.",
            en: "The learner owns their responsibility through most of the conversation, with one sentence that slips into placing unnecessary partial blame on the tool.",
          },
          {
            ar: "يقرّ المتدرّب بوضوح تام بأن التحقّق من مخرجات الأداة كان مسؤوليته هو، ويصف خطأ الأداة كواقعة تقنية دون توظيفها كذريعة تعفيه من المساءلة، حتى حين يسأله المحاور بشكل يفتح له باباً لإلقاء اللوم على الأداة.",
            en: "The learner clearly and fully owns that verifying the tool's output was their own responsibility, describing the tool's error as a technical fact without using it as an excuse from accountability, even when the other party's question opens a door to blame the tool.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.concrete-alternative-path",
        name: {
          ar: "اقتراح مسار تحقّق أو بديل ملموس",
          en: "Proposing a concrete verification or alternative path",
        },
        description: {
          ar: "يُقاس بما إذا اقترح المتدرّب خطوة عملية محددة لمعالجة الخطأ أو لتلبية الطلب دون المخاطرة (مصدر بديل للتحقّق، أداة معتمدة، مسار آخر لإنجاز المطلوب)، بدل الاكتفاء بالإفصاح أو الرفض دون أي بديل.",
          en: "Measured by whether the learner proposes a specific practical step to address the error or meet the request without taking the risk (an alternative verification source, an approved tool, another way to get the task done), rather than stopping at disclosure or refusal with no alternative offered.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "لا يقترح المتدرّب أي بديل أو مسار للمعالجة؛ يقف الحوار عند الإفصاح عن الخطأ أو رفض الطلب دون أي اقتراح لما يمكن فعله بدلاً من ذلك.",
            en: "The learner proposes no alternative or path forward at all; the conversation stops at disclosing the error or declining the request with no suggestion of what to do instead.",
          },
          {
            ar: "يُذكر بديل بصيغة عامة («يمكننا إيجاد طريقة أخرى») دون تسمية مصدر تحقّق محدد أو أداة معتمدة أو خطوة عملية فعلية.",
            en: "An alternative is mentioned in general terms (\"we can find another way\") with no named verification source, approved tool, or actual practical step.",
          },
          {
            ar: "يُقترَح بديل محدد، لكنه يعالج جزءاً واحداً فقط من المشكلة (يقترح مصدراً للتحقّق من الاستشهاد الخاطئ لكن دون التطرق إلى ما يلزم فعله بالمستند الجاهز للخروج).",
            en: "A specific alternative is proposed, but it addresses only part of the problem (a source for verifying the wrong citation is proposed, but nothing is said about what needs to happen to the document already about to go out).",
          },
          {
            ar: "يقترح المتدرّب مساراً عملياً محدداً وكاملاً: مصدراً أو أداة معتمدة للتحقّق من الاستشهاد أو المعلومة، أو بديلاً واضحاً عن الأداة غير المعتمدة يحقق الغرض ذاته دون مخاطرة، مع خطوة تالية يمكن تنفيذها فوراً.",
            en: "The learner proposes a specific, complete practical path: a source or approved tool for verifying the citation or fact, or a clear alternative to the unapproved tool that achieves the same purpose without risk, with a next step that can be acted on immediately.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.composure-under-pushback",
        name: {
          ar: "الاتزان المهني عند الضغط أو الإلحاح",
          en: "Professional composure under pressure or pushback",
        },
        description: {
          ar: "يُقاس بما يفعله المتدرّب حين يُظهر المحاور استعجالاً أو إلحاحاً أو استياءً من الإفصاح أو من الرفض — هل يحافظ على موقفه بهدوء أم يتراجع عنه لتخفيف التوتر.",
          en: "Measured by what the learner does when the other party shows urgency, insistence or displeasure at the disclosure or the refusal — whether they hold their position calmly, or retreat from it to ease the tension.",
        },
        weight: 0.15,
        descriptors: [
          {
            ar: "يتراجع المتدرّب عن موقفه الأصلي (الإفصاح عن الخطأ، أو رفض استخدام أداة غير معتمدة، أو رفض تخطي التحقّق) بمجرد أن يُظهر المحاور استعجالاً أو استياءً، ويوافق على ما طُلب منه للتخفيف من التوتر.",
            en: "The learner abandons their original position (disclosing the error, declining an unapproved tool, or declining to skip verification) as soon as the other party shows urgency or displeasure, and agrees to what was asked in order to ease the tension.",
          },
          {
            ar: "لا يتراجع المتدرّب عن موقفه صراحة، لكن نبرته تتغيّر بشكل ملحوظ (اعتذار متكرر غير مبرَّر، أو تردد واضح) بعد أول تعبير عن الاستعجال أو الاستياء.",
            en: "The learner does not explicitly abandon their position, but their tone shifts noticeably (repeated unwarranted apology, or visible hesitation) after the first sign of urgency or displeasure.",
          },
          {
            ar: "يحافظ المتدرّب على موقفه في معظم الحوار، مع لحظة واحدة يبدو فيها متردداً أو يقدّم تنازلاً جزئياً غير ضروري.",
            en: "The learner holds their position through most of the conversation, with one moment where they seem to hesitate or offer an unnecessary partial concession.",
          },
          {
            ar: "يحافظ المتدرّب على نبرة هادئة ومهنية طوال الحوار، ولا يتراجع عن الإفصاح أو عن رفضه المبرَّر رغم استعجال المحاور أو استيائه، بل يكرر موقفه بثبات مع تفسير مختصر لسببه.",
            en: "The learner maintains a calm, professional tone throughout, and does not retreat from the disclosure or from their justified refusal despite the other party's urgency or displeasure, instead restating their position steadily with a brief explanation of why.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.protects-confidential-data-in-conversation",
        name: {
          ar: "حماية بيانات الموكّل السرّية طوال المحادثة",
          en: "Protecting confidential client data throughout the conversation",
        },
        description: {
          ar: "يُقاس بما إذا امتنع المتدرّب طوال الحوار عن اقتراح أو الموافقة على لصق بيانات موكّل سرّية في أداة غير معتمدة، حتى حين يبرَّر ذلك بضغط الوقت أو بسبب مقنع ظاهرياً.",
          en: "Measured by whether the learner refrains throughout the conversation from proposing or agreeing to paste confidential client data into an unapproved tool, even when it is justified by time pressure or an outwardly persuasive reason.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "يوافق المتدرّب على لصق بيانات موكّل سرّية في أداة غير معتمدة، أو يقترح ذلك بنفسه، في أي موضع من الحوار.",
            en: "The learner agrees to paste confidential client data into an unapproved tool, or proposes doing so themself, anywhere in the conversation.",
          },
          {
            ar: "لا موافقة صريحة، لكن المتدرّب يترك الباب مفتوحاً («ربما يمكن استخدامها بحذر هذه المرة فقط») دون رفض واضح.",
            en: "No explicit agreement, but the learner leaves the door open (\"maybe it could be used carefully just this once\") without a clear refusal.",
          },
          {
            ar: "يرفض المتدرّب لصق البيانات السرّية، لكن دون توضيح السبب أو دون اقتراح بديل آمن، فيبدو الرفض جامداً دون تفسير مفيد.",
            en: "The learner declines to paste the confidential data, but without explaining why or proposing a safe alternative, so the refusal reads as flat with no useful explanation.",
          },
          {
            ar: "يرفض المتدرّب بوضوح لصق أي بيانات موكّل سرّية في أداة غير معتمدة طوال الحوار، ويشرح السبب باقتضاب، ويقترح بديلاً آمناً يحقق الحاجة نفسها (أداة معتمدة، أو إخفاء الهوية عن البيانات، أو إنجاز المهمة يدوياً).",
            en: "The learner clearly declines to paste any confidential client data into an unapproved tool throughout the conversation, briefly explains why, and proposes a safe alternative that meets the same need (an approved tool, anonymising the data, or doing the task manually).",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.sim-conceals-ai-error",
        label: {
          ar: "عدم الإفصاح عن خطأ الأداة الفعلي إطلاقاً خلال المحادثة — التحدث حول الموضوع أو تخفيفه لدرجة اختفائه، أو تحميل الأداة اللوم الكامل كذريعة تعفي المتدرّب من ذكر أنه لم يتحقّق بعد، بحيث يخرج الطرف الآخر من الحوار دون أن يعرف أن هناك خطأ فعلياً في المستند.",
          en: "Never disclosing the tool's actual error during the conversation — talking around it or softening it out of existence, or placing full blame on the tool as an excuse that avoids mentioning verification hasn't happened, so the other party leaves the conversation with no idea the document actually contains an error.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.sim-agrees-to-paste-confidential-data",
        label: {
          ar: "الموافقة، تحت ضغط الوقت أو إلحاح الطرف الآخر، على لصق بيانات موكّل سرّية في أداة ذكاء اصطناعي غير معتمدة، أو اقتراح ذلك بنفسه.",
          en: "Agreeing, under time pressure or the other party's insistence, to paste confidential client data into an unapproved AI tool — or proposing it themself.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.sim-skips-verification-under-pressure",
        label: {
          ar: "الموافقة على تخطي التحقّق من مخرجات الأداة «لمرة واحدة فقط» تحت إلحاح الطرف الآخر أو ضغط الوقت، رغم أن المستند سيُستخدَم في عمل فعلي يمسّ الموكّل.",
          en: "Agreeing to skip verifying the tool's output \"just this once\" under the other party's insistence or time pressure, even though the document will be used in real work that affects the client.",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },
];
