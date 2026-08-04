import type { UnitDef } from "../types";

/**
 * Negotiation & Influence path (`path.negotiation-influence`) — units 6-10,
 * the final five units.
 *
 * `ch.ni.running-the-session` closes with unit 6 (staying within mandate).
 * `ch.ni.under-pressure` covers units 7-8 (recognizing pressure tactics, then
 * a hostile-counterpart simulation). `ch.ni.closing` covers units 9-10
 * (closing techniques, then documenting — the path's capstone).
 *
 * Skills, rubrics and scenarios referenced here are authored elsewhere in the
 * bundle (framework/skills-negotiation-influence.ts,
 * framework/rubrics-negotiation-influence.ts, scenarios-negotiation-influence.ts).
 */
export const NI_UNITS_06_10: UnitDef[] = [
  // =========================================================================
  // UNIT 06 — Staying within mandate
  // =========================================================================
  {
    id: "unit.ni.06",
    chapterId: "ch.ni.running-the-session",
    order: 3,
    title: {
      ar: "الالتزام بحدود التفويض",
      en: "Staying Within Mandate",
    },
    subtitle: {
      ar: "الرقم الذي يسرّك في اللحظة قد يخفي شرطًا لم يمنحك أحد صلاحية القبول به",
      en: "The figure that pleases you in the moment can hide a term nobody gave you authority to accept.",
    },
    primarySkillId: "skill.staying-within-mandate",
    skillIds: ["skill.staying-within-mandate", "skill.negotiation"],
    stage: 2,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.ni.06.hook",
        text: {
          ar: "أفضل عرض تسمعه في الجلسة قد يكون الأخطر: رقم يسرّك مربوط بشرط لم يمنحك أحد صلاحية القبول به.",
          en: "The best offer you hear in the room can be the most dangerous one: a pleasing figure tied to a term nobody gave you authority to accept.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.ni.06.why",
        text: {
          ar: "من يرتجل موافقة على بند خارج تفويضه لا يخدم موكّله، بل يضعه أمام التزام لم يوافق عليه أحد. وثقة بناها المكتب على مدى سنوات قد تُهدَم بجملة واحدة قيلت تحت ضغط اللحظة.",
          en: "A negotiator who improvises agreement to a term outside his mandate does not serve his client — he commits the client to something nobody actually approved. Trust the firm built over years can be undone by one sentence said under the pressure of the moment.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.ni.06.goals",
        goals: {
          ar: [
            "أن تحمل تفويضًا مكتوبًا ومحدَّد الحدود قبل أي جلسة تفاوض جوهرية.",
            "أن تتعرّف في اللحظة نفسها على شرط يخرج عن نطاق تفويضك، وتميّزه عن تعديل ضمن الهامش المسموح.",
            "أن تتوقف بمهنية لطلب إذن إضافي دون أن تفقد زخم الجلسة أو مصداقيتك.",
          ],
          en: [
            "Carry a written mandate with defined limits before any material negotiation session.",
            "Recognize in real time a term that falls outside your mandate, and distinguish it from an adjustment within the permitted margin.",
            "Pause professionally to seek additional authorization without losing the session's momentum or your credibility.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.ni.06.lesson",
        title: {
          ar: "التفويض ليس شعورًا عامًا",
          en: "A mandate is not a general feeling",
        },
        body: {
          ar: [
            "كثير من المحامين يدخلون الجلسة بفكرة عامة عمّا يريده الموكّل، لا بحدود مكتوبة. والفكرة العامة تتمدّد تحت الضغط لتشمل ما لم يوافق عليه أحد.",
            "التفويض الجيد رقمان وحدّان: الهدف الذي تسعى إليه، والسقف الذي لا تتجاوزه دون إذن — مكتوبان قبل الجلسة لا أثناءها.",
            "أخطر تجاوزات التفويض ليست في الأرقام وحدها. أخطرها بنود لا تُقاس بالأرقام: التزام بجدول توسّع، ضمانة شخصية، أو تنازل عن بند حصرية.",
            "حين يُطرح بند كهذا، السؤال الأول ليس «هل هذا مقبول؟» بل «هل هذا ضمن ما فُوِّضت به فعلًا؟» — سؤالان مختلفان تمامًا.",
            "التوقف ليس ضعفًا. جملة واحدة تكفي: «هذا يتجاوز ما أُذنت به، وأحتاج للعودة بشأنه» — تُقال بثقة لا اعتذار، فتحفظ زخم الجلسة أكثر مما تفقده.",
            "أما الموافقة الفورية على بند غير مفوَّض، ولو بحسن نية، فتُصحَّح لاحقًا بصعوبة أكبر بكثير من صعوبة قول «أعود إليك» في اللحظة نفسها.",
          ],
          en: [
            "Many lawyers enter a session with a general sense of what the client wants, not a written boundary. And a general sense stretches under pressure to cover what nobody actually approved.",
            "A sound mandate has two numbers and two boundaries: the target you are pursuing, and the ceiling you do not cross without permission — written before the session, not during it.",
            "The most dangerous mandate breaches are not in figures alone. The most dangerous ones arrive in terms not counted in numbers at all: a commitment to an expansion schedule, a personal guarantee, or giving up an exclusivity clause.",
            "When a term like this is raised, the first question is not \"is this acceptable?\" but \"is this actually within what I was authorized to agree?\" — two entirely different questions.",
            "Pausing is not weakness. One sentence is enough: \"this goes beyond what I've been authorized to agree, and I need to come back on it\" — said with confidence, not apology, and it preserves the session's momentum more than it costs.",
            "Immediate agreement to an unauthorized term, even in good faith, is far harder to correct afterward than it would have been to simply say \"let me come back to you\" in the moment.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.ni.06.visual",
        title: {
          ar: "ضمن التفويض، خارجه، وجملة التوقّف",
          en: "Within mandate, outside it, and the pause line",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "ضمن التفويض", en: "Within mandate" },
            detail: {
              ar: "نسبة إتاوة بين 6% و8%، ومدة عقد بين 7 و10 سنوات — حدود منحك إياها الشريكة كتابةً قبل الجلسة.",
              en: "A royalty rate between 6% and 8%, and a term between 7 and 10 years — limits the partner gave you in writing before the session.",
            },
            tone: "positive",
          },
          {
            label: { ar: "خارج التفويض", en: "Outside mandate" },
            detail: {
              ar: "التزام بعدد فروع جديدة وجدولها الزمني، أو ضمانة شخصية من مساهم — قرارات تخصّ مجلس الإدارة لا هذه الجلسة.",
              en: "A commitment to a number of new branches and their timeline, or a shareholder's personal guarantee — decisions for the board, not this session.",
            },
            tone: "negative",
          },
          {
            label: { ar: "جملة التوقّف", en: "The pause line" },
            detail: {
              ar: "«هذا يتجاوز ما أُذنت به، وأحتاج للعودة بشأنه خلال يومي عمل» — تُقال بثقة، وتُغلق الباب على الارتجال لا على التفاوض نفسه.",
              en: "\"This goes beyond what I've been authorized to agree, and I need to come back on it within two business days\" — said with confidence, closing the door on improvisation, not on the negotiation itself.",
            },
            tone: "neutral",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.ni.06.worked",
        strong: {
          label: {
            ar: "محامية تتوقّف عند البند غير المفوَّض به",
            en: "A lawyer pausing at the unauthorized term",
          },
          text: {
            ar: [
              "تمثّل الأستاذة هالة نجم شركة نجوم الخليج للمطاعم، المرخَّص الرئيسي لسلسلة مقاهي «روست هاوس» في المنطقة الشرقية، في تجديد عقد الامتياز. منحتها الشريكة المسؤولة، الأستاذة منى الزهراني، تفويضًا مكتوبًا: إتاوة بين 6% و8%، ومدة بين 7 و10 سنوات، ولا صلاحية للالتزام بجدول توسّع أو ضمانة شخصية.",
              "يعرض المدير الإقليمي للمانح، زياد المصري: «نخفّض الإتاوة إلى 6.5% إن التزمتم كتابةً بفتح أربعة فروع خلال 18 شهرًا، مع ضمانة شخصية من المساهم الرئيسي.»",
              "«الإتاوة عند 6.5% ضمن ما هو مطروح أمامي تمامًا، ويسعدني أن نثبّتها الآن. أما الالتزام بعدد الفروع وجدولها والضمانة الشخصية، فهذا قرار يخصّ مجلس إدارة موكّلي، ويتجاوز ما أُذنت به. أعود إليكم بشأنه خلال يومي عمل.»",
            ],
            en: [
              "Ms Hala Najm represents Najoom Al-Khaleej Restaurants, the master franchisee of the Roast House café chain in the Eastern Province, on the franchise renewal. The responsible partner, Ms Mona Al-Zahrani, gave her a written mandate: a royalty between 6% and 8%, a term between 7 and 10 years, and no authority to commit to an expansion schedule or a personal guarantee.",
              "The franchisor's regional director, Ziad Al-Masri, offers: \"We'll lower the royalty to 6.5% if you commit in writing to opening four branches within 18 months, with a personal guarantee from the majority shareholder.\"",
              "\"6.5% is entirely within what's in front of me, and I'm glad to lock that in now. The branch commitment, its timeline, and the personal guarantee are a decision for my client's board, and that goes beyond what I've been authorized to agree. I'll come back to you on it within two business days.\"",
            ],
          },
          why: {
            ar: "فصلت بين ما هو ضمن تفويضها فأقفلته فورًا، وما يتجاوزه فأوقفته بثقة دون اعتذار. الجلسة لم تتوقّف بل تقدّمت، وموكّلها لم يُلزَم بشيء لم يوافق عليه.",
            en: "She separated what lay within her mandate — closing it on the spot — from what exceeded it, pausing that part with confidence and no apology. The session did not stall; it advanced, and her client was never committed to anything it had not approved.",
          },
        },
        weak: {
          label: {
            ar: "موافقة «من حيث المبدأ» على بند غير مفوَّض",
            en: "Agreeing \"in principle\" to an unauthorized term",
          },
          text: {
            ar: [
              "«6.5% رقم جيد جدًا، ولا أرى مشكلة في مبدأ فتح الفروع الأربعة أيضًا — نتفق من حيث المبدأ، وأثبّت التفاصيل مع موكّلي لاحقًا.»",
            ],
            en: [
              "\"6.5% is a very good number, and I don't see a problem with the branch commitment in principle either — let's agree in principle, and I'll confirm the details with my client later.\"",
            ],
          },
          why: {
            ar: "«من حيث المبدأ» تُسمع في الغرفة كموافقة، ويُبنى عليها المحضر لاحقاً. حين ترفض الموكّلة الالتزام بالفروع، يصبح التراجع مواجهة مع طرف رأى موافقة واضحة.",
            en: "\"In principle\" is heard in the room as agreement, and the minutes build on it later. When the client refuses the branch commitment, walking it back becomes a confrontation with a party who saw a clear agreement.",
          },
        },
      },
      { kind: "activity", id: "s.ni.06.a1", activityId: "act.ni.06.1", mode: "quick" },
      { kind: "activity", id: "s.ni.06.a2", activityId: "act.ni.06.2", mode: "guided" },
      { kind: "activity", id: "s.ni.06.a3", activityId: "act.ni.06.3", mode: "guided" },
      { kind: "activity", id: "s.ni.06.a4", activityId: "act.ni.06.4", mode: "independent" },
      { kind: "activity", id: "s.ni.06.a5", activityId: "act.ni.06.5", mode: "independent" },
      { kind: "summary", id: "s.ni.06.summary", summaryCardId: "card.ni.06" },
      {
        kind: "apply_tomorrow",
        id: "s.ni.06.apply",
        task: {
          ar: "قبل جلستك القادمة، اكتب على ورقة واحدة عمودين: ما هو ضمن تفويضك بالضبط، وما يتطلّب العودة إلى الشريك أو الموكّل.",
          en: "Before your next session, write two columns on one sheet: exactly what lies within your mandate, and what requires checking back with the partner or client.",
        },
        detail: {
          ar: "احمل الورقة معك، وحين يُطرح بند لا تجده في أي عمود، توقّف واسأل قبل أن تجيب.",
          en: "Carry the sheet with you, and when a term comes up that fits neither column, pause and ask before you answer.",
        },
      },
      {
        kind: "next_mission",
        id: "s.ni.06.next",
        teaser: {
          ar: "عرفت كيف تحمي تفويضك في جلسة هادئة. الفصل القادم: ماذا يحدث حين يتعمّد الطرف الآخر أن يجعل الجلسة كل شيء إلا هادئة.",
          en: "You know how to protect your mandate in a calm session. The next chapter: what happens when the other side deliberately makes the session anything but calm.",
        },
      },
    ],
    activities: [
      {
        id: "act.ni.06.1",
        kind: "true_false",
        skillId: "skill.staying-within-mandate",
        stage: 2,
        weight: 1,
        context: {
          ar: [
            "تفاوض الأستاذة هالة على تجديد عقد امتياز، بتفويض إتاوة 6-8% ومدة 7-10 سنوات، ولا صلاحية للالتزام بجدول فروع أو ضمانة شخصية.",
            "قال المدير الإقليمي: «فقط أكّدي لي شفهيًا أنكم ستفتحون الفروع الأربعة من حيث المبدأ، ولن أطلب توقيعًا الآن.»",
          ],
          en: [
            "Ms Hala is negotiating a franchise renewal, mandated for a royalty of 6-8% and a term of 7-10 years, with no authority to commit to a branch schedule or a personal guarantee.",
            "The regional director says: \"Just confirm verbally that you'll open the four branches in principle — I won't ask for a signature now.\"",
          ],
        },
        prompt: {
          ar: "تأكيد شفهي «من حيث المبدأ» على الفروع الأربعة آمن، لأنه لا يُنشئ التزامًا حقيقيًا طالما لم يُوقَّع عليه.",
          en: "A verbal \"in principle\" confirmation on the four branches is safe, since it creates no real commitment as long as nothing is signed.",
        },
        options: [
          {
            id: "o.true",
            label: { ar: "صحيح", en: "True" },
            rationale: {
              ar: "غير صحيح تمامًا. الطرف الآخر يسمع «من حيث المبدأ» موافقة، ويبني عليها المحضر والمراسلات اللاحقة. التراجع لاحقًا يصبح مواجهة، لا تصحيحًا بسيطًا.",
              en: "Not correct at all. The other side hears \"in principle\" as agreement, and builds the minutes and later correspondence on it. Walking it back later becomes a confrontation, not a simple correction.",
            },
          },
          {
            id: "o.false",
            label: { ar: "خطأ", en: "False" },
            correct: true,
            rationale: {
              ar: "بالضبط. البند خارج التفويض من اللحظة التي يُطرح فيها، بصرف النظر عن التوقيع. الجملة الآمنة الوحيدة هنا هي التوقّف: «هذا يتجاوز ما أُذنت به، وأعود إليكم بشأنه.»",
              en: "Exactly. The term is outside the mandate from the moment it is raised, regardless of any signature. The only safe line here is the pause: \"this goes beyond what I've been authorized to agree, and I'll come back on it.\"",
            },
          },
        ],
      },
      {
        id: "act.ni.06.2",
        kind: "categorization",
        skillId: "skill.staying-within-mandate",
        stage: 2,
        weight: 2,
        prompt: {
          ar: "صنّف كل بند طُرح في جلسة تجديد الامتياز: هل هو ضمن التفويض المكتوب، أم يتطلّب العودة إلى الشريكة المسؤولة؟",
          en: "Sort each term raised in the franchise-renewal session: is it within the written mandate, or does it require checking back with the responsible partner?",
        },
        hint: {
          ar: "التفويض هنا: إتاوة 6-8%، ومدة 7-10 سنوات، ولا صلاحية لالتزامات توسّع أو ضمانات شخصية.",
          en: "The mandate here: a 6-8% royalty, a 7-10 year term, no authority for expansion commitments or personal guarantees.",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «ضمن التفويض» / «يتطلّب عودة» أسفل كل بند بدل السحب.",
          en: "Choose \"Within mandate\" / \"Requires check-back\" from buttons under each item instead of dragging.",
        },
        buckets: [
          { id: "within", label: { ar: "ضمن التفويض", en: "Within mandate" } },
          { id: "escalate", label: { ar: "يتطلّب عودة", en: "Requires check-back" } },
        ],
        items: [
          {
            id: "c1",
            label: { ar: "تثبيت الإتاوة عند 6.5%.", en: "Locking in the royalty at 6.5%." },
            bucketId: "within",
            rationale: {
              ar: "يقع بين 6% و8%، أي داخل هامش التفويض المكتوب تمامًا.",
              en: "It falls between 6% and 8%, entirely inside the written mandate's margin.",
            },
          },
          {
            id: "c2",
            label: { ar: "تمديد مدة العقد إلى 8 سنوات.", en: "Extending the term to 8 years." },
            bucketId: "within",
            rationale: {
              ar: "ضمن نطاق 7-10 سنوات المتّفق عليه مسبقًا مع الشريكة — لا حاجة للعودة.",
              en: "Within the pre-agreed 7-10 year range with the partner — no need to check back.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "الالتزام كتابةً بفتح 4 فروع خلال 18 شهرًا.",
              en: "Committing in writing to opening 4 branches within 18 months.",
            },
            bucketId: "escalate",
            rationale: {
              ar: "قرار استثماري وتوسّعي يخصّ مجلس إدارة الموكّلة، لا هذه الجلسة ولا هذا التفويض.",
              en: "An investment and expansion decision for the client's board, not this session or this mandate.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "ضمانة شخصية من المساهم الرئيسي لسداد الإتاوة.",
              en: "A personal guarantee from the majority shareholder for royalty payments.",
            },
            bucketId: "escalate",
            rationale: {
              ar: "التزام شخصي يتجاوز ما فُوِّضت به المحامية بوضوح، ويحتاج موافقة صريحة من الموكّل نفسه.",
              en: "A personal commitment that clearly exceeds what the lawyer was authorized to agree, needing explicit approval from the client itself.",
            },
          },
          {
            id: "c5",
            label: {
              ar: "تعديل نسبة مساهمة صندوق التسويق المشترك بمقدار نصف نقطة مئوية.",
              en: "Adjusting the shared marketing-fund contribution by half a percentage point.",
            },
            bucketId: "within",
            rationale: {
              ar: "تعديل طفيف على بند تشغيلي معتاد، لا يقترب من عتبة ما يتطلّب موافقة مجلس الإدارة.",
              en: "A minor adjustment to a routine operational term, nowhere near the threshold that requires board approval.",
            },
          },
        ],
      },
      {
        id: "act.ni.06.3",
        kind: "find_mistake",
        skillId: "skill.staying-within-mandate",
        secondarySkillIds: ["skill.negotiation"],
        stage: 2,
        weight: 2,
        context: {
          ar: [
            "مقتطف من محضر جلسة تجديد امتياز روست هاوس بعد أن طرح المدير الإقليمي شرط الفروع الأربعة والضمانة الشخصية مقابل خفض الإتاوة.",
            "ردّ المحامي: «6.5% ممتاز، ونتفق من حيث المبدأ على الفروع الأربعة أيضًا — سأثبّت التفاصيل مع موكّلي هذا الأسبوع ونوقّع الملحق الأسبوع المقبل.»",
          ],
          en: [
            "An excerpt from the minutes of a Roast House franchise-renewal session, after the regional director proposed the four-branch and personal-guarantee terms in exchange for a lower royalty.",
            "The lawyer's reply: \"6.5% is excellent, and we agree in principle to the four branches too — I'll confirm the details with my client this week and we'll sign the addendum next week.\"",
          ],
        },
        prompt: {
          ar: "ما الخطأ الأخطر في هذا الردّ؟",
          en: "What is the most serious mistake in this reply?",
        },
        hint: {
          ar: "اسأل: هل الالتزام «من حيث المبدأ» بالفروع يقع ضمن التفويض المكتوب أم خارجه؟",
          en: "Ask: does the \"in principle\" branch commitment fall within the written mandate, or outside it?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "قبول 6.5% دون التفاوض للوصول إلى 6%.",
              en: "Accepting 6.5% without negotiating down to 6%.",
            },
            rationale: {
              ar: "خيار مقبول ضمن التفويض المكتوب (6-8%)؛ ليس خطأ في حدود التفويض، وإن كان يمكن تحسينه.",
              en: "A choice inside the written mandate (6-8%); not a mandate error, even if it could be improved on.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "الموافقة «من حيث المبدأ» على الفروع الأربعة، وهو بند يتجاوز التفويض بوضوح.",
              en: "Agreeing \"in principle\" to the four branches, a term that clearly exceeds the mandate.",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. الفروع الأربعة قرار استثماري لمجلس الإدارة، لا للمحامي أن يوافق عليه ولو مبدئيًا؛ الطرف الآخر سيبني على هذه الجملة محضرًا وصياغة لاحقة يصعب التراجع عنهما.",
              en: "Exactly. The four branches are an investment decision for the board, not something the lawyer may agree to even preliminarily; the other side will build minutes and later drafting on this sentence that are hard to walk back.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "تحديد أسبوع واحد للتوقيع على الملحق.",
              en: "Setting one week for signing the addendum.",
            },
            rationale: {
              ar: "جدول زمني معقول بحدّ ذاته؛ المشكلة ليست في المهلة بل في مضمون ما وُعِد به خلالها.",
              en: "A reasonable timeline on its own; the problem is not the deadline but the substance of what was promised within it.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "عدم طرح سؤال عن سبب طلب المانح للضمانة الشخصية تحديدًا.",
              en: "Not asking why the franchisor specifically wants the personal guarantee.",
            },
            rationale: {
              ar: "فرصة ضائعة لفهم المصلحة الكامنة، لكنها ثانوية أمام الموافقة الفعلية على بند غير مفوَّض به.",
              en: "A missed chance to understand the underlying interest, but secondary next to actually agreeing to an unauthorized term.",
            },
          },
        ],
      },
      {
        id: "act.ni.06.4",
        kind: "short_written",
        skillId: "skill.staying-within-mandate",
        secondarySkillIds: ["skill.negotiation"],
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.negotiation-written.v1",
        weight: 3,
        minChars: 220,
        context: {
          ar: [
            "انتهت جلسة تجديد امتياز روست هاوس. اتفقتما شفهيًا على إتاوة 6.5% ومدة 8 سنوات — كلاهما ضمن تفويضك.",
            "طلب المدير الإقليمي أيضًا التزامًا بفتح 4 فروع خلال 18 شهرًا وضمانة شخصية من المساهم الرئيسي — وهذا يتجاوز تفويضك.",
            "تفويضك يسمح لك بالعودة إلى الشريكة المسؤولة خلال يومي عمل.",
          ],
          en: [
            "The Roast House franchise-renewal session has ended. You verbally agreed on a 6.5% royalty and an 8-year term — both within your mandate.",
            "The regional director also asked for a commitment to open 4 branches within 18 months and a personal guarantee from the majority shareholder — both exceed your mandate.",
            "Your mandate allows two business days to check back with the responsible partner.",
          ],
        },
        prompt: {
          ar: "اكتب رسالة متابعة قصيرة (٦٠-٩٠ كلمة) تُثبّت ما اتُّفق عليه ضمن تفويضك، وتوضح بثقة أن بندَي الفروع والضمانة يتطلّبان عودتك للموكّل، مع مهلة محدَّدة.",
          en: "Write a short follow-up message (60-90 words) confirming what was agreed within your mandate, and stating with confidence that the branch and guarantee terms require checking back with your client, with a specific deadline.",
        },
        modelAnswer: {
          ar: [
            "«أستاذ زياد، شكرًا على جلسة اليوم. أثبّت من جانبنا: إتاوة 6.5% ومدة عقد 8 سنوات، ضمن نطاق ما هو مطروح أمامي.»",
            "«أما الالتزام بفتح 4 فروع خلال 18 شهرًا والضمانة الشخصية من المساهم الرئيسي، فهما قراران يتجاوزان ما أُذنت به في هذه الجلسة، وأعود إليكم بشأنهما بحلول يوم الخميس بعد التشاور مع موكّلي.»",
          ],
          en: [
            "\"Mr Ziad, thank you for today's session. On our side I confirm: a 6.5% royalty and an 8-year term, within what was in front of me.\"",
            "\"The commitment to open 4 branches within 18 months and the personal guarantee from the majority shareholder both go beyond what I was authorized to agree in this session, and I will come back to you on both by Thursday after consulting my client.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«أستاذ زياد، شكرًا على الجلسة الجيدة. اتفقنا على معظم النقاط، وسنرسل الصيغة النهائية للملحق قريبًا.»",
            ],
            en: [
              "\"Mr Ziad, thank you for a good session. We agreed on most points, and we'll send the final wording of the addendum soon.\"",
            ],
          },
          whatIsWrong: {
            ar: "«معظم النقاط» لا تفصل المؤكَّد عمّا يتطلّب موافقة إضافية، فيقرأها المانح كموافقة كاملة على كل ما طرحه. و«قريبًا» ليست مهلة، فتُفتح الباب لصياغة تفترض التزامًا لم يُمنح.",
            en: "\"Most points\" fails to separate what is confirmed from what needs further approval, so the franchisor reads it as full agreement to everything raised. And \"soon\" is not a deadline — it opens the door to drafting that assumes a commitment never granted.",
          },
        },
      },
      {
        id: "act.ni.06.5",
        kind: "reflection",
        skillId: "skill.staying-within-mandate",
        stage: 2,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع لحظة وافقت فيها «من حيث المبدأ» على بند لم تكن متأكدًا أنه ضمن تفويضك. ما الذي جعلك توافق رغم الشك؟",
          en: "Recall a moment you agreed \"in principle\" to a term you were not sure fell within your mandate. What made you agree despite the doubt?",
        },
        followUp: {
          ar: "لو قلت بدلًا من ذلك «أحتاج للعودة بشأن هذا البند»، ماذا كنت لتخسر فعلًا في تلك اللحظة؟",
          en: "If you had instead said \"I need to come back on this term,\" what would you actually have lost in that moment?",
        },
      },
    ],
    summaryCard: {
      id: "card.ni.06",
      title: {
        ar: "حدود قبل الجلسة",
        en: "Boundaries Before the Session",
      },
      whatYouLearned: {
        ar: [
          "التفويض رقمان وحدّان مكتوبان قبل الجلسة، لا فكرة عامة تتمدّد تحت الضغط.",
          "أخطر تجاوزات التفويض ليست في الأرقام وحدها، بل في بنود لا تُقاس بالأرقام: توسّع، ضمانة، تنازل عن حصرية.",
          "التوقّف بثقة عند بند غير مفوَّض به يحفظ زخم الجلسة أكثر مما تفعل موافقة سريعة يصعب التراجع عنها.",
        ],
        en: [
          "A mandate is two numbers and two boundaries written before the session, not a general sense that stretches under pressure.",
          "The most dangerous mandate breaches are not in figures alone, but in terms not measured in numbers at all: expansion, a guarantee, giving up exclusivity.",
          "Pausing with confidence at an unauthorized term preserves a session's momentum better than a quick agreement that is hard to walk back.",
        ],
      },
      framework: {
        name: {
          ar: "قبل التوقيع: اكتب التفويض · افصل الأرقام عن البنود غير المفوَّضة · توقّف بثقة",
          en: "Before You Commit: Write the Mandate · Separate Figures From Unauthorized Terms · Pause With Confidence",
        },
        steps: [
          {
            ar: "اكتب التفويض — هدف وسقف محدَّدان بالأرقام، مكتوبان قبل الجلسة.",
            en: "Write the mandate — a defined target and ceiling in figures, written before the session.",
          },
          {
            ar: "افصل الأرقام عن البنود غير المفوَّضة — التزامات التوسّع والضمانات الشخصية عادة قرارات لغيرك.",
            en: "Separate figures from unauthorized terms — expansion commitments and personal guarantees are usually someone else's decision.",
          },
          {
            ar: "توقّف بثقة — جملة واحدة تكفي، ومهلة محدَّدة للعودة.",
            en: "Pause with confidence — one sentence is enough, with a specific deadline to come back.",
          },
        ],
      },
      rememberThis: {
        ar: "الرقم الذي يسرّك ليس دليلًا على أنه ضمن تفويضك. اسأل السؤال الثاني قبل أن تجيب.",
        en: "A pleasing figure is not proof it lies within your mandate. Ask the second question before you answer.",
      },
      useItTomorrow: {
        ar: "قبل جلستك القادمة، اكتب عمودين على ورقة واحدة: ضمن تفويضي، ويتطلّب عودة — واحملها معك إلى الغرفة.",
        en: "Before your next session, write two columns on one sheet: within my mandate, and requires check-back — and carry it into the room.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.governance-raci", "src.legal-project-management", "src.thinking-like-a-lawyer"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 07 — Recognizing pressure tactics
  // =========================================================================
  {
    id: "unit.ni.07",
    chapterId: "ch.ni.under-pressure",
    order: 1,
    title: {
      ar: "التعرّف على أساليب الضغط",
      en: "Recognizing Pressure Tactics",
    },
    subtitle: {
      ar: "المهلة، والرقم المتطرّف، والدور المزدوج، والانسحاب — أساليب لها أسماء، فسمِّها.",
      en: "The deadline, the extreme number, the dual role, the walkout — these tactics have names. Use them.",
    },
    primarySkillId: "skill.handling-pressure-tactics",
    skillIds: ["skill.handling-pressure-tactics"],
    stage: 3,
    estimatedMinutes: 10,
    steps: [
      {
        kind: "hook",
        id: "s.ni.07.hook",
        text: {
          ar: "الضغط الذي تشعر به في التفاوض ليس حادثاً. هو خطة رسمها أحدهم قبل أن تدخل الغرفة.",
          en: "The pressure you feel in a negotiation is not an accident. Someone planned it before you walked into the room.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.ni.07.why",
        text: {
          ar: "من يسمّي التكتيك يستعيد السيطرة على وتيرة الجلسة؛ ومن يشعر به فقط دون تسميته يتنازل أو يصعّد — وكلاهما يخسر لمصلحة من خطّط للضغط.",
          en: "Whoever names the tactic takes back control of the session's pace; whoever only feels it without naming it either concedes or escalates — and either way loses ground to whoever planned the pressure.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.ni.07.goals",
        goals: {
          ar: [
            "أن تتعرّف على أربعة أساليب ضغط شائعة أثناء وقوعها: المهلة المصطنعة، التثبيت المتطرّف، الشرطي الطيب والشرطي الشرير، والانسحاب.",
            "أن تسمّي التكتيك بلغة محايدة دون اتهام الطرف الآخر بسوء نية.",
            "أن تتحقق من واقعية المهلة أو التهديد قبل أن تتصرّف بموجبه.",
          ],
          en: [
            "Recognize four common pressure tactics as they happen: the artificial deadline, the extreme anchor, good-cop-bad-cop, and the walkout.",
            "Name the tactic in neutral language without accusing the other side of bad faith.",
            "Verify whether a deadline or threat is real before acting on it.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.ni.07.lesson",
        title: {
          ar: "الضغط أسلوب، لا حقيقة",
          en: "Pressure is a technique, not a fact",
        },
        body: {
          ar: [
            "أربعة أساليب تتكرر في كل سوق تفاوضي تقريباً: مهلة مصطنعة، رقم افتتاحي متطرّف، شرطي طيب وشرطي شرير، وتهديد بالانسحاب.",
            "المهلة المصطنعة تبدو واقعاً لا يُناقش: «العرض يسري حتى نهاية اليوم فقط». لكن أكثر المهل لا تستند إلى ضرورة فعلية، بل إلى رغبة في تسريع قرارك قبل أن تفكّر.",
            "الرقم الافتتاحي المتطرّف يهدف إلى إزاحة مرجعيتك الذهنية: إن سمعت رقماً ضخماً أولاً، يبدو الرقم المعقول بعده تنازلاً كبيراً منك، لا منه.",
            "الشرطي الطيب والشرطي الشرير يقسمان الأدوار: أحدهما يهاجم، والآخر «يتفهّمك» ليكسب ثقتك. كلاهما يخدم الموقف نفسه.",
            "التهديد بالانسحاب يفترض أنك ستُسارع لإنقاذ الصفقة. أحياناً هو حقيقي، وأحياناً اختبار لرد فعلك.",
            "الرد الصحيح على كل هذه الأساليب واحد: لا تستسلم فوراً، ولا تصعّد بالمثل. توقّف، وسمِّ ما يحدث بهدوء ودون اتهام.",
            "تسمية التكتيك ليست عدوانية: «يبدو أن هذا عرض أخير قبل أن نناقش التفاصيل، هل نعود إلى…؟» تعيد الحوار إلى الجوهر دون أن تُغلق الباب.",
          ],
          en: [
            "Four tactics recur in nearly every negotiating market: an artificial deadline, an extreme opening anchor, good-cop-bad-cop, and a walkout threat.",
            "An artificial deadline looks like an undiscussable fact: 'this offer is only valid until end of day.' But most deadlines rest on no real necessity — only a wish to rush your decision before you think.",
            "An extreme opening anchor aims to shift your mental reference point: hear a huge number first, and the reasonable one that follows looks like a big concession from you, not from them.",
            "Good-cop-bad-cop splits the roles: one attacks, the other 'understands' you to win your trust. Both serve the same position.",
            "A walkout threat assumes you will rush to save the deal. Sometimes it's real. Sometimes it's a test of your reaction.",
            "The right response to all four is the same: don't capitulate immediately, and don't escalate in kind. Pause, and calmly name what's happening, without accusation.",
            "Naming the tactic is not aggressive: 'it sounds like this is a final offer before we've discussed the detail — can we come back to…?' redirects to substance without closing the door.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.ni.07.visual",
        title: {
          ar: "أربعة أساليب وردّ لكل منها",
          en: "Four Tactics, One Counter Each",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "المهلة المصطنعة", en: "The artificial deadline" },
            detail: {
              ar: "اختبرها: «هل هذه المهلة ملزمة فعلاً، أم متاحة للنقاش؟»",
              en: "Test it: 'Is this deadline actually binding, or open to discussion?'",
            },
            tone: "neutral",
          },
          {
            label: { ar: "التثبيت المتطرّف", en: "The extreme anchor" },
            detail: {
              ar: "لا تردّ على الرقم مباشرة؛ اربطه بمعيار موضوعي أولاً.",
              en: "Don't respond to the number directly; tie it to an objective standard first.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "الشرطي الطيب والشرطي الشرير", en: "Good cop, bad cop" },
            detail: {
              ar: "وجّه ردّك إلى الحجة لا إلى أي متحدّث بعينه.",
              en: "Direct your response to the argument, not to whichever speaker is talking.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "التهديد بالانسحاب", en: "The walkout threat" },
            detail: {
              ar: "قيّم جدّيته قبل أن تلاحقه؛ لا تتوسّل لعودته.",
              en: "Assess how serious it is before chasing it; don't plead for its return.",
            },
            tone: "neutral",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.ni.07.worked",
        strong: {
          label: {
            ar: "محامٍ يسمّي المهلة المصطنعة بهدوء",
            en: "A lawyer who calmly names the artificial deadline",
          },
          text: {
            ar: [
              "«أفهم أنكم تريدون إقفال الملف اليوم، لكن هل هذه المهلة مرتبطة بإجراء فعلي، كموعد جلسة أو قرار مصرفي؟»",
              "«إن لم تكن كذلك، أقترح أن نأخذ الوقت الكافي لنصل إلى تسوية تصمد، بدل اتفاق متسرّع يُعاد فتحه بعد أسبوع.»",
            ],
            en: [
              "'I understand you'd like to close this today, but is that deadline tied to something real — a hearing date, a bank decision?'",
              "'If not, I'd suggest we take the time to reach a settlement that holds, rather than a rushed deal that reopens in a week.'",
            ],
          },
          why: {
            ar: "سؤال محايد يختبر واقعية المهلة دون اتهام، ويعيد تعريف «السرعة» بأنها ليست في مصلحة أحد إن أنتجت اتفاقاً هشاً.",
            en: "A neutral question that tests the deadline's reality without accusation, and reframes 'speed' as being in nobody's interest if it produces a fragile deal.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يستسلم للمهلة",
            en: "A lawyer who caves to the deadline",
          },
          text: {
            ar: ["«حسناً، بما أن الوقت ضيّق، فلنوقّع على عرضكم الآن بدل أن نخسر الفرصة.»"],
            en: ["'Fine, since time is short, let's just sign your offer now rather than lose the chance.'"],
          },
          why: {
            ar: "استسلم للمهلة دون أن يسألها ما إذا كانت حقيقية، ومنح الطرف الآخر درساً مجانياً: هذا التكتيك ينجح معه، فسيُستخدم مجدداً في كل جلسة قادمة.",
            en: "He caved to the deadline without ever asking whether it was real, and taught the other side something for free: this tactic works on him, so it will be used again in every future session.",
          },
        },
      },
      { kind: "activity", id: "s.ni.07.a1", activityId: "act.ni.07.1", mode: "quick" },
      { kind: "activity", id: "s.ni.07.a2", activityId: "act.ni.07.2", mode: "guided" },
      { kind: "activity", id: "s.ni.07.a3", activityId: "act.ni.07.3", mode: "guided" },
      { kind: "activity", id: "s.ni.07.a4", activityId: "act.ni.07.4", mode: "independent" },
      { kind: "activity", id: "s.ni.07.a5", activityId: "act.ni.07.5", mode: "independent" },
      { kind: "activity", id: "s.ni.07.a6", activityId: "act.ni.07.6", mode: "independent" },
      { kind: "summary", id: "s.ni.07.summary", summaryCardId: "card.ni.07" },
      {
        kind: "apply_tomorrow",
        id: "s.ni.07.apply",
        task: {
          ar: "دوّن أول مهلة أو رقم متطرّف تسمعه في جلستك القادمة، واسأل عنه سؤالاً واحداً محايداً قبل أن تردّ بموقف.",
          en: "Write down the first deadline or extreme figure you hear in your next session, and ask one neutral question about it before responding with a position.",
        },
        detail: {
          ar: "لا يكفي أن تلاحظه ذهنياً؛ السؤال الذي لم يُقل بصوت مسموع لا يغيّر مسار الجلسة.",
          en: "Noticing it mentally isn't enough; a question that stays unspoken doesn't change the session's course.",
        },
      },
      {
        kind: "next_mission",
        id: "s.ni.07.next",
        teaser: {
          ar: "عرفتَ كيف تسمّي التكتيك. الوحدة القادمة تضعك في مواجهة كاملة: طرف مقابل عدائي يستخدم هذه الأساليب كلها معاً، تحت ضغط زمني حقيقي.",
          en: "You know how to name the tactic. The next unit puts you in a full confrontation: a hostile counterpart using all of these tactics together, under real time pressure.",
        },
      },
    ],
    activities: [
      {
        id: "act.ni.07.1",
        kind: "multiple_choice",
        skillId: "skill.handling-pressure-tactics",
        stage: 3,
        weight: 1,
        context: {
          ar: [
            "تفاوض محامي مصانع الجزيرة للأثاث مع ممثل مؤسسة الوفاء للتوزيع على قيمة إعادة شراء المخزون الراكد بعد إنهاء عقد التوزيع.",
            "يقول ممثل الوفاء: «هذا عرضنا الأخير، ونحتاج توقيعكم قبل الساعة الخامسة اليوم، وإلا سنضطر للتوقف عن التفاوض نهائياً.»",
          ],
          en: [
            "Al-Jazira Furniture Factories's lawyer is negotiating with Al-Wafa Distribution's representative over the buyback value of unsold inventory after terminating the distribution agreement.",
            "Al-Wafa's representative says: 'This is our final offer, and we need your signature by 5 p.m. today, or we'll have to stop negotiating altogether.'",
          ],
        },
        prompt: {
          ar: "أيّ أسلوب ضغط تستخدمه هذه الجملة بوضوح؟",
          en: "Which pressure tactic does this sentence clearly use?",
        },
        options: [
          {
            id: "o1",
            label: { ar: "المهلة المصطنعة", en: "Artificial deadline" },
            correct: true,
            rationale: {
              ar: "بالضبط. مهلة ضيّقة («قبل الخامسة اليوم») مقرونة بتهديد بإنهاء التفاوض كلياً إن لم تُلبَّ — نمط كلاسيكي لدفعك لقرار سريع قبل أن تتحقق من واقعية الحاجة إلى هذه السرعة.",
              en: "Exactly. A tight window ('by 5 p.m. today') paired with a threat to end negotiations entirely if not met — a classic pattern designed to push you into a fast decision before you check whether that urgency is real.",
            },
          },
          {
            id: "o2",
            label: { ar: "التثبيت المتطرّف", en: "Extreme anchor" },
            rationale: {
              ar: "لا يوجد رقم متطرّف هنا؛ المشكلة في الوقت لا في المبلغ. هذا الأسلوب يظهر حين يُطرح رقم افتتاحي بعيد عن المعقول لإزاحة مرجعيتك، وهو غير موجود في هذه الجملة.",
              en: "There's no extreme figure here; the issue is time, not amount. This tactic shows up when an opening number far from reasonable is proposed to shift your reference point — it isn't present in this sentence.",
            },
          },
          {
            id: "o3",
            label: { ar: "الشرطي الطيب والشرطي الشرير", en: "Good cop, bad cop" },
            rationale: {
              ar: "يحتاج هذا الأسلوب متحدّثين بأدوار متبادلة، أحدهما متشدّد والآخر متفهّم. الجملة هنا من متحدّث واحد فقط.",
              en: "This tactic needs two speakers in alternating roles, one hard-line and one sympathetic. This sentence comes from a single speaker only.",
            },
          },
          {
            id: "o4",
            label: { ar: "الانسحاب", en: "The walkout" },
            rationale: {
              ar: "الانسحاب الفعلي يعني مغادرة الطاولة أو إنهاء الجلسة فوراً. هنا لا يزال هناك عرض مطروح ومهلة للرد، لا انسحاب واقع.",
              en: "An actual walkout means leaving the table or ending the session outright. Here an offer is still on the table with a deadline to respond — no walkout has happened.",
            },
          },
        ],
      },
      {
        id: "act.ni.07.2",
        kind: "matching",
        skillId: "skill.handling-pressure-tactics",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "طابق كل أسلوب ضغط مع الجملة المحايدة التي تحيّده دون تصعيد.",
          en: "Match each pressure tactic with the neutral phrase that defuses it without escalating.",
        },
        accessibleAlternative: {
          ar: "اختر الجملة المطابقة من قائمة منسدلة بجانب كل أسلوب بدل السحب.",
          en: "Pick the matching phrase from a dropdown beside each tactic instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "مهلة مصطنعة", en: "Artificial deadline" },
            right: {
              ar: "«هل هذه المهلة مرتبطة بإجراء فعلي، أم يمكننا مناقشتها؟»",
              en: "'Is this deadline tied to something real, or can we discuss it?'",
            },
            rationale: {
              ar: "يختبر واقعية المهلة دون اتهام صاحبها بالخداع.",
              en: "Tests the deadline's reality without accusing the other side of bluffing.",
            },
          },
          {
            id: "p2",
            left: { ar: "تثبيت متطرّف", en: "Extreme anchor" },
            right: {
              ar: "«لنستند إلى معيار موضوعي، مثل القيمة الدفترية الفعلية للمخزون وتاريخ توريده.»",
              en: "'Let's ground this in an objective standard — the inventory's actual book value and its delivery date.'",
            },
            rationale: {
              ar: "يعيد الحوار إلى وقائع يمكن التحقق منها، بدل الأرقام المرتجلة.",
              en: "Redirects the conversation to verifiable facts instead of arbitrary numbers.",
            },
          },
          {
            id: "p3",
            left: { ar: "الشرطي الطيب والشرطي الشرير", en: "Good cop, bad cop" },
            right: {
              ar: "«أودّ أن أفهم موقف موكّلكم من المسألة نفسها، بصرف النظر عمّن يتحدّث.»",
              en: "'I'd like to understand your client's position on the substance, regardless of who's speaking.'",
            },
            rationale: {
              ar: "يوجّه الحوار إلى المضمون بدل الانجذاب لأحد الدورين.",
              en: "Directs the conversation to substance instead of getting drawn into either role.",
            },
          },
          {
            id: "p4",
            left: { ar: "تهديد بالانسحاب", en: "Walkout threat" },
            right: {
              ar: "«أحترم قراركم إن أردتم إنهاء الجلسة، لكن يبقى بابنا مفتوحاً للتواصل لاحقاً.»",
              en: "'I respect your decision if you'd like to end the session, but our door stays open to talk later.'",
            },
            rationale: {
              ar: "لا يلاحق الطرف المنسحب متوسلاً، ولا يستفزّه؛ يترك المبادرة له بهدوء.",
              en: "Doesn't chase the departing party pleading, and doesn't provoke them; leaves the initiative to them calmly.",
            },
          },
        ],
      },
      {
        id: "act.ni.07.3",
        kind: "branching_decision",
        skillId: "skill.handling-pressure-tactics",
        secondarySkillIds: ["skill.negotiation"],
        stage: 3,
        weight: 2,
        prompt: {
          ar: "أدِر الحوار إلى نهايته. اختر في كل لحظة ما ستقوله فعلاً.",
          en: "Run the dialogue to its end. At each moment choose what you would actually say.",
        },
        hint: {
          ar: "في كل لحظة اسأل: هل هذا استسلام، تصعيد، أم تسمية هادئة للتكتيك؟",
          en: "At each moment ask: is this capitulation, escalation, or a calm naming of the tactic?",
        },
        accessibleAlternative: {
          ar: "الحوار متاح كنصّ متسلسل مع أزرار اختيار، دون أي سحب أو مؤقّت زمني.",
          en: "The dialogue runs as sequential text with choice buttons, with no dragging and no timer.",
        },
        startNodeId: "n1",
        nodes: [
          {
            id: "n1",
            text: {
              ar: "ممثل الوفاء، بعد صمت قصير من المحامي: «الوقت يمرّ يا أستاذ. الساعة الخامسة تقترب، وبعدها لن يكون العرض قائماً. ما قرارك؟»",
              en: "Al-Wafa's representative, after a short silence from the lawyer: 'Time is passing, counsellor. Five o'clock is close, and after that the offer is off the table. What's your decision?'",
            },
            choices: [
              {
                id: "c1a",
                label: {
                  ar: "«أقدّر إلحاحكم، لكنني أحتاج التأكد أولاً: هل هذه المهلة قرار داخلي لديكم، أم مرتبطة بموعد فعلي؟»",
                  en: "'I appreciate the urgency, but I need to check first: is this deadline an internal decision on your side, or tied to something real?'",
                },
                nextNodeId: "n2",
                quality: "strong",
                rationale: {
                  ar: "يسأل دون اتهام، ويفتح الباب لمعرفة حقيقة المهلة قبل أن يتصرف بموجبها.",
                  en: "Asks without accusation, and opens the door to learning the deadline's reality before acting on it.",
                },
              },
              {
                id: "c1b",
                label: {
                  ar: "«حسناً، لنوقّع الآن قبل أن نخسر الفرصة.»",
                  en: "'Fine, let's sign now before we lose the chance.'",
                },
                nextNodeId: "n2",
                quality: "critical_mistake",
                rationale: {
                  ar: "استسلام فوري بلا أي اختبار للمهلة، ويعلّم الطرف الآخر أن هذا التكتيك ناجح معك دائماً.",
                  en: "Immediate capitulation with no testing of the deadline at all, teaching the other side this tactic always works on you.",
                },
              },
              {
                id: "c1c",
                label: {
                  ar: "«هذا أسلوب ضغط رخيص، ولن أقبل أن يُملى عليّ قرار بهذه الطريقة.»",
                  en: "'That's a cheap pressure tactic, and I won't accept being dictated to like this.'",
                },
                nextNodeId: "n2",
                quality: "weak",
                rationale: {
                  ar: "اتهام مباشر يصعّد المواجهة بدل تحييد التكتيك، وقد يُغلق باب المرونة الذي كان يمكن أن ينفتح بسؤال هادئ.",
                  en: "A direct accusation that escalates the confrontation instead of defusing the tactic, and may shut a door that a calm question could have opened.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "يدخل زميل ممثل الوفاء، بنبرة أهدأ: «أنا أتفهّم موقفكم تماماً، وأودّ مساعدتكم. لو وافقتم اليوم، سأقنع فريقنا بتليين بعض الشروط.»",
              en: "A colleague of Al-Wafa's representative steps in, more calmly: 'I completely understand your position, and I'd like to help. If you agree today, I can convince our team to soften some terms.'",
            },
            choices: [
              {
                id: "c2a",
                label: {
                  ar: "«أقدّر ذلك، لكن قراري يعتمد على مضمون الشروط نفسها، لا على من يطرحها أو متى.»",
                  en: "'I appreciate that, but my decision depends on the substance of the terms themselves, not on who proposes them or when.'",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "يوجّه الرد إلى المضمون لا إلى الشخص، فيتجنّب الانجذاب لدور «الشرطي الطيب» ويبقي القرار مبنياً على الوقائع.",
                  en: "Directs the response to substance rather than the person, avoiding being drawn into the 'good cop' role and keeping the decision grounded in facts.",
                },
              },
              {
                id: "c2b",
                label: {
                  ar: "«أنتم فريق متفاهم أكثر من زميلكم، فلنكمل معكم مباشرة.»",
                  en: "'You're a much more reasonable team than your colleague — let's just deal with you directly.'",
                },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "وقع تماماً في فخ الشرطي الطيب: تحالف مع أحد الطرفين ضد زميله، بينما كلاهما يخدم الموقف نفسه ولا يملك أي منهما سلطة إضافية فعلية.",
                  en: "Fell straight into the good-cop trap: allying with one speaker against their colleague, when both serve the exact same position and neither has any extra real authority.",
                },
              },
              {
                id: "c2c",
                label: {
                  ar: "«لن أتعامل إلا مع من قدّم العرض الأصلي، هذا التبديل غير مقبول.»",
                  en: "'I'll only deal with whoever made the original offer — this switch isn't acceptable.'",
                },
                nextNodeId: null,
                quality: "acceptable",
                rationale: {
                  ar: "يتجنّب فخ التحالف، لكنه يرفض بصرامة زائدة قد تُقرأ كعدم مرونة، بدل توجيه الحوار بهدوء نحو المضمون.",
                  en: "Avoids the alliance trap, but refuses with excessive rigidity that may read as inflexibility, instead of calmly redirecting toward substance.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.ni.07.4",
        kind: "best_response",
        skillId: "skill.handling-pressure-tactics",
        secondarySkillIds: ["skill.persuasive-argument"],
        stage: 3,
        weight: 2,
        context: {
          ar: [
            "القيمة الدفترية الموثّقة للمخزون الراكد لدى الوفاء 320,000 درهم إماراتي، بحسب سجلات الجزيرة نفسها.",
            "يفتتح ممثل الوفاء: «موكّلي يطلب 900,000 درهم تعويضاً عن خسارة موقعه الحصري في السوق، ولن يقبل أقل من ذلك.»",
          ],
          en: [
            "The documented book value of Al-Wafa's unsold inventory is 320,000 AED, per Al-Jazira's own records.",
            "Al-Wafa's representative opens: 'My client is asking for 900,000 AED in compensation for the loss of his exclusive market position, and won't accept less.'",
          ],
        },
        prompt: {
          ar: "ما أفضل ردّ فوري على هذا الرقم الافتتاحي المتطرّف؟",
          en: "What is the best immediate response to this extreme opening figure?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«900,000 درهم رقم بعيد جداً عن القيمة الدفترية الموثّقة للمخزون، 320,000 درهم. هل لديكم مستند يحدّد أساس احتساب خسارة الموقع الحصري؟»",
              en: "'900,000 AED is very far from the inventory's documented book value of 320,000 AED. Do you have a document setting out the basis for calculating the loss of exclusive market position?'",
            },
            correct: true,
            rationale: {
              ar: "يربط الردّ بمعيار موضوعي (القيمة الدفترية الموثّقة) ويطلب دليلاً على الادّعاء المقابل، بدل قبول الرقم أو رفضه بلا سبب. هذا ما يمنع الرقم المتطرّف من إزاحة مرجعيتك الذهنية.",
              en: "Ties the response to an objective standard (the documented book value) and asks for evidence behind the counter-claim, instead of accepting or rejecting the number without reason. This is what stops the extreme figure from shifting your mental reference point.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«حسناً، فلنلتقِ في المنتصف تقريباً عند 600,000 درهم.»",
              en: "'Fine, let's meet roughly in the middle, at around 600,000 AED.'",
            },
            rationale: {
              ar: "القبول بـ«المنتصف» بين رقم موثّق ورقم متطرّف يمنح الرقم المتطرّف شرعية لم يكسبها بدليل. هذا هو بالضبط أثر التثبيت الذي يهدف إليه الطرف الآخر.",
              en: "Splitting the difference between a documented figure and an extreme one gives the extreme figure a legitimacy it never earned through evidence. This is exactly the anchoring effect the other side is aiming for.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«هذا عرض غير جدّي إطلاقاً ولا يستحق ردّاً.»",
              en: "'This offer isn't serious at all and doesn't deserve a response.'",
            },
            rationale: {
              ar: "رفض دون سؤال يُغلق الحوار بدل توجيهه، ويفوّت فرصة اختبار ادّعاء «الموقع الحصري» الذي قد يكون له أساس جزئي حقيقي في العقد المنتهي.",
              en: "A dismissal with no question shuts the conversation down instead of steering it, and misses the chance to test the 'exclusive position' claim, which might have a partly genuine basis in the terminated contract.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«سنقبل 700,000 درهم إن وافقتم اليوم فوراً.»",
              en: "'We'll accept 700,000 AED if you agree right now, today.'",
            },
            rationale: {
              ar: "تنازل كبير وفوري دون أي اختبار للرقم الافتتاحي أو طلب دليل — استسلام مبكر يُظهر أن التثبيت المتطرّف نجح.",
              en: "A large, immediate concession with no testing of the opening figure or request for evidence — an early cave that shows the extreme anchor worked.",
            },
          },
        ],
      },
      {
        id: "act.ni.07.5",
        kind: "categorization",
        skillId: "skill.handling-pressure-tactics",
        secondarySkillIds: ["skill.negotiation"],
        stage: 3,
        weight: 2,
        context: {
          ar: [
            "مؤسسة الرواد للمقاولات تطالب شركة تلال الرياض العقارية بتعويض عن تأخير تسليم الدفعة الثالثة من مشروع سكني.",
            "في الجلسة الأولى، يردّ محامي تلال الرياض بعدة عبارات متتالية دون أن يتوقف عند أيٍّ منها طويلاً.",
          ],
          en: [
            "Al-Rowad Contracting is claiming compensation from Tilal Al-Riyadh Real Estate for delayed delivery of the third phase of a residential project.",
            "In the first session, Tilal Al-Riyadh's lawyer replies with several statements in a row, without pausing long on any one of them.",
          ],
        },
        prompt: {
          ar: "صنّف كل عبارة: هل هي تكتيك إجرائي يعطّل الوصول إلى صلب المطالبة، أم اعتراض جوهري حقيقي عليها؟",
          en: "Sort each statement: is it a procedural move that blocks discussion from ever reaching the claim's substance, or a genuine objection to the claim itself?",
        },
        hint: {
          ar: "الاعتراض الإجرائي يمنعك من الوصول إلى الرقم أو الوقائع أصلاً، دون أن ينكرها أو يفنّدها. الاعتراض الجوهري يتعامل مباشرة مع وقائع التأخير أو بنود العقد.",
          en: "A procedural move stops you from ever reaching the figures or the facts, without actually denying or rebutting them. A substantive objection engages directly with the delay's facts or the contract's terms.",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «تكتيك إجرائي» / «اعتراض جوهري» أسفل كل عبارة بدل السحب.",
          en: "Choose \"Procedural move\" / \"Substantive objection\" from buttons under each statement instead of dragging.",
        },
        buckets: [
          { id: "procedural", label: { ar: "تكتيك إجرائي", en: "Procedural move" } },
          { id: "substantive", label: { ar: "اعتراض جوهري", en: "Substantive objection" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "«مطالبتكم سابقة لأوانها؛ مهلة الثلاثين يوماً للإخطار المنصوص عليها في العقد لم تنقضِ بعد، فلا مجال لمناقشة أي رقم الآن.»",
              en: "\"Your claim is premature; the contract's thirty-day notice period hasn't expired yet, so there's no room to discuss any figure now.\"",
            },
            bucketId: "procedural",
            rationale: {
              ar: "لا ينكر التأخير ولا يناقش مدته؛ يستخدم مسألة توقيت الإخطار لإغلاق النقاش قبل أن يبدأ. حتى إن كانت المهلة حقيقية، الرد الصحيح اختبارها لا القبول بأنها تُسقط المطالبة كلها.",
              en: "It doesn't deny the delay or discuss its length; it uses a notice-timing point to shut the conversation down before it starts. Even if the notice period is real, the right response is to test it, not accept that it disposes of the whole claim.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "«أثبتوا أولاً أن التأخير لم ينتج عن ظرف استثنائي بموجب المادة 12، وبعدها نتحدث عن أي رقم.»",
              en: "\"First prove the delay wasn't caused by an exceptional circumstance under Article 12, and then we can talk about any figure.\"",
            },
            bucketId: "procedural",
            rationale: {
              ar: "ينقل عبء الإثبات إلى الطرف الآخر قبل أي نقاش في الوقائع أو الرقم، وهو ما يؤجّل الجوهر لا يردّ عليه. تسميته هنا كتكتيك تفتح الباب لسؤال: من يحمل هذا العبء فعلاً بموجب العقد؟",
              en: "It shifts the burden of proof onto the other side before any discussion of facts or figures — deferring the substance rather than answering it. Naming it here as a move opens the door to a real question: who actually carries that burden under the contract?",
            },
          },
          {
            id: "c3",
            label: {
              ar: "«التأخير المسجَّل في محضر الموقع الموقّع من الطرفين 45 يوماً فقط، لا 90 يوماً كما ورد في مطالبتكم.»",
              en: "\"The delay recorded in the site log signed by both parties is only 45 days, not the 90 days stated in your claim.\"",
            },
            bucketId: "substantive",
            rationale: {
              ar: "يواجه الرقم مباشرة بمستند محدد يمكن التحقق منه؛ هذا نزاع حقيقي على الوقائع، لا محاولة لتفادي مناقشتها.",
              en: "It confronts the figure head-on with a specific, verifiable document; this is a genuine dispute over the facts, not an attempt to avoid discussing them.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "«العقد يستثني صراحة أي تأخير ناتج عن تأخر توريد حديد التسليح من المورّد الذي اخترتموه أنتم.»",
              en: "\"The contract explicitly excludes any delay caused by late delivery of rebar from the supplier you yourselves selected.\"",
            },
            bucketId: "substantive",
            rationale: {
              ar: "يستند إلى بند تعاقدي محدد ويربطه بسبب فعلي للتأخير؛ دفاع على أساس الموضوع، لا عائق أمام الوصول إليه.",
              en: "It relies on a specific contractual clause and ties it to an actual cause of the delay; a defense on the merits, not a barrier to reaching them.",
            },
          },
        ],
      },
      {
        id: "act.ni.07.6",
        kind: "reflection",
        skillId: "skill.handling-pressure-tactics",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع تفاوضاً شعرتَ فيه بضغط واضح. أيّ من الأساليب الأربعة (مهلة، تثبيت، شرطي طيب وشرير، انسحاب) كان الأقرب لما حدث؟",
          en: "Recall a negotiation where you felt clear pressure. Which of the four tactics — deadline, anchor, good-cop-bad-cop, walkout — was closest to what happened?",
        },
        followUp: {
          ar: "لو سمّيته وقتها بصوت هادئ، كيف كان يمكن أن يتغيّر مسار الجلسة؟",
          en: "If you had named it calmly in the moment, how might the session's course have changed?",
        },
      },
    ],
    summaryCard: {
      id: "card.ni.07",
      title: {
        ar: "أربعة أساليب، وردّ واحد هادئ",
        en: "Four Tactics, One Calm Response",
      },
      whatYouLearned: {
        ar: [
          "المهلة المصطنعة، والتثبيت المتطرّف، والشرطي الطيب والشرير، والانسحاب — أربعة أساليب متكرّرة لا حوادث عابرة.",
          "التسمية الهادئة تستعيد السيطرة على وتيرة الجلسة دون اتهام الطرف الآخر.",
          "الرد الصحيح واحد دائماً: لا استسلام فوري، ولا تصعيد مقابل.",
          "التحقق من واقعية المهلة أو التهديد يسبق أي تصرّف بموجبه.",
        ],
        en: [
          "The artificial deadline, the extreme anchor, good-cop-bad-cop, and the walkout — four recurring tactics, not random incidents.",
          "Calm naming takes back control of the session's pace without accusing the other side.",
          "The right response is always the same: no immediate capitulation, and no matching escalation.",
          "Verifying whether a deadline or threat is real comes before acting on it.",
        ],
      },
      framework: {
        name: {
          ar: "مفتاح الضغط: لاحظ · تحقّق · سمِّ · أعد التوجيه",
          en: "The Pressure Key: Notice · Verify · Name · Redirect",
        },
        steps: [
          {
            ar: "لاحظ أسلوب الضغط لحظة ظهوره: مهلة، رقم متطرّف، دور مزدوج، أو انسحاب.",
            en: "Notice the pressure tactic the moment it appears: a deadline, an extreme figure, a dual role, or a walkout.",
          },
          {
            ar: "تحقّق من واقعيته بسؤال هادئ قبل أن تتصرّف بموجبه.",
            en: "Verify whether it's real with a calm question before acting on it.",
          },
          {
            ar: "سمِّه بلغة محايدة دون اتهام الطرف الآخر بسوء نية.",
            en: "Name it in neutral language without accusing the other side of bad faith.",
          },
          {
            ar: "أعد توجيه الحوار إلى المضمون بدل مجاراة النبرة.",
            en: "Redirect the conversation to substance instead of matching the tone.",
          },
        ],
      },
      rememberThis: {
        ar: "من يشعر بالضغط ولا يسمّيه يستسلم له دون أن يدري.",
        en: "Whoever feels the pressure and never names it surrenders to it without realizing.",
      },
      useItTomorrow: {
        ar: "في أي تفاوض هذا الأسبوع، اختبر أول مهلة تُطرح عليك بسؤال واحد قبل أن تردّ بموقف.",
        en: "In any negotiation this week, test the first deadline you're given with one question before you respond with a position.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.tools-of-argument", "src.how-to-argue-and-win", "src.your-brain-at-work"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 08 — Negotiating with a hostile counterpart under real pressure
  // =========================================================================
  {
    id: "unit.ni.08",
    chapterId: "ch.ni.under-pressure",
    order: 2,
    title: {
      ar: "التفاوض أمام طرف عدائي تحت ضغط حقيقي",
      en: "Negotiating With a Hostile Counterpart Under Real Pressure",
    },
    subtitle: {
      ar: "حين يجتمع الضغط بتفويض محدود، لا يكفي أن تعرف الأسلوبين نظرياً.",
      en: "When pressure meets a limited mandate, knowing both in theory is not enough.",
    },
    primarySkillId: "skill.handling-pressure-tactics",
    skillIds: ["skill.handling-pressure-tactics", "skill.staying-within-mandate", "skill.negotiation"],
    stage: 4,
    estimatedMinutes: 12,
    steps: [
      {
        kind: "hook",
        id: "s.ni.08.hook",
        text: {
          ar: "التمرين القادم لا يسألك سؤالاً واحداً. إنه يضعك أمام شخص أسلوبه حقيقي وضاغط، يريد توقيعك الآن.",
          en: "The next exercise doesn't ask you one question. It puts you across from someone whose style is real and pressuring, who wants your signature now.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.ni.08.why",
        text: {
          ar: "معرفة أساليب الضغط نظرياً شيء، ومواجهتها فعلياً وأنت تحمل تفويضاً محدوداً وموكّلاً ينتظر شيء آخر. هذه الوحدة تجمع المهارتين في موقف واحد، كما يحدث في الواقع.",
          en: "Knowing pressure tactics in theory is one thing; facing them live while carrying a limited mandate and a waiting client is another. This unit brings both skills together in one situation, the way it actually happens.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.ni.08.goals",
        goals: {
          ar: [
            "أن تسمّي أسلوب الضغط وتختبره بأسئلة هادئة في حوار حي، لا في تمرين نظري.",
            "أن تبقى ضمن تفويضك الفعلي حتى حين يُطلب منك التوقيع فوراً.",
            "أن تُغلق الجلسة بنتيجة ضمن صلاحيتك، أو بخطوة تالية ذات مصداقية بدل الاستسلام للمهلة.",
          ],
          en: [
            "Name and test a pressure tactic with calm questions in a live exchange, not a theoretical exercise.",
            "Stay inside your actual mandate even when pressed to sign immediately.",
            "Close the session with a result inside your authority, or a credible next step, instead of surrendering to the deadline.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.ni.08.lesson",
        title: {
          ar: "حين يجتمع الضغط بالتفويض المحدود",
          en: "When pressure meets a limited mandate",
        },
        body: {
          ar: [
            "في الواقع، لا يظهر أسلوب الضغط وحده. يظهر مع تفويض محدود، وموكّل ينتظر، وطرف مقابل يعرف أنك محامٍ في بداية مسيرته.",
            "الطرف المقابل الماهر لا يضغط عليك عشوائياً؛ يضغط بالضبط عند نقطة ضعفك المفترضة: قلة خبرتك، أو خشيتك من خسارة الملف.",
            "الخطأ الأشيع تحت هذا الضغط المزدوج ليس الاستسلام الكامل، بل التوقيع الجزئي: «فقط بالأحرف الأولى، لحجز المساحة» — وهو التزام فعلي رغم صغر شكله.",
            "الرد الصحيح يبدأ بفصل الأمرين: اسأل عن حقيقة المهلة أولاً، ثم اذكر حدود تفويضك بثقة دون اعتذار مفرط عنها.",
            "لا تخلط بين تسمية التكتيك واتهام الطرف الآخر. «أفهم أن هناك ضغط وقت، فلنرَ ما هو ممكن فعلاً اليوم» يفتح الباب؛ «أنت تخدعني» يُغلقه.",
            "اطلب دائماً بديلاً ملموساً عن التوقيع الفوري: مقترح مكتوب، أو موعد محدد للعودة برد.",
            "واحمِ نبرتك المهنية حتى وأنت ترفض؛ العلاقة مع هذا الطرف تستمر غالباً لسنوات بعد هذا الملف بعينه.",
          ],
          en: [
            "In reality, a pressure tactic never shows up alone. It arrives with a limited mandate, a waiting client, and a counterpart who knows you're early in your career.",
            "A skilled counterpart doesn't press you randomly; they press exactly where they assume your weak point is — your inexperience, or your fear of losing the file.",
            "The most common mistake under this double pressure isn't full capitulation. It's the partial signature: 'just initial it, to hold the space' — a real commitment despite its small appearance.",
            "The right response starts by separating the two things: ask about the deadline's reality first, then state your mandate's limits with confidence, without over-apologising for them.",
            "Don't confuse naming the tactic with accusing the other side. 'I understand there's time pressure, let's see what's actually possible today' opens the door; 'you're deceiving me' closes it.",
            "Always ask for a concrete alternative to signing now: a written proposal, or a fixed date to come back with an answer.",
            "And protect your professional tone even while declining; the relationship with this counterpart usually continues for years after this one file.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.ni.08.visual",
        title: {
          ar: "من الاستسلام إلى الإغلاق ضمن التفويض",
          en: "From Capitulation to a Close Inside Mandate",
        },
        variant: "scale",
        items: [
          {
            label: { ar: "الاستسلام الفوري", en: "Immediate capitulation" },
            detail: {
              ar: "يوقّع أو يلتزم دون أي اختبار للتكتيك أو التفويض.",
              en: "Signs or commits with no testing of the tactic or the mandate.",
            },
            tone: "negative",
          },
          {
            label: { ar: "التجاهل الصامت", en: "Silent avoidance" },
            detail: {
              ar: "لا يردّ ولا يسأل؛ يترك الضغط يتراكم دون معالجة.",
              en: "Neither responds nor asks; lets the pressure build unaddressed.",
            },
            tone: "negative",
          },
          {
            label: { ar: "التسمية دون تفويض واضح", en: "Naming without a clear mandate statement" },
            detail: {
              ar: "يسمّي التكتيك لكنه ينسى أن يذكر حدود صلاحيته بوضوح.",
              en: "Names the tactic but forgets to state the limits of his authority clearly.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "التسمية + التفويض + البديل", en: "Naming + mandate + alternative" },
            detail: {
              ar: "يسمّي بهدوء، يذكر تفويضه بثقة، ويقترح بديلاً ملموساً عن التوقيع الفوري.",
              en: "Names calmly, states his mandate with confidence, and proposes a concrete alternative to signing immediately.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.ni.08.worked",
        strong: {
          label: {
            ar: "محامية تفصل بين اختبار الضغط والتمسّك بالتفويض",
            en: "A lawyer who separates testing the pressure from holding her mandate",
          },
          text: {
            ar: [
              "ممثل الشريك الآخر في تأسيس شركة خدمات تقنية جديدة: «إما 60% لصالح موكّلي اليوم، أو ننسحب من التأسيس بالكامل.»",
              "«أفهم أنكم تريدون حسم النسبة اليوم، لكن تفويضي من موكّلي يقف عند 45% كحدّ أقصى لصالحكم. هل ننسحب فعلاً، أم أن هناك مساحة نبني عليها؟»",
            ],
            en: [
              "The other partner's representative, forming a new tech-services company: 'Either 60% for my client today, or we walk away from forming the company entirely.'",
              "'I understand you want the split settled today, but my mandate from my client caps your side at 45% maximum. Are you genuinely walking away, or is there room to build on?'",
            ],
          },
          why: {
            ar: "اختبرت جدّية الانسحاب بسؤال مباشر غير اتهامي، وذكرت حدود تفويضها بثقة دون اعتذار، ففتحت الباب لمعرفة ما إذا كان التهديد حقيقياً أم تكتيكاً.",
            en: "She tested how serious the walkout was with a direct, non-accusatory question, and stated her mandate's limits with confidence and no apology, opening the door to learning whether the threat was real or tactical.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يلتزم فوق تفويضه هرباً من المواجهة",
            en: "A lawyer who commits above his mandate to avoid confrontation",
          },
          text: {
            ar: ["«حسناً، فلنقل 55% مبدئياً، وأنا متأكد أن موكّلي سيوافق لاحقاً.»"],
            en: ["'Fine, let's say 55% in principle — I'm sure my client will agree later.'"],
          },
          why: {
            ar: "التزم برقم يتجاوز تفويضه (45%) بناءً على تخمين لا معرفة، فقط لإنهاء التوتّر. إن رفض الموكّل لاحقاً، يبدو المحامي إما قد وعد بما لا يملك أو تراجع أمام الطرف الآخر.",
            en: "He committed to a figure beyond his mandate (45%) based on a guess, just to end the tension. If the client later refuses, he looks either to have promised what he couldn't deliver, or to have backed down in front of the other side.",
          },
        },
      },
      { kind: "activity", id: "s.ni.08.a1", activityId: "act.ni.08.1", mode: "quick" },
      { kind: "activity", id: "s.ni.08.a2", activityId: "act.ni.08.2", mode: "guided" },
      { kind: "activity", id: "s.ni.08.a3", activityId: "act.ni.08.3", mode: "independent" },
      { kind: "simulation", id: "s.ni.08.sim", scenarioId: "scn.negotiation-hostile-counterpart" },
      { kind: "activity", id: "s.ni.08.a4", activityId: "act.ni.08.4", mode: "independent" },
      { kind: "activity", id: "s.ni.08.a5", activityId: "act.ni.08.5", mode: "independent" },
      { kind: "summary", id: "s.ni.08.summary", summaryCardId: "card.ni.08" },
      {
        kind: "apply_tomorrow",
        id: "s.ni.08.apply",
        task: {
          ar: "في تفاوضك القادم الذي تتوقع فيه ضغطاً، اكتب مسبقاً الجملة التي ستستعملها لاختبار أول مهلة، والجملة التي تذكر تفويضك.",
          en: "Before your next negotiation where you expect pressure, write in advance the line you'll use to test the first deadline, and the line stating your mandate.",
        },
        detail: {
          ar: "احملهما مكتوبتين إلى الجلسة؛ الجملة المكتوبة مسبقاً تصمد تحت الضغط أكثر من الجملة المرتجلة.",
          en: "Carry both written into the session; a line prepared in advance survives pressure better than an improvised one.",
        },
      },
      {
        kind: "next_mission",
        id: "s.ni.08.next",
        teaser: {
          ar: "واجهتَ الضغط وحافظتَ على تفويضك. الوحدة القادمة تنتقل إلى اللحظة الأخيرة: كيف تُغلق التفاوض بالتزام واضح بدل «سنتواصل».",
          en: "You faced the pressure and held your mandate. The next unit moves to the final moment: closing the negotiation with a clear commitment instead of 'we'll be in touch.'",
        },
      },
    ],
    activities: [
      {
        id: "act.ni.08.1",
        kind: "multiple_select",
        skillId: "skill.handling-pressure-tactics",
        secondarySkillIds: ["skill.staying-within-mandate"],
        stage: 4,
        weight: 2,
        context: {
          ar: [
            "تحضيراً لمفاوضة تجديد عقد إيجار عيادات النور الطبية، تعلم أن ممثل المالك معروف بأسلوب ضاغط: مهلة ضيقة، ومستأجر بديل مزعوم، وطلب توقيع فوري.",
            "تفويضك من الشريك المسؤول: زيادة حتى 8% وشروط قياسية فقط.",
          ],
          en: [
            "Preparing for the Al-Noor Medical Clinics lease-renewal negotiation, you know the landlord's representative is known for a pressuring style: a tight deadline, a claimed alternative tenant, and a request to sign immediately.",
            "Your mandate from the responsible partner: an increase of up to 8% and standard terms only.",
          ],
        },
        prompt: {
          ar: "أيّ التصرفات التالية سليمة إن جمع الطرف الآخر بين المهلة وطلب توقيع فوق تفويضك؟ اختر كل ما ينطبق.",
          en: "Which of the following are sound moves if the other side combines a deadline with a request to sign beyond your mandate? Select all that apply.",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "اسأل بهدوء عن تفاصيل ملموسة للمستأجر البديل قبل التعامل معه كحقيقة.",
              en: "Calmly ask for concrete details about the alternative tenant before treating it as fact.",
            },
            correct: true,
            rationale: {
              ar: "صحيح. سؤال محدد (اسم الجهة، هل وقّعت خطاب نوايا) يميّز التهديد الحقيقي عن التكتيك دون أي اتهام.",
              en: "Correct. A specific question (the party's name, whether a letter of intent is signed) separates a real threat from a tactic, with no accusation at all.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "وقّع بالأحرف الأولى «فقط لحجز المساحة» لأنها ليست التزاماً كاملاً.",
              en: "Initial the document 'just to hold the space' since it isn't a full commitment.",
            },
            rationale: {
              ar: "خطأ خطير. توقيع الأحرف الأولى التزام فعلي بصرف النظر عن حجمه الشكلي، ويتجاوز تفويضك إن كان فوق 8%.",
              en: "A serious mistake. An initialled signature is a real commitment regardless of its small appearance, and exceeds your mandate if it's above 8%.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "اذكر تفويضك (حتى 8%) بوضوح وثقة دون تفصيل ما هو مستعد لتقديمه أعلى من ذلك.",
              en: "State your mandate (up to 8%) clearly and confidently, without detailing what you might offer above it.",
            },
            correct: true,
            rationale: {
              ar: "صحيح. الوضوح بلا اعتذار يحمي مصداقيتك، وعدم الإفصاح عن أي مرونة إضافية يحمي موقفك التفاوضي.",
              en: "Correct. Clarity without apology protects your credibility, and not disclosing any extra flexibility protects your negotiating position.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "اقترح بديلاً ملموساً كمقترح مكتوب يُرفع لاحقاً بدل التوقيع الفوري.",
              en: "Propose a concrete alternative — a written proposal submitted later — instead of signing immediately.",
            },
            correct: true,
            rationale: {
              ar: "صحيح. البديل الملموس يفقد المهلة المصطنعة قوتها دون أن ترفض التعاون أصلاً.",
              en: "Correct. A concrete alternative strips the artificial deadline of its force without you refusing to cooperate at all.",
            },
          },
          {
            id: "o5",
            label: {
              ar: "اتّهم الطرف الآخر صراحةً بالمبالغة في ادّعاء المستأجر البديل لإثبات جديتك.",
              en: "Accuse the other side outright of exaggerating the alternative-tenant claim, to show you're serious.",
            },
            rationale: {
              ar: "خطأ. الاتهام المباشر يُغلق باب المرونة فوراً ويهدّد علاقة مستقبلية معروفة الاستمرار في السوق.",
              en: "A mistake. A direct accusation shuts down flexibility immediately and threatens a future relationship known to continue in the market.",
            },
          },
        ],
      },
      {
        id: "act.ni.08.2",
        kind: "ordering",
        skillId: "skill.handling-pressure-tactics",
        secondarySkillIds: ["skill.staying-within-mandate", "skill.negotiation"],
        stage: 4,
        weight: 2,
        prompt: {
          ar: "رتّب التحركات الخمسة بالترتيب الذي يجعل كل واحدة تمهّد للتي بعدها أمام طرف ضاغط.",
          en: "Order the five moves so each one prepares the way for the next, when facing a pressuring counterpart.",
        },
        hint: {
          ar: "ابدأ بما يفصل الحقيقة عن التكتيك، وانتهِ بما يمنعك من مغادرة الغرفة دون شيء ملموس.",
          en: "Start with what separates fact from tactic; end with what stops you leaving the room with nothing concrete.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٥) من قائمة منسدلة بجانب كل تحرّك بدل السحب.",
          en: "Pick the position number (1 to 5) from a dropdown beside each move instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "اختبر واقعية المهلة والادّعاء المرافق لها بسؤال محدد وهادئ.",
              en: "Test whether the deadline and its accompanying claim are real, with a calm, specific question.",
            },
            rationale: {
              ar: "أولاً، لأن كل ما يُبنى بعده يعتمد على معرفة ما إذا كنت أمام حقيقة أم تكتيك.",
              en: "First, because everything that follows depends on knowing whether you're facing fact or tactic.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "اسأل سؤالاً مفتوحاً عن أولوية الطرف الآخر الفعلية خلف موقفه.",
              en: "Ask an open question about the other side's real priority behind their position.",
            },
            rationale: {
              ar: "بعد اختبار المهلة، هذا ما يكشف مساحة تفاوض حقيقية لم تكن ظاهرة في الموقف المعلن.",
              en: "After testing the deadline, this is what reveals real negotiating room not visible in the stated position.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "اذكر حدود تفويضك بثقة دون الإفصاح عمّا هو مستعد لتقديمه أعلى منه.",
              en: "State the limits of your mandate with confidence, without disclosing what you might offer above it.",
            },
            rationale: {
              ar: "يأتي هنا لأنك الآن تفهم الموقف بما يكفي لتضع تفويضك في سياقه، لا كردّ فعل مبكر.",
              en: "It comes here because you now understand the position well enough to place your mandate in context, not as an early reflex.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "اقترح بديلاً ملموساً عن الالتزام الفوري: مقترح مكتوب أو موعد محدد.",
              en: "Propose a concrete alternative to committing immediately: a written proposal or a fixed date.",
            },
            rationale: {
              ar: "بعد ذكر التفويض، البديل هو ما يفرغ المهلة من قوتها دون أن يبدو رفضاً للتعاون.",
              en: "After stating the mandate, the alternative is what drains the deadline of its force without looking like a refusal to cooperate.",
            },
          },
          {
            id: "i5",
            label: {
              ar: "أغلق ضمن تفويضك أو بخطوة تالية محددة بتاريخ ومسؤول.",
              en: "Close inside your mandate, or with a specific next step with a date and an owner.",
            },
            rationale: {
              ar: "أخيراً، لأن الجلسة التي تنتهي دون رقم أو موعد تفقد كل الزخم الذي بنيته في الخطوات السابقة.",
              en: "Last, because a session that ends with no number and no date loses all the momentum built in the earlier steps.",
            },
          },
        ],
      },
      {
        id: "act.ni.08.3",
        kind: "short_written",
        skillId: "skill.handling-pressure-tactics",
        secondarySkillIds: ["skill.staying-within-mandate"],
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.negotiation-written.v1",
        weight: 3,
        minChars: 200,
        context: {
          ar: [
            "قبل دخولك مفاوضة تجديد عقد عيادات النور مع وليد شهاب، تريد تحضير ثلاث جمل جاهزة تحسباً لأسلوبه الضاغط المعروف.",
          ],
          en: [
            "Before entering the Al-Noor lease-renewal negotiation with Waleed Shihab, you want to prepare three ready lines for his known pressuring style.",
          ],
        },
        prompt: {
          ar: "اكتب ثلاث جمل جاهزة (٦٠-٩٠ كلمة إجمالاً) تستعملها في الجلسة: جملة لاختبار مهلته، وجملة لذكر تفويضك، وجملة تقترح بديلاً عن التوقيع الفوري.",
          en: "Write three ready lines (60-90 words total) for use in the session: one to test his deadline, one to state your mandate, and one proposing an alternative to signing immediately.",
        },
        modelAnswer: {
          ar: [
            "«أفهم أن هناك ضغط وقت من جانبكم، لكن هل مهلة اليوم مرتبطة فعلاً باجتماع المجلس غداً، أم يمكننا مناقشتها؟»",
            "«تفويضي من الشريك المسؤول يقف عند زيادة 8% وشروط قياسية؛ أي رقم أعلى يحتاج مني عودة إليه.»",
            "«بدل التوقيع الآن، هل يمكن أن أرفع لكم مقترحاً مكتوباً اليوم يُعرض على مجلسكم غداً؟»",
          ],
          en: [
            "'I understand there's time pressure on your side, but is today's deadline really tied to tomorrow's board meeting, or can we discuss it?'",
            "'My mandate from the responsible partner caps this at an 8% increase and standard terms; any higher figure needs me to check back with him.'",
            "'Instead of signing now, could I put forward a written proposal today for your board to see tomorrow?'",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«أفهم إلحاحكم، ولنحاول إيجاد حل يرضي الجميع اليوم إن أمكن.»",
              "«بخصوص النسبة، سأرى ما يمكنني فعله معكم.»",
            ],
            en: [
              "'I understand your urgency, and let's try to find a solution that satisfies everyone today if possible.'",
              "'On the percentage, I'll see what I can do with you.'",
            ],
          },
          whatIsWrong: {
            ar: "لا اختبار للمهلة، ولا ذكر لتفويض محدد، ولا بديل ملموس. «سأرى ما يمكنني فعله» تفتح باباً لتفسير الطرف الآخر بأن كل شيء قابل للتفاوض فوق 8%، بينما هذا الرقم خط تفويضك الفعلي.",
            en: "No testing of the deadline, no statement of a specific mandate, and no concrete alternative. 'I'll see what I can do' opens the door for the other side to read everything above 8% as negotiable, when that figure is the actual limit of your authority.",
          },
        },
      },
      {
        id: "act.ni.08.4",
        kind: "branching_decision",
        skillId: "skill.handling-pressure-tactics",
        secondarySkillIds: ["skill.negotiation", "skill.staying-within-mandate"],
        stage: 4,
        weight: 2,
        context: {
          ar: [
            "بعد خمسة أسابيع من التفاوض، اتفق مصنع الخليج للألمنيوم وشركة مرافئ الشرق للمقاولات كتابياً على تسوية مطالبة دفعات متأخرة بمبلغ 480,000 ريال سعودي.",
            "قبل يوم واحد من موعد التوقيع، يتصل ممثل مرافئ الشرق.",
          ],
          en: [
            "After five weeks of negotiation, Al-Khaleej Aluminum Factory and Marafi Al-Sharq Contracting agreed in writing to settle an overdue-payments claim for 480,000 SAR.",
            "One day before the signing date, Marafi Al-Sharq's representative calls.",
          ],
        },
        prompt: {
          ar: "أدِر الحوار إلى نهايته. اختر في كل لحظة ما ستقوله فعلاً حين يحاول الطرف الآخر تعديل اتفاق سابق في اللحظة الأخيرة.",
          en: "Run the dialogue to its end. At each moment choose what you would actually say when the other side tries to revise a prior agreement at the last minute.",
        },
        hint: {
          ar: "اسأل في كل لحظة: هل هناك معلومة جديدة فعلية، أم أن الضغط مبني فقط على الوقت المنقضي والموعد النهائي؟",
          en: "At each moment ask: is there an actual new fact here, or is the pressure built only on elapsed time and a looming deadline?",
        },
        accessibleAlternative: {
          ar: "الحوار متاح كنصّ متسلسل مع أزرار اختيار، دون أي سحب أو مؤقّت زمني.",
          en: "The dialogue runs as sequential text with choice buttons, with no dragging and no timer.",
        },
        startNodeId: "n1",
        nodes: [
          {
            id: "n1",
            text: {
              ar: "«بعد مراجعة داخلية أخيرة، تبيّن أن جزءاً من الفواتير يشمل أعمالاً غير موثّقة بالكامل، لذلك لا يمكننا الالتزام بالمبلغ المتفق عليه الأسبوع الماضي — نقترح خفضه إلى 70% منه. علماً أننا أمضينا خمسة أسابيع على هذا الملف، ومجلس الإدارة يجتمع غداً صباحاً لإقفاله نهائياً.»",
              en: "\"After a final internal review, it turns out part of the invoices covers work that isn't fully documented, so we can't commit to the amount agreed last week — we're proposing to cut it to 70% of it. Bear in mind we've spent five weeks on this file, and the board meets tomorrow morning to close it once and for all.\"",
            },
            choices: [
              {
                id: "c1a",
                label: {
                  ar: "«أودّ الاطلاع تحديداً على الأعمال التي تعتبرونها غير موثّقة. لم يتغيّر شيء في السجلات منذ توقيعنا على المبلغ الأسبوع الماضي — فما الجديد فعلياً؟»",
                  en: "'I'd like to see specifically which work you consider undocumented. Nothing in the records has changed since we agreed on the amount last week — so what has actually changed?'",
                },
                nextNodeId: "n2",
                quality: "strong",
                rationale: {
                  ar: "يختبر مضمون «المعلومة الجديدة» المزعومة بسؤال محدد، دون أن يستسلم للرقم الجديد أو يرفضه بلا سبب. لا شيء يبرر التراجع عن اتفاق موقّع سوى وقائع فعلية جديدة.",
                  en: "Tests the substance of the claimed 'new information' with a specific question, without either caving to the new figure or rejecting it for no reason. Nothing justifies walking back a signed agreement except genuinely new facts.",
                },
              },
              {
                id: "c1b",
                label: {
                  ar: "«بما أننا قريبون من الإغلاق ولا نريد إضاعة خمسة أسابيع من العمل، فلنقبل الخفض إلى 70% وننهي الملف اليوم.»",
                  en: "'Since we're close to closing and don't want to waste five weeks of work, let's accept the cut to 70% and finish the file today.'",
                },
                nextNodeId: "n2",
                quality: "critical_mistake",
                rationale: {
                  ar: "استسلام مبني كلياً على الوقت المنقضي والموعد النهائي، دون أي تحقق من صحة «المراجعة الداخلية». يعلّم الطرف الآخر أن هذا الأسلوب ينجح، وسيتكرر في كل ملف قادم.",
                  en: "A capitulation built entirely on elapsed time and the looming deadline, with no verification of the claimed 'internal review.' It teaches the other side this move works, and it will be repeated in every future file.",
                },
              },
              {
                id: "c1c",
                label: {
                  ar: "«هذا تلاعب واضح ولن نناقشه؛ إما التوقيع على المبلغ الأصلي غداً أو نلجأ للقضاء فوراً.»",
                  en: "'That's clearly manipulation and we won't discuss it; either sign the original amount tomorrow or we go straight to court.'",
                },
                nextNodeId: "n2",
                quality: "weak",
                rationale: {
                  ar: "اتهام مباشر يُغلق الباب قبل التحقق من الوقائع، ويحوّل خلافاً قد يكون قابلاً للحل الهادئ إلى مواجهة قضائية فورية، رغم أن هدف الموكّل الفعلي هو تحصيل المبلغ لا خوض دعوى.",
                  en: "A direct accusation that closes the door before the facts are checked, turning a dispute that might be calmly resolved into an immediate courtroom fight, even though the client's actual goal is collecting the money, not litigating.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "بعد صمت قصير، يقول الممثل: «في الواقع، المستندات لم تتغيّر، لكن إدارتنا تفضّل تخفيض المبلغ بسبب ضغوط سيولة لديها هذا الشهر.»",
              en: "After a short silence, the representative says: 'Actually, the documents haven't changed — our management just prefers a lower amount because of cash-flow pressure this month.'",
            },
            choices: [
              {
                id: "c2a",
                label: {
                  ar: "«أفهم ضغط السيولة، لكنه لا يغيّر المبلغ المتفق عليه على أساس وقائع موثّقة. يمكننا أن نبحث جدولة الدفع على دفعتين خلال ستين يوماً، لا خفض القيمة نفسها.»",
                  en: "'I understand the cash-flow pressure, but it doesn't change an amount agreed on documented facts. We can look at spreading payment over two instalments across sixty days — not cutting the amount itself.'",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "يفصل بوضوح بين تفضيل داخلي للطرف الآخر (لا صلة له بصحة المبلغ) وبين وقائع جديدة فعلية (لا توجد)، ويحافظ على قيمة الاتفاق الموقّع بينما يعرض مرونة حقيقية في التوقيت لا في المبدأ.",
                  en: "Clearly separates the other side's internal preference (irrelevant to the amount's validity) from genuinely new facts (there are none), preserves the value of the signed agreement, while offering real flexibility on timing rather than on principle.",
                },
              },
              {
                id: "c2b",
                label: {
                  ar: "«لا مجال لأي نقاش إضافي؛ التوقيع غداً على المبلغ الكامل أو نعتبر التفاوض منتهياً.»",
                  en: "'There's no room for any further discussion; sign the full amount tomorrow or we consider the negotiation over.'",
                },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "موقف مفهوم بعد كشف أن لا أساس فعلياً للمطلب، لكن رفض أي نقاش إضافي — حتى في التوقيت — يفوّت حلاً بسيطاً كان سيحقق الهدف نفسه (تحصيل كامل المبلغ) دون مواجهة غير ضرورية.",
                  en: "An understandable stance once it's clear the demand has no real basis, but refusing any further discussion — even on timing — misses a simple solution that would achieve the same goal (collecting the full amount) without an unnecessary confrontation.",
                },
              },
              {
                id: "c2c",
                label: {
                  ar: "«حفاظاً على العلاقة، نوافق على خفض بسيط إلى 90% من المبلغ.»",
                  en: "'To preserve the relationship, we'll agree to a modest cut to 90% of the amount.'",
                },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "بعد أن تأكد أن لا معلومة جديدة وراء الطلب، أي تنازل عن المبلغ الموقّع مكافأة مباشرة لتكتيك الوقت المنقضي والموعد النهائي، ويُنذر بتكرار المحاولة نفسها في كل استحقاق قادم.",
                  en: "Once it's confirmed there is no new information behind the request, any concession off the signed amount directly rewards the sunk-time-and-deadline tactic, and signals it will be tried again at every future payment.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.ni.08.5",
        kind: "reflection",
        skillId: "skill.handling-pressure-tactics",
        secondarySkillIds: ["skill.staying-within-mandate"],
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "بعد المحاكاة: في أي لحظة شعرت أقرب لتجاوز تفويضك أو تصديق مهلة وليد دون اختبارها؟",
          en: "After the simulation: at which moment did you feel closest to exceeding your mandate or accepting Waleed's deadline without testing it?",
        },
        followUp: {
          ar: "ماذا ستقول بشكل مختلف في المرة القادمة عند تلك اللحظة تحديداً؟",
          en: "What will you say differently next time, at that exact moment?",
        },
      },
    ],
    summaryCard: {
      id: "card.ni.08",
      title: {
        ar: "حين يجتمع الضغط بحدود التفويض",
        en: "When Pressure Meets the Limits of Your Mandate",
      },
      whatYouLearned: {
        ar: [
          "الضغط الحقيقي لا يظهر وحده؛ يظهر مع تفويض محدود وموكّل ينتظر.",
          "التوقيع الجزئي «فقط لحجز المساحة» التزام فعلي، لا خطوة بريئة.",
          "افصل بين اختبار التكتيك وذكر حدود تفويضك — كلاهما ضروري وبترتيب مختلف.",
          "أغلق بنتيجة ضمن صلاحيتك أو بخطوة تالية محددة، لا باستسلام للمهلة.",
        ],
        en: [
          "Real pressure never shows up alone; it arrives with a limited mandate and a waiting client.",
          "A partial signature 'just to hold the space' is a real commitment, not an innocent step.",
          "Separate testing the tactic from stating your mandate's limits — both are necessary, in that order.",
          "Close with a result inside your authority, or a specific next step — never by surrendering to the deadline.",
        ],
      },
      framework: {
        name: {
          ar: "مفتاح المواجهة: اختبر · اسأل · اذكر · اقترح · أغلق",
          en: "The Confrontation Key: Test · Ask · State · Propose · Close",
        },
        steps: [
          {
            ar: "اختبر واقعية المهلة أو الادّعاء المرافق لها.",
            en: "Test whether the deadline or accompanying claim is real.",
          },
          {
            ar: "اسأل عن أولوية الطرف الآخر الفعلية خلف موقفه.",
            en: "Ask about the other side's real priority behind their position.",
          },
          {
            ar: "اذكر حدود تفويضك بثقة دون تفصيل زائد.",
            en: "State the limits of your mandate with confidence, without over-explaining.",
          },
          {
            ar: "اقترح بديلاً ملموساً عن الالتزام الفوري.",
            en: "Propose a concrete alternative to committing immediately.",
          },
          {
            ar: "أغلق ضمن تفويضك، أو بخطوة تالية بتاريخ ومسؤول.",
            en: "Close inside your mandate, or with a next step that has a date and an owner.",
          },
        ],
      },
      rememberThis: {
        ar: "من يوقّع خارج تفويضه لينهي التوتر يدفع الثمن لاحقاً، لا الآن.",
        en: "Whoever signs beyond their mandate to end the tension pays for it later, not now.",
      },
      useItTomorrow: {
        ar: "قبل أي جلسة ضاغطة قادمة، اكتب سقف تفويضك على ورقة أمامك، واقرأه قبل أن تدخل الغرفة.",
        en: "Before any pressuring session ahead, write your mandate's ceiling on paper in front of you, and read it before you enter the room.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.tools-of-argument", "src.how-to-argue-and-win", "src.governance-raci"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 09 — Closing techniques: securing a clear commitment
  // =========================================================================
  {
    id: "unit.ni.09",
    chapterId: "ch.ni.closing",
    order: 1,
    title: {
      ar: "تقنيات الإغلاق: تأمين التزام واضح",
      en: "Closing Techniques: Securing a Clear Commitment",
    },
    subtitle: {
      ar: "«سنتواصل قريباً» ليست إغلاقاً. إنها دعوة لإعادة فتح كل شيء لاحقاً.",
      en: "\"We'll be in touch soon\" is not a close. It is an invitation to reopen everything later.",
    },
    primarySkillId: "skill.closing-and-documenting",
    skillIds: ["skill.closing-and-documenting", "skill.persuasive-argument"],
    stage: 4,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.ni.09.hook",
        text: {
          ar: "الاتفاق الذي لا ينتهي بالتزام محدد لم ينتهِ فعلاً. إنه معلّق، وسيُعاد فتحه غداً بشروط أسوأ.",
          en: "An agreement that doesn't end in a specific commitment hasn't actually ended. It's suspended, and will reopen tomorrow on worse terms.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.ni.09.why",
        text: {
          ar: "كل ساعة تمرّ بين نهاية الجلسة والتوقيع الفعلي هي ساعة يستطيع فيها الطرف الآخر أن يعيد التفكير، أو يستشير من يقنعه بالتراجع، أو ببساطة ينسى ما اتُّفق عليه شفهياً.",
          en: "Every hour that passes between the end of the session and actual signature is an hour the other side can reconsider, consult someone who talks them out of it, or simply forget what was agreed verbally.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.ni.09.goals",
        goals: {
          ar: [
            "أن تميّز بين «اتفاق مبدئي» يتبخّر و«التزام مغلق» له مالك وتاريخ وفعل قابل للتحقق.",
            "أن تستخدم تقنية التلخيص المسموع الفوري لتثبيت ما اتُّفق عليه قبل مغادرة الطاولة.",
            "أن تحدّد الخطوة التالية والمسؤول عنها بدل إنهاء الجلسة بعبارة عامة.",
          ],
          en: [
            "Tell an 'agreement in principle' that evaporates from a 'closed commitment' with an owner, a date, and a verifiable act.",
            "Use the instant audible-summary technique to lock in what was agreed before leaving the table.",
            "Name the next step and who owns it, instead of ending the session with a vague phrase.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.ni.09.lesson",
        title: {
          ar: "الإغلاق ليس نهاية الجلسة، بل بداية الالتزام",
          en: "Closing is not the end of the session — it's the start of the commitment",
        },
        body: {
          ar: [
            "كثير من المفاوضات «تنتهي» دون أن تُغلق فعلاً. يتصافح الطرفان، ويغادران، ويظن كل منهما أن الآخر سيتحرّك أولاً.",
            "«اتفاق مبدئي» عبارة مريحة تُخفي غياب الالتزام: لا تاريخ، ولا مالك، ولا مستند. أي طرف يستطيع لاحقاً القول إنه لم يكن نهائياً.",
            "الإغلاق الحقيقي له ثلاث علامات: تلخيص يُقرأ بصوت عالٍ قبل المغادرة، وموافقة صريحة على كل بند، وموعد محدد للخطوة التالية.",
            "التلخيص الشفهي وحده لا يكفي إن بقي في ذهنك فقط؛ الذاكرة تتصرّف بانتقائية بعد أيام، وكل طرف «يتذكّر» النسخة الأقرب لمصلحته.",
            "اطلب من الطرف الآخر أن يؤكّد الفهم بصوته، لا أن يومئ برأسه فقط. الإيماء لا يُستشهد به لاحقاً؛ الجملة المسموعة تُستشهد بها.",
            "لا تُنهِ الجلسة بـ«سنرسل المسودة قريباً». اذكر من يرسلها، وبأي تاريخ، وماذا يحدث إن تأخّرت.",
            "الإغلاق القوي يخلق التزاماً نفسياً أيضاً: من يوافق بصوته أمام الطرف الآخر يصعب عليه التراجع لاحقاً دون تفسير.",
          ],
          en: [
            "Many negotiations 'end' without actually closing. Both sides shake hands, leave, and each assumes the other will move first.",
            "'Agreement in principle' is a comfortable phrase that hides the absence of commitment: no date, no owner, no document. Either side can later say it was never final.",
            "A real close has three marks: a summary read aloud before leaving, explicit sign-off on every term, and a fixed date for the next step.",
            "A verbal summary that stays only in your own head isn't enough; memory becomes selective after a few days, and each side 'remembers' the version closer to their own interest.",
            "Ask the other side to confirm their understanding out loud, not just nod. A nod can't be cited later; a spoken sentence can.",
            "Don't end the session with 'we'll send the draft soon.' Say who sends it, by what date, and what happens if it slips.",
            "A strong close also creates psychological commitment: whoever agrees out loud in front of the other side finds it harder to walk back later without explaining why.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.ni.09.visual",
        title: {
          ar: "أربع جمل إغلاق، ضعيفة وقوية",
          en: "Four Closing Lines, Weak and Strong",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "«سنبقى على تواصل»", en: "\"We'll stay in touch\"" },
            detail: { ar: "لا فعل، لا تاريخ، لا مالك.", en: "No act, no date, no owner." },
            tone: "negative",
          },
          {
            label: {
              ar: "«أرسل لنا المسودة النهائية غداً الساعة العاشرة، ونوقّعها خلال يومين من استلامها»",
              en: "\"Send us the final draft tomorrow at 10, and we'll sign within two days of receiving it\"",
            },
            detail: { ar: "فعل، ومالك، وتاريخان.", en: "An act, an owner, and two dates." },
            tone: "positive",
          },
          {
            label: { ar: "«الاتفاق جيد بشكل عام، سنتابع لاحقاً»", en: "\"The deal looks good overall, we'll follow up later\"" },
            detail: {
              ar: "صياغة مريحة تخفي غياب أي التزام فعلي.",
              en: "Comfortable phrasing hiding the absence of any real commitment.",
            },
            tone: "negative",
          },
          {
            label: {
              ar: "«هل نتّفق أن الأستاذ مروان يوقّع نسخته اليوم، وترسلونها لنا موقّعة قبل الجمعة؟»",
              en: "\"Do we agree that Mr Marwan signs his copy today, and sends it to us signed before Friday?\"",
            },
            detail: {
              ar: "سؤال يطلب تأكيداً صريحاً بالصوت لا بالإيماء.",
              en: "A question that asks for explicit confirmation out loud, not a nod.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.ni.09.worked",
        strong: {
          label: {
            ar: "محامية تُغلق الجلسة بتلخيص مسموع",
            en: "A lawyer who closes the session with an audible summary",
          },
          text: {
            ar: [
              "«قبل أن نغادر، اسمحوا لي أن ألخّص ما اتفقنا عليه لتؤكّدوه بصوتكم: قيمة شراء حصة الأستاذ مروان البالغة 40% في شركة السنابل التجارية هي 185,000 دينار، تُسدَّد 100,000 دينار عند التوقيع والباقي خلال 60 يوماً.»",
              "«الأستاذة سلمى ترسل لنا نسخة اتفاقية البيع المعدَّلة غداً الأربعاء الساعة الثانية عشرة ظهراً، ونوقّع من جانبنا خلال يومي عمل من استلامها.»",
              "«هل هذا مطابق لما فهمتموه أنتم أيضاً؟»",
            ],
            en: [
              "'Before we leave, let me summarise what we've agreed so you can confirm it in your own words: the purchase price for Mr Marwan's 40% stake in Al-Sanabil Trading is 185,000 JOD, with 100,000 JOD payable at signing and the balance within 60 days.'",
              "'Ms Salma sends us the amended sale agreement tomorrow, Wednesday, by noon, and we sign on our side within two business days of receiving it.'",
              "'Is that a match for your own understanding as well?'",
            ],
          },
          why: {
            ar: "لخّصت الأرقام والتواريخ بدقة، وطلبت تأكيداً صريحاً بالصوت بدل الاكتفاء بالصمت الذي قد يُقرأ موافقة أو تحفّظاً.",
            en: "She summarised the figures and dates precisely, and asked for explicit confirmation out loud instead of settling for silence that could be read as either agreement or reservation.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يُنهي الجلسة بمصافحة فقط",
            en: "A lawyer who ends the session with just a handshake",
          },
          text: {
            ar: ["«ممتاز، أعتقد أننا اتفقنا على الخطوط العريضة. سأتواصل معكم قريباً لإنهاء التفاصيل.»"],
            en: ["'Excellent, I think we've agreed on the broad lines. I'll be in touch soon to finalise the details.'"],
          },
          why: {
            ar: "«الخطوط العريضة» ليست أرقاماً ولا تواريخ، و«قريباً» ليست موعداً. حين يتصل بعد أسبوع، قد يجد أن الطرف الآخر «يتذكّر» رقماً مختلفاً لقيمة الحصة، ولا مستند يحسم الخلاف.",
            en: "'Broad lines' are neither figures nor dates, and 'soon' is not a deadline. When he calls a week later, he may find the other side 'remembers' a different figure for the stake's value, with no document to settle the dispute.",
          },
        },
      },
      { kind: "activity", id: "s.ni.09.a1", activityId: "act.ni.09.1", mode: "quick" },
      { kind: "activity", id: "s.ni.09.a2", activityId: "act.ni.09.2", mode: "guided" },
      { kind: "activity", id: "s.ni.09.a3", activityId: "act.ni.09.3", mode: "guided" },
      { kind: "activity", id: "s.ni.09.a4", activityId: "act.ni.09.4", mode: "independent" },
      { kind: "activity", id: "s.ni.09.a5", activityId: "act.ni.09.5", mode: "independent" },
      { kind: "summary", id: "s.ni.09.summary", summaryCardId: "card.ni.09" },
      {
        kind: "apply_tomorrow",
        id: "s.ni.09.apply",
        task: {
          ar: "في ختام أي اجتماع أو مكالمة هذا الأسبوع، جرّب جملة واحدة: «هل نتفق أن (الفعل) يتم بحلول (التاريخ)؟» ولاحظ الفرق في وضوح الرد.",
          en: "At the close of any meeting or call this week, try one sentence: 'Do we agree that (the act) happens by (the date)?' and notice the difference in how clear the answer is.",
        },
        detail: {
          ar: "سؤال مباشر يفرض جواباً واضحاً؛ الصمت بعده يعني شيئاً محدداً، لا غموضاً.",
          en: "A direct question forces a clear answer; silence after it means something specific, not vagueness.",
        },
      },
      {
        kind: "next_mission",
        id: "s.ni.09.next",
        teaser: {
          ar: "أغلقتَ الاتفاق بصوت مسموع. الوحدة الأخيرة — وخاتمة المسار — تكتب ذلك الاتفاق كتابةً لا تحتمل خلافاً لاحقاً.",
          en: "You closed the deal out loud. The final unit — and the path's close — puts that agreement in writing that leaves no room for a later dispute.",
        },
      },
    ],
    activities: [
      {
        id: "act.ni.09.1",
        kind: "true_false",
        skillId: "skill.closing-and-documenting",
        stage: 4,
        weight: 1,
        context: {
          ar: [
            "في ختام جلسة تفاوض على بيع حصة الأستاذ مروان فريج البالغة 40% في شركة السنابل التجارية لصالح شريكه نضال أبو غزالة، قال محامي نضال:",
            "«توصّلنا إلى تفاهم عام حول القيمة، وسنُنهي الباقي لاحقاً.»",
          ],
          en: [
            "Closing a negotiation over the sale of Mr Marwan Freij's 40% stake in Al-Sanabil Trading to his partner Nidal Abu Ghazaleh, Nidal's lawyer said:",
            "'We've reached a general understanding on the value, and we'll finish the rest later.'",
          ],
        },
        prompt: {
          ar: "هذه الجملة إغلاق كافٍ، لأنها تحدّد موضوع الاتفاق (القيمة) بوضوح.",
          en: "This sentence is a sufficient close, because it clearly identifies the subject of the agreement (the value).",
        },
        options: [
          {
            id: "o.true",
            label: { ar: "صحيح", en: "True" },
            rationale: {
              ar: "تحديد الموضوع مُغرٍ لكنه غير كافٍ. «تفاهم عام» لا رقم فيه ولا تاريخ ولا توقيع. قيمة الحصة قد ترتفع في ذهن مروان خلال أسبوع، ولا مستند يوقف ذلك.",
              en: "Naming the subject is tempting but insufficient. A 'general understanding' has no figure in it, no date, no signature. The stake's value may rise in Marwan's mind within a week, and no document stops that.",
            },
          },
          {
            id: "o.false",
            label: { ar: "خطأ", en: "False" },
            correct: true,
            rationale: {
              ar: "بالضبط. الإغلاق الكافي يحتاج رقماً محدداً، وتاريخاً للتوقيع، ومن يرسل ماذا. «تفاهم عام» مجرد بداية حوار، لا نهايته.",
              en: "Exactly. A sufficient close needs a specific figure, a signing date, and who sends what. A 'general understanding' is just the start of a conversation, not its end.",
            },
          },
        ],
      },
      {
        id: "act.ni.09.2",
        kind: "ordering",
        skillId: "skill.closing-and-documenting",
        stage: 4,
        weight: 2,
        prompt: {
          ar: "رتّب حركات الإغلاق الخمس بالترتيب الذي يجعل كل حركة تُمهّد للتي بعدها.",
          en: "Put the five closing moves in the order that lets each one prepare the way for the next.",
        },
        hint: {
          ar: "ابدأ بما يثبّت المضمون في الذاكرة، وانتهِ بما يمنع الصمت لاحقاً.",
          en: "Start with what locks the content into memory; end with what stops silence later.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٥) من قائمة منسدلة بجانب كل حركة بدل السحب.",
          en: "Pick the position number (1 to 5) from a dropdown beside each move instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "لخّص الأرقام والشروط الجوهرية التي اتُّفق عليها بصوت مسموع.",
              en: "Summarise the agreed figures and material terms out loud.",
            },
            rationale: {
              ar: "أولاً، لأنه يثبّت المضمون قبل أي شيء آخر.",
              en: "First, because it locks in the content before anything else.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "اطلب من الطرف الآخر تأكيد الفهم بصوته لا بإيماءة.",
              en: "Ask the other side to confirm their understanding out loud, not with a nod.",
            },
            rationale: {
              ar: "يحوّل التلخيص من كلامك وحدك إلى التزام مشترك.",
              en: "Turns the summary from your words alone into a shared commitment.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "سمِّ المستند التالي (مسودة، ملحق، نسخة موقّعة) ومن يُعدّه.",
              en: "Name the next document (draft, addendum, signed copy) and who prepares it.",
            },
            rationale: {
              ar: "يحدّد الفعل الملموس القادم بعد الاتفاق الشفهي.",
              en: "Defines the concrete act that follows the verbal agreement.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "حدّد تاريخ إرسال ذلك المستند وتاريخ التوقيع النهائي.",
              en: "Set the date that document is sent and the final signing date.",
            },
            rationale: {
              ar: "يمنح كل فعل موعداً يمكن محاسبة الطرفين عليه.",
              en: "Gives every act a deadline both sides can be held to.",
            },
          },
          {
            id: "i5",
            label: {
              ar: "اذكر ماذا يحدث إن تأخّر أحد الطرفين عن الموعد.",
              en: "State what happens if either side misses the deadline.",
            },
            rationale: {
              ar: "يجعل التواريخ قابلة للتصديق ويمنع الصمت لاحقاً.",
              en: "Makes the dates credible and prevents silence afterward.",
            },
          },
        ],
      },
      {
        id: "act.ni.09.3",
        kind: "find_mistake",
        skillId: "skill.closing-and-documenting",
        secondarySkillIds: ["skill.negotiation"],
        stage: 4,
        weight: 2,
        context: {
          ar: [
            "بعد جلسة بيع حصة مروان في السنابل التجارية، أنهى محامي نضال الجلسة بأربع جمل:",
            "«اتفقنا بشكل عام على قيمة الحصة بما يقارب الرقم الذي ناقشناه سابقاً.»",
            "«الأستاذة سلمى ستُرسل مسودة اتفاقية البيع حينما تكون جاهزة.»",
            "«أنا واثق أن الأستاذ مروان لن يغيّر رأيه بشأن القيمة.»",
            "«سنتواصل قريباً لإنهاء التفاصيل.»",
          ],
          en: [
            "After the session on selling Marwan's stake in Al-Sanabil Trading, Nidal's lawyer closed with four sentences:",
            "'We've agreed in general on a value close to the figure we discussed earlier.'",
            "'Ms Salma will send the draft sale agreement whenever it's ready.'",
            "'I'm confident Mr Marwan won't change his mind about the value.'",
            "'We'll be in touch soon to finalise the details.'",
          ],
        },
        prompt: {
          ar: "الجمل الأربع كلها ضعيفة. أي عيب سيكلّفك أكثر خلال الأسبوعين التاليين؟",
          en: "All four sentences are weak. Which flaw will cost you most over the next two weeks?",
        },
        hint: {
          ar: "اسأل: أي هذه العبارات تترك مروان شريكاً كامل الصلاحية لأطول مدة، رغم الاتفاق الشفهي على بيع حصته؟",
          en: "Ask: which of these phrases leaves Marwan a fully authorized partner for the longest time, despite the verbal agreement to sell his stake?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«اتفقنا بشكل عام على قيمة الحصة بما يقارب الرقم الذي ناقشناه سابقاً.»",
              en: "\"We've agreed in general on a value close to the figure we discussed earlier.\"",
            },
            rationale: {
              ar: "عيب حقيقي — لا رقم نهائي محدد — لكنه أقل خطورة لأن «الرقم الذي ناقشناه سابقاً» مرجع يمكن تتبّعه بالرجوع إلى محاضر الجلسات السابقة.",
              en: "A real defect — no final specific figure — but less severe because 'the figure we discussed earlier' is a reference that can be traced back to earlier session notes.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«الأستاذة سلمى ستُرسل مسودة اتفاقية البيع حينما تكون جاهزة.»",
              en: "\"Ms Salma will send the draft sale agreement whenever it's ready.\"",
            },
            correct: true,
            rationale: {
              ar: "الأخطر. لا مهلة زمنية على الإطلاق — «حينما تكون جاهزة» قد تعني أسبوعاً أو شهرين. طوال هذه الفترة يبقى مروان شريكاً كامل الصلاحية قانونياً، قادراً على توقيع قرارات تُلزم الشركة رغم ما قيل شفهياً.",
              en: "The worst. No time ownership at all — 'whenever it's ready' could mean a week or two months. Throughout that period Marwan remains a fully authorized partner in law, able to sign decisions binding the company despite what was said verbally.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«أنا واثق أن الأستاذ مروان لن يغيّر رأيه بشأن القيمة.»",
              en: "\"I'm confident Mr Marwan won't change his mind about the value.\"",
            },
            rationale: {
              ar: "تخمين شخصي لا التزام تعاقدي. خطير كأسلوب تفكير، لكنه لا يُبنى عليه التزام قانوني فيسهل تصحيحه لاحقاً باتفاقية بيع مكتوبة ودقيقة.",
              en: "A personal guess, not a contractual commitment. Risky as a way of thinking, but no legal obligation rests on it, so it's easy to correct later with a precise, written sale agreement.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«سنتواصل قريباً لإنهاء التفاصيل.»",
              en: "\"We'll be in touch soon to finalise the details.\"",
            },
            rationale: {
              ar: "عيب مألوف — لا تاريخ — لكنه أقل ضرراً من غياب أي موعد لإرسال المسودة نفسها، لأنه على الأقل يعد بتواصل ما.",
              en: "A familiar defect — no date — but less damaging than the total absence of a deadline for the draft itself, since it at least promises some contact.",
            },
          },
        ],
      },
      {
        id: "act.ni.09.4",
        kind: "email_rewrite",
        skillId: "skill.closing-and-documenting",
        secondarySkillIds: ["skill.negotiation"],
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.negotiation-written.v1",
        weight: 3,
        minChars: 220,
        context: {
          ar: [
            "بعد ساعة من انتهاء جلسة بيع حصة مروان في السنابل التجارية، صاغ زميل مبتدئ رسالة التأكيد التالية قبل إرسالها. راجعها وأعد صياغتها.",
            "المتَّفق عليه فعلياً: 185,000 دينار ثمناً لحصة مروان البالغة 40%، منها 100,000 دينار عند التوقيع والباقي 85,000 دينار خلال 60 يوماً.",
          ],
          en: [
            "An hour after the session on selling Marwan's stake in Al-Sanabil Trading ends, a junior colleague drafted the following confirmation message before sending it. Review and rewrite it.",
            "What was actually agreed: 185,000 JOD for Marwan's 40% stake, with 100,000 JOD payable at signing and the remaining 85,000 JOD within 60 days.",
          ],
        },
        draft: {
          ar: [
            "«مساء الخير، سعدنا بلقائكم اليوم وبالتوصّل إلى تفاهم جيد حول بيع الحصة.»",
            "«سنراجع التفاصيل من جانبنا ونعود إليكم قريباً بالمسودة النهائية.»",
            "«نتطلّع لإنهاء هذا الملف بما يرضي الجميع.»",
          ],
          en: [
            "'Good evening, we were pleased to meet you today and reach a good understanding on the stake sale.'",
            "'We'll review the details on our side and come back to you soon with the final draft.'",
            "'We look forward to closing this file in a way that satisfies everyone.'",
          ],
        },
        prompt: {
          ar: "أعد صياغة الرسالة (٦٠-٩٠ كلمة) بحيث تتضمن قيمة الحصة المتفق عليها وجدول الدفعتين، ومن يرسل المسودة وبأي تاريخ، وتاريخ التوقيع النهائي.",
          en: "Rewrite the message (60-90 words) so it includes the agreed stake value and instalment schedule, who sends the draft and by when, and the final signing date.",
        },
        modelAnswer: {
          ar: [
            "«مساء الخير أستاذة سلمى. تأكيداً لما اتفقنا عليه اليوم: يشتري الأستاذ نضال حصة الأستاذ مروان البالغة 40% بمبلغ 185,000 دينار، منها 100,000 دينار عند التوقيع و85,000 دينار خلال 60 يوماً.»",
            "«نرسل لكم مسودة اتفاقية البيع غداً الأربعاء الساعة الثانية عشرة ظهراً، وترسلون ملاحظاتكم إن وُجدت خلال يوم عمل واحد.»",
            "«التوقيع النهائي من الطرفين يوم الاثنين القادم. إن تأخّرنا عن إرسال المسودة، تصلكم رسالة منّا في اليوم نفسه بالسبب والموعد الجديد.»",
          ],
          en: [
            "'Good evening, Ms Salma. Confirming what we agreed today: Mr Nidal purchases Mr Marwan's 40% stake for 185,000 JOD, with 100,000 JOD payable at signing and 85,000 JOD within 60 days.'",
            "'We'll send you the draft sale agreement tomorrow, Wednesday, by noon, and you send back any comments within one business day.'",
            "'Final signature from both sides next Monday. If we're delayed sending the draft, you'll get a message from us the same day with the reason and the new date.'",
          ],
        },
      },
      {
        id: "act.ni.09.5",
        kind: "reflection",
        skillId: "skill.closing-and-documenting",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع تفاوضاً انتهى بمصافحة و«سنتواصل» فقط. ماذا حدث لاحقاً بالفعل؟",
          en: "Recall a negotiation that ended with just a handshake and 'we'll be in touch.' What actually happened afterward?",
        },
        followUp: {
          ar: "لو طلبت تأكيداً بالصوت وحددت تاريخاً، هل كان يمكن أن يتغيّر ذلك؟",
          en: "If you had asked for spoken confirmation and set a date, could that have changed?",
        },
      },
    ],
    summaryCard: {
      id: "card.ni.09",
      title: {
        ar: "الإغلاق المسموع",
        en: "The Audible Close",
      },
      whatYouLearned: {
        ar: [
          "«اتفاق مبدئي» عبارة مريحة تخفي غياب أي التزام فعلي.",
          "التلخيص المسموع يثبّت ما اتُّفق عليه قبل أن تتصرّف الذاكرة الانتقائية.",
          "التأكيد بالصوت أقوى من الإيماءة؛ لا يُستشهد بالإيماءة لاحقاً.",
          "كل خطوة تالية تحتاج فعلاً ومالكاً وتاريخاً — وإلا لم تُغلق الجلسة فعلياً.",
        ],
        en: [
          "'Agreement in principle' is a comfortable phrase hiding the absence of any real commitment.",
          "An audible summary locks in what was agreed before selective memory kicks in.",
          "Confirmation out loud is stronger than a nod; a nod cannot be cited later.",
          "Every next step needs an act, an owner, and a date — otherwise the session never truly closed.",
        ],
      },
      framework: {
        name: {
          ar: "مفتاح الإغلاق المسموع: لخّص · أكِّد · سمِّ · حدّد",
          en: "The Audible Close Key: Summarize · Confirm · Name · Date",
        },
        steps: [
          {
            ar: "لخّص الأرقام والشروط الجوهرية بصوت مسموع قبل المغادرة.",
            en: "Summarise the figures and material terms out loud before leaving.",
          },
          {
            ar: "اطلب تأكيداً صريحاً بصوت الطرف الآخر، لا بإيماءة.",
            en: "Ask for explicit confirmation in the other side's own voice, not a nod.",
          },
          {
            ar: "سمِّ المستند التالي ومن يُعدّه.",
            en: "Name the next document and who prepares it.",
          },
          {
            ar: "حدّد تاريخ الإرسال وتاريخ التوقيع النهائي.",
            en: "Set the sending date and the final signing date.",
          },
        ],
      },
      rememberThis: {
        ar: "الجلسة التي تنتهي بمصافحة دون تلخيص مسموع لم تُغلق؛ إنها معلَّقة.",
        en: "A session that ends with a handshake and no audible summary hasn't closed. It's suspended.",
      },
      useItTomorrow: {
        ar: "في ختام تفاوضك القادم، لخّص الأرقام بصوت عالٍ واطلب من الطرف الآخر أن يردّ عليها بصوته قبل المصافحة.",
        en: "At the close of your next negotiation, summarise the figures out loud and ask the other side to respond in their own voice before shaking hands.",
      },
    },
    targetLevel: 4,
    sourceIds: ["src.legal-project-management", "src.how-to-argue-and-win", "src.making-your-case"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 10 — Documenting the agreement (path capstone)
  // =========================================================================
  {
    id: "unit.ni.10",
    chapterId: "ch.ni.closing",
    order: 2,
    title: {
      ar: "توثيق الاتفاق: لا مجال لخلاف لاحق",
      en: "Documenting the Agreement: No Room for a Later Dispute",
    },
    subtitle: {
      ar: "ما لم يُكتب بدقة اليوم يُعاد التفاوض عليه غداً — هذه المرة أمام قاضٍ أو محكّم.",
      en: "What isn't written precisely today gets renegotiated tomorrow — this time in front of a judge or an arbitrator.",
    },
    primarySkillId: "skill.closing-and-documenting",
    skillIds: ["skill.closing-and-documenting", "skill.negotiation", "skill.staying-within-mandate"],
    stage: 4,
    estimatedMinutes: 11,
    steps: [
      {
        kind: "hook",
        id: "s.ni.10.hook",
        text: {
          ar: "الاتفاق الذي يعيش فقط في الذاكرة يموت في أول خلاف.",
          en: "An agreement that lives only in memory dies at the first dispute.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.ni.10.why",
        text: {
          ar: "بعد أشهر، لا أحد يتذكّر النبرة أو النية؛ يتذكّر الجميع المستند. ما لم يُكتب بدقة اليوم يُعاد التفاوض عليه غداً — هذه المرة أمام قاضٍ أو محكّم.",
          en: "Months later, nobody remembers the tone or the intention; everyone remembers the document. What isn't written precisely today gets renegotiated tomorrow — this time in front of a judge or an arbitrator.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.ni.10.goals",
        goals: {
          ar: [
            "أن تحوّل اتفاقاً شفهياً إلى مستند لا يحتمل قراءة ثانية: كل مبلغ بعملته وأساسه، وكل تاريخ كاملاً.",
            "أن تُدرج أثر عدم الالتزام (الضمانة، الفائدة، إعادة فتح المطالبة) صراحةً بدل تركه مفهوماً ضمنياً.",
            "أن ترسل التوثيق خلال ساعات لا أيام، قبل أن تبدأ ذاكرة الطرف الآخر بالتحوّل.",
          ],
          en: [
            "Turn a verbal agreement into a document that admits no second reading: every amount with its currency and basis, every date written in full.",
            "Spell out explicitly what happens on non-compliance — security, interest, reopening the claim — instead of leaving it implied.",
            "Send the documentation within hours, not days, before the other side's memory starts to shift.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.ni.10.lesson",
        title: {
          ar: "الدقّة اليوم توفّر الخلاف غداً",
          en: "Precision today saves a dispute tomorrow",
        },
        body: {
          ar: [
            "كل تسوية تنتهي بلحظة ارتياح مشترك، وهذه اللحظة بالذات هي الأخطر: يميل الطرفان إلى الاكتفاء بالمعنى العام، وتأجيل الدقّة إلى «المستند لاحقاً».",
            "لكن «لاحقاً» هي بالضبط حيث تُولد الخلافات: كل طرف يملأ الفراغ بالتفسير الأقرب لمصلحته، بحسن نية غالباً، لا بسوء نية.",
            "كل مبلغ يحتاج ثلاثة عناصر لا يُستغنى عنها: الرقم، والعملة، والأساس — رقم فاتورة، أو شيك، أو بند عقدي محدد. «المبلغ المستحق» وحدها عبارة تفتح باب الخلاف.",
            "كل تاريخ يُكتب باليوم والشهر والسنة كاملة. «الشهر القادم» يبدأ متفائلاً وينتهي متأخراً، وكل طرف يحسبه من نقطة بداية مختلفة.",
            "لا تترك أثر التأخّر ضمنياً. اكتب صراحةً: ماذا يحدث إن لم يُدفع القسط في موعده؟ فائدة؟ سقوط جدول التقسيط؟ تنفيذ الضمانة؟",
            "الضمانة نفسها تحتاج تفصيلاً: أي شيك، بأي تاريخ استحقاق، ومحفوظ لدى من حتى تمام السداد.",
            "أرسل التوثيق خلال ساعات، لا أيام. كل يوم تأخير هو يوم تتغيّر فيه ذاكرة الطرف الآخر أو تتدخّل فيه استشارة جديدة تُعيد فتح النقاش.",
            "واطلب توقيعاً أو تأكيداً كتابياً صريحاً على المستند نفسه، لا مجرد «تم الاستلام». الصمت بعد الإرسال ليس موافقة.",
          ],
          en: [
            "Every settlement ends on a moment of shared relief, and that exact moment is the most dangerous: both sides tend to settle for the general sense, and postpone precision to 'the document later.'",
            "But 'later' is exactly where disputes are born: each side fills the gap with the reading closest to their own interest, usually in good faith, not bad faith.",
            "Every amount needs three irreducible parts: the figure, the currency, and the basis — an invoice number, a cheque, a specific contract clause. 'The amount due' alone is a phrase that opens the door to dispute.",
            "Every date is written with the day, month and full year. 'Next month' starts optimistic and ends late, and each side counts it from a different starting point.",
            "Don't leave the consequence of delay implied. Write it explicitly: what happens if an instalment isn't paid on time? Interest? The schedule collapsing? Enforcing the security?",
            "The security itself needs detail: which cheque, with what due date, held by whom until payment in full.",
            "Send the documentation within hours, not days. Every day of delay is a day the other side's memory can shift, or new advice steps in and reopens the discussion.",
            "And ask for a signature or an explicit written confirmation on the document itself, not just 'received.' Silence after sending is not agreement.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.ni.10.visual",
        title: {
          ar: "خمسة عناصر لا يخلو منها توثيق سليم",
          en: "Five Parts No Sound Documentation Skips",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "المبلغ", en: "Amount" },
            detail: { ar: "رقم + عملة + أساس (فاتورة، شيك، بند).", en: "Figure + currency + basis (invoice, cheque, clause)." },
            tone: "neutral",
          },
          {
            label: { ar: "التاريخ", en: "Date" },
            detail: { ar: "يوم وشهر وسنة كاملة، لا «الشهر القادم».", en: "Full day, month and year — never 'next month'." },
            tone: "neutral",
          },
          {
            label: { ar: "الضمانة", en: "Security" },
            detail: { ar: "أي شيك، بأي تاريخ استحقاق، ومحفوظ لدى من.", en: "Which cheque, what due date, held by whom." },
            tone: "neutral",
          },
          {
            label: { ar: "أثر التأخّر", en: "Consequence of delay" },
            detail: {
              ar: "فائدة، سقوط جدول التقسيط، أو تنفيذ الضمانة — مذكور صراحةً.",
              en: "Interest, schedule collapse, or enforcing security — stated explicitly.",
            },
            tone: "positive",
          },
          {
            label: { ar: "التأكيد", en: "Confirmation" },
            detail: {
              ar: "توقيع أو ردّ كتابي صريح، لا صمت يُقرأ موافقة.",
              en: "A signature or explicit written reply — not silence read as agreement.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.ni.10.worked",
        strong: {
          label: {
            ar: "محامٍ يوثّق اتفاقية المشروع المشترك بلا مجال لتأويل",
            en: "A lawyer who documents the joint-venture agreement with no room for interpretation",
          },
          text: {
            ar: [
              "«تأكيداً لاتفاقية المشروع المشترك المتّفق عليها اليوم بين شركة أفق للتطوير العقاري والسيد هيثم قدّورة بخصوص مشروع مرسى الخليج في الدوحة:»",
              "«١) يساهم السيد هيثم بقطعة الأرض بقيمة 8,000,000 ريال قطري وفق تقرير التقييم المستقل رقم 114، وتساهم أفق برأس مال تنفيذي قدره 20,000,000 ريال قطري على ثلاث دفعات: 8,000,000 ريال بحلول الأحد 1 تشرين الثاني 2026، و6,000,000 ريال بحلول الأحد 1 شباط 2027، و6,000,000 ريال بحلول الأحد 1 أيار 2027.»",
              "«٢) توزَّع الأرباح الصافية بعد استرداد التكاليف بنسبة 55% لأفق و45% لهيثم. وضماناً لكل دفعة، تقدّم أفق خطاب ضمان بنكياً غير مشروط بالمبلغ نفسه قبل موعد كل دفعة بأسبوع.»",
              "«٣) في حال تأخّر أي دفعة أكثر من 14 يوماً دون إشعار كتابي بالسبب، تنخفض حصة أفق في المشروع بواقع نقطة مئوية واحدة عن كل أسبوع تأخير إضافي.»",
            ],
            en: [
              "'Confirming the joint-venture agreement reached today between Ofoq Real Estate Development and Mr Haitham Qaddoura regarding the Marsa Al-Khaleej project in Doha:'",
              "'1) Mr Haitham contributes the land parcel valued at 8,000,000 Qatari riyals per independent valuation report No. 114, and Ofoq contributes 20,000,000 QAR in execution capital in three tranches: 8,000,000 QAR by Sunday, 1 November 2026, 6,000,000 QAR by Sunday, 1 February 2027, and 6,000,000 QAR by Sunday, 1 May 2027.'",
              "'2) Net profit after cost recovery is split 55% to Ofoq and 45% to Haitham. As security for each tranche, Ofoq provides an unconditional bank guarantee for the same amount one week before each due date.'",
              "'3) If any tranche is more than 14 days late with no written notice of the reason, Ofoq's share in the project drops by one percentage point for every additional week of delay.'",
            ],
          },
          why: {
            ar: "كل مبلغ يحمل عملته وأساسه (تقرير التقييم)، وكل تاريخ مكتوب كاملاً، والضمانة موصوفة بدقة، وأثر التأخّر مذكور صراحةً — لا مجال لأي طرف أن «يتذكّر» نسخة مختلفة.",
            en: "Every amount carries its currency and basis (the valuation report), every date is written in full, the security is precisely described, and the consequence of delay is stated explicitly — no room for either side to 'remember' a different version.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يكتفي برسالة شكر",
            en: "A lawyer who settles for a thank-you note",
          },
          text: {
            ar: ["«شكراً لتعاونكم اليوم، توصّلنا إلى صيغة جيدة للمشروع المشترك، وسنبدأ الإجراءات قريباً.»"],
            en: ["'Thank you for your cooperation today — we reached a good formula for the joint venture, and we'll begin the process soon.'"],
          },
          why: {
            ar: "لا رقم، ولا تاريخ، ولا ضمانة، ولا أثر للتأخّر. «قريباً» و«صيغة جيدة» عبارتان مريحتان اليوم، وستكونان مصدر خلافين منفصلين خلال شهر.",
            en: "No figure, no date, no security, no consequence for delay. 'Soon' and 'a good formula' are comfortable phrases today, and will become two separate disputes within a month.",
          },
        },
      },
      { kind: "activity", id: "s.ni.10.a1", activityId: "act.ni.10.1", mode: "quick" },
      { kind: "activity", id: "s.ni.10.a2", activityId: "act.ni.10.2", mode: "guided" },
      { kind: "activity", id: "s.ni.10.a3", activityId: "act.ni.10.3", mode: "guided" },
      { kind: "activity", id: "s.ni.10.a4", activityId: "act.ni.10.4", mode: "independent" },
      { kind: "activity", id: "s.ni.10.a5", activityId: "act.ni.10.5", mode: "independent" },
      { kind: "summary", id: "s.ni.10.summary", summaryCardId: "card.ni.10" },
      {
        kind: "apply_tomorrow",
        id: "s.ni.10.apply",
        task: {
          ar: "راجع آخر تسوية أو اتفاق وثّقته، وابحث عن عبارة واحدة غامضة فيه (مبلغ، تاريخ، أو شرط). أعد صياغتها اليوم وأرسلها.",
          en: "Review the last settlement or agreement you documented, and find one vague phrase in it — an amount, a date, or a term. Rewrite it today and send it.",
        },
        detail: {
          ar: "لا تنتظر خلافاً ليكشف الغموض؛ ابحث عنه بنفسك أولاً.",
          en: "Don't wait for a dispute to expose the ambiguity; go find it yourself first.",
        },
      },
      {
        kind: "next_mission",
        id: "s.ni.10.next",
        teaser: {
          ar: "أكملتَ مسار التفاوض والتأثير: من قراءة الطرف الآخر وبناء الحجة، إلى الثبات تحت الضغط، إلى إغلاق الاتفاق وتوثيقه بلا غموض. هذه المهارات تُصقَل في كل تفاوض حقيقي تدخله من الآن فصاعداً.",
          en: "You have completed the Negotiation & Influence path: from reading the counterpart and building the argument, to holding steady under pressure, to closing and documenting the deal without ambiguity. These skills sharpen in every real negotiation you enter from here on.",
        },
      },
    ],
    activities: [
      {
        id: "act.ni.10.1",
        kind: "true_false",
        skillId: "skill.closing-and-documenting",
        stage: 4,
        weight: 1,
        context: {
          ar: [
            "في مستند توثيق اتفاقية المشروع المشترك، كُتب: «تلتزم أفق بدفع رأس المال التنفيذي المتبقي خلال مدة معقولة من توقيع الاتفاقية.»",
          ],
          en: [
            "In the joint-venture documentation, it was written: 'Ofoq undertakes to pay the remaining execution capital within a reasonable period from signing the agreement.'",
          ],
        },
        prompt: {
          ar: "هذه الصياغة كافية لمنع خلاف لاحق، لأنها تُلزم أفق بالدفع صراحةً.",
          en: "This wording is sufficient to prevent a later dispute, because it explicitly obligates Ofoq to pay.",
        },
        options: [
          {
            id: "o.true",
            label: { ar: "صحيح", en: "True" },
            rationale: {
              ar: "الالتزام موجود شكلاً، لكن «مدة معقولة» ليست تاريخاً؛ كل طرف سيحسبها بما يخدمه. هذه الصياغة تضمن الخلاف، لا تمنعه.",
              en: "The obligation exists in form, but 'a reasonable period' is not a date; each side will calculate it in their own favour. This wording guarantees a dispute, not prevents one.",
            },
          },
          {
            id: "o.false",
            label: { ar: "خطأ", en: "False" },
            correct: true,
            rationale: {
              ar: "بالضبط. «مدة معقولة» غامضة عمداً أو سهواً. يجب استبدالها بتاريخ محدد بيوم وشهر وسنة.",
              en: "Exactly. 'A reasonable period' is vague, whether deliberately or not. It must be replaced with a specific date — day, month and year.",
            },
          },
        ],
      },
      {
        id: "act.ni.10.2",
        kind: "fill_blank",
        skillId: "skill.closing-and-documenting",
        stage: 4,
        weight: 2,
        prompt: {
          ar: "اختر الكلمة الدقيقة في كل فراغ من بند التسوية التالي.",
          en: "Choose the precise word for each blank in the following settlement clause.",
        },
        template: {
          ar: "تساهم أفق برأس مال قدره {{0}} ريال قطري وفق تقرير التقييم رقم 114، بحلول {{1}}، وضماناً لذلك تُقدَّم لهيثم {{2}}.",
          en: "Ofoq contributes {{0}} Qatari riyals per valuation report No. 114, by {{1}}, and as security Haitham is given {{2}}.",
        },
        blanks: [
          {
            id: "b0",
            options: [
              { ar: "مبلغاً مناسباً", en: "an appropriate amount" },
              { ar: "8,000,000", en: "8,000,000" },
              { ar: "مبلغاً كبيراً", en: "a large amount" },
            ],
            answerIndex: 1,
            rationale: {
              ar: "المبلغ يحتاج رقماً محدداً لا وصفاً عاماً؛ «مناسباً» أو «كبيراً» يفتح الباب لتفسيرين متعارضين لاحقاً.",
              en: "The amount needs a specific figure, not a general description; 'appropriate' or 'large' opens the door to two conflicting readings later.",
            },
          },
          {
            id: "b1",
            options: [
              { ar: "نهاية العام", en: "end of the year" },
              { ar: "الأحد 1 تشرين الثاني 2026", en: "Sunday, 1 November 2026" },
              { ar: "أقرب وقت ممكن", en: "as soon as possible" },
            ],
            answerIndex: 1,
            rationale: {
              ar: "تاريخ كامل باليوم والشهر والسنة، لا وصف نسبي يُحسَب من نقطة بداية مختلفة عند كل طرف.",
              en: "A full date — day, month, year — not a relative phrase each side would count from a different starting point.",
            },
          },
          {
            id: "b2",
            options: [
              { ar: "وعداً شفهياً بالتحويل", en: "a verbal promise to transfer funds" },
              { ar: "خطاب ضمان بنكي غير مشروط بتاريخ سريان محدد", en: "an unconditional bank guarantee with a specific validity date" },
              { ar: "نية حسنة بالسداد", en: "a good-faith intention to pay" },
            ],
            answerIndex: 1,
            rationale: {
              ar: "الضمانة يجب أن تكون مستنداً قابلاً للتنفيذ بتاريخ محدد، لا وعداً شفهياً أو نية عامة لا تُلزم أحداً عملياً.",
              en: "Security must be an enforceable document with a specific date, not a verbal promise or a general statement of intent that binds nobody in practice.",
            },
          },
        ],
      },
      {
        id: "act.ni.10.3",
        kind: "categorization",
        skillId: "skill.closing-and-documenting",
        stage: 4,
        weight: 2,
        prompt: {
          ar: "صنِّف كل بند من مستند التسوية: هل هو دقيق بما يكفي ليصمد وحده، أم لا يزال غامضاً ويحتاج تصحيحاً؟",
          en: "Sort each clause of the settlement document: is it precise enough to stand alone, or still ambiguous and in need of a fix?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من قائمة منسدلة بجانب كل بند بدل السحب.",
          en: "Pick the category from a dropdown beside each clause instead of dragging.",
        },
        buckets: [
          { id: "b.precise", label: { ar: "دقيق بما يكفي", en: "Precise enough" } },
          { id: "b.ambiguous", label: { ar: "لا يزال غامضاً", en: "Still ambiguous" } },
        ],
        items: [
          {
            id: "i1",
            label: {
              ar: "«يساهم هيثم بالأرض بقيمة 8,000,000 ريال قطري وفق تقرير التقييم رقم 114»",
              en: "\"Haitham contributes the land valued at 8,000,000 Qatari riyals per valuation report No. 114\"",
            },
            bucketId: "b.precise",
            rationale: {
              ar: "رقم، وعملة، وأساس محدد. لا مجال لقراءة ثانية.",
              en: "A figure, a currency, and a specific basis. No room for a second reading.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "«يُقدَّم رأس المال خلال مدة معقولة من توقيع الاتفاقية»",
              en: "\"The capital is provided within a reasonable period from signing the agreement\"",
            },
            bucketId: "b.ambiguous",
            rationale: {
              ar: "لا تاريخ فعلياً. «معقولة» تُحسَب بشكل مختلف عند كل طرف.",
              en: "No actual date. 'Reasonable' will be counted differently by each side.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "«بحلول الأحد 1 تشرين الثاني 2026»",
              en: "\"By Sunday, 1 November 2026\"",
            },
            bucketId: "b.precise",
            rationale: {
              ar: "يوم وشهر وسنة كاملة. لا احتمال لتأويل مختلف.",
              en: "Full day, month and year. No room for a different interpretation.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "«بأسرع ما يمكن بعد توقيع الاتفاقية»",
              en: "\"As soon as possible after signing the agreement\"",
            },
            bucketId: "b.ambiguous",
            rationale: {
              ar: "«أسرع ما يمكن» ليست موعداً؛ كل طرف يقرأها بحسب أولوياته الخاصة.",
              en: "'As soon as possible' is not a deadline; each side reads it according to their own priorities.",
            },
          },
          {
            id: "i5",
            label: {
              ar: "«خطاب ضمان بنكي غير مشروط بقيمة 8,000,000 ريال قطري صادر عن بنك قطر الوطني، ساري حتى تمام السداد»",
              en: "\"An unconditional bank guarantee for 8,000,000 Qatari riyals issued by Qatar National Bank, valid until payment in full\"",
            },
            bucketId: "b.precise",
            rationale: {
              ar: "المبلغ، والجهة المُصدِرة، وشرط السريان — لا فراغ يُملأ بالتفسير.",
              en: "The amount, the issuing bank, and the validity condition — no gap left to be filled with interpretation.",
            },
          },
          {
            id: "i6",
            label: {
              ar: "«ضمانة مناسبة يتفق عليها الطرفان لاحقاً»",
              en: "\"An appropriate security to be agreed by the parties later\"",
            },
            bucketId: "b.ambiguous",
            rationale: {
              ar: "لا نوع ضمانة، ولا تاريخ اتفاق. تؤجّل النزاع بدل أن تحسمه.",
              en: "No type of security, no date to agree it by. This postpones the dispute rather than settling it.",
            },
          },
        ],
      },
      {
        id: "act.ni.10.4",
        kind: "short_written",
        skillId: "skill.closing-and-documenting",
        secondarySkillIds: ["skill.staying-within-mandate"],
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.negotiation-written.v1",
        weight: 3,
        minChars: 320,
        context: {
          ar: [
            "توصّلت شركة أفق للتطوير العقاري والسيد هيثم قدّورة اليوم إلى اتفاق شفهي بخصوص مشروع مرسى الخليج المشترك في الدوحة.",
            "المتَّفق عليه: مساهمة هيثم بالأرض بقيمة 8,000,000 ريال قطري وفق تقرير التقييم رقم 114، ومساهمة أفق برأس مال 20,000,000 ريال قطري على ثلاث دفعات (1 تشرين الثاني 2026، 1 شباط 2027، 1 أيار 2027)، بتوزيع أرباح 55%-45%، وخطاب ضمان بنكي لكل دفعة.",
          ],
          en: [
            "Ofoq Real Estate Development and Mr Haitham Qaddoura reached a verbal agreement today on the joint Marsa Al-Khaleej project in Doha.",
            "What was agreed: Haitham contributes the land valued at 8,000,000 QAR per valuation report No. 114, Ofoq contributes 20,000,000 QAR in capital across three tranches (1 November 2026, 1 February 2027, 1 May 2027), a 55%-45% profit split, and a bank guarantee for each tranche.",
          ],
        },
        prompt: {
          ar: "اكتب رسالة توثيق الاتفاقية الكاملة التي ترسلها خلال ساعتين من انتهاء الجلسة (٨٠-١٢٠ كلمة). اذكر قيمة كل مساهمة بعملتها وأساسها، الدفعات الثلاث بتواريخها الكاملة، تفاصيل الضمان البنكي، وأثر التأخّر أكثر من 14 يوماً.",
          en: "Write the full agreement confirmation you send within two hours of the session ending (80-120 words). State each contribution's value with its currency and basis, the three tranches with full dates, the bank guarantee's details, and the consequence of a delay beyond 14 days.",
        },
        modelAnswer: {
          ar: [
            "«مساء الخير أستاذ هيثم. تأكيداً لاتفاقنا اليوم بخصوص مشروع مرسى الخليج:»",
            "«تساهمون بقطعة الأرض بقيمة 8,000,000 ريال قطري وفق تقرير التقييم المستقل رقم 114، وتساهم أفق برأس مال تنفيذي قدره 20,000,000 ريال قطري على ثلاث دفعات: 8,000,000 ريال بحلول الأحد 1 تشرين الثاني 2026، و6,000,000 ريال بحلول الأحد 1 شباط 2027، و6,000,000 ريال بحلول الأحد 1 أيار 2027. وتوزَّع الأرباح الصافية بعد استرداد التكاليف بنسبة 55% لأفق و45% لكم.»",
            "«ضماناً لكل دفعة، تقدّم أفق خطاب ضمان بنكياً غير مشروط بالمبلغ نفسه قبل موعدها بأسبوع.»",
            "«إن تأخّرت أي دفعة أكثر من 14 يوماً دون إشعار كتابي بالسبب، تنخفض حصة أفق بواقع نقطة مئوية واحدة عن كل أسبوع تأخير إضافي. يُرجى تأكيد هذه الشروط كتابياً.»",
          ],
          en: [
            "'Good evening, Mr Haitham. Confirming today's agreement on the Marsa Al-Khaleej project:'",
            "'You contribute the land parcel valued at 8,000,000 QAR per independent valuation report No. 114, and Ofoq contributes 20,000,000 QAR in execution capital across three tranches: 8,000,000 QAR by Sunday, 1 November 2026, 6,000,000 QAR by Sunday, 1 February 2027, and 6,000,000 QAR by Sunday, 1 May 2027. Net profit after cost recovery is split 55% to Ofoq and 45% to you.'",
            "'As security for each tranche, Ofoq provides an unconditional bank guarantee for the same amount one week before its due date.'",
            "'If any tranche is more than 14 days late with no written notice of the reason, Ofoq's share drops by one percentage point for every additional week of delay. Please confirm these terms in writing.'",
          ],
        },
        weakAnswer: {
          text: {
            ar: [
              "«مساء الخير أستاذ هيثم، سعدنا بالوصول إلى تفاهم اليوم بخصوص المشروع.»",
              "«سنرتّب تفاصيل التمويل خلال الأيام القادمة، ونشكركم على تعاونكم.»",
            ],
            en: [
              "'Good evening, Mr Haitham, we were glad to reach an understanding today on the project.'",
              "'We'll arrange the financing details over the coming days, and thank you for your cooperation.'",
            ],
          },
          whatIsWrong: {
            ar: "لا مبلغ، ولا تاريخ، ولا ذكر للضمانة أو أثر التأخّر. «الأيام القادمة» تعني عملياً أي وقت يناسب أياً من الطرفين، وهذا بالضبط ما يُعاد فتحه في نزاع لاحق.",
            en: "No amount, no date, no mention of security or the consequence of delay. 'The coming days' effectively means whatever time suits either side, and that is exactly what gets reopened in a later dispute.",
          },
        },
      },
      {
        id: "act.ni.10.5",
        kind: "reflection",
        skillId: "skill.closing-and-documenting",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "وأنت تنهي مسار التفاوض والتأثير: أي مهارة من الخمس التي مررت بها (الحجة المقنعة، قراءة الطرف الآخر، التعامل مع الضغط، الالتزام بالتفويض، الإغلاق والتوثيق) الأقرب إلى نقطة ضعفك الفعلية؟",
          en: "As you finish the Negotiation & Influence path: which of the five skills you've covered — persuasive argument, reading the counterpart, handling pressure, staying within mandate, closing and documenting — is closest to your actual weak point?",
        },
        followUp: {
          ar: "ما أول تفاوض حقيقي ستطبّق عليه هذه المهارة تحديداً هذا الأسبوع؟",
          en: "What is the first real negotiation this week where you'll apply that specific skill?",
        },
      },
    ],
    summaryCard: {
      id: "card.ni.10",
      title: {
        ar: "لا مجال لخلاف لاحق",
        en: "No Room for a Later Dispute",
      },
      whatYouLearned: {
        ar: [
          "كل مبلغ يحتاج رقماً وعملة وأساساً؛ «المبلغ المستحق» وحدها تفتح باب الخلاف.",
          "كل تاريخ يُكتب كاملاً باليوم والشهر والسنة، لا وصفاً نسبياً مثل «قريباً».",
          "أثر التأخّر يُذكر صراحةً: فائدة، سقوط جدول، أو تنفيذ ضمانة.",
          "التوثيق يُرسَل خلال ساعات، ويُطلَب عليه تأكيد كتابي صريح.",
        ],
        en: [
          "Every amount needs a figure, a currency and a basis; 'the amount due' alone opens the door to dispute.",
          "Every date is written in full — day, month, year — never a relative phrase like 'soon'.",
          "The consequence of delay is stated explicitly: interest, a collapsed schedule, or enforcing security.",
          "Documentation is sent within hours, and an explicit written confirmation is requested on it.",
        ],
      },
      framework: {
        name: {
          ar: "مفتاح التوثيق: المبلغ · التاريخ · الضمانة · الأثر · التأكيد",
          en: "The Documentation Key: Amount · Date · Security · Consequence · Confirmation",
        },
        steps: [
          {
            ar: "المبلغ — رقم، وعملة، وأساس (فاتورة، شيك، بند).",
            en: "Amount — a figure, a currency, and a basis (invoice, cheque, clause).",
          },
          {
            ar: "التاريخ — يوم وشهر وسنة كاملة.",
            en: "Date — full day, month and year.",
          },
          {
            ar: "الضمانة — أي مستند، بأي تفاصيل، محفوظ لدى من.",
            en: "Security — which document, what details, held by whom.",
          },
          {
            ar: "الأثر — ماذا يحدث تحديداً إن لم يُلتزَم بالموعد.",
            en: "Consequence — exactly what happens if the deadline is missed.",
          },
          {
            ar: "التأكيد — توقيع أو ردّ كتابي صريح، لا صمت.",
            en: "Confirmation — a signature or explicit written reply, never silence.",
          },
        ],
      },
      rememberThis: {
        ar: "الاتفاق الذي لم يُكتب بدقة ليس اتفاقاً، بل مسودة خلاف مؤجَّل.",
        en: "An agreement not written precisely is not an agreement. It is a draft of a postponed dispute.",
      },
      useItTomorrow: {
        ar: "في أي تسوية تصل إليها هذا الأسبوع، أرسل التوثيق الكامل خلال ساعتين، واطلب تأكيداً كتابياً صريحاً قبل نهاية اليوم.",
        en: "In any settlement you reach this week, send full documentation within two hours, and ask for an explicit written confirmation before the end of the day.",
      },
    },
    targetLevel: 4,
    sourceIds: ["src.legal-project-management", "src.governance-raci", "src.how-to-argue-and-win"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
