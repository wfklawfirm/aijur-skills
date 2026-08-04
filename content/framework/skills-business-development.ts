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
  {
    id: "skill.value-quantification",
    domainId: "dom.business-development",
    name: { ar: "تقدير قيمة العمل بالأرقام", en: "Quantifying Value for Prospective Clients" },
    synonyms: [
      "putting a number on the benefit",
      "value-based pitching",
      "translating advice into savings",
      "تحويل الفائدة إلى رقم",
    ],
    definition: {
      ar: "تحويل فوائد التوكيل المقترح — خطر تم تفاديه، وقت تم توفيره، قيمة صفقة تمت حمايتها — إلى تقدير مالي صريح عند عرض العمل على موكّل محتمل، بدل الاكتفاء بوصف الخدمة أو مهارة المحامي.",
      en: "Converting a proposed engagement's benefits — risk avoided, time saved, deal value protected — into an explicit monetary estimate when pitching a prospective client, instead of describing the service or the lawyer's skill alone.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على تقدير قيمة العمل بالأرقام.",
          en: "No evidence has been collected yet on the learner's ability to quantify value for a prospective client.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يعرض عمله بوصف نوعي فقط — \"خبرة واسعة\"، \"متابعة دقيقة\" — دون أي رقم يربط العمل بأثره المالي على الموكّل.",
          en: "Pitches his work in purely qualitative terms — 'extensive experience', 'close attention' — with no number connecting the work to its financial effect on the client.",
        },
        observableBehaviors: [
          {
            ar: "يشرح لموكّل محتمل يملك مصنعًا أنه \"سيتابع ملف العقد بعناية\" دون ذكر ما قد يخسره المصنع إن بقي العقد كما هو.",
            en: "Tells a prospective client who owns a factory he 'will handle the contract file carefully', without mentioning what the factory stands to lose if the contract stays as is.",
          },
          {
            ar: "يذكر عدد سنوات خبرته كدليل وحيد على جدارته بالتوكيل.",
            en: "Cites his years of experience as the sole evidence of his worth for the engagement.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفترض أن الموكّل التجاري سيربط تلقائيًا بين جودة العمل وقيمته المالية دون أن يُقال له صراحة.",
            en: "Assumes a business client will automatically connect quality of work to financial value without being told explicitly.",
          },
          {
            ar: "يتجنّب الأرقام خشية أن تبدو وكأنه \"يبيع\" بدل أن ينصح.",
            en: "Avoids numbers for fear of looking like he's 'selling' rather than advising.",
          },
        ],
        successCriteria: [
          {
            ar: "وصف الخدمة صحيح ولو غير مقنع تجاريًا.",
            en: "The service description is accurate, even if commercially unpersuasive.",
          },
          {
            ar: "لم يذكر رقمًا خاطئًا أو مضلّلًا.",
            en: "Did not state an incorrect or misleading figure.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر عرض عمل خالٍ من أي تقدير مالي للفائدة.",
            en: "A record of a work pitch with no monetary estimate of benefit.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يذكر رقمًا عامًا أو تقريبيًا جدًا عن قيمة النزاع أو الصفقة، دون ربطه بوضوح بما سيقدّمه هو تحديدًا.",
          en: "States a general or very rough figure about the dispute's or deal's value, without clearly tying it to what he specifically will deliver.",
        },
        observableBehaviors: [
          {
            ar: "يقول لموكّل محتمل: \"هذا نزاع كبير على الأرجح\" دون تقدير رقمي فعلي للمبلغ المعرَّض للخطر.",
            en: "Tells a prospective client, 'This is probably a big dispute,' without an actual numeric estimate of the amount at risk.",
          },
          {
            ar: "يكرّر رقم قيمة العقد الذي ذكره الموكّل نفسه دون إضافة تحليل خاص به.",
            en: "Repeats the contract value the client himself mentioned, without adding his own analysis.",
          },
        ],
        commonMistakes: [
          {
            ar: "يذكر رقمًا عامًا للنزاع لكن لا يربطه بما يخسره الموكّل تحديدًا إن لم يتصرّف.",
            en: "States a general figure for the dispute but doesn't tie it to what the client specifically stands to lose if he doesn't act.",
          },
          {
            ar: "يستخدم أرقامًا تقريبية دون أساس واضح يمكن الدفاع عنه.",
            en: "Uses rough figures with no clear, defensible basis.",
          },
        ],
        successCriteria: [
          {
            ar: "رقم واحد على الأقل ظهر في العرض، ولو عامًا.",
            en: "At least one figure appeared in the pitch, even if general.",
          },
          {
            ar: "الرقم المذكور دقيق ولا يبالغ فيه.",
            en: "The figure stated is accurate and not exaggerated.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر عرض يتضمّن رقمًا عامًا غير مرتبط بعمل المحامي تحديدًا.",
            en: "A record of a pitch including a general figure not tied to the lawyer's specific work.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يبني تقديرًا ماليًا محدَّدًا لفائدة التوكيل — مبلغ خطر تم تفاديه أو وقت تم توفيره — بالاعتماد على أرقام واقعية يقدّمها الموكّل أو السوق، لا تخمينًا.",
          en: "Builds a specific monetary estimate of the engagement's benefit — an amount of risk avoided or time saved — based on realistic figures from the client or the market, not guesswork.",
        },
        observableBehaviors: [
          {
            ar: "بعد أن يذكر صاحب شركة مقاولات أن التأخير في مشروع واحد يكلّفه غرامة يومية معلنة في العقد، يحسب أمامه إجمالي الغرامة المحتملة إن استمر النزاع ثلاثة أشهر إضافية دون تدخّل قانوني.",
            en: "After a construction-company owner mentions the contract's stated daily delay penalty, calculates in front of him the total potential penalty if the dispute continues three more months without legal intervention.",
          },
          {
            ar: "يسأل الموكّل عن تكلفة الساعة الإدارية الداخلية قبل أن يقدّر الوقت الذي ستوفّره صياغة عقد نموذجي جاهز.",
            en: "Asks the client his internal administrative hourly cost before estimating the time a ready-made template contract will save.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبني التقدير على افتراضات لم يتحقّق منها مع الموكّل.",
            en: "Builds the estimate on assumptions never checked with the client.",
          },
          {
            ar: "يقدّم رقمًا مبالغًا فيه ليبدو العرض أكثر إقناعًا.",
            en: "Presents an inflated figure to make the pitch sound more convincing.",
          },
        ],
        successCriteria: [
          {
            ar: "التقدير المالي مبني على أرقام واقعية مصدرها الموكّل أو مصدر موثوق.",
            en: "The monetary estimate rests on realistic figures sourced from the client or a credible source.",
          },
          {
            ar: "الرقم مرتبط مباشرة بما سيقدّمه المحامي، لا بحجم النزاع فقط.",
            en: "The figure ties directly to what the lawyer will deliver, not just to the dispute's size.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر عرض يُظهر حساب تقدير مالي محدَّد ومصدره.",
            en: "A record of a pitch showing a specific monetary estimate and its source.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يوازن بدقة بين تقدير قيمة إقناعي وبين الأمانة المهنية، فيوضح للموكّل حدود التقدير وعدم يقينيته، دون أن يفقد الرقم قوته الإقناعية.",
          en: "Precisely balances a persuasive value estimate against professional honesty, making clear to the client the estimate's limits and uncertainty, without the figure losing its persuasive force.",
        },
        observableBehaviors: [
          {
            ar: "يعرض تقدير الخسارة المحتملة كمدى بين رقمين لا كرقم واحد قاطع، ويشرح لماذا اختار هذا المدى.",
            en: "Presents the potential loss estimate as a range between two figures rather than a single definitive number, and explains why he chose that range.",
          },
          {
            ar: "يقول صراحة إن التقدير مبني على معطيات الموكّل الحالية وقد يتغيّر مع ظهور وقائع جديدة.",
            en: "States explicitly that the estimate rests on the client's current data and may change as new facts emerge.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقدّم التقدير كحقيقة مؤكَّدة فيفقد مصداقيته إن اختلفت النتيجة الفعلية لاحقًا.",
            en: "Presents the estimate as a certain fact, so his credibility suffers if the actual result later differs.",
          },
          {
            ar: "يضعف التقدير بتحفّظات مفرطة حتى يفقد أي قيمة إقناعية.",
            en: "Hedges the estimate with so many caveats it loses any persuasive value.",
          },
        ],
        successCriteria: [
          {
            ar: "التقدير مقنع وصريح بشأن حدوده في آن واحد.",
            en: "The estimate is persuasive and candid about its limits at the same time.",
          },
          {
            ar: "لا عبارة في العرض تُفهم كضمان لتحقّق الرقم المذكور.",
            en: "No phrase in the pitch reads as a guarantee that the stated figure will materialise.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة أو محضر يُظهر تقديرًا ماليًا مصحوبًا بتوضيح حدوده.",
            en: "A simulation or record showing a monetary estimate accompanied by a clear statement of its limits.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني أسلوبًا منهجيًا لتقدير القيمة يمكن تكراره عبر أنواع مختلفة من الملفات، ويدرّب زملاءه الأصغر على جمع الأرقام اللازمة من الموكّل قبل صياغة أي عرض.",
          en: "Builds a repeatable, methodical approach to value estimation across different types of matters, and coaches junior colleagues to gather the necessary figures from the client before drafting any pitch.",
        },
        observableBehaviors: [
          {
            ar: "يضع قائمة أسئلة قياسية يستخدمها الفريق لجمع أرقام العمل الأساسية من الموكّل المحتمل قبل أي اجتماع عرض.",
            en: "Creates a standard set of questions the team uses to gather a prospective client's key business figures before any pitch meeting.",
          },
          {
            ar: "يراجع عرضًا كتبه زميل ويطلب منه استبدال وصف عام بتقدير رقمي مدعوم بمصدر.",
            en: "Reviews a colleague's draft pitch and asks him to replace a general description with a sourced numeric estimate.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض نموذج تقدير موحّد لا يلائم اختلاف طبيعة الملفات.",
            en: "Imposes a single estimation template that doesn't fit how matters differ.",
          },
          {
            ar: "يهتم بدقة الرقم أكثر من التأكد من فهم الموكّل له.",
            en: "Cares more about the figure's precision than about whether the client actually understood it.",
          },
        ],
        successCriteria: [
          {
            ar: "أسلوب موثَّق لتقدير القيمة يستخدمه أكثر من محامٍ في المكتب.",
            en: "A documented value-estimation approach is used by more than one lawyer in the firm.",
          },
          {
            ar: "زميل واحد على الأقل تحسّن في بناء تقديرات مدعومة بأرقام بعد التدريب.",
            en: "At least one colleague improved at building figure-backed estimates after coaching.",
          },
        ],
        evidenceRequired: [
          {
            ar: "وثيقة الأسلوب وسجلّ تدريب زميل عليه.",
            en: "The approach document and a record of coaching a colleague on it.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل تقدير القيمة بالأرقام ممارسة معتمدة في عروض المكتب، بمعايير واضحة لما يجوز تقديره وكيف يُصاغ بأمانة، ويقيس أثرها على معدّل تحويل العروض إلى توكيلات.",
          en: "Makes quantified value estimation an adopted practice in the firm's pitches, with clear standards for what may be estimated and how to phrase it honestly, and measures its effect on the pitch-to-instruction conversion rate.",
        },
        observableBehaviors: [
          {
            ar: "يقترح على الإدارة دليلًا يحدّد كيفية بناء تقدير مالي مدعوم بمصدر ومتى يُستخدم مدى بدل رقم واحد.",
            en: "Proposes to management a guide defining how to build a sourced monetary estimate and when to use a range instead of a single figure.",
          },
          {
            ar: "يعرض على الشركاء بيانات تقارن معدّل تحويل العروض التي تضمّنت تقديرًا رقميًا بغيرها.",
            en: "Presents partners with data comparing the conversion rate of pitches that included a numeric estimate against those that didn't.",
          },
        ],
        commonMistakes: [
          {
            ar: "يركّز الدليل على رفع معدّل التحويل دون معيار واضح لصدق التقدير ومصدره.",
            en: "Focuses the guide on raising conversion without a clear standard for the estimate's honesty and sourcing.",
          },
          {
            ar: "يهمل تحديث الدليل مع تغيّر أنواع الملفات التي يتعامل معها المكتب.",
            en: "Neglects updating the guide as the types of matters the firm handles change.",
          },
        ],
        successCriteria: [
          {
            ar: "دليل معتمد ومطبَّق يضبط كيفية بناء التقديرات المالية في العروض.",
            en: "An adopted, applied guide governs how monetary estimates are built into pitches.",
          },
          {
            ar: "تقرير سنوي يربط استخدام التقدير الرقمي بمعدّل تحويل العروض.",
            en: "An annual report links the use of numeric estimates to the pitch conversion rate.",
          },
        ],
        evidenceRequired: [
          {
            ar: "الدليل المعتمد ووثيقة عرضه على الشركاء.",
            en: "The adopted guide and the document presenting it to the partners.",
          },
          {
            ar: "تقرير سنوي بأثر التقدير الرقمي على التحويل.",
            en: "An annual report on the numeric estimate's effect on conversion.",
          },
        ],
      },
    ],
    sourceIds: ["src.rainmaker"],
    confidence: 0.8,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.commercial-awareness"],
  },
  {
    id: "skill.answering-hard-questions",
    domainId: "dom.business-development",
    name: { ar: "المبادرة بالإجابة عن الأسئلة المحرجة", en: "Proactively Answering the Questions Clients Are Afraid to Ask" },
    synonyms: [
      "addressing objections before they're raised",
      "radical transparency in marketing",
      "answering the awkward question first",
      "الإجابة قبل السؤال",
    ],
    definition: {
      ar: "نشر أو ذكر إجابات صادقة ومحدَّدة عن الأسئلة التي يخجل الموكّل المحتمل من طرحها بنفسه — خصوصًا التكلفة، وحدود قدرة المكتب، ومقارنته بالبدائل — قبل أن يُسأل، كوسيلة أساسية لبناء الثقة مع موكّل متردّد.",
      en: "Volunteering honest, specific answers to the questions a prospective client is too embarrassed to ask himself — especially cost, the firm's own limitations, and how it compares to alternatives — before being asked, as a core way to build trust with a skeptical prospect.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على المبادرة بالإجابة عن الأسئلة المحرجة.",
          en: "No evidence has been collected yet on the learner's ability to proactively answer hard questions.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يتجنّب ذكر التكلفة أو حدود قدرته إلا حين يُسأل مباشرة، ويترك الموكّل المحتمل يجمع المعلومة من مصادر أخرى أو يتردّد بلا إجابة.",
          en: "Avoids mentioning cost or his own limitations unless asked directly, leaving the prospective client to gather the information elsewhere or hesitate without an answer.",
        },
        observableBehaviors: [
          {
            ar: "ينهي اجتماعًا تعريفيًا كاملًا دون أن يذكر نطاق تكلفة العمل ولو تقريبيًا.",
            en: "Ends a complete introductory meeting without mentioning even an approximate cost range for the work.",
          },
          {
            ar: "يتفادى ذكر أن مكتبه صغير مقارنة بمكاتب أخرى تعامل معها الموكّل سابقًا.",
            en: "Avoids mentioning that his firm is smaller than others the client has dealt with before.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتقد أن السكوت عن نقطة ضعف يخفي وجودها بدل أن يثير شكًا أكبر.",
            en: "Believes staying silent about a weak point hides it rather than raising bigger doubts.",
          },
          {
            ar: "يفترض أن الموكّل سيسأل بنفسه إن كان يريد المعلومة فعلًا.",
            en: "Assumes the client will ask himself if he genuinely wants the information.",
          },
        ],
        successCriteria: [
          {
            ar: "لا معلومة خاطئة قُدّمت حين سُئل مباشرة.",
            en: "No false information was given when asked directly.",
          },
          {
            ar: "لم يتهرّب من السؤال المباشر إن طُرح فعلًا.",
            en: "Did not dodge the question when it was actually asked directly.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر اجتماع خالٍ من أي إشارة طوعية للتكلفة أو حدود القدرة.",
            en: "A record of a meeting with no voluntary mention of cost or capability limits.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يجيب عن الأسئلة الصعبة حين تُطرح مباشرة، لكن بإجابة عامة أو مقتضبة تخفف الإحراج بدل أن تعطي معلومة فعلية مفيدة.",
          en: "Answers hard questions when asked directly, but with a vague or clipped response that softens the awkwardness rather than giving genuinely useful information.",
        },
        observableBehaviors: [
          {
            ar: "حين يسأل الموكّل عن التكلفة يقول \"تختلف حسب الملف\" دون أي رقم تقريبي.",
            en: "When the client asks about cost, says, 'It depends on the file,' with no approximate figure at all.",
          },
          {
            ar: "يجيب عن سؤال حول خبرته في مجال معيّن بعبارة عامة عن \"خبرة متنوّعة\" دون تفصيل صادق.",
            en: "Answers a question about his experience in a specific area with a general line about 'varied experience', with no honest detail.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجيب بما يريح الموكّل مؤقتًا لا بما يفيده فعلًا في قراره.",
            en: "Answers with whatever soothes the client momentarily, not with what actually helps his decision.",
          },
          {
            ar: "يعتبر أن مجرّد الردّ على السؤال كافٍ بصرف النظر عن دقته.",
            en: "Considers merely responding to the question sufficient, regardless of its accuracy.",
          },
        ],
        successCriteria: [
          {
            ar: "لم يتهرّب من السؤال الصعب.",
            en: "Did not dodge the hard question.",
          },
          {
            ar: "الإجابة، ولو عامة، لم تكن مضلّلة.",
            en: "The answer, even if general, was not misleading.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر يُظهر إجابة عامة عن سؤال صعب مطروح مباشرة.",
            en: "A record showing a general answer to a hard question asked directly.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يبادر بذكر إجابة صادقة ومحدَّدة عن مسألة يعرف أنها تشغل بال الموكّل المحتمل — كالتكلفة أو حدود خبرته في مجال بعينه — دون انتظار أن يُسأل عنها.",
          en: "Volunteers an honest, specific answer to a matter he knows is on the prospective client's mind — such as cost or the limits of his experience in a given area — without waiting to be asked.",
        },
        observableBehaviors: [
          {
            ar: "في أول اجتماع مع موكّل محتمل، يقول: \"غالبًا تتساءل عن التكلفة، فالمراجعة الأولى ثابتة السعر وأخبرك بها الآن، والباقي يعتمد على حجم النزاع وسأوضح لك الطريقة\".",
            en: "In a first meeting with a prospective client, says, 'You're probably wondering about cost — the initial review is fixed-price and I'll tell you now, the rest depends on the dispute's scope and I'll explain how.'",
          },
          {
            ar: "يذكر بنفسه أن ملفات التحكيم الدولي ليست تخصّصه الأساسي قبل أن يُسأل، ويقترح من يمكن أن يساعد إن احتاج الموكّل ذلك.",
            en: "Mentions on his own initiative, before being asked, that international arbitration isn't his core focus, and suggests who might help if the client needs that.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبادر بالإجابة لكن يقدّمها بشكل يقلّل من شأن المعلومة بدل عرضها بوضوح.",
            en: "Volunteers the answer but presents it in a way that downplays it instead of stating it clearly.",
          },
          {
            ar: "يختار توقيتًا غير مناسب فيبدو الإفصاح مقحمًا في السياق.",
            en: "Picks an awkward moment, so the disclosure feels forced into the conversation.",
          },
        ],
        successCriteria: [
          {
            ar: "المعلومة الحساسة ذُكرت دون أن يُسأل عنها.",
            en: "The sensitive information was stated without being asked.",
          },
          {
            ar: "الإجابة محدَّدة، لا مجرّد إشارة عامة.",
            en: "The answer is specific, not just a vague gesture.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر يُظهر إفصاحًا طوعيًا محدَّدًا عن نقطة حساسة.",
            en: "A record showing a specific, voluntary disclosure of a sensitive point.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يوازن بين الصراحة الكاملة والحفاظ على ثقة الموكّل بقدرته، فيذكر حدود خبرته أو نقاط ضعف عرضه دون أن يقوّض العرض ذاته، ويقارن وضعه بالبدائل المتاحة للموكّل بأمانة.",
          en: "Balances full candour with maintaining the client's confidence in his ability, stating the limits of his experience or weak points in his offer without undercutting the offer itself, and honestly compares his position to alternatives available to the client.",
        },
        observableBehaviors: [
          {
            ar: "يقول لموكّل محتمل: \"مكاتب أكبر قد تملك فريقًا أوسع لملف بهذا الحجم، لكنك ستتعامل معي مباشرة من أول يوم لآخره، وهذا فرق يستحق الذكر\".",
            en: "Tells a prospective client, 'Larger firms may have a broader team for a file this size, but you'll deal with me directly from the first day to the last, and that's a difference worth naming.'",
          },
          {
            ar: "يشرح بصراحة سبب اختلاف تسعيره عن مكتب آخر عرض سعرًا أقل، دون التقليل من المنافس.",
            en: "Candidly explains why his pricing differs from another firm's lower quote, without belittling the competitor.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبالغ في الصراحة عن نقاط ضعفه لدرجة تفقده أي جاذبية تنافسية.",
            en: "Overdoes candour about his weaknesses to the point of losing any competitive appeal.",
          },
          {
            ar: "يقارن نفسه بالمنافسين بلغة تُفهم كانتقاص منهم بدل مقارنة موضوعية.",
            en: "Compares himself to competitors in language that reads as belittling rather than an objective comparison.",
          },
        ],
        successCriteria: [
          {
            ar: "الإفصاح الصادق لم يفقد العرض جاذبيته.",
            en: "The honest disclosure did not strip the offer of its appeal.",
          },
          {
            ar: "المقارنة بالبدائل دقيقة وخالية من الانتقاص من الآخرين.",
            en: "The comparison to alternatives is accurate and free of belittling others.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة أو محضر يُظهر مقارنة صادقة بالبدائل دون تقويض العرض.",
            en: "A simulation or record showing an honest comparison to alternatives without undercutting the offer.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يحدّد بشكل منهجي الأسئلة المحرجة المتكرّرة التي يتردّد الموكّلون المحتملون في طرحها، ويبني موادّ أو ردودًا جاهزة تعالجها بصدق، ويدرّب زملاءه على استخدامها دون خوف من كشف نقاط الضعف.",
          en: "Systematically identifies the recurring hard questions prospective clients hesitate to ask, builds materials or ready responses that address them honestly, and coaches colleagues to use them without fear of exposing weak points.",
        },
        observableBehaviors: [
          {
            ar: "يجمع قائمة بأكثر خمسة أسئلة يتردّد الموكّلون المحتملون في طرحها في مجال عمله، ويكتب إجابة صادقة ومحدَّدة لكل منها.",
            en: "Compiles a list of the five most common questions prospective clients hesitate to ask in his practice area, and writes an honest, specific answer to each.",
          },
          {
            ar: "يدرّب زميلًا أصغر على ذكر تكلفة الخدمة طوعًا في أول اجتماع بدل انتظار السؤال.",
            en: "Coaches a junior colleague to volunteer the service's cost in the first meeting instead of waiting to be asked.",
          },
        ],
        commonMistakes: [
          {
            ar: "يكتب إجابات عامة صالحة لأي موكّل بدل تخصيصها لكل حالة.",
            en: "Writes generic answers that fit any client instead of tailoring them to each situation.",
          },
          {
            ar: "يهمل تحديث الأسئلة والإجابات مع تغيّر مخاوف الموكّلين بمرور الوقت.",
            en: "Neglects updating the questions and answers as client concerns change over time.",
          },
        ],
        successCriteria: [
          {
            ar: "قائمة موثَّقة بالأسئلة الشائعة وإجابات صادقة عليها.",
            en: "A documented list of common questions with honest answers to them.",
          },
          {
            ar: "زميل واحد على الأقل بدأ يبادر بالإفصاح بعد التدريب.",
            en: "At least one colleague began volunteering disclosures after coaching.",
          },
        ],
        evidenceRequired: [
          {
            ar: "وثيقة الأسئلة والإجابات وسجلّ تدريب زميل عليها.",
            en: "The questions-and-answers document and a record of coaching a colleague on it.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل الإفصاح الاستباقي عن الأسئلة المحرجة سياسة معلنة لتسويق المكتب — في المحتوى المنشور والمحادثات الأولى على حدّ سواء — ويقيس أثرها على ثقة الموكّلين المحتملين ومعدّل تحوّلهم إلى موكّلين فعليين.",
          en: "Makes proactive disclosure of hard questions a declared firm marketing policy — in published content and first conversations alike — and measures its effect on prospective clients' trust and their conversion into actual clients.",
        },
        observableBehaviors: [
          {
            ar: "يقترح على الإدارة أن ينشر المكتب صفحة تجيب صراحة عن أسئلة التكلفة وحدود التخصص الشائعة لدى الموكّلين المحتملين.",
            en: "Proposes to management that the firm publish a page candidly answering the cost and specialisation-limit questions common among prospective clients.",
          },
          {
            ar: "يعرض على الشركاء بيانات تقارن معدّل تحوّل الموكّلين المحتملين الذين اطّلعوا على إفصاح استباقي بغيرهم.",
            en: "Presents partners with data comparing the conversion rate of prospective clients who saw proactive disclosure against those who didn't.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحوّل الإفصاح إلى نص تسويقي مصقول يفقد صدقه الأصلي.",
            en: "Turns the disclosure into polished marketing copy that loses its original honesty.",
          },
          {
            ar: "يقيس عدد زيارات المحتوى المنشور لا أثره الفعلي على قرار الموكّل.",
            en: "Measures the published content's view count rather than its actual effect on the client's decision.",
          },
        ],
        successCriteria: [
          {
            ar: "سياسة إفصاح معتمدة ومطبَّقة في تسويق المكتب ومحادثاته الأولى.",
            en: "An adopted disclosure policy is applied in the firm's marketing and first conversations.",
          },
          {
            ar: "تقرير سنوي يربط الإفصاح الاستباقي بثقة الموكّلين المحتملين ومعدّل تحوّلهم.",
            en: "An annual report links proactive disclosure to prospective clients' trust and conversion rate.",
          },
        ],
        evidenceRequired: [
          {
            ar: "السياسة المعتمدة ووثيقة عرضها على الشركاء.",
            en: "The adopted policy and the document presenting it to the partners.",
          },
          {
            ar: "تقرير سنوي بأثر الإفصاح على الثقة والتحويل.",
            en: "An annual report on disclosure's effect on trust and conversion.",
          },
        ],
      },
    ],
    sourceIds: ["src.they-ask-you-answer"],
    confidence: 0.8,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.avoiding-guarantees"],
  },
  {
    id: "skill.practice-differentiation",
    domainId: "dom.business-development",
    name: { ar: "التمايز المتعمَّد في الممارسة المهنية", en: "Deliberate Practice Differentiation" },
    synonyms: [
      "standing out on purpose",
      "choosing a distinct positioning",
      "not blending in with the market",
      "التميّز الواعي",
    ],
    definition: {
      ar: "اختيار واعٍ لما يجعل عرض المحامي أو ممارسته مميّزًا فعلًا لا مجرّد كفوء بشكل عام، مع تقبّل أن العرض المتمايز لن يجذب كل موكّل محتمل، واعتبار \"الاندماج في الزحمة\" هو الخيار الأكثر خطورة في سوق مزدحم لا الأكثر أمانًا.",
      en: "Consciously choosing what makes a lawyer's or practice's offering genuinely distinctive rather than generically competent, accepting that a distinctive offering will not appeal to every prospective client, and treating 'blending in' as the riskier position in a crowded market, not the safer one.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على التمايز المتعمَّد في ممارسته.",
          en: "No evidence has been collected yet on the learner's ability to deliberately differentiate his practice.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يصف نفسه ومكتبه بالعبارات نفسها التي يستخدمها معظم زملاء المهنة — \"خبرة\"، \"مصداقية\"، \"التزام\" — دون أي عنصر يميّزه فعليًا عمّن حوله.",
          en: "Describes himself and his firm with the same phrases most peers use — 'experience', 'credibility', 'commitment' — with nothing that actually sets him apart from those around him.",
        },
        observableBehaviors: [
          {
            ar: "تصف سيرته الذاتية بأنه \"يقدّم خدمة قانونية متميّزة بجودة عالية\"، وهي العبارة نفسها في سير معظم زملائه.",
            en: "His bio describes him as offering 'distinguished, high-quality legal service' — the exact phrase used in most of his peers' bios.",
          },
          {
            ar: "حين يُسأل عمّا يميّزه عن محامٍ آخر بالتخصص نفسه، يذكر صفات عامة كالجدية والدقة.",
            en: "When asked what sets him apart from another lawyer in the same specialty, cites generic traits like seriousness and precision.",
          },
        ],
        commonMistakes: [
          {
            ar: "يخشى أن يبدو التمايز نوعًا من التفاخر غير اللائق مهنيًا.",
            en: "Fears that differentiation might look like unseemly professional boasting.",
          },
          {
            ar: "يعتقد أن الكفاءة العامة كافية لجذب الموكّلين دون موقع واضح في السوق.",
            en: "Believes general competence is enough to attract clients without a clear market position.",
          },
        ],
        successCriteria: [
          {
            ar: "الوصف صحيح ولو غير مميّز.",
            en: "The description is accurate, even if not distinctive.",
          },
          {
            ar: "لا ادّعاء غير صحيح في وصف كفاءته العامة.",
            en: "No false claim in the description of his general competence.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سيرة ذاتية أو عرض تعريفي بلغة عامة لا تميّزه عن أقرانه.",
            en: "A bio or introductory pitch in generic language that doesn't distinguish him from his peers.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يدرك أن التمايز مهم، ويحاول صياغة نقطة تميّز، لكنها تبقى سطحية أو عامة بما يجعلها قابلة للتطبيق على أي محامٍ آخر تقريبًا.",
          en: "Recognises that differentiation matters and attempts a point of distinction, but it remains shallow or general enough to apply to almost any other lawyer.",
        },
        observableBehaviors: [
          {
            ar: "يضيف عبارة \"نتعامل بسرعة استجابة عالية\" إلى موقعه دون تفصيل ملموس يثبت ذلك.",
            en: "Adds the line 'we offer a high response speed' to his website with no concrete detail proving it.",
          },
          {
            ar: "يختار التركيز على \"خدمة عملاء ممتازة\" كنقطة تمايز مع أن كل مكتب يدّعي الشيء نفسه.",
            en: "Chooses 'excellent client service' as his point of differentiation, though every firm claims the same thing.",
          },
        ],
        commonMistakes: [
          {
            ar: "يختار نقطة تمايز يسهل على أي منافس ادّعاءها أيضًا.",
            en: "Picks a point of differentiation any competitor could just as easily claim.",
          },
          {
            ar: "يكتفي بصياغة الشعار دون تغيير فعلي في كيفية تقديم الخدمة.",
            en: "Settles for a slogan without any actual change in how the service is delivered.",
          },
        ],
        successCriteria: [
          {
            ar: "محاولة تمايز موجودة، ولو غير مقنعة بعد.",
            en: "An attempt at differentiation exists, even if not yet convincing.",
          },
          {
            ar: "لا ادّعاء زائف في وصف نقطة التمايز المختارة.",
            en: "No false claim in describing the chosen point of differentiation.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نص تعريفي يتضمّن نقطة تمايز عامة غير مثبتة بتفاصيل.",
            en: "An introductory text including a general, undetailed point of differentiation.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يحدّد نقطة تمايز فعلية وملموسة في طريقة عمله — نوع الموكّلين الذي يركّز عليهم، أسلوب تسعير مختلف، أو منهج معالجة غير مألوف — ويصفها بتفصيل يميّزها عن الوصف العام للمهنة.",
          en: "Identifies an actual, concrete point of differentiation in how he works — the type of client he focuses on, a different pricing approach, or an unusual way of handling matters — and describes it in detail that sets it apart from generic descriptions of the profession.",
        },
        observableBehaviors: [
          {
            ar: "يحصر ممارسته في نزاعات الإيجار التجاري لأصحاب المحال الصغيرة تحديدًا، ويشرح لموكّل محتمل سبب هذا التخصّص الضيّق ومكاسبه له.",
            en: "Narrows his practice specifically to commercial-lease disputes for small shop owners, and explains to a prospective client the reason for this narrow focus and what it gains him.",
          },
          {
            ar: "يعرض أتعابًا مقطوعة لنوع محدَّد من الملفات بدل الساعة، ويشرح لماذا اختار هذا الأسلوب تحديدًا.",
            en: "Offers a flat fee for a specific type of file instead of hourly billing, and explains exactly why he chose that approach.",
          },
        ],
        commonMistakes: [
          {
            ar: "يختار نقطة تمايز حقيقية لكن يصفها بلغة عامة فتضيع في الوصف.",
            en: "Chooses a genuine point of differentiation but describes it in generic language, so it gets lost in the description.",
          },
          {
            ar: "يتراجع عن التمايز أول ما يواجه موكّلًا لا يناسبه هذا التخصّص.",
            en: "Abandons the differentiation the first time he meets a client the specialty doesn't suit.",
          },
        ],
        successCriteria: [
          {
            ar: "نقطة التمايز ملموسة ومحدَّدة، لا مجرّد صفة عامة.",
            en: "The point of differentiation is concrete and specific, not a generic trait.",
          },
          {
            ar: "الوصف يوضح كيف يترجم التمايز إلى فائدة للموكّل المستهدف.",
            en: "The description makes clear how the differentiation translates into a benefit for the target client.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نص تعريفي أو محضر عرض يصف نقطة تمايز ملموسة ومبرَّرة.",
            en: "An introductory text or pitch record describing a concrete, justified point of differentiation.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يتقبّل بوعي أن نقطة تمايزه ستُبعد موكّلين محتملين لا تناسبهم، ولا يخفّفها لإرضاء الجميع، بل يميّز بين موكّل يستحق وقته وموكّل يبحث عن شيء آخر.",
          en: "Consciously accepts that his point of differentiation will turn away prospective clients it doesn't suit, and does not water it down to please everyone, instead distinguishing between a client worth his time and one looking for something else.",
        },
        observableBehaviors: [
          {
            ar: "حين يطلب موكّل محتمل خدمة سريعة رخيصة تخالف أسلوب عمله المتأني، يشرح بوضوح أن هذا ليس أسلوبه، ويقترح جهة أخرى قد تناسبه أكثر.",
            en: "When a prospective client wants a fast, cheap service at odds with his deliberate way of working, clearly explains that's not his approach, and suggests someone else who might suit him better.",
          },
          {
            ar: "يرفض توسيع تخصّصه الضيّق ليشمل ملفات لا تلائمه رغم إغراء الدخل الإضافي.",
            en: "Declines to broaden his narrow specialty to include files that don't fit it, despite the lure of extra income.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعمّم التمايز على كل موكّل بصرف النظر عن ملاءمته، فيصبح جمودًا لا تمايزًا مدروسًا.",
            en: "Applies the differentiation to every client regardless of fit, turning it into rigidity rather than a deliberate stance.",
          },
          {
            ar: "يتراجع تحت ضغط مالي عن التمايز فيفقد وضوحه أمام السوق.",
            en: "Abandons the differentiation under financial pressure, so it loses its clarity to the market.",
          },
        ],
        successCriteria: [
          {
            ar: "رفض موكّل غير ملائم بوضوح دون رفض التمايز نفسه.",
            en: "Clearly declined an unsuitable client without abandoning the differentiation itself.",
          },
          {
            ar: "التمايز ثابت عبر مواقف متعددة لا يتغيّر حسب الموقف.",
            en: "The differentiation stays consistent across multiple situations rather than shifting with circumstance.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة أو محضر يُظهر رفضًا مبرَّرًا لموكّل غير ملائم للتمايز المختار.",
            en: "A simulation or record showing a justified decline of a client who didn't fit the chosen differentiation.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يساعد زملاءه أو فريقه على اختيار نقاط تمايز خاصة بهم بدل تقليد تمايزه هو، ويميّز بين تمايز يخدم السوق المستهدف فعلًا وتمايز شكلي بلا أثر تجاري.",
          en: "Helps colleagues or his team choose their own points of differentiation instead of copying his, and distinguishes between differentiation that genuinely serves the target market and cosmetic differentiation with no commercial effect.",
        },
        observableBehaviors: [
          {
            ar: "يناقش مع محامٍ أصغر نقاط قوته الفعلية بدل اقتراح تقليد تخصّصه الشخصي.",
            en: "Discusses with a junior lawyer his actual strengths instead of suggesting he copy the senior lawyer's own specialty.",
          },
          {
            ar: "يشير إلى أن تمايزًا معينًا اقترحه زميل جذاب على الورق لكنه لا يلامس حاجة فعلية لدى أي فئة موكّلين محدَّدة.",
            en: "Points out that a colleague's proposed differentiation sounds appealing on paper but doesn't address any specific client segment's real need.",
          },
        ],
        commonMistakes: [
          {
            ar: "يشجّع الجميع على تبنّي التمايز نفسه الذي نجح معه شخصيًا.",
            en: "Encourages everyone to adopt the same differentiation that worked for him personally.",
          },
          {
            ar: "يقيّم التمايز بجاذبيته الظاهرية لا بارتباطه بحاجة سوقية فعلية.",
            en: "Judges differentiation by its surface appeal rather than its connection to a real market need.",
          },
        ],
        successCriteria: [
          {
            ar: "زميل واحد على الأقل اختار نقطة تمايز خاصة به بعد النقاش، لا نسخة عن تمايز آخر.",
            en: "At least one colleague chose his own point of differentiation after the discussion, not a copy of someone else's.",
          },
          {
            ar: "التمييز بين تمايز فعلي وتمايز شكلي موثَّق في التغذية الراجعة.",
            en: "The distinction between genuine and cosmetic differentiation is documented in the feedback given.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر نقاش مع زميل حول اختيار نقطة تمايزه الخاصة.",
            en: "A record of a discussion with a colleague about choosing his own point of differentiation.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يقود على مستوى المكتب نقاشًا واعيًا حول موقع الممارسة في السوق، ويقبل التخلي عن موكّلين لا يناسبهم التمايز المختار مقابل وضوح أقوى أمام من يناسبهم فعلًا، ويقيس أثر ذلك على جودة التوكيلات لا عددها فقط.",
          en: "Leads a deliberate firm-wide discussion about the practice's market position, accepts turning away clients the chosen differentiation doesn't suit in exchange for stronger clarity to those it does suit, and measures the effect on instruction quality, not just volume.",
        },
        observableBehaviors: [
          {
            ar: "يقترح على الشركاء التخلي عن استقبال نوع معيّن من الملفات المنخفضة القيمة ليتسق موقع المكتب مع تمايزه المختار.",
            en: "Proposes to partners that the firm stop accepting a certain type of low-value file so its market position matches the chosen differentiation.",
          },
          {
            ar: "يعرض بيانات تقارن جودة الموكّلين ورضاهم بعد تبنّي موقع سوقي أوضح مقابل الفترة السابقة الأعم.",
            en: "Presents data comparing client quality and satisfaction after adopting a clearer market position against the previous, more generic period.",
          },
        ],
        commonMistakes: [
          {
            ar: "يدفع نحو تمايز جذري دون التحقّق من أن السوق المستهدف يكفي لاستدامة المكتب.",
            en: "Pushes for radical differentiation without verifying the target market is large enough to sustain the firm.",
          },
          {
            ar: "يقيس نجاح التمايز بعدد الموكّلين المرفوضين لا بجودة من بقي وقيمته.",
            en: "Measures differentiation's success by how many clients were turned away, rather than by the quality and value of those who remained.",
          },
        ],
        successCriteria: [
          {
            ar: "موقع سوقي معتمد للمكتب يقبل صراحة استبعاد موكّلين غير ملائمين.",
            en: "An adopted firm market position explicitly accepts excluding unsuitable clients.",
          },
          {
            ar: "تقرير سنوي يربط الموقع المتمايز بجودة التوكيلات لا عددها فقط.",
            en: "An annual report links the distinctive position to instruction quality, not just volume.",
          },
        ],
        evidenceRequired: [
          {
            ar: "وثيقة الموقع السوقي المعتمد ووثيقة عرضها على الشركاء.",
            en: "The adopted market-position document and the document presenting it to the partners.",
          },
          {
            ar: "تقرير سنوي بأثر التمايز على جودة التوكيلات.",
            en: "An annual report on differentiation's effect on instruction quality.",
          },
        ],
      },
    ],
    sourceIds: ["src.purple-cow", "src.jab-jab-right-hook"],
    confidence: 0.78,
    reviewStatus: "ai_suggested",
  },
];
