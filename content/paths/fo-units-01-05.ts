import type { UnitDef } from "../types";

/**
 * Firm & Matter Operations — Chapter 1 (`ch.fo.taking-on-a-matter`) units 1-3
 * and Chapter 2 (`ch.fo.organizing-the-file`) units 4-5.
 *
 * Skills `skill.matter-intake`, `skill.file-organisation`,
 * `skill.workflow-design` and `skill.knowledge-management` are authored in
 * `content/framework/skills.ts`. `skill.output-quality-control`,
 * `skill.time-and-billing-narratives` and `skill.matter-handover` are
 * authored in a parallel batch, as are units 6-10 of this path
 * (`fo-units-06-10.ts`) and the simulation scenarios used there. No
 * simulation step appears in this batch — chapters 3 and beyond carry the
 * simulation units for this path. Rubric `rubric.firm-operations-written.v1`
 * is authored in a parallel batch alongside the skills above.
 */
export const FO_UNITS_01_05: UnitDef[] = [
  // =========================================================================
  // UNIT 01 — What Properly Taking On a Matter Actually Means
  // =========================================================================
  {
    id: "unit.fo.01",
    chapterId: "ch.fo.taking-on-a-matter",
    order: 1,
    title: {
      ar: "ما يعنيه فعلاً قبول الملف بشكل صحيح",
      en: "What Properly Taking On a Matter Actually Means",
    },
    subtitle: {
      ar: "موافقة العميل هي البداية فقط؛ بين «نعم» وأول ساعة عمل فعلية خطوات تحدد إن كان الملف سيُدار بانضباط أو بفوضى",
      en: "The client's yes is only the start; between that and the first real hour of work lie steps that decide whether the matter runs on discipline or chaos.",
    },
    primarySkillId: "skill.matter-intake",
    skillIds: ["skill.matter-intake", "skill.file-organisation"],
    stage: 1,
    estimatedMinutes: 7,
    steps: [
      {
        kind: "hook",
        id: "s.fo.01.hook",
        text: {
          ar: "وافق العميل. أغلقت الاجتماع سعيدًا بتوكيل جديد. بعد ثلاثة أيام، لا أحد في المكتب يعرف من يتابع الملف ولا أين حُفظت مستنداته. أين ضاع الوقت؟",
          en: "The client said yes. You ended the meeting happy with a new instruction. Three days later, no one at the firm knows who's running the file or where its documents live. Where did it go wrong?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.fo.01.why",
        text: {
          ar: "الموافقة الشفهية ليست فتح ملف. من يعتبر «نعم» العميل نهاية المهمة يترك الملف بلا نظام يحميه من النسيان أو الالتباس.",
          en: "A verbal yes isn't an opened matter. Whoever treats the client's agreement as the finish line leaves the file with no system protecting it from being forgotten or mixed up.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.fo.01.goals",
        goals: {
          ar: [
            "أن تحدد ما يجب إنجازه فعلاً بين موافقة العميل وبدء العمل الفعلي على الملف.",
            "أن تفرّق بين تأكيد النطاق شفهيًا وتوثيقه كتابيًا بشكل يحمي الطرفين.",
            "أن تفتح الملف في نظام المكتب بطريقة تجعله قابلاً للمتابعة من أي شخص آخر.",
          ],
          en: [
            "Identify what must actually happen between the client's yes and real work starting on the matter.",
            "Distinguish confirming scope verbally from documenting it in writing in a way that protects both sides.",
            "Open the matter in the firm's system so anyone else can pick it up.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.fo.01.lesson",
        title: {
          ar: "ما بين «نعم» وأول ساعة عمل",
          en: "Between \"Yes\" and the First Working Hour",
        },
        body: {
          ar: [
            "الخطأ الشائع: التعامل مع موافقة العميل كأنها نهاية عملية القبول، بينما هي في الحقيقة بدايتها فقط.",
            "الخطوة الأولى بعد فحص التعارض، الذي يتم في مرحلة سابقة: تأكيد نطاق التعليمات كتابيًا، لا الاكتفاء بما قيل شفهيًا في الاجتماع.",
            "الخطوة الثانية: فتح الملف رسميًا في نظام المكتب برقم ملف واضح، قبل إرسال أي بريد أو صياغة أي مستند باسم العميل.",
            "الخطوة الثالثة: تسجيل من يتابع الملف فعليًا، بحيث يعرف أي زميل، حتى في غيابك، من يتصل به عند سؤال عاجل.",
            "من يتخطى هذه الخطوات الثلاث لأنه «يتذكر التفاصيل» يراهن على ذاكرته الشخصية بدل نظام يحمي الملف والعميل معًا.",
          ],
          en: [
            "The common mistake: treating the client's yes as the end of intake, when it's actually only the start.",
            "First step after the conflict check, done at an earlier stage: confirm the scope of instructions in writing, not just what was said verbally in the meeting.",
            "Second step: formally open the matter in the firm's system with a clear file number, before sending any email or drafting anything in the client's name.",
            "Third step: record who's actually running the file, so any colleague — even in your absence — knows who to call with an urgent question.",
            "Whoever skips these three steps because they \"remember the details\" is betting the file and the client on personal memory instead of a system that protects both.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.fo.01.visual",
        title: {
          ar: "ثلاث خطوات بعد الموافقة",
          en: "Three Steps After the Yes",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "تأكيد النطاق كتابيًا", en: "Confirm scope in writing" },
            detail: {
              ar: "وثّق ما اتفقتما عليه بالضبط، لا ما تتذكره فقط.",
              en: "Document exactly what you agreed, not just what you remember.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "فتح الملف في النظام", en: "Open the matter in the system" },
            detail: {
              ar: "رقم ملف واضح قبل أي مراسلة أو صياغة باسم العميل.",
              en: "A clear file number before any correspondence or drafting in the client's name.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "تحديد من يتابع", en: "Naming who's responsible" },
            detail: {
              ar: "زميل يعرف من يتصل به دون انتظارك.",
              en: "A colleague knows who to call without waiting for you.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "النتيجة", en: "The result" },
            detail: {
              ar: "ملف يمكن لأي شخص آخر متابعته خلال دقائق، لا يعتمد على ذاكرتك وحدك.",
              en: "A matter anyone else can pick up within minutes, not one that depends on your memory alone.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.fo.01.worked",
        strong: {
          label: {
            ar: "شريكة تفتح الملف بانضباط",
            en: "A partner who opens the matter with discipline",
          },
          text: {
            ar: [
              "«بعد اجتماعنا اليوم مع مسارات للوساطة التأمينية، سأرسل لهم رسالة تؤكد النطاق كتابيًا خلال ساعة، ثم أفتح الملف في النظام برقم واضح.»",
              "«سأخبر ديمة أنها المسؤولة عن المتابعة اليومية، حتى يعرف أي شخص في المكتب من يسأل إن غبت.»",
            ],
            en: [
              "\"After today's meeting with Masarat Insurance Brokers, I'll send a written scope confirmation within the hour, then open the matter in the system with a clear number.\"",
              "\"I'll tell Dima she's handling day-to-day follow-up, so anyone in the office knows who to ask if I'm out.\"",
            ],
          },
          why: {
            ar: "أنجزت الخطوات الثلاث فورًا بعد الاجتماع، فأصبح الملف قابلاً للمتابعة من أي شخص آخر منذ الساعة الأولى.",
            en: "She completed all three steps right after the meeting, so the matter was pickup-ready for anyone else from hour one.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يكتفي بذاكرته",
            en: "A lawyer relying on memory alone",
          },
          text: {
            ar: [
              "«تفاهمنا شفهيًا مع بلال غصن على كل شيء، سأبدأ العمل غدًا مباشرة.»",
              "لم يرسل تأكيدًا كتابيًا، ولم يفتح رقم ملف، ولم يخبر أحدًا في المكتب أنه تولى القضية.",
            ],
            en: [
              "\"Bilal Ghosn and I agreed on everything verbally, I'll just start work tomorrow.\"",
              "He sent no written confirmation, opened no file number, and told no one in the office he'd taken on the case.",
            ],
          },
          why: {
            ar: "بلا تأكيد كتابي، أي خلاف لاحق حول ما اتُفق عليه يعتمد على ذاكرتين متعارضتين لا مستند واحد؛ وبلا رقم ملف، لا أحد غيره يستطيع المتابعة إن غاب.",
            en: "With no written confirmation, any later disagreement over what was agreed rests on two conflicting memories, not one document; with no file number, no one else can step in if he's away.",
          },
        },
      },
      { kind: "activity", id: "s.fo.01.a1", activityId: "act.fo.01.1", mode: "quick" },
      { kind: "activity", id: "s.fo.01.a2", activityId: "act.fo.01.2", mode: "guided" },
      { kind: "activity", id: "s.fo.01.a3", activityId: "act.fo.01.3", mode: "guided" },
      { kind: "activity", id: "s.fo.01.a4", activityId: "act.fo.01.4", mode: "independent" },
      { kind: "activity", id: "s.fo.01.a5", activityId: "act.fo.01.5", mode: "independent" },
      { kind: "summary", id: "s.fo.01.summary", summaryCardId: "card.fo.01" },
      {
        kind: "apply_tomorrow",
        id: "s.fo.01.apply",
        task: {
          ar: "بعد أي قبول ملف جديد غدًا، أنجز الخطوات الثلاث خلال ساعة واحدة من انتهاء الاجتماع.",
          en: "After any new matter intake tomorrow, complete the three steps within one hour of the meeting ending.",
        },
        detail: {
          ar: "إن لم تستطع إنجاز الثلاثة معًا فورًا، ابدأ بالتوثيق الكتابي أولاً.",
          en: "If you can't complete all three right away, start with the written documentation first.",
        },
      },
      {
        kind: "next_mission",
        id: "s.fo.01.next",
        teaser: {
          ar: "أكّدت النطاق كتابيًا وفتحت الملف. لكن ماذا يحتوي ذلك التأكيد الكتابي بالضبط؟ الوحدة القادمة: كتابة خطاب يحدد بدقة ما تفعله وما لا تفعله.",
          en: "You confirmed scope in writing and opened the file. But what exactly goes in that written confirmation? Next unit: writing a letter that precisely states what you will and won't do.",
        },
      },
    ],
    activities: [
      {
        id: "act.fo.01.1",
        kind: "multiple_choice",
        skillId: "skill.matter-intake",
        stage: 1,
        context: {
          ar: [
            "التقيت اليوم بممثل شركة مسارات للوساطة التأمينية، السيد بلال غصن، ووافق على تكليفكم بملاحقة مورّد برمجيات لم يسلّم نظام إدارة العملاء المتفق عليه.",
            "الاجتماع انتهى بمصافحة وابتسامات.",
          ],
          en: [
            "Today you met the representative of Masarat Insurance Brokers, Mr. Bilal Ghosn, who agreed to instruct you to pursue a software vendor that never delivered the agreed client-management system.",
            "The meeting ended with a handshake and smiles.",
          ],
        },
        prompt: {
          ar: "ما الخطوة الصحيحة التالية قبل أن تبدأ أي عمل فعلي على الملف؟",
          en: "What's the correct next step before any real work begins on the matter?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "ابدأ صياغة الإنذار للمورّد فورًا لأن العميل بانتظار نتيجة سريعة.",
              en: "Start drafting the notice to the vendor right away since the client is waiting for quick results.",
            },
            rationale: {
              ar: "البدء بالصياغة قبل تأكيد النطاق كتابيًا وفتح الملف يجازف بالعمل على أساس تفاهم شفهي فقط، قد يختلف لاحقًا عمّا فهمه العميل.",
              en: "Starting to draft before confirming scope in writing and opening the file risks work built on a verbal understanding alone, which may later differ from what the client understood.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "أرسل تأكيدًا كتابيًا للنطاق، ثم افتح الملف في النظام برقم واضح، قبل أي مراسلة أخرى.",
              en: "Send a written scope confirmation, then open the matter in the system with a clear number, before any other correspondence.",
            },
            correct: true,
            rationale: {
              ar: "هاتان الخطوتان تحميان النطاق المتفق عليه وتجعلان الملف قابلاً للمتابعة من أي زميل، حتى قبل أول مسودة فعلية.",
              en: "These two steps protect the agreed scope and make the file pickup-ready for any colleague, even before the first actual draft.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "انتظر حتى يرسل العميل دفعة أولى من الأتعاب قبل أي خطوة.",
              en: "Wait until the client sends an initial fee payment before any step.",
            },
            rationale: {
              ar: "الدفعة الأولى مسألة إدارية منفصلة؛ لا تمنع تأكيد النطاق كتابيًا وفتح الملف، وتأجيل الاثنين معًا يعرّض الاتفاق للغموض.",
              en: "The initial payment is a separate administrative matter; it doesn't block confirming scope in writing and opening the file, and delaying both risks the agreement staying vague.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "اطلب من بلال أن يعيد شرح طلبه في اجتماع ثانٍ للتأكد.",
              en: "Ask Bilal to re-explain his request in a second meeting to be sure.",
            },
            rationale: {
              ar: "اجتماع إضافي غير ضروري ويهدر وقت العميل؛ التأكيد الكتابي يحقق الغرض نفسه بلا تكرار.",
              en: "An extra meeting is unnecessary and wastes the client's time; a written confirmation achieves the same purpose without repeating the meeting.",
            },
          },
        ],
      },
      {
        id: "act.fo.01.2",
        kind: "categorization",
        skillId: "skill.matter-intake",
        secondarySkillIds: ["skill.file-organisation"],
        stage: 1,
        prompt: {
          ar: "صنّف كل إجراء: هل يجب إنجازه في اليوم الأول من قبول الملف، أم يمكن تأجيله بأمان؟",
          en: "Sort each action: must it happen on day one of taking on the matter, or can it safely wait?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «اليوم الأول» / «يمكن تأجيله» أسفل كل إجراء بدل السحب.",
          en: "Choose \"Day one\" / \"Can wait\" from buttons under each action instead of dragging.",
        },
        buckets: [
          { id: "day1", label: { ar: "اليوم الأول", en: "Day one" } },
          { id: "later", label: { ar: "يمكن تأجيله", en: "Can wait" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "إرسال رسالة تؤكد نطاق التعليمات كتابيًا.",
              en: "Sending a message that confirms the scope of instructions in writing.",
            },
            bucketId: "day1",
            rationale: {
              ar: "توثيق النطاق مبكرًا يمنع أي التباس لاحق حول ما طُلب فعلاً.",
              en: "Documenting scope early prevents any later confusion about what was actually requested.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "فتح رقم ملف في نظام المكتب.",
              en: "Opening a file number in the firm's system.",
            },
            bucketId: "day1",
            rationale: {
              ar: "بلا رقم ملف، لا مكان واضح لحفظ أي مستند أو مراسلة لاحقة.",
              en: "With no file number, there's no clear place to store any later document or correspondence.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "إعداد الفاتورة النهائية لأتعاب الملف.",
              en: "Preparing the final invoice for the matter's fees.",
            },
            bucketId: "later",
            rationale: {
              ar: "الفوترة النهائية تأتي عند إنجاز العمل أو مراحله المتفق عليها، لا في اليوم الأول.",
              en: "Final billing comes when the work or its agreed stages are done, not on day one.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "صياغة أول مذكرة قانونية تفصيلية للملف.",
              en: "Drafting the first detailed legal memo for the matter.",
            },
            bucketId: "later",
            rationale: {
              ar: "الصياغة التفصيلية تبدأ بعد تأكيد النطاق وفتح الملف رسميًا، لا قبلهما.",
              en: "Detailed drafting starts after scope is confirmed and the file formally opened, not before.",
            },
          },
        ],
      },
      {
        id: "act.fo.01.3",
        kind: "ordering",
        skillId: "skill.matter-intake",
        stage: 1,
        prompt: {
          ar: "رتّب خطوات قبول الملف بشكل صحيح بعد موافقة العميل.",
          en: "Order the steps of properly taking on a matter after the client agrees.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the order number from a dropdown beside each step instead of dragging.",
        },
        hint: {
          ar: "التوثيق الكتابي يسبق أي عمل فعلي على الملف.",
          en: "Written documentation precedes any actual work on the matter.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "تأكيد نطاق التعليمات كتابيًا للعميل، بما يشمله العمل وما لا يشمله.",
              en: "Confirming the scope of instructions to the client in writing, what's covered and what isn't.",
            },
            rationale: {
              ar: "الخطوة الأولى؛ توثيق واضح يحمي الطرفين من فهم مختلف لاحقًا.",
              en: "The first step; a clear record protects both sides from a different understanding later.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "فتح الملف رسميًا في نظام المكتب برقم واضح.",
              en: "Formally opening the matter in the firm's system with a clear number.",
            },
            rationale: {
              ar: "بعد تأكيد النطاق مباشرة، لأن كل مستند لاحق يحتاج مكانًا رسميًا يُحفظ فيه.",
              en: "Right after confirming scope, because every later document needs a formal place to live.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "تحديد من يتابع الملف يوميًا وإبلاغ الفريق المعني.",
              en: "Naming who's following up on the file daily and telling the relevant team.",
            },
            rationale: {
              ar: "بعد فتح الملف، بحيث يعرف الجميع من المسؤول قبل بدء أي عمل فعلي.",
              en: "After opening the file, so everyone knows who's responsible before any real work starts.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "بدء الصياغة أو العمل الفعلي على الملف.",
              en: "Starting the drafting or actual work on the matter.",
            },
            rationale: {
              ar: "الخطوة الأخيرة؛ العمل الفعلي يبدأ بعد أن يصبح الملف موثقًا ومنظمًا لا قبل ذلك.",
              en: "The last step; real work begins once the file is documented and organised, not before.",
            },
          },
        ],
      },
      {
        id: "act.fo.01.4",
        kind: "short_written",
        skillId: "skill.matter-intake",
        stage: 1,
        grading: "ai_rubric",
        rubricId: "rubric.firm-operations-written.v1",
        weight: 2,
        minChars: 150,
        context: {
          ar: [
            "وافق السيد بلال غصن هاتفيًا على تكليفكم بمتابعة مطالبة ضد مورّد البرمجيات. بعد أسبوعين، اتصل يسأل: «ألن تراجعوا أيضًا عقدنا مع مورّد آخر بينما نحن في الموضوع؟» ولم تكن هذه الخدمة جزءًا مما ناقشتماه.",
            "أدركت أن التفاهم كان شفهيًا بالكامل، بلا تأكيد كتابي.",
          ],
          en: [
            "Mr. Bilal Ghosn verbally agreed to instruct you on the vendor claim. Two weeks later, he calls asking: \"While we're at it, won't you also review our contract with another vendor?\" That was never part of what you discussed.",
            "You realize the understanding was entirely verbal, with no written confirmation.",
          ],
        },
        prompt: {
          ar: "اكتب رسالة قصيرة (٥٠-٨٠ كلمة) توضح نطاق العمل المتفق عليه بلطف، وكيف ستتعاملون مع الطلب الجديد.",
          en: "Write a short message (50-80 words) that politely clarifies the agreed scope, and how you'll handle the new request.",
        },
        modelAnswer: {
          ar: [
            "«شكرًا لثقتكم يا سيد بلال. للتوضيح، نطاق عملنا الحالي يقتصر على مطالبة مورّد البرمجيات فقط، كما ناقشنا في اجتماعنا الأول.»",
            "«يسعدني مراجعة العقد الآخر كملف منفصل، وسأرسل لكم تأكيدًا كتابيًا بنطاقه وأتعابه قبل البدء.»",
          ],
          en: [
            "\"Thank you for your trust, Mr. Ghosn. To clarify, our current scope is limited to the software vendor claim only, as we discussed in our first meeting.\"",
            "\"I'd be happy to review the other contract as a separate matter, and I'll send a written confirmation of its scope and fees before we start.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«لا مشكلة، سأنظر في العقد الآخر أيضًا ضمن نفس الملف.»"],
            en: ["\"No problem, I'll look at the other contract too, under the same file.\""],
          },
          whatIsWrong: {
            ar: "يوسّع النطاق شفهيًا دون توثيق أو اتفاق أتعاب جديد، فيكرر الخطأ نفسه الذي سبب الالتباس أصلاً.",
            en: "Expands scope verbally with no documentation or new fee agreement, repeating the exact mistake that caused the confusion in the first place.",
          },
        },
      },
      {
        id: "act.fo.01.5",
        kind: "reflection",
        skillId: "skill.matter-intake",
        stage: 1,
        grading: "self_report",
        prompt: {
          ar: "استرجع ملفًا بدأت العمل عليه بناءً على تفاهم شفهي فقط. ما الذي كلّفك إياه غياب التوثيق الكتابي لاحقًا؟",
          en: "Recall a matter you started working on based on a verbal understanding alone. What did the lack of written documentation cost you later?",
        },
        followUp: {
          ar: "لو وثّقت النطاق كتابيًا من اليوم الأول، كيف كان يمكن أن يختلف الموقف؟",
          en: "Had you documented the scope in writing from day one, how might the situation have differed?",
        },
      },
    ],
    summaryCard: {
      id: "card.fo.01",
      title: {
        ar: "من الموافقة إلى الملف المفتوح",
        en: "From Agreement to an Opened Matter",
      },
      whatYouLearned: {
        ar: [
          "موافقة العميل الشفهية ليست نهاية القبول، بل بدايته فقط.",
          "ثلاث خطوات تحمي الملف: تأكيد النطاق كتابيًا، فتح رقم ملف رسمي، وتحديد من يتابع.",
          "من يعمل بذاكرته وحدها يراهن على نفسه بدل نظام يحمي الملف والعميل.",
        ],
        en: [
          "A client's verbal yes isn't the end of intake, only its start.",
          "Three steps protect the matter: confirming scope in writing, opening a formal file number, and naming who's following up.",
          "Whoever works from memory alone is betting on himself instead of a system that protects the matter and the client.",
        ],
      },
      framework: {
        name: {
          ar: "ثلاث خطوات بعد الموافقة",
          en: "Three Steps After the Yes",
        },
        steps: [
          { ar: "أكّد نطاق التعليمات كتابيًا فور انتهاء الاجتماع.", en: "Confirm the scope of instructions in writing right after the meeting." },
          { ar: "افتح الملف في نظام المكتب برقم واضح.", en: "Open the matter in the firm's system with a clear number." },
          { ar: "حدد من يتابع الملف وأبلغ الفريق المعني.", en: "Name who's following up and tell the relevant team." },
        ],
      },
      rememberThis: {
        ar: "موافقة شفهية بلا توثيق تراهن على ذاكرتين لا تتفقان دائمًا؛ التوثيق الكتابي يحمي العميل والمكتب معًا.",
        en: "A verbal yes with no documentation bets on two memories that don't always agree; written documentation protects both the client and the firm.",
      },
      useItTomorrow: {
        ar: "بعد أي اجتماع قبول جديد غدًا، أرسل تأكيد النطاق كتابيًا وافتح رقم الملف قبل أي خطوة أخرى.",
        en: "After any new intake meeting tomorrow, send the written scope confirmation and open the file number before anything else.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.legal-project-management", "src.governance-raci"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 02 — The Scope Confirmation Letter
  // =========================================================================
  {
    id: "unit.fo.02",
    chapterId: "ch.fo.taking-on-a-matter",
    order: 2,
    title: {
      ar: "خطاب تأكيد النطاق: ما تفعله وما لا تفعله",
      en: "The Scope Confirmation Letter: What You Will and Won't Do",
    },
    subtitle: {
      ar: "خطاب يحدد النطاق بدقة قبل أن تُكتب كلمة واحدة في الملف يوفر عشرات المكالمات المزعجة لاحقًا",
      en: "A letter that precisely states scope before a single word of work begins saves dozens of awkward calls later.",
    },
    primarySkillId: "skill.matter-intake",
    skillIds: ["skill.matter-intake"],
    stage: 1,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.fo.02.hook",
        text: {
          ar: "أرسلت للعميلة سمر حفار رسالة من سطرين: «سنتابع موضوع تجديد عقد الإيجار.» بعد شهر، اتصلت غاضبة: «لماذا لم تراجعوا أيضًا بند الغرامات؟» ماذا نسيت أن تكتب؟",
          en: "You sent client Samar Haffar a two-line message: \"We'll handle the lease renewal matter.\" A month later, she called angry: \"Why didn't you also review the penalty clause?\" What did you forget to write?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.fo.02.why",
        text: {
          ar: "خطاب غامض يترك للعميل مساحة ليتخيل نطاقًا أوسع مما اتفقتما عليه فعلاً، فيتحول كل اتصال لاحق إلى مصدر خلاف بدل تعاون.",
          en: "A vague letter leaves the client room to imagine a scope wider than what you actually agreed, turning every later conversation into a source of conflict instead of cooperation.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.fo.02.goals",
        goals: {
          ar: [
            "أن تحدد العناصر التي يجب أن يتضمنها خطاب تأكيد النطاق: ما يشمله العمل، ما لا يشمله، الموعد المتوقع، والأتعاب.",
            "أن تصوغ حدود العمل بلغة واضحة لا تحتمل أكثر من تفسير واحد.",
            "أن ترسل الخطاب قبل أن تبدأ أي عمل فعلي على الملف، لا بعده.",
          ],
          en: [
            "Identify the elements a scope confirmation letter must include: what's covered, what isn't, the expected timeline, and fees.",
            "Phrase the boundaries of the work in language that admits only one interpretation.",
            "Send the letter before any real work starts on the matter, not after.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.fo.02.lesson",
        title: {
          ar: "الوضوح الذي يوفر عشر مكالمات",
          en: "The Clarity That Saves Ten Phone Calls",
        },
        body: {
          ar: [
            "خطاب تأكيد النطاق ليس إجراءً شكليًا؛ هو المستند الوحيد الذي يحسم لاحقًا أي خلاف حول ما اتُفق عليه فعلاً.",
            "العنصر الأول: وصف دقيق لما يشمله العمل — نوع القضية، الأطراف، والنتيجة المتوقع تسليمها.",
            "العنصر الثاني، والأكثر إهمالًا: ما لا يشمله العمل صراحةً. عبارة واحدة مثل «لا يشمل هذا النطاق مراجعة العقود الأخرى» توفر خلافًا كاملاً لاحقًا.",
            "العنصر الثالث: جدول زمني تقديري واقعي، لا وعدًا بموعد غير مضمون. العنصر الرابع: أساس الأتعاب، سواء بالساعة أو بمبلغ مقطوع.",
            "خطاب مرسل بعد بدء العمل لا يحمي أحدًا؛ القيمة الحقيقية في إرساله قبل كتابة أي مسودة أو إجراء أي اتصال باسم العميل.",
          ],
          en: [
            "A scope confirmation letter isn't a formality; it's the one document that later settles any dispute over what was actually agreed.",
            "First element: a precise description of what's covered — the matter type, the parties, and the expected deliverable.",
            "Second element, and the most often skipped: what's explicitly excluded. One line like \"this scope doesn't include reviewing other contracts\" prevents an entire future dispute.",
            "Third element: a realistic estimated timeline, not a promise of a date you can't guarantee. Fourth: the fee basis, whether hourly or a fixed amount.",
            "A letter sent after work has started protects no one; its real value comes from being sent before a single draft is written or a call made in the client's name.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.fo.02.visual",
        title: {
          ar: "أربعة عناصر في خطاب تأكيد النطاق",
          en: "Four Elements of a Scope Confirmation Letter",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "ما يشمله العمل", en: "What's covered" },
            detail: {
              ar: "نوع القضية، الأطراف، والنتيجة المتوقعة.",
              en: "Matter type, parties, and expected deliverable.",
            },
            tone: "positive",
          },
          {
            label: { ar: "ما لا يشمله", en: "What's excluded" },
            detail: {
              ar: "عبارة صريحة تمنع توسيع النطاق دون اتفاق جديد.",
              en: "An explicit line preventing scope creep without a new agreement.",
            },
            tone: "positive",
          },
          {
            label: { ar: "الجدول الزمني", en: "Timeline" },
            detail: {
              ar: "تقدير واقعي، لا وعد غير مضمون.",
              en: "A realistic estimate, not an unguaranteed promise.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "الأتعاب", en: "Fees" },
            detail: {
              ar: "بالساعة أو بمبلغ مقطوع، مذكور بوضوح.",
              en: "Hourly or fixed, clearly stated.",
            },
            tone: "neutral",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.fo.02.worked",
        strong: {
          label: {
            ar: "محامية تكتب نطاقًا لا يحتمل تأويلاً",
            en: "A lawyer writing a scope that admits no other reading",
          },
          text: {
            ar: [
              "«سيتناول عملنا حصرًا التفاوض على شروط تجديد عقد إيجار محل بيتك للحلويات مع المالك الحالي، بما يشمل مراجعة بند الإيجار والمدة فقط.»",
              "«لا يشمل هذا النطاق مراجعة عقود التوريد أو أي نزاع آخر. المدة المتوقعة أسبوعان، والأتعاب بمبلغ مقطوع كما ناقشنا.»",
            ],
            en: [
              "\"Our work will cover exclusively negotiating the renewal terms of your bakery shop's lease with the current landlord, limited to the rent clause and term.\"",
              "\"This scope does not include reviewing supply contracts or any other dispute. Expected duration is two weeks, and fees are the fixed amount we discussed.\"",
            ],
          },
          why: {
            ar: "حددت ما يشمله العمل وما لا يشمله بجملة واحدة صريحة، فأغلقت الباب أمام أي توسيع لاحق دون اتفاق جديد.",
            en: "She stated what's covered and excluded in one explicit sentence, closing the door on any later expansion without a new agreement.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يكتب رسالة مختصرة جدًا",
            en: "A lawyer writing a message that's far too short",
          },
          text: {
            ar: [
              "«سنتابع موضوع تجديد عقد الإيجار لمحلكم، وسنكون على تواصل.»",
              "لم يذكر ما يشمله «الموضوع» بالضبط، ولا ما يُستثنى منه، ولا جدولًا زمنيًا.",
            ],
            en: [
              "\"We'll handle the lease renewal matter for your shop, and we'll stay in touch.\"",
              "He never specified what \"the matter\" actually covers, what's excluded, or any timeline.",
            ],
          },
          why: {
            ar: "«الموضوع» كلمة تحتمل أي تفسير؛ العميلة فهمت أنها تشمل كل ما يتعلق بالعقار، فاصطدمت بمفاجأة حين اكتشفت العكس.",
            en: "\"The matter\" admits any interpretation; the client understood it to cover everything property-related, and was blindsided to learn otherwise.",
          },
        },
      },
      { kind: "activity", id: "s.fo.02.a1", activityId: "act.fo.02.1", mode: "quick" },
      { kind: "activity", id: "s.fo.02.a2", activityId: "act.fo.02.2", mode: "guided" },
      { kind: "activity", id: "s.fo.02.a3", activityId: "act.fo.02.3", mode: "guided" },
      { kind: "activity", id: "s.fo.02.a4", activityId: "act.fo.02.4", mode: "independent" },
      { kind: "activity", id: "s.fo.02.a5", activityId: "act.fo.02.5", mode: "independent" },
      { kind: "summary", id: "s.fo.02.summary", summaryCardId: "card.fo.02" },
      {
        kind: "apply_tomorrow",
        id: "s.fo.02.apply",
        task: {
          ar: "أرسل خطاب تأكيد نطاق لأي ملف جديد غدًا يتضمن العناصر الأربعة كاملة.",
          en: "Send a scope confirmation letter for any new matter tomorrow that includes all four elements.",
        },
        detail: {
          ar: "إن لم تستطع كتابة جملة استثناء واحدة واضحة، فالنطاق ليس واضحًا كفاية بعد.",
          en: "If you can't write one clear exclusion sentence, the scope isn't clear enough yet.",
        },
      },
      {
        kind: "next_mission",
        id: "s.fo.02.next",
        teaser: {
          ar: "أكّدت النطاق كتابيًا. الآن حان وقت فتح الملف بحيث يجده أي شخص خلال ثوانٍ. الوحدة القادمة: تنظيم الملف من اليوم الأول.",
          en: "You've confirmed scope in writing. Now it's time to open the file so anyone can find anything in seconds. Next unit: organizing the file from day one.",
        },
      },
    ],
    activities: [
      {
        id: "act.fo.02.1",
        kind: "best_response",
        skillId: "skill.matter-intake",
        stage: 1,
        context: {
          ar: [
            "عميل جديد، مصنع الرواء للتغليف، طلب مراجعة عقد توزيع واحد فقط مع تاجر جملة.",
          ],
          en: [
            "A new client, Al-Rawaa Packaging Factory, asked for a review of exactly one distribution contract with a wholesaler.",
          ],
        },
        prompt: {
          ar: "أي جملة افتتاحية لخطاب تأكيد النطاق الأفضل؟",
          en: "Which opening line for the scope confirmation letter is best?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«سنراجع عقودكم.»",
              en: "\"We'll review your contracts.\"",
            },
            rationale: {
              ar: "صيغة الجمع «عقودكم» توحي بمراجعة شاملة لكل العقود، بينما الاتفاق كان على عقد واحد فقط.",
              en: "The plural \"your contracts\" implies a full review of everything, while the agreement covered only one contract.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«سنراجع عقد التوزيع الموقّع بينكم وبين تاجر الجملة، ولا يشمل هذا النطاق أي عقد آخر.»",
              en: "\"We'll review the distribution contract signed with the wholesaler; this scope does not include any other contract.\"",
            },
            correct: true,
            rationale: {
              ar: "يحدد العقد بالاسم ويستثني صراحة ما عداه، فلا مجال لتوسيع غير متفق عليه.",
              en: "Names the specific contract and explicitly excludes everything else, leaving no room for unagreed expansion.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«سنبدأ العمل فورًا ونرسل التفاصيل لاحقًا.»",
              en: "\"We'll start work immediately and send details later.\"",
            },
            rationale: {
              ar: "البدء قبل تأكيد النطاق كتابيًا يعكس الترتيب الصحيح؛ التفاصيل يجب أن تسبق العمل لا أن تتبعه.",
              en: "Starting before confirming scope in writing reverses the correct order; details must precede the work, not follow it.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«سنراجع العقد إن كان لديكم وقت للمصادقة على ذلك لاحقًا.»",
              en: "\"We'll review the contract if you have time to sign off on that later.\"",
            },
            rationale: {
              ar: "صياغة مترددة تترك النطاق مفتوحًا لتفسيرات متعددة بدل تأكيد واضح.",
              en: "A hesitant phrasing that leaves scope open to multiple readings instead of a clear confirmation.",
            },
          },
        ],
      },
      {
        id: "act.fo.02.2",
        kind: "find_mistake",
        skillId: "skill.matter-intake",
        stage: 1,
        context: {
          ar: [
            "مقتطف من خطاب أرسله محامٍ لعميل: «سنساعدكم في موضوع الشركة الجديدة. سنبدأ فور استلام هذه الرسالة، وسنعلمكم بالتفاصيل أولاً بأول.»",
          ],
          en: [
            "Excerpt from a letter a lawyer sent a client: \"We'll help you with the new company matter. We'll start as soon as you receive this letter, and we'll update you with details as we go.\"",
          ],
        },
        prompt: {
          ar: "ما الخطأ الأساسي في هذا المقتطف؟",
          en: "What's the core mistake in this excerpt?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "لم يذكر اسم الشركة الجديدة.",
              en: "The company's name wasn't mentioned.",
            },
            rationale: {
              ar: "اسم الشركة تفصيل ثانوي؛ المشكلة الأعمق في غياب تحديد نطاق العمل نفسه.",
              en: "The company's name is a minor detail; the deeper problem is the missing definition of the work's scope itself.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«موضوع الشركة الجديدة» بلا تحديد لما يشمله العمل، ولا ذكر لما يُستثنى، والتفاصيل تُرسل بعد البدء لا قبله.",
              en: "\"The new company matter\" with no definition of what's covered, no mention of what's excluded, and details sent after work starts, not before.",
            },
            correct: true,
            rationale: {
              ar: "يبدأ العمل قبل تحديد حدوده، فيترك الباب مفتوحًا لتوقعات العميل غير المحدودة.",
              en: "Work begins before its boundaries are defined, leaving the client's expectations wide open with no limit.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "استخدم كلمة «سنساعدكم» بدل «سنمثلكم».",
              en: "He used \"we'll help you\" instead of \"we'll represent you.\"",
            },
            rationale: {
              ar: "اختيار الفعل ليس المشكلة؛ غياب تحديد النطاق هو الخلل الجوهري.",
              en: "Word choice isn't the issue; the missing scope definition is the real flaw.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "لم يذكر اسم المحامي المسؤول عن الملف.",
              en: "He didn't name the lawyer responsible for the file.",
            },
            rationale: {
              ar: "تفصيل مفيد لكنه ثانوي مقارنة بغياب أي تحديد لما يشمله العمل أصلاً.",
              en: "A useful detail, but secondary compared to the total absence of any definition of what the work covers.",
            },
          },
        ],
      },
      {
        id: "act.fo.02.3",
        kind: "fill_blank",
        skillId: "skill.matter-intake",
        stage: 1,
        prompt: {
          ar: "أكمل الجملة التي تحول خطابًا غامضًا إلى تأكيد نطاق واضح.",
          en: "Complete the sentence that turns a vague letter into a clear scope confirmation.",
        },
        hint: {
          ar: "الوضوح يأتي من تحديد ما يشمله العمل وما يستثنى منه معًا.",
          en: "Clarity comes from stating what's included and excluded together.",
        },
        template: {
          ar: "«يشمل نطاق عملنا {{0}} فقط، ولا يشمل {{1}} ما لم نتفق كتابيًا على خلاف ذلك.»",
          en: "\"Our scope of work covers {{0}} only, and does not include {{1}} unless we agree otherwise in writing.\"",
        },
        blanks: [
          {
            id: "b1",
            options: [
              { ar: "المسألة المحددة التي ناقشناها", en: "the specific matter we discussed" },
              { ar: "كل ما قد يحتاجه العميل مستقبلاً", en: "anything the client might need in future" },
              { ar: "أي عمل يبدو مرتبطًا بشكل عام", en: "any work that seems generally related" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "تحديد المسألة بدقة هو ما يمنع أي طرف من افتراض نطاق أوسع.",
              en: "Precisely naming the matter is what stops either side from assuming a broader scope.",
            },
          },
          {
            id: "b2",
            options: [
              { ar: "أي مسألة أخرى غير مذكورة صراحةً", en: "any other matter not explicitly mentioned" },
              { ar: "التفاصيل الصغيرة داخل الملف نفسه", en: "small details inside the matter itself" },
              { ar: "التواصل المستمر مع العميل", en: "ongoing communication with the client" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "الاستثناء الصريح يمنع توسيع النطاق تلقائيًا دون اتفاق أو أتعاب جديدة.",
              en: "An explicit exclusion prevents scope from silently expanding without a new agreement or fee.",
            },
          },
        ],
      },
      {
        id: "act.fo.02.4",
        kind: "email_rewrite",
        skillId: "skill.matter-intake",
        stage: 1,
        grading: "ai_rubric",
        rubricId: "rubric.firm-operations-written.v1",
        weight: 2,
        minChars: 150,
        context: {
          ar: [
            "عميلة جديدة، صاحبة مصنع الرواء للتغليف، وافقت على مراجعة عقد توزيع واحد فقط. أرسل زميلك رسالة تأكيد نطاق فضفاضة قبل إرسالها إليها.",
          ],
          en: [
            "A new client, the owner of Al-Rawaa Packaging Factory, agreed to a review of exactly one distribution contract. Your colleague drafted a loose scope confirmation before it goes out.",
          ],
        },
        prompt: {
          ar: "أعد صياغة رسالة تأكيد النطاق التالية لتصبح دقيقة الحدود.",
          en: "Rewrite the following scope confirmation message to make its boundaries precise.",
        },
        draft: {
          ar: ["«سنتابع موضوع العقود لديكم، وسنرسل التفاصيل لاحقًا بعد البدء.»"],
          en: ["\"We'll handle your contracts matter, and we'll send details later once we start.\""],
        },
        modelAnswer: {
          ar: [
            "«سيقتصر عملنا على مراجعة عقد التوزيع الموقّع مع تاجر الجملة فقط، ولا يشمل أي عقد آخر لديكم.»",
            "«المدة المتوقعة أسبوع واحد، والأتعاب مبلغ مقطوع قدره ما اتفقنا عليه هاتفيًا. سنبدأ فور استلامكم هذا التأكيد.»",
          ],
          en: [
            "\"Our work will be limited to reviewing the distribution contract signed with the wholesaler only, and does not include any other contract of yours.\"",
            "\"Expected duration is one week, and fees are the fixed amount we agreed on by phone. We'll start once you confirm receipt of this letter.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«سنتابع موضوع العقود لديكم، وسنرسل التفاصيل لاحقًا بعد البدء.»"],
            en: ["\"We'll handle your contracts matter, and we'll send details later once we start.\""],
          },
          whatIsWrong: {
            ar: "«موضوع العقود» غامض يوحي بمراجعة شاملة، والتفاصيل تصل بعد البدء لا قبله، فيفقد الخطاب وظيفته الأساسية.",
            en: "\"Your contracts matter\" is vague and implies a full review, and details arrive after work starts rather than before, defeating the letter's whole purpose.",
          },
        },
      },
      {
        id: "act.fo.02.5",
        kind: "reflection",
        skillId: "skill.matter-intake",
        stage: 1,
        grading: "self_report",
        prompt: {
          ar: "استرجع خلافًا مع عميل حول ما كان مشمولًا بالعمل فعلاً. ماذا كان مكتوبًا، أو غير مكتوب، في خطاب النطاق الأصلي؟",
          en: "Recall a disagreement with a client over what the work actually covered. What was written, or not written, in the original scope letter?",
        },
        followUp: {
          ar: "لو أضفت جملة استثناء واحدة واضحة، هل كان الخلاف ليحدث أصلاً؟",
          en: "Had you added one clear exclusion sentence, would the disagreement have happened at all?",
        },
      },
    ],
    summaryCard: {
      id: "card.fo.02",
      title: {
        ar: "الوضوح الذي يوفر عشر مكالمات",
        en: "The Clarity That Saves Ten Phone Calls",
      },
      whatYouLearned: {
        ar: [
          "خطاب غامض يترك للعميل مساحة ليتخيل نطاقًا أوسع مما اتفقتما عليه.",
          "أربعة عناصر تحمي النطاق: ما يشمله، ما يستثنى، الجدول الزمني، والأتعاب.",
          "الخطاب يُرسل قبل بدء العمل، لا بعده.",
        ],
        en: [
          "A vague letter leaves the client room to imagine a scope wider than what you agreed.",
          "Four elements protect scope: what's covered, what's excluded, the timeline, and fees.",
          "The letter goes out before work starts, not after.",
        ],
      },
      framework: {
        name: {
          ar: "أربعة عناصر: يشمل · يستثني · الموعد · الأتعاب",
          en: "Four Elements: Covers · Excludes · Timeline · Fees",
        },
        steps: [
          { ar: "اذكر بدقة ما يشمله العمل.", en: "State precisely what the work covers." },
          { ar: "استثنِ صراحةً ما لا يشمله.", en: "Explicitly exclude what it doesn't." },
          { ar: "ضع جدولًا زمنيًا تقديريًا واقعيًا.", en: "Give a realistic estimated timeline." },
          { ar: "وضّح أساس الأتعاب بلا غموض.", en: "State the fee basis with no ambiguity." },
        ],
      },
      rememberThis: {
        ar: "«سنتابع الموضوع» ليست تأكيد نطاق؛ هي دعوة مفتوحة لتوقعات لا حدود لها.",
        en: "\"We'll handle the matter\" isn't a scope confirmation; it's an open invitation to limitless expectations.",
      },
      useItTomorrow: {
        ar: "قبل بدء أي ملف جديد غدًا، أرسل خطاب نطاق يذكر ما يشمله العمل وما يستثنى منه في جملتين فقط.",
        en: "Before starting any new matter tomorrow, send a scope letter stating what's covered and excluded in just two sentences.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.client-centered-law-firm", "src.legal-project-management"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 03 — A File Anyone Can Find in Thirty Seconds
  // =========================================================================
  {
    id: "unit.fo.03",
    chapterId: "ch.fo.taking-on-a-matter",
    order: 3,
    title: {
      ar: "ملف يجده أي شخص خلال ثلاثين ثانية",
      en: "A File Anyone Can Find in Thirty Seconds",
    },
    subtitle: {
      ar: "الملف المنظم من اليوم الأول ليس رفاهية؛ هو ما ينقذك حين يسألك شريك عن مستند وأنت خارج المكتب",
      en: "An organized file from day one isn't a luxury; it's what saves you when a partner asks for a document while you're out of the office.",
    },
    primarySkillId: "skill.file-organisation",
    skillIds: ["skill.file-organisation"],
    stage: 2,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.fo.03.hook",
        text: {
          ar: "اتصل بك شريكك من قاعة المحكمة: «أرسل لي فورًا خطاب الإنذار الأول لملف فنار للشحن.» بحثت في بريدك، ثم في سطح المكتب، ثم في مجلد باسمك... أين كان يجب أن يكون؟",
          en: "Your partner called from the courthouse: \"Send me the first warning letter from the Fanar Shipping file, now.\" You searched your inbox, then your desktop, then a folder with your own name on it... Where should it have been all along?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.fo.03.why",
        text: {
          ar: "ملف بلا نظام واضح يعتمد على ذاكرتك وحدها؛ في اللحظة التي تغيب فيها، أو تنسى، يتوقف العمل كله بانتظارك.",
          en: "A file with no clear system depends on your memory alone; the moment you're away, or forget, the whole matter stalls waiting for you.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.fo.03.goals",
        goals: {
          ar: [
            "أن تحدد بنية مجلدات ثابتة تصلح لأي نوع ملف، لا بنية تُخترع من جديد كل مرة.",
            "أن تسمّي كل مستند بطريقة يفهمها أي زميل دون فتحه أولاً.",
            "أن تضع كل مستند جديد في مكانه الصحيح فور استلامه، لا في وقت لاحق.",
          ],
          en: [
            "Define a fixed folder structure that fits any matter type, not one reinvented each time.",
            "Name every document so any colleague understands it without opening it first.",
            "Place every new document in its correct spot the moment it arrives, not later.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.fo.03.lesson",
        title: {
          ar: "بنية واحدة، لا بنية جديدة كل مرة",
          en: "One Structure, Not a New One Every Time",
        },
        body: {
          ar: [
            "الخطأ الشائع: ابتكار بنية مجلدات جديدة لكل ملف حسب مزاج اللحظة، فيصبح كل ملف لغزًا مختلفًا لأي شخص غير من فتحه.",
            "الحل: بنية ثابتة تتكرر في كل ملف — مراسلات، مستندات مستلمة من العميل، مسودات صادرة، وإداري ومالي. أربعة مجلدات تكفي لمعظم الملفات.",
            "التسمية بالقدر نفسه من الأهمية: تاريخ بصيغة موحدة، ثم وصف مختصر، ثم اسم الطرف إن لزم. «٢٠٢٦-٠٣-١٠ إنذار أول لشركة فنار» أوضح من «مستند نهائي جديد ٢».",
            "القاعدة الذهبية: ضع كل مستند في مكانه فور استلامه أو إصداره، لا في «وقت لاحق» غالبًا لا يأتي أبدًا.",
            "اختبار بسيط لأي نظام تنظيم: هل يستطيع زميل لم يرَ الملف من قبل أن يجد المستند المطلوب خلال ثلاثين ثانية؟ إن لم يستطع، فالنظام غير كافٍ.",
          ],
          en: [
            "The common mistake: inventing a new folder structure for every file based on the moment's mood, so each matter becomes a different puzzle for anyone but whoever set it up.",
            "The fix: one fixed structure repeated across every matter — correspondence, documents received from the client, outgoing drafts, and admin & billing. Four folders cover most matters.",
            "Naming matters just as much: a consistent date format, then a short description, then the party's name if needed. \"2026-03-10 first warning letter Fanar\" beats \"final document new 2.\"",
            "The golden rule: file every document the moment it arrives or is issued, not \"later,\" which usually never comes.",
            "A simple test for any system: can a colleague who's never seen the file find the needed document within thirty seconds? If not, the system isn't good enough.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.fo.03.visual",
        title: {
          ar: "بنية ثابتة مقابل فوضى متكررة",
          en: "A Fixed Structure vs. Repeated Chaos",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "المجلدات الأربعة", en: "Four folders" },
            detail: {
              ar: "مراسلات، مستندات العميل، مسودات صادرة، إداري ومالي.",
              en: "Correspondence, client documents, outgoing drafts, admin & billing.",
            },
            tone: "positive",
          },
          {
            label: { ar: "التسمية الموحدة", en: "Consistent naming" },
            detail: {
              ar: "تاريخ، ثم وصف مختصر، ثم اسم الطرف عند الحاجة.",
              en: "Date, then short description, then party name if needed.",
            },
            tone: "positive",
          },
          {
            label: { ar: "الحفظ الفوري", en: "Immediate filing" },
            detail: {
              ar: "كل مستند في مكانه فور استلامه، لا لاحقًا.",
              en: "Every document in its place the moment it arrives, not later.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "اختبار الثلاثين ثانية", en: "The thirty-second test" },
            detail: {
              ar: "هل يجد زميل غريب عن الملف المستند المطلوب بهذه السرعة؟",
              en: "Can a colleague unfamiliar with the file find it that fast?",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.fo.03.worked",
        strong: {
          label: {
            ar: "مساعد يحفظ كل مستند فور استلامه",
            en: "An associate who files every document the moment it arrives",
          },
          text: {
            ar: [
              "«فور استلام رد فنار للشحن، حفظته باسم ٢٠٢٦-٠٣-١٠ رد فنار على الإنذار الأول داخل مجلد مراسلات الملف مباشرة.»",
              "«حين طلب مني الشريك المستند من قاعة المحكمة، وجدته خلال أقل من دقيقة رغم أنني لم أفتح الملف منذ أسبوع.»",
            ],
            en: [
              "\"The moment Fanar Shipping's reply arrived, I saved it as '2026-03-10 Fanar reply to first warning' straight into the file's correspondence folder.\"",
              "\"When the partner asked for the document from the courthouse, I found it in under a minute, even though I hadn't opened the file in a week.\"",
            ],
          },
          why: {
            ar: "الحفظ الفوري بتسمية واضحة جعل المستند قابلاً للإيجاد بسرعة حتى بعد غياب طويل نسبيًا عن الملف.",
            en: "Immediate filing with a clear name made the document findable fast, even after a relatively long stretch away from the file.",
          },
        },
        weak: {
          label: {
            ar: "مساعدة تترك المستندات في البريد الوارد",
            en: "An assistant who leaves documents sitting in her inbox",
          },
          text: {
            ar: [
              "«تركت رسالة فنار في بريدي الوارد بنية حفظها لاحقًا حين يتوفر وقت.»",
              "مرّ أسبوعان، ووصلت رسائل أخرى كثيرة فوقها، وحين طُلب المستند لم تتذكر حتى أنها استلمته.",
            ],
            en: [
              "\"I left Fanar's message in my inbox, meaning to file it later when I had time.\"",
              "Two weeks passed, many other emails piled on top of it, and when the document was requested she didn't even remember receiving it.",
            ],
          },
          why: {
            ar: "«لاحقًا» تحول إلى نسيان كامل؛ المستند موجود لكنه غير قابل للإيجاد لأي شخص، بما فيها هي نفسها.",
            en: "\"Later\" turned into total forgetting; the document exists but is unfindable by anyone, including her.",
          },
        },
      },
      { kind: "activity", id: "s.fo.03.a1", activityId: "act.fo.03.1", mode: "quick" },
      { kind: "activity", id: "s.fo.03.a2", activityId: "act.fo.03.2", mode: "guided" },
      { kind: "activity", id: "s.fo.03.a3", activityId: "act.fo.03.3", mode: "guided" },
      { kind: "activity", id: "s.fo.03.a4", activityId: "act.fo.03.4", mode: "independent" },
      { kind: "activity", id: "s.fo.03.a5", activityId: "act.fo.03.5", mode: "independent" },
      { kind: "summary", id: "s.fo.03.summary", summaryCardId: "card.fo.03" },
      {
        kind: "apply_tomorrow",
        id: "s.fo.03.apply",
        task: {
          ar: "افتح أي ملف نشط غدًا وتحقق: هل كل مستند في مجلده الصحيح باسم واضح؟",
          en: "Open any active matter tomorrow and check: is every document in its correct folder with a clear name?",
        },
        detail: {
          ar: "أعد تسمية أول مستند غامض تجده فورًا، لا لاحقًا.",
          en: "Rename the first vaguely named document you find immediately, not later.",
        },
      },
      {
        kind: "next_mission",
        id: "s.fo.03.next",
        teaser: {
          ar: "نظمت الملف الفردي بإتقان. لكن ماذا عن نوع الملف الذي يتكرر عشرات المرات؟ الوحدة القادمة: تصميم قائمة تحقق تمنع النسيان تحت الضغط.",
          en: "You've organized a single file well. But what about a matter type that repeats dozens of times? Next unit: designing a checklist that prevents things slipping under pressure.",
        },
      },
    ],
    activities: [
      {
        id: "act.fo.03.1",
        kind: "true_false",
        skillId: "skill.file-organisation",
        stage: 2,
        prompt: {
          ar: "«ما دام أنا أتذكر أين وضعت كل مستند، فتنظيم الملف بنظام موحّد ليس ضروريًا.»",
          en: "\"As long as I remember where I put every document, a unified filing system isn't necessary.\"",
        },
        options: [
          {
            id: "true",
            label: { ar: "صحيح", en: "True" },
            rationale: {
              ar: "غير صحيح. ذاكرتك تكفي فقط طالما بقيت أنت متاحًا؛ أي غياب أو إجازة يوقف أي شخص آخر عن إيجاد أي شيء.",
              en: "Incorrect. Your memory only works as long as you're available; any absence or leave stops everyone else from finding anything.",
            },
          },
          {
            id: "false",
            label: { ar: "خطأ", en: "False" },
            correct: true,
            rationale: {
              ar: "صحيح. النظام الموحّد يحمي الملف من الاعتماد على شخص واحد، ويجعل أي زميل قادرًا على المتابعة دون انتظارك.",
              en: "Correct. A unified system protects the file from depending on one person, and lets any colleague pick it up without waiting for you.",
            },
          },
        ],
      },
      {
        id: "act.fo.03.2",
        kind: "matching",
        skillId: "skill.file-organisation",
        stage: 2,
        prompt: {
          ar: "طابق كل نوع مستند بالمجلد الصحيح الذي ينتمي إليه.",
          en: "Match each document type to the folder it correctly belongs in.",
        },
        accessibleAlternative: {
          ar: "اختر رقم المجلد الصحيح من قائمة منسدلة بجانب كل مستند بدل السحب.",
          en: "Pick the correct folder number from a dropdown beside each document instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "رسالة واردة من العميل تحتوي عقد العمل الأصلي.", en: "An incoming message from the client containing the original employment contract." },
            right: { ar: "مستندات مستلمة من العميل", en: "Documents received from the client" },
            rationale: {
              ar: "كل ما يصل من العميل نفسه يُحفظ في مجلد واحد مخصص له، بصرف النظر عن نوعه.",
              en: "Anything arriving from the client goes into one dedicated folder, regardless of its type.",
            },
          },
          {
            id: "p2",
            left: { ar: "مسودة خطاب إنهاء الخدمة قبل إرسالها للعميل للمراجعة.", en: "A draft termination letter before it's sent to the client for review." },
            right: { ar: "مسودات صادرة", en: "Outgoing drafts" },
            rationale: {
              ar: "المسودات غير المرسلة بعد تحتاج مكانًا منفصلاً عن المراسلات المرسلة فعلاً.",
              en: "Drafts not yet sent need a place separate from correspondence that's actually gone out.",
            },
          },
          {
            id: "p3",
            left: { ar: "رد المحامي الخارجي لفنار للشحن على الإنذار الأول.", en: "Fanar Shipping's outside counsel's reply to the first warning." },
            right: { ar: "مراسلات", en: "Correspondence" },
            rationale: {
              ar: "التبادل الرسمي بين الطرفين المتنازعين ينتمي لمجلد المراسلات، لا مجلد مستندات العميل.",
              en: "Formal exchanges between the disputing parties belong in the correspondence folder, not the client-documents folder.",
            },
          },
          {
            id: "p4",
            left: { ar: "فاتورة الأتعاب الشهرية الصادرة عن المكتب لهذا الملف.", en: "The firm's monthly fee invoice issued for this matter." },
            right: { ar: "إداري ومالي", en: "Admin & billing" },
            rationale: {
              ar: "كل ما يتعلق بالفوترة والإدارة الداخلية يُحفظ بعيدًا عن مستندات الموضوع القانوني نفسه.",
              en: "Everything related to billing and internal admin is kept separate from the substantive legal documents.",
            },
          },
        ],
      },
      {
        id: "act.fo.03.3",
        kind: "priority_ranking",
        skillId: "skill.file-organisation",
        stage: 2,
        prompt: {
          ar: "رتّب عناصر تسمية المستند حسب أهميتها لإيجاده لاحقًا بسرعة.",
          en: "Rank the elements of a document's name by how much they help find it quickly later.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الأولوية من قائمة منسدلة بجانب كل عنصر بدل السحب.",
          en: "Pick the priority number from a dropdown beside each element instead of dragging.",
        },
        hint: {
          ar: "التاريخ الموحد هو ما يرتب المستندات تلقائيًا داخل أي مجلد.",
          en: "A consistent date is what automatically orders documents inside any folder.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "تاريخ بصيغة موحدة في بداية اسم الملف.",
              en: "A consistent date format at the start of the file name.",
            },
            rationale: {
              ar: "الأهم؛ يرتب كل المستندات زمنيًا تلقائيًا دون أي جهد إضافي.",
              en: "Most important; automatically orders every document chronologically with no extra effort.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "وصف مختصر وواضح لمحتوى المستند.",
              en: "A short, clear description of the document's content.",
            },
            rationale: {
              ar: "ثانٍ مباشرة بعد التاريخ؛ يوضح المحتوى دون الحاجة لفتح الملف.",
              en: "Right after the date; clarifies content without needing to open the file.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "اسم الطرف الآخر إن كان هناك أكثر من طرف في الملف.",
              en: "The other party's name, if the matter involves more than one party.",
            },
            rationale: {
              ar: "مفيد حين يتشابك أكثر من طرف، لكنه أقل أهمية من التاريخ والوصف.",
              en: "Useful when multiple parties are involved, but less important than the date and description.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "رقم إصدار داخلي للمسودة لا يفهمه إلا من كتبها.",
              en: "An internal draft version number only its author understands.",
            },
            rationale: {
              ar: "الأقل أهمية؛ رمز شخصي لا يخدم أي شخص آخر يحاول فهم الاسم.",
              en: "Least important; a personal code that doesn't help anyone else understand the name.",
            },
          },
        ],
      },
      {
        id: "act.fo.03.4",
        kind: "short_written",
        skillId: "skill.file-organisation",
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.firm-operations-written.v1",
        weight: 2,
        minChars: 150,
        context: {
          ar: [
            "فتحت مجلد ملف فنار للشحن فوجدت مستندات باسم «مستند جديد»، «نسخة نهائية»، و«نسخة نهائية ٢»، بلا أي تاريخ أو وصف.",
            "الشريك يحتاج المستند الصحيح خلال دقائق قبل جلسة مستعجلة.",
          ],
          en: [
            "You open the Fanar Shipping file folder and find documents named \"new document,\" \"final version,\" and \"final version 2,\" with no date or description.",
            "The partner needs the correct document within minutes before an urgent hearing.",
          ],
        },
        prompt: {
          ar: "اكتب (٦٠-١٠٠ كلمة) كيف ستعيد تسمية هذه المستندات وتنظمها الآن، ولماذا تختار هذا الترتيب.",
          en: "Write (60-100 words) how you'll rename and reorganize these documents now, and why you chose that structure.",
        },
        modelAnswer: {
          ar: [
            "«سأعيد تسمية كل مستند بصيغة: التاريخ، ثم وصف مختصر، مثل ٢٠٢٦-٠٢-١٥ مسودة إنذار أول و٢٠٢٦-٠٣-١٠ نسخة نهائية موقعة.»",
            "«سأنقل كل مستند لمجلده الصحيح: المسودات في مجلد المسودات الصادرة، والنسخة الموقعة النهائية في مجلد المراسلات. هذا يجعل أي شخص، بما فيه أنا لاحقًا، يجد المستند الصحيح خلال ثوانٍ.»",
          ],
          en: [
            "\"I'll rename each document as: date, then short description, like '2026-02-15 draft first warning' and '2026-03-10 signed final version.'\"",
            "\"I'll move each into its correct folder: drafts into outgoing drafts, and the final signed copy into correspondence. This lets anyone, including me later, find the right document in seconds.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«سأكتفي بحذف النسخ القديمة والاحتفاظ بأحدث نسخة تسمى نسخة نهائية.»"],
            en: ["\"I'll just delete the old versions and keep the newest one named 'final version.'\""],
          },
          whatIsWrong: {
            ar: "حذف النسخ القديمة يفقد سجلاً قد يُحتاج لاحقًا، و«نسخة نهائية» بلا تاريخ تبقى غامضة لأي شخص آخر يبحث عنها مستقبلاً.",
            en: "Deleting old versions loses a record that might be needed later, and \"final version\" with no date stays just as vague for anyone else searching for it in future.",
          },
        },
      },
      {
        id: "act.fo.03.5",
        kind: "reflection",
        skillId: "skill.file-organisation",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع لحظة بحثت فيها طويلاً عن مستند كان يجب أن تجده خلال ثوانٍ. ماذا كان سبب الفوضى تحديدًا؟",
          en: "Recall a moment you searched at length for a document that should've taken seconds to find. What exactly caused the chaos?",
        },
        followUp: {
          ar: "لو طبقت البنية الثابتة والتسمية الموحدة من البداية، كم كان الوقت الذي توفره؟",
          en: "Had you applied the fixed structure and consistent naming from the start, how much time would you have saved?",
        },
      },
    ],
    summaryCard: {
      id: "card.fo.03",
      title: {
        ar: "ملف واحد، بنية واحدة، كل مرة",
        en: "One File, One Structure, Every Time",
      },
      whatYouLearned: {
        ar: [
          "ملف بلا نظام واضح يعتمد على ذاكرتك وحدها، ويتوقف العمل حين تغيب.",
          "أربعة مجلدات ثابتة تكفي معظم الملفات: مراسلات، مستندات العميل، مسودات صادرة، إداري ومالي.",
          "اختبار الثلاثين ثانية يكشف إن كان نظامك كافيًا فعلاً أم لا.",
        ],
        en: [
          "A file with no clear system depends on your memory alone, and work stalls when you're away.",
          "Four fixed folders cover most matters: correspondence, client documents, outgoing drafts, and admin & billing.",
          "The thirty-second test reveals whether your system is actually good enough.",
        ],
      },
      framework: {
        name: {
          ar: "أربعة مجلدات وتسمية موحدة",
          en: "Four Folders and Consistent Naming",
        },
        steps: [
          { ar: "استخدم البنية الرباعية نفسها في كل ملف.", en: "Use the same four-folder structure in every matter." },
          { ar: "سمِّ كل مستند بتاريخ ثم وصف مختصر.", en: "Name every document with a date, then a short description." },
          { ar: "احفظ كل مستند في مكانه فور استلامه أو إصداره.", en: "File every document the moment it arrives or is issued." },
          { ar: "اختبر النظام: هل يجده زميل غريب خلال ثلاثين ثانية؟", en: "Test the system: can an unfamiliar colleague find it in thirty seconds?" },
        ],
      },
      rememberThis: {
        ar: "ملف منظم لا يخدمك أنت فقط؛ هو ما يبقي الملف يعمل حتى حين تكون خارج المكتب.",
        en: "An organized file doesn't just serve you; it's what keeps the matter running even when you're out of the office.",
      },
      useItTomorrow: {
        ar: "افتح ملفًا نشطًا غدًا وأعد تسمية أي مستند غامض بصيغة التاريخ والوصف الواضح.",
        en: "Open an active matter tomorrow and rename any vaguely named document using the date-and-clear-description format.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.modernize-your-law-firm", "src.legal-ops-kpis"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 04 — A Checklist That Survives Time Pressure
  // =========================================================================
  {
    id: "unit.fo.04",
    chapterId: "ch.fo.organizing-the-file",
    order: 4,
    title: {
      ar: "قائمة تحقق تنجو من ضغط الوقت",
      en: "A Checklist That Survives Time Pressure",
    },
    subtitle: {
      ar: "الملفات المتكررة لا تفشل لغياب الخبرة، بل لأن خطوة واحدة اعتيادية سقطت تحت الضغط ولم يلاحظها أحد",
      en: "Recurring matters don't fail from lack of expertise; they fail when one routine step drops under pressure and no one notices.",
    },
    primarySkillId: "skill.workflow-design",
    skillIds: ["skill.workflow-design"],
    stage: 2,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.fo.04.hook",
        text: {
          ar: "تولّيت ملف شيك مرتجع رقم عشرين هذا الشهر. بدا روتينيًا كسابقيه، فتخطيت خطوة واحدة اعتدت إنجازها تلقائيًا. بعد أسبوعين، اكتشفت أن الإنذار لم يُرسل أصلاً. لماذا؟",
          en: "You picked up the twentieth bounced-cheque file this month. It looked routine like the others, so you skipped one step you usually do automatically. Two weeks later, you discovered the warning notice was never sent. Why?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.fo.04.why",
        text: {
          ar: "الملفات المتكررة تخلق وهم الأمان: تبدو سهلة لدرجة أن العقل يعمل بذاكرة تلقائية بدل قائمة تحقق فعلية، وهناك بالضبط تسقط الخطوات.",
          en: "Recurring matters create a false sense of safety: they feel so routine that the mind runs on autopilot instead of an actual checklist — and that's exactly where steps get dropped.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.fo.04.goals",
        goals: {
          ar: [
            "أن تحدد خطوات نوع ملف متكرر بوضوح كافٍ ليتبعها أي شخص دون الاعتماد على ذاكرته.",
            "أن تصمم قائمة تحقق قصيرة تغطي النقاط التي يسهل نسيانها تحديدًا تحت الضغط.",
            "أن تقرر بثقة متى يجوز تسريع خطوة ومتى لا يجوز تخطيها إطلاقًا.",
          ],
          en: [
            "Define the steps of a recurring matter type clearly enough for anyone to follow without relying on memory.",
            "Design a short checklist covering the points that are easiest to forget specifically under pressure.",
            "Confidently decide when a step can be sped up, and when it must never be skipped.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.fo.04.lesson",
        title: {
          ar: "الروتين هو بالضبط ما يسقط أولاً",
          en: "Routine Is Exactly What Slips First",
        },
        body: {
          ar: [
            "الخطأ الشائع: افتراض أن الملفات المتكررة أقل خطرًا لأنها مألوفة. الحقيقة العكسية: الألفة تجعل العقل يتجاوز خطوات دون تسجيل واعٍ لذلك.",
            "قائمة التحقق الجيدة لا تسرد كل التفاصيل التنفيذية؛ هي تركز فقط على النقاط التي يثبت الواقع أنها تُنسى تحت الضغط تحديدًا.",
            "لكل خطوة في القائمة، اسأل: ماذا يحدث فعلاً إن سقطت هذه الخطوة تحديدًا؟ إن كان الجواب «لا شيء خطير»، فقد لا تحتاج مكانًا في القائمة أصلاً.",
            "بعض الخطوات يمكن تسريعها بأمان تحت ضغط الوقت؛ وبعضها الآخر لا يجوز تخطيه إطلاقًا مهما بلغ الاستعجال، لأن كلفة سقوطه لا تُصلح لاحقًا بسهولة.",
            "القائمة مفيدة فقط إن استُخدمت فعلاً في كل ملف، لا في الملفات «المعقدة» فقط؛ فالملف العشرون هو الأخطر لأنه يبدو الأقل احتياجًا لها.",
          ],
          en: [
            "The common mistake: assuming recurring matters are lower-risk because they're familiar. The opposite is true: familiarity is exactly what lets the mind skip steps without consciously registering it.",
            "A good checklist doesn't list every execution detail; it focuses only on the points reality proves get forgotten specifically under pressure.",
            "For each item on the list, ask: what actually happens if this specific step drops? If the answer is \"nothing serious,\" it may not belong on the list at all.",
            "Some steps can safely be sped up under time pressure; others must never be skipped, no matter the rush, because the cost of dropping them isn't easily fixed later.",
            "A checklist only helps if it's actually used on every matter, not just the \"complicated\" ones; the twentieth file is the riskiest precisely because it looks the least in need of it.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.fo.04.visual",
        title: {
          ar: "بناء قائمة تحقق تنجو من الضغط",
          en: "Building a Checklist That Survives Pressure",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "حدد الخطوات الفعلية", en: "List the actual steps" },
            detail: {
              ar: "اكتب كل خطوة يمر بها هذا النوع من الملفات من البداية للنهاية.",
              en: "Write every step this matter type actually goes through, start to finish.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "اسأل: ماذا يحدث إن سقطت؟", en: "Ask: what happens if it drops?" },
            detail: {
              ar: "استبعد أي خطوة لا يترتب على سقوطها ضرر حقيقي.",
              en: "Drop any step whose failure causes no real harm.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "صنّف: يجوز تسريعها أم لا يجوز تخطيها؟", en: "Classify: speed-up-safe, or never-skip?" },
            detail: {
              ar: "حدد لكل خطوة متبقية أي الفئتين تنتمي إليها.",
              en: "For each remaining step, decide which category it belongs to.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "استخدمها في كل ملف، لا الصعب فقط", en: "Use it on every file, not just the hard ones" },
            detail: {
              ar: "الملف الروتيني العشرون هو الأخطر تحديدًا لأنه يبدو الأقل احتياجًا.",
              en: "The twentieth routine file is the riskiest precisely because it looks least in need of it.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.fo.04.worked",
        strong: {
          label: {
            ar: "مساعدة قانونية تتبع القائمة رغم الاستعجال",
            en: "A legal assistant who follows the checklist despite the rush",
          },
          text: {
            ar: [
              "«الشيك المرتجع لصالح شركة ديرار للتجارة هو الملف الخامس اليوم، لكنني سأتحقق من القائمة رغم ذلك: هل أُرسل الإنذار الرسمي خلال المهلة القانونية؟»",
              "وجدت أنها لم ترسله بعد، فأرسلته فورًا قبل نهاية اليوم، رغم أن كل شيء آخر بدا اعتياديًا تمامًا.",
            ],
            en: [
              "\"The bounced cheque for Dirar Trading is the fifth file today, but I'll still check the list: was the formal warning notice sent within the legal deadline?\"",
              "She found it hadn't been sent yet, and sent it before day's end, even though everything else about the file looked entirely routine.",
            ],
          },
          why: {
            ar: "استخدمت القائمة رغم أن الملف بدا روتينيًا تمامًا، فأمسكت خطوة كانت لتسقط لولا التحقق الفعلي.",
            en: "She used the checklist even though the file looked entirely routine, catching a step that would have slipped without an actual check.",
          },
        },
        weak: {
          label: {
            ar: "مساعد يعمل بذاكرته على الملف العشرين",
            en: "An assistant working from memory on the twentieth file",
          },
          text: {
            ar: [
              "«أعرف هذا النوع من الملفات جيدًا، لست بحاجة لمراجعة القائمة في كل مرة.»",
              "لم يلاحظ أنه نسي إرسال الإنذار الرسمي إلا حين اتصل العميل بعد شهر يسأل لماذا لم يُتخذ أي إجراء.",
            ],
            en: [
              "\"I know this type of file well, I don't need to check the list every time.\"",
              "He didn't notice he'd forgotten to send the formal warning notice until the client called a month later asking why no action had been taken.",
            ],
          },
          why: {
            ar: "الثقة بالذاكرة على حساب القائمة الفعلية هي بالضبط ما يسمح لخطوة روتينية بالسقوط دون أن يلاحظها أحد.",
            en: "Trusting memory over the actual checklist is exactly what lets a routine step drop without anyone noticing.",
          },
        },
      },
      { kind: "activity", id: "s.fo.04.a1", activityId: "act.fo.04.1", mode: "quick" },
      { kind: "activity", id: "s.fo.04.a2", activityId: "act.fo.04.2", mode: "guided" },
      { kind: "activity", id: "s.fo.04.a3", activityId: "act.fo.04.3", mode: "guided" },
      { kind: "activity", id: "s.fo.04.a4", activityId: "act.fo.04.4", mode: "independent" },
      { kind: "activity", id: "s.fo.04.a5", activityId: "act.fo.04.5", mode: "independent" },
      { kind: "activity", id: "s.fo.04.a6", activityId: "act.fo.04.6", mode: "independent" },
      { kind: "summary", id: "s.fo.04.summary", summaryCardId: "card.fo.04" },
      {
        kind: "apply_tomorrow",
        id: "s.fo.04.apply",
        task: {
          ar: "اختر نوع ملف متكرر في عملك، واكتب ثلاث نقاط فقط لا يجوز تخطيها أبدًا.",
          en: "Pick a recurring matter type in your work, and write exactly three points that must never be skipped.",
        },
        detail: {
          ar: "شاركها مع زميل واحد على الأقل واطلب رأيه فيما فاتك.",
          en: "Share it with at least one colleague and ask what you might have missed.",
        },
      },
      {
        kind: "next_mission",
        id: "s.fo.04.next",
        teaser: {
          ar: "صممت قائمة تمنع النسيان. لكن ماذا يحدث لكل ما تعلمته من هذه الملفات المتكررة حين ينتهي الملف؟ الوحدة القادمة: كيف تحول الدرس إلى شيء يستفيد منه المكتب كله.",
          en: "You've designed a checklist that prevents things slipping. But what happens to everything you learned from these recurring files once each one closes? Next unit: turning the lesson into something the whole firm can use.",
        },
      },
    ],
    activities: [
      {
        id: "act.fo.04.1",
        kind: "multiple_choice",
        skillId: "skill.workflow-design",
        stage: 2,
        context: {
          ar: [
            "يتولى مكتبكم عشرات ملفات الشيكات المرتجعة شهريًا لعملاء متعددين، من بينهم شركة ديرار للتجارة.",
          ],
          en: [
            "Your firm handles dozens of bounced-cheque files a month for various clients, including Dirar Trading.",
          ],
        },
        prompt: {
          ar: "ما الأساس الصحيح لبناء قائمة تحقق لهذا النوع من الملفات؟",
          en: "What's the right basis for building a checklist for this matter type?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "سرد كل خطوة تنفيذية ممكنة بالتفصيل الكامل، مهما كانت بسيطة.",
              en: "Listing every possible execution step in full detail, however simple.",
            },
            rationale: {
              ar: "قائمة مطولة بلا تمييز تفقد فائدتها؛ لا أحد يراجعها فعليًا تحت ضغط الوقت.",
              en: "An overly long list with no filtering loses its purpose; no one actually checks it under time pressure.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "التركيز فقط على النقاط التي يثبت الواقع أنها تُنسى تحديدًا تحت الضغط.",
              en: "Focusing only on the points that reality proves get forgotten specifically under pressure.",
            },
            correct: true,
            rationale: {
              ar: "قائمة قصيرة ومركزة تُستخدم فعلاً، بخلاف قائمة شاملة تُهمَل لطولها.",
              en: "A short, focused list actually gets used, unlike a comprehensive one that gets ignored for being too long.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "الاعتماد على خبرة أقدم محامٍ في الفريق دون تدوين أي شيء مكتوب.",
              en: "Relying on the most senior lawyer's experience with nothing written down.",
            },
            rationale: {
              ar: "الخبرة الشفهية تختفي بغياب صاحبها؛ لا تحمي الملف حين يتولاه شخص آخر.",
              en: "Unwritten experience disappears when its holder is away; it doesn't protect the file when someone else takes it on.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "كتابة القائمة مرة واحدة، ثم عدم مراجعتها أو تحديثها مطلقًا.",
              en: "Writing the list once, and never reviewing or updating it again.",
            },
            rationale: {
              ar: "قائمة لا تُحدَّث تفقد صلتها مع تغير القوانين أو إجراءات المحكمة بمرور الوقت.",
              en: "A list never updated loses touch with changing laws or court procedures over time.",
            },
          },
        ],
      },
      {
        id: "act.fo.04.2",
        kind: "ordering",
        skillId: "skill.workflow-design",
        stage: 2,
        prompt: {
          ar: "رتّب خطوات ملف الشيك المرتجع النموذجي بالترتيب الصحيح.",
          en: "Order the steps of a typical bounced-cheque matter correctly.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the order number from a dropdown beside each step instead of dragging.",
        },
        hint: {
          ar: "الإنذار الرسمي يسبق أي إجراء قضائي.",
          en: "The formal warning notice precedes any court action.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "التحقق من صحة بيانات الشيك ورقم الحساب لدى البنك.",
              en: "Verify the cheque's data and account number with the bank.",
            },
            rationale: {
              ar: "الخطوة الأولى؛ أي خطأ في البيانات الأساسية يبطل كل ما يُبنى عليها لاحقًا.",
              en: "The first step; any error in the basic data invalidates everything built on it later.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "إرسال إنذار رسمي للمدين خلال المهلة القانونية المحددة.",
              en: "Send a formal warning notice to the debtor within the set legal deadline.",
            },
            rationale: {
              ar: "يجب أن يسبق أي إجراء قضائي، ويوثق محاولة حل الأمر وديًا أولاً.",
              en: "Must precede any court action, and documents a first attempt at an amicable resolution.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "تسجيل موعد انتهاء المهلة في نظام تذكير المكتب.",
              en: "Log the deadline's expiry in the firm's reminder system.",
            },
            rationale: {
              ar: "بعد إرسال الإنذار مباشرة، حتى لا يفوت أحد لحظة انتهاء المهلة وسط ملفات أخرى.",
              en: "Right after sending the notice, so no one misses the deadline's expiry amid other files.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "رفع الدعوى القضائية إن لم يستجب المدين خلال المهلة.",
              en: "File the court claim if the debtor doesn't respond within the deadline.",
            },
            rationale: {
              ar: "الخطوة الأخيرة؛ تأتي فقط بعد استنفاد الإنذار والمهلة القانونية كاملة.",
              en: "The last step; comes only after the warning and full legal deadline have been exhausted.",
            },
          },
        ],
      },
      {
        id: "act.fo.04.3",
        kind: "branching_decision",
        skillId: "skill.workflow-design",
        secondarySkillIds: ["skill.matter-intake"],
        stage: 2,
        weight: 2,
        context: {
          ar: [
            "الساعة الخامسة مساءً، ولديك خمسة ملفات شيكات مرتجعة جديدة وصلت اليوم فقط. الشريك يريد إغلاق ملف شركة ديرار للتجارة اليوم.",
          ],
          en: [
            "It's 5pm, and five new bounced-cheque files arrived just today. The partner wants the Dirar Trading file closed out today.",
          ],
        },
        prompt: {
          ar: "اختر ما تفعله في كل لحظة، وراقب أثر قرارك.",
          en: "Choose what you do at each moment, and watch the effect of your decision.",
        },
        accessibleAlternative: {
          ar: "كل خيار متاح كنص كامل بلا حاجة لسحب أو نقر متعدد؛ اختر الرد المناسب من القائمة في كل خطوة.",
          en: "Every option is available as full text with no drag or multi-tap needed; pick the appropriate response from the list at each step.",
        },
        startNodeId: "n1",
        nodes: [
          {
            id: "n1",
            text: {
              ar: "لم تتحقق بعد من صحة رقم حساب الشيك في ملف ديرار. الوقت ضيق.",
              en: "You haven't yet verified the cheque's account number in the Dirar file. Time is tight.",
            },
            choices: [
              {
                id: "n1c1",
                label: {
                  ar: "تتحقق من رقم الحساب أولاً حتى لو أخّر ذلك الإغلاق نصف ساعة.",
                  en: "You verify the account number first, even if it delays closing by half an hour.",
                },
                nextNodeId: "n2",
                quality: "strong",
                rationale: {
                  ar: "خطوة أساسية لا يجوز تخطيها؛ أي خطأ فيها يبطل الإنذار والدعوى لاحقًا.",
                  en: "A foundational step that must never be skipped; any error here invalidates the notice and claim later.",
                },
              },
              {
                id: "n1c2",
                label: {
                  ar: "تتجاوز التحقق لأن الملفات المشابهة عادة صحيحة البيانات.",
                  en: "You skip verification since similar files are usually accurate.",
                },
                nextNodeId: "n2",
                quality: "critical_mistake",
                rationale: {
                  ar: "افتراض الصحة بلا تحقق فعلي هو بالضبط الخطأ الذي تمنعه القائمة؛ خطأ في رقم الحساب يهدم الملف كله لاحقًا.",
                  en: "Assuming accuracy without an actual check is exactly the mistake the checklist prevents; an account-number error later collapses the whole file.",
                },
              },
              {
                id: "n1c3",
                label: {
                  ar: "تطلب من زميل التحقق بسرعة بينما تكمل خطوة أخرى.",
                  en: "You ask a colleague to verify quickly while you continue another step.",
                },
                nextNodeId: "n2",
                quality: "acceptable",
                rationale: {
                  ar: "يوفر وقتًا لكنه يفترض أن الزميل يعرف بالضبط ما يجب التحقق منه دون تفويت أي تفصيل.",
                  en: "Saves time, but assumes the colleague knows exactly what to verify without missing any detail.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "تحققت من الحساب وتبقى إرسال الإنذار الرسمي. الساعة الآن ٥:٤٥.",
              en: "You've verified the account, and the formal notice remains to be sent. It's now 5:45.",
            },
            choices: [
              {
                id: "n2c1",
                label: {
                  ar: "ترسل الإنذار الرسمي الآن، ثم تسجل موعد المهلة في نظام التذكير قبل مغادرة المكتب.",
                  en: "You send the formal notice now, then log the deadline in the reminder system before leaving.",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "أنجزت الخطوة الحرجة وربطتها بتذكير يحمي الملف من النسيان لاحقًا وسط الملفات الأخرى.",
                  en: "You completed the critical step and tied it to a reminder protecting the file from being forgotten later among others.",
                },
              },
              {
                id: "n2c2",
                label: {
                  ar: "ترسل الإنذار وتؤجل تسجيل الموعد في نظام التذكير ليوم غد.",
                  en: "You send the notice and postpone logging the reminder until tomorrow.",
                },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "الإنذار وحده بلا تذكير يترك المهلة عرضة للنسيان وسط الملفات الخمسة الجديدة التي وصلت اليوم.",
                  en: "The notice alone with no reminder leaves the deadline exposed to being forgotten among the five new files that arrived today.",
                },
              },
              {
                id: "n2c3",
                label: {
                  ar: "تؤجل الإنذار نفسه ليوم غد لأن الوقت تأخر، وتغلق الملف كمنجز مؤقتًا.",
                  en: "You postpone the notice itself until tomorrow since it's late, and close the file as done for now.",
                },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "إغلاق الملف قبل إرسال الإنذار الفعلي يعني أن أهم خطوة قانونية لم تحدث أصلاً، رغم أن الملف يبدو منجزًا.",
                  en: "Closing the file before actually sending the notice means the single most important legal step never happened, even though the file looks done.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.fo.04.4",
        kind: "short_written",
        skillId: "skill.workflow-design",
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.firm-operations-written.v1",
        weight: 2,
        minChars: 150,
        context: {
          ar: [
            "راجعت آخر خمسة ملفات شيكات مرتجعة أغلقها المكتب، فوجدت أن ثلاثة منها تأخر فيها تسجيل موعد المهلة في نظام التذكير، رغم إرسال الإنذار في وقته.",
          ],
          en: [
            "You reviewed the last five bounced-cheque files the firm closed, and found that three had a delayed reminder log despite the notice being sent on time.",
          ],
        },
        prompt: {
          ar: "اكتب (٦٠-١٠٠ كلمة) بندًا تضيفه لقائمة التحقق يمنع تكرار هذا الخطأ تحديدًا، مع شرح لماذا يستحق مكانًا في القائمة.",
          en: "Write (60-100 words) a checklist item you'd add to prevent this specific mistake from recurring, explaining why it deserves a place on the list.",
        },
        modelAnswer: {
          ar: [
            "«أضيف بندًا: فور إرسال الإنذار الرسمي، سجّل موعد انتهاء مهلته في نظام التذكير قبل الانتقال لأي ملف آخر، لا في نهاية اليوم.»",
            "«يستحق هذا مكانًا في القائمة لأن ثلاثة من خمسة ملفات أخيرة سقطت في هذه النقطة تحديدًا رغم إرسال الإنذار بشكل صحيح، ما يعني أنها نقطة ضعف حقيقية لا افتراضية.»",
          ],
          en: [
            "\"I'd add: the moment the formal notice is sent, log its deadline's expiry in the reminder system before moving to any other file, not at day's end.\"",
            "\"This deserves a place on the list because three of the last five files dropped at exactly this point despite the notice being sent correctly, meaning it's a real weak point, not a hypothetical one.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«أضيف بندًا: كن أكثر تنظيمًا في المرة القادمة.»"],
            en: ["\"I'd add: be more organized next time.\""],
          },
          whatIsWrong: {
            ar: "توصية عامة غير قابلة للتنفيذ أو القياس؛ لا تحدد متى يُنجز الفعل ولا كيف يُتحقق منه في الملف القادم.",
            en: "A generic, unactionable, unmeasurable recommendation; it specifies neither when the action happens nor how to verify it on the next file.",
          },
        },
      },
      {
        id: "act.fo.04.5",
        kind: "reflection",
        skillId: "skill.workflow-design",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع ملفًا متكررًا سقطت فيه خطوة روتينية ظننت أنك لن تنساها أبدًا. ما الذي جعلك تثق بذاكرتك بدل التحقق الفعلي؟",
          en: "Recall a recurring matter where a routine step slipped that you thought you'd never forget. What made you trust your memory instead of an actual check?",
        },
        followUp: {
          ar: "لو أضفت هذه الخطوة لقائمة تحقق مكتوبة، هل كانت لتسقط فعلاً؟",
          en: "Had you added that step to a written checklist, would it actually have slipped?",
        },
      },
      {
        id: "act.fo.04.6",
        kind: "best_response",
        skillId: "skill.workflow-design",
        stage: 2,
        weight: 2,
        context: {
          ar: [
            "مكتبكم يتولى عدة دعاوى إخلاء لصالح ملاك عقاريين، من بينهم شركة الواحة للاستثمار العقاري.",
            "لاحظت المساعدة القانونية نمطًا متكررًا عبر هذه الملفات تحديدًا: كل عميل يتصل أو يراسل مرة كل أسبوعين تقريبًا يسأل: «هل حُدد موعد الجلسة؟» رغم عدم وجود جديد فعليًا في أغلب الأحيان.",
          ],
          en: [
            "Your firm handles several eviction claims for landlord clients, including Al-Waha Real Estate Investment Company.",
            "A legal assistant noticed a recurring pattern across exactly these files: nearly every client calls or emails roughly every two weeks asking, \"has a hearing date been set?\" — even when there's usually nothing new to report.",
          ],
        },
        prompt: {
          ar: "قبل اقتراح أي حل لتقليل هذه الاتصالات المتكررة، ما الخطوة الصحيحة أولاً؟",
          en: "Before proposing any fix to reduce these recurring calls, what's the right first step?",
        },
        hint: {
          ar: "لا تسأل «كيف نمتص هذه الاتصالات؟» بل «لماذا يشعر هؤلاء العملاء تحديدًا بالحاجة للاتصال؟»",
          en: "Don't ask \"how do we absorb these calls?\" Ask \"why do these specific clients feel the need to call?\"",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "تحديد الحاجة الفعلية الكامنة وراء هذا النمط: ما الذي يجعل هؤلاء العملاء تحديدًا يشعرون بعدم اليقين كل أسبوعين، قبل اختيار أي أداة أو قناة جديدة.",
              en: "Identifying the actual need behind the pattern: what makes these specific clients feel uncertain every two weeks, before picking any new tool or channel.",
            },
            correct: true,
            rationale: {
              ar: "أي حل يُبنى قبل معرفة السبب الفعلي يخاطر بمعالجة عرَض بدل المشكلة؛ هنا الحاجة على الأرجح هي غياب معلومة استباقية عن حالة الملف، لا نقص في وسيلة التواصل.",
              en: "Any fix built before the real cause is known risks treating a symptom instead of the problem; here the need is likely a missing proactive update, not a shortage of contact channels.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "إعداد صفحة أسئلة شائعة عامة عن مراحل دعاوى الإخلاء ومدتها المتوقعة، لإرسالها لكل من يتصل.",
              en: "Building a general FAQ page about eviction case stages and typical duration, to send to anyone who calls.",
            },
            rationale: {
              ar: "تجيب عن سؤال عام عن الإجراءات، لكنها لا تخبر العميل بحالة ملفه هو تحديدًا؛ الاتصالات ستستمر لأن الحاجة الفعلية — معرفة وضع قضيته بالذات — لم تُعالَج.",
              en: "It answers a generic procedural question, but doesn't tell the client the status of their own file specifically; the calls will keep coming because the real need — knowing their own case's status — was never addressed.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "توظيف موظف استقبال إضافي مخصص للرد على هذا النوع من الاتصالات المتكررة.",
              en: "Hiring an extra receptionist dedicated to answering this kind of recurring call.",
            },
            rationale: {
              ar: "يمتص أثر المشكلة بتكلفة دائمة دون إزالة سببها؛ العملاء سيستمرون بالاتصال بلا حدود لأن شيئًا لم يتغيّر في تجربتهم الفعلية مع الملف.",
              en: "It absorbs the symptom at a permanent cost without removing its cause; clients will keep calling indefinitely because nothing has actually changed in their experience of the file.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "تزويد كل عميل بموعد متوقع مؤكد لصدور قرار المحكمة لطمأنته وإيقاف الاتصالات.",
              en: "Giving each client a confirmed expected date for the court's decision, to reassure them and stop the calls.",
            },
            rationale: {
              ar: "لا يملك المكتب سلطة تحديد موعد المحكمة أو ضمانه؛ وعد كهذا يُخلّ بثقة العميل حين يتغير الموعد الفعلي، وهو أمر متكرر في العمل القضائي.",
              en: "The firm has no authority to fix or guarantee a court date; a promise like this breaks the client's trust the moment the actual date shifts, which happens routinely in litigation.",
            },
          },
        ],
      },
    ],
    summaryCard: {
      id: "card.fo.04",
      title: {
        ar: "الروتين هو بالضبط ما يسقط أولاً",
        en: "Routine Is Exactly What Slips First",
      },
      whatYouLearned: {
        ar: [
          "الملفات المتكررة تخلق وهم أمان يجعل العقل يتجاوز خطوات دون تسجيل واعٍ.",
          "قائمة التحقق الجيدة قصيرة ومركزة على ما يُنسى فعلاً تحت الضغط، لا كل التفاصيل.",
          "القائمة مفيدة فقط إن استُخدمت في كل ملف، خاصة الملف الذي يبدو الأقل احتياجًا لها.",
        ],
        en: [
          "Recurring matters create a false sense of safety that lets the mind skip steps with no conscious record.",
          "A good checklist is short and focused on what actually gets forgotten under pressure, not every detail.",
          "A checklist only helps if used on every file, especially the one that looks least in need of it.",
        ],
      },
      framework: {
        name: {
          ar: "بناء قائمة تنجو من الضغط",
          en: "Building a Checklist That Survives Pressure",
        },
        steps: [
          { ar: "حدد كل خطوة فعلية يمر بها هذا النوع من الملفات.", en: "List every actual step this matter type goes through." },
          { ar: "اسأل لكل خطوة: ماذا يحدث فعلاً إن سقطت؟", en: "For each step, ask: what actually happens if it drops?" },
          { ar: "صنّف كل خطوة متبقية: يجوز تسريعها، أم لا يجوز تخطيها؟", en: "Classify each remaining step: speed-up-safe, or never-skip?" },
          { ar: "استخدم القائمة في كل ملف، لا الصعب أو الجديد فقط.", en: "Use the list on every file, not just the hard or new ones." },
        ],
      },
      rememberThis: {
        ar: "الملف العشرون هو الأخطر بالضبط لأنه يبدو الأقل احتياجًا لقائمة تحقق.",
        en: "The twentieth file is the riskiest precisely because it looks the least in need of a checklist.",
      },
      useItTomorrow: {
        ar: "اكتب قائمة تحقق من ثلاث نقاط فقط لأكثر نوع ملف يتكرر في عملك هذا الأسبوع.",
        en: "Write a three-point checklist for the matter type that recurs most in your work this week.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.legal-project-management", "src.small-firm-roadmap"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 05 — The Lesson You Don't Lose When the File Closes
  // =========================================================================
  {
    id: "unit.fo.05",
    chapterId: "ch.fo.organizing-the-file",
    order: 5,
    title: {
      ar: "الدرس الذي لا تفقده حين يُغلق الملف",
      en: "The Lesson You Don't Lose When the File Closes",
    },
    subtitle: {
      ar: "المكتب الذي يعيد اختراع الحل نفسه في كل ملف مشابه يخسر وقتًا لا يستعيده؛ مذكرة قصيرة بعد الإغلاق تنهي هذا التكرار",
      en: "A firm that reinvents the same solution on every similar file loses time it never gets back; one short note after closing ends that repetition.",
    },
    primarySkillId: "skill.knowledge-management",
    skillIds: ["skill.knowledge-management", "skill.file-organisation"],
    stage: 2,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.fo.05.hook",
        text: {
          ar: "أغلقت ملف نزاع دفعات مع مقاول بعد أشهر من العمل. بعد ستة أشهر، زميلة تواجه نزاعًا مشابهًا تمامًا وتبدأ من الصفر. ماذا حدث لكل ما تعلمته أنت؟",
          en: "You closed a contractor payment dispute after months of work. Six months later, a colleague faces an almost identical dispute and starts from zero. What happened to everything you learned?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.fo.05.why",
        text: {
          ar: "معرفة تبقى في رأس شخص واحد تختفي معه حين يغادر أو ينسى؛ المكتب الذي لا يوثقها يدفع كلفة تعلم الدرس نفسه مرارًا.",
          en: "Knowledge that stays in one person's head disappears when they leave or forget; a firm that doesn't document it pays the cost of learning the same lesson over and over.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.fo.05.goals",
        goals: {
          ar: [
            "أن تحدد ما يستحق التوثيق فعلاً بعد إغلاق ملف، لا كل تفصيل عابر فيه.",
            "أن تكتب مذكرة معرفة قصيرة يفهمها ويستخدمها زميل لم يرَ الملف الأصلي إطلاقًا.",
            "أن تصوغ الدرس بصيغة إجراء أو مبدأ عام، لا بصيغة وعد بنتيجة مضمونة.",
          ],
          en: [
            "Identify what's genuinely worth documenting after closing a matter, not every passing detail in it.",
            "Write a short knowledge note a colleague who never saw the original file can understand and use.",
            "Frame the lesson as a procedure or general principle, not a promise of a guaranteed outcome.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.fo.05.lesson",
        title: {
          ar: "مذكرة نصف صفحة توفر أسابيع",
          en: "A Half-Page Note That Saves Weeks",
        },
        body: {
          ar: [
            "الخطأ الشائع: الانتقال للملف التالي فور الإغلاق، فيبقى كل ما تعلمته حبيس ذاكرتك وحدها حتى يتلاشى تدريجيًا.",
            "المعرفة التي تستحق التوثيق ليست كل تفصيل، بل تحديدًا ما فاجأك أو أخذ وقتًا أطول من المتوقع لاكتشافه بنفسك.",
            "مذكرة جيدة تجيب على سؤال محدد: لو واجه زميل نزاعًا مشابهًا غدًا، ما الخطوة أو النموذج الذي يوفر عليه أسابيع من إعادة الاكتشاف؟",
            "تحذير مهم: المذكرة تصف إجراءً أو مبدأ عامًا ينطبق على حالات مشابهة، لا تَعِد بأن النتيجة نفسها ستتكرر؛ كل نزاع له وقائعه الخاصة.",
            "مذكرة نصف صفحة، بلغة بسيطة، محفوظة في مكان يبحث فيه الزملاء فعلاً، تفيد أكثر من تقرير مطول لا يقرأه أحد.",
          ],
          en: [
            "The common mistake: moving to the next file the moment one closes, leaving everything learned trapped in your memory alone until it gradually fades.",
            "Knowledge worth documenting isn't every detail — it's specifically what surprised you, or took longer than expected to figure out yourself.",
            "A good note answers one specific question: if a colleague faces a similar dispute tomorrow, what step or template saves them weeks of rediscovering it?",
            "An important caution: the note describes a procedure or general principle applicable to similar cases, not a promise the same outcome will repeat; every dispute has its own facts.",
            "A half-page note, in plain language, kept somewhere colleagues actually search, helps more than a long report no one reads.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.fo.05.visual",
        title: {
          ar: "مذكرة تُستخدم مقابل تقرير يُنسى",
          en: "A Note That Gets Used vs. a Report That Gets Forgotten",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "ما يستحق التوثيق", en: "What's worth documenting" },
            detail: {
              ar: "ما فاجأك أو أخذ وقتًا أطول من المتوقع لاكتشافه.",
              en: "What surprised you, or took longer than expected to figure out.",
            },
            tone: "positive",
          },
          {
            label: { ar: "السؤال الذي تجيب عنه", en: "The question it answers" },
            detail: {
              ar: "ما الذي يوفر على زميل أسابيع لو واجه حالة مشابهة؟",
              en: "What saves a colleague weeks if they face a similar case?",
            },
            tone: "positive",
          },
          {
            label: { ar: "التحذير الضروري", en: "The necessary caution" },
            detail: {
              ar: "مبدأ عام قابل لإعادة الاستخدام، لا وعد بنتيجة مضمونة.",
              en: "A reusable general principle, not a promise of a guaranteed outcome.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "المكان الصحيح", en: "The right place" },
            detail: {
              ar: "مكان يبحث فيه الزملاء فعلاً، لا مجلد شخصي منسي.",
              en: "Somewhere colleagues actually search, not a forgotten personal folder.",
            },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.fo.05.worked",
        strong: {
          label: {
            ar: "محامية توثق درسًا قابلاً لإعادة الاستخدام",
            en: "A lawyer documenting a genuinely reusable lesson",
          },
          text: {
            ar: [
              "«في نزاع اليسر للمقاولات، اكتشفت متأخرًا أن جدول الدفعات في العقد الأصلي لم يربط كل دفعة بمرحلة إنجاز محددة، ما عقّد إثبات الاستحقاق.»",
              "«كتبت مذكرة نصف صفحة: عند مراجعة أي عقد مقاولة مستقبلي، تحقق أولاً من ربط كل دفعة بمرحلة إنجاز واضحة، وإلا فأوصِ بتعديل البند قبل التوقيع.»",
            ],
            en: [
              "\"In the Al-Yusr Contracting dispute, I discovered late that the original contract's payment schedule never tied each payment to a defined completion milestone, which complicated proving entitlement.\"",
              "\"I wrote a half-page note: when reviewing any future contracting agreement, check first whether each payment is tied to a clear milestone, and if not, recommend amending the clause before signing.\"",
            ],
          },
          why: {
            ar: "صاغت الدرس كإجراء وقائي عام قابل للتطبيق على أي عقد مشابه، لا كوصف لملف واحد لا يفيد غيره.",
            en: "She framed the lesson as a general preventive check applicable to any similar contract, not a description of one file that helps no one else.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ ينتقل للملف التالي فورًا",
            en: "A lawyer who moves straight to the next file",
          },
          text: {
            ar: [
              "«أغلقت ملف اليسر، والحمد لله انتهى بشكل جيد. لننتقل للملف التالي.»",
              "لم يكتب شيئًا عن جدول الدفعات الناقص، وبعد أشهر واجه زميل العقبة نفسها بالضبط في عقد مقاولة آخر.",
            ],
            en: [
              "\"I closed the Al-Yusr file, and it worked out well, thank God. Let's move to the next one.\"",
              "He wrote nothing about the incomplete payment schedule, and months later a colleague hit the exact same obstacle in a different contracting agreement.",
            ],
          },
          why: {
            ar: "الدرس بقي حبيس ذاكرته وحده، فدفع زميله كلفة اكتشافه من جديد رغم أن الحل كان معروفًا فعلاً.",
            en: "The lesson stayed locked in his memory alone, so a colleague paid the cost of rediscovering it, even though the fix was already known.",
          },
        },
      },
      { kind: "activity", id: "s.fo.05.a1", activityId: "act.fo.05.1", mode: "quick" },
      { kind: "activity", id: "s.fo.05.a2", activityId: "act.fo.05.2", mode: "guided" },
      { kind: "activity", id: "s.fo.05.a3", activityId: "act.fo.05.3", mode: "guided" },
      { kind: "activity", id: "s.fo.05.a4", activityId: "act.fo.05.4", mode: "independent" },
      { kind: "activity", id: "s.fo.05.a5", activityId: "act.fo.05.5", mode: "independent" },
      { kind: "summary", id: "s.fo.05.summary", summaryCardId: "card.fo.05" },
      {
        kind: "apply_tomorrow",
        id: "s.fo.05.apply",
        task: {
          ar: "عند إغلاق ملفك القادم، خصص عشر دقائق فورًا لكتابة مذكرة نصف صفحة قبل الانتقال لأي شيء آخر.",
          en: "When you close your next file, spend ten minutes right away writing a half-page note before moving to anything else.",
        },
        detail: {
          ar: "ركّز على نقطة واحدة فاجأتك فعلاً، لا على سرد الملف كاملاً.",
          en: "Focus on one point that actually surprised you, not a full recap of the file.",
        },
      },
      {
        kind: "next_mission",
        id: "s.fo.05.next",
        teaser: {
          ar: "وثّقت الدرس القابل لإعادة الاستخدام. الوحدات القادمة تنقلك من تنظيم الملف الفردي إلى جودة العمل الذي يخرج منه، وكيف يُسلَّم الملف بسلاسة لزميل آخر.",
          en: "You've documented the reusable lesson. The units ahead move you from organizing a single file to the quality of what leaves it, and how a matter hands off smoothly to someone else.",
        },
      },
    ],
    activities: [
      {
        id: "act.fo.05.1",
        kind: "true_false",
        skillId: "skill.knowledge-management",
        stage: 2,
        prompt: {
          ar: "«مذكرة المعرفة بعد إغلاق الملف يجب أن تصف كل تفصيل حدث في القضية بدقة تاريخية كاملة.»",
          en: "\"A knowledge note after closing a file must describe every detail of the case with full historical accuracy.\"",
        },
        options: [
          {
            id: "true",
            label: { ar: "صحيح", en: "True" },
            rationale: {
              ar: "غير صحيح. التفصيل الكامل يجعل المذكرة طويلة لدرجة لا يقرأها أحد؛ القيمة في استخلاص الدرس القابل لإعادة الاستخدام فقط.",
              en: "Incorrect. Full detail makes the note so long no one reads it; the value lies in extracting only the reusable lesson.",
            },
          },
          {
            id: "false",
            label: { ar: "خطأ", en: "False" },
            correct: true,
            rationale: {
              ar: "صحيح. مذكرة قصيرة تركز على ما فاجأك أو أفاد فعلاً تُستخدم، بخلاف سجل شامل يُهمَل.",
              en: "Correct. A short note focused on what actually surprised or helped gets used, unlike a comprehensive record that gets ignored.",
            },
          },
        ],
      },
      {
        id: "act.fo.05.2",
        kind: "find_mistake",
        skillId: "skill.knowledge-management",
        stage: 2,
        context: {
          ar: [
            "مذكرة كتبها محامٍ بعد إغلاق نزاع مشابه: «ملف اليسر انتهى بنجاح كبير. إستراتيجيتنا في هذا النوع من النزاعات تضمن دائمًا نتيجة مماثلة لصالح العميل.»",
          ],
          en: [
            "A note a lawyer wrote after closing a similar dispute: \"The Al-Yusr file ended in a big win. Our strategy in this type of dispute always guarantees a similar result for the client.\"",
          ],
        },
        prompt: {
          ar: "ما الخطأ الأخطر في هذه المذكرة؟",
          en: "What's the most serious mistake in this note?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "لم يذكر اسم الملف بوضوح كافٍ.",
              en: "The file's name wasn't stated clearly enough.",
            },
            rationale: {
              ar: "اسم الملف مذكور بوضوح؛ المشكلة أعمق من هذا التفصيل.",
              en: "The file's name is clearly stated; the problem runs deeper than this detail.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«تضمن دائمًا نتيجة مماثلة» تَعِد بنتيجة قانونية مضمونة، وهذا لا يجوز أبدًا مهما نجح ملف سابق.",
              en: "\"Always guarantees a similar result\" promises a guaranteed legal outcome, which is never acceptable regardless of how one earlier file went.",
            },
            correct: true,
            rationale: {
              ar: "كل نزاع له وقائعه الخاصة؛ الوعد بنتيجة مضمونة بناءً على ملف واحد سابق مضلل وغير مسؤول مهنيًا.",
              en: "Every dispute has its own facts; promising a guaranteed outcome based on one earlier file is misleading and professionally irresponsible.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "لم يذكر تاريخ إغلاق الملف بدقة.",
              en: "The exact closing date wasn't mentioned.",
            },
            rationale: {
              ar: "تفصيل ثانوي لا علاقة له بالخلل الجوهري في المذكرة.",
              en: "A minor detail unrelated to the note's core flaw.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "استخدم عبارة «نجاح كبير» بدل وصف أكثر رسمية.",
              en: "He used \"a big win\" instead of a more formal description.",
            },
            rationale: {
              ar: "اختيار الكلمات ثانوي؛ المشكلة الحقيقية في الوعد بضمان نتيجة مستقبلية.",
              en: "Word choice is secondary; the real problem is promising a guaranteed future outcome.",
            },
          },
        ],
      },
      {
        id: "act.fo.05.3",
        kind: "multiple_select",
        skillId: "skill.knowledge-management",
        stage: 2,
        context: {
          ar: [
            "تراجع مذكرات معرفة كتبها زملاء بعد إغلاق ملفات مختلفة، وتقرر أيها يستحق أن يُحفظ في بنك النماذج المشترك.",
          ],
          en: [
            "You're reviewing knowledge notes colleagues wrote after closing different files, deciding which deserve a place in the shared precedent bank.",
          ],
        },
        prompt: {
          ar: "اختر كل عنصر يجعل مذكرة معرفة قابلة لإعادة الاستخدام فعلاً.",
          en: "Select every element that makes a knowledge note genuinely reusable.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "تصف مشكلة أو عقبة محددة واجهها الكاتب فعلاً، لا وصفًا عامًا.",
              en: "Describes a specific problem or obstacle the writer actually faced, not a generic description.",
            },
            correct: true,
            rationale: {
              ar: "التحديد هو ما يجعل الزميل القادم يتعرف فورًا على حالته الخاصة.",
              en: "Specificity is what lets the next colleague immediately recognize their own situation in it.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "تقترح إجراءً أو نموذجًا يمكن تطبيقه على حالة مشابهة.",
              en: "Suggests a procedure or template applicable to a similar case.",
            },
            correct: true,
            rationale: {
              ar: "الإجراء القابل للتطبيق هو ما يوفر الوقت فعلاً، لا مجرد سرد لما حدث.",
              en: "An applicable procedure is what actually saves time, not just a recap of what happened.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "تعد بأن اتباع النموذج نفسه يضمن نتيجة مشابهة في كل مرة.",
              en: "Promises that following the same template guarantees a similar result every time.",
            },
            rationale: {
              ar: "وعد بنتيجة مضمونة غير مسؤول مهنيًا؛ كل حالة تختلف بوقائعها الخاصة مهما تشابه الشكل العام.",
              en: "Promising a guaranteed outcome is professionally irresponsible; every case differs in its own facts, however similar the general shape.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "محفوظة في مكان مشترك يبحث فيه الزملاء فعلاً، لا في مجلد شخصي.",
              en: "Stored somewhere shared that colleagues actually search, not a personal folder.",
            },
            correct: true,
            rationale: {
              ar: "مذكرة ممتازة في مكان لا يصل إليه أحد تعادل عدم وجودها أصلاً.",
              en: "An excellent note kept somewhere no one can reach is as good as not existing.",
            },
          },
          {
            id: "o5",
            label: {
              ar: "مكتوبة بأسلوب رسمي معقد يثبت جدية الكاتب المهنية.",
              en: "Written in complex formal style to prove the writer's professional seriousness.",
            },
            rationale: {
              ar: "التعقيد اللغوي يبطئ القراءة ولا يضيف قيمة؛ الوضوح البسيط هو ما يخدم زميلاً مستعجلاً.",
              en: "Linguistic complexity slows reading and adds no value; simple clarity is what serves a colleague in a hurry.",
            },
          },
        ],
      },
      {
        id: "act.fo.05.4",
        kind: "short_written",
        skillId: "skill.knowledge-management",
        secondarySkillIds: ["skill.file-organisation"],
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.firm-operations-written.v1",
        weight: 2,
        minChars: 150,
        context: {
          ar: [
            "أغلقت للتو ملف نزاع دفعات لصالح شركة اليسر للمقاولات ضد الجهة المطوّرة. اكتشفت أثناء العمل أن جدول الدفعات الأصلي لم يربط كل دفعة بمرحلة إنجاز واضحة، ما أخّر إثبات الاستحقاق أسبوعين كاملين.",
          ],
          en: [
            "You just closed a payment dispute for Al-Yusr Contracting against the developer. During the work, you discovered the original payment schedule never tied each payment to a clear completion milestone, which delayed proving entitlement by two full weeks.",
          ],
        },
        prompt: {
          ar: "اكتب مذكرة معرفة قصيرة (٦٠-١٠٠ كلمة) يستفيد منها زميل يراجع عقد مقاولة جديد مستقبلاً.",
          en: "Write a short knowledge note (60-100 words) a colleague reviewing a new contracting agreement in future can benefit from.",
        },
        modelAnswer: {
          ar: [
            "«الدرس: عقود المقاولات التي تربط الدفعات بتواريخ فقط، لا بمراحل إنجاز محددة، تُصعّب إثبات استحقاق أي دفعة عند النزاع.»",
            "«الإجراء المقترح: عند مراجعة أي عقد مقاولة جديد، تحقق أن كل دفعة مربوطة بمرحلة إنجاز واضحة وقابلة للإثبات، وأوصِ بتعديل البند إن لم تكن كذلك قبل التوقيع.»",
          ],
          en: [
            "\"Lesson: contracting agreements that tie payments to dates alone, not defined completion milestones, make proving any payment's entitlement harder in a dispute.\"",
            "\"Suggested procedure: when reviewing any new contracting agreement, verify each payment is tied to a clear, provable milestone, and recommend amending the clause before signing if it isn't.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«ملف اليسر انتهى بنجاح تام، والعقد كان يحتوي بعض المشاكل الصغيرة لا تستحق الذكر.»"],
            en: ["\"The Al-Yusr file ended in complete success, and the contract had some small issues not worth mentioning.\""],
          },
          whatIsWrong: {
            ar: "لا يذكر المشكلة تحديدًا ولا يقترح أي إجراء وقائي، فيبقى الدرس حبيس ذاكرة الكاتب وحده رغم كتابة المذكرة.",
            en: "Names no specific problem and suggests no preventive procedure, so the lesson stays locked in the writer's memory alone despite the note existing.",
          },
        },
      },
      {
        id: "act.fo.05.5",
        kind: "reflection",
        skillId: "skill.knowledge-management",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع ملفًا أغلقته وانتقلت للتالي فورًا دون توثيق ما تعلمته. ما الدرس الذي ربما فقده المكتب معك؟",
          en: "Recall a file you closed and moved on from immediately, without documenting what you learned. What lesson might the firm have lost along with you?",
        },
        followUp: {
          ar: "لو كتبت مذكرة نصف صفحة وقتها، من كان يمكن أن يستفيد منها لاحقًا؟",
          en: "Had you written a half-page note then, who might have benefited from it later?",
        },
      },
    ],
    summaryCard: {
      id: "card.fo.05",
      title: {
        ar: "مذكرة نصف صفحة توفر أسابيع",
        en: "A Half-Page Note That Saves Weeks",
      },
      whatYouLearned: {
        ar: [
          "معرفة تبقى في رأس شخص واحد تختفي معه؛ المكتب الذي لا يوثقها يتعلم الدرس نفسه مرارًا.",
          "مذكرة المعرفة الجيدة تصف ما فاجأك تحديدًا، وتقترح إجراءً قابلاً لإعادة الاستخدام.",
          "الدرس يُصاغ كمبدأ عام أو إجراء وقائي، لا كوعد بنتيجة مضمونة.",
        ],
        en: [
          "Knowledge that stays in one person's head disappears with them; a firm that doesn't document it relearns the same lesson repeatedly.",
          "A good knowledge note describes specifically what surprised you, and suggests a reusable procedure.",
          "The lesson is framed as a general principle or preventive check, not a promise of a guaranteed outcome.",
        ],
      },
      framework: {
        name: {
          ar: "مذكرة معرفة تُستخدم فعلاً",
          en: "A Knowledge Note That Actually Gets Used",
        },
        steps: [
          { ar: "حدد ما فاجأك أو أخذ وقتًا أطول من المتوقع في هذا الملف.", en: "Identify what surprised you, or took longer than expected, in this file." },
          { ar: "اكتب إجراءً أو مبدأ عامًا قابلاً للتطبيق على حالة مشابهة.", en: "Write a procedure or general principle applicable to a similar case." },
          { ar: "تجنب أي وعد بنتيجة مضمونة؛ صِف مبدأ، لا نتيجة.", en: "Avoid any promise of a guaranteed outcome; describe a principle, not a result." },
          { ar: "احفظها في مكان مشترك يبحث فيه الزملاء فعلاً.", en: "Save it somewhere shared that colleagues actually search." },
        ],
      },
      rememberThis: {
        ar: "ملف نجح مرة لا يعني أن نتيجته مضمونة في المرة القادمة؛ الدرس القابل لإعادة الاستخدام هو الإجراء، لا الوعد.",
        en: "A file that succeeded once doesn't mean its outcome is guaranteed next time; the reusable lesson is the procedure, not the promise.",
      },
      useItTomorrow: {
        ar: "عند إغلاق أي ملف هذا الأسبوع، خصص عشر دقائق لكتابة مذكرة نصف صفحة قبل الانتقال للملف التالي.",
        en: "When you close any file this week, spend ten minutes writing a half-page note before moving to the next one.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.modernize-your-law-firm", "src.smarter-collaboration"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
