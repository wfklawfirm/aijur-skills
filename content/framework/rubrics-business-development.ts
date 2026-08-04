import type { RubricDef } from "../types";

/**
 * Assessment rubrics for the Business Development domain
 * (`dom.business-development`) of AIJUR Professional Skills Lab.
 *
 * Business development is the domain most exposed to the risk of training
 * lawyers to "sell harder." Every criterion here rewards relationship-first,
 * evidence-honest behaviour, and every rubric caps the score outright when a
 * learner promises or implies a guaranteed legal outcome to win work — see
 * `cm.written-outcome-promise` and `cm.sim-outcome-promise` below. No
 * descriptor refers to charisma, likeability or persuasiveness in the
 * abstract — only to observable features of what was written or said.
 */
export const BUSINESS_DEVELOPMENT_RUBRICS: RubricDef[] = [
  // -------------------------------------------------------------------------
  // 1. Written business-development messages
  // -------------------------------------------------------------------------
  {
    id: "rubric.business-development-written.v1",
    name: {
      ar: "جودة الرسالة المكتوبة في تنمية الأعمال",
      en: "Quality of a written business-development message",
    },
    version: "1.0.0",
    skillIds: [
      "skill.relationship-building",
      "skill.staying-top-of-mind",
      "skill.referral-generation",
    ],
    criteria: [
      {
        id: "cr.genuine-non-transactional-tone",
        name: {
          ar: "الصدق في النبرة وغياب الطابع التسويقي",
          en: "Genuineness and absence of a sales pitch tone",
        },
        description: {
          ar: "يُقاس بما إذا قرأ النص كاستمرار طبيعي لعلاقة أو محادثة فعلية، أم كعرض تسويقي لخدمات المكتب يمكن إرساله لأي شخص دون تعديل.",
          en: "Measured by whether the text reads as the natural continuation of an actual relationship or conversation, or as a service pitch that could be sent unedited to anyone.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "تفتتح الرسالة مباشرة بعرض خدمة أو اقتراح أتعاب دون أي إشارة إلى ما جرى فعلاً بين الطرفين («بعد لقائنا، أودّ إطلاعكم على خدمات المكتب في نزاعات الاستيراد وعرض أتعابنا»)، وكأنها رسالة جماعية.",
            en: "The message opens directly with a service offer or a fee proposition, with no reference to what actually happened between the two parties (\"following our meeting, I'd like to share our firm's import-dispute services and our fees\"), reading like a mass mailer.",
          },
          {
            ar: "تشير الرسالة مرّة واحدة إلى المحادثة أو الإحالة الفعلية، لكنها تنتقل بعدها مباشرة إلى سرد خدمات المكتب واختصاصاته، فيغلب عليها طابع العرض التجاري.",
            en: "The message references the actual conversation or referral once, but immediately pivots into listing the firm's services and areas of practice, so the pitch tone dominates.",
          },
          {
            ar: "النبرة العامة صادقة وشخصية طوال النص، باستثناء جملة واحدة تبدو مقتطعة من عرض تسويقي جاهز (مثل إدراج قائمة اختصاصات المكتب فجأة وسط رسالة شكر).",
            en: "The overall tone is genuine and personal throughout, except for one line that reads as lifted from a stock pitch (such as suddenly inserting a list of the firm's practice areas into an otherwise personal thank-you message).",
          },
          {
            ar: "تقرأ الرسالة بأكملها كاستمرار لمحادثة حقيقية بين شخصين — تشير إلى تفصيل قاله الطرف الآخر فعلاً — ولا تحتوي أي لغة استقطاب عملاء؛ لو حُذف اسم المرسل وصفته لظلّت الرسالة منطقية بوصفها رسالة شخصية.",
            en: "The entire message reads as the continuation of a real conversation between two people — it references something the other party actually said — and contains no client-acquisition language; if the sender's name and title were removed, it would still read as a genuine personal note.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.specificity-of-content",
        name: {
          ar: "التحديد الملموس في المضمون والخطوة التالية",
          en: "Concreteness of content and next step",
        },
        description: {
          ar: "يُقاس بما إذا استحضرت الرسالة تفصيلاً محدداً من اللقاء أو الإحالة الفعلية، واقترحت خطوة تالية ملموسة، بدل عبارات عامة مثل «لنتواصل قريباً».",
          en: "Measured by whether the message draws on a specific detail from the actual meeting or referral, and proposes a concrete next step, rather than generic filler like \"let's catch up sometime.\"",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "لا تفصيل محدد من اللقاء أو الإحالة الفعلية في أي موضع؛ الصياغة عامة بالكامل («سعدت بلقائك»، «لنبقَ على تواصل») ويمكن أن تُرسَل لأي شخص التقاه المتدرّب.",
            en: "No specific detail from the actual meeting or referral appears anywhere; the wording is entirely generic (\"great meeting you,\" \"let's stay in touch\") and could be sent to anyone the learner has ever met.",
          },
          {
            ar: "إشارة غامضة واحدة إلى سياق اللقاء («كان حديثنا عن أعمالكم ممتعاً») دون تفصيل محدد، وتنتهي الرسالة باقتراح مبهم مثل «لنجد وقتاً للقاء لاحقاً».",
            en: "One vague reference to the context of the meeting (\"our conversation about your business was interesting\") with no specific detail, and the message ends with a hazy suggestion like \"let's find time to meet again sometime.\"",
          },
          {
            ar: "تُستحضَر تفصيلة محددة فعلاً من اللقاء أو الإحالة (مثل توسّع الموكّل المرتقب في فتح فرع بجدّة)، لكن الخطوة التالية المقترحة تبقى مبهمة («لنتحدث أكثر حين تسنح الفرصة»).",
            en: "A specific detail from the meeting or referral is genuinely recalled (such as the prospective client's plan to open a branch in Jeddah), but the proposed next step stays vague (\"let's talk more when there's a chance\").",
          },
          {
            ar: "تُستحضَر تفصيلة محددة من المحادثة الفعلية، وتُقترَن بخطوة تالية ملموسة ذات تاريخ أو فعل واضح (إرسال مقال متعلق بموضوع أثاره الشخص، أو اقتراح مكالمة يوم محدد، أو ذكر معارف مشترك بالاسم).",
            en: "A specific detail from the actual conversation is recalled, paired with a concrete next step with a clear date or action (sending an article related to something the person raised, proposing a call on a named day, or naming a specific mutual contact).",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.appropriateness-of-ask",
        name: {
          ar: "توقيت الطلب وصياغته المناسبة",
          en: "Appropriate timing and framing of the ask",
        },
        description: {
          ar: "يُقاس بما إذا كان أي طلب وارد في الرسالة (إحالة، لقاء، تكليف) متناسباً مع مرحلة العلاقة، ومصاغاً بطريقة تترك للمتلقّي مجالاً مريحاً للرفض أو التأجيل.",
          en: "Measured by whether any ask in the message (a referral, a meeting, an engagement) is proportionate to the stage of the relationship, and framed in a way that leaves the recipient a comfortable route to decline or defer.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "الطلب غير متناسب إطلاقاً مع مرحلة العلاقة (رسالة شكر على إحالة أولى تطلب من المُحيل فوراً إحالتين إضافيتين، أو رسالة متابعة بعد لقاء أول تطلب تعريف المرسل بكامل شبكة عملاء المتلقّي).",
            en: "The ask is entirely disproportionate to the stage of the relationship (a thank-you note for a first referral immediately asks the referrer for two more referrals, or a first post-meeting follow-up asks to be introduced to the recipient's entire client network).",
          },
          {
            ar: "يوجد طلب، لكنه في توقيت مبكر جداً أو بحجم أكبر مما تسمح به العلاقة (طلب اجتماع رسمي لمناقشة «جميع الاحتياجات القانونية» لشخص التقاه المتدرّب مرة واحدة فقط).",
            en: "An ask is present, but its timing is premature or its scope exceeds what the relationship supports (requesting a formal meeting to discuss \"all your legal needs\" from someone the learner has met only once).",
          },
          {
            ar: "الطلب متناسب من حيث الحجم والتوقيت، لكن صياغته تضع المتلقّي في موقف حرج (لا مخرج مريح للرفض، أو يقترن بضغط زمني غير مبرَّر مثل «أرجو الرد قبل يوم الجمعة»).",
            en: "The ask is proportionate in size and timing, but its wording puts the recipient on the spot (no comfortable way to decline, or paired with unwarranted time pressure such as \"please reply by Friday\").",
          },
          {
            ar: "أي طلب وارد في الرسالة متناسب مع مرحلة العلاقة، ومصاغ بطريقة تترك للمتلقّي خياراً مريحاً بالقبول أو التأجيل أو الرفض دون إحراج (مثل «لا داعي للرد إن لم يكن الوقت مناسباً الآن، يسعدني إرسال معلومات إضافية متى رغبتم»)؛ وإن لم يتضمن النص طلباً أصلاً وكانت الرسالة شكراً خالصاً، فذلك يُحتسب بأعلى درجة أيضاً.",
            en: "Any ask in the message is proportionate to the stage of the relationship and framed to leave the recipient a comfortable way to accept, defer or decline without embarrassment (e.g. \"no need to reply if now isn't the right time — happy to send more information whenever it's useful\"); a message with no ask at all, that is simply and purely a thank-you, also scores at this level.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.professional-restraint",
        name: {
          ar: "الاحتراف وضبط النفس دون مبالغة في العرض",
          en: "Professionalism and restraint without overselling",
        },
        description: {
          ar: "يُقاس بخلوّ النص من المبالغة في الترويج لكفاءة المكتب، وبشكل غير قابل للتفاوض، بخلوّه من أي وعد أو تلميح بضمان نتيجة قانونية معيّنة.",
          en: "Measured by the absence of overselling the firm's competence, and — non-negotiably — by the absence of any promise or implication of a guaranteed legal outcome.",
        },
        weight: 0.15,
        descriptors: [
          {
            ar: "تتضمن الرسالة وعداً أو تلميحاً صريحاً بضمان نتيجة قانونية معيّنة لإقناع المتلقّي بالتعامل مع المكتب (مثل «بخبرتنا في قضايا الشيكات المرتجعة، ستستردّون المبلغ كاملاً بالتأكيد»).",
            en: "The message contains an explicit promise or implication of a guaranteed legal outcome to persuade the recipient to engage the firm (e.g. \"with our experience in dishonoured-cheque cases, you're certain to recover the full amount\").",
          },
          {
            ar: "لا يوجد وعد صريح بنتيجة، لكن الصياغة تبالغ في التأكيد على نسبة نجاح المكتب أو قوة موقفه دون أي تحفّظ (مثل «لا نخسر قضايا من هذا النوع»).",
            en: "No explicit outcome promise, but the wording overstates the firm's success rate or the strength of the case with no qualification at all (such as \"we never lose cases of this kind\").",
          },
          {
            ar: "لا مبالغة تتعلق بالنتيجة، لكن النبرة تميل إلى الترويج الذاتي المفرط بطريقة أخرى (عبارات مثل «الأفضل في السوق» أو «لا مثيل لخبرتنا») دون أن تمسّ مسألة النتيجة القانونية نفسها.",
            en: "No overreach on outcome, but the tone leans into excessive self-promotion in another way (phrases like \"the best in the market\" or \"unmatched expertise\") without touching the question of the legal result itself.",
          },
          {
            ar: "الرسالة محتفظة بضبط نفس مهني من أولها إلى آخرها: لا مبالغة في الترويج لكفاءة المكتب، وأي إشارة إلى نتيجة قانونية محتملة تُصاغ بوصفها تقييماً أو رأياً مبدئياً لا وعداً (مثل «يسعدني مراجعة العقد وإعطاؤكم قراءة صريحة لخياراتكم المتاحة»).",
            en: "The message maintains professional restraint from start to finish: no overselling of the firm's competence, and any reference to a possible legal outcome is framed as an assessment or preliminary opinion, never a promise (e.g. \"happy to review the contract and give you an honest read on your options\").",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.value-to-recipient",
        name: {
          ar: "القيمة الفعلية المقدَّمة للمتلقّي",
          en: "Genuine value offered to the recipient",
        },
        description: {
          ar: "يُقاس بما إذا قدّمت الرسالة شيئاً مفيداً فعلاً للمتلقّي — رأياً، تعريفاً، مصدراً — لا مجرّد إعلان عن توفّر المرسل وجاهزيته لتقديم خدماته.",
          en: "Measured by whether the message offers something genuinely useful to the recipient — an insight, an introduction, a resource — rather than simply announcing the sender's availability to provide services.",
        },
        weight: 0.15,
        descriptors: [
          {
            ar: "لا قيمة مقدَّمة للمتلقّي في أي موضع؛ الرسالة تتمحور بالكامل حول المرسل وتوفّره واستعداده لتقديم الخدمة.",
            en: "No value is offered to the recipient anywhere; the message is entirely centred on the sender and their availability to provide the service.",
          },
          {
            ar: "إشارة شكلية إلى تقديم مساعدة («لا تتردد بالتواصل إن احتجت أي شيء») دون أي شيء محدد أو مفيد يُقدَّم فعلياً.",
            en: "A token gesture toward offering help (\"don't hesitate to reach out if you need anything\") with nothing specific or actually useful behind it.",
          },
          {
            ar: "تُقدَّم قيمة واحدة محددة (مقال ذو صلة، تعريف بشخص، ملاحظة مفيدة مرتبطة بما قاله المتلقّي)، لكنها تبدو عرضية داخل رسالة يغلب عليها الطابع الترويجي.",
            en: "One specific piece of value is offered (a relevant article, an introduction, a useful observation tied to what the recipient said), but it feels incidental within an otherwise self-promotional message.",
          },
          {
            ar: "محتوى الرسالة الأساسي هو شيء مفيد ومحدد للمتلقّي فعلاً (رأي وثيق الصلة، تعريف مفيد، إجابة ملموسة عن أمر أثاره سابقاً)، بينما يُذكر توفّر المرسل وخدماته، إن وجد، كملاحظة ثانوية فقط.",
            en: "The message's primary content is something of genuine, specific use to the recipient (a relevant insight, a useful introduction, a concrete answer to something they raised earlier), with the sender's own availability and services, if mentioned at all, appearing only as a secondary note.",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.written-outcome-promise",
        label: {
          ar: "تضمين الرسالة وعداً أو ما يُفهَم منه ضمان لنتيجة قانونية معيّنة بهدف كسب التكليف.",
          en: "Including in the message a promise, or language that reads as a guarantee, of a specific legal outcome, in order to win the engagement.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.written-referral-ask-no-context",
        label: {
          ar: "طلب إحالة دون أي سياق يوضّح المطلوب أو من يُحال إليه، بحيث يصعب على المتلقّي التصرّف بناءً على الطلب دون إحراج.",
          en: "Asking for a referral with no context clarifying what is needed or to whom it relates, leaving the recipient with no comfortable way to act on the request.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.written-pure-self-promotion",
        label: {
          ar: "رسالة متابعة تتمحور بالكامل حول الترويج الذاتي للمرسل دون أي قيمة أو فائدة حقيقية تُقدَّم للمتلقّي.",
          en: "A follow-up message that is entirely self-promotional, with no genuine value or usefulness offered to the recipient.",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },

  // -------------------------------------------------------------------------
  // 2. Business-development conversation simulation performance
  // -------------------------------------------------------------------------
  {
    id: "rubric.bd-conversation-sim.v1",
    name: {
      ar: "جودة أداء محادثة تنمية الأعمال في المحاكاة",
      en: "Quality of a business-development conversation in simulation",
    },
    version: "1.0.0",
    skillIds: [
      "skill.referral-generation",
      "skill.converting-interest-to-instructions",
      "skill.commercial-awareness",
    ],
    criteria: [
      {
        id: "cr.reading-the-moment",
        name: {
          ar: "قراءة اللحظة المناسبة بدقة",
          en: "Accurately reading the moment",
        },
        description: {
          ar: "يُقاس بما إذا ميّز المتدرّب فرصة فعلية أبداها الطرف الآخر (رضا صريح، مشكلة عمل مذكورة) قبل التصرّف عليها، لا افتعال فرصة غير موجودة.",
          en: "Measured by whether the learner distinguished a real opening the other party actually gave (explicit satisfaction, a stated business problem) before acting on it, rather than manufacturing an opening that was not there.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "يفتعل المتدرّب فرصة غير موجودة — يطلب إحالة أو ينتقل إلى عرض خدمات المكتب رغم أن الطرف الآخر لم يبدِ أي إشارة إلى ذلك (كأن يطرح طلب الإحالة بينما الموكّل منشغل بالحديث عن مشكلة أخرى لا صلة لها، أو يعرض خدمة قبل أن يصف المعرف المشكلة أصلاً).",
            en: "The learner manufactures an opening that does not exist — asking for a referral or pivoting to a service pitch even though the other party has given no signal for it (raising the referral ask while the client is mid-conversation about an unrelated issue, or pitching services before the contact has even described a problem).",
          },
          {
            ar: "يلتقط المتدرّب إشارة أشبه بفرصة، لكن التوقيت غير موفَّق — يقاطع الطرف الآخر أو يتصرّف فوراً بينما لا يزال يعبّر عن رضاه أو يشرح مشكلته، فيقطع اللحظة الطبيعية قبل اكتمالها.",
            en: "The learner picks up on something like an opening, but the timing is off — jumping in or acting immediately while the other party is still mid-expression of satisfaction or still explaining the problem, cutting the natural moment short before it completes.",
          },
          {
            ar: "ينتظر المتدرّب فرصة فعلية ويحدّدها بشكل صحيح، لكنه يترك عدة أدوار حوارية تمرّ رغم وضوح الإشارة قبل أن يتصرّف عليها.",
            en: "The learner waits for and correctly identifies a genuine opening, but lets several conversational turns pass after the signal is already clear before acting on it.",
          },
          {
            ar: "يقرأ المتدرّب الإشارة اللفظية المحددة التي أعطاها الطرف الآخر (عبارة رضا صريحة، أو وصف واضح لمشكلة عمل) بدقة، ويتصرّف عليها في اللحظة الطبيعية المناسبة من الحوار دون افتعال أو تأخير غير مبرَّر.",
            en: "The learner accurately reads the specific verbal cue the other party gave (an explicit statement of satisfaction, or a clear description of a business problem) and acts on it at the natural point in the conversation, with no manufacturing and no unwarranted delay.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.direct-specific-ask",
        name: {
          ar: "الطلب المباشر والمحدد بدل التلميح",
          en: "A direct and specific ask rather than hinting",
        },
        description: {
          ar: "يُقاس بما إذا صاغ المتدرّب طلبه (إحالة، تكليف) بجملة مباشرة تسمّي المطلوب تحديداً، لا بتلميح عام يترك للطرف الآخر تخمين المقصود.",
          en: "Measured by whether the learner phrased the ask (a referral, an engagement) as a direct sentence naming exactly what is wanted, rather than a general hint that leaves the other party to guess.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "لا يصل المتدرّب إلى طلب فعلي في أي وقت — يكتفي بتلميح عام («يسعدنا دائماً حين يفكر بنا عملاؤنا الكرام») دون تسمية المطلوب صراحةً، أو يهجر الموضوع بعد إشارة خفيفة واحدة.",
            en: "The learner never actually reaches an ask — settling for a general hint (\"we're always glad when our valued clients think of us\") without ever naming what is wanted, or dropping the topic after one faint mention.",
          },
          {
            ar: "يصل المتدرّب إلى طلب فعلي، لكنه مبهم لدرجة يصعب معها فهم المطلوب («أعلمونا إن ظهر شيء») بدل تسمية الإحالة أو التكليف المحدد.",
            en: "The learner does reach an actual ask, but it is so vague it's unclear what is being requested (\"let us know if anything comes up\") instead of naming the specific referral or engagement.",
          },
          {
            ar: "الطلب مباشر ويسمّي المطلوب، لكنه عام — لا يحدد الشخص أو الجهة المقصودة بالإحالة، ولا نطاق العمل المقترح في حال التكليف.",
            en: "The ask is direct and names what is wanted, but it stays generic — not naming the specific person or party the referral concerns, nor the scope of work in a proposed engagement.",
          },
          {
            ar: "الطلب مباشر ومحدد: يسمّي بدقة ما يُطلب (مثل «هل تتفضّلون بتعريفي على [الزميل/الجهة] الذي أشرتم إلى أنه يواجه المشكلة نفسها؟»، أو نطاقاً محدداً للتكليف: «يمكننا فتح ملف لمراجعة عقود التوريد التي ذكرتموها») دون أي تلميح غامض.",
            en: "The ask is direct and specific: it names precisely what is being requested (e.g. \"would you be comfortable introducing me to [the colleague/counterpart] you mentioned faces the same issue?\", or a defined engagement scope: \"we could open a file to review the supplier contracts you mentioned\") with no vague hinting.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.professional-response-to-hesitation",
        name: {
          ar: "الاحتراف وعدم الإلحاح عند التردد",
          en: "Professionalism and non-pushiness when the other party hesitates",
        },
        description: {
          ar: "يُقاس بما يفعله المتدرّب حين يبدي الطرف الآخر تردداً أو رفضاً لطيفاً — هل يتقبّله بمهنية أم يواصل الضغط أو المحاولة.",
          en: "Measured by what the learner does when the other party shows hesitation or a soft no — whether it is accepted professionally, or met with continued pressure or another attempt.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "حين يتردد الطرف الآخر أو يرفض بلطف، يواصل المتدرّب الإلحاح — يكرر الطلب، يضيف ضغطاً، أو يحاول إقناع الطرف الآخر بتجاوز تردده.",
            en: "When the other party hesitates or gives a soft no, the learner continues pressing — repeating the ask, adding pressure, or trying to argue the other party out of their hesitation.",
          },
          {
            ar: "لا يكرر المتدرّب الطلب، لكن ردّه على التردد يترك توتراً ظاهراً (تغيير مفاجئ للموضوع، أو تجاهل تام لما أبداه الطرف الآخر دون أي إقرار به).",
            en: "The learner does not repeat the ask, but the response to the hesitation leaves visible tension (an abrupt change of subject, or no acknowledgment at all of what the other party expressed).",
          },
          {
            ar: "يتقبّل المتدرّب التردد بمهنية وينتقل بالحديث بسلاسة، لكن دون أن يترك باباً واضحاً ومنخفض الضغط مفتوحاً لمستقبل العلاقة.",
            en: "The learner accepts the hesitation professionally and moves the conversation on smoothly, but without leaving a clear, low-pressure door open for the relationship going forward.",
          },
          {
            ar: "يتقبّل المتدرّب التردد دون أي ضغط، يقرّ به صراحةً باحترام، ويترك باباً واضحاً ومنخفض الضغط مفتوحاً للمستقبل (مثل «بالطبع، لا داعي للقلق، يسعدني التحدث مجدداً متى ناسبكم»).",
            en: "The learner accepts the hesitation with no pressure, acknowledges it respectfully and explicitly, and leaves a clear, low-pressure door open for the future (e.g. \"of course, no worries at all — happy to talk again whenever suits you\").",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.no-outcome-guarantee-to-close",
        name: {
          ar: "عدم ضمان أو الإيحاء بنتيجة لإقفال المحادثة",
          en: "Never promising or implying an outcome to close the conversation",
        },
        description: {
          ar: "يُقاس بما إذا امتنع المتدرّب، طوال المحادثة وخصوصاً عند إقفالها، عن الوعد بنتيجة قانونية محددة أو الإيحاء الضمني بها لإقناع الطرف الآخر بالمضي قدماً.",
          en: "Measured by whether the learner refrained, throughout the conversation and especially at its close, from promising or implicitly suggesting a specific legal outcome in order to persuade the other party to proceed.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "يصرّح المتدرّب بنتيجة قانونية مضمونة أو يوحي بها بوضوح لإقناع الطرف الآخر بالمضي قدماً («لا تقلقوا، سنستردّ المبلغ كاملاً» أو «هذه قضية سنربحها بالتأكيد»).",
            en: "The learner states or clearly implies a guaranteed legal outcome to persuade the other party to proceed (\"don't worry, we'll recover the full amount\" or \"this is a case we'll definitely win\").",
          },
          {
            ar: "لا وعد صريح بالنتيجة، لكن المتدرّب يستخدم عبارات تبالغ في التأكيد على يقين النتيجة دون أي تحفّظ («الأمر بسيط ولن تواجهوا أي مشكلة»).",
            en: "No explicit outcome promise, but the learner uses language that overstates certainty about the result with no qualification (\"this is straightforward, you won't run into any trouble\").",
          },
          {
            ar: "يتجنب المتدرّب أي وعد بالنتيجة، لكنه يتجنب أيضاً إعطاء الطرف الآخر أي تصوّر واقعي لما يمكن توقّعه، فيُترَك دون أي إطار مفيد.",
            en: "The learner avoids any outcome promise, but also avoids giving the other party any realistic sense of what to expect, leaving them without useful grounding.",
          },
          {
            ar: "يصرّح المتدرّب صراحةً بأنه لا ضمان لأي نتيجة، مع تزويد الطرف الآخر بتصوّر واقعي وأمين لسير العملية والاحتمالات المعقولة (مثل «لا يمكنني ضمان نتيجة، لكن يمكنني أن أشرح لكم كيف تسير هذه الملفات عادةً وما الذي يجب الانتباه إليه»).",
            en: "The learner is explicit that no outcome can be guaranteed, while still giving the other party a realistic, honest sense of how the process typically unfolds and what reasonable possibilities look like (e.g. \"I can't guarantee a result, but I can walk you through how these matters usually proceed and what to watch for\").",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.commercial-framing-of-value",
        name: {
          ar: "ربط الطلب بمشكلة العمل الفعلية للطرف الآخر",
          en: "Tying the ask to the other party's actual business problem",
        },
        description: {
          ar: "يُقاس بما إذا ربط المتدرّب الطلب أو التكليف المقترح بالتفصيل التجاري المحدد الذي ذكره الطرف الآخر، لا بعرض عام لاختصاصات المكتب.",
          en: "Measured by whether the learner tied the ask or proposed engagement to the specific commercial detail the other party actually mentioned, rather than a generic recital of the firm's practice areas.",
        },
        weight: 0.1,
        descriptors: [
          {
            ar: "الطلب أو العرض عام تماماً، غير مرتبط بأي شيء ذكره الطرف الآخر فعلاً عن عمله أو مشكلته (وصف عام جامد لاختصاصات المكتب).",
            en: "The ask or offer is entirely generic, disconnected from anything the other party actually said about their business or problem (a stock, boilerplate description of the firm's practice areas).",
          },
          {
            ar: "يشير المتدرّب إلى عمل الطرف الآخر بشكل عابر، لكن الطلب أو التكليف المقترح لا يرتبط بوضوح بالمشكلة المحددة التي ذُكرت.",
            en: "The learner mentions the other party's business in passing, but the proposed ask or engagement isn't clearly connected to the specific problem that was mentioned.",
          },
          {
            ar: "يربط المتدرّب الطلب بالمجال العام لمشكلة الطرف الآخر، لكن دون استحضار التفصيل المحدد الذي ذكره فعلاً.",
            en: "The learner connects the ask to the general area of the other party's problem, but without recalling the specific detail they actually gave.",
          },
          {
            ar: "يربط المتدرّب الطلب صراحةً بالتفصيل المحدد الذي ذكره الطرف الآخر عن مشكلة عمله، بما يُظهر أنه أصغى فعلاً وفهم الأثر التجاري (كالإشارة إلى خطر محدد على سلسلة التوريد ذكره الطرف الآخر بنفسه).",
            en: "The learner explicitly ties the ask to the specific detail the other party gave about their business problem, showing genuine listening and understanding of the commercial stakes (such as referencing a specific supply-chain risk the other party themselves described).",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.sim-outcome-promise",
        label: {
          ar: "الوعد بنتيجة قانونية محددة أو الإيحاء بضمانها بهدف كسب التكليف أو إقناع الطرف الآخر بالمضي قدماً.",
          en: "Promising a specific legal outcome, or implying it is guaranteed, in order to win the engagement or persuade the other party to proceed.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.sim-pressuring-after-hesitation",
        label: {
          ar: "الاستمرار بالضغط على الطرف الآخر بعد أن أبدى تردداً واضحاً أو رفضاً لطيفاً.",
          en: "Continuing to pressure the other party after they have shown clear hesitation or given a soft no.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.sim-missed-opening",
        label: {
          ar: "عدم طلب الإحالة أو التكليف إطلاقاً رغم وجود فرصة حقيقية ومناسبة أبداها الطرف الآخر بوضوح.",
          en: "Failing to ask for the referral or the engagement at all, despite a genuine and appropriate opening the other party clearly gave.",
        },
        capsScoreAt: 2,
      },
    ],
    passThreshold: 2,
  },
];
