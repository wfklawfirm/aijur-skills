import type { UnitDef } from "../types";

/**
 * Digital Tools & AI — Chapter 1 (`ch.da.ai-as-a-first-draft`) units 1-3 and
 * Chapter 2 (`ch.da.verifying-before-you-rely`) units 4-5.
 *
 * Pre-existing skill `skill.responsible-ai-use` and new skills
 * `skill.ai-output-verification`, `skill.disclosing-ai-errors`,
 * `skill.protecting-data-in-digital-tools` are authored in
 * `content/framework/skills-digital-ai.ts` in a parallel batch, as is
 * rubric `rubric.digital-ai-written.v1`, units 6-10 of this path
 * (`da-units-06-10.ts`), and the two simulation scenarios used there
 * (`scn.catching-an-ai-hallucination`, `scn.declining-to-use-a-tool`). No
 * simulation step appears in this batch — those live in chapters 3+.
 */
export const DA_UNITS_01_05: UnitDef[] = [
  // =========================================================================
  // UNIT 01 — What AI Tools Are Actually Good At — and What They Are Not
  // =========================================================================
  {
    id: "unit.da.01",
    chapterId: "ch.da.ai-as-a-first-draft",
    order: 1,
    title: {
      ar: "ما تجيده أدوات الذكاء الاصطناعي، وما لا تجيده أبدًا",
      en: "What AI Tools Are Actually Good At — and What They Are Not",
    },
    subtitle: {
      ar: "أداة ممتازة لمسودة أولى وتلخيص وتنظيم؛ أداة خطرة جدًا إن عاملتها كمصدر للحقيقة القانونية",
      en: "An excellent tool for a first draft, a summary, a reorganized structure; a dangerous one the moment you treat it as a source of legal truth.",
    },
    primarySkillId: "skill.responsible-ai-use",
    skillIds: ["skill.responsible-ai-use", "skill.ai-output-verification"],
    stage: 1,
    estimatedMinutes: 7,
    steps: [
      {
        kind: "hook",
        id: "s.da.01.hook",
        text: {
          ar: "سأل زيد حمصي أداة الذكاء الاصطناعي: «هل مهلة الاعتراض على قرار التحكيم ثلاثون يومًا أم خمسة وأربعون؟» أجابت بثقة: «خمسة وأربعون يومًا، استنادًا للمادة ٢١٦.» نسخ زيد الجواب في بريد للعميل مباشرة. لا مادة بهذا الرقم تتناول هذا الموضوع أصلاً. أين حدث الخطأ بالضبط؟",
          en: "Zeid Homsi asked the AI tool: \"Is the deadline to object to the arbitral award 30 days or 45?\" It answered confidently: \"45 days, per Article 216.\" Zeid pasted that straight into a client email. No article with that number addresses this at all. Where exactly did it go wrong?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.da.01.why",
        text: {
          ar: "أدوات الذكاء الاصطناعي اللغوية تنتج الكلمة الأكثر ترجيحًا إحصائيًا، لا الحقيقة المتحقق منها. نبرة الثقة لا تعني الدقة؛ بالنسبة لمحامٍ، تأكيد يبدو صحيحًا لكنه مختلق قد يكلّف عميلًا مهلة حقيقية.",
          en: "AI language models generate the statistically likeliest next words, not a verified fact. A confident tone doesn't mean accuracy; for a lawyer, an assertion that sounds right but is fabricated can cost a client a real deadline.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.da.01.goals",
        goals: {
          ar: [
            "أن تحدد المهام التي تساعد فيها أدوات الذكاء الاصطناعي فعلاً: مسودة أولى، تلخيص، إعادة تنظيم، وتوليد أفكار لبنية عمل.",
            "أن تفرّق بين «إنتاج نص محتمل» و«ذكر حقيقة قانونية متحقق منها».",
            "أن تبني عادة معاملة أي ادعاء قانوني من الأداة كخيط بحث غير مؤكد، لا كحقيقة جاهزة للاستخدام.",
          ],
          en: [
            "Identify the tasks AI tools genuinely help with: a first draft, a summary, reorganizing, and brainstorming a possible structure.",
            "Distinguish \"producing plausible text\" from \"stating a verified legal fact.\"",
            "Build the habit of treating every legal claim from an AI tool as an unverified lead, never a ready-to-use fact.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.da.01.lesson",
        title: {
          ar: "زميل متحمس لم يفتح الملف قط",
          en: "An Enthusiastic Colleague Who Never Opened the File",
        },
        body: {
          ar: [
            "الخطأ الشائع: اعتبار نبرة الثقة في جواب الأداة دليلًا على دقته. الأداة لا تعرف أنها مخطئة حين تخطئ؛ تكتب الخطأ بالثقة نفسها التي تكتب بها الصواب.",
            "ما تجيده الأداة فعلاً: تحويل ملاحظات مبعثرة إلى مسودة أولى منظمة تتفاعل معها؛ تلخيص مستند طويل لنقاط رئيسية تراجعها بسرعة؛ إعادة صياغة نص خام في بنية أوضح؛ واقتراح عناصر ممكنة لهيكل مذكرة أو حجج مضادة تفكر فيها.",
            "ما لا تجيده أبدًا: كونها مصدرًا للحقيقة القانونية. قد تنتج رقم مادة أو اسم قرار قضائي يبدو حقيقيًا تمامًا، بينما هو مختلق بالكامل، لأن وظيفتها توليد نص محتمل، لا استرجاع سجل متحقق منه.",
            "النموذج الذهني الصحيح: عامل ناتج الأداة كملاحظة من زميل سريع وواثق لم يفتح الملف قط، ولم يقرأ النص القانوني، ولا يعرف متى يخمّن.",
            "العادة التي تُبنى من هذه الوحدة أولًا: كل حقيقة قانونية تأتي من الأداة هي خيط للتحقق، لا حقيقة جاهزة للاستعمال.",
          ],
          en: [
            "The common mistake: treating a confident tone in the tool's answer as proof of accuracy. The tool doesn't know when it's wrong; it writes the wrong answer with the same confidence as the right one.",
            "What it's genuinely good at: turning scattered notes into an organized first draft you can react to; summarizing a long document into points you review quickly; reformatting raw text into a clearer structure; and suggesting possible elements for a memo's structure or counterarguments to think through.",
            "What it is never good at: being a source of legal truth. It can produce an article number or a case name that looks completely real while being fully invented, because its job is generating plausible text, not retrieving a verified record.",
            "The right mental model: treat the tool's output like a note from a fast, confident colleague who never opened the file, never read the actual text, and doesn't know when he's guessing.",
            "The habit to build first, before any other: every legal fact from the tool is a lead to verify, never a fact ready to use.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.da.01.visual",
        title: {
          ar: "جيد له، مقابل غير موثوق له",
          en: "Good For, Versus Not a Source of Truth For",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "مسودة أولى", en: "A first draft" },
            detail: {
              ar: "نقطة بداية تتفاعل معها وتصححها، لا نصًا نهائيًا.",
              en: "A starting point you react to and correct, not a final text.",
            },
            tone: "positive",
          },
          {
            label: { ar: "التلخيص", en: "Summarizing" },
            detail: {
              ar: "ضغط مستند طويل لنقاط رئيسية تراجعها على أصله لاحقًا.",
              en: "Compressing a long document into points you check against the original later.",
            },
            tone: "positive",
          },
          {
            label: { ar: "إعادة التنظيم والصياغة", en: "Reformatting and structuring" },
            detail: {
              ar: "تحويل ملاحظات فوضوية إلى بنية واضحة تبني عليها.",
              en: "Turning messy notes into a clear structure you build on.",
            },
            tone: "positive",
          },
          {
            label: { ar: "الحقائق القانونية الدقيقة", en: "Precise legal facts" },
            detail: {
              ar: "قد تختلق نص مادة أو حكمًا لا وجود له بثقة تامة.",
              en: "It may fabricate an article's text or a ruling that doesn't exist, with total confidence.",
            },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.da.01.worked",
        strong: {
          label: {
            ar: "زيد يستخدم الأداة لبنية أولى فقط",
            en: "Zeid uses the tool only for an initial structure",
          },
          text: {
            ar: [
              "«اقترح لي بنية ممكنة لمذكرة حول الإنهاء المبكر لعقد إيجار تجاري.» يستخدم زيد الجواب كهيكل فارغ فقط.",
              "قبل كتابة أي ادعاء قانوني داخل ذلك الهيكل، يفتح النص الرسمي للمادة بنفسه ويتحقق من رقمها ونصها قبل أن يذكرها للعميل.",
            ],
            en: [
              "\"Suggest a possible structure for a memo on early termination of a commercial lease.\" Zeid uses the answer only as an empty skeleton.",
              "Before writing any legal claim inside that skeleton, he opens the actual statutory text himself and confirms the article's number and wording before citing it to the client.",
            ],
          },
          why: {
            ar: "استخدم الأداة لما تجيده فعلاً — بنية أولى — وفصل ذلك تمامًا عن أي حقيقة قانونية، التي تحقق منها بنفسه من مصدر أصلي.",
            en: "He used the tool for what it's genuinely good at — an initial structure — and kept that entirely separate from any legal fact, which he verified himself from a primary source.",
          },
        },
        weak: {
          label: {
            ar: "زيد ينسخ جوابًا قانونيًا مباشرة",
            en: "Zeid copies a legal answer directly",
          },
          text: {
            ar: [
              "«ما هي مهلة الاعتراض على قرار التحكيم؟» ينسخ الجواب — «خمسة وأربعون يومًا استنادًا للمادة ٢١٦» — إلى بريد العميل دون أن يفتح النص القانوني مرة واحدة.",
            ],
            en: [
              "\"What's the deadline to object to an arbitral award?\" He copies the answer — \"45 days per Article 216\" — into the client email without opening the actual statute even once.",
            ],
          },
          why: {
            ar: "عامل جوابًا احتماليًا كحقيقة جاهزة؛ المادة المذكورة غير موجودة أصلاً، وسيصل للعميل موعد خاطئ بثقة تامة.",
            en: "He treated a probabilistic answer as a ready-made fact; the cited article doesn't exist, and the client will receive a wrong deadline stated with total confidence.",
          },
        },
      },
      { kind: "activity", id: "s.da.01.a1", activityId: "act.da.01.1", mode: "quick" },
      { kind: "activity", id: "s.da.01.a2", activityId: "act.da.01.2", mode: "guided" },
      { kind: "activity", id: "s.da.01.a3", activityId: "act.da.01.3", mode: "guided" },
      { kind: "activity", id: "s.da.01.a4", activityId: "act.da.01.4", mode: "independent" },
      { kind: "activity", id: "s.da.01.a5", activityId: "act.da.01.5", mode: "independent" },
      { kind: "summary", id: "s.da.01.summary", summaryCardId: "card.da.01" },
      {
        kind: "apply_tomorrow",
        id: "s.da.01.apply",
        task: {
          ar: "غدًا، استخدم أداة الذكاء الاصطناعي مرة واحدة فقط لمهمة مسودة أو تلخيص أو تنظيم، ثم تحقق بنفسك من كل حقيقة قانونية قبل استعمالها.",
          en: "Tomorrow, use the AI tool exactly once for a drafting, summarizing, or reorganizing task, then verify every legal fact yourself before using it.",
        },
        detail: {
          ar: "إن لم تستطع فتح المصدر الأصلي فورًا، لا تذكر تلك الحقيقة للعميل بعد.",
          en: "If you can't open the primary source right away, don't state that fact to the client yet.",
        },
      },
      {
        kind: "next_mission",
        id: "s.da.01.next",
        teaser: {
          ar: "عرفت متى تثق بالأداة ومتى لا. لكن أي أداة بالضبط؟ الوحدة القادمة: لماذا نسخة مجانية من روبوت محادثة شهير ليست مثل أداة قانونية معتمدة، حتى لو بدت متشابهة.",
          en: "You know when to trust the tool and when not to. But which tool, exactly? Next unit: why the free version of a popular chatbot is not the same as an approved legal tool, even when it looks similar.",
        },
      },
    ],
    activities: [
      {
        id: "act.da.01.1",
        kind: "multiple_choice",
        skillId: "skill.responsible-ai-use",
        secondarySkillIds: ["skill.ai-output-verification"],
        stage: 1,
        context: {
          ar: [
            "سألت أداة الذكاء الاصطناعي عن مهلة اعتراض على قرار تحكيم، فأجابت بثقة تامة برقم مادة ومدة محددة.",
          ],
          en: [
            "You asked the AI tool about the deadline to object to an arbitral award, and it answered with total confidence, giving an article number and a specific period.",
          ],
        },
        prompt: {
          ar: "ما الخطوة الصحيحة قبل ذكر هذه المهلة للعميل؟",
          en: "What's the correct step before stating this deadline to the client?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "انسخ الجواب كما هو، فالأداة نادرًا ما تخطئ في أرقام دقيقة كهذه.",
              en: "Copy the answer as is, since the tool rarely gets precise numbers like this wrong.",
            },
            rationale: {
              ar: "لا علاقة بين دقة الرقم وثقة الأداة في ذكره؛ كلاهما مستقلان تمامًا عن بعضهما.",
              en: "There's no link between a number's accuracy and the tool's confidence stating it; the two are entirely independent.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "افتح النص القانوني الرسمي بنفسك وتحقق من رقم المادة ومضمونها قبل ذكرها للعميل.",
              en: "Open the actual official legal text yourself and verify the article's number and content before citing it to the client.",
            },
            correct: true,
            rationale: {
              ar: "التحقق من مصدر أصلي هو الطريقة الوحيدة لمعرفة إن كانت المهلة صحيحة أم مختلقة بثقة.",
              en: "Checking a primary source is the only way to know whether the deadline is real or confidently fabricated.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "اسأل الأداة نفسها مرة ثانية لتأكيد جوابها الأول.",
              en: "Ask the same tool again to confirm its first answer.",
            },
            rationale: {
              ar: "سؤال الأداة نفسها لا يضيف مصدرًا مستقلًا؛ قد تكرر الخطأ نفسه بالثقة نفسها.",
              en: "Asking the same tool again adds no independent source; it may repeat the exact same error with the exact same confidence.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "تجنب ذكر أي مهلة للعميل نهائيًا تفاديًا لأي خطأ محتمل.",
              en: "Avoid mentioning any deadline to the client at all, to avoid any possible error.",
            },
            rationale: {
              ar: "تجنب الموضوع لا يحل المشكلة ويحرم العميل من معلومة يحتاجها؛ التحقق هو الحل، لا الصمت.",
              en: "Avoiding the topic doesn't solve the problem and denies the client information they need; verification is the fix, not silence.",
            },
          },
        ],
      },
      {
        id: "act.da.01.2",
        kind: "categorization",
        skillId: "skill.responsible-ai-use",
        stage: 1,
        prompt: {
          ar: "صنّف كل مهمة: هل الأداة موثوقة لإنجازها مباشرة، أم يحتاج ناتجها لتحقق مستقل قبل الاستخدام؟",
          en: "Sort each task: is the tool reliable to do it directly, or does its output need independent verification before use?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «موثوقة مباشرة» / «تحتاج تحقق» أسفل كل مهمة بدل السحب.",
          en: "Choose \"reliable directly\" / \"needs verification\" from buttons under each task instead of dragging.",
        },
        buckets: [
          { id: "reliable", label: { ar: "موثوقة مباشرة", en: "Reliable directly" } },
          { id: "verify", label: { ar: "تحتاج تحقق مستقل", en: "Needs independent verification" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "تلخيص عقد من أربعين صفحة إلى نقاط رئيسية للمراجعة.",
              en: "Summarizing a forty-page contract into key points for review.",
            },
            bucketId: "reliable",
            rationale: {
              ar: "التلخيص يساعد على المراجعة السريعة، ولا يزال المستند الأصلي هو المرجع النهائي.",
              en: "Summarizing helps a quick review, and the original document remains the final reference.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "اقتراح عناوين ممكنة لهيكل مذكرة قانونية.",
              en: "Suggesting possible headings for a legal memo's structure.",
            },
            bucketId: "reliable",
            rationale: {
              ar: "بنية أولى للتفاعل معها لا تحمل ادعاءً قانونيًا يحتاج تحققًا.",
              en: "An initial structure to react to carries no legal claim that needs verifying.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "إعادة صياغة ملاحظات مقابلة عميل فوضوية في فقرة واضحة.",
              en: "Reformatting messy client-meeting notes into a clear paragraph.",
            },
            bucketId: "reliable",
            rationale: {
              ar: "إعادة تنظيم النص لا تضيف حقائق جديدة تحتاج تحققًا، طالما بقي المحتوى كما هو.",
              en: "Reformatting adds no new facts needing verification, as long as the content stays the same.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "ذكر النص الدقيق لمادة قانونية معينة.",
              en: "Stating the exact wording of a specific legal article.",
            },
            bucketId: "verify",
            rationale: {
              ar: "نص المادة قد يبدو صحيحًا تمامًا بينما هو مختلق أو منسوخ عن نسخة قديمة ملغاة.",
              en: "The article's wording may look completely correct while being fabricated or copied from an outdated, repealed version.",
            },
          },
          {
            id: "c5",
            label: {
              ar: "تأكيد ما إذا كان حكم قضائي معين قد قرر فعلاً ما يُنسب إليه.",
              en: "Confirming whether a specific court ruling actually decided what's being attributed to it.",
            },
            bucketId: "verify",
            rationale: {
              ar: "استشهاد قضائي قد يكون رقمه حقيقيًا بينما المضمون المنسوب إليه مختلق بالكامل.",
              en: "A case citation's number may be real while the substance attributed to it is entirely invented.",
            },
          },
        ],
      },
      {
        id: "act.da.01.3",
        kind: "true_false",
        skillId: "skill.responsible-ai-use",
        stage: 1,
        prompt: {
          ar: "«الأداة التي تجيب بثقة تامة وتفاصيل دقيقة تكون غالبًا صحيحة.»",
          en: "\"A tool that answers with total confidence and precise-looking detail is usually correct.\"",
        },
        options: [
          {
            id: "true",
            label: { ar: "صحيح", en: "True" },
            rationale: {
              ar: "غير صحيح. نبرة الثقة والتفاصيل الدقيقة الشكلية لا علاقة لهما بدقة المحتوى؛ الأداة تكتب الخطأ والصواب بالثقة نفسها بالضبط.",
              en: "Incorrect. Confident tone and precise-looking detail have nothing to do with content accuracy; the tool writes wrong and right answers with exactly the same confidence.",
            },
          },
          {
            id: "false",
            label: { ar: "خطأ", en: "False" },
            correct: true,
            rationale: {
              ar: "صحيح. الثقة في الأسلوب لا تدل على شيء عن صحة المحتوى؛ التحقق من مصدر مستقل هو الدليل الوحيد.",
              en: "Correct. Confidence in tone signals nothing about content accuracy; checking an independent source is the only real evidence.",
            },
          },
        ],
      },
      {
        id: "act.da.01.4",
        kind: "short_written",
        skillId: "skill.responsible-ai-use",
        secondarySkillIds: ["skill.ai-output-verification"],
        stage: 1,
        grading: "ai_rubric",
        rubricId: "rubric.digital-ai-written.v1",
        weight: 2,
        minChars: 150,
        context: {
          ar: [
            "متدرب جديد في المكتب سألك: «الأداة أعطتني جوابًا قانونيًا واضحًا ومفصلًا، لماذا أتحقق منه إذًا؟»",
          ],
          en: [
            "A new trainee at the firm asked you: \"The tool gave me a clear, detailed legal answer — why would I still verify it?\"",
          ],
        },
        prompt: {
          ar: "اكتب رسالة قصيرة (٦٠-١٠٠ كلمة) تشرح فيها الجملة الوحيدة التي يجب أن يقولها لنفسه قبل استخدام أي شيء تقوله الأداة عن القانون.",
          en: "Write a short message (60-100 words) explaining the one sentence he should tell himself before using anything the tool says about the law.",
        },
        modelAnswer: {
          ar: [
            "«سؤال جيد. قل لنفسك دومًا: هذا خيط بحث، لا حقيقة جاهزة. وضوح الجواب وتفاصيله لا تعني أنه صحيح؛ الأداة تكتب الخطأ بثقة الصواب نفسها.»",
            "«قبل استخدام أي رقم مادة أو استشهاد قضائي، افتح المصدر الأصلي بنفسك وتأكد أنه موجود ويقول فعلاً ما نُسب إليه. إن لم تستطع، لا تذكره للعميل بعد.»",
          ],
          en: [
            "\"Good question. Always tell yourself: this is a lead, not a ready fact. A clear, detailed answer doesn't mean it's correct; the tool writes wrong answers with exactly the confidence of right ones.\"",
            "\"Before using any article number or case citation, open the primary source yourself and confirm it exists and actually says what's attributed to it. If you can't, don't cite it to the client yet.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«لا تقلق، إن كان الجواب مفصلًا وواضحًا فهو غالبًا صحيح، أكمل عملك.»"],
            en: ["\"Don't worry, if the answer is detailed and clear it's probably correct, go ahead with it.\""],
          },
          whatIsWrong: {
            ar: "يكرر بالضبط الخطأ الذي يسأل عنه المتدرب: يربط الوضوح الشكلي بالدقة الفعلية، وهو ربط خاطئ.",
            en: "It repeats exactly the mistake the trainee is asking about: linking surface clarity to actual accuracy, which is a false link.",
          },
        },
      },
      {
        id: "act.da.01.5",
        kind: "reflection",
        skillId: "skill.responsible-ai-use",
        stage: 1,
        grading: "self_report",
        prompt: {
          ar: "استرجع موقفًا استخدمت فيه جواب أداة ذكاء اصطناعي دون تحقق كامل. ماذا لو كان الجواب خاطئًا؟",
          en: "Recall a moment you used an AI tool's answer without full verification. What if that answer had been wrong?",
        },
        followUp: {
          ar: "ما العادة التي ستبنيها من اليوم لتفصل بين «مسودة أولى مفيدة» و«حقيقة قانونية جاهزة»؟",
          en: "What habit will you build starting today to separate \"a useful first draft\" from \"a ready legal fact\"?",
        },
      },
    ],
    summaryCard: {
      id: "card.da.01",
      title: {
        ar: "زميل سريع لم يفتح الملف قط",
        en: "A Fast Colleague Who Never Opened the File",
      },
      whatYouLearned: {
        ar: [
          "الأداة ممتازة لمسودة أولى، والتلخيص، وإعادة التنظيم، وتوليد أفكار بنية.",
          "الأداة ليست مصدرًا للحقيقة القانونية؛ قد تختلق مادة أو حكمًا بثقة تامة.",
          "نبرة الثقة لا علاقة لها بالدقة؛ كل حقيقة قانونية من الأداة خيط للتحقق، لا حقيقة جاهزة.",
        ],
        en: [
          "The tool is excellent for a first draft, summarizing, reorganizing, and brainstorming a structure.",
          "The tool is not a source of legal truth; it can fabricate an article or a ruling with total confidence.",
          "Confidence in tone has nothing to do with accuracy; every legal fact from the tool is a lead to verify, never a ready fact.",
        ],
      },
      framework: {
        name: {
          ar: "الزميل السريع الذي لم يفتح الملف",
          en: "The Fast Colleague Who Never Opened the File",
        },
        steps: [
          { ar: "استخدمها لمسودة أولى، تلخيص، أو تنظيم.", en: "Use it for a first draft, a summary, or reorganizing." },
          { ar: "لا تعاملها كمصدر للحقائق القانونية أبدًا.", en: "Never treat it as a source of legal facts." },
          { ar: "تحقق من كل حقيقة عند مصدر أصلي قبل استخدامها.", en: "Verify every fact at a primary source before using it." },
        ],
      },
      rememberThis: {
        ar: "أداة الذكاء الاصطناعي تكتب الخطأ بثقة الصواب نفسها؛ التحقق، لا نبرة الجواب، هو ما يحمي العميل.",
        en: "The AI tool writes a wrong answer with the exact same confidence as a right one; verification, not the answer's tone, is what protects the client.",
      },
      useItTomorrow: {
        ar: "غدًا، استخدم الأداة لمسودة أو تلخيص فقط، وتحقق بنفسك من كل حقيقة قانونية قبل ذكرها لأي عميل.",
        en: "Tomorrow, use the tool only for a draft or a summary, and verify every legal fact yourself before citing it to any client.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.modernize-your-law-firm", "src.legal-analyst"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 02 — Only the Firm's Approved Tool for Anything Client-Related
  // =========================================================================
  {
    id: "unit.da.02",
    chapterId: "ch.da.ai-as-a-first-draft",
    order: 2,
    title: {
      ar: "الأداة المعتمدة من المكتب فقط لأي أمر يخص عميلًا",
      en: "Only the Firm's Approved Tool for Anything Client-Related",
    },
    subtitle: {
      ar: "نسخة مجانية من روبوت محادثة شهير قد تبدو مثل أداة قانونية معتمدة، لكنها ليست كذلك أبدًا",
      en: "The free version of a popular chatbot might look like an approved legal tool, but it's never one.",
    },
    primarySkillId: "skill.responsible-ai-use",
    skillIds: ["skill.responsible-ai-use", "skill.protecting-data-in-digital-tools"],
    stage: 1,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.da.02.hook",
        text: {
          ar: "قبل عشر دقائق من مكالمة عميل، لصقت ندى الصايغ وقائع نزاع تجاري كاملة — اسم العميل، المبلغ، تفاصيل الخلاف — في روبوت محادثة مجاني على هاتفها الشخصي، «لأن أداة المكتب بطيئة اليوم». حصلت على ملخص سريع. ماذا فعلت للتو؟",
          en: "Ten minutes before a client call, Nada Sayegh pasted the full facts of a commercial dispute — the client's name, the amount, the details — into a free chatbot on her personal phone, \"because the firm's tool is slow today.\" She got a quick summary. What did she just do?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.da.02.why",
        text: {
          ar: "أي نص يُلصق في روبوت محادثة عام مجاني قد يُحفظ، يُراجع، أو يُستخدم لتدريب نماذج مستقبلية. الأداة المعتمدة من المكتب محمية بعقد يحدد ذلك؛ الأداة المجانية لا يحميها أي عقد على الإطلاق، مهما تشابه المظهر.",
          en: "Any text pasted into a free public chatbot may be stored, reviewed, or used to train future models. The firm's approved tool sits inside a contract that governs exactly that; a free tool has no such contract at all, however similar it looks.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.da.02.goals",
        goals: {
          ar: [
            "أن تشرح لماذا روبوت محادثة مجاني وأداة قانونية معتمدة ليسا الشيء نفسه، حتى حين يتشابه ناتجهما.",
            "أن تحدد ما يجعل أداة «معتمدة من المكتب»: عقد بيانات، بنود سرية، ومراجعة أمنية، لا مجرد كونها متاحة.",
            "أن تطبّق القاعدة: لا شيء يُعرّف العميل يدخل أداة غير معتمدة، مهما بلغت السرعة المطلوبة.",
          ],
          en: [
            "Explain why a free chatbot and an approved legal-tech tool are not the same thing, even when their output looks similar.",
            "Identify what makes a tool \"firm-approved\": a data agreement, confidentiality terms, and a security review, not just availability.",
            "Apply the rule: nothing that identifies a client goes into a non-approved tool, however urgent it feels.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.da.02.lesson",
        title: {
          ar: "الخطر يعيش في جهة الإدخال، لا في جودة الجواب",
          en: "The Risk Lives on the Input Side, Not the Answer's Quality",
        },
        body: {
          ar: [
            "الخطأ الشائع: الحكم على أداة بجودة جوابها، لا بمصير البيانات التي تدخلها إليها.",
            "أداة المكتب المعتمدة — هنا اسمها الداخلي «فانوس» — تعمل ضمن عقد يحدد من يرى بيانات الإدخال، وهل تُستخدم لتدريب نماذج أخرى، وكم تُحفظ. هذا العقد هو الحماية الفعلية، لا واجهة الأداة.",
            "روبوت محادثة عام مجاني لا يربطه أي عقد كهذا بمكتبك. ما تكتبه فيه قد يُحفظ إلى أجل غير مسمى، يُراجعه فريق المزوّد، أو يُستوعب في بيانات تدريب نموذج مستقبلي.",
            "«أعطاني نوع الجواب نفسه» ليس دليلًا على أمان مماثل؛ جودة الناتج لا علاقة لها بمصير ما أدخلته.",
            "القاعدة تحت ضغط الوقت تحديدًا: كلما شعرت بإلحاح أكبر، ازداد احتمال لجوئك لأي أداة مفتوحة أمامك بدل المعتمدة. ابنِ العادة قبل لحظة الضغط، لا خلالها.",
          ],
          en: [
            "The common mistake: judging a tool by how good its answer looks, not by what happens to the data you fed it.",
            "The firm's approved tool — internally named \"Fanous\" — operates under a contract defining who sees input data, whether it trains other models, and how long it's retained. That contract is the real protection, not the tool's interface.",
            "A free public chatbot has no such contract with your firm. Whatever you type may be stored indefinitely, reviewed by the provider's team, or absorbed into a future model's training data.",
            "\"It gave the same kind of answer\" is not proof of equivalent safety; output quality has nothing to do with what happens to what you put in.",
            "The rule specifically under time pressure: the more urgent it feels, the higher the chance you reach for whatever tool is already open instead of the approved one. Build the habit before the pressure moment, not during it.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.da.02.visual",
        title: {
          ar: "الأداة المعتمدة مقابل الأداة المجانية العامة",
          en: "Approved Tool Versus Free Public Tool",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "عقد بيانات مع المكتب", en: "Data contract with the firm" },
            detail: {
              ar: "يحدد من يرى الإدخال، وهل يُستخدم للتدريب.",
              en: "Defines who sees input, and whether it's used for training.",
            },
            tone: "positive",
          },
          {
            label: { ar: "مدة حفظ محددة", en: "Defined retention period" },
            detail: {
              ar: "معروفة ومكتوبة، لا احتفاظًا إلى أجل غير مسمى.",
              en: "Known and written down, not indefinite retention.",
            },
            tone: "positive",
          },
          {
            label: { ar: "روبوت محادثة مجاني عام", en: "A free public chatbot" },
            detail: {
              ar: "لا عقد يربطه بمكتبك مهما تشابه شكل الجواب.",
              en: "No contract ties it to your firm, however similar its answers look.",
            },
            tone: "negative",
          },
          {
            label: { ar: "المساءلة عند وقوع خرق", en: "Accountability if a breach occurs" },
            detail: {
              ar: "بلا عقد، لا جهة مسؤولة قانونيًا أمام المكتب أو العميل.",
              en: "With no contract, no party is legally accountable to the firm or the client.",
            },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.da.02.worked",
        strong: {
          label: {
            ar: "زيد ينتظر الأداة المعتمدة",
            en: "Zeid waits for the approved tool",
          },
          text: {
            ar: [
              "يحتاج زيد ملخصًا سريعًا قبل مكالمة عميل. «فانوس» بطيء اليوم، فيستخدم ملاحظاته الورقية للمكالمة ويرسل الملخص لاحقًا حين تعود الأداة المعتمدة للعمل.",
              "لا يفكر للحظة بلصق وقائع العميل في أي أداة أخرى، مهما ضاق الوقت.",
            ],
            en: [
              "Zeid needs a quick summary before a client call. \"Fanous\" is slow today, so he uses his handwritten notes for the call and sends the summary later once the approved tool is back.",
              "He doesn't consider for a moment pasting the client's facts into any other tool, however tight the time.",
            ],
          },
          why: {
            ar: "التزم بالقاعدة رغم الضغط الزمني؛ بديل أبطأ أفضل بكثير من بديل يعرّض بيانات العميل لخطر حقيقي.",
            en: "He kept to the rule despite the time pressure; a slower alternative is far better than one that exposes the client's data to a real risk.",
          },
        },
        weak: {
          label: {
            ar: "ندى تلجأ للأسرع",
            en: "Nada reaches for whatever's fastest",
          },
          text: {
            ar: [
              "«فانوس بطيء اليوم، وأحتاج الملخص الآن.» تلصق ندى وقائع نزاع تجاري كاملة، بما فيها اسم العميل والمبلغ، في روبوت محادثة مجاني على هاتفها الشخصي.",
            ],
            en: [
              "\"Fanous is slow today, and I need this now.\" Nada pastes the full facts of a commercial dispute, including the client's name and the amount, into a free chatbot on her personal phone.",
            ],
          },
          why: {
            ar: "لا عقد يحمي ما لصقته؛ بيانات عميل حقيقية أصبحت الآن خارج أي التزام سرية يربط مزوّد الأداة بمكتبها.",
            en: "Nothing protects what she pasted; a real client's data is now outside any confidentiality obligation binding the tool's provider to her firm.",
          },
        },
      },
      { kind: "activity", id: "s.da.02.a1", activityId: "act.da.02.1", mode: "quick" },
      { kind: "activity", id: "s.da.02.a2", activityId: "act.da.02.2", mode: "guided" },
      { kind: "activity", id: "s.da.02.a3", activityId: "act.da.02.3", mode: "guided" },
      { kind: "activity", id: "s.da.02.a4", activityId: "act.da.02.4", mode: "independent" },
      { kind: "activity", id: "s.da.02.a5", activityId: "act.da.02.5", mode: "independent" },
      { kind: "summary", id: "s.da.02.summary", summaryCardId: "card.da.02" },
      {
        kind: "apply_tomorrow",
        id: "s.da.02.apply",
        task: {
          ar: "غدًا، إن كانت الأداة المعتمدة بطيئة أو معطلة، استخدم بديلًا بلا ذكاء اصطناعي بدل أي أداة غير معتمدة، مهما ضاق الوقت.",
          en: "Tomorrow, if the approved tool is slow or down, use a non-AI fallback instead of any non-approved tool, however tight the time.",
        },
        detail: {
          ar: "اسأل نفسك: هل هذه الأداة ملزمة بعقد سرية مع مكتبي؟ إن لم تعرف الجواب، فالإجابة الأسلم هي لا.",
          en: "Ask yourself: is this tool bound by a confidentiality contract with my firm? If you don't know the answer, treat it as no.",
        },
      },
      {
        kind: "next_mission",
        id: "s.da.02.next",
        teaser: {
          ar: "عرفت أي أداة تستخدم. لكن حتى بالأداة الصحيحة، يبقى سؤال: هل قرأت ما أنتجته فعلاً قبل إرساله؟ الوحدة القادمة: عادة القراءة الكاملة قبل أي إرسال.",
          en: "You know which tool to use. But even with the right tool, one question remains: did you actually read what it produced before sending it? Next unit: the habit of a full read before anything goes out.",
        },
      },
    ],
    activities: [
      {
        id: "act.da.02.1",
        kind: "multiple_choice",
        skillId: "skill.protecting-data-in-digital-tools",
        secondarySkillIds: ["skill.responsible-ai-use"],
        stage: 1,
        context: {
          ar: [
            "أداة المكتب المعتمدة معطلة اليوم، ولديك مكالمة عميل خلال عشر دقائق تحتاج فيها ملخصًا سريعًا لوقائع نزاع تجاري حساس.",
          ],
          en: [
            "The firm's approved tool is down today, and you have a client call in ten minutes needing a quick summary of a sensitive commercial dispute's facts.",
          ],
        },
        prompt: {
          ar: "ما التصرف الصحيح؟",
          en: "What's the right move?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "استخدم روبوت محادثة مجاني على هاتفك، فالوقت لا يسمح بأي بديل آخر.",
              en: "Use a free chatbot on your phone, since there's no time for any other option.",
            },
            rationale: {
              ar: "ضيق الوقت لا يغيّر أن الأداة المجانية بلا أي عقد يحمي بيانات العميل الحساسة.",
              en: "Time pressure doesn't change the fact that the free tool has no contract protecting the client's sensitive data.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "اعتمد على ملاحظاتك المكتوبة أو ذاكرتك للمكالمة، وأرسل الملخص لاحقًا حين تعود الأداة المعتمدة.",
              en: "Rely on your written notes or memory for the call, and send the summary later once the approved tool is back.",
            },
            correct: true,
            rationale: {
              ar: "بديل أبطأ لكنه لا يعرّض بيانات العميل لأي خطر؛ الملخص يمكن إرساله لاحقًا دون خسارة حقيقية.",
              en: "A slower option, but it exposes the client's data to no risk at all; the summary can go out later with no real loss.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "استخدم أداة مجانية لكن احذف أسماء الأطراف فقط قبل اللصق.",
              en: "Use a free tool but remove just the parties' names before pasting.",
            },
            rationale: {
              ar: "حذف الاسم وحده لا يخفي المبلغ وتفاصيل النزاع التي قد تُعرّف العميل بسهولة لمن يعرف السياق.",
              en: "Removing just the name doesn't hide the amount and dispute details, which may easily identify the client to anyone who knows the context.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "أجّل المكالمة كليًا حتى تعود الأداة المعتمدة للعمل.",
              en: "Postpone the call entirely until the approved tool is back.",
            },
            rationale: {
              ar: "تأجيل غير ضروري؛ يمكن إجراء المكالمة بلا ملخص مُولّد آليًا والاعتماد على تحضير يدوي.",
              en: "Unnecessary postponement; the call can happen without an AI-generated summary, relying on manual preparation instead.",
            },
          },
        ],
      },
      {
        id: "act.da.02.2",
        kind: "find_mistake",
        skillId: "skill.protecting-data-in-digital-tools",
        stage: 1,
        context: {
          ar: [
            "لصقت زميلة في المكتب النص التالي في روبوت محادثة مجاني: «موكلي هلال للشحن يطالب بمبلغ ٤٥٠ ألف درهم من شركة استيراد بسبب بضاعة تالفة، لخّص لي أقوى ثلاث حجج ممكنة.»",
          ],
          en: [
            "A colleague pasted the following into a free chatbot: \"My client Hilal Freight is claiming AED 450,000 from an import company over damaged goods, summarize the three strongest arguments for me.\"",
          ],
        },
        prompt: {
          ar: "ما الخطأ الأساسي في هذا التصرف؟",
          en: "What's the core mistake here?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "طلبت ثلاث حجج بدل حجة واحدة فقط.",
              en: "She asked for three arguments instead of just one.",
            },
            rationale: {
              ar: "عدد الحجج المطلوبة تفصيل ثانوي؛ المشكلة الجوهرية في مكان آخر تمامًا.",
              en: "The number of arguments requested is a minor detail; the real problem lies elsewhere entirely.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "لصقت اسم العميل والمبلغ وتفاصيل النزاع الحقيقية في أداة لا يحميها أي عقد سرية مع المكتب.",
              en: "She pasted the real client's name, amount, and dispute details into a tool with no confidentiality contract with the firm.",
            },
            correct: true,
            rationale: {
              ar: "بيانات تُعرّف عميلًا حقيقيًا وصلت لأداة خارج أي حماية تعاقدية، وهذا هو جوهر المخاطرة.",
              en: "Data identifying a real client reached a tool outside any contractual protection, and that's the core of the risk.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "استخدمت كلمة «موكلي» بدل «العميل».",
              en: "She used \"my client\" instead of \"the client.\"",
            },
            rationale: {
              ar: "اختيار الكلمة ليس المشكلة إطلاقًا؛ المشكلة في وجهة البيانات نفسها.",
              en: "Word choice isn't the issue at all; the problem is where the data went.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "طلبت ملخصًا للحجج بدل طلب مسودة كاملة.",
              en: "She asked for a summary of arguments instead of a full draft.",
            },
            rationale: {
              ar: "نوع المهمة المطلوبة ليس المشكلة؛ المشكلة في البيانات الحساسة التي دخلت أداة غير معتمدة.",
              en: "The type of task requested isn't the issue; the problem is the sensitive data that entered a non-approved tool.",
            },
          },
        ],
      },
      {
        id: "act.da.02.3",
        kind: "multiple_select",
        skillId: "skill.protecting-data-in-digital-tools",
        stage: 1,
        context: {
          ar: [
            "تراجع مع فريقك لماذا لا تُعامل أداة مجانية عامة مثل أداة معتمدة من المكتب، رغم تشابه الواجهتين أحيانًا.",
          ],
          en: [
            "You're reviewing with your team why a free public tool isn't treated like a firm-approved one, even when the interfaces sometimes look similar.",
          ],
        },
        prompt: {
          ar: "اختر كل سبب فعلي يجعل الأداة المجانية غير مكافئة للأداة المعتمدة.",
          en: "Select every real reason the free tool isn't equivalent to the approved one.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "لا يوجد عقد بيانات يحدد من يرى ما تكتبه فيها.",
              en: "There's no data contract governing who sees what you type into it.",
            },
            correct: true,
            rationale: {
              ar: "غياب العقد هو جوهر المخاطرة؛ لا جهة ملزمة قانونيًا بحماية الإدخال.",
              en: "The missing contract is the core risk; no party is legally bound to protect the input.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "قد يُستخدم ما تكتبه لتدريب نماذج مستقبلية دون علمك.",
              en: "What you type may be used to train future models without your knowledge.",
            },
            correct: true,
            rationale: {
              ar: "بيانات عميل قد تظهر لاحقًا بشكل غير متوقع ضمن نموذج آخر تمامًا.",
              en: "A client's data may later resurface unexpectedly inside a completely different model.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "لا جهة مساءلة تعاقدية أمام المكتب إن وقع خرق للبيانات.",
              en: "There's no contractual accountability to the firm if a data breach occurs.",
            },
            correct: true,
            rationale: {
              ar: "بلا عقد، لا يستطيع المكتب مساءلة أحد قانونيًا حين يقع الضرر.",
              en: "With no contract, the firm has no one to legally hold accountable when harm occurs.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "قد تصوغ الجواب بأسلوب مختلف قليلًا عن أداة المكتب.",
              en: "It might phrase the answer slightly differently from the firm's tool.",
            },
            rationale: {
              ar: "اختلاف الأسلوب ليس خطرًا على السرية؛ الخطر يعيش في مصير البيانات المُدخلة، لا في صياغة الجواب.",
              en: "A difference in phrasing isn't a confidentiality risk; the risk lives in what happens to the input, not how the answer is worded.",
            },
          },
        ],
      },
      {
        id: "act.da.02.4",
        kind: "email_rewrite",
        skillId: "skill.protecting-data-in-digital-tools",
        stage: 1,
        grading: "ai_rubric",
        rubricId: "rubric.digital-ai-written.v1",
        weight: 2,
        minChars: 150,
        context: {
          ar: [
            "رأيت زميلًا يستعد للصق وقائع نزاع عميلكم شركة نجد للاستشارات الهندسية في روبوت محادثة مجاني على هاتفه، وهو يعتقد أن هذا مقبول لأن الأداة المعتمدة بطيئة اليوم.",
          ],
          en: [
            "You see a colleague about to paste your client Najd Engineering Consultants' dispute facts into a free chatbot on his phone, believing it's fine since the approved tool is slow today.",
          ],
        },
        prompt: {
          ar: "أعد صياغة الرسالة التالية التي يفكر زميلك بإرسالها لنفسه كتذكير، لتصبح صحيحة وتوجهه للتصرف السليم.",
          en: "Rewrite the following note your colleague is drafting to himself as a reminder, so it's accurate and points him to the right move.",
        },
        draft: {
          ar: ["«الأداة المجانية تعطي نفس نوع الجواب، سأستخدمها فقط هذه المرة لأن الوقت ضيق.»"],
          en: ["\"The free tool gives the same kind of answer, I'll just use it this once since time is tight.\""],
        },
        modelAnswer: {
          ar: [
            "«الأداة المجانية بلا عقد يحمي بيانات عميلنا، مهما تشابه شكل جوابها مع أداة المكتب. لن ألصق فيها أي تفصيل يُعرّف نجد للاستشارات الهندسية.»",
            "«سأستخدم ملاحظاتي اليدوية الآن، وأنتظر عودة الأداة المعتمدة قبل أي مهمة تتعلق بالعميل.»",
          ],
          en: [
            "\"The free tool has no contract protecting our client's data, however similar its answer looks to the firm's tool. I won't paste anything identifying Najd Engineering Consultants into it.\"",
            "\"I'll use my handwritten notes now, and wait for the approved tool to be back before any client-related task.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«الأداة المجانية تعطي نفس نوع الجواب، سأستخدمها فقط هذه المرة لأن الوقت ضيق.»"],
            en: ["\"The free tool gives the same kind of answer, I'll just use it this once since time is tight.\""],
          },
          whatIsWrong: {
            ar: "يبرر الاستثناء بتشابه الجواب، وهو بالضبط المنطق الخاطئ الذي يتجاهل أن الخطر يعيش في مصير البيانات المُدخلة، لا في جودة الناتج.",
            en: "It excuses the exception by the answer's similarity — exactly the flawed logic that ignores that the risk lives in what happens to the input, not the output's quality.",
          },
        },
      },
      {
        id: "act.da.02.5",
        kind: "reflection",
        skillId: "skill.protecting-data-in-digital-tools",
        stage: 1,
        grading: "self_report",
        prompt: {
          ar: "استرجع لحظة كنت فيها تحت ضغط وقت شديد وفكرت باستخدام أداة أسرع لكن غير معتمدة. ماذا منعك، أو ماذا كان يمكن أن يمنعك؟",
          en: "Recall a moment of real time pressure where you considered a faster but non-approved tool. What stopped you, or what could have?",
        },
        followUp: {
          ar: "ما البديل غير المعتمد على الذكاء الاصطناعي الذي يمكن أن يجهزه مكتبك لهذه اللحظات تحديدًا؟",
          en: "What non-AI fallback could your firm prepare specifically for these moments?",
        },
      },
    ],
    summaryCard: {
      id: "card.da.02",
      title: {
        ar: "الخطر يعيش في جهة الإدخال",
        en: "The Risk Lives on the Input Side",
      },
      whatYouLearned: {
        ar: [
          "أداة مجانية عامة وأداة معتمدة من المكتب ليستا الشيء نفسه، حتى حين يتشابه ناتجهما.",
          "ما يجعل أداة معتمدة هو عقد بيانات وسرية وأمان، لا مجرد كونها متاحة.",
          "لا شيء يُعرّف عميلًا يدخل أداة غير معتمدة، مهما بلغ ضيق الوقت.",
        ],
        en: [
          "A free public tool and a firm-approved tool are not the same thing, even when their output looks similar.",
          "What makes a tool approved is a data, confidentiality, and security contract, not just availability.",
          "Nothing that identifies a client goes into a non-approved tool, however tight the time.",
        ],
      },
      framework: {
        name: {
          ar: "قاعدة الأداة المعتمدة",
          en: "The Approved-Tool Rule",
        },
        steps: [
          { ar: "اسأل: هل هذه الأداة ملزمة بعقد سرية مع مكتبي؟", en: "Ask: is this tool bound by a confidentiality contract with my firm?" },
          { ar: "إن لم تكن متأكدًا، عاملها كغير معتمدة.", en: "If unsure, treat it as non-approved." },
          { ar: "لا بيانات عميل تدخل أداة غير معتمدة، مهما ضاق الوقت.", en: "No client data enters a non-approved tool, however tight the time." },
        ],
      },
      rememberThis: {
        ar: "«أعطتني نفس نوع الجواب» لا تعني شيئًا عن الأمان؛ الخطر الحقيقي في ما يحدث لما كتبته، لا في جودة ما استلمته.",
        en: "\"It gave me the same kind of answer\" says nothing about safety; the real risk is what happens to what you typed, not the quality of what you got back.",
      },
      useItTomorrow: {
        ar: "قبل لصق أي شيء غدًا، اسأل نفسك أولاً: هل هذه أداة معتمدة من مكتبي؟",
        en: "Before pasting anything tomorrow, first ask yourself: is this a tool my firm has approved?",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.modernize-your-law-firm", "src.governance-raci"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 03 — Never Send an AI-Assisted Draft Before You've Read It Yourself
  // =========================================================================
  {
    id: "unit.da.03",
    chapterId: "ch.da.ai-as-a-first-draft",
    order: 3,
    title: {
      ar: "لا تُرسل مسودة بمساعدة الذكاء الاصطناعي قبل أن تقرأها بنفسك",
      en: "Never Send an AI-Assisted Draft Before You've Actually Read It Yourself",
    },
    subtitle: {
      ar: "الضغط الزمني هو بالضبط اللحظة التي يسقط فيها هذا الالتزام أول ما يسقط",
      en: "Time pressure is exactly the moment this rule is the first thing to slip.",
    },
    primarySkillId: "skill.ai-output-verification",
    skillIds: ["skill.ai-output-verification", "skill.responsible-ai-use"],
    stage: 2,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.da.03.hook",
        text: {
          ar: "قبل عشر دقائق من موعد نهائي، طلب زيد من الأداة صياغة رد تسوية للعميل، وأرسله فورًا دون قراءته كاملًا لأن الموعد بدا أهم من قراءة أخيرة. رد العميل مرتبكًا: المسودة ذكرت مبلغ تسوية من ملف آخر تمامًا. أين حدث الخطأ؟",
          en: "Ten minutes before a deadline, Zeid asked the tool to draft a settlement reply, and sent it immediately without a full read because the deadline felt more urgent than a final look. The client replied confused: the draft cited a settlement figure from an entirely different matter. Where did it go wrong?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.da.03.why",
        text: {
          ar: "القراءة الكاملة قبل الإرسال هي الحاجز الوحيد الذي يمسك حقيقة مختلقة أو رقمًا خاطئًا أو اسمًا من ملف آخر. التخلي عنه تحت الضغط يزيل الحاجز الوحيد الموجود أصلاً.",
          en: "A full read before sending is the one barrier that catches a fabricated fact, a wrong number, or a name from another file. Dropping it under pressure removes the only safeguard that exists.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.da.03.goals",
        goals: {
          ar: [
            "أن تتعرف على لحظة الإغراء بتخطي قراءة كاملة تحت ضغط الوقت.",
            "أن تطبّق قاعدة غير قابلة للتفاوض: لا مسودة بمساعدة الذكاء الاصطناعي تُرسل أو تُقدَّم دون قراءة كاملة من المحامي المسؤول.",
            "أن تبني عادة سريعة تلائم موعدًا نهائيًا ضيقًا بدل تخطيها كليًا.",
          ],
          en: [
            "Recognize the moment of temptation to skip a full read under time pressure.",
            "Apply a non-negotiable rule: no AI-assisted draft is sent or filed without a full read by the responsible lawyer.",
            "Build a fast habit that fits inside a tight deadline instead of skipping the read altogether.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.da.03.lesson",
        title: {
          ar: "دقيقتان تحمي ملفًا كاملًا",
          en: "Two Minutes That Protect an Entire Matter",
        },
        body: {
          ar: [
            "الخطأ الشائع: الاعتقاد بأن «الشكل العام يبدو سليمًا» يجعل قراءة كاملة رفاهية اختيارية حين يضيق الوقت.",
            "القراءة هنا ليست تدقيقًا إملائيًا؛ هي التحقق من أن الوقائع والأسماء والأرقام والتواريخ في المسودة تخص هذا الملف وهذا العميل تحديدًا.",
            "ضيق الوقت لا يقلل من احتمال خطأ الأداة؛ إن حدث شيء، فتوجيه مقتضب تحت الضغط يزيد احتمال أن تخلط الأداة تفاصيل من سياق آخر أو تختلق واحدة.",
            "عادة تصلح تحت الضغط فعلًا: حتى مع دقيقتين متبقيتين، اقرأ المسودة كاملة مرة واحدة قبل الإرسال. القراءة نادرًا ما تكلّف الموعد النهائي؛ الخطأ غير المقروء قد يكلّف علاقة العميل بأكملها.",
            "من يتخطى القراءة الأخيرة توفيرًا لدقيقتين يراهن على الملف كله على أن الأداة كانت محظوظة هذه المرة.",
          ],
          en: [
            "The common mistake: believing that \"it looks fine overall\" makes a full read an optional luxury when time is short.",
            "This read isn't proofreading for typos; it's confirming the facts, names, numbers, and dates in the draft belong to this exact matter, this exact client.",
            "Time pressure doesn't reduce the tool's chance of error; if anything, a rushed prompt raises the odds it mixed in details from another context or invented one.",
            "A habit that genuinely fits under pressure: even with two minutes left, read the draft once, start to finish, before sending. A read rarely costs the deadline; an unread error can cost the entire client relationship.",
            "Whoever skips the final read to save two minutes is betting the whole matter on the tool having gotten lucky this time.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.da.03.visual",
        title: {
          ar: "دقيقتان مقابل ثمن خطأ غير مقروء",
          en: "Two Minutes Versus the Cost of an Unread Mistake",
        },
        variant: "scale",
        items: [
          {
            label: { ar: "قراءة كاملة قبل الإرسال", en: "A full read before sending" },
            detail: {
              ar: "دقيقتان تقريبًا، ونادرًا ما تكلّف الموعد النهائي.",
              en: "About two minutes, and it rarely costs the deadline.",
            },
            tone: "positive",
          },
          {
            label: { ar: "إرسال دون قراءة", en: "Sending without a read" },
            detail: {
              ar: "خطأ غير مكتشف قد يصل للعميل أو المحكمة مباشرة.",
              en: "An undetected error can reach the client or the court directly.",
            },
            tone: "negative",
          },
          {
            label: { ar: "ثمن الخطأ لاحقًا", en: "The later cost of the error" },
            detail: {
              ar: "ساعات تصحيح، وثقة عميل مهزوزة، ربما موعد فائت فعليًا.",
              en: "Hours of correction, shaken client trust, possibly a genuinely missed deadline.",
            },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.da.03.worked",
        strong: {
          label: {
            ar: "زيد يقرأ رغم عشر دقائق فقط",
            en: "Zeid reads despite having only ten minutes",
          },
          text: {
            ar: [
              "بعد أن أنتجت الأداة مسودة رد التسوية، يقرأها زيد سطرًا سطرًا رغم ضيق الوقت، فيكتشف اسم عميل من ملف سابق تسرب إلى الفقرة الثانية.",
              "يصحح الاسم خلال ثوانٍ ويرسل المسودة في الموعد.",
            ],
            en: [
              "After the tool produces the settlement reply draft, Zeid reads it line by line despite the tight time, and catches a client name from an earlier matter that leaked into the second paragraph.",
              "He fixes the name within seconds and sends the draft on time.",
            ],
          },
          why: {
            ar: "قراءة تسعين ثانية أمسكت خطأً كان سيصل مباشرة للعميل الخطأ، دون أن تكلّفه الموعد النهائي.",
            en: "A ninety-second read caught an error that would have reached the wrong client directly, without costing him the deadline.",
          },
        },
        weak: {
          label: {
            ar: "فراس يرسل مباشرة من الأداة",
            en: "Firas sends straight from the tool",
          },
          text: {
            ar: [
              "في الضغط نفسه، ينسخ فراس عدوان مسودة رد التسوية التي أنتجتها الأداة ويرسلها للعميل فورًا دون قراءتها كاملة.",
            ],
            en: [
              "Under the same pressure, Firas Adwan copies the tool-generated settlement reply and sends it to the client immediately without a full read.",
            ],
          },
          why: {
            ar: "بلا قراءة، وصل رقم تسوية من ملف آخر تمامًا إلى عميل حقيقي، وأصبح تصحيح الأثر أصعب بكثير من دقيقتي القراءة الموفرتين.",
            en: "With no read, a settlement figure from an entirely different matter reached a real client, and undoing the damage was far harder than the two minutes saved.",
          },
        },
      },
      { kind: "activity", id: "s.da.03.a1", activityId: "act.da.03.1", mode: "quick" },
      { kind: "activity", id: "s.da.03.a2", activityId: "act.da.03.2", mode: "guided" },
      { kind: "activity", id: "s.da.03.a3", activityId: "act.da.03.3", mode: "guided" },
      { kind: "activity", id: "s.da.03.a4", activityId: "act.da.03.4", mode: "independent" },
      { kind: "activity", id: "s.da.03.a5", activityId: "act.da.03.5", mode: "independent" },
      { kind: "summary", id: "s.da.03.summary", summaryCardId: "card.da.03" },
      {
        kind: "apply_tomorrow",
        id: "s.da.03.apply",
        task: {
          ar: "غدًا، اقرأ كل مسودة بمساعدة الذكاء الاصطناعي كاملة قبل إرسالها، حتى لو تبقى دقيقتان فقط على موعدها.",
          en: "Tomorrow, read every AI-assisted draft in full before sending it, even with only two minutes left on its deadline.",
        },
        detail: {
          ar: "إن لم تجد وقتًا للقراءة الكاملة، فهذا دليل على أن الوقت المتبقي لم يكن كافيًا للإرسال أصلًا.",
          en: "If you can't find time for the full read, that's a sign the remaining time wasn't enough to send at all.",
        },
      },
      {
        kind: "next_mission",
        id: "s.da.03.next",
        teaser: {
          ar: "قرأت كاملًا فوجدت الخطأ؛ لكن قراءة عامة تكتشف الواضح فقط. الوحدة القادمة: قائمة تحقق محددة تكتشف ما تفوته أي قراءة سريعة.",
          en: "You read fully and caught the error; but a general read only catches the obvious. Next unit: a specific checklist that catches what a quick read misses.",
        },
      },
    ],
    activities: [
      {
        id: "act.da.03.1",
        kind: "multiple_choice",
        skillId: "skill.ai-output-verification",
        stage: 2,
        context: {
          ar: [
            "أنتجت الأداة مسودة رد لعميل، وأمامك دقيقتان فقط قبل الموعد النهائي لإرساله.",
          ],
          en: [
            "The tool produced a client reply draft, and you have exactly two minutes left before the sending deadline.",
          ],
        },
        prompt: {
          ar: "ما التصرف الصحيح؟",
          en: "What's the right move?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "أرسلها فورًا؛ الوقت لا يسمح بقراءة كاملة.",
              en: "Send it immediately; there's no time for a full read.",
            },
            rationale: {
              ar: "ضيق الوقت يزيد الحاجة للقراءة، لا يلغيها؛ الإرسال دون قراءة يزيل الحاجز الوحيد ضد خطأ حقيقي.",
              en: "Tight time increases the need to read, it doesn't remove it; sending unread eliminates the only real barrier against an actual mistake.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "اقرأها كاملة الآن، ولو استغرق ذلك جزءًا من الدقيقتين المتبقيتين.",
              en: "Read it in full now, even if it uses part of the two remaining minutes.",
            },
            correct: true,
            rationale: {
              ar: "قراءة سريعة ومركّزة تكشف أي خطأ في الوقائع أو الأسماء أو الأرقام قبل أن يصل للعميل.",
              en: "A quick, focused read surfaces any error in facts, names, or numbers before it reaches the client.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "اطلب من الأداة نفسها أن تراجع المسودة وتؤكد صحتها.",
              en: "Ask the tool itself to review the draft and confirm it's correct.",
            },
            rationale: {
              ar: "الأداة التي أنتجت الخطأ ليست فحصًا مستقلًا عليه؛ قد تؤكد الخطأ نفسه بالثقة نفسها.",
              en: "The tool that produced the error isn't an independent check on it; it may confirm the same mistake with the same confidence.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "اطلب تمديد الموعد النهائي بدل قراءة المسودة.",
              en: "Ask for a deadline extension instead of reading the draft.",
            },
            rationale: {
              ar: "خطوة غير ضرورية غالبًا؛ قراءة تسعين ثانية تنجز المطلوب دون الحاجة لتمديد.",
              en: "Usually an unnecessary step; a ninety-second read accomplishes what's needed without requesting an extension.",
            },
          },
        ],
      },
      {
        id: "act.da.03.2",
        kind: "ordering",
        skillId: "skill.ai-output-verification",
        stage: 2,
        prompt: {
          ar: "رتّب الخطوات الصحيحة بين إنتاج الأداة لمسودة وإرسالها فعليًا.",
          en: "Order the correct steps between the tool producing a draft and it actually being sent.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the order number from a dropdown beside each step instead of dragging.",
        },
        hint: {
          ar: "التصحيح يأتي بعد اكتشاف الخطأ، لا قبله.",
          en: "Correction comes after spotting the error, not before it.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "الأداة تنتج المسودة الأولى بناءً على التوجيه المُعطى.",
              en: "The tool produces the first draft based on the given prompt.",
            },
            rationale: {
              ar: "نقطة البداية؛ مسودة خام تحتاج لعين محامٍ مسؤول قبل أي خطوة أخرى.",
              en: "The starting point; a raw draft that needs a responsible lawyer's eye before anything else.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "المحامي المسؤول يقرأ المسودة كاملة سطرًا سطرًا، متحققًا من الوقائع والأسماء والأرقام.",
              en: "The responsible lawyer reads the draft in full, line by line, checking facts, names, and numbers.",
            },
            rationale: {
              ar: "الخطوة الحاسمة التي تمسك أي خطأ قبل أن يغادر المكتب.",
              en: "The critical step that catches any error before it leaves the office.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "تصحيح أي خطأ اكتُشف أثناء القراءة.",
              en: "Fixing any error found during the read.",
            },
            rationale: {
              ar: "يأتي مباشرة بعد اكتشاف الخطأ، لا قبله ولا بعد الإرسال.",
              en: "Comes right after finding the error, not before it and not after sending.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "إرسال المسودة النهائية للعميل أو الجهة المعنية.",
              en: "Sending the final draft to the client or relevant party.",
            },
            rationale: {
              ar: "الخطوة الأخيرة، بعد أن أصبحت المسودة مقروءة ومصححة بالكامل.",
              en: "The last step, once the draft has been fully read and corrected.",
            },
          },
        ],
      },
      {
        id: "act.da.03.3",
        kind: "branching_decision",
        skillId: "skill.ai-output-verification",
        secondarySkillIds: ["skill.responsible-ai-use"],
        stage: 2,
        weight: 2,
        context: {
          ar: [
            "الساعة الخامسة إلا خمس دقائق، والموعد النهائي لإرسال رد تسوية للعميل يقترب. طلبت من الأداة صياغته منذ لحظات.",
          ],
          en: [
            "It's five minutes to five, and the deadline to send a settlement reply to the client is close. You asked the tool to draft it moments ago.",
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
              ar: "المسودة جاهزة أمامك. خمس دقائق فقط متبقية على الموعد.",
              en: "The draft is ready in front of you. Only five minutes remain before the deadline.",
            },
            choices: [
              {
                id: "n1c1",
                label: {
                  ar: "تقرأها كاملة سطرًا سطرًا رغم ضيق الوقت.",
                  en: "You read it in full, line by line, despite the tight time.",
                },
                nextNodeId: "n2",
                quality: "strong",
                rationale: {
                  ar: "خطوة تنجز خلال دقيقة أو دقيقتين، وتمسك أي خطأ قبل أن يصل للعميل.",
                  en: "A step that takes a minute or two and catches any error before it reaches the client.",
                },
              },
              {
                id: "n1c2",
                label: {
                  ar: "تلقي نظرة سريعة على الفقرة الأولى فقط، وتفترض الباقي سليمًا.",
                  en: "You glance quickly at just the first paragraph, and assume the rest is fine.",
                },
                nextNodeId: "n2",
                quality: "weak",
                rationale: {
                  ar: "قراءة جزئية قد تفوّت خطأ في فقرة لاحقة، مثل رقم أو اسم من ملف آخر.",
                  en: "A partial read may miss an error in a later paragraph, like a number or name from another matter.",
                },
              },
              {
                id: "n1c3",
                label: {
                  ar: "ترسلها فورًا كما هي؛ الموعد أهم من قراءة إضافية.",
                  en: "You send it immediately as is; the deadline matters more than an extra read.",
                },
                nextNodeId: "n2",
                quality: "critical_mistake",
                rationale: {
                  ar: "إزالة الحاجز الوحيد ضد خطأ حقيقي مقابل توفير دقيقتين فقط، مقايضة خطيرة على ملف العميل.",
                  en: "Removing the only barrier against a real error to save just two minutes, a dangerous trade against the client's matter.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "الموعد النهائي أصبح على بعد دقيقة واحدة فقط.",
              en: "The deadline is now just one minute away.",
            },
            choices: [
              {
                id: "n2c1",
                label: {
                  ar: "إن وجدت خطأً، تصححه فورًا ثم ترسل، حتى لو تأخرت دقائق قليلة عن الموعد.",
                  en: "If you found an error, you fix it immediately then send, even if a few minutes late.",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "تأخر بسيط لا يقارن بضرر وصول خطأ فعلي لعميل حقيقي.",
                  en: "A minor delay is nothing compared to the harm of a real error reaching an actual client.",
                },
              },
              {
                id: "n2c2",
                label: {
                  ar: "ترسل المسودة كما هي رغم رؤيتك خطأ محتملًا، لأن الموعد أوشك.",
                  en: "You send the draft as is despite spotting a possible error, because the deadline is nearly here.",
                },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "رؤية خطأ محتمل ثم تجاهله بسبب الموعد يفرغ القراءة من فائدتها بالكامل.",
                  en: "Spotting a possible error and ignoring it because of the deadline defeats the entire purpose of reading.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.da.03.4",
        kind: "short_written",
        skillId: "skill.ai-output-verification",
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.digital-ai-written.v1",
        weight: 2,
        minChars: 150,
        context: {
          ar: [
            "لاحظت أن ثلاثة زملاء في الشهر الماضي أرسلوا مسودات بمساعدة الذكاء الاصطناعي دون قراءتها كاملة، بحجة ضيق الوقت في كل مرة.",
          ],
          en: [
            "You noticed three colleagues over the past month sent AI-assisted drafts without a full read, each time citing tight time.",
          ],
        },
        prompt: {
          ar: "اكتب (٦٠-١٠٠ كلمة) قاعدة عملية قصيرة تقترحها على الفريق تجعل القراءة الكاملة ممكنة حتى تحت ضغط شديد.",
          en: "Write (60-100 words) a short practical rule you'd propose to the team that makes a full read possible even under severe time pressure.",
        },
        modelAnswer: {
          ar: [
            "«أقترح قاعدة بسيطة: لا مسودة تُرسل قبل قراءة كاملة سطرًا سطرًا، مهما بلغ ضيق الوقت. القراءة المركّزة تستغرق دقيقة أو دقيقتين فقط.»",
            "«إن لم يتوفر حتى هذا الوقت، فهذا يعني أن الوقت المتبقي غير كافٍ للإرسال أصلًا، لا أن القراءة يمكن تخطيها.»",
          ],
          en: [
            "\"I'd propose a simple rule: no draft goes out before a full, line-by-line read, however tight the time. A focused read takes just a minute or two.\"",
            "\"If even that time isn't available, it means the remaining time isn't enough to send at all, not that the read can be skipped.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«الفريق يجب أن يعمل بسرعة أكبر ليتجنب هذا الضغط أصلًا.»"],
            en: ["\"The team should just work faster to avoid this pressure in the first place.\""],
          },
          whatIsWrong: {
            ar: "لا يقترح قاعدة عملية للحظة الضغط الفعلية؛ الضغط سيحدث حتمًا، والحل يحتاج عادة تصمد فيه لا نصيحة عامة بالسرعة.",
            en: "It offers no practical rule for the actual pressure moment; pressure will inevitably happen, and the fix needs a habit that survives it, not generic advice to move faster.",
          },
        },
      },
      {
        id: "act.da.03.5",
        kind: "reflection",
        skillId: "skill.ai-output-verification",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع موقفًا أرسلت فيه شيئًا تحت ضغط وقت دون قراءة كاملة. ماذا لو كان يحتوي خطأً فعليًا؟",
          en: "Recall a moment you sent something under time pressure without a full read. What if it had contained a real error?",
        },
        followUp: {
          ar: "ما العلامة الداخلية التي ستذكّرك غدًا بأن «الوقت ضيق» ليس سببًا كافيًا لتخطي القراءة؟",
          en: "What internal cue will remind you tomorrow that \"time is tight\" isn't reason enough to skip the read?",
        },
      },
    ],
    summaryCard: {
      id: "card.da.03",
      title: {
        ar: "دقيقتان تحمي ملفًا كاملًا",
        en: "Two Minutes That Protect an Entire Matter",
      },
      whatYouLearned: {
        ar: [
          "القراءة الكاملة قبل الإرسال هي الحاجز الوحيد ضد خطأ حقيقي في مسودة بمساعدة الذكاء الاصطناعي.",
          "ضيق الوقت يزيد الحاجة للقراءة، لا يبررها بالتخطي.",
          "عادة تصمد تحت الضغط: اقرأ كاملًا حتى مع دقيقتين متبقيتين فقط.",
        ],
        en: [
          "A full read before sending is the one barrier against a real error in an AI-assisted draft.",
          "Tight time increases the need to read; it doesn't justify skipping it.",
          "A habit that survives pressure: read in full even with only two minutes left.",
        ],
      },
      framework: {
        name: {
          ar: "القراءة قبل الإرسال، دائمًا",
          en: "Read Before Sending, Always",
        },
        steps: [
          { ar: "لا مسودة تُرسل دون قراءة كاملة من المحامي المسؤول.", en: "No draft is sent without a full read by the responsible lawyer." },
          { ar: "تحقق من الوقائع والأسماء والأرقام والتواريخ تحديدًا.", en: "Specifically check facts, names, numbers, and dates." },
          { ar: "صحح فورًا كل ما تكتشفه، ثم أرسل.", en: "Fix anything you find immediately, then send." },
        ],
      },
      rememberThis: {
        ar: "من يتخطى القراءة الأخيرة توفيرًا لدقيقتين يراهن على الملف كله أن الأداة كانت محظوظة هذه المرة.",
        en: "Whoever skips the final read to save two minutes is betting the whole matter that the tool got lucky this time.",
      },
      useItTomorrow: {
        ar: "غدًا، اقرأ كل مسودة بمساعدة الذكاء الاصطناعي كاملة قبل إرسالها، بلا استثناء واحد.",
        en: "Tomorrow, read every AI-assisted draft in full before sending it, with no exceptions.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.your-brain-at-work", "src.legal-project-management"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 04 — A Concrete Verification Checklist for AI-Assisted Legal Work
  // =========================================================================
  {
    id: "unit.da.04",
    chapterId: "ch.da.verifying-before-you-rely",
    order: 4,
    title: {
      ar: "قائمة تحقق فعلية لأي عمل بمساعدة الذكاء الاصطناعي",
      en: "A Concrete Verification Checklist for AI-Assisted Legal Work",
    },
    subtitle: {
      ar: "القراءة السريعة تكتشف الأخطاء الواضحة فقط؛ القائمة تكتشف ما تفوته أي قراءة",
      en: "A quick read only catches the obvious errors; the checklist catches what any read misses.",
    },
    primarySkillId: "skill.ai-output-verification",
    skillIds: ["skill.ai-output-verification"],
    stage: 2,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.da.04.hook",
        text: {
          ar: "راجعت دانيا فرحات مسودة زيد بمساعدة الذكاء الاصطناعي فوجدت خلال دقائق: بندًا مقتبسًا لا يطابق نص العقد الأصلي، حساب فوائد متراكمة غير صحيح، ومصطلح «المستأجر» يتبدل أحيانًا إلى «الطرف الثاني» لنفس الشخص. زيد قرأ المسودة كاملة قبل تسليمها. كيف فاتته هذه الأخطاء رغم القراءة؟",
          en: "Dania Farhat reviewed Zeid's AI-assisted draft and within minutes found: a quoted clause that didn't match the actual contract wording, an incorrect accrued-interest calculation, and the term \"the Lessee\" occasionally shifting to \"the Second Party\" for the same person. Zeid had read the draft in full before handing it over. How did these slip past a full read?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.da.04.why",
        text: {
          ar: "القراءة العامة تمسك ما يبدو خاطئًا بوضوح؛ لا تمسك اقتباسًا مصاغًا بلطف قليلًا عن النص الأصلي، أو حسابًا يبدو معقولًا، أو مصطلحًا متبدلًا بلا انتباه. هذه تحتاج قائمة تحقق محددة، لا انتباهًا عامًا فقط.",
          en: "A general read catches what's obviously wrong; it doesn't catch a quote gently rephrased from the original, a calculation that looks plausible, or a term drifting unnoticed. These need a specific checklist, not just general attention.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.da.04.goals",
        goals: {
          ar: [
            "أن تعدد الفحوص الأربعة التي يجب أن تتضمنها جولة تحقق: وجود الاستشهادات وصحة مضمونها، دقة النص المقتبس حرفيًا، إعادة حساب كل رقم بشكل مستقل، واتساق المصطلحات المعرّفة.",
            "أن تطبّق القائمة على مسودة قصيرة بمساعدة الذكاء الاصطناعي.",
            "أن تشرح لماذا يكتشف كل فحص خطأً تفوته قراءة عامة.",
          ],
          en: [
            "List the four checks a verification pass must include: citations exist and say what's claimed, quoted text is exact, calculations are redone independently, and defined terms are used consistently.",
            "Apply the checklist to a short AI-assisted draft.",
            "Explain why each check catches an error a general read misses.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.da.04.lesson",
        title: {
          ar: "قرأتها ليست تعني تحققت منها",
          en: "\"I Read It\" Is Not \"I Verified It\"",
        },
        body: {
          ar: [
            "الخطأ الشائع: التعامل مع «قرأت المسودة» و«تحققت منها» كأنهما الشيء نفسه.",
            "الفحص الأول — وجود الاستشهاد وصحة مضمونه: افتح المصدر الأصلي فعليًا — النص القانوني، الحكم، أو بند العقد — وتأكد أنه موجود ويقول فعلًا ما تدّعيه المسودة، لا أن رقمه يبدو معقولًا فقط.",
            "الفحص الثاني — دقة الاقتباس الحرفي: أي نص بين علامتي اقتباس يجب أن يطابق المصدر حرفًا بحرف. الأداة كثيرًا ما «تُحسّن» صياغة الاقتباس، فيصبح خاطئًا بهدوء دون أن يبدو كذلك.",
            "الفحص الثالث — إعادة حساب كل رقم بشكل مستقل: لا تثق بمجموع أو حساب فوائد أو حساب مدة أنتجته الأداة دون إعادة حسابه بنفسك، ويفضّل بأداة أو طريقة منفصلة تمامًا.",
            "الفحص الرابع — اتساق المصطلحات المعرّفة: إن عرّف المستند «المستأجر»، فكل إشارة لاحقة يجب أن تستخدم المصطلح نفسه بالضبط، لا مرادفًا يُدخل غموضًا بهدوء.",
            "لا يحتاج أي من الفحوص الأربعة إعادة العمل القانوني كله؛ كل واحد يستغرق دقائق ويكتشف نوعًا محددًا من الخطأ تفوته قراءة عامة.",
          ],
          en: [
            "The common mistake: treating \"I read the draft\" and \"I verified it\" as the same thing.",
            "Check one — citations exist and say what's claimed: actually open the primary source — the statute, the ruling, the contract clause — and confirm it exists and truly says what the draft claims, not that its number just looks plausible.",
            "Check two — quoted text is character-exact: any text inside quotation marks must match the source word for word. The tool often \"improves\" a quote's phrasing, which quietly makes it wrong without looking like it.",
            "Check three — every number is recomputed independently: never trust a total, an interest calculation, or a date-range calculation the tool produced without redoing it yourself, ideally with a separate tool or method entirely.",
            "Check four — defined terms stay consistent: if the document defines \"the Lessee,\" every later reference must use that exact term, not a synonym that quietly introduces ambiguity.",
            "None of the four checks requires redoing the entire legal analysis; each takes minutes and catches a specific category of error a general read misses.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.da.04.visual",
        title: {
          ar: "أربعة فحوص تحقق",
          en: "Four Verification Checks",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "الاستشهاد موجود ويقول ما يُنسب إليه", en: "Citation exists and says what's claimed" },
            detail: {
              ar: "افتح المصدر الأصلي، لا تكتفِ بشكل الرقم.",
              en: "Open the primary source, don't settle for how the number looks.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "الاقتباس مطابق حرفيًا", en: "The quote matches word for word" },
            detail: {
              ar: "قارن كل كلمة داخل علامتي الاقتباس بالنص الأصلي.",
              en: "Compare every word inside the quotation marks to the original text.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "كل رقم أُعيد حسابه", en: "Every number is recomputed" },
            detail: {
              ar: "لا ثقة بمجموع أو حساب فوائد دون إعادة حسابه بنفسك.",
              en: "No trusting a total or interest calculation without redoing it yourself.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "المصطلحات المعرّفة متسقة", en: "Defined terms stay consistent" },
            detail: {
              ar: "المصطلح نفسه من أول استخدام حتى آخر إشارة.",
              en: "The same term from its first use to its last reference.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "النتيجة", en: "The result" },
            detail: {
              ar: "أخطاء لا تكتشفها قراءة عامة، مكتشفة في دقائق معدودة.",
              en: "Errors a general read never catches, found in just a few minutes.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.da.04.worked",
        strong: {
          label: {
            ar: "دانيا تُطبّق الفحوص الأربعة كاملة",
            en: "Dania runs all four checks in full",
          },
          text: {
            ar: [
              "على مسودة بند تعويض قصيرة، تفتح النص الأصلي للعقد وتقارن الاقتباس كلمة بكلمة، فتكتشف صياغة مُحسّنة قليلًا تغيّر المعنى.",
              "تعيد حساب نسبة الفائدة بنفسها فتجد فارقًا صغيرًا، وتراجع كل إشارة لمصطلح «المتعاقد» فتجدها متسقة. تصحح الاثنين قبل أي إرسال.",
            ],
            en: [
              "On a short indemnity clause draft, she opens the actual contract text and compares the quote word for word, catching a slightly improved phrasing that shifts the meaning.",
              "She independently recomputes the interest rate and finds a small discrepancy, and checks every reference to \"the Contractor,\" finding it consistent. She fixes both before anything goes out.",
            ],
          },
          why: {
            ar: "طبّقت الفحوص الأربعة تحديدًا، لا قراءة عامة، فأمسكت أخطاء لم تكن لتظهر بمجرد القراءة.",
            en: "She applied the four specific checks, not a general read, and caught errors a plain read-through would never have surfaced.",
          },
        },
        weak: {
          label: {
            ar: "زيد يكتفي بقراءة عامة واثقة",
            en: "Zeid settles for a confident general read",
          },
          text: {
            ar: [
              "يقرأ زيد المسودة كاملة ويشعر بالارتياح لأن «لا شيء بدا خاطئًا». لم يفتح النص الأصلي للمقارنة، ولم يعد حساب الفائدة، ولم يتتبع مصطلح «المستأجر» عبر النص.",
            ],
            en: [
              "Zeid reads the whole draft and feels reassured because \"nothing looked wrong.\" He never opened the original text to compare, never recomputed the interest, and never tracked \"the Lessee\" through the document.",
            ],
          },
          why: {
            ar: "قراءة عامة تكتشف الخطأ الفج فقط؛ استشهاد لمادة ملغاة، واقتباس مُحسَّن بهدوء، ومصطلح متبدل، كلها تمر دون أثر عبر قراءة بلا قائمة محددة.",
            en: "A general read only catches a blatant error; a citation to a repealed article, a quietly improved quote, and a drifting term all pass unnoticed through a read with no specific checklist.",
          },
        },
      },
      { kind: "activity", id: "s.da.04.a1", activityId: "act.da.04.1", mode: "quick" },
      { kind: "activity", id: "s.da.04.a2", activityId: "act.da.04.2", mode: "guided" },
      { kind: "activity", id: "s.da.04.a3", activityId: "act.da.04.3", mode: "guided" },
      { kind: "activity", id: "s.da.04.a4", activityId: "act.da.04.4", mode: "independent" },
      { kind: "activity", id: "s.da.04.a5", activityId: "act.da.04.5", mode: "independent" },
      { kind: "summary", id: "s.da.04.summary", summaryCardId: "card.da.04" },
      {
        kind: "apply_tomorrow",
        id: "s.da.04.apply",
        task: {
          ar: "غدًا، طبّق الفحوص الأربعة كاملة على أي مسودة بمساعدة الذكاء الاصطناعي قبل أي إرسال، لا قراءة عامة فقط.",
          en: "Tomorrow, run all four checks in full on any AI-assisted draft before sending, not just a general read.",
        },
        detail: {
          ar: "إن لم يتسع الوقت للفحوص الأربعة كاملة، ابدأ بالاستشهادات والاقتباسات؛ هي الأكثر خطورة إن كانت خاطئة.",
          en: "If there's no time for all four, start with citations and quotes; they're the most dangerous if wrong.",
        },
      },
      {
        kind: "next_mission",
        id: "s.da.04.next",
        teaser: {
          ar: "طبّقت القائمة على أربعة أنواع من الأخطاء. الوحدة الأخيرة تأخذك خطوة بخطوة عبر التحقق الكامل من استشهاد قضائي واحد، من البداية للنهاية.",
          en: "You've applied the checklist to four error types. The final unit walks you step by step through fully verifying one case citation, start to finish.",
        },
      },
    ],
    activities: [
      {
        id: "act.da.04.1",
        kind: "multiple_choice",
        skillId: "skill.ai-output-verification",
        stage: 2,
        context: {
          ar: [
            "مسودة بمساعدة الذكاء الاصطناعي تحتوي جملة: «كما تنص المادة، يلتزم الطرف الأول بتسليم البضاعة خلال خمسة أيام من تاريخ التوقيع.» بين علامتي اقتباس.",
          ],
          en: [
            "An AI-assisted draft contains, inside quotation marks: \"As the article states, the First Party must deliver the goods within five days of signing.\"",
          ],
        },
        prompt: {
          ar: "أي فحص من الفحوص الأربعة يكتشف تحديدًا إن كانت هذه صياغة الأداة المُحسّنة لا نص العقد الأصلي؟",
          en: "Which of the four checks specifically catches whether this is the tool's improved phrasing rather than the contract's actual text?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "إعادة حساب الأرقام بشكل مستقل.",
              en: "Independently recomputing the numbers.",
            },
            rationale: {
              ar: "هذا الفحص يتعلق بحسابات، لا بمطابقة نص مقتبس حرفيًا.",
              en: "This check is about calculations, not matching a quoted text word for word.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "مقارنة النص المقتبس كلمة بكلمة مع العقد الأصلي.",
              en: "Comparing the quoted text word for word against the actual contract.",
            },
            correct: true,
            rationale: {
              ar: "هذا الفحص تحديدًا يكشف إن كانت الأداة أعادت صياغة الاقتباس بهدوء بدل نقله حرفيًا.",
              en: "This specific check reveals whether the tool quietly rephrased the quote instead of copying it exactly.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "التحقق من اتساق المصطلحات المعرّفة.",
              en: "Checking consistency of defined terms.",
            },
            rationale: {
              ar: "يتعلق باستخدام المصطلح نفسه لاحقًا، لا بدقة الاقتباس نفسه.",
              en: "It concerns using the same term later on, not the accuracy of the quote itself.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "التأكد من وجود الاستشهاد فقط دون مضمونه.",
              en: "Just confirming the citation exists without its content.",
            },
            rationale: {
              ar: "وجود مصدر لا يكفي؛ المشكلة هنا في دقة الصياغة المقتبسة منه تحديدًا.",
              en: "A source existing isn't enough; the problem here is specifically the accuracy of the phrasing quoted from it.",
            },
          },
        ],
      },
      {
        id: "act.da.04.2",
        kind: "categorization",
        skillId: "skill.ai-output-verification",
        stage: 2,
        prompt: {
          ar: "صنّف كل خطأ تحت الفحص الذي كان سيكتشفه.",
          en: "Sort each error under the check that would have caught it.",
        },
        accessibleAlternative: {
          ar: "اختر الفحص المناسب من قائمة منسدلة بجانب كل خطأ بدل السحب.",
          en: "Pick the matching check from a dropdown beside each error instead of dragging.",
        },
        buckets: [
          { id: "citation", label: { ar: "الاستشهاد ومضمونه", en: "Citation and its content" } },
          { id: "quote", label: { ar: "دقة الاقتباس", en: "Quote accuracy" } },
          { id: "calc", label: { ar: "إعادة الحساب", en: "Recalculation" } },
          { id: "terms", label: { ar: "اتساق المصطلحات", en: "Term consistency" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "استشهدت المسودة بمادة قانونية أُلغيت قبل سنتين دون ملاحظة ذلك.",
              en: "The draft cited a legal article repealed two years ago without noticing.",
            },
            bucketId: "citation",
            rationale: {
              ar: "لم يتحقق أحد من أن الاستشهاد لا يزال ساريًا فعلًا، لا من مجرد وجود رقمه.",
              en: "No one checked that the citation was actually still in force, not just that its number existed.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "الفوائد المتراكمة المذكورة في المسودة أقل من المبلغ الصحيح بألف درهم.",
              en: "The accrued interest stated in the draft was AED 1,000 less than the correct amount.",
            },
            bucketId: "calc",
            rationale: {
              ar: "رقم لم يُعَد حسابه بشكل مستقل، فمر خطأ حسابي دون اكتشاف.",
              en: "A number never independently recomputed, letting a calculation error pass unnoticed.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "استُخدم مصطلح «المورّد» في الفقرة الأولى ثم «الطرف الثاني» لاحقًا لنفس الجهة.",
              en: "\"The Supplier\" was used in the first paragraph, then \"the Second Party\" later for the same entity.",
            },
            bucketId: "terms",
            rationale: {
              ar: "المصطلح المعرّف انزلق إلى مرادف دون أن يلاحظ أحد التبدل عبر النص.",
              en: "The defined term drifted into a synonym with no one noticing the shift across the text.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "النص بين علامتي الاقتباس يخالف كلمتين عن النص الأصلي للعقد.",
              en: "The text inside quotation marks differed by two words from the contract's actual text.",
            },
            bucketId: "quote",
            rationale: {
              ar: "لم تُقارن الصياغة المقتبسة كلمة بكلمة مع المصدر الأصلي.",
              en: "The quoted phrasing was never compared word for word against the original source.",
            },
          },
        ],
      },
      {
        id: "act.da.04.3",
        kind: "find_mistake",
        skillId: "skill.ai-output-verification",
        stage: 2,
        context: {
          ar: [
            "قال زميل بعد مراجعة مسودة: «قرأت النص كاملًا، وأعدت حساب الفائدة، وتحققت من اتساق مصطلح ’المستأجر‘. كل شيء سليم.»",
          ],
          en: [
            "A colleague said after reviewing a draft: \"I read the whole text, recomputed the interest, and checked that 'the Lessee' stays consistent. Everything's fine.\"",
          ],
        },
        prompt: {
          ar: "أي فحص من الفحوص الأربعة غاب عن مراجعته، رغم أنه أنجز الثلاثة الأخرى؟",
          en: "Which of the four checks is missing from his review, despite completing the other three?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "التحقق من وجود الاستشهادات والتأكد أنها تقول فعلًا ما نُسب إليها.",
              en: "Confirming citations exist and actually say what's attributed to them.",
            },
            correct: true,
            rationale: {
              ar: "ذكر القراءة، الحساب، والمصطلحات، لكن لم يذكر فتح أي مصدر أصلي للتحقق من استشهاد.",
              en: "He mentioned the read, the calculation, and the terms, but never mentioned opening a primary source to check any citation.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "إعادة حساب الفائدة بشكل مستقل.",
              en: "Independently recomputing the interest.",
            },
            rationale: {
              ar: "ذكر هذا الفحص صراحة في وصفه؛ لم يكن الغائب.",
              en: "He explicitly mentioned this check in his description; it wasn't the missing one.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "اتساق مصطلح «المستأجر».",
              en: "Consistency of the term \"the Lessee.\"",
            },
            rationale: {
              ar: "ذكر هذا الفحص أيضًا صراحة؛ ليس الفحص الغائب عن مراجعته.",
              en: "He also explicitly mentioned this check; it's not the one missing from his review.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "قراءة النص كاملًا مرة واحدة على الأقل.",
              en: "Reading the full text at least once.",
            },
            rationale: {
              ar: "ذكر أنه قرأ النص كاملًا؛ هذه الخطوة موجودة في وصفه.",
              en: "He stated he read the full text; this step is present in his description.",
            },
          },
        ],
      },
      {
        id: "act.da.04.4",
        kind: "short_written",
        skillId: "skill.ai-output-verification",
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.digital-ai-written.v1",
        weight: 2,
        minChars: 150,
        context: {
          ar: [
            "مقتطف من مسودة بمساعدة الذكاء الاصطناعي: «وفقًا للمادة ٩٤، يحق للمستأجر إنهاء العقد بإشعار مسبق مدته ثلاثون يومًا. تبلغ الفائدة المتراكمة على المتأخرات ١٢٬٤٠٠ درهم. يلتزم الطرف الثاني بالتسليم خلال هذه المدة.»",
          ],
          en: [
            "Excerpt from an AI-assisted draft: \"Per Article 94, the Lessee may terminate the contract with thirty days' prior notice. Accrued interest on arrears totals AED 12,400. The Second Party must deliver within this period.\"",
          ],
        },
        prompt: {
          ar: "اكتب (٧٠-١١٠ كلمة) بالضبط ما ستتحقق منه في هذا المقتطف، وكيف، مستخدمًا الفحوص الأربعة.",
          en: "Write (70-110 words) exactly what you'd verify in this excerpt, and how, using the four checks.",
        },
        modelAnswer: {
          ar: [
            "«أفتح النص الرسمي للمادة ٩٤ للتأكد من وجودها وأنها تنص فعلًا على مهلة الثلاثين يومًا. أعيد حساب الفائدة المتراكمة بنفسي بمعادلة مستقلة للتأكد من رقم ١٢٬٤٠٠.»",
            "«ألاحظ أن المستند يستخدم ’المستأجر‘ ثم ’الطرف الثاني‘ لنفس الشخص على الأرجح؛ أتحقق من العقد الأصلي أيهما المصطلح المعرّف، وأوحّده في كل المستند.»",
          ],
          en: [
            "\"I'd open the official text of Article 94 to confirm it exists and actually states the thirty-day period. I'd independently recompute the accrued interest with a separate calculation to verify the AED 12,400 figure.\"",
            "\"I'd notice the document uses 'the Lessee' then 'the Second Party' for what's likely the same person; I'd check the original contract for which term is defined, and make it consistent throughout.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«يبدو المقتطف منطقيًا ومكتوبًا بشكل احترافي، فأرجّح أنه صحيح.»"],
            en: ["\"The excerpt looks logical and professionally written, so I'd assume it's correct.\""],
          },
          whatIsWrong: {
            ar: "يكرر بالضبط الخطأ الذي تعلّمته الوحدة: الشكل الاحترافي لا علاقة له بالدقة؛ لا يذكر فتح أي مصدر أو إعادة أي حساب.",
            en: "It repeats exactly the mistake this unit teaches: professional-looking form has nothing to do with accuracy; it mentions opening no source and redoing no calculation.",
          },
        },
      },
      {
        id: "act.da.04.5",
        kind: "reflection",
        skillId: "skill.ai-output-verification",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع مسودة راجعتها بقراءة عامة فقط، دون فحوص محددة. أي من الفحوص الأربعة كان أكثر عرضة للفوات؟",
          en: "Recall a draft you reviewed with just a general read, no specific checks. Which of the four checks was most likely to have been missed?",
        },
        followUp: {
          ar: "كيف ستدمج الفحوص الأربعة في روتين مراجعتك اليومي دون أن تبطئه كثيرًا؟",
          en: "How will you build the four checks into your daily review routine without slowing it down much?",
        },
      },
    ],
    summaryCard: {
      id: "card.da.04",
      title: {
        ar: "قرأتها ليست تعني تحققت منها",
        en: "\"I Read It\" Is Not \"I Verified It\"",
      },
      whatYouLearned: {
        ar: [
          "قراءة عامة تكتشف الخطأ الواضح فقط، لا اقتباسًا مُحسَّنًا بهدوء أو رقمًا غير مُعاد حسابه.",
          "أربعة فحوص تكتشف ما تفوته القراءة: الاستشهاد ومضمونه، دقة الاقتباس، إعادة الحساب، واتساق المصطلحات.",
          "كل فحص يستغرق دقائق ويكشف نوعًا محددًا من الخطأ.",
        ],
        en: [
          "A general read only catches obvious errors, not a quietly improved quote or a number never recomputed.",
          "Four checks catch what a read misses: the citation and its content, quote accuracy, recalculation, and term consistency.",
          "Each check takes minutes and reveals a specific category of error.",
        ],
      },
      framework: {
        name: {
          ar: "الفحوص الأربعة",
          en: "The Four Checks",
        },
        steps: [
          { ar: "الاستشهاد موجود ويقول ما يُنسب إليه.", en: "The citation exists and says what's claimed." },
          { ar: "الاقتباس مطابق حرفيًا للمصدر.", en: "The quote matches the source word for word." },
          { ar: "كل رقم أُعيد حسابه بشكل مستقل.", en: "Every number is recomputed independently." },
          { ar: "المصطلحات المعرّفة متسقة من أول استخدام لآخره.", en: "Defined terms stay consistent from first use to last." },
        ],
      },
      rememberThis: {
        ar: "«قرأتها» و«تحققت منها» ليستا الشيء نفسه؛ التحقق يحتاج قائمة محددة، لا انتباهًا عامًا فقط.",
        en: "\"I read it\" and \"I verified it\" are not the same thing; verification needs a specific checklist, not just general attention.",
      },
      useItTomorrow: {
        ar: "غدًا، طبّق الفحوص الأربعة كاملة على أي مسودة بمساعدة الذكاء الاصطناعي قبل أي إرسال.",
        en: "Tomorrow, run all four checks in full on any AI-assisted draft before sending.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.legal-analyst", "src.thinking-like-a-lawyer"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 05 — Fact-Checking One Case Citation, Start to Finish
  // =========================================================================
  {
    id: "unit.da.05",
    chapterId: "ch.da.verifying-before-you-rely",
    order: 5,
    title: {
      ar: "التحقق الكامل من استشهاد قضائي واحد، خطوة بخطوة",
      en: "Fact-Checking One Case Citation, Start to Finish",
    },
    subtitle: {
      ar: "نظرة سريعة تؤكد أن الحكم موجود؛ التحقق الفعلي يكشف أنه لا يقول ما يُنسب إليه",
      en: "A quick glance confirms a ruling exists; actual verification reveals it doesn't say what's claimed.",
    },
    primarySkillId: "skill.ai-output-verification",
    skillIds: ["skill.ai-output-verification", "skill.disclosing-ai-errors"],
    stage: 2,
    estimatedMinutes: 10,
    steps: [
      {
        kind: "hook",
        id: "s.da.05.hook",
        text: {
          ar: "أعطته الأداة استشهادًا: «قرار محكمة التمييز التجارية رقم ٢٨٤٧/٢٠٢١»، وادّعت أنه قرر توقف سريان مهلة التقادم أثناء مفاوضات التسوية. بحث زيد عن رقم القرار بسرعة، فوجد قرارًا بهذا الرقم فعلًا، لكن في نزاع شحن بضائع لا علاقة له بالموضوع إطلاقًا. ماذا فاتته النظرة السريعة؟",
          en: "The tool gave him a citation: \"Commercial Cassation Court decision no. 2847/2021,\" claiming it held that the limitation period is suspended during settlement negotiations. Zeid quickly searched the decision number, and found a real decision with that number — but about a shipping cargo dispute, entirely unrelated. What did the quick search miss?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.da.05.why",
        text: {
          ar: "استشهادات قضائية مختلقة كليًا هي مخاطرة معروفة وموثقة لأدوات الذكاء الاصطناعي اللغوية؛ قد تنتج شكل استشهاد يبدو أصيلًا تمامًا — اسم محكمة حقيقي، رقم معقول، سنة منطقية — بينما المضمون المنسوب إليه مختلق بالكامل.",
          en: "Fully fabricated case citations are a well-documented, real risk of AI language models; they can produce a citation that looks completely authentic — a real court name, a plausible number, a sensible year — while the substance attributed to it is entirely invented.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.da.05.goals",
        goals: {
          ar: [
            "أن تطبّق تسلسل تحقق كامل من استشهاد واحد: تحديد موقعه في مصدر أصلي موثوق، مطابقة ما قرره فعلًا بما يُنسب إليه، والتأكد من كونه يدعم الفكرة المستشهد بها له تحديدًا.",
            "أن تفرّق بين فحص سطحي (وجود رقم القرار) وتحقق فعلي (تطابق مضمونه).",
            "أن تدرك أن تفصيلًا مختلقًا قد يختبئ داخل استشهاد يبدو حقيقيًا تمامًا في شكله.",
          ],
          en: [
            "Walk through a full verification sequence for one citation: locating it in a trusted primary source, matching what it actually held to what's claimed, and confirming it genuinely supports the point it's cited for.",
            "Distinguish a surface check (the decision number exists) from actual verification (its content matches).",
            "Recognize that a fabricated detail can hide inside a citation that looks entirely real in form.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.da.05.lesson",
        title: {
          ar: "الفخ: رقم صحيح، مضمون مختلق",
          en: "The Trap: A Real Number, an Invented Substance",
        },
        body: {
          ar: [
            "الفخ الذي وقع فيه زيد: بحثه وجد قرارًا حقيقيًا بالرقم المذكور، فاطمأن وتوقف. تطابق الرقم ليس تطابق المضمون؛ هذا هو الفرق الذي يفصل فحصًا سطحيًا عن تحقق فعلي.",
            "الخطوة الأولى: حدد موقع الاستشهاد في مصدر أصلي موثوق — قاعدة بيانات القرارات الرسمية أو بنك السوابق الموثّق لدى المكتب — لا في مقتطف محرك بحث ولا في إعادة صياغة الأداة نفسها له.",
            "الخطوة الثانية: اقرأ من القرار الفعلي ما يكفي للتأكد أنه يتناول المسألة القانونية نفسها المدّعاة، لا مجرد مجال موضوعي عام مشابه.",
            "الخطوة الثالثة: قارن ما قرره القرار فعلًا بما نُسب إليه؛ ليس إعادة صياغة انزلقت عن المنطق الفعلي للحكم، بل الحكم نفسه حرفيًا.",
            "الخطوة الرابعة: تأكد أن القرار لا يزال سارٍ ولم يُنقض أو يُستبدل، وأنه يُستشهد به لفكرة يدعمها فعلًا، لا فكرة مُمدَّدة أبعد من وقائعه.",
            "في حالة زيد، القرار ٢٨٤٧/٢٠٢١ كان موجودًا فعلًا، لكنه يتناول نزاع شحن بضائع تالفة، بلا أي ذكر لمفاوضات تسوية أو مهلة تقادم؛ الاستشهاد كان مختلقًا بالكامل ومُلصقًا برقم قرار حقيقي.",
          ],
          en: [
            "The trap Zeid fell into: his search found a real decision with the cited number, so he was reassured and stopped there. A matching number is not a matching content; that's exactly what separates a surface check from real verification.",
            "Step one: locate the citation in a trusted primary source — the official decisions database or the firm's verified precedent bank — not a search-engine snippet, and not the tool's own restatement of it.",
            "Step two: read enough of the actual decision to confirm it addresses the same legal question being claimed, not just a similar general subject area.",
            "Step three: compare what the decision actually held to what's attributed to it — not a paraphrase that drifted from the ruling's real reasoning, but the holding itself, verbatim.",
            "Step four: confirm the decision is still good law, hasn't been overturned or superseded, and is being cited for a proposition it actually supports, not one stretched past its facts.",
            "In Zeid's case, decision 2847/2021 was real, but it concerned a damaged-cargo shipping dispute, with no mention of settlement negotiations or limitation periods at all; the citation was entirely fabricated and attached to a real decision number.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.da.05.visual",
        title: {
          ar: "من رقم موجود إلى تحقق كامل",
          en: "From an Existing Number to Full Verification",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "حدد الموقع في مصدر أصلي موثوق", en: "Locate it in a trusted primary source" },
            detail: {
              ar: "لا مقتطف بحث، ولا إعادة صياغة الأداة نفسها.",
              en: "Not a search snippet, not the tool's own restatement.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "تأكد من المسألة القانونية نفسها", en: "Confirm the same legal question" },
            detail: {
              ar: "لا مجرد مجال موضوعي عام مشابه.",
              en: "Not just a similar general subject area.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "طابق الحكم الفعلي بما يُنسب إليه", en: "Match the actual holding to what's claimed" },
            detail: {
              ar: "الحكم حرفيًا، لا إعادة صياغة منزلقة.",
              en: "The holding verbatim, not a drifting paraphrase.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "تأكد من سريانه ومناسبته للفكرة", en: "Confirm it's still good law and fits the point" },
            detail: {
              ar: "لم يُنقض، ويدعم الفكرة المستشهد بها له فعلًا.",
              en: "Not overturned, and genuinely supports the point it's cited for.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "النتيجة", en: "The result" },
            detail: {
              ar: "استشهاد يبدو أصيلًا شكلًا قد يكون مختلقًا مضمونًا؛ التحقق الكامل وحده يكشف الفارق.",
              en: "A citation that looks authentic in form may be fabricated in substance; only full verification reveals the gap.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.da.05.worked",
        strong: {
          label: {
            ar: "زيد يكمل التحقق الكامل من الاستشهاد",
            en: "Zeid completes the full citation check",
          },
          text: {
            ar: [
              "بعد أن وجد رقم القرار في قاعدة بيانات موثوقة، يفتح نصه الكامل ويقرأ وقائعه: نزاع شحن بضائع تالفة، لا ذكر لمفاوضات تسوية أو تقادم على الإطلاق.",
              "يزيل الاستشهاد فورًا، يبحث بنفسه عن سند فعلي للفكرة، ويخبر دانيا فرحات بما اكتشفه قبل أي تقديم للمحكمة.",
            ],
            en: [
              "After finding the decision number in a trusted database, he opens its full text and reads the facts: a damaged-cargo shipping dispute, no mention of settlement negotiations or limitation at all.",
              "He removes the citation immediately, researches an actual authority for the point himself, and tells Dania Farhat what he found before anything is filed with the court.",
            ],
          },
          why: {
            ar: "أكمل التسلسل الكامل بدل التوقف عند وجود الرقم، فاكتشف أن الاستشهاد مختلق بالكامل قبل أن يصل لأي محكمة.",
            en: "He completed the full sequence instead of stopping at the number's existence, catching a fully fabricated citation before it ever reached a court.",
          },
        },
        weak: {
          label: {
            ar: "زميل يتوقف عند وجود الرقم فقط",
            en: "A colleague stops at the number alone",
          },
          text: {
            ar: [
              "«القرار موجود، رقمه صحيح، إذًا الاستشهاد سليم.» يقدّم زميل مسودة تحتوي الاستشهاد نفسه للمحكمة دون فتح نصه الكامل ولو مرة.",
            ],
            en: [
              "\"The decision exists, the number is right, so the citation is fine.\" A colleague files a draft with the same citation without opening its full text even once.",
            ],
          },
          why: {
            ar: "تطابق رقم القرار خدعه ليعتقد أن التحقق اكتمل؛ ادعاء كامل بلا سند وصل فعليًا للمحكمة، متخفيًا وراء رقم قرار حقيقي.",
            en: "The matching decision number tricked him into thinking verification was complete; a fully baseless claim actually reached the court, hidden behind a real decision number.",
          },
        },
      },
      { kind: "activity", id: "s.da.05.a1", activityId: "act.da.05.1", mode: "quick" },
      { kind: "activity", id: "s.da.05.a2", activityId: "act.da.05.2", mode: "guided" },
      { kind: "activity", id: "s.da.05.a3", activityId: "act.da.05.3", mode: "guided" },
      { kind: "activity", id: "s.da.05.a4", activityId: "act.da.05.4", mode: "independent" },
      { kind: "activity", id: "s.da.05.a5", activityId: "act.da.05.5", mode: "independent" },
      { kind: "summary", id: "s.da.05.summary", summaryCardId: "card.da.05" },
      {
        kind: "apply_tomorrow",
        id: "s.da.05.apply",
        task: {
          ar: "غدًا، طبّق التسلسل الكامل على أول استشهاد قضائي تستخدمه من مساعدة الذكاء الاصطناعي، لا فحص وجود رقمه فقط.",
          en: "Tomorrow, run the full sequence on the first case citation you use from AI assistance, not just a check that its number exists.",
        },
        detail: {
          ar: "إن لم تستطع فتح النص الكامل للقرار، لا تستشهد به بعد.",
          en: "If you can't open the decision's full text, don't cite it yet.",
        },
      },
      {
        kind: "next_mission",
        id: "s.da.05.next",
        teaser: {
          ar: "أكملت أول محطتين من طبقة السلامة الرقمية: كيف تستخدم الأداة، وكيف تتحقق منها. الوحدات القادمة تأخذك لما تفعله حين تكتشف خطأً وصل بالفعل، أو حين تُطلب منك استخدام أداة تشعر أنها غير مناسبة.",
          en: "You've completed the first two legs of the digital-safety layer: how to use the tool, and how to verify it. The next units take you through what to do when an error has already gone out, or when you're asked to use a tool that feels wrong.",
        },
      },
    ],
    activities: [
      {
        id: "act.da.05.1",
        kind: "multiple_choice",
        skillId: "skill.ai-output-verification",
        stage: 2,
        context: {
          ar: [
            "بحثت عن رقم القرار الذي أعطتك الأداة، ووجدت قرارًا بهذا الرقم فعلًا في قاعدة بيانات القرارات الرسمية.",
          ],
          en: [
            "You searched the decision number the tool gave you, and found a real decision with that number in the official decisions database.",
          ],
        },
        prompt: {
          ar: "ما الخطوة الصحيحة التالية؟",
          en: "What's the correct next step?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "استخدم الاستشهاد الآن؛ وجود القرار برقمه يكفي دليلًا.",
              en: "Use the citation now; the decision existing with that number is proof enough.",
            },
            rationale: {
              ar: "تطابق الرقم لا يعني تطابق المضمون؛ استشهاد كامل قد يكون مختلقًا رغم رقم حقيقي.",
              en: "A matching number doesn't mean matching content; a citation can be fully fabricated despite a real number.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "افتح النص الكامل للقرار واقرأ وقائعه وحكمه، وقارنهما بما تدّعيه المسودة.",
              en: "Open the decision's full text, read its facts and holding, and compare them to what the draft claims.",
            },
            correct: true,
            rationale: {
              ar: "هذا وحده يكشف إن كان القرار يتناول المسألة نفسها ويقرر فعلًا ما نُسب إليه.",
              en: "Only this reveals whether the decision addresses the same issue and actually holds what's attributed to it.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "اسأل الأداة أن تلخّص القرار لك بدل قراءته بنفسك.",
              en: "Ask the tool to summarize the decision for you instead of reading it yourself.",
            },
            rationale: {
              ar: "طلب ملخص من الأداة نفسها التي أنتجت الاستشهاد لا يعد تحققًا مستقلًا.",
              en: "Asking the same tool that produced the citation for a summary isn't independent verification.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "اكتفِ بذكر رقم القرار في الهامش دون شرح مضمونه.",
              en: "Just cite the decision number in a footnote without explaining its content.",
            },
            rationale: {
              ar: "ذكر الرقم وحده لا يحل مشكلة عدم التحقق من المضمون؛ يخفيها فقط.",
              en: "Citing the number alone doesn't solve the unverified-content problem; it just hides it.",
            },
          },
        ],
      },
      {
        id: "act.da.05.2",
        kind: "ordering",
        skillId: "skill.ai-output-verification",
        stage: 2,
        prompt: {
          ar: "رتّب خطوات التحقق الكامل من استشهاد قضائي واحد.",
          en: "Order the steps of fully verifying a single case citation.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the order number from a dropdown beside each step instead of dragging.",
        },
        hint: {
          ar: "الموقع في مصدر أصلي يسبق مقارنة المضمون، ومقارنة المضمون تسبق التأكد من السريان.",
          en: "Locating it in a primary source precedes comparing content, which precedes confirming it's still good law.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "تحديد موقع الاستشهاد في مصدر أصلي موثوق، لا في مقتطف بحث أو إعادة صياغة الأداة.",
              en: "Locating the citation in a trusted primary source, not a search snippet or the tool's restatement.",
            },
            rationale: {
              ar: "الخطوة الأولى؛ لا تحقق ممكن دون النص الأصلي نفسه.",
              en: "The first step; no verification is possible without the actual original text.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "التأكد أن القرار يتناول المسألة القانونية نفسها، لا مجالًا موضوعيًا عامًا مشابهًا فقط.",
              en: "Confirming the decision addresses the same legal question, not just a similarly-shaped general area.",
            },
            rationale: {
              ar: "بعد إيجاد النص مباشرة؛ يمنع الاكتفاء بتشابه سطحي في الموضوع.",
              en: "Right after finding the text; prevents settling for a superficial subject-matter resemblance.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "مقارنة الحكم الفعلي حرفيًا بما نُسب إليه في المسودة.",
              en: "Comparing the actual holding, verbatim, to what's attributed to it in the draft.",
            },
            rationale: {
              ar: "بعد تأكيد المسألة القانونية؛ يكشف أي انزلاق في إعادة الصياغة.",
              en: "After confirming the legal question; reveals any drift in the paraphrase.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "التأكد من أن القرار لا يزال ساريًا ويدعم فعليًا الفكرة المستشهد بها له.",
              en: "Confirming the decision is still good law and genuinely supports the point it's cited for.",
            },
            rationale: {
              ar: "الخطوة الأخيرة؛ تغلق التحقق قبل استخدام الاستشهاد فعليًا.",
              en: "The last step; closes out verification before the citation is actually used.",
            },
          },
        ],
      },
      {
        id: "act.da.05.3",
        kind: "multiple_select",
        skillId: "skill.ai-output-verification",
        stage: 2,
        context: {
          ar: [
            "تراجع مع متدرب ما يُعد تحققًا فعليًا من استشهاد قضائي، وما لا يُعد كذلك.",
          ],
          en: [
            "You're reviewing with a trainee what actually counts as verifying a case citation, and what doesn't.",
          ],
        },
        prompt: {
          ar: "اختر كل إجراء يُعد تحققًا فعليًا حقيقيًا من استشهاد قضائي.",
          en: "Select every action that counts as genuine, real verification of a case citation.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "فتح النص الكامل للقرار من قاعدة بيانات رسمية وقراءة وقائعه وحكمه.",
              en: "Opening the decision's full text from an official database and reading its facts and holding.",
            },
            correct: true,
            rationale: {
              ar: "هذا هو التحقق الفعلي؛ يكشف إن كان المضمون يطابق ما يُنسب إليه.",
              en: "This is genuine verification; it reveals whether the content matches what's attributed to it.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "التأكد من أن الحكم لم يُنقض أو يُستبدل بقرار لاحق.",
              en: "Confirming the ruling hasn't been overturned or superseded by a later decision.",
            },
            correct: true,
            rationale: {
              ar: "استشهاد صحيح المضمون لكن غير سارٍ لم يعد سندًا يمكن الاعتماد عليه.",
              en: "A citation with correct content that's no longer good law isn't authority you can rely on.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "التأكد من أن رقم القرار المذكور موجود فعلًا في أي قاعدة بيانات.",
              en: "Confirming the stated decision number exists in some database.",
            },
            rationale: {
              ar: "وجود الرقم وحده هو بالضبط الفخ الذي وقع فيه زيد؛ لا يثبت شيئًا عن المضمون.",
              en: "The number existing alone is exactly the trap Zeid fell into; it proves nothing about the content.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "التأكد من أن الحكم يدعم فعليًا الفكرة المستشهد بها له، لا فكرة مُمدَّدة أبعد من وقائعه.",
              en: "Confirming the holding genuinely supports the point it's cited for, not one stretched past its facts.",
            },
            correct: true,
            rationale: {
              ar: "استشهاد صحيح المضمون قد يُستخدم بشكل خاطئ لفكرة لا يدعمها فعليًا.",
              en: "A citation with correct content may still be misused for a point it doesn't actually support.",
            },
          },
        ],
      },
      {
        id: "act.da.05.4",
        kind: "short_written",
        skillId: "skill.ai-output-verification",
        secondarySkillIds: ["skill.disclosing-ai-errors"],
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.digital-ai-written.v1",
        weight: 2,
        minChars: 180,
        context: {
          ar: [
            "أعطتك الأداة استشهادًا: «قرار محكمة التمييز رقم ٥١٩٢/٢٠٢٠، قضى بأن الإخطار الشفهي يكفي لإنهاء عقد العمل غير محدد المدة.» لم تتحقق منه بعد.",
          ],
          en: [
            "The tool gave you a citation: \"Cassation Court decision no. 5192/2020, held that verbal notice suffices to terminate an open-ended employment contract.\" You haven't verified it yet.",
          ],
        },
        prompt: {
          ar: "اكتب (٨٠-١٢٠ كلمة) بالضبط ما ستفعله خطوة بخطوة للتحقق الكامل من هذا الاستشهاد قبل استخدامه.",
          en: "Write (80-120 words) exactly what you'd do, step by step, to fully verify this citation before using it.",
        },
        modelAnswer: {
          ar: [
            "«أبحث عن القرار رقم ٥١٩٢/٢٠٢٠ في قاعدة بيانات القرارات الرسمية أو بنك السوابق الموثّق لدى المكتب، لا في محرك بحث عام.»",
            "«أفتح نصه الكامل وأقرأ وقائعه للتأكد أنه يتناول فعلًا مسألة الإخطار الشفهي وإنهاء عقد عمل غير محدد المدة، لا مسألة عمل مشابهة عمومًا فقط.»",
            "«أقارن حكمه الفعلي حرفيًا بما نُسب إليه، وأتأكد أنه لم يُنقض، وأنه يدعم الفكرة التي أريد الاستشهاد بها له تحديدًا، لا فكرة أوسع من وقائعه.»",
          ],
          en: [
            "\"I'd search for decision no. 5192/2020 in the official decisions database or the firm's verified precedent bank, not a general search engine.\"",
            "\"I'd open its full text and read the facts to confirm it actually addresses verbal notice and terminating an open-ended employment contract, not just a generally similar employment issue.\"",
            "\"I'd compare its actual holding, verbatim, to what's attributed to it, confirm it hasn't been overturned, and confirm it supports specifically the point I want to cite it for, not a broader one than its facts allow.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«أبحث عن الرقم، وإن وجدته أستخدم الاستشهاد مباشرة لأن الرقم صحيح.»"],
            en: ["\"I'd search for the number, and if I find it I'd use the citation right away since the number's correct.\""],
          },
          whatIsWrong: {
            ar: "يتوقف عند تطابق الرقم بالضبط كما فعل زيد في المثال؛ لا يذكر فتح النص الكامل، ولا مقارنة الحكم الفعلي، ولا التأكد من سريانه.",
            en: "It stops at the number matching, exactly as Zeid did in the worked example; it mentions no opening of the full text, no comparing the actual holding, and no confirming it's still good law.",
          },
        },
      },
      {
        id: "act.da.05.5",
        kind: "reflection",
        skillId: "skill.ai-output-verification",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع استشهادًا استخدمته يومًا دون فتح نصه الكامل. ماذا لو كان مضمونه لا يقول ما ظننته؟",
          en: "Recall a citation you once used without opening its full text. What if its content didn't say what you assumed?",
        },
        followUp: {
          ar: "ما التسلسل الذي ستلتزم به من اليوم لأي استشهاد جديد، مهما بدا رقمه مألوفًا أو موثوقًا؟",
          en: "What sequence will you commit to from today for any new citation, however familiar or trustworthy its number looks?",
        },
      },
    ],
    summaryCard: {
      id: "card.da.05",
      title: {
        ar: "رقم صحيح، مضمون مختلق",
        en: "A Real Number, an Invented Substance",
      },
      whatYouLearned: {
        ar: [
          "استشهادات قضائية مختلقة كليًا خطر حقيقي وموثق لأدوات الذكاء الاصطناعي، حتى حين يبدو شكلها أصيلًا تمامًا.",
          "تطابق رقم القرار ليس تطابق المضمون؛ التحقق الفعلي يحتاج فتح النص الكامل.",
          "تسلسل من أربع خطوات يكشف الفارق: الموقع في مصدر أصلي، تطابق المسألة، تطابق الحكم، والتأكد من السريان والملاءمة.",
        ],
        en: [
          "Fully fabricated case citations are a real, documented risk of AI tools, even when they look entirely authentic in form.",
          "A matching decision number is not matching content; real verification requires opening the full text.",
          "A four-step sequence reveals the gap: locating a primary source, matching the issue, matching the holding, and confirming it's still good law and fits the point.",
        ],
      },
      framework: {
        name: {
          ar: "التحقق الكامل من استشهاد واحد",
          en: "Fully Verifying One Citation",
        },
        steps: [
          { ar: "حدد موقعه في مصدر أصلي موثوق.", en: "Locate it in a trusted primary source." },
          { ar: "تأكد أنه يتناول المسألة القانونية نفسها.", en: "Confirm it addresses the same legal question." },
          { ar: "قارن حكمه الفعلي حرفيًا بما نُسب إليه.", en: "Compare its actual holding, verbatim, to what's claimed." },
          { ar: "تأكد من سريانه ودعمه الفعلي للفكرة.", en: "Confirm it's still good law and genuinely supports the point." },
        ],
      },
      rememberThis: {
        ar: "رقم قرار حقيقي لا يثبت شيئًا عن مضمونه؛ فقط فتح النص الكامل يكشف إن كان الاستشهاد مختلقًا.",
        en: "A real decision number proves nothing about its content; only opening the full text reveals whether a citation is fabricated.",
      },
      useItTomorrow: {
        ar: "غدًا، طبّق التسلسل الكامل الأربعة على أول استشهاد قضائي تستخدمه من مساعدة الذكاء الاصطناعي.",
        en: "Tomorrow, run the full four-step sequence on the first case citation you use from AI assistance.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.legal-analyst", "src.maccarthy-cross-exam"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
