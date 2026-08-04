import type { SkillDef } from "../types";

// -----------------------------------------------------------------------------
// dom.teamwork-leadership — two companion skills
//
// Companion file to skills.ts. Does not redefine skill.delegation,
// skill.feedback, skill.teamwork or skill.leadership-communication, which
// already exist in skills.ts. Fills two gaps the domain description names
// explicitly but no existing skill covers: managing the relationship with a
// supervisor, and leading colleagues with no formal authority. Matches the
// depth of skills-self-management.ts: 7 mastery levels (0-6), each with
// definition / observableBehaviors / commonMistakes / successCriteria /
// evidenceRequired, bilingual (Arabic primary), grounded in concrete
// Arab-market legal scenarios.
// -----------------------------------------------------------------------------

export const TEAMWORK_LEADERSHIP_SKILLS: SkillDef[] = [
  {
    id: "skill.managing-up",
    domainId: "dom.teamwork-leadership",
    name: { ar: "إدارة العلاقة مع المشرف", en: "Managing Up" },
    synonyms: [
      "managing your supervisor",
      "proactive status updates",
      "escalating disagreement respectfully",
      "working with a senior partner",
      "إدارة العلاقة مع الشريك المشرف",
    ],
    definition: {
      ar: "إدارة العلاقة مع الشريك أو المحامي المشرف بشكل استباقي: تقديم تحديثات دون انتظار السؤال، طلب المساعدة أو التوضيح مبكرًا بدل التخبّط بصمت، ورفع الاعتراض على تعليمة أو نهج يُعتقد أنه خطأ بأدب ووضوح دون الانصياع الصامت أو التمرّد.",
      en: "Proactively managing the relationship with a supervising partner or senior lawyer: giving status updates before being asked, seeking help or clarification early instead of struggling silently, and respectfully raising disagreement with an instruction or approach believed to be a mistake, without either silent compliance or insubordination.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على إدارة علاقته مع مشرفه.",
          en: "No evidence has been collected yet on the learner's ability to manage the relationship with a supervisor.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "ينتظر أن يُسأل عن حالة الملف بدل المبادرة، ويكتم صعوبة يواجهها حتى تتضح للمشرف من تلقاء نفسها عادة في وقت متأخر.",
          en: "Waits to be asked about a file's status instead of volunteering it, and keeps a difficulty he is facing to himself until it becomes visible to the supervisor on its own, usually too late.",
        },
        observableBehaviors: [
          { ar: "لا يرسل أي تحديث عن ملف تسليم عقد الإيجار التجاري لأسبوع كامل رغم عدم اكتمال العمل.", en: "Sends no update on the commercial lease drafting file for a full week despite the work being incomplete." },
          { ar: "يواجه بندًا غامضًا في تعليمات الشريك ويخمّن المقصود بدل السؤال.", en: "Encounters an ambiguous instruction from the partner and guesses at the meaning instead of asking." },
        ],
        commonMistakes: [
          {
            ar: "يفترض أن طلب التوضيح سيُفهَم كضعف أو نقص كفاءة.",
            en: "Assumes asking for clarification will be read as weakness or incompetence.",
          },
          {
            ar: "يكتشف الشريك التأخر فقط عندما يسأل الموكّل عن نتيجة الملف.",
            en: "The partner discovers the delay only when the client asks about the file's outcome.",
          },
        ],
        successCriteria: [
          { ar: "سلّم العمل في النهاية ولو متأخرًا أو بجودة أقل من المطلوب.", en: "Eventually delivered the work, even if late or below the required quality." },
          { ar: "لم يخفِ الخطأ عن المشرف عند اكتشافه.", en: "Did not hide the mistake from the supervisor once discovered." },
        ],
        evidenceRequired: [
          { ar: "سجلّ تواصل يُظهر غياب أي تحديث استباقي قبل استفسار المشرف.", en: "A communication log showing no proactive update before the supervisor's inquiry." },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يرسل تحديثًا عندما يُسأل مباشرة أو عند اقتراب مهلة واضحة، ويطرح سؤال توضيح بسيطًا عندما تكون التعليمة غامضة جدًا ليتابع دونه.",
          en: "Sends an update when asked directly or when a clear deadline nears, and asks a simple clarifying question when an instruction is too ambiguous to proceed without one.",
        },
        observableBehaviors: [
          {
            ar: "يرسل للشريك رسالة قصيرة: \"لم أفهم إن كنت تريد الرد الكامل أم ملخصًا فقط، هل توضّح؟\" قبل البدء بمذكرة تأسيس شركة.",
            en: "Sends the partner a short message, 'I'm not sure if you want the full response or just a summary, can you clarify?' before starting a company-formation memo.",
          },
          {
            ar: "يرسل تحديثًا عن ملف نزاع صرف شيك فقط عندما يسأله الشريك مباشرة عن التقدّم.",
            en: "Sends an update on a dishonoured-cheque dispute file only when the partner directly asks about progress.",
          },
        ],
        commonMistakes: [
          { ar: "ينتظر السؤال المباشر بدل المبادرة بالتحديث.", en: "Waits to be asked directly instead of volunteering the update." },
          { ar: "يطرح السؤال بصيغة عامة تجعل المشرف يجيب بإجابة غير كافية.", en: "Phrases the question too vaguely, so the supervisor's answer is not specific enough to act on." },
        ],
        successCriteria: [
          { ar: "أجاب على استفسار المشرف بمعلومات دقيقة عند طلبها.", en: "Answered the supervisor's inquiry with accurate information when asked." },
          { ar: "طرح سؤال توضيح واحدًا على الأقل قبل الانطلاق في عمل غامض التعليمات.", en: "Asked at least one clarifying question before proceeding on ambiguously instructed work." },
        ],
        evidenceRequired: [
          { ar: "رسالة تُظهر تحديثًا أو سؤال توضيح بعد طلب المشرف.", en: "A message showing an update or clarifying question after the supervisor's prompt." },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يبادر بتحديث دوري عن حالة الملف دون انتظار السؤال، ويطلب المساعدة أو التوضيح مبكرًا في اللحظة التي يشعر فيها بالتخبّط، لا بعد ساعات من الضياع.",
          en: "Proactively sends a periodic status update without waiting to be asked, and asks for help or clarification early, the moment he feels stuck, rather than hours into being lost.",
        },
        observableBehaviors: [
          {
            ar: "يرسل للشريك المشرف كل يوم اثنين ملخصًا من ثلاثة أسطر عن حالة ملفات التقاضي الجارية دون طلب.",
            en: "Sends the supervising partner a three-line summary every Monday on active litigation files' status, unprompted.",
          },
          {
            ar: "يطلب من الشريك عشر دقائق بعد ساعة واحدة من التخبّط في تحليل بند تحكيم غامض بدل الاستمرار وحيدًا نصف يوم.",
            en: "Asks the partner for ten minutes after one hour of being stuck on an ambiguous arbitration clause, instead of continuing alone for half a day.",
          },
        ],
        commonMistakes: [
          { ar: "يرسل تحديثات مفرطة التفصيل تستهلك وقت المشرف دون داعٍ.", en: "Sends overly detailed updates that consume the supervisor's time unnecessarily." },
          {
            ar: "ينتظر حتى يشعر بالعجز الكامل قبل طلب المساعدة بدل طلبها عند أول إشارة تخبّط.",
            en: "Waits until feeling completely stuck before asking for help, instead of asking at the first sign of confusion.",
          },
        ],
        successCriteria: [
          { ar: "التحديث وصل دون أن يطلبه المشرف صراحة.", en: "The update reached the supervisor without being explicitly requested." },
          { ar: "طلب المساعدة جاء قبل أن يتحول التخبّط إلى تأخر فعلي في المهلة.", en: "The request for help came before the confusion turned into an actual deadline slip." },
        ],
        evidenceRequired: [
          { ar: "سجلّ تحديثات دورية استباقية موثّق بتواريخ.", en: "A dated log of proactive periodic updates." },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يرفع اعتراضًا محترمًا وواضحًا على تعليمة أو نهج يعتقد أنه خطأ، مستندًا إلى سبب موضوعي، ويقبل قرار المشرف النهائي دون تمرّد إذا أصرّ الأخير بعد سماع الاعتراض.",
          en: "Raises a respectful, clear objection to an instruction or approach he believes is mistaken, grounded in an objective reason, and accepts the supervisor's final call without insubordination if the supervisor insists after hearing it out.",
        },
        observableBehaviors: [
          {
            ar: "يقول لشريك يطلب إرسال رأي قانوني دون تحفّظ بشأن سقف مسؤولية غامض: \"أعتقد أن هذا يعرّضنا لمخاطرة، هل نضيف تحفظًا؟\" بدل الإرسال كما طُلب أو رفض الإرسال بصمت.",
            en: "Tells a partner requesting an unqualified legal opinion on an ambiguous liability cap, 'I think this exposes us to risk, can we add a caveat?' instead of sending it as instructed or silently refusing.",
          },
          {
            ar: "بعد أن يستمع الشريك إلى اعتراضه ويصرّ على موقفه الأصلي، ينفّذ التعليمة كما طُلبت دون مقاومة أو تباطؤ متعمّد.",
            en: "After the partner hears the objection and insists on the original position, carries out the instruction as given, without resistance or deliberate slowdown.",
          },
        ],
        commonMistakes: [
          { ar: "يصمت رغم اعتقاده بوجود خطأ خوفًا من رد فعل المشرف.", en: "Stays silent despite believing there is a mistake, out of fear of the supervisor's reaction." },
          {
            ar: "يعارض علنًا أمام الموكّل أو الفريق بدل رفع الاعتراض على انفراد أولاً.",
            en: "Objects openly in front of the client or team instead of raising the concern privately first.",
          },
        ],
        successCriteria: [
          { ar: "الاعتراض رُفع بأدب واستند إلى سبب موضوعي واضح.", en: "The objection was raised respectfully and grounded in a clear, objective reason." },
          { ar: "التنفيذ تم دون تمرّد بعد إصرار المشرف على قراره.", en: "Execution followed without insubordination once the supervisor insisted on the decision." },
        ],
        evidenceRequired: [
          { ar: "محاكاة أو محضر يُظهر اعتراضًا مهنيًا وقبول القرار النهائي.", en: "A simulation or record showing a professional objection and acceptance of the final decision." },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني مع المشرف إيقاعًا ثابتًا من الثقة يجعل التحديثات وطلب المساعدة ورفع الاعتراض أمورًا معتادة لا استثنائية، ويوثّق النقاط الخلافية الجوهرية كتابيًا لحماية نفسه والمشرف معًا.",
          en: "Builds a steady rhythm of trust with the supervisor that makes updates, help-seeking and raised objections routine rather than exceptional, and documents material points of disagreement in writing to protect both himself and the supervisor.",
        },
        observableBehaviors: [
          {
            ar: "يتفق مع الشريك على اجتماع أسبوعي ثابت من عشر دقائق لمراجعة الملفات الحساسة بدل تحديثات متفرقة.",
            en: "Agrees with the partner on a fixed weekly ten-minute check-in on sensitive files, instead of scattered updates.",
          },
          {
            ar: "يرسل رسالة إلكترونية موجزة توثّق اعتراضه على نهج التسوية المقترح بعد نقاش شفهي، لحفظ الموقفين.",
            en: "Sends a brief email documenting his objection to the proposed settlement approach after an oral discussion, preserving both positions.",
          },
        ],
        commonMistakes: [
          {
            ar: "يوثّق كل خلاف بسيط كتابيًا فيبدو الأمر كبناء ملف ضد المشرف.",
            en: "Documents every minor disagreement in writing, so it reads as building a case against the supervisor.",
          },
          { ar: "يحافظ على الإيقاع مع مشرف واحد فقط ويهمله مع البقية.", en: "Maintains the rhythm with one supervisor only and neglects it with the others." },
        ],
        successCriteria: [
          { ar: "إيقاع تواصل منتظم قائم ومعترف به من المشرف.", en: "A regular communication rhythm is in place and acknowledged by the supervisor." },
          { ar: "خلاف جوهري واحد على الأقل موثّق كتابيًا بأسلوب مهني غير اتهامي.", en: "At least one material disagreement is documented in writing, in a professional, non-accusatory tone." },
        ],
        evidenceRequired: [
          { ar: "سجلّ اجتماعات دورية متفق عليها مع المشرف.", en: "A log of the agreed periodic check-ins with the supervisor." },
          { ar: "رسالة توثّق خلافًا جوهريًا بأسلوب مهني.", en: "A message documenting a material disagreement in a professional tone." },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يدرّب زملاءه الأصغر على إدارة علاقتهم مع مشرفيهم، ويقترح على إدارة المكتب ممارسات معلنة للتحديث الاستباقي ورفع الاعتراض المهني، ويقيس أثرها على تقليل الأخطاء والمفاجآت.",
          en: "Coaches junior colleagues on managing their relationship with their own supervisors, proposes declared firm-wide practices for proactive updating and professional dissent, and measures their effect on reducing errors and surprises.",
        },
        observableBehaviors: [
          {
            ar: "ينظّم جلسة قصيرة للمتدربين الجدد عن كيفية صياغة تحديث استباقي وكيفية رفع اعتراض دون أن يبدو تمرّدًا.",
            en: "Runs a short session for new trainees on how to phrase a proactive update and how to raise an objection without it reading as insubordination.",
          },
          {
            ar: "يقترح على الإدارة قالبًا موحّدًا لتحديث أسبوعي بين المتدربين ومشرفيهم ويجمع بيانات عن أثره.",
            en: "Proposes to management a standard weekly update template between trainees and their supervisors and gathers data on its effect.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض القالب على الجميع دون مراعاة اختلاف أسلوب كل شريك مشرف.",
            en: "Imposes the template on everyone without accounting for each supervising partner's different style.",
          },
          { ar: "يقيس عدد التحديثات المرسلة لا أثرها الفعلي على تقليل المفاجآت أو الأخطاء.", en: "Measures the number of updates sent rather than their actual effect on reducing surprises or errors." },
        ],
        successCriteria: [
          { ar: "ممارسة معلنة معتمدة ومستخدمة فعليًا في المكتب أو الفريق.", en: "A declared practice is adopted and actually used across the firm or team." },
          { ar: "تقرير يربط بين الممارسة وانخفاض الأخطاء أو المفاجآت المتأخرة أمام الموكّلين.", en: "A report links the practice to fewer errors or late surprises in front of clients." },
        ],
        evidenceRequired: [
          { ar: "وثيقة الممارسة المعتمدة ومحضر تدريب زملاء أصغر.", en: "The document for the adopted practice and a record of coaching junior colleagues." },
          { ar: "تقرير دوري بأثرها على جودة العلاقة مع المشرفين.", en: "A periodic report on its impact on the quality of relationships with supervisors." },
        ],
      },
    ],
    sourceIds: ["src.smarter-collaboration", "src.lawyers-ceo", "src.introverted-leader", "src.your-brain-at-work"],
    confidence: 0.85,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.time-priority-management"],
  },
  {
    id: "skill.leading-without-authority",
    domainId: "dom.teamwork-leadership",
    name: { ar: "القيادة بلا سلطة رسمية", en: "Leading Without Authority" },
    synonyms: [
      "informal influence",
      "cross-team influence",
      "peer influence",
      "getting buy-in without rank",
      "التأثير على الأقران",
    ],
    definition: {
      ar: "دفع زميل من فريق أو قسم آخر لا تملك عليه سلطة مباشرة لإعطاء الأولوية لهدف مشترك أو مهلة مشتركة، عبر وضوح المصلحة المشتركة والمصداقية والمعاملة بالمثل، لا عبر الرتبة.",
      en: "Getting a peer or colleague from another team or department, over whom you hold no formal authority, to prioritize a shared goal or deadline — through clarity of shared stakes, credibility and reciprocity rather than rank.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على القيادة بلا سلطة رسمية.",
          en: "No evidence has been collected yet on the learner's ability to lead without formal authority.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يطلب من زميل في قسم آخر إنجاز شيء دون شرح السبب أو الأثر، فيُهمَل الطلب أو يُنفَّذ متأخرًا دون شعور بالإلحاح.",
          en: "Asks a colleague in another department to do something without explaining why or its impact, so the request is neglected or completed late with no sense of urgency.",
        },
        observableBehaviors: [
          { ar: "يرسل رسالة لموظف المحاسبة: \"أحتاج فاتورة الموكّل اليوم\" دون ذكر السبب أو الموعد النهائي الفعلي.", en: "Sends the accounting staff member a message, 'I need the client invoice today,' without stating why or the real deadline." },
          { ar: "لا يتابع الطلب بعد إرساله فينسى الطرف الآخر أمره.", en: "Never follows up after sending the request, so the other party forgets about it." },
        ],
        commonMistakes: [
          {
            ar: "يفترض أن الطلب سيُنفَّذ لمجرد أنه معقول من وجهة نظره.",
            en: "Assumes the request will be carried out simply because it seems reasonable to him.",
          },
          {
            ar: "يشتكي لمشرفه من عدم تعاون الزميل بدل التواصل المباشر أولاً.",
            en: "Complains to his own supervisor about the colleague's lack of cooperation instead of communicating directly first.",
          },
        ],
        successCriteria: [
          { ar: "حصل على المطلوب في النهاية ولو متأخرًا.", en: "Eventually got what was needed, even if late." },
          { ar: "لم يتصرف بعدوانية عند التأخر في التنفيذ.", en: "Did not react aggressively when execution was delayed." },
        ],
        evidenceRequired: [
          { ar: "رسالة تُظهر طلبًا بلا سبب أو مهلة واضحة.", en: "A message showing a request with no stated reason or clear deadline." },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يشرح سبب الطلب ومهلته عند التواصل مع زميل من قسم آخر، فيزيد احتمال التنفيذ في الوقت دون الحاجة لتصعيد.",
          en: "Explains the reason and deadline behind a request when reaching out to a colleague from another department, increasing the chance of on-time execution without needing to escalate.",
        },
        observableBehaviors: [
          {
            ar: "يقول لموظف الأرشيف: \"أحتاج ملف الشركة قبل ظهر الخميس لأن جلسة التحكيم صباح الجمعة\" بدل طلب مجرّد.",
            en: "Tells the archive clerk, 'I need the company file by Thursday noon because the arbitration hearing is Friday morning,' instead of a bare request.",
          },
          { ar: "يحدد موعدًا نهائيًا واضحًا بدل \"في أقرب وقت ممكن\".", en: "States a clear deadline instead of 'as soon as possible.'" },
        ],
        commonMistakes: [
          { ar: "يشرح السبب لكنه يفترض أن الزميل يعرف مدى إلحاحه الفعلي.", en: "Explains the reason but assumes the colleague already grasps how urgent it truly is." },
          { ar: "لا يذكر ماذا سيحدث إذا تأخر التسليم.", en: "Does not mention what happens if delivery slips." },
        ],
        successCriteria: [
          { ar: "الطلب يتضمن سببًا ومهلة واضحين.", en: "The request includes a clear reason and deadline." },
          { ar: "التنفيذ حصل ضمن المهلة المذكورة دون تصعيد.", en: "Execution happened within the stated deadline without escalation." },
        ],
        evidenceRequired: [
          { ar: "رسالة تُظهر طلبًا بسبب ومهلة محددين.", en: "A message showing a request with a stated reason and deadline." },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يربط الطلب بمصلحة الطرف الآخر أو هدفه المشترك، ويقدّم مقابلاً أو معاملة بالمثل بدل الاعتماد فقط على شرح الحاجة الخاصة به.",
          en: "Connects the request to the other party's own interest or a shared goal, and offers something in return or reciprocity, instead of relying solely on explaining his own need.",
        },
        observableBehaviors: [
          {
            ar: "يقول لمسؤول التسويق: \"إن جهّزنا هذا العقد النموذجي معًا هذا الأسبوع، سيسهّل عليك عرضه على الموكّلين الجدد في حملتك القادمة\"، لا فقط \"أحتاجه لملفي\".",
            en: "Tells the marketing lead, 'If we get this template contract ready together this week, it will make your upcoming campaign pitch to new clients easier,' not just 'I need it for my file.'",
          },
          {
            ar: "يعرض مراجعة قسم من عرض مالي لزميل في قسم آخر مقابل مساعدته في مذكرة عاجلة.",
            en: "Offers to review part of a financial proposal for a colleague in another department, in exchange for help on an urgent memo.",
          },
        ],
        commonMistakes: [
          { ar: "يربط الطلب بمصلحة وهمية للطرف الآخر يكتشفها بسرعة فيفقد المصداقية.", en: "Ties the request to a fabricated benefit for the other party that they quickly see through, losing credibility." },
          {
            ar: "يعد بمقابل لا ينفّذه لاحقًا فيضعف علاقته المستقبلية بالزميل.",
            en: "Promises reciprocity he later fails to deliver, weakening the future relationship with the colleague.",
          },
        ],
        successCriteria: [
          { ar: "الطلب مرتبط بمصلحة حقيقية أو هدف مشترك واضح للطرف الآخر.", en: "The request is tied to a genuine benefit or clear shared goal for the other party." },
          { ar: "عرض المعاملة بالمثل نُفّذ فعليًا لا كوعد فارغ.", en: "The offered reciprocity was actually delivered, not left as an empty promise." },
        ],
        evidenceRequired: [
          { ar: "رسالة أو محضر يُظهر ربط الطلب بمصلحة الطرف الآخر ووفاء المتدرّب بالمقابل.", en: "A message or record showing the request tied to the other party's interest and the learner following through on the reciprocity." },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يبني مصداقيته مع زملاء الأقسام الأخرى عبر الوفاء المتكرر بوعوده الصغيرة قبل الحاجة إلى طلب كبير، فيصبح تعاونهم أسرع وأقل مقاومة عند الأزمات.",
          en: "Builds credibility with colleagues in other departments through repeatedly keeping small promises before a big ask is ever needed, so their cooperation comes faster and with less resistance during crises.",
        },
        observableBehaviors: [
          {
            ar: "يفي بوعد بسيط لزميل في قسم الموارد البشرية بإرسال مستند خلال ساعة كما وعد، شهرًا قبل أن يحتاج مساعدته في أزمة تسريح موظف.",
            en: "Keeps a small promise to a colleague in HR to send a document within an hour as promised, a month before needing that colleague's help in an urgent termination matter.",
          },
          {
            ar: "عندما يطلب مساعدة عاجلة لاحقًا، يستجيب الزميل بسرعة لأن سجل المتدرّب في الوفاء معروف.",
            en: "When he later needs urgent help, the colleague responds quickly because the learner's track record of following through is known.",
          },
        ],
        commonMistakes: [
          { ar: "يبني علاقة مع زميل واحد فقط ويهمل الشبكة الأوسع في القسم الآخر.", en: "Builds a relationship with only one colleague and neglects the wider network in the other department." },
          {
            ar: "يطلب معروفًا كبيرًا فجأة من زميل لم يبنِ معه أي رصيد ثقة سابق.",
            en: "Suddenly asks a big favor from a colleague with whom he has built no prior trust at all.",
          },
        ],
        successCriteria: [
          { ar: "سجل موثّق من وعود صغيرة تم الوفاء بها قبل أي طلب كبير.", en: "A documented record of small promises kept before any large ask." },
          { ar: "استجابة أسرع من المعتاد لطلب عاجل لاحق بفضل الرصيد المبني مسبقًا.", en: "Faster-than-usual response to a later urgent request thanks to previously built credibility." },
        ],
        evidenceRequired: [
          { ar: "سجلّ تفاعلات يُظهر وفاءً متكررًا بوعود صغيرة عبر الزمن.", en: "An interaction log showing repeated follow-through on small promises over time." },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يحشد أكثر من زميل من فرق مختلفة نحو هدف مشترك ذي مهلة ضاغطة، عبر توضيح المخاطر المشتركة لكل طرف بلغته الخاصة، وينسّق بينهم دون أن يملك سلطة تكليف أي منهم.",
          en: "Mobilizes several colleagues from different teams toward a shared goal under a tight deadline, by framing the shared stakes in each party's own terms, and coordinates them without holding assignment authority over any of them.",
        },
        observableBehaviors: [
          {
            ar: "قبل إغلاق صفقة استحواذ خلال أسبوع، يجمع زميلًا من الضرائب وآخر من الموارد البشرية وثالثًا من التسويق، ويشرح لكل منهم كيف يتأثر عمله تحديدًا بالتأخر.",
            en: "Before closing an acquisition deal within a week, brings together a colleague from tax, one from HR and one from marketing, explaining to each specifically how their own work is affected by delay.",
          },
          {
            ar: "ينسّق موعدًا مشتركًا أسبوعيًا قصيرًا بين الأطراف الثلاثة دون أن يكون مديرًا لأي منهم.",
            en: "Coordinates a short weekly joint check-in among the three parties without being anyone's manager.",
          },
        ],
        commonMistakes: [
          { ar: "يخاطب الجميع برسالة موحّدة واحدة تتجاهل اختلاف مصلحة كل فريق.", en: "Sends everyone the same generic message, ignoring each team's different stake." },
          {
            ar: "يتولى دور المدير الفعلي في الاجتماعات فيشعر الآخرون بأنه يتجاوز سلطته.",
            en: "Acts like the de facto manager in meetings, so others feel he is overstepping his authority.",
          },
        ],
        successCriteria: [
          { ar: "الأطراف المتعددة نسّقت فعليًا نحو المهلة المشتركة دون تدخل إداري رسمي.", en: "The multiple parties actually coordinated toward the shared deadline without formal managerial intervention." },
          { ar: "كل طرف فهم أثر التأخر على مصلحته الخاصة لا فقط على الهدف العام.", en: "Each party understood the effect of delay on their own interest, not only on the general goal." },
        ],
        evidenceRequired: [
          { ar: "محضر أو محاكاة يُظهر تنسيقًا ناجحًا بين أطراف متعددة دون سلطة رسمية.", en: "A record or simulation showing successful coordination among multiple parties without formal authority." },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يُعرَف داخل المكتب كمن يُلجَأ إليه لتحريك مبادرات تتطلب تعاون أقسام متعددة، ويقترح على الإدارة آلية تعاون معلنة بين الأقسام تقلّل الاعتماد على تدخل الإدارة العليا في كل مرة.",
          en: "Becomes known across the firm as the person others turn to for mobilizing initiatives that require cross-department cooperation, and proposes to management a declared cross-department collaboration mechanism that reduces reliance on senior management intervention every time.",
        },
        observableBehaviors: [
          {
            ar: "يُستدعى من أقسام مختلفة لقيادة مبادرة رقمنة الأرشيف رغم عدم وجود أي سلطة إدارية عليه فيها.",
            en: "Is called upon by different departments to lead an archive-digitization initiative despite having no managerial authority over any of them.",
          },
          {
            ar: "يقترح على الإدارة اتفاقية تعاون بين الأقسام (RACI مبسّط) توضح من يقرر ومن يُستشار في المبادرات المشتركة.",
            en: "Proposes to management a simplified cross-department collaboration agreement (a lightweight RACI) clarifying who decides and who is consulted on shared initiatives.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض الآلية دون إشراك رؤساء الأقسام في تصميمها فيقاومونها.",
            en: "Imposes the mechanism without involving department heads in designing it, so they resist it.",
          },
          { ar: "يقيس عدد المبادرات التي قادها فقط دون أثرها الفعلي على سرعة الإنجاز المشترك.", en: "Measures only the number of initiatives he led, not their actual effect on shared delivery speed." },
        ],
        successCriteria: [
          { ar: "آلية التعاون بين الأقسام معتمدة ومستخدمة فعليًا خارج نطاق مبادرة واحدة.", en: "The cross-department collaboration mechanism is adopted and actually used beyond a single initiative." },
          { ar: "تقرير يربط بين الآلية وتحسّن سرعة أو جودة المبادرات المشتركة بين الأقسام.", en: "A report links the mechanism to improved speed or quality of shared cross-department initiatives." },
        ],
        evidenceRequired: [
          { ar: "وثيقة الآلية المقترحة وعرضها على الإدارة.", en: "The document for the proposed mechanism and its presentation to management." },
          { ar: "تقرير دوري بأثرها على التعاون بين الأقسام.", en: "A periodic report on its impact on cross-department collaboration." },
        ],
      },
    ],
    sourceIds: ["src.smarter-collaboration", "src.governance-raci", "src.68-power-moves", "src.lawyers-ceo"],
    confidence: 0.78,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.informal-organization-navigation",
    domainId: "dom.teamwork-leadership",
    name: { ar: "قراءة التنظيم غير الرسمي", en: "Reading the Informal Organization" },
    synonyms: [
      "corridor conversations",
      "reading the room outside the meeting",
      "informal information channels",
      "before-the-meeting positioning",
      "قراءة أجواء المكتب",
    ],
    definition: {
      ar: "الانتباه إلى أن القرارات الحقيقية والثقة والمعلومات كثيرًا ما تتشكّل خارج جدول الأعمال الرسمي — في الممر، على مائدة غداء، أو في مناسبة قبل الاجتماع أو حوله — والاستعداد لهذه اللحظات غير الرسمية بوعي وقصد، بوصفها مهارة يمكن لأي شخص تعلّمها لا تعويضًا عن طبيعة شخصية معيّنة.",
      en: "Recognizing that real decisions, trust and information routinely take shape outside the formal agenda — in a corridor exchange, over a shared meal, at an event before or around the official meeting — and deliberately preparing for these informal moments as a learnable skill available to anyone, not a compensation for a particular personality type.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على قراءة التنظيم غير الرسمي.",
          en: "No evidence has been collected yet on the learner's ability to read the informal organization.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يتعامل مع اللحظات غير الرسمية كوقت ضائع أو ثرثرة لا صلة لها بالعمل، ويصل إلى الاجتماع مستعدًا فقط لبنوده المعلنة.",
          en: "Treats informal moments as wasted time or idle chatter with no bearing on work, and arrives at meetings prepared only for the stated agenda.",
        },
        observableBehaviors: [
          {
            ar: "يصل إلى اجتماع لجنة القبول في الوقت المحدد تمامًا ويتجنّب الحديث الجانبي قبل بدئه.",
            en: "Arrives at an admissions-committee meeting exactly on time and avoids any side conversation before it starts.",
          },
          {
            ar: "يغادر فور انتهاء الاجتماع الرسمي دون التوقف مع الزملاء الذين بقوا يتبادلون الانطباعات في الممر.",
            en: "Leaves the moment the formal meeting ends, without staying with colleagues who linger in the corridor exchanging real reactions.",
          },
        ],
        commonMistakes: [
          { ar: "يستبعد الحديث غير الرسمي كليًا معتبرًا إياه ثرثرة لا تستحق الانتباه.", en: "Filters out informal talk entirely, treating it as gossip not worth attention." },
          { ar: "يفاجأ بأن قرارًا أُعلن في الاجتماع كان قد حُسم فعليًا قبله بمحادثة جانبية لم يكن حاضرًا لها.", en: "Is surprised that a decision announced in the meeting had actually been settled beforehand in a side conversation he was not part of." },
        ],
        successCriteria: [
          { ar: "حضر الاجتماع مستعدًا لبنوده الرسمية.", en: "Attended the meeting prepared for its formal agenda." },
          { ar: "لم يتسبب غياب الوعي بالقنوات غير الرسمية بأي تعارض أو خطأ فعلي.", en: "The lack of awareness of informal channels did not itself cause any actual conflict or mistake." },
        ],
        evidenceRequired: [
          { ar: "ملاحظة أو سجلّ يُظهر حضورًا للاجتماع الرسمي دون أي تفاعل غير رسمي قبله أو بعده.", en: "An observation or record showing attendance at the formal meeting with no informal engagement before or after it." },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يلاحظ بعد وقوع الأمر أن معلومة أو قرارًا تشكّل خارج الاجتماع الرسمي، لكنه لا يبادر بعد إلى الاستعداد لتلك اللحظات أو استثمارها.",
          en: "Notices after the fact that information or a decision took shape outside the formal meeting, but does not yet proactively prepare for or make use of such moments.",
        },
        observableBehaviors: [
          {
            ar: "يلاحظ بعد الاجتماع أن زميلين اتفقا على نهج التفاوض أثناء استراحة القهوة، ويذكر ذلك لزميل آخر لاحقًا.",
            en: "Notices after the meeting that two colleagues had already agreed on the negotiation approach during the coffee break, and mentions it to another colleague afterward.",
          },
          {
            ar: "يقبل دعوة إلى غداء مع زملاء من قسم آخر لكنه يقضي الوقت في حديث عام دون الإصغاء لما يهمّهم فعليًا.",
            en: "Accepts an invitation to lunch with colleagues from another department, but spends the time on general chat rather than listening for what actually matters to them.",
          },
        ],
        commonMistakes: [
          { ar: "يلاحظ النمط لكنه يعتبره أمرًا لا يمكن تغييره بدل شيء يمكن الاستعداد له.", en: "Notices the pattern but treats it as unavoidable rather than something to prepare for." },
          { ar: "عند دعوته إلى لقاء غير رسمي، يتحدث عن أولوياته هو دون أن يصغي لما يشغل الآخرين.", en: "When invited to an informal setting, talks mostly about his own priorities without listening for what occupies the others." },
        ],
        successCriteria: [
          { ar: "يستطيع تحديد حالة واحدة على الأقل تشكّل فيها قرار خارج الاجتماع الرسمي.", en: "Can identify at least one instance where a decision formed outside the formal meeting." },
          { ar: "يشارك عند دعوته إلى لقاء غير رسمي بدل تجنّبه.", en: "Participates when invited to an informal setting instead of avoiding it." },
        ],
        evidenceRequired: [
          { ar: "ملاحظة أو تدوين يحدّد قناة معلومات غير رسمية أثّرت في نتيجة رسمية.", en: "A reflection or note identifying an informal information channel that shaped a formal outcome." },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يخلق أو ينضم عمدًا إلى فرص غير رسمية صغيرة — الوصول مبكرًا، البقاء بعد الاجتماع، قبول دعوة — بتوقيت مقصود مرتبط بقرار قادم يهمّه.",
          en: "Deliberately creates or joins small informal opportunities — arriving early, staying after, accepting an invitation — timed intentionally around an upcoming decision that matters to him.",
        },
        observableBehaviors: [
          {
            ar: "يصل قبل عشر دقائق من اجتماع الشركاء تحديدًا ليلتقط الحديث الجانبي عن استراتيجية التعامل مع موكّل كبير.",
            en: "Arrives ten minutes early to a partners' meeting specifically to catch the side conversation about strategy for a major client.",
          },
          {
            ar: "يقترح على زميل تناول القهوة قبل اجتماع لجنة مشتركة للتفاهم على الموقف مسبقًا.",
            en: "Suggests grabbing coffee with a colleague before a joint committee meeting, to align positions beforehand.",
          },
        ],
        commonMistakes: [
          { ar: "يبالغ في هندسة الحديث الجانبي فيبدو الأمر واضح الغرض والحساب للآخرين.", en: "Over-engineers the small talk, so it comes across as transparently calculated to others." },
          { ar: "يستخدم الوقت غير الرسمي للترويج لأولوياته فقط دون إصغاء حقيقي.", en: "Uses the informal time solely to promote his own agenda, without genuine listening." },
        ],
        successCriteria: [
          { ar: "خلق عمدًا فرصة غير رسمية واحدة على الأقل مرتبطة بقرار محدّد قادم.", en: "Deliberately created at least one informal opportunity connected to a specific upcoming decision." },
          { ar: "دخل الاجتماع الرسمي بمعلومة أو تفاهم اكتسبه بشكل غير رسمي.", en: "Entered the formal meeting with information or alignment gained informally." },
        ],
        evidenceRequired: [
          { ar: "سجلّ أو خطة تُظهر تفاعلًا غير رسمي مقصودًا قبل نقطة قرار محدّدة.", en: "A log or plan showing intentional informal engagement ahead of a specific decision point." },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يقرأ خريطة التأثير غير الرسمية — من يتحدث إلى من، ومن يملك تأثيرًا فعليًا على صانع القرار خارج التسلسل الرسمي — ويتموضع وفقها دون مناورة، وينقل ما يتعلّمه للفريق بدل احتكاره.",
          en: "Reads the informal influence map — who talks to whom, and who holds real influence over the decision-maker outside the formal hierarchy — and positions himself accordingly without manipulation, sharing what he learns with the team rather than hoarding it.",
        },
        observableBehaviors: [
          {
            ar: "يلاحظ أن رأي محامية مبتدئة يزن أكثر مما يوحي مسمّاها الوظيفي عند الشريك المشرف، فيستشيرها قبل رفع مقترح إليه.",
            en: "Notices that a junior associate's opinion carries more weight with the supervising partner than her title suggests, and consults her before a proposal goes up to him.",
          },
          {
            ar: "يشارك معلومة اكتسبها بشكل غير رسمي مع الفريق كاملًا بدل الاحتفاظ بها لنفسه.",
            en: "Shares information gained informally with the whole team afterward, rather than keeping it for personal advantage.",
          },
        ],
        commonMistakes: [
          { ar: "يستخدم معرفته بالشبكة غير الرسمية لتجاوز زملاء أو تهميشهم بدل بناء وضوح مشترك.", en: "Uses knowledge of the informal network to bypass or sideline colleagues instead of building shared clarity." },
          { ar: "يفترض أن خريطة التأثير ثابتة فلا يلاحظ تغيّرها بعد تبدّل في تركيبة الفريق.", en: "Assumes the influence map is static and fails to notice it has shifted after a change in team composition." },
        ],
        successCriteria: [
          { ar: "يحدّد بدقة علاقة تأثير غير رسمية واحدة على الأقل تختلف عن الهيكل التنظيمي المعلن.", en: "Accurately identifies at least one informal influence relationship distinct from the declared org chart." },
          { ar: "يستخدم تلك المعرفة بشفافية دون حرمان آخرين من معلومة ذات صلة بالقرار.", en: "Uses that knowledge transparently, without excluding others from decision-relevant information." },
        ],
        evidenceRequired: [
          { ar: "حالة موثّقة تُظهر تحديدًا دقيقًا للتأثير غير الرسمي واستخدامًا شفافًا له.", en: "A documented case showing accurate identification of informal influence and transparent use of it." },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني عادة شخصية ثابتة لخلق وصول إلى اللحظات غير الرسمية حتى لو لم تكن طبيعته الشخصية تميل إليها، ويحافظ عليها مع مجموعة متنوّعة من الزملاء لا فقط أصحاب النفوذ.",
          en: "Builds a sustained personal habit of deliberately creating access to informal moments even when his own temperament does not naturally lean that way, and maintains it across a varied group of colleagues, not only the influential ones.",
        },
        observableBehaviors: [
          {
            ar: "يخصّص لقاء قهوة غير رسميًا أسبوعيًا مع زميل مختلف كل مرة، خارج دائرة معارفه المعتادة.",
            en: "Sets a recurring weekly informal coffee with a different colleague each time, outside his usual circle.",
          },
          {
            ar: "بعد مناسبة عمل خارج جدول الأعمال، يتابع فرديًا مع من كان تفاعلهم مهمًا بدل ترك المعرفة تخبو.",
            en: "After an off-agenda work event, follows up individually with those the interaction mattered with, instead of letting the connection lapse.",
          },
        ],
        commonMistakes: [
          { ar: "يحوّل العادة إلى مهمة على قائمة إنجاز يحضرها دون تفاعل حقيقي يبني ثقة فعلية.", en: "Turns the habit into a checklist item, showing up without real engagement that builds actual trust." },
          { ar: "يقصر الجهد على من يملكون سلطة أو نفوذ ويهمل الزملاء الأقل ظهورًا.", en: "Limits the effort to those with power or influence and neglects less visible colleagues." },
        ],
        successCriteria: [
          { ar: "نمط موثّق ومستمر من التفاعل غير الرسمي عبر مستويات وأقسام مختلفة.", en: "A sustained, documented pattern of informal engagement across different levels and departments." },
          { ar: "يصفه الزملاء بأنه شخص يستحق إشراكه في اللحظات غير الرسمية، لا مجرد حاضر فيها.", en: "Colleagues describe him as someone worth including in informal moments, not merely present in them." },
        ],
        evidenceRequired: [
          { ar: "سجلّ ممتد عبر عدة أشهر يُظهر تفاعلًا غير رسمي مستدامًا مع زملاء متنوّعين.", en: "A record spanning several months showing sustained informal engagement with varied colleagues." },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يدرّب زملاءه، وخصوصًا الأكثر ميلًا للانطواء أو الجدد، على الاستعداد للحظات غير الرسمية واستثمارها، ويقترح ممارسات مكتبية توسّع الوصول إليها بدل حصرها بمن يملكون شبكة علاقات جاهزة، ويقيس أثر ذلك.",
          en: "Coaches colleagues, especially more introverted or newer ones, on preparing for and making use of informal moments, and proposes firm practices that widen access to them instead of limiting them to those who already have a ready-made network, measuring the effect.",
        },
        observableBehaviors: [
          {
            ar: "ينظّم جلسة قصيرة للمتدربين الجدد عن كيفية تحضير نقاط حديث بسيطة قبل تجمّع مكتبي غير رسمي.",
            en: "Runs a short session for new trainees on preparing a few simple talking points before an informal office gathering.",
          },
          {
            ar: "يقترح على الإدارة تخصيص وقت غير مبرمج قبل اجتماعات اللجان حتى يحصل الموظفون الجدد بلا شبكة علاقات جاهزة على فرصة وصول مماثلة.",
            en: "Proposes to management that unstructured time be built in before committee meetings, so new staff without an existing network get comparable access.",
          },
        ],
        commonMistakes: [
          { ar: "يصمّم الممارسة على مقاس تفضيلاته الشخصية دون مراعاة اختلاف مستوى الارتياح لدى الآخرين.", en: "Designs the practice around his own preferences without accounting for others' different comfort levels." },
          { ar: "يقيس عدد الحاضرين في المناسبات غير الرسمية بدل قياس ما إذا تحسّن وصول الزملاء الجدد إلى المعلومة فعليًا.", en: "Measures attendance at informal events rather than whether newer colleagues actually gained better access to information." },
        ],
        successCriteria: [
          { ar: "ممارسة مقترحة معتمدة ومستخدمة فعليًا تقلّص الفجوة بين ذوي الشبكة الجاهزة وغيرهم.", en: "A proposed practice is adopted and actually used, narrowing the gap between those with a ready network and those without." },
          { ar: "تدريب يُظهر تحسّنًا ملموسًا في قدرة من دُرّبوا على الاستعداد للحظات غير الرسمية.", en: "Coaching shows a measurable improvement in mentees' ability to prepare for informal moments." },
        ],
        evidenceRequired: [
          { ar: "وثيقة الممارسة المقترحة أو محضر جلسات التدريب.", en: "The document for the proposed practice or a record of the coaching sessions." },
          { ar: "تقرير دوري بأثرها على عدالة الوصول إلى المعلومة غير الرسمية.", en: "A periodic report on its effect on equitable access to informal information." },
        ],
      },
    ],
    sourceIds: ["src.introverted-leader"],
    confidence: 0.72,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.equitable-work-access",
    domainId: "dom.teamwork-leadership",
    name: { ar: "التوزيع العادل لفرص العمل عالي القيمة", en: "Equitable Access to High-Value Work" },
    synonyms: [
      "fair distribution of stretch assignments",
      "bias in visible work allocation",
      "equitable mentoring access",
      "who gets picked for the good work",
      "عدالة توزيع الفرص",
    ],
    definition: {
      ar: "ملاحظة أن تركيبة الفريق قد تبدو متنوّعة ومتوازنة على الورق بينما لا تزال المهامّ الظاهرة والمُكسِبة للمهارات والفرص عالية القيمة تذهب بشكل غير متناسب لمن يشبهون صاحب القرار، والتصحيح المتعمّد لهذا النمط عند توزيع المهامّ الصعبة والمهامّ الظاهرة وفرص التوجيه.",
      en: "Noticing that a team's composition can look diverse and balanced on paper while the visible, skill-building, high-value work still goes disproportionately to people who resemble whoever is choosing, and deliberately correcting for that pattern when handing out stretch assignments, visible tasks and mentoring opportunities.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على التوزيع العادل لفرص العمل عالي القيمة.",
          en: "No evidence has been collected yet on the learner's ability to allocate high-value work equitably.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يسند المهامّ الظاهرة والفرص التطويرية لمن يخطر على باله أولًا أو لمن يرتاح إليه أكثر، دون ملاحظة أي نمط متكرر في اختياراته.",
          en: "Hands visible tasks and developmental opportunities to whoever comes to mind first or feels most comfortable, without noticing any recurring pattern in his choices.",
        },
        observableBehaviors: [
          {
            ar: "يسند تحضير جلسة أمام موكّل مهم مرارًا لنفس المحاميَين اللذين يشتركان معه في خلفية مشابهة، دون أن يلاحظ التكرار.",
            en: "Repeatedly assigns preparation for an important client hearing to the same two associates who happen to share his own background, without registering the repetition.",
          },
          {
            ar: "عندما يُسأل عن سبب عدم إسناد مهمة بارزة لمحامية معيّنة، يجيب \"لم يخطر ببالي\" دون أي تقييم فعلي.",
            en: "When asked why a particular associate was not given a high-profile task, answers 'she just didn't come to mind,' with no actual assessment behind it.",
          },
        ],
        commonMistakes: [
          { ar: "يفترض أن تنوّع تركيبة الفريق يعني تلقائيًا عدالة توزيع الفرص الفعلية.", en: "Assumes the team's diverse composition automatically means the real opportunities are being distributed fairly." },
          { ar: "ينفي وجود أي نمط دون أن يراجع فعليًا من حصل على أي مهمة خلال الفترة الماضية.", en: "Denies any pattern exists without actually reviewing who received which assignments over the recent period." },
        ],
        successCriteria: [
          { ar: "أُنجزت المهامّ الموزّعة دون تقصير ظاهر.", en: "The assigned tasks were completed without any apparent shortfall." },
          { ar: "لم يستبعد أحدًا عمدًا أو بقصد مسبق.", en: "Did not deliberately or intentionally exclude anyone." },
        ],
        evidenceRequired: [
          { ar: "سجلّ إسناد مهامّ عبر فترة يُظهر تكرار اختيار المجموعة نفسها دون أي تحليل مصاحب.", en: "An assignment log over a period showing repeated selection of the same narrow group with no accompanying analysis." },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يلاحظ، عند التوجيه إليه أو عند مراجعة قائمة، أن الفرص انحازت نحو مجموعة متشابهة، لكنه لا يبادر بعد إلى المراجعة أو التصحيح من تلقاء نفسه.",
          en: "Notices, when prompted or after reviewing a list, that opportunities have skewed toward a similar group, but does not yet proactively review or self-correct without being prompted.",
        },
        observableBehaviors: [
          {
            ar: "عند مراجعة سجلّ الفصل بعد سؤال من إدارة الموارد البشرية، يلاحظ أن أربعًا من خمس عروض أمام الموكّلين ذهبت لمحامين رغم أن نصف الفريق من المحاميات.",
            en: "Reviewing a quarter's log after HR raises the question, notices that four out of five client presentations went to male lawyers though half the team is women.",
          },
          {
            ar: "يقول \"لم أنتبه لهذا سابقًا\" عندما يُعرض عليه النمط، دون أن يتصرف بعد بناءً عليه.",
            en: "Says 'I hadn't noticed this before' when shown the pattern, but does not yet act on it.",
          },
        ],
        commonMistakes: [
          { ar: "يلاحظ النمط مرة واحدة دون أن يبني عادة لمراجعته لاحقًا.", en: "Notices the pattern once but does not build a habit of checking it going forward." },
          { ar: "يعزو النمط بالكامل لكون البعض \"طلب\" المهمة بدل من عُرضت عليه أصلًا.", en: "Attributes the pattern entirely to who 'asked' for the work rather than who was offered it in the first place." },
        ],
        successCriteria: [
          { ar: "يستطيع تحديد حالة واحدة على الأقل تم فيها رصد الانحياز بعد المراجعة.", en: "Can name at least one instance where the skew was identified upon review." },
          { ar: "لا يقلّل من شأن النتيجة أو ينكرها عند عرض الدليل عليه.", en: "Does not dismiss or minimize the finding when shown the evidence." },
        ],
        evidenceRequired: [
          { ar: "سجلّ إسناد تمت مراجعته مع إقرار المتدرّب بوجود انحياز محدّد فيه.", en: "A reviewed assignment log with the learner's acknowledgment of an identified imbalance in it." },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يراجع نمط توزيعه للمهامّ بمبادرة منه قبل أن يُشار إليه، ويجري تصحيحًا واحدًا على الأقل بشكل متعمّد — عرض مهمة صعبة على شخص خارج الدائرة المعتادة.",
          en: "Proactively reviews his own assignment pattern before it is pointed out, and makes at least one deliberate correction — offering a stretch task to someone outside the usual circle.",
        },
        observableBehaviors: [
          {
            ar: "قبل إسناد قيادة مفاوضة عقد قادمة، يراجع من تولّى أدوارًا ظاهرة مماثلة خلال الأشهر الستة الماضية ويعرضها عمدًا على محامية كفؤة لم تحظَ بالفرصة بعد.",
            en: "Before assigning the lead role on an upcoming contract negotiation, checks who has had similar visible roles in the past six months and deliberately offers it to a capable associate who hasn't had the chance.",
          },
          {
            ar: "يحتفظ بملاحظة بسيطة عن من حصل على أي مهامّ ظاهرة، ليراجع بها عاداته.",
            en: "Keeps a simple running note of who has received which visible tasks, to check against his own habits.",
          },
        ],
        commonMistakes: [
          { ar: "يجري تصحيحًا رمزيًا واحدًا ويعتبر المسألة محلولة بدل الاستمرار في العادة.", en: "Makes a single symbolic correction and considers the issue solved rather than sustaining the habit." },
          { ar: "يسند المهمة الصعبة لشخص جديد لكن بدعم أقل من المعتاد، فيهيّئه للفشل لا للنجاح.", en: "Assigns the stretch task to a new person but with less support than usual, setting them up to struggle rather than succeed." },
        ],
        successCriteria: [
          { ar: "حالة موثّقة واحدة على الأقل من عرض مهمة عالية القيمة خارج النمط المعتاد بمبادرة ذاتية.", en: "At least one documented instance of proactively offering a high-value task outside the usual pattern." },
          { ar: "حصل من مُنح الفرصة على نفس مستوى الدعم والتوجيه الذي يحصل عليه أي شخص آخر.", en: "The person given the opportunity received the same level of support and clear briefing as anyone else would." },
        ],
        evidenceRequired: [
          { ar: "سجلّ يُظهر تصحيحًا استباقيًا ودليلًا على أن المهمة أُعدّت للنجاح لا كإجراء رمزي فقط.", en: "A record showing a proactive correction and evidence the assignment was set up to succeed, not merely symbolic." },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يبني عادة أو أداة لتتبّع من يحصل على المهامّ الظاهرة وفرص التوجيه، ويستشيرها فعليًا قبل اتخاذ القرار، ويشرح أساس اختياره عند سؤاله بدل الاكتفاء بالراحة الشخصية.",
          en: "Builds a habit or tool for tracking who gets access to visible work, stretch assignments and mentoring, actually consults it before deciding, and explains the basis for his choices when asked, rather than defaulting to personal comfort.",
        },
        observableBehaviors: [
          {
            ar: "يحتفظ بسجلّ فصلي بسيط لآخر الفرص عالية الظهور التي عُرضت، ويراجعه قبل إسناد الفرصة التالية.",
            en: "Maintains a simple quarterly log of the last several high-visibility opportunities offered, and consults it before assigning the next one.",
          },
          {
            ar: "عند سؤاله عن سبب اختيار محامٍ معيّن لمقعد التوجيه، يقدّم إجابة مرتبطة باحتياج تطويري أو جهوزية ظاهرة، لا مجرد الألفة.",
            en: "When asked why a particular associate was chosen for a mentoring slot, gives a reasoned answer tied to a development need or demonstrated readiness, not simple familiarity.",
          },
        ],
        commonMistakes: [
          { ar: "يبني أداة التتبّع لكن لا يستشيرها فعليًا قبل القرار فتتحوّل إلى إجراء شكلي.", en: "Builds the tracking tool but does not actually consult it before deciding, so it becomes symbolic paperwork." },
          { ar: "يستخدم الأداة لتبرير قراراته بعد اتخاذها بدل الاستعانة بها لتوجيهها مسبقًا.", en: "Uses the tool to justify decisions after the fact rather than to inform them beforehand." },
        ],
        successCriteria: [
          { ar: "عادة تتبّع فعلية قائمة ويُستشهد بها فعليًا قبل قرارات الإسناد.", en: "A working tracking habit is in place and demonstrably consulted before assignment decisions." },
          { ar: "أساس الاختيار قابل للشرح ومرتبط بالتطوير أو الجدارة لا بالألفة أو الراحة.", en: "The basis for choices is explainable and tied to development or merit rather than comfort or familiarity." },
        ],
        evidenceRequired: [
          { ar: "سجلّ متابَع وحالة واحدة على الأقل شُرح فيها القرار بالاستناد إليه.", en: "A maintained log plus at least one instance of a decision explained by reference to it." },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يوسّع الممارسة إلى ما هو أبعد من قراراته الفردية ليشكّل كيفية توزيع الفريق ككل للمهامّ الظاهرة — يضع معايير معلنة للفرص، ويناوب من يتصدّر الأدوار البارزة، ويراجع النمط على مستوى الفريق عبر الزمن لا اختياراته وحدها.",
          en: "Widens the practice beyond his own individual choices to shape how the team as a whole allocates visible work — sets explicit criteria for stretch opportunities, rotates who takes lead roles, and reviews the pattern across the team over time, not only his own decisions.",
        },
        observableBehaviors: [
          {
            ar: "يستحدث نظام مناوبة بسيطًا لمن يقود الجلسات أمام الموكّلين في فريق التقاضي، ويراجَع كل فصل للتأكد من توازنه.",
            en: "Introduces a simple rotation system for who leads client-facing hearings across the litigation team, checked quarterly for balance.",
          },
          {
            ar: "يضع معايير واضحة ومعلنة لمن يُرشَّح لبرنامج التوجيه، بدل الاعتماد على \"من يخطر بالبال\" كما كان سابقًا.",
            en: "Sets and shares explicit criteria for who is considered for a mentoring program, replacing the previous informal 'whoever comes to mind.'",
          },
        ],
        commonMistakes: [
          { ar: "يفرض مناوبة جامدة تتجاهل فروقًا حقيقية في الجهوزية، فيخلق انحيازًا جديدًا.", en: "Imposes a rigid rotation that ignores genuine differences in readiness, creating a new unfairness." },
          { ar: "يضع معايير ثم لا يراجع أبدًا ما إذا كانت تُطبَّق فعليًا.", en: "Sets criteria but never revisits whether they are actually being followed." },
        ],
        successCriteria: [
          { ar: "نظام على مستوى الفريق لتوزيع المهامّ الظاهرة قائم ومُستخدَم، لا مجرد عادة فردية.", en: "A team-level system for allocating visible work exists and is used, not just an individual habit." },
          { ar: "المراجعة الدورية تُظهر أن التوزيع أصبح أقل انحيازًا بشكل قابل للقياس.", en: "Periodic review shows the distribution has become measurably less skewed." },
        ],
        evidenceRequired: [
          { ar: "توثيق النظام على مستوى الفريق ومقارنة بين توزيع الفرص قبله وبعده.", en: "Documentation of the team-level system and a before/after comparison of assignment distribution." },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يدرّب مشرفين وشركاء آخرين على ملاحظة هذا النمط وتصحيحه، ويقترح على إدارة المكتب ممارسات معلنة لتوزيع المهامّ عالية القيمة، ويقيس أثرها على تطوير واستبقاء من كانوا يحصلون على فرص أقل.",
          en: "Coaches other supervisors and partners on recognizing and correcting this pattern, proposes firm-level practices for allocating high-value work, and measures their effect on the development and retention of those who previously had less access.",
        },
        observableBehaviors: [
          {
            ar: "ينظّم جلسة قصيرة لرؤساء فرق آخرين عن كيفية مراجعة أنماط الإسناد لديهم بحثًا عن انحياز.",
            en: "Runs a short session for other team leads on how to check their own assignment patterns for skew.",
          },
          {
            ar: "يقترح على إدارة المكتب ممارسة موحّدة لتسجيل ومراجعة من يحصل على المهامّ عالية الظهور أمام الموكّلين على مستوى المكتب كاملًا.",
            en: "Proposes to firm management a standard practice for logging and periodically reviewing who receives high-visibility client work across the whole firm.",
          },
        ],
        commonMistakes: [
          { ar: "يقدّم الممارسة كإجراء امتثال شكلي بدل مساعدة الرؤساء الآخرين على فهم النمط فعليًا.", en: "Presents the practice as a compliance checkbox rather than helping other leads genuinely understand the underlying pattern." },
          { ar: "يقيس مدى تبنّي أداة التتبّع بدل قياس ما إذا تغيّر التوزيع الفعلي للفرص.", en: "Measures adoption of the tracking tool rather than whether the actual distribution of opportunity has changed." },
        ],
        successCriteria: [
          { ar: "ممارسة على مستوى المكتب معتمدة ومستخدمة من فرق أخرى لا فريقه وحده.", en: "A firm-level practice is adopted and used by other teams, not only the learner's own." },
          { ar: "تقرير يربط الممارسة بتحسّن قابل للقياس في تنوّع من يحصل على الفرص عالية القيمة.", en: "A report links the practice to a measurable improvement in the range of people receiving high-value opportunities." },
        ],
        evidenceRequired: [
          { ar: "وثيقة الممارسة المقترحة على مستوى المكتب وتقرير دوري بأثرها على عدالة توزيع الفرص.", en: "Documentation of the proposed firm-level practice and a periodic report on its effect on the equitable distribution of opportunity." },
        ],
      },
    ],
    sourceIds: ["src.smarter-collaboration"],
    confidence: 0.75,
    reviewStatus: "ai_suggested",
  },
];
