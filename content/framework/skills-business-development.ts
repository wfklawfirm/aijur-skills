import type { SkillDef } from "../types";

// -----------------------------------------------------------------------------
// dom.business-development — three additional skills
//
// Companion file to skills.ts. Does not redefine skill.business-development,
// skill.relationship-building or skill.commercial-awareness, which already
// exist in skills.ts. Matches the depth of skills-self-management.ts: 7
// mastery levels (0-6), each with definition / observableBehaviors /
// commonMistakes / successCriteria / evidenceRequired, bilingual (Arabic
// primary), grounded in concrete Arab-market legal scenarios.
//
// These three skills fill the gap named in dom.business-development's own
// description ("turning professional reputation into instructions without
// overselling or promising") that skill.relationship-building does not
// cover: the ongoing maintenance of a network over years, the specific act
// of asking for a referral, and the specific act of converting a warm
// conversation into a signed engagement without overselling or guaranteeing
// an outcome.
// -----------------------------------------------------------------------------

export const BUSINESS_DEVELOPMENT_SKILLS: SkillDef[] = [
  {
    id: "skill.staying-top-of-mind",
    domainId: "dom.business-development",
    name: { ar: "الحضور المستمر في ذهن الشبكة المهنية", en: "Staying Top of Mind" },
    synonyms: [
      "staying visible",
      "long-term follow-up",
      "nurturing dormant contacts",
      "keeping in touch without an agenda",
      "المتابعة طويلة الأمد",
    ],
    definition: {
      ar: "متابعة شبكة العلاقات المهنية بانتظام عبر سنوات، بمشاركة معلومة مفيدة فعلاً أو سؤال صادق عن الحال، دون أن يبدو التواصل مرتبطًا بحاجة آنية، ليبقى اسمًا يتذكره الموكّل أو الزميل عند ظهور حاجة قانونية فعلية.",
      en: "Maintaining regular contact with a professional network over years — sharing genuinely useful information or asking sincerely how someone is doing — without contact appearing tied to an immediate need, so as to be the name a client or colleague remembers when an actual legal need arises.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على البقاء حاضرًا في ذهن شبكته المهنية.",
          en: "No evidence has been collected yet on the learner's ability to stay top of mind with his professional network.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يهمل التواصل مع معارفه المهنيين لأشهر أو سنوات بعد آخر تعامل مباشر، فينساه من يحتاج محاميًا لاحقًا.",
          en: "Neglects contact with professional acquaintances for months or years after the last direct interaction, so is forgotten by someone who later needs a lawyer.",
        },
        observableBehaviors: [
          {
            ar: "يحتفظ ببطاقات أو أرقام معارف من مؤتمر قانوني قبل ثلاث سنوات دون تواصل واحد منذ ذلك الحين.",
            en: "Keeps the cards or numbers of contacts from a legal conference three years ago without a single follow-up since.",
          },
          {
            ar: "يتفاجأ حين يسمع أن أحد معارفه غيّر عمله أو انتقل إلى شركة جديدة.",
            en: "Is surprised to hear that a contact has changed jobs or moved to a new company.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتقد أن علاقة كانت قوية في الماضي تبقى حيّة من تلقاء نفسها.",
            en: "Assumes a relationship that was once strong stays alive on its own.",
          },
          {
            ar: "يتذكّر معارفه فقط حين يحتاج شيئًا منهم.",
            en: "Only remembers his contacts when he needs something from them.",
          },
        ],
        successCriteria: [
          {
            ar: "لم يفقد بيانات التواصل الأساسية لمعارفه.",
            en: "Has not lost the basic contact details of his acquaintances.",
          },
          {
            ar: "يعترف بوجود فجوة تواصل حين يُسأل عنها.",
            en: "Acknowledges the contact gap when asked about it.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة معارف قديمة دون سجلّ تواصل حديث.",
            en: "An old contact list with no record of recent contact.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يتواصل بمناسبات متفرقة، كالأعياد أو الترقيات، لكن دون نمط منتظم أو محتوى يحمل فائدة فعلية.",
          en: "Makes contact on scattered occasions, such as holidays or promotions, but without a regular pattern or content carrying real usefulness.",
        },
        observableBehaviors: [
          {
            ar: "يرسل تهنئة عيد جماعية لكامل قائمة جهات اتصاله دفعة واحدة.",
            en: "Sends one mass holiday greeting to his entire contact list at once.",
          },
          {
            ar: "يهنئ معارفه بترقية يراها على وسائل التواصل لكن دون أي رسالة تالية.",
            en: "Congratulates a contact on a promotion seen on social media but never sends a follow-up message.",
          },
        ],
        commonMistakes: [
          {
            ar: "يرسل رسائل عامة تصلح لأي شخص فلا تُقرأ كرسالة شخصية.",
            en: "Sends generic messages that could suit anyone, so they don't read as personal.",
          },
          {
            ar: "يعتمد فقط على مناسبات التقويم دون أي سبب آخر للتواصل.",
            en: "Relies only on calendar occasions, with no other reason to reach out.",
          },
        ],
        successCriteria: [
          {
            ar: "تواصل شخصي واحد على الأقل كل ثلاثة أشهر مع معارف رئيسيين.",
            en: "At least one personal contact every three months with key contacts.",
          },
          {
            ar: "الرسالة تذكر تفصيلًا يخصّ الشخص لا نصًا موحّدًا.",
            en: "The message references a detail specific to the person, not a uniform text.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ رسائل متفرقة موجّهة لأشخاص محدَّدين.",
            en: "A log of scattered messages addressed to specific individuals.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يبني نظامًا منتظمًا لمتابعة معارفه الرئيسيين، بمشاركة معلومة أو تحليل مفيد فعليًا لعملهم، دون طلب مقابل.",
          en: "Builds a regular system for following up with key contacts, sharing information or analysis genuinely useful to their work, with nothing asked in return.",
        },
        observableBehaviors: [
          {
            ar: "يرسل لمدير قانوني في شركة مقاولات مقالًا قصيرًا عن تعديل تنظيمي جديد يمسّ عقود المقاولات، مع سطرين يشرحان أثره عليه تحديدًا.",
            en: "Sends a construction company's legal manager a short piece on a new regulatory amendment affecting construction contracts, with two lines explaining exactly how it affects him.",
          },
          {
            ar: "يضع تذكيرًا دوريًا كل شهرين لمراجعة قائمة معارفه الرئيسيين والتواصل مع من لم يتواصل معه مؤخرًا.",
            en: "Sets a recurring reminder every two months to review his key-contact list and reach out to anyone he hasn't contacted recently.",
          },
        ],
        commonMistakes: [
          {
            ar: "يرسل المقال نفسه لكل القائمة دون تخصيصه بما يلائم كل شخص.",
            en: "Sends the same article to the whole list without tailoring it to each person's relevance.",
          },
          {
            ar: "يتوقف عن المتابعة إذا لم يحصل على ردّ فوري.",
            en: "Stops following up if he doesn't get an immediate reply.",
          },
        ],
        successCriteria: [
          {
            ar: "نظام متابعة موثّق يغطي معارف رئيسيين بانتظام.",
            en: "A documented follow-up system regularly covers key contacts.",
          },
          {
            ar: "كل رسالة تحمل فائدة محدَّدة للمتلقي لا محتوى عامًا.",
            en: "Every message carries a specific benefit for the recipient, not generic content.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ متابعة لثلاثة أشهر يُظهر رسائل مخصّصة.",
            en: "A three-month follow-up log showing tailored messages.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يحافظ على حضوره في ذهن شبكته عبر سنوات دون أن يبدو التواصل مرتبطًا بحاجة، فيصبح الاسم الأول الذي يخطر ببال معارفه عند ظهور حاجة قانونية فعلية.",
          en: "Sustains his presence in his network's mind over years without contact appearing need-driven, becoming the first name a contact thinks of when an actual legal need arises.",
        },
        observableBehaviors: [
          {
            ar: "بعد أربع سنوات من انقطاع التعامل المباشر مع مديرة موارد بشرية ظلّ يتواصل معها بانتظام، تتصل به مباشرة حين يواجه المكتب نزاع فصل تعسفي.",
            en: "After four years without direct dealings, an HR director he has kept in regular contact calls him directly when her company faces a wrongful-termination dispute.",
          },
          {
            ar: "يلاحظ أن معارفه يبادرون هم بمشاركته أخبارًا أو فرصًا دون أن يطلب.",
            en: "Notices contacts proactively share news or opportunities with him unprompted.",
          },
        ],
        commonMistakes: [
          {
            ar: "يزيد وتيرة التواصل فجأة عند اقتراب موسم ضعيف في العمل فيبدو تواصله انتهازيًا.",
            en: "Suddenly ramps up contact frequency when business is slow, so the outreach reads as opportunistic.",
          },
          {
            ar: "يهمل معارف بلا توكيلات واضحة معتقدًا أنهم غير مفيدين حاليًا.",
            en: "Neglects contacts without an obvious pipeline of work, assuming they're not currently useful.",
          },
        ],
        successCriteria: [
          {
            ar: "توكيل واحد على الأقل جاء من معارف بعد انقطاع تعامل مباشر يفوق سنة.",
            en: "At least one instruction came from a contact after more than a year without direct dealings.",
          },
          {
            ar: "وتيرة التواصل ثابتة بصرف النظر عن حالة العمل الحالية.",
            en: "Contact frequency stays steady regardless of current business conditions.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ تواصل طويل الأمد مع توكيل ناتج موثَّق.",
            en: "A long-term contact log with a resulting instruction documented.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني لفريقه أو مكتبه نظام متابعة منظّمًا لمعارف متعددين، يحدّد أولوية كل علاقة وتوقيت التواصل بها دون آلية موحّدة تفقد الطابع الشخصي.",
          en: "Builds a structured follow-up system for his team or firm covering many contacts, setting each relationship's priority and contact cadence without a uniform mechanism that loses the personal touch.",
        },
        observableBehaviors: [
          {
            ar: "يضع جدولًا يصنّف معارف المكتب حسب الأهمية ويحدّد تكرار التواصل المناسب لكل فئة.",
            en: "Creates a schedule classifying the firm's contacts by importance and setting the right contact frequency for each tier.",
          },
          {
            ar: "يدرّب زميلًا أصغر على صياغة رسالة متابعة شخصية بدل استخدام نموذج موحّد.",
            en: "Coaches a junior colleague to write a personal follow-up message instead of using a uniform template.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض قالب رسالة واحدًا على الفريق فتفقد المتابعة طابعها الشخصي.",
            en: "Imposes a single message template on the team, so follow-up loses its personal character.",
          },
          {
            ar: "يهمل تحديث تصنيف المعارف فتصبح الأولويات قديمة.",
            en: "Neglects to update the contact classification, so priorities go stale.",
          },
        ],
        successCriteria: [
          {
            ar: "نظام متابعة معتمد يغطي معارف الفريق بأولوية واضحة.",
            en: "An adopted follow-up system covers the team's contacts with clear priority.",
          },
          {
            ar: "الرسائل تبقى شخصية رغم اعتماد نظام منظّم.",
            en: "Messages remain personal despite the structured system.",
          },
        ],
        evidenceRequired: [
          {
            ar: "وثيقة النظام وسجلّ تنفيذه لفصل.",
            en: "The system document and a quarter's implementation log.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل المتابعة طويلة الأمد جزءًا من ثقافة تنمية العمل في المكتب، ويقيس أثرها على نسبة التوكيلات القادمة من معارف قدامى لا من عملاء جدد فقط.",
          en: "Makes long-term follow-up part of the firm's business-development culture, and measures its effect on the share of instructions coming from long-standing contacts, not only new clients.",
        },
        observableBehaviors: [
          {
            ar: "يقترح على الإدارة مؤشر أداء يقيس نسبة التوكيلات الآتية من معارف تجاوز انقطاعهم عن التعامل المباشر سنة.",
            en: "Proposes to management a KPI measuring the share of instructions coming from contacts whose direct dealings had lapsed for over a year.",
          },
          {
            ar: "يعرض على الشركاء بيانات تثبت أن معارف قدامى تحوّلوا إلى موكّلين بعد سنوات من متابعة هادئة نسبيًا.",
            en: "Presents partners with data showing long-standing contacts converted to clients after years of relatively quiet follow-up.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقيس عدد الرسائل المُرسَلة لا التوكيلات الناتجة عنها فعليًا.",
            en: "Measures the number of messages sent rather than the instructions they actually produced.",
          },
          {
            ar: "يهمل قياس الأثر على المدى الطويل مكتفيًا بنتائج الفصل الحالي.",
            en: "Neglects measuring long-term impact, settling for the current quarter's results.",
          },
        ],
        successCriteria: [
          {
            ar: "مؤشر أداء معتمد يربط بين المتابعة طويلة الأمد والتوكيلات.",
            en: "An adopted KPI links long-term follow-up to instructions.",
          },
          {
            ar: "تقرير سنوي يوثّق نسبة التوكيلات القادمة من معارف قدامى.",
            en: "An annual report documents the share of instructions from long-standing contacts.",
          },
        ],
        evidenceRequired: [
          {
            ar: "المؤشر المعتمد ووثيقة عرضه على الشركاء.",
            en: "The adopted KPI and the document presenting it to the partners.",
          },
          {
            ar: "تقرير سنوي بالأثر.",
            en: "An annual impact report.",
          },
        ],
      },
    ],
    sourceIds: ["src.rainmaker", "src.jab-jab-right-hook", "src.selling-the-invisible", "src.ali-rise"],
    confidence: 0.83,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.relationship-building"],
  },
  {
    id: "skill.referral-generation",
    domainId: "dom.business-development",
    name: { ar: "توليد الإحالات", en: "Referral Generation" },
    synonyms: [
      "asking for referrals",
      "requesting introductions",
      "طلب التوصية",
      "طلب الإحالة",
    ],
    definition: {
      ar: "طلب إحالة أو تعريف من موكّل راضٍ أو زميل مهني في التوقيت المناسب — بعد نتيجة إيجابية فعلية لا كمعاملة روتينية — بصيغة محدَّدة لا عامة، ودون ضغط يجعل الطرف الآخر يشعر بالإحراج أو الإلزام.",
      en: "Appropriately asking a satisfied client or professional contact for a referral or introduction — timed after a genuine positive outcome, not as a routine transaction — with a specific rather than vague ask, and without pressure that leaves the other person feeling awkward or obligated.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على طلب الإحالة.",
          en: "No evidence has been collected yet on the learner's ability to generate referrals.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "لا يطلب إحالات إطلاقًا، معتمدًا على أن الموكّلين الراضين سيحيلون من تلقاء أنفسهم.",
          en: "Never asks for referrals at all, assuming satisfied clients will refer him on their own.",
        },
        observableBehaviors: [
          {
            ar: "ينهي ملفًا ناجحًا دون أي إشارة لإمكانية التوصية به لآخرين.",
            en: "Closes a successful matter without any mention of being recommended to others.",
          },
          {
            ar: "يشكر الموكّل على ثقته لكن لا يذكر رغبته في توسيع عمله.",
            en: "Thanks the client for his trust but never mentions wanting to grow his practice.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفترض أن طلب الإحالة تصرّف غير لائق أو محرج.",
            en: "Assumes that asking for a referral is somehow improper or awkward.",
          },
          {
            ar: "يعتمد كليًا على السمعة العفوية دون أي مبادرة منه.",
            en: "Relies entirely on organic reputation with no initiative of his own.",
          },
        ],
        successCriteria: [
          {
            ar: "لم يطلب إحالة بطريقة مسيئة أو متسرّعة.",
            en: "Has not asked for a referral in a clumsy or premature way.",
          },
          {
            ar: "يحتفظ بعلاقة طيبة مع الموكّل بعد إغلاق الملف.",
            en: "Maintains a good relationship with the client after the file closes.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ملف مغلق بنتيجة إيجابية دون أي طلب إحالة موثَّق.",
            en: "A closed file with a positive outcome and no documented referral ask.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يطلب إحالة لكن بصيغة عامة وغامضة، دون تحديد نوع الموكّل أو الملف المطلوب.",
          en: "Asks for a referral but in a vague, generic way, without specifying the type of client or matter sought.",
        },
        observableBehaviors: [
          {
            ar: "يقول للموكّل عند التوديع: \"إذا سمعت عن حد محتاج محامي كلّمني\".",
            en: "Tells the client at the door, 'If you hear of anyone who needs a lawyer, let me know.'",
          },
          {
            ar: "يطلب الإحالة من كل موكّل بالعبارة الجاهزة نفسها بصرف النظر عن طبيعة قضيته.",
            en: "Uses the same stock phrase to ask every client for a referral, regardless of the matter's nature.",
          },
        ],
        commonMistakes: [
          {
            ar: "الصياغة العامة تجعل الموكّل ينسى الطلب فور مغادرته.",
            en: "The generic phrasing makes the client forget the ask the moment he leaves.",
          },
          {
            ar: "يطلب في نهاية لقاء عابر لا في لحظة رضا واضحة عن النتيجة.",
            en: "Asks at the end of a routine meeting, not at a moment of clear satisfaction with the outcome.",
          },
        ],
        successCriteria: [
          {
            ar: "الطلب حدث ولو بصيغة عامة، دون أن يزعج الموكّل.",
            en: "The ask happened, even if generic, without bothering the client.",
          },
          {
            ar: "لا إحراج ظاهر على الموكّل عند الطلب.",
            en: "No visible discomfort from the client when asked.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر أو ملاحظة تُظهر طلب إحالة عام.",
            en: "A record or note showing a generic referral ask.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يختار توقيت الطلب بعد نتيجة إيجابية واضحة، ويحدّد نوع الموكّل أو القضية التي يبحث عنها بدل طلب عام.",
          en: "Times the ask after a clearly positive outcome, and specifies the type of client or matter he is looking for rather than making a generic ask.",
        },
        observableBehaviors: [
          {
            ar: "بعد كسب موكّل نزاع إيجار تجاري وحصوله على تعويض كامل، يقول له: \"يسعدني العمل مع أصحاب محال أخرى يواجهون نزاعات إيجار مشابهة، إذا خطر ببالك أحد\".",
            en: "After winning a client's commercial lease dispute and securing full compensation, tells him, 'I'd be glad to work with other shop owners facing similar lease disputes, if anyone comes to mind.'",
          },
          {
            ar: "ينتظر حتى تصله نتيجة القضية أو تقييم الموكّل الإيجابي قبل الطلب.",
            en: "Waits until the case outcome or the client's positive feedback arrives before asking.",
          },
        ],
        commonMistakes: [
          {
            ar: "يطلب فور التوقيع على العقد قبل أي نتيجة فعلية.",
            en: "Asks immediately after signing the retainer, before any actual result.",
          },
          {
            ar: "يحدّد نوعًا ضيقًا جدًا من الموكّلين فيقلّل فرص الإحالة الفعلية.",
            en: "Specifies too narrow a client type, reducing the actual chances of a referral.",
          },
        ],
        successCriteria: [
          {
            ar: "الطلب جاء بعد نتيجة إيجابية موثَّقة لا قبلها.",
            en: "The ask came after a documented positive outcome, not before.",
          },
          {
            ar: "الطلب محدَّد بنوع الموكّل أو القضية المطلوبة.",
            en: "The ask specifies the type of client or matter sought.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر يُظهر توقيت الطلب مرتبطًا بنتيجة إيجابية وتحديد واضح.",
            en: "A record showing the ask timed to a positive outcome with a clear specification.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يطلب تعريفًا محدَّدًا باسم شخص أو جهة فعلية حين يعرف أن الموكّل على صلة بها، بدل انتظار مبادرة الموكّل، دون ضغط يجعله يشعر بالإلزام.",
          en: "Asks for a specific introduction to a named person or organisation when he knows the client has a connection to them, instead of waiting for the client to volunteer one, without pressure that makes the client feel obligated.",
        },
        observableBehaviors: [
          {
            ar: "يعلم أن موكّله، صاحب مصنع أثاث، عضو في غرفة تجارة يجتمع فيها أصحاب مصانع آخرين، فيسأله: \"هل يمكن أن تعرّفني على مديرها؟ يهمّني فهم مشاكلهم القانونية الشائعة\".",
            en: "Knowing his client, a furniture-factory owner, sits on a chamber-of-commerce board with other factory owners, asks him, 'Could you introduce me to its director? I'd like to understand the common legal issues they face.'",
          },
          {
            ar: "يوضح للموكّل أن الرفض لا يؤثّر على علاقتهما إطلاقًا.",
            en: "Makes clear to the client that declining will not affect their relationship at all.",
          },
        ],
        commonMistakes: [
          {
            ar: "يكرّر الطلب أكثر من مرة رغم عدم استجابة الموكّل.",
            en: "Repeats the ask more than once despite the client not following through.",
          },
          {
            ar: "يطلب تعريفًا بشخص لا يعرف علاقته الحقيقية بالموكّل.",
            en: "Asks for an introduction to someone whose actual relationship with the client he doesn't know.",
          },
        ],
        successCriteria: [
          {
            ar: "الطلب محدَّد باسم شخص أو جهة فعلية لا فئة عامة.",
            en: "The ask names a specific person or organisation, not a general category.",
          },
          {
            ar: "الموكّل لم يشعر بالإلزام أو الضغط عند الطلب.",
            en: "The client felt no obligation or pressure when asked.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة أو محضر يُظهر طلب تعريف محدَّد دون ضغط.",
            en: "A simulation or record showing a specific introduction ask without pressure.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني نظامًا شخصيًا لتحديد لحظات الرضا المناسبة لطلب الإحالة عبر ملفاته المتعدّدة، ويعلّم زملاءه الأصغر كيف يطلبون دون إحراج.",
          en: "Builds a personal system for identifying the right moments of satisfaction to ask for referrals across his multiple files, and teaches junior colleagues how to ask without awkwardness.",
        },
        observableBehaviors: [
          {
            ar: "يضع علامة في نظام إدارة الملفات عند إغلاق كل قضية بنتيجة إيجابية كتذكير لتقييم فرصة طلب إحالة لاحقًا.",
            en: "Flags each file closed with a positive outcome in the matter-management system as a reminder to assess a referral ask later.",
          },
          {
            ar: "يدرّب متدرّبًا على صياغة طلب إحالة محدَّد بدل صيغة عامة، ويستمع لتجربته بعدها.",
            en: "Coaches a trainee to phrase a specific referral ask instead of a generic one, and listens to how it went afterward.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض نظامًا موحّدًا يتجاهل اختلاف طبيعة كل موكّل.",
            en: "Imposes a uniform system that ignores how each client differs.",
          },
          {
            ar: "يركّز تدريب الفريق على الصياغة دون تدريبه على قراءة توقيت الرضا.",
            en: "Focuses the team's coaching on wording without training them to read the moment of satisfaction.",
          },
        ],
        successCriteria: [
          {
            ar: "نظام موثَّق لتحديد لحظات طلب الإحالة المناسبة عبر عدة ملفات.",
            en: "A documented system for identifying suitable referral-ask moments across several files.",
          },
          {
            ar: "زميل واحد على الأقل طبّق الأسلوب بنجاح بعد التدريب.",
            en: "At least one colleague successfully applied the approach after coaching.",
          },
        ],
        evidenceRequired: [
          {
            ar: "وصف النظام وسجلّ تدريب زميل.",
            en: "A description of the system and a record of coaching a colleague.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل طلب الإحالة ممارسة معلنة ومنظّمة على مستوى المكتب، مبنية على توقيت الرضا لا الإلحاح، ويقيس نسبة التوكيلات الناتجة عن إحالات مقارنة بمصادر أخرى.",
          en: "Makes the referral ask a declared, structured firm-wide practice built on satisfaction timing rather than insistence, and measures the share of instructions from referrals compared with other sources.",
        },
        observableBehaviors: [
          {
            ar: "يقترح على الإدارة بروتوكولًا يحدّد نقاطًا زمنية مناسبة في دورة حياة الملف لطلب الإحالة.",
            en: "Proposes to management a protocol identifying suitable points in the matter lifecycle for a referral ask.",
          },
          {
            ar: "يعرض بيانات مقارِنة بين توكيلات الإحالة وتوكيلات القنوات الأخرى من حيث الجودة والاحتفاظ بالموكّل.",
            en: "Presents data comparing referral-sourced instructions with other channels on quality and client retention.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحوّل البروتوكول إلى مطلب إلزامي فيبدو الطلب مصطنعًا وميكانيكيًا.",
            en: "Turns the protocol into a mandatory quota, so the ask feels mechanical and forced.",
          },
          {
            ar: "يقيس عدد الطلبات لا نسبة نجاحها أو جودة العلاقة بعدها.",
            en: "Measures the number of asks rather than their success rate or the relationship's quality afterward.",
          },
        ],
        successCriteria: [
          {
            ar: "بروتوكول الإحالة معتمد ومطبَّق دون أن يفرغ الطلب من طابعه الشخصي.",
            en: "The referral protocol is adopted and applied without stripping the ask of its personal character.",
          },
          {
            ar: "تقرير سنوي يقارن جودة توكيلات الإحالة بمصادر أخرى.",
            en: "An annual report compares the quality of referral-sourced instructions with other sources.",
          },
        ],
        evidenceRequired: [
          {
            ar: "البروتوكول المعتمد ووثيقة عرضه على الإدارة.",
            en: "The adopted protocol and the document presenting it to management.",
          },
          {
            ar: "تقرير سنوي بنسب مصادر التوكيلات.",
            en: "An annual report on instruction-source shares.",
          },
        ],
      },
    ],
    sourceIds: ["src.rainmaker", "src.built-to-sell", "src.game-changing-attorney", "src.ali-rise"],
    confidence: 0.85,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.staying-top-of-mind"],
  },
  {
    id: "skill.converting-interest-to-instructions",
    domainId: "dom.business-development",
    name: { ar: "تحويل الاهتمام إلى توكيل فعلي", en: "Converting Interest to Instructions" },
    synonyms: [
      "closing the engagement",
      "the direct ask",
      "moving from conversation to retainer",
      "طلب العمل مباشرة",
      "التوقيع على التوكيل",
    ],
    definition: {
      ar: "التعرّف على اللحظة التي تكشف فيها علاقة أو محادثة ودّية عن حاجة قانونية فعلية، والانتقال بها بشكل مباشر ومهني نحو توكيل موقَّع، دون مبالغة في العرض أو ضمان نتيجة أو إلحاح يضرّ بالعلاقة إن جاء الجواب بالرفض.",
      en: "Recognising the moment a warm relationship or conversation reveals a genuine legal need, and moving it directly and professionally toward a signed engagement, without overselling, guaranteeing an outcome, or applying pressure that damages the relationship if the answer is no.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على تحويل الاهتمام إلى توكيل فعلي.",
          en: "No evidence has been collected yet on the learner's ability to convert interest into instructions.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يلاحظ حاجة قانونية محتملة في حديث ودّي لكن لا يحوّلها إلى عرض عمل، فتبقى مجرّد نصيحة مجانية.",
          en: "Notices a possible legal need in a friendly conversation but never turns it into a work offer, so it stays free advice.",
        },
        observableBehaviors: [
          {
            ar: "يقدّم رأيًا قانونيًا كاملًا لصديق عن نزاع عقد عمل دون أن يقترح توكيله رسميًا.",
            en: "Gives a friend a complete legal opinion on an employment-contract dispute without ever proposing formal representation.",
          },
          {
            ar: "ينهي المحادثة بـ\"بالتوفيق\" بدل اقتراح خطوة تالية.",
            en: "Ends the conversation with 'good luck' instead of proposing a next step.",
          },
        ],
        commonMistakes: [
          {
            ar: "يخشى أن يبدو \"يبيع\" لأصدقائه أو معارفه فيمتنع كليًا عن العرض.",
            en: "Fears looking like he's 'selling' to friends or acquaintances, so avoids offering entirely.",
          },
          {
            ar: "يقدّم استشارة كاملة مجانًا فتفقد المحادثة أي دافع للتحوّل إلى توكيل.",
            en: "Gives a full free consultation, removing any motive for the conversation to turn into an engagement.",
          },
        ],
        successCriteria: [
          {
            ar: "لاحظ الحاجة القانونية على الأقل ولم يتجاهلها كليًا.",
            en: "At least noticed the legal need and didn't ignore it entirely.",
          },
          {
            ar: "لم يعطِ معلومة قانونية خاطئة تحت ضغط المجاملة.",
            en: "Did not give incorrect legal information under social pressure.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر محادثة تُظهر حاجة قانونية لوحظت دون عرض تالٍ.",
            en: "A record of a conversation showing a legal need noticed with no follow-up offer.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يشير إلى إمكانية توكيله بصيغة مترددة أو غير مباشرة، كتلميح لا سؤال صريح.",
          en: "Hints at the possibility of being retained in a hesitant or indirect way — an implication rather than a direct question.",
        },
        observableBehaviors: [
          {
            ar: "يقول: \"لو كان الأمر عندي لتابعته...\" بدل السؤال المباشر: \"هل تريدني أن أتابع لك هذا الملف؟\"",
            en: "Says, 'If it were up to me, I'd follow up on this...' instead of the direct question, 'Would you like me to take this on for you?'",
          },
          {
            ar: "يترك بطاقة عمله على الطاولة أملًا أن يفهم الطرف الآخر التلميح.",
            en: "Leaves his business card on the table hoping the other person picks up on the hint.",
          },
        ],
        commonMistakes: [
          {
            ar: "التلميح غامض لدرجة أن الطرف الآخر لا يفهم أنه عرض عمل فعلي.",
            en: "The hint is so vague the other person doesn't realise it's an actual work offer.",
          },
          {
            ar: "يكرّر التلميح عدة مرات بدل الانتقال إلى سؤال مباشر واحد.",
            en: "Repeats the hint several times instead of moving to one direct question.",
          },
        ],
        successCriteria: [
          {
            ar: "التلميح مفهوم ولو بشكل غير مباشر.",
            en: "The hint is understood, even if indirect.",
          },
          {
            ar: "لا إحراج نتج عن غموض العرض.",
            en: "No awkwardness resulted from the offer's vagueness.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر يُظهر إشارة غير مباشرة لإمكانية التوكيل.",
            en: "A record showing an indirect signal about a possible engagement.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يطرح سؤالًا مباشرًا وواضحًا يحوّل الحاجة القانونية المكتشفة إلى عرض عمل محدَّد، دون مبالغة في وصف قدراته أو نتائجه السابقة.",
          en: "Asks a direct, clear question that turns the discovered legal need into a specific work offer, without overstating his capabilities or past results.",
        },
        observableBehaviors: [
          {
            ar: "بعد أن يشرح له معارف يملك مطعمًا مشكلة تأخّر مورّد في التسليم يخالف بند العقد، يقول: \"هذا يبدو نزاعًا عقديًا واضحًا، هل تريد أن أراجع العقد وأعطيك خياراتك رسميًا؟\"",
            en: "After an acquaintance who owns a restaurant describes a supplier's delivery delay that breaches the contract, says, 'This looks like a clear contract dispute — would you like me to review the contract and formally lay out your options?'",
          },
          {
            ar: "يذكر تكلفة المراجعة الأولى بوضوح عند العرض، لا بعد أن يوافق الطرف الآخر.",
            en: "States the cost of the initial review clearly when making the offer, not after the other person has already agreed.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعد بنتيجة معينة ليقنع الطرف الآخر بالموافقة السريعة.",
            en: "Promises a specific outcome to persuade the other person into a quick yes.",
          },
          {
            ar: "يطرح السؤال في منتصف حديث اجتماعي غير مناسب للتحوّل المهني.",
            en: "Asks the question in the middle of a social conversation unsuited to the professional shift.",
          },
        ],
        successCriteria: [
          {
            ar: "السؤال محدَّد وواضح، مثل \"هل تريد أن أتولى هذا؟\"، لا تلميح.",
            en: "The question is specific and clear, such as 'Would you like me to handle this?', not a hint.",
          },
          {
            ar: "لا وعد بنتيجة أو ضمان ظهر في العرض.",
            en: "No outcome promise or guarantee appeared in the offer.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر يُظهر سؤالًا مباشرًا بلا وعد بنتيجة.",
            en: "A record showing a direct question with no outcome promise.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يتعامل مع الرفض أو التردد بمهنية تامة تحافظ على العلاقة، ويفرّق بوضوح بين الثقة المهنية المبرَّرة والمبالغة في الوعد، فيصف نطاق عمله الفعلي بدقة دون تضخيم.",
          en: "Handles a no or hesitation with full professionalism that preserves the relationship, and clearly separates justified professional confidence from overpromising, describing the actual scope of his work accurately without inflating it.",
        },
        observableBehaviors: [
          {
            ar: "حين يتردّد موكّل محتمل بسبب التكلفة، يقول: \"أفهم تمامًا، خذ وقتك، وإذا احتجتني لاحقًا فالباب مفتوح\" بدل الإلحاح أو خفض السعر فورًا.",
            en: "When a prospective client hesitates over cost, says, 'I completely understand, take your time, and the door's open if you need me later,' instead of pushing or immediately cutting the fee.",
          },
          {
            ar: "يوضح بدقة أن رأيه القانوني قوي، لكن نتيجة القضاء لا يضمنها أحد.",
            en: "Clearly states that his legal opinion is strong, but no one can guarantee how a court will rule.",
          },
        ],
        commonMistakes: [
          {
            ar: "يخفض أتعابه فورًا عند أول تردّد ليضمن التوقيع، ما يقوّض قيمة عمله.",
            en: "Immediately cuts his fee at the first sign of hesitation to secure the signature, undermining the value of his work.",
          },
          {
            ar: "يصف قضايا مشابهة سابقة بلغة تُفهم كوعد ضمني بالنتيجة نفسها.",
            en: "Describes past similar cases in language that reads as an implicit promise of the same result.",
          },
        ],
        successCriteria: [
          {
            ar: "العلاقة بقيت سليمة بعد رفض أو تأجيل القرار.",
            en: "The relationship remained intact after a decline or a deferred decision.",
          },
          {
            ar: "لا عبارة في العرض يمكن تفسيرها كضمان نتيجة.",
            en: "No phrase in the offer could be read as an outcome guarantee.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة أو محضر يُظهر التعامل مع تردّد الموكّل دون ضغط أو مبالغة.",
            en: "A simulation or record showing hesitation from a client handled without pressure or overstatement.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يميّز بدقة متزايدة بين محادثة اجتماعية بحتة وحاجة قانونية ناضجة تستحق عرضًا رسميًا، ويدرّب زملاءه الأصغر على طرح السؤال المباشر دون خوف من الرفض أو ميل إلى المبالغة.",
          en: "Distinguishes with increasing precision between a purely social conversation and a mature legal need worth a formal offer, and coaches junior colleagues to ask the direct question without fear of rejection or a tendency to oversell.",
        },
        observableBehaviors: [
          {
            ar: "يلاحظ متدرّبًا يتجنّب طرح سؤال العرض المباشر خوفًا من الرفض، فيتدرّب معه على الصياغة قبل اللقاء التالي.",
            en: "Notices a trainee avoiding the direct offer question out of fear of rejection, and rehearses the phrasing with him before the next meeting.",
          },
          {
            ar: "يصحّح لزميل عبارة تصف نتيجة متوقعة بثقة مفرطة، ويقترح صياغة أدق.",
            en: "Corrects a colleague's phrase describing an expected outcome with excessive confidence, and suggests a more accurate wording.",
          },
        ],
        commonMistakes: [
          {
            ar: "ينتقد الزميل على الرفض الذي تلقّاه بدل مراجعة أسلوب العرض معه.",
            en: "Criticises a colleague for a rejection received instead of reviewing the offer approach with him.",
          },
          {
            ar: "يركّز التدريب على الحماس دون التركيز على الدقة في وصف النتائج المحتملة.",
            en: "Focuses coaching on enthusiasm rather than on accuracy in describing likely outcomes.",
          },
        ],
        successCriteria: [
          {
            ar: "زميل واحد على الأقل تحسّن في طرح العرض المباشر دون مبالغة بعد التدريب.",
            en: "At least one colleague improved at making the direct offer without overstatement after coaching.",
          },
          {
            ar: "لا حادثة مبالغة أو وعد بنتيجة رُصدت في الفريق خلال الفصل.",
            en: "No instance of overstatement or outcome promise was observed in the team during the quarter.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر تدريب زميل وسجلّ متابعة أدائه.",
            en: "A record of coaching a colleague and a follow-up log of his performance.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع مع إدارة المكتب معايير معلنة لكيفية تحويل العلاقات إلى توكيلات، تحدّد بوضوح ما يجوز قوله عن النتائج المحتملة وما يُحظر، ويقيس أثرها على معدّل التحويل وسمعة المكتب معًا.",
          en: "Establishes, with firm management, declared standards for converting relationships into instructions that clearly define what may and may not be said about likely outcomes, and measures their effect on both conversion rate and firm reputation.",
        },
        observableBehaviors: [
          {
            ar: "يقترح على الإدارة دليلًا مكتوبًا بعبارات مسموحة وأخرى محظورة عند عرض العمل على موكّل محتمل.",
            en: "Proposes to management a written guide of permitted and prohibited phrases when offering work to a prospective client.",
          },
          {
            ar: "يجمع بيانات عن معدّل تحويل المحادثات إلى توكيلات ويربطها بشكاوى الموكّلين المتعلقة بوعود لم تتحقق.",
            en: "Gathers data on the conversation-to-instruction conversion rate and links it to client complaints about unmet promises.",
          },
        ],
        commonMistakes: [
          {
            ar: "يركّز المعيار على رفع معدّل التحويل فقط دون حماية الموكّل من مبالغة محتملة.",
            en: "Focuses the standard solely on raising the conversion rate without protecting the client from potential overstatement.",
          },
          {
            ar: "يفرض الدليل دون تدريب الفريق عمليًا على استخدامه في مواقف حقيقية.",
            en: "Imposes the guide without practically training the team to use it in real situations.",
          },
        ],
        successCriteria: [
          {
            ar: "دليل معتمد ومطبَّق يوازن بين معدّل التحويل وسلامة الوعود المقدَّمة.",
            en: "An adopted, applied guide balances conversion rate against the integrity of promises made.",
          },
          {
            ar: "تقرير سنوي يربط الالتزام بالدليل بانخفاض شكاوى الموكّلين عن وعود غير محقَّقة.",
            en: "An annual report links adherence to the guide with a decline in client complaints about unmet promises.",
          },
        ],
        evidenceRequired: [
          {
            ar: "الدليل المعتمد ووثيقة عرضه على الإدارة.",
            en: "The adopted guide and the document presenting it to management.",
          },
          {
            ar: "تقرير سنوي يربط بين معدّل التحويل وسلامة الوعود.",
            en: "An annual report linking conversion rate to promise integrity.",
          },
        ],
      },
    ],
    sourceIds: ["src.rainmaker", "src.selling-the-invisible", "src.they-ask-you-answer", "src.game-changing-attorney"],
    confidence: 0.87,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.referral-generation", "skill.avoiding-guarantees"],
  },
];
