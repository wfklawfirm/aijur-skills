import type { UnitDef } from "../types";

/**
 * Firm & Matter Operations path (`dom.firm-operations`) — units 6-10, the
 * second half of the path.
 *
 * `ch.fo.quality-before-it-leaves` covers units 6-8: the checklist mindset
 * for what to check before a document goes out, writing a defensible time
 * and billing narrative, and the live conversation where you flag a real
 * error found in a colleague's work (closing with a simulation).
 * `ch.fo.closing-and-handover` covers units 9-10: preparing a clean
 * handover note before leave or reassignment, and the live handover
 * conversation itself (closing the whole path with a simulation).
 *
 * Recurring protagonist across all five units: Lama Sarraf (لمى الصراف), a
 * mid-level associate. Every other name is distinct from names used in the
 * other domains' reference files.
 *
 * Skills, rubrics and scenarios referenced here are authored elsewhere in
 * the bundle (framework/skills-firm-operations.ts,
 * framework/rubrics-firm-operations.ts, scenarios-firm-operations.ts).
 */
export const FO_UNITS_06_10: UnitDef[] = [
  // =========================================================================
  // UNIT 06 — Before it leaves: the final-check mindset
  // =========================================================================
  {
    id: "unit.fo.06",
    chapterId: "ch.fo.quality-before-it-leaves",
    order: 6,
    title: {
      ar: "قبل أن يغادر الملف: عقلية الفحص الأخير",
      en: "Before It Leaves: The Final-Check Mindset",
    },
    subtitle: {
      ar: "خطأ يلتقطه فحص من دقيقتين قد يكلّف ثقة موكل بُنيت على مدى أشهر.",
      en: "A mistake a two-minute check catches can cost a client's trust built over months.",
    },
    primarySkillId: "skill.output-quality-control",
    skillIds: ["skill.output-quality-control", "skill.file-organisation"],
    stage: 3,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.fo.06.hook",
        text: {
          ar: "تهمّ الأستاذة لمى الصراف بإرسال خطاب إنهاء خدمة لموكل، وتلاحظ في اللحظة الأخيرة أن التاريخ المذكور فيه يعود لعام انتهى فعلاً.",
          en: "Lama Sarraf is about to send a termination letter to a client, and at the last moment notices the date in it belongs to a year that's already over.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.fo.06.why",
        text: {
          ar: "الموكل لا يقرأ الحجة القانونية فقط، بل يقرأ اسمه وتاريخه ورقمه أيضاً. خطأ في التفاصيل يجعله يشك حتى في التحليل الصحيح خلفه.",
          en: "Clients don't just read the legal argument — they read their own name, date and figures too. An error in the details makes them doubt even a sound analysis behind it.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.fo.06.goals",
        goals: {
          ar: [
            "أن تحدد أربع فئات أساسية يجب فحصها قبل خروج أي مستند: الأسماء والتواريخ والأرقام، المصطلحات المعرّفة، الإحالات المرجعية، وتنفيذ التعليمات فعلياً.",
            "أن تبني عادة فحص أخير سريعة لا تتحول إلى مراجعة كاملة تستهلك وقتاً غير متاح.",
            "أن تميّز الخطأ الذي يستحق التوقف فوراً عن الخطأ الذي يمكن إصلاحه بهدوء دون تصعيد.",
          ],
          en: [
            "Identify four core categories to check before any document leaves: names/dates/figures, defined terms, cross-references, and that instructions were actually followed.",
            "Build a fast final-check habit that doesn't turn into a full re-review you don't have time for.",
            "Tell an error that deserves stopping immediately apart from one you can quietly fix without escalation.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.fo.06.lesson",
        title: {
          ar: "أربع فئات، فحص واحد أخير",
          en: "Four Categories, One Final Pass",
        },
        body: {
          ar: [
            "أغلب الأخطاء التي تصل إلى الموكل ليست أخطاء قانونية، بل تفاصيل صغيرة: اسم مكتوب خطأ، تاريخ من نسخة سابقة، رقم لم يُحدَّث.",
            "الفئة الأولى: الأسماء والتواريخ والأرقام. هذه أول ما يقرأه الموكل، وأول ما يكشف أن المستند نُسخ من ملف آخر دون تدقيق.",
            "الفئة الثانية: المصطلحات المعرّفة. تأكد أن كل مصطلح عُرّف مرة واحدة، واستُخدم بالصيغة نفسها في كل موضع لاحق، لا بصيغ متعددة تربك القارئ.",
            "الفئة الثالثة: الإحالات المرجعية. حين يشير البند الخامس إلى «المادة الثالثة أعلاه»، تأكد أن المادة الثالثة فعلاً تقول ما يُفترض أن تقوله.",
            "الفئة الرابعة، والأهم غالباً: هل نُفّذت التعليمات فعلياً؟ طلب الموكل تعديلاً محدداً - هل ظهر هذا التعديل في النسخة النهائية أم بقي في المسودة السابقة؟",
            "الفحص الأخير لا يعني إعادة قراءة كل شيء من الصفر؛ يعني مروراً سريعاً ومقصوداً على هذه الفئات الأربع تحديداً، حتى تحت ضغط الوقت.",
          ],
          en: [
            "Most errors that reach a client aren't legal mistakes — they're small details: a misspelled name, a leftover date, a figure never updated.",
            "First category: names, dates, figures. This is the first thing a client reads, and the fastest sign a document was copied from another file without a check.",
            "Second category: defined terms. Confirm each term is defined once and used the same way everywhere after, not in several different forms that confuse the reader.",
            "Third category: cross-references. When clause five points to 'article three above,' confirm article three actually says what it's supposed to say.",
            "Fourth category, often the most important: were instructions actually followed? The client asked for a specific change — does it appear in the final version, or is it stuck in the earlier draft?",
            "A final check doesn't mean re-reading everything from scratch; it means a fast, deliberate pass through these four categories specifically, even under time pressure.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.fo.06.visual",
        title: {
          ar: "أربع فئات الفحص الأخير",
          en: "The Four Final-Check Categories",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "الأسماء والتواريخ والأرقام", en: "Names, dates, figures" },
            detail: {
              ar: "أول ما يقرأه الموكل، وأسرع ما يكشف مستنداً غير مدقق.",
              en: "The first thing a client reads, and the fastest tell of an unchecked document.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "المصطلحات المعرّفة", en: "Defined terms" },
            detail: {
              ar: "عرِّف المصطلح مرة، واستخدمه بالصيغة نفسها في كل مكان لاحق.",
              en: "Define a term once, use it the same way everywhere after.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "الإحالات المرجعية", en: "Cross-references" },
            detail: {
              ar: "تأكد أن كل إحالة تشير فعلاً لما تدّعي الإشارة إليه.",
              en: "Confirm every cross-reference actually points to what it claims.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "تنفيذ التعليمات فعلياً", en: "Instructions actually followed" },
            detail: {
              ar: "التعديل الذي طلبه الموكل - هل ظهر في النسخة النهائية؟",
              en: "The change the client asked for — does it appear in the final version?",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.fo.06.worked",
        strong: {
          label: {
            ar: "لمى تضبط خطاب مصنع الكرم قبل إرساله",
            en: "Lama catches the Karam Textiles letter before it goes out",
          },
          text: {
            ar: [
              "تراجع الأستاذة لمى الصراف خطاب إنهاء خدمة موظف لصالح مصنع الكرم للنسيج، المبني على قرار مجلس الإدارة الصادر الشهر الماضي.",
              "في الفحص الأخير، تلاحظ أن الخطاب يذكر تاريخ إنهاء الخدمة بالعام الماضي بدل العام الحالي - أثر بقي من مستند سابق أُعيد استخدامه كقالب.",
              "تصحح التاريخ، وتراجع أيضاً أن مبلغ التعويض المذكور يطابق ما وافق عليه مجلس الإدارة بالضبط، قبل أن ترسل الخطاب.",
            ],
            en: [
              "Lama Sarraf reviews an employee termination letter for Karam Textiles Factory, based on last month's board decision.",
              "In her final check, she notices the letter states the termination date in last year rather than this year — a leftover from an earlier document reused as a template.",
              "She corrects the date, and also confirms the compensation figure matches exactly what the board approved, before sending the letter.",
            ],
          },
          why: {
            ar: "فحصت الفئات الأربع تحديداً: التاريخ كرقم حساس، والمبلغ مقابل قرار مجلس الإدارة، فأوقفت خطأ كان سيصل إلى موظف وموكل معاً.",
            en: "She checked the four categories specifically: the date as a sensitive figure, the amount against the board's decision — stopping a mistake that would have reached both an employee and a client.",
          },
        },
        weak: {
          label: {
            ar: "خطاب يُرسل دون فحص أخير",
            en: "A letter sent with no final check",
          },
          text: {
            ar: ["يرسل زميل الخطاب فور الانتهاء من الصياغة، مطمئناً لأن النص القانوني سليم من حيث الأساس."],
            en: ["A colleague sends the letter right after drafting it, confident because the legal substance is sound at its core."],
          },
          why: {
            ar: "الاعتماد على سلامة الحجة القانونية وحدها ترك تاريخاً خاطئاً يصل للموظف، فيضطر المكتب لاحقاً لتصحيحه بخطاب ثانٍ محرج.",
            en: "Relying on the legal argument alone let a wrong date reach the employee, forcing the firm to send an awkward follow-up correction later.",
          },
        },
      },
      { kind: "activity", id: "s.fo.06.a1", activityId: "act.fo.06.1", mode: "quick" },
      { kind: "activity", id: "s.fo.06.a2", activityId: "act.fo.06.2", mode: "guided" },
      { kind: "activity", id: "s.fo.06.a3", activityId: "act.fo.06.3", mode: "guided" },
      { kind: "activity", id: "s.fo.06.a4", activityId: "act.fo.06.4", mode: "independent" },
      { kind: "activity", id: "s.fo.06.a5", activityId: "act.fo.06.5", mode: "independent" },
      { kind: "summary", id: "s.fo.06.summary", summaryCardId: "card.fo.06" },
      {
        kind: "apply_tomorrow",
        id: "s.fo.06.apply",
        task: {
          ar: "قبل أن ترسل أي مستند غداً، امرّ بالفئات الأربع في أقل من دقيقتين.",
          en: "Before sending any document tomorrow, pass through the four categories in under two minutes.",
        },
        detail: {
          ar: "ابدأ بالأسماء والتواريخ والأرقام، وانتهِ بالتأكد أن تعليمات الموكل نُفّذت فعلاً.",
          en: "Start with names, dates and figures; end by confirming the client's instructions were actually carried out.",
        },
      },
      {
        kind: "next_mission",
        id: "s.fo.06.next",
        teaser: {
          ar: "عرفت ماذا تفحص قبل الإرسال. الوحدة القادمة: كتابة سرد وقت يمكن الدفاع عنه، لا سرد غامض.",
          en: "You know what to check before sending. Next: writing a time narrative you can defend, not a vague one.",
        },
      },
    ],
    activities: [
      {
        id: "act.fo.06.1",
        kind: "find_mistake",
        skillId: "skill.output-quality-control",
        stage: 3,
        weight: 1,
        context: {
          ar: [
            "تم التوصل للتسوية الفعلية هذا الأسبوع مع موكل جديد.",
            "الفقرة المقترحة للخطاب: «نفيدكم بأن التسوية المتفق عليها بتاريخ ١٢ آذار ٢٠٢٣ تقضي بدفع مبلغ خمسة عشر ألف دولار أميركي خلال ثلاثين يوماً من تاريخه، وفقاً للمادة الرابعة من اتفاق التسوية المرفق.»",
          ],
          en: [
            "The actual settlement was reached this week, with a new client.",
            "Proposed letter paragraph: 'We confirm the settlement agreed on 12 March 2023 provides for payment of fifteen thousand US dollars within thirty days of this date, per Article Four of the attached settlement agreement.'",
          ],
        },
        prompt: {
          ar: "أي جزء من هذه الفقرة يستحق التوقف فوراً؟",
          en: "Which part of this paragraph deserves stopping immediately?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "تاريخ التسوية «١٢ آذار ٢٠٢٣» لا يتفق مع أن التسوية تمت فعلياً هذا الأسبوع.",
              en: "The settlement date '12 March 2023' doesn't fit with the settlement actually being reached this week.",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. تاريخ من مستند سابق أُعيد استخدامه كقالب سيصل للموكل كما هو ما لم يُوقف الآن.",
              en: "Exactly. A date left over from an earlier document reused as a template will reach the client as-is unless caught now.",
            },
          },
          {
            id: "o2",
            label: {
              ar: "كتابة المبلغ بالحروف («خمسة عشر ألف») بدل الأرقام فقط.",
              en: "Writing the amount in words ('fifteen thousand') instead of numerals only.",
            },
            rationale: {
              ar: "كتابة المبلغ بالحروف ممارسة جيدة تمنع الخلاف على الرقم، لا خطأ يستحق التوقف.",
              en: "Spelling out the amount in words is good practice that prevents disputes over the figure — not an error worth stopping for.",
            },
          },
          {
            id: "o3",
            label: {
              ar: "الإشارة إلى المادة الرابعة من اتفاق التسوية المرفق.",
              en: "The reference to Article Four of the attached settlement agreement.",
            },
            rationale: {
              ar: "الإحالة المرجعية تساعد الموكل على التحقق بنفسه؛ حذفها كان سيضعف الخطاب لا يُصلحه.",
              en: "The cross-reference helps the client verify for themselves; removing it would weaken the letter, not fix it.",
            },
          },
          {
            id: "o4",
            label: {
              ar: "لا خطأ في الفقرة، هي جاهزة للإرسال كما هي.",
              en: "There's no error in the paragraph — it's ready to send as-is.",
            },
            rationale: {
              ar: "تجاهل التاريخ الواضح الخطأ يترك تناقضاً يكشفه الموكل نفسه لاحقاً.",
              en: "Ignoring the obviously wrong date leaves a contradiction the client will spot themselves later.",
            },
          },
        ],
      },
      {
        id: "act.fo.06.2",
        kind: "categorization",
        skillId: "skill.output-quality-control",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "صنّف كل ملاحظة فحص ضمن الفئة الصحيحة من فئات الفحص الأخير الأربع.",
          en: "Sort each check note into its correct final-check category.",
        },
        hint: {
          ar: "اسأل: هل هذا رقم حساس، مصطلح متكرر، إحالة لبند آخر، أم تنفيذ لتعليمة محددة؟",
          en: "Ask: is this a sensitive figure, a repeated term, a reference to another clause, or execution of a specific instruction?",
        },
        accessibleAlternative: {
          ar: "اختر الفئة من قائمة منسدلة بجانب كل ملاحظة بدل السحب.",
          en: "Pick the category from a dropdown beside each note instead of dragging.",
        },
        buckets: [
          { id: "names", label: { ar: "الأسماء والتواريخ والأرقام", en: "Names, dates, figures" } },
          { id: "terms", label: { ar: "المصطلحات المعرّفة", en: "Defined terms" } },
          { id: "refs", label: { ar: "الإحالات المرجعية", en: "Cross-references" } },
          { id: "instr", label: { ar: "تنفيذ التعليمات", en: "Instructions followed" } },
        ],
        items: [
          {
            id: "c1",
            label: { ar: "تأكد أن اسم الموكل مطابق تماماً لما هو مسجل في التوكيل.", en: "Confirm the client's name exactly matches what's on the power of attorney." },
            bucketId: "names",
            rationale: {
              ar: "الاسم أول ما يقرأه الموكل، وأول ما يكشف مستنداً نُسخ دون تدقيق.",
              en: "The name is the first thing a client reads, and the first sign of a document copied without a check.",
            },
          },
          {
            id: "c2",
            label: { ar: "تأكد أن مصطلح «تاريخ الاستحقاق» استُخدم بالصيغة نفسها في كل صفحات العقد.", en: "Confirm 'due date' is used the same way across every page of the contract." },
            bucketId: "terms",
            rationale: {
              ar: "تعدد صيغ المصطلح نفسه يربك القارئ ويثير شكوكاً حول أي صيغة هي الصحيحة.",
              en: "Multiple forms of the same term confuse the reader and raise doubt about which form is correct.",
            },
          },
          {
            id: "c3",
            label: { ar: "تأكد أن البند العاشر الذي يشير إلى «الملحق أ» يطابق فعلاً محتوى الملحق المرفق.", en: "Confirm clause ten, which points to 'Annex A,' actually matches the attached annex's content." },
            bucketId: "refs",
            rationale: {
              ar: "إحالة تشير لملحق لا يطابقها تترك بنداً بلا مرجع فعلي يمكن الاعتماد عليه.",
              en: "A cross-reference pointing to a mismatched annex leaves a clause with no actual reference to rely on.",
            },
          },
          {
            id: "c4",
            label: { ar: "تأكد أن التخفيض الذي طلبه الموكل على الأتعاب ظهر فعلاً في الفاتورة النهائية.", en: "Confirm the fee discount the client requested actually appears on the final invoice." },
            bucketId: "instr",
            rationale: {
              ar: "طلب واضح من الموكل لم يُنفَّذ في النسخة النهائية يظهر كإهمال، لا كخطأ عابر.",
              en: "A clear client request not carried through to the final version reads as neglect, not a minor slip.",
            },
          },
          {
            id: "c5",
            label: { ar: "تأكد أن رقم الحساب المصرفي المذكور للتحويل هو الرقم الصحيح المحدَّث.", en: "Confirm the bank account number stated for the transfer is the correct, updated one." },
            bucketId: "names",
            rationale: {
              ar: "أخطر خطأ ممكن في هذه الفئة، لأنه قد يوجّه أموالاً فعلية لجهة خاطئة.",
              en: "The most dangerous error in this category, since it could send real funds to the wrong party.",
            },
          },
          {
            id: "c6",
            label: { ar: "تأكد أن كل إشارة لـ«الطرف الأول» في العقد تعني الجهة نفسها من أول صفحة حتى آخرها.", en: "Confirm every reference to 'the First Party' in the contract means the same entity from first page to last." },
            bucketId: "terms",
            rationale: {
              ar: "مصطلح معرّف يتغير معناه ضمناً وسط العقد يهدم اليقين الذي صُمم لأجله.",
              en: "A defined term whose meaning silently shifts mid-contract undermines the certainty it was meant to create.",
            },
          },
        ],
      },
      {
        id: "act.fo.06.3",
        kind: "ordering",
        skillId: "skill.output-quality-control",
        secondarySkillIds: ["skill.file-organisation"],
        stage: 3,
        weight: 2,
        prompt: {
          ar: "رتّب خطوات الفحص الأخير بالترتيب الذي يقلل الوقت ويضمن عدم تفويت خطأ حساس.",
          en: "Order the final-check steps in the sequence that saves time and avoids missing a critical error.",
        },
        hint: {
          ar: "ابدأ بما يظهره الموكل أولاً، وانتهِ بالتأكد أن طلبه نُفّذ فعلاً.",
          en: "Start with what the client sees first; end with confirming their request was actually carried out.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each step instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "افحص الأسماء والتواريخ والأرقام أولاً - أكثر ما يكشفه الموكل فوراً.", en: "Check names, dates and figures first — the fastest thing a client will notice." },
            rationale: {
              ar: "يمنع أوضح خطأ محرج قبل أي شيء آخر.",
              en: "Catches the most obviously embarrassing error before anything else.",
            },
          },
          {
            id: "i2",
            label: { ar: "تأكد من ثبات المصطلحات المعرّفة عبر المستند كاملاً.", en: "Confirm defined terms stay consistent across the whole document." },
            rationale: {
              ar: "يحتاج قراءة أوسع من الأسماء المفردة، فيأتي بعدها منطقياً.",
              en: "Needs a wider read than single names, so it logically follows.",
            },
          },
          {
            id: "i3",
            label: { ar: "تحقق أن كل إحالة مرجعية تشير لما تدّعيه فعلاً.", en: "Verify every cross-reference actually points to what it claims." },
            rationale: {
              ar: "يتطلب مقارنة بين موضعين في المستند، خطوة أعمق تأتي بعد الفحوصات الأسرع.",
              en: "Requires comparing two spots in the document — a deeper step that follows the faster checks.",
            },
          },
          {
            id: "i4",
            label: { ar: "أكّد أخيراً أن تعليمات الموكل المحددة نُفّذت في النسخة النهائية بالذات.", en: "Finally confirm the client's specific instructions were carried through into this exact final version." },
            rationale: {
              ar: "آخر خطوة لأنها تحتاج مقارنة مباشرة مع الطلب الأصلي، وأفضل أن تكون آخر ما تراجعه قبل الإرسال.",
              en: "Last because it needs a direct comparison to the original request, best done as the very last check before sending.",
            },
          },
        ],
      },
      {
        id: "act.fo.06.4",
        kind: "short_written",
        skillId: "skill.output-quality-control",
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.firm-operations-written.v1",
        weight: 3,
        minChars: 90,
        context: {
          ar: ["راجعت مسودة إشعار قانوني لموكل، ولاحظت أنها نُسخت جزئياً من ملف موكل آخر."],
          en: ["You reviewed a draft legal notice for a client, and noticed it was partly copied from another client's file."],
        },
        prompt: {
          ar: "اكتب ثلاث نقاط تفحصها تحديداً قبل إرسال هذا الإشعار (٣٠-٥٠ كلمة).",
          en: "Write the three specific things you'd check before sending this notice (30-50 words).",
        },
        modelAnswer: {
          ar: [
            "«سأتأكد أن اسم الموكل الحالي وتاريخ الإشعار يطابقان ملفه لا الملف السابق، وأن كل إحالة لبند في العقد تشير فعلاً لبند موجود في عقد هذا الموكل، وأن الطلب المحدد الذي طلبه - تحديد مهلة الرد بعشرة أيام - مذكور فعلاً في النص.»",
          ],
          en: [
            "'I'll confirm the current client's name and the notice date match their file, not the previous one; that every contract cross-reference points to a clause that actually exists in this client's contract; and that the specific request they made — a ten-day response deadline — actually appears in the text.'",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«سأراجع الإشعار بشكل عام للتأكد أنه سليم قانونياً.»"],
            en: ["'I'll review the notice generally to make sure it's legally sound.'"],
          },
          whatIsWrong: {
            ar: "فحص عام بلا فئات محددة يفوّت بالضبط الخطأ الأكثر ترجيحاً هنا: أثر النسخ من ملف آخر.",
            en: "A general review with no specific categories misses exactly the most likely error here: a leftover from copying another file.",
          },
        },
      },
      {
        id: "act.fo.06.5",
        kind: "reflection",
        skillId: "skill.output-quality-control",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع مستنداً أرسلته أو كدت ترسله وفيه خطأ في اسم أو تاريخ أو رقم.",
          en: "Recall a document you sent, or nearly sent, with an error in a name, date or figure.",
        },
        followUp: {
          ar: "أي فئة من الفئات الأربع كانت ستلتقط ذلك الخطأ لو طبقتها كخطوة أخيرة؟",
          en: "Which of the four categories would have caught that error, if applied as a final step?",
        },
      },
    ],
    summaryCard: {
      id: "card.fo.06",
      title: {
        ar: "الفحص الأخير: أربع فئات",
        en: "The Final Check: Four Categories",
      },
      whatYouLearned: {
        ar: [
          "أغلب الأخطاء التي تصل للموكل تفاصيل صغيرة لا أخطاء قانونية: اسم، تاريخ، رقم.",
          "الفئات الأربع: الأسماء والتواريخ والأرقام، المصطلحات المعرّفة، الإحالات المرجعية، وتنفيذ التعليمات فعلياً.",
          "الفحص الأخير مرور سريع ومقصود، لا إعادة قراءة كاملة من الصفر.",
        ],
        en: [
          "Most errors that reach a client are small details, not legal mistakes: a name, a date, a figure.",
          "Four categories: names/dates/figures, defined terms, cross-references, and instructions actually followed.",
          "A final check is a fast, deliberate pass — not a full re-read from scratch.",
        ],
      },
      framework: {
        name: { ar: "أربع فئات الفحص الأخير", en: "The Four Final-Check Categories" },
        steps: [
          { ar: "الأسماء والتواريخ والأرقام.", en: "Names, dates, figures." },
          { ar: "المصطلحات المعرّفة.", en: "Defined terms." },
          { ar: "الإحالات المرجعية.", en: "Cross-references." },
          { ar: "تنفيذ التعليمات فعلياً.", en: "Instructions actually followed." },
        ],
      },
      rememberThis: {
        ar: "خطأ صغير يصل للموكل يهز ثقته بكل التحليل خلفه، حتى لو كان سليماً بالكامل.",
        en: "A small error reaching a client shakes their trust in the whole analysis behind it, however sound it is.",
      },
      useItTomorrow: {
        ar: "قبل أن ترسل أي مستند غداً، امرّ بالفئات الأربع في أقل من دقيقتين.",
        en: "Before sending any document tomorrow, pass through the four categories in under two minutes.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.legal-project-management", "src.legal-ops-kpis", "src.managing-professional-service-firm"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 07 — A time narrative you can defend
  // =========================================================================
  {
    id: "unit.fo.07",
    chapterId: "ch.fo.quality-before-it-leaves",
    order: 7,
    title: {
      ar: "سرد وقت يمكن الدفاع عنه، لا سرد غامض",
      en: "A Time Narrative You Can Defend, Not a Vague One",
    },
    subtitle: {
      ar: "«مراسلات متنوعة» لا تخبر أحداً بشيء - لا الموكل، ولا الشريك، ولا حتى المحامي نفسه بعد شهر.",
      en: "'Various correspondence' tells no one anything — not the client, not the partner, not even the lawyer a month later.",
    },
    primarySkillId: "skill.time-and-billing-narratives",
    skillIds: ["skill.time-and-billing-narratives", "skill.output-quality-control"],
    stage: 3,
    estimatedMinutes: 8,
    steps: [
      {
        kind: "hook",
        id: "s.fo.07.hook",
        text: {
          ar: "تفتح لمى فاتورة الشهر الماضي فتجد سطراً كتبته بنفسها: «مراسلات متنوعة - ساعتان»، ولا تتذكر الآن بمن تراسلت ولا لماذا.",
          en: "Lama opens last month's invoice and finds a line she wrote herself: 'Various correspondence — two hours,' and can't now recall who she corresponded with or why.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.fo.07.why",
        text: {
          ar: "سرد غامض يجعل الموكل يشك أنه يدفع مقابل لا شيء، ويجعل المكتب عاجزاً عن الدفاع عن الفاتورة لو اعترض الموكل أو راجعها طرف ثالث.",
          en: "A vague narrative makes the client suspect they're paying for nothing, and leaves the firm unable to defend the bill if the client objects or a third party reviews it.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.fo.07.goals",
        goals: {
          ar: [
            "أن تميّز بين سرد وقت غامض وسرد محدد يوضح ما حدث فعلاً.",
            "أن تكتب سرداً يحمل الفعل، وموضوعه، ونتيجته المحددة، لا فقط عنوان المهمة.",
            "أن تتجنب الصياغات العامة التي تتكرر لأشهر دون أن تحمل معلومة جديدة.",
          ],
          en: [
            "Tell a vague time narrative apart from a specific one that shows what actually happened.",
            "Write a narrative that carries the action, its subject, and a concrete outcome, not just a task label.",
            "Avoid generic phrasing repeated for months with no new information.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.fo.07.lesson",
        title: {
          ar: "الفعل، الموضوع، النتيجة",
          en: "Action, Subject, Outcome",
        },
        body: {
          ar: [
            "«مراسلات متنوعة» و«مراجعة مستندات» عبارات صحيحة تقنياً لكنها لا تخبر أحداً بشيء فعلي حدث.",
            "السرد الجيد يحمل ثلاثة عناصر: الفعل المحدد الذي قمت به، موضوعه بدقة، والنتيجة أو الغرض منه.",
            "بدل «مراجعة مستندات - ساعة»: «راجعت مطالبة المقاول المؤرخة ١٥ الشهر الحالي، وحددت ثلاثة بنود متنازع عليها للرد عليها.»",
            "السرد المحدد يحمي المكتب أيضاً: لو اعترض الموكل على الفاتورة، يمكن تبرير كل ساعة بوضوح، لا بعبارة عامة تبدو وكأنها تخفي شيئاً.",
            "لا يعني السرد المحدد الإطالة؛ جملة واحدة دقيقة أفضل من فقرة عامة طويلة لا تضيف معلومة.",
            "اكتب السرد فور الانتهاء من المهمة، لا في نهاية الأسبوع من الذاكرة - فالتفاصيل الدقيقة تُنسى أولاً.",
          ],
          en: [
            "'Various correspondence' and 'document review' are technically true but tell no one what actually happened.",
            "A good narrative carries three elements: the specific action you took, its precise subject, and the outcome or purpose.",
            "Instead of 'document review — one hour': 'Reviewed the contractor's claim dated the 15th, identifying three disputed items to respond to.'",
            "A specific narrative also protects the firm: if a client objects to a bill, every hour can be justified clearly, not with a vague phrase that looks like it's hiding something.",
            "Specific doesn't mean long — one precise sentence beats a long generic paragraph that adds nothing.",
            "Write the narrative right after finishing the task, not from memory at week's end — exact detail is the first thing forgotten.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.fo.07.visual",
        title: {
          ar: "غامض مقابل محدد",
          en: "Vague vs. Specific",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "غامض", en: "Vague" },
            detail: {
              ar: "«مراسلات متنوعة» - لا فعل محدد ولا نتيجة.",
              en: "'Various correspondence' — no specific action, no outcome.",
            },
            tone: "negative",
          },
          {
            label: { ar: "عام جزئياً", en: "Partly generic" },
            detail: {
              ar: "«مراجعة العقد» - فعل محدد لكن بلا نتيجة أو تفصيل.",
              en: "'Contract review' — a specific action, but no outcome or detail.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "محدد وقابل للدفاع", en: "Specific and defensible" },
            detail: {
              ar: "فعل + موضوع دقيق + نتيجة، يبرر كل دقيقة مدفوعة.",
              en: "Action + precise subject + outcome, justifying every billed minute.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.fo.07.worked",
        strong: {
          label: {
            ar: "لمى تكتب سرداً يبرر كل دقيقة",
            en: "Lama writes a narrative that justifies every minute",
          },
          text: {
            ar: [
              "تعمل لمى على نزاع دفعات مع شركة السنديان للمقاولات، بعد أن اعترض المقاول على مبلغ التغييرات الإضافية في المشروع.",
              "تكتب: «راجعت مطالبة المقاول المؤرخة ١٠ الشهر الحالي بشأن أعمال إضافية بقيمة ثمانية آلاف دولار، وحددت بندين غير موثّقين بأمر تغيير موقّع - ٥٤ دقيقة.»",
            ],
            en: [
              "Lama is handling a payment dispute for Sindiyan Construction, after the contractor objected to the amount claimed for extra project work.",
              "She writes: 'Reviewed the contractor's claim dated the 10th for USD 8,000 in additional work, identifying two items with no signed change order — 54 minutes.'",
            ],
          },
          why: {
            ar: "يحمل السرد الفعل الدقيق وموضوعه ونتيجة الفحص، فيستطيع أي زميل أو الموكل نفسه فهم ما تم إنجازه بالضبط دون سؤال إضافي.",
            en: "The narrative carries the exact action, its subject, and the review's outcome, so any colleague or the client can understand exactly what was done, with no follow-up question.",
          },
        },
        weak: {
          label: {
            ar: "سرد لا يخبر أحداً بشيء",
            en: "A narrative that tells no one anything",
          },
          text: {
            ar: ["«مراجعة ملف السنديان - ٥٤ دقيقة.»"],
            en: ["'Reviewing the Sindiyan file — 54 minutes.'"],
          },
          why: {
            ar: "لا يحدد أي فعل ولا أي نتيجة؛ لو اعترض الموكل على الفاتورة بعد أسابيع، لن يتذكر أحد ما حدث فعلياً في تلك الدقائق.",
            en: "It names no action and no outcome; if the client objects to the bill weeks later, no one will remember what actually happened in those minutes.",
          },
        },
      },
      { kind: "activity", id: "s.fo.07.a1", activityId: "act.fo.07.1", mode: "quick" },
      { kind: "activity", id: "s.fo.07.a2", activityId: "act.fo.07.2", mode: "guided" },
      { kind: "activity", id: "s.fo.07.a3", activityId: "act.fo.07.3", mode: "guided" },
      { kind: "activity", id: "s.fo.07.a4", activityId: "act.fo.07.4", mode: "independent" },
      { kind: "activity", id: "s.fo.07.a5", activityId: "act.fo.07.5", mode: "independent" },
      { kind: "summary", id: "s.fo.07.summary", summaryCardId: "card.fo.07" },
      {
        kind: "apply_tomorrow",
        id: "s.fo.07.apply",
        task: {
          ar: "اكتب سرد وقت اليوم بثلاثة عناصر: الفعل، الموضوع، النتيجة.",
          en: "Write today's time narrative with three elements: action, subject, outcome.",
        },
        detail: {
          ar: "استبدل أي عبارة عامة كتبتها بعادة بجملة واحدة محددة.",
          en: "Replace any generic phrase you write out of habit with one specific sentence.",
        },
      },
      {
        kind: "next_mission",
        id: "s.fo.07.next",
        teaser: {
          ar: "عرفت كيف تكتب سرداً محدداً. الوحدة القادمة: المحادثة الفعلية حين تكتشف خطأ حقيقياً في عمل زميل.",
          en: "You know how to write a specific narrative. Next: the live conversation when you find a real error in a colleague's work.",
        },
      },
    ],
    activities: [
      {
        id: "act.fo.07.1",
        kind: "multiple_choice",
        skillId: "skill.time-and-billing-narratives",
        stage: 3,
        weight: 1,
        context: {
          ar: ["يراجع أحد الزملاء عقد إيجار تجاري لصالح موكل، ويحدد بنداً غامضاً بشأن الصيانة يحتاج توضيحاً في الرد."],
          en: ["A colleague reviews a commercial lease for a client, and flags a vague maintenance clause needing clarification in the response."],
        },
        prompt: {
          ar: "أي سرد وقت أفضل لهذه المهمة؟",
          en: "Which time narrative is best for this task?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«راجعت البند السابع من عقد الإيجار، وحددت غموضاً في مسؤولية صيانة المصعد يحتاج توضيحاً كتابياً من المالك.»",
              en: "'Reviewed clause seven of the lease, identifying ambiguity in elevator maintenance responsibility that needs written clarification from the landlord.'",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. يحمل الفعل والموضوع الدقيق والنتيجة معاً، فيبرر الوقت المدفوع بوضوح.",
              en: "Exactly. It carries the action, precise subject and outcome together, clearly justifying the billed time.",
            },
          },
          {
            id: "o2",
            label: { ar: "«مراجعة عقد إيجار.»", en: "'Reviewing lease agreement.'" },
            rationale: {
              ar: "بلا موضوع دقيق ولا نتيجة، لا يمكن الدفاع عنه لو اعترض الموكل لاحقاً.",
              en: "With no precise subject and no outcome, it can't be defended if the client objects later.",
            },
          },
          {
            id: "o3",
            label: { ar: "«عمل قانوني على ملف الإيجار.»", en: "'Legal work on the lease file.'" },
            rationale: {
              ar: "لا يذكر حتى نوع العمل المنجز، فيبقى بلا فائدة لأي شخص يراجعه لاحقاً.",
              en: "Doesn't even name the type of work done, staying useless to anyone reviewing it later.",
            },
          },
          {
            id: "o4",
            label: { ar: "«مراجعة مطوّلة ومعقدة لعقد الإيجار.»", en: "'Extensive and complex review of the lease agreement.'" },
            rationale: {
              ar: "وصف الجهد بدل النتيجة لا يخبر أحداً بما تم اكتشافه فعلياً في المراجعة.",
              en: "Describing effort instead of outcome tells no one what the review actually found.",
            },
          },
        ],
      },
      {
        id: "act.fo.07.2",
        kind: "categorization",
        skillId: "skill.time-and-billing-narratives",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "صنّف كل سرد: هل هو محدد وقابل للدفاع، أم غامض؟",
          en: "Sort each narrative: specific and defensible, or vague?",
        },
        hint: {
          ar: "اسأل: هل يحمل فعلاً محدداً وموضوعاً ونتيجة، أم عنواناً عاماً فقط؟",
          en: "Ask: does it carry a specific action, subject and outcome, or just a general label?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «محدد وقابل للدفاع» / «غامض» أسفل كل سرد بدل السحب.",
          en: "Choose \"Specific and defensible\" / \"Vague\" from buttons under each narrative instead of dragging.",
        },
        buckets: [
          { id: "defensible", label: { ar: "محدد وقابل للدفاع", en: "Specific and defensible" } },
          { id: "vague", label: { ar: "غامض", en: "Vague" } },
        ],
        items: [
          {
            id: "c1",
            label: { ar: "«صغت خطاب إنذار للمستأجر يحدد مهلة خمسة عشر يوماً لتسديد الإيجار المتأخر.»", en: "'Drafted a demand letter to the tenant setting a fifteen-day deadline to pay overdue rent.'" },
            bucketId: "defensible",
            rationale: {
              ar: "يحمل الفعل والموضوع والنتيجة المحددة في جملة واحدة.",
              en: "Carries the action, subject and specific outcome in one sentence.",
            },
          },
          {
            id: "c2",
            label: { ar: "«عمل على الملف.»", en: "'Worked on the file.'" },
            bucketId: "vague",
            rationale: {
              ar: "لا يحدد أي فعل ولا أي موضوع، عبارة عامة بلا أي معلومة قابلة للاستخدام.",
              en: "Names no action and no subject — a generic phrase with no usable information.",
            },
          },
          {
            id: "c3",
            label: { ar: "«اتصال هاتفي مع الموكل.»", en: "'Phone call with the client.'" },
            bucketId: "vague",
            rationale: {
              ar: "يذكر الفعل فقط دون موضوع المكالمة أو نتيجتها.",
              en: "Names only the action, with no subject of the call or its outcome.",
            },
          },
          {
            id: "c4",
            label: {
              ar: "«اتصلت بالموكل لشرح خيارات التسوية الثلاثة المتاحة، ووافق على المتابعة بالخيار الثاني.»",
              en: "'Called the client to explain the three available settlement options; he agreed to proceed with option two.'",
            },
            bucketId: "defensible",
            rationale: {
              ar: "يحدد موضوع المكالمة ونتيجتها القابلة للتصرف بوضوح.",
              en: "Names the call's subject and its clear, actionable outcome.",
            },
          },
          {
            id: "c5",
            label: { ar: "«مراسلات متنوعة مع الطرف الآخر.»", en: "'Various correspondence with the other side.'" },
            bucketId: "vague",
            rationale: {
              ar: "العبارة الأشهر في الفواتير الغامضة، ولا تحمل أي معلومة فعلية.",
              en: "The most common vague-billing phrase, carrying no actual information.",
            },
          },
          {
            id: "c6",
            label: {
              ar: "«راجعت رد الطرف الآخر على عرض التسوية، ولاحظت تراجعاً عن نقطة الفائدة المتفق عليها سابقاً.»",
              en: "'Reviewed the other side's reply to the settlement offer, noting a retreat from the previously agreed interest point.'",
            },
            bucketId: "defensible",
            rationale: {
              ar: "يحدد الوثيقة المراجَعة والاكتشاف المحدد الناتج عنها.",
              en: "Names the reviewed document and the specific finding it produced.",
            },
          },
        ],
      },
      {
        id: "act.fo.07.3",
        kind: "fill_blank",
        skillId: "skill.time-and-billing-narratives",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "أكمل الجملة بالكلمة الأصح في كل فراغ.",
          en: "Complete the sentence with the correct word in each blank.",
        },
        template: {
          ar: "السرد الجيد يبدأ بفعل {{0}} يوضح ما حدث فعلاً، وينتهي بنتيجة أو غرض {{1}} يفيد من يقرأ الفاتورة لاحقاً.",
          en: "A good narrative opens with a {{0}} action that shows what actually happened, and closes with a {{1}} outcome or purpose useful to whoever reads the bill later.",
        },
        blanks: [
          {
            id: "b0",
            options: [{ ar: "محدد", en: "specific" }, { ar: "عام", en: "general" }, { ar: "مختصر جداً", en: "overly brief" }],
            answerIndex: 0,
            rationale: {
              ar: "التحديد هو ما يميز السرد المفيد عن العنوان الفارغ.",
              en: "Specificity is what separates a useful narrative from an empty label.",
            },
          },
          {
            id: "b1",
            options: [{ ar: "واضح", en: "clear" }, { ar: "طويل", en: "long" }, { ar: "رسمي", en: "formal" }],
            answerIndex: 0,
            rationale: {
              ar: "الوضوح، لا الطول أو الرسمية، هو ما يجعل السرد قابلاً للدفاع.",
              en: "Clarity, not length or formality, is what makes a narrative defensible.",
            },
          },
        ],
      },
      {
        id: "act.fo.07.4",
        kind: "short_written",
        skillId: "skill.time-and-billing-narratives",
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.firm-operations-written.v1",
        weight: 3,
        minChars: 100,
        context: {
          ar: ["قضيت خمسين دقيقة اليوم في تحضير مذكرة قصيرة توضح لموكل خياراته الثلاثة في نزاع تجاري مع مورّد."],
          en: ["You spent fifty minutes today preparing a short memo explaining a client's three options in a commercial dispute with a supplier."],
        },
        prompt: {
          ar: "اكتب سرد الوقت لهذه المهمة (٢٥-٤٠ كلمة)، محدداً وقابلاً للدفاع.",
          en: "Write the time narrative for this task (25-40 words), specific and defensible.",
        },
        modelAnswer: {
          ar: [
            "«أعددت مذكرة موجزة توضح للموكل ثلاثة خيارات في نزاع التوريد: التفاوض المباشر، الوساطة، أو الدعوى، مع تقدير أولي لمدة كل خيار وتكلفته - ٥٠ دقيقة.»",
          ],
          en: [
            "'Prepared a short memo outlining the client's three options in the supply dispute: direct negotiation, mediation, or litigation, with an initial estimate of each option's time and cost — 50 minutes.'",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«تحضير مذكرة للموكل - ٥٠ دقيقة.»"],
            en: ["'Preparing memo for client — 50 minutes.'"],
          },
          whatIsWrong: {
            ar: "لا يذكر مضمون المذكرة ولا الخيارات المطروحة فيها، فتبدو خمسون دقيقة بلا تفسير قابل للدفاع.",
            en: "Names neither the memo's content nor the options it covers, leaving fifty minutes with no defensible explanation.",
          },
        },
      },
      {
        id: "act.fo.07.5",
        kind: "reflection",
        skillId: "skill.time-and-billing-narratives",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع سطر فاتورة كتبته الشهر الماضي، ولم تعد تتذكر بالضبط ما حدث خلاله.",
          en: "Recall a billing line you wrote last month, and no longer remember exactly what happened during it.",
        },
        followUp: {
          ar: "كيف كنت ستكتبه لو أضفت الفعل والموضوع والنتيجة؟",
          en: "How would you write it if you added the action, the subject, and the outcome?",
        },
      },
    ],
    summaryCard: {
      id: "card.fo.07",
      title: {
        ar: "الفعل، الموضوع، النتيجة",
        en: "Action, Subject, Outcome",
      },
      whatYouLearned: {
        ar: [
          "«مراسلات متنوعة» و«مراجعة مستندات» لا تخبران أحداً بشيء فعلي حدث.",
          "السرد الجيد يحمل ثلاثة عناصر: فعل محدد، موضوع دقيق، ونتيجة أو غرض.",
          "اكتب السرد فور إنجاز المهمة، لا من الذاكرة نهاية الأسبوع.",
        ],
        en: [
          "'Various correspondence' and 'document review' tell no one what actually happened.",
          "A good narrative carries three elements: a specific action, a precise subject, and an outcome or purpose.",
          "Write the narrative right after finishing the task, not from memory at week's end.",
        ],
      },
      framework: {
        name: { ar: "الفعل · الموضوع · النتيجة", en: "Action · Subject · Outcome" },
        steps: [
          { ar: "اذكر الفعل المحدد الذي قمت به.", en: "State the specific action you took." },
          { ar: "اذكر موضوعه بدقة - أي مستند أو أي بند.", en: "Name its precise subject — which document or clause." },
          { ar: "اذكر النتيجة أو الغرض منه.", en: "State the outcome or purpose." },
        ],
      },
      rememberThis: {
        ar: "السرد الذي لا يُفهم بعد شهر لن يُفهم من الموكل الآن.",
        en: "A narrative you can't understand a month later, a client won't understand now.",
      },
      useItTomorrow: {
        ar: "اكتب سرد وقت اليوم بثلاثة عناصر: الفعل، الموضوع، النتيجة.",
        en: "Write today's time narrative with three elements: action, subject, outcome.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.legal-ops-kpis", "src.legal-project-management", "src.managing-professional-service-firm"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 08 — When you find a real error in a colleague's work (simulation)
  // =========================================================================
  {
    id: "unit.fo.08",
    chapterId: "ch.fo.quality-before-it-leaves",
    order: 8,
    title: {
      ar: "حين تكتشف خطأ حقيقياً في عمل زميل",
      en: "When You Find a Real Error in a Colleague's Work",
    },
    subtitle: {
      ar: "الصمت يحمي العلاقة مؤقتاً، لكنه يترك الخطأ يصل للموكل - والاعتراض المحترم وحده يحمي الاثنين.",
      en: "Silence protects the relationship briefly, but lets the mistake reach the client — only a respectful flag protects both.",
    },
    primarySkillId: "skill.output-quality-control",
    skillIds: ["skill.output-quality-control", "skill.workflow-design"],
    stage: 3,
    estimatedMinutes: 11,
    steps: [
      {
        kind: "hook",
        id: "s.fo.08.hook",
        text: {
          ar: "تراجع لمى خطاب إغلاق موجّهاً لموكل، وتجد أن المبلغ المذكور للتحويل المصرفي لا يطابق ما اتُفق عليه فعلياً.",
          en: "Lama reviews a closing letter to a client, and finds the wire-transfer amount stated doesn't match what was actually agreed.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.fo.08.why",
        text: {
          ar: "إخفاء الخطأ أو التلميح إليه بلطف مفرط يترك الرقم الخاطئ يصل لحساب مصرفي حقيقي. تجاهل الخطأ ليس حماية لأحد - إنه تأجيل لمشكلة أكبر.",
          en: "Hiding the error, or hinting at it too gently, lets the wrong figure reach a real bank account. Ignoring it protects no one — it just delays a bigger problem.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.fo.08.goals",
        goals: {
          ar: [
            "أن تميّز بين خطأ يستحق التوقف الفوري وخطأ أصغر يمكن ذكره لاحقاً بهدوء.",
            "أن تبني اعتراضاً واقعياً: وصف الخطأ بدقة، دون اتهام أو تهوين، مع اقتراح الحل.",
            "أن تتحدث عن الخطأ مباشرة مع الشريك المسؤول، لا أن تنشره أو تخفيه.",
          ],
          en: [
            "Tell an error that demands stopping immediately apart from a smaller one that can be raised later, calmly.",
            "Build a factual objection: describe the error precisely, without blame or minimizing, with a proposed fix.",
            "Raise the error directly with the responsible partner — neither broadcasting it nor hiding it.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.fo.08.lesson",
        title: {
          ar: "الوقائع أولاً، لا الاتهام ولا الإخفاء",
          en: "Facts First — Neither Blame Nor Hiding",
        },
        body: {
          ar: [
            "اكتشاف خطأ في عمل زميل موقف حساس: تخشى أن تبدو كمن يبحث عن أخطاء الآخرين، فتميل للصمت أو للتلميح غير المباشر.",
            "لكن الصمت أمام رقم أو تاريخ خاطئ في مستند سيصل للموكل ليس حياداً؛ إنه قرار بترك الخطأ يمر.",
            "الاعتراض الجيد يصف الوقائع فقط: «لاحظت أن المبلغ المذكور هنا يختلف عن الاتفاق المؤرخ كذا» - لا «هذا خطأ فادح من ريتا».",
            "اذهب مباشرة إلى من يملك القرار - الشريك المسؤول عادة - لا إلى زملاء آخرين للتنفيس أو طلب رأيهم أولاً.",
            "اقترح حلاً معك إن استطعت: «أقترح تصحيح الرقم قبل الإرسال، وسأتحقق من المصدر الصحيح الآن.» يحوّل الاعتراض إلى مساهمة لا شكوى.",
            "لا تعِد الموكل أو نفسك بأن النتيجة ستكون مضمونة بعد التصحيح؛ هدفك تصحيح الحقيقة المذكورة، لا التأكيد على نتيجة القضية.",
          ],
          en: [
            "Finding an error in a colleague's work is a sensitive moment: you worry about looking like someone hunting for others' mistakes, so you lean toward silence or an indirect hint.",
            "But staying silent on a wrong figure or date in a document headed to a client isn't neutral — it's a decision to let the error through.",
            "A good objection describes facts only: 'I noticed the amount stated here differs from the agreement dated such-and-such' — not 'this is a serious mistake by Rita.'",
            "Go straight to whoever can decide — usually the responsible partner — not to other colleagues to vent or seek opinions first.",
            "Offer a fix if you can: 'I'd suggest correcting the figure before sending; I'll verify the right source now.' That turns the objection into a contribution, not a complaint.",
            "Never promise the client, or yourself, that the outcome is guaranteed once corrected; your job is fixing the stated fact, not vouching for the case's result.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.fo.08.visual",
        title: {
          ar: "ثلاث خطوات لاعتراض واقعي",
          en: "Three Steps to a Factual Objection",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "صف الواقعة", en: "Describe the fact" },
            detail: {
              ar: "الرقم أو التاريخ المختلف بالضبط، دون تفسير نوايا.",
              en: "The exact number or date that differs, with no reading of intent.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "توجّه لمن يقرر", en: "Go to whoever decides" },
            detail: {
              ar: "الشريك المسؤول مباشرة، لا زملاء آخرين أولاً.",
              en: "The responsible partner directly, not other colleagues first.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "اقترح حلاً", en: "Offer a fix" },
            detail: {
              ar: "تصحيح محدد يمكن تنفيذه قبل الإرسال.",
              en: "A specific fix that can be done before sending.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.fo.08.worked",
        strong: {
          label: {
            ar: "لمى تُبلغ الأستاذ ناصر بدقة",
            en: "Lama tells Nasser precisely",
          },
          text: {
            ar: [
              "تجد لمى أن خطاب الإغلاق الذي أعدّته زميلتها ريتا كنعان لموكل شركة روابي للشحن يذكر مبلغ التسوية باثنين وعشرين ألف دولار، بينما الاتفاق الموقّع يحدد عشرين ألفاً.",
              "تذهب مباشرة للشريك المسؤول الأستاذ ناصر الحلبي وتقول: «لاحظت فرقاً بين المبلغ في خطاب الإغلاق واتفاق التسوية الموقّع - اثنان وعشرون مقابل عشرين ألفاً. تحققت من نسخة الاتفاق، والرقم الصحيح عشرون. هل أصحح الخطاب الآن؟»",
            ],
            en: [
              "Lama finds that the closing letter her colleague Rita Kanaan prepared for client Rawabi Freight Services states the settlement at twenty-two thousand dollars, while the signed agreement fixes it at twenty thousand.",
              "She goes straight to responsible partner Nasser Halabi: 'I noticed a difference between the amount in the closing letter and the signed settlement agreement — twenty-two versus twenty thousand. I checked the signed copy, and the correct figure is twenty. Should I fix the letter now?'",
            ],
          },
          why: {
            ar: "وصفت الواقعة بدقة، تحققت من المصدر قبل الإبلاغ، وتوجّهت مباشرة لمن يقرر - دون اتهام ريتا أو إخفاء الأمر.",
            en: "She described the fact precisely, verified the source before reporting, and went straight to the decision-maker — without blaming Rita or hiding the issue.",
          },
        },
        weak: {
          label: {
            ar: "لمى تلمّح بدل أن تقول",
            en: "Lama hints instead of stating",
          },
          text: {
            ar: ["تكتب لمى لريتا فقط: «تأكدي من الأرقام قبل الإرسال إذا سمحتِ 🙂» دون أن تذكر أي رقم بالتحديد، ودون إبلاغ الأستاذ ناصر."],
            en: ["Lama messages only Rita: 'Please double-check the figures before sending 🙂' — naming no specific number, and never telling Nasser."],
          },
          why: {
            ar: "التلميح غير المباشر لا يضمن أن يُكتشف الخطأ فعلاً، ويترك القرار النهائي لشخص لم يُبلَّغ بالمشكلة الحقيقية.",
            en: "The indirect hint doesn't guarantee the error is actually caught, leaving the final call with someone never told about the real problem.",
          },
        },
      },
      { kind: "activity", id: "s.fo.08.a1", activityId: "act.fo.08.1", mode: "quick" },
      { kind: "activity", id: "s.fo.08.a2", activityId: "act.fo.08.2", mode: "guided" },
      { kind: "activity", id: "s.fo.08.a3", activityId: "act.fo.08.3", mode: "independent" },
      { kind: "simulation", id: "s.fo.08.sim", scenarioId: "scn.flagging-a-quality-issue" },
      { kind: "activity", id: "s.fo.08.a4", activityId: "act.fo.08.4", mode: "independent" },
      { kind: "summary", id: "s.fo.08.summary", summaryCardId: "card.fo.08" },
      {
        kind: "apply_tomorrow",
        id: "s.fo.08.apply",
        task: {
          ar: "أول خطأ حقيقي تجده غداً، أبلغ عنه بالوقائع فقط خلال ساعة.",
          en: "The first real error you find tomorrow, report it with facts only, within the hour.",
        },
        detail: {
          ar: "تحقق من المصدر أولاً، ثم توجّه مباشرة لمن يملك القرار.",
          en: "Verify the source first, then go straight to whoever can decide.",
        },
      },
      {
        kind: "next_mission",
        id: "s.fo.08.next",
        teaser: {
          ar: "عرفت كيف تُبلغ عن خطأ بوقائع لا اتهام. الوحدة القادمة: مذكرة تسليم نظيفة قبل أن تغادر الملف.",
          en: "You know how to report an error with facts, not blame. Next: a clean handover note before you leave a matter.",
        },
      },
    ],
    activities: [
      {
        id: "act.fo.08.1",
        kind: "best_response",
        skillId: "skill.output-quality-control",
        stage: 3,
        weight: 1,
        context: {
          ar: ["تجد أن رسالة تأكيد لموكل تذكر موعد جلسة يوم الأربعاء، بينما الموعد الفعلي المسجل في المحكمة هو يوم الخميس."],
          en: ["You find a client confirmation email stating a hearing on Wednesday, while the court's actual recorded date is Thursday."],
        },
        prompt: {
          ar: "ما أفضل تصرف الآن؟",
          en: "What's the best action now?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "التوجه للشريك المسؤول فوراً: «لاحظت أن الرسالة تذكر الأربعاء، لكن سجل المحكمة يظهر الخميس. هل أصحح قبل الإرسال؟»",
              en: "Going straight to the responsible partner: 'I noticed the message says Wednesday, but the court record shows Thursday. Should I fix it before sending?'",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. واقعة محددة، تحقق مسبق، وسؤال مباشر لمن يقرر.",
              en: "Exactly. A specific fact, prior verification, and a direct question to the decision-maker.",
            },
          },
          {
            id: "o2",
            label: { ar: "تصحيح التاريخ بنفسك في المسودة دون إبلاغ أحد.", en: "Correcting the date yourself in the draft without telling anyone." },
            rationale: {
              ar: "يبدو حلاً سريعاً لكنه يترك الشريك بلا علم بوجود الخطأ أصلاً، فقد يتكرر لاحقاً.",
              en: "Looks like a quick fix but leaves the partner unaware the error existed at all, so it may recur.",
            },
          },
          {
            id: "o3",
            label: { ar: "إرسال الرسالة كما هي، فربما يكون سجل المحكمة هو الخطأ.", en: "Sending the message as-is, since maybe the court record is the error." },
            rationale: {
              ar: "افتراض دون تحقق خطر حقيقي - قد يرسل للموكل موعداً خاطئاً تماماً.",
              en: "Assuming without verifying is a real risk — it could send the client a completely wrong date.",
            },
          },
          {
            id: "o4",
            label: { ar: "سؤال زميل آخر رأيه أولاً قبل إبلاغ الشريك المسؤول.", en: "Asking another colleague's opinion first before telling the responsible partner." },
            rationale: {
              ar: "يؤخر إبلاغ من يملك القرار الفعلي دون داعٍ واضح لهذا التأخير.",
              en: "Delays informing the actual decision-maker with no clear reason for the delay.",
            },
          },
        ],
      },
      {
        id: "act.fo.08.2",
        kind: "priority_ranking",
        skillId: "skill.output-quality-control",
        stage: 3,
        weight: 2,
        prompt: {
          ar: "رتّب خطوات الإبلاغ عن خطأ حقيقي في عمل زميل بالترتيب الصحيح.",
          en: "Order the steps of reporting a real error in a colleague's work correctly.",
        },
        hint: {
          ar: "ابدأ بالتحقق، وانتهِ باقتراح حل - لا اتهام.",
          en: "Start with verifying; end with proposing a fix, not blame.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل خطوة بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each step instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "تحقق من المصدر الصحيح قبل إبلاغ أي أحد.", en: "Verify the correct source before reporting to anyone." },
            rationale: {
              ar: "يمنع إبلاغاً خاطئاً عن خطأ غير مؤكد.",
              en: "Prevents a mistaken report about an unconfirmed error.",
            },
          },
          {
            id: "i2",
            label: { ar: "صف الفرق بين ما هو مكتوب وما هو صحيح، بالأرقام أو التواريخ الفعلية فقط.", en: "Describe the gap between what's written and what's correct, using only the actual numbers or dates." },
            rationale: {
              ar: "يبقي الاعتراض واقعياً بلا تفسير نوايا.",
              en: "Keeps the objection factual, with no reading of intent.",
            },
          },
          {
            id: "i3",
            label: { ar: "توجّه مباشرة للشريك المسؤول عن الملف، لا لزملاء آخرين أولاً.", en: "Go directly to the partner responsible for the file, not other colleagues first." },
            rationale: {
              ar: "يضمن وصول المعلومة لمن يملك القرار فعلياً.",
              en: "Ensures the information reaches whoever actually holds the decision.",
            },
          },
          {
            id: "i4",
            label: { ar: "اقترح تصحيحاً محدداً يمكن تنفيذه فوراً.", en: "Offer a specific fix that can be carried out right away." },
            rationale: {
              ar: "يحوّل الاعتراض من شكوى إلى مساهمة عملية.",
              en: "Turns the objection from a complaint into a practical contribution.",
            },
          },
        ],
      },
      {
        id: "act.fo.08.3",
        kind: "short_written",
        skillId: "skill.output-quality-control",
        stage: 3,
        grading: "ai_rubric",
        rubricId: "rubric.firm-operations-written.v1",
        weight: 3,
        minChars: 90,
        context: {
          ar: ["وجدت أن مسودة رأي قانوني لموكل تستند إلى نسخة قديمة من نظام كان قد عُدّل الشهر الماضي."],
          en: ["You found a draft legal opinion for a client relying on an old version of a regulation that was amended last month."],
        },
        prompt: {
          ar: "اكتب ما ستقوله فعلياً للشريك المسؤول للإبلاغ عن هذا الخطأ (٣٠-٥٠ كلمة).",
          en: "Write what you'd actually say to the responsible partner to report this error (30-50 words).",
        },
        modelAnswer: {
          ar: [
            "«لاحظت أن الرأي يستند إلى نسخة النظام قبل تعديل الشهر الماضي. تحققت من النسخة المعدّلة، وهناك فرق يؤثر على التوصية في الصفحة الثانية. هل أراجع الرأي وفقاً للنسخة الحالية؟»",
          ],
          en: [
            "'I noticed the opinion relies on the regulation's pre-amendment version. I checked the updated version, and there's a difference affecting the recommendation on page two. Should I revise the opinion against the current version?'",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«أعتقد أن الرأي قد يحتاج مراجعة بسيطة، لكن الأمر غالباً غير مهم.»"],
            en: ["'I think the opinion might need a small review, but it's probably not a big deal.'"],
          },
          whatIsWrong: {
            ar: "تهوين الخطأ («غالباً غير مهم») يجعل الشريك يقلل من أولويته، رغم أنه يؤثر فعلياً على توصية قانونية.",
            en: "Downplaying the error ('probably not a big deal') makes the partner deprioritize it, even though it actually affects a legal recommendation.",
          },
        },
      },
      {
        id: "act.fo.08.4",
        kind: "reflection",
        skillId: "skill.output-quality-control",
        stage: 3,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "بعد المحاكاة: في أي لحظة شعرت أقرب للتهوين أو الصمت بدل قول الوقائع بوضوح؟",
          en: "After the simulation: at which moment did you feel closer to downplaying or staying silent, instead of stating the facts clearly?",
        },
        followUp: {
          ar: "ما الجملة الافتتاحية التي ستستخدمها في المرة القادمة التي تكتشف فيها خطأ حقيقياً؟",
          en: "What opening line will you use next time you find a real error?",
        },
      },
    ],
    summaryCard: {
      id: "card.fo.08",
      title: {
        ar: "الوقائع أولاً",
        en: "Facts First",
      },
      whatYouLearned: {
        ar: [
          "الصمت أمام خطأ حقيقي ليس حياداً؛ إنه قرار بترك الخطأ يصل للموكل.",
          "الاعتراض الجيد يصف الفرق بالأرقام أو التواريخ فقط، دون اتهام أو تهوين.",
          "توجّه مباشرة لمن يملك القرار، واقترح حلاً محدداً معك.",
        ],
        en: [
          "Silence in front of a real error isn't neutral; it's a decision to let the error reach the client.",
          "A good objection states the difference in numbers or dates only, with no blame and no downplaying.",
          "Go straight to whoever decides, and offer a specific fix alongside it.",
        ],
      },
      framework: {
        name: { ar: "تحقق · صف الواقعة · اقترح حلاً", en: "Verify · State the Fact · Offer a Fix" },
        steps: [
          { ar: "تحقق من المصدر الصحيح قبل الإبلاغ.", en: "Verify the correct source before reporting." },
          { ar: "صف الفرق بالأرقام أو التواريخ فقط.", en: "State the difference in numbers or dates only." },
          { ar: "اقترح تصحيحاً محدداً يمكن تنفيذه فوراً.", en: "Offer a specific fix that can happen right away." },
        ],
      },
      rememberThis: {
        ar: "خطأ لم يُقل بصوت مرتفع يصل للموكل بصمت.",
        en: "An error never said out loud reaches the client in silence.",
      },
      useItTomorrow: {
        ar: "أول خطأ حقيقي تجده غداً، أبلغ عنه بالوقائع فقط خلال ساعة.",
        en: "The first real error you find tomorrow, report it with facts only, within the hour.",
      },
    },
    targetLevel: 3,
    sourceIds: ["src.smarter-collaboration", "src.governance-raci", "src.68-power-moves"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 09 — A clean handover note before you go
  // =========================================================================
  {
    id: "unit.fo.09",
    chapterId: "ch.fo.closing-and-handover",
    order: 9,
    title: {
      ar: "مذكرة تسليم نظيفة قبل أن تغادر",
      en: "A Clean Handover Note Before You Go",
    },
    subtitle: {
      ar: "ما يحتاجه خليفتك ليس كل شيء تعرفه، بل ما لا يمكنه اكتشافه بنفسه بسرعة.",
      en: "What your successor needs isn't everything you know — it's what they can't quickly discover on their own.",
    },
    primarySkillId: "skill.matter-handover",
    skillIds: ["skill.matter-handover", "skill.file-organisation", "skill.knowledge-management"],
    stage: 4,
    estimatedMinutes: 9,
    steps: [
      {
        kind: "hook",
        id: "s.fo.09.hook",
        text: {
          ar: "تستعد لمى لإجازة أسبوعين، وتفتح ملف دار الفكر للنشر لتكتب مذكرة تسليم - وتجد نفسها لا تعرف من أين تبدأ.",
          en: "Lama is preparing for two weeks' leave, and opens the Dar Al-Fikr Publishing file to write a handover note — and finds she doesn't know where to start.",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.fo.09.why",
        text: {
          ar: "مذكرة تسليم ناقصة تجبر الزميل على إعادة اكتشاف ما تعرفه بالفعل، أو أسوأ - تفويت موعد لم يكن يعرف بوجوده. مذكرة مثقلة بالتفاصيل يغرق فيها دون أن يجد ما يحتاجه فعلاً.",
          en: "An incomplete handover note forces a colleague to rediscover what you already know — or worse, miss a deadline they never knew existed. An overloaded one buries them in detail with no way to find what they actually need.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.fo.09.goals",
        goals: {
          ar: [
            "أن تميّز بين ما يحتاجه خليفتك فعلياً وبين تفاصيل لن يستخدمها أبداً.",
            "أن تبني مذكرة تسليم من أربعة أقسام: السياق، المواعيد الحرجة، المخاطر المفتوحة، وجهات الاتصال.",
            "أن تكتب المذكرة بلغة تفهمها جهة لم تعمل على الملف من قبل إطلاقاً.",
          ],
          en: [
            "Tell what your successor genuinely needs apart from detail they'll never use.",
            "Build a handover note from four sections: context, critical dates, open risks, and contacts.",
            "Write the note in language someone who's never touched the file can actually follow.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.fo.09.lesson",
        title: {
          ar: "أربعة أقسام، لا سرد كل شيء",
          en: "Four Sections, Not a Retelling of Everything",
        },
        body: {
          ar: [
            "الدافع الطبيعي عند كتابة مذكرة تسليم هو سرد كل ما تعرفه عن الملف - وهذا بالضبط ما يجعلها عديمة الفائدة.",
            "خليفتك لا يحتاج تاريخ الملف الكامل؛ يحتاج ما لا يستطيع اكتشافه بسرعة من قراءة الملف نفسه.",
            "القسم الأول: السياق في جملتين - من الموكل، ما جوهر النزاع، وأين توقف العمل بالضبط.",
            "القسم الثاني: المواعيد الحرجة القادمة فقط - لا كل موعد سابق انتهى أثره.",
            "القسم الثالث: المخاطر المفتوحة - نقطة لم تُحسم بعد، أو وعد قُطع للموكل يجب الوفاء به.",
            "القسم الرابع: جهات الاتصال - الشخص المناسب للتواصل عند الموكل، وطريقته المفضلة، لا كل من راسلته يوماً.",
          ],
          en: [
            "The natural urge when writing a handover note is to retell everything you know about the file — and that's exactly what makes it useless.",
            "Your successor doesn't need the file's full history; they need what they can't quickly discover by reading the file itself.",
            "First section: context in two sentences — who the client is, the dispute's core, and exactly where work stopped.",
            "Second section: upcoming critical dates only — not every past deadline that's already spent.",
            "Third section: open risks — a point not yet resolved, or a promise made to the client that must be kept.",
            "Fourth section: contacts — the right person to reach at the client, and their preferred channel, not everyone ever emailed.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.fo.09.visual",
        title: {
          ar: "ما يبقى مقابل ما يُحذف",
          en: "What Stays vs. What Gets Cut",
        },
        variant: "comparison",
        items: [
          {
            label: { ar: "كل بريد تم تبادله", en: "Every email ever exchanged" },
            detail: {
              ar: "ضجيج يغرق فيه الخليفة بلا فائدة فعلية.",
              en: "Noise the successor drowns in, with no real use.",
            },
            tone: "negative",
          },
          {
            label: { ar: "انطباعات شخصية عن الموكل", en: "Personal impressions of the client" },
            detail: {
              ar: "قد تُضلّل خليفتك أكثر مما تفيده.",
              en: "May mislead your successor more than help them.",
            },
            tone: "negative",
          },
          {
            label: { ar: "المواعيد الحرجة والمخاطر المفتوحة", en: "Critical dates and open risks" },
            detail: {
              ar: "بالضبط ما لا يمكن اكتشافه بسرعة من قراءة الملف.",
              en: "Exactly what can't be quickly found by reading the file.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.fo.09.worked",
        strong: {
          label: {
            ar: "لمى تكتب مذكرة دقيقة لملف دار الفكر",
            en: "Lama writes a precise note for the Dar Al-Fikr file",
          },
          text: {
            ar: [
              "تكتب لمى: «موكل: دار الفكر للنشر، نزاع ترخيص علامة تجارية مع ناشر منافس. توقفنا عند انتظار رد الطرف الآخر على عرض تسوية مُرسل بتاريخ ٢٠ الجاري.»",
              "«موعد حرج: مهلة الرد على العرض تنتهي بعد عشرة أيام؛ إن لم يصل رد، الخطوة التالية إشعار رسمي جاهز في المجلد. خطر مفتوح: وعدنا الموكل بتحديث خلال أسبوع، وهو لم يُرسل بعد.»",
            ],
            en: [
              "Lama writes: 'Client: Dar Al-Fikr Publishing, a trademark-licensing dispute with a competing publisher. We left off awaiting the other side's reply to a settlement offer sent on the 20th.'",
              "'Critical date: the response deadline expires in ten days; if no reply arrives, the next step is a formal notice already drafted in the folder. Open risk: we promised the client an update within a week, and it hasn't gone out yet.'",
            ],
          },
          why: {
            ar: "غطت السياق والموعد الحرج والخطر المفتوح في أربعة أسطر فقط، فاستطاع أي زميل التقاط الملف فوراً دون قراءة كل مراسلاته السابقة.",
            en: "She covered context, the critical date, and the open risk in just four lines, letting any colleague pick up the file immediately without reading every past exchange.",
          },
        },
        weak: {
          label: {
            ar: "مذكرة تسرد كل شيء ولا تحدد شيئاً",
            en: "A note that retells everything and pins down nothing",
          },
          text: {
            ar: ["تكتب لمى صفحتين تسردان تاريخ الملف الكامل منذ الاجتماع الأول، دون أن تذكر أي موعد قادم أو خطر مفتوح بوضوح."],
            en: ["Lama writes two pages retelling the file's full history since the first meeting, without clearly naming any upcoming date or open risk."],
          },
          why: {
            ar: "الزميل يقرأ صفحتين ولا يعرف بعدها متى ينتهي أقرب موعد حرج - المعلومة الوحيدة التي كانت تستحق سطراً واحداً.",
            en: "The colleague reads two pages and still doesn't know when the nearest critical deadline falls — the one piece of information that deserved a single line.",
          },
        },
      },
      { kind: "activity", id: "s.fo.09.a1", activityId: "act.fo.09.1", mode: "quick" },
      { kind: "activity", id: "s.fo.09.a2", activityId: "act.fo.09.2", mode: "guided" },
      { kind: "activity", id: "s.fo.09.a3", activityId: "act.fo.09.3", mode: "guided" },
      { kind: "activity", id: "s.fo.09.a4", activityId: "act.fo.09.4", mode: "independent" },
      { kind: "activity", id: "s.fo.09.a5", activityId: "act.fo.09.5", mode: "independent" },
      { kind: "summary", id: "s.fo.09.summary", summaryCardId: "card.fo.09" },
      {
        kind: "apply_tomorrow",
        id: "s.fo.09.apply",
        task: {
          ar: "اكتب مذكرة تسليم من أربعة أسطر فقط لأي ملف نشط الآن، ولو لم تكن مسافراً.",
          en: "Write a four-line handover note for any active file right now, even if you're not about to travel.",
        },
        detail: {
          ar: "استخدم الأقسام الأربعة: السياق، المواعيد الحرجة، المخاطر المفتوحة، وجهات الاتصال.",
          en: "Use the four sections: context, critical dates, open risks, and contacts.",
        },
      },
      {
        kind: "next_mission",
        id: "s.fo.09.next",
        teaser: {
          ar: "كتبت المذكرة. الوحدة القادمة: المحادثة الفعلية التي تكمل ما لم تكتبه.",
          en: "You've written the note. Next: the live conversation that completes what you didn't write.",
        },
      },
    ],
    activities: [
      {
        id: "act.fo.09.1",
        kind: "multiple_choice",
        skillId: "skill.matter-handover",
        stage: 4,
        weight: 1,
        context: {
          ar: ["تكتب مذكرة تسليم لملف نزاع عمالي قبل إجازتك."],
          en: ["You're writing a handover note for an employment dispute file before your leave."],
        },
        prompt: {
          ar: "أي عنصر يستحق مكاناً في مذكرة التسليم؟",
          en: "Which item deserves a place in the handover note?",
        },
        options: [
          {
            id: "o1",
            label: {
              ar: "«جلسة الاستماع القادمة بعد اثني عشر يوماً، ولم يُقدَّم بعد رد المكتب على مذكرة الطرف الآخر.»",
              en: "'The next hearing is in twelve days, and the firm's reply to the other side's memo hasn't been filed yet.'",
            },
            correct: true,
            rationale: {
              ar: "بالضبط. موعد حرج قادم مرتبط بمهمة لم تُنجز بعد.",
              en: "Exactly. An upcoming critical date tied to a task not yet done.",
            },
          },
          {
            id: "o2",
            label: { ar: "نسخة كاملة من كل رسالة بريد إلكتروني تم تبادلها منذ فتح الملف.", en: "A full copy of every email exchanged since the file was opened." },
            rationale: {
              ar: "حجم هائل من الضجيج يغرق فيه من يحتاج معلومة واحدة سريعة.",
              en: "A huge volume of noise that drowns someone who needs one quick piece of information.",
            },
          },
          {
            id: "o3",
            label: { ar: "رأيك الشخصي في أن الموكل «صعب التعامل معه أحياناً».", en: "Your personal opinion that the client is 'difficult to deal with sometimes.'" },
            rationale: {
              ar: "انطباع شخصي غير موثّق قد يُشكّل تحيزاً لدى الخليفة دون سند فعلي.",
              en: "An undocumented personal impression may bias your successor with no real basis.",
            },
          },
          {
            id: "o4",
            label: { ar: "قائمة بكل الاجتماعات التي عُقدت منذ بداية الملف، بمواعيدها المنتهية.", en: "A list of every meeting held since the file opened, with their now-past dates." },
            rationale: {
              ar: "مواعيد انتهى أثرها لا تفيد من يحتاج معرفة ما القادم فقط.",
              en: "Dates whose effect has already expired don't help someone who needs to know only what's next.",
            },
          },
        ],
      },
      {
        id: "act.fo.09.2",
        kind: "categorization",
        skillId: "skill.matter-handover",
        stage: 4,
        weight: 2,
        prompt: {
          ar: "صنّف كل عنصر: هل يحتاجه الخليفة فعلياً، أم مجرد ضجيج يمكن حذفه؟",
          en: "Sort each item: does the successor actually need it, or is it noise to cut?",
        },
        hint: {
          ar: "اسأل: هل هذا شيء لا يمكن اكتشافه بسرعة من قراءة الملف نفسه؟",
          en: "Ask: is this something that can't be quickly discovered by reading the file itself?",
        },
        accessibleAlternative: {
          ar: "اختر التصنيف من أزرار «يحتاجه الخليفة» / «ضجيج» أسفل كل عنصر بدل السحب.",
          en: "Choose \"Successor needs it\" / \"Noise\" from buttons under each item instead of dragging.",
        },
        buckets: [
          { id: "needed", label: { ar: "يحتاجه الخليفة", en: "Successor needs it" } },
          { id: "noise", label: { ar: "ضجيج", en: "Noise" } },
        ],
        items: [
          {
            id: "c1",
            label: { ar: "موعد الجلسة القادمة وما لم يُنجز بعد قبلها.", en: "The next hearing date and what's still undone before it." },
            bucketId: "needed",
            rationale: {
              ar: "موعد حرج قادم يحتاج تحضيراً فورياً من الخليفة.",
              en: "An upcoming critical date needing immediate preparation from the successor.",
            },
          },
          {
            id: "c2",
            label: { ar: "نص كل رسالة تهنئة تبودلت مع الموكل في مناسبات سابقة.", en: "The full text of every congratulatory message exchanged with the client on past occasions." },
            bucketId: "noise",
            rationale: {
              ar: "لا يخدم أي قرار عملي في الملف، مجرد أرشيف اجتماعي.",
              en: "Serves no practical decision in the file — just social archive.",
            },
          },
          {
            id: "c3",
            label: { ar: "وعد قُطع للموكل بتحديث لم يُرسل بعد.", en: "A promise made to the client for an update not yet sent." },
            bucketId: "needed",
            rationale: {
              ar: "التزام غير منفَّذ قد يكسر الثقة إن أُهمل، فهو خطر مفتوح فعلي.",
              en: "An unfulfilled commitment could break trust if neglected — a genuine open risk.",
            },
          },
          {
            id: "c4",
            label: { ar: "رقم هاتف الموظف الذي أنهى خدمته، غير المرتبط بالملف الحالي.", en: "The phone number of an employee no longer with the firm, unrelated to the current file." },
            bucketId: "noise",
            rationale: {
              ar: "معلومة عن شخص لم يعد جزءاً من الملف لا فائدة عملية منها.",
              en: "Information about someone no longer part of the file has no practical use.",
            },
          },
          {
            id: "c5",
            label: { ar: "اسم الشخص المناسب للتواصل عند الموكل وطريقته المفضلة.", en: "The right person to contact at the client and their preferred channel." },
            bucketId: "needed",
            rationale: {
              ar: "يوفر على الخليفة وقتاً ثميناً في أول تواصل مع الموكل.",
              en: "Saves the successor precious time on the first contact with the client.",
            },
          },
          {
            id: "c6",
            label: { ar: "ملاحظات شخصية عن مزاج الموكل في اجتماعات سابقة.", en: "Personal notes on the client's mood in past meetings." },
            bucketId: "noise",
            rationale: {
              ar: "انطباع ذاتي قد يُشكّل توقعاً غير دقيق لدى الخليفة قبل أن يلتقي الموكل بنفسه.",
              en: "A subjective impression that may set an inaccurate expectation before the successor even meets the client.",
            },
          },
        ],
      },
      {
        id: "act.fo.09.3",
        kind: "priority_ranking",
        skillId: "skill.matter-handover",
        secondarySkillIds: ["skill.file-organisation"],
        stage: 4,
        weight: 2,
        prompt: {
          ar: "رتّب أقسام مذكرة التسليم بالترتيب الذي يجعلها أسرع استخداماً.",
          en: "Order the handover note's sections in the sequence that makes it fastest to use.",
        },
        hint: {
          ar: "ابدأ بما يعرّف الملف خلال ثوانٍ، وانتهِ بمن يمكن سؤاله عند الحاجة.",
          en: "Start with what identifies the file in seconds; end with who to ask when needed.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل قسم بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each section instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "السياق: الموكل، جوهر النزاع، وأين توقف العمل.", en: "Context: the client, the dispute's core, and where work stopped." },
            rationale: {
              ar: "يعرّف الملف خلال ثوانٍ لمن لم يره من قبل.",
              en: "Identifies the file in seconds for someone who's never seen it.",
            },
          },
          {
            id: "i2",
            label: { ar: "المواعيد الحرجة القادمة فقط.", en: "Upcoming critical dates only." },
            rationale: {
              ar: "أول ما يحتاج الخليفة معرفته بعد فهم السياق العام.",
              en: "The first thing the successor needs after understanding the general context.",
            },
          },
          {
            id: "i3",
            label: { ar: "المخاطر المفتوحة والوعود غير المنفَّذة بعد.", en: "Open risks and promises not yet fulfilled." },
            rationale: {
              ar: "يحتاج تفصيلاً أكثر من مجرد موعد، فيأتي بعده منطقياً.",
              en: "Needs more detail than a bare date, so it logically follows.",
            },
          },
          {
            id: "i4",
            label: { ar: "جهات الاتصال المناسبة وطريقة التواصل المفضلة.", en: "The right contacts and their preferred communication channel." },
            rationale: {
              ar: "آخر ما يُستخدم عملياً، حين يحتاج الخليفة التواصل فعلياً.",
              en: "The last thing used in practice, once the successor actually needs to reach out.",
            },
          },
        ],
      },
      {
        id: "act.fo.09.4",
        kind: "short_written",
        skillId: "skill.matter-handover",
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.firm-operations-written.v1",
        weight: 3,
        minChars: 110,
        context: {
          ar: ["تستعد للسفر أسبوعين، وتترك ملف نزاع تجاري وصل لمرحلة التفاوض على تسوية."],
          en: ["You're preparing to travel for two weeks, leaving a commercial dispute file that's reached settlement negotiations."],
        },
        prompt: {
          ar: "اكتب قسم «المواعيد الحرجة والمخاطر المفتوحة» من مذكرة التسليم (٤٠-٦٠ كلمة).",
          en: "Write the 'critical dates and open risks' section of the handover note (40-60 words).",
        },
        modelAnswer: {
          ar: [
            "«موعد حرج: مهلة قبول عرض التسوية تنتهي بعد ثمانية أيام. خطر مفتوح: الطرف الآخر طلب توضيحاً بشأن بند السرية، ولم نرسل رداً بعد؛ الموكل ينتظر تحديثاً بحلول نهاية الأسبوع.»",
          ],
          en: [
            "'Critical date: the deadline to accept the settlement offer expires in eight days. Open risk: the other side requested clarification on the confidentiality clause, and no reply has gone out yet; the client expects an update by week's end.'",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«الملف يسير بشكل جيد بشكل عام، لا شيء عاجل الآن.»"],
            en: ["'The file is generally going well, nothing urgent right now.'"],
          },
          whatIsWrong: {
            ar: "يخفي بالضبط ما يحتاج الخليفة معرفته: موعد قبول العرض ووعد بتحديث لم يُنفَّذ بعد.",
            en: "It hides exactly what the successor needs to know: the offer-acceptance deadline and an unfulfilled update promise.",
          },
        },
      },
      {
        id: "act.fo.09.5",
        kind: "reflection",
        skillId: "skill.matter-handover",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "استرجع مرة استلمت فيها ملفاً من زميل، ووجدت معلومة ناقصة كنت تحتاجها فوراً.",
          en: "Recall a time you took over a file from a colleague and found a missing piece of information you needed right away.",
        },
        followUp: {
          ar: "لو كتبت أنت تلك المذكرة، أي قسم من الأقسام الأربعة كان سيحتوي تلك المعلومة؟",
          en: "If you'd written that note, which of the four sections would have held that information?",
        },
      },
    ],
    summaryCard: {
      id: "card.fo.09",
      title: {
        ar: "أربعة أقسام تكفي",
        en: "Four Sections Are Enough",
      },
      whatYouLearned: {
        ar: [
          "خليفتك لا يحتاج تاريخ الملف الكامل، بل ما لا يستطيع اكتشافه بسرعة من قراءته وحده.",
          "أربعة أقسام تكفي: السياق، المواعيد الحرجة، المخاطر المفتوحة، وجهات الاتصال.",
          "مذكرة مثقلة بالتفاصيل تُخفي المعلومة الحرجة بقدر ما تُخفيها مذكرة ناقصة.",
        ],
        en: [
          "Your successor doesn't need the file's full history — just what they can't quickly discover on their own.",
          "Four sections are enough: context, critical dates, open risks, and contacts.",
          "An overloaded note hides the critical information almost as well as an incomplete one.",
        ],
      },
      framework: {
        name: { ar: "السياق · المواعيد · المخاطر · جهات الاتصال", en: "Context · Dates · Risks · Contacts" },
        steps: [
          { ar: "السياق في جملتين.", en: "Context in two sentences." },
          { ar: "المواعيد الحرجة القادمة فقط.", en: "Upcoming critical dates only." },
          { ar: "المخاطر المفتوحة والوعود غير المنفَّذة.", en: "Open risks and unfulfilled promises." },
          { ar: "جهة الاتصال المناسبة وطريقتها المفضلة.", en: "The right contact and their preferred channel." },
        ],
      },
      rememberThis: {
        ar: "المذكرة التي تحتاج ساعة لقراءتها لن تُقرأ في اللحظة التي يحتاجها الخليفة فعلاً.",
        en: "A note that takes an hour to read won't get read the moment your successor actually needs it.",
      },
      useItTomorrow: {
        ar: "اكتب مذكرة تسليم من أربعة أسطر فقط لأي ملف نشط الآن، ولو لم تكن مسافراً.",
        en: "Write a four-line handover note for any active file right now, even if you're not about to travel.",
      },
    },
    targetLevel: 4,
    sourceIds: ["src.governance-raci", "src.legal-project-management", "src.smarter-collaboration"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },

  // =========================================================================
  // UNIT 10 — The actual handover conversation (simulation)
  // =========================================================================
  {
    id: "unit.fo.10",
    chapterId: "ch.fo.closing-and-handover",
    order: 10,
    title: {
      ar: "محادثة التسليم الفعلية",
      en: "The Actual Handover Conversation",
    },
    subtitle: {
      ar: "المذكرة المكتوبة تنقل المعلومة؛ المحادثة الفعلية تضمن أنها وصلت فعلاً وفُهمت.",
      en: "The written note transfers information; the live conversation makes sure it actually landed and was understood.",
    },
    primarySkillId: "skill.matter-handover",
    skillIds: ["skill.matter-handover", "skill.knowledge-management"],
    stage: 4,
    estimatedMinutes: 12,
    steps: [
      {
        kind: "hook",
        id: "s.fo.10.hook",
        text: {
          ar: "كتبت لمى مذكرة تسليم دقيقة. الآن يجلس طارق الصباغ أمامها، وسؤاله الأول: «ماذا لو رفض الطرف الآخر العرض؟»",
          en: "Lama has written a precise handover note. Now Tarek Sabbagh sits across from her, and his first question is: 'What if the other side rejects the offer?'",
        },
      },
      {
        kind: "why_it_matters",
        id: "s.fo.10.why",
        text: {
          ar: "المذكرة تنقل الحقائق، لكن المحادثة تكشف ما لم يخطر ببالك كتابته - وتمنح خليفتك فرصة ليطرح السؤال الذي يمنع مفاجأة لاحقاً.",
          en: "The note transfers facts, but the conversation surfaces what never occurred to you to write down — and gives your successor the chance to ask the question that prevents a later surprise.",
        },
      },
      {
        kind: "learning_goal",
        id: "s.fo.10.goals",
        goals: {
          ar: [
            "أن تبدأ المحادثة بأولوية خليفتك، لا بترتيب أحداث الملف كما تتذكرها أنت.",
            "أن تجيب عن أسئلة خليفتك بوضوح، حتى حين يكشف السؤال أنك لم تكن مستعداً له.",
            "أن تُنهي المحادثة بتأكيد أن خليفتك يعرف بالضبط ما يحتاج فعله أولاً.",
          ],
          en: [
            "Open the conversation with your successor's priorities, not the file's events in the order you remember them.",
            "Answer your successor's questions clearly, even when a question reveals you weren't ready for it.",
            "Close the conversation confirming your successor knows exactly what to do first.",
          ],
        },
      },
      {
        kind: "micro_lesson",
        id: "s.fo.10.lesson",
        title: {
          ar: "من المذكرة إلى المحادثة",
          en: "From the Note to the Conversation",
        },
        body: {
          ar: [
            "المذكرة المكتوبة مهما كانت دقيقة، لا تعرف مسبقاً أي سؤال سيطرحه خليفتك تحديداً.",
            "ابدأ المحادثة بسؤال: «ما أهم شيء تريد معرفته أولاً؟» بدل سرد الملف من بدايته زمنياً.",
            "حين يسألك خليفتك سؤالاً لم تفكر فيه من قبل، هذا مؤشر جيد - وليس فشلاً في المذكرة.",
            "إن لم تعرف إجابة سؤاله، قل ذلك بوضوح، واقترح كيف سيجدها - لا تخترع جواباً لتبدو مستعدة بالكامل.",
            "تجنّب وعوداً مثل «لن تواجه أي مشكلة» أو التأكيد على نتيجة معينة للملف - مهمتك نقل الحقائق، لا ضمان المستقبل.",
            "أنهِ المحادثة بسؤال تأكيدي: «ما الخطوة الأولى التي ستقوم بها غداً؟» - إجابته تكشف إن كانت المعلومة وصلت فعلاً.",
          ],
          en: [
            "However precise, a written note can't anticipate exactly which question your successor will ask.",
            "Open the conversation with: 'What's the most important thing you want to know first?' instead of retelling the file in chronological order.",
            "When your successor asks something you'd never considered, that's a good sign — not a failure of the note.",
            "If you don't know the answer, say so clearly, and suggest how they'll find it — don't invent an answer just to look fully prepared.",
            "Avoid promises like 'you won't run into any problems' or vouching for a particular outcome — your job is transferring facts, not guaranteeing the future.",
            "Close with a confirming question: 'What's the first step you'll take tomorrow?' — their answer reveals whether the information actually landed.",
          ],
        },
      },
      {
        kind: "visual",
        id: "s.fo.10.visual",
        title: {
          ar: "ثلاث لحظات في محادثة التسليم",
          en: "Three Moments in the Handover Conversation",
        },
        variant: "steps",
        items: [
          {
            label: { ar: "افتح بأولويته", en: "Open with their priority" },
            detail: {
              ar: "«ما أهم شيء تريد معرفته أولاً؟» لا سرد زمني.",
              en: "'What matters most to know first?' Not a chronological retelling.",
            },
            tone: "neutral",
          },
          {
            label: { ar: "أجب بصدق حتى عند عدم المعرفة", en: "Answer honestly, even without an answer" },
            detail: {
              ar: "«لا أعرف، لكن إليك كيف تجد الجواب.»",
              en: "'I don't know, but here's how to find out.'",
            },
            tone: "neutral",
          },
          {
            label: { ar: "أغلق بسؤال تأكيدي", en: "Close with a confirming question" },
            detail: {
              ar: "«ما خطوتك الأولى غداً؟» يكشف إن وصلت المعلومة.",
              en: "'What's your first step tomorrow?' reveals whether it landed.",
            },
            tone: "positive",
          },
        ],
      },
      {
        kind: "worked_example",
        id: "s.fo.10.worked",
        strong: {
          label: {
            ar: "لمى وطارق: محادثة تكشف ما فاتته المذكرة",
            en: "Lama and Tarek: a conversation surfaces what the note missed",
          },
          text: {
            ar: [
              "يسأل طارق: «لو رفض الناشر المنافس عرض التسوية، ما الخطوة التالية بالضبط؟» فتجيب لمى: «الإشعار الرسمي جاهز في المجلد، لكن يحتاج مراجعة أخيرة من الأستاذ ناصر قبل إرساله - لم أذكر هذا في المذكرة.»",
              "تضيف: «أفضل خطوة أولى غداً: اتصل بمساعدة الأستاذ ناصر لحجز عشر دقائق معه قبل أي تحرك.» يعيد طارق الخطوة بكلماته للتأكد.",
            ],
            en: [
              "Tarek asks: 'If the competing publisher rejects the settlement offer, what's the exact next step?' Lama answers: 'The formal notice is ready in the folder, but it needs Nasser's final review before sending — I didn't put that in the note.'",
              "She adds: 'Best first move tomorrow: call Nasser's assistant to book ten minutes with him before anything else.' Tarek repeats the step back in his own words to confirm.",
            ],
          },
          why: {
            ar: "كشف سؤال طارق فجوة لم تكن في المذكرة، وأجابت لمى بصدق، وأغلقت بخطوة أولى واضحة تحقق منها طارق بنفسه.",
            en: "Tarek's question surfaced a gap the note missed, Lama answered honestly, and she closed with a clear first step that Tarek confirmed back.",
          },
        },
        weak: {
          label: {
            ar: "لمى تسرد الملف زمنياً دون ترك مجال للأسئلة",
            en: "Lama retells the file chronologically, leaving no room for questions",
          },
          text: {
            ar: ["تسرد لمى أحداث الملف منذ الاجتماع الأول حتى الآن دون توقف، وحين ينتهي الوقت المخصص، يقول طارق: «لم أفهم ماذا أفعل لو رفض الطرف الآخر.»"],
            en: ["Lama recounts the file's events from the first meeting to now without pausing, and when time runs out, Tarek says: 'I still don't know what to do if the other side rejects.'"],
          },
          why: {
            ar: "السرد الزمني الكامل استهلك الوقت المتاح، وترك أهم سؤال - ماذا لو رفض؟ - بلا إجابة على الإطلاق.",
            en: "The full chronological retelling used up the available time, leaving the most important question — what if they reject? — completely unanswered.",
          },
        },
      },
      { kind: "activity", id: "s.fo.10.a1", activityId: "act.fo.10.1", mode: "quick" },
      { kind: "activity", id: "s.fo.10.a2", activityId: "act.fo.10.2", mode: "guided" },
      { kind: "activity", id: "s.fo.10.a3", activityId: "act.fo.10.3", mode: "independent" },
      { kind: "simulation", id: "s.fo.10.sim", scenarioId: "scn.handing-over-your-matter" },
      { kind: "activity", id: "s.fo.10.a4", activityId: "act.fo.10.4", mode: "independent" },
      { kind: "summary", id: "s.fo.10.summary", summaryCardId: "card.fo.10" },
      {
        kind: "apply_tomorrow",
        id: "s.fo.10.apply",
        task: {
          ar: "في أول تسليم فعلي تقوم به، افتح بسؤال «ما أهم شيء تريد معرفته أولاً؟»",
          en: "At your next real handover, open with 'what's the most important thing you want to know first?'",
        },
        detail: {
          ar: "أغلق بسؤال تأكيدي عن خطوة زميلك الأولى غداً، لا بوعد عام بأن كل شيء سيكون على ما يرام.",
          en: "Close with a confirming question about your colleague's first step tomorrow, not a general promise that everything will be fine.",
        },
      },
      {
        kind: "next_mission",
        id: "s.fo.10.next",
        teaser: {
          ar: "أكملت المسار العملي لعمليات المكتب وإدارة الملفات. طبّق ما تعلمته في أول ملف حقيقي تسلّمه أو تستلمه.",
          en: "You've completed the firm and matter operations path. Apply what you've learned the next time you hand over, or take over, a real file.",
        },
      },
    ],
    activities: [
      {
        id: "act.fo.10.1",
        kind: "best_response",
        skillId: "skill.matter-handover",
        stage: 4,
        weight: 1,
        context: {
          ar: ["تجلس مع الزميل الذي سيتولى ملفك غداً، ولديك نصف ساعة فقط قبل اجتماع آخر."],
          en: ["You're sitting with the colleague taking over your file tomorrow, with only half an hour before another meeting."],
        },
        prompt: {
          ar: "كيف تبدأ المحادثة بأفضل شكل؟",
          en: "What's the best way to open the conversation?",
        },
        options: [
          {
            id: "o1",
            label: { ar: "«ما أهم شيء تريد معرفته أولاً قبل أن أفصّل الباقي؟»", en: "'What's the most important thing you want to know first, before I get into the rest?'" },
            correct: true,
            rationale: {
              ar: "يعطي الأولوية لما يحتاجه الزميل فعلاً ضمن وقت محدود.",
              en: "Prioritizes what the colleague actually needs within a limited time.",
            },
          },
          {
            id: "o2",
            label: { ar: "سرد كل اجتماع عُقد على الملف منذ فتحه بالترتيب الزمني.", en: "Recounting every meeting held on the file since it opened, in chronological order." },
            rationale: {
              ar: "يستهلك الوقت المحدود على تفاصيل قد لا تكون الأهم الآن.",
              en: "Burns the limited time on details that may not be the priority right now.",
            },
          },
          {
            id: "o3",
            label: { ar: "الانتظار حتى يطرح الزميل أي سؤال بنفسه دون توجيه.", en: "Waiting for the colleague to ask any question on their own, with no direction." },
            rationale: {
              ar: "يترك المحادثة بلا اتجاه، وقد يفوّت المعلومة الأهم إن لم يسأل عنها.",
              en: "Leaves the conversation with no direction, possibly missing the most important information if they don't think to ask.",
            },
          },
          {
            id: "o4",
            label: { ar: "الاكتفاء بإرسال المذكرة المكتوبة وإلغاء اللقاء لتوفير الوقت.", en: "Just sending the written note and cancelling the meeting to save time." },
            rationale: {
              ar: "يفقد فرصة الأسئلة المباشرة التي تكشف فجوات لم تُكتب.",
              en: "Loses the chance for direct questions that surface gaps the note never covered.",
            },
          },
        ],
      },
      {
        id: "act.fo.10.2",
        kind: "ordering",
        skillId: "skill.matter-handover",
        stage: 4,
        weight: 2,
        prompt: {
          ar: "رتّب أربع لحظات في محادثة التسليم بترتيبها الأنسب.",
          en: "Order four moments in the handover conversation in their best sequence.",
        },
        hint: {
          ar: "ابدأ بأولوية الزميل، وانتهِ بالتأكد أن المعلومة وصلت فعلاً.",
          en: "Start with the colleague's priority; end with confirming the information actually landed.",
        },
        accessibleAlternative: {
          ar: "اختر رقم الترتيب (١ إلى ٤) من قائمة منسدلة بجانب كل لحظة بدل السحب.",
          en: "Pick the position number (1 to 4) from a dropdown beside each moment instead of dragging.",
        },
        items: [
          {
            id: "i1",
            label: { ar: "اسأل: ما أهم شيء تريد معرفته أولاً؟", en: "Ask: what's the most important thing you want to know first?" },
            rationale: {
              ar: "يوجّه الوقت المحدود نحو ما يفيد الزميل فعلاً.",
              en: "Directs the limited time toward what actually helps the colleague.",
            },
          },
          {
            id: "i2",
            label: { ar: "أجب بوضوح، وإن لم تعرف الجواب، قل ذلك واقترح كيف يجده.", en: "Answer clearly, and if you don't know, say so and suggest how they'll find it." },
            rationale: {
              ar: "الصدق هنا أهم من الظهور بمظهر المستعد لكل شيء.",
              en: "Honesty here matters more than looking prepared for everything.",
            },
          },
          {
            id: "i3",
            label: { ar: "اذكر أي مخاطر أو وعود مفتوحة لم تُدرج في المذكرة المكتوبة.", en: "Mention any risks or open promises not included in the written note." },
            rationale: {
              ar: "المحادثة الفرصة الأخيرة لسد فجوات نسيتها المذكرة.",
              en: "The conversation is the last chance to close gaps the note forgot.",
            },
          },
          {
            id: "i4",
            label: { ar: "أغلق بسؤال: ما خطوتك الأولى غداً؟ للتأكد أن المعلومة وصلت.", en: "Close with: what's your first step tomorrow? to confirm the information landed." },
            rationale: {
              ar: "يكشف بوضوح إن كان الزميل فهم فعلاً أم لا يزال بحاجة توضيح.",
              en: "Clearly reveals whether the colleague actually understood or still needs clarification.",
            },
          },
        ],
      },
      {
        id: "act.fo.10.3",
        kind: "short_written",
        skillId: "skill.matter-handover",
        stage: 4,
        grading: "ai_rubric",
        rubricId: "rubric.firm-operations-written.v1",
        weight: 3,
        minChars: 90,
        context: {
          ar: ["تبدأ محادثة تسليم ملف نزاع عمالي معقد لزميل لم يطّلع عليه من قبل، ولديك عشر دقائق فقط."],
          en: ["You're opening a handover conversation for a complex employment dispute with a colleague who's never seen it, and you have only ten minutes."],
        },
        prompt: {
          ar: "اكتب الجملة الافتتاحية التي ستقولها فعلياً لتبدأ المحادثة بأفضل شكل (٢٠-٤٠ كلمة).",
          en: "Write the opening line you'd actually say to start the conversation well (20-40 words).",
        },
        modelAnswer: {
          ar: [
            "«لدينا عشر دقائق فقط، فلنبدأ بأهم شيء: ما السؤال الذي تريد إجابته أولاً قبل أن أنتقل لبقية التفاصيل؟»",
          ],
          en: [
            "'We only have ten minutes, so let's start with what matters most: what's the one question you want answered first, before I get into the rest?'",
          ],
        },
        weakAnswer: {
          text: {
            ar: ["«حسناً، دعني أبدأ من الاجتماع الأول مع الموكل قبل سنة تقريباً...»"],
            en: ["'Okay, let me start from the first meeting with the client about a year ago...'"],
          },
          whatIsWrong: {
            ar: "البدء الزمني الكامل يستهلك الدقائق العشر على تفاصيل قد لا تكون الأولوية، تاركاً السؤال الأهم بلا وقت للإجابة.",
            en: "Starting chronologically burns the ten minutes on details that may not be the priority, leaving the most important question no time to be answered.",
          },
        },
      },
      {
        id: "act.fo.10.4",
        kind: "reflection",
        skillId: "skill.matter-handover",
        stage: 4,
        grading: "self_report",
        weight: 1,
        prompt: {
          ar: "بعد المحاكاة: أي سؤال من زميلك كشف معلومة لم تكن في مذكرتك المكتوبة؟",
          en: "After the simulation: which question from your colleague revealed information not in your written note?",
        },
        followUp: {
          ar: "كيف ستُعدّل طريقتك في المرة القادمة لتتوقع هذا النوع من الأسئلة مسبقاً؟",
          en: "How will you adjust your approach next time to anticipate this kind of question in advance?",
        },
      },
    ],
    summaryCard: {
      id: "card.fo.10",
      title: {
        ar: "المحادثة تكمل المذكرة",
        en: "The Conversation Completes the Note",
      },
      whatYouLearned: {
        ar: [
          "المذكرة تنقل الحقائق؛ المحادثة تكشف ما لم يخطر ببالك كتابته.",
          "افتح بأولوية خليفتك، لا بسرد زمني كامل يستهلك الوقت المحدود.",
          "أغلق بسؤال تأكيدي يكشف إن كانت المعلومة وصلت فعلاً.",
        ],
        en: [
          "The note transfers facts; the conversation surfaces what never occurred to you to write down.",
          "Open with your successor's priority, not a full chronological retelling that eats limited time.",
          "Close with a confirming question that reveals whether the information actually landed.",
        ],
      },
      framework: {
        name: { ar: "افتح بالأولوية · أجب بصدق · أغلق بتأكيد", en: "Open with Priority · Answer Honestly · Close with Confirmation" },
        steps: [
          { ar: "اسأل عن أهم ما يريد معرفته أولاً.", en: "Ask what matters most to know first." },
          { ar: "أجب بوضوح، وإن جهلت الجواب فقل ذلك.", en: "Answer clearly, and say so if you don't know." },
          { ar: "أغلق بسؤال يؤكد أن المعلومة وصلت فعلاً.", en: "Close with a question confirming the information landed." },
        ],
      },
      rememberThis: {
        ar: "الملف الذي يُسلَّم بمحادثة واضحة، لا مذكرة وحدها، هو الذي لا يضيع فيه شيء.",
        en: "A file handed over with a clear conversation, not a note alone, is the one where nothing gets lost.",
      },
      useItTomorrow: {
        ar: "في أول تسليم فعلي تقوم به، افتح بسؤال «ما أهم شيء تريد معرفته أولاً؟»",
        en: "At your next real handover, open with 'what's the most important thing you want to know first?'",
      },
    },
    targetLevel: 4,
    sourceIds: ["src.governance-raci", "src.smarter-collaboration", "src.68-power-moves"],
    contentVersion: "1.0.0",
    reviewStatus: "ai_suggested",
  },
];
