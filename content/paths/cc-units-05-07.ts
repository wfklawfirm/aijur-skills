import type { UnitDef } from "../types";

/**
 * Client Communication Foundations — Chapter 2 (`ch.cc.understanding`) unit 5
 * and Chapter 3 (`ch.cc.setting-expectations`) units 6–7.
 *
 * Scenarios (`scn.fee-pushback`, `scn.guarantee-request`) and rubrics
 * (`rubric.client-response.v1`) are authored elsewhere in the bundle.
 */
export const CC_UNITS_05_07: UnitDef[] = [
  // =========================================================================
  // UNIT 05 — Explaining a complex matter in plain language
  // =========================================================================
  {
    id: "unit.cc.05",
    chapterId: "ch.cc.understanding",
    order: 5,
    title: {
      ar: "أن تشرح ملفًا معقّدًا بلغة يستعملها الموكّل",
      en: "Explaining a Complex Matter in Language the Client Can Use",
    },
    subtitle: {
      ar: "التبسيط الذي يغيّر المعنى ليس شرحًا؛ إنه خطأ مهني يخرج به الموكّل من مكتبك",
      en: "Simplification that changes the meaning is not an explanation; it is a professional error the client walks out with.",
    },
    primarySkillId: "skill.plain-explanation",
    skillIds: [
      "skill.plain-explanation",
      "skill.expectation-management",
      "skill.client-follow-up",
      "skill.avoiding-guarantees",
    ],
    stage: 3,
    estimatedMinutes: 10,
    steps: [
      {
        kind: "hook",
        id: "s.cc.05.hook",
        text: {
          ar: "المصطلح الذي لا يفهمه الموكّل لا يبقى صامتًا في رأسه. يترجمه هو بنفسه — وغالبًا إلى شيء أسوأ ممّا قصدت.",
          en: "A term the client does not understand does not sit quietly in his head. He translates it himself — usually into something worse than you meant.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.cc.05.why",
        text: {
          ar: "الموكّل الذي لم يفهم لا يعترض؛ يهزّ رأسه ثم يتصرّف على أساس فهمه الخاطئ. يوقّع، أو يدفع، أو يخسر مهلة — ثم يعود غاضبًا وهو محقّ.",
          en: "A client who did not understand does not object. He nods, then acts on his own wrong reading: he signs, or pays, or misses a deadline — and comes back angry, with reason.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.cc.05.goals",
        goals: {
          ar: [
            "أن تبدأ الشرح بالأثر العملي على الموكّل، لا بالإجراء ولا بالتكييف القانوني.",
            "أن تستبدل كل مصطلح بفعل ملموس: مَن يفعل ماذا، لمن، ومتى.",
            "أن تختبر تبسيطك قبل أن تنطق به: هل بقي صحيحًا بعد أن صار سهلًا؟",
            "أن تتأكّد من وصول المعنى بطلب إعادة الصياغة من الموكّل نفسه.",
          ],
          en: [
            "Open an explanation with its practical effect on the client, not with procedure or legal characterisation.",
            "Replace every term with a concrete action: who does what, to whom, and when.",
            "Test your simplification before you say it: is it still true now that it is easy?",
            "Confirm the meaning landed by asking the client to say it back.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.cc.05.lesson",
        title: {
          ar: "خطران لا خطر واحد",
          en: "Two dangers, not one",
        },
        body: {
          ar: [
            "يظنّ أكثر المحامين أن خطر الشرح واحد: أن تُعقّد فلا يَفهم. الخطر الثاني أشدّ: أن تُبسّط فيَفهم شيئًا غير صحيح.",
            "«حجزنا على حسابه» جملة سهلة. لكن الموكّل يسمع منها أن المال صار له، فيلتزم بدفعة مورّد على أساسها.",
            "المصطلح ليس عدوًّا في ذاته. المشكلة أن تتركه عاريًا، أو أن تستبدله بكلمة أخفّ غيّرت المضمون.",
            "الطريق بينهما: ابدأ بالأثر («لا تستطيع تحريك هذا المبلغ حتى إشعار آخر»)، ثم سمِّ المصطلح مرّة واحدة، ثم اشرحه بفعل ملموس.",
            "سمِّ المصطلح مرّة واحدة عمدًا: الموكّل سيسمعه من المصرف ومن المحكمة ومن خصمه، ومن حقّه أن يعرف الكلمة التي تُقال عن ملفه.",
            "ثم اختبر الجملة: لو قرأها زميل، هل يقول «هذا صحيح»؟ إن كانت الإجابة «صحيح تقريبًا»، فهي غير صحيحة.",
            "وأخيرًا اطلب الصدى: «كيف ستشرحها لشريكك؟» جواب الموكّل هو التقرير الوحيد الصادق عن جودة شرحك.",
          ],
          en: [
            "Most lawyers see one danger: over-complicate and he will not understand. The second is worse: over-simplify and he understands something untrue.",
            "“We attached his account” is an easy sentence. What the client hears is that the money is now his — and he commits a supplier payment against it.",
            "The term is not the enemy. The problem is leaving it naked, or swapping it for a lighter word that changed the substance.",
            "The route between the two: lead with the effect (“you cannot move that amount until further notice”), name the term once, then explain it as a concrete action.",
            "Name the term once on purpose: he will hear it from the bank, the court and his opponent, and he is entitled to know the word being used about his own matter.",
            "Then test the sentence: if a colleague read it, would he say “that is accurate”? If the answer is “roughly accurate”, it is not accurate.",
            "Finally ask for the echo: “How will you explain this to your partner?” His answer is the only honest report you will get on your explanation.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.cc.05.visual",
        title: {
          ar: "مقياس الشرح: من المصطلح الخام إلى التبسيط الكاذب",
          en: "The explanation scale: from raw term to false simplicity",
        },
        variant: "scale",
        items: [
          {
            label: { ar: "١ — المصطلح كما هو", en: "1 — The raw term" },
            detail: {
              ar: "«أوقعنا حجزًا احتياطيًا بموجب أمر على عريضة.» دقيق تمامًا، وغير قابل للاستعمال: لا يعرف الموكّل ماذا يفعل بعد سماعه.",
              en: "“We obtained a precautionary attachment by ex parte order.” Perfectly accurate and entirely unusable: he does not know what to do after hearing it.",
            },
            tone: "negative",
          },
          {
            label: { ar: "٢ — المصطلح مع تعريف قاموسي", en: "2 — The term plus a dictionary definition" },
            detail: {
              ar: "«الحجز الاحتياطي إجراء تحفّظي يضمن اقتضاء الدين.» يبدو شرحًا، لكنه استبدل مصطلحًا بمصطلحين. لا أثر ولا فعل.",
              en: "“A precautionary attachment is a protective measure securing recovery of the debt.” It looks like an explanation but trades one term for two. No effect, no action.",
            },
            tone: "negative",
          },
          {
            label: { ar: "٣ — الأثر ثم الفعل الملموس", en: "3 — Effect first, then the concrete action" },
            detail: {
              ar: "«المحكمة جمّدت ثلاثين ألفًا في حسابه. المال ما زال باسمه ولم ينتقل إليك، لكنه لا يستطيع تحريكه حتى يصدر الحكم.» صحيح وقابل للاستعمال. هذا هو الهدف.",
              en: "“The court has frozen thirty thousand in his account. The money is still in his name and has not moved to you, but he cannot touch it until judgment.” True and usable. This is the target.",
            },
            tone: "positive",
          },
          {
            label: { ar: "٤ — التبسيط الذي غيّر المعنى", en: "4 — The simplification that changed the meaning" },
            detail: {
              ar: "«أخذنا المبلغ من حسابه، صار لك.» أسهل جملة في القائمة، وأخطرها: على أساسها يلتزم الموكّل بدفعة لا يملك مقابلها.",
              en: "“We took the money out of his account, it is yours now.” The easiest sentence on the list and the most dangerous: on its strength he commits a payment he cannot cover.",
            },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.cc.05.worked",
        strong: {
          label: {
            ar: "الشرح كما يقوله محامٍ ترجم قبل أن يتكلّم",
            en: "The explanation from a lawyer who translated before he spoke",
          },
          text: {
            ar: [
              "«أستاذ رامي، أهمّ شيء أولًا: مطبعتك تعمل غدًا كالمعتاد، ولا أحد سيغلق الباب هذا الأسبوع.»",
              "«المالك تقدّم بدعوى إخلاء — هذا اسمها القانوني — ومعناها العملي أنه يطلب من المحكمة إنهاء عقد الإيجار وإخراجك من المحلّ. طلبٌ لا قرار.»",
              "«أمامنا مهلة لتقديم جوابنا. حتى يصدر حكم ويصبح واجب التنفيذ، وضعك في المحلّ لا يتغيّر.»",
              "«قبل أن نكمل: كيف ستشرح هذا لشريكك إن سألك الليلة؟»",
            ],
            en: [
              "“Mr Rami, the important thing first: your press works tomorrow as usual, and nobody is closing the door this week.”",
              "“The landlord has filed an eviction claim — that is its legal name — and in practice it means he is asking the court to end the lease and put you out. A request, not a decision.”",
              "“We have a period in which to file our answer. Until a judgment is issued and becomes enforceable, your position in the shop does not change.”",
              "“Before we go on: how will you explain this to your partner if he asks tonight?”",
            ],
          },
          why: {
            ar: "الترتيب هو الشرح: الأثر أولًا فيتوقّف الخوف عن التشويش، ثم المصطلح مرّة واحدة ليعرف الكلمة التي سيسمعها من غيرك، ثم الفعل الملموس. وسؤال الصدى يحوّل الفهم من افتراض إلى معلومة مؤكّدة قبل أن يغادر.",
            en: "The order is the explanation: effect first, so fear stops jamming the signal; then the term once, so he knows the word he will hear from others; then the concrete action. The echo question turns comprehension from an assumption into a verified fact before he leaves.",
          },
        },
        weak: {
          label: {
            ar: "الشرح كما يقوله محامٍ متمرّن دقيق ومفهوم لنفسه فقط",
            en: "The explanation from a trainee who is precise and intelligible only to himself",
          },
          text: {
            ar: [
              "«وصلنا اليوم تبليغ بدعوى إخلاء لعدم الوفاء ببدل الإيجار، مقرونة بطلب تدبير مستعجل.»",
              "«سنتقدّم بدفوع شكلية أولًا، ثم بمذكّرة في الأساس، ونطلب مهلة إضافية للاطّلاع.»",
              "«الوضع تحت السيطرة إن شاء الله، ولا داعي للقلق من الناحية الإجرائية.»",
            ],
            en: [
              "“We were served today with an eviction claim for non-payment of rent, joined with an application for interim relief.”",
              "“We will file procedural objections first, then a memorandum on the merits, and request additional time to review.”",
              "“The situation is under control, God willing; procedurally there is nothing to worry about.”",
            ],
          },
          why: {
            ar: "كل جملة صحيحة قانونًا، ولا واحدة منها تجيب عن سؤال الموكّل الوحيد: هل أفتح المطبعة غدًا؟ ثم يأتي «الوضع تحت السيطرة» ليسدّ الفراغ بوعدٍ ضمني بالنتيجة، فيخرج الموكّل مطمئنًّا وجاهلًا في آن — وهي أسوأ تركيبة ممكنة.",
            en: "Every sentence is legally correct and not one answers his only question: do I open the press tomorrow? Then “under control” fills the gap with an implied promise of outcome, so he leaves reassured and uninformed at once — the worst possible combination.",
          },
        },
      },
      { kind: "activity", id: "s.cc.05.a1", activityId: "act.cc.05.1", mode: "quick" },
      { kind: "activity", id: "s.cc.05.a2", activityId: "act.cc.05.2", mode: "guided" },
      { kind: "activity", id: "s.cc.05.a3", activityId: "act.cc.05.3", mode: "guided" },
      { kind: "activity", id: "s.cc.05.a4", activityId: "act.cc.05.4", mode: "independent" },
      { kind: "activity", id: "s.cc.05.a5", activityId: "act.cc.05.5", mode: "independent" },
      { kind: "summary", id: "s.cc.05.summary", summaryCardId: "card.cc.05" },
      {
        kind: "apply_tomorrow",
        id: "s.cc.05.apply",
        task: {
          ar: "خذ آخر رسالة أرسلتها إلى موكّل، وضع خطًّا تحت كل مصطلح قانوني فيها، ثم أعد كتابتها بقاعدة: أثر، ثم مصطلح مرّة واحدة، ثم فعل ملموس.",
          en: "Take the last message you sent a client, underline every legal term in it, then rewrite it as: effect, then the term once, then the concrete action.",
        },
        detail: {
          ar: "وفي أول مكالمة غدًا، اختم بسؤال واحد: «كيف ستشرح هذا لزوجتك أو لشريكك؟» ثم اصمت واستمع إلى ما فهمه فعلًا.",
          en: "And in tomorrow’s first call, close with one question: “How will you explain this to your wife or your partner?” Then be quiet and listen to what he actually understood.",
        },
      },
      {
        kind: "next_mission",
        id: "s.cc.05.next",
        teaser: {
          ar: "الموكّل فهم ما يجري. سيسأل فورًا: كم يستغرق؟ وكم يكلّف؟ وماذا سنحصّل؟ الوحدة القادمة: كيف تُبنى التوقّعات على الوقت والكلفة والنتيجة — ومحاكاة مع موكّلة تقول إن محاميًا آخر طلب ثلث أتعابك.",
          en: "The client now understands what is happening. He will immediately ask: how long, how much, and what will we get? Next unit: building expectations on time, cost and outcome — plus a simulation with a client who says another lawyer quoted her a third of your fee.",
        },
      },
    ],
    activities: [
      {
        id: "act.cc.05.1",
        kind: "multiple_choice",
        skillId: "skill.plain-explanation",
        secondarySkillIds: ["skill.expectation-management"],
        stage: 3,
        weight: 1,
        context: {
          ar: [
            "موكّلك رامي خوري، صاحب مطبعة الأصيل، يلاحق مؤسسة السرايا للتوريدات بمبلغ متأخّر.",
            "حصلتَ أمس على قرار بحجز احتياطي على حساب المدين بمبلغ ثلاثين ألفًا.",
            "يتّصل بك اليوم: «سمعت من المحاسب أنه صار في حجز. شو يعني هذا؟»",
          ],
          en: [
            "Your client Rami Khoury, owner of Al-Aseel Press, is chasing Al-Saraya Supplies for an overdue amount.",
            "Yesterday you obtained a precautionary attachment over the debtor’s account for thirty thousand.",
            "He calls today: “My accountant says there is an attachment. What does that mean?”",
          ],
        },
        prompt: {
          ar: "أيّ جواب يشرح الأمر بلغة يستطيع رامي استعمالها، دون أن يفقد دقّته؟",
          en: "Which answer explains it in language Rami can use, without losing accuracy?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«الحجز الاحتياطي إجراء تحفّظي يوقعه الدائن على أموال مدينه بموجب أمر على عريضة، ضمانًا لاقتضاء الدين عند صدور الحكم.»",
              en: "“A precautionary attachment is a protective measure levied by a creditor over the debtor’s assets by ex parte order, securing recovery of the debt upon judgment.”",
            },
            rationale: {
              ar: "دقيق تمامًا، وعديم الفائدة. استبدلتَ مصطلحًا واحدًا بأربعة، ولم تُجب عن السؤال الوحيد في رأس رامي: هل قبضتُ شيئًا أم لا؟ سينهي المكالمة مهذّبًا ويسأل محاسبه، فيحصل على جواب لم تصنعه أنت.",
              en: "Perfectly accurate and useless. You traded one term for four and never answered the only question in Rami’s head: have I been paid or not? He will end the call politely and ask his accountant, and the answer he gets will not be one you wrote.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«يعني أننا سحبنا المبلغ من حسابه. صار المال لك، ننتظر فقط الأوراق.»",
              en: "“It means we pulled the money out of his account. The money is yours now, we are just waiting on the paperwork.”",
            },
            rationale: {
              ar: "أسهل جملة يمكن قولها، وأغلاها ثمنًا. الحجز يجمّد ولا ينقل: المبلغ ما زال في ذمّة المدين وباسمه. رامي سيلتزم بدفعة لمورّده هذا الأسبوع على أساس مالٍ لم يصل، وحين ينكشف الأمر لن يقول «أخطأتُ في الفهم»، بل «قال لي محامي إن المال صار لي».",
              en: "The easiest sentence available and the most expensive. An attachment freezes; it does not transfer. The money remains the debtor’s and in his name. Rami will commit a supplier payment this week against funds that never arrived, and when it unravels he will not say “I misunderstood” — he will say “my lawyer told me the money was mine”.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«المحكمة جمّدت ثلاثين ألفًا في حسابه — اسم الإجراء حجز احتياطي. المال ما زال باسمه ولم ينتقل إليك، لكنه لا يستطيع تحريكه إلى أن يصدر الحكم. عمليًّا: لا تبنِ دفعات هذا الشهر على هذا المبلغ.»",
              en: "“The court has frozen thirty thousand in his account — the procedure is called a precautionary attachment. The money is still in his name and has not moved to you, but he cannot touch it until judgment. In practice: do not build this month’s payments on that amount.”",
            },
            correct: true,
            rationale: {
              ar: "ثلاث حركات في جملتين: الأثر أولًا، ثم المصطلح مرّة واحدة ليعرف الكلمة التي سيسمعها من المصرف، ثم الفعل الملموس («لا تبنِ دفعات»). الجملة صحيحة قانونًا وقابلة للاستعمال تجاريًّا في آن — وهذا هو المعيار الوحيد.",
              en: "Three moves in two sentences: effect first, the term once so he knows the word the bank will use, then the concrete action (“do not build payments”). The sentence is legally accurate and commercially usable at the same time — which is the only standard that matters.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«تفاصيل إجرائية لا تستحقّ انشغالك يا أستاذ رامي. اتركها عليّ، وأنا أخبرك حين يصبح هناك شيء مهم.»",
              en: "“Procedural detail not worth your attention, Mr Rami. Leave it to me and I will tell you when there is something important.”",
            },
            rationale: {
              ar: "تصنيفك للمعلومة بأنها «غير مهمّة» قرار تتّخذه بالنيابة عنه في شأن ماله. والحجز ليس تفصيلًا: له أثر مباشر على سيولة المدين وعلى فرص التسوية. حين يكتشف رامي لاحقًا أن الأمر كان مهمًّا، لن يراجع فهمه بل يراجع ثقته بك.",
              en: "Classifying the information as “unimportant” is a decision you take on his behalf about his own money. And an attachment is not a detail: it directly affects the debtor’s liquidity and the odds of settlement. When Rami later learns it mattered, he will not revise his understanding — he will revise his trust in you.",
            },
          },
        ],
      },
      {
        id: "act.cc.05.2",
        kind: "matching",
        skillId: "skill.plain-explanation",
        secondarySkillIds: ["skill.expectation-management", "skill.avoiding-guarantees"],
        stage: 3,
        weight: 1,
        prompt: {
          ar: "طابق كل مصطلح مع الجملة التي تنقل معناه دون أن تغيّره، وتُخبر الموكّل بما يفعله غدًا.",
          en: "Match each term with the sentence that carries its meaning without changing it, and tells the client what to do tomorrow.",
        },
        hint: {
          ar: "اسأل نفسك في كل مرّة سؤالين: هل بقيت الجملة صحيحة؟ وهل يستطيع الموكّل أن يتصرّف على أساسها غدًا صباحًا؟",
          en: "Ask two questions each time: is the sentence still true, and can the client act on it tomorrow morning?",
        },
        accessibleAlternative: {
          ar: "يمكن الإجابة باختيار رقم الجملة المقابلة من قائمة منسدلة بجانب كل مصطلح بدل السحب.",
          en: "You can answer by choosing the matching sentence number from a dropdown beside each term instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "إنذار عدلي", en: "Formal notice served by a bailiff" },
            right: {
              ar: "«ورقة رسمية يسلّمها مُحضِر. من لحظة استلامك تبدأ مهلة تُحسب عليك، وتوقيعك بالاستلام إقرار بالتسلّم لا موافقة على مضمونها.»",
              en: "“An official paper delivered by a bailiff. From the moment you receive it a period starts running against you, and signing for it acknowledges delivery, not agreement with its contents.”",
            },
            rationale: {
              ar: "أكثر ما يخيف الموكّل في الإنذار هو التوقيع عليه؛ يظنّ أنه اعتراف. تصحيح هذا الفهم في جملة واحدة يمنع سلوكًا شائعًا وضارًّا: رفض الاستلام، الذي لا يوقف المهلة بل يفقدك رؤية المستند.",
              en: "What frightens clients most about a formal notice is signing it; they think it is an admission. Correcting that in one sentence prevents a common and damaging reaction — refusing service, which does not stop the clock and costs you sight of the document.",
            },
          },
          {
            id: "p2",
            left: { ar: "حجز احتياطي", en: "Precautionary attachment" },
            right: {
              ar: "«تجميد مبلغ محدّد في حسابه، باسمه هو لا باسمك. لا تُدرج هذا المبلغ في حسابات شهرك حتى أخبرك أنه أصبح قابلًا للقبض.»",
              en: "“A named amount frozen in his account, in his name and not yours. Do not put that amount into this month’s figures until I tell you it has become collectable.”",
            },
            rationale: {
              ar: "الفرق بين «جُمّد» و«انتقل» هو الفرق بين قرار تجاري سليم وقرار خاطئ. أي شرح لا يقول هذه الجملة صراحةً يترك للموكّل أن يستنتج الأسهل — أي الأسوأ.",
              en: "The gap between “frozen” and “transferred” is the gap between a sound commercial decision and a bad one. Any explanation that does not say this outright leaves the client to infer the easiest reading — which is the wrong one.",
            },
          },
          {
            id: "p3",
            left: { ar: "حكم قابل للاستئناف", en: "A judgment open to appeal" },
            right: {
              ar: "«ربحنا أمام هذه الدرجة، ولا يُقبض شيء بعد. أمام الطرف الآخر مهلة للاعتراض أمام محكمة أعلى، وسأتّصل بك يوم انقضائها.»",
              en: "“We won at this level, and nothing is collectable yet. The other side has a period to challenge it before a higher court, and I will call you the day that period ends.”",
            },
            rationale: {
              ar: "«ربحنا» وحدها أخطر كلمة في مهنتنا. الموكّل يحتفل ويخبر عائلته وربما مورّديه، ثم يأتي الاستئناف فيبدو الأمر انتكاسة أحدثتها أنت. اقتران البشرى بحدودها في النفس نفسه هو ما يحمي العلاقة.",
              en: "“We won”, standing alone, is the most dangerous word in the profession. The client celebrates, tells his family and maybe his suppliers, and when the appeal lands it looks like a setback you caused. Pairing the good news with its limits in the same breath is what protects the relationship.",
            },
          },
          {
            id: "p4",
            left: { ar: "دفع شكلي", en: "Procedural objection" },
            right: {
              ar: "«اعتراض على طريقة رفع الدعوى لا على أصل الحق. إن نجح ربحنا وقتًا وأعادوا الكرّة بشكل صحيح؛ لم نربح المبلغ.»",
              en: "“An objection to how the claim was brought, not to the right itself. If it succeeds we gain time and they refile properly; we have not won the money.”",
            },
            rationale: {
              ar: "الموكّل يسمع «ربحنا الدفع» فيفهم «انتهت القضية». تسمية ما رُبح بدقّة — الوقت لا المال — تمنع فرحًا سيتحوّل بعد شهرين إلى شعور بأنك ضلّلته.",
              en: "The client hears “we won the objection” and understands “the case is over”. Naming precisely what was won — time, not money — prevents a celebration that curdles two months later into a feeling that you misled him.",
            },
          },
          {
            id: "p5",
            left: { ar: "مرحلة التنفيذ", en: "The enforcement stage" },
            right: {
              ar: "«المرحلة التي يتحوّل فيها الحكم إلى مال في حسابك. ملف منفصل، ومهل خاصّة به، ولا يبدأ تلقائيًّا: نحن مَن يفتحه.»",
              en: "“The stage where a judgment turns into money in your account. A separate file with its own timetable, and it does not start by itself: we open it.”",
            },
            rationale: {
              ar: "أكثر خيبات الأمل في ملفات التحصيل تولد هنا: موكّل يحمل حكمًا ويظنّ أن المصرف سيحوّل المبلغ من تلقاء نفسه. جملة «لا يبدأ تلقائيًّا» تختصر شهرين من الانتظار الصامت والغضب الذي يليه.",
              en: "Most disappointment in collection matters is born here: a client holding a judgment who assumes the bank will transfer the money on its own. The line “it does not start by itself” saves two months of silent waiting and the anger that follows.",
            },
          },
        ],
      },
      {
        id: "act.cc.05.3",
        kind: "fill_blank",
        skillId: "skill.plain-explanation",
        secondarySkillIds: ["skill.avoiding-guarantees", "skill.expectation-management"],
        stage: 3,
        weight: 1,
        context: {
          ar: [
            "صدر الحكم لصالح رامي خوري أمام محكمة الدرجة الأولى.",
            "تتّصل به لتبلّغه. عليك أن تنقل الخبر الجيّد وحدوده في النفس نفسه.",
          ],
          en: [
            "Judgment has been given in Rami Khoury’s favour at first instance.",
            "You are calling to tell him. You must deliver the good news and its limits in the same breath.",
          ],
        },
        prompt: {
          ar: "أكمل الجمل الثلاث. في كل فراغ خيار أسهل لكنه غير صحيح — لا تختره.",
          en: "Complete the three gaps. Each one offers an easier option that is no longer true — do not take it.",
        },
        hint: {
          ar: "الخيار الصحيح هو الذي يبقى صحيحًا لو قرأه الطرف الآخر ومحاميه. الخيار الخاطئ هو الذي يجعل الموكّل يتصرّف اليوم بمالٍ لم يصل بعد.",
          en: "The right option stays true even if the other side and their lawyer read it. The wrong one makes the client spend today money that has not arrived.",
        },
        template: {
          ar: "«صدر الحكم لصالحك أمام محكمة الدرجة الأولى. عمليًّا هذا يعني أن {{0}}. وأمام الطرف الآخر مهلة ثلاثين يومًا {{1}}، ولذلك أنصحك بألّا {{2}} قبل انقضاء هذه المهلة.»",
          en: "“The court of first instance has ruled in your favour. In practice this means {{0}}. The other side has thirty days {{1}}, so my advice is not to {{2}} before that period runs out.”",
        },
        blanks: [
          {
            id: "b0",
            options: [
              {
                ar: "القضية انتهت وحقّك أصبح مضمونًا",
                en: "the case is over and your money is secured",
              },
              {
                ar: "المحكمة قبلت مطالبتك في هذه الدرجة، وليست هذه نهاية الطريق",
                en: "the court accepted your claim at this level, and this is not the end of the road",
              },
              {
                ar: "الحكم اكتسب قوة القضية المقضية وأصبح واجب النفاذ",
                en: "the judgment has acquired res judicata and become enforceable",
              },
            ],
            answerIndex: 1,
            rationale: {
              ar: "الخيار الأول أسهل جملة وأخطرها: «مضمون» وعد بنتيجة لم تصبح نهائية بعد، وسيُقتبس في وجهك عند أول استئناف. الخيار الثالث دقيق لغويًّا لكنه غير صحيح هنا — الحكم القابل للاستئناف لم يكتسب هذه القوة — وهو فوق ذلك غير مفهوم. الخيار الأوسط يعطي البشرى ويضع حدّها في الجملة نفسها.",
              en: "The first is the easiest line and the most dangerous: “secured” promises an outcome that is not yet final, and it will be quoted back at you the moment an appeal is filed. The third is technically phrased but untrue here — a judgment open to appeal has not acquired that status — and is unintelligible besides. The middle option delivers the good news and its limit in the same sentence.",
            },
          },
          {
            id: "b1",
            options: [
              {
                ar: "للاعتراض على الحكم أمام محكمة أعلى",
                en: "to challenge the judgment before a higher court",
              },
              {
                ar: "لتنفيذ الحكم ودفع المبلغ إليك",
                en: "to enforce the judgment and pay you the amount",
              },
              {
                ar: "لتقديم مذكّرة جوابية أمام المحكمة نفسها",
                en: "to file a reply memorandum before the same court",
              },
            ],
            answerIndex: 0,
            rationale: {
              ar: "الخيار الثاني يقلب اتجاه المهلة رأسًا على عقب: يجعل الموكّل ينتظر مالًا خلال ثلاثين يومًا، فيخطّط على أساسه. والثالث يخلط مرحلة انتهت بمرحلة تبدأ. المهلة هنا مهلة الخصم للطعن، لا مهلتك للقبض.",
              en: "The second reverses the direction of the deadline: it has the client waiting for money within thirty days and planning against it. The third confuses a stage that has closed with one that is opening. This period belongs to the opponent, to appeal — it is not your period to collect.",
            },
          },
          {
            id: "b2",
            options: [
              {
                ar: "تلتزم بأي دفعة أو شراء اعتمادًا على هذا المبلغ",
                en: "commit to any payment or purchase on the strength of this amount",
              },
              {
                ar: "تخبر أحدًا بصدور الحكم",
                en: "tell anyone that judgment has been given",
              },
              {
                ar: "تتواصل مع الطرف الآخر بأي شكل من الأشكال",
                en: "have any contact whatsoever with the other side",
              },
            ],
            answerIndex: 0,
            rationale: {
              ar: "الخيار الأول يحمي الموكّل من الضرر الحقيقي: قرار تجاري مبنيّ على مال لم يصل. الثاني نصيحة لا سند لها وتُشعره بأنك تخفي شيئًا. والثالث حظر مطلق ومبالغ فيه يقطع طريق تسوية قد تكون أسرع من التنفيذ — النصيحة الصحيحة أن يخبرك قبل أن يردّ، لا أن يصمت.",
              en: "The first protects him from the real harm: a commercial decision built on money that has not arrived. The second is unfounded advice that makes you look like you are hiding something. The third is an absolute ban that closes off a settlement which may be faster than enforcement — the right advice is that he tells you before he replies, not that he goes silent.",
            },
          },
        ],
      },
      {
        id: "act.cc.05.4",
        kind: "short_written",
        skillId: "skill.plain-explanation",
        secondarySkillIds: ["skill.client-follow-up", "skill.expectation-management"],
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.client-response.v1",
        weight: 2,
        minChars: 260,
        context: {
          ar: [
            "الساعة السابعة مساءً. تصلك رسالة نصّية من رامي خوري.",
            "«أستاذ، وصلني ورق اليوم من المحكمة ما فهمت منه شي. في كلمة حجز وكلمة إخلاء. هل خسرت؟ لازم أقفل المطبعة؟»",
            "الواقع: المالك رفع دعوى إخلاء لعدم دفع بدل الإيجار، ولم يصدر أي حكم. وحجزك أنت على حساب المدين في ملف آخر لا علاقة له بهذا.",
          ],
          en: [
            "Seven in the evening. A text arrives from Rami Khoury.",
            "“I got papers from the court today and I understood nothing. There is the word attachment and the word eviction. Have I lost? Do I have to close the press?”",
            "The facts: the landlord has filed an eviction claim for unpaid rent, and no judgment has been given. The attachment you obtained is in a different matter altogether.",
          ],
        },
        prompt: {
          ar: "اكتب ردًّا الليلة (٧٠–١٠٠ كلمة). ابدأ بالأثر العملي، وافصل بين الملفّين، وسمِّ كل مصطلح مرّة واحدة بشرح ملموس، وانتهِ بخطوة يملكها هو وأخرى تملكها أنت بموعد. لا تَعِد بأي نتيجة.",
          en: "Write your reply tonight (70–100 words). Lead with the practical effect, separate the two matters, name each term once with a concrete explanation, and close with one step he owns and one you own with a date. Promise no outcome.",
        },
        modelAnswer: {
          ar: [
            "«مساء الخير أستاذ رامي. أولًا واطمئن: لم يصدر أي حكم، والمطبعة تفتح غدًا كالمعتاد.»",
            "«الورقة التي وصلتك من المالك اسمها دعوى إخلاء: أي أنه طلب من المحكمة إنهاء الإيجار وإخراجك. طلب لا قرار، وأمامنا مهلة لتقديم جوابنا.»",
            "«كلمة حجز في ورقة ثانية وتخصّ ملف السرايا: المحكمة جمّدت مبلغًا في حساب المدين. المال باسمه ولم ينتقل إليك بعد.»",
            "«المطلوب منك: صوّر لي الورقتين الليلة، وأحضر إيصالات الإيجار لآخر ستة أشهر. سأتّصل بك غدًا بين العاشرة والثانية عشرة بعد قراءة الملف.»",
          ],
          en: [
            "“Good evening, Mr Rami. First, and put your mind at rest: no judgment has been given, and the press opens tomorrow as usual.”",
            "“The paper from your landlord is called an eviction claim: he is asking the court to end the lease and put you out. A request, not a decision, and we have a period in which to answer.”",
            "“The word attachment is on a different paper and belongs to the Al-Saraya matter: the court has frozen an amount in the debtor’s account. The money is in his name and has not moved to you.”",
            "“What I need from you: photograph both papers tonight and bring the rent receipts for the last six months. I will call you tomorrow between ten and twelve once I have read the file.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«مساء الخير. لا تقلق أبدًا، الوضع تحت السيطرة والحقّ حقّك.»",
              "«دعوى الإخلاء مبنية على تخلّف عن الوفاء ببدل الإيجار، وسنتقدّم بدفوع شكلية ثم بمذكّرة في الأساس. أمّا الحجز فهو احتياطي وسيُرفع في حينه.»",
              "«خلّيها عليّ وما تشغل بالك، ونتواصل قريبًا.»",
            ],
            en: [
              "“Good evening. Don’t worry at all, everything is under control and the right is on your side.”",
              "“The eviction claim rests on default in payment of rent; we will file procedural objections then a memorandum on the merits. As for the attachment, it is precautionary and will be lifted in due course.”",
              "“Leave it with me, don’t trouble yourself, and we will speak soon.”",
            ],
          },
          whatIsWrong: {
            ar: "أربعة أخطاء محدّدة. «الحقّ حقّك» وعد ضمني بالنتيجة قبل قراءة أي مستند، وسيُقتبس في وجهك. المصطلحات مُدرجة عارية دون أثر ولا فعل، فيبقى السؤال الوحيد — هل أفتح المطبعة غدًا؟ — بلا جواب. الملفّان مختلطان في فقرة واحدة، فيظنّ رامي أن الحجز واقع عليه هو. و«نتواصل قريبًا» ليس موعدًا: لا تاريخ ولا مالك للخطوة، فيبقى الليل كلّه ينتظر.",
            en: "Four specific failures. “The right is on your side” is an implied promise of outcome given before a single document was read, and it will be quoted back at you. The terms are dropped in naked, with no effect and no action, so the one real question — do I open tomorrow? — goes unanswered. The two matters are blended in one paragraph, leaving Rami to think the attachment is against him. And “we will speak soon” is not a commitment: no date, no owner, so he waits up all night.",
          },
        },
      },
      {
        id: "act.cc.05.5",
        kind: "reflection",
        skillId: "skill.plain-explanation",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع مرّة شرحتَ فيها شيئًا لموكّل ثم اكتشفت لاحقًا أنه فهم عكسه. أي كلمة بالتحديد كانت مسؤولة؟",
          en: "Recall a time you explained something to a client and later discovered he had understood the opposite. Which single word was responsible?",
        },
        followUp: {
          ar: "وبأي جملة كنت ستستبدلها اليوم، بحيث تبقى صحيحة ويستطيع هو أن يتصرّف على أساسها؟",
          en: "And what sentence would you put in its place today — one that stays true and that he could act on?",
        },
      },
    ],
    summaryCard: {
      id: "card.cc.05",
      title: {
        ar: "الترجمة الأمينة",
        en: "The Faithful Translation",
      },
      whatYouLearned: {
        ar: [
          "للشرح خطران: التعقيد الذي لا يصل، والتبسيط الذي يصل خاطئًا. الثاني أغلى ثمنًا.",
          "الأثر العملي يسبق المصطلح، والمصطلح يُذكر مرّة واحدة لأن الموكّل سيسمعه من غيرك.",
          "كل تبسيط يمرّ باختبار واحد: هل بقي صحيحًا لو قرأه محامي الخصم؟",
          "الفهم لا يُفترض؛ يُقاس بأن يعيد الموكّل صياغة ما سمع بلغته هو.",
        ],
        en: [
          "Explaining carries two dangers: complexity that never lands, and simplicity that lands wrong. The second costs more.",
          "The practical effect comes before the term, and the term is named once, because he will hear it from other people.",
          "Every simplification faces one test: would it still be true if opposing counsel read it?",
          "Comprehension is not assumed; it is measured by having the client restate it in his own words.",
        ],
      },
      framework: {
        name: {
          ar: "الترجمة الأمينة: أثر · مصطلح · فعل · اختبار · صدى",
          en: "The Faithful Translation: Effect · Term · Action · Test · Echo",
        },
        steps: [
          {
            ar: "أثر — ابدأ بما يتغيّر في حياة الموكّل هذا الأسبوع: هل يفتح محلّه؟ هل يدفع؟ هل ينتظر؟",
            en: "Effect — open with what changes in his week: does he open the shop, does he pay, does he wait?",
          },
          {
            ar: "مصطلح — سمِّ الكلمة القانونية مرّة واحدة، لأنه سيسمعها من المصرف والمحكمة والخصم.",
            en: "Term — name the legal word once, because he will hear it from the bank, the court and his opponent.",
          },
          {
            ar: "فعل — استبدل التعريف بفعل ملموس: مَن يفعل ماذا، لمن، ومتى.",
            en: "Action — replace the definition with a concrete action: who does what, to whom, and when.",
          },
          {
            ar: "اختبار — اقرأ جملتك بعين محامي الخصم. «صحيح تقريبًا» تعني غير صحيح.",
            en: "Test — read your sentence with opposing counsel’s eyes. “Roughly true” means not true.",
          },
          {
            ar: "صدى — اطلب منه أن يشرحها لشريكه أمامك. ما يقوله هو تقريرك الوحيد الصادق.",
            en: "Echo — ask him to explain it to his partner in front of you. What he says is your only honest report.",
          },
        ],
      },
      rememberThis: {
        ar: "التبسيط الذي يغيّر المعنى ليس لطفًا بالموكّل؛ إنه خطأ مهني يرتديه ويخرج به من مكتبك.",
        en: "Simplification that changes the meaning is not kindness to a client; it is a professional error he puts on and walks out wearing.",
      },
      useItTomorrow: {
        ar: "في أول مكالمة غدًا، اشرح خطوة واحدة بترتيب أثر–مصطلح–فعل، ثم أنهِ بسؤال: «كيف ستشرحها لشريكك الليلة؟» واكتب جوابه حرفيًّا.",
        en: "In tomorrow’s first call, explain one step in the order effect–term–action, then close with: “How will you explain this to your partner tonight?” Write his answer down word for word.",
      },
    },
    targetLevel: 3,
    sourceIds: [
      "src.client-centered-law-firm",
      "src.selling-the-invisible",
      "src.they-ask-you-answer",
      "src.thinking-like-a-lawyer",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 06 — Managing expectations on time, cost and outcome
  // =========================================================================
  {
    id: "unit.cc.06",
    chapterId: "ch.cc.setting-expectations",
    order: 6,
    title: {
      ar: "ضبط التوقّعات: الوقت والكلفة والنتيجة",
      en: "Managing Expectations on Time, Cost and Outcome",
    },
    subtitle: {
      ar: "الموكّل لا يغضب من الانتظار الطويل، بل من الانتظار الذي لم يُقَل له",
      en: "A client is not angered by a long wait; he is angered by a wait nobody told him about.",
    },
    primarySkillId: "skill.expectation-management",
    skillIds: [
      "skill.expectation-management",
      "skill.plain-explanation",
      "skill.client-follow-up",
      "skill.next-steps-closure",
      "skill.difficult-client-basics",
      "skill.fee-conversations",
    ],
    stage: 3,
    estimatedMinutes: 11,
    steps: [
      {
        kind: "hook",
        id: "s.cc.06.hook",
        text: {
          ar: "أكثر الشكاوى ضدّ المحامين ليست عن أحكام خُسرت، بل عن توقّعات لم يصحّحها أحد في الوقت المناسب.",
          en: "Most complaints against lawyers are not about judgments lost; they are about expectations nobody corrected in time.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.cc.06.why",
        text: {
          ar: "التوقّع الذي لم تضبطه أنت يضبطه الموكّل بنفسه: يفترض أشهرًا قليلة، وكلفةً أقلّ، ونتيجةً كاملة. ثم يقيس أداءك بمقياس صنعه هو.",
          en: "An expectation you do not set, the client sets himself: a few months, a smaller bill, a full recovery. Then he measures your work against a yardstick he built.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.cc.06.goals",
        goals: {
          ar: [
            "أن تفصل في كل محور — وقت وكلفة ونتيجة — بين ما تملكه أنت وما لا يملكه أحد في المكتب.",
            "أن تعطي مدى بدل رقم واحد، وأن تسمّي الشرط الذي يقوم عليه التقدير.",
            "أن تحدّد موعد مراجعة التقدير قبل أن يحتاج الموكّل إلى طلبه.",
            "أن توصل الخبر السيّئ مبكّرًا وبترتيب يبدأ بالأثر لا بالاعتذار.",
          ],
          en: [
            "On each axis — time, cost, outcome — separate what you control from what nobody in the firm controls.",
            "Give a range instead of a single number, and name the condition the estimate rests on.",
            "Fix the date you will revisit the estimate before the client has to ask for it.",
            "Deliver bad news early, in an order that starts with the effect rather than the apology.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.cc.06.lesson",
        title: {
          ar: "لا تَعِد بما لا تملك، والتزم بما تملك",
          en: "Never promise what you do not own; commit to what you do",
        },
        body: {
          ar: [
            "في كل ملف ثلاثة محاور يقيسك الموكّل عليها: كم يستغرق، كم يكلّف، وماذا سأحصّل. لا يجوز الصمت عن أي منها.",
            "ابدأ بالفصل: إيداع اللائحة بيدك، وتاريخ الجلسة ليس بيدك. إعداد المذكّرة بيدك، وسرعة الخبير ليست بيدك.",
            "هذا الفصل ليس تنصّلًا؛ إنه ما يجعل التزاماتك ذات قيمة. مَن يَعِد بكل شيء لا يُصدَّق في شيء.",
            "ثم أعطِ مدى لا نقطة. «ستة إلى عشرة أسابيع» تحتمل الواقع؛ «ستة أسابيع» تصنع موعدًا ستخسره.",
            "وسمِّ الشرط بصوت عالٍ: «هذا التقدير قائم على ألّا يقدّم الخصم طلبًا عارضًا. إن فعل، يتغيّر.»",
            "الكلفة تُفكَّك إلى مراحل بما تنتجه كل مرحلة، لا إلى بنود إجرائية. الموكّل التاجر يشتري نتائج مرحلية لا أسماء إجراءات.",
            "وأهمّ بند في التوقّع هو موعد مراجعته: «سأعيد تقدير المدّة بعد أول جلسة وأخبرك حتى لو لم يتغيّر شيء.»",
            "أخيرًا: الخبر السيّئ يشيخ بسرعة. تأخيرُه أسبوعًا يضاعف كلفته، ويحوّل مشكلة في الملف إلى مشكلة فيك.",
          ],
          en: [
            "Every matter has three axes the client measures you on: how long, how much, what will I get. Silence on any of them is not an option.",
            "Start by separating: filing is in your hands, the hearing date is not. Drafting is in your hands, the expert’s speed is not.",
            "That separation is not evasion; it is what gives your commitments value. A lawyer who promises everything is believed on nothing.",
            "Then give a range, not a point. “Six to ten weeks” can absorb reality; “six weeks” creates a date you will miss.",
            "And say the condition out loud: “This estimate assumes the other side files no counter-application. If they do, it changes.”",
            "Cost is broken into stages by what each stage produces, not into procedural line items. A trader buys staged results, not the names of procedures.",
            "The most important part of an expectation is the date you revisit it: “I will re-estimate after the first hearing and tell you even if nothing has changed.”",
            "Finally: bad news ages fast. Holding it a week doubles its cost and turns a problem in the file into a problem with you.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.cc.06.visual",
        title: {
          ar: "متى تُضبط التوقّعات على خطّ الملف",
          en: "When expectations get set along the life of a matter",
        },
        variant: "timeline",
        items: [
          {
            label: { ar: "اليوم صفر — قبل التوقيع", en: "Day zero — before signing" },
            detail: {
              ar: "نطاق العمل بمراحله، ومدى زمني لكل مرحلة، وكلفة مرتبطة بما تنتجه، وجملة صريحة: لا أضمن نتيجة.",
              en: "Scope by stages, a time range for each, cost tied to what each produces, and one explicit sentence: I guarantee no outcome.",
            },
            tone: "positive",
          },
          {
            label: { ar: "خلال ٤٨ ساعة — التثبيت الكتابي", en: "Within 48 hours — put it in writing" },
            detail: {
              ar: "رسالة واحدة تعيد ما اتُّفق عليه شفهيًّا. ما لا يُكتب خلال يومين يصبح بعد ستة أشهر كلمتك ضد كلمته.",
              en: "One message restating what was agreed orally. What is not written within two days becomes, six months on, your word against his.",
            },
            tone: "positive",
          },
          {
            label: { ar: "عند كل حدث — تحديث قصير", en: "At each event — a short update" },
            detail: {
              ar: "إيداع، جلسة، ردّ خصم، تقرير خبير. ثلاثة أسطر تكفي: ما حصل، ما أثره، وما التالي بتاريخ.",
              en: "A filing, a hearing, an opponent’s reply, an expert report. Three lines will do: what happened, what it means, what is next and when.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "عند تغيّر التقدير — قبل أن يسأل", en: "When the estimate moves — before he asks" },
            detail: {
              ar: "اتصال في اليوم نفسه. الخبر السيّئ المبكّر يُقرأ كفاءةً وشفافية؛ والمتأخّر يُقرأ إخفاءً مهما كان صادقًا.",
              en: "A call the same day. Early bad news reads as competence and candour; late bad news reads as concealment, however honest it is.",
            },
            tone: "negative",
          },
          {
            label: { ar: "عند الإقفال — الحساب الصريح", en: "At closing — the honest reckoning" },
            detail: {
              ar: "ما وُعد به في اليوم صفر مقابل ما حصل فعلًا، بلا تجميل. هذه المقارنة هي ما يقرّر عودته إليك وإحالته غيره.",
              en: "What was promised on day zero against what actually happened, with no varnish. That comparison decides whether he returns and who he sends you.",
            },
            tone: "neutral",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.cc.06.worked",
        strong: {
          label: {
            ar: "«كم يستغرق وكم يكلّف؟» — جواب محامٍ يفصل ما يملكه",
            en: "“How long and how much?” — from a lawyer who separates what he owns",
          },
          text: {
            ar: [
              "«أفصّلها لك على محورين. ما بيدي: أودع اللائحة بحلول الخميس المقبل، وأجهّز مذكّرة الردّ خلال عشرة أيام من تسلّم ردّهم.»",
              "«ما ليس بيدي: تاريخ الجلسة الأولى، وسرعة الخبير. في ملفات مشابهة تراوحت المدّة حتى أول جلسة بين ستة وعشرة أسابيع.»",
              "«الكلفة على ثلاث مراحل، وكل مرحلة لها ثمن وناتج: الإنذار والمطالبة، ثم الدعوى حتى الحكم، ثم التنفيذ. لا تدفع مرحلة قبل أن تبدأ.»",
              "«وهذا التقدير قائم على ألّا يُدخل الخصم طرفًا ثالثًا. سأعيد تقديره بعد أول جلسة وأخبرك حتى لو لم يتغيّر شيء.»",
            ],
            en: [
              "“Let me split it in two. What is in my hands: I file by next Thursday, and I have the reply drafted within ten days of receiving theirs.”",
              "“What is not in my hands: the first hearing date and the expert’s pace. In comparable matters the time to a first hearing has run between six and ten weeks.”",
              "“Cost is in three stages, each with a price and a product: demand and claim, then proceedings to judgment, then enforcement. You pay for no stage before it starts.”",
              "“And the estimate assumes they do not join a third party. I will re-estimate after the first hearing and tell you even if nothing has changed.”",
            ],
          },
          why: {
            ar: "الفصل يجعل الالتزامات قابلة للتصديق: مَن يقول «هذا ليس بيدي» يُصدَّق حين يقول «هذا بيدي وسأفعله الخميس». والمدى يحتمل الواقع بدل أن ينكسر عليه، والشرط المعلن يحوّل أي تغيّر لاحق من مفاجأة إلى فرضية سبق ذكرها. وموعد المراجعة ينزع من الموكّل حاجته إلى المطاردة.",
            en: "Separating makes the commitments credible: a lawyer who says “that is not in my hands” is believed when he says “this is, and I will do it Thursday”. The range absorbs reality instead of breaking against it, the stated condition turns any later change from a surprise into a possibility already named, and the review date removes the client’s need to chase.",
          },
        },
        weak: {
          label: {
            ar: "الجواب نفسه من محامٍ يريد أن يُطمئن",
            en: "The same answer from a lawyer who wants to reassure",
          },
          text: {
            ar: [
              "«لا تقلق، ستة أشهر على الأكثر وينتهي كل شيء إن شاء الله.»",
              "«الأتعاب معقولة جدًّا مقارنةً بالمبلغ الذي ستستردّه، وسنتفاهم عليها في النهاية.»",
              "«الملف واضح والحق واضح، والمحاكم عندنا تحترم المستندات.»",
            ],
            en: [
              "“Don’t worry — six months at most and it will all be over, God willing.”",
              "“The fee is very reasonable next to what you will recover, and we can settle it at the end.”",
              "“The file is clear, the right is clear, and our courts respect documents.”",
            ],
          },
          why: {
            ar: "هذا ما يقوله محامٍ متمرّن حسن النيّة يريد أن يخفّف قلق الموكّل، وهو يزرع ثلاث قنابل موقوتة: موعدًا لا يملكه («ستة أشهر»)، وأتعابًا مؤجّلة بلا رقم ستتحوّل إلى نزاع، ووعدًا ضمنيًّا بالنتيجة («الحق واضح»). في الشهر السابع سيُقتبس كل ذلك في وجهه — لا بوصفه تفاؤلًا بل بوصفه التزامًا.",
            en: "This is what a well-meaning trainee says to lighten a client’s worry, and it plants three timed charges: a date he does not own (“six months”), a deferred fee with no number that will become a dispute, and an implied promise of outcome (“the right is clear”). In month seven all of it is quoted back to him — not as optimism, but as a commitment.",
          },
        },
      },
      { kind: "activity", id: "s.cc.06.a1", activityId: "act.cc.06.1", mode: "quick" },
      { kind: "activity", id: "s.cc.06.a2", activityId: "act.cc.06.2", mode: "guided" },
      { kind: "activity", id: "s.cc.06.a3", activityId: "act.cc.06.3", mode: "guided" },
      { kind: "activity", id: "s.cc.06.a4", activityId: "act.cc.06.4", mode: "independent" },
      { kind: "simulation", id: "s.cc.06.sim", scenarioId: "scn.fee-pushback" },
      { kind: "activity", id: "s.cc.06.a5", activityId: "act.cc.06.5", mode: "independent" },
      { kind: "activity", id: "s.cc.06.a6", activityId: "act.cc.06.6", mode: "independent" },
      { kind: "summary", id: "s.cc.06.summary", summaryCardId: "card.cc.06" },
      {
        kind: "apply_tomorrow",
        id: "s.cc.06.apply",
        task: {
          ar: "اختر ملفًا واحدًا لم تراجع فيه التقدير منذ شهر، وأرسل للموكّل ثلاثة أسطر: أين نحن، ما المدى الزمني الجديد وشرطه، ومتى ستكتب إليه مرّة أخرى.",
          en: "Pick one matter whose estimate you have not revisited in a month and send the client three lines: where we are, the new time range and its condition, and when you will write again.",
        },
        detail: {
          ar: "أرسلها حتى لو لم يتغيّر شيء. الرسالة التي تقول «لا جديد، والموعد التالي كذا» تصنع من الثقة ما لا تصنعه رسالة انتصار.",
          en: "Send it even if nothing has changed. A message saying “nothing new, the next date is X” builds more trust than a message announcing a win.",
        },
      },
      {
        kind: "next_mission",
        id: "s.cc.06.next",
        teaser: {
          ar: "ضبطتَ الوقت والكلفة. يبقى السؤال الذي لا يُضبط بجدول: «هل تضمن لي أنني سأربح؟» الوحدة القادمة هي العمود الأخلاقي لهذا المسار — ومحاكاة مع موكّلة سمعت من محامٍ آخر أن قضيّتها مضمونة مئة بالمئة.",
          en: "You have set time and cost. What remains is the question no schedule settles: “Do you guarantee I’ll win?” The next unit is the ethical spine of this path — with a simulation opposite a client told by another lawyer that her case is a hundred per cent guaranteed.",
        },
      },
    ],
    activities: [
      {
        id: "act.cc.06.1",
        kind: "multiple_choice",
        skillId: "skill.expectation-management",
        secondarySkillIds: ["skill.avoiding-guarantees"],
        stage: 3,
        weight: 1,
        context: {
          ar: [
            "موكّلك زياد نعمة، مقاول، يطالب شركة البستان للتطوير العقاري بمستحقّات دفعتين متأخّرتين.",
            "وقّعتم الوكالة اليوم. يسألك قبل أن ينهض: «طيب أستاذ، متى ينتهي هذا الملف؟»",
          ],
          en: [
            "Your client Ziad Neama, a contractor, is claiming two overdue instalments from Al-Bustan Property Development.",
            "You signed the engagement today. Before he stands up he asks: “So, when does this file end?”",
          ],
        },
        prompt: {
          ar: "ما أفضل جواب في هذه اللحظة؟",
          en: "What is the best answer at this moment?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«بين ثمانية وأربعة عشر شهرًا حتى حكم أول درجة، إن لم يُدخلوا طرفًا ثالثًا. ما بيدي أنا: الإيداع بحلول الخميس. ما ليس بيدي: تاريخ الجلسات. سأعيد التقدير بعد أول جلسة وأخبرك.»",
              en: "“Eight to fourteen months to a first-instance judgment, assuming they do not join a third party. In my hands: filing by Thursday. Not in my hands: hearing dates. I will re-estimate after the first hearing and tell you.”",
            },
            correct: true,
            rationale: {
              ar: "أربعة عناصر في جواب واحد: مدى بدل نقطة، شرط معلن يجعل أي تغيّر لاحق فرضيةً سبق ذكرها لا مفاجأة، فصلٌ بين ما تملكه وما لا تملكه يجعل التزامك بالخميس ذا قيمة، وموعد مراجعة ينزع عن الموكّل حاجته إلى المطاردة.",
              en: "Four elements in one answer: a range instead of a point; a stated condition that turns any later change into a possibility already named rather than a surprise; a separation of what you own from what you do not, which is what gives your Thursday commitment value; and a review date that removes his need to chase you.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«إن شاء الله ستة أشهر ونكون انتهينا. ملفك مستنداته قويّة والأمور تسير بسرعة هذه الأيام.»",
              en: "“Six months, God willing, and we’ll be done. Your documents are strong and things are moving quickly these days.”",
            },
            rationale: {
              ar: "رقم واحد لا تملكه، مقرونًا بتقييم للنتيجة. في الشهر السابع لن يسمع زياد تفاؤلًا بل التزامًا خُلف؛ ومن تلك اللحظة يصبح كل تأخير لاحق — ولو كان سببه المحكمة — دليلًا في نظره على أنك تُخفي عنه.",
              en: "A single number you do not own, welded to an assessment of the outcome. In month seven Ziad will not hear optimism; he will hear a commitment broken. From then on every further delay — even one caused by the court — reads to him as evidence that you are hiding things.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«لا أستطيع أن أعرف بصراحة. المحاكم لا يمكن التنبّؤ بها إطلاقًا، والأمر ليس بيدي.»",
              en: "“Honestly, there’s no way to know. Courts are completely unpredictable and it isn’t in my hands.”",
            },
            rationale: {
              ar: "صادق ومعطّل. الصراحة بلا تقدير تترك الموكّل بلا شيء يخطّط عليه، فيملأ الفراغ بتقديره الخاص — وهو دائمًا أقصر وأرخص. وفوق ذلك تُقرأ الجملة عجزًا: لماذا يدفع لمحامٍ لا يعرف كيف تسير الملفات التي يعمل فيها كل يوم؟",
              en: "Honest and useless. Candour without an estimate leaves him nothing to plan against, so he fills the gap with his own — always shorter and cheaper. Worse, it reads as helplessness: why pay a lawyer who cannot describe how the matters he works on every day unfold?",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«يعتمد على أمور كثيرة. دعنا نبدأ ونرى، ولا تشغل بالك بالمدّة من الآن.»",
              en: "“It depends on a lot of things. Let’s start and see, and don’t worry about timing for now.”",
            },
            rationale: {
              ar: "«يعتمد» جواب صحيح لم يكتمل: العبارة تصبح مفيدة فقط حين تسمّي على ماذا يعتمد. أمّا «لا تشغل بالك» فهي تأجيل للسؤال لا جواب عنه، وسيعود بعد ستة أسابيع في صيغة أحدّ — عبر مكالمة غاضبة أو رسالة تسأل إن كان قد حدث شيء أصلًا.",
              en: "“It depends” is a correct answer left unfinished: it only becomes useful when you name what it depends on. And “don’t worry about it” postpones the question rather than answering it; it comes back in six weeks in a sharper form — an angry call, or a message asking whether anything has happened at all.",
            },
          },
        ],
      },
      {
        id: "act.cc.06.2",
        kind: "priority_ranking",
        skillId: "skill.expectation-management",
        secondarySkillIds: ["skill.difficult-client-basics", "skill.client-follow-up"],
        stage: 3,
        weight: 1,
        context: {
          ar: [
            "تأجّلت جلسة زياد نعمة شهرين لأن الخصم طلب مهلة لتعيين خبير.",
            "أمامك مكالمة من خمس دقائق. رتّب ما تقوله.",
          ],
          en: [
            "Ziad Neama’s hearing has been put back two months because the other side asked for time to appoint an expert.",
            "You have a five-minute call. Order what you say.",
          ],
        },
        prompt: {
          ar: "رتّب عناصر مكالمة الخبر السيّئ من الأهمّ إلى الأقلّ إلحاحًا، بحيث لا ينقطع الموكّل عن الإصغاء في منتصفها.",
          en: "Rank the parts of a bad-news call from most to least urgent, so the client does not stop listening halfway through.",
        },
        hint: {
          ar: "الموكّل يصغي بأعلى تركيز في أول عشر ثوانٍ فقط. ضع فيها ما لا يحتمل التأجيل، وأجّل ما يهمّك أنت لا ما يهمّه هو.",
          en: "A client listens hardest for the first ten seconds only. Put in them what cannot wait, and postpone what matters to you rather than to him.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٥) من قائمة منسدلة بجانب كل عنصر بدل السحب.",
          en: "Choose the rank number (1 to 5) from a dropdown beside each item instead of dragging.",
        },
        items: [
          {
            id: "r1",
            label: {
              ar: "الخبر نفسه في الجملة الأولى: «تأجّلت الجلسة إلى الثاني عشر من تشرين الأول.»",
              en: "The news itself in the first sentence: “The hearing has moved to 12 October.”",
            },
            rationale: {
              ar: "المقدّمات قبل الخبر تُقرأ تمهيدًا لكارثة، فيتصاعد قلق الموكّل قبل أن يعرف موضوعها. قُل الخبر في الثانية الأولى؛ كل ما يليه يُسمع بعقل أهدأ.",
              en: "A preamble before the news reads as the run-up to a disaster, so his anxiety spikes before he even knows the subject. Say it in the first second; everything after it is heard by a calmer mind.",
            },
          },
          {
            id: "r2",
            label: {
              ar: "الأثر العملي عليه: ما الذي يتغيّر في سيولته وفي جدوله وفي مهلة موردّيه.",
              en: "The practical effect on him: what changes in his cash flow, his schedule and his suppliers’ deadlines.",
            },
            rationale: {
              ar: "هذا هو السؤال الحقيقي وراء غضبه. المقاول لا يسأل عن الجلسة بل عن رواتب ورشته. من يجيب عن الأثر قبل أن يُسأل عنه يكسب ما لا يكسبه أي اعتذار.",
              en: "This is the real question behind his anger. A contractor is not asking about a hearing; he is asking about his crew’s wages. Answering the effect before being asked earns what no apology earns.",
            },
          },
          {
            id: "r3",
            label: {
              ar: "السبب في جملة واحدة، دون تحميل المسؤولية لأحد ودون تفاصيل إجرائية.",
              en: "The reason in one sentence, without blaming anyone and without procedural detail.",
            },
            rationale: {
              ar: "السبب يأتي ثالثًا لأنه يهمّك أنت أكثر ممّا يهمّه هو. وجملة واحدة تكفي: الشرح المطوّل يُسمع تبريرًا، وتحميل المسؤولية للمحكمة أو للخصم يُسمع تهرّبًا.",
              en: "The reason comes third because it matters more to you than to him. One sentence is enough: a long explanation reads as justification, and blaming the court or the opponent reads as evasion.",
            },
          },
          {
            id: "r4",
            label: {
              ar: "ما ستفعله أنت خلال هذين الشهرين، بفعل محدّد وتاريخ.",
              en: "What you will do during those two months, with a specific action and a date.",
            },
            rationale: {
              ar: "التأجيل يُشعر الموكّل بأن ملفه توقّف. تسمية عمل حقيقي بتاريخ — تبليغ، مذكّرة، طلب مستندات — تعيد إليه الإحساس بأن شيئًا يتحرّك حتى لو كانت المحكمة ساكنة.",
              en: "An adjournment makes a client feel his file has stopped. Naming real work with a date — service, a memorandum, a document request — restores the sense that something is moving even while the court is still.",
            },
          },
          {
            id: "r5",
            label: {
              ar: "ما هو مطلوب منه، ومتى ستتّصل به مرّة أخرى حتى لو لم يستجدّ شيء.",
              en: "What is required from him, and when you will call again even if nothing new happens.",
            },
            rationale: {
              ar: "الإقفال هو ما يمنع مكالمة القلق بعد أسبوعين. «سأتّصل يوم الخامس حتى لو لم يتغيّر شيء» جملة تُنهي المطاردة، وتُحوّل الصمت من علامة إهمال إلى موعد متّفق عليه.",
              en: "The close is what prevents the anxious call two weeks later. “I will call on the fifth even if nothing has changed” ends the chasing and turns silence from a sign of neglect into an agreed appointment.",
            },
          },
        ],
      },
      {
        id: "act.cc.06.3",
        kind: "fill_blank",
        skillId: "skill.expectation-management",
        secondarySkillIds: ["skill.plain-explanation", "skill.avoiding-guarantees"],
        stage: 3,
        weight: 1,
        prompt: {
          ar: "أكمل الرسالة بالصيغ التي تلتزم بما تملكه فقط. في كل فراغ خيار يبدو أقوى وأكثر طمأنة — وهو الفخّ.",
          en: "Complete the message with the wording that commits you only to what you own. Each gap offers a stronger, more reassuring option — that is the trap.",
        },
        hint: {
          ar: "قبل كل خيار اسأل: لو تأخّرت المحكمة شهرين، هل تبقى هذه الجملة صحيحة أم تتحوّل إلى وعد أخلفتُه؟",
          en: "Before each choice ask: if the court runs two months late, does this sentence stay true, or does it become a promise I broke?",
        },
        template: {
          ar: "«سأودع اللائحة {{0}} الخميس الرابع عشر من أيار — هذه خطوة بيدي. أمّا موعد الجلسة الأولى فيُحدَّد عادةً {{1}} من تاريخ الإيداع، وهو {{2}}. سأتّصل بك يوم الحادي والعشرين من أيار لأخبرك بما استجدّ.»",
          en: "“I will file the statement of claim {{0}} Thursday 14 May — that step is in my hands. The first hearing is usually listed {{1}} of filing, and that {{2}}. I will call you on 21 May to tell you where we stand.”",
        },
        blanks: [
          {
            id: "b0",
            options: [
              { ar: "بحلول", en: "by" },
              { ar: "خلال", en: "within" },
              { ar: "تقريبًا حول", en: "around about" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "«بحلول» تعني ذلك اليوم أو قبله، وهي الصيغة الصحيحة ليوم نهائي واحد تملك أنت الوفاء به. «خلال» تحتاج مدّة لا تاريخًا، و«تقريبًا حول» تُفرِغ الالتزام من مضمونه: الموكّل يقرأها «الخميس» وأنت تقصد «الخميس أو الاثنين».",
              en: "“By” means that day or earlier — the right form for a single final day you control. “Within” needs a period, not a date, and “around about” hollows the commitment out: he reads “Thursday” while you mean “Thursday or Monday”.",
            },
          },
          {
            id: "b1",
            options: [
              { ar: "خلال ستة إلى عشرة أسابيع", en: "within six to ten weeks" },
              { ar: "بعد ستة أسابيع بالضبط", en: "exactly six weeks later" },
              { ar: "في أقرب وقت ممكن", en: "as soon as possible" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "المدى يحتمل الواقع؛ الرقم الواحد ينكسر عليه. «بعد ستة أسابيع بالضبط» تصنع تاريخًا لا تملكه ثم تُقتبس في وجهك. و«في أقرب وقت ممكن» تعبير عن نيّة لا عن مدّة: يسمعها الموكّل «أسبوعين» وتقصد بها «حين تُحدّد المحكمة».",
              en: "A range absorbs reality; a single number breaks against it. “Exactly six weeks later” invents a date you do not own and will be quoted back at you. “As soon as possible” states an intention, not a period: he hears “a fortnight”, you mean “whenever the court lists it”.",
            },
          },
          {
            id: "b2",
            options: [
              { ar: "موعد لا أملك أنا تحديده", en: "a date I do not control" },
              { ar: "موعد أضمن لك التزام المحكمة به", en: "a date I guarantee the court will keep" },
              { ar: "موعد سيتأخّر على الأرجح كالعادة", en: "a date that will probably slip, as always" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "الخيار الثاني ضمان صريح لأمر خارج عن سيطرة أي محامٍ، وهو خطأ يوقف التقييم عند حدّه الأدنى مهما حسنت بقيّة الرسالة. والثالث صادق ظاهريًّا لكنه يبني عند الموكّل توقّعًا بالفشل ويجعل مؤسسة القضاء نفسها تبدو عبثية — وهذا يضرّ بقرارك المهني حين تنصحه لاحقًا بالتقاضي. الفصل الهادئ بين ما تملكه وما لا تملكه هو الصيغة الوحيدة التي تصمد.",
              en: "The second is an express guarantee about something no lawyer controls, and it caps the assessment at its floor however good the rest of the message is. The third sounds candid but trains the client to expect failure and paints the courts as pointless — which undercuts your own advice when you later recommend litigation. The calm separation of what you own from what you do not is the only wording that holds.",
            },
          },
        ],
      },
      {
        id: "act.cc.06.4",
        kind: "short_written",
        skillId: "skill.expectation-management",
        secondarySkillIds: ["skill.client-follow-up", "skill.plain-explanation"],
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.client-response.v1",
        weight: 2,
        minChars: 280,
        context: {
          ar: [
            "علمت اليوم أن الخبير الهندسي في ملف زياد نعمة لن يودع تقريره قبل خمسة أسابيع إضافية.",
            "كنتَ قد قدّرت له في اليوم صفر مدّة ثمانية إلى أربعة عشر شهرًا حتى الحكم، وأتعابًا على ثلاث مراحل.",
            "التأخير يعني مرحلة إضافية من المتابعة، وأتعابًا إضافية لم تكن في العرض الأصلي.",
            "زياد لم يتّصل بعد ولا يعلم شيئًا.",
          ],
          en: [
            "You learned today that the engineering expert in Ziad Neama’s matter will not file his report for another five weeks.",
            "On day zero you estimated eight to fourteen months to judgment and a fee in three stages.",
            "The delay means an extra stage of follow-up work and a fee that was not in the original proposal.",
            "Ziad has not called and knows nothing yet.",
          ],
        },
        prompt: {
          ar: "اكتب الرسالة التي ترسلها اليوم (٩٠–١٣٠ كلمة). ابدأ بالخبر وأثره، وصحّح المدى الزمني وشرطه، وسمِّ الأتعاب الإضافية برقم أو بمدى قبل أن تنشأ، واختم بخطوة تملكها بتاريخ وبموعد تواصلك التالي.",
          en: "Write the message you send today (90–130 words). Lead with the news and its effect, correct the time range and its condition, name the additional fee as a number or a range before it accrues, and close with a step you own with a date and your next contact point.",
        },
        modelAnswer: {
          ar: [
            "«صباح الخير أستاذ زياد. خبر يجب أن تعرفه اليوم: الخبير أبلغ المحكمة أنه يحتاج خمسة أسابيع إضافية لإيداع تقريره.»",
            "«الأثر عليك: التقدير الذي أعطيتك إياه — ثمانية إلى أربعة عشر شهرًا — يصبح عشرة إلى ستّة عشر. لا يتغيّر شيء آخر في الملف، ولا يتأثّر الحجز القائم.»",
            "«الأثر على الأتعاب: هذه المدّة تضيف متابعة لم تكن في العرض. تقديري لها بين ثمانمئة وألف ومئتين، ولن أباشرها قبل موافقتك الكتابية.»",
            "«ما بيدي: سأودع خلال أسبوع طلبًا بتحديد مهلة قصوى للخبير، وسأرسل لك نسخة منه يوم الإيداع.»",
            "«سأتّصل بك يوم الثالث من الشهر المقبل بتحديث، حتى لو لم يستجدّ شيء. وهذا التقدير قائم على ألّا يطلب الخبير تمديدًا ثانيًا؛ إن طلبه أخبرتك في اليوم نفسه.»",
          ],
          en: [
            "“Good morning, Mr Ziad. Something you need to know today: the expert has told the court he needs five more weeks to file his report.”",
            "“The effect on you: the estimate I gave you — eight to fourteen months — becomes ten to sixteen. Nothing else in the matter changes, and the attachment already in place is unaffected.”",
            "“The effect on fees: this period adds follow-up work that was not in the proposal. I put it between eight hundred and one thousand two hundred, and I will not start it without your written approval.”",
            "“What is in my hands: within a week I will file an application to set an outside deadline for the expert, and I will send you a copy the day it goes in.”",
            "“I will call you on the third of next month with an update, even if nothing has changed. This estimate assumes the expert does not seek a second extension; if he does, you will hear from me the same day.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«أستاذ زياد، أعتذر عن التأخير لكن الأمر ليس بيدنا إطلاقًا. الخبراء عندنا لا يلتزمون بالمهل والمحكمة لا تفعل شيئًا.»",
              "«على كل حال لا تقلق، الملف قوي وسنصل إلى نتيجة جيدة في النهاية بإذن الله.»",
              "«سنتفاهم على أي كلفة إضافية لاحقًا، لا تشغل بالك بهذا الآن. نبقى على تواصل.»",
            ],
            en: [
              "“Mr Ziad, apologies for the delay but it is entirely out of our hands. Experts here never keep to deadlines and the court does nothing about it.”",
              "“In any case, don’t worry — the file is strong and we will get a good result in the end, God willing.”",
              "“We can sort out any extra cost later, don’t trouble yourself with it now. We’ll stay in touch.”",
            ],
          },
          whatIsWrong: {
            ar: "أربعة أخطاء تُدفع كلّها من العلاقة. الرسالة تبدأ بالاعتذار وبتحميل المسؤولية للنظام بدل أن تبدأ بالخبر وأثره على سيولة زياد. «الملف قوي وسنصل إلى نتيجة جيدة» وعد ضمني بالنتيجة يوقف التقييم عند حدّه الأدنى. تأجيل رقم الأتعاب إلى «لاحقًا» يضمن نزاعًا: بعد خمسة أسابيع يكون العمل قد أُنجز والفاتورة مفاجأة. و«نبقى على تواصل» ليست خطوة: لا فعل ولا مالك ولا تاريخ، فتبقى المطاردة على عاتق الموكّل.",
            en: "Four failures, all paid for out of the relationship. It opens with an apology and with blaming the system instead of the news and its effect on Ziad’s cash flow. “The file is strong and we will get a good result” is an implied promise of outcome that caps the assessment at its floor. Deferring the fee figure to “later” guarantees a dispute: in five weeks the work will be done and the invoice will be a surprise. And “we’ll stay in touch” is not a step — no action, no owner, no date — so the chasing stays the client’s job.",
          },
        },
      },
      {
        id: "act.cc.06.5",
        kind: "reflection",
        skillId: "skill.expectation-management",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "فكّر في آخر موكّل غضب منك. هل كان غضبه من نتيجة، أم من توقّع لم يصحّحه أحد في حينه؟ وفي أي أسبوع بالتحديد كان يمكن أن تصحّحه؟",
          en: "Think of the last client who was angry with you. Was he angry about a result, or about an expectation nobody corrected in time? In which week exactly could you have corrected it?",
        },
        followUp: {
          ar: "ما الذي منعك من إرسال تلك الرسالة في ذلك الأسبوع؟ اكتب السبب الحقيقي، لا السبب المهذّب.",
          en: "What stopped you from sending that message that week? Write the real reason, not the polite one.",
        },
      },
      {
        id: "act.cc.06.6",
        kind: "best_response",
        skillId: "skill.fee-conversations",
        secondarySkillIds: ["skill.expectation-management"],
        stage: 3,
        weight: 2,
        context: {
          ar: [
            "الموكّلة رانيا عابد، مؤسّسة منصّة تجارة إلكترونية، تحتاج مراجعة اتفاقية مساهمين قبل إغلاق جولة تمويل خلال ثمانٍ وأربعين ساعة.",
            "أنت الشريك المسؤول، وجدولك مزدحم. يمكنك إنجاز المراجعة بنفسك، أو تكليف محامٍ مبتدئ في المكتب بمراجعة أولية تحت إشرافك.",
          ],
          en: [
            "Client Rania Abed, founder of an e-commerce platform, needs a shareholders’ agreement reviewed before a funding round closes in forty-eight hours.",
            "You are the responsible partner, and your schedule is packed. You could do the review yourself, or assign a junior lawyer at the firm to a first pass under your supervision.",
          ],
        },
        prompt: {
          ar: "ما أفضل طريقة للتعامل مع هذا الضغط الزمني؟",
          en: "What is the best way to handle this time pressure?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«أمامك خياران وأنا أعرضهما عليك بوضوح: أراجعها بنفسي شخصيًّا خلال يومين بسعري المعتاد وبعمق أكبر، أو يبدأ زميل أصغر مراجعة أولية اليوم بسعر أقلّ ثم أراجع خلاصته أنا، وهذا أسرع لكن أقلّ تفصيلًا في القراءة الأولى. أيّهما يناسب مهلتك؟»",
              en: "“You have two options, and I’ll set them out clearly: I review it myself over two days at my usual rate, with deeper coverage; or a junior colleague does a first pass today at a lower rate and I review his findings, which is faster but less detailed on the first read. Which suits your deadline?”",
            },
            correct: true,
            rationale: {
              ar: "يعرض الفرق فعلًا لا شكلًا: من يقوم بالعمل، وماذا يعني ذلك للسرعة والعمق والسعر، ثم يترك القرار لصاحبة الملف بدل أن يتّخذه هو بصمت. هذا ما يحوّل ضغط الوقت إلى قرار تجاري تملكه رانيا، لا مقايضة خفية تتحمّل نتيجتها دون أن تعرفها.",
              en: "It lays out a real difference, not a cosmetic one: who does the work, and what that means for speed, depth and price — then leaves the decision to the client instead of making it silently. This turns time pressure into a business decision Rania owns, not a hidden trade-off she bears the consequences of without knowing it existed.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "يُكلّف المحامي المبتدئ بالمراجعة كاملةً دون إخبار رانيا، ويرسل لها الملاحظات بتوقيعه هو ليصل الردّ في الوقت.",
              en: "He assigns the junior lawyer the whole review without telling Rania, and sends her the comments under his own name to meet the deadline.",
            },
            rationale: {
              ar: "هذا هو بالضبط ما يجب تجنّبه: تخفيض جودة الخدمة بصمت تحت ضغط الوقت، مع بقاء السعر والاسم على الرسالة كما لو أن شيئًا لم يتغيّر. رانيا تدفع لخبرة شريك وتحصل على مراجعة أولية دون أن تعرف ذلك أو توافق عليه.",
              en: "This is exactly what should be avoided: quietly downgrading the service under time pressure while the price and the name on the message stay as if nothing changed. Rania is paying for a partner’s expertise and receiving a junior first pass without knowing it, or agreeing to it.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "يراجعها بنفسه كاملةً بسعره المعتاد، دون أن يذكر لها أن خيارًا أسرع وأرخص كان متاحًا عبر زميل مبتدئ.",
              en: "He reviews it himself in full at his usual rate, without mentioning that a faster, cheaper route through a junior colleague was available.",
            },
            rationale: {
              ar: "قد يكون هذا خيارًا مشروعًا فعلًا لملف بهذا الحجم، لكنه يُتّخذ نيابةً عن رانيا دون علمها بوجود بديل، وهي على وشك إغلاق جولة تمويل قد يهمّها فيها معرفة كل خيار يمسّ سيولتها هذا الأسبوع تحديدًا.",
              en: "This may genuinely be the right choice for a file of this size, but it is made on Rania’s behalf without her knowing an alternative existed — and she is about to close a funding round, where knowing every option affecting her cash this week specifically may matter to her.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "يعتذر عن عدم القدرة على إنجاز المراجعة ضمن هذه المهلة، دون أن يقترح أي بديل داخل المكتب.",
              en: "He apologises that the review cannot be done within this deadline, without suggesting any alternative within the firm.",
            },
            rationale: {
              ar: "صادق لكنه غير مكتمل: توقّف عند العائق الأول دون البحث عن حلّ داخل موارد متاحة فعلًا. رانيا تُترك تبحث عن مكتب آخر تحت ضغط ثمانٍ وأربعين ساعة، بينما كان الحلّ موجودًا داخل المكتب نفسه.",
              en: "Honest but incomplete: it stops at the first obstacle without searching for a solution within resources that actually exist. Rania is left hunting for another firm under a forty-eight-hour deadline, while the solution was available inside the same office.",
            },
          },
        ],
      },
    ],
    summaryCard: {
      id: "card.cc.06",
      title: {
        ar: "عقد التوقّع الخماسي",
        en: "The Five-Part Expectation Contract",
      },
      whatYouLearned: {
        ar: [
          "لكل ملف ثلاثة محاور يقيسك عليها الموكّل: الوقت، الكلفة، النتيجة. الصمت عن أحدها يملؤه هو بأفضل الفروض.",
          "الفصل بين ما تملكه وما لا تملكه ليس تنصّلًا؛ إنه ما يجعل التزاماتك قابلة للتصديق.",
          "المدى يحتمل الواقع، والرقم الواحد ينكسر عليه ثم يُقتبس في وجهك.",
          "الخبر السيّئ يشيخ بسرعة: تأخيره أسبوعًا يحوّل مشكلة في الملف إلى مشكلة فيك.",
        ],
        en: [
          "Every matter has three axes the client measures you on: time, cost, outcome. Silence on any one is filled by his most optimistic guess.",
          "Separating what you own from what you do not is not evasion; it is what makes your commitments believable.",
          "A range absorbs reality; a single number breaks against it and is then quoted back at you.",
          "Bad news ages fast: holding it a week turns a problem in the file into a problem with you.",
        ],
      },
      framework: {
        name: {
          ar: "عقد التوقّع: افصل · مدِّد · اشترط · راجِع · وثّق",
          en: "The Expectation Contract: Separate · Widen · Condition · Review · Record",
        },
        steps: [
          {
            ar: "افصل — قل بوضوح ما هو بيدك (الإيداع، المذكّرة، الاتصال) وما ليس بيدك (الجلسة، الخبير، الخصم).",
            en: "Separate — state plainly what is in your hands (filing, drafting, calling) and what is not (listings, experts, the other side).",
          },
          {
            ar: "مدِّد — أعطِ مدى لا نقطة، في الوقت وفي الكلفة معًا. «ستة إلى عشرة» لا «ستة».",
            en: "Widen — give a range, not a point, on time and cost alike. “Six to ten”, never “six”.",
          },
          {
            ar: "اشترط — سمِّ العامل الواحد الذي يقوم عليه التقدير: «ما لم يُدخلوا طرفًا ثالثًا.»",
            en: "Condition — name the one factor the estimate rests on: “unless they join a third party”.",
          },
          {
            ar: "راجِع — حدّد تاريخ إعادة التقدير مسبقًا، والتزم به حتى لو لم يستجدّ شيء.",
            en: "Review — fix the date you will re-estimate in advance, and keep it even when nothing has changed.",
          },
          {
            ar: "وثّق — أرسل ما اتُّفق عليه شفهيًّا في رسالة خلال ٤٨ ساعة. ما لا يُكتب يصير كلمتك ضد كلمته.",
            en: "Record — put what was agreed orally into a message within 48 hours. What is not written becomes your word against his.",
          },
        ],
      },
      rememberThis: {
        ar: "الموكّل يسامح التأخير الذي أخبرتَه به، ولا يسامح التأخير الذي اكتشفه بنفسه.",
        en: "A client forgives the delay you told him about; he does not forgive the delay he discovered on his own.",
      },
      useItTomorrow: {
        ar: "افتح ملفًا واحدًا لم تراجع تقديره منذ شهر، وأرسل ثلاثة أسطر: أين نحن، المدى الجديد وشرطه، وتاريخ رسالتك التالية. أرسلها حتى لو لم يتغيّر شيء.",
        en: "Open one matter whose estimate is a month old and send three lines: where we are, the new range and its condition, and the date of your next message. Send it even if nothing has changed.",
      },
    },
    targetLevel: 3,
    sourceIds: [
      "src.legal-project-management",
      "src.client-centered-law-firm",
      "src.managing-professional-service-firm",
      "src.fire-proof",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 07 — "Do you guarantee I'll win?"
  // =========================================================================
  {
    id: "unit.cc.07",
    chapterId: "ch.cc.setting-expectations",
    order: 7,
    title: {
      ar: "«هل تضمن لي أنني سأربح؟»",
      en: "“Do You Guarantee I’ll Win?”",
    },
    subtitle: {
      ar: "لا تُجب بنعم، ولا تكتفِ بلا. حوّل السؤال إلى جواب يستطيع الموكّل أن يقرّر على أساسه",
      en: "Do not answer yes, and do not stop at no. Turn the question into an answer he can decide on.",
    },
    primarySkillId: "skill.avoiding-guarantees",
    skillIds: [
      "skill.avoiding-guarantees",
      "skill.expectation-management",
      "skill.plain-explanation",
      "skill.trust-building",
      "skill.professional-ethics",
    ],
    stage: 4,
    estimatedMinutes: 12,
    steps: [
      {
        kind: "hook",
        id: "s.cc.07.hook",
        text: {
          ar: "«هل تضمن لي؟» ليس سؤالًا عن القانون. إنه سؤال عن الخوف. وكل جواب يتجاهل الخوف يُسمع إمّا وعدًا وإمّا تهرّبًا.",
          en: "“Do you guarantee it?” is not a question about law. It is a question about fear. Any answer that ignores the fear is heard either as a promise or as evasion.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.cc.07.why",
        text: {
          ar: "الضمان يشتري لك توقيعًا اليوم ويكلّفك الموكّل والسمعة والمسؤولية بعد سنة. وهو أيضًا يُسكِت الموكّل: مَن وُعد بالربح يتوقّف عن سماع الأخبار السيّئة.",
          en: "A guarantee buys you a signature today and costs you the client, your standing and your liability a year on. It also silences him: a client promised a win stops listening to bad news.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.cc.07.goals",
        goals: {
          ar: [
            "أن ترفض الضمان بجملة صريحة واحدة، وأن تكرّر الرفض بالوضوح نفسه حين يعود السؤال بصيغة أخرى.",
            "أن تتعرّف على الضمان الضمني في عباراتك المعتادة: «الوضع ممتاز»، «لا تقلق»، «هذه الملفات تُربح دائمًا».",
            "أن تحوّل السؤال إلى خمسة عناصر: ما هو قويّ، ما هو ضعيف، ما هو مجهول، على ماذا يتوقّف، وما الذي بيد الموكّل.",
            "أن تستبدل ما لا تملكه بالتزامات تملكها فعلًا، بتواريخ ووتيرة تواصل معلومة.",
          ],
          en: [
            "Refuse the guarantee in one express sentence, and refuse it with the same clarity when the question returns in another form.",
            "Recognise the implied guarantee inside your habitual phrases: “it looks excellent”, “don’t worry”, “these cases always succeed”.",
            "Convert the question into five parts: what is strong, what is weak, what is unknown, what it turns on, and what the client can do.",
            "Trade what you do not own for commitments you do, with dates and a stated frequency of contact.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.cc.07.lesson",
        title: {
          ar: "لماذا يُعطى الضمان، وماذا يكلّف",
          en: "Why guarantees get given, and what they cost",
        },
        body: {
          ar: [
            "لا أحد يعطي ضمانًا عن جهل. يُعطى تحت ضغط: موكّل جاهز للتوقيع، ومحامٍ آخر وعده، وخوف من أن تبدو الصراحة ترددًا.",
            "لكن الضمان لا يُبنى على معرفة، بل على أمور لا يملكها أحد: شهادة من لم تسمعه بعد، مستند لم تره، تقدير قاضٍ، وسلوك خصم.",
            "الأخطر ليس كلمة «أضمن». الأخطر عبارات لا تحتوي عليها: «الوضع ممتاز»، «اطمئن»، «فرصتنا ثمانون بالمئة». تُقال تشجيعًا وتُقتبس التزامًا.",
            "وللضمان ثمن ثالث لا ينتبه إليه أحد: مَن وُعد بالربح يكفّ عن الإصغاء. لن يقبل تسوية جيدة، ولن يصدّق تحذيرًا، وسيقرأ كل خبر سيّئ خيانةً.",
            "والبديل ليس «لا أعرف». الموكّل لا يدفع لمن يقول لا أعرف؛ يدفع لمن يرسم له خريطة.",
            "الخريطة خمسة عناصر: ما هو قويّ في ملفك، ما هو ضعيف، ما هو مجهول اليوم، على ماذا تتوقّف النتيجة، وما الذي بيدك أنت هذا الأسبوع.",
            "العنصر الخامس هو ما يحوّل الصراحة من خذلان إلى شراكة: الموكّل الذي يملك دورًا يتوقّف عن طلب الضمان.",
            "وحين يخبرك أن محاميًا آخر ضمن له: لا تهاجم أحدًا. اشرح ما الذي يجعل أي وعد مستحيلًا، ودعه هو يستنتج.",
          ],
          en: [
            "Nobody guarantees out of ignorance. It happens under pressure: a client ready to sign, another lawyer who promised, and the fear that candour will look like hesitation.",
            "But a guarantee rests on nothing you know — on a witness you have not heard, a document you have not seen, a judge’s assessment and an opponent’s behaviour.",
            "The dangerous part is not the word “guarantee”. It is the phrases that avoid it: “it looks excellent”, “rest easy”, “we’re at eighty per cent”. Said as encouragement, quoted back as a commitment.",
            "There is a third cost nobody notices: a client promised a win stops listening. He will refuse a good settlement, disbelieve a warning, and read every bad development as betrayal.",
            "The alternative is not “I don’t know”. Clients do not pay for “I don’t know”; they pay for a map.",
            "The map has five parts: what is strong in your file, what is weak, what is unknown today, what the result turns on, and what is in your hands this week.",
            "The fifth part is what turns candour from a let-down into a partnership: a client with a role of his own stops asking for guarantees.",
            "And when he tells you another lawyer guaranteed it — attack no one. Explain what makes any promise impossible and let him draw the conclusion.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.cc.07.visual",
        title: {
          ar: "خمسة بدل الضمان",
          en: "Five instead of a guarantee",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "١ — ما هو قويّ", en: "1 — What is strong" },
            detail: {
              ar: "سمِّ الوقائع التي تخدمه تحديدًا ولماذا: «تسجيلك أسبق بثلاث سنوات، وهذا موثّق بتاريخ رسمي.» لا «ملفك قوي».",
              en: "Name the specific facts that help and why: “your registration predates theirs by three years, and that has an official date.” Not “your file is strong”.",
            },
            tone: "positive",
          },
          {
            label: { ar: "٢ — ما هو ضعيف", en: "2 — What is weak" },
            detail: {
              ar: "قُله أنت قبل أن يقوله الخصم أو القاضي. الضعف الذي يسمعه الموكّل منك أولًا يبقى مشكلة تُدار، لا صدمة تُنهي الثقة.",
              en: "Say it before the other side or the judge does. A weakness he hears from you first stays a problem to manage, not a shock that ends the trust.",
            },
            tone: "negative",
          },
          {
            label: { ar: "٣ — ما هو مجهول اليوم", en: "3 — What is unknown today" },
            detail: {
              ar: "ما لا يعرفه أحد بعد، ومتى يصبح معلومًا: «لا نعرف منذ متى يستعملون الاسم. نعرف ذلك بعد ردّهم.»",
              en: "What nobody knows yet, and when it becomes known: “we don’t know how long they have used the name. We will after their reply.”",
            },
            tone: "neutral",
          },
          {
            label: { ar: "٤ — على ماذا يتوقّف", en: "4 — What it turns on" },
            detail: {
              ar: "عاملان أو ثلاثة تحرّك النتيجة فعلًا، لا قائمة طويلة: أسبقية الاستعمال، وجود التباس فعلي، وسلوك الخصم بعد الإنذار.",
              en: "The two or three variables that actually move the result, not a long list: priority of use, real confusion, and how they behave after the demand.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "٥ — ما الذي بيدك أنت", en: "5 — What is in your hands" },
            detail: {
              ar: "مهمّتان أو ثلاث للموكّل هذا الأسبوع. الموكّل الذي يملك دورًا يكفّ عن طلب الضمان، لأنه لم يعد متفرّجًا.",
              en: "Two or three tasks for the client this week. A client with a role stops asking for guarantees, because he is no longer a spectator.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.cc.07.worked",
        strong: {
          label: {
            ar: "الجواب من محامٍ رفض الضمان وأعطى خريطة",
            en: "The answer from a lawyer who refused the guarantee and gave a map",
          },
          text: {
            ar: [
              "«لا أستطيع أن أضمن لك النتيجة، ولن أفعل — لا في هذا الملف ولا في غيره. وأفهم تمامًا لماذا تسأل: أنت تقرّر أين تضع مالك ووقتك.»",
              "«لكن دعني أعطيك ما هو أنفع من الضمان. القويّ في ملفك: تسجيلك أسبق بثلاث سنوات، وهذا موثّق بتاريخ رسمي لا يُنازَع فيه.»",
              "«الضعيف: لا نملك حتى الآن دليلًا على أن زبونًا واحدًا التبس عليه الأمر. والمجهول: منذ متى يستعملون الاسم؟ نعرفه بعد ردّهم على الإنذار.»",
              "«يتوقّف الأمر على أمرين: أسبقية الاستعمال لا التسجيل وحده، وسلوكهم بعد الإنذار. وبيدك أنت شيئان هذا الأسبوع: أحضر لي كل فاتورة تحمل الاسم قبل ٢٠١٩، وصوّر واجهتهم بتاريخ اليوم.»",
            ],
            en: [
              "“I cannot guarantee the outcome, and I will not — not in this matter or any other. And I understand exactly why you ask: you are deciding where to put your money and your time.”",
              "“But let me give you something more useful than a guarantee. What is strong: your registration predates theirs by three years, and that carries an official date nobody can dispute.”",
              "“What is weak: so far we have no evidence that a single customer was actually confused. What is unknown: how long they have used the name. We learn that from their answer to the demand.”",
              "“It turns on two things: priority of use, not registration alone, and how they behave after the demand. And two things are in your hands this week: bring me every invoice carrying the name before 2019, and photograph their shopfront dated today.”",
            ],
          },
          why: {
            ar: "الرفض صريح وفي الجملة الأولى، فلا يبقى مجال لسماع وعد ضمني. ثم يُقرّ بسبب السؤال بدل أن يعتبره تشكيكًا. ثم تأتي الخمسة: قويّ محدّد بواقعة، وضعف يُقال قبل أن يقوله الخصم، ومجهول له موعد انكشاف، ومتغيّران لا قائمة، ودور للموكّل يخرجه من موقع المتفرّج — وهذا وحده ما يجعله يتوقّف عن طلب الضمان.",
            en: "The refusal is express and comes in the first sentence, so there is no room to hear an implied promise. Then the reason behind the question is acknowledged rather than treated as suspicion. Then the five: a strength anchored to a fact, a weakness said before the opponent says it, an unknown with a date of disclosure, two variables rather than a list, and a role for the client that lifts him out of the spectator seat — which is the one thing that stops him asking for a guarantee.",
          },
        },
        weak: {
          label: {
            ar: "الجواب من محامٍ لا يريد أن يخسر التوقيع",
            en: "The answer from a lawyer who does not want to lose the signature",
          },
          text: {
            ar: [
              "«بصراحة؟ ملفك من أقوى ما مرّ عليّ هذه السنة. تسجيلك أسبق، والقانون معك بوضوح.»",
              "«لا أحبّ أن أقول مضمون مئة بالمئة، لكن لو كنتُ مكانك لما قلقتُ إطلاقًا. نسبتنا ثمانون بالمئة على الأقلّ.»",
              "«اطمئن يا أستاذ عادل، هذه الملفات نربحها دائمًا.»",
            ],
            en: [
              "“Honestly? Yours is one of the strongest files I’ve seen this year. Your registration is earlier and the law is clearly with you.”",
              "“I don’t like to say a hundred per cent guaranteed, but in your position I wouldn’t worry at all. We’re at eighty per cent minimum.”",
              "“Rest easy, Mr Adel — we always win these.”",
            ],
          },
          why: {
            ar: "كلمة «أضمن» لم تُذكر، والوعد أُعطي ثلاث مرّات. «لا أحبّ أن أقول مضمون» جملة يسمعها الموكّل ضمانًا مع تحفّظ شكلي، والرقم يمنحها وقار الحساب. وقد قيل كل هذا قبل رؤية أي مستند من الخصم. وحين يظهر لاحقًا أنهم يستعملون الاسم منذ سبع سنوات، أمام المحامي طريقان: أن يتراجع فيفقد مصداقيته، أو أن يتمسّك فيدفع الموكّل ثمن تمسّكه.",
            en: "The word “guarantee” never appears and the promise is given three times. “I don’t like to say guaranteed” is heard as a guarantee with a formality attached, and the number lends it the dignity of arithmetic. All of it was said before a single document from the other side was seen. When it later emerges that they have used the name for seven years, the lawyer has two roads: retract and lose his credibility, or hold the line and make the client pay for it.",
          },
        },
      },
      { kind: "activity", id: "s.cc.07.a1", activityId: "act.cc.07.1", mode: "quick" },
      { kind: "activity", id: "s.cc.07.a2", activityId: "act.cc.07.2", mode: "guided" },
      { kind: "activity", id: "s.cc.07.a3", activityId: "act.cc.07.3", mode: "guided" },
      { kind: "activity", id: "s.cc.07.a4", activityId: "act.cc.07.4", mode: "independent" },
      { kind: "simulation", id: "s.cc.07.sim", scenarioId: "scn.guarantee-request" },
      { kind: "activity", id: "s.cc.07.a5", activityId: "act.cc.07.5", mode: "independent" },
      { kind: "activity", id: "s.cc.07.a6", activityId: "act.cc.07.6", mode: "independent" },
      { kind: "summary", id: "s.cc.07.summary", summaryCardId: "card.cc.07" },
      {
        kind: "apply_tomorrow",
        id: "s.cc.07.apply",
        task: {
          ar: "اكتب على بطاقة واحدة، لملف واحد تعمل فيه الآن، العناصر الخمسة: قويّ، ضعيف، مجهول، على ماذا يتوقّف، وما بيد الموكّل. جملة واحدة لكل عنصر.",
          en: "On one card, for a matter you are running now, write the five: strong, weak, unknown, what it turns on, and what is in the client’s hands. One sentence each.",
        },
        detail: {
          ar: "ثم اقرأ البطاقة على الموكّل في أول مكالمة. راقب أين يتوقّف ليسأل — عند «الضعيف» غالبًا، وهذه بالضبط هي المحادثة التي كنتَ تؤجّلها.",
          en: "Then read the card to him on your next call. Watch where he stops to ask — usually at “weak”, and that is exactly the conversation you were putting off.",
        },
      },
      {
        kind: "next_mission",
        id: "s.cc.07.next",
        teaser: {
          ar: "رفضتَ الضمان وأعطيت خريطة. يبقى أن ينتهي اللقاء بشيء يمسكه الموكّل بيده. الوحدة القادمة: إقفال اللقاء بخطوات لكل منها مالك وتاريخ — وسطر واحد يمنع مكالمة القلق بعد أسبوعين.",
          en: "You refused the guarantee and gave a map. What remains is ending the meeting with something he can hold. Next unit: closing with steps that each have an owner and a date — and the single line that prevents the anxious call two weeks later.",
        },
      },
    ],
    activities: [
      {
        id: "act.cc.07.1",
        kind: "multiple_choice",
        skillId: "skill.avoiding-guarantees",
        secondarySkillIds: ["skill.trust-building"],
        stage: 4,
        weight: 1,
        context: {
          ar: [
            "عادل بركات، صاحب سلسلة «قهوة الرصيف»، اكتشف مقهى جديدًا يستعمل اسمًا شديد الشبه باسمه.",
            "علامته مسجّلة قبل ثلاث سنوات. لم تطّلع بعد على أي مستند من الطرف الآخر.",
            "يقول قبل أن يوقّع: «أنا لن أدخل معركة قد أخسرها. هل تضمن لي أنني سأوقفهم؟»",
          ],
          en: [
            "Adel Barakat, who owns the Qahwat Al-Raseef café chain, has found a new café using a name very close to his.",
            "His mark was registered three years earlier. You have seen no document from the other side.",
            "Before signing he says: “I’m not walking into a fight I might lose. Do you guarantee you’ll stop them?”",
          ],
        },
        prompt: {
          ar: "ما أفضل جواب في هذه اللحظة؟",
          en: "What is the best answer at this moment?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«لا أضمن نتيجة، ولن أفعل. وأفهم لماذا تسأل — أنت تقرّر أين تضع مالك. دعني أعطيك بدلها ما هو قويّ في ملفك، وما هو ضعيف، وما لا نعرفه بعد، وما بيدك أنت هذا الأسبوع.»",
              en: "“I guarantee no outcome, and I will not. And I understand why you ask — you are deciding where to put your money. Instead, let me give you what is strong in your file, what is weak, what we do not yet know, and what is in your hands this week.”",
            },
            correct: true,
            rationale: {
              ar: "الرفض صريح وفي الجملة الأولى، ثم يُقرّ بسبب السؤال فلا يشعر عادل بأنه أساء الأدب، ثم يُستبدل الضمان بخريطة تُغني عنه. هذا هو الفرق بين محامٍ يرفض ومحامٍ يمتنع: الأول يعطي بديلًا، والثاني يترك الفراغ لمن يملؤه بوعد.",
              en: "The refusal is express and comes first; the reason behind the question is acknowledged so Adel does not feel he overstepped; then the guarantee is replaced by a map that makes it unnecessary. That is the difference between a lawyer who refuses and one who merely declines: the first offers an alternative, the second leaves a vacuum for whoever will fill it with a promise.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«لا أحبّ كلمة ضمان، لكن بصراحة ملفك من أقوى ما مرّ عليّ. تسجيلك أسبق بثلاث سنوات، والأمور واضحة.»",
              en: "“I don’t like the word guarantee, but honestly yours is one of the strongest files I’ve seen. Your registration is three years earlier and it’s all quite clear.”",
            },
            rationale: {
              ar: "ضمان كامل لم تُذكر فيه الكلمة. «لا أحبّ كلمة ضمان» تحفّظ شكلي يزيد الوعد مصداقيةً بدل أن ينقصها. وقد قيل قبل رؤية أي ورقة من الخصم: يكفي أن يثبتوا استعمالًا أسبق على الاسم ليصبح «الوضوح» الذي وعدتَ به سببًا لغضبه منك.",
              en: "A full guarantee with the word left out. “I don’t like the word guarantee” is a formality that makes the promise more credible, not less. And it is given before a single page from the other side has been seen: if they prove earlier use of the name, the “clarity” you promised becomes the reason he is angry with you.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«لا يستطيع أي محامٍ أن يضمن نتيجة. هذا مبدأ معروف في المهنة.»",
              en: "“No lawyer can guarantee a result. That is a well-known principle of the profession.”",
            },
            rationale: {
              ar: "الرفض صحيح والجواب ناقص. القاعدة المهنية جواب عن سؤال لم يطرحه عادل؛ سؤاله كان: هل أخاطر بمالي؟ حين تُترك الخريطة فارغة يذهب إلى المحامي الذي يملأها بوعد — لا لأنه أذكى منك، بل لأنه أجاب.",
              en: "A correct refusal and an incomplete answer. The professional rule answers a question Adel did not ask; his question was whether to risk his money. Leave the map blank and he goes to the lawyer who fills it with a promise — not because that lawyer is cleverer, but because he answered.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«لا أضمن، لكن فرصتنا لا تقلّ عن ثمانين بالمئة في ملفات مشابهة.»",
              en: "“No guarantee, but our chances are at least eighty per cent in comparable matters.”",
            },
            rationale: {
              ar: "الرقم هو الضمان في ثوب الحساب. لا يستند إلى شيء — لم ترَ مستندًا واحدًا من الخصم — ويمنح الموكّل يقينًا زائفًا يبني عليه قراره. وحين تصل النتيجة إلى الجانب الآخر من العشرين بالمئة، لن يسمع احتمالًا تحقّق بل وعدًا أُخلف.",
              en: "The number is a guarantee dressed as arithmetic. It rests on nothing — you have not seen one document from the other side — and gives him a false certainty to decide on. When the result lands on the other side of that twenty per cent, he will not hear a probability that materialised; he will hear a promise broken.",
            },
          },
        ],
      },
      {
        id: "act.cc.07.2",
        kind: "matching",
        skillId: "skill.avoiding-guarantees",
        secondarySkillIds: ["skill.expectation-management"],
        stage: 4,
        weight: 1,
        prompt: {
          ar: "طابق كل عبارة مطمئنة مع ما ستتحوّل إليه في الشهر السادس، حين يُعاد اقتباسها عليك.",
          en: "Match each reassuring phrase with what it becomes in month six, when it is quoted back at you.",
        },
        hint: {
          ar: "لا تسأل «هل قلتُ كلمة ضمان؟» بل «ماذا سيقول الموكّل إنني قلته؟». العبرة بما يُسمع لا بما يُقصد.",
          en: "Do not ask “did I say the word guarantee?” Ask “what will he say I said?” What counts is what was heard, not what was meant.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الجملة المقابلة من قائمة منسدلة بجانب كل عبارة بدل السحب.",
          en: "Choose the matching sentence number from a dropdown beside each phrase instead of dragging.",
        },
        pairs: [
          {
            id: "g1",
            left: { ar: "«الوضع ممتاز، لا تقلق.»", en: "“It looks excellent, don’t worry.”" },
            right: {
              ar: "«قلت لي إن الوضع ممتاز» — تُقتبس بوصفها تقييمًا مهنيًّا للنتيجة، لا تشجيعًا عابرًا.",
              en: "“You told me it looked excellent” — quoted as a professional assessment of the outcome, not as passing encouragement.",
            },
            rationale: {
              ar: "«ممتاز» كلمة بلا مرجع: الموكّل يقيسها على ما يريد سماعه. استبدلها بالواقعة نفسها: «تسجيلك أسبق بثلاث سنوات» — تقول الشيء ذاته دون أن تَعِد بشيء.",
              en: "“Excellent” has no referent: the client calibrates it against what he wants to hear. Replace it with the fact itself — “your registration is three years earlier” — which says the same thing and promises nothing.",
            },
          },
          {
            id: "g2",
            left: { ar: "«فرصتنا ثمانون بالمئة.»", en: "“We’re at eighty per cent.”" },
            right: {
              ar: "رقم بلا أساس يمنح يقينًا زائفًا، ويجعل أي نتيجة أخرى تبدو خطأً منك لا احتمالًا تحقّق.",
              en: "A baseless number that manufactures false certainty and makes any other result look like your error rather than a probability that came true.",
            },
            rationale: {
              ar: "النسبة تفترض إحصاءً لا تملكه، وقاضيًا يتصرّف كمعدّل حسابي. وهي فوق ذلك تُنهي النقاش: مَن سمع ثمانين بالمئة لا يقرأ بقيّة تحليلك.",
              en: "A percentage assumes statistics you do not have and a judge who behaves like an average. Worse, it ends the conversation: a client who hears eighty per cent does not read the rest of your analysis.",
            },
          },
          {
            id: "g3",
            left: { ar: "«هذه الملفات نربحها دائمًا.»", en: "“We always win these.”" },
            right: {
              ar: "تُلغي خصوصية ملفه، فيتوقّف عن ذكر التفاصيل التي تظنّها أنت جانبية وهي مفتاح الملف.",
              en: "It erases what is particular about his file, so he stops mentioning the details you think are peripheral and that are in fact the case.",
            },
            rationale: {
              ar: "ضرر مزدوج: وعد بالنتيجة، وإغلاق لباب المعلومات. الموكّل الذي سمع أن ملفه «كالبقيّة» لن يخبرك بالورقة الغريبة التي وقّعها، لأنه افترض أنها لا تغيّر شيئًا.",
              en: "Double damage: a promise of outcome and a closed information door. A client told his file is “like the rest” will not mention the odd paper he signed, because he assumed it changes nothing.",
            },
          },
          {
            id: "g4",
            left: { ar: "«اطمئن، أنا مسؤول عن الملف.»", en: "“Rest easy — the file is my responsibility.”" },
            right: {
              ar: "خلط بين مسؤوليتك عن العمل ومسؤوليتك عن النتيجة؛ الموكّل يسمع الثانية ويطالبك بها لاحقًا.",
              en: "It blurs responsibility for the work with responsibility for the result; he hears the second and holds you to it later.",
            },
            rationale: {
              ar: "الجملة صحيحة في نصفها: أنت مسؤول عن جودة العمل والمهل والتواصل، لا عن الحكم. سمِّ ما تتحمّله بالضبط، وإلا تحمّلتَ في ذهنه كل شيء.",
              en: "Half of it is true: you are responsible for the quality of the work, the deadlines and the communication — not for the judgment. Name exactly what you carry, or in his mind you carry everything.",
            },
          },
          {
            id: "g5",
            left: { ar: "«إن شاء الله خير، والحقّ لا يضيع.»", en: "“It will be fine, God willing; a right is never lost.”" },
            right: {
              ar: "دعاء يُسمع تقديرًا مهنيًّا حين يخرج من فم المحامي، ويحلّ محلّ التحليل الذي جاء الموكّل من أجله.",
              en: "A blessing that, said by a lawyer, is heard as a professional assessment, and stands in for the analysis he came for.",
            },
            rationale: {
              ar: "في السياق العربي هذه عبارة اجتماعية طبيعية، ولا مشكلة فيها إلى جانب التحليل. المشكلة أن تحلّ محلّه: حين تكون الجملة الوحيدة عن النتيجة، تصبح هي الوعد.",
              en: "In the Arab context this is ordinary social language and there is nothing wrong with it beside an analysis. The problem is when it replaces one: as the only sentence about the outcome, it becomes the promise.",
            },
          },
        ],
      },
      {
        id: "act.cc.07.3",
        kind: "branching_decision",
        skillId: "skill.avoiding-guarantees",
        secondarySkillIds: ["skill.trust-building", "skill.expectation-management"],
        stage: 4,
        weight: 2,
        context: {
          ar: [
            "اللقاء مستمرّ مع عادل بركات. الملف نفسه: تشابه أسماء المقاهي.",
            "ثلاث لحظات متتالية. كل اختيار يقودك إلى اللحظة التي تليها.",
          ],
          en: [
            "The meeting with Adel Barakat continues. Same matter: the café names.",
            "Three moments in sequence. Each choice takes you into the next.",
          ],
        },
        prompt: {
          ar: "أدِر الحوار إلى نهايته. اختر في كل لحظة ما ستقوله فعلًا، لا ما تعرف أنه الجواب النموذجي.",
          en: "Run the conversation to its end. At each moment choose what you would actually say, not what you know is the model answer.",
        },
        hint: {
          ar: "في كل لحظة اسأل: هل تركتُ فراغًا يستطيع الموكّل أن يملأه بوعد؟ الفراغ لا يبقى فارغًا أبدًا.",
          en: "At each moment ask: have I left a gap the client can fill with a promise? Gaps never stay empty.",
        },
        accessibleAlternative: {
          ar: "الحوار متاح كنصّ متسلسل مع أزرار اختيار، دون أي سحب أو مؤقّت زمني.",
          en: "The dialogue runs as sequential text with choice buttons, with no dragging and no timer.",
        },
        startNodeId: "n1",
        nodes: [
          {
            id: "n1",
            text: {
              ar: "عادل، وقد أخرج دفتر شيكاته ثم أعاده إلى جيبه: «أنا رجل أعمال، لا أدخل معركة قد أخسرها. سؤال واحد وأوقّع: هل تضمن لي أنني سأوقفهم؟»",
              en: "Adel takes out his chequebook, then puts it back in his pocket: “I’m a businessman; I don’t enter a fight I might lose. One question and I sign: do you guarantee you’ll stop them?”",
            },
            choices: [
              {
                id: "c1a",
                label: {
                  ar: "«لا أضمن لك النتيجة ولن أفعل. وأفهم لماذا تسأل: أنت تقرّر أين تضع مالك ووقتك. دعني أعطيك ما هو أنفع من الضمان.»",
                  en: "“I do not guarantee the outcome and I will not. And I understand why you ask: you are deciding where to put your money and your time. Let me give you something more useful than a guarantee.”",
                },
                nextNodeId: "n2",
                quality: "strong",
                rationale: {
                  ar: "رفض صريح لا يحتمل تأويلًا، مقرون بالإقرار بسبب السؤال ووعدٍ ببديل. هذه التركيبة الثلاثية هي ما يمنع الموكّل من تفسير الصراحة ترددًا: أنت لم ترفض فحسب، بل قلت إن لديك ما هو أفضل.",
                  en: "An express refusal that admits no reading, joined to an acknowledgement of why he asked and the promise of an alternative. That trio is what stops candour being read as hesitation: you did not merely refuse, you said you have something better.",
                },
              },
              {
                id: "c1b",
                label: {
                  ar: "«ملفك من أقوى ما مرّ عليّ هذا العام يا أستاذ عادل. اطمئن ووقّع.»",
                  en: "“Yours is one of the strongest files I’ve seen this year, Mr Adel. Rest easy and sign.”",
                },
                nextNodeId: "n2",
                quality: "critical_mistake",
                rationale: {
                  ar: "هذا ضمان كامل رغم خلوّه من كلمة «ضمان»، وهو الشكل الذي يقع فيه المحامون الجادّون. ثلاثة أضرار تقع دفعةً واحدة: أعطيتَ تقييمًا للنتيجة قبل أن ترى ورقة واحدة من الخصم؛ وربطتَ التوقيع بذلك التقييم فصار جزءًا من عقدك في ذهنه؛ وأغلقتَ باب الأخبار السيّئة، فحين يظهر أنهم يستعملون الاسم منذ سبع سنوات لن يكون أمامك إلا التراجع — فتفقد مصداقيتك — أو التمسّك، فيدفع هو الثمن. «اطمئن» ليست كلمة لطيفة هنا؛ إنها الالتزام نفسه.",
                  en: "This is a full guarantee despite containing no such word, and it is the form serious lawyers fall into. Three harms land at once: you assessed the outcome before seeing a single page from the other side; you tied the signature to that assessment, so in his mind it is now part of the retainer; and you closed the door on bad news, so when it emerges they have used the name for seven years you can only retract — losing your credibility — or hold the line, and he pays for it. “Rest easy” is not a kindness here; it is the commitment itself.",
                },
              },
              {
                id: "c1c",
                label: {
                  ar: "«لا يجوز لأي محامٍ أن يضمن نتيجة. هذا مبدأ مهني.» ثم تصمت في انتظار ردّه.",
                  en: "“No lawyer may guarantee a result. It is a professional principle.” Then you wait for his answer.",
                },
                nextNodeId: "n2",
                quality: "weak",
                rationale: {
                  ar: "الرفض في محلّه والجواب معطّل. أجبتَ عن سؤال في آداب المهنة وعادل سأل عن ماله. الصمت بعده يترك فراغًا سيملؤه هو بأسوأ تفسير متاح: إمّا أن الملف ضعيف وأنت تتحاشى قوله، أو أنك تتهرّب من المسؤولية.",
                  en: "The refusal is right and the answer is inert. You answered a question of professional etiquette; Adel asked about his money. The silence that follows leaves a gap he fills with the worst available reading: either the file is weak and you are avoiding saying so, or you are dodging responsibility.",
                },
              },
              {
                id: "c1d",
                label: {
                  ar: "«لا أضمن نتيجة. لكن دعني أشرح لك ما سنقدّمه وما هي المهل والمراحل.»",
                  en: "“I guarantee no outcome. But let me walk you through what we will file and what the stages and deadlines are.”",
                },
                nextNodeId: "n2",
                quality: "acceptable",
                rationale: {
                  ar: "الرفض واضح والانتقال سريع إلى ما تملكه — وهذا نصف الطريق. ما ينقص هو الإقرار بسبب السؤال: عادل خائف على ماله، والقفز إلى الإجراءات يجعله يشعر أن قلقه لم يُسمع، فيعيد طرح السؤال بصيغة أخرى بعد دقائق.",
                  en: "The refusal is clear and you move quickly to what you own — half the distance covered. What is missing is the acknowledgement: Adel is frightened about his money, and jumping to procedure tells him his worry went unheard, so the question returns in another form a few minutes later.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "عادل يميل إلى الأمام: «أفهم. لكنني استشرت محاميًا قبل أسبوع فقال لي إن القضية محسومة لأن تسجيلي أسبق بثلاث سنوات. لماذا أنت متحفّظ إلى هذا الحدّ؟»",
              en: "Adel leans forward: “I understand. But I consulted a lawyer last week who told me the case is settled because my registration is three years earlier. Why are you so guarded?”",
            },
            choices: [
              {
                id: "c2a",
                label: {
                  ar: "«التسجيل الأسبق نقطة قوّة حقيقية وأول ما سنبني عليه. لكن ما يجعل أي وعد مستحيلًا اليوم هو ما لا نعرفه بعد: منذ متى يستعملون الاسم؟ هذا يظهر بعد ردّهم، وقد يغيّر الصورة.»",
                  en: "“The earlier registration is a genuine strength and the first thing we build on. What makes any promise impossible today is what we do not yet know: how long have they used the name? That surfaces after their reply, and it can change the picture.”",
                },
                nextNodeId: "n3",
                quality: "strong",
                rationale: {
                  ar: "تُصدّق ما هو صحيح في كلام الزميل بدل أن تنكره، ثم تسمّي بدقّة الشيء الذي يجعل الوعد مستحيلًا. عادل لم يُطلب منه أن يختار بين محاميَين، بل رأى بنفسه معلومةً ناقصة — والاستنتاج صار استنتاجه هو.",
                  en: "You confirm what is true in the colleague’s point rather than deny it, then name precisely the thing that makes a promise impossible. Adel is not asked to choose between two lawyers; he sees a missing fact for himself — and the conclusion becomes his own.",
                },
              },
              {
                id: "c2b",
                label: {
                  ar: "«إن كان قال ذلك فهو محقّ. التسجيل الأسبق يحسم هذه الملفات عمليًّا.»",
                  en: "“If he said that, he’s right. An earlier registration settles these matters in practice.”",
                },
                nextNodeId: "n3",
                quality: "critical_mistake",
                rationale: {
                  ar: "تبنّي وعد غيرك هو إعطاء الوعد. والأسوأ أنك أعطيته مجّانًا: لم ترَ مستنداتهم، ولا تعرف منذ متى يستعملون الاسم، والأسبقية في التسجيل ليست وحدها ما يُحسم به هذا النوع من النزاع. لحظة انهيار الوعد لن يتذكّر عادل مَن قاله أولًا؛ سيتذكّر أنك أكّدته وأنت مَن قبض الأتعاب.",
                  en: "Adopting someone else’s promise is giving it. Worse, you gave it for free: you have not seen their documents, you do not know how long they have used the name, and priority of registration alone does not decide this kind of dispute. When the promise collapses Adel will not remember who said it first; he will remember that you confirmed it and that you took the fee.",
                },
              },
              {
                id: "c2c",
                label: {
                  ar: "«مَن قال لك هذا لا يعرف كيف تسير هذه الملفات فعلًا. هذا كلام لكسب الموكّلين.»",
                  en: "“Whoever told you that doesn’t know how these matters actually run. That’s talk to win clients.”",
                },
                nextNodeId: "n3",
                quality: "weak",
                rationale: {
                  ar: "قد تكون محقًّا في الجوهر وخاسرًا في اللحظة. حوّلتَ السؤال من «ما الذي يحسم ملفي؟» إلى «أي المحاميَين أصدق؟»، وهي مقارنة لا يستطيع عادل حسمها فيقرّرها بالانطباع — والانطباع يقول إن مَن يهاجم غيره يدافع عن نفسه. وفي سوق تسير فيه التوصيات عبر العائلة والمعارف، فإن التقليل من زميل يصل إليه غالبًا قبل أن تصله الوكالة.",
                  en: "You may be right on the substance and losing in the moment. You turned the question from “what decides my file?” into “which lawyer is more honest?”, a comparison Adel cannot settle, so he settles it on impression — and the impression is that a man who attacks others is defending himself. In a market where referrals travel through family and acquaintance, disparaging a colleague usually reaches him before your engagement letter does.",
                },
              },
            ],
          },
          {
            id: "n3",
            text: {
              ar: "عادل يهزّ رأسه ببطء: «حسنًا. إذا لم يكن هناك ضمان، فماذا أفعل أنا؟ أجلس وأنتظر؟»",
              en: "Adel nods slowly: “All right. If there’s no guarantee, what do I do? Sit and wait?”",
            },
            choices: [
              {
                id: "c3a",
                label: {
                  ar: "«ثلاثة أشياء هذا الأسبوع: أحضر لي كل فاتورة أو إعلان يحمل الاسم قبل ٢٠١٩، وصوّر واجهتهم بتاريخ اليوم، ولا ترسل لهم أي رسالة قبل أن نتكلّم. أرسل لك تقديري المكتوب خلال أسبوع، وأراجعه معك بعد ردّهم.»",
                  en: "“Three things this week: bring me every invoice or advertisement carrying the name before 2019, photograph their shopfront dated today, and send them nothing before we speak. I will send you my written assessment within a week and revisit it with you after their reply.”",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "هنا يُستبدل الضمان بما يمكن الوفاء به فعلًا: مهام محدّدة للموكّل، والتزامات محدّدة عليك بتواريخ، وموعد لإعادة التقدير. الموكّل الذي يملك دورًا يتوقّف عن طلب الضمان لأنه لم يعد متفرّجًا ينتظر خبرًا. ولاحظ التحذير الأخير: منعه من مراسلتهم يحمي الملف من اعتراف عابر.",
                  en: "This is where the guarantee is traded for what can actually be delivered: specific tasks for the client, specific commitments from you with dates, and a point at which the assessment is revisited. A client with a role stops asking for guarantees because he is no longer a spectator waiting for news. Note the last instruction too: stopping him writing to them protects the file from a casual admission.",
                },
              },
              {
                id: "c3b",
                label: {
                  ar: "«لا شيء. اترك الأمر عليّ تمامًا وسأخبرك حين يستجدّ شيء.»",
                  en: "“Nothing. Leave it entirely with me and I’ll tell you when something happens.”",
                },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "تنزع عنه الرافعة الوحيدة التي يملكها بعد أن رفضت أن تعطيه اليقين. النتيجة: موكّل بلا ضمان وبلا دور، وأول خبر يصله سيكون على الأرجح خبرًا سيّئًا. وأنت أيضًا خسرتَ: الفواتير التي كان يستطيع إحضارها هذا الأسبوع هي أقوى دليل على أسبقية الاستعمال.",
                  en: "You strip him of the only lever he has left after refusing him certainty. The result: a client with neither a guarantee nor a role, whose first news will most likely be bad news. You lose too: the invoices he could have brought this week are the strongest evidence of prior use.",
                },
              },
              {
                id: "c3c",
                label: {
                  ar: "«أحضر لي ما لديك من مستندات وأنا أتولّى الباقي.»",
                  en: "“Bring me whatever documents you have and I’ll take care of the rest.”",
                },
                nextNodeId: null,
                quality: "acceptable",
                rationale: {
                  ar: "الاتجاه صحيح والتنفيذ رخو. «ما لديك من مستندات» طلب مفتوح يعود بملف مبعثر أو بلا شيء، لأن عادل لا يعرف ما هو مهمّ. ولا تاريخ ولا موعد مراجعة، فتعود المطاردة إلى موقعها الأول بعد عشرة أيام.",
                  en: "Right direction, loose execution. “Whatever documents you have” is an open request that comes back as a jumble or as nothing, because Adel does not know what matters. And with no date and no review point, the chasing resumes within ten days.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.cc.07.4",
        kind: "short_written",
        skillId: "skill.avoiding-guarantees",
        secondarySkillIds: ["skill.plain-explanation", "skill.expectation-management"],
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.client-response.v1",
        weight: 2,
        minChars: 300,
        context: {
          ar: [
            "بعد أسبوع من اللقاء، تصلك رسالة من عادل بركات.",
            "«أستاذ، زوجتي تسألني كل يوم وأنا لا أعرف بماذا أجيبها. أريد جوابًا واضحًا: هل سنربح أم لا؟»",
            "ما تعرفه اليوم: تسجيله أسبق بثلاث سنوات وموثّق. لا دليل حتى الآن على التباس فعلي لدى أي زبون. لم يردّوا على الإنذار بعد. وقد أحضر عادل فواتير تحمل الاسم تعود إلى ٢٠١٧.",
          ],
          en: [
            "A week after the meeting, a message arrives from Adel Barakat.",
            "“My wife asks me every day and I have nothing to tell her. I want a clear answer: are we going to win or not?”",
            "What you know today: his registration is three years earlier and documented. No evidence yet of any customer actually being confused. They have not answered the demand. And Adel has produced invoices carrying the name going back to 2017.",
          ],
        },
        prompt: {
          ar: "اكتب ردّه (١٠٠–١٤٠ كلمة) باستعمال العناصر الخمسة. لا تعطِ نسبة ولا وعدًا، ولا تقل «لا أعرف» وتتوقّف. اختم بما هو مطلوب منه وبموعد رسالتك التالية.",
          en: "Write your reply (100–140 words) using the five parts. Give no percentage and no promise, and do not stop at “I don’t know”. Close with what is required from him and the date of your next message.",
        },
        modelAnswer: {
          ar: [
            "«صباح الخير أستاذ عادل. سؤالك في محلّه، وسأجيبك بأصدق ما أستطيع: لا أحد يستطيع أن يقول لك إن كنّا سنربح، وأي جواب بنعم سيكون بيعًا لك.»",
            "«ما هو قويّ: تسجيلك أسبق بثلاث سنوات، والفواتير التي أحضرتها تُثبت استعمالًا فعليًّا منذ ٢٠١٧. هذا مزيج جيّد لأنه يجمع الورقة الرسمية بالاستعمال الواقعي.»",
            "«ما هو ضعيف: ليس لدينا حتى الآن زبون واحد يشهد أنه التبس عليه الأمر، وهذه نقطة يستند إليها الخصم عادةً.»",
            "«ما هو مجهول: منذ متى يستعملون الاسم فعلًا. نعرف ذلك من ردّهم على الإنذار.»",
            "«يتوقّف الأمر على أمرين: أسبقية الاستعمال لا التسجيل وحده، وسلوكهم بعد الإنذار — أكثر هذه الملفات تُغلق بتسوية لا بحكم.»",
            "«المطلوب منك هذا الأسبوع: اسأل ثلاثة من زبائنك الدائمين إن سبق أن التبس عليهم المكانان، واكتب ما يقولونه بتاريخه. سأكتب إليك يوم الثلاثاء المقبل بردّهم أو بغيابه.»",
          ],
          en: [
            "“Good morning, Mr Adel. It is a fair question and I will answer it as honestly as I can: nobody can tell you whether we will win, and any answer of yes would be a sale, not advice.”",
            "“What is strong: your registration is three years earlier, and the invoices you brought prove actual use since 2017. That is a good combination, because it pairs the official paper with real trading.”",
            "“What is weak: we do not yet have a single customer who will say he was confused, and that is what the other side usually leans on.”",
            "“What is unknown: how long they have really used the name. Their answer to the demand will tell us.”",
            "“It turns on two things: priority of use rather than registration alone, and how they behave after the demand — most of these matters close by settlement, not judgment.”",
            "“What I need from you this week: ask three of your regulars whether they have ever mixed the two places up, and write down what they say with the date. I will write to you next Tuesday with their reply — or with its absence.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«أستاذ عادل، طمئن زوجتك. وضعنا ممتاز والحقّ معنا بشكل واضح.»",
              "«تسجيلك أسبق منهم بثلاث سنوات، وهذا في العادة كافٍ لحسم مثل هذه النزاعات. لا أحبّ أن أقول مضمون، لكن لو كنتُ مكانك لما قلقت.»",
              "«اتركها عليّ وسأخبرك بأي جديد فور حصوله.»",
            ],
            en: [
              "“Mr Adel, put your wife’s mind at rest. We’re in an excellent position and the right is plainly with us.”",
              "“Your registration is three years earlier, and that is usually enough to settle disputes like this. I don’t like to say guaranteed, but in your place I wouldn’t worry.”",
              "“Leave it with me and I’ll tell you the moment anything new comes up.”",
            ],
          },
          whatIsWrong: {
            ar: "الرسالة تعطي وعدًا بالنتيجة ثلاث مرّات دون أن تستعمل كلمة «أضمن»، و«لا أحبّ أن أقول مضمون» تحفّظ شكلي يقوّي الوعد بدل أن يضعفه. ولا ذكر لأي ضعف — لا شاهد على الالتباس — فحين يثيره الخصم يبدو مفاجأة أخفيتَها. والمجهول الوحيد الحقيقي، أي مدّة استعمالهم للاسم، غائب تمامًا. وليس فيها ما يفعله عادل، فيبقى متفرّجًا يسأل مرّة أخرى بعد أسبوع. أمّا «فور حصوله» فليست موعدًا: تبقي المطاردة عليه.",
            en: "The message promises the outcome three times without using the word “guarantee”, and “I don’t like to say guaranteed” is a formality that strengthens the promise rather than weakening it. No weakness is named — there is no witness to confusion — so when the other side raises it, it looks like a surprise you concealed. The one real unknown, how long they have used the name, is missing altogether. Nothing is asked of Adel, so he stays a spectator and asks again in a week. And “the moment anything comes up” is not a date: the chasing stays his job.",
          },
        },
      },
      {
        id: "act.cc.07.5",
        kind: "reflection",
        skillId: "skill.avoiding-guarantees",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع آخر مرّة قلت فيها لموكّل «لا تقلق» أو «الوضع ممتاز». ما الذي كنت تخشاه في تلك اللحظة: خسارة الموكّل، أم صمتًا محرجًا، أم أن تبدو غير واثق؟",
          en: "Recall the last time you told a client “don’t worry” or “it looks excellent”. What were you afraid of in that moment: losing him, an awkward silence, or looking unsure?",
        },
        followUp: {
          ar: "أعد كتابة تلك الجملة بالعناصر الخمسة، في خمسة أسطر. أيّ عنصر كان الأصعب عليك؟ الأرجح أنه «الضعيف».",
          en: "Rewrite that sentence using the five parts, in five lines. Which part was hardest? Most likely “weak”.",
        },
      },
      {
        id: "act.cc.07.6",
        kind: "best_response",
        skillId: "skill.professional-ethics",
        secondarySkillIds: ["skill.avoiding-guarantees"],
        stage: 4,
        weight: 2,
        context: {
          ar: [
            "موكّلك سامر خير الله يستورد معدّات صناعية. اليوم يطلب منك صياغة عقد توريد بتاريخ يسبق التاريخ الفعلي بثلاثة أشهر، ليتجنّب غرامة تأخير جمركي.",
            "زميلك الأقدم في المكتب يقترح حلًّا وسطًا: «اكتب العقد دون تاريخ محدّد، وخلّيه هو يعبّئه لاحقًا. هيك ما تكون أنت من كتب تاريخًا كاذبًا.»",
          ],
          en: [
            "Your client Samer Khairallah imports industrial equipment. Today he asks you to draft a supply contract dated three months earlier than the real date, to avoid a customs late-penalty.",
            "A more senior colleague at the firm suggests a middle path: “Write the contract with no fixed date, and let him fill it in later. That way you’re not the one who wrote a false date.”",
          ],
        },
        prompt: {
          ar: "ما أفضل ردّ؟",
          en: "What is the best response?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«لا أستطيع أن أصيغ العقد بهذا الشكل، لا بتاريخ سابق ولا بتاريخ مفتوح لهذا الغرض تحديدًا — فالنيّة من ورائه واحدة. دعني أشرح لك المخاطرة الفعلية، ثم نبحث معًا مسارًا قانونيًّا للتعامل مع الغرامة.»",
              en: "“I can’t draft the contract that way — not with an earlier date, and not with an open date for this specific purpose, because the intent behind it is the same either way. Let me walk you through the actual risk, then we look together for a lawful way to deal with the penalty.”",
            },
            correct: true,
            rationale: {
              ar: "يرفض الجوهر لا الصياغة الظاهرية فقط، فيغلق الباب أمام الحلّ «الوسط» الذي يحمل النيّة نفسها بثوب أنظف. ثم يستبدل الرفض بعرض عملي: شرح المخاطرة وبحث بديل مشروع، بدل أن يترك سامر بلا أي طريق.",
              en: "It rejects the substance, not just the visible wording, closing the door on the “middle” fix that carries the same intent in cleaner clothes. The refusal is then paired with something practical: explaining the real risk and searching for a lawful alternative, rather than leaving Samer with no path at all.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "يكتب العقد دون تاريخ محدّد كما اقترح الزميل، لأن هذا لا يُعتبر كذبًا صريحًا من الناحية الشكلية.",
              en: "He drafts the contract with no fixed date as the colleague suggested, since this is not, formally speaking, an outright lie.",
            },
            rationale: {
              ar: "هذا هو الفخّ تحديدًا: صياغة تبدو مدافعة عن نفسها شكليًّا بينما تخدم الغرض المضلّل نفسه — تفادي غرامة عبر إيهام جهة رسمية بتاريخ غير حقيقي. النيّة هي ما يُقاس، لا غياب كلمة أو تاريخ محدّد على الورق.",
              en: "This is exactly the trap: wording that looks formally defensible while serving the very same misleading purpose — evading a penalty by misleading an official body about the real date. It is the intent that gets judged, not the absence of one specific word or date on the page.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "يرفض الطلب فورًا وينهي التمثيل دون أي شرح أو اقتراح بديل.",
              en: "He refuses immediately and ends the representation with no explanation or alternative offered.",
            },
            rationale: {
              ar: "الرفض في محلّه، لكن الإنهاء الصامت يترك سامر يبحث عن محامٍ آخر أكثر استعدادًا للتساهل، دون أن يسمع مرّة واحدة لماذا الطلب خطر عليه هو تحديدًا لا على المكتب فقط. التوقّف عن التمثيل له أصول مهنية تحفظ حقّ الموكّل، لا مجرّد إغلاق الباب.",
              en: "The refusal is right, but a silent exit leaves Samer free to find another lawyer more willing to bend, without ever hearing why the request is risky for him specifically, not just for the firm. Withdrawing from representation has professional steps that protect the client’s interests — it is not simply shutting the door.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "يصيغ العقد بالتاريخ الذي طلبه سامر، لأن هذا النوع من التعديلات شائع ولا يبدو أنه يضرّ أحدًا فعليًّا.",
              en: "He drafts the contract with the date Samer requested, since this kind of adjustment is common and does not seem to actually harm anyone.",
            },
            rationale: {
              ar: "شيوع الممارسة لا يُغيّر طبيعتها: مستند بتاريخ غير حقيقي يُقدَّم لجهة رسمية لتفادي غرامة يعرّض سامر لمساءلة أكبر من الغرامة نفسها، ويعرّض المحامي الذي صاغه لمسؤولية مباشرة عن مستند يعرف أنه مضلِّل.",
              en: "How common a practice is does not change its nature: a document with a false date submitted to an official body to dodge a penalty exposes Samer to consequences worse than the penalty itself, and exposes the lawyer who drafted it to direct responsibility for a document he knew was misleading.",
            },
          },
        ],
      },
    ],
    summaryCard: {
      id: "card.cc.07",
      title: {
        ar: "خمسة بدل الضمان",
        en: "Five Instead of a Guarantee",
      },
      whatYouLearned: {
        ar: [
          "الضمان لا يُعطى عن جهل بل تحت ضغط، وثمنه يُدفع بعد سنة لا اليوم.",
          "الضمان الضمني أخطر من الصريح: «الوضع ممتاز» و«لا تقلق» و«ثمانون بالمئة» تُقتبس كلّها التزامًا.",
          "من وُعد بالربح يتوقّف عن الإصغاء: يرفض التسوية الجيدة، ويقرأ كل خبر سيّئ خيانةً.",
          "بديل الضمان ليس «لا أعرف»، بل خريطة من خمسة عناصر آخرها دور يملكه الموكّل.",
        ],
        en: [
          "Guarantees are not given out of ignorance but under pressure, and the bill arrives a year later, not today.",
          "The implied guarantee is worse than the express one: “it looks excellent”, “don’t worry” and “eighty per cent” are all quoted back as commitments.",
          "A client promised a win stops listening: he refuses a good settlement and reads every bad development as betrayal.",
          "The alternative to a guarantee is not “I don’t know” — it is a five-part map whose last part is a role the client owns.",
        ],
      },
      framework: {
        name: {
          ar: "خمسة بدل الضمان: قويّ · ضعيف · مجهول · متوقّف على · بيدك",
          en: "Five Instead of a Guarantee: Strong · Weak · Unknown · Turns On · Yours",
        },
        steps: [
          {
            ar: "قويّ — الوقائع التي تخدمه، مسمّاة واحدة واحدة ومع سبب قوّتها. لا «ملفك ممتاز».",
            en: "Strong — the facts that help him, named one by one with why they help. Never “your file is excellent”.",
          },
          {
            ar: "ضعيف — ما يضرّ الملف، تقوله أنت أولًا. الضعف الذي يسمعه منك يبقى مشكلة تُدار.",
            en: "Weak — what hurts the file, said by you first. A weakness he hears from you stays a problem to manage.",
          },
          {
            ar: "مجهول — ما لا يعرفه أحد اليوم، ومتى بالضبط يصبح معلومًا.",
            en: "Unknown — what nobody knows today, and exactly when it becomes known.",
          },
          {
            ar: "متوقّف على — العاملان أو الثلاثة التي تحرّك النتيجة فعلًا، لا قائمة تحفّظات.",
            en: "Turns on — the two or three variables that actually move the result, not a list of caveats.",
          },
          {
            ar: "بيدك — مهمّتان أو ثلاث للموكّل هذا الأسبوع، بتواريخ. الدور هو ما يُنهي طلب الضمان.",
            en: "Yours — two or three tasks for the client this week, with dates. The role is what ends the demand for a guarantee.",
          },
        ],
      },
      rememberThis: {
        ar: "مَن يضمن لك النتيجة يبيعك راحة اليوم بثمن غضب الشهر السادس. الصراحة وحدها تبدو ترددًا، والصراحة مع خطّة تبدو كفاءة.",
        en: "Whoever guarantees you a result sells you today’s calm at the price of month six’s anger. Candour alone reads as hesitation; candour with a plan reads as competence.",
      },
      useItTomorrow: {
        ar: "في أول ملف تفتحه غدًا، اكتب العناصر الخمسة في خمسة أسطر قبل أن تتصل بالموكّل، وابدأ المكالمة بالسطر الثاني — الضعيف — قبل أن يسمعه من غيرك.",
        en: "On the first file you open tomorrow, write the five in five lines before you call the client, and start the call with line two — the weakness — before he hears it from someone else.",
      },
    },
    targetLevel: 3,
    sourceIds: [
      "src.client-centered-law-firm",
      "src.they-ask-you-answer",
      "src.thinking-like-a-lawyer",
      "src.rule-of-law",
      "src.selling-the-invisible",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
