/**
 * Legal English for Client Communication — units 6 to 10.
 *
 * Chapters: `ch.le.explaining-and-planning` (units 6–7) and
 * `ch.le.writing-and-pressure` (units 8–10).
 *
 * Target language practised: English. Instruction and rationales are bilingual.
 * Rubrics are referenced by id and defined in ../framework/rubrics.
 *
 * No `simulation` steps appear here: the two simulations of this path sit in
 * units 2 and 5.
 */

import type { UnitDef } from "../types";

export const LE_UNITS_06_10: UnitDef[] = [
  // =========================================================================
  // unit.le.06 — Discussing Dates and Deadlines
  // =========================================================================
  {
    id: "unit.le.06",
    chapterId: "ch.le.explaining-and-planning",
    order: 6,
    title: {
      ar: "الحديث عن التواريخ والمهل بالإنجليزية",
      en: "Discussing Dates and Deadlines",
    },
    subtitle: {
      ar: "تاريخ لا يُقرأ بطريقتين، والتزام واضح بلا مبالغة ولا تهرّب",
      en: "A date that cannot be read two ways, and a commitment without hedging or over-promising",
    },
    primarySkillId: "skill.le-dates-deadlines",
    skillIds: ["skill.le-dates-deadlines", "skill.le-explaining-next-steps"],
    stage: 3,
    estimatedMinutes: 10,
    targetLevel: 3,
    sourceIds: ["src.legal-project-management", "src.client-centered-law-firm"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
    steps: [
      {
        kind: "hook",
        id: "st.le.06.hook",
        text: {
          ar: "موكّلك في دبي يقرأ 03/04 على أنه الثالث من نيسان. المحامي المقابل في شيكاغو يقرأها على أنها الرابع من آذار. كلاهما واثق. أحدهما سيفوّت المهلة.",
          en: "Your client in Dubai reads 03/04 as 3 April. Opposing counsel in Chicago reads it as 4 March. Both are certain. One of them will miss the deadline.",
        },
      },
      {
        kind: "why_it_matters",
        id: "st.le.06.why",
        text: {
          ar: "المهل هي الشيء الوحيد في الملف الذي لا يقبل إعادة التفاوض. حين تكتب تاريخاً غامضاً أو تلتزم بعبارة مطّاطة، تكون قد نقلت المخاطرة من الخصم إلى نفسك.",
          en: "Deadlines are the one thing in a file that cannot be renegotiated afterwards. An ambiguous date or a vague commitment moves the risk from the other side onto you.",
        },
      },
      {
        kind: "learning_goal",
        id: "st.le.06.goals",
        goals: {
          ar: [
            "تكتب التاريخ بصيغة لا تحتمل قراءتين، مهما اختلفت جنسية القارئ.",
            "تميّز عملياً بين by و within و no later than وتستعمل كلاً منها في موضعه.",
            "تلتزم بموعد بالإنجليزية بجملة واحدة واضحة، دون «as soon as possible» ودون وعد لا تملكه.",
          ],
          en: [
            "Write a date that cannot be read two ways, whoever is reading it.",
            "Use “by”, “within” and “no later than” for what each one actually means.",
            "Commit to a date in one clean English sentence — no “as soon as possible”, no promise you do not control.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "st.le.06.lesson",
        title: {
          ar: "أربع قواعد تجعل تاريخك مقروءاً في أي مكتب",
          en: "Four rules that make your date readable in any office",
        },
        body: {
          ar: [
            "١. اكتب الشهر بحروفه: «3 April 2026» أو «April 3, 2026». لا تكتب 03/04 في مراسلة مهنية أبداً.",
            "٢. أضف اسم اليوم: «Thursday 7 May 2026». اسم اليوم يكشف الخطأ تلقائياً إذا وقع.",
            "٣. by = في هذا اليوم أو قبله. within = مدة تُحسب من نقطة بداية يجب ذكرها. no later than = نفس معنى by مع تشديد يُستعمل مع الخصم لا مع الموكّل.",
            "٤. التزم بالتاريخ لا بالنتيجة: «I will send you the draft by Thursday 7 May» أوضح وأأمن من «I'll get it to you as soon as I can».",
          ],
          en: [
            "1. Spell the month: “3 April 2026” or “April 3, 2026”. Never 03/04 in professional correspondence.",
            "2. Add the weekday: “Thursday 7 May 2026”. The day name catches the error for you if there is one.",
            "3. “by” = on that day or earlier. “within” = a period counted from a starting point you must name. “no later than” = the same as “by”, with pressure — good for the other side, heavy for a client.",
            "4. Commit to the date, not the outcome: “I will send you the draft by Thursday 7 May” is clearer and safer than “I'll get it to you as soon as I can.”",
          ],
        },
      },
      {
        kind: "visual",
        id: "st.le.06.visual",
        title: {
          ar: "ثلاث صيغ للمهلة وما تعنيه فعلاً",
          en: "Three deadline forms and what each actually commits you to",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "by Thursday 7 May", en: "by Thursday 7 May" },
            detail: {
              ar: "يوم محدد ونهائي. الخميس أو قبله. الموكّل يعرف متى يبدأ بالقلق.",
              en: "A fixed final day. Thursday or earlier. The client knows exactly when to start worrying.",
            },
            tone: "positive",
          },
          {
            label: { ar: "within five working days", en: "within five working days" },
            detail: {
              ar: "مدة بلا معنى ما لم تذكر نقطة البداية: «within five working days of receiving the signed copy».",
              en: "Meaningless unless you name the starting point: “within five working days of receiving the signed copy.”",
            },
            tone: "neutral",
          },
          {
            label: { ar: "as soon as possible", en: "as soon as possible" },
            detail: {
              ar: "ليست مهلة. الموكّل يسمعها «غداً» وأنت تقصد «الأسبوع المقبل». الخلاف مؤجَّل لا مُلغى.",
              en: "Not a deadline. The client hears “tomorrow”, you meant “next week”. The disagreement is postponed, not avoided.",
            },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "st.le.06.worked",
        strong: {
          label: { ar: "التزام مقروء", en: "A readable commitment" },
          text: {
            ar: [
              "«سأرسل لك المسودة بحلول يوم الخميس 7 أيار 2026.»",
              "«بعد أن تعيدها موقّعة، نودعها لدى المحكمة خلال ثلاثة أيام عمل من استلامها.»",
              "«إن تأخّر أي من الموعدين، سأخبرك قبل الموعد لا بعده.»",
            ],
            en: [
              "“I will send you the draft by Thursday 7 May 2026.”",
              "“Once you return it signed, we file it within three working days of receiving it.”",
              "“If either date slips, you will hear from me before the date, not after it.”",
            ],
          },
          why: {
            ar: "تاريخ واحد لا يُقرأ بطريقتين، ومدة مربوطة بنقطة بداية واضحة، ووعد بالإخطار المبكر بدل وعد بالكمال.",
            en: "One unambiguous date, one period anchored to a named starting point, and a promise of early warning instead of a promise of perfection.",
          },
        },
        weak: {
          label: { ar: "التزام يبدو مهذباً ويصنع خلافاً", en: "Polite-sounding, conflict-producing" },
          text: {
            ar: [
              "«سأحاول إرسال المسودة في أقرب وقت ممكن.»",
              "«الإيداع لدى المحكمة سيتم خلال أيام قليلة، إن شاء الله.»",
              "«الموعد النهائي هو 05/06 على أي حال.»",
            ],
            en: [
              "“I'll try to send the draft as soon as possible.”",
              "“Filing will happen within a few days, hopefully.”",
              "“The deadline is 05/06 anyway.”",
            ],
          },
          why: {
            ar: "لا يوجد يوم يستطيع الموكّل الاعتماد عليه، و«أيام قليلة» غير محسوبة من شيء، و05/06 تُقرأ بطريقتين. ثلاث نقاط ضعف في ثلاث جمل.",
            en: "No day the client can rely on, “a few days” counted from nothing, and 05/06 readable two ways. Three failures in three sentences.",
          },
        },
      },
      { kind: "activity", id: "st.le.06.a1", activityId: "act.le.06.1", mode: "quick" },
      { kind: "activity", id: "st.le.06.a2", activityId: "act.le.06.2", mode: "quick" },
      { kind: "activity", id: "st.le.06.a3", activityId: "act.le.06.3", mode: "guided" },
      { kind: "activity", id: "st.le.06.a4", activityId: "act.le.06.4", mode: "guided" },
      { kind: "activity", id: "st.le.06.a5", activityId: "act.le.06.5", mode: "independent" },
      { kind: "activity", id: "st.le.06.a6", activityId: "act.le.06.6", mode: "independent" },
      { kind: "summary", id: "st.le.06.summary", summaryCardId: "card.le.06" },
      {
        kind: "apply_tomorrow",
        id: "st.le.06.apply",
        task: {
          ar: "افتح آخر ثلاث رسائل إنجليزية أرسلتها إلى موكّل، وأعد كتابة كل تاريخ فيها بصيغة اليوم + الشهر بحروفه + السنة.",
          en: "Open the last three English emails you sent a client and rewrite every date as weekday + spelled month + year.",
        },
        detail: {
          ar: "إن وجدت تاريخاً واحداً بصيغة رقمية، أرسل رسالة قصيرة تؤكّد اليوم المقصود. لا تنتظر أن يسأل أحد.",
          en: "If you find even one numeric date, send a short line confirming the day you meant. Do not wait to be asked.",
        },
      },
      {
        kind: "next_mission",
        id: "st.le.06.next",
        teaser: {
          ar: "الوحدة القادمة: كيف تقول «لا أستطيع أن أعدك بذلك» بالإنجليزية دون أن تبدو متهرّباً ولا ضعيفاً.",
          en: "Next: how to say “I can't promise that” in English without sounding evasive or weak.",
        },
      },
    ],
    activities: [
      {
        id: "act.le.06.1",
        kind: "listening",
        skillId: "skill.le-dates-deadlines",
        stage: 3,
        weight: 1,
        prompt: {
          ar: "استمع إلى رسالة الموكّلة الصوتية. ما هو التصرّف الصحيح فور انتهائها؟",
          en: "Listen to the client's voicemail. What is the right first move when it ends?",
        },
        script: {
          ar: "Hello, this is Nadia Chammas from Levant Interiors. I'm calling about the lease file. The landlord's lawyer wrote that he needs our reply by 03/04. I'm in London this week, and my colleague in Riyadh read that date differently from me. Before we sign anything, could you confirm exactly which day we are talking about? Thank you.",
          en: "Hello, this is Nadia Chammas from Levant Interiors. I'm calling about the lease file. The landlord's lawyer wrote that he needs our reply by 03/04. I'm in London this week, and my colleague in Riyadh read that date differently from me. Before we sign anything, could you confirm exactly which day we are talking about? Thank you.",
        },
        transcript: {
          ar: "الترجمة: «مرحباً، أنا نادية شمّاس من ليفانت إنتيريورز. أتصل بشأن ملف الإيجار. محامي المالك كتب أنه يحتاج ردّنا بحلول 03/04. أنا في لندن هذا الأسبوع، وزميلي في الرياض قرأ التاريخ بطريقة مختلفة عني. قبل أن نوقّع أي شيء، هل يمكنك تأكيد اليوم المقصود بالضبط؟ شكراً لك.»",
          en: "“Hello, this is Nadia Chammas from Levant Interiors. I'm calling about the lease file. The landlord's lawyer wrote that he needs our reply by 03/04. I'm in London this week, and my colleague in Riyadh read that date differently from me. Before we sign anything, could you confirm exactly which day we are talking about? Thank you.”",
        },
        accessibleAlternative: {
          ar: "يمكنك قراءة النص المكتوب كاملاً بدل الاستماع؛ السؤال يُجاب من النص نفسه.",
          en: "You can read the full transcript instead of listening; the question is answerable from the text alone.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "اكتب إلى محامي المالك طالباً تأكيد التاريخ بصيغة «Friday 3 April 2026»، وأرسل نسخة إلى نادية بالجملة نفسها.",
              en: "Write to the landlord's lawyer asking him to confirm the date as “Friday 3 April 2026”, and copy Nadia on the same wording.",
            },
            correct: true,
            rationale: {
              ar: "الغموض يُحلّ كتابةً مع الطرف الذي أنشأه، والموكّلة ترى الحلّ بعينها. صيغة اليوم + الشهر بحروفه تُنهي السؤال نهائياً.",
              en: "The ambiguity is resolved in writing with the party who created it, and the client sees the resolution herself. Weekday plus spelled month ends the question for good.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "افترض أن المقصود 4 آذار لأن هذه هي القراءة الأميركية الشائعة، وأبلغ نادية بذلك.",
              en: "Assume it means 4 March because that is the common American reading, and tell Nadia so.",
            },
            rationale: {
              ar: "أنت تحوّل تخميناً إلى تعليمات للموكّل. لو كان المقصود 3 نيسان تكون قد أضعت شهراً كاملاً وتحمّلت أنت مسؤولية الخطأ لا الخصم.",
              en: "You are turning a guess into instructions for the client. If it meant 3 April you have lost a month, and the error is now yours rather than the other side's.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "طمئن نادية بأن صيغة التاريخ تفصيل شكلي وأن المحكمة تتساهل في مثل هذه الأمور.",
              en: "Reassure Nadia that date format is a formality and that these things are treated flexibly.",
            },
            rationale: {
              ar: "طمأنة بلا أساس. المهل التعاقدية لا تُقاس بالتساهل، والموكّلة طرحت السؤال الصحيح تماماً — تجاهله يعلّمها أن تتوقف عن السؤال.",
              en: "Reassurance with nothing behind it. Contractual deadlines are not measured in flexibility, and the client asked exactly the right question — brushing it aside teaches her to stop asking.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "انتظر أن يوضّح محامي المالك التاريخ في مراسلته التالية، ولا تُشغل الموكّلة بالتفصيل.",
              en: "Wait for the landlord's lawyer to clarify the date in his next letter, and don't trouble the client with the detail.",
            },
            rationale: {
              ar: "الانتظار يستهلك المهلة نفسها التي تحاول حمايتها، والصمت تجاه سؤال صريح من الموكّلة يُقرأ تجاهلاً لا كفاءة.",
              en: "Waiting burns the very deadline you are trying to protect, and silence after a direct client question reads as neglect, not competence.",
            },
          },
        ],
      },
      {
        id: "act.le.06.2",
        kind: "fill_blank",
        skillId: "skill.le-dates-deadlines",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "أكمل الجمل بالصيغة الصحيحة. انتبه إلى الفرق بين يومٍ نهائي ومدةٍ محسوبة، وإلى ما يُحسب بأيام تقويمية وما يُحسب بأيام عمل.",
          en: "Complete the sentences. Watch the difference between a final day and a counted period — and between what is counted in calendar days and what is counted in business days.",
        },
        hint: {
          ar: "في الفراغين الأخيرين: هناك خيار يبدو دقيقاً ومهنياً تماماً، وهو الأخطر في الوحدة كلها.",
          en: "In the last two blanks: one option looks precise and entirely professional. It is the most dangerous option in the unit.",
        },
        template: {
          ar: "«Please return the signed copy {{0}} Tuesday 12 May 2026. We will then file the application {{1}} three working days of receiving it. The court's own thirty-day period is counted in {{2}}, so it expires {{3}}.» — أعِد النسخة الموقّعة {{0}} الثلاثاء 12 أيار 2026، وسنودع الطلب {{1}} ثلاثة أيام عمل من استلامها. أما مهلة المحكمة البالغة ثلاثين يوماً فتُحسب بـ{{2}}، وتنتهي {{3}}.",
          en: "“Please return the signed copy {{0}} Tuesday 12 May 2026. We will then file the application {{1}} three working days of receiving it. The court's own thirty-day period is counted in {{2}}, so it expires {{3}}.”",
        },
        blanks: [
          {
            id: "b0",
            options: [
              { ar: "by (بحلول)", en: "by" },
              { ar: "within (خلال)", en: "within" },
              { ar: "until (حتى)", en: "until" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "«by» تعني ذلك اليوم أو قبله، وهي الصيغة الصحيحة ليومٍ نهائي واحد. «within» تحتاج مدة لا تاريخاً، و«until» تعني استمرار حالة حتى ذلك اليوم وتُقرأ وكأن التوقيع مسموح بعده.",
              en: "“by” means on that day or earlier — the right form for a single final day. “within” needs a period, not a date, and “until” describes a state continuing up to that day, which reads as if signing afterwards is still fine.",
            },
          },
          {
            id: "b1",
            options: [
              { ar: "by (بحلول)", en: "by" },
              { ar: "within (خلال)", en: "within" },
              { ar: "no later than (في موعد أقصاه)", en: "no later than" },
            ],
            answerIndex: 1,
            rationale: {
              ar: "«within» هي الصيغة الوحيدة التي تقبل مدة مربوطة بنقطة بداية («of receiving it»). «by» و«no later than» تحتاجان تاريخاً محدداً، ولا يمكن أن تسبقا «three working days».",
              en: "“within” is the only form that takes a period anchored to a starting point (“of receiving it”). “by” and “no later than” need a specific date and cannot precede “three working days”.",
            },
          },
          {
            id: "b2",
            options: [
              { ar: "calendar days (أيام تقويمية)", en: "calendar days" },
              { ar: "business days (أيام عمل)", en: "business days" },
              { ar: "days (أيام)", en: "days" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "مهل المحاكم والمهل القانونية تُحسب عادةً بأيام تقويمية تشمل العطل ونهايات الأسبوع. من يفترضها أيام عمل يضيف إلى المهلة نحو أسبوعين في ذهنه ويخسرها في الواقع. و«days» وحدها لا تحسم شيئاً: اكتب أيّهما تقصد في كل مرة، حتى داخل الرسالة الواحدة.",
              en: "Court and statutory periods are normally counted in calendar days, weekends and holidays included. A lawyer who assumes business days adds roughly two weeks in his head and loses them in reality. Bare “days” settles nothing: say which you mean every time, even twice in the same email.",
            },
          },
          {
            id: "b3",
            options: [
              { ar: "on Friday 12 June 2026 (يوم الجمعة 12 حزيران 2026)", en: "on Friday 12 June 2026" },
              { ar: "next Friday (الجمعة القادمة)", en: "next Friday" },
              { ar: "next Friday at the latest (الجمعة القادمة على أبعد تقدير)", en: "next Friday at the latest" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "«next Friday» يبدو دقيقاً ومهنياً، وهو الخيار الأخطر هنا: قِيلت يوم أربعاء، يفهمها بعض المستمعين الجمعة بعد يومين ويفهمها آخرون جمعة الأسبوع التالي. الفارق تسعة أيام على مهلة سقوط. أما «at the latest» فتُشدّد موعداً لم يكن محدداً أصلاً، فتضيف يقيناً زائفاً فوق الغموض. اسم اليوم + الشهر بحروفه + السنة لا يُقرأ بطريقتين.",
              en: "“Next Friday” looks precise and professional, and it is the most dangerous option here: said on a Wednesday, some readers take the Friday two days away and others the Friday of the following week. Nine days, on a limitation deadline. And “at the latest” hardens a date that was never fixed, stacking false certainty on top of the ambiguity. Weekday plus spelled month plus year cannot be read two ways.",
            },
          },
        ],
      },
      {
        id: "act.le.06.3",
        kind: "matching",
        skillId: "skill.le-dates-deadlines",
        secondarySkillIds: ["skill.le-explaining-next-steps"],
        stage: 3,
        weight: 1,
        prompt: {
          ar: "طابق كل عبارة إنجليزية مع ما تلتزم به فعلاً أمام الموكّل.",
          en: "Match each English phrase with what it actually commits you to in front of a client.",
        },
        accessibleAlternative: {
          ar: "يمكن الإجابة باختيار رقم الطرف المقابل من قائمة بدل السحب.",
          en: "You can answer by selecting the matching item number from a list instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "by Thursday 7 May", en: "by Thursday 7 May" },
            right: {
              ar: "يوم نهائي: الخميس أو قبله، ولا شيء بعده.",
              en: "A final day: Thursday or earlier, and nothing after it.",
            },
            rationale: {
              ar: "هذه الصيغة تعطي الموكّل نقطة يقيس عليها. استعملها كلما كان بيدك التنفيذ.",
              en: "This form gives the client a point to measure you against. Use it whenever delivery is in your hands.",
            },
          },
          {
            id: "p2",
            left: { ar: "within ten working days of filing", en: "within ten working days of filing" },
            right: {
              ar: "مدة تبدأ من حدث محدد، لا من تاريخ الرسالة.",
              en: "A period that starts from a named event, not from the date of your email.",
            },
            rationale: {
              ar: "المدة بلا نقطة بداية هي أخطر ما يُكتب في تحديث مكتوب: كل طرف يحسبها من لحظة مختلفة.",
              en: "A period with no starting point is the most dangerous line in a written update: each side counts it from a different moment.",
            },
          },
          {
            id: "p3",
            left: { ar: "no later than 5 p.m. on Friday 15 May", en: "no later than 5 p.m. on Friday 15 May" },
            right: {
              ar: "يوم نهائي بصيغة مشدّدة، مناسبة للخصم وثقيلة على الموكّل.",
              en: "A final day with pressure attached — right for the other side, heavy for a client.",
            },
            rationale: {
              ar: "الصيغة صحيحة لكن نبرتها تعاقدية. استعمالها مع الموكّل يجعل الرسالة تبدو إنذاراً.",
              en: "The form is correct but the tone is contractual. Used on a client, the email starts to read like a warning notice.",
            },
          },
          {
            id: "p4",
            left: { ar: "in the course of next week", en: "in the course of next week" },
            right: {
              ar: "ليس التزاماً: خمسة أيام يختار الموكّل أوّلها وتختار أنت آخرها.",
              en: "Not a commitment: five days, of which the client picks the first and you pick the last.",
            },
            rationale: {
              ar: "العبارة تبدو مهنية وهي في الحقيقة تأجيل للخلاف. استبدلها بيوم واحد تستطيع الوفاء به.",
              en: "It sounds professional and is really a postponed argument. Replace it with one day you can actually meet.",
            },
          },
          {
            id: "p5",
            left: { ar: "as soon as possible", en: "as soon as possible" },
            right: {
              ar: "تعبير عن نيّة، يسمعه الموكّل «غداً» ويقصد به المحامي «حين أفرغ».",
              en: "A statement of intention: the client hears “tomorrow”, the lawyer means “when I'm free”.",
            },
            rationale: {
              ar: "أكثر عبارة تُنتج شكاوى الموكّلين في المراسلات الإنجليزية. لا تستعملها إلا مقرونة بتاريخ.",
              en: "The single biggest source of client complaints in English correspondence. Never use it without a date beside it.",
            },
          },
        ],
      },
      {
        id: "act.le.06.4",
        kind: "pronunciation",
        skillId: "skill.le-dates-deadlines",
        stage: 3,
        weight: 1,
        grading: "self_report",
        target: "subsequently",
        ipa: "/ˈsʌb.sɪ.kwənt.li/",
        prompt: {
          ar: "قل الكلمة ثم الجملة. الهدف أن يفهمها المستمع من المرة الأولى: أربعة مقاطع والنبر على المقطع الأول SUB.",
          en: "Say the word, then the sentence. The goal is being understood first time: four syllables, stress on the first — SUB.",
        },
        meaning: {
          ar: "«لاحقاً / بعد ذلك»: تربط حدثاً بحدث سبقه في تسلسل زمني. تُستعمل كثيراً في وصف مجريات الملف.",
          en: "“Afterwards / following that” — it links one event to an earlier one in a sequence. Very common when describing what happened in a file.",
        },
        exampleSentence: {
          ar: "«We filed the claim on 4 June and subsequently received their reply on 10 June.» — أودعنا الدعوى في 4 حزيران وتلقّينا ردّهم لاحقاً في 10 حزيران.",
          en: "“We filed the claim on 4 June and subsequently received their reply on 10 June.”",
        },
        hint: {
          ar: "الخطأ الشائع هو نقل النبر إلى المقطع الثاني أو إسقاط الحرف الأخير. جرّب تقطيعها: SUB-se-quent-ly.",
          en: "The common slip is moving the stress to the second syllable or dropping the final syllable. Try it in beats: SUB-se-quent-ly.",
        },
        accessibleAlternative: {
          ar: "يمكنك قراءة الجملة بصمت وتقطيعها كتابةً بدل النطق، ثم تقييم وضوح تقطيعك.",
          en: "You can mark the syllables in writing and read the sentence silently instead of speaking, then self-assess the beats.",
        },
      },
      {
        id: "act.le.06.5",
        kind: "short_written",
        skillId: "skill.le-dates-deadlines",
        secondarySkillIds: ["skill.le-explaining-next-steps"],
        stage: 3,
        weight: 2,
        grading: "ai_rubric",
        rubricId: "rubric.legal-english-written.v1",
        minChars: 220,
        prompt: {
          ar: "اكتب بالإنجليزية ثلاث إلى خمس جمل تعطي الموكّل موعداً واضحاً وما تحتاجه منه. لا تستعمل «as soon as possible» ولا تعِد بنتيجة.",
          en: "Write three to five English sentences giving the client a clear date and what you need from him. Do not use “as soon as possible” and do not promise an outcome.",
        },
        context: {
          ar: [
            "الموكّل: السيد كريم الحدّاد، صاحب شركة مقاولات صغيرة، نزاع على دفعة متأخرة.",
            "الواقع: مسودة كتاب المطالبة ستكون جاهزة يوم الخميس 14 أيار 2026.",
            "تحتاج منه: نسخة موقّعة من أمر التغيير رقم 3، وكشف الحساب المصرفي لشهر آذار.",
            "بعد استلام الوثيقتين: الإرسال إلى الطرف الآخر خلال يومي عمل.",
          ],
          en: [
            "Client: Mr Karim Haddad, owner of a small contracting company, dispute over an unpaid instalment.",
            "Position: the draft letter of claim will be ready on Thursday 14 May 2026.",
            "You need from him: a signed copy of variation order 3, and the March bank statement.",
            "After both documents arrive: sending to the other side within two working days.",
          ],
        },
        modelAnswer: {
          ar: [
            "«Dear Mr Haddad, I will have the draft letter of claim ready on Thursday 14 May 2026 and will send it to you the same day.»",
            "«To finalise it I need two documents from you: a signed copy of variation order 3, and your March bank statement. Please send both by Monday 18 May 2026.»",
            "«Once I have them, we send the letter to the other side within two working days of receipt.»",
            "«If either date moves, I will tell you before the date rather than after it.»",
          ],
          en: [
            "“Dear Mr Haddad, I will have the draft letter of claim ready on Thursday 14 May 2026 and will send it to you the same day.”",
            "“To finalise it I need two documents from you: a signed copy of variation order 3, and your March bank statement. Please send both by Monday 18 May 2026.”",
            "“Once I have them, we send the letter to the other side within two working days of receipt.”",
            "“If either date moves, I will tell you before the date rather than after it.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«Dear Mr Haddad, I am working on the letter of claim and will send it to you as soon as it is ready.»",
              "«Please also send me the documents we discussed whenever you can, and we will proceed quickly to get your money back.»",
            ],
            en: [
              "“Dear Mr Haddad, I am working on the letter of claim and will send it to you as soon as it is ready.”",
              "“Please also send me the documents we discussed whenever you can, and we will proceed quickly to get your money back.”",
            ],
          },
          whatIsWrong: {
            ar: "ثلاثة أخطاء متراكبة: لا يوجد تاريخ واحد يستطيع الموكّل الاعتماد عليه؛ «the documents we discussed» تفترض أنه يتذكّرها بينما المطلوب تسميتها؛ و«get your money back» وعد بنتيجة لا تملكها.",
            en: "Three faults stacked: no single date the client can rely on; “the documents we discussed” assumes he remembers them instead of naming them; and “get your money back” promises an outcome you do not control.",
          },
        },
      },
      {
        id: "act.le.06.6",
        kind: "reflection",
        skillId: "skill.le-dates-deadlines",
        stage: 3,
        weight: 1,
        grading: "self_report",
        prompt: {
          ar: "متى كانت آخر مرة استعملت فيها عبارة مطّاطة بدل تاريخ لأنك لم تكن واثقاً من قدرتك على الوفاء؟ ماذا كان سيحدث لو أعطيت تاريخاً أبعد لكن مؤكداً؟",
          en: "When did you last use a vague phrase instead of a date because you were not sure you could deliver? What would have happened if you had given a later date you were certain of?",
        },
        followUp: {
          ar: "الموكّل يتحمّل الموعد البعيد. ما لا يتحمّله هو ألا يعرف. اكتب سطراً واحداً تستعمله المرة القادمة.",
          en: "Clients absorb a later date. What they cannot absorb is not knowing. Write down one line you will use next time.",
        },
      },
    ],
    summaryCard: {
      id: "card.le.06",
      title: {
        ar: "التواريخ والمهل: كلمة واحدة تحسم الملف",
        en: "Dates and deadlines: one word decides the file",
      },
      whatYouLearned: {
        ar: [
          "الصيغة الرقمية 03/04 تُقرأ بطريقتين. اسم الشهر واسم اليوم يُنهيان الغموض.",
          "by يوم نهائي · within مدة من نقطة بداية مُسمّاة · no later than تشديد للخصم لا للموكّل.",
          "الالتزام بالتاريخ آمن، والالتزام بالنتيجة ليس كذلك.",
          "الإخطار المبكر بالتأخير يحفظ الثقة أكثر من الوفاء المتأخر بالوعد.",
        ],
        en: [
          "03/04 reads two ways. A spelled month and a weekday end the ambiguity.",
          "“by” = a final day · “within” = a period from a named start · “no later than” = pressure, for the other side rather than the client.",
          "Committing to a date is safe. Committing to an outcome is not.",
          "Early warning of a delay protects trust better than late delivery on a promise.",
        ],
      },
      framework: {
        name: { ar: "اليوم · الصيغة · نقطة البداية · الإخطار", en: "Day · Form · Anchor · Warning" },
        steps: [
          { ar: "سمِّ يوماً واحداً بالحروف مع اسم اليوم والسنة.", en: "Name one day: weekday, spelled month, year." },
          { ar: "اختر by أو within حسب ما إذا كان المطلوب يوماً أم مدة.", en: "Choose “by” or “within” according to whether you mean a day or a period." },
          { ar: "اربط كل مدة بحدث بدء مذكور صراحةً.", en: "Anchor every period to an explicitly named starting event." },
          { ar: "أضف وعد الإخطار المبكر إن تحرّك الموعد.", en: "Add the promise of early warning if the date moves." },
        ],
      },
      rememberThis: {
        ar: "التاريخ الذي يحتاج تفسيراً ليس تاريخاً.",
        en: "A date that needs explaining is not a date.",
      },
      useItTomorrow: {
        ar: "في أول رسالة إنجليزية ترسلها غداً، ضع يوماً واحداً بالحروف، واحذف كل عبارة زمنية أخرى.",
        en: "In the first English email you send tomorrow, put one spelled-out day in it and delete every other time phrase.",
      },
      phrases: [
        { en: "I will send you the draft by Thursday 7 May 2026.", ar: "سأرسل لك المسودة بحلول الخميس 7 أيار 2026.", register: "neutral" },
        { en: "We will file within three working days of receiving your signed copy.", ar: "سنودع الطلب خلال ثلاثة أيام عمل من استلام نسختك الموقّعة.", register: "formal" },
        { en: "Just to confirm the date — do you mean Friday 3 April?", ar: "للتأكيد فقط بشأن التاريخ — هل تقصد الجمعة 3 نيسان؟", register: "plain" },
        { en: "Please reply no later than 5 p.m. on Friday 15 May.", ar: "يُرجى الرد في موعد أقصاه الساعة الخامسة مساءً من يوم الجمعة 15 أيار.", register: "formal" },
        { en: "Please get back to me by 5 p.m. on Friday 15 May.", ar: "أرجو أن تعود إليّ بحلول الخامسة مساءً من يوم الجمعة 15 أيار.", register: "plain" },
        { en: "If that date moves, you will hear from me before it, not after.", ar: "إن تحرّك هذا الموعد، ستسمع منّي قبله لا بعده.", register: "neutral" },
        { en: "Can we fix a day rather than leave it open?", ar: "هل نحدّد يوماً بدل أن نتركه مفتوحاً؟", register: "plain" },
        { en: "That deadline is not in our hands — it is set by the court.", ar: "هذه المهلة ليست بيدنا، فهي محدّدة من المحكمة.", register: "neutral" },
      ],
    },
  },
  // =========================================================================
  // unit.le.07 — Managing Expectations in English  (carries the chapter simulation)
  // =========================================================================
  {
    id: "unit.le.07",
    chapterId: "ch.le.explaining-and-planning",
    order: 7,
    title: {
      ar: "إدارة التوقّعات بالإنجليزية",
      en: "Managing Expectations in English",
    },
    subtitle: {
      ar: "كيف تقول «لا أستطيع أن أعدك بذلك» بلغة مهنية لا اعتذارية",
      en: "How to say “I can't promise that” professionally, not apologetically",
    },
    primarySkillId: "skill.le-managing-expectations",
    skillIds: ["skill.le-managing-expectations", "skill.le-dates-deadlines", "skill.le-explaining-next-steps"],
    stage: 3,
    estimatedMinutes: 12,
    targetLevel: 3,
    sourceIds: ["src.client-centered-law-firm", "src.selling-the-invisible", "src.legal-project-management"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
    steps: [
      {
        kind: "hook",
        id: "st.le.07.hook",
        text: {
          ar: "بالعربية تعرف كيف تقول «لا» بلطف: عندك عشر صيغ. بالإنجليزية تحت الضغط تبقى لك صيغتان — «yes» و الصمت. هذه الوحدة تعيد لك الصيغ العشر.",
          en: "In Arabic you know ten ways to say no gently. In English, under pressure, you are left with two — “yes” and silence. This unit gives the ten back.",
        },
      },
      {
        kind: "why_it_matters",
        id: "st.le.07.why",
        text: {
          ar: "أغلب الوعود الخطرة لا تُقال عن قناعة، بل هرباً من لحظة صمت محرجة بلغة ثانية. الوعد يُنسى عندك ويُحفظ عند الموكّل.",
          en: "Most dangerous promises are not made out of conviction. They are made to escape an awkward silence in a second language. You forget the promise; the client keeps it.",
        },
      },
      {
        kind: "learning_goal",
        id: "st.le.07.goals",
        goals: {
          ar: [
            "تميّز بين ثلاث درجات التزام إنجليزية وتختار الدرجة الصادقة لا الدرجة المريحة.",
            "ترفض وعداً بالنتيجة بجملة واحدة مهنية تليها ثلاثة أشياء تستطيع الالتزام بها فعلاً.",
            "تُبلّغ تقديراً غير مُرضٍ (وقت أطول، كلفة أعلى) دون تخفيف يفقده معناه.",
          ],
          en: [
            "Tell three English commitment levels apart and pick the honest one, not the comfortable one.",
            "Refuse a promise about the outcome in one professional sentence, then name three things you can actually commit to.",
            "Deliver an unwelcome estimate — longer, more expensive — without softening it into meaninglessness.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "st.le.07.lesson",
        title: {
          ar: "ثلاث درجات، وجملة واحدة للرفض",
          en: "Three levels, and one sentence for saying no",
        },
        body: {
          ar: [
            "«We will…» التزام كامل. لا تستعملها إلا لما هو بيدك وحدك: الإرسال، الإيداع، الاتصال.",
            "«We should be able to…» توقّع قوي مبنيّ على خبرة، لكنه معلّق على طرف آخر: المحكمة، الخصم، خبير.",
            "«We'll aim to…» نيّة صادقة بلا التزام. مفيدة مرة واحدة في الرسالة؛ استعمالها ثلاث مرات يجعلك تبدو مراوغاً.",
            "صيغة الرفض: «I can't promise you [النتيجة] — no lawyer honestly can. What I can promise is [ثلاثة التزامات محدّدة].» الجزء الثاني هو الذي ينقذ العلاقة، لا الأول.",
          ],
          en: [
            "“We will…” is a full commitment. Reserve it for what is entirely in your hands: sending, filing, calling.",
            "“We should be able to…” is a strong expectation built on experience but dependent on someone else: the court, the other side, an expert.",
            "“We'll aim to…” is honest intention with no commitment. Useful once in an email; three times and you sound evasive.",
            "The refusal formula: “I can't promise you [the outcome] — no lawyer honestly can. What I can promise is [three specific commitments].” It is the second half that saves the relationship, not the first.",
          ],
        },
      },
      {
        kind: "visual",
        id: "st.le.07.visual",
        title: {
          ar: "سلّم الالتزام بالإنجليزية",
          en: "The English commitment scale",
        },
        variant: "scale",
        items: [
          {
            label: { ar: "We will file the application on Tuesday 12 May.", en: "We will file the application on Tuesday 12 May." },
            detail: { ar: "بيدك وحدك ← التزام كامل مسموح.", en: "Entirely in your hands → a full commitment is allowed." },
            tone: "positive",
          },
          {
            label: { ar: "We should be able to get a hearing date before the end of June.", en: "We should be able to get a hearing date before the end of June." },
            detail: { ar: "بيد المحكمة ← توقّع قوي، لا وعد.", en: "In the court's hands → a strong expectation, not a promise." },
            tone: "neutral",
          },
          {
            label: { ar: "We'll aim to settle without proceedings.", en: "We'll aim to settle without proceedings." },
            detail: { ar: "بيد الخصم ← نيّة فقط، وتُقال مرة لا ثلاثاً.", en: "In the other side's hands → intention only, said once and not three times." },
            tone: "neutral",
          },
          {
            label: { ar: "We will win this case.", en: "We will win this case." },
            detail: { ar: "ليس بيد أحد ← لا تُقال أبداً، بأي لغة.", en: "In nobody's hands → never said, in any language." },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "st.le.07.worked",
        strong: {
          label: { ar: "تقدير غير مُرضٍ يُقال جيداً", en: "An unwelcome estimate, well delivered" },
          text: {
            ar: [
              "«I have an update on timing, and it is longer than we hoped.»",
              "«Realistically we are looking at nine to twelve months to a hearing, not the four we discussed. The court's list moved.»",
              "«What I can commit to is this: our submissions are filed by Tuesday 2 June, I will chase the listing every two weeks, and you will get a written update on the first Monday of each month.»",
              "«If a settlement window opens before then, I will bring it to you the same week.»",
            ],
            en: [
              "“I have an update on timing, and it is longer than we hoped.”",
              "“Realistically we are looking at nine to twelve months to a hearing, not the four we discussed. The court's list moved.”",
              "“What I can commit to is this: our submissions are filed by Tuesday 2 June, I will chase the listing every two weeks, and you will get a written update on the first Monday of each month.”",
              "“If a settlement window opens before then, I will bring it to you the same week.”",
            ],
          },
          why: {
            ar: "الخبر السيّئ يأتي أولاً وبلا تمهيد طويل، ثم السبب في جملة واحدة، ثم ثلاثة التزامات حقيقية تعيد للموكّل الشعور بأن أحداً يمسك بالملف.",
            en: "The bad news comes first with no long run-up, then the cause in one sentence, then three real commitments that give the client back the feeling that someone is holding the file.",
          },
        },
        weak: {
          label: { ar: "التخفيف الذي يُلغي الرسالة", en: "Softening that erases the message" },
          text: {
            ar: [
              "«I hope you are well. I just wanted to touch base regarding the timing of the matter.»",
              "«As you may appreciate, litigation timelines can sometimes be somewhat unpredictable, and there may possibly be a degree of delay.»",
              "«We will of course do our very best and I am confident it will work out well in the end.»",
            ],
            en: [
              "“I hope you are well. I just wanted to touch base regarding the timing of the matter.”",
              "“As you may appreciate, litigation timelines can sometimes be somewhat unpredictable, and there may possibly be a degree of delay.”",
              "“We will of course do our very best and I am confident it will work out well in the end.”",
            ],
          },
          why: {
            ar: "الموكّل قرأ الرسالة ولا يعرف كم شهراً صار الانتظار. التخفيف المتراكم (sometimes, somewhat, possibly, a degree of) يحوّل الخبر إلى ضباب، ثم تأتي جملة ثقة في النتيجة لتضيف وعداً فوق الغموض.",
            en: "The client has read it and still does not know how many months. Stacked hedges — sometimes, somewhat, possibly, a degree of — turn news into fog, and then a line of confidence in the outcome adds a promise on top of the fog.",
          },
        },
      },
      { kind: "activity", id: "st.le.07.a1", activityId: "act.le.07.1", mode: "quick" },
      { kind: "activity", id: "st.le.07.a2", activityId: "act.le.07.2", mode: "quick" },
      { kind: "activity", id: "st.le.07.a3", activityId: "act.le.07.3", mode: "guided" },
      { kind: "activity", id: "st.le.07.a4", activityId: "act.le.07.4", mode: "guided" },
      { kind: "activity", id: "st.le.07.a5", activityId: "act.le.07.5", mode: "independent" },
      { kind: "activity", id: "st.le.07.a6", activityId: "act.le.07.6", mode: "independent" },
      { kind: "summary", id: "st.le.07.summary", summaryCardId: "card.le.07" },
      {
        kind: "apply_tomorrow",
        id: "st.le.07.apply",
        task: {
          ar: "اكتب على ورقة بجانب هاتفك جملة الرفض كاملة بالإنجليزية، واستعملها حرفياً في أول مرة يُطلب منك فيها ضمان.",
          en: "Write the full refusal sentence in English on a card beside your phone, and use it word for word the next time you are asked for a guarantee.",
        },
        detail: {
          ar: "«I can't promise you that — no lawyer honestly can. What I can promise is…» ثم ثلاثة أشياء بيدك أنت.",
          en: "“I can't promise you that — no lawyer honestly can. What I can promise is…” then three things that are in your hands.",
        },
      },
      {
        kind: "next_mission",
        id: "st.le.07.next",
        teaser: {
          ar: "الوحدة القادمة: نفس الانضباط لكن كتابةً — تحديث للموكّل يُقرأ على الهاتف في ثلاثين ثانية.",
          en: "Next: the same discipline in writing — a client update that reads on a phone in thirty seconds.",
        },
      },
    ],
    activities: [
      {
        id: "act.le.07.1",
        kind: "listening",
        skillId: "skill.le-managing-expectations",
        stage: 3,
        weight: 1,
        prompt: {
          ar: "استمع إلى ردّ المحامية. ما الذي التزمت به فعلاً؟",
          en: "Listen to the lawyer's answer. What did she actually commit to?",
        },
        script: {
          ar: "Thank you for asking directly, Mr Barakat. We will file the defence on Tuesday 12 May — that part is entirely in our hands. We should be able to get a first hearing before the end of the summer, but the listing is the court's decision, not ours. And we'll aim to open settlement talks in parallel, although that depends on whether the other side engages.",
          en: "Thank you for asking directly, Mr Barakat. We will file the defence on Tuesday 12 May — that part is entirely in our hands. We should be able to get a first hearing before the end of the summer, but the listing is the court's decision, not ours. And we'll aim to open settlement talks in parallel, although that depends on whether the other side engages.",
        },
        transcript: {
          ar: "الترجمة: «شكراً لسؤالك المباشر يا سيد بركات. سنودع لائحة الدفاع يوم الثلاثاء 12 أيار — وهذا الجزء بيدنا وحدنا. ويُفترض أن نحصل على جلسة أولى قبل نهاية الصيف، لكن تحديد الجلسة قرار المحكمة لا قرارنا. وسنسعى إلى فتح مفاوضات تسوية بالتوازي، وإن كان ذلك متوقفاً على تجاوب الطرف الآخر.»",
          en: "“Thank you for asking directly, Mr Barakat. We will file the defence on Tuesday 12 May — that part is entirely in our hands. We should be able to get a first hearing before the end of the summer, but the listing is the court's decision, not ours. And we'll aim to open settlement talks in parallel, although that depends on whether the other side engages.”",
        },
        accessibleAlternative: {
          ar: "النص المكتوب متاح كاملاً، والسؤال يُجاب منه دون الحاجة إلى الصوت.",
          en: "The full transcript is available and the question is answerable from it without audio.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "التزمت بالإيداع وحده؛ أما الجلسة والتسوية فقدّمتهما كتوقّع ونيّة لأنهما بيد غيرها.",
              en: "She committed only to the filing; the hearing and the settlement were offered as an expectation and an intention because they depend on others.",
            },
            correct: true,
            rationale: {
              ar: "هذا هو جوهر الدرس: درجة اللغة تتبع درجة السيطرة. «will» لما بيدك، و«should be able to» لما بيد جهة أخرى، و«aim to» لما يتوقف على خصم.",
              en: "That is the whole lesson: the level of language follows the level of control. “will” for what is yours, “should be able to” for what belongs to another body, “aim to” for what depends on an opponent.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "التزمت بالثلاثة جميعاً، لأنها ذكرتها في جملة واحدة متصلة وبنبرة واثقة.",
              en: "She committed to all three, since she said them in one confident breath.",
            },
            rationale: {
              ar: "النبرة ليست التزاماً. لو سمعت الجملة كثلاثة وعود لكنت ستنقلها إلى الموكّل كذلك، وهذا بالضبط كيف يولد الوعد الذي لا أحد قصده.",
              en: "Tone is not commitment. If you hear this as three promises you will relay it as three promises, and that is exactly how a promise nobody intended gets made.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "لم تلتزم بشيء، لأن كل جملة فيها تحفّظ أو استدراك.",
              en: "She committed to nothing, because every sentence carries a qualification.",
            },
            rationale: {
              ar: "القراءة معكوسة: الجملة الأولى التزام صريح بتاريخ محدد بلا أي تحفّظ. الخلط بين التحفّظ المُبرَّر والتهرّب يجعلك تفقد الثقة بلغتك أنت.",
              en: "Read the other way round: the first sentence is an unqualified commitment to a named date. Confusing a justified qualification with evasion makes you distrust your own careful language.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "وعدت بجلسة قبل نهاية الصيف، وهو أقوى التزام في الردّ.",
              en: "She promised a hearing before the end of the summer — the strongest commitment in the answer.",
            },
            rationale: {
              ar: "«should be able to» ليست وعداً، والجملة نفسها تنسب القرار إلى المحكمة صراحةً. من ينقل هذه العبارة كوعد يخلق أول شكوى في الملف.",
              en: "“Should be able to” is not a promise, and the sentence expressly attributes the decision to the court. Relaying it as a promise creates the file's first complaint.",
            },
          },
        ],
      },
      {
        id: "act.le.07.2",
        kind: "best_response",
        skillId: "skill.le-managing-expectations",
        stage: 3,
        weight: 1,
        prompt: {
          ar: "الموكّلة تسأل مباشرة على الهاتف. أي ردّ إنجليزي هو الأفضل؟",
          en: "The client asks you directly on the phone. Which English response is best?",
        },
        context: {
          ar: [
            "الموكّلة: السيدة ريما الزين، مديرة شركة استيراد.",
            "سؤالها: «Can you promise me we'll have this finished before the end of the quarter?»",
            "الحقيقة: التسليم متوقف على ردّ الطرف الآخر، وليس بيدك.",
          ],
          en: [
            "Client: Mrs Rima Al-Zein, managing director of an import company.",
            "Her question: “Can you promise me we'll have this finished before the end of the quarter?”",
            "The truth: completion depends on the other side's response and is not in your hands.",
          ],
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«I can't promise that, because the timing depends on their response. What I can promise is that our side is complete by Thursday 4 June, that I chase them weekly, and that you hear from me every Monday either way.»",
              en: "“I can't promise that, because the timing depends on their response. What I can promise is that our side is complete by Thursday 4 June, that I chase them weekly, and that you hear from me every Monday either way.”",
            },
            correct: true,
            rationale: {
              ar: "رفض واضح، سبب واحد قصير، ثم ثلاثة التزامات حقيقية بيدك. الموكّلة تخرج من المكالمة بأشياء تستطيع الاعتماد عليها بدل وعد لا يُنفَّذ.",
              en: "A clean refusal, one short reason, then three real commitments that are yours. The client leaves the call with things she can rely on instead of a promise that will not hold.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«Yes, I think we can manage that. Let's say end of the quarter.»",
              en: "“Yes, I think we can manage that. Let's say end of the quarter.”",
            },
            rationale: {
              ar: "«I think» لن يسمعها أحد بعد «Yes». في نهاية الربع سيكون في الملف وعد لم تملكه، والخلاف سيكون على أمانتك لا على المهلة.",
              en: "Nobody hears “I think” after “Yes”. At the end of the quarter the file contains a promise that was never yours, and the argument will be about your honesty, not about the timetable.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«As I'm sure you understand, these matters are difficult to predict and much depends on circumstances outside our control.»",
              en: "“As I'm sure you understand, these matters are difficult to predict and much depends on circumstances outside our control.”",
            },
            rationale: {
              ar: "صحيح ومُفرَغ. الجملة تحمي المحامي ولا تعطي الموكّلة شيئاً، وستعيد طرح السؤال نفسه بعد أسبوعين بنبرة أقلّ ودّاً.",
              en: "True and empty. It protects the lawyer and gives the client nothing, and she will ask the same question again in two weeks in a less friendly tone.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«No. Nobody can promise that in litigation.»",
              en: "“No. Nobody can promise that in litigation.”",
            },
            rationale: {
              ar: "المضمون سليم والتنفيذ قاسٍ. الرفض بلا بديل يبدو رفضاً للموكّلة نفسها؛ الجزء الذي يجب أن يطول هو ما تستطيع الالتزام به.",
              en: "The substance is right and the delivery is cold. A refusal with no alternative reads as a refusal of the client herself; the half that should be long is what you can commit to.",
            },
          },
        ],
      },
      {
        id: "act.le.07.3",
        kind: "ordering",
        skillId: "skill.le-managing-expectations",
        secondarySkillIds: ["skill.le-explaining-next-steps"],
        stage: 3,
        weight: 1,
        prompt: {
          ar: "رتّب خطوات إبلاغ تقدير غير مُرضٍ (المدة صارت ضعف المتوقع) في مكالمة إنجليزية.",
          en: "Put the steps of delivering an unwelcome estimate — the timeline has doubled — into order for an English call.",
        },
        accessibleAlternative: {
          ar: "يمكنك ترقيم العناصر من 1 إلى 5 بدل سحبها.",
          en: "You can number the items 1 to 5 instead of dragging them.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "«I have an update on timing, and it's longer than we hoped.»", en: "“I have an update on timing, and it's longer than we hoped.”" },
            rationale: {
              ar: "الإشارة أولاً. الموكّل يحتاج ثانيتين ليستعدّ؛ الخبر الذي يصل بلا إشارة يُسمع كصدمة لا كمعلومة.",
              en: "Signal first. The client needs two seconds to brace; news that arrives without a signal is heard as a shock, not as information.",
            },
          },
          {
            id: "i2",
            label: { ar: "«We're now looking at nine to twelve months, not four.»", en: "“We're now looking at nine to twelve months, not four.”" },
            rationale: {
              ar: "الرقم الجديد فوراً وبمقارنة صريحة بالرقم القديم. تأجيل الرقم إلى نهاية المكالمة هو ما يُغضب الموكّلين.",
              en: "The new number immediately, explicitly against the old one. Holding the number to the end of the call is what actually angers clients.",
            },
          },
          {
            id: "i3",
            label: { ar: "«The reason is the court's listing, not anything in your file.»", en: "“The reason is the court's listing, not anything in your file.”" },
            rationale: {
              ar: "سبب واحد قصير بعد الرقم. السبب قبل الرقم يبدو تحضيراً لعذر؛ السبب بعده يبدو شفافية.",
              en: "One short reason after the number. A reason before the number sounds like an excuse being set up; after it, it sounds like transparency.",
            },
          },
          {
            id: "i4",
            label: { ar: "«What I can commit to is: filed by 2 June, chased every two weeks, written update the first Monday of each month.»", en: "“What I can commit to is: filed by 2 June, chased every two weeks, written update the first Monday of each month.”" },
            rationale: {
              ar: "ثلاثة التزامات بيدك تعيد للموكّل الإحساس بالسيطرة. هذه هي الخطوة التي ينساها أغلب المحامين تحت الضغط.",
              en: "Three commitments that are yours give the client back a sense of control. This is the step most lawyers skip under pressure.",
            },
          },
          {
            id: "i5",
            label: { ar: "«Does that change how you want to approach settlement?»", en: "“Does that change how you want to approach settlement?”" },
            rationale: {
              ar: "سؤال يعيد القرار إلى صاحبه. إنهاء الخبر السيّئ بسؤال مفتوح يحوّل المكالمة من إبلاغ إلى تشاور.",
              en: "A question that hands the decision back to its owner. Ending bad news with an open question turns the call from a notification into a consultation.",
            },
          },
        ],
      },
      {
        id: "act.le.07.4",
        kind: "pronunciation",
        skillId: "skill.le-managing-expectations",
        stage: 3,
        weight: 1,
        grading: "self_report",
        target: "guarantee",
        ipa: "/ˌɡær.ənˈtiː/",
        prompt: {
          ar: "قل الكلمة ثم الجملة. ثلاثة مقاطع والنبر على الأخير: gar-an-TEE. الوضوح هنا مهم لأن الكلمة تُقال غالباً في لحظة رفض.",
          en: "Say the word, then the sentence. Three syllables, stress on the last: gar-an-TEE. Clarity matters here because the word is usually said at the moment of a refusal.",
        },
        meaning: {
          ar: "«ضمان»: تعهّد بنتيجة. اسماً وفعلاً. في السياق المهني القانوني تُستعمل غالباً في صيغة النفي: لا يمكن ضمان نتيجة.",
          en: "A promise as to an outcome — both a noun and a verb. In legal professional use it most often appears in the negative: an outcome cannot be guaranteed.",
        },
        exampleSentence: {
          ar: "«I can't guarantee the outcome, but I can guarantee that you will always know where the file stands.» — لا أستطيع ضمان النتيجة، لكن أضمن لك أن تعرف دائماً أين وصل الملف.",
          en: "“I can't guarantee the outcome, but I can guarantee that you will always know where the file stands.”",
        },
        hint: {
          ar: "الخطأ الشائع هو النبر على المقطع الأول، فتُسمع قريبة من كلمة أخرى. اجعل الصوت يرتفع في النهاية: ...TEE.",
          en: "The common slip is stressing the first syllable, which makes it land close to a different word. Let the beat rise at the end: …TEE.",
        },
        accessibleAlternative: {
          ar: "يمكنك تقطيع الكلمة كتابةً وتحديد موضع النبر بدل النطق.",
          en: "You can mark the syllables and the stress position in writing instead of speaking.",
        },
      },
      {
        id: "act.le.07.5",
        kind: "short_written",
        skillId: "skill.le-managing-expectations",
        stage: 3,
        weight: 2,
        grading: "ai_rubric",
        rubricId: "rubric.legal-english-written.v1",
        minChars: 260,
        prompt: {
          ar: "اكتب بالإنجليزية رسالة قصيرة (4 إلى 6 جمل) تبلّغ فيها الموكّل بأن التقدير الزمني تضاعف. استعمل درجة الالتزام الصحيحة في كل جملة، ولا تعِد بنتيجة.",
          en: "Write a short English message (4–6 sentences) telling the client the estimate has doubled. Use the right commitment level in every sentence, and promise no outcome.",
        },
        context: {
          ar: [
            "الموكّل: السيد طارق منصور، نزاع على إنهاء عقد عمل.",
            "قلت له سابقاً: جلسة خلال أربعة أشهر.",
            "الجديد: جدول المحكمة تغيّر، والواقعي تسعة إلى اثني عشر شهراً.",
            "ما تملكه أنت: إيداع مذكّرتنا بحلول الثلاثاء 2 حزيران 2026، والمتابعة كل أسبوعين، وتحديث مكتوب أول اثنين من كل شهر.",
          ],
          en: [
            "Client: Mr Tarek Mansour, dispute over the termination of an employment contract.",
            "What you told him before: a hearing within four months.",
            "What changed: the court's list moved; realistically nine to twelve months.",
            "What you control: filing our submissions by Tuesday 2 June 2026, chasing every two weeks, a written update on the first Monday of each month.",
          ],
        },
        modelAnswer: {
          ar: [
            "«Dear Mr Mansour, I have an update on timing and it is longer than we hoped.»",
            "«We are now realistically looking at nine to twelve months to a hearing, rather than the four months I gave you in March. The reason is the court's listing, not anything in your file.»",
            "«I can't promise a hearing date — that decision is the court's. What I can commit to is this: our submissions are filed by Tuesday 2 June 2026, I chase the listing every two weeks, and you receive a written update on the first Monday of each month.»",
            "«If you would like to reconsider settlement in light of the new timetable, I can put the options to you this week.»",
          ],
          en: [
            "“Dear Mr Mansour, I have an update on timing and it is longer than we hoped.”",
            "“We are now realistically looking at nine to twelve months to a hearing, rather than the four months I gave you in March. The reason is the court's listing, not anything in your file.”",
            "“I can't promise a hearing date — that decision is the court's. What I can commit to is this: our submissions are filed by Tuesday 2 June 2026, I chase the listing every two weeks, and you receive a written update on the first Monday of each month.”",
            "“If you would like to reconsider settlement in light of the new timetable, I can put the options to you this week.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«Dear Mr Mansour, I hope you are well. I am writing to update you on the matter.»",
              "«Unfortunately there may be some delay in the listing of the hearing, as these things are sometimes outside our control, but we will of course continue to do everything possible.»",
              "«I remain confident that we will achieve a good result for you in due course.»",
            ],
            en: [
              "“Dear Mr Mansour, I hope you are well. I am writing to update you on the matter.”",
              "“Unfortunately there may be some delay in the listing of the hearing, as these things are sometimes outside our control, but we will of course continue to do everything possible.”",
              "“I remain confident that we will achieve a good result for you in due course.”",
            ],
          },
          whatIsWrong: {
            ar: "الرقم الجديد غائب تماماً — الموكّل لا يعرف أنها صارت تسعة أشهر. التحفّظات المتراكمة (may be, some, sometimes) تُذيب الخبر، ثم تأتي جملة الثقة بالنتيجة لتضيف الوعد الوحيد الممنوع في الرسالة كلها.",
            en: "The new number is missing entirely — the client does not learn it is now nine months. Stacked hedges (may be, some, sometimes) dissolve the news, and then the confidence line adds the one promise the message must not contain.",
          },
        },
      },
      {
        id: "act.le.07.6",
        kind: "reflection",
        skillId: "skill.le-managing-expectations",
        stage: 3,
        weight: 1,
        grading: "self_report",
        prompt: {
          ar: "تذكّر آخر مرة قلت فيها «yes» بالإنجليزية وأنت تقصد «probably». ما الذي دفعك: قناعة بالملف، أم ضيق اللحظة باللغة الثانية؟",
          en: "Recall the last time you said “yes” in English when you meant “probably”. What drove it — your view of the file, or the discomfort of the moment in a second language?",
        },
        followUp: {
          ar: "اكتب الآن الجملة التي كنت ستقولها لو كان معك الوقت. هذه هي الجملة التي ستحفظها.",
          en: "Write out the sentence you would have used if you had had time. That is the one to memorise.",
        },
      },
    ],
    summaryCard: {
      id: "card.le.07",
      title: {
        ar: "إدارة التوقّعات: درجة اللغة تتبع درجة السيطرة",
        en: "Managing expectations: language level follows control level",
      },
      whatYouLearned: {
        ar: [
          "will لما بيدك · should be able to لما بيد جهة أخرى · aim to لما يتوقف على خصم.",
          "الرفض المهني نصفه «لا أستطيع» ونصفه الأطول «إليك ما أستطيع».",
          "الخبر غير المُرضي يبدأ بإشارة، ثم رقم، ثم سبب واحد، ثم ثلاثة التزامات.",
          "التخفيف المتراكم ليس أدباً؛ إنه إخفاء للمعلومة التي يدفع الموكّل ثمنها.",
        ],
        en: [
          "“will” for what is yours · “should be able to” for what belongs to another body · “aim to” for what depends on an opponent.",
          "A professional refusal is half “I can't” and — in the longer half — “here is what I can”.",
          "Unwelcome news runs: signal, number, one reason, three commitments.",
          "Stacked hedging is not politeness; it hides the information the client is paying for.",
        ],
      },
      framework: {
        name: { ar: "إشارة · رقم · سبب · التزام", en: "Signal · Number · Reason · Commit" },
        steps: [
          { ar: "أشِر إلى أن الخبر غير مُرضٍ قبل أن تقوله.", en: "Signal that the news is unwelcome before you give it." },
          { ar: "أعطِ الرقم الجديد مقارناً بالقديم.", en: "Give the new number against the old one." },
          { ar: "سبب واحد قصير، بعد الرقم لا قبله.", en: "One short reason, after the number and not before." },
          { ar: "ثلاثة التزامات بيدك أنت، بتواريخ.", en: "Three commitments that are yours, with dates." },
        ],
      },
      rememberThis: {
        ar: "الوعد الذي تعطيه هرباً من صمت محرج يعيش في الملف أطول منك.",
        en: "A promise made to escape an awkward silence outlives you in the file.",
      },
      useItTomorrow: {
        ar: "قبل كل مكالمة إنجليزية، اكتب ثلاثة أشياء بيدك وحدك. هي جوابك عن أي سؤال عن الضمانات.",
        en: "Before every English call, list three things that are entirely in your hands. That is your answer to any question about guarantees.",
      },
      phrases: [
        { en: "I can't promise that — no lawyer honestly can.", ar: "لا أستطيع أن أعدك بذلك، ولا يستطيع أي محامٍ صادق ذلك.", register: "neutral" },
        { en: "What I can commit to is this…", ar: "ما أستطيع الالتزام به هو الآتي…", register: "neutral" },
        { en: "That part is entirely in our hands.", ar: "هذا الجزء بيدنا وحدنا.", register: "plain" },
        { en: "We should be able to, but the decision is the court's.", ar: "يُفترض أن نستطيع، لكن القرار للمحكمة.", register: "formal" },
        { en: "We probably can — but it's the court's call, not ours.", ar: "على الأرجح نستطيع، لكن القرار للمحكمة لا لنا.", register: "plain" },
        { en: "I have an update on timing, and it is longer than we hoped.", ar: "لديّ تحديث بشأن التوقيت، وهو أطول مما كنا نأمل.", register: "neutral" },
        { en: "I would rather give you a date I can keep.", ar: "أفضّل أن أعطيك موعداً أستطيع الوفاء به.", register: "plain" },
        { en: "Does that change how you want to approach settlement?", ar: "هل يغيّر هذا الطريقة التي تريد بها التعامل مع التسوية؟", register: "neutral" },
      ],
    },
  },
  // =========================================================================
  // unit.le.08 — Writing a Client Update
  // =========================================================================
  {
    id: "unit.le.08",
    chapterId: "ch.le.writing-and-pressure",
    order: 8,
    title: {
      ar: "كتابة تحديث للموكّل بالإنجليزية",
      en: "Writing a Client Update",
    },
    subtitle: {
      ar: "أربعة أقسام، سطر موضوع يعمل، وانضباط في الطول",
      en: "Four parts, a subject line that works, and length discipline",
    },
    primarySkillId: "skill.le-client-update-writing",
    skillIds: ["skill.le-client-update-writing", "skill.le-dates-deadlines", "skill.le-explaining-next-steps"],
    stage: 3,
    estimatedMinutes: 12,
    targetLevel: 3,
    sourceIds: ["src.client-centered-law-firm", "src.they-ask-you-answer", "src.legal-project-management"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
    steps: [
      {
        kind: "hook",
        id: "st.le.08.hook",
        text: {
          ar: "موكّلك يقرأ رسالتك واقفاً في مصعد، على شاشة بعرض ست سنتيمترات. كل ما يقع تحت السطر الخامس لم يُقرأ.",
          en: "Your client reads your email standing in a lift, on a screen six centimetres wide. Everything below line five was not read.",
        },
      },
      {
        kind: "why_it_matters",
        id: "st.le.08.why",
        text: {
          ar: "الرسالة الطويلة لا تُظهر اجتهاداً، بل تنقل عبء الفرز إلى الموكّل. وحين يُدفن المطلوب منه في الفقرة الثالثة، يتأخر الملف ويظنّ هو أن التأخير منك.",
          en: "A long email does not show diligence; it transfers the sorting work to the client. And when the thing you need from him sits in paragraph three, the file slips — and he thinks the slippage is yours.",
        },
      },
      {
        kind: "learning_goal",
        id: "st.le.08.goals",
        goals: {
          ar: [
            "تكتب سطر موضوع يخبر بالملف والمطلوب والتاريخ قبل فتح الرسالة.",
            "تبني التحديث من أربعة أقسام: أين وصلنا / ما الذي تغيّر / ما أحتاجه منك / ما سيحدث بعد ذلك.",
            "تعرف متى يكون سطران أفضل من صفحة، ومتى لا يكفيان.",
          ],
          en: [
            "Write a subject line that gives the matter, the ask and the date before the email is opened.",
            "Build the update from four parts: where we are / what changed / what I need from you / what happens next.",
            "Know when two lines beat a page — and when they do not.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "st.le.08.lesson",
        title: {
          ar: "التحديث في أربعة أقسام",
          en: "The four-part update",
        },
        body: {
          ar: [
            "سطر الموضوع: الملف + الفعل + التاريخ. «Al-Nour lease — two documents needed from you by Thursday 14 May» يعمل. «Update» لا يعمل.",
            "١. Where we are: جملة واحدة عن الوضع الحالي، لا سرد لتاريخ الملف.",
            "٢. What changed: ما الجديد منذ آخر رسالة فقط. إن لم يتغيّر شيء، قل ذلك صراحةً.",
            "٣. What I need from you: بعنوان فرعي أو نقاط، مع تاريخ. هذا هو القسم الذي يُدفن دائماً؛ ارفعه.",
            "٤. What happens next: من يفعل ماذا ومتى، ومتى ستكتب أنت مرة أخرى.",
            "الطول: إن كان القسمان الأولان بلا جديد وليس عندك طلب، فسطران تحديثٌ كامل ومحترَم.",
          ],
          en: [
            "Subject line: matter + action + date. “Al-Nour lease — two documents needed from you by Thursday 14 May” works. “Update” does not.",
            "1. Where we are: one sentence on the current position, not a history of the file.",
            "2. What changed: only what is new since your last message. If nothing changed, say so plainly.",
            "3. What I need from you: as a heading or bullets, with a date. This is the part that always gets buried — lift it.",
            "4. What happens next: who does what by when, and when you will write again.",
            "Length: if the first two parts have no news and you have no ask, two lines is a complete and respectable update.",
          ],
        },
      },
      {
        kind: "visual",
        id: "st.le.08.visual",
        title: { ar: "أربعة أقسام بالترتيب", en: "Four parts, in order" },
        variant: "steps",
        items: [
          {
            label: { ar: "Where we are", en: "Where we are" },
            detail: { ar: "جملة واحدة. الوضع اليوم، لا الرحلة كاملة.", en: "One sentence. Today's position, not the whole journey." },
            tone: "neutral",
          },
          {
            label: { ar: "What changed", en: "What changed" },
            detail: { ar: "الجديد منذ آخر رسالة فقط. «Nothing has changed» جواب مشروع.", en: "Only what is new since your last message. “Nothing has changed” is a legitimate answer." },
            tone: "neutral",
          },
          {
            label: { ar: "What I need from you", en: "What I need from you" },
            detail: { ar: "نقاط + تاريخ. لا يُذكر داخل فقرة أبداً.", en: "Bullets plus a date. Never inside a paragraph." },
            tone: "positive",
          },
          {
            label: { ar: "What happens next", en: "What happens next" },
            detail: { ar: "من، ماذا، متى — ومتى ستكتب أنت مجدداً.", en: "Who, what, when — and when you will write again." },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "st.le.08.worked",
        strong: {
          label: { ar: "تحديث من سطرين، وهو كافٍ", en: "A two-line update, and it is enough" },
          text: {
            ar: [
              "«Subject: Haddad v Sabbagh — no news this week, next update Monday 8 June»",
              "«Dear Mr Haddad, nothing has moved since Friday: we are still waiting for the surveyor's report, which is due on Wednesday 10 June. I don't need anything from you this week. I will write again on Monday 8 June whether or not the report has arrived.»",
            ],
            en: [
              "“Subject: Haddad v Sabbagh — no news this week, next update Monday 8 June”",
              "“Dear Mr Haddad, nothing has moved since Friday: we are still waiting for the surveyor's report, which is due on Wednesday 10 June. I don't need anything from you this week. I will write again on Monday 8 June whether or not the report has arrived.”",
            ],
          },
          why: {
            ar: "«لا جديد» معلومة كاملة حين تأتي بموعد الرسالة التالية. الموكّل يتوقف عن القلق ولا يتصل، وأنت وفّرت على نفسك مكالمة.",
            en: "“No news” is complete information when it comes with the date of the next message. The client stops worrying and does not call, and you have saved yourself a phone call.",
          },
        },
        weak: {
          label: { ar: "صفحة كاملة تخفي الطلب", en: "A full page that hides the ask" },
          text: {
            ar: [
              "«Subject: Update»",
              "«I hope this email finds you well. Further to our meeting, and by way of background…» ثم ثلاث فقرات عن تاريخ الملف.",
              "«…and in the meantime it would be helpful if you could send us the signed side letter and the bank statements so that we can complete our review.»",
            ],
            en: [
              "“Subject: Update”",
              "“I hope this email finds you well. Further to our meeting, and by way of background…” followed by three paragraphs of file history.",
              "“…and in the meantime it would be helpful if you could send us the signed side letter and the bank statements so that we can complete our review.”",
            ],
          },
          why: {
            ar: "سطر الموضوع لا يميّز الرسالة عن عشرين غيرها، والطلب الحقيقي مدفون في آخر فقرة بصيغة «it would be helpful» بلا تاريخ. أسبوعان ضائعان سيُنسبان إليك.",
            en: "The subject line does not distinguish this email from twenty others, and the real ask sits in the last paragraph as “it would be helpful”, with no date. Two lost weeks that will be attributed to you.",
          },
        },
      },
      { kind: "activity", id: "st.le.08.a1", activityId: "act.le.08.1", mode: "quick" },
      { kind: "activity", id: "st.le.08.a2", activityId: "act.le.08.2", mode: "quick" },
      { kind: "activity", id: "st.le.08.a3", activityId: "act.le.08.3", mode: "guided" },
      { kind: "activity", id: "st.le.08.a4", activityId: "act.le.08.4", mode: "guided" },
      { kind: "activity", id: "st.le.08.a5", activityId: "act.le.08.5", mode: "independent" },
      { kind: "activity", id: "st.le.08.a6", activityId: "act.le.08.6", mode: "independent" },
      { kind: "summary", id: "st.le.08.summary", summaryCardId: "card.le.08" },
      {
        kind: "apply_tomorrow",
        id: "st.le.08.apply",
        task: {
          ar: "خذ آخر تحديث إنجليزي أرسلته واقرأ سطر الموضوع وحده. هل يعرف الموكّل منه ما هو المطلوب منه ومتى؟ إن لا، أعد كتابته الآن.",
          en: "Take the last English update you sent and read the subject line on its own. Does the client learn from it what he must do and by when? If not, rewrite it now.",
        },
        detail: {
          ar: "القاعدة: الملف + الفعل + التاريخ. ثلاثة عناصر في أقل من عشر كلمات.",
          en: "The rule: matter + action + date. Three elements in under ten words.",
        },
      },
      {
        kind: "next_mission",
        id: "st.le.08.next",
        teaser: {
          ar: "الوحدة القادمة: السؤال الذي يأتي بعد التحديث — «لماذا يستغرق كل هذا الوقت؟» — وكيف تجيب عنه بلغة ثانية وأنت تحت الضغط.",
          en: "Next: the question that follows the update — “why is this taking so long?” — and how to answer it in a second language under pressure.",
        },
      },
    ],
    activities: [
      {
        id: "act.le.08.1",
        kind: "listening",
        skillId: "skill.le-client-update-writing",
        stage: 3,
        weight: 1,
        prompt: {
          ar: "استمع إلى الشريك وهو يملي عليك محتوى التحديث. أي عنصر يجب أن يظهر في قسم «What I need from you»؟",
          en: "Listen to the partner briefing you on the update. Which element belongs in the “What I need from you” section?",
        },
        script: {
          ar: "Right — write to Mr Haddad today. Position: their reply arrived on Friday, broadly as we expected. The surveyor's report is due on Wednesday 20 May, and I will send our recommendation once I have read it. The one thing that is holding us up is on his side: we still don't have the signed 2019 side letter or the service charge statements, and I want both in before the surveyor reports. Give him a firm day for that.",
          en: "Right — write to Mr Haddad today. Position: their reply arrived on Friday, broadly as we expected. The surveyor's report is due on Wednesday 20 May, and I will send our recommendation once I have read it. The one thing that is holding us up is on his side: we still don't have the signed 2019 side letter or the service charge statements, and I want both in before the surveyor reports. Give him a firm day for that.",
        },
        transcript: {
          ar: "الترجمة: «حسناً — اكتب إلى السيد الحدّاد اليوم. الوضع: وصل ردّهم يوم الجمعة، وهو عموماً كما توقّعنا. تقرير الخبير المساحي مستحق الأربعاء 20 أيار، وسأرسل توصيتنا بعد قراءته. الشيء الوحيد الذي يعطّلنا هو من جهته: ما زلنا لا نملك الكتاب الجانبي الموقّع لسنة 2019 ولا كشوف بدل الخدمات، وأريد كليهما قبل صدور تقرير الخبير. أعطه يوماً محدداً لذلك.»",
          en: "“Right — write to Mr Haddad today. Position: their reply arrived on Friday, broadly as we expected. The surveyor's report is due on Wednesday 20 May, and I will send our recommendation once I have read it. The one thing that is holding us up is on his side: we still don't have the signed 2019 side letter or the service charge statements, and I want both in before the surveyor reports. Give him a firm day for that.”",
        },
        accessibleAlternative: {
          ar: "النص المكتوب كامل، ويمكن الإجابة منه دون تشغيل الصوت.",
          en: "The full transcript is provided and the question can be answered from it without audio.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "الكتاب الجانبي الموقّع وكشوف بدل الخدمات، بيوم محدد قبل 20 أيار.",
              en: "The signed side letter and the service charge statements, with a named day before 20 May.",
            },
            correct: true,
            rationale: {
              ar: "هذا هو العنصر الوحيد الذي يقع على الموكّل، وهو أيضاً العنصر الذي يعطّل الملف. القسم الثالث موجود لهذا بالضبط، ولا يكتمل بلا تاريخ.",
              en: "It is the only element that sits with the client, and it is also the one blocking the file. The third section exists precisely for this, and it is incomplete without a date.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "أن ردّ الطرف الآخر وصل يوم الجمعة وكان كما توقّعنا.",
              en: "That the other side's reply arrived on Friday, broadly as expected.",
            },
            rationale: {
              ar: "هذه معلومة تنتمي إلى «What changed». وضع الأخبار في قسم الطلبات يجعل الموكّل يتصفّح القسم ويتوقف عن رؤية ما هو مطلوب منه فعلاً.",
              en: "That belongs in “What changed”. Putting news in the ask section trains the client to skim it and stop seeing what is actually required of him.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "أن تقرير الخبير المساحي مستحق يوم الأربعاء 20 أيار.",
              en: "That the surveyor's report is due on Wednesday 20 May.",
            },
            rationale: {
              ar: "تاريخ مهم لكنه التزام طرف ثالث، فمكانه «What happens next». الخلط بين ما ينتظره الموكّل وما يجب أن يفعله هو أصل أغلب الرسائل غير المُجابة.",
              en: "An important date, but it is a third party's commitment, so it belongs in “What happens next”. Confusing what the client is waiting for with what he must do is the root of most unanswered emails.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "أن الشريك سيرسل توصيته بعد قراءة التقرير.",
              en: "That the partner will send his recommendation after reading the report.",
            },
            rationale: {
              ar: "التزام من جانبك أنت، ويُكتب في القسم الرابع. إن دخل في قسم الطلبات فقد يظنّ الموكّل أن عليه انتظار شيء بدل إرسال شيء.",
              en: "That is a commitment on your side and goes in the fourth section. Placed among the asks, the client may think he has something to wait for rather than something to send.",
            },
          },
        ],
      },
      {
        id: "act.le.08.2",
        kind: "best_response",
        skillId: "skill.le-client-update-writing",
        stage: 3,
        weight: 1,
        prompt: {
          ar: "أي سطر موضوع هو الأفضل للرسالة نفسها؟",
          en: "Which subject line is best for that same email?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«Al-Nour lease — 2 documents needed from you by Thursday 14 May»",
              en: "“Al-Nour lease — 2 documents needed from you by Thursday 14 May”",
            },
            correct: true,
            rationale: {
              ar: "الملف والفعل والتاريخ في تسع كلمات. الموكّل يعرف من شاشة القفل أن عليه فعل شيء ومتى، وهذا وحده يوفّر أياماً.",
              en: "Matter, action and date in nine words. From the lock screen the client already knows he must do something and by when — that alone saves days.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«Update on your matter»",
              en: "“Update on your matter”",
            },
            rationale: {
              ar: "لا يميّز الرسالة عن أي رسالة أخرى من أي محامٍ. تُفتح متأخرة أو لا تُفتح، ثم يُنسب التأخير إليك لا إلى سطر الموضوع.",
              en: "It distinguishes this email from no other email from any lawyer. It gets opened late or not at all, and the delay is attributed to you, not to the subject line.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«URGENT — please read immediately»",
              en: "“URGENT — please read immediately”",
            },
            rationale: {
              ar: "الإلحاح بلا مضمون يعمل مرة واحدة. بعدها يتعلّم الموكّل تجاهل كلمة urgent منك تحديداً، فتفقد الأداة حين تحتاجها فعلاً.",
              en: "Contentless urgency works once. After that the client learns to discount “urgent” from you specifically, and you lose the tool when you genuinely need it.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«Al-Nour lease — surveyor's report, side letter, service charge statements, next steps and timetable»",
              en: "“Al-Nour lease — surveyor's report, side letter, service charge statements, next steps and timetable”",
            },
            rationale: {
              ar: "شامل ومقطوع. الهاتف يعرض أول أربعين حرفاً فقط، فيختفي الطلب والتاريخ. سطر الموضوع مكان لطلب واحد لا لجدول أعمال.",
              en: "Comprehensive and truncated. A phone shows the first forty characters, so the ask and the date disappear. A subject line holds one request, not an agenda.",
            },
          },
        ],
      },
      {
        id: "act.le.08.3",
        kind: "ordering",
        skillId: "skill.le-client-update-writing",
        stage: 3,
        weight: 1,
        prompt: {
          ar: "رتّب أقسام التحديث المكتوب بالترتيب الذي يقرأه الموكّل على هاتفه.",
          en: "Put the parts of the written update in the order the client reads them on a phone.",
        },
        accessibleAlternative: {
          ar: "يمكنك ترقيم الأقسام من 1 إلى 4 بدل السحب.",
          en: "You can number the parts 1 to 4 instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "Where we are — جملة واحدة عن الوضع اليوم.", en: "Where we are — one sentence on today's position." },
            rationale: {
              ar: "يجيب عن السؤال الذي فتح الموكّل الرسالة من أجله. البدء بتاريخ الملف يجعله يبحث عن هذه الجملة في الأسفل.",
              en: "It answers the question the client opened the email to ask. Starting with file history makes him hunt for this sentence at the bottom.",
            },
          },
          {
            id: "i2",
            label: { ar: "What changed — الجديد منذ آخر رسالة فقط.", en: "What changed — only what is new since the last message." },
            rationale: {
              ar: "الفصل بين «أين نحن» و«ما الجديد» يمنع إعادة سرد ما يعرفه الموكّل، وهو أكبر مصدر للطول غير الضروري.",
              en: "Separating position from news prevents you re-telling what the client already knows — the single biggest source of unnecessary length.",
            },
          },
          {
            id: "i3",
            label: { ar: "What I need from you — نقاط وتاريخ.", en: "What I need from you — bullets and a date." },
            rationale: {
              ar: "قبل «ما سيحدث بعد ذلك»، لأن الموكّل قد يتوقف عن القراءة بعد أن يرى ما عليه فعله. الطلب في الأسفل طلب غير مقروء.",
              en: "Before “what happens next”, because the client may stop reading once he sees his own task. An ask at the bottom is an unread ask.",
            },
          },
          {
            id: "i4",
            label: { ar: "What happens next — من ومتى، وموعد رسالتك التالية.", en: "What happens next — who and when, plus the date of your next message." },
            rationale: {
              ar: "الخاتمة التي تمنع المكالمة. حين يعرف الموكّل موعد سماعك التالي، لا يحتاج إلى الاتصال ليطمئن.",
              en: "The closing that prevents the phone call. Once the client knows when he will next hear from you, he does not need to ring to check.",
            },
          },
        ],
      },
      {
        id: "act.le.08.4",
        kind: "pronunciation",
        skillId: "skill.le-client-update-writing",
        stage: 3,
        weight: 1,
        grading: "self_report",
        target: "acknowledge",
        ipa: "/əkˈnɒl.ɪdʒ/",
        prompt: {
          ar: "قل الكلمة ثم الجملة. النبر على المقطع الثاني: ak-NOL-ij. حرف الـ w لا يُنطق.",
          en: "Say the word, then the sentence. Stress on the second syllable: ak-NOL-ij. The “w” is silent.",
        },
        meaning: {
          ar: "«يُقرّ بالاستلام / يعترف بـ»: تأكيد أنك تلقّيت شيئاً أو أنك سمعت ما قيل. أساسية في المراسلة مع الموكّل ومع الطرف الآخر.",
          en: "To confirm receipt of something, or to recognise what has been said. Essential in correspondence with both clients and the other side.",
        },
        exampleSentence: {
          ar: "«I acknowledge receipt of your documents and will confirm my comments by Monday 8 June.» — أُقرّ باستلام مستنداتك وسأوافيك بملاحظاتي بحلول الاثنين 8 حزيران.",
          en: "“I acknowledge receipt of your documents and will confirm my comments by Monday 8 June.”",
        },
        hint: {
          ar: "الصعوبة في تتابع k ثم n مع حرف w صامت. جرّبها على مرحلتين: ak / NOL-ij، ثم صِلهما.",
          en: "The difficulty is the k-to-n sequence with a silent w. Try it in two moves: ak / NOL-ij, then join them.",
        },
        accessibleAlternative: {
          ar: "يمكنك تحديد موضع النبر والحرف الصامت كتابةً بدل النطق.",
          en: "You can mark the stress and the silent letter in writing instead of speaking.",
        },
      },
      {
        id: "act.le.08.5",
        kind: "email_rewrite",
        skillId: "skill.le-client-update-writing",
        secondarySkillIds: ["skill.le-dates-deadlines"],
        stage: 3,
        weight: 3,
        grading: "ai_rubric",
        rubricId: "rubric.legal-english-written.v1",
        minChars: 320,
        prompt: {
          ar: "أعد كتابة هذه الرسالة بالإنجليزية في أربعة أقسام مع سطر موضوع جديد. أخرج الطلب من الفقرة التي دُفن فيها، وأعطِ كل التزام تاريخاً. لا تتجاوز 160 كلمة.",
          en: "Rewrite this email in English as four parts with a new subject line. Lift the ask out of the paragraph it is buried in and give every commitment a date. Stay under 160 words.",
        },
        context: {
          ar: [
            "الموكّل: السيد كريم الحدّاد، نزاع على إيجار تجاري للطابق الأرضي.",
            "الوقائع المتاحة لك: ردّ الطرف الآخر وصل وهو كما توقّعنا؛ تقرير الخبير المساحي مستحق الأربعاء 20 أيار 2026؛ توصيتك ستصل بحلول الجمعة 22 أيار 2026.",
            "المطلوب من الموكّل: الكتاب الجانبي الموقّع لسنة 2019، وكشوف بدل الخدمات، بحلول الخميس 14 أيار 2026.",
          ],
          en: [
            "Client: Mr Karim Haddad, commercial lease dispute over a ground-floor unit.",
            "Facts available to you: the other side's reply has arrived and is broadly as expected; the surveyor's report is due on Wednesday 20 May 2026; your recommendation follows by Friday 22 May 2026.",
            "Needed from the client: the signed 2019 side letter and the service charge statements, by Thursday 14 May 2026.",
          ],
        },
        draft: {
          ar: [
            "Subject: Update",
            "Dear Mr Haddad, I hope this email finds you well and that you and your family are in the best of health. I wanted to write to update you regarding the ongoing matter concerning the commercial lease of the ground floor unit which we have been working on since our meeting, and to give you a full picture of everything that has happened since then, as I know you have been waiting to hear from us and I did not want you to think that the file had been forgotten.",
            "As you will recall, following our discussion we prepared and sent a formal letter to the other side's representatives setting out our position in detail, including the points regarding the service charge and the reinstatement obligation, and we also raised the question of the notice period which, as I explained at the time, is a matter on which the parties appear to take somewhat different views, and we have now received a response which is broadly in line with what we had anticipated, although there are certain elements within it that we will need to consider further before deciding on the most appropriate course of action going forward.",
            "In addition, we have been in contact with the surveyor and are awaiting his report, which should assist us in relation to the condition of the premises, and once that arrives we will of course be in a position to advise you more fully on the merits. In the meantime it would be helpful if you could send us the signed copy of the 2019 side letter and the bank statements showing the service charge payments so that we can complete our review, and please also let us know your availability for a call at your convenience.",
            "Kind regards.",
          ],
          en: [
            "Subject: Update",
            "Dear Mr Haddad, I hope this email finds you well and that you and your family are in the best of health. I wanted to write to update you regarding the ongoing matter concerning the commercial lease of the ground floor unit which we have been working on since our meeting, and to give you a full picture of everything that has happened since then, as I know you have been waiting to hear from us and I did not want you to think that the file had been forgotten.",
            "As you will recall, following our discussion we prepared and sent a formal letter to the other side's representatives setting out our position in detail, including the points regarding the service charge and the reinstatement obligation, and we also raised the question of the notice period which, as I explained at the time, is a matter on which the parties appear to take somewhat different views, and we have now received a response which is broadly in line with what we had anticipated, although there are certain elements within it that we will need to consider further before deciding on the most appropriate course of action going forward.",
            "In addition, we have been in contact with the surveyor and are awaiting his report, which should assist us in relation to the condition of the premises, and once that arrives we will of course be in a position to advise you more fully on the merits. In the meantime it would be helpful if you could send us the signed copy of the 2019 side letter and the bank statements showing the service charge payments so that we can complete our review, and please also let us know your availability for a call at your convenience.",
            "Kind regards.",
          ],
        },
        modelAnswer: {
          ar: [
            "Subject: Al-Nour lease — 2 documents needed from you by Thursday 14 May",
            "Dear Mr Haddad,",
            "Where we are: the other side has replied to our letter, and their position is broadly what we expected.",
            "What changed: their reply arrived on Friday. Nothing in it changes our strategy at this stage.",
            "What I need from you, by Thursday 14 May 2026: (1) the signed 2019 side letter; (2) the bank statements showing the service charge payments.",
            "What happens next: the surveyor's report is due on Wednesday 20 May 2026. I will send you my recommendation, including whether to negotiate or file, by Friday 22 May 2026. If the report is late, you will hear that from me on the 20th.",
          ],
          en: [
            "Subject: Al-Nour lease — 2 documents needed from you by Thursday 14 May",
            "Dear Mr Haddad,",
            "Where we are: the other side has replied to our letter, and their position is broadly what we expected.",
            "What changed: their reply arrived on Friday. Nothing in it changes our strategy at this stage.",
            "What I need from you, by Thursday 14 May 2026: (1) the signed 2019 side letter; (2) the bank statements showing the service charge payments.",
            "What happens next: the surveyor's report is due on Wednesday 20 May 2026. I will send you my recommendation, including whether to negotiate or file, by Friday 22 May 2026. If the report is late, you will hear that from me on the 20th.",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "Subject: Lease update",
              "Dear Mr Haddad, thank you for your patience. The other side has now replied and their response is broadly as expected. We are waiting for the surveyor's report and will advise you further once it arrives.",
              "Could you also send over the side letter and the statements when you have a moment? Kind regards.",
            ],
            en: [
              "Subject: Lease update",
              "Dear Mr Haddad, thank you for your patience. The other side has now replied and their response is broadly as expected. We are waiting for the surveyor's report and will advise you further once it arrives.",
              "Could you also send over the side letter and the statements when you have a moment? Kind regards.",
            ],
          },
          whatIsWrong: {
            ar: "الطول عولج والمشكلة الحقيقية بقيت: لا يوجد تاريخ واحد في الرسالة كلها، والطلب ما زال في آخر سطر بصيغة «when you have a moment» التي تعني «لا استعجال». الاختصار ليس هو الدرس؛ الدرس هو رفع الطلب وربطه بيوم.",
            en: "The length was fixed and the real problem survived: there is not one date in the whole message, and the ask still sits in the last line as “when you have a moment”, which reads as “no hurry”. Brevity was never the lesson — lifting the ask and dating it was.",
          },
        },
      },
      {
        id: "act.le.08.6",
        kind: "reflection",
        skillId: "skill.le-client-update-writing",
        stage: 3,
        weight: 1,
        grading: "self_report",
        prompt: {
          ar: "حين تكتب بالإنجليزية، هل تطيل الرسالة لأن الموكّل يحتاج التفصيل، أم لأن الطول يشعرك بأن العمل يبدو أكبر؟ كن صريحاً مع نفسك.",
          en: "When you write in English, do you write long because the client needs the detail, or because length makes the work look bigger? Be honest with yourself.",
        },
        followUp: {
          ar: "اختر رسالة أرسلتها هذا الشهر واحذف منها نصف الكلمات دون أن تفقد معلومة واحدة. لاحظ ما الذي حُذف أولاً.",
          en: "Take an email you sent this month and cut half the words without losing a single piece of information. Notice what went first.",
        },
      },
    ],
    summaryCard: {
      id: "card.le.08",
      title: {
        ar: "التحديث المكتوب: أربعة أقسام وسطر موضوع يعمل",
        en: "The written update: four parts and a subject line that works",
      },
      whatYouLearned: {
        ar: [
          "سطر الموضوع = الملف + الفعل + التاريخ، في أقل من عشر كلمات.",
          "الترتيب: أين وصلنا / ما الذي تغيّر / ما أحتاجه منك / ما سيحدث بعد ذلك.",
          "قسم الطلبات لا يُكتب داخل فقرة أبداً، ولا يكتمل بلا تاريخ.",
          "«لا جديد هذا الأسبوع» تحديث كامل إن رافقه موعد الرسالة التالية.",
        ],
        en: [
          "Subject line = matter + action + date, in under ten words.",
          "Order: where we are / what changed / what I need from you / what happens next.",
          "The ask never sits inside a paragraph, and it is never complete without a date.",
          "“No news this week” is a complete update when it carries the date of the next one.",
        ],
      },
      framework: {
        name: { ar: "أين · ما تغيّر · ما أحتاجه · ما بعده", en: "Where · Changed · Need · Next" },
        steps: [
          { ar: "أين وصلنا: جملة واحدة عن الوضع اليوم.", en: "Where we are: one sentence on today's position." },
          { ar: "ما الذي تغيّر: الجديد منذ آخر رسالة فقط.", en: "What changed: only what is new since the last message." },
          { ar: "ما أحتاجه منك: نقاط مرقّمة وتاريخ.", en: "What I need from you: numbered points and a date." },
          { ar: "ما سيحدث بعد ذلك: من ومتى، وموعد رسالتك التالية.", en: "What happens next: who and when, plus your next message date." },
        ],
      },
      rememberThis: {
        ar: "الطلب المدفون في الفقرة الثالثة هو تأخير اخترته أنت.",
        en: "An ask buried in paragraph three is a delay you chose.",
      },
      useItTomorrow: {
        ar: "اكتب تحديثك القادم بالعناوين الأربعة حرفياً في المتن. الموكّل لن يعترض، والزمن الذي توفّره هو زمنك.",
        en: "Write your next update with the four headings literally in the body. No client has ever objected, and the time you save is your own.",
      },
      phrases: [
        { en: "Where we are:", ar: "أين وصلنا:", register: "plain" },
        { en: "What changed since my last email:", ar: "ما الذي تغيّر منذ رسالتي السابقة:", register: "neutral" },
        { en: "What I need from you, by Thursday 14 May:", ar: "ما أحتاجه منك بحلول الخميس 14 أيار:", register: "neutral" },
        { en: "What happens next:", ar: "ما سيحدث بعد ذلك:", register: "plain" },
        { en: "There is no news this week; I will write again on Monday 8 June.", ar: "لا جديد هذا الأسبوع؛ سأكتب إليك مجدداً يوم الاثنين 8 حزيران.", register: "neutral" },
        { en: "I acknowledge receipt of your documents.", ar: "أُقرّ باستلام مستنداتك.", register: "formal" },
        { en: "Thank you — your documents arrived safely.", ar: "شكراً لك، وصلت مستنداتك.", register: "plain" },
        { en: "I don't need anything from you at this stage.", ar: "لا أحتاج شيئاً منك في هذه المرحلة.", register: "plain" },
        { en: "Please reply to this email rather than starting a new one.", ar: "يُرجى الرد على هذه الرسالة بدل فتح رسالة جديدة.", register: "neutral" },
      ],
    },
  },
  // =========================================================================
  // unit.le.09 — Handling a Difficult Question
  // =========================================================================
  {
    id: "unit.le.09",
    chapterId: "ch.le.writing-and-pressure",
    order: 9,
    title: {
      ar: "الإجابة عن سؤال صعب بالإنجليزية",
      en: "Handling a Difficult Question",
    },
    subtitle: {
      ar: "أربع حركات تُبقيك صادقاً حين لا تملك الجواب بعد",
      en: "Four moves that keep you honest when you do not have the answer yet",
    },
    primarySkillId: "skill.le-difficult-questions",
    skillIds: ["skill.le-difficult-questions", "skill.le-managing-expectations", "skill.le-dates-deadlines"],
    stage: 4,
    estimatedMinutes: 11,
    targetLevel: 4,
    sourceIds: ["src.how-to-argue-and-win", "src.client-centered-law-firm", "src.your-brain-at-work"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
    steps: [
      {
        kind: "hook",
        id: "st.le.09.hook",
        text: {
          ar: "«لماذا يستغرق الأمر كل هذا الوقت؟» نادراً ما يكون سؤالاً عن الوقت. في الغالب هو: «هل ما زال ملفّي على مكتبك؟»",
          en: "“Why is this taking so long?” is rarely a question about time. Most of the time it means: “Is my file still on your desk?”",
        },
      },
      {
        kind: "why_it_matters",
        id: "st.le.09.why",
        text: {
          ar: "تحت الضغط، وبلغة ثانية، يلتقط الدماغ أقصر جملة يُتقنها. وأقصر ما نُتقنه بالإنجليزية هو الأخطر: «don't worry»، «it will be fine». دقيقة ارتباك تشتري وعداً تحمله سنة.",
          en: "Under pressure, in a second language, the brain reaches for the shortest sentence it owns. In English the shortest ones are the dangerous ones: “don't worry”, “it will be fine”. A minute of discomfort buys a promise you carry for a year.",
        },
      },
      {
        kind: "learning_goal",
        id: "st.le.09.goals",
        goals: {
          ar: [
            "تجيب بالإنجليزية عن أربعة أسئلة يخشاها كل محامٍ، دون أن تخترع يقيناً لا تملكه.",
            "تفصل ما تعرفه اليوم عمّا لا تعرفه بعد، وتقول الثاني بنبرة واثقة لا اعتذارية.",
            "تُنهي كل جواب صعب بنقطة تفتيش لها يوم مُسمّى.",
          ],
          en: [
            "Answer in English the four questions every lawyer dreads, without inventing certainty you do not have.",
            "Separate what you know today from what you do not know yet, and deliver the second in a confident rather than apologetic tone.",
            "End every difficult answer with a checkpoint that has a named day.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "st.le.09.lesson",
        title: {
          ar: "أربع حركات تحت الضغط",
          en: "Four moves under pressure",
        },
        body: {
          ar: [
            "١. Acknowledge — جملة قصيرة تُظهر أنك سمعت السؤال: «That's a fair question.» أما «Excellent question!» فتُسمع بالإنجليزية مجاملةً تسبق التهرّب.",
            "٢. Answer what you can — ما تعرفه اليوم، برقم أو بتاريخ، في جملة واحدة لا في ثلاث.",
            "٣. Admit the boundary — «What I don't know yet is…». تُقال كواقعة، لا كاعتذار، ولا تُتبع بـ«sorry».",
            "٤. Appoint a checkpoint — يوم يسمع فيه الموكّل صوتك، سواء وصل الجواب أو لم يصل.",
            "قاعدة الصمت: ثانيتان من الصمت تُسمعان تفكيراً؛ الوعد المتسرّع يُسمع ذعراً.",
            "طول الدور: ثلاث جمل ثم قف. الدور الطويل بالإنجليزية لا يُسمع اجتهاداً، بل إخفاءً.",
          ],
          en: [
            "1. Acknowledge — one short sentence showing you heard the question: “That's a fair question.” “Excellent question!” lands in English as the compliment that precedes an evasion.",
            "2. Answer what you can — what you know today, with a figure or a date, in one sentence rather than three.",
            "3. Admit the boundary — “What I don't know yet is…”. Delivered as a fact, not an apology, and never followed by “sorry”.",
            "4. Appoint a checkpoint — a day on which the client hears your voice, whether or not the answer has arrived.",
            "The silence rule: two seconds of silence reads as thinking; a rushed promise reads as panic.",
            "Turn length: three sentences, then stop. In English a long turn does not sound diligent — it sounds like concealment.",
          ],
        },
      },
      {
        kind: "visual",
        id: "st.le.09.visual",
        title: {
          ar: "ما يسأله وما يسأل عنه فعلاً",
          en: "What he asks, and what he is really asking",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "“Why is this taking so long?”", en: "“Why is this taking so long?”" },
            detail: {
              ar: "تحتها: «هل نسيتَ ملفّي؟» الجواب نقطة تفتيش بتاريخ، لا اعتذار عن التقويم.",
              en: "Underneath: “Have you forgotten my file?” The answer is a dated checkpoint, not an apology for the calendar.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "“How much will this cost in total?”", en: "“How much will this cost in total?”" },
            detail: {
              ar: "تحتها: «هل أستطيع أن أوقف هذا إن كبر؟» الجواب مدى، وما الذي يحرّكه، وسقف لا تتجاوزه دون إذنه.",
              en: "Underneath: “Can I still stop this if it grows?” The answer is a range, what moves it, and a ceiling you will not cross without his permission.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "“Can you just call the judge?”", en: "“Can you just call the judge?”" },
            detail: {
              ar: "تحتها: «هل لديك نفوذ؟» الجواب: ما الذي يُسرّع الجدول فعلاً — ولا تلمّح أبداً بأنك قد تفعلها.",
              en: "Underneath: “Do you have influence?” The answer is what actually moves a listing — and never a hint that you might.",
            },
            tone: "negative",
          },
          {
            label: { ar: "“My last lawyer said this was simple.”", en: "“My last lawyer said this was simple.”" },
            detail: {
              ar: "تحتها: «أيّكما مخطئ؟» الجواب: ما الذي تغيّر في الوقائع، لا حكم على زميل.",
              en: "Underneath: “Which of you is wrong?” The answer is what changed in the facts, not a verdict on a colleague.",
            },
            tone: "neutral",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "st.le.09.worked",
        strong: {
          label: { ar: "سؤال المال، مُجاباً", en: "The money question, answered" },
          text: {
            ar: [
              "“That's a fair question, and I'd rather answer it properly than quickly.”",
              "“To the end of the exchange of pleadings, my estimate is between six and nine thousand dollars. That figure I can stand behind.”",
              "“What I can't price yet is the accounting expert. If the court orders one, add roughly two thousand. The preliminary hearing on Tuesday 9 June decides that.”",
              "“I'll send you a written cost note on Wednesday 10 June, and I won't pass nine thousand without asking you first.”",
            ],
            en: [
              "“That's a fair question, and I'd rather answer it properly than quickly.”",
              "“To the end of the exchange of pleadings, my estimate is between six and nine thousand dollars. That figure I can stand behind.”",
              "“What I can't price yet is the accounting expert. If the court orders one, add roughly two thousand. The preliminary hearing on Tuesday 9 June decides that.”",
              "“I'll send you a written cost note on Wednesday 10 June, and I won't pass nine thousand without asking you first.”",
            ],
          },
          why: {
            ar: "رقم يستطيع الدفاع عنه، ثم تسمية صريحة للجزء المجهول بدل إخفائه، ثم تاريخان وسقف لا يُتجاوز دون إذن. الموكّل خرج قادراً على اتخاذ قرار، لا مطمئناً فقط.",
            en: "A figure he can defend, then the unknown part named instead of hidden, then two dates and a ceiling he will not cross without permission. The client leaves able to make a decision, not merely reassured.",
          },
        },
        weak: {
          label: { ar: "المجاملة العربية مترجمة حرفياً", en: "Arabic courtesy, translated word for word" },
          text: {
            ar: [
              "“Please do not tire yourself with this question. We are at your service, and the matter is in good hands.”",
              "“The costs are normal costs, like any case. Do not worry about this now.”",
              "“We will see at the end, and you will be satisfied, God willing.”",
            ],
            en: [
              "“Please do not tire yourself with this question. We are at your service, and the matter is in good hands.”",
              "“The costs are normal costs, like any case. Do not worry about this now.”",
              "“We will see at the end, and you will be satisfied, God willing.”",
            ],
          },
          why: {
            ar: "كل سطر ترجمة أمينة لصيغة عربية مهذّبة تماماً. لكن المستمع الإنجليزي لا يسمع كرماً؛ يسمع رفضاً للإجابة عن سؤال مشروع عن المال، فيستنتج أن الرقم سيّئ ولذلك يُخفى. ثم إن «you will be satisfied» وعدٌ بالنتيجة وإن لم تقصده.",
            en: "Every line is a faithful rendering of a perfectly courteous Arabic formula. But an English-speaking listener does not hear generosity; he hears a refusal to answer a legitimate question about money, and concludes the number must be bad. And “you will be satisfied” is an outcome promise, whether or not you meant one.",
          },
        },
      },
      { kind: "activity", id: "st.le.09.a1", activityId: "act.le.09.1", mode: "quick" },
      { kind: "activity", id: "st.le.09.a2", activityId: "act.le.09.2", mode: "quick" },
      { kind: "activity", id: "st.le.09.a3", activityId: "act.le.09.3", mode: "guided" },
      { kind: "activity", id: "st.le.09.a4", activityId: "act.le.09.4", mode: "guided" },
      { kind: "activity", id: "st.le.09.a5", activityId: "act.le.09.5", mode: "independent" },
      { kind: "activity", id: "st.le.09.a6", activityId: "act.le.09.6", mode: "independent" },
      { kind: "summary", id: "st.le.09.summary", summaryCardId: "card.le.09" },
      {
        kind: "apply_tomorrow",
        id: "st.le.09.apply",
        task: {
          ar: "اكتب على رأس دفترك قبل مكالمتك الإنجليزية القادمة: «What I don't know yet is…» واستعملها مرة واحدة على الأقل.",
          en: "Write one line at the top of your notepad before your next English call: “What I don't know yet is…” — and use it at least once.",
        },
        detail: {
          ar: "لاحظ ما يحدث بعدها مباشرة: الموكّل لا ينزعج من حدّ معرفتك، بل يهدأ لأنك حدّدته له.",
          en: "Watch what happens immediately afterwards: the client is not unsettled by the limit of your knowledge — he settles, because you drew it for him.",
        },
      },
      {
        kind: "next_mission",
        id: "st.le.09.next",
        teaser: {
          ar: "الوحدة الأخيرة: آخر تسعين ثانية من الاجتماع — الجزء الوحيد الذي يكتبه الموكّل في دفتره، وأكثر جزء يُهدر بالإنجليزية.",
          en: "The last unit: the final ninety seconds of a meeting — the only part the client writes down, and the part most often wasted in English.",
        },
      },
    ],
    activities: [
      {
        id: "act.le.09.1",
        kind: "listening",
        skillId: "skill.le-difficult-questions",
        stage: 4,
        weight: 1,
        prompt: {
          ar: "استمع إلى الموكّل. ما الذي يطلبه فعلاً خلف السؤال؟",
          en: "Listen to the client. What is he actually asking for behind the question?",
        },
        context: {
          ar: ["الموكّل: السيد توماس فرهوفن، المدير المالي لشركة تغليف هولندية، نزاع على إنهاء عقد توزيع في المنطقة."],
          en: ["The client: Mr Thomas Verhoeven, finance director of a Dutch packaging manufacturer, in a dispute over the termination of a regional distribution agreement."],
        },
        script: {
          ar: "Look, I'll be straight with you. We instructed you in February and it is now June, and from where I sit nothing has moved. My board meets on Monday and they will ask me what exactly we are paying for. So — why is this taking so long?",
          en: "Look, I'll be straight with you. We instructed you in February and it is now June, and from where I sit nothing has moved. My board meets on Monday and they will ask me what exactly we are paying for. So — why is this taking so long?",
        },
        transcript: {
          ar: "الترجمة: «دعني أكون صريحاً معك. وكّلناك في شباط ونحن الآن في حزيران، ومن موقعي لم يتحرّك شيء. مجلس الإدارة يجتمع يوم الاثنين وسيسألني عمّا ندفع مقابله بالضبط. إذن — لماذا يستغرق الأمر كل هذا الوقت؟»",
          en: "“Look, I'll be straight with you. We instructed you in February and it is now June, and from where I sit nothing has moved. My board meets on Monday and they will ask me what exactly we are paying for. So — why is this taking so long?”",
        },
        accessibleAlternative: {
          ar: "النص المكتوب كامل، ويمكن الإجابة منه دون تشغيل الصوت.",
          en: "The full transcript is provided and the question can be answered from it without audio.",
        },
        hint: {
          ar: "انتبه إلى الجملة التي تسبق السؤال. هي التي تخبرك بما يحتاجه.",
          en: "Look at the sentence just before the question. That is the one telling you what he needs.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "شيئاً ملموساً يعرضه على مجلس إدارته يوم الاثنين، ويوماً يعرف عنده الخبر التالي.",
              en: "Something concrete to put in front of his board on Monday, and a day on which he gets the next piece of news.",
            },
            correct: true,
            rationale: {
              ar: "الغضب موجَّه إلى فجوة في مساءلته هو، لا إلى بطء المحكمة. جملة واحدة عن ما أُنجز فعلاً، وتاريخ للخطوة التالية، تحلّان مشكلته يوم الاثنين. الاعتذار لا يحلّها.",
              en: "The anger is aimed at a gap in his own accountability, not at the court's pace. One sentence on what has actually been done, plus a date for the next step, solves his Monday. An apology does not.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "اعتذاراً واضحاً عن التأخير.",
              en: "A clear apology for the delay.",
            },
            rationale: {
              ar: "الاعتذار يقبل خطأً قد لا يكون خطأك، ويترك الموكّل بلا شيء يقوله لمجلسه. اعتذر عن الصمت إن كان هناك صمت، لا عن مرور الأشهر.",
              en: "An apology accepts a fault that may not be yours and still leaves him with nothing to report. Apologise for silence if there was silence — never for the passage of months.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "شرحاً تفصيلياً لإجراءات المحكمة خطوة بخطوة.",
              en: "A step-by-step explanation of the court's procedure.",
            },
            rationale: {
              ar: "تفصيل الإجراءات هو ما يلجأ إليه المحامي تحت الضغط لأنه يعرفه. بالإنجليزية يُسمع تحويلاً للموضوع، ويُطيل الدور في اللحظة التي يجب أن يقصر فيها.",
              en: "Procedural detail is what a lawyer under pressure reaches for because he knows it well. In English it reads as a diversion, and it lengthens the turn at exactly the moment it should shorten.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "تخفيضاً في الأتعاب اعترافاً بالتأخير.",
              en: "A fee reduction in recognition of the delay.",
            },
            rationale: {
              ar: "ذكر المال لأنه يبرّر أمام مجلسه، لا لأنه يساوم. عرض المال جواب عن سؤال لم يُطرح، ويُقرأ إقراراً بالتقصير — وستُذكّر به في كل فاتورة قادمة.",
              en: "He mentioned money because he must justify it to a board, not because he is bargaining. Offering money answers a question nobody asked, reads as an admission of fault, and will be quoted back at you on every future invoice.",
            },
          },
        ],
      },
      {
        id: "act.le.09.2",
        kind: "multiple_choice",
        skillId: "skill.le-difficult-questions",
        secondarySkillIds: ["skill.le-managing-expectations"],
        stage: 4,
        weight: 1,
        prompt: {
          ar: "في المكالمة نفسها يسأل: «Can you just call the judge and ask him to move it up?» أي ردّ إنجليزي هو الأفضل؟",
          en: "Later in the same call he asks: “Can you just call the judge and ask him to move it up?” Which English reply is best?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "“I understand why you're asking. No lawyer can contact a judge about a live matter — it would be a disciplinary offence and it would damage your case. What does move a listing is a written application to expedite, and I can file one by Friday 12 June.”",
              en: "“I understand why you're asking. No lawyer can contact a judge about a live matter — it would be a disciplinary offence and it would damage your case. What does move a listing is a written application to expedite, and I can file one by Friday 12 June.”",
            },
            correct: true,
            rationale: {
              ar: "يرفض من موقع مبدأ، ويسمّي الضرر الذي يقع على الموكّل هو لا عليك أنت، ثم يعطي الطريق المشروع بتاريخ. الرفض المصحوب بمسار ليس رفضاً.",
              en: "It refuses on principle, names the damage to him rather than to you, and hands over the legitimate route with a date. A refusal that comes with a route is not a refusal.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "“Of course — I know the court staff well. Let me see what I can do.”",
              en: "“Of course — I know the court staff well. Let me see what I can do.”",
            },
            rationale: {
              ar: "سواء قصدت النفوذ أم لم تقصده، هذا ما يسمعه المستمع الإنجليزي. تكون قد قلت إن قيمتك في معارفك لا في عملك، وسيُطلب منك استعمالها مرة أخرى في موقف أخطر — ولن تستطيع الرفض حينها.",
              en: "Whether or not you meant influence, that is what an English-speaking listener hears. You have said your value lies in who you know rather than in what you do, and you will be asked to use it again in a worse situation — where refusing will be far harder.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "“Unfortunately, this is not possible.”",
              en: "“Unfortunately, this is not possible.”",
            },
            rationale: {
              ar: "صحيح ومغلق. الرفض القصير بالإنجليزية يقع أبرد بكثير من الرفض نفسه بالعربية، ولا يترك للموكّل أي طريق مشروع — فيذهب ليسأل شخصاً آخر يقول له نعم.",
              en: "Accurate, and closed. A short refusal lands far colder in English than the same refusal does in Arabic, and it leaves him with no legitimate route — so he goes and asks someone who will say yes.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "“I will try, but I cannot promise anything.”",
              en: "“I will try, but I cannot promise anything.”",
            },
            rationale: {
              ar: "تخفيف عربي مترجم حرفياً. بالإنجليزية «I will try» تعني أنك ستحاول فعل الشيء المطلوب نفسه — أي الاتصال بالقاضي. الجملة التي ظننتها تحفّظاً صارت إعلان استعداد لفعل غير مشروع.",
              en: "An Arabic hedge rendered word for word. In English “I will try” means you will attempt the very thing that was asked — contacting the judge. The sentence you thought was a reservation has become a declaration that you are willing to do something improper.",
            },
          },
        ],
      },
      {
        id: "act.le.09.3",
        kind: "categorization",
        skillId: "skill.le-difficult-questions",
        secondarySkillIds: ["skill.le-managing-expectations"],
        stage: 4,
        weight: 2,
        prompt: {
          ar: "ضع كل عبارة إنجليزية في حركتها من الحركات الأربع — أو في خانة «لا تُقال أبداً».",
          en: "Put each English phrase into its move — or into “never say this”.",
        },
        accessibleAlternative: {
          ar: "يمكنك كتابة رقم الخانة (1–4 أو ✗) بجانب كل عبارة بدل السحب.",
          en: "You can write the bucket number (1–4 or ✗) beside each phrase instead of dragging.",
        },
        buckets: [
          { id: "b.ack", label: { ar: "١ · Acknowledge — أقرّ بالسؤال", en: "1 · Acknowledge" } },
          { id: "b.ans", label: { ar: "٢ · Answer — أجب بما تعرفه", en: "2 · Answer what you can" } },
          { id: "b.adm", label: { ar: "٣ · Admit — سمِّ ما لا تعرفه بعد", en: "3 · Name what you can't know yet" } },
          { id: "b.next", label: { ar: "٤ · Appoint — حدّد نقطة التفتيش", en: "4 · Appoint the checkpoint" } },
          { id: "b.never", label: { ar: "✗ يقين مُخترَع — لا يُقال", en: "✗ Invented certainty — never" } },
        ],
        items: [
          {
            id: "i1",
            label: { ar: "“That's a fair question, and I'd rather answer it properly than quickly.”", en: "“That's a fair question, and I'd rather answer it properly than quickly.”" },
            bucketId: "b.ack",
            rationale: {
              ar: "إقرار حقيقي: يعترف بمشروعية السؤال ويشتري لك ثانيتين للتفكير دون أن يبدو تهرّباً. لاحظ أنه لا يمدح السؤال بل يصفه بالعدل.",
              en: "A real acknowledgement: it concedes the question is legitimate and buys you two seconds of thinking time without sounding evasive. Note that it does not praise the question — it calls it fair.",
            },
          },
          {
            id: "i2",
            label: { ar: "“Let me make sure I've understood which part of this worries you most.”", en: "“Let me make sure I've understood which part of this worries you most.”" },
            bucketId: "b.ack",
            rationale: {
              ar: "صيغة مهلة مشروعة: تُظهر إصغاءً وتكشف السؤال الحقيقي تحت السؤال المعلن. استعملها مرة واحدة؛ تكرارها يصبح مماطلة.",
              en: "A legitimate holding form: it shows you are listening and surfaces the real question under the stated one. Use it once — repeated, it becomes stalling.",
            },
          },
          {
            id: "i3",
            label: { ar: "“As of today the claim has been filed and served, and their defence is due on 24 June.”", en: "“As of today the claim has been filed and served, and their defence is due on 24 June.”" },
            bucketId: "b.ans",
            rationale: {
              ar: "جواب بالوقائع والتواريخ لا بالمشاعر. «as of today» تحمي الجملة من التقادم إن قرأها الموكّل بعد أسبوعين.",
              en: "An answer made of facts and dates rather than feelings. “As of today” protects the sentence from going stale if he re-reads it two weeks later.",
            },
          },
          {
            id: "i4",
            label: { ar: "“To the end of pleadings my estimate is six to nine thousand dollars.”", en: "“To the end of pleadings my estimate is six to nine thousand dollars.”" },
            bucketId: "b.ans",
            rationale: {
              ar: "المدى المحدود بمرحلة مُسمّاة هو الشكل الوحيد الأمين لتقدير الكلفة. الرقم الواحد كذبة، والامتناع عن أي رقم تهرّب.",
              en: "A range bounded by a named stage is the only honest form of a cost estimate. A single figure is a lie; no figure at all is an evasion.",
            },
          },
          {
            id: "i5",
            label: { ar: "“What I can't tell you yet is whether the court will order an expert.”", en: "“What I can't tell you yet is whether the court will order an expert.”" },
            bucketId: "b.adm",
            rationale: {
              ar: "حدّ معرفة مُسمّى بدقّة. كلمة «yet» هي التي تحوّل الاعتراف من ضعف إلى جدول زمني: هناك لحظة ستعرف فيها.",
              en: "A precisely named limit. The word “yet” is what turns the admission from a weakness into a timetable: there is a moment at which you will know.",
            },
          },
          {
            id: "i6",
            label: { ar: "“I'd be guessing on the hearing date, and a guess from me costs you money.”", en: "“I'd be guessing on the hearing date, and a guess from me costs you money.”" },
            bucketId: "b.adm",
            rationale: {
              ar: "ترفض التخمين وتشرح لماذا بلغة الموكّل: الكلفة. هذا يجعل الامتناع خدمةً في نظره لا تهرّباً.",
              en: "It refuses to guess and explains why in the client's own currency: cost. That makes the refusal read as a service rather than a dodge.",
            },
          },
          {
            id: "i7",
            label: { ar: "“I'll write to you on Wednesday 10 June either way — with the date, or with the reason there isn't one.”", en: "“I'll write to you on Wednesday 10 June either way — with the date, or with the reason there isn't one.”" },
            bucketId: "b.next",
            rationale: {
              ar: "نقطة تفتيش لا تتوقّف على وصول خبر. هذه الجملة وحدها تُلغي أربع مكالمات قلق، لأن الموكّل يعرف متى يعود إلى التفكير في الملف.",
              en: "A checkpoint that does not depend on news arriving. This one sentence deletes four anxious phone calls, because the client knows when to start thinking about the file again.",
            },
          },
          {
            id: "i8",
            label: { ar: "“Shall we book fifteen minutes on Monday 15 June to review the cost position?”", en: "“Shall we book fifteen minutes on Monday 15 June to review the cost position?”" },
            bucketId: "b.next",
            rationale: {
              ar: "نقطة تفتيش بموعد ومدة وموضوع. تحديد خمس عشرة دقيقة يجعل قبول الموعد سهلاً، ويمنع تحوّل المراجعة إلى مواجهة.",
              en: "A checkpoint with a time, a length and a subject. Naming fifteen minutes makes it easy to accept and stops the cost review turning into a confrontation.",
            },
          },
          {
            id: "i9",
            label: { ar: "“Don't worry — it will be fine.”", en: "“Don't worry — it will be fine.”" },
            bucketId: "b.never",
            rationale: {
              ar: "بالعربية «لا تقلق» طمأنة اجتماعية لا يُحاسَب عليها أحد. بالإنجليزية «it will be fine» تقرير عن المستقبل، ويُقتبس منك حرفياً حين لا يكون الأمر fine.",
              en: "In Arabic “don't worry” is a social reassurance nobody is held to. In English “it will be fine” is a statement about the future, and it will be quoted back at you word for word when things are not fine.",
            },
          },
          {
            id: "i10",
            label: { ar: "“We'll definitely have a hearing before the summer.”", en: "“We'll definitely have a hearing before the summer.”" },
            bucketId: "b.never",
            rationale: {
              ar: "التزام باسم جهة لا تسيطر عليها، مشدّداً بـ«definitely». الفرق بينها وبين «we should be able to» ليس فرق أدب بل فرق مسؤولية مهنية.",
              en: "A commitment made on behalf of a body you do not control, hardened by “definitely”. The gap between this and “we should be able to” is not a gap in politeness — it is a gap in professional liability.",
            },
          },
        ],
      },
      {
        id: "act.le.09.4",
        kind: "pronunciation",
        skillId: "skill.le-difficult-questions",
        stage: 4,
        weight: 1,
        grading: "self_report",
        target: "preliminary",
        ipa: "/prɪˈlɪm.ɪ.nə.ri/",
        prompt: {
          ar: "قل الكلمة ثم الجملة. النبر على المقطع الثاني: pre-LIM-in-ary. التقييم على وضوح النبر فقط — اللكنة لا تُقيَّم إطلاقاً.",
          en: "Say the word, then the sentence. Stress on the second syllable: pre-LIM-in-ary. You are judging the clarity of the stress only — accent is never assessed.",
        },
        meaning: {
          ar: "«تمهيدي»: ما يسبق النظر في الموضوع ويهيّئ له. الجلسة التمهيدية تحسم الجدول والإجراءات، لا موضوع النزاع.",
          en: "Coming before the main matter and preparing the ground for it. A preliminary hearing settles the timetable and the procedure — not the substance of the dispute.",
        },
        exampleSentence: {
          ar: "“The preliminary hearing is listed for Tuesday 9 June; it decides the timetable, not the case.” — الجلسة التمهيدية محدّدة يوم الثلاثاء 9 حزيران، وهي تحسم الجدول الزمني لا الدعوى.",
          en: "“The preliminary hearing is listed for Tuesday 9 June; it decides the timetable, not the case.”",
        },
        hint: {
          ar: "خمسة مقاطع، والخطأ الشائع هو نبر المقطع الأول ثم ابتلاع ما بعده. جرّبها في حركتين: pre-LIM ثم in-ary، ثم صِلهما ببطء.",
          en: "Five syllables, and the common slip is stressing the first and swallowing the rest. Try it in two moves: pre-LIM, then in-ary, then join them slowly.",
        },
        accessibleAlternative: {
          ar: "يمكنك تحديد موضع النبر وتقطيع الكلمة كتابةً بدل النطق، ثم تقييم وضوح تقطيعك.",
          en: "You can mark the stress and break the word into syllables in writing instead of speaking, then self-assess.",
        },
      },
      {
        id: "act.le.09.5",
        kind: "short_written",
        skillId: "skill.le-difficult-questions",
        secondarySkillIds: ["skill.le-managing-expectations", "skill.le-dates-deadlines"],
        stage: 4,
        weight: 3,
        grading: "ai_rubric",
        rubricId: "rubric.legal-english-written.v1",
        minChars: 320,
        prompt: {
          ar: "أجب كتابةً بالإنجليزية في أقل من 160 كلمة، بالحركات الأربع. أعطِ رقماً، وسمِّ ما لا تعرفه بعد، وأنهِ بتاريخ. لا تُصدر حكماً على المحامي السابق.",
          en: "Reply in English in under 160 words, using the four moves. Give a figure, name what you do not know yet, and end with a date. Pass no judgement on the previous lawyer.",
        },
        context: {
          ar: [
            "الرسالة الواردة من السيد فرهوفن: «My last lawyer said this was simple. Why are you making it complicated — and how much will this cost in total?»",
            "ما تعرفه: تقديرك حتى انتهاء تبادل اللوائح بين 6,000 و9,000 دولار؛ لائحة الدفاع مستحقة في 24 حزيران 2026.",
            "ما لا تعرفه بعد: هل تأمر المحكمة بخبرة محاسبية، وهي تضيف نحو 2,000 دولار. الجلسة التمهيدية في الثلاثاء 9 حزيران 2026 تحسم ذلك.",
            "ما تغيّر عن الصورة الأولى: ظهر ملحق موقّع سنة 2021 يمدّد مهلة الإشعار، فصارت المسألة مسألة تفسير شرط لا مسألة احتساب تاريخ.",
          ],
          en: [
            "Mr Verhoeven's message: “My last lawyer said this was simple. Why are you making it complicated — and how much will this cost in total?”",
            "What you know: your estimate to the end of the exchange of pleadings is USD 6,000 to 9,000; their defence is due on 24 June 2026.",
            "What you do not know yet: whether the court will order an accounting expert, which adds roughly USD 2,000. The preliminary hearing on Tuesday 9 June 2026 decides it.",
            "What changed from the original picture: a signed 2021 addendum has surfaced which extends the notice period, so the matter now turns on how a clause is read rather than on counting a date.",
          ],
        },
        modelAnswer: {
          ar: [
            "Dear Mr Verhoeven,",
            "That's a fair question and it deserves a straight answer.",
            "On the substance: on the documents available at the start, this was a notice-period point, and a short one. It stopped being short when the signed 2021 addendum came to light. That addendum extends the notice period, so the case now turns on how one clause is read rather than on counting days. The facts changed, not the view.",
            "On cost: to the end of the exchange of pleadings my estimate is USD 6,000 to 9,000, and I will not go beyond 9,000 without asking you first.",
            "What I can't price yet is the accounting expert. If the court orders one, add roughly USD 2,000. The preliminary hearing on Tuesday 9 June decides that.",
            "I will send you a written cost note on Wednesday 10 June either way.",
          ],
          en: [
            "Dear Mr Verhoeven,",
            "That's a fair question and it deserves a straight answer.",
            "On the substance: on the documents available at the start, this was a notice-period point, and a short one. It stopped being short when the signed 2021 addendum came to light. That addendum extends the notice period, so the case now turns on how one clause is read rather than on counting days. The facts changed, not the view.",
            "On cost: to the end of the exchange of pleadings my estimate is USD 6,000 to 9,000, and I will not go beyond 9,000 without asking you first.",
            "What I can't price yet is the accounting expert. If the court orders one, add roughly USD 2,000. The preliminary hearing on Tuesday 9 June decides that.",
            "I will send you a written cost note on Wednesday 10 June either way.",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "Dear Mr Verhoeven, I am sorry you feel this way. Every case is different, and unfortunately your previous lawyer may not have had the full file in front of him.",
              "Litigation costs are very difficult to predict, as I am sure you appreciate, but please rest assured that we will keep everything reasonable and do our very best for you.",
              "Do not worry — I am confident we will get a good result.",
            ],
            en: [
              "Dear Mr Verhoeven, I am sorry you feel this way. Every case is different, and unfortunately your previous lawyer may not have had the full file in front of him.",
              "Litigation costs are very difficult to predict, as I am sure you appreciate, but please rest assured that we will keep everything reasonable and do our very best for you.",
              "Do not worry — I am confident we will get a good result.",
            ],
          },
          whatIsWrong: {
            ar: "ثلاثة إخفاقات في رسالة واحدة. أولاً «I am sorry you feel this way» تُسمع بالإنجليزية اعتذاراً عن مشاعره لا عن فعلٍ فعلته، وهي من أبرد الجمل في اللغة. ثانياً حكم ضمني على المحامي السابق بدل بيان ما تغيّر في الوقائع. ثالثاً لا رقم واحد رغم أن السؤال كان عن المال، ثم «a good result» وهي وعد بالنتيجة يسقّف التقييم وحده.",
            en: "Three failures in one message. First, “I am sorry you feel this way” reads in English as an apology for his emotions rather than for anything you did — one of the coldest sentences in the language. Second, it passes an implied verdict on the previous lawyer instead of stating what changed in the facts. Third, it contains no figure at all although the question was about money, and then “a good result” is an outcome promise that on its own caps the score.",
          },
        },
      },
      {
        id: "act.le.09.6",
        kind: "reflection",
        skillId: "skill.le-difficult-questions",
        stage: 4,
        weight: 1,
        grading: "self_report",
        prompt: {
          ar: "استرجع آخر سؤال صعب طُرح عليك بالإنجليزية. كم ثانية صمتّ قبل الجواب؟ وهل جاءت جملتك الأولى من معرفتك، أم من رغبتك في إنهاء الصمت؟",
          en: "Think back to the last difficult question you were asked in English. How many seconds did you stay silent? And did your first sentence come from what you knew, or from wanting the silence to end?",
        },
        followUp: {
          ar: "احفظ جملة إقرار واحدة وجملة حدٍّ واحدة بالإنجليزية. جملتان تشتريان لك الثواني التي كنت تملؤها بالوعود.",
          en: "Memorise one acknowledgement sentence and one boundary sentence in English. Two sentences buy you the seconds you have been filling with promises.",
        },
      },
    ],
    summaryCard: {
      id: "card.le.09",
      title: {
        ar: "السؤال الصعب: أربع حركات بدل جملة متسرّعة",
        en: "The difficult question: four moves instead of one rushed sentence",
      },
      whatYouLearned: {
        ar: [
          "السؤال المعلن ليس السؤال الحقيقي: «لماذا كل هذا الوقت؟» تعني «هل ما زلتُ مرئياً عندك؟»",
          "أقرّ · أجب بما تعرفه · سمِّ ما لا تعرفه بعد · حدّد نقطة تفتيش بيوم.",
          "«I will try» بالإنجليزية استعداد للفعل لا تحفّظ عليه — احذرها في طلب غير مشروع.",
          "الرفض المصحوب بطريق مشروع ليس رفضاً، والرفض العاري يدفع الموكّل إلى من يقول نعم.",
        ],
        en: [
          "The stated question is not the real one: “why is this taking so long?” means “am I still visible to you?”",
          "Acknowledge · answer what you can · name what you can't know yet · appoint a dated checkpoint.",
          "In English “I will try” signals willingness, not reservation — never use it on an improper request.",
          "A refusal that comes with a legitimate route is not a refusal; a bare refusal sends the client to whoever will say yes.",
        ],
      },
      framework: {
        name: { ar: "أقرّ · أجب · اعترف · حدّد", en: "Acknowledge · Answer · Admit · Appoint" },
        steps: [
          { ar: "أقرّ بالسؤال في جملة قصيرة، بلا مديح ولا اعتذار.", en: "Acknowledge the question in one short sentence — no praise, no apology." },
          { ar: "أجب بما تعرفه اليوم، برقم أو بتاريخ.", en: "Answer what you know today, with a figure or a date." },
          { ar: "سمِّ حدّ معرفتك صراحةً، وأضف «yet».", en: "Name the limit of your knowledge out loud, and add “yet”." },
          { ar: "حدّد يوماً يسمع فيه الموكّل منك، جاء الجواب أو لم يجئ.", en: "Appoint a day on which the client hears from you, answer or no answer." },
        ],
      },
      rememberThis: {
        ar: "الصمت ليس عدوّك؛ عدوّك الجملة التي تخترعها لتملأه.",
        en: "Silence is not your enemy. The sentence you invent to fill it is.",
      },
      useItTomorrow: {
        ar: "قبل مكالمتك الإنجليزية القادمة، اكتب سطرين: ما أعرفه بيقين اليوم، وما لن أعرفه قبل تاريخ كذا. هذان السطران هما جوابك عن أي سؤال صعب.",
        en: "Before your next English call, write two lines: what I know for certain today, and what I will not know before this date. Those two lines are your answer to any difficult question.",
      },
      phrases: [
        { en: "That's a fair question, and I'd rather answer it properly than quickly.", ar: "سؤال مشروع، وأفضّل أن أجيب عنه جيداً لا سريعاً.", register: "neutral" },
        { en: "Let me separate what I know from what I don't.", ar: "دعني أفصل ما أعرفه عمّا لا أعرفه.", register: "plain" },
        { en: "Here is what I can tell you today.", ar: "إليك ما أستطيع أن أقوله لك اليوم.", register: "plain" },
        { en: "I am not in a position to confirm that until I have seen the file.", ar: "لست في موقع يسمح لي بتأكيد ذلك قبل الاطّلاع على الملف.", register: "formal" },
        { en: "I can't tell you that yet.", ar: "لا أستطيع أن أخبرك بذلك بعد.", register: "plain" },
        { en: "What I don't know yet is whether the court will order an expert — I'll know on Tuesday 9 June.", ar: "ما لا أعرفه بعد هو ما إذا كانت المحكمة ستأمر بخبرة، وسأعرف يوم الثلاثاء 9 حزيران.", register: "neutral" },
        { en: "I'd be guessing, and a guess from me costs you money.", ar: "سأكون مخمِّناً، وتخميني يكلّفك مالاً.", register: "plain" },
        { en: "No lawyer can contact a judge about a live matter — and you would not want one who would.", ar: "لا يستطيع أي محامٍ الاتصال بقاضٍ بشأن دعوى قائمة، ولا مصلحة لك في محامٍ يفعلها.", register: "neutral" },
        { en: "I will come back to you on this by Thursday 11 June, whether or not I have the answer.", ar: "سأعود إليك في هذا الأمر بحلول الخميس 11 حزيران، سواء توفّر الجواب أم لا.", register: "neutral" },
        { en: "Can I ask what is behind the question — is it the cost, or the timing?", ar: "هل لي أن أسأل عمّا وراء السؤال — الكلفة أم التوقيت؟", register: "neutral" },
      ],
    },
  },
  // =========================================================================
  // unit.le.10 — Closing a Meeting in English
  // =========================================================================
  {
    id: "unit.le.10",
    chapterId: "ch.le.writing-and-pressure",
    order: 10,
    title: {
      ar: "إقفال الاجتماع بالإنجليزية",
      en: "Closing a Meeting in English",
    },
    subtitle: {
      ar: "آخر تسعون ثانية هي التي يكتبها الموكّل في دفتره",
      en: "The last ninety seconds are the part the client writes down",
    },
    primarySkillId: "skill.le-closing-meeting",
    skillIds: ["skill.le-closing-meeting", "skill.le-explaining-next-steps", "skill.le-dates-deadlines"],
    stage: 4,
    estimatedMinutes: 11,
    targetLevel: 4,
    sourceIds: ["src.client-centered-law-firm", "src.legal-project-management", "src.smarter-collaboration"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
    steps: [
      {
        kind: "hook",
        id: "st.le.10.hook",
        text: {
          ar: "الموكّل ينسى ثلثي ما قلته في الاجتماع. لكنه لا ينسى الدقيقة الأخيرة، لأنها الوحيدة التي أمسك فيها قلمه.",
          en: "A client forgets two thirds of what you said in the meeting. He does not forget the last minute — it is the only part he picked up a pen for.",
        },
      },
      {
        kind: "why_it_matters",
        id: "st.le.10.why",
        text: {
          ar: "الإقفال الضعيف بالإنجليزية ينتهي بمجاملة مترجمة — «we are at your service, any time» — ثم صمت. بعد أسبوع لا أحد يعرف من كان ينتظر من، والملف واقف عند مستند لم يُطلب صراحةً.",
          en: "A weak English close ends with a translated courtesy — “we are at your service, any time” — and then silence. A week later nobody knows who was waiting for whom, and the file is stalled on a document nobody expressly asked for.",
        },
      },
      {
        kind: "learning_goal",
        id: "st.le.10.goals",
        goals: {
          ar: [
            "تُنهي الاجتماع بخلاصة من ثلاث جمل تعيد للموكّل هدفه بكلماته هو.",
            "تسمّي مالكاً وتاريخاً لكل خطوة بالإنجليزية، دون صيغة مبنية للمجهول واحدة.",
            "تدعو صراحةً إلى السؤال الذي لم يُطرح، وتحدّد نقطة الاتصال التالية.",
          ],
          en: [
            "End the meeting with a three-sentence summary that hands the client his own objective back in his words.",
            "Name an owner and a date for every step in English, without a single passive construction.",
            "Expressly invite the question that was not asked, and fix the next point of contact.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "st.le.10.lesson",
        title: {
          ar: "خمس حركات في تسعين ثانية",
          en: "Five moves in ninety seconds",
        },
        body: {
          ar: [
            "١. أشِر إلى الإقفال: «Before we finish, let me summarise where we've got to.» الإشارة تمنح الموكّل إذناً بالتقاط القلم.",
            "٢. لخّص في ثلاث جمل: هدفه، والوضع اليوم، والقرار الذي اتُّخذ. لا تُعِد الاجتماع كله.",
            "٣. سمِّ المالك والتاريخ: «You send me X by Thursday 14 May. I send you Y by Monday 18 May.» لكل جملة فاعل مسمّى.",
            "٤. حدّد نقطة الاتصال التالية: «You'll hear from me on Wednesday 20 May, with or without news.»",
            "٥. ادعُ إلى السؤال غير المطروح: «What haven't I answered today?» — أقوى بكثير من «Any questions?» التي يُجاب عنها بـ«no» تهذيباً.",
            "ثم أكّد كل ذلك كتابةً في اليوم نفسه. الاجتماع الذي لم يُكتب لم يقع.",
          ],
          en: [
            "1. Signal the close: “Before we finish, let me summarise where we've got to.” The signal is the client's permission to pick up a pen.",
            "2. Summarise in three sentences: his objective, today's position, and the decision taken. Do not replay the meeting.",
            "3. Name owners and dates: “You send me X by Thursday 14 May. I send you Y by Monday 18 May.” Every sentence has a named actor.",
            "4. Fix the next point of contact: “You'll hear from me on Wednesday 20 May, with or without news.”",
            "5. Invite the unasked question: “What haven't I answered today?” — far stronger than “Any questions?”, which is politely answered “no”.",
            "Then confirm all of it in writing the same day. A meeting that was not written down did not happen.",
          ],
        },
      },
      {
        kind: "visual",
        id: "st.le.10.visual",
        title: {
          ar: "آخر تسعين ثانية",
          en: "The last ninety seconds",
        },
        variant: "timeline",
        items: [
          {
            label: { ar: "0:00 — Signal", en: "0:00 — Signal" },
            detail: {
              ar: "«Before we finish, let me summarise.» الموكّل يتوقّف عن ترتيب أوراقه ويلتقط القلم.",
              en: "“Before we finish, let me summarise.” The client stops tidying his papers and picks up a pen.",
            },
            tone: "positive",
          },
          {
            label: { ar: "0:15 — Summarise", en: "0:15 — Summarise" },
            detail: {
              ar: "ثلاث جمل: هدفه، الوضع، القرار. أعِد هدفه بكلماته هو لا بمصطلحاتك أنت.",
              en: "Three sentences: his objective, the position, the decision. Give the objective back in his words, not in your terminology.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "0:40 — Owners and dates", en: "0:40 — Owners and dates" },
            detail: {
              ar: "«You… by Thursday. I… by Monday.» لا «it will be done» ولا «the office will contact you».",
              en: "“You… by Thursday. I… by Monday.” Never “it will be done”, never “the office will contact you”.",
            },
            tone: "positive",
          },
          {
            label: { ar: "1:05 — Next contact point", en: "1:05 — Next contact point" },
            detail: {
              ar: "متى يسمع منك، حتى لو لم يصل أي خبر. هذه الجملة تُلغي مكالمات القلق.",
              en: "When he next hears from you, even if no news arrives. This sentence deletes the anxious calls.",
            },
            tone: "positive",
          },
          {
            label: { ar: "1:20 — The unasked question", en: "1:20 — The unasked question" },
            detail: {
              ar: "«What haven't I answered today?» ثم اصمت وعُدّ إلى ثلاثة. الصمت هو النشاط هنا.",
              en: "“What haven't I answered today?” Then stay quiet and count to three. The silence is the technique.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "st.le.10.worked",
        strong: {
          label: { ar: "إقفال في تسعين ثانية", en: "A ninety-second close" },
          text: {
            ar: [
              "“Before we finish, let me summarise where we've got to, and then I'll ask what I've missed.”",
              "“You want out of the distribution agreement without a court case if that is possible, and you can live with a three-month exit but not a twelve-month one.”",
              "“So: you send me the 2021 addendum and the last two years of order records by Thursday 14 May. I send you a written opinion on the notice clause by Monday 18 May.”",
              "“You'll hear from me on Wednesday 20 May either way, even if the opinion has to move.”",
              "“What haven't I answered today?”",
            ],
            en: [
              "“Before we finish, let me summarise where we've got to, and then I'll ask what I've missed.”",
              "“You want out of the distribution agreement without a court case if that is possible, and you can live with a three-month exit but not a twelve-month one.”",
              "“So: you send me the 2021 addendum and the last two years of order records by Thursday 14 May. I send you a written opinion on the notice clause by Monday 18 May.”",
              "“You'll hear from me on Wednesday 20 May either way, even if the opinion has to move.”",
              "“What haven't I answered today?”",
            ],
          },
          why: {
            ar: "الخلاصة تعيد للموكّل هدفه بكلماته هو، ثم لكل التزام فاعل وتاريخ، ثم موعد اتصال لا يتوقّف على وصول خبر، ثم سؤال مفتوح لا يُجاب عنه بـ«لا». تسعون ثانية تُلغي ثلاث مكالمات.",
            en: "The summary hands the client his own objective back in his words, every commitment has an actor and a date, the next contact does not depend on news arriving, and the closing question cannot be answered “no”. Ninety seconds that delete three phone calls.",
          },
        },
        weak: {
          label: { ar: "إقفال دافئ وفارغ", en: "A warm and empty close" },
          text: {
            ar: [
              "“So, everything is clear now, God willing.”",
              "“We will do the needful, and the office will be in touch with you soon regarding the documents.”",
              "“Please do not hesitate to contact me at any time, day or night. We are at your service.”",
              "“Any questions?”",
            ],
            en: [
              "“So, everything is clear now, God willing.”",
              "“We will do the needful, and the office will be in touch with you soon regarding the documents.”",
              "“Please do not hesitate to contact me at any time, day or night. We are at your service.”",
              "“Any questions?”",
            ],
          },
          why: {
            ar: "«do the needful» و«at your service» و«day or night» ترجمات أمينة لصيغ عربية دافئة تماماً. لكن المستمع الإنجليزي يسمع: لا أحد مسمّى، ولا تاريخ، ومكتب مجهول سيتصل «قريباً». أما «Any questions?» في نهاية اجتماع فهي بالإنجليزية إشارة إقفال يُجاب عنها بـ«no» تهذيباً. النتيجة: كل شيء بدا واضحاً ولم يتحرّك شيء.",
            en: "“Do the needful”, “at your service” and “day or night” are faithful renderings of perfectly warm Arabic formulas. What an English-speaking listener hears is: nobody named, no date, and an unidentified office that will call “soon”. And “Any questions?” at the end of a meeting is, in English, a closing signal answered “no” out of politeness. Everything sounded clear and nothing moved.",
          },
        },
      },
      { kind: "activity", id: "st.le.10.a1", activityId: "act.le.10.1", mode: "quick" },
      { kind: "activity", id: "st.le.10.a2", activityId: "act.le.10.2", mode: "quick" },
      { kind: "activity", id: "st.le.10.a3", activityId: "act.le.10.3", mode: "guided" },
      { kind: "activity", id: "st.le.10.a4", activityId: "act.le.10.4", mode: "guided" },
      { kind: "activity", id: "st.le.10.a5", activityId: "act.le.10.5", mode: "independent" },
      { kind: "activity", id: "st.le.10.a6", activityId: "act.le.10.6", mode: "independent" },
      { kind: "summary", id: "st.le.10.summary", summaryCardId: "card.le.10" },
      {
        kind: "apply_tomorrow",
        id: "st.le.10.apply",
        task: {
          ar: "في اجتماعك الإنجليزي القادم، لا تُنهِ الكلام قبل أن تسمع الموكّل يقول الخطوة التالية بكلماته هو.",
          en: "In your next English meeting, do not stop talking until you have heard the client say the next step in his own words.",
        },
        detail: {
          ar: "إن قالها ناقصةً فأنت لم تُقفل بعد. أعِد الجملة الواحدة الناقصة — المالك أو التاريخ — ثم اصمت.",
          en: "If he says it incompletely, you have not closed yet. Repeat the one missing element — the owner or the date — and then stop.",
        },
      },
      {
        kind: "next_mission",
        id: "st.le.10.next",
        teaser: {
          ar: "أنهيتَ مسار الإنجليزية القانونية للتواصل مع الموكّل. عُد الآن إلى مسار «أساسيات التواصل مع الموكّلين» وأعد وحداته الأخيرة بالإنجليزية بدل العربية. ثم ينتظرك مسار «إنجليزية التفاوض»، حيث الطرف المقابل ليس في صفّك.",
          en: "That completes Legal English for Client Communication. Go back to the Client Communication Foundations path and run its last units again in English rather than Arabic. Then Negotiation English is waiting — where the person across the table is not on your side.",
        },
      },
    ],
    activities: [
      {
        id: "act.le.10.1",
        kind: "listening",
        skillId: "skill.le-closing-meeting",
        stage: 4,
        weight: 1,
        prompt: {
          ar: "استمع إلى إقفال زميل لاجتماع مع موكّل. ما الذي ينقص هذا الإقفال فعلاً؟",
          en: "Listen to a colleague closing a client meeting. What is actually missing from this close?",
        },
        script: {
          ar: "Right, I think that covers everything. I'll look at the addendum and get back to you as soon as I've had a chance to go through it properly. If anything comes up in the meantime, you know where I am. Any questions?",
          en: "Right, I think that covers everything. I'll look at the addendum and get back to you as soon as I've had a chance to go through it properly. If anything comes up in the meantime, you know where I am. Any questions?",
        },
        transcript: {
          ar: "الترجمة: «حسناً، أظن أن هذا يغطّي كل شيء. سأطّلع على الملحق وأعود إليك حالما تتاح لي فرصة لدراسته كما ينبغي. وإن استجدّ شيء في هذه الأثناء، فأنت تعرف أين تجدني. أي أسئلة؟»",
          en: "“Right, I think that covers everything. I'll look at the addendum and get back to you as soon as I've had a chance to go through it properly. If anything comes up in the meantime, you know where I am. Any questions?”",
        },
        accessibleAlternative: {
          ar: "النص المكتوب كامل، ويمكن الإجابة منه دون تشغيل الصوت.",
          en: "The full transcript is provided and the question can be answered from it without audio.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "لا تاريخ ولا طلب: «as soon as I've had a chance» ليست موعداً، ولم يُذكر ما المطلوب من الموكّل.",
              en: "No date and no ask: “as soon as I've had a chance” is not a date, and the client was never told what he must do.",
            },
            correct: true,
            rationale: {
              ar: "حركتان من الخمس مفقودتان معاً. الموكّل يغادر مقتنعاً بأن لا شيء عليه، فينتظر الملحق منه ولا يصل، ويُنسب الأسبوعان الضائعان إلى المحامي.",
              en: "Two of the five moves are missing at once. The client leaves believing he has nothing to do, so the addendum you are waiting for never arrives — and the two lost weeks are attributed to the lawyer.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "لم يشكر الموكّل على وقته ولم يستعمل صيغة ختامية مهذّبة.",
              en: "He did not thank the client for his time or use a polite closing formula.",
            },
            rationale: {
              ar: "المجاملة ليست الثغرة هنا. الإقفال الإنجليزي يمكن أن يكون دافئاً وعديم الفائدة في آن واحد، وهذا ما حدث بالضبط.",
              en: "Courtesy is not the gap here. An English close can be warm and useless at the same time — which is exactly what this one is.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "لم يشرح الأساس القانوني لشرط الإشعار قبل أن يُنهي.",
              en: "He did not explain the legal basis of the notice clause before finishing.",
            },
            rationale: {
              ar: "الإقفال ليس مكان التحليل القانوني. إضافته هنا تُطيل الدور وتدفع التواريخ إلى خارج ذاكرة الموكّل، وهي عكس وظيفة التسعين ثانية الأخيرة.",
              en: "A close is not the place for legal analysis. Adding it lengthens the turn and pushes the dates out of the client's memory — the opposite of what the last ninety seconds are for.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "استعمل «Right» و«you know where I am» وهي صيغ غير رسمية بما يكفي.",
              en: "He used “Right” and “you know where I am”, which are not formal enough.",
            },
            rationale: {
              ar: "«Right» أداة خطاب عادية في الإنجليزية المهنية المنطوقة ولا تكلّف شيئاً. البحث عن مزيد من الرسمية بينما التواريخ غائبة هو الغريزة الخاطئة بعينها: الرسمية لا تعوّض غياب المالك والتاريخ.",
              en: "“Right” is an ordinary discourse marker in spoken professional English and costs nothing. Hunting for more formality while the dates are missing is precisely the wrong instinct: formality does not substitute for an owner and a date.",
            },
          },
        ],
      },
      {
        id: "act.le.10.2",
        kind: "true_false",
        skillId: "skill.le-closing-meeting",
        stage: 4,
        weight: 1,
        prompt: {
          ar: "صحيح أم خطأ: «Any questions?» و«What haven't I answered?» متكافئتان عملياً في نهاية اجتماع بالإنجليزية.",
          en: "True or false: at the end of an English meeting, “Any questions?” and “What haven't I answered?” do practically the same job.",
        },
        options: [
          {
            id: "o.true",
            label: { ar: "صحيح — كلتاهما دعوة إلى السؤال.", en: "True — both invite a question." },
            rationale: {
              ar: "متشابهتان نحوياً ومتعاكستان في الأثر. الاعتقاد بتكافئهما هو سبب خروج المحامي من الاجتماع مطمئناً إلى أن كل شيء وصل، ثم تلقّيه السؤال نفسه هاتفياً بعد ثلاثة أيام.",
              en: "Grammatically similar, pragmatically opposite. Believing they are equivalent is why a lawyer leaves a meeting sure that everything landed, and takes the same question by phone three days later.",
            },
          },
          {
            id: "o.false",
            label: { ar: "خطأ — إحداهما تُغلق الباب والأخرى تفتحه.", en: "False — one closes the door and the other opens it." },
            correct: true,
            rationale: {
              ar: "«Any questions?» تُسمع بالإنجليزية إشارةً إلى أن الاجتماع انتهى، والجواب المهذّب لها «no». أما «What haven't I answered?» فتفترض وجود شيء لم يُجَب، وتضع العبء على أدائك أنت لا على ثقة الموكّل بنفسه. الكلمتان تكلّفان الوقت نفسه؛ الجوابان لا يتشابهان.",
              en: "“Any questions?” is heard in English as a signal that the meeting is over, and the polite answer is “no”. “What haven't I answered?” presupposes that something was left, and puts the burden on your performance rather than on the client's confidence. The two cost the same breath; the answers are not comparable.",
            },
          },
        ],
      },
      {
        id: "act.le.10.3",
        kind: "fill_blank",
        skillId: "skill.le-closing-meeting",
        secondarySkillIds: ["skill.le-dates-deadlines"],
        stage: 4,
        weight: 2,
        prompt: {
          ar: "أكمل جمل الإقفال. المطلوب هنا المتلازمة التي يستعملها المحامون فعلاً، لا الترجمة الحرفية المفهومة.",
          en: "Complete the closing sentences. What is being tested is the collocation lawyers actually use, not the understandable literal rendering.",
        },
        template: {
          ar: "«To confirm what we agreed: I will come back {{0}} you with a written opinion on Monday 18 May, I will confirm all of this {{1}} writing before the end of today, and we will {{2}} the filing deadline on 24 June.» — للتأكيد: سأعود إليك برأي مكتوب يوم الاثنين 18 أيار، وسأؤكد كل ذلك كتابةً قبل نهاية اليوم، وسنلتزم بمهلة الإيداع في 24 حزيران.",
          en: "“To confirm what we agreed: I will come back {{0}} you with a written opinion on Monday 18 May, I will confirm all of this {{1}} writing before the end of today, and we will {{2}} the filing deadline on 24 June.”",
        },
        hint: {
          ar: "ثلاث مواضع، وثلاثة أخطاء شائعة عند الناطقين بالعربية: حرف جرّ الفعل، حرف الجرّ في تعبير ثابت، وفعل المتلازمة.",
          en: "Three slots and three habitual slips for Arabic speakers: the preposition after a verb, the preposition inside a fixed expression, and the verb in a collocation.",
        },
        blanks: [
          {
            id: "b0",
            options: [
              { ar: "to (إلى)", en: "to" },
              { ar: "on (على)", en: "on" },
              { ar: "with (مع)", en: "with" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "الصيغة هي «come back to someone with something». العربية «أعود إليك بـ» تحمل حرفَي جرّ، فيسقط أحدهما عند الترجمة. «come back on you» غير موجودة، و«come back with you» تعني أنك سترافقه.",
              en: "The pattern is “come back to someone with something”. The Arabic أعود إليك بـ carries two prepositions and one of them gets lost in translation. “Come back on you” does not exist, and “come back with you” means you are accompanying him.",
            },
          },
          {
            id: "b1",
            options: [
              { ar: "in (في — «in writing» كتابةً)", en: "in" },
              { ar: "by (بواسطة)", en: "by" },
              { ar: "with (مع)", en: "with" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "«in writing» تعبير ثابت لا يقبل بديلاً. «by writing» ترجمة حرفية لـ«بالكتابة» وتَشِي بأن النص مترجَم من كلمتين اثنتين، وهذا بالضبط ما يخفض علامة المتلازمات في التقييم الكتابي.",
              en: "“In writing” is a fixed expression with no alternative. “By writing” is the direct rendering of بالكتابة and marks the text as translated within two words — exactly what costs marks on the collocation criterion in the written rubric.",
            },
          },
          {
            id: "b2",
            options: [
              { ar: "meet (نلتزم بـ / نلحق بـ)", en: "meet" },
              { ar: "catch (نلحق)", en: "catch" },
              { ar: "achieve (نحقّق)", en: "achieve" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "«meet a deadline» هي المتلازمة الوحيدة المستعملة. «catch» و«achieve» مفهومتان تماماً ولن تمنعا الفهم، لكنهما تجعلان الجملة تُقرأ كترجمة — والموكّل الذي يشكّ في لغتك يبدأ بالشكّ في تحليلك.",
              en: "“Meet a deadline” is the only collocation in use. “Catch” and “achieve” are perfectly understandable and will not block comprehension, but they make the sentence read as a translation — and a client who doubts your language starts doubting your analysis.",
            },
          },
        ],
      },
      {
        id: "act.le.10.4",
        kind: "pronunciation",
        skillId: "skill.le-closing-meeting",
        stage: 4,
        weight: 1,
        grading: "self_report",
        target: "schedule",
        ipa: "/ˈʃedjuːl/ · /ˈskedʒuːl/",
        prompt: {
          ar: "قل الكلمة ثم الجملة. النطقان مقبولان تماماً: البريطاني SHED-yool والأمريكي SKEJ-ool. المطلوب الثبات على واحد داخل المكالمة الواحدة — واللكنة لا تُقيَّم إطلاقاً.",
          en: "Say the word, then the sentence. Both pronunciations are fully acceptable: British SHED-yool and American SKEJ-ool. What is assessed is staying with one inside the same call — accent is never assessed.",
        },
        meaning: {
          ar: "«جدول زمني»، وكفعل: «to schedule a call» أي يحدّد موعد مكالمة. كلمة الإقفال بامتياز: بها تُحوّل النيّة إلى موعد.",
          en: "A timetable; as a verb, to fix something for a particular time. The closing word par excellence: it turns an intention into an appointment.",
        },
        exampleSentence: {
          ar: "“Let's schedule a short call for Wednesday 20 May, and I'll send you the timetable in writing today.” — لنحدّد مكالمة قصيرة يوم الأربعاء 20 أيار، وسأرسل لك الجدول كتابةً اليوم.",
          en: "“Let's schedule a short call for Wednesday 20 May, and I'll send you the timetable in writing today.”",
        },
        hint: {
          ar: "الصعوبة ليست في المقطع الأول بل في نهاية الكلمة: -ule تُقال «yool» أو «ool»، لا «yoo-el». مقطعان اثنان فقط.",
          en: "The difficulty is not the first syllable but the ending: -ule is “yool” or “ool”, never “yoo-el”. Two syllables, not three.",
        },
        accessibleAlternative: {
          ar: "يمكنك اختيار النطق الذي ستلتزم به وكتابته مقطعياً بدل النطق، ثم تقييم ثباتك عليه.",
          en: "You can choose the pronunciation you will keep, write it out in syllables instead of speaking, and then self-assess your consistency.",
        },
      },
      {
        id: "act.le.10.5",
        kind: "short_written",
        skillId: "skill.le-closing-meeting",
        secondarySkillIds: ["skill.le-explaining-next-steps", "skill.le-dates-deadlines"],
        stage: 4,
        weight: 3,
        grading: "ai_rubric",
        rubricId: "rubric.legal-english-written.v1",
        minChars: 320,
        prompt: {
          ar: "انتهى الاجتماع للتو. اكتب بالإنجليزية رسالة التأكيد في اليوم نفسه، في أقل من 150 كلمة: خلاصة، ومالك وتاريخ لكل خطوة، ونقطة اتصال تالية، ودعوة صريحة إلى السؤال. لا صيغة مبنية للمجهول واحدة.",
          en: "The meeting has just ended. Write the same-day confirmation note in English, under 150 words: a summary, an owner and a date for every step, the next point of contact, and an express invitation to ask. Not one passive construction.",
        },
        context: {
          ar: [
            "الموكّل: السيد توماس فرهوفن، المدير المالي لشركة تغليف هولندية، اجتماع في مكتبك بشأن إنهاء عقد التوزيع الإقليمي.",
            "ما قاله عن هدفه: يريد الخروج من العقد دون دعوى إن أمكن، ويحتمل مهلة خروج ثلاثة أشهر لا اثني عشر.",
            "ما التزم به هو: إرسال ملحق 2021 وسجلّات الطلبيات لسنتين، بحلول الخميس 14 أيار 2026.",
            "ما التزمتَ به أنت: رأي مكتوب في شرط الإشعار بحلول الاثنين 18 أيار 2026؛ وستكتب إليه في الأربعاء 20 أيار 2026 في كل الأحوال.",
            "ما لم يُحسم بعد: ما إذا كان مخرج التسوية أفضل من الدعوى — لا يمكن الجزم قبل قراءة الملحق.",
          ],
          en: [
            "The client: Mr Thomas Verhoeven, finance director of a Dutch packaging manufacturer; a meeting at your office about terminating the regional distribution agreement.",
            "What he said about his objective: he wants out of the agreement without proceedings if that is possible, and can live with a three-month exit but not a twelve-month one.",
            "What he committed to: sending the 2021 addendum and two years of order records by Thursday 14 May 2026.",
            "What you committed to: a written opinion on the notice clause by Monday 18 May 2026; and you will write to him on Wednesday 20 May 2026 in any event.",
            "What is still open: whether a negotiated exit beats proceedings — that cannot be settled before the addendum is read.",
          ],
        },
        modelAnswer: {
          ar: [
            "Subject: Distribution agreement — 2 documents from you by Thursday 14 May",
            "Dear Mr Verhoeven,",
            "Thank you for your time this morning. To confirm what we agreed.",
            "Your objective: to exit the agreement without proceedings if that is achievable, on a three-month notice rather than twelve.",
            "You send me, by Thursday 14 May: (1) the signed 2021 addendum; (2) the order records for 2024 and 2025.",
            "I send you, by Monday 18 May: a written opinion on how the notice clause is likely to be read, and what it means for a negotiated exit.",
            "I cannot yet say whether negotiating beats filing; I will be able to once I have read the addendum.",
            "You will hear from me on Wednesday 20 May in any event, even if the opinion has to move.",
            "Is there anything you expected me to raise today that I did not?",
          ],
          en: [
            "Subject: Distribution agreement — 2 documents from you by Thursday 14 May",
            "Dear Mr Verhoeven,",
            "Thank you for your time this morning. To confirm what we agreed.",
            "Your objective: to exit the agreement without proceedings if that is achievable, on a three-month notice rather than twelve.",
            "You send me, by Thursday 14 May: (1) the signed 2021 addendum; (2) the order records for 2024 and 2025.",
            "I send you, by Monday 18 May: a written opinion on how the notice clause is likely to be read, and what it means for a negotiated exit.",
            "I cannot yet say whether negotiating beats filing; I will be able to once I have read the addendum.",
            "You will hear from me on Wednesday 20 May in any event, even if the opinion has to move.",
            "Is there anything you expected me to raise today that I did not?",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "Subject: Our meeting",
              "Dear Mr Verhoeven, it was a pleasure meeting you today and I would like to thank you for the confidence you have placed in our office.",
              "As discussed, the documents will be reviewed as soon as they are received, and an opinion will be provided to you in due course. The termination options were discussed at length and will be considered further.",
              "Please do not hesitate to contact us at any time should you require anything at all. We remain at your entire disposal.",
            ],
            en: [
              "Subject: Our meeting",
              "Dear Mr Verhoeven, it was a pleasure meeting you today and I would like to thank you for the confidence you have placed in our office.",
              "As discussed, the documents will be reviewed as soon as they are received, and an opinion will be provided to you in due course. The termination options were discussed at length and will be considered further.",
              "Please do not hesitate to contact us at any time should you require anything at all. We remain at your entire disposal.",
            ],
          },
          whatIsWrong: {
            ar: "أربع صيغ مبنية للمجهول متتالية تُخفي كل فاعل: من يراجع؟ من يرسل؟ ومتى؟ لا اسم ولا تاريخ في الرسالة كلها. و«in due course» تعني بالإنجليزية «في وقت ما، ولا تسألني»، و«at your entire disposal» فرط رسمية مترجمة تجعل الرسالة تبدو نموذجاً معدّاً سلفاً. الأخطر: لم يُطلب من الموكّل شيء، فسينتظر بدوره — وقد ضاع الأسبوع.",
            en: "Four consecutive passives hide every actor: who reviews? who sends? by when? There is not a single name or date in the whole message. “In due course” means, in English, “at some point, and don't ask me”; “at your entire disposal” is translated over-formality that makes the note read as a template. Worst of all, the client is asked for nothing, so he waits too — and the week is gone.",
          },
        },
      },
      {
        id: "act.le.10.6",
        kind: "reflection",
        skillId: "skill.le-closing-meeting",
        stage: 4,
        weight: 1,
        grading: "self_report",
        prompt: {
          ar: "فكّر في آخر اجتماع أنهيته بالإنجليزية. لو سُئل الموكّل بعد ساعة: «ما الذي عليك أنت أن تفعله، ومتى؟» — هل كان سيجيب بثقة؟",
          en: "Think about the last meeting you closed in English. If the client had been asked an hour later, “what do you have to do, and by when?”, would he have answered with confidence?",
        },
        followUp: {
          ar: "إن كان الجواب لا، فالمشكلة ليست في إنجليزيتك بل في آخر تسعين ثانية. اكتب الآن نصّ إقفالك الثابت واحفظه؛ ستستعمله في كل اجتماع.",
          en: "If the answer is no, the problem is not your English — it is the last ninety seconds. Write your standard close now and keep it; you will use it in every meeting.",
        },
      },
    ],
    summaryCard: {
      id: "card.le.10",
      title: {
        ar: "الإقفال: تسعون ثانية تحدّد ما سيحدث في الأسبوعين القادمين",
        en: "The close: ninety seconds that decide the next two weeks",
      },
      whatYouLearned: {
        ar: [
          "أشِر إلى الإقفال قبل أن تلخّص — الإشارة هي ما يجعل الموكّل يلتقط قلمه.",
          "لكل خطوة فاعل مسمّى وتاريخ. المبني للمجهول بالإنجليزية يُخفي المسؤول ويُنتج أسبوعاً ضائعاً.",
          "نقطة الاتصال التالية لا تتوقّف على وصول خبر: «with or without news».",
          "«What haven't I answered?» تفتح الباب؛ «Any questions?» تُغلقه بأدب.",
        ],
        en: [
          "Signal the close before you summarise — the signal is what makes the client pick up a pen.",
          "Every step has a named actor and a date. In English the passive hides who is responsible and produces a lost week.",
          "The next contact point does not depend on news arriving: “with or without news”.",
          "“What haven't I answered?” opens the door; “Any questions?” politely closes it.",
        ],
      },
      framework: {
        name: { ar: "لخّص · سمِّ · حدّد · ادعُ · اكتب", en: "Recap · Owners · Next · Invite · Write" },
        steps: [
          { ar: "لخّص في ثلاث جمل: هدفه، الوضع اليوم، القرار المتّخذ.", en: "Recap in three sentences: his objective, today's position, the decision taken." },
          { ar: "سمِّ لكل خطوة فاعلاً وتاريخاً — أنت أو هو، لا «المكتب».", en: "Give every step an owner and a date — you or him, never “the office”." },
          { ar: "حدّد نقطة الاتصال التالية، ولو بلا خبر.", en: "Fix the next point of contact, news or no news." },
          { ar: "ادعُ إلى السؤال غير المطروح، ثم اصمت وعُدّ إلى ثلاثة.", en: "Invite the unasked question, then stay quiet and count to three." },
          { ar: "اكتب كل ذلك في اليوم نفسه؛ ما لم يُكتب لم يُتَّفق عليه.", en: "Write all of it the same day; what was not written was not agreed." },
        ],
      },
      rememberThis: {
        ar: "الاجتماع لا ينتهي حين تتوقّف عن الكلام، بل حين يعرف الموكّل ماذا سيفعل غداً.",
        en: "A meeting does not end when you stop talking. It ends when the client knows what he is doing tomorrow.",
      },
      useItTomorrow: {
        ar: "احفظ جملتين فقط: «Before we finish, let me summarise where we've got to» و«What haven't I answered today?» واستعملهما في أول اجتماع إنجليزي غداً، ثم أرسل التأكيد قبل أن تغادر مكتبك.",
        en: "Memorise just two sentences: “Before we finish, let me summarise where we've got to” and “What haven't I answered today?” Use both in your first English meeting tomorrow, then send the confirmation before you leave your desk.",
      },
      phrases: [
        { en: "Before we finish, let me summarise where we've got to.", ar: "قبل أن ننهي، دعني ألخّص أين وصلنا.", register: "neutral" },
        { en: "So that we are agreed: you send me the addendum by Thursday 14 May; I send you the opinion by Monday 18 May.", ar: "حتى نكون متّفقين: ترسل لي الملحق بحلول الخميس 14 أيار، وأرسل لك الرأي بحلول الاثنين 18 أيار.", register: "neutral" },
        { en: "Could I ask you to say the next step back to me, just so I know I've been clear?", ar: "هل لي أن أطلب منك إعادة الخطوة التالية بكلماتك، فقط لأطمئن إلى أنني كنت واضحاً؟", register: "neutral" },
        { en: "You'll hear from me on Wednesday 20 May, with or without news.", ar: "ستسمع منّي يوم الأربعاء 20 أيار، سواء وُجد جديد أم لا.", register: "plain" },
        { en: "I shall confirm the above in writing before the close of business today.", ar: "سأؤكّد ما تقدّم كتابةً قبل انتهاء دوام اليوم.", register: "formal" },
        { en: "I'll put all of this in an email today.", ar: "سأضع هذا كلّه في رسالة اليوم.", register: "plain" },
        { en: "What haven't I answered today?", ar: "ما الذي لم أجب عنه اليوم؟", register: "plain" },
        { en: "Is there anything you expected me to raise that I didn't?", ar: "هل كان هناك ما توقّعت أن أثيره ولم أفعل؟", register: "neutral" },
        { en: "If anything changes before Wednesday, I will call you rather than write.", ar: "إن تغيّر شيء قبل الأربعاء، سأتصل بك بدل أن أكتب.", register: "neutral" },
        { en: "Thank you for your time today — I know it was a long session.", ar: "شكراً على وقتك اليوم، وأعلم أن الجلسة كانت طويلة.", register: "neutral" },
      ],
    },
  },
];
