import type { SkillDef } from "../types";

// -----------------------------------------------------------------------------
// dom.negotiation-influence — five additional skills
//
// Companion file to skills.ts. Does not redefine skill.negotiation, which
// already exists in skills.ts. Matches its depth: 7 mastery levels (0-6),
// each with definition / observableBehaviors / commonMistakes /
// successCriteria / evidenceRequired, bilingual (Arabic primary), grounded in
// concrete Arab-market legal scenarios.
// -----------------------------------------------------------------------------

export const NEGOTIATION_INFLUENCE_SKILLS: SkillDef[] = [
  {
    id: "skill.persuasive-argument",
    domainId: "dom.negotiation-influence",
    name: { ar: "الحجة المقنعة", en: "Persuasive Argument" },
    synonyms: [
      "case building",
      "argumentation",
      "reasoned advocacy",
      "structuring a position",
      "بناء الحجة",
    ],
    definition: {
      ar: "بناء موقف مقنع في التفاوض يستند إلى مصلحة الموكّل الفعلية وأدلة داعمة، بدل الاكتفاء بذكر النتيجة المطلوبة.",
      en: "Building a persuasive negotiating position that is grounded in the client's actual interest and supporting evidence, rather than simply asserting the desired outcome.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على بناء حجة مقنعة.",
          en: "No evidence has been collected yet on the learner's ability to build a persuasive argument.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يطرح موقف الموكّل كنتيجة جاهزة دون شرح الأسباب التي تدعمها.",
          en: "Presents the client's position as a ready-made conclusion without explaining the reasons behind it.",
        },
        observableBehaviors: [
          { ar: "يذكر مطلب الموكّل بجملة واحدة واضحة.", en: "States the client's demand in one clear sentence." },
          { ar: "يدوّن حجج الطرف الآخر كما وردت.", en: "Notes down the other side's arguments as presented." },
        ],
        commonMistakes: [
          {
            ar: "يكرّر المطلب نفسه بصوت أعلى حين يُرفض بدل تقديم سبب.",
            en: "Repeats the same demand more forcefully when refused, instead of offering a reason.",
          },
          { ar: "يخلط بين رأيه الشخصي وموقف الموكّل.", en: "Blurs his personal opinion with the client's position." },
        ],
        successCriteria: [
          { ar: "الموقف المطروح مطابق لتعليمات الموكّل.", en: "The position presented matches the client's instructions." },
          { ar: "حجج الطرف الآخر مسجّلة بدقة.", en: "The other side's arguments are accurately recorded." },
        ],
        evidenceRequired: [
          { ar: "محضر أو ملاحظات من جلسة عرض الموقف.", en: "A record or notes from a position-presentation session." },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يسند كل مطلب إلى سبب واحد محدد مستمد من الوقائع أو العقد.",
          en: "Grounds every demand in a specific reason drawn from the facts or the contract.",
        },
        observableBehaviors: [
          {
            ar: "يربط طلب تخفيض الإيجار برقم من السوق أو بند تعاقدي، عند تجديد عقد إيجار مكتب تجاري مثلاً.",
            en: "Links a rent-reduction request to a market figure or a contract clause, in a commercial office lease renewal for instance.",
          },
          { ar: "يعدّ قائمة أسباب قبل الجلسة لكل بند خلافي.", en: "Prepares a list of reasons before the session for each disputed term." },
        ],
        commonMistakes: [
          { ar: "يستشهد بمعلومة غير موثّقة يسهل دحضها.", en: "Cites an undocumented fact that is easy to refute." },
          {
            ar: "يقدّم سببًا عامًا صالحًا لأي نزاع لا لهذا الملف تحديدًا.",
            en: "Offers a generic reason that could fit any dispute, not this specific matter.",
          },
        ],
        successCriteria: [
          { ar: "كل مطلب مرتبط بسبب واحد على الأقل قابل للتحقق.", en: "Every demand is tied to at least one verifiable reason." },
          { ar: "الأسباب المذكورة خاصة بوقائع الملف.", en: "The reasons cited are specific to the facts of the matter." },
        ],
        evidenceRequired: [
          { ar: "ورقة تحضير تربط كل مطلب بسببه.", en: "A preparation sheet linking each demand to its reason." },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يبني حجّة مركّبة: الطلب، السبب، الدليل، ورد متوقّع على اعتراض الطرف الآخر.",
          en: "Builds a structured argument: claim, reason, evidence, and an anticipated response to the other side's likely objection.",
        },
        observableBehaviors: [
          {
            ar: "يقدّم دليلاً ملموسًا، كتقرير تقييم عقاري أو عقد إيجار سابق، يدعم طلب تجديد الإيجار بشروط أفضل.",
            en: "Presents concrete evidence, such as a property valuation report or a prior lease, supporting a renewal request on better terms.",
          },
          {
            ar: "يجهّز ردًا جاهزًا على أقوى اعتراض متوقّع من الطرف الآخر.",
            en: "Prepares a ready response to the other side's strongest likely objection.",
          },
        ],
        commonMistakes: [
          { ar: "يفاجأ بالاعتراض الأول فيرتجل ردًا ضعيفًا.", en: "Is caught off guard by the first objection and improvises a weak response." },
          {
            ar: "يكدّس أدلة كثيرة فتضيع الحجة الأقوى بينها.",
            en: "Piles on too much evidence, burying the strongest argument among them.",
          },
        ],
        successCriteria: [
          { ar: "الحجة تتضمن دليلاً واحدًا موثّقًا على الأقل لكل بند.", en: "The argument includes at least one documented piece of evidence per term." },
          { ar: "الرد على أقوى اعتراض محضّر مسبقًا.", en: "The response to the strongest objection is prepared in advance." },
        ],
        evidenceRequired: [
          { ar: "ملف حجج مكتوب مع الأدلة المرفقة.", en: "A written argument file with attached evidence." },
          { ar: "محضر جلسة يظهر الرد على اعتراض فعلي.", en: "A session record showing the response to an actual objection." },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يصوغ الحجّة بلغة تخاطب مصلحة الطرف الآخر أيضًا، ويعدّل صياغتها تحت الاعتراض دون التخلي عن جوهر الموقف.",
          en: "Frames the argument in language that speaks to the other side's interest as well, and adjusts its wording under pushback without abandoning the substance of the position.",
        },
        observableBehaviors: [
          {
            ar: "يعيد صياغة طلب تخفيض الإيجار بما يُظهر فائدة للمالك، كضمان استمرار مستأجر موثوق بدل بحث عن آخر.",
            en: "Reframes the rent-reduction request to show a benefit to the landlord, such as securing a reliable tenant instead of a vacancy search.",
          },
          {
            ar: "يميّز بين تعديل الصياغة والتنازل عن جوهر المطلب.",
            en: "Distinguishes between adjusting the wording and conceding the substance of the demand.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتنازل عن جوهر الحجة لمجرد أن الطرف الآخر رفع صوته.",
            en: "Concedes the substance of the argument merely because the other side raised its voice.",
          },
          {
            ar: "يتجاهل مصلحة الطرف الآخر فتُقرأ حجته كإملاء لا إقناع.",
            en: "Ignores the other side's interest, so the argument reads as dictation rather than persuasion.",
          },
        ],
        successCriteria: [
          { ar: "الحجة المعدّلة تحافظ على جوهر مطلب الموكّل.", en: "The revised argument preserves the substance of the client's demand." },
          { ar: "الطرف الآخر يستجيب للحجة لا يتجاهلها.", en: "The other side engages with the argument rather than dismissing it." },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة أو محضر جلسة يُظهر تعديل الحجة تحت الضغط.",
            en: "A simulation or session record showing the argument adjusted under pressure.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يقود بناء الحجّة الجماعية عبر عدة بنود خلافية، ويستبعد الحجج الضعيفة ليبقى تركيز الفريق على الأقوى.",
          en: "Leads the team's collective case-building across multiple disputed terms, discarding weak arguments so the team's focus stays on the strongest ones.",
        },
        observableBehaviors: [
          { ar: "يراجع حجج الفريق قبل الجلسة ويستبعد ما يسهل دحضه.", en: "Reviews the team's arguments before the session and drops any that are easily refuted." },
          {
            ar: "يوزّع بنود الحجة على أعضاء الفريق بحسب خبرة كل منهم.",
            en: "Assigns parts of the argument to team members according to each one's expertise.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترك كل عضو يطرح حججه دون تنسيق فتتكرر أو تتناقض.",
            en: "Lets each team member present arguments without coordination, so they repeat or contradict each other.",
          },
          { ar: "يتمسك بحجة قديمة أثبتت الجلسات السابقة ضعفها.", en: "Clings to an old argument that prior sessions have shown to be weak." },
        ],
        successCriteria: [
          { ar: "حجج الفريق متّسقة ومرتّبة حسب القوة.", en: "The team's arguments are consistent and ordered by strength." },
          { ar: "لا تكرار أو تناقض بين المتحدّثين.", en: "No repetition or contradiction among speakers." },
        ],
        evidenceRequired: [
          { ar: "خطة الحجج الموزّعة على الفريق.", en: "The argument plan distributed across the team." },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع منهجية لبناء الحجج في المكتب، يدرّب عليها المحامين، ويقيس نتائج الإقناع في الملفات المغلقة.",
          en: "Establishes a firm-wide methodology for building arguments, trains lawyers in it, and measures persuasion outcomes on closed matters.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد نموذجًا موحّدًا لتحضير الحجج قبل كل تفاوض هام.",
            en: "Adopts a standard template for preparing arguments before every significant negotiation.",
          },
          {
            ar: "ينشئ مكتبة داخلية بالحجج الناجحة السابقة لإعادة استخدامها.",
            en: "Builds an internal library of past successful arguments for reuse.",
          },
        ],
        commonMistakes: [
          { ar: "يفرض النموذج بلا أمثلة عملية فيُهمَل.", en: "Imposes the template without practical examples, so it is ignored." },
          { ar: "يقيس كثرة الحجج المطروحة لا نسبة قبولها.", en: "Measures how many arguments are raised rather than their acceptance rate." },
        ],
        successCriteria: [
          {
            ar: "نسبة قبول البنود المتنازع عليها مقاسة وموثّقة.",
            en: "The acceptance rate of contested terms is measured and documented.",
          },
          { ar: "مكتبة الحجج مستخدمة فعليًا من فريق المكتب.", en: "The argument library is actively used by the firm's team." },
        ],
        evidenceRequired: [
          { ar: "المنهجية المعتمدة ومكتبة الحجج.", en: "The adopted methodology and the argument library." },
          { ar: "تقرير سنوي عن نسبة قبول الحجج.", en: "An annual report on argument acceptance rates." },
        ],
      },
    ],
    sourceIds: ["src.how-to-argue-and-win", "src.making-your-case", "src.tools-of-argument"],
    confidence: 0.8,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.negotiation"],
  },
  {
    id: "skill.reading-the-counterpart",
    domainId: "dom.negotiation-influence",
    name: { ar: "قراءة الطرف الآخر", en: "Reading the Counterpart" },
    synonyms: [
      "counterpart analysis",
      "interest mapping",
      "reading the other side",
      "style adaptation",
      "تحليل الطرف المقابل",
    ],
    definition: {
      ar: "قراءة مصالح الطرف الآخر وأولوياته وأسلوبه التفاوضي الحقيقي وراء ما يُعلنه، وتكييف الأسلوب وفقًا لذلك.",
      en: "Reading the other side's real interests, priorities and negotiating style behind what they state, and adapting one's approach accordingly.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على قراءة الطرف الآخر.",
          en: "No evidence has been collected yet on the learner's ability to read the counterpart.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يسجّل ما يقوله الطرف الآخر حرفيًا دون تمييزه عن مصلحته الفعلية.",
          en: "Records what the other side says literally, without distinguishing it from their actual interest.",
        },
        observableBehaviors: [
          { ar: "يدوّن العرض المعلن للطرف الآخر بدقة.", en: "Notes the other side's stated offer accurately." },
          { ar: "يلاحظ نبرة الطرف الآخر العامة، متعاونة أو متشدّدة.", en: "Notices the other side's general tone, cooperative or hard-line." },
        ],
        commonMistakes: [
          { ar: "يفترض أن الموقف المعلن هو المصلحة الحقيقية.", en: "Assumes the stated position is the real interest." },
          { ar: "يتجاهل لغة الجسد والتردد في كلام الطرف الآخر.", en: "Ignores body language and hesitation in the other side's speech." },
        ],
        successCriteria: [
          { ar: "الموقف المعلن للطرف الآخر مسجَّل بدقة.", en: "The other side's stated position is accurately recorded." },
          { ar: "نبرة الجلسة العامة موصوفة في الملاحظات.", en: "The session's general tone is described in the notes." },
        ],
        evidenceRequired: [
          { ar: "ملاحظات جلسة تفاوض أولى.", en: "Notes from an initial negotiation session." },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يطرح أسئلة استكشافية لمعرفة صلاحية محدّثه وضغوطه قبل أن يقرأ مصلحته الحقيقية.",
          en: "Asks exploratory questions to learn the other side's authority and pressures before reading their real interest.",
        },
        observableBehaviors: [
          {
            ar: "يسأل، في نزاع دفعة مستحقة لمقاول فرعي، عمّن يملك القرار النهائي لدى الشركة المقاولة الرئيسية.",
            en: "Asks, in a subcontractor payment dispute, who holds the final decision at the main contracting company.",
          },
          { ar: "يستفسر عن الجدول الزمني الذي يعمل الطرف الآخر تحت ضغطه.", en: "Asks about the timeline the other side is working under pressure from." },
        ],
        commonMistakes: [
          {
            ar: "يفاوض مع من لا يملك صلاحية التوقيع دون أن يكتشف ذلك.",
            en: "Negotiates with someone who lacks signing authority without discovering this.",
          },
          {
            ar: "يسأل أسئلة مباشرة تكشف شكوكه فيصبح الطرف الآخر أكثر حذرًا.",
            en: "Asks overly direct questions that reveal his suspicion, making the other side more guarded.",
          },
        ],
        successCriteria: [
          { ar: "صلاحية محدّثه في الجهة المقابلة معروفة.", en: "The counterpart's decision-making authority is known." },
          {
            ar: "ضغط الوقت أو الظرف الذي يعمل تحته الطرف الآخر مرصود.",
            en: "The time pressure or circumstance the other side is working under is identified.",
          },
        ],
        evidenceRequired: [
          { ar: "ملاحظات تتضمن صلاحية المحدّث وضغوطه.", en: "Notes recording the counterpart's authority and pressures." },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يميّز بين موقف الطرف الآخر المعلن ومصلحته الكامنة، ويكيّف أسلوبه بحسب طبيعة تلك المصلحة.",
          en: "Distinguishes the other side's stated position from its underlying interest, and adapts his approach to the nature of that interest.",
        },
        observableBehaviors: [
          {
            ar: "يحدّد أن إصرار المقاول الرئيسي على تأخير الدفعة مرتبط بحاجته لإغلاق حساباته قبل نهاية السنة المالية، لا برفضه الجوهري للمبلغ.",
            en: "Identifies that the main contractor's insistence on delaying payment is tied to a need to close its books before the fiscal year-end, not a substantive rejection of the amount.",
          },
          {
            ar: "يبطئ وتيرة الجلسة مع طرف يميل للتروّي، ويختصر مع من يميل للحسم السريع.",
            en: "Slows the pace with a deliberative counterpart, and moves faster with one who favours quick decisions.",
          },
        ],
        commonMistakes: [
          { ar: "يعامل كل الأطراف بالأسلوب نفسه بصرف النظر عن طباعهم.", en: "Treats every counterpart the same way regardless of their style." },
          {
            ar: "يخلط بين تكتيك مؤقت للطرف الآخر ومصلحته الدائمة.",
            en: "Confuses the other side's temporary tactic with their lasting interest.",
          },
        ],
        successCriteria: [
          { ar: "مصلحة كامنة واحدة على الأقل موثّقة بدليل من الجلسة.", en: "At least one underlying interest is documented with evidence from the session." },
          {
            ar: "أسلوب التفاوض المعتمد يلائم طبع الطرف الآخر الملحوظ.",
            en: "The negotiating approach used matches the other side's observed style.",
          },
        ],
        evidenceRequired: [
          { ar: "تحليل مكتوب لمصلحة الطرف الآخر بعد الجلسة.", en: "A written post-session analysis of the other side's interest." },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يرصد تحوّلات موقف الطرف الآخر أثناء الجلسة نفسها ويختبر فرضياته عن مصلحته بأسئلة موجّهة بدل افتراضها.",
          en: "Tracks shifts in the other side's position within the session itself, and tests hypotheses about their interest with targeted questions rather than assuming them.",
        },
        observableBehaviors: [
          {
            ar: "يلاحظ تغيّر لهجة ممثل المقاول عند ذكر شهادة الإنجاز المتأخرة ويعود إليها لاحقًا.",
            en: "Notices a change in the contractor representative's tone when the delayed completion certificate is mentioned, and returns to probe it later.",
          },
          {
            ar: "يطرح سؤالاً موجّهًا لاختبار فرضية عن مصلحة الطرف الآخر قبل البناء عليها.",
            en: "Poses a targeted question to test a hypothesis about the other side's interest before building on it.",
          },
        ],
        commonMistakes: [
          { ar: "يبني استراتيجيته الكاملة على فرضية واحدة لم يتحقّق منها.", en: "Builds his entire strategy on a single unverified hypothesis." },
          {
            ar: "يسقط دوافعه الشخصية على الطرف الآخر، ويفترض أن ما يهمّه يهمّهم.",
            en: "Projects his own motivations onto the other side, assuming what matters to him matters to them.",
          },
        ],
        successCriteria: [
          {
            ar: "فرضية عن مصلحة الطرف الآخر اختُبرت وأُكّدت أو نُقضت أثناء الجلسة.",
            en: "A hypothesis about the other side's interest was tested and confirmed or disproved during the session.",
          },
          {
            ar: "تغيّر ملحوظ في موقف الطرف الآخر أثناء الجلسة سُجّل واستُغل.",
            en: "A noticeable shift in the other side's position during the session was recorded and used.",
          },
        ],
        evidenceRequired: [
          { ar: "محاكاة أو محضر يُظهر اختبار فرضية وتأكيدها.", en: "A simulation or record showing a hypothesis tested and confirmed." },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني ملفًا استخباراتيًا عن الطرف الآخر قبل المفاوضات الكبرى، ويوزّع على فريقه أدوار المراقبة والتحدّث.",
          en: "Builds an intelligence profile of the other side before high-stakes negotiations, and assigns his team separate roles for observing and speaking.",
        },
        observableBehaviors: [
          { ar: "يجمع معلومات عن تعاملات سابقة للطرف الآخر مع أطراف أخرى قبل الجلسة.", en: "Gathers information on the other side's prior dealings with other parties before the session." },
          {
            ar: "يكلّف عضوًا في الفريق بمراقبة ردود فعل الطرف الآخر بينما يتحدّث هو.",
            en: "Assigns a team member to observe the other side's reactions while he speaks.",
          },
        ],
        commonMistakes: [
          { ar: "يعتمد على انطباع جلسة واحدة سابقة دون تحديثه.", en: "Relies on the impression from a single past session without updating it." },
          {
            ar: "يهمل نقل ملف الطرف الآخر لزميل يخلفه في الملف.",
            en: "Fails to pass the counterpart profile on to a colleague taking over the file.",
          },
        ],
        successCriteria: [
          { ar: "ملف الطرف الآخر مكتوب ومحدّث قبل كل جلسة كبرى.", en: "A profile of the other side is written and updated before every major session." },
          {
            ar: "أدوار المراقبة والتحدّث موزّعة بوضوح داخل الفريق.",
            en: "Observation and speaking roles are clearly assigned within the team.",
          },
        ],
        evidenceRequired: [
          { ar: "ملف الطرف الآخر المكتوب وتوزيع أدوار الفريق.", en: "The written counterpart profile and the team role assignment." },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يؤسّس ممارسة مكتبية لجمع وتحديث معلومات عن الأطراف المتكرّرة في التفاوض، ويدرّب المحامين الجدد على قراءتها.",
          en: "Establishes a firm practice of collecting and updating intelligence on recurring negotiating counterparts, and trains junior lawyers to read it.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد سجلاً مشتركًا للأطراف المقابلة المتكرّرة، شركات أو محامين، يحدَّث بعد كل ملف.",
            en: "Adopts a shared record of recurring counterparts, companies or lawyers, updated after every matter.",
          },
          {
            ar: "يراجع دقّة قراءة الفريق لمصلحة الطرف الآخر بعد إغلاق الملفات الكبرى.",
            en: "Reviews the accuracy of the team's read on the other side's interest after major matters close.",
          },
        ],
        commonMistakes: [
          { ar: "يترك السجلّ قديمًا فيصبح مضلّلاً بدل أن يكون مفيدًا.", en: "Lets the record go stale so it misleads rather than helps." },
          { ar: "يفترض أن الطرف المقابل نفسه لن يتغيّر أسلوبه.", en: "Assumes the same counterpart will never change their style." },
        ],
        successCriteria: [
          { ar: "السجلّ المشترك مستخدم فعليًا ومحدَّث بانتظام.", en: "The shared record is actively used and regularly updated." },
          { ar: "دقّة قراءة الفريق تُراجَع وتتحسّن مع الوقت.", en: "The team's read accuracy is reviewed and improves over time." },
        ],
        evidenceRequired: [
          { ar: "سجلّ الأطراف المقابلة المعتمد.", en: "The adopted counterpart record." },
          { ar: "تقرير مراجعة دقّة القراءة بعد ملفات مغلقة.", en: "A review report on read accuracy after closed matters." },
        ],
      },
    ],
    sourceIds: ["src.thinking-like-a-lawyer", "src.tools-of-argument", "src.your-brain-at-work"],
    confidence: 0.75,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.active-listening"],
  },
  {
    id: "skill.handling-pressure-tactics",
    domainId: "dom.negotiation-influence",
    name: { ar: "التعامل مع أساليب الضغط", en: "Handling Pressure Tactics" },
    synonyms: [
      "hardball tactics",
      "pressure negotiation",
      "coercive tactics",
      "resisting pressure",
      "مواجهة الضغط",
    ],
    definition: {
      ar: "التعرّف على أساليب الضغط في التفاوض، كالمهل المصطنعة والشرطي الطيب والشرطي الشرير والتثبيت على أرقام متطرفة والانسحاب، والرد عليها دون فقدان الاتزان أو الصفقة أو مصلحة الموكّل.",
      en: "Recognizing hardball negotiation tactics such as artificial deadlines, good-cop-bad-cop, extreme anchoring and walkouts, and responding without losing composure, the deal, or the client's interest.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على التعامل مع أساليب الضغط.",
          en: "No evidence has been collected yet on the learner's ability to handle pressure tactics.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يشعر بالضغط في الجلسة لكنه يستجيب بردّ فعل عاطفي أو تنازل فوري بدل تحليل التكتيك.",
          en: "Feels the pressure in the session but responds with an emotional reaction or an immediate concession rather than analysing the tactic.",
        },
        observableBehaviors: [
          { ar: "يلاحظ أن الطرف الآخر يستعجله أو يرفع نبرته.", en: "Notices that the other side is rushing him or raising their tone." },
          { ar: "يستشير الموكّل بعد الجلسة عن سبب شعوره بالضغط.", en: "Consults the client after the session about why he felt pressured." },
        ],
        commonMistakes: [
          { ar: "يتنازل فورًا لإنهاء التوتّر في الجلسة.", en: "Concedes immediately to end the tension in the session." },
          {
            ar: "يرفع صوته أو يدخل في مواجهة شخصية مع الطرف الآخر.",
            en: "Raises his voice or enters a personal confrontation with the other side.",
          },
        ],
        successCriteria: [
          { ar: "لم يوقّع أو يلتزم بشيء داخل الجلسة تحت الضغط المباشر.", en: "Did not sign or commit to anything in the session under direct pressure." },
          { ar: "أبلغ الموكّل بما جرى بعد الجلسة.", en: "Informed the client of what happened after the session." },
        ],
        evidenceRequired: [
          { ar: "محضر جلسة يظهر لحظة الضغط ورد الفعل.", en: "A session record showing the moment of pressure and the reaction." },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يتعرّف على نوع التكتيك المستخدم عند مراجعة الجلسة، ويستخدم عبارة تأجيل بسيطة لكسب وقت التفكير.",
          en: "Identifies the type of tactic used when reviewing the session, and uses a simple stalling phrase to buy thinking time.",
        },
        observableBehaviors: [
          {
            ar: "يسمّي التكتيك، كمهلة مصطنعة أو تثبيت متطرف، عند مراجعة ملف تسوية مطالبة عمالية لاحقًا.",
            en: "Names the tactic, such as an artificial deadline or an extreme anchor, when reviewing an employment-claim settlement file afterward.",
          },
          {
            ar: "يقول عبارة مثل: \"أحتاج لمراجعة هذا مع موكّلي\" بدل الرد الفوري.",
            en: "Says a phrase such as, 'I need to check this with my client,' instead of responding on the spot.",
          },
        ],
        commonMistakes: [
          { ar: "يرد فورًا على رقم متطرف بدل تأجيل الرد.", en: "Responds immediately to an extreme figure instead of deferring the response." },
          { ar: "يعترف بأنه تحت ضغط أمام الطرف الآخر.", en: "Admits to the other side that he is under pressure." },
        ],
        successCriteria: [
          { ar: "التكتيك المستخدم مسمّى بشكل صحيح بعد الجلسة.", en: "The tactic used is correctly identified after the session." },
          { ar: "لا رد فوري على مهلة أو رقم متطرف دون تفويض.", en: "No immediate response to a deadline or extreme figure without a mandate." },
        ],
        evidenceRequired: [
          { ar: "مذكرة مراجعة بعد الجلسة تسمّي التكتيك.", en: "A post-session review memo naming the tactic." },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يتعرّف على التكتيك أثناء وقوعه، ويسمّيه بلغة محايدة أمام الطرف الآخر، ويتحقق من واقعية المهلة قبل التصرّف بموجبها.",
          en: "Recognizes the tactic as it happens, names it in neutral language to the other side, and checks whether a deadline is real before acting on it.",
        },
        observableBehaviors: [
          {
            ar: "يقول للموظف المطالب بتسوية إنهاء خدمته بهدوء: \"يبدو أن هذا موعد نهائي مضغوط، هل هو ملزم فعلاً؟\"",
            en: "Calmly says to the employee demanding a termination settlement, 'This deadline seems tight — is it actually binding?'",
          },
          {
            ar: "يتحقق من مصدر المهلة، كقرار إداري أو نص قانوني، قبل قبولها كحقيقة.",
            en: "Verifies the source of the deadline, such as an administrative decision or a legal provision, before accepting it as fact.",
          },
        ],
        commonMistakes: [
          { ar: "يقبل المهلة كواقع دون تحقق.", en: "Accepts the deadline as fact without verification." },
          {
            ar: "يتّهم الطرف الآخر علنًا بالخداع فيصعّد المواجهة.",
            en: "Publicly accuses the other side of deception, escalating the confrontation.",
          },
        ],
        successCriteria: [
          { ar: "التكتيك سُمّي بلغة محايدة أثناء الجلسة.", en: "The tactic was named in neutral language during the session." },
          {
            ar: "واقعية المهلة أو الرقم المتطرف جرى التحقق منها قبل الرد.",
            en: "The reality of the deadline or extreme figure was verified before responding.",
          },
        ],
        evidenceRequired: [
          { ar: "محضر جلسة يظهر تسمية التكتيك والتحقق منه.", en: "A session record showing the tactic named and verified." },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يتعامل مع تكتيك الشرطي الطيب والشرطي الشرير بالتركيز على المضمون لا الأشخاص، ويميّز الانسحاب الحقيقي عن التهديد الفارغ ولديه رد جاهز لكل منهما.",
          en: "Handles the good-cop-bad-cop tactic by focusing on substance rather than personalities, and distinguishes a genuine walkout from an empty threat, with a prepared response for each.",
        },
        observableBehaviors: [
          {
            ar: "يوجّه ردّه إلى الحجة لا إلى أي متحدّث بعينه عند تبديل الأدوار بين ممثلي الموظف ومحاميه.",
            en: "Directs his response to the argument, not to whichever speaker is talking, when the employee and their lawyer alternate roles.",
          },
          {
            ar: "يطلب استراحة قصيرة لتهدئة الجلسة واستشارة الموكّل عند تصعيد الضغط.",
            en: "Requests a short break to calm the session and consult the client when pressure escalates.",
          },
        ],
        commonMistakes: [
          {
            ar: "ينجرّ للتحالف مع \"الشرطي الطيب\" ضد زميله ظنًا أنه حليف فعلي.",
            en: "Gets drawn into allying with the 'good cop' against his colleague, mistaking them for a real ally.",
          },
          {
            ar: "يلاحق الطرف المنسحب متوسلاً بدل تقييم جدّية الانسحاب.",
            en: "Chases after a party that walks out, pleading, instead of assessing how serious the walkout is.",
          },
        ],
        successCriteria: [
          { ar: "الرد ركّز على المضمون بصرف النظر عن أسلوب المتحدّث.", en: "The response focused on substance regardless of the speaker's style." },
          {
            ar: "قرار التعامل مع الانسحاب اتُّخذ بعد تقييم لا برد فعل فوري.",
            en: "The decision on how to handle the walkout was made after assessment, not an instant reaction.",
          },
        ],
        evidenceRequired: [
          { ar: "محاكاة تفاوض تتضمن تكتيك ضغط مقيّمة.", en: "An assessed negotiation simulation including a pressure tactic." },
          { ar: "تقرير للموكّل عن كيفية التعامل مع التصعيد.", en: "A report to the client on how the escalation was handled." },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يحضّر الموكّل والفريق مسبقًا بالتكتيكات المتوقعة وبروتوكول رد متفق عليه، ويوجّه زميلاً مبتدئًا خلال لحظة ضغط حية دون أن يأخذ زمام الحديث منه.",
          en: "Briefs the client and team in advance on expected tactics and an agreed response protocol, and coaches a junior colleague through a live pressure moment without taking over the conversation.",
        },
        observableBehaviors: [
          {
            ar: "يضع مع الموكّل قبل الجلسة قائمة بالتكتيكات المحتملة وردًا متفقًا عليه لكل منها.",
            en: "Works out with the client, before the session, a list of likely tactics and an agreed response to each.",
          },
          {
            ar: "يمرّر إشارة متفقًا عليها لزميله المبتدئ لطلب استراحة دون كسر ثقته أمام الطرف الآخر.",
            en: "Passes an agreed signal to his junior colleague to request a break without undermining his confidence in front of the other side.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتدخّل ويأخذ الكلام من زميله المبتدئ بدل توجيهه بهدوء.",
            en: "Steps in and takes over from his junior colleague instead of calmly guiding him.",
          },
          {
            ar: "يهمل تحضير الموكّل فيُفاجأ الأخير بالتكتيك ويتصرف بعشوائية.",
            en: "Neglects to prepare the client, who is then blindsided by the tactic and reacts erratically.",
          },
        ],
        successCriteria: [
          { ar: "بروتوكول الرد على التكتيكات متفق عليه ومكتوب قبل الجلسة.", en: "A response protocol to the tactics is agreed and written before the session." },
          {
            ar: "الزميل المبتدئ تعامل مع لحظة الضغط دون أن يتولى المشرف الحديث عنه.",
            en: "The junior colleague handled the pressure moment without the supervisor taking over.",
          },
        ],
        evidenceRequired: [
          {
            ar: "بروتوكول الرد المكتوب وتقييم أداء الفريق بعد الجلسة.",
            en: "The written response protocol and a post-session team performance assessment.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع دليلاً مرجعيًا للمكتب بأساليب الضغط الشائعة وطرق الرد عليها، ويدرّب المحامين عبر تمارين محاكاة، ويقيس مدى نجاح هذه الأساليب ضد فريقه بمرور الوقت.",
          en: "Builds a firm-wide playbook of common pressure tactics and counters, trains lawyers through simulated drills, and tracks how often such tactics succeed against the firm's negotiators over time.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد دليلاً مكتوبًا بالتكتيكات الشائعة وردود مقترحة لكل منها.",
            en: "Adopts a written playbook of common tactics with a suggested response for each.",
          },
          {
            ar: "ينظّم تمارين محاكاة دورية يواجه فيها المتدرّبون ضغطًا مصطنعًا مقيَّمًا.",
            en: "Runs periodic simulation drills where trainees face assessed simulated pressure.",
          },
        ],
        commonMistakes: [
          {
            ar: "يكتفي بالدليل النظري دون تمارين عملية فيبقى التدريب سطحيًا.",
            en: "Relies on the theoretical playbook without practical drills, leaving training shallow.",
          },
          {
            ar: "لا يحدّث الدليل رغم ظهور تكتيكات جديدة في الملفات الفعلية.",
            en: "Fails to update the playbook despite new tactics appearing in actual matters.",
          },
        ],
        successCriteria: [
          { ar: "الدليل مستخدم فعليًا ومحدَّث بانتظام.", en: "The playbook is actively used and regularly updated." },
          {
            ar: "معدّل نجاح التكتيكات ضد فريق المكتب مقاس ومنخفض بمرور الوقت.",
            en: "The success rate of tactics against the firm's team is measured and declines over time.",
          },
        ],
        evidenceRequired: [
          { ar: "الدليل المعتمد وسجلّ تمارين المحاكاة.", en: "The adopted playbook and the simulation drill log." },
          {
            ar: "تقرير دوري عن معدّل نجاح التكتيكات ضد الفريق.",
            en: "A periodic report on the success rate of tactics against the team.",
          },
        ],
      },
    ],
    sourceIds: ["src.tools-of-argument", "src.how-to-argue-and-win", "src.your-brain-at-work"],
    confidence: 0.78,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.negotiation"],
  },
  {
    id: "skill.staying-within-mandate",
    domainId: "dom.negotiation-influence",
    name: { ar: "الالتزام بحدود التفويض", en: "Staying Within Mandate" },
    synonyms: [
      "mandate discipline",
      "authority limits",
      "scope of authority",
      "authorization boundaries",
      "حدود الصلاحية",
    ],
    definition: {
      ar: "التفاوض ضمن حدود التفويض الفعلي الذي منحه الموكّل أو المكتب، والتعرّف على اللحظة التي يتجاوزها فيها العرض المطروح، والتوقف لطلب إذن بدل الارتجال.",
      en: "Negotiating strictly within the authority actually granted by the client or firm, recognizing the moment a proposal exceeds it, and pausing to seek authorization rather than improvising.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على التزام المتدرّب بحدود التفويض.",
          en: "No evidence has been collected yet on the learner's discipline in staying within mandate.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يدخل الجلسة بفكرة عامة عن رغبة الموكّل دون حدود مكتوبة أو محددة للتفويض.",
          en: "Enters the session with a general sense of what the client wants, without a written or defined mandate boundary.",
        },
        observableBehaviors: [
          { ar: "يسأل الموكّل قبل الجلسة عمّا يريده بشكل عام.", en: "Asks the client beforehand what they generally want." },
          { ar: "يتوقف عن الحديث عندما يُطرح بند لم يتوقعه.", en: "Stops talking when a term he did not anticipate comes up." },
        ],
        commonMistakes: [
          {
            ar: "يرتجل موافقة على بند جديد ظنًا أنه سيرضي الموكّل.",
            en: "Improvises agreement to a new term, assuming it will please the client.",
          },
          { ar: "لا يسأل عن حدود صلاحيته قبل الجلسة.", en: "Does not ask about the limits of his authority before the session." },
        ],
        successCriteria: [
          { ar: "لم يوقّع على أي بند دون علم الموكّل العام به.", en: "Did not sign off on any term without the client's general awareness of it." },
          { ar: "استشار الموكّل بعد الجلسة قبل التأكيد النهائي.", en: "Consulted the client after the session before final confirmation." },
        ],
        evidenceRequired: [
          { ar: "محضر جلسة يظهر غياب تفويض مكتوب.", en: "A session record showing the absence of a written mandate." },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يحصل على تفويض مكتوب قبل الجلسة يحدد نطاق البنود الأساسية وحدودها العليا والدنيا.",
          en: "Obtains a written mandate before the session defining the scope of the main terms and their upper and lower limits.",
        },
        observableBehaviors: [
          {
            ar: "يوثّق نطاق السعر وشروط الدفع المسموح بالتفاوض عليها كتابيًا مع الموكّل قبل التفاوض على عقد توريد مواد أولية جديد.",
            en: "Documents in writing with the client the price range and payment terms open to negotiation, before negotiating a new raw-materials supply contract.",
          },
          { ar: "يحمل نسخة من التفويض المكتوب إلى الجلسة.", en: "Brings a copy of the written mandate to the session." },
        ],
        commonMistakes: [
          { ar: "يفترض حدود التفويض شفهيًا دون توثيق.", en: "Assumes the mandate's limits verbally without documenting them." },
          {
            ar: "يترك بنودًا مهمة، كالحصرية أو الغرامات، خارج التفويض المكتوب.",
            en: "Leaves important terms, such as exclusivity or penalties, outside the written mandate.",
          },
        ],
        successCriteria: [
          { ar: "التفويض المكتوب يغطي البنود الأساسية المتوقعة في الجلسة.", en: "The written mandate covers the main terms expected in the session." },
          { ar: "التفاوض جرى ضمن الحدود الموثّقة.", en: "The negotiation stayed within the documented limits." },
        ],
        evidenceRequired: [
          { ar: "نسخة من التفويض المكتوب المعتمد من الموكّل.", en: "A copy of the client-approved written mandate." },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يتعرّف في اللحظة نفسها على بند يخرج عن نطاق التفويض المكتوب، ويميّز بينه وبين بند ضمن الهامش المسموح به.",
          en: "Recognizes in real time a term that falls outside the written mandate's scope, and distinguishes it from a term within the permitted range.",
        },
        observableBehaviors: [
          {
            ar: "يلاحظ أن بند الحصرية الذي يقترحه المورّد غير مذكور في التفويض ويتوقف عن الرد الفوري عليه.",
            en: "Notices that the exclusivity clause the supplier proposes is not covered by the mandate and stops short of responding to it immediately.",
          },
          {
            ar: "يفرّق بين تعديل طفيف ضمن الهامش المتفق عليه وبند جديد كليًا.",
            en: "Distinguishes between a minor adjustment within the agreed margin and an entirely new term.",
          },
        ],
        commonMistakes: [
          {
            ar: "يوافق مبدئيًا على بند خارج التفويض ظنًا أنه \"تفصيل بسيط\".",
            en: "Agrees in principle to a term outside the mandate, thinking it is 'a minor detail.'",
          },
          {
            ar: "يرفض بندًا هو أصلاً ضمن هامش تفويضه ظنًا أنه يحتاج إذنًا.",
            en: "Rejects a term that is actually within his mandate's margin, mistakenly thinking it needs authorization.",
          },
        ],
        successCriteria: [
          { ar: "كل بند خارج نطاق التفويض حُدّد بدقة أثناء الجلسة.", en: "Every term outside the mandate's scope was accurately identified during the session." },
          { ar: "لم يُبدَ التزام نهائي ببند غير مفوَّض به.", en: "No final commitment was made to an unauthorized term." },
        ],
        evidenceRequired: [
          { ar: "محضر جلسة يظهر تحديد بند خارج التفويض.", en: "A session record showing identification of a term outside the mandate." },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يوقف الجلسة بمهنية لطلب تفويض إضافي دون أن يفقد مصداقيته أو زخم التفاوض، ويعود بتفويض محدَّث بسرعة معقولة.",
          en: "Pauses the session professionally to seek additional authorization without losing credibility or momentum, and returns with an updated mandate within a reasonable time.",
        },
        observableBehaviors: [
          {
            ar: "يقول للمورّد بثقة لا اعتذار: \"هذا البند يتطلب موافقة إضافية من موكّلي، سأعود إليكم غدًا\".",
            en: "Tells the supplier, with confidence rather than apology, 'This term requires additional client approval; I will come back to you tomorrow.'",
          },
          {
            ar: "يتواصل مع الموكّل فورًا بعد الجلسة بطلب واضح ومحدّد للتفويض الإضافي.",
            en: "Contacts the client immediately after the session with a clear, specific request for the additional authorization.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتذر بشكل مفرط عن الحاجة للعودة فيبدو ضعيفًا أمام الطرف الآخر.",
            en: "Over-apologizes for needing to go back, appearing weak to the other side.",
          },
          { ar: "يؤخر التواصل مع الموكّل فتضيع فرصة الرد السريع.", en: "Delays contacting the client, losing the chance to respond quickly." },
        ],
        successCriteria: [
          { ar: "التوقف جرى دون فقدان مصداقية الفريق أمام الطرف الآخر.", en: "The pause happened without the team losing credibility with the other side." },
          {
            ar: "التفويض الإضافي حُصل عليه خلال مهلة معقولة والتفاوض استؤنف.",
            en: "The additional authorization was obtained within a reasonable time and the negotiation resumed.",
          },
        ],
        evidenceRequired: [
          { ar: "محاكاة أو محضر يظهر طلب تفويض إضافي والعودة به.", en: "A simulation or record showing an additional-authorization request and return." },
          { ar: "تواصل مكتوب مع الموكّل يطلب التفويض الإضافي.", en: "Written communication with the client requesting the additional authorization." },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضع بروتوكولاً واضحًا للتصعيد عند تجاوز التفويض قبل المفاوضات الكبرى، ويدرّب الفريق على التعرّف بأنفسهم على حدود صلاحياتهم.",
          en: "Sets a clear mandate-escalation protocol before major negotiations, and trains the team to recognize the limits of their own authority instead of escalating every question.",
        },
        observableBehaviors: [
          {
            ar: "يحدّد جهة اتصال ومهلة رد متفق عليها لأي تجاوز محتمل للتفويض قبل الجلسة الكبرى.",
            en: "Sets an agreed contact person and response-time limit for any potential mandate breach before the major session.",
          },
          {
            ar: "يدرّب الفريق على أمثلة سابقة ليميّزوا بأنفسهم بين بند ضمن الهامش وبند يحتاج تصعيدًا.",
            en: "Trains the team on past examples so they can distinguish, on their own, a term within the margin from one needing escalation.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترك بروتوكول التصعيد غامضًا فيتأخر الرد وقت الحاجة الفعلية.",
            en: "Leaves the escalation protocol vague, so the response is delayed exactly when needed.",
          },
          { ar: "يصعّد كل الفريق كل سؤال صغير فيرهق قنوات الموافقة.", en: "Has the whole team escalate every small question, overloading the approval channels." },
        ],
        successCriteria: [
          { ar: "بروتوكول التصعيد مكتوب ومعروف لكل عضو في الفريق قبل الجلسة.", en: "The escalation protocol is written and known to every team member before the session." },
          { ar: "قرارات التصعيد وثائقية وقابلة للمراجعة لاحقًا.", en: "Escalation decisions are documented and reviewable afterward." },
        ],
        evidenceRequired: [
          { ar: "بروتوكول التصعيد المكتوب وسجلّ قرارات التفويض.", en: "The written escalation protocol and the mandate-decision log." },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع سياسة مكتبية لتوثيق التفويض وتحديد العتبات التي تستوجب موافقة الشريك، ويراجع الملفات المغلقة بحثًا عن تجاوزات.",
          en: "Establishes a firm-wide policy for documenting mandates and setting thresholds that require partner sign-off, and audits closed negotiations for mandate breaches.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد سياسة مكتوبة تحدد عتبة القيمة التي تستوجب موافقة شريك قبل أي تفاوض.",
            en: "Adopts a written policy setting the value threshold requiring partner approval before any negotiation.",
          },
          {
            ar: "يراجع عيّنة من الملفات المغلقة سنويًا للتحقق من عدم وجود تجاوزات للتفويض.",
            en: "Reviews a sample of closed matters yearly to verify no mandate breaches occurred.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضع السياسة دون آلية رقابة فعلية فتبقى حبرًا على ورق.",
            en: "Sets the policy without an actual enforcement mechanism, so it stays on paper only.",
          },
          {
            ar: "يعاقب على أي تجاوز دون تمييز بين خطأ فادح واجتهاد معقول تحت ضغط.",
            en: "Penalizes every breach without distinguishing a serious error from reasonable judgment under pressure.",
          },
        ],
        successCriteria: [
          { ar: "السياسة معتمدة ومطبّقة مع عتبات موافقة واضحة.", en: "The policy is adopted and applied with clear approval thresholds." },
          {
            ar: "تقرير مراجعة سنوي يوثّق التجاوزات إن وُجدت والإجراء المتّخذ.",
            en: "An annual review report documents any breaches found and the action taken.",
          },
        ],
        evidenceRequired: [
          { ar: "السياسة المعتمدة وتقرير المراجعة السنوي.", en: "The adopted policy and the annual review report." },
        ],
      },
    ],
    sourceIds: ["src.governance-raci", "src.legal-project-management", "src.thinking-like-a-lawyer"],
    confidence: 0.8,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.negotiation"],
  },
  {
    id: "skill.closing-and-documenting",
    domainId: "dom.negotiation-influence",
    name: { ar: "الإغلاق والتوثيق", en: "Closing and Documenting" },
    synonyms: [
      "deal closing",
      "settlement documentation",
      "confirming agreement",
      "closing the deal",
      "توثيق الاتفاق",
    ],
    definition: {
      ar: "تأمين التزام واضح في ختام التفاوض، وتوثيق الاتفاق كتابيًا بسرعة ودقة بحيث لا يبقى مجال لخلاف لاحق حول ما اتُّفق عليه.",
      en: "Securing a clear commitment at the close of a negotiation, and confirming the agreement in writing promptly and accurately so no room is left for a later dispute over what was agreed.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على إغلاق التفاوض وتوثيقه.",
          en: "No evidence has been collected yet on the learner's ability to close and document a negotiation.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "ينهي الجلسة بتفاهم شفهي عام دون تثبيته كتابيًا خلال وقت معقول.",
          en: "Ends the session with a general verbal understanding, without confirming it in writing within a reasonable time.",
        },
        observableBehaviors: [
          { ar: "يصافح الطرف الآخر على \"اتفاق مبدئي\" في نهاية الجلسة.", en: "Shakes hands on an 'agreement in principle' at the end of the session." },
          { ar: "يعد بإرسال ملخص لاحقًا.", en: "Promises to send a summary later." },
        ],
        commonMistakes: [
          { ar: "يغادر الجلسة دون تدوين البنود المتفق عليها فورًا.", en: "Leaves the session without noting the agreed terms immediately." },
          {
            ar: "يؤخر إرسال التأكيد الكتابي أيامًا فيتغيّر موقف الطرف الآخر.",
            en: "Delays sending the written confirmation for days, allowing the other side's position to shift.",
          },
        ],
        successCriteria: [
          {
            ar: "بنود الاتفاق الشفهي مدوّنة ولو بشكل أولي بعد الجلسة مباشرة.",
            en: "The verbally agreed terms are noted, even preliminarily, immediately after the session.",
          },
          { ar: "أُرسل تأكيد كتابي ما، ولو متأخرًا.", en: "Some written confirmation was sent, even if late." },
        ],
        evidenceRequired: [
          { ar: "ملاحظات ما بعد الجلسة أو رسالة تأكيد متأخرة.", en: "Post-session notes or a delayed confirmation message." },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يرسل تأكيدًا كتابيًا يلخّص بنود الاتفاق خلال مهلة قصيرة محددة، كاليوم نفسه أو يوم العمل التالي.",
          en: "Sends a written confirmation summarizing the agreed terms within a defined short window, such as the same day or the next business day.",
        },
        observableBehaviors: [
          {
            ar: "يرسل بريدًا إلكترونيًا بملخص بنود تسوية شيك مرتجع قبل نهاية يوم الجلسة.",
            en: "Sends an email summarizing the terms of a dishonoured-cheque settlement before the end of the session day.",
          },
          { ar: "يطلب من الطرف الآخر تأكيد استلامه للملخص وموافقته عليه.", en: "Asks the other side to confirm receipt of the summary and their agreement to it." },
        ],
        commonMistakes: [
          { ar: "يرسل ملخصًا عامًا دون أرقام أو تواريخ محددة.", en: "Sends a general summary without specific figures or dates." },
          { ar: "لا يطلب تأكيدًا من الطرف الآخر فيبقى الملخص من جانب واحد.", en: "Does not ask for confirmation from the other side, leaving the summary one-sided." },
        ],
        successCriteria: [
          { ar: "التأكيد الكتابي أُرسل خلال المهلة المحددة.", en: "The written confirmation was sent within the set window." },
          { ar: "التأكيد يتضمن أرقامًا وتواريخ محددة لا صياغة عامة.", en: "The confirmation includes specific figures and dates, not general wording." },
        ],
        evidenceRequired: [
          { ar: "نسخة من رسالة التأكيد الكتابي المرسلة.", en: "A copy of the sent written confirmation." },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يصوغ تأكيدًا كتابيًا يزيل الغموض عن كل بند جوهري، كالمبالغ والتواريخ والشروط وما يحدث عند الإخلال، ويراجعه قبل الإرسال.",
          en: "Drafts a written confirmation that removes ambiguity from every material term, such as amounts, dates, conditions and what happens on default, reviewing it before sending.",
        },
        observableBehaviors: [
          {
            ar: "يحدد في تأكيد تسوية الشيك المرتجع تاريخ كل قسط ومبلغه ورقم الحساب المحوَّل إليه بدقة.",
            en: "Specifies in the cheque-settlement confirmation the date, amount, and destination account of each instalment precisely.",
          },
          { ar: "يذكر صراحة ما يحدث في حال التأخر عن دفع أي قسط.", en: "Explicitly states what happens if any instalment is late." },
        ],
        commonMistakes: [
          {
            ar: "يترك بندًا مهمًا، كإجراء التنفيذ عند التخلف، بلا تفصيل.",
            en: "Leaves an important term, like the enforcement route on default, undetailed.",
          },
          { ar: "يرسل التأكيد دون مراجعته مقابل ملاحظات الجلسة الفعلية.", en: "Sends the confirmation without checking it against the actual session notes." },
        ],
        successCriteria: [
          { ar: "كل بند جوهري في التأكيد مطابق لما اتُّفق عليه فعليًا.", en: "Every material term in the confirmation matches what was actually agreed." },
          { ar: "الطرف الآخر أكّد كتابيًا موافقته على النص المرسل.", en: "The other side confirmed in writing their agreement to the text sent." },
        ],
        evidenceRequired: [
          { ar: "نسخة من التأكيد الكتابي مطابقة لمحضر الجلسة.", en: "A copy of the written confirmation matching the session record." },
          { ar: "تأكيد الطرف الآخر الكتابي بالموافقة.", en: "The other side's written acknowledgment of agreement." },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يحوّل التفاهم إلى مستند ملزم قانونًا يلائم طبيعة الملف، كاتفاق تسوية أو جدول شيكات معدَّل أو محضر تسوية يُقدَّم للجهة المختصة، ويدير التوقيع تحت ضغط المهل دون تفريط بالدقة.",
          en: "Converts the understanding into a legally binding instrument suited to the matter, such as a settlement agreement, a revised cheque schedule, or minutes of settlement filed with the competent authority, and manages signature logistics under time pressure without sacrificing accuracy.",
        },
        observableBehaviors: [
          {
            ar: "يعد اتفاق تسوية موقّعًا يفي بالمهلة القانونية لوقف الملاحقة الجزائية على الشيك المرتجع.",
            en: "Prepares a signed settlement agreement that meets the statutory deadline to halt the criminal prosecution over the dishonoured cheque.",
          },
          {
            ar: "ينسّق توقيع الطرفين إلكترونيًا أو حضوريًا خلال المهلة الضيقة دون حذف أي بند للتوفير بالوقت.",
            en: "Coordinates the parties' signature, electronically or in person, within the tight deadline without cutting any term to save time.",
          },
        ],
        commonMistakes: [
          { ar: "يستعجل التوقيع فيهمل بندًا جوهريًا لضيق الوقت.", en: "Rushes the signature and omits a material term because of time pressure." },
          {
            ar: "لا يتحقق من المهلة القانونية الفعلية فيفوتها أو يتصرف بذعر غير مبرر.",
            en: "Fails to verify the actual statutory deadline, either missing it or reacting with unwarranted panic.",
          },
        ],
        successCriteria: [
          { ar: "المستند الملزم موقّع ومودَع ضمن المهلة القانونية إن وُجدت.", en: "The binding instrument is signed and filed within the statutory deadline, if one applies." },
          { ar: "لا بند حُذف أو اختُصر بسبب ضغط الوقت.", en: "No term was dropped or shortened because of time pressure." },
        ],
        evidenceRequired: [
          { ar: "نسخة من المستند الملزم الموقّع.", en: "A copy of the signed binding instrument." },
          { ar: "دليل الإيداع أو التبليغ ضمن المهلة القانونية.", en: "Proof of filing or notification within the statutory deadline." },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضع قائمة تحقق أو نموذجًا للإغلاق يُستخدم عبر الملفات، وينسّق مع الجهات الداخلية، كالمالية والتقاضي، ليجري التوثيق والتنفيذ بالتوازي لا بالتتابع.",
          en: "Builds a closing checklist or template used across matters, and coordinates with internal departments, such as finance and litigation, so documentation and execution run in parallel rather than in sequence.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم قائمة تحقق ثابتة تغطي كل بند يجب توثيقه قبل اعتبار أي تسوية مغلقة.",
            en: "Uses a standard checklist covering every item that must be documented before any settlement is considered closed.",
          },
          {
            ar: "ينسّق مع القسم المالي لتحضير التحويل بالتوازي مع صياغة اتفاق التسوية.",
            en: "Coordinates with the finance department to prepare the transfer in parallel with drafting the settlement agreement.",
          },
        ],
        commonMistakes: [
          {
            ar: "ينتظر توقيع الاتفاق قبل تحريك أي إجراء داخلي آخر فيتأخر الإغلاق الفعلي.",
            en: "Waits for the agreement to be signed before moving any other internal step, delaying actual closure.",
          },
          {
            ar: "يستخدم قائمة تحقق قديمة لا تراعي خصوصية الملف الحالي.",
            en: "Uses an outdated checklist that does not account for the specifics of the current matter.",
          },
        ],
        successCriteria: [
          { ar: "قائمة التحقق مستخدمة وتغطي جميع بنود الملف.", en: "The checklist is used and covers all the matter's terms." },
          {
            ar: "التوثيق والتنفيذ الداخلي جريا بالتوازي دون تأخير أحدهما للآخر.",
            en: "Documentation and internal execution ran in parallel without one delaying the other.",
          },
        ],
        evidenceRequired: [
          { ar: "قائمة التحقق المستخدمة وسجلّ التنسيق مع الجهات الداخلية.", en: "The checklist used and the record of coordination with internal departments." },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع معيارًا مكتبيًا للتوثيق عند الإغلاق، يشمل نماذج وبنودًا إلزامية وسياسة أرشفة، ويراجع الملفات المغلقة بحثًا عن ثغرات توثيق، ويحدّث المعيار مع تغيّر القانون.",
          en: "Sets a firm-wide standard for closing documentation, including templates, mandatory clauses and a retention policy, audits closed files for documentation gaps, and updates the standard as the law changes.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد نماذج موحدة لاتفاقات التسوية بحسب نوع النزاع، كالشيكات أو النزاعات العمالية أو التجارية.",
            en: "Adopts standardized settlement-agreement templates by dispute type, such as cheques, employment or commercial matters.",
          },
          {
            ar: "يراجع عيّنة من الملفات المغلقة دوريًا للتحقق من اكتمال التوثيق.",
            en: "Periodically reviews a sample of closed files to verify documentation is complete.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترك النماذج دون تحديث رغم تعديل قانوني يمسّ شروط التسوية.",
            en: "Leaves the templates unupdated despite a legal amendment affecting settlement terms.",
          },
          {
            ar: "يفرض المعيار دون تدريب المحامين على استخدامه فعليًا.",
            en: "Imposes the standard without training lawyers to actually apply it.",
          },
        ],
        successCriteria: [
          {
            ar: "النماذج والمعيار محدّثان ومتوافقان مع آخر تعديل قانوني.",
            en: "The templates and standard are up to date and consistent with the latest legal amendment.",
          },
          { ar: "تقرير مراجعة يوثّق نسبة الملفات المكتملة التوثيق.", en: "A review report documents the proportion of files with complete documentation." },
        ],
        evidenceRequired: [
          { ar: "المعيار المعتمد ونماذج التوثيق.", en: "The adopted standard and the documentation templates." },
          {
            ar: "تقرير مراجعة دوري لاكتمال التوثيق في الملفات المغلقة.",
            en: "A periodic review report on documentation completeness in closed files.",
          },
        ],
      },
    ],
    sourceIds: ["src.legal-project-management", "src.governance-raci", "src.making-your-case"],
    confidence: 0.82,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.negotiation"],
  },
];
