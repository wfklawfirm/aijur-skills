import type { ScenarioDef } from "./types";

/**
 * Negotiation-counterpart simulations for AIJUR Professional Skills Lab.
 *
 * Unlike the client-meeting scenarios, the learner here is not building trust
 * with a client — they are across the table from an adversary or the
 * adversary's counsel. The same discipline applies to what the counterpart
 * reveals: an opening position is volunteered freely and is deliberately
 * anchored or dressed up, while the facts that reveal real flexibility,
 * real urgency, or a real weakness in the counterpart's case surface only
 * when the learner negotiates on interests and objective criteria rather
 * than on pressure. Pressure from the learner closes the counterpart down;
 * a calm, interest-based, well-informed question opens them up.
 *
 * Rules honoured throughout:
 *  - no scenario rewards an unconditional promise of outcome;
 *  - no scenario rewards conceding a position before testing it;
 *  - no scenario rewards committing beyond the learner's stated mandate;
 *  - every scenario has a text-only route.
 */
export const NEGOTIATION_INFLUENCE_SCENARIOS: ScenarioDef[] = [
  // ---------------------------------------------------------------------------
  // 1. Settling a contractor payment dispute (Arabic, stage 3)
  // ---------------------------------------------------------------------------
  {
    id: "scn.negotiation-settlement-offer",
    title: {
      ar: "تسوية نزاع مستحقات مقاول",
      en: "Settling a contractor payment dispute",
    },
    description: {
      ar: "تفاوض مباشر مع محامي مقاول يطالب بكامل مستحقاته عن أعمال ترميم، بينما يرى موكّلك أن جزءاً من الأعمال لم يطابق المواصفات. مهمّتك أن تختبر العرض الافتتاحي، وتصل إلى تسوية أقل من المطلوب دون كشف حدّك الأدنى أو تقديم أي وعد بالنتيجة.",
      en: "A direct negotiation with a contractor's lawyer who is demanding his client's full outstanding payment for renovation work, while your client maintains that part of the work missed spec. Your job is to test the opening demand and land a settlement below it, without revealing your floor or promising any outcome.",
    },
    skillIds: [
      "skill.negotiation",
      "skill.reading-the-counterpart",
      "skill.persuasive-argument",
    ],
    stage: 3,
    difficulty: 3,
    userRole: {
      ar: "أنت محامٍ في مكتب يمثّل شركة دار الأفق العقارية، المطوّر المالك لمبنى تجاري من ثلاثة طوابق في الرياض. كلّفك الشريك المسؤول بالتفاوض المباشر مع محامي المقاول للوصول إلى تسوية قبل أن يحيل أيّ من الطرفين النزاع إلى التحكيم، ومنحك سقفاً للتسوية لا تتجاوزه دون الرجوع إليه.",
      en: "You are a lawyer at a firm representing Dar Al-Ofoq Real Estate, the developer that owns a three-storey commercial building in Riyadh. The responsible partner has assigned you to negotiate directly with the contractor's lawyer to reach a settlement before either side refers the dispute to arbitration, and has given you a settlement ceiling you may not exceed without checking back.",
    },
    character: {
      id: "char.kareem-diab",
      name: { ar: "كريم دياب", en: "Kareem Diab" },
      role: {
        ar: "محامٍ يمثّل شركة الروضة للمقاولات، المتعهّد الذي نفّذ أعمال الترميم في المبنى، ومارس المحاماة تسع سنوات معظمها في نزاعات المقاولات.",
        en: "A lawyer representing Al-Rawda Contracting, the contractor that carried out the renovation, with nine years of practice mostly in construction disputes.",
      },
      personality: {
        ar: "مفاوض متمرّس وواثق، يفتتح دائماً بموقف عالٍ مسنود بسرد مرتّب. يحترم من يقابله بحجّة مبنية على معايير موضوعية لا على الانفعال. يتصلّب إذا شعر بالضغط أو بتهمة سوء نية.",
        en: "A seasoned, confident negotiator who always opens high with a tidy narrative. He respects a counterpart who argues from objective criteria, not emotion. He stiffens if he senses pressure or an accusation of bad faith.",
      },
      emotionalState: {
        ar: "هادئ ومتماسك في الظاهر، ويُظهر شيئاً من نفاد الصبر إذا طال الجدل حول تفاصيل صغيرة دون تقدّم، لكنه لا يفقد مهنيته.",
        en: "Outwardly calm and composed, showing mild impatience if the discussion drags on small details without progress, but never losing his professionalism.",
      },
      knownInformation: {
        ar: [
          "نفّذت الروضة للمقاولات أعمال الترميم بالكامل وفق المخطّطات والمواصفات المعتمدة، وأي ملاحظات متبقّية هي «بنود تشطيب اعتيادية» لا عيوب جوهرية.",
          "قيمة العقد 1,150,000 ريال، وقد حجب المطوّر الدفعتين الأخيرتين وقيمتهما الإجمالية 340,000 ريال.",
          "التأخير الفعلي في التنفيذ سببه تعديلات متكرّرة طلبها مهندس المطوّر أثناء التنفيذ، ومن حقّ الروضة تعويض عن التكاليف الإضافية الناتجة عن تمديد فترة العمل.",
          "موقفه الافتتاحي: يطالب بكامل الدفعتين المحجوبتين 340,000 ريال إضافة إلى 90,000 ريال تعويضاً عن التأخير، أي 430,000 ريال إجمالاً، وإلا سيقدّم موكّله طلب تحكيم خلال أسبوعين استناداً إلى بند التحكيم في العقد.",
          "يذكر أن موكّله «لا مصلحة له في إطالة النزاع» لكنه مستعدّ تماماً للتحكيم إذا لزم الأمر — عبارة موزونة تُبقي الباب مفتوحاً دون أن تكشف شيئاً.",
        ],
        en: [
          "Al-Rawda Contracting carried out the renovation fully in line with the approved drawings and specifications, and any remaining notes are \"routine finishing items,\" not material defects.",
          "The contract value is 1,150,000 SAR, and the developer has withheld the last two milestone payments totalling 340,000 SAR.",
          "The actual delay in execution was caused by repeated changes the developer's engineer requested mid-project, and Al-Rawda is entitled to compensation for the extended overhead that caused.",
          "His opening position: the full withheld 340,000 SAR plus 90,000 SAR in delay compensation — 430,000 SAR in total — or his client will file for arbitration within two weeks under the contract's arbitration clause.",
          "He states that his client \"has no interest in dragging this out\" but is fully prepared to arbitrate if necessary — a measured line that keeps the door open without giving anything away.",
        ],
      },
      hiddenInformation: {
        ar: [
          "حدّه الأدنى الفعلي للتسوية قريب من 260,000 ريال صافية؛ لا يظهر هذا الرقم أبداً بسؤال مباشر عن الحدّ الأدنى، بل يتسرّب تدريجياً حين يُسأل عمّا «يسمح لموكّله بإقفال الملف اليوم» ضمن حوار قائم على المصالح لا المساومة على الأرقام وحدها.",
          "مطالبة التأخير البالغة 90,000 ريال مستندة إلى بريد إلكتروني داخلي واحد فقط، ولا يوجد إخطار رسمي أرسِل إلى المطوّر في حينه؛ وهو يعرف أن هذا البند ضعيف الإثبات، ومستعدّ للتنازل عنه إذا اقترح المتدرّب معياراً موضوعياً (كتقرير المهندس المستقل) بدلاً من الطعن المباشر الذي يضعه في موقف دفاعي.",
          "وصلت الروضة رسالة من مقاول الباطن المسؤول عن أعمال العزل يعترف فيها بخطأ تنفيذي في قسم واحد من مواقف السيارات؛ لم تُكشف هذه الرسالة للمطوّر بعد، ويعترف بها كريم جزئياً فقط إذا سُئل سؤالاً محدّداً وغير اتهامي عن تقييم مقاول الباطن نفسه لذلك القسم تحديداً.",
          "تحتاج الروضة السيولة خلال ثلاثة أسابيع تقريباً لتعبئة مشروع جديد بدأ التعاقد عليه. هذه الحاجة لا تظهر إلا إذا سأل المتدرّب سؤالاً مفتوحاً وودّياً عن وضع موكّله وجدوله الزمني. أما إذا حاول المتدرّب استخدام هذه النقطة كتهديد أو ضغط مبكّر، فإن كريم يتكتّم عليها تماماً.",
        ],
        en: [
          "His real settlement floor is close to 260,000 SAR net. A direct question about the minimum never surfaces it. It leaks gradually only when he is asked what would let his client \"close the file today,\" inside an interest-based conversation rather than a haggle over the number alone.",
          "The 90,000 SAR delay claim rests on a single internal email, with no formal notice ever sent to the developer. He knows this item is weakly evidenced, and will concede it if the learner proposes an objective standard — an independent engineer's report — instead of a direct challenge that puts him on the defensive.",
          "Al-Rawda received a message from its own waterproofing subcontractor admitting a workmanship error in one section of the parking area. This has not been disclosed to the developer. Kareem only partially confirms it if asked a specific, non-accusatory question about that subcontractor's own assessment of that section.",
          "Al-Rawda needs cash within roughly three weeks to mobilise for a new contract it has just signed. This need surfaces only if the learner asks an open, friendly question about his client's situation and timeline. If the learner tries to use this point as an early threat, Kareem shuts it down completely.",
        ],
      },
      goal: {
        ar: "أن يقفل الملف اليوم أو خلال أيام قليلة بمبلغ يقترب قدر الإمكان من موقفه الافتتاحي، ودون أن يضطرّ للعودة إلى موكّله بأقل من حدّه الأدنى غير المعلن.",
        en: "To close the file today or within a few days at a figure as close as possible to his opening position, without having to go back to his client below his unstated floor.",
      },
    },
    culturalContext: {
      ar: "بين محامين يتعاملان بتكرار في سوق المقاولات، تُبنى العلاقة المهنية على السمعة أكثر من نتيجة ملف واحد. التهديد يُغلق باب المرونة فوراً، بينما الحجّة الهادئة المسندة بمعيار موضوعي تُقابَل بمرونة مماثلة.",
      en: "Between lawyers who deal with each other repeatedly in construction, the professional relationship is built on reputation more than any single file's outcome. A threat shuts the door on flexibility immediately; a calm argument backed by an objective standard is met with comparable flexibility.",
    },
    languageMode: "ar",
    background: {
      ar: [
        "أنهت شركة الروضة للمقاولات أعمال ترميم المبنى قبل خمسة أشهر، وحجب موكّلك الدفعتين الأخيرتين بعد أن رصد مهندسه تسرّب مياه في قسم من مواقف السيارات وفروقاً في تمديدات التكييف عن المخطّط المعتمد في وحدتين.",
        "منحك الشريك المسؤول سقفاً للتسوية لا يتجاوز 300,000 ريال، وطلب ألا تلتزم بأي رقم أعلى دون الرجوع إليه أولاً.",
        "هذا أول تفاوض مباشر لك مع كريم دياب، وقد سبق أن تفاوض مرّتين مع محامين آخرين في المكتب.",
      ],
      en: [
        "Al-Rawda Contracting finished the renovation five months ago, and your client withheld the last two payments after his engineer found water seepage in part of the parking area and HVAC ducting that differed from the approved drawings in two units.",
        "The responsible partner has given you a settlement ceiling of 300,000 SAR, and asked that you not commit to any higher figure without checking back first.",
        "This is your first direct negotiation with Kareem Diab, who has previously negotiated with two other lawyers at the firm.",
      ],
    },
    userGoal: {
      ar: "أن تختبر موقفه الافتتاحي بحجّة مسندة بمعايير موضوعية، وأن تكتشف ما يمكن أن تكشفه المصالح الحقيقية خلف موقفه، وأن تصل إلى تسوية أقل من 300,000 ريال أو تخرج بخطوة تالية واضحة — دون الكشف عن سقفك ودون أي وعد بالنتيجة.",
      en: "To test his opening position with an argument grounded in objective criteria, uncover what the real interests behind his position allow, and land a settlement below 300,000 SAR or leave with a clear next step — without revealing your ceiling and without any promise of outcome.",
    },
    opening: {
      ar: "«أستاذ، أقدّر وقتك. موقفنا واضح: المستحقات المحجوبة 340,000 ريال، إضافة إلى 90,000 ريال تعويضاً عن التأخير الذي تسبّب فيه التعديل المتكرّر لمهندسكم. المجموع 430,000 ريال. موكّلي مستعدّ للتحكيم خلال أسبوعين إن لم نصل إلى اتفاق. ما رأيك؟»",
      en: "\"Counsellor, I appreciate your time. Our position is clear: the withheld payments are 340,000 SAR, plus 90,000 SAR for the delay caused by your engineer's repeated changes. That's 430,000 SAR total. My client is ready to arbitrate within two weeks if we don't reach agreement. What's your view?\"",
    },
    decisionPoints: [
      {
        id: "dp.nso.opening-anchor",
        label: {
          ar: "الرد على الموقف الافتتاحي: هل يردّ المتدرّب بموقف مضادّ مسنود بمعيار موضوعي (تقرير المهندس، تقدير كلفة الإصلاح) بدل الاستسلام للرقم أو الدخول في جدال دفاعي بلا مستند؟",
          en: "Responding to the opening anchor: does the learner counter with a position grounded in an objective standard (the engineer's report, a repair-cost estimate) rather than caving to the number or arguing defensively without evidence?",
        },
        triggerAfterTurn: 2,
      },
      {
        id: "dp.nso.interest-probe",
        label: {
          ar: "استكشاف المصالح: هل يسأل المتدرّب سؤالاً مفتوحاً وودّياً عن وضع موكّله وأولوياته بدل تكرار المساومة على الرقم وحده؟",
          en: "Probing interests: does the learner ask an open, friendly question about the counterpart's client and priorities instead of repeating the number-only haggle?",
        },
        triggerAfterTurn: 5,
      },
      {
        id: "dp.nso.pressure-test",
        label: {
          ar: "اختبار الضغط: يذكّر كريم بمهلة التحكيم أو يلمّح إلى ضعف موقف المطوّر — هل يبقى المتدرّب هادئاً ويعيد التأطير نحو المصلحة المشتركة، أم يصعّد بتهديد مقابل أو يتراجع فوراً؟",
          en: "Testing pressure: Kareem invokes the arbitration deadline or hints the developer's position is weak — does the learner stay calm and reframe toward shared interest, or escalate with a counter-threat or cave immediately?",
        },
        triggerAfterTurn: 8,
      },
      {
        id: "dp.nso.closing-package",
        label: {
          ar: "الإقفال: هل يقترح المتدرّب حزمة محدّدة (مبلغ + جدول دفع + شرط تحقّق فني) مربوطة بمعايير موضوعية، ويصل إلى اتفاق أو خطوة تالية واضحة — أم ينهي الجلسة دون رقم ولا موعد؟",
          en: "Closing: does the learner propose a specific package (amount plus payment schedule plus a technical-verification condition) tied to objective criteria, and reach agreement or a clear next step — or end the session with no number and no date?",
        },
        triggerAfterTurn: 11,
      },
    ],
    expectedBehaviors: [
      {
        ar: "يفتتح بتأطير الجلسة كمفاوضة تسوية لا كمواجهة، ويوضح أنه يتحدّث نيابة عن موكّله وضمن تفويض محدّد.",
        en: "Opens by framing the session as a settlement negotiation, not a confrontation, and makes clear he speaks for his client within a defined mandate.",
      },
      {
        ar: "يردّ على الموقف الافتتاحي بموقف مضادّ مسنود بمعيار موضوعي، لا برقم عشوائي ولا باستسلام سريع.",
        en: "Responds to the opening anchor with a counter-position grounded in an objective standard, not a random number and not a quick cave.",
      },
      {
        ar: "يسأل عن أولويات موكّل الطرف الآخر وجدوله الزمني بصيغة مفتوحة وودّية، لا كوسيلة ضغط.",
        en: "Asks about the counterpart's client's priorities and timeline in an open, friendly way, not as a lever for pressure.",
      },
      {
        ar: "يواجه بند التعويض عن التأخير بسؤال عن الإثبات (إخطار رسمي، مراسلات) بدل الطعن المباشر في حسن نية الطرف الآخر.",
        en: "Challenges the delay-compensation item by asking about evidence — a formal notice, correspondence — rather than a direct challenge to the other side's good faith.",
      },
      {
        ar: "يبقى هادئاً عند التذكير بمهلة التحكيم، ولا يردّ بتهديد مقابل ولا يتراجع فوراً عن موقفه.",
        en: "Stays calm when reminded of the arbitration deadline, and neither counter-threatens nor immediately abandons his position.",
      },
      {
        ar: "يقترح حزمة تسوية محدّدة تربط المبلغ بجدول دفع وبشرط تحقّق فني من إصلاح القسم المتضرّر.",
        en: "Proposes a specific settlement package linking the amount to a payment schedule and a technical-verification condition for the repaired section.",
      },
      {
        ar: "يحافظ على سقف موكّله سرّياً طوال الجلسة، ولا يذكره ولو تلميحاً.",
        en: "Keeps his client's ceiling confidential throughout the session, never hinting at it even indirectly.",
      },
    ],
    criticalMistakes: [
      {
        ar: "يعد الطرف الآخر بأن موكّله سيقبل رقماً معيّناً، أو يعد بنتيجة التحكيم إذا لم تتم التسوية.",
        en: "Promises the other side that his client will accept a specific number, or promises an arbitration outcome if the settlement fails.",
      },
      {
        ar: "يلتزم برقم يتجاوز السقف الذي منحه إياه الشريك المسؤول دون التنبيه إلى ضرورة الرجوع إلى الموكّل أولاً.",
        en: "Commits to a figure beyond the ceiling the responsible partner authorised, without flagging the need to check back with the client first.",
      },
      {
        ar: "يكشف سقف التسوية أو الحدّ الأدنى المقبول لموكّله، ولو بشكل غير مباشر.",
        en: "Reveals his client's settlement ceiling or minimum acceptable figure, even indirectly.",
      },
      {
        ar: "يردّ على التهديد بالتحكيم بتهديد مقابل أو بتشكيك في مهنية الطرف الآخر.",
        en: "Responds to the arbitration threat with a counter-threat or by questioning the other side's professionalism.",
      },
      {
        ar: "يقبل الموقف الافتتاحي كاملاً أو جزءاً كبيراً منه دون أي محاولة لاختباره أو ربطه بمعيار موضوعي.",
        en: "Accepts the opening position in whole or in large part without any attempt to test it or tie it to an objective standard.",
      },
    ],
    successConditions: [
      {
        ar: "ظهرت إشارة واحدة على الأقل إلى مرونة كريم الحقيقية (تنازله عن بند التأخير، أو اعترافه الجزئي بخطأ التنفيذ) نتيجة سؤال قائم على المصالح لا الضغط.",
        en: "At least one signal of Kareem's real flexibility surfaced — dropping the delay item, or a partial admission of a workmanship error — as a result of an interest-based question rather than pressure.",
      },
      {
        ar: "قدّم المتدرّب موقفاً مضادّاً مسنوداً بمعيار موضوعي واحد على الأقل قبل أي مساومة على الرقم.",
        en: "The learner presented a counter-position grounded in at least one objective standard before any number-haggling.",
      },
      {
        ar: "بقي سقف الموكّل ورقمه الأدنى سرّيين طوال الجلسة.",
        en: "The client's ceiling and floor stayed confidential throughout the session.",
      },
      {
        ar: "انتهت الجلسة برقم تسوية أقل من الموقف الافتتاحي، أو بخطوة تالية محدّدة (موعد ومسؤول) في حال عدم الاتفاق.",
        en: "The session ended on a settlement figure below the opening position, or on a specific next step — a date and an owner — if no agreement was reached.",
      },
      {
        ar: "لم يصدر أي وعد بنتيجة التحكيم أو بموافقة الموكّل على رقم معيّن.",
        en: "No promise was made about the arbitration outcome or about the client's agreement to a specific number.",
      },
    ],
    exitConditions: [
      {
        ar: "بلغ الحوار الحدّ الأقصى للأدوار.",
        en: "The conversation reaches the maximum number of turns.",
      },
      {
        ar: "توصّل الطرفان إلى رقم تسوية محدّد أو إلى خطوة تالية واضحة، وأكّد كلّ منهما الاتفاق أو الخلاف بوضوح.",
        en: "The two sides reach a specific settlement figure or a clear next step, and each confirms the agreement or the disagreement plainly.",
      },
      {
        ar: "ارتكب المتدرّب خطأً حاسماً (وعد بالنتيجة أو التزام يتجاوز السقف) وأصرّ عليه بعد فرصة تصحيح واحدة يمنحها كريم بسؤاله «هل هذا التزام نهائي من طرفكم؟» — عندها تُقفل الجلسة وتُعرض التغذية الراجعة.",
        en: "The learner made a critical mistake — promising an outcome, or committing beyond the ceiling — and held to it after one chance to correct, offered by Kareem asking \"is that a final commitment on your side?\" — at that point the session closes and feedback is shown.",
      },
      {
        ar: "تصلّب كريم تماماً وأنهى الجلسة بعد أن قابله المتدرّب بتهديد مباشر أو مساس بمهنيته في ثلاثة أدوار متتالية.",
        en: "Kareem hardens completely and ends the session after the learner met him with a direct threat or a slight to his professionalism for three consecutive turns.",
      },
    ],
    rubricId: "rubric.negotiation-sim.v1",
    coachingNotes: {
      ar: [
        "الرقم الذي يقرّر هذه المفاوضة ليس 430,000 ولا 340,000، بل حدّ كريم الأدنى غير المعلن — ولا يظهر تحت سؤال مباشر عنه بل تحت سؤال ودّي عمّا «يسمح له بإقفال الملف اليوم».",
        "الضغط يُغلق الباب، لا يفتحه: أي محاولة لاستخدام حاجة موكّله للسيولة كتهديد مبكّر تجعله يتكتّم عليها فوراً.",
        "بند التأخير مسنود ببريد داخلي واحد لا أكثر — التحدّي الصحيح لا يكون بالطعن في نية الطرف الآخر بل بسؤال هادئ عن الإثبات الرسمي.",
        "لا تكشف سقف موكّلك ولو بشكل غير مباشر؛ صياغة مثل «نحن مستعدّون للاقتراب من هذا الرقم» تكشف أكثر مما تقصد.",
        "التزام يتجاوز التفويض ولو بحسن نية يُعامَل كخطأ حاسم — الجملة الصحيحة عند الاقتراب من السقف هي «هذا رقم أحتاج أن أعود به إلى موكّلي»، لا موافقة فورية.",
        "أنهِ الجلسة برقم أو بخطوة تالية محدّدة بتاريخ ومسؤول؛ الجلسة التي تنتهي بـ«سنتواصل» تفقد الزخم الذي بنيته.",
      ],
      en: [
        "The number that decides this negotiation is neither 430,000 nor 340,000 — it is Kareem's unstated floor, and it never surfaces under a direct question, only under a friendly one about what lets him close the file today.",
        "Pressure closes the door, not opens it: any early attempt to use his client's cash need as a threat makes him shut it down completely.",
        "The delay item rests on a single internal email — the right challenge is a calm question about formal evidence, not an attack on the other side's good faith.",
        "Never reveal your client's ceiling, even indirectly; a phrase like \"we could get close to that number\" gives away more than intended.",
        "Committing beyond your mandate, even in good faith, counts as a critical mistake — near the ceiling, the right line is \"that's a figure I need to take back to my client,\" not an instant yes.",
        "Close on a number or on a specific next step with a date and an owner; a session that ends on \"we'll be in touch\" loses the momentum you built.",
      ],
    },
    maxTurns: 14,
    estimatedMinutes: 12,
    accessibilityAlternative: {
      ar: "يمكن إجراء المفاوضة كاملةً كتابةً: تظهر ردود كريم دياب نصّاً ويكتب المتدرّب عروضه وأسئلته، بالمدّة نفسها وعدد الأدوار نفسه وبلا أي فارق في التقييم. أي مستند يُشار إليه (تقرير المهندس، البريد الداخلي) يُقدَّم كنصّ مقروء بقارئ الشاشة عند طلبه.",
      en: "The whole negotiation can be run in writing: Kareem's responses appear as text and the learner types offers and questions, with the same duration, the same number of turns, and no difference in scoring. Any document referenced — the engineer's report, the internal email — is provided as screen-reader-readable text on request.",
    },
    sourceIds: [
      "src.how-to-argue-and-win",
      "src.making-your-case",
      "src.tools-of-argument",
    ],
    contentVersion: "1.0.0",
  },

  // ---------------------------------------------------------------------------
  // 2. A hardball landlord's representative (Arabic, stage 4)
  // ---------------------------------------------------------------------------
  {
    id: "scn.negotiation-hostile-counterpart",
    title: {
      ar: "تجديد عقد إيجار أمام ممثّل ضاغط للمالك",
      en: "Renewing a lease against a hardball landlord's representative",
    },
    description: {
      ar: "تفاوض على تجديد عقد إيجار تجاري أمام ممثّل مالك يستخدم أساليب ضغط كلاسيكية: مهلة مصطنعة، افتتاح عدواني، ودفعك للالتزام بما يتجاوز صلاحياتك كمحامٍ متدرّب. مهمّتك أن تسمّي الأسلوب دون اتهام، وتبقى ضمن تفويضك، وتُغلق الملف أو توقفه بمصداقية.",
      en: "A commercial lease-renewal negotiation against a landlord's representative who uses classic hardball tactics: an artificial deadline, an aggressive opening, and pressure to commit beyond what a first-year associate could plausibly authorise. Your job is to name the tactic without accusation, stay inside your mandate, and either close or credibly pause.",
    },
    skillIds: [
      "skill.negotiation",
      "skill.handling-pressure-tactics",
      "skill.staying-within-mandate",
    ],
    stage: 4,
    difficulty: 4,
    userRole: {
      ar: "أنت محامٍ متدرّب في سنتك الأولى، تمثّل شركة «عيادات النور الطبية» المستأجرة لطابقين في مبنى تجاري. كلّفك الشريك المسؤول بالتفاوض المباشر مع ممثّل المالك حول تجديد العقد، ومنحك تفويضاً محدّداً: زيادة إيجار حتى 8% وشروطاً قياسية، وأي شيء خارج ذلك يستوجب الرجوع إليه أو إلى الموكّل قبل الالتزام به.",
      en: "You are a first-year associate representing Al-Noor Medical Clinics, which leases two floors in a commercial building. The responsible partner has assigned you to negotiate the lease renewal directly with the landlord's representative, with a defined mandate: a rent increase of up to 8% and standard terms, and anything outside that requires checking back with the partner or client before committing.",
    },
    character: {
      id: "char.waleed-shihab",
      name: { ar: "وليد شهاب", en: "Waleed Shihab" },
      role: {
        ar: "مدير محفظة إيجارات في شركة اللؤلؤة العقارية، المالكة للمبنى، ويتولّى ملف تجديد إيجار العيادات مباشرة نيابة عن الإدارة.",
        en: "Leasing portfolio manager at Al-Lulua Real Estate, the building's owner, handling the clinic's lease renewal directly on behalf of management.",
      },
      personality: {
        ar: "واثق ومُتقن لأسلوبه، يفتتح دائماً بموقف عالٍ ومهلة ضاغطة كتكتيك مقصود لا كانفعال شخصي. يتعاون بسرعة إذا قوبل بهدوء واختبار محترم لادّعاءاته. يزداد تصلّباً كلما شعر بتردّد الطرف الآخر.",
        en: "Confident and polished in his method, he always opens with a high position and a pressuring deadline — a deliberate tactic, not personal emotion. He turns cooperative quickly when met with calm, respectful testing of his claims, but hardens if met with direct confrontation.",
      },
      emotionalState: {
        ar: "يُظهر إلحاحاً واضحاً وقلّة صبر في الظاهر، لكنه غير متأزّم فعلياً؛ مهلة اليوم تكتيك مقصود، أما اجتماع مجلس الإدارة غداً فحقيقي وإن كان أقل حسماً مما يوحي.",
        en: "Visibly urgent and outwardly impatient, but not actually under real strain; today's deadline is a deliberate tactic, while tomorrow's board meeting is real, though less final than he lets on.",
      },
      knownInformation: {
        ar: [
          "إيجارات الطوابق المماثلة في المنطقة ارتفعت بشكل ملحوظ، وموقفه الافتتاحي زيادة 22% على الإيجار الحالي.",
          "مستأجر محتمل آخر أبدى اهتماماً جدّياً بالمساحة نفسها، وقد يوقّع اليوم بالسعر الأعلى إذا لم توافق العيادات.",
          "مجلس إدارة الشركة يجتمع غداً صباحاً، ويحتاج إلى «إقفال الملف» قبل الاجتماع.",
          "يصف عرضه بأنه نهائي وسارٍ حتى نهاية اليوم فقط، ويطلب من المتدرّب التوقيع بالأحرف الأولى على ملحق العقد الآن «لحجز المساحة».",
          "مهني ومتعاون إذا قوبل بأدب، لكنه يكرّر المهلة نفسها بلا تغيير كلّما ساد صمت أو تردّد في الحوار، ويتوتّر إذا شعر بأنه متّهم بالمبالغة أو الخداع.",
        ],
        en: [
          "Comparable-floor rents in the area have risen noticeably, and his opening position is a 22% increase on the current rent.",
          "Another prospective tenant has shown serious interest in the same space and might sign today at the higher rate if the clinic does not agree.",
          "The company's board meets tomorrow morning, and needs the file \"locked in\" before the meeting.",
          "He describes his offer as final and valid only until end of day, and asks the associate to initial the lease addendum now \"to hold the space.\"",
          "Professional and cooperative if met with courtesy, but he repeats the same deadline unchanged whenever silence or hesitation appears, and tenses up if he feels accused of exaggerating or bluffing.",
        ],
      },
      hiddenInformation: {
        ar: [
          "لا يوجد عرض ملزم فعلي من المستأجر البديل — هناك استفسار أوّلي فقط دون أي خطاب نوايا موقّع. لا يظهر هذا إلا إذا سأل المتدرّب بهدوء عن تفاصيل محدّدة (اسم الجهة، هل وقّعت خطاب نوايا) دون اتهامه بالمبالغة.",
          "المالك يقدّر فعلياً بقاء مستأجر مستقر وطويل الأمد كالعيادات، لأن استبداله يعني فترة شغور وكلفة عمولة وسائط وأعمال تجهيز لمستأجر جديد؛ لا تظهر هذه الأولوية إلا إذا سُئل سؤال مفتوح عمّا يهمّ المالك فعلياً في هذا الطابق تحديداً.",
          "اجتماع مجلس الإدارة غداً حقيقي، لكن لديه صلاحية تقديم مقترح مبدئي مكتوب إلى المجلس بدل إقفال الملف شفهياً اليوم؛ لا يعرض هذا البديل إلا إذا اقترحه المتدرّب صراحةً كمخرج بديل عن المهلة المصطنعة.",
          "هدفه الداخلي الفعلي أقرب إلى زيادة 11-12%، أي أقل بكثير من عرضه الافتتاحي 22%. لا ينزل عن موقفه إلا مقابل مقايضة حقيقية يطرحها المتدرّب (مدة عقد أطول، أو تجديد مبكّر مؤكّد)، لا بمجرّد النقاش أو الرفض.",
        ],
        en: [
          "There is no actually binding offer from the alternative tenant — only a preliminary inquiry with no signed letter of intent. This surfaces only if the learner calmly asks specific questions, without accusing him of exaggeration.",
          "The landlord genuinely values keeping a stable, long-term tenant like the clinic, because replacing it means a vacancy period, broker commission, and fit-out costs for a new tenant. This priority surfaces only if asked an open question about what actually matters to him.",
          "Tomorrow's board meeting is real, but he has authority to submit a written preliminary proposal to the board instead of closing verbally today. He offers this alternative only if the learner proposes it as a substitute for the deadline.",
          "His real internal target is closer to an 11–12% increase, well below his 22% opening offer. He moves off his position only for a genuine trade the learner proposes — a longer lease term, or a confirmed early renewal.",
        ],
      },
      goal: {
        ar: "أن يُقفل التجديد اليوم بأعلى زيادة ممكنة، ويحصل على توقيع أو التزام مبدئي من المتدرّب قبل أن يتمكّن من الرجوع إلى الشريك المسؤول.",
        en: "To close the renewal today at the highest possible increase, and get a signature or preliminary commitment from the associate before they can check back with the responsible partner.",
      },
    },
    culturalContext: {
      ar: "في سوق العقارات التجارية، الإلحاح والمهلة الضاغطة أسلوب تفاوضي معروف، لا مؤشر سوء نية بالضرورة. اختبار الأسلوب بأدب لا يُغضب الطرف المقابل، أما اتهامه المباشر بالخداع فيُغلق باب المرونة فوراً.",
      en: "In commercial real estate, urgency and a pressuring deadline are a recognised negotiating style, not necessarily bad faith. Testing the tactic politely does not anger the counterpart, while a direct accusation of lying shuts down flexibility immediately.",
    },
    languageMode: "ar",
    background: {
      ar: [
        "عقد إيجار العيادات ينتهي خلال شهر، والعيادات تريد البقاء في الموقع نفسه لأنه معروف لدى مرضاها منذ سنوات.",
        "منحك الشريك المسؤول تفويضاً بزيادة حتى 8% وشروط قياسية، وطلب صراحةً ألا توقّع أو تلتزم بأي شيء خارج ذلك دون الرجوع إليه أولاً، ولو شفهياً.",
        "الانتقال إلى موقع آخر ممكن فعلياً خلال أربعة أشهر إذا اضطرّت العيادات لذلك، لكنه خيار مكلف وغير مفضّل لدى الموكّل.",
        "هذا أول اجتماع مباشر لك مع وليد شهاب، وهو معروف في السوق بأسلوبه الحازم في التفاوض.",
      ],
      en: [
        "The clinic's lease expires within a month, and the clinic wants to stay in the same location because it is well known to its patients after years there.",
        "The responsible partner gave you a mandate of up to an 8% increase and standard terms, and explicitly asked that you not sign or commit to anything outside that without checking back first, even verbally.",
        "Relocating is genuinely possible within four months if the clinic has to, but it is a costly and unwanted option for the client.",
        "This is your first direct meeting with Waleed Shihab, who is known in the market for his firm negotiating style.",
      ],
    },
    userGoal: {
      ar: "أن تسمّي أسلوب الضغط بهدوء ودون اتهام، وتختبر ادّعاء المستأجر البديل والمهلة، وتبقى ضمن تفويضك الفعلي، وتُقفل التجديد إذا أمكن ضمن التفويض أو توقف الجلسة بمصداقية للرجوع إلى الشريك — دون أي وعد بموافقة الموكّل ودون توقيع خارج صلاحيتك.",
      en: "To name the pressure tactic calmly and without accusation, test the alternative-tenant claim and the deadline, stay inside your actual mandate, and either close the renewal within that mandate or credibly pause to check with the partner — without promising the client's agreement and without signing beyond your authority.",
    },
    opening: {
      ar: "«أستاذ، دعني أكون واضحاً من البداية: عندي عرض جدّي من مستأجر آخر جاهز للتوقيع اليوم بزيادة 22%. مجلس الإدارة يجتمع غداً صباحاً وأحتاج إقفال الملف قبل ذلك. هذا عرضنا النهائي ويسري حتى نهاية اليوم فقط — وقّع الملحق الآن ونحجز لك المساحة.»",
      en: "\"Counsellor, let me be clear from the start: I have a serious offer from another tenant ready to sign today at a 22% increase. The board meets tomorrow morning and I need this file closed before then. This is our final offer and it's only valid until end of day — initial the addendum now and we'll hold the space for you.\"",
    },
    decisionPoints: [
      {
        id: "dp.nhc.name-the-tactic",
        label: {
          ar: "الافتتاح العدواني: هل يسمّي المتدرّب أسلوب الضغط بهدوء ومهنية («أفهم أن هناك مهلة، دعنا نرَ ما هو ممكن») بدل الانفعال أو الاستسلام الفوري للرقم؟",
          en: "The aggressive opening: does the learner name the pressure tactic calmly and professionally (\"I understand there's a deadline, let's see what's possible\") rather than reacting emotionally or caving to the number immediately?",
        },
        triggerAfterTurn: 2,
      },
      {
        id: "dp.nhc.deadline-test",
        label: {
          ar: "اختبار المهلة والمستأجر البديل: هل يسأل المتدرّب أسئلة محدّدة وهادئة عن العرض المنافس والمهلة، أم يقبلهما كأمر واقع أو يتّهم وليد صراحةً بالخداع؟",
          en: "Testing the deadline and the alternative tenant: does the learner ask calm, specific questions about the competing offer and the deadline, or accept them at face value, or accuse Waleed outright of bluffing?",
        },
        triggerAfterTurn: 6,
      },
      {
        id: "dp.nhc.mandate-pressure",
        label: {
          ar: "الدفع للالتزام: يطلب وليد التوقيع بالأحرف الأولى الآن «لحجز المساحة» — هل يرفض المتدرّب الالتزام بما يتجاوز تفويضه بوضوح ودون اعتذار مفرط، ويقترح بديلاً محدّداً؟",
          en: "Pushing for commitment: Waleed asks for an initial now \"to hold the space\" — does the learner clearly and confidently decline to commit beyond his mandate, and propose a specific alternative?",
        },
        triggerAfterTurn: 9,
      },
      {
        id: "dp.nhc.closing-or-pause",
        label: {
          ar: "الإقفال أو التوقّف: هل يُقفل المتدرّب ضمن تفويضه الفعلي (حتى 8%)، أم يوقف الجلسة بمصداقية مع خطوة تالية محدّدة (موعد ومسؤول) بدل الاستسلام للمهلة أو تجاهلها كلياً؟",
          en: "Closing or pausing: does the learner close within his actual mandate (up to 8%), or credibly pause the session with a specific next step — a date and an owner — rather than surrendering to the deadline or ignoring it entirely?",
        },
        triggerAfterTurn: 13,
      },
    ],
    expectedBehaviors: [
      {
        ar: "يسمّي أسلوب الضغط بهدوء ومهنية دون اتهام وليد بسوء نية أو خداع.",
        en: "Names the pressure tactic calmly and professionally without accusing Waleed of bad faith or deception.",
      },
      {
        ar: "يسأل أسئلة محدّدة عن العرض المنافس (اسم الجهة، خطاب النوايا، مهلته) بدل قبوله أو رفضه دون تحقّق.",
        en: "Asks specific questions about the competing offer — the party's name, letter of intent, its window — instead of accepting or dismissing it without verification.",
      },
      {
        ar: "يسأل سؤالاً مفتوحاً عن أولويات المالك الفعلية في هذا الطابق (استقرار المستأجر، تجنّب الشغور) بدل التركيز على الرقم وحده.",
        en: "Asks an open question about the landlord's real priorities for this floor — tenant stability, avoiding vacancy — instead of focusing on the number alone.",
      },
      {
        ar: "يذكر تفويضه بوضوح وثقة (حتى 8% وشروط قياسية) دون اعتذار مفرط ودون الإفصاح عمّا هو مستعدّ لتقديمه أعلى من ذلك.",
        en: "States his mandate clearly and confidently — up to 8% and standard terms — without over-apologising and without disclosing what he might offer above that.",
      },
      {
        ar: "يقترح بديلاً محدّداً عن التوقيع الفوري، كمقترح مبدئي مكتوب يُرفع للمجلس أو موعد محدّد للعودة برد.",
        en: "Proposes a specific alternative to signing immediately — a written preliminary proposal to the board, or a set date to come back with an answer.",
      },
      {
        ar: "يعرض مقايضة حقيقية (مدّة عقد أطول، تجديد مبكّر مؤكّد) لاختبار مرونة وليد الفعلية بدل تكرار الرفض المجرّد.",
        en: "Offers a genuine trade — a longer lease term, a confirmed early renewal — to test Waleed's real flexibility instead of repeating a bare refusal.",
      },
      {
        ar: "يحافظ على نبرة محترمة طوال الجلسة حتى عند رفض الطلبات، ويحمي استمرار العلاقة مع المالك.",
        en: "Keeps a respectful tone throughout even while declining requests, and protects the ongoing relationship with the landlord.",
      },
    ],
    criticalMistakes: [
      {
        ar: "يعد وليد بأن الموكّل سيوافق على الزيادة المطلوبة أو سيوقّع اليوم.",
        en: "Promises Waleed that the client will agree to the requested increase or will sign today.",
      },
      {
        ar: "يوقّع أو يلتزم شفهياً بشروط تتجاوز تفويضه الفعلي (زيادة أعلى من 8% أو شروط غير قياسية) دون الرجوع إلى الشريك المسؤول.",
        en: "Signs or verbally commits to terms beyond his actual mandate — an increase above 8% or non-standard terms — without checking back with the responsible partner.",
      },
      {
        ar: "يقبل المهلة المصطنعة كأمر واقع دون أي اختبار أو سؤال عنها.",
        en: "Accepts the artificial deadline at face value with no testing or questioning of it.",
      },
      {
        ar: "يتّهم وليد صراحةً بالكذب أو الخداع بدل اختبار ادّعائه بأسئلة هادئة.",
        en: "Accuses Waleed outright of lying or bluffing instead of testing his claim with calm questions.",
      },
      {
        ar: "يكشف عن حاجة الموكّل الفعلية للبقاء في الموقع أو عن استعداده للانتقال، مما يفقده أوراق الضغط.",
        en: "Reveals the client's real need to stay in the location or willingness to relocate, giving away his own leverage.",
      },
    ],
    successConditions: [
      {
        ar: "سمّى المتدرّب المهلة أو الادّعاء بالمستأجر البديل كتكتيك تفاوضي، بهدوء ودون اتهام مباشر.",
        en: "The learner named the deadline or the alternative-tenant claim as a negotiating tactic, calmly and without direct accusation.",
      },
      {
        ar: "ظهرت إشارة واحدة على الأقل إلى مرونة وليد الحقيقية (تراجعه عن نسبة الزيادة، أو قبوله بمقترح مكتوب بدل إقفال فوري).",
        en: "At least one signal of Waleed's real flexibility surfaced — backing off the increase percentage, or accepting a written proposal instead of an immediate close.",
      },
      {
        ar: "لم يلتزم المتدرّب بأي شيء يتجاوز تفويضه الفعلي (8% وشروط قياسية) دون الرجوع إلى الشريك.",
        en: "The learner did not commit to anything beyond his actual mandate — 8% and standard terms — without checking back with the partner.",
      },
      {
        ar: "انتهت الجلسة إما بإقفال ضمن التفويض، أو بخطوة تالية محدّدة بتاريخ ومسؤول بدل الاستسلام للمهلة.",
        en: "The session ended either with a close inside the mandate, or with a specific next step — a date and an owner — rather than surrendering to the deadline.",
      },
      {
        ar: "لم يصدر أي وعد بموافقة الموكّل أو بنتيجة معيّنة.",
        en: "No promise was made about the client's agreement or about a specific outcome.",
      },
    ],
    exitConditions: [
      {
        ar: "بلغ الحوار الحدّ الأقصى للأدوار.",
        en: "The conversation reaches the maximum number of turns.",
      },
      {
        ar: "أُقفل التجديد ضمن التفويض، أو اتّفق الطرفان على مقترح مكتوب وموعد للردّ، وودّع الطرفان بوضوح.",
        en: "The renewal closed within the mandate, or the two sides agreed on a written proposal and a date to respond, and both closed out clearly.",
      },
      {
        ar: "ارتكب المتدرّب خطأً حاسماً (وعد بموافقة الموكّل أو التزام يتجاوز التفويض) وأصرّ عليه بعد فرصة تصحيح واحدة يمنحها وليد بسؤاله «إذن هذا التزام نهائي منك الآن؟» — عندها تُقفل الجلسة وتُعرض التغذية الراجعة.",
        en: "The learner made a critical mistake — promising the client's agreement, or committing beyond the mandate — and held to it after one chance to correct, offered by Waleed asking \"so this is a final commitment from you right now?\" — at that point the session closes and feedback is shown.",
      },
      {
        ar: "تصلّب وليد تماماً وأنهى الجلسة بلا مقترح بعد أن قابله المتدرّب باتهام مباشر بالخداع في ثلاثة أدوار متتالية.",
        en: "Waleed hardens completely and ends the session with no proposal after the learner met him with a direct accusation of bluffing for three consecutive turns.",
      },
    ],
    rubricId: "rubric.negotiation-sim.v1",
    coachingNotes: {
      ar: [
        "المهلة والمستأجر البديل تكتيكان لا حقيقتان مؤكّدتان — الفرق بينهما وبين الواقع يظهر فقط بسؤال هادئ ومحدّد، لا بقبولهما ولا برفضهما بلا تحقّق.",
        "تسمية التكتيك لا تعني اتهام الطرف الآخر: «أفهم أن هناك ضغط وقت، دعنا نرَ ما هو ممكن اليوم فعلاً» تفتح الباب، بينما «أنت تبالغ» يُغلقه.",
        "الالتزام خارج التفويض هو الخطأ الأخطر في هذا التمرين، ولو بدا حلاً عملياً في اللحظة — الجملة الآمنة دائماً: «هذا يتجاوز ما أُذن لي به، وأحتاج إلى العودة بشأنه».",
        "اطلب دائماً بديلاً ملموساً عن التوقيع الفوري: مقترح مكتوب، أو موعد محدّد للردّ. المهلة المصطنعة تفقد قوّتها أمام بديل جاهز، لا أمام الرفض المجرّد.",
        "المقايضة الحقيقية (مدّة أطول مقابل نسبة أقل) تكشف مرونة الطرف الآخر أكثر من أي جدال حول الرقم وحده.",
        "احمِ نبرتك المهنية حتى وأنت ترفض؛ العلاقة مع هذا الممثّل ستستمر بعد هذا الملف بسنوات.",
      ],
      en: [
        "The deadline and the alternative tenant are tactics, not confirmed facts — the gap between them and reality shows up only under a calm, specific question, not by accepting or rejecting them without verification.",
        "Naming the tactic is not accusing the other side: \"I understand there's time pressure, let's see what's actually possible today\" opens the door, while \"you're exaggerating\" closes it.",
        "Committing outside the mandate is the most dangerous mistake in this exercise, even when it looks like the practical fix in the moment — the safe line is always \"that's beyond what I've been authorised to agree, and I need to come back on it.\"",
        "Always ask for a concrete alternative to signing now — a written proposal, or a fixed date to respond. An artificial deadline loses its force against a ready alternative, not against a bare refusal.",
        "A genuine trade — a longer term for a lower percentage — reveals the other side's real flexibility far better than arguing the number alone.",
        "Protect your professional tone even while declining; the relationship with this representative continues for years after this file.",
      ],
    },
    maxTurns: 16,
    estimatedMinutes: 14,
    accessibilityAlternative: {
      ar: "يمكن إجراء المفاوضة كاملةً كتابةً: تظهر ردود وليد شهاب نصّاً ويكتب المتدرّب عروضه وأسئلته، بالمدّة نفسها وعدد الأدوار نفسه وبلا أي فارق في التقييم. أي ملحق عقد يُشار إليه يُقدَّم كنصّ مقروء بقارئ الشاشة عند طلبه.",
      en: "The whole negotiation can be run in writing: Waleed's responses appear as text and the learner types offers and questions, with the same duration, the same number of turns, and no difference in scoring. Any lease addendum referenced is provided as screen-reader-readable text on request.",
    },
    sourceIds: [
      "src.how-to-argue-and-win",
      "src.making-your-case",
      "src.tools-of-argument",
    ],
    contentVersion: "1.0.0",
  },
];
