import type { DiagnosticDef } from "./types";

/**
 * The onboarding diagnostic. Deliberately short — eight items, ~4 minutes —
 * because its job is to place the learner, not to grade them. It mixes
 * situational judgement, prioritisation, one written response and a Legal
 * English placement item so the recommender has signal on both tracks.
 */
export const PROFESSIONAL_DIAGNOSTIC: DiagnosticDef = {
  id: "diag.placement.v1",
  title: { ar: "أين أنت الآن؟", en: "Where are you now?" },
  intro: {
    ar: "ثمانية مواقف قصيرة. لا توجد درجة راسبة — الهدف أن نبدأ من المستوى المناسب لك، لا من الصفر.",
    en: "Eight short situations. There is no failing score — the point is to start you at the right level rather than at zero.",
  },
  items: [
    {
      id: "diag.1",
      signals: [
        { skillId: "skill.active-listening", weight: 1 },
        { skillId: "skill.questioning", weight: 0.5 },
      ],
      activity: {
        id: "diag.act.1",
        kind: "best_response",
        skillId: "skill.active-listening",
        stage: 2,
        prompt: {
          ar: "موكل جديد يجلس أمامك ويقول: «شريكي سرقني، أريد رفع دعوى غدًا.» ما أفضل ردّ أول؟",
          en: "A new client sits down and says: “My partner robbed me. I want to file a case tomorrow.” What is the best first response?",
        },
        options: [
          {
            id: "a",
            label: {
              ar: "«حسنًا، دعنا نجهّز الدعوى. أحتاج عقد الشراكة وكشوف الحساب.»",
              en: "“Right, let's prepare the claim. I need the partnership agreement and the account statements.”",
            },
            rationale: {
              ar: "قفزت إلى الحل قبل أن تعرف الوقائع. لو تبيّن لاحقًا أن ما حدث ليس اختلاسًا بل خلافًا على التوزيع، تكون قد بنيت توقّعًا لن تستطيع الوفاء به.",
              en: "You jumped to the remedy before you know the facts. If it later turns out this is a distribution dispute rather than misappropriation, you have already built an expectation you cannot meet.",
            },
          },
          {
            id: "b",
            label: {
              ar: "«خذ وقتك. احكِ لي ما حدث من البداية، ولن أقاطعك.»",
              en: "“Take your time. Tell me what happened from the beginning — I won't interrupt.”",
            },
            correct: true,
            rationale: {
              ar: "أنت تشتري لنفسك الوقائع الكاملة وتشتري للموكل الشعور بأنه سُمع. كلاهما ضروري، والثاني هو ما يجعله يخبرك بالتفاصيل غير المريحة لاحقًا.",
              en: "You buy yourself the full facts and buy the client the feeling of being heard. Both matter, and the second is what makes them tell you the uncomfortable details later.",
            },
          },
          {
            id: "c",
            label: {
              ar: "«السرقة تهمة جنائية. هل تقصد الاختلاس أم إساءة الأمانة؟»",
              en: "“Theft is a criminal charge. Do you mean misappropriation or breach of trust?”",
            },
            rationale: {
              ar: "التصحيح القانوني في الجملة الأولى صحيح تقنيًا وخاطئ إنسانيًا. الموكل يصف ألمًا لا يصوغ تكييفًا.",
              en: "A legal correction in the first sentence is technically right and humanly wrong. The client is describing an injury, not proposing a characterisation.",
            },
          },
          {
            id: "d",
            label: {
              ar: "«لا تقلق، سنسترجع حقّك.»",
              en: "“Don't worry, we'll get your money back.”",
            },
            rationale: {
              ar: "طمأنة قبل المعرفة هي وعد ضمني. هذه الجملة تُقتبس ضدّك في الشهر السادس.",
              en: "Reassurance before knowledge is an implied promise. This sentence gets quoted back at you in month six.",
            },
          },
        ],
      },
    },
    {
      id: "diag.2",
      signals: [{ skillId: "skill.avoiding-guarantees", weight: 1 }],
      activity: {
        id: "diag.act.2",
        kind: "best_response",
        skillId: "skill.avoiding-guarantees",
        stage: 3,
        prompt: {
          ar: "الموكل: «هل تضمن لي أن أربح؟» ما أفضل جواب؟",
          en: "The client asks: “Do you guarantee I'll win?” What is the best answer?",
        },
        options: [
          {
            id: "a",
            label: {
              ar: "«لا أحد يضمن نتيجة. لكن دعني أقول لك ما هو قوي في ملفك، وما هو ضعيف، وما لا نعرفه بعد.»",
              en: "“No one can guarantee an outcome. But let me tell you what is strong in your file, what is weak, and what we don't know yet.”",
            },
            correct: true,
            rationale: {
              ar: "رفضتَ الضمان وأعطيتَ بديلًا أثمن منه: صورة صادقة يستطيع الموكل أن يقرّر على أساسها.",
              en: "You refused the guarantee and gave something more valuable in its place: an honest picture the client can actually decide on.",
            },
          },
          {
            id: "b",
            label: { ar: "«ملفك قوي جدًا، ارتَح.»", en: "“Your file is very strong — relax.”" },
            rationale: {
              ar: "لم تقل «أضمن»، لكن الموكل سمعها. الضمان الضمني يُحاسَب عليه مثل الصريح.",
              en: "You didn't say “guarantee”, but the client heard one. An implied promise is judged like an express one.",
            },
          },
          {
            id: "c",
            label: {
              ar: "«القانون لا يسمح للمحامي بضمان النتيجة.»",
              en: "“The rules don't allow a lawyer to guarantee an outcome.”",
            },
            rationale: {
              ar: "صحيح، لكنه جواب إجرائي يترك الموكل بلا معلومة. الصحيح أن ترفض ثم تعوّض بما هو مفيد.",
              en: "True, but it is a procedural answer that leaves the client with nothing. Refuse, then replace the refusal with something useful.",
            },
          },
          {
            id: "d",
            label: {
              ar: "«لا أستطيع أن أضمن، وهذا يعتمد على المحكمة.»",
              en: "“I can't guarantee it, it depends on the court.”",
            },
            rationale: {
              ar: "بداية صحيحة تنتهي إلى العجز. «يعتمد على المحكمة» تعني للموكل: لا أحد يتحكم بشيء، بما فيه أنت.",
              en: "A correct start that ends in helplessness. “It depends on the court” tells the client nobody is in control — including you.",
            },
          },
        ],
      },
    },
    {
      id: "diag.3",
      signals: [
        { skillId: "skill.time-priority-management", weight: 1 },
        { skillId: "skill.client-follow-up", weight: 0.5 },
      ],
      activity: {
        id: "diag.act.3",
        kind: "priority_ranking",
        skillId: "skill.time-priority-management",
        stage: 2,
        prompt: {
          ar: "الساعة 9:10 صباحًا وأمامك خمس مهام. رتّبها من الأهم إلى الأقل.",
          en: "It's 9:10 a.m. and five things are waiting. Rank them from most to least urgent.",
        },
        accessibleAlternative: {
          ar: "يمكنك ترتيب العناصر بأزرار «تحريك لأعلى / لأسفل» بدل السحب.",
          en: "You can reorder with the move-up / move-down buttons instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "مهلة استئناف تنتهي اليوم الساعة 2:00 ظهرًا ولم تُودَع اللائحة بعد.",
              en: "An appeal deadline expires today at 2:00 p.m. and the notice is not filed.",
            },
            rationale: {
              ar: "المهلة القضائية الوحيدة التي لا يمكن استعادتها. كل شيء آخر يمكن تأجيله ساعة.",
              en: "The one deadline that cannot be recovered. Everything else survives an hour's delay.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "موكل ترك ثلاث رسائل أمس ولم يتلقَّ ردًّا.",
              en: "A client left three messages yesterday and got no reply.",
            },
            rationale: {
              ar: "ليس عاجلًا قانونيًا لكنه عاجل علائقيًا — والصمت هنا هو ما يُنهي العلاقات.",
              en: "Not legally urgent but relationally urgent — silence is what ends relationships.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "الشريك يطلب مذكّرة داخلية «قبل نهاية الأسبوع».",
              en: "A partner wants an internal memo “by the end of the week”.",
            },
            rationale: {
              ar: "له تاريخ واضح وليس اليوم. اجدوله ولا تدعه يزاحم المهلة.",
              en: "It has a date, and the date is not today. Schedule it; don't let it crowd the deadline.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "طلب عرض أتعاب من عميل محتمل وصل قبل نصف ساعة.",
              en: "A fee proposal request from a prospective client, half an hour old.",
            },
            rationale: {
              ar: "مهم تجاريًا، ونافذته أيام لا دقائق. ردّ إقرار من سطرين يكفي اليوم.",
              en: "Commercially important, but its window is days not minutes. A two-line acknowledgement covers today.",
            },
          },
          {
            id: "i5",
            label: {
              ar: "أرشفة ملفات مغلقة من الشهر الماضي.",
              en: "Archiving closed files from last month.",
            },
            rationale: {
              ar: "عمل نافع بلا مهلة. هو أول ما يُؤجَّل وآخر ما يُنسى.",
              en: "Useful work with no deadline. First to postpone, last to forget.",
            },
          },
        ],
      },
    },
    {
      id: "diag.4",
      signals: [
        { skillId: "skill.plain-explanation", weight: 1 },
        { skillId: "skill.expectation-management", weight: 0.5 },
      ],
      activity: {
        id: "diag.act.4",
        kind: "multiple_choice",
        skillId: "skill.plain-explanation",
        stage: 2,
        prompt: {
          ar: "تريد أن تشرح لموكل أن المحكمة حجزت مبلغًا في حساب خصمه. أيّ صياغة صحيحة ومفهومة معًا؟",
          en: "You need to explain that the court has attached funds in the opponent's account. Which wording is both accurate and usable?",
        },
        options: [
          {
            id: "a",
            label: {
              ar: "«صدر قرار بالحجز التحفظي على أرصدة المدين لدى الغير.»",
              en: "“A precautionary attachment order has issued over the debtor's balances held by third parties.”",
            },
            rationale: {
              ar: "دقيق ومغلق. الموكل سيهزّ رأسه ثم يسأل شخصًا آخر ماذا يعني.",
              en: "Accurate and closed. The client will nod, then ask someone else what it meant.",
            },
          },
          {
            id: "b",
            label: {
              ar: "«جمّدنا المبلغ في حسابه: لا يستطيع سحبه، ولم ينتقل إليك بعد. ينتقل فقط بعد حكم نهائي.»",
              en: "“We've frozen the money in his account: he can't withdraw it, and it hasn't moved to you. It only moves after a final judgment.”",
            },
            correct: true,
            rationale: {
              ar: "بسيط ودقيق، والأهم أنه يمنع الخطأ الذي يكلّف: أن يظنّ الموكل أن المال صار عنده فيلتزم بدفعة لمورّد.",
              en: "Simple and accurate — and it forecloses the expensive misunderstanding, the client thinking the money is his and committing it to a supplier.",
            },
          },
          {
            id: "c",
            label: {
              ar: "«أخذنا المبلغ من حسابه، صار لك.»",
              en: "“We took the money out of his account — it's yours now.”",
            },
            rationale: {
              ar: "أبسط، وخاطئ. التبسيط الذي يغيّر المعنى ليس تبسيطًا بل خطأ مهني.",
              en: "Simpler, and wrong. Simplification that changes the meaning isn't simplification, it's a professional error.",
            },
          },
          {
            id: "d",
            label: {
              ar: "«المحكمة استجابت لطلبنا، وهذا مؤشر ممتاز على مسار الدعوى.»",
              en: "“The court granted our request — an excellent sign for the case.”",
            },
            rationale: {
              ar: "لم تشرح شيئًا وأضفت تنبؤًا. إجراء تحفظي لا يقول شيئًا عن الموضوع.",
              en: "You explained nothing and added a prediction. An interim measure says nothing about the merits.",
            },
          },
        ],
      },
    },
    {
      id: "diag.5",
      signals: [
        { skillId: "skill.next-steps-closure", weight: 1 },
        { skillId: "skill.client-follow-up", weight: 0.5 },
      ],
      activity: {
        id: "diag.act.5",
        kind: "multiple_select",
        skillId: "skill.next-steps-closure",
        stage: 2,
        prompt: {
          ar: "أيّ العناصر التالية يجب أن تكون في الدقيقتين الأخيرتين من كل اجتماع مع موكل؟ اختر كل ما ينطبق.",
          en: "Which of these belong in the last two minutes of every client meeting? Select all that apply.",
        },
        options: [
          {
            id: "a",
            label: { ar: "من سيفعل ماذا، بالاسم.", en: "Who does what, by name." },
            correct: true,
            rationale: {
              ar: "الخطوة بلا مالك لا تحدث. «سنرسل» تعني عمليًا: لن يرسل أحد.",
              en: "A step without an owner doesn't happen. “We'll send it” operationally means nobody sends it.",
            },
          },
          {
            id: "b",
            label: { ar: "تاريخ محدد لكل خطوة.", en: "A specific date for each step." },
            correct: true,
            rationale: {
              ar: "«قريبًا» و«خلال أيام» تُقاس بمسطرة مختلفة عند كل طرف.",
              en: "“Soon” and “in a few days” are measured with a different ruler by each side.",
            },
          },
          {
            id: "c",
            label: { ar: "توقّعك للنتيجة النهائية.", en: "Your prediction of the final outcome." },
            rationale: {
              ar: "الاجتماع الأول أسوأ لحظة للتنبؤ: معلوماتك ناقصة وثقة الموكل في أعلاها.",
              en: "A first meeting is the worst moment to predict: your information is thinnest and the client's confidence in you is highest.",
            },
          },
          {
            id: "d",
            label: {
              ar: "متى وكيف سيصله التحديث التالي.",
              en: "When and how the next update will reach them.",
            },
            correct: true,
            rationale: {
              ar: "هذه الجملة وحدها تلغي معظم مكالمات «هل من جديد؟».",
              en: "This one sentence removes most “any news?” calls.",
            },
          },
          {
            id: "e",
            label: {
              ar: "ما الذي سيحدث إذا تأخّرت خطوة عن موعدها.",
              en: "What happens if a step slips.",
            },
            correct: true,
            rationale: {
              ar: "التأخير المتوقَّع مسبقًا حادثة إدارية؛ التأخير المفاجئ خيانة ثقة.",
              en: "A slip you pre-announced is an administrative event; a slip that surprises the client is a breach of trust.",
            },
          },
        ],
      },
    },
    {
      id: "diag.6",
      signals: [
        { skillId: "skill.difficult-client-basics", weight: 1 },
        { skillId: "skill.client-follow-up", weight: 0.5 },
      ],
      activity: {
        id: "diag.act.6",
        kind: "short_written",
        skillId: "skill.difficult-client-basics",
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.difficult-conversation.v1",
        minChars: 120,
        prompt: {
          ar: "اكتب ردًّا من ثلاث إلى خمس جمل.",
          en: "Write a reply of three to five sentences.",
        },
        context: {
          ar: [
            "موكلك أرسل لك الآن: «مرّت ثلاثة أسابيع ولم أسمع منك شيئًا. هل ما زلت تعمل على ملفي أصلًا؟»",
            "الحقيقة: الملف انتقل إليك من زميل قبل عشرة أيام، ولم يُقدَّم الطلب بعد لأنك تنتظر مستندًا من الموكل نفسه لم تطلبه منه صراحة.",
          ],
          en: [
            "Your client has just written: “Three weeks and I've heard nothing. Are you even still working on my file?”",
            "The truth: the file came to you from a colleague ten days ago, and the application isn't filed because you're waiting on a document from the client that you never explicitly asked for.",
          ],
        },
        modelAnswer: {
          ar: [
            "لديك حق تمامًا، وثلاثة أسابيع بلا تحديث ليست مقبولة، وأعتذر عن ذلك.",
            "الوضع الآن: الملف عندي منذ عشرة أيام، والطلب جاهز باستثناء مستند واحد — نسخة عن إشعار الإنهاء — لم أطلبه منك بوضوح، وهذا خطئي.",
            "إن أرسلته لي قبل الخميس، أودع الطلب يوم الاثنين وأرسل لك تأكيد الإيداع في اليوم نفسه.",
            "ومن الآن سأرسل لك تحديثًا كل يوم ثلاثاء حتى لو لم يكن هناك جديد.",
          ],
          en: [
            "You're right, and three weeks without an update isn't acceptable. I'm sorry.",
            "Where things stand: the file has been with me for ten days, and the application is ready except for one document — a copy of the termination notice — which I never clearly asked you for. That's on me.",
            "If you send it to me before Thursday, I'll file on Monday and send you the filing confirmation the same day.",
            "From now on you'll get an update from me every Tuesday, even when there's nothing new.",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "الملف لم يكن عندي أصلًا، وصلني من الزميل قبل عشرة أيام فقط.",
              "وأنا في انتظار مستندات منكم لم تصلني.",
              "سنقدّم الطلب حال اكتمال المستندات.",
            ],
            en: [
              "The file wasn't even with me — it only reached me from my colleague ten days ago.",
              "And I'm waiting on documents from you that haven't arrived.",
              "We'll file as soon as the documents are complete.",
            ],
          },
          whatIsWrong: {
            ar: "كل جملة فيه صحيحة، والترتيب خاطئ: بدأ بالدفاع، ثم حمّل الموكل مسؤولية طلب لم يُوجَّه إليه، وأنهى بوعد بلا تاريخ ولا مالك.",
            en: "Every sentence is true and the order is wrong: it opens with a defence, shifts blame onto the client for a request never made, and closes with a promise that has no date and no owner.",
          },
        },
      },
    },
    {
      id: "diag.7",
      signals: [
        { skillId: "skill.le-managing-expectations", weight: 1 },
        { skillId: "skill.le-dates-deadlines", weight: 0.5 },
      ],
      activity: {
        id: "diag.act.7",
        kind: "best_response",
        skillId: "skill.le-managing-expectations",
        stage: 2,
        prompt: {
          ar: "موكل أجنبي يسأل بالإنجليزية: «Will the registration be done before the end of the month?» أي جواب إنجليزي هو الأدق مهنيًا؟",
          en: "A foreign client asks: “Will the registration be done before the end of the month?” Which English answer is the most professionally accurate?",
        },
        options: [
          {
            id: "a",
            label: {
              ar: "“Don't worry, we will make sure it is registered.”",
              en: "“Don't worry, we will make sure it is registered.”",
            },
            rationale: {
              ar: "هذه ترجمة حرفية لطمأنة عربية مهذّبة، لكنها بالإنجليزية تُسمع كتعهّد. «we will make sure» التزام لا تملك أدواته.",
              en: "This is a literal rendering of an Arabic courtesy, but in English it lands as an undertaking. “We will make sure” commits you to something you don't control.",
            },
          },
          {
            id: "b",
            label: {
              ar: "“We expect to file on 14 May. The registry usually issues the certificate within ten business days, but that timing is theirs, not ours. I'll confirm the moment we file.”",
              en: "“We expect to file on 14 May. The registry usually issues the certificate within ten business days, but that timing is theirs, not ours. I'll confirm the moment we file.”",
            },
            correct: true,
            rationale: {
              ar: "فصل ما تتحكم به عمّا لا تتحكم به، أعطى تاريخًا محددًا لما يخصّك، وحدّد نقطة التواصل التالية. هذا هو ضبط التوقعات بالإنجليزية.",
              en: "It separates what you control from what you don't, gives a specific date for your part, and names the next contact point. That is expectation management in English.",
            },
          },
          {
            id: "c",
            label: {
              ar: "“Inshallah it will be finished this month.”",
              en: "“Inshallah it will be finished this month.”",
            },
            rationale: {
              ar: "التحوّط العربي هنا لا يُترجم. المستمع الأجنبي يسمع إمّا وعدًا أو مراوغة، ولا يسمع التحفّظ الذي قصدته.",
              en: "The Arabic hedge doesn't survive the crossing. A foreign listener hears either a promise or an evasion — not the reservation you intended.",
            },
          },
          {
            id: "d",
            label: {
              ar: "“It is impossible to say. These things depend on many factors.”",
              en: "“It is impossible to say. These things depend on many factors.”",
            },
            rationale: {
              ar: "تجنّبت الوعد وتجنّبت المعلومة معًا. الموكل يخرج بلا تاريخ يخطّط عليه، وهذا فشل مهني وليس حذرًا.",
              en: "You avoided the promise and the information at the same time. The client leaves with no date to plan against — that's a professional failure, not caution.",
            },
          },
        ],
      },
    },
    {
      id: "diag.8",
      signals: [{ skillId: "skill.le-client-update-writing", weight: 1 }],
      activity: {
        id: "diag.act.8",
        kind: "find_mistake",
        skillId: "skill.le-client-update-writing",
        stage: 3,
        prompt: {
          ar: "هذا سطر من بريد تحديث بالإنجليزية إلى موكل. ما المشكلة الأخطر فيه؟",
          en: "This is one line from an English update email to a client. What is the most serious problem with it?",
        },
        context: {
          ar: ["“Kindly be informed that the documents were submitted and the matter is being followed up. We will revert to you in due course.”"],
          en: ["“Kindly be informed that the documents were submitted and the matter is being followed up. We will revert to you in due course.”"],
        },
        options: [
          {
            id: "a",
            label: {
              ar: "لا يوجد فيه أي فاعل ولا تاريخ: لا نعرف من قدّم، ولا متى، ولا متى سيصل الرد التالي.",
              en: "It has no actor and no date: we don't know who filed, when, or when the next word arrives.",
            },
            correct: true,
            rationale: {
              ar: "«were submitted» و«is being followed up» و«in due course» ثلاث صيغ تُخفي المسؤول والتاريخ معًا. الموكل لا يستطيع أن يبني عليها قرارًا واحدًا.",
              en: "“Were submitted”, “is being followed up” and “in due course” each hide both the actor and the date. The client cannot base a single decision on this.",
            },
          },
          {
            id: "b",
            label: { ar: "الأسلوب غير رسمي بما يكفي.", en: "The tone isn't formal enough." },
            rationale: {
              ar: "العكس تمامًا: المشكلة أنه رسمي أكثر مما يجب، والرسمية هنا هي التي تخفي المعلومة.",
              en: "The opposite: it is over-formal, and the formality is exactly what is hiding the information.",
            },
          },
          {
            id: "c",
            label: { ar: "«Kindly» كلمة خاطئة نحويًا.", en: "“Kindly” is grammatically wrong." },
            rationale: {
              ar: "«Kindly» ليست خطأ نحويًا، لكنها من مفردات البريد الإداري القديم. المشكلة الحقيقية أكبر من كلمة.",
              en: "“Kindly” isn't ungrammatical, just dated officialese. The real problem is bigger than one word.",
            },
          },
          {
            id: "d",
            label: { ar: "الجملة طويلة جدًا.", en: "The sentence is too long." },
            rationale: {
              ar: "ليست طويلة بشكل استثنائي. الخلل في ما حذفته، لا في طولها.",
              en: "It isn't unusually long. The failure is in what it omits, not its length.",
            },
          },
        ],
      },
    },
  ],
};

export const DIAGNOSTICS = [PROFESSIONAL_DIAGNOSTIC];
