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
];
