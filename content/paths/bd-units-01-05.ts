import type { UnitDef } from "../types";

/**
 * Business Development — Chapter 1 (`ch.bd.building-the-network`) units 1-3 and
 * Chapter 2 (`ch.bd.understanding-the-business`) units 4-5.
 *
 * Skills `skill.business-development`, `skill.relationship-building` and
 * `skill.commercial-awareness` are authored in `content/framework/skills.ts`.
 * `skill.staying-top-of-mind`, `skill.referral-generation` and
 * `skill.converting-interest-to-instructions` are authored in a parallel
 * batch, as are units 6-10 of this path (`bd-units-06-10.ts`) and the
 * simulation scenarios used there. No simulation step appears in this batch.
 */
export const BD_UNITS_01_05: UnitDef[] = [
  // =========================================================================
  // UNIT 01 — Networking That Isn't Transactional
  // =========================================================================
  {
    id: "unit.bd.01",
    chapterId: "ch.bd.building-the-network",
    order: 1,
    title: {
      ar: "التعارف الذي لا يبحث عن صفقة فورية",
      en: "Networking That Isn't Transactional",
    },
    subtitle: {
      ar: "من يجمع بطاقات لا يبني علاقة؛ من يُظهر فضولاً صادقًا يُتذكَّر بعد سنة، لا بعد يوم",
      en: "Collecting cards isn't building a relationship; genuine curiosity is what gets remembered a year later, not a day later.",
    },
    primarySkillId: "skill.relationship-building",
    skillIds: ["skill.relationship-building", "skill.business-development"],
    stage: 1,
    estimatedMinutes: 7,
    steps: [
      {
        kind: "hook",
        id: "s.bd.01.hook",
        text: {
          ar: "في ملتقى اقتصادي، صافحت خمسة عشر شخصًا وسلّمت بطاقتك لكلٍّ منهم. بعد أسبوع، لا أحد منهم يتذكر اسمك. أين ضاع الوقت؟",
          en: "At a business forum, you shook fifteen hands and handed out fifteen cards. A week later, not one of them remembers your name. Where did the time go?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.bd.01.why",
        text: {
          ar: "من يتعامل مع كل لقاء كفرصة بيع فورية يُنسى بسرعة. العلاقات التي تجلب توكيلات لاحقًا تُبنى بفضول صادق، لا بعرض خدمات مبكر.",
          en: "Whoever treats every meeting as an instant sales pitch gets forgotten fast. The relationships that eventually bring instructions are built on genuine curiosity, not an early pitch.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.bd.01.goals",
        goals: {
          ar: [
            "أن تميّز بين جمع جهات الاتصال وبناء علاقة يتذكرك فيها الطرف الآخر.",
            "أن تفتح محادثة بفضول صادق عن الشخص المقابل، لا بعرض خدماتك.",
            "أن تحدد متى يكون تبادل معلومات التواصل خطوة طبيعية لا مفروضة.",
          ],
          en: [
            "Distinguish between collecting contacts and building a relationship the other person actually remembers.",
            "Open a conversation with genuine curiosity about the other person, not a pitch of your services.",
            "Recognize when exchanging contact details is a natural next step, not a forced one.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.bd.01.lesson",
        title: {
          ar: "الفضول قبل الأجندة",
          en: "Curiosity Before the Agenda",
        },
        body: {
          ar: [
            "معظم المحامين الجدد يدخلون فعاليات التواصل بهدف واحد: توزيع أكبر عدد من البطاقات. النتيجة عشرات المعارف السطحية، لا علاقة واحدة يمكن البناء عليها لاحقًا.",
            "العلاقة الحقيقية تبدأ بسؤال صادق عن عمل الشخص الآخر أو همّه الحالي، لا بجملة افتتاحية تمهّد لعرض خدماتك القانونية.",
            "من يستمع فعلاً يتذكر تفصيلاً واحدًا محددًا بعد اللقاء — اسم مشروع، مشكلة يواجهها، أو خبر أخبرك به. هذا التفصيل هو ما يبني الذاكرة المشتركة.",
            "أجندة واضحة من الدقيقة الأولى — «أنا محامٍ، هل تحتاج مستشارًا؟» — تجعل الطرف الآخر يشعر أنه هدف بيع لا إنسان مقابلك.",
            "تبادل معلومات التواصل خطوة أخيرة طبيعية بعد محادثة حقيقية، لا خطوة أولى. إن جاءت مبكرة جدًا، فهي غالبًا علامة على أجندة واضحة أكثر من اللازم.",
          ],
          en: [
            "Most junior lawyers walk into networking events with one goal: hand out as many cards as possible. The result is dozens of shallow acquaintances, not one relationship worth building on later.",
            "A real relationship starts with a genuine question about the other person's work or current concern, not an opener that sets up your legal-services pitch.",
            "Someone who genuinely listens remembers one specific detail afterward — a project's name, a problem they mentioned, a piece of news they shared. That detail is what builds shared memory.",
            "An obvious agenda from minute one — \"I'm a lawyer, do you need counsel?\" — makes the other person feel like a sales target, not a person you're actually meeting.",
            "Exchanging contact details is a natural last step after a real conversation, not a first one. If it comes too early, it usually signals an agenda that's too obvious.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.bd.01.visual",
        title: {
          ar: "تعارف تبادلي مقابل تعارف حقيقي",
          en: "Transactional Networking vs. Real Networking",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "التعارف التبادلي", en: "Transactional networking" },
            detail: {
              ar: "بطاقة، جملة عن الخدمات، والانتقال لشخص آخر خلال دقيقتين.",
              en: "A card, a line about your services, and moving to the next person within two minutes.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الفضول الصادق", en: "Genuine curiosity" },
            detail: {
              ar: "سؤال حقيقي عن عمل الطرف الآخر، ثم استماع فعلي لما يقوله.",
              en: "A real question about the other person's work, then actually listening to the answer.",
            },
            tone: "positive",
          },
          {
            label: { ar: "التفصيل المتذكَّر", en: "The remembered detail" },
            detail: {
              ar: "شيء واحد محدد تتذكره عن الشخص بعد أسبوع، لا اسمه فقط.",
              en: "One specific thing you remember about them a week later, not just their name.",
            },
            tone: "positive",
          },
          {
            label: { ar: "الأجندة المبكرة", en: "The early agenda" },
            detail: {
              ar: "عرض الخدمات قبل أن تعرف الطرف الآخر أصلاً يُنهي المحادثة داخليًا حتى لو استمرت ظاهريًا.",
              en: "Pitching services before you actually know the other person ends the conversation internally, even if it drags on outwardly.",
            },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.bd.01.worked",
        strong: {
          label: {
            ar: "محامية تسأل قبل أن تُعرّف بنفسها",
            en: "A lawyer who asks before introducing herself",
          },
          text: {
            ar: [
              "في ملتقى نظّمه مركز نخيل للأعمال، سألت يارا خوري يوسف طرابلسي: «سمعت أن مشروعكم العقاري الجديد في مرحلة التراخيص، كيف يسير الأمر؟»",
              "استمعت لخمس دقائق كاملة دون أن تذكر مهنتها، ثم سألته سؤالاً متابعًا عن عقبة واجهها فعلاً.",
            ],
            en: [
              "At an event hosted by Nakheel Business Center, Yara Khoury asked Yousef Traboulsi: \"I heard your new real-estate project is in the licensing stage — how's that going?\"",
              "She listened for a full five minutes without mentioning her profession, then asked a genuine follow-up about an obstacle he'd actually run into.",
            ],
          },
          why: {
            ar: "استمعت أولاً فتذكّرها يوسف كشخص مهتم فعلاً، لا كمحامية تبحث عن عميل — وهذا ما جعله يتصل بها بنفسه لاحقًا.",
            en: "She listened first, so Yousef remembered her as someone genuinely interested, not a lawyer hunting for a client — which is why he called her himself, later.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يفتتح المحادثة بعرض خدماته",
            en: "A lawyer who opens with his pitch",
          },
          text: {
            ar: [
              "«مرحبًا، أنا سامي ديب، محامٍ متخصص بالعقارات. هل لديكم أي نزاعات أو عقود تحتاجون مراجعتها؟»",
              "سلّم بطاقته خلال أول دقيقة وانتقل لشخص آخر بمجرد أن أدرك أن يوسف لا يحتاج خدمة فورية.",
            ],
            en: [
              "\"Hi, I'm Sami Deeb, a real-estate lawyer. Do you have any disputes or contracts that need reviewing?\"",
              "He handed over his card within the first minute and moved to the next person as soon as he realized Yousef had no immediate need.",
            ],
          },
          why: {
            ar: "بدأ بالأجندة قبل الشخص، فبدا وكأنه يبحث عن صفقة فورية. يوسف نسي اسمه بحلول اليوم التالي.",
            en: "He led with the agenda before the person, so he looked like he was hunting for a quick deal. Yousef forgot his name by the next day.",
          },
        },
      },
      { kind: "activity", id: "s.bd.01.a1", activityId: "act.bd.01.1", mode: "quick" },
      { kind: "activity", id: "s.bd.01.a2", activityId: "act.bd.01.2", mode: "guided" },
      { kind: "activity", id: "s.bd.01.a3", activityId: "act.bd.01.3", mode: "guided" },
      { kind: "activity", id: "s.bd.01.a4", activityId: "act.bd.01.4", mode: "independent" },
      { kind: "activity", id: "s.bd.01.a5", activityId: "act.bd.01.5", mode: "independent" },
      { kind: "summary", id: "s.bd.01.summary", summaryCardId: "card.bd.01" },
      {
        kind: "apply_tomorrow",
        id: "s.bd.01.apply",
        task: {
          ar: "في أول محادثة تواصل جديدة هذا الأسبوع، أجّل ذكر مهنتك حتى يسأل الطرف الآخر.",
          en: "In your next new networking conversation this week, hold off mentioning your job until the other person asks.",
        },
        detail: {
          ar: "بعد المحادثة، اكتب تفصيلاً واحدًا محددًا تتذكره عن الشخص المقابل.",
          en: "After the conversation, write down one specific detail you remember about the other person.",
        },
      },
      {
        kind: "next_mission",
        id: "s.bd.01.next",
        teaser: {
          ar: "عرفت كيف تفتح محادثة حقيقية. الوحدة القادمة: الرسالة التي ترسلها بعدها، وما الذي يجعلها تصل لا تُنسى.",
          en: "You know how to open a real conversation. Next unit: the message you send afterward, and what makes it land instead of getting forgotten.",
        },
      },
    ],
    activities: [
      {
        id: "act.bd.01.1",
        kind: "multiple_choice",
        skillId: "skill.relationship-building",
        secondarySkillIds: ["skill.business-development"],
        stage: 1,
        context: {
          ar: [
            "أنت في ملتقى غرفة تجارة نظّمه مركز نخيل للأعمال. تتعرف إلى بسام حوراني، المدير المالي لمؤسسة بركة للتمويل الأصغر.",
          ],
          en: [
            "You're at a chamber-of-commerce event hosted by Nakheel Business Center. You meet Bassam Hourani, CFO of Baraka Microfinance.",
          ],
        },
        prompt: {
          ar: "ما أفضل طريقة لبدء المحادثة؟",
          en: "What's the best way to open the conversation?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«أنا محامٍ متخصص بالتمويل، هل تحتاجون مستشارًا حاليًا؟»",
              en: "\"I'm a finance lawyer, do you currently need an advisor?\"",
            },
            rationale: {
              ar: "يبدأ بالأجندة قبل الشخص، فيشعر بسام أنه هدف بيع لا محادثة حقيقية.",
              en: "Leads with the agenda before the person, so Bassam feels like a sales target, not a real conversation.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«سمعت أن بركة توسّعت لمناطق جديدة هذا العام، كيف كانت التجربة؟»",
              en: "\"I heard Baraka expanded into new areas this year — how has that been?\"",
            },
            correct: true,
            rationale: {
              ar: "سؤال صادق عن عمله يفتح محادثة حقيقية، ويمنحك تفصيلاً تتذكره لاحقًا.",
              en: "A genuine question about his work opens a real conversation and gives you a detail to remember later.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«خذ بطاقتي، اتصل بي إن احتجت أي شيء قانوني.»",
              en: "\"Take my card, call me if you need anything legal.\"",
            },
            rationale: {
              ar: "تبادل معلومات دون أي محادثة فعلية لا يترك أثرًا يُذكر؛ البطاقة وحدها لا تبني علاقة.",
              en: "Exchanging contact info with no real conversation leaves nothing memorable; a card alone doesn't build a relationship.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "لا تتحدث إليه لأنه ليس عميلاً محتملاً واضحًا الآن.",
              en: "Don't talk to him since he's not an obviously prospective client right now.",
            },
            rationale: {
              ar: "تجاهل من لا يبدو عميلاً فوريًا يفوّت علاقات قد تثمر بعد سنوات، لا اليوم.",
              en: "Ignoring someone who isn't an obvious immediate client wastes relationships that might pay off years later, not today.",
            },
          },
        ],
      },
      {
        id: "act.bd.01.2",
        kind: "categorization",
        skillId: "skill.relationship-building",
        stage: 1,
        prompt: {
          ar: "صنّف كل سلوك: هل يبني علاقة حقيقية أم يبدو تبادليًا؟",
          en: "Sort each behavior: does it build a real relationship, or does it feel transactional?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «يبني علاقة» / «تبادلي» أسفل كل سلوك بدل السحب.",
          en: "Choose \"Builds a relationship\" / \"Transactional\" from buttons under each behavior instead of dragging.",
        },
        buckets: [
          { id: "build", label: { ar: "يبني علاقة", en: "Builds a relationship" } },
          { id: "transactional", label: { ar: "تبادلي", en: "Transactional" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "تسأل عن مشروع محدد ذكره الشخص المقابل قبل أسابيع.",
              en: "Asking about a specific project the other person mentioned weeks ago.",
            },
            bucketId: "build",
            rationale: {
              ar: "تذكّر تفصيل محدد يثبت اهتمامًا صادقًا، لا مجاملة عابرة.",
              en: "Remembering a specific detail proves genuine interest, not a passing pleasantry.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "تُخرج بطاقتك قبل أن يُكمل الشخص جملته الأولى.",
              en: "Pulling out your card before the person finishes their first sentence.",
            },
            bucketId: "transactional",
            rationale: {
              ar: "التسرع لتبادل البطاقات قبل الاستماع يكشف أجندة، لا اهتمامًا فعليًا.",
              en: "Rushing to exchange cards before listening reveals an agenda, not real interest.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "تتابع بمقال يتعلق باهتمام ذكره الشخص، بلا طلب أي شيء.",
              en: "Following up with an article relevant to something they mentioned, asking for nothing.",
            },
            bucketId: "build",
            rationale: {
              ar: "متابعة ذات صلة بلا طلب مقابل تُظهر أن الاهتمام كان صادقًا فعلاً.",
              en: "A relevant follow-up with no ask in return shows the interest was genuine.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "تسأل «هل تحتاج محاميًا؟» خلال أول دقيقتين من اللقاء.",
              en: "Asking \"do you need a lawyer?\" within the first two minutes of meeting.",
            },
            bucketId: "transactional",
            rationale: {
              ar: "طلب العمل خلال دقائق يحوّل المحادثة إلى عرض بيع مبكر جدًا.",
              en: "Asking for work within minutes turns the conversation into a far-too-early pitch.",
            },
          },
        ],
      },
      {
        id: "act.bd.01.3",
        kind: "ordering",
        skillId: "skill.relationship-building",
        stage: 1,
        prompt: {
          ar: "رتّب مراحل محادثة تعارف حقيقية بالترتيب الصحيح.",
          en: "Order the stages of a genuine networking conversation correctly.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب من قائمة منسدلة بجانب كل مرحلة بدل السحب.",
          en: "Pick the order number from a dropdown beside each stage instead of dragging.",
        },
        hint: {
          ar: "تبادل معلومات التواصل يأتي دائمًا في النهاية، لا في البداية.",
          en: "Exchanging contact details always comes last, never first.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "تطرح سؤالاً مفتوحًا صادقًا عن عمل الشخص أو همّه الحالي.",
              en: "Ask an open, genuine question about the person's work or current concern.",
            },
            rationale: {
              ar: "نقطة البداية؛ تفتح محادثة بلا أجندة ظاهرة.",
              en: "The starting point; opens a conversation with no visible agenda.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "تستمع فعلاً وتطرح سؤالاً متابعًا مبنيًا على ما قاله.",
              en: "Actually listen, and ask a follow-up question built on what they said.",
            },
            rationale: {
              ar: "يُظهر انخراطًا حقيقيًا بدل انتظار دورك للحديث عن نفسك.",
              en: "Shows genuine engagement instead of waiting for your turn to talk about yourself.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "تذكر شيئًا عن نفسك فقط إن سأل هو، لا قبل ذلك.",
              en: "Share something about yourself only if they ask, not before.",
            },
            rationale: {
              ar: "الحديث عن نفسك حين يُطلب منك، لا حين تتطوع به.",
              en: "Talking about yourself when invited, not volunteering it unprompted.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "تتبادل معلومات التواصل فقط إن شعرتما أن هناك سببًا حقيقيًا للتواصل مجددًا.",
              en: "Exchange contact details only if you both sense a real reason to connect again.",
            },
            rationale: {
              ar: "الخطوة الأخيرة الطبيعية لختام محادثة حقيقية، لا عادة تلقائية.",
              en: "The natural final step of a real conversation, not an automatic habit.",
            },
          },
        ],
      },
      {
        id: "act.bd.01.4",
        kind: "short_written",
        skillId: "skill.relationship-building",
        secondarySkillIds: ["skill.business-development"],
        stage: 1,
        grading: "ai_rubric",
        rubricId: "rubric.business-development-written.v1",
        weight: 2,
        minChars: 120,
        context: {
          ar: [
            "التقيت في مؤتمر بتارق يونس، مدير تطوير أعمال في قِمَم للاستشارات، وذكر أن شركته تفتح فرعًا جديدًا في مدينة أخرى الشهر القادم.",
          ],
          en: [
            "At a conference, you met Tarek Younes, business development manager at Qimam Consulting, who mentioned his company is opening a new branch next month.",
          ],
        },
        prompt: {
          ar: "اكتب ما تقوله له خلال المحادثة (٣٠-٥٠ كلمة) يُظهر فضولاً صادقًا لا عرض خدمات.",
          en: "Write what you'd say to him during the conversation (30-50 words) that shows genuine curiosity, not a pitch.",
        },
        modelAnswer: {
          ar: [
            "«فرع جديد خطوة كبيرة! ما الذي دفعكم لاختيار هذا التوقيت تحديدًا؟»",
            "«هل التوسع بمدينة تعرفونها من قبل، أم سوق جديد كليًا عليكم؟»",
          ],
          en: [
            "\"A new branch is a big step! What made this specific timing right for you?\"",
            "\"Is this a market you already know, or entirely new territory for you?\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«تهانينا على الفرع الجديد. إن احتجتم مراجعة عقود التأسيس أو التراخيص، يسعدني مساعدتكم.»"],
            en: ["\"Congrats on the new branch. If you need contract or licensing review, I'd be happy to help.\""],
          },
          whatIsWrong: {
            ar: "يتحول فورًا لعرض خدمة رغم أنه لم يسأل شيئًا حقيقيًا عن التوسع بعد؛ يبدو كأجندة لا اهتمام.",
            en: "Jumps straight to a service pitch without asking anything real about the expansion first; reads as an agenda, not interest.",
          },
        },
      },
      {
        id: "act.bd.01.5",
        kind: "reflection",
        skillId: "skill.relationship-building",
        stage: 1,
        grading: "self_report",
        prompt: {
          ar: "استرجع فعالية تواصل حضرتها أخيرًا. من الشخص الوحيد الذي تتذكره فعلاً بعد أسبوع، ولماذا؟",
          en: "Recall a networking event you attended recently. Who's the one person you actually remember a week later, and why?",
        },
        followUp: {
          ar: "ما الذي فعلته أنت أو فعله هو جعل اللقاء يُتذكَّر؟",
          en: "What did you or they do that made the meeting memorable?",
        },
      },
    ],
    summaryCard: {
      id: "card.bd.01",
      title: {
        ar: "الفضول قبل الأجندة",
        en: "Curiosity Before the Agenda",
      },
      whatYouLearned: {
        ar: [
          "جمع البطاقات ليس بناء علاقات؛ الفضول الصادق هو ما يُتذكَّر.",
          "أجندة واضحة من الدقيقة الأولى تُنهي المحادثة داخليًا حتى لو استمرت ظاهريًا.",
          "تبادل معلومات التواصل خطوة أخيرة طبيعية، لا خطوة أولى مفروضة.",
        ],
        en: [
          "Collecting cards isn't building relationships; genuine curiosity is what gets remembered.",
          "An obvious agenda from minute one ends the conversation internally, even if it continues outwardly.",
          "Exchanging contact details is a natural last step, not a forced first one.",
        ],
      },
      framework: {
        name: {
          ar: "الفضول أولاً: اسأل · استمع · تذكّر · تواصل",
          en: "Curiosity First: Ask · Listen · Remember · Connect",
        },
        steps: [
          { ar: "اسأل سؤالاً صادقًا عن عمل الشخص أو همّه.", en: "Ask a genuine question about the person's work or concern." },
          { ar: "استمع فعلاً واطرح سؤالاً متابعًا.", en: "Actually listen, and ask a follow-up question." },
          { ar: "تذكّر تفصيلاً واحدًا محددًا بعد اللقاء.", en: "Remember one specific detail after the meeting." },
          { ar: "تبادل معلومات التواصل فقط إن وُجد سبب حقيقي.", en: "Exchange contact details only if there's a real reason to." },
        ],
      },
      rememberThis: {
        ar: "من يبدأ بالأجندة يُنسى؛ من يبدأ بالفضول الصادق يُتذكَّر بعد سنة.",
        en: "Whoever leads with the agenda gets forgotten; whoever leads with genuine curiosity gets remembered a year later.",
      },
      useItTomorrow: {
        ar: "في لقائك القادم، أجّل ذكر مهنتك حتى يسأل الطرف الآخر، وركّز على سؤال واحد صادق.",
        en: "At your next meeting, hold off mentioning your profession until asked, and focus on one genuine question.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.rainmaker", "src.jab-jab-right-hook"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 02 — The Follow-Up That Isn't "Let's Grab Coffee Sometime"
  // =========================================================================
  {
    id: "unit.bd.02",
    chapterId: "ch.bd.building-the-network",
    order: 2,
    title: {
      ar: "المتابعة التي لا تنتهي بـ«لنلتقِ قريبًا»",
      en: "The Follow-Up That Isn't \"Let's Grab Coffee Sometime\"",
    },
    subtitle: {
      ar: "رسالة متابعة عامة تُقرأ وتُنسى؛ رسالة تشير لتفصيل حقيقي من اللقاء تحصل على رد",
      en: "A generic follow-up gets read and forgotten; one that references a real detail from the meeting gets a reply.",
    },
    primarySkillId: "skill.relationship-building",
    skillIds: ["skill.relationship-building", "skill.staying-top-of-mind"],
    stage: 2,
    estimatedMinutes: 7,
    steps: [
      {
        kind: "hook",
        id: "s.bd.02.hook",
        text: {
          ar: "بعد ملتقى الأعمال، أرسلت لكريم صعب: «سعدت بلقائك، لنلتقِ لتناول القهوة قريبًا.» مرّ شهر، ولم يردّ. لماذا؟",
          en: "After the business forum, you messaged Karim Saab: \"Great meeting you, let's grab coffee sometime.\" A month passed, no reply. Why?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.bd.02.why",
        text: {
          ar: "رسالة المتابعة الغامضة لا تطلب شيئًا محددًا، فلا تستحق ردًا فوريًا. تبقى في صندوق الوارد حتى تُنسى تمامًا.",
          en: "A vague follow-up asks for nothing specific, so it doesn't earn an immediate reply. It sits in the inbox until it's completely forgotten.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.bd.02.goals",
        goals: {
          ar: [
            "أن تكتب رسالة متابعة تشير لتفصيل محدد من اللقاء لا لعبارة عامة.",
            "أن تمنح سببًا واضحًا وصغيرًا لإعادة التواصل، لا دعوة مفتوحة بلا موعد.",
            "أن تحدد التوقيت المناسب لإرسال المتابعة بعد اللقاء.",
          ],
          en: [
            "Write a follow-up that references a specific detail from the meeting, not a generic phrase.",
            "Give a clear, small reason to reconnect, instead of an open-ended invite with no date.",
            "Choose the right timing to send the follow-up after the meeting.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.bd.02.lesson",
        title: {
          ar: "التحديد يفوز على اللطف",
          en: "Specificity Beats Pleasantry",
        },
        body: {
          ar: [
            "«سعدت بلقائك» جملة صحيحة لكنها لا تعني شيئًا محددًا؛ يستطيع أي شخص التقاه إرسالها لأي شخص آخر. لا سبب يدفع المستلم للرد فورًا.",
            "المتابعة الفعّالة تذكر تفصيلاً واحدًا محددًا من المحادثة: مشروعًا ذكره، تحديًا واجهه، أو سؤالاً تركه بلا إجابة.",
            "دعوة «لنلتقِ قريبًا» بلا موعد أو سبب تضع كل العبء على الطرف الآخر لاقتراح الخطوة التالية، فتموت في الغالب.",
            "السبب الصغير الواضح يعمل أفضل: مقال يخصّه، تعارف مفيد له، أو سؤال متابع عن تفصيل تركه معلّقًا في المحادثة.",
            "التوقيت مهم أيضًا: رسالة خلال ٤٨ ساعة تصل واللقاء ما زال حاضرًا في ذهن الطرف الآخر؛ بعد أسبوعين، غالبًا نُسي السياق كله.",
          ],
          en: [
            "\"Great meeting you\" is true but says nothing specific; anyone could send it to anyone. There's no reason for the recipient to reply right away.",
            "An effective follow-up names one specific detail from the conversation: a project they mentioned, a challenge they faced, or a question left unanswered.",
            "An invite to \"meet sometime\" with no date or reason puts the whole burden on the other person to propose the next step, so it usually dies.",
            "A small, clear reason works better: an article relevant to them, a useful introduction, or a follow-up question about a detail left hanging in the conversation.",
            "Timing matters too: a message within 48 hours lands while the meeting is still fresh in their mind; after two weeks, the context is usually forgotten entirely.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.bd.02.visual",
        title: {
          ar: "متابعة عامة مقابل متابعة محددة",
          en: "Generic Follow-Up vs. Specific Follow-Up",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "المتابعة العامة", en: "The generic follow-up" },
            detail: {
              ar: "«سعدت بلقائك، لنلتقِ قريبًا» بلا تفصيل أو سبب واضح.",
              en: "\"Great meeting you, let's meet soon\" with no detail or clear reason.",
            },
            tone: "negative",
          },
          {
            label: { ar: "التفصيل المحدد", en: "The specific detail" },
            detail: {
              ar: "إشارة لمشروع أو تحدٍّ أو سؤال ذكره الطرف الآخر فعلاً.",
              en: "A reference to a project, challenge, or question the other person actually mentioned.",
            },
            tone: "positive",
          },
          {
            label: { ar: "السبب الصغير", en: "The small reason" },
            detail: {
              ar: "مقال، تعارف مفيد، أو إجابة على سؤال ترك معلّقًا.",
              en: "An article, a useful introduction, or an answer to a question left open.",
            },
            tone: "positive",
          },
          {
            label: { ar: "التوقيت", en: "Timing" },
            detail: {
              ar: "خلال ٤٨ ساعة، ما زال اللقاء حاضرًا في ذهن الطرف الآخر.",
              en: "Within 48 hours, the meeting is still fresh in their mind.",
            },
            tone: "neutral",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.bd.02.worked",
        strong: {
          label: {
            ar: "محامية تتابع بتفصيل محدد",
            en: "A lawyer who follows up with a specific detail",
          },
          text: {
            ar: [
              "«فادي، سعدت بحديثنا عن تحدي التوظيف في فرعكم الجديد. وجدت مقالاً قصيرًا عن عقود العمل المؤقت قد يفيدكم، أرفقه هنا.»",
              "أرسلتها خلال يوم واحد من اللقاء، بلا أي طلب أو عرض خدمة.",
            ],
            en: [
              "\"Fadi, great talking about the hiring challenge at your new branch. I found a short piece on fixed-term employment contracts that might help — attached.\"",
              "She sent it within one day of the meeting, with no ask or service pitch attached.",
            ],
          },
          why: {
            ar: "التفصيل المحدد أثبت أنها استمعت فعلاً، والمقال منحه سببًا حقيقيًا صغيرًا للرد دون أي طلب.",
            en: "The specific detail proved she'd actually listened, and the article gave him a small, real reason to reply, with no ask attached.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يتابع بعبارة عامة متأخرة",
            en: "A lawyer who follows up late with a generic line",
          },
          text: {
            ar: [
              "«مرحبًا فادي، سعدت بلقائك في الملتقى، لنلتقِ لتناول القهوة قريبًا.»",
              "أرسلها بعد ثلاثة أسابيع، بلا أي إشارة لما دار بينهما.",
            ],
            en: [
              "\"Hi Fadi, great meeting you at the forum, let's grab coffee sometime.\"",
              "He sent it three weeks later, with no reference to anything they'd actually discussed.",
            ],
          },
          why: {
            ar: "لا تفصيل يُذكّره باللقاء، ولا موعد محدد، وتأخر ثلاثة أسابيع يعني أن السياق كله تلاشى من ذاكرة فادي.",
            en: "No detail to jog his memory, no set date, and a three-week delay means the whole context had already faded from Fadi's mind.",
          },
        },
      },
      { kind: "activity", id: "s.bd.02.a1", activityId: "act.bd.02.1", mode: "quick" },
      { kind: "activity", id: "s.bd.02.a2", activityId: "act.bd.02.2", mode: "guided" },
      { kind: "activity", id: "s.bd.02.a3", activityId: "act.bd.02.3", mode: "guided" },
      { kind: "activity", id: "s.bd.02.a4", activityId: "act.bd.02.4", mode: "independent" },
      { kind: "activity", id: "s.bd.02.a5", activityId: "act.bd.02.5", mode: "independent" },
      { kind: "summary", id: "s.bd.02.summary", summaryCardId: "card.bd.02" },
      {
        kind: "apply_tomorrow",
        id: "s.bd.02.apply",
        task: {
          ar: "بعد لقائك القادم، أرسل رسالة متابعة خلال ٤٨ ساعة تذكر تفصيلاً محددًا واحدًا.",
          en: "After your next meeting, send a follow-up within 48 hours naming one specific detail.",
        },
        detail: {
          ar: "تجنّب أي عبارة عامة مثل «لنلتقِ قريبًا» بلا سبب أو موعد.",
          en: "Avoid any generic line like \"let's meet sometime\" with no reason or date.",
        },
      },
      {
        kind: "next_mission",
        id: "s.bd.02.next",
        teaser: {
          ar: "عرفت كيف تتابع بذكاء. لكن وقتك محدود، فلا يستحق كل تواصل المتابعة نفسها. الوحدة القادمة: من يستحق وقتك فعلاً.",
          en: "You know how to follow up smartly. But your time is limited, and not every contact deserves the same effort. Next unit: who's actually worth your time.",
        },
      },
    ],
    activities: [
      {
        id: "act.bd.02.1",
        kind: "multiple_choice",
        skillId: "skill.relationship-building",
        secondarySkillIds: ["skill.staying-top-of-mind"],
        stage: 2,
        context: {
          ar: [
            "التقيت أمس بدلال نصر الله، مديرة العمليات في مجموعة منارة للأغذية، وتحدثتما عن صعوبة توسّعهم لمدينة جديدة.",
          ],
          en: [
            "Yesterday you met Dalia Nasrallah, operations manager at Manara Foods Group, and discussed the difficulty of their expansion into a new city.",
          ],
        },
        prompt: {
          ar: "أي رسالة متابعة الأفضل لإرسالها اليوم؟",
          en: "Which follow-up message is best to send today?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«سعدت بلقائك أمس، لنبقَ على تواصل.»",
              en: "\"Great meeting you yesterday, let's stay in touch.\"",
            },
            rationale: {
              ar: "لا تفصيل ولا طلب واضح؛ لا تمنح دلال سببًا حقيقيًا للرد.",
              en: "No detail, no clear ask; gives Dalia no real reason to reply.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«دلال، تحدثنا أمس عن تحدي التراخيص في المدينة الجديدة. أعرف زميلاً تعامل مع ترخيص مشابه هناك، هل يفيدك تعارف سريع؟»",
              en: "\"Dalia, we talked yesterday about the licensing challenge in the new city. I know a colleague who handled a similar license there — would a quick introduction help?\"",
            },
            correct: true,
            rationale: {
              ar: "يذكر تفصيلاً محددًا ويقدم سببًا صغيرًا وواضحًا للرد، دون أي عرض خدمة قانونية.",
              en: "Names a specific detail and offers a small, clear reason to reply, with no legal-services pitch attached.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«مرحبًا دلال، هل تحتاجون محاميًا لملف التوسع؟»",
              en: "\"Hi Dalia, do you need a lawyer for the expansion file?\"",
            },
            rationale: {
              ar: "طلب مباشر للعمل بعد لقاء واحد يبدو متعجلاً ويُشعر دلال بأنها كانت هدف بيع من البداية.",
              en: "A direct ask for work after one meeting feels rushed and makes Dalia feel like she was a sales target from the start.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«سأنتظر أسبوعين حتى لا أبدو متلهفًا للتواصل.»",
              en: "\"I'll wait two weeks so I don't seem too eager to reach out.\"",
            },
            rationale: {
              ar: "التأخير المتعمد يفقد اللقاء طزاجته؛ السياق يتلاشى من ذاكرة دلال قبل أن تصلها الرسالة.",
              en: "Deliberate delay loses the meeting's freshness; the context fades from Dalia's memory before the message even arrives.",
            },
          },
        ],
      },
      {
        id: "act.bd.02.2",
        kind: "fill_blank",
        skillId: "skill.relationship-building",
        stage: 2,
        prompt: {
          ar: "أكمل رسالة المتابعة الفعّالة بالعنصرين المفقودين.",
          en: "Complete the effective follow-up message with the two missing elements.",
        },
        hint: {
          ar: "ابدأ بتفصيل محدد من اللقاء، وانتهِ بسبب صغير واضح للرد.",
          en: "Start with a specific meeting detail, end with a small, clear reason to reply.",
        },
        template: {
          ar: "«ذكرتَ أمس {{0}}، وهذا ذكّرني بـ {{1}} قد يفيدك — هل أرسله لك؟»",
          en: "\"You mentioned {{0}} yesterday, which reminded me of {{1}} that might help — should I send it over?\"",
        },
        blanks: [
          {
            id: "b1",
            options: [
              { ar: "تحديًا محددًا واجهته فعلاً", en: "a specific challenge they actually mentioned" },
              { ar: "أنك محامٍ أيضًا", en: "that they're also a lawyer" },
              { ar: "اسم مدينتك", en: "their city's name" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "التفصيل المحدد هو ما يثبت أنك استمعت فعلاً، لا أي معلومة عامة عنه.",
              en: "A specific detail is what proves you actually listened, not any generic fact about them.",
            },
          },
          {
            id: "b2",
            options: [
              { ar: "مصدرًا أو تعارفًا صغيرًا مفيدًا فعلاً", en: "a genuinely useful small resource or introduction" },
              { ar: "عرضًا لخدماتي القانونية الكاملة", en: "a full pitch of my legal services" },
              { ar: "دعوة عامة لتناول القهوة", en: "a generic coffee invite" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "سبب صغير وحقيقي يمنح ردًا سهلاً؛ عرض الخدمات المباشر يعيد المحادثة لأجندة بيع.",
              en: "A small, genuine reason makes replying easy; a direct services pitch drags the conversation back to a sales agenda.",
            },
          },
        ],
      },
      {
        id: "act.bd.02.3",
        kind: "ordering",
        skillId: "skill.relationship-building",
        stage: 2,
        prompt: {
          ar: "رتّب خطوات متابعة فعّالة بعد لقاء تواصل بالترتيب الصحيح.",
          en: "Order the steps of an effective follow-up after a networking meeting.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the order number from a dropdown beside each step instead of dragging.",
        },
        hint: {
          ar: "الوقت والتفصيل يأتيان أولاً، والالتزام الفوري لا يأتي أبدًا.",
          en: "Timing and detail come first; a demand for immediate commitment never belongs.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "أرسل الرسالة خلال ٤٨ ساعة من اللقاء.",
              en: "Send the message within 48 hours of the meeting.",
            },
            rationale: {
              ar: "التوقيت يحافظ على طزاجة السياق في ذهن الطرف الآخر.",
              en: "Timing preserves the context's freshness in the other person's mind.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "اذكر تفصيلاً محددًا واحدًا من المحادثة الفعلية.",
              en: "Name one specific detail from the actual conversation.",
            },
            rationale: {
              ar: "يثبت أن الاستماع كان حقيقيًا، لا مجاملة عابرة.",
              en: "Proves the listening was real, not a passing pleasantry.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "قدّم سببًا صغيرًا وواضحًا لإعادة التواصل.",
              en: "Offer a small, clear reason to reconnect.",
            },
            rationale: {
              ar: "يمنح ردًا سهلاً منخفض الجهد على الطرف الآخر.",
              en: "Gives the other person an easy, low-effort reason to reply.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "اترك الباب مفتوحًا دون طلب موعد أو التزام فوري.",
              en: "Leave the door open, with no demand for a date or immediate commitment.",
            },
            rationale: {
              ar: "يزيل الضغط ويترك الخطوة التالية بيد الطرف الآخر.",
              en: "Removes pressure and leaves the next step in the other person's hands.",
            },
          },
        ],
      },
      {
        id: "act.bd.02.4",
        kind: "email_rewrite",
        skillId: "skill.relationship-building",
        secondarySkillIds: ["skill.staying-top-of-mind"],
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.business-development-written.v1",
        weight: 2,
        minChars: 120,
        context: {
          ar: [
            "التقيت بنبيل فاروق، المدير العام لشركة روان لتجارة الصلب، وتحدثتما عن تأخر أحد الموردين في التسليم.",
          ],
          en: [
            "You met Nabil Farouk, managing director of Rawan Steel Trading, and discussed a supplier's delayed deliveries.",
          ],
        },
        prompt: {
          ar: "أعد صياغة رسالة المتابعة التالية لتصبح محددة وتمنح سببًا حقيقيًا للرد.",
          en: "Rewrite the following follow-up message to make it specific and give a real reason to reply.",
        },
        draft: {
          ar: ["«سعدت بلقائك يا نبيل، لنبقَ على تواصل ونلتقِ قريبًا.»"],
          en: ["\"Great meeting you Nabil, let's stay in touch and meet up soon.\""],
        },
        modelAnswer: {
          ar: [
            "«نبيل، تحدثنا عن تأخر موردكم في التسليم. أعرف بندًا تعاقديًا بسيطًا يعالج هذا النوع من التأخير في عقود مشابهة — أرسله لك إن أردت.»",
          ],
          en: [
            "\"Nabil, we discussed your supplier's delivery delays. I know a simple contract clause that addresses this kind of delay in similar agreements — happy to send it over if useful.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«سعدت بلقائك يا نبيل، لنبقَ على تواصل ونلتقِ قريبًا.»"],
            en: ["\"Great meeting you Nabil, let's stay in touch and meet up soon.\""],
          },
          whatIsWrong: {
            ar: "لا تفصيل من المحادثة الفعلية ولا سبب محدد للرد؛ رسالة يمكن إرسالها لأي شخص التقيته.",
            en: "No detail from the actual conversation and no specific reason to reply; a message that could go to literally anyone you met.",
          },
        },
      },
      {
        id: "act.bd.02.5",
        kind: "reflection",
        skillId: "skill.relationship-building",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع رسالة متابعة أرسلتها ولم تحصل على رد. ماذا كانت تفتقد؟",
          en: "Recall a follow-up message you sent that got no reply. What was missing from it?",
        },
        followUp: {
          ar: "لو أعدت كتابتها اليوم بتفصيل محدد وسبب صغير، بما كانت لتبدو؟",
          en: "If you rewrote it today with a specific detail and a small reason, what would it look like?",
        },
      },
    ],
    summaryCard: {
      id: "card.bd.02",
      title: {
        ar: "التحديد يفوز على اللطف",
        en: "Specificity Beats Pleasantry",
      },
      whatYouLearned: {
        ar: [
          "رسالة متابعة عامة لا تمنح سببًا حقيقيًا للرد.",
          "تفصيل محدد من اللقاء يثبت أنك استمعت فعلاً.",
          "التوقيت خلال ٤٨ ساعة يحافظ على طزاجة السياق.",
        ],
        en: [
          "A generic follow-up gives no real reason to reply.",
          "A specific meeting detail proves you actually listened.",
          "Sending within 48 hours keeps the context fresh.",
        ],
      },
      framework: {
        name: {
          ar: "متابعة تصل: تفصيل · سبب · توقيت",
          en: "A Follow-Up That Lands: Detail · Reason · Timing",
        },
        steps: [
          { ar: "اذكر تفصيلاً واحدًا محددًا من اللقاء.", en: "Name one specific detail from the meeting." },
          { ar: "قدّم سببًا صغيرًا وحقيقيًا لإعادة التواصل.", en: "Offer a small, genuine reason to reconnect." },
          { ar: "أرسلها خلال ٤٨ ساعة من اللقاء.", en: "Send it within 48 hours of the meeting." },
        ],
      },
      rememberThis: {
        ar: "«لنلتقِ قريبًا» ليست دعوة؛ هي جملة تُقرأ وتُنسى بلا أثر.",
        en: "\"Let's meet sometime\" isn't an invitation; it's a line that gets read and forgotten without a trace.",
      },
      useItTomorrow: {
        ar: "بعد لقائك القادم، أرسل رسالة خلال يوم واحد تذكر تفصيلاً محددًا وسببًا صغيرًا للرد.",
        en: "After your next meeting, send a message within one day that names a specific detail and a small reason to reply.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.jab-jab-right-hook", "src.ultimate-associate-marketing"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 03 — Who's Actually Worth Your Limited Time
  // =========================================================================
  {
    id: "unit.bd.03",
    chapterId: "ch.bd.building-the-network",
    order: 3,
    title: {
      ar: "من يستحق وقتك المحدود فعلاً",
      en: "Who's Actually Worth Your Limited Time",
    },
    subtitle: {
      ar: "محامٍ مبتدئ لديه ساعات قليلة لتنمية العمل؛ إنفاقها على نشاط يبدو مفيدًا لا يعني أنه كذلك فعلاً",
      en: "A junior lawyer has few hours for business development; spending them on something that feels productive doesn't mean it actually is.",
    },
    primarySkillId: "skill.business-development",
    skillIds: ["skill.business-development", "skill.relationship-building"],
    stage: 2,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.bd.03.hook",
        text: {
          ar: "لديك ساعتان فقط هذا الأسبوع لتنمية العمل. أمامك خياران: حضور مؤتمر كبير حيث ستكون وجهًا بين مئات، أو غداء مع زميل دراسة أصبح مستشارًا داخليًا في شركة متوسطة. أيهما تختار؟",
          en: "You have exactly two hours this week for business development. Two options: a large conference where you'll be one face among hundreds, or lunch with a law-school friend now in-house counsel at a mid-sized company. Which do you pick?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.bd.03.why",
        text: {
          ar: "المحامي المبتدئ لا يملك وقتًا لتجربة كل شيء. من يوزّع ساعاته القليلة على نشاط يبدو مثمرًا فعلاً بدل ما يبدو مثمرًا فقط يبني علاقات تدوم.",
          en: "A junior lawyer can't afford to try everything. Whoever spends their few hours on what's actually promising, rather than what merely looks busy, builds relationships that last.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.bd.03.goals",
        goals: {
          ar: [
            "أن تميّز بين نشاط تنمية عمل يبدو منتجًا فعلاً وآخر يبدو كذلك دون أن يكون.",
            "أن تقيّم علاقة أو نشاطًا بمعيارين: احتمال التحول لتوكيل، والوقت اللازم للحفاظ عليه.",
            "أن تختار أين تستثمر ساعاتك القليلة هذا الأسبوع بثقة.",
          ],
          en: [
            "Distinguish a business-development activity that's genuinely productive from one that merely looks productive.",
            "Judge a relationship or activity by two measures: its odds of becoming an instruction, and the time needed to maintain it.",
            "Confidently choose where to invest your few hours this week.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.bd.03.lesson",
        title: {
          ar: "منتج فعلاً أم يبدو كذلك فقط",
          en: "Actually Productive, or Just Looks That Way",
        },
        body: {
          ar: [
            "المحامي المبتدئ يملك عادة أقل من ثلاث أو أربع ساعات أسبوعيًا لتنمية العمل. كل ساعة تُنفق على نشاط منخفض العائد هي ساعة مفقودة من نشاط قد يثمر فعلاً.",
            "حضور مؤتمر كبير يشعر بالإنتاجية — عشرات المصافحات، صور جماعية، شعور بالانشغال — لكنه نادرًا ما يترك علاقة واحدة قابلة للمتابعة.",
            "المعيار الأول لتقييم أي نشاط: هل الشخص المقابل في موقع يمكنه فعلاً أن يوجّه عملاً إليك أو يعرّفك بمن يفعل؟ ليس كل صديق أو معارف يملك هذا الموقع.",
            "المعيار الثاني: كم من الوقت يحتاج الحفاظ على هذه العلاقة فعلاً؟ علاقة قديمة مبنية أصلاً تحتاج رسالة بسيطة؛ علاقة جديدة كليًا تحتاج جهدًا أكبر بكثير.",
            "الخطأ الشائع: الانشغال بأنشطة ظاهرها كبير — مؤتمرات، مقالات عامة — وإهمال علاقة قائمة فعلاً مع شخص واحد يملك موقعًا حقيقيًا لتوجيه عمل.",
          ],
          en: [
            "A junior lawyer typically has under three or four hours a week for business development. Every hour spent on a low-return activity is an hour lost from something that might actually pay off.",
            "Attending a big conference feels productive — dozens of handshakes, group photos, a busy feeling — but it rarely leaves even one relationship worth following up.",
            "The first test for any activity: is the other person actually in a position to send you work, or introduce you to someone who can? Not every friend or acquaintance holds that position.",
            "The second test: how much time does maintaining this relationship actually require? An already-built old relationship needs a simple message; a brand-new one needs far more effort.",
            "The common mistake: staying busy with high-visibility activities — conferences, general articles — while neglecting one existing relationship with someone who genuinely holds the position to send you work.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.bd.03.visual",
        title: {
          ar: "ميزان الوقت المحدود",
          en: "The Limited-Time Scale",
        },
        variant: "scale",
        items: [
          {
            label: { ar: "الانشغال الظاهر", en: "Visible busyness" },
            detail: {
              ar: "مؤتمر كبير، صور جماعية، عشرات المصافحات السريعة.",
              en: "A big conference, group photos, dozens of quick handshakes.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الموقع الحقيقي", en: "Real position" },
            detail: {
              ar: "هل يستطيع هذا الشخص فعلاً توجيه عمل إليك، أو تعريفك بمن يفعل؟",
              en: "Can this person actually send you work, or introduce you to someone who can?",
            },
            tone: "positive",
          },
          {
            label: { ar: "تكلفة الحفاظ على العلاقة", en: "Cost of maintaining it" },
            detail: {
              ar: "علاقة قائمة تحتاج رسالة بسيطة؛ علاقة جديدة كليًا تحتاج جهدًا أكبر بكثير.",
              en: "An existing relationship needs a simple message; a brand-new one needs far more effort.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "القرار الصادق", en: "The honest decision" },
            detail: {
              ar: "استثمر الساعات القليلة فيما يجمع الموقع الحقيقي مع تكلفة معقولة.",
              en: "Invest your few hours where real position meets a reasonable cost.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.bd.03.worked",
        strong: {
          label: {
            ar: "محامٍ يختار الغداء بدل المؤتمر",
            en: "A lawyer who picks lunch over the conference",
          },
          text: {
            ar: [
              "«رنا حداد مستشارة داخلية في شركة سندس للخدمات اللوجستية، وتراجع عقود الموردين شهريًا — علاقتي بها قديمة ومباشرة.»",
              "«المؤتمر سيضعني بين ثلاثمئة شخص لا أعرف أحدًا منهم فعلاً؛ سأختار الغداء مع رنا هذا الأسبوع.»",
            ],
            en: [
              "\"Rana Haddad is in-house counsel at Sundus Logistics, and reviews supplier contracts monthly — my relationship with her is old and direct.\"",
              "\"The conference puts me among three hundred people I don't actually know; I'll choose lunch with Rana this week.\"",
            ],
          },
          why: {
            ar: "قارن الموقع الحقيقي وتكلفة الحفاظ على العلاقة، لا حجم الفعالية الظاهر، فاختار الخيار الأكثر احتمالاً للإثمار.",
            en: "He weighed real position and maintenance cost, not the event's apparent size, and chose the option most likely to actually pay off.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يملأ وقته بالمؤتمرات الكبيرة",
            en: "A lawyer who fills his time with big conferences",
          },
          text: {
            ar: [
              "«حضرت ثلاثة مؤتمرات هذا الشهر، وجمعت أكثر من ثلاثين بطاقة عمل.»",
              "لم يتابع مع أي منهم لاحقًا، ولم يسأل هل أي منهم يملك موقعًا يمكنه فعلاً من توجيه عمل.",
            ],
            en: [
              "\"I attended three conferences this month, and collected over thirty business cards.\"",
              "He never followed up with any of them, and never asked whether a single one actually held a position to send work.",
            ],
          },
          why: {
            ar: "قاس نجاحه بعدد الفعاليات لا بجودة العلاقات، فأنفق ساعاته القليلة على نشاط يبدو مثمرًا دون أن يكون كذلك.",
            en: "He measured success by event count, not relationship quality, spending his few hours on something that looked productive without actually being so.",
          },
        },
      },
      { kind: "activity", id: "s.bd.03.a1", activityId: "act.bd.03.1", mode: "quick" },
      { kind: "activity", id: "s.bd.03.a2", activityId: "act.bd.03.2", mode: "guided" },
      { kind: "activity", id: "s.bd.03.a3", activityId: "act.bd.03.3", mode: "guided" },
      { kind: "activity", id: "s.bd.03.a4", activityId: "act.bd.03.4", mode: "independent" },
      { kind: "activity", id: "s.bd.03.a5", activityId: "act.bd.03.5", mode: "independent" },
      { kind: "summary", id: "s.bd.03.summary", summaryCardId: "card.bd.03" },
      {
        kind: "apply_tomorrow",
        id: "s.bd.03.apply",
        task: {
          ar: "قبل قبول أي دعوة أو نشاط تنمية عمل هذا الأسبوع، طبّق معياري الموقع الحقيقي وتكلفة الحفاظ.",
          en: "Before accepting any business-development invite this week, apply the real-position and maintenance-cost tests.",
        },
        detail: {
          ar: "إن فشل النشاط في أحد المعيارين، فكّر جديًا في رفضه أو تقليص وقتك فيه.",
          en: "If the activity fails either test, seriously consider declining it or cutting your time on it.",
        },
      },
      {
        kind: "next_mission",
        id: "s.bd.03.next",
        teaser: {
          ar: "بنيت شبكة علاقات بحكمة. الوحدة القادمة تنتقل لفصل جديد: فهم عمل عميلك فعلاً، لا مجرد مشكلته القانونية.",
          en: "You've built your network wisely. Next unit starts a new chapter: understanding your client's actual business, not just his legal problem.",
        },
      },
    ],
    activities: [
      {
        id: "act.bd.03.1",
        kind: "best_response",
        skillId: "skill.business-development",
        secondarySkillIds: ["skill.relationship-building"],
        stage: 2,
        context: {
          ar: [
            "لديك ثلاث ساعات فقط هذا الشهر لتنمية العمل. أمامك: مؤتمر إقليمي كبير (يوم كامل)، أو قهوة مع زميل دراسة أصبح مديرًا ماليًا في شركة تجارية متوسطة (ساعة واحدة).",
          ],
          en: [
            "You have exactly three hours this month for business development. Options: a full-day regional conference, or coffee with a law-school friend now CFO at a mid-sized trading company (one hour).",
          ],
        },
        prompt: {
          ar: "ما القرار الأقرب للصواب؟",
          en: "What's the more sound decision?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "احضر المؤتمر كاملاً لأنه يمنحك ظهورًا أوسع.",
              en: "Attend the full conference since it gives you wider visibility.",
            },
            rationale: {
              ar: "يستهلك كل وقتك المحدود في نشاط واسع الانتشار وضعيف الأثر الفردي، بلا علاقة حقيقية واحدة على الأرجح.",
              en: "Consumes your whole limited time budget on a broad, individually low-impact activity, with unlikely odds of a single real relationship.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "اذهب لقهوة الزميل، واحضر ساعة واحدة فقط من المؤتمر إن أمكن.",
              en: "Take the coffee with your friend, and attend just one hour of the conference if you can.",
            },
            correct: true,
            rationale: {
              ar: "الزميل يملك موقعًا حقيقيًا وعلاقة قائمة فعلاً، وتكلفة الحفاظ عليها منخفضة؛ استثمار أذكى لساعاتك القليلة.",
              en: "The friend holds a real position and an already-built relationship, at low maintenance cost — a smarter use of your few hours.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "لا تفعل أيًا منهما، وخصص الوقت لملفاتك القائمة فقط.",
              en: "Do neither, and spend the time only on your current files.",
            },
            rationale: {
              ar: "تجاهل تنمية العمل بالكامل يؤجل بناء أي علاقة تثمر لاحقًا، رغم أن ساعة واحدة كانت كافية.",
              en: "Ignoring business development entirely postpones building any relationship that could pay off later, even though one hour would have sufficed.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "احضر نصف المؤتمر ونصف القهوة لتوازن بينهما.",
              en: "Attend half the conference and half the coffee to balance both.",
            },
            rationale: {
              ar: "تقسيم وقت محدود بين نشاط ضعيف الأثر وآخر عالي الأثر يقلل فائدة كليهما دون داعٍ.",
              en: "Splitting limited time between a low-impact activity and a high-impact one weakens the benefit of both for no good reason.",
            },
          },
        ],
      },
      {
        id: "act.bd.03.2",
        kind: "categorization",
        skillId: "skill.business-development",
        stage: 2,
        prompt: {
          ar: "صنّف كل نشاط: هل احتمال إثماره عالٍ أم منخفض؟",
          en: "Sort each activity: are its odds of paying off high or low?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «احتمال عالٍ» / «احتمال منخفض» أسفل كل نشاط بدل السحب.",
          en: "Choose \"High odds\" / \"Low odds\" from buttons under each activity instead of dragging.",
        },
        buckets: [
          { id: "high", label: { ar: "احتمال عالٍ", en: "High odds" } },
          { id: "low", label: { ar: "احتمال منخفض", en: "Low odds" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "قهوة مع صديق دراسة أصبح مستشارًا داخليًا لشركة توريد.",
              en: "Coffee with a law-school friend now in-house counsel at a supply company.",
            },
            bucketId: "high",
            rationale: {
              ar: "علاقة قائمة فعلاً مع موقع حقيقي لتوجيه عمل.",
              en: "An existing relationship with a real position to send work.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "حضور ندوة عامة مفتوحة لمئات الحضور بلا تعارف مسبق.",
              en: "Attending a public seminar open to hundreds, with no prior connection.",
            },
            bucketId: "low",
            rationale: {
              ar: "لا علاقة سابقة، واحتمال تحول أي تواصل هناك لعلاقة حقيقية ضعيف.",
              en: "No prior relationship, and low odds that any contact there converts into a real one.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "غداء مع شريك سابق في مكتب آخر أحال ملفًا فعلاً من قبل.",
              en: "Lunch with a former partner at another firm who has already referred a file before.",
            },
            bucketId: "high",
            rationale: {
              ar: "سجل إحالة فعلي مثبت، وهذا أقوى دليل على الموقع الحقيقي.",
              en: "A proven referral track record — the strongest evidence of a real position.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "نشر منشور عام على مواقع التواصل بلا تفاعل مباشر مع أحد.",
              en: "Posting a general update on social media with no direct interaction with anyone.",
            },
            bucketId: "low",
            rationale: {
              ar: "واسع الانتشار وغير شخصي، ونادرًا ما يبني علاقة يمكن متابعتها.",
              en: "Broad and impersonal, rarely building a relationship you can follow up on.",
            },
          },
        ],
      },
      {
        id: "act.bd.03.3",
        kind: "priority_ranking",
        skillId: "skill.business-development",
        stage: 2,
        prompt: {
          ar: "رتّب المعايير التالية حسب أهميتها عند اختيار أين تستثمر ساعاتك القليلة.",
          en: "Rank the following criteria by importance when choosing where to invest your few hours.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الأولوية من قائمة منسدلة بجانب كل معيار بدل السحب.",
          en: "Pick the priority number from a dropdown beside each criterion instead of dragging.",
        },
        hint: {
          ar: "ابدأ بما يحدد إمكانية الإثمار أصلاً.",
          en: "Start with what determines whether the payoff is even possible.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "هل هذا الشخص في موقع يمكنه فعلاً توجيه عمل أو تعريفك بمن يفعل؟",
              en: "Is this person actually in a position to send you work, or introduce you to someone who can?",
            },
            rationale: {
              ar: "الأهم لأنه يحدد إمكانية الإثمار من الأساس.",
              en: "Most important because it determines whether payoff is even possible at all.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "كم من الوقت يحتاج الحفاظ على هذه العلاقة تحديدًا؟",
              en: "How much time does maintaining this specific relationship require?",
            },
            rationale: {
              ar: "ثانوي مباشرة؛ يحدد إن كان العائد يستحق ساعاتك النادرة.",
              en: "Right after — determines whether the return justifies your scarce hours.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "هل النشاط يبدو مهنيًا أو مثيرًا للإعجاب أمام الزملاء؟",
              en: "Does the activity look professional or impressive to colleagues?",
            },
            rationale: {
              ar: "مظهر النشاط لا يتنبأ بما إذا كان سيثمر عملاً فعليًا.",
              en: "Appearance doesn't predict whether work will actually follow.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "هل حضرت نشاطًا مشابهًا العام الماضي؟",
              en: "Did you attend a similar activity last year?",
            },
            rationale: {
              ar: "الأقل أهمية؛ عادة سابقة لا تخبرك إن كانت الفرصة الحالية تستحق وقتك اليوم.",
              en: "Least important; past habit doesn't tell you whether this specific opportunity deserves today's hours.",
            },
          },
        ],
      },
      {
        id: "act.bd.03.4",
        kind: "short_written",
        skillId: "skill.business-development",
        secondarySkillIds: ["skill.relationship-building"],
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.business-development-written.v1",
        weight: 2,
        minChars: 150,
        context: {
          ar: [
            "أمامك هذا الأسبوع: دعوة لحفل تخريج كبير لجامعة (لا تعرف أحدًا من الحضور شخصيًا)، ومكالمة متابعة مع بسام حوراني الذي التقيته سابقًا وذكر أنه يبحث عن محامٍ لملف تمويل قادم.",
          ],
          en: [
            "This week you have: an invitation to a large university graduation event (you don't personally know any attendees), and a follow-up call with Bassam Hourani, whom you met before and who mentioned he's looking for a lawyer for an upcoming financing matter.",
          ],
        },
        prompt: {
          ar: "اكتب قرارك (٤٠-٧٠ كلمة): أين تستثمر ساعتك المتاحة هذا الأسبوع ولماذا.",
          en: "Write your decision (40-70 words): where you'll invest your available hour this week and why.",
        },
        modelAnswer: {
          ar: [
            "«أختار مكالمة بسام؛ ذكر حاجة فعلية لملف تمويل، وهذا موقع حقيقي يمكن أن يتحول لتوكيل قريب.»",
            "«حفل التخرج فعالية واسعة بلا تعارف مسبق، احتمال إثمارها ضعيف مقارنة بساعة مباشرة مع بسام.»",
          ],
          en: [
            "\"I'll take Bassam's call; he mentioned an actual financing need, which is a real position that could soon become an instruction.\"",
            "\"The graduation event is broad with no prior connection — low odds of paying off compared to a direct hour with Bassam.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«سأحضر حفل التخرج لأنه فرصة جيدة للظهور أمام عدد كبير من الناس.»"],
            en: ["\"I'll attend the graduation event since it's a good chance to be seen by a lot of people.\""],
          },
          whatIsWrong: {
            ar: "يقيس القرار بعدد الحضور لا بموقعهم الحقيقي؛ يتجاهل فرصة مباشرة أعلى احتمالاً للإثمار.",
            en: "Judges the decision by headcount, not real position; ignores a direct, higher-odds opportunity already in hand.",
          },
        },
      },
      {
        id: "act.bd.03.5",
        kind: "reflection",
        skillId: "skill.business-development",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع نشاط تنمية عمل بدا مثيرًا حين قررت حضوره، لكنه لم يثمر شيئًا فعلاً. لماذا بدا مغريًا وقتها؟",
          en: "Recall a business-development activity that seemed exciting when you signed up, but delivered nothing real. Why did it seem tempting at the time?",
        },
        followUp: {
          ar: "لو طبّقت معياري الموقع الحقيقي وتكلفة الحفاظ، هل كنت لتختار غيره؟",
          en: "Had you applied the real-position and maintenance-cost tests, would you have chosen differently?",
        },
      },
    ],
    summaryCard: {
      id: "card.bd.03",
      title: {
        ar: "الموقع الحقيقي قبل الحجم الظاهر",
        en: "Real Position Before Apparent Size",
      },
      whatYouLearned: {
        ar: [
          "الانشغال الظاهر ليس دليلاً على إثمار فعلي.",
          "معياران يحددان قيمة أي نشاط: موقع الشخص الحقيقي، وتكلفة الحفاظ على العلاقة.",
          "علاقة قائمة فعلاً مع موقع حقيقي أثمن من عشرات المعارف السطحية.",
        ],
        en: [
          "Visible busyness isn't proof of real payoff.",
          "Two tests set an activity's value: the person's real position, and the cost of maintaining the relationship.",
          "One existing relationship with real position beats dozens of shallow acquaintances.",
        ],
      },
      framework: {
        name: {
          ar: "معيارا الاستثمار: الموقع · التكلفة",
          en: "The Two Investment Tests: Position · Cost",
        },
        steps: [
          { ar: "اسأل: هل يملك موقعًا حقيقيًا لتوجيه عمل؟", en: "Ask: does he hold a real position to send work?" },
          { ar: "اسأل: كم يكلّف الحفاظ على هذه العلاقة فعلاً؟", en: "Ask: what does maintaining this relationship actually cost?" },
          { ar: "استثمر ساعاتك القليلة حيث يلتقي المعياران.", en: "Invest your few hours where both tests meet." },
        ],
      },
      rememberThis: {
        ar: "ثلاثون بطاقة عمل بلا موقع حقيقي أضعف من علاقة واحدة مع من يملك سلطة توجيه عمل فعلاً.",
        en: "Thirty business cards with no real position are worth less than one relationship with someone who can actually send you work.",
      },
      useItTomorrow: {
        ar: "قبل قبول أي دعوة هذا الأسبوع، اسأل نفسك: هل هذا الشخص يملك موقعًا حقيقيًا، وهل تكلفة العلاقة معقولة؟",
        en: "Before accepting any invite this week, ask yourself: does this person hold real position, and is the relationship's cost reasonable?",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.rainmaker", "src.ali-rise"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 04 — Understanding the Client's Business, Not Just Their Legal Problem
  // =========================================================================
  {
    id: "unit.bd.04",
    chapterId: "ch.bd.understanding-the-business",
    order: 4,
    title: {
      ar: "فهم عمل العميل لا مشكلته القانونية فقط",
      en: "Understanding the Client's Business, Not Just Their Legal Problem",
    },
    subtitle: {
      ar: "محامٍ يعرف كيف يربح عميله المال يقدّم نصيحة أدقّ ويكسب ثقة أعمق من محامٍ يرى سؤالاً قانونيًا معزولاً فقط",
      en: "A lawyer who understands how a client actually makes money gives sharper advice and earns deeper trust than one who sees only an isolated legal question.",
    },
    primarySkillId: "skill.commercial-awareness",
    skillIds: ["skill.commercial-awareness", "skill.business-development"],
    stage: 2,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.bd.04.hook",
        text: {
          ar: "طلب منك نبيل فاروق مراجعة بند التأخير في عقد توريد الصلب. راجعته قانونيًا بدقة. لكنك لم تسأل: كم يكلّف تأخير أسبوع واحد شركته فعليًا؟",
          en: "Nabil Farouk asked you to review a delay clause in a steel supply contract. You reviewed it precisely, legally. But you never asked: what does one week's delay actually cost his company?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.bd.04.why",
        text: {
          ar: "نصيحة قانونية دقيقة لكنها معزولة عن واقع عمل العميل التجاري تبدو صحيحة على الورق وناقصة في الاجتماع. الثقة تُبنى حين يشعر العميل أنك تفهم عمله لا ملفه فقط.",
          en: "Legally precise advice that ignores the client's actual business reality looks correct on paper and incomplete in the room. Trust builds when the client feels you understand his business, not just his file.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.bd.04.goals",
        goals: {
          ar: [
            "أن تطرح أسئلة تكشف كيف يربح العميل المال فعلاً، لا فقط وقائع النزاع.",
            "أن تربط النصيحة القانونية بضغط تجاري حقيقي يواجهه العميل.",
            "أن تميّز بين لغة قانونية معزولة ولغة تجارية يفهمها العميل ويثق بها.",
          ],
          en: [
            "Ask questions that reveal how the client actually makes money, not just the dispute's facts.",
            "Connect legal advice to a real commercial pressure the client is facing.",
            "Distinguish isolated legal language from commercial language the client understands and trusts.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.bd.04.lesson",
        title: {
          ar: "ما وراء السؤال القانوني",
          en: "Beyond the Legal Question",
        },
        body: {
          ar: [
            "معظم المحامين الجدد يسمعون سؤالاً قانونيًا فيجيبون عليه مباشرة، دون أن يفهموا موقعه ضمن عمل العميل التجاري الأوسع.",
            "فهم كيف يربح العميل المال فعلاً — هامشه، عملاؤه الرئيسيون، موسمه — يكشف أي بند تعاقدي يستحق قتالاً حقيقيًا وأيها تفصيل ثانوي.",
            "سؤال بسيط مثل «كم يكلّفكم تأخير أسبوع في التسليم؟» يحوّل مراجعة بند قانونية جافة إلى نصيحة تحمي هامش ربح العميل فعلاً.",
            "لغة قانونية معزولة — «البند رقم سبعة يخالف نصّ المادة» — تُشعر العميل بأنه يستمع لمحاضرة. لغة تجارية — «هذا البند قد يكلفكم شهرًا من الإيرادات» — تُشعره بأنك تفهم عمله.",
            "لا يعني هذا التنبؤ بنتيجة قضية أو ضمان ربح تجاري؛ يعني فهم الضغط الحقيقي وراء السؤال القانوني، لا أكثر ولا أقل.",
          ],
          en: [
            "Most junior lawyers hear a legal question and answer it directly, without ever grasping where it sits within the client's wider commercial reality.",
            "Understanding how the client actually makes money — his margin, his key customers, his season — reveals which contract term is worth a real fight, and which is a minor detail.",
            "A simple question like \"what does a week's delivery delay cost you?\" turns a dry legal-clause review into advice that actually protects the client's profit margin.",
            "Isolated legal language — \"clause seven contravenes article X\" — makes the client feel like he's in a lecture. Commercial language — \"this clause could cost you a month's revenue\" — makes him feel understood.",
            "This doesn't mean predicting a case outcome or guaranteeing a commercial return; it means understanding the real pressure behind the legal question, no more and no less.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.bd.04.visual",
        title: {
          ar: "من السؤال القانوني إلى فهم العمل",
          en: "From the Legal Question to Understanding the Business",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "اسمع السؤال القانوني", en: "Hear the legal question" },
            detail: {
              ar: "«راجع بند التأخير في العقد.»",
              en: "\"Review the delay clause in the contract.\"",
            },
            tone: "neutral",
          },
          {
            label: { ar: "اسأل عن الأثر التجاري", en: "Ask about the commercial impact" },
            detail: {
              ar: "كم يكلّف تأخير أسبوع واحد فعليًا؟ من العميل الأكبر المتأثر؟",
              en: "What does one week's delay actually cost? Who's the biggest affected customer?",
            },
            tone: "neutral",
          },
          {
            label: { ar: "اربط النصيحة بالضغط الحقيقي", en: "Tie the advice to the real pressure" },
            detail: {
              ar: "البند يستحق تعديلاً لأنه يهدد هامشًا حقيقيًا، لا لأنه يبدو غير عادل نظريًا.",
              en: "The clause deserves changing because it threatens a real margin, not because it looks unfair in theory.",
            },
            tone: "positive",
          },
          {
            label: { ar: "تحدث بلغة يفهمها العميل", en: "Speak the client's language" },
            detail: {
              ar: "«شهر من الإيرادات» أوضح من «مخالفة للمادة السابعة» بالنسبة له.",
              en: "\"A month of revenue\" is clearer to him than \"a violation of article seven.\"",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.bd.04.worked",
        strong: {
          label: {
            ar: "محامية تسأل عن العمل قبل الرد على السؤال القانوني",
            en: "A lawyer who asks about the business before answering the legal question",
          },
          text: {
            ar: [
              "سألت يارا خوري نبيل فاروق: «قبل أن أراجع البند، كم يكلّفكم تأخير أسبوع واحد في تسليم الصلب فعليًا؟»",
              "بعد أن عرفت أن التأخير يهدد عقدًا رئيسيًا مع عميل تصنيع كبير، ركّزت مراجعتها على بند التعويض تحديدًا لا العقد بأكمله.",
            ],
            en: [
              "Yara Khoury asked Nabil Farouk: \"Before I review the clause, what does one week's steel-delivery delay actually cost you?\"",
              "Once she learned the delay threatened a major manufacturing customer's contract, she focused her review specifically on the compensation clause, not the entire agreement.",
            ],
          },
          why: {
            ar: "ربطت المراجعة القانونية بضغط تجاري حقيقي، فقدّمت نصيحة تحمي ما يهم العميل فعلاً بدل مراجعة عامة لكل بند.",
            en: "She tied the legal review to a real commercial pressure, giving advice that protected what actually mattered to the client instead of a generic review of every clause.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يراجع البند بمعزل عن العمل",
            en: "A lawyer who reviews the clause in isolation",
          },
          text: {
            ar: [
              "راجع سامي ديب البند القانوني بدقة تامة وأرسل تقريرًا من ثلاث صفحات يذكر كل مخالفة محتملة.",
              "لم يسأل نبيل عن أثر التأخير على عمله فعليًا، ولا عن أي عميل قد يتضرر.",
            ],
            en: [
              "Sami Deeb reviewed the legal clause with total precision and sent a three-page report listing every possible violation.",
              "He never asked Nabil about the delay's actual business impact, nor which customer might be hurt.",
            ],
          },
          why: {
            ar: "التقرير دقيق قانونيًا لكنه معزول عن واقع عمل نبيل؛ لم يعرف نبيل أي البنود يستحق قتالاً فعليًا وأيها ثانوي.",
            en: "The report was legally precise but detached from Nabil's business reality; Nabil never learned which clauses deserved a real fight and which were secondary.",
          },
        },
      },
      { kind: "activity", id: "s.bd.04.a1", activityId: "act.bd.04.1", mode: "quick" },
      { kind: "activity", id: "s.bd.04.a2", activityId: "act.bd.04.2", mode: "guided" },
      { kind: "activity", id: "s.bd.04.a3", activityId: "act.bd.04.3", mode: "guided" },
      { kind: "activity", id: "s.bd.04.a4", activityId: "act.bd.04.4", mode: "independent" },
      { kind: "activity", id: "s.bd.04.a5", activityId: "act.bd.04.5", mode: "independent" },
      { kind: "summary", id: "s.bd.04.summary", summaryCardId: "card.bd.04" },
      {
        kind: "apply_tomorrow",
        id: "s.bd.04.apply",
        task: {
          ar: "في اجتماعك القانوني القادم مع عميل، اطرح سؤالاً واحدًا عن كيف يربح عمله المال قبل الرد على سؤاله.",
          en: "In your next client meeting, ask one question about how his business actually makes money before answering his.",
        },
        detail: {
          ar: "استخدم الجواب لتوجيه تركيز نصيحتك القانونية، لا لملء الوقت فقط.",
          en: "Use the answer to focus your legal advice, not just to fill time.",
        },
      },
      {
        kind: "next_mission",
        id: "s.bd.04.next",
        teaser: {
          ar: "فهمت كيف يربح عميلك المال. الوحدة القادمة: كيف تستخدم هذا الفهم لتلاحظ حاجة قانونية قبل أن يطرحها هو بنفسه.",
          en: "You understand how your client makes money. Next unit: using that understanding to notice a legal need before he even asks about it.",
        },
      },
    ],
    activities: [
      {
        id: "act.bd.04.1",
        kind: "multiple_choice",
        skillId: "skill.commercial-awareness",
        secondarySkillIds: ["skill.business-development"],
        stage: 2,
        context: {
          ar: [
            "تراجع لهند زريق، مؤسسة مجموعة منارة للأغذية، عقد إيجار لمستودع جديد قبل موسم رمضان، وهو موسم الذروة لمبيعاتها.",
          ],
          en: [
            "You're reviewing a new warehouse lease for Hind Zureik, founder of Manara Foods Group, ahead of Ramadan — her peak sales season.",
          ],
        },
        prompt: {
          ar: "أي سؤال يكشف فهمك لعمل هند لا لمجرد نص العقد؟",
          en: "Which question shows you understand Hind's business, not just the contract text?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«هل تريدين أن أراجع كل بند بالتفصيل؟»",
              en: "\"Do you want me to review every clause in detail?\"",
            },
            rationale: {
              ar: "سؤال إجرائي عام لا يكشف أي فهم لضغط الموسم أو أولوياتها التجارية الفعلية.",
              en: "A generic procedural question that reveals nothing about seasonal pressure or her real commercial priorities.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«إن تأخر تسليم المستودع أسبوعًا قبل رمضان، كم يكلّف ذلك مبيعاتكم فعليًا؟»",
              en: "\"If the warehouse handover slips a week before Ramadan, what does that actually cost your sales?\"",
            },
            correct: true,
            rationale: {
              ar: "يربط بند التسليم بضغط موسمي حقيقي، فيوجّه مراجعتك القانونية نحو ما يهم هند فعلاً.",
              en: "Ties the handover clause to a real seasonal pressure, focusing your legal review on what actually matters to Hind.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«ما رأيك في الصياغة القانونية لبند التسليم؟»",
              en: "\"What's your view on the delivery clause's legal wording?\"",
            },
            rationale: {
              ar: "يطلب رأيًا قانونيًا من عميلة ليست محامية، بدل استكشاف الأثر التجاري الفعلي على عملها.",
              en: "Asks a non-lawyer client for a legal opinion, instead of exploring the actual business impact.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«سأراجع العقد وأرسل ملاحظاتي دون أسئلة إضافية.»",
              en: "\"I'll review the contract and send my notes with no further questions.\"",
            },
            rationale: {
              ar: "يفوّت فرصة فهم أولويات هند التجارية قبل المراجعة، فتأتي الملاحظات عامة لا موجّهة لما يهمها فعلاً.",
              en: "Skips the chance to learn Hind's commercial priorities before reviewing, producing generic notes instead of ones targeted at what matters to her.",
            },
          },
        ],
      },
      {
        id: "act.bd.04.2",
        kind: "categorization",
        skillId: "skill.commercial-awareness",
        stage: 2,
        prompt: {
          ar: "صنّف كل عبارة: هل هي لغة تجارية مفهومة أم لغة قانونية معزولة؟",
          en: "Sort each line: is it commercial language the client understands, or isolated legal language?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «لغة تجارية» / «لغة معزولة» أسفل كل عبارة بدل السحب.",
          en: "Choose \"Commercial language\" / \"Isolated language\" from buttons under each line instead of dragging.",
        },
        buckets: [
          { id: "commercial", label: { ar: "لغة تجارية", en: "Commercial language" } },
          { id: "isolated", label: { ar: "لغة معزولة", en: "Isolated language" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "«هذا البند قد يكلفكم شهرًا كاملاً من الإيرادات إن تأخر التسليم.»",
              en: "\"This clause could cost you a full month's revenue if delivery is delayed.\"",
            },
            bucketId: "commercial",
            rationale: {
              ar: "يربط البند برقم إيرادات ملموس يشعر به العميل مباشرة.",
              en: "Ties the clause to a concrete revenue figure the client feels directly.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "«البند السابع يخالف نص المادة الثانية من القانون التجاري.»",
              en: "\"Clause seven contravenes article two of the commercial law.\"",
            },
            bucketId: "isolated",
            rationale: {
              ar: "صحيح قانونيًا لكنه لا يقول شيئًا عن كلفته على عمل العميل.",
              en: "Technically correct but says nothing about what it costs the client's business.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "«موردكم الحالي يتحمل مخاطرة أعلى من المتوسط في هذا النوع من العقود.»",
              en: "\"Your current supplier carries above-average risk in this type of contract.\"",
            },
            bucketId: "commercial",
            rationale: {
              ar: "يصوغ الملاحظة القانونية بمصطلح مخاطرة تجارية يستطيع العميل وزنها.",
              en: "Frames the legal point in terms of business risk the client can weigh.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "«المصطلح المستخدم هنا غير دقيق من الناحية الصياغية.»",
              en: "\"The term used here is imprecise from a drafting standpoint.\"",
            },
            bucketId: "isolated",
            rationale: {
              ar: "ملاحظة صياغية بحتة بلا أي ربط بما يخسره العميل فعليًا.",
              en: "A purely drafting-level comment with no link to what the client actually stands to lose.",
            },
          },
        ],
      },
      {
        id: "act.bd.04.3",
        kind: "ordering",
        skillId: "skill.commercial-awareness",
        stage: 2,
        prompt: {
          ar: "رتّب الأسئلة التي يجب طرحها قبل تقديم نصيحة في مسألة تجارية.",
          en: "Order the questions a lawyer should ask before advising on a commercial matter.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب من قائمة منسدلة بجانب كل سؤال بدل السحب.",
          en: "Pick the order number from a dropdown beside each question instead of dragging.",
        },
        hint: {
          ar: "ابدأ بفهم كيف يربح العميل المال، وانتهِ بلغة الشرح.",
          en: "Start with understanding how the client makes money, end with the language of explanation.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "كيف يربح هذا العميل المال فعلاً — هامشه، عملاؤه الرئيسيون؟",
              en: "How does this client actually make money — his margin, his key customers?",
            },
            rationale: {
              ar: "السؤال التأسيسي الذي يبني عليه كل ما يليه.",
              en: "The foundational question everything else depends on.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "ما الضغط التجاري الحالي وراء هذا السؤال القانوني تحديدًا؟",
              en: "What's the real commercial pressure behind this specific legal question?",
            },
            rationale: {
              ar: "يربط الطلب المحدد بواقع العميل الآن.",
              en: "Connects the specific request to the client's real situation now.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "أي بند في المسألة يمسّ هذا الضغط مباشرة؟",
              en: "Which clause in the matter directly touches that pressure?",
            },
            rationale: {
              ar: "يضيّق التركيز على ما يهم فعلاً لا كل بند بالتساوي.",
              en: "Narrows focus to what actually matters, not every clause equally.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "كيف أشرح نصيحتي بلغة تصف الأثر التجاري لا النص القانوني فقط؟",
              en: "How do I explain my advice in language describing commercial impact, not just legal text?",
            },
            rationale: {
              ar: "الخطوة الأخيرة: ترجمة النتيجة القانونية للغة يفهمها العميل ويثق بها.",
              en: "The final step — translating the legal finding into language the client can act on.",
            },
          },
        ],
      },
      {
        id: "act.bd.04.4",
        kind: "short_written",
        skillId: "skill.commercial-awareness",
        secondarySkillIds: ["skill.business-development"],
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.business-development-written.v1",
        weight: 2,
        minChars: 100,
        context: {
          ar: [
            "يطلب منك عادل منصور، مورّد مياه لدى شركة ينابيع للمياه، مراجعة بند فسخ في عقد توزيع مع متجر كبير. ذكر أن هذا المتجر يشكّل ٤٠٪ من مبيعاته.",
          ],
          en: [
            "Adel Mansour, a supplier at Yanabee Water Co., asks you to review a termination clause in a distribution contract with a major retailer. He mentions this retailer is 40% of his sales.",
          ],
        },
        prompt: {
          ar: "اكتب سؤالاً واحدًا (٢٠-٤٠ كلمة) تطرحه على عادل قبل المراجعة، يكشف فهمك للضغط التجاري الحقيقي وراء طلبه.",
          en: "Write one question (20-40 words) you'd ask Adel before reviewing, showing you understand the real commercial pressure behind his request.",
        },
        modelAnswer: {
          ar: [
            "«إن فسخ المتجر العقد فجأة، هل لديكم عميل بديل جاهز يعوّض ٤٠٪ من مبيعاتكم، أم أن الفجوة ستكون فورية وحادة؟»",
          ],
          en: [
            "\"If the retailer terminates suddenly, do you have a ready alternative customer to cover 40% of your sales, or would the gap be immediate and severe?\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«هل تريد أن أراجع بند الفسخ كاملاً وأرسل لك ملاحظاتي القانونية؟»"],
            en: ["\"Do you want me to review the whole termination clause and send you my legal notes?\""],
          },
          whatIsWrong: {
            ar: "سؤال إجرائي بحت لا يستكشف حجم الخطر التجاري الفعلي الذي ذكره عادل بنفسه.",
            en: "A purely procedural question that never explores the actual business risk Adel himself just flagged.",
          },
        },
      },
      {
        id: "act.bd.04.5",
        kind: "reflection",
        skillId: "skill.commercial-awareness",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع ملفًا راجعته قانونيًا بدقة لكنك لم تسأل يومًا كيف يربح ذلك العميل المال فعلاً. ماذا فاتك؟",
          en: "Recall a file you reviewed with full legal precision, but never asked how that client actually makes money. What did you miss?",
        },
        followUp: {
          ar: "لو سألت اليوم، أي سؤال تجاري كان سيغيّر تركيز مراجعتك؟",
          en: "If you asked today, which commercial question would have changed your review's focus?",
        },
      },
    ],
    summaryCard: {
      id: "card.bd.04",
      title: {
        ar: "فهم العمل قبل الرد على السؤال",
        en: "Understanding the Business Before Answering the Question",
      },
      whatYouLearned: {
        ar: [
          "نصيحة قانونية دقيقة لكن معزولة عن عمل العميل تبدو ناقصة في الاجتماع.",
          "سؤال بسيط عن كيف يربح العميل المال يوجّه المراجعة نحو ما يهم فعلاً.",
          "اللغة التجارية تبني الثقة؛ اللغة القانونية المعزولة تُشعر العميل بأنه في محاضرة.",
        ],
        en: [
          "Legally precise advice detached from the client's business looks incomplete in the room.",
          "A simple question about how the client makes money focuses the review on what actually matters.",
          "Commercial language builds trust; isolated legal language makes the client feel lectured at.",
        ],
      },
      framework: {
        name: {
          ar: "ما وراء السؤال: العمل · الضغط · اللغة",
          en: "Beyond the Question: Business · Pressure · Language",
        },
        steps: [
          { ar: "اسأل كيف يربح العميل المال فعلاً.", en: "Ask how the client actually makes money." },
          { ar: "حدد الضغط التجاري الحقيقي وراء طلبه.", en: "Identify the real commercial pressure behind his request." },
          { ar: "اربط النصيحة القانونية بذلك الضغط تحديدًا.", en: "Tie your legal advice to that specific pressure." },
          { ar: "اشرح النتيجة بلغة تصف الأثر التجاري لا النص فقط.", en: "Explain the result in language describing commercial impact, not just legal text." },
        ],
      },
      rememberThis: {
        ar: "محامٍ يفهم كيف يربح عميله المال يُثق به أكثر من محامٍ يعرف القانون فقط.",
        en: "A lawyer who understands how his client makes money is trusted more than one who only knows the law.",
      },
      useItTomorrow: {
        ar: "في مراجعتك القادمة، اطرح سؤالاً واحدًا عن الأثر التجاري قبل أن تبدأ بالنص القانوني.",
        en: "In your next review, ask one question about the commercial impact before you start on the legal text.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.they-ask-you-answer", "src.selling-the-invisible"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 05 — Spotting a Legal Need Before the Client Does
  // =========================================================================
  {
    id: "unit.bd.05",
    chapterId: "ch.bd.understanding-the-business",
    order: 5,
    title: {
      ar: "اكتشاف حاجة قانونية قبل أن يطرحها العميل",
      en: "Spotting a Legal Need Before the Client Does",
    },
    subtitle: {
      ar: "توسّع، توظيف جديد، أو مورّد جديد — كلها إشارات تسبق مشكلة قانونية بأشهر؛ من يقرأها يقدّم قيمة حقيقية لا عرض بيع",
      en: "An expansion, a new hire, a new supplier — each signals a legal issue months before it becomes one; reading it is real value, not a sales pitch.",
    },
    primarySkillId: "skill.commercial-awareness",
    skillIds: ["skill.commercial-awareness", "skill.converting-interest-to-instructions"],
    stage: 3,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.bd.05.hook",
        text: {
          ar: "أخبرتك هند زريق بفخر أنها ستفتح فرعًا ثانيًا لمجموعة منارة للأغذية الشهر القادم. لم تسألك عن أي شيء قانوني. هل تصمت، أم تلاحظ ما لم تلاحظه هي بعد؟",
          en: "Hind Zureik proudly told you Manara Foods Group is opening a second branch next month. She didn't ask about anything legal. Do you stay quiet, or notice what she hasn't yet?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.bd.05.why",
        text: {
          ar: "الانتظار حتى يطرح العميل السؤال القانوني يعني أنك تتفاعل بعد فوات الأوان غالبًا. من يلاحظ الإشارة مبكرًا يقدّم قيمة حقيقية، لا عرض بيع مقنّعًا.",
          en: "Waiting for the client to ask the legal question usually means reacting after it's too late. Whoever notices the signal early delivers real value, not a disguised sales pitch.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.bd.05.goals",
        goals: {
          ar: [
            "أن تقرأ إشارات تجارية شائعة — توسّع، توظيف، مورّد جديد — كمؤشرات لحاجة قانونية قادمة.",
            "أن تطرح الملاحظة كقيمة مضافة صادقة لا كعرض خدمة مباشر.",
            "أن تفرّق بين المبالغة في التحذير والتنبيه الصادق المفيد.",
          ],
          en: [
            "Read common business signals — expansion, hiring, a new supplier — as indicators of a coming legal need.",
            "Raise the observation as genuine added value, not a direct services pitch.",
            "Distinguish overblown alarm-raising from honest, useful flagging.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.bd.05.lesson",
        title: {
          ar: "الإشارة قبل الأزمة",
          en: "The Signal Before the Crisis",
        },
        body: {
          ar: [
            "كل تغيير في عمل العميل — فرع جديد، موظف بمنصب حساس، مورّد أول مرة — يحمل غالبًا حاجة قانونية لم يفكر بها العميل بعد لأنه يركّز على الجانب التجاري.",
            "فرع جديد يعني غالبًا: ترخيصًا محليًا مختلفًا، عقد إيجار بشروط جديدة، وربما نظامًا ضريبيًا مختلفًا. توظيف بمنصب حساس يعني: عقد عمل يحمي معلومات سرّية فعلاً لا نموذجًا عامًا.",
            "الفرق بين الملاحظة المفيدة وعرض البيع المقنّع: الملاحظة المفيدة محددة ومربوطة بما ذكره العميل فعلاً، لا تحذيرًا عامًا من كل شيء ممكن أن يحدث.",
            "المبالغة في التحذير — «يجب أن تراجعوا كل عقودكم فورًا» — تُشعر العميل بالتخويف لا بالمساعدة. الملاحظة الدقيقة تخدم نقطة واحدة محددة يفهمها فورًا.",
            "هذا لا يعني التنبؤ بمشكلة قانونية أكيدة أو ضمان نتيجة؛ يعني فقط الإشارة إلى احتمال يستحق تفكيرًا مبكرًا، بصياغة تترك القرار للعميل بالكامل.",
          ],
          en: [
            "Every change in a client's business — a new branch, a hire in a sensitive role, a first-time supplier — usually carries a legal need the client hasn't thought of yet because he's focused on the commercial side.",
            "A new branch usually means: a different local license, a lease with new terms, and possibly a different tax regime. A hire in a sensitive role means: an employment contract that actually protects confidential information, not a generic template.",
            "The difference between a useful observation and a disguised pitch: a useful one is specific and tied to what the client actually mentioned, not a broad warning about everything that could possibly go wrong.",
            "Overblown warnings — \"you must review every single contract immediately\" — make the client feel scared, not helped. A precise observation serves one specific point he grasps right away.",
            "This doesn't mean predicting a certain legal problem or guaranteeing an outcome; it just means flagging a possibility worth early thought, phrased so the decision stays entirely the client's.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.bd.05.visual",
        title: {
          ar: "من الإشارة التجارية إلى القيمة المضافة",
          en: "From Business Signal to Added Value",
        },
        variant: "timeline",
        items: [
          {
            label: { ar: "العميل يشارك خبرًا تجاريًا", en: "The client shares business news" },
            detail: {
              ar: "«سنفتح فرعًا ثانيًا الشهر القادم.»",
              en: "\"We're opening a second branch next month.\"",
            },
            tone: "neutral",
          },
          {
            label: { ar: "تلاحظ الحاجة القانونية المحتملة", en: "You notice the possible legal need" },
            detail: {
              ar: "ترخيص محلي مختلف؟ عقد إيجار بشروط جديدة؟",
              en: "A different local license? A lease with new terms?",
            },
            tone: "neutral",
          },
          {
            label: { ar: "تطرح ملاحظة محددة لا تحذيرًا عامًا", en: "You raise a specific note, not a general warning" },
            detail: {
              ar: "«هل تحققتم من متطلبات الترخيص في المدينة الجديدة؟»",
              en: "\"Have you checked the licensing requirements in the new city?\"",
            },
            tone: "positive",
          },
          {
            label: { ar: "تترك القرار للعميل بالكامل", en: "You leave the decision entirely to the client" },
            detail: {
              ar: "بلا ضغط أو مبالغة، فقط إشارة صادقة تستحق تفكيرًا.",
              en: "No pressure, no exaggeration — just an honest signal worth thinking about.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.bd.05.worked",
        strong: {
          label: {
            ar: "محامية تلاحظ إشارة توظيف حساس",
            en: "A lawyer who notices a sensitive-hire signal",
          },
          text: {
            ar: [
              "ذكر نبيل فاروق أن روان لتجارة الصلب توظف مديرًا تجاريًا جديدًا سيطّلع على كل قوائم عملائها وأسعارها.",
              "قالت يارا: «بما أن هذا المنصب سيطّلع على معلومات حساسة، هل عقد عمله الحالي يتضمن بند حماية معلومات وعدم منافسة واضحًا؟»",
            ],
            en: [
              "Nabil Farouk mentioned Rawan Steel Trading is hiring a new commercial manager who'll see all its customer lists and pricing.",
              "Yara said: \"Since this role will access sensitive information, does his employment contract include a clear confidentiality and non-compete clause?\"",
            ],
          },
          why: {
            ar: "ربطت الملاحظة بتفصيل ذكره نبيل بنفسه، فبدت قيمة صادقة لا محاولة بيع. نبيل شعر أنها تفكر في مصلحته فعلاً.",
            en: "She tied the observation to a detail Nabil himself mentioned, so it read as genuine value, not a sales attempt. Nabil felt she was actually thinking about his interests.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يحوّل الملاحظة لتحذير عام",
            en: "A lawyer who turns the observation into a blanket warning",
          },
          text: {
            ar: [
              "سمع سامي الخبر نفسه، فقال: «يجب أن تراجعوا جميع عقود موظفيكم فورًا، هذا أمر خطير جدًا.»",
              "لم يربط ملاحظته بالمنصب الجديد تحديدًا، ولم يشرح لماذا هذا الموظف بالذات يستحق اهتمامًا إضافيًا.",
            ],
            en: [
              "Sami heard the same news and said: \"You need to review all your employee contracts immediately, this is very serious.\"",
              "He never tied the observation to the specific new role, and never explained why this particular hire deserved extra attention.",
            ],
          },
          why: {
            ar: "التحذير العام المبالغ فيه يبدو تخويفًا لا نصيحة موجّهة، ويجعل نبيل يشك في أن الهدف بيع خدمة مراجعة شاملة.",
            en: "The exaggerated, blanket warning reads as scare tactics, not targeted advice, and makes Nabil suspect the real goal is selling a sweeping review service.",
          },
        },
      },
      { kind: "activity", id: "s.bd.05.a1", activityId: "act.bd.05.1", mode: "quick" },
      { kind: "activity", id: "s.bd.05.a2", activityId: "act.bd.05.2", mode: "guided" },
      { kind: "activity", id: "s.bd.05.a3", activityId: "act.bd.05.3", mode: "guided" },
      { kind: "activity", id: "s.bd.05.a4", activityId: "act.bd.05.4", mode: "independent" },
      { kind: "activity", id: "s.bd.05.a5", activityId: "act.bd.05.5", mode: "independent" },
      { kind: "summary", id: "s.bd.05.summary", summaryCardId: "card.bd.05" },
      {
        kind: "apply_tomorrow",
        id: "s.bd.05.apply",
        task: {
          ar: "في محادثتك القادمة مع عميل، استمع لخبر تجاري واحد واطرح سؤالاً محددًا مرتبطًا به.",
          en: "In your next client conversation, listen for one piece of business news and ask one specific related question.",
        },
        detail: {
          ar: "احرص أن يكون السؤال مرتبطًا بما قاله فعلاً، لا تحذيرًا عامًا.",
          en: "Make sure the question ties to what he actually said, not a generic warning.",
        },
      },
      {
        kind: "next_mission",
        id: "s.bd.05.next",
        teaser: {
          ar: "لاحظت الإشارة قبل الأزمة. الوحدات القادمة تنقلك من الملاحظة الصادقة إلى تحويل الاهتمام الفعلي لتوكيل حقيقي.",
          en: "You've learned to spot the signal before the crisis. The units ahead take you from a genuine observation to turning real interest into an actual instruction.",
        },
      },
    ],
    activities: [
      {
        id: "act.bd.05.1",
        kind: "multiple_choice",
        skillId: "skill.commercial-awareness",
        secondarySkillIds: ["skill.converting-interest-to-instructions"],
        stage: 3,
        context: {
          ar: [
            "ذكرت هند زريق خلال اجتماع عادي أن مجموعة منارة للأغذية ستتعاقد قريبًا مع مورّد دقيق جديد من خارج البلاد لأول مرة.",
          ],
          en: [
            "During a routine meeting, Hind Zureik mentioned that Manara Foods Group will soon sign with a new overseas flour supplier for the first time.",
          ],
        },
        prompt: {
          ar: "ما أفضل رد يقدّم قيمة مضافة دون أن يبدو عرض بيع؟",
          en: "What's the best response that adds value without sounding like a pitch?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«يجب أن أراجع كل عقود التوريد لديكم فورًا، هذا خطر كبير.»",
              en: "\"I need to review all your supply contracts immediately, this is a big risk.\"",
            },
            rationale: {
              ar: "تحذير عام ومبالغ فيه غير مرتبط بالتفصيل المحدد الذي ذكرته هند، يبدو تخويفًا لا مساعدة.",
              en: "A broad, exaggerated warning unrelated to the specific detail Hind mentioned; reads as scare tactics, not help.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«بما أنه أول تعامل مع مورّد أجنبي، هل حُسمت شروط الشحن والمسؤولية عن التلف أثناء النقل؟»",
              en: "\"Since it's your first deal with an overseas supplier, have shipping terms and damage-in-transit liability been settled?\"",
            },
            correct: true,
            rationale: {
              ar: "ملاحظة محددة مرتبطة مباشرة بما ذكرته هند، تقدّم قيمة صادقة بدل تحذير عام.",
              en: "A specific observation directly tied to what Hind mentioned, offering genuine value instead of a generic warning.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«لا تعليق، ليست هذه مسؤوليتي حتى تطلب هي مني ذلك.»",
              en: "\"No comment — not my responsibility until she asks me.\"",
            },
            rationale: {
              ar: "الصمت التام يفوّت فرصة قيمة حقيقية مبكرة يقدّرها العميل لاحقًا.",
              en: "Total silence wastes a genuine, early value-add opportunity the client would likely appreciate later.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«أخبرها أن أي مورّد أجنبي عادة ما يجلب مشاكل قانونية جسيمة.»",
              en: "\"Tell her that any overseas supplier usually brings serious legal problems.\"",
            },
            rationale: {
              ar: "تعميم مخيف بلا تفصيل محدد يبدو مبالغة عامة لا ملاحظة مفيدة موجّهة.",
              en: "A scary generalization with no specific detail reads as blanket alarm, not targeted, useful observation.",
            },
          },
        ],
      },
      {
        id: "act.bd.05.2",
        kind: "matching",
        skillId: "skill.commercial-awareness",
        stage: 3,
        prompt: {
          ar: "طابق كل إشارة تجارية بالحاجة القانونية التي تكشفها غالبًا.",
          en: "Match each business signal to the legal need it typically flags.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الحاجة القانونية المطابقة من قائمة منسدلة بجانب كل إشارة بدل السحب.",
          en: "Pick the matching legal-need number from a dropdown beside each signal instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "فرع جديد في مدينة أخرى", en: "A new branch in another city" },
            right: { ar: "ترخيص محلي وعقد إيجار بشروط مختلفة", en: "A different local license and lease terms" },
            rationale: {
              ar: "كل مدينة قد تحمل متطلبات ترخيص وضريبة مختلفة عن الفرع الأصلي.",
              en: "Each city may carry different licensing and tax requirements than the original branch.",
            },
          },
          {
            id: "p2",
            left: { ar: "توظيف مدير يطّلع على أسرار تجارية", en: "Hiring a manager who accesses trade secrets" },
            right: { ar: "بند حماية معلومات وعدم منافسة واضح", en: "A clear confidentiality and non-compete clause" },
            rationale: {
              ar: "منصب يطّلع على معلومات حساسة يحتاج حماية تعاقدية أقوى من نموذج عام.",
              en: "A role with access to sensitive information needs stronger contractual protection than a generic template.",
            },
          },
          {
            id: "p3",
            left: { ar: "أول تعاقد مع مورّد من خارج البلاد", en: "First contract with an overseas supplier" },
            right: { ar: "شروط شحن ومسؤولية واضحة عن التلف", en: "Clear shipping and damage-liability terms" },
            rationale: {
              ar: "التعامل الدولي الأول يحمل مخاطر شحن ومسؤولية لم تُختبر محليًا من قبل.",
              en: "A first international deal carries shipping and liability risks never tested domestically before.",
            },
          },
          {
            id: "p4",
            left: { ar: "زيادة كبيرة ومفاجئة في حجم الطلبات", en: "A sudden large jump in order volume" },
            right: { ar: "مراجعة قدرة الموردين الحاليين على الوفاء تعاقديًا", en: "Reviewing whether current suppliers can contractually meet the new volume" },
            rationale: {
              ar: "نمو سريع قد يتجاوز طاقة عقود التوريد الحالية دون أن يلاحظ العميل ذلك.",
              en: "Rapid growth can outpace what existing supply contracts actually promise, without the client noticing.",
            },
          },
        ],
      },
      {
        id: "act.bd.05.3",
        kind: "ordering",
        skillId: "skill.commercial-awareness",
        stage: 3,
        prompt: {
          ar: "رتّب خطوات طرح ملاحظة قانونية استباقية بشكل جيد.",
          en: "Order the steps of raising a proactive legal observation well.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the order number from a dropdown beside each step instead of dragging.",
        },
        hint: {
          ar: "الملاحظة الجيدة تنتهي بترك القرار للعميل، لا بالضغط عليه.",
          en: "A good observation ends by leaving the decision to the client, not pressuring him.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "استمع لخبر تجاري يشاركه العميل دون أن يطلب رأيًا قانونيًا.",
              en: "Listen to business news the client shares, without being asked for legal input.",
            },
            rationale: {
              ar: "الإشارة تصل غالبًا ضمن حديث عادي، لا طلب رسمي.",
              en: "The signal usually arrives inside ordinary conversation, not a formal request.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "اربط الخبر بحاجة قانونية محددة مرتبطة به مباشرة.",
              en: "Link the news to a specific legal need directly tied to it.",
            },
            rationale: {
              ar: "التحديد هو ما يميّز ملاحظة حقيقية عن تحذير عام.",
              en: "Specificity is what separates a real insight from a generic warning.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "اطرح الملاحظة كسؤال أو تنبيه، لا كتحذير قاطع أو وعد بنتيجة.",
              en: "Raise the observation as a question or a heads-up, not a blanket warning or a promised outcome.",
            },
            rationale: {
              ar: "صياغة السؤال تُبقي القرار بيد العميل وتتجنّب طابع التخويف.",
              en: "Framing it as a question keeps the client in control and avoids sounding alarmist.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "اترك القرار للعميل بالكامل دون ضغط لمتابعة الأمر معك فورًا.",
              en: "Leave the decision entirely to the client, with no pressure to follow up with you right away.",
            },
            rationale: {
              ar: "احترام استقلالية القرار هو ما يجعل الإشارة قيمة صادقة لا أسلوب بيع.",
              en: "Respecting the client's autonomy is what makes the gesture read as value, not a sales tactic.",
            },
          },
        ],
      },
      {
        id: "act.bd.05.4",
        kind: "short_written",
        skillId: "skill.commercial-awareness",
        secondarySkillIds: ["skill.converting-interest-to-instructions"],
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.business-development-written.v1",
        weight: 2,
        minChars: 100,
        context: {
          ar: [
            "أخبرك عادل منصور أن شركة ينابيع للمياه ستوقّع قريبًا عقدًا حصريًا مع سلسلة متاجر كبرى لأول مرة، بعد سنوات من التعامل مع متاجر صغيرة متفرقة.",
          ],
          en: [
            "Adel Mansour tells you Yanabee Water Co. will soon sign its first exclusive contract with a major retail chain, after years of dealing with scattered small stores.",
          ],
        },
        prompt: {
          ar: "اكتب ملاحظة واحدة (٣٠-٥٠ كلمة) تقدّمها لعادل تكشف حاجة قانونية مرتبطة بهذا التحول تحديدًا، دون مبالغة.",
          en: "Write one observation (30-50 words) for Adel that flags a legal need tied specifically to this shift, without overstating it.",
        },
        modelAnswer: {
          ar: [
            "«بما أن هذا أول عقد حصري لكم، هل بند الحصرية يحدد حدًا زمنيًا وشروط إنهاء واضحة، أم أنه مفتوح بلا سقف؟ يستحق النظر قبل التوقيع.»",
          ],
          en: [
            "\"Since this is your first exclusive deal, does the exclusivity clause set a clear time limit and exit terms, or is it open-ended? Worth a look before signing.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«عليكم مراجعة كل عقودكم مع كل المتاجر قبل توقيع أي شيء جديد.»"],
            en: ["\"You need to review every contract with every store before signing anything new.\""],
          },
          whatIsWrong: {
            ar: "تحذير عام غير مرتبط بالتحول المحدد الذي ذكره عادل؛ يبدو مبالغة تدفع لمراجعة شاملة غير ضرورية.",
            en: "A blanket warning unrelated to the specific shift Adel mentioned; reads as overkill pushing an unnecessary sweeping review.",
          },
        },
      },
      {
        id: "act.bd.05.5",
        kind: "reflection",
        skillId: "skill.commercial-awareness",
        stage: 3,
        grading: "self_report",
        prompt: {
          ar: "استرجع خبرًا تجاريًا شاركه عميل معك مؤخرًا دون طلب رأي قانوني. أي حاجة قانونية محتملة لم تلاحظها وقتها؟",
          en: "Recall business news a client shared with you recently, without asking for legal input. What potential legal need did you miss noticing at the time?",
        },
        followUp: {
          ar: "لو لاحظتها، كيف كنت لتطرحها كملاحظة صادقة لا كعرض بيع؟",
          en: "Had you noticed it, how would you have raised it as a genuine observation, not a pitch?",
        },
      },
    ],
    summaryCard: {
      id: "card.bd.05",
      title: {
        ar: "الإشارة قبل الأزمة",
        en: "The Signal Before the Crisis",
      },
      whatYouLearned: {
        ar: [
          "تغيّر في عمل العميل — فرع، توظيف، مورّد جديد — يحمل غالبًا حاجة قانونية لم يلاحظها بعد.",
          "الملاحظة المفيدة محددة ومرتبطة بما ذكره العميل، لا تحذير عام مبالغ فيه.",
          "ترك القرار للعميل بالكامل هو ما يجعل الملاحظة قيمة صادقة لا عرض بيع مقنّعًا.",
        ],
        en: [
          "A change in a client's business — a branch, a hire, a new supplier — usually carries a legal need he hasn't noticed yet.",
          "A useful observation is specific and tied to what the client actually said, not an exaggerated blanket warning.",
          "Leaving the decision entirely to the client is what makes the observation genuine value, not a disguised pitch.",
        ],
      },
      framework: {
        name: {
          ar: "من الإشارة إلى القيمة: استمع · اربط · اطرح · اترك",
          en: "From Signal to Value: Listen · Link · Raise · Leave",
        },
        steps: [
          { ar: "استمع للخبر التجاري دون البحث فورًا عن فرصة بيع.", en: "Listen to the business news without immediately hunting for a sale." },
          { ar: "اربطه بحاجة قانونية محددة مرتبطة به مباشرة.", en: "Link it to a specific legal need directly tied to it." },
          { ar: "اطرح الملاحظة كسؤال صادق لا تحذيرًا قاطعًا.", en: "Raise the observation as a genuine question, not a blanket warning." },
          { ar: "اترك القرار للعميل بالكامل دون ضغط.", en: "Leave the decision entirely to the client, with no pressure." },
        ],
      },
      rememberThis: {
        ar: "من يلاحظ الإشارة قبل أن تصبح أزمة يقدّم قيمة صادقة؛ من يحوّل كل إشارة لتحذير عام يبدو بائعًا خائفًا.",
        en: "Whoever notices the signal before it becomes a crisis offers real value; whoever turns every signal into a blanket warning looks like an anxious salesman.",
      },
      useItTomorrow: {
        ar: "في محادثتك القادمة مع عميل، استمع لخبر تجاري واحد واسأل سؤالاً محددًا مرتبطًا به بدل الصمت أو التحذير العام.",
        en: "In your next client conversation, listen for one piece of business news and ask one specific, related question, instead of staying silent or issuing a blanket warning.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.they-ask-you-answer", "src.game-changing-attorney"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
