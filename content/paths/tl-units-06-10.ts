import type { UnitDef } from "../types";

/**
 * Teamwork & Leadership path (`path.teamwork-leadership`, domain
 * `dom.teamwork-leadership`) — units 6-10, the second half of the path.
 *
 * `ch.tl.managing-up` covers units 6-8: sending a status update before your
 * supervising partner has to ask for one, asking a senior colleague for help
 * before a struggle becomes a crisis, and raising a substantive disagreement
 * with a partner's approach respectfully (closing with a simulation).
 * `ch.tl.leading-without-authority` covers units 9-10: making a contribution
 * in a meeting actually land, and building a peer's buy-in through shared
 * stakes and a fair ask with no formal authority (closing the whole path
 * with a simulation).
 *
 * Skills, rubrics and scenarios referenced here are authored elsewhere in
 * the bundle (framework/skills-teamwork-leadership.ts,
 * framework/rubrics-teamwork-leadership.ts,
 * scenarios-teamwork-leadership.ts).
 */
export const TL_UNITS_06_10: UnitDef[] = [
  // =========================================================================
  // UNIT 06 — The update your supervisor didn't have to ask for
  // =========================================================================
  {
    id: "unit.tl.06",
    chapterId: "ch.tl.managing-up",
    order: 6,
    title: {
      ar: "التحديث الذي لم يضطر مديرك لطلبه",
      en: "The Update Your Supervisor Didn't Have to Ask For",
    },
    subtitle: {
      ar: "التحديث الذي يصل قبل السؤال يبني ثقة، والتحديث الذي يُنتزع بالسؤال يهزّها.",
      en: "An update that arrives before the question builds trust; one that has to be pried out erodes it.",
    },
    primarySkillId: "skill.managing-up",
    skillIds: ["skill.managing-up", "skill.leadership-communication"],
    stage: 3,
    estimatedMinutes: 7,
    steps: [
      {
        kind: "hook",
        id: "s.tl.06.hook",
        text: {
          ar: "حين يسألك الشريك «وين وصلنا بالملف؟»، فالسؤال نفسه غالباً إشارة متأخرة: كان يجب أن يعرف قبل أن يسأل.",
          en: "When your supervisor asks 'where are we on this file?', the question itself is usually late — they should have known before asking.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.tl.06.why",
        text: {
          ar: "من ينتظر أن يُسأل يبدو وكأنه يخفي شيئاً، حتى لو لم يكن كذلك. من يحدّث قبل أن يُسأل يبني سمعة المحامي الذي يمكن الوثوق بملفه دون مراقبة.",
          en: "Wait to be asked and you look like you're hiding something, even when you're not. Update before being asked, and you build the reputation of someone whose files don't need watching.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.tl.06.goals",
        goals: {
          ar: [
            "أن تحدد اللحظة التي يستحق فيها الملف تحديثاً استباقياً قبل أن يطلبه أحد.",
            "أن تبني تحديثاً من ثلاثة عناصر: الحالة، أي مخاطر، وما تحتاجه.",
            "أن تتجنب التحديث الذي لا يحمل معلومة فعلية، مجرد طمأنة فارغة.",
          ],
          en: [
            "Identify the moment a file deserves a proactive update, before anyone asks for one.",
            "Build an update from three elements: status, any risk, and what you need.",
            "Avoid an update that carries no real information — empty reassurance alone.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.tl.06.lesson",
        title: {
          ar: "الحالة، الخطر، الطلب",
          en: "Status, Risk, Ask",
        },
        body: {
          ar: [
            "التحديث الاستباقي ليس تقريراً طويلاً، بل رسالة قصيرة تصل قبل أن يُضطر مديرك للسؤال.",
            "أفضل تحديث يحمل ثلاثة عناصر فقط: أين وصل الملف الآن، أي خطر أو عائق ظهر، وما الذي تحتاجه منه إن وجد.",
            "بدون عنصر الخطر، التحديث يصبح مجرد طمأنة: «كل شيء تمام» لا تفيد مديراً يحتاج معرفة ما قد يتأخر.",
            "التوقيت أهم مما يبدو: أرسل التحديث حين يتغير شيء فعلي، لا بجدول ثابت يتحول إلى رسائل بلا محتوى.",
            "تحديث يقول «ما زلت أعمل عليه» بلا تفصيل يجبر المدير على طرح سؤال آخر - وهذا فشل التحديث الأول لا نجاحه.",
            "التحديث الجيد يوفر وقت مديرك، فلا يحتاج للتحقق أو المتابعة، ويمنحه ما يكفي ليقرر إن كان يحتاج التدخل.",
          ],
          en: [
            "A proactive update isn't a long report — it's a short message that arrives before your supervisor has to ask.",
            "The best update carries just three elements: where the file stands now, any risk or obstacle that's appeared, and what you need from them, if anything.",
            "Without the risk element, an update becomes empty reassurance — 'everything's fine' tells a supervisor nothing about what might slip.",
            "Timing matters more than it seems: send the update when something actually changes, not on a fixed schedule that turns into content-free noise.",
            "An update that just says 'still working on it' with no detail forces the supervisor to ask a follow-up — that's the first update failing, not succeeding.",
            "A good update saves your supervisor's time — they don't need to check in, and it gives them enough to decide whether to step in.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.tl.06.visual",
        title: {
          ar: "ثلاث علامات لتحديث مفيد",
          en: "Three Marks of a Useful Update",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "الصمت حتى يُسأل", en: "Silence until asked" },
            detail: {
              ar: "يبدو حيادياً لكنه يُقرأ كتهرّب أو إخفاء.",
              en: "Feels neutral but reads as evasion or hiding something.",
            },
            tone: "negative",
          },
          {
            label: { ar: "طمأنة بلا معلومة", en: "Reassurance with no information" },
            detail: {
              ar: "«كل شيء تمام» لا تخبر المدير بشيء يمكنه استخدامه.",
              en: "'Everything's fine' tells the supervisor nothing they can act on.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الحالة + الخطر + الطلب", en: "Status + risk + ask" },
            detail: {
              ar: "ثلاثة أسطر تمنح مديرك صورة كاملة دون أن يسأل.",
              en: "Three lines give your supervisor the full picture without asking.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.tl.06.worked",
        strong: {
          label: {
            ar: "يارا تحدّث الأستاذ فادي قبل أن يسأل",
            en: "Yara updates Mr. Fadi before he asks",
          },
          text: {
            ar: [
              "تراجع الأستاذة يارا نصار عقد توريد شركة المنار للتجارة المعدنية، وتلاحظ أن المستندات المصرفية ستتأخر يومين عن الجدول.",
              "بدل الانتظار حتى يسأل الشريك الأستاذ فادي بركات، ترسل له رسالة: «راجعت العقد، والصياغة جاهزة بنسبة ثمانين بالمئة. المستندات المصرفية ستتأخر يومين - هل تريدني أن أذكّر البنك اليوم؟»",
            ],
            en: [
              "Yara Nassar is reviewing Al-Manar Metals Trading's supply contract, and notices the bank documents will arrive two days behind schedule.",
              "Instead of waiting for partner Fadi Barakat to ask, she messages him: 'I've reviewed the contract, drafting is eighty percent done. The bank documents will be two days late — want me to chase the bank today?'",
            ],
          },
          why: {
            ar: "أرسلت الحالة والخطر والطلب معاً قبل أن يُضطر فادي للسؤال، فمنحته صورة كاملة وخياراً فورياً دون أن يفقد الثقة بمتابعتها للملف.",
            en: "She sent status, risk, and ask together before Fadi had to ask, giving him a full picture and an immediate choice, without losing his trust in her handling of the file.",
          },
        },
        weak: {
          label: {
            ar: "يارا تنتظر حتى يُسأل",
            en: "Yara waits to be asked",
          },
          text: {
            ar: ["يمرّ يومان، ويسأل فادي: «وين وصلتِ بملف المنار؟» فتجيب يارا: «ما زلت أعمل عليه.»"],
            en: ["Two days pass, and Fadi asks: 'Where are you on the Al-Manar file?' Yara replies: 'Still working on it.'"],
          },
          why: {
            ar: "تركت فادي يكتشف التأخير بنفسه بدل أن يسمعه منها، وردّها لم يقدّم أي معلومة يمكنه التصرف بناءً عليها.",
            en: "She let Fadi discover the delay himself instead of hearing it from her, and her reply gave him nothing he could actually act on.",
          },
        },
      },
      { kind: "activity", id: "s.tl.06.a1", activityId: "act.tl.06.1", mode: "quick" },
      { kind: "activity", id: "s.tl.06.a2", activityId: "act.tl.06.2", mode: "guided" },
      { kind: "activity", id: "s.tl.06.a3", activityId: "act.tl.06.3", mode: "guided" },
      { kind: "activity", id: "s.tl.06.a4", activityId: "act.tl.06.4", mode: "independent" },
      { kind: "activity", id: "s.tl.06.a5", activityId: "act.tl.06.5", mode: "independent" },
      { kind: "summary", id: "s.tl.06.summary", summaryCardId: "card.tl.06" },
      {
        kind: "apply_tomorrow",
        id: "s.tl.06.apply",
        task: {
          ar: "اختر ملفاً نشطاً الآن، وأرسل تحديثاً من ثلاثة أسطر قبل أن يُسأل عنه أحد.",
          en: "Pick one active file right now, and send a three-line update before anyone asks about it.",
        },
        detail: {
          ar: "استخدم بنية الحالة والخطر والطلب حتى لو بدا الملف هادئاً.",
          en: "Use the status-risk-ask structure even if the file feels quiet.",
        },
      },
      {
        kind: "next_mission",
        id: "s.tl.06.next",
        teaser: {
          ar: "عرفت كيف تحدّث قبل أن يُسأل. الوحدة القادمة: طلب المساعدة مبكراً، قبل أن يتحول الملف إلى أزمة.",
          en: "You know how to update before being asked. Next: asking for help early, before a file turns into a crisis.",
        },
      },
    ],
    activities: [
      {
        id: "act.tl.06.1",
        kind: "multiple_choice",
        skillId: "skill.managing-up",
        stage: 3,
        weight: 1,
        context: {
          ar: ["الأستاذة يارا تعمل على ملف عاجل لشركة المنار، ولاحظت اليوم أن جلسة غد قد تتأجل بسبب غياب شاهد مهم."],
          en: ["Yara is working on an urgent Al-Manar file, and today noticed tomorrow's hearing may be postponed due to a missing witness."],
        },
        prompt: {
          ar: "ما التحديث الأصح لترسله للشريك الأستاذ فادي الآن؟",
          en: "What is the most correct update to send partner Fadi now?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«جلسة الغد مهددة بالتأجيل لغياب شاهد؛ الملف جاهز عدا ذلك. هل تريدني أن أطلب تأجيلاً استباقياً؟»",
              en: "'Tomorrow's hearing may be postponed due to a missing witness; the file is otherwise ready. Want me to request a preemptive postponement?'",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. يحمل الحالة والخطر والطلب معاً، فيمنح فادي معلومة قابلة للتصرف فوراً.",
              en: "Exactly. It carries status, risk and ask together, giving Fadi something he can act on immediately.",
            },
          },
          {
            id: "o2",
            label: { ar: "لا شيء الآن، وانتظار ما سيحدث في الجلسة غداً.", en: "Nothing for now, wait to see what happens at tomorrow's hearing." },
            rationale: {
              ar: "يترك فادي بلا وقت للتحضير لاحتمال التأجيل، فيكتشف المشكلة متأخراً جداً ليتصرف.",
              en: "Leaves Fadi no time to prepare for a possible postponement, discovering the problem too late to act.",
            },
          },
          {
            id: "o3",
            label: { ar: "رسالة: «الملف تحت السيطرة، لا داعي للقلق.»", en: "A message: 'The file is under control, no need to worry.'" },
            rationale: {
              ar: "طمأنة فارغة بلا معلومة فعلية؛ لا تخبره بالخطر الحقيقي القائم فعلاً.",
              en: "Empty reassurance with no real information; doesn't tell him about the actual risk.",
            },
          },
          {
            id: "o4",
            label: { ar: "الاتصال بالمحكمة مباشرة لطلب التأجيل دون إعلام فادي أولاً.", en: "Calling the court directly to request a postponement without informing Fadi first." },
            rationale: {
              ar: "يتخذ قراراً بالنيابة عن الشريك المسؤول قبل أن يعرف حتى بوجود المشكلة.",
              en: "Takes a decision on the responsible partner's behalf before he even knows the problem exists.",
            },
          },
        ],
      },
      {
        id: "act.tl.06.2",
        kind: "categorization",
        skillId: "skill.managing-up",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "صنّف كل رسالة: هل هي تحديث مفيد، أم مجرد ضجيج لا يحمل معلومة؟",
          en: "Sort each message: is it a useful update, or just noise with no real information?",
        },
        hint: {
          ar: "اسأل: هل تحمل الرسالة حالة وخطراً وطلباً، أم مجرد طمأنة أو انتظار؟",
          en: "Ask: does the message carry status, risk and ask, or just reassurance or waiting?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «تحديث مفيد» / «ضجيج» أسفل كل رسالة بدل السحب.",
          en: "Choose \"Useful update\" / \"Noise\" from buttons under each message instead of dragging.",
        },
        buckets: [
          { id: "useful", label: { ar: "تحديث مفيد", en: "Useful update" } },
          { id: "noise", label: { ar: "ضجيج", en: "Noise" } },
        ],
        items: [
          {
            id: "c1",
            label: { ar: "«راجعت العقد وجاهز بنسبة ٨٠٪. المستندات المصرفية ستتأخر يومين، هل أذكّر البنك؟»", en: "'Reviewed the contract, 80% ready. Bank documents will be two days late, should I chase the bank?'" },
            bucketId: "useful",
            rationale: {
              ar: "يحمل حالة دقيقة وخطراً محدداً وطلباً واضحاً.",
              en: "Carries an exact status, a specific risk, and a clear ask.",
            },
          },
          {
            id: "c2",
            label: { ar: "«كل شيء تمام، لا تقلق.»", en: "'Everything's fine, don't worry.'" },
            bucketId: "noise",
            rationale: {
              ar: "طمأنة عامة بلا أي معلومة قابلة للاستخدام.",
              en: "General reassurance with no usable information at all.",
            },
          },
          {
            id: "c3",
            label: { ar: "«ما زلت أعمل على الملف.»", en: "'Still working on the file.'" },
            bucketId: "noise",
            rationale: {
              ar: "لا تحدد أين وصلت أو إن كان هناك خطر، فتبقى بلا فائدة عملية.",
              en: "Doesn't say where things stand or if there's risk, staying practically useless.",
            },
          },
          {
            id: "c4",
            label: { ar: "«شاهد الجلسة غير متاح غداً؛ أطلب تأجيلاً استباقياً إن وافقت.»", en: "'Tomorrow's witness is unavailable; I'll request a preemptive postponement if you agree.'" },
            bucketId: "useful",
            rationale: {
              ar: "خطر محدد وطلب واضح يتيح للمدير قراراً فورياً.",
              en: "A specific risk and a clear ask that lets the supervisor decide immediately.",
            },
          },
          {
            id: "c5",
            label: { ar: "«سأحدّثك حين يكون هناك جديد.»", en: "'I'll update you when there's something new.'" },
            bucketId: "noise",
            rationale: {
              ar: "يؤجل أي معلومة فعلية إلى موعد غير محدد، تاركاً المدير بلا صورة حالية.",
              en: "Postpones any real information to an unset date, leaving the supervisor with no current picture.",
            },
          },
        ],
      },
      {
        id: "act.tl.06.3",
        kind: "ordering",
        skillId: "skill.managing-up",
        secondarySkillIds: ["skill.leadership-communication"],
        stage: 3,
        weight: 2,
        prompt: {
          ar: "رتّب عناصر التحديث الاستباقي بالترتيب الذي يجعله أوضح وأسرع قراءة.",
          en: "Order the elements of a proactive update in the sequence that makes it clearest and fastest to read.",
        },
        hint: {
          ar: "ابدأ بما يجيب سؤال «أين نحن؟»، وانتهِ بما يطلب قراراً محدداً.",
          en: "Start with what answers 'where are we?'; end with what asks for a specific decision.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٣) من قائمة منسدلة بجانب كل عنصر بدل السحب.",
          en: "Pick the position number (1 to 3) from a dropdown beside each element instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "الحالة: أين وصل الملف بالضبط الآن.", en: "Status: exactly where the file stands right now." },
            rationale: {
              ar: "يجيب أول سؤال في ذهن أي مدير مسؤول عن الملف.",
              en: "Answers the first question in any supervisor's mind about the file.",
            },
          },
          {
            id: "i2",
            label: { ar: "الخطر: أي عائق أو تأخير ظهر فعلياً.", en: "Risk: any obstacle or delay that has actually appeared." },
            rationale: {
              ar: "يمنع مفاجأة المدير لاحقاً، ويمنحه وقتاً للتصرف.",
              en: "Prevents a later surprise for the supervisor, giving them time to act.",
            },
          },
          {
            id: "i3",
            label: { ar: "الطلب: ما تحتاجه منه، إن وجد، بوضوح.", en: "Ask: what you need from them, if anything, stated clearly." },
            rationale: {
              ar: "يحوّل التحديث إلى قرار قابل للتنفيذ بدل معلومة معلّقة.",
              en: "Turns the update into an actionable decision instead of a hanging fact.",
            },
          },
        ],
      },
      {
        id: "act.tl.06.4",
        kind: "short_written",
        skillId: "skill.managing-up",
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.leadership-written.v1",
        weight: 3,
        minChars: 100,
        context: {
          ar: ["تعمل على ملف شركة المنار، والمستندات المصرفية اللازمة للتوقيع ستتأخر يومين عن الموعد المتفق عليه مع الشريك."],
          en: ["You're on the Al-Manar file, and the bank documents needed for signing will be two days late against the date agreed with the partner."],
        },
        prompt: {
          ar: "اكتب رسالة تحديث استباقية (٣٠-٥٠ كلمة) تحمل الحالة والخطر وطلبك من الشريك.",
          en: "Write a proactive update message (30-50 words) carrying status, risk, and your ask of the partner.",
        },
        modelAnswer: {
          ar: ["«راجعت عقد المنار وهو جاهز بنسبة ٨٠٪. المستندات المصرفية ستتأخر يومين عن الموعد المتفق عليه. أقترح تذكير البنك اليوم - هل توافق أن أتولى ذلك؟»"],
          en: ["'I've reviewed the Al-Manar contract, it's 80% ready. The bank documents will be two days late against our agreed date. I suggest chasing the bank today — do you want me to handle that?'"],
        },
        weakAnswer: {
          text: {
            ar: ["«لا يزال العمل جارياً على ملف المنار، سأحدّثك لاحقاً.»"],
            en: ["'Work is still ongoing on the Al-Manar file, I'll update you later.'"],
          },
          whatIsWrong: {
            ar: "لا حالة دقيقة ولا خطر محدد ولا طلب، فيترك الشريك بلا معلومة يستطيع التصرف بناءً عليها.",
            en: "No exact status, no specific risk, no ask — leaving the partner with nothing to act on.",
          },
        },
      },
      {
        id: "act.tl.06.5",
        kind: "reflection",
        skillId: "skill.managing-up",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع آخر مرة اضطر فيها مديرك أو الشريك المسؤول لسؤالك عن حالة ملف.",
          en: "Recall the last time your supervisor or responsible partner had to ask you about a file's status.",
        },
        followUp: {
          ar: "لو أرسلت تحديثاً استباقياً قبل سؤاله، ماذا كان ليحمل؟",
          en: "If you'd sent a proactive update before they asked, what would it have said?",
        },
      },
    ],
    summaryCard: {
      id: "card.tl.06",
      title: {
        ar: "التحديث الذي يسبق السؤال",
        en: "The Update That Arrives First",
      },
      whatYouLearned: {
        ar: [
          "التحديث الاستباقي يحمل ثلاثة عناصر: الحالة، الخطر، والطلب - لا مجرد طمأنة.",
          "الصمت حتى يُسأل يبدو حيادياً لكنه يُقرأ كتهرّب أو ضعف متابعة.",
          "التوقيت يهم: أرسل حين يتغير شيء فعلي، لا بجدول ثابت بلا محتوى.",
        ],
        en: [
          "A proactive update carries three elements: status, risk, and ask — not just reassurance.",
          "Silence until asked feels neutral but reads as evasion or weak follow-through.",
          "Timing matters: send when something actually changes, not on a fixed schedule with no content.",
        ],
      },
      framework: {
        name: { ar: "الحالة · الخطر · الطلب", en: "Status · Risk · Ask" },
        steps: [
          { ar: "اذكر أين وصل الملف بالضبط الآن.", en: "State exactly where the file stands right now." },
          { ar: "اذكر أي خطر أو عائق ظهر فعلياً.", en: "State any risk or obstacle that has actually appeared." },
          { ar: "اذكر ما تحتاجه من مديرك، إن وجد.", en: "State what you need from your supervisor, if anything." },
        ],
      },
      rememberThis: {
        ar: "التحديث الذي لا يرسله أحد، يرسله السؤال المتأخر بدلاً منه.",
        en: "The update no one sends gets replaced by a late, awkward question instead.",
      },
      useItTomorrow: {
        ar: "اختر ملفاً نشطاً الآن، وأرسل تحديثاً من ثلاثة أسطر قبل أن يُسأل عنه أحد.",
        en: "Pick one active file right now, and send a three-line update before anyone asks about it.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.governance-raci", "src.smarter-collaboration", "src.68-power-moves"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 07 — Asking for help before it's a crisis
  // =========================================================================
  {
    id: "unit.tl.07",
    chapterId: "ch.tl.managing-up",
    order: 7,
    title: {
      ar: "طلب المساعدة قبل أن تتحول إلى أزمة",
      en: "Asking for Help Before It's a Crisis",
    },
    subtitle: {
      ar: "المحامي الذي يطلب المساعدة مبكراً يبدو أكثر كفاءة، لا أقل، ممن يكتشف الجميع تعثره متأخراً.",
      en: "The lawyer who asks for help early looks more capable, not less, than the one whose struggle is discovered too late.",
    },
    primarySkillId: "skill.teamwork",
    skillIds: ["skill.teamwork", "skill.managing-up"],
    stage: 3,
    estimatedMinutes: 7,
    steps: [
      {
        kind: "hook",
        id: "s.tl.07.hook",
        text: {
          ar: "الملف الذي تفتحه للمرة الثالثة اليوم دون أن تفهم نقطة قانونية فيه، لن يصبح أوضح بمرور الوقت وحده.",
          en: "The file you've opened for the third time today without grasping one legal point in it won't get clearer just by waiting.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.tl.07.why",
        text: {
          ar: "من يخفي تعثره خوفاً من أن يبدو ضعيفاً، يكتشفه الآخرون لاحقاً في لحظة أسوأ بكثير - أمام الموكل أو المحكمة. من يطلب المساعدة مبكراً يُنظر إليه كمن يعرف حدود قدرته، لا كمن يفتقر إليها.",
          en: "Hide your struggle out of fear of looking weak, and others discover it later, at a far worse moment — in front of the client or the court. Ask early, and you're seen as knowing your limits, not lacking ability.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.tl.07.goals",
        goals: {
          ar: [
            "أن تميّز بين التردد الطبيعي وبين التعثر الذي يستحق طلب المساعدة فعلياً.",
            "أن تصوغ طلب مساعدة محدداً بدل سؤال عام يصعب الرد عليه.",
            "أن تطلب المساعدة في وقت يمنح الزميل مجالاً حقيقياً ليساعد، لا في آخر لحظة.",
          ],
          en: [
            "Tell ordinary hesitation apart from a genuine struggle that warrants actually asking for help.",
            "Phrase a specific request for help instead of a vague question that's hard to respond to.",
            "Ask for help while there's real room for a colleague to help, not at the last possible moment.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.tl.07.lesson",
        title: {
          ar: "طلب المساعدة مهارة، لا اعتراف بالضعف",
          en: "Asking for Help Is a Skill, Not an Admission of Weakness",
        },
        body: {
          ar: [
            "الخوف من أن يبدو طلب المساعدة كاعتراف بالعجز يدفع كثيرين للاستمرار في الصراع بصمت لساعات، أحياناً أيام.",
            "لكن الزميل الأقدم يتذكر لاحقاً من طلب مساعدة مبكرة وواضحة، لا من ظل صامتاً حتى اكتُشف الخطأ في اللحظة الأخيرة.",
            "المؤشر الحقيقي لضرورة طلب المساعدة ليس شعور الإحراج، بل الوقت: هل ستفهم النقطة خلال ساعة، أم أنك تدور في المكان نفسه منذ الصباح؟",
            "طلب المساعدة الجيد محدد: لا «أنا محتار في الملف»، بل «لست متأكدة من التفسير الصحيح للبند الثالث، هل لديك دقيقتان؟»",
            "اطلب المساعدة وأنت لا تزال أمامك وقت لتصحيح المسار، لا حين يتبقى ساعة واحدة قبل موعد التسليم.",
            "من يطلب المساعدة مبكراً يبني ثقة الفريق فيه على المدى الطويل، أكثر ممن يبدو أنه ينجز كل شيء وحده حتى يفشل فجأة.",
          ],
          en: [
            "Fear that asking for help looks like admitting incompetence pushes many people to keep struggling silently for hours, sometimes days.",
            "But senior colleagues remember who asked for clear, early help — not who stayed silent until the mistake surfaced at the last moment.",
            "The real signal that help is needed isn't embarrassment — it's time: will you grasp the point within an hour, or have you been circling the same spot since morning?",
            "A good request for help is specific: not 'I'm stuck on this file,' but 'I'm unsure about the right reading of clause three, do you have two minutes?'",
            "Ask while you still have time to correct course — not with one hour left before the deadline.",
            "Asking early builds a team's long-term trust in you more than appearing to handle everything solo — until you suddenly fail.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.tl.07.visual",
        title: {
          ar: "الصراع الصامت مقابل الطلب المبكر",
          en: "Silent Struggle vs. the Early Ask",
        },
        variant: "scale",
        items: [
          {
            label: { ar: "الصراع الصامت", en: "Silent struggle" },
            detail: {
              ar: "ساعات من المحاولة وحدك، مع خطر متزايد لخطأ يُكتشف متأخراً.",
              en: "Hours of trying alone, with rising risk of a mistake discovered too late.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الطلب المتأخر", en: "The late ask" },
            detail: {
              ar: "طلب المساعدة في اللحظة الأخيرة، حين تضيق خيارات الجميع.",
              en: "Asking for help at the last minute, when everyone's options have narrowed.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الطلب المبكر والمحدد", en: "The early, specific ask" },
            detail: {
              ar: "سؤال واضح خلال وقت يسمح فعلياً بالمساعدة والتصحيح.",
              en: "A clear question, asked while there's real time left to help and correct course.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.tl.07.worked",
        strong: {
          label: {
            ar: "يارا تطلب المساعدة من رنا مبكراً",
            en: "Yara asks Rana for help early",
          },
          text: {
            ar: [
              "تراجع الأستاذة يارا نصار نزاع إرث عائلة زهران، وتجد بنداً في وصية قديمة تتعارض قراءته مع نص القانون الحالي - لا تفهم أيهما يُطبَّق.",
              "بعد نصف ساعة من المحاولة وحدها، تكتب لزميلتها الأقدم الأستاذة رنا إدريس: «هل لديك خمس دقائق؟ لست متأكدة من التفسير الصحيح لبند الوصية هذا مقابل القانون الحالي.»",
            ],
            en: [
              "Yara Nassar is reviewing the Zahran family inheritance dispute, and finds an old will clause whose reading conflicts with current law — she's unsure which applies.",
              "After half an hour trying alone, she messages senior colleague Rana Idris: 'Do you have five minutes? I'm not sure about the right reading of this will clause against current law.'",
            ],
          },
          why: {
            ar: "طلبت المساعدة بعد وقت معقول من المحاولة الذاتية، بسؤال محدد يسهل الرد عليه، وقبل أن يقترب موعد التسليم.",
            en: "She asked after a reasonable solo attempt, with a specific, easy-to-answer question, and before the deadline got close.",
          },
        },
        weak: {
          label: {
            ar: "يارا تصمت حتى تكتشف رنا الخطأ",
            en: "Yara stays silent until Rana finds the mistake",
          },
          text: {
            ar: ["تستمر يارا بالتخمين وحدها لثلاثة أيام، حتى تراجع رنا مسودة الرأي القانوني وتجد أن التفسير المستخدم خاطئ بالكامل."],
            en: ["Yara keeps guessing alone for three days, until Rana reviews the draft legal opinion and finds the reading used is entirely wrong."],
          },
          why: {
            ar: "أضاعت ثلاثة أيام على تفسير خاطئ كان يمكن تصحيحه في خمس دقائق، وتركت الخطأ يُكتشف بدل أن تطلب المساعدة.",
            en: "She wasted three days on a wrong reading fixable in five minutes, letting the mistake get discovered instead of asking for help.",
          },
        },
      },
      { kind: "activity", id: "s.tl.07.a1", activityId: "act.tl.07.1", mode: "quick" },
      { kind: "activity", id: "s.tl.07.a2", activityId: "act.tl.07.2", mode: "guided" },
      { kind: "activity", id: "s.tl.07.a3", activityId: "act.tl.07.3", mode: "guided" },
      { kind: "activity", id: "s.tl.07.a4", activityId: "act.tl.07.4", mode: "independent" },
      { kind: "activity", id: "s.tl.07.a5", activityId: "act.tl.07.5", mode: "independent" },
      { kind: "summary", id: "s.tl.07.summary", summaryCardId: "card.tl.07" },
      {
        kind: "apply_tomorrow",
        id: "s.tl.07.apply",
        task: {
          ar: "في أول لحظة تشعر فيها أنك تدور في المكان نفسه غداً، اطلب المساعدة خلال خمس دقائق.",
          en: "The first moment tomorrow you feel stuck in place, ask for help within five minutes.",
        },
        detail: {
          ar: "استخدم سؤالاً محدداً بنقطة واحدة، لا وصفاً عاماً للتعثر.",
          en: "Use a specific, single-point question, not a general description of being stuck.",
        },
      },
      {
        kind: "next_mission",
        id: "s.tl.07.next",
        teaser: {
          ar: "عرفت متى تطلب المساعدة. الوحدة القادمة: كيف تعترض على رأي مديرك دون صمت أو تمرّد.",
          en: "You know when to ask for help. Next: disagreeing with your supervisor's approach, without silent compliance or insubordination.",
        },
      },
    ],
    activities: [
      {
        id: "act.tl.07.1",
        kind: "best_response",
        skillId: "skill.teamwork",
        stage: 3,
        weight: 1,
        context: {
          ar: ["تراجع ملفاً تعاقدياً معقداً منذ ساعة كاملة دون أن تفهم بند التحكيم، والموعد النهائي غداً ظهراً."],
          en: ["You've been reviewing a complex contract file for a full hour without understanding the arbitration clause, and the deadline is tomorrow noon."],
        },
        prompt: {
          ar: "ما أفضل تصرف الآن؟",
          en: "What is the best action now?",
        },
        options: [
          {
            id: "o1",
            label: { ar: "اكتب لزميل أقدم: «هل لديك عشر دقائق؟ لست متأكدة من تفسير بند التحكيم.»", en: "Message a senior colleague: 'Do you have ten minutes? I'm unsure about the arbitration clause's reading.'" },
            correct: true,
            rationale: {
              ar: "بالضبط. سؤال محدد بعد محاولة معقولة، وبوقت كافٍ قبل الموعد للتصحيح إن لزم.",
              en: "Exactly. A specific question after a reasonable attempt, with enough time before the deadline to fix things.",
            },
          },
          {
            id: "o2",
            label: { ar: "استمر بالمحاولة وحدك حتى تفهم البند بنفسك مهما استغرق الأمر.", en: "Keep trying alone until you understand the clause yourself, however long it takes." },
            rationale: {
              ar: "يستهلك وقتاً ثميناً قد لا يتبقى منه ما يكفي للتصحيح قبل الموعد.",
              en: "Burns precious time that may leave nothing left to fix things before the deadline.",
            },
          },
          {
            id: "o3",
            label: { ar: "سلّم الملف بتفسيرك الحالي دون ذكر أنك غير متأكدة.", en: "Submit the file with your current reading, without mentioning you're unsure." },
            rationale: {
              ar: "يمرر تفسيراً قد يكون خاطئاً دون تنبيه أحد، وهذا أخطر من طلب المساعدة.",
              en: "Passes a possibly wrong reading with no warning to anyone — riskier than simply asking for help.",
            },
          },
          {
            id: "o4",
            label: { ar: "اطلب من الشريك المسؤول تمديد الموعد بدل طلب المساعدة.", en: "Ask the responsible partner for a deadline extension instead of asking for help." },
            rationale: {
              ar: "يتجنب المشكلة الفعلية - فهم البند - بدل حلها بسؤال بسيط لزميل.",
              en: "Avoids the real problem — understanding the clause — instead of solving it with one simple question to a colleague.",
            },
          },
        ],
      },
      {
        id: "act.tl.07.2",
        kind: "matching",
        skillId: "skill.teamwork",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "طابق كل موقف مع طلب المساعدة الأنسب له.",
          en: "Match each situation with the most fitting request for help.",
        },
        accessibleAlternative: {
          ar: "اختر الطلب المطابق من قائمة منسدلة بجانب كل موقف بدل السحب.",
          en: "Pick the matching request from a dropdown beside each situation instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "غير متأكد من تفسير بند قانوني محدد", en: "Unsure about a specific legal clause's reading" },
            right: {
              ar: "«هل لديك خمس دقائق؟ لست متأكدة من تفسير هذا البند.»",
              en: "'Do you have five minutes? I'm unsure how to read this clause.'",
            },
            rationale: {
              ar: "سؤال محدد وقصير يسهل على الزميل الرد عليه فوراً.",
              en: "A short, specific question a colleague can answer right away.",
            },
          },
          {
            id: "p2",
            left: { ar: "لا تعرف من أين تبدأ في مهمة جديدة تماماً عليك", en: "Don't know where to start on a task entirely new to you" },
            right: {
              ar: "«لم أتعامل مع هذا النوع من المذكرات من قبل، هل يمكنك أن تريني مثالاً سابقاً؟»",
              en: "'I haven't handled this type of memo before, could you show me a past example?'",
            },
            rationale: {
              ar: "يحدد الفجوة بدقة - نقص خبرة، لا نقص فهم - ويطلب أداة ملموسة.",
              en: "Pinpoints the exact gap — inexperience, not confusion — and asks for a concrete tool.",
            },
          },
          {
            id: "p3",
            left: { ar: "أخطأت بالفعل وتحتاج مساعدة لتصحيح الأمر", en: "You've already made a mistake and need help fixing it" },
            right: {
              ar: "«اكتشفت خطأ في المذكرة المرسلة، أحتاج مساعدتك لتصحيحه قبل أن يراه الموكل.»",
              en: "'I found a mistake in the memo already sent, I need your help fixing it before the client sees it.'",
            },
            rationale: {
              ar: "يعترف بالخطأ فوراً بدل إخفائه، ويحدد النافذة الزمنية المتبقية للتصحيح.",
              en: "Admits the mistake immediately instead of hiding it, and names the remaining window to fix it.",
            },
          },
          {
            id: "p4",
            left: { ar: "تشك أن قرارك قد يكون خاطئاً لكنك لست متأكداً", en: "You suspect your decision might be wrong but aren't sure" },
            right: {
              ar: "«أريد رأياً ثانياً قبل أن أمضي في هذا الاتجاه، هل تراجع معي النقطة؟»",
              en: "'I'd like a second opinion before proceeding this way, could you review the point with me?'",
            },
            rationale: {
              ar: "يطلب تحققاً قبل المضي قدماً، لا تصحيحاً بعد فوات الأوان.",
              en: "Asks for a check before proceeding, not a correction after it's too late.",
            },
          },
        ],
      },
      {
        id: "act.tl.07.3",
        kind: "branching_decision",
        skillId: "skill.teamwork",
        secondarySkillIds: ["skill.managing-up"],
        stage: 3,
        weight: 2,
        prompt: {
          ar: "أدِر محادثتك مع رنا لطلب المساعدة في بند الوصية. اختر ما ستقوله فعلياً.",
          en: "Run your conversation with Rana asking for help on the will clause. Choose what you'd actually say.",
        },
        hint: {
          ar: "اسأل: هل هذا سؤال محدد يسهل الرد عليه، أم عام يصعب مساعدتك فيه؟",
          en: "Ask: is this a specific question, easy to answer, or a vague one hard to help with?",
        },
        accessibleAlternative: {
          ar: "الحوار متاح كنص متسلسل مع أزرار اختيار، دون أي مؤقت زمني.",
          en: "The dialogue runs as sequential text with choice buttons, with no timer.",
        },
        startNodeId: "n1",
        nodes: [
          {
            id: "n1",
            text: {
              ar: "تجد يارا رنا في المكتب المجاور، وهي منشغلة بملف آخر.",
              en: "Yara finds Rana in the next office, busy with another file.",
            },
            choices: [
              {
                id: "c1a",
                label: {
                  ar: "«هل لديك خمس دقائق؟ لست متأكدة من تفسير بند في وصية زهران مقابل القانون الحالي.»",
                  en: "'Do you have five minutes? I'm unsure how a Zahran will clause reads against current law.'",
                },
                nextNodeId: "n2",
                quality: "strong",
                rationale: {
                  ar: "سؤال محدد وقصير يحترم وقت رنا ويسهل عليها الرد فوراً.",
                  en: "A short, specific question that respects Rana's time and is easy to answer right away.",
                },
              },
              {
                id: "c1b",
                label: { ar: "«أنا محتارة تماماً في ملف زهران، هل يمكنك مساعدتي؟»", en: "'I'm totally lost on the Zahran file, can you help me?'" },
                nextNodeId: "n2",
                quality: "weak",
                rationale: {
                  ar: "سؤال عام لا يحدد نقطة المشكلة، فيصعب على رنا معرفة كيف تساعد فعلياً.",
                  en: "A vague question that doesn't pinpoint the problem, making it hard for Rana to actually help.",
                },
              },
              {
                id: "c1c",
                label: { ar: "لا تسأل الآن، وتقرر الانتظار حتى تفهم البند بنفسها لاحقاً.", en: "Doesn't ask now, decides to wait and figure out the clause alone later." },
                nextNodeId: "n2",
                quality: "critical_mistake",
                rationale: {
                  ar: "تؤجل طلباً كان ممكناً الآن، فيقترب الموعد النهائي دون أي تقدّم فعلي.",
                  en: "Delays a request she could make now, letting the deadline approach with zero real progress.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "رنا: «بالتأكيد، أي بند بالضبط؟»",
              en: "Rana: 'Sure, which clause exactly?'",
            },
            choices: [
              {
                id: "c2a",
                label: { ar: "«البند الثالث من الوصية، الذي يتعارض مع نص المادة الحالية في قانون الإرث.»", en: "'Clause three of the will, which conflicts with the current inheritance-law article.'" },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "تحديد دقيق يسمح لرنا بالمساعدة فوراً دون أسئلة إضافية.",
                  en: "Precise identification lets Rana help immediately, with no further questions needed.",
                },
              },
              {
                id: "c2b",
                label: { ar: "«لا أذكر رقمه بالضبط، لكنه في مكان ما في الصفحة الثانية.»", en: "'I don't remember the exact number, but it's somewhere on page two.'" },
                nextNodeId: null,
                quality: "acceptable",
                rationale: {
                  ar: "معلومة تقريبية تبطئ المساعدة لكنها لا تمنعها تماماً.",
                  en: "Rough information that slows the help but doesn't fully block it.",
                },
              },
              {
                id: "c2c",
                label: { ar: "«لا يهم، انسي الأمر، سأتدبر بنفسي.»", en: "'Never mind, forget it, I'll figure it out myself.'" },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "تسحب طلب المساعدة بعد أن فتحته، فتعود للصراع الصامت الذي دفعها للسؤال أصلاً.",
                  en: "Withdraws the request after opening it, returning to the silent struggle that prompted the ask in the first place.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.tl.07.4",
        kind: "short_written",
        skillId: "skill.teamwork",
        secondarySkillIds: ["skill.managing-up"],
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.leadership-written.v1",
        weight: 3,
        minChars: 80,
        context: {
          ar: ["تراجعين نزاع إرث عائلة زهران منذ نصف ساعة، وبند في الوصية القديمة يتعارض مع نص القانون الحالي."],
          en: ["You've been reviewing the Zahran inheritance dispute for half an hour, and an old will clause conflicts with the current law."],
        },
        prompt: {
          ar: "اكتب رسالة تطلب فيها المساعدة من زميلة أقدم (٢٠-٤٠ كلمة)، محددة وسهلة الرد عليها.",
          en: "Write a message asking a senior colleague for help (20-40 words), specific and easy to respond to.",
        },
        modelAnswer: {
          ar: ["«أستاذة رنا، هل لديك خمس دقائق؟ بند في وصية زهران يتعارض مع المادة الحالية في قانون الإرث، ولست متأكدة أي نص يُطبَّق.»"],
          en: ["'Rana, do you have five minutes? A Zahran will clause conflicts with the current inheritance-law article, and I'm unsure which text applies.'"],
        },
        weakAnswer: {
          text: {
            ar: ["«أستاذة رنا، أنا محتارة جداً في ملف زهران، ما رأيك؟»"],
            en: ["'Rana, I'm really confused about the Zahran file, what do you think?'"],
          },
          whatIsWrong: {
            ar: "لا يحدد نقطة المشكلة، فيضطر رنا لطرح أسئلة إضافية قبل أن تستطيع المساعدة فعلياً.",
            en: "Doesn't pinpoint the actual problem, forcing Rana to ask follow-up questions before she can actually help.",
          },
        },
      },
      {
        id: "act.tl.07.5",
        kind: "reflection",
        skillId: "skill.teamwork",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع موقفاً صارعت فيه صامتاً بدل طلب المساعدة، حتى تفاقمت المشكلة.",
          en: "Recall a time you struggled silently instead of asking for help, until the problem grew worse.",
        },
        followUp: {
          ar: "لو طلبت المساعدة في تلك اللحظة بالضبط، ما السؤال المحدد الذي كنت لتطرحه؟",
          en: "If you'd asked for help at that exact moment, what specific question would you have asked?",
        },
      },
    ],
    summaryCard: {
      id: "card.tl.07",
      title: {
        ar: "طلب مبكر، لا اعتراف بالضعف",
        en: "An Early Ask, Not an Admission of Weakness",
      },
      whatYouLearned: {
        ar: [
          "المؤشر الحقيقي لضرورة المساعدة هو الوقت الضائع، لا شعور الإحراج من السؤال.",
          "طلب المساعدة الجيد محدد: نقطة واحدة، وسؤال واضح يسهل الرد عليه.",
          "اطلب المساعدة بينما لا يزال أمامك وقت للتصحيح، لا في آخر لحظة.",
        ],
        en: [
          "The real signal you need help is wasted time, not embarrassment about asking.",
          "A good request for help is specific: one point, one clear question, easy to answer.",
          "Ask while there's still time to correct course, not at the very last moment.",
        ],
      },
      framework: {
        name: { ar: "توقف · حدد · اسأل مبكراً", en: "Pause · Pinpoint · Ask Early" },
        steps: [
          { ar: "توقف حين تلاحظ أنك تدور في المكان نفسه دون تقدّم.", en: "Pause when you notice you're circling the same spot with no progress." },
          { ar: "حدد النقطة الدقيقة التي تعثرت عندها، لا الملف كله.", en: "Pinpoint the exact point you're stuck on, not the whole file." },
          { ar: "اطلب المساعدة الآن، بسؤال محدد، وبينما لا يزال هناك وقت.", en: "Ask now, with a specific question, while there's still time." },
        ],
      },
      rememberThis: {
        ar: "الزميل يتذكر من طلب مساعدة مبكرة، لا من أخفى تعثره حتى ظهر بنفسه.",
        en: "Colleagues remember who asked for help early, not who hid a struggle until it surfaced on its own.",
      },
      useItTomorrow: {
        ar: "في أول لحظة تشعر فيها أنك تدور في المكان نفسه غداً، اطلب المساعدة خلال خمس دقائق.",
        en: "The first moment tomorrow you feel stuck in place, ask for help within five minutes.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.smarter-collaboration", "src.introverted-leader", "src.68-power-moves"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 08 — Disagreeing with your supervisor, respectfully
  // =========================================================================
  {
    id: "unit.tl.08",
    chapterId: "ch.tl.managing-up",
    order: 8,
    title: {
      ar: "الاعتراض على رأي مديرك، باحترام",
      en: "Disagreeing With Your Supervisor, Respectfully",
    },
    subtitle: {
      ar: "بين الصمت المطيع والتمرّد العلني مسار ثالث: اعتراض مبني على حجة، لا على انفعال.",
      en: "Between silent compliance and open insubordination lies a third path: an objection built on substance, not emotion.",
    },
    primarySkillId: "skill.managing-up",
    skillIds: ["skill.managing-up", "skill.leadership-communication"],
    stage: 3,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.tl.08.hook",
        text: {
          ar: "يطلب منك الشريك أن توافق على عرض تسوية تعرف أنه أقل بكثير مما يستحقه الموكل. الصمت يشعر بالأمان أكثر من الاعتراض - لكنه ليس الخيار الأصح.",
          en: "The partner asks you to accept a settlement offer you know is far below what the client deserves. Silence feels safer than objecting — but it isn't the right choice.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.tl.08.why",
        text: {
          ar: "الصمت أمام قرار تراه خاطئاً يحمي موقفك مؤقتاً، لكنه يترك الموكل يدفع الثمن. التمرّد العلني يحمي رأيك، لكنه يهدم علاقتك بمن يقرر مستقبلك المهني. بين الاثنين، الاعتراض المحترم يحمي كليهما.",
          en: "Staying silent on a decision you think is wrong protects your position briefly, but the client pays the cost. Open insubordination protects your opinion but wrecks the relationship with whoever shapes your career. Respectful objection protects both.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.tl.08.goals",
        goals: {
          ar: [
            "أن تميّز بين الصمت المطيع والتمرّد العلني والاعتراض المحترم القائم على حجة.",
            "أن تبني اعتراضك من أربعة عناصر: احترام منطقه، عرض قلقك، دليل ملموس، وطلب واضح.",
            "أن تعرف متى تتراجع بعد أن تكون قد قيلت وجهة نظرك بوضوح واحترام.",
          ],
          en: [
            "Distinguish silent compliance, open insubordination, and a respectful objection built on substance.",
            "Build your objection from four elements: respecting their reasoning, stating your concern, concrete evidence, and a clear ask.",
            "Know when to step back once your view has been stated clearly and respectfully.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.tl.08.lesson",
        title: {
          ar: "الاعتراض المحترم ليس ضعفاً ولا تحدياً",
          en: "A Respectful Objection Is Neither Weakness Nor a Challenge",
        },
        body: {
          ar: [
            "الصمت أمام قرار تراه خاطئاً يبدو الخيار الآمن، لكنه يترك خطأ محتملاً يمر دون أن يسمع أحد رأيك المهني فيه.",
            "التمرّد العلني - رفض التنفيذ أو المجادلة أمام آخرين - يحمي موقفك للحظة، لكنه يُقرأ كعدم احترام لتسلسل القرار.",
            "الاعتراض المحترم يبدأ باعتراف بمنطق الطرف الآخر: «أفهم لماذا تفكر بهذا الاتجاه» - لا موافقة، بل احترام لسبب قراره.",
            "ثم يعرض القلق بدليل ملموس، لا شعور عام: رقم، سابقة، أو مادة قانونية - لا مجرد «أعتقد أن هذا خطأ».",
            "الخطوة الأخيرة طلب محدد: مراجعة الرقم، أو خمس دقائق لعرض بديل - لا مجرد اعتراض بلا اقتراح.",
            "وإن قرر الشريك المضي في رأيه بعد سماع اعتراضك، التزم بالقرار بمهنية - قلت رأيك، والمسؤولية النهائية له.",
            "الاعتراض المتكرر، حتى المحترم منه، على كل قرار صغير يفقد قيمته. احتفظ به للحظات التي تستحق فعلاً.",
          ],
          en: [
            "Staying silent on a decision you think is wrong feels safe, but it lets a possible mistake pass with your professional view never heard.",
            "Open insubordination — refusing to comply or arguing in front of others — protects your position momentarily, but reads as disrespecting the decision chain.",
            "A respectful objection starts by acknowledging their reasoning: 'I understand why you're leaning that way' — not agreement, just respect for the reason behind their decision.",
            "Then it presents the concern with concrete evidence, not a vague feeling: a number, a precedent, a legal provision — not just 'I think this is wrong.'",
            "The last step is a specific ask: reviewing the figure, or five minutes to present an alternative — not just objecting with no proposal.",
            "And if the partner still chooses to proceed after hearing your objection, follow through professionally — you've said your piece; the final call is theirs.",
            "Repeated objection, even respectful, on every small decision loses its weight. Save it for moments that genuinely deserve it.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.tl.08.visual",
        title: {
          ar: "ثلاثة مسارات أمام قرار تعترض عليه",
          en: "Three Paths Facing a Decision You Disagree With",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "الصمت المطيع", en: "Silent compliance" },
            detail: {
              ar: "تنفّذ دون أن تقول شيئاً، وتترك خطأً محتملاً يمر دون تنبيه.",
              en: "You comply without a word, letting a possible mistake pass unflagged.",
            },
            tone: "negative",
          },
          {
            label: { ar: "التمرّد العلني", en: "Open insubordination" },
            detail: {
              ar: "ترفض أو تجادل أمام آخرين، فتهدم الثقة بغض النظر عمّن كان محقاً.",
              en: "You refuse or argue in front of others, wrecking trust regardless of who was right.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الاعتراض المحترم", en: "Respectful objection" },
            detail: {
              ar: "تحترم منطقه، تعرض قلقك بدليل، وتطلب أمراً محدداً - ثم تلتزم بقراره.",
              en: "You respect their reasoning, present your concern with evidence, ask something specific — then follow their call.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.tl.08.worked",
        strong: {
          label: {
            ar: "يارا تعترض على تسوية سندس باحترام",
            en: "Yara respectfully objects to the Sundus settlement",
          },
          text: {
            ar: [
              "يخبر الأستاذ فادي بركات يارا أنه سيقبل عرض تسوية بقيمة النصف تقريباً من قيمة الشيك المرتجع لشركة سندس للألبسة الجاهزة.",
              "تجيب يارا: «أفهم أنك تريد إغلاق الملف بسرعة، وهذا منطقي مع عبء القضايا الحالي. لكنني راجعت سوابق مشابهة، وثلاث قضايا حصلت فيها الشركات على أكثر من ٨٠٪ من القيمة. هل يمكن أن أعرض عليك السوابق قبل أن نرد على العرض؟»",
              "يستمع فادي، يراجع السوابق، ويعدّل موقفه في التفاوض بناءً على ما عرضته يارا.",
            ],
            en: [
              "Partner Fadi Barakat tells Yara he plans to accept a settlement offer worth about half the value of Sundus Apparel Manufacturing's dishonoured cheque.",
              "Yara replies: 'I understand you want to close this quickly, which makes sense given the caseload. But I reviewed similar precedents, and in three cases companies recovered over 80% of value. Could I show you the precedents before we respond?'",
              "Fadi listens, reviews the precedents, and adjusts his negotiating position based on what Yara presented.",
            ],
          },
          why: {
            ar: "احترمت منطقه، عرضت دليلاً ملموساً بدل انطباع عام، وطلبت أمراً محدداً - فمنحته سبباً حقيقياً لإعادة النظر دون أن تتحداه.",
            en: "She respected his reasoning, offered concrete evidence instead of a vague impression, and made a specific ask — giving him real cause to reconsider without challenging him.",
          },
        },
        weak: {
          label: {
            ar: "يارا تصمت رغم اعتراضها الداخلي",
            en: "Yara stays silent despite her real objection",
          },
          text: {
            ar: ["«حسناً» - توافق يارا دون قول شيء، رغم اعتقادها أن العرض ظالم بحق الموكل."],
            en: ["'Okay' — Yara agrees without saying anything, despite believing the offer is unfair to the client."],
          },
          why: {
            ar: "ابتلعت رأياً مهنياً كان يمكن أن يغيّر النتيجة، فحملت الموكل تكلفة صمتها دون أن يعرف أحد أنها كانت تعترض داخلياً.",
            en: "She swallowed a professional view that could have changed the outcome, leaving the client to pay for her silence, with no one ever knowing she disagreed.",
          },
        },
      },
      { kind: "activity", id: "s.tl.08.a1", activityId: "act.tl.08.1", mode: "quick" },
      { kind: "activity", id: "s.tl.08.a2", activityId: "act.tl.08.2", mode: "guided" },
      { kind: "activity", id: "s.tl.08.a3", activityId: "act.tl.08.3", mode: "independent" },
      { kind: "simulation", id: "s.tl.08.sim", scenarioId: "scn.disagreeing-with-supervisor" },
      { kind: "activity", id: "s.tl.08.a4", activityId: "act.tl.08.4", mode: "independent" },
      { kind: "summary", id: "s.tl.08.summary", summaryCardId: "card.tl.08" },
      {
        kind: "apply_tomorrow",
        id: "s.tl.08.apply",
        task: {
          ar: "في أول قرار تختلف معه هذا الأسبوع، جرّب العناصر الأربعة قبل أن توافق أو تعترض بصمت.",
          en: "On the first decision you disagree with this week, try the four elements before silently agreeing or objecting.",
        },
        detail: {
          ar: "احترم منطقه، اذكر قلقك، قدّم دليلاً، واطلب أمراً محدداً.",
          en: "Respect their reasoning, state your concern, offer evidence, and ask for something specific.",
        },
      },
      {
        kind: "next_mission",
        id: "s.tl.08.next",
        teaser: {
          ar: "أتقنت إدارة العلاقة مع من يشرف عليك. الفصل القادم: التأثير على زميل لا سلطة لك عليه.",
          en: "You've mastered managing up. Next chapter: influencing a colleague you have no authority over.",
        },
      },
    ],
    activities: [
      {
        id: "act.tl.08.1",
        kind: "multiple_choice",
        skillId: "skill.managing-up",
        stage: 3,
        weight: 1,
        context: {
          ar: ["يخبرك الشريك المسؤول أنه سيقبل عرض تسوية تعتقدين أنه أقل بكثير من قيمة القضية."],
          en: ["The responsible partner tells you he'll accept a settlement offer you believe is far below the case's value."],
        },
        prompt: {
          ar: "ما التصرف الأصح الآن؟",
          en: "What is the correct action now?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«أفهم منطقك في إغلاق الملف. لدي سوابق تدعم رقماً أعلى، هل يمكن أن أعرضها عليك قبل الرد؟»",
              en: "'I understand your reasoning for closing this out. I have precedents supporting a higher figure — may I show you before we respond?'",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. يحترم منطقه، يقدّم دليلاً ملموساً، ويطلب أمراً محدداً بدل الاعتراض العام.",
              en: "Exactly. It respects his reasoning, offers concrete evidence, and asks for something specific instead of a general objection.",
            },
          },
          {
            id: "o2",
            label: { ar: "«حسناً» بلا أي تعليق رغم اعتقادك أن العرض ظالم.", en: "'Okay,' with no comment, despite believing the offer is unfair." },
            rationale: {
              ar: "يبتلع رأياً مهنياً كان يمكن أن يغيّر النتيجة لصالح الموكل.",
              en: "Swallows a professional view that could have changed the outcome for the client.",
            },
          },
          {
            id: "o3",
            label: { ar: "«هذا قرار خاطئ، ولن أصيغ خطاب القبول.»", en: "'This is the wrong call, and I won't draft the acceptance letter.'" },
            rationale: {
              ar: "يرفض التنفيذ مباشرة قبل عرض أي دليل، فيُقرأ كتحدٍّ لا كموقف مهني.",
              en: "Refuses outright before presenting any evidence, reading as defiance rather than a professional stance.",
            },
          },
          {
            id: "o4",
            label: { ar: "اتصل بالموكل مباشرة لإخباره أن الشريك مخطئ في تقديره.", en: "Call the client directly to tell them the partner's assessment is wrong." },
            rationale: {
              ar: "يتجاوز التسلسل الهرمي تماماً، ويهدم ثقة الشريك بك بشكل يصعب إصلاحه.",
              en: "Bypasses the hierarchy entirely, damaging the partner's trust in you in a way that's hard to repair.",
            },
          },
        ],
      },
      {
        id: "act.tl.08.2",
        kind: "ordering",
        skillId: "skill.managing-up",
        secondarySkillIds: ["skill.leadership-communication"],
        stage: 3,
        weight: 2,
        prompt: {
          ar: "رتّب عناصر الاعتراض المحترم بالترتيب الأصح لطرحه.",
          en: "Order the elements of a respectful objection in the right sequence to raise it.",
        },
        hint: {
          ar: "ابدأ بما يخفض حدة الموقف، وانتهِ بما يطلب قراراً محدداً.",
          en: "Start with what lowers the tension; end with what asks for a specific decision.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل عنصر بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each element instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "اعترف بمنطق الشريك أولاً، دون موافقة على النتيجة.", en: "Acknowledge the partner's reasoning first, without agreeing with the outcome." },
            rationale: {
              ar: "يخفض حدة الموقف ويثبت أنك لا تتحداه شخصياً.",
              en: "Lowers tension and shows you're not challenging him personally.",
            },
          },
          {
            id: "i2",
            label: { ar: "اذكر قلقك بوضوح وباختصار.", en: "State your concern clearly and briefly." },
            rationale: {
              ar: "يوضح أن هناك نقطة حقيقية تستحق الانتباه.",
              en: "Makes clear there's a real point that deserves attention.",
            },
          },
          {
            id: "i3",
            label: { ar: "قدّم دليلاً ملموساً - رقماً، سابقة، أو نصاً قانونياً.", en: "Offer concrete evidence — a number, a precedent, or a legal text." },
            rationale: {
              ar: "يحوّل الاعتراض من انطباع إلى حجة يمكن تقييمها.",
              en: "Turns the objection from an impression into an evaluable argument.",
            },
          },
          {
            id: "i4",
            label: { ar: "اطلب أمراً محدداً - مراجعة، أو دقائق لعرض بديل.", en: "Ask for something specific — a review, or minutes to present an alternative." },
            rationale: {
              ar: "يحوّل الاعتراض إلى خطوة قابلة للتنفيذ لا مجرد شكوى.",
              en: "Turns the objection into an actionable step, not just a complaint.",
            },
          },
        ],
      },
      {
        id: "act.tl.08.3",
        kind: "short_written",
        skillId: "skill.managing-up",
        secondarySkillIds: ["skill.leadership-communication"],
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.leadership-written.v1",
        weight: 3,
        minChars: 150,
        context: {
          ar: ["الشريك فادي بركات ينوي قبول عرض تسوية بنصف قيمة قضية سندس للألبسة. راجعت سوابق تدعم رقماً أعلى بكثير."],
          en: ["Partner Fadi Barakat intends to accept a settlement offer at half the value of the Sundus Apparel case. You've reviewed precedents supporting a much higher figure."],
        },
        prompt: {
          ar: "اكتب ما ستقوله لفادي (٤٠-٦٠ كلمة): احترام منطقه، قلقك، دليلك، وطلبك.",
          en: "Write what you'll say to Fadi (40-60 words): respect his reasoning, your concern, your evidence, and your ask.",
        },
        modelAnswer: {
          ar: ["«أفهم رغبتك بإغلاق الملف سريعاً مع ضغط القضايا الحالي. لكنني راجعت ثلاث سوابق مشابهة حصلت فيها الشركات على أكثر من ٨٠٪ من قيمة الشيك المرتجع. هل يمكن أن أعرض عليك السوابق خمس دقائق قبل أن نرد على العرض؟»"],
          en: ["'I understand you want to close this quickly given the caseload. But I reviewed three similar precedents where companies recovered over 80% of the dishonoured-cheque value. Could I show you the precedents for five minutes before we respond?'"],
        },
        weakAnswer: {
          text: {
            ar: ["«لا أوافق على هذا القرار، أعتقد أنه خطأ كبير.»"],
            en: ["'I don't agree with this decision, I think it's a big mistake.'"],
          },
          whatIsWrong: {
            ar: "رفض عام بلا دليل ولا طلب محدد، يُقرأ كتحدٍّ شخصي بدل اعتراض مهني قائم على حجة.",
            en: "A blanket refusal with no evidence and no specific ask, reading as a personal challenge rather than a substantive professional objection.",
          },
        },
      },
      {
        id: "act.tl.08.4",
        kind: "reflection",
        skillId: "skill.managing-up",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "بعد المحاكاة: في أي لحظة شعرت أقرب إلى الصمت الكامل أو المواجهة الحادة بدل الاعتراض المحترم؟",
          en: "After the simulation: at which moment did you feel closest to total silence or a sharp confrontation instead of a respectful objection?",
        },
        followUp: {
          ar: "ما الجملة الأولى التي ستستخدمها في المرة القادمة التي تختلف فيها مع رأي مديرك؟",
          en: "What will be your opening sentence next time you disagree with your supervisor's view?",
        },
      },
    ],
    summaryCard: {
      id: "card.tl.08",
      title: {
        ar: "اعتراض يُسمع، لا صمت ولا تمرّد",
        en: "An Objection That Gets Heard — Neither Silence Nor Defiance",
      },
      whatYouLearned: {
        ar: [
          "بين الصمت المطيع والتمرّد العلني، الاعتراض المحترم يحمي الموكل وعلاقتك المهنية معاً.",
          "الاعتراض الجيد يحترم منطق الطرف الآخر، ويستند إلى دليل ملموس لا انطباع عام.",
          "بعد أن تُسمع وجهة نظرك بوضوح، التزم بالقرار النهائي - قلت رأيك، والمسؤولية له.",
        ],
        en: [
          "Between silent compliance and open insubordination, a respectful objection protects both the client and your professional relationship.",
          "A good objection respects the other person's reasoning and rests on concrete evidence, not a vague impression.",
          "Once your view has been clearly heard, follow the final decision — you've said your piece; the call is theirs.",
        ],
      },
      framework: {
        name: { ar: "احترم · اذكر القلق · قدّم الدليل · اطلب أمراً محدداً", en: "Respect · State the Concern · Offer Evidence · Ask Specifically" },
        steps: [
          { ar: "احترم منطق الطرف الآخر دون موافقة على النتيجة.", en: "Respect the other person's reasoning without agreeing with the outcome." },
          { ar: "اذكر قلقك بوضوح واختصار.", en: "State your concern clearly and briefly." },
          { ar: "قدّم دليلاً ملموساً يدعم موقفك.", en: "Offer concrete evidence supporting your position." },
          { ar: "اطلب أمراً محدداً: مراجعة، أو وقتاً لعرض بديل.", en: "Ask for something specific: a review, or time to present an alternative." },
        ],
      },
      rememberThis: {
        ar: "الصمت يحمي موقفك اليوم، لكن الاعتراض المحترم يحمي الموكل وسمعتك معاً.",
        en: "Silence protects your position today, but a respectful objection protects the client and your reputation together.",
      },
      useItTomorrow: {
        ar: "في أول قرار تختلف معه هذا الأسبوع، جرّب العناصر الأربعة قبل أن توافق أو تعترض بصمت.",
        en: "On the first decision you disagree with this week, try the four elements before silently agreeing or objecting.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.lawyers-ceo", "src.smarter-collaboration", "src.68-power-moves"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 09 — Communicating like the person the room listens to
  // =========================================================================
  {
    id: "unit.tl.09",
    chapterId: "ch.tl.leading-without-authority",
    order: 9,
    title: {
      ar: "التحدث كمن يُصغي إليه الجميع في الغرفة",
      en: "Communicating Like the Person the Room Listens To",
    },
    subtitle: {
      ar: "ليس من يتكلم أكثر من يُسمع، بل من يربط كلامه بالقرار المطروح فعلياً.",
      en: "It's not who talks the most who gets heard — it's who ties what they say to the actual decision on the table.",
    },
    primarySkillId: "skill.leadership-communication",
    skillIds: ["skill.leadership-communication", "skill.teamwork"],
    stage: 4,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.tl.09.hook",
        text: {
          ar: "تحدثت نور لمدة دقيقتين في الاجتماع، ولم يعلّق أحد. لم يكن الاجتماع يتجاهلها - كانت نقطتها ضائعة قبل أن تصل.",
          en: "Nour spoke for two minutes in the meeting, and no one responded. The meeting wasn't ignoring her — her point was lost before it landed.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.tl.09.why",
        text: {
          ar: "في اجتماع مزدحم، لا أحد يكافئك على الكلام الأطول. من يربط نقطته بالقرار المطروح مباشرة هو من يُستمع إليه ويُستشار لاحقاً، بصرف النظر عن أقدميته.",
          en: "In a crowded meeting, no one rewards you for talking longest. Whoever ties their point directly to the decision on the table gets listened to and consulted later, regardless of seniority.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.tl.09.goals",
        goals: {
          ar: [
            "أن تحدد سبب تجاهل نقطة قلتها فعلاً - سياق زائد، أو غياب صلة واضحة بالقرار.",
            "أن تبني مساهمتك من ثلاثة أجزاء: النقطة، لماذا تهم القرار، والطلب.",
            "أن تختار لحظة التدخل بناءً على صلته بالقرار الجاري، لا لمجرد إثبات الحضور.",
          ],
          en: [
            "Identify why a point you actually made got ignored — too much context, or no clear tie to the decision.",
            "Build your contribution from three parts: the point, why it matters to the decision, and the ask.",
            "Choose when to speak based on relevance to the decision underway, not just to prove your presence.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.tl.09.lesson",
        title: {
          ar: "ابدأ بالنقطة، لا بالسياق",
          en: "Lead With the Point, Not the Context",
        },
        body: {
          ar: [
            "أخطر عادة تُفقد المساهمة أثرها هي البدء بسياق طويل قبل الوصول إلى الفكرة الفعلية - يفقد المستمعون خيط الاهتمام قبل أن تصل.",
            "المساهمة التي تُسمع تبدأ بالنقطة مباشرة: «أعتقد أن هذا يؤثر على موعد الإغلاق» - ثم السياق المختصر بعدها إن لزم.",
            "الجزء الثاني يربط النقطة بالقرار المطروح فعلياً في الغرفة، لا بموضوع عام مجاور له مهما كان مثيراً للاهتمام.",
            "الجزء الثالث طلب واضح: توافق، معلومة، أو قرار - لا مجرد ملاحظة تُترك معلقة دون أن يعرف أحد ماذا يفعل بها.",
            "التوقيت يحدد إن كانت النقطة تُسمع: تدخّل حين تكون النقطة مرتبطة بما يُناقَش الآن، لا حين يحين دورك فقط.",
            "الإيجاز لا يعني إخفاء الخبرة، بل احترام وقت الجميع - نقطة واضحة في عشرين ثانية تُسمع أكثر من شرح دقيقتين مشتت.",
          ],
          en: [
            "The habit that most costs a contribution its impact is starting with a long wind-up before the actual idea — listeners lose the thread before you get there.",
            "A contribution that lands opens with the point directly: 'I think this affects the closing date' — then brief context after, if needed.",
            "The second part ties the point to the decision actually on the table in the room, not to an adjacent, however-interesting topic.",
            "The third part is a clear ask: agreement, information, or a decision — not just a remark left hanging with no one knowing what to do with it.",
            "Timing decides whether the point lands: speak when it's tied to what's being discussed now, not just whenever your turn arrives.",
            "Brevity doesn't mean hiding expertise — it means respecting everyone's time. A clear point in twenty seconds is heard more than a scattered two-minute explanation.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.tl.09.visual",
        title: {
          ar: "من الكلام إلى أن تُسمع",
          en: "From Talking to Being Heard",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "سياق طويل قبل النقطة", en: "Long context before the point" },
            detail: {
              ar: "يفقد المستمعون الاهتمام قبل أن تصل إلى فكرتك الفعلية.",
              en: "Listeners lose interest before your actual idea arrives.",
            },
            tone: "negative",
          },
          {
            label: { ar: "نقطة بلا صلة بالقرار", en: "A point with no tie to the decision" },
            detail: {
              ar: "مثيرة للاهتمام، لكن الغرفة لا تعرف ماذا تفعل بها الآن.",
              en: "Interesting, but the room doesn't know what to do with it right now.",
            },
            tone: "negative",
          },
          {
            label: { ar: "النقطة + الصلة بالقرار + الطلب", en: "Point + tie to the decision + ask" },
            detail: {
              ar: "عشرون ثانية واضحة تنتقل مباشرة إلى فعل ملموس.",
              en: "Twenty clear seconds that move straight into a concrete action.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.tl.09.worked",
        strong: {
          label: {
            ar: "نور تربط نقطتها بالقرار مباشرة",
            en: "Nour ties her point directly to the decision",
          },
          text: {
            ar: [
              "في اجتماع استراتيجية إعادة هيكلة شركة بيت الأرض العقارية، يناقش الفريق جدولاً زمنياً مقترحاً للإغلاق دون الإشارة إلى موافقة الجهة التنظيمية.",
              "تقول نور هيكل: «أعتقد أن هذا يؤثر على موعد الإغلاق - موافقة الجهة التنظيمية تستغرق عادة ثلاثة أسابيع، ولم تُدرَج في الجدول. هل نضيفها الآن قبل أن نعتمد التاريخ؟»",
              "يتوقف النقاش، ويعدّل الفريق الجدول فوراً بناءً على نقطتها.",
            ],
            en: [
              "In a strategy meeting on Bayt Al-Ard Real Estate's restructuring, the team discusses a proposed closing timeline with no mention of regulatory approval.",
              "Nour Haikal says: 'I think this affects the closing date — regulatory approval usually takes three weeks and isn't in the timeline. Should we add it before we lock the date?'",
              "The discussion pauses, and the team immediately revises the timeline based on her point.",
            ],
          },
          why: {
            ar: "بدأت بالنقطة مباشرة، ربطتها بالقرار المطروح فعلياً، وأنهت بطلب واضح - فتحرك الاجتماع بناءً على كلامها فوراً.",
            en: "She led with the point, tied it to the decision on the table, and closed with a clear ask — the meeting acted on her words immediately.",
          },
        },
        weak: {
          label: {
            ar: "نور تبدأ بسياق طويل تضيع فيه النقطة",
            en: "Nour opens with long context that buries the point",
          },
          text: {
            ar: ["«كنت أفكر في الموضوع كثيراً، ومن خبرتي في ملفات سابقة، هناك عادة تعقيدات في هذا النوع من الصفقات، خصوصاً من الناحية التنظيمية، وأعتقد أنه ربما يجدر بنا...» يقاطعها أحدهم للانتقال إلى بند آخر."],
            en: ["'I've been thinking about this a lot, and from my experience on past deals, there are usually complications in this kind of transaction, especially regulatory, and I think maybe we should...' Someone interrupts to move to the next item."],
          },
          why: {
            ar: "أغرقت النقطة الفعلية في سياق طويل، فقاطعها الاجتماع قبل أن تصل إلى فكرتها، رغم أنها كانت صحيحة ومهمة.",
            en: "She buried the actual point in a long wind-up, and the meeting cut her off before she reached her idea, even though it was correct and important.",
          },
        },
      },
      { kind: "activity", id: "s.tl.09.a1", activityId: "act.tl.09.1", mode: "quick" },
      { kind: "activity", id: "s.tl.09.a2", activityId: "act.tl.09.2", mode: "guided" },
      { kind: "activity", id: "s.tl.09.a3", activityId: "act.tl.09.3", mode: "guided" },
      { kind: "activity", id: "s.tl.09.a4", activityId: "act.tl.09.4", mode: "independent" },
      { kind: "activity", id: "s.tl.09.a5", activityId: "act.tl.09.5", mode: "independent" },
      { kind: "summary", id: "s.tl.09.summary", summaryCardId: "card.tl.09" },
      {
        kind: "apply_tomorrow",
        id: "s.tl.09.apply",
        task: {
          ar: "في أول اجتماع غداً، جرّب النقطة أولاً قبل أي سياق، وراقب كيف يتغير الرد.",
          en: "In your first meeting tomorrow, try the point first before any context, and watch how the response changes.",
        },
        detail: {
          ar: "اربط نقطتك مباشرة بالقرار المطروح، لا بموضوع عام مجاور.",
          en: "Tie your point directly to the decision on the table, not an adjacent general topic.",
        },
      },
      {
        kind: "next_mission",
        id: "s.tl.09.next",
        teaser: {
          ar: "عرفت كيف تُسمع في الغرفة. الوحدة الأخيرة: كيف تقنع زميلاً لا سلطة لك عليه بإعطاء أولوية لطلبك.",
          en: "You know how to be heard in the room. The final unit: convincing a peer with no authority over you to prioritize your ask.",
        },
      },
    ],
    activities: [
      {
        id: "act.tl.09.1",
        kind: "multiple_choice",
        skillId: "skill.leadership-communication",
        stage: 4,
        weight: 1,
        context: {
          ar: ["في اجتماع فريق حول صفقة بيت الأرض، تلاحظ نور أن الجدول الزمني المقترح لا يشمل موافقة تنظيمية تستغرق ثلاثة أسابيع عادة."],
          en: ["In a team meeting on the Bayt Al-Ard deal, Nour notices the proposed timeline doesn't include a regulatory approval that usually takes three weeks."],
        },
        prompt: {
          ar: "كيف تطرح نور نقطتها بأكبر احتمال أن تُسمع؟",
          en: "How should Nour raise her point with the best chance of being heard?",
        },
        options: [
          {
            id: "o1",
            label: { ar: "«أعتقد أن هذا يؤثر على موعد الإغلاق - الموافقة التنظيمية غير مدرجة، وتستغرق ثلاثة أسابيع عادة.»", en: "'I think this affects the closing date — regulatory approval isn't in the timeline, and usually takes three weeks.'" },
            correct: true,
            rationale: {
              ar: "بالضبط. تبدأ بالنقطة، تربطها بالقرار المطروح، وتحمل معلومة قابلة للفعل الفوري.",
              en: "Exactly. It leads with the point, ties it to the decision on the table, and carries information the room can act on immediately.",
            },
          },
          {
            id: "o2",
            label: { ar: "«من خبرتي في ملفات سابقة، هذا النوع من الصفقات عادة معقد...»", en: "'From my experience on past files, this kind of deal is usually complicated...'" },
            rationale: {
              ar: "سياق عام طويل يؤجل الفكرة الفعلية، فيسهل أن يقاطعها الاجتماع أو يتجاوزها.",
              en: "A long, general wind-up that delays the actual idea, making it easy for the meeting to interrupt or move past her.",
            },
          },
          {
            id: "o3",
            label: { ar: "الانتظار حتى نهاية الاجتماع، ثم إخبار مديرها على انفراد.", en: "Waiting until the meeting ends, then telling her manager privately." },
            rationale: {
              ar: "يفوّت فرصة تعديل القرار فوراً أثناء المناقشة الفعلية له.",
              en: "Misses the chance to adjust the decision immediately, while it's actually being discussed.",
            },
          },
          {
            id: "o4",
            label: { ar: "لا تقول شيئاً لأن أحداً أقدم قد يكون لاحظ الأمر بالفعل.", en: "Says nothing, assuming someone more senior has probably already noticed it." },
            rationale: {
              ar: "يفترض دون تأكد، ويترك ثغرة فعلية دون أن يعرف أحد أنها لاحظتها.",
              en: "Assumes without confirming, leaving a real gap unaddressed while no one knows she'd spotted it.",
            },
          },
        ],
      },
      {
        id: "act.tl.09.2",
        kind: "categorization",
        skillId: "skill.leadership-communication",
        stage: 4,
        weight: 2,
        prompt: {
          ar: "صنّف كل مساهمة في الاجتماع: هل تصل نقطتها بوضوح، أم تضيع؟",
          en: "Sort each meeting contribution: does its point land clearly, or does it get lost?",
        },
        hint: {
          ar: "اسأل: هل تبدأ بالنقطة وترتبط بالقرار المطروح، أم تضيع في سياق أو تفصيل بعيد؟",
          en: "Ask: does it lead with the point and tie to the decision, or get lost in context or a tangent?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «تصل بوضوح» / «تضيع» أسفل كل مساهمة بدل السحب.",
          en: "Choose \"Lands clearly\" / \"Gets lost\" from buttons under each contribution instead of dragging.",
        },
        buckets: [
          { id: "lands", label: { ar: "تصل بوضوح", en: "Lands clearly" } },
          { id: "lost", label: { ar: "تضيع", en: "Gets lost" } },
        ],
        items: [
          {
            id: "c1",
            label: { ar: "«أعتقد أن هذا يؤخر التوقيع - نحتاج توقيع الشريك الثاني قبل الجمعة.»", en: "'I think this delays signing — we need the second partner's signature before Friday.'" },
            bucketId: "lands",
            rationale: {
              ar: "نقطة مباشرة مرتبطة بقرار فوري وموعد محدد.",
              en: "A direct point tied to an immediate decision and a specific date.",
            },
          },
          {
            id: "c2",
            label: { ar: "«بشكل عام، أشعر أن هناك مخاطر كثيرة في هذا النوع من الملفات.»", en: "'Generally, I feel there are a lot of risks in this kind of file.'" },
            bucketId: "lost",
            rationale: {
              ar: "ملاحظة عامة بلا ربط بقرار محدد أو خطوة قابلة للتنفيذ.",
              en: "A general remark with no tie to a specific decision or actionable step.",
            },
          },
          {
            id: "c3",
            label: { ar: "«قبل أن ننتقل، تذكرت قصة من قضية قديمة قد تفيدنا لاحقاً...»", en: "'Before we move on, I remember a story from an old case that might help us later...'" },
            bucketId: "lost",
            rationale: {
              ar: "يفتح موضوعاً جانبياً بلا صلة مباشرة بالقرار الجاري نقاشه الآن.",
              en: "Opens a side topic with no direct link to the decision being discussed right now.",
            },
          },
          {
            id: "c4",
            label: { ar: "«هذا الرقم يغيّر التسعير - هل نراجعه قبل إرسال العرض؟»", en: "'This figure changes the pricing — should we review it before sending the offer?'" },
            bucketId: "lands",
            rationale: {
              ar: "نقطة محددة مع طلب واضح يمكن للاجتماع التصرف بناءً عليه فوراً.",
              en: "A specific point with a clear ask the meeting can act on immediately.",
            },
          },
        ],
      },
      {
        id: "act.tl.09.3",
        kind: "fill_blank",
        skillId: "skill.leadership-communication",
        stage: 4,
        weight: 2,
        prompt: {
          ar: "أكمل بنية المساهمة الثلاثية بالكلمة الأصح في كل فراغ.",
          en: "Complete the three-part contribution structure with the most correct word in each blank.",
        },
        template: {
          ar: "ابدأ بـ{{0}} مباشرة، اربطها بـ{{1}} المطروح في الغرفة، ثم اطلب {{2}} واضحاً لا يترك فكرتك معلّقة.",
          en: "Lead with the {{0}} directly, tie it to the {{1}} on the table, then ask for a clear {{2}} that doesn't leave your idea hanging.",
        },
        blanks: [
          {
            id: "b0",
            options: [{ ar: "نقطة", en: "point" }, { ar: "سياق كامل", en: "full backstory" }, { ar: "قصة سابقة", en: "a past story" }],
            answerIndex: 0,
            rationale: {
              ar: "البدء بالسياق الكامل يفقد الاهتمام قبل وصول الفكرة الفعلية.",
              en: "Leading with the full backstory loses interest before the actual idea arrives.",
            },
          },
          {
            id: "b1",
            options: [{ ar: "القرار", en: "decision" }, { ar: "موضوع عام", en: "a general topic" }, { ar: "أي تفصيل مثير", en: "any interesting detail" }],
            answerIndex: 0,
            rationale: {
              ar: "ربط النقطة بموضوع عام غير مرتبط بالقرار الجاري يفقدها صلتها العملية.",
              en: "Tying the point to a general unrelated topic strips it of practical relevance.",
            },
          },
          {
            id: "b2",
            options: [{ ar: "طلب", en: "ask" }, { ar: "تعليق", en: "comment" }, { ar: "ملاحظة", en: "remark" }],
            answerIndex: 0,
            rationale: {
              ar: "تعليق أو ملاحظة بلا طلب يترك الاجتماع دون فعل محدد يتخذه.",
              en: "A comment or remark with no ask leaves the meeting with no specific action to take.",
            },
          },
        ],
      },
      {
        id: "act.tl.09.4",
        kind: "short_written",
        skillId: "skill.leadership-communication",
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.leadership-written.v1",
        weight: 3,
        minChars: 80,
        context: {
          ar: ["في اجتماع فريق حول صفقة بيت الأرض، تلاحظين أن جدول الإغلاق المقترح لا يشمل الموافقة التنظيمية التي تستغرق ثلاثة أسابيع عادة."],
          en: ["In a team meeting on the Bayt Al-Ard deal, you notice the proposed closing timeline doesn't include the regulatory approval, which usually takes three weeks."],
        },
        prompt: {
          ar: "اكتب مساهمتك (٢٠-٤٠ كلمة) بالبنية الثلاثية: نقطة، صلة بالقرار، طلب.",
          en: "Write your contribution (20-40 words) using the three-part structure: point, tie to the decision, ask.",
        },
        modelAnswer: {
          ar: ["«أعتقد أن هذا يؤثر على موعد الإغلاق - الموافقة التنظيمية غير مدرجة في الجدول، وتستغرق ثلاثة أسابيع عادة. هل نضيفها قبل أن نعتمد التاريخ النهائي؟»"],
          en: ["'I think this affects the closing date — regulatory approval isn't in the timeline, and usually takes three weeks. Should we add it before locking the final date?'"],
        },
        weakAnswer: {
          text: {
            ar: ["«من خبرتي، هذا النوع من الصفقات فيه دائماً تعقيدات، ويجب أن نكون حذرين بشكل عام.»"],
            en: ["'From my experience, this kind of deal always has complications, and we should generally be careful.'"],
          },
          whatIsWrong: {
            ar: "ملاحظة عامة بلا ربط بقرار محدد أو معلومة قابلة للفعل، فيسهل تجاوزها في الاجتماع.",
            en: "A general remark with no tie to a specific decision or actionable information, easy for the meeting to skip past.",
          },
        },
      },
      {
        id: "act.tl.09.5",
        kind: "reflection",
        skillId: "skill.leadership-communication",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع اجتماعاً تحدثت فيه ولم يعلّق أحد على نقطتك.",
          en: "Recall a meeting where you spoke and no one responded to your point.",
        },
        followUp: {
          ar: "لو أعدت صياغتها بالنقطة أولاً ثم الصلة بالقرار، كيف كانت لتختلف؟",
          en: "If you'd restructured it point-first, then tied to the decision, how would it have landed differently?",
        },
      },
    ],
    summaryCard: {
      id: "card.tl.09",
      title: {
        ar: "النقطة أولاً، ثم الصلة، ثم الطلب",
        en: "The Point First, Then the Tie, Then the Ask",
      },
      whatYouLearned: {
        ar: [
          "السياق الطويل قبل الفكرة الفعلية يفقد اهتمام الغرفة قبل أن تصل إلى نقطتك.",
          "المساهمة التي تُسمع تربط نفسها مباشرة بالقرار المطروح الآن، لا بموضوع عام مجاور.",
          "الإيجاز يحترم وقت الجميع، ولا يعني إخفاء خبرتك أو تجاهل التفاصيل.",
        ],
        en: [
          "A long wind-up before the actual idea loses the room's attention before your point arrives.",
          "A contribution that gets heard ties itself directly to the decision on the table now, not an adjacent general topic.",
          "Brevity respects everyone's time — it doesn't mean hiding your expertise or skipping detail.",
        ],
      },
      framework: {
        name: { ar: "النقطة · الصلة بالقرار · الطلب", en: "The Point · Tie to the Decision · The Ask" },
        steps: [
          { ar: "ابدأ بالنقطة مباشرة، دون سياق طويل مسبق.", en: "Lead with the point directly, no long context first." },
          { ar: "اربطها بالقرار المطروح فعلياً في الغرفة الآن.", en: "Tie it to the decision actually on the table right now." },
          { ar: "اختم بطلب واضح: توافق، معلومة، أو قرار.", en: "Close with a clear ask: agreement, information, or a decision." },
        ],
      },
      rememberThis: {
        ar: "من يربط نقطته بالقرار يُستمع إليه، بصرف النظر عن أقدميته حول الطاولة.",
        en: "Whoever ties their point to the decision gets listened to, regardless of seniority around the table.",
      },
      useItTomorrow: {
        ar: "في أول اجتماع غداً، جرّب النقطة أولاً قبل أي سياق، وراقب كيف يتغير الرد.",
        en: "In your first meeting tomorrow, try the point first before any context, and watch how the response changes.",
      },
    },
    targetLevel: 4,
    sourceIds: ["src.introverted-leader", "src.smarter-collaboration", "src.lawyers-ceo"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 10 — Getting a busy peer to prioritize your ask
  // =========================================================================
  {
    id: "unit.tl.10",
    chapterId: "ch.tl.leading-without-authority",
    order: 10,
    title: {
      ar: "إقناع زميل مشغول بإعطاء الأولوية لطلبك",
      en: "Getting a Busy Peer to Prioritize Your Ask",
    },
    subtitle: {
      ar: "لا سلطة لك عليه، لكن القضية المشتركة والطلب العادل يصنعان ما لا يصنعه الأمر.",
      en: "You have no authority over him, but shared stakes and a fair ask accomplish what an order never could.",
    },
    primarySkillId: "skill.leading-without-authority",
    skillIds: ["skill.leading-without-authority", "skill.leadership-communication"],
    stage: 4,
    estimatedMinutes: 10,
    steps: [
      {
        kind: "hook",
        id: "s.tl.10.hook",
        text: {
          ar: "رامي ليس تحت إمرتك، وله مديره وأولوياته الخاصة. ومع ذلك، تحتاجين فريقه أن يراجع المستندات قبل الخميس.",
          en: "Rami doesn't report to you, and has his own manager and priorities. Yet you need his team to review the documents before Thursday.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.tl.10.why",
        text: {
          ar: "التأثير بلا سلطة لا يُبنى على الأمر أو التوسل، بل على قضية مشتركة وطلب عادل ومحدد. من يتقن هذا يصبح الشخص الذي يُنجَز طلبه، لا الذي يُتجاهل أو يُصعَّد ضده.",
          en: "Influence without authority isn't built on ordering or begging — it's built on shared stakes and a fair, specific ask. Master this, and your requests get done, instead of ignored or escalated against.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.tl.10.goals",
        goals: {
          ar: [
            "أن تحدد القضية المشتركة الفعلية بينك وبين الزميل، لا فقط ما تحتاجه أنت.",
            "أن تصوغ طلباً محدداً وعادلاً بدل طلب عام يصعب الالتزام به.",
            "أن تعرض مقابلاً معقولاً يسهّل على الزميل الموافقة، لا تفرضاً بلا فائدة له.",
          ],
          en: [
            "Identify the real shared stake between you and the colleague, not just what you need.",
            "Phrase a specific, fair ask instead of a vague one that's hard to commit to.",
            "Offer a reasonable trade-off that makes it easy for the colleague to say yes, not a one-sided demand.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.tl.10.lesson",
        title: {
          ar: "التأثير بلا سلطة له بنية، لا حظ",
          en: "Influence Without Authority Has a Structure, Not Luck",
        },
        body: {
          ar: [
            "حين لا تملك سلطة رسمية على زميل، خياران سريعان يفشلان غالباً: الطلب المبهم الذي يسهل تأجيله، أو التصعيد الفوري لمدير الزميل.",
            "البداية الصحيحة تسمية القضية المشتركة بصراحة: لماذا يهم هذا الأمر كليكما، لا فقط لك أنت.",
            "بعد القضية المشتركة، اعرض ما تقدّمه أنت مقابلاً - مراجعة سريعة، أولوية لملف له لاحقاً، أو مجرد اعتراف واضح بجهده.",
            "الطلب نفسه يجب أن يكون محدداً ومحدوداً: ثلاثة مستندات بعينها، بحلول الخميس ظهراً - لا «راجع الملف حين تستطيع».",
            "الطلب المحدود أسهل قبولاً من طلب مفتوح، لأنه يمنح الزميل فكرة واضحة عن الجهد المطلوب منه فعلياً.",
            "التصعيد لمدير الزميل خيار أخير، لا أول خطوة - استخدامه مبكراً يحرق علاقة قد تحتاجها في ملفات مشتركة قادمة.",
            "من يبني طلبه على قضية مشتركة ومقابل عادل يحصل على تعاون حقيقي، لا موافقة مجاملة سرعان ما تتراجع تحت الضغط.",
          ],
          en: [
            "When you have no formal authority over a colleague, two quick options usually fail: a vague ask that's easy to delay, or immediately escalating to their manager.",
            "The right start is naming the shared stake honestly: why this matters to both of you, not just to you.",
            "After naming the shared stake, offer something in return — a quick review, priority on one of his files later, or simply clear recognition of his effort.",
            "The ask itself must be specific and scoped: three named documents, by Thursday noon — not 'review the file whenever you can.'",
            "A scoped ask is easier to accept than an open-ended one, because it gives the colleague a clear sense of the actual effort involved.",
            "Escalating to the colleague's manager is a last resort, not a first move — using it early burns a relationship you may need on future shared files.",
            "Whoever builds their ask on shared stakes and a fair trade gets real cooperation, not a polite yes that quietly slips under pressure.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.tl.10.visual",
        title: {
          ar: "من الطلب المبهم إلى القضية المشتركة",
          en: "From a Vague Ask to Shared Stakes",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "الأمر أو التصعيد الفوري", en: "Ordering or escalating immediately" },
            detail: {
              ar: "يفرض تعاوناً بلا سلطة فعلية، ويحرق العلاقة لملفات قادمة.",
              en: "Imposes cooperation with no real authority, and burns the relationship for future files.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الطلب المبهم", en: "The vague ask" },
            detail: {
              ar: "«ساعدني حين تستطيع» يسهل تأجيله إلى ما لا نهاية.",
              en: "'Help when you can' is endlessly easy to postpone.",
            },
            tone: "negative",
          },
          {
            label: { ar: "القضية المشتركة + طلب عادل ومحدد", en: "Shared stakes + a fair, specific ask" },
            detail: {
              ar: "يمنح الزميل سبباً حقيقياً ونطاقاً واضحاً للموافقة.",
              en: "Gives the colleague a real reason and a clear scope to say yes.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.tl.10.worked",
        strong: {
          label: {
            ar: "نور تبني قضية مشتركة مع رامي",
            en: "Nour builds a shared case with Rami",
          },
          text: {
            ar: [
              "تحتاج نور هيكل مراجعة فريق رامي داغر في قسم الشركات لثلاثة مستندات في صفقة استحواذ شركة وادي الأرز للأغذية، قبل إغلاق الصفقة الخميس.",
              "تكتب له: «أعرف أن فريقك مشغول. إغلاق وادي الأرز يهمنا معاً - عمولة قسمكما مرتبطة بإتمامه أيضاً. أحتاج مراجعة ثلاثة مستندات محددة فقط بحلول الخميس ظهراً، وسأتولى أنا مراجعة ملف عقاري لكم الأسبوع القادم مقابل ذلك.»",
              "يوافق رامي فوراً، ويحدد أحد فريقه لإنهاء المراجعة في الموعد.",
            ],
            en: [
              "Nour Haikal needs Rami Dagher's Corporate team to review three documents on Cedar Valley Foods' acquisition, before Thursday's closing.",
              "She writes: 'I know your team's swamped. Closing Cedar Valley matters to both of us — your department's fee is tied to it too. I need exactly three documents reviewed by Thursday noon, and I'll take on reviewing a real-estate file for your team next week in return.'",
              "Rami agrees immediately, and assigns someone on his team to finish the review on time.",
            ],
          },
          why: {
            ar: "سمّت القضية المشتركة بصراحة، حددت طلباً ضيقاً وموعداً واضحاً، وعرضت مقابلاً حقيقياً - فحصلت على موافقة سريعة بلا سلطة رسمية.",
            en: "She named the shared stake honestly, scoped the ask tightly with a clear date, and offered a real trade — earning a fast yes with no formal authority.",
          },
        },
        weak: {
          label: {
            ar: "نور تطلب بشكل مبهم",
            en: "Nour asks vaguely",
          },
          text: {
            ar: ["«هل يمكن أن تلقي نظرة على مستندات وادي الأرز حين تستطيع؟» - رسالة تبقى بلا رد لثلاثة أيام."],
            en: ["'Could you take a look at the Cedar Valley documents whenever you get a chance?' — a message that goes unanswered for three days."],
          },
          why: {
            ar: "طلب مفتوح بلا موعد ولا قضية مشتركة يسهل تأجيله إلى ما لا نهاية، خصوصاً أمام أولويات رامي الخاصة.",
            en: "An open-ended ask with no deadline and no shared stake is endlessly easy to postpone, especially against Rami's own priorities.",
          },
        },
      },
      { kind: "activity", id: "s.tl.10.a1", activityId: "act.tl.10.1", mode: "quick" },
      { kind: "activity", id: "s.tl.10.a2", activityId: "act.tl.10.2", mode: "guided" },
      { kind: "activity", id: "s.tl.10.a3", activityId: "act.tl.10.3", mode: "independent" },
      { kind: "simulation", id: "s.tl.10.sim", scenarioId: "scn.reluctant-peer-buyin" },
      { kind: "activity", id: "s.tl.10.a4", activityId: "act.tl.10.4", mode: "independent" },
      { kind: "summary", id: "s.tl.10.summary", summaryCardId: "card.tl.10" },
      {
        kind: "apply_tomorrow",
        id: "s.tl.10.apply",
        task: {
          ar: "حدد طلباً معلقاً مع زميل بلا سلطة لك عليه، وأعد صياغته بالعناصر الأربعة اليوم.",
          en: "Pick one pending ask with a colleague you have no authority over, and rebuild it with the four elements today.",
        },
        detail: {
          ar: "القضية المشتركة، المقابل، النطاق الضيق، والموعد المحدد.",
          en: "Shared stake, trade-off, tight scope, and a specific deadline.",
        },
      },
      {
        kind: "next_mission",
        id: "s.tl.10.next",
        teaser: {
          ar: "أكملت مسار العمل الجماعي والقيادة. المهارات الآن ليست معرفة نظرية، بل عادات تُختبر في كل ملف وكل زميل تتعامل معه.",
          en: "You've completed the teamwork and leadership path. These skills aren't theory now — they're habits tested with every file and every colleague.",
        },
      },
    ],
    activities: [
      {
        id: "act.tl.10.1",
        kind: "multiple_choice",
        skillId: "skill.leading-without-authority",
        stage: 4,
        weight: 1,
        context: {
          ar: ["تحتاجين فريق رامي داغر في قسم الشركات لمراجعة ثلاثة مستندات في صفقة وادي الأرز قبل الخميس، ولا سلطة رسمية لك عليه."],
          en: ["You need Rami Dagher's Corporate team to review three documents on the Cedar Valley deal before Thursday, and you have no formal authority over him."],
        },
        prompt: {
          ar: "ما أفضل طريقة لطلب ذلك؟",
          en: "What is the best way to make this ask?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«إغلاق وادي الأرز يهمنا معاً. أحتاج مراجعة ثلاثة مستندات محددة بحلول الخميس ظهراً، وسأراجع لكم ملفاً مقابل ذلك.»",
              en: "'Closing Cedar Valley matters to both of us. I need three specific documents reviewed by Thursday noon, and I'll review a file for you in return.'",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. يسمي القضية المشتركة، يحدد طلباً ضيقاً وموعداً، ويعرض مقابلاً عادلاً.",
              en: "Exactly. It names the shared stake, scopes the ask with a deadline, and offers a fair trade.",
            },
          },
          {
            id: "o2",
            label: { ar: "«هل يمكن أن تلقي نظرة على المستندات حين تستطيع؟»", en: "'Could you take a look at the documents whenever you get a chance?'" },
            rationale: {
              ar: "طلب مفتوح بلا موعد ولا قضية مشتركة، يسهل تأجيله إلى ما لا نهاية.",
              en: "An open-ended ask with no deadline and no shared stake, endlessly easy to postpone.",
            },
          },
          {
            id: "o3",
            label: { ar: "التوجه مباشرة إلى مدير رامي لتوجيه الطلب من فوق.", en: "Going straight to Rami's manager to direct the request from above." },
            rationale: {
              ar: "يحرق علاقة قد تحتاجينها في ملفات مشتركة قادمة، قبل تجربة الطلب المباشر أصلاً.",
              en: "Burns a relationship you may need on future shared files, before even trying the direct ask.",
            },
          },
          {
            id: "o4",
            label: { ar: "إرسال المستندات الثلاثة مع رسالة: «هذا عاجل، يجب إنجازه اليوم.»", en: "Sending the three documents with a message: 'This is urgent, it needs to happen today.'" },
            rationale: {
              ar: "يفرض أولوية بلا سلطة فعلية ولا قضية مشتركة، فيبدو أمراً لا طلباً.",
              en: "Imposes priority with no real authority and no shared stake, coming across as an order, not a request.",
            },
          },
        ],
      },
      {
        id: "act.tl.10.2",
        kind: "ordering",
        skillId: "skill.leading-without-authority",
        secondarySkillIds: ["skill.leadership-communication"],
        stage: 4,
        weight: 2,
        prompt: {
          ar: "رتّب عناصر بناء الطلب مع رامي بالترتيب الأصح.",
          en: "Order the elements of building the ask with Rami in the right sequence.",
        },
        hint: {
          ar: "ابدأ بما يجعل الأمر يهمه أيضاً، وانتهِ بموعد محدد لا يُساء فهمه.",
          en: "Start with what makes this matter to him too; end with a specific date that can't be misread.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل عنصر بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each element instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "سمِّ القضية المشتركة: لماذا يهم هذا كليكما.", en: "Name the shared stake: why this matters to both of you." },
            rationale: {
              ar: "يمنح الزميل سبباً حقيقياً بدل مجرد طلب شخصي منك.",
              en: "Gives the colleague a real reason, not just a personal favor to you.",
            },
          },
          {
            id: "i2",
            label: { ar: "اعرض مقابلاً عادلاً يسهّل عليه الموافقة.", en: "Offer a fair trade that makes it easy for him to say yes." },
            rationale: {
              ar: "يحوّل الطلب من عبء أحادي إلى تبادل متوازن.",
              en: "Turns the ask from a one-sided burden into a balanced exchange.",
            },
          },
          {
            id: "i3",
            label: { ar: "حدد طلباً ضيقاً بدل طلب مفتوح النطاق.", en: "Scope the ask tightly instead of leaving it open-ended." },
            rationale: {
              ar: "يمنح الزميل فكرة واضحة عن الجهد الفعلي المطلوب منه.",
              en: "Gives the colleague a clear sense of the actual effort required.",
            },
          },
          {
            id: "i4",
            label: { ar: "اذكر موعداً نهائياً محدداً بدقة.", en: "State a precise, specific deadline." },
            rationale: {
              ar: "يمنع الطلب من التحول إلى نية حسنة بلا موعد فعلي.",
              en: "Stops the ask from turning into good intentions with no actual deadline.",
            },
          },
        ],
      },
      {
        id: "act.tl.10.3",
        kind: "short_written",
        skillId: "skill.leading-without-authority",
        secondarySkillIds: ["skill.leadership-communication"],
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.leadership-written.v1",
        weight: 3,
        minChars: 150,
        context: {
          ar: ["تحتاجين فريق رامي داغر لمراجعة ثلاثة مستندات في صفقة وادي الأرز بحلول الخميس ظهراً، ولا سلطة رسمية لك عليه."],
          en: ["You need Rami Dagher's team to review three documents on the Cedar Valley deal by Thursday noon, and have no formal authority over him."],
        },
        prompt: {
          ar: "اكتب رسالة الطلب (٤٠-٦٠ كلمة): القضية المشتركة، الطلب المحدد بموعده، والمقابل الذي تعرضينه.",
          en: "Write the request message (40-60 words): the shared stake, the specific ask with a deadline, and the trade you're offering.",
        },
        modelAnswer: {
          ar: ["«رامي، إغلاق وادي الأرز يهمنا معاً - عمولة قسمكما مرتبطة به أيضاً. أحتاج مراجعة ثلاثة مستندات محددة بحلول الخميس ظهراً. سأراجع لفريقكم ملفاً عقارياً الأسبوع القادم مقابل ذلك - هل هذا ممكن؟»"],
          en: ["'Rami, closing Cedar Valley matters to both of us — your department's fee is tied to it too. I need three specific documents reviewed by Thursday noon. I'll review a real-estate file for your team next week in return — does that work?'"],
        },
        weakAnswer: {
          text: {
            ar: ["«رامي، أحتاج مساعدتك في صفقة وادي الأرز، هل يمكنك المساعدة قريباً؟»"],
            en: ["'Rami, I need your help on the Cedar Valley deal, can you help soon?'"],
          },
          whatIsWrong: {
            ar: "لا قضية مشتركة، لا موعد محدد، ولا مقابل - طلب سهل تأجيله بلا أي التزام فعلي.",
            en: "No shared stake, no specific deadline, no trade offered — an ask that's easy to postpone with no real commitment.",
          },
        },
      },
      {
        id: "act.tl.10.4",
        kind: "reflection",
        skillId: "skill.leading-without-authority",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "بعد المحاكاة: في أي لحظة شعرت أقرب إلى التنازل الكامل أو الضغط المفرط بدل بناء قضية مشتركة؟",
          en: "After the simulation: at which moment did you feel closest to fully backing down or pushing too hard, instead of building a shared case?",
        },
        followUp: {
          ar: "ما القضية المشتركة الحقيقية التي ستسميها في المرة القادمة التي تحتاجين فيها تعاون زميل بلا سلطة عليه؟",
          en: "What real shared stake will you name next time you need a colleague's cooperation with no authority over them?",
        },
      },
    ],
    summaryCard: {
      id: "card.tl.10",
      title: {
        ar: "القضية المشتركة تصنع التعاون",
        en: "Shared Stakes Build Cooperation",
      },
      whatYouLearned: {
        ar: [
          "التأثير بلا سلطة يُبنى على قضية مشتركة ومقابل عادل، لا على الأمر أو التوسل.",
          "الطلب الضيق والمحدد بموعد أسهل قبولاً من طلب مفتوح يسهل تأجيله.",
          "التصعيد لمدير الزميل خيار أخير، لا أول خطوة تجربها.",
        ],
        en: [
          "Influence without authority is built on shared stakes and a fair trade, not ordering or begging.",
          "A narrow, deadline-bound ask is easier to accept than an open one that's easy to postpone.",
          "Escalating to a colleague's manager is a last resort, not the first move you try.",
        ],
      },
      framework: {
        name: { ar: "سمِّ القضية · اعرض المقابل · حدد الطلب · اذكر الموعد", en: "Name the Stake · Offer the Trade · Scope the Ask · State the Deadline" },
        steps: [
          { ar: "سمِّ القضية المشتركة بصراحة.", en: "Name the shared stake honestly." },
          { ar: "اعرض مقابلاً عادلاً يسهّل الموافقة.", en: "Offer a fair trade that makes yes easy." },
          { ar: "حدد طلباً ضيقاً بدل طلب مفتوح.", en: "Scope the ask tightly instead of open-ended." },
          { ar: "اذكر موعداً نهائياً محدداً بدقة.", en: "State a precise, specific deadline." },
        ],
      },
      rememberThis: {
        ar: "الزميل الذي يفهم لماذا يهمه الأمر أيضاً، يتعاون بصدق لا بمجاملة.",
        en: "A colleague who understands why it matters to them too cooperates for real, not out of politeness.",
      },
      useItTomorrow: {
        ar: "حدد طلباً معلقاً مع زميل بلا سلطة لك عليه، وأعد صياغته بالعناصر الأربعة اليوم.",
        en: "Pick one pending ask with a colleague you have no authority over, and rebuild it with the four elements today.",
      },
    },
    targetLevel: 4,
    sourceIds: ["src.smarter-collaboration", "src.governance-raci", "src.68-power-moves"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
