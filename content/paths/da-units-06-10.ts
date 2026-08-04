import type { UnitDef } from "../types";

/**
 * Digital Tools & AI path (`dom.digital-ai`) — units 6-10, the second half
 * of the path and the final five units of the entire AIJUR Professional
 * Skills Lab curriculum.
 *
 * `ch.da.catching-and-disclosing-errors` covers units 6-8: recognizing the
 * warning signs of a fabricated AI citation or fact, writing a short clear
 * note once you've caught one, and the live conversation disclosing a
 * near-miss to a supervising lawyer (closing with a simulation).
 * `ch.da.protecting-data-and-knowing-limits` covers units 9-10: what client
 * information must never go into a general-purpose tool versus what an
 * approved tool can handle, and the live conversation declining pressure to
 * paste confidential data into an unapproved tool or skip verification
 * (closing the whole path, and the platform's simulation content, with a
 * simulation).
 *
 * Recurring protagonist across all five units: Maya Sabbagh (مايا صباغ), a
 * mid-level associate. Supervising partner Fadia Rahal (فادية رحال) recurs
 * in units 7-8. Every other name is distinct from names used in the other
 * domains' reference files.
 *
 * Skills, rubrics and scenarios referenced here are authored elsewhere in
 * the bundle (framework/skills-digital-ai.ts, framework/rubrics-digital-ai.ts,
 * scenarios-digital-ai.ts).
 */
export const DA_UNITS_06_10: UnitDef[] = [
  // =========================================================================
  // UNIT 06 — Warning signs of a fabricated citation
  // =========================================================================
  {
    id: "unit.da.06",
    chapterId: "ch.da.catching-and-disclosing-errors",
    order: 6,
    title: {
      ar: "علامات الاستشهاد الملفّق: متى تشكّين في نتيجة الأداة",
      en: "Warning Signs of a Fabricated Citation: When to Doubt the Tool's Answer",
    },
    subtitle: {
      ar: "قضية لا تعرفينها، اقتباس مثالي أكثر مما ينبغي، تنسيق مختلف قليلاً - كلها إشارات تستحق دقيقتين من الفحص.",
      en: "A case you don't quite recognize, a quote that's a little too perfect, formatting that's slightly off — each is worth two minutes of checking.",
    },
    primarySkillId: "skill.ai-output-verification",
    skillIds: ["skill.ai-output-verification", "skill.responsible-ai-use"],
    stage: 3,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.da.06.hook",
        text: {
          ar: "تطلب مايا صباغ من أداة بحث قانوني بالذكاء الاصطناعي سوابق قضائية عن القوة القاهرة في نزاع تأخر شحنة، فتحصل على اسم قضية لا تتذكر أنها سمعت به من قبل.",
          en: "Maya Sabbagh asks an AI research tool for precedent on force majeure in a shipment-delay dispute, and gets back a case name she's never once heard before.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.da.06.why",
        text: {
          ar: "أداة الذكاء الاصطناعي تكتب بثقة تامة سواء كانت محقة أم مخطئة. الثقة في الصياغة ليست دليلاً على صحة المحتوى - والاستشهاد الملفّق يبدو غالباً أكثر إتقاناً من الحقيقي.",
          en: "An AI tool writes with total confidence whether it's right or wrong. Confident phrasing is no proof of accuracy — a fabricated citation often looks more polished than a real one.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.da.06.goals",
        goals: {
          ar: [
            "أن تحددي ثلاث علامات تحذيرية شائعة على استشهاد أو واقعة ملفّقة من أداة ذكاء اصطناعي.",
            "أن تبني عادة الشك المهني: التوقف عند أي نتيجة لا تتذكرينها أو لا تستطيعين تتبع مصدرها.",
            "أن تميّزي بين الشك الذي يستحق التحقق الفوري والشك الزائد الذي يعطّل العمل بلا داعٍ.",
          ],
          en: [
            "Identify three common warning signs of a fabricated citation or fact from an AI tool.",
            "Build the habit of professional doubt: pausing at any result you don't recognize or can't trace to a source.",
            "Tell doubt worth immediate verification apart from excessive doubt that stalls work with no real reason.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.da.06.lesson",
        title: {
          ar: "ثلاث علامات، لا سبب للذعر",
          en: "Three Signs, No Reason to Panic",
        },
        body: {
          ar: [
            "أدوات الذكاء الاصطناعي التوليدية لا 'تكذب' عن قصد، لكنها مصمَّمة لإنتاج نص يبدو معقولاً - وأحياناً تنتج اسم قضية أو رقم مادة لا وجود له فعلياً.",
            "العلامة الأولى: اسم قضية أو مرجع 'لا يرنّ جرساً' - لم تسمعي به من قبل رغم خبرتك في هذا النوع من الملفات، ولا تجدينه بسرعة عند بحث مباشر.",
            "العلامة الثانية: اقتباس 'مثالي أكثر مما ينبغي' - جملة تلخّص حجتك بدقة تامة وكأنها كُتبت لأجلك، بلا أي غموض أو تحفظ يحمله الحكم القضائي الحقيقي عادة.",
            "العلامة الثالثة: تنسيق الاستشهاد مختلف قليلاً - رقم قضية بصيغة غير مألوفة، أو تاريخ لا يتبع نمط المحكمة المعتادة، أو اسم محكمة غير دقيق.",
            "لا تحتاجين لتصبحي خبيرة في كشف الزيف؛ تحتاجين فقط لعادة واحدة: كل استشهاد أو رقم من أداة ذكاء اصطناعي يُعامَل كـ'غير مؤكَّد' حتى تتحققي منه بمصدر مستقل.",
            "هذا لا يعني رفض الأداة أو التحقق من كل كلمة بلا تمييز؛ يعني التوقف تحديداً عند العلامات الثلاث، والمرور السريع بما عداها.",
          ],
          en: [
            "Generative AI tools don't 'lie' on purpose, but they're built to produce plausible-sounding text — and sometimes that means a case name or article number that simply doesn't exist.",
            "First sign: a case name or reference that 'rings no bell' — you've never heard of it despite working this kind of matter, and a quick direct search doesn't surface it either.",
            "Second sign: a quote that's 'too perfect' — a sentence that sums up your argument with suspicious precision, with none of the hedging or nuance real judicial language usually carries.",
            "Third sign: citation formatting that's slightly off — a case number in an unfamiliar format, a date that doesn't fit the court's usual pattern, or a court name that isn't quite right.",
            "You don't need to become an expert at spotting fabrication; you need one habit: treat every citation or figure from an AI tool as 'unverified' until confirmed against an independent source.",
            "This doesn't mean rejecting the tool or checking every single word indiscriminately; it means pausing specifically at these three signs, and moving quickly past everything else.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.da.06.visual",
        title: {
          ar: "ثلاث علامات تحذيرية",
          en: "Three Warning Signs",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "لا يرنّ جرساً", en: "Rings no bell" },
            detail: {
              ar: "اسم قضية أو مرجع لم تسمعي به من قبل رغم خبرتك بهذا النوع من الملفات.",
              en: "A case name or reference you've never heard of, despite working this kind of matter.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "مثالي أكثر مما ينبغي", en: "Too perfect" },
            detail: {
              ar: "اقتباس يلخّص حجتك بدقة تامة، بلا أي غموض أو تحفظ.",
              en: "A quote that sums up your argument with suspicious precision, no hedging at all.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "تنسيق مختلف قليلاً", en: "Formatting slightly off" },
            detail: {
              ar: "رقم قضية أو تاريخ أو اسم محكمة لا يتبع النمط المعتاد.",
              en: "A case number, date or court name that doesn't fit the usual pattern.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "عاملي كل استشهاد كغير مؤكَّد", en: "Treat every citation as unverified" },
            detail: {
              ar: "حتى تتحققي منه بمصدر مستقل - هذه هي العادة الواحدة التي تكفي.",
              en: "Until confirmed against an independent source — this one habit is enough.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.da.06.worked",
        strong: {
          label: {
            ar: "مايا تضبط استشهاداً ملفّقاً قبل أن يذهب أبعد",
            en: "Maya catches a fabricated citation before it goes further",
          },
          text: {
            ar: [
              "تطلب مايا من أداة بحث قانوني سوابق عن القوة القاهرة في نزاع تأخر شحنة حبوب لصالح شركة بترا للحبوب، فتحصل على استشهاد بقضية باسم غريب لم تسمع به من قبل.",
              "تلاحظ أن الاقتباس المرفق مثالي جداً - يلخّص حجتها بالضبط دون أي تحفظ، وهذا غير معتاد في أحكام محاكم التجارة التي تراجعها عادة.",
              "تبحث عن القضية في قاعدة بيانات المحكمة مباشرة، فلا تجد أي أثر لها، فتحذفها من المسودة وتبحث عن سابقة حقيقية بدلاً منها.",
            ],
            en: [
              "Maya asks an AI research tool for force-majeure precedent in a grain-shipment delay dispute for Petra Grain Trading, and gets a citation to a case with an odd name she's never heard.",
              "She notices the attached quote is too perfect — it sums up her argument exactly, with none of the hedging usually found in the commercial court rulings she normally reviews.",
              "She searches the court database directly, finds no trace of the case at all, removes it from the draft, and looks for a real precedent instead.",
            ],
          },
          why: {
            ar: "لاحظت علامتين معاً - الاسم غير المألوف والاقتباس شديد الدقة - فتوقفت للتحقق بدل الوثوق بالثقة الظاهرة في صياغة الأداة.",
            en: "She noticed two signs together — the unfamiliar name and the suspiciously precise quote — and paused to verify instead of trusting the tool's confident tone.",
          },
        },
        weak: {
          label: {
            ar: "زميل يثق بالصياغة المقنعة وحدها",
            en: "A colleague trusts convincing phrasing alone",
          },
          text: {
            ar: ["يدرج زميل الاستشهاد كما ظهر في نتيجة الأداة مباشرة في المذكرة، مطمئناً لأن الصياغة بدت مقنعة ومهنية تماماً."],
            en: ["A colleague drops the citation straight into the memo exactly as the tool produced it, reassured because the phrasing sounded thoroughly convincing and professional."],
          },
          why: {
            ar: "الثقة في الصياغة ليست دليلاً على الدقة؛ لو تحقق لعرف أن القضية غير موجودة أصلاً، وقد تصل المذكرة لموكل أو محكمة بمرجع لا وجود له.",
            en: "Confident phrasing isn't proof of accuracy; a quick check would have shown the case doesn't exist at all — and the memo could reach a client or court citing something that isn't real.",
          },
        },
      },
      { kind: "activity", id: "s.da.06.a1", activityId: "act.da.06.1", mode: "quick" },
      { kind: "activity", id: "s.da.06.a2", activityId: "act.da.06.2", mode: "guided" },
      { kind: "activity", id: "s.da.06.a3", activityId: "act.da.06.3", mode: "guided" },
      { kind: "activity", id: "s.da.06.a4", activityId: "act.da.06.4", mode: "independent" },
      { kind: "activity", id: "s.da.06.a5", activityId: "act.da.06.5", mode: "independent" },
      { kind: "summary", id: "s.da.06.summary", summaryCardId: "card.da.06" },
      {
        kind: "apply_tomorrow",
        id: "s.da.06.apply",
        task: {
          ar: "في أول نتيجة تحصلين عليها من أداة ذكاء اصطناعي غداً، ابحثي عن العلامات الثلاث قبل أن تثقي بها.",
          en: "On the first result you get from an AI tool tomorrow, check for the three signs before trusting it.",
        },
        detail: {
          ar: "اسم لا يرن جرساً، اقتباس مثالي أكثر مما ينبغي، أو تنسيق مختلف قليلاً - أي منها يستحق توقفاً.",
          en: "A name that rings no bell, a too-perfect quote, or slightly off formatting — any one of them is worth stopping for.",
        },
      },
      {
        kind: "next_mission",
        id: "s.da.06.next",
        teaser: {
          ar: "عرفت متى تشكّين. الوحدة القادمة: ماذا تكتبين بالضبط بعد أن تكتشفي الخطأ فعلاً.",
          en: "You know when to doubt. Next: exactly what to write once you've actually caught the error.",
        },
      },
    ],
    activities: [
      {
        id: "act.da.06.1",
        kind: "multiple_choice",
        skillId: "skill.ai-output-verification",
        stage: 3,
        weight: 1,
        context: {
          ar: [
            "تبحث مايا عن سابقة قضائية بشأن فسخ عقد إيجار تجاري، فتحصل من أداة الذكاء الاصطناعي على استشهاد بقضية تحمل اسماً لم تسمع به قط، مع اقتباس يلخّص موقفها تماماً.",
          ],
          en: [
            "Maya is researching precedent on terminating a commercial lease, and the AI tool returns a citation to a case she's never heard of, with a quote that sums up her position exactly.",
          ],
        },
        prompt: {
          ar: "ما أول شيء ينبغي أن تفعله مايا الآن؟",
          en: "What should Maya do first, right now?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "تتحقق من وجود القضية في قاعدة بيانات محاكم مستقلة قبل استخدام الاستشهاد.",
              en: "Verify the case exists in an independent court database before using the citation.",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. اسم غير مألوف واقتباس مثالي معاً علامتان تستحقان توقفاً فورياً للتحقق.",
              en: "Exactly — an unfamiliar name and a too-perfect quote together are two signs that call for an immediate check.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "تستخدم الاستشهاد كما هو لأن الأداة مصممة لتكون دقيقة.",
              en: "Use the citation as-is since the tool is designed to be accurate.",
            },
            rationale: {
              ar: "الثقة في تصميم الأداة ليست بديلاً عن التحقق؛ الأدوات التوليدية تنتج نصاً معقولاً لا مضموناً مؤكداً دائماً.",
              en: "Trusting the tool's design is no substitute for verification; generative tools produce plausible text, not always confirmed content.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "تحذف الاستشهاد فوراً دون أي بحث إضافي عنه.",
              en: "Delete the citation immediately with no further research at all.",
            },
            rationale: {
              ar: "قد تكون القضية حقيقية فعلاً؛ الحل ليس رفض كل نتيجة بل التحقق منها بمصدر مستقل أولاً.",
              en: "The case might be real; the answer isn't rejecting every result outright but verifying it against an independent source first.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "تسأل زميلاً إن كان يعرف القضية بدل البحث في قاعدة بيانات.",
              en: "Ask a colleague if they know the case instead of searching a database.",
            },
            rationale: {
              ar: "رأي زميل غير موثوق بما يكفي كتحقق فعلي؛ فقط المصدر الرسمي يؤكد وجود القضية ونصها.",
              en: "A colleague's impression isn't reliable enough as real verification; only the official source confirms the case exists and what it says.",
            },
          },
        ],
      },
      {
        id: "act.da.06.2",
        kind: "categorization",
        skillId: "skill.ai-output-verification",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "صنّفي كل ملاحظة عن استشهاد: هل هي علامة تحذيرية أم أمر طبيعي؟",
          en: "Sort each note about a citation: a warning sign, or nothing unusual?",
        },
        hint: {
          ar: "اسألي: هل هذا اسم غير مألوف، دقة مفرطة تخدم حجتك، أو تنسيق غير معتاد؟",
          en: "Ask: is this an unfamiliar name, suspiciously exact precision, or unusual formatting?",
        },
        accessibleAlternative: {
          ar: "اختاري التصنيف من أزرار «علامة تحذيرية» / «طبيعي» أسفل كل ملاحظة بدل السحب.",
          en: "Choose \"Warning sign\" / \"Normal\" from buttons under each note instead of dragging.",
        },
        buckets: [
          { id: "warning", label: { ar: "علامة تحذيرية", en: "Warning sign" } },
          { id: "normal", label: { ar: "طبيعي", en: "Normal" } },
        ],
        items: [
          {
            id: "c1",
            label: { ar: "اسم قضية لم يظهر في أي بحث سابق قمتِ به على هذا الموضوع.", en: "A case name that hasn't turned up in any earlier search you've done on this topic." },
            bucketId: "warning",
            rationale: {
              ar: "عدم معرفة سابقة رغم خبرتك بالموضوع أول علامة تستحق التحقق.",
              en: "Not recognizing it despite your experience with the topic is a first sign worth checking.",
            },
          },
          {
            id: "c2",
            label: { ar: "اقتباس يذكر مبلغ تعويض محدد بالضبط كما يناسب حجتك.", en: "A quote naming an exact compensation figure that suits your argument perfectly." },
            bucketId: "warning",
            rationale: {
              ar: "الدقة المفرطة التي تخدم حجتك بالضبط أكثر مما يخدم حكم قضائي واقعي عادة.",
              en: "Precision that suits your argument exactly, more than a real ruling usually does, is a warning sign.",
            },
          },
          {
            id: "c3",
            label: { ar: "استشهاد برقم قضية بصيغة السنة والرقم المعتادة في محاكم البلد.", en: "A citation with a case number in the year-and-number format the country's courts normally use." },
            bucketId: "normal",
            rationale: {
              ar: "تنسيق مطابق للنمط المعروف لا يثير شكاً بذاته.",
              en: "Formatting that matches the country's known pattern raises no concern on its own.",
            },
          },
          {
            id: "c4",
            label: { ar: "تاريخ حكم لا يتبع أي نمط ترقيم تعرفه محاكم هذا البلد.", en: "A ruling date that doesn't follow any numbering pattern this country's courts use." },
            bucketId: "warning",
            rationale: {
              ar: "تنسيق غير مألوف للتاريخ أو الترقيم علامة ثالثة تستحق تحققاً مباشراً.",
              en: "An unfamiliar date or numbering format is a third sign worth direct verification.",
            },
          },
          {
            id: "c5",
            label: { ar: "استشهاد بقضية تعرفتِ عليها سابقاً في تدريب أو بحث آخر.", en: "A citation to a case you've already come across in earlier training or research." },
            bucketId: "normal",
            rationale: {
              ar: "قضية سبق أن تحققت من وجودها فعلياً لا تحتاج تحققاً مكرراً في كل مرة.",
              en: "A case you've already confirmed exists elsewhere doesn't need re-verifying every single time.",
            },
          },
          {
            id: "c6",
            label: { ar: "جملة اقتباس تبدو صياغتها أدبية أكثر من لغة الأحكام القضائية المعتادة.", en: "A quoted sentence phrased more like literary prose than usual judicial language." },
            bucketId: "warning",
            rationale: {
              ar: "أسلوب لا يشبه اللغة القانونية الفعلية إشارة إضافية لاقتباس قد يكون مصنوعاً.",
              en: "Phrasing that doesn't read like real judicial language is an extra sign the quote may be manufactured.",
            },
          },
        ],
      },
      {
        id: "act.da.06.3",
        kind: "find_mistake",
        skillId: "skill.ai-output-verification",
        stage: 3,
        weight: 2,
        context: {
          ar: ["تحضّر مايا فقرة عن سابقة قضائية بشأن التأخر في التسليم بسبب ظروف الطقس."],
          en: ["Maya is drafting a paragraph about precedent on delivery delays caused by weather conditions."],
        },
        prompt: {
          ar: "«أرست محكمة التمييز التجارية في قرارها رقم ٤٤٥ لعام ٢٠١٩ مبدأً واضحاً مفاده أن أي تأخر ناتج عن ظروف جوية استثنائية يُعفي المورد من المسؤولية كاملة دون قيد أو شرط، بصياغة نهائية لا تحتمل أي تفسير آخر.» أي جزء من هذه الفقرة يستحق التوقف للتحقق فوراً؟",
          en: "'In its Ruling No. 445 of 2019, the Commercial Court of Cassation established a clear principle that any delay caused by exceptional weather fully exempts the supplier from liability, with no condition whatsoever, in final wording admitting no other reading.' Which part of this paragraph deserves stopping to verify immediately?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "العبارة التي تصف الإعفاء بأنه «كامل دون قيد أو شرط» و«لا تحتمل أي تفسير آخر» - دقة ويقين أكثر مما تحمله الأحكام القضائية عادة.",
              en: "The phrase describing the exemption as 'fully... with no condition whatsoever' and 'admitting no other reading' — more certainty than real rulings usually carry.",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. الأحكام القضائية الحقيقية نادراً ما تصاغ بهذا اليقين المطلق؛ هذه الدقة المفرطة علامة اقتباس مثالي أكثر مما ينبغي.",
              en: "Exactly. Real rulings are rarely phrased with this absolute certainty; this excessive precision is the sign of a quote that's too perfect.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "رقم القرار «٤٤٥ لعام ٢٠١٩» لأنه رقم كبير جداً بالنسبة لمحكمة تمييز.",
              en: "The ruling number '445 of 2019' because it's too high a number for a court of cassation.",
            },
            rationale: {
              ar: "حجم الرقم وحده ليس دليلاً؛ محاكم كثيرة تصدر مئات القرارات سنوياً دون أن يعني ذلك خللاً.",
              en: "The number's size alone isn't proof of anything; many courts issue hundreds of rulings a year without that meaning anything is wrong.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "ذكر «التمييز التجارية» كاسم للمحكمة لأنه اسم طويل جداً.",
              en: "Naming the court 'Commercial Court of Cassation' because it's too long a name.",
            },
            rationale: {
              ar: "اسم المحكمة نفسه مألوف وصحيح شكلاً؛ الطول وحده ليس علامة تحذيرية.",
              en: "The court's name itself is familiar and correctly formed; length alone isn't a warning sign.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "لا شيء يستحق التوقف، الفقرة جاهزة للاستخدام كما هي.",
              en: "Nothing deserves stopping — the paragraph is ready to use as-is.",
            },
            rationale: {
              ar: "تجاهل اليقين المطلق غير المعتاد يترك مذكرة مبنية على استشهاد قد يكون ملفقاً بالكامل.",
              en: "Ignoring the unusually absolute certainty leaves a memo built on a citation that could be entirely fabricated.",
            },
          },
        ],
      },
      {
        id: "act.da.06.4",
        kind: "short_written",
        skillId: "skill.ai-output-verification",
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.digital-ai-written.v1",
        weight: 3,
        minChars: 90,
        context: {
          ar: ["حصلتِ من أداة ذكاء اصطناعي على استشهاد بقضية تدعم حجتك تماماً في نزاع تجاري، لكن اسم القضية لا يبدو مألوفاً لك."],
          en: ["An AI tool gave you a case citation that supports your argument perfectly in a commercial dispute, but the case name doesn't look familiar."],
        },
        prompt: {
          ar: "اكتبي الخطوات الثلاث التي ستتبعينها تحديداً قبل أن تدرجي هذا الاستشهاد في مذكرتك (٣٠-٥٠ كلمة).",
          en: "Write the three specific steps you'd take before including this citation in your memo (30-50 words).",
        },
        modelAnswer: {
          ar: [
            "«سأبحث عن القضية في قاعدة بيانات المحاكم الرسمية مباشرة بدل الاعتماد على ما ذكرته الأداة، وسأقارن نص الاقتباس بالحكم الأصلي كاملاً، وسأتحقق أن رقم القضية وتاريخها يطابقان تنسيق محاكم هذا البلد.»",
          ],
          en: [
            "'I'll search for the case directly in the official court database instead of relying on what the tool stated, compare the quoted text against the full original ruling, and confirm the case number and date match this country's court formatting.'",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«سأقرأ الاستشهاد مرة أخرى للتأكد أنه منطقي.»"],
            en: ["'I'll read the citation again to make sure it sounds reasonable.'"],
          },
          whatIsWrong: {
            ar: "إعادة القراءة تختبر المنطق الظاهري فقط، لا وجود القضية فعلياً؛ استشهاد ملفّق غالباً يبدو منطقياً تماماً.",
            en: "Re-reading only tests surface logic, not whether the case actually exists; a fabricated citation usually sounds perfectly logical.",
          },
        },
      },
      {
        id: "act.da.06.5",
        kind: "reflection",
        skillId: "skill.ai-output-verification",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجعي نتيجة من أداة ذكاء اصطناعي وثقتِ بها بسرعة لأن صياغتها بدت مقنعة.",
          en: "Recall a result from an AI tool you trusted quickly because it sounded convincing.",
        },
        followUp: {
          ar: "أي علامة من العلامات الثلاث - الاسم غير المألوف، الاقتباس المثالي، أو التنسيق المختلف - كانت لتجعلك تتوقفين لو انتبهتِ لها؟",
          en: "Which of the three signs — the unfamiliar name, the too-perfect quote, or the different formatting — would have made you pause, had you noticed it?",
        },
      },
    ],
    summaryCard: {
      id: "card.da.06",
      title: {
        ar: "ثلاث علامات تستحق التوقف",
        en: "Three Signs Worth Stopping For",
      },
      whatYouLearned: {
        ar: [
          "الثقة في صياغة أداة الذكاء الاصطناعي ليست دليلاً على دقة محتواها.",
          "ثلاث علامات تحذيرية: اسم لا يرنّ جرساً، اقتباس مثالي أكثر مما ينبغي، وتنسيق مختلف قليلاً.",
          "عاملي كل استشهاد أو رقم من الأداة كغير مؤكد حتى تتحققي منه بمصدر مستقل.",
        ],
        en: [
          "Confident phrasing from an AI tool is no proof its content is accurate.",
          "Three warning signs: a name that rings no bell, a too-perfect quote, and slightly off formatting.",
          "Treat every citation or figure from the tool as unverified until confirmed against an independent source.",
        ],
      },
      framework: {
        name: { ar: "العلامات الثلاث", en: "The Three Signs" },
        steps: [
          { ar: "لا يرنّ جرساً.", en: "Rings no bell." },
          { ar: "مثالي أكثر مما ينبغي.", en: "Too perfect." },
          { ar: "تنسيق مختلف قليلاً.", en: "Formatting slightly off." },
        ],
      },
      rememberThis: {
        ar: "استشهاد ملفّق يبدو غالباً أكثر إتقاناً من استشهاد حقيقي.",
        en: "A fabricated citation often looks more polished than a real one.",
      },
      useItTomorrow: {
        ar: "في أول نتيجة تحصلين عليها من أداة ذكاء اصطناعي غداً، ابحثي عن العلامات الثلاث قبل أن تثقي بها.",
        en: "On the first result you get from an AI tool tomorrow, check for the three signs before trusting it.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.legal-ops-kpis", "src.modernize-your-law-firm", "src.client-centered-law-firm"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 07 — A short note: what was wrong, what you fixed
  // =========================================================================
  {
    id: "unit.da.07",
    chapterId: "ch.da.catching-and-disclosing-errors",
    order: 7,
    title: {
      ar: "مذكّرة قصيرة: ماذا كان خطأ، وماذا صححتِ",
      en: "A Short Note: What Was Wrong, What You Fixed",
    },
    subtitle: {
      ar: "الإصلاح الصامت يخفي حجم الاعتماد على الأداة - والمذكرة الواضحة تحمي الملف والمشرف معاً.",
      en: "A silent fix hides how much you relied on the tool — a clear note protects the file and your supervisor alike.",
    },
    primarySkillId: "skill.disclosing-ai-errors",
    skillIds: ["skill.disclosing-ai-errors", "skill.ai-output-verification"],
    stage: 3,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.da.07.hook",
        text: {
          ar: "تصحح مايا رقم مادة قانون عمل خاطئة أدرجتها أداة الصياغة في مذكرة امتثال لصالح شركة برق للإلكترونيات، وتتردد للحظة: هل تكتفي بالتصحيح الصامت أم تذكر ما حدث؟",
          en: "Maya fixes a wrong labor-law article number a drafting tool inserted into a compliance memo for Barq Electronics, and pauses: does she just fix it silently, or note what happened?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.da.07.why",
        text: {
          ar: "تصحيح صامت يترك المشرف بلا فكرة عن حجم اعتماد المسودة على الأداة، فلا يستطيع تقييم بقية المستند بثقة. مذكرة غامضة لا تفيد أكثر من الصمت.",
          en: "A silent fix leaves the supervisor with no idea how much of the draft relied on the tool, so they can't confidently assess the rest of it. A vague note helps no more than silence.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.da.07.goals",
        goals: {
          ar: [
            "أن تكتبي مذكرة تسمّي بدقة ما كان خاطئاً وأين وجدتِه.",
            "أن تصفي التصحيح المقترَح أو المُنفَّذ بخطوة عملية واحدة واضحة.",
            "أن تتجنبي نسخ بيانات موكل حساسة في المذكرة دون حاجة فعلية.",
          ],
          en: [
            "Write a note that precisely names what was wrong and where you found it.",
            "Describe the proposed or completed fix as one clear, practical step.",
            "Avoid copying sensitive client data into the note with no real need.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.da.07.lesson",
        title: {
          ar: "أربعة عناصر في جملتين",
          en: "Four Elements, Two Sentences",
        },
        body: {
          ar: [
            "مذكرة الإفصاح عن خطأ أداة ليست تقريراً مطولاً؛ هي جملتان إلى ثلاث تحمل ما يلزم بالضبط: أين الخطأ، وماذا فعلتِ حياله.",
            "العنصر الأول: حددي الموضع بدقة - أي فقرة، أي بند، أي رقم - لا 'وجدت خطأ في المسودة' التي لا تدل على شيء.",
            "العنصر الثاني: صفي الخطأ الفعلي وسببه، دون تحميل الأداة اللوم الكامل بلغة تعفيك من مسؤولية التحقق.",
            "العنصر الثالث: اذكري التصحيح المحدد الذي أجريتِه أو تقترحينه - الرقم الصحيح، أو مصدر بديل تحققتِ منه.",
            "العنصر الرابع: إن كان المستند بات جاهزاً للخروج، اذكري صراحة أنه يجب أن يتوقف حتى يُصحَّح - لا أن تتركي الأمر ضمنياً.",
            "لا تنسخي فقرات كاملة من ملف الموكل في المذكرة؛ الإشارة إلى موضعها تكفي، فالمذكرة نفسها قد يقرأها أكثر من شخص لاحقاً.",
          ],
          en: [
            "A note disclosing a tool's error isn't a long report; it's two or three sentences carrying exactly what's needed: where the error was, and what you did about it.",
            "First element: pin down the exact spot — which paragraph, which clause, which figure — not 'I found an error in the draft,' which points to nothing.",
            "Second element: describe the actual error and its cause, without placing all blame on the tool in language that excuses you from the duty to verify.",
            "Third element: state the specific fix you made or propose — the correct figure, or an alternative source you verified.",
            "Fourth element: if the document is already about to go out, state explicitly that it must be held until corrected — don't leave that implied.",
            "Don't copy whole passages from the client's file into the note; pointing to their location is enough — the note itself may be read by more than one person later.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.da.07.visual",
        title: {
          ar: "غامض مقابل محدد",
          en: "Vague vs. Specific",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "تصحيح صامت", en: "Silent fix" },
            detail: {
              ar: "يخفي كل أثر لاعتماد المسودة على الأداة.",
              en: "Hides all trace of how much the draft relied on the tool.",
            },
            tone: "negative",
          },
          {
            label: { ar: "إشارة غامضة", en: "Vague flag" },
            detail: {
              ar: "«كانت هناك مشكلة في المسودة» - لا تحدد أين ولا ماذا.",
              en: "'There was an issue with the draft' — names neither where nor what.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "مذكرة محددة", en: "Specific note" },
            detail: {
              ar: "الموضع، الخطأ، التصحيح - في جملتين واضحتين.",
              en: "The spot, the error, the fix — in two clear sentences.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.da.07.worked",
        strong: {
          label: {
            ar: "مايا تكتب مذكرة واضحة لملف برق للإلكترونيات",
            en: "Maya writes a clear note for the Barq Electronics matter",
          },
          text: {
            ar: [
              "أدرجت أداة الصياغة رقم مادة خاطئاً من قانون العمل في مذكرة إنهاء خدمة موظف لدى شركة برق للإلكترونيات، فتلاحظه مايا قبل إرسال المسودة للشريكة المسؤولة.",
              "تكتب في أعلى المسودة: «الفقرة الثانية أشارت للمادة ٥٠ بدل المادة ٤٧ بشأن مهلة الإشعار؛ صححتها بعد التحقق من نص القانون مباشرة. المسودة جاهزة للمراجعة الآن.»",
            ],
            en: [
              "A drafting tool inserted the wrong labor-law article number into an employee termination memo for Barq Electronics, and Maya catches it before sending the draft to the responsible partner.",
              "She writes at the top of the draft: 'Paragraph two cited Article 50 instead of Article 47 on the notice period; corrected after checking the law's text directly. The draft is ready for review now.'",
            ],
          },
          why: {
            ar: "حددت الموضع والخطأ والتصحيح في جملتين، دون لوم الأداة أو نسخ أي بيانات زائدة عن الموكل، فمنحت الشريكة صورة كاملة بثوانٍ.",
            en: "She named the spot, the error and the fix in two sentences, without blaming the tool or copying any unnecessary client data, giving the partner a full picture in seconds.",
          },
        },
        weak: {
          label: {
            ar: "تصحيح صامت لا يخبر أحداً",
            en: "A silent fix that tells no one",
          },
          text: {
            ar: ["يصحح زميل رقم المادة بصمت في المسودة النهائية، دون أن يذكر لأحد أن الأداة أخطأت أصلاً."],
            en: ["A colleague silently corrects the article number in the final draft, without telling anyone the tool got it wrong in the first place."],
          },
          why: {
            ar: "الصمت يترك الشريكة بلا فكرة عن حجم اعتماد المسودة على الأداة، فتراجع بقية المستند بثقة غير مبرَّرة.",
            en: "The silence leaves the partner with no idea how much the draft relied on the tool, so she reviews the rest of it with unwarranted confidence.",
          },
        },
      },
      { kind: "activity", id: "s.da.07.a1", activityId: "act.da.07.1", mode: "quick" },
      { kind: "activity", id: "s.da.07.a2", activityId: "act.da.07.2", mode: "guided" },
      { kind: "activity", id: "s.da.07.a3", activityId: "act.da.07.3", mode: "guided" },
      { kind: "activity", id: "s.da.07.a4", activityId: "act.da.07.4", mode: "independent" },
      { kind: "activity", id: "s.da.07.a5", activityId: "act.da.07.5", mode: "independent" },
      { kind: "summary", id: "s.da.07.summary", summaryCardId: "card.da.07" },
      {
        kind: "apply_tomorrow",
        id: "s.da.07.apply",
        task: {
          ar: "أول مرة تصححين فيها خطأ أداة غداً، اكتبي مذكرة من جملتين قبل أن تنتقلي لشيء آخر.",
          en: "The first time you fix a tool's error tomorrow, write a two-sentence note before moving to anything else.",
        },
        detail: {
          ar: "حددي الموضع والخطأ الفعلي والتصحيح - بلا لوم كامل للأداة وبلا بيانات زائدة عن الحاجة.",
          en: "Name the spot, the actual error and the fix — no fully blaming the tool, no unnecessary data.",
        },
      },
      {
        kind: "next_mission",
        id: "s.da.07.next",
        teaser: {
          ar: "عرفت كيف تكتبين مذكرة واضحة. الوحدة القادمة: المحادثة الفعلية حين لا يبقى وقت للكتابة، وعليك أن تفصحي بصوتك مباشرة.",
          en: "You know how to write a clear note. Next: the live conversation when there's no time to write, and you have to disclose out loud.",
        },
      },
    ],
    activities: [
      {
        id: "act.da.07.1",
        kind: "true_false",
        skillId: "skill.disclosing-ai-errors",
        stage: 3,
        weight: 1,
        prompt: {
          ar: "صواب أم خطأ: يكفي أن تكتبي «صححت خطأ من الأداة» دون تحديد الموضع أو نوع الخطأ.",
          en: "True or false: it's enough to write 'I fixed an error from the tool' without naming the spot or the type of error.",
        },
        options: [
          {
            id: "o1",
            label: { ar: "خطأ", en: "False" },
            correct: true,
            rationale: {
              ar: "بلا موضع محدد ونوع خطأ، لا يستطيع المشرف تقييم حجم الاعتماد على الأداة في بقية المستند.",
              en: "Without a specific spot and error type, the supervisor can't assess how much the rest of the document relied on the tool.",
            },
          },
          {
            id: "o2",
            label: { ar: "صواب", en: "True" },
            rationale: {
              ar: "عبارة عامة كهذه تشبه الصمت في أثرها؛ لا تفيد أحداً يحاول تقييم موثوقية المستند.",
              en: "A generic phrase like this has nearly the same effect as silence — it helps no one trying to assess the document's reliability.",
            },
          },
        ],
      },
      {
        id: "act.da.07.2",
        kind: "ordering",
        skillId: "skill.disclosing-ai-errors",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "رتّبي عناصر مذكرة الإفصاح الجيدة بترتيبها المنطقي.",
          en: "Order the elements of a good disclosure note in their logical sequence.",
        },
        hint: {
          ar: "ابدئي بالموضع، وانتهِ بتوضيح إن كان المستند يجب أن يتوقف.",
          en: "Start with the spot; end by clarifying whether the document should be held.",
        },
        accessibleAlternative: {
          ar: "اختاري رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل عنصر بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each element instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "حددي الموضع الدقيق للخطأ - أي فقرة أو بند أو رقم.", en: "Name the exact spot of the error — which paragraph, clause or figure." },
            rationale: {
              ar: "بلا موضع، لا يعرف القارئ أين ينظر ولا ما مدى انتشار الخطأ.",
              en: "Without a spot, the reader doesn't know where to look or how far the error spreads.",
            },
          },
          {
            id: "i2",
            label: { ar: "صفي الخطأ الفعلي بلا لوم كامل للأداة.", en: "Describe the actual error without fully blaming the tool." },
            rationale: {
              ar: "يأتي منطقياً بعد تحديد الموضع، ويوضح ما حدث بدقة.",
              en: "Logically follows naming the spot, and clarifies precisely what happened.",
            },
          },
          {
            id: "i3",
            label: { ar: "اذكري التصحيح المحدد الذي أجريتِه.", en: "State the specific fix you made." },
            rationale: {
              ar: "بعد وصف المشكلة، يحتاج القارئ معرفة أن حلاً فعلياً وُجد.",
              en: "After describing the problem, the reader needs to know a real fix was found.",
            },
          },
          {
            id: "i4",
            label: { ar: "وضّحي إن كان المستند يجب أن يتوقف حتى المراجعة.", en: "Clarify whether the document should be held until review." },
            rationale: {
              ar: "آخر خطوة لأنها القرار العملي الذي يبني على كل ما سبق.",
              en: "Last because it's the practical decision that builds on everything stated before it.",
            },
          },
        ],
      },
      {
        id: "act.da.07.3",
        kind: "categorization",
        skillId: "skill.disclosing-ai-errors",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "صنّفي كل مقتطف من مذكرة: محدد ومفيد، غامض، أم يكشف بيانات زائدة عن الحاجة؟",
          en: "Sort each note excerpt: specific and useful, vague, or exposing unnecessary data?",
        },
        hint: {
          ar: "اسألي: هل يحدد الموضع والتصحيح، أم يكتفي بعبارة عامة، أم ينسخ تفصيلاً حساساً لا لزوم له؟",
          en: "Ask: does it name the spot and fix, does it settle for a generic phrase, or does it copy an unneeded sensitive detail?",
        },
        accessibleAlternative: {
          ar: "اختاري التصنيف من قائمة منسدلة بجانب كل مقتطف بدل السحب.",
          en: "Pick the category from a dropdown beside each excerpt instead of dragging.",
        },
        buckets: [
          { id: "specific", label: { ar: "محدد ومفيد", en: "Specific and useful" } },
          { id: "vague", label: { ar: "غامض", en: "Vague" } },
          { id: "exposes", label: { ar: "يكشف بيانات زائدة", en: "Exposes unnecessary data" } },
        ],
        items: [
          {
            id: "c1",
            label: { ar: "«الفقرة الثالثة استخدمت اسم الموكل الكامل ورقم حسابه المصرفي كاملاً كمثال توضيحي لا حاجة له.»", en: "'Paragraph three used the client's full name and complete bank account number as an illustrative example that wasn't needed.'" },
            bucketId: "exposes",
            rationale: {
              ar: "نسخ بيانات حساسة لا لزوم لها يعرّض الموكل لخطر لا داعي له.",
              en: "Copying sensitive data with no real need exposes the client to unnecessary risk.",
            },
          },
          {
            id: "c2",
            label: { ar: "«كانت هناك مشكلة صغيرة، تم حلها.»", en: "'There was a small issue, it's been resolved.'" },
            bucketId: "vague",
            rationale: {
              ar: "لا تحدد الموضع ولا الخطأ ولا التصحيح، فتساوي الصمت تقريباً.",
              en: "Names neither the spot, the error, nor the fix — nearly equal to silence.",
            },
          },
          {
            id: "c3",
            label: { ar: "«البند السابع ذكر مهلة ١٥ يوماً بدل ٣٠ يوماً المتفق عليها؛ صححتها بعد مراجعة العقد الأصلي.»", en: "'Clause seven stated a 15-day period instead of the agreed 30 days; corrected after reviewing the original contract.'" },
            bucketId: "specific",
            rationale: {
              ar: "يحدد الموضع والخطأ والمصدر الذي تحقق منه التصحيح.",
              en: "Names the spot, the error, and the source the fix was checked against.",
            },
          },
          {
            id: "c4",
            label: { ar: "«الأداة أخطأت وحدها، لا علاقة لي بالأمر.»", en: "'The tool made the mistake on its own — nothing to do with me.'" },
            bucketId: "vague",
            rationale: {
              ar: "يحمّل الأداة اللوم الكامل دون ذكر أي تصحيح فعلي أو مصدر تحقق.",
              en: "Places full blame on the tool without stating any actual fix or verification source.",
            },
          },
          {
            id: "c5",
            label: { ar: "«أرفقت نسخة كاملة من تقرير مايا الطبي المذكور في الملف لتوضيح السياق.»", en: "'Attached the full copy of Maya's medical report mentioned in the file, to clarify context.'" },
            bucketId: "exposes",
            rationale: {
              ar: "تفصيل صحي حساس لا علاقة له بمشكلة الأداة نفسها لا ينبغي أن يظهر في مذكرة داخلية عن جودة الصياغة.",
              en: "A sensitive health detail unrelated to the tool issue itself has no place in an internal note about drafting quality.",
            },
          },
          {
            id: "c6",
            label: { ar: "«الفقرة الثانية استشهدت بنسبة فائدة ٩٪ بدل ٧٪ المتفق عليها في اتفاقية التسوية؛ صححتها ووضعت علامة لمراجعة الشريك قبل الإرسال.»", en: "'Paragraph two cited a 9% interest rate instead of the 7% agreed in the settlement; corrected it and flagged it for the partner's review before sending.'" },
            bucketId: "specific",
            rationale: {
              ar: "يحدد الرقم الخاطئ والرقم الصحيح ومساراً واضحاً للمراجعة قبل الخروج.",
              en: "Names the wrong figure, the right one, and a clear review path before the document goes out.",
            },
          },
        ],
      },
      {
        id: "act.da.07.4",
        kind: "short_written",
        skillId: "skill.disclosing-ai-errors",
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.digital-ai-written.v1",
        weight: 3,
        minChars: 100,
        context: {
          ar: ["اكتشفتِ أن أداة صياغة ذكاء اصطناعي غيّرت تعريف مصطلح «تاريخ الاستحقاق» في عقد توريد لصالح موكل بشكل يخالف ما اتُفق عليه شفهياً."],
          en: ["You discovered that an AI drafting tool changed the definition of 'due date' in a supply contract for a client, in a way that contradicts what was orally agreed."],
        },
        prompt: {
          ar: "اكتبي المذكرة القصيرة التي سترفقينها بالمسودة قبل إرسالها للمراجعة (٣٠-٥٠ كلمة).",
          en: "Write the short note you'd attach to the draft before sending it for review (30-50 words).",
        },
        modelAnswer: {
          ar: [
            "«البند الثاني عرّف تاريخ الاستحقاق بثلاثين يوماً من التسليم بدل خمسة عشر يوماً كما اتُفق شفهياً مع الموكل؛ صححته بعد التأكد من محضر الاجتماع. المسودة جاهزة للمراجعة، والبند يستحق نظرة أخيرة منك.»",
          ],
          en: [
            "'Clause two defined the due date as thirty days from delivery instead of the fifteen days orally agreed with the client; corrected it after checking the meeting minutes. The draft's ready for review — that clause is worth one more look from you.'",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«لاحظت أن الأداة غيّرت شيئاً في العقد فصححته.»"],
            en: ["'I noticed the tool changed something in the contract, so I fixed it.'"],
          },
          whatIsWrong: {
            ar: "لا تحدد أي بند تغيّر ولا ما الفرق الفعلي، فيبقى المشرف بلا فكرة عمّا حدث فعلاً أو حجم اعتماد المسودة على الأداة.",
            en: "Names neither which clause changed nor what the actual difference was, leaving the supervisor with no real sense of what happened or how much the draft relied on the tool.",
          },
        },
      },
      {
        id: "act.da.07.5",
        kind: "reflection",
        skillId: "skill.disclosing-ai-errors",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجعي خطأ صغيراً صححتِه بصمت في عملك دون أن تخبري أحداً به.",
          en: "Recall a small error you silently fixed in your work without telling anyone.",
        },
        followUp: {
          ar: "لو كتبتِ مذكرة من جملتين عنه الآن، ماذا كنت ستقولين بالضبط؟",
          en: "If you wrote a two-sentence note about it now, what exactly would you say?",
        },
      },
    ],
    summaryCard: {
      id: "card.da.07",
      title: {
        ar: "الموضع، الخطأ، التصحيح",
        en: "The Spot, the Error, the Fix",
      },
      whatYouLearned: {
        ar: [
          "التصحيح الصامت يخفي حجم اعتماد المستند على الأداة عن كل من يراجعه لاحقاً.",
          "مذكرة جيدة تحدد الموضع الدقيق، والخطأ الفعلي، والتصحيح - في جملتين لا أكثر.",
          "لا تنسخي بيانات موكل حساسة زائدة عن الحاجة في مذكرة داخلية عن جودة أداة.",
        ],
        en: [
          "A silent fix hides from anyone reviewing later how much a document relied on the tool.",
          "A good note names the exact spot, the actual error, and the fix — in two sentences, no more.",
          "Don't copy unnecessary sensitive client data into an internal note about a tool's quality.",
        ],
      },
      framework: {
        name: { ar: "الموضع · الخطأ · التصحيح", en: "Spot · Error · Fix" },
        steps: [
          { ar: "حددي الموضع الدقيق.", en: "Name the exact spot." },
          { ar: "صفي الخطأ الفعلي دون لوم كامل للأداة.", en: "Describe the actual error without fully blaming the tool." },
          { ar: "اذكري التصحيح المحدد الذي أجريتِه.", en: "State the specific fix you made." },
        ],
      },
      rememberThis: {
        ar: "مذكرة لا تحدد شيئاً تساوي الصمت في أثرها.",
        en: "A note that names nothing has nearly the same effect as silence.",
      },
      useItTomorrow: {
        ar: "أول مرة تصححين فيها خطأ أداة غداً، اكتبي مذكرة من جملتين قبل أن تنتقلي لشيء آخر.",
        en: "The first time you fix a tool's error tomorrow, write a two-sentence note before moving to anything else.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.modernize-your-law-firm", "src.legal-ops-kpis", "src.client-centered-law-firm"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 08 — Disclosing a near-miss to the supervising lawyer (simulation)
  // =========================================================================
  {
    id: "unit.da.08",
    chapterId: "ch.da.catching-and-disclosing-errors",
    order: 8,
    title: {
      ar: "الإفصاح للشريكة المشرفة عن خطأ كدتِ ترسلينه",
      en: "Disclosing to the Supervising Lawyer a Near-Miss You Almost Sent",
    },
    subtitle: {
      ar: "معرفة متى تفصحين لا تكفي؛ اللحظة الفعلية أمام الشريكة هي الاختبار الحقيقي.",
      en: "Knowing when to disclose isn't enough — the actual moment in front of the partner is the real test.",
    },
    primarySkillId: "skill.disclosing-ai-errors",
    skillIds: ["skill.disclosing-ai-errors", "skill.ai-output-verification"],
    stage: 3,
    estimatedMinutes: 12,
    steps: [
      {
        kind: "hook",
        id: "s.da.08.hook",
        text: {
          ar: "تعرفين الآن كيف تكتبين مذكرة تصحيح واضحة. لكن ماذا لو لم يبق وقت للمذكرة، وعليك أن تخبري الشريكة المسؤولة بصوتك الآن، قبل أن تضغط زر الإرسال؟",
          en: "You now know how to write a clear correction note. But what if there's no time for a note, and you have to tell the responsible partner out loud, right now, before she hits send?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.da.08.why",
        text: {
          ar: "الإفصاح المتأخر أو المتردد يترك المستند يخرج فعلاً بخطأ حقيقي. اللحظة التي تقولين فيها الحقيقة بوضوح، لا بعدها، هي ما يحمي الموكل والمكتب معاً.",
          en: "Late or hesitant disclosure lets the document go out with a real error in it anyway. The moment you state the truth clearly — not after — is what protects both the client and the firm.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.da.08.goals",
        goals: {
          ar: [
            "أن تبدئي الإفصاح بجملة مباشرة تسمّي الخطأ الفعلي دون مقدمات طويلة.",
            "أن تتحملي مسؤولية التحقق بوضوح دون تحميل الأداة اللوم الكامل.",
            "أن تقترحي مساراً عملياً للتصحيح، لا أن تكتفي بذكر المشكلة.",
          ],
          en: [
            "Open the disclosure with a direct sentence naming the actual error, no long preamble.",
            "Clearly own the verification responsibility without placing full blame on the tool.",
            "Propose a practical path to the fix, not just naming the problem.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.da.08.lesson",
        title: {
          ar: "الجملة الأولى تحدد المحادثة كلها",
          en: "The First Sentence Sets the Whole Conversation",
        },
        body: {
          ar: [
            "أصعب جزء من الإفصاح ليس معرفة ما تقولينه، بل قول الجملة الأولى دون تلطيف أو مقدمة طويلة تؤجل الحقيقة.",
            "ابدئي بالخطأ مباشرة: «قبل أن نرسل المذكرة، وجدت أن الاستشهاد في الفقرة الثانية غير صحيح ولا وجود له.» لا «أردت التأكد من نقطة صغيرة.»",
            "لا تحمّلي الأداة اللوم الكامل. «الأداة اقترحت الاستشهاد» صحيحة، لكن «ولم أتحقق منه بعد» هي الجملة التي تحمي مصداقيتك.",
            "إن استعجلت الشريكة أو بدت منزعجة، لا تتراجعي عن الحقيقة لتخفيف التوتر؛ كرري الوقائع بهدوء مع تفسير مختصر.",
            "أنهي المحادثة بمسار واضح: ما التالي، من يفعله، ومتى - لا تتركي الأمر معلقاً بعد الإفصاح.",
          ],
          en: [
            "The hardest part of disclosure isn't knowing what to say — it's saying the first sentence without softening it or stalling with a long preamble.",
            "Open with the error directly: 'Before we send the memo, I found the citation in paragraph two is wrong and doesn't exist.' Not 'I wanted to check something small.'",
            "Don't place full blame on the tool. 'The tool suggested the citation' is true, but 'and I hadn't verified it yet' is the sentence that protects your credibility.",
            "If the partner seems rushed or displeased, don't retreat from the truth to ease the tension; calmly restate the facts with a brief explanation.",
            "Close with a clear path: what happens next, who does it, and when — don't leave things hanging once you've disclosed.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.da.08.visual",
        title: {
          ar: "خطوات الإفصاح الفعلي",
          en: "Steps of Actual Disclosure",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "قولي الوقائع مباشرة", en: "State facts directly" },
            detail: {
              ar: "الخطأ والموضع في جملة واحدة، بلا مقدمات طويلة.",
              en: "The error and the spot, in one sentence, no long preamble.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "تحمّلي المسؤولية بلا لوم كامل", en: "Own it, without fully blaming the tool" },
            detail: {
              ar: "«لم أتحقق منه بعد» تحمي مصداقيتك أكثر من لوم الأداة وحدها.",
              en: "'I hadn't verified it yet' protects your credibility more than blaming the tool alone.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "اقترحي الخطوة التالية", en: "Propose the next step" },
            detail: {
              ar: "مساراً عملياً بزمن محدد، لا مجرد الإشارة إلى المشكلة.",
              en: "A practical path with a set timeframe, not just flagging the problem.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.da.08.worked",
        strong: {
          label: {
            ar: "مايا تخبر الشريكة فادية بوضوح قبل الإرسال",
            en: "Maya tells partner Fadia clearly before sending",
          },
          text: {
            ar: [
              "تكتشف مايا صباغ، وهي تراجع مذكرة اعتراض على علامة تجارية لصالح شركة زمرد للمجوهرات، أن الأداة أدرجت استشهاداً بقضية لا وجود لها قبل عشر دقائق فقط من موعد الإرسال.",
              "تدخل مكتب الشريكة فادية رحال مباشرة وتقول: «قبل أن نرسل المذكرة، وجدت أن الاستشهاد في الفقرة الثالثة غير صحيح ولم أتحقق منه بعد. أقترح تأجيل الإرسال عشر دقائق لأستبدله بسابقة حقيقية تحققت منها.»",
            ],
            en: [
              "Reviewing an opposition brief on a trademark for Zumurrud Gems, Maya Sabbagh discovers the tool inserted a citation to a case that doesn't exist, just ten minutes before it's due to go out.",
              "She walks straight into partner Fadia Rahal's office and says: 'Before we send the brief, I found the citation in paragraph three is wrong and I hadn't verified it yet. I'd suggest holding it ten minutes so I can swap in a real precedent I've checked.'",
            ],
          },
          why: {
            ar: "قالت الوقائع مباشرة، تحملت أنها لم تتحقق بعد بدل لوم الأداة وحدها، واقترحت خطوة عملية بزمن محدد.",
            en: "She stated the facts directly, owned that she hadn't yet verified it instead of blaming the tool alone, and proposed a practical step with a concrete timeframe.",
          },
        },
        weak: {
          label: {
            ar: "زميل يلمّح بدل أن يفصح",
            en: "A colleague hints instead of disclosing",
          },
          text: {
            ar: ["يقول زميل للشريكة: «ربما يستحق الاستشهاد في الفقرة الثالثة نظرة إضافية إن سنح الوقت لاحقاً.»"],
            en: ["A colleague tells the partner: 'Maybe the citation in paragraph three could use another look, if there's time later.'"],
          },
          why: {
            ar: "التلميح يترك الشريكة بلا فكرة أن هناك خطأ حقيقياً وعاجلاً، فقد ترسل المذكرة كما هي ظناً منها أنه مجرد تحفظ عابر.",
            en: "The hint leaves the partner with no idea there's a real, urgent error, and she may send the brief as-is, assuming it's just a passing reservation.",
          },
        },
      },
      { kind: "activity", id: "s.da.08.a1", activityId: "act.da.08.1", mode: "quick" },
      { kind: "activity", id: "s.da.08.a2", activityId: "act.da.08.2", mode: "guided" },
      { kind: "activity", id: "s.da.08.a3", activityId: "act.da.08.3", mode: "independent" },
      { kind: "simulation", id: "s.da.08.sim", scenarioId: "scn.catching-an-ai-hallucination" },
      { kind: "activity", id: "s.da.08.a4", activityId: "act.da.08.4", mode: "independent" },
      { kind: "summary", id: "s.da.08.summary", summaryCardId: "card.da.08" },
      {
        kind: "apply_tomorrow",
        id: "s.da.08.apply",
        task: {
          ar: "أول خطأ حقيقي تجدينه غداً، أخبري الجهة المسؤولة بجملة مباشرة خلال دقائق، لا نهاية اليوم.",
          en: "The first real error you find tomorrow, tell the responsible person in a direct sentence within minutes, not by day's end.",
        },
        detail: {
          ar: "قولي الخطأ، تحملي عدم التحقق، واقترحي خطوة عملية بزمن محدد.",
          en: "State the error, own not having verified, and propose a practical step with a set timeframe.",
        },
      },
      {
        kind: "next_mission",
        id: "s.da.08.next",
        teaser: {
          ar: "عرفتِ كيف تفصحين عن خطأ حدث. الوحدة القادمة: ما لا يدخل أبداً في أداة عامة، قبل أن يحدث أي خطأ أصلاً.",
          en: "You know how to disclose an error that's already happened. Next: what never goes into a general tool, before any error happens at all.",
        },
      },
    ],
    activities: [
      {
        id: "act.da.08.1",
        kind: "multiple_choice",
        skillId: "skill.disclosing-ai-errors",
        stage: 3,
        weight: 1,
        context: {
          ar: ["تكتشفين قبل خمس دقائق من إرسال مذكرة لشريك مسؤول أن الأداة أدرجت استشهاداً غير موجود."],
          en: ["Five minutes before a memo is due to go to the responsible partner, you discover the tool inserted a citation that doesn't exist."],
        },
        prompt: {
          ar: "ما أفضل جملة افتتاحية لإخبار الشريك الآن؟",
          en: "What's the best opening line to tell the partner now?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«قبل أن نرسل المذكرة، وجدت أن الاستشهاد في الفقرة الثانية غير صحيح ولم أتحقق منه بعد.»",
              en: "'Before we send the memo, I found the citation in paragraph two is wrong and I hadn't verified it yet.'",
            },
            correct: true,
            rationale: {
              ar: "تسمي الخطأ والموضع فوراً وتتحمل مسؤولية عدم التحقق، فتمنح الشريك صورة كاملة من الجملة الأولى.",
              en: "Names the error and the spot immediately and owns not having verified it, giving the partner the full picture from the first sentence.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«أردت فقط أن أطمئن على نقطة صغيرة في المذكرة قبل الإرسال.»",
              en: "'I just wanted to check on a small point in the memo before sending.'",
            },
            rationale: {
              ar: "يخفي حجم المشكلة الفعلية ويجعلها تبدو كتفصيل عابر، فقد يُصرف النظر عنها تحت ضغط الوقت.",
              en: "Hides the real scale of the problem, making it sound like a minor detail that could get waved off under time pressure.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«الأداة أخطأت في الاستشهاد، لا علاقة لي بذلك.»",
              en: "'The tool got the citation wrong — that's not on me.'",
            },
            rationale: {
              ar: "يحمّل الأداة اللوم الكامل ويتجنب الإقرار بمسؤولية التحقق التي تبقى على عاتقك دائماً.",
              en: "Places full blame on the tool and avoids owning the verification duty that's always yours.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "الانتظار حتى تسأل الشريكة إن كان كل شيء جاهزاً للإرسال.",
              en: "Waiting until the partner asks whether everything's ready to send.",
            },
            rationale: {
              ar: "الانتظار يخاطر بأن تُرسَل المذكرة قبل أن تُسأل أصلاً؛ الوقت الحرج يستدعي المبادرة فوراً.",
              en: "Waiting risks the memo going out before you're even asked; critical timing calls for speaking up immediately.",
            },
          },
        ],
      },
      {
        id: "act.da.08.2",
        kind: "branching_decision",
        skillId: "skill.disclosing-ai-errors",
        secondarySkillIds: ["skill.ai-output-verification"],
        stage: 3,
        weight: 2,
        prompt: {
          ar: "مارسي محادثة قصيرة مع الشريكة المسؤولة حين تشكك في مدى تأكدك من الخطأ.",
          en: "Practice a short conversation with the responsible partner when she questions how sure you are about the error.",
        },
        startNodeId: "n1",
        nodes: [
          {
            id: "n1",
            text: {
              ar: "تدخلين مكتب الشريكة فادية وتخبرينها أن استشهاداً في المذكرة غير صحيح. تسألك: «هل أنتِ متأكدة؟ ليس لدينا وقت لتأخير الإرسال.»",
              en: "You enter partner Fadia's office and tell her a citation in the memo is wrong. She asks: 'Are you sure? We don't have time to delay sending this.'",
            },
            choices: [
              {
                id: "c1",
                label: {
                  ar: "«متأكدة تماماً، تحققت من قاعدة بيانات المحكمة مباشرة ولا وجود للقضية. أقترح استبدالها بسابقة تحققت منها الآن، خلال عشر دقائق.»",
                  en: "'Completely sure — I checked the court database directly and the case doesn't exist. I suggest swapping in a precedent I've already verified, within ten minutes.'",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "تؤكد موقفها بثبات مع دليل ملموس ووقت محدد للحل، فتمنح الشريكة قراراً واضحاً بدل مزيد من القلق.",
                  en: "She holds her position firmly with concrete evidence and a defined time for the fix, giving the partner a clear decision instead of more worry.",
                },
              },
              {
                id: "c2",
                label: {
                  ar: "«ربما أنا مخطئة، يمكن أن نرسلها كما هي إن كان الوقت ضيقاً.»",
                  en: "'Maybe I'm wrong — we could send it as-is if time's tight.'",
                },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "التراجع عن الحقيقة لتخفيف الضغط يترك خطأً حقيقياً يخرج للموكل أو المحكمة.",
                  en: "Backing off the truth to ease the pressure lets a real error go out to the client or the court.",
                },
              },
              {
                id: "c3",
                label: {
                  ar: "«لست متأكدة تماماً، لكن أشعر أن هناك خطأ ما.»",
                  en: "'I'm not totally sure, but I feel something's off.'",
                },
                nextNodeId: "n2",
                quality: "weak",
                rationale: {
                  ar: "التردد دون دليل ملموس يضعف الرسالة ويترك الشريكة غير مقتنعة بضرورة التأخير.",
                  en: "Hesitating with no concrete evidence weakens the message and leaves the partner unconvinced delay is necessary.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "تقول الشريكة: «إذن لسنا متأكدين، أرسليها كما هي وسنصححها لاحقاً إن لزم.»",
              en: "The partner says: 'So we're not sure — send it as-is and we'll fix it later if needed.'",
            },
            choices: [
              {
                id: "d1",
                label: {
                  ar: "«لا، تحققت فعلاً من قاعدة بيانات المحكمة والقضية غير موجودة. أحتاج عشر دقائق فقط لاستبدالها.»",
                  en: "'No — I did verify it against the court database and the case doesn't exist. I just need ten minutes to replace it.'",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "تصحح موقفها بدليل ملموس رغم ضغط الشريكة، فتستعيد المسار الصحيح قبل فوات الأوان.",
                  en: "She corrects her position with concrete evidence despite the partner's pressure, recovering the right path before it's too late.",
                },
              },
              {
                id: "d2",
                label: {
                  ar: "«حسناً، سنرسلها كما هي.»",
                  en: "'Okay, we'll send it as-is.'",
                },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "الموافقة على إرسال استشهاد غير مؤكد يترك خطأً حقيقياً في مستند وصل بالفعل لمحكمة أو موكل.",
                  en: "Agreeing to send an unverified citation lets a real error reach a court or client document.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.da.08.3",
        kind: "best_response",
        skillId: "skill.disclosing-ai-errors",
        stage: 3,
        weight: 2,
        context: {
          ar: ["يسألك الشريك المسؤول: «كيف حدث هذا الخطأ؟» بعد أن أخبرتِه أن استشهاداً غير صحيح كان في المسودة."],
          en: ["After you tell the responsible partner a citation in the draft was wrong, he asks: 'How did this happen?'"],
        },
        prompt: {
          ar: "ما أفضل رد يصف الوقائع دون التنصل من مسؤوليتك؟",
          en: "What's the best response that describes the facts without dodging your own responsibility?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«استخدمت أداة البحث للحصول على سوابق أولية، وأدرجت هذا الاستشهاد ضمنها، لكنني لم أتحقق منه بمصدر مستقل قبل أن ألاحظ الخطأ الآن.»",
              en: "'I used the research tool for initial precedent, it included this citation, but I hadn't verified it against an independent source before I caught the error just now.'",
            },
            correct: true,
            rationale: {
              ar: "تصف الوقائع بدقة وتقر بوضوح أن التحقق كان مسؤوليتها هي، دون تحميل الأداة اللوم الكامل.",
              en: "Describes the facts precisely and clearly owns that verification was her responsibility, without placing full blame on the tool.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«الأداة أعطتني معلومة خاطئة، هذا ليس خطأً مني.»",
              en: "'The tool gave me wrong information — that's not my mistake.'",
            },
            rationale: {
              ar: "يتنصل من مسؤولية التحقق بالكامل، وهو بالضبط ما يفقد الشريك ثقته بحكمها المهني.",
              en: "Fully dodges the verification responsibility — exactly what erodes the partner's trust in her professional judgment.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«لست متأكدة، ربما أخطأت في القراءة.»",
              en: "'I'm not sure, maybe I misread it.'",
            },
            rationale: {
              ar: "يشكك في أصل المشكلة دون داع، بينما الوقائع واضحة: الأداة أنتجت استشهاداً غير موجود.",
              en: "Casts needless doubt on the problem's origin, when the facts are clear: the tool produced a citation that doesn't exist.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«هذا يحدث دائماً مع هذه الأدوات، لا داعي للقلق.»",
              en: "'This always happens with these tools, no need to worry.'",
            },
            rationale: {
              ar: "يهوّن من خطورة الموقف بدل وصفه بوقائعه الفعلية، وقد يقلل من جدية التعامل مع الخطأ.",
              en: "Downplays the seriousness instead of describing the actual facts, and risks the error being taken less seriously than it should.",
            },
          },
        ],
      },
      {
        id: "act.da.08.4",
        kind: "reflection",
        skillId: "skill.disclosing-ai-errors",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "بعد المحاكاة: في أي لحظة شعرتِ أقرب للتلطيف أو التأجيل بدل قول الخطأ مباشرة؟",
          en: "After the simulation: at which moment did you feel closer to softening or delaying, instead of stating the error directly?",
        },
        followUp: {
          ar: "ما الجملة الافتتاحية التي ستستخدمينها في المرة القادمة التي تكتشفين فيها خطأً حقيقياً قبل الإرسال؟",
          en: "What opening line will you use next time you catch a real error before something goes out?",
        },
      },
    ],
    summaryCard: {
      id: "card.da.08",
      title: {
        ar: "قوليها بوضوح، قبل الإرسال",
        en: "Say It Clearly, Before It Goes Out",
      },
      whatYouLearned: {
        ar: [
          "الجملة الأولى تحدد إن كانت المحادثة ستنجح في إيقاف خطأ حقيقي أم لا.",
          "تحمّلي مسؤولية عدم التحقق بوضوح، دون تحميل الأداة اللوم الكامل.",
          "أنهي كل إفصاح بمسار عملي محدد: ما التالي، من يفعله، ومتى.",
        ],
        en: [
          "The first sentence decides whether the conversation actually stops a real error or not.",
          "Clearly own not having verified, without placing full blame on the tool.",
          "Close every disclosure with a specific practical path: what's next, who does it, when.",
        ],
      },
      framework: {
        name: { ar: "قولي · تحمّلي · اقترحي", en: "State · Own · Propose" },
        steps: [
          { ar: "قولي الخطأ مباشرة دون مقدمات.", en: "State the error directly, no preamble." },
          { ar: "تحمّلي مسؤولية التحقق دون لوم الأداة كاملاً.", en: "Own the verification responsibility without fully blaming the tool." },
          { ar: "اقترحي خطوة عملية بزمن محدد.", en: "Propose a practical step with a set timeframe." },
        ],
      },
      rememberThis: {
        ar: "الإفصاح المتأخر يحمي شعورك، لكنه لا يوقف خطأً وصل بالفعل.",
        en: "Late disclosure protects your comfort, but it doesn't stop an error that's already gone out.",
      },
      useItTomorrow: {
        ar: "أول خطأ حقيقي تجدينه غداً، أخبري الجهة المسؤولة بجملة مباشرة خلال دقائق، لا نهاية اليوم.",
        en: "The first real error you find tomorrow, tell the responsible person in a direct sentence within minutes, not by day's end.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.client-centered-law-firm", "src.modernize-your-law-firm", "src.legal-ops-kpis"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 09 — What never goes into a general tool, and what an approved one can
  // =========================================================================
  {
    id: "unit.da.09",
    chapterId: "ch.da.protecting-data-and-knowing-limits",
    order: 9,
    title: {
      ar: "ما لا يدخل أبداً في أداة عامة، وما يمكن لأداة معتمدة",
      en: "What Never Goes Into a General Tool, and What an Approved One Can Handle",
    },
    subtitle: {
      ar: "الإعداد الآمن للأداة لا يجعل كل استخدام آمناً - بعض المواقف يجب أن تبقى خارج أي أداة رقمية كلياً.",
      en: "A tool's safe configuration doesn't make every use of it safe — some situations must stay off any digital tool entirely.",
    },
    primarySkillId: "skill.protecting-data-in-digital-tools",
    skillIds: ["skill.protecting-data-in-digital-tools", "skill.responsible-ai-use"],
    stage: 4,
    estimatedMinutes: 10,
    steps: [
      {
        kind: "hook",
        id: "s.da.09.hook",
        text: {
          ar: "يسأل متدرب مايا: «هل يمكنني أن ألصق عقد الموكل في أداة الذكاء الاصطناعي العامة لتلخيصه بسرعة؟» فتتوقف مايا قبل أن تجيب.",
          en: "A trainee asks Maya: 'Can I paste the client's contract into the general AI tool to summarize it quickly?' Maya pauses before answering.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.da.09.why",
        text: {
          ar: "بيانات الموكل التي تدخل أداة عامة قد تُستخدم لتدريب نماذج مستقبلية أو تُخزَّن خارج سيطرة المكتب تماماً. ثقة الموكل تُبنى على أنها لن تُشارَك بلا حساب.",
          en: "Client data that enters a general tool may be used to train future models or stored entirely outside the firm's control. Client trust rests on the assumption it's never shared carelessly.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.da.09.goals",
        goals: {
          ar: [
            "أن تميّزي بين معلومات لا تدخل أي أداة عامة إطلاقاً ومعلومات يمكن استخدام أداة معتمدة لها.",
            "أن تتعرفي على حدود أدوات المكتب المعتمدة، لا افتراض أن 'المعتمدة' تعني 'آمنة لكل شيء'.",
            "أن تحددي مواقف يجب فيها رفض استخدام أي أداة رقمية بغض النظر عن إعداداتها.",
          ],
          en: [
            "Tell information that must never enter any general tool apart from information an approved tool can handle.",
            "Know the firm's approved tools' actual limits, not assume 'approved' means 'safe for anything.'",
            "Identify situations where any digital tool should be declined, regardless of its configuration.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.da.09.lesson",
        title: {
          ar: "ثلاث دوائر، لا دائرة واحدة",
          en: "Three Circles, Not One",
        },
        body: {
          ar: [
            "أسهل خطأ في هذا الموضوع هو التعامل معه كسؤال واحد: 'هل هذه الأداة معتمدة أم لا؟' الواقع أعقد قليلاً من ذلك.",
            "الدائرة الأولى: معلومات لا تدخل أي أداة عامة إطلاقاً - هوية الموكل الكاملة، وقائع محمية بالامتياز المهني، تفاصيل ملف لم يُرفع بعد للمحكمة.",
            "الدائرة الثانية: معلومات يمكن استخدام أداة معتمدة من المكتب لها - بعد إخفاء الهوية أو تعميم التفاصيل، إن كانت الأداة معتمدة فعلاً لهذا النوع من العمل.",
            "الدائرة الثالثة، والأهم: مواقف يُرفض فيها استخدام أي أداة رقمية كلياً، بغض النظر عن اعتمادها - حين يطلب الموكل صراحة عدم استخدام أي أداة، أو حين تكون الحساسية استثنائية.",
            "اعتماد المكتب لأداة يعني أنها خضعت لفحص أمني وتعاقدي معين؛ لا يعني أن كل استخدام لها مناسب تلقائياً لكل موقف.",
            "حين تشكين، اسألي: هل وافق الموكل صراحة على هذا الاستخدام؟ إن لم يكن الجواب نعم واضحة، اعتبري الدائرة الثالثة هي الأصل.",
          ],
          en: [
            "The easiest mistake here is treating it as one question: 'Is this tool approved or not?' Reality is a little more complex than that.",
            "First circle: information that never enters any general tool at all — the client's full identity, privileged facts, details of a matter not yet filed with a court.",
            "Second circle: information an approved firm tool can work with — once identity is stripped or details generalised, if that tool is actually approved for this kind of work.",
            "Third circle, the most important: situations where you decline any digital tool at all, regardless of approval — when the client explicitly asks that none be used, or when sensitivity is exceptional.",
            "A firm approving a tool means it passed a certain security and contractual review; it doesn't mean every use of it automatically fits every situation.",
            "When in doubt, ask: did the client explicitly agree to this use? If the answer isn't a clear yes, treat the third circle as the default.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.da.09.visual",
        title: {
          ar: "ثلاث دوائر حماية",
          en: "Three Protective Circles",
        },
        variant: "scale",
        items: [
          {
            label: { ar: "لا تدخل أي أداة عامة", en: "Never enters any general tool" },
            detail: {
              ar: "هوية الموكل، الوقائع المحمية بالامتياز، ملف لم يُرفع بعد.",
              en: "Client identity, privileged facts, an unfiled matter.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "أداة معتمدة، بعد إخفاء الهوية", en: "Approved tool, identity stripped" },
            detail: {
              ar: "تفاصيل معممة أو مجهولة الهوية ضمن أداة اعتمدها المكتب لهذا الغرض.",
              en: "Generalised or anonymised detail, within a tool the firm approved for this purpose.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "رفض أي أداة رقمية كلياً", en: "Decline any digital tool entirely" },
            detail: {
              ar: "حين يطلب الموكل ذلك صراحة، أو حين تكون الحساسية استثنائية.",
              en: "When the client explicitly asks, or sensitivity is exceptional.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.da.09.worked",
        strong: {
          label: {
            ar: "مايا ترفض أداة عامة وتقترح بديلاً معتمداً",
            en: "Maya declines a general tool and proposes an approved alternative",
          },
          text: {
            ar: [
              "يطلب متدرب لدى مايا صباغ نصيحة: هل يمكنه لصق عقد توريد لموكل في أداة ذكاء اصطناعي عامة لتلخيص بنوده بسرعة قبل اجتماع بعد ساعة؟",
              "تجيب مايا: «لا، هذا العقد يحمل اسم الموكل وأرقام حسابات دقيقة. استخدم أداة الملخصات المعتمدة من المكتب بدلاً منها - تعطي نتيجة مشابهة دون أن تغادر بياناتنا خوادم المكتب.»",
            ],
            en: [
              "A trainee asks Maya Sabbagh: can he paste a client's supply contract into a general AI tool to quickly summarize its clauses before a meeting in an hour?",
              "Maya answers: 'No — this contract carries the client's name and exact account figures. Use the firm's approved summarizing tool instead; it gives a similar result without our data ever leaving the firm's servers.'",
            ],
          },
          why: {
            ar: "ميّزت بين الحساسية الفعلية للبيانات والحاجة العملية للتلخيص، فرفضت الأداة العامة واقترحت بديلاً حقيقياً ينجز المهمة نفسها بأمان.",
            en: "She distinguished the data's real sensitivity from the practical need to summarize, declining the general tool while proposing a real alternative that achieves the same task safely.",
          },
        },
        weak: {
          label: {
            ar: "زميل يلصق العقد كاملاً بنية بسيطة",
            en: "A colleague pastes the full contract with a simple intent",
          },
          text: {
            ar: ["يلصق زميل نص العقد كاملاً في أداة عامة مجانية، مطمئناً لأنه فقط 'يريد ملخصاً سريعاً'."],
            en: ["A colleague pastes the entire contract text into a free general tool, reassured because he's 'just after a quick summary.'"],
          },
          why: {
            ar: "النية البسيطة لا تغيّر أن بيانات الموكل غادرت للتو خوادم لا يعرف المكتب شيئاً عن سياستها في تخزين البيانات أو استخدامها.",
            en: "A simple intent doesn't change the fact that client data just left for servers the firm knows nothing about, in terms of storage policy or how the data might be used.",
          },
        },
      },
      { kind: "activity", id: "s.da.09.a1", activityId: "act.da.09.1", mode: "quick" },
      { kind: "activity", id: "s.da.09.a2", activityId: "act.da.09.2", mode: "guided" },
      { kind: "activity", id: "s.da.09.a3", activityId: "act.da.09.3", mode: "guided" },
      { kind: "activity", id: "s.da.09.a4", activityId: "act.da.09.4", mode: "independent" },
      { kind: "activity", id: "s.da.09.a5", activityId: "act.da.09.5", mode: "independent" },
      { kind: "summary", id: "s.da.09.summary", summaryCardId: "card.da.09" },
      {
        kind: "apply_tomorrow",
        id: "s.da.09.apply",
        task: {
          ar: "قبل أن تستخدمي أي أداة رقمية غداً لمهمة تخص موكلاً، اسألي عن دائرتها الثلاث أولاً.",
          en: "Before using any digital tool tomorrow for a client task, ask which of the three circles it falls into first.",
        },
        detail: {
          ar: "لا تدخل أي أداة عامة، أداة معتمدة بعد إخفاء الهوية، أو رفض كامل - أي دائرة ينطبق موقفك اليوم عليها؟",
          en: "Never any general tool, an approved tool with identity stripped, or a full decline — which circle fits today's situation?",
        },
      },
      {
        kind: "next_mission",
        id: "s.da.09.next",
        teaser: {
          ar: "عرفتِ المبدأ. الوحدة القادمة، والأخيرة: المحادثة الفعلية حين يضغط عليك زميل أو موكل لتخطي هذا المبدأ تحت ضغط الوقت.",
          en: "You know the principle. The next unit — the last one — is the live conversation when a colleague or client presses you to skip it under time pressure.",
        },
      },
    ],
    activities: [
      {
        id: "act.da.09.1",
        kind: "multiple_choice",
        skillId: "skill.protecting-data-in-digital-tools",
        stage: 4,
        weight: 1,
        context: {
          ar: ["يطلب منك موكل مساعدة في تلخيص مذكرة داخلية طويلة لا تحمل أي اسم أو رقم يخص أحداً، لغرض عرضها على فريقه."],
          en: ["A client asks you to help summarize a long internal memo that carries no name or number identifying anyone, for presenting to his team."],
        },
        prompt: {
          ar: "أي أداة الأنسب لهذه المهمة؟",
          en: "Which tool is most appropriate for this task?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "أداة معتمدة من المكتب، بعد التأكد أنها مصرح باستخدامها لهذا النوع من المستندات.",
              en: "An approved firm tool, after confirming it's cleared for this kind of document.",
            },
            correct: true,
            rationale: {
              ar: "المستند لا يحمل بيانات حساسة، فيمكن استخدام أداة معتمدة بأمان لهذا الغرض المحدد.",
              en: "The document carries no sensitive data, so an approved tool can safely handle this specific purpose.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "أي أداة ذكاء اصطناعي عامة متاحة، لأن المستند لا يحمل بيانات حساسة أصلاً.",
              en: "Any available general AI tool, since the document carries no sensitive data anyway.",
            },
            rationale: {
              ar: "حتى بلا بيانات حساسة ظاهرة، استخدام أداة غير معتمدة يتجاوز سياسة المكتب دون داعٍ فعلي.",
              en: "Even with no visible sensitive data, using an unapproved tool sidesteps firm policy with no real need to.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "رفض المساعدة بالكامل لأن أي أداة رقمية تحمل خطراً.",
              en: "Declining to help at all, since any digital tool carries risk.",
            },
            rationale: {
              ar: "الرفض الكامل هنا مبالغة؛ الموقف لا يستدعي الدائرة الثالثة لأن لا حساسية استثنائية فيه.",
              en: "A blanket refusal here is overcaution; this situation doesn't call for the third circle since there's no exceptional sensitivity.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "تلخيصه يدوياً فقط، لأن أي استخدام لأداة رقمية غير مناسب دائماً.",
              en: "Summarizing it manually only, since using any digital tool is always inappropriate.",
            },
            rationale: {
              ar: "الأدوات المعتمدة موجودة لأجل هذا النوع بالذات من المهام؛ تجنبها دوماً يهدر وقتاً بلا مبرر أمني حقيقي.",
              en: "Approved tools exist for exactly this kind of task; avoiding them always wastes time with no real security justification.",
            },
          },
        ],
      },
      {
        id: "act.da.09.2",
        kind: "categorization",
        skillId: "skill.protecting-data-in-digital-tools",
        stage: 4,
        weight: 2,
        prompt: {
          ar: "صنّفي كل معلومة في دائرتها الصحيحة من الدوائر الثلاث.",
          en: "Sort each piece of information into its correct one of the three circles.",
        },
        hint: {
          ar: "اسألي: هل تحدد هوية الموكل مباشرة، أم عُمِّمت التفاصيل، أم لا صلة لها بأي موكل أصلاً؟",
          en: "Ask: does it directly identify the client, has the detail been generalised, or is it unrelated to any client at all?",
        },
        accessibleAlternative: {
          ar: "اختاري الدائرة من قائمة منسدلة بجانب كل معلومة بدل السحب.",
          en: "Pick the circle from a dropdown beside each item instead of dragging.",
        },
        buckets: [
          { id: "never", label: { ar: "لا تدخل أي أداة عامة", en: "Never enters any general tool" } },
          { id: "approved", label: { ar: "أداة معتمدة فقط", en: "Approved tool only" } },
          { id: "any", label: { ar: "أي أداة موثوقة", en: "Any reliable tool" } },
        ],
        items: [
          {
            id: "c1",
            label: { ar: "اسم الموكل الكامل مقروناً برقم ملفه الداخلي.", en: "The client's full name paired with their internal matter number." },
            bucketId: "never",
            rationale: {
              ar: "يحدد هوية الموكل بدقة تكفي لربط أي بيانات لاحقة به مباشرة.",
              en: "Precisely identifies the client, enough to link any further data straight to them.",
            },
          },
          {
            id: "c2",
            label: { ar: "وقائع محمية بالامتياز المهني من محادثة استشارية خاصة.", en: "Privileged facts from a private advisory conversation." },
            bucketId: "never",
            rationale: {
              ar: "الامتياز المهني يحمي هذه الوقائع تحديداً من أي كشف خارج نطاق العلاقة مع الموكل.",
              en: "Professional privilege protects these specific facts from any disclosure outside the client relationship.",
            },
          },
          {
            id: "c3",
            label: { ar: "نص عقد معمم دون أسماء أو أرقام، لتلخيص بنوده العامة.", en: "A generalised contract text with no names or figures, for summarizing its general clauses." },
            bucketId: "approved",
            rationale: {
              ar: "التعميم يزيل الحساسية المباشرة، فيمكن لأداة معتمدة معالجته بأمان.",
              en: "Generalising removes the direct sensitivity, so an approved tool can safely process it.",
            },
          },
          {
            id: "c4",
            label: { ar: "سؤال عام عن الفرق بين نوعين من الشركات في القانون المحلي.", en: "A general question about the difference between two types of companies under local law." },
            bucketId: "any",
            rationale: {
              ar: "معلومة عامة بلا صلة بموكل بعينه، مناسبة لأي أداة موثوقة.",
              en: "General information with no tie to a specific client, fine for any reliable tool.",
            },
          },
          {
            id: "c5",
            label: { ar: "تفاصيل ملف لم يُرفع بعد للمحكمة، بانتظار قرار الموكل بالمتابعة من عدمه.", en: "Details of a matter not yet filed with a court, pending the client's decision on whether to proceed." },
            bucketId: "never",
            rationale: {
              ar: "ملف لم يُرفع بعد حساس بطبيعته؛ تسريب تفاصيله قبل قرار الموكل قد يضر بمصلحته.",
              en: "An unfiled matter is inherently sensitive; leaking its details before the client decides could harm their interests.",
            },
          },
          {
            id: "c6",
            label: { ar: "مسودة بريد إلكتروني عام لتحسين صياغته اللغوية فقط، دون أي تفاصيل قضية.", en: "A draft general email to improve its wording only, with no case details at all." },
            bucketId: "any",
            rationale: {
              ar: "لا يحمل أي معلومة تخص موكلاً أو قضية، فتحسين الصياغة اللغوية مناسب لأي أداة.",
              en: "Carries no information about a client or matter, so improving its phrasing suits any tool.",
            },
          },
        ],
      },
      {
        id: "act.da.09.3",
        kind: "matching",
        skillId: "skill.protecting-data-in-digital-tools",
        stage: 4,
        weight: 2,
        prompt: {
          ar: "طابقي كل موقف مع القرار الصحيح بشأن استخدام الأداة.",
          en: "Match each situation with the correct decision about using the tool.",
        },
        accessibleAlternative: {
          ar: "اختاري القرار المطابق من قائمة منسدلة بجانب كل موقف بدل السحب.",
          en: "Pick the matching decision from a dropdown beside each situation instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "موكل طلب صراحة ألا تُستخدم أي أداة رقمية في ملفه.", en: "A client explicitly asked that no digital tool be used on their matter." },
            right: {
              ar: "ارفضي أي أداة كلياً، حتى المعتمدة منها، احتراماً لطلبه الصريح.",
              en: "Decline any tool entirely, even approved ones, respecting their explicit request.",
            },
            rationale: {
              ar: "طلب الموكل الصريح يتجاوز اعتماد المكتب للأداة؛ رغبته هي الأصل هنا.",
              en: "The client's explicit request overrides the firm's approval of the tool; their wish is what governs here.",
            },
          },
          {
            id: "p2",
            left: { ar: "تلخيص مقال قانوني عام منشور لا صلة له بأي موكل.", en: "Summarizing a published general legal article unrelated to any client." },
            right: {
              ar: "استخدمي أي أداة موثوقة بحرية، لا حساسية فيه.",
              en: "Use any reliable tool freely — no sensitivity involved.",
            },
            rationale: {
              ar: "لا بيانات موكل هنا إطلاقاً، فلا داعي لأي قيد إضافي.",
              en: "No client data here at all, so no extra restriction is needed.",
            },
          },
          {
            id: "p3",
            left: { ar: "صياغة رد أولي على استفسار موكل يحمل تفاصيل مالية دقيقة.", en: "Drafting an initial reply to a client inquiry carrying precise financial detail." },
            right: {
              ar: "استخدمي أداة معتمدة من المكتب فقط، بعد التأكد أنها مصرح لها بهذا النوع من البيانات.",
              en: "Use only a firm-approved tool, after confirming it's cleared for this type of data.",
            },
            rationale: {
              ar: "البيانات حساسة لكنها ضمن نطاق عمل معتاد؛ الأداة المعتمدة كافية إن كانت مصرحة فعلاً.",
              en: "The data is sensitive but within routine work; an approved tool suffices if it's actually cleared for it.",
            },
          },
          {
            id: "p4",
            left: { ar: "ملف حساس استثنائياً يخص نزاعاً عائلياً لعائلة معروفة إعلامياً.", en: "An exceptionally sensitive file involving a family dispute for a publicly known family." },
            right: {
              ar: "تجنبي أي أداة رقمية كلياً مهما كانت معتمدة، نظراً لحساسية الموقف الاستثنائية.",
              en: "Avoid any digital tool at all, however approved, given the situation's exceptional sensitivity.",
            },
            rationale: {
              ar: "بعض المواقف تستدعي معالجة يدوية كاملة بصرف النظر عن أي اعتماد تقني.",
              en: "Some situations call for fully manual handling, regardless of any technical approval.",
            },
          },
        ],
      },
      {
        id: "act.da.09.4",
        kind: "short_written",
        skillId: "skill.protecting-data-in-digital-tools",
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.digital-ai-written.v1",
        weight: 3,
        minChars: 100,
        context: {
          ar: ["يطلب منك زميل مستعجل مساعدته بلصق ملخص وقائع نزاع موكل حساس في أداة ذكاء اصطناعي عامة لتسريع صياغة رد أولي."],
          en: ["A colleague in a hurry asks you to help by pasting a summary of a sensitive client dispute's facts into a general AI tool to speed up drafting an initial reply."],
        },
        prompt: {
          ar: "اكتبي تفسيراً موجزاً لماذا سترفضين هذا تحديداً، مع بديل عملي واحد (٣٠-٥٠ كلمة).",
          en: "Write a brief explanation for why you'd decline this specifically, with one practical alternative (30-50 words).",
        },
        modelAnswer: {
          ar: [
            "«الوقائع تحمل تفاصيل تكشف هوية الموكل ونزاعه، وهذا يتجاوز ما يجوز إدخاله لأداة عامة. لنستخدم أداة الصياغة المعتمدة من المكتب بدلاً منها، أو أرسل لي الوقائع معممة دون أسماء لأصوغ الرد يدوياً بسرعة.»",
          ],
          en: [
            "'These facts identify the client and their dispute, which goes beyond what belongs in a general tool. Let's use the firm's approved drafting tool instead, or send me the facts generalised, no names, and I'll draft the reply manually, fast.'",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«لا أعتقد أن هذا فكرة جيدة، لكن يمكننا المحاولة إن كنا مستعجلين.»"],
            en: ["'I don't think it's a great idea, but we could try it if we're really in a rush.'"],
          },
          whatIsWrong: {
            ar: "الرفض هنا متردد وغير حقيقي؛ يترك الباب مفتوحاً للموافقة تحت الضغط، وهو بالضبط ما يجب تجنبه.",
            en: "The refusal here is hesitant and not genuine; it leaves the door open to agreeing under pressure — exactly what should be avoided.",
          },
        },
      },
      {
        id: "act.da.09.5",
        kind: "reflection",
        skillId: "skill.protecting-data-in-digital-tools",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجعي موقفاً استخدمتِ فيه أداة رقمية لمهمة تخص موكلاً دون أن تسألي نفسك إن كانت مناسبة فعلاً.",
          en: "Recall a time you used a digital tool for a client-related task without asking yourself if it was actually appropriate.",
        },
        followUp: {
          ar: "في أي دائرة من الدوائر الثلاث كان يقع ذلك الموقف لو راجعتِه الآن؟",
          en: "Which of the three circles would that situation fall into, if you reviewed it now?",
        },
      },
    ],
    summaryCard: {
      id: "card.da.09",
      title: {
        ar: "ثلاث دوائر لحماية بيانات الموكل",
        en: "Three Circles That Protect Client Data",
      },
      whatYouLearned: {
        ar: [
          "ليست كل البيانات بنفس درجة الحساسية، وليست كل الأدوات المعتمدة مناسبة لكل استخدام.",
          "بعض المعلومات لا تدخل أي أداة عامة إطلاقاً: الهوية الكاملة، الوقائع المحمية بالامتياز، الملفات غير المرفوعة بعد.",
          "بعض المواقف تستدعي رفض أي أداة رقمية كلياً، بغض النظر عن اعتمادها.",
        ],
        en: [
          "Not all data carries the same sensitivity, and not every approved tool fits every use.",
          "Some information never enters any general tool at all: full identity, privileged facts, an unfiled matter.",
          "Some situations call for declining any digital tool entirely, regardless of its approval.",
        ],
      },
      framework: {
        name: { ar: "لا تدخل أبداً · أداة معتمدة · ارفضي كلياً", en: "Never Enters · Approved Tool · Decline Entirely" },
        steps: [
          { ar: "حددي حساسية البيانات أولاً.", en: "Assess the data's sensitivity first." },
          { ar: "تحققي أن الأداة معتمدة فعلاً لهذا الاستخدام تحديداً.", en: "Confirm the tool is actually approved for this specific use." },
          { ar: "اسألي: هل وافق الموكل صراحة على هذا؟", en: "Ask: did the client explicitly agree to this?" },
        ],
      },
      rememberThis: {
        ar: "اعتماد الأداة لا يعني أن كل استخدام لها مناسب تلقائياً.",
        en: "A tool being approved doesn't mean every use of it automatically fits.",
      },
      useItTomorrow: {
        ar: "قبل أن تستخدمي أي أداة رقمية غداً لمهمة تخص موكلاً، اسألي عن دائرتها الثلاث أولاً.",
        en: "Before using any digital tool tomorrow for a client task, ask which of the three circles it falls into first.",
      },
    },
    targetLevel: 4,
    sourceIds: ["src.modernize-your-law-firm", "src.client-centered-law-firm", "src.legal-ops-kpis"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 10 — Declining pressure to cut corners, with a real alternative (simulation)
  // =========================================================================
  {
    id: "unit.da.10",
    chapterId: "ch.da.protecting-data-and-knowing-limits",
    order: 10,
    title: {
      ar: "رفض الضغط للاستخدام غير الآمن، مع بديل حقيقي",
      en: "Declining the Pressure to Cut Corners, With a Real Alternative",
    },
    subtitle: {
      ar: "قول «لا» وحده يوقف المحادثة؛ اقتراح بديل فعلي هو ما يحل المشكلة الأصلية.",
      en: "Saying 'no' alone just stops the conversation; proposing a real alternative is what actually solves the problem.",
    },
    primarySkillId: "skill.protecting-data-in-digital-tools",
    skillIds: ["skill.protecting-data-in-digital-tools", "skill.disclosing-ai-errors"],
    stage: 4,
    estimatedMinutes: 12,
    steps: [
      {
        kind: "hook",
        id: "s.da.10.hook",
        text: {
          ar: "تعرفين الآن أي بيانات لا تدخل أداة عامة أبداً. السؤال الأصعب: ماذا تقولين حين يلح عليك زميل مستعجل أمامك مباشرة؟",
          en: "You now know which data never enters a general tool. The harder question: what do you actually say when a colleague is pressing you for it, right in front of you?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.da.10.why",
        text: {
          ar: "الرفض الجامد بلا بديل يبدو عائقاً، فيُجرَّب الالتفاف عليه لاحقاً بصمت. الرفض المصحوب ببديل عملي هو وحده ما يمنع الالتفاف ويحل ضغط الوقت الفعلي.",
          en: "A flat refusal with no alternative looks like an obstacle, so it gets quietly worked around later. Only a refusal paired with a practical alternative prevents that and actually solves the real time pressure.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.da.10.goals",
        goals: {
          ar: [
            "أن تفهمي طلب الزميل أو الموكل بدقة قبل الرفض، بدل رد فعل سريع.",
            "أن ترفضي بوضوح مع تفسير مختصر لسبب الرفض، دون اعتذار مفرط أو تصلّب جامد.",
            "أن تقترحي بديلاً عملياً حقيقياً ينجز الحاجة الفعلية دون المخاطرة.",
          ],
          en: [
            "Understand the colleague's or client's request precisely before declining, instead of reacting fast.",
            "Decline clearly with a brief explanation why, without over-apologizing or sounding rigid.",
            "Propose a real, practical alternative that meets the actual need without taking the risk.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.da.10.lesson",
        title: {
          ar: "افهمي، ارفضي، اقترحي",
          en: "Understand, Decline, Propose",
        },
        body: {
          ar: [
            "الضغط لاستخدام أداة غير معتمدة أو تخطي التحقق يأتي غالباً من نية حسنة: زميل مستعجل، أو موكل يريد رداً سريعاً - لا من قصد الإضرار.",
            "افهمي الحاجة الفعلية أولاً: هل المطلوب فعلاً السرعة، أم أن الطرف الآخر لا يعرف أصلاً أن هناك مخاطرة في الطريقة المقترحة؟",
            "ارفضي بوضوح دون اعتذار مفرط: «لا أستطيع لصق هذا في أداة غير معتمدة» أفضل من مقدمة طويلة تُضعف الرسالة.",
            "اشرحي السبب بجملة واحدة واقعية، لا محاضرة: «بيانات الموكل قد تُخزَّن خارج المكتب» تكفي لتفهيم القرار دون إطالة.",
            "اقترحي بديلاً حقيقياً فوراً - أداة معتمدة، أو مسار أسرع ضمن الوقت المتاح - فالرفض بلا بديل يعيد الضغط لاحقاً بصمت.",
            "حين يُلح الطرف الآخر رغم ذلك، كرري موقفك بهدوء دون تصعيد أو تراجع؛ الثبات الهادئ أقوى من الجدال.",
          ],
          en: [
            "Pressure to use an unapproved tool or skip verification usually comes from good intent — a rushed colleague, a client wanting a fast reply — not any wish to cause harm.",
            "Understand the real need first: is speed truly what's needed, or does the other side simply not realize the proposed method carries a risk?",
            "Decline clearly without over-apologizing: 'I can't paste this into an unapproved tool' beats a long preamble that weakens the message.",
            "Explain why in one factual sentence, not a lecture: 'The client's data could end up stored outside the firm' is enough to make the decision understood, no need to expand.",
            "Propose a real alternative right away — an approved tool, or a faster path within the time you have — because a refusal with no alternative just brings the pressure back later, quietly.",
            "If the other side keeps pushing anyway, calmly restate your position without escalating or backing down; quiet steadiness beats arguing.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.da.10.visual",
        title: {
          ar: "ثلاث خطوات للرفض البنّاء",
          en: "Three Steps of a Constructive Decline",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "افهمي", en: "Understand" },
            detail: {
              ar: "الحاجة الفعلية خلف الطلب قبل أي رد فعل.",
              en: "The real need behind the request, before reacting.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "ارفضي بوضوح", en: "Decline clearly" },
            detail: {
              ar: "جملة مباشرة وسبب واقعي واحد، بلا اعتذار مفرط.",
              en: "A direct sentence and one factual reason, no over-apologizing.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "اقترحي بديلاً", en: "Propose an alternative" },
            detail: {
              ar: "مساراً عملياً فورياً ينجز الحاجة الفعلية دون مخاطرة.",
              en: "An immediate practical path that meets the real need with no risk.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.da.10.worked",
        strong: {
          label: {
            ar: "مايا ترفض زميلة تحت ضغط الموعد، وتقترح بديلاً فورياً",
            en: "Maya declines a deadline-pressed colleague, and proposes an immediate alternative",
          },
          text: {
            ar: [
              "تطلب زميلة مايا، نادين عاكر، مساعدتها بلصق نص عقد موكل كامل في أداة ذكاء اصطناعي عامة لتلخيصه بسرعة قبل اجتماع بعد نصف ساعة.",
              "تقول مايا: «لا أستطيع، العقد يحمل اسم الموكل وبنوداً مالية دقيقة. لنفتح أداة الملخصات المعتمدة من المكتب الآن - تعطيك ملخصاً مشابهاً خلال دقائق دون أي مخاطرة.»",
            ],
            en: [
              "Maya's colleague Nadeen Aker asks for help pasting a client's full contract text into a general AI tool to quickly summarize it before a meeting in half an hour.",
              "Maya says: 'I can't — the contract carries the client's name and precise financial terms. Let's open the firm's approved summarizer now instead; it'll give you a similar summary in minutes, no risk at all.'",
            ],
          },
          why: {
            ar: "رفضت بوضوح مع سبب واقعي واحد، واقترحت بديلاً فورياً ينجز الحاجة الفعلية - السرعة - دون المخاطرة ببيانات الموكل.",
            en: "She declined clearly with one factual reason, and proposed an immediate alternative that met the real need — speed — without risking the client's data.",
          },
        },
        weak: {
          label: {
            ar: "زميل يوافق تحت الضغط بلا تفكير",
            en: "A colleague complies under pressure with no second thought",
          },
          text: {
            ar: ["يوافق زميل آخر على الطلب فوراً، مطمئناً بأن 'الجميع يفعل ذلك عند الاستعجال'."],
            en: ["Another colleague agrees to the request right away, reassured that 'everyone does this when they're in a rush.'"],
          },
          why: {
            ar: "الاستعجال لا يغيّر أن بيانات الموكل غادرت للتو خوادم لا يعرف المكتب سياستها، ويصعب لاحقاً معرفة أين وصلت.",
            en: "Being in a rush doesn't change the fact that the client's data just left for servers whose policy the firm knows nothing about, and there's no way later to know where it ended up.",
          },
        },
      },
      { kind: "activity", id: "s.da.10.a1", activityId: "act.da.10.1", mode: "quick" },
      { kind: "activity", id: "s.da.10.a2", activityId: "act.da.10.2", mode: "guided" },
      { kind: "activity", id: "s.da.10.a3", activityId: "act.da.10.3", mode: "independent" },
      { kind: "activity", id: "s.da.10.a5", activityId: "act.da.10.5", mode: "guided" },
      { kind: "simulation", id: "s.da.10.sim", scenarioId: "scn.declining-to-use-a-tool" },
      { kind: "activity", id: "s.da.10.a4", activityId: "act.da.10.4", mode: "independent" },
      { kind: "summary", id: "s.da.10.summary", summaryCardId: "card.da.10" },
      {
        kind: "apply_tomorrow",
        id: "s.da.10.apply",
        task: {
          ar: "أول طلب ضغط تواجهينه غداً لاستخدام أداة غير آمنة، جهّزي بديلاً عملياً واحداً قبل أن ترفضي.",
          en: "The first pressured request you face tomorrow to use an unsafe tool, have one practical alternative ready before you decline.",
        },
        detail: {
          ar: "افهمي الحاجة، ارفضي بجملة واحدة واقعية، ثم اقترحي البديل فوراً.",
          en: "Understand the need, decline in one factual sentence, then propose the alternative immediately.",
        },
      },
      {
        kind: "next_mission",
        id: "s.da.10.next",
        teaser: {
          ar: "أكملتِ مسار التقنية والذكاء الاصطناعي - وآخر محاكاة في هذا البرنامج بأكمله. طبّقي هذا الحكم في أول مرة تعطيك فيها أداة شيئاً قبل أن تمرّريه لأحد آخر.",
          en: "You've completed the Digital Tools & AI path — and the platform's very last simulation. Apply this judgment the next time a tool hands you something before you pass it on.",
        },
      },
    ],
    activities: [
      {
        id: "act.da.10.1",
        kind: "multiple_choice",
        skillId: "skill.protecting-data-in-digital-tools",
        stage: 4,
        weight: 1,
        context: {
          ar: ["يطلب منك موكل مستعجل أن تتجاوزي التحقق من استشهاد قانوني أنتجته أداة ذكاء اصطناعي لأنه 'يبدو صحيحاً بالتأكيد' وموعد التسليم بعد ساعة."],
          en: ["A client in a rush asks you to skip verifying a legal citation the AI tool produced, since it 'definitely looks right,' with the deadline an hour away."],
        },
        prompt: {
          ar: "ما أفضل رد؟",
          en: "What's the best response?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«أفهم ضيق الوقت، لكن لا يمكنني إرسال استشهاد دون تحقق. سأتحقق منه الآن مباشرة، يستغرق ذلك عشر دقائق فقط.»",
              en: "'I understand the time pressure, but I can't send a citation unverified. I'll check it right now — it only takes ten minutes.'",
            },
            correct: true,
            rationale: {
              ar: "تفهم الحاجة للسرعة، ترفض تخطي التحقق بوضوح، وتقترح مساراً سريعاً يحقق الهدفين معاً.",
              en: "Understands the need for speed, clearly declines skipping verification, and proposes a fast path that meets both needs at once.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«حسناً، إن كنت واثقاً أنه يبدو صحيحاً، سأرسله كما هو.»",
              en: "'Okay, if you're confident it looks right, I'll send it as-is.'",
            },
            rationale: {
              ar: "التنازل عن التحقق تحت الضغط يخاطر بإرسال استشهاد قد يكون ملفقاً بالكامل.",
              en: "Giving up verification under pressure risks sending a citation that could be entirely fabricated.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«لا يمكنني فعل شيء الآن، سيتأخر التسليم بالكامل.»",
              en: "'There's nothing I can do now — the deadline will just be missed entirely.'",
            },
            rationale: {
              ar: "رفض جامد بلا بديل يترك الموكل بلا حل عملي، بينما التحقق السريع ممكن فعلاً.",
              en: "A flat refusal with no alternative leaves the client with no practical solution, when a quick check is actually possible.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«الأداة موثوقة عادة، فلا داعي للقلق هذه المرة.»",
              en: "'The tool's usually reliable, so no need to worry this time.'",
            },
            rationale: {
              ar: "التنازل عن التحقق بناءً على «عادة» يترك بالضبط الحالة الاستثنائية التي تستحق الفحص دون تغطية.",
              en: "Skipping verification based on 'usually' leaves exactly the exceptional case that needs checking uncovered.",
            },
          },
        ],
      },
      {
        id: "act.da.10.2",
        kind: "priority_ranking",
        skillId: "skill.protecting-data-in-digital-tools",
        secondarySkillIds: ["skill.disclosing-ai-errors"],
        stage: 4,
        weight: 2,
        prompt: {
          ar: "رتّبي أربع خطوات الرد على طلب الضغط بترتيبها الصحيح.",
          en: "Order four steps of responding to pressure in the correct sequence.",
        },
        hint: {
          ar: "ابدئي بفهم الحاجة، وانتهِ باقتراح البديل.",
          en: "Start with understanding the need; end by proposing the alternative.",
        },
        accessibleAlternative: {
          ar: "اختاري رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each step instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "افهمي الحاجة الفعلية خلف الطلب قبل أي رد فعل.", en: "Understand the real need behind the request before reacting." },
            rationale: {
              ar: "فهم الدافع الحقيقي يمنع رفضاً متسرعاً أو تفسيراً خاطئاً للموقف.",
              en: "Understanding the real motive prevents a rushed refusal or misreading the situation.",
            },
          },
          {
            id: "i2",
            label: { ar: "ارفضي بجملة واضحة ومباشرة دون اعتذار مفرط.", en: "Decline with a clear, direct sentence, no over-apologizing." },
            rationale: {
              ar: "الوضوح المبكر يمنع الطرف الآخر من الاعتقاد أن الباب لا يزال مفتوحاً للتفاوض.",
              en: "Early clarity keeps the other side from thinking the door is still open to negotiate.",
            },
          },
          {
            id: "i3",
            label: { ar: "اشرحي السبب الواقعي بجملة واحدة مختصرة.", en: "Explain the factual reason in one short sentence." },
            rationale: {
              ar: "سبب واحد واضح يكفي لتفهيم القرار، ويأتي منطقياً بعد الرفض المباشر.",
              en: "One clear reason is enough to make the decision understood, and logically follows the direct refusal.",
            },
          },
          {
            id: "i4",
            label: { ar: "اقترحي بديلاً عملياً فورياً ينجز الحاجة الفعلية.", en: "Propose an immediate practical alternative that meets the real need." },
            rationale: {
              ar: "البديل هو ما يحل المشكلة الأصلية فعلياً، فيأتي كخطوة أخيرة تغلق الطلب بشكل بنّاء.",
              en: "The alternative is what actually solves the original problem, coming last as a constructive close to the request.",
            },
          },
        ],
      },
      {
        id: "act.da.10.3",
        kind: "best_response",
        skillId: "skill.protecting-data-in-digital-tools",
        stage: 4,
        weight: 2,
        context: {
          ar: ["يقول لك زميل تحت ضغط موعد: «الجميع يستخدم هذه الأداة، لماذا تتصرفين وكأن الأمر خطير؟»"],
          en: ["Under deadline pressure, a colleague tells you: 'Everyone uses this tool — why are you acting like it's dangerous?'"],
        },
        prompt: {
          ar: "ما أفضل رد يحافظ على موقفك دون تصعيد؟",
          en: "What's the best response that holds your position without escalating?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«أفهم أن الوقت ضيق، لكن بيانات هذا الموكل تحديداً حساسة، ولدي بديل معتمد يعطينا نفس النتيجة الآن.»",
              en: "'I get that time is tight, but this particular client's data is sensitive, and I have an approved alternative that gets us the same result right now.'",
            },
            correct: true,
            rationale: {
              ar: "تحافظ على الهدوء، تفسر السبب بوقائع، وتعيد اقتراح البديل دون الدخول في جدال حول من يستخدم ماذا.",
              en: "Stays calm, explains the reason factually, and restates the alternative without getting drawn into an argument about who uses what.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«حسناً، إن كان الجميع يفعل ذلك فلا بأس هذه المرة.»",
              en: "'Fine, if everyone does it, I guess it's okay this time.'",
            },
            rationale: {
              ar: "التراجع تحت ضغط الأقران يفقد الموقف قيمته الوحيدة: حماية بيانات لن تُستعاد لو خرجت.",
              en: "Backing down under peer pressure loses the one thing the position was protecting: data that can't be taken back once it's out.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«هذا ليس قرارك لتحكم عليه، توقف عن الإلحاح.»",
              en: "'That's not your call to judge, stop pushing.'",
            },
            rationale: {
              ar: "نبرة حادة تصعّد التوتر بلا داعٍ بدل معالجة السبب الفعلي وراء إلحاحه.",
              en: "A sharp tone escalates tension unnecessarily instead of addressing the actual reason behind his push.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "الصمت والانتقال لموضوع آخر لتجنب النقاش.",
              en: "Staying silent and changing the subject to avoid the discussion.",
            },
            rationale: {
              ar: "تجنب النقاش يترك الطلب الخطر معلقاً بلا رفض واضح، فقد يُنفَّذ لاحقاً دون علمك.",
              en: "Avoiding the discussion leaves the risky request hanging with no clear refusal, and it may happen later without your knowledge.",
            },
          },
        ],
      },
      {
        id: "act.da.10.5",
        kind: "find_mistake",
        skillId: "skill.protecting-data-in-digital-tools",
        stage: 4,
        weight: 2,
        context: {
          ar: [
            "ريما فخري محامية مسؤولة عن ملف تدقيق نافٍ لعقار تسعى شركة سنابل للتطوير العقاري لشرائه. طوال المشروع، تشارك عبر قناة مشتركة على منصة «مسار» المعتمدة من المكتب تحديثات روتينية: قوائم المستندات المطلوبة ومواعيد التسليم.",
            "تضم القناة، إلى جانب فريق مكتبها، مكتب تقييم خارجي وفريق مراجعة مستندات تابعاً لمزوّد خدمة يعمل من خارج البلاد.",
            "اليوم، أعدّت ريما مذكرة تحلل فيها عيوباً محتملة في سند الملكية واحتمال نشوء نزاع قضائي بشأنها، ورفعتها في القناة نفسها 'ليطّلع الجميع على آخر المستجدات في مكان واحد'.",
          ],
          en: [
            "Rima Fakhry is the lawyer running due diligence on a property Sanabel Real Estate Development wants to buy. Throughout the project, she's shared routine updates — required document lists, delivery dates — in a shared channel on the firm's approved 'Masar' platform.",
            "Besides her own firm's team, the channel includes an outside valuation firm and a document-review team from an offshore service provider.",
            "Today, Rima drafted a memo analyzing possible defects in the property title and the risk of a resulting legal dispute, and posted it in that same channel 'so everyone can see the latest in one place.'",
          ],
        },
        prompt: {
          ar: "ما الخطأ الجوهري في تصرف ريما؟",
          en: "What's the core mistake in what Rima did?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "وضعت مذكرة تحمل تحليلها القانوني للمخاطر ورأيها كمحامية في نفس القناة التي يطّلع عليها مكتب التقييم وفريق المراجعة الخارجي، وكلاهما خارج علاقة الاستشارة القانونية مع الموكل.",
              en: "She placed a memo containing her legal risk analysis and professional opinion in the same channel the valuation firm and the offshore review team can read — both outside the legal-advice relationship with the client.",
            },
            correct: true,
            rationale: {
              ar: "التحديثات الروتينية لا تهدد الامتياز المهني، لكن مذكرة تحمل تحليلاً واستشارة قانونية أمر مختلف تماماً: بمجرد أن يطّلع عليها من هم خارج تلك العلاقة، يصبح ادعاء الطرف الآخر لاحقاً بأن الامتياز سقط عن هذا المستند تحديداً احتمالاً حقيقياً.",
              en: "Routine status updates don't threaten privilege, but a memo carrying legal analysis and advice is different: once people outside that relationship can read it, the other side can later argue privilege over that specific document was given up.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "استخدمت قناة المنصة بدل إرسال المذكرة عبر بريد إلكتروني مشفّر.",
              en: "She used the platform channel instead of sending the memo by encrypted email.",
            },
            rationale: {
              ar: "وسيلة النقل ليست جوهر المشكلة؛ منصة معتمدة ومُهيّأة جيداً يمكن أن تكون آمنة بقدر البريد الإلكتروني. المشكلة الفعلية من يستطيع فتح القناة ذاتها، لا نوع التطبيق الذي حمل المذكرة.",
              en: "The transmission method isn't the real problem; a properly configured approved platform can be just as secure as email. The actual issue is who can open that channel, not which app carried the memo.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "لم تضع وسماً بعبارة 'سري' على ملف المذكرة قبل رفعها.",
              en: "She didn't tag the memo file 'confidential' before uploading it.",
            },
            rationale: {
              ar: "وسم الملف عادة جيدة، لكنه لا يخلق الامتياز المهني ولا يحميه بمفرده؛ الامتياز يتوقف على من يستطيع فعلياً الاطلاع على مضمون الاستشارة، لا على تسمية الملف.",
              en: "Tagging a file is good practice, but it doesn't create or preserve privilege by itself; privilege turns on who can actually read the substance of the advice, not on the file's label.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "لم تتحقق مسبقاً من أن عقد فريق المراجعة الخارجي يتضمن بنداً خاصاً بمعالجة البيانات.",
              en: "She hadn't first confirmed the offshore review team's contract included a data-processing clause.",
            },
            rationale: {
              ar: "بند معالجة البيانات مهم لحماية سرية المعلومات عموماً، لكنه لا يحل مشكلة إشراك جهات غير قانونية في تحليل استشاري قانوني تحديداً؛ هذه مسألة امتياز مهني منفصلة عن أي عقد بيانات مهما كان دقيقاً.",
              en: "A data-processing clause matters for confidentiality generally, but it doesn't solve the problem of non-legal parties being included on a legal-advice analysis specifically; that's a separate privilege issue no data contract, however careful, resolves.",
            },
          },
        ],
      },
      {
        id: "act.da.10.4",
        kind: "reflection",
        skillId: "skill.protecting-data-in-digital-tools",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "بعد المحاكاة: في أي لحظة شعرتِ أقرب للتنازل تحت الضغط بدل اقتراح البديل بثبات؟",
          en: "After the simulation: at which moment did you feel closer to giving in under pressure instead of steadily proposing the alternative?",
        },
        followUp: {
          ar: "ما البديل العملي الواحد الذي ستجهزينه مسبقاً في المرة القادمة قبل أن يظهر الضغط أصلاً؟",
          en: "What one practical alternative will you have ready next time, before the pressure even shows up?",
        },
      },
    ],
    summaryCard: {
      id: "card.da.10",
      title: {
        ar: "افهمي، ارفضي، اقترحي",
        en: "Understand, Decline, Propose",
      },
      whatYouLearned: {
        ar: [
          "الضغط لاستخدام أداة غير آمنة يأتي غالباً من نية حسنة، لا قصد إضرار.",
          "الرفض الواضح مع سبب واقعي واحد أقوى من اعتذار مطوّل أو تصلّب جامد.",
          "بديل عملي فوري هو وحده ما يحل ضغط الوقت الفعلي ويمنع تكرار الطلب لاحقاً.",
        ],
        en: [
          "Pressure to use an unsafe tool usually comes from good intent, not a wish to cause harm.",
          "A clear refusal with one factual reason beats a long apology or rigid stonewalling.",
          "Only an immediate practical alternative actually solves the real time pressure and stops the request from returning.",
        ],
      },
      framework: {
        name: { ar: "افهمي · ارفضي · اقترحي", en: "Understand · Decline · Propose" },
        steps: [
          { ar: "افهمي الحاجة الفعلية خلف الطلب.", en: "Understand the real need behind the request." },
          { ar: "ارفضي بوضوح مع سبب واقعي واحد.", en: "Decline clearly with one factual reason." },
          { ar: "اقترحي بديلاً عملياً فورياً.", en: "Propose an immediate practical alternative." },
        ],
      },
      rememberThis: {
        ar: "رفض بلا بديل يعود لاحقاً بصمت؛ رفض ببديل حقيقي يغلق الطلب فعلاً.",
        en: "A refusal with no alternative comes back quietly later; a refusal with a real alternative actually closes the request.",
      },
      useItTomorrow: {
        ar: "أول طلب ضغط تواجهينه غداً لاستخدام أداة غير آمنة، جهّزي بديلاً عملياً واحداً قبل أن ترفضي.",
        en: "The first pressured request you face tomorrow to use an unsafe tool, have one practical alternative ready before you decline.",
      },
    },
    targetLevel: 4,
    sourceIds: ["src.client-centered-law-firm", "src.jab-jab-right-hook", "src.modernize-your-law-firm"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
