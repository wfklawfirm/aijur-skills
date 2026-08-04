import type { SkillDef } from "../types";

// -----------------------------------------------------------------------------
// dom.self-management — three additional skills
//
// Companion file to skills.ts. Does not redefine skill.time-priority-management,
// skill.emotional-intelligence or skill.resilience, which already exist in
// skills.ts. Matches the depth of skills-negotiation-influence.ts: 7 mastery
// levels (0-6), each with definition / observableBehaviors / commonMistakes /
// successCriteria / evidenceRequired, bilingual (Arabic primary), grounded in
// concrete Arab-market legal scenarios.
// -----------------------------------------------------------------------------

export const SELF_MANAGEMENT_SKILLS: SkillDef[] = [
  {
    id: "skill.workload-boundaries",
    domainId: "dom.self-management",
    name: { ar: "حدود العبء المهني", en: "Workload Boundaries" },
    synonyms: [
      "saying no professionally",
      "scope renegotiation",
      "capacity management",
      "pushing back on new work",
      "التفاوض على العبء",
    ],
    definition: {
      ar: "التفاوض المهني على قبول مهمة جديدة أو إعادة التفاوض على مهلة قائمة عندما تتجاوز القدرة الفعلية، بدل الصمت والتسليم بعبء يفوق الطاقة أو الفشل بصمت في تسليمه.",
      en: "Professionally negotiating whether to accept new work, or renegotiating an existing deadline, when real capacity is exceeded — instead of silently absorbing an unsustainable load or quietly missing a commitment.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على وضع حدود لعبئه المهني.",
          en: "No evidence has been collected yet on the learner's ability to set workload boundaries.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يقبل كل مهمة جديدة فور طلبها دون التحقق من عبئه الحالي، ثم يكتشف التعارض لاحقًا تحت الضغط.",
          en: "Accepts every new task the moment it is requested without checking his current load, then discovers the conflict later under pressure.",
        },
        observableBehaviors: [
          { ar: "يقول \"تمام\" لطلب شريك جديد دون النظر إلى تقويمه.", en: "Says 'sure' to a new partner request without glancing at his calendar." },
          { ar: "يلاحظ التعارض بين مهمتين فقط عندما تقترب المهلتان معًا.", en: "Notices the conflict between two tasks only when both deadlines close in together." },
        ],
        commonMistakes: [
          {
            ar: "يعمل ليلاً متتاليًا لتغطية التزامات تراكمت دون إخبار أحد.",
            en: "Works consecutive late nights to cover commitments that piled up, without telling anyone.",
          },
          {
            ar: "يسلّم عملاً ناقص الجودة بدل تأخير موعده أو طلب مساعدة.",
            en: "Delivers substandard work rather than delaying the deadline or asking for help.",
          },
        ],
        successCriteria: [
          { ar: "أنجز المهام المقبولة ولو على حساب راحته.", en: "Completed the accepted tasks, even at the cost of his own well-being." },
          { ar: "لم يخفِ فوات مهلة عن المشرف عند حدوثه.", en: "Did not hide a missed deadline from his supervisor when one occurred." },
        ],
        evidenceRequired: [
          { ar: "سجلّ مهام يُظهر تراكمًا اكتُشف متأخرًا.", en: "A task log showing an overload discovered late." },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يراجع عبئه القائم قبل قبول مهمة جديدة، ويعبّر عن قلقه بشأن القدرة على الالتزام قبل الموافقة النهائية.",
          en: "Checks his existing load before accepting a new task, and voices concern about his ability to commit before giving a final yes.",
        },
        observableBehaviors: [
          {
            ar: "يقول لشريك يطلب مذكرة عاجلة يوم الخميس: \"لديّ محاكمة الجمعة، دعني أتحقق قبل أن أؤكد لك\"، بدل الموافقة الفورية.",
            en: "Tells a partner requesting an urgent memo by Thursday, 'I have a Friday trial, let me check before I confirm,' instead of agreeing on the spot.",
          },
          { ar: "يفتح تقويمه أمام من يطلب المهمة قبل الرد.", en: "Opens his calendar in front of the requester before responding." },
        ],
        commonMistakes: [
          { ar: "يقبل شفهيًا رغم الشك الداخلي خوفًا من رد فعل الطالب.", en: "Agrees verbally despite internal doubt, out of fear of the requester's reaction." },
          { ar: "يذكر عبئه بصوت خافت دون رقم أو مهلة محددة.", en: "Mentions his workload vaguely, without a concrete number or deadline." },
        ],
        successCriteria: [
          { ar: "راجع عبئه القائم قبل الرد على الطلب الجديد.", en: "Reviewed his existing load before responding to the new request." },
          { ar: "عبّر بوضوح عن وجود تعارض محتمل قبل الموافقة.", en: "Clearly flagged a possible conflict before agreeing." },
        ],
        evidenceRequired: [
          { ar: "ملاحظة أو رسالة تُظهر مراجعة العبء قبل القبول.", en: "A note or message showing the load review before acceptance." },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يرفض أو يعيد التفاوض على مهمة أو مهلة بشكل صريح ومهني عندما تتجاوز طاقته فعلاً، ويقترح بديلاً محددًا بدل رفض مجرّد.",
          en: "Explicitly and professionally declines or renegotiates a task or deadline when it genuinely exceeds his capacity, proposing a concrete alternative rather than a bare refusal.",
        },
        observableBehaviors: [
          {
            ar: "يقول لشريكين يطلبان مذكرتين عاجلتين ليوم الجمعة نفسه، وهو في تحضير محاكمة: \"لا أستطيع تسليم الاثنتين بجودة كافية بحلول الجمعة، أيهما الأولوية الفعلية؟\"",
            en: "Tells two partners each requesting an urgent memo for the same Friday, while he is in trial prep, 'I can't deliver both at adequate quality by Friday — which one is the real priority?'",
          },
          {
            ar: "يقترح تسليم جزء من المهمة الآن والباقي بعد يومين بدل التخلي عنها كليًا.",
            en: "Offers to deliver part of the task now and the rest in two days, instead of turning it down entirely.",
          },
        ],
        commonMistakes: [
          { ar: "يرفض بلا بديل فيبدو غير متعاون.", en: "Declines without offering an alternative, appearing uncooperative." },
          {
            ar: "يبرّر الرفض بأعذار متعددة متضاربة بدل سبب واحد واضح.",
            en: "Justifies the refusal with several conflicting excuses instead of one clear reason.",
          },
        ],
        successCriteria: [
          { ar: "الرفض أو إعادة التفاوض جرى قبل قبول المهمة لا بعد فوات مهلتها.", en: "The refusal or renegotiation happened before accepting the task, not after its deadline had already passed." },
          { ar: "بديل ملموس، كتقسيم المهمة أو تأجيل جزء منها، طُرح مع الرفض.", en: "A concrete alternative, such as splitting the task or delaying part of it, was offered alongside the refusal." },
        ],
        evidenceRequired: [
          { ar: "محضر أو رسالة تُظهر إعادة التفاوض والبديل المقترح.", en: "A record or message showing the renegotiation and the alternative proposed." },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يوازن بين طلبات متضاربة من أطراف متعددة في وقت واحد، ويحسم الأولوية بمعايير موضوعية للموكّل أو للمكتب لا بمن يلحّ أكثر.",
          en: "Balances conflicting requests from multiple parties at once, resolving priority by objective criteria for the client or the firm rather than by who pushes hardest.",
        },
        observableBehaviors: [
          {
            ar: "يجمع الشريكين المتنازعين على وقته في مكالمة قصيرة ليحسما الأولوية بينهما بدل أن يقرر هو وحده.",
            en: "Brings the two partners competing for his time onto a short call so they settle the priority between themselves, instead of deciding alone.",
          },
          {
            ar: "يستند إلى مهلة قانونية صارمة أو خطورة الملف، لا إلحاح الطالب، لتحديد الأولوية.",
            en: "Uses a hard legal deadline or the file's severity, not the requester's insistence, to determine priority.",
          },
        ],
        commonMistakes: [
          { ar: "يقرر الأولوية بمفرده متجنّبًا مواجهة الطرفين معًا.", en: "Decides priority alone, avoiding bringing the two requesters together." },
          {
            ar: "يمنح الأولوية للشريك الأعلى رتبة بصرف النظر عن الخطورة الفعلية للملف.",
            en: "Gives priority to the more senior partner regardless of the file's actual severity.",
          },
        ],
        successCriteria: [
          { ar: "قرار الأولوية مستند إلى معيار موضوعي موثّق.", en: "The priority decision is grounded in a documented objective criterion." },
          { ar: "كلا الطرفين المتنازعين على الوقت اطّلع على القرار وسببه.", en: "Both parties competing for his time were informed of the decision and its reason." },
        ],
        evidenceRequired: [
          { ar: "محاكاة أو محضر يظهر حسم أولوية بين طلبين متعارضين.", en: "A simulation or record showing priority resolved between two competing requests." },
          { ar: "تواصل مكتوب يوثّق سبب القرار.", en: "Written communication documenting the reason for the decision." },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "ينذر بتجاوز العبء قبل أن يتحوّل إلى أزمة، عبر تحديث دوري لمن يوزّع العمل بمستوى إشغاله الفعلي، ويحمي زملاءه الأصغر من قبول أعباء غير معلنة.",
          en: "Flags capacity overload before it becomes a crisis, through regular updates to whoever assigns work about his real availability, and protects junior colleagues from silently taking on undisclosed overload.",
        },
        observableBehaviors: [
          {
            ar: "يرسل تحديثًا أسبوعيًا لمدير الملفات بمستوى إشغاله قبل أن يوزَّع عليه ملف جديد.",
            en: "Sends the matter-assignment manager a weekly update on his current load before a new file is assigned to him.",
          },
          {
            ar: "يلاحظ أن متدربًا يقبل كل طلب دون اعتراض ويشجّعه على التعبير عن عبئه أمام الشريك.",
            en: "Notices a trainee accepting every request without objection and coaches him to voice his workload to the partner.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحمي نفسه فقط دون الانتباه لعبء من حوله في الفريق.",
            en: "Protects only himself without noticing the load building up on others in the team.",
          },
          {
            ar: "يبلّغ عن التجاوز بعد فوات الأوان بدل التحديث الدوري المبكر.",
            en: "Reports the overload after the fact instead of giving an early, regular update.",
          },
        ],
        successCriteria: [
          { ar: "تحديثات دورية موثّقة عن الإشغال تصل قبل تفاقم التعارض.", en: "Documented periodic load updates reach the assigner before the conflict escalates." },
          { ar: "زميل أصغر ساعده على التعبير عن عبء غير مستدام.", en: "Helped a junior colleague voice an unsustainable load." },
        ],
        evidenceRequired: [
          { ar: "سجلّ التحديثات الدورية للإشغال.", en: "The log of periodic load updates." },
          { ar: "شاهد أو محضر تدريب زميل على وضع حدوده.", en: "A witness account or record of coaching a colleague on setting boundaries." },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع مع إدارة المكتب آلية معلنة لتوزيع العمل تأخذ الإشغال الفعلي بعين الاعتبار، ويقيس أثرها على جودة التسليم واستدامة الفريق.",
          en: "Establishes, with firm management, a transparent work-assignment mechanism that accounts for actual capacity, and measures its effect on delivery quality and team sustainability.",
        },
        observableBehaviors: [
          {
            ar: "يقترح على الإدارة لوحة إشغال مشتركة يراها من يوزّع الملفات قبل التكليف.",
            en: "Proposes to management a shared capacity board visible to whoever assigns files before making an assignment.",
          },
          {
            ar: "يجمع بيانات عن حالات الإرهاق أو الأخطاء الناتجة عن تراكم العبء ويعرضها على الإدارة.",
            en: "Gathers data on burnout episodes or errors caused by workload pile-up and presents it to management.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض الآلية دون تدريب الفريق على استخدامها فتُهمَل.",
            en: "Imposes the mechanism without training the team to use it, so it falls into disuse.",
          },
          { ar: "يقيس عدد ساعات العمل فقط دون أثرها على جودة التسليم.", en: "Measures hours worked alone, without their effect on delivery quality." },
        ],
        successCriteria: [
          { ar: "آلية توزيع العمل معتمدة ومستخدمة فعليًا عبر المكتب.", en: "The work-assignment mechanism is adopted and actually used across the firm." },
          { ar: "تقرير يربط بين الآلية وتحسّن جودة التسليم أو انخفاض الإرهاق.", en: "A report links the mechanism to improved delivery quality or reduced burnout." },
        ],
        evidenceRequired: [
          { ar: "الآلية المعتمدة ووثيقة عرضها على الإدارة.", en: "The adopted mechanism and the document presenting it to management." },
          { ar: "تقرير دوري بأثرها على استدامة الفريق.", en: "A periodic report on its impact on team sustainability." },
        ],
      },
    ],
    sourceIds: ["src.four-thousand-weeks", "src.fire-proof", "src.your-brain-at-work", "src.a-civil-action"],
    confidence: 0.82,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.time-priority-management"],
  },
  {
    id: "skill.focus-under-interruption",
    domainId: "dom.self-management",
    name: { ar: "التركيز في وجه المقاطعات", en: "Focus Under Interruption" },
    synonyms: [
      "deep work protection",
      "attention management",
      "recovering focus",
      "protecting blocks of time",
      "حماية التركيز",
    ],
    definition: {
      ar: "حماية فترات العمل العميق التي تستوجب تركيزًا متواصلاً من المقاطعات المتكررة، والتمييز بين ما يستحق مقاطعة فورية وما ينتظر، واستعادة التركيز بسرعة بعد أي مقاطعة لا يمكن تفاديها.",
      en: "Protecting blocks of deep, uninterrupted work from constant pulls, distinguishing what genuinely warrants an immediate interruption from what can wait, and recovering focus quickly after an interruption that could not be avoided.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على حماية تركيزه من المقاطعات.",
          en: "No evidence has been collected yet on the learner's ability to protect focus under interruption.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يرد على كل رسالة أو مكالمة فور وصولها بصرف النظر عمّا كان يعمل عليه.",
          en: "Responds to every message or call the instant it arrives, regardless of what he was working on.",
        },
        observableBehaviors: [
          { ar: "يترك تطبيق الرسائل مفتوحًا ويردّ فورًا أثناء صياغة مذكرة.", en: "Leaves the messaging app open and replies instantly while drafting a memo." },
          { ar: "يجيب على الهاتف في أي وقت دون تصفية.", en: "Answers the phone at any time without screening." },
        ],
        commonMistakes: [
          {
            ar: "يعيد قراءة الفقرة نفسها ثلاث مرات بعد كل مقاطعة لأنه فقد خيط الفكرة.",
            en: "Rereads the same paragraph three times after each interruption because he lost his train of thought.",
          },
          { ar: "يبقى المستند مفتوحًا ساعات دون تقدّم فعلي.", en: "Leaves the document open for hours without real progress." },
        ],
        successCriteria: [
          { ar: "أنهى المهمة ولو بوقت أطول بكثير من المطلوب.", en: "Finished the task, even taking far longer than needed." },
          { ar: "لم يفوّت رسالة أو مكالمة عاجلة فعلاً.", en: "Did not miss a message or call that was genuinely urgent." },
        ],
        evidenceRequired: [
          { ar: "سجلّ يُظهر مهمة استغرقت وقتًا أطول من تقديرها الأصلي بكثير.", en: "A log showing a task took far longer than originally estimated." },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يحدد كتلة زمنية قصيرة للعمل المركّز ويغلق أثناءها إشعارات القنوات غير الضرورية.",
          en: "Sets a short time block for focused work and turns off notifications for non-essential channels during it.",
        },
        observableBehaviors: [
          {
            ar: "يخصص ساعة صباحًا لمراجعة عقد شراكة تجارية معقّد ويضع الهاتف على وضع الطيران.",
            en: "Blocks off an hour in the morning to review a complex commercial partnership contract and puts his phone on airplane mode.",
          },
          { ar: "يخبر زميله المجاور بأنه غير متاح للمقاطعة لمدة محددة.", en: "Tells the colleague at the next desk that he is unavailable for a set period." },
        ],
        commonMistakes: [
          { ar: "يفتح بريده \"للتحقق السريع\" فينهار الحاجز خلال دقائق.", en: "Opens his email 'for a quick check' and the barrier collapses within minutes." },
          { ar: "يحجز الكتلة الزمنية لكنه لا يخبر أحدًا بها فتُقاطَع كالمعتاد.", en: "Blocks the time but tells no one about it, so it gets interrupted as usual." },
        ],
        successCriteria: [
          { ar: "كتلة زمنية واحدة على الأقل محمية فعليًا من الإشعارات.", en: "At least one time block is actually protected from notifications." },
          { ar: "من حوله يعلمون بعدم توفره خلال تلك الكتلة.", en: "Those around him know he is unavailable during that block." },
        ],
        evidenceRequired: [
          { ar: "تقويم أو رسالة تُظهر كتلة زمنية محجوزة ومعلنة.", en: "A calendar entry or message showing a blocked, announced time slot." },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يميّز بسرعة بين مقاطعة تستوجب توقفًا فوريًا وأخرى تنتظر، ويتعامل مع الأخيرة بردّ مؤجَّل واضح بدل تجاهلها أو الاستجابة الفورية.",
          en: "Quickly distinguishes an interruption that genuinely requires stopping now from one that can wait, and handles the latter with a clear deferred response instead of ignoring it or answering immediately.",
        },
        observableBehaviors: [
          {
            ar: "يقيّم رسالة \"عاجل\" من موظف الاستقبال في ثوانٍ، فيتضح أنها سؤال عن موعد ممكن تأجيله ساعة.",
            en: "Assesses a receptionist's 'urgent' message in seconds and finds it is a scheduling question that can wait an hour.",
          },
          {
            ar: "يرد برسالة قصيرة: \"سأعاود الاتصال الساعة الحادية عشرة\" بدل الرد الكامل الفوري.",
            en: "Replies with a short message, 'I will call back at eleven,' instead of a full immediate response.",
          },
        ],
        commonMistakes: [
          { ar: "يعامل كل ما يُوصف بـ\"عاجل\" على أنه عاجل فعلاً دون تقييم.", en: "Treats everything labelled 'urgent' as genuinely urgent without assessing it." },
          {
            ar: "يتجاهل الرسالة كليًا دون رد مؤجَّل فيبدو غير مسؤول.",
            en: "Ignores the message entirely without a deferred response, appearing irresponsible.",
          },
        ],
        successCriteria: [
          { ar: "المقاطعات الحقيقية عولجت فورًا والباقي أُجِّل بوضوح.", en: "Genuine interruptions were handled immediately and the rest were clearly deferred." },
          { ar: "لا رسالة بقيت بلا رد لفترة تثير قلق مرسلها.", en: "No message went unanswered long enough to worry its sender." },
        ],
        evidenceRequired: [
          { ar: "سجلّ رسائل يُظهر تمييزًا بين عاجل ومؤجَّل.", en: "A message log showing a distinction between urgent and deferred items." },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يستعيد خيط عمله بسرعة بعد مقاطعة لا مفرّ منها، عبر تقنية ثابتة كتدوين النقطة التي توقف عندها قبل الرد على المقاطعة.",
          en: "Recovers his train of thought quickly after an unavoidable interruption, using a consistent technique such as noting the exact point he stopped at before responding to the interruption.",
        },
        observableBehaviors: [
          {
            ar: "يكتب سطرًا واحدًا: \"توقفت عند تحليل بند الفسخ في الفقرة الثالثة\" قبل الرد على مكالمة عميل طارئة.",
            en: "Writes a single line, 'Stopped at the termination clause analysis in paragraph three,' before answering an urgent client call.",
          },
          {
            ar: "يعود إلى المستند مباشرة بعد المقاطعة بدل فتح قنوات أخرى أولاً.",
            en: "Returns straight to the document after the interruption instead of opening other channels first.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعود من المقاطعة إلى البريد الإلكتروني بدل المهمة الأصلية فتضيع الكتلة الزمنية كلها.",
            en: "Returns from the interruption to email instead of the original task, losing the entire time block.",
          },
          { ar: "لا يدوّن نقطة التوقف فيحتاج وقتًا طويلاً لتذكّر مكانه.", en: "Does not note the stopping point, needing a long time to recall where he was." },
        ],
        successCriteria: [
          { ar: "استأنف المهمة الأصلية خلال دقائق من انتهاء المقاطعة.", en: "Resumed the original task within minutes of the interruption ending." },
          { ar: "نقطة التوقف مدوّنة قبل الانتقال إلى المقاطعة.", en: "The stopping point is noted before switching to the interruption." },
        ],
        evidenceRequired: [
          { ar: "محاكاة أو سجلّ يُظهر استعادة التركيز بعد مقاطعة موثّقة.", en: "A simulation or log showing focus recovered after a documented interruption." },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني لنفسه ولفريقه بروتوكولاً معلنًا لأوقات التركيز، ويتفاوض مع من حوله على قنوات تصعيد حقيقية بدل الاعتماد على \"عاجل\" في كل رسالة.",
          en: "Builds a declared focus-time protocol for himself and his team, and negotiates with those around him a real escalation channel instead of relying on 'urgent' in every message.",
        },
        observableBehaviors: [
          {
            ar: "يتفق مع فريقه على أن الاتصال الهاتفي فقط، لا الرسائل النصية، يعني طارئًا فعليًا خلال ساعات التركيز.",
            en: "Agrees with his team that only a phone call, not a text message, signals a genuine emergency during focus hours.",
          },
          {
            ar: "يشارك تقويمه مع الفريق موضحًا كتل التركيز الثابتة أسبوعيًا.",
            en: "Shares his calendar with the team, marking his fixed weekly focus blocks.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضع البروتوكول لنفسه فقط دون التفاوض عليه مع من يتواصل معه فعليًا.",
            en: "Sets the protocol for himself only, without negotiating it with those who actually contact him.",
          },
          { ar: "يخترق بروتوكوله الخاص متى ضغط عليه أحد فيفقد مصداقيته.", en: "Breaks his own protocol the moment someone pushes back, losing credibility." },
        ],
        successCriteria: [
          { ar: "بروتوكول التركيز معروف ومحترَم من الفريق المباشر.", en: "The focus protocol is known and respected by the immediate team." },
          { ar: "قناة تصعيد حقيقية واحدة متفق عليها بديلاً عن \"عاجل\" الفضفاض.", en: "One genuine escalation channel is agreed on as an alternative to a loose 'urgent' label." },
        ],
        evidenceRequired: [
          { ar: "البروتوكول المكتوب والمتفق عليه مع الفريق.", en: "The written protocol agreed with the team." },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يقود اعتماد ثقافة تركيز على مستوى المكتب، بما يشمل قواعد استجابة معلنة وقياس أثر التركيز المحمي على جودة العمل ومهله.",
          en: "Leads the adoption of a firm-wide focus culture, including declared response-time norms, and measures the effect of protected focus on work quality and deadlines.",
        },
        observableBehaviors: [
          {
            ar: "يقترح على الإدارة سياسة استجابة معلنة، كساعتين كحد أقصى للرد على الرسائل غير العاجلة.",
            en: "Proposes to management a declared response norm, such as a maximum two-hour turnaround for non-urgent messages.",
          },
          {
            ar: "يجمع بيانات عن عدد الأخطاء أو التصحيحات في مستندات كُتبت وسط مقاطعات متكررة.",
            en: "Gathers data on error or revision rates in documents drafted amid frequent interruptions.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض السياسة على الفريق دون مراعاة اختلاف طبيعة الأدوار، كالاستقبال مقابل الصياغة.",
            en: "Imposes the policy on the team without accounting for differing roles, such as reception versus drafting.",
          },
          { ar: "يقيس عدد الكتل الزمنية المحجوزة لا أثرها الفعلي على الجودة.", en: "Measures the number of blocked slots rather than their actual effect on quality." },
        ],
        successCriteria: [
          { ar: "سياسة التركيز معتمدة ومطبَّقة عبر المكتب.", en: "The focus policy is adopted and applied across the firm." },
          { ar: "تقرير يربط بين التركيز المحمي وتحسّن في جودة العمل أو التزام المهل.", en: "A report links protected focus to improved work quality or better deadline adherence." },
        ],
        evidenceRequired: [
          { ar: "السياسة المعتمدة ووثيقة عرضها على الإدارة.", en: "The adopted policy and the document presenting it to management." },
          { ar: "تقرير دوري بأثر التركيز المحمي.", en: "A periodic report on the impact of protected focus." },
        ],
      },
    ],
    sourceIds: ["src.your-brain-at-work", "src.four-thousand-weeks", "src.meditations-for-mortals"],
    confidence: 0.8,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.overcoming-avoidance",
    domainId: "dom.self-management",
    name: { ar: "تجاوز التسويف", en: "Overcoming Avoidance" },
    synonyms: [
      "beating procrastination",
      "starting the hard task",
      "breaking avoidance patterns",
      "confronting difficult work",
      "كسر حلقة التأجيل",
    ],
    definition: {
      ar: "تحويل القلق أو التسويف تجاه مهمة صعبة، كمذكرة معقّدة أو مكالمة محرجة أو رسالة لم تُفتَح، إلى خطوة أولى صغيرة وملموسة، والتعرّف على نمط التجنّب قبل أن يتحوّل إلى أزمة.",
      en: "Converting anxiety or procrastination about a hard task, such as a complex brief, an awkward call, or an unread message, into a concrete first small step, and recognizing an avoidance pattern before it compounds into a crisis.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على تجاوز التسويف.",
          en: "No evidence has been collected yet on the learner's ability to overcome avoidance.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يترك المهمة المزعجة جانبًا ويشغل نفسه بمهام أسهل حتى تقترب المهلة فيضطر للتصرف تحت ضغط شديد.",
          en: "Sets the uncomfortable task aside and keeps himself busy with easier ones until the deadline nears, then acts under severe pressure.",
        },
        observableBehaviors: [
          { ar: "يرتّب ملفاته أو يردّ على رسائل ثانوية بدل فتح المذكرة الصعبة.", en: "Tidies his files or answers minor messages instead of opening the difficult brief." },
          { ar: "يترك رسالة تحمل خبرًا سيئًا محتملاً بلا فتح لأيام.", en: "Leaves a message that might carry bad news unopened for days." },
        ],
        commonMistakes: [
          {
            ar: "يبدأ المهمة قبل ساعات من موعدها النهائي فتأتي متسرّعة وناقصة.",
            en: "Starts the task hours before its deadline, so it comes out rushed and incomplete.",
          },
          { ar: "يكذب على نفسه بأن \"الوقت لا يزال كافيًا\" مرارًا.", en: "Repeatedly tells himself 'there's still enough time.'" },
        ],
        successCriteria: [
          { ar: "أنجز المهمة قبل الموعد النهائي ولو بالحد الأدنى.", en: "Completed the task before the deadline, even at a bare minimum." },
          { ar: "لم يخفِ التأخير عن المشرف عند حدوثه.", en: "Did not hide the delay from his supervisor when it occurred." },
        ],
        evidenceRequired: [
          { ar: "سجلّ يُظهر بدءًا متأخرًا جدًا بمهمة معروفة مسبقًا.", en: "A log showing a very late start on a task known well in advance." },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يتعرّف على شعور التجنّب عندما يظهر، ويسمّي المهمة التي يتجنّبها صراحة لنفسه أو لمشرفه.",
          en: "Recognizes the feeling of avoidance when it appears, and names the task he is avoiding explicitly, to himself or to his supervisor.",
        },
        observableBehaviors: [
          {
            ar: "يكتب في مذكرته: \"أنا أتجنّب مكالمة الموكّل بخصوص تأخر ملفه\" بدل تجاهل الشعور.",
            en: "Writes in his notebook, 'I am avoiding the client call about the delayed file,' instead of ignoring the feeling.",
          },
          { ar: "يخبر زميلاً بأنه يؤجل فتح رسالة قد تحمل قرارًا سلبيًا.", en: "Tells a colleague he is putting off opening a message that might carry an adverse decision." },
        ],
        commonMistakes: [
          { ar: "يسمّي التجنّب لكنه لا يتصرف حياله بعد.", en: "Names the avoidance but still does not act on it." },
          { ar: "يخلط بين التجنّب والانشغال الفعلي بمهام أخرى مبررة.", en: "Confuses avoidance with genuinely being busy with other legitimate tasks." },
        ],
        successCriteria: [
          { ar: "المهمة المتجنَّبة مسمّاة بوضوح كتابيًا أو شفهيًا.", en: "The avoided task is clearly named, in writing or aloud." },
          { ar: "الشعور بالتجنّب لوحظ خلال يوم من ظهوره لا بعد أسابيع.", en: "The feeling of avoidance was noticed within a day of appearing, not weeks later." },
        ],
        evidenceRequired: [
          { ar: "ملاحظة شخصية أو محادثة تُظهر تسمية المهمة المتجنَّبة.", en: "A personal note or conversation showing the avoided task named." },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يحوّل المهمة المخيفة إلى خطوة أولى صغيرة جدًا وملموسة يمكن إنجازها خلال دقائق، ويبدأ بها فورًا بدل انتظار \"الوقت المناسب\".",
          en: "Breaks the daunting task down into a very small, concrete first step that can be done within minutes, and starts it right away instead of waiting for 'the right moment.'",
        },
        observableBehaviors: [
          {
            ar: "بدل \"كتابة المذكرة القانونية المعقدة\"، يحدد الخطوة الأولى: \"قراءة أول عشر صفحات من العقد فقط\" ويبدأ فورًا.",
            en: "Instead of 'write the complex legal memo,' defines the first step as 'read just the first ten pages of the contract,' and starts immediately.",
          },
          {
            ar: "يفتح الرسالة التي كان يتجنبها ويقرأ سطر الموضوع فقط كخطوة أولى.",
            en: "Opens the message he was avoiding and reads only the subject line as a first step.",
          },
        ],
        commonMistakes: [
          { ar: "يحدد خطوة أولى كبيرة جدًا فتبدو مخيفة كالمهمة الأصلية.", en: "Defines a first step that is still too large, so it feels as daunting as the original task." },
          { ar: "يؤجل الخطوة الأولى نفسها بانتظار الحافز الداخلي.", en: "Postpones even the first step, waiting for internal motivation to strike." },
        ],
        successCriteria: [
          { ar: "الخطوة الأولى المحدَّدة أُنجزت خلال ساعة من تحديدها.", en: "The defined first step was completed within an hour of being set." },
          { ar: "المهمة الكبرى بدأت فعليًا لا في النية فقط.", en: "The larger task actually began, not just in intention." },
        ],
        evidenceRequired: [
          { ar: "سجلّ يُظهر خطوة أولى صغيرة محدَّدة ومُنجَزة.", en: "A log showing a small first step defined and completed." },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يميّز بين قلق طبيعي تجاه مهمة صعبة وتجنّب متكرر يشكّل نمطًا، ويتدخّل مبكرًا على النمط قبل أن يتحوّل إلى فوات مهل متعدد أو أزمة مع موكّل.",
          en: "Distinguishes normal anxiety about a hard task from repeated avoidance that forms a pattern, and intervenes early on the pattern before it turns into multiple missed deadlines or a client crisis.",
        },
        observableBehaviors: [
          {
            ar: "يلاحظ أنه أجّل ثلاث مكالمات صعبة مع موكّلين مختلفين خلال شهر واحد، ويربط بينها كنمط لا حوادث منفصلة.",
            en: "Notices he has postponed three difficult client calls in a single month and connects them as a pattern, not isolated incidents.",
          },
          {
            ar: "يخصص وقتًا لمعالجة سبب تكرار التجنّب، كالخوف من ردّ فعل غاضب، بدل معالجة كل حالة بمعزل عن غيرها.",
            en: "Sets aside time to address the underlying reason avoidance keeps recurring, such as fear of an angry reaction, instead of handling each case in isolation.",
          },
        ],
        commonMistakes: [
          { ar: "يعامل كل حالة تجنّب كحادثة منفصلة فلا يرى النمط المتكرر.", en: "Treats every instance of avoidance as a one-off, missing the recurring pattern." },
          {
            ar: "يلوم نفسه بقسوة على النمط بدل معالجة سببه الجذري.",
            en: "Berates himself harshly for the pattern instead of addressing its root cause.",
          },
        ],
        successCriteria: [
          { ar: "نمط التجنّب المتكرر حُدّد بدليل من أكثر من حالة.", en: "The recurring avoidance pattern is identified with evidence from more than one instance." },
          { ar: "تدخّل مبكر جرى قبل وقوع فوات مهلة أو أزمة موكّل.", en: "Early intervention occurred before a missed deadline or client crisis materialized." },
        ],
        evidenceRequired: [
          { ar: "سجلّ أو انعكاس مكتوب يربط بين حالات تجنّب متعددة.", en: "A log or written reflection connecting multiple avoidance instances." },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني لنفسه روتينًا وقائيًا يقلّل فرص التجنّب قبل حدوثه، ويساعد زميلاً يلاحظ عليه نمط تسويف على تسمية المهمة المتجنَّبة والبدء بخطوة أولى.",
          en: "Builds a preventive routine that reduces the odds of avoidance before it starts, and helps a colleague he notices showing a procrastination pattern name the avoided task and take a first step.",
        },
        observableBehaviors: [
          {
            ar: "يضع قاعدة شخصية: يفتح كل رسالة يحتمل أن تحمل خبرًا سيئًا خلال ساعة من وصولها.",
            en: "Sets a personal rule to open every message that might carry bad news within an hour of it arriving.",
          },
          {
            ar: "يلاحظ زميلاً يؤجل ملفًا صعبًا ويسأله بلطف: \"ما الخطوة الأولى الصغيرة التي يمكنك إنجازها الآن؟\"",
            en: "Notices a colleague postponing a difficult file and gently asks, 'What's the small first step you could do right now?'",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض روتينه الشخصي على الزميل دون مراعاة نمط تجنّبه الخاص.",
            en: "Imposes his own routine on the colleague without accounting for that colleague's specific avoidance pattern.",
          },
          { ar: "ينتقد الزميل على التسويف بدل مساعدته على خطوة أولى.", en: "Criticizes the colleague for procrastinating instead of helping with a first step." },
        ],
        successCriteria: [
          { ar: "الروتين الوقائي مطبَّق شخصيًا بانتظام.", en: "The preventive routine is applied personally and consistently." },
          { ar: "زميل واحد على الأقل ساعده على البدء بمهمة كان يتجنّبها.", en: "Helped at least one colleague start a task he was avoiding." },
        ],
        evidenceRequired: [
          { ar: "وصف الروتين الوقائي وسجلّ التزامه.", en: "A description of the preventive routine and a log of adherence to it." },
          { ar: "شاهد أو محضر مساعدة زميل على تجاوز تجنّبه.", en: "A witness account or record of helping a colleague overcome avoidance." },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يطبّع الحديث عن التسويف والتجنّب كجزء من الثقافة المهنية داخل المكتب، عبر ممارسات معلنة، ويقيس أثرها على انخفاض فوات المهل وتراكم الأزمات.",
          en: "Normalizes talking about procrastination and avoidance as part of the firm's professional culture, through declared practices, and measures their effect on reducing missed deadlines and compounding crises.",
        },
        observableBehaviors: [
          {
            ar: "يقترح ممارسة دورية للفريق، كمراجعة أسبوعية قصيرة لأي مهمة مؤجَّلة أكثر من مرة.",
            en: "Proposes a recurring team practice, such as a short weekly review of any task deferred more than once.",
          },
          {
            ar: "يجمع بيانات عن الملفات التي تحوّل تأجيلها البسيط إلى أزمة فعلية مع موكّل.",
            en: "Gathers data on files where simple deferral turned into an actual client crisis.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحوّل المراجعة الدورية إلى أداة مساءلة عقابية فيتوقف الفريق عن التصريح بتأجيله.",
            en: "Turns the periodic review into a punitive accountability tool, so the team stops disclosing what it has deferred.",
          },
          {
            ar: "يقيس عدد جلسات المراجعة لا أثرها الفعلي على فوات المهل.",
            en: "Measures the number of review sessions rather than their actual effect on missed deadlines.",
          },
        ],
        successCriteria: [
          { ar: "الممارسة الدورية معتمدة ومستخدمة فعليًا دون طابع عقابي.", en: "The periodic practice is adopted and actually used, without a punitive character." },
          {
            ar: "تقرير يربط بين الممارسة وانخفاض عدد الأزمات الناتجة عن تأجيل متراكم.",
            en: "A report links the practice to a decline in crises caused by compounding deferral.",
          },
        ],
        evidenceRequired: [
          { ar: "الممارسة المعتمدة ووثيقة تعريفها للفريق.", en: "The adopted practice and the document introducing it to the team." },
          { ar: "تقرير دوري بأثرها على فوات المهل والأزمات.", en: "A periodic report on its impact on missed deadlines and crises." },
        ],
      },
    ],
    sourceIds: ["src.the-antidote", "src.meditations-for-mortals", "src.68-power-moves"],
    confidence: 0.78,
    reviewStatus: "ai_suggested",
  },
];
