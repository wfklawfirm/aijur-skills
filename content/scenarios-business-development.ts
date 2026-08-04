import type { ScenarioDef } from "./types";

/**
 * Business Development simulations for AIJUR Professional Skills Lab.
 *
 * Both scenarios put the learner in the two moments where lawyers most often
 * leave business development value on the table: the follow-up call after a
 * matter has genuinely gone well, and the social/professional moment where a
 * warm contact — never a client — mentions a real problem with a legal
 * dimension. Neither scenario rewards a hard sales pitch, and neither
 * rewards staying silent out of politeness when a real opening exists.
 *
 * Rules honoured throughout:
 *  - no scenario rewards promising, implying or guaranteeing a legal outcome
 *    to make an ask land or close an opportunity;
 *  - no scenario rewards a vague, unspecific ask ("let me know if you hear
 *    of anyone" / "let's talk sometime") over a concrete, easy next step;
 *  - no scenario rewards repeated pressure after the other person has
 *    signalled discomfort or deflected once;
 *  - no scenario rewards giving substantive legal advice on the spot in a
 *    social setting instead of proposing a proper consultation;
 *  - every scenario has a text-only route.
 */
export const BUSINESS_DEVELOPMENT_SCENARIOS: ScenarioDef[] = [
  // ---------------------------------------------------------------------------
  // 1. Asking a satisfied client for a referral (stage 3)
  // ---------------------------------------------------------------------------
  {
    id: "scn.asking-for-referral",
    title: {
      ar: "طلب إحالة من عميلة راضية",
      en: "Asking a satisfied client for a referral",
    },
    description: {
      ar: "أنهيت للتو نزاع دفع لصالح هند السويدي بنتيجة ممتازة، وهي تتصل لتشكرك. لديك فرصة حقيقية لطلب إحالة أو تعريف بأصحاب أعمال آخرين قد يحتاجون خدمة مماثلة، دون أن تتحول المكالمة إلى مكالمة مبيعات.",
      en: "You've just closed out a payment dispute for Hind Al Suwaidi with an excellent result, and she's calling to thank you. You have a real opening to ask for a referral or an introduction to other business owners who might need similar help — without turning the call into a sales pitch.",
    },
    skillIds: ["skill.referral-generation", "skill.relationship-building"],
    stage: 3,
    difficulty: 2,
    userRole: {
      ar: "أنت محامٍ في مكتب الفارس للمحاماة والاستشارات القانونية بدبي. تولّيت قبل ستة أسابيع ملف هند السويدي، مؤسسة استوديو منزل للتصميم الداخلي، بعد أن حجب مقاول التنفيذ الدفعة الأخيرة من مشروع تجهيز متجرها الجديد وارتدّت شيكاته.",
      en: "You are a lawyer at Al-Faris Law & Legal Consulting in Dubai. Six weeks ago you took on the file of Hind Al Suwaidi, founder of Manzil Interiors design studio, after her fit-out contractor withheld the final instalment on her new store and his cheques bounced.",
    },
    character: {
      id: "char.hind-al-suwaidi",
      name: { ar: "هند السويدي", en: "Hind Al Suwaidi" },
      role: {
        ar: "مؤسسة ومديرة استوديو منزل للتصميم الداخلي، عميلة أنهيت لها للتو نزاعاً مع مقاول بنتيجة مُرضية تماماً.",
        en: "Founder and director of Manzil Interiors design studio — a client whose contractor dispute you've just resolved to her full satisfaction.",
      },
      personality: {
        ar: "دافئة وصريحة في التعبير عن امتنانها، رائدة أعمال مشغولة تدير كل تفاصيل استوديوها بنفسها تقريباً. لا يخطر ببالها تلقائياً أن تُحيل عملاء لك ما لم يُطلب منها ذلك بوضوح، لكنها سعيدة بالمساعدة إن طُلب منها بأسلوب مناسب.",
        en: "Warm and openly grateful, a busy entrepreneur who runs nearly every detail of her studio herself. It wouldn't naturally occur to her to refer clients your way unless clearly asked, but she's happy to help if the ask is made well.",
      },
      emotionalState: {
        ar: "مرتاحة ومتحمسة لأن الملف أُغلق أخيراً، لكنها في عجلة من أمرها هذا الأسبوع بسبب معرض تجاري تُحضّر له استوديوها.",
        en: "Relieved and upbeat that the file is finally closed, but genuinely pressed for time this week preparing her studio for a trade exhibition.",
      },
      knownInformation: {
        ar: [
          "استعادت كامل قيمة الدفعة المتنازع عليها تقريباً خلال أسابيع قليلة، دون الدخول في تقاضٍ طويل كانت تخشاه.",
          "هي عضو نشطة في مجلس دبي لأصحاب المشاريع الصغيرة والمتوسطة، وتحضر اجتماعاته الشهرية بانتظام.",
          "تعرف عدداً من أصحاب المتاجر والمطاعم البوتيكية في المجلس نفسه، تحدّثوا لها سابقاً عن مشاكل مشابهة مع مقاولين أو موردين.",
          "تستعد هذا الأسبوع لمعرض تجاري لعرض تصاميم استوديوها، ولديها اجتماع خلال نصف ساعة.",
          "اتصلت اليوم أساساً لتشكرك وتؤكد استلام آخر مستند يخص التسوية.",
        ],
        en: [
          "She recovered almost the full disputed instalment within a few weeks, avoiding the drawn-out litigation she'd feared.",
          "She's an active member of the Dubai SME Business Council and attends its monthly meetings regularly.",
          "She knows several boutique shop and restaurant owners in that same council who've mentioned similar problems with contractors or suppliers.",
          "She's preparing for a trade exhibition showcasing her studio's designs this week, and has a meeting in half an hour.",
          "Her main reason for calling today is to thank you and confirm she received the last settlement document.",
        ],
      },
      hiddenInformation: {
        ar: [
          "فكّرت أكثر من مرة بأن تُخبر صديقات لها في المجلس عنك، لكنها ترددت لأنها لم ترغب في أن تبدو وكأنها «تفرض» عليهنّ محامياً معيناً دون سبب واضح.",
          "لو طُلب منها بوضوح ومباشرة، وأُعطيت سبباً بسيطاً يسهّل عليها الأمر — مثل نوع القضايا التي تودّ إحالتها — ستوافق بسعادة وبسرعة.",
          "تتذكر بالتحديد عضوين في المجلس واجها مؤخراً مشكلة شيكات مرتجعة مع مقاولين، تشعر أنهما قد يستفيدان فوراً من التعريف بك.",
          "لو شعرت أن الطلب مجرد عبارة عامة («لو سمعتِ بحد محتاج محامي خبريه عني»)، تنساه غالباً بسرعة وسط انشغالها.",
          "لو حاولت المكالمة أن تتحول لعرض خدمات إضافية للمكتب بدل الشكر والختام الطبيعي، تشعر بشيء من عدم الارتياح رغم رضاها التام عن النتيجة.",
        ],
        en: [
          "She's thought more than once about mentioning you to friends on the council, but hesitated — not wanting it to feel like she's \"pushing\" a specific lawyer on them without a clear reason.",
          "If asked clearly and directly, and given a simple reason that makes it easy for her — like the kind of matters you'd want introductions for — she'll agree happily and quickly.",
          "She specifically recalls two council members who recently had bounced-cheque trouble with contractors and feels they could use an introduction to you right away.",
          "If the ask lands as a generic line — \"if you hear of anyone who needs a lawyer, let them know about me\" — she's likely to forget it quickly amid her own workload.",
          "If the call starts to feel like a pitch for more of the firm's services rather than a natural thank-you and close, she feels a flicker of discomfort despite being fully satisfied with the result.",
        ],
      },
      goal: {
        ar: "أن تشكرك وتُنهي الملف بامتنان صادق، ثم تعود سريعاً لتحضيرات معرضها.",
        en: "To thank you and close out the matter with genuine gratitude, then get back quickly to her exhibition preparations.",
      },
    },
    culturalContext: {
      ar: "في سوق المحاماة الخليجي، طلب الإحالة المباشر قد يبدو أحياناً غير لائق أو «تجارياً» أكثر من اللازم إذا جاء في توقيت خاطئ. لكن العملاء الراضين عادة يتوقعون أن يُسألوا، والصمت في اللحظة المناسبة يُهدر فرصة حقيقية دون أي مقابل.",
      en: "In the Gulf legal market, a direct referral ask can feel awkward or overly \"salesy\" if the timing is wrong. But satisfied clients generally expect to be asked, and staying silent in the right moment wastes a genuine opening for nothing in return.",
    },
    languageMode: "bilingual",
    background: {
      ar: [
        "استعدتَ لهند خلال ست أسابيع تقريباً كامل الدفعة المتأخرة من شركة الإتقان للمقاولات عبر تسوية تفاوضية، دون الدخول في دعوى قضائية طويلة.",
        "أرسلت هند رسالة أمس تطلب مكالمة قصيرة اليوم «لتغلق الملف رسمياً» وتشكرك.",
        "لم تُثر أي محادثة سابقة معها موضوع إحالة عملاء جدد؛ العلاقة حتى الآن محصورة بهذا الملف فقط.",
        "تتصل بك الآن، وصوتها مرتاح وودود، ولديها نصف ساعة قبل اجتماعها التالي.",
      ],
      en: [
        "Over roughly six weeks, you recovered nearly the full overdue instalment from Al-Itqan Contracting for Hind through a negotiated settlement, avoiding a lengthy lawsuit.",
        "Yesterday Hind messaged asking for a short call today \"to formally close the file\" and to say thank you.",
        "No prior conversation with her has touched on referring new clients; the relationship so far has been limited to this one file.",
        "She calls now, her voice relaxed and friendly, with half an hour before her next meeting.",
      ],
    },
    userGoal: {
      ar: "أن تستقبل شكرها بامتنان صادق، تُلخّص قيمة ما تحقق باختصار، ثم تطلب إحالة أو تعريف محدد وسهل — دون وعد بنتيجة مماثلة لأي أحد آخر، ودون تحويل المكالمة إلى عرض مبيعات.",
      en: "To receive her thanks with genuine warmth, briefly summarize the value delivered, then ask for a specific, easy referral or introduction — without promising the same outcome to anyone else, and without turning the call into a sales pitch.",
    },
    opening: {
      ar: "«[اسمك]! بس حبيت أتصل وأشكرك شخصياً. صراحة كنت خايفة الموضوع يطول سنة كاملة، وانتهى بأسابيع بس. الحمد لله. استلمت آخر ورقة التسوية الصبح.»",
      en: "\"[Your name]! I just wanted to call and thank you personally. Honestly I was scared this would drag on for a whole year, and it wrapped up in weeks. Alhamdulillah. I got the last settlement paper this morning.\"",
    },
    decisionPoints: [
      {
        id: "dp.afr.warm-close",
        label: {
          ar: "الختام الدافئ: هل يستقبل المتدرّب شكرها بصدق ويُلخّص قيمة النتيجة باختصار قبل أي انتقال لموضوع آخر؟",
          en: "The warm close: does the learner receive her thanks genuinely and briefly summarize the value of the result before pivoting to anything else?",
        },
        triggerAfterTurn: 2,
      },
      {
        id: "dp.afr.making-the-ask",
        label: {
          ar: "طرح الطلب: هل يطلب المتدرّب إحالة محددة وسهلة (مثال: نوع أصحاب الأعمال الذين يمكن أن تُعرّفهم بك) بدل عبارة عامة غامضة؟",
          en: "Making the ask: does the learner request a specific, easy referral — e.g., the kind of business owner she could introduce him to — rather than a vague general line?",
        },
        triggerAfterTurn: 5,
      },
      {
        id: "dp.afr.closing-the-loop",
        label: {
          ar: "إغلاق الحلقة: عندما تتردد هند قليلاً أو تذكر ضيق وقتها، هل يُسهّل عليها المتدرّب الأمر (اقتراح بريد قصير، اسمين تتذكرهما هي) بدل الإصرار أو التراجع الكامل؟",
          en: "Closing the loop: when Hind hesitates slightly or mentions her limited time, does the learner make it easy for her — suggesting a short email, or the two names she already has in mind — rather than pushing harder or dropping it entirely?",
        },
        triggerAfterTurn: 8,
      },
    ],
    expectedBehaviors: [
      {
        ar: "يستقبل شكرها بصدق ودون تسرّع نحو موضوع آخر.",
        en: "Receives her thanks genuinely without rushing on to another topic.",
      },
      {
        ar: "يُلخّص قيمة النتيجة بجملة أو جملتين قبل طرح أي طلب.",
        en: "Summarizes the value of the result in a sentence or two before making any ask.",
      },
      {
        ar: "يطلب إحالة محددة (نوع العميل أو المجال) لا عبارة عامة مثل «لو سمعتِ بحد محتاج محامي».",
        en: "Asks for a specific referral — a type of client or area — not a generic line like \"if you hear of anyone who needs a lawyer.\"",
      },
      {
        ar: "يُسهّل الاستجابة على هند (اقتراح تعريف بسيط عبر رسالة أو مكالمة قصيرة) بدل ترك المبادرة كاملة لها.",
        en: "Makes it easy for Hind to respond — suggesting a simple introduction by message or short call — rather than leaving the whole initiative to her.",
      },
      {
        ar: "يشكرها على وقتها ويُنهي المكالمة بلطف بصرف النظر عن استجابتها للطلب.",
        en: "Thanks her for her time and closes the call warmly regardless of how she responds to the ask.",
      },
    ],
    criticalMistakes: [
      {
        ar: "يُنهي المكالمة دون أن يطرح موضوع الإحالة إطلاقاً رغم الفرصة الواضحة.",
        en: "Ends the call without ever raising the referral opening at all, despite the clear opening.",
      },
      {
        ar: "يطرح الطلب بعبارة عامة غامضة يسهل نسيانها بدل طلب محدد وسهل التنفيذ.",
        en: "Makes the ask in a vague, general line that's easy to forget, instead of a specific, easy-to-act-on request.",
      },
      {
        ar: "يُلمّح أو يعد بأن أي شخص تُحيله سيحصل على نفس النتيجة أو نتيجة مضمونة لإقناعها بالإحالة.",
        en: "Implies or promises that anyone she refers will get the same result, or a guaranteed outcome, in order to make the ask land.",
      },
      {
        ar: "يُكرر الطلب أو يُلحّ بعد أن ذكرت هند ضيق وقتها مرة، متجاهلاً إشارتها.",
        en: "Repeats or pushes the ask after Hind has already mentioned being pressed for time once, ignoring her cue.",
      },
      {
        ar: "يحوّل المكالمة إلى عرض مفصّل لخدمات المكتب الأخرى بدل شكر وختام طبيعيين.",
        en: "Turns the call into a detailed pitch for the firm's other services instead of a natural thank-you and close.",
      },
    ],
    successConditions: [
      {
        ar: "استقبل شكرها بصدق ولخّص قيمة النتيجة قبل أي طلب.",
        en: "Received her thanks genuinely and summarized the value of the result before any ask.",
      },
      {
        ar: "طُرح طلب إحالة محدد وواضح خلال المكالمة.",
        en: "A specific, clear referral ask was made during the call.",
      },
      {
        ar: "وافقت هند على تعريف محدد أو تسهيل ملموس (اسمين، رسالة تعريف قصيرة) دون وعد بنتيجة لأي طرف ثالث.",
        en: "Hind agreed to a concrete introduction or facilitation — two names, a short introductory message — with no outcome promised to any third party.",
      },
      {
        ar: "بقيت المكالمة قصيرة، دافئة ومحترمة لوقتها طوال الحوار.",
        en: "The call stayed short, warm, and respectful of her time throughout.",
      },
      {
        ar: "لم تتحول المكالمة إلى عرض مبيعات لخدمات إضافية.",
        en: "The call never turned into a sales pitch for additional services.",
      },
    ],
    exitConditions: [
      {
        ar: "بلغ الحوار الحدّ الأقصى للأدوار.",
        en: "The conversation reaches the maximum number of turns.",
      },
      {
        ar: "وافقت هند على خطوة تالية محددة للإحالة (اسمين، رسالة تعريف، أو مكالمة قصيرة).",
        en: "Hind agreed on a specific referral next step — two names, an introductory message, or a short call.",
      },
      {
        ar: "ارتكب المتدرّب خطأً حاسماً وأصرّ عليه بعد أن سألته هند مباشرة: «يعني تضمن لهم نفس النتيجة اللي صار معي؟» — عندها تُقفل الجلسة وتُعرض التغذية الراجعة.",
        en: "The learner made a critical mistake and held to it after Hind directly asks, \"so you're guaranteeing them the same result I got?\" — at that point the session closes and feedback is shown.",
      },
      {
        ar: "ذكّرت هند بضيق وقتها مرتين وشعرت بإلحاح متكرر، فتعتذر وتنهي المكالمة بلطف.",
        en: "Having mentioned her limited time twice and sensed repeated pressure, Hind politely apologizes and ends the call.",
      },
    ],
    rubricId: "rubric.bd-conversation-sim.v1",
    coachingNotes: {
      ar: [
        "لحظة الرضا التام بعد إغلاق الملف هي أفضل نافذة لطلب إحالة؛ السكوت عنها يُهدرها غالباً للأبد.",
        "طلب محدد («صاحبات أعمال في مجلسك يواجهن مشاكل مع مقاولين») أقوى بكثير من عبارة عامة يسهل نسيانها.",
        "لا تربط جودة النتيجة السابقة بوعد ضمني بنتيجة مماثلة لأي شخص آخر — كل ملف يختلف.",
        "سهّل الاستجابة على العميل: اقترح رسالة قصيرة أو مكالمة، لا تترك له عبء التنظيم الكامل.",
        "إشارة واحدة لضيق الوقت تكفي لوقف الإلحاح؛ التكرار بعدها يحوّل امتناناً حقيقياً إلى انزعاج.",
        "الشكر والختام يجب أن يبقيا الهدف الأساسي للمكالمة؛ طلب الإحالة إضافة لطيفة، لا محور المكالمة.",
      ],
      en: [
        "The moment of full satisfaction right after a file closes is the best window for a referral ask — silence about it usually wastes it for good.",
        "A specific ask — \"business owners on your council dealing with contractor problems\" — is far stronger than a vague, forgettable line.",
        "Never tie a past strong result to an implicit promise of the same outcome for someone else — every matter differs.",
        "Make it easy for the client to respond: suggest a short message or call, don't leave all the organizing to her.",
        "One mention of limited time is enough to stop pushing; repeating it turns real gratitude into irritation.",
        "Gratitude and closure should stay the call's real point; the referral ask is a natural addition, not the centerpiece.",
      ],
    },
    maxTurns: 10,
    estimatedMinutes: 9,
    accessibilityAlternative: {
      ar: "يمكن إجراء الحوار كاملاً كتابةً: تظهر ردود هند السويدي نصّاً ويكتب المتدرّب ردوده، بالمدّة نفسها وعدد الأدوار نفسه وبلا فارق في التقييم.",
      en: "The whole conversation can be run in writing: Hind Al Suwaidi's responses appear as text and the learner types replies, with the same duration, same number of turns, and no scoring difference.",
    },
    sourceIds: ["src.rainmaker", "src.they-ask-you-answer"],
    contentVersion: "1.0.0",
  },

  // ---------------------------------------------------------------------------
  // 2. Converting a warm contact's mention into a real next step (stage 4)
  // ---------------------------------------------------------------------------
  {
    id: "scn.converting-warm-contact",
    title: {
      ar: "تحويل حديث عابر مع معرفة إلى استشارة فعلية",
      en: "Converting a warm contact's passing remark into a real consultation",
    },
    description: {
      ar: "في أمسية تواصل لخريجي الجامعة الأميركية في بيروت، يذكر لك رامي فاخوري، زميل دراسة قديم، خلافاً متصاعداً مع شريكه المؤسس بشكل عابر أثناء الحديث الاجتماعي. لديك فرصة حقيقية لالتقاط الإشارة وتحويلها لخطوة تالية فعلية دون مبيعات جارفة ودون وعد بنتيجة.",
      en: "At an AUB alumni networking evening, old classmate Rami Fakhoury mentions an escalating dispute with his co-founder almost in passing during small talk. You have a genuine opening to pick up on it and move toward a real next step — without a hard pitch and without promising an outcome.",
    },
    skillIds: ["skill.converting-interest-to-instructions", "skill.commercial-awareness"],
    stage: 4,
    difficulty: 3,
    userRole: {
      ar: "أنت محامٍ أول في مكتب كنعان للمحاماة ببيروت، تحضر أمسية تواصل سنوية لخريجي الجامعة الأميركية في بيروت. تلتقي رامي فاخوري، زميل دفعتك، لأول مرة منذ سنوات.",
      en: "You are a senior associate at Kanaan Law Firm in Beirut, attending the annual AUB alumni networking evening. You run into Rami Fakhoury, a classmate from your graduating year, for the first time in years.",
    },
    character: {
      id: "char.rami-fakhoury",
      name: { ar: "رامي فاخوري", en: "Rami Fakhoury" },
      role: {
        ar: "زميل دراسة قديم من الجامعة الأميركية في بيروت، شريك مؤسس لسلسلة تحميص وبيع قهوة مختصة باسم «قهوة الأرز».",
        en: "An old AUB classmate, co-founder of a specialty coffee roasting and retail chain called \"Qahwet El Arz.\"",
      },
      personality: {
        ar: "مرح ومنفتح، لا يرى نفسه الليلة «يبحث عن محامٍ» إطلاقاً — جاء ليعيد التواصل مع زملاء الدراسة والاستمتاع بالأمسية. يذكر مشكلته بشكل عابر وسط الحديث، منفتح على اقتراح هادئ لكنه سينزعج فوراً من أي عرض مبيعات مباشر.",
        en: "Easygoing and open, doesn't see himself \"looking for a lawyer\" tonight at all — he came to reconnect with old classmates and enjoy the evening. He mentions his problem almost in passing amid the small talk, receptive to a calm suggestion but would be turned off immediately by a direct sales pitch.",
      },
      emotionalState: {
        ar: "مرتاح ويستمتع بلقاء الأصدقاء القدامى، لكن نبرته تتغير قليلاً ويظهر توتر خفيف خلف الدعابة عندما يصل الحديث لموضوع شريكه.",
        en: "Relaxed and enjoying seeing old friends, but his tone shifts slightly and a faint tension shows behind the humor when the conversation touches his co-founder.",
      },
      knownInformation: {
        ar: [
          "أسس «قهوة الأرز» قبل ثلاث سنوات مع صديق قديم، نديم، وتوسّعا إلى خمسة فروع في بيروت وجونية.",
          "يفكران حالياً بعرض امتياز تجاري (فرنشايز) في السعودية، وهذا فتح خلافاً بينهما حول من يملك حق القرار النهائي في مثل هذه الصفقات.",
          "يذكر الموضوع بخفة أثناء الحديث عن أخبار الشركة، بعبارة أقرب لـ«معكم صداع هالأيام مع نديم» من كونها طلب مساعدة مباشر.",
          "لم يذكر أي تفاصيل قانونية دقيقة عن اتفاقية الشراكة أو نسب الملكية حتى الآن.",
          "لديه اجتماعات كثيرة هذا الأسبوع، ويبدو أن الأمسية فرصته الوحيدة للاسترخاء قليلاً.",
        ],
        en: [
          "He co-founded Qahwet El Arz three years ago with an old friend, Nadim, and they've expanded to five branches across Beirut and Jounieh.",
          "They're currently weighing a franchise offer in Saudi Arabia, which has opened a disagreement between them over who holds final decision rights on deals like this.",
          "He mentions it lightly during small talk about company news — more like \"Nadim's been giving me a headache lately\" than a direct ask for help.",
          "He hasn't mentioned any precise legal detail yet — not the partnership agreement's terms, not the ownership split.",
          "He has back-to-back meetings this week, and tonight seems like his one real chance to unwind a bit.",
        ],
      },
      hiddenInformation: {
        ar: [
          "يفكر فعلياً منذ أسابيع بالبحث عن محامٍ متخصص بنزاعات الشركاء، لكنه لم يجد الوقت أو لم يعرف من يسأل.",
          "لو اقتُرح عليه خطوة محددة وسهلة — موعد استشارة نصف ساعة الأسبوع القادم مثلاً — سيرحّب بها فوراً بدل عبارة غامضة مثل «لازم نتقهوى ونحكي بالموضوع».",
          "قلق من أن يبدو وكأنه «يستغل» صداقة قديمة إذا هو من يطلب المساعدة القانونية مباشرة، لذا يفضّل أن يشعر أن العرض جاء منك بطبيعية لا منه بإلحاح.",
          "لو شعر أن المحادثة تحولت لعرض مبيعات صريح لخدمات المكتب وسط أمسية اجتماعية، سينسحب من الموضوع بأدب ويغيّر الحديث.",
          "لو أُعطي نصيحة قانونية جوهرية فورية على الوقوف (تقييم موقفه، أو رأي في اتفاقية الشراكة) دون سياق كامل، يشعر بعدم ارتياح لأنه يعرف أن القرار يحتاج معلومات لا يملكها الطرفان الآن في هذا الحديث السريع.",
        ],
        en: [
          "He's actually been meaning to find a lawyer specializing in co-founder disputes for weeks, but hasn't found the time or known who to ask.",
          "If offered a specific, easy step — like a thirty-minute consultation slot next week — he'd welcome it immediately, far more than a vague \"we should grab coffee and talk about it sometime.\"",
          "He worries about seeming to \"use\" an old friendship if he's the one directly asking for legal help, so he'd rather the offer come naturally from you than feel like he had to press for it.",
          "If the conversation turns into an overt pitch for the firm's services in the middle of a social evening, he'll politely disengage and change the subject.",
          "If given substantive legal advice on the spot — an assessment of his position, or an opinion on the partnership agreement — without full context, he feels uneasy, knowing a real read needs information neither of them has in this quick chat.",
        ],
      },
      goal: {
        ar: "أن يقضي أمسية ممتعة مع أصدقاء الجامعة القدامى، وفي أعماقه يتمنى لو وجد طريقة سهلة وغير محرجة للحصول على مساعدة قانونية حقيقية بشأن نديم.",
        en: "To enjoy a good evening with old university friends — while quietly wishing for an easy, non-awkward way to get real legal help with the Nadim situation.",
      },
    },
    culturalContext: {
      ar: "في أوساط الأعمال اللبنانية والخليجية، خلط العمل بمناسبة اجتماعية بحتة قد يبدو انتهازياً إذا جاء مبكراً أو بإلحاح. المهارة الحقيقية هي التقاط فرصة صادقة برزت من الطرف الآخر دون افتعالها، والتعامل معها بهدوء لا بحماس مبيعات ظاهر.",
      en: "In Lebanese and Gulf business circles, mixing business into a purely social occasion can read as opportunistic if it comes too early or too eagerly. The real skill is picking up a genuine opening the other person raised themselves, and handling it calmly rather than with visible sales enthusiasm.",
    },
    languageMode: "bilingual",
    background: {
      ar: [
        "لم تلتقِ رامي منذ تخرجكما، وتبادلتما رسائل تهنئة قليلة عبر مواقع التواصل فقط.",
        "تلتقيان الليلة صدفة عند طاولة المرطبات في أمسية تواصل الخريجين، ويبدأ حديثاً ودياً عن مسيرتيكما.",
        "يذكر رامي توسّع «قهوة الأرز» بفخر، ثم يذكر بخفة توتراً متصاعداً مع شريكه نديم حول عرض امتياز في السعودية.",
        "لم يطلب رامي مساعدة قانونية صراحة بعد؛ الحديث لا يزال حديث أصدقاء قدامى في أمسية اجتماعية.",
      ],
      en: [
        "You haven't seen Rami since graduation, exchanging only the occasional congratulatory message on social media.",
        "You run into each other tonight by chance at the refreshments table at the alumni networking evening, and fall into friendly catch-up.",
        "Rami mentions Qahwet El Arz's expansion with pride, then lightly mentions rising tension with his co-founder Nadim over a Saudi franchise offer.",
        "Rami hasn't explicitly asked for legal help yet; the conversation is still old-friends small talk at a social evening.",
      ],
    },
    userGoal: {
      ar: "أن تلتقط الفرصة الحقيقية بفضول صادق دون تشخيص فوري أو نصيحة قانونية جوهرية على الوقوف، وتقترح خطوة تالية محددة وسهلة (استشارة فعلية) دون مبالغة في الوعد ودون ضغط في سياق اجتماعي.",
      en: "To recognize the genuine opening with sincere curiosity, without diagnosing or giving substantive legal advice on the spot, and propose a specific, easy next step — a real consultation — without overpromising and without being pushy in a social setting.",
    },
    opening: {
      ar: "«إيه بيسير منيح الحمد لله، خمس فروع هلق تصور! بس صراحة معي شوي صداع هالأيام مع نديم، عندنا عرض امتياز بالسعودية وما عم نتفق مين ياخد القرار الأخير... بس يلا، احكيلي عنك، شو صار معك؟»",
      en: "\"Things are going well, alhamdulillah — five branches now, imagine! Honestly though, I've got a bit of a headache these days with Nadim, we have a franchise offer in Saudi and we're not agreeing on who makes the final call... but anyway, tell me about you, what's new?\"",
    },
    decisionPoints: [
      {
        id: "dp.cwc.catching-the-opening",
        label: {
          ar: "التقاط الفرصة: هل يلتقط المتدرّب الإشارة بسؤال فضولي صادق قبل أن يتابع رامي الحديث بنفسه إلى موضوع آخر، بدل تجاهلها أو الانتقال مباشرة لعرض خدمات المكتب؟",
          en: "Catching the opening: does the learner pick up the cue with a genuinely curious question before Rami moves on himself, rather than letting it pass or jumping straight to pitching the firm's services?",
        },
        triggerAfterTurn: 2,
      },
      {
        id: "dp.cwc.staying-low-pressure",
        label: {
          ar: "الحفاظ على أسلوب هادئ: أثناء استكشاف الموضوع، هل يتجنب المتدرّب إعطاء رأي قانوني جوهري فوري أو تقييم موقف رامي على الوقوف، محترماً السياق الاجتماعي؟",
          en: "Staying low-pressure: while exploring the issue, does the learner avoid giving a substantive legal opinion or assessing Rami's position on the spot, respecting the social context?",
        },
        triggerAfterTurn: 5,
      },
      {
        id: "dp.cwc.proposing-the-step",
        label: {
          ar: "اقتراح الخطوة: هل يقترح المتدرّب موعداً محدداً لاستشارة فعلية بدل عبارة غامضة مثل «لازم نتقهوى ونحكي»، ودون وعد بنتيجة معينة؟",
          en: "Proposing the step: does the learner propose a specific slot for a real consultation instead of a vague \"we should grab coffee and talk,\" and without promising a particular outcome?",
        },
        triggerAfterTurn: 8,
      },
    ],
    expectedBehaviors: [
      {
        ar: "يُظهر اهتماماً صادقاً بالموضوع الذي ذكره رامي قبل أي انتقال لعرض خدماته.",
        en: "Shows genuine interest in what Rami raised before pivoting to offering his services.",
      },
      {
        ar: "يطرح سؤالاً مفتوحاً واحداً جيداً لفهم طبيعة الخلاف دون الضغط لمزيد من التفاصيل.",
        en: "Asks one good open question to understand the nature of the dispute, without pressing for more detail.",
      },
      {
        ar: "يتجنب إعطاء رأي قانوني جوهري أو تقييماً للموقف على الوقوف.",
        en: "Avoids giving a substantive legal opinion or assessing the position on the spot.",
      },
      {
        ar: "يقترح خطوة تالية محددة (موعد استشارة، مكالمة قصيرة محددة اليوم والوقت) بدل عبارة غامضة.",
        en: "Proposes a specific next step — a consultation slot, a short call with a defined day and time — instead of a vague line.",
      },
      {
        ar: "يحافظ على نبرة اجتماعية دافئة، دون إلحاح أو حماس مبيعات ظاهر.",
        en: "Keeps a warm, social tone throughout, without pushiness or visible sales enthusiasm.",
      },
    ],
    criticalMistakes: [
      {
        ar: "ينتقل فوراً لعرض مباشر لخدمات مكتبه بمجرد سماع كلمة «نديم» أو «خلاف»، متجاهلاً السياق الاجتماعي.",
        en: "Jumps immediately to a direct pitch for his firm's services the moment he hears \"Nadim\" or \"dispute,\" ignoring the social context.",
      },
      {
        ar: "يقدّم رأياً قانونياً جوهرياً أو تقييماً لموقف رامي في اتفاقية الشراكة على الوقوف دون معلومات كافية.",
        en: "Offers a substantive legal opinion or assesses Rami's position under the partnership agreement on the spot, without adequate information.",
      },
      {
        ar: "يُلمّح أو يوحي بضمان نتيجة معينة (مثل «معي رح تربح موضوع القرار الأخير أكيد») لإقناع رامي بالمضي قدماً.",
        en: "Implies or suggests a guaranteed outcome — such as \"with me you'll definitely win the final-say issue\" — to persuade Rami to move forward.",
      },
      {
        ar: "يكرر عرضه أو يُلحّ بعد أن غيّر رامي الموضوع مرة بوضوح، متجاهلاً إشارته.",
        en: "Repeats the offer or presses on after Rami has clearly changed the subject once, ignoring the cue.",
      },
      {
        ar: "يُنهي الحديث بعبارة غامضة («لازم نتقهوى ونحكي بالموضوع») دون أي خطوة أو موعد محدد.",
        en: "Ends the conversation with a vague line — \"we should grab coffee and talk about it\" — with no specific step or date attached.",
      },
    ],
    successConditions: [
      {
        ar: "التقط المتدرّب الفرصة بسؤال فضولي صادق دون تحويلها فوراً لعرض مبيعات.",
        en: "The learner caught the opening with a genuinely curious question, without immediately turning it into a sales pitch.",
      },
      {
        ar: "لم يُقدَّم أي رأي قانوني جوهري أو تقييم للموقف على الوقوف.",
        en: "No substantive legal opinion or position assessment was given on the spot.",
      },
      {
        ar: "لم يُذكر أو يُوحَ بأي وعد بنتيجة قانونية معينة طوال الحوار.",
        en: "No promise or implication of a particular legal outcome was made at any point in the conversation.",
      },
      {
        ar: "اقتُرحت خطوة تالية محددة (موعد أو مكالمة بتاريخ ووقت) ووافق عليها رامي.",
        en: "A specific next step — an appointment or call with a date and time — was proposed and Rami agreed to it.",
      },
      {
        ar: "بقيت النبرة اجتماعية ودافئة طوال الحوار، دون إلحاح ملحوظ.",
        en: "The tone stayed social and warm throughout, without noticeable pressure.",
      },
    ],
    exitConditions: [
      {
        ar: "بلغ الحوار الحدّ الأقصى للأدوار.",
        en: "The conversation reaches the maximum number of turns.",
      },
      {
        ar: "وافق رامي على خطوة تالية محددة (موعد استشارة أو مكالمة بتاريخ ووقت واضحين).",
        en: "Rami agreed on a specific next step — a consultation or call with a clear date and time.",
      },
      {
        ar: "ارتكب المتدرّب خطأً حاسماً وأصرّ عليه بعد أن سأله رامي مباشرة: «يعني عم تضمنلي إني رح احصل قرار القرار الأخير؟» — عندها تُقفل الجلسة وتُعرض التغذية الراجعة.",
        en: "The learner made a critical mistake and held to it after Rami directly asks, \"so you're guaranteeing me I'll get final say?\" — at that point the session closes and feedback is shown.",
      },
      {
        ar: "شعر رامي أن الحديث تحوّل لعرض مبيعات صريح بعد أن غيّر الموضوع مرتين، فينسحب بأدب وينهي النقاش.",
        en: "Sensing the conversation has turned into an overt sales pitch after changing the subject twice, Rami politely disengages and ends the discussion.",
      },
    ],
    rubricId: "rubric.bd-conversation-sim.v1",
    coachingNotes: {
      ar: [
        "الفرصة الصادقة التي يطرحها الطرف الآخر بنفسه أقوى بكثير من أي فرصة تُفتعل؛ لا تفوّتها ولا تُفسدها بالتسرع.",
        "الفضول الحقيقي أفضل من الرأي الجاهز؛ سؤال مفتوح واحد يفتح الباب أكثر من عشر جمل عن خدمات المكتب.",
        "النصيحة القانونية الجوهرية على الوقوف مخاطرة مهنية وشخصية معاً؛ دورك الليلة أن تفتح الباب لا أن تُفتي.",
        "لا تربط أبداً قبول العرض بوعد نتيجة؛ كل نزاع شراكة يحتاج تقييماً كاملاً بمعلومات لا تملكها الآن.",
        "خطوة محددة بتاريخ ووقت أقوى بكثير من عبارة اجتماعية عامة يسهل تناسيها في اليوم التالي.",
        "إشارة واحدة بتغيير الموضوع تكفي لوقف المتابعة؛ احترام السياق الاجتماعي هو ما يحافظ على الصداقة والفرصة معاً.",
      ],
      en: [
        "A genuine opening the other person raises themselves is far stronger than any manufactured one — don't miss it, and don't spoil it by rushing.",
        "Real curiosity beats a ready-made pitch; one good open question opens the door more than ten sentences about the firm's services.",
        "Substantive legal advice on the spot is both a professional and personal risk; your job tonight is to open a door, not deliver an opinion.",
        "Never tie acceptance of the offer to a promised outcome — every co-founder dispute needs a full assessment with information you don't have yet.",
        "A specific step with a date and time is far stronger than a vague social line that's easy to forget the next day.",
        "One cue that the subject has changed is enough to stop following up; respecting the social context is what preserves both the friendship and the opening.",
      ],
    },
    maxTurns: 12,
    estimatedMinutes: 12,
    accessibilityAlternative: {
      ar: "يمكن إجراء الحوار كاملاً كتابةً: تظهر ردود رامي فاخوري نصّاً ويكتب المتدرّب ردوده، بالمدّة نفسها وعدد الأدوار نفسه وبلا فارق في التقييم.",
      en: "The whole conversation can be run in writing: Rami Fakhoury's responses appear as text and the learner types replies, with the same duration, same number of turns, and no scoring difference.",
    },
    sourceIds: ["src.jab-jab-right-hook", "src.purple-cow"],
    contentVersion: "1.0.0",
  },
];
