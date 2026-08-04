import type { UnitDef } from "../types";

/**
 * Negotiation & Influence — Chapter 1 (`ch.ni.preparing`) units 1-3 and
 * Chapter 2 (`ch.ni.running-the-session`) units 4-5.
 *
 * Skills, rubrics and scenarios referenced here are authored elsewhere in the
 * bundle: `content/framework/skills-negotiation-influence.ts`,
 * `content/framework/rubrics-negotiation-influence.ts`,
 * `content/scenarios-negotiation-influence.ts`, and `skill.negotiation` in
 * `content/framework/skills.ts`.
 */
export const NI_UNITS_01_05: UnitDef[] = [
  // =========================================================================
  // UNIT 01 — Preparing to Negotiate: Goal, Floor and Alternative
  // =========================================================================
  {
    id: "unit.ni.01",
    chapterId: "ch.ni.preparing",
    order: 1,
    title: {
      ar: "الاستعداد للتفاوض: الهدف والحدّ الأدنى والبديل",
      en: "Preparing to Negotiate: Goal, Floor and Alternative",
    },
    subtitle: {
      ar: "من يدخل الجلسة بلا حدّ أدنى مكتوب يكتشفه في اللحظة التي يوقّع فيها",
      en: "A lawyer who enters without a written floor discovers it the moment he signs.",
    },
    primarySkillId: "skill.negotiation",
    skillIds: ["skill.negotiation"],
    stage: 1,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.ni.01.hook",
        text: {
          ar: "قبل أن يُطرح أي رقم في الجلسة، ثلاثة أسئلة تحسم نتيجتها بالكامل: ماذا تريد فعلاً؟ ما أدنى ما تقبله؟ وماذا يحدث إن لم تتفقا اليوم؟",
          en: "Before a single figure is raised in the room, three questions decide the whole outcome: what do you actually want, what is the least you will accept, and what happens if you do not agree today?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.ni.01.why",
        text: {
          ar: "من لا يعرف حدّه الأدنى يكتشفه في لحظة الندم على التوقيع. ومن لا يعرف بديله يفاوض وكأن هذا الاتفاق خياره الوحيد، فيقبل أقل مما كان يستحقّه موكّله.",
          en: "A lawyer who does not know his floor discovers it the moment he regrets signing. One who does not know his alternative negotiates as if this deal were his only option — and accepts less than his client was entitled to.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.ni.01.goals",
        goals: {
          ar: [
            "أن تصوغ هدف موكّلك الفعلي من هذا التفاوض بجملة واحدة واضحة.",
            "أن تضع حدًّا أدنى مكتوبًا لا تتنازل دونه إلا بإذن صريح.",
            "أن تحدّد بديلك إن تعذّر الاتفاق، وتستحضره عند الضغط لا بعده.",
          ],
          en: [
            "State your client's real goal for this negotiation in one clear sentence.",
            "Set a written floor you will not concede below without explicit authorization.",
            "Identify your alternative if no deal is reached, and draw on it under pressure, not after it.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.ni.01.lesson",
        title: {
          ar: "ثلاثة أرقام قبل أن تجلس",
          en: "Three numbers before you sit down",
        },
        body: {
          ar: [
            "أكثر المفاوضات تُخسر قبل أن تبدأ، حين يدخل المحامي الجلسة برقم واحد فقط: ما يريده موكّله. رقم واحد لا يكفي أبدًا.",
            "الرقم الثاني هو الحدّ الأدنى: أسوأ نتيجة لا يزال يمكن قبولها. دون هذا الرقم، كل تنازل يبدو معقولًا في لحظته.",
            "الرقم الثالث ليس رقمًا بل بديلًا: ماذا يفعل موكّلك فعلًا إن لم يتفقا اليوم؟ عقار آخر، مقاول آخر، أو رفع دعوى.",
            "البديل هو مصدر قوّتك الحقيقي في الجلسة. من يملك بديلًا جيدًا يتفاوض بثقة؛ من لا يملكه يتفاوض بخوف حتى لو أخفاه جيدًا.",
            "الحدّ الأدنى يُكتب قبل الجلسة لا أثناءها. تحت الضغط يميل العقل إلى تبرير أي تنازل يُنهي التوتر، والورقة المكتوبة مسبقًا تحميك من نفسك.",
            "الهدف والحدّ الأدنى والبديل ليست ثلاثة تمارين منفصلة، بل ورقة واحدة تحملها معك: ماذا أريد، ما أقلّه، وماذا أفعل غير هذا.",
          ],
          en: [
            "Most negotiations are lost before they start, when the lawyer walks in with only one number: what the client wants. One number is never enough.",
            "The second number is the floor: the worst outcome still worth accepting. Without it, every concession feels reasonable in the moment it is offered.",
            "The third is not a number but an alternative: what does your client actually do if no deal is reached today? Another property, another contractor, a lawsuit.",
            "The alternative is your real source of strength in the room. Someone with a good alternative negotiates with confidence; someone without one negotiates afraid, however well he hides it.",
            "The floor is written before the session, not during it. Under pressure the mind tends to justify any concession that ends the tension — a floor written in advance protects you from yourself.",
            "The goal, the floor and the alternative are not three separate exercises but one sheet you carry with you: what I want, the least I will take, and what I do instead.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.ni.01.visual",
        title: {
          ar: "ميزان الاستعداد للتفاوض",
          en: "The negotiation preparation scale",
        },
        variant: "scale",
        items: [
          {
            label: { ar: "الهدف", en: "Goal" },
            detail: {
              ar: "النتيجة التي تخدم مصلحة موكّلك فعلًا، لا مجرد رقم افتتاحي طموح.",
              en: "The outcome that actually serves your client's interest, not merely an ambitious opening figure.",
            },
            tone: "positive",
          },
          {
            label: { ar: "نقطة الافتتاح", en: "Opening anchor" },
            detail: {
              ar: "الرقم الأول الذي تطرحه، وهو أعلى من هدفك بهامش يحتمل التفاوض.",
              en: "The first figure you table — set above your goal by a margin that leaves room to negotiate down.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "الحدّ الأدنى", en: "Floor" },
            detail: {
              ar: "الخط الذي لا تعبره دون إذن صريح؛ تجاوزه دون تفويض خطأ لا يُصحَّح لاحقًا.",
              en: "The line you do not cross without explicit authorization; crossing it unauthorized is a mistake that cannot be undone later.",
            },
            tone: "negative",
          },
          {
            label: { ar: "البديل", en: "Alternative" },
            detail: {
              ar: "ما يفعله موكّلك إن لم يتم الاتفاق اليوم — مصدر قوّتك الفعلي في الجلسة.",
              en: "What your client does if no deal is reached today — your actual source of strength in the room.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.ni.01.worked",
        strong: {
          label: {
            ar: "ورقة تحضير محامية جهّزت الأرقام الثلاثة",
            en: "A prep sheet from a lawyer who set all three numbers",
          },
          text: {
            ar: [
              "«الهدف: تجديد عقد إيجار محل الأزياء بزيادة لا تتجاوز 10% عن الإيجار الحالي 42,000 دينار سنويًا.»",
              "«الحدّ الأدنى: زيادة لا تتجاوز 15%. فوق هذا الرقم أعود إلى الموكّلة قبل أي التزام.»",
              "«البديل: مساحة بديلة في مجمّع قريب متوفرة خلال شهرين، بإيجار أعلى بـ٥٪ فقط من هدفي — بديل جيد يمنحني ثقة في الجلسة.»",
            ],
            en: [
              "\"Goal: renew the boutique's lease at an increase no higher than 10% above the current rent of 42,000 JOD a year.\"",
              "\"Floor: an increase no higher than 15%. Above that I go back to the client before committing to anything.\"",
              "\"Alternative: a space in a nearby mall, available within two months, only 5% above my goal figure — a good alternative that gives me confidence in the room.\"",
            ],
          },
          why: {
            ar: "الأرقام الثلاثة كتبها قبل الجلسة، فلم تعد قرارات تُتّخذ تحت الضغط بل حدودًا تُراقَب. البديل المحدَّد تحديدًا يمنحها لهجة هادئة حتى لو رفض المالك الرقم الأول.",
            en: "She wrote all three numbers before the session, so they became limits to watch rather than decisions made under pressure. A concrete alternative gives her a calm tone even if the landlord rejects the first figure.",
          },
        },
        weak: {
          label: {
            ar: "ورقة تحضير محامٍ حمل رقمًا واحدًا فقط",
            en: "A prep sheet from a lawyer carrying only one number",
          },
          text: {
            ar: [
              "«الهدف: أقنعه ألّا يرفع الإيجار كثيرًا.»",
              "«لم يكتب حدًّا أدنى؛ قال لنفسه: سأقرّر في الجلسة حسب الظرف.»",
              "«لم يفكّر في بديل؛ افترض أن التجديد سيحصل لأن الموكّلة لا تريد الانتقال.»",
            ],
            en: [
              "\"Goal: convince him not to raise the rent too much.\"",
              "\"No floor written down; he told himself he would decide in the room, depending on how it went.\"",
              "\"No alternative considered; he assumed the renewal would happen because the client did not want to move.\"",
            ],
          },
          why: {
            ar: "«ليس كثيرًا» ليس رقمًا يمكن الدفاع عنه أمام مالك مستعد للمساومة. وغياب الحدّ الأدنى يعني أن أي رقم يطرحه المالك سيبدو مقبولًا في لحظته. وغياب البديل يجعله يفاوض من موقع الحاجة، وهذا يُقرأ في نبرته قبل أن يقولها.",
            en: "\"Not too much\" is not a figure that can be defended against a landlord ready to bargain. No floor means any number the landlord names will feel acceptable in the moment. No alternative means he negotiates from need — and that shows in his tone before he ever says a word.",
          },
        },
      },
      { kind: "activity", id: "s.ni.01.a1", activityId: "act.ni.01.1", mode: "quick" },
      { kind: "activity", id: "s.ni.01.a2", activityId: "act.ni.01.2", mode: "guided" },
      { kind: "activity", id: "s.ni.01.a3", activityId: "act.ni.01.3", mode: "guided" },
      { kind: "activity", id: "s.ni.01.a4", activityId: "act.ni.01.4", mode: "independent" },
      { kind: "activity", id: "s.ni.01.a5", activityId: "act.ni.01.5", mode: "independent" },
      { kind: "summary", id: "s.ni.01.summary", summaryCardId: "card.ni.01" },
      {
        kind: "apply_tomorrow",
        id: "s.ni.01.apply",
        task: {
          ar: "قبل جلسة التفاوض القادمة، اكتب على ورقة واحدة ثلاثة أسطر: الهدف، الحدّ الأدنى، والبديل.",
          en: "Before your next negotiation session, write three lines on one sheet: the goal, the floor, and the alternative.",
        },
        detail: {
          ar: "احمل الورقة معك ولا تُخفها؛ إعادة النظر إليها في منتصف الجلسة أفضل بكثير من محاولة تذكّرها تحت الضغط.",
          en: "Bring the sheet with you and do not hide it; glancing back at it mid-session beats trying to recall it under pressure.",
        },
      },
      {
        kind: "next_mission",
        id: "s.ni.01.next",
        teaser: {
          ar: "عرفت أرقامك الثلاثة. لكن الرقم وحده لا يقنع أحدًا. الوحدة القادمة: كيف تبني حجة تجعل الطرف الآخر يرى مصلحته في قبول طلبك.",
          en: "You know your three numbers. But a number alone convinces no one. Next unit: building an argument that lets the other side see their own interest in agreeing to what you ask.",
        },
      },
    ],
    activities: [
      {
        id: "act.ni.01.1",
        kind: "multiple_choice",
        skillId: "skill.negotiation",
        stage: 1,
        context: {
          ar: [
            "تمثّل مؤسسة تجارية تستأجر محلًّا لبيع الأزياء، وعقد الإيجار الحالي 42,000 دينار سنويًا ينتهي خلال شهر.",
            "طلبت الموكّلة تجديد العقد. لم تُحدّد لك سقفًا للزيادة المقبولة، وأمامك يوم واحد قبل جلسة التفاوض مع المالك.",
          ],
          en: [
            "You represent a company leasing a boutique retail space; the current lease at 42,000 JOD a year expires within a month.",
            "The client asked you to renew it. She has not given you a ceiling for an acceptable increase, and you have one day before the session with the landlord.",
          ],
        },
        prompt: {
          ar: "ما أول خطوة يجب أن تتّخذها قبل الجلسة؟",
          en: "What is the first step you should take before the session?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "الاتصال بالمالك اليوم لمعرفة رقمه المطلوب أولًا، ثم التحضير بناءً عليه.",
              en: "Call the landlord today to learn his asking figure first, then prepare based on it.",
            },
            rationale: {
              ar: "تفاوض دون أرقامك الخاصة يجعلك تتفاعل مع رقمه بدل أن تدخل الجلسة بموقف مبني على مصلحة موكّلتك. الرقم الذي يطرحه أولًا سيصبح مرجعك الوحيد.",
              en: "Negotiating without your own numbers first means reacting to his figure instead of entering with a position built on your client's interest. His opening number becomes your only reference point.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "الاتصال بالموكّلة لتحديد أقصى زيادة تقبلها، وسؤالها عمّا تفعله إن لم يتجدّد العقد.",
              en: "Call the client to define the maximum increase she will accept, and ask what she does if the lease is not renewed.",
            },
            correct: true,
            rationale: {
              ar: "هذا يمنحك الحدّ الأدنى والبديل معًا، وكلاهما لا يملكهما إلا الموكّلة. بدونهما تدخل الجلسة بلا حدود واضحة، وأي رقم يطرحه المالك يبدو مقبولًا في لحظته.",
              en: "This gives you the floor and the alternative together, and only the client can supply them. Without both you enter the session with no clear limits, and any figure the landlord names will feel acceptable in the moment.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "البحث عن نص قانوني يحدّ من قدرة المالك على رفع الإيجار.",
              en: "Research a legal provision limiting the landlord's ability to raise the rent.",
            },
            rationale: {
              ar: "قد يفيد كسند لاحقًا، لكنه لا يجيب عن السؤال الأهم: ما الذي تقبله موكّلتك فعلًا. البحث القانوني بلا أرقام تفاوضية يترك الجلسة بلا اتجاه.",
              en: "It might help as support later, but it does not answer the more important question: what your client will actually accept. Legal research without negotiating numbers leaves the session without direction.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "تحضير رقم افتتاحي منخفض للضغط على المالك من اللحظة الأولى.",
              en: "Prepare a low opening figure to pressure the landlord from the first moment.",
            },
            rationale: {
              ar: "رقم افتتاحي بلا هدف ولا حدّ أدنى وراءه هو مجرّد رقم عشوائي. المالك المتمرّس يسأل عن أساسه، فإن لم يكن لديك جواب فقدت المصداقية قبل أن يبدأ التفاوض الفعلي.",
              en: "An opening figure with no goal or floor behind it is just a random number. An experienced landlord will ask for its basis, and if you have no answer you lose credibility before the real negotiation even begins.",
            },
          },
        ],
      },
      {
        id: "act.ni.01.2",
        kind: "ordering",
        skillId: "skill.negotiation",
        stage: 1,
        prompt: {
          ar: "رتّب خطوات التحضير للتفاوض بالترتيب الذي يجعل كل خطوة مبنية على التي قبلها.",
          en: "Put the negotiation-prep steps in the order that lets each one build on the last.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each step instead of dragging.",
        },
        hint: {
          ar: "ابدأ بما يريده موكّلك فعلًا، وانتهِ بما تحمله معك إلى الغرفة.",
          en: "Start with what your client actually wants, and end with what you carry into the room.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "اسأل الموكّل: ما النتيجة التي تخدم مصلحتك فعلًا في هذا التفاوض؟",
              en: "Ask the client: what outcome actually serves your interest in this negotiation?",
            },
            rationale: {
              ar: "قبل أي رقم، يجب تحديد الهدف بجملة واحدة. رقم بلا هدف واضح خلفه سهل التخلي عنه أول ضغط.",
              en: "Before any figure, the goal must be pinned to one sentence. A number with no clear goal behind it is easy to abandon under the first pushback.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "حدّد مع الموكّل الحدّ الأدنى المقبول، ودوّنه كتابة.",
              en: "Agree the acceptable floor with the client, and write it down.",
            },
            rationale: {
              ar: "الحدّ الأدنى يأتي بعد الهدف لأنه مشتقّ منه: أدنى نتيجة لا تزال تخدم المصلحة نفسها ولو جزئيًا.",
              en: "The floor comes after the goal because it is derived from it: the lowest outcome that still serves the same interest, even partially.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "حدّد ما يفعله الموكّل فعلًا إن لم يتم الاتفاق اليوم.",
              en: "Identify what the client actually does if no deal is reached today.",
            },
            rationale: {
              ar: "البديل يُحدَّد بعد أن يتّضح الهدف والحدّ الأدنى، لأن قيمته تُقاس بمقارنته بهما: هل هو أفضل أم أسوأ من عدم الاتفاق؟",
              en: "The alternative is identified once the goal and floor are clear, because its value is measured against them: is it better or worse than no deal?",
            },
          },
          {
            id: "i4",
            label: {
              ar: "اكتب الأرقام الثلاثة على ورقة واحدة واحملها معك إلى الجلسة.",
              en: "Write all three numbers on one sheet and carry it into the session.",
            },
            rationale: {
              ar: "آخر خطوة لأنها تجميع لما سبق. الورقة المكتوبة تحميك من تبرير تنازل غير مقصود تحت ضغط اللحظة.",
              en: "Last, because it gathers everything before it. A written sheet protects you from justifying an unintended concession under the pressure of the moment.",
            },
          },
        ],
      },
      {
        id: "act.ni.01.3",
        kind: "categorization",
        skillId: "skill.negotiation",
        stage: 1,
        prompt: {
          ar: "صنّف كل عبارة تحت الرقم الذي تمثّله في ورقة التحضير.",
          en: "Sort each statement under the number it represents on the prep sheet.",
        },
        hint: {
          ar: "اسأل عن كل عبارة: هل تصف النتيجة المرغوبة، أدنى نتيجة مقبولة، أم ما يحدث دون اتفاق؟",
          en: "Ask of each statement: does it describe the desired outcome, the lowest acceptable outcome, or what happens without a deal?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «الهدف» / «الحدّ الأدنى» / «البديل» أسفل كل عبارة بدل السحب.",
          en: "Choose \"Goal\" / \"Floor\" / \"Alternative\" from buttons under each statement instead of dragging.",
        },
        buckets: [
          { id: "goal", label: { ar: "الهدف", en: "Goal" } },
          { id: "floor", label: { ar: "الحدّ الأدنى", en: "Floor" } },
          { id: "alt", label: { ar: "البديل", en: "Alternative" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "تجديد العقد بزيادة لا تتجاوز 10% عن الإيجار الحالي.",
              en: "Renewing the lease at an increase no higher than 10% of the current rent.",
            },
            bucketId: "goal",
            rationale: {
              ar: "هذه النتيجة التي تخدم مصلحة الموكّلة فعلًا، لا مجرد رقم افتتاحي — لذا فهي الهدف.",
              en: "This is the outcome that actually serves the client's interest, not an opening figure — so it is the goal.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "زيادة تصل إلى 15% كحد أقصى، وفوقها تعود إلى الموكّلة قبل الالتزام.",
              en: "An increase of up to 15% at most, above which she checks with the client before committing.",
            },
            bucketId: "floor",
            rationale: {
              ar: "هذا هو الخط الذي لا يُعبر دون إذن — وهذا بالضبط تعريف الحدّ الأدنى.",
              en: "This is the line not crossed without authorization — exactly the definition of a floor.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "مساحة بديلة في مجمّع قريب متوفرة خلال شهرين بإيجار مقارب.",
              en: "An alternative space in a nearby mall, available within two months, at a comparable rent.",
            },
            bucketId: "alt",
            rationale: {
              ar: "هذا ما تفعله الموكّلة فعليًا إن لم يتم الاتفاق مع المالك الحالي، فهو البديل لا جزءًا من التفاوض نفسه.",
              en: "This is what the client actually does if she does not reach agreement with the current landlord — the alternative, not part of the negotiation itself.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "الوصول إلى تجديد بأفضل شروط ممكنة نظريًا دون أي رقم محدَّد.",
              en: "Reaching a renewal on the best terms theoretically possible, with no specific figure.",
            },
            bucketId: "goal",
            rationale: {
              ar: "هذه صياغة أولية للهدف، لكنها تحتاج ترجمة إلى رقم واحد محدَّد لتصبح قابلة للاستخدام في الجلسة؛ تبقى في خانة الهدف حتى تُدقَّق.",
              en: "This is a first pass at the goal, but it needs translating into one specific figure to be usable in the session; it stays under \"goal\" until refined.",
            },
          },
        ],
      },
      {
        id: "act.ni.01.4",
        kind: "short_written",
        skillId: "skill.negotiation",
        secondarySkillIds: ["skill.staying-within-mandate"],
        stage: 1,
        grading: "ai_rubric",
        rubricId: "rubric.negotiation-written.v1",
        weight: 2,
        minChars: 200,
        context: {
          ar: [
            "الموكّلة تدير محلّ أزياء، والإيجار الحالي 42,000 دينار سنويًا لعقد ينتهي خلال شهر.",
            "أخبرتك أنها تفضّل البقاء في الموقع الحالي، لكنها فحصت مساحة بديلة في مجمّع قريب متوفرة خلال شهرين بإيجار أعلى بنسبة طفيفة.",
            "أمامك جلسة تفاوض مع المالك غدًا.",
          ],
          en: [
            "The client runs a fashion boutique; the current rent is 42,000 JOD a year on a lease expiring within a month.",
            "She told you she prefers to stay in the current location, but has checked an alternative space in a nearby mall, available within two months, at a slightly higher rent.",
            "You have a negotiation session with the landlord tomorrow.",
          ],
        },
        prompt: {
          ar: "اكتب مذكرة تحضير داخلية قصيرة (٥٠–٨٠ كلمة) تحدّد فيها الهدف والحدّ الأدنى والبديل لهذا التفاوض.",
          en: "Write a short internal prep memo (50-80 words) setting out the goal, the floor and the alternative for this negotiation.",
        },
        modelAnswer: {
          ar: [
            "«الهدف: تجديد العقد بزيادة لا تتجاوز 10% (أي حتى 46,200 دينار سنويًا).»",
            "«الحدّ الأدنى: زيادة حتى 15% (48,300 دينار). فوق هذا الرقم لا ألتزم دون العودة إلى الموكّلة.»",
            "«البديل: مساحة المجمّع القريب، متوفرة خلال شهرين بإيجار أعلى بنحو 5% من هدفي — بديل مقبول يمنحني موقفًا مريحًا في الجلسة دون استعجال.»",
          ],
          en: [
            "\"Goal: renew at an increase no higher than 10% (up to 46,200 JOD a year).\"",
            "\"Floor: an increase up to 15% (48,300 JOD). Above that I do not commit without checking back with the client.\"",
            "\"Alternative: the nearby mall space, available within two months at roughly 5% above my goal figure — an acceptable alternative that gives me a comfortable position in the session, with no need to rush.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«الهدف: الحصول على أفضل صفقة ممكنة للموكّلة.»",
              "«سأقيّم الحدّ الأدنى حسب مجريات الجلسة مع المالك.»",
            ],
            en: [
              "\"Goal: get the best possible deal for the client.\"",
              "\"I'll assess the floor depending on how the session with the landlord goes.\"",
            ],
          },
          whatIsWrong: {
            ar: "خطآن محدّدان: «أفضل صفقة ممكنة» ليس هدفًا قابلًا للاستخدام لأنه لا يحدّد رقمًا يمكن الدفاع عنه؛ وتأجيل الحدّ الأدنى إلى داخل الجلسة يعني اتخاذ قرار الحدّ الأدنى تحت الضغط بدل قبله، وهذا بالضبط ما يُنتج تنازلات غير مقصودة.",
            en: "Two named failures: \"best possible deal\" is not a usable goal because it names no defensible figure; and deferring the floor to inside the session means deciding it under pressure instead of before it, which is exactly what produces unintended concessions.",
          },
        },
      },
      {
        id: "act.ni.01.5",
        kind: "reflection",
        skillId: "skill.negotiation",
        stage: 1,
        grading: "self_report",
        prompt: {
          ar: "استرجع تفاوضًا دخلته دون حدّ أدنى مكتوب. في أي لحظة شعرت أنك تقبل أقل مما كان يجب؟",
          en: "Recall a negotiation you entered without a written floor. At what moment did you feel you were accepting less than you should have?",
        },
        followUp: {
          ar: "لو كان الحدّ الأدنى مكتوبًا أمامك في تلك اللحظة، ماذا كنت لتقول بدلًا مما قلته؟",
          en: "If the floor had been written in front of you at that moment, what would you have said instead of what you said?",
        },
      },
    ],
    summaryCard: {
      id: "card.ni.01",
      title: {
        ar: "ثلاثة أرقام قبل الجلسة",
        en: "Three Numbers Before the Session",
      },
      whatYouLearned: {
        ar: [
          "التفاوض يبدأ بثلاثة أرقام لا برقم واحد: الهدف، الحدّ الأدنى، والبديل.",
          "الحدّ الأدنى يُكتب قبل الجلسة، لأن العقل تحت الضغط يبرّر أي تنازل ينهي التوتر.",
          "البديل الجيد هو مصدر قوّتك الحقيقي، حتى لو لم تذكره أمام الطرف الآخر.",
        ],
        en: [
          "Negotiation starts with three numbers, not one: the goal, the floor, and the alternative.",
          "The floor is written before the session, because under pressure the mind justifies any concession that ends the tension.",
          "A good alternative is your real source of strength, even if you never mention it to the other side.",
        ],
      },
      framework: {
        name: {
          ar: "الأرقام الثلاثة: الهدف · الحدّ الأدنى · البديل",
          en: "The Three Numbers: Goal · Floor · Alternative",
        },
        steps: [
          {
            ar: "الهدف — النتيجة التي تخدم مصلحة الموكّل فعلًا، بجملة واحدة.",
            en: "Goal — the outcome that actually serves the client's interest, in one sentence.",
          },
          {
            ar: "الحدّ الأدنى — أدنى نتيجة مقبولة، مكتوبة قبل الجلسة.",
            en: "Floor — the lowest acceptable outcome, written before the session.",
          },
          {
            ar: "البديل — ما يفعله الموكّل فعلًا إن لم يتم الاتفاق.",
            en: "Alternative — what the client actually does if no deal is reached.",
          },
        ],
      },
      rememberThis: {
        ar: "من لا يعرف حدّه الأدنى يكتشفه في اللحظة التي يوقّع فيها. اكتبه قبل أن تجلس.",
        en: "Whoever does not know his floor discovers it the moment he signs. Write it before you sit down.",
      },
      useItTomorrow: {
        ar: "قبل جلستك القادمة، اكتب على ورقة واحدة: الهدف، الحدّ الأدنى، والبديل — واحملها معك إلى الغرفة.",
        en: "Before your next session, write on one sheet: the goal, the floor, and the alternative — and carry it into the room.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.how-to-argue-and-win", "src.tools-of-argument", "src.thinking-like-a-lawyer"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 02 — Building a Case That Persuades, Not a Position That's Announced
  // =========================================================================
  {
    id: "unit.ni.02",
    chapterId: "ch.ni.preparing",
    order: 2,
    title: {
      ar: "بناء حجة تُقنع، لا موقف يُعلَن",
      en: "Building a Case That Persuades, Not a Position That's Announced",
    },
    subtitle: {
      ar: "قول ما تريده لا يُقنع أحدًا؛ الإقناع يبدأ حين تربط طلبك بما يهمّ الطرف الآخر فعلًا",
      en: "Stating what you want convinces no one; persuasion starts when your demand connects to what the other side actually cares about.",
    },
    primarySkillId: "skill.persuasive-argument",
    skillIds: ["skill.persuasive-argument", "skill.negotiation"],
    stage: 1,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.ni.02.hook",
        text: {
          ar: "«نريد شروط دفع أفضل» جملة يقولها كل مفاوض. لا أحد يتحرّك لأجلها. الحركة تبدأ حين تقول له لماذا هذا يخدمه هو أيضًا.",
          en: "\"We want better payment terms\" is a sentence every negotiator says. Nobody moves for it. Movement starts when you tell them why it serves their interest too.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.ni.02.why",
        text: {
          ar: "موقف بلا سبب يُقرأ كرغبة شخصية يمكن رفضها بلا ثمن. أما الطلب المسند بمصلحة حقيقية للطرف الآخر فيصعب رفضه دون تبرير، وهذا وحده يقلب موازين الجلسة.",
          en: "A position with no reason reads as a personal wish that can be refused at no cost. A demand grounded in the other side's real interest is hard to refuse without justifying the refusal — and that alone shifts the balance of the session.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.ni.02.goals",
        goals: {
          ar: [
            "أن تسند كل مطلب إلى واقعة أو رقم محدَّد بدل تركه تأكيدًا مجردًا.",
            "أن تربط طلبك بمصلحة فعلية للطرف الآخر لا بمصلحتك وحدها.",
            "أن تجهّز ردًّا على أقوى اعتراض متوقّع قبل أن يُطرح.",
          ],
          en: [
            "Ground every demand in a specific fact or figure instead of leaving it a bare assertion.",
            "Connect your demand to a real interest of the other side, not only your own.",
            "Prepare a response to the strongest likely objection before it is raised.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.ni.02.lesson",
        title: {
          ar: "من التأكيد إلى الحجة",
          en: "From assertion to argument",
        },
        body: {
          ar: [
            "المطلب المجرّد يقول ماذا تريد. الحجة تقول لماذا هذا الطلب منطقي، وما الدليل عليه.",
            "أضعف حجة هي التي تصلح لأي نزاع: «هذا غير عادل» أو «هذا ما نستحقه». الطرف الآخر يسمعها كل يوم من كل طرف.",
            "أقوى حجة تستند إلى واقعة خاصة بهذا الملف تحديدًا: بند في العقد، رقم من فاتورة، أو موعد تسليم فعلي مقارنة بالمتفق عليه.",
            "الخطوة التالية هي إعادة صياغة الحجة بلغة تخاطب مصلحة الطرف الآخر أيضًا، لا مصلحتك وحدك — فتصبح اقتراحًا يستفيد منه، لا مطلبًا يخسر منه.",
            "أخيرًا: توقّع أقوى اعتراض ممكن، وجهّز له ردًّا قبل الجلسة. المفاوض الذي يُفاجَأ بالاعتراض الأول يرتجل ردًّا ضعيفًا يضعف كل ما قاله قبله.",
          ],
          en: [
            "A bare demand states what you want. An argument states why that demand makes sense, and what evidence supports it.",
            "The weakest argument is one that would fit any dispute: \"this isn't fair\" or \"this is what we deserve.\" The other side hears it every day, from every party.",
            "The strongest argument rests on a fact specific to this matter: a contract clause, a figure from an invoice, an actual delivery date against the agreed one.",
            "The next step is reframing the argument in language that speaks to the other side's interest too — turning it into a proposal they gain from, not a demand they lose from.",
            "Finally: anticipate the strongest likely objection and prepare a response before the session. A negotiator blindsided by the first objection improvises a weak reply that undermines everything said before it.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.ni.02.visual",
        title: {
          ar: "من التأكيد إلى الحجة المقنعة",
          en: "From assertion to persuasive argument",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "تأكيد مجرّد", en: "Bare assertion" },
            detail: {
              ar: "«نحتاج مهلة دفع أطول.» لا سبب، لا سند، يمكن رفضه دون أي تبرير.",
              en: "\"We need a longer payment period.\" No reason, no evidence — can be refused with no justification at all.",
            },
            tone: "negative",
          },
          {
            label: { ar: "حجة مسندة بسبب واحد", en: "Argument with one reason" },
            detail: {
              ar: "«نحتاج مهلة 60 يومًا لأن ذروة مبيعاتنا في رمضان تتأخر تحصيلاتها.» سبب خاص بالملف، لكنه بلا دليل موثّق بعد.",
              en: "\"We need 60 days because our Ramadan sales peak collects late.\" A matter-specific reason, but not yet backed by documented evidence.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "حجة تخاطب مصلحة الطرفين", en: "Argument speaking to both interests" },
            detail: {
              ar: "«60 يومًا مقابل التزامنا بطلبية سنوية ثابتة — يمنحكم يقين حجم مبيعات لا تملكونه اليوم.» يربح الطرف الآخر أيضًا.",
              en: "\"60 days in exchange for a fixed annual order commitment — it gives you a volume certainty you don't have today.\" The other side gains too.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.ni.02.worked",
        strong: {
          label: {
            ar: "طلب مسند بمصلحة المورّد لا بمصلحة العميل وحده",
            en: "A demand grounded in the supplier's interest, not only the client's",
          },
          text: {
            ar: [
              "«ثلاث سنوات تعاملنا معكم دون أي تأخير سداد، وسجل الفواتير معكم يؤكد ذلك.»",
              "«نطلب مهلة سداد 60 يومًا بدل 30، لأن ذروة مبيعاتنا في رمضان تتأخر تحصيلاتها نحو ثلاثة أسابيع.»",
              "«في المقابل، نلتزم بطلبية سنوية ثابتة بدل الطلبيات المتقطعة الحالية — يمنحكم تخطيطًا أدق لخط الإنتاج.»",
            ],
            en: [
              "\"We've dealt with you for three years without a single late payment, and your own invoice record confirms it.\"",
              "\"We're asking for 60 days instead of 30, because our Ramadan sales peak delays our own collections by roughly three weeks.\"",
              "\"In exchange, we commit to a fixed annual order instead of our current sporadic orders — that gives you more accurate production planning.\"",
            ],
          },
          why: {
            ar: "كل جملة مسندة: سجل الدفع الموثّق، سبب موسمي محدَّد، ومقايضة يستفيد منها المورّد فعلًا. الطلب لم يعد رغبة بل اقتراحًا يصعب رفضه دون تفسير.",
            en: "Every sentence is grounded: a documented payment record, a specific seasonal reason, and a trade the supplier genuinely gains from. The demand is no longer a wish but a proposal that is hard to refuse without explanation.",
          },
        },
        weak: {
          label: {
            ar: "طلب معلَّق دون سند",
            en: "A demand hanging with no support",
          },
          text: {
            ar: [
              "«الشركات المنافسة تعطي عملاءها 90 يومًا، فلماذا نحن فقط 30؟»",
              "«الوضع الاقتصادي صعب على الجميع، وهذا حقّنا.»",
            ],
            en: [
              "\"Competing companies give their customers 90 days, so why are we stuck at 30?\"",
              "\"The economy is hard on everyone, and this is our right.\"",
            ],
          },
          why: {
            ar: "«الشركات المنافسة» بلا اسم أو رقم يسهل الطعن فيه، و«الوضع الاقتصادي صعب على الجميع» حجة عامة تصلح لأي نزاع فلا تخصّ هذا الملف بشيء. المورّد يسمع رغبة، لا سببًا يصعب عليه تجاهله.",
            en: "\"Competing companies\" with no name or figure is easy to challenge, and \"the economy is hard on everyone\" is a generic claim that fits any dispute and says nothing specific to this matter. The supplier hears a wish, not a reason he cannot easily set aside.",
          },
        },
      },
      { kind: "activity", id: "s.ni.02.a1", activityId: "act.ni.02.1", mode: "quick" },
      { kind: "activity", id: "s.ni.02.a2", activityId: "act.ni.02.2", mode: "guided" },
      { kind: "activity", id: "s.ni.02.a3", activityId: "act.ni.02.3", mode: "guided" },
      { kind: "activity", id: "s.ni.02.a4", activityId: "act.ni.02.4", mode: "independent" },
      { kind: "activity", id: "s.ni.02.a5", activityId: "act.ni.02.5", mode: "independent" },
      { kind: "summary", id: "s.ni.02.summary", summaryCardId: "card.ni.02" },
      {
        kind: "apply_tomorrow",
        id: "s.ni.02.apply",
        task: {
          ar: "قبل مطالبتك التالية، اكتب سببًا واحدًا خاصًا بهذا الملف، ودليلًا موثّقًا عليه، وفائدة واحدة يجنيها الطرف الآخر من موافقته.",
          en: "Before your next demand, write one matter-specific reason, one documented piece of evidence for it, and one benefit the other side gains from agreeing.",
        },
        detail: {
          ar: "إن لم تستطع ملء الأسطر الثلاثة، فالطلب ليس جاهزًا بعد — عد إليه قبل أن تطرحه.",
          en: "If you cannot fill all three lines, the demand is not ready yet — revisit it before you raise it.",
        },
      },
      {
        kind: "next_mission",
        id: "s.ni.02.next",
        teaser: {
          ar: "بنيت حجتك. لكن الطرف الآخر أمامك لن يقول لك مصلحته الحقيقية مباشرة. الوحدة القادمة: كيف تقرأ ما لا يُقال.",
          en: "You built your case. But the person across the table will not simply state their real interest. Next unit: how to read what is not said.",
        },
      },
    ],
    activities: [
      {
        id: "act.ni.02.1",
        kind: "best_response",
        skillId: "skill.persuasive-argument",
        stage: 1,
        context: {
          ar: [
            "تمثّل مصنعًا غذائيًا يتفاوض مع موردّ تعبئة وتغليف على تمديد مهلة السداد من 30 إلى 60 يومًا.",
            "يفتح المورّد الجلسة بسؤال: «ولماذا يجب أن نغيّر شرطًا يعمل به كل عملائنا؟»",
          ],
          en: [
            "You represent a food factory negotiating with a packaging supplier to extend payment terms from 30 to 60 days.",
            "The supplier opens with: \"Why should we change a term that works for all our other customers?\"",
          ],
        },
        prompt: {
          ar: "ما أفضل ردّ في هذه اللحظة؟",
          en: "What is the best response at this moment?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«لأن هذا هو الشرط المعمول به في السوق حاليًا.»",
              en: "\"Because that's the standard term in the market right now.\"",
            },
            rationale: {
              ar: "ادّعاء عام بلا مصدر أو رقم. المورّد سيطلب دليلًا فورًا، وإن لم يتوفر تفقد المصداقية في أول تبادل.",
              en: "A generic claim with no source or figure. The supplier will ask for evidence immediately, and if none exists you lose credibility in the very first exchange.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«موسمنا الأعلى مبيعًا يتأخر تحصيله نحو ثلاثة أسابيع، وسجلّنا معكم بلا تأخير سداد واحد طوال ثلاث سنوات — ونعرض التزامًا بطلبية سنوية ثابتة مقابل ذلك.»",
              en: "\"Our peak sales season delays our own collections by roughly three weeks, and our record with you shows not one late payment in three years — and we're offering a fixed annual order in exchange.\"",
            },
            correct: true,
            rationale: {
              ar: "سبب خاص بالملف، دليل موثّق (سجل السداد)، ومقايضة تخدم مصلحة المورّد أيضًا. هذا هو الفرق بين الطلب والحجة.",
              en: "A matter-specific reason, documented evidence (the payment record), and a trade that serves the supplier's interest too. This is the difference between a demand and an argument.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«إن لم توافقوا سنبحث عن مورّد آخر.»",
              en: "\"If you don't agree, we'll look for another supplier.\"",
            },
            rationale: {
              ar: "تهديد بلا حجة يدفع المورّد للتصلّب لا للتفكير، وقد يستدعي حقًّا مفاوضًا يفضّل خسارة العميل على الاستسلام لتهديد فارغ.",
              en: "A threat with no argument pushes the supplier to harden, not to think, and may well call the bluff of a negotiator who would rather lose the client than yield to an empty threat.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«حسنًا، نبقى على 30 يومًا إذن.»",
              en: "\"Fine, we'll stay at 30 days then.\"",
            },
            rationale: {
              ar: "استسلام عند أول اعتراض قبل حتى طرح الحجة المُعدّة. يترك الموكّل بلا أي فرصة لتحسين شروطه.",
              en: "Caving at the very first pushback, before even presenting the prepared argument. It leaves the client with no chance at improved terms at all.",
            },
          },
        ],
      },
      {
        id: "act.ni.02.2",
        kind: "matching",
        skillId: "skill.persuasive-argument",
        stage: 1,
        prompt: {
          ar: "طابق كل طلب تفاوضي بالمصلحة الحقيقية للطرف الآخر التي يمكن أن يُبنى عليها كحجة مقنعة.",
          en: "Match each negotiating demand to the other side's real interest it can be built into a persuasive argument around.",
        },
        accessibleAlternative: {
          ar: "اختر رقم المصلحة المطابقة من قائمة منسدلة بجانب كل طلب بدل السحب.",
          en: "Pick the matching interest number from a dropdown beside each demand instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "مهلة سداد أطول من العميل للمورّد.", en: "A longer payment period from customer to supplier." },
            right: { ar: "يقينٌ بحجم مبيعات ثابت عبر التزام بطلبية سنوية.", en: "Certainty of a fixed sales volume through an annual order commitment." },
            rationale: {
              ar: "المورّد لا يهتم بصعوبات العميل المالية بقدر اهتمامه بضمان حجم أعمال، فالمقايضة الصحيحة تخاطب هذا بالذات.",
              en: "The supplier cares less about the customer's cash-flow trouble than about a guaranteed volume of business — the right trade speaks to exactly that.",
            },
          },
          {
            id: "p2",
            left: { ar: "تخفيض إيجار عند تجديد عقد إيجار تجاري.", en: "A rent reduction on a commercial lease renewal." },
            right: { ar: "استقرار مستأجر موثوق بدل فترة شغور وبحث عن مستأجر جديد.", en: "The stability of a reliable tenant instead of a vacancy period and a search for a new one." },
            rationale: {
              ar: "المالك يخسر أكثر من فترة الشغور نفسها؛ خسارته الحقيقية هي عدم اليقين، وهذا ما يخاطبه استقرار مستأجر معروف.",
              en: "A landlord loses more than the vacancy period itself; his real loss is uncertainty — and a known, stable tenant speaks directly to that.",
            },
          },
          {
            id: "p3",
            left: { ar: "جدول دفعات مؤجّل لمقاول يطالب بمستحقاته كاملة فورًا.", en: "A deferred payment schedule for a contractor demanding full payment now." },
            right: { ar: "سيولة مؤكدة وموثّقة بدل نزاع طويل قد ينتهي بمبلغ أقل بعد أشهر.", en: "Confirmed, documented cash flow instead of a long dispute that may end in a lower amount months later." },
            rationale: {
              ar: "المقاول غالبًا لا يريد الرقم الكامل بقدر ما يريد يقينًا بالتوقيت؛ جدول موثّق أقرب لمصلحته من نزاع طويل غير مضمون.",
              en: "A contractor often wants timing certainty more than the full figure; a documented schedule is closer to his interest than a long, uncertain dispute.",
            },
          },
          {
            id: "p4",
            left: { ar: "شروط أخفّ في تسوية شيك مرتجع لصالح المدين.", en: "Lighter terms in a settlement over a dishonoured cheque, favouring the debtor." },
            right: { ar: "تجنّب الملاحقة الجزائية وتوثيق التزام يحفظ سمعته التجارية.", en: "Avoiding a criminal referral and documenting a commitment that protects his commercial reputation." },
            rationale: {
              ar: "غالبًا ما يخشى المدين الأثر الجزائي والسمعي أكثر من المبلغ نفسه؛ التسوية التي تخاطب هذا الخوف تحرّكه أسرع من المساومة على الرقم وحده.",
              en: "A debtor often fears the criminal and reputational consequence more than the amount itself; a settlement that speaks to that fear moves him faster than haggling over the figure alone.",
            },
          },
        ],
      },
      {
        id: "act.ni.02.3",
        kind: "find_mistake",
        skillId: "skill.persuasive-argument",
        stage: 1,
        context: {
          ar: [
            "مسودة رسالة يريد محامٍ إرسالها إلى مورّد تعبئة وتغليف لدعم طلب تمديد مهلة السداد.",
          ],
          en: [
            "A draft letter a lawyer intends to send to a packaging supplier to support a request to extend the payment period.",
          ],
        },
        prompt: {
          ar: "«شركاؤنا التجاريون جميعًا يمنحوننا مهلة أطول، ونعتقد أن هذا من حقّنا كعميل بهذا الحجم. نأمل موافقتكم السريعة.» — ما الخلل الأساسي في هذه الحجة؟",
          en: "\"All our business partners give us a longer period, and we believe this is our right as a customer of this size. We hope for your prompt agreement.\" — what is the main flaw in this argument?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "النبرة غير مهذّبة تجاه المورّد.",
              en: "The tone is impolite toward the supplier.",
            },
            rationale: {
              ar: "النبرة مهذّبة فعلًا؛ المشكلة ليست في الأسلوب بل في غياب أي سند قابل للتحقق وراء الطلب.",
              en: "The tone is actually polite; the problem is not style but the absence of any verifiable support behind the demand.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«شركاؤنا جميعًا» بلا اسم أو رقم، و«هذا حقّنا» ادّعاء عام لا يخصّ هذا الملف بشيء ولا يقدّم فائدة للمورّد.",
              en: "\"All our partners\" with no name or figure, and \"this is our right\" is a generic claim specific to nothing in this matter and offers the supplier no benefit at all.",
            },
            correct: true,
            rationale: {
              ar: "بالضبط: لا سند موثّق، ولا سبب خاص بهذا الملف، ولا أي فائدة للمورّد. رسالة كهذه يسهل تجاهلها لأنها لا تُلزم المورّد بشيء ليردّ عليه.",
              en: "Exactly: no documented support, no reason specific to this matter, and no benefit to the supplier. A letter like this is easy to ignore because it gives the supplier nothing specific to respond to.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "الرسالة قصيرة جدًا ويجب إطالتها.",
              en: "The letter is too short and should be longer.",
            },
            rationale: {
              ar: "الطول ليس المشكلة؛ حتى لو طالت الرسالة، دون سند محدَّد تبقى مجموعة تأكيدات لا حجة.",
              en: "Length is not the issue; even a longer version, without specific support, remains a set of assertions rather than an argument.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "لم تُذكر مهلة زمنية للردّ.",
              en: "No response deadline was mentioned.",
            },
            rationale: {
              ar: "غياب المهلة عيب حقيقي في رسالة إغلاق، لكنه ليس المشكلة الأساسية هنا؛ حتى برسالة تحدّد مهلة، غياب السند يبقى العيب الأكبر.",
              en: "A missing deadline is a real flaw in a closing letter, but it is not the core problem here; even with a deadline stated, the missing support remains the bigger flaw.",
            },
          },
        ],
      },
      {
        id: "act.ni.02.4",
        kind: "email_rewrite",
        skillId: "skill.persuasive-argument",
        secondarySkillIds: ["skill.negotiation"],
        stage: 1,
        grading: "ai_rubric",
        rubricId: "rubric.negotiation-written.v1",
        weight: 2,
        minChars: 220,
        context: {
          ar: [
            "الموكّل مصنع مواد غذائية يطلب تمديد مهلة السداد من موردّ التعبئة والتغليف من 30 إلى 60 يومًا.",
            "سجل الدفع مع هذا المورّد نظيف تمامًا منذ ثلاث سنوات، وذروة المبيعات في رمضان تؤخّر تحصيلات المصنع نحو ثلاثة أسابيع.",
            "المصنع مستعد أن يلتزم بطلبية سنوية ثابتة بدل الطلبيات المتقطعة الحالية مقابل هذا التمديد.",
          ],
          en: [
            "The client is a food factory asking its packaging supplier to extend payment terms from 30 to 60 days.",
            "The payment record with this supplier has been clean for three years, and the Ramadan sales peak delays the factory's own collections by roughly three weeks.",
            "The factory is willing to commit to a fixed annual order instead of its current sporadic orders in exchange for the extension.",
          ],
        },
        prompt: {
          ar: "أعد صياغة المسودة التالية لتصبح حجة مقنعة مسندة بالوقائع أعلاه، وتخاطب مصلحة المورّد أيضًا.",
          en: "Rewrite the draft below into a persuasive argument grounded in the facts above, one that also speaks to the supplier's own interest.",
        },
        draft: {
          ar: [
            "«نطلب منكم تمديد مهلة السداد إلى 60 يومًا بدل 30. نعتقد أن هذا معقول ونأمل موافقتكم قريبًا.»",
          ],
          en: [
            "\"We ask you to extend the payment period to 60 days instead of 30. We think this is reasonable and hope for your agreement soon.\"",
          ],
        },
        modelAnswer: {
          ar: [
            "«على مدى ثلاث سنوات من التعامل معكم، لم يتأخر سداد فاتورة واحدة، وسجلّ حسابكم لدينا يوثّق ذلك.»",
            "«نطلب تمديد مهلة السداد إلى 60 يومًا، لأن ذروة مبيعاتنا في رمضان تؤخّر تحصيلاتنا نحو ثلاثة أسابيع كل عام دون أن يغيّر ذلك التزامنا بالسداد الكامل.»",
            "«في المقابل، نعرض الانتقال إلى طلبية سنوية ثابتة بدل طلبياتنا المتقطعة الحالية، بما يمنحكم تخطيطًا أدق لخط الإنتاج. يسعدنا مناقشة التفاصيل في الأيام القادمة.»",
          ],
          en: [
            "\"Over three years of dealing with you, not one invoice has been paid late, and your own account record with us confirms it.\"",
            "\"We are asking to extend the payment period to 60 days, because our Ramadan sales peak delays our own collections by roughly three weeks each year, without ever changing our commitment to paying in full.\"",
            "\"In exchange, we propose moving to a fixed annual order instead of our current sporadic orders, giving you more accurate production planning. We would welcome discussing the details in the coming days.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«الوضع الاقتصادي صعب على الجميع هذه الأيام، ونعتقد أن مهلة 60 يومًا حق مكتسب لعميل بحجمنا. نرجو الموافقة دون تأخير.»",
            ],
            en: [
              "\"The economy is difficult for everyone these days, and we believe 60 days is an earned right for a customer of our size. Please agree without delay.\"",
            ],
          },
          whatIsWrong: {
            ar: "«الوضع الاقتصادي صعب على الجميع» عبارة عامة تصلح لأي رسالة لأي مورّد، و«حق مكتسب» تأكيد بلا دليل يستفزّ لا يقنع. لا سجل دفع، لا سبب موسمي، ولا أي فائدة للمورّد — ثلاث فرص ضاعت في جملتين.",
            en: "\"Difficult for everyone\" is generic enough to fit any letter to any supplier, and \"earned right\" is an assertion with no evidence that provokes rather than persuades. No payment record, no seasonal reason, no benefit to the supplier — three missed opportunities in two sentences.",
          },
        },
      },
      {
        id: "act.ni.02.5",
        kind: "reflection",
        skillId: "skill.persuasive-argument",
        stage: 1,
        grading: "self_report",
        prompt: {
          ar: "استرجع طلبًا رفضه طرف آخر دون تفسير حقيقي. هل كان طلبك يومها تأكيدًا أم حجة؟",
          en: "Recall a demand the other side refused without a real explanation. Was your demand that day an assertion or an argument?",
        },
        followUp: {
          ar: "ما المصلحة الحقيقية للطرف الآخر التي لم تسأل عنها ولم تخاطبها؟",
          en: "What real interest of the other side did you never ask about or speak to?",
        },
      },
    ],
    summaryCard: {
      id: "card.ni.02",
      title: {
        ar: "من التأكيد إلى الحجة",
        en: "From Assertion to Argument",
      },
      whatYouLearned: {
        ar: [
          "المطلب المجرّد يقول ماذا تريد؛ الحجة تقول لماذا هو منطقي وما الدليل عليه.",
          "أقوى حجة تستند إلى واقعة خاصة بالملف، لا إلى ادّعاء عام يصلح لأي نزاع.",
          "الحجة التي تخاطب مصلحة الطرف الآخر أيضًا يصعب رفضها دون تبرير.",
        ],
        en: [
          "A bare demand states what you want; an argument states why it makes sense and what evidence supports it.",
          "The strongest argument rests on a fact specific to this matter, not a generic claim that fits any dispute.",
          "An argument that also speaks to the other side's interest is hard to refuse without justification.",
        ],
      },
      framework: {
        name: {
          ar: "بناء الحجة: المطلب · السبب · الدليل · المصلحة المشتركة",
          en: "Building the Case: Claim · Reason · Evidence · Shared Interest",
        },
        steps: [
          { ar: "المطلب — جملة واحدة واضحة.", en: "Claim — one clear sentence." },
          { ar: "السبب — خاص بهذا الملف تحديدًا.", en: "Reason — specific to this matter." },
          { ar: "الدليل — واقعة أو رقم موثّق يمكن التحقق منه.", en: "Evidence — a documented, verifiable fact or figure." },
          { ar: "المصلحة المشتركة — ما يجنيه الطرف الآخر من الموافقة.", en: "Shared interest — what the other side gains from agreeing." },
        ],
      },
      rememberThis: {
        ar: "طلب بلا سبب يُرفض بلا ثمن. حجة مسندة بمصلحة الطرفين يصعب رفضها دون تفسير.",
        en: "A demand with no reason is refused at no cost. An argument grounded in both sides' interest is hard to refuse without explanation.",
      },
      useItTomorrow: {
        ar: "قبل مطالبتك التالية، اكتب السبب والدليل والفائدة المشتركة على ثلاثة أسطر قبل أن تطرحها.",
        en: "Before your next demand, write the reason, the evidence and the shared benefit on three lines before you raise it.",
      },
      phrases: [
        {
          en: "our record with you shows",
          ar: "سجلّنا معكم يُظهر",
          register: "formal",
        },
        {
          en: "in exchange, we propose",
          ar: "في المقابل، نقترح",
          register: "neutral",
        },
        {
          en: "this would give you",
          ar: "هذا يمنحكم",
          register: "neutral",
        },
      ],
    },
    targetLevel: 2,
    sourceIds: ["src.how-to-argue-and-win", "src.making-your-case", "src.tools-of-argument"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 03 — Reading the Counterpart: the Interest Behind the Position
  // =========================================================================
  {
    id: "unit.ni.03",
    chapterId: "ch.ni.preparing",
    order: 3,
    title: {
      ar: "قراءة الطرف الآخر: المصلحة خلف الموقف",
      en: "Reading the Counterpart: the Interest Behind the Position",
    },
    subtitle: {
      ar: "ما يقوله الطرف الآخر افتتاحه؛ ما يريده فعلًا يظهر في سؤال هادئ لا في مطالبة أخرى",
      en: "What the other side says is their opening; what they actually want surfaces in a calm question, not another demand.",
    },
    primarySkillId: "skill.reading-the-counterpart",
    skillIds: ["skill.reading-the-counterpart"],
    stage: 2,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.ni.03.hook",
        text: {
          ar: "«لن ندفع دفعة واحدة» جملة سمعتها. لكن السؤال الذي يقرّر التفاوض ليس ماذا قال، بل لماذا قالها الآن بالذات.",
          en: "\"We won't pay in one instalment\" is a sentence you just heard. But the question that decides the negotiation is not what was said — it's why it was said right now.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.ni.03.why",
        text: {
          ar: "من يتفاوض مع الموقف المعلن وحده يتفاوض مع واجهة. المصلحة الحقيقية خلفها — ضغط سيولة، خوف من السمعة، أو صلاحية محدودة — هي ما يقرّر فعلًا ما الذي سيقبله الطرف الآخر.",
          en: "Whoever negotiates only against the stated position negotiates against a façade. The real interest behind it — a cash squeeze, a reputational fear, limited authority — is what actually decides what the other side will accept.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.ni.03.goals",
        goals: {
          ar: [
            "أن تميّز بين الموقف الذي يُعلَن والمصلحة التي تختفي خلفه.",
            "أن تسأل أسئلة استكشافية مفتوحة بدل الافتراض المبكر لدوافع الطرف الآخر.",
            "أن تكيّف وتيرة حديثك وأسلوبك بحسب طبع من تفاوضه.",
          ],
          en: [
            "Distinguish the stated position from the interest hiding behind it.",
            "Ask open, exploratory questions instead of assuming the other side's motives too early.",
            "Adapt your pace and style to the person you are actually negotiating with.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.ni.03.lesson",
        title: {
          ar: "ما يُقال وما يُقصد",
          en: "What is said and what is meant",
        },
        body: {
          ar: [
            "أكثر ما يُضيّع المفاوض المبتدئ هو الافتراض: يسمع رفضًا فيظنّه رفضًا نهائيًا للمبلغ، بينما هو غالبًا رفض لتوقيت أو لطريقة عرض.",
            "الموقف المعلن جملة واحدة معدّة سلفًا. المصلحة الحقيقية خلفه لا تُقال مباشرة؛ تتسرّب حين يُسأل سؤال مفتوح وودّي عمّا «يحلّ المشكلة فعلًا من جهته».",
            "الضغط يُغلق الباب لا يفتحه. أي محاولة لاستخدام معلومة حسّاسة كورقة ضغط مبكرة تجعل الطرف الآخر يتكتّم عليها فورًا.",
            "لغة الجسد والتردد أيضًا يقولان شيئًا: توقّف قبل الإجابة، أو تكرار عبارة مطمئنة دون أن يُسأل عنها، غالبًا يشير إلى نقطة تستحق العودة إليها لاحقًا.",
            "الأسلوب يختلف من طرف لآخر: بعضهم يحتاج وتيرة أبطأ وتفصيلًا كاملًا، وبعضهم يريد الخلاصة مباشرة. معاملة الجميع بالطريقة نفسها تُفقدك من يحتاج غير ذلك.",
          ],
          en: [
            "What trips up a beginning negotiator most is assumption: hearing a refusal, he reads it as final rejection of the figure, when it is often a rejection of timing or of how it was presented.",
            "The stated position is one prepared sentence. The real interest behind it is not stated directly — it leaks out only when an open, friendly question is asked about what would \"actually solve this from their side.\"",
            "Pressure closes the door, not opens it. Any attempt to use a sensitive piece of information as early leverage makes the other side shut it down immediately.",
            "Body language and hesitation say something too: a pause before answering, or a reassuring phrase repeated unprompted, often flags a point worth returning to later.",
            "Style differs from one counterpart to the next: some need a slower pace and full detail, others want the bottom line straight away. Treating everyone the same loses whoever needed the other approach.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.ni.03.visual",
        title: {
          ar: "أربع إشارات تستحق التوقّف",
          en: "Four signals worth stopping for",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "التكرار غير المطلوب", en: "Unprompted repetition" },
            detail: {
              ar: "عبارة يكرّرها الطرف الآخر دون أن تُسأل غالبًا تحمي نقطة ضعف أو حساسية معينة.",
              en: "A phrase the other side repeats without being asked usually protects a weak point or a sensitivity.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "التوقّف قبل الإجابة", en: "The pause before answering" },
            detail: {
              ar: "تردّد قصير قبل جواب سؤال بسيط يشير إلى أن الجواب ليس بسيطًا كما بدا.",
              en: "A short hesitation before a simple question's answer signals the answer is not as simple as it looked.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "السؤال المفتوح الودّي", en: "The open, friendly question" },
            detail: {
              ar: "«ما الذي يجعل هذا ممكنًا من جهتكم؟» يفتح أكثر مما يفتحه أي إلحاح على الرقم.",
              en: "\"What would make this workable from your side?\" opens more than any pressure on the number ever does.",
            },
            tone: "positive",
          },
          {
            label: { ar: "الضغط المبكر", en: "Early pressure" },
            detail: {
              ar: "استخدام معلومة حسّاسة كتهديد قبل أوانه يجعل الطرف الآخر يتكتّم عليها فورًا ولا يعود يذكرها.",
              en: "Using sensitive information as an early threat makes the other side shut it down immediately and never mention it again.",
            },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.ni.03.worked",
        strong: {
          label: {
            ar: "سؤال يفتح المصلحة الحقيقية",
            en: "A question that opens the real interest",
          },
          text: {
            ar: [
              "«أفهم أن الدفعة الواحدة صعبة الآن. بعيدًا عن الرقم، ما الذي يجعلكم قادرين على إقفال هذا الملف بارتياح؟»",
              "«لا عجلة من جهتنا للوصول إلى حل، لكننا نريد فهم ما يناسبكم فعلًا حتى لا نقترح شيئًا غير عملي.»",
            ],
            en: [
              "\"I understand a single instalment is hard right now. Setting the figure aside, what would let you close this file comfortably?\"",
              "\"We're in no rush on our end, but we want to understand what actually works for you so we don't propose something impractical.\"",
            ],
          },
          why: {
            ar: "السؤال ودّي ومفتوح ولا يتضمّن أي ضغط أو استعجال، فيمنح الطرف الآخر مساحة آمنة ليكشف قيدًا حقيقيًا — موعد سيولة، أو خشية من ملاحقة جزائية — بدل أن يكرّر موقفه المعلن فقط.",
            en: "The question is friendly, open, and carries no pressure or urgency, giving the other side a safe space to reveal a real constraint — a cash-flow date, a fear of criminal exposure — instead of simply repeating the stated position.",
          },
        },
        weak: {
          label: {
            ar: "افتراض مبكر يقفل الباب",
            en: "An early assumption that shuts the door",
          },
          text: {
            ar: [
              "«رفضكم يعني أنكم لا تنوون الدفع أصلًا، وسنلجأ للملاحقة الجزائية فورًا.»",
              "«نعرف أنكم بحاجة للسيولة بسبب مشروعكم الجديد، وهذا سيجبركم على القبول.»",
            ],
            en: [
              "\"Your refusal means you never intended to pay, and we'll move to criminal proceedings immediately.\"",
              "\"We know you need cash because of your new project, and that will force you to agree.\"",
            ],
          },
          why: {
            ar: "الجملة الأولى تفترض نيّة سيئة من رفض قد يكون توقيتًا فقط، فتدفع الطرف الآخر للتصلّب دفاعًا عن نفسه. والثانية تستخدم معلومة حساسة كتهديد مبكر، فيتكتّم عليها الطرف الآخر فورًا وتضيع أداة كانت ستفيد لو استُخدمت بهدوء لاحقًا.",
            en: "The first assumes bad faith from a refusal that may only be about timing, pushing the other side to harden in self-defence. The second uses a sensitive fact as an early threat, so the other side shuts it down instantly — losing a tool that would have helped if raised calmly later.",
          },
        },
      },
      { kind: "activity", id: "s.ni.03.a1", activityId: "act.ni.03.1", mode: "quick" },
      { kind: "activity", id: "s.ni.03.a2", activityId: "act.ni.03.2", mode: "guided" },
      { kind: "activity", id: "s.ni.03.a3", activityId: "act.ni.03.3", mode: "guided" },
      { kind: "activity", id: "s.ni.03.a4", activityId: "act.ni.03.4", mode: "independent" },
      { kind: "activity", id: "s.ni.03.a5", activityId: "act.ni.03.5", mode: "independent" },
      { kind: "summary", id: "s.ni.03.summary", summaryCardId: "card.ni.03" },
      {
        kind: "apply_tomorrow",
        id: "s.ni.03.apply",
        task: {
          ar: "في تفاوضك القادم، اطرح سؤالًا مفتوحًا وودّيًا واحدًا عن وضع الطرف الآخر قبل أي مساومة على الرقم.",
          en: "In your next negotiation, ask one open, friendly question about the other side's situation before any number-haggling.",
        },
        detail: {
          ar: "اكتب بعدها ما كشفه هذا السؤال ولم يكن ليظهر لو بدأت بالرقم مباشرة.",
          en: "Afterwards, write down what that question revealed that would not have surfaced if you had opened straight on the number.",
        },
      },
      {
        kind: "next_mission",
        id: "s.ni.03.next",
        teaser: {
          ar: "عرفت كيف تقرأ المصلحة خلف الموقف. الوحدة القادمة: كيف تبني على هذه القراءة اتفاقًا يخلق قيمة، لا مجرد رقم في المنتصف.",
          en: "You know how to read the interest behind the position. Next unit: how to build on that reading an agreement that creates value, not just a number split down the middle.",
        },
      },
    ],
    activities: [
      {
        id: "act.ni.03.1",
        kind: "multiple_choice",
        skillId: "skill.reading-the-counterpart",
        stage: 2,
        context: {
          ar: [
            "موكّلك تاجر تجزئة يحمل شيكًا مرتجعًا بقيمة 85,000 ريال من شركة توريدات.",
            "في الجلسة الأولى، قال ممثل الشركة المدينة: «الشيك ارتد لظرف طارئ، ولن نستطيع دفع المبلغ دفعة واحدة الآن.»",
          ],
          en: [
            "Your client is a retailer holding a dishonoured cheque worth 85,000 SAR from a supply company.",
            "In the first session, the debtor company's representative said: \"The cheque bounced due to an emergency, and we can't pay the full amount in one instalment right now.\"",
          ],
        },
        prompt: {
          ar: "ما أفضل ما تستنتجه من هذه الجملة وحدها؟",
          en: "What is the best conclusion to draw from this sentence alone?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "الشركة لا تنوي الدفع مطلقًا، ويجب التوجّه للملاحقة الجزائية فورًا.",
              en: "The company never intends to pay at all, and you should move to criminal proceedings immediately.",
            },
            rationale: {
              ar: "استنتاج متسرّع من جملة واحدة. «لن نستطيع دفعة واحدة» تتحدث عن الطريقة والتوقيت، لا عن رفض المبدأ.",
              en: "A hasty conclusion from one sentence. \"We can't pay in one instalment\" speaks to method and timing, not to a rejection of the principle.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "لم يُعرف بعد الفرق بين موقفهم المعلن (دفعة واحدة صعبة) ومصلحتهم الحقيقية؛ يحتاج سؤالًا مفتوحًا لاستكشافها.",
              en: "The gap between their stated position (a single instalment is hard) and their real interest is not yet known; it needs an open question to explore.",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. الجملة تكشف صعوبة في الطريقة لا رفضًا للمبدأ، والمصلحة الحقيقية وراءها — سيولة، جدول مشاريع، أو خوف من الأثر الجزائي — لا تزال مجهولة.",
              en: "Exactly. The sentence reveals difficulty with the method, not a rejection of the principle, and the real interest behind it — cash flow, a project timeline, fear of criminal exposure — is still unknown.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«ظرف طارئ» يعني أن الشركة تمر بأزمة مالية عامة يجب استغلالها فورًا للضغط.",
              en: "\"An emergency\" means the company is in a general financial crisis that should be exploited for pressure right away.",
            },
            rationale: {
              ar: "افتراض غير مؤكَّد من عبارة عامة، واستخدامه كورقة ضغط مبكرة قبل التحقق منه يدفع الطرف الآخر للتكتّم بدل الكشف.",
              en: "An unverified assumption drawn from a vague phrase, and using it as early leverage before verifying it pushes the other side to conceal rather than reveal.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "يجب قبول أي عرض تقسيط يطرحونه لاحقًا دون مناقشة لأنهم أبدوا صعوبة.",
              en: "You should accept whatever instalment offer they propose later, without discussion, since they showed difficulty.",
            },
            rationale: {
              ar: "صعوبة معلنة ليست تفويضًا لقبول أي شرط. ما زال يجب اختبار أي عرض لاحق بمعايير موضوعية قبل قبوله.",
              en: "A stated difficulty is not authorization to accept any term. Any later offer still needs testing against objective standards before acceptance.",
            },
          },
        ],
      },
      {
        id: "act.ni.03.2",
        kind: "categorization",
        skillId: "skill.reading-the-counterpart",
        stage: 2,
        prompt: {
          ar: "صنّف كل عبارة صادرة عن ممثل الشركة المدينة: هل هي موقف معلن أم إشارة إلى مصلحة حقيقية خلفه؟",
          en: "Sort each statement from the debtor company's representative: is it a stated position, or a signal of the real interest behind it?",
        },
        hint: {
          ar: "الموقف المعلن يصف ما يريده أو يرفضه الآن. الإشارة إلى المصلحة تكشف سببًا أو قيدًا لم يُطلب الكشف عنه.",
          en: "A stated position describes what he wants or refuses right now. A signal of interest reveals a reason or a constraint nobody asked him to disclose.",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «موقف معلن» / «إشارة مصلحة» أسفل كل عبارة بدل السحب.",
          en: "Choose \"Stated position\" / \"Interest signal\" from buttons under each statement instead of dragging.",
        },
        buckets: [
          { id: "position", label: { ar: "موقف معلن", en: "Stated position" } },
          { id: "interest", label: { ar: "إشارة مصلحة", en: "Interest signal" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "«لن نستطيع دفع المبلغ دفعة واحدة الآن.»",
              en: "\"We can't pay the full amount in one instalment right now.\"",
            },
            bucketId: "position",
            rationale: {
              ar: "جملة معدّة سلفًا تصف رفض طريقة الدفع الحالية، دون أن تكشف السبب الفعلي وراءها.",
              en: "A prepared sentence describing rejection of the current payment method, without revealing the real reason behind it.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "يكرّر دون أن يُسأل: «نحن حريصون على سمعتنا مع كل عملائنا.»",
              en: "Repeats, unprompted: \"We care deeply about our reputation with all our customers.\"",
            },
            bucketId: "interest",
            rationale: {
              ar: "تكرار غير مطلوب لعبارة عن السمعة يشير غالبًا إلى خوف حقيقي من أثر الملف على علاقات تجارية أخرى — مصلحة يستحق استكشافها.",
              en: "Unprompted repetition of a line about reputation usually signals a real fear about the file's effect on other business relationships — an interest worth exploring.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "يتوقّف لثوانٍ قبل الإجابة حين يُسأل عن موعد استلام دفعة من مشروع آخر.",
              en: "Pauses for a few seconds before answering when asked about a payment date from another project.",
            },
            bucketId: "interest",
            rationale: {
              ar: "التوقّف قبل جواب سؤال بسيط عادة إشارة إلى أن الموعد حسّاس أو غير مؤكَّد بعد — نقطة تستحق العودة إليها بهدوء.",
              en: "Hesitating before a simple question's answer usually signals the date is sensitive or not yet certain — a point worth returning to calmly.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "«موقفنا واضح: لا دفع خلال هذا الشهر.»",
              en: "\"Our position is clear: no payment this month.\"",
            },
            bucketId: "position",
            rationale: {
              ar: "بيان مباشر لموقف زمني محدَّد، وهو ما يقوله الطرف الآخر علنًا لا ما يخفيه.",
              en: "A direct statement of a specific timing position — what the other side says openly, not what he is holding back.",
            },
          },
        ],
      },
      {
        id: "act.ni.03.3",
        kind: "ordering",
        skillId: "skill.reading-the-counterpart",
        stage: 2,
        prompt: {
          ar: "رتّب الأسئلة بالترتيب الذي يفتح المعلومة تدريجيًا دون أن يُغلق الطرف الآخر الباب مبكرًا.",
          en: "Order the questions so information opens up gradually, without the other side shutting the door too early.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل سؤال بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each question instead of dragging.",
        },
        hint: {
          ar: "ابدأ بسؤال عام وودّي، وانتهِ بسؤال محدَّد لا يُطرح إلا بعد أن يشعر الطرف الآخر بالأمان.",
          en: "Start with a general, friendly question, and end with a specific one that only works once the other side feels safe.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "«كيف تسير الأمور من جهتكم هذه الفترة بشكل عام؟»",
              en: "\"How are things going on your end generally these days?\"",
            },
            rationale: {
              ar: "سؤال واسع وودّي يفتح الحديث دون أي إيحاء بضغط أو اتهام.",
              en: "A wide, friendly question that opens the conversation with no hint of pressure or accusation.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "«بعيدًا عن المبلغ، ما الذي يجعل هذا الملف قابلًا للحلّ من جهتكم؟»",
              en: "\"Setting the amount aside, what would make this file workable from your side?\"",
            },
            rationale: {
              ar: "يفصل الرقم عن المصلحة الحقيقية، ويدعو الطرف الآخر لوصف حلّ بلغته هو لا بلغة موكّلك.",
              en: "Separates the figure from the real interest, and invites the other side to describe a solution in their own words, not your client's.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "«هل هناك جدول تحصيلات أو مشروع قريب يمكن أن يساعد على تحديد موعد واقعي؟»",
              en: "\"Is there a collections schedule or an upcoming project that could help set a realistic date?\"",
            },
            rationale: {
              ar: "سؤال أكثر تحديدًا يُطرح بعد أن اتضح أن هناك قيدًا زمنيًا، لا قبل ذلك.",
              en: "A more specific question, asked only after it becomes clear a timing constraint exists — not before.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "«لو اقترحنا جدول دفعات موثّقًا بضمانة، هل هذا يقرّبنا من حلّ اليوم؟»",
              en: "\"If we proposed a documented, secured payment schedule, would that bring us closer to a solution today?\"",
            },
            rationale: {
              ar: "آخر خطوة لأنها اقتراح محدَّد يُبنى على كل ما كُشف من مصالح وقيود في الأسئلة السابقة.",
              en: "Last, because it is a specific proposal built on everything the earlier questions surfaced about interests and constraints.",
            },
          },
        ],
      },
      {
        id: "act.ni.03.4",
        kind: "branching_decision",
        skillId: "skill.reading-the-counterpart",
        secondarySkillIds: ["skill.negotiation"],
        stage: 2,
        weight: 2,
        context: {
          ar: [
            "تفاوض نيابة عن تاجر تجزئة يحمل شيكًا مرتجعًا بقيمة 85,000 ريال من شركة توريدات.",
            "ممثل الشركة المدينة أمامك الآن، وقد فتح الجلسة بجملته المعتادة عن «الظرف الطارئ».",
          ],
          en: [
            "You are negotiating for a retailer holding a dishonoured cheque worth 85,000 SAR from a supply company.",
            "The debtor company's representative is across the table, having opened with his usual line about \"an emergency.\"",
          ],
        },
        prompt: {
          ar: "اختر ردّك في كل لحظة من التفاوض، وراقب أثره.",
          en: "Choose your response at each point in the negotiation, and watch its effect.",
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
              ar: "«الشيك ارتد لظرف طارئ، ولن نستطيع دفع المبلغ دفعة واحدة الآن.»",
              en: "\"The cheque bounced due to an emergency, and we can't pay the full amount in one instalment right now.\"",
            },
            choices: [
              {
                id: "n1c1",
                label: {
                  ar: "«أفهم أن دفعة واحدة صعبة. بعيدًا عن الطريقة، ما الذي يجعلكم قادرين على إقفال هذا الملف بارتياح؟»",
                  en: "\"I understand a single instalment is hard. Setting the method aside, what would let you close this file comfortably?\"",
                },
                nextNodeId: "n2",
                quality: "strong",
                rationale: {
                  ar: "سؤال مفتوح وودّي يفصل الرفض عن الطريقة عن أي رفض للمبدأ، ويدعو الطرف الآخر لكشف قيده الحقيقي دون أي ضغط.",
                  en: "An open, friendly question that separates the refusal of method from any refusal of principle, and invites the real constraint to surface with no pressure at all.",
                },
              },
              {
                id: "n1c2",
                label: {
                  ar: "«حسنًا، اقترحوا أنتم جدولًا وسننظر فيه.»",
                  en: "\"Fine, you propose a schedule and we'll consider it.\"",
                },
                nextNodeId: "n2",
                quality: "acceptable",
                rationale: {
                  ar: "لا يضغط ولا يتصعّد، لكنه يتخلّى عن المبادرة كليًا دون أن يستكشف المصلحة الحقيقية أولًا، فيدخل الجدول القادم أعمى.",
                  en: "Neither pressures nor escalates, but hands over the initiative entirely without exploring the real interest first, entering the next schedule blind.",
                },
              },
              {
                id: "n1c3",
                label: {
                  ar: "«هذا غير مقبول. إما الدفع الكامل خلال أسبوع أو نلجأ للقضاء فورًا.»",
                  en: "\"That's not acceptable. Either full payment within a week, or we go to court immediately.\"",
                },
                nextNodeId: "n2",
                quality: "weak",
                rationale: {
                  ar: "تهديد مباشر دون استكشاف يدفع الطرف الآخر للتصلّب دفاعًا عن نفسه، ويُغلق أي فرصة لكشف قيد حقيقي كان يمكن البناء عليه.",
                  en: "A direct threat with no exploration pushes the other side to harden defensively, closing off any chance of uncovering a real constraint to build on.",
                },
              },
              {
                id: "n1c4",
                label: {
                  ar: "«لا مشكلة، إن دفعتم نصف المبلغ اليوم نعتبر الملف منتهيًا ولن نلاحقكم قانونيًا أبدًا.»",
                  en: "\"No problem — if you pay half today, we'll consider the file closed and never pursue you legally.\"",
                },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "وعد غير مشروع بالتنازل عن حقوق الموكّل القانونية دون تفويض منه، وقبل حتى معرفة الوقائع كاملة — خطأ يُغلق الجلسة فورًا.",
                  en: "An unauthorized promise to waive the client's legal rights, made with no mandate from him and before even the facts are fully known — a mistake that ends the session on the spot.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "«بصراحة، لدينا مشروع جديد يحتاج سيولة خلال ثلاثة أسابيع، وهذا ما يضغط علينا الآن أكثر من أي شيء.»",
              en: "\"Honestly, we have a new project that needs cash within three weeks, and that's what's pressuring us right now more than anything else.\"",
            },
            choices: [
              {
                id: "n2c1",
                label: {
                  ar: "«هذا مفيد أن نعرفه. نقترح دفعة أولى الآن، والباقي على دفعتين خلال شهرين، مع شيك جديد كضمانة موثّقة.»",
                  en: "\"That's useful to know. We propose an upfront instalment now, the rest over two payments within two months, with a new guaranteed cheque as security.\"",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "يبني اقتراحًا محدَّدًا على القيد الحقيقي الذي كُشف للتوّ، ويضيف ضمانة موثّقة تحمي مصلحة الموكّل دون أن يرفض القيد الزمني للطرف الآخر.",
                  en: "Builds a specific proposal on the real constraint just revealed, and adds documented security protecting the client's interest without rejecting the other side's timing constraint.",
                },
              },
              {
                id: "n2c2",
                label: {
                  ar: "«حسنًا، إذن ادفعوا كل شيء بعد ثلاثة أسابيع فقط، بلا أي ضمانة إضافية.»",
                  en: "\"All right, so just pay everything after three weeks, with no additional security.\"",
                },
                nextNodeId: null,
                quality: "acceptable",
                rationale: {
                  ar: "يستجيب للقيد الزمني، لكنه يترك مصلحة الموكّل دون أي حماية إضافية رغم أن الطرف الآخر أثبت للتوّ أنه سبق أن أصدر شيكًا ارتدّ.",
                  en: "Responds to the timing constraint, but leaves the client's interest with no added protection, even though the other side has just shown it already issued one cheque that bounced.",
                },
              },
              {
                id: "n2c3",
                label: {
                  ar: "«لا يهمّنا مشروعكم الجديد؛ المهلة عندنا هي المهلة، ادفعوا خلال أسبوع.»",
                  en: "\"Your new project isn't our concern; our deadline is the deadline — pay within a week.\"",
                },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "تجاهل تام لقيد حقيقي كُشف للتو بثقة، وهذا يدفع الطرف الآخر للتراجع عن أي انفتاح مستقبلي ويضيع فرصة اتفاق واقعي.",
                  en: "Flatly ignoring a real constraint that was just shared in confidence, which drives the other side to withdraw future openness and loses the chance at a realistic deal.",
                },
              },
              {
                id: "n2c4",
                label: {
                  ar: "«بما أنكم بحاجة ماسة للسيولة، سنُسقط نصف المبلغ فورًا مقابل التوقيع اليوم.»",
                  en: "\"Since you're in urgent need of cash, we'll drop half the amount right now in exchange for signing today.\"",
                },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "التزام فوري بإسقاط نصف حق الموكّل دون أي تفويض منه بهذا المقدار، واستغلال معلومة كُشفت بثقة كأداة للتنازل الفوري بدل بناء اقتراح متوازن عليها.",
                  en: "An immediate commitment to drop half the client's claim with no authorization for that amount, exploiting information shared in confidence as a lever for an instant giveaway instead of building a balanced proposal on it.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.ni.03.5",
        kind: "reflection",
        skillId: "skill.reading-the-counterpart",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع تفاوضًا افترضت فيه دافع الطرف الآخر دون أن تسأله. هل كان افتراضك صحيحًا؟",
          en: "Recall a negotiation where you assumed the other side's motive without asking. Was your assumption correct?",
        },
        followUp: {
          ar: "ما السؤال المفتوح الذي كان يمكن أن يكشف لك الجواب الحقيقي بدل التخمين؟",
          en: "What open question could have surfaced the real answer instead of your guess?",
        },
      },
    ],
    summaryCard: {
      id: "card.ni.03",
      title: {
        ar: "الموقف ليس المصلحة",
        en: "The Position Is Not the Interest",
      },
      whatYouLearned: {
        ar: [
          "الموقف المعلن جملة معدّة سلفًا؛ المصلحة الحقيقية تتسرّب بسؤال مفتوح وودّي لا بمساومة على الرقم.",
          "الضغط المبكر يُغلق الباب على أي معلومة حسّاسة؛ الهدوء يفتحه.",
          "طبع الطرف الآخر يحدّد وتيرة الأسئلة، لا قالبًا واحدًا يُطبَّق على الجميع.",
        ],
        en: [
          "A stated position is one prepared sentence; the real interest leaks out through an open, friendly question, not through haggling over the number.",
          "Early pressure closes the door on sensitive information; calm opens it.",
          "The other side's style sets the pace of your questions, not a single template applied to everyone.",
        ],
      },
      framework: {
        name: {
          ar: "قراءة الطرف الآخر: لاحظ · اسأل بهدوء · اختبر · لا تضغط مبكرًا",
          en: "Reading the Counterpart: Notice · Ask Calmly · Test · Never Pressure Early",
        },
        steps: [
          { ar: "لاحظ — تكرار غير مطلوب، أو توقّف قبل جواب بسيط.", en: "Notice — unprompted repetition, or a pause before a simple answer." },
          { ar: "اسأل بهدوء — سؤال مفتوح وودّي عمّا يحلّ الملف من جهتهم.", en: "Ask calmly — an open, friendly question about what would solve it from their side." },
          { ar: "اختبر — تحقّق من أي فرضية بسؤال محدَّد قبل البناء عليها.", en: "Test — verify any hypothesis with a specific question before building on it." },
          { ar: "لا تضغط مبكرًا — أي معلومة حسّاسة تُستخدم كتهديد تُغلق فورًا.", en: "Never pressure early — any sensitive information used as a threat shuts down instantly." },
        ],
      },
      rememberThis: {
        ar: "من يفاوض مع الموقف المعلن وحده يفاوض مع واجهة. المصلحة خلفها هي ما يقرّر الاتفاق.",
        en: "Whoever negotiates only against the stated position negotiates against a façade. The interest behind it is what actually decides the deal.",
      },
      useItTomorrow: {
        ar: "في تفاوضك القادم، اطرح سؤالًا مفتوحًا وودّيًا واحدًا قبل أي مساومة على الرقم، واكتب ما كشفه.",
        en: "In your next negotiation, ask one open, friendly question before any number-haggling, and write down what it revealed.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.thinking-like-a-lawyer", "src.tools-of-argument", "src.your-brain-at-work"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 04 — Negotiating on Interests, Not Positions
  // =========================================================================
  {
    id: "unit.ni.04",
    chapterId: "ch.ni.running-the-session",
    order: 1,
    title: {
      ar: "التفاوض على المصالح لا المواقف",
      en: "Negotiating on Interests, Not Positions",
    },
    subtitle: {
      ar: "من يبقى عند «مَن يحصل على أي رقم» يخسر الحل الذي يرضي الطرفين معًا",
      en: "Whoever stays stuck on \"who gets which number\" misses the solution that satisfies both sides at once.",
    },
    primarySkillId: "skill.negotiation",
    skillIds: ["skill.negotiation", "skill.reading-the-counterpart"],
    stage: 2,
    estimatedMinutes: 10,
    steps: [
      {
        kind: "hook",
        id: "s.ni.04.hook",
        text: {
          ar: "موظف يطلب تعويضًا أعلى. صاحب العمل يريد رقمًا أقل. كلاهما يتفاوض على رقم واحد بينما الحل الأفضل قد لا يكون رقمًا على الإطلاق.",
          en: "An employee asks for higher compensation. The employer wants a lower number. Both are negotiating one figure, while the better solution may not be a figure at all.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.ni.04.why",
        text: {
          ar: "التفاوض على المواقف يحوّل كل نقاش إلى معركة صفرية: كل ريال يكسبه أحدهما يخسره الآخر. التفاوض على المصالح يفتح حلولًا لا تظهر إلا حين تُسأل: لماذا تريد هذا الرقم فعلًا؟",
          en: "Negotiating on positions turns every discussion into a zero-sum fight: every riyal one side gains, the other loses. Negotiating on interests opens solutions that only appear once you ask: why do you actually want that figure?",
        },
      },
      {
        kind: "learning_goal",
        id: "s.ni.04.goals",
        goals: {
          ar: [
            "أن تميّز بين موقف الطرفين ومصلحتهما الكامنة خلف الرقم.",
            "أن تعيد صياغة نزاع على رقم واحد إلى مقايضة تخلق قيمة للطرفين.",
            "أن تقترح حزمة تجمع أكثر من عنصر بدل التمسّك برقم واحد فقط.",
          ],
          en: [
            "Distinguish both sides' positions from the underlying interest behind the figure.",
            "Reframe a single-figure dispute into a value-creating trade for both sides.",
            "Propose a package combining more than one element instead of holding to a single number.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.ni.04.lesson",
        title: {
          ar: "خلف كل رقم مصلحة",
          en: "Behind every figure, an interest",
        },
        body: {
          ar: [
            "الموقف هو الرقم المُعلن. المصلحة هي السبب الذي يجعل هذا الرقم مهمًا لصاحبه — وغالبًا يمكن تحقيق المصلحة بأكثر من طريقة.",
            "موظف يطلب تعويضًا أعلى قد تكون مصلحته الحقيقية استقرارًا ماليًا لأشهر قليلة، أو خطاب توصية يحفظ سمعته المهنية، أو استمرار التأمين الصحي.",
            "صاحب العمل الذي يرفض الرقم قد تكون مصلحته الحقيقية حماية سرّية معلومات العملاء، أو تجنّب سابقة تُستخدم في نزاعات مستقبلية، لا الرقم بحدّ ذاته.",
            "حين تتضح المصالح، يصبح الحل حزمة لا رقمًا واحدًا: مبلغ أقل مما طُلب، مع خطاب توصية وتمديد تأمين صحي شهرين — يربح فيها الطرفان أكثر مما كانا سيربحان من مساومة على رقم واحد.",
            "الفخّ الشائع: افتراض أن مصلحتك تشبه مصلحة الطرف الآخر. لا تبني على هذا الافتراض؛ اسأل، ثم اقترح.",
          ],
          en: [
            "The position is the stated figure. The interest is the reason that figure matters to its holder — and the interest can often be met in more than one way.",
            "An employee asking for higher compensation may have a real interest in financial stability for a few months, or a reference letter that protects his professional reputation, or continued health coverage.",
            "An employer refusing the figure may have a real interest in protecting client confidentiality, or avoiding a precedent used in future disputes, rather than the figure itself.",
            "Once the interests are clear, the solution becomes a package, not one number: a lower amount than requested, plus a reference letter and two extra months of health coverage — both sides gain more than they would have from haggling over a single figure.",
            "The common trap: assuming your interest resembles the other side's. Do not build on that assumption; ask, then propose.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.ni.04.visual",
        title: {
          ar: "من لغة الموقف إلى لغة المصلحة",
          en: "From position-language to interest-language",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "لغة الموقف", en: "Position-language" },
            detail: {
              ar: "«أريد تعويضًا لا يقلّ عن ثلاثة رواتب.» رقم واحد، لا مجال للمقايضة.",
              en: "\"I want compensation of no less than three months' salary.\" One number, no room for a trade.",
            },
            tone: "negative",
          },
          {
            label: { ar: "لغة المصلحة", en: "Interest-language" },
            detail: {
              ar: "«أحتاج استقرارًا ماليًا لبضعة أشهر ريثما أجد عملًا جديدًا، وخطاب توصية يحفظ سمعتي.» يفتح أكثر من حل ممكن.",
              en: "\"I need financial stability for a few months while I find new work, and a reference letter that protects my reputation.\" Opens more than one possible solution.",
            },
            tone: "positive",
          },
          {
            label: { ar: "الحزمة الناتجة", en: "The resulting package" },
            detail: {
              ar: "تعويض أقل من المطلوب + خطاب توصية + تمديد تأمين صحي شهرين. كلفة أقل على صاحب العمل، وقيمة أعلى للموظف.",
              en: "Lower compensation than requested + a reference letter + two extra months of health coverage. Lower cost to the employer, higher value to the employee.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.ni.04.worked",
        strong: {
          label: {
            ar: "محامٍ يعيد الصياغة إلى حزمة",
            en: "A lawyer reframing into a package",
          },
          text: {
            ar: [
              "«أفهم أن ثلاثة رواتب رقم مهم لموكّلك. هل يمكن أن أسأل: هل الأولوية هي مبلغ محدَّد، أم استقرار خلال فترة البحث عن عمل جديد؟»",
              "«إن كانت الأولوية الاستقرار، نقترح راتبين نقدًا بالإضافة إلى تمديد التأمين الصحي شهرين وخطاب توصية موقّع من المدير العام.»",
            ],
            en: [
              "\"I understand three months' salary is an important figure for your client. May I ask: is the priority a specific amount, or stability during the job search?\"",
              "\"If the priority is stability, we propose two months' salary in cash, plus two extra months of health coverage and a reference letter signed by the general manager.\"",
            ],
          },
          why: {
            ar: "السؤال يفصل المصلحة عن الموقف قبل اقتراح أي حل. والحزمة تجمع عناصر أرخص على صاحب العمل من راتب إضافي كامل، لكنها أعلى قيمة فعلية للموظف الباحث عن استقرار وسمعة، لا رقم فقط.",
            en: "The question separates interest from position before proposing any solution. The package combines elements cheaper for the employer than a full extra salary, yet higher in real value for an employee seeking stability and reputation, not merely a number.",
          },
        },
        weak: {
          label: {
            ar: "مساومة بقيت عند الرقم وحده",
            en: "A haggle that stayed stuck on the number alone",
          },
          text: {
            ar: [
              "«ثلاثة رواتب مبالغ فيها؛ نعرض راتبًا ونصف، خذوه أو اتركوه.»",
              "«لن نزيد قرشًا، هذا سقفنا النهائي.»",
            ],
            en: [
              "\"Three months' salary is excessive; we offer a month and a half, take it or leave it.\"",
              "\"We won't add a single piaster, this is our final ceiling.\"",
            ],
          },
          why: {
            ar: "المساومة بقيت بأكملها داخل الموقفين الافتتاحيين: رقم يتحرّك صعودًا ونزولًا فقط. لم يُسأل عمّا وراء الرقم، فضاعت فرصة حزمة أرخص على صاحب العمل وأكثر إرضاءً للموظف معًا.",
            en: "The haggle stayed entirely within the two opening positions: a number moving up and down only. Nobody asked what lay behind the figure, so the chance of a package cheaper for the employer and more satisfying to the employee together was lost.",
          },
        },
      },
      { kind: "activity", id: "s.ni.04.a1", activityId: "act.ni.04.1", mode: "quick" },
      { kind: "activity", id: "s.ni.04.a2", activityId: "act.ni.04.2", mode: "guided" },
      { kind: "activity", id: "s.ni.04.a3", activityId: "act.ni.04.3", mode: "guided" },
      { kind: "activity", id: "s.ni.04.a4", activityId: "act.ni.04.4", mode: "independent" },
      { kind: "activity", id: "s.ni.04.a5", activityId: "act.ni.04.5", mode: "independent" },
      { kind: "summary", id: "s.ni.04.summary", summaryCardId: "card.ni.04" },
      {
        kind: "apply_tomorrow",
        id: "s.ni.04.apply",
        task: {
          ar: "في تفاوضك القادم على رقم واحد، اسأل نفسك وموكّلك والطرف الآخر: ما المصلحة خلف هذا الرقم فعلًا؟",
          en: "In your next single-figure negotiation, ask yourself, your client and the other side: what interest actually sits behind this figure?",
        },
        detail: {
          ar: "اكتب عنصرين على الأقل يمكن إضافتهما إلى الحزمة غير الرقم نفسه، قبل أن تدخل الجلسة.",
          en: "Write down at least two elements besides the figure itself that could be added to the package, before you enter the session.",
        },
      },
      {
        kind: "next_mission",
        id: "s.ni.04.next",
        teaser: {
          ar: "تعرف الآن كيف تبني حزمة تخلق قيمة. الوحدة القادمة: تطبيق كل ما سبق في محاكاة تفاوض تسوية حقيقي من أوله إلى آخره.",
          en: "You now know how to build a value-creating package. Next unit: applying everything so far in a full, real settlement-negotiation simulation from start to finish.",
        },
      },
    ],
    activities: [
      {
        id: "act.ni.04.1",
        kind: "true_false",
        skillId: "skill.negotiation",
        stage: 2,
        prompt: {
          ar: "«التفاوض على المصالح يعني دائمًا أن يحصل الموظف على مبلغ أعلى من الرقم الذي عرضه صاحب العمل أولًا.»",
          en: "\"Negotiating on interests always means the employee ends up with a higher amount than the employer's first offer.\"",
        },
        options: [
          {
            id: "true",
            label: { ar: "صحيح", en: "True" },
            rationale: {
              ar: "غير صحيح. التفاوض على المصالح قد ينتج مبلغًا نقديًا أقل مما طُلب أو عُرض، مقابل عناصر أخرى (خطاب توصية، تأمين صحي) تخدم المصلحة الحقيقية أكثر من الرقم وحده.",
              en: "Incorrect. Interest-based negotiation may produce a cash amount lower than what was asked or offered, in exchange for other elements (a reference letter, health coverage) that serve the real interest better than the figure alone.",
            },
          },
          {
            id: "false",
            label: { ar: "خطأ", en: "False" },
            correct: true,
            rationale: {
              ar: "صحيح. الهدف ليس مبلغًا أعلى بالضرورة، بل حزمة تخدم المصلحة الحقيقية للطرفين معًا — وقد تكون كلفتها الإجمالية على صاحب العمل أقل من رقم نقدي أعلى.",
              en: "Correct. The goal is not necessarily a higher amount, but a package serving both sides' real interests — and its total cost to the employer may be lower than a higher cash figure alone.",
            },
          },
        ],
      },
      {
        id: "act.ni.04.2",
        kind: "fill_blank",
        skillId: "skill.negotiation",
        stage: 2,
        prompt: {
          ar: "أكمل إعادة صياغة الموقف بلغة المصلحة.",
          en: "Complete the reframing of the position into interest-language.",
        },
        hint: {
          ar: "لغة المصلحة تسأل «لماذا هذا الرقم مهم؟» بدل تكرار الرقم نفسه.",
          en: "Interest-language asks \"why does this figure matter?\" instead of repeating the figure itself.",
        },
        template: {
          ar: "موقف الموظف: «أريد ثلاثة رواتب.» بلغة المصلحة: «أحتاج {{0}} لبضعة أشهر ريثما أجد عملًا جديدًا، و{{1}} يحفظ سمعتي المهنية أمام أصحاب العمل القادمين.»",
          en: "The employee's position: \"I want three months' salary.\" In interest-language: \"I need {{0}} for a few months while I find new work, and {{1}} that protects my professional reputation with future employers.\"",
        },
        blanks: [
          {
            id: "b1",
            options: [
              { ar: "استقرارًا ماليًا", en: "financial stability" },
              { ar: "سيارة جديدة", en: "a new car" },
              { ar: "ترقية وظيفية", en: "a job promotion" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "الاستقرار المالي المؤقت هو المصلحة الأكثر ترجيحًا خلف طلب تعويض نهاية خدمة؛ العناصر الأخرى غير متصلة بموضوع التسوية.",
              en: "Temporary financial stability is the most plausible interest behind a termination-compensation demand; the other elements are unrelated to a settlement's subject matter.",
            },
          },
          {
            id: "b2",
            options: [
              { ar: "خطاب توصية", en: "a reference letter" },
              { ar: "بدل سفر", en: "a travel allowance" },
              { ar: "عضوية نادٍ", en: "a club membership" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "خطاب التوصية يخاطب مباشرة مصلحة حفظ السمعة المهنية أمام أصحاب عمل مستقبليين؛ العنصران الآخران لا علاقة لهما بهذه المصلحة.",
              en: "A reference letter speaks directly to the interest of protecting professional reputation with future employers; the other two elements have nothing to do with that interest.",
            },
          },
        ],
      },
      {
        id: "act.ni.04.3",
        kind: "multiple_select",
        skillId: "skill.negotiation",
        secondarySkillIds: ["skill.reading-the-counterpart"],
        stage: 2,
        context: {
          ar: [
            "تفاوض على تسوية إنهاء خدمة موظف بعد سبع سنوات. صاحب العمل يريد تجنّب سابقة تُستخدم في نزاعات مستقبلية وحماية سرّية بيانات العملاء.",
            "الموظف يريد استقرارًا ماليًا مؤقتًا وسمعة مهنية محفوظة.",
          ],
          en: [
            "You are negotiating a termination settlement after seven years of service. The employer wants to avoid a precedent usable in future disputes, and to protect client-data confidentiality.",
            "The employee wants temporary financial stability and a protected professional reputation.",
          ],
        },
        prompt: {
          ar: "اختر كل عنصر يصلح لأن يكون جزءًا من حزمة تخلق قيمة للطرفين معًا.",
          en: "Select every element that could reasonably form part of a package creating value for both sides.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "مبلغ تسوية أقل من المطالبة الأصلية، مصحوبًا ببند سرّية يحمي صاحب العمل من استخدام الملف كسابقة.",
              en: "A settlement amount lower than the original claim, paired with a confidentiality clause protecting the employer from the file being used as a precedent.",
            },
            correct: true,
            rationale: {
              ar: "يخاطب مصلحة صاحب العمل (تجنّب السابقة) مقابل تخفيض المبلغ — مقايضة تخلق قيمة للطرفين.",
              en: "Speaks to the employer's interest (avoiding a precedent) in exchange for a lower amount — a trade creating value for both sides.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "خطاب توصية محايد موقّع من المدير العام، بلا كلفة إضافية على صاحب العمل.",
              en: "A neutral reference letter signed by the general manager, at no added cost to the employer.",
            },
            correct: true,
            rationale: {
              ar: "يخاطب مصلحة الموظف في حفظ سمعته بكلفة شبه معدومة على صاحب العمل — مقايضة نموذجية خالقة للقيمة.",
              en: "Speaks to the employee's interest in protecting his reputation at near-zero cost to the employer — a textbook value-creating trade.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "تمديد التأمين الصحي شهرين إضافيين ضمن المبلغ الإجمالي المتفق عليه.",
              en: "Extending health coverage by two additional months within the total agreed amount.",
            },
            correct: true,
            rationale: {
              ar: "قيمة عالية للموظف تحتاجها أسرته، بكلفة محدودة نسبيًا على صاحب العمل مقارنة براتب نقدي كامل إضافي.",
              en: "High value to the employee's family, at a relatively limited cost to the employer compared with a full extra cash salary.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "رفع مبلغ التسوية إلى ضعف المطالبة الأصلية دون أي مقابل من الموظف.",
              en: "Doubling the settlement amount above the original claim with nothing given in return by the employee.",
            },
            rationale: {
              ar: "ليس مقايضة بل تنازلًا أحاديًا لا يخدم أي مصلحة لصاحب العمل، ويتجاوز على الأرجح أي تفويض معقول.",
              en: "Not a trade but a one-sided giveaway serving no interest of the employer, and one that likely exceeds any plausible mandate.",
            },
          },
          {
            id: "o5",
            label: {
              ar: "إسقاط بند السرّية بالكامل مقابل تسريع موعد الدفع بيوم واحد فقط.",
              en: "Dropping the confidentiality clause entirely in exchange for speeding up payment by only one day.",
            },
            rationale: {
              ar: "مقايضة غير متوازنة: يتنازل صاحب العمل عن مصلحة جوهرية (تجنّب السابقة) مقابل عنصر شكلي لا يخدم مصلحة حقيقية للموظف.",
              en: "An unbalanced trade: the employer gives up a substantive interest (avoiding a precedent) for a token element that serves no real interest of the employee.",
            },
          },
        ],
      },
      {
        id: "act.ni.04.4",
        kind: "short_written",
        skillId: "skill.negotiation",
        secondarySkillIds: ["skill.persuasive-argument"],
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.negotiation-written.v1",
        weight: 2,
        minChars: 220,
        context: {
          ar: [
            "تمثّل مجموعة فنادق تنهي خدمة موظف إداري بعد سبع سنوات ضمن إعادة هيكلة.",
            "طالب محامي الموظف بثلاثة رواتب تعويضًا؛ عرضك الأول راتب ونصف.",
            "علمت من الجلسة السابقة أن أولوية الموظف الفعلية استقرار مالي لثلاثة أشهر وخطاب توصية، لا الرقم بحدّ ذاته.",
          ],
          en: [
            "You represent a hotel group ending an administrative employee's service after seven years, as part of a restructuring.",
            "The employee's lawyer demanded three months' salary in compensation; your first offer was a month and a half.",
            "You learned from the previous session that the employee's real priority is three months of financial stability and a reference letter, not the figure itself.",
          ],
        },
        prompt: {
          ar: "اكتب رسالة تسوية قصيرة (٦٠–٩٠ كلمة) تقترح حزمة تخاطب هذه المصلحة بدل تكرار المساومة على الرقم وحده.",
          en: "Write a short settlement letter (60-90 words) proposing a package that speaks to this interest instead of continuing to haggle over the figure alone.",
        },
        modelAnswer: {
          ar: [
            "«نقترح تسوية تشمل راتبين نقدًا (بدل الراتب ونصف المعروض)، إضافة إلى تمديد التأمين الصحي شهرًا إضافيًا وخطاب توصية موقّع من المدير العام يوضح سنوات الخدمة وطبيعتها الإيجابية.»",
            "«نرى أن هذه الحزمة تحقق الاستقرار المالي المطلوب لفترة البحث عن عمل جديد، وتحفظ السمعة المهنية بما يفوق قيمة راتب إضافي واحد فقط.»",
            "«نأمل ردّكم خلال خمسة أيام عمل لإتمام محضر التسوية.»",
          ],
          en: [
            "\"We propose a settlement of two months' cash (up from the month-and-a-half offered), plus one additional month of health coverage and a reference letter signed by the general manager confirming the years and positive nature of the service.\"",
            "\"We believe this package delivers the financial stability needed during the job search and protects professional reputation in a way that exceeds the value of one additional cash salary alone.\"",
            "\"We look forward to your response within five business days to finalize the settlement record.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«نرفع عرضنا إلى راتبين، وهذا سقفنا النهائي ولن نزيد.»",
            ],
            en: [
              "\"We're raising our offer to two months' salary, and that's our final ceiling — we won't go higher.\"",
            ],
          },
          whatIsWrong: {
            ar: "بقيت الرسالة عند الرقم وحده رغم معرفة أن المصلحة الحقيقية أوسع من ذلك، فأهدرت فرصة حزمة أرخص على الموكّل وأكثر إقناعًا للطرف الآخر. كما أن «سقفنا النهائي» يُقفل الباب دون أي دعوة للردّ.",
            en: "The letter stays stuck on the figure alone despite knowing the real interest is broader, wasting the chance at a package cheaper for the client and more persuasive to the other side. \"Our final ceiling\" also shuts the door with no invitation to respond.",
          },
        },
      },
      {
        id: "act.ni.04.5",
        kind: "reflection",
        skillId: "skill.negotiation",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع نزاعًا بقي تفاوضه عند رقم واحد حتى النهاية. ما العنصر غير المالي الذي لم يُطرح ولو مرة؟",
          en: "Recall a dispute where the negotiation stayed stuck on one figure until the end. What non-financial element was never once raised?",
        },
        followUp: {
          ar: "لو طُرح ذلك العنصر، هل كان يمكن أن يقرّب الطرفين أسرع من المساومة على الرقم؟",
          en: "If that element had been raised, could it have brought both sides closer, faster than haggling over the figure?",
        },
      },
    ],
    summaryCard: {
      id: "card.ni.04",
      title: {
        ar: "من الرقم إلى الحزمة",
        en: "From the Figure to the Package",
      },
      whatYouLearned: {
        ar: [
          "التفاوض على المواقف معركة صفرية؛ التفاوض على المصالح يفتح حلولًا لا تظهر إلا بالسؤال.",
          "المصلحة الحقيقية خلف الرقم قد تُشبَع بأكثر من طريقة، ليست بالضرورة رقمًا أعلى.",
          "الحزمة التي تجمع أكثر من عنصر غالبًا أرخص على طرف وأعلى قيمة للآخر من رقم واحد يتحرّك صعودًا ونزولًا.",
        ],
        en: [
          "Negotiating on positions is a zero-sum fight; negotiating on interests opens solutions that only appear once you ask.",
          "The real interest behind a figure can often be met in more than one way — not necessarily a higher number.",
          "A package combining more than one element is often cheaper for one side and higher-value for the other than a single figure moving up and down.",
        ],
      },
      framework: {
        name: {
          ar: "من الموقف إلى الحزمة: اسأل لماذا · افصل المصلحة عن الرقم · اقترح حزمة",
          en: "From Position to Package: Ask Why · Separate Interest from Figure · Propose a Package",
        },
        steps: [
          { ar: "اسأل لماذا — ما الذي يجعل هذا الرقم مهمًا لصاحبه فعلًا؟", en: "Ask why — what actually makes this figure matter to its holder?" },
          { ar: "افصل المصلحة عن الرقم — قد تُشبَع المصلحة بعناصر غير مالية.", en: "Separate interest from figure — the interest may be met with non-financial elements." },
          { ar: "اقترح حزمة — عنصران أو أكثر يخدمان مصلحة الطرفين معًا.", en: "Propose a package — two or more elements serving both sides' interests together." },
        ],
      },
      rememberThis: {
        ar: "من يبقى عند «مَن يحصل على أي رقم» يخسر الحل الأفضل الذي كان بانتظار سؤال واحد.",
        en: "Whoever stays stuck on \"who gets which number\" misses the better solution that was waiting for one question.",
      },
      useItTomorrow: {
        ar: "في نزاعك القادم على رقم واحد، اكتب عنصرين غير ماليين يمكن أن يدخلا الحزمة قبل أن تدخل الجلسة.",
        en: "In your next single-figure dispute, write down two non-financial elements that could enter the package before you walk into the session.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.how-to-argue-and-win", "src.tools-of-argument", "src.thinking-like-a-lawyer"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 05 — Practicing a Real Settlement Negotiation
  // =========================================================================
  {
    id: "unit.ni.05",
    chapterId: "ch.ni.running-the-session",
    order: 2,
    title: {
      ar: "التدرّب على تفاوض تسوية حقيقي",
      en: "Practicing a Real Settlement Negotiation",
    },
    subtitle: {
      ar: "كل ما تعلمته حتى الآن يُختبر الآن في جلسة واحدة كاملة",
      en: "Everything you have learned so far is tested now, in one complete session.",
    },
    primarySkillId: "skill.persuasive-argument",
    skillIds: ["skill.persuasive-argument", "skill.reading-the-counterpart", "skill.negotiation"],
    stage: 3,
    estimatedMinutes: 12,
    steps: [
      {
        kind: "hook",
        id: "s.ni.05.hook",
        text: {
          ar: "أرقامك الثلاثة جاهزة. حجتك مسندة بدليل. تعرف كيف تقرأ ما لا يُقال. الآن عليك أن تجلس أمام محامٍ متمرّس ويطلب 430,000 ريال.",
          en: "Your three numbers are ready. Your argument is grounded in evidence. You know how to read what is not said. Now you have to sit across from a seasoned lawyer demanding 430,000 SAR.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.ni.05.why",
        text: {
          ar: "معرفة القواعد نظريًا لا تكفي. الفرق بين مفاوض يتحكّم بالجلسة ومن يفقد زمامها يظهر فقط حين تتحرّك الأرقام أمامه وتحت ضغط وقت حقيقي.",
          en: "Knowing the rules in theory is not enough. The difference between a negotiator who controls the session and one who loses it only shows once the numbers start moving in front of him, under real time pressure.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.ni.05.goals",
        goals: {
          ar: [
            "أن تختبر موقفًا افتتاحيًا مرتفعًا بحجة مسندة بمعيار موضوعي، لا باستسلام أو مواجهة.",
            "أن تستكشف مصلحة الطرف الآخر الحقيقية بأسئلة هادئة قبل أي مساومة على الرقم.",
            "أن تبقى ضمن سقف تفويضك، وتُغلق الجلسة برقم أو بخطوة تالية واضحة.",
          ],
          en: [
            "Test a high opening position with an argument grounded in an objective standard, not with capitulation or confrontation.",
            "Explore the other side's real interest through calm questions before any number-haggling.",
            "Stay inside your mandate's ceiling, and close the session on a figure or a clear next step.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.ni.05.lesson",
        title: {
          ar: "الملف والجلسة",
          en: "The file and the session",
        },
        body: {
          ar: [
            "تمثّل شركة دار الأفق العقارية، مالكة مبنى تجاري من ثلاثة طوابق في الرياض. أنهت شركة الروضة للمقاولات أعمال ترميم بقيمة 1,150,000 ريال قبل خمسة أشهر.",
            "حجب موكّلك الدفعتين الأخيرتين (340,000 ريال) بعد أن رصد مهندسه تسرّب مياه في قسم من مواقف السيارات وفروقًا في تمديدات التكييف عن المخطّط المعتمد.",
            "منحك الشريك المسؤول سقفًا للتسوية لا يتجاوز 300,000 ريال، وطلب صراحةً عدم الالتزام بأي رقم أعلى دون العودة إليه أولًا.",
            "محامي المقاول، الأستاذ كريم دياب، يطالب بكامل الدفعتين إضافة إلى 90,000 ريال تعويضًا عن تأخير سبّبه — بحسب زعمه — تعديل متكرّر طلبه مهندس موكّلك؛ 430,000 ريال إجمالًا، ويهدّد بالتحكيم خلال أسبوعين.",
            "هذه الجلسة تجمع كل ما تدرّبت عليه: أرقامك الثلاثة، حجة مسندة بمعيار موضوعي (تقرير المهندس)، وقراءة هادئة لما وراء تهديد التحكيم.",
          ],
          en: [
            "You represent Dar Al-Ofoq Real Estate, which owns a three-storey commercial building in Riyadh. Al-Rawda Contracting finished renovation work worth 1,150,000 SAR five months ago.",
            "Your client withheld the last two payments (340,000 SAR) after his engineer found water seepage in part of the parking area and HVAC ducting that differed from the approved drawings.",
            "The responsible partner has given you a settlement ceiling of 300,000 SAR, and explicitly asked that you not commit to any higher figure without checking back with him first.",
            "The contractor's lawyer, Kareem Diab, is demanding both withheld payments in full plus 90,000 SAR for a delay he claims your client's engineer caused through repeated changes — 430,000 SAR in total — and is threatening arbitration within two weeks.",
            "This session brings together everything you have practiced: your three numbers, an argument grounded in an objective standard (the engineer's report), and a calm read of what lies behind the arbitration threat.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.ni.05.visual",
        title: {
          ar: "خط سير جلسة التسوية",
          en: "Timeline of the settlement session",
        },
        variant: "timeline",
        items: [
          {
            label: { ar: "الافتتاح — اختبار الموقف", en: "Opening — testing the position" },
            detail: {
              ar: "ردّ مضادّ مسند بتقرير المهندس، لا استسلام ولا مواجهة.",
              en: "A counter-position grounded in the engineer's report, neither a cave nor a confrontation.",
            },
            tone: "positive",
          },
          {
            label: { ar: "المنتصف — استكشاف المصلحة", en: "Middle — exploring the interest" },
            detail: {
              ar: "سؤال مفتوح وودّي عن وضع المقاول وجدوله؛ لا إلحاح ولا تهديد.",
              en: "An open, friendly question about the contractor's situation and timeline; no urgency, no threat.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "لحظة الضغط — تهديد التحكيم", en: "The pressure point — the arbitration threat" },
            detail: {
              ar: "هدوء وإعادة تأطير نحو المصلحة المشتركة، لا تصعيد ولا تراجع فوري.",
              en: "Calm and a reframe toward shared interest, no escalation and no immediate retreat.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الإغلاق — حزمة أو خطوة تالية", en: "Closing — a package or a next step" },
            detail: {
              ar: "مبلغ + جدول دفع + شرط تحقّق فني، أو موعد ومسؤول محدَّدان.",
              en: "An amount plus a payment schedule plus a technical-verification condition, or a specific date and owner.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.ni.05.worked",
        strong: {
          label: {
            ar: "ردّ افتتاحي مسند بمعيار موضوعي",
            en: "An opening response grounded in an objective standard",
          },
          text: {
            ar: [
              "«أقدّر وضوح موقفكم. تقرير مهندسنا يوثّق تسرّب مياه في قسم من المواقف وفروقًا في تمديدات التكييف عن المخطّط المعتمد — وهذا أساس حجب الدفعتين.»",
              "«بخصوص بند التأخير، هل يوجد إخطار رسمي أُرسل لموكّلي في حينه؟ لأن ملفنا لا يحتوي على أي مراسلة كهذه.»",
            ],
            en: [
              "\"I appreciate the clarity of your position. Our engineer's report documents water seepage in part of the parking area and HVAC ducting that differs from the approved drawings — that is the basis for withholding the two payments.\"",
              "\"On the delay item, was any formal notice sent to my client at the time? Our file contains no such correspondence.\"",
            ],
          },
          why: {
            ar: "الردّ يستند إلى مستند محدَّد لا إلى رفض عام، ويتحدّى بند التأخير بسؤال هادئ عن الإثبات بدل الطعن في نية الطرف الآخر — وهذا يفتح الباب لتنازل محتمل دون أي مواجهة.",
            en: "The response rests on a specific document rather than a blanket refusal, and challenges the delay item with a calm question about evidence rather than an attack on the other side's good faith — opening the door to a possible concession with no confrontation at all.",
          },
        },
        weak: {
          label: {
            ar: "استسلام مبكر أو مواجهة مبكرة",
            en: "Early capitulation or early confrontation",
          },
          text: {
            ar: [
              "«حسنًا، هذا رقم كبير لكن ربما نقترب منه لتفادي التحكيم.»",
              "«أو: أنتم تبالغون في هذا المبلغ بشكل غير مهني، وهذا ادّعاء كيدي.»",
            ],
            en: [
              "\"All right, that's a large number but maybe we can get close to it to avoid arbitration.\"",
              "\"Or: you're inflating this amount unprofessionally — this is a bad-faith claim.\"",
            ],
          },
          why: {
            ar: "الجملة الأولى تكشف مرونة مبكرة دون أي اختبار للموقف، فترفع سقف توقّعات كريم فورًا. والثانية تتّهم بسوء النية دون دليل، وهذا في سوق يتكرر فيه التعامل بين المحامين يُغلق باب المرونة ويهدّد علاقة مهنية طويلة الأمد.",
            en: "The first line reveals early flexibility with no testing of the position at all, instantly raising Kareem's expectations. The second accuses bad faith with no evidence, which in a market where lawyers deal with each other repeatedly shuts the door on flexibility and threatens a long-term professional relationship.",
          },
        },
      },
      { kind: "activity", id: "s.ni.05.a1", activityId: "act.ni.05.1", mode: "quick" },
      { kind: "activity", id: "s.ni.05.a2", activityId: "act.ni.05.2", mode: "guided" },
      { kind: "activity", id: "s.ni.05.a3", activityId: "act.ni.05.3", mode: "guided" },
      { kind: "activity", id: "s.ni.05.a4", activityId: "act.ni.05.4", mode: "independent" },
      { kind: "simulation", id: "s.ni.05.sim", scenarioId: "scn.negotiation-settlement-offer" },
      { kind: "activity", id: "s.ni.05.a5", activityId: "act.ni.05.5", mode: "independent" },
      { kind: "summary", id: "s.ni.05.summary", summaryCardId: "card.ni.05" },
      {
        kind: "apply_tomorrow",
        id: "s.ni.05.apply",
        task: {
          ar: "قبل تفاوضك الحقيقي القادم، اكتب على ورقة واحدة: أرقامك الثلاثة، معيارًا موضوعيًا واحدًا يسند موقفك، وسؤالًا مفتوحًا واحدًا لاستكشاف مصلحة الطرف الآخر.",
          en: "Before your next real negotiation, write on one sheet: your three numbers, one objective standard supporting your position, and one open question to explore the other side's interest.",
        },
        detail: {
          ar: "احمل الورقة معك، وعُد إليها إن شعرت أن الجلسة بدأت تنجرف بعيدًا عن حدودك.",
          en: "Carry the sheet with you, and return to it if you feel the session starting to drift away from your limits.",
        },
      },
      {
        kind: "next_mission",
        id: "s.ni.05.next",
        teaser: {
          ar: "أتممت أول تفاوض تسوية كامل. الوحدة القادمة في هذا الفصل تنتقل إلى مواجهة طرف يستخدم أساليب ضغط أكثر حدّة — وكيف تحافظ على هدوئك دون أن تخسر الملف.",
          en: "You have completed your first full settlement negotiation. The next unit in this chapter moves to facing a counterpart who uses sharper pressure tactics — and how to stay calm without losing the file.",
        },
      },
    ],
    activities: [
      {
        id: "act.ni.05.1",
        kind: "multiple_choice",
        skillId: "skill.negotiation",
        stage: 3,
        context: {
          ar: [
            "تمثّل دار الأفق العقارية أمام محامي المقاول الذي يطالب بـ430,000 ريال. سقفك 300,000 ريال، ولا تتجاوزه دون العودة إلى الشريك المسؤول.",
          ],
          en: [
            "You represent Dar Al-Ofoq against the contractor's lawyer, who is demanding 430,000 SAR. Your ceiling is 300,000 SAR, and you must not exceed it without checking back with the responsible partner.",
          ],
        },
        prompt: {
          ar: "ما حدّك الأدنى الصحيح للجلسة، بناءً على الوقائع أعلاه فقط؟",
          en: "Based only on the facts above, what is your correct floor for the session?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "430,000 ريال — رقم المقاول المطلوب، لأنه الأساس المتاح الوحيد.",
              en: "430,000 SAR — the contractor's demand, because it is the only figure available.",
            },
            rationale: {
              ar: "هذا رقم الطرف الآخر لا رقمك. تبنّيه كحدّ أدنى لك يُلغي أي مجال للتفاوض من جهتك.",
              en: "This is the other side's figure, not yours. Adopting it as your own floor erases any room for you to negotiate at all.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "300,000 ريال، وهو سقف التفويض الذي منحك إياه الشريك المسؤول، لا يجوز تجاوزه دون إذن.",
              en: "300,000 SAR — the mandate ceiling given by the responsible partner, which may not be exceeded without authorization.",
            },
            correct: true,
            rationale: {
              ar: "هذا هو الحدّ الذي حدّده تفويضك الفعلي. أي رقم أعلى يستوجب التوقّف والعودة إلى الشريك قبل أي التزام.",
              en: "This is the limit your actual mandate sets. Any higher figure requires pausing and checking back with the partner before any commitment.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "لا حدّ أدنى محدَّد؛ يُقرَّر داخل الجلسة حسب أسلوب المحامي المقابل.",
              en: "No fixed floor; it should be decided inside the session depending on the opposing lawyer's style.",
            },
            rationale: {
              ar: "تأجيل الحدّ الأدنى إلى داخل الجلسة يعني اتخاذ القرار تحت الضغط، وهو بالضبط ما يُنتج تنازلات غير مقصودة.",
              en: "Deferring the floor to inside the session means deciding it under pressure — exactly what produces unintended concessions.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "0 ريال، لأن موقف المالك بحجب الدفعتين مبرَّر بالكامل ولا يستحق المقاول شيئًا.",
              en: "0 SAR, because the landlord's withholding of the payments is fully justified and the contractor deserves nothing.",
            },
            rationale: {
              ar: "تجاهل تام لموقف الطرف الآخر رغم وجود عمل منجَز فعليًا؛ موقف كهذا يُغلق أي إمكانية للتسوية ويدفع مباشرة نحو التحكيم.",
              en: "A total dismissal of the other side's position despite genuinely completed work; a stance like this forecloses any settlement and pushes straight toward arbitration.",
            },
          },
        ],
      },
      {
        id: "act.ni.05.2",
        kind: "categorization",
        skillId: "skill.persuasive-argument",
        secondarySkillIds: ["skill.negotiation"],
        stage: 3,
        prompt: {
          ar: "صنّف كل عنصر من الملف: هل هو معيار موضوعي يمكن الاستناد إليه في الحجة، أم مجرد موقف معلن بلا سند بعد؟",
          en: "Sort each element of the file: is it an objective standard that can support the argument, or merely a stated position with no support yet?",
        },
        hint: {
          ar: "المعيار الموضوعي مستند أو واقعة يمكن للطرف الآخر التحقّق منها. الموقف المعلن هو ما يُقال دون إسناد.",
          en: "An objective standard is a document or fact the other side can verify. A stated position is what is said with no support behind it.",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «معيار موضوعي» / «موقف معلن» أسفل كل عنصر بدل السحب.",
          en: "Choose \"Objective standard\" / \"Stated position\" from buttons under each element instead of dragging.",
        },
        buckets: [
          { id: "standard", label: { ar: "معيار موضوعي", en: "Objective standard" } },
          { id: "position", label: { ar: "موقف معلن", en: "Stated position" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "تقرير مهندس موكّلك الذي يوثّق تسرّب المياه وفروقات التكييف.",
              en: "Your client's engineer's report documenting the water seepage and the HVAC discrepancies.",
            },
            bucketId: "standard",
            rationale: {
              ar: "مستند يمكن للطرف الآخر مراجعته والتحقق منه — أساس صلب للحجة.",
              en: "A document the other side can review and verify — solid ground for the argument.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "«المستحقات المحجوبة كاملة 340,000 ريال حقّ لا نقاش فيه.»",
              en: "\"The full withheld amount of 340,000 SAR is a right beyond discussion.\"",
            },
            bucketId: "position",
            rationale: {
              ar: "تأكيد بلا سند مرفق يمكن التحقق منه — موقف معلن يحتاج اختبارًا لا قبولًا فوريًا.",
              en: "An assertion with no verifiable support attached — a stated position needing testing, not immediate acceptance.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "غياب أي إخطار رسمي موثّق يسند مطالبة التأخير بـ90,000 ريال.",
              en: "The absence of any documented formal notice supporting the 90,000 SAR delay claim.",
            },
            bucketId: "standard",
            rationale: {
              ar: "غياب الدليل حقيقة موضوعية يمكن الإشارة إليها لتحدّي بند التأخير دون اتهام الطرف الآخر بسوء النية.",
              en: "A missing piece of evidence is an objective fact that can be pointed to in order to challenge the delay item without accusing the other side of bad faith.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "«موكّلنا مستعد للتحكيم فورًا إن لم نتفق اليوم.»",
              en: "\"Our client is ready to go to arbitration immediately if we don't agree today.\"",
            },
            bucketId: "position",
            rationale: {
              ar: "تصريح نية لا واقعة موثَّقة، ويحتاج اختبارًا هادئًا لا تصديقًا فوريًا ولا تصعيدًا مقابلًا.",
              en: "A statement of intent, not a documented fact — it needs calm testing, not immediate belief and not a counter-escalation.",
            },
          },
        ],
      },
      {
        id: "act.ni.05.3",
        kind: "ordering",
        skillId: "skill.reading-the-counterpart",
        secondarySkillIds: ["skill.negotiation"],
        stage: 3,
        prompt: {
          ar: "رتّب خطوات جلسة التسوية بالترتيب الذي يحمي مصلحة موكّلك دون كشف سقفك مبكرًا.",
          en: "Order the settlement session's steps in the sequence that protects your client's interest without revealing your ceiling too early.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each step instead of dragging.",
        },
        hint: {
          ar: "اختبر الموقف الافتتاحي أولًا، واحفظ الإغلاق بحزمة أو خطوة تالية للنهاية.",
          en: "Test the opening position first, and save the close on a package or next step for last.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "ردّ على الموقف الافتتاحي بحجة مسندة بتقرير المهندس، لا باستسلام أو مواجهة.",
              en: "Respond to the opening position with an argument grounded in the engineer's report, not with capitulation or confrontation.",
            },
            rationale: {
              ar: "أول خطوة لأنها تحدّد نبرة الجلسة كلها: اختبار الموقف بدليل بدل قبوله أو رفضه فورًا.",
              en: "First, because it sets the tone for the whole session: testing the position with evidence instead of accepting or rejecting it on the spot.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "اسأل سؤالًا مفتوحًا وودّيًا عن وضع المقاول وأولوياته الفعلية.",
              en: "Ask an open, friendly question about the contractor's actual situation and priorities.",
            },
            rationale: {
              ar: "يأتي بعد اختبار الموقف، حين يصبح الطرف الآخر أكثر استعدادًا للحديث بعد أن رأى حجة جادة لا ضغطًا فارغًا.",
              en: "Comes after testing the position, once the other side is more willing to talk after seeing a serious argument rather than empty pressure.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "عند التذكير بمهلة التحكيم، ابقَ هادئًا وأعد التأطير نحو المصلحة المشتركة.",
              en: "When reminded of the arbitration deadline, stay calm and reframe toward shared interest.",
            },
            rationale: {
              ar: "يأتي في منتصف الجلسة عادة، بعد أن بدأت الأرقام بالتحرك ويشعر الطرف الآخر بالحاجة للضغط لتسريع النتيجة.",
              en: "Usually comes mid-session, once figures start moving and the other side feels the need to pressure for a faster result.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "اقترح حزمة تسوية محدَّدة (مبلغ + جدول دفع + شرط تحقّق فني) أو خطوة تالية بتاريخ ومسؤول.",
              en: "Propose a specific settlement package (amount plus payment schedule plus a technical-verification condition), or a next step with a date and an owner.",
            },
            rationale: {
              ar: "آخر خطوة لأنها تُبنى على كل ما كُشف من حجج ومصالح في الخطوات السابقة.",
              en: "Last, because it is built on everything the arguments and interests surfaced in the earlier steps.",
            },
          },
        ],
      },
      {
        id: "act.ni.05.4",
        kind: "short_written",
        skillId: "skill.persuasive-argument",
        secondarySkillIds: ["skill.negotiation"],
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.negotiation-written.v1",
        weight: 2,
        minChars: 200,
        context: {
          ar: [
            "قبل الدخول في جلسة التفاوض المباشرة مع محامي المقاول، تريد كتابة الجملة الافتتاحية التي ستستند إليها لاختبار موقفه.",
          ],
          en: [
            "Before entering the direct negotiation session with the contractor's lawyer, you want to draft the opening line you will rely on to test his position.",
          ],
        },
        prompt: {
          ar: "اكتب فقرة قصيرة (٥٠–٧٠ كلمة) تفتتح بها الجلسة: تُقرّ بموقفه دون قبوله، وتسند ردّك إلى تقرير المهندس، وتطرح سؤالًا عن سند بند التأخير.",
          en: "Write a short paragraph (50-70 words) to open the session: acknowledge his position without accepting it, ground your response in the engineer's report, and ask about the basis for the delay item.",
        },
        modelAnswer: {
          ar: [
            "«أقدّر وضوح موقفكم يا أستاذ كريم. من جهتنا، تقرير مهندس موكّلي يوثّق تسرّب مياه في قسم من المواقف وفروقًا في تمديدات التكييف عن المخطّط المعتمد، وهذا هو أساس حجب الدفعتين.»",
            "«بخصوص مطالبة التأخير بمبلغ 90,000 ريال، هل يوجد إخطار رسمي أُرسل لموكّلي في حينه يسند هذا البند؟»",
          ],
          en: [
            "\"I appreciate the clarity of your position, Counsellor. On our side, my client's engineer's report documents water seepage in part of the parking area and HVAC ducting that differs from the approved drawings — that is the basis for withholding the two payments.\"",
            "\"On the 90,000 SAR delay claim, was there a formal notice sent to my client at the time supporting that item?\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«430,000 ريال مبلغ كبير جدًا، ولا أعتقد أن موكّلي سيوافق على هذا الرقم أبدًا.»",
            ],
            en: [
              "\"430,000 SAR is far too large a number, and I don't think my client will ever agree to it.\"",
            ],
          },
          whatIsWrong: {
            ar: "رفض عام بلا سند موثّق، ولا سؤال يفتح الحوار، ولا إشارة إلى تقرير المهندس المتاح فعلًا. جملة كهذه تدعو لمساومة على الرقم وحده بدل اختباره بمعيار موضوعي.",
            en: "A blanket refusal with no documented support, no question opening the dialogue, and no reference to the engineer's report that is actually available. A line like this invites haggling over the number alone instead of testing it against an objective standard.",
          },
        },
      },
      {
        id: "act.ni.05.5",
        kind: "reflection",
        skillId: "skill.negotiation",
        stage: 3,
        grading: "self_report",
        prompt: {
          ar: "بعد المحاكاة، أي لحظة شعرت فيها بأكبر ضغط للتنازل عن أكثر مما خطّطت؟",
          en: "After the simulation, at which moment did you feel the strongest pull to concede more than you had planned?",
        },
        followUp: {
          ar: "ماذا في تحضيرك — أرقامك الثلاثة أو حجتك — ساعدك فعلًا على الصمود في تلك اللحظة؟",
          en: "What in your preparation — your three numbers, or your argument — actually helped you hold your ground at that moment?",
        },
      },
    ],
    summaryCard: {
      id: "card.ni.05",
      title: {
        ar: "الجلسة الكاملة",
        en: "The Full Session",
      },
      whatYouLearned: {
        ar: [
          "الأرقام الثلاثة والحجة المسندة بمعيار موضوعي أدواتك الفعلية تحت ضغط وقت حقيقي.",
          "استكشاف المصلحة الحقيقية للطرف الآخر يفتح تنازلات لا يفتحها الإلحاح على الرقم.",
          "الإغلاق يحتاج حزمة محدَّدة أو خطوة تالية بتاريخ ومسؤول، لا «سنتواصل».",
        ],
        en: [
          "Your three numbers and an argument grounded in an objective standard are your real tools under genuine time pressure.",
          "Exploring the other side's real interest opens concessions that pressuring the figure alone never does.",
          "Closing needs a specific package or a next step with a date and an owner, not \"we'll be in touch.\"",
        ],
      },
      framework: {
        name: {
          ar: "تشغيل الجلسة: اختبر · استكشف · اثبت · أغلق",
          en: "Running the Session: Test · Explore · Hold · Close",
        },
        steps: [
          { ar: "اختبر — ردّ مضادّ مسند بمعيار موضوعي على الموقف الافتتاحي.", en: "Test — a counter-position grounded in an objective standard, against the opening." },
          { ar: "استكشف — سؤال مفتوح وودّي عن مصلحة الطرف الآخر الحقيقية.", en: "Explore — an open, friendly question about the other side's real interest." },
          { ar: "اثبت — ابقَ ضمن تفويضك، وسمِّ الضغط بهدوء دون تصعيد أو استسلام.", en: "Hold — stay inside your mandate, and name pressure calmly without escalating or caving." },
          { ar: "أغلق — حزمة محدَّدة أو خطوة تالية بتاريخ ومسؤول.", en: "Close — a specific package or a next step with a date and an owner." },
        ],
      },
      rememberThis: {
        ar: "التحضير النظري يصنع نصف المفاوض؛ الجلسة الحقيقية تحت الضغط تصنع النصف الآخر.",
        en: "Preparation on paper makes half a negotiator; a real session under pressure makes the other half.",
      },
      useItTomorrow: {
        ar: "في تفاوضك الحقيقي القادم، اكتب أرقامك الثلاثة ومعيارك الموضوعي على ورقة واحدة، واحملها معك إلى الجلسة.",
        en: "In your next real negotiation, write your three numbers and your objective standard on one sheet, and carry it into the session.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.how-to-argue-and-win", "src.making-your-case", "src.tools-of-argument"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
