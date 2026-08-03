import type { RubricDef } from "../types";

/**
 * Assessment rubrics for AIJUR Professional Skills Lab.
 *
 * Every descriptor describes something a reviewer can point to in the learner's
 * text or transcript. No descriptor refers to attitude, motivation, confidence,
 * personality or accent — only to observable features of what was produced.
 */
export const RUBRICS: RubricDef[] = [
  // -------------------------------------------------------------------------
  // 1. Written response to a client message
  // -------------------------------------------------------------------------
  {
    id: "rubric.client-response.v1",
    name: {
      ar: "جودة الرد المكتوب على رسالة موكّل",
      en: "Quality of a written response to a client message",
    },
    version: "1.0.0",
    skillIds: [
      "skill.client-follow-up",
      "skill.plain-explanation",
      "skill.expectation-management",
      "skill.avoiding-guarantees",
      "skill.difficult-client-basics",
    ],
    criteria: [
      {
        id: "cr.acknowledgement",
        name: { ar: "الإقرار بما طرحه الموكّل", en: "Acknowledging what the client raised" },
        description: {
          ar: "هل يذكر الرد صراحةً السؤال أو القلق الذي عبّر عنه الموكّل، بكلماته هو أو بإعادة صياغة دقيقة له، قبل الانتقال إلى الشرح؟",
          en: "Does the reply explicitly name the question or concern the client raised, in the client's own words or an accurate restatement, before moving to explanation?",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "لا يرد في النص أي ذكر لموضوع رسالة الموكّل؛ يبدأ الرد مباشرةً بالإجراءات أو بعبارة عامة مثل «سنوافيكم لاحقاً».",
            en: "The text contains no reference to the subject of the client's message; the reply opens straight into procedure or a generic line such as \"we will revert in due course\".",
          },
          {
            ar: "يشير الرد إلى الملف أو القضية بصيغة عامة، لكنه لا يحدّد السؤال المطروح؛ يذكر مثلاً «بخصوص ملفكم» دون بيان ما سُئل عنه.",
            en: "The reply refers to the matter in general terms but does not identify the question asked; e.g. it says \"regarding your file\" without stating what was asked.",
          },
          {
            ar: "يعيد الرد صياغة السؤال الأساسي بدقة في جملة واحدة على الأقل، لكنه يُغفل بنداً ثانوياً وارداً في رسالة الموكّل.",
            en: "The reply accurately restates the main question in at least one sentence, but omits a secondary point contained in the client's message.",
          },
          {
            ar: "يعيد الرد صياغة كل نقطة وردت في رسالة الموكّل قبل الشرح، ويسمّي أثرها العملي عليه (تأخير، كلفة، قرار مطلوب) بجملة صريحة.",
            en: "The reply restates every point in the client's message before explaining, and names its practical effect on the client (delay, cost, decision needed) in an explicit sentence.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.substantive-answer",
        name: { ar: "الإجابة على السؤال الفعلي", en: "Answering the actual question" },
        description: {
          ar: "هل يعطي الرد جواباً عن السؤال المطروح تحديداً، لا عن سؤال مجاور أسهل؟ يُقاس بمطابقة محتوى الجواب بمحتوى السؤال.",
          en: "Does the reply answer the question actually asked, rather than an adjacent easier one? Measured by matching the content of the answer to the content of the question.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "الجواب يعالج موضوعاً مختلفاً عن المطروح، أو يكتفي بوعد بالرد لاحقاً دون أي مضمون.",
            en: "The answer addresses a different subject from the one asked, or offers only a promise to reply later with no substance.",
          },
          {
            ar: "يتناول الجواب الموضوع الصحيح لكنه يبقى في مستوى العموميات؛ لا يذكر أي واقعة أو مبلغ أو مدة أو مستند يخصّ هذا الملف.",
            en: "The answer addresses the right subject but stays general; it cites no fact, amount, period or document specific to this matter.",
          },
          {
            ar: "يجيب الجواب عن السؤال بمعطيات محدّدة من الملف، لكنه يترك فرضاً واحداً وارداً دون معالجة (مثلاً: ماذا لو رفض الطرف الآخر).",
            en: "The answer addresses the question with specific facts from the matter, but leaves one live possibility unaddressed (e.g. what happens if the other side refuses).",
          },
          {
            ar: "يجيب الجواب عن السؤال بمعطيات محدّدة، ويعالج الفرضين الأرجح والأسوأ، ويميّز صراحةً بين ما هو مؤكد وما هو تقدير.",
            en: "The answer addresses the question with specific facts, covers both the likely and the worst case, and expressly distinguishes what is settled from what is an estimate.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.plain-language",
        name: { ar: "لغة مفهومة لغير القانوني", en: "Language a non-lawyer can follow" },
        description: {
          ar: "يُقاس بعدد المصطلحات القانونية أو الإجرائية المستعملة دون تفسير، وبطول الجمل، وبوجود مثال أو مقابل يومي يوضّح المعنى.",
            en: "Measured by the number of legal or procedural terms used without explanation, sentence length, and whether an everyday equivalent or example is given.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "ثلاثة مصطلحات قانونية أو أكثر دون تفسير، أو جمل تتجاوز أربعين كلمة تحمل أكثر من فكرة واحدة.",
            en: "Three or more legal terms left unexplained, or sentences over forty words carrying more than one idea each.",
          },
          {
            ar: "مصطلحان دون تفسير، أو تفسير يستعمل مصطلحاً قانونياً آخر بدل الكلمة اليومية.",
            en: "Two unexplained terms, or an explanation that substitutes one legal term for another instead of an everyday word.",
          },
          {
            ar: "كل المصطلحات مفسّرة، والجمل قصيرة، لكن الترتيب يبدأ بالإجراء قبل النتيجة التي تهمّ الموكّل.",
            en: "All terms are explained and sentences are short, but the order begins with procedure rather than the outcome the client cares about.",
          },
          {
            ar: "كل مصطلح مفسّر عند وروده بكلمة يومية أو مثال، والنص يبدأ بالنتيجة العملية ثم يشرح سببها، وجمله تحمل فكرة واحدة لكل جملة.",
            en: "Every term is explained where it appears using an everyday word or example, the text leads with the practical outcome then explains why, and each sentence carries one idea.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.expectations",
        name: { ar: "ضبط التوقّعات وحدود اليقين", en: "Setting expectations and limits of certainty" },
        description: {
          ar: "هل يميّز النص بين ما يسيطر عليه المحامي وما لا يسيطر عليه (مواعيد المحكمة، ردّ الخصم، الجهات الرسمية)، ويصوغ التقديرات كتقديرات؟",
          en: "Does the text distinguish what the lawyer controls from what they do not (court dates, opponent's response, official bodies), and frame estimates as estimates?",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "يقدّم النص نتيجة أو موعداً على أنه مؤكد، أو يستعمل صيغاً مثل «لا تقلق، الأمر محسوم» دون أي تحفّظ.",
            en: "The text presents an outcome or a date as certain, or uses phrasing such as \"don't worry, it's settled\" with no qualification.",
          },
          {
            ar: "يستعمل النص تحفّظاً واحداً عاماً («إن شاء الله»، «على الأرجح») دون بيان ما الذي يتوقّف عليه الأمر.",
            en: "The text uses one generic hedge (\"hopefully\", \"most likely\") without stating what the outcome depends on.",
          },
          {
            ar: "يفصل النص بين خطوة يسيطر عليها المكتب وأخرى لا يسيطر عليها، ويعطي مدى زمنياً بدل تاريخ واحد، لكنه لا يذكر ما الذي قد يغيّر التقدير.",
            en: "The text separates a step the firm controls from one it does not, and gives a range rather than a single date, but does not say what could change the estimate.",
          },
          {
            ar: "يسمّي النص الخطوات الخاضعة لسيطرة المكتب والخطوات الخارجة عنها، ويعطي مدى زمنياً لكل منها، ويذكر بوضوح العامل الذي قد يغيّر التقدير ومتى سيُبلَّغ الموكّل بذلك.",
            en: "The text names which steps the firm controls and which it does not, gives a range for each, and states the factor that could change the estimate and when the client will be told.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.next-step",
        name: { ar: "الخطوة التالية ومَن يملكها", en: "The next step and who owns it" },
        description: {
          ar: "يُقاس بوجود فعل محدّد، واسم أو صفة الشخص الذي سينفّذه، وتاريخ أو مهلة، وما هو مطلوب من الموكّل إن وُجد.",
          en: "Measured by the presence of a specific action, the person or role who will carry it out, a date or deadline, and what (if anything) is required from the client.",
        },
        weight: 0.15,
        descriptors: [
          {
            ar: "لا خطوة تالية في النص، أو عبارة مفتوحة من نوع «سنبقى على تواصل».",
            en: "No next step in the text, or an open-ended line such as \"we'll stay in touch\".",
          },
          {
            ar: "خطوة تالية مذكورة دون تاريخ ودون تحديد مَن ينفّذها.",
            en: "A next step is mentioned with no date and no named owner.",
          },
          {
            ar: "خطوة تالية بتاريخ أو مهلة ومالك واضح، لكن ما هو مطلوب من الموكّل غير مذكور أو غير محدّد.",
            en: "A next step with a date or deadline and a clear owner, but what is required from the client is missing or vague.",
          },
          {
            ar: "خطوة تالية بفعل محدّد ومالك واضح وتاريخ، وبيان صريح لما هو مطلوب من الموكّل ومهلته، وطريقة التواصل عند الطوارئ.",
            en: "A next step with a specific action, a clear owner and a date, plus an explicit statement of what the client must do and by when, and how to make contact if something urgent arises.",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.guarantee-outcome",
        label: {
          ar: "ضمان نتيجة: وعد صريح بالربح أو بمبلغ أو بقرار لصالح الموكّل («ستربح»، «سنسترد المبلغ كاملاً»).",
          en: "Guaranteeing an outcome: an express promise of winning, of an amount, or of a decision in the client's favour (\"you will win\", \"we will recover the full amount\").",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.other-client-disclosure",
        label: {
          ar: "الكشف عن معلومات موكّل آخر: ذكر اسم موكّل أو ملف أو مبلغ أو نتيجة تخصّ غير هذا الموكّل، ولو على سبيل المثال.",
          en: "Disclosing another client's information: naming another client, matter, amount or outcome, even as an illustration.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.unownable-deadline",
        label: {
          ar: "الالتزام بموعد لا يملكه المحامي: تحديد تاريخ لجلسة أو قرار أو ردّ من جهة رسمية أو من الخصم بصيغة التعهّد.",
          en: "Committing to a deadline the lawyer does not control: fixing a date for a hearing, a ruling, or a response from an authority or the opposing side as a promise.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.blame-the-client",
        label: {
          ar: "تحميل الموكّل مسؤولية تأخير المكتب: نسبة التأخّر إلى الموكّل في حين أن سببه داخلي.",
          en: "Blaming the client for the firm's delay: attributing the delay to the client when its cause was internal.",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },

  // -------------------------------------------------------------------------
  // 2. Client email quality
  // -------------------------------------------------------------------------
  {
    id: "rubric.email-quality.v1",
    name: {
      ar: "جودة البريد المهني الموجّه إلى الموكّل",
      en: "Quality of a professional email to a client",
    },
    version: "1.0.0",
    skillIds: [
      "skill.client-follow-up",
      "skill.next-steps-closure",
      "skill.plain-explanation",
      "skill.le-client-update-writing",
      "skill.le-dates-deadlines",
    ],
    criteria: [
      {
        id: "cr.subject-and-orientation",
        name: { ar: "الموضوع والسطر الأول", en: "Subject line and first line" },
        description: {
          ar: "هل يعرف القارئ من سطر الموضوع والسطر الأول: أيّ ملف، وما الجديد، وهل مطلوب منه فعل شيء؟",
          en: "From the subject line and the first line, does the reader know: which matter, what is new, and whether anything is required of them?",
        },
        weight: 0.15,
        descriptors: [
          {
            ar: "الموضوع فارغ أو عام («متابعة»، «بخصوص الملف»)، والسطر الأول تحية فقط.",
            en: "The subject is empty or generic (\"Follow-up\", \"Re: file\"), and the first line is only a greeting.",
          },
          {
            ar: "الموضوع يسمّي الملف لكنه لا يقول ما الجديد؛ يحتاج القارئ إلى قراءة نصف الرسالة ليعرف سبب وصولها.",
            en: "The subject names the matter but not what is new; the reader must get halfway through to learn why the email arrived.",
          },
          {
            ar: "الموضوع يسمّي الملف والحدث، والسطر الأول يذكر الخلاصة، لكن وجود إجراء مطلوب من الموكّل غير واضح إلا لاحقاً.",
            en: "The subject names the matter and the event, and the first line states the takeaway, but whether the client must act only becomes clear later.",
          },
          {
            ar: "الموضوع يسمّي الملف والحدث، والسطر الأول يعطي الخلاصة ويصنّف الرسالة صراحةً: «للعلم فقط» أو «مطلوب قرار منكم قبل تاريخ كذا».",
            en: "The subject names the matter and the event, and the first line gives the takeaway and labels the email explicitly: \"for information only\" or \"a decision is needed from you before [date]\".",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.structure",
        name: { ar: "البنية وقابلية المسح البصري", en: "Structure and scannability" },
        description: {
          ar: "يُقاس بطول الفقرات، ووجود عناوين أو نقاط، وبترتيب المعلومات من الأهم إلى الأقل أهمية للموكّل.",
          en: "Measured by paragraph length, the use of headings or bullets, and whether information runs from most to least important for the client.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "كتلة نصية واحدة تتجاوز مئة وخمسين كلمة دون فواصل، وتخلط الوقائع بالطلبات بالتحفّظات.",
            en: "A single block over one hundred and fifty words with no breaks, mixing facts, requests and caveats together.",
          },
          {
            ar: "فقرتان أو أكثر لكن دون منطق ترتيبي؛ المعلومة الأهم ترد في آخر الرسالة.",
            en: "Two or more paragraphs but no ordering logic; the most important item appears at the end.",
          },
          {
            ar: "فقرات قصيرة ونقاط مرقّمة، والخلاصة في الأعلى، لكن المطلوب من الموكّل مدفون داخل فقرة سردية.",
            en: "Short paragraphs and numbered points with the takeaway on top, but the client's action item is buried inside a narrative paragraph.",
          },
          {
            ar: "خلاصة في الأعلى، ثم تفاصيل في نقاط قصيرة لا تتجاوز الواحدة منها سطرين، ثم قسم مستقل ومعنون لما هو مطلوب من الموكّل.",
            en: "A takeaway on top, then details in short points of no more than two lines each, then a separate labelled section for what the client must do.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.accuracy",
        name: { ar: "دقّة الوقائع والتواريخ والأرقام", en: "Accuracy of facts, dates and figures" },
        description: {
          ar: "هل كل تاريخ ومبلغ واسم مستند وارد في الرسالة مطابق لما في الملف، ومصاغ بصيغة لا تحتمل التباساً؟",
          en: "Is every date, amount and document name in the email consistent with the file, and phrased so it cannot be read two ways?",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "خطأ واحد أو أكثر يغيّر المعنى: تاريخ مغلوط، أو مبلغ غير صحيح، أو خلط بين طرفَي النزاع.",
            en: "One or more meaning-changing errors: a wrong date, an incorrect amount, or the two sides of the dispute confused.",
          },
          {
            ar: "لا خطأ صريح، لكن صيغاً ملتبسة: «الأسبوع المقبل»، «قريباً»، «المبلغ المتّفق عليه» دون تحديد.",
            en: "No outright error, but ambiguous references: \"next week\", \"soon\", \"the agreed amount\" with nothing specified.",
          },
          {
            ar: "التواريخ والمبالغ محدّدة وصحيحة، لكن مصدر رقم واحد أو أساسه غير مذكور.",
            en: "Dates and amounts are specific and correct, but the source or basis of one figure is not stated.",
          },
          {
            ar: "كل تاريخ مكتوب كاملاً، وكل مبلغ بعملته، وكل مستند باسمه وتاريخه، ومع كل رقم أساسه (عقد، فاتورة، حكم) بحيث يستطيع الموكّل التحقّق بنفسه.",
            en: "Every date is written in full, every amount carries its currency, every document is named and dated, and each figure carries its basis (contract, invoice, judgment) so the client can verify it.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.register",
        name: { ar: "المستوى اللغوي والنبرة", en: "Register and tone" },
        description: {
          ar: "يُقاس بملاءمة الصيغ للعلاقة المهنية: لا تعالٍ، ولا عاميّة، ولا صياغة دفاعية، ولا لهجة تحذيرية تجاه الموكّل.",
          en: "Measured by whether the wording fits a professional relationship: not condescending, not casual, not defensive, and not admonishing towards the client.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "صيغ تلوم الموكّل أو تسخر من سؤاله («كما سبق أن أوضحنا مراراً»)، أو لغة عامية أو مختصرات دردشة.",
            en: "Wording that blames the client or belittles the question (\"as we have already explained repeatedly\"), or slang and chat abbreviations.",
          },
          {
            ar: "نبرة محايدة لكن جافّة بشكل يجعل الرسالة تبدو نموذجاً معمّماً، أو مبالغة في التفخيم تُبعد المعنى.",
            en: "A neutral but flat tone that reads like a mass template, or inflated formality that obscures the meaning.",
          },
          {
            ar: "نبرة مهنية ملائمة عموماً، مع جملة واحدة دفاعية أو مبرِّرة تصرف الانتباه عن المضمون.",
            en: "A generally appropriate professional tone, with one defensive or self-justifying sentence that distracts from the substance.",
          },
          {
            ar: "نبرة مهنية ثابتة من أول سطر إلى آخره، مباشرة دون فظاظة، ومحترمة دون تكلّف، وتخاطب الموكّل كشريك في القرار لا كمتلقٍّ للتعليمات.",
            en: "A professional tone held from first line to last: direct without being blunt, respectful without being stilted, addressing the client as a partner in the decision rather than a recipient of instructions.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.closing-action",
        name: { ar: "الإقفال بفعل ومالك وتاريخ", en: "Closing with an action, an owner and a date" },
        description: {
          ar: "هل تنتهي الرسالة بما سيحدث تالياً، ومَن سينفّذه، ومتى، وما البديل إن لم يردّ الموكّل؟",
          en: "Does the email end with what happens next, who will do it, by when, and what happens if the client does not reply?",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "تنتهي الرسالة بعبارة مجاملة فقط، دون أي إشارة إلى خطوة تالية.",
            en: "The email ends with a courtesy line only, with no reference to a next step.",
          },
          {
            ar: "خطوة تالية معلنة بصيغة مبنية للمجهول («سيتم التواصل») دون مالك ودون تاريخ.",
            en: "A next step stated in the passive (\"you will be contacted\") with no owner and no date.",
          },
          {
            ar: "خطوة تالية بمالك وتاريخ واضحين، لكن دون بيان ما سيحصل إن لم يردّ الموكّل في المهلة.",
            en: "A next step with a clear owner and date, but no statement of what happens if the client does not reply in time.",
          },
          {
            ar: "خطوة تالية بفعل ومالك وتاريخ، وما هو مطلوب من الموكّل ومهلته، وأثر عدم الردّ، وقناة تواصل واحدة محدّدة للاستعجال.",
            en: "A next step with an action, an owner and a date, what the client must do and by when, the consequence of no reply, and one named channel for urgent contact.",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.email-guarantee",
        label: {
          ar: "وعد كتابي بنتيجة أو بمبلغ محصّل أو بقرار قضائي لصالح الموكّل.",
          en: "A written promise of an outcome, of a sum recovered, or of a ruling in the client's favour.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.email-wrong-recipient-data",
        label: {
          ar: "إدراج معلومات ملف آخر أو موكّل آخر في الرسالة، أو مخاطبة الموكّل بمعطيات ملف ليس ملفه.",
          en: "Including another matter's or another client's information in the email, or addressing the client with facts from a file that is not theirs.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.email-unownable-commitment",
        label: {
          ar: "التعهّد بتاريخ إنجاز يتوقّف على جهة ثالثة (محكمة، سجل تجاري، خبير) بصيغة قاطعة.",
          en: "Committing in absolute terms to a completion date that depends on a third party (a court, a commercial register, an expert).",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },

  // -------------------------------------------------------------------------
  // 3. Client interview simulation
  // -------------------------------------------------------------------------
  {
    id: "rubric.client-interview-sim.v1",
    name: {
      ar: "أداء مقابلة الموكّل في المحاكاة",
      en: "Performance in a simulated client interview",
    },
    version: "1.0.0",
    skillIds: [
      "skill.meeting-preparation",
      "skill.trust-building",
      "skill.active-listening",
      "skill.questioning",
      "skill.next-steps-closure",
    ],
    criteria: [
      {
        id: "cr.opening-frame",
        name: { ar: "الافتتاح وتأطير اللقاء", en: "Opening and framing the meeting" },
        description: {
          ar: "يُقاس بما ورد في الدورَين الأولين: تعريف بالنفس وبالدور، ومدّة اللقاء، وما سيغطّيه، والسرّية.",
          en: "Measured by what appears in the first two turns: who the lawyer is and their role, how long the meeting will take, what it will cover, and confidentiality.",
        },
        weight: 0.15,
        descriptors: [
          {
            ar: "يبدأ المتدرّب بسؤال عن الوقائع مباشرةً دون تعريف بنفسه ولا تأطير للقاء.",
            en: "The learner opens with a fact question, with no self-introduction and no framing of the meeting.",
          },
          {
            ar: "تعريف بالاسم فقط، دون بيان الدور ولا مدّة اللقاء ولا ما سيغطّيه.",
            en: "A name only, with no statement of role, meeting length or coverage.",
          },
          {
            ar: "تعريف بالاسم والدور وبيان لما سيغطّيه اللقاء، لكن دون ذكر السرّية ولا دعوة الموكّل لتحديد ما يهمّه.",
            en: "Name, role and coverage are stated, but confidentiality is not mentioned and the client is not invited to say what matters to them.",
          },
          {
            ar: "تعريف بالاسم والدور، ومدّة تقريبية، وخطة اللقاء في جملتين، وإشارة إلى سرّية ما سيُقال، ثم سؤال الموكّل عمّا يريد الخروج به من هذا اللقاء.",
            en: "Name and role, an approximate duration, a two-sentence meeting plan, a reference to the confidentiality of what is said, then asking the client what they want to leave the meeting with.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.question-quality",
        name: { ar: "جودة الأسئلة: مفتوح ← تضييق ← تأكيد", en: "Question quality: open → funnel → confirm" },
        description: {
          ar: "يُقاس بنوع الأسئلة وتسلسلها في النص: هل بدأت مفتوحة ثم ضاقت تدريجياً وانتهت بأسئلة تأكيد، أم كانت مغلقة أو موحية منذ البداية؟",
          en: "Measured by the type and sequence of questions in the transcript: did they start open, narrow progressively, and end with confirming questions, or were they closed or leading from the start?",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "أغلب الأسئلة مغلقة (نعم/لا) أو موحية بالجواب، أو تحمل تشخيصاً قانونياً مسبقاً («إذاً القضية عقدية، صحيح؟»).",
            en: "Most questions are closed (yes/no) or leading, or carry a pre-formed legal diagnosis (\"so this is a contract case, right?\").",
          },
          {
            ar: "سؤال مفتوح واحد في البداية ثم انتقال سريع إلى أسئلة مغلقة، مع أسئلة مزدوجة تحمل استفهامين في جملة واحدة.",
            en: "One open question at the start then a quick shift to closed questions, with double-barrelled questions asking two things at once.",
          },
          {
            ar: "تسلسل من المفتوح إلى الضيّق واضح ومحافظ على سؤال واحد لكل دور، لكن دون أسئلة تأكيد في النهاية لاختبار صحّة الفهم.",
            en: "A clear open-to-narrow sequence with one question per turn, but no confirming questions at the end to test understanding.",
          },
          {
            ar: "أسئلة مفتوحة أولاً، ثم تضييق تدريجي حول الوقائع الحاسمة، ثم تأكيد صريح («لأتأكد من فهمي: …»)، مع سؤال واحد لكل دور وأسئلة متابعة مبنية على جواب الموكّل لا على قائمة معدّة سلفاً.",
            en: "Open questions first, progressive narrowing onto the decisive facts, then explicit confirmation (\"let me check I have this right: …\"), one question per turn, and follow-ups built on the client's answer rather than a pre-set list.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.listening",
        name: { ar: "الإصغاء وعدم المقاطعة", en: "Listening and not interrupting" },
        description: {
          ar: "يُقاس بعدد المرات التي يقطع فيها المتدرّب جواب الموكّل، وبعدد إشارات الإصغاء (إعادة صياغة، تسمية ما قاله الموكّل، البناء على كلمة استعملها).",
          en: "Measured by how often the learner cuts across the client's answer, and by the number of listening markers (paraphrase, naming what the client said, building on a word the client used).",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "يقاطع المتدرّب الموكّل أو يغيّر الموضوع فوراً بعد كل جواب؛ لا أثر لأي إعادة صياغة في النص.",
            en: "The learner cuts in or switches topic immediately after each answer; there is no paraphrase anywhere in the transcript.",
          },
          {
            ar: "إشارة إصغاء واحدة على الأقل، لكن مع تجاهل معلومة مهمة ذكرها الموكّل صراحةً وعدم العودة إليها.",
            en: "At least one listening marker, but an important item the client stated explicitly is ignored and never revisited.",
          },
          {
            ar: "إعادة صياغة في مواضع متعدّدة والبناء على كلمات الموكّل، لكن التقاط الإشارات العاطفية (قلق مالي، ضغط عائلي) غائب.",
            en: "Paraphrasing at several points and building on the client's words, but emotional cues (financial worry, family pressure) are not picked up.",
          },
          {
            ar: "لا مقاطعة، وإعادة صياغة بكلمات الموكّل نفسه عند كل تحوّل في الموضوع، وتسمية صريحة لما يقلق الموكّل قبل الانتقال إلى الحلّ.",
            en: "No interruptions, paraphrase in the client's own words at each topic shift, and explicit naming of what worries the client before moving to solutions.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.fact-coverage",
        name: { ar: "تغطية الوقائع واستخراج المعلومة المخفيّة", en: "Fact coverage and surfacing hidden information" },
        description: {
          ar: "يُقاس بعدد عناصر الملف الحاسمة التي ظهرت في النص (تواريخ، مستندات، أطراف، تواصل سابق مع الخصم، التزامات موقّعة) من أصل ما كان متاحاً.",
          en: "Measured by how many of the matter's decisive elements surfaced in the transcript (dates, documents, parties, prior contact with the other side, signed commitments) out of those available.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "لم يُستخرج أي عنصر حاسم؛ يبني المتدرّب رأيه على رواية الموكّل الأولى فقط.",
            en: "No decisive element surfaced; the learner builds an opinion on the client's opening account alone.",
          },
          {
            ar: "استُخرج عنصر حاسم واحد، لكن لم يُسأل عن المستندات ولا عن تسلسل التواريخ.",
            en: "One decisive element surfaced, but documents and the sequence of dates were never asked about.",
          },
          {
            ar: "استُخرجت أغلب العناصر الحاسمة بما فيها المستندات والتواريخ، لكن فات عنصر يغيّر تقييم الملف.",
            en: "Most decisive elements surfaced, including documents and dates, but one element that changes the assessment of the matter was missed.",
          },
          {
            ar: "استُخرجت العناصر الحاسمة كلها، بما فيها ما لم يتطوّع الموكّل بذكره، عبر أسئلة متابعة محدّدة، وطُلبت المستندات بالاسم مع مهلة لتقديمها.",
            en: "All decisive elements surfaced, including what the client did not volunteer, through specific follow-up questions, and documents were requested by name with a deadline for producing them.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.summary-closure",
        name: { ar: "التلخيص والإقفال بخطوات مملوكة", en: "Summarising and closing with owned steps" },
        description: {
          ar: "يُقاس بوجود تلخيص قبل النهاية يعرضه المتدرّب على الموكّل للتصحيح، وبخطوات تالية لكل منها مالك وتاريخ.",
          en: "Measured by whether a summary is offered before the end for the client to correct, and by next steps that each have an owner and a date.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "ينتهي اللقاء دون تلخيص ودون خطوة تالية؛ آخر دور هو تحية أو وعد عام.",
            en: "The meeting ends with no summary and no next step; the final turn is a greeting or a general promise.",
          },
          {
            ar: "تلخيص جزئي دون دعوة الموكّل إلى تصحيحه، وخطوة تالية دون مالك ودون تاريخ.",
            en: "A partial summary with no invitation to the client to correct it, and a next step with no owner and no date.",
          },
          {
            ar: "تلخيص واضح معروض للتصحيح، وخطوة تالية بمالك وتاريخ، لكن دون تحديد ما هو مطلوب من الموكّل.",
            en: "A clear summary offered for correction, and a next step with an owner and a date, but nothing specifying what the client must do.",
          },
          {
            ar: "تلخيص للوقائع وللمطلوب معروض على الموكّل للتصحيح، ثم خطوتان أو أكثر لكل منهما مالك وتاريخ، وما هو مطلوب من الموكّل ومهلته، وموعد التواصل التالي.",
            en: "A summary of the facts and the ask, offered to the client for correction, then two or more steps each with an owner and a date, what the client must provide and by when, and the date of the next contact.",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.sim-guarantee",
        label: {
          ar: "إعطاء ضمانة بالنتيجة أثناء المقابلة، أو تقدير نسبة نجاح رقمية دون قراءة أي مستند.",
          en: "Giving a guarantee of the outcome during the interview, or quoting a numerical chance of success without having read any document.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.sim-other-client",
        label: {
          ar: "ذكر ملف موكّل آخر أو نتيجته أو اسمه لطمأنة الموكّل الحالي.",
          en: "Mentioning another client's matter, outcome or name to reassure the present client.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.sim-premature-advice",
        label: {
          ar: "إسداء نصيحة تصرّفية حاسمة (وقّع، لا توقّع، توقّف عن الدفع) قبل استخراج الوقائع والمستندات.",
          en: "Giving decisive action advice (sign, don't sign, stop paying) before the facts and documents have been surfaced.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.sim-unownable-deadline",
        label: {
          ar: "الالتزام بموعد إنجاز أو موعد جلسة لا يملكه المتدرّب، ردّاً على إلحاح الموكّل.",
          en: "Committing to a completion or hearing date the learner does not control, in response to the client's pressure.",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },

  // -------------------------------------------------------------------------
  // 4. Legal English — written
  // -------------------------------------------------------------------------
  {
    id: "rubric.legal-english-written.v1",
    name: {
      ar: "الإنكليزية القانونية — الأداء الكتابي",
      en: "Legal English — written performance",
    },
    version: "1.0.0",
    skillIds: [
      "skill.le-client-update-writing",
      "skill.le-explaining-next-steps",
      "skill.le-dates-deadlines",
      "skill.le-managing-expectations",
      "skill.le-closing-meeting",
    ],
    criteria: [
      {
        id: "cr.lew-clarity",
        name: { ar: "الوضوح", en: "Clarity" },
        description: {
          ar: "هل يفهم قارئ واحد المعنى المقصود من القراءة الأولى؟ يُقاس بطول الجملة، وعدد الأفكار في الجملة الواحدة، ووضوح مرجع الضمائر.",
          en: "Would a single reader take the intended meaning on first reading? Measured by sentence length, the number of ideas per sentence, and whether pronoun references are unambiguous.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "جمل تتجاوز أربعين كلمة، أو ضمائر بلا مرجع واضح، بحيث يحتمل النص أكثر من قراءة في نقطة جوهرية.",
            en: "Sentences over forty words, or pronouns with no clear referent, so the text supports more than one reading on a material point.",
          },
          {
            ar: "المعنى العام يصل، لكن جملة أو جملتين تحتاجان إلى قراءة ثانية بسبب الطول أو ترتيب العناصر.",
            en: "The overall meaning gets through, but one or two sentences need a second reading because of length or word order.",
          },
          {
            ar: "كل الجمل مفهومة من القراءة الأولى، لكن الترتيب يضع المعلومة الأهم بعد التفاصيل الإجرائية.",
            en: "Every sentence is clear on first reading, but the ordering places the most important information after the procedural detail.",
          },
          {
            ar: "كل جملة تحمل فكرة واحدة، والمعلومة الأهم في أول النص، والروابط بين الفقرات صريحة، ولا يحتمل النص قراءة ثانية مختلفة.",
            en: "Each sentence carries one idea, the most important information comes first, links between paragraphs are explicit, and the text supports no second, different reading.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.lew-accuracy",
        name: { ar: "الدقّة اللغوية والمصطلحية", en: "Language and terminology accuracy" },
        description: {
          ar: "يُقاس بالأخطاء التي تغيّر المعنى (الأزمنة، حروف الجرّ في التعابير القانونية، الصيغ الشرطية)، وباستعمال المصطلح القانوني في موضعه الصحيح.",
          en: "Measured by errors that change meaning (tense, prepositions in legal collocations, conditional forms) and by whether legal terms are used in their correct sense.",
        },
        weight: 0.18,
        descriptors: [
          {
            ar: "خطأ واحد أو أكثر يغيّر المعنى القانوني: زمن يقلب الالتزام إلى واقعة منجزة، أو مصطلح مستعمل في غير موضعه (مثل الخلط بين الإنهاء والفسخ).",
            en: "One or more errors that change the legal meaning: a tense that turns an undertaking into a completed fact, or a term used in the wrong sense (e.g. confusing termination with rescission).",
          },
          {
            ar: "أخطاء متكرّرة لا تغيّر المعنى لكنها تُبطئ القراءة (حروف جرّ، أدوات تعريف، تطابق)، أو مصطلح صحيح لكن مصحوب بحرف جرّ خاطئ.",
            en: "Recurring errors that do not change meaning but slow the reader (prepositions, articles, agreement), or a correct term paired with the wrong preposition.",
          },
          {
            ar: "لغة صحيحة عموماً مع زلّة أو زلّتين لا تمسّان المعنى، والمصطلحات القانونية مستعملة في مواضعها.",
            en: "Generally correct language with one or two slips that do not touch the meaning, and legal terms used correctly.",
          },
          {
            ar: "لغة سليمة، والمصطلحات مستعملة بدقّة ومعرَّفة عند أول ورود، والصيغ الشرطية والمستقبلية تعكس بدقّة درجة الالتزام المقصودة.",
            en: "Sound language, terms used precisely and defined at first use, and conditional and future forms reflecting exactly the degree of commitment intended.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.lew-vocabulary",
        name: { ar: "المفردات والمتلازمات اللفظية", en: "Vocabulary and collocation" },
        description: {
          ar: "هل اختار الكاتب الكلمة التي يستعملها المحامون فعلاً في هذا الموضع، ومع الحرف أو الفعل الذي يلازمها عادةً («enter into an agreement»، «serve a notice»، «meet a deadline»)؟ يُقاس بعدد المواضع التي تُستبدل فيها المتلازمة الدارجة بترجمة حرفية مفهومة لكن غير مستعملة. أثر اللغة الأم في اختيار الكلمة لا يُعاقَب عليه ما دام المعنى سليماً.",
          en: "Did the writer pick the word lawyers actually use here, with the partner word or preposition that normally goes with it (\"enter into an agreement\", \"serve a notice\", \"meet a deadline\")? Measured by how often a standard collocation is replaced by a literal rendering that is understandable but not used. First-language influence on word choice is not penalised where the meaning holds.",
        },
        weight: 0.16,
        descriptors: [
          {
            ar: "مفردات عامّة جداً تُفقد النص دقّته («the paper we sent» بدل «the notice we served»)، أو كلمة مختارة من قاموس ثنائي اللغة بمعنى مختلف تماماً عن المقصود.",
            en: "Vocabulary so general that the text loses its precision (\"the paper we sent\" for \"the notice we served\"), or a word taken from a bilingual dictionary in a sense quite different from the one intended.",
          },
          {
            ar: "المصطلح صحيح لكن ما يلازمه خاطئ في أكثر من موضع («sign on the contract»، «discuss about the claim»)، ما يجعل النص يقرأ كترجمة.",
            en: "The term is right but its partner word is wrong in more than one place (\"sign on the contract\", \"discuss about the claim\"), so the text reads as a translation.",
          },
          {
            ar: "مفردات مهنية ملائمة ومتلازمات صحيحة في معظم النص، مع موضع واحد أو موضعين تبدو فيهما الصياغة مترجمة حرفياً دون أن يختلّ المعنى.",
            en: "Appropriate professional vocabulary and correct collocations across most of the text, with one or two places where the phrasing reads as a literal translation without the meaning suffering.",
          },
          {
            ar: "كل كلمة مختارة من الحقل المهني الصحيح ومصحوبة بملازمها المعتاد، وتنويع في التعبير بلا تكلّف، وأثر اللغة الأم إن وُجد لا يظهر إلا في الأسلوب لا في المعنى. ملاحظة تقييمية ملزمة: لا تُقيَّم اللكنة في أي نشاط من أنشطة الإنكليزية القانونية — كتابياً أو شفهياً — ولا يجوز أن تدخل في هذه العلامة بأي شكل.",
            en: "Every word comes from the right professional field with its usual partner word, expression varies without strain, and any first-language influence shows in style rather than meaning. Binding assessment note: accent is not assessed in any Legal English activity — written or spoken — and must play no part in this score.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.lew-register",
        name: { ar: "المستوى اللغوي المناسب", en: "Register" },
        description: {
          ar: "هل يلائم المستوى اللغوي مراسلة مهنية مع موكّل؟ يُقاس بغياب العامّية والاختصارات من جهة، وغياب الحشو الأرشيفي القديم من جهة أخرى.",
          en: "Does the register fit professional correspondence with a client? Measured by the absence of slang and chat abbreviations on one side, and of archaic legalese padding on the other.",
        },
        weight: 0.16,
        descriptors: [
          {
            ar: "لغة دردشة أو اختصارات أو صيغ حادّة، أو على العكس صيغ أرشيفية مكدّسة تجعل الرسالة غير قابلة للفهم من موكّل غير قانوني.",
            en: "Chat language, abbreviations or blunt commands, or conversely stacked archaic formulas that make the message unreadable for a non-lawyer client.",
          },
          {
            ar: "المستوى متذبذب: افتتاح رسمي جداً ثم صيغ مألوفة في المتن، أو العكس.",
            en: "Register swings: a very formal opening followed by familiar phrasing in the body, or the reverse.",
          },
          {
            ar: "مستوى مهني ثابت مع بقايا حشو شكلي («please be advised that») لا يضيف معنى.",
            en: "A consistent professional register with residual padding (\"please be advised that\") that adds no meaning.",
          },
          {
            ar: "مستوى مهني ثابت وملائم للموكّل: صيغ مهذّبة مباشرة، وطلبات مصاغة كطلبات لا كأوامر، ودرجة رسمية واحدة من أول الرسالة إلى آخرها.",
            en: "A consistent professional register suited to the client: courteous and direct, requests framed as requests rather than instructions, and one level of formality from open to close.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.lew-concision",
        name: { ar: "الإيجاز", en: "Concision" },
        description: {
          ar: "يُقاس بنسبة الكلمات التي يمكن حذفها دون فقدان معنى، وبتكرار المعلومة نفسها في أكثر من موضع.",
          en: "Measured by the proportion of words that could be deleted without losing meaning, and by repetition of the same information in more than one place.",
        },
        weight: 0.12,
        descriptors: [
          {
            ar: "يمكن حذف أكثر من ثلث النص دون فقدان أي معنى؛ الفكرة نفسها مكرّرة في فقرتين.",
            en: "More than a third of the text could be deleted with no loss of meaning; the same idea appears in two paragraphs.",
          },
          {
            ar: "حشو ملحوظ: مقدّمات طويلة قبل الوصول إلى الموضوع، وصيغ مبنية للمجهول تطيل الجملة دون سبب.",
            en: "Noticeable padding: a long run-up before reaching the point, and passive constructions that lengthen sentences for no reason.",
          },
          {
            ar: "النص مضغوط عموماً مع جملة أو جملتين يمكن اختصارهما دون خسارة.",
            en: "Generally tight, with one or two sentences that could be cut without loss.",
          },
          {
            ar: "لا يمكن حذف جملة دون فقدان معلومة؛ كل فقرة تؤدّي وظيفة واحدة، والطول متناسب مع أهمية الرسالة.",
            en: "No sentence could be removed without losing information; each paragraph does one job, and the length is proportionate to the importance of the message.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.lew-client-friendly",
        name: { ar: "قابلية النصّ للاستعمال من الموكّل", en: "Client-friendliness" },
        description: {
          ar: "هل يستطيع موكّل غير قانوني أن يعرف من النص: ما الذي حدث، وماذا يعني له، وماذا عليه أن يفعل، ومتى؟",
          en: "Can a non-lawyer client tell from the text: what happened, what it means for them, what they must do, and by when?",
        },
        weight: 0.18,
        descriptors: [
          {
            ar: "النص مكتوب لقارئ قانوني: مصطلحات غير مفسّرة، ولا بيان لأثر ما حدث على الموكّل، ولا مطلوب واضح.",
            en: "The text is written for a legal reader: unexplained terms, no statement of the effect on the client, and no clear ask.",
          },
          {
            ar: "يشرح النص ما حدث لكنه لا يقول ماذا يعني ذلك للموكّل عملياً، والمطلوب منه مذكور بصيغة عامة.",
            en: "The text explains what happened but not what it means for the client in practice, and the ask is stated only in general terms.",
          },
          {
            ar: "ما حدث وأثره مشروحان بلغة مفهومة، والمطلوب من الموكّل محدّد، لكن دون مهلة ولا بيان لما يترتّب على التأخّر.",
            en: "What happened and its effect are explained in accessible language and the ask is specific, but with no deadline and no consequence for delay.",
          },
          {
            ar: "ما حدث، وأثره على الموكّل، والمطلوب منه، ومهلته، وأثر عدم القيام به — كلّها واردة بلغة يفهمها غير القانوني، مع دعوة صريحة للسؤال عمّا لم يتّضح.",
            en: "What happened, its effect on the client, the ask, the deadline and the consequence of missing it are all present in language a non-lawyer follows, with an explicit invitation to ask about anything unclear.",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.lew-guarantee",
        label: {
          ar: "صياغة إنكليزية تَعِد بنتيجة («we will win», «you are guaranteed to recover») ولو بصيغة تخفيفية.",
          en: "English phrasing that promises an outcome (\"we will win\", \"you are guaranteed to recover\"), even if softened.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.lew-meaning-inversion",
        label: {
          ar: "خطأ لغوي يقلب المعنى القانوني: نفي في غير موضعه، أو زمن يحوّل شرطاً إلى التزام قائم، أو خلط بين الطرف الموكِّل والطرف الخصم.",
          en: "A language error that inverts the legal meaning: a misplaced negative, a tense that turns a condition into a live obligation, or the client and the opposing party confused.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.lew-confidentiality",
        label: {
          ar: "إيراد اسم موكّل آخر أو تفاصيل ملفه في النص، أو نسخ صيغة تحتوي على بيانات ملف سابق.",
          en: "Including another client's name or matter details in the text, or reusing a template that still carries a previous file's data.",
        },
        capsScoreAt: 0,
      },
    ],
    passThreshold: 2,
  },

  // -------------------------------------------------------------------------
  // 5. Legal English — spoken
  // -------------------------------------------------------------------------
  {
    id: "rubric.legal-english-spoken.v1",
    name: {
      ar: "الإنكليزية القانونية — الأداء الشفهي",
      en: "Legal English — spoken performance",
    },
    version: "1.0.0",
    skillIds: [
      "skill.le-professional-introduction",
      "skill.le-welcoming-client",
      "skill.le-clarifying-facts",
      "skill.le-explaining-next-steps",
      "skill.le-difficult-questions",
    ],
    criteria: [
      {
        id: "cr.les-intelligibility",
        name: { ar: "قابلية الفهم", en: "Intelligibility" },
        description: {
          ar: "هل فهم المستمع الكلمات من المرّة الأولى؟ يُقيَّم هنا وضوح النطق والوتيرة والتقطيع فقط. اللكنة لا تُقيَّم إطلاقاً: لكنة عربية أو هندية أو فرنسية أو أي لكنة أخرى لا تخفض العلامة ولا ترفعها، والمعيار الوحيد هو ما إذا كان المستمع اضطرّ إلى طلب الإعادة.",
          en: "Did the listener catch the words the first time? Only articulation, pace and phrasing are judged here. Accent is never assessed: an Arabic, Indian, French or any other accent neither lowers nor raises the score. The only measure is whether the listener had to ask for a repeat.",
        },
        weight: 0.22,
        descriptors: [
          {
            ar: "طُلبت الإعادة ثلاث مرات أو أكثر، أو تعذّر تفريغ مقاطع كاملة من التسجيل.",
            en: "A repeat was requested three or more times, or whole stretches of the recording could not be transcribed.",
          },
          {
            ar: "طُلبت الإعادة مرّة أو مرّتين، أو سُمعت أرقام وتواريخ وأسماء بشكل خاطئ واحتاجت إلى تصحيح.",
            en: "A repeat was requested once or twice, or figures, dates and names were misheard and needed correcting.",
          },
          {
            ar: "لم تُطلب الإعادة، لكن الوتيرة سريعة أو الجمل موصولة بلا وقفات، ما يجعل المتابعة مجهدة في المقاطع الطويلة.",
            en: "No repeat was requested, but the pace is fast or sentences run together without pauses, making long stretches tiring to follow.",
          },
          {
            ar: "كل الكلام مفهوم من المرّة الأولى، والأرقام والتواريخ والأسماء منطوقة ببطء متعمّد، والوقفات تفصل الأفكار بحيث يستطيع المستمع تدوين ملاحظاته أثناء الكلام. ويُمنح هذا المستوى كاملاً لمتحدّث ذي لكنة عربية واضحة ما دام كلامه مفهوماً من المرّة الأولى: اللكنة لا تُقيَّم ولا تُخفِّض العلامة في أي معيار.",
            en: "Everything is understood first time, figures, dates and names are deliberately slowed, and pauses separate ideas so the listener can take notes while listening. This full score is given to a speaker with a strong Arabic accent whose words are caught first time: accent is not assessed and never lowers the score on any criterion.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.les-clarity",
        name: { ar: "وضوح البناء الشفهي", en: "Clarity of spoken structure" },
        description: {
          ar: "هل يعرف المستمع في كل لحظة أين هو من الشرح؟ يُقاس بوجود إعلان مسبق للبنية، وبروابط انتقالية، وبخلاصة في النهاية.",
          en: "Does the listener always know where they are in the explanation? Measured by signposting up front, transition markers, and a closing summary.",
        },
        weight: 0.18,
        descriptors: [
          {
            ar: "الكلام متسلسل بلا بنية؛ ينتقل بين المواضيع دون إشارة ويعود إليها لاحقاً بشكل عشوائي.",
            en: "Speech runs on with no structure; topics shift with no marker and are returned to at random.",
          },
          {
            ar: "بنية ضمنية يمكن استنتاجها، لكن دون أي إعلان مسبق ولا روابط انتقالية.",
            en: "An implicit structure can be inferred, but there is no signposting and no transition markers.",
          },
          {
            ar: "إعلان مسبق للبنية وروابط انتقالية واضحة، لكن دون خلاصة تجمع ما قيل في النهاية.",
            en: "Clear signposting and transition markers, but no summary pulling it together at the end.",
          },
          {
            ar: "إعلان مسبق لعدد النقاط، ورابط انتقالي عند كل نقطة، وخلاصة من جملتين في النهاية تعيد المطلوب من المستمع.",
            en: "The number of points is announced up front, each point carries a transition marker, and a two-sentence close restates what the listener needs to do.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.les-accuracy",
        name: {
          ar: "الدقّة اللغوية والمفردات والمتلازمات",
          en: "Accuracy, vocabulary and collocation",
        },
        description: {
          ar: "يُقاس بالأخطاء التي تغيّر المعنى في الكلام المفرَّغ، وباستعمال المصطلح القانوني في موضعه، وباختيار المتلازمة الدارجة («file a claim»، «serve a notice»، «meet a deadline») بدل الترجمة الحرفية، وبدقّة الأرقام والتواريخ المنطوقة.",
          en: "Measured by meaning-changing errors in the transcript, correct use of legal terms, choice of the standard collocation (\"file a claim\", \"serve a notice\", \"meet a deadline\") over a literal rendering, and the accuracy of spoken figures and dates.",
        },
        weight: 0.18,
        descriptors: [
          {
            ar: "خطأ يغيّر المعنى القانوني أو رقم أو تاريخ منطوق خطأً دون تصحيح.",
            en: "An error that changes the legal meaning, or a figure or date spoken wrongly and not corrected.",
          },
          {
            ar: "أخطاء متكرّرة لا تغيّر المعنى، أو مصطلح مستعمل بصيغة تقريبية بدل المصطلح الدقيق، أو متلازمات مترجمة حرفياً («make a case», «put a claim») تجعل الكلام يبدو مترجماً.",
            en: "Recurring errors that do not change meaning, an approximate word used in place of the precise term, or literally translated collocations (\"make a case\", \"put a claim\") that make the speech sound translated.",
          },
          {
            ar: "لغة صحيحة عموماً مع زلّة تُصحَّح ذاتياً، والمصطلحات في مواضعها.",
            en: "Generally correct language with one self-corrected slip, and terms used in their proper sense.",
          },
          {
            ar: "لغة سليمة، ومصطلحات دقيقة مشروحة عند أول ورود، ومتلازمات مهنية مستعملة كما يستعملها المحامون الناطقون بالإنكليزية، وأرقام وتواريخ منطوقة ثم مكرّرة للتأكيد.",
            en: "Sound language, precise terms explained at first use, professional collocations used as English-speaking lawyers use them, and figures and dates spoken then repeated for confirmation.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.les-register",
        name: { ar: "المستوى اللغوي الشفهي", en: "Spoken register" },
        description: {
          ar: "هل تلائم الصيغ مكالمة مهنية مع موكّل؟ يُقاس بصيغ المجاملة والطلب والاعتراض، وبثبات درجة الرسمية عبر المكالمة.",
          en: "Do the forms used fit a professional call with a client? Measured by how courtesy, requests and disagreement are phrased, and by consistency of formality across the call.",
        },
        weight: 0.14,
        descriptors: [
          {
            ar: "صيغ آمرة أو مألوفة زائدة عن حدّها، أو ألفاظ حادّة عند الاعتراض على ما قاله الموكّل.",
            en: "Commanding or over-familiar forms, or blunt wording when disagreeing with what the client said.",
          },
          {
            ar: "مستوى متذبذب بين الرسمي والعامّي داخل المكالمة الواحدة، أو صيغ ترجمة حرفية من العربية تُربك المستمع.",
            en: "Formality swings between formal and casual within the same call, or forms literally translated from Arabic that confuse the listener.",
          },
          {
            ar: "مستوى مهني ثابت، لكن صيغ الاعتراض أو الرفض مباشرة بشكل يجعلها تبدو قاطعة.",
            en: "A consistent professional register, but disagreement or refusal is phrased so directly that it lands as abrupt.",
          },
          {
            ar: "مستوى مهني ثابت، وصيغ طلب واعتراض مخفَّفة على نحو مناسب دون التباس في المضمون، ومجاملات موجزة في الافتتاح والإقفال.",
            en: "A consistent professional register, requests and disagreement appropriately softened without blurring the substance, and brief courtesies at the open and close.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.les-concision",
        name: { ar: "الإيجاز وطول الدور", en: "Concision and turn length" },
        description: {
          ar: "يُقاس بطول دور المتحدّث قبل أن يمنح المستمع فرصة للردّ، وبنسبة الكلام الذي لا يضيف معلومة.",
          en: "Measured by how long a turn runs before the listener gets a chance to respond, and by the proportion of speech that adds no information.",
        },
        weight: 0.12,
        descriptors: [
          {
            ar: "أدوار تتجاوز الدقيقتين دون توقّف، مع تكرار الفكرة نفسها بصيغ مختلفة.",
            en: "Turns running over two minutes without a break, repeating the same idea in different words.",
          },
          {
            ar: "أدوار طويلة مع حشو ملحوظ وعبارات ملء الفراغ المتكرّرة.",
            en: "Long turns with noticeable padding and repeated filler phrases.",
          },
          {
            ar: "أدوار متوازنة عموماً مع مقطع واحد مطوّل كان يمكن اختصاره.",
            en: "Generally balanced turns with one over-long stretch that could have been cut.",
          },
          {
            ar: "أدوار قصيرة تنتهي بسؤال أو بوقفة تتيح للمستمع الردّ، ولا كلمة بلا وظيفة.",
            en: "Short turns ending in a question or a pause that lets the listener respond, with no word doing nothing.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.les-under-pressure",
        name: {
          ar: "الردّ تحت الضغط والتحقّق من الفهم",
          en: "Responding under pressure and checking understanding",
        },
        description: {
          ar: "ماذا يفعل المتحدّث حين يُقاطَع، أو يُسأل سؤالاً لم يستعدّ له، أو يُطلب منه رقم لا يملكه بالإنكليزية؟ يُقاس بزمن الصمت قبل الردّ، وبوجود صيغ مهلة («let me make sure I follow you»)، وبالاعتراف الصريح بعدم المعرفة، وبالتحقّق من فهم المستمع بعد النقاط الصعبة.",
          en: "What does the speaker do when interrupted, asked a question they did not prepare for, or pressed in English for a figure they do not have? Measured by the silence before the reply, the use of holding forms (\"let me make sure I follow you\"), an express admission of not knowing, and checks on the listener's understanding after difficult points.",
        },
        weight: 0.16,
        descriptors: [
          {
            ar: "ينهار الأداء عند أول سؤال غير متوقّع: صمت طويل ثم انتقال إلى العربية أو إلى موضوع آخر، أو ارتجال جواب موضوعي غير صحيح للتخلّص من السؤال، ولا تحقّق من الفهم إطلاقاً.",
            en: "Performance collapses at the first unexpected question: a long silence then a switch into Arabic or to another topic, or an invented substantive answer given to escape the question, with no understanding check at all.",
          },
          {
            ar: "يجيب لكن بجمل مقطّعة وتكرار للسؤال نفسه، أو يَعِد بجواب لاحق دون تحديد موعده، ويكتفي بسؤال ختامي واحد من نوع «هل هذا واضح؟» دون فرصة حقيقية للردّ.",
            en: "Answers, but in broken sentences that echo the question back, or promises an answer later without saying when, and offers only a single closing \"is that clear?\" with no real opening to respond.",
          },
          {
            ar: "يحافظ على المكالمة: يستعمل صيغة مهلة واحدة، ويعترف بحدود معرفته، ويتحقّق من الفهم في موضعين، لكن الصياغة تحت الضغط تصبح مباشرة أكثر ممّا ينبغي أو تفقد التهذيب.",
            en: "Keeps the call going: uses one holding form, admits the limits of their knowledge and checks understanding at two points, but under pressure the phrasing becomes blunter than it should or loses its courtesy.",
          },
          {
            ar: "يعيد صياغة السؤال الصعب للتأكّد من فهمه، ويقول صراحةً ما لا يعرفه ومتى سيعرفه، ويرفض تقديم رقم أو التزام دون تحقّق، ويطلب من المستمع إعادة الخطوة التالية بكلماته، ويعرض إرسال الخلاصة كتابةً — كل ذلك بالإنكليزية ودون تراجع في المستوى اللغوي.",
            en: "Restates the difficult question to confirm it, says expressly what they do not know and when they will know it, declines to give a figure or a commitment without verification, asks the listener to repeat the next step in their own words, and offers to send the summary in writing — all in English and with no drop in register.",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.les-guarantee",
        label: {
          ar: "وعد شفهي بنتيجة أو بمهلة يقطعها المتحدّث باسم جهة لا يسيطر عليها.",
          en: "A spoken promise of an outcome, or of a deadline given on behalf of a body the speaker does not control.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.les-confidentiality",
        label: {
          ar: "ذكر موكّل آخر أو ملفه أثناء المكالمة، ولو دون تسميته إذا كان قابلاً للتعرّف.",
          en: "Referring to another client or their matter during the call, even unnamed if they are identifiable.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.les-unverified-number",
        label: {
          ar: "إعطاء رقم أو تاريخ حاسم من الذاكرة وتقديمه كمؤكد دون الإشارة إلى وجوب التحقّق منه.",
          en: "Giving a decisive figure or date from memory and presenting it as confirmed without flagging that it must be verified.",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },

  // -------------------------------------------------------------------------
  // 6. Difficult conversation
  // -------------------------------------------------------------------------
  {
    id: "rubric.difficult-conversation.v1",
    name: {
      ar: "إدارة محادثة صعبة مع موكّل",
      en: "Handling a difficult conversation with a client",
    },
    version: "1.0.0",
    skillIds: [
      "skill.difficult-client-basics",
      "skill.expectation-management",
      "skill.avoiding-guarantees",
      "skill.plain-explanation",
      "skill.next-steps-closure",
    ],
    criteria: [
      {
        id: "cr.dc-acknowledge-first",
        name: { ar: "الإقرار قبل الشرح", en: "Acknowledging before explaining" },
        description: {
          ar: "يُقاس بترتيب الأدوار: هل ورد إقرار بما حصل وبأثره على الموكّل قبل أول تبرير أو شرح إجرائي؟",
          en: "Measured by turn order: does an acknowledgement of what happened and its effect on the client appear before the first justification or procedural explanation?",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "يبدأ المتدرّب بالتبرير أو بالشرح الإجرائي، أو يطلب من الموكّل أن يهدأ.",
            en: "The learner opens with a justification or procedural explanation, or asks the client to calm down.",
          },
          {
            ar: "إقرار شكلي بصيغة عامة («نأسف لأي إزعاج») ثم انتقال فوري إلى الشرح.",
            en: "A formulaic acknowledgement (\"we apologise for any inconvenience\") then an immediate shift to explanation.",
          },
          {
            ar: "إقرار يسمّي ما حصل بدقّة، لكنه لا يسمّي أثره العملي على الموكّل قبل الانتقال إلى الشرح.",
            en: "An acknowledgement that names precisely what happened, but does not name its practical effect on the client before moving to explanation.",
          },
          {
            ar: "إقرار يسمّي ما حصل وأثره العملي على الموكّل بكلماته هو، ويُترك للموكّل مجال للردّ عليه قبل أي شرح.",
            en: "An acknowledgement naming what happened and its practical effect on the client in the client's own words, with room left for the client to respond before any explanation.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.dc-ownership",
        name: { ar: "تحمّل المسؤولية دون تحميلها للموكّل", en: "Taking ownership without shifting blame" },
        description: {
          ar: "يُقاس بمن يُنسَب إليه الخلل في النص: المكتب، أم الموكّل، أم جهة مجهولة، أم زميل غائب.",
          en: "Measured by whom the transcript attributes the failure to: the firm, the client, an unnamed party, or an absent colleague.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "نسبة الخلل إلى الموكّل أو إلى زميل بالاسم، أو إنكار وجود خلل رغم الوقائع.",
            en: "The failure is attributed to the client or to a named colleague, or its existence is denied despite the facts.",
          },
          {
            ar: "صيغ مبنية للمجهول تُخفي المسؤول («حصل تأخير»، «لم تُرسَل الأوراق») دون تحديد.",
            en: "Passive constructions that hide the responsible party (\"a delay occurred\", \"the papers were not sent\") with nothing specified.",
          },
          {
            ar: "اعتراف واضح بمسؤولية المكتب، لكن مقروناً بجملة تبريرية تخفّف من وقعه.",
            en: "A clear admission of the firm's responsibility, but paired with a justifying sentence that dilutes it.",
          },
          {
            ar: "اعتراف صريح بمسؤولية المكتب في جملة واحدة دون تبرير، مع بيان ما تغيّر داخلياً لمنع تكراره.",
            en: "An explicit admission of the firm's responsibility in one sentence with no justification, plus what has changed internally to stop it recurring.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.dc-factual-account",
        name: { ar: "سرد واقعي لما حدث", en: "A factual account of what happened" },
        description: {
          ar: "يُقاس بوجود تسلسل زمني محدّد بالتواريخ وبالخطوات، وبالتمييز بين ما هو معلوم وما يحتاج إلى تحقّق.",
          en: "Measured by whether a dated, step-by-step chronology is given, and whether what is known is distinguished from what still needs checking.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "لا سرد للوقائع؛ الردّ كلّه اعتذار وطمأنة، أو معطيات متناقضة داخل المحادثة نفسها.",
            en: "No account of the facts; the whole response is apology and reassurance, or the data given contradicts itself within the same conversation.",
          },
          {
            ar: "سرد عام دون تواريخ («تأخّر الملف بعض الوقت») ودون بيان أين توقّف بالضبط.",
            en: "A general account with no dates (\"the file was delayed for a while\") and no statement of where exactly it stalled.",
          },
          {
            ar: "تسلسل زمني بتواريخ يبيّن أين توقّف الملف، لكن دون تمييز بين المعلوم والمحتاج إلى تحقّق.",
            en: "A dated chronology showing where the matter stalled, but with no distinction between what is known and what needs checking.",
          },
          {
            ar: "تسلسل زمني بالتواريخ، وتحديد النقطة التي توقّف عندها الملف وسببها، وتمييز صريح بين المعلوم وما سيُتحقَّق منه، مع موعد لإبلاغ نتيجة التحقّق.",
            en: "A dated chronology, the exact point at which the matter stalled and why, an explicit split between what is known and what will be verified, and a date for reporting back on the verification.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.dc-holding-the-line",
        name: { ar: "الثبات تحت الضغط دون ضمانات", en: "Holding the line under pressure without guarantees" },
        description: {
          ar: "يُقاس بما يقوله المتدرّب عندما يطلب الموكّل ضمانة أو موعداً قاطعاً أو تنازلاً غير ممكن: هل يعطيه ليُنهي التوتّر، أم يرفض مع تقديم بديل؟",
          en: "Measured by what the learner says when the client demands a guarantee, an absolute date, or an impossible concession: do they give it to end the tension, or decline and offer an alternative?",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "يستجيب المتدرّب للضغط ويعطي ضمانة أو موعداً قاطعاً أو التزاماً لا يملك تنفيذه.",
            en: "The learner yields to the pressure and gives a guarantee, an absolute date, or a commitment they cannot deliver.",
          },
          {
            ar: "يتجنّب المتدرّب الجواب أو يغيّر الموضوع، فيبقى الطلب معلّقاً دون رفض ودون قبول.",
            en: "The learner dodges the question or changes the subject, leaving the demand hanging with neither a refusal nor an acceptance.",
          },
          {
            ar: "رفض واضح للضمانة مع تفسير سببه، لكن دون تقديم بديل عملي يخفّف عن الموكّل.",
            en: "A clear refusal of the guarantee with a reason given, but no practical alternative offered to reduce the client's exposure.",
          },
          {
            ar: "رفض واضح للضمانة، وتفسير لما يستطيع المكتب ضمانه فعلاً (وتيرة العمل، الإبلاغ، جودة التحضير)، وبديل عملي محدّد، وتكرار الموقف نفسه عند تكرار الضغط.",
            en: "A clear refusal of the guarantee, an explanation of what the firm can in fact commit to (pace of work, reporting, quality of preparation), a specific practical alternative, and the same position held when the pressure is repeated.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.dc-remedy",
        name: { ar: "المعالجة والمتابعة الملموسة", en: "Concrete remedy and follow-up" },
        description: {
          ar: "يُقاس بوجود إجراء تصحيحي محدّد بمالك وتاريخ، وبموعد تواصل تالٍ يلتزم به المكتب دون انتظار سؤال الموكّل.",
          en: "Measured by whether a specific corrective action with an owner and a date is given, and whether the firm commits to a next contact without waiting to be asked.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "لا معالجة ولا موعد؛ ينتهي الحوار بوعد عام بالاهتمام بالملف.",
            en: "No remedy and no date; the exchange ends with a general promise to look after the matter.",
          },
          {
            ar: "معالجة معلنة دون مالك ودون تاريخ، أو تعويض عام غير محدّد.",
            en: "A remedy stated with no owner and no date, or an unspecified general concession.",
          },
          {
            ar: "معالجة بمالك وتاريخ واضحين، لكن دون موعد تواصل تالٍ ودون بيان ماذا لو تعثّرت المعالجة.",
            en: "A remedy with a clear owner and date, but no next-contact date and no statement of what happens if the remedy stalls.",
          },
          {
            ar: "معالجة محدّدة بمالك وتاريخ، وموعد تواصل تالٍ يبادر إليه المكتب، وخطة بديلة معلنة إن تعثّرت المعالجة، وتأكيد كتابي بالخلاصة.",
            en: "A specific remedy with an owner and a date, a next-contact date the firm initiates, a stated fallback if the remedy stalls, and a written confirmation of the summary.",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.dc-guarantee-under-pressure",
        label: {
          ar: "إعطاء ضمانة بالنتيجة أو بموعد قاطع لإنهاء التوتّر في اللحظة.",
          en: "Giving a guarantee of the outcome or an absolute date in order to end the tension in the moment.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.dc-dismiss-emotion",
        label: {
          ar: "تجاهل انفعال الموكّل أو التقليل من شأنه: مطالبته بالهدوء، أو وصف قلقه بأنه مبالغة، أو الانتقال إلى الشرح الإجرائي دون أي إقرار بما يشعر به.",
          en: "Dismissing or minimising the client's emotion: telling them to calm down, describing their worry as an over-reaction, or moving into procedural explanation with no acknowledgement of what they feel.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.dc-blame-client",
        label: {
          ar: "تحميل الموكّل مسؤولية تأخير أو خطأ داخلي في المكتب، صراحةً أو تلميحاً.",
          en: "Blaming the client for a delay or error that originated inside the firm, expressly or by implication.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.dc-other-client-comparison",
        label: {
          ar: "الاستشهاد بملف موكّل آخر أو بمشكلته لتبرير التأخير أو لتهوين الأمر.",
          en: "Citing another client's matter or their problem to justify the delay or to minimise it.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.dc-undeliverable-commitment",
        label: {
          ar: "الالتزام بمهلة أو بإجراء يعلم المتدرّب أنه لا يستطيع الوفاء به، أو التعهّد نيابةً عن زميل أو جهة دون سلطة.",
          en: "Committing to a deadline or step the learner knows they cannot meet, or undertaking on behalf of a colleague or a body without authority.",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },
];
