import type { UnitDef } from "../types";

/**
 * Self-Management — Chapter 1 (`ch.sm.planning-your-week`) units 1-3 and
 * Chapter 2 (`ch.sm.protecting-your-focus`) units 4-5.
 *
 * Skills, rubrics and scenarios referenced here are authored elsewhere in the
 * bundle: `content/framework/skills-self-management.ts`,
 * `content/framework/rubrics-self-management.ts`, and
 * `content/scenarios-self-management.ts`. Units 6-10 of this path are
 * authored separately in `sm-units-06-10.ts`.
 */
export const SM_UNITS_01_05: UnitDef[] = [
  // =========================================================================
  // UNIT 01 — See Your Real Capacity
  // =========================================================================
  {
    id: "unit.sm.01",
    chapterId: "ch.sm.planning-your-week",
    order: 1,
    title: {
      ar: "رؤية طاقتك الحقيقية",
      en: "See Your Real Capacity",
    },
    subtitle: {
      ar: "من يخطط بساعات لا يملكها يكتشف النقص في اللحظة التي يتأخر فيها عن التسليم",
      en: "Whoever plans with hours he doesn't actually have discovers the gap the moment a deadline slips.",
    },
    primarySkillId: "skill.time-priority-management",
    skillIds: ["skill.time-priority-management", "skill.overcoming-avoidance"],
    stage: 1,
    estimatedMinutes: 7,
    steps: [
      {
        kind: "hook",
        id: "s.sm.01.hook",
        text: {
          ar: "أسبوعك فيه ٤٠ ساعة عمل مُعلنة، لكن كم ساعة منها فعلاً حرة لعمل جديد بعد الاجتماعات والملفات القائمة والمكالمات الطارئة؟ معظم المحامين لا يعرفون الرقم الحقيقي.",
          en: "Your week has 40 declared work hours, but how many are actually free for new work once meetings, live files, and urgent calls are subtracted? Most lawyers don't know the real number.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.sm.01.why",
        text: {
          ar: "من يقبل ملفًا جديدًا بناءً على الساعات المُعلنة لا الساعات الحقيقية يبني وعدًا لا يستطيع الوفاء به. النتيجة تأخير يظهر لاحقًا، لا اليوم.",
          en: "Whoever accepts a new file based on declared hours instead of real ones is building a promise he can't keep. The result is a delay that shows up later, not today.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.sm.01.goals",
        goals: {
          ar: [
            "أن تحسب ساعات عملك الفعلية المتاحة أسبوعيًا بعد خصم الالتزامات الثابتة.",
            "أن تُحصي الساعات الملتزم بها فعلاً على ملفاتك الحالية بدقة، لا بتقدير تقريبي.",
            "أن تقارن الرقمين بصدق قبل قبول أي التزام جديد.",
          ],
          en: [
            "Calculate your actual available work hours per week after subtracting fixed commitments.",
            "Tally the hours truly committed to your current files precisely, not by rough guess.",
            "Compare both numbers honestly before accepting any new commitment.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.sm.01.lesson",
        title: {
          ar: "الساعات المُعلنة والساعات الحقيقية",
          en: "Declared hours and real hours",
        },
        body: {
          ar: [
            "معظم المحامين يخططون بأسبوع من ٤٥ أو ٥٠ ساعة نظريًا. لكن جزءًا كبيرًا منها يذهب لاجتماعات ثابتة، اتصالات عملاء غير مجدولة، وإدارة داخلية — لا لعمل جديد فعليًا.",
            "الخطوة الأولى ليست جدولة المهام، بل معرفة رقم واحد صادق: كم ساعة تبقى فعلاً بعد كل ذلك؟ هذا هو سقف طاقتك الحقيقي.",
            "الخطوة الثانية: احصِ ساعاتك الملتزم بها فعلاً على الملفات القائمة، لا بالتقدير المتفائل، بل بمراجعة صريحة لكل ملف ووقته المتوقع.",
            "الفجوة بين الرقمين هي ما تملكه فعلاً لقبول أي شيء جديد. إن كانت سالبة، فأنت متأخر فعليًا حتى لو بدا جدولك فارغًا على الورق.",
            "التفاؤل الزائد في تقدير الوقت ليس تفاؤلاً، بل تجنّبًا لمواجهة رقم مزعج. الصدق مع هذا الرقم هو أول شكل من أشكال إدارة الوقت الحقيقية.",
          ],
          en: [
            "Most lawyers plan around a theoretical 45 or 50-hour week. But a large share goes to fixed meetings, unscheduled client calls, and internal admin — not new work at all.",
            "The first step isn't scheduling tasks, it's knowing one honest number: how many hours are actually left after all that? That is your real capacity ceiling.",
            "The second step: tally the hours truly committed to current files — not by optimistic guessing, but by an honest review of each file and its expected time.",
            "The gap between the two numbers is what you actually have for anything new. If it's negative, you're already behind, even if your calendar looks empty on paper.",
            "Excessive optimism about time isn't optimism — it's avoidance of an uncomfortable number. Being honest with that number is the first real form of time management.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.sm.01.visual",
        title: {
          ar: "ميزان الطاقة الأسبوعية",
          en: "The weekly capacity scale",
        },
        variant: "scale",
        items: [
          {
            label: { ar: "الساعات المُعلنة", en: "Declared hours" },
            detail: {
              ar: "الرقم النظري الذي يظهر في جدولك — ٤٥ أو ٥٠ ساعة مثلاً.",
              en: "The theoretical figure on your calendar — 45 or 50 hours, say.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "الساعات الثابتة المقتطعة", en: "Fixed hours subtracted" },
            detail: {
              ar: "اجتماعات دورية، إدارة داخلية، ومكالمات عملاء غير مجدولة تُقتطع تلقائيًا.",
              en: "Recurring meetings, internal admin, and unscheduled client calls are cut automatically.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الساعات الملتزم بها", en: "Hours already committed" },
            detail: {
              ar: "الوقت المتوقع لإنجاز الملفات القائمة فعلاً، لا كما تتمنى.",
              en: "The time your current files actually require, not as you wish it were.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الطاقة الحقيقية المتبقية", en: "Real remaining capacity" },
            detail: {
              ar: "الرقم الصادق الوحيد الذي يجب أن يقرر قبولك لملف جديد.",
              en: "The one honest number that should decide whether you accept a new file.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.sm.01.worked",
        strong: {
          label: {
            ar: "محامية تحسب طاقتها قبل قبول ملف جديد",
            en: "A lawyer who calculates her capacity before accepting a new file",
          },
          text: {
            ar: [
              "«أسبوعي ٤٥ ساعة معلنة، منها ١٢ ساعة اجتماعات ثابتة وإدارة، فيتبقى ٣٣ ساعة عمل فعلي.»",
              "«ملفاتي الحالية تحتاج فعليًا ٢٩ ساعة هذا الأسبوع حسب مراجعتي الصادقة لكل ملف.»",
              "«طاقتي الحقيقية المتبقية ٤ ساعات فقط — لا يمكنني قبول ملف يحتاج أكثر من ذلك دون تأجيل شيء آخر.»",
            ],
            en: [
              "\"My week is 45 declared hours, of which 12 go to fixed meetings and admin, leaving 33 hours of real work.\"",
              "\"My current files genuinely need 29 hours this week, by my honest review of each one.\"",
              "\"My real remaining capacity is only 4 hours — I can't accept a file needing more than that without delaying something else.\"",
            ],
          },
          why: {
            ar: "حسبت رقمًا صادقًا بدل تقدير متفائل، فعرفت حدّها قبل أن يعرفها العميل الغاضب لاحقًا.",
            en: "She calculated an honest number instead of an optimistic guess, so she knew her limit before an angry client discovered it for her.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يقبل حسب الشعور لا الحساب",
            en: "A lawyer who accepts based on feeling, not calculation",
          },
          text: {
            ar: [
              "«أسبوعي مزدحم لكن أظن أنني أستطيع إدارة ملف إضافي.»",
              "«لم أراجع ملفاتي الحالية بدقة؛ أعرف أنها كثيرة لكن لم أحسب ساعاتها.»",
            ],
            en: [
              "\"My week is busy but I think I can manage one more file.\"",
              "\"I didn't review my current files precisely; I know they're a lot but never counted the hours.\"",
            ],
          },
          why: {
            ar: "«أظن أنني أستطيع» ليس رقمًا. دون حساب صادق، كل التزام جديد يبدو ممكنًا حتى تنكشف الحقيقة عند أول موعد تسليم فائت.",
            en: "\"I think I can\" is not a number. Without an honest count, every new commitment looks possible until the truth surfaces at the first missed deadline.",
          },
        },
      },
      { kind: "activity", id: "s.sm.01.a1", activityId: "act.sm.01.1", mode: "quick" },
      { kind: "activity", id: "s.sm.01.a2", activityId: "act.sm.01.2", mode: "guided" },
      { kind: "activity", id: "s.sm.01.a3", activityId: "act.sm.01.3", mode: "guided" },
      { kind: "activity", id: "s.sm.01.a4", activityId: "act.sm.01.4", mode: "independent" },
      { kind: "activity", id: "s.sm.01.a5", activityId: "act.sm.01.5", mode: "independent" },
      { kind: "summary", id: "s.sm.01.summary", summaryCardId: "card.sm.01" },
      {
        kind: "apply_tomorrow",
        id: "s.sm.01.apply",
        task: {
          ar: "احسب اليوم طاقتك الحقيقية المتبقية لهذا الأسبوع بثلاثة أرقام: المعلن، المقتطع، المتبقي.",
          en: "Today, calculate your real remaining capacity for this week in three numbers: declared, subtracted, remaining.",
        },
        detail: {
          ar: "إن كان الرقم المتبقي سالبًا أو قريبًا من الصفر، أخبر من يلزم قبل قبول أي شيء جديد.",
          en: "If the remaining number is negative or near zero, tell whoever needs to know before accepting anything new.",
        },
      },
      {
        kind: "next_mission",
        id: "s.sm.01.next",
        teaser: {
          ar: "عرفت طاقتك الحقيقية. لكن ليست كل مهمة تستحق مكانًا فيها بالقدر نفسه. الوحدة القادمة: كيف تفرز ما هو عاجل فعلاً عمّا هو طارئ شخص آخر.",
          en: "You know your real capacity. But not every task deserves an equal share of it. Next unit: sorting what's genuinely urgent from what's someone else's emergency.",
        },
      },
    ],
    activities: [
      {
        id: "act.sm.01.1",
        kind: "multiple_choice",
        skillId: "skill.time-priority-management",
        stage: 1,
        context: {
          ar: [
            "أنت محامٍ في مكتب متوسط الحجم. أسبوعك القادم يحوي جلسة استماع، مراجعة عقد بيع أسهم لشركة الزيتون للاستثمار، وثلاثة اجتماعات داخلية ثابتة.",
            "زميلك يسألك: هل يمكنك أن تتولى مذكرة عاجلة لعميل جديد خلال يومين؟",
          ],
          en: [
            "You are a lawyer at a mid-sized firm. Next week holds a hearing, a share-sale contract review for Al-Zaytoun Investment, and three fixed internal meetings.",
            "A colleague asks: can you take on an urgent memo for a new client within two days?",
          ],
        },
        prompt: {
          ar: "ما أول شيء يجب أن تفعله قبل أن تجيب؟",
          en: "What should you do first, before answering?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "توافق فورًا لأن رفض الزملاء يبدو غير تعاوني.",
              en: "Agree immediately, since refusing colleagues seems uncooperative.",
            },
            rationale: {
              ar: "الموافقة دون معرفة طاقتك الحقيقية تعني التزامًا أعمى؛ قد تكتشف لاحقًا أن الساعات غير موجودة أصلاً.",
              en: "Agreeing without knowing your real capacity is a blind commitment; you may later discover the hours simply don't exist.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "تحسب سريعًا ساعاتك المتاحة هذا الأسبوع بعد التزاماتك الثابتة والحالية، ثم تجيب.",
              en: "Quickly calculate your available hours this week after fixed and current commitments, then answer.",
            },
            correct: true,
            rationale: {
              ar: "هذا هو الترتيب الصحيح: رقم صادق قبل أي وعد. من دونه لا تعرف إن كان القبول ممكنًا فعلاً أو سيكلّف ملفًا آخر.",
              en: "This is the right order: an honest number before any promise. Without it you don't know whether accepting is real or costs another file.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "ترفض فورًا دون النظر في التفاصيل لأن أسبوعك يبدو ممتلئًا.",
              en: "Refuse immediately without checking details, since your week looks full.",
            },
            rationale: {
              ar: "رفض بلا حساب دقيق قد يضيّع فرصة كانت ممكنة فعلاً لو حسبت الساعات المتبقية بدقة.",
              en: "Refusing without a precise count may waste a chance that was genuinely possible had you counted the remaining hours.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "تطلب من الزميل تفاصيل المذكرة أولاً قبل أي شيء آخر.",
              en: "Ask the colleague for the memo's details first, before anything else.",
            },
            rationale: {
              ar: "التفاصيل مفيدة لاحقًا، لكنها لا تجيب السؤال الأهم: هل تملك الساعات أصلاً بغض النظر عن طبيعة المهمة.",
              en: "Details help later, but they don't answer the more important question: whether you have the hours at all, regardless of the task's nature.",
            },
          },
        ],
      },
      {
        id: "act.sm.01.2",
        kind: "ordering",
        skillId: "skill.time-priority-management",
        stage: 1,
        prompt: {
          ar: "رتّب خطوات حساب طاقتك الحقيقية بالترتيب الصحيح.",
          en: "Order the steps of calculating your real capacity correctly.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the order number from a dropdown beside each step instead of dragging.",
        },
        hint: {
          ar: "ابدأ بالساعات المعلنة وانتهِ بالمقارنة الصادقة.",
          en: "Start with declared hours and end with the honest comparison.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "احسب ساعات أسبوعك المعلنة إجمالاً.",
              en: "Calculate your total declared weekly hours.",
            },
            rationale: {
              ar: "نقطة البداية؛ الرقم النظري الذي يظهر في التقويم.",
              en: "The starting point; the theoretical figure your calendar shows.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "اخصم الاجتماعات الثابتة والإدارة الداخلية والمكالمات غير المجدولة المتوقعة.",
              en: "Subtract fixed meetings, internal admin, and expected unscheduled calls.",
            },
            rationale: {
              ar: "هذا يكشف طاقتك النظرية المتاحة للعمل الفعلي، لا الرقم الكامل.",
              en: "This reveals your theoretical available capacity for real work, not the full figure.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "راجع ملفاتك القائمة وقدّر ساعاتها بصدق، ملفًا ملفًا.",
              en: "Review your current files and estimate their hours honestly, file by file.",
            },
            rationale: {
              ar: "التقدير التقريبي المتفائل يخفي الفجوة الحقيقية؛ المراجعة الدقيقة تكشفها.",
              en: "Optimistic rough guessing hides the real gap; a precise review exposes it.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "قارن الرقمين، واعتبر الفرق سقفك الحقيقي لأي التزام جديد.",
              en: "Compare the two numbers, and treat the difference as your real ceiling for any new commitment.",
            },
            rationale: {
              ar: "الخطوة الأخيرة لأنها القرار المبني على كل ما سبق، لا على الشعور العام بالانشغال.",
              en: "Last, because it is the decision built on everything before it, not a general feeling of busyness.",
            },
          },
        ],
      },
      {
        id: "act.sm.01.3",
        kind: "categorization",
        skillId: "skill.time-priority-management",
        stage: 1,
        prompt: {
          ar: "صنّف كل بند: هل يُقتطع من طاقتك تلقائيًا أم يمثّل التزامًا يجب حسابه ملفًا بملف؟",
          en: "Sort each item: is it automatically subtracted from your capacity, or a commitment that needs file-by-file calculation?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «يُقتطع تلقائيًا» / «يُحسب ملفًا بملف» أسفل كل بند بدل السحب.",
          en: "Choose \"Auto-subtracted\" / \"Calculated file-by-file\" from buttons under each item instead of dragging.",
        },
        buckets: [
          { id: "auto", label: { ar: "يُقتطع تلقائيًا", en: "Auto-subtracted" } },
          { id: "file", label: { ar: "يُحسب ملفًا بملف", en: "Calculated file-by-file" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "اجتماع الفريق الأسبوعي الثابت.",
              en: "The fixed weekly team meeting.",
            },
            bucketId: "auto",
            rationale: {
              ar: "التزام متكرر معروف مسبقًا، يُخصم دفعة واحدة من الأسبوع بأكمله.",
              en: "A recurring, known-in-advance commitment, subtracted once for the whole week.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "صياغة مذكرة دفاع لعميل التوريدات.",
              en: "Drafting a defence memo for the supply client.",
            },
            bucketId: "file",
            rationale: {
              ar: "عمل فعلي على ملف محدد، يحتاج تقديرًا صادقًا خاصًا به لا رقمًا عامًا.",
              en: "Real work on a specific file, needing its own honest estimate, not a generic figure.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "الرد على مكالمات العملاء غير المجدولة المتوقعة يوميًا.",
              en: "Responding to daily expected unscheduled client calls.",
            },
            bucketId: "auto",
            rationale: {
              ar: "نمط متكرر يمكن تقدير متوسطه وخصمه مسبقًا كجزء ثابت من كل أسبوع.",
              en: "A recurring pattern whose average can be estimated and subtracted in advance as a fixed weekly share.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "مراجعة عقد بيع الأسهم لشركة الزيتون للاستثمار.",
              en: "Reviewing the share-sale contract for Al-Zaytoun Investment.",
            },
            bucketId: "file",
            rationale: {
              ar: "ملف محدد بنطاق عمل واضح، يُحسب على حدة ضمن الساعات الملتزم بها.",
              en: "A specific file with a defined scope, calculated separately within committed hours.",
            },
          },
        ],
      },
      {
        id: "act.sm.01.4",
        kind: "short_written",
        skillId: "skill.time-priority-management",
        secondarySkillIds: ["skill.overcoming-avoidance"],
        stage: 1,
        grading: "ai_rubric",
        rubricId: "rubric.self-management-written.v1",
        weight: 2,
        minChars: 180,
        context: {
          ar: [
            "أسبوعك القادم: ١٢ ساعة اجتماعات ثابتة وإدارة، وملفان قائمان يحتاجان فعليًا ٢٦ ساعة حسب مراجعتك الصادقة لهما.",
            "أسبوعك المعلن ٤٥ ساعة. زميل يطلب توليك مراجعة عاجلة تحتاج ٨ ساعات تقريبًا.",
          ],
          en: [
            "Your coming week: 12 hours of fixed meetings and admin, and two live files genuinely needing 26 hours by your honest review.",
            "Your declared week is 45 hours. A colleague asks you to take on an urgent review needing roughly 8 hours.",
          ],
        },
        prompt: {
          ar: "اكتب حسابًا موجزًا (٥٠-٨٠ كلمة) لطاقتك الحقيقية وقرارك بشأن الطلب، مع رقم واضح.",
          en: "Write a brief calculation (50-80 words) of your real capacity and your decision on the request, with a clear number.",
        },
        modelAnswer: {
          ar: [
            "«طاقتي المعلنة ٤٥ ساعة، منها ١٢ ساعة ثابتة، فتبقى ٣٣ ساعة عمل فعلي.»",
            "«ملفاي الحاليان يحتاجان ٢٦ ساعة، فطاقتي الحقيقية المتبقية ٧ ساعات فقط.»",
            "«يمكنني تولي المراجعة العاجلة (٨ ساعات) بهامش ضيق جدًا فقط، وسأخبر الزميل أنني سأحتاج إلى تأجيل مهمة إدارية بسيطة لتغطية الفارق.»",
          ],
          en: [
            "\"My declared capacity is 45 hours, of which 12 are fixed, leaving 33 hours of real work.\"",
            "\"My two current files need 26 hours, so my real remaining capacity is only 7 hours.\"",
            "\"I can take the urgent review (8 hours) only with a very tight margin, and I'll tell my colleague I'll need to push back a minor admin task to cover the gap.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«أسبوعي مزدحم لكن أعتقد أنني أستطيع إضافة المراجعة العاجلة.»"],
            en: ["\"My week is busy but I think I can add the urgent review.\""],
          },
          whatIsWrong: {
            ar: "لا رقم محدد لطاقة متبقية ولا اعتراف بأن قبول المهمة يعني تأجيل شيء آخر؛ «أعتقد» ليس حسابًا صادقًا.",
            en: "No specific remaining-capacity figure, and no admission that accepting means delaying something else; \"I think\" is not an honest calculation.",
          },
        },
      },
      {
        id: "act.sm.01.5",
        kind: "reflection",
        skillId: "skill.time-priority-management",
        stage: 1,
        grading: "self_report",
        prompt: {
          ar: "استرجع أسبوعًا وعدت فيه بأكثر مما استطعت تسليمه فعلاً. ما الرقم الذي كنت تتجاهله وقتها؟",
          en: "Recall a week you promised more than you actually delivered. What number were you ignoring at the time?",
        },
        followUp: {
          ar: "لو حسبت طاقتك الحقيقية صباح ذلك اليوم، ماذا كنت لتقول لمن طلب منك المهمة الإضافية؟",
          en: "If you had calculated your real capacity that morning, what would you have said to whoever asked for the extra task?",
        },
      },
    ],
    summaryCard: {
      id: "card.sm.01",
      title: {
        ar: "الرقم الصادق قبل أي وعد",
        en: "The Honest Number Before Any Promise",
      },
      whatYouLearned: {
        ar: [
          "طاقتك الحقيقية هي الساعات المعلنة ناقص الالتزامات الثابتة وساعات ملفاتك القائمة فعلاً.",
          "التقدير المتفائل تجنّب لرقم مزعج، لا إدارة وقت حقيقية.",
          "الفجوة بين الساعات المعلنة والحقيقية هي ما يقرر إن كان قبول التزام جديد ممكنًا.",
        ],
        en: [
          "Your real capacity is declared hours minus fixed commitments and the hours your current files genuinely need.",
          "Optimistic estimating is avoidance of an uncomfortable number, not real time management.",
          "The gap between declared and real hours is what decides whether a new commitment is actually possible.",
        ],
      },
      framework: {
        name: {
          ar: "حساب الطاقة: المعلن · المقتطع · الملتزم به · الحقيقي",
          en: "The Capacity Count: Declared · Subtracted · Committed · Real",
        },
        steps: [
          { ar: "احسب ساعاتك المعلنة أسبوعيًا.", en: "Calculate your declared weekly hours." },
          { ar: "اخصم الالتزامات الثابتة والمتكررة.", en: "Subtract fixed and recurring commitments." },
          { ar: "راجع ملفاتك القائمة ملفًا بملف بصدق.", en: "Review current files file-by-file, honestly." },
          { ar: "قارن الرقمين قبل قبول أي شيء جديد.", en: "Compare both numbers before accepting anything new." },
        ],
      },
      rememberThis: {
        ar: "من يخطط بساعات لا يملكها يكتشف النقص عند أول موعد تسليم فائت.",
        en: "Whoever plans with hours he doesn't have discovers the gap at the first missed deadline.",
      },
      useItTomorrow: {
        ar: "قبل نهاية هذا الأسبوع، احسب طاقتك الحقيقية على ورقة واحدة، وقارنها بما التزمت به فعلاً.",
        en: "Before this week ends, calculate your real capacity on one sheet, and compare it to what you've actually committed to.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.four-thousand-weeks", "src.your-brain-at-work"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 02 — Urgent, Important, and Someone Else's Emergency
  // =========================================================================
  {
    id: "unit.sm.02",
    chapterId: "ch.sm.planning-your-week",
    order: 2,
    title: {
      ar: "العاجل والمهم وطارئ شخص آخر",
      en: "Urgent, Important, and Someone Else's Emergency",
    },
    subtitle: {
      ar: "كل رسالة تبدأ بكلمة «عاجل» ليست عاجلة عليك؛ بعضها تأخير شخص آخر يُعاد تغليفه باسمك",
      en: "Not every message opening with \"urgent\" is urgent for you; some are someone else's delay, repackaged with your name on it.",
    },
    primarySkillId: "skill.time-priority-management",
    skillIds: ["skill.time-priority-management", "skill.emotional-intelligence"],
    stage: 2,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.sm.02.hook",
        text: {
          ar: "رسالة من زميل: «عاجل جدًا، أحتاج ردك خلال ساعة.» لكن الموعد الفعلي بعد أسبوعين. من يقرر ما هو عاجل، أنت أم من أرسل الرسالة؟",
          en: "A message from a colleague: \"Very urgent, need your reply within the hour.\" But the real deadline is two weeks away. Who decides what's urgent — you, or whoever sent the message?",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.sm.02.why",
        text: {
          ar: "من يعامل كل طلب بوصفه عاجلاً يفقد قدرته على حماية وقته لما هو مهم فعلاً. النتيجة أن تأخير شخص آخر في التخطيط يصبح أزمتك أنت.",
          en: "Whoever treats every request as urgent loses the ability to protect time for what actually matters. The result: someone else's planning delay becomes your crisis.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.sm.02.goals",
        goals: {
          ar: [
            "أن تميّز بين العاجل الفعلي والمهم غير العاجل وطارئ شخص آخر المُعاد تسميته.",
            "أن تسأل سؤالاً واحدًا يكشف الموعد الحقيقي قبل أن تعيد ترتيب يومك.",
            "أن تستجيب بلا رفض ولا استسلام فوري حين يتضح أن الطلب ليس عاجلاً فعلاً.",
          ],
          en: [
            "Distinguish genuine urgency from important-but-not-urgent work and from someone else's relabeled emergency.",
            "Ask one question that reveals the real deadline before rearranging your day.",
            "Respond without either refusing outright or caving instantly once it's clear a request isn't actually urgent.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.sm.02.lesson",
        title: {
          ar: "ثلاث خانات لا خانتان",
          en: "Three boxes, not two",
        },
        body: {
          ar: [
            "أكثر المحامين يفكرون بخانتين فقط: عاجل وغير عاجل. لكن هناك خانة ثالثة مخفية: طلب صيغ كعاجل لأن صاحبه أجّل التخطيط له، لا لأن موعده الحقيقي قريب.",
            "العاجل الفعلي له موعد خارجي صلب: جلسة محكمة، مهلة نظامية، أو التزام تعاقدي بتاريخ محدد لا يمكن تحريكه.",
            "المهم غير العاجل يخدم هدفًا حقيقيًا لكن دون موعد ضاغط اليوم — يستحق وقتًا مجدولاً، لا تأجيلاً دائمًا لصالح كل ما يبدو صاخبًا.",
            "طارئ شخص آخر يُعرف بعلامة واحدة: كلمة «عاجل» بلا سبب خارجي صلب، غالبًا لأن صاحب الطلب أجّله هو، لا لأن العالم يفرضه اليوم.",
            "السؤال الذي يكشف الفرق بسرعة: «ما الذي يحدث فعلاً إن تأخر هذا يومًا واحدًا؟» إجابة صادقة عليه تفرز الخانات الثلاث فورًا.",
          ],
          en: [
            "Most lawyers think in only two boxes: urgent and not urgent. But there's a hidden third box: a request framed as urgent because whoever sent it delayed planning, not because its real deadline is near.",
            "Genuine urgency has a hard external deadline: a court hearing, a statutory deadline, or a contractual date that cannot move.",
            "Important-but-not-urgent serves a real goal but carries no pressing deadline today — it deserves scheduled time, not permanent postponement for whatever seems loud.",
            "Someone else's emergency has one telltale sign: the word \"urgent\" with no hard external cause, usually because the requester delayed it himself, not because the world demands it today.",
            "The question that reveals the difference fast: \"What actually happens if this slips by one day?\" An honest answer sorts the three boxes immediately.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.sm.02.visual",
        title: {
          ar: "ثلاث خانات للطلب الوارد",
          en: "Three boxes for an incoming request",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "عاجل فعلاً", en: "Genuinely urgent" },
            detail: {
              ar: "موعد خارجي صلب لا يتحرك: جلسة، مهلة نظامية، بند تعاقدي.",
              en: "A hard external deadline that can't move: a hearing, a statutory deadline, a contract term.",
            },
            tone: "positive",
          },
          {
            label: { ar: "مهم غير عاجل", en: "Important, not urgent" },
            detail: {
              ar: "يخدم هدفًا حقيقيًا بلا موعد ضاغط اليوم — يستحق وقتًا مجدولاً لا تأجيلاً دائمًا.",
              en: "Serves a real goal with no pressing deadline today — deserves scheduled time, not permanent postponement.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "طارئ شخص آخر", en: "Someone else's emergency" },
            detail: {
              ar: "كلمة «عاجل» بلا موعد خارجي صلب — غالبًا تأخير تخطيط شخص آخر يُعاد تسميته باسمك.",
              en: "The word \"urgent\" with no hard external deadline — usually someone else's planning delay, relabeled with your name.",
            },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.sm.02.worked",
        strong: {
          label: {
            ar: "محامٍ يسأل قبل أن يعيد ترتيب يومه",
            en: "A lawyer who asks before rearranging his day",
          },
          text: {
            ar: [
              "«رسالتك تقول عاجل — هل هناك موعد جلسة أو مهلة نظامية غدًا، أم أن الموعد أبعد من ذلك؟»",
              "بعد أن عرف أن الموعد الفعلي بعد أسبوعين: «أستطيع البدء بها بعد غد ضمن جدول ملفاتي الحالية؛ هل هذا يناسبك؟»",
            ],
            en: [
              "\"Your message says urgent — is there a hearing or statutory deadline tomorrow, or is the real date further off?\"",
              "After learning the real deadline is two weeks away: \"I can start it the day after tomorrow within my current file schedule; does that work for you?\"",
            ],
          },
          why: {
            ar: "سؤال واحد كشف أن «العاجل» كان تأخير تخطيط الزميل، لا موعدًا خارجيًا. الاستجابة حمت جدوله دون رفض المساعدة.",
            en: "One question revealed the \"urgency\" was the colleague's own planning delay, not an external deadline. The response protected his schedule without refusing to help.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يعيد ترتيب يومه فور كلمة عاجل",
            en: "A lawyer who rearranges his day at the mere word \"urgent\"",
          },
          text: {
            ar: [
              "«حسنًا، سأترك ما بيدي وأبدأ بها الآن.»",
              "لم يسأل عن الموعد الفعلي، ولا عن أثر ذلك على الملفات الأخرى التي كان يعمل عليها.",
            ],
            en: [
              "\"Okay, I'll drop what I'm doing and start now.\"",
              "He never asked about the real deadline, nor about the effect on the other files he was already working on.",
            ],
          },
          why: {
            ar: "الاستسلام الفوري لكلمة «عاجل» دون سؤال يجعل كل طلب صاخب يتصدر جدوله، بينما تتأخر ملفات ذات مواعيد حقيقية أقرب فعلاً.",
            en: "Instant surrender to the word \"urgent\" with no question means every loud request jumps the queue, while files with genuinely nearer deadlines fall behind.",
          },
        },
      },
      { kind: "activity", id: "s.sm.02.a1", activityId: "act.sm.02.1", mode: "quick" },
      { kind: "activity", id: "s.sm.02.a2", activityId: "act.sm.02.2", mode: "guided" },
      { kind: "activity", id: "s.sm.02.a3", activityId: "act.sm.02.3", mode: "guided" },
      { kind: "activity", id: "s.sm.02.a4", activityId: "act.sm.02.4", mode: "independent" },
      { kind: "activity", id: "s.sm.02.a5", activityId: "act.sm.02.5", mode: "independent" },
      { kind: "summary", id: "s.sm.02.summary", summaryCardId: "card.sm.02" },
      {
        kind: "apply_tomorrow",
        id: "s.sm.02.apply",
        task: {
          ar: "اليوم، عند أي طلب يوصف بالعاجل، اسأل عن الموعد الخارجي الفعلي قبل الرد.",
          en: "Today, for any request labeled urgent, ask for the real external deadline before responding.",
        },
        detail: {
          ar: "دوّن كم من هذه الطلبات كان عاجلاً فعلاً، وكم كان تأخير شخص آخر.",
          en: "Note how many of these requests were genuinely urgent, and how many were someone else's delay.",
        },
      },
      {
        kind: "next_mission",
        id: "s.sm.02.next",
        teaser: {
          ar: "تعرف الآن كيف تفرز الطلبات. الوحدة القادمة: كيف تحوّل هذا الفرز إلى خطة أسبوعية لا تنهار عند أول يوم اثنين مزدحم.",
          en: "You now know how to sort requests. Next unit: turning that sorting into a weekly plan that doesn't collapse on the first busy Monday.",
        },
      },
    ],
    activities: [
      {
        id: "act.sm.02.1",
        kind: "best_response",
        skillId: "skill.time-priority-management",
        secondarySkillIds: ["skill.emotional-intelligence"],
        stage: 2,
        context: {
          ar: [
            "تعمل على مذكرة دفاع لشركة نجم الخليج للتوريدات، وموعد تقديمها للمحكمة غدًا صباحًا.",
            "في المنتصف، يرسل لك زميل رسالة: «عاجل جدًا، أحتاج مراجعتك على عقد خلال الساعة القادمة.»",
          ],
          en: [
            "You're working on a defence memo for Najm Al-Khaleej Supplies, due at court tomorrow morning.",
            "Midway through, a colleague messages: \"Very urgent, I need your review on a contract within the next hour.\"",
          ],
        },
        prompt: {
          ar: "ما أفضل رد؟",
          en: "What is the best response?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«حسنًا، سأتوقف عن المذكرة وأراجع العقد الآن.»",
              en: "\"Okay, I'll pause the memo and review the contract now.\"",
            },
            rationale: {
              ar: "يخاطر بموعد محكمة حقيقي وثابت مقابل طلب لم يُتحقق من موعده الفعلي بعد.",
              en: "Risks a real, fixed court deadline for a request whose actual deadline hasn't even been verified yet.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«أعمل الآن على مذكرة موعدها غدًا صباحًا. هل عقدك له موعد توقيع اليوم، أم يمكن أن أراجعه بعد الجلسة؟»",
              en: "\"I'm on a memo due tomorrow morning. Does your contract have a signing deadline today, or can I review it after the hearing?\"",
            },
            correct: true,
            rationale: {
              ar: "يوضح التزامه الحقيقي، ويسأل عن الموعد الفعلي قبل أي قرار — يفرز العاجل الحقيقي دون رفض المساعدة.",
              en: "States his real commitment, and asks for the actual deadline before deciding — sorting genuine urgency without refusing to help.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«لا أستطيع، أنا مشغول.»",
              en: "\"I can't, I'm busy.\"",
            },
            rationale: {
              ar: "رفض بلا معلومات؛ قد يكون الطلب فعلاً عاجلاً بموعد خارجي صلب لم يُستكشف.",
              en: "A refusal with no information; the request might genuinely be urgent with a real external deadline that was never explored.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«سأنظر فيه لاحقًا هذا الأسبوع.»",
              en: "\"I'll look at it sometime later this week.\"",
            },
            rationale: {
              ar: "تأجيل غامض دون سؤال أو التزام واضح يترك الزميل بلا جواب فعلي، وقد يكون طلبه عاجلاً فعلاً.",
              en: "A vague postponement with no question or clear commitment leaves the colleague with no real answer, and his request may in fact be genuinely urgent.",
            },
          },
        ],
      },
      {
        id: "act.sm.02.2",
        kind: "matching",
        skillId: "skill.time-priority-management",
        stage: 2,
        prompt: {
          ar: "طابق كل عبارة واردة بالخانة الأقرب لها.",
          en: "Match each incoming statement to the closest box.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الخانة المطابقة من قائمة منسدلة بجانب كل عبارة بدل السحب.",
          en: "Pick the matching box number from a dropdown beside each statement instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "«جلسة الاستماع محددة غدًا التاسعة صباحًا.»", en: "\"The hearing is set for tomorrow at 9am.\"" },
            right: { ar: "عاجل فعلاً", en: "Genuinely urgent" },
            rationale: {
              ar: "موعد خارجي صلب لا يتحرك — لا مجال لتأجيله.",
              en: "A hard external deadline that can't move — no room to postpone.",
            },
          },
          {
            id: "p2",
            left: { ar: "«نريد مراجعة سياسة العقود الداخلية قبل نهاية الربع.»", en: "\"We want the internal contract policy reviewed before quarter-end.\"" },
            right: { ar: "مهم غير عاجل", en: "Important, not urgent" },
            rationale: {
              ar: "هدف حقيقي بموعد بعيد نسبيًا؛ يستحق جدولة لا تأجيلاً دائمًا.",
              en: "A real goal with a relatively distant date; deserves scheduling, not permanent postponement.",
            },
          },
          {
            id: "p3",
            left: { ar: "«عاجل جدًا، أحتاج رأيك خلال ساعة» بلا أي موعد خارجي مذكور.", en: "\"Very urgent, need your opinion within the hour\" with no external deadline mentioned." },
            right: { ar: "طارئ شخص آخر", en: "Someone else's emergency" },
            rationale: {
              ar: "كلمة عاجل بلا سبب خارجي صلب غالبًا تأخير تخطيط الطالب، لا موعدًا حقيقيًا.",
              en: "The word urgent with no hard external cause is usually the requester's own planning delay, not a real deadline.",
            },
          },
          {
            id: "p4",
            left: { ar: "«المهلة النظامية للطعن تنتهي بعد ثلاثة أيام.»", en: "\"The statutory appeal deadline ends in three days.\"" },
            right: { ar: "عاجل فعلاً", en: "Genuinely urgent" },
            rationale: {
              ar: "مهلة نظامية صلبة بموعد محدد — لا مجال للتفاوض حول تأجيله.",
              en: "A hard statutory deadline with a fixed date — no room to negotiate a delay.",
            },
          },
        ],
      },
      {
        id: "act.sm.02.3",
        kind: "true_false",
        skillId: "skill.time-priority-management",
        stage: 2,
        prompt: {
          ar: "«كل طلب يصفه صاحبه بأنه عاجل يستحق إعادة ترتيب يومك فورًا.»",
          en: "\"Every request its sender calls urgent deserves rearranging your day immediately.\"",
        },
        options: [
          {
            id: "true",
            label: { ar: "صحيح", en: "True" },
            rationale: {
              ar: "غير صحيح. كثير من الطلبات توصف بالعاجلة لأن صاحبها أجّل التخطيط، لا لأن موعدها الحقيقي يفرض ذلك.",
              en: "Incorrect. Many requests are called urgent because the sender delayed planning, not because their real deadline demands it.",
            },
          },
          {
            id: "false",
            label: { ar: "خطأ", en: "False" },
            correct: true,
            rationale: {
              ar: "صحيح. وصف الطلب بأنه عاجل لا يجعله كذلك؛ سؤال واحد عن الموعد الحقيقي يكشف إن كان يستحق إعادة الترتيب فعلاً.",
              en: "Correct. Calling a request urgent doesn't make it so; one question about the real deadline reveals whether it truly deserves rearranging your day.",
            },
          },
        ],
      },
      {
        id: "act.sm.02.4",
        kind: "fill_blank",
        skillId: "skill.time-priority-management",
        stage: 2,
        prompt: {
          ar: "أكمل السؤال الذي يفرز العاجل الفعلي عن طارئ شخص آخر.",
          en: "Complete the question that sorts genuine urgency from someone else's emergency.",
        },
        hint: {
          ar: "السؤال يكشف الأثر الحقيقي للتأخير، لا شعور صاحب الطلب.",
          en: "The question reveals the real cost of delay, not the requester's feeling.",
        },
        template: {
          ar: "السؤال الأهم عند استلام طلب «عاجل»: «ما الذي يحدث فعلاً إن {{0}} هذا الطلب يومًا واحدًا، وهل هناك {{1}} فعلي يفرض التاريخ؟»",
          en: "The key question on receiving an \"urgent\" request: \"What actually happens if this request {{0}} by one day, and is there a real {{1}} forcing the date?\"",
        },
        blanks: [
          {
            id: "b1",
            options: [
              { ar: "تأخر", en: "is delayed" },
              { ar: "سُرِّع", en: "is sped up" },
              { ar: "نُسي", en: "is forgotten" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "السؤال عن أثر التأخير هو ما يكشف العجلة الحقيقية من الوهمية.",
              en: "Asking about the effect of delay is what reveals real urgency from imagined.",
            },
          },
          {
            id: "b2",
            options: [
              { ar: "موعد خارجي صلب", en: "hard external deadline" },
              { ar: "شعور بالانزعاج", en: "a feeling of annoyance" },
              { ar: "رغبة شخصية", en: "a personal preference" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "الموعد الخارجي الصلب هو المعيار الموضوعي؛ الانزعاج أو الرغبة لا يحددان عجلة حقيقية.",
              en: "A hard external deadline is the objective standard; annoyance or preference doesn't establish real urgency.",
            },
          },
        ],
      },
      {
        id: "act.sm.02.5",
        kind: "reflection",
        skillId: "skill.time-priority-management",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع طلبًا وصفه صاحبه بأنه عاجل فأعدت ترتيب يومك من أجله. هل كان عاجلاً فعلاً؟",
          en: "Recall a request its sender called urgent, and you rearranged your day for it. Was it actually urgent?",
        },
        followUp: {
          ar: "ما السؤال الذي كان يمكن أن يكشف الحقيقة قبل أن تعيد الترتيب؟",
          en: "What question could have revealed the truth before you rearranged anything?",
        },
      },
    ],
    summaryCard: {
      id: "card.sm.02",
      title: {
        ar: "ثلاث خانات لا خانتان",
        en: "Three Boxes, Not Two",
      },
      whatYouLearned: {
        ar: [
          "كل طلب فيه ثلاث احتمالات: عاجل فعلاً، مهم غير عاجل، أو طارئ شخص آخر مُعاد تسميته.",
          "العاجل الفعلي له موعد خارجي صلب لا يتحرك؛ طارئ شخص آخر غالبًا لا موعد خارجيًا وراءه.",
          "سؤال واحد عن أثر التأخير يفرز الخانات الثلاث قبل أن تعيد ترتيب يومك.",
        ],
        en: [
          "Every request has three possibilities: genuinely urgent, important-but-not-urgent, or someone else's relabeled emergency.",
          "Genuine urgency has a hard external deadline that can't move; someone else's emergency usually has none.",
          "One question about the cost of delay sorts the three boxes before you rearrange your day.",
        ],
      },
      framework: {
        name: {
          ar: "الفرز الثلاثي: اسأل · تحقّق · استجب",
          en: "The Triple Sort: Ask · Verify · Respond",
        },
        steps: [
          { ar: "اسأل: ما الموعد الخارجي الحقيقي وراء هذا الطلب؟", en: "Ask: what's the real external deadline behind this request?" },
          { ar: "تحقّق: هل الأثر الفعلي للتأخير يوم واحد يبرر إعادة الترتيب؟", en: "Verify: does the real cost of a one-day delay justify rearranging?" },
          { ar: "استجب: بلا رفض فوري ولا استسلام فوري، بردّ يوضح التزامك الحقيقي.", en: "Respond: neither instant refusal nor instant capitulation, with a reply stating your real commitment." },
        ],
      },
      rememberThis: {
        ar: "كلمة «عاجل» لا تصنع موعدًا خارجيًا؛ سؤال واحد يكشف إن كان الأمر عاجلاً فعلاً أم تأخير شخص آخر.",
        en: "The word \"urgent\" doesn't create an external deadline; one question reveals whether it's real or someone else's delay.",
      },
      useItTomorrow: {
        ar: "في المرة القادمة التي تسمع فيها «عاجل»، اسأل عن الموعد الخارجي الفعلي قبل أن تحرك جدولك.",
        en: "Next time you hear \"urgent,\" ask for the real external deadline before you move your schedule.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.four-thousand-weeks", "src.the-antidote"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 03 — A Plan That Survives Monday
  // =========================================================================
  {
    id: "unit.sm.03",
    chapterId: "ch.sm.planning-your-week",
    order: 3,
    title: {
      ar: "خطة تصمد بعد الاثنين",
      en: "A Plan That Survives Monday",
    },
    subtitle: {
      ar: "الخطة المثالية بلا هامش تنهار عند أول اتصال طارئ؛ الخطة الواقعية تتوقعه",
      en: "A perfect plan with no slack collapses at the first emergency call; a realistic plan expects it.",
    },
    primarySkillId: "skill.time-priority-management",
    skillIds: ["skill.time-priority-management", "skill.resilience"],
    stage: 2,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.sm.03.hook",
        text: {
          ar: "خطتك ليوم الاثنين مثالية على الورق: كل ساعة محجوزة. الثلاثاء صباحًا، اتصال عميل طارئ يقلب كل شيء — ولم تترك مكانًا له.",
          en: "Your Monday plan is perfect on paper: every hour booked. Tuesday morning, an urgent client call upends everything — and you left it no room.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.sm.03.why",
        text: {
          ar: "خطة بلا هامش ليست خطة واقعية، بل توقّع بأن الأسبوع سيمضي دون مفاجآت. في المحاماة، المفاجأة هي القاعدة لا الاستثناء.",
          en: "A plan with no slack isn't realistic — it's a bet that the week will pass without surprises. In law, surprise is the rule, not the exception.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.sm.03.goals",
        goals: {
          ar: [
            "أن تبني خطة أسبوعية تخصص وقتًا واضحًا لكل ملف حسب أولويته الحقيقية.",
            "أن تترك هامشًا مقصودًا لما لا تستطيع توقعه، لا أن تملأ كل ساعة.",
            "أن تعيد ترتيب الخطة عند وقوع طارئ فعلي بدل التخلي عنها بالكامل.",
          ],
          en: [
            "Build a weekly plan that allocates clear time to each file according to its real priority.",
            "Leave deliberate slack for what you cannot predict, instead of filling every hour.",
            "Rearrange the plan when a real emergency hits, instead of abandoning it entirely.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.sm.03.lesson",
        title: {
          ar: "الهامش ليس كسلاً",
          en: "Slack is not laziness",
        },
        body: {
          ar: [
            "الخطأ الشائع: بناء خطة تملأ كل ساعة متاحة بمهام محددة. تبدو منظمة، لكنها تفترض أسبوعًا لن يحدث فيه أي طارئ — وهذا لا يحدث أبدًا في الممارسة الفعلية.",
            "الخطة الواقعية تخصص نحو ٧٠٪ فقط من الساعات المتاحة لمهام محددة مسبقًا، وتترك الباقي هامشًا مقصودًا لما لا يمكن توقعه.",
            "الهامش ليس وقت فراغ ولا كسلًا؛ هو اعتراف صادق بأن جلسة تُؤجَّل، أو عميلًا يتصل فجأة، أو زميلًا يطلب مساعدة عاجلة، كلها أمور تحدث كل أسبوع تقريبًا.",
            "حين يقع طارئ فعلي، الخطوة الصحيحة إعادة ترتيب البنود ضمن الهامش المتاح، لا التخلي عن الخطة بأكملها والعمل بشكل عشوائي بقية الأسبوع.",
            "ترتيب المهام يجب أن يعكس الأولوية الحقيقية لا ترتيب وصولها؛ الملف الأهم يأخذ أفضل ساعات تركيزك، لا أول ما وصل بريدك الإلكتروني.",
          ],
          en: [
            "The common mistake: building a plan that fills every available hour with specific tasks. It looks organized, but assumes a week with zero emergencies — which never actually happens in practice.",
            "A realistic plan allocates only about 70% of available hours to pre-set tasks, leaving the rest as deliberate slack for what can't be predicted.",
            "Slack is not idle time or laziness; it's an honest admission that a hearing gets postponed, a client calls unexpectedly, or a colleague needs urgent help — nearly every week.",
            "When a real emergency hits, the right move is rearranging items within the available slack, not abandoning the whole plan and working randomly for the rest of the week.",
            "Task order should reflect real priority, not arrival order; the most important file gets your best focus hours, not whatever landed first in your inbox.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.sm.03.visual",
        title: {
          ar: "بناء خطة تحتمل المفاجآت",
          en: "Building a plan that can take a surprise",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "خصص ٧٠٪ فقط", en: "Allocate only 70%" },
            detail: {
              ar: "لا تملأ كل ساعة متاحة؛ اترك الباقي هامشًا مقصودًا.",
              en: "Don't fill every available hour; leave the rest as deliberate slack.",
            },
            tone: "positive",
          },
          {
            label: { ar: "رتّب حسب الأولوية الحقيقية", en: "Order by real priority" },
            detail: {
              ar: "الملف الأهم يأخذ أفضل ساعات تركيزك، لا أول ما وصل.",
              en: "The most important file gets your best focus hours, not whatever arrived first.",
            },
            tone: "positive",
          },
          {
            label: { ar: "توقّع نوع الطارئ لا موعده", en: "Expect the type of emergency, not its timing" },
            detail: {
              ar: "لن تعرف متى، لكنك تعرف أن شيئًا ما سيقع تقريبًا كل أسبوع.",
              en: "You won't know when, but you know something will happen almost every week.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "عند وقوعه، أعد الترتيب لا التخلي", en: "When it hits, rearrange, don't abandon" },
            detail: {
              ar: "استخدم الهامش أولاً؛ إن لم يكفِ، أعد جدولة الأقل أولوية فقط.",
              en: "Use the slack first; if it's not enough, only reschedule the lowest-priority items.",
            },
            tone: "negative",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.sm.03.worked",
        strong: {
          label: {
            ar: "محامية تترك هامشًا مقصودًا",
            en: "A lawyer who leaves deliberate slack",
          },
          text: {
            ar: [
              "«لدي ٣٣ ساعة عمل فعلي هذا الأسبوع. أخصص ٢٣ ساعة لملفات محددة حسب أولويتها، وأترك ١٠ ساعات هامشًا موزعًا على الأيام.»",
              "الثلاثاء، اتصال عاجل من عميل: «أستخدم ساعتين من هامش اليوم لهذا الاتصال، وأكمل الخطة الأصلية دون تأخير الملفات الأهم.»",
            ],
            en: [
              "\"I have 33 real work hours this week. I allocate 23 to specific files by priority, and leave 10 as slack spread across the days.\"",
              "Tuesday, an urgent client call: \"I use two hours of today's slack for this call, and continue the original plan without delaying the most important files.\"",
            ],
          },
          why: {
            ar: "الهامش الموزّع مسبقًا امتص المفاجأة دون أن يهدد الملفات ذات الأولوية العليا؛ الخطة انحنت ولم تنكسر.",
            en: "The pre-allocated slack absorbed the surprise without threatening the highest-priority files; the plan bent instead of breaking.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يملأ كل ساعة",
            en: "A lawyer who fills every hour",
          },
          text: {
            ar: [
              "«جدولت كل ساعة من أسبوعي على مهام محددة، لأنني أريد إنجاز أكبر قدر ممكن.»",
              "الثلاثاء، اتصال عاجل من عميل يقلب الجدول بأكمله: «لا أعرف من أين آخذ الوقت، سأتأخر في كل شيء الآن.»",
            ],
            en: [
              "\"I scheduled every hour of my week with specific tasks, because I want to get as much done as possible.\"",
              "Tuesday, an urgent client call flips the whole schedule: \"I don't know where to find the time, I'll be late on everything now.\"",
            ],
          },
          why: {
            ar: "خطة بلا هامش تنهار عند أول مفاجأة، وينتقل التأخير لكل ملف بدل أن يمتصه هامش كان يمكن تخصيصه مسبقًا.",
            en: "A plan with no slack collapses at the first surprise, and the delay spreads to every file instead of being absorbed by slack that could have been set aside in advance.",
          },
        },
      },
      { kind: "activity", id: "s.sm.03.a1", activityId: "act.sm.03.1", mode: "quick" },
      { kind: "activity", id: "s.sm.03.a2", activityId: "act.sm.03.2", mode: "guided" },
      { kind: "activity", id: "s.sm.03.a3", activityId: "act.sm.03.3", mode: "guided" },
      { kind: "activity", id: "s.sm.03.a4", activityId: "act.sm.03.4", mode: "independent" },
      { kind: "activity", id: "s.sm.03.a5", activityId: "act.sm.03.5", mode: "independent" },
      { kind: "summary", id: "s.sm.03.summary", summaryCardId: "card.sm.03" },
      {
        kind: "apply_tomorrow",
        id: "s.sm.03.apply",
        task: {
          ar: "أعد النظر في خطة هذا الأسبوع الآن: هل خصصت هامشًا فعليًا، أم ملأت كل ساعة؟",
          en: "Review this week's plan right now: did you actually leave slack, or fill every hour?",
        },
        detail: {
          ar: "إن لم يكن هناك هامش، احذف بندًا واحدًا منخفض الأولوية لتفتح مساحة له.",
          en: "If there's no slack, cut one low-priority item to make room for it.",
        },
      },
      {
        kind: "next_mission",
        id: "s.sm.03.next",
        teaser: {
          ar: "خطتك الآن تصمد أمام المفاجآت العادية. لكن ماذا عن العمل الذي يحتاج تركيزًا عميقًا لا يحتمل أي مقاطعة؟ الوحدة القادمة تبدأ فصلاً جديدًا: حماية التركيز.",
          en: "Your plan now survives ordinary surprises. But what about work that needs deep, uninterrupted focus? The next unit opens a new chapter: protecting focus.",
        },
      },
    ],
    activities: [
      {
        id: "act.sm.03.1",
        kind: "multiple_select",
        skillId: "skill.time-priority-management",
        stage: 2,
        prompt: {
          ar: "أي من الممارسات التالية تجعل الخطة الأسبوعية أكثر قدرة على الصمود أمام المفاجآت؟ (اختر كل ما ينطبق)",
          en: "Which of the following practices make a weekly plan better able to survive surprises? (select all that apply)",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "ترك نحو ٣٠٪ من الساعات المتاحة بلا مهام محددة مسبقًا.",
              en: "Leaving roughly 30% of available hours unassigned to pre-set tasks.",
            },
            correct: true,
            rationale: {
              ar: "صحيح. هذا الهامش هو ما يمتص المفاجآت دون أن يهدد بقية الخطة.",
              en: "Correct. This slack is what absorbs surprises without threatening the rest of the plan.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "جدولة كل ساعة متاحة بمهمة محددة لضمان الإنتاجية القصوى.",
              en: "Scheduling every available hour with a specific task to guarantee maximum productivity.",
            },
            rationale: {
              ar: "خطأ شائع؛ يبدو منتجًا لكنه يفترض أسبوعًا بلا مفاجآت، وهو افتراض غير واقعي في الممارسة القانونية.",
              en: "A common mistake; it looks productive but assumes a week with no surprises — an unrealistic assumption in legal practice.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "ترتيب المهام حسب الأولوية الحقيقية للملف لا حسب ترتيب وصوله.",
              en: "Ordering tasks by the file's real priority, not by arrival order.",
            },
            correct: true,
            rationale: {
              ar: "صحيح. هذا يضمن أن أفضل ساعات التركيز تذهب لما يستحقها فعلاً، لا لأول رسالة وصلت.",
              en: "Correct. This ensures your best focus hours go to what actually deserves them, not whatever email arrived first.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "التخلي عن الخطة بأكملها فور وقوع أول طارئ والعمل بشكل عشوائي.",
              en: "Abandoning the whole plan the moment the first emergency hits and working randomly.",
            },
            rationale: {
              ar: "هذا يفقد فائدة الخطة كليًا؛ الأصح إعادة الترتيب ضمن الهامش المتاح لا التخلي التام.",
              en: "This loses the plan's entire value; the right move is rearranging within available slack, not total abandonment.",
            },
          },
        ],
      },
      {
        id: "act.sm.03.2",
        kind: "priority_ranking",
        skillId: "skill.time-priority-management",
        secondarySkillIds: ["skill.resilience"],
        stage: 2,
        prompt: {
          ar: "رتّب هذه البنود حسب الأولوية الحقيقية لتخصيص أفضل ساعات تركيزك هذا الأسبوع.",
          en: "Rank these items by real priority for allocating your best focus hours this week.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الأولوية من قائمة منسدلة بجانب كل بند بدل السحب.",
          en: "Pick the priority number from a dropdown beside each item instead of dragging.",
        },
        hint: {
          ar: "الموعد الخارجي الصلب والأثر على الموكّل يحددان الأولوية، لا ترتيب وصول الطلب.",
          en: "A hard external deadline and impact on the client set priority, not the order the request arrived in.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "صياغة مذكرة استئناف موعدها بعد يومين.",
              en: "Drafting an appeal memo due in two days.",
            },
            rationale: {
              ar: "موعد خارجي صلب وقريب جدًا — الأولوية الأولى بلا نقاش.",
              en: "A hard external deadline that's very close — first priority, without question.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "مراجعة عقد تأسيس شركة موعده الأسبوع القادم.",
              en: "Reviewing a company-formation contract due next week.",
            },
            rationale: {
              ar: "مهم وله موعد، لكنه أبعد من الاستئناف؛ يأخذ وقتًا مجدولاً بعده مباشرة.",
              en: "Important and has a deadline, but further off than the appeal; gets scheduled time right after it.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "الرد على استفسار داخلي من الإدارة عن سياسة عامة للمكتب.",
              en: "Responding to an internal management query about a general firm policy.",
            },
            rationale: {
              ar: "لا موعد خارجي ضاغط ولا أثر مباشر على عميل؛ يناسبه هامش الأسبوع لا وقتًا مخصصًا مبكرًا.",
              en: "No pressing external deadline and no direct client impact; fits the week's slack, not early dedicated time.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "قراءة نشرة قانونية عامة وصلت هذا الصباح.",
              en: "Reading a general legal bulletin that arrived this morning.",
            },
            rationale: {
              ar: "الأقل أولوية؛ مفيدة لكن بلا أي موعد أو أثر مباشر على أي ملف حالي.",
              en: "Lowest priority; useful, but with no deadline or direct impact on any current file.",
            },
          },
        ],
      },
      {
        id: "act.sm.03.3",
        kind: "find_mistake",
        skillId: "skill.time-priority-management",
        stage: 2,
        context: {
          ar: [
            "خطة أسبوعية كتبها محامٍ: كل ساعة من ٨ صباحًا حتى ٦ مساءً محجوزة لمهمة محددة، خمسة أيام متتالية، بلا أي فراغ.",
          ],
          en: [
            "A lawyer's weekly plan: every hour from 8am to 6pm booked with a specific task, five days straight, with no gaps at all.",
          ],
        },
        prompt: {
          ar: "ما الخلل الأساسي في هذه الخطة؟",
          en: "What is the main flaw in this plan?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "المهام مرتبة حسب الأولوية الخاطئة.",
              en: "The tasks are ordered by the wrong priority.",
            },
            rationale: {
              ar: "قد يكون الترتيب صحيحًا فعليًا؛ المشكلة هنا ليست في الترتيب بل في غياب أي هامش على الإطلاق.",
              en: "The ordering might actually be correct; the problem here isn't ordering but the total absence of any slack.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "لا يوجد أي هامش لامتصاص طارئ محتمل، فأي مفاجأة تهدد الخطة بأكملها.",
              en: "There's no slack at all to absorb a possible emergency, so any surprise threatens the entire plan.",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. خطة تملأ كل ساعة تفترض أسبوعًا بلا مفاجآت، وهذا لا يحدث في الممارسة القانونية الفعلية.",
              en: "Exactly. A plan that fills every hour assumes a week with no surprises, which never happens in real legal practice.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "المهام قليلة جدًا ولا تملأ اليوم بالكامل.",
              en: "There are too few tasks and they don't fill the whole day.",
            },
            rationale: {
              ar: "العكس هو الصحيح؛ المشكلة أن اليوم ممتلئ بالكامل بلا أي هامش متبقٍ.",
              en: "The opposite is true; the problem is the day is entirely full with no slack left at all.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "ساعات العمل المحددة (٨ صباحًا حتى ٦ مساءً) طويلة جدًا.",
              en: "The set work hours (8am to 6pm) are too long.",
            },
            rationale: {
              ar: "طول اليوم ليس محور المشكلة هنا؛ حتى يوم أقصر بلا هامش يواجه المشكلة نفسها عند أول طارئ.",
              en: "The day's length isn't the core issue here; even a shorter day with no slack faces the same problem at the first emergency.",
            },
          },
        ],
      },
      {
        id: "act.sm.03.4",
        kind: "short_written",
        skillId: "skill.time-priority-management",
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.self-management-written.v1",
        weight: 2,
        minChars: 180,
        context: {
          ar: [
            "طاقتك الحقيقية هذا الأسبوع ٣٢ ساعة، ولديك ثلاثة ملفات: استئناف موعده بعد يومين يحتاج ١٠ ساعات، وعقد تأسيس شركة موعده الأسبوع القادم يحتاج ٩ ساعات.",
            "والملف الثالث مراجعة سياسة داخلية بلا موعد ضاغط، تحتاج ٤ ساعات.",
          ],
          en: [
            "Your real capacity this week is 32 hours. You have three files: an appeal due in two days needing 10 hours, and a company-formation contract due next week needing 9 hours.",
            "The third file is an internal policy review with no pressing deadline, needing 4 hours.",
          ],
        },
        prompt: {
          ar: "اكتب خطة موجزة (٥٠-٨٠ كلمة) توزع الساعات على الملفات الثلاثة وتترك هامشًا واضحًا.",
          en: "Write a brief plan (50-80 words) allocating hours across the three files while leaving clear slack.",
        },
        modelAnswer: {
          ar: [
            "«أخصص ١٠ ساعات للاستئناف أولاً لقرب موعده، و٩ ساعات لعقد التأسيس بعده مباشرة.»",
            "«أخصص ٤ ساعات لمراجعة السياسة الداخلية في وقت متأخر بالأسبوع لأنها بلا موعد ضاغط.»",
            "«المجموع ٢٣ ساعة من ٣٢، فيتبقى ٩ ساعات هامشًا موزعًا على الأيام لأي طارئ.»",
          ],
          en: [
            "\"I allocate 10 hours to the appeal first, given its close deadline, and 9 hours to the formation contract right after.\"",
            "\"I allocate 4 hours to the internal policy review late in the week, since it has no pressing deadline.\"",
            "\"Total is 23 of 32 hours, leaving 9 hours of slack spread across the days for any emergency.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«سأعمل على الاستئناف والعقد وسياسة المكتب بالتوازي حسب ما يسمح الوقت.»"],
            en: ["\"I'll work on the appeal, the contract and the office policy in parallel as time allows.\""],
          },
          whatIsWrong: {
            ar: "لا أرقام ساعات محددة لأي ملف، ولا ترتيب واضح حسب الأولوية، ولا هامش مذكور صراحة — «حسب ما يسمح الوقت» ليس خطة.",
            en: "No specific hour figures for any file, no clear priority ordering, and no explicit slack — \"as time allows\" is not a plan.",
          },
        },
      },
      {
        id: "act.sm.03.5",
        kind: "reflection",
        skillId: "skill.time-priority-management",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع أسبوعًا انهارت خطته عند أول طارئ. كم كان الهامش المتروك فيها؟",
          en: "Recall a week whose plan collapsed at the first emergency. How much slack had you left in it?",
        },
        followUp: {
          ar: "لو خصصت ٣٠٪ من ساعاتك هامشًا مسبقًا، كيف كان الأسبوع سيختلف؟",
          en: "If you had set aside 30% of your hours as slack in advance, how would that week have been different?",
        },
      },
    ],
    summaryCard: {
      id: "card.sm.03",
      title: {
        ar: "خطة تنحني ولا تنكسر",
        en: "A Plan That Bends, Not Breaks",
      },
      whatYouLearned: {
        ar: [
          "خطة تملأ كل ساعة متاحة تفترض أسبوعًا بلا مفاجآت، وهذا لا يحدث في الممارسة الفعلية.",
          "نحو ٣٠٪ من ساعاتك يجب أن يبقى هامشًا مقصودًا، لا فراغًا مهدورًا.",
          "عند وقوع طارئ فعلي، أعد الترتيب ضمن الهامش أولاً، ولا تتخل عن الخطة بأكملها.",
        ],
        en: [
          "A plan that fills every available hour assumes a week with no surprises, which never happens in real practice.",
          "Roughly 30% of your hours should stay deliberate slack, not wasted idle time.",
          "When a real emergency hits, rearrange within the slack first, and never abandon the whole plan.",
        ],
      },
      framework: {
        name: {
          ar: "الخطة الصامدة: خصص · رتّب · اترك هامشًا · أعد الترتيب",
          en: "The Resilient Plan: Allocate · Order · Leave Slack · Rearrange",
        },
        steps: [
          { ar: "خصص نحو ٧٠٪ من طاقتك لمهام محددة مسبقًا.", en: "Allocate roughly 70% of your capacity to pre-set tasks." },
          { ar: "رتّبها حسب الأولوية الحقيقية للملف، لا ترتيب الوصول.", en: "Order them by the file's real priority, not arrival order." },
          { ar: "اترك نحو ٣٠٪ هامشًا موزعًا على أيام الأسبوع.", en: "Leave roughly 30% as slack spread across the week's days." },
          { ar: "عند وقوع طارئ، استخدم الهامش أولاً قبل إعادة جدولة أي ملف آخر.", en: "When an emergency hits, use the slack first before rescheduling any other file." },
        ],
      },
      rememberThis: {
        ar: "الخطة المثالية بلا هامش تنهار عند أول مفاجأة؛ الخطة الواقعية تتوقعها وتصمد.",
        en: "A perfect plan with no slack collapses at the first surprise; a realistic plan expects it and survives.",
      },
      useItTomorrow: {
        ar: "عند بناء خطتك القادمة، اترك عمدًا نحو ٣٠٪ من ساعاتك بلا مهام محددة مسبقًا.",
        en: "When building your next plan, deliberately leave about 30% of your hours with no pre-set tasks.",
      },
    },
    targetLevel: 2,
    sourceIds: ["src.four-thousand-weeks", "src.meditations-for-mortals"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 04 — Protecting a Block of Real Focus
  // =========================================================================
  {
    id: "unit.sm.04",
    chapterId: "ch.sm.protecting-your-focus",
    order: 4,
    title: {
      ar: "حماية كتلة تركيز حقيقية",
      en: "Protecting a Block of Real Focus",
    },
    subtitle: {
      ar: "صياغة مذكرة معقدة بين عشر مقاطعات لا تساوي نصف ساعة متواصلة من التفكير الفعلي",
      en: "Drafting a complex brief across ten interruptions is worth less than thirty uninterrupted minutes of real thinking.",
    },
    primarySkillId: "skill.focus-under-interruption",
    skillIds: ["skill.focus-under-interruption", "skill.time-priority-management"],
    stage: 2,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.sm.04.hook",
        text: {
          ar: "بدأت صياغة مذكرة تحكيم معقدة الساعة التاسعة. الحادية عشرة، لاحظت أنك لم تنجز سوى صفحة واحدة — قاطعتك ست رسائل ومكالمتان.",
          en: "You started drafting a complex arbitration submission at 9am. By 11, you'd finished only one page — interrupted by six messages and two calls.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.sm.04.why",
        text: {
          ar: "بعض العمل القانوني، كصياغة حجة معقدة أو تحليل عقد متعدد البنود، يحتاج تركيزًا متواصلاً. المقاطعة المتكررة لا تبطئه فقط، بل تُفقده جودته.",
          en: "Some legal work — a complex argument, a multi-clause contract analysis — needs sustained focus. Repeated interruption doesn't just slow it down; it degrades its quality.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.sm.04.goals",
        goals: {
          ar: [
            "أن تحدد أي مهامك تحتاج فعلاً تركيزًا متواصلاً لا يحتمل المقاطعة.",
            "أن تعلن عدم توفرك بطريقة مهنية لا تبدو غير متعاونة.",
            "أن تستعيد كتلة التركيز بعد مقاطعة حتمية بدل خسارة الجلسة بأكملها.",
          ],
          en: [
            "Identify which of your tasks genuinely need sustained, uninterruptible focus.",
            "Announce your unavailability professionally, without seeming uncooperative.",
            "Recover a focus block after an inevitable interruption instead of losing the whole session.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.sm.04.lesson",
        title: {
          ar: "ليس كل عمل يحتاج التركيز نفسه",
          en: "Not all work needs the same focus",
        },
        body: {
          ar: [
            "بعض المهام تحتمل المقاطعة دون خسارة كبيرة: الرد على بريد روتيني، تنظيم مستندات. مهام أخرى — صياغة حجة معقدة — تنهار جودتها مع كل مقاطعة.",
            "المعيار البسيط: هل تحتاج المهمة أن تحمل عدة عناصر في ذهنك معًا؟ إن كان الجواب نعم، فهي تحتاج كتلة تركيز محمية، لا وقتًا مجزّأً.",
            "الإعلان عن عدم التوفر لا يعني الاختفاء؛ رسالة قصيرة مسبقة تحدد المدة والسبب تحافظ على الثقة المهنية دون أي انطباع بعدم التعاون.",
            "المقاطعة الحتمية ستقع رغم كل شيء — عميل يتصل، شريك يسأل. الخطأ الأكبر ليس المقاطعة نفسها، بل محاولة العودة للعمل فورًا دون دقيقة لاستعادة السياق.",
            "استعادة كتلة التركيز تحتاج نحو دقيقتين: مراجعة آخر جملة كتبتها، وتذكّر الفكرة التالية قبل الاستمرار — أفضل من الاستمرار مباشرة بذهن مشتت.",
          ],
          en: [
            "Some tasks tolerate interruption with little cost: routine email, filing documents. Others — drafting a complex argument — lose quality with every interruption.",
            "The simple test: does the task require holding several elements in your mind at once? If yes, it needs a protected focus block, not fragmented time.",
            "Announcing unavailability doesn't mean disappearing; a short advance message stating the duration and reason preserves professional trust with no impression of unhelpfulness.",
            "An inevitable interruption will happen regardless — a client calls, a partner asks something. The bigger mistake isn't the interruption itself, but returning to work instantly with no minute to rebuild context.",
            "Recovering a focus block takes about two minutes: reviewing your last sentence, recalling the next idea before continuing — better than plunging back in with a scattered mind.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.sm.04.visual",
        title: {
          ar: "عمل يحتمل المقاطعة مقابل عمل لا يحتملها",
          en: "Interruption-tolerant work vs. interruption-intolerant work",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "يحتمل المقاطعة", en: "Tolerates interruption" },
            detail: {
              ar: "الرد على بريد روتيني، تنظيم مستندات — لا يحتاج حمل عدة عناصر في الذهن معًا.",
              en: "Routine email replies, filing documents — doesn't require holding several elements in mind at once.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "لا يحتمل المقاطعة", en: "Does not tolerate interruption" },
            detail: {
              ar: "صياغة حجة معقدة، تحليل عقد متعدد البنود — كل مقاطعة تُفقد السياق المبني بعناية.",
              en: "Drafting a complex argument, multi-clause contract analysis — every interruption loses carefully built context.",
            },
            tone: "negative",
          },
          {
            label: { ar: "كتلة تركيز محمية", en: "A protected focus block" },
            detail: {
              ar: "وقت معلن مسبقًا، هاتف صامت، ورسالة قصيرة توضح المدة والسبب.",
              en: "Time announced in advance, phone silenced, a short message stating duration and reason.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.sm.04.worked",
        strong: {
          label: {
            ar: "محامٍ يعلن عدم توفره باحتراف",
            en: "A lawyer who announces unavailability professionally",
          },
          text: {
            ar: [
              "رسالة للفريق قبل الجلسة: «سأكون غير متاح من ٩ إلى ١١ صباحًا لصياغة مذكرة تحكيم شركة المرساة للشحن البحري. لأي أمر عاجل فعلاً، اتصلوا مباشرة.»",
              "بعد مكالمة اضطرارية في المنتصف: «أعطي نفسي دقيقتين لمراجعة آخر فقرة كتبتها قبل أن أكمل.»",
            ],
            en: [
              "A message to the team before the session: \"I'll be unavailable from 9 to 11am to draft Al-Mirsat Shipping's arbitration submission. For anything genuinely urgent, call directly.\"",
              "After an unavoidable call mid-session: \"I give myself two minutes to review the last paragraph I wrote before continuing.\"",
            ],
          },
          why: {
            ar: "الإعلان المسبق حدد المدة والسبب ووفّر بابًا للطوارئ الحقيقية، فلم يبدُ غير متعاون. واستعادة السياق بعد المقاطعة حمت جودة العمل.",
            en: "The advance notice named the duration, the reason, and left a door open for real emergencies, so he never seemed uncooperative. Rebuilding context after the interruption protected the work's quality.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يترك هاتفه مفتوحًا دون إعلان",
            en: "A lawyer who leaves his phone open with no announcement",
          },
          text: {
            ar: [
              "لم يخبر أحدًا أنه يعمل على مهمة تحتاج تركيزًا؛ رد على كل رسالة فور وصولها طوال الجلسة.",
              "بعد كل مقاطعة، عاد للكتابة فورًا دون مراجعة ما كتبه، فتكرر بعض الفقرات وتناقضت أخرى.",
            ],
            en: [
              "He told no one he was on a task needing focus; he answered every message the instant it arrived throughout the session.",
              "After every interruption, he resumed writing instantly with no review, so some paragraphs repeated and others contradicted each other.",
            ],
          },
          why: {
            ar: "غياب الإعلان المسبق جعل كل رسالة تبدو بالقدر نفسه من الإلحاح. والعودة الفورية دون استعادة السياق أنتجت مذكرة متضاربة تحتاج مراجعة كاملة لاحقًا.",
            en: "No advance notice meant every message felt equally urgent. Resuming instantly with no context recovery produced a contradictory draft needing a full rewrite later.",
          },
        },
      },
      { kind: "activity", id: "s.sm.04.a1", activityId: "act.sm.04.1", mode: "quick" },
      { kind: "activity", id: "s.sm.04.a2", activityId: "act.sm.04.2", mode: "guided" },
      { kind: "activity", id: "s.sm.04.a3", activityId: "act.sm.04.3", mode: "guided" },
      { kind: "activity", id: "s.sm.04.a4", activityId: "act.sm.04.4", mode: "independent" },
      { kind: "activity", id: "s.sm.04.a5", activityId: "act.sm.04.5", mode: "independent" },
      { kind: "summary", id: "s.sm.04.summary", summaryCardId: "card.sm.04" },
      {
        kind: "apply_tomorrow",
        id: "s.sm.04.apply",
        task: {
          ar: "حدد غدًا مهمة واحدة تحتاج تركيزًا متواصلاً، وأعلن عدم توفرك لها بمدة وسبب واضحين.",
          en: "Tomorrow, identify one task needing sustained focus, and announce your unavailability for it with a clear duration and reason.",
        },
        detail: {
          ar: "بعد أي مقاطعة حتمية، امنح نفسك دقيقتين لاستعادة السياق قبل الاستمرار.",
          en: "After any inevitable interruption, give yourself two minutes to rebuild context before continuing.",
        },
      },
      {
        kind: "next_mission",
        id: "s.sm.04.next",
        teaser: {
          ar: "حميت تركيزك حين يكون العمل ممكنًا. لكن ماذا لو كان الطلب نفسه هو ما يتجاوز طاقتك؟ الوحدة القادمة: كيف تقول لا دون أن تبدو أنك قلت لا.",
          en: "You've protected your focus when the work is manageable. But what if the request itself exceeds your capacity? Next unit: how to say no without seeming to say no.",
        },
      },
    ],
    activities: [
      {
        id: "act.sm.04.1",
        kind: "multiple_choice",
        skillId: "skill.focus-under-interruption",
        stage: 2,
        context: {
          ar: [
            "تعمل على تحليل عقد شراء أصول متعدد البنود لصالح شركة النسيم للصناعات الغذائية، يتطلب مقارنة سبعة بنود مترابطة ببعضها.",
            "هاتفك يستقبل إشعارات باستمرار من فريق العمل.",
          ],
          en: [
            "You're analysing a multi-clause asset-purchase contract for Al-Naseem Food Industries, requiring comparison of seven interlinked clauses.",
            "Your phone keeps receiving notifications from the team.",
          ],
        },
        prompt: {
          ar: "ما أفضل أول خطوة قبل بدء هذا التحليل؟",
          en: "What is the best first step before starting this analysis?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "تبدأ العمل مباشرة وترد على كل إشعار فور وصوله للحفاظ على التواصل.",
              en: "Start work directly and reply to every notification as it arrives, to stay responsive.",
            },
            rationale: {
              ar: "المقاطعة المتكررة تُفقد القدرة على حمل سبعة بنود مترابطة في الذهن معًا؛ التواصل الفوري هنا يكلّف جودة التحليل.",
              en: "Repeated interruption destroys the ability to hold seven interlinked clauses in mind at once; instant responsiveness here costs the analysis's quality.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "ترسل رسالة قصيرة للفريق تحدد أنك غير متاح لساعتين، وتضع الهاتف على وضع صامت.",
              en: "Send the team a short message stating you're unavailable for two hours, and silence your phone.",
            },
            correct: true,
            rationale: {
              ar: "يحمي كتلة تركيز حقيقية يحتاجها هذا العمل تحديدًا، ويترك بابًا واضحًا لمن يحتاجك عبر إعلام مسبق بالمدة.",
              en: "Protects the real focus block this specific work needs, while leaving a clear door open for anyone who needs you, via advance notice of the duration.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "تؤجل التحليل بأكمله ليوم لاحق تأمل أن يكون أهدأ.",
              en: "Postpone the entire analysis to a later day you hope will be quieter.",
            },
            rationale: {
              ar: "تأجيل بلا سبب حقيقي مجرد تجنّب؛ لا يوجد ضمان بيوم أهدأ، والملف لا يزال يحتاج وقتًا في النهاية.",
              en: "Postponing with no real reason is just avoidance; there's no guarantee of a quieter day, and the file still needs the time eventually.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "تعمل من مقهى قريب دون إخبار أحد بمكانك أو مدة غيابك.",
              en: "Work from a nearby café without telling anyone where you are or how long you'll be gone.",
            },
            rationale: {
              ar: "الهدوء المكاني وحده لا يكفي دون إعلام واضح؛ غياب بلا إخبار يبدو انقطاعًا لا حماية تركيز مهنية.",
              en: "Physical quiet alone isn't enough without clear notice; disappearing with no word looks like going dark, not professional focus protection.",
            },
          },
        ],
      },
      {
        id: "act.sm.04.2",
        kind: "categorization",
        skillId: "skill.focus-under-interruption",
        stage: 2,
        prompt: {
          ar: "صنّف كل مهمة: هل تحتاج كتلة تركيز محمية أم تحتمل المقاطعة؟",
          en: "Sort each task: does it need a protected focus block, or does it tolerate interruption?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «تحتاج كتلة محمية» / «تحتمل المقاطعة» أسفل كل مهمة بدل السحب.",
          en: "Choose \"Needs protected block\" / \"Tolerates interruption\" from buttons under each task instead of dragging.",
        },
        buckets: [
          { id: "protect", label: { ar: "تحتاج كتلة محمية", en: "Needs protected block" } },
          { id: "tolerate", label: { ar: "تحتمل المقاطعة", en: "Tolerates interruption" } },
        ],
        items: [
          {
            id: "c1",
            label: {
              ar: "صياغة حجة قانونية مركبة لطلب تحكيم.",
              en: "Drafting a complex legal argument for an arbitration request.",
            },
            bucketId: "protect",
            rationale: {
              ar: "تتطلب حمل عدة مقدمات مترابطة في الذهن معًا؛ كل مقاطعة تفقد جزءًا من السياق.",
              en: "Requires holding several interlinked premises in mind together; every interruption loses part of the context.",
            },
          },
          {
            id: "c2",
            label: {
              ar: "الرد على استفسار بريدي روتيني حول موعد اجتماع.",
              en: "Replying to a routine email query about a meeting time.",
            },
            bucketId: "tolerate",
            rationale: {
              ar: "مهمة بسيطة ومستقلة؛ لا تحتاج سياقًا متراكمًا يُفقد بالمقاطعة.",
              en: "A simple, self-contained task; needs no accumulated context that interruption could lose.",
            },
          },
          {
            id: "c3",
            label: {
              ar: "مقارنة سبعة بنود مترابطة في عقد شراء أصول.",
              en: "Comparing seven interlinked clauses in an asset-purchase contract.",
            },
            bucketId: "protect",
            rationale: {
              ar: "الترابط بين البنود يعني أن فقدان التركيز في أي لحظة يُفقد صلة أحد البنود بالآخر.",
              en: "The interlinkage means losing focus at any moment loses the connection between one clause and another.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "تنظيم مستندات ملف مغلق للأرشفة.",
              en: "Organizing a closed file's documents for archiving.",
            },
            bucketId: "tolerate",
            rationale: {
              ar: "مهمة آلية مستقلة عن بعضها؛ يمكن إيقافها واستئنافها دون خسارة تُذكر.",
              en: "A mechanical task with independent steps; can be paused and resumed with negligible loss.",
            },
          },
        ],
      },
      {
        id: "act.sm.04.3",
        kind: "branching_decision",
        skillId: "skill.focus-under-interruption",
        secondarySkillIds: ["skill.time-priority-management"],
        stage: 2,
        weight: 2,
        context: {
          ar: [
            "تعمل على صياغة مذكرة تحكيم معقدة لشركة المرساة للشحن البحري، أعلنت عدم توفرك حتى الساعة الحادية عشرة.",
            "الساعة العاشرة، يتصل بك زميل بشأن أمر يقول إنه عاجل.",
          ],
          en: [
            "You're drafting a complex arbitration submission for Al-Mirsat Shipping, having announced you're unavailable until 11am.",
            "At 10am, a colleague calls about something he says is urgent.",
          ],
        },
        prompt: {
          ar: "اختر ردّك في كل لحظة، وراقب أثره.",
          en: "Choose your response at each point, and watch its effect.",
        },
        accessibleAlternative: {
          ar: "كل خيار متاح كنص كامل بلا حاجة لسحب أو نقر متعدد؛ اختر الرد المناسب من القائمة في كل خطوة.",
          en: "Every option is available as full text with no drag or multi-tap needed; pick the appropriate reply from the list at each step.",
        },
        startNodeId: "n1",
        nodes: [
          {
            id: "n1",
            text: {
              ar: "الهاتف يرن. الزميل يقول: «عاجل، هل يمكنك الرد الآن؟»",
              en: "The phone rings. The colleague says: \"Urgent, can you answer now?\"",
            },
            choices: [
              {
                id: "n1c1",
                label: {
                  ar: "«أنا في كتلة تركيز محمية حتى الحادية عشرة. هل يمكن الأمر الانتظار ساعة، أم هناك موعد خارجي فعلي الآن؟»",
                  en: "\"I'm in a protected focus block until 11. Can it wait an hour, or is there a real external deadline right now?\"",
                },
                nextNodeId: "n2",
                quality: "strong",
                rationale: {
                  ar: "يحمي كتلته دون رفض المساعدة، ويسأل عن الموعد الفعلي قبل أن يقرر — تمامًا كما تعلمت في فرز العاجل.",
                  en: "Protects his block without refusing to help, and asks about the real deadline before deciding — exactly as learned in sorting genuine urgency.",
                },
              },
              {
                id: "n1c2",
                label: {
                  ar: "يجيب فورًا ويترك المذكرة مفتوحة على الشاشة دون ملاحظة أين توقف.",
                  en: "Answers immediately and leaves the memo open on screen with no note of where he stopped.",
                },
                nextNodeId: "n2",
                quality: "weak",
                rationale: {
                  ar: "يستجيب دون سؤال عن الموعد الفعلي، ويخسر نقطة توقفه، فتطول العودة للتركيز لاحقًا.",
                  en: "Responds without asking about the real deadline, and loses his stopping point, making it harder to regain focus later.",
                },
              },
              {
                id: "n1c3",
                label: {
                  ar: "يتجاهل الاتصال تمامًا دون أي رسالة توضح متى سيرد.",
                  en: "Ignores the call entirely with no message explaining when he'll respond.",
                },
                nextNodeId: "n2",
                quality: "acceptable",
                rationale: {
                  ar: "يحمي تركيزه فعلاً، لكن الصمت الكامل دون أي إشارة لاحقة قد يبدو غير مهني إن كان الأمر عاجلاً فعلاً.",
                  en: "Genuinely protects his focus, but total silence with no later signal may look unprofessional if the matter was genuinely urgent.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "بعد أن أوضح أنه يمكن الانتظار ساعة، أنهى الزميل المكالمة. عليك الآن العودة للصياغة.",
              en: "After learning it can wait an hour, the colleague ends the call. You now need to return to drafting.",
            },
            choices: [
              {
                id: "n2c1",
                label: {
                  ar: "يقرأ آخر فقرة كتبها ويتذكر الفكرة التالية قبل أن يكمل الكتابة.",
                  en: "Reads his last paragraph and recalls the next idea before continuing to write.",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "دقيقتان لاستعادة السياق تحميان جودة المذكرة، بدل الكتابة المباشرة بذهن لا يزال مشتتًا.",
                  en: "Two minutes rebuilding context protects the submission's quality, instead of writing straight away with a still-scattered mind.",
                },
              },
              {
                id: "n2c2",
                label: {
                  ar: "يكمل الكتابة فورًا من حيث توقف دون أي مراجعة.",
                  en: "Resumes writing immediately from where he stopped, with no review.",
                },
                nextNodeId: null,
                quality: "weak",
                rationale: {
                  ar: "الاستمرار المباشر بذهن مشتت ينتج غالبًا فقرات متكررة أو متناقضة تحتاج مراجعة كاملة لاحقًا.",
                  en: "Continuing directly with a scattered mind often produces repeated or contradictory paragraphs that need a full rewrite later.",
                },
              },
              {
                id: "n2c3",
                label: {
                  ar: "يقرر تأجيل الصياغة بأكملها ليوم آخر لأن التركيز تبدد.",
                  en: "Decides to postpone the entire drafting to another day since his focus has scattered.",
                },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "مقاطعة واحدة مُدارة جيدًا لا تبرر خسارة كتلة التركيز بأكملها؛ التأجيل الكامل يضيع الوقت المحمي المتبقي دون داعٍ.",
                  en: "One well-managed interruption doesn't justify losing the entire focus block; full postponement wastes the remaining protected time for no reason.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.sm.04.4",
        kind: "email_rewrite",
        skillId: "skill.focus-under-interruption",
        stage: 2,
        grading: "ai_rubric",
        rubricId: "rubric.self-management-written.v1",
        weight: 2,
        minChars: 180,
        context: {
          ar: [
            "تحتاج غدًا صباحًا كتلة تركيز ساعتين لصياغة تحليل عقد معقد لشركة النسيم للصناعات الغذائية.",
            "تريد إعلام فريقك بعدم توفرك دون أن تبدو غير متعاون.",
          ],
          en: [
            "You need a two-hour focus block tomorrow morning to draft a complex contract analysis for Al-Naseem Food Industries.",
            "You want to notify your team of your unavailability without seeming uncooperative.",
          ],
        },
        prompt: {
          ar: "أعد صياغة الرسالة التالية لتكون إعلانًا مهنيًا واضحًا عن عدم التوفر.",
          en: "Rewrite the following message into a clear, professional unavailability announcement.",
        },
        draft: {
          ar: ["«لا تزعجوني غدًا صباحًا، عندي شغل.»"],
          en: ["\"Don't bother me tomorrow morning, I have work.\""],
        },
        modelAnswer: {
          ar: [
            "«سأكون غير متاح غدًا من ٩ إلى ١١ صباحًا لإنجاز تحليل عقد شركة النسيم الذي يحتاج تركيزًا متواصلاً.»",
            "«لأي أمر عاجل فعلاً بموعد خارجي حقيقي، يمكنكم الاتصال مباشرة. سأرد على كل ما عداه بعد الساعة الحادية عشرة.»",
          ],
          en: [
            "\"I'll be unavailable tomorrow from 9 to 11am to complete the Al-Naseem contract analysis, which needs sustained focus.\"",
            "\"For anything genuinely urgent with a real external deadline, feel free to call directly. I'll respond to everything else after 11am.\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«لا تزعجوني غدًا صباحًا، عندي شغل.»"],
            en: ["\"Don't bother me tomorrow morning, I have work.\""],
          },
          whatIsWrong: {
            ar: "لا مدة محددة ولا سبب مذكور ولا باب واضح للطوارئ الحقيقية؛ تبدو رفضًا عامًا لا إعلانًا مهنيًا مؤقتًا.",
            en: "No stated duration, no reason given, and no clear door for real emergencies; it reads as a blanket refusal, not a temporary professional notice.",
          },
        },
      },
      {
        id: "act.sm.04.5",
        kind: "reflection",
        skillId: "skill.focus-under-interruption",
        stage: 2,
        grading: "self_report",
        prompt: {
          ar: "استرجع مهمة تحتاج تركيزًا عميقًا قاطعتها مرارًا. كم مرة عدت للكتابة دون استعادة السياق أولاً؟",
          en: "Recall a deep-focus task you interrupted repeatedly. How many times did you resume writing without first rebuilding context?",
        },
        followUp: {
          ar: "لو أعلنت عدم توفرك مسبقًا بجملة واحدة، كيف كانت تلك الجلسة لتختلف؟",
          en: "If you had announced your unavailability in advance with one sentence, how would that session have gone differently?",
        },
      },
    ],
    summaryCard: {
      id: "card.sm.04",
      title: {
        ar: "كتلة تركيز محمية لا وقت مجزّأ",
        en: "A Protected Block, Not Fragmented Time",
      },
      whatYouLearned: {
        ar: [
          "ليس كل عمل يحتاج التركيز نفسه؛ ما يتطلب حمل عناصر مترابطة في الذهن يحتاج كتلة محمية.",
          "الإعلان المسبق عن عدم التوفر بمدة وسبب واضحين يحافظ على الثقة المهنية دون أن يبدو رفضًا.",
          "استعادة السياق بعد مقاطعة حتمية تحتاج دقيقتين فقط، وتحمي جودة العمل من التشتت.",
        ],
        en: [
          "Not all work needs the same focus; whatever requires holding interlinked elements in mind needs a protected block.",
          "Announcing unavailability in advance with a clear duration and reason preserves professional trust without seeming like a refusal.",
          "Rebuilding context after an inevitable interruption takes only two minutes, and protects the work's quality from scattering.",
        ],
      },
      framework: {
        name: {
          ar: "حماية التركيز: حدّد · أعلن · احمِ · استعِد",
          en: "Protecting Focus: Identify · Announce · Protect · Recover",
        },
        steps: [
          { ar: "حدّد أي مهامك تحتاج فعلاً حمل عناصر مترابطة في الذهن معًا.", en: "Identify which tasks genuinely need holding interlinked elements in mind." },
          { ar: "أعلن عدم توفرك بمدة وسبب واضحين، مع باب للطوارئ الحقيقية.", en: "Announce unavailability with a clear duration and reason, leaving a door for real emergencies." },
          { ar: "احمِ الكتلة: هاتف صامت، لا فتح رسائل عرضية.", en: "Protect the block: phone silenced, no casual message-checking." },
          { ar: "استعِد السياق بدقيقتين بعد أي مقاطعة قبل أن تكمل.", en: "Recover context with two minutes after any interruption before continuing." },
        ],
      },
      rememberThis: {
        ar: "صياغة معقدة بين عشر مقاطعات تساوي أقل من نصف ساعة متواصلة من التفكير الفعلي.",
        en: "Complex drafting across ten interruptions is worth less than thirty uninterrupted minutes of real thinking.",
      },
      useItTomorrow: {
        ar: "قبل مهمتك القادمة التي تحتاج تركيزًا، أرسل رسالة واحدة تحدد المدة والسبب وباب الطوارئ.",
        en: "Before your next task needing focus, send one message stating the duration, the reason, and the emergency door.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.your-brain-at-work", "src.fire-proof"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 05 — Saying No Without Saying No
  // =========================================================================
  {
    id: "unit.sm.05",
    chapterId: "ch.sm.protecting-your-focus",
    order: 5,
    title: {
      ar: "قول لا دون أن تقول لا",
      en: "Saying No Without Saying No",
    },
    subtitle: {
      ar: "الرفض القاطع يخسر العلاقة، والقبول الصامت يخسر الملف؛ الحل الثالث يكشف التعارض ويقترح بديلاً",
      en: "Blunt refusal costs the relationship; silent capitulation costs the file. The third option surfaces the conflict and proposes an alternative.",
    },
    primarySkillId: "skill.workload-boundaries",
    skillIds: ["skill.workload-boundaries", "skill.time-priority-management", "skill.emotional-intelligence"],
    stage: 3,
    estimatedMinutes: 11,
    steps: [
      {
        kind: "hook",
        id: "s.sm.05.hook",
        text: {
          ar: "شريك يطلب منك عملًا عاجلاً بحلول الجمعة. أنت ملتزم فعلاً بتحضير محاكمة لعميل آخر طوال هذا الأسبوع. القبول يهدد الاثنين؛ الرفض يهدد سمعتك المهنية.",
          en: "A partner asks you for urgent work by Friday. You're genuinely committed to trial prep for another client all week. Accepting risks both; refusing risks your professional standing.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.sm.05.why",
        text: {
          ar: "من يقبل بصمت كل طلب يفرط في وعوده حتى ينهار أحدها. ومن يرفض دون بديل يبدو غير متعاون. المهارة الحقيقية هي كشف التعارض واقتراح حل يعمل للطرفين.",
          en: "Whoever silently accepts every request overcommits until something breaks. Whoever refuses with no alternative looks uncooperative. The real skill is surfacing the conflict and proposing something that works for both.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.sm.05.goals",
        goals: {
          ar: [
            "أن تكشف التعارض الفعلي بين التزاماتك القائمة والطلب الجديد بوضوح ودون اعتذار مفرط.",
            "أن تقترح بديلاً عمليًا بدل رفض قاطع أو قبول صامت.",
            "أن تحافظ على العلاقة المهنية مع الطرف الطالب حتى عند التفاوض على أولوياتك.",
          ],
          en: [
            "Surface the real conflict between existing commitments and a new request clearly, without over-apologizing.",
            "Propose a practical alternative instead of a blunt refusal or silent capitulation.",
            "Preserve the professional relationship with the requester even while negotiating your priorities.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.sm.05.lesson",
        title: {
          ar: "ثلاث طرق للرد، واحدة فقط تنجح",
          en: "Three ways to respond, only one works",
        },
        body: {
          ar: [
            "الاستجابة الأولى: القبول الصامت. يبدو تعاونيًا في اللحظة، لكنه يعني التزامًا لن تفي به فعلاً، وسيكتشف الجميع ذلك عند فوات الأوان.",
            "الاستجابة الثانية: الرفض القاطع. يحمي وقتك لكنه يُقرأ كعدم تعاون، خصوصًا حين يأتي من محامٍ صغير أمام شريك أعلى منه.",
            "الاستجابة الثالثة: كشف التعارض واقتراح بديل. تصف التزامك القائم بوضوح، ثم تقترح خيارًا عمليًا — تأجيل جزء، تفويض جزء، أو تمديد الموعد.",
            "كشف التعارض ليس اعتذارًا؛ هو معلومة يحتاجها من يطلب منك العمل ليقرر بنفسه ما الأولوية الحقيقية بين ملفيك.",
            "الاقتراح العملي يحوّل الموقف من مواجهة إلى حل مشترك: «يمكنني تولي جزء الآن، والباقي بعد المحاكمة الثلاثاء» أفضل بكثير من رفض أو قبول بلا شروط.",
          ],
          en: [
            "Response one: silent acceptance. It looks cooperative in the moment, but it means a commitment you won't actually meet, and everyone discovers that too late.",
            "Response two: blunt refusal. It protects your time but reads as uncooperative, especially coming from a junior lawyer to a partner.",
            "Response three: surface the conflict and propose an alternative. State your existing commitment clearly, then propose a practical option — delaying part of it, delegating part, or extending the deadline.",
            "Surfacing the conflict isn't an apology; it's information the requester needs to decide the real priority between your two files himself.",
            "A practical proposal turns the moment from confrontation into a shared solution: \"I can take part of it now, the rest after Tuesday's trial\" beats either refusal or unconditional acceptance.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.sm.05.visual",
        title: {
          ar: "ثلاث استجابات لطلب متعارض",
          en: "Three responses to a conflicting request",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "قبول صامت", en: "Silent acceptance" },
            detail: {
              ar: "«حسنًا، سأتولاه.» التزام لن يُوفى به، يُكتشف عند فوات الأوان.",
              en: "\"Okay, I'll take it.\" A commitment that won't be kept, discovered too late.",
            },
            tone: "negative",
          },
          {
            label: { ar: "رفض قاطع", en: "Blunt refusal" },
            detail: {
              ar: "«لا أستطيع.» يحمي الوقت لكنه يبدو غير متعاون بلا أي بديل.",
              en: "\"I can't.\" Protects time but looks uncooperative with no alternative offered.",
            },
            tone: "negative",
          },
          {
            label: { ar: "كشف وبديل", en: "Surface and propose" },
            detail: {
              ar: "«ملتزم بمحاكمة حتى الثلاثاء؛ يمكنني تولي جزء الآن والباقي بعدها.» يحل التعارض بدل تجاهله.",
              en: "\"I'm committed to a trial through Tuesday; I can take part now, the rest after.\" Resolves the conflict instead of ignoring it.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.sm.05.worked",
        strong: {
          label: {
            ar: "محامية تكشف التعارض وتقترح بديلاً",
            en: "A lawyer who surfaces the conflict and proposes an alternative",
          },
          text: {
            ar: [
              "«أنا ملتزمة بتحضير محاكمة شركة الأمين للصناعات الغذائية حتى ظهر الثلاثاء، وهذا التزام لا أستطيع تأجيله.»",
              "«يمكنني البدء بجزء من طلبكم بعد ظهر الأربعاء وإنجازه بحلول الجمعة، أو تحويل الجزء الأول منه لزميل متاح الآن إن كان التوقيت أضيق من ذلك.»",
            ],
            en: [
              "\"I'm committed to preparing Al-Amin Food Industries' trial through Tuesday noon, and that's a commitment I can't postpone.\"",
              "\"I can start part of your request Wednesday afternoon and finish by Friday, or hand the first part to a colleague available now if the timing is tighter than that.\"",
            ],
          },
          why: {
            ar: "وضحت التزامها الفعلي دون اعتذار مفرط، واقترحت خيارين عمليين يتركان القرار النهائي للشريك بدل أن تقرر وحدها بالرفض أو القبول الأعمى.",
            en: "She stated her real commitment without over-apologizing, and proposed two practical options that leave the final call to the partner rather than deciding alone via refusal or blind acceptance.",
          },
        },
        weak: {
          label: {
            ar: "محامٍ يقبل بصمت رغم التعارض",
            en: "A lawyer who silently accepts despite the conflict",
          },
          text: {
            ar: [
              "«بالتأكيد، سأنجزه بحلول الجمعة.»",
              "لم يذكر التزامه بالمحاكمة، وأمضى الأسبوع متنقلاً بين المهمتين دون إنجاز أي منهما بالمستوى المطلوب.",
            ],
            en: [
              "\"Sure, I'll have it done by Friday.\"",
              "He never mentioned his trial commitment, and spent the week bouncing between both tasks, finishing neither to the required standard.",
            ],
          },
          why: {
            ar: "القبول الصامت أخفى تعارضًا حقيقيًا كان الشريك بحاجة لمعرفته ليقرر الأولوية بنفسه. النتيجة عمل ضعيف على الملفين معًا، لا ملف واحد منجز جيدًا.",
            en: "Silent acceptance hid a real conflict the partner needed to know about to decide priority himself. The result was weak work on both files, instead of one file done well.",
          },
        },
      },
      { kind: "activity", id: "s.sm.05.a1", activityId: "act.sm.05.1", mode: "quick" },
      { kind: "activity", id: "s.sm.05.a2", activityId: "act.sm.05.2", mode: "guided" },
      { kind: "activity", id: "s.sm.05.a3", activityId: "act.sm.05.3", mode: "guided" },
      { kind: "activity", id: "s.sm.05.a4", activityId: "act.sm.05.4", mode: "independent" },
      { kind: "simulation", id: "s.sm.05.sim", scenarioId: "scn.overloaded-associate" },
      { kind: "activity", id: "s.sm.05.a5", activityId: "act.sm.05.5", mode: "independent" },
      { kind: "summary", id: "s.sm.05.summary", summaryCardId: "card.sm.05" },
      {
        kind: "apply_tomorrow",
        id: "s.sm.05.apply",
        task: {
          ar: "حدد التزامًا قائمًا هذا الأسبوع يمكن أن يتعارض مع طلب جديد، وجهّز جملة واحدة تكشف التعارض وتقترح بديلاً.",
          en: "Identify an existing commitment this week that could conflict with a new request, and prepare one sentence that surfaces the conflict and proposes an alternative.",
        },
        detail: {
          ar: "احتفظ بها جاهزة؛ الوضوح تحت الضغط أصعب من الوضوح المُعدّ مسبقًا.",
          en: "Keep it ready; clarity under pressure is harder than clarity prepared in advance.",
        },
      },
      {
        kind: "next_mission",
        id: "s.sm.05.next",
        teaser: {
          ar: "أكملت هذا الفصل: من رؤية طاقتك الحقيقية إلى حماية تركيزك والتفاوض على حدودك. المرحلة القادمة تبني على هذه الأسس في مواقف يومية أكثر تعقيدًا.",
          en: "You've completed this chapter: from seeing your real capacity to protecting your focus and negotiating your boundaries. The next stage builds on these foundations in more complex everyday situations.",
        },
      },
    ],
    activities: [
      {
        id: "act.sm.05.1",
        kind: "best_response",
        skillId: "skill.workload-boundaries",
        secondarySkillIds: ["skill.emotional-intelligence"],
        stage: 3,
        context: {
          ar: [
            "تحضّر محاكمة شركة الأمين للصناعات الغذائية، وموعدها الثلاثاء القادم. تعمل عليها بدوام كامل هذا الأسبوع.",
            "شريك آخر يطلب منك اليوم عملًا عاجلاً على ملف مختلف بحلول الجمعة.",
          ],
          en: [
            "You're preparing Al-Amin Food Industries' trial, set for next Tuesday. You're on it full-time this week.",
            "Another partner asks you today for urgent work on a different file, due Friday.",
          ],
        },
        prompt: {
          ar: "ما أفضل رد أول؟",
          en: "What is the best first response?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«بالتأكيد، سأنجزه بحلول الجمعة.»",
              en: "\"Sure, I'll have it done by Friday.\"",
            },
            rationale: {
              ar: "قبول صامت يخفي تعارضًا حقيقيًا مع محاكمة قائمة؛ يُكتشف الفشل عند فوات الأوان على الملفين معًا.",
              en: "Silent acceptance hides a real conflict with a live trial; the failure surfaces too late, on both files at once.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "«لا أستطيع، أنا مشغول بمحاكمة.»",
              en: "\"I can't, I'm busy with a trial.\"",
            },
            rationale: {
              ar: "رفض قاطع بلا بديل يترك الشريك بلا حل، ويبدو أقل تعاونًا مما هو ضروري.",
              en: "A blunt refusal with no alternative leaves the partner with no solution, and looks less cooperative than necessary.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "«ملتزم بمحاكمة حتى الثلاثاء ولا أستطيع تأجيلها. يمكنني البدء بجزء من طلبكم بعدها، أو تحويل جزء لزميل متاح إن كان التوقيت أضيق.»",
              en: "\"I'm committed to a trial through Tuesday and can't postpone it. I can start part of your request after that, or hand part to a colleague available now if timing is tighter.\"",
            },
            correct: true,
            rationale: {
              ar: "يكشف التعارض بوضوح ويقترح بديلين عمليين، تاركًا القرار النهائي للشريك بدل رفض أو قبول أعمى.",
              en: "Clearly surfaces the conflict and proposes two practical alternatives, leaving the final call to the partner instead of blind refusal or acceptance.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "«سأحاول إيجاد وقت، لا أعدك بشيء.»",
              en: "\"I'll try to find time, no promises.\"",
            },
            rationale: {
              ar: "غامض ولا يوضح الالتزام القائم ولا يقترح بديلاً؛ يترك الشريك بلا معلومة كافية لاتخاذ قرار.",
              en: "Vague, states no existing commitment, and offers no alternative; leaves the partner with insufficient information to decide.",
            },
          },
        ],
      },
      {
        id: "act.sm.05.2",
        kind: "ordering",
        skillId: "skill.workload-boundaries",
        stage: 3,
        prompt: {
          ar: "رتّب خطوات الرد على طلب متعارض مع التزام قائم.",
          en: "Order the steps for responding to a request that conflicts with an existing commitment.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the order number from a dropdown beside each step instead of dragging.",
        },
        hint: {
          ar: "ابدأ بذكر التزامك القائم بوضوح، وانتهِ باقتراح عملي.",
          en: "Start by clearly stating your existing commitment, and end with a practical proposal.",
        },
        items: [
          {
            id: "i1",
            label: {
              ar: "اذكر التزامك القائم بوضوح ودون اعتذار مفرط.",
              en: "State your existing commitment clearly, without over-apologizing.",
            },
            rationale: {
              ar: "أول خطوة لأنها المعلومة التي يحتاجها الطالب ليفهم التعارض قبل أي شيء آخر.",
              en: "First, because it's the information the requester needs to understand the conflict before anything else.",
            },
          },
          {
            id: "i2",
            label: {
              ar: "قدّر بصدق ما تحتاجه فعلاً كل مهمة من وقت.",
              en: "Honestly estimate what each task actually needs in time.",
            },
            rationale: {
              ar: "يأتي بعد ذكر الالتزام لأنه يبني على معرفة فعلية بالساعات، لا انطباعًا عامًا.",
              en: "Comes after stating the commitment because it builds on real knowledge of hours, not a vague impression.",
            },
          },
          {
            id: "i3",
            label: {
              ar: "اقترح بديلاً عمليًا: تأجيل جزء، تفويض جزء، أو تمديد الموعد.",
              en: "Propose a practical alternative: delaying part, delegating part, or extending the deadline.",
            },
            rationale: {
              ar: "يأتي بعد التقدير الصادق لأن الاقتراح العملي يجب أن يستند إلى أرقام حقيقية، لا تخمين.",
              en: "Comes after the honest estimate because a practical proposal must rest on real numbers, not guesswork.",
            },
          },
          {
            id: "i4",
            label: {
              ar: "اترك القرار النهائي لمن طلب العمل، مع وضوح تام حول ما يمكنك فعله.",
              en: "Leave the final decision to the requester, with total clarity about what you can do.",
            },
            rationale: {
              ar: "آخر خطوة لأنها تحوّل الموقف من مواجهة إلى قرار مشترك مبني على معلومات كاملة.",
              en: "Last, because it turns the moment from confrontation into a shared decision built on complete information.",
            },
          },
        ],
      },
      {
        id: "act.sm.05.3",
        kind: "matching",
        skillId: "skill.workload-boundaries",
        stage: 3,
        prompt: {
          ar: "طابق كل استجابة بنوعها: قبول صامت، رفض قاطع، أو كشف وبديل.",
          en: "Match each response to its type: silent acceptance, blunt refusal, or surface-and-propose.",
        },
        accessibleAlternative: {
          ar: "اختر النوع المطابق من قائمة منسدلة بجانب كل استجابة بدل السحب.",
          en: "Pick the matching type from a dropdown beside each response instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "«لا مشكلة، سأنجزه، لا تقلقوا.»", en: "\"No problem, I'll get it done, don't worry.\"" },
            right: { ar: "قبول صامت", en: "Silent acceptance" },
            rationale: {
              ar: "لا ذكر لأي تعارض قائم؛ التزام يبدو سهلاً لكنه مبني على إخفاء الحقيقة.",
              en: "No mention of any existing conflict; a commitment that looks easy but rests on hiding the truth.",
            },
          },
          {
            id: "p2",
            left: { ar: "«لا وقت لدي هذا الأسبوع إطلاقًا.»", en: "\"I have no time at all this week.\"" },
            right: { ar: "رفض قاطع", en: "Blunt refusal" },
            rationale: {
              ar: "يحمي الوقت لكن بلا أي بديل يترك الطرف الآخر بلا حل عملي.",
              en: "Protects time but with no alternative, leaving the other side with no practical solution.",
            },
          },
          {
            id: "p3",
            left: { ar: "«ملتزم بمحاكمة حتى الثلاثاء؛ يمكنني تولي جزء من طلبكم بعدها مباشرة.»", en: "\"Committed to a trial through Tuesday; I can take part of your request right after.\"" },
            right: { ar: "كشف وبديل", en: "Surface and propose" },
            rationale: {
              ar: "يوضح التعارض ويقترح حلاً عمليًا يترك القرار للطرف الطالب.",
              en: "States the conflict clearly and proposes a practical solution, leaving the decision to the requester.",
            },
          },
          {
            id: "p4",
            left: { ar: "«بالتأكيد سأدبّر الوقت من مكان ما.»", en: "\"Sure, I'll find the time from somewhere.\"" },
            right: { ar: "قبول صامت", en: "Silent acceptance" },
            rationale: {
              ar: "التزام غامض بلا رقم أو ذكر تعارض؛ وعد لا يُبنى على واقع فعلي.",
              en: "A vague commitment with no figure or mention of conflict; a promise not grounded in real facts.",
            },
          },
        ],
      },
      {
        id: "act.sm.05.4",
        kind: "short_written",
        skillId: "skill.workload-boundaries",
        secondarySkillIds: ["skill.time-priority-management"],
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.self-management-written.v1",
        weight: 2,
        minChars: 180,
        context: {
          ar: [
            "أنت مساعد قانوني تحضّر لمحاكمة عميل قائم طوال هذا الأسبوع بدوام كامل، والجلسة الثلاثاء القادم.",
            "شريك آخر أرسل رسالة يطلب فيها مذكرة عاجلة على ملف مختلف بحلول الجمعة، دون أن يعرف بالتزامك بالمحاكمة.",
          ],
          en: [
            "You are an associate preparing full-time this week for a live client's trial, set for next Tuesday.",
            "Another partner has sent a message requesting an urgent memo on a different file, due Friday, unaware of your trial commitment.",
          ],
        },
        prompt: {
          ar: "اكتب ردًا موجزًا (٥٠-٨٠ كلمة) يكشف التعارض ويقترح بديلاً عمليًا.",
          en: "Write a brief reply (50-80 words) surfacing the conflict and proposing a practical alternative.",
        },
        modelAnswer: {
          ar: [
            "«أنا ملتزم بتحضير محاكمة عميل قائم هذا الأسبوع، وجلستها الثلاثاء، وهذا التزام لا أستطيع تأجيله.»",
            "«يمكنني البدء بمذكرتكم بعد ظهر الأربعاء وإنجازها بحلول الجمعة، أو التنسيق مع زميل متاح الآن إن كان التوقيت أضيق من ذلك. أيهما يناسبكم أكثر؟»",
          ],
          en: [
            "\"I'm committed to preparing a live client's trial this week, with the hearing on Tuesday, and that's a commitment I can't postpone.\"",
            "\"I can start your memo Wednesday afternoon and finish by Friday, or coordinate with a colleague available now if the timing is tighter. Which works better for you?\"",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«حسنًا، سأحاول إنجازه، لكن قد أتأخر قليلاً.»"],
            en: ["\"Okay, I'll try to get it done, but I might be a bit late.\""],
          },
          whatIsWrong: {
            ar: "لا ذكر لالتزام المحاكمة القائم، ولا بديل محدد، و«قد أتأخر قليلاً» وعد غامض لا يمنح الشريك معلومة كافية لاتخاذ قرار.",
            en: "No mention of the existing trial commitment, no specific alternative, and \"might be a bit late\" is a vague promise giving the partner no real information to decide with.",
          },
        },
      },
      {
        id: "act.sm.05.5",
        kind: "reflection",
        skillId: "skill.workload-boundaries",
        stage: 3,
        grading: "self_report",
        prompt: {
          ar: "استرجع موقفًا قبلت فيه طلبًا متعارضًا بصمت. ما الذي كان يمكن أن تقوله بدلاً من ذلك؟",
          en: "Recall a time you silently accepted a conflicting request. What could you have said instead?",
        },
        followUp: {
          ar: "ما البديل العملي الذي كان يمكن أن تقترحه، ولم تفكر فيه في حينها؟",
          en: "What practical alternative could you have proposed, that you didn't think of at the time?",
        },
      },
    ],
    summaryCard: {
      id: "card.sm.05",
      title: {
        ar: "كشف التعارض، لا الرفض ولا الصمت",
        en: "Surface the Conflict — Not Refusal, Not Silence",
      },
      whatYouLearned: {
        ar: [
          "القبول الصامت يخفي تعارضًا حقيقيًا يحتاج الطرف الآخر معرفته ليقرر الأولوية.",
          "الرفض القاطع بلا بديل يبدو غير متعاون حتى لو كان مبررًا فعليًا.",
          "كشف الالتزام القائم واقتراح بديل عملي يحوّل الموقف من مواجهة إلى قرار مشترك.",
        ],
        en: [
          "Silent acceptance hides a real conflict the other side needs to know about to decide priority.",
          "Blunt refusal with no alternative looks uncooperative even when genuinely justified.",
          "Surfacing the existing commitment and proposing a practical alternative turns confrontation into a shared decision.",
        ],
      },
      framework: {
        name: {
          ar: "الرد على طلب متعارض: اذكر · قدّر · اقترح · اترك القرار",
          en: "Responding to a Conflicting Request: State · Estimate · Propose · Leave the Decision",
        },
        steps: [
          { ar: "اذكر التزامك القائم بوضوح ودون اعتذار مفرط.", en: "State your existing commitment clearly, without over-apologizing." },
          { ar: "قدّر بصدق ما تحتاجه كل مهمة من وقت فعلي.", en: "Honestly estimate the real time each task needs." },
          { ar: "اقترح بديلاً عمليًا: تأجيل، تفويض، أو تمديد.", en: "Propose a practical alternative: delay, delegate, or extend." },
          { ar: "اترك القرار النهائي لمن طلب العمل، بمعلومات كاملة أمامه.", en: "Leave the final decision to the requester, with complete information in front of him." },
        ],
      },
      rememberThis: {
        ar: "الرفض القاطع يخسر العلاقة، والقبول الصامت يخسر الملف. كشف التعارض يحفظ الاثنين معًا.",
        en: "Blunt refusal costs the relationship; silent acceptance costs the file. Surfacing the conflict preserves both.",
      },
      useItTomorrow: {
        ar: "في المرة القادمة التي يتعارض فيها طلب جديد مع التزام قائم، اذكر الالتزام بوضوح واقترح بديلاً عمليًا واحدًا.",
        en: "Next time a new request conflicts with an existing commitment, state the commitment clearly and propose one practical alternative.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.68-power-moves", "src.fire-proof"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
