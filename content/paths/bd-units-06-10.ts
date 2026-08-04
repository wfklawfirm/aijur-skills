import type { UnitDef } from "../types";

/**
 * Business Development path (`path.business-development`, domain
 * `dom.business-development`) — units 6-10, the second half of the path.
 *
 * `ch.bd.staying-visible` covers units 6-8: sustained, appropriate follow-up
 * with a professional network over months, and appropriately asking a
 * satisfied client for a referral (closing with a simulation).
 * `ch.bd.converting-to-instructions` covers units 9-10: recognizing a
 * genuine opening to turn interest or reputation into actual signed work,
 * without overselling or pressure, and never promising a legal outcome
 * (closing the whole path with a simulation).
 *
 * Recurring protagonist across all five units: Dana Khatib (دانا الخطيب),
 * a senior associate. Every client/contact name is distinct per unit and
 * does not reuse names from other domains' reference files.
 *
 * Skills, rubrics and scenarios referenced here are authored elsewhere in
 * the bundle (framework/skills-business-development.ts,
 * framework/rubrics-business-development.ts,
 * scenarios-business-development.ts).
 */
export const BD_UNITS_06_10: UnitDef[] = [
  // =========================================================================
  // UNIT 06 — Staying visible without being annoying
  // =========================================================================
  {
    id: "unit.bd.06",
    chapterId: "ch.bd.staying-visible",
    order: 6,
    title: {
      ar: "البقاء حاضراً دون أن تصبح مزعجاً",
      en: "Staying Visible Without Being Annoying",
    },
    subtitle: {
      ar: "المتابعة الصامتة تُنسى، والمتابعة المفرطة تُتجاهل - بينهما مسار الحضور المفيد.",
      en: "Silent follow-up gets forgotten, excessive follow-up gets muted — useful presence lives between them.",
    },
    primarySkillId: "skill.staying-top-of-mind",
    skillIds: ["skill.staying-top-of-mind", "skill.relationship-building"],
    stage: 3,
    estimatedMinutes: 7,
    steps: [
      {
        kind: "hook",
        id: "s.bd.06.hook",
        text: {
          ar: "الرسالة التي أرسلتها قبل سنة لعميل محتمل ثم اختفيت لم تبنِ علاقة، بل نُسيت تماماً.",
          en: "The message you sent a prospective client a year ago, then vanished — didn't build a relationship. It just got forgotten.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.bd.06.why",
        text: {
          ar: "من يختفي بعد اللقاء الأول يُنسى قبل أن تظهر الحاجة الفعلية لمحامٍ. ومن يراسل كل أسبوع بلا مضمون يُصنَّف كإزعاج ويُحظر بصمت.",
          en: "Disappear after a first meeting, and you're forgotten before a real legal need arises. Message weekly with nothing to say, and you get quietly muted as noise.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.bd.06.goals",
        goals: {
          ar: [
            "أن تميّز بين المتابعة التي تضيف قيمة والمتابعة التي لا تحمل سوى نيّة الترويج لنفسك.",
            "أن تبني إيقاعاً معقولاً للتواصل يمتد على أشهر دون أن يشعر الطرف الآخر بالضغط.",
            "أن تصوغ رسالة متابعة قصيرة تفيد المتلقي فعلاً، حتى لو لم يحتج محامياً غداً.",
          ],
          en: [
            "Tell follow-up that adds value apart from follow-up that carries only self-promotion.",
            "Build a reasonable contact rhythm across months without the other side feeling pressured.",
            "Write a short follow-up message that's genuinely useful, even if they need no lawyer tomorrow.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.bd.06.lesson",
        title: {
          ar: "الحضور المفيد له إيقاع، لا تكرار",
          en: "Useful Presence Has a Rhythm, Not a Frequency",
        },
        body: {
          ar: [
            "أغلب المحامين يقعون في أحد طرفين: يختفون تماماً بعد اللقاء الأول، أو يراسلون بلا مضمون حقيقي حتى يُحظروا بصمت.",
            "المتابعة المفيدة لا تسأل «هل تحتاج محامياً؟» بل تشارك شيئاً يفيد المتلقي فعلاً: تنظيماً جديداً، ملاحظة قصيرة، أو خبراً يخصّ قطاعه.",
            "الإيقاع المعقول يمتد على أشهر لا أسابيع: رسالة كل ستة إلى ثمانية أسابيع كافية لتبقى حاضراً دون أن تصبح عبئاً.",
            "أفضل رسائل المتابعة لا تحمل طلباً في نهايتها. الهدف أن يتذكرك حين تظهر الحاجة، لا أن يشعر أنك تنتظر فرصة.",
            "تفقّد قبل كل رسالة: هل هذا يفيده هو، أم يخدم رغبتي أنا في أن أبقى في ذهنه؟ السؤال وحده يمنع كثيراً من الإزعاج.",
            "التوقف عن المتابعة بعد رفض أو صمت طويل ليس ضعفاً، بل احتراماً لحدود العلاقة - عد لاحقاً بمناسبة حقيقية فقط.",
          ],
          en: [
            "Most lawyers fall into one extreme: vanishing completely after a first meeting, or messaging with no real content until they're quietly muted.",
            "Useful follow-up doesn't ask 'need a lawyer?' — it shares something genuinely useful: a new regulation, a short note, an observation about their sector.",
            "A reasonable rhythm spans months, not weeks: one message every six to eight weeks keeps you present without becoming a burden.",
            "The best follow-up messages carry no ask at the end. The goal is being remembered when a need arises — not seeming to wait for one.",
            "Before every message, ask: does this help them, or just my own wish to stay top of mind? That question alone prevents most annoyance.",
            "Stopping follow-up after a rejection or long silence isn't weakness — it respects the relationship's limits. Return later only with a genuine reason.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.bd.06.visual",
        title: {
          ar: "ثلاث طرق للبقاء حاضراً",
          en: "Three Ways to Stay Present",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "الاختفاء الكامل", en: "Total disappearance" },
            detail: {
              ar: "لقاء واحد ثم صمت تام - يُنسى المحامي قبل أن تظهر الحاجة.",
              en: "One meeting, then total silence — forgotten before any need appears.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الترويج المتكرر", en: "Repeated self-promotion" },
            detail: {
              ar: "رسائل أسبوعية بلا مضمون - تُصنَّف كإزعاج وتُحظر بصمت.",
              en: "Weekly messages with no substance — filed as noise and quietly muted.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الحضور المفيد", en: "Useful presence" },
            detail: {
              ar: "رسالة كل بضعة أسابيع تحمل قيمة فعلية دون أي طلب.",
              en: "A message every few weeks that carries real value, with no ask.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.bd.06.worked",
        strong: {
          label: {
            ar: "دانا تشارك ملاحظة تفيد رامي فعلاً",
            en: "Dana shares a note that actually helps Rami",
          },
          text: {
            ar: [
              "التقت الأستاذة دانا الخطيب برامي فارس، مدير العمليات في شركة خط الأرز للخدمات اللوجستية، في مؤتمر قبل أربعة أشهر، ولم يوقّعا أي تعاون بعد.",
              "تقرأ دانا تعديلاً جديداً في أنظمة الجمارك يمسّ قطاع اللوجستيات، فترسل له: «رامي، لاحظت هذا التعديل قد يهمّك في عقودكم مع الموردين، أرفقته لك باختصار.» بلا أي طلب.",
            ],
            en: [
              "Dana Khatib met Rami Fares, operations director at Cedar Line Logistics, at a conference four months ago; nothing's been signed since.",
              "She reads a new customs regulation affecting logistics, and messages him: 'Rami, this change might matter for your supplier contracts — a quick summary attached.' No ask at all.",
            ],
          },
          why: {
            ar: "شاركت معلومة تخصّه هو تحديداً، بلا طلب أو تذكير بأنها محامية تبحث عن عمل، فبقيت حاضرة في ذهنه بشكل مفيد.",
            en: "She shared information specific to him, with no ask or reminder that she's a lawyer hunting for work — staying usefully present in his mind.",
          },
        },
        weak: {
          label: {
            ar: "دانا ترسل تذكيراً فارغاً",
            en: "Dana sends an empty reminder",
          },
          text: {
            ar: ["«أهلاً رامي، مجرد تذكير أنني هنا إذا احتجت أي استشارة قانونية في أي وقت!»"],
            en: ["'Hi Rami, just a reminder I'm here if you ever need any legal advice!'"],
          },
          why: {
            ar: "رسالة عامة لا تحمل معلومة تخصّه، وتكرارها كل أسبوعين يجعلها تُقرأ كترويج مباشر لا كاهتمام حقيقي.",
            en: "A generic message with nothing specific to him; repeated every two weeks, it reads as blunt self-promotion, not genuine interest.",
          },
        },
      },
      { kind: "activity", id: "s.bd.06.a1", activityId: "act.bd.06.1", mode: "quick" },
      { kind: "activity", id: "s.bd.06.a2", activityId: "act.bd.06.2", mode: "guided" },
      { kind: "activity", id: "s.bd.06.a3", activityId: "act.bd.06.3", mode: "guided" },
      { kind: "activity", id: "s.bd.06.a4", activityId: "act.bd.06.4", mode: "independent" },
      { kind: "activity", id: "s.bd.06.a5", activityId: "act.bd.06.5", mode: "independent" },
      { kind: "activity", id: "s.bd.06.a6", activityId: "act.bd.06.6", mode: "independent" },
      { kind: "summary", id: "s.bd.06.summary", summaryCardId: "card.bd.06" },
      {
        kind: "apply_tomorrow",
        id: "s.bd.06.apply",
        task: {
          ar: "اختر جهة تواصل صامتة منذ أشهر، وأرسل لها معلومة مفيدة واحدة دون أي طلب.",
          en: "Pick a contact you've gone quiet with for months, and send one useful piece of information, no ask.",
        },
        detail: {
          ar: "استخدم إيقاعاً كل ستة إلى ثمانية أسابيع بعدها لتبقى حاضراً دون إزعاج.",
          en: "Use a six-to-eight-week rhythm after that to stay present without becoming noise.",
        },
      },
      {
        kind: "next_mission",
        id: "s.bd.06.next",
        teaser: {
          ar: "عرفت كيف تبقى حاضراً دون إزعاج. الوحدة القادمة: لماذا يبدو طلب الإحالة محرجاً، وكيف تتجاوز ذلك.",
          en: "You know how to stay present without annoying. Next: why the referral ask feels awkward, and how to get past it.",
        },
      },
    ],
    activities: [
      {
        id: "act.bd.06.1",
        kind: "multiple_choice",
        skillId: "skill.staying-top-of-mind",
        stage: 3,
        weight: 1,
        context: {
          ar: ["تواصلت الأستاذة دانا مع مقاول عقاري التقته قبل نصف عام في ندوة، ولم يطلب خدماتها منذ ذلك الحين."],
          en: ["Dana has stayed in touch with a real-estate contractor she met at a seminar six months ago, who hasn't yet asked for her services."],
        },
        prompt: {
          ar: "ما نوع الرسالة الأنسب لترسلها الآن؟",
          en: "What kind of message is best to send now?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "رسالة قصيرة تشارك تعديلاً تنظيمياً جديداً يخص قطاعه، دون طلب أي شيء.",
              en: "A short message sharing a new regulatory change relevant to his sector, asking nothing.",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. تضيف قيمة فعلية وتبقيها حاضرة في ذهنه دون أن تبدو كطلب عمل.",
              en: "Exactly. It adds real value and keeps her present in his mind without looking like a pitch.",
            },
          },
          {
            id: "o2",
            label: { ar: "رسالة تسأله مباشرة إن كان بحاجة لمحامٍ الآن.", en: "A message asking him directly if he needs a lawyer now." },
            rationale: {
              ar: "سؤال مباشر متكرر يُقرأ كضغط للبيع، ويجعل التواصل يبدو مصلحياً بحتاً.",
              en: "A direct, repeated ask reads as a sales push, making the contact feel purely self-interested.",
            },
          },
          {
            id: "o3",
            label: { ar: "لا شيء الآن، الانتظار حتى يتصل هو أولاً.", en: "Nothing for now — wait until he calls first." },
            rationale: {
              ar: "الاختفاء الكامل يجعله ينساها تماماً قبل أن تظهر حاجته الفعلية لمحامٍ.",
              en: "Total disappearance means he'll forget her entirely before any real need for a lawyer arises.",
            },
          },
          {
            id: "o4",
            label: { ar: "دعوته لتناول القهوة أسبوعياً للتذكير بوجودها.", en: "Inviting him to coffee weekly, just to remind him she exists." },
            rationale: {
              ar: "تكرار مفرط بلا مضمون فعلي يتحول بسرعة من اهتمام إلى إزعاج ملحوظ.",
              en: "Excessive repetition with no real content quickly turns from interest into noticeable annoyance.",
            },
          },
        ],
      },
      {
        id: "act.bd.06.2",
        kind: "categorization",
        skillId: "skill.staying-top-of-mind",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "صنّف كل رسالة متابعة: هل هي حضور مفيد أم إزعاج ترويجي؟",
          en: "Sort each follow-up message: useful presence, or promotional noise?",
        },
        hint: {
          ar: "اسأل: هل تحمل الرسالة معلومة تخصّه هو، أم مجرد تذكير عام بوجودك؟",
          en: "Ask: does the message carry information specific to him, or just a generic reminder you exist?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «حضور مفيد» / «إزعاج ترويجي» أسفل كل رسالة بدل السحب.",
          en: "Choose \"Useful presence\" / \"Promotional noise\" from buttons under each message instead of dragging.",
        },
        buckets: [
          { id: "useful", label: { ar: "حضور مفيد", en: "Useful presence" } },
          { id: "noise", label: { ar: "إزعاج ترويجي", en: "Promotional noise" } },
        ],
        items: [
          {
            id: "c1",
            label: { ar: "«لاحظت تعديلاً في نظام الشركات قد يمسّ هيكل شركتكم، أرفقت لك ملخصاً.»", en: "'I noticed a companies-law change that might affect your structure, summary attached.'" },
            bucketId: "useful",
            rationale: {
              ar: "معلومة محددة تخصّه هو، بلا طلب، تثبت أنها تتابع قطاعه فعلاً.",
              en: "Specific information relevant to him, no ask, proving she actually follows his sector.",
            },
          },
          {
            id: "c2",
            label: { ar: "«فقط أذكّرك أنني هنا إن احتجت شيئاً!» - كل أسبوع.", en: "'Just a reminder I'm here if you need anything!' — every week." },
            bucketId: "noise",
            rationale: {
              ar: "لا معلومة ولا قيمة، والتكرار الأسبوعي يحوّلها إلى إزعاج واضح.",
              en: "No information, no value — weekly repetition turns it into obvious noise.",
            },
          },
          {
            id: "c3",
            label: { ar: "«تهانينا على افتتاح الفرع الجديد، خبر رائع!» بعد رؤيته في الأخبار.", en: "'Congratulations on the new branch opening, great news!' after seeing it in the news." },
            bucketId: "useful",
            rationale: {
              ar: "إشارة إلى اهتمام حقيقي بأخباره دون ربطها بطلب عمل مباشر.",
              en: "Shows genuine interest in his news, without tying it to a direct pitch for work.",
            },
          },
          {
            id: "c4",
            label: { ar: "«هل قررت أخيراً بمن ستستعين لعقودك؟» شهرياً.", en: "'Have you finally decided who'll handle your contracts?' monthly." },
            bucketId: "noise",
            rationale: {
              ar: "سؤال مباشر متكرر يضع الطرف الآخر في موقف حرج ويبدو كضغط بيع.",
              en: "A repeated direct question puts the other side on the spot and reads as a sales push.",
            },
          },
          {
            id: "c5",
            label: { ar: "«حضرت جلسة عن تحديثات ضريبية تمسّ شركات اللوجستيات، أرسل لك أهم النقاط.»", en: "'I attended a session on tax updates affecting logistics firms, sending you the key points.'" },
            bucketId: "useful",
            rationale: {
              ar: "قيمة محددة لقطاعه تحديداً، تُظهر متابعة حقيقية لا رسالة معلّبة.",
              en: "Value specific to his sector, showing genuine attention, not a canned message.",
            },
          },
        ],
      },
      {
        id: "act.bd.06.3",
        kind: "priority_ranking",
        skillId: "skill.staying-top-of-mind",
        secondarySkillIds: ["skill.relationship-building"],
        stage: 3,
        weight: 2,
        prompt: {
          ar: "رتّب أربع خطوات لبناء إيقاع متابعة مفيد بترتيبها الصحيح.",
          en: "Order four steps of building a useful follow-up rhythm in the correct sequence.",
        },
        hint: {
          ar: "ابدأ بتحديد الهدف من المتابعة، وانتهِ بمراقبة رد الفعل عليها.",
          en: "Start with deciding who the follow-up is for; end with watching how it lands.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each step instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "حدد بمن تريد أن تبقى حاضراً في ذهنه على مدى الأشهر القادمة.", en: "Decide who you want to stay present for over the coming months." },
            rationale: {
              ar: "بلا هدف واضح، تتحول المتابعة إلى رسائل عشوائية بلا معنى.",
              en: "Without a clear target, follow-up turns into random, meaningless messages.",
            },
          },
          {
            id: "i2",
            label: { ar: "اختر مضموناً يفيده تحديداً، لا تعميماً يصلح للجميع.", en: "Choose content specific to him, not a generic one-size message." },
            rationale: {
              ar: "المضمون العام يُقرأ كترويج، بينما المضمون المحدد يثبت اهتماماً حقيقياً.",
              en: "Generic content reads as promotion, while specific content proves real attention.",
            },
          },
          {
            id: "i3",
            label: { ar: "أرسل كل ستة إلى ثمانية أسابيع تقريباً، لا أكثر.", en: "Send roughly every six to eight weeks, no more often." },
            rationale: {
              ar: "التوقيت المتباعد يحافظ على الحضور دون أن يتحول إلى عبء متكرر.",
              en: "Spaced-out timing keeps you present without becoming a recurring burden.",
            },
          },
          {
            id: "i4",
            label: { ar: "لاحظ رد فعله، وتوقف إن شعرت بأي إشارة انزعاج.", en: "Watch his reaction, and stop if you sense any sign of annoyance." },
            rationale: {
              ar: "الإيقاع الجيد ليس ثابتاً بشكل أعمى، بل يتكيف مع استجابة الطرف الآخر.",
              en: "A good rhythm isn't blindly fixed — it adapts to how the other side actually responds.",
            },
          },
        ],
      },
      {
        id: "act.bd.06.4",
        kind: "short_written",
        skillId: "skill.staying-top-of-mind",
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.business-development-written.v1",
        weight: 3,
        minChars: 100,
        context: {
          ar: ["التقيت بمستشارة مالية في ملتقى أعمال قبل ثلاثة أشهر، ولم يطلب أي منكما شيئاً من الآخر بعد."],
          en: ["You met a financial advisor at a business forum three months ago; neither of you has asked anything of the other since."],
        },
        prompt: {
          ar: "اكتب رسالة متابعة قصيرة (٣٠-٥٠ كلمة) تحافظ على حضورك دون أن تبدو ترويجاً.",
          en: "Write a short follow-up message (30-50 words) that keeps you present without reading as promotion.",
        },
        modelAnswer: {
          ar: ["«سلمى، صدر أمس تعميم جديد يخص متطلبات الإفصاح المالي للشركات الناشئة، ظننت أنه قد يهمّ بعض عملائك. أرفقته لك باختصار، بالتوفيق!»"],
          en: ["'Salma, a new circular on startup financial-disclosure requirements came out yesterday — thought it might interest some of your clients. Summary attached, all the best!'"],
        },
        weakAnswer: {
          text: {
            ar: ["«أهلاً سلمى، فقط أذكّرك بأنني محامية متخصصة بالشركات إن احتجتِ شيئاً مستقبلاً.»"],
            en: ["'Hi Salma, just a reminder I'm a corporate lawyer if you ever need anything down the line.'"],
          },
          whatIsWrong: {
            ar: "تذكير بالهوية المهنية بلا قيمة مضافة، يبدو ترويجاً مباشراً لا اهتماماً حقيقياً بعملها.",
            en: "A reminder of her professional identity with no added value — reads as a direct pitch, not real interest in her work.",
          },
        },
      },
      {
        id: "act.bd.06.5",
        kind: "reflection",
        skillId: "skill.staying-top-of-mind",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع جهة تواصل مهنية اختفيت عن متابعتها منذ أكثر من ستة أشهر.",
          en: "Recall a professional contact you've gone silent on for over six months.",
        },
        followUp: {
          ar: "ما المعلومة الواحدة المفيدة التي يمكن أن تشاركها معها هذا الأسبوع دون أي طلب؟",
          en: "What single useful piece of information could you share with them this week, with no ask?",
        },
      },
      {
        id: "act.bd.06.6",
        kind: "ordering",
        skillId: "skill.staying-top-of-mind",
        secondarySkillIds: ["skill.relationship-building"],
        stage: 3,
        weight: 2,
        context: {
          ar: [
            "تعرفت الأستاذة دانا على نور صبّاغ، مديرة الموارد البشرية في مجموعة أمواج للتجزئة، قبل ستة أشهر ولم تطلب منها شيئًا بعد. تخطط دانا لبناء تواصل يمتد أربعة أشهر ينتهي باقتراح مراجعة دليل الموظفين.",
          ],
          en: [
            "Dana met Nour Sabbagh, HR director at Amwaj Retail Group, six months ago and hasn't asked her for anything yet. Dana plans a four-month contact sequence ending with a proposal to review the employee handbook.",
          ],
        },
        prompt: {
          ar: "رتّب نقاط التواصل الأربع بالترتيب الصحيح لتنفيذها.",
          en: "Order the four touchpoints in the correct sequence to execute them.",
        },
        hint: {
          ar: "ابدأ بأخف قيمة تُرسل عبر قناة سريعة، وانتهِ بالطلب المحدد الوحيد في النهاية.",
          en: "Start with the lightest-value note sent over a quick channel; end with the one specific ask at the very end.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل نقطة تواصل بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each touchpoint instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "بريد إلكتروني قصير يلخّص تعديلًا جديدًا في قانون العمل يمسّ سياسات التوظيف، دون أي طلب.",
              en: "A short email summarizing a new labor-law amendment affecting hiring policy, with no ask.",
            },
            rationale: {
              ar: "بداية مناسبة عبر قناة رسمية لمحتوى يحتاج تفصيلًا؛ يثبت متابعة حقيقية لقطاعها منذ أول تواصل.",
              en: "A fitting start over a formal channel for content that needs detail; proves genuine attention to her sector from the very first contact.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "رسالة واتساب قصيرة تهنئها بخبر افتتاح فرع جديد لمجموعتها، رأته دانا في الأخبار.",
              en: "A short WhatsApp message congratulating her on the group's new branch opening, which Dana saw in the news.",
            },
            rationale: {
              ar: "نبرة أخف وأقرب تناسب قناة سريعة، وتبقيها حاضرة دون أن تحوّل الرسالة إلى مراسلة رسمية ثقيلة.",
              en: "A lighter, warmer tone fits a quick channel, keeping Dana present without turning the note into a heavy formal message.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "مكالمة هاتفية قصيرة للاطمئنان على سير العمل، دون ذكر أي خدمة أو طلب إطلاقًا.",
              en: "A short phone call just to check how things are going, with no mention of any service or ask at all.",
            },
            rationale: {
              ar: "بعد رسالتين مكتوبتين، مكالمة صوتية تبني دفئًا شخصيًا أعمق، وتبقى بلا طلب حفاظًا على نسبة العطاء العالية.",
              en: "After two written notes, a voice call builds deeper personal warmth, and still carries no ask, keeping the give-to-ask ratio high.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "بريد إلكتروني يقترح مكالمة عشرين دقيقة الخميس القادم لمراجعة دليل الموظفين بعد التعديل الجديد.",
              en: "An email proposing a twenty-minute call next Thursday to review the employee handbook in light of the new amendment.",
            },
            rationale: {
              ar: "الطلب الوحيد يأتي أخيرًا وبقناة رسمية وموعد محدد، بعد ثلاث لفتات عطاء بلا طلب رسّخت الثقة أولًا.",
              en: "The single ask comes last, over a formal channel with a set date, after three no-ask gestures had already built the trust.",
            },
          },
        ],
      },
    ],
    summaryCard: {
      id: "card.bd.06",
      title: {
        ar: "الحضور المفيد له إيقاع",
        en: "Useful Presence Has a Rhythm",
      },
      whatYouLearned: {
        ar: [
          "المتابعة المفيدة تشارك قيمة تخصّ الطرف الآخر، لا رسالة ترويج معلّبة عن نفسك.",
          "الإيقاع المعقول يمتد على أشهر - رسالة كل ستة إلى ثمانية أسابيع تكفي للبقاء حاضراً.",
          "أفضل رسائل المتابعة لا تنتهي بطلب؛ الهدف أن تُتذكر حين تظهر الحاجة فعلاً.",
        ],
        en: [
          "Useful follow-up shares value specific to the other person, not a canned pitch about yourself.",
          "A reasonable rhythm spans months — one message every six to eight weeks is enough to stay present.",
          "The best follow-up messages carry no ask; the goal is being remembered when a real need arises.",
        ],
      },
      framework: {
        name: { ar: "حدد · اختر القيمة · باعد · راقب", en: "Pick · Choose Value · Space Out · Watch" },
        steps: [
          { ar: "حدد من تريد البقاء حاضراً في ذهنه.", en: "Decide who you want to stay present for." },
          { ar: "اختر معلومة تفيده هو تحديداً.", en: "Choose information useful to him specifically." },
          { ar: "باعد بين الرسائل ستة إلى ثمانية أسابيع.", en: "Space messages six to eight weeks apart." },
          { ar: "راقب رد فعله وتوقف عند أي إشارة انزعاج.", en: "Watch his reaction and stop at any sign of annoyance." },
        ],
      },
      rememberThis: {
        ar: "من يختفي يُنسى، ومن يزعج يُحظر - الحضور المفيد وحده يبقى.",
        en: "Disappear and you're forgotten; annoy and you're muted — only useful presence lasts.",
      },
      useItTomorrow: {
        ar: "اختر جهة تواصل صامتة منذ أشهر، وأرسل لها معلومة مفيدة واحدة دون أي طلب.",
        en: "Pick a contact you've gone quiet with for months, and send one useful piece of information, no ask.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.jab-jab-right-hook", "src.purple-cow", "src.they-ask-you-answer"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 07 — Why the referral ask feels awkward, and how to make it not
  // =========================================================================
  {
    id: "unit.bd.07",
    chapterId: "ch.bd.staying-visible",
    order: 7,
    title: {
      ar: "لماذا يبدو طلب الإحالة محرجاً، وكيف يصبح طبيعياً",
      en: "Why the Referral Ask Feels Awkward, and How to Make It Not",
    },
    subtitle: {
      ar: "التوقيت والتحديد يحوّلان طلباً مربكاً إلى سؤال يسهل الإجابة عنه بنعم.",
      en: "Timing and specificity turn an awkward ask into a question that's easy to say yes to.",
    },
    primarySkillId: "skill.referral-generation",
    skillIds: ["skill.referral-generation", "skill.relationship-building"],
    stage: 3,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.bd.07.hook",
        text: {
          ar: "أغلب المحامين يساعدون عميلاً حصل على نتيجة ممتازة، ثم يودّعونه دون أن يطلبوا منه شيئاً على الإطلاق.",
          en: "Most lawyers help a client to a great result, then say goodbye without ever asking for anything at all.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.bd.07.why",
        text: {
          ar: "من لا يطلب إحالة لا يحصل عليها غالباً، مهما كان رضا العميل عالياً. الإحالة لا تأتي تلقائياً، بل حين تُطلب بوضوح وفي التوقيت الصحيح.",
          en: "Skip the ask, and you usually skip the referral, however satisfied the client is. Referrals rarely happen on their own — they need a clear, well-timed request.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.bd.07.goals",
        goals: {
          ar: [
            "أن تفهم لماذا يشعر أغلب المحامين بالحرج عند طلب إحالة، رغم استحقاقهم لها.",
            "أن تحدد التوقيت الصحيح للطلب - بعد نتيجة فعلية يشعر فيها العميل بالرضا.",
            "أن تصوغ طلباً محدداً يسهل على العميل تلبيته، بدل سؤال عام يصعب الرد عليه.",
          ],
          en: [
            "Understand why most lawyers feel awkward asking for a referral, even when they've earned one.",
            "Identify the right timing for the ask — right after a real result the client feels good about.",
            "Phrase a specific ask the client can easily act on, instead of a vague one that's hard to answer.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.bd.07.lesson",
        title: {
          ar: "التوقيت والتحديد يزيلان الحرج",
          en: "Timing and Specificity Remove the Awkwardness",
        },
        body: {
          ar: [
            "الحرج من طلب الإحالة حقيقي: يشعر كثير من المحامين أن الطلب يحوّل علاقة مهنية إلى معاملة تجارية مباشرة.",
            "لكن الحرج غالباً سببه التوقيت الخاطئ أو الصياغة العامة، لا فكرة الطلب نفسها.",
            "أفضل توقيت هو مباشرة بعد نتيجة إيجابية ملموسة، حين يكون رضا العميل في أعلى نقطة له.",
            "سؤال «هل تعرف أحداً قد يحتاج محامياً؟» صعب الإجابة، لأن العميل يحتاج للتفكير في قائمة كاملة فجأة.",
            "طلب محدد أسهل بكثير: «هل تعرف صاحب شركة يواجه نزاعاً مشابهاً؟» يوجّه ذهن العميل مباشرة نحو اسم واحد.",
            "اجعل الاستجابة سهلة: اعرض تعريفاً بسيطاً بالبريد الإلكتروني بدل مطالبة العميل بترتيب اجتماع بنفسه.",
          ],
          en: [
            "The awkwardness is real: many lawyers feel asking turns a professional relationship into a blunt transaction.",
            "But the awkwardness usually comes from bad timing or vague phrasing, not the idea of asking itself.",
            "The best timing is right after a concrete positive result, when the client's satisfaction is at its peak.",
            "'Do you know anyone who might need a lawyer?' is hard to answer — it forces the client to suddenly scan an entire mental list.",
            "A specific ask is far easier: 'Do you know a business owner facing a similar dispute?' points the client's mind straight to one name.",
            "Make responding easy: offer a simple email introduction instead of asking the client to arrange a meeting themselves.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.bd.07.visual",
        title: {
          ar: "ثلاثة أنواع من طلب الإحالة",
          en: "Three Kinds of Referral Ask",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "الطلب العام", en: "The vague ask" },
            detail: {
              ar: "«هل تعرف أحداً؟» - سؤال صعب الإجابة يُنسى بسرعة.",
              en: "'Know anyone?' — a hard-to-answer question that's quickly forgotten.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الطلب المتأخر", en: "The late ask" },
            detail: {
              ar: "طلب بعد أشهر من انتهاء القضية، حين خفت رضا العميل.",
              en: "An ask months after the case ends, once the client's satisfaction has faded.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الطلب المحدد والمناسب توقيته", en: "The specific, well-timed ask" },
            detail: {
              ar: "بعد نتيجة إيجابية، باسم أو صفة محددة، وطريقة سهلة للاستجابة.",
              en: "Right after a good result, naming a specific type of contact, with an easy way to respond.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.bd.07.worked",
        strong: {
          label: {
            ar: "هالة تحصل على طلب واضح تسهل تلبيته",
            en: "Hala gets a clear ask she can easily act on",
          },
          text: {
            ar: [
              "حصلت الأستاذة دانا الخطيب لصالح هالة منصور، صاحبة شركة زيتون للأدوات المنزلية، على تسوية ممتازة في نزاع مع أحد الموردين.",
              "في نهاية اللقاء الأخير، تقول دانا: «سعدت جداً بهذه النتيجة معك. هل تعرفين صاحبة عمل أخرى تواجه نزاعاً مشابهاً مع مورّد؟ يسعدني تعريف نفسي بها عبر بريد قصير إن أحببتِ.»",
            ],
            en: [
              "Dana Khatib won an excellent settlement for Hala Mansour, owner of Zaytoon Home Goods, in a dispute with a supplier.",
              "At the end of the final meeting, Dana says: 'I'm really glad this worked out for you. Do you know another business owner facing a similar supplier dispute? Happy to introduce myself by a short email if you'd like.'",
            ],
          },
          why: {
            ar: "طلبت مباشرة بعد نتيجة ملموسة، وحددت نوع الشخص بدقة، وسهّلت الاستجابة بخيار عملي واحد.",
            en: "She asked right after a concrete result, named a precise type of contact, and made responding easy with one practical option.",
          },
        },
        weak: {
          label: {
            ar: "دانا تطلب بشكل عام ومتأخر",
            en: "Dana asks vaguely and late",
          },
          text: {
            ar: ["بعد ثلاثة أشهر من انتهاء القضية، تكتب دانا لهالة: «إذا صادفتِ أحداً يحتاج محامياً، لا تنسي اسمي!»"],
            en: ["Three months after the case ends, Dana messages Hala: 'If you ever run into someone who needs a lawyer, don't forget my name!'"],
          },
          why: {
            ar: "الطلب عام وبلا توقيت مناسب، ووصل بعد أن خفت حماسة هالة من النتيجة، فسهل نسيانه.",
            en: "The ask is vague and poorly timed, arriving after Hala's enthusiasm for the result had faded — easy to simply forget.",
          },
        },
      },
      { kind: "activity", id: "s.bd.07.a1", activityId: "act.bd.07.1", mode: "quick" },
      { kind: "activity", id: "s.bd.07.a2", activityId: "act.bd.07.2", mode: "guided" },
      { kind: "activity", id: "s.bd.07.a3", activityId: "act.bd.07.3", mode: "guided" },
      { kind: "activity", id: "s.bd.07.a4", activityId: "act.bd.07.4", mode: "independent" },
      { kind: "activity", id: "s.bd.07.a5", activityId: "act.bd.07.5", mode: "independent" },
      { kind: "summary", id: "s.bd.07.summary", summaryCardId: "card.bd.07" },
      {
        kind: "apply_tomorrow",
        id: "s.bd.07.apply",
        task: {
          ar: "في نهاية أول ملف تغلقه بنتيجة جيدة هذا الأسبوع، اطلب إحالة محددة بوضوح.",
          en: "At the close of the first file you win well this week, ask clearly for a specific referral.",
        },
        detail: {
          ar: "اذكر نوع الشخص المطلوب تحديداً، وسهّل الاستجابة بخيار عملي واحد.",
          en: "Name the exact type of contact you want, and make responding easy with one practical option.",
        },
      },
      {
        kind: "next_mission",
        id: "s.bd.07.next",
        teaser: {
          ar: "عرفت متى وكيف تطلب من حيث المبدأ. الوحدة القادمة: المحادثة الفعلية، مباشرة، مع محاكاة حية.",
          en: "You know the principle of when and how to ask. Next: the live conversation itself, with a real simulation.",
        },
      },
    ],
    activities: [
      {
        id: "act.bd.07.1",
        kind: "best_response",
        skillId: "skill.referral-generation",
        stage: 3,
        weight: 1,
        context: {
          ar: ["أنهيتِ للتو قضية شيك مرتجع لصالح تاجر أثاث، وعبّر عن رضاه الكبير عن النتيجة في اللقاء الأخير."],
          en: ["You just won a dishonoured-cheque case for a furniture trader, who expressed real satisfaction with the result in the final meeting."],
        },
        prompt: {
          ar: "ما أفضل طريقة لطلب إحالة الآن؟",
          en: "What's the best way to ask for a referral now?",
        },
        options: [
          {
            id: "o1",
            label: { ar: "«سعدت بهذه النتيجة، هل تعرف تاجراً آخر يواجه مشكلة شيكات مرتجعة؟»", en: "'Glad this worked out — do you know another trader dealing with dishonoured cheques?'" },
            correct: true,
            rationale: {
              ar: "توقيت مثالي وطلب محدد يوجّه ذهن العميل مباشرة نحو اسم واحد.",
              en: "Ideal timing and a specific ask that points the client's mind straight to one name.",
            },
          },
          {
            id: "o2",
            label: { ar: "الانتظار حتى يتصل العميل بنفسه لاحقاً بأي إحالة.", en: "Waiting for the client to reach out later with any referral on his own." },
            rationale: {
              ar: "الرضا العالي في هذه اللحظة سيخفت مع الوقت، والإحالات نادراً ما تأتي دون طلب.",
              en: "High satisfaction fades over time, and referrals rarely arrive without being asked for.",
            },
          },
          {
            id: "o3",
            label: { ar: "«هل تعرف أحداً يحتاج محامياً بشكل عام؟»", en: "'Do you know anyone who needs a lawyer, generally speaking?'" },
            rationale: {
              ar: "سؤال عام يصعب على العميل الإجابة عنه فوراً، فيؤجله ذهنياً حتى يُنسى.",
              en: "A vague question the client can't answer on the spot, so he mentally defers it until it's forgotten.",
            },
          },
          {
            id: "o4",
            label: { ar: "إرسال فاتورة الأتعاب مرفقة برسالة تطلب إحالات مقابل خصم.", en: "Sending the fee invoice with a message offering a discount in exchange for referrals." },
            rationale: {
              ar: "ربط الإحالة بمقابل مادي مباشر يحوّل علاقة الثقة إلى معاملة تُفقد الطلب مصداقيته.",
              en: "Tying the referral to a direct payoff turns a trust relationship into a transaction, undermining the ask's credibility.",
            },
          },
        ],
      },
      {
        id: "act.bd.07.2",
        kind: "matching",
        skillId: "skill.referral-generation",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "طابق كل موقف مع طلب الإحالة الأنسب له.",
          en: "Match each situation with the most fitting referral ask.",
        },
        accessibleAlternative: {
          ar: "اختر الطلب المطابق من قائمة منسدلة بجانب كل موقف بدل السحب.",
          en: "Pick the matching request from a dropdown beside each situation instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "عميل راضٍ للتو عن تسوية عقارية ناجحة", en: "A client just satisfied with a successful real-estate settlement" },
            right: {
              ar: "«هل تعرف مالك عقار آخر يواجه نزاع إيجار مشابهاً؟»",
              en: "'Know another property owner facing a similar lease dispute?'",
            },
            rationale: {
              ar: "طلب محدد بنوع القضية يسهل على العميل تذكّر اسم واحد فوراً.",
              en: "A case-specific ask helps the client immediately recall one name.",
            },
          },
          {
            id: "p2",
            left: { ar: "عميل مرّ عليه ستة أشهر منذ انتهاء ملفه", en: "A client whose file closed six months ago" },
            right: {
              ar: "لا تطلب إحالة الآن؛ أرسل تحديثاً وديّاً أولاً لإعادة تنشيط العلاقة.",
              en: "Don't ask now; send a friendly check-in first to reactivate the relationship.",
            },
            rationale: {
              ar: "الرضا خفت بمرور الوقت، فطلب مباشر الآن يبدو مفاجئاً وغير مناسب.",
              en: "Satisfaction has faded with time; a direct ask now feels sudden and out of place.",
            },
          },
          {
            id: "p3",
            left: { ar: "عميل حصل على نتيجة جيدة لكنه متحفظ اجتماعياً", en: "A client who got a good result but is socially reserved" },
            right: {
              ar: "«يسعدني تقديم نفسي كتابياً بإيجاز إن صادفتَ من يحتاج مساعدة مشابهة.»",
              en: "'Happy to introduce myself briefly in writing if you come across anyone needing similar help.'",
            },
            rationale: {
              ar: "خيار منخفض الضغط يناسب شخصية متحفظة، ويترك القرار له دون إلحاح.",
              en: "A low-pressure option suits a reserved personality, leaving the decision to him without pushing.",
            },
          },
          {
            id: "p4",
            left: { ar: "عميل عبّر عن رضاه لكنه لم يذكر أي شخص بعينه", en: "A client expressed satisfaction but hasn't named anyone specific" },
            right: {
              ar: "«لا داعي لاسم الآن، فقط اذكرني إن خطر ببالك أحد لاحقاً.»",
              en: "'No need for a name now, just think of me if someone comes to mind later.'",
            },
            rationale: {
              ar: "يبقي الباب مفتوحاً دون ضغط فوري، ويحترم أن القائمة قد لا تكون جاهزة في تلك اللحظة.",
              en: "Keeps the door open without immediate pressure, respecting that no name may come to mind yet.",
            },
          },
        ],
      },
      {
        id: "act.bd.07.3",
        kind: "fill_blank",
        skillId: "skill.referral-generation",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "أكمل الجملة بالكلمة الأصح في كل فراغ.",
          en: "Complete the sentence with the correct word in each blank.",
        },
        template: {
          ar: "بعد أن تشكر العميل على ثقته، اسأله سؤالاً {{0}} بدل سؤال عام، ثم اجعل الاستجابة {{1}} بأن تعرض القيام بخطوة التعريف بنفسك.",
          en: "After thanking the client for their trust, ask a {{0}} question instead of a vague one, then make responding {{1}} by offering to handle the introduction yourself.",
        },
        blanks: [
          {
            id: "b0",
            options: [{ ar: "محدداً", en: "specific" }, { ar: "عاطفياً", en: "emotional" }, { ar: "طويلاً", en: "long" }],
            answerIndex: 0,
            rationale: {
              ar: "التحديد يوجّه ذهن العميل نحو اسم واحد بدل قائمة كاملة يصعب استحضارها.",
              en: "Specificity points the client's mind to one name instead of a whole list that's hard to recall.",
            },
          },
          {
            id: "b1",
            options: [{ ar: "سهلة", en: "easy" }, { ar: "مكلفة", en: "costly" }, { ar: "رسمية جداً", en: "overly formal" }],
            answerIndex: 0,
            rationale: {
              ar: "كلما قلّ الجهد المطلوب من العميل، زاد احتمال أن يستجيب فعلاً.",
              en: "The less effort required of the client, the more likely they actually follow through.",
            },
          },
        ],
      },
      {
        id: "act.bd.07.4",
        kind: "short_written",
        skillId: "skill.referral-generation",
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.business-development-written.v1",
        weight: 3,
        minChars: 110,
        context: {
          ar: ["ربحتِ قضية استئناف لصالح صاحب مطعم استرد فيها مبلغاً كبيراً من شريك سابق."],
          en: ["You won an appeal for a restaurant owner, recovering a large sum from a former partner."],
        },
        prompt: {
          ar: "اكتب ما ستقوله له في نهاية اللقاء لطلب إحالة (٣٠-٥٠ كلمة)، بتوقيت وتحديد مناسبين.",
          en: "Write what you'd say at the end of the meeting to ask for a referral (30-50 words), with proper timing and specificity.",
        },
        modelAnswer: {
          ar: ["«سعدت جداً بهذه النتيجة لك. هل تعرف صاحب مطعم آخر يمرّ بنزاع شراكة مشابه؟ يسعدني تعريف نفسي بإيجاز إن أحببت.»"],
          en: ["'Really glad this worked out for you. Do you know another restaurant owner going through a similar partnership dispute? Happy to introduce myself briefly if you'd like.'"],
        },
        weakAnswer: {
          text: {
            ar: ["«شكراً لثقتك، إذا سمعت عن أي شخص يحتاج محامياً أرسل له رقمي.»"],
            en: ["'Thanks for trusting me — if you hear of anyone needing a lawyer, pass along my number.'"],
          },
          whatIsWrong: {
            ar: "طلب عام بلا تحديد نوع الشخص، يضع عبء الوصف والتقديم بالكامل على العميل.",
            en: "A vague ask with no defined type of contact, putting the entire burden of describing and introducing on the client.",
          },
        },
      },
      {
        id: "act.bd.07.5",
        kind: "reflection",
        skillId: "skill.referral-generation",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع عميلاً رضي عن نتيجة عملك معه ولم تطلب منه إحالة.",
          en: "Recall a client satisfied with your work for them, whom you never asked for a referral.",
        },
        followUp: {
          ar: "ما السؤال المحدد الذي كان يمكن أن تطرحه في تلك اللحظة تحديداً؟",
          en: "What specific question could you have asked at that exact moment?",
        },
      },
    ],
    summaryCard: {
      id: "card.bd.07",
      title: {
        ar: "طلب محدد، في التوقيت الصحيح",
        en: "A Specific Ask, at the Right Time",
      },
      whatYouLearned: {
        ar: [
          "الحرج من طلب الإحالة سببه غالباً التوقيت الخاطئ أو الصياغة العامة، لا فكرة الطلب.",
          "أفضل توقيت هو مباشرة بعد نتيجة إيجابية، حين يكون رضا العميل في أعلى مستوياته.",
          "الطلب المحدد باسم أو صفة يسهل تلبيته أكثر بكثير من سؤال عام يصعب الإجابة عنه.",
        ],
        en: [
          "Awkwardness around asking usually comes from bad timing or vague phrasing, not the idea itself.",
          "The best timing is right after a positive result, at the client's peak satisfaction.",
          "A specific ask is far easier to fulfil than a vague question that's hard to answer.",
        ],
      },
      framework: {
        name: { ar: "اشكر · اطلب بتحديد · سهّل الاستجابة", en: "Thank · Ask Specifically · Make It Easy" },
        steps: [
          { ar: "اشكر العميل على ثقته مباشرة بعد نتيجة إيجابية.", en: "Thank the client right after a positive result." },
          { ar: "اطلب باسم أو صفة محددة، لا سؤالاً عاماً.", en: "Ask by a specific name or type, not a vague question." },
          { ar: "اعرض القيام بخطوة التعريف بنفسك لتسهيل الاستجابة.", en: "Offer to handle the introduction yourself to make responding easy." },
        ],
      },
      rememberThis: {
        ar: "الإحالة التي لا تُطلب نادراً ما تأتي، مهما كان العميل راضياً.",
        en: "A referral never asked for rarely arrives, however satisfied the client.",
      },
      useItTomorrow: {
        ar: "في نهاية أول ملف تغلقه بنتيجة جيدة هذا الأسبوع، اطلب إحالة محددة بوضوح.",
        en: "At the close of the first file you win well this week, ask clearly for a specific referral.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.rainmaker", "src.ali-rise", "src.ultimate-associate-marketing"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 08 — Asking a satisfied client for the introduction (simulation)
  // =========================================================================
  {
    id: "unit.bd.08",
    chapterId: "ch.bd.staying-visible",
    order: 8,
    title: {
      ar: "طلب التعريف من عميل راضٍ",
      en: "Asking a Satisfied Client for the Introduction",
    },
    subtitle: {
      ar: "المحادثة الفعلية أصعب من مبدأ الطلب - هنا تُختبر الجرأة والتوقيت معاً.",
      en: "The live conversation is harder than the principle — this is where nerve and timing meet.",
    },
    primarySkillId: "skill.referral-generation",
    skillIds: ["skill.referral-generation", "skill.relationship-building"],
    stage: 3,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.bd.08.hook",
        text: {
          ar: "تعرف متى ولماذا تطلب. السؤال الآن: هل تستطيع فعلاً أن تقولها بصوت مرتفع أمام العميل؟",
          en: "You know when and why to ask. The real question: can you actually say it out loud, in front of the client?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.bd.08.why",
        text: {
          ar: "المعرفة النظرية بالتوقيت لا تكفي وحدها؛ لحظة النطق الفعلي بالطلب هي ما يحدد إن كانت الإحالة ستأتي أم تبقى فرصة ضائعة.",
          en: "Knowing the timing in theory isn't enough; the actual moment of asking is what decides whether the referral comes, or stays a missed chance.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.bd.08.goals",
        goals: {
          ar: [
            "أن تبدأ طلب الإحالة بعبارة تقدير حقيقية، لا انتقال مفاجئ لموضوع آخر.",
            "أن تحافظ على نبرة مريحة تترك للعميل مساحة للرفض دون إحراج أي طرف.",
            "أن تغلق المحادثة بخطوة عملية واحدة واضحة، لا وعداً غامضاً من الطرفين.",
          ],
          en: [
            "Open the referral ask with genuine appreciation, not an abrupt topic change.",
            "Keep a comfortable tone that leaves room for the client to decline without embarrassing either side.",
            "Close the conversation with one clear practical step, not a vague promise from either side.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.bd.08.lesson",
        title: {
          ar: "من المبدأ إلى الجملة الفعلية",
          en: "From Principle to the Actual Sentence",
        },
        body: {
          ar: [
            "معرفة قواعد الطلب لا تكفي حين تجلس فعلياً أمام عميل راضٍ - الحرج يظهر في تلك اللحظة تحديداً.",
            "ابدأ بجملة تقدير قصيرة وصادقة، لا مقدمة طويلة تبدو وكأنها تمهّد لطلب كبير.",
            "اطرح السؤال بصيغة سهلة، ثم اصمت. الصمت بعد الطلب ليس ضعفاً، بل يمنح العميل وقتاً حقيقياً للتفكير.",
            "إذا تردد العميل أو لم يذكر اسماً، لا تُلحّ؛ اقترح خياراً أخف مثل مشاركة معلومة عنك لاحقاً.",
            "أنهِ المحادثة بخطوة واحدة واضحة: من سيرسل ماذا، ومتى - لا مجرد «سنتحدث لاحقاً».",
          ],
          en: [
            "Knowing the rules isn't enough once you're actually sitting with a satisfied client — the awkwardness shows up right then.",
            "Open with a short, sincere appreciation line — not a long preamble that signals a big ask coming.",
            "Ask in an easy phrasing, then pause. Silence after the ask isn't weakness — it gives the client real time to think.",
            "If the client hesitates or names no one, don't press; offer a lighter option, like sharing your details later.",
            "Close with one clear step: who sends what, and when — not a vague 'we'll talk later.'",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.bd.08.visual",
        title: {
          ar: "خطوات المحادثة الفعلية",
          en: "Steps of the Live Conversation",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "قدِّر", en: "Appreciate" },
            detail: {
              ar: "جملة قصيرة وصادقة عن النتيجة، دون مقدمات طويلة.",
              en: "A short, sincere line about the result, no long preamble.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "اطلب واصمت", en: "Ask, then pause" },
            detail: {
              ar: "سؤال محدد، ثم صمت حقيقي يمنح العميل وقتاً للتفكير.",
              en: "A specific question, then real silence that gives the client time to think.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "أغلق بخطوة", en: "Close with a step" },
            detail: {
              ar: "حدد من يرسل ماذا ومتى، لا وعداً عاماً بالتفكير لاحقاً.",
              en: "Name who sends what and when — not a vague promise to think about it.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.bd.08.worked",
        strong: {
          label: {
            ar: "دانا تطلب من غسان بثقة وهدوء",
            en: "Dana asks Ghassan calmly and confidently",
          },
          text: {
            ar: [
              "أنهت الأستاذة دانا الخطيب قضية عقد توريد لصالح غسان الرفاعي، صاحب شركة الرفاعي التجارية، باسترداد كامل المبلغ المتنازع عليه.",
              "في نهاية اللقاء تقول: «سعدت جداً بالعمل معك على هذا الملف. هل تعرف صاحب شركة آخر يواجه نزاعاً مشابهاً في عقود التوريد؟» ثم تصمت.",
              "يفكر غسان لحظة ويقول: «فعلاً، صديقي زياد يواجه شيئاً مشابهاً.» فتضيف دانا: «رائع، هل تسمح لي بإرسال رسالة تعريف قصيرة له اليوم؟»",
            ],
            en: [
              "Dana Khatib closed a supply-contract case for Ghassan Rifai, owner of Rifai Trading Co, recovering the full disputed amount.",
              "At the end of the meeting she says: 'I really enjoyed working with you on this. Do you know another business owner facing a similar supply-contract dispute?' Then she pauses.",
              "Ghassan thinks for a moment: 'Actually, my friend Ziad is dealing with something similar.' Dana adds: 'Great, would you mind if I sent him a short introduction today?'",
            ],
          },
          why: {
            ar: "قدّرت النتيجة أولاً، طلبت بتحديد ثم صمتت لتمنحه وقتاً، وأغلقت بخطوة عملية فورية بدل ترك الأمر معلّقاً.",
            en: "She appreciated the result first, asked specifically then paused to give him time, and closed with one immediate practical step instead of leaving it hanging.",
          },
        },
        weak: {
          label: {
            ar: "دانا تطلب بسرعة وتُلحّ",
            en: "Dana rushes the ask and pushes",
          },
          text: {
            ar: ["«بما أنك راضٍ، هل يمكنك أن تعطيني أسماء ثلاثة أصدقاء الآن قد يحتاجون محامياً؟» تسأل دانا فوراً بعد توقيع اتفاقية التسوية."],
            en: ["'Since you're happy, can you give me the names of three friends right now who might need a lawyer?' Dana asks immediately after the settlement is signed."],
          },
          why: {
            ar: "طلبت عدداً كبيراً فوراً دون صمت أو مساحة للتفكير، فبدت متعجلة وحوّلت لحظة الرضا إلى ضغط مباشر.",
            en: "She asked for several names at once, with no pause or thinking room, seeming rushed and turning a moment of satisfaction into direct pressure.",
          },
        },
      },
      { kind: "activity", id: "s.bd.08.a1", activityId: "act.bd.08.1", mode: "quick" },
      { kind: "activity", id: "s.bd.08.a2", activityId: "act.bd.08.2", mode: "guided" },
      { kind: "activity", id: "s.bd.08.a3", activityId: "act.bd.08.3", mode: "independent" },
      { kind: "simulation", id: "s.bd.08.sim", scenarioId: "scn.asking-for-referral" },
      { kind: "activity", id: "s.bd.08.a4", activityId: "act.bd.08.4", mode: "independent" },
      { kind: "activity", id: "s.bd.08.a5", activityId: "act.bd.08.5", mode: "independent" },
      { kind: "summary", id: "s.bd.08.summary", summaryCardId: "card.bd.08" },
      {
        kind: "apply_tomorrow",
        id: "s.bd.08.apply",
        task: {
          ar: "في أول لقاء إغلاق ناجح هذا الأسبوع، جرّب الجملتين: التقدير ثم الطلب المحدد.",
          en: "At the first successful closing meeting this week, try the two lines: appreciation, then a specific ask.",
        },
        detail: {
          ar: "اصمت بعد السؤال لثوانٍ، وأغلق بخطوة عملية واحدة محددة الموعد.",
          en: "Pause a few seconds after asking, and close with one concrete, time-bound step.",
        },
      },
      {
        kind: "next_mission",
        id: "s.bd.08.next",
        teaser: {
          ar: "طلبت إحالة بثقة. الوحدة القادمة: تمييز الفرصة الحقيقية من الفرصة التي تختلقها بنفسك.",
          en: "You asked for a referral with confidence. Next: telling a genuine opening apart from one you manufacture yourself.",
        },
      },
    ],
    activities: [
      {
        id: "act.bd.08.1",
        kind: "multiple_choice",
        skillId: "skill.referral-generation",
        stage: 3,
        weight: 1,
        context: {
          ar: ["أنهيتِ للتو قضية ناجحة لعميل عبّر عن رضاه الكبير، وتخططين لطلب إحالة قبل مغادرته."],
          en: ["You've just closed a successful case for a client who expressed real satisfaction, and you're planning to ask for a referral before he leaves."],
        },
        prompt: {
          ar: "كيف تبدئين الطلب بأفضل شكل؟",
          en: "What's the best way to open the ask?",
        },
        options: [
          {
            id: "o1",
            label: { ar: "«سعدت جداً بالعمل معك على هذا الملف» ثم الانتقال بهدوء لطلب محدد.", en: "'I really enjoyed working with you on this file,' then calmly moving to a specific ask." },
            correct: true,
            rationale: {
              ar: "تقدير صادق وقصير يمهّد للطلب بشكل طبيعي دون أن يبدو مفاجئاً.",
              en: "A short, sincere appreciation naturally sets up the ask, without it feeling sudden.",
            },
          },
          {
            id: "o2",
            label: { ar: "الانتقال مباشرة للسؤال: «هل تعرف أحداً؟» دون أي مقدمة.", en: "Jumping straight to: 'Do you know anyone?' with no lead-in at all." },
            rationale: {
              ar: "بلا مقدمة، يبدو الطلب مفاجئاً وتجارياً، ويفوّت لحظة الامتنان الطبيعية.",
              en: "With no lead-in, the ask feels sudden and transactional, missing the natural moment of gratitude.",
            },
          },
          {
            id: "o3",
            label: { ar: "مقدمة طويلة عن إنجازات المكتب قبل الوصول لأي طلب.", en: "A long preamble about the firm's achievements before getting to any ask." },
            rationale: {
              ar: "مقدمة مطوّلة تجعل الطلب يبدو مخططاً له بعناية مفرطة، فيفقد طبيعيته.",
              en: "An overlong lead-in makes the ask feel over-engineered, losing its natural feel.",
            },
          },
          {
            id: "o4",
            label: { ar: "الطلب مباشرة بعد توقيع فاتورة الأتعاب النهائية، دون أي جملة تقدير.", en: "Asking right after signing the final fee invoice, with no appreciation line at all." },
            rationale: {
              ar: "ربط الطلب مباشرة بلحظة الدفع يجعله يبدو وكأنه جزء من الصفقة المالية لا امتناناً حقيقياً.",
              en: "Tying the ask directly to the payment moment makes it feel like part of the deal, not genuine gratitude.",
            },
          },
        ],
      },
      {
        id: "act.bd.08.2",
        kind: "priority_ranking",
        skillId: "skill.referral-generation",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "رتّب أربع خطوات للمحادثة الفعلية بالترتيب الصحيح لتنفيذها.",
          en: "Order four steps of the live conversation in the correct sequence to execute them.",
        },
        hint: {
          ar: "ابدأ بما يفتح المحادثة بامتنان، وانتهِ بما يحوّلها إلى فعل ملموس.",
          en: "Start with what opens the conversation with gratitude; end with what turns it into a concrete act.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each step instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "قدّر النتيجة بجملة قصيرة وصادقة.", en: "Appreciate the result in one short, sincere sentence." },
            rationale: {
              ar: "يفتح المحادثة بامتنان طبيعي قبل أي طلب.",
              en: "Opens the conversation with natural gratitude before any ask.",
            },
          },
          {
            id: "i2",
            label: { ar: "اطرح سؤالاً محدداً عن نوع الشخص الذي تبحث عنه.", en: "Ask a specific question about the type of contact you're looking for." },
            rationale: {
              ar: "يوجّه ذهن العميل نحو اسم واحد بدل قائمة عامة.",
              en: "Points the client's mind to one name instead of a general list.",
            },
          },
          {
            id: "i3",
            label: { ar: "اصمت لثوانٍ لتمنح العميل وقتاً حقيقياً للتفكير.", en: "Pause for a few seconds to give the client real thinking time." },
            rationale: {
              ar: "الصمت يمنع الضغط ويترك مساحة حقيقية للرد الصادق.",
              en: "Silence prevents pressure and leaves real room for an honest answer.",
            },
          },
          {
            id: "i4",
            label: { ar: "أغلق بخطوة عملية واحدة محددة الموعد.", en: "Close with one concrete, time-bound practical step." },
            rationale: {
              ar: "يحوّل الرغبة الطيبة إلى فعل فعلي بدل أن تبقى معلّقة.",
              en: "Turns good intentions into an actual action instead of leaving them hanging.",
            },
          },
        ],
      },
      {
        id: "act.bd.08.3",
        kind: "short_written",
        skillId: "skill.referral-generation",
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.business-development-written.v1",
        weight: 3,
        minChars: 110,
        context: {
          ar: ["أنهيت قضية إرث معقدة لصالح عميل استرد فيها حصته كاملة، وعبّر عن امتنان واضح."],
          en: ["You closed a complex inheritance case for a client who recovered his full share, expressing clear gratitude."],
        },
        prompt: {
          ar: "اكتب الجملتين اللتين ستقولهما فعلياً لطلب إحالة (٢٥-٤٠ كلمة): تقدير ثم طلب محدد.",
          en: "Write the two sentences you'd actually say to ask for a referral (25-40 words): appreciation, then a specific ask.",
        },
        modelAnswer: {
          ar: ["«سعدت جداً بإنهاء هذا الملف معك بنتيجة عادلة. هل تعرف أحداً يمرّ بنزاع إرث مشابه؟ يسعدني تعريف نفسي له إن أحببت.»"],
          en: ["'I'm really glad we closed this with a fair result. Do you know anyone going through a similar inheritance dispute? Happy to introduce myself if you'd like.'"],
        },
        weakAnswer: {
          text: {
            ar: ["«الحمد لله انتهى الملف. بالمناسبة، إذا عرفت أحداً يحتاج محامياً أخبرني.»"],
            en: ["'Thank God the file is closed. By the way, if you know anyone needing a lawyer, let me know.'"],
          },
          whatIsWrong: {
            ar: "الانتقال المفاجئ بعبارة «بالمناسبة» يجعل الطلب يبدو ثانوياً وعاماً، بلا تحديد نوع الشخص المطلوب.",
            en: "The abrupt 'by the way' shift makes the ask feel like an afterthought, too vague about what kind of contact is wanted.",
          },
        },
      },
      {
        id: "act.bd.08.4",
        kind: "reflection",
        skillId: "skill.referral-generation",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "بعد المحاكاة: في أي لحظة شعرت أقرب إلى التسرّع أو التردد بدل الطلب الهادئ؟",
          en: "After the simulation: at which moment did you feel closer to rushing or hesitating, instead of a calm ask?",
        },
        followUp: {
          ar: "ما الجملة الافتتاحية التي ستستخدمها في المرة القادمة التي تطلب فيها إحالة فعلياً؟",
          en: "What opening line will you actually use next time you ask for a referral?",
        },
      },
      {
        id: "act.bd.08.5",
        kind: "categorization",
        skillId: "skill.referral-generation",
        stage: 3,
        weight: 2,
        context: {
          ar: [
            "تطلق دانا خدمة جديدة بأتعاب مقطوعة لمراجعة الامتثال السنوي للشركات الصغيرة، وتراجع قائمة عملائها لتقرر بمن تبدأ.",
          ],
          en: [
            "Dana is launching a new fixed-fee annual compliance-review service for small companies, and is reviewing her client list to decide who to approach first.",
          ],
        },
        prompt: {
          ar: "صنّف كل عميل: هل سيجرّب الخدمة الجديدة أولًا ويرشّحها لغيره، أم سينتظر حتى تثبت نجاحها مع آخرين؟",
          en: "Sort each client: will they try the new service first and recommend it onward, or wait until it's proven with others?",
        },
        hint: {
          ar: "اسأل: هل بادر هذا العميل بتجربة أفكار جديدة سابقًا، أم طلب دائمًا مرجعًا أو دليل نجاح أولًا؟",
          en: "Ask: has this client jumped at new ideas before, or always asked for a reference or track record first?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «يجرّب أولًا» / «ينتظر الإثبات» أسفل كل عميل بدل السحب.",
          en: "Choose \"Tries first\" / \"Waits for proof\" from buttons under each client instead of dragging.",
        },
        buckets: [
          { id: "early", label: { ar: "يجرّب أولًا", en: "Tries first" } },
          { id: "proven", label: { ar: "ينتظر الإثبات", en: "Waits for proof" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "كريم فارس، صاحب متجر إلكتروني سريع النمو، جرّب دائمًا كل اقتراح جديد قدّمته له دانا فور طرحه.",
              en: "Karim Fares, owner of a fast-growing online store, has always tried every new suggestion Dana raised the moment she raised it.",
            },
            bucketId: "early",
            rationale: {
              ar: "سجل تجربة سريعة لأفكار جديدة يجعله مرشحًا طبيعيًا للتجربة الأولى والترويج لها لاحقًا.",
              en: "A track record of quickly trying new ideas makes him a natural first tester, and likely advocate afterward.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "منى رزق، صاحبة مصنع عائلي، تطلب دائمًا مرجعًا أو دليل نجاح فعليًا قبل الموافقة على أي خدمة جديدة.",
              en: "Mona Rizk, owner of a family manufacturing business, always asks for a reference or proven track record before agreeing to any new service.",
            },
            bucketId: "proven",
            rationale: {
              ar: "نمطها الثابت هو التحقق أولًا؛ عرض خدمة غير مجرّبة عليها الآن سيقابَل بتردد لا حماس.",
              en: "Her consistent pattern is to verify first; pitching an untested service to her now will meet hesitation, not enthusiasm.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "سليم عبّود، مؤسس حاضنة شركات ناشئة، معروف بأنه أول من يجرّب أي أداة أو خدمة جديدة ويتحدث عنها علنًا.",
              en: "Salim Abboud, founder of a startup accelerator, is known for trying any new tool or service first and talking about it publicly.",
            },
            bucketId: "early",
            rationale: {
              ar: "حبه المعلن لتجربة الجديد ووصوله الواسع يجعلانه قناة طبيعية لنشر الخدمة الجديدة بسرعة.",
              en: "His public enthusiasm for trying new things, plus his wide reach, make him a natural fast channel for spreading the new service.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "هالة نصيف، المديرة المالية لشركة عقارية راسخة، تفضّل دائمًا مزوّدين مجرّبين منذ سنوات.",
              en: "Hala Nassif, CFO of an established real-estate firm, always prefers vendors that have been proven over years.",
            },
            bucketId: "proven",
            rationale: {
              ar: "تفضيلها الثابت للمجرَّب يعني أن أفضل توقيت لمقاربتها هو بعد أن تثبت الخدمة نفسها مع آخرين.",
              en: "Her consistent preference for the proven means the right time to approach her is after the service has already proven itself elsewhere.",
            },
          },
          {
            id: "c5",
            label: {
              ar: "يارا ديب، صاحبة متجر أزياء، أحالت لدانا ثلاثة عملاء بمبادرتها بعد تجربة إيجابية سابقة معها.",
              en: "Yara Deeb, a boutique owner, has referred three clients to Dana on her own initiative after a past positive experience.",
            },
            bucketId: "early",
            rationale: {
              ar: "سجل إحالة فعلي بمبادرة شخصية يثبت أنها تثق برأي دانا وتروّج له دون أن يُطلب منها.",
              en: "An actual track record of self-initiated referrals proves she trusts Dana's judgment and promotes it without being asked.",
            },
          },
        ],
      },
    ],
    summaryCard: {
      id: "card.bd.08",
      title: {
        ar: "الجملة الفعلية، لا المبدأ فقط",
        en: "The Actual Sentence, Not Just the Principle",
      },
      whatYouLearned: {
        ar: [
          "التقدير القصير الصادق هو أفضل مدخل طبيعي لطلب الإحالة، لا مقدمة طويلة أو انتقال مفاجئ.",
          "الصمت بعد السؤال ليس ضعفاً، بل يمنح العميل مساحة حقيقية ليتذكر اسماً بعينه.",
          "أنهِ دائماً بخطوة عملية واحدة محددة الموعد، لا وعداً عاماً بالتفكير لاحقاً.",
        ],
        en: [
          "A short, sincere appreciation is the best natural entry to a referral ask — not a long preamble or an abrupt shift.",
          "Silence after the ask isn't weakness — it gives the client real space to recall a specific name.",
          "Always close with one concrete, time-bound step, not a vague promise to think about it later.",
        ],
      },
      framework: {
        name: { ar: "قدِّر · اطلب واصمت · أغلق بخطوة", en: "Appreciate · Ask and Pause · Close With a Step" },
        steps: [
          { ar: "قدِّر النتيجة بجملة قصيرة وصادقة.", en: "Appreciate the result in one short, sincere line." },
          { ar: "اطلب بسؤال محدد، ثم اصمت لثوانٍ.", en: "Ask a specific question, then pause a few seconds." },
          { ar: "أغلق بخطوة عملية واحدة محددة الموعد.", en: "Close with one concrete, time-bound practical step." },
        ],
      },
      rememberThis: {
        ar: "الطلب الذي لا يُقال بصوت مرتفع يبقى نية حسنة لا إحالة فعلية.",
        en: "An ask never said out loud stays a good intention, not an actual referral.",
      },
      useItTomorrow: {
        ar: "في أول لقاء إغلاق ناجح هذا الأسبوع، جرّب الجملتين: التقدير ثم الطلب المحدد.",
        en: "At the first successful closing meeting this week, try the two lines: appreciation, then a specific ask.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.rainmaker", "src.ali-rise", "src.selling-the-invisible"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 09 — Recognizing the opening without forcing one
  // =========================================================================
  {
    id: "unit.bd.09",
    chapterId: "ch.bd.converting-to-instructions",
    order: 9,
    title: {
      ar: "تمييز الفرصة الحقيقية دون اختلاقها",
      en: "Recognizing the Opening Without Forcing One",
    },
    subtitle: {
      ar: "بين حاجة قانونية حقيقية ذُكرت عرضاً، وفرصة يختلقها المحامي من جملة عابرة، فرق كبير.",
      en: "There's a wide gap between a real legal need mentioned in passing and an opportunity a lawyer manufactures from an offhand remark.",
    },
    primarySkillId: "skill.business-development",
    skillIds: ["skill.business-development", "skill.commercial-awareness"],
    stage: 4,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.bd.09.hook",
        text: {
          ar: "صديق يشتكي بعابر الكلام من شريك عمل مزعج. هل هذه فرصة عمل، أم مجرد لحظة تنفيس عادية بين أصدقاء؟",
          en: "A friend casually complains about an annoying business partner. Is that a business opening, or just an ordinary moment of venting between friends?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.bd.09.why",
        text: {
          ar: "من يقفز على كل شكوى عابرة يبدو انتهازياً ويخسر ثقة بُنيت لسنوات. من يتجاهل حاجة حقيقية مذكورة بوضوح يخسر فرصة كان يستحقها.",
          en: "Pounce on every offhand complaint, and you look opportunistic, torching years of trust. Ignore a clearly stated real need, and you lose an opening you'd earned.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.bd.09.goals",
        goals: {
          ar: [
            "أن تميّز بين إشارة إلى حاجة قانونية حقيقية وبين شكوى عابرة لا تطلب حلاً.",
            "أن تتجنب اختلاق فرصة من كلام عام أو حديث اجتماعي بحت.",
            "أن تستجيب لفرصة حقيقية دون ضغط، بسؤال واحد يفتح الباب دون إغلاقه بالإلحاح.",
          ],
          en: [
            "Tell a signal of real legal need apart from an offhand complaint that isn't asking for a solution.",
            "Avoid manufacturing an opportunity out of general talk or purely social conversation.",
            "Respond to a genuine opening without pressure, with one question that opens the door instead of forcing it.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.bd.09.lesson",
        title: {
          ar: "علامة الفرصة الحقيقية: التكرار والتفصيل",
          en: "The Mark of a Real Opening: Repetition and Detail",
        },
        body: {
          ar: [
            "الفرصة الحقيقية غالباً تُذكر بتفصيل ملموس أو تتكرر أكثر من مرة، لا في جملة عابرة واحدة وسط حديث آخر.",
            "الشكوى الاجتماعية البحتة تنتهي عادة بعد جملة أو جملتين، ولا يعقبها سؤال أو طلب رأي من الطرف الآخر.",
            "اختلاق فرصة من كلام عابر - كأن تعرض خدماتك بعد شكوى بسيطة عن موظف - يبدو انتهازياً ويهدم الثقة.",
            "الكلفة ليست تجارية فقط؛ اختلاق الفرص يمسّ سمعتك المهنية وقد يخالف قواعد الاستقلالية وأخلاقيات المهنة.",
            "حين تشك في جدية الإشارة، اطرح سؤالاً مفتوحاً واحداً بدل افتراض الحاجة: «هل هذا أمر يشغلك فعلاً الآن؟»",
            "إن أكّد الطرف الآخر جديته، تابع بسؤال محدد عن التفاصيل. إن تراجع أو غيّر الموضوع، احترم ذلك وتوقف فوراً.",
          ],
          en: [
            "A real opening is usually mentioned with concrete detail, or repeats more than once — not a single offhand line lost in other talk.",
            "A purely social complaint usually ends after a line or two, with no follow-up question or request for an opinion.",
            "Manufacturing an opening from small talk — pitching services after a minor complaint about an employee — looks opportunistic and erodes trust.",
            "The cost isn't just commercial; manufacturing openings damages your professional reputation and can brush against rules on independence and ethics.",
            "When unsure a signal is serious, ask one open question instead of assuming a need: 'Is this something actually on your mind right now?'",
            "If they confirm it's serious, follow with one specific detail question. If they pull back or change the subject, respect that and stop immediately.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.bd.09.visual",
        title: {
          ar: "فرصة حقيقية أم اختلاق؟",
          en: "Genuine Opening or Manufactured One?",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "شكوى اجتماعية عابرة", en: "A passing social complaint" },
            detail: {
              ar: "جملة واحدة، لا تفصيل، لا سؤال متابعة من الطرف الآخر.",
              en: "One line, no detail, no follow-up question from the other side.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "فرصة مُختلَقة", en: "A manufactured opening" },
            detail: {
              ar: "المحامي يعرض خدماته بعد شكوى بسيطة لا تطلب حلاً قانونياً.",
              en: "The lawyer pitches services after a minor complaint that never asked for a legal fix.",
            },
            tone: "negative",
          },
          {
            label: { ar: "فرصة حقيقية", en: "A genuine opening" },
            detail: {
              ar: "تفصيل ملموس، تكرار، أو سؤال مباشر من الطرف الآخر عن الخيارات.",
              en: "Concrete detail, repetition, or a direct question from the other side about options.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.bd.09.worked",
        strong: {
          label: {
            ar: "دانا تلاحظ فرصة حقيقية عند سامر",
            en: "Dana notices a genuine opening with Samer",
          },
          text: {
            ar: [
              "يقول سامر قاسم، صاحب مصنع أثاث، خلال عشاء عائلي: «فعلاً نفكر جدياً بإعادة هيكلة الشركة، لكن لم نحسم بعد.» يعيد ذكرها مرة أخرى بعد قليل بتفصيل إضافي عن شركاء العائلة.",
              "تسأل دانا بهدوء: «يبدو أمراً يشغلك فعلاً. هل تحب أن نتحدث عنه بشكل منظّم في وقت لاحق؟» فيوافق سامر بارتياح.",
            ],
            en: [
              "Samer Qassem, a furniture factory owner, says over a family dinner: 'We're actually seriously considering restructuring the company, but haven't decided yet.' He repeats it shortly after, with more detail about family partners.",
              "Dana asks calmly: 'Sounds like something really on your mind. Want to talk it through properly sometime?' Samer agrees, relieved.",
            ],
          },
          why: {
            ar: "لاحظت التفصيل والتكرار كعلامتين على جدية الأمر، وردّت بسؤال مفتوح واحد بدل عرض خدماتها مباشرة.",
            en: "She noticed detail and repetition as signs of seriousness, responding with one open question instead of pitching her services outright.",
          },
        },
        weak: {
          label: {
            ar: "دانا تختلق فرصة من شكوى وداد",
            en: "Dana manufactures an opening from Widad's complaint",
          },
          text: {
            ar: ["تقول وداد عنتر بعابر الكلام أثناء نزهة: «شريكي في المشروع يزعجني أحياناً بقراراته.» فتردّ دانا فوراً: «يمكنني مراجعة عقد الشراكة معك إن أردت، عندي وقت هذا الأسبوع.»"],
            en: ["Widad Antar says in passing on a walk: 'My business partner's decisions annoy me sometimes.' Dana replies instantly: 'I could review your partnership agreement if you'd like, I have time this week.'"],
          },
          why: {
            ar: "قفزت من شكوى اجتماعية بسيطة إلى عرض خدمات مباشر، فبدت انتهازية وحوّلت لحظة صداقة إلى موقف محرج.",
            en: "She jumped from a minor social complaint straight to a service pitch, looking opportunistic and turning a friendly moment awkward.",
          },
        },
      },
      { kind: "activity", id: "s.bd.09.a1", activityId: "act.bd.09.1", mode: "quick" },
      { kind: "activity", id: "s.bd.09.a2", activityId: "act.bd.09.2", mode: "guided" },
      { kind: "activity", id: "s.bd.09.a3", activityId: "act.bd.09.3", mode: "guided" },
      { kind: "activity", id: "s.bd.09.a4", activityId: "act.bd.09.4", mode: "independent" },
      { kind: "activity", id: "s.bd.09.a5", activityId: "act.bd.09.5", mode: "independent" },
      { kind: "summary", id: "s.bd.09.summary", summaryCardId: "card.bd.09" },
      {
        kind: "apply_tomorrow",
        id: "s.bd.09.apply",
        task: {
          ar: "في أول مناسبة اجتماعية هذا الأسبوع، جرّب سؤالاً مفتوحاً واحداً بدل الافتراض أو التجاهل.",
          en: "At the first social occasion this week, try one open question instead of assuming or ignoring.",
        },
        detail: {
          ar: "لاحظ التكرار أو التفصيل كعلامة جدية قبل أن تسأل.",
          en: "Watch for repetition or detail as a sign of seriousness before you ask.",
        },
      },
      {
        kind: "next_mission",
        id: "s.bd.09.next",
        teaser: {
          ar: "عرفت كيف تميّز الفرصة الحقيقية. الوحدة الأخيرة: تحويلها إلى تكليف فعلي دون مبالغة، بمحاكاة حية.",
          en: "You know how to spot a genuine opening. Final unit: turning it into an actual engagement without overselling, in a live simulation.",
        },
      },
    ],
    activities: [
      {
        id: "act.bd.09.1",
        kind: "true_false",
        skillId: "skill.business-development",
        stage: 4,
        weight: 1,
        context: {
          ar: ["يقول معارف لدانا في حفل زفاف: «العمل مزدحم هذه الأيام»، دون أي تفصيل إضافي."],
          en: ["An acquaintance tells Dana at a wedding: 'Work's been busy these days,' with no further detail."],
        },
        prompt: {
          ar: "صواب أم خطأ: هذه إشارة كافية لعرض خدمات قانونية فوراً.",
          en: "True or false: this is a sufficient signal to pitch legal services right away.",
        },
        options: [
          {
            id: "true",
            label: { ar: "صواب", en: "True" },
            rationale: {
              ar: "جملة عامة بلا تفصيل قانوني ليست إشارة كافية؛ العرض الفوري يبدو انتهازياً.",
              en: "A vague line with no legal detail isn't a sufficient signal; an immediate pitch looks opportunistic.",
            },
          },
          {
            id: "false",
            label: { ar: "خطأ", en: "False" },
            correct: true,
            rationale: {
              ar: "صحيح. الجملة عامة جداً ولا تحمل أي إشارة لحاجة قانونية فعلية تستحق المتابعة.",
              en: "Correct. The line is too general and carries no real signal of an actual legal need worth pursuing.",
            },
          },
        ],
      },
      {
        id: "act.bd.09.2",
        kind: "categorization",
        skillId: "skill.business-development",
        stage: 4,
        weight: 2,
        prompt: {
          ar: "صنّف كل موقف: فرصة حقيقية تستحق سؤالاً مفتوحاً، أم حديث اجتماعي لا يستدعي أي رد مهني؟",
          en: "Sort each situation: a genuine opening worth an open question, or social talk needing no professional response?",
        },
        hint: {
          ar: "اسأل: هل يتكرر الكلام أو يحمل تفصيلاً ملموساً، أم ينتهي بجملة واحدة؟",
          en: "Ask: does the talk repeat or carry concrete detail, or does it end after one line?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «فرصة حقيقية» / «حديث اجتماعي» أسفل كل موقف بدل السحب.",
          en: "Choose \"Genuine opening\" / \"Social talk\" from buttons under each situation instead of dragging.",
        },
        buckets: [
          { id: "genuine", label: { ar: "فرصة حقيقية", en: "Genuine opening" } },
          { id: "social", label: { ar: "حديث اجتماعي", en: "Social talk" } },
        ],
        items: [
          {
            id: "c1",
            label: { ar: "«فعلاً نراجع خيارات بيع حصة من الشركة، لكن الأمر معقد.» تُذكر مرتين في نفس المحادثة.", en: "'We're actually reviewing options to sell a company stake, but it's complicated.' Said twice in the same conversation." },
            bucketId: "genuine",
            rationale: {
              ar: "تكرار وتفصيل ملموس يدلان على أن الأمر جدي ويستحق سؤال متابعة.",
              en: "Repetition and concrete detail signal this is serious and worth a follow-up question.",
            },
          },
          {
            id: "c2",
            label: { ar: "«الشغل تعبان هالفترة» بلا أي تفصيل إضافي.", en: "'Work's exhausting lately,' with no further detail." },
            bucketId: "social",
            rationale: {
              ar: "تعبير عام عن التعب لا يحمل أي إشارة إلى حاجة قانونية محددة.",
              en: "A general expression of tiredness carries no signal of a specific legal need.",
            },
          },
          {
            id: "c3",
            label: { ar: "«صراحة بندور على محامٍ يفهم بعقود التوزيع، هل تعرفين أحداً جيداً؟»", en: "'Honestly I'm looking for a lawyer who understands distribution contracts, know anyone good?'" },
            bucketId: "genuine",
            rationale: {
              ar: "سؤال مباشر وواضح عن الحاجة لمحامٍ - إشارة صريحة لا تحتاج تخميناً.",
              en: "A direct, clear question about needing a lawyer — an explicit signal needing no guesswork.",
            },
          },
          {
            id: "c4",
            label: { ar: "«زوجتي دائماً تقول لازم نعمل وصية، بس ما عنا وقت» بابتسامة عابرة.", en: "'My wife always says we should make a will, but we don't have time,' said with a passing smile." },
            bucketId: "social",
            rationale: {
              ar: "نبرة خفيفة وجملة واحدة عابرة، غالباً مزحة اجتماعية لا طلب فعلي.",
              en: "A light tone and a single passing line — usually a social joke, not a real request.",
            },
          },
          {
            id: "c5",
            label: { ar: "«فعلاً بدي أراجع عقد الإيجار قبل التجديد، الموعد قرّب.» مع سؤال: «شو رأيك أراجعه مع محامٍ؟»", en: "'I really need to review the lease before renewal, the date's close.' Followed by: 'What do you think, should I have a lawyer review it?'" },
            bucketId: "genuine",
            rationale: {
              ar: "طلب رأي مباشر مع موعد محدد - فرصة حقيقية تستحق متابعة واضحة.",
              en: "A direct request for an opinion with a specific date — a genuine opening worth a clear follow-up.",
            },
          },
        ],
      },
      {
        id: "act.bd.09.3",
        kind: "branching_decision",
        skillId: "skill.business-development",
        secondarySkillIds: ["skill.commercial-awareness"],
        stage: 4,
        weight: 2,
        prompt: {
          ar: "أدِر المحادثة مع معارف يذكر مشكلة عمل في حفل عائلي. اختر ردّك في كل لحظة.",
          en: "Run the conversation with an acquaintance mentioning a business problem at a family gathering. Choose your response at each moment.",
        },
        hint: {
          ar: "اسأل: هل هذا سؤال مفتوح يتحقق من الجدية، أم عرض خدمات مبكر جداً؟",
          en: "Ask: is this an open question checking seriousness, or a service pitch that's much too early?",
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
              ar: "يقول نديم شويري، صاحب متجر إلكتروني، بعابر الكلام: «التجارة الإلكترونية صار فيها قوانين جديدة، شوي مربكة.»",
              en: "Nadim Choueiri, an online-store owner, says in passing: 'E-commerce has new rules now, a bit confusing.'",
            },
            choices: [
              {
                id: "c1a",
                label: {
                  ar: "«يبدو الموضوع يشغلك، هل هذا شيء يواجه متجرك تحديداً الآن؟»",
                  en: "'Sounds like it's on your mind — is this something your store is actually facing right now?'",
                },
                nextNodeId: "n2",
                quality: "strong",
                rationale: {
                  ar: "سؤال مفتوح واحد يتحقق من الجدية دون افتراض حاجة أو عرض خدمات فوراً.",
                  en: "One open question checks seriousness without assuming a need or pitching services right away.",
                },
              },
              {
                id: "c1b",
                label: { ar: "«يمكنني مراجعة سياسات متجرك الليلة إن أردت، عندي وقت.»", en: "'I could review your store's policies tonight if you want, I have time.'" },
                nextNodeId: "n2",
                quality: "critical_mistake",
                rationale: {
                  ar: "عرض خدمات فوري بعد جملة عابرة يبدو انتهازياً ويحوّل حفلاً عائلياً إلى موقف تجاري محرج.",
                  en: "An instant service pitch after one offhand line looks opportunistic, turning a family gathering into an awkward sales moment.",
                },
              },
              {
                id: "c1c",
                label: { ar: "تغيير الموضوع فوراً وكأن الجملة لم تُقل.", en: "Changing the subject immediately, as if the line was never said." },
                nextNodeId: "n2",
                quality: "weak",
                rationale: {
                  ar: "تجاهل تام قد يفوّت فرصة حقيقية إن كان نديم يبحث فعلاً عن رأي.",
                  en: "Total avoidance may miss a genuine opening if Nadim is actually seeking input.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "نديم: «فعلاً، عندي غرامة مقترحة من جهة رقابية ولا أعرف كيف أتعامل معها.»",
              en: "Nadim: 'Actually, I've got a proposed fine from a regulator and I don't know how to handle it.'",
            },
            choices: [
              {
                id: "c2a",
                label: { ar: "«هذا فعلاً يستحق نظرة متخصصة. هل تحب أن نحدد وقتاً قصيراً هذا الأسبوع لمراجعتها؟»", en: "'That really deserves a specialist look. Want to set a short time this week to review it?'" },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "استجابة مباشرة ومحددة لحاجة حقيقية ذكرها هو بنفسه، بخطوة عملية واحدة.",
                  en: "A direct, specific response to a real need he named himself, with one practical next step.",
                },
              },
              {
                id: "c2b",
                label: { ar: "«لا تقلق، هذه الأمور عادة بسيطة ولا تحتاج محامياً.»", en: "'Don't worry, these things are usually simple and don't need a lawyer.'" },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "يقلل من جدية مشكلته الفعلية، ويفوّت فرصة واضحة طلبها هو صراحة.",
                  en: "Downplays his real, self-stated problem, missing an opening he explicitly raised.",
                },
              },
              {
                id: "c2c",
                label: { ar: "«بصراحة أنا الشخص المناسب لهذا، وثق بي سأربح لك القضية بسهولة.»", en: "'Honestly, I'm exactly the right person for this — trust me, I'll easily win this for you.'" },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "الوعد بربح نتيجة قبل معرفة التفاصيل مبالغة غير مسؤولة، ويخالف مبدأ عدم ضمان نتائج قانونية.",
                  en: "Promising a win before knowing the details is an irresponsible overreach, breaching the rule against guaranteeing legal outcomes.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.bd.09.4",
        kind: "short_written",
        skillId: "skill.business-development",
        secondarySkillIds: ["skill.commercial-awareness"],
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.business-development-written.v1",
        weight: 3,
        minChars: 110,
        context: {
          ar: ["يقول لك زميل جامعي قديم في تجمع خريجين: «فعلاً نفكر نفتح فرعاً ثانياً، بس الإجراءات معقدة وما بنعرف من وين نبدأ.» يذكرها بتفصيل إضافي بعد قليل."],
          en: ["An old university classmate tells you at an alumni gathering: 'We're actually thinking of opening a second branch, but the procedures are complicated and we don't know where to start.' He adds more detail shortly after."],
        },
        prompt: {
          ar: "اكتب ردّك (٣٠-٥٠ كلمة): سؤال مفتوح واحد يتحقق من الجدية دون عرض خدمات فوري.",
          en: "Write your response (30-50 words): one open question that checks seriousness, without an immediate service pitch.",
        },
        modelAnswer: {
          ar: ["«يبدو أمراً جدياً فعلاً. هل تحب أن نتحدث عنه بهدوء لاحقاً لأفهم التفاصيل أكثر؟»"],
          en: ["'Sounds like something real. Want to talk it through properly later so I understand the details better?'"],
        },
        weakAnswer: {
          text: {
            ar: ["«أنا محامية شركات، يمكنني أن أتولى كل الإجراءات لكم من الأسبوع القادم.»"],
            en: ["'I'm a corporate lawyer, I can handle all the procedures for you starting next week.'"],
          },
          whatIsWrong: {
            ar: "قفزة مباشرة لعرض خدمة كاملة قبل معرفة أي تفصيل فعلي، تبدو متسرعة وتفوّت فهم الحاجة أولاً.",
            en: "A direct jump to a full service pitch before knowing any real detail — looks rushed and skips understanding the need first.",
          },
        },
      },
      {
        id: "act.bd.09.5",
        kind: "reflection",
        skillId: "skill.business-development",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع موقفاً اجتماعياً ذكر فيه أحدهم مشكلة تخصّ عمله بعابر الكلام.",
          en: "Recall a social moment when someone mentioned a work problem in passing.",
        },
        followUp: {
          ar: "هل كانت فرصة حقيقية فوّتها، أم مجرد حديث عابر أحسنت بعدم الضغط فيه؟",
          en: "Was it a genuine opening you missed, or just passing talk you were right not to push on?",
        },
      },
    ],
    summaryCard: {
      id: "card.bd.09",
      title: {
        ar: "الفرصة الحقيقية لا تُختلق",
        en: "A Genuine Opening Isn't Manufactured",
      },
      whatYouLearned: {
        ar: [
          "الفرصة الحقيقية تتكرر أو تحمل تفصيلاً ملموساً، لا مجرد جملة عابرة وسط حديث آخر.",
          "اختلاق فرصة من كلام اجتماعي بحت يبدو انتهازياً ويكلّفك ثقة بُنيت لسنوات.",
          "استجب بسؤال مفتوح واحد يتحقق من الجدية، لا بعرض خدمات فوري أو وعد بنتيجة.",
        ],
        en: [
          "A genuine opening repeats or carries concrete detail — not just one offhand line amid other talk.",
          "Manufacturing an opening from purely social talk looks opportunistic and costs years of built trust.",
          "Respond with one open question that checks seriousness — not an immediate pitch or a promised outcome.",
        ],
      },
      framework: {
        name: { ar: "لاحظ · تحقق بسؤال · احترم الرد", en: "Notice · Check With a Question · Respect the Answer" },
        steps: [
          { ar: "لاحظ التكرار أو التفصيل كعلامة جدية.", en: "Notice repetition or detail as a sign of seriousness." },
          { ar: "اطرح سؤالاً مفتوحاً واحداً للتحقق.", en: "Ask one open question to check." },
          { ar: "احترم الرد سواء تابع الحديث أو غيّر الموضوع.", en: "Respect the answer, whether they continue or change the subject." },
        ],
      },
      rememberThis: {
        ar: "الفرصة التي تُختلق تُكتشف عاجلاً، وتكلفتك أكثر مما تكسبه.",
        en: "A manufactured opening gets found out sooner or later, and costs more than it earns.",
      },
      useItTomorrow: {
        ar: "في أول مناسبة اجتماعية هذا الأسبوع، جرّب سؤالاً مفتوحاً واحداً بدل الافتراض أو التجاهل.",
        en: "At the first social occasion this week, try one open question instead of assuming or ignoring.",
      },
    },
    targetLevel: 4,
    sourceIds: ["src.rainmaker", "src.game-changing-attorney", "src.ali-rise"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 10 — Turning a conversation into an engagement, without overselling
  // =========================================================================
  {
    id: "unit.bd.10",
    chapterId: "ch.bd.converting-to-instructions",
    order: 10,
    title: {
      ar: "تحويل حديث إلى تكليف فعلي، دون مبالغة",
      en: "Turning a Conversation Into an Engagement, Without Overselling",
    },
    subtitle: {
      ar: "الخطوة الأخيرة تربح بخطوة عملية واحدة منخفضة الضغط، لا بوعد بنتيجة قانونية.",
      en: "The final step is won with one low-pressure practical step — never a promised legal outcome.",
    },
    primarySkillId: "skill.converting-interest-to-instructions",
    skillIds: ["skill.converting-interest-to-instructions", "skill.business-development", "skill.commercial-awareness"],
    stage: 4,
    estimatedMinutes: 10,
    steps: [
      {
        kind: "hook",
        id: "s.bd.10.hook",
        text: {
          ar: "كرم يذكر مشكلة عقد حقيقية في حفل شبكة أعمال. اللحظة مناسبة، لكن أي كلمة تالية قد تربح الملف أو تخسر الثقة.",
          en: "Karam mentions a real contract problem at a networking event. The moment is right, but the next words could win the file or lose the trust.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.bd.10.why",
        text: {
          ar: "من يفرط في البيع في لحظة اجتماعية يبدو متعطشاً ويخسر الفرصة. من يعد بنتيجة قانونية لإغلاق الصفقة يخاطر بسمعته وبثقة الموكل معاً.",
          en: "Oversell in a social moment and you look desperate, losing the opening. Promise a legal outcome to close the deal, and you risk both your reputation and the client's trust.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.bd.10.goals",
        goals: {
          ar: [
            "أن تحوّل حديثاً اجتماعياً إلى خطوة مهنية واحدة واضحة، دون أن يفقد الحديث طابعه الودي.",
            "أن تتجنب أي وعد أو تلميح بنتيجة قانونية مضمونة لإقناع الطرف الآخر بالتوقيع.",
            "أن تقترح خطوة تالية منخفضة الضغط - مكالمة قصيرة أو بريد - بدل طلب التزام فوري.",
          ],
          en: [
            "Turn a social conversation into one clear professional step, without the exchange losing its friendly tone.",
            "Avoid any promise or hint of a guaranteed legal outcome to convince the other side to sign.",
            "Propose a low-pressure next step — a short call or an email — instead of demanding immediate commitment.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.bd.10.lesson",
        title: {
          ar: "الخطوة التالية أهم من الإقناع",
          en: "The Next Step Matters More Than Persuasion",
        },
        body: {
          ar: [
            "لحظة الفرصة الحقيقية مغرية للمبالغة: الحديث بثقة زائدة عن الخبرة، أو التلميح بضمان نتيجة إيجابية.",
            "الوعد بربح القضية أو ضمان نتيجة قانونية خطأ أخلاقي ومهني، ويهدم الثقة فور اكتشاف أن لا شيء مضمون فعلاً.",
            "الهدف في هذه اللحظة ليس التوقيع الفوري، بل خطوة تالية بسيطة: مكالمة قصيرة، أو بريد إلكتروني بمعلومات أولية.",
            "اجعل الخطوة التالية منخفضة الالتزام: «هل تحب أن أرسل لك بريداً بسيطاً بالخطوات الأولى؟» أسهل من «هل توقّع معنا الآن؟»",
            "الإطار الاجتماعي يبقى مهماً حتى بعد الاتفاق على خطوة تالية؛ لا تحوّل الحفل بالكامل إلى اجتماع عمل رسمي.",
            "بعد الحدث، تابع كتابياً خلال يوم أو يومين بخطوة محددة وموعد، لا رسالة عامة تنتظر ردّاً غامضاً.",
          ],
          en: [
            "A real opening tempts overreach: talking up your experience too hard, or hinting at a guaranteed positive result.",
            "Promising to win a case or guaranteeing a legal outcome is an ethical and professional error, and it destroys trust the moment it's clear nothing was ever guaranteed.",
            "The goal here isn't an immediate signature — it's one simple next step: a short call, or an email with initial information.",
            "Make the next step low-commitment: 'Want me to send a simple email on the first steps?' is easier than 'Will you sign with us now?'",
            "The social setting still matters even after agreeing on a next step; don't turn the whole event into a formal business meeting.",
            "After the event, follow up in writing within a day or two with a specific step and date — not a vague message waiting for an unclear reply.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.bd.10.visual",
        title: {
          ar: "من الحديث الاجتماعي إلى التكليف",
          en: "From Social Talk to the Engagement",
        },
        variant: "scale",
        items: [
          {
            label: { ar: "المبالغة والوعد", en: "Overselling and promising" },
            detail: {
              ar: "التلميح بضمان نتيجة أو الإلحاح للتوقيع فوراً - يخسر الثقة بسرعة.",
              en: "Hinting at a guaranteed result or pushing for an immediate signature — loses trust fast.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الصمت الكامل", en: "Total silence" },
            detail: {
              ar: "عدم اقتراح أي خطوة تالية - تضيع فرصة حقيقية بلا سبب.",
              en: "Suggesting no next step at all — a genuine opening wasted for no reason.",
            },
            tone: "negative",
          },
          {
            label: { ar: "خطوة تالية منخفضة الضغط", en: "A low-pressure next step" },
            detail: {
              ar: "بريد أو مكالمة قصيرة محددة الموعد، دون أي وعد بالنتيجة.",
              en: "A short call or email with a set date, with no promise about outcome.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.bd.10.worked",
        strong: {
          label: {
            ar: "دانا تقترح خطوة بسيطة دون وعد",
            en: "Dana proposes a simple step, with no promise",
          },
          text: {
            ar: [
              "تقول رشا فاخوري، مؤسسة استوديو أمل للتصميم، في ملتقى رياديين: «عندنا خلاف مع مورّد على بند في العقد، معقد شوي.»",
              "تجيب دانا: «يبدو موضوعاً يستحق نظرة دقيقة. هل تحبين أن أرسل لك بريداً بسيطاً بالخطوات الأولى الممكنة، دون أي التزام؟» فتوافق رشا فوراً.",
            ],
            en: [
              "Rasha Fakhoury, founder of Studio Amal design studio, says at a founders' meetup: 'We've got a dispute with a supplier over a contract clause, a bit complicated.'",
              "Dana replies: 'Sounds worth a careful look. Want me to send a simple email on possible first steps, no commitment at all?' Rasha agrees right away.",
            ],
          },
          why: {
            ar: "اقترحت خطوة تالية واضحة ومنخفضة الالتزام، دون أي وعد بنتيجة أو ضغط للتوقيع الفوري.",
            en: "She proposed a clear, low-commitment next step, with no promise of an outcome or pressure for an immediate signature.",
          },
        },
        weak: {
          label: {
            ar: "دانا تعد بنتيجة لتُقنع رشا فوراً",
            en: "Dana promises an outcome to win Rasha over on the spot",
          },
          text: {
            ar: ["«لا تقلقي إطلاقاً، مع خبرتي سأربح لك هذا النزاع بالتأكيد، فقط وقّعي معي الليلة.»"],
            en: ["'Don't worry at all, with my experience I'll definitely win this dispute for you — just sign with me tonight.'"],
          },
          why: {
            ar: "وعدت بنتيجة مضمونة قبل معرفة أي تفصيل، وضغطت لتوقيع فوري في حفل اجتماعي، فبدت غير موثوقة ومتعجلة.",
            en: "She promised a guaranteed result before knowing any details, and pushed for an on-the-spot signature at a social event, seeming untrustworthy and rushed.",
          },
        },
      },
      { kind: "activity", id: "s.bd.10.a1", activityId: "act.bd.10.1", mode: "quick" },
      { kind: "activity", id: "s.bd.10.a2", activityId: "act.bd.10.2", mode: "guided" },
      { kind: "activity", id: "s.bd.10.a3", activityId: "act.bd.10.3", mode: "independent" },
      { kind: "simulation", id: "s.bd.10.sim", scenarioId: "scn.converting-warm-contact" },
      { kind: "activity", id: "s.bd.10.a4", activityId: "act.bd.10.4", mode: "independent" },
      { kind: "activity", id: "s.bd.10.a5", activityId: "act.bd.10.5", mode: "independent" },
      { kind: "summary", id: "s.bd.10.summary", summaryCardId: "card.bd.10" },
      {
        kind: "apply_tomorrow",
        id: "s.bd.10.apply",
        task: {
          ar: "في أول حديث عمل غير رسمي هذا الأسبوع، اقترح خطوة تالية واحدة منخفضة الضغط، دون أي وعد.",
          en: "At the first informal work conversation this week, propose one low-pressure next step, with no promise at all.",
        },
        detail: {
          ar: "تابع كتابياً خلال يوم أو يومين بموعد محدد، مهما بدا الحماس كبيراً في اللحظة.",
          en: "Follow up in writing within a day or two with a set date, however excited the moment felt.",
        },
      },
      {
        kind: "next_mission",
        id: "s.bd.10.next",
        teaser: {
          ar: "أكملت مسار تطوير الأعمال. المهارات الآن ليست معرفة نظرية، بل عادات تُختبر في كل حديث وكل فرصة تظهر.",
          en: "You've completed the business-development path. These skills aren't theory now — they're habits tested in every conversation and every opening that appears.",
        },
      },
    ],
    activities: [
      {
        id: "act.bd.10.1",
        kind: "multiple_choice",
        skillId: "skill.converting-interest-to-instructions",
        stage: 4,
        weight: 1,
        context: {
          ar: ["يخبرك معارف في حفل شبكات أعمال أن شركته تواجه نزاعاً تجارياً حقيقياً مع شريك، ويبدو مهتماً برأيك."],
          en: ["An acquaintance at a networking event tells you his company faces a real commercial dispute with a partner, and seems interested in your take."],
        },
        prompt: {
          ar: "ما أفضل رد يحوّل هذا الحديث إلى خطوة مهنية دون مبالغة؟",
          en: "What's the best response that turns this into a professional step without overreach?",
        },
        options: [
          {
            id: "o1",
            label: { ar: "«يبدو موضوعاً جاداً. هل تحب أن أرسل لك بريداً بسيطاً بالخطوات الأولى الممكنة؟»", en: "'Sounds serious. Want me to send a simple email on the possible first steps?'" },
            correct: true,
            rationale: {
              ar: "خطوة تالية واضحة ومنخفضة الالتزام تحافظ على الطابع الودي وتفتح الباب مهنياً.",
              en: "A clear, low-commitment next step keeps the friendly tone while opening a professional door.",
            },
          },
          {
            id: "o2",
            label: { ar: "«ثقة تامة، مع خبرتي سأربح لك هذا النزاع بسهولة.»", en: "'Total confidence — with my experience, I'll easily win this dispute for you.'" },
            rationale: {
              ar: "وعد بنتيجة قانونية قبل معرفة أي تفصيل مخالفة أخلاقية خطيرة تهدم الثقة فور اكتشافها.",
              en: "Promising a legal outcome before knowing any detail is a serious ethical breach that destroys trust the moment it's exposed.",
            },
          },
          {
            id: "o3",
            label: { ar: "الاستماع فقط دون اقتراح أي خطوة تالية، وتغيير الموضوع بعد قليل.", en: "Just listening, suggesting no next step at all, and changing the subject shortly after." },
            rationale: {
              ar: "يضيّع فرصة حقيقية ذُكرت بوضوح دون أي سبب وجيه للتراجع.",
              en: "Wastes a clearly stated genuine opening for no good reason to hold back.",
            },
          },
          {
            id: "o4",
            label: { ar: "«هل توقّع عقد تمثيل معي الآن قبل انتهاء الحفل؟»", en: "'Will you sign a representation agreement with me right now before the event ends?'" },
            rationale: {
              ar: "الإلحاح لتوقيع فوري في مناسبة اجتماعية يبدو ضغطاً غير لائق ويربك الطرف الآخر.",
              en: "Pushing for an immediate signature at a social event feels like undue pressure and puts the other person on the spot.",
            },
          },
        ],
      },
      {
        id: "act.bd.10.2",
        kind: "ordering",
        skillId: "skill.converting-interest-to-instructions",
        stage: 4,
        weight: 2,
        prompt: {
          ar: "رتّب خطوات تحويل الحديث الاجتماعي إلى تكليف فعلي بالترتيب الصحيح.",
          en: "Order the steps of turning social conversation into an actual engagement, correctly.",
        },
        hint: {
          ar: "ابدأ بما يفهم الحاجة الفعلية، وانتهِ بما يحافظ على الاهتمام بعد الحفل.",
          en: "Start with what understands the real need; end with what keeps the interest alive after the event.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each step instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "أظهر اهتماماً حقيقياً واستمع للتفصيل دون مقاطعة.", en: "Show real interest and listen to the detail without interrupting." },
            rationale: {
              ar: "يفهم الحاجة الفعلية قبل أي اقتراح، فيتجنب الاستجابة السريعة الخاطئة.",
              en: "Understands the real need before any suggestion, avoiding a hasty wrong response.",
            },
          },
          {
            id: "i2",
            label: { ar: "اقترح خطوة تالية واحدة منخفضة الالتزام، بلا وعد بنتيجة.", en: "Propose one low-commitment next step, with no promise of outcome." },
            rationale: {
              ar: "يحوّل الاهتمام إلى فعل ملموس دون ضغط أو مبالغة.",
              en: "Turns interest into a concrete act, without pressure or overreach.",
            },
          },
          {
            id: "i3",
            label: { ar: "احصل على وسيلة تواصل واضحة قبل انتهاء الحديث.", en: "Get a clear way to follow up before the conversation ends." },
            rationale: {
              ar: "يضمن أن الخطوة التالية قابلة للتنفيذ فعلياً، لا نية حسنة تُنسى.",
              en: "Ensures the next step is actually executable, not a good intention that gets forgotten.",
            },
          },
          {
            id: "i4",
            label: { ar: "تابع كتابياً خلال يوم أو يومين بخطوة ومحدد موعد.", en: "Follow up in writing within a day or two, with a step and a set date." },
            rationale: {
              ar: "يحوّل لحظة الحفل إلى بداية فعلية قبل أن يبرد الاهتمام.",
              en: "Turns the event moment into an actual start before interest cools off.",
            },
          },
        ],
      },
      {
        id: "act.bd.10.3",
        kind: "email_rewrite",
        skillId: "skill.converting-interest-to-instructions",
        secondarySkillIds: ["skill.business-development"],
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.business-development-written.v1",
        weight: 3,
        minChars: 80,
        context: {
          ar: ["التقيت أمس بمعارف في حفل شبكات أعمال ذكر نزاعاً تجارياً حقيقياً مع شريك. تريد متابعته كتابياً اليوم دون أي وعد بنتيجة."],
          en: ["You met an acquaintance at a networking event yesterday who mentioned a real commercial dispute with a partner. You want to follow up in writing today, with no promise of outcome."],
        },
        draft: {
          ar: ["«أهلاً، تشرفت بلقائك أمس. بخصوص موضوع النزاع، أنا متأكدة أننا سنربح هذه القضية بسهولة، فقط أرسل لي موافقتك وسنبدأ فوراً!»"],
          en: ["'Hi, great meeting you yesterday. About the dispute — I'm sure we'll easily win this case, just send your approval and we'll start right away!'"],
        },
        prompt: {
          ar: "أعد صياغة الرسالة (٣٠-٥٠ كلمة) بحيث تقترح خطوة تالية واضحة دون أي وعد بالنتيجة.",
          en: "Rewrite the message (30-50 words) so it proposes a clear next step with no promise of outcome.",
        },
        modelAnswer: {
          ar: ["«أهلاً كرم، تشرفت بلقائك أمس. بخصوص النزاع الذي ذكرته، يسعدني إرسال بريد بسيط بالخطوات الأولى الممكنة إن أحببت، دون أي التزام من جانبك.»"],
          en: ["'Hi Karam, great meeting you yesterday. Regarding the dispute you mentioned, happy to send a simple email on possible first steps if you'd like, no commitment on your end.'"],
        },
        weakAnswer: {
          text: {
            ar: ["«أهلاً، عندي وقت هذا الأسبوع لمراجعة عقدكم الكامل، أرسل لي كل المستندات وسأبدأ فوراً.»"],
            en: ["'Hi, I have time this week to review your entire contract, send me all the documents and I'll start right away.'"],
          },
          whatIsWrong: {
            ar: "يطلب التزاماً كاملاً وفورياً دون اقتراح خطوة أولى بسيطة، فيبدو ثقيلاً بعد لقاء اجتماعي قصير.",
            en: "Asks for a full, immediate commitment with no simple first step offered, feeling heavy-handed after one short social meeting.",
          },
        },
      },
      {
        id: "act.bd.10.4",
        kind: "reflection",
        skillId: "skill.converting-interest-to-instructions",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "بعد المحاكاة: هل شعرت بأي لحظة اقتربت فيها من وعد بنتيجة أو ضغط زائد؟",
          en: "After the simulation: was there a moment you came close to promising an outcome or pushing too hard?",
        },
        followUp: {
          ar: "ما الجملة الدقيقة التي ستستخدمها لاقتراح خطوة تالية منخفضة الضغط في المرة القادمة؟",
          en: "What exact sentence will you use to propose a low-pressure next step next time?",
        },
      },
      {
        id: "act.bd.10.5",
        kind: "branching_decision",
        skillId: "skill.converting-interest-to-instructions",
        stage: 4,
        weight: 3,
        prompt: {
          ar: "بعد أن أرسلت لينا بركات، صاحبة بركات لحلول الطباعة، بريدك التمهيدي، تتصل بك لمناقشته. أدِر المحادثة حتى إغلاقها.",
          en: "After you sent Lina Barakat, owner of Barakat Print Solutions, your introductory email, she calls to discuss it. Run the conversation through to its close.",
        },
        hint: {
          ar: "أعد صياغة أي اعتراض كهدف مشترك بصيغة سؤال قبل الرد عليه، وأغلق دائمًا بموعد محدد لا بعبارة عامة.",
          en: "Reframe any objection as a shared goal, phrased as a question, before answering it — and always close with a specific date, not a vague line.",
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
              ar: "تقول لينا: «كل هذا يبدو مفيدًا، بس صراحة مش متأكدة إن الأتعاب تستاهل نزاعًا بهذا الحجم الصغير.»",
              en: "Lina says: 'This all sounds helpful, but honestly, I'm not sure the fees are worth it for a dispute this small.'",
            },
            choices: [
              {
                id: "c1a",
                label: {
                  ar: "«يبدو أن أهم شيء لك هو إبقاء الكلفة متناسبة مع حجم النزاع - هل يساعد لو قسّمنا الأتعاب على مرحلتين مرتبطتين بما ننجزه فعليًا؟»",
                  en: "'Sounds like keeping the cost proportional to the dispute's size matters most to you — would it help if we split the fee into two stages tied to what we actually resolve?'",
                },
                nextNodeId: "n2",
                quality: "strong",
                rationale: {
                  ar: "تعيد صياغة الاعتراض كهدف مشترك بصيغة سؤال قبل اقتراح حل، فيشعر الطرف الآخر بأنه فُهم لا بأنه يُقاوَم.",
                  en: "It reframes the objection as a shared goal, phrased as a question, before proposing a fix — so the other side feels understood, not resisted.",
                },
              },
              {
                id: "c1b",
                label: {
                  ar: "«أتعابنا تنافسية جدًا مقارنة بمكاتب أخرى، وأنا واثقة أنك ستحصلين على قيمة ممتازة.»",
                  en: "'Our fees are actually very competitive compared to other firms, and I'm confident you're getting excellent value.'",
                },
                nextNodeId: "n2",
                quality: "weak",
                rationale: {
                  ar: "دفاع مباشر عن السعر دون إعادة صياغة قلقها الفعلي، فيتحول الحوار إلى جدال حول الرقم لا حول ما يهمها.",
                  en: "A direct defense of the price without reframing her actual concern turns the conversation into an argument over the number, not what matters to her.",
                },
              },
              {
                id: "c1c",
                label: {
                  ar: "«لا تقلقي، أقدر أخفّض الأتعاب فورًا لأي رقم يناسبك.»",
                  en: "'Don't worry, I can lower the fee right now to whatever works for you.'",
                },
                nextNodeId: "n2",
                quality: "critical_mistake",
                rationale: {
                  ar: "تنازل فوري عن السعر دون فهم القلق الحقيقي يقوّض قيمة الخدمة نفسها ويفتح الباب لمساومة مستمرة لاحقًا.",
                  en: "Caving on price instantly, without understanding the real concern, undermines the service's value and invites ongoing haggling later.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "تبدو لينا مقتنعة أكثر وتقول: «طيب، هذا الطرح منطقي أكثر.» كيف تُنهين المكالمة؟",
              en: "Lina sounds more convinced and says: 'Okay, that makes more sense.' How do you end the call?",
            },
            choices: [
              {
                id: "c2a",
                label: {
                  ar: "«ممتاز، إن كان عندك أي سؤال إضافي أخبريني وقتما تحبين.»",
                  en: "'Great, just let me know whenever you have any more questions.'",
                },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "إغلاق عام بلا موعد أو خطوة محددة يترك الملف معلّقًا دون أي التزام فعلي من الطرفين.",
                  en: "A vague close with no date or specific step leaves the file hanging, with no real commitment from either side.",
                },
              },
              {
                id: "c2b",
                label: {
                  ar: "«رائع. هل نحدد مكالمة نصف ساعة الخميس الساعة الثالثة لمراجعة اتفاقية التمثيل للمرحلة الأولى؟»",
                  en: "'Great. Shall we set a thirty-minute call this Thursday at three to go over the engagement letter for stage one?'",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "تنتهي بنقطة قرار محددة وموعد فعلي ووثيقة اسمها، فتحوّل اهتمامها إلى التزام قابل للتنفيذ.",
                  en: "It ends with a specific decision point, an actual date, and a named document — turning her interest into an executable commitment.",
                },
              },
              {
                id: "c2c",
                label: {
                  ar: "«لا تقلقي إطلاقًا، أنا واثقة إننا سنحقق لك النتيجة اللي تبغينها بسرعة.»",
                  en: "'Don't worry at all, I'm confident we'll get you the outcome you want quickly.'",
                },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "وعد بنتيجة قانونية مضمونة مخالفة أخلاقية خطيرة، ويهدم الثقة بالكامل إن لم تتحقق النتيجة كما وُعد بها.",
                  en: "Promising a guaranteed legal outcome is a serious ethical breach, and it wrecks trust entirely if the result doesn't match the promise.",
                },
              },
            ],
          },
        ],
      },
    ],
    summaryCard: {
      id: "card.bd.10",
      title: {
        ar: "خطوة واحدة، بلا وعد",
        en: "One Step, No Promise",
      },
      whatYouLearned: {
        ar: [
          "الهدف في اللحظة الاجتماعية ليس التوقيع الفوري، بل خطوة تالية بسيطة ومحددة.",
          "أي وعد أو تلميح بضمان نتيجة قانونية يخاطر بسمعتك وبثقة الموكل معاً، ولا مكان له أبداً.",
          "تابع كتابياً خلال يوم أو يومين بخطوة ومحددة موعد، قبل أن يبرد الاهتمام الذي أبداه الطرف الآخر.",
        ],
        en: [
          "The goal in a social moment isn't an immediate signature — it's one simple, specific next step.",
          "Any promise or hint of a guaranteed legal outcome risks both your reputation and the client's trust, and has no place, ever.",
          "Follow up in writing within a day or two with a step and a date, before the interest they showed cools off.",
        ],
      },
      framework: {
        name: { ar: "استمع · اقترح خطوة · تابع بلا وعد", en: "Listen · Propose a Step · Follow Up, No Promises" },
        steps: [
          { ar: "استمع للتفصيل الفعلي دون مقاطعة أو استنتاج مبكر.", en: "Listen to the actual detail without interrupting or jumping to conclusions." },
          { ar: "اقترح خطوة تالية واحدة منخفضة الالتزام.", en: "Propose one low-commitment next step." },
          { ar: "تابع كتابياً خلال يوم أو يومين بموعد محدد.", en: "Follow up in writing within a day or two, with a set date." },
        ],
      },
      rememberThis: {
        ar: "الوعد بالفوز يُنسى إن تحقق، ويُذكر للأبد إن لم يتحقق.",
        en: "A promised win is forgotten if it happens, and remembered forever if it doesn't.",
      },
      useItTomorrow: {
        ar: "في أول حديث عمل غير رسمي هذا الأسبوع، اقترح خطوة تالية واحدة منخفضة الضغط، دون أي وعد.",
        en: "At the first informal work conversation this week, propose one low-pressure next step, with no promise at all.",
      },
    },
    targetLevel: 4,
    sourceIds: ["src.rainmaker", "src.selling-the-invisible", "src.ali-rise"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
