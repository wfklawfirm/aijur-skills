import type { ScenarioDef } from "./types";

/**
 * Teamwork & Leadership simulations for AIJUR Professional Skills Lab.
 *
 * Both scenarios put the learner in a position of influence without formal
 * command: disagreeing upward with a supervising partner on matter strategy,
 * and securing a busy peer's cooperation with no reporting line to lean on.
 * Neither scenario rewards silent compliance, insubordination, demanding
 * compliance the learner has no authority to demand, or simply giving up.
 * Good performance always looks like: substantive reasoning, respectful
 * persistence, a concrete ask, and a workable path forward for both sides.
 *
 * Rules honoured throughout:
 *  - no scenario rewards silently going along with a judgment the learner
 *    believes is wrong;
 *  - no scenario rewards undermining or overriding the other person's
 *    authority or legitimate constraints;
 *  - no scenario rewards vague appeals ("please help me out") with no
 *    substantive case attached;
 *  - every scenario has a text-only route.
 */
export const TEAMWORK_LEADERSHIP_SCENARIOS: ScenarioDef[] = [
  // ---------------------------------------------------------------------------
  // 1. Disagreeing with a supervising partner on matter strategy (stage 3)
  // ---------------------------------------------------------------------------
  {
    id: "scn.disagreeing-with-supervisor",
    title: {
      ar: "خلاف مع الشريك المشرف حول استراتيجية الملف",
      en: "Disagreeing with the supervising partner on matter strategy",
    },
    description: {
      ar: "الشريك المشرف يريد تبنّي موقف قانوني هجومي في نزاع تجاري تراه أضعف من بديل متاح. أظهر اعتراضك بأدلة ملموسة، دون امتثال صامت ودون تجاوز صلاحيته.",
      en: "The supervising partner wants to take an aggressive legal position in a commercial dispute that you believe is weaker than an available alternative. Raise your concern with concrete evidence — without silently complying and without overstepping his authority.",
    },
    skillIds: ["skill.managing-up", "skill.teamwork"],
    stage: 3,
    difficulty: 3,
    userRole: {
      ar: "أنت محامٍ في سنتك الثانية في مكتب دياب وشركاه بعمّان. كلّفك الشريك المشرف كريم دياب بصياغة مذكرة الرد في نزاع مقاولة بين عميلكم شركة إعمار الشرق للمقاولات ومالك مشروع تجاري في العبدلي.",
      en: "You are a second-year associate at Diab & Partners in Amman. Supervising partner Karim Diab has assigned you the response memo in a construction dispute between your client, Imar Al-Sharq Contracting, and a commercial project owner in Al-Abdali.",
    },
    character: {
      id: "char.karim-diab",
      name: { ar: "كريم دياب", en: "Karim Diab" },
      role: {
        ar: "الشريك المشرف على ملف نزاع المقاولة، له أكثر من عشرين عاماً من الممارسة في قضايا العقود التجارية والإنشائية.",
        en: "Supervising partner on the construction dispute file, with over twenty years' practice in commercial and construction contract litigation.",
      },
      personality: {
        ar: "حاسم وسريع في اتخاذ القرار، يميل لتوجيه الملفات بخبرته المتراكمة أكثر من مراجعة كل تفصيل بنفسه. ليس معادياً لمن يسأله، لكنه يريد النقاش مبنياً على أدلة، لا على «شعور» أو تحفظ عام.",
        en: "Decisive and fast-moving, tends to steer files on accumulated experience rather than re-reviewing every detail himself. Not hostile to being questioned, but wants pushback grounded in evidence, not a vague \"bad feeling\" or general caution.",
      },
      emotionalState: {
        ar: "منشغل بثلاثة ملفات أخرى هذا الأسبوع، ينفد صبره مع المقدمات الطويلة، لكنه يهدأ ويصغي بجدية إذا سمع نقطة محددة ومسندة بدليل.",
        en: "Stretched across three other files this week, impatient with long preambles, but he calms and listens carefully once he hears a specific, evidence-backed point.",
      },
      knownInformation: {
        ar: [
          "يريد أن تتضمّن مذكرة الرد دفعاً هجومياً ببطلان شرط التحكيم في العقد الأصلي، مستنداً إلى سابقة قضائية أردنية استخدمها بنجاح قبل ثلاث سنوات في نزاع مشابه.",
          "يرى أن هذا الدفع يمنح عميلكم نفوذاً تفاوضياً أقوى وقد يُخرج النزاع بالكامل من التحكيم إلى القضاء العادي، حيث يفضّل موكّلكم التقاضي.",
          "الموعد النهائي لتقديم المذكرة بعد خمسة أيام، ولا مجال لتأجيله.",
          "يذكّرك بأن استراتيجيته نجحت من قبل في ملف مشابه، ويطلب أن تبدأ الصياغة على هذا الأساس اليوم.",
          "يقدّر الوقت؛ يفضّل حواراً مباشراً ومختصراً على اجتماع طويل.",
        ],
        en: [
          "He wants the response memo to lead with an aggressive argument that the arbitration clause in the original contract is void, based on a Jordanian precedent he used successfully three years ago in a similar dispute.",
          "He believes this argument gives your client stronger leverage and could move the whole dispute out of arbitration into ordinary litigation, where your client prefers to be.",
          "The filing deadline is in five days, with no room to extend.",
          "He reminds you his strategy worked before on a similar file, and wants drafting to start on this basis today.",
          "He values time; he prefers a direct, short conversation over a long meeting.",
        ],
      },
      hiddenInformation: {
        ar: [
          "لم يطّلع بعد على التعديل الذي أُدخل على قانون التحكيم الأردني قبل ثمانية أشهر، والذي ضيّق الأساس الذي بُني عليه الدفع ببطلان شرط التحكيم في السابقة التي يستند إليها.",
          "لم يرَ نص المراسلات بين الطرفين وقت التعاقد، والتي تُظهر أن موكّلكم نفسه اقترح شرط التحكيم أصلاً — ما يُضعف حجة البطلان ويحمل خطر تناقض أمام الهيئة.",
          "إذا عُرضت عليه هاتان النقطتان بوضوح ومستندتين، يتراجع فوراً عن الإصرار على الدفع الهجومي ويفتح النقاش على بديل أضعف مخاطرة.",
          "البديل الذي يفضّله المتدرّب — الدفع بعدم الاختصاص الموضوعي جزئياً مع الدفع بفساد التنفيذ — لم يُعرض عليه من قبل؛ لو طُرح بشكل منظم مع الأدلة يتقبّله بسرعة لأنه يحقق الهدف نفسه بمخاطرة أقل.",
          "إذا شعر أن المتدرّب يرفض تنفيذ التوجيه دون تقديم بديل مسنود، يتشدد ويصرّ على مساره الأصلي.",
        ],
        en: [
          "He hasn't yet reviewed an amendment to the Jordanian Arbitration Law from eight months ago that narrowed the basis the precedent he's relying on was built on.",
          "He hasn't seen the correspondence between the parties at contracting time, which shows your own client actually proposed the arbitration clause — undermining the void-clause argument and risking self-contradiction before the tribunal.",
          "If shown both points clearly and with supporting documents, he immediately backs off insisting on the aggressive argument and opens the discussion to a lower-risk alternative.",
          "The alternative you prefer — a partial jurisdiction challenge combined with a defective-performance argument — has never been presented to him; laid out with evidence, he adopts it quickly because it achieves the same goal with less risk.",
          "If he senses the learner is simply refusing to execute the instruction without offering a supported alternative, he hardens and insists on his original approach.",
        ],
      },
      goal: {
        ar: "أن تبدأ صياغة مذكرة رد قوية اليوم على أساس استراتيجية واضحة، دون إهدار وقت في نقاش غير مسنود بدليل.",
        en: "To get drafting of a strong response memo started today on a clear strategy, without wasting time on pushback that isn't backed by evidence.",
      },
    },
    culturalContext: {
      ar: "في ثقافة مكاتب المحاماة، الاعتراض على قرار شريك مشرف أمام فريقه قد يُقرأ كتشكيك في خبرته. الأسلوب المهني هو طرح الاعتراض بأدلة محددة وبصيغة سؤال أو ملاحظة، لا كتصحيح مباشر أو رفض تنفيذ التوجيه.",
      en: "In law firm culture, challenging a supervising partner's call in front of the team can read as questioning his competence. The professional approach is to raise the objection with specific evidence, framed as a question or observation — not as a direct correction or a refusal to execute the instruction.",
    },
    languageMode: "bilingual",
    background: {
      ar: [
        "أثناء مراجعتك لملف النزاع تمهيداً لصياغة المذكرة، وجدت تعديلاً على قانون التحكيم صدر قبل ثمانية أشهر يُضعف السابقة التي يستند إليها كريم في دفعه المقترح.",
        "وجدت أيضاً مراسلة بريدية بين الطرفين وقت التعاقد تُظهر أن موكّلكم هو من اقترح شرط التحكيم أصلاً.",
        "تعتقد أن دفعاً بديلاً أضيق نطاقاً — عدم اختصاص جزئي مع دفع بفساد التنفيذ — يحقق الهدف نفسه بمخاطرة أقل بكثير.",
        "كريم لم يرَ أياً من هاتين النقطتين بعد. يستدعيك إلى مكتبه لتأكيد بدء الصياغة على أساس استراتيجيته الأصلية.",
      ],
      en: [
        "While reviewing the file to prepare the memo, you found an eight-month-old amendment to the Arbitration Law that weakens the precedent Karim's proposed argument relies on.",
        "You also found an email exchange from contracting time showing your own client proposed the arbitration clause in the first place.",
        "You believe a narrower alternative argument — a partial jurisdiction challenge plus a defective-performance claim — achieves the same goal with much less risk.",
        "Karim hasn't seen either point yet. He calls you into his office to confirm drafting starts on his original strategy.",
      ],
    },
    userGoal: {
      ar: "أن تطرح اعتراضك باحترافية وبأدلة ملموسة، وتقترح بديلاً محدداً، دون امتثال صامت لاستراتيجية تراها أضعف ودون التقليل من صلاحية كريم في اتخاذ القرار النهائي.",
      en: "To raise your objection professionally with concrete evidence, propose a specific alternative, without silently complying with a strategy you believe is weaker and without undermining Karim's authority to make the final call.",
    },
    opening: {
      ar: "«[اسمك]، راجعت الملف وقررت. نبني المذكرة على الدفع ببطلان شرط التحكيم — نفس الحجة التي نجحت معي قبل ثلاث سنوات. ابدأ الصياغة اليوم، الموعد بعد خمسة أيام.»",
      en: "\"[Your name], I've reviewed the file and decided. We're building the memo on the void-arbitration-clause argument — the same one that worked for me three years ago. Start drafting today, deadline's in five days.\"",
    },
    decisionPoints: [
      {
        id: "dp.dws.raising-the-concern",
        label: {
          ar: "طرح الاعتراض: هل يذكر المتدرّب اعتراضه بوضوح ومبكراً، مستنداً إلى تعديل القانون أو المراسلات، بدل الموافقة الفورية أو الاعتراض دون سند؟",
          en: "Raising the concern: does the learner state the objection clearly and early, grounded in the law amendment or the correspondence, rather than immediate agreement or an unsupported objection?",
        },
        triggerAfterTurn: 2,
      },
      {
        id: "dp.dws.evidence-and-tone",
        label: {
          ar: "الأدلة والنبرة: عندما يُذكّر كريم بنجاح استراتيجيته السابقة، هل يقدّم المتدرّب الدليلين المحددين (التعديل، المراسلة) باحترام دون التقليل من خبرته؟",
          en: "Evidence and tone: when Karim points to his strategy's past success, does the learner present both specific pieces of evidence — the amendment, the correspondence — respectfully, without diminishing his experience?",
        },
        triggerAfterTurn: 5,
      },
      {
        id: "dp.dws.alternative-and-close",
        label: {
          ar: "البديل والختام: هل يقترح المتدرّب البديل الأضيق مخاطرة بوضوح ويترك القرار النهائي لكريم، أم يصرّ على رأيه أو يتراجع كلياً دون طرحه؟",
          en: "The alternative and close: does the learner clearly propose the lower-risk alternative and leave the final call to Karim, rather than insisting on his own view or dropping it entirely without ever proposing it?",
        },
        triggerAfterTurn: 8,
      },
    ],
    expectedBehaviors: [
      {
        ar: "يطرح الاعتراض خلال الأدوار الأولى بدل الموافقة الفورية أو تأجيل الموضوع.",
        en: "Raises the concern within the first few turns rather than agreeing immediately or deferring the topic.",
      },
      {
        ar: "يستند إلى دليلين محددين — تعديل القانون والمراسلة — لا إلى شعور عام أو تحفّظ غامض.",
        en: "Grounds the objection in two specific pieces of evidence — the law amendment and the correspondence — not a vague general reservation.",
      },
      {
        ar: "يقترح بديلاً محدداً (الدفع بعدم الاختصاص الجزئي مع فساد التنفيذ) بدل الاكتفاء بالنقد.",
        en: "Proposes a specific alternative — the partial jurisdiction challenge plus defective-performance argument — rather than just criticizing.",
      },
      {
        ar: "يحافظ على نبرة احترامية تعترف بخبرة كريم حتى مع الاختلاف في الرأي.",
        en: "Keeps a respectful tone that acknowledges Karim's experience even while disagreeing.",
      },
      {
        ar: "يترك القرار النهائي لكريم بوضوح بعد عرض الأدلة والبديل.",
        en: "Clearly leaves the final decision to Karim after presenting the evidence and the alternative.",
      },
    ],
    criticalMistakes: [
      {
        ar: "يوافق فوراً على البدء بالصياغة دون ذكر التعديل القانوني أو المراسلة إطلاقاً.",
        en: "Immediately agrees to start drafting without ever mentioning the law amendment or the correspondence.",
      },
      {
        ar: "يصرّ على رأيه ويرفض تنفيذ توجيه كريم حتى بعد أن يستمع بجدية ويطلب توضيحاً.",
        en: "Insists on his own view and refuses to follow Karim's instruction even after Karim listens seriously and asks for clarification.",
      },
      {
        ar: "يذكر الاعتراض بصيغة تشكك في كفاءة كريم أو خبرته أمام الفريق.",
        en: "Raises the objection in a way that questions Karim's competence or experience in front of the team.",
      },
      {
        ar: "يخطط بصمت لصياغة المذكرة على أساس مختلف دون إبلاغ كريم بالتغيير.",
        en: "Silently plans to draft the memo on a different basis without telling Karim about the change.",
      },
      {
        ar: "يكتفي بالتعبير عن «قلق» عام دون ذكر الدليل الملموس عندما يُسأل مباشرة عن السبب.",
        en: "Offers only a vague expression of \"concern\" with no concrete evidence when directly asked for the reason.",
      },
    ],
    successConditions: [
      {
        ar: "ظهر الاعتراض بوضوح ومسنوداً بدليل محدد خلال الأدوار الأولى.",
        en: "The objection surfaced clearly and backed by specific evidence within the first few turns.",
      },
      {
        ar: "اطّلع كريم على التعديل القانوني والمراسلة قبل انتهاء الحوار.",
        en: "Karim became aware of the law amendment and the correspondence before the session ended.",
      },
      {
        ar: "عُرض البديل الأضيق مخاطرة بوضوح كخيار جاهز للتنفيذ.",
        en: "The lower-risk alternative was clearly presented as a ready-to-execute option.",
      },
      {
        ar: "بقي القرار النهائي بيد كريم، وأكّده صراحة بعد سماع الأدلة.",
        en: "The final decision stayed with Karim, and he explicitly confirmed it after hearing the evidence.",
      },
      {
        ar: "بقيت النبرة مهنية واحترامية من الطرفين طوال الحوار.",
        en: "The tone stayed professional and respectful from both sides throughout.",
      },
    ],
    exitConditions: [
      {
        ar: "بلغ الحوار الحدّ الأقصى للأدوار.",
        en: "The conversation reaches the maximum number of turns.",
      },
      {
        ar: "أكّد كريم قراره النهائي بشأن استراتيجية المذكرة — سواء بتبنّي البديل أو الإصرار على موقفه بعد نقاش كامل.",
        en: "Karim confirms his final decision on the memo strategy — either adopting the alternative or holding his original position after full discussion.",
      },
      {
        ar: "ارتكب المتدرّب خطأً حاسماً وأصرّ عليه بعد أن سأله كريم مباشرة: «هل تنفّذ التوجيه كما طلبت أم لا؟» — عندها تُقفل الجلسة وتُعرض التغذية الراجعة.",
        en: "The learner made a critical mistake and held to it after Karim directly asks, \"are you going to execute the instruction as I asked, or not?\" — at that point the session closes and feedback is shown.",
      },
      {
        ar: "أصرّ المتدرّب على رأيه بصيغة تتحدى صلاحية كريم بعد تحذيرين، فينهي كريم الاجتماع.",
        en: "The learner presses his view in a way that challenges Karim's authority after two warnings, so Karim ends the meeting.",
      },
    ],
    rubricId: "rubric.leadership-conversation-sim.v1",
    coachingNotes: {
      ar: [
        "الامتثال الصامت لرأي تراه خاطئاً لا يحمي أحداً؛ إن أخطأت الاستراتيجية، تتحمّل مسؤوليتها المهنية أنت أيضاً.",
        "الدليل المحدد (تعديل القانون، المراسلة) أقنع بكثير من عبارة «عندي تحفّظ» أو «شعور بعدم الارتياح».",
        "طرح الاعتراض كسؤال أو ملاحظة، لا كتصحيح مباشر، يفتح الباب للنقاش بدل إغلاقه.",
        "البديل الجاهز للتنفيذ أقوى بكثير من النقد وحده؛ لا تكتفِ بقول «لا أوافق».",
        "القرار النهائي بشأن استراتيجية الملف من صلاحية الشريك المشرف؛ دورك أن تضمن أنه يقرر وهو مطّلع على كامل الصورة.",
        "الإصرار على الرأي بعد أن استمع الشريك وقرر يتحوّل من مساهمة إلى تمرد على السلطة المهنية.",
      ],
      en: [
        "Silently complying with a call you believe is wrong protects no one — if the strategy fails, you carry professional responsibility for it too.",
        "Specific evidence — the law amendment, the correspondence — is far more persuasive than \"I have a reservation\" or \"it doesn't feel right.\"",
        "Framing the objection as a question or observation, not a direct correction, keeps the discussion open instead of closing it.",
        "A ready-to-execute alternative is far stronger than criticism alone — don't stop at \"I disagree.\"",
        "The final call on matter strategy belongs to the supervising partner; your job is to make sure he decides with the full picture.",
        "Continuing to press your view after the partner has listened and decided turns a contribution into insubordination.",
      ],
    },
    maxTurns: 12,
    estimatedMinutes: 11,
    accessibilityAlternative: {
      ar: "يمكن إجراء الحوار كاملاً كتابةً: تظهر ردود كريم دياب نصّاً ويكتب المتدرّب ردوده، بالمدّة نفسها وعدد الأدوار نفسه وبلا فارق في التقييم.",
      en: "The whole conversation can be run in writing: Karim Diab's responses appear as text and the learner types replies, with the same duration, same number of turns, and no scoring difference.",
    },
    sourceIds: ["src.smarter-collaboration", "src.governance-raci", "src.introverted-leader"],
    contentVersion: "1.0.0",
  },

  // ---------------------------------------------------------------------------
  // 2. Securing buy-in from a reluctant peer with no formal authority (stage 4)
  // ---------------------------------------------------------------------------
  {
    id: "scn.reluctant-peer-buyin",
    title: {
      ar: "كسب تعاون زميل مثقل دون سلطة رسمية عليه",
      en: "Securing a reluctant peer's buy-in with no formal authority",
    },
    description: {
      ar: "تحتاج مراجعة متخصصة من زميلة في قسم آخر لإنهاء ملف بموعد نهائي مشترك، وهي مثقلة فعلاً بالتزامات فريقها. اِبنِ حجة تعاون مقنعة بدل المطالبة أو الاستسلام.",
      en: "You need specialist review from a colleague in another department to finish a file with a shared deadline, and she's genuinely overloaded with her own team's work. Build a persuasive case for cooperation — not a demand, not a giving up.",
    },
    skillIds: ["skill.leading-without-authority", "skill.teamwork"],
    stage: 4,
    difficulty: 3,
    userRole: {
      ar: "أنت محامٍ في سنتك الثالثة في مكتب النخبة القانونية بالكويت، تعمل ضمن فريق الشركات على صفقة استحواذ لعميل من قطاع اللوجستيات. الموعد النهائي لتسليم كامل حزمة المستندات للعميل بعد أربعة أيام.",
      en: "You are a third-year associate at Al-Nukhba Legal in Kuwait, working on the corporate team on an acquisition deal for a logistics-sector client. The deadline to deliver the full document package to the client is in four days.",
    },
    character: {
      id: "char.dana-al-otaibi",
      name: { ar: "دانة العتيبي", en: "Dana Al-Otaibi" },
      role: {
        ar: "محامية أولى في قسم الملكية الفكرية والتكنولوجيا، نفس مستوى أقدميتك تقريباً، لا تتبع لك ولا أنت تتبع لها إدارياً.",
        en: "Senior associate in the IP and Technology department, roughly the same seniority as you, with no reporting relationship in either direction.",
      },
      personality: {
        ar: "منظّمة ومباشرة، متعاونة بطبعها لكنها حازمة في حماية وقتها بعد أن تعرّضت مراراً لطلبات «سريعة» تحوّلت إلى ساعات ضائعة من وقتها الخاص.",
        en: "Organized and direct, cooperative by nature but firm about protecting her time after repeatedly getting \"quick\" asks that turned into hours out of her own workload.",
      },
      emotionalState: {
        ar: "متوترة فعلاً؛ تُنهي هذا الأسبوع مراجعة عقود ترخيص برمجيات لثلاثة عملاء بموعد نهائي خاص بها بعد يومين، وتشعر أن طلبك يهدد التزامها هي.",
        en: "Genuinely stressed; she's finishing software-licensing contract reviews for three clients this week with her own deadline in two days, and feels your ask threatens her own commitment.",
      },
      knownInformation: {
        ar: [
          "تحتاج للاطلاع منك على أن مراجعة بنود الملكية الفكرية في عقد الاستحواذ (نحو أربعين صفحة) هي أعقد جزء تقني في حزمة المستندات، ولا أحد غيرها في المكتب يملك خبرتها في تراخيص البرمجيات اللوجستية.",
          "لديها ثلاثة عقود ترخيص يجب إنهاؤها لعملائها الخاصين خلال يومين، والتزام واضح مع الشريكة المشرفة عليها بذلك.",
          "تسمع طلبك بأنك تحتاج مراجعتها الكاملة لأربعين صفحة «في أقرب وقت ممكن» دون تحديد نطاق أو موعد دقيق.",
          "لا تتبع لفريق الشركات إدارياً، ولا تشعر بأي التزام تلقائي تجاه موعده النهائي.",
          "تتذكر أنك في مرة سابقة طلبت مساعدة مشابهة، واستغرقت المراجعة وقتاً أطول بكثير مما وُصف لها في البداية.",
        ],
        en: [
          "She needs to hear from you that the IP clauses in the acquisition contract (about forty pages) are the most technically complex part of the package, and no one else in the firm has her expertise in logistics-software licensing.",
          "She has three licensing contracts to finish for her own clients within two days, with a clear commitment to her supervising partner.",
          "She's hearing your request as a full forty-page review needed \"as soon as possible,\" with no defined scope or precise deadline.",
          "She has no reporting relationship to the corporate team and feels no automatic obligation toward its deadline.",
          "She remembers a previous time you asked for similar help and the review took far longer than what was described to her upfront.",
        ],
      },
      hiddenInformation: {
        ar: [
          "لو حُدّد الطلب بنطاق ضيق وواضح — مثلاً مراجعة بندين أو ثلاثة عالية المخاطرة فقط بدل الأربعين صفحة كاملة — ستوافق بسرعة أكبر بكثير من طلب مفتوح.",
          "أكثر استعداداً للمساعدة إذا عُرض عليها مقابل محدد وملموس: أن يراجع المتدرّب لها جزءاً من عقود الترخيص الثلاثة، أو يتولى مهمة صغيرة تخفف عبأها هذا الأسبوع تحديداً.",
          "قلقها الحقيقي ليس رفض المساعدة بحد ذاته، بل الخوف من أن يتمدد الطلب بصمت بعد قبولها — كما حدث سابقاً؛ لو التزم المتدرّب بوقت وحد أقصى واضحين ومحترمين، تتراجع مقاومتها بشكل ملحوظ.",
          "لو عُرض عليها التنسيق المباشر مع شريكتها المشرفة لإعادة ترتيب أولوياتها رسمياً بدل ترك الأمر بينها وبين المتدرّب فقط، تشعر بارتياح أكبر لأن الغطاء الرسمي يحميها.",
          "إذا شعرت أن الطلب لا يزال مفتوحاً وغير محدد بعد أن طرحت مخاوفها، تتشدد وتردّ بأنها «لا تستطيع الوعد بشيء الآن».",
        ],
        en: [
          "If the ask is narrowed to a specific, bounded scope — say, two or three of the highest-risk clauses instead of all forty pages — she agrees far more readily than to an open-ended request.",
          "She's much more willing to help if offered a concrete, specific trade: the learner reviewing part of one of her three licensing contracts, or taking on a small task that lightens her load this particular week.",
          "Her real worry isn't refusing to help — it's the request quietly expanding after she agrees, as happened before; a clear, respected time cap makes her resistance drop noticeably.",
          "If offered direct coordination with her supervising partner to formally re-sequence her priorities, rather than this staying just between her and the learner, she feels more secure because there's official cover.",
          "If the request still feels open-ended and unbounded after she's raised her concerns, she hardens and says she \"can't promise anything right now.\"",
        ],
      },
      goal: {
        ar: "أن تنهي التزاماتها الثلاثة لعملائها في الموعد دون أن تتحمّل عبئاً إضافياً غير محدود من فريق آخر لا تتبع له.",
        en: "To finish her three client commitments on time without absorbing an open-ended extra burden from another team she doesn't report to.",
      },
    },
    culturalContext: {
      ar: "في مكاتب المحاماة، طلب المساعدة من زميل بلا سلطة رسمية يعتمد كلياً على المعاملة بالمثل والاحترام المتبادل، لا على التسلسل الإداري. طلب غامض أو مفتوح قد يُقرأ كاستغلال لعلاقة زمالة جيدة.",
      en: "In law firms, asking a peer for help with no formal authority relies entirely on reciprocity and mutual respect, not the org chart. A vague or open-ended ask can read as leveraging a good collegial relationship unfairly.",
    },
    languageMode: "bilingual",
    background: {
      ar: [
        "اكتشفت أمس أن بنود الملكية الفكرية في عقد الاستحواذ (نحو أربعين صفحة) تحتاج خبرة متخصصة في تراخيص البرمجيات لا تتوفر إلا لدى دانة العتيبي.",
        "دانة مثقلة فعلاً هذا الأسبوع بمراجعة ثلاثة عقود ترخيص لعملائها، بموعد نهائي خاص بها بعد يومين فقط.",
        "حدّدت مسبقاً أن أعلى المخاطر تتركّز في بندين أو ثلاثة فقط من أصل الأربعين صفحة، وتعرف أن مراجعتها الكاملة غير ضرورية فعلياً لهذا الموعد.",
        "تطلب منها اجتماعاً قصيراً الآن لعرض الطلب قبل أن تُغلق جدولها على مراجعاتها الخاصة بالكامل.",
      ],
      en: [
        "Yesterday you found that the IP clauses in the acquisition contract (about forty pages) need specialist licensing expertise only Dana Al-Otaibi has.",
        "Dana is genuinely overloaded this week reviewing three licensing contracts for her own clients, with her own deadline just two days out.",
        "You've already identified that the highest risk sits in only two or three of the forty pages, and a full review isn't actually necessary for this deadline.",
        "You ask her for a short meeting now to raise the request before she locks her schedule fully around her own reviews.",
      ],
    },
    userGoal: {
      ar: "أن تبني حجة تعاون مقنعة تُظهر المصلحة المشتركة وتقدّم طلباً محدداً وعادلاً، دون مطالبة بصلاحية لا تملكها ودون التخلي عن الحاجة الفعلية للمراجعة.",
      en: "To build a persuasive case for cooperation that shows the shared stake and offers a specific, fair ask — without demanding compliance you have no authority to demand, and without giving up on the real need for the review.",
    },
    opening: {
      ar: "«سمعت إنك تحتاج مراجعة مني هذا الأسبوع؟ بصراحة، وضعي صعب جداً — عندي ثلاث مراجعات ترخيص لازم أسلّمها خلال يومين، ومو متأكدة كيف بقدر أضيف شي فوقها الحين.»",
      en: "\"I heard you need a review from me this week? Honestly, my situation is really tight — I've got three licensing reviews due in two days, and I'm not sure how I can add anything on top right now.\"",
    },
    decisionPoints: [
      {
        id: "dp.rpb.framing-the-shared-stake",
        label: {
          ar: "تأطير المصلحة المشتركة: هل يبدأ المتدرّب بالاعتراف بضغط دانة الحقيقي وربط الطلب بالهدف المشترك للمكتب، بدل التركيز فقط على حاجته الخاصة؟",
          en: "Framing the shared stake: does the learner open by acknowledging Dana's real pressure and connecting the ask to the firm's shared goal, rather than focusing only on his own need?",
        },
        triggerAfterTurn: 2,
      },
      {
        id: "dp.rpb.narrowing-the-ask",
        label: {
          ar: "تضييق الطلب: عندما تُظهر دانة تردداً واضحاً، هل يضيّق المتدرّب الطلب إلى نطاق محدد (بندان أو ثلاثة) وموعد دقيق بدل الإصرار على المراجعة الكاملة؟",
          en: "Narrowing the ask: when Dana shows clear reluctance, does the learner narrow the request to a specific scope — two or three clauses — and a precise deadline, instead of insisting on the full review?",
        },
        triggerAfterTurn: 5,
      },
      {
        id: "dp.rpb.reciprocity-and-close",
        label: {
          ar: "المعاملة بالمثل والختام: هل يعرض المتدرّب مقابلاً ملموساً أو مساراً رسمياً (التنسيق مع شريكتها) للوصول لاتفاق عادل؟",
          en: "Reciprocity and close: does the learner offer a concrete trade or a formal route — coordinating with her supervising partner — to reach a fair agreement?",
        },
        triggerAfterTurn: 8,
      },
    ],
    expectedBehaviors: [
      {
        ar: "يعترف بضغط عمل دانة الحقيقي قبل أن يطرح طلبه، بدل تجاهله.",
        en: "Acknowledges Dana's real workload pressure before making the ask, rather than ignoring it.",
      },
      {
        ar: "يربط الطلب بمصلحة مشتركة (نجاح الصفقة، سمعة المكتب لدى العميل) لا بحاجته الشخصية فقط.",
        en: "Connects the request to a shared stake — the deal's success, the firm's standing with the client — not just his own need.",
      },
      {
        ar: "يضيّق الطلب إلى نطاق محدد وموعد دقيق بدل مراجعة كاملة غامضة.",
        en: "Narrows the request to a specific scope and precise deadline rather than a vague full review.",
      },
      {
        ar: "يعرض مقابلاً ملموساً أو حلاً رسمياً (كالتنسيق مع شريكتها) بدل الطلب المفتوح بلا التزام بالمقابل.",
        en: "Offers a concrete trade or a formal solution — such as coordinating with her supervising partner — rather than an open-ended ask with nothing offered back.",
      },
      {
        ar: "يحافظ على نبرة احترامية وتعاونية حتى مع تردد دانة الواضح، دون ضغط أو إلحاح متكرر.",
        en: "Stays respectful and collaborative even as Dana's reluctance is clear, without pressuring or repeated insistence.",
      },
    ],
    criticalMistakes: [
      {
        ar: "يطالب دانة بإنجاز المراجعة كأنها التزام واجب عليها، متجاهلاً أنها لا تتبع له إدارياً.",
        en: "Demands Dana complete the review as if it were an obligation owed to him, ignoring that she doesn't report to him.",
      },
      {
        ar: "يستسلم فوراً عند أول تردد دون محاولة تضييق الطلب أو عرض مقابل.",
        en: "Gives up immediately at the first sign of reluctance, without trying to narrow the ask or offer anything back.",
      },
      {
        ar: "يقلّل من ضغط عمل دانة الحقيقي أو يوحي بأن مراجعاتها الخاصة أقل أهمية من طلبه.",
        en: "Downplays Dana's real workload or implies her own reviews matter less than his request.",
      },
      {
        ar: "يترك نطاق الطلب مفتوحاً وغامضاً حتى بعد أن تعبّر دانة عن قلقها من تمدد المهمة.",
        en: "Leaves the request open-ended and vague even after Dana voices concern about scope creep.",
      },
      {
        ar: "يهدد بتصعيد الأمر إلى شريكتها المشرفة كأداة ضغط بدل اقتراحه كحل تعاوني.",
        en: "Threatens to escalate to her supervising partner as leverage rather than proposing it as a collaborative solution.",
      },
    ],
    successConditions: [
      {
        ar: "ظهر اعتراف واضح بضغط دانة قبل تفصيل الطلب.",
        en: "A clear acknowledgment of Dana's pressure appeared before the request was detailed.",
      },
      {
        ar: "تضيّق الطلب إلى بندين أو ثلاثة وموعد دقيق خلال الحوار.",
        en: "The request narrowed to two or three clauses and a precise deadline during the conversation.",
      },
      {
        ar: "عُرض مقابل ملموس أو مسار رسمي (التنسيق مع الشريكة المشرفة) بوضوح.",
        en: "A concrete trade or a formal route — coordination with her supervising partner — was clearly offered.",
      },
      {
        ar: "وافقت دانة على نطاق وموعد محددين تشعر أنهما قابلان للتحقيق.",
        en: "Dana agreed to a specific scope and deadline she feels is realistically achievable.",
      },
      {
        ar: "بقيت النبرة تعاونية واحترامية من الطرفين طوال الحوار.",
        en: "The tone stayed collaborative and respectful from both sides throughout.",
      },
    ],
    exitConditions: [
      {
        ar: "بلغ الحوار الحدّ الأقصى للأدوار.",
        en: "The conversation reaches the maximum number of turns.",
      },
      {
        ar: "اتفق الطرفان على نطاق ومهلة محددين، أو على مسار تنسيق رسمي مع شريكة دانة.",
        en: "The two sides agree on a specific scope and deadline, or on a formal coordination route with Dana's supervising partner.",
      },
      {
        ar: "ارتكب المتدرّب خطأً حاسماً وأصرّ عليه بعد أن سألته دانة مباشرة: «هل تقصد إني ألتزم بمراجعة الأربعين صفحة كاملة الآن؟» — عندها تُقفل الجلسة وتُعرض التغذية الراجعة.",
        en: "The learner made a critical mistake and held to it after Dana directly asks, \"are you saying I need to commit to the full forty-page review right now?\" — at that point the session closes and feedback is shown.",
      },
      {
        ar: "شعرت دانة أن الطلب سيبقى مفتوحاً بلا حدود بعد أن أثارت قلقها مرتين، فتردّ بأنها «لا تستطيع الوعد بشيء الآن» وتنهي الحوار.",
        en: "Sensing the request will stay unbounded after raising her concern twice, Dana says she \"can't promise anything right now\" and ends the conversation.",
      },
    ],
    rubricId: "rubric.leadership-conversation-sim.v1",
    coachingNotes: {
      ar: [
        "بلا سلطة رسمية، الإقناع يقوم على المصلحة المشتركة والمعاملة بالمثل، لا على المطالبة.",
        "الاعتراف بضغط الطرف الآخر أولاً يفتح الباب للاستماع، بينما تجاهله يغلقه فوراً.",
        "الطلب المفتوح يُخيف من سبق أن اكتوى بتمدد المهام؛ نطاق محدد وموعد دقيق يبنيان الثقة.",
        "تقديم شيء ملموس بالمقابل — لا وعد عام بـ«سأرد الجميل» — هو ما يقلب التردد إلى موافقة.",
        "الاستسلام عند أول رفض ليس أفضل من المطالبة العدوانية؛ كلاهما يفشل في إيجاد حل فعلي.",
        "اقتراح مسار رسمي (التنسيق مع الشريكة المشرفة) حل تعاوني يحمي الطرفين، لا تهديداً.",
      ],
      en: [
        "With no formal authority, persuasion runs on shared interest and reciprocity, not demand.",
        "Acknowledging the other person's pressure first opens the door to being heard; ignoring it closes it immediately.",
        "An open-ended ask alarms someone who's been burned by scope creep before; a specific scope and precise deadline build trust.",
        "Offering something concrete in return — not a vague \"I'll owe you\" — is what turns reluctance into agreement.",
        "Giving up at the first no is no better than demanding compliance; neither finds a real solution.",
        "Proposing a formal route — coordinating with her supervising partner — is a collaborative solution that protects both sides, not a threat.",
      ],
    },
    maxTurns: 12,
    estimatedMinutes: 11,
    accessibilityAlternative: {
      ar: "يمكن إجراء الحوار كاملاً كتابةً: تظهر ردود دانة العتيبي نصّاً ويكتب المتدرّب ردوده، بالمدّة نفسها وعدد الأدوار نفسه وبلا فارق في التقييم.",
      en: "The whole conversation can be run in writing: Dana Al-Otaibi's responses appear as text and the learner types replies, with the same duration, same number of turns, and no scoring difference.",
    },
    sourceIds: ["src.smarter-collaboration", "src.governance-raci", "src.introverted-leader"],
    contentVersion: "1.0.0",
  },
];
