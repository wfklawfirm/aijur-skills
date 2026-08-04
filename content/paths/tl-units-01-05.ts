import type { UnitDef } from "../types";

/**
 * Teamwork & Leadership — Chapter 1 (`ch.tl.delegating-clearly`) units 1-3 and
 * Chapter 2 (`ch.tl.feedback-that-lands`) units 4-5.
 *
 * Skills referenced here (`skill.delegation`, `skill.feedback`, `skill.teamwork`,
 * `skill.leadership-communication`) are authored in `content/framework/skills.ts`.
 * `skill.managing-up` and `skill.leading-without-authority` are authored in a
 * parallel batch, as are units 6-10 of this path (`tl-units-06-10.ts`) and the
 * simulation scenarios used there. No simulation step appears in this batch.
 */
export const TL_UNITS_01_05: UnitDef[] = [
  // =========================================================================
  // UNIT 01 — Matching the Task to the Person
  // =========================================================================
  {
    id: "unit.tl.01",
    chapterId: "ch.tl.delegating-clearly",
    order: 1,
    title: {
      ar: "إسناد المهمة للشخص المناسب",
      en: "Matching the Task to the Person",
    },
    subtitle: {
      ar: "التفويض لا يفشل غالبًا بسبب تعليمات ناقصة، بل بسبب مهمة سُلّمت ليد لا تملك السياق أو الصلاحية لإنجازها",
      en: "Delegation usually fails not from bad instructions, but from a task handed to someone without the context or authority to carry it.",
    },
    primarySkillId: "skill.delegation",
    skillIds: ["skill.delegation", "skill.teamwork"],
    stage: 1,
    estimatedMinutes: 7,
    steps: [
      {
        kind: "hook",
        id: "s.tl.01.hook",
        text: {
          ar: "طلبت من متدرب في شهره الأول أن يتصل بعميل غاضب ليشرح له تأخير ملفه. لماذا فشلت هذه المهمة قبل أن تبدأ؟",
          en: "You asked a first-month trainee to call an angry client and explain a delay. Why did this task fail before it even began?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.tl.01.why",
        text: {
          ar: "من يفوّض حسب من هو متاح فقط، لا حسب من يملك السياق والصلاحية، يخلق مشكلة جديدة بدل أن يحل مشكلة الوقت.",
          en: "Whoever delegates based only on who's available, not who has the context and authority, creates a new problem instead of solving a time problem.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.tl.01.goals",
        goals: {
          ar: [
            "أن تحدد ما تتطلبه المهمة فعلاً: السياق، مستوى الصلاحية، والحكم المطلوب.",
            "أن تقارن ذلك بما يملكه كل عضو في فريقك فعلاً، لا بما تفترضه عنه.",
            "أن تختار الشخص المناسب أو تقرر عدم تفويض المهمة إطلاقًا.",
          ],
          en: [
            "Identify what a task actually requires: context, level of authority, and judgment.",
            "Compare that against what each team member genuinely has, not what you assume about them.",
            "Choose the right person, or decide not to delegate the task at all.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.tl.01.lesson",
        title: {
          ar: "ثلاثة أسئلة قبل اسم أي شخص",
          en: "Three questions before any name",
        },
        body: {
          ar: [
            "الخطأ الشائع في التفويض: التفكير أولاً بمن متاح الآن، لا بما تتطلبه المهمة فعلاً. النتيجة مهمة في يد خاطئة رغم تعليمات ممتازة.",
            "السؤال الأول: كم سياعًا سابقًا يحتاج هذا الشخص ليفهم القرار بلا شرح إضافي طويل؟ مهمة تتطلب معرفة خلفية الملف لا تُسند لمن لم يره من قبل.",
            "السؤال الثاني: هل تتطلب المهمة صلاحية اتخاذ قرار أمام طرف ثالث، كعميل أو محكمة؟ من لا يملك هذه الصلاحية لن يستطيع التصرف عند أول مفاجأة.",
            "السؤال الثالث: هل لدى هذا الشخص فعلاً وقتًا حقيقيًا، لا وقتًا نظريًا على الورق؟ من يعمل بحمل كامل بالفعل سيؤجل مهمتك أو ينجزها بسرعة تضر جودتها.",
            "حين لا يجيب أحد على الأسئلة الثلاثة بنعم، الخيار الصحيح غالبًا ليس إسناد المهمة لأقرب شخص، بل الاحتفاظ بها أو تأجيلها بصراحة.",
          ],
          en: [
            "The common mistake in delegation: thinking first about who's available now, not what the task actually requires. The result is a task in the wrong hands despite excellent instructions.",
            "First question: how much prior context does this person need to understand the matter without a long extra briefing? A task requiring file background shouldn't go to someone who's never seen it.",
            "Second question: does the task require authority to decide in front of a third party, like a client or a court? Someone without that authority can't act when the first surprise hits.",
            "Third question: does this person genuinely have real time, not theoretical time on paper? Someone already at full load will either delay your task or rush it in a way that hurts quality.",
            "When no one answers all three questions with yes, the right move usually isn't handing it to whoever's nearest, but keeping it yourself or honestly postponing it.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.tl.01.visual",
        title: {
          ar: "ثلاثة اختبارات قبل اختيار الاسم",
          en: "Three tests before picking a name",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "السياق", en: "Context" },
            detail: {
              ar: "هل يعرف خلفية الملف الكافية لفهم القرار دون شرح طويل؟",
              en: "Do they know enough file background to grasp the decision without a long briefing?",
            },
            tone: "neutral",
          },
          {
            label: { ar: "الصلاحية", en: "Authority" },
            detail: {
              ar: "هل يملك صلاحية التصرف أمام العميل أو الطرف الثالث عند أول مفاجأة؟",
              en: "Do they have authority to act in front of the client or third party at the first surprise?",
            },
            tone: "neutral",
          },
          {
            label: { ar: "الطاقة الحقيقية", en: "Real bandwidth" },
            detail: {
              ar: "هل لديه وقت فعلي، لا وقت نظري على جدول ممتلئ فعلاً؟",
              en: "Do they have real time, not theoretical time on a calendar that's actually full?",
            },
            tone: "neutral",
          },
          {
            label: { ar: "القرار", en: "The decision" },
            detail: {
              ar: "إن فشل اختبار واحد، أعد النظر في الاسم أو في التفويض نفسه.",
              en: "If one test fails, reconsider the name — or the delegation itself.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.tl.01.worked",
        strong: {
          label: {
            ar: "شريكة تختار حسب متطلبات المهمة",
            en: "A partner choosing by what the task requires",
          },
          text: {
            ar: [
              "«هذا الاتصال يحتاج شخصًا يعرف تاريخ الملف كاملاً ويملك صلاحية تقديم تنازل بسيط إن طلب العميل ذلك.»",
              "«سامر يعرف الملف منذ البداية ويملك هذه الصلاحية. لينا مشغولة بالكامل هذا الأسبوع رغم معرفتها، فلن أثقل عليها.»",
            ],
            en: [
              "\"This call needs someone who knows the file's full history and has authority to offer a small concession if the client asks.\"",
              "\"Sameer has known the file from the start and has that authority. Lina knows it too but is fully loaded this week, so I won't add to her.\"",
            ],
          },
          why: {
            ar: "قارنت متطلبات المهمة الثلاثة بواقع كل شخص فعليًا، لا بمن كان أقرب مكتبًا.",
            en: "She matched the task's three requirements against each person's real situation, not whoever's desk was nearest.",
          },
        },
        weak: {
          label: {
            ar: "شريك يفوّض حسب من هو متاح فقط",
            en: "A partner delegating by mere availability",
          },
          text: {
            ar: [
              "«رامي بدا فارغًا هذا الصباح، سأعطيه مكالمة العميل الغاضب.»",
              "لم يسأل هل يعرف رامي تاريخ الملف أو هل يملك صلاحية التصرف أمام العميل.",
            ],
            en: [
              "\"Ramy looked free this morning, I'll give him the angry client call.\"",
              "He never asked whether Ramy knew the file's history or had authority to act in front of the client.",
            ],
          },
          why: {
            ar: "التوفر وحده معيار خاطئ؛ مهمة بلا سياق أو صلاحية تعود إلى الشريك مضاعفة الضرر لا محلولة.",
            en: "Availability alone is the wrong test; a task with no context or authority comes back to the partner doubly damaged, not resolved.",
          },
        },
      },
      { kind: "activity", id: "s.tl.01.a1", activityId: "act.tl.01.1", mode: "quick" },
      { kind: "activity", id: "s.tl.01.a2", activityId: "act.tl.01.2", mode: "guided" },
      { kind: "activity", id: "s.tl.01.a3", activityId: "act.tl.01.3", mode: "guided" },
      { kind: "activity", id: "s.tl.01.a4", activityId: "act.tl.01.4", mode: "independent" },
      { kind: "activity", id: "s.tl.01.a5", activityId: "act.tl.01.5", mode: "independent" },
      { kind: "summary", id: "s.tl.01.summary", summaryCardId: "card.tl.01" },
      {
        kind: "apply_tomorrow",
        id: "s.tl.01.apply",
        task: {
          ar: "قبل تفويض أي مهمة غدًا، اكتب إجابات الأسئلة الثلاثة عن الشخص الذي تفكر فيه.",
          en: "Before delegating anything tomorrow, write down the answers to the three questions about the person you're considering.",
        },
        detail: {
          ar: "إن أجبت بلا على سؤال واحد، أعد النظر قبل أن تسند المهمة.",
          en: "If you answer no to even one, reconsider before assigning the task.",
        },
      },
      {
        kind: "next_mission",
        id: "s.tl.01.next",
        teaser: {
          ar: "اخترت الشخص المناسب. لكن حتى الشخص الصحيح يفشل بتعليمات غامضة. الوحدة القادمة: كيف تعطي تعليمات يمكن البدء بها فورًا.",
          en: "You picked the right person. But even the right person fails with vague instructions. Next unit: giving instructions someone can act on immediately.",
        },
      },
    ],
    activities: [
      {
        id: "act.tl.01.1",
        kind: "multiple_choice",
        skillId: "skill.delegation",
        stage: 1,
        context: {
          ar: [
            "لديك مذكرة قانونية عاجلة لعميل جديد، شركة الأجيال للمقاولات، تحتاج معرفة سابقة بنزاعات المقاولات.",
            "في فريقك محاميان: نور، يعمل في قسم آخر بلا خبرة سابقة بالمقاولات لكنه متاح تمامًا اليوم. وزياد، يعرف هذا النوع من النزاعات جيدًا لكنه منشغل بملف آخر حتى الظهر.",
          ],
          en: [
            "You have an urgent legal memo for a new client, Al-Ajyal Contracting, requiring prior knowledge of construction disputes.",
            "Your team has two lawyers: Nour, in another department with no prior construction experience but fully free today. And Ziad, who knows this dispute type well but is tied up on another file until noon.",
          ],
        },
        prompt: {
          ar: "من الأنسب لهذه المذكرة تحديدًا؟",
          en: "Who fits this specific memo best?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "نور، لأنه متاح فورًا واليوم عاجل.",
              en: "Nour, because he's free immediately and today is urgent.",
            },
            rationale: {
              ar: "التوفر لا يعوّض غياب السياق؛ نور سيحتاج شرحًا مطولًا لخلفية النزاعات، وقد يفوّت التوقيت رغم توفره.",
              en: "Availability doesn't replace missing context; Nour will need a long briefing on dispute background, and may still miss the deadline despite being free.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "زياد بعد الظهر، لأن سياقه يوفر وقتًا حقيقيًا رغم بدئه متأخرًا.",
              en: "Ziad, starting after noon, since his context saves real time despite a later start.",
            },
            correct: true,
            rationale: {
              ar: "معرفته السابقة تلغي الحاجة لشرح مطوّل، فيصل للمخرج أسرع رغم بدء متأخر بضع ساعات.",
              en: "His prior knowledge removes the need for a long briefing, so he reaches the deliverable faster despite a few hours' later start.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "الاثنان معًا، كل واحد يكتب نصف المذكرة.",
              en: "Both together, each writing half the memo.",
            },
            rationale: {
              ar: "تقسيم مذكرة قانونية مترابطة بين شخص يملك السياق وآخر لا يملكه ينتج تناقضًا يحتاج مراجعة كاملة لاحقًا.",
              en: "Splitting a coherent legal memo between someone with context and someone without produces inconsistencies needing a full rewrite later.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "تحتفظ بالمذكرة لنفسك لأن كليهما غير مثالي.",
              en: "Keep the memo yourself, since neither option is perfect.",
            },
            rationale: {
              ar: "لا حاجة للتنازل الكامل عن التفويض؛ زياد يملك ما تحتاجه المهمة فعلاً رغم بدء متأخر بضع ساعات فقط.",
              en: "No need to fully give up on delegating; Ziad genuinely has what the task needs, despite starting just a few hours later.",
            },
          },
        ],
      },
      {
        id: "act.tl.01.2",
        kind: "categorization",
        skillId: "skill.delegation",
        stage: 1,
        prompt: {
          ar: "صنّف كل مهمة: هل تحتاج صلاحية اتخاذ قرار أمام طرف ثالث، أم تُنجز دون ذلك؟",
          en: "Sort each task: does it need authority to decide in front of a third party, or not?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «تحتاج صلاحية» / «لا تحتاج» أسفل كل مهمة بدل السحب.",
          en: "Choose \"Needs authority\" / \"Doesn't need it\" from buttons under each task instead of dragging.",
        },
        buckets: [
          { id: "needs", label: { ar: "تحتاج صلاحية", en: "Needs authority" } },
          { id: "no", label: { ar: "لا تحتاج", en: "Doesn't need it" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "الرد على عميل يطلب تعديل بند في التسوية أثناء الاجتماع.",
              en: "Responding to a client who asks to alter a settlement term mid-meeting.",
            },
            bucketId: "needs",
            rationale: {
              ar: "قرار فوري أمام العميل يتطلب صلاحية توافق أو رفض، لا مجرد معرفة بالملف.",
              en: "An on-the-spot decision in front of the client requires authority to agree or refuse, not just file knowledge.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "تجميع المستندات المطلوبة لجلسة الأسبوع القادم.",
              en: "Gathering the documents needed for next week's hearing.",
            },
            bucketId: "no",
            rationale: {
              ar: "مهمة تنفيذية واضحة لا تتطلب قرارًا أمام طرف ثالث.",
              en: "A clear executional task requiring no decision in front of a third party.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "التفاوض على مهلة تسليم جديدة مع محامي الطرف الآخر هاتفيًا.",
              en: "Negotiating a new delivery deadline with opposing counsel by phone.",
            },
            bucketId: "needs",
            rationale: {
              ar: "أي تنازل يُعرض هاتفيًا يصبح التزامًا فوريًا، فيحتاج من يملك صلاحية الموافقة عليه.",
              en: "Any concession offered by phone becomes an immediate commitment, requiring someone with authority to grant it.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "صياغة أول مسودة لخطاب متابعة روتيني لعميل.",
              en: "Drafting a first version of a routine client follow-up letter.",
            },
            bucketId: "no",
            rationale: {
              ar: "مسودة أولى تخضع للمراجعة قبل الإرسال، فلا تتطلب صلاحية قرار مستقل.",
              en: "A first draft subject to review before sending requires no independent decision authority.",
            },
          },
        ],
      },
      {
        id: "act.tl.01.3",
        kind: "priority_ranking",
        skillId: "skill.delegation",
        stage: 1,
        prompt: {
          ar: "رتّب الاعتبارات التالية حسب أهميتها عند اختيار من يُسند إليه ملف جديد.",
          en: "Rank the following considerations by importance when choosing who gets a new file.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الأولوية من قائمة منسدلة بجانب كل اعتبار بدل السحب.",
          en: "Pick the priority number from a dropdown beside each consideration instead of dragging.",
        },
        hint: {
          ar: "ابدأ بما يحدد قدرة الشخص فعلاً على إنجاز المهمة.",
          en: "Start with what actually determines the person's ability to do the task.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "هل يملك السياق والصلاحية اللازمين لهذه المهمة تحديدًا؟",
              en: "Does he have the context and authority this specific task requires?",
            },
            rationale: {
              ar: "الأهم لأنه يحدد إمكانية الإنجاز أصلاً، بصرف النظر عن كل شيء آخر.",
              en: "Most important because it determines whether the task is even doable, regardless of anything else.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "هل يملك وقتًا حقيقيًا لا نظريًا هذا الأسبوع؟",
              en: "Does he have real, not theoretical, time this week?",
            },
            rationale: {
              ar: "ثانوي مباشرة بعد الكفاءة؛ شخص كفؤ بلا وقت فعلي سيؤجل المهمة أو يسرعها إضرارًا بالجودة.",
              en: "Right after capability; a capable person with no real time will delay the task or rush it, hurting quality.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "هل هذه فرصة نمو مناسبة لتطور هذا الشخص مهنيًا؟",
              en: "Is this a fitting growth opportunity for this person's development?",
            },
            rationale: {
              ar: "اعتبار حقيقي، لكنه يأتي بعد التأكد من أن المهمة قابلة للإنجاز أصلاً بلا مخاطرة غير محسوبة.",
              en: "A real consideration, but it comes after confirming the task is doable at all without uncalculated risk.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "من هو الأقرب مكتبًا أو الأسهل وصولاً الآن؟",
              en: "Who's nearest by desk or easiest to reach right now?",
            },
            rationale: {
              ar: "الأقل أهمية؛ القرب المكاني لا علاقة له بقدرة الشخص فعلاً على إنجاز المهمة بجودة.",
              en: "Least important; physical proximity has nothing to do with whether the person can actually deliver the task well.",
            },
          },
        ],
      },
      {
        id: "act.tl.01.4",
        kind: "short_written",
        skillId: "skill.delegation",
        secondarySkillIds: ["skill.teamwork"],
        stage: 1,
        grading: "ai_rubric",
        rubricId: "rubric.leadership-written.v1",
        weight: 2,
        minChars: 180,
        context: {
          ar: [
            "لديك مراجعة عقد إيجار تجاري لعميلة، صيدلية الشفاء، تحتاج تسليمها خلال يومين.",
            "في فريقك: هالة، متدربة جديدة لم تراجع عقود إيجار من قبل لكنها متحمسة ومتاحة. وكريم، راجع عقودًا مشابهة سابقًا لكنه ملتزم بجلسة محكمة غدًا صباحًا.",
          ],
          en: [
            "You have a commercial lease review for a client, Al-Shifa Pharmacy, due in two days.",
            "Your team: Hala, a new trainee who's never reviewed a lease before but is keen and available. And Karim, who has reviewed similar leases before but has a court hearing tomorrow morning.",
          ],
        },
        prompt: {
          ar: "اكتب قرارك (٥٠-٨٠ كلمة): من تختار ولماذا، وكيف تعالج القيد الموجود لدى كل منهما؟",
          en: "Write your decision (50-80 words): who you choose, why, and how you address each one's limitation?",
        },
        modelAnswer: {
          ar: [
            "«أختار كريم رغم جلسته غدًا؛ خبرته السابقة بعقود الإيجار تعني وقتًا أقل للفهم وأكثر للتنفيذ الفعلي.»",
            "«سأطلب منه البدء اليوم بعد الجلسة، وأخصص هالة لمهمة أصغر تناسب مستواها الحالي، لا هذا الملف تحديدًا.»",
          ],
          en: [
            "\"I choose Karim despite tomorrow's hearing; his prior experience with lease reviews means less time understanding and more time actually delivering.\"",
            "\"I'll ask him to start today after the hearing, and give Hala a smaller task fitting her current level, not this file specifically.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«سأعطيها لهالة لأنها متاحة الآن، وسأشرح لها العقد بسرعة.»"],
            en: ["\"I'll give it to Hala since she's free now, and quickly explain the contract to her.\""],
          },
          whatIsWrong: {
            ar: "يختار حسب التوفر لا الكفاءة، ويقلل من حجم السياق المطلوب فعلاً لأول عقد إيجار تراجعه متدربة جديدة.",
            en: "Chooses by availability, not capability, and underestimates the context a new trainee genuinely needs for her first lease review.",
          },
        },
      },
      {
        id: "act.tl.01.5",
        kind: "reflection",
        skillId: "skill.delegation",
        stage: 1,
        grading: "self_report",
        prompt: {
          ar: "استرجع مهمة فوّضتها لشخص غير مناسب فعادت إليك ناقصة أو متأخرة. ما الذي تجاهلته عند الاختيار؟",
          en: "Recall a task you delegated to the wrong person, and it came back incomplete or late. What did you overlook when choosing?",
        },
        followUp: {
          ar: "لو طبقت الأسئلة الثلاثة وقتها، من كنت لتختار بدلاً منه؟",
          en: "Had you applied the three questions then, who would you have chosen instead?",
        },
      },
    ],
    summaryCard: {
      id: "card.tl.01",
      title: {
        ar: "المهمة أولاً، ثم الاسم",
        en: "The Task First, Then the Name",
      },
      whatYouLearned: {
        ar: [
          "التفويض يفشل غالبًا لأن المهمة أُسندت لمن هو متاح، لا لمن يملك السياق والصلاحية.",
          "ثلاثة اختبارات تحدد الشخص المناسب: السياق، الصلاحية، والطاقة الحقيقية.",
          "إن فشل شخص في اختبار واحد، أعد النظر في الاسم أو في التفويض نفسه.",
        ],
        en: [
          "Delegation usually fails because the task went to whoever was available, not whoever had the context and authority.",
          "Three tests determine the right person: context, authority, and real bandwidth.",
          "If someone fails even one test, reconsider the name — or the delegation itself.",
        ],
      },
      framework: {
        name: {
          ar: "اختبارات التفويض الثلاثة",
          en: "The Three Delegation Tests",
        },
        steps: [
          { ar: "حدد ما تتطلبه المهمة فعلاً قبل التفكير بأي اسم.", en: "Define what the task actually requires before thinking of any name." },
          { ar: "اسأل: هل يملك السياق اللازم؟", en: "Ask: does he have the necessary context?" },
          { ar: "اسأل: هل يملك الصلاحية اللازمة؟", en: "Ask: does he have the necessary authority?" },
          { ar: "اسأل: هل يملك وقتًا حقيقيًا لا نظريًا؟", en: "Ask: does he have real, not theoretical, time?" },
        ],
      },
      rememberThis: {
        ar: "من يفوّض حسب من هو متاح، لا حسب ما تتطلبه المهمة، يستبدل مشكلة الوقت بمشكلة الجودة.",
        en: "Whoever delegates by who's available, not what the task requires, trades a time problem for a quality problem.",
      },
      useItTomorrow: {
        ar: "قبل تفويض أي شيء غدًا، اكتب إجابات الأسئلة الثلاثة عن الشخص الذي تفكر فيه.",
        en: "Before delegating anything tomorrow, write down the answers to the three questions about who you're considering.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.smarter-collaboration", "src.governance-raci"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 02 — Instructions Specific Enough to Act On
  // =========================================================================
  {
    id: "unit.tl.02",
    chapterId: "ch.tl.delegating-clearly",
    order: 2,
    title: {
      ar: "تعليمات يمكن البدء بها فورًا",
      en: "Instructions Specific Enough to Act On",
    },
    subtitle: {
      ar: "بين «تولَّ هذا الملف» وتعليمات يبدأ بها المكلَّف فورًا مسافة تحدد نجاح التفويض بأكمله",
      en: "Between \"handle this file\" and instructions someone can start on immediately lies the gap that decides whether delegation works at all.",
    },
    primarySkillId: "skill.delegation",
    skillIds: ["skill.delegation", "skill.leadership-communication"],
    stage: 2,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.tl.02.hook",
        text: {
          ar: "قلت لمساعدك: «تولَّ رد العميل.» بعد ساعتين، رسالة منه: «تولّيت الأمر ماذا تقصد بالضبط؟» أين ضاع الوقت؟",
          en: "You told your associate: \"Handle the client's reply.\" Two hours later, a message: \"On it — what exactly do you mean?\" Where did the time go?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.tl.02.why",
        text: {
          ar: "تعليمات غامضة لا توفر وقتك؛ هي تنقل وقت التفكير من رأسك إلى محادثة توضيح لاحقة، وغالبًا في لحظة أضيق.",
          en: "Vague instructions don't save your time; they just move the thinking to a later clarifying conversation, usually at a worse moment.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.tl.02.goals",
        goals: {
          ar: [
            "أن تحدد أربعة عناصر تجعل التعليمات قابلة للبدء فورًا: السياق، القيود، الموعد، وتعريف الإنجاز.",
            "أن تميّز بين التفاصيل الضرورية والتفاصيل التي تُلغي فائدة التفويض أصلاً.",
            "أن تكتب تعليمات موجزة يبدأ بها المكلَّف دون أسئلة إضافية.",
          ],
          en: [
            "Identify four elements that make instructions actionable immediately: context, constraints, deadline, and a definition of done.",
            "Distinguish necessary detail from detail that defeats the point of delegating at all.",
            "Write concise instructions someone can start on without further questions.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.tl.02.lesson",
        title: {
          ar: "أربعة عناصر، لا خطوة خطوة",
          en: "Four elements, not step-by-step",
        },
        body: {
          ar: [
            "«تولَّ هذا الملف» يفشل لأنه يفترض أن المكلَّف يملك في رأسه كل ما تملكه أنت. لكنه لا يملك خلفيتك، ولا حدودك، ولا معنى «تمام» بالنسبة لك.",
            "العنصر الأول: السياق. لماذا هذه المهمة مهمة الآن، وما الذي سبقها؟ جملتان تكفيان غالبًا.",
            "العنصر الثاني: القيود. الميزانية، النبرة المطلوبة مع العميل، أو ما يجب تجنبه بالضبط.",
            "العنصر الثالث: الموعد الحقيقي، لا «بأسرع وقت» الغامضة التي يفسرها كل شخص بشكل مختلف.",
            "العنصر الرابع، والأهم: كيف يبدو الإنجاز؟ ما الذي تراه حين تفتح النتيجة فتقول «هذا بالضبط ما أردت»؟",
            "لكن تحذير مهم: سرد كل خطوة تنفيذية بالتفصيل يُلغي فائدة التفويض؛ أنت تريد نتيجة محددة، لا نسخة مطابقة لطريقتك أنت في العمل.",
          ],
          en: [
            "\"Handle this file\" fails because it assumes the delegate holds everything in his head that you hold in yours. He has neither your background, nor your limits, nor your meaning of \"done.\"",
            "First element: context. Why does this matter now, and what came before it? Two sentences usually suffice.",
            "Second element: constraints. Budget, the tone expected with the client, or exactly what to avoid.",
            "Third element: a real deadline, not a vague \"as soon as possible\" that everyone interprets differently.",
            "Fourth, and most important: what does done look like? What do you see when you open the result and think, \"exactly what I wanted\"?",
            "One warning: spelling out every execution step defeats the point of delegating; you want a defined outcome, not a copy of your exact working method.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.tl.02.visual",
        title: {
          ar: "أربعة عناصر لتعليمات قابلة للتنفيذ",
          en: "Four elements of actionable instructions",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "السياق", en: "Context" },
            detail: {
              ar: "لماذا هذه المهمة الآن، وما سبقها؟",
              en: "Why this task now, and what preceded it?",
            },
            tone: "neutral",
          },
          {
            label: { ar: "القيود", en: "Constraints" },
            detail: {
              ar: "الميزانية، النبرة، وما يجب تجنبه بالضبط.",
              en: "Budget, tone, and exactly what to avoid.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "الموعد الحقيقي", en: "Real deadline" },
            detail: {
              ar: "تاريخ وساعة محددان، لا «بأسرع وقت».",
              en: "A specific date and time, not \"as soon as possible.\"",
            },
            tone: "positive",
          },
          {
            label: { ar: "تعريف الإنجاز", en: "Definition of done" },
            detail: {
              ar: "ما الذي يجعلك تقول «هذا بالضبط ما أردت» عند رؤية النتيجة؟",
              en: "What makes you say \"exactly this\" when you see the result?",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.tl.02.worked",
        strong: {
          label: {
            ar: "شريك يعطي تعليمات قابلة للبدء فورًا",
            en: "A partner giving instructions someone can start on immediately",
          },
          text: {
            ar: [
              "«العميل، مصنع الأصالة للأثاث، طلب تمديد مهلة السداد. السياق: لدينا علاقة طويلة، لكن لا تعرض أكثر من ٣٠ يومًا إضافيًا دون العودة إلي.»",
              "«أحتاج ردك الأولي جاهزًا للمراجعة غدًا الساعة الثانية ظهرًا. الإنجاز الناجح: رد مهذب يوضح خيارين ملموسين للعميل، لا وعدًا عامًا.»",
            ],
            en: [
              "\"The client, Al-Asala Furniture Factory, asked for a payment extension. Context: we have a long relationship, but don't offer more than 30 extra days without checking with me first.\"",
              "\"I need your initial reply ready for review tomorrow by 2pm. Success looks like: a polite reply offering two concrete options, not a vague promise.\"",
            ],
          },
          why: {
            ar: "أعطت السياق والقيد والموعد وتعريف الإنجاز في أربع جمل، فبدأ المكلَّف فورًا دون أسئلة توضيحية.",
            en: "She gave context, constraint, deadline, and definition of done in four sentences, so the delegate started immediately with no clarifying questions needed.",
          },
        },
        weak: {
          label: {
            ar: "شريك يترك التعليمات غامضة",
            en: "A partner leaving instructions vague",
          },
          text: {
            ar: [
              "«رد على مصنع الأصالة بخصوص طلب التمديد، وخذ وقتك.»",
              "لم يذكر حدًا للتنازل، ولا موعدًا، ولا ما يعتبره ردًا ناجحًا.",
            ],
            en: [
              "\"Reply to Al-Asala about the extension request, take your time.\"",
              "He mentioned no limit on the concession, no deadline, and no definition of a successful reply.",
            ],
          },
          why: {
            ar: "«خذ وقتك» بلا موعد يعني تأخيرًا محتملًا، وغياب حد التنازل يعني خطرًا حقيقيًا بوعد لا يستطيع المكتب الوفاء به.",
            en: "\"Take your time\" with no deadline invites likely delay, and no concession limit risks a promise the firm can't actually keep.",
          },
        },
      },
      { kind: "activity", id: "s.tl.02.a1", activityId: "act.tl.02.1", mode: "quick" },
      { kind: "activity", id: "s.tl.02.a2", activityId: "act.tl.02.2", mode: "guided" },
      { kind: "activity", id: "s.tl.02.a3", activityId: "act.tl.02.3", mode: "guided" },
      { kind: "activity", id: "s.tl.02.a4", activityId: "act.tl.02.4", mode: "independent" },
      { kind: "activity", id: "s.tl.02.a5", activityId: "act.tl.02.5", mode: "independent" },
      { kind: "summary", id: "s.tl.02.summary", summaryCardId: "card.tl.02" },
      {
        kind: "apply_tomorrow",
        id: "s.tl.02.apply",
        task: {
          ar: "قبل تفويض أي مهمة غدًا، اكتب العناصر الأربعة في ثلاث جمل قبل أن تتحدث مع المكلَّف.",
          en: "Before delegating anything tomorrow, write the four elements in three sentences before you speak to the delegate.",
        },
        detail: {
          ar: "إن لم تستطع كتابة تعريف الإنجاز بوضوح، فأنت لست جاهزًا للتفويض بعد.",
          en: "If you can't write the definition of done clearly, you're not ready to delegate yet.",
        },
      },
      {
        kind: "next_mission",
        id: "s.tl.02.next",
        teaser: {
          ar: "أعطيت تعليمات واضحة. لكن ماذا تفعل بعد أن يبدأ العمل؟ الوحدة القادمة: المتابعة التي تساعد دون أن تصبح مراقبة خانقة.",
          en: "You gave clear instructions. But what happens once work starts? Next unit: checking in without it becoming smothering oversight.",
        },
      },
    ],
    activities: [
      {
        id: "act.tl.02.1",
        kind: "best_response",
        skillId: "skill.delegation",
        stage: 2,
        context: {
          ar: [
            "تريد تفويض متدرب بإعداد ملخص وقائع لعميلة، شركة اللؤلؤة للتجارة، قبل اجتماع بعد غد.",
          ],
          en: [
            "You want to delegate a facts summary for a client, Al-Lulua Trading, ahead of a meeting the day after tomorrow.",
          ],
        },
        prompt: {
          ar: "أي تعليمات الأفضل؟",
          en: "Which instructions are best?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«لخّص وقائع ملف اللؤلؤة، وخذ وقتك في المراجعة.»",
              en: "\"Summarise the Al-Lulua file's facts, and take your time reviewing.\"",
            },
            rationale: {
              ar: "لا موعد محدد ولا تعريف لما يجعل الملخص جاهزًا للاجتماع؛ الغموض يعني احتمال تأخير أو ملخص لا يناسب الغرض.",
              en: "No fixed deadline, no definition of what makes the summary meeting-ready; the vagueness risks delay or a summary that misses the purpose.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«أحتاج ملخصًا من صفحة واحدة لوقائع ملف اللؤلؤة، جاهزًا غدًا الساعة الرابعة، يركز على نقاط الخلاف الثلاث الرئيسية فقط.»",
              en: "\"I need a one-page facts summary of the Al-Lulua file, ready tomorrow by 4pm, focused only on the three main points of dispute.\"",
            },
            correct: true,
            rationale: {
              ar: "موعد محدد، وتعريف واضح لما يجعل الملخص ناجحًا، وقيد يمنع الإغراق بتفاصيل غير ضرورية.",
              en: "A fixed deadline, a clear definition of a successful summary, and a constraint preventing an overload of unnecessary detail.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«افتح الملف واقرأ كل مستند فيه، ثم انسخ كل نقطة تراها مهمة في مستند واحد بترتيب التواريخ.»",
              en: "\"Open the file, read every document, then copy every point you find important into one document in date order.\"",
            },
            rationale: {
              ar: "تعليمات خطوة بخطوة تُلغي فائدة التفويض؛ تصف طريقتك أنت للعمل بدل تحديد النتيجة المطلوبة.",
              en: "Step-by-step instructions defeat the point of delegating; they describe your own working method instead of the required outcome.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«جهّز شيئًا يساعدني في اجتماع اللؤلؤة.»",
              en: "\"Prepare something to help me in the Al-Lulua meeting.\"",
            },
            rationale: {
              ar: "لا شكل محدد ولا موعد ولا نطاق؛ «شيء يساعد» يفتح الباب لتفسيرات متعددة معظمها لن يناسب الحاجة الفعلية.",
              en: "No defined form, deadline, or scope; \"something to help\" invites multiple interpretations, most of which won't fit the actual need.",
            },
          },
        ],
      },
      {
        id: "act.tl.02.2",
        kind: "fill_blank",
        skillId: "skill.delegation",
        stage: 2,
        prompt: {
          ar: "أكمل الجملة التي تحول تعليمات غامضة إلى تعليمات قابلة للبدء بها فورًا.",
          en: "Complete the sentence that turns vague instructions into ones someone can start on immediately.",
        },
        hint: {
          ar: "التعليمات القابلة للتنفيذ تحدد متى وكيف يبدو الإنجاز.",
          en: "Actionable instructions specify when, and what done looks like.",
        },
        template: {
          ar: "بدل «تولَّ الملف»، قل: «أحتاج {{0}} جاهزًا يوم الخميس، بحيث يكون {{1}}.»",
          en: "Instead of \"handle the file,\" say: \"I need {{0}} ready by Thursday, such that it {{1}}.\"",
        },
        blanks: [
          {
            id: "b1",
            options: [
              { ar: "مخرجًا محددًا واضحًا", en: "a specific defined deliverable" },
              { ar: "شيئًا ما بشكل عام", en: "something in general" },
              { ar: "كل ما يخطر ببالك", en: "whatever comes to mind" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "المخرج المحدد هو ما يمنح المكلَّف نقطة انطلاق واضحة، بدل التخمين حول الشكل المطلوب.",
              en: "A specific deliverable is what gives the delegate a clear starting point, instead of guessing at the required form.",
            },
          },
          {
            id: "b2",
            options: [
              { ar: "يحقق تعريفًا واضحًا للنجاح", en: "meets a clear definition of success" },
              { ar: "يشبه أسلوبي تمامًا في كل خطوة", en: "matches my own method exactly step by step" },
              { ar: "طويلًا بما يكفي ليبدو شاملاً", en: "long enough to look thorough" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "تعريف النجاح يوجه المكلَّف نحو النتيجة المطلوبة؛ فرض الأسلوب أو الطول يُلغي استقلالية التفويض بلا داع.",
              en: "A definition of success guides the delegate toward the required outcome; dictating method or length needlessly kills the delegate's independence.",
            },
          },
        ],
      },
      {
        id: "act.tl.02.3",
        kind: "find_mistake",
        skillId: "skill.delegation",
        stage: 2,
        context: {
          ar: [
            "رسالة تفويض أرسلها محامٍ لمساعده: «راجع مسودة العقد لعميل مصنع الوفاء للأثاث المكتبي، وأرسل لي رأيك حين تنتهي. هناك بعض النقاط الحساسة، فانتبه.»",
          ],
          en: [
            "A delegation message a lawyer sent his assistant: \"Review the draft contract for Al-Wafa Office Furniture, and send me your view when you're done. There are some sensitive points, so be careful.\"",
          ],
        },
        prompt: {
          ar: "ما الخطأ الأساسي في هذه الرسالة؟",
          en: "What is the core mistake in this message?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "لم يذكر اسم العميل بوضوح كافٍ.",
              en: "The client's name wasn't mentioned clearly enough.",
            },
            rationale: {
              ar: "اسم العميل مذكور بوضوح؛ هذا ليس مصدر الغموض الفعلي في الرسالة.",
              en: "The client's name is clearly stated; this isn't the message's actual source of vagueness.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«النقاط الحساسة» و«حين تنتهي» بلا تحديد ما هي النقاط أو متى الموعد الفعلي.",
              en: "\"Sensitive points\" and \"when you're done\" with no specifics on what those points are or the real deadline.",
            },
            correct: true,
            rationale: {
              ar: "التعليمات تفترض أن المكلَّف يعرف ما الذي يقلق المحامي بالضبط، وتترك الموعد مفتوحًا بلا تاريخ.",
              en: "The instructions assume the assistant already knows exactly what worries the lawyer, and leave the deadline open with no date.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "طلب مراجعة العقد بدل صياغته من جديد.",
              en: "Asking for a review instead of a fresh draft.",
            },
            rationale: {
              ar: "المراجعة مهمة مشروعة ومناسبة؛ المشكلة ليست في نوع المهمة نفسها.",
              en: "A review is a legitimate, fitting task; the problem isn't the task type itself.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "استخدام البريد بدل مكالمة هاتفية.",
              en: "Using email instead of a phone call.",
            },
            rationale: {
              ar: "وسيلة التواصل ليست المشكلة؛ رسالة مكتوبة واضحة تعمل بنفس كفاءة مكالمة واضحة.",
              en: "The communication channel isn't the issue; a clear written message works just as well as a clear phone call.",
            },
          },
        ],
      },
      {
        id: "act.tl.02.4",
        kind: "email_rewrite",
        skillId: "skill.delegation",
        secondarySkillIds: ["skill.leadership-communication"],
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.leadership-written.v1",
        weight: 2,
        minChars: 180,
        context: {
          ar: [
            "تريد تفويض زميلك بإعداد رد على شكوى عميل، شركة الرواد للنقل، بشأن تأخر تسليم مستندات.",
          ],
          en: [
            "You want to delegate drafting a reply to a client complaint, Al-Ruwad Transport, about delayed document delivery.",
          ],
        },
        prompt: {
          ar: "أعد صياغة رسالة التفويض التالية لتصبح تعليمات قابلة للبدء بها فورًا.",
          en: "Rewrite the following delegation message into instructions someone can act on immediately.",
        },
        draft: {
          ar: ["«رد على شكوى الرواد، وحاول أن يكون الرد جيدًا لأن العميل مهم.»"],
          en: ["\"Reply to the Al-Ruwad complaint, and try to make it good since the client matters.\""],
        },
        modelAnswer: {
          ar: [
            "«الرواد اشتكى من تأخر تسليم مستندات ملفه أسبوعًا كاملاً. أحتاج مسودة رد جاهزة غدًا ظهرًا.»",
            "«الرد يعتذر بوضوح، يذكر سببًا موجزًا للتأخير، ويقدم موعدًا محددًا للتسليم القادم. لا تعد بتعويض دون العودة إلي.»",
          ],
          en: [
            "\"Al-Ruwad complained about a full week's delay delivering his file's documents. I need a draft reply ready by noon tomorrow.\"",
            "\"The reply clearly apologises, gives a brief reason for the delay, and offers a specific date for the next delivery. Don't promise compensation without checking with me first.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«رد على شكوى الرواد، وحاول أن يكون الرد جيدًا لأن العميل مهم.»"],
            en: ["\"Reply to the Al-Ruwad complaint, and try to make it good since the client matters.\""],
          },
          whatIsWrong: {
            ar: "«جيدًا» ليس معيارًا، ولا موعد ولا سياق عن سبب الشكوى ولا حد لما يجوز الوعد به.",
            en: "\"Good\" isn't a standard, and there's no deadline, no context on the complaint's cause, and no limit on what may be promised.",
          },
        },
      },
      {
        id: "act.tl.02.5",
        kind: "reflection",
        skillId: "skill.delegation",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع مهمة عادت إليك بشكل مختلف تمامًا عما توقعت. أي من العناصر الأربعة كان غائبًا في تعليماتك؟",
          en: "Recall a task that came back nothing like what you expected. Which of the four elements was missing from your instructions?",
        },
        followUp: {
          ar: "لو صغت التعليمات بالعناصر الأربعة، كيف كانت النتيجة لتختلف؟",
          en: "Had you framed the instructions with all four elements, how would the result have differed?",
        },
      },
    ],
    summaryCard: {
      id: "card.tl.02",
      title: {
        ar: "أربعة عناصر لا خطوة خطوة",
        en: "Four Elements, Not Step-by-Step",
      },
      whatYouLearned: {
        ar: [
          "تعليمات غامضة تنقل وقت التفكير من رأسك إلى محادثة توضيح لاحقة، لا توفره.",
          "أربعة عناصر تجعل التعليمات قابلة للبدء بها فورًا: السياق، القيود، الموعد، وتعريف الإنجاز.",
          "سرد كل خطوة تنفيذية بالتفصيل يُلغي فائدة التفويض ذاتها.",
        ],
        en: [
          "Vague instructions don't save thinking time; they push it to a later clarifying conversation.",
          "Four elements make instructions immediately actionable: context, constraints, deadline, and a definition of done.",
          "Spelling out every execution step defeats the point of delegating at all.",
        ],
      },
      framework: {
        name: {
          ar: "العناصر الأربعة: السياق · القيود · الموعد · الإنجاز",
          en: "The Four Elements: Context · Constraints · Deadline · Done",
        },
        steps: [
          { ar: "اذكر لماذا هذه المهمة الآن وما سبقها.", en: "State why this task now, and what preceded it." },
          { ar: "حدد القيود: الميزانية، النبرة، وما يجب تجنبه.", en: "Set the constraints: budget, tone, and what to avoid." },
          { ar: "ضع موعدًا حقيقيًا بتاريخ وساعة.", en: "Give a real deadline with a date and time." },
          { ar: "صف ما الذي يجعلك تقول: هذا بالضبط ما أردت.", en: "Describe what makes you say: exactly what I wanted." },
        ],
      },
      rememberThis: {
        ar: "«خذ وقتك» و«افعل ما تراه مناسبًا» ليستا تعليمات؛ هما تأجيل لمحادثة التوضيح إلى وقت أضيق.",
        en: "\"Take your time\" and \"do what seems right\" aren't instructions; they're a clarifying conversation postponed to a worse moment.",
      },
      useItTomorrow: {
        ar: "قبل تفويض أي مهمة غدًا، اكتب العناصر الأربعة في ثلاث جمل فقط قبل التحدث مع المكلَّف.",
        en: "Before delegating anything tomorrow, write the four elements in just three sentences before speaking to the delegate.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.governance-raci", "src.legal-project-management"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 03 — Checking In Without Micromanaging
  // =========================================================================
  {
    id: "unit.tl.03",
    chapterId: "ch.tl.delegating-clearly",
    order: 3,
    title: {
      ar: "المتابعة دون خنق الملكية",
      en: "Checking In Without Micromanaging",
    },
    subtitle: {
      ar: "متابعة تزيل عائقًا حقيقيًا تختلف تمامًا عن متابعة تُشعر المكلَّف أنه لا يُوثق به",
      en: "A check-in that removes a real blocker is nothing like one that just tells the delegate you don't trust them.",
    },
    primarySkillId: "skill.delegation",
    skillIds: ["skill.delegation", "skill.teamwork"],
    stage: 2,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.tl.03.hook",
        text: {
          ar: "فوّضت مساعدك بملف الاثنين. الثلاثاء، الأربعاء، والخميس سألته «كيف الوضع؟» ثلاث مرات. هل ساعدته، أم أخبرته أنك لا تثق به؟",
          en: "You delegated a file to your associate on Monday. You asked \"how's it going?\" three times: Tuesday, Wednesday, Thursday. Did you help him, or tell him you don't trust him?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.tl.03.why",
        text: {
          ar: "متابعة بلا غرض واضح تكلّف وقت المكلَّف وثقته بنفسه، دون أن تضيف أي قيمة فعلية للعمل.",
          en: "A check-in with no clear purpose costs the delegate's time and self-confidence, without adding any real value to the work.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.tl.03.goals",
        goals: {
          ar: [
            "أن تميّز بين متابعة تزيل عائقًا فعليًا ومتابعة تفتقد سببًا واضحًا.",
            "أن تختار توقيت المتابعة بناءً على مخاطر المهمة، لا على قلقك الشخصي.",
            "أن تصمم نقاط تحقق متفق عليها مسبقًا بدل السؤال العشوائي المتكرر.",
          ],
          en: [
            "Distinguish a check-in that removes a real blocker from one with no clear reason.",
            "Time check-ins based on the task's actual risk, not your personal anxiety.",
            "Design pre-agreed checkpoints instead of repeated, random questions.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.tl.03.lesson",
        title: {
          ar: "الفرق بين المتابعة والمراقبة",
          en: "The difference between checking in and hovering",
        },
        body: {
          ar: [
            "متابعة مفيدة لها سبب واضح: نقطة قرار حقيقية تحتاج مدخلاً منك، أو خطر معروف مسبقًا بأن جزءًا من المهمة قد يتعثر هناك تحديدًا.",
            "مراقبة خانقة لا سبب واضحًا لها؛ هي قلق ينزل على المكلَّف كسؤال متكرر يعطل تركيزه أكثر مما يساعده.",
            "أفضل حل: اتفق مسبقًا، عند التفويض نفسه، على نقاط تحقق محددة — بعد اليوم الأول مثلاً، أو عند نقطة قرار معروفة — بدل ترك المتابعة لمزاج اللحظة.",
            "إشارة المكلَّف الأهم: إن كان يطلب مساعدة بنفسه، فهذا يعني أن قنوات التواصل مفتوحة فعلاً، وأنت لست بحاجة للسؤال كل يوم.",
            "متابعة جيدة تنتهي بإزالة عائق فعلي أو تأكيد أن الاتجاه صحيح؛ متابعة سيئة تنتهي بجملة «أنا فقط أتحقق» بلا أي أثر عملي.",
          ],
          en: [
            "A useful check-in has a clear reason: a real decision point that needs your input, or a known risk that a specific part of the task might stumble.",
            "Smothering oversight has no clear reason; it's anxiety landing on the delegate as a repeated question that disrupts focus more than it helps.",
            "The best fix: agree in advance, at the moment of delegation itself, on specific checkpoints — after day one, say, or at a known decision point — instead of letting check-ins follow your mood.",
            "The strongest signal: if the delegate asks for help unprompted, that means the channels are genuinely open, and you don't need to ask every day.",
            "A good check-in ends by removing a real blocker or confirming the direction is right; a bad one ends with \"just checking in,\" with no practical effect at all.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.tl.03.visual",
        title: {
          ar: "متابعة مقابل مراقبة",
          en: "Checking in versus hovering",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "متابعة مفيدة", en: "A useful check-in" },
            detail: {
              ar: "لها سبب محدد: قرار حقيقي أو خطر معروف، ومتفق عليها مسبقًا.",
              en: "Has a specific reason: a real decision or known risk, and is pre-agreed.",
            },
            tone: "positive",
          },
          {
            label: { ar: "مراقبة خانقة", en: "Smothering oversight" },
            detail: {
              ar: "بلا سبب واضح، تكرر السؤال نفسه، وتقاطع تركيز المكلَّف بلا داعٍ.",
              en: "No clear reason, repeats the same question, and interrupts the delegate's focus for nothing.",
            },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.tl.03.worked",
        strong: {
          label: {
            ar: "شريكة تحدد نقطة تحقق واحدة عند التفويض",
            en: "A partner setting one checkpoint at the moment of delegation",
          },
          text: {
            ar: [
              "«بعد أن تنتهي من مراجعة أولى للعقد، أرسل لي أي بنود تراها غير عادلة قبل أن تكمل الصياغة، فتلك النقطة الوحيدة التي أحتاج رأيي فيها.»",
              "«عدا ذلك، الملف لك بالكامل حتى موعد التسليم الخميس.»",
            ],
            en: [
              "\"After your first pass on the contract, send me any clauses you find unfair before you finish drafting — that's the one point I need to weigh in on.\"",
              "\"Otherwise, the file is fully yours until Thursday's deadline.\"",
            ],
          },
          why: {
            ar: "حددت نقطة تحقق واحدة بسبب واضح، وتركت الباقي للمكلَّف دون سؤال متكرر بلا غرض.",
            en: "She set one checkpoint with a clear reason, and left the rest to the delegate with no repeated, purposeless questions.",
          },
        },
        weak: {
          label: {
            ar: "شريك يسأل يوميًا بلا سبب محدد",
            en: "A partner asking daily with no specific reason",
          },
          text: {
            ar: [
              "«كيف الوضع مع العقد؟» يوم الاثنين، ثم الثلاثاء، ثم الأربعاء.",
              "في كل مرة يسمع الجواب نفسه: «ما زلت أعمل عليه»، دون أن يقدم قرارًا أو يزيل عائقًا.",
            ],
            en: [
              "\"How's the contract going?\" on Monday, then Tuesday, then Wednesday.",
              "Each time he hears the same answer: \"still working on it,\" without offering a decision or removing any blocker.",
            ],
          },
          why: {
            ar: "السؤال المتكرر بلا سبب يُشعر المكلَّف بعدم الثقة، ويقاطع تركيزه دون أن يضيف أي قيمة فعلية للعمل.",
            en: "The repeated, purposeless question signals distrust, and interrupts the delegate's focus without adding any real value to the work.",
          },
        },
      },
      { kind: "activity", id: "s.tl.03.a1", activityId: "act.tl.03.1", mode: "quick" },
      { kind: "activity", id: "s.tl.03.a2", activityId: "act.tl.03.2", mode: "guided" },
      { kind: "activity", id: "s.tl.03.a3", activityId: "act.tl.03.3", mode: "guided" },
      { kind: "activity", id: "s.tl.03.a4", activityId: "act.tl.03.4", mode: "independent" },
      { kind: "activity", id: "s.tl.03.a5", activityId: "act.tl.03.5", mode: "independent" },
      { kind: "summary", id: "s.tl.03.summary", summaryCardId: "card.tl.03" },
      {
        kind: "apply_tomorrow",
        id: "s.tl.03.apply",
        task: {
          ar: "في المرة القادمة التي تفوّض فيها مهمة، اتفق فورًا على نقطة تحقق واحدة محددة بدل ترك المتابعة مفتوحة.",
          en: "Next time you delegate a task, agree on one specific checkpoint immediately, instead of leaving check-ins open-ended.",
        },
        detail: {
          ar: "إن شعرت برغبة في السؤال خارج تلك النقطة، اسأل نفسك أولاً: ما الذي أحتاج فعلاً معرفته الآن؟",
          en: "If you feel the urge to ask outside that point, first ask yourself: what do I actually need to know right now?",
        },
      },
      {
        kind: "next_mission",
        id: "s.tl.03.next",
        teaser: {
          ar: "أتقنت التفويض من الاختيار حتى المتابعة. الفصل القادم: كيف تعطي ملاحظة يستفيد منها فريقك فعلاً بدل أن تجرح أو تُتجاهل.",
          en: "You've mastered delegation from choosing the person through checking in. Next chapter: giving feedback your team actually uses, instead of feedback that wounds or gets ignored.",
        },
      },
    ],
    activities: [
      {
        id: "act.tl.03.1",
        kind: "multiple_choice",
        skillId: "skill.delegation",
        stage: 2,
        context: {
          ar: [
            "فوّضت زميلًا بصياغة رد قانوني لعميل، شركة السنابل للتوزيع، والموعد بعد ثلاثة أيام.",
            "اليوم الثاني، لم يصلك أي تحديث منه.",
          ],
          en: [
            "You delegated a legal reply draft to a colleague for a client, Al-Sanabel Distribution, due in three days.",
            "By day two, you've heard nothing from him.",
          ],
        },
        prompt: {
          ar: "ما أفضل تصرف؟",
          en: "What's the best move?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "ترسل رسالة كل ساعتين تسأل عن التقدم.",
              en: "Send a message every two hours asking for progress.",
            },
            rationale: {
              ar: "تكرار السؤال بلا سبب محدد يقاطع تركيزه ويشعره بعدم الثقة، دون أن يقدم له أي مساعدة فعلية.",
              en: "Repeating the question with no specific reason disrupts his focus and signals distrust, without offering any real help.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "تنتظر حتى يوم التسليم دون أي تواصل أثناء العمل.",
              en: "Wait until delivery day with zero contact during the work.",
            },
            rationale: {
              ar: "غياب أي نقطة تحقق يعني اكتشاف مشكلة محتملة متأخرًا جدًا لإصلاحها قبل الموعد.",
              en: "No checkpoint at all means any potential problem is discovered too late to fix before the deadline.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "ترسل رسالة واحدة: «هل هناك أي عائق يحتاج مني قرارًا قبل أن تكمل؟»",
              en: "\"Is there any blocker needing a decision from me before you continue?\"",
            },
            correct: true,
            rationale: {
              ar: "سؤال واحد بسبب واضح — إزالة عائق محتمل — دون تكرار أو مراقبة بلا غرض.",
              en: "One question with a clear reason — removing a possible blocker — with no repetition or purposeless oversight.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "تعيد كتابة الرد بنفسك احتياطًا دون إخباره.",
              en: "Rewrite the reply yourself as a backup, without telling him.",
            },
            rationale: {
              ar: "يلغي التفويض فعليًا ويهدر وقتك؛ الحل الأقرب هو سؤال محدد لا استعادة كاملة للعمل.",
              en: "Effectively cancels the delegation and wastes your time; the right move is a targeted question, not fully reclaiming the work.",
            },
          },
        ],
      },
      {
        id: "act.tl.03.2",
        kind: "categorization",
        skillId: "skill.delegation",
        stage: 2,
        prompt: {
          ar: "صنّف كل نوع من المتابعة: هل هي متابعة مفيدة، أم مراقبة خانقة؟",
          en: "Sort each check-in type: is it a useful check-in, or smothering oversight?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «متابعة مفيدة» / «مراقبة خانقة» أسفل كل بند بدل السحب.",
          en: "Choose \"Useful check-in\" / \"Smothering oversight\" from buttons under each item instead of dragging.",
        },
        buckets: [
          { id: "useful", label: { ar: "متابعة مفيدة", en: "Useful check-in" } },
          { id: "hover", label: { ar: "مراقبة خانقة", en: "Smothering oversight" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "سؤال متفق عليه مسبقًا عند نقطة قرار معروفة في المهمة.",
              en: "A pre-agreed question at a known decision point in the task.",
            },
            bucketId: "useful",
            rationale: {
              ar: "له سبب واضح ومتفق عليه؛ يزيل عائقًا محتملًا في اللحظة المناسبة تحديدًا.",
              en: "Has a clear, pre-agreed reason; removes a potential blocker at exactly the right moment.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "الوقوف عند مكتب المكلَّف مرتين يوميًا لسؤاله «كيف الحال؟».",
              en: "Standing at the delegate's desk twice a day asking \"how's it going?\"",
            },
            bucketId: "hover",
            rationale: {
              ar: "تكرار بلا سبب محدد، يعطل تركيز المكلَّف ويشعره بأن عمله مراقَب لا موثوق به.",
              en: "Repetition with no specific reason, disrupting the delegate's focus and signaling his work is watched, not trusted.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "طلب مراجعة أولية بعد اليوم الأول لملف معقد وحساس.",
              en: "Requesting an initial review after day one on a complex, sensitive file.",
            },
            bucketId: "useful",
            rationale: {
              ar: "توقيت مرتبط بمخاطر حقيقية للمهمة، لا بقلق شخصي عام.",
              en: "Timed to the task's genuine risk level, not general personal anxiety.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "طلب نسخة من كل بريد إلكتروني يرسله المكلَّف للعميل قبل إرساله.",
              en: "Requiring a copy of every email the delegate sends the client before it goes out.",
            },
            bucketId: "hover",
            rationale: {
              ar: "يُلغي أي صلاحية قرار فعلية لدى المكلَّف، ويحوّل التفويض إلى تنفيذ يشرف عليه أحد على كل خطوة.",
              en: "Removes any real decision authority from the delegate, turning delegation into execution supervised at every step.",
            },
          },
        ],
      },
      {
        id: "act.tl.03.3",
        kind: "ordering",
        skillId: "skill.delegation",
        stage: 2,
        prompt: {
          ar: "رتّب خطوات تصميم نقطة تحقق مفيدة عند تفويض مهمة.",
          en: "Order the steps of designing a useful checkpoint when delegating a task.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the order number from a dropdown beside each step instead of dragging.",
        },
        hint: {
          ar: "ابدأ بتحديد المخاطر الحقيقية للمهمة قبل تحديد أي موعد.",
          en: "Start by identifying the task's real risks before setting any date.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "حدد أين قد تتعثر هذه المهمة تحديدًا، أو أي قرار يحتاج مدخلك.",
              en: "Identify exactly where this task might stumble, or which decision needs your input.",
            },
            rationale: {
              ar: "نقطة البداية؛ بلا هذا التحديد، أي متابعة لاحقة ستكون تخمينًا لا هدفًا واضحًا.",
              en: "The starting point; without this, any later check-in is a guess, not a clear purpose.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "اتفق مع المكلَّف على توقيت واحد أو اثنين لنقاط التحقق، عند التفويض نفسه.",
              en: "Agree with the delegate on one or two checkpoint timings, at the moment of delegation itself.",
            },
            rationale: {
              ar: "الاتفاق المسبق يمنع المفاجأة، ويجعل المتابعة متوقعة لا مقاطعة عشوائية.",
              en: "A prior agreement prevents surprise, making the check-in expected rather than a random interruption.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "اترك الباقي كاملاً للمكلَّف دون سؤال إضافي بين نقاط التحقق.",
              en: "Leave everything else fully to the delegate, with no extra questions between checkpoints.",
            },
            rationale: {
              ar: "الثقة بين نقاط التحقق هي ما يمنح المكلَّف ملكية فعلية للمهمة.",
              en: "Trust between checkpoints is what gives the delegate genuine ownership of the task.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "في نقطة التحقق، اسأل سؤالًا محددًا يزيل عائقًا أو يؤكد الاتجاه، لا سؤالًا عامًا.",
              en: "At the checkpoint, ask a specific question that removes a blocker or confirms direction, not a general one.",
            },
            rationale: {
              ar: "الخطوة الأخيرة؛ سؤال محدد يحول المتابعة إلى مساعدة فعلية بدل طقس فارغ.",
              en: "The last step; a specific question turns the check-in into real help instead of an empty ritual.",
            },
          },
        ],
      },
      {
        id: "act.tl.03.4",
        kind: "short_written",
        skillId: "skill.delegation",
        secondarySkillIds: ["skill.teamwork"],
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.leadership-written.v1",
        weight: 2,
        minChars: 180,
        context: {
          ar: [
            "فوّضت متدربًا بإعداد مسودة دفاع لعميل، مؤسسة الديار للمقاولات، والموعد بعد أربعة أيام.",
            "هذه أول مهمة معقدة يتولاها بمفرده، ولم يسبق له صياغة مذكرة دفاع كاملة.",
          ],
          en: [
            "You delegated a defence draft to a trainee for a client, Al-Diyar Contracting, due in four days.",
            "This is his first complex task alone, and he's never drafted a full defence memo before.",
          ],
        },
        prompt: {
          ar: "اكتب خطة متابعة موجزة (٥٠-٨٠ كلمة): متى تتحقق، ولماذا هذا التوقيت تحديدًا؟",
          en: "Write a brief check-in plan (50-80 words): when you'll check in, and why that specific timing?",
        },
        modelAnswer: {
          ar: [
            "«بما أنها أول مهمة معقدة له، سأطلب مسودة أولى للهيكل العام بعد اليومين الأولين، لا مسودة كاملة.»",
            "«هذا يكشف أي انحراف مبكرًا عن هيكل المذكرة قبل أن يستثمر وقتًا في تفاصيل تحتاج تعديلاً جذريًا. بعدها أتركه حتى موعد التسليم.»",
          ],
          en: [
            "\"Since this is his first complex task, I'll ask for a first draft of the overall structure after the first two days, not a full draft.\"",
            "\"This catches any drift from the memo's structure early, before he invests time in details that would need major rework. After that, I leave him until delivery.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«سأسأله يوميًا كيف تسير المذكرة لأنها أول مرة يفعل شيئًا كهذا.»"],
            en: ["\"I'll ask him daily how the memo's going since it's his first time doing something like this.\""],
          },
          whatIsWrong: {
            ar: "متابعة يومية بلا نقطة قرار محددة تتحول لمراقبة تُضعف ثقته، لا نقطة تحقق تحمي جودة العمل.",
            en: "Daily check-ins with no specific decision point become oversight that undermines his confidence, not a checkpoint protecting work quality.",
          },
        },
      },
      {
        id: "act.tl.03.5",
        kind: "reflection",
        skillId: "skill.delegation",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع مرة سألت فيها زميلًا «كيف الوضع؟» عدة مرات دون سبب محدد. ماذا كان قلقك الحقيقي وقتها؟",
          en: "Recall a time you asked a colleague \"how's it going?\" several times with no specific reason. What was your real anxiety then?",
        },
        followUp: {
          ar: "لو حددت نقطة تحقق واحدة عند التفويض بدل ذلك، ما الذي كنت لتكسبه؟",
          en: "Had you set one checkpoint at the moment of delegation instead, what would you have gained?",
        },
      },
    ],
    summaryCard: {
      id: "card.tl.03",
      title: {
        ar: "متابعة بسبب، لا متابعة بقلق",
        en: "Check In With a Reason, Not With Anxiety",
      },
      whatYouLearned: {
        ar: [
          "متابعة مفيدة لها سبب واضح: قرار حقيقي أو خطر معروف؛ مراقبة خانقة تفتقد أي سبب واضح.",
          "أفضل حل هو الاتفاق على نقاط تحقق محددة عند التفويض نفسه، لا ترك المتابعة لمزاج اللحظة.",
          "متابعة جيدة تنتهي بإزالة عائق فعلي أو تأكيد الاتجاه، لا بجملة «أنا فقط أتحقق».",
        ],
        en: [
          "A useful check-in has a clear reason: a real decision or known risk; smothering oversight has no clear reason at all.",
          "The best fix is agreeing on specific checkpoints at the moment of delegation, not leaving check-ins to the moment's mood.",
          "A good check-in ends by removing a real blocker or confirming direction, not with \"just checking in.\"",
        ],
      },
      framework: {
        name: {
          ar: "المتابعة الهادفة: حدد · اتفق · اترك · اسأل",
          en: "Purposeful Check-Ins: Identify · Agree · Leave · Ask",
        },
        steps: [
          { ar: "حدد أين قد تتعثر المهمة أو أي قرار يحتاج مدخلك.", en: "Identify where the task might stumble or which decision needs your input." },
          { ar: "اتفق على توقيت نقاط التحقق عند التفويض نفسه.", en: "Agree on checkpoint timing at the moment of delegation itself." },
          { ar: "اترك الباقي كاملاً للمكلَّف بين نقاط التحقق.", en: "Leave everything else fully to the delegate between checkpoints." },
          { ar: "اسأل سؤالًا محددًا يزيل عائقًا، لا سؤالًا عامًا متكررًا.", en: "Ask a specific question that removes a blocker, not a repeated general one." },
        ],
      },
      rememberThis: {
        ar: "السؤال المتكرر بلا سبب لا يحمي جودة العمل؛ هو يخبر المكلَّف أنك لا تثق به.",
        en: "A repeated question with no reason doesn't protect quality; it tells the delegate you don't trust him.",
      },
      useItTomorrow: {
        ar: "في المرة القادمة التي تفوّض فيها مهمة، اتفق فورًا على نقطة تحقق واحدة محددة بدل ترك الباب مفتوحًا.",
        en: "Next time you delegate a task, agree immediately on one specific checkpoint instead of leaving it open-ended.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.governance-raci", "src.smarter-collaboration"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 04 — Feedback That's Specific Enough to Act On
  // =========================================================================
  {
    id: "unit.tl.04",
    chapterId: "ch.tl.feedback-that-lands",
    order: 4,
    title: {
      ar: "ملاحظة محددة يمكن التصرف بموجبها",
      en: "Feedback That's Specific Enough to Act On",
    },
    subtitle: {
      ar: "«هذا يحتاج تحسينًا» لا يعلّم أحدًا شيئًا؛ السلوك المحدد وأثره وما يجب تغييره هو ما يعلّم",
      en: "\"This needs work\" teaches no one anything; the specific behavior, its effect, and what to change is what teaches.",
    },
    primarySkillId: "skill.feedback",
    skillIds: ["skill.feedback", "skill.leadership-communication"],
    stage: 2,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.tl.04.hook",
        text: {
          ar: "قلت لمساعدك: «مذكرتك تحتاج تحسينًا.» بعد أسبوع، المذكرة الجديدة فيها المشكلة نفسها تمامًا. لماذا لم تتغير؟",
          en: "You told your associate: \"Your memo needs work.\" A week later, the new memo has the exact same problem. Why didn't anything change?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.tl.04.why",
        text: {
          ar: "ملاحظة عامة تشعر المتلقي بالإحباط دون أن تمنحه ما يحتاج فعله تحديدًا؛ النتيجة تكرار الخطأ نفسه بثقة أقل.",
          en: "General feedback leaves the recipient frustrated without giving him anything specific to do; the result is the same mistake repeated with less confidence.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.tl.04.goals",
        goals: {
          ar: [
            "أن تحدد السلوك الملموس محل الملاحظة، لا الانطباع العام عنه.",
            "أن تربط السلوك بأثره الفعلي على العمل أو العميل أو الفريق.",
            "أن تقترح تغييرًا محددًا قابلًا للتنفيذ في المرة القادمة، دون أن تتحول الملاحظة لهجوم شخصي.",
          ],
          en: [
            "Identify the concrete behavior the feedback is about, not a general impression of it.",
            "Connect the behavior to its real effect on the work, the client, or the team.",
            "Propose a specific, actionable change for next time, without the feedback becoming a personal attack.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.tl.04.lesson",
        title: {
          ar: "السلوك، الأثر، والتغيير",
          en: "Behavior, effect, change",
        },
        body: {
          ar: [
            "«هذا يحتاج تحسينًا» فشل لأنه لا يخبر أحدًا بماذا يحتاج تحسينًا، ولا بماذا يفعل مختلفًا في المرة القادمة.",
            "الخطوة الأولى: صف السلوك الملموس، لا شخصية الشخص أو نيته. «حذفت الفقرة الافتتاحية» لا «أنت مهمل».",
            "الخطوة الثانية: اربط السلوك بأثره الفعلي. «بلا فقرة افتتاحية، القاضي يقرأ خمس صفحات قبل أن يفهم موضوع الطلب.»",
            "الخطوة الثالثة: اقترح التغيير المحدد للمرة القادمة. «ابدأ كل مذكرة بفقرة من ثلاثة أسطر تلخص الطلب والسبب.»",
            "الفرق بين ملاحظة بناءة وهجوم شخصي: البناءة تصف فعلاً يمكن تغييره؛ الهجوم يصف شخصًا يصعب تغييره. «مذكرتك ينقصها كذا» لا «أنت لا تجيد الكتابة».",
          ],
          en: [
            "\"This needs work\" fails because it tells no one what needs work, nor what to do differently next time.",
            "First step: describe the concrete behavior, not the person's character or intent. \"You cut the opening paragraph\" not \"you're careless.\"",
            "Second step: connect the behavior to its real effect. \"Without an opening paragraph, the judge reads five pages before understanding the request's subject.\"",
            "Third step: propose the specific change for next time. \"Open every memo with a three-line paragraph summarising the request and reason.\"",
            "The difference between constructive feedback and a personal attack: constructive describes an action that can change; an attack describes a person who's hard to change. \"Your memo is missing X\" not \"you can't write.\"",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.tl.04.visual",
        title: {
          ar: "ثلاث خطوات لملاحظة فعالة",
          en: "Three steps to effective feedback",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "السلوك", en: "Behavior" },
            detail: {
              ar: "ما الذي فعله بالضبط، بلا انطباع عام أو حكم على النية.",
              en: "What exactly he did, no general impression or judgment of intent.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "الأثر", en: "Effect" },
            detail: {
              ar: "ما الذي كلّف هذا السلوك فعلاً في العمل أو مع العميل.",
              en: "What this behavior actually cost the work or the client.",
            },
            tone: "negative",
          },
          {
            label: { ar: "التغيير", en: "Change" },
            detail: {
              ar: "ما الذي يفعله تحديدًا في المرة القادمة بدلاً من ذلك.",
              en: "What exactly to do differently next time.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.tl.04.worked",
        strong: {
          label: {
            ar: "شريك يعطي ملاحظة محددة",
            en: "A partner giving specific feedback",
          },
          text: {
            ar: [
              "«مذكرتك حذفت الفقرة الافتتاحية التي تلخص الطلب. بدونها، القاضي يقرأ صفحات قبل أن يفهم ما نطلبه بالضبط.»",
              "«في المرة القادمة، ابدأ كل مذكرة بفقرة من ثلاثة أسطر: الطلب، السبب، والنتيجة المرجوة.»",
            ],
            en: [
              "\"Your memo cut the opening paragraph summarising the request. Without it, the judge reads pages before understanding exactly what we're asking for.\"",
              "\"Next time, open every memo with a three-line paragraph: the request, the reason, and the desired outcome.\"",
            ],
          },
          why: {
            ar: "وصف سلوكًا محددًا وأثره الفعلي، ثم اقترح تغييرًا واضحًا يمكن تطبيقه فورًا في المرة القادمة.",
            en: "He described a specific behavior and its real effect, then proposed a clear change applicable immediately next time.",
          },
        },
        weak: {
          label: {
            ar: "شريك يعطي ملاحظة عامة",
            en: "A partner giving general feedback",
          },
          text: {
            ar: [
              "«مذكرتك تحتاج تحسينًا، حاول أن تكون أكثر احترافية في المرة القادمة.»",
            ],
            en: [
              "\"Your memo needs work, try to be more professional next time.\"",
            ],
          },
          why: {
            ar: "لا سلوك محدد ولا أثر مذكور ولا تغيير واضح؛ «أكثر احترافية» لا يخبر أحدًا بماذا يفعل مختلفًا فعليًا.",
            en: "No specific behavior, no stated effect, no clear change; \"more professional\" tells no one what to actually do differently.",
          },
        },
      },
      { kind: "activity", id: "s.tl.04.a1", activityId: "act.tl.04.1", mode: "quick" },
      { kind: "activity", id: "s.tl.04.a2", activityId: "act.tl.04.2", mode: "guided" },
      { kind: "activity", id: "s.tl.04.a3", activityId: "act.tl.04.3", mode: "guided" },
      { kind: "activity", id: "s.tl.04.a4", activityId: "act.tl.04.4", mode: "independent" },
      { kind: "activity", id: "s.tl.04.a5", activityId: "act.tl.04.5", mode: "independent" },
      { kind: "summary", id: "s.tl.04.summary", summaryCardId: "card.tl.04" },
      {
        kind: "apply_tomorrow",
        id: "s.tl.04.apply",
        task: {
          ar: "المرة القادمة التي تريد فيها إعطاء ملاحظة، اكتبها بثلاث جمل: السلوك، الأثر، التغيير.",
          en: "Next time you want to give feedback, write it in three sentences: behavior, effect, change.",
        },
        detail: {
          ar: "إن لم تستطع كتابة السلوك المحدد بجملة واحدة، فأنت لست جاهزًا لإعطاء الملاحظة بعد.",
          en: "If you can't write the specific behavior in one sentence, you're not ready to give the feedback yet.",
        },
      },
      {
        kind: "next_mission",
        id: "s.tl.04.next",
        teaser: {
          ar: "أتقنت إعطاء الملاحظة. لكن ماذا يحدث حين يكون دورك أن تتلقاها أنت؟ الوحدة القادمة: كيف تسمع الملاحظة دون أن تبرر أو تدافع.",
          en: "You've mastered giving feedback. But what happens when it's your turn to receive it? Next unit: hearing feedback without justifying or defending.",
        },
      },
    ],
    activities: [
      {
        id: "act.tl.04.1",
        kind: "multiple_choice",
        skillId: "skill.feedback",
        stage: 2,
        context: {
          ar: [
            "قرأت مذكرة أعدها متدرب لعميل، شركة الفجر للاستيراد، وفيها استشهادات قانونية غير دقيقة في ثلاثة مواضع.",
          ],
          en: [
            "You read a memo a trainee prepared for a client, Al-Fajr Import Co., with inaccurate legal citations in three places.",
          ],
        },
        prompt: {
          ar: "أي ملاحظة الأكثر فائدة له؟",
          en: "Which feedback helps him most?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«المذكرة فيها أخطاء، راجعها مرة أخرى بتركيز أكبر.»",
              en: "\"The memo has mistakes, review it again more carefully.\"",
            },
            rationale: {
              ar: "لا يحدد أين الخطأ ولا ما يجب فعله؛ «تركيز أكبر» ليس خطوة عملية.",
              en: "Doesn't identify where the mistake is or what to do; \"more carefully\" isn't a practical step.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«هناك ثلاثة استشهادات غير دقيقة، منها المادة المذكورة في الصفحة الثانية. راجع كل استشهاد مقابل النص الأصلي قبل التسليم القادم.»",
              en: "\"There are three inaccurate citations, including the article cited on page two. Verify every citation against the source text before your next submission.\"",
            },
            correct: true,
            rationale: {
              ar: "يحدد السلوك بدقة، يشير لموقعه، ويقترح إجراءً محددًا قابلًا للتطبيق فورًا.",
              en: "Precisely identifies the behavior, points to its location, and proposes a specific, immediately applicable step.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«أنت لا تولي التفاصيل اهتمامًا كافيًا بشكل عام.»",
              en: "\"You just don't pay enough attention to detail in general.\"",
            },
            rationale: {
              ar: "حكم على الشخص لا على الفعل، بلا سلوك محدد يمكن تصحيحه في المرة القادمة.",
              en: "A judgment on the person, not the act, with no specific behavior he can correct next time.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "تصحح الاستشهادات بنفسك دون إخباره بالمشكلة.",
              en: "Fix the citations yourself without telling him about the problem.",
            },
            rationale: {
              ar: "يحل المشكلة الآنية لكن يضيع فرصة تعليمية؛ الخطأ سيتكرر دون معرفة سببه.",
              en: "Solves the immediate issue but wastes a teaching moment; the mistake will recur since he never learns its cause.",
            },
          },
        ],
      },
      {
        id: "act.tl.04.2",
        kind: "categorization",
        skillId: "skill.feedback",
        stage: 2,
        prompt: {
          ar: "صنّف كل عبارة: هل تصف سلوكًا قابلًا للتغيير، أم تحكم على الشخص نفسه؟",
          en: "Sort each statement: does it describe a changeable behavior, or judge the person?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «سلوك قابل للتغيير» / «حكم على الشخص» أسفل كل عبارة بدل السحب.",
          en: "Choose \"Changeable behavior\" / \"Judgment on the person\" from buttons under each item instead of dragging.",
        },
        buckets: [
          { id: "behavior", label: { ar: "سلوك قابل للتغيير", en: "Changeable behavior" } },
          { id: "person", label: { ar: "حكم على الشخص", en: "Judgment on the person" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "«أرسلت الرد للعميل قبل مراجعته معي رغم اتفاقنا المسبق.»",
              en: "\"You sent the client the reply before reviewing it with me, despite our prior agreement.\"",
            },
            bucketId: "behavior",
            rationale: {
              ar: "فعل محدد وقع في لحظة معينة، يمكن للشخص تجنبه بوضوح في المرة القادمة.",
              en: "A specific act that happened at a given moment, which the person can clearly avoid next time.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "«أنت متسرع دائمًا في كل شيء تفعله.»",
              en: "\"You're always careless in everything you do.\"",
            },
            bucketId: "person",
            rationale: {
              ar: "تعميم على شخصية الفرد بأكملها، لا على فعل محدد يمكن تصحيحه.",
              en: "A generalisation about the person's whole character, not a specific act that can be corrected.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "«لم تذكر تاريخ الجلسة في الرسالة، فاضطر العميل للاتصال ليسأل.»",
              en: "\"You left the hearing date out of the message, so the client had to call to ask.\"",
            },
            bucketId: "behavior",
            rationale: {
              ar: "فعل محدد بأثر واضح، يمكن إضافته بسهولة في المرة القادمة.",
              en: "A specific act with a clear effect, easily added next time.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "«أنت لا تهتم فعلاً بمصلحة العميل.»",
              en: "\"You just don't really care about the client's interest.\"",
            },
            bucketId: "person",
            rationale: {
              ar: "حكم على النية الداخلية للشخص، بلا سلوك محدد يفسر الحكم أو يمكن تغييره.",
              en: "A judgment on the person's inner intent, with no specific behavior explaining or fixable.",
            },
          },
        ],
      },
      {
        id: "act.tl.04.3",
        kind: "ordering",
        skillId: "skill.feedback",
        stage: 2,
        prompt: {
          ar: "رتّب أجزاء الملاحظة البناءة بالترتيب الصحيح.",
          en: "Order the parts of constructive feedback correctly.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب من قائمة منسدلة بجانب كل جزء بدل السحب.",
          en: "Pick the order number from a dropdown beside each part instead of dragging.",
        },
        hint: {
          ar: "ابدأ بما حدث فعلاً، وانتهِ بما يجب فعله مختلفًا.",
          en: "Start with what actually happened, end with what to do differently.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "صف السلوك المحدد الذي وقع، بلا حكم على النية.",
              en: "Describe the specific behavior that occurred, with no judgment of intent.",
            },
            rationale: {
              ar: "نقطة البداية؛ سلوك محدد لا انطباع عام هو أساس ملاحظة يمكن الاستفادة منها.",
              en: "The starting point; a specific behavior, not a general impression, is the basis of usable feedback.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "اربط السلوك بأثره الفعلي على العمل أو العميل أو الفريق.",
              en: "Connect the behavior to its real effect on the work, client, or team.",
            },
            rationale: {
              ar: "الأثر يوضح لماذا يهم هذا السلوك، لا مجرد وصفه دون سياق.",
              en: "The effect clarifies why this behavior matters, not just describing it without context.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "اقترح تغييرًا محددًا قابلًا للتطبيق في المرة القادمة.",
              en: "Propose a specific, applicable change for next time.",
            },
            rationale: {
              ar: "الخطوة الأخيرة؛ تحوّل الملاحظة من نقد إلى أداة عملية يستخدمها المتلقي فعلاً.",
              en: "The last step; it turns feedback from criticism into a practical tool the recipient can actually use.",
            },
          },
        ],
      },
      {
        id: "act.tl.04.4",
        kind: "short_written",
        skillId: "skill.feedback",
        secondarySkillIds: ["skill.leadership-communication"],
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.leadership-written.v1",
        weight: 2,
        minChars: 180,
        context: {
          ar: [
            "زميلة في فريقك قدمت عرضًا لعميل، مجموعة الساحل العقارية، وتحدثت طوال العرض دون ترك وقت لأسئلة العميل، فبدا العميل غير راضٍ في نهاية الاجتماع.",
          ],
          en: [
            "A colleague on your team gave a client presentation for Al-Sahel Real Estate Group, and talked through the entire session without leaving room for client questions, so the client seemed unsatisfied by the end.",
          ],
        },
        prompt: {
          ar: "اكتب ملاحظة (٥٠-٨٠ كلمة) تتبع السلوك، الأثر، والتغيير.",
          en: "Write feedback (50-80 words) following behavior, effect, change.",
        },
        modelAnswer: {
          ar: [
            "«لاحظت أنك تحدثت طوال الاجتماع دون توقف لسؤال العميل عن رأيه.»",
            "«بسبب ذلك، غادر العميل دون أن يطرح أسئلته الحقيقية، وبدا غير مرتاح في النهاية.»",
            "«في المرة القادمة، خطط لثلاث وقفات قصيرة تسأل فيها العميل مباشرة إن كان لديه استفسار.»",
          ],
          en: [
            "\"I noticed you talked through the whole meeting without pausing to ask the client for his view.\"",
            "\"Because of that, the client left without raising his real questions, and seemed uncomfortable by the end.\"",
            "\"Next time, plan three short pauses where you directly ask if he has any questions.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«العرض لم يكن جيدًا، أنت لا تحسنين قراءة ردود فعل العملاء.»"],
            en: ["\"The presentation wasn't good, you're just not good at reading client reactions.\""],
          },
          whatIsWrong: {
            ar: "حكم على قدرتها العامة لا على سلوك محدد، ولا يقترح أي تغيير عملي للمرة القادمة.",
            en: "Judges her general ability instead of a specific behavior, and proposes no practical change for next time.",
          },
        },
      },
      {
        id: "act.tl.04.5",
        kind: "reflection",
        skillId: "skill.feedback",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع ملاحظة أعطيتها فعادت المشكلة نفسها لاحقًا. ما الذي كان ناقصًا في طريقتك؟",
          en: "Recall feedback you gave that the same problem later repeated. What was missing from how you gave it?",
        },
        followUp: {
          ar: "لو استخدمت السلوك والأثر والتغيير، كيف كانت الملاحظة لتختلف؟",
          en: "Had you used behavior, effect, and change, how would the feedback have differed?",
        },
      },
    ],
    summaryCard: {
      id: "card.tl.04",
      title: {
        ar: "السلوك، الأثر، التغيير",
        en: "Behavior, Effect, Change",
      },
      whatYouLearned: {
        ar: [
          "ملاحظة عامة مثل «هذا يحتاج تحسينًا» لا تعلّم أحدًا شيئًا محددًا.",
          "ملاحظة فعالة تصف سلوكًا محددًا، تربطه بأثره الفعلي، وتقترح تغييرًا واضحًا.",
          "وصف الفعل لا الشخص هو ما يفرّق بين ملاحظة بناءة وهجوم شخصي.",
        ],
        en: [
          "General feedback like \"this needs work\" teaches no one anything specific.",
          "Effective feedback describes a specific behavior, connects it to its real effect, and proposes a clear change.",
          "Describing the act, not the person, is what separates constructive feedback from a personal attack.",
        ],
      },
      framework: {
        name: {
          ar: "الملاحظة الفعالة: السلوك · الأثر · التغيير",
          en: "Effective Feedback: Behavior · Effect · Change",
        },
        steps: [
          { ar: "صف السلوك المحدد بلا حكم على النية.", en: "Describe the specific behavior with no judgment of intent." },
          { ar: "اربطه بأثره الفعلي على العمل أو العميل.", en: "Connect it to its real effect on the work or client." },
          { ar: "اقترح تغييرًا محددًا للمرة القادمة.", en: "Propose a specific change for next time." },
        ],
      },
      rememberThis: {
        ar: "«يحتاج تحسينًا» جملة تشعر بالإحباط دون أن تعلّم؛ السلوك والأثر والتغيير هو ما يغيّر الأداء فعلاً.",
        en: "\"Needs work\" is a sentence that frustrates without teaching; behavior, effect, and change is what actually changes performance.",
      },
      useItTomorrow: {
        ar: "المرة القادمة التي تريد إعطاء ملاحظة، اكتبها أولاً بثلاث جمل قبل أن تقولها.",
        en: "Next time you want to give feedback, write it in three sentences first, before you say it.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.smarter-collaboration", "src.lawyers-ceo"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 05 — Receiving Feedback Without Getting Defensive
  // =========================================================================
  {
    id: "unit.tl.05",
    chapterId: "ch.tl.feedback-that-lands",
    order: 5,
    title: {
      ar: "تلقّي الملاحظة دون دفاع",
      en: "Receiving Feedback Without Getting Defensive",
    },
    subtitle: {
      ar: "الرغبة الأولى عند النقد هي التبرير؛ المهارة الحقيقية أن تسمع ما هو مفيد قبل أن تتكلم",
      en: "The first instinct at criticism is to justify; the real skill is hearing what's useful before you speak.",
    },
    primarySkillId: "skill.feedback",
    skillIds: ["skill.feedback", "skill.leadership-communication"],
    stage: 3,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.tl.05.hook",
        text: {
          ar: "شريكك أخبرك أن مذكرتك ضعيفة البنية. أول جملة خرجت منك: «لكن كان الوقت ضيقًا جدًا.» ماذا خسرت في تلك اللحظة؟",
          en: "Your partner told you your memo's structure is weak. The first sentence out of you: \"But the timeline was so tight.\" What did you lose in that moment?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.tl.05.why",
        text: {
          ar: "من يبرر قبل أن يفهم الملاحظة يفوّت المحتوى المفيد فيها، ويُعرف بأنه لا يتقبل النقد — سمعة يصعب تغييرها لاحقًا.",
          en: "Whoever justifies before understanding the feedback misses whatever's useful in it, and gets known as someone who can't take criticism — a reputation that's hard to shake later.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.tl.05.goals",
        goals: {
          ar: [
            "أن تفصل بين رغبة التبرير الفورية وسماع الملاحظة فعليًا.",
            "أن تستخرج النقطة المفيدة حتى من ملاحظة قيلت بطريقة قاسية أو غير دقيقة.",
            "أن تستجيب بجملة تُظهر أنك سمعت، دون أن تعني الموافقة الكاملة على كل كلمة.",
          ],
          en: [
            "Separate the instinct to justify from actually hearing the feedback.",
            "Extract the useful point even from feedback delivered harshly or imprecisely.",
            "Respond with a sentence that shows you heard, without meaning full agreement with every word.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.tl.05.lesson",
        title: {
          ar: "التبرير يقفل الباب فورًا",
          en: "Justifying closes the door instantly",
        },
        body: {
          ar: [
            "الغريزة الأولى عند سماع نقد هي التبرير: «لكن الوقت ضيق»، «لكن العميل غيّر رأيه». هذا رد فعل دفاعي، لا استماع فعلي.",
            "التبرير الفوري يفعل شيئين: يمنعك من فهم النقطة المفيدة كاملة، ويرسل إشارة لمن يعطي الملاحظة بأنه لا فائدة من إخبارك بشيء لاحقًا.",
            "حتى الملاحظة المقدَّمة بطريقة قاسية أو غير دقيقة تحمل غالبًا نقطة حقيقية بداخلها؛ مهمتك فصل الأسلوب عن المحتوى.",
            "الخطوة الأولى العملية: استمع حتى النهاية دون مقاطعة، حتى لو شعرت برغبة قوية بالرد فورًا.",
            "الخطوة الثانية: اسأل سؤال توضيح واحد إن احتجت، لا لتبرر بل لتفهم بدقة أكبر. ثم رد بجملة تُظهر أنك سمعت: «أفهم النقطة، سأنتبه لهذا في المرة القادمة» — حتى لو لم توافق على كل التفاصيل.",
          ],
          en: [
            "The first instinct on hearing criticism is to justify: \"but the timeline was tight,\" \"but the client changed his mind.\" This is a defensive reflex, not real listening.",
            "Instant justification does two things: it stops you from fully understanding the useful point, and it signals to whoever gave the feedback that telling you anything later is pointless.",
            "Even feedback delivered harshly or imprecisely usually carries a real point inside it; your job is separating the delivery from the content.",
            "First practical step: listen to the end without interrupting, even if you strongly feel the urge to respond immediately.",
            "Second step: ask one clarifying question if needed, not to justify but to understand more precisely. Then respond with a sentence showing you heard: \"I get the point, I'll watch for this next time\" — even without agreeing on every detail.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.tl.05.visual",
        title: {
          ar: "تبرير مقابل استماع فعلي",
          en: "Justifying versus real listening",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "التبرير الفوري", en: "Instant justification" },
            detail: {
              ar: "يقطع الملاحظة قبل اكتمالها، ويوقف من يعطيها عن المحاولة لاحقًا.",
              en: "Cuts feedback off before it's complete, and stops the giver from trying again later.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الاستماع الفعلي", en: "Real listening" },
            detail: {
              ar: "يسمح للنقطة المفيدة بالوصول كاملة، حتى إن قيلت بأسلوب قاسٍ.",
              en: "Lets the useful point come through fully, even if delivered harshly.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.tl.05.worked",
        strong: {
          label: {
            ar: "محامٍ يستمع قبل أن يرد",
            en: "A lawyer who listens before responding",
          },
          text: {
            ar: [
              "شريكه: «مذكرتك ضعيفة البنية، القاضي سيتوه في منتصفها.»",
              "«أفهم أن البنية كانت المشكلة. هل تقصد ترتيب الحجج، أم غياب فقرة تلخيصية في البداية؟»",
              "بعد التوضيح: «سأعيد كتابة الفقرة الافتتاحية الليلة وأرسلها لك غدًا صباحًا.»",
            ],
            en: [
              "His partner: \"Your memo's structure is weak, the judge will get lost halfway through.\"",
              "\"I get that structure was the issue. Do you mean argument order, or the missing opening summary?\"",
              "After clarifying: \"I'll rewrite the opening paragraph tonight and send it to you tomorrow morning.\"",
            ],
          },
          why: {
            ar: "استمع كاملاً، سأل للتوضيح لا للتبرير، ثم التزم بتغيير محدد — دون كلمة دفاع واحدة.",
            en: "He listened fully, asked to clarify rather than justify, then committed to a specific change — without a single defensive word.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يبرر فورًا",
            en: "A lawyer who justifies instantly",
          },
          text: {
            ar: [
              "«لكن الوقت كان ضيقًا جدًا، ولم أحصل على كل المستندات إلا متأخرًا.»",
              "«العميل نفسه غيّر رأيه في اللحظة الأخيرة، هذا ليس خطئي بالكامل.»",
            ],
            en: [
              "\"But the timeline was so tight, and I only got all the documents late.\"",
              "\"The client himself changed his mind at the last minute, this isn't entirely my fault.\"",
            ],
          },
          why: {
            ar: "لم يسمع النقطة الفعلية عن البنية، ورسم صورة أنه يرفض أي نقد — فيتوقف شريكه عن إعطائه ملاحظات صريحة لاحقًا.",
            en: "He never heard the actual point about structure, and painted himself as rejecting any criticism — so his partner stops giving him honest feedback later.",
          },
        },
      },
      { kind: "activity", id: "s.tl.05.a1", activityId: "act.tl.05.1", mode: "quick" },
      { kind: "activity", id: "s.tl.05.a2", activityId: "act.tl.05.2", mode: "guided" },
      { kind: "activity", id: "s.tl.05.a3", activityId: "act.tl.05.3", mode: "guided" },
      { kind: "activity", id: "s.tl.05.a4", activityId: "act.tl.05.4", mode: "independent" },
      { kind: "activity", id: "s.tl.05.a5", activityId: "act.tl.05.5", mode: "independent" },
      { kind: "summary", id: "s.tl.05.summary", summaryCardId: "card.tl.05" },
      {
        kind: "apply_tomorrow",
        id: "s.tl.05.apply",
        task: {
          ar: "المرة القادمة التي تتلقى فيها نقدًا، عد بصمت حتى ثلاثة قبل أن تجيب بأي كلمة.",
          en: "Next time you receive criticism, silently count to three before responding with any word.",
        },
        detail: {
          ar: "إن كانت أول كلمة ستقولها «لكن»، توقف واسأل سؤال توضيح بدلاً منها.",
          en: "If your first word would be \"but,\" stop and ask a clarifying question instead.",
        },
      },
      {
        kind: "next_mission",
        id: "s.tl.05.next",
        teaser: {
          ar: "أتقنت إعطاء الملاحظة وتلقّيها. الوحدة القادمة: كيف تدير هذه المهارات في محادثة صعبة فعلية مع أحد أفراد فريقك.",
          en: "You've mastered giving and receiving feedback. Next unit: putting these skills to work in an actual difficult conversation with someone on your team.",
        },
      },
    ],
    activities: [
      {
        id: "act.tl.05.1",
        kind: "best_response",
        skillId: "skill.feedback",
        stage: 3,
        context: {
          ar: [
            "قالت لك مديرتك في اجتماع الفريق: «ردودك على العملاء طويلة جدًا، والعميل يفقد الصبر قبل أن يصل للنقطة الأساسية.»",
          ],
          en: [
            "Your manager told you in a team meeting: \"Your client replies are too long, and the client loses patience before reaching the main point.\"",
          ],
        },
        prompt: {
          ar: "ما أفضل رد أول؟",
          en: "What's the best first response?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«لكن أحاول أن أكون شاملاً حتى لا يفوتني شيء مهم.»",
              en: "\"But I try to be thorough so I don't miss anything important.\"",
            },
            rationale: {
              ar: "تبرير فوري يقفل الباب أمام فهم النقطة، ويظهر أمام الفريق كرفض للملاحظة.",
              en: "Instant justification closes the door on understanding the point, and looks like rejecting the feedback in front of the team.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«أفهم النقطة. هل تقصدين البداية تحديدًا، أم الرسالة كلها؟»",
              en: "\"I get the point. Do you mean the opening specifically, or the whole message?\"",
            },
            correct: true,
            rationale: {
              ar: "يظهر أنه سمع، ويسأل سؤال توضيح لا تبرير، مما يمنحه فهمًا أدق للتغيير المطلوب.",
              en: "Shows he heard, and asks a clarifying rather than justifying question, giving him a more precise grasp of the required change.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "يصمت تمامًا دون أي رد، شاعرًا بالإحراج أمام الفريق.",
              en: "Stays completely silent with no response, feeling embarrassed in front of the team.",
            },
            rationale: {
              ar: "الصمت الكامل لا يوضح إن كان سمع النقطة أو ينوي تغيير شيء، فيترك الملاحظة معلقة بلا أثر.",
              en: "Total silence doesn't clarify whether he heard the point or plans to change anything, leaving the feedback hanging with no effect.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«العميل نفسه يسأل أسئلة كثيرة، فالردود الطويلة ضرورية.»",
              en: "\"The client himself asks a lot of questions, so long replies are necessary.\"",
            },
            rationale: {
              ar: "دفاع فوري ينقل المسؤولية للعميل بدل الاستماع للملاحظة عن أسلوبه هو.",
              en: "Instant defensiveness shifts responsibility to the client instead of listening to the feedback about his own style.",
            },
          },
        ],
      },
      {
        id: "act.tl.05.2",
        kind: "categorization",
        skillId: "skill.feedback",
        stage: 3,
        prompt: {
          ar: "صنّف كل رد على النقد: هل هو استماع فعلي، أم تبرير دفاعي؟",
          en: "Sort each response to criticism: real listening, or defensive justification?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «استماع فعلي» / «تبرير دفاعي» أسفل كل رد بدل السحب.",
          en: "Choose \"Real listening\" / \"Defensive justification\" from buttons under each response instead of dragging.",
        },
        buckets: [
          { id: "listen", label: { ar: "استماع فعلي", en: "Real listening" } },
          { id: "defend", label: { ar: "تبرير دفاعي", en: "Defensive justification" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "«لكن لم يكن لدي وقت كافٍ لمراجعة كل التفاصيل.»",
              en: "\"But I didn't have enough time to review every detail.\"",
            },
            bucketId: "defend",
            rationale: {
              ar: "يشرح سببًا خارجيًا فورًا قبل الاعتراف بالنقطة نفسها؛ رد فعل دفاعي كلاسيكي.",
              en: "Explains an external cause immediately, before acknowledging the point itself; a classic defensive reflex.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "«أفهم النقطة. سأنتبه لهذا في الملف القادم.»",
              en: "\"I get the point. I'll watch for this in the next file.\"",
            },
            bucketId: "listen",
            rationale: {
              ar: "يؤكد أنه سمع، ويلتزم بتغيير محدد دون إنكار أو تبرير.",
              en: "Confirms he heard, and commits to a specific change with no denial or justification.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "«هذا غير منصف، عملت بجد شديد على هذا الملف.»",
              en: "\"That's not fair, I worked really hard on this file.\"",
            },
            bucketId: "defend",
            rationale: {
              ar: "يحول الملاحظة إلى قضية إنصاف شخصي، بدل التعامل مع محتواها الفعلي.",
              en: "Turns the feedback into a matter of personal fairness, instead of engaging with its actual content.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "«هل يمكن أن توضح لي مثالاً محددًا حتى أفهم النقطة أكثر؟»",
              en: "\"Can you give me a specific example so I understand the point better?\"",
            },
            bucketId: "listen",
            rationale: {
              ar: "سؤال يهدف للفهم الأعمق، لا لإثبات أن الملاحظة كانت خاطئة.",
              en: "A question aimed at deeper understanding, not at proving the feedback was wrong.",
            },
          },
        ],
      },
      {
        id: "act.tl.05.3",
        kind: "branching_decision",
        skillId: "skill.feedback",
        secondarySkillIds: ["skill.leadership-communication"],
        stage: 3,
        weight: 2,
        context: {
          ar: [
            "شريكك أخبرك أمام العميل، مصنع الرحاب للألبان، أن العرض التقديمي كان مشتتًا وغير منظم.",
            "شعرت بالإحراج الفوري أمام العميل.",
          ],
          en: [
            "Your partner told you in front of the client, Al-Rihab Dairy, that the presentation was scattered and disorganised.",
            "You felt instant embarrassment in front of the client.",
          ],
        },
        prompt: {
          ar: "اختر ردّك في كل لحظة، وراقب أثره.",
          en: "Choose your response at each point, and watch its effect.",
        },
        accessibleAlternative: {
          ar: "كل خيار متاح كنص كامل بلا حاجة لسحب أو نقر متعدد؛ اختر الرد المناسب من القائمة في كل خطوة.",
          en: "Every option is available as full text with no drag or multi-tap needed; pick the appropriate reply from the list at each step.",
        },
        startNodeId: "n1",
        nodes: [
          {
            id: "n1",
            text: {
              ar: "الشريك يكرر أمام العميل: «العرض كان مشتتًا.» عليك الرد الآن.",
              en: "The partner repeats in front of the client: \"The presentation was scattered.\" You need to respond now.",
            },
            choices: [
              {
                id: "n1c1",
                label: {
                  ar: "«شكرًا على الملاحظة، سأنظم النقاط بترتيب أوضح في العرض القادم.»",
                  en: "\"Thanks for the note, I'll organise the points more clearly in the next presentation.\"",
                },
                nextNodeId: "n2",
                quality: "strong",
                rationale: {
                  ar: "يظهر استماعًا فعليًا وتحملًا للمسؤولية أمام العميل، دون أن يفتح نقاشًا دفاعيًا في مكان غير مناسب.",
                  en: "Shows real listening and ownership in front of the client, without opening a defensive debate in the wrong setting.",
                },
              },
              {
                id: "n1c2",
                label: {
                  ar: "«لم يكن لدي وقت كافٍ للتحضير، لهذا بدا كذلك.»",
                  en: "\"I didn't have enough time to prepare, that's why it seemed that way.\"",
                },
                nextNodeId: "n2",
                quality: "weak",
                rationale: {
                  ar: "تبرير أمام العميل نفسه يزيد الإحراج ويكشف خلافًا داخليًا أمام طرف خارجي.",
                  en: "Justifying in front of the client himself worsens the embarrassment and exposes internal disagreement to an outside party.",
                },
              },
              {
                id: "n1c3",
                label: {
                  ar: "يصمت تمامًا ولا يعلق بأي شيء أمام العميل.",
                  en: "Stays completely silent, saying nothing in front of the client.",
                },
                nextNodeId: "n2",
                quality: "acceptable",
                rationale: {
                  ar: "يتجنب التصعيد أمام العميل، لكنه يفوّت فرصة إظهار أنه يتحمل الملاحظة بثقة.",
                  en: "Avoids escalating in front of the client, but misses the chance to show he takes the feedback in stride.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "بعد انتهاء الاجتماع، أنت وشريكك بمفردكما.",
              en: "After the meeting ends, you and your partner are alone.",
            },
            choices: [
              {
                id: "n2c1",
                label: {
                  ar: "«أقدّر ملاحظتك. هل تفضل أن نناقش هذا النوع من الملاحظات لاحقًا بدل أمام العميل؟»",
                  en: "\"I appreciate the note. Would you prefer we discuss this kind of feedback later, not in front of the client?\"",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "يفصل بين تقبّل الملاحظة نفسها وطلب تحسين توقيت إيصالها مستقبلاً، بلا دفاع أو لوم.",
                  en: "Separates accepting the feedback itself from requesting better future timing, with no defensiveness or blame.",
                },
              },
              {
                id: "n2c2",
                label: {
                  ar: "«لماذا قلت هذا أمام العميل؟ كان يمكن أن تخبرني لاحقًا.»",
                  en: "\"Why did you say that in front of the client? You could have told me later.\"",
                },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "يركز على الغضب من التوقيت فقط، دون أي إشارة إلى الاستفادة من محتوى الملاحظة نفسها.",
                  en: "Focuses only on anger about timing, with no sign of taking the feedback's actual content on board.",
                },
              },
              {
                id: "n2c3",
                label: {
                  ar: "لا يذكر الموضوع إطلاقًا ويتجنب الشريك بقية اليوم.",
                  en: "Never mentions it at all and avoids the partner for the rest of the day.",
                },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "تجنب كامل للموضوع يترك التوتر بلا حل، ولا يوصل أي رسالة عن توقيت الملاحظات المستقبلية.",
                  en: "Fully avoiding the topic leaves the tension unresolved, and sends no message about future feedback timing.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.tl.05.4",
        kind: "short_written",
        skillId: "skill.feedback",
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.leadership-written.v1",
        weight: 2,
        minChars: 180,
        context: {
          ar: [
            "شريك أخبرك: «تسليماتك للعملاء تتأخر باستمرار، وهذا يزعج المكتب.» شعرت أن هذا مبالغ فيه، فقد تأخرت مرتين فقط هذا الشهر.",
          ],
          en: [
            "A partner told you: \"Your client deliverables are constantly late, and it's bothering the firm.\" You feel this is exaggerated — you've only been late twice this month.",
          ],
        },
        prompt: {
          ar: "اكتب ردًا (٥٠-٨٠ كلمة) يظهر استماعًا فعليًا، مع طلب توضيح دون تبرير أو إنكار كامل.",
          en: "Write a reply (50-80 words) showing real listening, requesting clarification without justifying or fully denying.",
        },
        modelAnswer: {
          ar: [
            "«أقدّر أنك أثرت هذا. أعرف أنني تأخرت مرتين هذا الشهر، وأريد أن أفهم إن كان هناك أمثلة أخرى فاتتني حتى أعالجها كلها.»",
            "«سأراجع جدولي هذا الأسبوع لأتأكد أنني لا أكرر هذا مع أي عميل آخر.»",
          ],
          en: [
            "\"I appreciate you raising this. I know I was late twice this month, and I'd like to understand if there are other examples I missed, so I can address all of them.\"",
            "\"I'll review my schedule this week to make sure I don't repeat this with any other client.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«هذا غير دقيق، تأخرت مرة واحدة فقط طوال الشهر.»"],
            en: ["\"That's not accurate, I was only late once the whole month.\""],
          },
          whatIsWrong: {
            ar: "يفتح بالتصحيح والإنكار مباشرة دون أي إقرار، فيبدو رفضًا كاملاً للملاحظة لا استماعًا لها.",
            en: "Opens with correction and denial straight away with no acknowledgment, reading as a full rejection of the feedback rather than hearing it.",
          },
        },
      },
      {
        id: "act.tl.05.5",
        kind: "reflection",
        skillId: "skill.feedback",
        stage: 3,
        grading: "self_report",
        prompt: {
          ar: "استرجع نقدًا تلقيته وبررت فورًا بدل الاستماع كاملاً. ما النقطة المفيدة التي ربما فاتتك؟",
          en: "Recall criticism you received and instantly justified instead of listening fully. What useful point might you have missed?",
        },
        followUp: {
          ar: "لو أعدت اللحظة نفسها اليوم، ماذا كنت لتقول بدلاً من التبرير؟",
          en: "If you replayed that moment today, what would you say instead of justifying?",
        },
      },
    ],
    summaryCard: {
      id: "card.tl.05",
      title: {
        ar: "استمع أولاً، ثم رد",
        en: "Listen First, Then Respond",
      },
      whatYouLearned: {
        ar: [
          "التبرير الفوري يقفل الباب أمام فهم النقطة المفيدة، ويوقف من يعطي الملاحظة عن المحاولة لاحقًا.",
          "حتى الملاحظة القاسية تحمل غالبًا نقطة حقيقية؛ مهمتك فصل الأسلوب عن المحتوى.",
          "الاستجابة الجيدة تظهر أنك سمعت والتزمت بتغيير، دون موافقة كاملة إلزامية على كل كلمة.",
        ],
        en: [
          "Instant justification closes the door on understanding the useful point, and stops the giver from trying again later.",
          "Even harsh feedback usually carries a real point; your job is separating delivery from content.",
          "A good response shows you heard and committed to a change, without mandatory full agreement on every word.",
        ],
      },
      framework: {
        name: {
          ar: "الاستماع الفعلي: اسمع · وضّح · التزم",
          en: "Real Listening: Hear · Clarify · Commit",
        },
        steps: [
          { ar: "استمع حتى النهاية دون مقاطعة.", en: "Listen to the end without interrupting." },
          { ar: "اسأل سؤال توضيح واحد إن احتجت، لا للتبرير.", en: "Ask one clarifying question if needed, not to justify." },
          { ar: "التزم بجملة تُظهر أنك سمعت وستغيّر شيئًا محددًا.", en: "Commit with a sentence showing you heard and will change something specific." },
        ],
      },
      rememberThis: {
        ar: "أول كلمة بعد النقد لا يجب أن تكون «لكن»؛ التبرير الفوري يفوّت النقطة ويوقف الملاحظات المستقبلية.",
        en: "The first word after criticism shouldn't be \"but\"; instant justification misses the point and stops future feedback.",
      },
      useItTomorrow: {
        ar: "المرة القادمة التي تتلقى فيها نقدًا، عد بصمت حتى ثلاثة قبل أن تجيب بأي كلمة.",
        en: "Next time you receive criticism, silently count to three before responding with any word.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.lawyers-ceo", "src.introverted-leader"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
