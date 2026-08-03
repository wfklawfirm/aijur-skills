import type { UnitDef } from "../types";

/**
 * Client Communication Foundations — Chapter 3 (`ch.cc.setting-expectations`)
 * unit 8, and Chapter 4 (`ch.cc.keeping-trust`) units 9–10.
 *
 * Unit 10 closes the path and carries the chapter's simulation
 * (`scn.angry-client-delay`). Rubrics and scenarios referenced here are
 * authored elsewhere in the bundle.
 */
export const CC_UNITS_08_10: UnitDef[] = [
  // =========================================================================
  // UNIT 08 — Closing with owned, dated next steps
  // =========================================================================
  {
    id: "unit.cc.08",
    chapterId: "ch.cc.setting-expectations",
    order: 8,
    title: {
      ar: "الإقفال بخطوات مملوكة ومؤرَّخة",
      en: "Closing With Owned, Dated Next Steps",
    },
    subtitle: {
      ar: "«سنبقى على تواصل» ليست خطوة تالية. إنها وعدٌ بأن يكون الموكّل هو من يتّصل.",
      en: "“We’ll stay in touch” is not a next step. It is a promise that the client will be the one calling.",
    },
    primarySkillId: "skill.next-steps-closure",
    skillIds: [
      "skill.next-steps-closure",
      "skill.expectation-management",
      "skill.client-follow-up",
    ],
    stage: 3,
    estimatedMinutes: 10,
    steps: [
      {
        kind: "hook",
        id: "s.cc.08.hook",
        text: {
          ar: "أفضل لقاء في حياتك المهنية يمكن أن يُهدَم في تسعين ثانية: التسعين الأخيرة.",
          en: "The best meeting of your professional life can be undone in ninety seconds: the last ninety.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.cc.08.why",
        text: {
          ar: "الموكّل لا يقيس التقدّم بما فهمه، بل بما يستطيع كتابته في مفكّرته وهو يغادر: فعل، واسم، ويوم. إن خرج بلا هذه الثلاثة، ملأ الفراغ بالقلق ثم بالاتصال.",
          en: "A client measures progress by what he can write in his diary on the way out: an act, a name, a day. Send him out without those three and he fills the gap first with worry, then with phone calls.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.cc.08.goals",
        goals: {
          ar: [
            "أن تحوّل كل نيّة قيلت في اللقاء إلى فعل واحد له مالك بالاسم ويوم بعينه.",
            "أن تميّز بين تاريخ تملكه (إرسال، مذكّرة، مكالمة) وتاريخ لا تملكه (ردّ الخصم، قرار المحكمة).",
            "أن تُقفل اللقاء بجُمَل يعيد الموكّل روايتها بدقّة بعد يومين.",
          ],
          en: [
            "Turn every intention voiced in the meeting into a single act with a named owner and a specific day.",
            "Tell a date you own (a letter, a memo, a call) from a date you do not (the other side’s reply, the court’s decision).",
            "Close the meeting with sentences the client can repeat accurately two days later.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.cc.08.lesson",
        title: {
          ar: "الخطوة التي لا مالك لها لا تحدث",
          en: "A step with no owner does not happen",
        },
        body: {
          ar: [
            "في نهاية كل لقاء تُقال جُمَل تبدو التزامات وليست كذلك: «سنراجع العقد»، «سنرى ما يمكن فعله»، «سنبقى على تواصل».",
            "الفرق ليس في النيّة بل في البنية. الالتزام يحتاج ثلاثة عناصر: فعل واحد قابل للرؤية، وشخص بالاسم، ويوم بعينه.",
            "«المكتب» ليس مالكاً. الموكّل لا يستطيع أن يتّصل بـ«المكتب» ولا أن يذكّره. اكتب اسماً.",
            "و«خلال الأسبوع القادم» ليست تاريخاً. الأسبوع القادم يبدأ متفائلاً وينتهي متأخّراً. اكتب يوماً.",
            "ولا تلتزم بما لا تملكه: ردّ الطرف الآخر، أو موعد جلسة، أو قرار موظّف تسجيل. التزم بما تنتجه يدك.",
            "ثم أعطِ الموكّل خطوة واحدة يملكها هو. من يخرج بمهمّة يبقى شريكاً، ومن يخرج بلا شيء يصبح منتظراً.",
            "وأخيراً: قل ماذا يحدث إن تأخّرت. «إن لم أرسله الثلاثاء، تصلك رسالة منّي الثلاثاء تقول لماذا.» هذا ما يجعل بقيّة التواريخ قابلة للتصديق.",
          ],
          en: [
            "At the end of every meeting, sentences are spoken that look like commitments and are not: “we’ll review the contract”, “we’ll see what can be done”, “we’ll stay in touch”.",
            "The difference is not intention; it is structure. A commitment needs three parts: one visible act, one named person, one specific day.",
            "“The office” is not an owner. A client cannot ring “the office” or remind it. Write a name.",
            "And “sometime next week” is not a date. Next week starts optimistic and ends late. Write a day.",
            "Never commit to what you do not control: the other side’s reply, a hearing date, a registry officer’s decision. Commit to what your own hand produces.",
            "Then give the client one step he owns. A client who leaves with a task stays a partner; a client who leaves with nothing becomes a spectator.",
            "Finally, say what happens if you slip. “If it doesn’t go out on Tuesday, you get a message from me on Tuesday saying why.” That is what makes every other date believable.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.cc.08.visual",
        title: {
          ar: "مفتاح الخروج: خمسة عناصر لا تُقفل من دونها",
          en: "The Exit Key: five parts you do not close without",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "م — المالك", en: "Owner" },
            detail: {
              ar: "اسم شخص يستطيع الموكّل الاتصال به وتذكيره، لا «المكتب» ولا «القسم».",
              en: "A person the client can call and remind — not “the office”, not “the department”.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "ف — الفعل", en: "Act" },
            detail: {
              ar: "فعل واحد قابل للرؤية: يُرسَل، يُودَع، يُتَّصل. لا «يُتابَع» ولا «يُدرَس».",
              en: "One visible act: sent, filed, called. Not “followed up”, not “looked into”.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "ت — التاريخ", en: "Date" },
            detail: {
              ar: "يوم بعينه من التقويم، ومن الأشياء التي تملك أنت إنتاجها.",
              en: "A specific day on the calendar, for something your own hand produces.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "ا — الإثبات", en: "Proof" },
            detail: {
              ar: "ما الذي سيصل إلى الموكّل ليعرف أنها تمّت: نسخة، أو رسالة، أو رقم قيد.",
              en: "What lands in the client’s hands so he knows it happened: a copy, a message, a filing number.",
            },
            tone: "positive",
          },
          {
            label: { ar: "ح — حال التأخّر", en: "If it slips" },
            detail: {
              ar: "متى يسمع منك إن لم تتمّ في موعدها. هذا ما يجعل التاريخ قابلاً للتصديق.",
              en: "When he hears from you if it does not happen on time. This is what makes the date credible.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.cc.08.worked",
        strong: {
          label: {
            ar: "آخر تسعين ثانية عند محامٍ يُقفل",
            en: "The last ninety seconds with a lawyer who closes",
          },
          text: {
            ar: [
              "«قبل أن نختم، أُعيد عليك ما اتفقنا عليه في ثلاث خطوات، ودوّنيها لو سمحتِ.»",
              "«أنا، ماهر شعيب، أُرسل كتاب المطالبة إلى شركة الرافد يوم الثلاثاء 15 أيلول، وتصلك نسخة منه في اليوم نفسه. وأنتِ ترسلين لي كشوف الرواتب لآخر ستة أشهر قبل الأحد 13 أيلول.»",
              "«ثم نتحدّث هاتفياً الخميس 17 أيلول الساعة الخامسة. وإن لم أتمكّن من إرسال الكتاب الثلاثاء، تصلك رسالة منّي الثلاثاء نفسه تقول لماذا والتاريخ الجديد.»",
            ],
            en: [
              "“Before we finish, let me give you back what we agreed in three steps — please write them down.”",
              "“I, Maher Shoaib, will send the demand letter to Al-Rafid on Tuesday 15 September, and a copy reaches you the same day. You send me the last six months of payslips before Sunday 13 September.”",
              "“Then we speak by phone on Thursday 17 September at five. And if I cannot send the letter on Tuesday, you get a message from me on Tuesday telling you why and giving the new date.”",
            ],
          },
          why: {
            ar: "ثلاث خطوات فقط، لكل واحدة مالك بالاسم ويوم؛ وخطوة على الموكّلة نفسها فتخرج شريكة لا منتظرة؛ ونسخة تصلها تُثبت أن ما قيل حدث؛ وتاريخ للتأخير نفسه، فلا يبقى الصمت خياراً متاحاً أمامك.",
            en: "Three steps only, each with a named owner and a day; one step the client herself owns, so she leaves a partner rather than a spectator; a copy that proves the thing was done; and a date for the delay itself, so silence stops being an option available to you.",
          },
        },
        weak: {
          label: {
            ar: "آخر تسعين ثانية عند محامٍ يتوقّف فقط",
            en: "The last ninety seconds with a lawyer who merely stops",
          },
          text: {
            ar: [
              "«طيّب أستاذة هدى، الصورة واضحة عندي تماماً، وملفّك قوي والحمد لله.»",
              "«سنجهّز المطالبة ونبعثها للشركة، وسنرى ردّهم، وعادةً يتحرّكون بسرعة في مثل هذه الحالات.»",
              "«ابقي على تواصل معنا، وأي جديد نخبرك به فوراً.»",
            ],
            en: [
              "“Right, Ms Huda — the picture is completely clear to me, and your file is a strong one.”",
              "“We’ll prepare the claim and send it to the company, then we’ll see their reply. They usually move quickly in cases like this.”",
              "“Stay in touch with us, and anything new, we’ll let you know straight away.”",
            ],
          },
          why: {
            ar: "كل جملة هنا يقولها محامٍ حسن النيّة، وفيها ثلاثة أعطاب: لا فعل مملوك ولا تاريخ، ووعدٌ ضمني بنتيجة («ملفّك قوي»)، و«أي جديد نخبرك به» تقلب العلاقة رأساً على عقب: الموكّلة تنتظر، وحين لا يصلها شيء بعد أسبوعين تُفسِّر الصمت بأن ملفها متروك.",
            en: "Every sentence here is spoken in good faith, and carries three defects: no owned act and no date; an implied promise of outcome (“your file is a strong one”); and “anything new, we’ll let you know”, which inverts the relationship — she waits, and when nothing arrives for two weeks she reads the silence as a file left alone.",
          },
        },
      },
      { kind: "activity", id: "s.cc.08.a1", activityId: "act.cc.08.1", mode: "quick" },
      { kind: "activity", id: "s.cc.08.a2", activityId: "act.cc.08.2", mode: "guided" },
      { kind: "activity", id: "s.cc.08.a3", activityId: "act.cc.08.3", mode: "guided" },
      { kind: "activity", id: "s.cc.08.a4", activityId: "act.cc.08.4", mode: "independent" },
      { kind: "activity", id: "s.cc.08.a5", activityId: "act.cc.08.5", mode: "independent" },
      { kind: "summary", id: "s.cc.08.summary", summaryCardId: "card.cc.08" },
      {
        kind: "apply_tomorrow",
        id: "s.cc.08.apply",
        task: {
          ar: "في آخر لقاء لك غداً، لا تُنهِ الكلام قبل أن يكتب الموكّل بخطّه ثلاثة أسطر: ماذا أفعل أنا ومتى، وماذا يفعل هو ومتى، ومتى نتكلّم.",
          en: "In your last meeting tomorrow, do not stop talking until the client has written three lines in his own hand: what I do and when, what he does and when, and when we speak.",
        },
        detail: {
          ar: "اطلب منه أن يقرأها عليك بصوته قبل أن يقوم. ما يُقال بصوت الموكّل يُنفَّذ؛ وما يُقال بصوتك وحدك يُنسى في الممرّ.",
          en: "Ask him to read them back to you before he stands up. What the client says out loud gets done; what only you said is forgotten in the corridor.",
        },
      },
      {
        kind: "next_mission",
        id: "s.cc.08.next",
        teaser: {
          ar: "أقفلتَ اللقاء بتواريخ. لكن ماذا تكتب في الأسبوع الذي لم يحدث فيه شيء على الإطلاق؟ الوحدة القادمة: التحديث الذي لم يضطرّ الموكّل لملاحقته.",
          en: "You closed the meeting with dates. But what do you write in the week when absolutely nothing happened? Next unit: the update the client didn’t have to chase.",
        },
      },
    ],
    activities: [
      {
        id: "act.cc.08.1",
        kind: "true_false",
        skillId: "skill.next-steps-closure",
        stage: 3,
        weight: 1,
        context: {
          ar: [
            "في ختام لقاء مع موكّل في نزاع على عقد توريد، قال المحامي:",
            "«سنراجع العقد ونعود إليك في أقرب فرصة.»",
          ],
          en: [
            "Closing a meeting with a client in a supply-contract dispute, the lawyer said:",
            "“We’ll review the contract and come back to you at the earliest opportunity.”",
          ],
        },
        prompt: {
          ar: "هذه العبارة خطوة تالية مكتملة، لأنها تحدّد الفعل (مراجعة العقد) والجهة التي ستقوم به (المكتب).",
          en: "This is a complete next step, because it names the act (reviewing the contract) and who will do it (the office).",
        },
        options: [
          {
            id: "o.true",
            label: { ar: "صحيح", en: "True" },
            rationale: {
              ar: "الفعل موجود والجهة موجودة، وهذا بالضبط ما يخدع. تنقص الخطوةَ ركيزتان: مالكٌ بالاسم ويومٌ بعينه. «المكتب» لا يُتَّصل به ولا يُذكَّر، و«أقرب فرصة» تعني في التقويم: لا شيء. بعد عشرة أيام سيتّصل الموكّل ليسأل، وتكون قد خسرت المبادرة في علاقتك به.",
              en: "There is an act and there is an actor, and that is exactly what deceives you. Two supports are missing: a named owner and a specific day. Nobody can ring or remind “the office”, and “at the earliest opportunity” means, on a calendar, nothing. Ten days later the client rings to ask, and you have lost the initiative in the relationship.",
            },
          },
          {
            id: "o.false",
            label: { ar: "خطأ", en: "False" },
            correct: true,
            rationale: {
              ar: "بالضبط. ينقصها اسم ويوم — ولا شيء غير ذلك. أضِف الاثنين وتتحوّل الجملة نفسها إلى التزام: «أراجع العقد وأُرسل لك ملاحظاتي بالنقاط يوم الخميس 17 أيلول». الكلمات لم تتغيّر كثيراً؛ ما تغيّر أن الموكّل صار قادراً على محاسبتك.",
              en: "Exactly. A name and a day are missing — nothing else is. Add both and the same sentence becomes a commitment: “I will review the contract and send you my points on Thursday 17 September.” The words barely changed; what changed is that the client can now hold you to them.",
            },
          },
        ],
      },
      {
        id: "act.cc.08.2",
        kind: "ordering",
        skillId: "skill.next-steps-closure",
        secondarySkillIds: ["skill.expectation-management"],
        stage: 3,
        weight: 2,
        prompt: {
          ar: "رتّب حركات التسعين ثانية الأخيرة بالترتيب الذي يجعل كل حركة تُمهّد للتي بعدها.",
          en: "Put the moves of the last ninety seconds in the order that lets each one open the way for the next.",
        },
        hint: {
          ar: "ابدأ بما يجعل الموكّل يمسك القلم، وانتهِ بما يمنعه من الاتصال قلقاً بعد أسبوع.",
          en: "Start with what makes the client pick up a pen; end with what stops him ringing you anxiously next week.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٥) من قائمة منسدلة بجانب كل حركة بدل السحب.",
          en: "Pick the position number (1 to 5) from a dropdown beside each move instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "أعلن أنك تُقفل: «قبل أن نختم، أُعيد عليك ما اتفقنا عليه.»",
              en: "Announce that you are closing: “Before we finish, let me give you back what we agreed.”",
            },
            rationale: {
              ar: "الإعلان هو ما يجعل الموكّل يمسك قلمه. الإقفال الذي لا يُعلَن يُسمع كدردشة أخيرة عند الباب، فلا يُدوَّن ولا يُتذكَّر.",
              en: "The announcement is what makes the client pick up a pen. An unannounced close is heard as last chat at the door: nothing is written down and nothing is remembered.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "لخّص فهمك للمسألة في جملتين، واطلب منه التصحيح صراحةً.",
              en: "Summarise your understanding of the matter in two sentences and expressly invite correction.",
            },
            rationale: {
              ar: "آخر فرصة لالتقاط واقعة مغلوطة قبل أن تُبنى عليها خطة وتواريخ. سؤال «ماذا فاتني؟» في هذه اللحظة يوفّر أسابيع من العمل في الاتجاه الخطأ.",
              en: "The last chance to catch a wrong fact before a plan and a set of dates are built on it. “What have I missed?” asked here saves weeks of work in the wrong direction.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "سمِّ التزامك أنت: فعل واحد + اسمك + تاريخ + ما الذي سيصل إليه.",
              en: "Name your own commitment: one act + your name + a date + what will reach him.",
            },
            rationale: {
              ar: "التزامك يسبق التزامه دائماً. من يطلب من موكّله مهمّة قبل أن يعلن مهمّته هو يبدو محصّلاً للمستندات لا مسؤولاً عن الملف.",
              en: "Your commitment always precedes his. A lawyer who assigns the client a task before declaring his own looks like a collector of documents rather than the person carrying the file.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "سمِّ التزام الموكّل: مهمّة واحدة، بتاريخ يسبق تاريخك.",
              en: "Name the client’s commitment: one task, dated earlier than yours.",
            },
            rationale: {
              ar: "واحدة لا ثلاث — القائمة الطويلة تُشعره بالعجز فلا يبدأ. وتاريخها قبل تاريخك، وإلا تحوّل تأخّره إلى تأخّرك أمامه.",
              en: "One task, not three — a long list makes him feel defeated and he starts none of it. And date it before your own, or his delay quietly becomes your delay in his eyes.",
            },
          },
          {
            id: "i5",
            label: {
              ar: "حدّد موعد الاتصال التالي، وقل ماذا يحدث إن تأخّرت خطوتك.",
              en: "Fix the time of the next call, and say what happens if your step slips.",
            },
            rationale: {
              ar: "الموعد المحدّد يُلغي سبب الاتصال القلق أصلاً. وذكرُ خطّةِ التأخير هو ما يجعل التواريخ الأخرى قابلة للتصديق: الموكّل يعرف أنه سيسمع منك في الحالتين.",
              en: "A fixed time removes the reason for the anxious call in the first place. And naming a plan for slippage is what makes the other dates believable: he knows he hears from you either way.",
            },
          },
        ],
      },
      {
        id: "act.cc.08.3",
        kind: "find_mistake",
        skillId: "skill.next-steps-closure",
        secondarySkillIds: ["skill.expectation-management", "skill.avoiding-guarantees"],
        stage: 3,
        weight: 2,
        context: {
          ar: [
            "الموكّل: بشير حمدان، صاحب شركة توريد مواد تغليف، شيك مرتجع من عميل متعثّر.",
            "المحامي يُقفل اللقاء بأربع جُمَل:",
            "«الخلاصة: نُرسل الإنذار خلال أيام، وسيصلك ردّهم خلال أسبوعين على الأكثر.»",
            "«والقسم سيتابع التسجيل ويحدّد لنا جلسة قريبة.»",
            "«وأنت جهّز لي المستندات المطلوبة كلها متى ما تيسّر.»",
            "«وأي تطوّر نبلغك به فوراً.»",
          ],
          en: [
            "The client: Bashir Hamdan, owner of a packaging-supply company, holding a dishonoured cheque from a customer in difficulty.",
            "The lawyer closes the meeting in four sentences:",
            "“So: we send the formal notice within a few days, and their reply will reach you within two weeks at the most.”",
            "“The department will follow the filing and get us an early hearing.”",
            "“And you get all the required documents ready whenever you can.”",
            "“Any development, we’ll tell you immediately.”",
          ],
        },
        prompt: {
          ar: "الجُمَل الأربع كلها معيبة. أيّ عيب سيكلّفك أكثر من غيره حين يمرّ الأسبوعان؟",
          en: "All four sentences are flawed. Which flaw will cost you most once those two weeks pass?",
        },
        hint: {
          ar: "اسأل عن كل تاريخ في الجُمَل: هل ينتجه أحدٌ في مكتبك بيده؟",
          en: "Ask of every date in these sentences: does somebody in your office produce it with their own hands?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«خلال أيام» بلا تاريخ محدّد لإرسال الإنذار.",
              en: "“Within a few days”, with no date for sending the notice.",
            },
            rationale: {
              ar: "عيب حقيقي: «أيام» تُقرأ عندك ثلاثة وعنده اثنين. لكنه عيب قابل للإصلاح برسالة واحدة مساء اليوم تقول: «الإنذار يُرسل الثلاثاء». التكلفة هنا اتصال إضافي، لا فقدان ثقة.",
              en: "A real defect: “days” means three to you and two to him. But it is repairable with one message tonight saying “the notice goes out on Tuesday”. The cost here is an extra phone call, not lost trust.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«سيصلك ردّهم خلال أسبوعين على الأكثر».",
              en: "“Their reply will reach you within two weeks at the most.”",
            },
            correct: true,
            rationale: {
              ar: "أنت لا تملك بريد الخصم ولا قراره ولا محاميه. وحين يمرّ الأسبوعان بلا ردّ — وهو الاحتمال الأرجح — لن يقرأ الموكّل «الخصم تأخّر»، بل «محاميّ أخطأ». والأسوأ أن سقوط هذا التاريخ يُسقط معه مصداقية كل تاريخ آخر أعطيته، بما فيها التواريخ التي كنتَ ستفي بها فعلاً.",
              en: "You own neither the other side’s post, nor its decision, nor its lawyer. When two weeks pass with no reply — the likelier outcome — the client does not read “the opponent is slow”; he reads “my lawyer got it wrong”. Worse, when that date falls it takes with it the credibility of every other date you gave, including the ones you would have kept.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«القسم سيتابع التسجيل».",
              en: "“The department will follow the filing.”",
            },
            rationale: {
              ar: "خطوة بلا مالك، وهي في الواقع خطوة لن تحدث في موعدها: لا أحد يشعر أنها عليه شخصياً. لكن الموكّل لا يستطيع محاسبتك عليها لأنه لا يملك تاريخاً أصلاً — الضرر داخلي وبطيء، لا فوري ومكشوف.",
              en: "A step with no owner, and in practice a step that will not happen on time: nobody feels it is personally theirs. But the client cannot hold you to it because he has no date for it either — the damage is internal and slow, not immediate and exposed.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«جهّز لي المستندات المطلوبة كلها متى ما تيسّر».",
              en: "“Get all the required documents ready whenever you can.”",
            },
            rationale: {
              ar: "طلب بلا قائمة وبلا تاريخ يعني بلا أولوية، و«كلها» تُشعر الموكّل بأنه فشل قبل أن يبدأ فيؤجّل. عيب مكلف، لكن ثمنه يُدفع تأخيراً في العمل — لا انهياراً في تصديقك.",
              en: "An ask with no list and no date means no priority, and “all of them” makes the client feel he has failed before starting, so he postpones. A costly defect, but it is paid for in slower work — not in the collapse of your credibility.",
            },
          },
          {
            id: "o5",
            label: {
              ar: "«وأي تطوّر نبلغك به فوراً».",
              en: "“Any development, we’ll tell you immediately.”",
            },
            rationale: {
              ar: "جملة تبدو كرماً وهي في الحقيقة تُسلّم مفتاح الإيقاع للصدفة: إن لم يحدث تطوّر، لن تكتب أبداً. الموكّل سيقرأ صمتك بعد ثلاثة أسابيع بوصفه إهمالاً. عيب خطير — لكن يُعالَج بموعد ثابت، لا بأزمة.",
              en: "It sounds generous and in fact hands the rhythm of the relationship to chance: if nothing develops, you never write. Three weeks later the client reads your silence as neglect. A serious defect — but one fixed by fixing a date, not by a crisis.",
            },
          },
        ],
      },
      {
        id: "act.cc.08.4",
        kind: "short_written",
        skillId: "skill.next-steps-closure",
        secondarySkillIds: ["skill.client-follow-up", "skill.expectation-management"],
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.client-response.v1",
        weight: 3,
        minChars: 240,
        context: {
          ar: [
            "انتهى قبل قليل لقاؤك الأول مع السيدة هدى العمري، مديرة تسويق أُنهيت خدماتها بعد ست سنوات في شركة الرافد للتجارة.",
            "ما اتفقتما عليه: تُرسل أنت كتاب المطالبة ببدل الإنذار وتعويض نهاية الخدمة يوم الثلاثاء 15 أيلول 2026؛ وترسل هي كشوف الرواتب لآخر ستة أشهر قبل الأحد 13 أيلول 2026؛ ومكالمة بينكما الخميس 17 أيلول الخامسة مساءً.",
            "ما لا تعرفه: متى سترد الشركة، ولا ما إذا كانت ستفاوض أصلاً.",
          ],
          en: [
            "Your first meeting with Ms Huda Al-Amri has just ended — a marketing manager dismissed after six years at Al-Rafid Trading.",
            "What you agreed: you send the demand letter for notice pay and end-of-service entitlements on Tuesday 15 September 2026; she sends the last six months of payslips before Sunday 13 September 2026; you speak by phone on Thursday 17 September at 5 p.m.",
            "What you do not know: when the company will reply, or whether it will negotiate at all.",
          ],
        },
        prompt: {
          ar: "اكتب رسالة الإقفال التي ترسلها إليها خلال ساعة من انتهاء اللقاء (٦٠–٩٠ كلمة). ثلاث خطوات فقط، لكل خطوة مالك بالاسم وتاريخ، وواحدة منها عليها هي. لا تعد بنتيجة، ولا تلتزم بتاريخ لا تملكه، وقل ماذا يحدث إن تأخّرت.",
          en: "Write the closing message you send her within an hour of the meeting (60–90 words). Three steps only, each with a named owner and a date, one of them hers. Promise no outcome, commit to no date you do not control, and say what happens if you slip.",
        },
        modelAnswer: {
          ar: [
            "«مساء الخير سيدة هدى. تلخيصاً لما اتفقنا عليه اليوم:»",
            "«١) أنا أُرسل كتاب المطالبة ببدل الإنذار وتعويض نهاية الخدمة إلى شركة الرافد يوم الثلاثاء 15 أيلول، وتصلك نسخة منه في اليوم نفسه.»",
            "«٢) أنتِ ترسلين لي كشوف الرواتب لآخر ستة أشهر قبل الأحد 13 أيلول.»",
            "«٣) نتحدّث هاتفياً الخميس 17 أيلول الساعة الخامسة.»",
            "«لا أستطيع أن أعدك بموعد لردّ الشركة لأنه ليس بيدي. وإن تعذّر إرسال الكتاب الثلاثاء، تصلك رسالة منّي في اليوم نفسه بالسبب والتاريخ الجديد.»",
          ],
          en: [
            "“Good evening, Ms Huda. To confirm what we agreed today:”",
            "“1) I will send the demand letter for notice pay and end-of-service entitlements to Al-Rafid on Tuesday 15 September, and a copy reaches you the same day.”",
            "“2) You send me the last six months of payslips before Sunday 13 September.”",
            "“3) We speak by phone on Thursday 17 September at 5 p.m.”",
            "“I can’t promise you a date for the company’s reply — that isn’t mine to give. And if the letter cannot go out on Tuesday, you’ll have a message from me that same day with the reason and the new date.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«مساء الخير سيدة هدى، سعدت بلقائك اليوم.»",
              "«كما اتفقنا، سنقوم بإعداد المطالبة وإرسالها إلى الشركة في أقرب وقت، وسنوافيك بردّهم فور وصوله بإذن الله.»",
              "«يُرجى تزويدنا بالمستندات المتوفّرة لديك في أقرب فرصة ممكنة، ونحن على ثقة بأن حقّك سيصل.»",
            ],
            en: [
              "“Good evening, Ms Huda, it was a pleasure meeting you today.”",
              "“As agreed, we will prepare the claim and send it to the company as soon as possible, and we will pass on their reply the moment it arrives.”",
              "“Please provide us with whatever documents you have at your earliest convenience. We are confident your entitlement will come through.”",
            ],
          },
          whatIsWrong: {
            ar: "أربعة أعطاب في ثلاث جُمَل: «سنقوم» بلا مالك، و«أقرب وقت» بلا تاريخ، و«المستندات المتوفّرة» بلا تسمية ولا موعد — فلا تعرف الموكّلة أن كشوف الرواتب تحديداً هي ما يؤخّر الكتاب. أمّا «حقّك سيصل» فوعدٌ بنتيجة قبل أن يُرسَل حرف واحد. الرسالة مهذّبة تماماً، ولا يستطيع أحد أن يكتب منها سطراً واحداً في مفكّرته.",
            en: "Four defects in three sentences: “we will” with no owner, “as soon as possible” with no date, and “whatever documents you have” with no list and no deadline — so she never learns that the payslips specifically are what holds the letter. And “your entitlement will come through” promises an outcome before a single letter has gone out. The message is perfectly courteous, and nobody can write one line of it in a diary.",
          },
        },
      },
      {
        id: "act.cc.08.5",
        kind: "reflection",
        skillId: "skill.next-steps-closure",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع آخر لقاء أقفلته بجملة من نوع «سنبقى على تواصل». من اتّصل بمن بعد ذلك، وبعد كم يوماً؟",
          en: "Recall the last meeting you closed with some version of “we’ll stay in touch”. Who called whom afterwards, and how many days later?",
        },
        followUp: {
          ar: "ولو كنتَ أعطيته يوماً واحداً محدّداً، هل كانت تلك المكالمة ستحدث أصلاً؟",
          en: "And if you had given him one specific day, would that call have happened at all?",
        },
      },
    ],
    summaryCard: {
      id: "card.cc.08",
      title: {
        ar: "مفتاح الخروج",
        en: "The Exit Key",
      },
      whatYouLearned: {
        ar: [
          "الالتزام بنية لا نيّة: فعل واحد، ومالك بالاسم، ويوم بعينه.",
          "«المكتب» ليس مالكاً، و«قريباً» ليست تاريخاً.",
          "لا تلتزم بتاريخ لا تملك إنتاجه: ردّ الخصم، أو جلسة، أو قرار جهة رسمية.",
          "تاريخ التأخير جزء من الخطة، وهو ما يجعل بقيّة التواريخ قابلة للتصديق.",
        ],
        en: [
          "A commitment is a structure, not an intention: one act, a named owner, a specific day.",
          "“The office” is not an owner, and “soon” is not a date.",
          "Never commit to a date you do not produce: the opponent’s reply, a hearing, an official decision.",
          "The slippage date is part of the plan, and it is what makes every other date believable.",
        ],
      },
      framework: {
        name: {
          ar: "مفتاح: المالك · الفعل · التاريخ · الإثبات · حال التأخّر",
          en: "The Exit Key: Owner · Act · Date · Proof · If It Slips",
        },
        steps: [
          {
            ar: "المالك — اسم شخص يستطيع الموكّل الاتصال به وتذكيره.",
            en: "Owner — a named person the client can call and remind.",
          },
          {
            ar: "الفعل — فعل واحد قابل للرؤية: يُرسَل، يُودَع، يُتَّصل.",
            en: "Act — one visible act: sent, filed, called.",
          },
          {
            ar: "التاريخ — يوم بعينه، ومن الأشياء التي تملك إنتاجها.",
            en: "Date — a specific day, for something you produce yourself.",
          },
          {
            ar: "الإثبات — ما الذي سيصل إلى الموكّل ليعرف أنها تمّت.",
            en: "Proof — what reaches the client so he knows it happened.",
          },
          {
            ar: "حال التأخّر — متى يسمع منك إن لم تتمّ في موعدها.",
            en: "If it slips — when he hears from you if it does not happen on time.",
          },
        ],
      },
      rememberThis: {
        ar: "الخطوة التي لا اسم لها ولا يوم ليست خطوة، بل نيّة حسنة يدفع ثمنها الموكّل انتظاراً.",
        en: "A step with no name and no day is not a step. It is a good intention, and the client pays for it in waiting.",
      },
      useItTomorrow: {
        ar: "في آخر لقاء لك غداً، اكتب على ورقة أمام الموكّل ثلاثة أسطر — التزامي وتاريخه، التزامك وتاريخه، موعد مكالمتنا — وصوّرها له بهاتفه قبل أن يقوم.",
        en: "In your last meeting tomorrow, write three lines on paper in front of the client — my commitment and its date, your commitment and its date, the time of our call — and have him photograph it on his phone before he stands up.",
      },
    },
    targetLevel: 3,
    sourceIds: [
      "src.legal-project-management",
      "src.client-centered-law-firm",
      "src.governance-raci",
      "src.managing-professional-service-firm",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 09 — The update the client didn't have to chase
  // =========================================================================
  {
    id: "unit.cc.09",
    chapterId: "ch.cc.keeping-trust",
    order: 9,
    title: {
      ar: "التحديث الذي لم يضطرّ الموكّل لملاحقته",
      en: "The Update the Client Didn’t Have to Chase",
    },
    subtitle: {
      ar: "«لا جديد» خبرٌ كامل — إن وصل في موعده وحمل معه موعد التالي.",
      en: "“Nothing new” is a complete piece of news — if it arrives on time and carries the date of the next one.",
    },
    primarySkillId: "skill.client-follow-up",
    skillIds: [
      "skill.client-follow-up",
      "skill.expectation-management",
      "skill.next-steps-closure",
      "skill.avoiding-guarantees",
    ],
    stage: 4,
    estimatedMinutes: 11,
    steps: [
      {
        kind: "hook",
        id: "s.cc.09.hook",
        text: {
          ar: "الموكّل لا يغضب من بطء الإجراءات. يغضب لأنه اضطرّ أن يسأل.",
          en: "Clients are not angered by how slowly things move. They are angered by having had to ask.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.cc.09.why",
        text: {
          ar: "كل اتصال يبدأ بـ«في أي مرحلة صرنا؟» فاتورة يدفعها مكتبك: دقائق ضائعة، وثقة تتآكل، وموكّل بدأ يفترض الأسوأ. رسالةٌ تسبق سؤاله بيوم أرخص من مكالمة تليه بعشرة أيام.",
          en: "Every call that opens with “where are we?” is a bill your firm pays: minutes lost, trust eroded, a client who has begun assuming the worst. A message one day ahead of his question costs less than the call ten days after it.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.cc.09.goals",
        goals: {
          ar: [
            "أن تضبط إيقاعاً مكتوباً للتحديث وتُعلنه قبل أن يُطلب منك.",
            "أن تكتب تحديثاً في أسبوع لم يحدث فيه شيء، من دون اختلاق تقدّم ومن دون اعتذار عن الانتظار.",
            "أن تحوّل «لا جديد» إلى معلومة يبني عليها الموكّل قراراً هذا الأسبوع.",
          ],
          en: [
            "Set a written update rhythm and announce it before anyone asks you for one.",
            "Write an update in a week when nothing happened — without inventing progress and without apologising for the wait.",
            "Turn “nothing new” into information the client can build a decision on this week.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.cc.09.lesson",
        title: {
          ar: "الصمت ليس حياداً",
          en: "Silence is not neutral",
        },
        body: {
          ar: [
            "المحامي يظنّ أن الرسالة تحتاج مضموناً: خبراً، أو تقدّماً، أو قراراً. فيؤجّل الكتابة حتى «يصير شيء».",
            "والموكّل لا يقرأ التأجيل كما تقرأه أنت. الصمت عنده ليس «لا جديد»، بل «نُسيتُ».",
            "الفراغ لا يبقى فارغاً. يملؤه الموكّل بأسوأ تفسير متاح، ثم يبدأ بسؤال أصدقائه بدل سؤالك.",
            "و«لا جديد» ليست عدماً. هي معلومة: الملف عند الفاحص، والانتظار ضمن المعتاد، ولا مطلوب منك شيء هذا الأسبوع.",
            "وهي معلومة قابلة للتصرّف. من يعرف أن لا شيء سيحدث قبل الشهر القادم يستطيع أن يوقّع عقداً، أو يؤجّل قراراً، أو ينام.",
            "الإيقاع أهمّ من الطول. أربعون كلمة كل ثلاثاء تبني ثقة لا تبنيها صفحتان كل شهرين.",
            "وشرط واحد يجعل «لا جديد» مقبولة: أن تقول متى الرسالة التالية. بدونه تُقرأ تهرّباً لا شفافية.",
            "ولا تعتذر عن غياب الجديد. الاعتذار يزرع في ذهن الموكّل أن هناك ما يُعتذر عنه، فيبدأ بالبحث عن الخطأ.",
          ],
          en: [
            "Lawyers think a message needs content: news, progress, a decision. So they postpone writing until “something happens”.",
            "The client does not read that postponement the way you do. To him silence is not “nothing new”; it is “I was forgotten”.",
            "A vacuum does not stay empty. He fills it with the worst available explanation, then starts asking his friends instead of asking you.",
            "“Nothing new” is not nothing. It is information: the file is with the examiner, the wait is normal, and nothing is required of you this week.",
            "And it is actionable information. A man who knows nothing will move before next month can sign a contract, defer a decision, or sleep.",
            "Rhythm matters more than length. Forty words every Tuesday builds trust that two pages every two months never will.",
            "One condition makes “nothing new” acceptable: saying when the next message comes. Without it, it reads as evasion rather than candour.",
            "And do not apologise for the absence of news. An apology plants the idea that something needs apologising for, and he starts hunting for the mistake.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.cc.09.visual",
        title: {
          ar: "ثلاثة أسابيع كما يعيشها الموكّل",
          en: "Three weeks, as the client lives them",
        },
        variant: "timeline",
        items: [
          {
            label: {
              ar: "الأسبوع الأول — لا شيء يحدث: الملف عند الفاحص.",
              en: "Week one — nothing happens: the file is with the examiner.",
            },
            detail: {
              ar: "عندك: لا مبرّر للكتابة. عنده: «قدّمنا، وننتظر». التفسيران متطابقان حتى الآن.",
              en: "You: no reason to write. Him: “we filed, we’re waiting.” So far the two readings match.",
            },
            tone: "neutral",
          },
          {
            label: {
              ar: "الأسبوع الثاني — ما زال لا شيء. ولم تكتب.",
              en: "Week two — still nothing. And you did not write.",
            },
            detail: {
              ar: "عندك: لا جديد يستحقّ الإرسال. عنده: «لماذا لا يكتب؟ هل ظهرت مشكلة؟» هنا يفترق التفسيران.",
              en: "You: nothing worth sending. Him: “why isn’t he writing? Has something gone wrong?” Here the two readings split.",
            },
            tone: "negative",
          },
          {
            label: {
              ar: "الأسبوع الثالث — ما زال لا شيء. واتّصل مرّتين.",
              en: "Week three — still nothing. And he has called twice.",
            },
            detail: {
              ar: "الصمت صار هو الخبر. صار عليك أن تشرح صمتك قبل أن تشرح ملفه.",
              en: "The silence has become the news. Now you must explain your silence before you can explain his file.",
            },
            tone: "negative",
          },
          {
            label: {
              ar: "المسار البديل — ثلاث رسائل من أربعين كلمة في ثلاثة أيام ثلاثاء.",
              en: "The alternative — three forty-word messages on three Tuesdays.",
            },
            detail: {
              ar: "الوقائع نفسها تماماً، ولا اتصال واحد. الفرق ليس في الملف، بل في من بادر.",
              en: "Exactly the same facts, and not one phone call. The difference is not in the file; it is in who moved first.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.cc.09.worked",
        strong: {
          label: {
            ar: "رسالة الثلاثاء في أسبوع لم يحدث فيه شيء",
            en: "The Tuesday message in a week when nothing happened",
          },
          text: {
            ar: [
              "«مساء الخير سيدة نهى. تحديث الثلاثاء بخصوص ملف علامة «فرن الأصيل».»",
              "«لا جديد هذا الأسبوع: الاعتراض ما زال عند الفاحص ولم يصدر قرار. هذا ضمن المدى المعتاد في مثل هذه الملفات، ولا أستطيع أن أعطيك تاريخاً لقرارٍ ليس بيدي.»",
              "«ما يعنيك عملياً: لا مطلوب منكِ شيء هذا الأسبوع. سأكتب لكِ مجدّداً الثلاثاء 22 أيلول حتى لو لم يتغيّر شيء، وإن وصل القرار قبله تعرفينه في اليوم نفسه.»",
            ],
            en: [
              "“Good evening, Ms Nuha. Tuesday update on the Furn Al-Aseel trade mark file.”",
              "“Nothing new this week: the opposition is still with the examiner and no decision has issued. That is within the normal range for these files, and I can’t give you a date for a decision that isn’t mine to make.”",
              "“What this means for you: nothing is required from you this week. I’ll write again on Tuesday 22 September even if nothing has changed, and if the decision lands before then you’ll know the same day.”",
            ],
          },
          why: {
            ar: "أربع معلومات في رسالة قصيرة: أين وصلنا، وهل هذا طبيعي، وما المطلوب منكِ، ومتى تسمعين منّي مجدّداً. لم يُختلق تقدّم، ولم يُوعَد بتاريخ لا يملكه المحامي، ومع ذلك خرجت الموكّلة بقرار تستطيع اتخاذه اليوم.",
            en: "Four pieces of information in a short message: where we are, whether that is normal, what is required of you, and when you hear from me next. No progress was invented and no unowned date was promised — and still the client leaves with a decision she can make today.",
          },
        },
        weak: {
          label: {
            ar: "الرسالة نفسها بقلم محامٍ يشعر بالذنب",
            en: "The same message from a lawyer writing out of guilt",
          },
          text: {
            ar: [
              "«مساء الخير سيدة نهى، أعتذر عن التأخير في الردّ.»",
              "«الملف قيد المتابعة، ونحن نتابعه مع الجهة المختصة أولاً بأول، وبمجرّد أن يصلنا أي جديد سنوافيكِ به فوراً.»",
              "«شاكرين حسن تعاونكم.»",
            ],
            en: [
              "“Good evening, Ms Nuha, apologies for the delay in getting back to you.”",
              "“The file is in hand and we are following it up with the relevant authority on an ongoing basis. The moment anything new reaches us we will pass it on immediately.”",
              "“Thank you for your kind cooperation.”",
            ],
          },
          why: {
            ar: "رسالة مهذّبة وفارغة: «قيد المتابعة» لا تقول ما حدث ولا ما لم يحدث، و«بمجرّد أن يصلنا جديد» تحوّل الموكّلة إلى منتظرة بلا موعد. والاعتذار في مطلعها يعترف بالتأخّر ولا يعالجه، ويوحي بأن ثمّة خطأً ما. والأخطر أنها تُكتب عند الشعور بالذنب لا في موعد ثابت — فيعود الصمت في الأسبوع التالي.",
            en: "Courteous and empty: “in hand” says neither what happened nor what did not, and “the moment anything reaches us” turns her into someone waiting with no date. The opening apology concedes the delay without repairing it and hints that something is wrong. Worst of all, it is written out of guilt rather than on a fixed day — so the silence returns next week.",
          },
        },
      },
      { kind: "activity", id: "s.cc.09.a1", activityId: "act.cc.09.1", mode: "quick" },
      { kind: "activity", id: "s.cc.09.a2", activityId: "act.cc.09.2", mode: "guided" },
      { kind: "activity", id: "s.cc.09.a3", activityId: "act.cc.09.3", mode: "guided" },
      { kind: "activity", id: "s.cc.09.a4", activityId: "act.cc.09.4", mode: "independent" },
      { kind: "activity", id: "s.cc.09.a5", activityId: "act.cc.09.5", mode: "independent" },
      { kind: "summary", id: "s.cc.09.summary", summaryCardId: "card.cc.09" },
      {
        kind: "apply_tomorrow",
        id: "s.cc.09.apply",
        task: {
          ar: "افتح ملفاتك النشطة واختر ثلاثة لم يسمع أصحابها منك منذ أكثر من أسبوعين. أرسل لكل منهم أربعين كلمة اليوم، ولو لم يحدث شيء.",
          en: "Open your active files and pick three whose clients have not heard from you in over two weeks. Send each of them forty words today, even if nothing has happened.",
        },
        detail: {
          ar: "أين وصلنا، هل هذا ضمن المعتاد، ما المطلوب منك، ومتى الرسالة التالية. ثم ضع موعد الرسالة التالية في تقويمك قبل أن تُغلق الملف.",
          en: "Where we are, whether that is normal, what is needed from you, and the date of the next message. Then put that next date in your calendar before you close the file.",
        },
      },
      {
        kind: "next_mission",
        id: "s.cc.09.next",
        teaser: {
          ar: "هذا ما يحمي الثقة قبل أن تنكسر. الوحدة الأخيرة: ماذا تفعل حين تكون قد انكسرت فعلاً، والموكّل على الهاتف الآن، وغاضب.",
          en: "That is how you protect trust before it breaks. The final unit: what to do when it has already broken, and the client is on the phone right now, furious.",
        },
      },
    ],
    activities: [
      {
        id: "act.cc.09.1",
        kind: "multiple_select",
        skillId: "skill.client-follow-up",
        secondarySkillIds: ["skill.avoiding-guarantees"],
        stage: 4,
        weight: 2,
        context: {
          ar: [
            "الملف: اعتراض على تسجيل علامة تجارية لصالح موكّلتك نهى الصايغ، صاحبة سلسلة مخابز صغيرة.",
            "الأسبوع الحالي: لم يحدث شيء. الملف عند الفاحص، ولا قرار ولا مهلة تنقضي.",
          ],
          en: [
            "The file: a trade mark opposition for your client Nuha Al-Sayegh, who owns a small chain of bakeries.",
            "This week: nothing happened. The file sits with the examiner; no decision, no deadline expiring.",
          ],
        },
        prompt: {
          ar: "أيّ العناصر يجب أن تحتويها رسالة التحديث في أسبوع لم يحدث فيه شيء؟ اختر كل ما ينطبق.",
          en: "Which elements belong in an update message for a week when nothing happened? Select all that apply.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "وضع الملف الآن بعبارة واقعية: عند مَن هو، وما الذي ينتظره.",
              en: "The file’s actual position: who has it, and what it is waiting for.",
            },
            correct: true,
            rationale: {
              ar: "هذه هي المعلومة التي يبحث عنها الموكّل حين يتّصل. «عند الفاحص ولم يصدر قرار» تقول ما لا تقوله «قيد المتابعة» أبداً: أين هو الملف فيزيائياً، ومن يملك الخطوة التالية.",
              en: "This is the information the client rings to get. “With the examiner, no decision yet” says what “in hand” never says: where the file physically is, and who owns the next move.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "هل هذا الانتظار ضمن المعتاد أم خارجه.",
              en: "Whether this wait is within the normal range or outside it.",
            },
            correct: true,
            rationale: {
              ar: "الموكّل لا يملك مرجعاً يقيس عليه، فيقيس بأعصابه. جملة «هذا ضمن المدى المعتاد» تُحوّل قلقاً بلا سقف إلى انتظار له معنى. وإن كان خارج المعتاد فقُلها أيضاً — فالإخبار المبكر بالخبر السيئ أرخص من اكتشافه متأخّراً.",
              en: "The client has no benchmark, so he measures with his nerves. “This is within the normal range” converts unbounded anxiety into a wait with a meaning. And if it is outside the range, say that too — bad news delivered early is cheaper than bad news discovered late.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "ما المطلوب من الموكّل هذا الأسبوع — ولو كان: لا شيء.",
              en: "What is required of the client this week — even if it is: nothing.",
            },
            correct: true,
            rationale: {
              ar: "«لا مطلوب منكِ شيء» جملة يستريح لها الموكّل أكثر ممّا تتخيّل: كثيرون يظنّون أن الملف متوقّف بسببهم. وهي أيضاً ما يجعل الطلب مسموعاً حين يأتي فعلاً في أسبوع لاحق.",
              en: "“Nothing is needed from you” lands better than you expect: plenty of clients quietly assume the file is stalled because of them. It is also what makes a genuine ask audible when one finally comes in a later week.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "تاريخ الرسالة التالية.",
              en: "The date of the next message.",
            },
            correct: true,
            rationale: {
              ar: "هذا العنصر هو الذي يحوّل «لا جديد» من تهرّب إلى نظام. من يعرف أنه سيسمع منك الثلاثاء القادم لا يحتاج أن يتّصل الخميس. أغلب اتصالات القلق تموت هنا.",
              en: "This is the element that turns “nothing new” from evasion into a system. A client who knows he hears from you next Tuesday does not need to ring on Thursday. Most anxious calls die right here.",
            },
          },
          {
            id: "o5",
            label: {
              ar: "تقدير تقريبي لموعد صدور القرار، حتى لو كان تخميناً، لأن الموكّل يحتاج رقماً.",
              en: "A rough estimate of when the decision will issue — even a guess, because the client needs a number.",
            },
            rationale: {
              ar: "الموكّل يحتاج رقماً فعلاً، لكنه سيحوّل تخمينك إلى وعد خلال ساعة، وسيبني عليه قرارات تجارية. حين يمرّ التاريخ لن يتذكّر كلمة «تقريباً». أعطِه رقماً تملكه — موعد رسالتك التالية — لا رقماً تملكه جهة أخرى.",
              en: "He does need a number — and he will convert your guess into a promise within the hour, then build commercial decisions on it. When the date passes he will not remember the word “roughly”. Give him a number you own — the date of your next message — not one owned by somebody else.",
            },
          },
          {
            id: "o6",
            label: {
              ar: "اعتذار عن عدم وجود جديد هذا الأسبوع.",
              en: "An apology for there being nothing new this week.",
            },
            rationale: {
              ar: "لا جديد ليس ذنباً، والاعتذار عنه يزرع في ذهن الموكّل أن هناك ما يستحقّ الاعتذار. احتفظ باعتذارك لما هو خطؤك فعلاً — كصمتٍ دام ثلاثة أسابيع — وإلا فقدت الكلمة قيمتها يوم تحتاجها.",
              en: "No news is not a fault, and apologising for it plants the idea that something deserves an apology. Save the apology for what is genuinely yours — three weeks of silence, say — or the word will be worthless on the day you need it.",
            },
          },
          {
            id: "o7",
            label: {
              ar: "إشارة إلى ضغط العمل هذا الأسبوع حتى يعرف الموكّل أنك لم تتجاهله.",
              en: "A note about your workload this week, so the client knows you did not ignore him.",
            },
            rationale: {
              ar: "الموكّل لا يشتري وقتك ليعرف كم أنت مشغول. ذِكر الضغط في رسالة تحديث يُقرأ تمهيداً لتأخير قادم، ويجعل ملفه يبدو في آخر القائمة. رسالتك تتحدّث عن ملفه فقط.",
              en: "The client is not buying your time in order to hear how busy you are. Mentioning workload in an update reads as groundwork for a coming delay and makes his file look last in the queue. Your message is about his file only.",
            },
          },
        ],
      },

      {
        id: "act.cc.09.2",
        kind: "branching_decision",
        skillId: "skill.client-follow-up",
        secondarySkillIds: ["skill.expectation-management", "skill.avoiding-guarantees"],
        stage: 4,
        weight: 3,
        startNodeId: "n1",
        hint: {
          ar: "اسأل عن كل خيار: هل يخرج الموكّل منه بشيء يستطيع أن يبني عليه قراراً هذا الأسبوع؟",
          en: "Ask of every option: does the client leave it with something he can build a decision on this week?",
        },
        accessibleAlternative: {
          ar: "تُعرض الخيارات كقائمة أزرار نصّية، ويمكن الرجوع خطوة واحدة لقراءة نتيجة كل مسار.",
          en: "Options appear as a list of text buttons, and you can step back once to read the outcome of each route.",
        },
        prompt: {
          ar: "الثلاثاء، الرابعة عصراً. اتخذ القرار في كل مرحلة، وانظر إلى أين يقودك.",
          en: "Tuesday, four in the afternoon. Decide at each step and see where it takes you.",
        },
        nodes: [
          {
            id: "n1",
            text: {
              ar: "أمامك ملف نهى الصايغ. لا شيء جديد منذ أسبوعين: الاعتراض عند الفاحص. أمامك سبعة ملفات أخرى، والموكّلة لم تسأل. ماذا تفعل؟",
              en: "Nuha Al-Sayegh’s file is in front of you. Nothing new for two weeks: the opposition sits with the examiner. Seven other files are waiting, and the client has not asked. What do you do?",
            },
            choices: [
              {
                id: "c1",
                label: {
                  ar: "ترسل رسالة قصيرة تقول إنه لا جديد، وتحدّد فيها موعد الرسالة التالية.",
                  en: "Send a short message saying there is nothing new, and fix the date of the next one in it.",
                },
                nextNodeId: "n3",
                quality: "strong",
                rationale: {
                  ar: "أربع دقائق من وقتك تشتري أسبوعين من الطمأنينة. والأهم أنك بادرت وأنت في موقع قوة: لم تكتب رداً على قلق، بل قبل أن ينشأ.",
                  en: "Four minutes of your time buys two weeks of calm. More importantly you moved from a position of strength: you wrote before the anxiety existed, not in answer to it.",
                },
              },
              {
                id: "c2",
                label: {
                  ar: "تتّصل بموظف التسجيل أولاً لتستخرج أي معلومة، ثم تقرّر ماذا تكتب.",
                  en: "Ring the registry first to extract any information, then decide what to write.",
                },
                nextNodeId: "n4",
                quality: "acceptable",
                rationale: {
                  ar: "محاولة مشروعة ومفيدة، لكن احذر الفخّ: كثيرون يجعلون المكالمة شرطاً للكتابة، فإذا لم تُثمر أجّلوا الرسالة أسبوعاً آخر. المعلومة الإضافية تحسّن الرسالة، ولا تُنتِج إذناً بتأجيلها.",
                  en: "A legitimate and useful attempt, but watch the trap: many make the call a precondition for writing, and when it yields nothing they postpone the message another week. Extra information improves the message; it does not license delaying it.",
                },
              },
              {
                id: "c3",
                label: {
                  ar: "تؤجّل الكتابة إلى أن يصدر شيء يستحقّ الإرسال.",
                  en: "Postpone writing until something worth sending comes out.",
                },
                nextNodeId: "n2",
                quality: "weak",
                rationale: {
                  ar: "قرار يبدو معقولاً ويُبنى على وهم واحد: أن الموكّلة تقيس الملف بالمضمون. هي تقيسه بآخر مرّة سمعت فيها صوتك. والصمت الذي تراه حياداً تراه هي إهمالاً.",
                  en: "A decision that looks reasonable and rests on one illusion: that the client measures the file by its content. She measures it by the last time she heard from you. The silence you read as neutral, she reads as neglect.",
                },
              },
              {
                id: "c4",
                label: {
                  ar: "ترسل رسالة تقول إن الملف «يسير بشكل جيد ونتوقّع نتيجة قريبة».",
                  en: "Send a message saying the file “is going well and we expect a result soon”.",
                },
                nextNodeId: "n5",
                quality: "critical_mistake",
                rationale: {
                  ar: "اخترعتَ تقدّماً لم يحدث ووعدتَ بنتيجة لا تملكها، في رسالة واحدة. الأخطر أن الموكّلة ستبني عليها قراراً تجارياً، وحين يصدر القرار مخالفاً ستكون قد كذبتَ مرّتين: مرّة في التقدّم ومرّة في النتيجة.",
                  en: "You invented progress that did not occur and promised a result you do not own, in a single message. Worse, she will build a commercial decision on it, and when the decision goes the other way you will have misled her twice: once on the progress and once on the outcome.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "مرّ أسبوع آخر. اتّصلت الموكّلة اليوم وسألت السكرتيرة: «هل ما زال محاميّ يعمل على ملفّي؟» ماذا تفعل؟",
              en: "Another week passes. The client rang today and asked your secretary: “Is my lawyer still working on my file?” What now?",
            },
            choices: [
              {
                id: "c1",
                label: {
                  ar: "تعاود الاتصال بها اليوم، وتقرّ بأن انقطاع التواصل خطؤك أنت، ثم تعطيها إيقاعاً ثابتاً من الآن.",
                  en: "Call her back today, own the broken contact as your failure, and then set a fixed rhythm from now on.",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "أفضل ما يمكن إنقاذه الآن. الإقرار يسبق أي شرح، والإيقاع الثابت هو الجواب الوحيد الذي يمنع تكرار السؤال. لاحظ أن هذه المكالمة كان يمكن ألّا تحدث بكلفة أربع دقائق قبل أسبوعين.",
                  en: "The best available salvage. Ownership precedes any explanation, and a fixed rhythm is the only answer that stops the question recurring. Note that this call could have been avoided at a cost of four minutes two weeks ago.",
                },
              },
              {
                id: "c2",
                label: {
                  ar: "ترسل رسالة تقول إنه لا جديد وإن الأمور طبيعية، دون التطرّق إلى الصمت.",
                  en: "Send a message saying there is nothing new and all is normal, without touching the silence.",
                },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "المعلومة صحيحة والسؤال الذي في رأسها بقي بلا جواب. هي لم تسأل عن الملف، بل سألت إن كان أحد يعمل عليه. تجاهل الصمت بعد أن صار موضوعاً يجعله يكبر: ستفترض أن الرسالة كُتبت لأنها اتّصلت — وهي محقّة.",
                  en: "The information is accurate and the question in her head is unanswered. She did not ask about the file; she asked whether anyone was working on it. Ignoring the silence once it has become the subject only enlarges it: she will assume the message exists because she called — and she will be right.",
                },
              },
            ],
          },
          {
            id: "n3",
            text: {
              ar: "وصلت رسالتك. بعد دقيقتين ردّت: «شكراً. بصراحة كنت أفكّر في تأجيل افتتاح الفرع الجديد حتى يصدر القرار.» ماذا تفعل؟",
              en: "Your message lands. Two minutes later she replies: “Thank you. Honestly, I was thinking of postponing the new branch opening until the decision comes out.” What do you do?",
            },
            choices: [
              {
                id: "c1",
                label: {
                  ar: "تكتب لها ما الذي يتغيّر وما الذي لا يتغيّر إن افتتحت باللافتة الحالية قبل صدور القرار، ثم تترك القرار لها.",
                  en: "Write out what changes and what does not if she opens under the current sign before the decision, then leave the decision to her.",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "هذه هي القيمة التي دفعت مقابلها: لا تقرير حالة، بل قرار تجاري صار قابلاً للاتخاذ. ولاحظ من أين جاءت — من رسالة قلتَ فيها إنه لا جديد. «لا جديد» فتحت باباً لم يكن ليُفتح لو صمتّ.",
                  en: "This is the value she is paying for: not a status report but a commercial decision that has become makeable. And notice where it came from — a message in which you said there was nothing new. “Nothing new” opened a door that silence would have kept shut.",
                },
              },
              {
                id: "c2",
                label: {
                  ar: "تنصحها بالانتظار حتى يصدر القرار لتكون في أمان.",
                  en: "Advise her to wait for the decision so that she is safe.",
                },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "نصيحة تحمي راحتك لا مصلحتها: التأجيل خيار بلا مخاطرة عليك وبكلفة إيجار وأجور عليها. وكلمة «أمان» توحي بيقين لا تملكه. مهمّتك أن تعرض عليها الأثر القانوني لكل مسار، لا أن تختار لها المسار الأقل إحراجاً لك.",
                  en: "Advice that protects your comfort rather than her interests: waiting is risk-free for you and costs her rent and wages. And “safe” implies a certainty you do not have. Your job is to lay out the legal effect of each route, not to pick the route least awkward for you.",
                },
              },
            ],
          },
          {
            id: "n4",
            text: {
              ar: "الموظف لم يعطك أكثر من: «الملف قيد الدراسة». الساعة الآن الخامسة والنصف. ماذا تفعل؟",
              en: "The registry clerk gives you nothing beyond “the file is under examination”. It is now half past five. What do you do?",
            },
            choices: [
              {
                id: "c1",
                label: {
                  ar: "ترسل الرسالة كما هي، وتضيف أنك تحقّقت اليوم وأن الملف ما زال قيد الدراسة.",
                  en: "Send the message as planned, adding that you checked today and the file remains under examination.",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "«تحقّقتُ اليوم» تحوّل رسالة «لا جديد» من ملاحظة إلى عمل. الموكّلة الآن لا تعرف أن لا شيء حدث فحسب، بل تعرف أن أحداً ذهب وتأكّد — وهذا هو الفرق بين متابعة ومتابعة مزعومة.",
                  en: "“I checked today” turns a “nothing new” message from an observation into work done. She now knows not only that nothing happened, but that somebody went and confirmed it — the difference between following a file and claiming to.",
                },
              },
              {
                id: "c2",
                label: {
                  ar: "تؤجّل إلى الغد لعلّك تحصل على معلومة أفضل.",
                  en: "Postpone until tomorrow in the hope of better information.",
                },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "هكذا يبدأ التأجيل دائماً: بيوم واحد ولسبب وجيه. غداً سيظهر سبب وجيه آخر، وبعد أسبوعين ستكتب رسالة أوّلها اعتذار. الإيقاع لا يُكسر لتحسين المضمون.",
                  en: "This is always how postponement starts: one day, for a good reason. Tomorrow another good reason appears, and two weeks later you write a message that opens with an apology. You do not break the rhythm to improve the content.",
                },
              },
            ],
          },
          {
            id: "n5",
            text: {
              ar: "بعد ثلاثة أسابيع صدر قرار بقبول الاعتراض جزئياً. تتّصل الموكّلة: «أنت قلت لي إن الأمور تسير جيداً.» ماذا تقول؟",
              en: "Three weeks later the opposition is partly upheld. The client rings: “You told me it was going well.” What do you say?",
            },
            choices: [
              {
                id: "c1",
                label: {
                  ar: "«تلك الجملة كانت خطأي، ولم يكن عندي ما يسندها. دعيني أشرح لكِ ما يعنيه القرار وما هي خياراتك.»",
                  en: "“That sentence was my mistake — I had nothing to support it. Let me explain what the decision means and what your options are.”",
                },
                nextNodeId: null,
                quality: "acceptable",
                rationale: {
                  ar: "أفضل ردّ متاح، ومع ذلك أنت تدفع الآن من رصيد ثقة لم يكن ينبغي إنفاقه أصلاً. الإقرار الصريح يوقف النزيف، لكنه لا يعيد الموكّلة إلى ما قبل الجملة: من الآن ستسمع كل تطميناتك بأذن أخرى.",
                  en: "The best available reply, and you are still spending trust that never needed spending. A plain admission stops the bleeding but does not restore her to the position before the sentence: from now on she hears every reassurance of yours differently.",
                },
              },
              {
                id: "c2",
                label: {
                  ar: "«ما قلته كان توقّعاً عاماً، وأنتِ تعرفين أن هذه الأمور لا يمكن التنبّؤ بها.»",
                  en: "“What I said was a general expectation, and you know these things can’t be predicted.”",
                },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "تنصّل مغلّف بمنطق سليم. أنت الآن تُحمّل الموكّلة مسؤولية تصديق ما كتبتَه أنت. النتيجة ليست خسارة نقاش، بل خسارة موكّلة تعرف تماماً ما قرأته على شاشتها قبل ثلاثة أسابيع.",
                  en: "A disavowal wrapped in sound logic. You are now making the client responsible for having believed what you wrote. The result is not a lost argument but a lost client, who knows exactly what she read on her screen three weeks ago.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.cc.09.3",
        kind: "email_rewrite",
        skillId: "skill.client-follow-up",
        secondarySkillIds: ["skill.expectation-management", "skill.next-steps-closure"],
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.email-quality.v1",
        weight: 3,
        minChars: 320,
        hint: {
          ar: "ابدأ بسؤالين: أين الطلب في هذه الرسالة؟ ومن الذي تأخّر بالضبط؟ ثم اكتب الجواب في السطر الأول لا في الرابع.",
          en: "Start with two questions: where is the ask in this message, and who exactly was late? Then put the answer in the first line, not the fourth.",
        },
        prompt: {
          ar: "أعد كتابة هذه الرسالة في أربعة أقسام قصيرة بسطر موضوع جديد، وبحدّ أقصى 150 كلمة. سمِّ سبب التأخير بصيغة الفاعل، وارفع الطلب إلى قسم مستقلّ بتاريخ، وأعطِ كل التزام مالكاً ويوماً، ولا تتوقّع قراراً لا تملكه.",
          en: "Rewrite this message as four short sections with a new subject line, in no more than 150 words. Name the cause of the delay in the active voice, lift the ask into its own section with a date, give every commitment an owner and a day, and predict no decision you do not control.",
        },
        context: {
          ar: [
            "الموكّلة: نهى الصايغ، سلسلة مخابز، ملف اعتراض على تسجيل علامة «فرن الأصيل».",
            "الوقائع كما هي فعلاً: حافظة أدلّة الاستعمال لم تُعدّ في موعدها لأنك انشغلت عنها ولم تتابع المتدرّب الذي كُلّف بها. طلبتَ تمديد المهلة يوم الثلاثاء 8 أيلول 2026، والبتّ بالطلب عادةً خلال أسبوع تقريباً، وليس بيدك.",
            "ما تحتاجه منها: فواتير التوريد لعامي 2019 و2020، وصور اللافتات القديمة للفروع، بحلول الأحد 13 أيلول 2026.",
            "التزامك: إيداع الحافظة يوم الأربعاء 16 أيلول 2026، ورسالة تحديث الثلاثاء 22 أيلول 2026.",
          ],
          en: [
            "The client: Nuha Al-Sayegh, a bakery chain; a trade mark opposition file for “Furn Al-Aseel”.",
            "The facts as they actually are: the evidence-of-use bundle missed its date because you were pulled elsewhere and did not supervise the trainee assigned to it. You requested an extension on Tuesday 8 September 2026; such requests are usually decided within about a week, and the decision is not yours.",
            "What you need from her: supply invoices for 2019 and 2020, and photographs of the old branch signage, by Sunday 13 September 2026.",
            "Your commitments: file the bundle on Wednesday 16 September 2026, and send an update on Tuesday 22 September 2026.",
          ],
        },
        draft: {
          ar: [
            "الموضوع: تحديث",
            "حضرة السيدة نهى الصايغ المحترمة، تحية طيبة وبعد، نأمل أن تكونوا بخير وأن تكون أعمالكم على ما يرام. نودّ إفادتكم بخصوص ملف الاعتراض المقدّم على طلب التسجيل موضوع البحث، وإحاطتكم علماً بمجريات الملف منذ اجتماعنا الأخير.",
            "بعد استكمال الإجراءات الشكلية، دخل الملف مرحلة الفحص، وقد جرى تبادل ما يلزم على النحو المعتاد في مثل هذه الملفات مع ما يستتبع ذلك من مهل قانونية. وفي هذا السياق، حصل بعض التأخير في إعداد حافظة الأدلّة المتعلّقة بالاستعمال السابق للعلامة نتيجة ظروف تنظيمية، وقد تمّ التقدّم بطلب تمديد للمهلة ونحن بانتظار البتّ به، علماً بأن مثل هذه الطلبات تُقبل عادةً ولا نتوقّع أي إشكال في هذا الخصوص.",
            "ويهمّنا في هذا الإطار أن نشير إلى أنه سيكون من المفيد لو تكرّمتم بموافاتنا بنسخ عن فواتير التوريد للأعوام السابقة وبأي صور متوفّرة للافتات الفروع، إن وُجدت لديكم، وذلك لاستكمال ما يلزم في حينه ولوضع الملف في وضعه النهائي.",
            "ونحن على أتمّ الاستعداد لأي استفسار، وتفضّلوا بقبول فائق الاحترام.",
          ],
          en: [
            "Subject: Update",
            "Dear Ms Al-Sayegh, we hope this message finds you well and that business is going smoothly. We write to update you in relation to the opposition file concerning the application in question, and to keep you apprised of developments since our last meeting.",
            "Following completion of the formal steps, the file has entered the examination stage, and the usual exchanges have taken place as is customary in such files, with the attendant statutory periods. In this context, some delay was experienced in the preparation of the evidence bundle relating to prior use of the mark owing to organisational circumstances, and an extension request has been submitted and is awaited, it being noted that such requests are ordinarily granted and we do not anticipate any difficulty in this regard.",
            "In this framework we should note that it would be helpful if you could kindly furnish us with copies of the supply invoices for the previous years and any available photographs of the branch signage, should these be in your possession, in order to complete what is required in due course and to place the file in its final condition.",
            "We remain at your disposal for any query. Kind regards.",
          ],
        },
        modelAnswer: {
          ar: [
            "الموضوع: علامة «فرن الأصيل» — مطلوب منكِ مستندان قبل الأحد 13 أيلول",
            "سيدة نهى،",
            "أين وصلنا: الاعتراض عند الفاحص. حافظة أدلّة الاستعمال لم أودعها في موعدها لأنني لم أتابع إعدادها كما يجب — هذا تقصير منّي، وقد طلبتُ تمديد المهلة يوم الثلاثاء 8 أيلول. البتّ بالطلب بيد المكتب المختصّ لا بيدي، والمعتاد أن يصدر خلال أسبوع تقريباً.",
            "ما أحتاجه منكِ قبل الأحد 13 أيلول: (١) فواتير التوريد لعامي 2019 و2020؛ (٢) صور اللافتات القديمة للفروع.",
            "ما سأفعله أنا: أودع الحافظة يوم الأربعاء 16 أيلول متى وصلتني المستندات، وأكتب لكِ تحديثاً الثلاثاء 22 أيلول حتى لو لم يتغيّر شيء. وإن رُفض طلب التمديد تعرفين ذلك منّي في اليوم نفسه، مع الخيارات المتاحة.",
          ],
          en: [
            "Subject: Furn Al-Aseel mark — two documents needed from you before Sunday 13 September",
            "Dear Ms Nuha,",
            "Where we are: the opposition is with the examiner. I did not file the evidence-of-use bundle on time because I did not supervise its preparation properly — that failure is mine. I applied for an extension on Tuesday 8 September. That decision belongs to the registry, not to me, and it usually issues within about a week.",
            "What I need from you before Sunday 13 September: (1) the 2019 and 2020 supply invoices; (2) photographs of the old branch signage.",
            "What I will do: file the bundle on Wednesday 16 September once your documents reach me, and write to you on Tuesday 22 September even if nothing has changed. If the extension is refused you will hear it from me the same day, together with the options.",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "الموضوع: تحديث بخصوص ملف العلامة",
              "سيدة نهى، تحية طيبة. الاعتراض ما زال في مرحلة الفحص، وقد حصل تأخير بسيط في إعداد حافظة الأدلّة تمّت معالجته بتقديم طلب تمديد، ونحن واثقون من قبوله.",
              "نرجو تزويدنا بالفواتير وصور اللافتات في أقرب وقت ممكن حتى نتمكّن من إتمام الإيداع، وسنوافيكم بكل جديد أولاً بأول. شاكرين تعاونكم.",
            ],
            en: [
              "Subject: Update on the trade mark file",
              "Dear Ms Nuha, the opposition remains at the examination stage. There was a slight delay in preparing the evidence bundle, which has been addressed by filing an extension request, and we are confident it will be granted.",
              "Please send us the invoices and the signage photographs as soon as possible so that we can complete the filing, and we will keep you updated with anything new. Thank you for your cooperation.",
            ],
          },
          whatIsWrong: {
            ar: "الطول عولج وبقيت الأعطاب الأربعة: «حصل تأخير» ما زالت بلا فاعل — والفاعل أنت؛ و«واثقون من قبوله» وعدٌ بقرار لا تملكه واستُبدل به إقرارٌ كان واجباً؛ و«في أقرب وقت» أعادت الطلب إلى وسط فقرة بلا تاريخ فلا تعرف الموكّلة أن يوم الأحد هو ما يحكم كل شيء؛ و«سنوافيكم بكل جديد» ألغت موعد الرسالة التالية. الاختصار لم يكن هو الدرس؛ التسمية والتأريخ هما الدرس.",
            en: "The length was fixed and all four defects survived: “there was a delay” still has no actor — and the actor is you; “we are confident it will be granted” promises a decision you do not own and stands in place of the admission that was owed; “as soon as possible” put the ask back inside a paragraph with no date, so she never learns that Sunday governs everything; and “we will keep you updated” deleted the date of the next message. Brevity was never the lesson — naming and dating were.",
          },
        },
      },
      {
        id: "act.cc.09.4",
        kind: "short_written",
        skillId: "skill.client-follow-up",
        secondarySkillIds: ["skill.expectation-management"],
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.client-response.v1",
        weight: 2,
        minChars: 180,
        context: {
          ar: [
            "الموكّل: المهندس رامي الحلبي، شركة تجهيزات كهربائية، ينتظر ردّ الطرف الآخر على إنذار أُرسل قبل ثلاثة أسابيع.",
            "هذا الأسبوع: لا شيء. لم يردّ الطرف الآخر، ولا مهلة تنقضي، ولا مطلوب من الموكّل شيء.",
            "المهلة القانونية للردّ تنقضي الاثنين 21 أيلول 2026، وبعدها يصبح رفع الدعوى خياراً مطروحاً.",
          ],
          en: [
            "The client: Rami Halabi, an electrical-equipment supplier, waiting on the other side’s answer to a formal notice sent three weeks ago.",
            "This week: nothing. No reply, no deadline expiring, nothing needed from the client.",
            "The period for their reply ends on Monday 21 September 2026, after which filing becomes an option on the table.",
          ],
        },
        prompt: {
          ar: "اكتب رسالة الثلاثاء (٤٠–٧٠ كلمة) في أسبوع لم يحدث فيه شيء. قل أين وصلنا، وهل هذا ضمن المعتاد، وما المطلوب منه، ومتى رسالتك التالية. لا تعتذر عن غياب الجديد، ولا تتوقّع متى سيردّون.",
          en: "Write the Tuesday message (40–70 words) for a week in which nothing happened. Say where we are, whether that is normal, what is needed from him, and when your next message comes. Do not apologise for the absence of news, and do not predict when they will reply.",
        },
        modelAnswer: {
          ar: [
            "«مساء الخير مهندس رامي. تحديث الثلاثاء:»",
            "«لا جديد هذا الأسبوع: لم يصلنا ردّ على الإنذار. مهلة الردّ تنتهي الاثنين 21 أيلول، والصمت حتى آخر يوم أمر معتاد تماماً في هذه الملفات، فلا أقرأ فيه شيئاً بعد.»",
            "«لا مطلوب منك شيء هذا الأسبوع. سأكتب لك الثلاثاء 22 أيلول برأيي في الخطوة التالية بعد انقضاء المهلة، وإن وصل ردّ قبل ذلك تعرفه في اليوم نفسه.»",
          ],
          en: [
            "“Good evening, Mr Rami. Tuesday update:”",
            "“Nothing new this week: no reply to the notice has reached us. Their period runs to Monday 21 September, and silence until the last day is entirely normal in these files, so I read nothing into it yet.”",
            "“Nothing is needed from you this week. I will write on Tuesday 22 September with my view on the next step once the period has run, and if a reply arrives before then you will know the same day.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«مساء الخير مهندس رامي، أعتذر عن عدم وجود جديد.»",
              "«ما زلنا ننتظر ردّهم، وأتوقّع أن يردّوا هذا الأسبوع أو الأسبوع القادم على الأكثر. صمتهم في رأيي مؤشّر جيّد لنا.»",
              "«سنبقى على تواصل وأي جديد نبلغك به فوراً.»",
            ],
            en: [
              "“Good evening, Mr Rami, apologies that there is nothing new.”",
              "“We are still waiting for their reply, and I expect them to respond this week or next at the latest. Their silence is, in my view, a good sign for us.”",
              "“We will stay in touch and let you know of anything new immediately.”",
            ],
          },
          whatIsWrong: {
            ar: "ثلاثة أعطاب: الاعتذار عن غياب الجديد يوحي بأن ثمّة خطأً؛ و«أتوقّع أن يردّوا» تاريخ لا تملكه سيصير وعداً في ذهن الموكّل خلال ساعة؛ و«صمتهم مؤشّر جيّد» قراءة نفسية بلا سند تُبنى عليها قرارات. والأهمّ أن الرسالة أُقفلت بـ«سنبقى على تواصل» فلا يعرف الموكّل متى يسمع منك، وهو تحديداً سبب المكالمة التي ستأتيك الخميس.",
            en: "Three defects: apologising for the absence of news suggests something is wrong; “I expect them to reply” is a date you do not own and becomes a promise in his head within the hour; and “their silence is a good sign” is speculation dressed as reading, and he will act on it. Above all it closes with “we’ll stay in touch”, so he has no idea when he hears from you — which is precisely why he will ring you on Thursday.",
          },
        },
      },
      {
        id: "act.cc.09.5",
        kind: "reflection",
        skillId: "skill.client-follow-up",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "من بين ملفاتك اليوم: كم موكّلاً لا يعرف متى سيسمع منك مرّة أخرى؟ اكتب العدد، ثم اكتب اسم واحد منهم انتظر أطول من غيره.",
          en: "Of the files on your desk today: how many clients have no idea when they will next hear from you? Write the number, then write the name of the one who has waited longest.",
        },
        followUp: {
          ar: "لماذا هذا الاسم تحديداً هو الأطول انتظاراً؟ في تجربتي، الملف الذي نؤجّل الكتابة فيه هو الملف الذي لا نحبّ التفكير فيه. هل ينطبق هذا هنا؟",
          en: "Why is that name the one who waited longest? In practice, the file we postpone writing about is the file we do not enjoy thinking about. Does that apply here?",
        },
      },
    ],
    summaryCard: {
      id: "card.cc.09",
      title: {
        ar: "إيقاع صفر ملاحقة",
        en: "The Zero-Chase Rhythm",
      },
      whatYouLearned: {
        ar: [
          "الصمت ليس حياداً: الموكّل يقرأه «نُسيتُ»، لا «لا جديد».",
          "«لا جديد» معلومة كاملة إن قالت أين الملف، وهل الانتظار معتاد، وما المطلوب منه.",
          "الإيقاع أهمّ من الطول: أربعون كلمة في موعد ثابت تتفوّق على صفحتين متأخّرتين.",
          "لا اعتذار عن غياب الجديد، ولا تخمين لتاريخ لا تملكه.",
        ],
        en: [
          "Silence is not neutral: the client reads it as “I was forgotten”, not “nothing new”.",
          "“Nothing new” is complete information if it says where the file is, whether the wait is normal, and what is needed from him.",
          "Rhythm beats length: forty words on a fixed day beats two late pages.",
          "No apology for the absence of news, and no guessing at a date you do not own.",
        ],
      },
      framework: {
        name: {
          ar: "إيقاع صفر ملاحقة: اضبط · اكتب · سمِّ · مكِّن · واعِد",
          en: "The Zero-Chase Rhythm: Set · Send · Name · Enable · Diarise",
        },
        steps: [
          {
            ar: "اضبط الإيقاع في اللقاء الأول: «أكتب لك كل ثلاثاء» — لا «سنبقى على تواصل».",
            en: "Set the rhythm at the first meeting: “I write to you every Tuesday” — not “we’ll stay in touch”.",
          },
          {
            ar: "اكتب في موعدك حتى لو لم يحدث شيء. الموعد هو الوعد، لا المضمون.",
            en: "Send on your day even when nothing happened. The day is the promise, not the content.",
          },
          {
            ar: "سمِّ ما لم يحدث ولماذا، ولا تخترع تقدّماً: «عند الفاحص ولم يصدر قرار».",
            en: "Name what did not happen and why; invent no progress: “with the examiner, no decision issued”.",
          },
          {
            ar: "مكِّنه من التصرّف: ما المطلوب منه هذا الأسبوع، ولو كان لا شيء.",
            en: "Enable him to act: what is required of him this week, even if the answer is nothing.",
          },
          {
            ar: "واعِده بتاريخ الرسالة التالية. «لا جديد» بلا موعد تالٍ تُقرأ تهرّباً.",
            en: "Diarise the next message and tell him its date. “Nothing new” with no next date reads as evasion.",
          },
        ],
      },
      rememberThis: {
        ar: "الموكّل لا يقيس محاميه بسرعة النتيجة، بل بعدد المرّات التي اضطرّ فيها أن يسأل: «أين وصلنا؟» والرقم المطلوب صفر.",
        en: "A client does not measure his lawyer by how fast the result comes, but by how many times he had to ask “where are we?”. The target number is zero.",
      },
      useItTomorrow: {
        ar: "اختر يوماً واحداً في الأسبوع واجعله يوم التحديثات لكل ملفاتك. أرسل غداً أربعين كلمة لثلاثة موكّلين لم يسمعوا منك منذ أسبوعين، وضع موعد الرسالة التالية في تقويمك قبل أن تُغلق كل ملف.",
        en: "Pick one day a week and make it your update day for every file. Tomorrow, send forty words to three clients who have not heard from you in a fortnight, and put the next message’s date in your calendar before you close each file.",
      },
    },
    targetLevel: 4,
    sourceIds: [
      "src.client-centered-law-firm",
      "src.legal-project-management",
      "src.they-ask-you-answer",
      "src.modernize-your-law-firm",
      "src.legal-ops-kpis",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 10 — When the client is angry (closes the path; carries the simulation)
  // =========================================================================
  {
    id: "unit.cc.10",
    chapterId: "ch.cc.keeping-trust",
    order: 10,
    title: {
      ar: "حين يغضب الموكّل",
      en: "When the Client Is Angry",
    },
    subtitle: {
      ar: "الكلام الصحيح في الترتيب الخطأ يُسمع دفاعاً.",
      en: "The right words in the wrong order are heard as a defence.",
    },
    primarySkillId: "skill.difficult-client-basics",
    skillIds: [
      "skill.difficult-client-basics",
      "skill.active-listening",
      "skill.client-follow-up",
      "skill.expectation-management",
      "skill.next-steps-closure",
      "skill.avoiding-guarantees",
    ],
    stage: 4,
    estimatedMinutes: 12,
    steps: [
      {
        kind: "hook",
        id: "s.cc.10.hook",
        text: {
          ar: "الموكّل الغاضب لا يقاطعك لأنه لا يريد أن يسمع، بل لأنك بدأت من الجملة الخطأ.",
          en: "An angry client does not interrupt you because he refuses to listen. He interrupts because you started from the wrong sentence.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.cc.10.why",
        text: {
          ar: "في المكالمة الغاضبة، ترتيب الجُمَل ليس أسلوباً بل مضمون. الشرح قبل الإقرار يُسمع تبريراً، والسياق قبل تحمّل المسؤولية يُسمع تهرّباً، والدفاع أولاً يُنهي المكالمة قبل أن تبدأ.",
          en: "In an angry call, the order of your sentences is not style; it is substance. Explanation before acknowledgement is heard as an excuse, context before ownership is heard as evasion, and defence first ends the call before it starts.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.cc.10.goals",
        goals: {
          ar: [
            "أن تُنصت حتى يفرغ الموكّل، وأن تسمّي ما حدث بلغته وأرقامه قبل أي شرح.",
            "أن تتحمّل الخطأ باسم المكتب قبل أن تضع أي سياق، وأن تحذف «لكن» من الاعتذار.",
            "أن تُنهي المكالمة بتاريخين تملكهما وباسم من يمسك الملف، دون أن تشتري الهدوء بضمان.",
          ],
          en: [
            "Let the client finish, and name what happened in his words and his numbers before any explanation.",
            "Own the failure in the firm’s name before adding any context, and delete “but” from the apology.",
            "End the call with two dates you control and the name of whoever holds the file — without buying calm with a guarantee.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.cc.10.lesson",
        title: {
          ar: "ترتيب لا يُقفَز",
          en: "An order you cannot skip",
        },
        body: {
          ar: [
            "كل ما ستقوله في المكالمة الغاضبة قد يكون صحيحاً: الزميلة في إجازة، والملف انتقل، والإنذار جاهز في المسوّدة.",
            "ومع ذلك ستخسر المكالمة إن قلته أولاً. الترتيب هو الرسالة.",
            "الدرجة الأولى: أنصت حتى يفرغ. لا تقاطع لتصحيح رقم؛ «ثلاثة أسابيع» عنده هي المدّة التي عاشها، لا التي في نظامك.",
            "الثانية: سمِّ ما حدث بلغته هو. «ثلاثة أسابيع بلا تواصل منّا، وأربع اتصالات بلا ردّ.» التسمية هي الدليل الوحيد على أنك سمعت.",
            "الثالثة: تحمّلها باسم المكتب ثم اسكت. «هذا تقصير منّا.» نقطة. و«لكن» تمحو كل ما قبلها.",
            "الرابعة — وليس قبلها: الوقائع. ما تمّ وما لم يتمّ بالضبط، بما فيه ما يُحرجك. وإن ظنّ أن الإنذار أُرسل فصحّح فوراً.",
            "الخامسة: تاريخان تملكهما، واسم من يمسك الملف، ورقم يصل إليه مباشرةً.",
            "وقاعدة تحكم هذا كله: لا يُشترى الهدوء بضمان. «سنحصّل لك المبلغ» تشتري دقيقتين وتكلّفك الملف كلّه بعد شهر.",
            "ولا يُقاس غضبه بمقياسك. من دفع رواتب عمّاله من مدّخراته لا يبالغ حين يرفع صوته؛ هو يخبرك بحجم ما على المحكّ.",
          ],
          en: [
            "Everything you are about to say in that call may be true: your colleague is on leave, the file moved, the notice is drafted.",
            "And you will still lose the call if you say it first. The order is the message.",
            "Rung one: listen until he is empty. Do not interrupt to correct a number; “three weeks” is the time he lived, not the time in your system.",
            "Rung two: name what happened in his own words. “Three weeks with no contact from us, and four calls unanswered.” Naming is the only proof that you heard.",
            "Rung three: own it in the firm’s name, then stop. “That is our failure.” Full stop. “But” erases everything before it.",
            "Rung four — and not before: the facts. Exactly what was and was not done, including what embarrasses you. If he believes the notice went out, correct him immediately.",
            "Rung five: two dates you control, the name of whoever holds the file, and a number that reaches you directly.",
            "One rule governs all of it: calm is never bought with a guarantee. “We will recover your money” buys two minutes and costs you the file a month later.",
            "And do not measure his anger by your scale. A man who paid his workers out of savings is not over-reacting when he raises his voice; he is telling you the size of what is at stake.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.cc.10.visual",
        title: {
          ar: "أول جملة تقولها: من الأسوأ إلى الأفضل",
          en: "Your first sentence: worst to best",
        },
        variant: "scale",
        items: [
          {
            label: {
              ar: "«اسمح لي، أنا كنت في جلسات طوال الأسبوع.»",
              en: "“If you’ll let me — I’ve been in hearings all week.”",
            },
            detail: {
              ar: "دفاع صريح. يقول للموكّل إن انتظاره أقلّ أهمية من جدولك، فيرفع صوته لأنه لم يُسمَع.",
              en: "Naked defence. It tells him his wait matters less than your diary, so he raises his voice because he was not heard.",
            },
            tone: "negative",
          },
          {
            label: {
              ar: "«الزميلة ريما في إجازة والملف انتقل إليّ حديثاً.»",
              en: "“My colleague Rima is on leave and the file only just came to me.”",
            },
            detail: {
              ar: "سياق صحيح تماماً في التوقيت الخطأ. صدقه لا ينفعه: كل ما يسبق الإقرار يُسمع عذراً.",
              en: "Perfectly true context at the wrong moment. Its truth does not save it: anything said before the acknowledgement is heard as an excuse.",
            },
            tone: "negative",
          },
          {
            label: {
              ar: "«أعتذر عن أي إزعاج حصل.»",
              en: "“I apologise for any inconvenience caused.”",
            },
            detail: {
              ar: "اعتذار بلا تسمية. «أي إزعاج» تُبقي ما حدث مجهولاً، فتُقرأ صيغةً جاهزة لا اعترافاً.",
              en: "An apology that names nothing. “Any inconvenience” leaves the event unidentified, so it reads as a template rather than an admission.",
            },
            tone: "neutral",
          },
          {
            label: {
              ar: "«معك حق، والله معك كل الحق.»",
              en: "“You’re right. You’re completely right.”",
            },
            detail: {
              ar: "موافقة بلا التزام. تُهدّئ ثانيتين ثم تنكشف: الموافقة التي لا يتبعها فعل تُسمع مجاملة.",
              en: "Agreement with no commitment. It calms for two seconds and then shows: agreement unfollowed by action is heard as flattery.",
            },
            tone: "neutral",
          },
          {
            label: {
              ar: "«ثلاثة أسابيع بلا خبر منّا. هذا تقصير من المكتب، وأنا مسؤول عنه أمامك.»",
              en: "“Three weeks with no word from us. That is the firm’s failure, and I am answerable to you for it.”",
            },
            detail: {
              ar: "تسمية بأرقامه، ثم تحمّل باسم المكتب، ثم صمت. هنا فقط يبدأ الإصغاء من الطرف الآخر.",
              en: "Named in his numbers, owned in the firm’s name, then silence. Only here does listening start on the other end.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.cc.10.worked",
        strong: {
          label: {
            ar: "أول أربعين ثانية: محامٍ يبدأ من الإقرار",
            en: "The first forty seconds: a lawyer who starts from the acknowledgement",
          },
          text: {
            ar: [
              "«أنا سامعك أستاذ خالد. تفضّل، أكمل.» — ثم صمت كامل حتى ينتهي.",
              "«ثلاثة أسابيع بلا تواصل منّا، وأربع اتصالات بلا ردّ. هذا تقصير من المكتب، وأنا مسؤول عنه أمامك.»",
              "«وقبل أي شيء آخر، أصحّح لك معلومة: الإنذار لم يُرسل. هو مسوّدة جاهزة على مكتبي منذ عشرة أيام. أعرف أن هذا أسوأ ممّا كنت تظنّ.»",
            ],
            en: [
              "“I’m listening, Mr Khaled. Go on.” — then complete silence until he finishes.",
              "“Three weeks with no contact from us, and four calls unanswered. That is the firm’s failure, and I am answerable to you for it.”",
              "“And before anything else, let me correct something: the notice has not gone out. It has been a finished draft on my desk for ten days. I know that is worse than you thought.”",
            ],
          },
          why: {
            ar: "الترتيب هو الدرس كلّه: إصغاء، ثم تسمية بالأرقام التي قالها هو، ثم تحمّل باسم المكتب بلا «لكن»، ثم أصعب واقعة قبل أن يكتشفها بنفسه. لم يُذكر سبب واحد حتى الآن — ومع ذلك تهدأ النبرة، لأن الغضب كان موجّهاً إلى الغموض لا إلى الشخص.",
            en: "The order is the entire lesson: listening, then naming in the numbers he used, then ownership in the firm’s name with no “but”, then the hardest fact before he finds it himself. Not one reason has been given yet — and the tone drops anyway, because the anger was aimed at the uncertainty, not at the person.",
          },
        },
        weak: {
          label: {
            ar: "أول أربعين ثانية: محامٍ يبدأ من السبب",
            en: "The first forty seconds: a lawyer who starts from the reason",
          },
          text: {
            ar: [
              "«أستاذ خالد، اسمح لي أوضّح لك الوضع: الزميلة ريما في إجازة أمومة والملف انتقل إليّ قبل عشرة أيام فقط.»",
              "«ووالله من يوم ما استلمته وأنا أشتغل عليه، بس الفترة الماضية كانت ضاغطة جداً علينا في المكتب.»",
              "«على كل حال، الملف قيد المتابعة ولا تقلق، حقّك محفوظ وسنحصّل لك المبلغ.»",
            ],
            en: [
              "“Mr Khaled, let me explain the position: my colleague Rima is on maternity leave and the file only came to me ten days ago.”",
              "“And honestly, since the day I got it I’ve been working on it — it’s just that the last stretch has been very heavy on us at the office.”",
              "“In any event, the file is in hand, don’t worry, your rights are protected and we’ll recover the money for you.”",
            ],
          },
          why: {
            ar: "كل جملة هنا صحيحة أو حسنة النيّة، والمكالمة خُسرت في الثانية الثالثة: بدأ بالسبب فسُمع تبريراً، ثم بضغط المكتب فسُمع «مشاكلنا أهمّ من انتظارك»، ثم أوحى بتقدّم غير موجود («قيد المتابعة») واشترى الهدوء بضمان تحصيل لا يملكه. أربعون ثانية بلا جملة واحدة تقول: ما حدث خطؤنا.",
            en: "Every sentence here is either true or well meant, and the call was lost in the third second: he began with the reason, so it was heard as an excuse; then with the firm’s workload, so it was heard as “our problems outrank your wait”; then implied progress that does not exist (“in hand”) and bought calm with a promise of recovery he does not own. Forty seconds without a single sentence saying: what happened is our fault.",
          },
        },
      },
      { kind: "activity", id: "s.cc.10.a1", activityId: "act.cc.10.1", mode: "quick" },
      { kind: "activity", id: "s.cc.10.a2", activityId: "act.cc.10.2", mode: "guided" },
      { kind: "activity", id: "s.cc.10.a3", activityId: "act.cc.10.3", mode: "guided" },
      { kind: "activity", id: "s.cc.10.a4", activityId: "act.cc.10.4", mode: "independent" },
      { kind: "simulation", id: "s.cc.10.sim", scenarioId: "scn.angry-client-delay" },
      { kind: "activity", id: "s.cc.10.a5", activityId: "act.cc.10.5", mode: "independent" },
      { kind: "summary", id: "s.cc.10.summary", summaryCardId: "card.cc.10" },
      {
        kind: "apply_tomorrow",
        id: "s.cc.10.apply",
        task: {
          ar: "اختر ملفاً واحداً تعرف أن صاحبه ينتظر منذ أكثر من أسبوعين، واتّصل به غداً قبل أن يتّصل هو. ابدأ بالتسمية والتحمّل، وأنهِ بتاريخ واحد تملكه.",
          en: "Pick one file whose client you know has been waiting more than two weeks, and ring him tomorrow before he rings you. Open with the naming and the ownership, and close with one date you control.",
        },
        detail: {
          ar: "اكتب أمامك جملتين فقط قبل أن تضغط الرقم: جملة التسمية («… بلا تواصل منّا») وجملة التحمّل («هذا تقصير منّا»). ولا تسمح لنفسك بقول أي سبب قبل أن تنطق بهما.",
          en: "Write two sentences in front of you before you dial: the naming (“… with no contact from us”) and the ownership (“that is our failure”). And do not let yourself give any reason before you have said both out loud.",
        },
      },
      {
        kind: "next_mission",
        id: "s.cc.10.next",
        teaser: {
          ar: "بهذا يُقفل مسار «أساسيات التواصل مع الموكّل». أمامك الآن مساران: «الإنجليزية القانونية للتواصل مع الموكّل»، حيث تخوض المكالمة الصعبة نفسها بلغة لا تملك فيها ترف المجاملة ولا احتياطي المفردات؛ ومسار «التفاوض والتأثير»، حيث لا يكون الطرف المقابل موكّلك ولا يكفي معه الإقرار — عندها يبدأ عمل مختلف تماماً.",
          en: "That closes Client Communication Foundations. Two paths open from here: Legal English for Client Communication, where you take the same difficult call in a language that gives you neither the luxury of small talk nor a reserve of vocabulary; and Negotiation and Influence, where the person across from you is not your client and acknowledgement alone will not carry you — that is where a wholly different kind of work begins.",
        },
      },
    ],
    activities: [
      {
        id: "act.cc.10.1",
        kind: "find_mistake",
        skillId: "skill.difficult-client-basics",
        secondarySkillIds: ["skill.active-listening"],
        stage: 4,
        weight: 2,
        context: {
          ar: [
            "الموكّل: خالد المطيري، صاحب شركة مقاولات، ينتظر مستحقّاته من شركة تطوير عقاري. اتّصل غاضباً بعد ثلاثة أسابيع من الصمت.",
            "ردّ المحامي، بالترتيب:",
            "«الملف انتقل إليّ قبل عشرة أيام بعد إجازة الزميلة، وهذا سبب انقطاع التواصل.»",
            "«الإنذار لم يُرسل بعد؛ هو مسوّدة جاهزة عندي.»",
            "«وأنا أعتذر عن هذه الأسابيع الثلاثة، وهي تقصير منّا.»",
            "«سأرسله الأربعاء 16 أيلول وأتّصل بك الخميس 17 العاشرة صباحاً، ورقمي المباشر معك من الآن.»",
          ],
          en: [
            "The client: Khaled Al-Mutairi, a contractor waiting on money from a property developer. He called, furious, after three weeks of silence.",
            "The lawyer’s reply, in this order:",
            "“The file came to me ten days ago after my colleague’s leave — that is why contact stopped.”",
            "“The notice has not gone out yet; it is a finished draft with me.”",
            "“And I apologise for these three weeks; they are a failure on our part.”",
            "“I will send it on Wednesday 16 September and call you on Thursday 17 at ten, and you have my direct number from now on.”",
          ],
        },
        prompt: {
          ar: "كل معلومة في هذا الردّ صحيحة، ولا ينقصه اعتذار ولا تواريخ. ومع ذلك سيسمعه خالد تبريراً. أين الخلل؟",
          en: "Every piece of information in this reply is true, and it lacks neither an apology nor dates. Khaled will still hear it as an excuse. Where is the defect?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "لا خلل؛ الردّ مكتمل: فيه اعتذار وإقرار ووقائع وتواريخ يملكها.",
              en: "No defect; the reply is complete: an apology, an admission, the facts, and dates he controls.",
            },
            rationale: {
              ar: "المضمون مكتمل فعلاً، وهذا بالضبط ما يخدع. الموكّل لا يجمع الجُمَل الأربع ثم يقيّمها كنصّ؛ هو يحكم على الجملة الأولى ويسمع الباقي من خلالها. حين تكون الأولى «الملف انتقل إليّ»، يصير الاعتذار الذي بعدها مجرّد تهذيب يتبع العذر.",
              en: "The content really is complete, and that is exactly what deceives you. The client does not gather the four sentences and assess them as a text; he judges the first and hears the rest through it. When the first is “the file came to me”, the apology that follows becomes politeness attached to an excuse.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "الترتيب: بدأ بالسبب قبل الإقرار، فصار الإقرار متأخّراً يبدو استدراكاً.",
              en: "The order: he began with the reason before the acknowledgement, so the late admission looks like an afterthought.",
            },
            correct: true,
            rationale: {
              ar: "هذا هو الدرس كلّه. حين تسبق «انتقل الملف» جملةَ «هذا تقصير منّا»، يسمع الموكّل تبريراً بدأ وانتهى، ويتوقّف عن الإصغاء قبل أن تصل إلى الاعتذار. اقلب الجملتين — بالكلمات نفسها تماماً — فتتغيّر المكالمة: تسمية، ثم تحمّل، ثم السبب باعتباره معلومة لا عذراً.",
              en: "This is the whole lesson. When “the file came to me” precedes “that is our failure”, he hears an excuse that started and finished, and stops listening before your apology arrives. Swap the two sentences — the very same words — and the call changes: naming, then ownership, then the reason as information rather than as a defence.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "الاعتذار ورد مرّة واحدة فقط؛ كان ينبغي تكراره أكثر لتهدئة الغضب.",
              en: "The apology appears only once; it should have been repeated to calm him down.",
            },
            rationale: {
              ar: "العكس تماماً. الاعتذار المكرّر يحلّ محلّ الفعل ويوحي بالعجز، ويدفع الموكّل إلى تهدئتك أنت. مرّة واحدة صريحة ومسمّاة، ثم تواريخ. الغاضب يقيس ما ستفعله، لا كم مرّة قلت آسف.",
              en: "The opposite. A repeated apology substitutes itself for action, signals helplessness, and ends up making the client comfort you. Once, plainly, naming the thing — then dates. An angry man measures what you will do, not how many times you said sorry.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "ذكر أن الإنذار لم يُرسل؛ كان الأفضل تجنّب هذه المعلومة في مكالمة متوتّرة.",
              en: "He said the notice had not gone out; better to avoid that in a heated call.",
            },
            rationale: {
              ar: "بل هذه أفضل جملة في الردّ كلّه. إخفاء أن الإنذار لم يُرسل يشتري هدوء اليوم بأزمة ثقة لا تُصلَح، وستكتشف بعد أسبوع أن الموكّل بنى قراراً — أو تسوية — على معلومة أعطيتها له وأنت تعرف أنها غير دقيقة.",
              en: "It is the single best sentence in the reply. Concealing that the notice never went out buys today’s calm with a breach of trust you cannot repair, and a week later you find he built a decision — or a settlement — on information you gave him knowing it was not accurate.",
            },
          },
          {
            id: "o5",
            label: {
              ar: "التاريخان اللذان أعطاهما التزام لا يستطيع الوفاء به أمام موكّل بهذا الغضب.",
              en: "The two dates are a commitment he cannot keep in front of a client this angry.",
            },
            rationale: {
              ar: "بل هما بالضبط النوع الصحيح من الالتزام: إرسال كتاب ومكالمة هاتفية — كلاهما ينتجه هو بيده. الالتزام الخطر هو الآخر: «سيردّون خلال أسبوعين» أو «سنحصّل المبلغ». التزم بما تملكه، ولا تخف من التاريخ لأنك تخاف من الغضب.",
              en: "They are precisely the right kind of commitment: sending a letter and making a call — both produced by his own hand. The dangerous commitment is the other sort: “they will reply within two weeks”, or “we will recover the money”. Commit to what you own, and do not avoid a date because you are afraid of the anger.",
            },
          },
        ],
      },
      {
        id: "act.cc.10.2",
        kind: "ordering",
        skillId: "skill.difficult-client-basics",
        secondarySkillIds: ["skill.active-listening", "skill.next-steps-closure"],
        stage: 4,
        weight: 3,
        prompt: {
          ar: "هذه خمس جُمَل كلها صحيحة، وقالها محامٍ واحد في مكالمة واحدة. رتّبها بالترتيب الذي يجعل الموكّل الغاضب قادراً على سماعها.",
          en: "These five sentences are all true, and one lawyer said them all in one call. Put them in the order that lets an angry client actually hear them.",
        },
        hint: {
          ar: "لا تسأل: أيّ جملة أصحّ؟ اسأل: أيّ جملة يستطيع أن يسمعها الآن، وهو في هذه الحال؟",
          en: "Do not ask which sentence is truest. Ask which sentence he is capable of hearing right now, in the state he is in.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٥) من قائمة منسدلة بجانب كل جملة بدل السحب.",
          en: "Pick the position number (1 to 5) from a dropdown beside each sentence instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "«أنا سامعك. أكمل، لن أقاطعك.» — ثم صمت حتى ينتهي.",
              en: "“I’m listening. Go on, I won’t interrupt.” — then silence until he finishes.",
            },
            rationale: {
              ar: "المقاطعة، ولو لتصحيح رقم، تُثبت أن ما يقوله ليس هو الأهمّ عندك. ومن لم يفرغ لا يسمع: كل جملة تقولها قبل أن ينتهي تُضاف إلى قائمة ما عليه أن يردّ عليه.",
              en: "Interrupting, even to correct a number, proves that what he is saying is not the priority. And a man who has not emptied does not hear: every sentence you insert before he finishes is added to the list of things he must answer.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "«ثلاثة أسابيع بلا تواصل منّا، وأربع اتصالات بلا ردّ.»",
              en: "“Three weeks with no contact from us, and four calls unanswered.”",
            },
            rationale: {
              ar: "التسمية بأرقامه هو دليل الإصغاء الوحيد المقبول. العموميات من نوع «أعتذر عن أي إزعاج» تُثبت العكس: أنك لم تسجّل ما قاله، وأنك ترد بصيغة جاهزة.",
              en: "Naming it in his numbers is the only acceptable proof of listening. Generalities such as “sorry for any inconvenience” prove the opposite: that you did not record what he said and are answering from a template.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "«هذا تقصير من المكتب، وأنا مسؤول عنه أمامك.»",
              en: "“That is the firm’s failure, and I am answerable to you for it.”",
            },
            rationale: {
              ar: "التحمّل يسبق السياق دائماً، والنقطة بعده هي نصف الجملة. «هذا تقصير منّا، لكن…» تُلغي نفسها بنفسها؛ افصل بينهما بجملة كاملة على الأقل، وبصمت إن استطعت.",
              en: "Ownership always precedes context, and the full stop after it is half the sentence. “That is our failure, but…” cancels itself; put at least one whole sentence between the two, and a silence if you can.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "«الإنذار لم يُرسل بعد؛ هو مسوّدة عندي منذ عشرة أيام، وسبب التأخّر انتقال الملف بين محاميين داخل المكتب.»",
              en: "“The notice has not gone out; it has been a draft with me for ten days, and the delay is because the file moved between lawyers inside the firm.”",
            },
            rationale: {
              ar: "هنا فقط يصبح السبب معلومة لا عذراً — لأنه جاء بعد تحمّل المسؤولية. ولاحظ أن أصعب واقعة قيلت قبل أن يكتشفها بنفسه: من يسمع الخبر السيّئ من محاميه يبقى، ومن يكتشفه بعد أسبوعين يرحل.",
              en: "Only here does the reason become information rather than an excuse — because it comes after the ownership. And note that the hardest fact is volunteered before he finds it: a client who hears bad news from his lawyer stays; one who discovers it a fortnight later leaves.",
            },
          },
          {
            id: "i5",
            label: {
              ar: "«أرسله الأربعاء 16 أيلول، وأتّصل بك الخميس 17 العاشرة صباحاً، ورقمي المباشر معك.»",
              en: "“I send it on Wednesday 16 September, I call you on Thursday 17 at ten, and you have my direct number.”",
            },
            rationale: {
              ar: "الغضب ينتهي عند تاريخ يملكه المحامي واسمٍ يمسك الملف. لا تاريخ لردّ الخصم، ولا وعد بمبلغ. وغياب اسم واضح يمسك الملف هو ما صنع هذه الأزمة من البداية.",
              en: "Anger ends at a date the lawyer owns and a name that holds the file. No date for the opponent’s reply, no promise of a sum. The absence of a clear name holding the file is what created this crisis in the first place.",
            },
          },
        ],
      },
      {
        id: "act.cc.10.3",
        kind: "branching_decision",
        skillId: "skill.difficult-client-basics",
        secondarySkillIds: ["skill.avoiding-guarantees", "skill.active-listening"],
        stage: 4,
        weight: 3,
        startNodeId: "n1",
        hint: {
          ar: "الغضب هدأ؛ الخطر الآن ليس النبرة بل ما لم يُقَل بعد. من لا يسأل لا يعرف.",
          en: "The anger has dropped; the risk now is not the tone but what has not yet been said. A lawyer who does not ask does not know.",
        },
        accessibleAlternative: {
          ar: "تُعرض الخيارات كقائمة أزرار نصّية مع إمكانية الرجوع خطوة واحدة لقراءة نتيجة كل مسار.",
          en: "Options appear as text buttons, with one step back available to read the outcome of each route.",
        },
        prompt: {
          ar: "أقررتَ واعتذرتَ، وهدأت نبرة خالد. تابع المكالمة من هنا.",
          en: "You have acknowledged and apologised, and Khaled’s tone has settled. Carry the call on from here.",
        },
        nodes: [
          {
            id: "n1",
            text: {
              ar: "يقول خالد بنبرة أهدأ: «طيب. بصراحة أنا عندي خيارات ثانية، ومو ناقصني وجع راس.» ماذا تفعل؟",
              en: "Khaled says, more quietly: “Fine. Honestly, I have other options, and I don’t need the headache.” What do you do?",
            },
            choices: [
              {
                id: "c1",
                label: {
                  ar: "«أفهم ذلك تماماً. قبل أن تقرّر، اسمح لي بسؤال واحد: هل تواصل معك أحد من الطرف الآخر مباشرةً؟»",
                  en: "“I understand that. Before you decide, let me ask you one thing: has anyone from the other side approached you directly?”",
                },
                nextNodeId: "n2",
                quality: "strong",
                rationale: {
                  ar: "«عندي خيارات ثانية» جملة تُقال غالباً بعد أن يكون قد حدث شيء. من يدافع عن بقاء الملف عنده يفوّت هذا؛ ومن يسأل يكتشف ما يهدّد المطالبة فعلاً.",
                  en: "“I have other options” is usually said after something has happened. A lawyer who defends keeping the file misses it; a lawyer who asks discovers what is actually threatening the claim.",
                },
              },
              {
                id: "c2",
                label: {
                  ar: "«هذا حقّك طبعاً، وأنا أحترم أي قرار تتّخذه.»",
                  en: "“That’s your right, of course, and I respect any decision you take.”",
                },
                nextNodeId: "n4",
                quality: "acceptable",
                rationale: {
                  ar: "محترمة وغير دفاعية، وهذا جيّد. لكنها تقفل الباب بدل أن تفتحه: الانسحاب المهذّب ليس إصغاءً، والسؤال الذي كان يجب طرحه بقي بلا طرح.",
                  en: "Respectful and undefensive, which is good. But it closes the door instead of opening it: a polite withdrawal is not listening, and the question that needed asking went unasked.",
                },
              },
              {
                id: "c3",
                label: {
                  ar: "«أستاذ خالد، نقل الملف الآن سيؤخّرك شهرين على الأقل وستدفع أتعاباً من جديد.»",
                  en: "“Mr Khaled, moving the file now will cost you two months at least, and you’ll pay fees all over again.”",
                },
                nextNodeId: "n3",
                quality: "weak",
                rationale: {
                  ar: "بدأت تدافع عن بقاء الملف عندك لا عن مصلحته. والمعلومة قد تكون صحيحة، لكن توقيتها يحوّلها إلى تحذير، والتحذير في هذه اللحظة يُسمع تهديداً ممّن تسبّب بالمشكلة أصلاً.",
                  en: "You have started defending the file staying with you rather than his interests. The information may be accurate, but its timing turns it into a warning, and a warning at this moment sounds like a threat from the person who caused the problem.",
                },
              },
              {
                id: "c4",
                label: {
                  ar: "«لا تقلق، سنحصّل لك المبلغ كاملاً، أعطني أسبوعين فقط.»",
                  en: "“Don’t worry, we’ll recover the full amount for you — just give me two weeks.”",
                },
                nextNodeId: "n5",
                quality: "critical_mistake",
                rationale: {
                  ar: "اشتريتَ دقيقتين بضمانٍ لا تملكه ومهلةٍ لا تسيطر عليها. الموكّل الذي كاد يغادر سيبقى الآن لسبب واحد: وعدٌ ستُحاسَب عليه حرفياً بعد أسبوعين.",
                  en: "You bought two minutes with a guarantee you do not own and a deadline you do not control. The client who was about to leave now stays for one reason: a promise you will be held to word for word in two weeks.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "«إي… اتصل فيني مديرهم المالي قبل أربعة أيام وعرض ستين بالمئة، بس قال بدون محامين.» ماذا تقول؟",
              en: "“Yes… their finance manager called me four days ago and offered sixty per cent — but he said no lawyers.” What do you say?",
            },
            choices: [
              {
                id: "c1",
                label: {
                  ar: "«شكراً لأنك قلت لي. تعال نمرّ على ما يعنيه هذا العرض عليك عملياً بالأرقام، ثم تقرّر أنت.»",
                  en: "“Thank you for telling me. Let’s go through what that offer actually means for you, in numbers — then you decide.”",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "المعلومة الآن داخل الملف بدل أن تبقى خارجه، والقرار بقي عنده. والشكر ليس مجاملة: هو ما يضمن أن يخبرك في المرّة القادمة أيضاً.",
                  en: "The information is now inside the file instead of outside it, and the decision stays with him. The thank-you is not a courtesy: it is what makes sure he tells you next time too.",
                },
              },
              {
                id: "c2",
                label: {
                  ar: "«هذا تصرّف غير مقبول منهم، وما كان يجب أن تتكلّم معهم دون علمنا.»",
                  en: "“That’s not acceptable behaviour from them, and you shouldn’t have spoken to them without telling us.”",
                },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "حوّلتَ اعترافاً إلى تأنيب. الموكّل لم يخالف شيئاً، وقد أفصح لك رغم إحراجه. النتيجة أنه لن يفصح مرّة أخرى، وأخطر المعلومات في هذا الملف هي التي تصلك متأخّرة.",
                  en: "You turned a disclosure into a reprimand. He broke no rule, and he told you despite his embarrassment. The result is that he will not tell you again, and the dangerous information in this file is the kind that reaches you late.",
                },
              },
            ],
          },
          {
            id: "n3",
            text: {
              ar: "يصمت خالد ثم يقول: «يعني تخوّفني؟» ماذا تقول؟",
              en: "Khaled goes quiet, then says: “So you’re trying to scare me?” What do you say?",
            },
            choices: [
              {
                id: "c1",
                label: {
                  ar: "«لا، وأنا آسف إن سمعتها كذلك. القرار قرارك. الذي يعنيني أن تأخذه بمعلومات كاملة، وعندي سؤال قد يغيّر الصورة.»",
                  en: "“No — and I’m sorry it came out that way. The decision is yours. What matters to me is that you take it with full information, and I have one question that may change the picture.”",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "تصحيح فوري بلا جدال حول النيّة، ثم إعادة القرار إليه، ثم فتح الباب للسؤال الذي فاتك. الاعتراف بأثر كلامك — لا بقصدك — هو ما ينزع فتيل هذه اللحظة.",
                  en: "An immediate correction with no argument about intent, the decision handed back, then the door reopened for the question you missed. Owning the effect of your words — not your intention — is what defuses this moment.",
                },
              },
              {
                id: "c2",
                label: {
                  ar: "«أنا فقط أقول لك الواقع، وأنت حرّ.»",
                  en: "“I’m just telling you the reality. You’re free to do as you like.”",
                },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "دفاع عن النيّة بدل معالجة الأثر، و«أنت حرّ» تُقال هنا بنبرة انسحاب لا احترام. المكالمة تنتهي باردة، والسؤال عن الاتصال المباشر لن يُطرح أبداً.",
                  en: "A defence of your intention instead of a repair of its effect, and “you’re free” lands here as withdrawal rather than respect. The call ends cold, and the question about direct contact never gets asked.",
                },
              },
            ],
          },
          {
            id: "n4",
            text: {
              ar: "«خلص، بفكّر فيها.» تشعر أن المكالمة تنزلق نحو نهاية باردة. ماذا تفعل؟",
              en: "“Fine. I’ll think about it.” You can feel the call sliding towards a cold ending. What do you do?",
            },
            choices: [
              {
                id: "c1",
                label: {
                  ar: "«قبل أن نقفل: هل حدث شيء هذا الأسبوع جعل الأمر ملحّاً اليوم بالذات؟»",
                  en: "“Before we hang up: has something happened this week that made today in particular urgent?”",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "سؤال «لماذا اليوم؟» هو ما يُخرج ما لم يُقَل: موعد مع شريك، أو قرار تسريح، أو عرض من الطرف الآخر. الغضب توقيتُه دليل، ومن يقرأ التوقيت يعرف ما لا يُقال.",
                  en: "“Why today?” is what surfaces the unsaid: a partner meeting, a decision to lay men off, an offer from the other side. Anger has a timing, and reading the timing tells you what is not being said.",
                },
              },
              {
                id: "c2",
                label: {
                  ar: "«تمام، أنا بانتظار قرارك.»",
                  en: "“All right, I’ll wait to hear your decision.”",
                },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "أنهيتَ المكالمة بتسليم المبادرة لمن اتّصل بك غاضباً لأنك لم تبادر أصلاً. الصمت الذي سيلي هذه المكالمة سيُقرأ تأكيداً لكل ما ظنّه.",
                  en: "You ended the call by handing the initiative to a man who rang you angry precisely because you never took it. The silence that follows this call will read as confirmation of everything he suspected.",
                },
              },
            ],
          },
          {
            id: "n5",
            text: {
              ar: "«يعني تضمن لي المبلغ؟» — وتسمع في صوته أنه يسجّل ما قلته كوعد. ماذا تقول؟",
              en: "“So you’re guaranteeing me the money?” — and you can hear him filing your words away as a promise. What do you say?",
            },
            choices: [
              {
                id: "c1",
                label: {
                  ar: "«لا، وأنا أخطأت في صياغتها قبل قليل. لا أستطيع ضمان مبلغ ولا موعد سداد. ما أضمنه هو ما أفعله أنا ومتى.»",
                  en: "“No — and I put that badly a moment ago. I can’t guarantee a sum or a payment date. What I can guarantee is what I do, and when.”",
                },
                nextNodeId: null,
                quality: "acceptable",
                rationale: {
                  ar: "أفضل تصحيح متاح، وثمنه محرج لكنه أرخص من ثمن الصمت. سحب الضمان بعد دقيقتين مؤلم؛ سحبه بعد شهرين حين لا يصل المبلغ يعني ملفاً منقولاً وشكوى.",
                  en: "The best available correction, embarrassing but far cheaper than silence. Withdrawing the guarantee two minutes later stings; withdrawing it two months later, when the money has not come, means a file moved and a complaint filed.",
                },
              },
              {
                id: "c2",
                label: {
                  ar: "«أنا واثق من الملف، وحقّك محفوظ إن شاء الله.»",
                  en: "“I’m confident in the file, and your rights are protected, God willing.”",
                },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "ضمان ثانٍ يثبّت الأول. من الآن سيقيس الموكّل كل تطوّر بهذه الجملة، وأي نتيجة أقلّ ستُقرأ إخلافاً لوعد لا سوء حظّ. أنت لم تهدّئ موكّلاً، بل صنعت سقفاً لا تستطيع بلوغه.",
                  en: "A second guarantee that cements the first. From now on he measures every development against that sentence, and any lesser result reads as a broken promise rather than bad luck. You did not calm a client; you built a ceiling you cannot reach.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.cc.10.4",
        kind: "short_written",
        skillId: "skill.difficult-client-basics",
        secondarySkillIds: ["skill.client-follow-up", "skill.next-steps-closure"],
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.difficult-conversation.v1",
        weight: 3,
        minChars: 300,
        context: {
          ar: [
            "انتهت المكالمة قبل ساعة. خالد المطيري هدأ، ووافق على أن تكتب له.",
            "ما هو صحيح: الإنذار مسوّدة لم تُرسل؛ سبب الصمت انتقال الملف داخل المكتب بعد إجازة الزميلة؛ أنت من يمسك الملف الآن؛ الطرف الآخر عرض عليه ستين بالمئة مباشرةً؛ أمامه اجتماع مع شريكه بعد خمسة أيام.",
            "ما تملكه من تواريخ: إرسال الإنذار الأربعاء 16 أيلول 2026، ومكالمة الخميس 17 أيلول العاشرة صباحاً، ومذكّرة بأثر عرض الستين بالمئة تصله الاثنين 21 أيلول.",
            "ما لا تملكه: ردّ الشركة، ومبلغ التحصيل، وموعد السداد.",
          ],
          en: [
            "The call ended an hour ago. Khaled Al-Mutairi has calmed down and agreed that you would write.",
            "What is true: the notice is an unsent draft; the silence came from the file moving inside the firm after a colleague’s leave; you hold the file now; the other side offered him sixty per cent directly; he meets his business partner in five days.",
            "Dates you own: the notice goes out on Wednesday 16 September 2026; a call on Thursday 17 September at 10 a.m.; a note on what the sixty-per-cent offer would mean, reaching him on Monday 21 September.",
            "What you do not own: the company’s reply, the amount recovered, and any payment date.",
          ],
        },
        prompt: {
          ar: "اكتب الرسالة التي ترسلها إليه بعد ساعة من المكالمة (٨٠–١٢٠ كلمة). أقرّ مرّة واحدة وبلا «لكن»، اسرد ما تمّ وما لم يتمّ، والتزم بتاريخين تملكهما، وسمِّ من يمسك الملف وكيف يصل إليه. لا تضمن مبلغاً ولا موعد سداد، ولا تكرّر الاعتذار بدل الفعل.",
          en: "Write the message you send him an hour after the call (80–120 words). Acknowledge once, with no “but”; state what was and was not done; commit to two dates you control; and name who holds the file and how to reach them. Guarantee no sum and no payment date, and do not repeat the apology in place of action.",
        },
        modelAnswer: {
          ar: [
            "«أستاذ خالد، تأكيداً لمكالمتنا.»",
            "«ثلاثة أسابيع بلا تواصل منّا وأربع اتصالات بلا ردّ: هذا تقصير من المكتب وأنا مسؤول عنه.»",
            "«الوضع بدقّة: الإنذار مُعدّ ولم يُرسل حتى اليوم. الملف انتقل إليّ داخل المكتب ولم نُعلمك، وهذا سبب الانقطاع.»",
            "«ما ألتزم به: أُرسل الإنذار الأربعاء 16 أيلول وتصلك نسخة في اليوم نفسه؛ وأتّصل بك الخميس 17 العاشرة صباحاً؛ وتصلك الاثنين 21 أيلول مذكّرة من صفحة واحدة بما يعنيه عرض الستين بالمئة عملياً، قبل اجتماعك مع شريكك.»",
            "«لا أستطيع أن أعدك بمبلغ ولا بموعد سداد؛ هذا ليس بيدي. أنا من يمسك الملف الآن، ورقمي المباشر في أسفل الرسالة.»",
          ],
          en: [
            "“Mr Khaled, to confirm our call.”",
            "“Three weeks with no contact from us and four calls unanswered: that is the firm’s failure and I am answerable for it.”",
            "“The position precisely: the notice is prepared and has not gone out. The file moved to me inside the firm and we did not tell you — that is why contact stopped.”",
            "“What I commit to: I send the notice on Wednesday 16 September and a copy reaches you the same day; I call you on Thursday 17 at 10 a.m.; and on Monday 21 September you receive a one-page note on what the sixty-per-cent offer would mean in practice, before your meeting with your partner.”",
            "“I cannot promise you an amount or a payment date; neither is mine to give. I am the one holding the file now, and my direct number is at the foot of this message.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«أستاذ خالد، أعتذر مجدّداً وبشدّة عمّا حصل، وأتفهّم انزعاجك تماماً.»",
              "«كما أوضحت لك، الزميلة كانت في إجازة والضغط كان كبيراً علينا، لكن الملف الآن أولوية قصوى عندي شخصياً.»",
              "«سنرسل الإنذار في أقرب وقت ممكن ونتابع معهم بشكل حثيث، وأعدك أنك لن تسمع منّا صمتاً بعد اليوم. أنا واثق أننا سنصل إلى نتيجة ترضيك.»",
              "«ومرّة أخرى، أعتذر عن كل ما سبّبناه لك.»",
            ],
            en: [
              "“Mr Khaled, again, my sincere apologies for what happened, and I completely understand your frustration.”",
              "“As I explained, my colleague was on leave and the pressure on us was considerable, but the file is now my personal top priority.”",
              "“We will send the notice as soon as possible and chase them vigorously, and I promise you will never hear silence from us again. I’m confident we will reach a result that satisfies you.”",
              "“Once more, my apologies for everything we have caused you.”",
            ],
          },
          whatIsWrong: {
            ar: "الرسالة تعتذر ثلاث مرّات ولا تلتزم بشيء. «لكن الملف الآن أولوية» أعادت العذر بعد الاعتذار فألغته، ولم يُقَل صراحةً أن الإنذار لم يُرسل بعد، و«في أقرب وقت» ليست تاريخاً. أمّا «نتيجة ترضيك» فضمانٌ مغلّف، و«لن تسمع صمتاً بعد اليوم» وعدٌ بلا إيقاع محدّد فلا يمكن الوفاء به ولا قياسه. خالد سيقرأها ويسأل نفسه: متى بالضبط؟ ومن؟",
            en: "The message apologises three times and commits to nothing. “But the file is now a priority” reinstates the excuse after the apology and cancels it; it never says plainly that the notice has not gone out; and “as soon as possible” is not a date. “A result that satisfies you” is a guarantee in disguise, and “you will never hear silence again” is a promise with no rhythm attached, so it can be neither kept nor measured. Khaled reads it and asks himself: when exactly, and who?",
          },
        },
      },
      {
        id: "act.cc.10.5",
        kind: "reflection",
        skillId: "skill.difficult-client-basics",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "تذكّر آخر مرّة قاطعك فيها موكّل غاضب. ما الجملة التي كنت في منتصفها حين قاطعك؟ وهل كانت شرحاً أم إقراراً؟",
          en: "Recall the last time an angry client cut you off. Which sentence were you halfway through when he did? Was it an explanation or an acknowledgement?",
        },
        followUp: {
          ar: "اكتب الآن الجملة التي كان يجب أن تسبقها — بكلماته هو وأرقامه، لا بكلماتك.",
          en: "Now write the sentence that should have come before it — in his words and his numbers, not yours.",
        },
      },
    ],
    summaryCard: {
      id: "card.cc.10",
      title: {
        ar: "سُلّم الإقرار",
        en: "The Ownership Ladder",
      },
      whatYouLearned: {
        ar: [
          "الترتيب مضمون لا أسلوب: الشرح قبل الإقرار يُسمع تبريراً مهما كان صحيحاً.",
          "«لكن» تمحو كل ما قبلها؛ افصل الاعتذار عن السياق بجملة كاملة على الأقل.",
          "أصعب واقعة تُقال قبل أن يكتشفها الموكّل، لا بعد.",
          "لا يُشترى الهدوء بضمان: التزم بما تنتجه يدك وبتاريخ تملكه.",
        ],
        en: [
          "Order is substance, not style: explanation before acknowledgement is heard as an excuse, however true it is.",
          "“But” erases everything before it; put at least one full sentence between the apology and the context.",
          "The hardest fact is volunteered before the client discovers it, not after.",
          "Calm is never bought with a guarantee: commit to what your own hand produces, on a date you own.",
        ],
      },
      framework: {
        name: {
          ar: "سُلّم الإقرار: أنصت · سمِّ · تحمّل · اسرد · اقفل",
          en: "The Ownership Ladder: Listen · Name · Own · Recount · Close",
        },
        steps: [
          {
            ar: "أنصت حتى يفرغ — لا مقاطعة ولو لتصحيح رقم.",
            en: "Listen until he is empty — no interruption, not even to correct a number.",
          },
          {
            ar: "سمِّ ما حدث بلغته وأرقامه: «ثلاثة أسابيع بلا تواصل منّا».",
            en: "Name what happened in his words and his numbers: “three weeks with no contact from us”.",
          },
          {
            ar: "تحمّلها باسم المكتب ثم اسكت: «هذا تقصير منّا.» نقطة، بلا «لكن».",
            en: "Own it in the firm’s name, then stop: “that is our failure.” Full stop, no “but”.",
          },
          {
            ar: "اسرد الوقائع الآن — لا قبل ذلك: ما تمّ وما لم يتمّ، بما يُحرجك.",
            en: "Recount the facts now — not before: what was and was not done, including what embarrasses you.",
          },
          {
            ar: "اقفل بتاريخين تملكهما، واسم من يمسك الملف، ورقم يصل إليه.",
            en: "Close with two dates you own, the name of whoever holds the file, and a number that reaches you.",
          },
        ],
      },
      rememberThis: {
        ar: "في المكالمة الغاضبة، الجملة الصحيحة في المرتبة الخطأ تصبح جملة خاطئة. رتّب قبل أن تتكلّم.",
        en: "In an angry call, a true sentence in the wrong position becomes a false one. Order it before you say it.",
      },
      useItTomorrow: {
        ar: "قبل أي مكالمة صعبة غداً، اكتب على ورقة جملتين فقط: جملة التسمية («… بلا تواصل منّا») وجملة التحمّل («هذا تقصير منّا»)، ولا تسمح لنفسك بذكر أي سبب قبل أن تنطق بهما بصوتك.",
        en: "Before any difficult call tomorrow, write just two sentences on paper: the naming (“… with no contact from us”) and the ownership (“that is our failure”), and do not let yourself give any reason before you have said both out loud.",
      },
    },
    targetLevel: 4,
    sourceIds: [
      "src.fire-proof",
      "src.client-centered-law-firm",
      "src.your-brain-at-work",
      "src.legal-project-management",
      "src.68-power-moves",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
