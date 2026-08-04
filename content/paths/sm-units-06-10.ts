import type { UnitDef } from "../types";

/**
 * Self-Management path (`path.self-management`, domain `dom.self-management`)
 * — units 6-10, the second half of the path.
 *
 * `ch.sm.staying-steady` covers units 6-8: recognizing your own stress
 * response early, staying composed when someone else is escalating, and a
 * concrete reset habit between a hard call and the next task.
 * `ch.sm.recovering-and-sustaining` covers units 9-10: starting the task
 * you're avoiding, and disclosing honestly and proposing a recovery plan
 * when you are genuinely about to miss a deadline (closing with a
 * simulation).
 *
 * Skills, rubrics and scenarios referenced here are authored elsewhere in
 * the bundle (framework/skills-self-management.ts,
 * framework/rubrics-self-management.ts, scenarios-self-management.ts).
 */
export const SM_UNITS_06_10: UnitDef[] = [
  // =========================================================================
  // UNIT 06 — Naming the spike before it names you
  // =========================================================================
  {
    id: "unit.sm.06",
    chapterId: "ch.sm.staying-steady",
    order: 6,
    title: {
      ar: "سمِّ الشرارة قبل أن تتحكّم بك",
      en: "Naming the Spike Before It Names You",
    },
    subtitle: {
      ar: "الفك المشدود والردّ المقتضب ليسا مجرد شعور، بل إشارة تستحق أن تُقرأ.",
      en: "The tight jaw and the clipped reply are not just a feeling — they are a signal worth reading.",
    },
    primarySkillId: "skill.emotional-intelligence",
    skillIds: ["skill.emotional-intelligence", "skill.resilience"],
    stage: 3,
    estimatedMinutes: 7,
    steps: [
      {
        kind: "hook",
        id: "s.sm.06.hook",
        text: {
          ar: "الرسالة الحادة التي ندمت عليها لاحقاً لم تبدأ في تلك اللحظة. بدأت قبلها بساعة، في إشارة جسدية تجاهلتها.",
          en: "The sharp message you later regretted didn't start in that moment. It started an hour earlier, in a physical signal you ignored.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.sm.06.why",
        text: {
          ar: "من يتجاهل إشارات التوتر المبكرة لا يختفي توتره، بل ينتظر أول شخص أضعف موقعاً - موكل قلق أو زميل مبتدئ - ليصبّ عليه. سمعتك المهنية تُبنى بالساعات الهادئة، وتُهدم بلحظة واحدة.",
          en: "Ignoring early stress signals doesn't make the stress disappear — it waits for whoever has the least power to push back, a worried client or a junior colleague. Your professional reputation is built over quiet hours and undone in one moment.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.sm.06.goals",
        goals: {
          ar: [
            "أن تحدد إشارتين أو ثلاث جسدية أو سلوكية تسبق عادةً ردّة فعلك الحادة.",
            "أن تلاحظ الإشارة في اللحظة نفسها، لا بعد فوات الأوان بساعة.",
            "أن تستخدم وقفة قصيرة ومقصودة تفصل بين الإشارة والرد، بدل أن ينتقل التوتر مباشرة إلى كلامك.",
          ],
          en: [
            "Identify two or three physical or behavioral signals that usually precede your sharp reactions.",
            "Notice the signal in the moment itself, not an hour after the fact.",
            "Use a short, deliberate pause that separates the signal from your response, instead of letting stress travel straight into your words.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.sm.06.lesson",
        title: {
          ar: "الجسد يعرف قبل أن يعرف العقل",
          en: "The body knows before the mind does",
        },
        body: {
          ar: [
            "قبل أن تسمع نفسك تقول جملة حادة، يكون جسدك قد أرسل إشارة: فك مشدود، تنفّس ضيّق، إيقاع كتابة أسرع على لوحة المفاتيح.",
            "هذه الإشارات ليست ضعفاً، بل جهاز إنذار مبكر. المشكلة ليست في وجودها، بل في تجاهلها حتى تتحول إلى كلام لا يمكن سحبه.",
            "لكل شخص إشاراته الخاصة، وتتكرر بالنمط نفسه تقريباً: بعضهم يشدّ فكّه، وبعضهم يفحص هاتفه بلا سبب، وبعضهم يقاطع أسرع من المعتاد.",
            "التمرين الأول ليس إيقاف التوتر - شبه مستحيل تحت ضغط حقيقي - بل تسمية الإشارة فور ظهورها: «هذا هو الفك المشدود، أعرف هذا.»",
            "التسمية وحدها تخلق مسافة صغيرة بين الشعور والفعل. تلك المسافة كافية لاختيار جملة مختلفة عن التي كانت لتخرج تلقائياً.",
            "لا تنتظر لحظة الانفجار لتتعرف على إشاراتك. راجع اليوم آخر مرة انزعجت فيها من زميل أو موكل، وابحث عمّا سبقها بعشر دقائق.",
          ],
          en: [
            "Before you hear yourself say something sharp, your body has already sent a signal: a tight jaw, shallow breathing, faster typing on the keyboard.",
            "These signals aren't weakness — they're an early warning system. The problem isn't that they exist, but that they get ignored until they become words you can't take back.",
            "Everyone has their own signals, and they tend to repeat: some clench their jaw, some check their phone for no reason, some interrupt faster than usual.",
            "The first exercise isn't stopping the stress — nearly impossible under real pressure — it's naming the signal the moment it appears: 'this is the tight jaw, I know this one.'",
            "Naming alone creates a small gap between feeling and action. That gap is enough to choose a different sentence than the one that would have come out automatically.",
            "Don't wait for the blow-up to learn your signals. Think back to the last time a colleague or client irritated you, and look at what happened ten minutes before.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.sm.06.visual",
        title: {
          ar: "لاحظ، سمِّ، اختر",
          en: "Notice, Name, Choose",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "لاحظ", en: "Notice" },
            detail: {
              ar: "فكّ مشدود، أنفاس قصيرة، أو نقر متكرر على الطاولة - قبل أن تتحوّل إلى كلمة.",
              en: "A clenched jaw, short breaths, or repeated tapping on the desk — before it turns into a word.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "سمِّ", en: "Name" },
            detail: {
              ar: "بصمت: «هذه هي الإشارة. أنا متوتر الآن، لا الموكل مخطئ.»",
              en: "Silently: 'This is the signal. I'm stressed right now, not that the client is wrong.'",
            },
            tone: "neutral",
          },
          {
            label: { ar: "اختر", en: "Choose" },
            detail: {
              ar: "جملة واحدة مقصودة بدل الرد التلقائي: «أعطني دقيقة وأعود إليك.»",
              en: "One deliberate sentence instead of the automatic reply: 'Give me a minute and I'll get back to you.'",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.sm.06.worked",
        strong: {
          label: {
            ar: "كريم يلاحظ الإشارة قبل أن يردّ على ريم",
            en: "Karim notices the signal before he replies to Rima",
          },
          text: {
            ar: [
              "الأستاذ كريم فتحي يراجع مستندات إيجار شركة الوابل للاستثمار العقاري قبل موعد تسليم نهائي الساعة الخامسة، وقد بقي له أقل من ساعة.",
              "تدخل المساعدة القانونية ريم عودة وتسأل: «هل نرفق الملحق القديم أم النسخة المعدّلة؟» - سؤال بسيط طرحته من قبل.",
              "يشعر كريم بفكّه يشتدّ وصوته يتجهّز ليخرج حاداً. يتوقف ثانيتين: «هذه هي الإشارة. لستُ غاضباً من ريم، أنا متوتر من الوقت.» ثم يجيب: «النسخة المعدّلة، وشكراً لأنك تأكدت.»",
            ],
            en: [
              "Karim Fathi is reviewing Al-Wabel Real Estate's lease documents before a 5 p.m. deadline, with less than an hour left.",
              "Paralegal Rima Odeh steps in and asks: 'Do we attach the old annex or the revised version?' — a question she'd already asked once.",
              "Karim feels his jaw tighten and his voice ready to come out sharp. He pauses two seconds: 'This is the signal. I'm not angry at Rima, I'm stressed about the time.' Then he answers: 'The revised version — thanks for checking.'",
            ],
          },
          why: {
            ar: "لاحظ الإشارة الجسدية وسمّاها بصمت قبل أن تتحوّل إلى كلمة حادة، ففصل بين توتره الحقيقي وبين ريم التي لم تكن سبب المشكلة.",
            en: "He noticed the physical signal and named it silently before it became a sharp word, separating his real stress from Rima, who wasn't the actual problem.",
          },
        },
        weak: {
          label: {
            ar: "كريم يترك الإشارة تتحول إلى كلمة",
            en: "Karim lets the signal turn into a word",
          },
          text: {
            ar: ["«أليس هذا واضحاً؟ أخبرتك بالنسخة المعدّلة قبل ساعة، هل تحتاجين أن أكتب كل شيء لك؟»"],
            en: ["'Isn't that obvious? I told you the revised version an hour ago — do you need me to write everything down for you?'"],
          },
          why: {
            ar: "لم يلحظ الإشارة فتحوّلت مباشرة إلى ردّ حاد أمام زميلة، أضرّ بثقتها به وبقي أثره في العلاقة بعد انتهاء التوتر بوقت طويل.",
            en: "He missed the signal and it went straight into a sharp reply in front of a colleague, damaging her trust in him long after the stress itself had passed.",
          },
        },
      },
      { kind: "activity", id: "s.sm.06.a1", activityId: "act.sm.06.1", mode: "quick" },
      { kind: "activity", id: "s.sm.06.a2", activityId: "act.sm.06.2", mode: "guided" },
      { kind: "activity", id: "s.sm.06.a3", activityId: "act.sm.06.3", mode: "guided" },
      { kind: "activity", id: "s.sm.06.a4", activityId: "act.sm.06.4", mode: "independent" },
      { kind: "activity", id: "s.sm.06.a5", activityId: "act.sm.06.5", mode: "independent" },
      { kind: "summary", id: "s.sm.06.summary", summaryCardId: "card.sm.06" },
      {
        kind: "apply_tomorrow",
        id: "s.sm.06.apply",
        task: {
          ar: "اليوم، حدد إشارتيك الجسديتين الأكثر تكراراً عند التوتر، ودوّنهما في ملاحظة على هاتفك.",
          en: "Today, identify your two most frequent physical signals of stress, and note them on your phone.",
        },
        detail: {
          ar: "في المرة القادمة التي تشعر فيها بأي منهما، توقف ثانيتين قبل أن تردّ.",
          en: "Next time you feel either one, pause two seconds before you respond.",
        },
      },
      {
        kind: "next_mission",
        id: "s.sm.06.next",
        teaser: {
          ar: "عرفت كيف تقرأ إشاراتك. الوحدة القادمة: كيف تبقى ثابتاً حين يكون المتصاعد هو الطرف الآخر لا أنت.",
          en: "You know how to read your signals. Next: staying steady when it's the other person escalating, not you.",
        },
      },
    ],
    activities: [
      {
        id: "act.sm.06.1",
        kind: "multiple_choice",
        skillId: "skill.emotional-intelligence",
        stage: 3,
        weight: 1,
        context: {
          ar: ["يستعد الأستاذ كريم لاتصال مع موكل قلق بشأن نتيجة عاجلة، ويلاحظ أن كتفيه ارتفعتا وأن تنفّسه أصبح أسرع من المعتاد."],
          en: ["Karim is preparing for a call with an anxious client about an urgent outcome, and notices his shoulders have risen and his breathing is faster than usual."],
        },
        prompt: {
          ar: "ما الخطوة الأولى الأصح بعد ملاحظة هذه الإشارات؟",
          en: "What is the most correct first step after noticing these signals?",
        },
        options: [
          {
            id: "o1",
            label: { ar: "سمِّ الإشارة بصمت لنفسك قبل أن يبدأ الاتصال.", en: "Silently name the signal to yourself before the call starts." },
            correct: true,
            rationale: {
              ar: "بالضبط. التسمية الصامتة تخلق مسافة بين التوتر الجسدي وأول جملة تقولها للموكل، فتمنحك ثوانٍ لاختيار نبرتك.",
              en: "Exactly. Silently naming it creates distance between the physical stress and your first sentence to the client, buying seconds to choose your tone.",
            },
          },
          {
            id: "o2",
            label: { ar: "تجاهل الإشارات لأن الموكل ينتظر ولا وقت للتوقف.", en: "Ignore the signals because the client is waiting and there's no time to pause." },
            rationale: {
              ar: "تجاهل الإشارة لا يزيلها، بل يزيد احتمال أن تظهر في نبرتك دون أن تختار ذلك.",
              en: "Ignoring the signal doesn't remove it — it raises the odds it leaks into your tone without your choosing it.",
            },
          },
          {
            id: "o3",
            label: { ar: "أجّل الاتصال بالكامل حتى يهدأ التوتر تماماً.", en: "Postpone the call entirely until the stress fully disappears." },
            rationale: {
              ar: "تأجيل غير ضروري غالباً؛ الهدف ليس اختفاء التوتر التام بل إدارته خلال دقائق، لا تجنّب الموكل.",
              en: "Usually unnecessary; the goal isn't for stress to vanish entirely, but to manage it within minutes — not avoid the client.",
            },
          },
          {
            id: "o4",
            label: { ar: "أخبر الموكل مباشرة أنك متوتر الآن.", en: "Tell the client directly that you're stressed right now." },
            rationale: {
              ar: "مشاركة داخلية زائدة مع الموكل تنقل العبء إليه دون فائدة، بدل إدارتك لتوترك أولاً بنفسك.",
              en: "Oversharing your internal state with the client shifts the burden to them with no benefit, instead of managing your own stress first.",
            },
          },
        ],
      },
      {
        id: "act.sm.06.2",
        kind: "categorization",
        skillId: "skill.emotional-intelligence",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "صنّف كل سلوك: هل هو إشارة توتر مبكرة تستحق الانتباه، أم سلوك عادي لا علاقة له بالتوتر؟",
          en: "Sort each behavior: is it an early stress signal worth noticing, or an ordinary behavior unrelated to stress?",
        },
        hint: {
          ar: "اسأل: هل هذا السلوك يظهر تحديداً حين يشتد الضغط، أم يحدث بانتظام بصرف النظر عن الضغط؟",
          en: "Ask: does this behavior appear specifically under pressure, or does it happen regardless?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «إشارة مبكرة» / «سلوك عادي» أسفل كل بند بدل السحب.",
          en: "Choose \"Early signal\" / \"Ordinary behavior\" from buttons under each item instead of dragging.",
        },
        buckets: [
          { id: "signal", label: { ar: "إشارة مبكرة", en: "Early signal" } },
          { id: "neutral", label: { ar: "سلوك عادي", en: "Ordinary behavior" } },
        ],
        items: [
          {
            id: "c1",
            label: { ar: "شدّ الفك وصرير الأسنان بلا وعي.", en: "Clenching the jaw and grinding teeth without noticing." },
            bucketId: "signal",
            rationale: {
              ar: "علامة جسدية كلاسيكية للتوتر تسبق الرد الحاد غالباً بدقائق.",
              en: "A classic physical marker of stress that usually precedes a sharp reply by minutes.",
            },
          },
          {
            id: "c2",
            label: { ar: "تفقّد الهاتف بانتظام كل صباح لمتابعة البريد.", en: "Checking the phone routinely every morning to review email." },
            bucketId: "neutral",
            rationale: {
              ar: "عادة عمل يومية معتادة، لا ترتبط بالضرورة بارتفاع التوتر في لحظة بعينها.",
              en: "A routine daily work habit, not necessarily tied to a spike in stress at a specific moment.",
            },
          },
          {
            id: "c3",
            label: { ar: "كتابة رسائل أقصر وأكثر اقتضاباً من المعتاد خلال ساعة.", en: "Writing shorter, curter messages than usual within an hour." },
            bucketId: "signal",
            rationale: {
              ar: "تغيّر مفاجئ في أسلوب الكتابة خلال وقت قصير غالباً يعكس ضغطاً متصاعداً لا نمطاً معتاداً.",
              en: "A sudden shift to shorter, curter writing within an hour usually reflects rising pressure, not a normal pattern.",
            },
          },
          {
            id: "c4",
            label: { ar: "طلب فنجان قهوة عند الساعة العاشرة صباحاً كالمعتاد.", en: "Ordering a coffee at ten a.m., as usual." },
            bucketId: "neutral",
            rationale: {
              ar: "روتين يومي ثابت لا يرتبط بمؤشر توتر آني.",
              en: "A fixed daily routine, unrelated to a moment-to-moment stress indicator.",
            },
          },
          {
            id: "c5",
            label: { ar: "مقاطعة المتحدث قبل أن ينهي جملته، بخلاف عادتك المعتادة.", en: "Interrupting the speaker before they finish, unlike your usual habit." },
            bucketId: "signal",
            rationale: {
              ar: "تغيّر ملحوظ عن نمطك المعتاد في الاستماع غالباً ما يسبق ردة فعل تندم عليها لاحقاً.",
              en: "A noticeable break from your usual listening pattern often precedes a reaction you later regret.",
            },
          },
        ],
      },
      {
        id: "act.sm.06.3",
        kind: "priority_ranking",
        skillId: "skill.emotional-intelligence",
        secondarySkillIds: ["skill.resilience"],
        stage: 3,
        weight: 2,
        prompt: {
          ar: "رتّب الخطوات الأربع بترتيب تنفيذها الفعلي في أول عشر ثوانٍ بعد ملاحظة إشارة توتر.",
          en: "Order the four steps in the sequence you'd actually take in the first ten seconds after noticing a stress signal.",
        },
        hint: {
          ar: "ابدأ بما يوقف الاندفاع التلقائي، وانتهِ بما يحوّل الوعي إلى فعل ملموس.",
          en: "Start with what stops the automatic momentum; end with what turns awareness into a concrete act.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each step instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "توقف عن الكتابة أو الكلام لثانيتين.", en: "Stop typing or talking for two seconds." },
            rationale: {
              ar: "أول خطوة فعلية توقف الاندفاع التلقائي قبل أي شيء آخر.",
              en: "The first physical step that halts the automatic momentum before anything else.",
            },
          },
          {
            id: "i2",
            label: { ar: "سمِّ الإشارة بصمت: «هذا هو الفك المشدود / النبرة الحادة.»", en: "Silently name the signal: 'this is the tight jaw / the sharp tone.'" },
            rationale: {
              ar: "التسمية تربط الشعور الجسدي بمعرفة واعية، لا مجرد إحساس مبهم.",
              en: "Naming links the physical feeling to conscious awareness, not a vague sensation.",
            },
          },
          {
            id: "i3",
            label: { ar: "اسأل نفسك: هل هذا الشخص فعلاً سبب توتري، أم توقيت سيئ فقط؟", en: "Ask yourself: is this person really the cause, or just bad timing?" },
            rationale: {
              ar: "يفصل مصدر التوتر الحقيقي عمّن يقف أمامك في تلك اللحظة.",
              en: "Separates the real source of stress from whoever happens to be standing in front of you.",
            },
          },
          {
            id: "i4",
            label: { ar: "اختر جملة واحدة مقصودة، حتى لو كانت «أعطني دقيقة».", en: "Choose one deliberate sentence, even if it's just 'give me a minute.'" },
            rationale: {
              ar: "يحوّل الوعي إلى فعل ملموس بدل أن يبقى ملاحظة داخلية بلا أثر.",
              en: "Turns awareness into a concrete act instead of staying an internal observation with no effect.",
            },
          },
        ],
      },
      {
        id: "act.sm.06.4",
        kind: "short_written",
        skillId: "skill.emotional-intelligence",
        secondarySkillIds: ["skill.resilience"],
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.self-management-written.v1",
        weight: 3,
        minChars: 120,
        context: {
          ar: ["زميلتك تسأل للمرة الثالثة اليوم عن نفس التفصيل في ملف عاجل ينتهي خلال ساعة. تشعر بفكّك يشتد وصوتك يتجهز ليخرج حاداً."],
          en: ["A colleague asks for the third time today about the same detail in an urgent file due within the hour. You feel your jaw tighten and your voice ready to come out sharp."],
        },
        prompt: {
          ar: "اكتب الرد الذي ستقوله فعلياً (٣٠-٥٠ كلمة)، بحيث يظهر أنك لاحظت توترك دون أن تُسقطه على زميلتك.",
          en: "Write the reply you would actually say (30-50 words), showing you noticed your own stress without dropping it on your colleague.",
        },
        modelAnswer: {
          ar: ["«آسف، أنا مركّز على المهلة الآن وصوتي قد يبدو حاداً - ليس بسببك. الملحق المعدّل هو الصحيح، وسأثبّته في الرسالة القادمة حتى لا نعود لهذا السؤال.»"],
          en: ["'Sorry, I'm focused on the deadline right now and my tone might sound sharp — that's not about you. The revised annex is the right one, and I'll confirm it in the next message so we don't circle back to this.'"],
        },
        weakAnswer: {
          text: {
            ar: ["«قلت لك سابقاً، ركّزي أكثر من فضلك.»"],
            en: ["'I told you before, please focus more.'"],
          },
          whatIsWrong: {
            ar: "يُسقط التوتر على الزميلة مباشرة، ويحمّلها مسؤولية الضغط الذي مصدره الوقت لا أداؤها.",
            en: "Drops the stress straight onto the colleague, blaming her for pressure that actually comes from the deadline, not her performance.",
          },
        },
      },
      {
        id: "act.sm.06.5",
        kind: "reflection",
        skillId: "skill.emotional-intelligence",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع آخر مرة رددت فيها بحدّة على زميل أو موكل. ما الإشارة الجسدية أو السلوكية التي ظهرت قبلها بدقائق؟",
          en: "Recall the last time you snapped at a colleague or client. What physical or behavioral signal appeared minutes before?",
        },
        followUp: {
          ar: "لو لاحظت تلك الإشارة وسمّيتها، ما الجملة المختلفة التي كنت لتقولها بدلاً من ذلك؟",
          en: "If you'd noticed and named that signal, what different sentence would you have said instead?",
        },
      },
    ],
    summaryCard: {
      id: "card.sm.06",
      title: {
        ar: "الإشارة قبل الكلمة",
        en: "The Signal Before the Word",
      },
      whatYouLearned: {
        ar: [
          "جسدك يرسل إشارة قبل أن يخرج الرد الحاد بثوانٍ - فكّ مشدود، تنفّس سريع، أسلوب كتابة مقتضب.",
          "تسمية الإشارة بصمت تخلق مسافة كافية لاختيار رد مختلف عن الرد التلقائي.",
          "مصدر توترك غالباً ليس الشخص الواقف أمامك، بل الضغط أو الوقت - افصل بينهما قبل أن تجيب.",
        ],
        en: [
          "Your body sends a signal seconds before the sharp reply — a tight jaw, fast breathing, a curter writing style.",
          "Silently naming the signal creates enough distance to choose a different response than the automatic one.",
          "The real source of your stress usually isn't the person in front of you — separate the two before you answer.",
        ],
      },
      framework: {
        name: { ar: "لاحظ · سمِّ · اسأل · اختر", en: "Notice · Name · Ask · Choose" },
        steps: [
          { ar: "لاحظ الإشارة الجسدية أو السلوكية فور ظهورها.", en: "Notice the physical or behavioral signal the moment it appears." },
          { ar: "سمِّها بصمت لنفسك دون أي حكم.", en: "Silently name it to yourself, without judgment." },
          { ar: "اسأل: هل هذا الشخص فعلاً السبب، أم توقيت الضغط؟", en: "Ask: is this person really the cause, or just bad timing under pressure?" },
          { ar: "اختر جملة واحدة مقصودة بدل الرد التلقائي.", en: "Choose one deliberate sentence instead of the automatic reply." },
        ],
      },
      rememberThis: {
        ar: "الإشارة التي تتجاهلها اليوم تتحول غداً إلى جملة تعتذر عنها.",
        en: "The signal you ignore today becomes tomorrow's sentence you have to apologize for.",
      },
      useItTomorrow: {
        ar: "اكتب إشارتيك الأكثر تكراراً على ورقة قريبة منك، وراقب ظهورهما خلال يوم عمل واحد.",
        en: "Write your two most frequent signals on a note nearby, and watch for them during one workday.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.your-brain-at-work", "src.the-antidote", "src.meditations-for-mortals"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 07 — Staying steady when the client or partner is not
  // =========================================================================
  {
    id: "unit.sm.07",
    chapterId: "ch.sm.staying-steady",
    order: 7,
    title: {
      ar: "الثبات حين لا يكون الموكل أو الشريك ثابتاً",
      en: "Staying Steady When the Client or Partner Is Not",
    },
    subtitle: {
      ar: "لا تجاري نبرته المرتفعة، ولا تنغلق عليه - ابقَ في المنتصف بوعي.",
      en: "Don't mirror the raised voice, and don't shut down either — stay deliberately in the middle.",
    },
    primarySkillId: "skill.emotional-intelligence",
    skillIds: ["skill.emotional-intelligence", "skill.resilience"],
    stage: 3,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.sm.07.hook",
        text: {
          ar: "حين يرفع الطرف الآخر صوته، أمامك خياران سريعان يبدوان طبيعيين: أن ترفع صوتك أيضاً، أو أن تصمت وتنسحب. كلاهما خطأ.",
          en: "When the other side raises their voice, two fast options feel natural: raise yours too, or go silent and withdraw. Both are wrong.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.sm.07.why",
        text: {
          ar: "الموكل القلق أو الشريك المتعجل يقيّمك في تلك اللحظة تحديداً: هل يمكن الاعتماد عليك حين تشتد الأمور؟ من يجاري التصعيد يفقد مصداقيته، ومن ينغلق يبدو غير مبالٍ.",
          en: "An anxious client or an impatient partner is judging you exactly in that moment: can they rely on you when things get hard? Mirror the escalation and you lose credibility; shut down and you look indifferent.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.sm.07.goals",
        goals: {
          ar: [
            "أن تميّز بين مجاراة نبرة الطرف الآخر والانغلاق التام عنه - وكلاهما استجابة تلقائية لا واعية.",
            "أن تستخدم نبرة هادئة وثابتة تعترف بانفعال الطرف الآخر دون أن تتبناه.",
            "أن تعيد توجيه الحوار نحو الحقائق والخطوة التالية بدل الاستمرار في تبادل الانفعال.",
          ],
          en: [
            "Distinguish between mirroring the other person's tone and shutting down completely — both are unconscious automatic reactions.",
            "Use a calm, steady tone that acknowledges the other person's emotion without adopting it.",
            "Redirect the conversation toward facts and the next step, instead of continuing to trade emotion.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.sm.07.lesson",
        title: {
          ar: "الثبات ليس برودة",
          en: "Steadiness is not coldness",
        },
        body: {
          ar: [
            "حين يتصاعد صوت الطرف الآخر، جسدك يميل تلقائياً لأحد أمرين: مجاراة النبرة، أو الانغلاق والصمت. كلاهما رد فعل، لا اختيار.",
            "مجاراة النبرة تحوّل مكالمة مهنية إلى مواجهة شخصية، ويتذكرها الموكل لاحقاً كدليل على أنك فقدت السيطرة، لا كإثبات لحقك.",
            "الانغلاق التام يبدو حلاً آمناً، لكنه يُقرأ غالباً كـ لا مبالاة، فيزيد قلق الموكل بدل أن يهدئه.",
            "الثبات مسار ثالث: تعترف بانفعال الطرف الآخر بجملة قصيرة، دون أن توافقه على استنتاجه، ودون أن تتخلى عن موقفك المهني.",
            "جملة الاعتراف لا تعني الاستسلام: «أفهم أن هذا التأخير مزعج لك» تعترف بالمشاعر، لا بالخطأ المزعوم.",
            "بعد الاعتراف، وجّه الحوار فوراً نحو الوقائع أو الخطوة التالية، قبل أن ينزلق مجدداً إلى تبادل الانفعال.",
            "النبرة الهادئة المتكررة، لا الصوت المرتفع أو الصمت، هي ما يبني سمعتك كمن يمكن الاعتماد عليه تحت الضغط.",
          ],
          en: [
            "When the other side's voice rises, your body defaults to one of two things: mirroring the tone, or shutting down. Both are a reaction, not a choice.",
            "Mirroring the tone turns a professional call into a personal confrontation, and the client later remembers it as proof you lost control, not proof you were right.",
            "Shutting down completely feels safe, but usually reads as indifference, raising the client's anxiety instead of calming it.",
            "Steadiness is a third path: acknowledge the other person's emotion in one short sentence, without agreeing with their conclusion, and without abandoning your professional position.",
            "Acknowledging isn't surrendering: 'I understand this delay is frustrating' names the feeling, not the alleged fault.",
            "After acknowledging, redirect immediately toward facts or the next step, before the exchange slides back into trading emotion.",
            "A repeated calm tone — not a raised voice, not silence — is what builds your reputation as someone reliable under pressure.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.sm.07.visual",
        title: {
          ar: "مجاراة، انغلاق، أو ثبات واعٍ",
          en: "Mirroring, Shutting Down, or Deliberate Steadiness",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "مجاراة النبرة", en: "Mirroring the tone" },
            detail: {
              ar: "صوت يرتفع مقابل صوت - يتحول الخلاف المهني إلى مواجهة شخصية.",
              en: "Voice rises to meet voice — a professional disagreement becomes a personal fight.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الانغلاق التام", en: "Shutting down completely" },
            detail: {
              ar: "صمت أو إجابات مقتضبة - يُقرأ كـ لا مبالاة فيزيد القلق.",
              en: "Silence or curt answers — reads as indifference and raises anxiety.",
            },
            tone: "negative",
          },
          {
            label: { ar: "الثبات الواعي", en: "Deliberate steadiness" },
            detail: {
              ar: "اعتراف قصير بالمشاعر، ثم توجيه فوري نحو الوقائع والخطوة التالية.",
              en: "A short acknowledgment of feeling, then an immediate redirect to facts and the next step.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.sm.07.worked",
        strong: {
          label: {
            ar: "كريم يعترف بقلق منى دون أن يتبناه",
            en: "Karim acknowledges Mona's anxiety without adopting it",
          },
          text: {
            ar: [
              "تتصل السيدة منى الحوراني، صاحبة شركة النخيل للتجارة العامة، بصوت مرتفع: «شهران على قضية الشيك المرتجع ولا نتيجة! هل تهتمون بملفي أصلاً؟»",
              "يجيب كريم بنبرة هادئة وثابتة: «أفهم تماماً أن هذا التأخير مقلق، خصوصاً مع تأثيره على السيولة. دعيني أحدّثك بالضبط أين وصلت الجلسة الأخيرة وما الخطوة القادمة.»",
            ],
            en: [
              "Ms Mona Al-Hourani, owner of Al-Nakheel General Trading, calls with a raised voice: 'Two months on this dishonoured-cheque case with no result! Do you even care about my file?'",
              "Karim replies in a calm, steady tone: 'I completely understand this delay is worrying, especially with the cash-flow impact. Let me walk you through exactly where the last hearing stands and what's next.'",
            ],
          },
          why: {
            ar: "اعترف بقلقها الحقيقي دون أن يقرّ بأن المكتب مقصّر، ثم وجّه الحوار فوراً نحو الوقائع الملموسة والخطوة التالية.",
            en: "He acknowledged her real worry without conceding the firm was negligent, then redirected immediately to concrete facts and the next step.",
          },
        },
        weak: {
          label: {
            ar: "كريم ينغلق أو يجاري التصعيد",
            en: "Karim shuts down or mirrors the escalation",
          },
          text: {
            ar: ["«أنا أعمل بأقصى ما يمكنني، ولا يمكنني تسريع القضاء. إذا لم يعجبك الأمر يمكنك البحث عن مكتب آخر.»"],
            en: ["'I'm doing everything I can, and I can't speed up the courts. If you don't like it, you can find another firm.'"],
          },
          why: {
            ar: "جارى التصعيد بنبرة دفاعية حادة، فحوّل مكالمة عن ملف إلى مواجهة شخصية أفقدت الموكلة الثقة بمن يفترض أن يطمئنها.",
            en: "He mirrored the escalation with a sharp defensive tone, turning a case call into a personal fight that cost the very trust meant to reassure her.",
          },
        },
      },
      { kind: "activity", id: "s.sm.07.a1", activityId: "act.sm.07.1", mode: "quick" },
      { kind: "activity", id: "s.sm.07.a2", activityId: "act.sm.07.2", mode: "guided" },
      { kind: "activity", id: "s.sm.07.a3", activityId: "act.sm.07.3", mode: "guided" },
      { kind: "activity", id: "s.sm.07.a4", activityId: "act.sm.07.4", mode: "independent" },
      { kind: "activity", id: "s.sm.07.a5", activityId: "act.sm.07.5", mode: "independent" },
      { kind: "summary", id: "s.sm.07.summary", summaryCardId: "card.sm.07" },
      {
        kind: "apply_tomorrow",
        id: "s.sm.07.apply",
        task: {
          ar: "حضّر مسبقاً جملة اعتراف واحدة تصلح لأي موكل أو شريك متصاعد، واحفظها.",
          en: "Prepare one acknowledgment sentence in advance that fits any escalating client or partner, and memorize it.",
        },
        detail: {
          ar: "الجملة الجاهزة مسبقاً أسهل استرجاعاً تحت الضغط من الجملة المرتجلة.",
          en: "A sentence prepared in advance is easier to recall under pressure than one improvised.",
        },
      },
      {
        kind: "next_mission",
        id: "s.sm.07.next",
        teaser: {
          ar: "عرفت كيف تبقى ثابتاً أثناء المواجهة. الوحدة القادمة: ماذا تفعل بعد أن تنتهي المكالمة الصعبة، قبل أن تبدأ المهمة التالية.",
          en: "You know how to stay steady during confrontation. Next: what to do after the hard call ends, before you start the next task.",
        },
      },
    ],
    activities: [
      {
        id: "act.sm.07.1",
        kind: "best_response",
        skillId: "skill.emotional-intelligence",
        stage: 3,
        weight: 1,
        context: {
          ar: ["يتصل شريك مسؤول متعجل بكريم قبل اجتماع بخمس دقائق: «أين مذكرة الدفاع؟ كان يجب أن تصلني أمس!»"],
          en: ["An impatient responsible partner calls Karim five minutes before a meeting: 'Where's the defense memo? It should have reached me yesterday!'"],
        },
        prompt: {
          ar: "ما أفضل رد فوري من كريم؟",
          en: "What is Karim's best immediate response?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«أفهم أن التوقيت ضيق. المذكرة جاهزة بنسبة تسعين بالمئة، وسأرسلها خلال عشر دقائق مع ملاحظة بالنقطة المتبقية.»",
              en: "'I understand the timing is tight. The memo is ninety percent ready, and I'll send it within ten minutes with a note on the one remaining point.'",
            },
            correct: true,
            rationale: {
              ar: "يعترف بضغط الشريك دون جدال، ويقدّم وضعاً واقعياً وموعداً محدداً بدل اعتذار عام أو دفاع مطوّل.",
              en: "Acknowledges the partner's pressure without arguing, and gives a real status and a specific time instead of a vague apology or a long defense.",
            },
          },
          {
            id: "o2",
            label: { ar: "«لم يصلك أحد بأن الموعد تأجّل؟ لم أكن أعلم أنك بحاجة إليها اليوم.»", en: "'Didn't anyone tell you the deadline moved? I didn't know you needed it today.'" },
            rationale: {
              ar: "دفاعي ويحوّل اللوم إلى طرف ثالث، دون أن يقدّم أي معلومة عملية عن حالة المذكرة الآن.",
              en: "Defensive and shifts blame to a third party, without giving any practical information about the memo's current status.",
            },
          },
          {
            id: "o3",
            label: { ar: "«أنت دائماً تطلب أشياء في اللحظة الأخيرة، وهذا غير عادل.»", en: "'You always ask for things at the last minute, this isn't fair.'" },
            rationale: {
              ar: "يجاري التصعيد بمواجهة مباشرة مع شريك مسؤول، ويصعّد التوتر بدل حل المشكلة الفورية.",
              en: "Mirrors the escalation with a direct confrontation toward a responsible partner, escalating tension instead of solving the immediate problem.",
            },
          },
          {
            id: "o4",
            label: { ar: "«حسناً» ثم إنهاء المكالمة دون أي تفصيل.", en: "'Okay' then ending the call with no detail." },
            rationale: {
              ar: "انغلاق يترك الشريك بلا معلومة فعلية، فيزيد قلقه بدل أن يطمئنه.",
              en: "Shutting down leaves the partner with no real information, increasing his anxiety instead of reassuring him.",
            },
          },
        ],
      },
      {
        id: "act.sm.07.2",
        kind: "matching",
        skillId: "skill.emotional-intelligence",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "طابق كل نوع تصعيد مع الجملة الثابتة التي تحيّده دون مجاراة أو انغلاق.",
          en: "Match each type of escalation with the steady phrase that defuses it without mirroring or shutting down.",
        },
        accessibleAlternative: {
          ar: "اختر الجملة المطابقة من قائمة منسدلة بجانب كل موقف بدل السحب.",
          en: "Pick the matching phrase from a dropdown beside each situation instead of dragging.",
        },
        pairs: [
          {
            id: "p1",
            left: { ar: "موكل يرفع صوته ويتهم بالإهمال", en: "Client raising their voice, alleging neglect" },
            right: {
              ar: "«أفهم أن هذا مقلق جداً بالنسبة لك، دعني أطلعك بدقة على آخر تطور.»",
              en: "'I understand this is very worrying for you, let me walk you through the latest development exactly.'",
            },
            rationale: {
              ar: "يعترف بالانفعال دون الإقرار بالتهمة، ويوجّه فوراً للوقائع.",
              en: "Acknowledges the emotion without conceding the accusation, and redirects immediately to facts.",
            },
          },
          {
            id: "p2",
            left: { ar: "شريك يقاطع بحدة أثناء عرضك", en: "Partner interrupting sharply during your presentation" },
            right: {
              ar: "«نقطة مهمة، سأعود إليها بعد أن أنهي السياق الأساسي بدقيقة.»",
              en: "'Important point, I'll come back to it once I finish the core context in a minute.'",
            },
            rationale: {
              ar: "يحترم المقاطعة دون التخلي عن تسلسل عرضه، ويحدد موعداً قصيراً للعودة.",
              en: "Respects the interruption without abandoning his sequence, and sets a short time to return to it.",
            },
          },
          {
            id: "p3",
            left: { ar: "زميل يلقي باللوم عليك أمام الفريق", en: "Colleague pinning blame on you in front of the team" },
            right: {
              ar: "«لنراجع التسلسل الفعلي بعد الاجتماع بدل أن نناقشه أمام الجميع الآن.»",
              en: "'Let's review what actually happened after the meeting, rather than discuss it in front of everyone now.'",
            },
            rationale: {
              ar: "يؤجل المواجهة إلى سياق أنسب دون صمت كامل أو رد فوري حاد.",
              en: "Defers the confrontation to a more suitable setting, without total silence or an immediate sharp reply.",
            },
          },
          {
            id: "p4",
            left: { ar: "موكل يهدد بترك المكتب فوراً", en: "Client threatening to leave the firm immediately" },
            right: {
              ar: "«قرارك، وأحترمه. قبل ذلك، اسمح لي بخمس دقائق أوضح فيها أين وصلنا فعلياً.»",
              en: "'That's your decision, and I respect it. Before that, let me have five minutes to show you exactly where we actually stand.'",
            },
            rationale: {
              ar: "لا يتوسل ولا يتجاهل التهديد، بل يطلب مساحة قصيرة لعرض الوقائع بثقة.",
              en: "Neither begs nor ignores the threat, but asks for a short space to present the facts with confidence.",
            },
          },
        ],
      },
      {
        id: "act.sm.07.3",
        kind: "branching_decision",
        skillId: "skill.emotional-intelligence",
        secondarySkillIds: ["skill.resilience"],
        stage: 3,
        weight: 2,
        prompt: {
          ar: "أدِر المكالمة مع السيدة منى حتى نهايتها. اختر ما ستقوله فعلياً في كل لحظة.",
          en: "Run the call with Ms Mona to its end. Choose what you would actually say at each moment.",
        },
        hint: {
          ar: "اسأل: هل هذا اعتراف بمشاعرها، مجاراة لتصعيدها، أم انغلاق عنها؟",
          en: "Ask: is this acknowledging her feelings, mirroring her escalation, or shutting her out?",
        },
        accessibleAlternative: {
          ar: "الحوار متاح كنص متسلسل مع أزرار اختيار، دون أي مؤقت زمني.",
          en: "The dialogue runs as sequential text with choice buttons, with no timer.",
        },
        startNodeId: "n1",
        nodes: [
          {
            id: "n1",
            text: {
              ar: "منى بصوت مرتفع: «شهران بلا نتيجة! أشعر أنكم لا تعطون ملفي أي أولوية.»",
              en: "Mona, raised voice: 'Two months with no result! I feel like my file isn't a priority for you at all.'",
            },
            choices: [
              {
                id: "c1a",
                label: {
                  ar: "«أفهم تماماً شعورك، وأريد أن أشرح لك بالتحديد أين وصلت القضية الآن.»",
                  en: "'I completely understand how you feel, and I want to explain exactly where the case stands right now.'",
                },
                nextNodeId: "n2",
                quality: "strong",
                rationale: {
                  ar: "يعترف بمشاعرها الحقيقية دون نقاش، ويهيّئ الانتقال إلى الوقائع بثقة.",
                  en: "Acknowledges her real feelings without arguing, and sets up a confident move to the facts.",
                },
              },
              {
                id: "c1b",
                label: {
                  ar: "«هذا غير صحيح، نحن نعطي كل ملف الأولوية نفسها، القضاء بطيء وليس نحن.»",
                  en: "'That's not true, we give every file equal priority — the courts are slow, not us.'",
                },
                nextNodeId: "n2",
                quality: "critical_mistake",
                rationale: {
                  ar: "دفاعي ومباشر في الرفض، يرفض مشاعرها قبل أن يسمعها، ما يرفع التصعيد لا يخفضه.",
                  en: "Defensive and blunt in denial, dismissing her feelings before hearing them, raising escalation instead of lowering it.",
                },
              },
              {
                id: "c1c",
                label: { ar: "«حسناً، سأرى ما يمكنني فعله.» ثم صمت.", en: "'Okay, I'll see what I can do.' Then silence." },
                nextNodeId: "n2",
                quality: "weak",
                rationale: {
                  ar: "انغلاق مقتضب يترك قلقها بلا معالجة فعلية، وقد يُقرأ كـ لا مبالاة.",
                  en: "A curt shutdown that leaves her anxiety unaddressed, and may read as indifference.",
                },
              },
            ],
          },
          {
            id: "n2",
            text: {
              ar: "منى، أهدأ قليلاً: «حسناً، أخبرني إذاً - ماذا حدث فعلاً في الجلسة الأخيرة؟»",
              en: "Mona, slightly calmer: 'Fine, tell me then — what actually happened at the last hearing?'",
            },
            choices: [
              {
                id: "c2a",
                label: {
                  ar: "«القاضي أجّل الجلسة لاستكمال مستند من البنك، والموعد القادم بعد عشرة أيام. سأرسل لك تحديثاً كتابياً اليوم.»",
                  en: "'The judge postponed to complete a document from the bank, next hearing in ten days. I'll send you a written update today.'",
                },
                nextNodeId: null,
                quality: "strong",
                rationale: {
                  ar: "معلومة محددة وموعد تحديث واضح يعيدان بناء الثقة بشكل ملموس.",
                  en: "Specific information and a clear update timeline concretely rebuild trust.",
                },
              },
              {
                id: "c2b",
                label: { ar: "«هناك تأخير إجرائي عادي، الأمور تسير بشكل طبيعي.»", en: "'There's a normal procedural delay, things are proceeding normally.'" },
                nextNodeId: null,
                quality: "acceptable",
                rationale: {
                  ar: "مطمئن لكنه عام جداً، لا يمنحها معلومة ملموسة تبرر الثقة فعلياً.",
                  en: "Reassuring but too vague — gives her no concrete information that actually justifies trust.",
                },
              },
              {
                id: "c2c",
                label: { ar: "«لا أذكر التفاصيل بدقة الآن، سأتحقق وأعاود الاتصال ربما غداً.»", en: "'I don't recall the details exactly right now, I'll check and maybe call back tomorrow.'" },
                nextNodeId: null,
                quality: "critical_mistake",
                rationale: {
                  ar: "في لحظة قلق عالٍ، غياب أي معلومة فورية يهدم الثقة التي حاول بناءها في الرد الأول.",
                  en: "At a moment of high anxiety, having no immediate information at all undoes the trust the first reply tried to build.",
                },
              },
            ],
          },
        ],
      },
      {
        id: "act.sm.07.4",
        kind: "short_written",
        skillId: "skill.emotional-intelligence",
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.self-management-written.v1",
        weight: 3,
        minChars: 140,
        context: {
          ar: ["انتهت مكالمة متوترة مع السيدة منى الحوراني. وعدتها بتحديث كتابي اليوم عن حالة قضية الشيك المرتجع وموعد الجلسة القادمة بعد عشرة أيام."],
          en: ["The tense call with Ms Mona Al-Hourani has ended. You promised her a written update today on the dishonoured-cheque case and the next hearing date, in ten days."],
        },
        prompt: {
          ar: "اكتب رسالة متابعة قصيرة (٤٠-٦٠ كلمة) بنبرة هادئة وواثقة، تلخّص الوضع وتحدد الخطوة القادمة.",
          en: "Write a short follow-up message (40-60 words) in a calm, confident tone that summarizes the status and states the next step.",
        },
        modelAnswer: {
          ar: ["«السيدة منى، كما وعدت: أجّل القاضي الجلسة لاستكمال مستند من البنك، والجلسة القادمة بعد عشرة أيام بتاريخ [كذا]. سأتابع معك فور توفر أي تطور، ولن تحتاجي للسؤال.»"],
          en: ["'Ms Mona, as promised: the judge postponed the hearing to complete a document from the bank, and the next hearing is in ten days, on [date]. I'll follow up the moment anything develops — you won't need to ask.'"],
        },
        weakAnswer: {
          text: {
            ar: ["«القضية تسير، سأحدّثك حين يكون هناك جديد.»"],
            en: ["'The case is progressing, I'll update you when there's something new.'"],
          },
          whatIsWrong: {
            ar: "لا يقدّم معلومة ملموسة ولا موعداً محدداً، فيترك القلق الذي أثاره الاتصال دون معالجة فعلية.",
            en: "Gives no concrete information and no specific date, leaving the anxiety the call raised effectively unaddressed.",
          },
        },
      },
      {
        id: "act.sm.07.5",
        kind: "reflection",
        skillId: "skill.emotional-intelligence",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع موقفاً تصاعد فيه انفعال موكل أو شريك تجاهك. هل جاريت النبرة، انغلقت، أم بقيت ثابتاً؟",
          en: "Recall a moment a client's or partner's emotion escalated toward you. Did you mirror the tone, shut down, or stay steady?",
        },
        followUp: {
          ar: "ما الجملة الواحدة التي كان يمكن أن تحوّل ذلك الموقف نحو الثبات؟",
          en: "What single sentence could have shifted that moment toward steadiness?",
        },
      },
    ],
    summaryCard: {
      id: "card.sm.07",
      title: {
        ar: "الثبات مسار ثالث",
        en: "Steadiness Is a Third Path",
      },
      whatYouLearned: {
        ar: [
          "مجاراة التصعيد والانغلاق كلاهما رد فعل تلقائي، لا اختيار واعٍ.",
          "الاعتراف القصير بمشاعر الطرف الآخر لا يعني الموافقة على استنتاجه.",
          "بعد الاعتراف، وجّه الحوار فوراً نحو الوقائع والخطوة التالية.",
        ],
        en: [
          "Mirroring the escalation and shutting down are both automatic reactions, not a conscious choice.",
          "A short acknowledgment of the other person's feelings doesn't mean agreeing with their conclusion.",
          "After acknowledging, redirect immediately toward facts and the next step.",
        ],
      },
      framework: {
        name: { ar: "اعترف · لا توافق · وجّه", en: "Acknowledge · Don't Concede · Redirect" },
        steps: [
          { ar: "اعترف بانفعال الطرف الآخر بجملة قصيرة صادقة.", en: "Acknowledge the other person's emotion in one short, honest sentence." },
          { ar: "لا توافق على استنتاجه أو اتهامه ضمن ذلك الاعتراف.", en: "Don't concede their conclusion or accusation within that acknowledgment." },
          { ar: "وجّه الحوار فوراً نحو الوقائع الملموسة والخطوة القادمة.", en: "Redirect immediately toward concrete facts and the next step." },
        ],
      },
      rememberThis: {
        ar: "من يجاري الصوت المرتفع يخسر مصداقيته، ومن ينغلق عنه يخسر ثقته.",
        en: "Match the raised voice and you lose credibility; shut it out and you lose trust.",
      },
      useItTomorrow: {
        ar: "في أول مكالمة متوترة هذا الأسبوع، جرّب جملة اعتراف واحدة قبل أن تنتقل إلى الوقائع.",
        en: "In your first tense call this week, try one acknowledgment sentence before moving to the facts.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.your-brain-at-work", "src.the-antidote", "src.68-power-moves"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 08 — The reset: what changes the next hour
  // =========================================================================
  {
    id: "unit.sm.08",
    chapterId: "ch.sm.staying-steady",
    order: 8,
    title: {
      ar: "إعادة الضبط: ما يتغيّر في الساعة القادمة",
      en: "The Reset: What Changes the Next Hour",
    },
    subtitle: {
      ar: "ليست نصيحة عامة عن الاسترخاء، بل عادة قصيرة ومحددة تمنع التوتر من التسرب إلى مهمتك التالية.",
      en: "Not generic relaxation advice — a short, specific habit that stops stress leaking into your next task.",
    },
    primarySkillId: "skill.emotional-intelligence",
    skillIds: ["skill.emotional-intelligence", "skill.focus-under-interruption"],
    stage: 3,
    estimatedMinutes: 7,
    steps: [
      {
        kind: "hook",
        id: "s.sm.08.hook",
        text: {
          ar: "المكالمة الصعبة انتهت. لكنها لم تنتهِ فعلاً - ستظهر مجدداً في أول خطأ صغير ترتكبه في المهمة التالية.",
          en: "The hard call is over. But it isn't really over — it will show up again in the first small mistake you make on the next task.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.sm.08.why",
        text: {
          ar: "من ينتقل مباشرة من مكالمة متوترة إلى صياغة عقد أو مراجعة مذكرة، ينقل توتره معه دون أن يقصد، فيخطئ في تفصيل كان سيلاحظه في يوم هادئ.",
          en: "Move straight from a tense call into drafting a contract or reviewing a memo, and you carry the stress with you unintentionally, missing a detail you'd have caught on a calm day.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.sm.08.goals",
        goals: {
          ar: [
            "أن تتعرّف على أثر التوتر غير المُعالَج على جودة عملك خلال الساعة التالية مباشرة.",
            "أن تستخدم عادة إعادة ضبط قصيرة (تحت الدقيقتين) بين مهمة صعبة وأخرى.",
            "أن تختار عادة ملموسة ومحددة بدل نصيحة عامة مثل «خذ نفساً عميقاً» دون تفاصيل.",
          ],
          en: [
            "Recognize how unaddressed stress affects the quality of your work in the very next hour.",
            "Use a short reset habit (under two minutes) between a hard task and the next one.",
            "Choose a concrete, specific habit instead of generic advice like 'take a deep breath' with no detail.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.sm.08.lesson",
        title: {
          ar: "إعادة الضبط عادة، لا شعار",
          en: "The reset is a habit, not a slogan",
        },
        body: {
          ar: [
            "النصيحة العامة «خذ نفساً عميقاً واسترخِ» تبدو منطقية، لكنها غير محددة بما يكفي لتصبح عادة فعلية تحت ضغط يوم عمل حقيقي.",
            "العادة الفعّالة قصيرة جداً - أقل من دقيقتين - ومحددة الخطوات بدقة، وتُنفَّذ بين إغلاق مهمة صعبة وفتح المهمة التالية.",
            "مثال ملموس: أغلق الشاشة لعشرين ثانية، اكتب على ورقة جملة واحدة تلخّص ما حدث في المكالمة، ثم ضعها جانباً - لا تحملها معك ذهنياً.",
            "الخطوة الثانية: اسأل نفسك سؤالاً واحداً محدداً عن المهمة القادمة: «ما أول جملة سأكتبها في هذا المستند؟» - يعيد تركيزك من المكالمة إلى العمل.",
            "لا تنتقل مباشرة من الشاشة إلى الشاشة. الوقوف لعشرين ثانية أو النظر من النافذة كافٍ لفصل مهمة عن أخرى، ولو بدا وقتاً ضائعاً.",
            "التوقيت أهم من المدة: دقيقة واحدة بين المهمتين أكثر فعالية من عشر دقائق تأمّل في نهاية اليوم بعد أن تراكمت الأخطاء بالفعل.",
            "هذه العادة لا تُلغي التوتر، بل تمنعه من التسرب إلى المهمة التالية - وهذا كل ما تحتاجه فعلياً.",
          ],
          en: [
            "The generic advice 'take a deep breath and relax' sounds reasonable, but isn't specific enough to become a real habit under real workday pressure.",
            "An effective habit is very short — under two minutes — with precisely defined steps, run between closing a hard task and opening the next.",
            "A concrete example: close the screen for twenty seconds, write one sentence on paper summarizing what happened on the call, then set it aside — don't carry it mentally.",
            "Second step: ask yourself one specific question about the upcoming task: 'what's the first sentence I'll write in this document?' — this pulls focus from the call to the work.",
            "Don't jump straight from screen to screen. Standing for twenty seconds or looking out a window is enough to separate one task from the next, even if it feels like wasted time.",
            "Timing matters more than length: one minute between tasks is more effective than ten minutes of reflection at day's end, after mistakes have already piled up.",
            "This habit doesn't erase the stress — it stops it leaking into the next task. That's all it actually needs to do.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.sm.08.visual",
        title: {
          ar: "دقيقتان بين مهمة وأخرى",
          en: "Two Minutes Between Tasks",
        },
        variant: "timeline",
        items: [
          {
            label: { ar: "أغلق (٢٠ ثانية)", en: "Close (20 sec)" },
            detail: {
              ar: "أغلق الشاشة أو انهِ المكالمة فعلياً، دون فتح تبويب جديد فوراً.",
              en: "Close the screen or actually end the call, without opening a new tab immediately.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "دوّن (٣٠ ثانية)", en: "Name it (30 sec)" },
            detail: {
              ar: "جملة واحدة مكتوبة تلخّص ما حدث، ثم ضعها جانباً.",
              en: "One written sentence summarizing what happened, then set it aside.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "تحرّك (٣٠ ثانية)", en: "Move (30 sec)" },
            detail: {
              ar: "قف، أو انظر من النافذة - فصل جسدي بسيط بين مهمتين.",
              en: "Stand up, or look out a window — a simple physical break between tasks.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "أعد التركيز (٣٠ ثانية)", en: "Refocus (30 sec)" },
            detail: {
              ar: "سؤال واحد محدد عن أول خطوة في المهمة القادمة.",
              en: "One specific question about the first step of the next task.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.sm.08.worked",
        strong: {
          label: {
            ar: "كريم يعيد ضبط نفسه قبل الصياغة",
            en: "Karim resets before drafting",
          },
          text: {
            ar: [
              "بعد مكالمة منى المتوترة، لدى كريم عشرون دقيقة قبل صياغة مذكرة نزاع علامة تجارية لشركة مرفأ الشرق للشحن.",
              "يغلق شاشة الهاتف، ويكتب على ورقة: «مكالمة صعبة، منى قلقة بشأن السيولة - انتهت.» ثم يضعها جانباً ويقف دقيقة عند النافذة.",
              "يسأل نفسه: «ما أول جملة سأكتبها في مذكرة مرفأ الشرق؟» ويبدأ الصياغة بتركيز واضح، دون أن تظهر حدّة المكالمة في أسلوب كتابته.",
            ],
            en: [
              "After the tense Mona call, Karim has twenty minutes before drafting a trademark-dispute memo for Marfa Al-Sharq Shipping.",
              "He closes the phone screen, and writes on paper: 'Hard call, Mona worried about cash flow — done.' Then sets it aside and stands by the window for a minute.",
              "He asks himself: 'what's the first sentence I'll write in the Marfa Al-Sharq memo?' and starts drafting with clear focus, with none of the call's edge showing in his writing.",
            ],
          },
          why: {
            ar: "فصل جسدياً وذهنياً بين المكالمة والمذكرة خلال دقيقتين فقط، فلم ينتقل توتره إلى صياغة قانونية تتطلب دقة.",
            en: "He separated the call from the memo, physically and mentally, in just two minutes, so his stress never carried into legal drafting that demanded precision.",
          },
        },
        weak: {
          label: {
            ar: "كريم ينتقل مباشرة دون فاصل",
            en: "Karim jumps straight in with no break",
          },
          text: {
            ar: ["ينتقل كريم فوراً من المكالمة إلى فتح ملف مذكرة مرفأ الشرق، ويبدأ الكتابة والتوتر لا يزال في يديه وصوته الداخلي."],
            en: ["Karim moves straight from the call to opening the Marfa Al-Sharq memo file, and starts writing with the stress still in his hands and inner voice."],
          },
          why: {
            ar: "صاغ فقرتين متسرّعتين احتاج لإعادة كتابتهما لاحقاً بعد أن هدأ، فخسر وقتاً أكثر مما كان ليخسره في دقيقتين إعادة ضبط.",
            en: "He drafted two rushed paragraphs he later had to rewrite once he'd calmed down, losing more time than a two-minute reset would have cost him.",
          },
        },
      },
      { kind: "activity", id: "s.sm.08.a1", activityId: "act.sm.08.1", mode: "quick" },
      { kind: "activity", id: "s.sm.08.a2", activityId: "act.sm.08.2", mode: "guided" },
      { kind: "activity", id: "s.sm.08.a3", activityId: "act.sm.08.3", mode: "guided" },
      { kind: "activity", id: "s.sm.08.a4", activityId: "act.sm.08.4", mode: "independent" },
      { kind: "activity", id: "s.sm.08.a5", activityId: "act.sm.08.5", mode: "independent" },
      { kind: "summary", id: "s.sm.08.summary", summaryCardId: "card.sm.08" },
      {
        kind: "apply_tomorrow",
        id: "s.sm.08.apply",
        task: {
          ar: "اكتب عادتك الشخصية من ثلاث خطوات على ورقة قريبة من شاشتك.",
          en: "Write your personal three-step habit on a note near your screen.",
        },
        detail: {
          ar: "استخدمها فور انتهاء أول مهمة متوترة غداً، قبل فتح أي ملف جديد.",
          en: "Use it the moment your first tense task ends tomorrow, before opening any new file.",
        },
      },
      {
        kind: "next_mission",
        id: "s.sm.08.next",
        teaser: {
          ar: "عرفت كيف تعيد ضبط نفسك بين المهام. الفصل القادم: كيف تبدأ المهمة التي تؤجلها منذ أيام قبل أن تتحول إلى أزمة.",
          en: "You know how to reset between tasks. Next chapter: starting the task you've delayed for days, before it becomes a crisis.",
        },
      },
    ],
    activities: [
      {
        id: "act.sm.08.1",
        kind: "true_false",
        skillId: "skill.emotional-intelligence",
        stage: 3,
        weight: 1,
        context: {
          ar: ["بعد مكالمة صعبة، يفكر كريم بأخذ استراحة تأمل لمدة عشر دقائق قبل بدء صياغة مذكرة عاجلة."],
          en: ["After a hard call, Karim considers a ten-minute meditation break before starting an urgent memo."],
        },
        prompt: {
          ar: "عادة إعادة الضبط الفعّالة يجب أن تكون طويلة نسبياً (١٠ دقائق فأكثر) لتحقق أثرها.",
          en: "An effective reset habit needs to be relatively long (10+ minutes) to have any effect.",
        },
        options: [
          {
            id: "o.true",
            label: { ar: "صحيح", en: "True" },
            rationale: {
              ar: "غير صحيح. تحت ضغط يوم عمل حقيقي، الاستراحة الطويلة نادراً ما تُنفَّذ فعلياً، والعادة القصيرة المتكررة أكثر فعالية من عادة طويلة نادرة التنفيذ.",
              en: "Not correct. Under real workday pressure, a long break rarely actually happens — a short, repeatable habit beats a long one that's rarely used.",
            },
          },
          {
            id: "o.false",
            label: { ar: "خطأ", en: "False" },
            correct: true,
            rationale: {
              ar: "بالضبط. المدة ليست العامل الحاسم؛ عادة قصيرة ومحددة بين مهمتين أكثر واقعية وفعالية من استراحة طويلة نادرة الحدوث.",
              en: "Exactly. Duration isn't the deciding factor; a short, specific habit between tasks is more realistic and effective than a long, rarely-used break.",
            },
          },
        ],
      },
      {
        id: "act.sm.08.2",
        kind: "ordering",
        skillId: "skill.emotional-intelligence",
        secondarySkillIds: ["skill.focus-under-interruption"],
        stage: 3,
        weight: 2,
        prompt: {
          ar: "رتّب خطوات عادة إعادة الضبط الأربع بترتيب تنفيذها بين مهمة صعبة والمهمة التالية.",
          en: "Order the four reset-habit steps in the sequence you'd run them between a hard task and the next one.",
        },
        hint: {
          ar: "ابدأ بما يقفل المهمة السابقة فعلياً، وانتهِ بما يفتح المهمة الجديدة بتركيز.",
          en: "Start with what actually closes the previous task; end with what opens the new one with focus.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each step instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "أغلق المهمة السابقة فعلياً - أنهِ المكالمة أو أغلق الشاشة.", en: "Actually close the previous task — end the call or close the screen." },
            rationale: {
              ar: "الخطوة الأولى لأن أي عادة لاحقة تفشل إن بقيت المهمة السابقة مفتوحة.",
              en: "First, because any later step fails if the previous task stays open.",
            },
          },
          {
            id: "i2",
            label: { ar: "دوّن جملة واحدة تلخّص ما حدث، ثم ضعها جانباً.", en: "Write one sentence summarizing what happened, then set it aside." },
            rationale: {
              ar: "يعطي التوتر مكاناً محدداً خارج ذهنك بدل أن يبقى يدور فيه.",
              en: "Gives the stress a specific place outside your head instead of letting it keep circling.",
            },
          },
          {
            id: "i3",
            label: { ar: "تحرّك جسدياً لثوانٍ - قف أو انظر بعيداً عن الشاشة.", en: "Move physically for a few seconds — stand or look away from the screen." },
            rationale: {
              ar: "الفصل الجسدي يرسل إشارة واضحة لبدء مرحلة جديدة، لا استكمال القديمة.",
              en: "The physical break sends a clear signal of starting a new stage, not continuing the old one.",
            },
          },
          {
            id: "i4",
            label: { ar: "اسأل سؤالاً محدداً عن أول خطوة في المهمة القادمة.", en: "Ask a specific question about the first step of the next task." },
            rationale: {
              ar: "يعيد تركيزك مباشرة إلى المهمة الجديدة بدل تركه معلقاً.",
              en: "Redirects your focus straight to the new task instead of leaving it hanging.",
            },
          },
        ],
      },
      {
        id: "act.sm.08.3",
        kind: "fill_blank",
        skillId: "skill.emotional-intelligence",
        secondarySkillIds: ["skill.focus-under-interruption"],
        stage: 3,
        weight: 2,
        prompt: {
          ar: "أكمل وصف عادة كريم في إعادة الضبط بالكلمة الأصح في كل فراغ.",
          en: "Complete the description of Karim's reset habit with the most correct word in each blank.",
        },
        template: {
          ar: "بعد مكالمة صعبة، أغلق كريم شاشته لمدة {{0}} ثانية، ثم كتب جملة تلخّص ما حدث و{{1}}ها جانباً، وأخيراً سأل نفسه سؤالاً محدداً عن {{2}} في المهمة القادمة.",
          en: "After a hard call, Karim closed his screen for {{0}} seconds, wrote one sentence summarizing what happened and set it {{1}}, and finally asked himself a specific question about {{2}} in the next task.",
        },
        blanks: [
          {
            id: "b0",
            options: [{ ar: "عشرين", en: "twenty" }, { ar: "ساعتين", en: "two hours" }, { ar: "خمس", en: "five" }],
            answerIndex: 0,
            rationale: {
              ar: "عشرون ثانية فاصل قصير واقعي يمكن تكراره يومياً، لا استراحة طويلة نادرة الحدوث.",
              en: "Twenty seconds is a short, realistic break you can repeat daily, not a long one you'd rarely take.",
            },
          },
          {
            id: "b1",
            options: [{ ar: "وضع", en: "set" }, { ar: "حمل", en: "carried" }, { ar: "نسي", en: "forgot" }],
            answerIndex: 0,
            rationale: {
              ar: "«وضعها جانباً» يعطي التوتر مكاناً خارج ذهنه، بخلاف حمله معه للمهمة القادمة.",
              en: "'Set it aside' gives the stress a place outside his head, unlike carrying it into the next task.",
            },
          },
          {
            id: "b2",
            options: [
              { ar: "أول خطوة ملموسة", en: "the first concrete step" },
              { ar: "مقدار الوقت المتبقي", en: "how much time is left" },
              { ar: "ما حدث في المكالمة السابقة", en: "what happened on the previous call" },
            ],
            answerIndex: 0,
            rationale: {
              ar: "سؤال عن أول خطوة ملموسة يعيد التركيز إلى المهمة الجديدة، لا إلى القلق من الوقت أو المكالمة السابقة.",
              en: "Asking about the first concrete step redirects focus to the new task, not to time anxiety or the previous call.",
            },
          },
        ],
      },
      {
        id: "act.sm.08.4",
        kind: "short_written",
        skillId: "skill.emotional-intelligence",
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.self-management-written.v1",
        weight: 3,
        minChars: 100,
        context: {
          ar: ["فكّر في آخر مهمة صعبة انتقلت منها مباشرة إلى مهمة أخرى دون فاصل."],
          en: ["Think of the last hard task you moved from directly into another, with no break."],
        },
        prompt: {
          ar: "اكتب عادة إعادة ضبط شخصية من ثلاث خطوات محددة (٣٠-٥٠ كلمة)، تصلح للاستخدام بين مهمتين في يوم عمل حقيقي.",
          en: "Write a personal three-step reset habit (30-50 words), usable between two tasks on a real workday.",
        },
        modelAnswer: {
          ar: ["«أغلق البريد الإلكتروني لعشرين ثانية. أكتب جملة واحدة عمّا شعرت به على ورقة صغيرة بجانبي. ثم أسأل: ما أول سطر سأكتبه في المهمة القادمة؟»"],
          en: ["'I close email for twenty seconds. I write one sentence about what I felt on a small notepad beside me. Then I ask: what's the first line I'll write in the next task?'"],
        },
        weakAnswer: {
          text: {
            ar: ["«سآخذ استراحة عندما أشعر بالحاجة إلى ذلك.»"],
            en: ["'I'll take a break whenever I feel I need one.'"],
          },
          whatIsWrong: {
            ar: "لا خطوات محددة ولا مدة واضحة، فتبقى نية عامة يسهل تجاهلها تحت ضغط يوم عمل حقيقي.",
            en: "No specific steps and no clear duration, leaving a vague intention that's easy to skip under real workday pressure.",
          },
        },
      },
      {
        id: "act.sm.08.5",
        kind: "reflection",
        skillId: "skill.emotional-intelligence",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع يوماً انتقلت فيه مباشرة من مهمة متوترة إلى أخرى دون فاصل. أين ظهر أثر ذلك في عملك لاحقاً؟",
          en: "Recall a day you moved straight from a stressful task into another with no break. Where did the effect show up in your later work?",
        },
        followUp: {
          ar: "ما العادة القصيرة التي ستجربها غداً بين أول مهمتين متتاليتين؟",
          en: "What short habit will you try tomorrow between your first two consecutive tasks?",
        },
      },
    ],
    summaryCard: {
      id: "card.sm.08",
      title: {
        ar: "دقيقتان تفصلان بين مهمتين",
        en: "Two Minutes Between Tasks",
      },
      whatYouLearned: {
        ar: [
          "التوتر غير المُعالَج لا يختفي بعد المكالمة الصعبة، بل ينتقل إلى المهمة التالية.",
          "العادة القصيرة (تحت الدقيقتين) والمحددة الخطوات أكثر واقعية من استراحة طويلة نادرة الحدوث.",
          "إغلاق المهمة السابقة فعلياً، وتدوين ما حدث، وسؤال محدد عن الخطوة القادمة - كافٍ لفصل مهمة عن أخرى.",
        ],
        en: [
          "Unaddressed stress doesn't vanish after the hard call — it carries into the next task.",
          "A short, specific habit (under two minutes) is more realistic than a long break that rarely happens.",
          "Actually closing the previous task, writing down what happened, and asking a specific question about the next step is enough to separate one task from another.",
        ],
      },
      framework: {
        name: { ar: "أغلق · دوّن · تحرّك · أعد التركيز", en: "Close · Note · Move · Refocus" },
        steps: [
          { ar: "أغلق المهمة السابقة فعلياً، لا ذهنياً فقط.", en: "Close the previous task actually, not just mentally." },
          { ar: "دوّن جملة واحدة تلخّص ما حدث، ثم ضعها جانباً.", en: "Write one sentence summarizing what happened, then set it aside." },
          { ar: "تحرّك جسدياً لثوانٍ قليلة بين المهمتين.", en: "Move physically for a few seconds between tasks." },
          { ar: "أعد التركيز بسؤال محدد عن أول خطوة في المهمة القادمة.", en: "Refocus with a specific question about the first step of the next task." },
        ],
      },
      rememberThis: {
        ar: "التوتر الذي لا تغلقه بنفسك، تغلقه المهمة التالية نيابة عنك - بثمن أعلى.",
        en: "Stress you don't close yourself gets closed by the next task instead — at a higher cost.",
      },
      useItTomorrow: {
        ar: "جرّب العادة الرباعية بين أول مهمتين متتاليتين غداً، ولو بدت وقتاً ضائعاً في البداية.",
        en: "Try the four-step habit between your first two consecutive tasks tomorrow, even if it feels like wasted time at first.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.meditations-for-mortals", "src.your-brain-at-work", "src.fire-proof"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 09 — Starting the task you're avoiding
  // =========================================================================
  {
    id: "unit.sm.09",
    chapterId: "ch.sm.recovering-and-sustaining",
    order: 9,
    title: {
      ar: "بدء المهمة التي تتجنبها",
      en: "Starting the Task You're Avoiding",
    },
    subtitle: {
      ar: "الملف الذي يُؤجَّل كل يوم إلى الغد لا يختفي، بل يكبر بصمت حتى يتحول إلى أزمة.",
      en: "The file pushed to tomorrow every day doesn't disappear — it grows quietly until it becomes a crisis.",
    },
    primarySkillId: "skill.overcoming-avoidance",
    skillIds: ["skill.overcoming-avoidance", "skill.time-priority-management"],
    stage: 4,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.sm.09.hook",
        text: {
          ar: "الملف الذي فتحته أربع مرات هذا الأسبوع دون أن تكتب فيه كلمة واحدة ليس نسياناً. هو تجنّب، وله سبب يستحق أن تفهمه.",
          en: "The file you've opened four times this week without writing a single word isn't forgetfulness. It's avoidance, and it has a reason worth understanding.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.sm.09.why",
        text: {
          ar: "التجنّب لا يوقف الساعة؛ الملف الذي تؤجله يقترب من موعده النهائي بالسرعة نفسها، لكن دون أن تكون قد بدأت. القلق الذي تهرب منه اليوم يتضاعف مع كل يوم تأجيل.",
          en: "Avoidance doesn't stop the clock; the file you delay approaches its deadline at the same speed, only now without you having started. The anxiety you dodge today compounds with every day you put it off.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.sm.09.goals",
        goals: {
          ar: [
            "أن تتعرّف على نمط التجنّب لديك: الملف الذي يُفتح ويُغلق، أو المكالمة التي تُؤجَّل بذريعة جديدة كل مرة.",
            "أن تفرّق بين التأجيل الاستراتيجي المبرر والتجنّب المدفوع بالقلق من المهمة نفسها.",
            "أن تحوّل القلق إلى خطوة أولى صغيرة وملموسة تستغرق أقل من عشر دقائق.",
          ],
          en: [
            "Recognize your own avoidance pattern: the file that gets opened and closed, or the call postponed with a new excuse each time.",
            "Tell justified strategic delay apart from avoidance driven by anxiety about the task itself.",
            "Convert the anxiety into one small, concrete first step that takes under ten minutes.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.sm.09.lesson",
        title: {
          ar: "التجنّب يبدو منطقياً في كل مرة",
          en: "Avoidance sounds reasonable every single time",
        },
        body: {
          ar: [
            "لا أحد يقول لنفسه «أنا أتجنّب هذه المهمة». يقول: «سأبدأ بعد أن أنهي هذه الرسالة»، أو «الوقت غير مناسب الآن» - أعذار منطقية في كل مرة على حدة.",
            "المؤشر الحقيقي للتجنّب ليس العذر نفسه، بل التكرار: الملف نفسه يُفتح ويُغلق يومياً دون تقدّم فعلي، والعذر يتغيّر بينما النتيجة ثابتة.",
            "غالباً ما يكون سبب التجنّب أوضح مما نعترف به: مكالمة نتوقّع أن تكون صعبة، أو مستند نشك في قدرتنا على صياغته جيداً، أو قرار نخشى أن نكون مخطئين فيه.",
            "الحل ليس «قوة الإرادة» أو انتظار الحافز، بل تصغير المهمة حتى تصبح خطوتها الأولى صغيرة بما يكفي ألا تستدعي أي حافز على الإطلاق.",
            "الخطوة الأولى الجيدة لا تنهي المهمة، بل تكسر الجمود: فتح مستند فارغ وكتابة عنوانه فقط، أو إرسال رسالة واحدة تحدد موعداً للمكالمة بدل إجرائها فوراً.",
            "بمجرد أن تبدأ، ينخفض القلق أسرع مما تتوقع - القلق قبل البدء أكبر دائماً من القلق أثناء العمل نفسه.",
            "لا تنتظر يوماً «هادئاً» لتبدأ. اليوم المزدحم نفسه صالح لعشر دقائق فقط، وعشر دقائق كافية لكسر التجنّب.",
          ],
          en: [
            "No one says to themselves 'I'm avoiding this task.' They say 'I'll start once I finish this email,' or 'now isn't the right time' — reasonable excuses, one at a time.",
            "The real marker of avoidance isn't the excuse itself, but the repetition: the same file gets opened and closed daily with no real progress, and the excuse changes while the outcome stays the same.",
            "The real reason for avoidance is often clearer than we admit: a call we expect to be hard, a document we doubt we can draft well, a decision we're afraid of getting wrong.",
            "The fix isn't 'willpower' or waiting for motivation — it's shrinking the task until its first step is small enough to need no motivation at all.",
            "A good first step doesn't finish the task — it breaks the freeze: opening a blank document and writing just its title, or sending one message to fix a call time instead of making the call itself right now.",
            "Once you start, anxiety drops faster than you expect — the anxiety before starting is always bigger than the anxiety during the work itself.",
            "Don't wait for a 'calm' day to start. Even the busiest day has ten minutes free, and ten minutes is enough to break the avoidance.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.sm.09.visual",
        title: {
          ar: "من التجنّب إلى الخطوة الأولى",
          en: "From Avoidance to the First Step",
        },
        variant: "scale",
        items: [
          {
            label: { ar: "التجنّب المتكرر", en: "Repeated avoidance" },
            detail: {
              ar: "الملف يُفتح ويُغلق يومياً بعذر جديد، دون أي تقدّم فعلي.",
              en: "The file opens and closes daily with a new excuse, no real progress.",
            },
            tone: "negative",
          },
          {
            label: { ar: "التأجيل الاستراتيجي", en: "Strategic delay" },
            detail: {
              ar: "تأجيل مقصود لسبب واضح، مع موعد محدد للعودة إليه.",
              en: "A deliberate delay for a clear reason, with a set date to return to it.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "الخطوة الأولى المصغّرة", en: "The shrunk first step" },
            detail: {
              ar: "فعل ملموس تحت عشر دقائق يكسر الجمود دون أن ينهي المهمة.",
              en: "A concrete act under ten minutes that breaks the freeze without finishing the task.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.sm.09.worked",
        strong: {
          label: {
            ar: "سلمى تصغّر المهمة بدل أن تؤجلها",
            en: "Salma shrinks the task instead of delaying it",
          },
          text: {
            ar: [
              "فتحت الأستاذة سلمى قاسم ملف شركة تلال الأندلس للمقاولات للمرة الرابعة هذا الأسبوع، لتكتب إنذاراً بشأن دفعة متأخرة، وأغلقته مجدداً دون كتابة كلمة.",
              "لاحظت النمط: «هذا ليس نسياناً، أنا أتجنّبه لأنني قلقة من أن يبدو الإنذار ضعيفاً.» فقررت ألا تكتب الإنذار كاملاً، بل فقرة الوقائع فقط.",
              "فتحت مستنداً جديداً وكتبت تاريخ العقد ومبلغ الدفعة المتأخرة فقط - عشر دقائق، دون التزام بإنهاء الإنذار في الجلسة نفسها.",
            ],
            en: [
              "Salma Qassem opened the Tilal Al-Andalus Contracting file for the fourth time this week, to write a demand letter over a late payment, and closed it again without writing a word.",
              "She noticed the pattern: 'This isn't forgetting — I'm avoiding it because I'm worried the letter will sound weak.' So she decided not to write the whole letter, just the facts paragraph.",
              "She opened a new document and wrote only the contract date and the overdue amount — ten minutes, with no commitment to finish the letter in that same sitting.",
            ],
          },
          why: {
            ar: "سمّت التجنّب بدقة، ثم صغّرت المهمة إلى خطوة تحت عشر دقائق بلا التزام بإنهائها، فكسرت الجمود دون ضغط إضافي.",
            en: "She named the avoidance precisely, then shrank the task to a sub-ten-minute step with no finishing commitment, breaking the freeze without added pressure.",
          },
        },
        weak: {
          label: {
            ar: "سلمى تنتظر «اليوم المناسب»",
            en: "Salma waits for the 'right day'",
          },
          text: {
            ar: ["«سأكتب الإنذار غداً حين يكون لدي وقت أطول وتركيز أفضل.» تغلق الملف للمرة الرابعة."],
            en: ["'I'll write the letter tomorrow when I have more time and better focus.' She closes the file for the fourth time."],
          },
          why: {
            ar: "انتظار «الوقت المناسب» عذر يتكرر كل يوم دون أن يتحقق فعلياً، بينما موعد الإنذار يقترب دون أي تقدّم.",
            en: "Waiting for 'the right time' is an excuse that repeats daily without ever materializing, while the letter's deadline approaches with zero progress.",
          },
        },
      },
      { kind: "activity", id: "s.sm.09.a1", activityId: "act.sm.09.1", mode: "quick" },
      { kind: "activity", id: "s.sm.09.a2", activityId: "act.sm.09.2", mode: "guided" },
      { kind: "activity", id: "s.sm.09.a3", activityId: "act.sm.09.3", mode: "guided" },
      { kind: "activity", id: "s.sm.09.a4", activityId: "act.sm.09.4", mode: "independent" },
      { kind: "activity", id: "s.sm.09.a5", activityId: "act.sm.09.5", mode: "independent" },
      { kind: "summary", id: "s.sm.09.summary", summaryCardId: "card.sm.09" },
      {
        kind: "apply_tomorrow",
        id: "s.sm.09.apply",
        task: {
          ar: "حدد المهمة التي تتجنبها أكثر هذا الأسبوع، وصغّرها إلى خطوة تحت عشر دقائق.",
          en: "Identify the task you're avoiding most this week, and shrink it to a step under ten minutes.",
        },
        detail: {
          ar: "نفّذ تلك الخطوة قبل أن تفتح بريدك الإلكتروني غداً صباحاً.",
          en: "Do that step before you open your email tomorrow morning.",
        },
      },
      {
        kind: "next_mission",
        id: "s.sm.09.next",
        teaser: {
          ar: "عرفت كيف تبدأ ما تتجنبه. الوحدة الأخيرة: ماذا تفعل حين يفوتك موعد رغم ذلك - قبل أن يكتشفه أحد غيرك.",
          en: "You know how to start what you avoid. The final unit: what to do when you miss a deadline anyway — before anyone else discovers it.",
        },
      },
    ],
    activities: [
      {
        id: "act.sm.09.1",
        kind: "find_mistake",
        skillId: "skill.overcoming-avoidance",
        stage: 4,
        weight: 1,
        context: {
          ar: ["بعد أن لاحظت سلمى أنها تتجنب إنذار تلال الأندلس، قررت خطة: «سأخصص غداً ساعتين كاملتين لأكتب الإنذار من الألف إلى الياء دفعة واحدة.»"],
          en: ["After noticing she was avoiding the Tilal Al-Andalus letter, Salma made a plan: 'Tomorrow I'll block two full hours to write the whole letter from start to finish in one sitting.'"],
        },
        prompt: {
          ar: "ما الخطأ الأخطر في خطة سلمى؟",
          en: "What is the most serious mistake in Salma's plan?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "حجزت مهمة كبيرة كاملة دفعة واحدة بدل تصغيرها إلى خطوة أولى صغيرة تكسر الجمود فوراً.",
              en: "She blocked the whole large task at once instead of shrinking it to a small first step that breaks the freeze right away.",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. المهمة الكبيرة تستدعي القلق نفسه الذي سبب التجنّب أصلاً، فيسهل تأجيل «الساعتين» أيضاً، كما تأجل الملف أربع مرات من قبل.",
              en: "Exactly. The large task triggers the same anxiety that caused the avoidance, so the 'two hours' is just as easy to postpone as the file already was four times.",
            },
          },
          {
            id: "o2",
            label: { ar: "اختارت الغد بدل اليوم نفسه.", en: "She chose tomorrow instead of today." },
            rationale: {
              ar: "التوقيت ثانوي هنا؛ المشكلة الجوهرية هي حجم المهمة نفسها لا يوم تنفيذها.",
              en: "Timing is secondary here; the core problem is the size of the task itself, not which day it's done.",
            },
          },
          {
            id: "o3",
            label: { ar: "لم تحدد ساعة محددة من اليوم للبدء.", en: "She didn't set a specific hour to start." },
            rationale: {
              ar: "تفصيل مفيد لكنه ثانوي أمام مشكلة أكبر: حجم المهمة المخطط لها دفعة واحدة.",
              en: "A useful detail but secondary next to the bigger problem: planning the whole task in one go.",
            },
          },
          {
            id: "o4",
            label: { ar: "لم تخبر أحداً بخطتها لتحمّل نفسها المسؤولية.", en: "She didn't tell anyone her plan to hold herself accountable." },
            rationale: {
              ar: "قد يساعد لاحقاً، لكنه ليس السبب الرئيسي لاحتمال فشل هذه الخطة تحديداً.",
              en: "Might help later, but isn't the main reason this specific plan is likely to fail.",
            },
          },
        ],
      },
      {
        id: "act.sm.09.2",
        kind: "categorization",
        skillId: "skill.overcoming-avoidance",
        stage: 4,
        weight: 2,
        prompt: {
          ar: "صنّف كل موقف: هل هو تجنّب، أم تأجيل استراتيجي مبرر؟",
          en: "Sort each situation: is it avoidance, or a justified strategic delay?",
        },
        hint: {
          ar: "اسأل: هل هناك سبب خارجي محدد وموعد واضح للعودة، أم تكرار بلا تقدّم فعلي؟",
          en: "Ask: is there a specific external reason and a clear return date, or just repetition with no real progress?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «تجنّب» / «تأجيل استراتيجي» أسفل كل بند بدل السحب.",
          en: "Choose \"Avoidance\" / \"Strategic delay\" from buttons under each item instead of dragging.",
        },
        buckets: [
          { id: "avoid", label: { ar: "تجنّب", en: "Avoidance" } },
          { id: "strategic", label: { ar: "تأجيل استراتيجي", en: "Strategic delay" } },
        ],
        items: [
          {
            id: "c1",
            label: { ar: "«سأفتح الملف بعد الغداء» - قالتها أيضاً أمس وأول أمس.", en: "'I'll open the file after lunch' — she said the same thing yesterday, and the day before." },
            bucketId: "avoid",
            rationale: {
              ar: "التكرار دون تنفيذ فعلي هو المؤشر الحقيقي على التجنّب، لا العبارة نفسها.",
              en: "Repetition with no real follow-through is the true marker of avoidance, not the sentence itself.",
            },
          },
          {
            id: "c2",
            label: { ar: "«سأبدأ الإنذار غداً صباحاً لأن مستنداً أنتظره من المحاسبة يصل مساء اليوم.»", en: "'I'll start the letter tomorrow morning because a document I'm waiting on from accounting arrives this evening.'" },
            bucketId: "strategic",
            rationale: {
              ar: "سبب واضح ومحدد، وموعد بديل محدد - تأجيل مبرر لا تجنّب.",
              en: "A clear, specific reason and a set alternative time — a justified delay, not avoidance.",
            },
          },
          {
            id: "c3",
            label: { ar: "الملف مفتوح على الشاشة منذ ساعتين دون أي كتابة، مع تصفّح متكرر للبريد الإلكتروني.", en: "The file has been open on screen for two hours with no writing at all, alongside repeated email checking." },
            bucketId: "avoid",
            rationale: {
              ar: "وقت مفتوح دون أي تقدّم ملموس، مع انشغال بمهام أخرى أسهل - نمط تجنّب كلاسيكي.",
              en: "Open time with zero concrete progress, filled instead with easier tasks — a classic avoidance pattern.",
            },
          },
          {
            id: "c4",
            label: { ar: "«سأؤجل المكالمة يوماً واحداً لأن الطرف الآخر خارج المكتب حتى الغد حسب رده الآلي.»", en: "'I'll delay the call by one day since the other side is out of the office until tomorrow, per their auto-reply.'" },
            bucketId: "strategic",
            rationale: {
              ar: "معلومة خارجية محددة تبرر التأجيل، مع موعد واضح للعودة إليها.",
              en: "A specific external fact justifies the delay, with a clear date to return to it.",
            },
          },
        ],
      },
      {
        id: "act.sm.09.3",
        kind: "priority_ranking",
        skillId: "skill.overcoming-avoidance",
        secondarySkillIds: ["skill.time-priority-management"],
        stage: 4,
        weight: 2,
        prompt: {
          ar: "رتّب الخطوات لتحويل مهمة تتجنبها إلى خطوة أولى قابلة للتنفيذ فعلياً اليوم.",
          en: "Order the steps to turn a task you're avoiding into a first step you'll actually do today.",
        },
        hint: {
          ar: "ابدأ بما يوضح السبب الحقيقي للتجنّب، وانتهِ بما يوقف انتظار «الاستعداد».",
          en: "Start with what surfaces the real reason for avoidance; end with what stops waiting to 'feel ready.'",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each step instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "سمِّ التجنّب بصراحة: «أنا أؤجل هذا، والسبب هو...»", en: "Name the avoidance honestly: 'I'm delaying this, and the reason is...'" },
            rationale: {
              ar: "أولاً، لأن الوعي بالسبب يمنع تكرار العذر نفسه غداً دون تغيير.",
              en: "First, because naming the reason stops you repeating the same excuse tomorrow unchanged.",
            },
          },
          {
            id: "i2",
            label: { ar: "قسّم المهمة إلى أصغر جزء ممكن (فقرة واحدة، أو موعد لمكالمة فقط).", en: "Break the task into the smallest possible part (one paragraph, or just fixing a call time)." },
            rationale: {
              ar: "يخفّض حجم المهمة إلى ما لا يحتاج حافزاً كبيراً لبدئه.",
              en: "Shrinks the task to something that needs no big burst of motivation to start.",
            },
          },
          {
            id: "i3",
            label: { ar: "حدد وقتاً محدداً تحت عشر دقائق لتنفيذ الجزء الأصغر فقط.", en: "Set a fixed time under ten minutes for that smallest part alone." },
            rationale: {
              ar: "وقت قصير محدد أسهل الالتزام به من كتلة زمنية كبيرة تُؤجَّل بسهولة.",
              en: "A short, fixed time is easier to commit to than a large block that's easy to postpone.",
            },
          },
          {
            id: "i4",
            label: { ar: "ابدأ فوراً دون انتظار شعور «الاستعداد».", en: "Start immediately, without waiting to feel 'ready.'" },
            rationale: {
              ar: "أخيراً، لأن انتظار الاستعداد هو التجنّب نفسه بثوب آخر.",
              en: "Last, because waiting to feel ready is avoidance wearing a different outfit.",
            },
          },
        ],
      },
      {
        id: "act.sm.09.4",
        kind: "short_written",
        skillId: "skill.overcoming-avoidance",
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.self-management-written.v1",
        weight: 3,
        minChars: 100,
        context: {
          ar: ["فكّر في ملف أو مكالمة تؤجلها منذ أكثر من يومين دون سبب خارجي واضح."],
          en: ["Think of a file or call you've delayed for more than two days with no clear external reason."],
        },
        prompt: {
          ar: "اكتب (٣٠-٥٠ كلمة): ما هي المهمة، لماذا تتجنبها فعلياً، وما الخطوة الأولى التي ستنفذها خلال عشر دقائق اليوم.",
          en: "Write (30-50 words): what the task is, why you're actually avoiding it, and the first step you'll do within ten minutes today.",
        },
        modelAnswer: {
          ar: ["«أؤجل الاتصال بمحامي الطرف الآخر في ملف تلال الأندلس لأنني أتوقع رفضاً حاداً. الخطوة الأولى: أرسل له رسالة نصية أطلب فيها موعداً للاتصال غداً الساعة العاشرة، بدل الاتصال المباشر الآن.»"],
          en: ["'I'm delaying calling opposing counsel in the Tilal Al-Andalus file because I expect a sharp refusal. First step: send him a text asking to schedule the call for tomorrow at ten, instead of calling directly right now.'"],
        },
        weakAnswer: {
          text: {
            ar: ["«الملف صعب، سأتعامل معه حين أشعر بجاهزية أكبر.»"],
            en: ["'The file is difficult, I'll deal with it when I feel more ready.'"],
          },
          whatIsWrong: {
            ar: "لا يسمّي سبب التجنّب الفعلي، ولا يحدد خطوة أولى ملموسة أو وقتاً - «الجاهزية» شرط لا يتحقق من تلقاء نفسه.",
            en: "Doesn't name the actual reason for avoidance, and sets no concrete first step or time — 'feeling ready' is a condition that never arrives on its own.",
          },
        },
      },
      {
        id: "act.sm.09.5",
        kind: "reflection",
        skillId: "skill.overcoming-avoidance",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "ما الملف أو المكالمة التي تفتحها وتغلقها بلا تقدّم منذ أكثر من يوم؟",
          en: "What file or call have you been opening and closing with no progress for more than a day?",
        },
        followUp: {
          ar: "ما أصغر جزء منها يمكن أن تنجزه خلال عشر دقائق بعد انتهاء هذه الوحدة مباشرة؟",
          en: "What's the smallest part of it you could finish within ten minutes right after this unit ends?",
        },
      },
    ],
    summaryCard: {
      id: "card.sm.09",
      title: {
        ar: "الخطوة الأولى تكسر الجمود",
        en: "The First Step Breaks the Freeze",
      },
      whatYouLearned: {
        ar: [
          "التجنّب يبدو منطقياً في كل مرة على حدة؛ مؤشره الحقيقي هو التكرار دون تقدّم فعلي.",
          "التأجيل الاستراتيجي له سبب خارجي واضح وموعد عودة محدد؛ التجنّب لا يملك أياً منهما.",
          "تصغير المهمة إلى خطوة تحت عشر دقائق يكسر الجمود أفضل من انتظار «اليوم المناسب» أو الاستعداد الكامل.",
        ],
        en: [
          "Avoidance sounds reasonable each time on its own; its real marker is repetition with no actual progress.",
          "Strategic delay has a clear external reason and a set return date; avoidance has neither.",
          "Shrinking the task to a sub-ten-minute step breaks the freeze better than waiting for the 'right day' or feeling fully ready.",
        ],
      },
      framework: {
        name: { ar: "سمِّ · صغّر · حدد الوقت · ابدأ", en: "Name · Shrink · Time-box · Start" },
        steps: [
          { ar: "سمِّ التجنّب بصراحة وسببه الحقيقي.", en: "Name the avoidance and its real reason honestly." },
          { ar: "صغّر المهمة إلى أصغر جزء ممكن.", en: "Shrink the task to the smallest possible part." },
          { ar: "حدد وقتاً تحت عشر دقائق لهذا الجزء فقط.", en: "Set a time under ten minutes for that part alone." },
          { ar: "ابدأ فوراً دون انتظار الاستعداد الكامل.", en: "Start immediately, without waiting to feel fully ready." },
        ],
      },
      rememberThis: {
        ar: "القلق قبل البدء أكبر دائماً من القلق أثناء العمل - جرّب البدء لتتأكد.",
        en: "The anxiety before starting is always bigger than the anxiety during the work — start to find out.",
      },
      useItTomorrow: {
        ar: "افتح الآن الملف الذي تتجنبه، واكتب فيه جملة واحدة فقط قبل أن تغلق هذه الوحدة.",
        en: "Open the file you're avoiding right now, and write just one sentence in it before you close this unit.",
      },
    },
    targetLevel: 4,
    sourceIds: ["src.four-thousand-weeks", "src.fire-proof", "src.meditations-for-mortals"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 10 — When you're about to miss a deadline
  // =========================================================================
  {
    id: "unit.sm.10",
    chapterId: "ch.sm.recovering-and-sustaining",
    order: 10,
    title: {
      ar: "حين توشك أن تفوّت موعداً نهائياً",
      en: "When You're About to Miss a Deadline",
    },
    subtitle: {
      ar: "الإفصاح المبكر مكلف اليوم، لكنه أرخص بكثير من الصمت الذي يُكتشف لاحقاً.",
      en: "Early disclosure costs you today, but far less than silence that gets discovered later.",
    },
    primarySkillId: "skill.resilience",
    skillIds: ["skill.resilience", "skill.overcoming-avoidance"],
    stage: 4,
    estimatedMinutes: 11,
    steps: [
      {
        kind: "hook",
        id: "s.sm.10.hook",
        text: {
          ar: "الخيار الذي تشعر أنه الأسهل الآن - الانتظار قليلاً لعلّك تنجز في الوقت المتبقي - هو غالباً الخيار الذي يحوّل تأخيراً بسيطاً إلى أزمة ثقة.",
          en: "The choice that feels easiest right now — waiting a bit longer, hoping you'll finish in time — is usually the one that turns a small delay into a crisis of trust.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.sm.10.why",
        text: {
          ar: "كل محامٍ يفوّت موعداً في مرحلة ما من مسيرته. ما يحدد مستقبله المهني ليس ذلك الموعد، بل كيف تعامل معه: بالإفصاح المبكر وخطة واضحة، أو بالصمت والأعذار.",
          en: "Every lawyer misses a deadline at some point. What shapes their career isn't that miss — it's how they handle it: early disclosure with a clear plan, or silence and excuses.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.sm.10.goals",
        goals: {
          ar: [
            "أن تتعرّف على اللحظة التي يتحول فيها تأخير محتمل إلى موعد سيُفوَّت فعلياً، وتُفصح عنها فوراً لا لاحقاً.",
            "أن تُفصح للشريك المسؤول بالوقائع دون تبرير مفرط أو إلقاء اللوم على ظروف خارجية.",
            "أن تقترح خطة تعافٍ ملموسة تتضمن ما يمكن إنجازه، ومن يمكن أن يساعد، وموعداً جديداً واقعياً.",
          ],
          en: [
            "Recognize the moment a potential delay becomes a deadline that will actually be missed, and disclose it immediately, not later.",
            "Disclose to the responsible partner with the facts, without over-justifying or blaming external circumstances.",
            "Propose a concrete recovery plan naming what can still be done, who can help, and a realistic new date.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.sm.10.lesson",
        title: {
          ar: "الإفصاح المبكر أرخص مما يبدو",
          en: "Early disclosure is cheaper than it looks",
        },
        body: {
          ar: [
            "الخوف من إخبار الشريك بأنك ستفوّت موعداً أكبر بكثير من كلفة الإخبار نفسه. الصمت يبدو حلاً مؤقتاً، لكنه يحوّل تأخيراً إدارياً إلى أزمة ثقة حين يُكتشف لاحقاً.",
            "أول علامة على أن الوقت حان للإفصاح ليست موعد النهاية نفسه، بل اللحظة التي تدرك فيها بصدق أن الوقت المتبقي لا يكفي - غالباً قبل الموعد بأيام لا ساعات.",
            "الإفصاح الجيد يبدأ بالوقائع لا بالأعذار: ماذا حدث، وأين أنت الآن بالضبط، بلا تفاصيل زائدة عن أسباب خارجية لا تغيّر النتيجة.",
            "لا تكتفِ بقول «لن أنجز في الوقت»؛ اقترح فوراً خطة: ما الذي يمكن إنجازه حتى الموعد الأصلي، وما الذي يحتاج تمديداً، ومن يمكنه المساعدة.",
            "اطلب موعداً جديداً واقعياً، لا متفائلاً يكرر المشكلة نفسها بعد أيام قليلة. الموعد الجديد المصدَّق أفضل من وعد متفائل يُخلَف مرة أخرى.",
            "الشريك الذي يُفاجَأ في اللحظة الأخيرة يفقد الوقت اللازم لإدارة الموقف مع العميل أو المحكمة. الشريك الذي يُخبَر مبكراً يملك خيارات لم تعد متاحة لاحقاً.",
            "الملف الذي فاتك موعده لا ينهي مسيرتك؛ طريقة تعاملك معه - الصمت أم الشفافية - هي ما يحدد كيف يُنظر إليك بعد سنة من الآن.",
          ],
          en: [
            "The fear of telling the partner you'll miss a deadline is far bigger than the cost of actually telling them. Silence feels like a temporary fix, but it turns an administrative delay into a crisis of trust once discovered.",
            "The first sign it's time to disclose isn't the deadline itself, but the moment you honestly realize the remaining time isn't enough — usually days before the deadline, not hours.",
            "A good disclosure starts with facts, not excuses: what happened, and exactly where things stand now, without extra detail about external causes that don't change the outcome.",
            "Don't stop at 'I won't finish in time'; propose a plan immediately: what can still be done by the original date, what needs an extension, and who can help.",
            "Ask for a realistic new date, not an optimistic one that repeats the same problem a few days later. A credible new date beats an optimistic promise broken twice.",
            "A partner surprised at the last minute loses the time needed to manage the client or the court. A partner told early still has options that later disappear.",
            "The file you missed doesn't end your career; how you handled it — silence or transparency — is what shapes how you're seen a year from now.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.sm.10.visual",
        title: {
          ar: "من إدراك الفجوة إلى إعادة بناء الثقة",
          en: "From Realizing the Gap to Rebuilding Trust",
        },
        variant: "timeline",
        items: [
          {
            label: { ar: "تدرك الفجوة", en: "You realize the gap" },
            detail: {
              ar: "أيام قبل الموعد، لا ساعات - الوقت المتبقي لا يكفي فعلياً.",
              en: "Days before the deadline, not hours — the remaining time genuinely isn't enough.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "تُفصح فوراً", en: "You disclose immediately" },
            detail: {
              ar: "وقائع مختصرة: ماذا حدث، وأين أنت الآن بالضبط.",
              en: "Brief facts: what happened, and exactly where things stand now.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "تقترح خطة", en: "You propose a plan" },
            detail: {
              ar: "ما يمكن إنجازه، من يساعد، وموعد جديد واقعي.",
              en: "What can still be done, who can help, and a realistic new date.",
            },
            tone: "positive",
          },
          {
            label: { ar: "يُعاد بناء الثقة", en: "Trust gets rebuilt" },
            detail: {
              ar: "شريك يملك خيارات مبكراً يثق بك أكثر من شريك فوجئ متأخراً.",
              en: "A partner with early options trusts you more than one blindsided late.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.sm.10.worked",
        strong: {
          label: {
            ar: "سلمى تُفصح مبكراً وتقترح خطة",
            en: "Salma discloses early and proposes a plan",
          },
          text: {
            ar: [
              "تدرك الأستاذة سلمى قاسم، قبل ثلاثة أيام من موعد الرد في قضية فسخ عقد التوريد لشركة الفرات للصناعات الغذائية، أنها أخطأت في ترتيب أولوياتها بين ثلاثة ملفات، ولن تنجز المذكرة في الوقت.",
              "تطلب اجتماعاً قصيراً مع الشريكة المسؤولة، الأستاذة ليال حمدان: «أريد أن أخبرك بشيء الآن بدل أن تكتشفيه قبل الموعد بيوم واحد.»",
              "«أنجزت قسم الوقائع والمستندات الداعمة كاملاً، لكن قسم الحجج القانونية يحتاج يومين إضافيين على الأقل.»",
              "«أقترح أن أنجز اليوم والغد ما أستطيع، وأن يساعدني زميل بمراجعة سابقة مشابهة، على أن أسلّم مسودة كاملة بعد يومين من الموعد الأصلي - هل هذا ممكن مع المحكمة؟»",
            ],
            en: [
              "Three days before the response deadline in the Al-Furat Food Industries supply-contract termination case, Salma Qassem realizes she mis-prioritized across three files and won't finish the memo in time.",
              "She asks for a short meeting with the responsible partner, Ms Layal Hamdan: 'I want to tell you something now, rather than have you discover it the day before the deadline.'",
              "'I've fully finished the facts section and the supporting documents, but the legal-arguments section needs at least two more days.'",
              "'I propose finishing what I can today and tomorrow, having a colleague help review a similar precedent, and delivering a complete draft two days late — is that workable with the court?'",
            ],
          },
          why: {
            ar: "أفصحت مبكراً بوقائع محددة لا أعذار، وقدّمت خطة تعافٍ ملموسة بموعد جديد واقعي، فمنحت الشريكة وقتاً وخيارات لم تكن لتملكها لو تأخر الإفصاح.",
            en: "She disclosed early with specific facts, not excuses, and offered a concrete recovery plan with a realistic new date, giving the partner time and options a later disclosure would have cost.",
          },
        },
        weak: {
          label: {
            ar: "سلمى تصمت وتأمل بمعجزة",
            en: "Salma stays silent, hoping for a miracle",
          },
          text: {
            ar: ["تستمر سلمى بالعمل بصمت حتى مساء اليوم السابق للموعد، ثم ترسل رسالة: «أستاذة ليال، للأسف لن أنجز المذكرة غداً، حدثت ظروف كثيرة هذا الأسبوع.»"],
            en: ["Salma keeps working in silence until the evening before the deadline, then sends a message: 'Ms Layal, unfortunately I won't finish the memo tomorrow, a lot of things came up this week.'"],
          },
          why: {
            ar: "انتظرت حتى فات الوقت لإدارة الموقف، وقدّمت عذراً عاماً بلا خطة، فتركت الشريكة أمام أزمة بلا خيارات حقيقية.",
            en: "She waited until it was too late to manage, and gave a vague excuse with no plan, leaving the partner facing a crisis with no real options.",
          },
        },
      },
      { kind: "activity", id: "s.sm.10.a1", activityId: "act.sm.10.1", mode: "quick" },
      { kind: "activity", id: "s.sm.10.a2", activityId: "act.sm.10.2", mode: "guided" },
      { kind: "activity", id: "s.sm.10.a3", activityId: "act.sm.10.3", mode: "independent" },
      { kind: "simulation", id: "s.sm.10.sim", scenarioId: "scn.missed-deadline-disclosure" },
      { kind: "activity", id: "s.sm.10.a4", activityId: "act.sm.10.4", mode: "independent" },
      { kind: "summary", id: "s.sm.10.summary", summaryCardId: "card.sm.10" },
      {
        kind: "apply_tomorrow",
        id: "s.sm.10.apply",
        task: {
          ar: "راجع كل مواعيدك النهائية المفتوحة هذا الأسبوع بصدق تام، لا بتفاؤل.",
          en: "Review all your open deadlines this week with total honesty, not optimism.",
        },
        detail: {
          ar: "إن وجدت موعداً لن تفي به، أفصح عنه اليوم مع خطة، لا يوم الموعد نفسه.",
          en: "If you find one you won't meet, disclose it today with a plan — not on the deadline day itself.",
        },
      },
      {
        kind: "next_mission",
        id: "s.sm.10.next",
        teaser: {
          ar: "أكملت مسار إدارة الذات. المهارات الآن ليست معرفة نظرية، بل عادات تُختبر في كل ملف قادم.",
          en: "You've completed the self-management path. These skills aren't theory now — they're habits tested in every file ahead.",
        },
      },
    ],
    activities: [
      {
        id: "act.sm.10.1",
        kind: "best_response",
        skillId: "skill.resilience",
        secondarySkillIds: ["skill.overcoming-avoidance"],
        stage: 4,
        weight: 1,
        context: {
          ar: ["قبل يومين من موعد الرد في ملف فسخ عقد التوريد لشركة الفرات، تدرك أنك لن تنجز القسم القانوني في الوقت بسبب سوء ترتيب أولوياتك بين ثلاثة ملفات."],
          en: ["Two days before the response deadline in the Al-Furat supply-contract termination file, you realize you won't finish the legal section in time, due to poor prioritization across three files."],
        },
        prompt: {
          ar: "ما أفضل تصرف فوري؟",
          en: "What is the best immediate action?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "اطلب اجتماعاً قصيراً اليوم مع الشريكة المسؤولة، وأفصح بالوقائع مع مقترح خطة تعافٍ.",
              en: "Ask for a short meeting today with the responsible partner, and disclose the facts along with a proposed recovery plan.",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. الإفصاح المبكر مع خطة يمنح الشريكة وقتاً وخيارات حقيقية، بدل مفاجأة في اللحظة الأخيرة.",
              en: "Exactly. Early disclosure with a plan gives the partner real time and options, instead of a last-minute surprise.",
            },
          },
          {
            id: "o2",
            label: { ar: "استمر بالعمل بصمت، وأخبرها فقط إن لم تنجز فعلياً في الموعد.", en: "Keep working silently, and only tell her if you truly don't finish by the deadline." },
            rationale: {
              ar: "يحوّل تأخيراً يمكن إدارته الآن إلى مفاجأة في اللحظة الأخيرة، حين تصبح خيارات الشريكة محدودة جداً.",
              en: "Turns a delay that's manageable now into a last-minute surprise, when the partner's options have shrunk badly.",
            },
          },
          {
            id: "o3",
            label: { ar: "اطلب من زميل أن يخبر الشريكة نيابة عنك لتجنّب الحرج.", en: "Ask a colleague to tell the partner on your behalf, to avoid the awkwardness." },
            rationale: {
              ar: "ينقل مسؤولية الإفصاح عن ملفك إلى شخص آخر، ويُقرأ لاحقاً كتهرّب لا كنضج مهني.",
              en: "Shifts responsibility for disclosing your own file to someone else, and later reads as evasion, not professional maturity.",
            },
          },
          {
            id: "o4",
            label: { ar: "سلّم مذكرة غير مكتملة في الموعد الأصلي دون إخبار أحد بالنقص.", en: "Submit an incomplete memo on the original date without telling anyone about the gap." },
            rationale: {
              ar: "مذكرة ناقصة دون تنبيه أخطر من التأخير نفسه؛ الشريكة قد تعتمد عليها دون أن تعرف موضع الضعف.",
              en: "An incomplete memo with no warning is worse than the delay itself; the partner may rely on it without knowing where it's weak.",
            },
          },
        ],
      },
      {
        id: "act.sm.10.2",
        kind: "ordering",
        skillId: "skill.resilience",
        stage: 4,
        weight: 2,
        prompt: {
          ar: "رتّب عناصر محادثة الإفصاح عن التأخير بالترتيب الأصح.",
          en: "Order the elements of the disclosure conversation in the right sequence.",
        },
        hint: {
          ar: "ابدأ بما يمنح الشريكة صورة واضحة فوراً، وانتهِ بما يمنع تكرار المفاجأة نفسها.",
          en: "Start with what gives the partner a clear picture immediately; end with what prevents the same surprise repeating.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل عنصر بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each element instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "اذكر الوقائع بإيجاز: ماذا حدث وأين أنت الآن بالضبط.", en: "State the facts briefly: what happened and exactly where things stand now." },
            rationale: {
              ar: "يبدأ بالوقائع لا بالأعذار، فيمنح الشريكة صورة واضحة فوراً.",
              en: "Starts with facts, not excuses, giving the partner a clear picture immediately.",
            },
          },
          {
            id: "i2",
            label: { ar: "وضّح ما أُنجز فعلياً حتى الآن، لا فقط ما لم يُنجز.", en: "Clarify what has genuinely been done so far, not only what hasn't." },
            rationale: {
              ar: "يُظهر التقدّم الحقيقي، فلا يبدو الموقف أسوأ مما هو عليه فعلياً.",
              en: "Shows real progress, so the situation doesn't sound worse than it actually is.",
            },
          },
          {
            id: "i3",
            label: { ar: "اقترح خطة تعافٍ: ما يمكن إنجازه، ومن يمكن أن يساعد.", en: "Propose a recovery plan: what can still be done, and who can help." },
            rationale: {
              ar: "يحوّل المشكلة إلى حل قيد التنفيذ، لا مجرد اعتراف بالتأخير.",
              en: "Turns the problem into a solution already in motion, not just a confession of delay.",
            },
          },
          {
            id: "i4",
            label: { ar: "اطلب موعداً جديداً واقعياً، لا متفائلاً.", en: "Ask for a realistic new date, not an optimistic one." },
            rationale: {
              ar: "يمنع تكرار المفاجأة نفسها بعد أيام قليلة بموعد لا يمكن الوفاء به أيضاً.",
              en: "Prevents the same surprise repeating days later with another date that also can't be met.",
            },
          },
        ],
      },
      {
        id: "act.sm.10.3",
        kind: "short_written",
        skillId: "skill.resilience",
        secondarySkillIds: ["skill.overcoming-avoidance"],
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.self-management-written.v1",
        weight: 3,
        minChars: 200,
        context: {
          ar: ["حدد اجتماعاً مع الشريكة ليال حمدان بعد ساعة لتفصح عن تأخر مذكرة قضية الفرات."],
          en: ["You've set a meeting with partner Layal Hamdan in an hour to disclose the delay on the Al-Furat memo."],
        },
        prompt: {
          ar: "اكتب ما ستقوله في أول دقيقة من الاجتماع (٥٠-٨٠ كلمة): الوقائع، ما أُنجز، ومقترح الخطة.",
          en: "Write what you'll say in the meeting's first minute (50-80 words): the facts, what's done, and your proposed plan.",
        },
        modelAnswer: {
          ar: ["«أستاذة ليال، أريد أن أخبرك بشيء الآن قبل أن يتأخر الوقت. أخطأت في ترتيب الأولويات بين ثلاثة ملفات، ولن أنجز قسم الحجج القانونية في مذكرة الفرات بالموعد الأصلي. أنجزت الوقائع والمستندات كاملة. أقترح أن أسلّم مسودة كاملة بعد يومين، بمساعدة زميل في المراجعة - هل هذا ممكن مع الجدول الزمني للمحكمة؟»"],
          en: ["'Ms Layal, I want to tell you something now before it gets too late. I mis-prioritized across three files, and I won't finish the legal-arguments section of the Al-Furat memo by the original date. The facts and documents are fully done. I propose delivering a complete draft two days later, with a colleague's review help — is that workable with the court's schedule?'"],
        },
        weakAnswer: {
          text: {
            ar: ["«أستاذة ليال، آسفة جداً، الأسبوع كان صعباً جداً وكان لدي ملفات كثيرة، لا أعرف إن كنت سأنجز المذكرة.»"],
            en: ["'Ms Layal, I'm so sorry, the week was really hard and I had a lot of files, I don't know if I'll finish the memo.'"],
          },
          whatIsWrong: {
            ar: "يركّز على الأعذار والاعتذار المفرط دون وقائع محددة أو خطة، فيترك الشريكة بلا معلومة قابلة للتصرف.",
            en: "Focuses on excuses and over-apologizing with no specific facts or plan, leaving the partner with nothing actionable.",
          },
        },
      },
      {
        id: "act.sm.10.4",
        kind: "reflection",
        skillId: "skill.resilience",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "بعد المحاكاة: في أي لحظة شعرت أقرب إلى تأجيل الإفصاح أو تبرير التأخير بدل اقتراح خطة؟",
          en: "After the simulation: at which moment did you feel closest to delaying the disclosure or justifying the delay instead of proposing a plan?",
        },
        followUp: {
          ar: "ما الجملة الأولى التي ستقولها في المرة القادمة التي تدرك فيها أنك ستفوّت موعداً؟",
          en: "What will be the first sentence you say next time you realize you'll miss a deadline?",
        },
      },
    ],
    summaryCard: {
      id: "card.sm.10",
      title: {
        ar: "الإفصاح المبكر يحمي الثقة",
        en: "Early Disclosure Protects Trust",
      },
      whatYouLearned: {
        ar: [
          "لحظة الإفصاح الصحيحة هي حين تدرك بصدق أن الوقت لا يكفي - أيام قبل الموعد، لا ساعات.",
          "الإفصاح الجيد يبدأ بالوقائع وما أُنجز فعلياً، لا بالأعذار أو الاعتذار المفرط.",
          "خطة تعافٍ ملموسة بموعد جديد واقعي تحوّل الاعتراف بالتأخير إلى حل قيد التنفيذ.",
          "كل محامٍ يفوّت موعداً يوماً ما - طريقة تعامله معه هي ما يبقى في الذاكرة.",
        ],
        en: [
          "The right moment to disclose is when you honestly realize the time isn't enough — days before the deadline, not hours.",
          "A good disclosure starts with facts and real progress made, not excuses or over-apologizing.",
          "A concrete recovery plan with a realistic new date turns admitting the delay into a solution already in motion.",
          "Every lawyer misses a deadline at some point — how they handle it is what's remembered.",
        ],
      },
      framework: {
        name: {
          ar: "أفصح مبكراً · اذكر الوقائع · اقترح خطة · اطلب موعداً واقعياً",
          en: "Disclose Early · State Facts · Propose a Plan · Ask for a Realistic Date",
        },
        steps: [
          { ar: "أفصح فور إدراكك الفجوة، لا قبل الموعد بساعات.", en: "Disclose the moment you realize the gap, not hours before the deadline." },
          { ar: "اذكر الوقائع وما أُنجز فعلياً، بلا أعذار زائدة.", en: "State the facts and what's genuinely done, without excess excuses." },
          { ar: "اقترح خطة تعافٍ ملموسة: ما تبقى، ومن يساعد.", en: "Propose a concrete recovery plan: what remains, and who can help." },
          { ar: "اطلب موعداً جديداً واقعياً تستطيع الالتزام به فعلاً.", en: "Ask for a realistic new date you can actually keep." },
        ],
      },
      rememberThis: {
        ar: "الشريك الذي يُخبَر مبكراً يثق بك أكثر من الشريك الذي فُوجئ - بصرف النظر عن الموعد نفسه.",
        en: "A partner told early trusts you more than one who's blindsided — regardless of the deadline itself.",
      },
      useItTomorrow: {
        ar: "راجع اليوم ملفاتك المفتوحة، وحدد أي موعد بدأ يبدو غير واقعي - وأفصح عنه الآن، لا بعد أيام.",
        en: "Review your open files today, identify any deadline that's starting to look unrealistic — and disclose it now, not days from now.",
      },
    },
    targetLevel: 4,
    sourceIds: ["src.fire-proof", "src.four-thousand-weeks", "src.68-power-moves"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
