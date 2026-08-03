import type { UnitDef } from "../types";

/**
 * Client Communication Foundations — Chapter 1 (`ch.cc.first-contact`) units 1–3
 * and Chapter 2 (`ch.cc.understanding`) unit 4.
 *
 * Scenarios and rubrics referenced here are authored elsewhere in the bundle.
 */
export const CC_UNITS_01_04: UnitDef[] = [
  // =========================================================================
  // UNIT 01 — Preparing for the First Meeting
  // =========================================================================
  {
    id: "unit.cc.01",
    chapterId: "ch.cc.first-contact",
    order: 1,
    title: {
      ar: "الاستعداد للقاء الأول",
      en: "Preparing for the First Meeting",
    },
    subtitle: {
      ar: "عشر دقائق تفصل بين محامٍ قرأ الملف ومحامٍ يرتجل أمام موكّله",
      en: "Ten minutes separate the lawyer who read the file from the one improvising in front of the client.",
    },
    primarySkillId: "skill.meeting-preparation",
    skillIds: ["skill.meeting-preparation", "skill.trust-building"],
    stage: 1,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.cc.01.hook",
        text: {
          ar: "الموكّل لا يقيس كفاءتك من مرافعتك. يقيسها في الدقائق الثلاث الأولى، حين يكتشف هل قرأتَ ملفه أم لا.",
          en: "A client does not measure your competence by your pleading. He measures it in the first three minutes, when he discovers whether you read his file.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.cc.01.why",
        text: {
          ar: "الدخول باردًا نادرًا ما يُخسرك القضية، لكنه يُخسرك العلاقة: الموكّل يعيد سرد ما قاله للاستقبال، فيستنتج أن أحدًا لم يهتم.",
          en: "Walking in cold rarely costs you the case. It costs you the relationship: the client repeats what he already told reception and concludes that nobody bothered.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.cc.01.goals",
        goals: {
          ar: [
            "أن تحدّد في دقيقتين مَن قادم إليك وبأي صفة ولماذا اليوم بالذات.",
            "أن تكتب ثلاثة فراغات معلوماتية لا يجوز أن ينتهي اللقاء قبل سدّها.",
            "أن تجهّز الغرفة والأدوات والمهلة الزمنية قبل أن يجلس الموكّل.",
          ],
          en: [
            "Establish in two minutes who is coming, in what capacity, and why today of all days.",
            "Write three information gaps the meeting must not end without filling.",
            "Set up the room, the tools and the time frame before the client sits down.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.cc.01.lesson",
        title: {
          ar: "التحضير ليس بحثًا قانونيًا",
          en: "Preparation is not legal research",
        },
        body: {
          ar: [
            "أكثر المحامين يخلطون بين التحضير والبحث. البحث يأتي بعد الوقائع، لا قبلها.",
            "قبل اللقاء الأول لا تملك وقائع؛ تملك عنوانًا في ورقة استقبال. البحث انطلاقًا من عنوان هو بحث في الفراغ.",
            "التحضير الحقيقي إجرائي: مَن هو؟ بأي صفة يتعاقد؟ ما الحدث الذي دفعه للاتصال هذا الأسبوع؟",
            "ثم سؤال لا يُؤجَّل: هل يوجد تعارض مصالح مع موكّل حالي؟ اكتشافه بعد سماع الأسرار يضعك في مأزق مهني لا رجعة فيه.",
            "وأخيرًا: الغرفة. هاتف مقلوب وبعيد عن يدك، ورقة وقلم، ومهلة زمنية تُعلنها في أول دقيقة.",
            "عشر دقائق تكفي. الهدف ليس أن تعرف الجواب، بل ألّا تُضيّع اللقاء في أسئلة كان يمكن الإجابة عنها قبل دخوله.",
          ],
          en: [
            "Most lawyers confuse preparation with research. Research comes after the facts, not before them.",
            "Before a first meeting you have no facts. You have a label on an intake sheet. Research from a label is research into the void.",
            "Real preparation is operational: who is he, in what capacity does he contract, and what event made him call this week?",
            "Then a question that cannot wait: is there a conflict with an existing client? Discovering it after hearing confidences puts you in a professional bind you cannot undo.",
            "Finally, the room. Phone face down and out of reach, paper and pen, and a time frame you announce in the first minute.",
            "Ten minutes is enough. The goal is not to know the answer. It is to avoid burning the meeting on questions you could have answered before he walked in.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.cc.01.visual",
        title: {
          ar: "طقس العشر دقائق: ملفي",
          en: "The ten-minute ritual: MY FILE",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "م — مَن؟", en: "Who?" },
            detail: {
              ar: "الاسم الكامل، الصفة (أصيل أم ممثل شركة)، ومن أحاله إليك.",
              en: "Full name, capacity (in person or representing a company), and who referred him.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "ل — لماذا الآن؟", en: "Why now?" },
            detail: {
              ar: "الحدث الذي دفعه للاتصال هذا الأسبوع، وأي مهلة أو موعد جلسة قريب.",
              en: "The event that made him call this week, and any deadline or imminent hearing.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "ف — الفراغات", en: "Gaps" },
            detail: {
              ar: "ثلاث معلومات لا تملكها، ولا يجوز أن ينتهي اللقاء قبل سدّها.",
              en: "Three pieces of information you do not have, which the meeting must not end without.",
            },
            tone: "positive",
          },
          {
            label: { ar: "ي — ما في يدي", en: "In hand" },
            detail: {
              ar: "ورقة وقلم، هاتف مقلوب وبعيد، مهلة زمنية معلنة، وفحص تعارض المصالح.",
              en: "Paper and pen, phone face down and away, an announced time frame, and a conflict check.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.cc.01.worked",
        strong: {
          label: {
            ar: "افتتاح محامٍ حضّر عشر دقائق",
            en: "Opening by a lawyer who prepared for ten minutes",
          },
          text: {
            ar: [
              "«أهلًا أستاذ مروان. أعرف أن الأستاذة ريما هي من دلّتك علينا، فشكرًا لثقتها.»",
              "«فهمت من الاستقبال أن الخلاف مع شريكك في محل مواد البناء، وأن هناك اجتماعًا للشركاء الأسبوع القادم.»",
              "«أمامنا خمس وأربعون دقيقة. أريد أن أسمع القصة من أولها بلغتك، ثم أسألك عن ثلاثة أمور تحديدًا.»",
            ],
            en: [
              "“Welcome, Mr. Marwan. I know Ms. Rima is the one who pointed you to us — thank her for the trust.”",
              "“I understand from reception that the dispute is with your partner in the building-materials business, and that there is a partners’ meeting next week.”",
              "“We have forty-five minutes. I want to hear the story from the beginning, in your own words, then I will ask you about three specific things.”",
            ],
          },
          why: {
            ar: "كل جملة تنقل معلومة كان يمكن للموكّل أن يقولها بنفسه — وهذا بالضبط ما يجعله يشعر أن ملفه قُرئ. إعلان المهلة يحرّره من مراقبة الساعة، وإعلان «ثلاثة أمور» يعده بأن اللقاء له بنية لا ارتجال.",
            en: "Every sentence carries information the client could have supplied himself — which is exactly what tells him his file was read. Announcing the time frame frees him from watching the clock; announcing “three things” promises him the meeting has a structure rather than an improvisation.",
          },
        },
        weak: {
          label: {
            ar: "افتتاح محامٍ دخل باردًا",
            en: "Opening by a lawyer who walked in cold",
          },
          text: {
            ar: [
              "«تفضّل… عفوًا، مروان صح؟ ذكّرني، أنت من أرسلك؟»",
              "«طيب. قل لي المشكلة من البداية، وخذ راحتك.»",
              "«لحظة، شراكة؟ يعني الموضوع شركة تضامن أم محدودة المسؤولية؟ ما عندي الملف قدّامي.»",
            ],
            en: [
              "“Come in… sorry, Marwan, right? Remind me, who sent you?”",
              "“Fine. Tell me the problem from the beginning, take your time.”",
              "“Wait — a partnership? So is this a general partnership or a limited liability company? I don’t have the file in front of me.”",
            ],
          },
          why: {
            ar: "الخطأ ليس الجهل بالمعلومة، بل إظهار أن المعلومة كانت متاحة ولم تُقرأ. الموكّل لا يستنتج «هذا محامٍ مشغول»، بل «هذا مكتب لا يتذكّرني»؛ ومن هذه اللحظة يبدأ بحجب التفاصيل بدل التطوّع بها.",
            en: "The failure is not ignorance of the fact; it is showing that the fact was available and left unread. The client does not conclude “this lawyer is busy” — he concludes “this office does not remember me,” and from that moment he starts withholding detail instead of volunteering it.",
          },
        },
      },
      { kind: "activity", id: "s.cc.01.a1", activityId: "act.cc.01.1", mode: "quick" },
      { kind: "activity", id: "s.cc.01.a2", activityId: "act.cc.01.2", mode: "guided" },
      { kind: "activity", id: "s.cc.01.a3", activityId: "act.cc.01.3", mode: "guided" },
      { kind: "activity", id: "s.cc.01.a4", activityId: "act.cc.01.4", mode: "independent" },
      { kind: "activity", id: "s.cc.01.a5", activityId: "act.cc.01.5", mode: "independent" },
      { kind: "summary", id: "s.cc.01.summary", summaryCardId: "card.cc.01" },
      {
        kind: "apply_tomorrow",
        id: "s.cc.01.apply",
        task: {
          ar: "قبل أول لقاء لك غدًا، خصّص عشر دقائق واكتب على ورقة واحدة: مَن؟ لماذا الآن؟ وثلاثة فراغات.",
          en: "Before your first meeting tomorrow, take ten minutes and write on one sheet: Who? Why now? And three gaps.",
        },
        detail: {
          ar: "ضع الورقة أمامك على الطاولة ولا تخفها. رؤية الموكّل لاسمه مكتوبًا بخطّك قبل أن يتكلم تفعل ما لا تفعله عشر جمل ترحيب.",
          en: "Put the sheet on the table in front of you and do not hide it. A client seeing his own name in your handwriting before he speaks does more than ten sentences of welcome.",
        },
      },
      {
        kind: "next_mission",
        id: "s.cc.01.next",
        teaser: {
          ar: "حضّرتَ الملف. لكن الموكّل جالس الآن أمامك وهاتفك يهتزّ. الوحدة القادمة: كيف تُبنى الثقة — أو تُهدم — في الدقائق الخمس الأولى.",
          en: "You prepared the file. But the client is now sitting in front of you and your phone is buzzing. Next unit: how trust is built — or destroyed — in the first five minutes.",
        },
      },
    ],
    activities: [
      {
        id: "act.cc.01.1",
        kind: "multiple_choice",
        skillId: "skill.meeting-preparation",
        stage: 1,
        context: {
          ar: [
            "غدًا الساعة العاشرة: موكّل جديد، السيد مروان الشدياق، أحالته إليك موكّلة قديمة.",
            "ورقة الاستقبال تقول سطرًا واحدًا: «خلاف مع شريكه في محل لبيع مواد البناء».",
            "أمامك عشر دقائق فقط قبل أن يدخل.",
          ],
          en: [
            "Tomorrow at ten: a new client, Mr. Marwan Al-Shidyaq, referred by a long-standing client.",
            "The intake sheet says one line: “Dispute with his partner in a building-materials shop.”",
            "You have exactly ten minutes before he walks in.",
          ],
        },
        prompt: {
          ar: "ما أفضل استخدام لهذه الدقائق العشر؟",
          en: "What is the best use of those ten minutes?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "مراجعة الاجتهادات القضائية في حلّ الشركات لتكون جاهزًا بالجواب القانوني.",
              en: "Review case law on dissolving companies so you have the legal answer ready.",
            },
            rationale: {
              ar: "بحث قبل الوقائع هو بحث في الفراغ. قد يكون الخلاف أصلًا على حساب مصرفي أو على بضاعة، فتكون قد حضّرت جوابًا لسؤال لن يُطرح، وأنفقت دقائقك على القانون بدل الموكّل.",
              en: "Research before facts is research into the void. The dispute may turn out to be about a bank account or stock, so you will have prepared an answer to a question nobody asks — and spent your minutes on the code instead of the client.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "مراجعة ما تعرفه فعلًا عنه، وتحديد سبب حضوره الآن، وكتابة ثلاثة أسئلة لا تملك إجابتها.",
              en: "Review what you actually know about him, pin down why he is coming now, and write three questions you cannot answer.",
            },
            correct: true,
            rationale: {
              ar: "هذا هو التحضير المنتج: يمنحك افتتاحًا يُظهر أن الملف قُرئ، ويحمي اللقاء من التشتت، ويضمن ألّا ينتهي وأنت تجهل ما لا يجوز جهله. الأسئلة الثلاثة هي عقدك مع نفسك.",
              en: "This is productive preparation: it gives you an opening that shows the file was read, protects the meeting from drift, and guarantees it will not end with you ignorant of what you cannot afford to be ignorant of. The three questions are your contract with yourself.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "تجهيز عرض موجز عن خبرة المكتب في نزاعات الشركات.",
              en: "Prepare a short pitch on the firm’s experience in company disputes.",
            },
            rationale: {
              ar: "الموكّل قرّر المجيء أصلًا؛ لم يعد بحاجة لإقناع. الحديث عن المكتب في الافتتاح يستهلك الدقائق التي يحتاجها هو ليروي، ويُقرأ غالبًا كقلق لا كثقة.",
              en: "He already decided to come; he does not need convincing. Talking about the firm at the opening consumes the minutes he needs to tell his story, and usually reads as anxiety rather than confidence.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "لا شيء؛ اللقاء الأول استكشافي وسيقول لك كل شيء بنفسه.",
              en: "Nothing; the first meeting is exploratory and he will tell you everything himself.",
            },
            rationale: {
              ar: "سيقول لك أشياء كثيرة، لكنه سيقولها للمرة الثانية بعد الاستقبال. التكرار هو ما يُشعره أن أحدًا لم يقرأ ملفه، والثمن يُدفع من العلاقة لا من القضية.",
              en: "He will tell you plenty — but for the second time, after reception. That repetition is what tells him nobody read his file, and the price is paid by the relationship, not the case.",
            },
          },
        ],
      },
      {
        id: "act.cc.01.2",
        kind: "ordering",
        skillId: "skill.meeting-preparation",
        stage: 1,
        prompt: {
          ar: "رتّب خطوات طقس العشر دقائق بالترتيب الذي يجعل كل خطوة تُغذّي التي بعدها.",
          en: "Put the ten-minute ritual in the order that lets each step feed the next.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٥) من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the position number (1 to 5) from a dropdown beside each step instead of dragging.",
        },
        hint: {
          ar: "ابدأ بما تملكه على الورق، وانتهِ بما تفعله بيديك في الغرفة.",
          en: "Start with what you already have on paper; end with what you do with your hands in the room.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "اقرأ ورقة الاستقبال: الاسم الكامل، الصفة، ومن أحاله إليك.",
              en: "Read the intake sheet: full name, capacity, and who referred him.",
            },
            rationale: {
              ar: "الصفة تحدّد مَن هو موكّلك فعلًا — الشخص أم الشركة — وهذا يغيّر كل ما يليه، بما فيه من يوقّع وكالتك.",
              en: "Capacity decides who your client actually is — the person or the company — and that changes everything after it, including who signs your engagement.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "اكتب في جملة واحدة: لماذا يأتي اليوم بالذات؟ ما الحدث الذي حرّكه؟",
              en: "Write in one sentence: why is he coming today of all days? What event moved him?",
            },
            rationale: {
              ar: "«لماذا الآن» يكشف المهل والضغوط. من يأتي بعد إنذار مهلته خمسة أيام لقاؤه ليس كمن يأتي بعد سنة من التفكير.",
              en: "“Why now” exposes deadlines and pressure. A client arriving after a five-day formal notice needs a different meeting from one arriving after a year of thinking.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "افحص تعارض المصالح مقابل قائمة الموكّلين والخصوم الحاليين.",
              en: "Run a conflict check against the current client and adverse-party list.",
            },
            rationale: {
              ar: "هذه الخطوة الوحيدة التي لا يمكن تداركها لاحقًا: ما تسمعه لا يمكن أن «تُلغي سماعه». افحص قبل أن يتكلم، لا بعد.",
              en: "This is the one step you cannot fix later: what you hear cannot be un-heard. Check before he speaks, not after.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "اكتب ثلاثة فراغات: معلومات لا تملكها ولا يجوز أن ينتهي اللقاء بدونها.",
              en: "Write three gaps: information you lack that the meeting must not end without.",
            },
            rationale: {
              ar: "الفراغات تأتي بعد فهم «مَن» و«لماذا الآن»، وإلا كتبت أسئلة عامة. ثلاثة فقط — لأن قائمة من عشرة تتحوّل إلى استجواب.",
              en: "Gaps come after “who” and “why now”, otherwise you write generic questions. Only three — a list of ten turns the meeting into an interrogation.",
            },
          },
          {
            id: "i5",
            label: {
              ar: "جهّز الغرفة: ورقة وقلم، هاتف مقلوب وبعيد عن يدك، ومهلة زمنية ستعلنها.",
              en: "Set the room: paper and pen, phone face down and out of reach, and a time frame you will announce.",
            },
            rationale: {
              ar: "آخر خطوة لأنها الوحيدة التي يراها الموكّل. الهاتف بعيدًا عن اليد لا مقلوبًا فقط: القرب وحده يغريك بالنظر.",
              en: "Last, because it is the only step the client sees. Phone out of reach, not merely face down: proximity alone is enough to tempt a glance.",
            },
          },
        ],
      },
      {
        id: "act.cc.01.3",
        kind: "categorization",
        skillId: "skill.meeting-preparation",
        stage: 1,
        prompt: {
          ar: "صنّف كل معلومة: هل يجب أن تُحسم قبل أن يدخل الموكّل، أم تُكتشف داخل اللقاء؟",
          en: "Sort each item: must it be settled before the client walks in, or discovered inside the meeting?",
        },
        hint: {
          ar: "اسأل عن كل بند: هل يمكن معرفته من ورقة الاستقبال أو من سجلّات المكتب؟ إن كان الجواب نعم، فمكانه قبل الباب.",
          en: "Ask of each item: could it be known from the intake sheet or the firm’s own records? If yes, its place is before the door.",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «قبل الدخول» / «داخل اللقاء» أسفل كل بند بدل السحب.",
          en: "Choose “Before” or “Inside” from buttons under each item instead of dragging.",
        },
        buckets: [
          { id: "before", label: { ar: "يُحسم قبل الدخول", en: "Settle before he walks in" } },
          { id: "inside", label: { ar: "يُكتشف داخل اللقاء", en: "Discover inside the meeting" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "الاسم الكامل للموكّل وصفته: أصيل عن نفسه أم ممثل عن شركة.",
              en: "The client’s full name and capacity: acting for himself or representing a company.",
            },
            bucketId: "before",
            rationale: {
              ar: "مخاطبته بصفة خاطئة خطأ محرج، لكن الأخطر أن الصفة تحدّد من هو موكّلك قانونًا ومن يوقّع الوكالة والأتعاب.",
              en: "Addressing him in the wrong capacity is embarrassing; worse, capacity determines who your client legally is, and who signs the engagement and the fee terms.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "طبيعة العلاقة بين الشريكين وتفاصيل الخلاف وتسلسله.",
              en: "The nature of the relationship between the partners and the detail and sequence of the dispute.",
            },
            bucketId: "inside",
            rationale: {
              ar: "لا يمكن استخراجها من ورقة استقبال، ومحاولة افتراضها هي بالضبط ما يُنتج التشخيص المبكر الذي يقفل باب المعلومات.",
              en: "It cannot be extracted from an intake sheet, and guessing at it is exactly what produces the premature diagnosis that shuts the information door.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "وجود مهلة قانونية أو موعد جلسة قريب ذُكر في اتصال الاستقبال.",
              en: "A legal deadline or imminent hearing date mentioned during the intake call.",
            },
            bucketId: "before",
            rationale: {
              ar: "إن كانت هناك مهلة تنقضي خلال أيام، فترتيب اللقاء نفسه يتغيّر: تبدأ بالمهلة قبل الرواية، وقد تتصل به قبل موعده.",
              en: "If a deadline expires within days, the shape of the meeting changes: you start with the deadline before the narrative, and you may even call him before the appointment.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "ما يريده الموكّل فعلًا: الخروج من الشراكة، أم تعويض، أم استعادة موقعه في الإدارة.",
              en: "What the client actually wants: to exit the partnership, compensation, or to get his management role back.",
            },
            bucketId: "inside",
            rationale: {
              ar: "لا يعرفه الاستقبال، وأحيانًا لا يعرفه الموكّل نفسه بوضوح. افتراضه مسبقًا هو أسرع طريق لبناء استراتيجية لا تخدم أحدًا.",
              en: "Reception does not know it, and sometimes the client himself has not articulated it. Assuming it in advance is the fastest route to a strategy that serves no one.",
            },
          },
          {
            id: "c5",
            label: {
              ar: "اسم من أحال الموكّل إليك.",
              en: "The name of whoever referred him to you.",
            },
            bucketId: "before",
            rationale: {
              ar: "يحدّد مستوى الثقة المسبقة التي دخل بها، ويُنبّهك إلى تعارض محتمل إن كان المُحيل طرفًا في علاقة تجارية مع الخصم.",
              en: "It tells you the level of pre-existing trust he arrived with, and flags a possible conflict if the referrer has a commercial link to the other side.",
            },
          },
          {
            id: "c6",
            label: {
              ar: "وجود تعارض مصالح ظاهر مع موكّل حالي أو خصم سابق.",
              en: "An apparent conflict of interest with a current client or a past adverse party.",
            },
            bucketId: "before",
            rationale: {
              ar: "الخطوة الوحيدة التي لا تقبل التأجيل إطلاقًا. اكتشاف التعارض بعد سماع الأسرار يضعك أمام اعتذار مهني مكلف لك وللموكّل معًا.",
              en: "The one step that tolerates no delay. Discovering the conflict after hearing confidences forces a professional withdrawal that is costly for you and for him.",
            },
          },
        ],
      },
      {
        id: "act.cc.01.4",
        kind: "short_written",
        skillId: "skill.meeting-preparation",
        secondarySkillIds: ["skill.client-follow-up", "skill.trust-building"],
        stage: 1,
        grading: "ai_rubric",
        rubricId: "rubric.client-response.v1",
        weight: 2,
        minChars: 220,
        context: {
          ar: [
            "الموعد غدًا العاشرة صباحًا مع السيد مروان الشدياق، لقاء أول.",
            "تريد أن تصل إليه رسالة الليلة تُشعره أن ملفه قُرئ، وتجعل اللقاء أكثر إنتاجية.",
          ],
          en: [
            "The appointment is tomorrow at 10:00 with Mr. Marwan Al-Shidyaq — a first meeting.",
            "You want a message to reach him tonight that shows his file was read and makes the meeting more productive.",
          ],
        },
        prompt: {
          ar: "اكتب رسالة تأكيد قصيرة (٤٠–٦٠ كلمة) ترسلها له مساء اليوم. لا تعد بأي نتيجة، ولا تطلب مستندات لا تعرف أنها موجودة.",
          en: "Write a short confirmation message (40–60 words) to send him this evening. Promise no outcome, and do not ask for documents you do not know exist.",
        },
        modelAnswer: {
          ar: [
            "«مساء الخير أستاذ مروان. تأكيدًا لموعدنا غدًا الساعة العاشرة في المكتب، ومدّته خمس وأربعون دقيقة.»",
            "«سأسمع منك القصة من بدايتها، ثم نتفق على الخطوة التالية.»",
            "«إن توفّر لديك عقد الشراكة أو أي مراسلات حديثة مع شريكك، أحضرها معك؛ وإن لم تتوفّر فلا مشكلة، نبدأ بما لديك.»",
          ],
          en: [
            "“Good evening, Mr. Marwan. Confirming our meeting tomorrow at 10:00 at the office; we have forty-five minutes.”",
            "“I will listen to the story from the beginning, then we will agree on the next step.”",
            "“If you have the partnership agreement or any recent correspondence with your partner, please bring it; if not, that is fine — we start with what you have.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«أهلًا. موعدنا غدًا ١٠. الرجاء إحضار كامل مستندات الشركة والسجل التجاري وكشوف الحسابات والمراسلات.»",
              "«لا تقلق، هذه الحالات نتعامل معها كثيرًا وحقّك محفوظ إن شاء الله.»",
            ],
            en: [
              "“Hi. Meeting tomorrow at 10. Please bring all the company documents, the commercial register, bank statements and correspondence.”",
              "“Don’t worry, we handle these cases all the time and your rights are protected, God willing.”",
            ],
          },
          whatIsWrong: {
            ar: "ثلاثة أخطاء محدّدة: قائمة مستندات مفتوحة تُشعر الموكّل بالفشل قبل أن يبدأ ولا تخبره بما هو ضروري فعلًا؛ وجملة «حقّك محفوظ» وعد ضمني بنتيجة قبل معرفة أي واقعة؛ و«هذه الحالات كثيرة» تُلغي خصوصية ملفه فتقلّل استعداده للتفصيل.",
            en: "Three named failures: an open-ended document list that makes the client feel he has failed before starting and never says what is actually essential; “your rights are protected” is an implied guarantee of outcome given before a single fact is known; and “we handle these all the time” erases the specificity of his file, which reduces how much detail he will volunteer.",
          },
        },
      },
      {
        id: "act.cc.01.5",
        kind: "reflection",
        skillId: "skill.meeting-preparation",
        stage: 1,
        grading: "self_report",
        prompt: {
          ar: "استرجع آخر لقاء أول دخلته دون تحضير. ما السؤال الذي اضطررت لطرحه وكان بإمكانك معرفة جوابه قبل دخول الموكّل؟",
          en: "Recall the last first meeting you walked into unprepared. Which question did you have to ask that you could have answered before the client walked in?",
        },
        followUp: {
          ar: "وماذا قرأتَ على وجهه في اللحظة التي طرحت فيها ذلك السؤال؟",
          en: "And what did you read on his face at the moment you asked it?",
        },
      },
    ],
    summaryCard: {
      id: "card.cc.01",
      title: {
        ar: "عشر دقائق قبل الباب",
        en: "Ten Minutes Before the Door",
      },
      whatYouLearned: {
        ar: [
          "التحضير للقاء الأول إجرائي لا بحثي: مَن، لماذا الآن، وما الذي أجهله.",
          "فحص تعارض المصالح لا يُؤجَّل، لأن ما يُسمع لا يمكن إلغاء سماعه.",
          "الدخول باردًا يُخسرك العلاقة قبل أن يُخسرك القضية.",
        ],
        en: [
          "Preparing a first meeting is operational, not research-based: who, why now, and what I do not know.",
          "The conflict check cannot wait, because what is heard cannot be un-heard.",
          "Walking in cold costs you the relationship before it ever costs you the case.",
        ],
      },
      framework: {
        name: {
          ar: "ملفي: مَن؟ · لماذا الآن؟ · الفراغات · ما في يدي",
          en: "MY FILE: Who? · Why Now? · Gaps · In Hand",
        },
        steps: [
          {
            ar: "مَن؟ — الاسم الكامل، الصفة، ومن أحاله إليك.",
            en: "Who? — full name, capacity, and who referred him.",
          },
          {
            ar: "لماذا الآن؟ — الحدث الذي حرّكه هذا الأسبوع وأي مهلة قريبة.",
            en: "Why now? — the event that moved him this week and any near deadline.",
          },
          {
            ar: "الفراغات — ثلاث معلومات لا يجوز أن ينتهي اللقاء بدونها.",
            en: "Gaps — three facts the meeting must not end without.",
          },
          {
            ar: "ما في يدي — ورقة وقلم، هاتف بعيد، مهلة معلنة، وفحص تعارض.",
            en: "In hand — paper and pen, phone away, announced time frame, conflict check.",
          },
        ],
      },
      rememberThis: {
        ar: "الموكّل لا يتذكّر ما عرفتَه من القانون، بل يتذكّر أنك عرفتَ اسمه وسبب مجيئه قبل أن يتكلم.",
        en: "A client does not remember what you knew about the law; he remembers that you knew his name and his reason for coming before he spoke.",
      },
      useItTomorrow: {
        ar: "قبل أول موعد غدًا، اكتب على ورقة واحدة أربعة سطور — مَن، لماذا الآن، ثلاثة فراغات، وما ستجهّزه في الغرفة — وضعها أمامك على الطاولة.",
        en: "Before your first appointment tomorrow, write four lines on one sheet — who, why now, three gaps, and what you will set up in the room — and place it on the table in front of you.",
      },
    },
    targetLevel: 2,
    sourceIds: [
      "src.client-centered-law-firm",
      "src.managing-professional-service-firm",
      "src.legal-project-management",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 02 — Building Trust in the First Five Minutes
  // =========================================================================
  {
    id: "unit.cc.02",
    chapterId: "ch.cc.first-contact",
    order: 2,
    title: {
      ar: "بناء الثقة في الدقائق الخمس الأولى",
      en: "Building Trust in the First Five Minutes",
    },
    subtitle: {
      ar: "الثقة تُبنى بأربع حركات وتُهدم بنظرة واحدة إلى الهاتف",
      en: "Trust is built in four moves and destroyed by one glance at your phone.",
    },
    primarySkillId: "skill.trust-building",
    skillIds: ["skill.trust-building", "skill.active-listening", "skill.avoiding-guarantees"],
    stage: 1,
    estimatedMinutes: 10,
    steps: [
      {
        kind: "hook",
        id: "s.cc.02.hook",
        text: {
          ar: "الموكّل يقرّر خلال خمس دقائق كم سيخبرك. كل ما يأتي بعد ذلك يُبنى على ما قرّره في تلك الدقائق.",
          en: "Within five minutes the client decides how much he will tell you. Everything that follows is built on what he decided in those minutes.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.cc.02.why",
        text: {
          ar: "الموكّل لا يحجب المعلومة عمدًا، بل يتوقّف عن التطوّع بها. والمعلومة التي لا تُقال في اللقاء الأول تظهر عادةً في مذكرة الخصم.",
          en: "A client rarely hides information on purpose; he simply stops volunteering it. And what is not said in the first meeting usually surfaces in the other side’s brief.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.cc.02.goals",
        goals: {
          ar: [
            "أن تفتتح اللقاء بجملة تحدّد الوقت وتمنح الموكّل إذنًا واضحًا بالسرد.",
            "أن تميّز السلوكيات التي تبني الثقة عن تلك التي تهدمها فورًا.",
            "أن تؤجّل التكييف القانوني إلى ما بعد اكتمال الرواية.",
          ],
          en: [
            "Open the meeting with a sentence that sets the time and gives the client clear permission to narrate.",
            "Distinguish behaviours that build trust from those that destroy it instantly.",
            "Defer the legal label until the story is complete.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.cc.02.lesson",
        title: {
          ar: "الثقة إشارات، لا كلمات",
          en: "Trust is signals, not words",
        },
        body: {
          ar: [
            "لا أحد يبني الثقة بقول «ثق بي». تُبنى بإشارات صغيرة يقرأها الموكّل قبل أن ينتبه إليها.",
            "أقوى إشارة إيجابية: أن تفتح موضوعًا واسعًا ثم تصمت. الصمت بعد سؤال مفتوح يقول للموكّل إن الوقت وقته.",
            "وأقوى إشارة سلبية: نظرة واحدة إلى شاشة الهاتف. نظرة واحدة تكفي ليقرأ ترتيب أولوياتك، ولن يصدّق اعتذارك بعدها.",
            "المقاطعة ليست فظاظة دائمًا؛ غالبًا هي حماس مهني. لكن أثرها واحد: الجملة التي قُطعت لا تعود كما كانت.",
            "أخطر ما يقع فيه المحامي المتمرّس هو التكييف المبكر: أن يُطلق وصفًا قانونيًا بعد أربع جمل.",
            "التكييف المبكر يقفل باب المعلومات مرتين: يتوقّف الموكّل عن ذكر ما لا يناسب الوصف، وتتوقّف أنت عن سماعه.",
          ],
          en: [
            "Nobody builds trust by saying “trust me.” It is built through small signals the client reads before he notices them.",
            "The strongest positive signal: open a wide topic, then stop talking. Silence after an open question tells the client the time is his.",
            "The strongest negative signal: one glance at your phone screen. One glance is enough for him to read your priorities, and no apology afterwards will undo it.",
            "Interrupting is not always rudeness; more often it is professional eagerness. The effect is identical: a sentence that was cut never returns the same.",
            "The trap experienced lawyers fall into is the premature label — pronouncing a legal characterisation after four sentences.",
            "A premature label shuts the information door twice: he stops mentioning what does not fit the label, and you stop hearing it.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.cc.02.visual",
        title: {
          ar: "خط الدقائق الخمس الأولى",
          en: "Timeline of the first five minutes",
        },
        variant: "timeline",
        items: [
          {
            label: { ar: "٠:٠٠ — الاستقبال بالاسم", en: "0:00 — Greet by name" },
            detail: {
              ar: "تنهض، تناديه باسمه وصفته، وتذكر من أحاله إن وُجد.",
              en: "Stand, address him by name and title, and mention the referrer if there is one.",
            },
            tone: "positive",
          },
          {
            label: { ar: "٠:٣٠ — إغلاق الشاشات", en: "0:30 — Close the screens" },
            detail: {
              ar: "الهاتف بعيدًا عن اليد وشاشة الحاسوب مغلقة، أمامه لا بعد خروجه.",
              en: "Phone out of reach, laptop lid down — in front of him, not after he leaves.",
            },
            tone: "positive",
          },
          {
            label: { ar: "١:٠٠ — إعلان الإطار", en: "1:00 — Announce the frame" },
            detail: {
              ar: "«أمامنا أربعون دقيقة، أريد أن أسمع القصة من أولها ثم أسأل.»",
              en: "“We have forty minutes; I want to hear the story from the start, then I will ask.”",
            },
            tone: "positive",
          },
          {
            label: { ar: "١:٣٠ — سؤال واسع ثم صمت", en: "1:30 — Wide question, then silence" },
            detail: {
              ar: "سؤال واحد مفتوح، ثم لا تتكلم حتى يتوقّف هو، لا حتى تتوقّف أنت عن التفكير.",
              en: "One open question, then no speaking until he stops — not until you stop thinking.",
            },
            tone: "positive",
          },
          {
            label: { ar: "٣:٠٠ — نقطة الانهيار", en: "3:00 — The collapse point" },
            detail: {
              ar: "هنا يقاطع أغلب المحامين بتكييف قانوني. هنا بالضبط يتوقّف الموكّل عن التطوّع بالتفاصيل.",
              en: "This is where most lawyers cut in with a legal label. This is exactly where the client stops volunteering detail.",
            },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.cc.02.worked",
        strong: {
          label: {
            ar: "الدقيقة الأولى — نسخة تبني الثقة",
            en: "Minute one — the version that builds trust",
          },
          text: {
            ar: [
              "«أهلًا أستاذ نبيل، تفضّل. اسمح لي لحظة» — تُبعد الهاتف عن الطاولة وتغلق الحاسوب.",
              "«أمامنا أربعون دقيقة كاملة، وأنا لن أُقاطعك.»",
              "«فهمت من الاستقبال أن هناك مستحقات لدى شركة تطوير. لا أريد أن أبدأ من المستندات؛ أريد أن أسمع القصة من أولها بلغتك أنت.»",
            ],
            en: [
              "“Welcome, Mr. Nabil, please sit. One second—” you move the phone off the table and close the laptop.",
              "“We have a full forty minutes, and I will not interrupt you.”",
              "“I understand from reception that there are amounts owed by a development company. I don’t want to start from documents; I want to hear the story from the beginning, in your own words.”",
            ],
          },
          why: {
            ar: "إبعاد الهاتف أمامه فعل مرئي لا وعد. جملة «لن أُقاطعك» تُنشئ التزامًا يراقبه هو، وقول «بلغتك أنت» يرفع عنه عبء الصياغة القانونية التي يخاف أن يخطئ فيها — فيروي بحرية، وبالتفاصيل التي تحتاجها فعلًا.",
            en: "Moving the phone in front of him is a visible act, not a promise. “I will not interrupt you” creates a commitment he can hold you to, and “in your own words” lifts the burden of legal phrasing he is afraid of getting wrong — so he narrates freely, with the details you actually need.",
          },
        },
        weak: {
          label: {
            ar: "الدقيقة الأولى — نسخة تهدم الثقة",
            en: "Minute one — the version that destroys trust",
          },
          text: {
            ar: [
              "«تفضّل تفضّل… ثانية واحدة» — تكمل رسالة على الهاتف — «نعم، معك.»",
              "«طيب، مستحقات مقاولة. عندك عقد مكتوب أم لا؟»",
              "«إن كان عندك عقد فالموضوع بسيط: إنذار عدلي ثم دعوى. أكمل.»",
            ],
            en: [
              "“Come in, come in… one second—” you finish a message on your phone — “yes, go ahead.”",
              "“Right, contractor’s dues. Do you have a written contract or not?”",
              "“If you have a contract this is simple: a formal notice, then a claim. Go on.”",
            ],
          },
          why: {
            ar: "الرسالة على الهاتف تُخبره أن هناك من هو أهم منه. ثم يبدأ اللقاء من المستند لا من الإنسان، فيتحوّل إلى استجواب. وحين يُعلن الحل بعد جملتين يفقد الموكّل حافزه للسرد: ما دام المحامي عرف الجواب، فلماذا يُتعب نفسه بالتفاصيل؟ والتفاصيل هي القضية.",
            en: "The message tells him someone else matters more. Then the meeting starts from the document rather than the person, which turns it into an interrogation. And once the solution is announced after two sentences, he loses any reason to narrate: if the lawyer already knows the answer, why bother with detail? The detail is the case.",
          },
        },
      },
      { kind: "activity", id: "s.cc.02.a1", activityId: "act.cc.02.1", mode: "quick" },
      { kind: "activity", id: "s.cc.02.a2", activityId: "act.cc.02.2", mode: "guided" },
      { kind: "activity", id: "s.cc.02.a3", activityId: "act.cc.02.3", mode: "guided" },
      { kind: "activity", id: "s.cc.02.a4", activityId: "act.cc.02.4", mode: "independent" },
      { kind: "activity", id: "s.cc.02.a5", activityId: "act.cc.02.5", mode: "independent" },
      { kind: "summary", id: "s.cc.02.summary", summaryCardId: "card.cc.02" },
      {
        kind: "apply_tomorrow",
        id: "s.cc.02.apply",
        task: {
          ar: "في أول لقاء غدًا، ضع هاتفك في درج المكتب أمام الموكّل، ثم قل له كم دقيقة أمامكما قبل أن تسأل أي سؤال.",
          en: "In tomorrow’s first meeting, put your phone in the desk drawer in front of the client, then tell him how many minutes you have — before you ask any question.",
        },
        detail: {
          ar: "ثم اطرح سؤالًا واسعًا واحدًا واصمت حتى يتوقّف هو. عُدّ في سرّك كم مرة اشتهيت المقاطعة، واكتب الرقم بعد اللقاء.",
          en: "Then ask one wide question and stay silent until he stops. Count privately how many times you wanted to interrupt, and write the number down afterwards.",
        },
      },
      {
        kind: "next_mission",
        id: "s.cc.02.next",
        teaser: {
          ar: "أغلقتَ الهاتف وفتحتَ الباب للرواية. لكن ماذا تفعل حين يبدأ عقلك بالتشخيص في الجملة الثالثة؟ الوحدة القادمة: الإصغاء دون حلّ، وبوابة الثواني الثلاث — مع موكّلة أُنهيت خدماتها بعد سبع سنوات.",
          en: "You closed the phone and opened the door to the story. But what do you do when your mind starts diagnosing at sentence three? Next unit: listening without solving, and the three-second gate — with a client dismissed after seven years.",
        },
      },
    ],
    activities: [
      {
        id: "act.cc.02.1",
        kind: "swipe_classify",
        skillId: "skill.trust-building",
        stage: 1,
        prompt: {
          ar: "اسحب كل سلوك إلى خانته: هل يبني الثقة أم يهدمها فورًا؟",
          en: "Swipe each behaviour into place: does it build trust or destroy it instantly?",
        },
        accessibleAlternative: {
          ar: "استخدم زرَّي «يبني» و«يهدم» أسفل كل بطاقة بدل السحب.",
          en: "Use the “Builds” and “Destroys” buttons under each card instead of swiping.",
        },
        buckets: [
          { id: "builds", label: { ar: "يبني الثقة", en: "Builds trust" } },
          { id: "breaks", label: { ar: "يهدمها فورًا", en: "Destroys it instantly" } },
        ],
        items: [
          {
            id: "t1",
            label: {
              ar: "تنهض عند دخوله وتناديه باسمه وصفته المهنية.",
              en: "You stand when he enters and address him by name and professional title.",
            },
            bucketId: "builds",
            rationale: {
              ar: "الوقوف والاسم يقولان إنك تعرف مَن أمامك. في السوق العربي تحديدًا، الصفة المهنية جزء من الاحترام لا زينة لغوية.",
              en: "Standing and using his name say that you know who is in front of you. In the Arab market particularly, the professional title is part of the respect, not linguistic decoration.",
            },
          },
          {
            id: "t2",
            label: {
              ar: "تنظر إلى شاشة هاتفك مرة واحدة «سريعًا» أثناء كلامه.",
              en: "You glance “quickly” at your phone screen once while he is talking.",
            },
            bucketId: "breaks",
            rationale: {
              ar: "نظرة واحدة تكفي ليقرأ ترتيب أولوياتك. والأسوأ أنه لن يقولها لك، بل سيختصر روايته — وأنت تظن أنه أنهى كلامه.",
              en: "One glance is enough for him to read your priority order. Worse, he will not say so — he will simply shorten his story, and you will think he finished.",
            },
          },
          {
            id: "t3",
            label: {
              ar: "تقول في الدقيقة الأولى: «هذه على الأرجح إثراء بلا سبب.»",
              en: "You say in the first minute: “This is most likely unjust enrichment.”",
            },
            bucketId: "breaks",
            rationale: {
              ar: "تكييف قبل الوقائع. يتوقّف الموكّل عن ذكر ما لا يناسب الوصف، ويصعب عليك التراجع لاحقًا دون أن تبدو مترددًا.",
              en: "A label before the facts. He stops mentioning whatever does not fit the label, and retracting it later makes you look uncertain.",
            },
          },
          {
            id: "t4",
            label: {
              ar: "«أمامنا أربعون دقيقة، وأريد أن أسمع القصة من أولها بلغتك.»",
              en: "“We have forty minutes, and I want to hear the story from the beginning, in your own words.”",
            },
            bucketId: "builds",
            rationale: {
              ar: "جملتان في واحدة: إطار زمني يريحه من مراقبة الساعة، وإذن صريح بالسرد يرفع عنه خوف الصياغة القانونية الخاطئة.",
              en: "Two things at once: a time frame that frees him from watching the clock, and explicit permission to narrate, which lifts his fear of using the wrong legal phrasing.",
            },
          },
          {
            id: "t5",
            label: {
              ar: "تقاطعه بعد جملتين لتسأل عن تاريخ توقيع العقد.",
              en: "You cut in after two sentences to ask when the contract was signed.",
            },
            bucketId: "breaks",
            rationale: {
              ar: "السؤال صحيح وتوقيته خاطئ. التاريخ لن يهرب، أما تسلسل الرواية فيهرب: بعد المقاطعة يعود الموكّل إلى نقطة أخرى ويترك ما كان سيقوله.",
              en: "Right question, wrong moment. The date will not run away; the thread of the story will. After an interruption the client restarts somewhere else and drops what he was about to say.",
            },
          },
          {
            id: "t6",
            label: {
              ar: "تدوّن ملاحظة قصيرة ثم ترفع نظرك إليه وتكمل الإصغاء.",
              en: "You jot a short note, then lift your eyes back to him and keep listening.",
            },
            bucketId: "builds",
            rationale: {
              ar: "التدوين القصير يُظهر أن كلامه يستحق التسجيل؛ ورفع النظر بعده مباشرةً يمنع أن يتحوّل الدفتر إلى جدار بينكما.",
              en: "A brief note shows his words are worth recording; lifting your eyes straight afterwards stops the notebook from becoming a wall between you.",
            },
          },
        ],
      },
      {
        id: "act.cc.02.2",
        kind: "best_response",
        skillId: "skill.trust-building",
        secondarySkillIds: ["skill.active-listening"],
        stage: 1,
        context: {
          ar: [
            "السيد نبيل عبد الهادي، مقاول، يجلس ممسكًا بملف بشدّة، ملامحه متوتّرة.",
            "أول ما قاله: «والله يا أستاذ تعبت. صار لي سنة أركض وراهم.»",
          ],
          en: [
            "Mr. Nabil Abdulhadi, a contractor, sits gripping a folder tightly, visibly tense.",
            "His first words: “Honestly, I’m exhausted. I’ve been chasing them for a year.”",
          ],
        },
        prompt: {
          ar: "ما أفضل ردّ في هذه اللحظة بالذات؟",
          en: "What is the best response at this precise moment?",
        },
        hint: {
          ar: "لم يقل لك واقعة بعد؛ قال لك حالته. الردّ الذي يقفز إلى الوقائع أو إلى الحلّ يتجاوز ما قاله فعلًا.",
          en: "He has not given you a fact yet; he has given you his state. Any reply that jumps to the facts or to the remedy steps over what he actually said.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«طيب، عندك عقد مكتوب أم لا؟»",
              en: "“Right — do you have a written contract or not?”",
            },
            rationale: {
              ar: "تبدأ من المستند قبل الإنسان، فيتعلّم الموكّل خلال ثانيتين أن هذا استجواب. سيجيب بنعم أو لا، وسيتوقّف عن التطوّع بالسياق الذي كان سيكشف لك أين ضاعت السنة.",
              en: "You start from the document rather than the person, and within two seconds he learns this is an interrogation. He will answer yes or no and stop volunteering the context that would have shown you where the year went.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«أفهم عليك. هذه الحالات كثيرة وعادةً تنتهي بمصالحة.»",
              en: "“I understand. These cases are common and usually end in a settlement.”",
            },
            rationale: {
              ar: "ثلاثة أخطاء في جملة: تعميم يُلغي خصوصية ملفه، وتطمين قبل معرفة أي واقعة، ووعد ضمني بنتيجة قد لا تتحقق — وهو وعد سيُذكّرك به بعد ستة أشهر.",
              en: "Three errors in one line: a generalisation that erases the specificity of his file, reassurance before a single fact is known, and an implied promise of an outcome that may not materialise — one he will quote back to you in six months.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«يبدو أن السنة كانت طويلة عليك. خذ وقتك واحكِ لي من البداية: متى بدأت القصة؟»",
              en: "“It sounds like it has been a long year. Take your time and tell me from the beginning: when did this start?”",
            },
            correct: true,
            rationale: {
              ar: "تعترف بما قاله فعلًا («تعبت»، «سنة») دون مبالغة عاطفية، ثم تُعيد التوجيه إلى الزمن — وهو مدخل يُنتج سردًا مرتّبًا. لم تَعِد بشيء ولم تُشخّص، وتركتَ الكلام له.",
              en: "You acknowledge exactly what he said (“exhausted”, “a year”) without emotional excess, then redirect to chronology — an entry point that produces an ordered narrative. You promised nothing, diagnosed nothing, and left the floor to him.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«قبل أن نبدأ، دعني أشرح لك آلية عمل المكتب وأتعابنا.»",
              en: "“Before we start, let me explain how the firm works and our fees.”",
            },
            rationale: {
              ar: "حديث الأتعاب ضروري ولا يجوز إهماله — لكن ليس كردّ على جملة ألم. الافتتاح بالمال يقول للموكّل إن قصته بند لاحق على جدول الأعمال.",
              en: "The fee conversation is essential and must not be skipped — but not as a reply to a statement of distress. Opening with money tells the client his story is a later item on the agenda.",
            },
          },
        ],
      },
      {
        id: "act.cc.02.3",
        kind: "find_mistake",
        skillId: "skill.trust-building",
        secondarySkillIds: ["skill.active-listening", "skill.meeting-preparation"],
        stage: 1,
        context: {
          ar: [
            "المحامي: «تفضّل، تفضّل… ثانية واحدة فقط» (يُنهي رسالة على هاتفه) «نعم، معك.»",
            "الموكّل: «صار لي سنة أطالب بمستحقاتي عن أعمال أنجزتها في مشروع سكني…»",
            "المحامي: «اسمك نبيل، صح؟ ذكّرني، أنت المقاول الرئيسي أم مقاول باطن؟»",
            "الموكّل: «مقاول باطن… والعقد كان—»",
            "المحامي: «واضح. هذه مطالبة بمستحقات مقاولة. نبدأ بإنذار عدلي.»",
          ],
          en: [
            "Lawyer: “Come in, come in… just one second” (finishes a message on his phone) “Yes, go ahead.”",
            "Client: “For a year now I’ve been claiming dues for work I completed on a residential project…”",
            "Lawyer: “Your name is Nabil, right? Remind me — are you the main contractor or a subcontractor?”",
            "Client: “Subcontractor… and the contract was—”",
            "Lawyer: “Clear. This is a contractor’s dues claim. We start with a formal notice.”",
          ],
        },
        prompt: {
          ar: "كل ما فعله المحامي فيه خلل، لكن حركة واحدة كلّفته أكثر من غيرها. أيها؟",
          en: "Everything the lawyer did was flawed, but one move cost him more than the rest. Which one?",
        },
        hint: {
          ar: "ثلاثة من هذه الأخطاء تُكلّف هيبةً أو لياقة، وواحد يُتلف معلومة لن تعود. ابحث عن الجملة التي قُطعت.",
          en: "Three of these cost standing or courtesy; one destroys information that will not come back. Look for the sentence that was cut off.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "إنهاء الرسالة على الهاتف أمام الموكّل.",
              en: "Finishing the phone message in front of the client.",
            },
            rationale: {
              ar: "ضرر حقيقي: يقول للموكّل إن هناك من هو أهم. لكنه ضرر قابل للإصلاح باعتذار صريح وإبعاد الهاتف، ولا يُفقد معلومة.",
              en: "Real damage: it tells the client someone else matters more. But it is repairable with an explicit apology and putting the phone away, and it destroys no information.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "السؤال عن اسمه وصفته التعاقدية.",
              en: "Asking for his name and contractual capacity.",
            },
            rationale: {
              ar: "يكشف أن الملف لم يُقرأ، وهو خلل تحضير مكلف للعلاقة. ومع ذلك تبقى المعلومة متاحة والسؤال مشروع — الخسارة هنا في الهيبة لا في الملف.",
              en: "It exposes that the file was not read — a preparation failure that costs the relationship. Still, the information remains available and the question is legitimate: the loss is in standing, not in the file.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "إعلان التكييف والحل («مطالبة مستحقات… إنذار عدلي») بعد أربع جمل.",
              en: "Announcing the label and the remedy (“a dues claim… a formal notice”) after four sentences.",
            },
            correct: true,
            rationale: {
              ar: "أوقف الرواية عند سطرها الأول. الموكّل كان يقول «والعقد كان—» وربما كان سيقول إنه لم يُوقّع عقدًا، أو أن الأعمال زادت بأمر شفهي. بعد الإعلان لن يتطوّع بما يناقض تشخيص محاميه، والمحامي التزم علنًا بمسار قد يضطر للتراجع عنه.",
              en: "It stopped the story at line one. The client was saying “and the contract was—”; he may have been about to say there was no signed contract, or that the works were expanded on a verbal instruction. After the announcement he will not volunteer anything that contradicts his lawyer’s diagnosis, and the lawyer has publicly committed to a route he may have to retract.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "عدم عرض الماء أو القهوة قبل البدء.",
              en: "Not offering water or coffee before starting.",
            },
            rationale: {
              ar: "الضيافة مهمة ثقافيًا وتُلاحَظ، لكنها ليست ما يهدم الثقة المهنية. لا تخلط اللياقة بالإصغاء: موكّل شرب القهوة ولم يُسمَع يخرج أسوأ من موكّل لم يشرب وسُمِع.",
              en: "Hospitality matters culturally and is noticed, but it is not what destroys professional trust. Do not confuse courtesy with listening: a client who was served coffee and not heard leaves worse off than one who was heard and served nothing.",
            },
          },
        ],
      },
      {
        id: "act.cc.02.4",
        kind: "short_written",
        skillId: "skill.trust-building",
        secondarySkillIds: ["skill.avoiding-guarantees"],
        stage: 1,
        grading: "ai_rubric",
        rubricId: "rubric.client-response.v1",
        weight: 2,
        minChars: 240,
        context: {
          ar: [
            "أعد كتابة الافتتاح الفاشل الذي قرأته للتوّ.",
            "الموكّل نفسه، اللحظة نفسها: جلس، متوتّر، ولم تتبادلا بعد أي كلمة جوهرية.",
          ],
          en: [
            "Rewrite the failed opening you just read.",
            "Same client, same moment: he has sat down, he is tense, and nothing substantive has been said yet.",
          ],
        },
        prompt: {
          ar: "اكتب أول أربعين ثانية كما ستقولها فعلًا: ما الذي تفعله بيديك، وما الجمل التي تنطقها، وبأي سؤال تنتهي؟",
          en: "Write the first forty seconds exactly as you would say them: what you do with your hands, the sentences you speak, and the question you end on.",
        },
        modelAnswer: {
          ar: [
            "(أُبعد الهاتف إلى الدرج وأُغلق الحاسوب أمامه.) «أهلًا أستاذ نبيل، تفضّل.»",
            "«أعتذر عن الانشغال قبل قليل — الهاتف بعيد الآن، وأمامنا أربعون دقيقة كاملة لك وحدك.»",
            "«قرأت أن الموضوع مستحقات في مشروع سكني، لكني لا أريد أن أبدأ من الأوراق.»",
            "«احكِ لي من البداية بلغتك أنت: متى دخلت هذا المشروع، وكيف وصلت الأمور إلى هنا؟»",
          ],
          en: [
            "(I put the phone in the drawer and close the laptop in front of him.) “Welcome, Mr. Nabil, please sit.”",
            "“I apologise for being distracted a moment ago — the phone is away now, and we have a full forty minutes that are yours alone.”",
            "“I read that this concerns dues on a residential project, but I don’t want to start from the paperwork.”",
            "“Tell me from the beginning, in your own words: when did you come onto this project, and how did things get here?”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«أهلًا وسهلًا، بيتك ومكتبك. لا تشيل همّ أبدًا، نحن معك حتى النهاية وإن شاء الله ناخذ حقّك.»",
              "«المهم، احكِ لي كل شيء بالتفصيل الممل ولا تترك شاردة ولا واردة، وأنا سأتصرّف.»",
            ],
            en: [
              "“You’re most welcome, consider this your home. Don’t worry at all — we’re with you to the end and God willing we’ll get you your rights.”",
              "“Anyway, tell me everything in exhaustive detail, don’t leave anything out, and I’ll take care of it.”",
            ],
          },
          whatIsWrong: {
            ar: "الدفء موجود والمهنية غائبة. «ناخذ حقّك» وعد بنتيجة قبل معرفة واقعة واحدة، و«نحن معك حتى النهاية» التزام مفتوح بلا نطاق عمل ولا أتعاب. أما «كل شيء بالتفصيل الممل» فهو تفويض بلا إطار زمني: يترك الموكّل تائهًا بلا نقطة بداية، فيبدأ من الوسط أو من شكواه العاطفية. ولا توجد أي حركة مادية تُثبت الانتباه — لا هاتف أُبعد ولا شاشة أُغلقت.",
            en: "Warm, but not professional. “We’ll get you your rights” promises an outcome before a single fact is known, and “we’re with you to the end” is an open-ended commitment with no scope and no fee terms. “Everything in exhaustive detail” is a delegation with no frame: the client is left with no starting point, so he begins in the middle or with his grievance. And there is no physical act demonstrating attention — no phone put away, no screen closed.",
          },
        },
      },
      {
        id: "act.cc.02.5",
        kind: "reflection",
        skillId: "skill.trust-building",
        stage: 1,
        grading: "self_report",
        prompt: {
          ar: "متى كنتَ أنت الطرف الذي يجلس أمام مهني مشغول — طبيب أو مصرفي أو محامٍ — ونظر إلى شاشته أثناء كلامك؟ ماذا قرّرتَ في تلك اللحظة؟",
          en: "When were you the one sitting across from a distracted professional — a doctor, a banker, a lawyer — who looked at a screen while you spoke? What did you decide in that moment?",
        },
        followUp: {
          ar: "وهل أخبرته؟ أم اختصرتَ كلامك وخرجتَ ولم تعد؟",
          en: "Did you tell him? Or did you shorten what you were saying, leave, and never go back?",
        },
      },
    ],
    summaryCard: {
      id: "card.cc.02",
      title: {
        ar: "أربع حركات قبل أول سؤال",
        en: "Four Moves Before Your First Question",
      },
      whatYouLearned: {
        ar: [
          "الثقة تُقرأ من إشارات صغيرة، لا من عبارات ترحيب.",
          "نظرة واحدة إلى الهاتف تُقلّص ما سيقوله الموكّل لبقية اللقاء.",
          "التكييف القانوني المبكر يقفل باب المعلومات على الطرفين معًا.",
        ],
        en: [
          "Trust is read from small signals, not from welcoming phrases.",
          "One glance at the phone shrinks what the client will say for the rest of the meeting.",
          "A premature legal label shuts the information door on both of you at once.",
        ],
      },
      framework: {
        name: {
          ar: "أربع حركات: سَمِّ · أَغلِق · افتح · أعِد",
          en: "Four Moves: Name · Close · Open · Echo",
        },
        steps: [
          {
            ar: "سَمِّ — نادِه باسمه وصفته، واذكر من أحاله إن وُجد.",
            en: "Name — address him by name and title, and mention the referrer if there is one.",
          },
          {
            ar: "أَغلِق — أبعِد الهاتف وأغلق الشاشة أمامه، لا بعد خروجه.",
            en: "Close — put the phone away and shut the screen in front of him, not after he leaves.",
          },
          {
            ar: "افتح — أعلن المهلة، اطرح سؤالًا واسعًا واحدًا، ثم اصمت.",
            en: "Open — announce the time frame, ask one wide question, then stop talking.",
          },
          {
            ar: "أعِد — أعِد جملة واحدة من كلامه قبل أن تسأل سؤالك التالي.",
            en: "Echo — repeat one sentence of his back to him before you ask your next question.",
          },
        ],
      },
      rememberThis: {
        ar: "لن يقول لك الموكّل إنك خسرت ثقته؛ سيختصر روايته فقط، وستظن أنه انتهى.",
        en: "A client will never tell you that you lost his trust; he will just shorten his story, and you will think he finished.",
      },
      useItTomorrow: {
        ar: "في لقاء الغد، ضع الهاتف في الدرج أمام الموكّل، أعلن عدد الدقائق المتاحة، ثم اطرح سؤالًا واحدًا واصمت حتى يتوقّف هو.",
        en: "In tomorrow’s meeting, put your phone in the drawer in front of the client, announce how many minutes you have, then ask one question and stay silent until he stops.",
      },
    },
    targetLevel: 2,
    sourceIds: [
      "src.client-centered-law-firm",
      "src.selling-the-invisible",
      "src.your-brain-at-work",
      "src.68-power-moves",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 03 — Listening Without Diagnosing Too Early
  // =========================================================================
  {
    id: "unit.cc.03",
    chapterId: "ch.cc.first-contact",
    order: 3,
    title: {
      ar: "الإصغاء قبل التشخيص",
      en: "Listening Without Diagnosing Too Early",
    },
    subtitle: {
      ar: "عقلك يبلغ التكييف بعد ثلاث جمل؛ فمك عليه أن ينتظر عشرًا.",
      en: "Your mind reaches the legal label after three sentences; your mouth has to wait for ten.",
    },
    primarySkillId: "skill.active-listening",
    skillIds: ["skill.active-listening", "skill.trust-building", "skill.avoiding-guarantees"],
    stage: 2,
    estimatedMinutes: 10,
    steps: [
      {
        kind: "hook",
        id: "s.cc.03.hook",
        text: {
          ar: "«سبع سنوات… ثم قالوا لي إن مركزي أُلغي.» ثم سكتت. أول كلمة تنطقها الآن تحدّد كم ستعرف من هذا الملف كلّه.",
          en: "“Seven years… then they told me my position had been eliminated.” Then she stopped. The first word you say now decides how much of this whole file you will ever learn.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.cc.03.why",
        text: {
          ar: "الوقائع التي تقرّر الملف نادرًا ما تصل في الدقائق الأولى. تصل بعد أن يقتنع الموكّل بأنك تسمعه، لا بأنك تصنّفه.",
          en: "The facts that decide a matter rarely arrive in the first minutes. They arrive once the client is satisfied that you are listening to them, not classifying them.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.cc.03.goals",
        goals: {
          ar: [
            "أن تفصل بين ما قاله الموكّل فعلًا وبين ما استنتجتَه أنت عنه.",
            "أن تستعمل الصمت وإعادة الصياغة بدل الانتقال المباشر إلى سؤالك التالي.",
            "أن تؤجّل كل وصف قانوني إلى ما بعد اكتمال الرواية وتسمية المستندات.",
          ],
          en: [
            "Separate what the client actually said from what you inferred about it.",
            "Use silence and paraphrase instead of moving straight to your next question.",
            "Hold back every legal label until the story is complete and the documents are named.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.cc.03.lesson",
        title: {
          ar: "التشخيص غريزة، لا قرار",
          en: "Diagnosis is a reflex, not a decision",
        },
        body: {
          ar: [
            "بعد ثلاث جمل يكون عقلك قد اختار تكييفًا. هذه ليست خبرة سيّئة؛ هذه طريقة عمل دماغ مدرَّب.",
            "المشكلة ليست أن تُشخّص، بل أن تنطق التشخيص. المنطوق يتحوّل إلى سؤال، والسؤال يوجّه الرواية.",
            "من اللحظة التي تسأل فيها «هل الفصل تعسّفي؟» يبدأ الموكّل بترتيب وقائعه لتناسب هذا العنوان.",
            "استعمل الثواني الثلاث: لا تملأ الصمت الذي يعقب جملة ثقيلة. الصمت يشتري لك جملة ثانية لم تكن ستُقال.",
            "ثم أعِد الكلام بكلماته هو لا بكلماتك: «مركزك أُلغي» أدقّ وأنفع من «أُنهيت خدماتك لإعادة هيكلة».",
            "والتعاطف ليس تطمينًا. «أفهم ما مررتِ به» شيء، و«لا تقلقي، القانون معك» شيء آخر اسمه وعد بنتيجة.",
          ],
          en: [
            "After three sentences your mind has already picked a label. That is not bad instinct; it is how a trained brain works.",
            "The problem is not diagnosing. It is saying the diagnosis out loud. Spoken, it becomes a question, and the question steers the story.",
            "The moment you ask “was the dismissal arbitrary?”, the client starts arranging her facts to fit that heading.",
            "Use the three seconds: do not fill the silence that follows a heavy sentence. Silence buys you a second sentence that was never going to be said.",
            "Then echo her words rather than yours: “your position was eliminated” is more accurate and more useful than “your services were terminated for restructuring”.",
            "And empathy is not reassurance. “I understand what you went through” is one thing; “don’t worry, the law is on your side” is a promise of an outcome.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.cc.03.visual",
        title: {
          ar: "مقياس: ماذا يفعل ردّك بالرواية؟",
          en: "A scale: what your reply does to the story",
        },
        variant: "scale",
        items: [
          {
            label: { ar: "صمت ثلاث ثوانٍ", en: "Three seconds of silence" },
            detail: {
              ar: "لا يضيف شيئًا، ويفتح أكثر مما يفتحه أي ردّ: يكمل الموكّل من تلقاء نفسه.",
              en: "Adds nothing, and opens more than any reply can: the client carries on unprompted.",
            },
            tone: "positive",
          },
          {
            label: { ar: "إعادة الصياغة بكلماته", en: "Echo in the client’s own words" },
            detail: {
              ar: "تُثبت الإصغاء وتختبر فهمك، دون أن تدفع الرواية نحو أي عنوان.",
              en: "Proves you listened and tests your understanding without pushing the story toward a heading.",
            },
            tone: "positive",
          },
          {
            label: { ar: "سؤال متابعة مفتوح", en: "An open follow-up question" },
            detail: {
              ar: "«وماذا حدث بعد ذلك؟» يوسّع دون أن يفرض، ويُبقي الدفّة في يد الموكّل.",
              en: "“And what happened after that?” widens without imposing, and leaves the wheel in the client’s hands.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "سؤال مغلق مبكر", en: "An early closed question" },
            detail: {
              ar: "«هل عندك إنذار خطي؟» يوقف السرد ويحوّله إلى نعم أو لا، ويأخذ منك السياق.",
              en: "“Do you have a written warning?” stops the narrative, reduces it to yes or no, and costs you the context.",
            },
            tone: "negative",
          },
          {
            label: { ar: "تكييف قانوني منطوق", en: "A spoken legal label" },
            detail: {
              ar: "«إذًا هذا فصل تعسّفي» يُغلق كل ما لا يناسبه، ويُلزمك بمسار قبل رؤية ورقة واحدة.",
              en: "“So this is an arbitrary dismissal” closes off everything that does not fit, and commits you to a route before you have seen a single page.",
            },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.cc.03.worked",
        strong: {
          label: {
            ar: "اللحظة نفسها — الردّ الذي يفتح الجملة الثانية",
            en: "The same moment — the reply that opens the second sentence",
          },
          text: {
            ar: [
              "(صمت ثلاث ثوانٍ. لا تكتب، ولا تنظر إلى الورقة أمامك.)",
              "«سبع سنوات… ومركزك أُلغي.»",
              "«خذي وقتك. متى بدأتِ تشعرين أن شيئًا يتغيّر في العمل؟»",
            ],
            en: [
              "(Three seconds of silence. No writing, no looking down at the page.)",
              "“Seven years… and your position was eliminated.”",
              "“Take your time. When did you first feel that something was changing at work?”",
            ],
          },
          why: {
            ar: "الصمت هنا ليس فراغًا بل دعوة. وإعادة جملتها بكلماتها هي («مركزي أُلغي») تُثبت الإصغاء دون أن تضيف وصفًا. أما السؤال الأخير فيعيدها إلى الزمن لا إلى الحكم، فتروي التسلسل الذي يحمل الوقائع الحاسمة: متى بدأت الإشارات، ومن أطلقها، وبأي صيغة.",
            en: "The silence here is not emptiness but an invitation. Echoing her own phrase (“my position was eliminated”) proves you listened without adding a characterisation. The closing question returns her to chronology rather than judgement, so she narrates the sequence that carries the decisive facts: when the signals started, who gave them, and in what words.",
          },
        },
        weak: {
          label: {
            ar: "اللحظة نفسها — الردّ الذي يبدو محترفًا ويُقفل الملف",
            en: "The same moment — the reply that sounds professional and closes the file",
          },
          text: {
            ar: [
              "«سبع سنوات؟ ممتاز. إذًا نحن أمام فصل تعسّفي على الأرجح.»",
              "«هل تسلّمتِ إشعارًا خطيًّا؟ وهل دُفع لك بدل الإنذار؟»",
              "«لا تقلقي، حقّك في التعويض محفوظ ونحسبه بسهولة.»",
            ],
            en: [
              "“Seven years? Excellent. So we are most likely looking at an arbitrary dismissal.”",
              "“Did you receive written notice? And were you paid in lieu of notice?”",
              "“Don’t worry, your right to compensation is protected and easy to calculate.”",
            ],
          },
          why: {
            ar: "ثلاث حركات، ولكلٍّ منها ثمن. «فصل تعسّفي» عنوان يجعل الموكّلة تحذف كل ما لا يناسبه — كعرض استقالة كادت توقّعه قبل شهر. والسؤال المزدوج المغلق يحوّل اللقاء إلى استمارة تُجاب بنصفها. و«حقّك محفوظ» وعد بنتيجة قبل قراءة عقد أو إشعار، وستُذكَّر به عند أول حديث عن تسوية.",
            en: "Three moves, each with a price. “Arbitrary dismissal” is a heading that makes her delete everything that does not fit it — such as the resignation offer she nearly signed a month ago. The double closed question turns the meeting into a form that gets answered by half. And “your right is protected” promises an outcome before any contract or notice has been read — and she will quote it back at the first mention of a settlement.",
          },
        },
      },
      { kind: "activity", id: "s.cc.03.a1", activityId: "act.cc.03.1", mode: "quick" },
      { kind: "activity", id: "s.cc.03.a2", activityId: "act.cc.03.2", mode: "guided" },
      { kind: "activity", id: "s.cc.03.a3", activityId: "act.cc.03.3", mode: "guided" },
      { kind: "activity", id: "s.cc.03.a4", activityId: "act.cc.03.4", mode: "independent" },
      { kind: "activity", id: "s.cc.03.a5", activityId: "act.cc.03.5", mode: "independent" },
      { kind: "summary", id: "s.cc.03.summary", summaryCardId: "card.cc.03" },
      {
        kind: "apply_tomorrow",
        id: "s.cc.03.apply",
        task: {
          ar: "في لقاء الغد، بعد أول جملة ثقيلة يقولها الموكّل، عُدّ إلى ثلاثة في سرّك قبل أن تنطق بحرف.",
          en: "In tomorrow’s meeting, after the client’s first heavy sentence, count silently to three before you say a word.",
        },
        detail: {
          ar: "ثم افتتح ردّك بأربع كلمات من كلامه هو، لا بكلماتك. سجّل بعد اللقاء: هل أضاف شيئًا لم يكن سيقوله؟",
          en: "Then open your reply with four of his own words rather than yours. Note afterwards: did he add something he was not going to say?",
        },
      },
      {
        kind: "next_mission",
        id: "s.cc.03.next",
        teaser: {
          ar: "أنصتَّ حتى اكتملت الرواية. الآن جاء دور السؤال — وهو الأداة الوحيدة التي تغيّر ما تعرفه. الوحدة القادمة: كيف تُبنى الأسئلة من المفتوح إلى المؤكَّد، ثم لقاء محاكاة كامل مع موكّل تسلّم إنذار إخلاء.",
          en: "You listened until the story was complete. Now comes the question — the only tool that changes what you know. Next unit: building questions from open to confirmed, then a full simulated meeting with a client served a notice to vacate.",
        },
      },
    ],
    activities: [
      {
        id: "act.cc.03.1",
        kind: "multiple_choice",
        skillId: "skill.active-listening",
        stage: 2,
        context: {
          ar: [
            "الموكّلة ليلى المنصوري، مديرة مشتريات سابقة في شركة الأفق للخدمات اللوجستية.",
            "الموكّلة: «كنت أدير قسم المشتريات. في آذار بدأوا يسحبون مني الصلاحيات واحدة تلو الأخرى…»",
            "المحامي: «إذًا هناك تدرّج في التضييق. هذا يخدمنا كثيرًا في إثبات التعسّف.»",
          ],
          en: [
            "The client is Layla Al-Mansouri, former purchasing manager at Al-Ufuq Logistics Services.",
            "Client: “I was running the purchasing department. In March they started stripping my authorities one after another…”",
            "Lawyer: “So there is a gradual squeeze. That helps us a great deal in proving it was arbitrary.”",
          ],
        },
        prompt: {
          ar: "ما الأثر الفعلي لجملة المحامي على ما ستقوله الموكّلة بعدها؟",
          en: "What does the lawyer’s sentence actually do to what the client says next?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "شجّعها على الاستمرار، لأنه أظهر لها أن كلامها مفيد.",
              en: "It encouraged her to continue, by showing her that what she is saying is useful.",
            },
            rationale: {
              ar: "يبدو كذلك للحظة، وقد تبتسم فعلًا. لكنه أظهر لها أي كلام مفيد بالتحديد: من الآن ستذكر كل ما يشبه «التضييق»، وتصمت عمّا لا يشبهه — كإنذار خطي تسلّمته بسبب تأخير.",
              en: "It looks that way for a second, and she may even smile. But it showed her exactly which words are useful: from now on she will report everything resembling a “squeeze” and go quiet about anything that does not — such as a written warning she received for lateness.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "حدّد لها ما هو مفيد، فصارت تروي ما يخدم العنوان وتحذف ما يناقضه.",
              en: "It defined for her what counts as useful, so she now narrates what serves the heading and drops what contradicts it.",
            },
            correct: true,
            rationale: {
              ar: "هذا هو الأثر الحقيقي. الموكّل يقرأ إشارات محاميه ويعدّل روايته عليها دون وعي ودون سوء نيّة. والوقائع التي تُحذف اليوم لأنها «لا تخدم» هي نفسها التي ستصل إليك بعد شهرين في ردّ صاحب العمل، بعد أن تكون قد بنيتَ موقفك.",
              en: "This is the real effect. Clients read their lawyer’s signals and adjust the story to them, unconsciously and without bad faith. And the facts dropped today because they “don’t help” are the same ones that reach you in two months in the employer’s answer — after you have already built your position.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "لا أثر يُذكر؛ مجرّد تعليق تشجيعي محايد.",
              en: "No real effect; it is just a neutral, encouraging comment.",
            },
            rationale: {
              ar: "لا يوجد تعليق محايد حين يصدر عن المحامي في اللقاء الأول. كلمة «يخدمنا» تُقرأ كمعيار فرز، والموكّل يفرز. الحياد الحقيقي يكون في إعادة الصياغة، لا في التقييم.",
              en: "There is no neutral comment when it comes from the lawyer in a first meeting. The word “helps” reads as a sorting criterion, and clients sort. Real neutrality lives in the paraphrase, not in the assessment.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "أثبت لها كفاءتك المهنية، فزادت ثقتها بك.",
              en: "It demonstrated your professional competence, so her trust in you increased.",
            },
            rationale: {
              ar: "الكفاءة تُقرأ في اللقاء الأول من جودة الأسئلة لا من سرعة الاستنتاج. والاستنتاج المبكر يُشترى بثمن مزدوج: التراجع عنه لاحقًا يبدو ترددًا، والتمسّك به رغم وقائع جديدة يبدو عنادًا.",
              en: "In a first meeting, competence is read from the quality of the questions, not the speed of the conclusion. And an early conclusion costs twice over: retracting it later looks like hesitation, holding to it against new facts looks like stubbornness.",
            },
          },
        ],
      },
      {
        id: "act.cc.03.2",
        kind: "categorization",
        skillId: "skill.active-listening",
        secondarySkillIds: ["skill.avoiding-guarantees"],
        stage: 2,
        prompt: {
          ar: "صنّف كل جملة قالها المحامي: هل تُعيد ما قيل، أم تُطلق تكييفًا، أم تَعِد بنتيجة؟",
          en: "Sort each sentence the lawyer said: does it echo what was said, launch a label, or promise an outcome?",
        },
        hint: {
          ar: "اسأل عن كل جملة سؤالًا واحدًا: هل تحتوي على كلمة لم ينطق بها الموكّل؟ ومن أين جاءت تلك الكلمة؟",
          en: "Ask one question of each sentence: does it contain a word the client never said? And where did that word come from?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من ثلاثة أزرار أسفل كل جملة بدل سحبها إلى الخانة.",
          en: "Choose the category from three buttons under each sentence instead of dragging it to a bucket.",
        },
        buckets: [
          { id: "echo", label: { ar: "إعادة صياغة تفتح", en: "An echo that opens" } },
          { id: "label", label: { ar: "تكييف مبكر يُقفل", en: "A premature label that closes" } },
          { id: "promise", label: { ar: "تطمين يَعِد", en: "Reassurance that promises" } },
        ],
        items: [
          {
            id: "e1",
            label: {
              ar: "«مركزك أُلغي — هذه كلمتهم هم أم صياغتك أنتِ؟»",
              en: "“Your position was eliminated — are those their words or yours?”",
            },
            bucketId: "echo",
            rationale: {
              ar: "تُعيد الكلمة نفسها ثم تسأل عن مصدرها. الفرق بين صياغة صاحب العمل وصياغة الموكّلة قد يقرّر الملف كلّه: العبارة الحرفية في كتاب الإنهاء ليست تفصيلًا لغويًا.",
              en: "It repeats the exact phrase, then asks where it came from. The gap between the employer’s wording and the client’s own can decide the entire matter: the literal phrase in the termination letter is not a linguistic detail.",
            },
          },
          {
            id: "e2",
            label: {
              ar: "«إذًا القضية فصل تعسّفي واضح.»",
              en: "“So this is plainly an arbitrary dismissal.”",
            },
            bucketId: "label",
            rationale: {
              ar: "وصف قانوني قبل رؤية العقد أو كتاب الإنهاء. من هذه اللحظة تصبح كل واقعة لا تناسب العنوان مؤجّلة أو مسكوتًا عنها، وأنت الذي أعطيت الإشارة.",
              en: "A legal characterisation before the contract or the termination letter has been seen. From that moment, any fact that does not fit the heading gets postponed or left unsaid — and you gave the signal.",
            },
          },
          {
            id: "e3",
            label: {
              ar: "«لا تقلقي، القانون في صفّك.»",
              en: "“Don’t worry, the law is on your side.”",
            },
            bucketId: "promise",
            rationale: {
              ar: "تبدو تعاطفًا وهي وعد. الموكّلة لن تسمع «القانون» بل «سأربح»، وستبني عليها قرارات: ترفض تسوية، وتؤجّل عملًا جديدًا. التعاطف يكون بتسمية ما مرّت به، لا بتقدير نتيجة.",
              en: "It sounds like empathy and functions as a promise. She will not hear “the law” — she will hear “I will win”, and she will make decisions on it: refuse a settlement, delay taking another job. Empathy names what she went through; it does not forecast an outcome.",
            },
          },
          {
            id: "e4",
            label: {
              ar: "«فهمت أن الصلاحيات سُحبت تدريجيًا منذ آذار، وأن الإبلاغ جاء شفهيًا. هل هذا دقيق؟»",
              en: "“So: the authorities were removed gradually from March, and you were told verbally. Have I got that right?”",
            },
            bucketId: "echo",
            rationale: {
              ar: "تلخيص معروض للتصحيح، وهو أقوى أشكال الإصغاء لأنه يمنح الموكّلة سلطة تصويب روايتك. الأخطاء التي تُصحَّح هنا لا تُصحَّح في مذكّرة الخصم.",
              en: "A summary offered for correction — the strongest form of listening, because it gives the client authority to fix your version. Errors corrected here are not corrected in the other side’s brief.",
            },
          },
          {
            id: "e5",
            label: {
              ar: "«سنطالب ببدل الإنذار وتعويض الصرف، والمبلغ سيكون محترمًا.»",
              en: "“We will claim notice pay and severance, and the amount will be respectable.”",
            },
            bucketId: "promise",
            rationale: {
              ar: "تقدير مالي قبل رؤية عقد أو كشف راتب أو قرار الإنهاء. الموكّلة ستحمل رقمًا في رأسها لم تعطِه أنت وستنسبه إليك، وكل مبلغ أقلّ منه سيبدو لها إخفاقًا منك لا نتيجة تفاوض.",
              en: "A financial estimate before any contract, payslip or termination decision has been seen. She will leave carrying a figure you never gave, will attribute it to you, and any lower amount will read as your failure rather than a negotiated result.",
            },
          },
          {
            id: "e6",
            label: {
              ar: "«إذًا هذه استقالة ضمنية، لأنك توقّفتِ عن الحضور.»",
              en: "“So this is a constructive resignation, since you stopped coming in.”",
            },
            bucketId: "label",
            rationale: {
              ar: "تكييف مضادّ، وأثره أسوأ لأنه يحمل لومًا. الموكّلة التي تسمع أنها هي المخطئة تتوقّف عن سرد التفاصيل التي تخصّ سلوكها — وهي بالضبط التفاصيل التي ستُواجَه بها لاحقًا.",
              en: "A label pointing the other way, and worse, because it carries blame. A client who hears that she is the one at fault stops narrating the details about her own conduct — exactly the details she will be confronted with later.",
            },
          },
        ],
      },
      {
        id: "act.cc.03.3",
        kind: "best_response",
        skillId: "skill.active-listening",
        secondarySkillIds: ["skill.trust-building"],
        stage: 2,
        hint: {
          ar: "قالت جملتين لا جملة: واقعة جديدة، وخوفًا من أن تكون قد أخطأت. الردّ الذي يعالج واحدة فقط يخسر النصف الآخر.",
          en: "She said two things, not one: a new fact, and a fear that she got it wrong. A reply that handles only one of them loses the other half.",
        },
        context: {
          ar: [
            "بعد عشر دقائق تتوقّف ليلى فجأة وتقول بصوت منخفض:",
            "«في الحقيقة… قبل شهر عرضوا عليّ أن أستقيل مقابل مبلغ، وكدت أوقّع. لا أعرف إن كان هذا يُضعف موقفي.»",
          ],
          en: [
            "Ten minutes in, Layla suddenly stops and says quietly:",
            "“Actually… a month ago they offered me money to resign, and I nearly signed. I don’t know if that weakens my position.”",
          ],
        },
        prompt: {
          ar: "ما أفضل ردّ في هذه اللحظة بالذات؟",
          en: "What is the best response at this precise moment?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«لماذا لم تذكري هذا من البداية؟ هذه معلومة أساسية.»",
              en: "“Why didn’t you mention this at the start? That is a basic fact.”",
            },
            rationale: {
              ar: "الملاحظة صحيحة والصياغة مكلفة. «لماذا لم تذكري» محاسبة لا استيضاح، والموكّلة التي تُحاسَب مرّة واحدة تتوقّف عن التطوّع بما يحرجها. وما يحرجها هو غالبًا ما يقرّر الملف؛ الوقائع المخفيّة لا تُستخرج بالعتب.",
              en: "The observation is right and the phrasing is expensive. “Why didn’t you mention” is an audit, not a clarification, and a client audited once stops volunteering whatever embarrasses her. What embarrasses her is usually what decides the matter; hidden facts are not surfaced by reproach.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«شكرًا لأنك قلتِها. لم توقّعي، إذًا العرض واقعة لا التزام. ما الذي جعلك تترددين حينها؟»",
              en: "“Thank you for telling me. You didn’t sign, so the offer is a fact, not a commitment. What made you hesitate at the time?”",
            },
            correct: true,
            rationale: {
              ar: "ثلاث حركات في جملتين: تكافئ الصراحة فتفتح الباب لما بعدها، وتصحّح تقييمها الذاتي بواقعة لا بطمأنة («لم توقّعي»)، ثم تعيدها إلى السرد بسؤال مفتوح غير اتهامي يكشف ما قيل لها ومن قاله ومتى.",
              en: "Three moves in two sentences: it rewards the disclosure, which opens the door to the next one; it corrects her self-assessment with a fact rather than reassurance (“you didn’t sign”); then it returns her to narrative with an open, non-accusatory question that surfaces what she was told, by whom, and when.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«لا تقلقي إطلاقًا، هذا لا يؤثّر على شيء.»",
              en: "“Don’t worry at all, that has no effect on anything.”",
            },
            rationale: {
              ar: "تطمين قبل قراءة نصّ العرض. قد يتضمّن إقرارًا بالمخالصة أو مهلة قبول أو محضرًا موقّعًا. وحين تكتشف ذلك بعد أسبوع تكون قد أنفقتَ رصيدك: قلتَ «لا يؤثّر»، وستقول الآن «يؤثّر».",
              en: "Reassurance before reading the offer. It may contain a full-and-final release, an acceptance deadline, or a signed minute. When you discover that a week later you will have spent your credit: you said “no effect”, and now you must say “it has an effect”.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«هل تحتفظين بنسخة من عرض الاستقالة؟»",
              en: "“Do you have a copy of the resignation offer?”",
            },
            rationale: {
              ar: "سؤال ضروري وسيأتي دوره بعد جملتين. لكنه الآن يمرّ فوق لحظة الاعتراف مباشرةً إلى الإجراء. خاطرت بقول شيء تخجل منه؛ فإن قوبل بطلب مستند تعلّمت أن الاعترافات تتحوّل إلى مهامّ، فتقتصد فيها.",
              en: "A necessary question whose turn comes two sentences later. Right now it steps straight over the moment of disclosure and into procedure. She risked saying something she is ashamed of; if that is met with a document request, she learns that disclosures become chores — and she will ration them.",
            },
          },
        ],
      },
      {
        id: "act.cc.03.4",
        kind: "short_written",
        skillId: "skill.active-listening",
        secondarySkillIds: ["skill.client-follow-up", "skill.avoiding-guarantees"],
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.client-response.v1",
        weight: 2,
        minChars: 260,
        context: {
          ar: [
            "مساء اليوم نفسه تصلك رسالة من ليلى المنصوري:",
            "«أستاذ، بقيت أفكّر بعد اللقاء. هل أخطأتُ حين لم أوقّع على عرض الاستقالة؟ وهل ما زال بإمكاني أن أطلب منهم العرض نفسه الآن؟»",
            "أنت لم ترَ نصّ العرض بعد، ولم تتسلّم عقد العمل ولا كتاب الإنهاء.",
          ],
          en: [
            "That same evening a message arrives from Layla Al-Mansouri:",
            "“Counsel, I kept thinking after our meeting. Did I make a mistake by not signing the resignation offer? And can I still ask them for the same offer now?”",
            "You have not yet seen the offer, the employment contract or the termination letter.",
          ],
        },
        prompt: {
          ar: "اكتب ردًّا (٦٠–٩٠ كلمة) يُصغي قبل أن يشرح: أقرّ بالسؤالين معًا، وأجب بما تعرفه فعلًا اليوم، ولا تُقيّم قرارها ولا تَعِد بنتيجة قبل رؤية النصّ.",
          en: "Write a reply (60–90 words) that listens before it explains: acknowledge both questions, answer with what you actually know today, and neither judge her decision nor promise an outcome before you have seen the document.",
        },
        modelAnswer: {
          ar: [
            "«مساء الخير أستاذة ليلى. سؤالان مشروعان، وأجيب عن كل واحد بما أعرفه اليوم.»",
            "«أوّلًا: لا أستطيع أن أقول إن عدم التوقيع كان خطأً أو صوابًا قبل أن أقرأ نصّ العرض؛ صياغته هي التي تحدّد ما كنتِ ستتنازلين عنه.»",
            "«ثانيًا: طلب العرض نفسه اليوم ممكن من حيث المبدأ، لكنه قرار تفاوضي لا يُتّخذ قبل أن نعرف ما في يدنا.»",
            "«أرجو أن ترسلي لي غدًا قبل الظهر: نسخة العرض إن وُجدت، وعقد العمل، وكتاب الإنهاء. سأقرأها وأعود إليكِ بملاحظاتي يوم الخميس.»",
          ],
          en: [
            "“Good evening, Ms. Layla. Both questions are fair, and I will answer each with what I know today.”",
            "“First: I cannot tell you whether not signing was right or wrong before I read the offer itself; its wording decides what you would have been giving up.”",
            "“Second: asking for the same offer now is possible in principle, but that is a negotiating decision we should not take before we know what we hold.”",
            "“Please send me, by midday tomorrow: a copy of the offer if you have one, your employment contract, and the termination letter. I will read them and come back to you with my comments on Thursday.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«لا لا، بالعكس، أحسنتِ صنعًا! لو وقّعتِ لكنتِ خسرتِ كل حقوقك.»",
              "«وضعك ممتاز وموقفك قوي جدًا. لا تتواصلي معهم إطلاقًا من الآن فصاعدًا، واتركي كل شيء عليّ.»",
            ],
            en: [
              "“No, no, on the contrary — you did the right thing! If you had signed you would have lost all your rights.”",
              "“Your position is excellent and very strong. Don’t contact them at all from now on, and leave everything to me.”",
            ],
          },
          whatIsWrong: {
            ar: "الردّ دافئ، وكل جملة فيه مخاطرة. «لكنتِ خسرتِ كل حقوقك» حكم على مستند لم يُقرأ، وقد يتبيّن أن العرض أفضل من نتيجة النزاع. «موقفك قوي جدًا» تقدير لنتيجة قبل رؤية عقد العمل. «لا تتواصلي معهم إطلاقًا» تعليمات تصرّف حاسمة قبل معرفة الوقائع، وقد تُفوّت مهلة. ولا خطوة تالية ولا مالك ولا تاريخ.",
            en: "Warm, and every sentence is a risk. “You would have lost all your rights” judges a document nobody has read, and the offer may yet beat the outcome of a dispute. “Your position is very strong” forecasts a result before the contract has been seen. “Don’t contact them at all” is decisive action advice given before the facts are known, and it may miss a deadline. And there is no next step, no owner and no date.",
          },
        },
      },
      {
        id: "act.cc.03.5",
        kind: "reflection",
        skillId: "skill.active-listening",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع ملفًا اتّضح لك فيه لاحقًا أن الموكّل كان يعرف واقعة مهمة ولم يقلها. ما السؤال أو التعليق الذي أطلقتَه في اللقاء الأول وجعله يظنّ أنها لا تهمّك؟",
          en: "Recall a matter where it later turned out the client knew an important fact and never said it. Which question or comment of yours in that first meeting made him think it did not matter to you?",
        },
        followUp: {
          ar: "ومتى ظهرت تلك الواقعة في النهاية: من فمه، أم من مستند قدّمه الخصم؟",
          en: "And where did that fact finally surface: from his own mouth, or from a document filed by the other side?",
        },
      },
    ],
    summaryCard: {
      id: "card.cc.03",
      title: {
        ar: "ثلاث ثوانٍ قبل أول وصف",
        en: "Three Seconds Before the First Label",
      },
      whatYouLearned: {
        ar: [
          "التشخيص المبكر لا يخطئ في القانون غالبًا، بل يخطئ في التوقيت: ينطق قبل أن تكتمل الوقائع.",
          "الصمت وإعادة الصياغة يستخرجان ما لا يستخرجه أي سؤال إضافي.",
          "التطمين ليس تعاطفًا؛ التعاطف يسمّي ما جرى، والتطمين يقدّر نتيجة لا تملكها.",
        ],
        en: [
          "A premature diagnosis is usually not wrong about the law; it is wrong about timing — spoken before the facts are complete.",
          "Silence and paraphrase surface what no additional question can.",
          "Reassurance is not empathy: empathy names what happened, reassurance forecasts a result you do not control.",
        ],
      },
      framework: {
        name: {
          ar: "بوّابة الثواني الثلاث: اصمت · أعِد · سَمِّ ما يقلقه · ثم اسأل",
          en: "The Three-Second Gate: Pause · Echo · Name the Worry · Then Ask",
        },
        steps: [
          {
            ar: "اصمت — بعد كل جملة ثقيلة، عُدّ إلى ثلاثة قبل أن تنطق.",
            en: "Pause — after every heavy sentence, count to three before you speak.",
          },
          {
            ar: "أعِد — كرّر أربع كلمات من كلامه هو، لا صياغتك القانونية أنت.",
            en: "Echo — repeat four of his own words, not your legal rewording.",
          },
          {
            ar: "سَمِّ ما يقلقه — «يبدو أن ما يشغلك هو الدخل خلال الأشهر القادمة» — دون وعد بشيء.",
            en: "Name the worry — “it sounds like what’s on your mind is income over the coming months” — promising nothing.",
          },
          {
            ar: "ثم اسأل — سؤالًا مفتوحًا واحدًا يعيده إلى الزمن، لا إلى الحكم.",
            en: "Then ask — one open question that returns him to chronology, not to judgement.",
          },
        ],
      },
      rememberThis: {
        ar: "التكييف الذي تنطقه في الدقيقة الثالثة سيُصبح كل ما تعرفه عن الملف، لأن الموكّل سيتوقّف عن مدّك بما يناقضه.",
        en: "The label you say out loud in minute three becomes everything you will ever know about the matter, because the client stops feeding you whatever contradicts it.",
      },
      useItTomorrow: {
        ar: "في اللقاء الأول غدًا، امنع نفسك من نطق أي وصف قانوني قبل الدقيقة العاشرة، واكتب الوصف على ورقتك بدل أن تقوله.",
        en: "In tomorrow’s first meeting, forbid yourself any legal characterisation before minute ten — write the label on your pad instead of saying it.",
      },
    },
    targetLevel: 2,
    sourceIds: [
      "src.client-centered-law-firm",
      "src.your-brain-at-work",
      "src.thinking-like-a-lawyer",
      "src.maccarthy-cross-exam",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 04 — Asking Better Questions
  // =========================================================================
  {
    id: "unit.cc.04",
    chapterId: "ch.cc.understanding",
    order: 4,
    title: {
      ar: "أسئلة أفضل: من المفتوح إلى المؤكَّد",
      en: "Asking Better Questions: From Open to Confirmed",
    },
    subtitle: {
      ar: "السؤال ليس فضولًا؛ هو الأداة الوحيدة التي تملكها لتغيير ما تعرفه.",
      en: "A question is not curiosity; it is the only tool you have for changing what you know.",
    },
    primarySkillId: "skill.questioning",
    skillIds: ["skill.questioning", "skill.active-listening", "skill.next-steps-closure"],
    stage: 3,
    estimatedMinutes: 12,
    steps: [
      {
        kind: "hook",
        id: "s.cc.04.hook",
        text: {
          ar: "«أريد أن أقاضيه غدًا.» سؤالك التالي هو الذي سيقرّر: هل ستعرف لماذا، أم ستكتفي بتنفيذ الطلب؟",
          en: "“I want to sue him tomorrow.” Your next question decides one thing: whether you will learn why, or simply take the instruction.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.cc.04.why",
        text: {
          ar: "الموكّل لا يخفي الوقائع الحاسمة؛ هو لا يعرف أنها حاسمة. ولا تظهر إلا لمن يسأل بالترتيب الصحيح وبصيغة لا تُشعره بالمحاكمة.",
          en: "Clients do not hide the decisive facts; they do not know the facts are decisive. Those facts surface only for a lawyer who asks in the right order, in words that do not feel like a trial.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.cc.04.goals",
        goals: {
          ar: [
            "أن تبني سلسلة أسئلة تنزل من المفتوح إلى المضيَّق إلى التثبيت إلى التأكيد.",
            "أن تكتشف في سؤالك الخصال الأربع التي تُفسده: الإغلاق المبكر، والإيحاء، والازدواج، و«لماذا» الموجّهة إلى الشخص.",
            "أن تُقفل كل موضوع بتلخيص معروض على الموكّل للتصحيح قبل الانتقال إلى غيره.",
          ],
          en: [
            "Build a question chain that descends from open, to narrowing, to anchoring, to confirming.",
            "Spot in your own questions the four faults that ruin them: closing too early, leading, double-barrelling, and “why” aimed at the person.",
            "Close every topic with a summary offered to the client for correction before you move on.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.cc.04.lesson",
        title: {
          ar: "أربع خصال تُفسد سؤالًا سليمًا",
          en: "Four faults that ruin a sound question",
        },
        body: {
          ar: [
            "لكل سؤال وظيفة: المفتوح يستكشف، والمضيَّق يحدّد، وسؤال التثبيت يربط الواقعة بمستند أو تاريخ، وسؤال التأكيد يختبر فهمك أنت.",
            "الخصلة الأولى: الإغلاق المبكر. «هل عندك عقد؟» تُنتج نعم أو لا؛ «كيف اتفقتما على هذا التعامل؟» تُنتج القصة والمستند معًا.",
            "الثانية: الإيحاء. «طبعًا لم توافق على التقسيط، صحيح؟» تُعطي الموكّل الجواب الذي يظنّ أنك تنتظره، فتبني ملفك على مجاملة.",
            "الثالثة: الازدواج. «متى سلّمك الشيك وهل أعطاك إيصالًا؟» يُجاب عن نصفها ويُنسى النصف الآخر، ولن تنتبه.",
            "الرابعة: «لماذا» الموجّهة إلى الشخص. «لماذا وقّعت دون قراءة؟» تُسمع محاسبة. بدّلها بـ«ما الذي قيل لك عن هذه الورقة؟» — الوقائع نفسها بلا لوم.",
            "واختم كل موضوع بالتأكيد: «لأتأكّد من فهمي…» ثم لخّص واطلب التصحيح. ما لا يُصحَّح اليوم يُصحَّح في مذكّرة الخصم.",
          ],
          en: [
            "Every question has a job: open explores, narrowing pins down, anchoring ties a fact to a document or a date, and confirming tests your own understanding.",
            "Fault one: closing too early. “Do you have a contract?” produces yes or no; “how did the two of you set this deal up?” produces the story and the document together.",
            "Fault two: leading. “Of course you didn’t agree to instalments, did you?” hands the client the answer he thinks you expect, and you build the file on politeness.",
            "Fault three: double-barrelling. “When did he give you the cheque and did he give you a receipt?” gets half an answer, the other half is forgotten, and you will not notice.",
            "Fault four: “why” aimed at the person. “Why did you sign without reading?” is heard as an audit. Swap it for “what were you told about this paper?” — same facts, no blame.",
            "And close every topic by confirming: “let me check I have this right…”, then summarise and invite correction. What is not corrected today gets corrected in the other side’s brief.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.cc.04.visual",
        title: {
          ar: "السؤال نفسه بصيغتين",
          en: "The same question, two ways",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "«هل الشيك بلا رصيد؟»", en: "“Was the cheque unfunded?”" },
            detail: {
              ar: "مغلق يعطيك «نعم» ويحجب عنك السبب الذي أُعطي الشيك من أجله أصلًا.",
              en: "Closed: it gets you a “yes” and hides from you why the cheque was given in the first place.",
            },
            tone: "negative",
          },
          {
            label: {
              ar: "«احكِ لي كيف وصل هذا الشيك إلى يدك.»",
              en: "“Tell me how this cheque came into your hands.”",
            },
            detail: {
              ar: "مفتوح يُنتج تاريخ التسليم وسببه وصفته: ضمانًا كان أم وفاءً لدفعة.",
              en: "Open: it produces the date it was handed over, the reason, and its character — security or payment for an instalment.",
            },
            tone: "positive",
          },
          {
            label: {
              ar: "«لماذا انتظرت ثمانية أشهر قبل أن تقدّمه؟»",
              en: "“Why did you wait eight months before presenting it?”",
            },
            detail: {
              ar: "«لماذا» موجّهة إلى الشخص تُسمع لومًا، فيبرّر الموكّل بدل أن يروي.",
              en: "“Why” aimed at the person is heard as blame, so the client defends himself instead of narrating.",
            },
            tone: "negative",
          },
          {
            label: {
              ar: "«ما الذي كان يجري بينكما خلال هذه الأشهر الثمانية؟»",
              en: "“What was going on between the two of you during those eight months?”",
            },
            detail: {
              ar: "الصيغة نفسها موجّهة إلى الوقائع: تُخرج المهل والوعود والمراسلات دون أن يشعر بالاتهام.",
              en: "The same enquiry aimed at the facts: it surfaces the extensions, the promises and the correspondence, without him feeling accused.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.cc.04.worked",
        strong: {
          label: {
            ar: "الدقيقة الثالثة — نسخة تُخرج الواقعة الحاسمة",
            en: "Minute three — the version that surfaces the decisive fact",
          },
          text: {
            ar: [
              "«قبل أن نتكلّم عن الدعوى: احكِ لي كيف وصل هذا الشيك إلى يدك.»",
              "«فهمت. إذًا حرّره لك في تشرين الأول، والبضاعة سُلّمت على دفعات بعده. ما الذي قيل لك عن الشيك يوم استلمته؟»",
              "«لأتأكّد من فهمي: الشيك أُعطي ضمانًا لكامل التعامل، لا وفاءً لدفعة بعينها. هل هذا دقيق؟»",
              "«جيّد أنك ذكرتها الآن. هذه النقطة تغيّر الطريق الذي سنختاره، وسنحتاج المراسلات التي تُثبتها.»",
            ],
            en: [
              "“Before we talk about a claim: tell me how this cheque came into your hands.”",
              "“I see. So he wrote it in October, and the goods were delivered in instalments afterwards. What were you told about the cheque the day you received it?”",
              "“Let me check I have this right: the cheque was given as security for the whole dealing, not as payment for one particular instalment. Is that accurate?”",
              "“I’m glad you raised it now. That point changes which route we take, and we will need the correspondence that evidences it.”",
            ],
          },
          why: {
            ar: "أربعة أسئلة، كل واحد يفتح ما تركه الذي قبله: مفتوح يُخرج السياق، ثم تضييق على تاريخ التحرير، ثم تثبيت على الصيغة التي قيلت له حرفيًا، ثم تأكيد صريح معروض للتصحيح. وصفة الشيك — ضمان أم وفاء — هي الفرق بين مسارين مختلفين تمامًا، والموكّل لم يكن ليتطوّع بها لأنه لا يعرف أنها مهمة.",
            en: "Four questions, each opening what the previous one left: an open question for context, then narrowing onto the date of issue, then anchoring on the exact words he was told, then an explicit confirmation offered for correction. Whether the cheque was security or payment separates two entirely different routes — and the client would never have volunteered it, because he does not know it matters.",
          },
        },
        weak: {
          label: {
            ar: "الدقيقة الثالثة — نسخة تُنفّذ الطلب",
            en: "Minute three — the version that takes the instruction",
          },
          text: {
            ar: [
              "«حسنًا. الشيك ارتدّ ومعك إفادة عدم الدفع، إذًا لدينا كل ما نحتاجه.»",
              "«هل الشيك مؤرَّخ ومسحوب على مصرف محلي؟ وهل قدّمته خلال المهلة؟»",
              "«ممتاز. نتقدّم غدًا ونُتبعها بدعوى بالمبلغ. النتيجة عادةً سريعة في هذه الملفات.»",
            ],
            en: [
              "“Fine. The cheque bounced and you have the non-payment certificate, so we have everything we need.”",
              "“Is the cheque dated and drawn on a local bank? And did you present it within the period?”",
              "“Excellent. We file tomorrow and follow with a claim for the amount. These files usually move quickly.”",
            ],
          },
          why: {
            ar: "كل سؤال هنا صحيح تقنيًا، ولهذا بالضبط يقع فيه المتدرّب الجيّد: يبدو أنه يتحقّق من الأركان. لكنه بدأ من الورقة لا من العلاقة، فلم يسأل لماذا أُعطي الشيك. لو كان ضمانًا لتغيّر التكييف والمسار معًا، وسيعرف ذلك من ردّ الخصم لا من موكّله. و«النتيجة عادةً سريعة» وعد بمدّة لا يملكها أحد في المكتب.",
            en: "Every question is technically correct — which is precisely why a good trainee falls into it: it looks like checking the elements. But he started from the paper, not the relationship, so he never asked why the cheque was given. If it was security, both the characterisation and the route change — and he will learn that from the opponent’s answer, not his own client. And “these files usually move quickly” promises a timescale nobody in the firm owns.",
          },
        },
      },
      { kind: "activity", id: "s.cc.04.a1", activityId: "act.cc.04.1", mode: "quick" },
      { kind: "activity", id: "s.cc.04.a2", activityId: "act.cc.04.2", mode: "guided" },
      { kind: "activity", id: "s.cc.04.a3", activityId: "act.cc.04.3", mode: "guided" },
      { kind: "activity", id: "s.cc.04.a4", activityId: "act.cc.04.4", mode: "independent" },
      { kind: "simulation", id: "s.cc.04.sim", scenarioId: "scn.first-client-meeting" },
      { kind: "activity", id: "s.cc.04.a5", activityId: "act.cc.04.5", mode: "independent" },
      { kind: "summary", id: "s.cc.04.summary", summaryCardId: "card.cc.04" },
      {
        kind: "apply_tomorrow",
        id: "s.cc.04.apply",
        task: {
          ar: "في لقاء الغد، اكتب أسئلتك قبل الدخول ثم شطب كل سؤال يبدأ بـ«هل»، وأعد صياغته بـ«كيف» أو «ما الذي».",
          en: "Before tomorrow’s meeting, write your questions out, then cross out every one starting with “did/do/is”, and rewrite it as “how” or “what”.",
        },
        detail: {
          ar: "واحتفظ بسؤال «هل» واحد فقط لآخر اللقاء: «هل صحّحتُ شيئًا في تلخيصي؟» — هذا هو موضعه الصحيح الوحيد.",
          en: "Keep exactly one closed question for the end of the meeting: “have I got anything wrong in my summary?” — that is its one correct home.",
        },
      },
      {
        kind: "next_mission",
        id: "s.cc.04.next",
        teaser: {
          ar: "جمعتَ الوقائع كاملة. لكن الموكّل خرج ولم يفهم ما تعنيه. الوحدة القادمة: أن تشرح ملفًا معقّدًا بلغة يتذكّرها بعد أسبوع ويستطيع إعادتها لزوجته أو لشريكه.",
          en: "You have the full picture. But the client left without understanding what it means. Next unit: explaining a complex matter in language he still remembers a week later — and can repeat to his wife or his partner.",
        },
      },
    ],
    activities: [
      {
        id: "act.cc.04.1",
        kind: "find_mistake",
        skillId: "skill.questioning",
        stage: 3,
        context: {
          ar: [
            "الموكّل سامي مخايل، تاجر مواد كهربائية، يحمل شيكًا مرتجعًا بمبلغ خمسة وأربعين ألفًا محرّرًا من أحد زبائنه.",
            "هذه أربعة أسئلة طرحها المحامي في اللقاء نفسه.",
          ],
          en: [
            "The client is Sami Mikhael, an electrical-goods trader, holding a returned cheque for 45,000 written by one of his customers.",
            "These are four questions the lawyer asked in the same meeting.",
          ],
        },
        prompt: {
          ar: "ثلاثة من هذه الأسئلة تستخرج معلومة. واحد يُفسدها. أيّها؟",
          en: "Three of these questions extract information. One corrupts it. Which one?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«ما الذي جرى بينك وبين هذا الزبون بعد تسليم البضاعة؟»",
              en: "“What happened between you and this customer after the goods were delivered?”",
            },
            rationale: {
              ar: "سؤال سليم: مفتوح، موجّه إلى الوقائع لا إلى الشخص، ويترك للموكّل أن يختار نقطة البداية. غالبًا ما يُخرج المراسلات والوعود التي لن يذكرها أحد إن سُئل سؤالًا مغلقًا.",
              en: "A sound question: open, aimed at the facts rather than the person, and leaving the client to choose the starting point. It usually surfaces the correspondence and promises nobody mentions in answer to a closed question.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«لم توافق على التقسيط طبعًا، صحيح؟»",
              en: "“Of course you didn’t agree to instalments, did you?”",
            },
            correct: true,
            rationale: {
              ar: "سؤال موحٍ يحمل جوابه معه. الموكّل الذي يشعر أن محاميه يتوقّع جوابًا معيّنًا يعطيه إياه، لا كذبًا بل مجاملة. ثم تكتشف اتفاق التقسيط في مستند يقدّمه الخصم، بعد أن تكون قد بنيتَ موقفك عليه — والأخطر أن أحدًا لن يصحّحه لك في الطريق.",
              en: "A leading question that carries its own answer. A client who senses his lawyer expects a particular answer supplies it — not by lying, but out of politeness. You then discover the instalment agreement in a document produced by the other side, after you have built your position on the opposite — and worse, nobody corrects you along the way.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«متى بالضبط سلّمك الشيك؟»",
              en: "“Exactly when did he give you the cheque?”",
            },
            rationale: {
              ar: "مغلق، لكنه مغلق في موضعه: يأتي بعد الرواية لتثبيت تاريخ. الإغلاق ليس عيبًا بذاته؛ العيب أن يسبق القصة. سؤال التثبيت وظيفته أن يربط ما رواه الموكّل بتاريخ أو مستند يمكن التحقّق منه.",
              en: "Closed — but closed in the right place: it comes after the narrative, to pin down a date. Closing is not a fault in itself; the fault is closing before the story. An anchoring question exists to tie what the client narrated to a verifiable date or document.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«ما الذي قيل لك عن هذا الشيك يوم استلمته؟»",
              en: "“What were you told about this cheque the day you received it?”",
            },
            rationale: {
              ar: "سؤال سليم وثمين: يستهدف الصيغة الحرفية التي قيلت للموكّل، وهي التي تكشف صفة الشيك — ضمانًا أم وفاءً. ولاحظ أنه تجنّب «لماذا قبلت شيكًا مؤجّلًا؟»، فلم يدفع الموكّل إلى التبرير.",
              en: "A sound and valuable question: it targets the literal wording the client was given, which is what reveals the cheque’s character — security or payment. Note that it avoids “why did you accept a post-dated cheque?”, so the client is never pushed into justifying himself.",
            },
          },
        ],
      },
      {
        id: "act.cc.04.2",
        kind: "ordering",
        skillId: "skill.questioning",
        stage: 3,
        hint: {
          ar: "ابدأ بما لا يعرف الموكّل أنه مهم، وانتهِ بما يجب أن يصحّحه لك قبل أن يخرج من الغرفة.",
          en: "Start with what the client does not know is important; end with what he must correct for you before he leaves the room.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٥) من قائمة منسدلة بجانب كل سؤال بدل السحب.",
          en: "Pick the position number (1 to 5) from a dropdown beside each question instead of dragging.",
        },
        prompt: {
          ar: "رتّب أسئلة اللقاء بحيث ينزل كل سؤال درجة واحدة: من المفتوح، إلى المضيَّق، إلى التثبيت، إلى التأكيد.",
          en: "Order the questions so each one drops a single rung: from open, to narrowing, to anchoring, to confirming.",
        },
        items: [
          {
            id: "q1",
            label: {
              ar: "«احكِ لي من البداية: كيف بدأ التعامل بينك وبين هذا الزبون؟»",
              en: "“Tell me from the beginning: how did your dealings with this customer start?”",
            },
            rationale: {
              ar: "المفتوح أولًا لأنه الوحيد الذي يُخرج ما لا تعرف أنك تجهله. لو بدأتَ بالشيك لعرفتَ كل شيء عن الورقة ولا شيء عن العلاقة التي أنتجتها.",
              en: "Open first, because it is the only question that surfaces what you do not know you are missing. Start from the cheque and you learn everything about the paper and nothing about the relationship that produced it.",
            },
          },
          {
            id: "q2",
            label: {
              ar: "«وماذا حدث بعد تسليم الدفعة الثانية؟»",
              en: "“And what happened after the second delivery?”",
            },
            rationale: {
              ar: "تضييق أول: يبقى مفتوحًا في الصياغة لكنه يحصر النافذة الزمنية. هذه الدرجة هي التي تُخرج التأخيرات والوعود الشفهية دون أن يشعر الموكّل بأنه يُستجوَب.",
              en: "A first narrowing: still open in form, but it fixes the time window. This is the rung that surfaces the delays and the verbal promises without the client feeling interrogated.",
            },
          },
          {
            id: "q3",
            label: {
              ar: "«متى بالضبط حرّر لك الشيك، وبأي مبلغ؟»",
              en: "“Exactly when did he write the cheque, and for how much?”",
            },
            rationale: {
              ar: "تثبيت: يربط الرواية بتاريخ ورقم يمكن التحقّق منهما. يأتي هنا لا قبله، لأن التاريخ بلا سياق رقم في دفتر، والسياق بلا تاريخ حكاية لا تُقدَّم إلى محكمة.",
              en: "Anchoring: it ties the narrative to a verifiable date and figure. It belongs here and not earlier, because a date without context is a number in a ledger, and context without a date is a story you cannot put before a court.",
            },
          },
          {
            id: "q4",
            label: {
              ar: "«وما الذي قيل لك عن الشيك يوم استلمته — وفاءً لدفعة، أم ضمانًا للتعامل كلّه؟»",
              en: "“And what were you told about the cheque that day — payment for one instalment, or security for the whole dealing?”",
            },
            rationale: {
              ar: "تثبيت من نوع أدقّ: يستهدف الصيغة المنطوقة لا التكييف. وضع الاحتمالين معًا في السؤال يمنع الإيحاء، ويحرّر الموكّل من الخوف من أن يُعطي «الجواب الخطأ».",
              en: "A finer kind of anchoring: it targets the words that were spoken, not the characterisation. Offering both possibilities in one question prevents leading, and frees the client from fearing he will give “the wrong answer”.",
            },
          },
          {
            id: "q5",
            label: {
              ar: "«لأتأكّد من فهمي: الشيك ضمان، والمتبقّي خمسة وأربعون ألفًا، وآخر مراسلة بينكما في شباط. هل صحّحتُ شيئًا؟»",
              en: "“Let me check I have this right: the cheque is security, 45,000 remains outstanding, and your last exchange was in February. Have I got anything wrong?”",
            },
            rationale: {
              ar: "التأكيد أخيرًا، ولا قيمة له في غير هذا الموضع. صيغة «هل صحّحتُ شيئًا؟» تمنح الموكّل إذنًا صريحًا بتصويبك؛ وبدونها يقول «نعم صحيح» لكل شيء، حتى لما لم يسمعه جيّدًا.",
              en: "Confirming last, and worthless anywhere else. The phrasing “have I got anything wrong?” gives the client explicit permission to correct you; without it he says “yes, correct” to everything, including what he did not quite catch.",
            },
          },
        ],
      },
      {
        id: "act.cc.04.3",
        kind: "best_response",
        skillId: "skill.questioning",
        secondarySkillIds: ["skill.expectation-management", "skill.next-steps-closure"],
        stage: 3,
        hint: {
          ar: "الموكّل لم يعترض على الأسئلة؛ اعترض على أن لا شيء يتحرّك. ابحث عن الردّ الذي يعطيه الاثنين معًا.",
          en: "The client is not objecting to the questions; he is objecting to nothing moving. Look for the reply that gives him both.",
        },
        context: {
          ar: [
            "بعد خمس دقائق يقاطعك سامي مخايل:",
            "«أستاذ، بكل احترام، أنا لا أريد تحقيقًا. الشيك ارتدّ ومعي الإفادة. تقدّم غدًا.»",
          ],
          en: [
            "Five minutes in, Sami Mikhael cuts across you:",
            "“Counsel, with respect, I didn’t come for an investigation. The cheque bounced and I have the certificate. File tomorrow.”",
          ],
        },
        prompt: {
          ar: "ما أفضل ردّ يحافظ على العلاقة ولا يتخلّى عن الأسئلة؟",
          en: "What is the best reply that keeps the relationship and does not surrender the questions?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«أفهم استعجالك، والمهل تعنينا فعلًا. ثلاثة أسئلة فقط، لأن جوابها يحدّد أي طريق أسرع — لا ما إذا كنّا سنتحرّك.»",
              en: "“I understand the urgency, and the deadlines do matter here. Just three questions — their answers decide which route is faster, not whether we act.”",
            },
            correct: true,
            rationale: {
              ar: "يفصل بين اعتراضين خلطهما الموكّل: الخوف من الجمود، والضيق من الأسئلة. يعطيه رقمًا محدّدًا («ثلاثة») فيصير للأسئلة نهاية منظورة، ثم يربطها بمصلحته هو — السرعة — بدل أن يطلب منه ثقة بلا مقابل في اللقاء الأول.",
              en: "It separates two objections the client has merged: fear of paralysis, and irritation at being questioned. It gives him a number (“three”), so the questions have a visible end, then ties them to his own interest — speed — instead of asking for unearned trust in a first meeting.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«كما تريد. نتقدّم غدًا ونستكمل التفاصيل لاحقًا.»",
              en: "“As you wish. We file tomorrow and fill in the details later.”",
            },
            rationale: {
              ar: "تنفيذ الطلب ليس خدمة. المعلومة التي تجنّبتها اليوم — صفة الشيك مثلًا — ستصل إليك من ردّ الخصم بعد أن تكون قد التزمتَ بموقف علنًا. والموكّل الذي وافقتَه اليوم هو نفسه الذي سيسأل بعد شهرين: «لماذا لم تسألني؟»",
              en: "Doing as instructed is not service. The fact you avoided today — the character of the cheque, say — will reach you through the other side’s answer, after you have committed to a position on the record. And the client you agreed with today is the same one who asks in two months: “why didn’t you ask me?”",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«لا أستطيع تقديم أي شيء قبل استكمال كامل الوقائع والمستندات.»",
              en: "“I cannot file anything before the facts and documents are complete.”",
            },
            rationale: {
              ar: "الموقف صحيح والصياغة تُقرأ رفضًا. الموكّل تحت ضغط مهلة ويسمع «لن يتحرّك أحد». الصواب أن تفصل بين ما يمكن فعله فورًا — إنذار، حفظ مهلة — وما يحتاج معلومة، لا أن تجعل كل شيء رهن الاستكمال.",
              en: "The position is right and the wording reads as a refusal. The client is under deadline pressure and hears “nothing will move”. The fix is to separate what can be done at once — a notice, protecting a time limit — from what needs information, rather than making everything conditional on completeness.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«هذه الأسئلة لمصلحتك، وأنا أعرف عملي.»",
              en: "“These questions are for your benefit, and I know my job.”",
            },
            rationale: {
              ar: "صحيحة المضمون وعديمة الأثر. لم تعطِ الموكّل سببًا ولا عددًا ولا مهلة، بل طلبتَ منه ثقة بلا مقابل — في اللقاء الأول تحديدًا، حيث لا رصيد بعد. ومن يدافع عن أسئلته بهذه الصيغة يحصل على أجوبة قصيرة لبقية اللقاء.",
              en: "Substantively true and practically useless. You gave him no reason, no number and no time frame; you asked for unearned trust — in the very first meeting, where there is no credit yet. A lawyer who defends his questions this way gets short answers for the rest of the meeting.",
            },
          },
        ],
      },
      {
        id: "act.cc.04.4",
        kind: "short_written",
        skillId: "skill.questioning",
        secondarySkillIds: ["skill.client-follow-up", "skill.expectation-management"],
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.client-response.v1",
        weight: 2,
        minChars: 300,
        context: {
          ar: [
            "في المساء تصلك رسالة من سامي مخايل:",
            "«أستاذ، فكّرت بالموضوع. ابدأ الدعوى غدًا ولا داعي للانتظار. وكم تتوقّع أن يستغرق الأمر حتى أستلم المبلغ؟»",
            "أنت لم ترَ الشيك ولا إفادة عدم الدفع، ولم تعرف بعد إن كان الشيك ضمانًا أم وفاءً.",
          ],
          en: [
            "In the evening a message arrives from Sami Mikhael:",
            "“Counsel, I’ve thought it over. Start the claim tomorrow, no need to wait. And how long do you expect it to take before I get the money?”",
            "You have seen neither the cheque nor the non-payment certificate, and you still do not know whether the cheque was security or payment.",
          ],
        },
        prompt: {
          ar: "اكتب ردًّا (٧٠–١٠٠ كلمة): أقرّ بطلبه وبسؤاله عن المدّة، اطرح سؤالين محدّدين تحتاجهما فعلًا، وحدّد خطوة تالية بمالك وتاريخ — دون وعد بمبلغ ولا بمدّة تحصيل.",
          en: "Write a reply (70–100 words): acknowledge both his instruction and his question about timing, ask two specific questions you genuinely need, and set one next step with an owner and a date — promising neither an amount nor a collection timescale.",
        },
        modelAnswer: {
          ar: [
            "«مساء الخير أستاذ سامي. وصلني طلبك بالبدء غدًا، وسؤالك عن المدّة مفهوم تمامًا.»",
            "«قبل أن نختار المسار أحتاج جوابين: ما الذي قيل لك عن الشيك يوم استلمته — وفاءً لدفعة أم ضمانًا للتعامل؟ وهل بينكما أي مراسلة مكتوبة بعد شباط؟»",
            "«الفرق بين الجوابين يغيّر المسار الأسرع، لا ما إذا كنّا سنتحرّك.»",
            "«أرجو إرسال صورة الشيك وإفادة عدم الدفع قبل العاشرة غدًا. سأراجعها بنفسي وأتصل بك بعد الظهر بمسار محدّد.»",
            "«أما مدّة التحصيل فتتوقّف على ردّ الطرف الآخر ومواعيد المحكمة، وكلاهما خارج سيطرتي؛ سأعطيك مدى زمنيًا واقعيًا بعد قراءة المستندين.»",
          ],
          en: [
            "“Good evening, Mr. Sami. I have your instruction to start tomorrow, and your question about timing is entirely fair.”",
            "“Before we choose the route I need two answers: what were you told about the cheque the day you received it — payment for an instalment, or security for the whole dealing? And is there any written exchange between you after February?”",
            "“The difference between those answers changes which route is fastest, not whether we act.”",
            "“Please send me an image of the cheque and the non-payment certificate before 10:00 tomorrow. I will review them myself and call you in the afternoon with a defined route.”",
            "“As for how long collection takes, that depends on the other side’s response and the court’s calendar, neither of which I control; I will give you a realistic range once I have read both documents.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«تمام أستاذ سامي، أمرك. نتقدّم غدًا صباحًا.»",
              "«هذه الملفات عادةً تُحسم خلال ثلاثة إلى أربعة أشهر وتستلم مبلغك كاملًا إن شاء الله. أرسل لي كل الأوراق التي عندك.»",
            ],
            en: [
              "“Certainly, Mr. Sami, as you say. We file tomorrow morning.”",
              "“These files are usually resolved within three to four months and you’ll get your full amount, God willing. Send me all the papers you have.”",
            ],
          },
          whatIsWrong: {
            ar: "الردّ مطيع، وهذا أول عيوبه: لم يسأل شيئًا، فبقيت صفة الشيك — وهي التي تحدّد المسار — مجهولة. «ثلاثة إلى أربعة أشهر» التزام بمدّة تملكها المحكمة والخصم لا المكتب، و«تستلم مبلغك كاملًا» وعد صريح بنتيجة. و«أرسل كل الأوراق» طلب مفتوح بلا مهلة ولا تسمية، ونتيجته المعتادة ألّا يصل شيء.",
            en: "The reply is obedient, and that is its first fault: it asks nothing, so the character of the cheque — the fact that decides the route — stays unknown. “Three to four months” commits to a timescale owned by the court and the opponent, not the firm. “You’ll get your full amount” is an outright promise of outcome. And “send me all the papers” is open-ended, with no deadline and no named document; the usual result is that nothing arrives.",
          },
        },
      },
      {
        id: "act.cc.04.5",
        kind: "reflection",
        skillId: "skill.questioning",
        stage: 3,
        grading: "self_report",
        prompt: {
          ar: "بعد المحاكاة: ما السؤال الذي طرحتَه وفتح لك بابًا لم تكن تتوقّعه؟ وما السؤال الذي لم تطرحه واكتشفتَ في آخر اللقاء أنه كان يجب أن يُطرح أولًا؟",
          en: "After the simulation: which question did you ask that opened a door you did not expect? And which question did you not ask, only to discover at the end that it should have come first?",
        },
        followUp: {
          ar: "اكتب ذلك السؤال الآن بصيغته الصحيحة، واحفظه في أعلى قائمة أسئلتك للقاء الأول القادم.",
          en: "Write that question out now in its correct form, and keep it at the top of your question list for the next first meeting.",
        },
      },
    ],
    summaryCard: {
      id: "card.cc.04",
      title: {
        ar: "السُّلَّم النازل",
        en: "The Descending Ladder",
      },
      whatYouLearned: {
        ar: [
          "لكل سؤال درجة: المفتوح يستكشف، والمضيَّق يحدّد، والمثبِّت يربط بمستند، والمؤكِّد يختبر فهمك أنت.",
          "الإغلاق ليس عيبًا في ذاته؛ العيب أن يسبق القصة.",
          "«لماذا» الموجّهة إلى الشخص تُنتج تبريرًا؛ الموجّهة إلى الوقائع تُنتج معلومة.",
        ],
        en: [
          "Every question has a rung: open explores, narrowing pins down, anchoring ties to a document, confirming tests your own understanding.",
          "Closing is not a fault in itself; the fault is closing before the story.",
          "“Why” aimed at the person produces justification; aimed at the facts, it produces information.",
        ],
      },
      framework: {
        name: {
          ar: "السُّلَّم النازل: افتح · ضيّق · ثبّت · أكّد",
          en: "The Descending Ladder: Open · Narrow · Anchor · Confirm",
        },
        steps: [
          {
            ar: "افتح — «احكِ لي كيف بدأ الأمر» — سؤال واحد، ثم اصمت حتى يتوقّف هو.",
            en: "Open — “tell me how this began” — one question, then silence until he stops.",
          },
          {
            ar: "ضيّق — احصر النافذة الزمنية أو الطرف أو الحدث، وابقَ في صيغة «ما الذي» و«كيف».",
            en: "Narrow — fix the time window, the party or the event, and stay in “what” and “how”.",
          },
          {
            ar: "ثبّت — اربط كل واقعة بتاريخ أو مستند أو عبارة منطوقة يمكن التحقّق منها.",
            en: "Anchor — tie each fact to a date, a document or a spoken phrase that can be verified.",
          },
          {
            ar: "أكّد — «لأتأكّد من فهمي… هل صحّحتُ شيئًا؟» قبل الانتقال إلى الموضوع التالي.",
            en: "Confirm — “let me check I have this right… have I got anything wrong?” before moving on.",
          },
        ],
      },
      rememberThis: {
        ar: "الموكّل لا يخفي الواقعة الحاسمة؛ هو لا يعرف أنها حاسمة. سؤالك هو الشيء الوحيد الذي يجعله يعرف.",
        en: "The client is not hiding the decisive fact; he does not know it is decisive. Your question is the only thing that tells him.",
      },
      useItTomorrow: {
        ar: "في لقاء الغد، اكتب أسئلتك مسبقًا وشطب كل ما يبدأ بـ«هل»، واحتفظ بواحد فقط للنهاية: «هل صحّحتُ شيئًا في تلخيصي؟»",
        en: "Before tomorrow’s meeting, write your questions out, cross out every closed one, and keep a single one for the end: “have I got anything wrong in my summary?”",
      },
    },
    targetLevel: 3,
    sourceIds: [
      "src.client-centered-law-firm",
      "src.maccarthy-cross-exam",
      "src.legal-analyst",
      "src.thinking-like-a-lawyer",
      "src.they-ask-you-answer",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
