/**
 * Legal English for Client Communication — units 1 to 5.
 *
 * Chapters: `ch.le.meeting-people` (units 1–3) and `ch.le.getting-the-facts`
 * (units 4–5).
 *
 * Target language practised: English. Instruction, rationales and hints are
 * bilingual, because the learner reads the explanation in Arabic while
 * producing the English. Scenarios and rubrics are referenced by id and
 * defined elsewhere.
 */

import type { UnitDef } from "../types";

export const LE_UNITS_01_05: UnitDef[] = [
  // =========================================================================
  // unit.le.01 — Introducing Yourself Professionally
  // =========================================================================
  {
    id: "unit.le.01",
    chapterId: "ch.le.meeting-people",
    order: 1,
    title: {
      ar: "التعريف بنفسك مهنياً بالإنجليزية",
      en: "Introducing Yourself Professionally",
    },
    subtitle: {
      ar: "جملتان تقولان من أنت وماذا تفعل — بلا سيرة ذاتية وبلا تصغير لشأنك",
      en: "Two sentences that say who you are and what you do — no CV, no shrinking",
    },
    primarySkillId: "skill.le-professional-introduction",
    skillIds: ["skill.le-professional-introduction", "skill.le-welcoming-client"],
    stage: 1,
    estimatedMinutes: 9,
    targetLevel: 2,
    sourceIds: ["src.client-centered-law-firm", "src.selling-the-invisible", "src.rainmaker"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
    steps: [
      {
        kind: "hook",
        id: "st.le.01.hook",
        text: {
          ar: "بالعربية تصل إلى نفسك بعد المجاملات. بالإنجليزية المهنية اسمك ودورك في أول عشر ثوانٍ، وكل ما تقوله بعدها يُقاس عليهما.",
          en: "In Arabic you arrive at yourself after the courtesies. In professional English your name and your role come in the first ten seconds, and everything after is measured against them.",
        },
      },
      {
        kind: "why_it_matters",
        id: "st.le.01.why",
        text: {
          ar: "الموكّل الأجنبي لا يعرف مكتبك ولا نظامك القضائي ولا شهاداتك. تعريفك هو المعلومة الوحيدة التي يزن بها كلامك في الدقائق العشر التالية.",
          en: "A foreign client does not know your firm, your legal system or your qualifications. Your introduction is the only information they have to weigh everything you say in the next ten minutes.",
        },
      },
      {
        kind: "learning_goal",
        id: "st.le.01.goals",
        goals: {
          ar: [
            "تُعرّف بنفسك بالإنجليزية في جملتين: الاسم، الدور والمكتب، سبب وجودك في هذه المكالمة.",
            "تستعمل حروف الجرّ الصحيحة في التعريف المهني: a lawyer at، qualified in، advise on.",
            "تحذف من تعريفك ما يُضعفه: الاعتذار عن لغتك، وسرد خدمات المكتب، وعبارات التصغير المترجمة عن العربية.",
          ],
          en: [
            "Introduce yourself in English in two sentences: name, role and firm, and why you are on this call.",
            "Use the right prepositions in a professional introduction: “a lawyer at”, “qualified in”, “advise on”.",
            "Cut what weakens the introduction: apologising for your English, listing the firm's services, and self-diminishing formulas translated from Arabic.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "st.le.01.lesson",
        title: {
          ar: "أربعة عناصر تُقال في جملتين",
          en: "Four elements, delivered in two sentences",
        },
        body: {
          ar: [
            "١. الاسم ببطء، ومعه التهجئة إن كان غريباً على أذن المستمع: «My name is Ziad Nasr — Z-I-A-D.» تهجئة اسمك ليست تواضعاً، بل توفير لدقيقتين من سوء الفهم.",
            "٢. الدور والمكتب مع الحرف الصحيح: «I'm a lawyer at Nasr & Partners in Beirut.» ليست in the office ولا from the office. ثم مجال العمل: «I advise on commercial disputes» — advise on لا advise about.",
            "٣. الصلة بهذه المكالمة تحديداً: «I've been asked to look at your distributor file.» الموكّل لا يريد سيرتك، يريد أن يعرف لماذا يتكلّم معك أنت.",
            "٤. ما ستفعله في الوقت المتاح: «I'd like to spend ten minutes on the facts, then tell you what I need from you.» جملة واحدة تحوّلك من صوت مجهول إلى شخص يدير المكالمة.",
            "تحذير: «Sorry, my English is not very good» تنقل الشكّ إلى كل ما بعدها. لا يوجد ما يقابلها في مكالمة يجريها محامٍ إنكليزي بلغته الثانية. إن احتجت وقتاً قل: «Let me put that precisely.»",
          ],
          en: [
            "1. Your name, slowly, spelled out if it is new to the listener's ear: “My name is Ziad Nasr — Z-I-A-D.” Spelling your name is not modesty; it saves two minutes of confusion later.",
            "2. Role and firm with the right preposition: “I'm a lawyer at Nasr & Partners in Beirut.” Not “in the office”, not “from the office”. Then the field: “I advise on commercial disputes” — advise on, never advise about.",
            "3. Why you specifically are on this call: “I've been asked to look at your distributor file.” The client does not want your biography; they want to know why they are speaking to you.",
            "4. What you will do with the time: “I'd like to spend ten minutes on the facts, then tell you what I need from you.” One sentence turns you from an unknown voice into the person running the call.",
            "Warning: “Sorry, my English is not very good” pushes doubt onto everything that follows. Buy time instead: “Let me put that precisely.”",
          ],
        },
      },
      {
        kind: "visual",
        id: "st.le.01.visual",
        title: {
          ar: "تعريف من أربع درجات، من الاسم إلى الخطوة التالية",
          en: "A four-beat introduction, from your name to the next move",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "الاسم + التهجئة", en: "Name + spelling" },
            detail: {
              ar: "«My name is Ziad Nasr — Z-I-A-D.» ببطء، ومرة واحدة تكفي.",
              en: "“My name is Ziad Nasr — Z-I-A-D.” Slowly, and once is enough.",
            },
            tone: "positive",
          },
          {
            label: { ar: "الدور + المكتب + المجال", en: "Role + firm + field" },
            detail: {
              ar: "«I'm a lawyer at Nasr & Partners in Beirut, and I advise on commercial disputes.»",
              en: "“I'm a lawyer at Nasr & Partners in Beirut, and I advise on commercial disputes.”",
            },
            tone: "positive",
          },
          {
            label: { ar: "سبب وجودك في هذه المكالمة", en: "Why you are on this call" },
            detail: {
              ar: "«I've been asked to look at your distributor file.» جملة واحدة، لا تاريخ المكتب.",
              en: "“I've been asked to look at your distributor file.” One sentence, not the firm's history.",
            },
            tone: "positive",
          },
          {
            label: { ar: "خطة الدقائق العشر", en: "The plan for the ten minutes" },
            detail: {
              ar: "«I'd like to spend ten minutes on the facts, then tell you what I need from you.»",
              en: "“I'd like to spend ten minutes on the facts, then tell you what I need from you.”",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "st.le.01.worked",
        strong: {
          label: { ar: "تعريف يُبنى عليه", en: "An introduction you can build on" },
          text: {
            ar: [
              "«Good morning, Mr Menon. My name is Ziad Nasr — Z-I-A-D.»",
              "«I'm a lawyer at Nasr & Partners in Beirut, and I advise on commercial disputes.»",
              "«Your accountant asked me to look at the supply agreement before you sign it.»",
              "«I'd like to spend ten minutes on the facts, then tell you what I need from you. Is that all right?»",
            ],
            en: [
              "“Good morning, Mr Menon. My name is Ziad Nasr — Z-I-A-D.”",
              "“I'm a lawyer at Nasr & Partners in Beirut, and I advise on commercial disputes.”",
              "“Your accountant asked me to look at the supply agreement before you sign it.”",
              "“I'd like to spend ten minutes on the facts, then tell you what I need from you. Is that all right?”",
            ],
          },
          why: {
            ar: "أربع جمل قصيرة تجيب على أسئلة المستمع الأربعة: من أنت، ماذا تعمل، لماذا أنت، وماذا سيحدث الآن. ولا واحدة منها تحتاج إلى إعادة.",
            en: "Four short sentences answer the listener's four questions: who you are, what you do, why you, and what happens now. None of them needs repeating.",
          },
        },
        weak: {
          label: { ar: "ترجمة حرفية عن العربية", en: "A word-for-word translation from Arabic" },
          text: {
            ar: [
              "«Peace be upon you, dear client, and welcome to you. I am the lawyer Ziad, and I am at your complete disposal for whatever you need at any time.»",
              "«Sorry for my English, it is not so good.»",
              "«Our office is one of the biggest offices in the country, we work in all fields: commercial, criminal, family, real estate, arbitration, and we have big experience since twenty years.»",
            ],
            en: [
              "“Peace be upon you, dear client, and welcome to you. I am the lawyer Ziad, and I am at your complete disposal for whatever you need at any time.”",
              "“Sorry for my English, it is not so good.”",
              "“Our office is one of the biggest offices in the country, we work in all fields: commercial, criminal, family, real estate, arbitration, and we have big experience since twenty years.”",
            ],
          },
          why: {
            ar: "الكرم العربي هنا يُسمع أمراً آخر تماماً. «I am at your complete disposal» تُقرأ عرضاً تجارياً لا تهذيباً. الاعتذار عن اللغة يجعل المستمع يشكّ في كل رقم ستقوله. وسرد المجالات كلّها يعني عملياً: لا تخصّص. وأخيراً: منذ عشرين سنة = «for twenty years» لا «since twenty years».",
            en: "Arabic generosity lands as something else entirely. “I am at your complete disposal” reads as a sales offer, not courtesy. The apology for your English makes the listener doubt every figure you give afterwards. A list of every field reads as: no specialism. And “since twenty years” is “for twenty years”.",
          },
        },
      },
      { kind: "activity", id: "st.le.01.a1", activityId: "act.le.01.1", mode: "quick" },
      { kind: "activity", id: "st.le.01.a2", activityId: "act.le.01.2", mode: "quick" },
      { kind: "activity", id: "st.le.01.a3", activityId: "act.le.01.3", mode: "guided" },
      { kind: "activity", id: "st.le.01.a4", activityId: "act.le.01.4", mode: "guided" },
      { kind: "activity", id: "st.le.01.a5", activityId: "act.le.01.5", mode: "independent" },
      { kind: "activity", id: "st.le.01.a6", activityId: "act.le.01.6", mode: "independent" },
      { kind: "summary", id: "st.le.01.summary", summaryCardId: "card.le.01" },
      {
        kind: "apply_tomorrow",
        id: "st.le.01.apply",
        task: {
          ar: "اكتب تعريفك الإنجليزي في جملتين واحفظه، ثم قله بصوت عالٍ ثلاث مرات قبل أول مكالمة غداً.",
          en: "Write your two-sentence English introduction, learn it, and say it aloud three times before your first call tomorrow.",
        },
        detail: {
          ar: "قِس نفسك بمعيار واحد: هل احتاج المستمع إلى سؤالك «sorry, what was your name?». إن حدث، أبطئ الاسم ولا تغيّر شيئاً آخر.",
          en: "Measure it by one test: did the listener have to ask “sorry, what was your name?” If so, slow the name down and change nothing else.",
        },
      },
      {
        kind: "next_mission",
        id: "st.le.01.next",
        teaser: {
          ar: "الوحدة القادمة: كيف تفتح المكالمة بعد التعريف — من الترحيب إلى جدول الأعمال في تسعين ثانية.",
          en: "Next: what comes after the introduction — from welcome to agenda in ninety seconds.",
        },
      },
    ],
    activities: [
      {
        id: "act.le.01.1",
        kind: "multiple_choice",
        skillId: "skill.le-professional-introduction",
        stage: 1,
        weight: 1,
        prompt: {
          ar: "أول مكالمة بالإنجليزية مع مؤسِّس هندي يفكّر في فتح فرع إقليمي. أي افتتاح تختار؟",
          en: "A first English call with an Indian founder considering a regional branch. Which opening do you choose?",
        },
        context: {
          ar: [
            "الموكّل المحتمل: راجيف مينون، شريك مؤسِّس في شركة برمجيات مقرّها بنغالور.",
            "أحالك إليه محاسب يتعامل مع المكتب. المكالمة عشر دقائق.",
          ],
          en: [
            "Prospective client: Rajiv Menon, co-founder of a software company based in Bengaluru.",
            "Referred by an accountant the firm works with. The call is ten minutes.",
          ],
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«Good morning, Mr Menon. My name is Ziad Nasr — Z-I-A-D. I'm a lawyer at Nasr & Partners in Beirut and I advise on company formation. Your accountant asked me to speak with you about the regional branch.»",
              en: "“Good morning, Mr Menon. My name is Ziad Nasr — Z-I-A-D. I'm a lawyer at Nasr & Partners in Beirut and I advise on company formation. Your accountant asked me to speak with you about the regional branch.”",
            },
            correct: true,
            rationale: {
              ar: "الاسم مهجّى، والدور محدّد، وسبب المكالمة مذكور. المستمع يعرف بعد اثنتي عشرة ثانية مع من يتكلّم ولماذا، ولم يُطلب منه أن يصدّق شيئاً بعد.",
              en: "The name is spelled, the role is specific, and the reason for the call is stated. Twelve seconds in, the listener knows who he is talking to and why, and has not been asked to believe anything yet.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«Hello sir, thank you very much for your precious time. I hope I am not disturbing you. Sorry if my English has some mistakes.»",
              en: "“Hello sir, thank you very much for your precious time. I hope I am not disturbing you. Sorry if my English has some mistakes.”",
            },
            rationale: {
              ar: "ثلاث جمل ولا معلومة واحدة. «sir» بلا اسم تُسمع بعيدة، و«precious time» ترجمة حرفية لمجاملة عربية، والاعتذار المسبق يدعو المستمع إلى تصيّد الأخطاء بدل الإصغاء للمضمون.",
              en: "Three sentences and not one piece of information. “Sir” with no name sounds distant, “precious time” is a literal rendering of an Arabic courtesy, and the pre-emptive apology invites the listener to hunt for errors instead of listening to the substance.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«Good morning. Our firm was established in 1996 and we practise in commercial, criminal, labour, family and real estate law, with offices in three cities and more than forty lawyers.»",
              en: "“Good morning. Our firm was established in 1996 and we practise in commercial, criminal, labour, family and real estate law, with offices in three cities and more than forty lawyers.”",
            },
            rationale: {
              ar: "بروشور لا تعريف. المستمع ما زال يجهل اسمك ودورك وسبب المكالمة، والقائمة الطويلة تُقرأ في الأسواق الأجنبية غياباً للتخصّص لا اتّساعاً للخبرة.",
              en: "A brochure, not an introduction. The listener still does not know your name, your role or why you called, and in foreign markets a long list of fields reads as an absence of specialism rather than a breadth of experience.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«Hi Rajiv, so tell me about the problem — what exactly happened and how much money are we talking about?»",
              en: "“Hi Rajiv, so tell me about the problem — what exactly happened and how much money are we talking about?”",
            },
            rationale: {
              ar: "الاسم الأول من دون إذن مع موكّل لم تلتقه، وسؤال عن المال في الثانية الخامسة. حتى الموكّل المباشر يريد أن يعرف مع من يتكلّم قبل أن يفتح دفاتره.",
              en: "First name unearned with a client you have never met, and a money question five seconds in. Even a direct client wants to know who he is speaking to before he opens his books.",
            },
          },
        ],
      },
      {
        id: "act.le.01.2",
        kind: "listening",
        skillId: "skill.le-professional-introduction",
        secondarySkillIds: ["skill.le-background-questions"],
        stage: 1,
        weight: 1,
        prompt: {
          ar: "استمع إلى تعريف الطرف الآخر بنفسها. ما المعلومة العملية الأهمّ التي أعطتك إياها؟",
          en: "Listen to how the other side introduces herself. What is the most operationally important thing she has told you?",
        },
        script: {
          ar: "Good afternoon. I'm Marta Lindqvist, in-house counsel at Nordkap Marine in Gothenburg. I should say straight away that I'm not the decision-maker on this file — our COO is — but I run the legal side and I'll be your day-to-day contact. Before we start, could you tell me who else from your side will be working on this?",
          en: "Good afternoon. I'm Marta Lindqvist, in-house counsel at Nordkap Marine in Gothenburg. I should say straight away that I'm not the decision-maker on this file — our COO is — but I run the legal side and I'll be your day-to-day contact. Before we start, could you tell me who else from your side will be working on this?",
        },
        transcript: {
          ar: "النصّ: “Good afternoon. I'm Marta Lindqvist, in-house counsel at Nordkap Marine in Gothenburg. I should say straight away that I'm not the decision-maker on this file — our COO is — but I run the legal side and I'll be your day-to-day contact. Before we start, could you tell me who else from your side will be working on this?” — الترجمة: «مساء الخير. أنا مارتا ليندكفيست، مستشارة قانونية داخلية في نوردكاب مارين في غوتنبرغ. أقولها من البداية: لست صاحبة القرار في هذا الملف — الرئيس التنفيذي للعمليات هو صاحب القرار — لكنّني أدير الجانب القانوني وسأكون جهة الاتصال اليومية معكم. قبل أن نبدأ، هل تخبرني مَن غيرك سيعمل على هذا الملف من جهتكم؟»",
          en: "“Good afternoon. I'm Marta Lindqvist, in-house counsel at Nordkap Marine in Gothenburg. I should say straight away that I'm not the decision-maker on this file — our COO is — but I run the legal side and I'll be your day-to-day contact. Before we start, could you tell me who else from your side will be working on this?”",
        },
        accessibleAlternative: {
          ar: "يمكنك قراءة النصّ المكتوب كاملاً بدل الاستماع؛ السؤال يُجاب من النصّ نفسه.",
          en: "You can read the full transcript instead of listening; the question is answerable from the text alone.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "أنها ستكون جهة الاتصال اليومية، لكن الموافقة على أي قرار تحتاج شخصاً آخر لم تلتقه بعد.",
              en: "She will be the day-to-day contact, but sign-off on any decision sits with someone you have not met.",
            },
            correct: true,
            rationale: {
              ar: "هذه هي المعلومة التي تغيّر عملك: كل ما تكتبه يجب أن يكون قابلاً لأن تمرّره هي إلى مدير العمليات بلا ترجمة إضافية. اسألها الآن عن اسمه وكيف يفضّل أن تصله المعلومة.",
              en: "This is the fact that changes how you work: everything you write must be something she can pass to the COO without translating it again. Ask now for his name and how he prefers to receive information.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "أنها مستشارة قانونية داخلية، أي أنك تتحدّث إلى قانونية ويمكنك استعمال المصطلحات بحرّية.",
              en: "She is in-house counsel, so you are talking to a lawyer and can use terminology freely.",
            },
            rationale: {
              ar: "صحيح جزئياً وخطر عملياً. كونها قانونية لا يعني أنها تعرف نظامك القضائي، والأهمّ أن رسائلك ستُقرأ من مدير عمليات غير قانوني. اكتب لمن سيقرأ لا لمن يستلم.",
              en: "Half true and operationally risky. Being a lawyer does not mean she knows your legal system, and more importantly your messages will be read by a non-lawyer COO. Write for who will read, not who receives.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "أن الشركة مقرّها غوتنبرغ، أي أن القانون السويدي هو الواجب التطبيق.",
              en: "The company is based in Gothenburg, so Swedish law governs.",
            },
            rationale: {
              ar: "استنتاج من موقع جغرافي لا من عقد. القانون الواجب التطبيق يُقرأ في بند النزاعات، لا يُستخلص من عنوان المقرّ. هذا بالضبط نوع الفرضية التي تُبنى في مكالمة أولى ثم تُكلّف شهراً.",
              en: "An inference from a postal address rather than a contract. Governing law is read in the disputes clause, not deduced from a head office. This is exactly the kind of assumption that gets built on a first call and costs a month.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "أنها تريد معرفة فريقك، وهو سؤال بروتوكولي مهذّب لا أثر عملي له.",
              en: "She wants to know your team — a polite protocol question with no practical consequence.",
            },
            rationale: {
              ar: "ليس بروتوكولاً. من يسأل عن الفريق في الدقيقة الأولى يخطّط لكيفية تمرير الملف داخل شركته. أجب بأسماء وأدوار محدّدة، لا بـ«our team will handle it».",
              en: "Not protocol. Someone who asks about the team in the first minute is planning how to move the file inside her own company. Answer with named people and roles, not “our team will handle it”.",
            },
          },
        ],
      },
      {
        id: "act.le.01.3",
        kind: "fill_blank",
        skillId: "skill.le-professional-introduction",
        stage: 1,
        weight: 1,
        prompt: {
          ar: "أكمل التعريف بحروف الجرّ الصحيحة. البدائل الخاطئة هنا هي الأخطاء التي تُنقل حرفياً من العربية.",
          en: "Complete the introduction with the right prepositions. The wrong options here are the ones carried over from Arabic.",
        },
        hint: {
          ar: "فكّر بالمتلازمة كوحدة واحدة تُحفظ كما تُحفظ الكلمة: a lawyer at · advise on · qualified in.",
          en: "Learn the collocation as one unit, the way you learn a word: a lawyer at · advise on · qualified in.",
        },
        template: {
          ar: "«I'm a lawyer {{0}} Haddad & Sarrouh in Amman. I mainly advise {{1}} construction disputes, and I'm qualified {{2}} Jordan.» — أنا محامٍ في مكتب حدّاد وسرّوح في عمّان، أُقدّم المشورة في نزاعات الإنشاءات، ومُجاز للمرافعة في الأردن.",
          en: "“I'm a lawyer {{0}} Haddad & Sarrouh in Amman. I mainly advise {{1}} construction disputes, and I'm qualified {{2}} Jordan.”",
        },
        blanks: [
          {
            id: "b0",
            options: [
              { ar: "in (في)", en: "in" },
              { ar: "at (لدى/في)", en: "at" },
              { ar: "from (من)", en: "from" },
            ],
            answerIndex: 1,
            rationale: {
              ar: "«a lawyer at [اسم المكتب]» هي المتلازمة المستعملة. «in» تصلح للمدينة أو للمجال («a lawyer in Amman»، «a lawyer in construction») لا لاسم المكتب، و«from the office» تُسمع وكأنك مرسَل من جهة لا تعمل فيها.",
              en: "“a lawyer at [firm name]” is the standard collocation. “in” works for a city or a field (“a lawyer in Amman”, “a lawyer in construction”) but not for a firm's name, and “from the office” sounds as if you were sent by a place you do not belong to.",
            },
          },
          {
            id: "b1",
            options: [
              { ar: "about (عن)", en: "about" },
              { ar: "for (لأجل)", en: "for" },
              { ar: "on (في/بشأن)", en: "on" },
            ],
            answerIndex: 2,
            rationale: {
              ar: "«advise on» متلازمة مهنية ثابتة. «advise about» ترجمة حرفية لـ«أنصح عن» وتُسمع مدرسية، و«advise for» تعني عملياً أنك تنصح لصالح جهة، وهو معنى مختلف تماماً.",
              en: "“advise on” is the fixed professional collocation. “advise about” is a literal rendering that sounds schoolroom, and “advise for” suggests you advise in someone's favour — a different meaning altogether.",
            },
          },
          {
            id: "b2",
            options: [
              { ar: "in (في)", en: "in" },
              { ar: "at (لدى)", en: "at" },
              { ar: "to (إلى)", en: "to" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "«qualified in [الولاية القضائية]». تُقال «admitted to the bar» مع النقابة، لكن مع الدولة أو الولاية القضائية يكون الحرف in دائماً. هذه الجملة هي التي تحمي الموكّل من افتراض أنك تُفتي في قانون لا تُجاز فيه.",
              en: "“qualified in [jurisdiction]”. You are “admitted to the bar”, but with a country or jurisdiction the preposition is always “in”. This is the sentence that stops a client assuming you can opine on a law you are not qualified in.",
            },
          },
        ],
      },
      {
        id: "act.le.01.4",
        kind: "pronunciation",
        skillId: "skill.le-professional-introduction",
        stage: 1,
        weight: 1,
        grading: "self_report",
        target: "jurisdiction",
        ipa: "/ˌdʒʊə.rɪsˈdɪk.ʃən/",
        prompt: {
          ar: "قل الكلمة ثم الجملة. المعيار الوحيد أن يفهمها المستمع من المرّة الأولى: أربعة مقاطع والنبر على المقطع الثالث DIC. لكنتك لا تُقيَّم إطلاقاً.",
          en: "Say the word, then the sentence. The only measure is being understood first time: four syllables, stress on the third — DIC. Your accent is not assessed at all.",
        },
        meaning: {
          ar: "«الولاية القضائية»: الرقعة القانونية التي تختصّ محاكمها ويسري قانونها. كلمة لا يمرّ تعريف مهني بالإنكليزية من دونها.",
          en: "The legal territory whose courts have authority and whose law applies. No professional English introduction gets far without it.",
        },
        exampleSentence: {
          ar: "«I'm qualified in this jurisdiction, so I can advise you on local procedure but not on English law.» — أنا مُجاز في هذه الولاية القضائية، فأستطيع أن أنصحك في الإجراءات المحلّية لا في القانون الإنكليزي.",
          en: "“I'm qualified in this jurisdiction, so I can advise you on local procedure but not on English law.”",
        },
        hint: {
          ar: "الزلّة الشائعة عند الناطقين بالعربية نقل النبر إلى المقطع الأول («JUR-isdiction») فتُسمع كلمة أخرى. قطّعها: ju-ris-DIC-tion.",
          en: "The common slip for Arabic speakers is pulling the stress onto the first syllable (“JUR-isdiction”), which lands as a different word. Beat it out: ju-ris-DIC-tion.",
        },
        accessibleAlternative: {
          ar: "يمكنك تقطيع الكلمة كتابةً وتحديد موضع النبر بدل النطق، ثم تقييم وضوح التقطيع بنفسك.",
          en: "You can mark the syllables and the stress in writing instead of speaking, then self-assess the beats.",
        },
      },
      {
        id: "act.le.01.5",
        kind: "short_written",
        skillId: "skill.le-professional-introduction",
        secondarySkillIds: ["skill.le-welcoming-client"],
        stage: 1,
        weight: 2,
        grading: "ai_rubric",
        rubricId: "rubric.legal-english-written.v1",
        minChars: 200,
        prompt: {
          ar: "اكتب بالإنجليزية رسالة تعريف من ثلاث إلى خمس جمل ترسلها قبل المكالمة. عرّف بنفسك ودورك وسبب تواصلك، واقترح جدولاً للمكالمة. لا تعتذر عن لغتك ولا تَعِد بنتيجة.",
          en: "Write a three-to-five sentence English introduction email to send before the call. Give your name, your role, why you are writing, and propose an agenda. Do not apologise for your English and do not promise an outcome.",
        },
        context: {
          ar: [
            "المرسَل إليه: السيد راجيف مينون، شريك مؤسِّس في شركة برمجيات في بنغالور.",
            "أنت: محامٍ في مكتب إقليمي، تتولّى تأسيس الشركات والعقود التجارية.",
            "السبب: أحالك إليه محاسب المكتب لمناقشة فتح كيان إقليمي.",
            "المكالمة: الثلاثاء 9 حزيران 2026، عشرون دقيقة.",
          ],
          en: [
            "Recipient: Mr Rajiv Menon, co-founder of a software company in Bengaluru.",
            "You: a lawyer at a regional firm, handling company formation and commercial contracts.",
            "Reason: the firm's accountant referred him to you to discuss opening a regional entity.",
            "The call: Tuesday 9 June 2026, twenty minutes.",
          ],
        },
        modelAnswer: {
          ar: [
            "«Dear Mr Menon, my name is Ziad Nasr. I'm a lawyer at Nasr & Partners and I advise on company formation and commercial contracts.»",
            "«Samir Aoun suggested I write to you about the regional entity you are considering.»",
            "«For our call on Tuesday 9 June I'd like to cover three things: what the entity needs to do commercially, who will own it, and what documents you already have.»",
            "«Twenty minutes should be enough for that. If you would rather start somewhere else, tell me and I'll follow your order.»",
          ],
          en: [
            "“Dear Mr Menon, my name is Ziad Nasr. I'm a lawyer at Nasr & Partners and I advise on company formation and commercial contracts.”",
            "“Samir Aoun suggested I write to you about the regional entity you are considering.”",
            "“For our call on Tuesday 9 June I'd like to cover three things: what the entity needs to do commercially, who will own it, and what documents you already have.”",
            "“Twenty minutes should be enough for that. If you would rather start somewhere else, tell me and I'll follow your order.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«Dear Sir, I hope this email finds you well. Please be advised that I am the lawyer who is honoured to be at your service regarding your esteemed request.»",
              "«Our office has a long experience since more than twenty years in all legal fields and we assure you that we will do our best to satisfy all your requirements and to finish the company in the fastest time.»",
            ],
            en: [
              "“Dear Sir, I hope this email finds you well. Please be advised that I am the lawyer who is honoured to be at your service regarding your esteemed request.”",
              "“Our office has a long experience since more than twenty years in all legal fields and we assure you that we will do our best to satisfy all your requirements and to finish the company in the fastest time.”",
            ],
          },
          whatIsWrong: {
            ar: "أربع مشكلات متراكبة: «Dear Sir» بلا اسم مع شخص تعرف اسمه؛ ومجاملات عربية مترجمة حرفياً («esteemed request») تُقرأ قالباً جاهزاً لا تهذيباً؛ و«since more than twenty years» خطأ في زمن الجملة وفي حرف الجرّ معاً — الصواب «for more than twenty years»؛ والأخطر «we assure you… to finish the company in the fastest time» — تحفّظ عربي القصد تحوّل في الإنكليزية إلى وعد صريح بمدّة لا تسيطر عليها.",
            en: "Four faults stacked: “Dear Sir” with a man whose name you know; literally translated Arabic courtesies (“esteemed request”) that read as boilerplate rather than politeness; “since more than twenty years”, wrong in both tense and preposition — it is “for more than twenty years”; and worst, “we assure you… to finish the company in the fastest time”, an Arabic hedge that has become an explicit English promise about a timeline you do not control.",
          },
        },
      },
      {
        id: "act.le.01.6",
        kind: "reflection",
        skillId: "skill.le-professional-introduction",
        stage: 1,
        weight: 1,
        grading: "self_report",
        prompt: {
          ar: "استرجع آخر مرّة عرّفت فيها بنفسك بالإنجليزية. كم جملة قلت قبل أن تصل إلى دورك في الملف؟ وما الذي حذفته لو أُعطيت جملتين فقط؟",
          en: "Recall the last time you introduced yourself in English. How many sentences went by before you reached your role in the file? What would you cut if you were given only two sentences?",
        },
        followUp: {
          ar: "اكتب الآن نسختك من الجملتين واحفظها. التعريف المحفوظ يحرّر انتباهك للاستماع بدل صياغة الجملة التالية.",
          en: "Write your own two sentences now and learn them. A memorised introduction frees your attention for listening instead of building the next sentence.",
        },
      },
    ],
    summaryCard: {
      id: "card.le.01",
      title: {
        ar: "التعريف المهني: جملتان تُبنى عليهما المكالمة",
        en: "The professional introduction: two sentences the call is built on",
      },
      whatYouLearned: {
        ar: [
          "الاسم ببطء ومهجّى، ثم الدور والمكتب والمجال، ثم سبب وجودك في هذه المكالمة تحديداً.",
          "a lawyer at · advise on · qualified in — متلازمات تُحفظ كوحدات، لا تُترجم حرفاً بحرف.",
          "الاعتذار عن اللغة يخفض تقدير المستمع لكل رقم تقوله بعده. استبدله بصيغة مهلة.",
          "سرد خدمات المكتب ليس تعريفاً؛ هو ما يقوله من لا يعرف لماذا هو على الخط.",
        ],
        en: [
          "Name slowly and spelled, then role, firm and field, then why you specifically are on this call.",
          "“a lawyer at” · “advise on” · “qualified in” — collocations learned as units, never translated word by word.",
          "Apologising for your English lowers the listener's confidence in every figure that follows. Use a holding form instead.",
          "A list of the firm's services is not an introduction; it is what someone says when they do not know why they are on the line.",
        ],
      },
      framework: {
        name: {
          ar: "بطاقة التعريف الرباعية: الاسم · الدور · الصلة · المسار",
          en: "The Four-Beat Introduction Card: Name · Role · Relevance · Route",
        },
        steps: [
          {
            ar: "الاسم: قله ببطء وهجِّه إن كان جديداً على أذن المستمع.",
            en: "Name: say it slowly and spell it if it is new to the listener's ear.",
          },
          {
            ar: "الدور: «a lawyer at [المكتب]» ثم مجال واحد تنصح فيه، لا خمسة.",
            en: "Role: “a lawyer at [firm]”, then one field you advise on, not five.",
          },
          {
            ar: "الصلة: لماذا أنت تحديداً على هذه المكالمة، في جملة واحدة.",
            en: "Relevance: why you specifically are on this call, in one sentence.",
          },
          {
            ar: "المسار: ماذا ستفعلان في الوقت المتاح، وطلب موافقته عليه.",
            en: "Route: what the two of you will do with the time, and his agreement to it.",
          },
        ],
      },
      rememberThis: {
        ar: "المستمع لا يحكم على إنكليزيتك، بل على وضوحك. الجملة القصيرة المفهومة أقوى من الجملة الطويلة المصقولة.",
        en: "The listener is not judging your English; he is judging your clarity. A short clear sentence beats a long polished one.",
      },
      useItTomorrow: {
        ar: "قبل أول مكالمة إنجليزية غداً، اكتب جملتيك على ورقة وضعها أمامك. اقرأهما إن احتجت — لا أحد يسمع الورقة.",
        en: "Before your first English call tomorrow, write your two sentences on paper and keep them in front of you. Read them if you need to — nobody hears the paper.",
      },
      phrases: [
        {
          en: "My name is Ziad Nasr — that's Z-I-A-D, N-A-S-R.",
          ar: "تقديم الاسم مع تهجئته حرفاً حرفاً، وهو ما يوفّر عليك سؤال «عفواً، ما اسمك؟» لاحقاً.",
          register: "plain",
        },
        {
          en: "I'm a lawyer at Nasr & Partners in Beirut, and I advise on commercial disputes.",
          ar: "الدور والمكتب والمجال في جملة واحدة، بالحروف التي يستعملها المحامون فعلاً.",
          register: "neutral",
        },
        {
          en: "I have been asked to review your distributor file and to speak with you today.",
          ar: "بيان رسمي لسبب وجودك على الخطّ، مناسب للمراسلة ولأول جملة مع مستشار قانوني.",
          register: "formal",
        },
        {
          en: "I'm the one looking after your file.",
          ar: "الصيغة البسيطة للجملة نفسها: أنا المسؤول عن ملفّك. مناسبة مع مؤسِّس غير قانوني.",
          register: "plain",
        },
        {
          en: "I'm qualified in Lebanon; on questions of English law I would bring in local counsel.",
          ar: "تحديد حدود إجازتك مسبقاً، وهو ما يمنع الموكّل من بناء قرار على رأي خارج اختصاصك.",
          register: "formal",
        },
        {
          en: "Before we start, may I confirm how you would like to be addressed?",
          ar: "سؤال رسمي عن طريقة المخاطبة يجنّبك الخطأ في اللقب أو في الاسم الأول.",
          register: "formal",
        },
        {
          en: "Can I check how to say your name correctly?",
          ar: "الصيغة البسيطة للسؤال نفسه، وتصلح في مكالمة سريعة مع مؤسِّس.",
          register: "plain",
        },
        {
          en: "I'd like to use the next ten minutes on the facts, then tell you what I need from you.",
          ar: "إعلان خطة المكالمة، وهو ما ينقلك من صوت مجهول إلى من يدير الوقت.",
          register: "neutral",
        },
        {
          en: "Let me put that precisely.",
          ar: "صيغة مهلة تشتري لك ثانيتين بدل الاعتذار عن لغتك.",
          register: "neutral",
        },
      ],
    },
  },
  // =========================================================================
  // unit.le.02 — Welcoming a Client and Opening the Call
  //             (carries the chapter simulation: scn.le-intro-call)
  // =========================================================================
  {
    id: "unit.le.02",
    chapterId: "ch.le.meeting-people",
    order: 2,
    title: {
      ar: "الترحيب بالموكّل وافتتاح المكالمة بالإنجليزية",
      en: "Welcoming a Client and Opening the Call",
    },
    subtitle: {
      ar: "من الترحيب إلى جدول الأعمال في تسعين ثانية",
      en: "From welcome to agenda in ninety seconds",
    },
    primarySkillId: "skill.le-welcoming-client",
    skillIds: [
      "skill.le-welcoming-client",
      "skill.le-professional-introduction",
      "skill.le-background-questions",
    ],
    stage: 2,
    estimatedMinutes: 12,
    targetLevel: 2,
    sourceIds: [
      "src.client-centered-law-firm",
      "src.selling-the-invisible",
      "src.legal-project-management",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
    steps: [
      {
        kind: "hook",
        id: "st.le.02.hook",
        text: {
          ar: "«أهلاً وسهلاً، نوّرتم» جملة كريمة بالعربية. ترجمتها الحرفية إلى الإنجليزية تجعل مديرة عمليات هولندية تنظر إلى ساعتها.",
          en: "“You have lit up our office” is a generous sentence in Arabic. Translated literally into English, it makes a Dutch operations director look at her watch.",
        },
      },
      {
        kind: "why_it_matters",
        id: "st.le.02.why",
        text: {
          ar: "الترحيب ليس مجاملة، بل عقد صغير: كم من الوقت لدينا، وماذا سنغطّي، وماذا يبقى بيننا. تسعون ثانية تُوفَّر أو تُهدَر على مدى المكالمة كلّها.",
          en: "The welcome is not a courtesy; it is a small contract: how long we have, what we will cover, and what stays between us. Ninety seconds either save or waste the whole call.",
        },
      },
      {
        kind: "learning_goal",
        id: "st.le.02.goals",
        goals: {
          ar: [
            "تفتح المكالمة بترحيب قصير ثم تأكيد للوقت المتاح، بالإنجليزية وبلا إطالة.",
            "تعرض جدول أعمال من ثلاث نقاط وتطلب موافقة الموكّل عليه أو تعديله.",
            "تقول جملة السرّية بالإنجليزية بصيغتين: رسمية للمستشار القانوني، وبسيطة للمؤسِّس.",
            "تستبدل المجاملات العربية المترجمة حرفياً بصيغ إنجليزية تؤدّي وظيفتها نفسها.",
          ],
          en: [
            "Open with a short welcome and a check on the time available, in English and without padding.",
            "Put a three-item agenda on the table and ask the client to accept or change it.",
            "Say the confidentiality line in two English registers: formal for in-house counsel, plain for a founder.",
            "Replace literally translated Arabic courtesies with English forms that do the same job.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "st.le.02.lesson",
        title: {
          ar: "خمس حركات في تسعين ثانية",
          en: "Five moves in ninety seconds",
        },
        body: {
          ar: [
            "١. ترحيب واحد لا ثلاثة: «Thank you for making the time.» جملة واحدة كافية؛ تكرار الشكر بالإنجليزية يُقرأ توتّراً لا كرماً.",
            "٢. تأكيد الوقت: «We have thirty minutes — does that still work for you?» هذا السؤال ينقذك من موكّل اختصر وقته ولم يخبرك.",
            "٣. جدول من ثلاث نقاط: «I'd like to cover three things: what happened, what you have in writing, and what you need from us.» الرقم «ثلاثة» يجعل المستمع يعدّ معك.",
            "٤. السرّية بجملة واحدة: للمؤسِّس «Everything you tell me on this call is confidential»، وللمستشار القانوني «Anything you share is covered by professional secrecy, and I will not act on it without your instructions».",
            "٥. تسليم الكلمة: «Where would you like to start?» تنتهي حركتك ويبدأ هو. لا تدخل في الوقائع قبل هذه الجملة.",
            "ملاحظة على المجاملة: بالعربية يُبنى الودّ بالسؤال عن الأحوال والعائلة. بالإنجليزية المهنية يُبنى الودّ بالوقت المحترَم والجدول الواضح. الوظيفة واحدة والوسيلة مختلفة.",
          ],
          en: [
            "1. One welcome, not three: “Thank you for making the time.” One sentence is enough; repeated thanks in English read as nerves, not generosity.",
            "2. Check the time: “We have thirty minutes — does that still work for you?” This question saves you from the client who has cut his own time and not told you.",
            "3. A three-item agenda: “I'd like to cover three things: what happened, what you have in writing, and what you need from us.” The number makes the listener count along with you.",
            "4. Confidentiality in one sentence: for a founder, “Everything you tell me on this call is confidential”; for in-house counsel, “Anything you share is covered by professional secrecy, and I will not act on it without your instructions.”",
            "5. Hand over: “Where would you like to start?” Your move ends and his begins. Do not enter the facts before this sentence.",
            "A note on courtesy: in Arabic warmth is built by asking after health and family. In professional English warmth is built by respecting the clock and naming the agenda. Same function, different instrument.",
          ],
        },
      },
      {
        kind: "visual",
        id: "st.le.02.visual",
        title: {
          ar: "أول تسعين ثانية، ثانية بثانية",
          en: "The first ninety seconds, second by second",
        },
        variant: "timeline",
        items: [
          {
            label: { ar: "٠–١٥ ثانية: ترحيب وتعريف", en: "0–15s: welcome and name" },
            detail: {
              ar: "«Good morning, Ms Almeida. Ziad Nasr here — thank you for making the time.»",
              en: "“Good morning, Ms Almeida. Ziad Nasr here — thank you for making the time.”",
            },
            tone: "positive",
          },
          {
            label: { ar: "١٥–٣٠ ثانية: تأكيد الوقت", en: "15–30s: confirm the time" },
            detail: {
              ar: "«We have thirty minutes — does that still work for you?» إن قال عشرين، عدّل الجدول أمامه لا في رأسك.",
              en: "“We have thirty minutes — does that still work for you?” If he says twenty, rebuild the agenda out loud, not in your head.",
            },
            tone: "positive",
          },
          {
            label: { ar: "٣٠–٦٠ ثانية: جدول من ثلاث نقاط", en: "30–60s: a three-item agenda" },
            detail: {
              ar: "ما حدث · ما لديك مكتوباً · ما تحتاجه منّا. ثم: «Does that order suit you?»",
              en: "What happened · what you have in writing · what you need from us. Then: “Does that order suit you?”",
            },
            tone: "positive",
          },
          {
            label: { ar: "٦٠–٧٥ ثانية: السرّية", en: "60–75s: confidentiality" },
            detail: {
              ar: "جملة واحدة تفتح الكلام: الموكّل الذي لا يسمعها يخفي التفصيل الذي يغيّر الملف.",
              en: "One sentence that unlocks the conversation: a client who does not hear it holds back the detail that changes the file.",
            },
            tone: "positive",
          },
          {
            label: { ar: "٧٥–٩٠ ثانية: تسليم الكلمة", en: "75–90s: hand over" },
            detail: {
              ar: "«Where would you like to start?» ثم اصمت. الصمت هنا أداة عمل لا فراغ.",
              en: "“Where would you like to start?” Then stop talking. The silence here is a tool, not a gap.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "st.le.02.worked",
        strong: {
          label: { ar: "افتتاح يشتري لك المكالمة كلّها", en: "An opening that buys you the whole call" },
          text: {
            ar: [
              "«Good morning, Ms Almeida. Ziad Nasr here — thank you for making the time.»",
              "«We have thirty minutes. Does that still work for you?»",
              "«I'd like to cover three things: what happened with the distributor, what you already have in writing, and what you need from us this week.»",
              "«Everything you tell me is confidential, and I won't act on anything without your instructions. Where would you like to start?»",
            ],
            en: [
              "“Good morning, Ms Almeida. Ziad Nasr here — thank you for making the time.”",
              "“We have thirty minutes. Does that still work for you?”",
              "“I'd like to cover three things: what happened with the distributor, what you already have in writing, and what you need from us this week.”",
              "“Everything you tell me is confidential, and I won't act on anything without your instructions. Where would you like to start?”",
            ],
          },
          why: {
            ar: "أربع جمل تحسم أربع مسائل: الوقت، والمحتوى، والأمان، ومن يتكلّم الآن. والأهمّ أن الجملة الأخيرة تُنهي دورك وتفتح دوره بدل أن تسحبه إلى موضوع اخترته أنت.",
            en: "Four sentences settle four questions: the time, the content, the safety, and who talks next. The last sentence ends your turn and opens his, instead of pulling him into a topic you chose.",
          },
        },
        weak: {
          label: { ar: "كرم مترجم حرفياً", en: "Generosity translated word for word" },
          text: {
            ar: [
              "«Welcome, welcome, Madam Sofia. You honour us, and our office is your office.»",
              "«How is your health? I hope the family is well and everything is good with you, God willing.»",
              "«Please, take your time, we are not in a hurry at all, and whatever you need we are ready for it, day or night.»",
            ],
            en: [
              "“Welcome, welcome, Madam Sofia. You honour us, and our office is your office.”",
              "“How is your health? I hope the family is well and everything is good with you, God willing.”",
              "“Please, take your time, we are not in a hurry at all, and whatever you need we are ready for it, day or night.”",
            ],
          },
          why: {
            ar: "المستمع الأوروبي لا يسمع كرماً، بل يسمع ثلاثة أشياء: أن مكالمته لن تنتهي في وقتها، وأن السؤال عن صحّته وعائلته اقتحام لخصوصيته لا لطف، وأن «we are ready day or night» عرض غير قابل للتصديق يخفّض ثقته بكل ما ستقوله بعده. أضف إلى ذلك «take your time, we are not in a hurry» — وهي عملياً إعلان بأنك لا تدير وقتاً.",
            en: "A European listener hears none of the generosity. He hears three things: that this call will overrun; that asking after his health and family is an intrusion rather than a kindness; and that “ready day or night” is an unbelievable offer that lowers his trust in everything after it. Add “take your time, we are not in a hurry” — in practice an announcement that you are not managing the clock.",
          },
        },
      },
      { kind: "activity", id: "st.le.02.a1", activityId: "act.le.02.1", mode: "quick" },
      { kind: "activity", id: "st.le.02.a2", activityId: "act.le.02.2", mode: "quick" },
      { kind: "activity", id: "st.le.02.a3", activityId: "act.le.02.3", mode: "guided" },
      { kind: "activity", id: "st.le.02.a4", activityId: "act.le.02.4", mode: "guided" },
      { kind: "simulation", id: "st.le.02.sim", scenarioId: "scn.le-intro-call" },
      { kind: "activity", id: "st.le.02.a5", activityId: "act.le.02.5", mode: "independent" },
      { kind: "summary", id: "st.le.02.summary", summaryCardId: "card.le.02" },
      {
        kind: "apply_tomorrow",
        id: "st.le.02.apply",
        task: {
          ar: "في أول مكالمة إنجليزية غداً، قل جملة تأكيد الوقت وجدول النقاط الثلاث قبل أن تسمع أي واقعة.",
          en: "On tomorrow's first English call, say the time check and the three-item agenda before you hear a single fact.",
        },
        detail: {
          ar: "احسب بعدها: هل انتهت المكالمة في وقتها؟ وهل احتجت إلى مقاطعة الموكّل؟ الجدول المعلَن يوفّر عليك المقاطعة لاحقاً.",
          en: "Then check: did the call end on time, and did you have to interrupt the client? A stated agenda spares you the interruption later.",
        },
      },
      {
        kind: "next_mission",
        id: "st.le.02.next",
        teaser: {
          ar: "الوحدة القادمة: الأسئلة نفسها. كيف تفتح ثم تضيّق ثم تُثبّت الرقم، بأسئلة إنجليزية قصيرة لا تُركَّب ثلاثة في جملة.",
          en: "Next: the questions themselves. How to open, narrow and pin the number, in short English questions that never stack three into one.",
        },
      },
    ],
    activities: [
      {
        id: "act.le.02.1",
        kind: "listening",
        skillId: "skill.le-welcoming-client",
        secondarySkillIds: ["skill.le-clarifying-facts"],
        stage: 2,
        weight: 1,
        prompt: {
          ar: "استمع إلى أول دور للموكّلة. ما التصرّف الصحيح فور انتهائها؟",
          en: "Listen to the client's first turn. What is the right move the moment she stops?",
        },
        script: {
          ar: "Morning. Listen, I've got twenty minutes, not thirty — something came up at the port. Can we do the distributor first and leave the fees to the end? Oh, and I should probably mention: we sent them a letter last week ourselves.",
          en: "Morning. Listen, I've got twenty minutes, not thirty — something came up at the port. Can we do the distributor first and leave the fees to the end? Oh, and I should probably mention: we sent them a letter last week ourselves.",
        },
        transcript: {
          ar: "النصّ: “Morning. Listen, I've got twenty minutes, not thirty — something came up at the port. Can we do the distributor first and leave the fees to the end? Oh, and I should probably mention: we sent them a letter last week ourselves.” — الترجمة: «صباح الخير. اسمع، لديّ عشرون دقيقة لا ثلاثون، طرأ أمر في المرفأ. هل نبدأ بالموزّع ونترك الأتعاب إلى النهاية؟ آه، وربّما عليّ أن أذكر: أرسلنا إليهم رسالة الأسبوع الماضي بأنفسنا.»",
          en: "“Morning. Listen, I've got twenty minutes, not thirty — something came up at the port. Can we do the distributor first and leave the fees to the end? Oh, and I should probably mention: we sent them a letter last week ourselves.”",
        },
        accessibleAlternative: {
          ar: "يمكنك قراءة النصّ المكتوب كاملاً بدل الاستماع؛ السؤال يُجاب من النصّ نفسه.",
          en: "You can read the full transcript instead of listening; the question is answerable from the text alone.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«Twenty minutes, and the distributor first — that works. Before anything else, can we start with the letter you sent last week? What did it say?»",
              en: "“Twenty minutes, and the distributor first — that works. Before anything else, can we start with the letter you sent last week? What did it say?”",
            },
            correct: true,
            rationale: {
              ar: "أقرّيت الوقت الجديد والترتيب الجديد في سبع كلمات، ثم أمسكت بالمعلومة التي قيلت عرَضاً. الرسالة المرسَلة بلا استشارة قد تكون غيّرت الموقف التعاقدي كلّه، وكل ما ستبنيه قبل معرفتها مبني على فرضية.",
              en: "You accepted the new time and the new order in seven words, then caught the fact she dropped in passing. A letter sent without advice may have changed the whole contractual position, and everything you build before you know it rests on an assumption.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«No problem at all, take your time. Let me first explain how our firm works and what our fee structure looks like.»",
              en: "“No problem at all, take your time. Let me first explain how our firm works and what our fee structure looks like.”",
            },
            rationale: {
              ar: "خالفت طلبين صريحين في جملة واحدة: هي قالت عشرون دقيقة فقلت «take your time»، وقالت الأتعاب في النهاية فبدأت بها. الموكّل الذي يُطلب منه شيء ولا يُنفَّذ في الدقيقة الأولى يفترض أن هذا سيتكرّر طوال الملف.",
              en: "You broke two express requests in one sentence: she said twenty minutes and you said “take your time”; she said fees at the end and you started with them. A client whose first request is ignored assumes it will keep happening.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«Of course. So, tell me about the distributor — how much do they owe and since when?»",
              en: "“Of course. So, tell me about the distributor — how much do they owe and since when?”",
            },
            rationale: {
              ar: "سؤال سليم في التوقيت الخطأ. أنت تمرّ فوق رسالة أُرسلت إلى الطرف الآخر بلا استشارة، وهي المعلومة الوحيدة في كلامها التي قد تُسقط خياراً قانونياً بأكمله. عُد إليها الآن، فلن تُذكر مرّة ثانية.",
              en: "A sound question at the wrong moment. You are walking past a letter sent to the other side with no advice — the one thing in her turn that could remove a legal option entirely. Go back to it now; it will not be mentioned twice.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«Twenty minutes is quite short for a matter like this. Could we perhaps reschedule for a longer call tomorrow?»",
              en: "“Twenty minutes is quite short for a matter like this. Could we perhaps reschedule for a longer call tomorrow?”",
            },
            rationale: {
              ar: "أنت تعيد المشكلة إلى الموكّلة بدل أن تتكيّف. عشرون دقيقة تكفي تماماً لجمع الوقائع الأساسية إن كان لديك جدول. طلب تأجيل في الدقيقة الأولى يُقرأ عجزاً عن إدارة الوقت، وقد تكون في المكالمة نفسها تقارن بينك وبين مكتب آخر.",
              en: "You are handing the problem back to the client instead of adapting. Twenty minutes is ample for the essential facts if you have an agenda. Asking to reschedule in the first minute reads as an inability to manage time — and she may well be comparing you with another firm the same day.",
            },
          },
        ],
      },
      {
        id: "act.le.02.2",
        kind: "best_response",
        skillId: "skill.le-welcoming-client",
        stage: 2,
        weight: 1,
        prompt: {
          ar: "المستشار القانوني الداخلي لمجموعة مقاولات في أبوظبي يفتتح بقوله: «Thank you for making time at short notice, I know you're busy.» أي ردّ إنجليزي هو الأفضل؟",
          en: "In-house counsel at an Abu Dhabi contracting group opens with: “Thank you for making time at short notice, I know you're busy.” Which English reply is best?",
        },
        context: {
          ar: [
            "المتكلّم: خالد المزروعي، مستشار قانوني داخلي، يتحدّث الإنجليزية بطلاقة.",
            "مكالمة أولى، ثلاثون دقيقة، بشأن إنهاء عقد مقاولة من الباطن.",
          ],
          en: [
            "Speaker: Khalid Al-Mazrouei, in-house counsel, fluent in English.",
            "First call, thirty minutes, about the termination of a subcontract.",
          ],
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«Not at all — thank you for the file. We have thirty minutes; may I set out what I'd like to cover?»",
              en: "“Not at all — thank you for the file. We have thirty minutes; may I set out what I'd like to cover?”",
            },
            correct: true,
            rationale: {
              ar: "ردّ من ثلاث حركات في سطر واحد: تخفيف المجاملة، وشكر متبادل بلا مبالغة، ثم تحويل الطاقة فوراً إلى الوقت والجدول. المستوى اللغوي ثابت ومناسب لمخاطب قانوني.",
              en: "Three moves in one line: the courtesy is deflected, the thanks are returned without inflation, and the energy goes straight to time and agenda. The register is steady and right for a legal counterpart.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«No, no, this is my duty and my honour. You are the one who honours us, and please never say I am busy — I am always available for you.»",
              en: "“No, no, this is my duty and my honour. You are the one who honours us, and please never say I am busy — I am always available for you.”",
            },
            rationale: {
              ar: "مجاملة عربية مترجمة حرفياً. المستمع لا يسمع تواضعاً بل مبالغة تُشعره بالحرج، و«I am always available» وعد لا يُصدَّق ولا يُنفَّذ. أنت أيضاً أهدرت الحركة الأولى من المكالمة على نفي شيء لم يُتَّهم به أحد.",
              en: "An Arabic courtesy carried over word for word. The listener hears not humility but an overstatement that makes him uncomfortable, and “I am always available” is neither believable nor deliverable. You have also spent the opening move denying something nobody alleged.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«Yes, honestly it's been a very heavy week, but I managed to find a slot for you. So let's begin.»",
              en: "“Yes, honestly it's been a very heavy week, but I managed to find a slot for you. So let's begin.”",
            },
            rationale: {
              ar: "صادق ومكلف. قبولك بأنك مثقل يجعل الموكّل يسأل نفسه أين سيقع ملفّه في ترتيب أولوياتك، و«I managed to find a slot for you» تُقرأ منّة لا ترحيباً.",
              en: "Honest and expensive. Agreeing that you are overloaded makes the client wonder where his file sits in your queue, and “I managed to find a slot for you” reads as a favour granted rather than a welcome.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«Thank you, thank you, it's really no trouble, no trouble at all, we are very happy to help, thank you again for calling us.»",
              en: "“Thank you, thank you, it's really no trouble, no trouble at all, we are very happy to help, thank you again for calling us.”",
            },
            rationale: {
              ar: "التكرار في الإنجليزية لا يزيد الودّ بل يُقرأ توتّراً. أربع شكرات في جملتين تجعل المستشار القانوني يفترض أنك غير معتاد على مكالمات كهذه — وهو انطباع لا تريده في الدقيقة الأولى.",
              en: "Repetition in English does not add warmth; it reads as nerves. Four thank-yous in two sentences make in-house counsel assume you are not used to calls like this — not the impression you want in minute one.",
            },
          },
        ],
      },
      {
        id: "act.le.02.3",
        kind: "matching",
        skillId: "skill.le-welcoming-client",
        stage: 2,
        weight: 1,
        prompt: {
          ar: "كل يسار هنا ترجمة حرفية لمجاملة عربية. طابقها مع ما يسمعه المستمع الإنجليزي فعلاً وما يحلّ محلّها.",
          en: "Each item on the left is a literal translation of an Arabic courtesy. Match it with what an English listener actually hears, and what to say instead.",
        },
        accessibleAlternative: {
          ar: "يمكن الإجابة باختيار رقم الطرف المقابل من قائمة بدل السحب.",
          en: "You can answer by selecting the matching item number from a list instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "“Our office is your office.”", en: "“Our office is your office.”" },
            right: {
              ar: "يُسمع: عبارة تسويقية بلا مضمون. البديل: «You'll have one point of contact here, and that's me.»",
              en: "Heard as: a marketing line with nothing behind it. Instead: “You'll have one point of contact here, and that's me.”",
            },
            rationale: {
              ar: "الوظيفة العربية للجملة هي طمأنة الموكّل بأنه ليس غريباً. الإنجليزية تؤدّي الوظيفة نفسها بالتحديد لا بالمجاز: اسم شخص يتحمّل المسؤولية.",
              en: "The Arabic sentence exists to reassure the client that he is not a stranger here. English does that job with specificity rather than metaphor: a named person who is accountable.",
            },
          },
          {
            id: "p2",
            left: { ar: "“How is your health? How is the family?”", en: "“How is your health? How is the family?”" },
            right: {
              ar: "يُسمع: اقتحام للخصوصية في مكالمة عمل أولى. البديل: «How has your week been at the port?»",
              en: "Heard as: an intrusion into private life on a first business call. Instead: “How has your week been at the port?”",
            },
            rationale: {
              ar: "السؤال المهني عن سياق عمل الموكّل يؤدّي وظيفة السؤال عن الأحوال، ويعطيك معلومة قابلة للاستعمال، ولا يتخطّى حدّاً لا يزال مغلقاً في الثقافة المهنية الأوروبية.",
              en: "A professional question about the client's working context does the same relational job, hands you usable information, and does not cross a line that stays closed in European professional culture.",
            },
          },
          {
            id: "p3",
            left: {
              ar: "“Take your time, we are not in a hurry at all.”",
              en: "“Take your time, we are not in a hurry at all.”",
            },
            right: {
              ar: "يُسمع: هذه المكالمة ستتجاوز وقتها. البديل: «We have thirty minutes — does that still work for you?»",
              en: "Heard as: this call will overrun. Instead: “We have thirty minutes — does that still work for you?”",
            },
            rationale: {
              ar: "الكرم بالوقت في الإنجليزية المهنية يُظهَر باحترام الحدّ لا بإلغائه. الموكّل الذي ينتهي معه الاجتماع في وقته يعود إليك.",
              en: "In professional English, generosity with time is shown by respecting the limit, not abolishing it. The client whose meeting ends on time comes back.",
            },
          },
          {
            id: "p4",
            left: {
              ar: "“Whatever you need, we are ready, day or night.”",
              en: "“Whatever you need, we are ready, day or night.”",
            },
            right: {
              ar: "يُسمع: وعد لا يُصدَّق، وتخفيض لثقة المستمع بما يليه. البديل: «I answer emails within one working day, and I'll tell you when I can't.»",
              en: "Heard as: an unbelievable promise that lowers trust in everything after it. Instead: “I answer emails within one working day, and I'll tell you when I can't.”",
            },
            rationale: {
              ar: "الوعد القابل للقياس أقوى من الوعد المطلق. والمطلق في الإنجليزية يُقرأ إمّا مبالغة تجارية وإمّا التزاماً ستُحاسَب عليه حرفياً.",
              en: "A measurable promise beats an absolute one. In English the absolute reads either as sales talk or as a commitment you will be held to literally.",
            },
          },
          {
            id: "p5",
            left: {
              ar: "“God willing, everything will be fine.”",
              en: "“God willing, everything will be fine.”",
            },
            right: {
              ar: "يُسمع بطريقتين متناقضتين: طمأنة بنتيجة، أو تهرّب من الجواب. البديل: «I can't tell you the outcome yet. I can tell you the next step and its date.»",
              en: "Heard two contradictory ways: a promise of the outcome, or a dodge. Instead: “I can't tell you the outcome yet. I can tell you the next step and its date.”",
            },
            rationale: {
              ar: "بالعربية هي تحفّظ يعرفه الطرفان. بالإنجليزية تفقد وظيفتها التحفّظية: إمّا تُسمع وعداً، وإمّا تُسمع مراوغة. الفصل بين النتيجة والخطوة يعيد المعنى المقصود.",
              en: "In Arabic it is a hedge both sides understand. In English it loses that function: it is heard as a promise or as evasion. Separating the outcome from the step restores the meaning you intended.",
            },
          },
        ],
      },
      {
        id: "act.le.02.4",
        kind: "pronunciation",
        skillId: "skill.le-welcoming-client",
        stage: 2,
        weight: 1,
        grading: "self_report",
        target: "schedule",
        ipa: "/ˈʃed.juːl/ · /ˈskedʒ.uːl/",
        prompt: {
          ar: "قل الكلمة ثم الجملة. النطقان مقبولان تماماً — البريطاني SHED-yool والأميركي SKED-jool — والمهمّ أن تختار واحداً وتثبت عليه داخل المكالمة. اللكنة لا تُقيَّم.",
          en: "Say the word, then the sentence. Both pronunciations are fully acceptable — British SHED-yool and American SKED-jool. What matters is choosing one and staying with it inside a call. Accent is not assessed.",
        },
        meaning: {
          ar: "كاسم: جدول زمني أو ملحق بالعقد. وكفعل: «to schedule a call» أي تحديد موعد. كلمة لا تخلو منها مكالمة افتتاحية.",
          en: "As a noun: a timetable, or a schedule annexed to a contract. As a verb: “to schedule a call”. It appears in almost every opening call.",
        },
        exampleSentence: {
          ar: "«Shall we schedule a follow-up call for Thursday, once I've seen the payment schedule in the agreement?» — هل نحدّد مكالمة متابعة يوم الخميس بعد أن أطّلع على جدول الدفعات في الاتفاقية؟",
          en: "“Shall we schedule a follow-up call for Thursday, once I've seen the payment schedule in the agreement?”",
        },
        hint: {
          ar: "الزلّة الشائعة هي إقحام صوت متحرّك في أول الكلمة («es-kedule») أو إضافة مقطع ثالث. مقطعان فقط: SHED-yool أو SKED-jool.",
          en: "The common slip is adding a vowel at the front (“es-kedule”) or a third syllable. Two syllables only: SHED-yool or SKED-jool.",
        },
        accessibleAlternative: {
          ar: "يمكنك تقطيع الكلمة كتابةً واختيار النطق الذي ستلتزم به، بدل النطق الصوتي.",
          en: "You can mark the syllables in writing and choose which pronunciation you will keep to, instead of speaking.",
        },
      },
      {
        id: "act.le.02.5",
        kind: "reflection",
        skillId: "skill.le-welcoming-client",
        stage: 2,
        weight: 1,
        grading: "self_report",
        prompt: {
          ar: "بعد المحاكاة: كم جملة قلتها قبل أن تسمع أول واقعة من صوفيا؟ وهل ذكرت الوقت والسرّية، أم قفزت إلى الوقائع لأن الإنجليزية جعلت الافتتاح مكلفاً؟",
          en: "After the simulation: how many sentences did you speak before you heard Sofia's first fact? Did you cover the time and confidentiality, or did you jump to the facts because English made the opening feel expensive?",
        },
        followUp: {
          ar: "اكتب افتتاحك من أربع جمل بالإنجليزية واحفظه. الافتتاح المحفوظ هو ما يحرّر ذهنك للاستماع في المكالمة الحقيقية.",
          en: "Write your four-sentence English opening and learn it. A memorised opening is what frees your mind to listen in the real call.",
        },
      },
    ],
    summaryCard: {
      id: "card.le.02",
      title: {
        ar: "الافتتاح: عقد صغير مدّته تسعون ثانية",
        en: "The opening: a ninety-second contract",
      },
      whatYouLearned: {
        ar: [
          "ترحيب واحد يكفي؛ تكرار الشكر بالإنجليزية يُقرأ توتّراً لا كرماً.",
          "تأكيد الوقت في أول ثلاثين ثانية ينقذ المكالمة من موكّل اختصر وقته ولم يخبرك.",
          "جدول من ثلاث نقاط يجعل المستمع يعدّ معك، ويعطيك حقّ العودة إلى الترتيب لاحقاً.",
          "السرّية جملة واحدة بصيغتين: رسمية للقانوني وبسيطة للمؤسِّس. من لا يسمعها يحجب التفصيل الحاسم.",
          "المجاملة العربية لا تُترجم، بل تُستبدل بما يؤدّي وظيفتها: وقت محترَم وجدول واضح ونقطة اتصال مسمّاة.",
        ],
        en: [
          "One welcome is enough; repeated thanks in English read as nerves, not generosity.",
          "Checking the time in the first thirty seconds saves the call from a client who has cut his own time and not said so.",
          "A three-item agenda makes the listener count along with you and earns you the right to come back to the order later.",
          "Confidentiality is one sentence in two registers: formal for a lawyer, plain for a founder. A client who does not hear it holds back the decisive detail.",
          "Arabic courtesy is not translated but replaced by what does its job: time respected, agenda named, one contact person.",
        ],
      },
      framework: {
        name: {
          ar: "افتتاح أيجور الخماسي: تحية · وقت · جدول · سرّية · دعوة",
          en: "The AIJUR Ninety-Second Open: Greet · Clock · Agenda · Confidence · Invite",
        },
        steps: [
          {
            ar: "تحية: جملة ترحيب واحدة مع اسم المستمع، وشكر واحد لا أكثر.",
            en: "Greet: one welcome with the listener's name, and one thank-you, no more.",
          },
          {
            ar: "وقت: أكّد المدّة المتاحة واسأله إن كانت ما زالت صالحة.",
            en: "Clock: confirm the time available and ask whether it still holds.",
          },
          {
            ar: "جدول: ثلاث نقاط مرقّمة، ثم اطلب موافقته على الترتيب.",
            en: "Agenda: three numbered items, then ask him to accept the order.",
          },
          {
            ar: "سرّية: جملة واحدة بالمستوى اللغوي المناسب للمخاطَب.",
            en: "Confidence: one sentence on confidentiality, in the register that fits the listener.",
          },
          {
            ar: "دعوة: «Where would you like to start?» ثم اصمت وأنصت.",
            en: "Invite: “Where would you like to start?” Then stop and listen.",
          },
        ],
      },
      rememberThis: {
        ar: "بالعربية يُبنى الودّ بالكلام. بالإنجليزية المهنية يُبنى الودّ بالوقت المحترَم.",
        en: "In Arabic, warmth is built with words. In professional English, warmth is built with the clock.",
      },
      useItTomorrow: {
        ar: "ضع جملتَي الوقت والسرّية في أعلى قالب ملاحظاتك، بحيث تراهما في كل مكالمة إنجليزية قبل أن تبدأ الكتابة.",
        en: "Put the time line and the confidentiality line at the top of your note template, so you see them on every English call before you start writing.",
      },
      phrases: [
        {
          en: "Thank you for making the time — I know your morning is full.",
          ar: "شكر واحد موجز يعترف بانشغال المستمع دون مبالغة ولا تكرار.",
          register: "neutral",
        },
        {
          en: "We have thirty minutes. Does that still work for you?",
          ar: "تأكيد المدّة المتاحة، وهو السؤال الذي يكشف تغيّر وقت الموكّل قبل أن يفاجئك.",
          register: "neutral",
        },
        {
          en: "May I suggest how we use the time?",
          ar: "طلب رسمي لعرض جدول الأعمال، مناسب مع مستشار قانوني أو مسؤول كبير.",
          register: "formal",
        },
        {
          en: "Can I tell you how I'd like to use the time?",
          ar: "الصيغة البسيطة للطلب نفسه، وتصلح مع مؤسِّس أو موكّل مباشر الطبع.",
          register: "plain",
        },
        {
          en: "There are three things I'd like to cover: what happened, what you have in writing, and what you need from us.",
          ar: "جدول أعمال من ثلاث نقاط يجعل المستمع يعدّ معك ويعرف متى تنتهي.",
          register: "neutral",
        },
        {
          en: "Anything you tell me is covered by professional secrecy, and I will not act on it without your instructions.",
          ar: "صيغة السرّية الرسمية، مناسبة للمستشار القانوني الداخلي ولمن يتوقّع لغة دقيقة.",
          register: "formal",
        },
        {
          en: "Everything you tell me on this call stays between us.",
          ar: "الصيغة البسيطة للجملة نفسها، مناسبة لمؤسِّس غير قانوني يريد الاطمئنان لا التعريف.",
          register: "plain",
        },
        {
          en: "You'll have one point of contact here, and that's me.",
          ar: "بديل عملي عن «مكتبنا مكتبكم»: شخص مسمّى يتحمّل المسؤولية.",
          register: "neutral",
        },
        {
          en: "Where would you like to start?",
          ar: "جملة تسليم الكلمة التي تُنهي افتتاحك وتفتح دور الموكّل.",
          register: "plain",
        },
        {
          en: "Before we finish, I'll read the steps back so we leave with the same list.",
          ar: "وعد بإقفال منظّم يجعل المكالمة تنتهي بخطوات لا بانطباعات.",
          register: "neutral",
        },
      ],
    },
  },
  // =========================================================================
  // unit.le.03 — Asking for Background Information
  // =========================================================================
  {
    id: "unit.le.03",
    chapterId: "ch.le.meeting-people",
    order: 3,
    title: {
      ar: "طلب المعلومات الخلفية بالإنجليزية",
      en: "Asking for Background Information",
    },
    subtitle: {
      ar: "أسئلة قصيرة تفتح، ثم تضيّق، ثم تُثبّت الرقم",
      en: "Short questions that open, then narrow, then pin the number",
    },
    primarySkillId: "skill.le-background-questions",
    skillIds: [
      "skill.le-background-questions",
      "skill.le-clarifying-facts",
      "skill.le-welcoming-client",
    ],
    stage: 2,
    estimatedMinutes: 11,
    targetLevel: 2,
    sourceIds: [
      "src.client-centered-law-firm",
      "src.thinking-like-a-lawyer",
      "src.smarter-collaboration",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
    steps: [
      {
        kind: "hook",
        id: "st.le.03.hook",
        text: {
          ar: "سؤال إنجليزي واحد طويل يُنتج جواباً واحداً قصيراً. خمسة أسئلة قصيرة تُنتج ملفاً.",
          en: "One long English question produces one short answer. Five short questions produce a file.",
        },
      },
      {
        kind: "why_it_matters",
        id: "st.le.03.why",
        text: {
          ar: "حين تضعف اللغة يميل المحامي إلى تركيب كل ما يريده في جملة واحدة طويلة خوفاً من الصمت. الموكّل يجيب عن آخر جزء سمعه فقط، ويضيع الباقي.",
          en: "When the language feels shaky, lawyers stack everything into one long sentence to avoid a silence. The client answers only the last part he heard, and the rest is lost.",
        },
      },
      {
        kind: "learning_goal",
        id: "st.le.03.goals",
        goals: {
          ar: [
            "تطرح سؤالاً واحداً في الدور الواحد، وتصمت بعده.",
            "تنتقل من السؤال المفتوح إلى السؤال الضيّق ثم إلى الرقم أو التاريخ، بترتيب مقصود.",
            "تستعمل المتلازمات القانونية بحروفها الصحيحة: file a claim against · apply for · rely on · in accordance with.",
            "تختار الزمن الصحيح عند سرد الوقائع: الماضي البسيط لحدث بتاريخ، والمضارع التام لحالة مستمرّة.",
          ],
          en: [
            "Ask one question per turn, and stop talking after it.",
            "Move from the open question to the narrow one and then to the number or date, in a deliberate order.",
            "Use legal collocations with the right prepositions: “file a claim against”, “apply for”, “rely on”, “in accordance with”.",
            "Choose the right tense when narrating facts: past simple for a dated event, present perfect for a state that continues.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "st.le.03.lesson",
        title: {
          ar: "قمع من أربع درجات، وحرف جرّ في كل درجة",
          en: "A four-stage funnel, with a preposition at every stage",
        },
        body: {
          ar: [
            "١. افتح باتساع مقصود: «Can you take me through what happened, starting from the first sign of a problem?» ابدأ بأول إشارة لا بأول مستند، فالموكّل يتذكّر القلق قبل أن يتذكّر التاريخ.",
            "٢. ضيّق بسؤال واحد: «When did you last receive a payment from them?» سؤال واحد في الدور الواحد. إن ركّبت ثلاثة، ستحصل على جواب واحد.",
            "٣. ثبّت الرقم أو التاريخ ثم أعده: «So the last payment was in March — March 2026?» الرقم غير المعاد هو رقم غير مؤكَّد.",
            "٤. اسأل عن المكتوب: «What have you sent them, and what have they sent you?» هذا السؤال يكشف أكثر ممّا يكشفه أي سؤال عن الرأي.",
            "المتلازمات: file a claim against someone (لا «on someone»)، apply for an order (لا «apply to an order»)، rely on a document (لا «rely to»)، comply with a notice (لا «comply to»)، in accordance with the agreement (لا «in accordance to»).",
            "الزمن: «They stopped paying in March» حدث انتهى وله تاريخ. «They have not paid since March» حالة ما زالت قائمة اليوم. الخلط بينهما يجعل المستمع يظنّ أن النزاع أُغلق أو أنه ما زال مفتوحاً — وهو فرق يغيّر النصيحة.",
          ],
          en: [
            "1. Open deliberately wide: “Can you take me through what happened, starting from the first sign of a problem?” Start from the first sign, not the first document — clients remember worry before they remember dates.",
            "2. Narrow with a single question: “When did you last receive a payment from them?” One question per turn. Stack three and you will get one answer.",
            "3. Pin the number or date, then repeat it: “So the last payment was in March — March 2026?” A number not repeated back is a number not confirmed.",
            "4. Ask about what exists in writing: “What have you sent them, and what have they sent you?” This question uncovers more than any question about opinions.",
            "Collocations: file a claim against someone (not “on”), apply for an order (not “apply to”), rely on a document (not “rely to”), comply with a notice (not “comply to”), in accordance with the agreement (not “in accordance to”).",
            "Tense: “They stopped paying in March” — a finished event with a date. “They have not paid since March” — a state that is still true today. Mixing them tells the listener the dispute is closed when it is live, or the reverse, and that changes the advice.",
          ],
        },
      },
      {
        kind: "visual",
        id: "st.le.03.visual",
        title: {
          ar: "من الاتساع إلى الرقم في أربع خطوات",
          en: "From wide to exact in four moves",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "افتح", en: "Open" },
            detail: {
              ar: "«Take me through what happened, from the first sign of a problem.» — دعه يروي، ولا تقاطع في أول تسعين ثانية.",
              en: "“Take me through what happened, from the first sign of a problem.” Let him narrate, and do not interrupt in the first ninety seconds.",
            },
            tone: "positive",
          },
          {
            label: { ar: "ضيّق", en: "Narrow" },
            detail: {
              ar: "«When did you last receive a payment?» — سؤال واحد يستهدف واقعة واحدة.",
              en: "“When did you last receive a payment?” One question aimed at one fact.",
            },
            tone: "positive",
          },
          {
            label: { ar: "رقّم", en: "Number" },
            detail: {
              ar: "«How many invoices are unpaid, and what is the total?» — الأرقام تُطلب صراحةً، لا تُستنتج.",
              en: "“How many invoices are unpaid, and what is the total?” Figures are asked for, never inferred.",
            },
            tone: "positive",
          },
          {
            label: { ar: "أكّد", en: "Confirm" },
            detail: {
              ar: "«So: three invoices, since March, one hundred and eighty thousand euros. Have I got that right?»",
              en: "“So: three invoices, since March, one hundred and eighty thousand euros. Have I got that right?”",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "st.le.03.worked",
        strong: {
          label: { ar: "قمع من أربعة أدوار", en: "A four-turn funnel" },
          text: {
            ar: [
              "«Can you take me through what happened, starting from the first sign of a problem?»",
              "«Thank you. When did you last receive a payment from them?»",
              "«And how many invoices are outstanding now?»",
              "«So that is three invoices, nothing since March 2026, around one hundred and eighty thousand euros. Have I got that right?»",
            ],
            en: [
              "“Can you take me through what happened, starting from the first sign of a problem?”",
              "“Thank you. When did you last receive a payment from them?”",
              "“And how many invoices are outstanding now?”",
              "“So that is three invoices, nothing since March 2026, around one hundred and eighty thousand euros. Have I got that right?”",
            ],
          },
          why: {
            ar: "أربعة أدوار قصيرة تُنتج أربع معلومات قابلة للاستعمال. كل سؤال يحمل فكرة واحدة، والدور الأخير يعيد ما سُمع لتصحيحه الآن لا بعد شهر.",
            en: "Four short turns produce four usable facts. Each question carries one idea, and the last turn plays back what was heard so it can be corrected now rather than in a month.",
          },
        },
        weak: {
          label: { ar: "سؤال واحد طويل مترجم عن العربية", en: "One long question translated from Arabic" },
          text: {
            ar: [
              "«I would like to ask you, if you allow me, about the subject of the problem which happened with the other party, and also I need to know the dates and the amounts and if there are any documents or correspondences between you, and also if you made any procedures until now, and what is your opinion about the reason of this problem?»",
            ],
            en: [
              "“I would like to ask you, if you allow me, about the subject of the problem which happened with the other party, and also I need to know the dates and the amounts and if there are any documents or correspondences between you, and also if you made any procedures until now, and what is your opinion about the reason of this problem?”",
            ],
          },
          why: {
            ar: "المستمع الإنجليزي لا يسمع تهذيباً بل يسمع ارتباكاً: خمسة أسئلة في نفَس واحد، فيجيب عن آخرها ويُهمل الأربعة الأولى. والمقدّمة «if you allow me» ترجمة حرفية لـ«إذا سمحت لي» وتُقرأ تردّداً. أضف خطأين متلازمين: «correspondences» تُستعمل بالإنجليزية بصيغة المفرد «correspondence»، و«made procedures» ترجمة حرفية لـ«اتّخذ إجراءات» والصواب «taken any steps».",
            en: "An English listener hears not politeness but confusion: five questions in one breath, so he answers the last and drops the first four. “If you allow me” is a word-for-word rendering that reads as hesitancy. Add two collocation errors: “correspondences” is uncountable in English, and “made procedures” is a literal rendering of an Arabic phrase — the English is “taken any steps”.",
          },
        },
      },
      { kind: "activity", id: "st.le.03.a1", activityId: "act.le.03.1", mode: "quick" },
      { kind: "activity", id: "st.le.03.a2", activityId: "act.le.03.2", mode: "quick" },
      { kind: "activity", id: "st.le.03.a3", activityId: "act.le.03.3", mode: "guided" },
      { kind: "activity", id: "st.le.03.a4", activityId: "act.le.03.4", mode: "guided" },
      { kind: "activity", id: "st.le.03.a5", activityId: "act.le.03.5", mode: "independent" },
      { kind: "activity", id: "st.le.03.a6", activityId: "act.le.03.6", mode: "independent" },
      { kind: "summary", id: "st.le.03.summary", summaryCardId: "card.le.03" },
      {
        kind: "apply_tomorrow",
        id: "st.le.03.apply",
        task: {
          ar: "اكتب خمسة أسئلة خلفية بالإنجليزية على بطاقة واحدة، سؤال واحد في كل سطر، واستعملها في مكالمتك القادمة.",
          en: "Write five English background questions on one card, one question per line, and use it on your next call.",
        },
        detail: {
          ar: "القاعدة الوحيدة: لا تنتقل إلى السطر التالي قبل أن تحصل على جواب للسطر الذي قبله. إن لم تحصل عليه، أعِد صياغة السؤال نفسه لا تضف سؤالاً جديداً.",
          en: "One rule: do not move to the next line until you have an answer to the one above it. If you do not get it, rephrase the same question rather than adding another.",
        },
      },
      {
        kind: "next_mission",
        id: "st.le.03.next",
        teaser: {
          ar: "الوحدة القادمة: ماذا تفعل بما سمعته. كيف تتحقّق من الوقائع بالإنجليزية بدل أن تقول «I understand» وتمضي.",
          en: "Next: what to do with what you heard. How to check facts in English instead of saying “I understand” and moving on.",
        },
      },
    ],
    activities: [
      {
        id: "act.le.03.1",
        kind: "listening",
        skillId: "skill.le-background-questions",
        stage: 2,
        weight: 1,
        prompt: {
          ar: "استمع إلى جواب الموكّلة. ما السؤال التالي الأفضل؟",
          en: "Listen to the client's answer. What is the best next question?",
        },
        context: {
          ar: ["الموكّلة: مي-لين تشن، مؤسِّسة شركة توزيع إلكترونيات في تايبيه، نزاع مع موزّع إقليمي."],
          en: [
            "Client: Mei-Lin Chen, founder of an electronics distribution company in Taipei, in dispute with a regional distributor.",
          ],
        },
        script: {
          ar: "Well, it's been going on for a while, honestly. We kept shipping because they always said the transfer was coming this week, then next week. I think the last payment was around the summer — maybe July, maybe August. My finance manager would know exactly.",
          en: "Well, it's been going on for a while, honestly. We kept shipping because they always said the transfer was coming this week, then next week. I think the last payment was around the summer — maybe July, maybe August. My finance manager would know exactly.",
        },
        transcript: {
          ar: "النصّ: “Well, it's been going on for a while, honestly. We kept shipping because they always said the transfer was coming this week, then next week. I think the last payment was around the summer — maybe July, maybe August. My finance manager would know exactly.” — الترجمة: «الحقيقة أن الأمر مستمرّ منذ فترة. واصلنا الشحن لأنهم كانوا يقولون دائماً إن التحويل سيصل هذا الأسبوع ثم الأسبوع المقبل. أظنّ أن آخر دفعة كانت حوالى الصيف — ربّما تموز، ربّما آب. مديري المالي يعرف بالضبط.»",
          en: "“Well, it's been going on for a while, honestly. We kept shipping because they always said the transfer was coming this week, then next week. I think the last payment was around the summer — maybe July, maybe August. My finance manager would know exactly.”",
        },
        accessibleAlternative: {
          ar: "يمكنك قراءة النصّ المكتوب كاملاً بدل الاستماع؛ السؤال يُجاب من النصّ نفسه.",
          en: "You can read the full transcript instead of listening; the question is answerable from the text alone.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«Let's leave the exact date to your finance manager — could you ask him for the bank date today? Meanwhile: what did you keep shipping after that payment, and what is it worth?»",
              en: "“Let's leave the exact date to your finance manager — could you ask him for the bank date today? Meanwhile: what did you keep shipping after that payment, and what is it worth?”",
            },
            correct: true,
            rationale: {
              ar: "أنت لا تجادل ذاكرتها بل تحيل التاريخ إلى مصدره الصحيح، وتستثمر الوقت في المعلومة التي تملكها هي وحدها: البضاعة التي شُحنت بعد آخر دفعة. هذه الشحنات هي التي تحدّد حجم المطالبة، وهي الجزء الذي ينساه الجميع في المكالمة الأولى.",
              en: "You are not arguing with her memory; you are routing the date to its proper source, and spending the call on what only she holds: the goods shipped after the last payment. Those shipments size the claim, and they are the part everyone forgets on a first call.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«July or August? I need the exact date, please — I can't do anything without it.»",
              en: "“July or August? I need the exact date, please — I can't do anything without it.”",
            },
            rationale: {
              ar: "الضغط على ذاكرة لا تملك الجواب يُنتج تخميناً سيدخل ملفّك كأنه واقعة. والصياغة «I can't do anything without it» تنقل عجزك إلى الموكّلة في مكالمة أولى. التاريخ موجود في كشف الحساب المصرفي، فاطلبه من مصدره.",
              en: "Pressing a memory that does not hold the answer produces a guess that will enter your file as a fact. And “I can't do anything without it” hands your helplessness to the client on a first call. The date is in the bank statement; ask the source.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«I see. And in your opinion, why do you think they stopped paying you?»",
              en: "“I see. And in your opinion, why do you think they stopped paying you?”",
            },
            rationale: {
              ar: "سؤال عن الرأي في مرحلة جمع الوقائع. جوابه انطباع لا يُبنى عليه إجراء، ويستهلك دقيقتين من مكالمة قصيرة. أجّل السبب إلى ما بعد الوقائع والمستندات.",
              en: "An opinion question in the fact-gathering phase. The answer is an impression no step can be built on, and it burns two minutes of a short call. Leave the “why” until after the facts and the documents.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«Don't worry about the dates. If they haven't paid since the summer we can file a case on them straight away.»",
              en: "“Don't worry about the dates. If they haven't paid since the summer we can file a case on them straight away.”",
            },
            rationale: {
              ar: "ثلاثة أخطاء في سطر: التواريخ هي ما تُبنى عليه المهل والتقادم، فلا يُقال عنها «لا تقلقي»؛ والوعد بإجراء فوري قبل رؤية العقد؛ وأخيراً الخطأ اللغوي «file a case on them» — الصواب «file a claim against them»، وهو خطأ حرف جرّ يكشف نفسه فوراً أمام محامٍ مقابل.",
              en: "Three errors in one line: dates drive deadlines and limitation, so they are not something to wave away; a promise of immediate action before you have seen the contract; and the collocation slip “file a case on them” — it is “file a claim against them”, a preposition error that announces itself instantly to opposing counsel.",
            },
          },
        ],
      },
      {
        id: "act.le.03.2",
        kind: "fill_blank",
        skillId: "skill.le-background-questions",
        secondarySkillIds: ["skill.le-explaining-next-steps"],
        stage: 2,
        weight: 1,
        prompt: {
          ar: "أكمل الجملة بحروف الجرّ الصحيحة في المتلازمات القانونية. البدائل الخاطئة هي الأخطاء الأكثر تكراراً عند المحامين العرب.",
          en: "Complete the sentence with the right prepositions in these legal collocations. The wrong options are the errors Arab lawyers make most often.",
        },
        hint: {
          ar: "احفظ المتلازمة كاملة كما تُحفظ عبارة واحدة: claim against · apply for · rely on.",
          en: "Learn the whole collocation as one phrase: claim against · apply for · rely on.",
        },
        template: {
          ar: "«If they do not pay, we can file a claim {{0}} the distributor, apply {{1}} an attachment order, and rely {{2}} the delivery notes as proof.» — إن لم يدفعوا، نستطيع رفع دعوى على الموزّع، وطلب حجز تحفّظي، والاستناد إلى بيانات التسليم كدليل.",
          en: "“If they do not pay, we can file a claim {{0}} the distributor, apply {{1}} an attachment order, and rely {{2}} the delivery notes as proof.”",
        },
        blanks: [
          {
            id: "b0",
            options: [
              { ar: "on (على)", en: "on" },
              { ar: "against (ضدّ)", en: "against" },
              { ar: "to (إلى)", en: "to" },
            ],
            answerIndex: 1,
            rationale: {
              ar: "بالعربية «نرفع دعوى على فلان»، فينتقل حرف «على» إلى الإنجليزية تلقائياً. الصواب «file a claim against». و«file a claim to» تعني عملياً تقديم مطالبة إلى جهة، وهو معنى مختلف تماماً.",
              en: "In Arabic you file a case “on” someone, and the preposition travels straight into English. The English is “file a claim against”. “File a claim to” means submitting a claim to a body — a different act altogether.",
            },
          },
          {
            id: "b1",
            options: [
              { ar: "for (لأجل)", en: "for" },
              { ar: "to (إلى)", en: "to" },
              { ar: "on (على)", en: "on" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "«apply for» = تطلب شيئاً (أمراً، ترخيصاً، تمديداً). «apply to» تُستعمل مع الجهة لا مع الطلب: «apply to the court for an order». الخلط بينهما يجعل الجملة تقول إنك تتقدّم إلى الأمر نفسه.",
              en: "“Apply for” takes the thing you want (an order, a licence, an extension). “Apply to” takes the body: “apply to the court for an order”. Mixing them makes the sentence say you are applying to the order itself.",
            },
          },
          {
            id: "b2",
            options: [
              { ar: "to (إلى)", en: "to" },
              { ar: "at (عند)", en: "at" },
              { ar: "on (على)", en: "on" },
            ],
            answerIndex: 2,
            rationale: {
              ar: "«rely on» ثابتة. «rely to» ترجمة حرفية لـ«نستند إلى» ولا وجود لها في الإنجليزية، وهي من أكثر الأخطاء التي تجعل مذكّرة مكتوبة بإنجليزية سليمة تبدو مترجمة.",
              en: "“Rely on” is fixed. “Rely to” is a literal rendering of the Arabic and does not exist in English; it is one of the errors that makes an otherwise sound written submission read as a translation.",
            },
          },
        ],
      },
      {
        id: "act.le.03.3",
        kind: "best_response",
        skillId: "skill.le-background-questions",
        stage: 2,
        weight: 1,
        prompt: {
          ar: "الموكّلة تقول: «It's complicated — honestly, I'd rather just send you everything by email and you read it.» ما أفضل ردّ بالإنجليزية؟",
          en: "The client says: “It's complicated — honestly, I'd rather just send you everything by email and you read it.” What is the best English reply?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«Please do send it — that will save us both time. While we're on the call, though, may I ask you three short questions the documents won't answer?»",
              en: "“Please do send it — that will save us both time. While we're on the call, though, may I ask you three short questions the documents won't answer?”",
            },
            correct: true,
            rationale: {
              ar: "قبلت طلبها وحافظت على المكالمة في جملة واحدة. الحدّ «ثلاثة أسئلة قصيرة» يجعل الطلب محتملاً، و«the documents won't answer» يبرّر السؤال بدل أن يبدو إصراراً. أنت أيضاً تحمي نفسك من مئة صفحة تصلك بلا سياق.",
              en: "You accepted her request and kept the call alive in one sentence. The cap — three short questions — makes the ask bearable, and “the documents won't answer” justifies it instead of sounding like insistence. You also protect yourself from a hundred pages arriving with no context.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«Of course, no problem. Send everything and I will study it and revert to you.»",
              en: "“Of course, no problem. Send everything and I will study it and revert to you.”",
            },
            rationale: {
              ar: "تنازلت عن المكالمة كلّها. المستندات لا تقول لك ما لم يُكتب: ما أُرسل شفهياً، ومن قرّر، ولماذا استمرّ الشحن. أضف أن «revert to you» ترجمة شائعة تُستعمل في المنطقة لكنها تُقرأ عند الأوروبي والأميركي غريبة؛ الأوضح «I'll come back to you».",
              en: "You have given up the whole call. Documents will not tell you what was never written: what was said verbally, who decided, why shipping continued. Also, “revert to you” is common regionally but reads oddly to European and American ears; “I'll come back to you” is clearer.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«I'm afraid that's not how it works. I need to hear the facts from you first before I can look at any document.»",
              en: "“I'm afraid that's not how it works. I need to hear the facts from you first before I can look at any document.”",
            },
            rationale: {
              ar: "الجوهر صحيح والصياغة تكلّفك الموكّلة. «That's not how it works» تُسمع تصحيحاً فوقياً في أول مكالمة، وهي بالضبط نوع الصياغة التي تخرج من محامٍ يترجم حزماً عربياً إلى إنجليزية حادّة. احتفظ بالمضمون وليّن الشكل.",
              en: "The substance is right and the wording costs you the client. “That's not how it works” lands as a correction from above on a first call — exactly the phrasing produced when Arabic firmness is translated into blunt English. Keep the substance, soften the form.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«As you wish. Just tell me: do you think you will win this case if we go to court?»",
              en: "“As you wish. Just tell me: do you think you will win this case if we go to court?”",
            },
            rationale: {
              ar: "سؤال يدعو الموكّلة إلى توقّع نتيجة، وأنت من سيُحاسَب على هذا التوقّع لاحقاً. و«As you wish» ترجمة لـ«كما تريدين» تُقرأ بالإنجليزية استسلاماً بارداً أو سخريةً خفيفة، لا مجاملةً.",
              en: "A question that invites the client to predict an outcome you will later be held to. And “As you wish” — a rendering of the Arabic — reads in English as cold surrender or faint sarcasm, not courtesy.",
            },
          },
        ],
      },
      {
        id: "act.le.03.4",
        kind: "pronunciation",
        skillId: "skill.le-background-questions",
        stage: 2,
        weight: 1,
        grading: "self_report",
        target: "receipt",
        ipa: "/rɪˈsiːt/",
        prompt: {
          ar: "قل الكلمة ثم الجملة. مقطعان فقط والنبر على الثاني، والحرف p لا يُنطق إطلاقاً. الهدف أن تُفهم من المرّة الأولى؛ اللكنة لا تُقيَّم.",
          en: "Say the word, then the sentence. Two syllables, stress on the second, and the “p” is silent. The goal is being understood first time; accent is not assessed.",
        },
        meaning: {
          ar: "«إيصال» أو «استلام». تُستعمل في المستند («a receipt for the payment») وفي واقعة الاستلام («within three days of receipt»).",
          en: "A receipt as a document (“a receipt for the payment”), and receipt as the fact of receiving (“within three days of receipt”).",
        },
        exampleSentence: {
          ar: "«Do you have a receipt for that transfer, and can you confirm the date of receipt?» — هل لديك إيصال لذلك التحويل، وهل تؤكّد تاريخ الاستلام؟",
          en: "“Do you have a receipt for that transfer, and can you confirm the date of receipt?”",
        },
        hint: {
          ar: "الزلّة الشائعة نطق الـ p («ri-SEPT») فتُسمع كلمة أخرى قريبة من «recept». احذف الصوت تماماً: ri-SEET.",
          en: "The common slip is sounding the “p” (“ri-SEPT”), which lands as a different word. Drop the sound entirely: ri-SEET.",
        },
        accessibleAlternative: {
          ar: "يمكنك كتابة الكلمة صوتياً وتحديد الحرف الصامت وموضع النبر بدل النطق.",
          en: "You can write the word phonetically and mark the silent letter and the stress instead of speaking.",
        },
      },
      {
        id: "act.le.03.5",
        kind: "short_written",
        skillId: "skill.le-background-questions",
        secondarySkillIds: ["skill.le-clarifying-facts"],
        stage: 2,
        weight: 2,
        grading: "ai_rubric",
        rubricId: "rubric.legal-english-written.v1",
        minChars: 220,
        prompt: {
          ar: "اكتب بالإنجليزية خمسة أسئلة خلفية ترسلها إلى الموكّلة قبل المكالمة، مرتّبة من المفتوح إلى المحدّد. سؤال واحد في كل سطر، وبلا مصطلحات غير مشروحة.",
          en: "Write five English background questions to send the client before the call, ordered from open to specific. One question per line, and no unexplained terminology.",
        },
        context: {
          ar: [
            "الموكّلة: مي-لين تشن، مؤسِّسة شركة توزيع إلكترونيات في تايبيه.",
            "الموضوع: موزّع إقليمي توقّف عن السداد، والشحن استمرّ بعد التوقّف.",
            "ما تعرفه: لا شيء موثّق. لم ترَ العقد ولا الفواتير ولا المراسلات.",
            "الهدف: أن تصل إلى المكالمة ومعك وقائع لا انطباعات.",
          ],
          en: [
            "Client: Mei-Lin Chen, founder of an electronics distribution company in Taipei.",
            "Matter: a regional distributor has stopped paying, and shipping continued after they stopped.",
            "What you know: nothing documented. You have not seen the contract, the invoices or the correspondence.",
            "Goal: arrive at the call with facts rather than impressions.",
          ],
        },
        modelAnswer: {
          ar: [
            "«1. Could you take me through what happened, starting from the first sign that payments were slowing?»",
            "«2. When did you last receive a payment from them, and what does your bank statement show as the date?»",
            "«3. How many invoices are unpaid now, and what is the total?»",
            "«4. What have you sent them since the payments stopped, and what have they sent you? Emails count.»",
            "«5. What does your agreement say about disputes — which country's courts or which arbitration body? If you are not sure, please just send me the agreement and I will look.»",
          ],
          en: [
            "“1. Could you take me through what happened, starting from the first sign that payments were slowing?”",
            "“2. When did you last receive a payment from them, and what does your bank statement show as the date?”",
            "“3. How many invoices are unpaid now, and what is the total?”",
            "“4. What have you sent them since the payments stopped, and what have they sent you? Emails count.”",
            "“5. What does your agreement say about disputes — which country's courts or which arbitration body? If you are not sure, please just send me the agreement and I will look.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«Kindly be informed that in order to proceed with your esteemed matter, we require you to provide us with a full and detailed narration of all the facts, circumstances, dates, amounts, correspondences and procedures taken by you until this date, as well as your opinion regarding the legal position of the counterparty and the possibility of recovering the amounts due.»",
            ],
            en: [
              "“Kindly be informed that in order to proceed with your esteemed matter, we require you to provide us with a full and detailed narration of all the facts, circumstances, dates, amounts, correspondences and procedures taken by you until this date, as well as your opinion regarding the legal position of the counterparty and the possibility of recovering the amounts due.”",
            ],
          },
          whatIsWrong: {
            ar: "سؤال واحد بطول أربعة أسطر لن يُجاب. المشكلات: صيغة الأمر المغلّفة («we require you to provide us») تُقرأ استدعاءً لا طلباً؛ ومجاملة «esteemed matter» مترجمة حرفياً؛ و«correspondences» و«procedures taken» متلازمتان خاطئتان (الصواب correspondence و steps taken)؛ وأخيراً طلب رأي الموكّلة في «الموقف القانوني» يعكس الأدوار — أنت من يُسأل عن القانون، وهي من تُسأل عن الوقائع.",
            en: "One four-line question that will never be answered. The faults: a wrapped-up command (“we require you to provide us”) that reads as a summons, not a request; the literally translated “esteemed matter”; the wrong collocations “correspondences” and “procedures taken” (English: correspondence, steps taken); and asking the client for her view on the “legal position”, which reverses the roles — you are asked about the law, she is asked about the facts.",
          },
        },
      },
      {
        id: "act.le.03.6",
        kind: "reflection",
        skillId: "skill.le-background-questions",
        stage: 2,
        weight: 1,
        grading: "self_report",
        prompt: {
          ar: "في آخر مكالمة إنجليزية أجريتها: كم سؤالاً ركّبت في جملة واحدة لأن الصمت بلغة ثانية كان محرجاً؟ وأي معلومة ضاعت بسبب ذلك؟",
          en: "On your last English call: how many questions did you stack into one sentence because silence in a second language felt awkward? Which piece of information did that cost you?",
        },
        followUp: {
          ar: "الصمت بعد السؤال ليس فراغاً بل ضغط مهذّب يملؤه الموكّل بمعلومة. جرّب غداً أن تعدّ إلى ثلاثة قبل أن تتكلّم بعد سؤالك.",
          en: "The silence after a question is not a gap; it is polite pressure that the client fills with information. Tomorrow, count to three before you speak again after asking.",
        },
      },
    ],
    summaryCard: {
      id: "card.le.03",
      title: {
        ar: "الأسئلة الخلفية: قمع لا شبكة",
        en: "Background questions: a funnel, not a net",
      },
      whatYouLearned: {
        ar: [
          "سؤال واحد في الدور الواحد. تركيب الأسئلة يُنتج جواباً واحداً عن آخرها فقط.",
          "الترتيب مقصود: افتح، ثم ضيّق، ثم اطلب الرقم، ثم أعِده للتأكيد.",
          "المتلازمات بحروفها: claim against · apply for · rely on · comply with · in accordance with.",
          "«They stopped paying in March» حدث منتهٍ، و«they have not paid since March» حالة قائمة. الفرق يغيّر النصيحة.",
          "«ماذا أرسلتم وماذا وصلكم؟» سؤال يكشف أكثر من أي سؤال عن الرأي أو السبب.",
        ],
        en: [
          "One question per turn. Stacking questions gets you one answer, to the last one only.",
          "The order is deliberate: open, narrow, ask for the number, repeat it back.",
          "Collocations with their prepositions: claim against · apply for · rely on · comply with · in accordance with.",
          "“They stopped paying in March” is a finished event; “they have not paid since March” is a live state. The difference changes the advice.",
          "“What have you sent, and what have you received?” uncovers more than any question about opinions or causes.",
        ],
      },
      framework: {
        name: {
          ar: "قمع أيجور للأسئلة: افتح · ضيّق · رقّم · أكّد",
          en: "The AIJUR Question Funnel: Open · Narrow · Number · Confirm",
        },
        steps: [
          {
            ar: "افتح: سؤال واحد واسع يبدأ من أول إشارة على المشكلة، ثم أنصت بلا مقاطعة.",
            en: "Open: one wide question starting from the first sign of trouble, then listen without interrupting.",
          },
          {
            ar: "ضيّق: سؤال واحد يستهدف واقعة واحدة، ولا تُضف سؤالاً ثانياً قبل الجواب.",
            en: "Narrow: one question aimed at one fact, and add nothing until it is answered.",
          },
          {
            ar: "رقّم: اطلب العدد والمبلغ والتاريخ صراحةً؛ لا تستنتج رقماً أبداً.",
            en: "Number: ask expressly for the count, the amount and the date; never infer a figure.",
          },
          {
            ar: "أكّد: أعِد ما سمعته بجملة واحدة واطلب التصحيح الآن.",
            en: "Confirm: play it back in one sentence and invite the correction now.",
          },
        ],
      },
      rememberThis: {
        ar: "السؤال القصير ليس ضعفاً في اللغة، بل هو الشكل الذي يستعمله المحامي الواثق في أي لغة.",
        en: "A short question is not weak English; it is the form a confident lawyer uses in any language.",
      },
      useItTomorrow: {
        ar: "قبل مكالمتك القادمة اكتب خمسة أسئلة، سؤالاً في كل سطر، ولا تنتقل إلى سطر قبل أن تحصل على جواب لسابقه.",
        en: "Before your next call write five questions, one per line, and do not move down a line until the one above it is answered.",
      },
      phrases: [
        {
          en: "Can you take me through what happened, starting from the first sign of a problem?",
          ar: "سؤال افتتاحي واسع يبدأ من أول قلق لا من أول مستند، وهو ما يتذكّره الموكّل فعلاً.",
          register: "neutral",
        },
        {
          en: "Would you be kind enough to talk me through the sequence of events?",
          ar: "الصيغة الرسمية للسؤال نفسه، مناسبة لمستشار قانوني أو موكّل يتوقّع لغة متحفّظة.",
          register: "formal",
        },
        {
          en: "Talk me through it from the beginning.",
          ar: "الصيغة البسيطة للسؤال نفسه، مناسبة لمؤسِّس مباشر يكره المقدّمات.",
          register: "plain",
        },
        {
          en: "When did you last receive a payment from them?",
          ar: "سؤال تضييق يستهدف واقعة واحدة قابلة للتحقّق من كشف الحساب.",
          register: "neutral",
        },
        {
          en: "How many invoices are outstanding, and what is the total?",
          ar: "طلب صريح للعدد والمبلغ، بدل استنتاجهما من كلام عام.",
          register: "neutral",
        },
        {
          en: "What have you sent them so far, and what have they sent you?",
          ar: "السؤال الذي يكشف الرسائل المرسَلة بلا استشارة، وهي أخطر ما يظهر متأخّراً.",
          register: "neutral",
        },
        {
          en: "Do you have that in writing?",
          ar: "أقصر سؤال يفصل بين الواقعة الموثّقة وبين ما قيل شفهياً.",
          register: "plain",
        },
        {
          en: "May I ask what the agreement says about disputes?",
          ar: "سؤال رسمي عن بند النزاعات، وهو ما يحدّد المسار كلّه قبل أي خطّة.",
          register: "formal",
        },
        {
          en: "I'd rather take one question at a time, if that's all right.",
          ar: "صيغة مهذّبة تعيد ضبط إيقاع المكالمة حين يتشعّب الكلام.",
          register: "plain",
        },
      ],
    },
  },
  // =========================================================================
  // unit.le.04 — Clarifying Facts and Checking Understanding
  // =========================================================================
  {
    id: "unit.le.04",
    chapterId: "ch.le.getting-the-facts",
    order: 4,
    title: {
      ar: "التحقّق من الوقائع والتأكّد من الفهم بالإنجليزية",
      en: "Clarifying Facts and Checking Understanding",
    },
    subtitle: {
      ar: "أن تعيد ما سمعته بكلماتك، بدل أن تقول I understand وتمضي",
      en: "Saying it back in your own words, instead of saying “I understand” and moving on",
    },
    primarySkillId: "skill.le-clarifying-facts",
    skillIds: [
      "skill.le-clarifying-facts",
      "skill.le-background-questions",
      "skill.le-explaining-next-steps",
    ],
    stage: 3,
    estimatedMinutes: 12,
    targetLevel: 3,
    sourceIds: [
      "src.client-centered-law-firm",
      "src.thinking-like-a-lawyer",
      "src.legal-analyst",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
    steps: [
      {
        kind: "hook",
        id: "st.le.04.hook",
        text: {
          ar: "«I understand» ليست تحقّقاً من الفهم. هي إذن للطرف الآخر بأن يتابع، وإيصال استلام لشيء لم تفهمه بعد.",
          en: "“I understand” is not a comprehension check. It is permission for the other side to carry on, and a receipt for something you have not yet understood.",
        },
      },
      {
        kind: "why_it_matters",
        id: "st.le.04.why",
        text: {
          ar: "رقم سُمع خطأً في مكالمة أولى يصبح فرضية في مذكّرة، ثم رقماً في مطالبة، ثم تصحيحاً محرجاً أمام الخصم. التحقّق يكلّف عشر ثوانٍ في وقته وشهراً إن تأخّر.",
          en: "A figure misheard on a first call becomes an assumption in a note, then a number in a claim, then an embarrassing correction in front of the other side. Checking costs ten seconds now and a month later.",
        },
      },
      {
        kind: "learning_goal",
        id: "st.le.04.goals",
        goals: {
          ar: [
            "تعيد الأرقام والتواريخ والأسماء بصياغتك وتطلب التصحيح، بدل الاكتفاء بـ«I understand».",
            "تفصل بالإنجليزية بين ما رآه الموكّل بنفسه وما استنتجه أو سمعه من غيره.",
            "تستعمل صيغ الاستدراك المهنية بدل الاعتذار عن لغتك.",
            "تضبط حروف الجرّ في متلازمات التحقّق: comply with · subject to · rely on · in accordance with.",
          ],
          en: [
            "Play numbers, dates and names back in your own words and invite correction, instead of “I understand”.",
            "Separate in English what the client saw himself from what he inferred or was told.",
            "Use professional repair phrases instead of apologising for your English.",
            "Control the prepositions in the collocations you check with: comply with · subject to · rely on · in accordance with.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "st.le.04.lesson",
        title: {
          ar: "خمس أدوات تحقّق تصلح في أي مكالمة",
          en: "Five checking tools that work on any call",
        },
        body: {
          ar: [
            "١. أعِد الرقم مجزّأً وببطء: «So that is three invoices, one hundred and eighty thousand euros, nothing since March — have I got that right?» الأرقام تُقال في مجموعات صغيرة لا في سلسلة واحدة.",
            "٢. اسأل عن مصدر كل واقعة: «Do we know that from the delivery notes, or from what the driver told you?» هذا السؤال يفصل الدليل عن الانطباع قبل أن يختلطا في ملفّك.",
            "٣. سمِّ ما تشكّ فيه بدل تعميم الشكّ: «Two things I want to be sure about: the date, and who signed.» التخصيص يجعل التحقّق تعاوناً لا استجواباً.",
            "٤. الاستدراك بلا اعتذار: «Sorry, could I go back one step?» أو «Let me make sure I follow you». احذف «my English is not good» نهائياً — فهي تنقل الشكّ من الجملة إلى شخصك.",
            "٥. الزمن يحسم المعنى: «They stopped answering in June» واقعة انتهت. «They have not answered since June» حالة قائمة اليوم. إن قلت الأولى وأنت تقصد الثانية، تسمع الموكّلة أن الأمر أُغلق.",
            "قاعدة ختامية: أنهِ كل مقطع صعب بجملة تحقّق واحدة. المكالمة التي لا تتخلّلها ثلاث جمل تحقّق ليست مكالمة وقائع، بل استماعاً مهذّباً.",
          ],
          en: [
            "1. Play the numbers back in chunks and slowly: “So that is three invoices, one hundred and eighty thousand euros, nothing since March — have I got that right?” Figures go in small groups, never in one string.",
            "2. Ask for the source of every fact: “Do we know that from the delivery notes, or from what the driver told you?” This separates evidence from impression before they merge in your file.",
            "3. Name what you doubt instead of doubting generally: “Two things I want to be sure about: the date, and who signed.” Specifying makes checking collaborative rather than an interrogation.",
            "4. Repair without apology: “Sorry, could I go back one step?” or “Let me make sure I follow you.” Delete “my English is not good” — it moves the doubt from the sentence onto you.",
            "5. Tense settles the meaning: “They stopped answering in June” is a closed event. “They have not answered since June” is a state that is still true. Say the first when you mean the second and the client hears that the matter is over.",
            "A closing rule: end every difficult stretch with one checking sentence. A call with no three checks in it is not a fact-gathering call; it is polite listening.",
          ],
        },
      },
      {
        kind: "visual",
        id: "st.le.04.visual",
        title: {
          ar: "ثلاث جمل تُقال بعد أن يصمت الموكّل",
          en: "Three sentences for the moment the client stops talking",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "“I understand.”", en: "“I understand.”" },
            detail: {
              ar: "لا تنقل أي معلومة إلى الموكّل عمّا فهمته فعلاً. تُغلق الموضوع وتبقي الخطأ حيّاً.",
              en: "Tells the client nothing about what you actually took in. It closes the topic and keeps the error alive.",
            },
            tone: "negative",
          },
          {
            label: {
              ar: "“Sorry, my English is not very good.”",
              en: "“Sorry, my English is not very good.”",
            },
            detail: {
              ar: "تحوّل مشكلة سماع رقم إلى شكّ في كفاءتك. لا محامٍ إنكليزي يقولها عن لغته الثانية.",
              en: "Turns a mishearing of one figure into doubt about your competence. No English-speaking lawyer says this about their second language.",
            },
            tone: "negative",
          },
          {
            label: {
              ar: "“Let me say that back to you — three invoices, since March, €180,000. Right?”",
              en: "“Let me say that back to you — three invoices, since March, €180,000. Right?”",
            },
            detail: {
              ar: "تُظهر ما فهمته بالضبط، وتدعو إلى التصحيح الآن، وتنتهي بسؤال قصير يسهل الردّ عليه.",
              en: "Shows exactly what you took in, invites the correction now, and ends in a short question that is easy to answer.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "st.le.04.worked",
        strong: {
          label: { ar: "تحقّق يكشف خطأً قبل أن يكلّف", en: "A check that catches the error while it is cheap" },
          text: {
            ar: [
              "«Let me say that back to you, and tell me where I've got it wrong.»",
              "«You signed in February, the first shipment left in March, and they stopped answering emails in June.»",
              "«On the new warehouse — do we know that from a document, or is that what your sales manager was told?»",
              "«Good. So for now I'll treat the warehouse as unconfirmed, and I'll rely on the delivery notes for the shipment dates.»",
            ],
            en: [
              "“Let me say that back to you, and tell me where I've got it wrong.”",
              "“You signed in February, the first shipment left in March, and they stopped answering emails in June.”",
              "“On the new warehouse — do we know that from a document, or is that what your sales manager was told?”",
              "“Good. So for now I'll treat the warehouse as unconfirmed, and I'll rely on the delivery notes for the shipment dates.”",
            ],
          },
          why: {
            ar: "الإعادة تُظهر ما فُهم بالضبط، والسؤال عن المصدر يفصل الدليل عن الشائعة، والجملة الأخيرة تُعلن كيف ستُستعمل كل معلومة. الموكّلة تستطيع أن تصحّح الآن، وهذا كل الغرض.",
            en: "The playback shows exactly what was understood, the source question separates evidence from rumour, and the last sentence declares how each item will be used. The client can correct now, which is the whole point.",
          },
        },
        weak: {
          label: { ar: "فهم مُفترَض واعتذار في غير محلّه", en: "Assumed understanding and a misplaced apology" },
          text: {
            ar: [
              "«Yes, yes, I understand, I understand completely.»",
              "«Sorry, my English is not so good, please can you repeat all what you said from the beginning?»",
              "«Okay, so they opened a warehouse with the competitor, this is very good for our case, we will use it against them.»",
            ],
            en: [
              "“Yes, yes, I understand, I understand completely.”",
              "“Sorry, my English is not so good, please can you repeat all what you said from the beginning?”",
              "“Okay, so they opened a warehouse with the competitor, this is very good for our case, we will use it against them.”",
            ],
          },
          why: {
            ar: "ثلاث خسائر متتابعة. «I understand completely» تقول إنك لم تفهم لأن أحداً لا يفهم كل شيء من المرّة الأولى. ثم طلب الإعادة من البداية بعد الاعتذار عن اللغة يضاعف الكلفة: كان يكفي «could I go back to the March date?». وأخيراً حوّلت كلاماً سمعه مدير المبيعات إلى واقعة سيُبنى عليها إجراء — وهذا هو المكان الذي تولد فيه المفاجآت أمام الخصم. لاحظ أيضاً «repeat all what you said»؛ الصواب «repeat everything you said».",
            en: "Three losses in a row. “I understand completely” signals that you did not, because nobody understands everything first time. Then asking for the whole thing again, after apologising for your English, doubles the cost — “could I go back to the March date?” would have done it. And finally you have promoted something a sales manager was told into a fact that a step will be built on; this is where surprises in front of the other side are born. Note too “repeat all what you said”; the English is “repeat everything you said”.",
          },
        },
      },
      { kind: "activity", id: "st.le.04.a1", activityId: "act.le.04.1", mode: "quick" },
      { kind: "activity", id: "st.le.04.a2", activityId: "act.le.04.2", mode: "quick" },
      { kind: "activity", id: "st.le.04.a3", activityId: "act.le.04.3", mode: "guided" },
      { kind: "activity", id: "st.le.04.a4", activityId: "act.le.04.4", mode: "guided" },
      { kind: "activity", id: "st.le.04.a5", activityId: "act.le.04.5", mode: "independent" },
      { kind: "activity", id: "st.le.04.a6", activityId: "act.le.04.6", mode: "independent" },
      { kind: "summary", id: "st.le.04.summary", summaryCardId: "card.le.04" },
      {
        kind: "apply_tomorrow",
        id: "st.le.04.apply",
        task: {
          ar: "في مكالمتك الإنجليزية القادمة، أعِد كل رقم وتاريخ واسم مرّة واحدة بصوتك قبل أن تدوّنه.",
          en: "On your next English call, say every figure, date and name back once before you write it down.",
        },
        detail: {
          ar: "وسجّل بعد المكالمة كم تصحيحاً تلقّيت. كل تصحيح هو خطأ مُنع من دخول الملف، لا علامة ضعف.",
          en: "Afterwards, count the corrections you received. Each one is an error kept out of the file, not a mark against you.",
        },
      },
      {
        kind: "next_mission",
        id: "st.le.04.next",
        teaser: {
          ar: "الوحدة القادمة: بعد أن جمعت الوقائع، كيف تشرح الخطوات التالية بإنجليزية بسيطة يعيدها الموكّل بكلماته.",
          en: "Next: with the facts gathered, how to explain the next steps in plain English the client can repeat back in his own words.",
        },
      },
    ],
    activities: [
      {
        id: "act.le.04.1",
        kind: "listening",
        skillId: "skill.le-clarifying-facts",
        stage: 3,
        weight: 1,
        prompt: {
          ar: "استمع إلى الموكّلة. أي عنصر ممّا قالته لا يجوز أن تعامله كواقعة ثابتة؟",
          en: "Listen to the client. Which item in what she said may not yet be treated as an established fact?",
        },
        context: {
          ar: ["الموكّلة: كلاوديا فيريتّي، مؤسِّسة شركة إيطالية لاستيراد الأغذية، نزاع مع موزّع إقليمي."],
          en: [
            "Client: Claudia Ferretti, founder of an Italian food-import company, in dispute with a regional distributor.",
          ],
        },
        script: {
          ar: "So we signed in March — no, sorry, we signed in February and the first shipment left in March. They stopped answering emails in June. My sales manager says they have opened a new warehouse with our competitor, but I have not seen it myself.",
          en: "So we signed in March — no, sorry, we signed in February and the first shipment left in March. They stopped answering emails in June. My sales manager says they have opened a new warehouse with our competitor, but I have not seen it myself.",
        },
        transcript: {
          ar: "النصّ: “So we signed in March — no, sorry, we signed in February and the first shipment left in March. They stopped answering emails in June. My sales manager says they have opened a new warehouse with our competitor, but I have not seen it myself.” — الترجمة: «إذاً وقّعنا في آذار — لا، عفواً، وقّعنا في شباط وخرجت أول شحنة في آذار. توقّفوا عن الردّ على الرسائل في حزيران. مدير المبيعات عندي يقول إنهم فتحوا مستودعاً جديداً مع منافسنا، لكنّني لم أرَ ذلك بنفسي.»",
          en: "“So we signed in March — no, sorry, we signed in February and the first shipment left in March. They stopped answering emails in June. My sales manager says they have opened a new warehouse with our competitor, but I have not seen it myself.”",
        },
        accessibleAlternative: {
          ar: "يمكنك قراءة النصّ المكتوب كاملاً بدل الاستماع؛ السؤال يُجاب من النصّ نفسه.",
          en: "You can read the full transcript instead of listening; the question is answerable from the text alone.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "المستودع الجديد مع المنافس: معلومة منقولة عن مدير المبيعات ولم ترها الموكّلة بنفسها.",
              en: "The new warehouse with the competitor: reported by the sales manager and not seen by the client herself.",
            },
            correct: true,
            rationale: {
              ar: "الموكّلة نفسها وضعت التحفّظ في آخر جملتها، وهي إشارة يسهل أن تضيع في مكالمة سريعة بلغة ثانية. سجّلها كـ«to be verified»، واسأل عن مصدرها، ولا تبنِ عليها أي خطوة قبل التحقّق.",
              en: "The client flagged it herself in her last clause — the kind of signal that is easily lost on a fast call in a second language. Log it as “to be verified”, ask where it came from, and build no step on it until it is confirmed.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "تاريخ التوقيع: قالت آذار ثم صحّحت إلى شباط، فلا يمكن الاعتماد على أي منهما.",
              en: "The signature date: she said March, then corrected to February, so neither can be relied on.",
            },
            rationale: {
              ar: "التصحيح الذاتي ليس شكّاً بل دقّة. الجواب الصحيح هنا أن تعيد التاريخ للتأكيد («February for signature, March for the first shipment — yes?») وتطلب صورة صفحة التوقيع، لا أن تسقط المعلومتين معاً.",
              en: "A self-correction is precision, not doubt. The right response is to play the dates back (“February for signature, March for the first shipment — yes?”) and ask for the signature page, not to discard both facts.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "توقّفهم عن الردّ في حزيران: كلام عام لا يصلح كواقعة قانونية.",
              en: "Their silence from June: too general to serve as a legal fact.",
            },
            rationale: {
              ar: "هذه من أقوى الوقائع لديك لأنها قابلة للإثبات من صندوق بريد الموكّلة نفسه. اطلب سلسلة الرسائل بتواريخها بدل أن تستبعدها. والأدقّ أن تقولها بالمضارع التام: «they have not answered since June».",
              en: "This is one of your strongest facts precisely because it is provable from the client's own mailbox. Ask for the email chain with dates instead of setting it aside — and state it in the present perfect: “they have not answered since June”.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "خروج أول شحنة في آذار: معلومة تشغيلية لا أثر قانوني لها.",
              en: "The first shipment leaving in March: an operational detail with no legal effect.",
            },
            rationale: {
              ar: "بالعكس تماماً. تاريخ أول شحنة يحدّد بداية تنفيذ العقد، وقد يكون نقطة البداية لحساب المهل والفوائد. المعلومة التشغيلية في ملف تجاري هي غالباً المعلومة القانونية.",
              en: "Quite the opposite. The date of the first shipment marks the start of performance and may be the anchor for calculating deadlines and interest. In a commercial file the operational fact is usually the legal one.",
            },
          },
        ],
      },
      {
        id: "act.le.04.2",
        kind: "multiple_choice",
        skillId: "skill.le-clarifying-facts",
        stage: 3,
        weight: 1,
        prompt: {
          ar: "لم تسمع رقماً بوضوح في منتصف كلام الموكّلة. أي صيغة إنجليزية تستعمل؟",
          en: "You did not catch a figure in the middle of the client's turn. Which English form do you use?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«Sorry, could I go back one step? I want to be sure of the amount — was it eighteen thousand or eighty thousand?»",
              en: "“Sorry, could I go back one step? I want to be sure of the amount — was it eighteen thousand or eighty thousand?”",
            },
            correct: true,
            rationale: {
              ar: "استدراك مهني بلا اعتذار عن اللغة، وتحديد دقيق لما تريده، وعرض بديلين يجعل الجواب كلمة واحدة. عرض البديلين تحديداً هو ما يحلّ مشكلة teen/ty التي تُربك الأرقام في كل مكالمة هاتفية.",
              en: "A professional repair with no apology for your English, a precise statement of what you need, and two alternatives that reduce the answer to one word. Offering the two options is exactly what solves the teen/ty problem that garbles figures on every phone call.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«Sorry, sorry, my English — can you repeat everything from the beginning, please?»",
              en: "“Sorry, sorry, my English — can you repeat everything from the beginning, please?”",
            },
            rationale: {
              ar: "أنت تدفع كلفة عالية لمشكلة صغيرة: دقيقتان من وقت المكالمة، وشكّ في كفاءتك، ورقم ما زال غير مؤكّد لأن الإعادة الكاملة نادراً ما تكون حرفية. الاستدراك يكون نقطياً لا شاملاً.",
              en: "You are paying a high price for a small problem: two minutes of call time, doubt about your competence, and a figure still unconfirmed because a full repeat is rarely word for word. Repair the point, not the whole turn.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«I understand. So around twenty thousand, more or less — I will confirm it later from the invoices.»",
              en: "“I understand. So around twenty thousand, more or less — I will confirm it later from the invoices.”",
            },
            rationale: {
              ar: "أنت تخترع رقماً لتجنّب سؤال. «لاحقاً» هذه لا تأتي غالباً، والرقم المخترَع يدخل ملاحظاتك ثم مذكّرتك. سؤال واحد الآن أرخص من تصحيح أمام الخصم.",
              en: "You are inventing a figure to avoid asking. That “later” usually never comes, and the invented number goes into your notes and then into your note of advice. One question now is cheaper than a correction in front of the other side.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«Excuse me, you are speaking too fast for me. Please speak slowly.»",
              en: "“Excuse me, you are speaking too fast for me. Please speak slowly.”",
            },
            rationale: {
              ar: "الطلب مشروع لكن الصياغة تُلقي اللوم على الموكّلة وتُحرجها. البديل يحفظ الطرفين: «Could we slow down on the figures? I want to write them correctly.» — الطلب نفسه مع سبب مهني.",
              en: "The request is legitimate but the wording blames the client and embarrasses her. This keeps both sides intact: “Could we slow down on the figures? I want to write them correctly.” Same request, professional reason.",
            },
          },
        ],
      },
      {
        id: "act.le.04.3",
        kind: "fill_blank",
        skillId: "skill.le-clarifying-facts",
        stage: 3,
        weight: 1,
        prompt: {
          ar: "أكمل جملة التحقّق بحروف الجرّ الصحيحة. كل بديل خاطئ هنا مأخوذ من ترجمة حرفية شائعة.",
          en: "Complete the checking sentence with the right prepositions. Every wrong option here comes from a common literal translation.",
        },
        hint: {
          ar: "ثلاث متلازمات تُحفظ كوحدات: comply with · subject to · in accordance with.",
          en: "Three collocations learned as units: comply with · subject to · in accordance with.",
        },
        template: {
          ar: "«So, to confirm: they did not comply {{0}} the notice period, and any claim is subject {{1}} the arbitration clause, which we would run {{2}} the rules named in clause 21.» — إذاً، للتأكيد: هم لم يلتزموا بمهلة الإخطار، وأي مطالبة تخضع لشرط التحكيم، وسنسير بها وفقاً للقواعد المذكورة في البند 21.",
          en: "“So, to confirm: they did not comply {{0}} the notice period, and any claim is subject {{1}} the arbitration clause, which we would run {{2}} the rules named in clause 21.”",
        },
        blanks: [
          {
            id: "b0",
            options: [
              { ar: "to (إلى)", en: "to" },
              { ar: "with (مع)", en: "with" },
              { ar: "on (على)", en: "on" },
            ],
            answerIndex: 1,
            rationale: {
              ar: "«comply with» ثابتة. «comply to» ترجمة حرفية لـ«يمتثل إلى» وهي من أكثر الأخطاء ظهوراً في المراسلات المكتوبة بالإنجليزية في المنطقة، وتُقرأ فوراً كترجمة.",
              en: "“Comply with” is fixed. “Comply to” is a literal rendering of the Arabic and one of the most visible errors in English correspondence written in the region; it reads instantly as translation.",
            },
          },
          {
            id: "b1",
            options: [
              { ar: "of (لـ/من)", en: "of" },
              { ar: "for (لأجل)", en: "for" },
              { ar: "to (إلى/لـ)", en: "to" },
            ],
            answerIndex: 2,
            rationale: {
              ar: "«subject to» هي الصيغة الوحيدة الصحيحة، وهي من أكثر العبارات ورودًا في العقود الإنجليزية. «subject of» تعني «موضوع» وهو معنى مختلف تماماً يقلب الجملة.",
              en: "“Subject to” is the only correct form and one of the most frequent phrases in English contracts. “Subject of” means “the topic of” — a completely different sense that inverts the sentence.",
            },
          },
          {
            id: "b2",
            options: [
              { ar: "in accordance with (وفقاً لـ)", en: "in accordance with" },
              { ar: "in accordance to (وفقاً إلى)", en: "in accordance to" },
              { ar: "according with (بحسب مع)", en: "according with" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "الصيغتان الصحيحتان في الإنجليزية هما «in accordance with» و«according to»، ولا وجود لـ«in accordance to» ولا لـ«according with». الخلط بينهما ينشأ من محاولة ترجمة «وفقاً لـ» حرفاً بحرف.",
              en: "The two correct English forms are “in accordance with” and “according to”. “In accordance to” and “according with” do not exist. The confusion comes from translating the Arabic phrase word for word.",
            },
          },
        ],
      },
      {
        id: "act.le.04.4",
        kind: "pronunciation",
        skillId: "skill.le-clarifying-facts",
        stage: 3,
        weight: 1,
        grading: "self_report",
        target: "liability",
        ipa: "/ˌlaɪ.əˈbɪl.ə.ti/",
        prompt: {
          ar: "قل الكلمة ثم الجملة. خمسة مقاطع والنبر على المقطع الثالث BIL، وأول مقطع يُنطق «لاي» لا «لي». المعيار هو الفهم من المرّة الأولى؛ اللكنة لا تُقيَّم.",
          en: "Say the word, then the sentence. Five syllables, stress on the third — BIL — and the first syllable is “lie”, not “lee”. The measure is being understood first time; accent is not assessed.",
        },
        meaning: {
          ar: "«المسؤولية» بمعنى الالتزام القانوني بالتعويض أو الأداء. تختلف عن responsibility التي تصف الدور أو الواجب العملي.",
          en: "Legal responsibility to pay or to perform. Different from “responsibility”, which describes a role or a practical duty.",
        },
        exampleSentence: {
          ar: "«Before we talk about liability, I want to be sure of the facts.» — قبل أن نتحدّث عن المسؤولية، أريد أن أتأكّد من الوقائع.",
          en: "“Before we talk about liability, I want to be sure of the facts.”",
        },
        hint: {
          ar: "الزلّة الشائعة نطق أول مقطع «li» قصيراً فتصبح الكلمة غير مفهومة. قطّعها: lie-a-BIL-i-ty.",
          en: "The common slip is shortening the first syllable to “li”, which makes the word hard to catch. Beat it out: lie-a-BIL-i-ty.",
        },
        accessibleAlternative: {
          ar: "يمكنك تقطيع الكلمة كتابةً وتحديد موضع النبر بدل النطق، ثم تقييم وضوح التقطيع بنفسك.",
          en: "You can mark the syllables and the stress in writing instead of speaking, then self-assess the beats.",
        },
      },
      {
        id: "act.le.04.5",
        kind: "short_written",
        skillId: "skill.le-clarifying-facts",
        secondarySkillIds: ["skill.le-explaining-next-steps"],
        stage: 3,
        weight: 2,
        grading: "ai_rubric",
        rubricId: "rubric.legal-english-written.v1",
        minChars: 260,
        prompt: {
          ar: "اكتب بالإنجليزية رسالة تأكيد وقائع بعد المكالمة: ما فهمته، وما لم يتأكّد بعد، وما تحتاجه لتأكيده. لا تُبدِ رأياً في النتيجة.",
          en: "Write an English fact-confirmation email after the call: what you understood, what is not yet confirmed, and what you need to confirm it. Give no view on the outcome.",
        },
        context: {
          ar: [
            "الموكّلة: كلاوديا فيريتّي، مؤسِّسة شركة إيطالية لاستيراد الأغذية.",
            "ما قالته: التوقيع في شباط 2026، أول شحنة في آذار، انقطاع الردّ منذ حزيران.",
            "ما لم يتأكّد: مستودع جديد مع منافس، مصدره كلام مدير المبيعات.",
            "ما تحتاجه: نسخة الاتفاقية، وسلسلة الرسائل منذ أيار، وكشف الحساب لشهر حزيران.",
          ],
          en: [
            "Client: Claudia Ferretti, founder of an Italian food-import company.",
            "What she said: signature in February 2026, first shipment in March, no replies since June.",
            "Not confirmed: a new warehouse with a competitor, sourced from what the sales manager was told.",
            "What you need: a copy of the agreement, the email chain since May, and the June bank statement.",
          ],
        },
        modelAnswer: {
          ar: [
            "«Dear Ms Ferretti, thank you for your time this morning. Here is what I took from our call, so you can correct anything I have wrong.»",
            "«Confirmed by you: the agreement was signed in February 2026, the first shipment left in March 2026, and they have not replied to your emails since June 2026.»",
            "«Not yet confirmed: that they have opened a warehouse with a competitor. This came from your sales manager, so I will treat it as unverified until we see something in writing.»",
            "«To move forward I need three things: a copy of the agreement, the email chain from May onwards, and your June bank statement. Could you send them by Monday 15 June 2026?»",
            "«Once I have read them, I will write to you with the options and what each one would involve. I will not give you a view on the outcome before I have seen the disputes clause.»",
          ],
          en: [
            "“Dear Ms Ferretti, thank you for your time this morning. Here is what I took from our call, so you can correct anything I have wrong.”",
            "“Confirmed by you: the agreement was signed in February 2026, the first shipment left in March 2026, and they have not replied to your emails since June 2026.”",
            "“Not yet confirmed: that they have opened a warehouse with a competitor. This came from your sales manager, so I will treat it as unverified until we see something in writing.”",
            "“To move forward I need three things: a copy of the agreement, the email chain from May onwards, and your June bank statement. Could you send them by Monday 15 June 2026?”",
            "“Once I have read them, I will write to you with the options and what each one would involve. I will not give you a view on the outcome before I have seen the disputes clause.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«Dear Madam, further to our call, I confirm that I understood everything perfectly.»",
              "«As per your information, the distributor breached the contract since February and opened a warehouse with your competitor, which proves their bad faith. This is a strong point in our favour and we will use it against them.»",
              "«Kindly send the documents as soon as possible in order to proceed with the necessary legal procedures.»",
            ],
            en: [
              "“Dear Madam, further to our call, I confirm that I understood everything perfectly.”",
              "“As per your information, the distributor breached the contract since February and opened a warehouse with your competitor, which proves their bad faith. This is a strong point in our favour and we will use it against them.”",
              "“Kindly send the documents as soon as possible in order to proceed with the necessary legal procedures.”",
            ],
          },
          whatIsWrong: {
            ar: "المشكلة الأخطر أن معلومة غير مؤكّدة (المستودع) صارت واقعة، ثم صارت دليلاً على سوء نيّة، ثم صارت نقطة قوّة — ثلاث قفزات في جملة واحدة. يضاف إليها: «breached the contract since February» خطأ زمن يقلب المعنى (الصواب إمّا «has been in breach since February» وإمّا «breached the contract in February»)، و«Dear Madam» بلا اسم، و«as soon as possible» بلا تاريخ، و«the necessary legal procedures» عبارة لا تخبر الموكّلة بشيء عمّا سيحدث فعلاً.",
            en: "The worst fault: an unverified item (the warehouse) becomes a fact, then evidence of bad faith, then a strong point — three jumps in one sentence. Add to that “breached the contract since February”, a tense error that inverts the meaning (either “has been in breach since February” or “breached the contract in February”); “Dear Madam” with no name; “as soon as possible” with no date; and “the necessary legal procedures”, which tells the client nothing about what will actually happen.",
          },
        },
      },
      {
        id: "act.le.04.6",
        kind: "reflection",
        skillId: "skill.le-clarifying-facts",
        stage: 3,
        weight: 1,
        grading: "self_report",
        prompt: {
          ar: "متى قلت آخر مرّة «I understand» وأنت لم تكن متأكّداً؟ ما الذي منعك من طلب التوضيح: ضيق الوقت، أم الخوف من أن يُقرأ السؤال ضعفاً في الإنجليزية؟",
          en: "When did you last say “I understand” without being sure? What stopped you from asking: the clock, or the fear that the question would read as weak English?",
        },
        followUp: {
          ar: "اختر صيغة استدراك واحدة واحفظها حرفياً: «Sorry, could I go back one step?». الصيغة المحفوظة تُقال في الثانية التي تحتاجها، لا بعدها.",
          en: "Pick one repair phrase and learn it word for word: “Sorry, could I go back one step?” A memorised phrase arrives in the second you need it, not after.",
        },
      },
    ],
    summaryCard: {
      id: "card.le.04",
      title: {
        ar: "التحقّق: عشر ثوانٍ الآن أو شهر لاحقاً",
        en: "Checking: ten seconds now, or a month later",
      },
      whatYouLearned: {
        ar: [
          "«I understand» ليست تحقّقاً. التحقّق هو أن تعيد ما سمعته بكلماتك وتطلب التصحيح.",
          "الأرقام تُعاد في مجموعات صغيرة، والبديلان («eighteen or eighty?») يحلّان أغلب سوء السماع.",
          "اسأل عن مصدر كل واقعة: مستند، أم رؤية مباشرة، أم كلام منقول؟",
          "الاستدراك مهنة لا اعتذار: «could I go back one step?» بدل «my English is not good».",
          "زمن الفعل يقرّر إن كان الأمر منتهياً أو قائماً — وهو فرق يغيّر النصيحة كلّها.",
        ],
        en: [
          "“I understand” is not a check. Checking is saying it back in your own words and inviting correction.",
          "Figures go back in small groups, and offering two options (“eighteen or eighty?”) solves most mishearings.",
          "Ask for the source of every fact: a document, direct sight, or something reported.",
          "Repair is professional, not apologetic: “could I go back one step?” instead of “my English is not good”.",
          "The tense decides whether the matter is closed or live — a difference that changes the whole advice.",
        ],
      },
      framework: {
        name: {
          ar: "تحقّق أيجور الرباعي: أعِد · المصدر · افصل · أكّد",
          en: "The AIJUR Fact Check: Echo · Source · Split · Sign-off",
        },
        steps: [
          {
            ar: "أعِد: كرّر الأرقام والتواريخ والأسماء بصياغتك في مجموعات قصيرة.",
            en: "Echo: repeat figures, dates and names in your own words, in short groups.",
          },
          {
            ar: "المصدر: اسأل عن مصدر كل واقعة قبل أن تدوّنها.",
            en: "Source: ask where each fact comes from before you write it down.",
          },
          {
            ar: "افصل: ميّز في ملاحظاتك بين «مؤكّد» و«غير مؤكّد بعد»، وأعلن التمييز للموكّل.",
            en: "Split: mark your notes “confirmed” and “not yet confirmed”, and say the distinction out loud.",
          },
          {
            ar: "أكّد: أنهِ بجملة تلخّص المؤكّد وتطلب المستندات التي تحسم الباقي.",
            en: "Sign-off: close with a sentence that states what is confirmed and asks for the documents that settle the rest.",
          },
        ],
      },
      rememberThis: {
        ar: "التصحيح الذي يأتيك من الموكّل اليوم هو خطأ مُنع من دخول الملف، لا نقطة ضعف في إنكليزيتك.",
        en: "A correction from the client today is an error kept out of the file, not a mark against your English.",
      },
      useItTomorrow: {
        ar: "غداً، بعد أول رقم تسمعه بالإنجليزية، أعِده بصوتك قبل أن تكتبه. مرّة واحدة تكفي لتصير عادة.",
        en: "Tomorrow, after the first figure you hear in English, say it back before you write it. Once is enough to start the habit.",
      },
      phrases: [
        {
          en: "Let me say that back to you, and tell me where I've got it wrong.",
          ar: "جملة الإعادة الأساسية: تُظهر ما فهمته وتدعو إلى التصحيح فوراً.",
          register: "neutral",
        },
        {
          en: "If I have understood you correctly, the position is as follows.",
          ar: "الصيغة الرسمية للإعادة، مناسبة للمراسلة المكتوبة أو لمخاطَب قانوني.",
          register: "formal",
        },
        {
          en: "So — three invoices, nothing since March, one hundred and eighty thousand euros. Right?",
          ar: "الصيغة البسيطة للإعادة نفسها: أرقام مجزّأة وسؤال قصير يسهل الردّ عليه.",
          register: "plain",
        },
        {
          en: "Do we know that from a document, or is that what you were told?",
          ar: "سؤال المصدر الذي يفصل الدليل عن الانطباع قبل أن يختلطا في الملف.",
          register: "neutral",
        },
        {
          en: "Sorry, could I go back one step?",
          ar: "صيغة استدراك قصيرة تحلّ محلّ الاعتذار عن اللغة.",
          register: "plain",
        },
        {
          en: "May I take you back to the point about the notice?",
          ar: "الصيغة الرسمية للاستدراك نفسه، مع تحديد النقطة بدل تعميم الطلب.",
          register: "formal",
        },
        {
          en: "Was that eighteen thousand or eighty thousand?",
          ar: "عرض بديلين يحلّ مشكلة الأرقام المتشابهة في المكالمات الهاتفية.",
          register: "plain",
        },
        {
          en: "I'd rather be accurate than quick, so I will check that and come back to you today.",
          ar: "صيغة تشتري وقتاً بمهنية، وتربط التأجيل بموعد بدل تركه مفتوحاً.",
          register: "neutral",
        },
        {
          en: "Could we slow down on the figures? I want to write them correctly.",
          ar: "طلب إبطاء يحفظ ماء وجه الطرفين لأنه معلّل بسبب مهني لا بضعف لغوي.",
          register: "plain",
        },
        {
          en: "For now I will treat that as unconfirmed until we see it in writing.",
          ar: "إعلان صريح بأن معلومة منقولة لن تُبنى عليها خطوة قبل التوثيق.",
          register: "neutral",
        },
      ],
    },
  },
  // =========================================================================
  // unit.le.05 — Explaining Next Steps in Plain English
  //             (carries the chapter simulation: scn.le-explaining-process)
  // =========================================================================
  {
    id: "unit.le.05",
    chapterId: "ch.le.getting-the-facts",
    order: 5,
    title: {
      ar: "شرح الخطوات التالية بإنجليزية بسيطة",
      en: "Explaining Next Steps in Plain English",
    },
    subtitle: {
      ar: "أربع خطوات، وما يتوقّف عليه وقت كل خطوة، ثم يعيدها الموكّل بكلماته",
      en: "Four steps, what each one's timing depends on, and the client repeating them back",
    },
    primarySkillId: "skill.le-explaining-next-steps",
    skillIds: [
      "skill.le-explaining-next-steps",
      "skill.le-clarifying-facts",
      "skill.le-dates-deadlines",
    ],
    stage: 3,
    estimatedMinutes: 12,
    targetLevel: 3,
    sourceIds: [
      "src.legal-project-management",
      "src.client-centered-law-firm",
      "src.selling-the-invisible",
    ],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
    steps: [
      {
        kind: "hook",
        id: "st.le.05.hook",
        text: {
          ar: "المؤسِّس الذي يخرج من مكالمتك بأربع خطوات يستطيع تكرارها لشريكه، يعود إليك. الذي يخرج بثلاثة عشر مصطلحاً، يعود إلى محرّك البحث.",
          en: "The founder who leaves your call with four steps he can repeat to his co-founder comes back to you. The one who leaves with thirteen legal terms goes back to a search engine.",
        },
      },
      {
        kind: "why_it_matters",
        id: "st.le.05.why",
        text: {
          ar: "الشرح بالإنجليزية ليس اختبار مفردات بل اختبار ترتيب. والموكّل الذي لا يفهم الخطوات لا يطلب توضيحاً غالباً، بل يفترض أن كل شيء بيدك — ثم يحمّلك كل تأخير.",
          en: "Explaining in English is not a vocabulary test; it is a sequencing test. And a client who does not follow the steps rarely asks for clarification — he assumes it is all in your hands, then charges you with every delay.",
        },
      },
      {
        kind: "learning_goal",
        id: "st.le.05.goals",
        goals: {
          ar: [
            "تعلن عدد الخطوات قبل الشرح ثم تلتزم بالعدد.",
            "تشرح كل مصطلح إنجليزي عند أول ورود بجملة يومية واحدة لا تحتوي مصطلحاً آخر.",
            "تفصل صراحةً بين ما تسيطر عليه وما يعتمد على جهة أخرى، وتعطي مدى زمنياً بدل رقم واحد.",
            "تحوّل الحشو الرسمي إلى إنجليزية واضحة، وتمنع تحوّل التحفّظ العربي إلى وعد إنجليزي.",
          ],
          en: [
            "Announce how many steps there are before you explain, then keep to that number.",
            "Explain each English legal term at first use in one everyday sentence containing no second term.",
            "Draw an explicit line between what you control and what depends on others, and give a range instead of a single figure.",
            "Turn formal padding into clear English, and stop an Arabic hedge from becoming an English promise.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "st.le.05.lesson",
        title: {
          ar: "خمس قواعد لشرح إجراء بالإنجليزية",
          en: "Five rules for explaining a process in English",
        },
        body: {
          ar: [
            "١. أعلن الخريطة أولاً: «There are four steps. I'll give you all four, then the timing.» المستمع الذي يعرف العدد يتابع بدل أن يقلق.",
            "٢. مصطلح واحد في الجملة، ويُشرح فوراً بلغة يومية: «a memorandum of association — that's the document that says who owns the company and what it may do.» إن احتاج شرحك إلى مصطلح ثانٍ فقد ضاعفت المشكلة.",
            "٣. افصل ما تملكه عمّا لا تملكه: «Two of these steps are ours; two depend on the registry.» هذه الجملة تحميك لاحقاً أكثر من أي تحفّظ مكتوب.",
            "٤. مدى لا رقم، ومعه سببه: «Usually between two and four weeks, depending on how fast the registry returns the file.» الرقم الواحد يُسمع التزاماً.",
            "٥. أنهِ بأن يعيد هو: «Would you tell me the four steps back in your own words?» إعادته هي الدليل الوحيد على أن شرحك وصل، لا هزّة رأسه.",
            "الفخّ اللغوي الخاص: التحفّظ العربي («سنسعى»، «إن شاء الله») يُترجَم غالباً إلى «we will make sure» أو «we will guarantee». في العربية تحفّظ، وفي الإنجليزية وعد صريح تُحاسَب عليه. البديل: «I will do X by Thursday; the registry's part I cannot promise.»",
          ],
          en: [
            "1. Give the map first: “There are four steps. I'll give you all four, then the timing.” A listener who knows the number follows instead of worrying.",
            "2. One term per sentence, explained immediately in everyday words: “a memorandum of association — that's the document that says who owns the company and what it may do.” If your explanation needs a second term, you have doubled the problem.",
            "3. Separate what is yours from what is not: “Two of these steps are ours; two depend on the registry.” That sentence protects you later better than any written caveat.",
            "4. A range, not a figure, and the reason with it: “Usually between two and four weeks, depending on how fast the registry returns the file.” A single number is heard as a commitment.",
            "5. Close by having him repeat: “Would you tell me the four steps back in your own words?” His repetition is the only proof your explanation landed — a nod is not.",
            "The language trap: an Arabic hedge (“we will strive”, “God willing”) usually comes out as “we will make sure” or “we will guarantee”. A hedge in Arabic, an express promise in English. Use instead: “I will do X by Thursday; the registry's part I cannot promise.”",
          ],
        },
      },
      {
        kind: "visual",
        id: "st.le.05.visual",
        title: {
          ar: "كيف يُبنى شرح يُعاد بكلمات الموكّل",
          en: "How to build an explanation the client can repeat",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "الخريطة", en: "The map" },
            detail: {
              ar: "«There are four steps. I'll give you all four, then the timing.» — عدد معلن، ولا تتجاوزه.",
              en: "“There are four steps. I'll give you all four, then the timing.” A stated number you do not exceed.",
            },
            tone: "positive",
          },
          {
            label: { ar: "الخطوة", en: "The step" },
            detail: {
              ar: "جملة واحدة لكل خطوة، وفعل واضح في أولها: نجهّز، نودع، ننتظر، نفتح.",
              en: "One sentence per step, each starting with a plain verb: we prepare, we file, we wait, we open.",
            },
            tone: "positive",
          },
          {
            label: { ar: "ما تتوقّف عليه", en: "What it depends on" },
            detail: {
              ar: "«This one is ours. That one depends on the registry.» — الحدّ بين مسؤوليتك وغيرك يُقال بصوت عالٍ.",
              en: "“This one is ours. That one depends on the registry.” The line between your responsibility and theirs is said out loud.",
            },
            tone: "positive",
          },
          {
            label: { ar: "الإعادة", en: "The repeat-back" },
            detail: {
              ar: "«Tell me the four steps back in your own words.» — إن تعثّر في واحدة، أعِد شرحها أنت، لا تلمه.",
              en: "“Tell me the four steps back in your own words.” If he stumbles on one, re-explain it — do not blame him.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "st.le.05.worked",
        strong: {
          label: { ar: "شرح يستطيع المؤسِّس نقله لشريكه", en: "An explanation the founder can pass to his co-founder" },
          text: {
            ar: [
              "«There are four steps. I'll give you all four, then the timing.»",
              "«One: we prepare the founding documents — that's the paperwork saying who owns the company and what it may do. Two: you sign them, and one signature has to be witnessed. Three: we file them with the registry. Four: you open the bank account, which the bank will not do before the registry is finished.»",
              "«Steps one and three are ours. Step two depends on your travel, and step four depends on the bank.»",
              "«From signature to registration is usually two to four weeks, depending on how quickly the registry comes back. I can commit to my part; I can't commit to theirs.»",
              "«Would you tell me the four steps back in your own words, so I can see whether I explained them well?»",
            ],
            en: [
              "“There are four steps. I'll give you all four, then the timing.”",
              "“One: we prepare the founding documents — that's the paperwork saying who owns the company and what it may do. Two: you sign them, and one signature has to be witnessed. Three: we file them with the registry. Four: you open the bank account, which the bank will not do before the registry is finished.”",
              "“Steps one and three are ours. Step two depends on your travel, and step four depends on the bank.”",
              "“From signature to registration is usually two to four weeks, depending on how quickly the registry comes back. I can commit to my part; I can't commit to theirs.”",
              "“Would you tell me the four steps back in your own words, so I can see whether I explained them well?”",
            ],
          },
          why: {
            ar: "العدد معلن ومحترَم، وكل خطوة جملة واحدة بفعل واضح، والمصطلح الوحيد مشروح فوراً بلا مصطلح آخر، والمسؤولية موزّعة صراحةً، والمدى الزمني مقرون بسببه. والجملة الأخيرة تنقل عبء التحقّق إليك أنت لا إلى الموكّل.",
            en: "The number is announced and respected, each step is one sentence with a plain verb, the single term is explained on the spot without a second term, responsibility is divided out loud, and the range comes with its reason. The final sentence puts the burden of checking on you, not on the client.",
          },
        },
        weak: {
          label: { ar: "غموض مهذّب مترجم عن العربية", en: "Polite fog, translated from Arabic" },
          text: {
            ar: [
              "«As you know, the procedures pass through the concerned authorities, and it depends on the circumstances of each case.»",
              "«We shall endeavour to finalise the incorporation formalities and the requisite attestations at the earliest convenience, prior to the commencement of the banking procedures.»",
              "«Do not worry, we will make sure everything is registered, God willing, and it will be finished quickly.»",
            ],
            en: [
              "“As you know, the procedures pass through the concerned authorities, and it depends on the circumstances of each case.”",
              "“We shall endeavour to finalise the incorporation formalities and the requisite attestations at the earliest convenience, prior to the commencement of the banking procedures.”",
              "“Do not worry, we will make sure everything is registered, God willing, and it will be finished quickly.”",
            ],
          },
          why: {
            ar: "المستمع يخرج بلا خطوة واحدة يستطيع كتابتها. «As you know» تُشعره بأنه كان يُفترض أن يعرف، و«the concerned authorities» عبارة مترجمة لا تسمّي جهة، و«at the earliest convenience» ليست موعداً. والأخطر السطر الأخير: «we will make sure everything is registered» — تحفّظ عربي («إن شاء الله») تحوّل في الإنجليزية إلى ضمان صريح بنتيجة تصدر عن جهة لا تسيطر عليها، وهذا وحده يكفي لتقييد التقييم عند أدنى درجاته.",
            en: "The listener leaves without a single step he could write down. “As you know” implies he should have known already; “the concerned authorities” is a translated phrase that names nobody; “at the earliest convenience” is not a date. Worst is the last line: “we will make sure everything is registered” — an Arabic hedge turned into an express English guarantee of an outcome delivered by a body you do not control, which on its own caps the assessment at its lowest band.",
          },
        },
      },
      { kind: "activity", id: "st.le.05.a1", activityId: "act.le.05.1", mode: "quick" },
      { kind: "activity", id: "st.le.05.a2", activityId: "act.le.05.2", mode: "quick" },
      { kind: "activity", id: "st.le.05.a3", activityId: "act.le.05.3", mode: "guided" },
      { kind: "activity", id: "st.le.05.a4", activityId: "act.le.05.4", mode: "guided" },
      { kind: "activity", id: "st.le.05.a5", activityId: "act.le.05.5", mode: "independent" },
      { kind: "simulation", id: "st.le.05.sim", scenarioId: "scn.le-explaining-process" },
      { kind: "activity", id: "st.le.05.a6", activityId: "act.le.05.6", mode: "independent" },
      { kind: "summary", id: "st.le.05.summary", summaryCardId: "card.le.05" },
      {
        kind: "apply_tomorrow",
        id: "st.le.05.apply",
        task: {
          ar: "خذ إجراءً تشرحه كثيراً واكتبه بالإنجليزية في أربع جمل، جملة لكل خطوة، وبفعل واضح في أول كل جملة.",
          en: "Take a process you explain often and write it in four English sentences, one per step, each starting with a plain verb.",
        },
        detail: {
          ar: "ثم أضف تحت كل خطوة كلمتين: «ours» أو «theirs». هذه البطاقة ستوفّر عليك عشرات الرسائل لاحقاً.",
          en: "Then write two words under each step: “ours” or “theirs”. That card will save you dozens of emails later.",
        },
      },
      {
        kind: "next_mission",
        id: "st.le.05.next",
        teaser: {
          ar: "الوحدة القادمة: التواريخ والمهل بالإنجليزية — كيف تكتب تاريخاً لا يُقرأ بطريقتين، والفرق العملي بين by و within.",
          en: "Next: dates and deadlines in English — how to write a date that cannot be read two ways, and what really separates “by” from “within”.",
        },
      },
    ],
    activities: [
      {
        id: "act.le.05.1",
        kind: "listening",
        skillId: "skill.le-explaining-next-steps",
        secondarySkillIds: ["skill.le-clarifying-facts"],
        stage: 3,
        weight: 1,
        prompt: {
          ar: "استمع إلى المؤسِّس بعد شرحك. ما الذي حدث فعلاً في كلامه؟",
          en: "Listen to the founder after your explanation. What has actually happened in what he says?",
        },
        context: {
          ar: ["المتكلّم: مؤسِّس ألماني يسجّل ملاحظاته أثناء المكالمة، وأمامه مهلة تعاقدية مع عميل."],
          en: [
            "Speaker: a German founder taking notes during the call, with a customer deadline of his own.",
          ],
        },
        script: {
          ar: "Okay, good. So I have: notary, registry, bank account. That is three. And you said two to four weeks for the registry part. So I can tell my customer we sign the contract in three weeks — I will put that in the project plan now.",
          en: "Okay, good. So I have: notary, registry, bank account. That is three. And you said two to four weeks for the registry part. So I can tell my customer we sign the contract in three weeks — I will put that in the project plan now.",
        },
        transcript: {
          ar: "النصّ: “Okay, good. So I have: notary, registry, bank account. That is three. And you said two to four weeks for the registry part. So I can tell my customer we sign the contract in three weeks — I will put that in the project plan now.” — الترجمة: «حسناً، جيّد. إذاً لديّ: كاتب العدل، السجلّ، الحساب المصرفي. هذه ثلاث. وقلت من أسبوعين إلى أربعة لجزء السجلّ. إذاً أستطيع أن أقول لعميلي إننا نوقّع العقد خلال ثلاثة أسابيع — سأضع ذلك في خطة المشروع الآن.»",
          en: "“Okay, good. So I have: notary, registry, bank account. That is three. And you said two to four weeks for the registry part. So I can tell my customer we sign the contract in three weeks — I will put that in the project plan now.”",
        },
        accessibleAlternative: {
          ar: "يمكنك قراءة النصّ المكتوب كاملاً بدل الاستماع؛ السؤال يُجاب من النصّ نفسه.",
          en: "You can read the full transcript instead of listening; the question is answerable from the text alone.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "حوّل مدى زمنياً إلى التزام تجاري تجاه طرف ثالث، وأسقط خطوة من الأربع.",
              en: "He has turned a range into a commercial commitment to a third party, and dropped one of the four steps.",
            },
            correct: true,
            rationale: {
              ar: "خطآن يجب تصحيحهما في الدور نفسه: أخذ الحدّ الأدنى من المدى وبنى عليه وعداً لعميله، وعدّ ثلاث خطوات لا أربع. قل فوراً: «Before you write that down — there are four steps, and two to four weeks is a range, not a date. Please don't promise a signing date to your customer yet.»",
              en: "Two errors to correct in the same turn: he has taken the bottom of the range and built a promise to his customer on it, and he has counted three steps rather than four. Say straight away: “Before you write that down — there are four steps, and two to four weeks is a range, not a date. Please don't promise your customer a signing date yet.”",
            },
          },
          {
            id: "o2",
            label: {
              ar: "أعاد الخطوات بكلماته، وهذا دليل على أن الشرح وصل. تابع إلى الأتعاب.",
              en: "He repeated the steps in his own words, which proves the explanation landed. Move on to fees.",
            },
            rationale: {
              ar: "الإعادة أداة تحقّق لا شهادة نجاح؛ قيمتها في أنها تكشف الخطأ. وقد كشفته فعلاً: ثلاث خطوات بدل أربع، ومدى تحوّل إلى تاريخ. تجاوزها الآن يعني أن الخطأ سيصلك بعد ثلاثة أسابيع من عميله لا منه.",
              en: "The repeat-back is a checking tool, not a certificate; its value is that it exposes the error. And it just did: three steps instead of four, a range turned into a date. Move past it now and the error comes back to you in three weeks, from his customer rather than from him.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "أظهر أنه مستعجل، والمطلوب طمأنته بأنكم ستبذلون قصارى جهدكم لإنهاء الأمر في ثلاثة أسابيع.",
              en: "He has shown he is in a hurry; the right move is to reassure him you will do your utmost to finish in three weeks.",
            },
            rationale: {
              ar: "«we will do our utmost» تُسمع بالإنجليزية التزاماً مخفّفاً لا تحفّظاً، وستُقرأ لاحقاً كأنك قبلت المهلة. الطمأنة الصحيحة هي ما تسيطر عليه: «I will file within two working days of receiving the signed documents.»",
              en: "“We will do our utmost” lands in English as a softened commitment, not a hedge, and will later read as though you accepted the deadline. The reassurance that works is the part you control: “I will file within two working days of receiving the signed documents.”",
            },
          },
          {
            id: "o4",
            label: {
              ar: "أخطأ في عدد الخطوات فقط، والتصحيح يمكن أن ينتظر الرسالة الكتابية بعد المكالمة.",
              en: "He only got the number of steps wrong, and that can be corrected in the written follow-up after the call.",
            },
            rationale: {
              ar: "التصحيح المتأخّر يصل بعد أن يكون قد أرسل الوعد إلى عميله. والأهمّ أن الخطأ ليس في العدد فقط بل في تحويل المدى إلى تاريخ، وهو الخطأ الذي يُنتج شكوى «لقد وعدتني».",
              en: "A late correction arrives after he has already sent the promise to his customer. And the error is not only the count: it is a range converted into a date, which is exactly what produces the “but you promised me” complaint.",
            },
          },
        ],
      },
      {
        id: "act.le.05.2",
        kind: "matching",
        skillId: "skill.le-explaining-next-steps",
        stage: 3,
        weight: 1,
        prompt: {
          ar: "طابق كل صيغة رسمية ثقيلة مع بديلها الواضح وما يكسبه الموكّل من التبديل.",
          en: "Match each heavy formal phrase with its clear replacement and what the client gains from the swap.",
        },
        accessibleAlternative: {
          ar: "يمكن الإجابة باختيار رقم الطرف المقابل من قائمة بدل السحب.",
          en: "You can answer by selecting the matching item number from a list instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "“Please be advised that…”", en: "“Please be advised that…”" },
            right: {
              ar: "«I'm writing to tell you…» — ثلاث كلمات محذوفة، والمعنى كامل.",
              en: "“I'm writing to tell you…” — three words removed, meaning intact.",
            },
            rationale: {
              ar: "الصيغة الأولى لا تحمل معنى، وتُشعر الموكّل بأنه يتلقّى إخطاراً إدارياً لا نصيحة. احذفها ولن يتغيّر شيء إلا الوضوح.",
              en: "The first form carries no meaning and makes the client feel he is receiving an administrative notice rather than advice. Delete it and nothing changes but the clarity.",
            },
          },
          {
            id: "p2",
            left: { ar: "“in the event that the registry requires…”", en: "“in the event that the registry requires…”" },
            right: {
              ar: "«if the registry asks for…» — الشرط نفسه بكلمة واحدة.",
              en: "“if the registry asks for…” — the same condition in one word.",
            },
            rationale: {
              ar: "«in the event that» لا تضيف دقّة قانونية على «if» في رسالة إلى موكّل. الطول هنا يُقرأ تحوّطاً لا احترافاً.",
              en: "“In the event that” adds no legal precision over “if” in a client letter. Here the length reads as hedging, not professionalism.",
            },
          },
          {
            id: "p3",
            left: {
              ar: "“We shall endeavour to file at the earliest convenience.”",
              en: "“We shall endeavour to file at the earliest convenience.”",
            },
            right: {
              ar: "«I will file by Tuesday 9 June.» — التزام يستطيع الموكّل قياسه.",
              en: "“I will file by Tuesday 9 June.” — a commitment the client can measure.",
            },
            rationale: {
              ar: "«endeavour» و«at the earliest convenience» تعطيان انطباع الجدّية بلا التزام. التاريخ الواحد أشجع، وهو أيضاً أسهل في الدفاع عنه لاحقاً.",
              en: "“Endeavour” and “at the earliest convenience” give the impression of diligence with no commitment. A single date is braver, and easier to defend later.",
            },
          },
          {
            id: "p4",
            left: {
              ar: "“the aforementioned memorandum of association”",
              en: "“the aforementioned memorandum of association”",
            },
            right: {
              ar: "«the founding document I mentioned — it says who owns the company and what it may do»",
              en: "“the founding document I mentioned — it says who owns the company and what it may do”",
            },
            rationale: {
              ar: "«aforementioned» تفترض أن الموكّل يتذكّر، والمصطلح غير المشروح يوقف القراءة. الشرح بجملة يومية واحدة يُبقيه معك.",
              en: "“Aforementioned” assumes the client remembers, and an unexplained term stops the reading. One everyday sentence keeps him with you.",
            },
          },
          {
            id: "p5",
            left: {
              ar: "“We will make sure it is registered.”",
              en: "“We will make sure it is registered.”",
            },
            right: {
              ar: "«I will file a complete application; the decision to register is the registry's, not mine.»",
              en: "“I will file a complete application; the decision to register is the registry's, not mine.”",
            },
            rationale: {
              ar: "هذه أخطر جملة في الجدول: تُكتب عادةً كترجمة لتحفّظ عربي، لكنها بالإنجليزية ضمان صريح بنتيجة تصدر عن جهة أخرى. البديل يُبقي الالتزام على عملك أنت.",
              en: "The most dangerous line in this table: usually written as a rendering of an Arabic hedge, it is in English an express guarantee of an outcome decided by someone else. The replacement keeps the commitment on your own work.",
            },
          },
        ],
      },
      {
        id: "act.le.05.3",
        kind: "best_response",
        skillId: "skill.le-explaining-next-steps",
        secondarySkillIds: ["skill.le-dates-deadlines"],
        stage: 3,
        weight: 1,
        prompt: {
          ar: "يضغط المؤسِّس: «So we can be done in ten days, yes?» أي ردّ إنجليزي هو الأفضل؟",
          en: "The founder presses: “So we can be done in ten days, yes?” Which English reply is best?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«Ten days is possible only if everything lands on time. Here is what I can commit to: I will file within two working days of your signature. The registry then takes two to four weeks, and that part is not mine to promise.»",
              en: "“Ten days is possible only if everything lands on time. Here is what I can commit to: I will file within two working days of your signature. The registry then takes two to four weeks, and that part is not mine to promise.”",
            },
            correct: true,
            rationale: {
              ar: "لم ترفض ولم تَعِد. أعطيت التزاماً دقيقاً على ما تسيطر عليه، ومدى مع سببه على ما لا تسيطر عليه، وسمّيت الحدّ بينهما. المؤسِّس يستطيع أن يخطّط بهذا الجواب، وهذا كل ما يريده فعلاً.",
              en: "You neither refused nor promised. You gave a precise commitment on what you control, a range with its reason on what you do not, and named the line between them. The founder can plan with this answer, which is all he actually wants.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«Yes, ten days should be fine if everything goes well, God willing.»",
              en: "“Yes, ten days should be fine if everything goes well, God willing.”",
            },
            rationale: {
              ar: "التحفّظ الذي وضعته في آخر الجملة لا يصل. المستمع سمع «yes, ten days» وسيكتبها في خطة مشروعه، وسيعود إليك بها بعد أحد عشر يوماً. التحفّظ يُقال قبل الرقم لا بعده.",
              en: "The hedge at the end of the sentence does not arrive. The listener heard “yes, ten days”, will write it into his project plan, and will come back to you with it on day eleven. A caveat goes before the number, not after it.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«I cannot give you any timeline. It depends on the concerned authorities and every case is different.»",
              en: "“I cannot give you any timeline. It depends on the concerned authorities and every case is different.”",
            },
            rationale: {
              ar: "صحيح جزئياً ومدمّر تجارياً. أنت تملك جزءاً من الجدول الزمني وتستطيع الالتزام به. الرفض المطلق يُقرأ تهرّباً، و«the concerned authorities» عبارة مترجمة لا تسمّي أحداً، وستدفعه إلى مكتب آخر يعطيه رقماً — ولو كان رقماً خاطئاً.",
              en: "Half true and commercially fatal. You own part of the timetable and can commit to it. A blanket refusal reads as evasion, “the concerned authorities” is a translated phrase naming nobody, and it pushes him to a firm that will give him a number — even a wrong one.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«Ten days, twenty days — honestly it is the same. What matters is that we do it properly, not quickly.»",
              en: "“Ten days, twenty days — honestly it is the same. What matters is that we do it properly, not quickly.”",
            },
            rationale: {
              ar: "أنت تُلغي سؤاله بدل أن تجيبه. عشرة أيام وعشرون ليستا سواء عند من عليه توقيع عقد مع عميل خلال ستة أسابيع. والدرس الأهم أنك لم تسأل بعد لماذا العجلة — وهو السؤال الذي يكشف المهلة الحقيقية.",
              en: "You are cancelling his question instead of answering it. Ten days and twenty are not the same to a man who must sign a customer contract within six weeks. And you still have not asked why the hurry — the question that exposes the real deadline.",
            },
          },
        ],
      },
      {
        id: "act.le.05.4",
        kind: "pronunciation",
        skillId: "skill.le-explaining-next-steps",
        stage: 3,
        weight: 1,
        grading: "self_report",
        target: "arbitration",
        ipa: "/ˌɑː.bɪˈtreɪ.ʃən/",
        prompt: {
          ar: "قل الكلمة ثم الجملة. أربعة مقاطع والنبر على الثالث TRAY. الهدف أن تُفهم من المرّة الأولى؛ اللكنة لا تُقيَّم في أي نشاط.",
          en: "Say the word, then the sentence. Four syllables, stress on the third — TRAY. The goal is being understood first time; accent is not assessed in any activity.",
        },
        meaning: {
          ar: "«التحكيم»: تسوية النزاع أمام محكَّم يختاره الطرفان بدل المحكمة. كلمة تقرّر المسار كلّه، فسوء سماعها يُضيّع خطوة كاملة.",
          en: "Settling a dispute before an arbitrator chosen by the parties instead of a court. The word decides the whole route, so mishearing it costs a step.",
        },
        exampleSentence: {
          ar: "«Your agreement has an arbitration clause, which means a court is not the first route.» — اتفاقيتك تتضمّن شرط تحكيم، ما يعني أن المحكمة ليست المسار الأول.",
          en: "“Your agreement has an arbitration clause, which means a court is not the first route.”",
        },
        hint: {
          ar: "الزلّة الشائعة نقل النبر إلى المقطع الأول أو نطق المقطع الثالث «تري» قصيراً. قطّعها: ar-bi-TRAY-tion.",
          en: "The common slip is pulling the stress to the first syllable or shortening the third to “tri”. Beat it out: ar-bi-TRAY-tion.",
        },
        accessibleAlternative: {
          ar: "يمكنك تقطيع الكلمة كتابةً وتحديد موضع النبر بدل النطق، ثم تقييم وضوح التقطيع بنفسك.",
          en: "You can mark the syllables and the stress in writing instead of speaking, then self-assess the beats.",
        },
      },
      {
        id: "act.le.05.5",
        kind: "short_written",
        skillId: "skill.le-explaining-next-steps",
        secondarySkillIds: ["skill.le-dates-deadlines"],
        stage: 3,
        weight: 2,
        grading: "ai_rubric",
        rubricId: "rubric.legal-english-written.v1",
        minChars: 280,
        prompt: {
          ar: "اكتب بالإنجليزية أربع خطوات مرقّمة ترسلها بعد المكالمة، وبيّن لكل خطوة مَن يملكها وما يتوقّف عليه وقتها. لا تلتزم بتاريخ إنجاز نهائي ولا تَعِد بالتسجيل.",
          en: "Write four numbered steps in English to send after the call, showing for each who owns it and what its timing depends on. Do not commit to a final completion date and do not promise registration.",
        },
        context: {
          ar: [
            "الموكّل: لوكاس برينر، مؤسِّس ألماني، غير قانوني، يسجّل الملاحظات.",
            "الخطوات: تجهيز مستندات التأسيس · التوقيع والتصديق · الإيداع لدى السجلّ · فتح الحساب المصرفي.",
            "ما تسيطر عليه: التجهيز والإيداع. ما لا تسيطر عليه: مواعيد التصديق، ومدّة السجلّ، والمصرف.",
            "قيد معروف: جواز سفره لدى السلطات للتجديد ولن يعود قبل ثلاثة أسابيع.",
          ],
          en: [
            "Client: Lukas Brenner, a German founder, not a lawyer, taking notes.",
            "The steps: prepare the founding documents · signature and legalisation · filing with the registry · opening the bank account.",
            "What you control: preparation and filing. What you do not: legalisation appointments, the registry's turnaround, the bank.",
            "Known constraint: his passport is with the authorities for renewal and will not be back for three weeks.",
          ],
        },
        modelAnswer: {
          ar: [
            "«Dear Mr Brenner, here are the four steps we discussed, with who does what.»",
            "«1. We prepare the founding documents — the papers that say who owns the company and what it may do. This is ours: three working days from your instructions.»",
            "«2. You sign them and one signature is witnessed. This is yours, and it needs your passport, which you told me is with the authorities for about three weeks.»",
            "«3. We file the documents with the registry. This is ours: within two working days of receiving them signed.»",
            "«4. You open the bank account. This is the bank's, and they will not start before the registry has finished.»",
            "«Steps 1 and 3 are in my hands and I can commit to those dates. Steps 2 and 4 depend on your passport and on the bank, so I will give you a range once we know when the passport is back. I will not promise a registration date, because that decision is the registry's.»",
          ],
          en: [
            "“Dear Mr Brenner, here are the four steps we discussed, with who does what.”",
            "“1. We prepare the founding documents — the papers that say who owns the company and what it may do. This is ours: three working days from your instructions.”",
            "“2. You sign them and one signature is witnessed. This is yours, and it needs your passport, which you told me is with the authorities for about three weeks.”",
            "“3. We file the documents with the registry. This is ours: within two working days of receiving them signed.”",
            "“4. You open the bank account. This is the bank's, and they will not start before the registry has finished.”",
            "“Steps 1 and 3 are in my hands and I can commit to those dates. Steps 2 and 4 depend on your passport and on the bank, so I will give you a range once we know when the passport is back. I will not promise a registration date, because that decision is the registry's.”",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«Dear Mr Brenner, please be advised that the incorporation procedures shall be carried out in accordance with the applicable regulations and through the concerned authorities.»",
              "«We shall endeavour to finalise the aforementioned formalities at the earliest convenience and we will make sure that the company is registered and the bank account is opened within approximately ten days, God willing.»",
            ],
            en: [
              "“Dear Mr Brenner, please be advised that the incorporation procedures shall be carried out in accordance with the applicable regulations and through the concerned authorities.”",
              "“We shall endeavour to finalise the aforementioned formalities at the earliest convenience and we will make sure that the company is registered and the bank account is opened within approximately ten days, God willing.”",
            ],
          },
          whatIsWrong: {
            ar: "لا خطوة واحدة قابلة للكتابة في خطة مشروع، ولا إشارة إلى مَن يملك ماذا، ولا ذكر لقيد جواز السفر الذي يعطّل الخطوة الثانية بالكامل. ثم الانهيار: «we will make sure that the company is registered… within approximately ten days» — ضمان صريح لنتيجة تصدر عن السجلّ ومصرف، مقروناً برقم يُسمع التزاماً. «God willing» لا تخفّف شيئاً بالإنجليزية، و«approximately» لا تحمي من وعد صريح. هذه الرسالة وحدها كافية لخفض التقييم إلى أدنى درجاته.",
            en: "Not one step could be written into a project plan, no indication of who owns what, and no mention of the passport constraint that blocks step two entirely. Then the collapse: “we will make sure that the company is registered… within approximately ten days” — an express guarantee of an outcome delivered by the registry and a bank, tied to a number that is heard as a commitment. “God willing” softens nothing in English, and “approximately” does not protect an express promise. This message alone caps the assessment at its lowest band.",
          },
        },
      },
      {
        id: "act.le.05.6",
        kind: "reflection",
        skillId: "skill.le-explaining-next-steps",
        stage: 3,
        weight: 1,
        grading: "self_report",
        prompt: {
          ar: "بعد المحاكاة: كم خطوة أعلنتها، وكم شرحت فعلاً؟ وهل طلبت من لوكاس أن يعيد الخطوات بكلماته، أم اكتفيت بـ«is that clear?»؟",
          en: "After the simulation: how many steps did you announce, and how many did you actually explain? Did you ask Lukas to repeat them back in his own words, or settle for “is that clear?”",
        },
        followUp: {
          ar: "راجع أيضاً جملة واحدة: هل خرج منك تعبير يَعِد بنتيجة («we will make sure»، «I guarantee»)؟ اكتب الآن البديل الذي ستستعمله بدلاً منه.",
          en: "Check one sentence too: did anything promising an outcome slip out (“we will make sure”, “I guarantee”)? Write the replacement you will use instead.",
        },
      },
    ],
    summaryCard: {
      id: "card.le.05",
      title: {
        ar: "الخطوات التالية: شرح يُعاد بكلمات الموكّل",
        en: "Next steps: an explanation the client can repeat",
      },
      whatYouLearned: {
        ar: [
          "أعلن عدد الخطوات أولاً ثم التزم به؛ المستمع الذي يعرف العدد يتابع بدل أن يقلق.",
          "مصطلح واحد في الجملة، ويُشرح فوراً بجملة يومية لا تحتوي مصطلحاً آخر.",
          "قل بصوت عالٍ ما تملكه وما لا تملكه: «this one is ours, that one depends on the registry».",
          "المدى الزمني مقروناً بسببه أأمن من رقم واحد، والرقم الواحد يُسمع التزاماً.",
          "التحفّظ العربي يتحوّل بالإنجليزية إلى وعد. «we will make sure» ضمان لا تخفيف.",
          "الدليل الوحيد على نجاح الشرح هو أن يعيده الموكّل بكلماته، لا أن يقول okay.",
        ],
        en: [
          "Announce the number of steps and keep to it; a listener who knows the number follows instead of worrying.",
          "One term per sentence, explained on the spot in an everyday sentence containing no second term.",
          "Say out loud what is yours and what is not: “this one is ours, that one depends on the registry”.",
          "A range with its reason is safer than a single figure, and a single figure is heard as a commitment.",
          "An Arabic hedge becomes an English promise. “We will make sure” is a guarantee, not a softener.",
          "The only proof the explanation landed is the client repeating it in his own words, not saying “okay”.",
        ],
      },
      framework: {
        name: {
          ar: "شرح أيجور الرباعي: خريطة · خطوة · متوقّف على · إعادة",
          en: "The AIJUR Plain-Steps Ladder: Map · Step · Depends · Repeat-back",
        },
        steps: [
          {
            ar: "خريطة: أعلن عدد الخطوات وما ستغطّيه قبل أن تشرح أياً منها.",
            en: "Map: announce how many steps there are and what you will cover before explaining any of them.",
          },
          {
            ar: "خطوة: جملة واحدة لكل خطوة، بفعل واضح في أولها، ومصطلح واحد مشروح فوراً.",
            en: "Step: one sentence per step, a plain verb at the front, one term explained on the spot.",
          },
          {
            ar: "متوقّف على: سمِّ مالك كل خطوة وما يتحكّم في وقتها، وأعطِ مدى لا رقماً.",
            en: "Depends: name the owner of each step and what controls its timing, and give a range, not a figure.",
          },
          {
            ar: "إعادة: اطلب منه أن يعيد الخطوات بكلماته، وأصلح ما تعثّر فيه بلا لوم.",
            en: "Repeat-back: ask him to say the steps back in his own words, and fix whatever stumbles without blaming him.",
          },
        ],
      },
      rememberThis: {
        ar: "الموكّل لا يقيس شرحك بعدد ما عرفت، بل بعدد ما استطاع أن يعيده.",
        en: "A client measures your explanation not by how much you knew, but by how much he could repeat.",
      },
      useItTomorrow: {
        ar: "اكتب اليوم إجراءً واحداً تشرحه كثيراً في أربع جمل إنجليزية، وضع تحت كل جملة كلمة واحدة: ours أو theirs.",
        en: "Today, write one process you explain often as four English sentences, and put one word under each: “ours” or “theirs”.",
      },
      phrases: [
        {
          en: "There are four steps. I'll give you all four, then the timing.",
          ar: "إعلان الخريطة قبل الشرح، وهو ما يجعل المستمع يتابع بدل أن يقلق.",
          register: "neutral",
        },
        {
          en: "Two of these steps are ours; two depend on the registry.",
          ar: "توزيع المسؤولية بصوت عالٍ، وهو ما يحميك عند أول تأخير.",
          register: "neutral",
        },
        {
          en: "In plain terms, that document just says who owns the company and what it may do.",
          ar: "شرح مصطلح بجملة يومية واحدة لا تحتوي مصطلحاً آخر.",
          register: "plain",
        },
        {
          en: "Kindly note that the timeline is contingent upon third-party approvals.",
          ar: "الصيغة الرسمية للتحفّظ الزمني، مناسبة للمراسلة مع مستشار قانوني.",
          register: "formal",
        },
        {
          en: "The date depends on the registry, not on us — so I'll give you a range and tell you the day it changes.",
          ar: "الصيغة البسيطة للتحفّظ نفسه، وهي أوضح لمؤسِّس يبني خطة مشروع.",
          register: "plain",
        },
        {
          en: "I can commit to my part by Tuesday 9 June. I can't commit to theirs.",
          ar: "الفصل بين ما تسيطر عليه وما لا تسيطر عليه في جملتين قصيرتين.",
          register: "neutral",
        },
        {
          en: "I won't promise you a result. I will promise you the next step and its date.",
          ar: "الجملة التي تحلّ محلّ كل وعد بنتيجة، وتُبقي ثقة الموكّل قائمة.",
          register: "neutral",
        },
        {
          en: "Would you mind repeating the steps back to me in your own words?",
          ar: "طلب رسمي للإعادة، وهو الدليل الوحيد على أن الشرح وصل.",
          register: "formal",
        },
        {
          en: "Tell me the four steps back — if one of them is fuzzy, that's my fault, not yours.",
          ar: "الصيغة البسيطة للطلب نفسه، وتحمّلك أنت مسؤولية أي غموض.",
          register: "plain",
        },
        {
          en: "Before you put that in your plan: two to four weeks is a range, not a date.",
          ar: "تصحيح فوري حين يحوّل الموكّل مدى زمنياً إلى وعد لطرف ثالث.",
          register: "neutral",
        },
      ],
    },
  },
];
