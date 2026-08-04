import type { RubricDef } from "../types";

/**
 * Assessment rubrics for the Negotiation & Influence domain
 * (`dom.negotiation-influence`) of AIJUR Professional Skills Lab.
 *
 * Every descriptor describes something a reviewer can point to in the
 * learner's transcript or text. No descriptor refers to attitude,
 * motivation, confidence, personality or accent — only to observable
 * features of what was said or written.
 */
export const NEGOTIATION_INFLUENCE_RUBRICS: RubricDef[] = [
  // -------------------------------------------------------------------------
  // 1. Negotiation simulation performance
  // -------------------------------------------------------------------------
  {
    id: "rubric.negotiation-sim.v1",
    name: {
      ar: "جودة أداء التفاوض في المحاكاة",
      en: "Quality of a negotiation simulation",
    },
    version: "1.0.0",
    skillIds: [
      "skill.negotiation",
      "skill.reading-the-counterpart",
      "skill.handling-pressure-tactics",
      "skill.staying-within-mandate",
    ],
    criteria: [
      {
        id: "cr.preparation-showing",
        name: { ar: "ظهور التحضير في الأداء", en: "Preparation showing through in performance" },
        description: {
          ar: "يُقاس بما إذا كشف النص عن هدف محدّد، وحدّ أدنى (نقطة الانسحاب)، وبديل واضح في حال الفشل، ذكرها المتدرّب أو استند إليها أثناء التفاوض، بدل ارتجال الأرقام في اللحظة.",
          en: "Measured by whether the transcript reveals a defined goal, a walk-away floor, and a clear alternative if talks fail, that the learner stated or relied on during the negotiation, rather than improvising figures on the spot.",
        },
        weight: 0.15,
        descriptors: [
          {
            ar: "لا إشارة في النص إلى هدف أو حدّ أدنى أو بديل؛ الأرقام المطروحة تتغيّر من دور إلى آخر دون تفسير (يطلب تجديد الإيجار بمبلغ ثم يذكر مبلغاً مختلفاً لاحقاً دون سبب).",
            en: "No reference anywhere to a goal, floor or alternative; the figures proposed shift from turn to turn with no explanation (e.g. asking for a lease renewal at one rent, then a different one later with no stated reason).",
          },
          {
            ar: "يذكر المتدرّب رقماً مستهدفاً مرّة واحدة، دون حدّ أدنى ولا بديل معلن، أو يتراجع عن موقفه المعلن فور أول ضغط من الطرف الآخر دون أي تبرير.",
            en: "The learner states a target figure once, with no floor and no stated alternative, or abandons a stated position the moment the other side pushes back, with no justification given.",
          },
          {
            ar: "يظهر الهدف والحدّ الأدنى معاً في النص، وتبقى الأرقام المطروحة متّسقة طوال الحوار، لكن لا إشارة إلى بديل المتدرّب في حال تعذّر الاتفاق (استئجار عقار آخر، مقاول بديل، رفع دعوى الشيك).",
            en: "Both the goal and the floor appear in the transcript, and the figures proposed stay internally consistent throughout, but there is no reference to the learner's alternative if no deal is reached (another property, an alternative contractor, filing on the dishonoured cheque).",
          },
          {
            ar: "يظهر الهدف والحدّ الأدنى والبديل الثلاثة في النص، وتبقى الأرقام متّسقة، ويستند المتدرّب صراحةً إلى بديله عند الردّ على ضغط الطرف الآخر (مثلاً: «إن تعذّر الاتفاق على هذا الأساس، لدى موكّلي خيار مقاول آخر جاهز خلال أسبوعين»).",
            en: "The goal, the floor and the alternative all appear in the transcript, figures stay consistent, and the learner explicitly draws on the alternative when responding to pressure (e.g. \"if we cannot agree on this basis, my client has another contractor ready within two weeks\").",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.interest-based-moves",
        name: { ar: "الانتقال من المواقف إلى المصالح", en: "Moving from positions to interests" },
        description: {
          ar: "يُقاس بما إذا سأل المتدرّب عن المصلحة الكامنة وراء موقف الطرف الآخر (توقيت السيولة، السمعة، اليقين، السرعة) أو سمّاها صراحةً، بدل الاكتفاء بتبادل الأرقام أو المواقف.",
          en: "Measured by whether the learner asked about or named the interest behind the other side's position (cash-flow timing, reputation, certainty, speed), rather than only trading figures or positions back and forth.",
        },
        weight: 0.25,
        descriptors: [
          {
            ar: "يكرّر المتدرّب موقفه أو رقمه دون تغيير، ولا يسأل مرّة واحدة عن سبب تمسّك الطرف الآخر بموقفه (لماذا يريد المستأجر مهلة ستّة أشهر، لماذا يصرّ المقاول على دفعة مقدّمة أعلى).",
            en: "The learner repeats their own position or figure unchanged, and never once asks why the other side holds their position (why the tenant wants a six-month grace period, why the contractor insists on a higher upfront payment).",
          },
          {
            ar: "يطرح سؤالاً واحداً عن دافع الطرف الآخر، لكنه لا يستعمل الجواب في أي اقتراح لاحق؛ يعود فوراً إلى تبادل الأرقام.",
            en: "Asks one question about the other side's motivation, but never uses the answer in a later proposal; reverts immediately to trading numbers.",
          },
          {
            ar: "يحدّد المتدرّب مصلحة حقيقية واحدة للطرف الآخر ويسمّيها، ويبني عليها اقتراحاً واحداً على الأقل، لكن بقية الحوار تبقى غالباً تبادلاً للمواقف.",
            en: "The learner identifies and names one genuine interest of the other side, and builds at least one proposal on it, but the rest of the exchange remains largely positional.",
          },
          {
            ar: "يستخرج المتدرّب مصلحة الطرف الآخر ومصلحته هو معاً بصورة صريحة، ويبني عرضين أو أكثر حول هذه المصالح لا حول الأرقام وحدها (مثلاً: ربط تخفيض الإيجار بمدّة عقد أطول تمنح المالك يقيناً).",
            en: "The learner surfaces both the other side's interests and their own explicitly, and builds two or more proposals around those interests rather than figures alone (e.g. linking a lower rent to a longer term that gives the landlord certainty).",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.composure-under-pressure",
        name: { ar: "الثبات أمام أساليب الضغط", en: "Composure under pressure tactics" },
        description: {
          ar: "يُقاس بما إذا أظهر النص أسلوب ضغط محدّداً (تهديد بمهلة، تهديد بالانسحاب، رقم افتتاحي متطرّف، عرض نهائي) وكيف تعامل معه المتدرّب: بتسميته أو تحييده بهدوء، أم بالاستسلام الفوري أو التصعيد المقابل.",
          en: "Measured by whether the transcript shows a specific pressure tactic (deadline threat, walk-out threat, an extreme opening anchor, a take-it-or-leave-it ultimatum) and how the learner handled it: naming or calmly deflecting it, versus capitulating immediately or escalating in response.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "يستسلم المتدرّب فوراً لأول أسلوب ضغط (يقبل الشرط دون أي مقابل)، أو يصعّد الموقف بلهجة حادّة أو بعرض نهائي مقابل عرض نهائي.",
            en: "The learner capitulates immediately to the first pressure tactic (accepting the term with no counter), or escalates — a sharper tone, or matching one ultimatum with another.",
          },
          {
            ar: "لا يستسلم ولا يصعّد، لكنه يتهرّب بصيغ عامة أو صمت دون معالجة الأسلوب المستعمل ضدّه صراحةً.",
            en: "Neither capitulates nor escalates, but stalls with vague phrasing or silence, without addressing the tactic being used against them.",
          },
          {
            ar: "يحيّد الأسلوب بردّ مؤقّت («أحتاج للتأكّد قبل أن أجيب على هذا الشرط بالذات») لكن دون تسميته صراحةً كتكتيك.",
            en: "Deflects the tactic with a holding response (\"I need to confirm before I can respond to that specific term\") but does not name it as a tactic.",
          },
          {
            ar: "يسمّي الأسلوب بهدوء ودون اتهام («يبدو أن هذا عرض أخير قبل أن نناقش التفاصيل، هل نعود إلى…؟») ويعيد الحوار إلى جوهر الموضوع دون مجاراة النبرة العدائية.",
            en: "Names the tactic calmly and without accusation (\"it sounds like this is a final offer before we've discussed the detail — can we come back to…?\") and redirects to substance without matching the hostile tone.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.mandate-respect",
        name: { ar: "احترام حدود التفويض", en: "Respecting the limits of the mandate" },
        description: {
          ar: "يُقاس بما إذا التزم المتدرّب بشروط تقع ضمن تفويض معقول فقط، وبما إذا نبّه صراحةً عند بلوغ عرض يتطلّب موافقة الموكّل قبل قبوله.",
          en: "Measured by whether the learner commits to terms that lie within a plausible authority only, and explicitly flags when an offer reached requires the client's confirmation before acceptance.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "يقبل أو يعرض شرطاً يتجاوز بوضوح أي تفويض معقول دون أي تنبيه (يوافق على رقم تسوية نهائي، أو يتنازل عن حقّ الموكّل في الشيك المرتجع، في الجلسة نفسها).",
            en: "Accepts or offers a term that clearly exceeds any plausible mandate with no flag at all (agreeing a final settlement figure, or waiving the client's claim on the dishonoured cheque, in the session itself).",
          },
          {
            ar: "ينبّه مرّة واحدة إلى حاجته للتأكّد من موكّله، ثم يلتزم رغم ذلك بشرط آخر لم يُتحقّق منه.",
            en: "Flags the need to check with the client once, but then goes on to commit anyway on a different term that was never verified.",
          },
          {
            ar: "يتجنّب طوال الحوار الالتزام بما يتجاوز تفويضه، لكنه لا يوضّح ما الذي سيحصل تالياً: من سيؤكّد، وبأي مهلة.",
            en: "Consistently avoids committing beyond the mandate throughout, but never states what happens next: who will confirm, and by when.",
          },
          {
            ar: "يلتزم طوال الحوار بما يقع ضمن تفويضه، وكل مرة يصل فيها إلى شرط يتطلّب تأكيداً يسمّي من سيؤكّده (الموكّل، الشريك المسؤول) وبأي مهلة قبل اعتباره نهائياً.",
            en: "Stays within the mandate throughout, and each time a term is reached that needs confirmation, names who will confirm it (the client, the supervising partner) and by when, before it is treated as final.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.value-creation",
        name: { ar: "خلق خيارات تتجاوز الموقف الافتتاحي", en: "Creating options beyond the opening position" },
        description: {
          ar: "يُقاس بما إذا قدّم النص اقتراحاً واحداً على الأقل يُدخل شرطاً أو مقايضة أو حزمة لم تكن واردة في الموقف الافتتاحي لأي من الطرفين.",
          en: "Measured by whether the transcript contains at least one proposal introducing a term, trade-off or package that was not present in either side's opening position.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "يبقى الحوار بأكمله داخل الموقفين الافتتاحيين، ولا يتحرّك سوى الرقم الوحيد محلّ الخلاف صعوداً أو نزولاً.",
            en: "The negotiation stays entirely within the two opening positions, and only the single disputed figure moves up or down.",
          },
          {
            ar: "يقترح عنصراً جديداً واحداً، لكن دون ربطه بما يقدّره أي من الطرفين؛ تنازل عرضي لا قيمة عملية له.",
            en: "Proposes one new element, but it is not linked to anything either side values; a throwaway concession with no practical value.",
          },
          {
            ar: "يقترح مقايضة واحدة خالقة للقيمة (مدة إيجار أطول مقابل بدل أدنى، جدول دفعات مقابل استرداد كامل المبلغ المستحق للمقاول) يمكن أن يستفيد منها الطرفان.",
            en: "Proposes one value-creating trade (a longer lease term for a lower rent, a staged payment plan for the full amount owed to the contractor) that both sides could plausibly gain from.",
          },
          {
            ar: "يقترح خيارين مختلفين أو أكثر خالقين للقيمة (مثلاً: تسوية فورية بمبلغ أقل مقابل شيك جديد مضمون، أو المبلغ الكامل على أقساط مع فائدة تأخير)، ويدعو الطرف الآخر إلى الاختيار بينها أو الدمج بينها.",
            en: "Proposes two or more distinct value-creating options (e.g. an immediate lower settlement against a new guaranteed cheque, or the full amount in instalments with late-payment interest) and invites the other side to choose between them or combine elements.",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.sim-no-authority-commitment",
        label: {
          ar: "الالتزام باسم الموكّل بشرط لا تتوفر أي إمارة على أن المتدرّب يملك صلاحية الموافقة عليه (تعديل جوهري في الثمن أو إسقاط حق) دون أي تحفّظ.",
          en: "Committing the client to a term with no apparent sign the learner has authority to agree to it (a material change to price, or dropping a right) with no reservation at all.",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.sim-outcome-promise",
        label: {
          ar: "الوعد غير المشروط بنتيجة معيّنة من التفاوض أو من أي إجراء قانوني لاحق («سنسترد كامل المبلغ حتماً»، «ستفوز في الدعوى»).",
          en: "Making an unconditional promise of an outcome, whether of the negotiation or of any later legal process (\"we will definitely recover the full amount\", \"you will win the case\").",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.sim-other-client-reference",
        label: {
          ar: "ذكر تفاصيل تسوية أو مبلغ من ملف موكّل آخر لإقناع الطرف الآخر أو الموكّل الحالي.",
          en: "Citing settlement details or a figure from another client's matter to persuade the other side or the present client.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.sim-unlawful-term",
        label: {
          ar: "اقتراح أو قبول شرط يقتضي فعلاً غير مشروع (تأريخ مستند بأثر رجعي، إخفاء شيك مرتجع آخر) للتوصّل إلى اتفاق.",
          en: "Proposing or accepting a term that requires an unlawful act (backdating a document, concealing another dishonoured cheque) in order to reach agreement.",
        },
        capsScoreAt: 0,
      },
    ],
    passThreshold: 2,
  },

  // -------------------------------------------------------------------------
  // 2. Written negotiation communication
  // -------------------------------------------------------------------------
  {
    id: "rubric.negotiation-written.v1",
    name: {
      ar: "جودة المراسلة التفاوضية المكتوبة",
      en: "Quality of a written negotiation communication",
    },
    version: "1.0.0",
    skillIds: ["skill.persuasive-argument", "skill.closing-and-documenting"],
    criteria: [
      {
        id: "cr.grounded-argument",
        name: { ar: "حجّة واضحة ومسندة للموقف", en: "Clear, well-grounded argument for the position" },
        description: {
          ar: "يُقاس بما إذا استند كل مطلب أو موقف في الرسالة إلى واقعة محدّدة أو بند عقدي أو مقارنة سوقية أو حساب، بدل أن يُطرح كتأكيد مجرّد.",
          en: "Measured by whether every demand or position in the letter is supported by a specific fact, contractual clause, market comparator or calculation, rather than being asserted alone.",
        },
        weight: 0.3,
        descriptors: [
          {
            ar: "المواقف مذكورة دون أي واقعة أو مرجع يسندها في أي موضع من الرسالة (مثلاً: «البدل المقترح غير معقول» دون أي أساس).",
            en: "Positions are stated with no supporting fact or reference anywhere in the letter (e.g. \"the proposed rent is unreasonable\" with nothing behind it).",
          },
          {
            ar: "موقف واحد مسند بواقعة، بينما يبقى المطلب الرئيسي (الثمن أو مهلة الدفع) قائماً على التأكيد وحده دون سند.",
            en: "One position is supported by a fact, while the main demand (price or payment term) still rests on assertion alone with no support.",
          },
          {
            ar: "معظم المواقف مسندة بوقائع أو أرقام، لكن ادّعاءً مهماً واحداً يفتقر إلى مصدره أو طريقة احتسابه.",
            en: "Most positions are supported with facts or figures, but one significant claim is missing its source or the calculation behind it.",
          },
          {
            ar: "كل موقف في الرسالة مسند بواقعة محدّدة أو بند من العقد أو مقارنة سوقية أو حساب واضح، بحيث يستطيع القارئ التحقّق منه بنفسه (مثلاً: الإشارة إلى المادة السابعة من عقد التوريد وتاريخ التسليم الفعلي مقابل المتّفق عليه).",
            en: "Every position in the letter carries a specific supporting fact, contract clause, market comparator or clear calculation the reader could verify (e.g. citing clause 7 of the supply contract and the actual delivery date against the agreed one).",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.tone-preserving",
        name: { ar: "نبرة مهنية لا تُقفل باب التفاوض", en: "Professional tone that does not foreclose further negotiation" },
        description: {
          ar: "يُقاس بوجود أو غياب لغة اتهامية أو إنذارية محضة أو ساخرة، وبما إذا تركت الرسالة باباً صريحاً للردّ أو تقديم عرض مقابل.",
          en: "Measured by the presence or absence of accusatory, ultimatum-only or contemptuous language, and by whether the letter leaves an explicit opening for a response or counter-offer.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "صياغة اتهامية أو ساخرة («سوء نيّة»، «تعمّد التقصير») و/أو إنذار محض دون أي دعوة للردّ أو التفاوض.",
            en: "Accusatory or contemptuous phrasing (\"bad faith\", \"deliberate default\") and/or a pure ultimatum with no invitation to respond or negotiate.",
          },
          {
            ar: "النبرة محايدة لكنها جافّة؛ لا اتهام فيها، لكن لا سطر يدعو إلى الردّ أيضاً، فتبدو الرسالة وكأنها الكلمة الأخيرة.",
            en: "The tone is neutral but curt; no accusation, but no line inviting a response either — the letter reads as the final word.",
          },
          {
            ar: "نبرة مهنية طوال النص وباب مفتوح للردّ موجود، لكنه عام («نبقى على استعداد للتواصل») دون تحديد القناة أو الشخص.",
            en: "Professional tone throughout and an opening for a response exists, but it is generic (\"we remain available\") with no named channel or contact.",
          },
          {
            ar: "نبرة مهنية وحازمة دون أي لغة اتهامية، ودعوة صريحة ومحدّدة للردّ أو تقديم عرض مقابل عبر شخص أو بريد إلكتروني مسمّى.",
            en: "A professional, firm tone with no accusatory language, and an explicit, specific invitation to respond or counter through a named contact or email address.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.precision-of-terms",
        name: { ar: "دقّة الشروط والأرقام والتواريخ", en: "Precision in terms, figures and dates" },
        description: {
          ar: "يُقاس بما إذا كان كل مبلغ وعملة وتاريخ وشرط وارد في العرض مصاغاً بحيث لا يحتمل قراءة أخرى لاحقاً.",
          en: "Measured by whether every amount, currency, date and condition in the offer is phrased so it cannot be read a second way at a later dispute.",
        },
        weight: 0.3,
        descriptors: [
          {
            ar: "مبلغ أو شرط جوهري متروك مبهماً (مثل «المبلغ المستحق» دون رقم، أو «قريباً» بدل تاريخ محدّد).",
            en: "A key amount or term is left ambiguous (e.g. \"the outstanding amount\" with no figure given, or \"shortly\" instead of a specific date).",
          },
          {
            ar: "الأرقام مذكورة لكن تنقص العملة أو الأساس لواحد منها على الأقل (مبلغ دون عملة، أو دون ذكر الفاتورة أو الشيك المقصود).",
            en: "Figures are given, but the currency or basis is missing for at least one (an amount with no currency, or no reference to which invoice or cheque is meant).",
          },
          {
            ar: "كل الأرقام تحمل عملتها وأساسها، لكن شرطاً واحداً ملحقاً بالعرض (ماذا يحصل إن لم يُقبل قبل المهلة) غير مبيّن.",
            en: "All figures carry their currency and basis, but one condition attached to the offer (what happens if it is not accepted by the deadline) is not spelled out.",
          },
          {
            ar: "كل مبلغ يحمل عملته وأساسه (الفاتورة، العقد، الشيك)، وكل تاريخ مكتوب كاملاً بالسنة، وكل شرط ملحق بالعرض مذكور مع أثره سواء قُبل أو لم يُقبل قبل المهلة.",
            en: "Every amount carries its currency and basis (invoice, contract, cheque), every date is written in full with the year, and every condition attached to the offer is stated with its consequence, whether it is accepted or not by the deadline.",
          },
        ],
        evidenceRequired: true,
      },
      {
        id: "cr.next-step-deadline",
        name: { ar: "الخطوة التالية ومهلة الردّ", en: "Next step and response deadline" },
        description: {
          ar: "يُقاس بما إذا بيّنت الرسالة ما يحصل عند قبول العرض، وما يحصل عند عدم قبوله، وحدّدت مهلة معيّنة للردّ.",
          en: "Measured by whether the letter states what happens if the offer is accepted, what happens if it is not, and gives a specific deadline for a response.",
        },
        weight: 0.2,
        descriptors: [
          {
            ar: "لا مهلة للردّ ولا بيان للخطوة التالية في أي من الحالتين؛ تنتهي الرسالة فور ذكر العرض.",
            en: "No response deadline and no statement of next steps either way; the letter simply ends after stating the offer.",
          },
          {
            ar: "مهلة للردّ مذكورة، لكن دون بيان ما يترتّب على عدم الالتزام بها.",
            en: "A response deadline is given, but with no stated consequence for missing it.",
          },
          {
            ar: "المهلة وأثر عدم الردّ مذكوران معاً، لكن الخطوة التالية عند القبول غير موصوفة.",
            en: "The deadline and the consequence of not responding are both stated, but the next step upon acceptance is not described.",
          },
          {
            ar: "مهلة محدّدة للردّ، وبيان صريح لما يترتّب على تجاوزها، وخطوة تالية ملموسة عند القبول (من يُعدّ أي مستند وبأي مهلة، مثل توقيع ملحق العقد أو تسليم الشيك الجديد).",
            en: "A specific response deadline, an explicit statement of what happens if it is missed, and a concrete next step upon acceptance (who prepares what document, by when — e.g. signing the lease addendum or delivering the replacement cheque).",
          },
        ],
        evidenceRequired: true,
      },
    ],
    criticalMistakes: [
      {
        id: "cm.written-outcome-guarantee",
        label: {
          ar: "التصريح أو الإيحاء بنتيجة قانونية مضمونة («سنكسب الدعوى حتماً»، «القرار محسوم لصالحنا») في رسالة تفاوضية.",
          en: "Stating or implying a guaranteed legal outcome (\"we will certainly win\", \"the ruling is assured in our favour\") in a negotiation communication.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.written-omits-material-term",
        label: {
          ar: "إغفال شرط جوهري بالكامل من الرسالة (لا ذكر لمهلة الدفع، أو لضمانة الشيك الجديد، أو لتاريخ إخلاء العقار).",
          en: "Omitting a material term entirely from the letter (no mention of a payment period, of security for a replacement cheque, or of the vacate date for a property).",
        },
        capsScoreAt: 1,
      },
      {
        id: "cm.written-other-matter-disclosure",
        label: {
          ar: "ذكر تفاصيل تسوية أو مبلغ من ملف موكّل آخر كمرجع أو كوسيلة ضغط.",
          en: "Citing settlement details or a figure from another client's matter as a reference point or as leverage.",
        },
        capsScoreAt: 0,
      },
      {
        id: "cm.written-irrevocable-no-mandate",
        label: {
          ar: "تقديم العرض كنهائي وغير قابل للسحب دون أي تحفّظ بشأن حاجته لموافقة الموكّل.",
          en: "Presenting the offer as final and irrevocable with no reservation regarding the client's confirmation being required.",
        },
        capsScoreAt: 1,
      },
    ],
    passThreshold: 2,
  },
];
