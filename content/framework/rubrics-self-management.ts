import type { RubricDef } from "../types";

/**
 * Assessment rubrics for the Self-Management domain (`dom.self-management`)
 * of AIJUR Professional Skills Lab.
 *
 * Every descriptor describes something a reviewer can point to in the
 * learner's transcript or text. No descriptor refers to attitude,
 * motivation, confidence, personality or accent — only to observable
 * features of what was said or written.
 */
export const SELF_MANAGEMENT_RUBRICS: RubricDef[] = [
  // -------------------------------------------------------------------------
  // 1. Written self-management communication
  // -------------------------------------------------------------------------
  {
    id: "rubric.self-management-written.v1",
    name: {
      ar: "جودة المراسلة أو الخطة المكتوبة لإدارة الذات",
      en: "Quality of a written self-management plan or message",
    },
    version: "1.0.0",
    skillIds: [
      "skill.time-priority-management",
      "skill.workload-boundaries",
      "skill.overcoming-avoidance",
    ],
    criteria: [
      {
        id: "cr.realistic-prioritization",
        name: { ar: "واقعية ترتيب الأولويات", en: "Realistic prioritization" },
        description: {
          ar: "يُقاس بما إذا رتّبت الخطة المهام والملفات وفق الاستعجال والأهمية الفعليين (مهل قضائية، مخاطر على الموكّل، التزامات تعاقدية)، لا وفق أعلى صوت أو آخر رسالة وردت.",
          en: "Measured by whether the plan orders tasks and matters by genuine urgency and importance (court deadlines, client risk, contractual obligations), rather than by whoever is loudest or arrived last.",
        },
        weight: 0.3,
        descriptors: [
          {
            ar: "لا تمييز في الخطة بين المستعجل والمهم؛ المهام مرتّبة حسب وقت ورودها أو حسب من طلبها بإلحاح (الردّ على استفسار شريك عابر حول علامة تجارية قبل إنهاء مذكّرة دفاع مستحقّة غداً في دعوى إخلاء).",
            en: "The plan shows no distinction between urgent and important; tasks are ordered by when they arrived or by who pushed hardest (answering a partner's casual question about a trademark filing before finishing a defence memorandum due tomorrow in an eviction case).",
          },
          {
            ar: "تُميَّز مهمّة واحدة فقط بوصفها عاجلة أو مهمّة، بينما تبقى بقية المهام مرتّبة حسب ترتيب ورودها دون أي معيار آخر.",
            en: "Only one task is singled out as urgent or important; the rest of the list is still ordered simply by arrival order, with no other criterion applied.",
          },
          {
            ar: "معظم المهام مرتّبة حسب استعجالها وأهميتها الفعليين، لكن انعكاساً واحداً واضحاً يبقى قائماً (مراجعة اتفاقية عدم إفشاء روتينية قبل تقديم استئناف تنتهي مهلته غداً).",
            en: "Most tasks are ordered by genuine urgency and importance, but one clear reversal remains (reviewing a routine non-disclosure agreement before filing an appeal whose deadline is tomorrow).",
          },
          {
            ar: "كل مهمّة في الخطة مرتّبة بحسب مهلتها الفعلية أو المخاطر المترتّبة على تأخيرها، مع سبب مذكور صراحةً لكل ترتيب (مثلاً: «دعوى الشيك المرتجع أولاً لأن مهلة الطعن تنتهي الخميس ولا بديل عن الالتزام بها»).",
            en: "Every task in the plan is ordered by its actual deadline or the risk of delay, with an explicit reason stated for the ordering (e.g. \"the dishonoured cheque matter first, because the appeal window closes Thursday and cannot be extended\").",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.clarity-directness",
        name: { ar: "وضوح الطلب أو الحدّ ومباشرته", en: "Clarity and directness of the ask or boundary" },
        description: {
          ar: "يُقاس بما إذا صيغ الطلب أو الحدّ المطروح بجملة واضحة ومباشرة تُفهم من قراءة واحدة، خالية من المراوغة أو التلميح غير المباشر أو التهرّب.",
          en: "Measured by whether the ask or boundary is phrased as a clear, direct sentence understood on one reading, free of passive-aggressive hedging, indirect hints or evasive language.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "لا طلب واضح ولا حدّ محدّد في أي موضع من النص؛ الرسالة تلمّح إلى الضغط أو الانزعاج («الأمور مزدحمة قليلاً هذه الأيام») دون أن تطلب شيئاً محدّداً.",
            en: "No clear ask or boundary appears anywhere; the message only hints at pressure or discomfort (\"things are a bit busy these days\") without ever requesting anything specific.",
          },
          {
            ar: "يُسمَّى المصدر أو المشكلة، لكن الطلب نفسه ضمني أو مدفون داخل جملة طويلة، لا يُصاغ كطلب صريح («ربما كان من الأفضل توزيع الملفات بشكل مختلف في وقت ما»).",
            en: "The source of the problem is named, but the ask itself stays implicit or is buried inside a long sentence, never phrased as an explicit request (\"maybe at some point the files could be distributed differently\").",
          },
          {
            ar: "طلب واحد مصاغ بوضوح ومباشرة، لكنه مُضعَف بعبارات تحوّطية في موضع آخر من النص («آسف لإزعاجك، إن لم يكن الأمر صعباً جداً، هل يمكن…؟»).",
            en: "One request is stated clearly and directly, but it is undercut by hedging language elsewhere in the text (\"sorry to bother you, if it's not too much trouble, could you possibly…?\").",
          },
          {
            ar: "الطلب أو الحدّ مصاغ بجملة مباشرة واحدة خالية من أي تحوّط أو اعتذار غير ضروري (مثلاً: «لا يمكنني تولّي ملف جديد قبل الأربعاء المقبل نظراً لمهل الاستئناف الحالية»)، ويُفهم من قراءة واحدة دون تأويل.",
            en: "The ask or boundary is stated in one direct sentence with no unnecessary hedging or apology (e.g. \"I cannot take on a new file before next Wednesday given the current appeal deadlines\"), and is understood on a single reading with no room for a different interpretation.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.professionalism-tone",
        name: { ar: "الاحتراف والنبرة", en: "Professionalism and tone" },
        description: {
          ar: "يُقاس بحزم النبرة مقابل غيابها، وبخلوّ النص من اللوم أو السخرية أو الاستعطاف، وبما إذا حافظت الصياغة على العلاقة المهنية مع من تُوجَّه إليه الرسالة.",
          en: "Measured by whether the tone is firm rather than absent, whether the text is free of blame, sarcasm or self-pity, and whether the wording preserves the professional relationship with the recipient.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "نبرة لوم أو استعطاف واضحة («لا أحد يراعي حجم عملي»، «كنت لأنجز هذا لو تُرِكت وشأني») توجّه المسؤولية إلى الآخرين أو تستدرّ التعاطف بدل طرح الأمر بموضوعية.",
            en: "A clearly blaming or self-pitying tone (\"no one takes my workload into account\", \"I could have finished this if I'd been left alone\") that directs responsibility elsewhere or seeks sympathy instead of addressing the matter objectively.",
          },
          {
            ar: "لا لوم مباشر، لكن النبرة عدائية أو باردة بشكل يوحي بالاستياء (جمل قصيرة قاطعة، غياب أي إقرار بموقف الطرف الآخر) قد يُفهم منها انسحاب من العلاقة المهنية.",
            en: "No direct blame, but the tone is curt or cold in a way that reads as resentment (short, clipped sentences, no acknowledgment of the other side's position) that could be read as pulling back from the working relationship.",
          },
          {
            ar: "نبرة مهنية ومحترمة طوال النص، لكن حزم الطلب يضعف قرب النهاية بعبارة تراجعية («لكن افعل ما تراه مناسباً على أي حال») تُفقد الرسالة أثرها.",
            en: "A professional, respectful tone throughout, but the firmness of the ask weakens near the end with a walk-back phrase (\"but do whatever you think is best anyway\") that undermines the message's effect.",
          },
          {
            ar: "نبرة حازمة ومحترمة معاً من أول الرسالة إلى آخرها، خالية من اللوم أو السخرية، مع إقرار صريح بموقف الطرف الآخر أو ضغوطه («أدرك أن الفريق مثقل حالياً») قبل طرح الحدّ أو الطلب.",
            en: "A tone that is both firm and respectful from start to finish, free of blame or sarcasm, with an explicit acknowledgment of the other side's position or pressures (\"I recognise the team is stretched right now\") before the boundary or ask is stated.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.concrete-next-steps",
        name: { ar: "تحديد الخطوات التالية بشكل ملموس", en: "Concreteness of next steps" },
        description: {
          ar: "يُقاس بما إذا حدّدت الخطة أو الرسالة خطوة محدّدة، بتاريخ، ومسؤول عنها بالاسم، بدل عبارات عامة عن النيّة («سأحاول اللحاق بالأمر»).",
          en: "Measured by whether the plan or message names a specific step, a date, and a named owner, rather than a general statement of intent (\"I'll try to get to it\").",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "لا خطوة تالية محدّدة في أي موضع؛ النص ينتهي بعبارة نيّة عامة («سأحاول اللحاق بالأمر قريباً») دون تاريخ أو مسؤول.",
            en: "No specific next step appears anywhere; the text ends on a general statement of intent (\"I'll try to catch up soon\") with no date and no named owner.",
          },
          {
            ar: "خطوة واحدة مذكورة بوضوح، لكن دون تاريخ محدّد أو دون تسمية من سينفّذها.",
            en: "One step is clearly named, but with no specific date attached and no stated owner for carrying it out.",
          },
          {
            ar: "معظم الخطوات محدّدة بتاريخ ومسؤول، لكن خطوة جوهرية واحدة (مثل من سيراجع المسوّدة النهائية قبل التقديم) تبقى غير مسندة إلى أحد.",
            en: "Most steps carry a date and an owner, but one material step (such as who reviews the final draft before filing) is left unassigned to anyone.",
          },
          {
            ar: "كل خطوة في الخطة محدّدة بمهمّة واضحة، وتاريخ دقيق، ومسؤول مسمّى بالاسم أو الصفة (مثلاً: «سأنجز مسوّدة لائحة الجواب في دعوى المقاول بحلول الاثنين، وتراجعها المحامية سارة قبل التقديم يوم الثلاثاء»).",
            en: "Every step in the plan carries a clear task, a precise date, and a named owner by name or role (e.g. \"I will complete the draft response in the contractor payment dispute by Monday, and Sarah will review it before filing on Tuesday\").",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.written-unachievable-commitment",
        label: {
          ar: "الالتزام بموعد أو مهمّة جديدة لا يمكن إنجازها فعلياً ضمن الأعباء الحالية، لمجرّد تجنّب مواجهة صعبة مع من طلبها.",
          en: "Committing to a new deadline or task that cannot realistically be met given current workload, purely to avoid a difficult conversation with whoever asked for it.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.written-blame-shifting",
        label: {
          ar: "إلقاء مسؤولية التأخير أو الفوات على زميل أو موكّل أو ظرف خارجي بالكامل، دون أي إقرار بالجزء الذي يعود إلى تقصير المتدرّب نفسه.",
          en: "Placing the responsibility for a delay or a missed deadline entirely on a colleague, a client or an external circumstance, with no acknowledgment of the learner's own part in the miss.",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },

  // -------------------------------------------------------------------------
  // 2. Capacity conversation simulation performance
  // -------------------------------------------------------------------------
  {
    id: "rubric.capacity-conversation-sim.v1",
    name: {
      ar: "جودة أداء محادثة الطاقة الاستيعابية والمهل في المحاكاة",
      en: "Quality of a capacity-and-deadlines conversation in simulation",
    },
    version: "1.0.0",
    skillIds: [
      "skill.workload-boundaries",
      "skill.emotional-intelligence",
      "skill.resilience",
    ],
    criteria: [
      {
        id: "cr.proactive-timely-disclosure",
        name: { ar: "الإفصاح المبكر والاستباقي", en: "Proactive and timely disclosure" },
        description: {
          ar: "يُقاس بما إذا أثار المتدرّب مشكلة الطاقة الاستيعابية أو المهلة المهدَّدة بمبادرة منه في بداية الحوار، أم أن المشرف اضطرّ لاكتشافها أو انتزاع الإقرار بها.",
          en: "Measured by whether the learner raised the capacity issue or the threatened deadline on their own initiative early in the conversation, or whether the supervisor had to discover it or extract the admission.",
        },
        weight: 0.3,
        descriptors: [
          {
            ar: "لا يفصح المتدرّب عن المشكلة في أي وقت من تلقاء نفسه؛ النص يُظهر أن المشرف هو من كشفها أو واجهه بها مباشرة أكثر من مرّة قبل أي إقرار.",
            en: "The learner never discloses the problem on their own; the transcript shows the supervisor discovering it or confronting them directly more than once before any admission is made.",
          },
          {
            ar: "يقرّ المتدرّب بالمشكلة فقط بعد سؤال مباشر من المشرف، ولا يذكرها من تلقاء نفسه في أي موضع سابق من الحوار.",
            en: "The learner admits the problem only after a direct question from the supervisor, and never raises it unprompted at any earlier point in the exchange.",
          },
          {
            ar: "يثير المتدرّب المشكلة من تلقاء نفسه، لكن بعد سؤال تمهيدي عام من المشرف («كيف تسير الأمور؟») لا بعد فتح الحوار مباشرة بها.",
            en: "The learner raises the problem unprompted, but only after a general opening question from the supervisor (\"how are things going?\"), rather than opening the conversation with it directly.",
          },
          {
            ar: "يفتتح المتدرّب الحوار بنفسه بذكر المشكلة صراحةً منذ الدور الأول (مهلة تسليم مذكّرة استئناف مهدَّدة، أو ملف تجاوز الطاقة الاستيعابية المتاحة)، قبل أن يطرح المشرف أي سؤال.",
            en: "The learner opens the conversation themselves, stating the problem explicitly in the very first turn (a threatened deadline for an appeal brief, or a file load that has exceeded available capacity), before the supervisor asks anything.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.composure-under-pressure",
        name: { ar: "الثبات والاحتراف تحت الضغط", en: "Composure and professionalism under pressure" },
        description: {
          ar: "يُقاس بما إذا حافظ النص على نبرة هادئة ومهنية أمام انزعاج المشرف أو أسئلته الحادّة، مقابل الدفاعية أو التبرير المتلاحق أو علامات الذعر (جمل متقطّعة، تصعيد النبرة).",
          en: "Measured by whether the transcript maintains a calm, professional tone in the face of the supervisor's displeasure or pointed questions, versus defensiveness, chained justifications, or signs of panic (broken sentences, escalating tone).",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "يتحوّل المتدرّب إلى الدفاعية أو التبرير المتلاحق فور أول سؤال حادّ من المشرف (سلسلة أعذار متتابعة)، أو تظهر في النص علامات ذعر واضحة (جمل متقطّعة، تراجع متكرّر عن الكلام).",
            en: "The learner turns defensive or launches into a chain of justifications the moment the supervisor asks a pointed question, or the transcript shows clear signs of panic (broken sentences, repeatedly retracting what was said).",
          },
          {
            ar: "لا دفاعية حادّة ولا ذعر ظاهر، لكن الردود متردّدة وغامضة أمام أسئلة المشرف المباشرة (لا يجيب بوضوح عن سبب المشكلة أو مداها).",
            en: "No sharp defensiveness or visible panic, but responses to the supervisor's direct questions are hesitant and vague (not clearly answering why the problem arose or how large it is).",
          },
          {
            ar: "يحافظ المتدرّب على نبرة هادئة ومهنية طوال الحوار، ويجيب عن أسئلة المشرف مباشرة، لكن دون أن يُقرّ صراحةً بأثر المشكلة على الموكّل أو الملف.",
            en: "The learner stays calm and professional throughout, and answers the supervisor's questions directly, but without explicitly acknowledging the impact of the problem on the client or the matter.",
          },
          {
            ar: "يحافظ المتدرّب على نبرة هادئة ومهنية طوال الحوار حتى في أشدّ لحظاته توتّراً، يجيب عن كل سؤال مباشرة، ويقرّ صراحةً بأثر المشكلة على الملف أو الموكّل دون تهرّب.",
            en: "The learner stays calm and professional throughout, including at the tensest points, answers every question directly, and explicitly acknowledges the impact of the problem on the matter or client without deflecting.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.concrete-recovery-plan",
        name: { ar: "طرح خطة تعافي أو إعادة ترتيب أولويات ملموسة", en: "Proposing a concrete recovery or reprioritization plan" },
        description: {
          ar: "يُقاس بما إذا اقترح المتدرّب خطوات محدّدة لمعالجة الموقف (إعادة ترتيب ملفات، طلب مساعدة محدّدة، مهلة جديدة واقعية) بدل الاكتفاء بالاعتذار.",
          en: "Measured by whether the learner proposed specific steps to address the situation (reordering files, a specific request for help, a realistic new deadline) rather than offering only an apology.",
        },
        weight: 0.3,
        descriptors: [
          {
            ar: "لا خطة مطروحة في أي موضع من الحوار؛ يكتفي المتدرّب بالاعتذار المتكرّر («أنا آسف حقاً، سأحاول أفضل») دون أي اقتراح ملموس.",
            en: "No plan is proposed anywhere in the conversation; the learner offers only repeated apology (\"I'm really sorry, I'll try harder\") with no concrete suggestion at all.",
          },
          {
            ar: "يذكر المتدرّب فكرة عامة عن حلّ («سأنظّم وقتي بشكل أفضل») دون أي خطوة محدّدة تُنفَّذ أو تُقاس.",
            en: "The learner mentions a general idea of a solution (\"I'll organise my time better\") with no specific, executable or measurable step behind it.",
          },
          {
            ar: "يقترح المتدرّب خطوة واحدة ملموسة (تأجيل ملف أقل استعجالاً، أو طلب مساعدة زميل بملف محدّد)، لكن دون مهلة جديدة واقعية للملف المتأخر نفسه.",
            en: "The learner proposes one concrete step (deferring a less urgent file, or asking a specific colleague for help on a named file), but without a realistic new deadline for the delayed matter itself.",
          },
          {
            ar: "يقترح المتدرّب خطة مؤلّفة من أكثر من خطوة ملموسة (إعادة ترتيب ملفات محدّدة، طلب مساعدة من زميل بالاسم، مهلة جديدة واقعية ومحسوبة) تعالج الملف المتأخر دون المساس بمهل قضائية أخرى.",
            en: "The learner proposes a plan with more than one concrete step (reordering specific named files, requesting help from a named colleague, a realistic and calculated new deadline) that addresses the delayed matter without compromising other court deadlines.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.relationship-preservation",
        name: { ar: "الحفاظ على علاقة العمل", en: "Preserving the working relationship" },
        description: {
          ar: "يُقاس بما إذا خرج الحوار وقد بقيت ثقة المشرف قائمة (تحمّل واضح للمسؤولية، لا لوم للآخرين، لا استخفاف بقلق المشرف)، أم انتهى بما يُضعف تلك الثقة.",
          en: "Measured by whether the conversation ends with the supervisor's trust still intact (clear ownership of responsibility, no blaming others, no dismissing the supervisor's concern), or ends in a way that erodes it.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "ينهي المتدرّب الحوار بتصريح يُضعف الثقة صراحةً (إلقاء اللوم على زميل أو موكّل، أو الاستخفاف بقلق المشرف: «الأمر ليس بهذه الخطورة»).",
            en: "The learner ends the conversation with a statement that explicitly erodes trust (blaming a colleague or client, or dismissing the supervisor's concern: \"it's not really that serious\").",
          },
          {
            ar: "لا لوم صريح، لكن النص يخلو من أي إقرار مباشر بالمسؤولية الشخصية عن التأخير طوال الحوار.",
            en: "No explicit blame, but the transcript contains no direct acknowledgment of personal responsibility for the delay anywhere in the exchange.",
          },
          {
            ar: "يقرّ المتدرّب بمسؤوليته الشخصية مرّة واحدة بوضوح، لكن الحوار ينتهي دون أي إشارة إلى كيفية تجنّب تكرار الموقف مستقبلاً.",
            en: "The learner clearly acknowledges personal responsibility once, but the conversation ends with no reference to how a repeat of the situation will be avoided in future.",
          },
          {
            ar: "يقرّ المتدرّب بمسؤوليته الشخصية بوضوح دون إلقاء اللوم على أحد، ويختم الحوار بإشارة محدّدة إلى ما سيتغيّر لتفادي تكرار الموقف (مثل إبلاغ المشرف مبكراً في المرّة القادمة عند بلوغ حدّ معيّن من الأعباء).",
            en: "The learner clearly acknowledges personal responsibility without blaming anyone, and closes the conversation with a specific reference to what will change to avoid a repeat (such as flagging the supervisor early next time a certain workload threshold is reached).",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.sim-hiding-problem",
        label: {
          ar: "إخفاء أو تقليل شأن المهلة المهدَّدة أو الفائتة بشكل متعمّد، بحيث لا يُكشف الأمر إلا بعد مواجهة مباشرة ومتكرّرة من المشرف.",
          en: "Deliberately hiding or minimizing a threatened or missed deadline, such that it only comes to light after direct and repeated confrontation by the supervisor.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.sim-overpromise-to-escape",
        label: {
          ar: "الالتزام بمهلة جديدة أو تعهّد آخر لا أساس واقعياً له، لمجرّد إنهاء الحوار المزعج، دون أي خطة قابلة للتنفيذ خلفه.",
          en: "Committing to a new deadline or other undertaking with no realistic basis, purely to end the uncomfortable conversation, with no executable plan behind it.",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },
];
