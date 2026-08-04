import type { SkillDef } from "../types";

// -----------------------------------------------------------------------------
// dom.digital-ai — three additional skills
//
// Companion file to skills.ts. Does not redefine skill.responsible-ai-use,
// which already exists in skills.ts and covers the overall responsible-use
// posture: using approved tools, stripping identifying data, verifying
// citations, deciding when the tool should not be used, and (at its top
// level) setting a firm-wide AI policy. Matches the depth of
// skills-firm-operations.ts and skills-business-development.ts: 7 mastery
// levels (0-6), each with definition / observableBehaviors / commonMistakes /
// successCriteria / evidenceRequired, bilingual (Arabic primary), grounded in
// concrete Arab-market legal scenarios.
//
// These three skills go deeper than skill.responsible-ai-use into three
// specific disciplines the domain description names but that skill does not
// itself develop to full depth:
//   - skill.ai-output-verification: the concrete *method* of checking AI
//     output line by line against primary sources — not just the general
//     awareness that a citation should be checked, but a habit that scales
//     with risk, catches fluent-sounding fabrication, and eventually becomes
//     a taught, firm-wide practice.
//   - skill.disclosing-ai-errors: what happens *after* an AI error is caught
//     — the specific, separate discipline of saying so plainly (to a
//     supervisor, then a client, then a team) instead of quietly fixing it
//     in silence or blaming the tool to dodge responsibility.
//   - skill.protecting-data-in-digital-tools: the data-classification and
//     tool-selection discipline that decides, before any drafting or
//     verification happens, what may never be typed into a given tool at
//     all — including the discipline of refusing a tool outright under
//     deadline pressure rather than cutting a corner.
//
// The domain's own #8-equivalent risk this whole file trains against: never
// let an AI tool's output pass as verified truth, and never model careless
// or irresponsible AI use — including silence about its errors — as
// acceptable professional behaviour.
// -----------------------------------------------------------------------------

export const DIGITAL_AI_SKILLS: SkillDef[] = [
  {
    id: "skill.ai-output-verification",
    domainId: "dom.digital-ai",
    name: {
      ar: "التحقّق من مخرجات الذكاء الاصطناعي",
      en: "AI Output Verification",
    },
    synonyms: [
      "checking AI drafts",
      "primary-source verification",
      "catching AI fabrication",
      "fact-checking AI output",
      "تدقيق مخرجات الأداة",
    ],
    definition: {
      ar: "التحقّق الفعلي من كل مسوَّدة أو ملخّص أو استشهاد أو حساب أنتجته أداة ذكاء اصطناعي بالرجوع إلى مصدره الأصلي قبل الاعتماد عليه أو إرساله لأي جهة، بدل الوثوق به لمجرّد أنه مكتوب بصياغة سليمة ومقنعة.",
      en: "Actually checking every draft, summary, citation or calculation an AI tool produces against its original source before relying on it or sending it anywhere — instead of trusting it because it reads fluently and sounds confident.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على التحقّق من مخرجات أدوات الذكاء الاصطناعي.",
          en: "No evidence has been collected yet on the learner's ability to verify AI tool output.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يحكم على مخرج الأداة بمدى سلاسة صياغته لا بمطابقته لمصدر حقيقي، فيقبله لأنه \"يبدو صحيحًا\" دون فتح أي مصدر أصلي.",
          en: "Judges the tool's output by how smoothly it reads rather than by matching it to a real source, accepting it because it 'looks right' without opening any original source.",
        },
        observableBehaviors: [
          {
            ar: "ينسخ ملخّصًا لحكم قضائي أنتجته الأداة إلى مذكّرة دون فتح نص الحكم نفسه.",
            en: "Copies an AI-generated summary of a court ruling straight into a memo without opening the ruling itself.",
          },
          {
            ar: "يقبل بندًا في عقد توريد اقترحته الأداة لأنه \"يبدو بصياغة قانونية معتادة\".",
            en: "Accepts a supply-contract clause the tool suggested because it 'sounds like normal legal drafting.'",
          },
        ],
        commonMistakes: [
          {
            ar: "يعادل بين ثقة الأسلوب وصحّة المضمون.",
            en: "Equates a confident tone with correct content.",
          },
          {
            ar: "يفترض أن نصًا متماسكًا داخليًا لا يمكن أن يكون خاطئًا في وقائعه.",
            en: "Assumes text that is internally coherent cannot be wrong in its facts.",
          },
        ],
        successCriteria: [
          {
            ar: "لم يُرسل بعد مستندًا يعرف مسبقًا أنه غير متأكّد من صحّته.",
            en: "Has not yet sent a document he already suspected was unreliable.",
          },
          {
            ar: "يقرّ حين يُسأل بأن مخرجات الأداة قد تكون خاطئة.",
            en: "Acknowledges when asked that the tool's output can be wrong.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مثال على مخرج أداة اعتُمد دون فتح أي مصدر أصلي.",
            en: "An example of tool output accepted without opening any original source.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يتحقّق من الأجزاء التي تثير الشك بحدسه فقط، تاركًا الأجزاء التي تبدو عادية دون فحص، فيفوته خطأ هادئ في تفصيل لم يلفت انتباهه.",
          en: "Verifies only the parts that strike him as suspicious by gut feeling, leaving ordinary-looking parts unchecked, so a quiet error in an unremarkable detail slips through.",
        },
        observableBehaviors: [
          {
            ar: "يتحقّق من استشهاد قضائي واحد يبدو غير مألوف في مذكّرة، ولا يفتح الاستشهادات الثلاثة الأخرى التي تبدو عادية.",
            en: "Checks the one case citation in a memo that seems unfamiliar, but doesn't open the other three that look ordinary.",
          },
          {
            ar: "يراجع ترجمة البند الجوهري في عقد لكنه يتجاوز الديباجة لأنها \"مجرد صياغة تمهيدية\".",
            en: "Reviews the translation of the contract's operative clause but skips the recitals because they're 'just introductory wording.'",
          },
          {
            ar: "يتوقّف عن التحقّق بعد أن يثبت صحّة أول عنصر فحصه، مفترضًا أن الباقي سليم أيضًا.",
            en: "Stops verifying after the first checked item turns out correct, assuming the rest is fine too.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتمد على شعوره بما \"يبدو مريبًا\" بدل فحص كل عنصر بلا استثناء.",
            en: "Relies on what 'feels off' instead of checking every element without exception.",
          },
          {
            ar: "يظن أن التحقّق الجزئي يكفي لإخلاء مسؤوليته عن باقي المستند.",
            en: "Thinks partial verification is enough to clear him of responsibility for the rest of the document.",
          },
        ],
        successCriteria: [
          {
            ar: "تحقّق فعلي من مصدر واحد على الأقل حصل قبل الإرسال.",
            en: "At least one genuine source check happened before sending.",
          },
          {
            ar: "العنصر الأكثر خطورة في المستند فُحص فعلاً.",
            en: "The highest-risk item in the document was actually checked.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مستند يُظهر عنصرًا واحدًا تحقّق منه وعناصر أخرى لم تُفحص.",
            en: "A document showing one verified element alongside other unchecked ones.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يطبّق منهجًا ثابتًا على كل مستند بمساعدة الأداة: يتتبّع كل استشهاد إلى مصدره، ويقارن كل رقم بأصله، ويطابق كل واقعة ملخَّصة بالمستند الأصلي، لا الأجزاء التي تبدو مريبة فقط.",
          en: "Applies a consistent method to every AI-assisted document: traces every citation to its source, checks every figure against its origin, and matches every summarized fact against the original document — not just the parts that feel suspicious.",
        },
        observableBehaviors: [
          {
            ar: "يفتح نص المادة القانونية المذكورة في مذكّرة نزاع إيجار تجاري ويقارنها كلمة بكلمة بما ذكرته الأداة.",
            en: "Opens the actual text of the article cited in a commercial-lease dispute memo and compares it word for word to what the tool stated.",
          },
          {
            ar: "يعيد حساب مبلغ التسوية الذي أنتجته الأداة لملف قسمة إرث بدل الثقة بجمعها الحسابي.",
            en: "Recalculates the settlement amount the tool produced for an inheritance-division matter rather than trusting its arithmetic.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتأكّد من وجود المصدر لكن لا يقرأ إن كان يقول فعلاً ما نسبته الأداة إليه.",
            en: "Confirms the source exists but doesn't read whether it actually says what the tool attributed to it.",
          },
          {
            ar: "يطبّق المنهج على المستندات الطويلة فقط ويتساهل مع الرسائل القصيرة.",
            en: "Applies the method to long documents only and goes easy on short letters.",
          },
        ],
        successCriteria: [
          {
            ar: "كل استشهاد ورقم وواقعة في المستند تحقّق منها من مصدرها الأصلي.",
            en: "Every citation, figure and fact in the document was verified against its original source.",
          },
          {
            ar: "المنهج طُبِّق بصرف النظر عمّا إذا بدا عنصر معيّن مريبًا أم لا.",
            en: "The method was applied regardless of whether a given element looked suspicious or not.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ تحقّق كامل لمستند حقيقي بمساعدة أداة، يغطّي كل استشهاد ورقم فيه.",
            en: "A complete verification log for a real AI-assisted document, covering every citation and figure in it.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يكتشف مضمونًا مختلَقًا كليًا أو محرَّفًا رغم صياغته السليمة تمامًا — استشهادًا بحكم غير موجود، أو تلخيصًا يحذف بندًا جوهريًا يغيّر التحليل — لأن التحقّق يقوم على المصدر الأصلي لا على مدى معقولية الصياغة.",
          en: "Catches content that is entirely fabricated or misrepresented despite being perfectly well-worded — a citation to a ruling that doesn't exist, or a summary that omits a clause that changes the whole analysis — because verification is anchored to the original source, not to how plausible the wording sounds.",
        },
        observableBehaviors: [
          {
            ar: "يكتشف أن الحكم القضائي الذي استشهدت به الأداة في مذكّرة نزاع علامة تجارية غير موجود إطلاقًا في قواعد البيانات.",
            en: "Discovers that a court ruling the tool cited in a trademark-dispute memo does not exist at all in the case databases.",
          },
          {
            ar: "يجد أن ملخّص الأداة لعقد عمل متنازع عليه يحذف بند إنهاء الخدمة رغم أن الملخّص يبدو كاملًا ومتماسكًا.",
            en: "Finds that the tool's summary of a contested employment contract omits the termination clause, even though the summary reads as complete and coherent.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتحقّق من وجود الاستشهاد لكن لا يفحص ما إذا كان النص يدلّ فعلاً على ما استُشهد به من أجله.",
            en: "Checks that a citation exists but doesn't check whether the source actually supports the point it was cited for.",
          },
          {
            ar: "يبحث عن إضافات خاطئة في المخرج ويغفل ما حذفته الأداة سهوًا.",
            en: "Looks for wrong additions in the output and overlooks what the tool silently omitted.",
          },
        ],
        successCriteria: [
          {
            ar: "المضمون المختلَق أو المحرَّف اكتُشف وأُزيل قبل وصول المستند لأي جهة أخرى.",
            en: "Fabricated or misrepresented content was caught and removed before the document reached anyone else.",
          },
          {
            ar: "الفحص شمل ما حذفته الأداة لا الأخطاء الظاهرة فقط.",
            en: "The check covered what the tool omitted, not just its visible errors.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مثال موثّق على استشهاد مختلَق أو حذف جوهري اكتُشف قبل الإرسال.",
            en: "A documented example of a fabricated citation or a material omission caught before sending.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضبط عمق التحقّق بحسب مخاطر الاستخدام الفعلي — تحقّق خفيف لمسودة داخلية روتينية، وتتبّع كامل للمصادر في مذكّرة تُقدَّم للمحكمة — ويراجع تحقّق الزملاء الأصغر قبل صدور عملهم.",
          en: "Calibrates the depth of verification to the actual stakes of the use — a light pass for a routine internal draft, a full source trace for a memo going to court — and reviews junior colleagues' verification before their work goes out.",
        },
        observableBehaviors: [
          {
            ar: "يطبّق تحقّقًا سريعًا على مسودة إشعار روتيني لشيك مرتجع، وتتبّعًا كاملًا للمصادر على مذكّرة دفاع في الأسبوع نفسه.",
            en: "Applies a quick check to a routine bounced-cheque notice draft, and a full source trace to a defence memo in the same week.",
          },
          {
            ar: "يراجع مذكّرة صاغها متدرّب بمساعدة الأداة ويكتشف استشهادين لم يتحقّق منهما قبل تقديمها للمحكمة.",
            en: "Reviews a memo a trainee drafted with the tool's help and finds two unverified citations before it is filed with the court.",
          },
        ],
        commonMistakes: [
          {
            ar: "يطبّق التحقّق العميق نفسه على كل شيء فيهدر وقتًا على مستندات منخفضة المخاطر.",
            en: "Applies the same deep verification to everything, wasting time on low-stakes documents.",
          },
          {
            ar: "يعامل مذكّرات المحكمة معاملة المسودات الداخلية بحجة ضيق الوقت.",
            en: "Treats court filings the same as internal drafts, citing time pressure.",
          },
        ],
        successCriteria: [
          {
            ar: "عمق التحقّق يتناسب فعليًا مع مخاطر كل مستند لا مع مزاج المراجِع.",
            en: "The depth of verification genuinely matches each document's stakes, not the reviewer's mood.",
          },
          {
            ar: "مراجعة عمل الزملاء الأصغر أوقفت خطأً حقيقيًا قبل صدوره.",
            en: "Reviewing junior colleagues' work caught a real error before it went out.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مثالان على تحقّق بعمق مختلف لمستندين بمخاطر مختلفة، وسجلّ مراجعة زميل واحدة على الأقل.",
            en: "Two examples of differently scaled verification for two documents with different stakes, and a record of at least one colleague review.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع بروتوكول تحقّق إلزاميًا للعمل المستعان فيه بالذكاء الاصطناعي مرتبطًا بمستوى المخاطر، ويتتبّع أنماط أخطاء أداة معيّنة عبر الوقت ليحذّر الفريق من نقاط ضعفها المتكرّرة.",
          en: "Establishes a mandatory, risk-tiered verification protocol for AI-assisted work, and tracks a given tool's failure patterns over time to warn the team about its recurring weak points.",
        },
        observableBehaviors: [
          {
            ar: "يقترح على المكتب قائمة تحقّق إلزامية قبل تقديم أي عمل استعان فيه بالأداة، مرتبطة بفئة المخاطر.",
            en: "Proposes to the firm a mandatory verification checklist before filing any AI-assisted work, tied to its risk category.",
          },
          {
            ar: "يوثّق أن أداة الصياغة المعتمدة في المكتب تختلق مراجع فرعية بانتظام في مسائل قانون العمل، ويحذّر الفريق من هذه الفئة تحديدًا.",
            en: "Documents that the firm's approved drafting tool regularly fabricates secondary-source citations in labour-law questions, and warns the team to scrutinize that category specifically.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضع البروتوكول دون آلية تدقيق فعلية تتحقّق من تطبيقه.",
            en: "Sets the protocol with no real audit mechanism to confirm it's actually applied.",
          },
          {
            ar: "ينشر تحذيرًا واحدًا عن ضعف الأداة ولا يحدّثه حين تتغيّر الأداة أو نسختها.",
            en: "Publishes a single warning about a tool's weakness and never updates it as the tool or its version changes.",
          },
        ],
        successCriteria: [
          {
            ar: "البروتوكول معتمد ومطبَّق فعليًا عبر المكتب.",
            en: "The protocol is adopted and genuinely applied across the firm.",
          },
          {
            ar: "سجلّ أنماط أخطاء الأداة موجود ومحدَّث ويُستخدم لتوجيه جهد المراجعة.",
            en: "A log of the tool's failure patterns exists, is kept current, and is used to focus review effort.",
          },
        ],
        evidenceRequired: [
          {
            ar: "البروتوكول المعتمد وسجلّ أنماط أخطاء الأداة المصنَّف.",
            en: "The adopted protocol and the classified log of the tool's failure patterns.",
          },
          {
            ar: "تقرير يربط تطبيق البروتوكول بانخفاض عدد الأخطاء غير المكتشفة قبل الإصدار.",
            en: "A report linking the protocol's application to a drop in errors uncaught before release.",
          },
        ],
      },
    ],
    sourceIds: ["src.modernize-your-law-firm", "src.legal-ops-kpis", "src.thinking-like-a-lawyer", "src.legal-analyst"],
    confidence: 0.85,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.responsible-ai-use"],
  },
  {
    id: "skill.disclosing-ai-errors",
    domainId: "dom.digital-ai",
    name: {
      ar: "الإفصاح عن أخطاء الذكاء الاصطناعي",
      en: "Disclosing AI Errors",
    },
    synonyms: [
      "owning AI mistakes",
      "reporting near-miss errors",
      "not hiding tool errors",
      "AI error transparency",
      "الإبلاغ عن خطأ الأداة",
    ],
    definition: {
      ar: "ملاحظة أن مخرج أداة ذكاء اصطناعي كان خاطئًا — استشهادًا مختلَقًا أو واقعة مغلوطة — كاد يخرج من المكتب، والإفصاح عنه بوضوح لمن يعنيه الأمر، بدل إصلاحه بصمت والسكوت عنه أو إلقاء اللوم على الأداة تهربًا من المسؤولية.",
      en: "Noticing that an AI tool produced something wrong — a fabricated citation, a misstated fact — that almost went out, and plainly disclosing it to whoever needs to know, instead of quietly fixing it and staying silent, or blaming the tool to dodge responsibility.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على الإفصاح عن أخطاء أدوات الذكاء الاصطناعي.",
          en: "No evidence has been collected yet on the learner's ability to disclose AI tool errors.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "لا يلاحظ خطأ الأداة إلا حين يشير إليه طرف آخر، وحين يُسأل عنه يلقي اللوم على الأداة نفسها بدل الاعتراف بأنه لم يراجع مخرجها.",
          en: "Only notices a tool error when someone else points it out, and when asked about it, blames the tool itself instead of acknowledging he never reviewed its output.",
        },
        observableBehaviors: [
          {
            ar: "حين يلاحظ الشريك المشرف اسم موكّل خاطئًا في مسودة، يردّ بأن \"البرنامج هو من أخطأ\" بدل الاعتراف بأنه لم يراجعها.",
            en: "When the supervising partner spots a wrong client name in a draft, he replies 'the program got it wrong' instead of admitting he never checked it.",
          },
          {
            ar: "يصمت حين يُسأل من صاغ المسودة الأصلية، تاركًا الانطباع بأنها كانت جاهزة تمامًا قبل أي تدخّل من الأداة.",
            en: "Stays silent when asked who wrote the original draft, letting the impression stand that it was already correct before any tool involvement.",
          },
        ],
        commonMistakes: [
          {
            ar: "يخلط بين ذِكر اسم الأداة وتبرئة نفسه من المسؤولية عن مخرجها.",
            en: "Conflates naming the tool with clearing himself of responsibility for its output.",
          },
          {
            ar: "ينكر معرفته بالخطأ حتى بعد ظهور دليل واضح على أنه رآه.",
            en: "Denies knowing about the error even after clear evidence shows he saw it.",
          },
        ],
        successCriteria: [
          {
            ar: "المستند الخاطئ لم يصل في النهاية إلى الموكّل، رغم أسلوب التبرير.",
            en: "The erroneous document ultimately did not reach the client, despite the deflection.",
          },
          {
            ar: "أقرّ في النهاية بوجود الخطأ، ولو بعد تردّد.",
            en: "Eventually admitted the error existed, even after hesitation.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ محادثة يظهر فيه إلقاء اللوم على الأداة عند مواجهته بخطأ اكتشفه طرف آخر.",
            en: "A conversation record showing him blaming the tool when confronted with an error someone else found.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يصلح خطأ الأداة بصمت حين يكتشفه بنفسه قبل خروج المستند، دون إبلاغ أحد، معتبرًا أن مجرّد الإصلاح يكفي.",
          en: "Quietly fixes a tool error himself when he catches it before the document goes out, without telling anyone, treating the fix itself as sufficient.",
        },
        observableBehaviors: [
          {
            ar: "يحذف استشهادًا قضائيًا اخترعته الأداة في مذكّرة تحكيم دون أن يذكر لزميله المُراجِع أنه كان موجودًا أصلًا.",
            en: "Deletes a fabricated case citation the tool invented in an arbitration memo without telling the reviewing colleague it was ever there.",
          },
          {
            ar: "يعدّل رقمًا حسابيًا خاطئًا في عرض تسوية دون توثيق أن الأداة أنتجته أصلًا.",
            en: "Corrects a wrong calculation figure in a settlement offer without documenting that the tool generated it in the first place.",
          },
        ],
        commonMistakes: [
          {
            ar: "يظن أن عدم خروج الخطأ يعني أنه لا يستحق أن يُشارَك كدرس.",
            en: "Assumes that because the error never went out, there's no lesson in it worth sharing.",
          },
          {
            ar: "يخفي عدد المرات التي اضطر فيها لتصحيح الأداة، فيبدو استخدامها أكثر أمانًا مما هو فعلاً.",
            en: "Hides how often he's had to correct the tool, making its use look safer than it really is.",
          },
        ],
        successCriteria: [
          {
            ar: "الخطأ لم يخرج من المكتب.",
            en: "The error did not leave the firm.",
          },
          {
            ar: "المستند صحيح فعليًا عند الإرسال.",
            en: "The document was actually correct when it was sent.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نسختان من مستند تُظهران تصحيحًا صامتًا لخطأ أنتجته الأداة.",
            en: "Two document versions showing a silent correction of a tool-generated error.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يبلّغ المشرف أو الفريق فور اكتشاف خطأ مهم من الأداة، قبل أن يُسأل، بعبارة مباشرة تسمّي الخطأ كما هو دون تهوين أو تهويل.",
          en: "Tells the supervisor or team the moment he catches a significant tool error, before being asked, in direct language that names the error exactly as it is, without minimizing or exaggerating it.",
        },
        observableBehaviors: [
          {
            ar: "يرسل رسالة قصيرة للشريك المشرف: \"الأداة ولّدت استشهادًا بحكم غير موجود في مسودة مذكّرة النزاع التجاري، حذفته وأعدت التحقّق من الباقي.\"",
            en: "Sends the supervising partner a short message: 'The tool generated a citation to a nonexistent ruling in the commercial dispute memo draft — I removed it and re-verified the rest.'",
          },
          {
            ar: "يوثّق في ملف القضية أن رقمًا في جدول حسابي كان من إنتاج الأداة وتبيّن خطؤه، مع تصحيحه.",
            en: "Documents in the case file that a figure in a calculation table was tool-generated and turned out to be wrong, along with the correction.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبلّغ بعد فوات وقت طويل، حين يتذكّر لا حين يكتشف.",
            en: "Reports well after the fact, when he happens to remember, rather than at the moment he catches it.",
          },
          {
            ar: "يبالغ في وصف الخطأ ليبدو أكثر يقظة مما حدث فعلاً.",
            en: "Overstates the error to appear more vigilant than the situation actually warranted.",
          },
        ],
        successCriteria: [
          {
            ar: "الإبلاغ حصل قبل أن يسأله أحد.",
            en: "Disclosure happened before anyone asked.",
          },
          {
            ar: "وصف الخطأ دقيق، لا مبالَغ فيه ولا مخفَّف.",
            en: "The description of the error is accurate, neither exaggerated nor softened.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة أو مذكّرة إبلاغ استباقي عن خطأ فعلي أنتجته الأداة.",
            en: "A proactive disclosure message or note about an actual tool-generated error.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "حين يكون الخطأ قد وصل فعلاً إلى الموكّل أو الطرف الآخر قبل اكتشافه، يبلّغهم بوضوح ويصحّح أثره، دون انتظار أن يكتشفه طرف آخر بنفسه.",
          en: "When the error has already reached the client or the other side before it was caught, tells them plainly and corrects its consequences, rather than waiting for someone else to discover it.",
        },
        observableBehaviors: [
          {
            ar: "يتصل بالموكّل ليخبره أن الرقم المذكور في التقرير المرسل الأسبوع الماضي كان خاطئًا بسبب خلل في حساب الأداة، ويرسل تصحيحًا كتابيًا.",
            en: "Calls the client to tell him a figure in last week's report was wrong due to a tool calculation error, and sends a written correction.",
          },
          {
            ar: "يبلّغ المحامي المقابل أن استشهادًا وارداً في مذكّرة أُرسلت إليه غير دقيق ويطلب تجاهله، بدل ترك الطرف الآخر يكتشفه بنفسه.",
            en: "Tells opposing counsel that a citation in a memo already sent to him is inaccurate and asks him to disregard it, instead of letting the other side discover it on its own.",
          },
        ],
        commonMistakes: [
          {
            ar: "يؤجّل الإبلاغ أملًا في ألا يلاحظ أحد الخطأ.",
            en: "Delays disclosure hoping no one will notice.",
          },
          {
            ar: "يبلّغ الموكّل لكن يلقي اللوم كليًا على الأداة بدل تحمّل مسؤولية عدم التحقّق.",
            en: "Tells the client but pins the blame entirely on the tool instead of owning the failure to verify.",
          },
        ],
        successCriteria: [
          {
            ar: "الطرف المتأثر أُبلغ قبل أن يكتشف الخطأ بنفسه.",
            en: "The affected party was told before discovering the error on their own.",
          },
          {
            ar: "التصحيح وصل كتابيًا وواضحًا.",
            en: "The correction arrived in writing and clearly.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مراسلة تصحيح أُرسلت للموكّل أو الطرف الآخر بعد خطأ كان قد وصل إليهم فعلاً.",
            en: "A correction message sent to the client or the other party after an error that had already reached them.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني في فريقه ثقافة تشجّع الإبلاغ عن أخطاء الأداة دون خوف من اللوم، ويطلب من الزملاء الأصغر الإبلاغ فور الاكتشاف بدل إخفائه خشية ردّة الفعل.",
          en: "Builds a team culture that encourages reporting tool errors without fear of blame, and asks junior colleagues to report the moment they catch one instead of hiding it out of fear of the reaction.",
        },
        observableBehaviors: [
          {
            ar: "يشكر متدرّبًا أمام الفريق لأنه أبلغ عن استشهاد وهمي أنتجته الأداة في مسودته، بدل توبيخه.",
            en: "Thanks a trainee in front of the team for reporting a fabricated citation the tool produced in his draft, instead of scolding him.",
          },
          {
            ar: "يضع قاعدة فريق غير رسمية: \"من يكتشف خطأ الأداة يخبر خلال ساعة، بلا عقاب على الاكتشاف نفسه.\"",
            en: "Sets an informal team rule: 'Whoever catches a tool error reports it within the hour, with no penalty for the catch itself.'",
          },
        ],
        commonMistakes: [
          {
            ar: "يعاقب أول خطأ يُبلَّغ عنه فينكمش الفريق عن الإبلاغ لاحقًا.",
            en: "Punishes the first reported error, so the team clams up afterward.",
          },
          {
            ar: "يكتفي بإعلان الثقافة دون أن يُظهر تطبيقها فعليًا حين يقع خطأ حقيقي.",
            en: "Only announces the culture without actually demonstrating it when a real error occurs.",
          },
        ],
        successCriteria: [
          {
            ar: "أكثر من عضو في الفريق أبلغ طوعًا عن خطأ أداة خلال فترة قصيرة.",
            en: "More than one team member voluntarily reported a tool error within a short period.",
          },
          {
            ar: "لا حالة عقاب على إبلاغ صادق.",
            en: "No punishment case for an honest disclosure.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ أكثر من بلاغ طوعي من أعضاء الفريق خلال فترة محدَّدة.",
            en: "A log of more than one voluntary report from team members within a defined period.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع للمكتب سياسة معلنة للإبلاغ عن أخطاء الذكاء الاصطناعي والتعامل معها مع الموكّلين، ويتتبّع بيانات الأخطاء \"القريبة من الخروج\" لتحسين نقاط التحقّق في سير العمل.",
          en: "Establishes a declared firm-wide policy for reporting AI errors and handling them with clients, and tracks near-miss error data to improve verification checkpoints in the workflow.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد مع الإدارة سياسة تُلزم الإبلاغ الفوري عن أي خطأ أداة وصل لموكّل، مع خطوات تصحيح موحّدة.",
            en: "Adopts a policy with management requiring immediate reporting of any tool error that reached a client, with standardized correction steps.",
          },
          {
            ar: "يجمع سجلًا فصليًا لعدد الأخطاء \"القريبة من الخروج\" التي أُوقفت قبل الإرسال ويحدّد أين تتكرّر في سير العمل.",
            en: "Compiles a quarterly log of near-miss errors caught before sending and identifies where they recur in the workflow.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضع سياسة إبلاغ صارمة بلا حماية من اللوم، فيعود الإخفاء الصامت.",
            en: "Sets a strict reporting policy with no protection from blame, so silent concealment returns.",
          },
          {
            ar: "يقيس عدد البلاغات لا التحسّن الفعلي في نقاط التحقّق التي تسبّب الأخطاء.",
            en: "Measures the number of reports rather than the actual improvement in the verification points causing the errors.",
          },
        ],
        successCriteria: [
          {
            ar: "السياسة معتمدة ومطبَّقة فعليًا.",
            en: "The policy is adopted and genuinely applied.",
          },
          {
            ar: "تقرير يربط بيانات الأخطاء القريبة من الخروج بتعديل فعلي في سير العمل.",
            en: "A report links the near-miss error data to an actual change in the workflow.",
          },
        ],
        evidenceRequired: [
          {
            ar: "السياسة المعتمدة وسجلّ الأخطاء القريبة من الخروج المصنَّف.",
            en: "The adopted policy and the classified near-miss error log.",
          },
          {
            ar: "تقرير سنوي بأثرها على معدّل الأخطاء التي وصلت فعلاً للموكّلين.",
            en: "An annual report on its effect on the rate of errors that actually reached clients.",
          },
        ],
      },
    ],
    sourceIds: ["src.rule-of-law", "src.governance-raci", "src.modernize-your-law-firm", "src.lawyers-ceo"],
    confidence: 0.83,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.ai-output-verification"],
  },
  {
    id: "skill.protecting-data-in-digital-tools",
    domainId: "dom.digital-ai",
    name: {
      ar: "حماية بيانات الموكّلين في الأدوات الرقمية",
      en: "Protecting Data in Digital Tools",
    },
    synonyms: [
      "client confidentiality online",
      "approved-tools discipline",
      "refusing an unsafe tool",
      "data classification for AI use",
      "حماية سرية بيانات الموكّل",
    ],
    definition: {
      ar: "معرفة أي معلومات عن الموكّل لا يجوز أبدًا إدخالها في أداة ذكاء اصطناعي عامة أو برنامج غير معتمد — هوية الموكّل، وقائع مشمولة بالسرية، تفاصيل قضية لم تُرفع بعد — والاقتصار على الأدوات المعتمدة في المكتب لأي عمل متعلّق بالموكّلين، ومعرفة متى يُرفض استخدام الأداة كليًا بدل التساهل تحت ضغط الوقت.",
      en: "Knowing what client information must never go into a general-purpose AI tool or unapproved software — client identity, privileged facts, details of a not-yet-filed matter — using only firm-approved tools for anything client-related, and knowing when to decline using a tool at all rather than cutting a corner under time pressure.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على حماية بيانات الموكّلين في الأدوات الرقمية.",
          en: "No evidence has been collected yet on the learner's ability to protect client data in digital tools.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يعرف عمومًا أن بيانات الموكّلين حسّاسة، لكنه يستخدم أدوات عامة مجانية دون تفكير فعلي فيما يُدخله فيها.",
          en: "Generally knows client data is sensitive, but uses free general-purpose tools without actually thinking about what he's entering into them.",
        },
        observableBehaviors: [
          {
            ar: "يلصق نص عقد كامل يتضمّن اسم الشركة وأرقام حساباتها في أداة ترجمة مجانية على الإنترنت لتسريع العمل.",
            en: "Pastes a full contract text — including the company's name and account numbers — into a free online translation tool to speed things up.",
          },
          {
            ar: "يستخدم تطبيق تدوين صوتي عامًا لتفريغ اجتماع مع موكّل يبحث تفاصيل ميراث عائلي حسّاسة.",
            en: "Uses a general voice-transcription app to transcribe a client meeting discussing sensitive family inheritance details.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفترض أن الأداة \"مشهورة\" فهي آمنة تلقائيًا.",
            en: "Assumes a 'well-known' tool is automatically safe.",
          },
          {
            ar: "لا يميّز بين نص بحث عام ونص يحمل هوية موكّل فعلي.",
            en: "Doesn't distinguish between a generic search text and text carrying an actual client's identity.",
          },
        ],
        successCriteria: [
          {
            ar: "لم يحدث تسريب فعلي معروف حتى الآن رغم الممارسة الخطرة.",
            en: "No known actual leak has occurred yet, despite the risky practice.",
          },
          {
            ar: "أقرّ حين سُئل بأنه لا يعرف سياسة حماية البيانات في المكتب.",
            en: "Admitted when asked that he does not know the firm's data-protection policy.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مثال موثّق على إدخال بيانات موكّل في أداة عامة غير معتمدة.",
            en: "A documented example of entering client data into an unapproved general-purpose tool.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يعرف قائمة الأدوات المعتمدة في المكتب ويستخدمها في العمل الروتيني، لكنه يتحوّل إلى أداة غير معتمدة حين تكون أسرع أو غير متاحة له المعتمدة في تلك اللحظة.",
          en: "Knows the firm's list of approved tools and uses them for routine work, but switches to an unapproved one when it's faster or the approved tool isn't available to him right then.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم أداة الذكاء الاصطناعي المعتمدة في المكتب لصياغة إشعار فسخ عقد إيجار، لكنه يلجأ لأداة شخصية حين تتعطّل الأداة المعتمدة قبل موعد التسليم.",
            en: "Uses the firm's approved AI tool to draft a lease-termination notice, but resorts to a personal one when the approved tool goes down before the deadline.",
          },
          {
            ar: "يفتح حسابًا في أداة سحابية عامة لمشاركة مستند موكّل بسرعة مع زميل خارج المكتب.",
            en: "Opens a general cloud-storage account to quickly share a client document with a colleague outside the office.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتبر انقطاع الأداة المعتمدة عذرًا كافيًا لتجاوز السياسة.",
            en: "Treats an approved-tool outage as sufficient excuse to bypass policy.",
          },
          {
            ar: "يشارك مستندًا عبر أداة غير معتمدة \"لمرة واحدة فقط\"، مكرِّرًا هذا المبرّر في كل مرّة.",
            en: "Shares a document via an unapproved tool 'just this once,' repeating the same justification each time.",
          },
        ],
        successCriteria: [
          {
            ar: "العمل الروتيني يمرّ في الغالب عبر الأدوات المعتمدة.",
            en: "Routine work mostly passes through approved tools.",
          },
          {
            ar: "الانحراف عن السياسة نادر وليس نمطًا يوميًا.",
            en: "Deviation from policy is rare, not a daily pattern.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ استخدام يُظهر الاعتماد الأساسي على الأدوات المعتمدة مع استثناء موثّق واحد.",
            en: "A usage log showing primary reliance on approved tools with one documented exception.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يميّز بوضوح فئات المعلومات التي لا يجوز إدخالها أبدًا في أي أداة غير معتمدة — هوية الموكّل، الوقائع المشمولة بالسرية، تفاصيل قضية لم تُرفع بعد — ويطبّق هذا التمييز باستمرار بصرف النظر عن الأداة أو الضغط.",
          en: "Clearly distinguishes the categories of information that must never go into any unapproved tool — client identity, privileged facts, details of a not-yet-filed matter — and applies that distinction consistently regardless of the tool or the pressure.",
        },
        observableBehaviors: [
          {
            ar: "يرفض إدخال اسم الشركة المتنازعة ورقم القضية في أداة بحث عامة، ويستخدم بدلًا من ذلك وصفًا مجرَّدًا للمسألة القانونية فقط.",
            en: "Refuses to enter the disputing company's name and case number into a general search tool, using only an abstract description of the legal question instead.",
          },
          {
            ar: "يمتنع عن مناقشة تفاصيل صفقة استحواذ لم تُعلن بعد مع أي أداة خارج بيئة المكتب المعتمدة، حتى وصفًا عامًا.",
            en: "Refuses to discuss any details — even generic ones — of an unannounced acquisition deal with any tool outside the firm's approved environment.",
          },
        ],
        commonMistakes: [
          {
            ar: "يظن أن حذف الاسم وحده كافٍ، رغم بقاء تفاصيل تكشف الهوية بوضوح كرقم قضية أو مبلغ فريد.",
            en: "Thinks removing just the name is enough, even though other details — a case number, a unique amount — still clearly identify the party.",
          },
          {
            ar: "يطبّق الحذر على الملفّات الكبيرة فقط ويتساهل مع الملفّات \"الصغيرة\".",
            en: "Applies caution only to big matters and goes easy on 'small' ones.",
          },
        ],
        successCriteria: [
          {
            ar: "لا بيانات من الفئات المحظورة دخلت أداة غير معتمدة في العينة المراجَعة.",
            en: "No prohibited-category data entered an unapproved tool in the sample reviewed.",
          },
          {
            ar: "التمييز بين الفئات مطبَّق بثبات.",
            en: "The distinction between categories is applied consistently.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مثال على إدخال مصاغ بعناية لمسألة قانونية دون أي عنصر يكشف الهوية.",
            en: "An example of carefully abstracted input for a legal question with no identifying element.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يرفض استخدام أي أداة — معتمدة أو غير معتمدة — حين تكون طبيعة المهمّة نفسها غير مناسبة لها، حتى تحت ضغط موعد نهائي وشيك، ويجد بديلًا يدويًا بدل قبول المخاطرة.",
          en: "Refuses to use any tool — approved or not — when the nature of the task itself is unsuited to it, even under an imminent deadline, and finds a manual alternative instead of accepting the risk.",
        },
        observableBehaviors: [
          {
            ar: "يرفض تلخيص وثيقة تسوية بالغة السرية بالأداة المعتمدة في المكتب نفسها، لأن بند السرية في الاتفاق يمنع أي مشاركة خارج فريق التفاوض المباشر، ويراجعها يدويًا رغم ضيق الوقت.",
            en: "Refuses to summarize a highly confidential settlement document with the firm's own approved AI tool, because the agreement's confidentiality clause bars sharing outside the direct negotiating team, and reviews it manually despite the time pressure.",
          },
          {
            ar: "يؤجّل تسليم مسودة ساعة كاملة بدل استخدام أداة ضغط ملفات غير مفحوصة أمنيًا قبل الإرسال.",
            en: "Delays a draft's delivery by a full hour rather than using a security-unvetted file-compression tool before sending.",
          },
        ],
        commonMistakes: [
          {
            ar: "يخلط بين \"الأداة معتمدة عمومًا\" و\"الأداة مناسبة لهذه المهمّة تحديدًا\".",
            en: "Conflates 'the tool is generally approved' with 'the tool is right for this specific task.'",
          },
          {
            ar: "يتنازل عن رفضه حين يضغط عليه المشرف مباشرة، رغم معرفته بالمخاطرة.",
            en: "Backs down from his refusal when a supervisor pushes directly, despite knowing the risk.",
          },
        ],
        successCriteria: [
          {
            ar: "القرار بعدم الاستخدام اتُّخذ ونُفِّذ فعليًا رغم الضغط الزمني.",
            en: "The decision not to use the tool was made and actually held despite the time pressure.",
          },
          {
            ar: "البديل اليدوي أنجز المهمّة دون أي خرق للسرية.",
            en: "The manual alternative completed the task without any breach of confidentiality.",
          },
        ],
        evidenceRequired: [
          {
            ar: "حالة موثَّقة لرفض استخدام أداة تحت ضغط موعد نهائي، مع البديل الذي اعتُمد.",
            en: "A documented case of refusing tool use under deadline pressure, with the alternative that was used.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يراجع مع الفريق أو الموكّل حساسية أداة رقمية جديدة قبل اعتمادها على ملف معيّن، ويدرّب الزملاء الأصغر على التمييز بين المعلومات القابلة للإدخال وغير القابلة له.",
          en: "Reviews a new digital tool's sensitivity with the team or client before adopting it on a particular matter, and coaches junior colleagues on distinguishing enterable from non-enterable information.",
        },
        observableBehaviors: [
          {
            ar: "يسأل موكّلًا صراحة عن موافقته على استخدام أداة الذكاء الاصطناعي المعتمدة في المكتب على ملف تأسيس شركة حسّاس قبل البدء بالعمل.",
            en: "Explicitly asks a client for consent to use the firm's approved AI tool on a sensitive company-formation matter before starting work.",
          },
          {
            ar: "يراجع مع متدرّب مسودة أدخل فيها تفاصيل تكشف هوية موكّل بالخطأ، ويشرح له كيف كان يجب تجريدها.",
            en: "Reviews with a trainee a draft where identifying client details were mistakenly entered, and explains how it should have been stripped.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفترض موافقة الموكّل ضمنًا دون سؤاله فعليًا.",
            en: "Assumes the client's consent implicitly without actually asking.",
          },
          {
            ar: "يصحّح خطأ المتدرّب بنفسه دون أن يعلّمه كيف يتفادى تكراره.",
            en: "Fixes the trainee's mistake himself without teaching him how to avoid repeating it.",
          },
        ],
        successCriteria: [
          {
            ar: "موافقة الموكّل موثَّقة حيث استُخدمت أداة على ملفه الحسّاس.",
            en: "Client consent is documented wherever a tool was used on his sensitive matter.",
          },
          {
            ar: "متدرّب واحد على الأقل تحسّن تمييزه بين البيانات بعد التدريب.",
            en: "At least one trainee improved his ability to distinguish data categories after coaching.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ موافقة موكّل وسجلّ تدريب زميل على التمييز بين فئات البيانات.",
            en: "A client-consent record and a record of coaching a colleague on distinguishing data categories.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع للمكتب سياسة معتمدة تصنّف الأدوات والبيانات حسب الحساسية، وتمنح صلاحية الرفض الفردي دون عقاب حين تقتضي الحالة ذلك، ويقيس أثرها على حوادث تسريب البيانات.",
          en: "Establishes an adopted firm policy classifying tools and data by sensitivity, grants individual authority to decline a tool without penalty when warranted, and measures its effect on data-leakage incidents.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد مع الإدارة مصفوفة تربط كل نوع بيانات — هوية موكّل، وقائع مشمولة بالسرية، تفاصيل ملف غير مرفوع — بمستوى الأداة المسموح استخدامها.",
            en: "Adopts with management a matrix linking each data type — client identity, privileged facts, unfiled-matter details — to the permitted tool tier.",
          },
          {
            ar: "يقرّ صراحة أن رفض محامٍ استخدام أداة تحت ضغط الوقت لا يُحاسَب عليه، ويحمي من طبّق هذا الرفض فعليًا أمام الإدارة.",
            en: "Explicitly rules that a lawyer's refusal to use a tool under time pressure is never penalized, and backs up whoever actually exercised that refusal in front of management.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضع المصفوفة بتفصيل مبالَغ فيه يصعب تطبيقه فعليًا في يوم عمل عادي.",
            en: "Makes the matrix so overly detailed that it's impractical to apply on an ordinary workday.",
          },
          {
            ar: "يعلن حماية الرفض لكن يحاسب فعليًا من استخدمها عند أول موعد نهائي ضائع.",
            en: "Announces protection for refusal but actually penalizes whoever uses it the first time a deadline is missed.",
          },
        ],
        successCriteria: [
          {
            ar: "المصفوفة معتمدة ومطبَّقة فعليًا عبر المكتب.",
            en: "The matrix is adopted and genuinely applied across the firm.",
          },
          {
            ar: "تقرير سنوي يربط السياسة بانخفاض حوادث تسريب البيانات أو الاستخدام غير المصرَّح به.",
            en: "An annual report links the policy to a decline in data-leakage or unauthorized-use incidents.",
          },
        ],
        evidenceRequired: [
          {
            ar: "المصفوفة المعتمدة ووثيقة حماية الرفض الفردي.",
            en: "The adopted matrix and the document protecting individual refusal.",
          },
          {
            ar: "تقرير سنوي بعدد حوادث تسريب البيانات قبل السياسة وبعدها.",
            en: "An annual report on the number of data-leakage incidents before and after the policy.",
          },
        ],
      },
    ],
    sourceIds: ["src.modernize-your-law-firm", "src.legal-ops-kpis", "src.governance-raci", "src.rule-of-law"],
    confidence: 0.86,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.responsible-ai-use"],
  },
  {
    id: "skill.ai-collaborative-partner",
    domainId: "dom.digital-ai",
    name: {
      ar: "التعاون الذكي مع أدوات الذكاء الاصطناعي",
      en: "Working With AI as a Collaborative Partner",
    },
    synonyms: [
      "AI task allocation",
      "human-AI division of labor",
      "knowing what to delegate to AI",
      "AI as force multiplier",
      "تقسيم العمل مع الذكاء الاصطناعي",
    ],
    definition: {
      ar: "تصميم تقسيم عمل واعٍ بين المحامي وأدوات الذكاء الاصطناعي: تكليف الأداة بما تُتقنه من سرعة وحجم ومطابقة أنماط، والاحتفاظ شخصيًا بإدارة العلاقة مع الموكّل والتوليف الإبداعي والمسؤولية المهنية النهائية عن كل ما يصدر — إلى جانب التحقّق من كل ما تنتجه الأداة، لا بدلًا منه.",
      en: "Designing a deliberate division of labor between the lawyer and AI tools: handing the tool the work that rewards speed, scale and pattern-matching, while personally keeping client-relationship management, creative synthesis and final professional accountability for everything that goes out — alongside verifying whatever the tool produces, not instead of it.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على تقسيم العمل بذكاء بينه وبين أدوات الذكاء الاصطناعي.",
          en: "No evidence has been collected yet on the learner's ability to divide work deliberately between himself and AI tools.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يستخدم الذكاء الاصطناعي أو يتجاهله حسب رد فعل اللحظة لا حسب تفكير في طبيعة المهمّة، فيسند إليه أحيانًا ما يحتاج حكمًا شخصيًا، وينجز يدويًا في أحيان أخرى ما كانت الأداة لتُنجزه أسرع.",
          en: "Uses or avoids AI by momentary reflex rather than by thinking about what the task actually needs — sometimes handing it work that calls for personal judgment, other times doing by hand what the tool could finish faster.",
        },
        observableBehaviors: [
          {
            ar: "يطلب من الأداة صياغة كامل رسالة اعتذار لموكّل غاضب من تأخّر التسليم، ويرسلها كما هي دون أن يتّصل به شخصيًا.",
            en: "Asks the tool to draft an entire apology email to a client angry about a late delivery, and sends it almost unchanged instead of calling the client himself.",
          },
          {
            ar: "يعيد كتابة نموذج بند فسخ إيجار متكرر يدويًا في كل مرة رغم وجود أداة معتمدة تنجزه في ثوانٍ.",
            en: "Manually retypes a recurring lease-termination clause every time, even though an approved tool could produce it in seconds.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتعامل مع المهمّة كوحدة واحدة يُسندها كلّها للأداة أو يُنجزها كلّها بنفسه، دون تقسيمها.",
            en: "Treats a task as one indivisible block — all to the tool or all by hand — instead of splitting it.",
          },
          {
            ar: "يظن أن الوقت الذي توفّره الأداة في جزء من العمل لا يُستثمر في الجزء الذي يحتاج انتباهه الشخصي.",
            en: "Assumes time the tool saves on one part of the work isn't meant to be reinvested in the part that needs his personal attention.",
          },
        ],
        successCriteria: [
          {
            ar: "يقرّ حين يُسأل بأن بعض المهام تناسب الأداة وبعضها لا يناسبها.",
            en: "Acknowledges when asked that some tasks suit the tool and others don't.",
          },
          {
            ar: "لم يُسند بعد للأداة مهمّة كاملة تتطلّب إدارة علاقة مع موكّل من أولها لآخرها.",
            en: "Has not yet handed the tool an entire task that requires managing a client relationship start to finish.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مثال على قرار استخدام غير متّسق: مهمّة أُسندت للأداة كاملة كان يجب الاحتفاظ بجزء منها، أو مهمّة أُنجزت يدويًا بالكامل كانت الأداة لتسرّعها.",
            en: "An example of an inconsistent use decision — a task fully handed to the tool that needed a human part kept back, or a fully manual task the tool could have sped up.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يبدأ بتقسيم المهمّة الواحدة فعليًا إلى جزء يناسب سرعة الأداة وحجمها ومطابقة الأنماط فيها، وجزء يحتاج حكمًا شخصيًا أو علاقة مباشرة مع الموكّل — لكنّ التقسيم لا يكون دائمًا في مكانه الصحيح.",
          en: "Begins actually splitting a single task into a part suited to the tool's speed, scale and pattern-matching, and a part that needs personal judgment or a direct client relationship — but the split isn't always drawn in the right place.",
        },
        observableBehaviors: [
          {
            ar: "في مراجعة عناية واجبة لأربعين عقدًا، يكلّف الأداة بفرز البنود القياسية سريعًا، ويراجع بنفسه البنود التي وسمتها الأداة كخطر، ويكتب ملخّص المخاطر للموكّل شخصيًا.",
            en: "In a due-diligence review of forty contracts, has the tool do the fast first-pass flagging of standard clauses, but reviews the flagged risk items himself and writes the client-facing risk summary personally.",
          },
          {
            ar: "في خطاب إنهاء خدمة موظف، يصوغ الفقرات الحسّاسة بنفسه أولًا، ثم يطلب من الأداة مراجعة الاتساق في الصياغة والتنسيق فقط.",
            en: "For an employee-termination letter, drafts the sensitive paragraphs himself first, then asks the tool only to check consistency of wording and formatting.",
          },
        ],
        commonMistakes: [
          {
            ar: "يسند أحيانًا للأداة الحكم على درجة الخطورة نفسها لا مجرّد فرز الأنماط الأولي.",
            en: "Sometimes hands the tool the actual risk judgment itself, not just the initial pattern-sorting.",
          },
          {
            ar: "يقضي وقتًا في صياغة نموذج متكرّر كانت الأداة لتنتجه بالسرعة نفسها، فيهدر الوقت الذي وفّره في مكان آخر.",
            en: "Spends time drafting a recurring template the tool could produce just as fast, wasting the time saved elsewhere.",
          },
        ],
        successCriteria: [
          {
            ar: "أغلب حالات التقسيم في العيّنة المراجَعة تفصل بشكل صحيح بين العمل الآلي والعمل الذي يحتاج حكمًا.",
            en: "Most split-work cases in the reviewed sample correctly separate mechanical work from work that needs judgment.",
          },
          {
            ar: "المهمّة التي تتطلّب إدارة علاقة أو مسؤولية مباشرة بقيت بيد المحامي.",
            en: "The task requiring relationship management or direct accountability stayed with the lawyer.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مثال على مهمّة مقسَّمة فعليًا مع نتاج كل جزء منها — ما أنتجته الأداة وما أنجزه المحامي شخصيًا.",
            en: "An example of an actually split task with the output of each half — what the tool produced and what the lawyer did personally.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يطبّق طريقة عمل ثابتة: يقرّر تقسيم العمل قبل البدء بالصياغة لا أثناءها، ويطبّق القرار باتساق عبر ملفّات مختلفة، ويعيد التوزيع إذا تبيّن أثناء العمل أن جزءًا أُسند خطأً للأداة.",
          en: "Applies a repeatable method: decides the division of labor before starting to draft, not partway through, applies the decision consistently across different matters, and reallocates a part if it turns out mid-task that it was wrongly handed to the tool.",
        },
        observableBehaviors: [
          {
            ar: "قبل البدء بدفعة من إشعارات شيكات مرتجعة، يقرّر مسبقًا: تصوغ الأداة رسائل المطالبة الأولى القياسية، ويتولّى هو شخصيًا كل مكالمة مع الموكّلين وأي تسوية تُتَّفق عليها.",
            en: "Before starting a batch of bounced-cheque notices, decides upfront: the tool drafts the standard initial demand letters, while he personally handles every client call and any negotiated settlement.",
          },
          {
            ar: "في منتصف صياغة بند علاقات الشركاء في عقد تأسيس شركة عائلية، يلاحظ أن البند يحتاج فهمًا دقيقًا لديناميكيات العائلة، فيسحبه من الأداة ويكمله بنفسه.",
            en: "Midway through drafting a shareholder-relations clause in a family company-formation agreement, notices the clause needs a fine reading of family dynamics, and takes it back from the tool to finish himself.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقرّر تقسيم العمل مرة واحدة لكل نوع ملف، لا حسب مضمون كل مهمّة فعليًا.",
            en: "Decides the division of labor once per matter type instead of based on what each actual task requires.",
          },
          {
            ar: "لا يستطيع تبرير سبب التقسيم حين يُسأل عنه، فيبدو القرار عشوائيًا.",
            en: "Can't explain the reason for the split when asked, so the decision looks arbitrary.",
          },
        ],
        successCriteria: [
          {
            ar: "قرار تقسيم العمل مُدوَّن أو معلَن قبل بدء العمل الفعلي.",
            en: "The division-of-labor decision is documented or stated before the actual work begins.",
          },
          {
            ar: "أعاد توزيع جزء من العمل حين تبيّن أنه يحتاج حكمًا أكبر مما كان متوقَّعًا.",
            en: "Reallocated part of the work when it turned out to need more judgment than expected.",
          },
        ],
        evidenceRequired: [
          {
            ar: "خطة تقسيم عمل مُعلنة لملف حقيقي، مع مثال موثَّق واحد على إعادة توزيع أثناء العمل.",
            en: "A stated division-of-labor plan for a real matter, plus one documented mid-task reallocation.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يشرح تقسيم العمل بوضوح لموكّل أو مشرف حين يُسأل — لماذا أُسند جزء للأداة ولماذا احتُفظ بجزء آخر شخصيًا — دون أن يبالغ في موثوقية الأداة أو يقلّل من مسؤوليته هو عن كل ما يصدر.",
          en: "Explains the division of labor plainly to a client or supervisor when asked — why a part went to the tool and why another part was kept personally — without overstating the tool's reliability or understating his own responsibility for everything that goes out.",
        },
        observableBehaviors: [
          {
            ar: "يوضّح لموكّل أن المسودة الأولى لاتفاقية عدم إفصاح قياسية أُعدّت بمساعدة الأداة توفيرًا للوقت، لكنه راجع كل بند فيها ويبقى مسؤولًا عنها بالكامل.",
            en: "Explains to a client that the first draft of a standard NDA was AI-assisted for speed, but that he personally reviewed every clause and remains fully responsible for it.",
          },
          {
            ar: "يشرح للشريك المشرف سبب استعانته بالأداة لتلخيص مئتي صفحة من مستندات الكشف، مقابل توليه شخصيًا إعداد أسئلة الاستجواب.",
            en: "Explains to the supervising partner why he used the tool to summarize two hundred pages of discovery documents, versus personally preparing the deposition questions.",
          },
        ],
        commonMistakes: [
          {
            ar: "يُبرز الجزء الذي أنجزته الأداة ليبدو أسرع، ويقلّل من ذكر مراجعته الشخصية.",
            en: "Highlights the part the tool did to look faster, and downplays mentioning his own review.",
          },
          {
            ar: "يشرح تقسيم العمل مرة واحدة ثم يطبّقه على ملفات لاحقة مشابهة دون مراجعته من جديد.",
            en: "Explains the division of labor once, then applies it to similar later matters without revisiting it.",
          },
        ],
        successCriteria: [
          {
            ar: "الموكّل أو المشرف قادر على إعادة ذكر ما أنجزته الأداة وما أنجزه المحامي بدقة بعد الشرح.",
            en: "The client or supervisor can accurately repeat what the tool did and what the lawyer did after the explanation.",
          },
          {
            ar: "الشرح لا يوحي بموثوقية غير مشروطة للأداة ولا يقلّل من مسؤولية المحامي الشخصية.",
            en: "The explanation neither implies unconditional trust in the tool nor understates the lawyer's personal responsibility.",
          },
        ],
        evidenceRequired: [
          {
            ar: "شرح موثَّق قُدِّم لموكّل أو مشرف عن تقسيم عمل فعلي في ملف حقيقي.",
            en: "A documented explanation given to a client or supervisor about an actual division of labor on a real matter.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يصمّم تقسيم العمل لنوع ملف كامل أو لسير عمل فريق، لا لمهمّة واحدة فقط، ويختبره في مقابل ما يحدث فعليًا، ويعدّله حين تتغيّر قدرات الأداة أو تركيبة الفريق — مع إبقاء ممارسات التحقّق والإفصاح مرتبطة بكل جزء يُسند للأداة.",
          en: "Designs the division of labor for an entire matter type or a team's workflow, not just one task, tests it against what actually happens, and adjusts it as the tool's capability or the team changes — while keeping verification and disclosure practices tied to whatever gets delegated.",
        },
        observableBehaviors: [
          {
            ar: "يقترح على الفريق تقسيمًا موحّدًا لملفات نزاعات عقود المقاولين: تصوغ الأداة الملخّص الأولي للمطالبات، ويتولّى المحامي المسؤول التحقّق من كل رقم والتفاوض مع الطرف الآخر.",
            en: "Proposes a standard split to the team for contractor-payment dispute matters: the tool drafts the initial claims summary, while the responsible lawyer verifies every figure and handles negotiation with the other side.",
          },
          {
            ar: "يلاحظ أن متدرّبين يتركون الأداة تحدّد لهجة رسائل الموكّلين بالكامل، فيعيد تدريبهم على إبقاء قرار اللهجة بأيديهم واستخدام الأداة للتنسيق فقط.",
            en: "Notices trainees letting the tool decide client-email tone entirely, and retrains them to keep the tone decision themselves while using the tool only for formatting.",
          },
        ],
        commonMistakes: [
          {
            ar: "يصمّم سير العمل دون ربطه بإجراءات التحقّق والإفصاح المعتمدة في المكتب، فتنشأ فجوة.",
            en: "Designs the workflow without linking it to the firm's adopted verification and disclosure procedures, leaving a gap.",
          },
          {
            ar: "يترك سير العمل ثابتًا دون مراجعة رغم تغيّر قدرات الأداة المستخدمة.",
            en: "Leaves the workflow unchanged without review even as the tool's capabilities change.",
          },
        ],
        successCriteria: [
          {
            ar: "تقسيم العمل على مستوى سير العمل معتمد ومطبَّق في أكثر من ملف من النوع نفسه.",
            en: "The workflow-level division of labor is adopted and applied across more than one matter of the same type.",
          },
          {
            ar: "نقاط التحقّق مرتبطة فعليًا بكل جزء من العمل مُسند للأداة ضمن سير العمل.",
            en: "Verification checkpoints are genuinely attached to every part of the work delegated to the tool within the workflow.",
          },
        ],
        evidenceRequired: [
          {
            ar: "وثيقة تقسيم عمل لنوع ملف كامل تتضمّن نقاط التحقّق، مع مثال موثَّق على تعديلها بعد المراجعة.",
            en: "A division-of-labor document for a full matter type that includes verification checkpoints, with a documented example of it being revised after review.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع للمكتب برنامج تدريب أو سياسة توضح كيفية تقسيم العمل القانوني بين المحامي والذكاء الاصطناعي — تعليم المتدرّبين تمييز المهام الآمنة للتفويض عن المهام التي يجب أن تبقى بحكم بشري — مع تأكيد صريح أن هذا التقسيم لا يخفّف مسؤولية المحامي الفردية عن أي شيء يصدر.",
          en: "Establishes a firm-wide training program or policy explaining how to divide legal work between lawyer and AI — teaching trainees to distinguish tasks safe to delegate from tasks that must stay with human judgment — with an explicit statement that this division never reduces the individual lawyer's responsibility for anything that goes out.",
        },
        observableBehaviors: [
          {
            ar: "يقود جلسة تدريب للمحامين الجدد حول كيفية تقرير، مهمّة بمهمّة، ما يُسند للأداة وما يُحتفظ به، مستخدمًا أمثلة حقيقية من عمل المكتب.",
            en: "Leads a training session for new lawyers on how to decide, task by task, what to hand to AI and what to keep, using real examples from the firm's work.",
          },
          {
            ar: "يكتب دليلًا للمكتب يقرن كل نوع مهمّة تناسب الأداة بتذكير صريح بأن المحامي يبقى مسؤولًا عنها كاملة، ويُعتمد عبر الأقسام.",
            en: "Writes a firm guideline pairing each task type suited to the tool with an explicit reminder that the lawyer remains fully responsible for it, adopted across departments.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعلّم تقسيم العمل كوسيلة لزيادة الكفاءة فقط، دون ربطه بواجب التحقّق والإفصاح الذي يبقى قائمًا على كل ما يُسند للأداة.",
            en: "Teaches the division of labor purely as an efficiency technique, without tying it to the verification and disclosure duty that still applies to everything delegated.",
          },
          {
            ar: "يضع دليلًا واحدًا ثابتًا ولا يحدّثه مع تطوّر قدرات الأداة، فيتبع الفريق تقسيمًا قديمًا.",
            en: "Sets a single fixed guideline and never updates it as the tool's capabilities evolve, leaving the team following an outdated split.",
          },
        ],
        successCriteria: [
          {
            ar: "برنامج التدريب أو الدليل معتمد رسميًا ومطبَّق عبر المكتب.",
            en: "The training program or guideline is formally adopted and applied across the firm.",
          },
          {
            ar: "المتدرّبون يطبّقون تقسيمًا صحيحًا على مهام جديدة بعد التدريب، مع بقاء التحقّق خطوة إلزامية.",
            en: "Trainees apply a correct division on new tasks after training, with verification remaining a mandatory step.",
          },
        ],
        evidenceRequired: [
          {
            ar: "الدليل أو مادة التدريب المعتمدة، مع دليل على تطبيق المتدرّبين الصحيح له.",
            en: "The adopted guideline or training material, with evidence of trainees applying it correctly.",
          },
          {
            ar: "ربط صريح موثَّق بين تقسيم العمل وواجب التحقّق والإفصاح القائم أصلًا.",
            en: "An explicit documented link between the division of labor and the pre-existing verification and disclosure duty.",
          },
        ],
      },
    ],
    sourceIds: ["src.smarter-collaboration"],
    confidence: 0.8,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.responsible-ai-use"],
  },
];
