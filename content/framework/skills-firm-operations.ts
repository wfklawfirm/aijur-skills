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
  {
    id: "skill.service-productization",
    domainId: "dom.firm-operations",
    name: { ar: "تحويل الخدمة المتكرّرة إلى منتج ثابت", en: "Productizing a Recurring Service" },
    synonyms: [
      "fixed-scope offering",
      "packaged service",
      "flat-fee service design",
      "خدمة معلَّبة بسعر ثابت",
    ],
    definition: {
      ar: "أخذ نوع خدمة يقدّمه المكتب مرارًا، وتحويله إلى عرض له اسم ونطاق ثابت وسعر محدَّد وسلسلة خطوات موثَّقة يستطيع أي محامٍ في الفريق تنفيذها، بدل تفصيل النطاق والسعر من الصفر في كل مرّة.",
      en: "Taking a service type the firm delivers repeatedly and turning it into a named offering with a fixed scope, a set price and a documented step sequence any lawyer on the team can execute, instead of re-scoping and re-pricing it from scratch each time.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على تحويل خدمة متكرّرة إلى عرض ثابت.",
          en: "No evidence has been collected yet on the learner's ability to turn a recurring service into a fixed offering.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يقدّم الخدمة نفسها مرارًا لكن يعيد تسعيرها ووصفها من الصفر مع كل موكّل جديد.",
          en: "Delivers the same service repeatedly but re-prices and re-describes it from scratch with each new client.",
        },
        observableBehaviors: [
          {
            ar: "يكتب عرض أتعاب مختلف الصياغة لكل موكّل يطلب مراجعة عقد إيجار تجاري، رغم أن الخطوات متشابهة في كل مرّة.",
            en: "Writes a differently worded fee proposal for every client requesting a commercial lease review, even though the steps are similar each time.",
          },
          {
            ar: "يقدّر الوقت اللازم لتأسيس شركة بالتخمين في كل ملف جديد.",
            en: "Estimates the time needed for a company formation by guesswork on every new file.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتبر كل موكّل حالة فريدة كليًا حتى حين تتشابه المسألة القانونية جوهريًا.",
            en: "Treats every client as entirely unique even when the underlying legal matter is substantially the same.",
          },
          {
            ar: "لا يلاحظ أنه يقدّم الخدمة نفسها عدّة مرّات في الشهر لأنه لم يسمِّها بعد.",
            en: "Doesn't notice he delivers the same service several times a month, because he has never named it.",
          },
        ],
        successCriteria: [
          {
            ar: "الخدمة سُلِّمت للموكّل رغم غياب نموذج ثابت لها.",
            en: "The service was delivered to the client, even without a fixed template for it.",
          },
          {
            ar: "لم يرفض تكرار العمل حتى لو استغرق وقتًا أطول من مرّة سابقة مشابهة.",
            en: "Did not refuse repeat work even when it took longer than a similar past instance.",
          },
        ],
        evidenceRequired: [
          {
            ar: "عرضا أتعاب لنوع الخدمة نفسه بصياغة وسعر مختلفين كليًا.",
            en: "Two fee proposals for the same service type with entirely different wording and pricing.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يلاحظ أنه يكرّر نوع خدمة معيّنًا، ويبدأ بتجميع الخطوات التي يتبعها فعليًا كل مرّة في ملاحظات شخصية غير موحَّدة بعد.",
          en: "Notices he is repeating a particular service type, and starts jotting down the steps he actually follows each time in personal notes not yet standardised.",
        },
        observableBehaviors: [
          {
            ar: "يكتب لنفسه قائمة بالخطوات الست التي ينفّذها عادة عند فحص شركة قبل استثمار فيها.",
            en: "Writes himself a list of the six steps he usually runs when doing due diligence before an investment.",
          },
          {
            ar: "يلاحظ أن ثلاثة موكّلين طلبوا الشهر نفسه صياغة عقد عمل قياسي، فيبدأ بحفظ مسوَّدته الأخيرة كمرجع.",
            en: "Notices three clients asked the same month for a standard employment contract draft, and starts saving his latest draft as a reference.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحتفظ بالملاحظات لنفسه دون تحويلها إلى شيء يستخدمه غيره.",
            en: "Keeps the notes to himself without turning them into something a colleague could use.",
          },
          {
            ar: "يجمع الخطوات لكن لا يربطها بعد بسعر ثابت أو نطاق محدَّد.",
            en: "Gathers the steps but does not yet tie them to a fixed price or defined scope.",
          },
        ],
        successCriteria: [
          {
            ar: "قائمة خطوات مكتوبة موجودة لنوع خدمة واحد على الأقل يتكرّر تقديمه.",
            en: "A written step list exists for at least one service type that recurs.",
          },
          {
            ar: "الخطوات تعكس ما يُنفَّذ فعليًا لا ما يُفترَض نظريًا.",
            en: "The steps reflect what actually happens, not a theoretical assumption.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة خطوات شخصية مكتوبة لخدمة متكرّرة واحدة.",
            en: "A personal written step list for one recurring service.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يحوّل الخدمة إلى عرض له اسم ونطاق ثابت وسعر محدَّد مسبقًا، ويقدّمه للموكّل بهذه الصفة بدل عرض أتعاب مفاوَض عليه من جديد كل مرّة.",
          en: "Turns the service into a named offering with a fixed scope and a price set in advance, and presents it to the client as such, instead of a fresh fee negotiation each time.",
        },
        observableBehaviors: [
          {
            ar: "يعرض على الموكّل \"مراجعة عقد التوريد الأساسية\" بسعر ثابت ونطاق يحدّد بالضبط ما يشمله وما لا يشمله.",
            en: "Offers the client a 'core supply-contract review' at a fixed price with a scope stating exactly what is and isn't included.",
          },
          {
            ar: "يرفض توسيع نطاق العرض الثابت دون سعر إضافي حين يطلب موكّل عملًا يتجاوزه.",
            en: "Declines to expand the fixed offering's scope without an additional fee when a client asks for work beyond it.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحدّد سعرًا ثابتًا لكن يترك النطاق غامضًا فيتنازع مع الموكّل لاحقًا حول ما يشمله.",
            en: "Sets a fixed price but leaves the scope vague, leading to a later dispute with the client over what it covers.",
          },
          {
            ar: "يسمّي العرض لكن يستمر بتسعيره ساعة بساعة داخليًا فعليًا.",
            en: "Names the offering but keeps pricing it hour-by-hour internally in practice.",
          },
        ],
        successCriteria: [
          {
            ar: "العرض له اسم ونطاق مكتوب وسعر ثابت مقدَّم للموكّل كوحدة واحدة.",
            en: "The offering has a name, a written scope and a fixed price presented to the client as one unit.",
          },
          {
            ar: "الموكّل وافق على العرض بصفته الثابتة دون تفاوض بند بند.",
            en: "The client accepted the offering as fixed, without negotiating it clause by clause.",
          },
        ],
        evidenceRequired: [
          {
            ar: "وثيقة عرض خدمة مسمّاة بنطاق وسعر ثابتين قُدِّمت لموكّل فعلي.",
            en: "A named service-offering document with a fixed scope and price presented to an actual client.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يوثّق سلسلة خطوات العرض الثابت بتفصيل يمكّن زميلًا آخر من تنفيذه بالجودة نفسها دون إشراف مباشر منه.",
          en: "Documents the fixed offering's step sequence in enough detail that another colleague can execute it at the same quality level without his direct supervision.",
        },
        observableBehaviors: [
          {
            ar: "يكتب دليلًا خطوة بخطوة لتنفيذ \"مراجعة عقد التوريد الأساسية\" يستخدمه محامٍ آخر لأول مرّة دون مساعدته.",
            en: "Writes a step-by-step guide for executing the 'core supply-contract review' that another lawyer uses for the first time without his help.",
          },
          {
            ar: "يرفق بالدليل نموذج تقرير الخدمة الجاهز الذي يُملأ حسب كل ملف.",
            en: "Attaches to the guide the ready service-report template that gets filled in per matter.",
          },
        ],
        commonMistakes: [
          {
            ar: "يكتب دليلًا يفترض معرفة ضمنية لا يملكها زميل جديد.",
            en: "Writes a guide that assumes implicit knowledge a new colleague doesn't have.",
          },
          {
            ar: "يحتفظ بخطوة حرجة في ذهنه دون توثيقها لأنها \"بديهية\" له.",
            en: "Keeps a critical step in his head without documenting it because it feels 'obvious' to him.",
          },
        ],
        successCriteria: [
          {
            ar: "زميل غير مطّلع سابقًا نفَّذ العرض من الدليل وحده بجودة مقبولة.",
            en: "A colleague with no prior exposure executed the offering from the guide alone at acceptable quality.",
          },
          {
            ar: "الدليل يغطّي كل خطوة من استلام الطلب إلى تسليم النتيجة.",
            en: "The guide covers every step from taking the request to delivering the result.",
          },
        ],
        evidenceRequired: [
          {
            ar: "الدليل الخطوة-بخطوة، ونتيجة تنفيذه من زميل لم يشارك في وضعه.",
            en: "The step-by-step guide, and the outcome of a colleague executing it who was not involved in writing it.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني أكثر من عرض ثابت لخدمات مختلفة يتكرّر تقديمها، ويراجع أسعارها ونطاقها دوريًا بناءً على ما يستهلكه تنفيذها فعليًا لا بناءً على شعور عام.",
          en: "Builds more than one fixed offering for different recurring services, and periodically revises their prices and scope based on what execution actually consumes, not a general impression.",
        },
        observableBehaviors: [
          {
            ar: "يقارن الوقت الفعلي الذي استغرقه تنفيذ عشرة ملفات من العرض الثابت بالسعر المحدَّد له، ويعدّل السعر تبعًا لذلك.",
            en: "Compares the actual time ten matters under the fixed offering took against its set price, and adjusts the price accordingly.",
          },
          {
            ar: "يطلق عرضًا ثابتًا ثانيًا لخدمة أخرى متكرّرة بعد نجاح العرض الأول.",
            en: "Launches a second fixed offering for another recurring service after the first one proves out.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترك سعر العرض ثابتًا لسنوات دون مراجعته رغم تغيّر تكلفة تنفيذه.",
            en: "Leaves the offering's price unchanged for years despite the cost of execution changing.",
          },
          {
            ar: "يطلق عروضًا كثيرة دفعة واحدة دون التحقّق من نجاح أوّلها.",
            en: "Launches many offerings at once without confirming the first one works.",
          },
        ],
        successCriteria: [
          {
            ar: "أكثر من عرض ثابت واحد قائم ومستخدَم فعليًا.",
            en: "More than one fixed offering exists and is actually in use.",
          },
          {
            ar: "سعر عرض واحد على الأقل عُدِّل استنادًا إلى بيانات تنفيذ فعلية.",
            en: "The price of at least one offering was revised based on actual execution data.",
          },
        ],
        evidenceRequired: [
          {
            ar: "وثائق عرضين ثابتين مختلفين، وسجلّ مراجعة سعر أحدهما بالبيانات.",
            en: "Documentation of two different fixed offerings, and a record of one price revision backed by data.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل تحويل الخدمات المتكرّرة إلى عروض ثابتة نهجًا معلَنًا في المكتب، ويقيس أثره على الوقت المستهلَك في التسعير والنطاق مقارنة بالعمل المفصَّل من الصفر.",
          en: "Makes turning recurring services into fixed offerings a declared approach for the firm, and measures its effect on time spent on pricing and scoping compared to work re-built from scratch.",
        },
        observableBehaviors: [
          {
            ar: "يقترح على الإدارة قائمة بالخدمات الأكثر تكرارًا في المكتب المرشَّحة لتصبح عروضًا ثابتة.",
            en: "Proposes to management a list of the firm's most-repeated services as candidates for fixed offerings.",
          },
          {
            ar: "يقيس الفارق بين الوقت المصروف على تسعير ملف مفصَّل من الصفر ووقت تسعير ملف تحت عرض ثابت.",
            en: "Measures the gap between time spent pricing a matter built from scratch and pricing one under a fixed offering.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض تحويل كل خدمة إلى عرض ثابت حتى المسائل شديدة التباين التي لا تحتمل نطاقًا موحَّدًا.",
            en: "Forces every service into a fixed offering, even highly variable matters that resist a uniform scope.",
          },
          {
            ar: "يقيس عدد العروض الثابتة المُطلَقة لا الأثر الفعلي على الوقت والربحية.",
            en: "Measures the number of fixed offerings launched rather than the actual effect on time and profitability.",
          },
        ],
        successCriteria: [
          {
            ar: "نهج تحويل الخدمات المتكرّرة إلى عروض ثابتة معتمَد ومطبَّق عبر أكثر من ممارس في المكتب.",
            en: "The approach of turning recurring services into fixed offerings is adopted and applied by more than one practitioner in the firm.",
          },
          {
            ar: "تقرير يقارن الوقت المستهلَك في التسعير والنطاق قبل النهج وبعده.",
            en: "A report compares time spent on pricing and scoping before and after the approach.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة الخدمات المرشَّحة المعروضة على الإدارة.",
            en: "The list of candidate services presented to management.",
          },
          {
            ar: "تقرير يقارن الوقت المستهلَك في التسعير قبل النهج وبعده.",
            en: "A report comparing time spent on pricing before and after the approach.",
          },
        ],
      },
    ],
    sourceIds: ["src.built-to-sell", "src.managing-professional-service-firm", "src.small-firm-roadmap"],
    confidence: 0.82,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.workflow-design"],
  },
  {
    id: "skill.client-feedback-metrics",
    domainId: "dom.firm-operations",
    name: { ar: "مؤشّرات رضا الموكّلين وإغلاق الحلقة", en: "Client Feedback Metrics and Closing the Loop" },
    synonyms: [
      "client satisfaction tracking",
      "feedback loop",
      "voice of the client",
      "قياس تجربة الموكّل",
    ],
    definition: {
      ar: "قراءة مؤشّرات تجربة الموكّل بشكل منهجي لا اعتمادًا على انطباع متفرّق، ومقاومة الدافع للدفاع عن النفس عند إشارة سلبية، وتحويل ما يُقال فعلًا إلى تعديل ملموس في طريقة العمل.",
      en: "Reading client-experience signals systematically rather than relying on scattered impressions, resisting the urge to get defensive at a negative signal, and turning what is actually said into a concrete change in how the work is done.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على تعامل المتدرّب مع مؤشّرات رضا الموكّلين.",
          en: "No evidence has been collected yet on the learner's handling of client feedback signals.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يسمع تعليقات الموكّلين بالصدفة أثناء العمل، ولا يوجد أي سبيل منتظم لجمعها أو تذكّرها.",
          en: "Hears client comments incidentally during the work, with no regular way to collect or remember them.",
        },
        observableBehaviors: [
          {
            ar: "يعلّق موكّل هاتفيًا أن التحديثات بطيئة، فيعتذر المحامي شفهيًا وينسى الملاحظة بعد المكالمة.",
            en: "A client remarks on a call that updates are slow; the lawyer apologizes verbally and forgets the comment once the call ends.",
          },
          {
            ar: "لا يعرف المكتب كم موكّلًا غادر إلى مكتب آخر خلال السنة الماضية ولماذا.",
            en: "The firm doesn't know how many clients moved to another firm over the past year, or why.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتبر أن غياب شكوى مباشرة يعني رضا الموكّل.",
            en: "Treats the absence of a direct complaint as proof of client satisfaction.",
          },
          {
            ar: "ينسى تعليقًا سلبيًا سمعه بمجرّد انتهاء المكالمة لأنه لم يُدوَّن.",
            en: "Forgets a negative comment the moment the call ends because it was never written down.",
          },
        ],
        successCriteria: [
          {
            ar: "لم ينكر أو يتجاهل تعليقًا سلبيًا سمعه مباشرة من الموكّل.",
            en: "Did not deny or dismiss a negative comment heard directly from the client.",
          },
          {
            ar: "استمرّت العلاقة مع الموكّل رغم غياب أي متابعة منهجية.",
            en: "The client relationship continued despite no systematic follow-up.",
          },
        ],
        evidenceRequired: [
          {
            ar: "وصف لموقف سمع فيه المحامي تعليق موكّل دون تدوينه أو متابعته.",
            en: "A description of an occasion the lawyer heard a client comment without writing it down or following up.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يبدأ بتدوين تعليقات الموكّلين حين تُذكَر، لكن لا يوجد سؤال منتظم يُطرَح على الجميع ولا مقياس ثابت يُقارَن عبر الملفّات.",
          en: "Starts writing down client comments when they come up, but there is no standard question asked of everyone and no fixed metric compared across matters.",
        },
        observableBehaviors: [
          {
            ar: "يسجّل في ملاحظاته أن موكّلًا وصف التواصل بـ\"الجيد لكن المتأخر أحيانًا\".",
            en: "Notes in his file that a client described the communication as 'good but sometimes late.'",
          },
          {
            ar: "يسأل بعض الموكّلين عن رأيهم بنهاية الملف وينسى سؤال آخرين.",
            en: "Asks some clients for their view at the end of the matter and forgets to ask others.",
          },
        ],
        commonMistakes: [
          {
            ar: "يسأل الموكّلين المرتاحين فقط لأن سؤال الموكّل الغاضب \"محرج\".",
            en: "Only asks satisfied clients, because asking an unhappy one feels 'awkward.'",
          },
          {
            ar: "يجمع التعليقات لكن لا يقارنها بملفّات أخرى ليعرف إن كانت الملاحظة متكرّرة.",
            en: "Collects the comments but never compares them across matters to see if the observation recurs.",
          },
        ],
        successCriteria: [
          {
            ar: "تعليقات موكّلين مدوَّنة فعليًا ولو بشكل غير منتظم.",
            en: "Client comments are actually written down, even if irregularly.",
          },
          {
            ar: "السؤال طُرِح على أكثر من موكّل واحد.",
            en: "The question was put to more than a single client.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ملاحظات مدوَّنة لتعليقات ثلاثة موكّلين على الأقل.",
            en: "Written notes of comments from at least three clients.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يطرح سؤال تقييم ثابتًا على كل موكّل بعد مرحلة رئيسية أو إغلاق الملف، ويسجّل الإجابة كرقم أو تصنيف قابل للمقارنة، لا كملاحظة نثرية فقط.",
          en: "Asks a fixed evaluation question to every client after a major stage or matter closure, and records the answer as a number or category that can be compared, not just a prose note.",
        },
        observableBehaviors: [
          {
            ar: "يرسل لكل موكّل عند إغلاق الملف سؤالًا موحَّدًا بمقياس من واحد إلى خمسة عن سهولة التعامل مع المكتب.",
            en: "Sends every client a standard one-to-five scale question at closure about how easy the firm was to deal with.",
          },
          {
            ar: "يجمع نتائج ثلاثة أشهر في جدول واحد يظهر المتوسط لكل نوع خدمة.",
            en: "Compiles three months of results into one table showing the average by service type.",
          },
        ],
        commonMistakes: [
          {
            ar: "يطرح السؤال لكن لا يسجّل الإجابات في مكان موحَّد قابل للمقارنة لاحقًا.",
            en: "Asks the question but doesn't record answers in one place that can be compared later.",
          },
          {
            ar: "يكتفي بالرقم دون سؤال متابعة يشرح سبب رقم منخفض.",
            en: "Settles for the number alone without a follow-up question explaining a low score.",
          },
        ],
        successCriteria: [
          {
            ar: "السؤال ذاته يُطرَح على كل موكّل بانتظام لا على البعض فقط.",
            en: "The same question is asked of every client regularly, not just some of them.",
          },
          {
            ar: "الإجابات مسجَّلة بشكل قابل للمقارنة عبر الملفّات.",
            en: "Answers are recorded in a form that can be compared across matters.",
          },
        ],
        evidenceRequired: [
          {
            ar: "جدول نتائج تقييم موحَّد لأكثر من ملف.",
            en: "A table of standardised evaluation results across more than one matter.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "حين تصل إشارة سلبية، يقاوم الدافع الأول للدفاع عن نفسه أو تبرير القرار، ويسأل أسئلة توضيحية قبل الاستنتاج، فيصل لفهم دقيق لما حدث فعلًا من منظور الموكّل.",
          en: "When a negative signal arrives, resists the first instinct to defend himself or justify the decision, and asks clarifying questions before concluding, arriving at an accurate picture of what actually happened from the client's side.",
        },
        observableBehaviors: [
          {
            ar: "يتلقّى تقييمًا منخفضًا حول سرعة الرد فيسأل الموكّل عن مثال محدَّد بدل شرح سبب انشغاله.",
            en: "Receives a low score on response speed and asks the client for a specific example instead of explaining why he was busy.",
          },
          {
            ar: "يكتشف بعد أسئلة توضيحية أن ما بدا شكوى عن الأتعاب كان في الواقع شكوى عن غياب شرح مسبق لها.",
            en: "Discovers, after clarifying questions, that what looked like a fee complaint was actually about the fee never having been explained in advance.",
          },
        ],
        commonMistakes: [
          {
            ar: "يردّ بشرح مطوَّل لأسباب قراره بدل الاستماع أولًا لتفصيل الشكوى.",
            en: "Responds with a lengthy explanation of his reasoning instead of first listening to the detail of the complaint.",
          },
          {
            ar: "يصنّف التقييم المنخفض بأنه \"موكّل صعب المزاج\" دون التحقّق من محتواه.",
            en: "Dismisses the low score as coming from a 'difficult client' without checking its substance.",
          },
        ],
        successCriteria: [
          {
            ar: "طرح أسئلة توضيحية فعلية قبل أي تفسير أو دفاع عن القرار.",
            en: "Actually asked clarifying questions before offering any explanation or defence of the decision.",
          },
          {
            ar: "الفهم النهائي لسبب الإشارة السلبية مطابق لما قصده الموكّل فعلًا.",
            en: "The final understanding of the negative signal's cause matches what the client actually meant.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ حوار مع موكّل يظهر انتقالًا من إشارة سلبية إلى فهم دقيق عبر أسئلة توضيحية.",
            en: "A record of a client exchange showing the move from a negative signal to an accurate understanding through clarifying questions.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يحوّل نمطًا متكرّرًا في التغذية الراجعة إلى تعديل ملموس في إجراء العمل، ويبلّغ الموكّلين الذين أثاروا الملاحظة أن التعديل حدث بسببهم.",
          en: "Turns a recurring pattern in feedback into a concrete change to how the work is done, and tells the clients who raised the point that the change happened because of them.",
        },
        observableBehaviors: [
          {
            ar: "يلاحظ أن ثلاثة موكّلين متتاليين اشتكوا من غياب تحديث أسبوعي، فيضع قاعدة إرسال تحديث كل أسبوع لكل ملف نشط.",
            en: "Notices three consecutive clients complained about the lack of a weekly update, and establishes a rule to send one for every active matter.",
          },
          {
            ar: "يكتب لأحد الموكّلين الذين أثاروا الملاحظة أن المكتب عدَّل إجراءه بناءً على ملاحظته تحديدًا.",
            en: "Writes to one of the clients who raised the point that the firm changed its procedure specifically because of that feedback.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعالج شكوى موكّل واحد بشكل فردي دون التحقّق إن كانت نمطًا يتكرّر مع آخرين.",
            en: "Handles one client's complaint individually without checking whether it's a pattern recurring with others.",
          },
          {
            ar: "يعدّل الإجراء داخليًا دون إبلاغ الموكّل الذي أثار الملاحظة أصلًا.",
            en: "Changes the procedure internally without telling the client whose feedback originally prompted it.",
          },
        ],
        successCriteria: [
          {
            ar: "تعديل إجرائي فعلي تمّ ربطه بنمط متكرّر في التغذية الراجعة.",
            en: "An actual procedural change was tied to a recurring feedback pattern.",
          },
          {
            ar: "موكّل واحد على الأقل أُبلغ أن ملاحظته أدّت إلى التعديل.",
            en: "At least one client was told his feedback led to the change.",
          },
        ],
        evidenceRequired: [
          {
            ar: "وثيقة التعديل الإجرائي، ورسالة إبلاغ موكّل بأن ملاحظته كانت السبب.",
            en: "The document of the procedural change, and a message telling a client his feedback was the cause.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل قياس تجربة الموكّل ومراجعتها دوريًا معيارًا مؤسَّسيًا في المكتب، ويربط اتجاه المؤشّر عبر الزمن بتعديلات إجرائية محدَّدة بدل الاكتفاء بجمع الأرقام.",
          en: "Makes systematic, periodic measurement of client experience an institutional standard for the firm, and ties the metric's trend over time to specific procedural changes rather than just collecting numbers.",
        },
        observableBehaviors: [
          {
            ar: "يقدّم للإدارة تقريرًا فصليًا يربط ارتفاع مؤشّر الرضا بتعديل محدَّد أُدخل قبل ثلاثة أشهر.",
            en: "Presents management a quarterly report linking a rise in the satisfaction metric to a specific change introduced three months earlier.",
          },
          {
            ar: "يعتمد مع الإدارة إجراءً يفرض مراجعة كل تقييم منخفض خلال أسبوع من وروده.",
            en: "Adopts a procedure with management requiring every low score to be reviewed within a week of arriving.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعرض متوسط المؤشّر العام دون ربطه بأي تعديل إجرائي محدَّد.",
            en: "Presents the overall average metric without tying it to any specific procedural change.",
          },
          {
            ar: "يجمع المؤشّر دون خطة واضحة لما يحدث حين ينخفض.",
            en: "Collects the metric with no clear plan for what happens when it drops.",
          },
        ],
        successCriteria: [
          {
            ar: "نظام قياس رضا الموكّلين معتمَد ومطبَّق بانتظام عبر المكتب.",
            en: "A client-satisfaction measurement system is adopted and regularly applied across the firm.",
          },
          {
            ar: "تقرير دوري يربط اتجاه المؤشّر بتعديلات إجرائية محدَّدة.",
            en: "A periodic report ties the metric's trend to specific procedural changes.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نظام القياس المعتمد وسجلّ نتائجه عبر أكثر من دورة قياس.",
            en: "The adopted measurement system and its results log across more than one measurement cycle.",
          },
          {
            ar: "تقرير يربط اتجاه المؤشّر بتعديل إجرائي محدَّد.",
            en: "A report linking the metric's trend to a specific procedural change.",
          },
        ],
      },
    ],
    sourceIds: ["src.client-centered-law-firm", "src.legal-ops-kpis", "src.smarter-collaboration"],
    confidence: 0.83,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.output-quality-control"],
  },
];
