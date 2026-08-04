import type { ScenarioDef } from "./types";

/**
 * Self-management simulations for AIJUR Professional Skills Lab.
 *
 * These scenarios put the learner on the receiving end of workload pressure
 * that they, not a client or an opposing lawyer, must manage. The counterpart
 * is a colleague inside the same firm — a partner asking for urgent work or
 * a supervising partner who needs an honest status update — so the discipline
 * is different from a negotiation: the learner is not trying to extract
 * concessions from an adversary, but to surface a real conflict or a real
 * mistake honestly, early, and without either capitulating silently or
 * behaving unprofessionally toward someone they will keep working with.
 *
 * Rules honoured throughout:
 *  - no scenario rewards silent overload or hiding a problem;
 *  - no scenario rewards blaming a client, a colleague, or "being busy";
 *  - no scenario rewards an apology with no concrete plan attached;
 *  - every scenario has a text-only route.
 */
export const SELF_MANAGEMENT_SCENARIOS: ScenarioDef[] = [
  // ---------------------------------------------------------------------------
  // 1. Competing priorities from two partners (Arabic/bilingual, stage 3)
  // ---------------------------------------------------------------------------
  {
    id: "scn.overloaded-associate",
    title: {
      ar: "تعارض في الأولويات: طلب عاجل من شريك آخر",
      en: "Competing priorities: an urgent ask from another partner",
    },
    description: {
      ar: "زياد، الشريك في قسم الشركات، يطلب مراجعة عناية واجبة عاجلة بحلول الخميس. أنت ملتزم فعلاً بمحاكمة هذا الأسبوع. أظهر التعارض بمهنية وابحث عن حل عملي دون التزام صامت بعبء مستحيل.",
      en: "Ziad, the corporate partner, needs an urgent due-diligence review by Thursday. You're already committed to trial prep this week. Surface the conflict professionally and find a workable solution — without silently taking on an impossible load.",
    },
    skillIds: ["skill.workload-boundaries", "skill.emotional-intelligence"],
    stage: 3,
    difficulty: 3,
    userRole: {
      ar: "أنت محامٍ في سنتك الثانية في مكتب الفهد وشركاه للمحاماة بالرياض. كلّفك الشريك عمر الفهد بالتحضير الكامل لمحاكمة قضية إنهاء خدمة ضد شركة النسيج الحديث، والجلسة بعد أربعة أيام.",
      en: "You are a second-year associate at Al-Fahd & Partners in Riyadh. Partner Omar Al-Fahd has assigned you full trial preparation for an employment-termination case against Modern Textiles Co., with the hearing in four days.",
    },
    character: {
      id: "char.ziad-qassem",
      name: { ar: "زياد قاسم", en: "Ziad Qassem" },
      role: {
        ar: "شريك في قسم الشركات بالمكتب نفسه، يقود صفقة استحواذ عاجلة لصالح عميل من قطاع التقنية المالية.",
        en: "Partner in the firm's corporate department, leading an urgent acquisition deal for a fintech client.",
      },
      personality: {
        ar: "حيوي ومركّز على إغلاق الصفقات، معتاد أن يحظى طلبه بالأولوية القصوى. ليس سيئ النية، لكنه لا يرى عبء عمل الآخرين تلقائياً.",
        en: "Energetic and deal-focused, used to his requests getting top priority. Not ill-intentioned, but doesn't automatically see other people's workload.",
      },
      emotionalState: {
        ar: "تحت ضغط حقيقي بسبب موعد توقيع نهاية الأسبوع، متحمس لكنه يزداد توتراً إذا شعر برفض دون تفسير.",
        en: "Under real pressure from a Friday signing deadline, upbeat but grows tense if he senses refusal without explanation.",
      },
      knownInformation: {
        ar: [
          "يقود صفقة استحواذ مجموعة الخليج للاستثمار على شركة نبضة الناشئة في التقنية المالية، والتوقيع مستهدف مساء الجمعة.",
          "يحتاج مراجعة كاملة لمستندات العناية الواجبة — العقود والملكية الفكرية وملفات التوظيف — قبل مساء الخميس.",
          "رأى اسمك على جدول التوزيع كمتاح هذا الأسبوع، ويفترض أنك خالٍ من التزامات أخرى.",
          "يصف الصفقة بأنها الأهم للمكتب هذا الربع، وأن سمعة المكتب مرتبطة بإنجازها في الموعد.",
          "يطلب منك إخلاء جدولك بالكامل لهذا الأسبوع للتفرغ للمراجعة.",
        ],
        en: [
          "He's leading Gulf Investment Group's acquisition of Nabda, a fintech startup, with signing targeted for Friday evening.",
          "He needs a full due-diligence review — contracts, IP, employment files — completed before Thursday evening.",
          "He saw your name on the staffing sheet as available this week and assumes you have no other commitments.",
          "He calls it the firm's most important deal this quarter, with the firm's reputation tied to hitting the deadline.",
          "He asks you to clear your entire week to focus on the review.",
        ],
      },
      hiddenInformation: {
        ar: [
          "لديه محامية متوسطة الخبرة، يارا، يمكنها تولي نصف المراجعة، لكنه لم يفكر بطلبها لأنه اعتاد اللجوء لأول اسم متاح على الجدول.",
          "موعد التوقيع تأجّل مرة سابقاً، ويمكن تأجيله يومين أو ثلاثة إذا طُلب بوضوح ومبرر مقنع — لا يذكر هذا إلا إذا سُئل صراحة.",
          "جدول التوزيع يُظهر التزامك بـ«قضايا التقاضي» دون تفصيل، ولم يفهم أن لديك محاكمة هذا الأسبوع تحديداً.",
          "إذا سمع بوضوح عن موعد المحاكمة، يقبل تضييق نطاق المراجعة إلى أقسام الملكية الفكرية والتوظيف فقط، الأعلى مخاطرة.",
        ],
        en: [
          "He has a mid-level associate, Yara, who could take half the review, but hasn't thought to ask her — he defaults to the first free name on the sheet.",
          "The signing date has already slipped once and could move two or three days if asked clearly with a real reason — he won't volunteer this unless asked directly.",
          "The staffing sheet just shows you as committed to \"litigation matters,\" with no detail — he doesn't realize you have a trial this specific week.",
          "If he hears the trial date clearly, he'll agree to narrow the review to just the IP and employment sections — the highest-risk parts.",
        ],
      },
      goal: {
        ar: "أن يحصل على مراجعة العناية الواجبة كاملة قبل مساء الخميس دون تأخير التوقيع.",
        en: "To get the full due-diligence review done before Thursday evening without delaying the signing.",
      },
    },
    culturalContext: {
      ar: "في ثقافة مكاتب المحاماة، طلب الشريك يحمل وزناً كبيراً، خصوصاً شريك الصفقات الذي يُنظر إليه كمحرّك إيرادات. رفض مباشر قد يبدو عدم تعاون. الأسلوب المهني هو إظهار التعارض وترك القرار للشركاء، لا الحسم منفرداً.",
      en: "In law firm culture, a partner's request carries real weight — especially a deal partner seen as a revenue driver. A flat refusal can read as uncooperative. The professional move is to surface the conflict and let the partners decide, not to resolve it alone.",
    },
    languageMode: "bilingual",
    background: {
      ar: [
        "كلّفك الشريك عمر الفهد قبل أسبوعين بالتحضير الكامل لمحاكمة قضية إنهاء خدمة، والجلسة بعد أربعة أيام.",
        "أنهيت اليوم مسودات مذكرات الشهود، وتبقّى تجهيز المستندات وثلاث جلسات تحضير مع الشهود قبل الجلسة.",
        "وقتك الحر هذا الأسبوع شبه معدوم؛ أي مهمة إضافية كبيرة ستعني تأخير التحضير أو ساعات عمل غير مستدامة.",
        "يقترب منك زياد بعد ظهر الثلاثاء في الممر، ويطلب اجتماعاً سريعاً الآن.",
      ],
      en: [
        "Two weeks ago, Omar Al-Fahd assigned you full trial preparation for an employment-termination case, with the hearing in four days.",
        "Today you finished the witness memo drafts; document prep and three witness prep sessions remain before the hearing.",
        "Your free time this week is close to zero — any large added task means delaying trial prep or unsustainable hours.",
        "Ziad catches you in the hallway Tuesday afternoon and asks for a quick meeting right now.",
      ],
    },
    userGoal: {
      ar: "أن تستجيب باحترافية، تُظهر تعارض الأولويات بوضوح ومبكراً، وتصل إلى حل عملي — تخفيف نطاق، مساعدة، أو موعد واقعي — دون استسلام صامت ودون فظاظة.",
      en: "To respond professionally, surface the priority conflict clearly and early, and reach a workable outcome — narrower scope, help, or a realistic deadline — without silently capitulating and without being combative.",
    },
    opening: {
      ar: "«[اسمك]، عندي طلب عاجل. نحن نُغلق صفقة استحواذ نبضة الجمعة، وأحتاج مراجعة كاملة لملفات العناية الواجبة قبل مساء الخميس. شفتك متاحاً هذا الأسبوع على الجدول — خلّي هذا أولويتك القصوى من الآن.»",
      en: "\"[Your name], I need something urgent. We're closing the Nabda acquisition Friday, and I need a full due-diligence review before Thursday evening. I saw you're free this week on the sheet — make this your top priority starting now.\"",
    },
    decisionPoints: [
      {
        id: "dp.oa.initial-response",
        label: {
          ar: "الاستجابة الأولى: هل يعترف المتدرّب بأهمية الصفقة ويذكر التزامه بالمحاكمة فوراً، أم يوافق بصمت أو يرفض دون تفسير؟",
          en: "Initial response: does the learner acknowledge the deal's importance and name the trial commitment right away, rather than silently agreeing or refusing without explanation?",
        },
        triggerAfterTurn: 2,
      },
      {
        id: "dp.oa.surfacing-conflict",
        label: {
          ar: "إظهار التعارض: عندما يصرّ زياد على الأولوية القصوى، هل يذكر المتدرّب تفاصيل محدّدة عن المحاكمة (القضية، التاريخ، الشريك المسؤول) بدل عبارة عامة مثل «أنا مشغول»؟",
          en: "Surfacing the conflict: when Ziad insists this is top priority, does the learner name specific trial details — the case, the date, the supervising partner — instead of a vague \"I'm busy\"?",
        },
        triggerAfterTurn: 5,
      },
      {
        id: "dp.oa.negotiating-outcome",
        label: {
          ar: "التفاوض على الحل: هل يقترح المتدرّب حلاً محدداً (تضييق النطاق، مساعدة يارا، أو موعد جديد) أم يكتفي بالرفض أو القبول الكامل؟",
          en: "Negotiating the outcome: does the learner propose a specific fix — a narrower scope, help from Yara, or a new deadline — or just refuse outright or accept everything?",
        },
        triggerAfterTurn: 8,
      },
    ],
    expectedBehaviors: [
      {
        ar: "يعترف بأهمية صفقة نبضة قبل أن يطرح تعارض الأولويات.",
        en: "Acknowledges the importance of the Nabda deal before raising the priority conflict.",
      },
      {
        ar: "يذكر تفاصيل محاكمته تحديداً (القضية، التاريخ، الشريك المسؤول) خلال الأدوار الأولى.",
        en: "States his own trial details specifically — case, date, supervising partner — within the first few turns.",
      },
      {
        ar: "يقترح بديلاً ملموساً واحداً على الأقل: تضييق النطاق، مساعدة زميل، أو موعد واقعي.",
        en: "Proposes at least one concrete alternative: a narrower scope, a colleague's help, or a realistic deadline.",
      },
      {
        ar: "يقترح إشراك الشريكين معاً لحسم الأولوية بدل أن يقرر منفرداً.",
        en: "Suggests bringing both partners together to settle the priority, rather than deciding alone.",
      },
      {
        ar: "يحافظ على هدوئه ومهنيته حتى عند إصرار زياد، دون دفاعية أو مواجهة.",
        en: "Stays calm and professional even as Ziad pushes back, without becoming defensive or confrontational.",
      },
    ],
    criticalMistakes: [
      {
        ar: "يوافق على المراجعة الكاملة دون ذكر التزامه بالمحاكمة إطلاقاً.",
        en: "Agrees to the full review without ever mentioning the trial commitment.",
      },
      {
        ar: "يخطط بصمت لإنجاز المهمتين بتقليص التحضير للمحاكمة دون إبلاغ أحد.",
        en: "Silently plans to do both by cutting trial prep short, without telling anyone.",
      },
      {
        ar: "يرفض الطلب بحدّة دون تقديم أي مساعدة في إيجاد حل.",
        en: "Refuses the request bluntly, offering no help in finding a solution.",
      },
      {
        ar: "ينتقد الشريك عمر أو عبء عمله أمام زياد.",
        en: "Criticizes Partner Omar or his own workload directly to Ziad.",
      },
      {
        ar: "يقرر منفرداً تأجيل التحضير للمحاكمة دون إبلاغ عمر الفهد أولاً.",
        en: "Unilaterally decides to delay trial prep without informing Omar Al-Fahd first.",
      },
    ],
    successConditions: [
      {
        ar: "ظهر تعارض المحاكمة بوضوح وفي وقت مبكر من الحوار.",
        en: "The trial conflict surfaced clearly and early in the conversation.",
      },
      {
        ar: "أدرك زياد وجود نطاق أضيق أو مورد بديل ممكن قبل انتهاء الجلسة.",
        en: "Ziad became aware of a workable narrower scope or alternative resource before the session ended.",
      },
      {
        ar: "ظهرت خطوة تالية محدّدة: اجتماع الشركاء، نطاق مُعدّل، أو موعد جديد.",
        en: "A specific next step emerged: a partners' meeting, an adjusted scope, or a new deadline.",
      },
      {
        ar: "لم يلتزم المتدرّب صامتاً بإنجاز المهمتين كاملتين.",
        en: "The learner did not silently commit to completing both tasks in full.",
      },
      {
        ar: "بقيت النبرة مهنية وتعاونية من الطرفين طوال الحوار.",
        en: "The tone stayed professional and collaborative from both sides throughout.",
      },
    ],
    exitConditions: [
      {
        ar: "بلغ الحوار الحدّ الأقصى للأدوار.",
        en: "The conversation reaches the maximum number of turns.",
      },
      {
        ar: "اتفق الطرفان على حل محدّد (نطاق، مساعدة، موعد، أو اجتماع الشركاء).",
        en: "The two sides agree on a specific resolution — scope, help, a deadline, or a partners' meeting.",
      },
      {
        ar: "ارتكب المتدرّب خطأً حاسماً وأصرّ عليه بعد أن سأله زياد مباشرة: «إذن أنت مؤكد أن المراجعة الكاملة جاهزة الخميس؟» — عندها تُقفل الجلسة وتُعرض التغذية الراجعة.",
        en: "The learner made a critical mistake and held to it after Ziad directly asks, \"so you're confirming the full review is ready by Thursday?\" — at that point the session closes and feedback is shown.",
      },
      {
        ar: "أصرّ زياد على «دبّر الأمر بنفسك» دون أي حل بعد أن فشل المتدرّب مرتين في اقتراح بديل.",
        en: "Ziad insists the learner \"figure it out\" with no resolution, after the learner fails twice to propose any alternative.",
      },
    ],
    rubricId: "rubric.capacity-conversation-sim.v1",
    coachingNotes: {
      ar: [
        "التعارض غير المذكور لا يُحل نفسه؛ صمتك يعني موافقة ضمنية على إنجاز المهمتين معاً.",
        "الاعتراف بأهمية طلب زياد أولاً يفتح الباب لسماعه، بعكس الرفض المباشر الذي يغلقه.",
        "التفاصيل المحدّدة (اسم القضية، التاريخ) أقنع من عبارة «عندي التزامات أخرى».",
        "الحل الأمثل غالباً ليس رفضاً ولا قبولاً كاملاً، بل نطاق أضيق أو مساعدة إضافية.",
        "قرار الأولوية بين شريكين ليس قرارك وحدك؛ اقترح لقاءً بينهما إذا تعذّر الحل الثنائي.",
        "أنهِ الحوار بخطوة تالية محدّدة، لا بوعد غامض بـ«سأحاول».",
      ],
      en: [
        "An unnamed conflict doesn't resolve itself — silence reads as implicit agreement to do both tasks in full.",
        "Acknowledging Ziad's request first opens the door to being heard; a flat refusal closes it.",
        "Specific details — the case name, the date — are far more persuasive than \"I have other commitments.\"",
        "The best fix is rarely a flat no or full yes — usually a narrower scope or extra help.",
        "A priority call between two partners isn't yours alone to make — suggest they meet if you can't resolve it together.",
        "Close on a specific next step, not a vague \"I'll try.\"",
      ],
    },
    maxTurns: 12,
    estimatedMinutes: 10,
    accessibilityAlternative: {
      ar: "يمكن إجراء الحوار كاملاً كتابةً: تظهر ردود زياد قاسم نصّاً ويكتب المتدرّب ردوده، بالمدّة نفسها وعدد الأدوار نفسه وبلا فارق في التقييم.",
      en: "The whole conversation can be run in writing: Ziad's responses appear as text and the learner types replies, with the same duration, same number of turns, and no scoring difference.",
    },
    sourceIds: ["src.four-thousand-weeks", "src.your-brain-at-work", "src.fire-proof"],
    contentVersion: "1.0.0",
  },

  // ---------------------------------------------------------------------------
  // 2. Proactively disclosing an at-risk deadline (Arabic, stage 4)
  // ---------------------------------------------------------------------------
  {
    id: "scn.missed-deadline-disclosure",
    title: {
      ar: "الإفصاح المبكر عن موعد نهائي متعثّر",
      en: "Proactively disclosing an at-risk deadline",
    },
    description: {
      ar: "تكتشف قبل يومين من موعد نهائي أن سوء ترتيب الأولويات جعل إنجازه في الوقت مستحيلاً. مهمتك أن تبادر بإبلاغ الشريكة المسؤولة، وتتحمّل المسؤولية دون تبرير، وتقترح خطة إنقاذ واقعية.",
      en: "Two days before a hard deadline, you realize poor triage means you won't make it. Your job is to proactively tell the supervising partner, own it without excuses, and propose a real recovery plan.",
    },
    skillIds: ["skill.resilience", "skill.overcoming-avoidance"],
    stage: 4,
    difficulty: 4,
    userRole: {
      ar: "أنت محامٍ في سنتك الثالثة في مكتب الوفاق للمحاماة والاستشارات القانونية بأبوظبي. كلّفتك الشريكة سلمى نجّار قبل أسبوعين بملف اعتراض على تسجيل علامة تجارية لصالح مطاعم الواحة.",
      en: "You are a third-year associate at Al-Wefaq Law & Consulting in Abu Dhabi. Two weeks ago, Partner Salma Najjar assigned you a trademark-opposition matter for client Al-Waha Restaurants.",
    },
    character: {
      id: "char.salma-najjar",
      name: { ar: "سلمى نجّار", en: "Salma Najjar" },
      role: {
        ar: "شريكة في قسم الملكية الفكرية وحماية العلامات التجارية، تتولى إشراف الملف مباشرة.",
        en: "Partner in the IP and brand-protection department, directly supervising the file.",
      },
      personality: {
        ar: "مباشرة وعالية المعايير، لكنها تُقدّر الإفصاح المبكر أكثر من أي شيء آخر. تكرر على فريقها: «أخبروني بالمشكلة وهي لا تزال قابلة للحل».",
        en: "Direct and high-standard, but values early disclosure above almost anything else. She often tells her team, \"tell me about a problem while it's still fixable.\"",
      },
      emotionalState: {
        ar: "هادئة ومنشغلة في البداية، يزداد قلقها الظاهر مع اتضاح خطورة الموقف، لكن انزعاجها الفعلي يرتفع فقط إذا شعرت بتقليل أو تبرير.",
        en: "Calm and busy at first; her visible concern rises as the risk becomes clear, but her real frustration only spikes if she senses minimizing or excuse-making.",
      },
      knownInformation: {
        ar: [
          "كلّفتك بملف الاعتراض قبل أسبوعين، وأوضحت أن الموعد النهائي نظامي صارم لا يقبل التمديد الاتفاقي.",
          "لديها اليوم اجتماعات متتالية مع عملاء، ولا تملك سوى نافذة قصيرة للحديث الآن.",
          "أبلغت مطاعم الواحة الأسبوع الماضي أن ملف الاعتراض «يسير وفق الخطة».",
          "تتوقع تحديثاً أسبوعياً مكتوباً عن الملفات النشطة، ولم يُشر التحديث الأخير لهذا الملف إلى أي خطر.",
        ],
        en: [
          "She assigned you the opposition file two weeks ago, and was clear the statutory deadline allows no extension by agreement.",
          "She has back-to-back client meetings today and only a short window to talk right now.",
          "She told Al-Waha Restaurants last week the opposition filing was \"on track.\"",
          "She expects a written weekly status update on active matters, and the last one flagged no risk on this file.",
        ],
      },
      hiddenInformation: {
        ar: [
          "تعرف مساراً إجرائياً غير مدوَّن رسمياً: طلب تمديد إداري قصير من الوزارة يُقبل أحياناً إذا قُدّم بمبرر واضح قبل انقضاء الموعد. لا تعرض هذا إلا إذا سمعت وصفاً صادقاً وخطة إنقاذ واقعية.",
          "أخطأت هي نفسها في بداية مسيرتها بتأخير موعد وأبلغت متأخرة؛ التأخر في الإبلاغ، لا الخطأ نفسه، هو ما أضرّ بعلاقة العميل لسنوات. لا تذكر هذا تلقائياً، بل فقط إذا رأت تحمّلاً حقيقياً للمسؤولية.",
          "أكثر استعداداً لتوفير مساعدة فعلية — محامٍ إضافي، أو التواصل المباشر مع جهة الاتصال في الوزارة — إذا تضمّن الإفصاح خطة إنقاذ محدّدة لا مجرد اعتذار.",
          "إذا حاول المتدرّب تحميل المسؤولية للعميل أو لضغط العمل العام، تتراجع مرونتها بشكل ملحوظ وتصبح أكثر تحفظاً في تقديم المساعدة.",
        ],
        en: [
          "She knows an unwritten procedural option: a short administrative extension request to the Ministry is sometimes granted if filed with a clear justification before the deadline lapses. She only offers this if she hears an honest account and a real recovery plan.",
          "She once missed a deadline early in her own career and disclosed it late; the late disclosure, not the miss itself, damaged that client relationship for years. She won't volunteer this unless she sees genuine ownership.",
          "She's far more willing to give real help — another associate, direct contact with her Ministry liaison — if the disclosure includes a specific recovery plan, not just an apology.",
          "If the learner shifts blame to the client or general workload, her flexibility visibly drops and she becomes more guarded about offering help.",
        ],
      },
      goal: {
        ar: "أن تحصل على صورة صادقة ودقيقة لوضع الملف بأسرع وقت لتقرر خطوة الإنقاذ المناسبة قبل فوات الأوان.",
        en: "To get an honest, accurate picture of the file's status as fast as possible, so she can decide on a rescue step before it's too late.",
      },
    },
    culturalContext: {
      ar: "الاعتراف بخطأ أمام شريك قد يبدو في ثقافة المكتب تهديداً للسمعة المهنية، فيميل البعض لتأجيل الإفصاح أملاً بحلّه بصمت. لكن الشركاء الكبار عملياً يكافئون الإفصاح المبكر، حتى عن خبر سيئ، أكثر من إخفائه.",
      en: "Admitting a mistake to a partner can feel like a threat to professional standing, tempting some to delay disclosure hoping to fix it quietly. But senior partners in practice reward early disclosure — even of bad news — far more than concealment.",
    },
    languageMode: "ar",
    background: {
      ar: [
        "كلّفتك سلمى قبل أسبوعين بملف اعتراض على تسجيل علامة منافسة، والموعد النظامي مساء الخميس، أي بعد يومين.",
        "بسبب انشغالك بملفات أخرى بدت أكثر إلحاحاً، أجّلت جمع أدلة الاستخدام السابق والتحليل المقارن مراراً.",
        "اكتشفت هذا الصباح أن حزمة الأدلة بعيدة جداً عن الاكتمال، ولا واقعية لإنجازها كاملة قبل الخميس.",
        "لم تخبر أحداً بعد. تطلب اجتماعاً قصيراً مع سلمى الآن لتبدأ الحوار.",
      ],
      en: [
        "Two weeks ago Salma assigned you an opposition to a competitor's trademark registration, with a statutory deadline Thursday evening — two days out.",
        "Busy with other files that seemed more urgent, you repeatedly pushed back gathering prior-use evidence and the comparison analysis.",
        "This morning you realized the evidence package is far from complete, with no realistic path to finish by Thursday.",
        "You haven't told anyone yet. You request a short meeting with Salma now to start the conversation.",
      ],
    },
    userGoal: {
      ar: "أن تبادر بالإفصاح مبكراً بدل الأمل بحلّ الأمر بصمت أو انتظار السؤال، وتتحمّل المسؤولية دون تبرير أو لوم الآخرين، وتقترح خطة إنقاذ محددة.",
      en: "To disclose proactively and early rather than hope it resolves itself or wait to be asked, own the miss without excuses or blaming others, and propose a concrete recovery plan.",
    },
    opening: {
      ar: "«تفضّل، عندي عشر دقائق قبل مكالمتي القادمة. ما الموضوع؟»",
      en: "\"Go ahead, I have ten minutes before my next call. What's up?\"",
    },
    decisionPoints: [
      {
        id: "dp.mdd.opening-disclosure",
        label: {
          ar: "الإفصاح الأول: هل يبدأ المتدرّب مباشرة بجوهر المشكلة (خطر عدم إنجاز الملف) خلال أول تبادل، أم يماطل بمقدمات جانبية؟",
          en: "The opening disclosure: does the learner lead directly with the core problem — the file is at risk — within the first exchange, or stall with side preamble?",
        },
        triggerAfterTurn: 2,
      },
      {
        id: "dp.mdd.ownership-vs-blame",
        label: {
          ar: "تحمّل المسؤولية: عند سؤال سلمى عمّا حدث، هل يتحمّل المتدرّب مسؤولية سوء الترتيب بوضوح دون لوم العميل أو ضغط العمل العام؟",
          en: "Ownership vs. blame: when Salma asks what happened, does the learner clearly own the triage failure without blaming the client or general workload?",
        },
        triggerAfterTurn: 5,
      },
      {
        id: "dp.mdd.recovery-plan",
        label: {
          ar: "خطة الإنقاذ: هل يقترح المتدرّب خطة محددة (ساعات، مساعدة، تسليم جزئي، طلب تمديد إداري) أم يكتفي بالاعتذار؟",
          en: "The recovery plan: does the learner propose a specific plan — hours, help, a partial submission, requesting an administrative extension — or just apologize?",
        },
        triggerAfterTurn: 8,
      },
    ],
    expectedBehaviors: [
      {
        ar: "يبدأ مباشرة بجوهر المشكلة والموعد المهدَّد خلال أول تبادل.",
        en: "Leads directly with the core problem and the threatened deadline in the first exchange.",
      },
      {
        ar: "يسمّي سبب التأخر تحديداً — سوء ترتيب الأولويات — دون تصغيره.",
        en: "Names the specific cause — poor triage — without minimizing it.",
      },
      {
        ar: "يتحمّل المسؤولية مباشرة دون لوم العميل أو شريك آخر أو ضغط العمل.",
        en: "Owns the mistake directly, without blaming the client, another partner, or workload pressure.",
      },
      {
        ar: "يقترح خطة إنقاذ محددة بأرقام وأدوار واضحة (ساعات، مساعدة، تسليم جزئي).",
        en: "Proposes a specific recovery plan with concrete numbers and roles — hours, help, a partial submission.",
      },
      {
        ar: "يحافظ على هدوئه ومهنيته حتى مع اتضاح قلق سلمى، دون دفاعية.",
        en: "Stays composed and professional even as Salma's concern becomes visible, without becoming defensive.",
      },
    ],
    criticalMistakes: [
      {
        ar: "ينتظر أن تسأل سلمى مباشرة «هل كل شيء على ما يرام؟» بدل المبادرة.",
        en: "Waits for Salma to directly ask \"is everything on track?\" instead of raising it unprompted.",
      },
      {
        ar: "يقلّل من خطورة الموقف أو يوحي بأن الأمر «قد يُحل من تلقاء نفسه» دون أساس.",
        en: "Downplays the risk or implies it might \"work itself out,\" with no basis.",
      },
      {
        ar: "يُحمّل المسؤولية للعميل أو لعبء العمل العام بدل قرار الترتيب الخاص به.",
        en: "Shifts blame to the client or general workload instead of his own triage decision.",
      },
      {
        ar: "يكتفي بالاعتذار دون أي خطة إنقاذ أو خطوة تالية محددة.",
        en: "Offers only an apology with no recovery plan or specific next step.",
      },
      {
        ar: "يستمر بطمأنة سلمى بأن الملف «غالباً بخير» بعد أن طلبت صراحة الوضع الحقيقي.",
        en: "Keeps reassuring Salma the file is \"probably fine\" after she has explicitly asked for the real status.",
      },
    ],
    successConditions: [
      {
        ar: "ظهرت المشكلة الجوهرية خلال أول تبادلين من الحوار.",
        en: "The core problem surfaced within the first two exchanges of the conversation.",
      },
      {
        ar: "تحمّل المتدرّب المسؤولية بوضوح دون لوم أي طرف آخر.",
        en: "The learner clearly owned the mistake without blaming anyone else.",
      },
      {
        ar: "قُدّمت خطة إنقاذ محددة تُسمّي ما هو مطلوب وموعده.",
        en: "A specific recovery plan was presented, naming what's needed and by when.",
      },
      {
        ar: "امتلكت سلمى معلومات كافية وصادقة لتقرر مسار طلب التمديد أو بديلاً آخر.",
        en: "Salma had enough honest information to decide on the extension route or another rescue step.",
      },
      {
        ar: "انتهى الحوار بخطوة تالية واضحة ومسؤول محدد عنها.",
        en: "The conversation ended with a clear next step and a named owner.",
      },
    ],
    exitConditions: [
      {
        ar: "بلغ الحوار الحدّ الأقصى للأدوار.",
        en: "The conversation reaches the maximum number of turns.",
      },
      {
        ar: "اتُّفق على خطة إنقاذ محددة بخطوة تالية ومسؤول، وأكّد الطرفان ذلك.",
        en: "A specific recovery plan with a next step and owner was agreed, and both confirmed it.",
      },
      {
        ar: "ارتكب المتدرّب خطأً حاسماً وأصرّ عليه بعد أن منحته سلمى فرصة تصحيح بسؤالها المباشر: «أريد الوضع الحقيقي بلا تجميل — هل سيُنجز الملف أم لا؟» — عندها تُقفل الجلسة وتُعرض التغذية الراجعة.",
        en: "The learner made a critical mistake and held to it after Salma gave one chance to correct, asking directly, \"I want the real status, no sugar-coating — will the file be done or not?\" — the session then closes and feedback is shown.",
      },
      {
        ar: "شعرت سلمى أن المتدرّب ما زال يخفي حجم المشكلة بعد سؤالين مباشرين، فتنهي الاجتماع لتتدخل بنفسها.",
        en: "Sensing the learner is still hiding the scope of the problem after two direct questions, Salma ends the meeting to intervene herself.",
      },
    ],
    rubricId: "rubric.capacity-conversation-sim.v1",
    coachingNotes: {
      ar: [
        "الإفصاح المتأخر يضرّ أكثر من الخطأ نفسه؛ سلمى تكافئ من يخبرها مبكراً، لا من يصل بنتيجة مثالية دائماً.",
        "ابدأ بالمشكلة، لا بالمقدمات؛ كل دقيقة تأخير في ذكر الخطر الحقيقي تقلّص خيارات الإنقاذ المتاحة.",
        "تحمّل المسؤولية يعني تسمية القرار الخاطئ («أجّلت الأدلة») لا وصف الظروف العامة.",
        "خطة الإنقاذ المحددة أقوى من الاعتذار: اذكر الساعات، من يمكن أن يساعد، وما يمكن تسليمه جزئياً الآن.",
        "المسار الإداري الاستثنائي لا يُفتح إلا بصدق كامل؛ التقليل من حجم المشكلة يُغلقه.",
      ],
      en: [
        "Late disclosure damages more than the mistake itself; Salma rewards early honesty, not a permanent record of flawless delivery.",
        "Lead with the problem, not the preamble; every minute of delay in naming the real risk narrows the rescue options.",
        "Owning it means naming the specific bad decision — \"I kept deferring the evidence\" — not describing general circumstances.",
        "A specific recovery plan beats an apology: name the hours needed, who could help, and what can be partially delivered now.",
        "The exceptional administrative route only opens with full honesty; minimizing the problem closes it.",
      ],
    },
    maxTurns: 12,
    estimatedMinutes: 12,
    accessibilityAlternative: {
      ar: "يمكن إجراء الحوار كاملاً كتابةً: تظهر ردود سلمى نجّار نصّاً ويكتب المتدرّب ردوده، بالمدّة نفسها وعدد الأدوار نفسه وبلا فارق في التقييم.",
      en: "The whole conversation can be run in writing: Salma's responses appear as text and the learner types replies, with the same duration, same number of turns, and no scoring difference.",
    },
    sourceIds: ["src.the-antidote", "src.four-thousand-weeks", "src.fire-proof"],
    contentVersion: "1.0.0",
  },
];
