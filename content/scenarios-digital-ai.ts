import type { ScenarioDef } from "./types";

/**
 * Digital Tools & AI simulations for AIJUR Professional Skills Lab.
 *
 * Both scenarios put the learner in the moment where responsible AI use is
 * actually tested: not the moment of drafting with the tool, but the moment
 * right after, when disclosing a mistake or declining a shortcut carries
 * real, immediate friction with another person under pressure.
 *
 * Rules honoured throughout:
 *  - no scenario rewards staying silent about a fabricated or materially
 *    wrong AI output to avoid an awkward conversation, or letting it go out
 *    uncorrected because someone senior is in a hurry;
 *  - no scenario rewards blaming the AI tool itself as a substitute for the
 *    lawyer's own duty to verify before anything goes out under their name;
 *  - no scenario rewards a panicked, disproportionate overcorrection
 *    (spiralling apologies, offering to withdraw from the matter) in place
 *    of a plain statement of the problem and a concrete fix;
 *  - no scenario rewards pasting confidential or privileged client
 *    information into a consumer AI tool that isn't firm-approved, even
 *    once, even under real deadline pressure, and even to help a colleague;
 *  - no scenario rewards declining a shortcut with a lecture and no working
 *    alternative — a professional "no" here always comes with a real "here's
 *    what we do instead";
 *  - every scenario has a text-only route.
 */
export const DIGITAL_AI_SCENARIOS: ScenarioDef[] = [
  // ---------------------------------------------------------------------------
  // 1. Disclosing a fabricated AI citation before a memo goes out (stage 3)
  // ---------------------------------------------------------------------------
  {
    id: "scn.catching-an-ai-hallucination",
    title: {
      ar: "اكتشاف استشهاد ملفّق من أداة الذكاء الاصطناعي",
      en: "Catching an AI hallucination",
    },
    description: {
      ar: "استخدمت أداة ذكاء اصطناعي لصياغة مسودة مذكرة قانونية، ووافق عليها الشريك المشرف قبل ساعة. أثناء مراجعتك الأخيرة قبل إرسالها للعميل غداً صباحاً، تكتشف أن السابقة القضائية التي استندت إليها الحجة الأساسية غير موجودة أصلاً. عليك إبلاغ الشريك الآن، مباشرة وبوضوح، دون تصغير الخطأ ودون إلقاء اللوم على الأداة.",
      en: "You used an AI drafting tool to help prepare a legal memo, and the supervising partner signed off on it an hour ago. During your final check before it goes to the client tomorrow morning, you discover the case the core argument leans on doesn't actually exist. You have to tell the partner now, plainly, without minimizing it and without blaming the tool.",
    },
    skillIds: ["skill.disclosing-ai-errors", "skill.ai-output-verification"],
    stage: 3,
    difficulty: 3,
    userRole: {
      ar: "أنت محامٍ في سنتك الثانية في مكتب سيف والعدلي للمحاماة بالقاهرة. كلّفك الشريك المشرف حسام سيف بإعداد مذكرة قانونية لعميلكم شركة كيميت لمواد البناء، تُرسل غداً صباحاً قبل جلسة الغد بيومين، تُبرّر فيها دفعاً بسقوط الحق بالتقادم في نزاع تجاري. استخدمت أداة الذكاء الاصطناعي المرخّصة للمكتب لإعداد المسودة الأولى، ووافق عليها حسام قبل ساعة تقريباً استعداداً لإرسالها.",
      en: "You are a second-year associate at Seif & Adly Law Firm in Cairo. Supervising partner Hossam Seif assigned you to prepare a legal memo for your client, Kemet Building Materials, going to the client tomorrow morning, arguing a limitation-period defense in a commercial dispute. You used the firm's licensed AI drafting tool for the first draft, and Hossam signed off on it about an hour ago, ready to send.",
    },
    character: {
      id: "char.hossam-seif",
      name: { ar: "حسام سيف", en: "Hossam Seif" },
      role: {
        ar: "الشريك المؤسس المشرف على قسم التقاضي التجاري، محامٍ متمرّس منذ أكثر من عشرين عاماً ومن اسم مكتب سيف والعدلي.",
        en: "Founding partner supervising the commercial litigation department, a lawyer of more than twenty years' standing, and one of the two names on Seif & Adly.",
      },
      personality: {
        ar: "عملي ومباشر، يقدّر من يخبره بالوقائع كما هي دون تجميل أو مسرحية. يثق بمعاونيه ولا يراجع كل تفصيل بنفسه، ويعتبر التحقق من صحة أي استشهاد قانوني قبل خروجه مسؤولية من كتب المذكرة أولاً، بصرف النظر عمّن أو ما ساعده في الصياغة.",
        en: "Practical and direct, values someone who tells him the facts as they are without dressing them up or making a scene. He trusts his associates and doesn't re-check every detail himself, and treats verifying any legal citation before it goes out as the responsibility of whoever wrote the memo first — regardless of what or who helped draft it.",
      },
      emotionalState: {
        ar: "منهك بعد ثلاث جلسات محكمة اليوم، وعلى وشك المغادرة خلال عشرين دقيقة لحفل مدرسة ابنته الذي وعدها بحضوره. طمأن التواصل مع العميل أن المذكرة ستصل غداً في التاسعة صباحاً، وعنده جلسة عاجلة أخرى باكراً غداً تترك له وقتاً ضيقاً لأي تعديل جوهري في اللحظة الأخيرة.",
        en: "Exhausted after three court hearings today, and about to leave in twenty minutes for his daughter's school event, which he promised to attend. He's already told the client contact the memo will land at nine tomorrow morning, and has another urgent hearing early tomorrow that leaves him a narrow window for any last-minute rework.",
      },
      knownInformation: {
        ar: [
          "راجع المذكرة قبل ساعة تقريباً وأعجبه بناء الحجة، خاصة الفقرة التي تستند إلى سابقة من محكمة النقض لدعم حجة التقادم.",
          "لم يتحقق بنفسه من رقم الحكم أو نصه؛ اطّلع على البنية والحجة العامة فقط، وترك التحقق من دقة كل استشهاد لمن كتب المذكرة.",
          "يثق بأداة الذكاء الاصطناعي المرخّصة للمكتب كوسيلة لتسريع المسودة الأولى، شرط أن يبقى التحقق النهائي من أي استشهاد بشرياً قبل خروجه.",
          "أبلغ جهة الاتصال لدى العميل أن المذكرة ستصله غداً التاسعة صباحاً، ولا يفضّل تأخيرها دون سبب واضح ومحدد.",
          "لديه جلسة عاجلة أخرى في الصباح الباكر غداً، ما يعني أن أي مراجعة إضافية الليلة يجب أن تكون سريعة ومركّزة.",
        ],
        en: [
          "He reviewed the memo about an hour ago and liked how the argument was built, especially the paragraph leaning on a Court of Cassation precedent to support the limitation defense.",
          "He didn't personally verify the ruling's number or text; he checked the structure and the overall argument, and left verifying the accuracy of each citation to whoever wrote the memo.",
          "He trusts the firm's licensed AI tool as a way to speed up a first draft, on the condition that the final check of any citation stays human before it goes out.",
          "He's told the client contact the memo will arrive at nine tomorrow morning, and doesn't want to delay it without a clear, specific reason.",
          "He has another urgent hearing early tomorrow morning, which means any additional review tonight has to be fast and focused.",
        ],
      },
      hiddenInformation: {
        ar: [
          "يفضّل بوضوح أن يعرف بخطأ جوهري الليلة، حتى في وقت سيّئ كهذا، على أن يكتشفه العميل أو محامي الطرف الآخر لاحقاً؛ لكنه لن يقول هذا تلقائياً ما لم يشعر أن المتدرّب يتردد في إخباره بشيء.",
          "إذا فتح المتدرّب الحديث بعبارة غامضة («حابب أراجع معك حاجة صغيرة») يفترض أنها مسألة شكلية ويستمر بالاستعداد للمغادرة، ما يصعّب لفت انتباهه الكامل لاحقاً.",
          "إذا حاول المتدرّب إلقاء المسؤولية على أداة الذكاء الاصطناعي بشكل مباشر («الأداة هي اللي اخترعت الحكم ده»)، يردّ بحزم أن أي شيء يخرج باسم المتدرّب هو مسؤوليته النهائية بصرف النظر عمّا ساعد في صياغته.",
          "إذا انزلق المتدرّب لاعتذار متكرر مبالغ فيه أو عرض الانسحاب من الملف («يمكن يكون أحسن حد تاني ياخد المذكرة»)، ينفد صبره بسرعة؛ لا وقت لديه لطمأنة معنوية، بل يحتاج الحل فوراً، وهذا التصرف يزيد قلقه بشأن قدرة المتدرّب على التصرف تحت الضغط أكثر مما يزيده الخطأ نفسه.",
          "إذا سمع الوقائع بوضوح فوري (اسم الحكم، ولماذا هو غير صحيح) واقتراحاً عملياً للتحقق من باقي الاستشهادات الليلة، يهدأ سريعاً ويشكر المتدرّب على اكتشافها قبل خروج المذكرة، ويعيد ترتيب جدول الغد معه.",
          "تحت ضغط الوقت قد يقترح هو نفسه حلاً مختصراً وخطيراً — حذف الاستشهاد بهدوء وإرسال المذكرة كما هي الليلة، على أن يُعالج الأمر «الأسبوع الجاي» — ليختبر ضمنياً هل يقبل المتدرّب بحل يُخرج المذكرة دون تصحيح حقيقي أو دون إخبار العميل لاحقاً بأي تعديل ضروري.",
        ],
        en: [
          "He clearly prefers to know about a material error tonight, even at a bad moment like this, rather than have the client or opposing counsel discover it later — but he won't volunteer this unless he senses the learner is hesitating to tell him something.",
          "If the learner opens with a vague line — \"wanted to go over something small with you\" — he assumes it's minor and keeps getting ready to leave, making it harder to get his full attention afterward.",
          "If the learner tries to shift responsibility directly onto the AI tool — \"the tool is the one that made up the ruling\" — he responds firmly that anything going out under the learner's name is their final responsibility, regardless of what helped draft it.",
          "If the learner slides into repeated, disproportionate apology or offers to hand the memo to someone else — \"maybe someone else should take this over\" — his patience runs out fast; he has no time for reassurance, he needs the fix, and this behavior raises his concern about the learner's judgment under pressure more than the original error does.",
          "If told the facts plainly and immediately — the case name, why it's wrong — with a practical proposal to verify the remaining citations tonight, he calms down quickly, thanks the learner for catching it before it went out, and reworks tomorrow's schedule with them.",
          "Under time pressure he may himself propose a short, dangerous shortcut — quietly deleting the citation and sending the memo out tonight as is, to be \"dealt with properly next week\" — implicitly testing whether the learner will accept a fix that doesn't actually correct the argument or ever tells the client what changed.",
        ],
      },
      goal: {
        ar: "أن يخرج من هذه المحادثة بمذكرة يستطيع أن يضع اسمه عليها بثقة فعلية وتصل للعميل غداً كما وعد، دون أن يضطر لإعادة كتابتها بنفسه الليلة وهو منهك.",
        en: "To come out of this conversation with a memo he can genuinely put his name behind, reaching the client tomorrow as promised, without having to rewrite it himself tonight while exhausted.",
      },
    },
    culturalContext: {
      ar: "في مكاتب المحاماة العربية، الاعتراف بخطأ أمام شريك مشرف منهك ومستعجل يبدو مخاطرة اجتماعية حقيقية، خاصة حين يكون الخطأ في عمل وافق عليه هو شخصياً قبل قليل. لكن أدوات الذكاء الاصطناعي تدخل ممارسة المحاماة بسرعة، والمعيار المهني الناشئ واضح: الثقة بالأداة لا تُعفي المحامي من التحقق، والصمت عن استشهاد ملفّق أخطر بكثير من إزعاج شريك لبضع دقائق.",
      en: "In Arab law firms, admitting an error to an exhausted, time-pressed supervising partner feels like a real social risk — especially when the error sits in work he personally approved minutes ago. But AI drafting tools are entering legal practice fast, and the emerging professional standard is clear: trusting the tool never excuses the lawyer from verifying, and staying silent about a fabricated citation is far more dangerous than a few uncomfortable minutes.",
    },
    languageMode: "bilingual",
    background: {
      ar: [
        "تولّيت منذ أسبوعين إعداد مذكرة لعميلكم كيميت لمواد البناء تدفع بسقوط حق المدعي بالتقادم في نزاع تجاري على قيمة توريدات.",
        "استخدمت أداة الذكاء الاصطناعي المرخّصة للمكتب لصياغة مسودة أولى، وبنيت عليها، وأضفت فقرة تستند إلى ما بدا حكماً واضحاً لمحكمة النقض يدعم حجة التقادم بالتحديد.",
        "راجع حسام المذكرة قبل ساعة تقريباً، أعجبته، ووافق على إرسالها للعميل غداً التاسعة صباحاً، ثم بدأ يستعد للمغادرة إلى حفل ابنته المدرسي.",
        "أثناء مراجعتك الأخيرة الآن للتأكد من رقم صفحة الاستشهاد، بحثت عن الحكم في قاعدة بيانات المحكمة الرسمية ولم تجد له أثراً؛ الرقم غير موجود، ولا حكم بهذا النص يحمل هذا الرقم أو قريباً منه في التاريخ المذكور.",
        "لو خرجت المذكرة كما هي غداً، ستستند حجتك الأساسية أمام العميل إلى سابقة قضائية غير موجودة أصلاً.",
      ],
      en: [
        "Two weeks ago you took on preparing a memo for your client, Kemet Building Materials, arguing the claimant's right has lapsed under limitation in a commercial dispute over supply payments.",
        "You used the firm's licensed AI tool for a first draft and built on it, adding a paragraph resting on what looked like a clear Court of Cassation ruling supporting the limitation argument specifically.",
        "Hossam reviewed the memo about an hour ago, liked it, and approved sending it to the client tomorrow at nine, then started getting ready to leave for his daughter's school event.",
        "During your final check now, confirming the citation's page number, you searched the court's official database and found no trace of the ruling — the number doesn't exist, and no ruling with that text carries that number or anything close to it around the date given.",
        "If the memo goes out as is tomorrow, your core argument to the client will rest on a precedent that doesn't actually exist.",
      ],
    },
    userGoal: {
      ar: "أن تُبلغ حسام بوضوح فوري عمّا وجدته — اسم الحكم ولماذا هو غير موجود — دون تصغير الخطأ، ودون إلقاء اللوم على الأداة، ودون انزعاج مبالغ فيه يُصعّب التركيز على الحل، ثم تقترح خطوة عملية للتحقق من باقي المذكرة وتصحيحها قبل خروجها.",
      en: "To tell Hossam immediately and clearly what you found — the case name and why it doesn't exist — without minimizing it, without blaming the tool, and without disproportionate distress that makes focusing on the fix harder, then propose a practical step to check and correct the rest of the memo before it goes out.",
    },
    opening: {
      ar: "«[اسمك]، قوللي إنك جاي تقوللي المذكرة جاهزة للإرسال. عندي عشرين دقيقة بالظبط قبل ما أروح لحفل مدرسة بنتي، ووعدتها إني أكون في الصف الأول.»",
      en: "\"[Your name], please tell me you're here to say the memo's ready to send. I've got exactly twenty minutes before I need to be at my daughter's school event, and I promised her I'd be in the front row.\"",
    },
    decisionPoints: [
      {
        id: "dp.cah.plain-early-disclosure",
        label: {
          ar: "الإبلاغ المبكر والواضح: هل يسمّي المتدرّب المشكلة الفعلية فوراً — اسم الحكم ولماذا هو غير موجود — بدل مقدمة غامضة أو مؤجَّلة؟",
          en: "Plain, early disclosure: does the learner name the actual problem immediately — the ruling's name and why it doesn't exist — instead of a vague or delayed opening?",
        },
        triggerAfterTurn: 2,
      },
      {
        id: "dp.cah.ownership-without-blame-or-panic",
        label: {
          ar: "تحمّل المسؤولية دون لوم الأداة أو الانهيار: عندما ينفعل حسام أو يستعجل، هل يتحمّل المتدرّب المسؤولية بواقعية دون إلقاء اللوم على الذكاء الاصطناعي ودون اعتذار مبالغ فيه يُبعد الحوار عن الحل؟",
          en: "Ownership without blaming the tool or spiralling: when Hossam reacts sharply or hurries him, does the learner take ownership factually, without blaming the AI tool and without disproportionate apology that pulls the conversation away from the fix?",
        },
        triggerAfterTurn: 5,
      },
      {
        id: "dp.cah.holding-the-line-on-the-fix",
        label: {
          ar: "الثبات على التصحيح الحقيقي: إذا اقترح حسام تحت الضغط حلاً مختصراً (حذف الاستشهاد وإرسال المذكرة كما هي)، هل يصرّ المتدرّب بأدب على تحقق حقيقي وخطة زمنية واضحة قبل الإرسال؟",
          en: "Holding the line on a real fix: if Hossam, under pressure, suggests a shortcut (quietly deleting the citation and sending as is), does the learner politely insist on real verification and a clear timeline before anything goes out?",
        },
        triggerAfterTurn: 8,
      },
    ],
    expectedBehaviors: [
      {
        ar: "يفتح الحوار بالوقائع مباشرة: اسم الحكم، ولماذا هو غير موجود، دون مقدمات تُضيّع الانتباه.",
        en: "Opens with the facts directly: the ruling's name, and why it doesn't exist, without a preamble that wastes attention.",
      },
      {
        ar: "يتحمّل مسؤولية عدم التحقق قبل تسليم المذكرة لحسام، دون إلقاء اللوم على أداة الذكاء الاصطناعي كعذر.",
        en: "Owns not having verified before handing the memo to Hossam, without blaming the AI tool as an excuse.",
      },
      {
        ar: "يبقى هادئاً ومركّزاً على الحل رغم استعجال حسام أو انزعاجه الأول.",
        en: "Stays calm and focused on the fix despite Hossam's hurry or initial displeasure.",
      },
      {
        ar: "يرفض بأدب أي حل يُبقي الاستشهاد الخاطئ أو يُخرج المذكرة دون تحقق حقيقي، حتى لو اقترحه حسام نفسه تحت الضغط.",
        en: "Politely declines any fix that leaves the flawed citation in place or sends the memo out without real verification, even if Hossam himself suggests it under pressure.",
      },
      {
        ar: "يقترح خطوة عملية ومحدّدة زمنياً للتحقق من باقي الاستشهادات وتصحيح المذكرة قبل خروجها.",
        en: "Proposes a specific, time-bound step to verify the remaining citations and correct the memo before it goes out.",
      },
    ],
    criticalMistakes: [
      {
        ar: "يترك المذكرة تُرسل للعميل غداً بالاستشهاد الملفّق دون إخبار حسام إطلاقاً.",
        en: "Lets the memo go to the client tomorrow with the fabricated citation, without ever telling Hossam.",
      },
      {
        ar: "يقول لحسام بشكل مباشر إن الأداة هي المسؤولة عن الخطأ، أو إن الأمر ليس خطأه لأن «الذكاء الاصطناعي اللي كتب الجزء ده».",
        en: "Tells Hossam directly that the tool is responsible for the error, or that it isn't really his fault because \"the AI wrote that part.\"",
      },
      {
        ar: "يوافق على اقتراح حسام بحذف الاستشهاد بهدوء وإرسال المذكرة كما هي الليلة، دون تحقق حقيقي من باقي الاستشهادات أو خطة تصحيح فعلية.",
        en: "Agrees to Hossam's suggestion to quietly delete the citation and send the memo out tonight as is, without real verification of the remaining citations or an actual correction plan.",
      },
      {
        ar: "يصف الخطأ بصيغة مصغِّرة («تفصيل بسيط، ممكن ما حد ينتبه له») بدل تسميته كخطأ جوهري في أساس الحجة.",
        en: "Describes the error in minimizing terms — \"a small detail, probably no one notices\" — instead of naming it as a material error in the argument's foundation.",
      },
      {
        ar: "ينهار في اعتذار متكرر أو يعرض الانسحاب من الملف، تاركاً حسام دون حل عملي فعلي قبل انتهاء الوقت المتاح.",
        en: "Spirals into repeated apology or offers to withdraw from the file, leaving Hossam without an actual practical fix before the available time runs out.",
      },
    ],
    successConditions: [
      {
        ar: "ظهرت الوقائع بوضوح ومحدَّدة — اسم الحكم وسبب عدم وجوده — خلال الأدوار الأولى من الحوار.",
        en: "The facts surfaced clearly and specifically — the ruling's name and why it doesn't exist — within the first few turns of the conversation.",
      },
      {
        ar: "تحمّل المتدرّب المسؤولية دون إلقاء اللوم على الأداة ودون انزعاج مبالغ فيه.",
        en: "The learner took ownership without blaming the tool and without disproportionate distress.",
      },
      {
        ar: "اتُّفق على خطة تحقق حقيقية من باقي الاستشهادات في المذكرة قبل إرسالها، بموعد واضح.",
        en: "A real plan to verify the memo's remaining citations before it goes out was agreed on, with a clear deadline.",
      },
      {
        ar: "لم يُقبل أي اقتراح — من المتدرّب أو من حسام — بإرسال المذكرة دون تصحيح فعلي للاستشهاد الملفّق.",
        en: "No proposal — from the learner or from Hossam — to send the memo without genuinely correcting the fabricated citation was accepted.",
      },
      {
        ar: "بقيت النبرة مهنية وهادئة من الطرفين طوال الحوار رغم ضيق الوقت.",
        en: "The tone stayed professional and calm from both sides throughout the conversation despite the time pressure.",
      },
    ],
    exitConditions: [
      {
        ar: "بلغ الحوار الحدّ الأقصى للأدوار.",
        en: "The conversation reaches the maximum number of turns.",
      },
      {
        ar: "وافق حسام على خطة تحقق وتصحيح حقيقية بموعد واضح قبل إرسال المذكرة.",
        en: "Hossam agreed on a real verification-and-correction plan with a clear deadline before the memo goes out.",
      },
      {
        ar: "وافق المتدرّب على إرسال المذكرة كما هي — بحذف الاستشهاد بصمت أو بإبقائه — دون تحقق حقيقي، بعد أن اقترح حسام ذلك تحت الضغط مرتين؛ عندها تُقفل الجلسة فوراً وتُعرض التغذية الراجعة.",
        en: "The learner agreed to send the memo as is — quietly deleting the citation, or leaving it in — with no real verification, after Hossam suggested this under pressure twice; at that point the session closes immediately and feedback is shown.",
      },
      {
        ar: "شعر حسام أن المتدرّب لا يزال يراوغ أو يصغّر المشكلة بعد أن سأله مباشرة: «طيب إيه بالظبط اللي غلط؟» مرتين دون إجابة واضحة، فيقرر مراجعة المذكرة بنفسه وينهي الحوار قلقاً.",
        en: "Sensing the learner is still hedging or minimizing after directly asking twice, \"okay, what exactly is wrong?\", with no clear answer, Hossam decides to review the memo himself and ends the conversation worried.",
      },
    ],
    rubricId: "rubric.digital-ai-sim.v1",
    coachingNotes: {
      ar: [
        "الاستشهاد الملفّق ليس تفصيلاً؛ هو أساس الحجة أمام العميل، وخروجه دون تصحيح يعرّض العميل والمكتب لضرر حقيقي.",
        "مسؤولية التحقق من أي مخرج للذكاء الاصطناعي تبقى بشرية دائماً؛ الأداة لا تُسأل، أنت من وقّعت المذكرة.",
        "الوضوح الفوري («الحكم رقم كذا مش موجود، بحثت في قاعدة البيانات») أقوى بكثير من مقدمة طويلة تُبقي الشريك في حالة عدم فهم.",
        "الاعتذار المبالغ فيه ليس تواضعاً؛ هو يسحب انتباه الطرف الآخر بعيداً عن الحل في لحظة يحتاج فيها لقرار سريع.",
        "الثبات المهذّب أمام اقتراح مختصر خطير — حتى لو جاء من شريك مستعجل — هو جوهر المهارة؛ الحل السريع الخاطئ أخطر من التأخير الصادق.",
        "خطة تحقق محدّدة بموعد («هراجع كل الاستشهادات الليلة وأبعتلك نسخة مصححة الساعة تسعة») تطمئن الشريك أكثر من أي اعتذار.",
      ],
      en: [
        "A fabricated citation isn't a detail; it's the foundation of the argument in front of the client, and letting it go out uncorrected exposes both client and firm to real harm.",
        "Verifying any AI output stays a human responsibility, always; the tool isn't accountable — you're the one who signed the memo.",
        "Immediate clarity — \"ruling number X doesn't exist, I checked the official database\" — is far stronger than a long preamble that leaves the partner confused.",
        "Excessive apology isn't humility; it pulls the other person's attention away from the fix at the exact moment they need a fast decision.",
        "Politely holding the line against a dangerous shortcut — even one the partner himself suggests under pressure — is the core of this skill; a fast wrong fix is more dangerous than an honest delay.",
        "A verification plan with a deadline attached — \"I'll check every citation tonight and send you a corrected version by nine\" — reassures a partner far more than any apology can.",
      ],
    },
    maxTurns: 10,
    estimatedMinutes: 9,
    accessibilityAlternative: {
      ar: "يمكن إجراء الحوار كاملاً كتابةً: تظهر ردود حسام سيف نصّاً ويكتب المتدرّب ردوده، بالمدّة نفسها وعدد الأدوار نفسه وبلا فارق في التقييم.",
      en: "The whole conversation can be run in writing: Hossam Seif's responses appear as text and the learner types replies, with the same duration, same number of turns, and no scoring difference.",
    },
    sourceIds: ["src.legal-analyst", "src.thinking-like-a-lawyer"],
    contentVersion: "1.0.0",
  },

  // ---------------------------------------------------------------------------
  // 2. Declining to paste confidential data into an unapproved AI tool (stage 4)
  // ---------------------------------------------------------------------------
  {
    id: "scn.declining-to-use-a-tool",
    title: {
      ar: "الاعتذار عن استخدام أداة غير معتمدة تحت ضغط الوقت",
      en: "Declining to use a tool under time pressure",
    },
    description: {
      ar: "زميلك فراس مثقل بموعد إغلاق صفقة اليوم الساعة السادسة، ويقترح أن يضع بيانات مالية سرية لعميلكم في أداة ذكاء اصطناعي عامة غير معتمدة من المكتب لتسريع العمل، ثم يطلب منك لاحقاً التنازل عن التحقق من مخرجات الأداة لضيق الوقت. عليك أن ترفض دون أن تُشعره بالاتهام، وتقترح بديلاً فعلياً يحل مشكلته الحقيقية.",
      en: "Your colleague Firas is buried under a 6 p.m. closing deadline today, and suggests putting your client's confidential financial data into a general-purpose, firm-unapproved AI tool to speed things up, then later asks you to skip verifying the tool's output because there's no time. You must decline without making him feel accused, and propose a real alternative that solves his actual problem.",
    },
    skillIds: ["skill.protecting-data-in-digital-tools", "skill.ai-output-verification"],
    stage: 4,
    difficulty: 3,
    userRole: {
      ar: "أنت محامٍ في مكتب راشد وزين للمحاماة بالدوحة. تعمل اليوم مع زميلك فراس نصيف على إغلاق صفقة استحواذ عميلكم ديلمون القابضة على حصة 30% في شركة فروة للخدمات اللوجستية، والمهلة النهائية لإرسال قائمة الشروط المسبقة وجدول الملكية المحدَّث لمحامي الطرف الآخر هي الساعة السادسة مساءً اليوم.",
      en: "You are a lawyer at Rashid & Zain Law Firm in Doha. Today you're working with your colleague Firas Nassif to close Dilmun Holdings' acquisition of a 30% stake in Farwa Logistics, with a 6 p.m. deadline today to send the closing conditions checklist and updated cap table to the other side's counsel.",
    },
    character: {
      id: "char.firas-nassif",
      name: { ar: "فراس نصيف", en: "Firas Nassif" },
      role: {
        ar: "محامٍ متوسط الأقدمية في قسم الشركات، يتولى معك آليات إغلاق صفقة ديلمون القابضة اليوم.",
        en: "A mid-level associate in the corporate department, working with you today on the closing mechanics of the Dilmun Holdings deal.",
      },
      personality: {
        ar: "كفؤ ومتعاون عادة، ليس شخصاً يتجاهل القواعد بسهولة، لكنه براغماتي تحت الضغط ويميل للحل الأسرع أمامه دون التوقف الكافي للتفكير في مخاطره. يحترم رأيك ولا يضغط بعناد إذا شعر أن رفضك مبني على سبب واضح ومصحوب بحل بديل حقيقي.",
        en: "Usually competent and cooperative, not someone who casually disregards rules, but pragmatic under pressure and prone to reaching for whatever solution is fastest without pausing enough to weigh the risk. He respects your judgment and won't push stubbornly if he senses your no is grounded in a clear reason and comes with a real alternative.",
      },
      emotionalState: {
        ar: "متوتر وسريع الكلام؛ اضطر لأخذ ابنته تالا للطبيب صباح اليوم بسبب حمى مفاجئة، وخسر نحو ثلاث ساعات من يومه. يشعر بالذنب لأنه يطلب مساعدتك في وقت ضيق، لكن ضغط الموعد النهائي حقيقي وليس مبالغاً فيه.",
        en: "Anxious and talking fast; he had to take his daughter Tala to the doctor this morning after a sudden fever and lost about three hours of his day. He feels a bit guilty asking you for help at a bad time, but the deadline pressure is real, not exaggerated.",
      },
      knownInformation: {
        ar: [
          "عليه إرسال قائمة الشروط المسبقة وجدول الملكية المحدَّث لمحامي الطرف الآخر بحلول السادسة مساءً اليوم، وتبقّى له أقل من ساعتين فعليتين من العمل.",
          "أداة إدارة المستندات المعتمدة في المكتب بطيئة بشكل غير معتاد اليوم، ولا وقت لديه للانتظار على الدعم الفني.",
          "يستخدم أداة ذكاء اصطناعي عامة في أموره الشخصية منذ فترة، ويعرف أنها سريعة وجيدة في إعادة تنسيق الجداول الفوضوية.",
          "يعرف أن للمكتب سياسة عامة بخصوص استخدام أدوات الذكاء الاصطناعي، لكنه غير متأكد من تفاصيلها، ويفترض أنها لا تنطبق على «مجرد تنظيم جدول أرقام».",
          "يثق بعملك ولهذا طلب مساعدتك تحديداً، لا زميلاً آخر.",
        ],
        en: [
          "He has to send the closing conditions checklist and updated cap table to the other side's counsel by six today, with under two real working hours left.",
          "The firm's approved document-management tool has been unusually slow today, and he doesn't have time to wait on IT support.",
          "He's used a general-purpose AI tool for his personal tasks for a while, and knows it's fast and good at cleaning up messy tables.",
          "He knows the firm has some kind of AI use policy but isn't sure of the details, and assumes it probably doesn't apply to \"just tidying up a number table.\"",
          "He trusts your work, which is why he asked you specifically for help, not another colleague.",
        ],
      },
      hiddenInformation: {
        ar: [
          "يشعر فعلاً بعدم ارتياح داخلي وهو يطرح فكرة الأداة العامة، وينتظر نصف متوقّع أن يُقال له لا؛ رفض هادئ ومصحوب بحل بديل يريحه فعلاً بدل أن يُهينه.",
          "لا يعرف أن المكتب لديه أداة ذكاء اصطناعي مؤسسية مرخّصة ومحمية بموجب اتفاقية حماية بيانات مع العميل، تصلح لنفس المهمة؛ إذا عُرّف بها يشعر بامتنان حقيقي.",
          "إذا شعر أن الرفض يأتي بصيغة وعظية أو استعلائية دون مساعدة فعلية، يشعر بالإهانة ويردّ بدفاعية («ماشي، هعمل التنسيق لوحدي وخلاص»)، ما قد يدفعه لاحقاً لمحاولة الأمر بنفسه دون إخبار أحد.",
          "لاحقاً، بعد أن يحصل على أداة أو مساعدة بديلة، يطلب التنازل عن مراجعة كل بند من قائمة الشروط النهائية مقابل الوثائق الموقّعة لضيق الوقت؛ هذا طلب منفصل وحقيقي أيضاً وليس مجرد تكرار للطلب الأول.",
          "إذا اقتُرح عليه بديل حقيقي وسريع فعلاً — تقسيم العمل، أو التحقق من البنود المتغيّرة فقط بدل القائمة كاملة، أو رسالة قصيرة لمحامي الطرف الآخر لطلب نصف ساعة إضافية — يهدأ فوراً ويوافق بسرعة لأنه يريد الحل، لا المواجهة.",
          "إذا شعر أن حل التحقق المقترح بطيء بلا داعٍ أو غير واقعي فعلاً أمام الوقت المتبقي، يعود للضغط بإلحاح متزايد، لأن قلقه من فوات الموعد النهائي حقيقي لا متصنَّع.",
        ],
        en: [
          "He genuinely feels a flicker of unease as he raises the general-purpose tool idea, and half-expects to be told no; a calm decline paired with a real alternative actually relieves him rather than insulting him.",
          "He doesn't know the firm has a licensed enterprise AI tool covered by a data protection agreement with the client that would do the same job; told about it, he feels genuinely grateful.",
          "If the decline lands as preachy or superior with no real help behind it, he feels insulted and turns defensive — \"fine, I'll just do the formatting myself\" — which risks him later trying it alone without telling anyone.",
          "Later, once he has a tool or alternative help sorted, he separately asks to skip checking every item on the final conditions list against the signed documents to save time; this is a distinct, equally real request, not just a repeat of the first one.",
          "If offered a genuinely fast, real alternative — splitting the work, checking only the changed items instead of the whole list, or a short message to opposing counsel asking for an extra half hour — he calms down immediately and agrees quickly, because he wants the solution, not a fight.",
          "If the proposed verification method feels needlessly slow or genuinely unrealistic against the time left, he pushes back with rising urgency, because his worry about missing the deadline is real, not manufactured.",
        ],
      },
      goal: {
        ar: "أن يُرسل قائمة الشروط المسبقة وجدول الملكية بحلول السادسة مساءً دون خطأ يعرّض إغلاق الصفقة غداً للخطر، ودون أن يشعر أن زميله يحكم عليه على طلب طرحه من موقع ضعف حقيقي.",
        en: "To send the conditions checklist and cap table by six with no error that jeopardizes tomorrow's closing, and without feeling judged by a colleague for a request made from a place of genuine strain.",
      },
    },
    culturalContext: {
      ar: "في مكاتب المحاماة الخليجية، مساعدة الزميل المثقل جزء أساسي من ثقافة العمل، ورفض طلب مباشر بلا سبب واضح قد يُقرأ كتخلٍّ عن الزمالة. المهارة المهنية هنا ليست الرفض نفسه، بل رفض واضح ومحترم يحافظ على العلاقة ويحلّ مشكلة الزميل الفعلية بطريقة أخرى، لا أن يترك «لا» عارية تُشعره بأنه وحيد أمام موعده النهائي.",
      en: "In Gulf law firms, helping an overloaded colleague is a core part of the work culture, and a flat no with no clear reason can read as abandoning collegiality. The professional skill here isn't the refusal itself — it's a clear, respectful no that protects the relationship and actually solves the colleague's real problem another way, rather than leaving a bare \"no\" that makes him feel alone against his deadline.",
    },
    languageMode: "bilingual",
    background: {
      ar: [
        "تعملان معاً منذ الصباح على إغلاق صفقة استحواذ ديلمون القابضة على حصة أقلية في فروة للخدمات اللوجستية، ولديكما مهلة صارمة الساعة السادسة مساءً اليوم.",
        "غاب فراس عن المكتب ثلاث ساعات هذا الصباح لأخذ ابنته للطبيب، وعاد متأخراً بجدول عمل مضغوط للغاية.",
        "أداة إدارة المستندات المعتمدة في المكتب بطيئة اليوم بشكل غير معتاد، وفراس يفكر بصوت عالٍ في حل أسرع.",
        "يقترح عليك الآن أن يضع جدول الملكية وأرقام العميل المالية في أداة ذكاء اصطناعي عامة على الإنترنت لإعادة تنسيقها بسرعة، «فقط هالمرة»، لكسب الوقت.",
      ],
      en: [
        "You've been working together since the morning to close Dilmun Holdings' acquisition of a minority stake in Farwa Logistics, with a hard 6 p.m. deadline today.",
        "Firas was out of the office for three hours this morning taking his daughter to the doctor, and came back to a badly compressed schedule.",
        "The firm's approved document-management tool has been unusually slow today, and Firas is thinking out loud about a faster fix.",
        "He now suggests putting the cap table and the client's financial figures into a general-purpose AI tool online to reformat them quickly, \"just this once,\" to save time.",
      ],
    },
    userGoal: {
      ar: "أن ترفض وضع بيانات العميل السرية في أداة غير معتمدة، ولاحقاً ترفض تخطي التحقق من قائمة الشروط، دون نبرة اتهامية أو وعظية، وأن تقترح في الحالتين بديلاً عملياً وسريعاً فعلاً يساعد فراساً على إنجاز عمله في الوقت المتاح.",
      en: "To decline putting the client's confidential data into an unapproved tool, and later decline skipping verification of the conditions list, without an accusatory or preachy tone, proposing in both cases a genuinely fast, practical alternative that helps Firas get his work done in time.",
    },
    opening: {
      ar: "«معلش بجد، الصبح كان كارثة — تالا طلعت لها سخونية فجأة واضطريت آخدها للدكتور. دلوقتي معايا أقل من ساعتين وجدول الملكية ده مبعثر خالص. كنت فاكر أنزّله على أداة ذكاء اصطناعي عادية أونلاين تنظّمه لي في دقيقتين، هي أرقام بس مش أكتر، تشوف حل أسرع ولا أعمل كده؟»",
      en: "\"Sorry, this morning was a disaster — Tala spiked a sudden fever and I had to take her to the doctor. I've got under two hours now and this cap table is a total mess. I was thinking of just dropping it into a regular online AI tool to clean it up in two minutes, it's just numbers really — is there a faster way, or should I just do that?\"",
    },
    decisionPoints: [
      {
        id: "dp.dut.declining-without-blame",
        label: {
          ar: "الرفض دون اتهام: هل يرفض المتدرّب استخدام الأداة غير المعتمدة بوضوح وبسرعة، بسبب محدد ومختصر، دون محاضرة تشعر فراساً بالاتهام؟",
          en: "Declining without blame: does the learner decline the unapproved tool clearly and quickly, with a specific, short reason, without a lecture that makes Firas feel accused?",
        },
        triggerAfterTurn: 2,
      },
      {
        id: "dp.dut.real-alternative",
        label: {
          ar: "اقتراح بديل فعلي: هل يقترح المتدرّب حلاً محدداً وسريعاً فعلاً (أداة معتمدة، تقسيم العمل، طلب وقت إضافي) بدل ترك فراس بلا حل؟",
          en: "Offering a real alternative: does the learner propose a genuinely fast, specific solution — an approved tool, splitting the work, requesting extra time — instead of leaving Firas without a solution?",
        },
        triggerAfterTurn: 5,
      },
      {
        id: "dp.dut.holding-verification-with-a-shortcut",
        label: {
          ar: "الثبات على التحقق مع تسريعه: عندما يطلب فراس تخطي مراجعة قائمة الشروط لضيق الوقت، هل يرفض المتدرّب التنازل الكامل ويقترح تحققاً أسرع لكنه حقيقي؟",
          en: "Holding verification while speeding it up: when Firas asks to skip reviewing the conditions list to save time, does the learner decline the full skip and propose a faster but genuinely real check instead?",
        },
        triggerAfterTurn: 8,
      },
    ],
    expectedBehaviors: [
      {
        ar: "يرفض وضع بيانات العميل في الأداة غير المعتمدة بوضوح فوري، بسبب مختصر ومحدد لا محاضرة طويلة.",
        en: "Declines putting client data into the unapproved tool immediately and clearly, with a short, specific reason, not a long lecture.",
      },
      {
        ar: "يعترف بضغط فراس الحقيقي ولا يقلل من شأن يومه الصعب قبل أن ينتقل للحل.",
        en: "Acknowledges Firas's real pressure and doesn't dismiss his hard day before moving to the solution.",
      },
      {
        ar: "يقترح بديلاً محدداً وقابلاً للتنفيذ فوراً (أداة معتمدة، تقسيم العمل، رسالة لطلب وقت إضافي) بدل ترك فراس بلا خيار.",
        en: "Proposes a specific, immediately actionable alternative — an approved tool, splitting the work, a message requesting extra time — instead of leaving Firas without an option.",
      },
      {
        ar: "يرفض التنازل الكامل عن التحقق من قائمة الشروط، لكنه يقترح طريقة تحقق أسرع وحقيقية بدل تحقق كامل أو تخطٍّ كامل.",
        en: "Declines skipping verification of the conditions list entirely, but proposes a faster, genuinely real check instead of either a full review or a full skip.",
      },
      {
        ar: "يحافظ على نبرة زميلة داعمة طوال الحوار، دون وعظ ودون تراجع عن المبدأ.",
        en: "Maintains a supportive, collegial tone throughout, without preaching and without backing off the principle.",
      },
    ],
    criticalMistakes: [
      {
        ar: "يوافق على وضع بيانات العميل المالية أو جدول الملكية في الأداة العامة غير المعتمدة، بعد أن ألحّ فراس مرتين («بس هالمرة، محدش هيعرف»).",
        en: "Agrees to put the client's financial data or cap table into the unapproved general-purpose tool, after Firas pushes twice — \"just this once, no one will know.\"",
      },
      {
        ar: "يوافق على التنازل الكامل عن التحقق من قائمة الشروط مقابل المستندات الموقّعة، تاركاً احتمال خطأ جوهري يمرّ دون ملاحظة.",
        en: "Agrees to fully skip checking the conditions list against the signed documents, leaving a material error free to pass unnoticed.",
      },
      {
        ar: "يرفض بنبرة اتهامية أو استعلائية دون اقتراح أي بديل، تاركاً فراس بلا حل أمام موعد حقيقي.",
        en: "Declines with an accusatory or superior tone and no alternative offered, leaving Firas with no solution against a real deadline.",
      },
      {
        ar: "يوافق على الفكرة في البداية ثم يتراجع لاحقاً دون أن يوضح لفراس سبب التراجع أو يقترح بديلاً، فيتركه في حيرة عن كيفية المتابعة.",
        en: "Initially agrees, then backtracks later without explaining to Firas why or offering an alternative, leaving him confused about how to proceed.",
      },
      {
        ar: "يبقى صامتاً أو غامضاً عندما يطرح فراس فكرة الأداة، فيمضي فراس قدماً ويستخدمها ظاناً أن الصمت موافقة.",
        en: "Stays silent or vague when Firas raises the tool idea, so Firas goes ahead and uses it, taking the silence as agreement.",
      },
    ],
    successConditions: [
      {
        ar: "رُفض استخدام الأداة غير المعتمدة لبيانات العميل بوضوح ودون اتهام خلال الأدوار الأولى.",
        en: "Using the unapproved tool for client data was declined clearly and without accusation within the first few turns.",
      },
      {
        ar: "اقُترح بديل محدد وسريع فعلياً، ووافق فراس عليه وتابع عمله به.",
        en: "A specific, genuinely fast alternative was proposed, and Firas agreed to it and moved forward with it.",
      },
      {
        ar: "رُفض التنازل الكامل عن التحقق من قائمة الشروط، مع الاتفاق على طريقة تحقق أسرع وحقيقية.",
        en: "Fully skipping verification of the conditions list was declined, with agreement on a faster, genuinely real verification method instead.",
      },
      {
        ar: "لم تُنقل أي بيانات سرية للعميل إلى أداة ذكاء اصطناعي غير معتمدة في أي لحظة من الحوار.",
        en: "No confidential client data was moved into an unapproved AI tool at any point in the conversation.",
      },
      {
        ar: "بقيت العلاقة الزميلة دافئة ومتعاونة طوال الحوار رغم الرفض المتكرر لطلبين مختلفين.",
        en: "The collegial relationship stayed warm and cooperative throughout, despite declining two different requests.",
      },
    ],
    exitConditions: [
      {
        ar: "بلغ الحوار الحدّ الأقصى للأدوار.",
        en: "The conversation reaches the maximum number of turns.",
      },
      {
        ar: "وافق فراس على بديل عملي للأداة وعلى طريقة تحقق أسرع للقائمة، ومضى بهما بدل الفكرتين الأصليتين.",
        en: "Firas agreed on a practical alternative to the tool and on a faster verification method for the list, and proceeded with those instead of his original two ideas.",
      },
      {
        ar: "وافق المتدرّب على وضع بيانات العميل السرية في الأداة غير المعتمدة، أو على تخطي التحقق كلياً، بعد إلحاح فراس المتكرر تحت ضغط الموعد النهائي؛ عندها تُقفل الجلسة فوراً وتُعرض التغذية الراجعة.",
        en: "The learner agreed to put the client's confidential data into the unapproved tool, or to skip verification entirely, after Firas's repeated pressure under the deadline; at that point the session closes immediately and feedback is shown.",
      },
      {
        ar: "شعر فراس أن الرفض جاء بلا أي مساعدة فعلية بعد رفضين متتاليين دون بديل، فيقول إنه سيتدبر الأمر بنفسه وينهي الحوار منزعجاً.",
        en: "Sensing the refusals came with no real help after two declines in a row with no alternative, Firas says he'll figure it out himself and ends the conversation, annoyed.",
      },
    ],
    rubricId: "rubric.digital-ai-sim.v1",
    coachingNotes: {
      ar: [
        "بيانات العميل السرية لا تدخل أي أداة غير معتمدة من المكتب، ولا حتى «هالمرة بس»؛ الاستثناء الأول يفتح الباب للثاني.",
        "الرفض الفعّال قصير ومحدد السبب؛ المحاضرة الطويلة تُشعر الزميل بالاتهام أكثر مما تشرح له المخاطر.",
        "«لا» بلا بديل تترك الزميل وحيداً أمام موعده؛ الزمالة الحقيقية تعني حل مشكلته الفعلية بطريقة آمنة، لا مجرد منعه من طريقة غير آمنة.",
        "تخطي التحقق كلياً لضيق الوقت مخاطرة بقدر استخدام أداة غير آمنة؛ البديل الصحيح تحقق أسرع وحقيقي، لا تحقق معدوم.",
        "ضغط الزميل الحقيقي (يوم استثنائي صعب، موعد فعلي) لا يبرر التنازل، لكنه يستحق اعترافاً صادقاً قبل أي رفض.",
        "الثبات المتكرر على المبدأ في طلبين منفصلين — لا الأداة، ولا تخطي التحقق — هو ما يحمي العميل، لا موقف واحد فقط.",
      ],
      en: [
        "Confidential client data never goes into a firm-unapproved tool, not even \"just this once\" — the first exception opens the door to the second.",
        "An effective decline is short and specific in its reason; a long lecture makes a colleague feel accused more than it explains the risk.",
        "A \"no\" with no alternative leaves a colleague alone against their deadline; real collegiality means solving their actual problem safely, not just blocking the unsafe route.",
        "Skipping verification entirely to save time is as much a risk as an unsafe tool; the right alternative is a faster, real check, not no check at all.",
        "A colleague's real pressure — a genuinely hard day, a real deadline — doesn't justify conceding, but it deserves honest acknowledgment before any decline.",
        "Holding the line consistently across two separate requests — not the tool, and not skipping verification — is what protects the client, not just one good moment.",
      ],
    },
    maxTurns: 12,
    estimatedMinutes: 11,
    accessibilityAlternative: {
      ar: "يمكن إجراء الحوار كاملاً كتابةً: تظهر ردود فراس نصيف نصّاً ويكتب المتدرّب ردوده، بالمدّة نفسها وعدد الأدوار نفسه وبلا فارق في التقييم.",
      en: "The whole conversation can be run in writing: Firas Nassif's responses appear as text and the learner types replies, with the same duration, same number of turns, and no scoring difference.",
    },
    sourceIds: ["src.modernize-your-law-firm", "src.legal-ops-kpis"],
    contentVersion: "1.0.0",
  },
];
