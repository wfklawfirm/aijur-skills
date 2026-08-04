import type { SkillDef } from "../types";

// -----------------------------------------------------------------------------
// dom.firm-operations — three additional skills
//
// Companion file to skills.ts. Does not redefine skill.matter-intake,
// skill.file-organisation, skill.workflow-design or skill.knowledge-management,
// which already exist in skills.ts. Matches the depth of
// skills-teamwork-leadership.ts and skills-business-development.ts: 7 mastery
// levels (0-6), each with definition / observableBehaviors / commonMistakes /
// successCriteria / evidenceRequired, bilingual (Arabic primary), grounded in
// concrete Arab-market legal scenarios.
//
// These three skills fill gaps the domain description names explicitly
// ("ضبط جودة المخرجات قبل خروجها" — checking output quality before it leaves)
// but that skill.file-organisation, skill.workflow-design and
// skill.knowledge-management do not themselves cover: the final proof-read of
// a work product before it leaves the building, the writing of defensible
// time entries and billing narratives, and the clean handover or closure of a
// matter. skill.output-quality-control is deliberately narrower than
// dom.professional-judgment's skill.quality-control: it is the concrete,
// checklist-level proof-reading discipline (names, dates, figures, citations,
// formatting, cross-references) rather than the broader professional-judgment
// question of how to design a risk-proportionate review system or handle a
// discovered error with a client.
// -----------------------------------------------------------------------------

export const FIRM_OPERATIONS_SKILLS: SkillDef[] = [
  {
    id: "skill.output-quality-control",
    domainId: "dom.firm-operations",
    name: { ar: "التدقيق النهائي قبل خروج العمل", en: "Output Quality Control" },
    synonyms: [
      "final proof-read",
      "pre-send checklist",
      "catching embarrassing mistakes",
      "sanity check before filing",
      "المراجعة الأخيرة",
    ],
    definition: {
      ar: "فحص أي مسوَّدة أو مذكّرة أو رسالة أو مستند قبل خروجه من المكتب بحثًا عن الأخطاء التي يخجل منها المحامي المشرف: اسم خاطئ، تاريخ متعارض، رقم غير مطابق، مرجع قانوني منسوخ من ملف آخر، أو صياغة تناقض نفسها.",
      en: "Checking any draft, memo, letter or filing before it leaves the firm for the mistakes a supervising lawyer would be embarrassed by: a wrong name, a contradicting date, a figure that doesn't match, a legal reference copied from another file, or wording that contradicts itself.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على تدقيق عمله قبل إخراجه.",
          en: "No evidence has been collected yet on the learner's ability to proof his own work before release.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يرسل العمل فور الانتهاء منه دون قراءة أخيرة، معتمدًا على أنه كتبه بعناية أثناء الصياغة.",
          en: "Sends the work the moment he finishes it, without a final read, trusting that he was careful while drafting.",
        },
        observableBehaviors: [
          {
            ar: "يرسل مذكّرة استئناف تحمل اسم موكّل من ملف سابق بقي في نموذج لم يُعدَّل.",
            en: "Sends an appeal memo carrying a previous client's name left over in an unedited template.",
          },
          {
            ar: "يكتشف الشريك المشرف تاريخ جلسة خاطئًا في خطاب أُرسل للموكّل بالفعل.",
            en: "The supervising partner discovers a wrong hearing date in a letter already sent to the client.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفترض أن الكتابة الجيدة تغني عن المراجعة.",
            en: "Assumes good drafting makes a review unnecessary.",
          },
          {
            ar: "يعدّل بندًا واحدًا في مستند طويل ولا يتحقّق من انعكاسه في بقية النص.",
            en: "Edits one clause in a long document and never checks whether the change is reflected elsewhere in the text.",
          },
        ],
        successCriteria: [
          {
            ar: "العمل خرج مكتملًا ولو تضمّن أخطاء اكتُشفت لاحقًا.",
            en: "The work went out complete, even if it contained errors discovered afterward.",
          },
          {
            ar: "لم ينكر الخطأ حين أُشير إليه.",
            en: "Did not deny the mistake once it was pointed out.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مستند صادر يحتوي خطأً لم يُكتشف قبل الإرسال.",
            en: "An outgoing document containing an error not caught before it was sent.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يقرأ العمل مرّة أخرى قبل الإرسال، لكن قراءة سريعة تركّز على المعنى العام لا على التفاصيل الدقيقة كالأرقام والأسماء.",
          en: "Reads the work again before sending, but a quick pass focused on overall sense rather than fine details like figures and names.",
        },
        observableBehaviors: [
          {
            ar: "يعيد قراءة عقد توريد ليتأكّد أن الفقرات مفهومة، فيفوته اختلاف بسيط في تاريخ التسليم بين بندين.",
            en: "Re-reads a supply contract to make sure the clauses make sense, and misses a small discrepancy in the delivery date between two clauses.",
          },
          {
            ar: "يتحقّق من اسم المرسل إليه في البريد الإلكتروني لكن لا يفتح المرفق للتأكّد من مطابقته.",
            en: "Checks the addressee's name on the email but doesn't open the attachment to confirm it matches.",
          },
        ],
        commonMistakes: [
          {
            ar: "يراجع فور الانتهاء من الكتابة دون فاصل زمني، فلا يرى أخطاءه الخاصة.",
            en: "Reviews immediately after finishing the draft with no gap in between, so he cannot see his own mistakes.",
          },
          {
            ar: "يقرأ النص كاملًا لكن يهمل الجداول والأرقام لأنها \"مجرد بيانات\".",
            en: "Reads the full text but skips tables and figures, treating them as 'just data.'",
          },
        ],
        successCriteria: [
          {
            ar: "قراءة ثانية حصلت فعلًا قبل الإرسال.",
            en: "A second read genuinely happened before sending.",
          },
          {
            ar: "الأخطاء الظاهرة في الصياغة العامة أُصلحت.",
            en: "Errors visible in the general wording were fixed.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نسختان من مستند، قبل قراءة ثانية وبعدها، بتعديلات ظاهرة على الصياغة فقط.",
            en: "Two versions of a document, before and after a second read, with visible edits limited to wording.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يستخدم قائمة تحقّق ثابتة تشمل الأسماء والتواريخ والأرقام والمراجع القانونية قبل إخراج أي عمل، لا القراءة العامة وحدها.",
          en: "Uses a fixed checklist covering names, dates, figures and legal references before releasing any work, not general reading alone.",
        },
        observableBehaviors: [
          {
            ar: "يقارن كل اسم طرف ورد في مذكّرة دفاع بعقد التأسيس الأصلي بندًا بندًا.",
            en: "Cross-checks every party name in a defence memo against the original incorporation contract, item by item.",
          },
          {
            ar: "يتحقّق أن رقم المادة المذكورة في مذكّرة تطابق فعلًا رقمها في نص القانون الحالي لا نسخة قديمة.",
            en: "Verifies that an article number cited in a memo actually matches the current text of the law, not an old version.",
          },
        ],
        commonMistakes: [
          {
            ar: "يؤشّر على بنود القائمة دون تنفيذها فعلًا تحت ضغط الوقت.",
            en: "Ticks off the checklist items without actually doing them, under time pressure.",
          },
          {
            ar: "يطبّق القائمة على المستندات الطويلة فقط ويهملها في الرسائل القصيرة.",
            en: "Applies the checklist only to long documents and skips it on short letters.",
          },
        ],
        successCriteria: [
          {
            ar: "القائمة مطبّقة على كل عمل صادر بصرف النظر عن طوله.",
            en: "The checklist is applied to every outgoing piece of work regardless of length.",
          },
          {
            ar: "لا خطأ في اسم أو تاريخ أو رقم أو مرجع قانوني في العينة المراجَعة.",
            en: "No error in a name, date, figure or legal reference in the sample reviewed.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة تحقّق معبّأة فعليًا لمستند صادر حديثًا.",
            en: "A checklist genuinely completed for a recently issued document.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يكتشف تناقضًا داخليًا خفيًا بين أجزاء العمل نفسه، لا مجرد خطأ إملائي أو رقمي منفرد، ويصلحه قبل أن يراه المشرف أو الموكّل.",
          en: "Catches a hidden internal inconsistency between different parts of the work itself, not just an isolated typo or figure, and fixes it before the supervisor or client ever sees it.",
        },
        observableBehaviors: [
          {
            ar: "يلاحظ أن ملخّص التنفيذي لعرض تسوية يذكر مبلغًا يختلف عن المبلغ الوارد في جدول الحساب المرفق بالعرض نفسه.",
            en: "Notices that a settlement proposal's executive summary states an amount different from the figure in the calculation table attached to that same proposal.",
          },
          {
            ar: "يكتشف أن مذكّرة الدفاع تستند في صفحتها الأولى إلى سبب قانوني وتستبعده ضمنًا في صفحتها الأخيرة.",
            en: "Discovers that a defence memo relies on one legal ground on its first page while implicitly abandoning it by the last page.",
          },
        ],
        commonMistakes: [
          {
            ar: "يراجع كل قسم على حدة دون مقارنة الأقسام ببعضها.",
            en: "Reviews each section on its own without comparing sections against each other.",
          },
          {
            ar: "يصلح التناقض في مكان واحد وينسى تعديله في مكان آخر يذكر الرقم نفسه.",
            en: "Fixes the inconsistency in one place and forgets to correct the same figure elsewhere it appears.",
          },
        ],
        successCriteria: [
          {
            ar: "التناقض اكتُشف وصُحّح قبل خروج العمل من المكتب.",
            en: "The inconsistency was caught and corrected before the work left the firm.",
          },
          {
            ar: "التصحيح انعكس في كل موضع ذكر فيه الرقم أو السبب المتناقض.",
            en: "The correction was reflected everywhere the inconsistent figure or ground appeared." ,
          },
        ],
        evidenceRequired: [
          {
            ar: "مستند بنسختين، يظهر فيه تناقض داخلي وتصحيحه الكامل.",
            en: "A document in two versions, showing an internal inconsistency and its complete correction.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني قائمة تحقّق خاصة لكل نوع عمل متكرّر في مجاله، ويطلب من زميل مراجعة العمل عالي المخاطر بدل الاعتماد على عينه وحدها.",
          en: "Builds a tailored checklist for each recurring type of work in his area, and asks a colleague to review high-risk output instead of relying on his own eye alone.",
        },
        observableBehaviors: [
          {
            ar: "يضع قائمة تحقّق مختلفة لعقود التوريد عن قائمة مذكّرات التحكيم، لأن أخطاء كل نوع مختلفة.",
            en: "Keeps a different checklist for supply contracts than for arbitration memos, because each type carries different failure points.",
          },
          {
            ar: "يطلب من زميل قراءة عرض تسوية بمبلغ كبير قبل إرساله، حتى لو راجعه هو مرّتين بنفسه.",
            en: "Asks a colleague to read a high-value settlement offer before sending it, even after reviewing it himself twice.",
          },
        ],
        commonMistakes: [
          {
            ar: "يطلب مراجعة الزميل قبل الموعد النهائي بدقائق فتصبح شكلية.",
            en: "Requests the colleague's review minutes before the deadline, turning it into a formality.",
          },
          {
            ar: "يستخدم القائمة نفسها لكل أنواع العمل فتفوتها أخطاء نوعية.",
            en: "Uses the same checklist for every type of work, so type-specific errors slip through." ,
          },
        ],
        successCriteria: [
          {
            ar: "قائمة تحقّق مخصّصة لكل نوع عمل رئيسي موجودة ومستخدمة.",
            en: "A tailored checklist for each principal work type exists and is in use.",
          },
          {
            ar: "مراجعة الزميل للعمل عالي المخاطر تمّت بوقت كافٍ قبل الإرسال.",
            en: "The colleague's review of high-risk work happened with enough time before sending.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمتا تحقّق مختلفتان لنوعي عمل، وسجلّ مراجعة زميل واحدة على الأقل.",
            en: "Two different checklists for two work types, and a record of at least one colleague review.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل ضبط الجودة قبل الإخراج معيارًا معلنًا في فريقه أو مكتبه، ويحلّل الأخطاء المتكرّرة ليعالج سببها لا مجرد كل حادثة على حدة.",
          en: "Makes pre-release quality control a declared standard for his team or firm, and analyses recurring errors to fix their root cause, not just each incident on its own.",
        },
        observableBehaviors: [
          {
            ar: "يجمع سجل الأخطاء التي اكتُشفت بعد الإرسال خلال سنة ويصنّفها حسب النوع والسبب.",
            en: "Compiles a year's log of errors discovered after release and classifies them by type and cause.",
          },
          {
            ar: "يعدّل إجراء الإصدار في المكتب بعد ملاحظة أن أغلب الأخطاء تحدث في الملفّات المسلَّمة قرب المهلة.",
            en: "Amends the firm's release procedure after noticing most errors occur in matters delivered near a deadline.",
          },
        ],
        commonMistakes: [
          {
            ar: "يلوم من ارتكب الخطأ الأخير بدل معالجة الظرف الذي أنتج معظم الأخطاء.",
            en: "Blames whoever made the latest mistake instead of addressing the condition producing most errors.",
          },
          {
            ar: "يقيس عدد قوائم التحقّق المستخدَمة لا انخفاض الأخطاء المكتشفة بعد الإصدار.",
            en: "Measures how many checklists are used rather than the drop in errors caught after release.",
          },
        ],
        successCriteria: [
          {
            ar: "معيار ضبط الجودة معتمد ومطبَّق عبر الفريق أو المكتب.",
            en: "The quality-control standard is adopted and applied across the team or firm.",
          },
          {
            ar: "تقرير سنوي يربط تعديلًا إجرائيًا بانخفاض فعلي في الأخطاء بعد الإصدار.",
            en: "An annual report links a procedural change to an actual drop in post-release errors.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ الأخطاء المصنَّف ووثيقة المعيار المعتمد.",
            en: "The classified error log and the document for the adopted standard.",
          },
          {
            ar: "تقرير سنوي بأثر التعديل الإجرائي على معدّل الأخطاء.",
            en: "An annual report on the procedural change's effect on the error rate.",
          },
        ],
      },
    ],
    sourceIds: ["src.legal-ops-kpis", "src.modernize-your-law-firm", "src.small-firm-roadmap", "src.governance-raci"],
    confidence: 0.86,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.file-organisation"],
  },
  {
    id: "skill.time-and-billing-narratives",
    domainId: "dom.firm-operations",
    name: { ar: "تسجيل الوقت وصياغة بيانات الفوترة", en: "Time and Billing Narratives" },
    synonyms: [
      "time entries",
      "billing descriptions",
      "defensible invoicing",
      "fee narrative writing",
      "بيانات الأتعاب",
    ],
    definition: {
      ar: "تسجيل الوقت فور إنجاز العمل، وصياغة بيان فوترة واضح ومحدَّد يفهمه الموكّل أو قاضٍ ناظر في نزاع أتعاب دون الحاجة لسؤال ماذا حدث فعلًا، بلا مصطلحات مبهمة أو تضخيم للوقت.",
      en: "Recording time as the work happens, and writing a clear, specific billing description that a client — or a court hearing a fee dispute — could read and understand exactly what was done, without vague jargon or inflated time.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على تسجيل الوقت وصياغة بيانات الفوترة.",
          en: "No evidence has been collected yet on the learner's ability to record time and write billing narratives.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يسجّل الوقت من الذاكرة في نهاية الأسبوع أو الشهر، فيقدّر ساعات العمل تقديرًا لا توثيقًا.",
          en: "Records time from memory at the end of the week or month, so hours are estimated rather than documented.",
        },
        observableBehaviors: [
          {
            ar: "يكتب \"مراجعة ملف\" لثلاث ساعات متفرقة عمل فيها على ملفات مختلفة خلال الأسبوع.",
            en: "Writes 'file review' for three scattered hours spent across different matters during the week.",
          },
          {
            ar: "يتذكّر أنه عمل على قضية معينة \"طويلاً\" دون تحديد عدد الساعات الفعلي.",
            en: "Recalls working on a particular case 'for a long time' without pinning down the actual number of hours.",
          },
        ],
        commonMistakes: [
          {
            ar: "يؤجّل التسجيل حتى نهاية الشهر فينسى تفاصيل معظم الأعمال.",
            en: "Puts off recording until month-end and forgets the detail of most of the work." ,
          },
          {
            ar: "يجمع وقت ملفّات مختلفة تحت بند واحد غامض.",
            en: "Lumps time from different matters under one vague entry.",
          },
        ],
        successCriteria: [
          {
            ar: "الوقت مسجّل ولو بتقدير تقريبي لا يخالف الواقع كليًا.",
            en: "Time is recorded, even if roughly estimated, without wholly contradicting reality.",
          },
          {
            ar: "لا فاتورة صدرت بلا أي سجلّ وقت خلفها.",
            en: "No invoice was issued with no time record behind it at all.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ وقت أسبوعي مكتوب من الذاكرة بعد انتهاء الأسبوع.",
            en: "A weekly time log written from memory after the week has ended.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يسجّل الوقت يوميًا بعبارات عامة تصف نوع النشاط، دون تفصيل كافٍ ليفهم القارئ ماذا فعل فعلًا.",
          en: "Records time daily using generic phrases describing the type of activity, without enough detail for a reader to understand what was actually done.",
        },
        observableBehaviors: [
          {
            ar: "يكتب \"عمل على العقد\" أو \"مراسلات\" كبند يومي ثابت لكل ملف.",
            en: "Writes 'worked on the contract' or 'correspondence' as a fixed daily entry for every matter.",
          },
          {
            ar: "يسجّل الوقت في اليوم نفسه لكن بعبارة واحدة تصلح لأي يوم آخر.",
            en: "Logs time the same day, but with a single phrase that could describe any other day just as well.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم العبارة نفسها لأنشطة مختلفة فعليًا فيصعب تمييزها لاحقًا.",
            en: "Uses the same phrase for actually different activities, making them hard to tell apart later.",
          },
          {
            ar: "يذكر النشاط دون ربطه بنتيجة أو خطوة تالية ملموسة.",
            en: "States the activity without tying it to a concrete outcome or next step.",
          },
        ],
        successCriteria: [
          {
            ar: "التسجيل يحدث يوميًا لا في نهاية الفترة.",
            en: "Recording happens daily, not at the end of the period.",
          },
          {
            ar: "كل بند يذكر نوع النشاط ولو بعمومية.",
            en: "Every entry states the type of activity, even generically.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ وقت يومي لأسبوع واحد.",
            en: "A daily time log for one week.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يكتب بيان فوترة محدَّدًا يذكر المهمّة الفعلية والطرف أو المستند المعني، بحيث يفهم الموكّل دون سؤال إضافي ماذا حدث في هذا البند.",
          en: "Writes a specific billing description naming the actual task and the party or document involved, so a client understands what happened in that entry without asking a follow-up question.",
        },
        observableBehaviors: [
          {
            ar: "يكتب \"مراجعة مسودة عقد الإيجار التجاري المؤرَّخة 14 آب وإرسال ملاحظات إلى المحامي المقابل\" بدل \"مراجعة عقد\".",
            en: "Writes 'reviewed the August 14 draft commercial lease and sent comments to opposing counsel' instead of 'contract review.'",
          },
          {
            ar: "يفصل بين مكالمة مع الموكّل وصياغة مذكّرة في بندين منفصلين بدل بند مدمج.",
            en: "Splits a client call and a memo draft into two separate entries instead of one merged line.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفصّل بعض البنود ويترك أخرى عامة حسب مزاجه لا حسب أهمية البند.",
            en: "Details some entries and leaves others generic depending on mood rather than the entry's importance.",
          },
          {
            ar: "يذكر التفصيل لكن ينسى ربط الوقت المسجَّل بمدة معقولة للمهمّة الموصوفة.",
            en: "States the detail but forgets to tie the recorded time to a reasonable duration for the task described.",
          },
        ],
        successCriteria: [
          {
            ar: "البيان يذكر المهمّة والمستند أو الطرف تحديدًا.",
            en: "The description names the task and the specific document or party.",
          },
          {
            ar: "لا حاجة لسؤال إضافي لفهم ما جرى في البند.",
            en: "No follow-up question is needed to understand what the entry covers.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ثلاثة بيانات فوترة محدَّدة عن ملف واحد.",
            en: "Three specific billing entries for one matter.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يراجع فاتورة كاملة قبل إرسالها للتأكّد أن مجموع الوقت معقول للنتيجة، ويقلّص أو يعدّل بندًا يبدو مبالَغًا فيه بمبادرة منه لا بعد اعتراض الموكّل.",
          en: "Reviews a complete invoice before it goes out to confirm the total time is reasonable for the outcome, and trims or amends an entry that looks inflated on his own initiative, not after the client objects.",
        },
        observableBehaviors: [
          {
            ar: "يلاحظ أن بند \"مراجعة قانونية\" استغرق ساعتين لمسألة بسيطة، فيقلّصه ويشرح السبب داخليًا قبل الإرسال.",
            en: "Notices a 'legal review' entry ran two hours for a simple issue, trims it and explains why internally before sending.",
          },
          {
            ar: "يحذف بندًا لتدريب متدرّب جديد لا علاقة له بعمل الموكّل الفعلي رغم تسجيله بالخطأ على الملف.",
            en: "Removes an entry for training a new trainee that has no bearing on the client's actual work, despite it being logged to the matter by mistake.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترك بندًا مبالَغًا فيه لأن التصحيح يقلّل الأتعاب المحصَّلة.",
            en: "Leaves an inflated entry in because correcting it reduces the fee collected.",
          },
          {
            ar: "يراجع الفاتورة شكليًا دون مقارنة الوقت الإجمالي بحجم العمل الفعلي.",
            en: "Reviews the invoice cosmetically without comparing total time to the actual scope of work.",
          },
        ],
        successCriteria: [
          {
            ar: "الفاتورة راجَعها المُصدِر قبل الإرسال بمقارنة الوقت بالنتيجة.",
            en: "The issuer reviewed the invoice before sending, comparing time to outcome.",
          },
          {
            ar: "بند غير مبرَّر عُدِّل أو حُذف قبل وصول الفاتورة للموكّل.",
            en: "An unjustified entry was amended or removed before the invoice reached the client.",
          },
        ],
        evidenceRequired: [
          {
            ar: "فاتورة بنسختين، قبل المراجعة الذاتية وبعدها.",
            en: "An invoice in two versions, before and after self-review.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يشرح للموكّل بيان فوترة معقَّدًا أو مرتفعًا بلغة واضحة قبل أن يشتكي، ويدرّب زميلًا أصغر على صياغة بيانات محدَّدة بدل العبارات العامة.",
          en: "Explains a complex or high invoice to a client in plain language before he complains, and coaches a junior colleague to write specific entries instead of generic phrases.",
        },
        observableBehaviors: [
          {
            ar: "يرسل مع فاتورة مرتفعة القيمة ملخّصًا من ثلاثة أسطر يشرح لماذا تطلّب الملف هذا الوقت.",
            en: "Sends a three-line summary alongside a high-value invoice explaining why the matter required that much time.",
          },
          {
            ar: "يراجع مع متدرّب بنودًا كتبها بعبارات عامة ويطلب منه إعادة صياغتها بتفصيل محدَّد.",
            en: "Reviews entries a trainee wrote generically and asks him to rewrite them with specific detail.",
          },
        ],
        commonMistakes: [
          {
            ar: "يشرح الفاتورة فقط بعد اعتراض الموكّل بدل المبادرة.",
            en: "Explains the invoice only after the client objects, instead of proactively.",
          },
          {
            ar: "يصحّح صياغة المتدرّب بنفسه دون أن يعلّمه كيف يصوغها لاحقًا.",
            en: "Rewrites the trainee's entries himself instead of teaching him how to phrase them going forward.",
          },
        ],
        successCriteria: [
          {
            ar: "ملخّص الفاتورة أُرسل استباقيًا قبل أي اعتراض من الموكّل.",
            en: "The invoice summary was sent proactively before any client objection.",
          },
          {
            ar: "بنود المتدرّب تحسّنت بعد التدريب دون تدخّل مباشر لاحق.",
            en: "The trainee's entries improved after coaching without further direct intervention.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ملخّص فاتورة استباقي وسجلّ تدريب متدرّب على الصياغة.",
            en: "A proactive invoice summary and a record of coaching a trainee on phrasing.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع للمكتب معيارًا معلنًا لصياغة بيانات الفوترة، ويقيس أثره على تراجع نزاعات الأتعاب والاعتراضات المتأخرة على الفواتير.",
          en: "Establishes a declared firm-wide standard for billing-narrative phrasing, and measures its effect on the decline of fee disputes and late invoice objections.",
        },
        observableBehaviors: [
          {
            ar: "يقترح على الإدارة دليلًا بأمثلة على بيانات فوترة جيدة وأخرى غامضة محظورة.",
            en: "Proposes to management a guide with examples of good billing entries and prohibited vague ones.",
          },
          {
            ar: "يجمع بيانات فصلية عن نسبة الفواتير التي اعترض عليها الموكّلون ويربطها بجودة الصياغة.",
            en: "Gathers quarterly data on the share of invoices clients objected to and links it to narrative quality.",
          },
        ],
        commonMistakes: [
          {
            ar: "يركّز المعيار على طول البيان لا وضوحه، فتصبح البنود مطوَّلة دون فائدة إضافية.",
            en: "Focuses the standard on length rather than clarity, so entries grow longer without added usefulness.",
          },
          {
            ar: "يفرض الدليل دون تدريب الفريق عمليًا على استخدامه.",
            en: "Imposes the guide without practically training the team to use it.",
          },
        ],
        successCriteria: [
          {
            ar: "دليل صياغة الفوترة معتمد ومطبَّق عبر المكتب.",
            en: "The billing-narrative guide is adopted and applied across the firm.",
          },
          {
            ar: "تقرير سنوي يربط الالتزام بالدليل بانخفاض نزاعات الأتعاب.",
            en: "An annual report links adherence to the guide with a decline in fee disputes.",
          },
        ],
        evidenceRequired: [
          {
            ar: "الدليل المعتمد ووثيقة عرضه على الإدارة.",
            en: "The adopted guide and the document presenting it to management.",
          },
          {
            ar: "تقرير سنوي بنسبة نزاعات الأتعاب قبل الدليل وبعده.",
            en: "An annual report on the fee-dispute rate before and after the guide.",
          },
        ],
      },
    ],
    sourceIds: ["src.legal-ops-kpis", "src.legal-project-management", "src.be-the-ceo", "src.managing-professional-service-firm"],
    confidence: 0.84,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.workflow-design"],
  },
  {
    id: "skill.matter-handover",
    domainId: "dom.firm-operations",
    name: { ar: "تسليم الملف وإغلاقه", en: "Matter Handover and Closure" },
    synonyms: [
      "matter closing",
      "file transfer",
      "handover briefing",
      "closing the file properly",
      "إغلاق الملف",
    ],
    definition: {
      ar: "تسليم ملف جارٍ إلى زميل آخر، أو إغلاق ملف منتهٍ وأرشفته، بطريقة تجعل أي شخص يطّلع عليه لاحقًا قادرًا على متابعته أو فهمه دون الرجوع إلى من كان يعمل عليه أصلًا.",
      en: "Handing a live matter over to another colleague, or closing and archiving a finished one, in a way that lets anyone who looks at it later pick it up or understand it without having to go back to whoever originally worked it.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على تسليم الملفّات أو إغلاقها بانضباط.",
          en: "No evidence has been collected yet on the learner's ability to hand over or close matters with discipline.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يسلّم الملف أو يغلقه شفهيًا في دقائق قليلة، معتمدًا على أن الزميل \"سيفهم من السياق\" أو أن أحدًا لن يحتاج الملف مجدَّدًا.",
          en: "Hands over or closes the matter with a few minutes of verbal briefing, assuming the colleague 'will get it from context' or that no one will need the file again.",
        },
        observableBehaviors: [
          {
            ar: "يقول لزميل يتسلّم ملف نزاع تجاري: \"كل شيء موجود في الإيميلات، إذا احتجت شيئًا اسألني\" دون خلاصة مكتوبة.",
            en: "Tells a colleague taking over a commercial dispute file, 'It's all in the emails, ask me if you need anything,' with no written summary.",
          },
          {
            ar: "يقفل ملفًا منتهيًا في النظام دون التأكّد من اكتمال المستندات فيه.",
            en: "Marks a finished matter closed in the system without checking its documents are complete.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفترض أنه سيبقى متاحًا للأسئلة إلى الأبد.",
            en: "Assumes he will always be available to answer questions about it.",
          },
          {
            ar: "يترك مهلة قائمة لم يُبلَّغ الزميل الجديد بها.",
            en: "Leaves an outstanding deadline the new colleague was never told about.",
          },
        ],
        successCriteria: [
          {
            ar: "الملف انتقل أو أُغلق فعليًا ولو بمعلومات ناقصة.",
            en: "The matter actually transferred or closed, even with incomplete information.",
          },
          {
            ar: "استجاب لسؤال لاحق من الزميل عند الحاجة.",
            en: "Responded to a later question from the colleague when needed.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ تسليم أو إغلاق شفهي دون خلاصة مكتوبة.",
            en: "A record of a verbal handover or closure with no written summary.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يكتب خلاصة موجزة عند التسليم أو الإغلاق تذكر حالة الملف العامة، دون تفصيل كافٍ للمهل القائمة أو القرارات المعلَّقة.",
          en: "Writes a brief summary at handover or closure stating the matter's general state, without enough detail on outstanding deadlines or pending decisions.",
        },
        observableBehaviors: [
          {
            ar: "يكتب فقرة من ثلاثة أسطر: \"الملف في مرحلة التفاوض، الموكّل متعاون\" دون ذكر الخطوة التالية.",
            en: "Writes a three-line paragraph, 'The matter is in negotiation, the client is cooperative,' with no next step stated.",
          },
          {
            ar: "يضع علامة \"مغلق\" في النظام مع سطر واحد عن نتيجة الملف.",
            en: "Marks the file 'closed' in the system with one line on the outcome.",
          },
        ],
        commonMistakes: [
          {
            ar: "يصف الحالة العامة لكن يهمل تاريخ المهلة القادمة إن وُجدت.",
            en: "Describes the general status but omits the date of the next deadline, if any.",
          },
          {
            ar: "يكتب الخلاصة من الذاكرة دون مراجعة الملف نفسه.",
            en: "Writes the summary from memory without reviewing the file itself.",
          },
        ],
        successCriteria: [
          {
            ar: "خلاصة مكتوبة موجودة، ولو عامة.",
            en: "A written summary exists, even if general.",
          },
          {
            ar: "الزميل المتسلّم يعرف على الأقل المرحلة الحالية للملف.",
            en: "The receiving colleague at least knows the matter's current stage.",
          },
        ],
        evidenceRequired: [
          {
            ar: "خلاصة مكتوبة قصيرة لملف واحد عند تسليمه أو إغلاقه.",
            en: "A short written summary for one matter at handover or closure.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يسلّم أو يغلق الملف بمذكّرة تشمل الخط الزمني، القرارات المتّخذة وأسبابها، والمهل القائمة إن وُجدت، بحيث يستطيع من لم يطّلع على الملف سابقًا فهم موقعه خلال دقائق.",
          en: "Hands over or closes the matter with a note covering the timeline, the decisions made and why, and any outstanding deadlines, so someone who has never seen the file can understand where it stands within minutes.",
        },
        observableBehaviors: [
          {
            ar: "يكتب مذكّرة تسليم لنزاع عمالي تذكر: تاريخ الفصل، موقف الموكّل، سبب اختيار مسار التسوية بدل التقاضي، وموعد الجلسة القادمة.",
            en: "Writes a handover note for an employment dispute stating: the termination date, the client's position, why the settlement route was chosen over litigation, and the next hearing date.",
          },
          {
            ar: "يرفق قائمة بالمستندات الناقصة أو المطلوبة من الموكّل مع مذكّرة التسليم.",
            en: "Attaches a list of documents missing or still needed from the client alongside the handover note.",
          },
        ],
        commonMistakes: [
          {
            ar: "يذكر ماذا حدث لكن ينسى ذكر لماذا اتُّخذ القرار، فيكرّر الزميل الجديد نقاشًا سبق حسمه.",
            en: "States what happened but forgets why a decision was made, so the new colleague reopens a debate already settled.",
          },
          {
            ar: "يكتب المذكّرة بعد التسليم لا قبله، فيبدأ الزميل الجديد بلا خلفية.",
            en: "Writes the note after the handover rather than before it, so the new colleague starts with no background.",
          },
        ],
        successCriteria: [
          {
            ar: "المذكّرة تشمل الخط الزمني والقرارات وأسبابها والمهل القائمة.",
            en: "The note covers the timeline, decisions and their reasons, and outstanding deadlines.",
          },
          {
            ar: "زميل غير مطّلع فهم موقع الملف خلال دقائق من قراءتها.",
            en: "A colleague new to the matter understood its position within minutes of reading it.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مذكّرة تسليم مكتوبة قبل انتقال الملف فعليًا.",
            en: "A handover note written before the matter actually transfers.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يسلّم ملفًا معقَّدًا أو حسّاسًا (نزاع فيه مخاطر سمعة، أو موكّل صعب) بجلسة شفهية مباشرة مع الزميل تكمّل المذكّرة المكتوبة، لا بدلًا منها.",
          en: "Hands over a complex or sensitive matter (a reputational-risk dispute, or a difficult client) with a direct verbal session that supplements the written note, not in place of it.",
        },
        observableBehaviors: [
          {
            ar: "يخصّص نصف ساعة مع الزميل المتسلّم لملف تحكيم حسّاس ليشرح ديناميكية العلاقة مع الطرف الآخر التي لا تظهر في المستندات.",
            en: "Sets aside half an hour with the taking-over colleague on a sensitive arbitration matter to explain the relationship dynamic with the other side that the documents don't capture.",
          },
          {
            ar: "ينبّه الزميل شفهيًا إلى حساسية موكّل معيّن تجاه التأخير قبل أن يكتشفها بنفسه.",
            en: "Warns the colleague verbally about a particular client's sensitivity to delay before he discovers it the hard way.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتمد على الجلسة الشفهية وحدها دون مذكّرة مكتوبة يرجع إليها الزميل لاحقًا.",
            en: "Relies on the verbal session alone with no written note the colleague can return to later.",
          },
          {
            ar: "يؤجّل تحذيرًا مهمًا عن حساسية الموكّل لأنه \"سيأتي في وقته\".",
            en: "Delays an important warning about a client's sensitivity because it 'will come up naturally.'",
          },
        ],
        successCriteria: [
          {
            ar: "الجلسة الشفهية غطّت ما لا يظهر في المستندات، والمذكّرة المكتوبة بقيت متاحة كمرجع.",
            en: "The verbal session covered what the documents don't show, and the written note remained available as a reference.",
          },
          {
            ar: "الزميل المتسلّم لم يُفاجأ بمعلومة حسّاسة كان يجب إبلاغه بها مسبقًا.",
            en: "The taking-over colleague was not blindsided by a sensitive fact he should have been told in advance.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مذكّرة تسليم ومحضر أو ملاحظات جلسة شفهية مكمّلة لملف حسّاس.",
            en: "A handover note plus a record or notes of a supplementary verbal session for a sensitive matter.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني قالبًا موحّدًا لتسليم الملفّات وإغلاقها يستخدمه بانتظام، ويدرّب زملاءه الأصغر على تطبيقه بدل ترك التسليم لأسلوب كل شخص.",
          en: "Builds a standard template for handover and closure that he uses consistently, and coaches junior colleagues to apply it instead of leaving handover to each person's own style.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم قالبًا ثابتًا يشمل الخط الزمني والقرارات والمهل والمستندات الناقصة في كل تسليم يقوم به.",
            en: "Uses a fixed template covering timeline, decisions, deadlines and missing documents in every handover he performs.",
          },
          {
            ar: "يراجع مذكّرة تسليم كتبها متدرّب ويطلب إضافة أسباب القرارات المفقودة منها.",
            en: "Reviews a handover note a trainee wrote and asks him to add the missing reasons behind decisions.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض القالب حرفيًا حتى على ملفّات بسيطة لا تحتاج كل بند فيه.",
            en: "Imposes the template literally even on simple matters that don't need every section.",
          },
          {
            ar: "يعلّم الشكل دون تعليم كيفية تقدير ما يستحق الذكر وما لا يستحقه.",
            en: "Teaches the format without teaching how to judge what deserves mention and what doesn't.",
          },
        ],
        successCriteria: [
          {
            ar: "قالب التسليم مستخدَم بانتظام عبر أكثر من ملف.",
            en: "The handover template is used consistently across more than one matter.",
          },
          {
            ar: "زميل واحد على الأقل حسّن مذكّرات تسليمه بعد التدريب.",
            en: "At least one colleague improved his handover notes after coaching.",
          },
        ],
        evidenceRequired: [
          {
            ar: "القالب المستخدَم وسجلّ تدريب زميل على تطبيقه.",
            en: "The template used and a record of coaching a colleague on applying it.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل التسليم والإغلاق المنضبط معيارًا إلزاميًا في إجراء المكتب، بحيث لا يعتمد استمرار أي ملف على بقاء شخص معيّن، ويقيس أثر ذلك على سرعة استئناف العمل عند غياب أو مغادرة محامٍ.",
          en: "Makes disciplined handover and closure a mandatory firm procedure, so no matter's continuity depends on one particular person staying, and measures its effect on how quickly work resumes when a lawyer is absent or leaves.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد مع الإدارة سياسة تمنع إغلاق ملف في النظام دون خلاصة تسليم مكتملة.",
            en: "Adopts a policy with management that blocks closing a matter in the system without a complete handover summary.",
          },
          {
            ar: "يقيس المدة التي يستغرقها ملف ليستأنف مساره الطبيعي بعد مغادرة المحامي المسؤول عنه فجأة.",
            en: "Measures how long it takes a matter to resume its normal course after the responsible lawyer leaves unexpectedly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض السياسة على الجميع دون استثناء الملفّات شديدة الحساسية التي تحتاج تفصيلًا مختلفًا.",
            en: "Imposes the policy uniformly without exempting highly sensitive matters that need different handling.",
          },
          {
            ar: "يقيس عدد مذكّرات التسليم المكتوبة لا سرعة استئناف العمل الفعلية.",
            en: "Measures the number of handover notes written rather than the actual speed of resuming work.",
          },
        ],
        successCriteria: [
          {
            ar: "لا ملف يُغلق أو يُنقل في النظام دون خلاصة تسليم مكتملة.",
            en: "No matter closes or transfers in the system without a completed handover summary.",
          },
          {
            ar: "تقرير يربط السياسة بانخفاض زمن توقّف العمل عند غياب محامٍ مسؤول.",
            en: "A report links the policy to a reduced work-stoppage time when a responsible lawyer is absent.",
          },
        ],
        evidenceRequired: [
          {
            ar: "السياسة المعتمدة وضوابطها في نظام المكتب.",
            en: "The adopted policy and its controls in the firm's system.",
          },
          {
            ar: "تقرير سنوي بأثرها على سرعة استمرارية الملفّات.",
            en: "An annual report on its effect on matter-continuity speed.",
          },
        ],
      },
    ],
    sourceIds: ["src.governance-raci", "src.modernize-your-law-firm", "src.smarter-collaboration", "src.legal-ops-kpis"],
    confidence: 0.85,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.knowledge-management"],
  },
];
