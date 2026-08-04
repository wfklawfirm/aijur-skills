import type { ScenarioDef } from "./types";

/**
 * Firm & Matter Operations simulations for AIJUR Professional Skills Lab.
 *
 * Both scenarios put the learner in a moment where the professional thing to
 * do carries real friction: naming a material error in a senior colleague's
 * work before it goes out, and handing over a live matter completely enough
 * that nothing falls through the gap between two lawyers.
 *
 * Rules honoured throughout:
 *  - no scenario rewards staying silent about a real error to avoid an
 *    awkward conversation;
 *  - no scenario rewards a vague, unspecific flag ("something feels off")
 *    over a concrete, evidenced correction;
 *  - no scenario rewards an accusatory or point-scoring tone toward a
 *    senior colleague, or unilaterally acting behind their back;
 *  - no scenario rewards a wall-of-information handover, or one that omits
 *    a deadline, a client sensitivity, or what not to say to the client;
 *  - every scenario has a text-only route.
 */
export const FIRM_OPERATIONS_SCENARIOS: ScenarioDef[] = [
  // ---------------------------------------------------------------------------
  // 1. Flagging a quality issue in a supervising lawyer's draft (stage 3)
  // ---------------------------------------------------------------------------
  {
    id: "scn.flagging-a-quality-issue",
    title: {
      ar: "الإبلاغ عن خطأ جوهري قبل صدور الملف",
      en: "Flagging a quality issue before it goes out",
    },
    description: {
      ar: "أثناء المراجعة الأخيرة لملف استئناف قبل إرساله للمحكمة اليوم، تكتشف أن الموعد النهائي المحسوب في مذكرة الشريك المشرف خاطئ فعلياً. عليك إبلاغه بوضوح ودون اتهام، قبل أن يخرج الملف بالخطأ.",
      en: "During the final review of an appeal package due to go to court today, you discover the deadline calculated in the supervising partner's memo is actually wrong. You must raise it clearly and without accusation before the package goes out.",
    },
    skillIds: ["skill.output-quality-control"],
    stage: 3,
    difficulty: 2,
    userRole: {
      ar: "أنت محامٍ في سنتك الثانية في مكتب كتانة للمحاماة ببيروت. كلّفك الشريك المشرف إيلي سركيس بتجهيز حزمة استئناف حكم ابتدائي صدر ضد عميلكم شركة نورس لتجارة التجزئة، للإرسال إلى المحكمة عبر المراسل اليوم بعد الظهر.",
      en: "You are a second-year associate at Kettaneh Law Firm in Beirut. Supervising partner Elie Sarkis has assigned you to prepare an appeal package against a first-instance judgment against your client, Nawras Retail Group, for courier filing with the court this afternoon.",
    },
    character: {
      id: "char.elie-sarkis",
      name: { ar: "إيلي سركيس", en: "Elie Sarkis" },
      role: {
        ar: "الشريك المشرف على ملف الاستئناف، محامٍ متمرّس في التقاضي التجاري والعمالي منذ أكثر من خمسة عشر عاماً.",
        en: "Supervising partner on the appeal file, an experienced commercial and labor litigator of more than fifteen years.",
      },
      personality: {
        ar: "واثق من حساباته الإجرائية الخاصة، يعتمد على خبرته المتراكمة أكثر من إعادة التحقق من كل تفصيل. ليس عدائياً تجاه من يسأله، لكنه لا يتراجع عن رأيه إلا بدليل ملموس ومحدد.",
        en: "Confident in his own procedural calculations, relying on accumulated experience rather than re-verifying every detail. Not hostile to being questioned, but he won't budge without concrete, specific proof.",
      },
      emotionalState: {
        ar: "منشغل بثلاث جلسات محكمة اليوم، ينفد صبره بسرعة مع أي نقاش يهدد بتأخير خروج الحزمة، ويصبح مدافعاً عن نفسه في اللحظة الأولى إن شعر أن أحداً يشكك في دقّته.",
        en: "Juggling three court hearings today, his patience runs out fast with anything that threatens to delay the package going out, and he turns defensive the instant he senses someone is questioning his accuracy.",
      },
      knownInformation: {
        ar: [
          "أعدّ مذكرة الاستئناف بنفسه، وحسب الموعد النهائي بعدّ خمسة عشر يوماً من تاريخ صدور الحكم الابتدائي، كما اعتاد أن يفعل في معظم ملفاته.",
          "يريد أن تخرج الحزمة كاملة عبر المراسل قبل نهاية الدوام اليوم كما هو مخطط أصلاً، دون أي تعديل في اللحظة الأخيرة.",
          "لديه ثلاث جلسات محكمة اليوم، ويعتبر هذا الملف منتهياً من ناحيته بعد أن راجعه ووقّعه أمس.",
          "يذكّرك بأنه يحسب مواعيد الاستئناف بهذه الطريقة منذ سنوات دون أي مشكلة سابقة.",
          "يفضّل حواراً مباشراً ومختصراً؛ أي مقدمة طويلة تزيد من انزعاجه لا من إقناعه.",
        ],
        en: [
          "He drafted the appeal memo himself and calculated the deadline by counting fifteen days from the date the first-instance judgment was issued, as he usually does on most of his files.",
          "He wants the full package out through the courier before the end of the day today, exactly as planned, with no last-minute changes.",
          "He has three court hearings today, and considers this file closed on his end since he reviewed and signed it yesterday.",
          "He reminds you he has calculated appeal deadlines this way for years without any prior problem.",
          "He prefers a direct, short conversation; a long preamble raises his irritation rather than his attention.",
        ],
      },
      hiddenInformation: {
        ar: [
          "لم يطّلع بعد على سجل التبليغ الرسمي للحكم في ملف المحكمة، والذي يُظهر أن الحكم بُلّغ للعميل عبر مندوب التنفيذ قبل عشرة أيام من صدوره فعلياً — قبل أن يتسلّم هو الملف حتى.",
          "بحسب القانون، مدة الاستئناف تُحتسب من تاريخ التبليغ الرسمي لا من تاريخ صدور الحكم؛ وهذا يعني أن الموعد الحقيقي بعد ثلاثة أيام فقط، لا بعد اثني عشر يوماً كما يظن.",
          "إذا عُرض عليه رقم صفحة سجل التبليغ وتاريخه بوضوح، يتوقف فوراً عن الدفاع عن حسابه ويطلب رؤية المستند بنفسه.",
          "إذا شعر أن المتدرّب يتردّد أو يتكلم بصيغة غامضة («ممكن يكون في خطأ»)، يتجاهل الملاحظة ويطلب المتابعة بالخطة الأصلية.",
          "بعد أن يتأكد من الخطأ، يفضّل تحرّكاً فورياً وعملياً (تعديل الموعد وتأكيد الإرسال اليوم) لا نقاشاً مطوّلاً حول سبب حدوث الخطأ.",
        ],
        en: [
          "He hasn't yet checked the court file's official notification record, which shows the judgment was formally served on the client via a bailiff ten days before it was even issued in writing — before he received the file at all.",
          "Under procedure, the appeal period runs from the date of formal notification, not the date the judgment was issued; this means the real deadline is only three days away, not twelve as he believes.",
          "If shown the notification record's page and date clearly, he stops defending his own count immediately and asks to see the document himself.",
          "If he senses the learner is hesitant or speaking vaguely — \"there might be a mistake\" — he waves the comment off and asks to proceed with the original plan.",
          "Once convinced of the error, he wants immediate, practical action — correcting the deadline and confirming today's filing — not a long discussion of how the error happened.",
        ],
      },
      goal: {
        ar: "أن تخرج حزمة الاستئناف اليوم كما هو مخطط، دون مفاجآت في اللحظة الأخيرة تُبعده عن جلساته الثلاث.",
        en: "To get the appeal package out today as planned, with no last-minute surprises pulling him away from his three hearings.",
      },
    },
    culturalContext: {
      ar: "في ثقافة مكاتب المحاماة، تصحيح شريك مشرف قد يُقرأ كتشكيك في خبرته إذا جاء بصيغة اتهامية أو أمام الآخرين. الأسلوب المهني هو طرح الملاحظة بدليل محدد وبصيغة تُبقي القرار النهائي بيده.",
      en: "In law firm culture, correcting a supervising partner can read as questioning his competence if it lands as an accusation, especially in front of others. The professional approach is to raise it with specific evidence, framed so the final call still sits with him.",
    },
    languageMode: "bilingual",
    background: {
      ar: [
        "خسر عميلكم نورس لتجارة التجزئة دعوى إنهاء خدمة أمام محكمة أول درجة، وقرّر إيلي الاستئناف.",
        "أعدّ إيلي مذكرة الاستئناف وحسب الموعد النهائي بخمسة عشر يوماً من تاريخ صدور الحكم، ووقّع الحزمة أمس دون مراجعة سجل التبليغ.",
        "أثناء تجهيزك للحزمة للإرسال اليوم، فتحت ملف المحكمة الإلكتروني لتأكيد رقم القضية، ووجدت سجل تبليغ رسمي يُظهر أن الحكم بُلّغ قبل عشرة أيام من صدوره.",
        "إن صحّ هذا التاريخ، فالموعد النهائي الحقيقي بعد ثلاثة أيام فقط، لا اثني عشر يوماً كما يظن إيلي — وإن أُرسلت الحزمة اليوم بموعد إيلي الأصلي، سيبدو الأمر آمناً بينما الحق في الاستئناف يكون سقط فعلياً.",
      ],
      en: [
        "Your client, Nawras Retail Group, lost a wrongful-termination case at first instance, and Elie decided to appeal.",
        "Elie drafted the appeal memo, calculated the deadline as fifteen days from the judgment's issuance date, and signed off on the package yesterday without checking the notification record.",
        "While preparing the package for today's filing, you opened the court's electronic file to confirm the case number and found an official notification record showing the judgment was served ten days before it was issued.",
        "If that date is correct, the real deadline is only three days away, not twelve as Elie believes — and if the package goes out today on his original schedule, it will look safe while the right to appeal has actually already lapsed.",
      ],
    },
    userGoal: {
      ar: "أن تُبلغ إيلي بالخطأ بوضوح وبدليل محدد، دون امتثال صامت يترك الحزمة تخرج بموعد خاطئ، ودون صيغة اتهامية تُضعف استعداده للاستماع.",
      en: "To tell Elie about the error clearly and with specific evidence, without silently letting the package go out on the wrong deadline, and without an accusatory tone that makes him less willing to listen.",
    },
    opening: {
      ar: "«[اسمك]، لسه هون؟ الحزمة لازم تطلع مع المراسل الساعة أربعة، وعندي جلسة بعد نص ساعة. في شي ناقص؟»",
      en: "\"[Your name], you're still here? The package needs to go out with the courier at four, and I've got a hearing in half an hour. Is something missing?\"",
    },
    decisionPoints: [
      {
        id: "dp.fqi.raising-it-clearly",
        label: {
          ar: "طرح الملاحظة بوضوح: هل يذكر المتدرّب الخطأ في الموعد النهائي بشكل محدد ومبكر، مستنداً إلى سجل التبليغ، بدل الإرسال الصامت أو الإشارة الغامضة؟",
          en: "Raising it clearly: does the learner name the deadline error specifically and early, grounded in the notification record, rather than staying silent or hinting vaguely?",
        },
        triggerAfterTurn: 2,
      },
      {
        id: "dp.fqi.holding-ground-with-evidence",
        label: {
          ar: "الثبات بالدليل: عندما يدافع إيلي عن حسابه الأصلي، هل يقدّم المتدرّب تاريخ ورقم سجل التبليغ بهدوء واحترام دون التراجع الكامل عن الملاحظة؟",
          en: "Holding ground with evidence: when Elie defends his original count, does the learner present the notification record's date and reference calmly and respectfully, without fully backing down from the point?",
        },
        triggerAfterTurn: 5,
      },
      {
        id: "dp.fqi.proposing-the-fix",
        label: {
          ar: "اقتراح الحل: هل يقترح المتدرّب خطوة عملية فورية (تعديل الموعد، تأكيد الإرسال اليوم بالتاريخ الصحيح) بدل الاكتفاء بذكر المشكلة؟",
          en: "Proposing the fix: does the learner propose an immediate practical step — correcting the deadline, confirming today's filing on the right date — rather than just naming the problem?",
        },
        triggerAfterTurn: 8,
      },
    ],
    expectedBehaviors: [
      {
        ar: "يطرح الملاحظة خلال الأدوار الأولى بدل تأجيلها أو تركها لتخرج الحزمة كما هي.",
        en: "Raises the concern within the first few turns instead of delaying it or letting the package go out as is.",
      },
      {
        ar: "يذكر تاريخ التبليغ ورقم السجل تحديداً، لا شعوراً عاماً بأن «شيئاً غير صحيح».",
        en: "Names the notification date and record reference specifically, not a general feeling that \"something's off.\"",
      },
      {
        ar: "يصوغ الملاحظة كسؤال أو معلومة جديدة، لا كتصحيح يشكك في خبرة إيلي أمام الآخرين.",
        en: "Frames the point as a question or new information, not a correction that questions Elie's competence in front of others.",
      },
      {
        ar: "يبقى ثابتاً على الدليل حتى مع دفاع إيلي الأول، دون التراجع الكامل لتجنّب التوتر.",
        en: "Stays grounded in the evidence even through Elie's first pushback, without fully retreating to avoid friction.",
      },
      {
        ar: "يقترح خطوة عملية فورية (تصحيح الموعد، تأكيد الإرسال اليوم) بدل الاكتفاء بالإبلاغ عن المشكلة.",
        en: "Proposes an immediate practical step — correcting the deadline, confirming today's filing — rather than stopping at flagging the problem.",
      },
    ],
    criticalMistakes: [
      {
        ar: "يترك الحزمة تخرج بالموعد الخاطئ دون ذكر ما وجده، تجنباً لحوار محرج مع إيلي.",
        en: "Lets the package go out on the wrong deadline without mentioning what he found, to avoid an awkward conversation with Elie.",
      },
      {
        ar: "يذكر الملاحظة بصيغة غامضة («يمكن في مشكلة بالموعد») تسهّل على إيلي تجاهلها.",
        en: "Raises the point in vague language — \"there might be an issue with the deadline\" — that makes it easy for Elie to dismiss.",
      },
      {
        ar: "يقول لإيلي بشكل مباشر إنه أخطأ أو لم يراجع الملف جيداً أمام آخرين في المكتب.",
        en: "Tells Elie directly, in front of others in the office, that he made a mistake or didn't review the file properly.",
      },
      {
        ar: "يتراجع كلياً عن الملاحظة بعد أول رد دفاعي من إيلي، رغم امتلاكه الدليل.",
        en: "Fully drops the point after Elie's first defensive response, despite holding the evidence.",
      },
      {
        ar: "يقرر بصمت تعديل الموعد وإرسال الحزمة بنفسه دون إبلاغ إيلي بالتغيير إطلاقاً.",
        en: "Silently decides to correct the deadline and send the package himself without ever telling Elie about the change.",
      },
    ],
    successConditions: [
      {
        ar: "ظهرت الملاحظة بوضوح ومسنودة بتاريخ التبليغ خلال الأدوار الأولى.",
        en: "The concern surfaced clearly, backed by the notification date, within the first few turns.",
      },
      {
        ar: "اطّلع إيلي على سجل التبليغ وتأكّد من الموعد الصحيح قبل انتهاء الحوار.",
        en: "Elie became aware of the notification record and confirmed the correct deadline before the session ended.",
      },
      {
        ar: "اتُّفق على خطوة عملية فورية لتصحيح الموعد وتأكيد الإرسال اليوم.",
        en: "An immediate practical step to correct the deadline and confirm today's filing was agreed on.",
      },
      {
        ar: "بقيت النبرة مهنية وغير اتهامية من الطرفين طوال الحوار.",
        en: "The tone stayed professional and non-accusatory from both sides throughout.",
      },
      {
        ar: "لم تخرج الحزمة في أي لحظة بالموعد الخاطئ دون تصحيح.",
        en: "The package never went out at any point on the uncorrected deadline.",
      },
    ],
    exitConditions: [
      {
        ar: "بلغ الحوار الحدّ الأقصى للأدوار.",
        en: "The conversation reaches the maximum number of turns.",
      },
      {
        ar: "أكّد إيلي الموعد الصحيح ووافق على خطوة عملية لتصحيح الحزمة قبل إرسالها.",
        en: "Elie confirmed the correct deadline and agreed on a practical step to fix the package before it goes out.",
      },
      {
        ar: "ارتكب المتدرّب خطأً حاسماً وأصرّ عليه بعد أن سأله إيلي مباشرة: «متأكد إنه في خطأ فعلاً؟» — عندها تُقفل الجلسة وتُعرض التغذية الراجعة.",
        en: "The learner made a critical mistake and held to it after Elie directly asks, \"are you sure there's actually a mistake?\" — at that point the session closes and feedback is shown.",
      },
      {
        ar: "شعر إيلي أن الملاحظة تبقى غامضة بلا دليل واضح بعد أن سأل مرتين، فيقرر المتابعة بخطته الأصلية وينهي الحوار.",
        en: "Sensing the concern stays vague with no clear evidence after asking twice, Elie decides to proceed with his original plan and ends the conversation.",
      },
    ],
    rubricId: "rubric.firm-operations-sim.v1",
    coachingNotes: {
      ar: [
        "السكوت عن خطأ جوهري لتجنّب حوار محرج لا يحمي أحداً؛ إن سقط حق العميل في الاستئناف، تتحمّل مسؤوليتك المهنية أيضاً.",
        "الدليل المحدد (تاريخ التبليغ، رقم السجل) أقنع بكثير من عبارة «حاسس في شي غلط».",
        "طرح الملاحظة كمعلومة جديدة وجدتها، لا كتصحيح لخطأ إيلي، يفتح باب الاستماع بدل إغلاقه.",
        "التراجع الكامل عند أول دفاع من الطرف الآخر لا يختلف كثيراً عن السكوت من البداية؛ الثبات المحترم بالدليل هو ما يحمي الملف.",
        "الحل العملي الجاهز (موعد مصحّح، خطة إرسال) أقوى بكثير من مجرد الإشارة إلى المشكلة.",
        "القرار النهائي بشأن كيفية التصرف يبقى بيد الشريك المشرف؛ دورك أن تضمن أنه يقرر وهو يملك المعلومة الصحيحة.",
      ],
      en: [
        "Staying silent about a material error to avoid an awkward conversation protects no one — if the client's appeal right lapses, you carry professional responsibility too.",
        "Specific evidence — the notification date, the record reference — is far more persuasive than \"I have a feeling something's wrong.\"",
        "Framing the point as new information you found, not a correction of Elie's error, keeps him listening instead of shutting down.",
        "Fully backing down at the first defensive reply isn't much different from staying silent from the start; respectful persistence backed by evidence is what protects the file.",
        "A ready practical fix — a corrected date, a filing plan — is far stronger than simply pointing at the problem.",
        "The final call on how to proceed stays with the supervising partner; your job is to make sure he decides with the correct information in hand.",
      ],
    },
    maxTurns: 10,
    estimatedMinutes: 9,
    accessibilityAlternative: {
      ar: "يمكن إجراء الحوار كاملاً كتابةً: تظهر ردود إيلي سركيس نصّاً ويكتب المتدرّب ردوده، بالمدّة نفسها وعدد الأدوار نفسه وبلا فارق في التقييم.",
      en: "The whole conversation can be run in writing: Elie Sarkis's responses appear as text and the learner types replies, with the same duration, same number of turns, and no scoring difference.",
    },
    sourceIds: ["src.legal-project-management", "src.legal-ops-kpis"],
    contentVersion: "1.0.0",
  },

  // ---------------------------------------------------------------------------
  // 2. Handing over a live matter before leave (stage 4)
  // ---------------------------------------------------------------------------
  {
    id: "scn.handing-over-your-matter",
    title: {
      ar: "تسليم الملف قبل الإجازة",
      en: "Handing over your matter before leave",
    },
    description: {
      ar: "تغادر إلى إجازة طويلة بعد يومين، وعليك تسليم ملف صفقة استحواذ نشط لزميلتك فرح شديد في مكالمة حيّة اليوم. زميلتك مثقلة ومستعجلة وتفضّل أن ترسل لها الملف كاملاً بدل جلسة تسليم منظمة.",
      en: "You leave for extended leave in two days and must hand over an active acquisition file to your colleague Farah Chidiac in a live call today. She's overloaded and in a hurry, and would rather you just send her the whole file than sit through a structured handover.",
    },
    skillIds: ["skill.matter-handover"],
    stage: 4,
    difficulty: 3,
    userRole: {
      ar: "أنت محامٍ أول في مكتب عبيد وسلوم بعمّان، تتولى صفقة بيع حصة أقلية في شركة بولس للأجهزة المنزلية إلى مستثمر إقليمي، شركة ليفانت كابيتال بارتنرز. تغادر في إجازة أمومة لعشرة أسابيع بدءاً من بعد غد.",
      en: "You are a senior associate at Obeid & Salloum in Amman, running the sale of a minority stake in Boulos Home Appliances to a regional investor, Levant Capital Partners. You go on ten weeks of maternity leave starting the day after tomorrow.",
    },
    character: {
      id: "char.farah-chidiac",
      name: { ar: "فرح شديد", en: "Farah Chidiac" },
      role: {
        ar: "محامية متوسطة الأقدمية في قسم الشركات، ستتولى ملف صفقة بولس بالكامل ابتداءً من غدك الأخير في المكتب.",
        en: "A mid-level associate in the corporate department, taking over the Boulos deal file completely starting your last day in the office tomorrow.",
      },
      personality: {
        ar: "كفؤة ومباشرة، تحب الاختصار والنقاط الواضحة، وتميل لتفضيل «أرسليلي الملف وأنا بترتب حالي» على جلسة تسليم مطوّلة تراها مضيعة وقت.",
        en: "Competent and direct, likes brevity and clear bullet points, and tends to prefer \"just send me the file and I'll sort myself out\" over a long handover session she sees as a waste of time.",
      },
      emotionalState: {
        ar: "متوترة قليلاً؛ تضيف هذا الملف فوق حمل عملها الحالي، وقلقة من أن تُفاجأ بشيء لم تُخبَر به بعد مغادرتك.",
        en: "Mildly stressed; she's adding this file on top of her current workload, and worried she'll be blindsided by something she wasn't told once you're gone.",
      },
      knownInformation: {
        ar: [
          "تعرف أن الملف هو صفقة بيع حصة أقلية في شركة بولس للأجهزة المنزلية لمستثمر اسمه ليفانت كابيتال بارتنرز.",
          "تعرف أنك تغادرين بعد غد، وأن عليها إدارة الملف بالكامل بمفردها ابتداءً من ذلك التاريخ.",
          "لديها التزامات أخرى هذا الأسبوع، وتفضّل مبدئياً أن تستلم الملف عبر البريد الإلكتروني بدل جلسة تسليم حيّة طويلة.",
          "تعرف أن العميل هو عائلة بولس، دون تفاصيل إضافية عن هيكل الملكية أو من يتعامل معه فعلياً داخل العائلة.",
          "لم تُطلع بعد على أي مواعيد نهائية محددة أو حساسيات خاصة بالعميل في هذا الملف.",
        ],
        en: [
          "She knows the file is the sale of a minority stake in Boulos Home Appliances to an investor called Levant Capital Partners.",
          "She knows you leave the day after tomorrow, and she has to run the whole file alone starting that date.",
          "She has other commitments this week, and initially prefers to receive the file by email rather than sit through a long live handover.",
          "She knows the client is the Boulos family, with no further detail on the ownership structure or who inside the family actually deals with the firm.",
          "She hasn't yet been told of any specific deadlines or client sensitivities on this file.",
        ],
      },
      hiddenInformation: {
        ar: [
          "إذا شعرت أن المتدرّب سيكتفي بإرسال الملف كاملاً دون جلسة حيّة، توافق مبدئياً لكنها تبقى قلقة وتطرح أسئلة متقطعة لاحقاً تكشف فجوات حقيقية.",
          "إذا لم يُذكر لها تاريخ محدد لتسليم جدول الإفصاح لمحامي المشتري (بعد خمسة أيام)، تفترض أن لديها وقتاً أطول وتؤجله فعلياً.",
          "إذا لم تُخبر بوجود خلاف بين الأخوين إلياس وشربل بولس، قد تتعامل مع شربل كجهة اتصال رئيسية عند اتصاله بها، وهذا قد يكشف تفاصيل تفاوضية حساسة.",
          "إذا سمعت سرداً زمنياً مطولاً لكل بريد إلكتروني ومكالمة سابقة، تفقد التركيز وتفوّتها النقاط المهمة وسط التفاصيل غير الضرورية.",
          "إذا أُعطيت هيكلاً واضحاً (الوضع الحالي، المواعيد، الحساسيات، ما لا يُقال للعميل) واسم شريك تلجأ إليه عند الحاجة، تشعر بارتياح واضح وتؤكد كل نقطة بنفسها قبل إنهاء المكالمة.",
        ],
        en: [
          "If she senses the learner will settle for just sending over the whole file with no live session, she agrees at first but stays anxious and later asks scattered questions that reveal real gaps.",
          "If not told a specific date for delivering the disclosure schedule to the buyer's counsel (in five days), she assumes she has more time and effectively lets it slip.",
          "If not told about the conflict between brothers Elias and Charbel Boulos, she may treat Charbel as a primary contact when he calls, risking exposure of sensitive negotiating detail.",
          "If given a long chronological narrative of every past email and call, she loses focus and misses the important points buried in unnecessary detail.",
          "If given a clear structure — current status, deadlines, sensitivities, what not to tell the client — plus the name of a partner she can turn to, she visibly relaxes and confirms each point herself before ending the call.",
        ],
      },
      goal: {
        ar: "أن تخرج من هذا التسليم بما يكفي لإدارة الملف بأمان بمفردها، دون أن تُفاجأ لاحقاً بشيء لم تُخبَر به.",
        en: "To come out of this handover with enough to safely run the file alone, without later being blindsided by something she wasn't told.",
      },
    },
    culturalContext: {
      ar: "في مكاتب المحاماة الإقليمية، تسليم ملف نشط غالباً ما يتم بسرعة وسط ضغط المواعيد، فيميل الطرفان إلى الاختصار المفرط أو إرسال الملف كاملاً دون تمييز الأهم من التفاصيل. المهارة الحقيقية هي بناء إيجاز منظم يحمي الطرفين والعميل معاً.",
      en: "In regional law firms, handing over an active file often happens quickly under deadline pressure, and both sides tend toward either over-brevity or dumping the whole file with no distinction between what matters and what doesn't. The real skill is building a structured briefing that protects both colleagues and the client.",
    },
    languageMode: "bilingual",
    background: {
      ar: [
        "تديرين منذ ثلاثة أشهر صفقة بيع حصة أقلية في شركة بولس للأجهزة المنزلية، شركة عائلية، إلى ليفانت كابيتال بارتنرز.",
        "المفاوضات الحالية تتركز على سقف التعويض عن الإخلال (indemnification cap) وبند عدم المنافسة للمؤسسين، ولم يُحسم أي منهما بعد.",
        "جدول الإفصاح النهائي مستحق لمحامي المشتري خلال خمسة أيام، ولديك مكالمة مجدولة مع إلياس بولس، الشريك الأغلبي وجهة الاتصال الرئيسية، بعد يومين.",
        "شربل بولس، شقيق إلياس والمساهم الأقلي، متحفظ على الصفقة ويتصل بالمكتب مباشرة أحياناً؛ لا يجوز إطلاعه على تفاصيل التفاوض الجارية لأنه ليس جهة الاتصال المعتمدة وقد يصعّد الأمر مع المشتري.",
      ],
      en: [
        "For three months you've been running the sale of a minority stake in Boulos Home Appliances, a family business, to Levant Capital Partners.",
        "Current negotiations center on the indemnification cap and the founders' non-compete clause; neither is settled yet.",
        "The final disclosure schedule is due to the buyer's counsel in five days, and you have a call scheduled with Elias Boulos — the majority partner and primary contact — in two days.",
        "Charbel Boulos, Elias's brother and the minority shareholder, is skeptical of the deal and sometimes contacts the firm directly; he must not be given detail on the live negotiation since he isn't the authorized contact and could escalate matters with the buyer's side.",
      ],
    },
    userGoal: {
      ar: "أن تُجري تسليماً منظماً ومختصراً يغطي الوضع الحالي، المواعيد، حساسيات العميل، وما لا يجب قوله له، دون إغراق فرح بمعلومات زائدة ودون حذف أي نقطة جوهرية.",
      en: "To run a structured, concise handover covering current status, deadlines, client sensitivities, and what not to say to the client — without drowning Farah in excess information and without omitting anything material.",
    },
    opening: {
      ar: "«سمعت إني ورثت ملف بولس! خلص، ابعتيلي كل شي عالإيميل وأنا برتب حالي، عندي اجتماعات ورا بعض اليوم.»",
      en: "\"I heard I'm inheriting the Boulos file! Alright, just email me everything and I'll sort myself out — I've got back-to-back meetings today.\"",
    },
    decisionPoints: [
      {
        id: "dp.hym.insisting-on-the-structure",
        label: {
          ar: "الإصرار على التسليم المنظم: هل يقاوم المتدرّب اقتراح «أرسلي الملف فقط» ويقترح إيجازاً حياً منظماً بدلاً منه؟",
          en: "Insisting on structure: does the learner resist the \"just send the file\" shortcut and propose a short, structured live briefing instead?",
        },
        triggerAfterTurn: 2,
      },
      {
        id: "dp.hym.deadlines-and-sensitivities",
        label: {
          ar: "المواعيد والحساسيات: هل يذكر المتدرّب تاريخ جدول الإفصاح ومكالمة إلياس تحديداً، ويشرح خلاف الأخوين وما لا يجوز قوله لشربل، دون إغراق فرح بسرد زمني كامل؟",
          en: "Deadlines and sensitivities: does the learner name the disclosure schedule date and the Elias call specifically, and explain the brothers' conflict and what not to tell Charbel, without drowning Farah in a full chronological narrative?",
        },
        triggerAfterTurn: 5,
      },
      {
        id: "dp.hym.confirming-and-closing",
        label: {
          ar: "التأكيد والختام: هل يتأكد المتدرّب أن فرح استوعبت النقاط الجوهرية وتعرف لمن تلجأ عند الحاجة، قبل إنهاء المكالمة؟",
          en: "Confirming and closing: does the learner make sure Farah has absorbed the key points and knows who to turn to if needed, before ending the call?",
        },
        triggerAfterTurn: 8,
      },
    ],
    expectedBehaviors: [
      {
        ar: "يقاوم اقتراح «أرسلي الملف فقط» ويصرّ بلطف على إيجاز حيّ مختصر.",
        en: "Resists the \"just send the file\" shortcut and gently insists on a short live briefing.",
      },
      {
        ar: "يذكر تاريخين محددين بوضوح: موعد جدول الإفصاح ومكالمة إلياس القادمة.",
        en: "States two specific dates clearly: the disclosure schedule deadline and the upcoming call with Elias.",
      },
      {
        ar: "يشرح خلاف الأخوين وتحديداً ما لا يجوز قوله لشربل، لا مجرد الإشارة العابرة إلى وجود حساسية عائلية.",
        en: "Explains the brothers' conflict and specifically what must not be told to Charbel, not just a passing mention that a family sensitivity exists.",
      },
      {
        ar: "يُبقي الإيجاز مركّزاً على ما تحتاجه فرح فعلياً، لا سرداً زمنياً كاملاً لكل بريد ومكالمة سابقة.",
        en: "Keeps the briefing focused on what Farah actually needs, not a full chronological account of every past email and call.",
      },
      {
        ar: "يتأكد قبل الإنهاء أن فرح استوعبت النقاط الجوهرية وتعرف اسم من تلجأ إليه عند الحاجة.",
        en: "Confirms before ending that Farah has absorbed the key points and knows who to turn to if needed.",
      },
    ],
    criticalMistakes: [
      {
        ar: "يوافق على إرسال الملف بالبريد فقط دون أي جلسة تسليم حيّة.",
        en: "Agrees to just email the file with no live handover session at all.",
      },
      {
        ar: "يسرد كل بريد ومكالمة سابقة بالتفصيل، فتضيع النقاط الجوهرية وسط تفاصيل غير ضرورية.",
        en: "Recounts every past email and call in detail, burying the essential points in unnecessary detail.",
      },
      {
        ar: "ينسى ذكر خلاف الأخوين أو ما لا يجوز قوله لشربل، تاركاً فرح معرّضة لخطأ حقيقي.",
        en: "Forgets to mention the brothers' conflict or what must not be told to Charbel, leaving Farah exposed to a real mistake.",
      },
      {
        ar: "لا يذكر تاريخاً محدداً لجدول الإفصاح، فتظن فرح أن أمامها وقتاً أطول مما هو متاح فعلياً.",
        en: "Never states a specific date for the disclosure schedule, so Farah assumes she has more time than she actually does.",
      },
      {
        ar: "ينهي المكالمة دون التأكد أن فرح استوعبت النقاط الأساسية أو تعرف لمن تلجأ عند الحاجة.",
        en: "Ends the call without confirming Farah has absorbed the key points or knows who to turn to if needed.",
      },
    ],
    successConditions: [
      {
        ar: "جرت جلسة تسليم حيّة منظمة غطّت الوضع الحالي والمواعيد والحساسيات وما لا يُقال للعميل.",
        en: "A structured live handover happened, covering current status, deadlines, sensitivities, and what not to say to the client.",
      },
      {
        ar: "استطاعت فرح إعادة ذكر موعد جدول الإفصاح الصحيح بنفسها.",
        en: "Farah could correctly restate the disclosure schedule deadline herself.",
      },
      {
        ar: "فهمت فرح خلاف الأخوين تحديداً وما لا يجوز قوله لشربل عند اتصاله.",
        en: "Farah specifically understood the brothers' conflict and what not to tell Charbel if he calls.",
      },
      {
        ar: "عرفت فرح اسم الشريك أو الزميل الذي تلجأ إليه إذا احتاجت سياقاً إضافياً عن الصفقة.",
        en: "Farah knew the name of the partner or colleague to turn to if she needed additional context on the deal.",
      },
      {
        ar: "بقي الإيجاز مختصراً ومركّزاً، دون تحوّله إلى إغراق بالمعلومات.",
        en: "The briefing stayed concise and focused, without turning into an information dump.",
      },
    ],
    exitConditions: [
      {
        ar: "بلغ الحوار الحدّ الأقصى للأدوار.",
        en: "The conversation reaches the maximum number of turns.",
      },
      {
        ar: "أكّدت فرح صراحة أنها تملك ما تحتاجه وأن التسليم اكتمل.",
        en: "Farah explicitly confirmed she has what she needs and the handover is complete.",
      },
      {
        ar: "ارتكب المتدرّب خطأً حاسماً وأصرّ عليه بعد أن سألته فرح مباشرة: «يعني ما في شي ثاني لازم أعرفه؟» — عندها تُقفل الجلسة وتُعرض التغذية الراجعة.",
        en: "The learner made a critical mistake and held to it after Farah directly asks, \"so there's nothing else I need to know?\" — at that point the session closes and feedback is shown.",
      },
      {
        ar: "شعرت فرح ببقاء فجوات حقيقية بعد أن طرحت سؤالين متابعين دون إجابة واضحة، فتنهي المكالمة قلقة.",
        en: "Sensing real gaps remain after two follow-up questions go without a clear answer, Farah ends the call worried.",
      },
    ],
    rubricId: "rubric.firm-operations-sim.v1",
    coachingNotes: {
      ar: [
        "إرسال الملف كاملاً بلا جلسة حيّة يبدو اختصاراً للوقت، لكنه ينقل عبء الفرز الحقيقي كاملاً إلى الزميلة المستلمة.",
        "التاريخ المحدد («خمسة أيام») يحمي الملف؛ العبارة العامة («قريباً») تُفهم عادة بأنها أطول مما هي فعلاً.",
        "حساسية العميل («لا تقولي X لشربل») يجب أن تُقال بوضوح تام، لا أن تُترك للزميلة لتستنتجها بنفسها.",
        "التسليم الجيد يميّز بين ما يجب معرفته الآن وما هو خلفية تاريخية يمكن الرجوع إليها لاحقاً في الملف.",
        "التأكيد الصريح («خبريني شو فهمتي») يكشف الفجوات قبل أن تصبح أخطاء فعلية بعد مغادرتك.",
        "إعطاء اسم شخص تلجأ إليه الزميلة عند الحاجة أهم أحياناً من أي تفصيل إضافي في الإيجاز نفسه.",
      ],
      en: [
        "Sending the whole file with no live session feels like a time-saver, but it shifts the entire burden of sorting priority to the colleague picking it up.",
        "A specific date — \"five days\" — protects the file; a vague phrase — \"soon\" — is usually read as more time than actually exists.",
        "A client sensitivity — \"don't tell Charbel X\" — needs to be said in plain terms, not left for the colleague to infer on her own.",
        "A good handover distinguishes what needs to be known now from historical background that can be looked up in the file later.",
        "An explicit confirmation — \"tell me what you understood\" — surfaces gaps before they become real mistakes after you're gone.",
        "Giving the name of someone the colleague can turn to matters sometimes more than any extra detail in the briefing itself.",
      ],
    },
    maxTurns: 12,
    estimatedMinutes: 11,
    accessibilityAlternative: {
      ar: "يمكن إجراء الحوار كاملاً كتابةً: تظهر ردود فرح شديد نصّاً ويكتب المتدرّب ردوده، بالمدّة نفسها وعدد الأدوار نفسه وبلا فارق في التقييم.",
      en: "The whole conversation can be run in writing: Farah Chidiac's responses appear as text and the learner types replies, with the same duration, same number of turns, and no scoring difference.",
    },
    sourceIds: ["src.legal-project-management", "src.governance-raci"],
    contentVersion: "1.0.0",
  },
];
