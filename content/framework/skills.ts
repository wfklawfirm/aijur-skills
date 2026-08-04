import type { SkillDef } from "../types";

/**
 * The AIJUR competency framework: 42 skills across ten domains.
 *
 * Level semantics (see `MasteryLevel` in ../types):
 * 0 Not Assessed · 1 Awareness · 2 Foundation · 3 Applied · 4 Proficient ·
 * 5 Advanced · 6 Leader/Coach.
 *
 * Every behaviour below is written to be *observed*, not inferred. Sources are
 * cited for conceptual inspiration only; no wording is taken from them.
 */
export const SKILLS: SkillDef[] = [
  // -------------------------------------------------------------------------
  // dom.client-relations — Client Communication Foundations
  // -------------------------------------------------------------------------
  {
    id: "skill.meeting-preparation",
    domainId: "dom.client-relations",
    name: { ar: "الاستعداد للقاء الموكّل", en: "Preparing for the client meeting" },
    synonyms: [
      "pre-meeting preparation",
      "intake preparation",
      "case preparation before consultation",
      "التحضير للاستشارة",
    ],
    definition: {
      ar: "قراءة ما هو متاح قبل الاجتماع، وتحديد هدف واحد له، وتجهيز أسئلة ومستندات ووقت كافٍ حتى لا يُهدر لقاء الموكّل في جمع ما كان يمكن جمعه مسبقًا.",
      en: "Reading what is already available before the meeting, fixing one goal for it, and preparing questions, documents and enough time so the client's hour is not spent collecting what could have been collected earlier.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على طريقة استعداد المتدرّب للقاء الموكّل.",
          en: "No evidence has been collected yet on how the learner prepares for a client meeting.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يدرك أن اللقاء الأول يحتاج تحضيرًا، لكنه لا يزال يدخله معتمدًا على الارتجال.",
          en: "Recognises that a first meeting needs preparation, but still walks in relying on improvisation.",
        },
        observableBehaviors: [
          {
            ar: "يذكر اسم الموكّل ونوع النزاع قبل دخول الاجتماع دون الرجوع إلى الملف.",
            en: "States the client's name and the type of dispute before entering the meeting without checking the file.",
          },
          {
            ar: "يحضر ورقة وقلمًا أو ملفًا رقميًا لتدوين الوقائع بدل الاعتماد على الذاكرة.",
            en: "Brings paper or an open file to record facts instead of relying on memory.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفتح المستندات لأول مرة أمام الموكّل فيقرأها بصمت لدقائق.",
            en: "Opens the documents for the first time in front of the client and reads them in silence for minutes.",
          },
          {
            ar: "يحجز للاجتماع خمس عشرة دقيقة بين موعدين ثم يضطر لإنهائه فجأة.",
            en: "Books the meeting in a fifteen-minute gap between two appointments and then has to end it abruptly.",
          },
        ],
        successCriteria: [
          {
            ar: "يصل إلى الاجتماع في وقته ومعه أداة تدوين جاهزة.",
            en: "Arrives on time with a means of taking notes ready.",
          },
          {
            ar: "يعرف مسبقًا نوع المسألة التي سيسمعها ولو بصورة عامة.",
            en: "Knows in advance, at least in general terms, what kind of matter he is about to hear.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير ذاتي عن آخر لقاءين مع بيان ما جُهّز قبل كل منهما.",
            en: "A self-report on the last two meetings stating what was prepared before each.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يستعد وفق قائمة ثابتة إذا كانت المسألة بسيطة ومعروفة النوع.",
          en: "Prepares against a fixed checklist when the matter is simple and of a familiar type.",
        },
        observableBehaviors: [
          {
            ar: "يكتب قبل الاجتماع ثلاثة أسئلة على الأقل يريد الإجابة عنها.",
            en: "Writes at least three questions he wants answered before the meeting.",
          },
          {
            ar: "يطلب من الموكّل إحضار مستندات محدّدة بالاسم قبل موعد اللقاء.",
            en: "Asks the client in advance to bring specific documents named one by one.",
          },
          {
            ar: "يحجز للاجتماع مدّة تناسب نوعه ويسجّلها في التقويم.",
            en: "Blocks a length of time that fits the meeting type and records it in the calendar.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجهّز أسئلة عن القانون بدل أسئلة عن وقائع الموكّل.",
            en: "Prepares questions about the law instead of questions about the client's facts.",
          },
          {
            ar: "يطلب «كل المستندات» فيصل الموكّل بحقيبة أوراق غير مرتّبة.",
            en: "Asks for \"all the documents\" and the client arrives with an unsorted bag of paper.",
          },
        ],
        successCriteria: [
          {
            ar: "قائمة أسئلة مكتوبة موجودة قبل الاجتماع لا بعده.",
            en: "A written question list exists before the meeting, not after it.",
          },
          {
            ar: "وصل الموكّل ومعه المستندات المطلوبة في أغلب الحالات البسيطة.",
            en: "In most simple matters the client arrives with the documents that were requested.",
          },
        ],
        evidenceRequired: [
          {
            ar: "صورة عن قائمة التحضير المكتوبة لملف حقيقي قبل تاريخ الاجتماع.",
            en: "A copy of the written preparation list for a real matter, dated before the meeting.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يستعد لكل لقاء بهدف واحد معلن، ويكيّف التحضير مع نوع المسألة دون الحاجة إلى تذكير.",
          en: "Prepares every meeting around one stated goal and adapts the preparation to the type of matter without being reminded.",
        },
        observableBehaviors: [
          {
            ar: "يكتب في رأس ورقة التحضير جملة واحدة: ما الذي يجب أن يخرج به هذا الاجتماع.",
            en: "Writes one sentence at the top of the preparation sheet: what this meeting must produce.",
          },
          {
            ar: "يراجع أي مراسلة سابقة مع الموكّل ويشير إليها في اللقاء.",
            en: "Reviews any earlier correspondence with the client and refers to it during the meeting.",
          },
          {
            ar: "يحدّد مسبقًا المهلة القانونية أو التعاقدية الأقرب ويضعها على رأس جدول اللقاء.",
            en: "Identifies the nearest legal or contractual deadline in advance and puts it at the top of the agenda.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجهّز رأيًا قانونيًا مسبقًا فيدخل الاجتماع باحثًا عن تأكيده.",
            en: "Prepares a legal conclusion in advance and enters the meeting looking for confirmation of it.",
          },
          {
            ar: "يهمل سؤال الموكّل عن هدفه هو من اللقاء.",
            en: "Neglects to ask the client what he wants out of the meeting.",
          },
        ],
        successCriteria: [
          {
            ar: "هدف الاجتماع مكتوب قبله ويمكن الحكم عليه بعده بنعم أو لا.",
            en: "The meeting goal is written beforehand and can be judged afterwards as met or not met.",
          },
          {
            ar: "لم يُطلب من الموكّل معلومة كانت موجودة أصلًا في الملف.",
            en: "The client was not asked for information that was already in the file.",
          },
          {
            ar: "المهلة الأقرب معروفة قبل بدء اللقاء.",
            en: "The nearest deadline is known before the meeting starts.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ورقتا تحضير لملفين مختلفين تُظهران هدفًا واحدًا معلنًا لكل اجتماع.",
            en: "Two preparation sheets for two different matters, each showing one stated goal.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يستعد للقاءات صعبة أو متعدّدة الأطراف، ويتوقّع ما قد يقوله الطرف المقابل أو ما قد يخفيه الموكّل.",
          en: "Prepares for difficult or multi-party meetings and anticipates what the other side may say or what the client may be holding back.",
        },
        observableBehaviors: [
          {
            ar: "يكتب قبل الاجتماع سؤالين حسّاسين يتوقّع أن يتجنّبهما الموكّل ويخطّط لطرحهما.",
            en: "Writes two sensitive questions he expects the client to avoid and plans how to raise them.",
          },
          {
            ar: "يجهّز نسختين من الشرح: واحدة مختصرة وأخرى مفصّلة، ويختار حسب تفاعل الموكّل.",
            en: "Prepares two versions of the explanation, one short and one detailed, and chooses based on how the client responds.",
          },
          {
            ar: "يحدّد قبل اللقاء ما لا يستطيع الالتزام به حتى لا يُجرّ إلى وعد.",
            en: "Decides before the meeting what he cannot commit to, so he is not drawn into a promise.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرط في التحضير فيتحوّل اللقاء إلى استجواب بقائمة مغلقة.",
            en: "Over-prepares so the meeting becomes an interrogation from a closed list.",
          },
          {
            ar: "يجهّز للسيناريو المتوقّع وحده ويرتبك عند ظهور واقعة جديدة.",
            en: "Prepares only for the expected scenario and freezes when a new fact appears.",
          },
        ],
        successCriteria: [
          {
            ar: "طُرحت الأسئلة الحسّاسة فعلًا ولم تُؤجّل إلى لقاء لاحق.",
            en: "The sensitive questions were actually asked and not deferred to a later meeting.",
          },
          {
            ar: "خرج الاجتماع بالهدف المعلن رغم ظهور معطى غير متوقّع.",
            en: "The meeting reached its stated goal despite an unexpected fact emerging.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ورقة تحضير للقاء صعب مع ملاحظات لاحقة عمّا تغيّر أثناءه.",
            en: "A preparation sheet for a difficult meeting with notes added afterwards on what changed during it.",
          },
          {
            ar: "تقييم مشرف على أداء المتدرّب في اجتماع متعدّد الأطراف.",
            en: "A supervisor's assessment of the learner's performance in a multi-party meeting.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يصمّم طريقة تحضير قابلة للتكرار في نوع معيّن من الملفّات ويستخدمها زملاؤه.",
          en: "Designs a repeatable preparation method for a particular matter type and colleagues use it.",
        },
        observableBehaviors: [
          {
            ar: "يضع نموذج تحضير لنوع ملفّات محدّد ويجرّبه على ثلاثة ملفّات قبل تعميمه.",
            en: "Builds a preparation template for one matter type and tests it on three matters before circulating it.",
          },
          {
            ar: "يحضّر لقاءات مع موكّل مؤسسي فيها أكثر من متحدّث ويوزّع الأدوار مسبقًا.",
            en: "Prepares meetings with an institutional client that have several speakers and assigns roles in advance.",
          },
          {
            ar: "يقيس الوقت الضائع في اللقاءات قبل النموذج وبعده.",
            en: "Measures the time wasted in meetings before and after the template.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعمّم النموذج على أنواع ملفّات لا يناسبها فيصبح عبئًا شكليًا.",
            en: "Rolls the template out to matter types it does not fit, so it becomes paperwork.",
          },
          {
            ar: "يحتفظ بالنموذج لنفسه دون توثيقه في نظام المكتب.",
            en: "Keeps the template to himself instead of recording it in the firm's system.",
          },
        ],
        successCriteria: [
          {
            ar: "استخدم النموذجَ محامٍ آخر ووصل به إلى نتيجة مماثلة.",
            en: "Another lawyer used the template and reached a comparable result with it.",
          },
          {
            ar: "انخفض عدد الاجتماعات التي تحتاج إلى لقاء إضافي لجمع مستندات ناقصة.",
            en: "The number of meetings requiring a second session to collect missing documents fell.",
          },
        ],
        evidenceRequired: [
          {
            ar: "النموذج المعتمد داخل المكتب مع سجلّ استخدامه من غير واضعه.",
            en: "The template as adopted in the firm, with a record of use by someone other than its author.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يدرّب غيره على التحضير ويجعل جودته قابلة للقياس داخل المكتب.",
          en: "Coaches others in preparation and makes its quality measurable across the firm.",
        },
        observableBehaviors: [
          {
            ar: "يراجع أوراق تحضير المتدرّبين ويعيدها بملاحظتين محدّدتين قبل اللقاء لا بعده.",
            en: "Reviews trainees' preparation sheets and returns them with two specific comments before the meeting, not after.",
          },
          {
            ar: "يُدرج جودة التحضير ضمن معايير تقييم الأداء السنوي.",
            en: "Includes preparation quality in the annual performance review criteria.",
          },
          {
            ar: "يبني مكتبة أسئلة تحضير حسب نوع النزاع متاحة لكل الفريق.",
            en: "Builds a library of preparation questions by dispute type, available to the whole team.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض أسلوبه الشخصي بدل تعليم المبدأ فيقتل اجتهاد الآخرين.",
            en: "Imposes his personal style instead of teaching the principle, killing others' judgment.",
          },
          {
            ar: "يقيس عدد النماذج المعبّأة لا أثرها على اللقاءات.",
            en: "Measures how many templates were filled in rather than their effect on meetings.",
          },
        ],
        successCriteria: [
          {
            ar: "متدرّبان على الأقل انتقلا إلى المستوى الثالث خلال ستة أشهر.",
            en: "At least two trainees moved to level three within six months.",
          },
          {
            ar: "توجد قاعدة مكتوبة للتحضير معتمدة رسميًا ومراجَعة سنويًا.",
            en: "A written preparation standard exists, formally adopted and reviewed yearly.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ تدريب يوثّق المراجعات وملاحظاتها.",
            en: "A coaching log documenting the reviews and the comments given.",
          },
          {
            ar: "معيار مكتوب معتمد داخل المكتب لجودة التحضير.",
            en: "A written, firm-adopted standard for preparation quality.",
          },
        ],
      },
    ],
    sourceIds: [
      "src.managing-professional-service-firm",
      "src.fire-proof",
      "src.rainmaker",
      "src.be-the-ceo",
    ],
    confidence: 0.88,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.trust-building",
    domainId: "dom.client-relations",
    name: { ar: "بناء الثقة في الدقائق الأولى", en: "Building trust in the first minutes" },
    synonyms: [
      "rapport building",
      "first impression",
      "bedside manner",
      "psychological safety with clients",
      "كسر الجليد",
    ],
    definition: {
      ar: "إعطاء الموكّل في أول دقائق اللقاء سببًا ملموسًا للاطمئنان: حضور كامل، تعريف واضح بالدور، واحترام قلقه قبل مناقشة القانون.",
      en: "Giving the client, in the opening minutes, a concrete reason to relax: full attention, a clear statement of your role, and respect for his worry before any discussion of law.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على بناء الثقة في بداية اللقاء.",
          en: "No evidence has been collected yet on the learner's ability to build trust at the start of a meeting.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يعرف أن الانطباع الأول مهم، لكنه يبدأ اللقاء بالوقائع مباشرة.",
          en: "Knows the first impression matters, but opens straight into the facts.",
        },
        observableBehaviors: [
          {
            ar: "يحيّي الموكّل باسمه ويعرّف بنفسه وبمسمّاه الوظيفي.",
            en: "Greets the client by name and states his own name and role.",
          },
          {
            ar: "يجلس مقابل الموكّل ويترك الهاتف مقلوبًا على الطاولة.",
            en: "Sits facing the client and leaves the phone face down on the table.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبدأ بجملة «اشرح لي المشكلة» قبل أن يستقرّ الموكّل في مقعده.",
            en: "Opens with \"tell me the problem\" before the client has settled into the chair.",
          },
          {
            ar: "ينظر إلى الشاشة أثناء كلام الموكّل الأول.",
            en: "Looks at the screen while the client is speaking for the first time.",
          },
        ],
        successCriteria: [
          {
            ar: "عرف الموكّل اسم من يتحدّث إليه ودوره قبل نهاية الدقيقة الأولى.",
            en: "The client knows who he is speaking to and in what role before the first minute ends.",
          },
          {
            ar: "لم تُقاطَع بداية اللقاء بهاتف أو زائر.",
            en: "The opening of the meeting was not interrupted by a phone or a visitor.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ملاحظة مشرف على افتتاح لقاء واحد.",
            en: "A supervisor's observation of a single meeting opening.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يفتتح اللقاء بترتيب ثابت: ترحيب، تعريف بالدور، بيان مدّة اللقاء والسرّية.",
          en: "Opens with a fixed sequence: welcome, statement of role, length of the meeting and confidentiality.",
        },
        observableBehaviors: [
          {
            ar: "يقول للموكّل كم من الوقت خُصّص للقاء وماذا سيحدث فيه.",
            en: "Tells the client how much time is set aside and what will happen in it.",
          },
          {
            ar: "يذكر صراحة أن ما يُقال في الغرفة يبقى سرّيًا.",
            en: "States explicitly that what is said in the room stays confidential.",
          },
          {
            ar: "يترك الموكّل يكمل جملته الأولى دون مقاطعة.",
            en: "Lets the client finish his first sentence without interruption.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحوّل الافتتاح إلى خطاب طويل عن خبرة المكتب.",
            en: "Turns the opening into a long speech about the firm's experience.",
          },
          {
            ar: "يعد بالسرّية ثم يناقش الملف في ممرّ المكتب.",
            en: "Promises confidentiality and then discusses the matter in the office corridor.",
          },
        ],
        successCriteria: [
          {
            ar: "الموكّل يعرف مدّة اللقاء ومساره قبل بدء سرد الوقائع.",
            en: "The client knows the length and shape of the meeting before the facts begin.",
          },
          {
            ar: "لم يقاطع المحامي الموكّل خلال أول دقيقتين.",
            en: "The lawyer did not interrupt the client during the first two minutes.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل صوتي أو محضر لافتتاح لقاء يُظهر العناصر الأربعة.",
            en: "An audio recording or a transcript of an opening showing all four elements.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يبني الثقة عبر سلوك ملموس: يسمّي قلق الموكّل، ويلتزم بوعد صغير وينفّذه داخل اللقاء نفسه.",
          en: "Builds trust through concrete behaviour: names the client's worry and makes a small promise he keeps inside the meeting itself.",
        },
        observableBehaviors: [
          {
            ar: "يعيد صياغة قلق الموكّل بجملة واحدة ويطلب تأكيدها.",
            en: "Restates the client's worry in one sentence and asks him to confirm it.",
          },
          {
            ar: "يقطع وعدًا صغيرًا داخل اللقاء — كإرسال ملخّص اليوم نفسه — وينفّذه.",
            en: "Makes a small promise inside the meeting, such as sending a summary the same day, and keeps it.",
          },
          {
            ar: "يشرح حدود دوره: ما سيتولّاه بنفسه وما سيتولّاه غيره في المكتب.",
            en: "Explains the limits of his role: what he will handle himself and what a colleague will handle.",
          },
        ],
        commonMistakes: [
          {
            ar: "يطمئن الموكّل بعبارات عامة بدل الإجابة عن سؤاله.",
            en: "Reassures the client with generalities instead of answering his question.",
          },
          {
            ar: "يبالغ في القرب الشخصي فيفقد السجلّ المهني.",
            en: "Overplays personal closeness and loses the professional register.",
          },
        ],
        successCriteria: [
          {
            ar: "أكّد الموكّل أن صياغة قلقه صحيحة.",
            en: "The client confirmed that his worry had been stated correctly.",
          },
          {
            ar: "نُفّذ الوعد الصغير في موعده وسُجّل في الملف.",
            en: "The small promise was kept on time and recorded in the file.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة متابعة مؤرّخة تثبت تنفيذ الوعد الصغير.",
            en: "A dated follow-up message proving the small promise was kept.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يبني الثقة مع موكّل متشكّك أو سبق أن خذله محامٍ آخر، دون الدخول في نقد زميل المهنة.",
          en: "Builds trust with a sceptical client, or one another lawyer has let down, without criticising a fellow professional.",
        },
        observableBehaviors: [
          {
            ar: "يسأل الموكّل عمّا لم يعجبه في تجربته السابقة ويستخدم الجواب في ترتيب التواصل.",
            en: "Asks what the client disliked in his earlier experience and uses the answer to shape how they will communicate.",
          },
          {
            ar: "يذكر نقطة ضعف واحدة في الملف مبكرًا بدل تأجيلها.",
            en: "Names one weakness in the matter early rather than deferring it.",
          },
          {
            ar: "يضع مع الموكّل قاعدة تواصل مكتوبة: من يتصل، متى، وبأي وسيلة.",
            en: "Agrees a written communication rule with the client: who contacts whom, when, and by what channel.",
          },
        ],
        commonMistakes: [
          {
            ar: "ينتقد المحامي السابق فيبدو غير مهني ويزرع شكًّا مضادًّا.",
            en: "Criticises the previous lawyer, appears unprofessional and seeds a fresh doubt.",
          },
          {
            ar: "يعد بتواصل يومي لا يستطيع الالتزام به.",
            en: "Promises daily contact he cannot sustain.",
          },
        ],
        successCriteria: [
          {
            ar: "قبِل الموكّل المتشكّك خطة عمل مكتوبة في نهاية اللقاء.",
            en: "The sceptical client accepted a written plan of work by the end of the meeting.",
          },
          {
            ar: "ذُكرت نقطة ضعف واحدة على الأقل ولم يعترض الموكّل على أسلوب طرحها.",
            en: "At least one weakness was raised and the client did not object to how it was raised.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قاعدة التواصل المكتوبة الموقّعة أو المؤكّدة بالبريد.",
            en: "The written communication rule, signed or confirmed by email.",
          },
          {
            ar: "تقييم مشرف للقاء مع موكّل متشكّك.",
            en: "A supervisor's assessment of a meeting with a sceptical client.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يصمّم تجربة الاستقبال في المكتب بحيث تنتج الثقة قبل أن يجلس الموكّل مع المحامي.",
          en: "Designs the firm's reception experience so trust is produced before the client sits down with a lawyer.",
        },
        observableBehaviors: [
          {
            ar: "يحدّد معيارًا لزمن الردّ على أول اتصال ويجعله مرئيًا للفريق.",
            en: "Sets a standard for response time to a first enquiry and makes it visible to the team.",
          },
          {
            ar: "يكتب نصّ الترحيب الذي يستخدمه موظّف الاستقبال ويدرّبه عليه.",
            en: "Writes the welcome script the receptionist uses and trains them on it.",
          },
          {
            ar: "يجمع بعد شهر ملاحظات من موكّلين جدد عن أول تعامل مع المكتب.",
            en: "Collects feedback after a month from new clients about their first contact with the firm.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجعل الترحيب نصًّا محفوظًا يُلقى بلا انتباه للشخص أمامه.",
            en: "Turns the welcome into a memorised script delivered without attention to the person in front of it.",
          },
          {
            ar: "يقيس رضا الموكّل بالنتيجة القضائية وحدها.",
            en: "Measures client satisfaction by the court outcome alone.",
          },
        ],
        successCriteria: [
          {
            ar: "زمن الردّ على أول اتصال مُقاس ومطابق للمعيار في أغلب الحالات.",
            en: "First-contact response time is measured and meets the standard in most cases.",
          },
          {
            ar: "ملاحظات الموكّلين الجدد عن أول تعامل موثّقة ومستخدمة في تعديل الإجراء.",
            en: "New clients' feedback on first contact is documented and used to change the procedure.",
          },
        ],
        evidenceRequired: [
          {
            ar: "المعيار المكتوب لزمن الردّ مع بيانات ثلاثة أشهر.",
            en: "The written response-time standard together with three months of data.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل الثقة معيارًا مؤسسيًا يُدرَّب عليه ويُقاس ويُراجع، لا صفة شخصية في محامٍ ناجح.",
          en: "Makes trust an institutional standard that is trained, measured and reviewed, rather than a personal trait of one successful lawyer.",
        },
        observableBehaviors: [
          {
            ar: "يشرف على تدريب المحامين الجدد على افتتاح اللقاء ويقيّمه بمشهد محاكاة.",
            en: "Supervises new lawyers' training on opening a meeting and assesses it with a simulated scene.",
          },
          {
            ar: "يراجع سنويًا شكاوى الموكّلين ويصنّفها بحسب لحظة فقدان الثقة.",
            en: "Reviews client complaints yearly and classifies them by the moment trust was lost.",
          },
          {
            ar: "يعالج علنًا حالة أخفق فيها المكتب في الوفاء بوعد للموكّل.",
            en: "Addresses openly a case where the firm failed to keep a promise to a client.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعاقب من يبلّغ عن إخفاق بدل معالجة سببه.",
            en: "Punishes whoever reports a failure instead of addressing its cause.",
          },
          {
            ar: "يكتفي بورشة سنوية دون متابعة السلوك اليومي.",
            en: "Settles for an annual workshop without following day-to-day behaviour.",
          },
        ],
        successCriteria: [
          {
            ar: "انخفضت شكاوى «لم يشرح لي أحد» خلال سنة.",
            en: "Complaints of the \"nobody explained anything to me\" type fell over a year.",
          },
          {
            ar: "كل محامٍ جديد يجتاز تقييم افتتاح لقاء قبل مقابلة موكّل بمفرده.",
            en: "Every new lawyer passes a meeting-opening assessment before meeting a client alone.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ التقييمات وشهادات الاجتياز للمحامين الجدد.",
            en: "The assessment log and pass records for new lawyers.",
          },
          {
            ar: "تقرير سنوي عن شكاوى الموكّلين وتصنيفها.",
            en: "An annual report on client complaints and their classification.",
          },
        ],
      },
    ],
    sourceIds: [
      "src.managing-professional-service-firm",
      "src.68-power-moves",
      "src.ali-rise",
      "src.small-firm-roadmap",
      "src.lawyers-ceo",
    ],
    confidence: 0.93,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.meeting-preparation"],
  },
  {
    id: "skill.active-listening",
    domainId: "dom.client-relations",
    name: { ar: "الإصغاء الفاعل", en: "Active listening" },
    synonyms: [
      "listening to clients",
      "deep listening",
      "listening without pre-diagnosing",
      "الاستماع الجيد",
    ],
    definition: {
      ar: "ترك الموكّل يكمل روايته دون مقاطعة أو تشخيص مبكر، ثم إثبات الفهم بإعادة صياغة يقرّها الموكّل قبل الانتقال إلى الرأي.",
      en: "Letting the client finish his account without interruption or early diagnosis, then proving comprehension by a summary the client confirms before any opinion is offered.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على أسلوب المتدرّب في الإصغاء.",
          en: "No evidence has been collected yet on how the learner listens.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يعرف أن المقاطعة تضرّ، لكنه يقاطع فعليًا حين يظنّ أنه فهم المسألة.",
          en: "Knows interrupting is harmful, yet interrupts as soon as he believes he has grasped the matter.",
        },
        observableBehaviors: [
          {
            ar: "ينظر إلى الموكّل أثناء حديثه أكثر ممّا ينظر إلى أوراقه.",
            en: "Looks at the client more than at his papers while the client speaks.",
          },
          {
            ar: "يدوّن ملاحظات بدل الاعتماد على الذاكرة.",
            en: "Takes notes instead of relying on memory.",
          },
        ],
        commonMistakes: [
          {
            ar: "يكمل جملة الموكّل نيابة عنه.",
            en: "Finishes the client's sentence for him.",
          },
          {
            ar: "يبدأ بالتصنيف القانوني بعد ثلاثين ثانية من السرد.",
            en: "Starts assigning a legal label thirty seconds into the account.",
          },
        ],
        successCriteria: [
          {
            ar: "توجد ملاحظات مكتوبة من اللقاء.",
            en: "Written notes from the meeting exist.",
          },
          {
            ar: "لم يستخدم الهاتف أثناء كلام الموكّل.",
            en: "Did not use the phone while the client was speaking.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ملاحظات اللقاء بخطّ المتدرّب أو بصيغة رقمية.",
            en: "The learner's meeting notes, handwritten or digital.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يترك الموكّل يروي القصّة كاملة مرّة واحدة قبل أي سؤال تفصيلي.",
          en: "Lets the client tell the story through once before any detailed question.",
        },
        observableBehaviors: [
          {
            ar: "يصمت بعد انتهاء الموكّل ثانيتين قبل أن يتكلّم.",
            en: "Stays silent for two seconds after the client stops before speaking.",
          },
          {
            ar: "يكتب الأسئلة التي تخطر له بدل طرحها فورًا.",
            en: "Writes down the questions that occur to him instead of asking them immediately.",
          },
          {
            ar: "يستخدم إشارات قصيرة تدلّ على المتابعة دون قطع السرد.",
            en: "Uses short signals that show he is following without cutting the account.",
          },
        ],
        commonMistakes: [
          {
            ar: "يسأل عن تاريخ أو رقم في منتصف رواية عاطفية فيوقف التدفّق.",
            en: "Asks for a date or a number in the middle of an emotional account and stops the flow.",
          },
          {
            ar: "يدوّن كل كلمة فيفقد الاتصال البصري تمامًا.",
            en: "Writes down every word and loses eye contact completely.",
          },
        ],
        successCriteria: [
          {
            ar: "أنهى الموكّل روايته الأولى دون مقاطعة موضوعية.",
            en: "The client completed his first account without a substantive interruption.",
          },
          {
            ar: "الأسئلة المؤجّلة مكتوبة وطُرحت بعد انتهاء السرد.",
            en: "The deferred questions are written down and were asked after the account ended.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل أو محضر يُظهر مدّة سرد الموكّل الأولى دون مقاطعة.",
            en: "A recording or transcript showing the length of the client's first uninterrupted account.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يثبت الفهم بإعادة صياغة موجزة يقرّها الموكّل، ويفصل بين ما قيل وما استنتجه هو.",
          en: "Proves comprehension with a brief restatement the client confirms, and separates what was said from what he inferred.",
        },
        observableBehaviors: [
          {
            ar: "يلخّص في ثلاث جمل ثم يسأل: هل هذا صحيح؟ ماذا نقص؟",
            en: "Summarises in three sentences then asks: is that right, and what is missing?",
          },
          {
            ar: "يميّز في ملاحظاته بين واقعة ذكرها الموكّل وافتراض من عنده.",
            en: "Marks in his notes the difference between a fact the client stated and an assumption of his own.",
          },
          {
            ar: "يسمّي الشعور الظاهر على الموكّل بجملة واحدة قبل العودة إلى الوقائع.",
            en: "Names the emotion visible in the client in one sentence before returning to the facts.",
          },
        ],
        commonMistakes: [
          {
            ar: "يلخّص بلغة قانونية فلا يتعرّف الموكّل على قصّته.",
            en: "Summarises in legal language so the client does not recognise his own story.",
          },
          {
            ar: "يسأل «هل هذا صحيح؟» ثم يكمل قبل أن يجيب الموكّل.",
            en: "Asks \"is that right?\" and carries on before the client answers.",
          },
        ],
        successCriteria: [
          {
            ar: "صحّح الموكّل أو أكّد الملخّص صراحة.",
            en: "The client expressly corrected or confirmed the summary.",
          },
          {
            ar: "خلت الملاحظات من خلط بين الواقعة والافتراض.",
            en: "The notes contain no mixing of fact with assumption.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ملخّص وقائع مكتوب أُرسل إلى الموكّل ووافق عليه.",
            en: "A written statement of facts sent to the client and approved by him.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يصغي في وضع صعب: موكّل غاضب، أو رواية متناقضة، أو معلومة يخفيها الموكّل عمدًا.",
          en: "Listens in hard conditions: an angry client, an inconsistent account, or information the client is deliberately withholding.",
        },
        observableBehaviors: [
          {
            ar: "يشير إلى التناقض بلغة محايدة ويطلب توضيحًا دون اتّهام.",
            en: "Points out the inconsistency in neutral language and asks for clarification without accusation.",
          },
          {
            ar: "يخفض إيقاع كلامه حين يرتفع صوت الموكّل بدل مجاراته.",
            en: "Slows his own speech when the client's voice rises instead of matching it.",
          },
          {
            ar: "يلاحظ ما لم يُقل ويسأل عنه صراحة قبل نهاية اللقاء.",
            en: "Notices what was not said and asks about it explicitly before the meeting ends.",
          },
        ],
        commonMistakes: [
          {
            ar: "يدافع عن نفسه أو عن المكتب فينتقل اللقاء إلى مواجهة.",
            en: "Defends himself or the firm and turns the meeting into a confrontation.",
          },
          {
            ar: "يفسّر صمت الموكّل موافقةً.",
            en: "Reads the client's silence as agreement.",
          },
        ],
        successCriteria: [
          {
            ar: "هبط منسوب التوتّر خلال اللقاء وواصل الموكّل الكلام.",
            en: "Tension fell during the meeting and the client kept talking.",
          },
          {
            ar: "ظهرت معلومة جوهرية جديدة نتيجة السؤال عمّا لم يُقل.",
            en: "A material new fact emerged because of the question about what was left unsaid.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة مقيّمة لموكّل غاضب مع تقييم بحسب معيار التواصل الصعب.",
            en: "An assessed simulation with an angry client, scored against the difficult-conversation rubric.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يحوّل الإصغاء من مهارة فردية إلى مصدر معلومات منظّم يستفيد منه المكتب.",
          en: "Turns listening from a personal skill into an organised source of information the firm uses.",
        },
        observableBehaviors: [
          {
            ar: "يجري مقابلات دورية مع موكّلين حاليين عن تجربتهم لا عن ملفّاتهم.",
            en: "Runs periodic conversations with existing clients about their experience, not their files.",
          },
          {
            ar: "يوثّق ما يتكرّر في شكاوى الموكّلين ويعرضه على الشركاء.",
            en: "Documents what recurs in client complaints and puts it in front of the partners.",
          },
          {
            ar: "يدرّب زملاءه على تقنية الصمت والتلخيص في اجتماع تدريبي.",
            en: "Trains colleagues in the pause-and-summarise technique in a coaching session.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجمع ملاحظات الموكّلين ولا يترتّب عليها تغيير فتفقد قيمتها.",
            en: "Collects client feedback that leads to no change, so it loses its value.",
          },
          {
            ar: "يسأل فقط الموكّلين الراضين.",
            en: "Only asks satisfied clients.",
          },
        ],
        successCriteria: [
          {
            ar: "تغيّر إجراء واحد في المكتب نتيجة ما سُمع من الموكّلين.",
            en: "One firm procedure changed as a result of what clients said.",
          },
          {
            ar: "المقابلات الدورية موثّقة ومجدولة لا عشوائية.",
            en: "The periodic conversations are documented and scheduled, not ad hoc.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير مجمّع لملاحظات الموكّلين مع قرار مترتّب عليه.",
            en: "A consolidated client-feedback report together with the decision taken on it.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يبني ثقافة إصغاء في المكتب ويقيسها، ويعالج الأسباب البنيوية التي تدفع المحامين إلى المقاطعة.",
          en: "Builds and measures a listening culture, and tackles the structural causes that push lawyers to interrupt.",
        },
        observableBehaviors: [
          {
            ar: "يعدّل مدد الاجتماعات ومعدّلات التحميل حين يثبت أن ضيق الوقت سبب المقاطعة.",
            en: "Adjusts meeting lengths and workload targets when time pressure is shown to cause interruption.",
          },
          {
            ar: "يجعل ملخّص الوقائع المعتمد من الموكّل شرطًا لفتح الملف.",
            en: "Makes a client-approved statement of facts a condition for opening the matter.",
          },
          {
            ar: "يقيّم المحامين على جودة الملخّصات لا على سرعة إنهاء اللقاء.",
            en: "Assesses lawyers on the quality of their summaries rather than the speed of ending a meeting.",
          },
        ],
        commonMistakes: [
          {
            ar: "يطالب بإصغاء أطول مع إبقاء أهداف ساعات يستحيل معها ذلك.",
            en: "Demands longer listening while keeping hour targets that make it impossible.",
          },
          {
            ar: "يحوّل ملخّص الوقائع إلى نموذج يُعبّأ آليًا.",
            en: "Lets the statement of facts degrade into a form filled in mechanically.",
          },
        ],
        successCriteria: [
          {
            ar: "لا يُفتح ملف بلا ملخّص وقائع معتمد من الموكّل.",
            en: "No matter is opened without a client-approved statement of facts.",
          },
          {
            ar: "انخفضت حالات اكتشاف واقعة جوهرية متأخّرة خلال سنة.",
            en: "Cases of a material fact surfacing late fell over a year.",
          },
        ],
        evidenceRequired: [
          {
            ar: "الإجراء المعتمد لفتح الملف مع عيّنة تدقيق.",
            en: "The adopted matter-opening procedure with an audit sample.",
          },
          {
            ar: "بيانات سنة عن حالات الوقائع المتأخّرة.",
            en: "A year of data on late-surfacing facts.",
          },
        ],
      },
    ],
    sourceIds: [
      "src.managing-professional-service-firm",
      "src.68-power-moves",
      "src.your-brain-at-work",
      "src.ali-rise",
      "src.how-to-argue-and-win",
    ],
    confidence: 0.95,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.trust-building"],
  },
  {
    id: "skill.questioning",
    domainId: "dom.client-relations",
    name: { ar: "طرح الأسئلة الجيّدة", en: "Asking better questions" },
    synonyms: [
      "fact gathering",
      "client interviewing",
      "funnel questioning",
      "open questions",
      "استجلاء الوقائع",
    ],
    definition: {
      ar: "الانتقال المنظّم من السؤال المفتوح إلى التضييق ثم التأكيد، بحيث تُستخرج الوقائع الجوهرية دون توجيه إجابة الموكّل.",
      en: "Moving deliberately from open question to narrowing to confirmation, so the material facts come out without steering the client's answer.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على أسلوب المتدرّب في طرح الأسئلة.",
          en: "No evidence has been collected yet on how the learner questions a client.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يسأل بلا ترتيب، وأغلب أسئلته مغلقة أو موجِّهة.",
          en: "Asks without a plan; most questions are closed or leading.",
        },
        observableBehaviors: [
          {
            ar: "يسأل عن الوقائع الأساسية: من، ماذا، متى.",
            en: "Asks the basic facts: who, what, when.",
          },
          {
            ar: "يعيد السؤال حين لا يفهم الجواب.",
            en: "Repeats the question when he does not understand the answer.",
          },
        ],
        commonMistakes: [
          {
            ar: "يسأل «هل وقّعت العقد مكرهًا؟» فيلقّن الموكّل جوابه.",
            en: "Asks \"were you forced to sign the contract?\" and feeds the client his answer.",
          },
          {
            ar: "يجمع الأسئلة الثلاثة في نفس مرّة فيجيب الموكّل عن واحد.",
            en: "Bundles three questions into one breath and the client answers only one.",
          },
        ],
        successCriteria: [
          {
            ar: "الوقائع الأساسية للمسألة مسجّلة بعد اللقاء.",
            en: "The basic facts of the matter are recorded after the meeting.",
          },
          {
            ar: "يعرف الفرق بين السؤال المفتوح والمغلق حين يُطلب منه تمييزه.",
            en: "Can tell an open question from a closed one when asked to.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة الأسئلة المستخدمة في لقاء واحد.",
            en: "The list of questions used in a single meeting.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يبدأ بسؤال مفتوح واحد على الأقل قبل أي سؤال مغلق، في المسائل البسيطة.",
          en: "Opens with at least one open question before any closed one, in simple matters.",
        },
        observableBehaviors: [
          {
            ar: "يفتتح بسؤال من نوع «احكِ لي ماذا حصل من البداية».",
            en: "Opens with a question of the \"take me through what happened from the start\" type.",
          },
          {
            ar: "يطرح سؤالًا واحدًا في كل مرّة وينتظر الجواب.",
            en: "Asks one question at a time and waits for the answer.",
          },
          {
            ar: "يستخدم أسئلة زمنية لترتيب الوقائع على خطّ تاريخي.",
            en: "Uses time questions to lay the facts on a timeline.",
          },
        ],
        commonMistakes: [
          {
            ar: "يسأل «لماذا» مبكرًا فيدفع الموكّل إلى الدفاع عن نفسه.",
            en: "Asks \"why\" too early and pushes the client into self-defence.",
          },
          {
            ar: "يتوقّف عند أول جواب مُرضٍ دون التحقّق منه.",
            en: "Stops at the first satisfying answer without testing it.",
          },
        ],
        successCriteria: [
          {
            ar: "خطّ زمني للوقائع موجود في الملف بعد اللقاء الأول.",
            en: "A timeline of facts is in the file after the first meeting.",
          },
          {
            ar: "لا يوجد في محضر اللقاء سؤال يتضمّن جوابه.",
            en: "The meeting record contains no question that carries its own answer.",
          },
        ],
        evidenceRequired: [
          {
            ar: "خطّ زمني مكتوب مستخرج من لقاء حقيقي.",
            en: "A written timeline produced from a real meeting.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يدير التسلسل الكامل: مفتوح ثم تضييق ثم تأكيد، ويعرف متى ينتقل بين المراحل.",
          en: "Runs the full sequence — open, narrow, confirm — and knows when to move between stages.",
        },
        observableBehaviors: [
          {
            ar: "ينتقل إلى التضييق بعد أن يستنفد السرد المفتوح لا قبله.",
            en: "Moves to narrowing only after the open account is exhausted.",
          },
          {
            ar: "يختم كل موضوع بسؤال تأكيد: «إذًا الاتفاق كان شفهيًا، صحيح؟»",
            en: "Closes each topic with a confirming question: \"so the agreement was oral, correct?\"",
          },
          {
            ar: "يسأل عن المستندات المؤيّدة لكل واقعة جوهرية.",
            en: "Asks what document supports each material fact.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم سؤال التأكيد لفرض روايته هو.",
            en: "Uses the confirming question to impose his own version.",
          },
          {
            ar: "يهمل سؤال الموكّل عمّا يريده هو من النتيجة.",
            en: "Omits asking the client what outcome he actually wants.",
          },
        ],
        successCriteria: [
          {
            ar: "كل واقعة جوهرية في الملخّص مقرونة بمصدرها أو بمستند.",
            en: "Every material fact in the summary is paired with its source or a document.",
          },
          {
            ar: "هدف الموكّل من التوكيل مكتوب بكلماته هو.",
            en: "The client's own goal is recorded in his own words.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ملخّص وقائع يربط كل واقعة بمصدرها.",
            en: "A statement of facts linking each fact to its source.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يستخرج وقائع حسّاسة أو محرجة دون أن يفقد تعاون الموكّل.",
          en: "Draws out sensitive or embarrassing facts without losing the client's cooperation.",
        },
        observableBehaviors: [
          {
            ar: "يمهّد للسؤال الحسّاس بجملة تفسّر سببه القانوني.",
            en: "Prefaces a sensitive question with one sentence explaining its legal reason.",
          },
          {
            ar: "يسأل عن الرواية المضادّة: «ماذا سيقول الطرف الآخر؟».",
            en: "Asks for the counter-account: \"what will the other side say?\"",
          },
          {
            ar: "يعيد طرح السؤال بصيغة مختلفة حين يتهرّب الموكّل، مرّة واحدة، ثم يسجّل التهرّب.",
            en: "Rephrases the question once when the client evades, then records the evasion.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتجنّب السؤال المحرج فتظهر الواقعة أمام المحكمة.",
            en: "Avoids the awkward question and the fact surfaces in front of the court.",
          },
          {
            ar: "يلحّ على السؤال حتى يشعر الموكّل بأنه متّهم.",
            en: "Presses so hard the client feels accused.",
          },
        ],
        successCriteria: [
          {
            ar: "الرواية المضادّة موثّقة في الملف قبل أي مراسلة مع الخصم.",
            en: "The counter-account is documented in the file before any correspondence with the opponent.",
          },
          {
            ar: "لم ينسحب الموكّل ولم يمتنع عن الإجابة نهائيًا.",
            en: "The client did not withdraw or refuse to answer altogether.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة مقيّمة لمقابلة موكّل يخفي واقعة.",
            en: "An assessed simulation of interviewing a client who is withholding a fact.",
          },
          {
            ar: "قسم «الرواية المضادّة» في ملخّص وقائع حقيقي.",
            en: "The counter-account section of a real statement of facts.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني أدلّة أسئلة حسب نوع النزاع ويحسّنها بناءً على ما ضاع في ملفّات سابقة.",
          en: "Builds question guides by dispute type and improves them from what was missed in earlier matters.",
        },
        observableBehaviors: [
          {
            ar: "يضع دليل أسئلة لنوع نزاع واحد ويحدّثه بعد كل ملف مغلق.",
            en: "Writes a question guide for one dispute type and updates it after each closed matter.",
          },
          {
            ar: "يحلّل ملفّات خُسرت أو تعثّرت بسبب واقعة لم يُسأل عنها.",
            en: "Analyses matters lost or delayed because of a fact nobody asked about.",
          },
          {
            ar: "يجري مقابلات مشتركة مع محامٍ أصغر ويعطيه ملاحظات فورية.",
            en: "Runs joint interviews with a junior lawyer and gives immediate feedback.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحوّل الدليل إلى استمارة تُملأ فيموت السؤال المفتوح.",
            en: "Lets the guide become a form to fill in, killing the open question.",
          },
          {
            ar: "يحدّث الدليل دون إبلاغ من يستخدمه.",
            en: "Updates the guide without telling the people using it.",
          },
        ],
        successCriteria: [
          {
            ar: "دليل الأسئلة مستخدم من محامَيْن آخرين على الأقل.",
            en: "The question guide is used by at least two other lawyers.",
          },
          {
            ar: "تراجعت حالات اكتشاف واقعة جوهرية بعد إيداع اللائحة.",
            en: "Cases of a material fact emerging after filing have decreased.",
          },
        ],
        evidenceRequired: [
          {
            ar: "دليل الأسئلة مع سجلّ نسخه وتحديثاته.",
            en: "The question guide with its version and update log.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل جودة استجلاء الوقائع معيارًا مؤسسيًا مربوطًا بفتح الملف ومراجعته.",
          en: "Makes fact-gathering quality an institutional standard tied to matter opening and review.",
        },
        observableBehaviors: [
          {
            ar: "يشترط مراجعة أقران لملخّص الوقائع في الملفّات فوق حدّ قيمة معيّن.",
            en: "Requires peer review of the statement of facts in matters above a set value.",
          },
          {
            ar: "يدرّب المكتب على تسلسل السؤال بمحاكاة مسجّلة ومقيّمة.",
            en: "Trains the firm on the questioning sequence with recorded, assessed simulations.",
          },
          {
            ar: "يراجع سنويًا أسباب الوقائع المتأخّرة ويعدّل الأدلّة تبعًا لها.",
            en: "Reviews yearly why facts surfaced late and amends the guides accordingly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضيف طبقات مراجعة تؤخّر الملفّات دون تحسين جودتها.",
            en: "Adds review layers that delay matters without improving their quality.",
          },
          {
            ar: "يقيس عدد الأسئلة لا كفايتها.",
            en: "Measures the number of questions rather than their sufficiency.",
          },
        ],
        successCriteria: [
          {
            ar: "معدّل الوقائع المتأخّرة يُقاس ويُعرض على الشركاء سنويًا.",
            en: "The late-fact rate is measured and reported to the partners yearly.",
          },
          {
            ar: "كل محامٍ جديد يجتاز محاكاة استجلاء وقائع قبل تولّي ملف بمفرده.",
            en: "Every new lawyer passes a fact-gathering simulation before running a matter alone.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سياسة المراجعة المكتوبة وسجلّ تطبيقها.",
            en: "The written review policy and its application log.",
          },
          {
            ar: "نتائج محاكاة الاعتماد للمحامين الجدد.",
            en: "Certification simulation results for new lawyers.",
          },
        ],
      },
    ],
    sourceIds: [
      "src.managing-professional-service-firm",
      "src.maccarthy-cross-exam",
      "src.68-power-moves",
      "src.they-ask-you-answer",
    ],
    confidence: 0.92,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.active-listening"],
  },
  {
    id: "skill.plain-explanation",
    domainId: "dom.communication",
    name: { ar: "الشرح بلغة مفهومة", en: "Explaining clearly in plain language" },
    synonyms: [
      "plain language",
      "avoiding legalese",
      "client-friendly explanation",
      "تبسيط اللغة القانونية",
    ],
    definition: {
      ar: "تحويل المسألة القانونية إلى شرح قصير يفهمه غير القانوني من المرّة الأولى، مع الحفاظ على الدقّة وعدم إخفاء المخاطر.",
      en: "Turning a legal matter into a short explanation a non-lawyer understands first time, while keeping it accurate and not hiding the risks.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على الشرح بلغة مفهومة.",
          en: "No evidence has been collected yet on the learner's ability to explain in plain language.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يدرك أن لغته صعبة على الموكّل، لكنه يشرح بالمصطلحات نفسها التي تعلّمها.",
          en: "Realises his language is hard for the client, but still explains in the terms he was taught.",
        },
        observableBehaviors: [
          {
            ar: "يسأل الموكّل في نهاية الشرح: هل هذا واضح؟",
            en: "Asks the client at the end: is that clear?",
          },
          {
            ar: "يبطئ إيقاعه عند شرح إجراء قضائي.",
            en: "Slows down when explaining a court procedure.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم مصطلحًا إجرائيًا دون تعريفه ثم يبني عليه.",
            en: "Uses a procedural term without defining it and then builds on it.",
          },
          {
            ar: "يعتبر إيماءة الموكّل دليلًا على الفهم.",
            en: "Treats the client's nod as proof of understanding.",
          },
        ],
        successCriteria: [
          {
            ar: "طُلب من الموكّل تأكيد الفهم ولو بسؤال عام.",
            en: "The client was asked to confirm understanding, even in a general way.",
          },
          {
            ar: "لم يتجاوز الشرح خمس دقائق متّصلة.",
            en: "The explanation did not run more than five uninterrupted minutes.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نصّ شرح مكتوب لموقف قانوني واحد.",
            en: "A written explanation of one legal position.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يستبدل المصطلحات بمرادفات يومية ويشرح الإجراء على شكل خطوات مرقّمة.",
          en: "Swaps technical terms for everyday equivalents and lays the procedure out as numbered steps.",
        },
        observableBehaviors: [
          {
            ar: "يعرّف كل مصطلح ضروري بجملة قصيرة عند أول ذكر له.",
            en: "Defines every necessary term in one short sentence the first time it appears.",
          },
          {
            ar: "يعرض الإجراء في ثلاث إلى خمس خطوات مرقّمة.",
            en: "Presents the procedure in three to five numbered steps.",
          },
          {
            ar: "يستخدم جملًا قصيرة لا تتجاوز سطرين.",
            en: "Uses short sentences of no more than two lines.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبسّط إلى حدّ حذف مخاطرة جوهرية.",
            en: "Simplifies to the point of dropping a material risk.",
          },
          {
            ar: "يستبدل مصطلحًا بمصطلح آخر لا يقلّ صعوبة.",
            en: "Replaces one technical term with another that is no easier.",
          },
        ],
        successCriteria: [
          {
            ar: "الشرح مكتوب في خطوات مرقّمة قابلة للإرسال.",
            en: "The explanation is written in numbered steps that can be sent as they are.",
          },
          {
            ar: "لا يحتوي النصّ على مصطلح غير معرّف.",
            en: "The text contains no undefined technical term.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة إلى موكّل تشرح إجراءً في خطوات مرقّمة.",
            en: "A client message explaining a procedure in numbered steps.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يتحقّق من الفهم بطلب إعادة الصياغة من الموكّل، ويعدّل الشرح بحسب خلفيته.",
          en: "Checks understanding by asking the client to say it back, and adjusts to the client's background.",
        },
        observableBehaviors: [
          {
            ar: "يطلب من الموكّل أن يشرح الخطوة التالية بكلماته هو.",
            en: "Asks the client to describe the next step in his own words.",
          },
          {
            ar: "يختار مثالًا من مجال عمل الموكّل لتقريب الفكرة.",
            en: "Picks an example from the client's own line of work to carry the idea.",
          },
          {
            ar: "يفصل بوضوح بين ما هو مؤكّد وما هو محتمل.",
            en: "Separates clearly what is certain from what is likely.",
          },
        ],
        commonMistakes: [
          {
            ar: "يشرح كل التفاصيل بدل ما يحتاجه الموكّل لاتخاذ قراره.",
            en: "Explains every detail instead of what the client needs to decide.",
          },
          {
            ar: "يستخدم تشبيهًا يوحي بضمانة نتيجة.",
            en: "Uses an analogy that implies a guaranteed outcome.",
          },
        ],
        successCriteria: [
          {
            ar: "أعاد الموكّل صياغة الخطوة التالية صحيحة.",
            en: "The client restated the next step correctly.",
          },
          {
            ar: "التمييز بين المؤكّد والمحتمل ظاهر في النصّ المكتوب.",
            en: "The distinction between certain and likely is visible in the written text.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة أو محضر يُظهر إعادة صياغة الموكّل وتصحيحها.",
            en: "A message or record showing the client's restatement and its correction.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يشرح مسألة معقّدة أو خبرًا سيّئًا بوضوح وبلا تهوين، ويجيب عن الأسئلة المتفرّعة فورًا.",
          en: "Explains a complex matter or bad news clearly and without softening it away, and answers the follow-up questions on the spot.",
        },
        observableBehaviors: [
          {
            ar: "يبدأ بالخلاصة ثم يفصّل، لا العكس.",
            en: "Leads with the conclusion and then gives detail, not the reverse.",
          },
          {
            ar: "يعرض بديلين على الأقل مع كلفة كل منهما ومخاطره.",
            en: "Presents at least two options with the cost and risk of each.",
          },
          {
            ar: "يقول «لا أعرف بعد» حين لا يعرف، ويحدّد متى سيعرف.",
            en: "Says \"I do not know yet\" when he does not, and states when he will.",
          },
        ],
        commonMistakes: [
          {
            ar: "يخفّف الخبر السيّئ حتى يفهم الموكّل عكسه.",
            en: "Softens the bad news until the client understands the opposite.",
          },
          {
            ar: "يغرق الموكّل في بدائل بلا توصية.",
            en: "Buries the client in options with no recommendation.",
          },
        ],
        successCriteria: [
          {
            ar: "اتّخذ الموكّل قرارًا مستنيرًا موثّقًا كتابيًا.",
            en: "The client took an informed decision that is documented in writing.",
          },
          {
            ar: "لم يظهر لاحقًا خلاف على ما فُهم من الشرح.",
            en: "No later dispute arose about what the explanation meant.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة خيارات مكتوبة مع توصية مسبّبة.",
            en: "A written options message with a reasoned recommendation.",
          },
          {
            ar: "تقييم بحسب معيار جودة المراسلة.",
            en: "An assessment against the email-quality rubric.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يوحّد لغة الشرح داخل المكتب عبر نماذج مكتوبة ويراجع مراسلات الآخرين.",
          en: "Standardises the firm's explanatory language through written templates and reviews colleagues' correspondence.",
        },
        observableBehaviors: [
          {
            ar: "يضع نماذج رسائل بلغة مبسّطة للإجراءات الأكثر تكرارًا.",
            en: "Builds plain-language message templates for the most frequent procedures.",
          },
          {
            ar: "يراجع مراسلات المحامين الجدد قبل إرسالها ويعلّق على الوضوح لا على الأسلوب.",
            en: "Reviews junior lawyers' correspondence before it goes out, commenting on clarity rather than style.",
          },
          {
            ar: "يختبر النموذج على شخص من خارج المهنة قبل اعتماده.",
            en: "Tests the template on someone outside the profession before adopting it.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض نموذجًا جامدًا لا يسمح بتكييفه مع الموكّل.",
            en: "Imposes a rigid template that cannot be adapted to the client.",
          },
          {
            ar: "يجعل النموذج أطول من الشرح الأصلي.",
            en: "Lets the template grow longer than the explanation it replaced.",
          },
        ],
        successCriteria: [
          {
            ar: "النماذج مستخدمة فعليًا وقابلة للقياس بعدد الرسائل الصادرة بها.",
            en: "The templates are actually used, measurable by how many messages go out on them.",
          },
          {
            ar: "انخفضت أسئلة الموكّلين التكرارية عن الإجراء نفسه.",
            en: "Repeat client questions about the same procedure have fallen.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مجموعة النماذج المعتمدة مع سجلّ الاستخدام.",
            en: "The adopted template set with its usage log.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل وضوح اللغة سياسة مكتبية مقيسة ويدرّب عليها، ويعالج مقاومة من يرى في التبسيط ضعفًا.",
          en: "Makes clarity a measured firm policy, trains it, and addresses the resistance of those who see simplification as weakness.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد سياسة مكتوبة للغة المراسلات مع أمثلة صحيحة وخاطئة.",
            en: "Adopts a written correspondence-language policy with right and wrong examples.",
          },
          {
            ar: "يقيس وضوح المراسلات بمراجعة عيّنة فصلية.",
            en: "Measures clarity by reviewing a quarterly sample of correspondence.",
          },
          {
            ar: "يناقش علنًا حالة تسبّب فيها غموض رسالة بخسارة ثقة موكّل.",
            en: "Discusses openly a case where an unclear message cost a client's confidence.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعامل السياسة كقاعدة شكلية دون تدريب.",
            en: "Treats the policy as a formality without training.",
          },
          {
            ar: "يستثني الشركاء من المراجعة فتفقد السياسة مصداقيتها.",
            en: "Exempts partners from review, so the policy loses credibility.",
          },
        ],
        successCriteria: [
          {
            ar: "عيّنة المراجعة الفصلية تُظهر تحسّنًا مستمرًّا خلال سنة.",
            en: "The quarterly review sample shows sustained improvement over a year.",
          },
          {
            ar: "المحامون الجدد يتلقّون تدريبًا موثّقًا على السياسة خلال شهرهم الأول.",
            en: "New lawyers receive documented training on the policy in their first month.",
          },
        ],
        evidenceRequired: [
          {
            ar: "السياسة المعتمدة ونتائج مراجعتين فصليتين.",
            en: "The adopted policy and the results of two quarterly reviews.",
          },
          {
            ar: "سجلّ تدريب المحامين الجدد.",
            en: "The new-lawyer training log.",
          },
        ],
      },
    ],
    sourceIds: [
      "src.small-firm-roadmap",
      "src.making-your-case",
      "src.thinking-like-a-lawyer",
      "src.they-ask-you-answer",
      "src.managing-professional-service-firm",
    ],
    confidence: 0.94,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.active-listening"],
  },
  {
    id: "skill.expectation-management",
    domainId: "dom.client-relations",
    name: { ar: "ضبط توقّعات الموكّل", en: "Managing client expectations" },
    synonyms: [
      "setting expectations",
      "scope and timeline management",
      "under-promise and over-deliver",
      "إدارة التوقّعات",
    ],
    definition: {
      ar: "تحديد ما سيُنجَز ومتى وبأي كلفة قبل بدء العمل، وتحديث ذلك كلّما تغيّرت المعطيات، بحيث لا يفاجأ الموكّل أبدًا.",
      en: "Fixing what will be done, by when and at what cost before work starts, and updating it whenever the facts change, so the client is never surprised.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على أسلوب المتدرّب في ضبط التوقّعات.",
          en: "No evidence has been collected yet on how the learner manages expectations.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يعرف أن التوقّعات مهمّة، لكنه يترك المدد والكلفة غامضة تجنّبًا للإحراج.",
          en: "Knows expectations matter, but leaves timing and cost vague to avoid an awkward moment.",
        },
        observableBehaviors: [
          {
            ar: "يذكر للموكّل أن الإجراء «يستغرق وقتًا» ويحدّد مرحلة تالية على الأقل.",
            en: "Tells the client the procedure \"takes time\" and at least names the next stage.",
          },
          {
            ar: "يحيل أسئلة الكلفة إلى من هو أقدم منه بدل الارتجال.",
            en: "Refers cost questions to a senior colleague rather than improvising.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم تعبيرات مطّاطة مثل «قريبًا» أو «بأسرع وقت».",
            en: "Uses elastic phrases such as \"soon\" or \"as fast as possible\".",
          },
          {
            ar: "يتجنّب ذكر احتمال التأخير كي لا يزعج الموكّل.",
            en: "Avoids mentioning the possibility of delay so as not to upset the client.",
          },
        ],
        successCriteria: [
          {
            ar: "الموكّل يعرف المرحلة التالية ولو دون تاريخ محدّد.",
            en: "The client knows the next stage, even without an exact date.",
          },
          {
            ar: "لم يُعطَ وعد بمدّة غير مسنودة.",
            en: "No unsupported timing promise was given.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير ذاتي عن كيفية إجابة سؤال «كم سيستغرق؟».",
            en: "A self-report on how the question \"how long will it take?\" was answered.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يعطي مدى زمنيًا لا رقمًا واحدًا، ويكتبه في رسالة بعد اللقاء.",
          en: "Gives a range rather than a single figure, and puts it in writing after the meeting.",
        },
        observableBehaviors: [
          {
            ar: "يذكر مدى زمنيًا مع سبب الحدّ الأعلى.",
            en: "States a time range and the reason for its upper end.",
          },
          {
            ar: "يحدّد نطاق العمل: ما يشمله التوكيل وما لا يشمله.",
            en: "Defines the scope: what the engagement covers and what it does not.",
          },
          {
            ar: "يرسل رسالة تلخّص المدد والنطاق خلال يوم عمل.",
            en: "Sends a message summarising timing and scope within one working day.",
          },
          {
            ar: "يلتزم بموعد ثابت للتحديث — أسبوعي مثلاً — بدل الاكتفاء بالرد حين يُسأل.",
            en: "Commits to a fixed update cadence — weekly, for instance — instead of only responding when asked.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعطي مدى ضيّقًا لإرضاء الموكّل ثم يتجاوزه.",
            en: "Gives a narrow range to please the client and then overruns it.",
          },
          {
            ar: "يذكر النطاق شفهيًا ولا يوثّقه.",
            en: "States the scope orally and never records it.",
          },
          {
            ar: "يترك التواصل رهن مبادرته اللحظية فيبدو غير منتظم للموكّل.",
            en: "Leaves communication to his own momentary initiative, so it looks irregular to the client.",
          },
        ],
        successCriteria: [
          {
            ar: "رسالة مكتوبة تتضمّن النطاق والمدى الزمني موجودة في الملف.",
            en: "A written message containing scope and time range is in the file.",
          },
          {
            ar: "لم يُستخدم تعبير زمني مطّاط في المراسلة.",
            en: "No elastic time phrase appears in the correspondence.",
          },
          {
            ar: "التحديثات تصل بانتظام لا بردّ فعل على سؤال الموكّل.",
            en: "Updates arrive on a regular rhythm, not as a reaction to the client asking.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة نطاق ومدد مؤرّخة إلى موكّل حقيقي.",
            en: "A dated scope-and-timing message to a real client.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يضبط التوقّعات على ثلاثة محاور — الوقت والكلفة والنتيجة المحتملة — ويحدّثها عند كل تغيّر.",
          en: "Sets expectations on three axes — time, cost and likely outcome — and updates them at every change.",
        },
        observableBehaviors: [
          {
            ar: "يفرّق صراحة بين ما يتحكّم به المكتب وما يتحكّم به القضاء أو الخصم.",
            en: "Distinguishes explicitly between what the firm controls and what the court or the opponent controls.",
          },
          {
            ar: "يبلّغ الموكّل بالتأخير قبل حلول الموعد لا بعده.",
            en: "Tells the client about a delay before the date passes, not after.",
          },
          {
            ar: "يعطي تقديرًا للكلفة يشمل المصاريف لا الأتعاب وحدها.",
            en: "Gives a cost estimate that includes disbursements, not just fees.",
          },
          {
            ar: "يتنبّه حين تكون ممانعة الموكّل ناتجة عن طريقة عرض الرقم أو النتيجة لا عن خلاف جوهري عليها.",
            en: "Notices when the client's resistance comes from how a figure or outcome is framed rather than from real disagreement with it.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعِد بنتيجة محتملة بلغة توحي باليقين.",
            en: "Describes a likely outcome in language that sounds certain.",
          },
          {
            ar: "يؤجّل خبر التأخير أملًا في تدارُكه.",
            en: "Delays the news of a delay hoping to make it up.",
          },
          {
            ar: "يكرّر الرقم نفسه بصياغة أكثر إلحاحًا بدل إعادة صياغته كمكسب لا كخسارة.",
            en: "Repeats the same figure more insistently instead of reframing it as a gain rather than a loss.",
          },
        ],
        successCriteria: [
          {
            ar: "كل تأخير أُبلغ به قبل تاريخه المحدّد.",
            en: "Every delay was notified before its due date.",
          },
          {
            ar: "الملف يتضمّن تقدير كلفة شاملًا للمصاريف.",
            en: "The file contains a cost estimate inclusive of disbursements.",
          },
          {
            ar: "الرقم أو النتيجة عُرضا بصياغتين — خسارة ومكسب — حتى يتبيّن أساس الممانعة الحقيقي.",
            en: "The figure or outcome was presented both ways — as a loss and as a gain — to reveal the real basis of the resistance.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالتان: إبلاغ مسبق بتأخير، وتقدير كلفة شامل.",
            en: "Two messages: an advance delay notice and an inclusive cost estimate.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يعيد ضبط توقّعات موكّل خاب ظنّه، ويستعيد الاتفاق على خطّة جديدة مكتوبة.",
          en: "Resets the expectations of a disappointed client and re-establishes agreement on a new written plan.",
        },
        observableBehaviors: [
          {
            ar: "يعترف بالفارق بين ما وُعد به وما حصل قبل شرح الأسباب.",
            en: "Acknowledges the gap between what was promised and what happened before explaining why.",
          },
          {
            ar: "يعرض خطّة معدّلة بتواريخ جديدة والتزام بمراجعتها.",
            en: "Puts forward a revised plan with new dates and a commitment to review it.",
          },
          {
            ar: "يسأل الموكّل عن الأثر العملي للتأخير على أعماله.",
            en: "Asks the client what practical effect the delay has on his business.",
          },
          {
            ar: "يستعيد ثقة الموكّل بتقليل الجهد الذي يبذله للحصول على معلومة — يبادر بالجواب قبل أن يُسأل — لا بلفتة واحدة كبيرة.",
            en: "Rebuilds the client's trust by cutting the effort the client must spend to get information — answering before being asked — rather than through one big gesture.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبدأ بالتبرير قبل الاعتراف فيبدو متهرّبًا.",
            en: "Starts with justification before acknowledgement and sounds evasive.",
          },
          {
            ar: "يعوّض بخصم مالي بدل معالجة سبب الخلل.",
            en: "Compensates with a discount instead of fixing the cause.",
          },
          {
            ar: "يعوّض التأخير بهدية أو خصم بدل تسهيل وصول الموكّل إلى المعلومة أصلاً.",
            en: "Compensates for the delay with a gift or discount instead of making information easier for the client to get in the first place.",
          },
        ],
        successCriteria: [
          {
            ar: "وافق الموكّل كتابيًا على الخطّة المعدّلة.",
            en: "The client approved the revised plan in writing.",
          },
          {
            ar: "التزم المكتب بالتواريخ الجديدة في الدورة التالية.",
            en: "The firm met the new dates in the following cycle.",
          },
          {
            ar: "عدد المرات التي يضطر فيها الموكّل إلى السؤال عن وضع ملفّه تراجع.",
            en: "The number of times the client has to ask about the status of his matter has fallen.",
          },
        ],
        evidenceRequired: [
          {
            ar: "الخطّة المعدّلة وموافقة الموكّل عليها.",
            en: "The revised plan and the client's approval of it.",
          },
          {
            ar: "تقييم بحسب معيار المحادثة الصعبة.",
            en: "An assessment against the difficult-conversation rubric.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني آلية مكتبية تجعل ضبط التوقّعات جزءًا من فتح الملف لا اجتهادًا فرديًا.",
          en: "Builds a firm mechanism that makes expectation setting part of opening a matter, not an individual initiative.",
        },
        observableBehaviors: [
          {
            ar: "يضع نموذج خطّة ملف يتضمّن النطاق والمراحل والتواريخ وحدود الكلفة.",
            en: "Creates a matter-plan template covering scope, stages, dates and cost limits.",
          },
          {
            ar: "يفرض تحديثًا دوريًا للخطّة عند كل مرحلة منتهية.",
            en: "Requires the plan to be updated at the end of every stage.",
          },
          {
            ar: "يقيس نسبة الملفّات التي تجاوزت مددها المعلنة.",
            en: "Measures the share of matters that overran their stated timelines.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجعل الخطّة وثيقة تُنشأ ولا تُحدَّث.",
            en: "Lets the plan become a document created once and never updated.",
          },
          {
            ar: "يقارن الأداء بمدد متفائلة غير واقعية أصلًا.",
            en: "Benchmarks performance against optimistic timelines that were never realistic.",
          },
        ],
        successCriteria: [
          {
            ar: "نسبة تجاوز المدد مُقاسة وتتحسّن على مدى فصلين.",
            en: "The overrun rate is measured and improves across two quarters.",
          },
          {
            ar: "كل ملف جديد يحتوي على خطّة معتمدة من الموكّل.",
            en: "Every new matter contains a client-approved plan.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نموذج خطّة الملف مع بيانات تجاوز المدد لفصلين.",
            en: "The matter-plan template with two quarters of overrun data.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يقود ثقافة «لا مفاجآت» ويعالج الحوافز التي تدفع المحامين إلى وعود متفائلة.",
          en: "Leads a no-surprises culture and tackles the incentives that push lawyers into optimistic promises.",
        },
        observableBehaviors: [
          {
            ar: "يراجع سياسة التسعير والحوافز حين تُشجّع على تقديرات غير واقعية.",
            en: "Revisits pricing and incentive policy when it encourages unrealistic estimates.",
          },
          {
            ar: "يجعل تجاوز المدد بندًا دائمًا في اجتماع الشركاء.",
            en: "Makes timeline overrun a standing item in the partners' meeting.",
          },
          {
            ar: "يدرّب الفريق على إبلاغ التأخير مبكرًا دون خوف من اللوم.",
            en: "Trains the team to report delay early without fear of blame.",
          },
        ],
        commonMistakes: [
          {
            ar: "يلوم مبلّغ التأخير فيتعلّم الفريق الصمت.",
            en: "Blames whoever reports a delay, teaching the team to keep quiet.",
          },
          {
            ar: "يكتفي بمؤشّر واحد يخفي اختلافًا كبيرًا بين أنواع الملفّات.",
            en: "Relies on one indicator that hides wide variation between matter types.",
          },
        ],
        successCriteria: [
          {
            ar: "التأخيرات تُبلّغ داخليًا قبل موعدها في أغلب الحالات.",
            en: "Delays are reported internally before their due date in most cases.",
          },
          {
            ar: "شكاوى «لم يخبرني أحد» اختفت تقريبًا من سجلّ الشكاوى.",
            en: "\"Nobody told me\" complaints have all but disappeared from the complaints log.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاضر اجتماعات الشركاء التي تناولت المؤشّر.",
            en: "Partner meeting minutes covering the indicator.",
          },
          {
            ar: "سجلّ الشكاوى لسنتين متتاليتين.",
            en: "The complaints log for two consecutive years.",
          },
        ],
      },
    ],
    sourceIds: [
      "src.managing-professional-service-firm",
      "src.legal-project-management",
      "src.your-brain-at-work",
      "src.small-firm-roadmap",
      "src.the-antidote",
      "src.client-centered-law-firm",
      "src.legal-analyst",
    ],
    confidence: 0.96,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.plain-explanation"],
  },
  {
    id: "skill.avoiding-guarantees",
    domainId: "dom.professional-judgment",
    name: { ar: "التعامل مع طلب الضمانات", en: "Handling requests for guarantees" },
    synonyms: [
      "no outcome promises",
      "managing the will-I-win question",
      "risk disclosure",
      "عدم ضمان النتيجة",
    ],
    definition: {
      ar: "الإجابة عن سؤال «هل تضمن لي الفوز؟» بصدق يحفظ ثقة الموكّل: بيان الاحتمالات وأسبابها، ورفض الوعد بالنتيجة دون أن يبدو الرفض تهرّبًا.",
      en: "Answering \"can you guarantee I'll win?\" honestly without losing the client's confidence: giving the odds and the reasons behind them, and refusing to promise an outcome without sounding evasive.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على تعامل المتدرّب مع طلب ضمان النتيجة.",
          en: "No evidence has been collected yet on how the learner handles a request for a guaranteed outcome.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يعرف أن ضمان النتيجة ممنوع، لكنه يرتبك أمام إلحاح الموكّل.",
          en: "Knows guaranteeing an outcome is not permitted, but is thrown by a client who insists.",
        },
        observableBehaviors: [
          {
            ar: "يقول صراحة إنه لا يستطيع ضمان النتيجة.",
            en: "States plainly that he cannot guarantee the outcome.",
          },
          {
            ar: "يحيل السؤال إلى محامٍ أقدم عند الإلحاح.",
            en: "Refers the question to a senior lawyer when pressed.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم عبارات مثل «إن شاء الله سنكسبها» فيُفهم منها ضمان.",
            en: "Uses phrases like \"we'll win it, God willing\" that are heard as a guarantee.",
          },
          {
            ar: "يجيب بجملة نافية جافّة تترك الموكّل بلا معلومة.",
            en: "Answers with a flat denial that leaves the client with no information.",
          },
        ],
        successCriteria: [
          {
            ar: "لم تصدر عن المتدرّب عبارة تُفهم كضمانة.",
            en: "The learner said nothing that could be heard as a guarantee.",
          },
          {
            ar: "أحال السؤال بدل الارتجال حين لم يعرف.",
            en: "Referred the question rather than improvising when he did not know.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة قصيرة لسؤال الضمانة مع تقييم.",
            en: "A short assessed simulation of the guarantee question.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يجيب بصيغة ثابتة: لا ضمانة، مع بيان ما يستطيع الالتزام به فعلًا.",
          en: "Answers in a settled form: no guarantee, plus what he can actually commit to.",
        },
        observableBehaviors: [
          {
            ar: "يفصل بين الالتزام بالجهد والالتزام بالنتيجة بجملة واضحة.",
            en: "Separates a commitment of effort from a commitment of result in one clear sentence.",
          },
          {
            ar: "يذكر عاملًا واحدًا على الأقل خارج سيطرة المكتب.",
            en: "Names at least one factor outside the firm's control.",
          },
          {
            ar: "يوثّق الجواب في رسالة المتابعة.",
            en: "Records the answer in the follow-up message.",
          },
          {
            ar: "يشرح للموكّل أن رضاه لن يُقاس بمعيار مطلق لجودة العمل، بل بالفارق بين ما قيل له وما تحقّق فعلاً.",
            en: "Explains to the client that his satisfaction will be judged less by an absolute quality bar than by the gap between what he was told and what actually happens.",
          },
        ],
        commonMistakes: [
          {
            ar: "يكرّر «لا أستطيع أن أعد» ثلاث مرّات فيبدو دفاعيًا.",
            en: "Repeats \"I cannot promise\" three times and sounds defensive.",
          },
          {
            ar: "يعوّض الرفض بمبالغة في وصف خبرة المكتب.",
            en: "Compensates for the refusal by overstating the firm's track record.",
          },
          {
            ar: "يصف عملاً جيدًا بلغة أكثر ثقة ممّا يمكن إثباته، فيتّسع الفارق بين الوعد والنتيجة رغم سلامة العمل نفسه.",
            en: "Describes solid work in language more confident than the evidence supports, widening the gap between promise and result even though the work itself is sound.",
          },
        ],
        successCriteria: [
          {
            ar: "الجواب موثّق كتابيًا في الملف.",
            en: "The answer is documented in writing in the file.",
          },
          {
            ar: "الموكّل يعرف ما التزم به المكتب بالضبط.",
            en: "The client knows exactly what the firm has committed to.",
          },
          {
            ar: "لغة الجواب لا توحي بنتيجة أفضل ممّا يمكن تبريره، حتى حين يكون العمل ممتازًا.",
            en: "The wording of the answer implies no better a result than can be justified, even when the work itself is excellent.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة إلى موكّل تفصل بين الجهد والنتيجة.",
            en: "A client message separating effort from result.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يحوّل سؤال الضمانة إلى حوار عن الاحتمالات: أفضل حالة، أسوأ حالة، والأرجح، مع أسباب كل منها.",
          en: "Turns the guarantee question into a conversation about scenarios — best, worst and most likely — with the reason for each.",
        },
        observableBehaviors: [
          {
            ar: "يعرض ثلاثة سيناريوهات مع العامل الحاسم في كل منها.",
            en: "Sets out three scenarios with the decisive factor in each.",
          },
          {
            ar: "يذكر أسوأ حالة صراحة ويسأل الموكّل عن قدرته على تحمّلها.",
            en: "Names the worst case explicitly and asks whether the client could absorb it.",
          },
          {
            ar: "يبيّن ما الذي قد يغيّر التقدير لاحقًا.",
            en: "Explains what could change the assessment later.",
          },
          {
            ar: "يسمّي ميل الطرفين — المحامي والموكّل كلاهما — إلى المبالغة بتقدير حظوظهما، كأحد أسباب إلحاح الموكّل على ضمانة.",
            en: "Names both sides' tendency to overrate their own prospects — lawyer and client alike — as part of why the client is pressing for a guarantee.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعطي نسبة مئوية للفوز بلا أساس.",
            en: "Attaches a percentage to winning with no basis for it.",
          },
          {
            ar: "يخفّف أسوأ حالة كي لا يخسر التوكيل.",
            en: "Softens the worst case so as not to lose the instruction.",
          },
          {
            ar: "يسمح لتفاؤله الشخصي بشأن الملف بأن يتسلّل إلى الرقم أو الاحتمال الذي يذكره للموكّل.",
            en: "Lets his own optimism about the file leak into the figure or likelihood he states to the client.",
          },
        ],
        successCriteria: [
          {
            ar: "السيناريوهات الثلاثة موثّقة في رسالة إلى الموكّل.",
            en: "The three scenarios are documented in a message to the client.",
          },
          {
            ar: "أقرّ الموكّل كتابيًا بعلمه بأسوأ حالة.",
            en: "The client acknowledged the worst case in writing.",
          },
          {
            ar: "التقدير المذكور للموكّل مبني على وقائع الملف لا على ثقة المحامي الشخصية بقضيته.",
            en: "The estimate given to the client rests on the facts of the file, not on the lawyer's personal confidence in his case.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة سيناريوهات مع إقرار الموكّل.",
            en: "A scenarios message together with the client's acknowledgement.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يصمد أمام ضغط تجاري أو عاطفي شديد لانتزاع وعد، ويحافظ على العلاقة.",
          en: "Holds the line under heavy commercial or emotional pressure to extract a promise, and keeps the relationship.",
        },
        observableBehaviors: [
          {
            ar: "يسمّي الضغط بلغة محايدة: «أفهم أنك تريد يقينًا، وهذا ما لا أملكه».",
            en: "Names the pressure neutrally: \"I understand you want certainty, and that is what I cannot give.\"",
          },
          {
            ar: "يعرض بديلًا عمليًا: سقف كلفة، أو مرحلة تجريبية، أو مراجعة عند نقطة قرار.",
            en: "Offers a practical alternative: a cost cap, a first phase, or a review at a decision point.",
          },
          {
            ar: "يرفض التوكيل حين يكون شرط الموكّل ضمان النتيجة.",
            en: "Declines the instruction when the client's condition is a guaranteed result.",
          },
          {
            ar: "لا يذكر درجة يقين أعلى ممّا تسنده الوقائع، ويطرح نقطة الضعف في الملف من تلقاء نفسه قبل أن يُسأل عنها.",
            en: "States no higher degree of certainty than the facts support, and raises the case's weak point on his own before being asked about it.",
          },
        ],
        commonMistakes: [
          {
            ar: "يخفّف الصياغة تحت الضغط فيترك بابًا لتفسير الضمان.",
            en: "Softens the wording under pressure and leaves room to read a guarantee into it.",
          },
          {
            ar: "يقبل التوكيل ويؤجّل التوضيح إلى ما بعد التوقيع.",
            en: "Accepts the instruction and defers the clarification until after signature.",
          },
          {
            ar: "يُخفي نقطة الضعف في الملف أملًا في ألّا يلاحظها أحد، فتُكتشف لاحقًا في وقت أسوأ.",
            en: "Hides the case's weak point hoping nobody notices, and it surfaces later at a worse moment.",
          },
        ],
        successCriteria: [
          {
            ar: "لا توجد في الملف أي عبارة يمكن قراءتها كضمانة.",
            en: "The file contains no phrase that can be read as a guarantee.",
          },
          {
            ar: "استمرّت العلاقة أو انتهت برفض موثّق ومهني.",
            en: "The relationship continued, or ended in a documented and professional refusal.",
          },
          {
            ar: "نقطة الضعف موثّقة في مراسلة مع الموكّل قبل أن يثيرها أي طرف آخر.",
            en: "The weak point is documented in correspondence with the client before any other party raises it.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة مقيّمة لموكّل يضغط لانتزاع وعد.",
            en: "An assessed simulation of a client pressing for a promise.",
          },
          {
            ar: "مراسلة تُظهر البديل العملي المعروض.",
            en: "Correspondence showing the practical alternative offered.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضع لغة المكتب المعتمدة في التقدير والمخاطرة ويراجع مراسلات الزملاء بحثًا عن ضمانات ضمنية.",
          en: "Sets the firm's approved language for assessment and risk, and reviews colleagues' correspondence for implied guarantees.",
        },
        observableBehaviors: [
          {
            ar: "يضع قائمة عبارات ممنوعة وبدائل معتمدة لها.",
            en: "Draws up a list of prohibited phrasings with approved alternatives.",
          },
          {
            ar: "يدقّق عيّنة من العروض والمراسلات قبل الإرسال.",
            en: "Audits a sample of proposals and correspondence before it goes out.",
          },
          {
            ar: "يدرّب فريق التسويق على عدم الوعد بالنتائج في الإعلانات.",
            en: "Trains the marketing team not to promise outcomes in advertising.",
          },
        ],
        commonMistakes: [
          {
            ar: "يراقب المراسلات ويترك المواد التسويقية بلا مراجعة.",
            en: "Polices correspondence but leaves marketing material unreviewed.",
          },
          {
            ar: "يمنع العبارات دون تعليم البديل فيصمت المحامون عن التقدير كلّه.",
            en: "Bans phrases without teaching alternatives, so lawyers stop assessing anything at all.",
          },
        ],
        successCriteria: [
          {
            ar: "المواد التسويقية والمراسلات خالية من وعود النتائج في عيّنة التدقيق.",
            en: "Marketing material and correspondence are free of outcome promises in the audit sample.",
          },
          {
            ar: "لغة السيناريوهات مستخدمة في أغلب رسائل التقدير.",
            en: "Scenario language is used in most assessment letters.",
          },
        ],
        evidenceRequired: [
          {
            ar: "دليل اللغة المعتمد ونتائج تدقيق واحد على الأقل.",
            en: "The approved language guide and the results of at least one audit.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل رفض الضمانات موقفًا مؤسسيًا محميًّا بالسياسة والتدريب، ويدافع عنه أمام ضغط تجاري.",
          en: "Makes the refusal of guarantees an institutional position protected by policy and training, and defends it against commercial pressure.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد سياسة مكتوبة تمنع الوعد بالنتيجة في كل قناة.",
            en: "Adopts a written policy barring outcome promises on every channel.",
          },
          {
            ar: "يرفض حملة تسويقية أو توكيلًا كبيرًا يخالف السياسة ويوثّق سبب الرفض.",
            en: "Turns down a marketing campaign or a large instruction that breaches the policy, and records why.",
          },
          {
            ar: "يدرّب كل محامٍ جديد على مشهد سؤال الضمانة قبل مقابلة موكّل بمفرده.",
            en: "Trains every new lawyer on the guarantee-question scene before they meet a client alone.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستثني الملفّات الكبيرة من السياسة فتنهار مصداقيتها.",
            en: "Exempts large matters from the policy and its credibility collapses.",
          },
          {
            ar: "يكتفي بالسياسة المكتوبة دون تدريب عملي.",
            en: "Relies on the written policy without practical training.",
          },
        ],
        successCriteria: [
          {
            ar: "لا توجد شكوى أو نزاع أتعاب سببه وعد بالنتيجة خلال سنتين.",
            en: "No complaint or fee dispute caused by an outcome promise in two years.",
          },
          {
            ar: "كل محامٍ جديد اجتاز تقييم مشهد الضمانة.",
            en: "Every new lawyer has passed the guarantee-scene assessment.",
          },
        ],
        evidenceRequired: [
          {
            ar: "السياسة المعتمدة وسجلّ حالة رفض موثّقة.",
            en: "The adopted policy and the record of one documented refusal.",
          },
          {
            ar: "سجلّ اجتياز التقييم للمحامين الجدد.",
            en: "The new-lawyer assessment pass log.",
          },
        ],
      },
    ],
    sourceIds: [
      "src.the-antidote",
      "src.managing-professional-service-firm",
      "src.rule-of-law",
      "src.68-power-moves",
      "src.game-changing-attorney",
      "src.selling-the-invisible",
      "src.legal-analyst",
      "src.making-your-case",
    ],
    confidence: 0.91,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.expectation-management"],
  },
  {
    id: "skill.next-steps-closure",
    domainId: "dom.client-relations",
    name: { ar: "إغلاق الاجتماع بخطوات محدّدة", en: "Closing a meeting with owned, dated next steps" },
    synonyms: ["meeting close", "action items", "who does what by when", "خلاصة الاجتماع"],
    definition: {
      ar: "إنهاء كل لقاء بقائمة قصيرة من الخطوات، لكل خطوة مسؤول واحد وتاريخ محدّد، يقرّها الموكّل قبل مغادرته.",
      en: "Ending every meeting with a short list of steps, each with one owner and a fixed date, confirmed by the client before he leaves.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على طريقة إغلاق المتدرّب للاجتماعات.",
          en: "No evidence has been collected yet on how the learner closes meetings.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "ينهي اللقاء بجملة عامّة مثل «سنتواصل معك» دون تحديد.",
          en: "Ends the meeting with a general line such as \"we will be in touch\" and nothing more.",
        },
        observableBehaviors: [
          {
            ar: "يذكر أن هناك خطوة تالية دون تسميتها بدقّة.",
            en: "Mentions that there is a next step without naming it precisely.",
          },
          {
            ar: "يشكر الموكّل ويؤكّد أنه سيراجع الملف.",
            en: "Thanks the client and confirms he will review the file.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترك الموكّل غير عارف من سيتصل بمن.",
            en: "Leaves the client not knowing who will call whom.",
          },
          {
            ar: "يعتمد على ذاكرته في تذكّر ما وُعد به.",
            en: "Relies on memory to recall what was promised.",
          },
        ],
        successCriteria: [
          {
            ar: "الموكّل يعرف أن الملف لم ينتهِ عند باب المكتب.",
            en: "The client knows the matter does not stop at the office door.",
          },
          {
            ar: "توجد ملاحظة واحدة على الأقل عن خطوة تالية.",
            en: "At least one note about a next step exists.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ملاحظات نهاية لقاء واحد.",
            en: "Closing notes from one meeting.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يلخّص شفهيًا ثلاث خطوات تالية ويكتبها في الملف.",
          en: "Recaps three next steps aloud and writes them into the file.",
        },
        observableBehaviors: [
          {
            ar: "يقول: «الخطوات التالية ثلاث» ثم يعدّها.",
            en: "Says \"there are three next steps\" and then lists them.",
          },
          {
            ar: "يحدّد لكل خطوة من ينفّذها: المكتب أم الموكّل.",
            en: "States for each step who does it: the firm or the client.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحدّد المسؤول ولا يحدّد التاريخ.",
            en: "Names the owner but not the date.",
          },
          {
            ar: "يضع سبع خطوات فيضيع الترتيب.",
            en: "Lists seven steps and the priority is lost.",
          },
        ],
        successCriteria: [
          {
            ar: "الخطوات مكتوبة في الملف بعد اللقاء مباشرة.",
            en: "The steps are written into the file immediately after the meeting.",
          },
          {
            ar: "لكل خطوة مسؤول مسمّى.",
            en: "Each step has a named owner.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة خطوات مكتوبة من لقاء حقيقي.",
            en: "A written step list from a real meeting.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يغلق كل لقاء بخطوات لكل منها مسؤول وتاريخ، ويرسلها كتابيًا خلال يوم عمل.",
          en: "Closes every meeting with steps that each carry an owner and a date, sent in writing within one working day.",
        },
        observableBehaviors: [
          {
            ar: "يطلب من الموكّل تأكيد الخطوات التي تقع عليه هو.",
            en: "Asks the client to confirm the steps that fall on him.",
          },
          {
            ar: "يضع التواريخ في التقويم قبل مغادرة الغرفة.",
            en: "Puts the dates in the calendar before leaving the room.",
          },
          {
            ar: "يرسل رسالة تلخيص خلال يوم عمل واحد.",
            en: "Sends a summary message within one working day.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضع تاريخًا لا يستطيع الوفاء به لإرضاء الموكّل.",
            en: "Sets a date he cannot meet in order to please the client.",
          },
          {
            ar: "يرسل التلخيص بعد أسبوع فيفقد أثره.",
            en: "Sends the summary a week later, so it loses its effect.",
          },
        ],
        successCriteria: [
          {
            ar: "رسالة الخطوات وصلت خلال يوم عمل واحد.",
            en: "The steps message arrived within one working day.",
          },
          {
            ar: "كل خطوة تحمل مسؤولًا وتاريخًا.",
            en: "Every step carries an owner and a date.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة خطوات مؤرّخة مع تواريخ التنفيذ.",
            en: "A dated steps message showing the delivery dates.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يغلق لقاءات معقّدة أو متعدّدة الأطراف باتفاق واضح رغم اختلاف وجهات النظر.",
          en: "Closes complex or multi-party meetings with a clear agreement despite differing positions.",
        },
        observableBehaviors: [
          {
            ar: "يفصل ما اتُّفق عليه عمّا بقي معلّقًا ويحدّد تاريخ حسمه.",
            en: "Separates what was agreed from what stays open and fixes a date to settle it.",
          },
          {
            ar: "يسمّي مسؤولًا واحدًا لكل خطوة حتى مع تعدّد الأطراف.",
            en: "Names a single owner for each step even with several parties in the room.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترك خطوة بمسؤولين اثنين فلا ينفّذها أحد.",
            en: "Leaves a step with two owners, so nobody does it.",
          },
          {
            ar: "يسجّل «اتفاق» على أمر لم يوافق عليه أحد الأطراف صراحة.",
            en: "Records agreement on a point no party expressly accepted.",
          },
        ],
        successCriteria: [
          {
            ar: "لم يعترض أي طرف على محضر الخطوات خلال ثلاثة أيام.",
            en: "No party objected to the steps record within three days.",
          },
          {
            ar: "البنود المعلّقة لها تواريخ حسم مكتوبة.",
            en: "Open points carry written resolution dates.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر خطوات لاجتماع متعدّد الأطراف.",
            en: "A steps record from a multi-party meeting.",
          },
          {
            ar: "تأكيد استلام من الأطراف.",
            en: "Confirmation of receipt from the parties.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يجعل رسالة الخطوات إجراءً مكتبيًا مقيسًا ويتابع تنفيذها بنظام.",
          en: "Makes the steps message a measured firm procedure and tracks delivery through the system.",
        },
        observableBehaviors: [
          {
            ar: "يضع نموذج رسالة خطوات موحّدًا يستخدمه الفريق.",
            en: "Creates a single steps-message template the team uses.",
          },
          {
            ar: "يقيس نسبة الاجتماعات التي تلتها رسالة خلال يوم عمل.",
            en: "Measures the share of meetings followed by a message within one working day.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقيس إرسال الرسالة لا تنفيذ الخطوات.",
            en: "Measures whether the message was sent rather than whether the steps were done.",
          },
          {
            ar: "يجعل النموذج طويلًا فيتجنّبه الفريق.",
            en: "Makes the template so long the team avoids it.",
          },
        ],
        successCriteria: [
          {
            ar: "النسبة مقيسة وتتحسّن خلال فصلين.",
            en: "The rate is measured and improves over two quarters.",
          },
          {
            ar: "الخطوات المتأخّرة ظاهرة في تقرير أسبوعي.",
            en: "Overdue steps appear in a weekly report.",
          },
        ],
        evidenceRequired: [
          {
            ar: "النموذج المعتمد وتقرير التزام لفصلين.",
            en: "The adopted template and a two-quarter compliance report.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يربط إغلاق الاجتماع بنظام المسؤوليات في المكتب فلا تبقى خطوة بلا مالك.",
          en: "Ties meeting closure to the firm's accountability system so no step is left without an owner.",
        },
        observableBehaviors: [
          {
            ar: "يشترط تسجيل كل خطوة في النظام باسم مسؤول واحد وتاريخ.",
            en: "Requires every step to be logged in the system with one owner and a date.",
          },
          {
            ar: "يراجع شهريًا الخطوات المتأخّرة ويعالج أسبابها البنيوية.",
            en: "Reviews overdue steps monthly and addresses their structural causes.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحمّل المسؤول الفرد ما هو خلل في التوزيع.",
            en: "Blames the individual owner for what is a workload allocation problem.",
          },
          {
            ar: "يضاعف التقارير بدل تبسيط الإجراء.",
            en: "Multiplies reports instead of simplifying the procedure.",
          },
        ],
        successCriteria: [
          {
            ar: "لا توجد خطوة في النظام بلا مسؤول محدّد.",
            en: "No step in the system lacks a named owner.",
          },
          {
            ar: "معدّل التأخّر في الخطوات انخفض على مدى سنة.",
            en: "The step-overdue rate fell over a year.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير النظام عن الخطوات ومسؤوليها.",
            en: "A system report on steps and their owners.",
          },
          {
            ar: "محاضر المراجعة الشهرية.",
            en: "Minutes of the monthly review.",
          },
        ],
      },
    ],
    sourceIds: [
      "src.legal-project-management",
      "src.governance-raci",
      "src.ali-rise",
      "src.small-firm-roadmap",
    ],
    confidence: 0.9,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.expectation-management"],
  },
  {
    id: "skill.client-follow-up",
    domainId: "dom.client-relations",
    name: { ar: "المتابعة المكتوبة مع الموكّل", en: "Proactive written follow-up and updates" },
    synonyms: ["client updates", "proactive communication", "status reporting", "إبقاء الموكّل على اطّلاع"],
    definition: {
      ar: "إبلاغ الموكّل بما جدّ في ملفّه قبل أن يسأل، بوتيرة متّفق عليها، وبرسالة قصيرة تقول ما حدث وما التالي ومتى.",
      en: "Telling the client what has happened in his matter before he asks, at an agreed rhythm, in a short message that says what happened, what is next and when.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على انتظام المتدرّب في متابعة الموكّلين.",
          en: "No evidence has been collected yet on the regularity of the learner's client follow-up.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يردّ حين يسأل الموكّل، ولا يبادر بالتحديث.",
          en: "Replies when the client asks, and never initiates an update.",
        },
        observableBehaviors: [
          {
            ar: "يجيب عن رسائل الموكّل خلال أيام قليلة.",
            en: "Answers the client's messages within a few days.",
          },
          {
            ar: "يبلّغ الموكّل بالنتائج الكبرى مثل صدور حكم.",
            en: "Notifies the client of major events such as a judgment being issued.",
          },
        ],
        commonMistakes: [
          {
            ar: "ينتظر تطوّرًا كبيرًا فيمرّ شهر بلا خبر.",
            en: "Waits for a big development, so a month passes with no news.",
          },
          {
            ar: "يعتبر عدم وجود جديد سببًا لعدم التواصل.",
            en: "Treats \"nothing new\" as a reason not to make contact.",
          },
        ],
        successCriteria: [
          {
            ar: "لا توجد رسالة من موكّل بلا ردّ.",
            en: "No client message is left unanswered.",
          },
          {
            ar: "الأحداث الكبرى مبلَّغة.",
            en: "Major events are notified.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ مراسلات ملف واحد.",
            en: "The correspondence log of one matter.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يتّفق مع الموكّل على وتيرة تحديث ويلتزم بها في الملفّات البسيطة.",
          en: "Agrees an update rhythm with the client and keeps to it in simple matters.",
        },
        observableBehaviors: [
          {
            ar: "يحدّد في بداية التوكيل كل كم أسبوع سيصل تحديث.",
            en: "Fixes at the outset how often an update will arrive.",
          },
          {
            ar: "يرسل تحديثًا حتى حين لا يوجد جديد، ويقول ذلك صراحة.",
            en: "Sends an update even when there is nothing new, and says so plainly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعد بتحديث أسبوعي ثم يتراجع إلى شهري بلا إبلاغ.",
            en: "Promises weekly updates then drifts to monthly without telling anyone.",
          },
          {
            ar: "يرسل التحديث بلغة إدارية لا يفهمها الموكّل.",
            en: "Sends the update in administrative language the client cannot follow.",
          },
        ],
        successCriteria: [
          {
            ar: "وتيرة التحديث مكتوبة في خطاب التوكيل.",
            en: "The update rhythm is written into the engagement letter.",
          },
          {
            ar: "التزم بالوتيرة في ملفّين متتاليين.",
            en: "The rhythm was kept in two consecutive matters.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ثلاث رسائل تحديث متتالية من ملف واحد.",
            en: "Three consecutive update messages from one matter.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يكتب تحديثًا مفيدًا: ما حدث، ما يعنيه للموكّل، ما التالي، وما المطلوب منه.",
          en: "Writes a useful update: what happened, what it means for the client, what comes next, and what is needed from him.",
        },
        observableBehaviors: [
          {
            ar: "يبدأ الرسالة بالخلاصة في سطر واحد.",
            en: "Opens the message with the bottom line in one line.",
          },
          {
            ar: "يحدّد بوضوح إن كان مطلوبًا من الموكّل فعل شيء أم لا.",
            en: "States clearly whether the client needs to do anything or not.",
          },
          {
            ar: "يبلّغ بالأخبار السيّئة بالسرعة نفسها التي يبلّغ بها الجيّدة.",
            en: "Reports bad news as promptly as good news.",
          },
        ],
        commonMistakes: [
          {
            ar: "يرسل نسخة عن مستند إجرائي بلا شرح.",
            en: "Forwards a procedural document with no explanation.",
          },
          {
            ar: "يؤجّل الخبر السيّئ إلى التحديث التالي.",
            en: "Holds bad news back to the next update.",
          },
        ],
        successCriteria: [
          {
            ar: "كل تحديث يبدأ بخلاصة ويحدّد المطلوب من الموكّل.",
            en: "Every update opens with a bottom line and states what is required of the client.",
          },
          {
            ar: "الأخبار السيّئة أُبلغت خلال يومي عمل من علم المكتب بها.",
            en: "Bad news was communicated within two working days of the firm learning it.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة تحديث تتضمّن خبرًا سلبيًا وتاريخ إرسالها.",
            en: "An update message carrying negative news, with its send date.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يكيّف المتابعة مع شخصية الموكّل ووضع الملف، ويستبق أسئلته قبل أن تُطرح.",
          en: "Tailors follow-up to the client's temperament and the state of the matter, and pre-empts his questions.",
        },
        observableBehaviors: [
          {
            ar: "يزيد وتيرة التواصل في المراحل الحرجة ويقلّلها في الهدوء بعد إبلاغ الموكّل.",
            en: "Raises contact frequency in critical stages and lowers it in quiet ones, after telling the client.",
          },
          {
            ar: "يجيب في التحديث عن السؤال الذي يتوقّع أن يسأله الموكّل.",
            en: "Answers in the update the question he expects the client to ask.",
          },
        ],
        commonMistakes: [
          {
            ar: "يغيّر الوتيرة دون إبلاغ فيقرأها الموكّل إهمالًا.",
            en: "Changes the rhythm without telling the client, who reads it as neglect.",
          },
          {
            ar: "يفرط في التحديثات فيحوّلها إلى ضجيج.",
            en: "Over-updates until the messages become noise.",
          },
        ],
        successCriteria: [
          {
            ar: "لم يبادر الموكّل بالسؤال عن مستجدّات خلال آخر ثلاثة أشهر.",
            en: "The client did not have to ask for news in the last three months.",
          },
          {
            ar: "كل تغيير في الوتيرة مسبوق بإبلاغ.",
            en: "Every change of rhythm was announced in advance.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ مراسلات ثلاثة أشهر يُظهر المبادرة من جهة المكتب.",
            en: "Three months of correspondence showing the firm initiating contact.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني نظام تحديثات في المكتب يعمل حتى في غياب المحامي المسؤول.",
          en: "Builds a firm update system that keeps working when the responsible lawyer is away.",
        },
        observableBehaviors: [
          {
            ar: "يربط التحديثات بمراحل الملف في النظام لا بذاكرة المحامي.",
            en: "Ties updates to matter stages in the system rather than a lawyer's memory.",
          },
          {
            ar: "يقيس زمن الاستجابة ونسبة التحديثات المرسلة في موعدها.",
            en: "Measures response time and the share of updates sent on time.",
          },
        ],
        commonMistakes: [
          {
            ar: "يؤتمت التحديثات فتصبح رسائل بلا مضمون.",
            en: "Automates updates until they carry no content.",
          },
          {
            ar: "يقيس السرعة ويهمل الوضوح.",
            en: "Measures speed and ignores clarity.",
          },
        ],
        successCriteria: [
          {
            ar: "نسبة التحديثات في موعدها فوق الهدف المعلن لفصلين.",
            en: "On-time update rate exceeds the stated target for two quarters.",
          },
          {
            ar: "غياب محامٍ لم يوقف تحديثات ملفّاته.",
            en: "A lawyer's absence did not stop updates on his matters.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير النظام عن التحديثات لفصلين.",
            en: "The system's update report for two quarters.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل الاستباق في التواصل معيار خدمة معلنًا للموكّلين ومقيسًا داخليًا.",
          en: "Makes proactive communication a service standard published to clients and measured internally.",
        },
        observableBehaviors: [
          {
            ar: "يعلن للموكّلين تعهّدًا بزمن ردّ ووتيرة تحديث ويلتزم به.",
            en: "Publishes a response-time and update-frequency commitment to clients and honours it.",
          },
          {
            ar: "يدرّب الفريق على كتابة التحديث ويراجع عيّنة دوريًا.",
            en: "Trains the team to write updates and reviews a sample periodically.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعلن تعهّدًا لا يملك المكتب طاقة الوفاء به.",
            en: "Publishes a commitment the firm has no capacity to meet.",
          },
          {
            ar: "يستثني الموكّلين الصغار من المعيار.",
            en: "Exempts smaller clients from the standard.",
          },
        ],
        successCriteria: [
          {
            ar: "التعهّد المعلن مطابق للأداء المقيس في أغلب الفترات.",
            en: "The published commitment matches measured performance in most periods.",
          },
          {
            ar: "شكاوى انقطاع التواصل تراجعت خلال سنة.",
            en: "Complaints about communication going silent fell over a year.",
          },
        ],
        evidenceRequired: [
          {
            ar: "التعهّد المنشور مع بيانات الأداء المقابلة.",
            en: "The published commitment together with matching performance data.",
          },
          {
            ar: "نتائج مراجعة عيّنة التحديثات.",
            en: "Results of the update sample review.",
          },
        ],
      },
    ],
    sourceIds: [
      "src.lawyers-ceo",
      "src.small-firm-roadmap",
      "src.68-power-moves",
      "src.client-centered-law-firm",
      "src.managing-professional-service-firm",
    ],
    confidence: 0.94,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.next-steps-closure"],
  },
  {
    id: "skill.difficult-client-basics",
    domainId: "dom.client-relations",
    name: { ar: "التعامل الأوّلي مع موكّل غاضب", en: "First-line handling of an upset client" },
    synonyms: ["de-escalation", "handling complaints", "angry client call", "احتواء الغضب"],
    definition: {
      ar: "امتصاص غضب الموكّل دون دفاع أو مجاراة: الإصغاء، الاعتراف بالأثر، فصل الشكوى عن الانفعال، والخروج بخطوة عملية.",
      en: "Absorbing a client's anger without defensiveness or escalation: listening, acknowledging the impact, separating the complaint from the emotion, and leaving with a practical step.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على تعامل المتدرّب مع موكّل غاضب.",
          en: "No evidence has been collected yet on how the learner handles an upset client.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يتلقّى الغضب شخصيًا فيدافع أو ينسحب.",
          en: "Takes the anger personally and either defends or withdraws.",
        },
        observableBehaviors: [
          {
            ar: "يبقى في المحادثة ولا ينهي المكالمة.",
            en: "Stays in the conversation and does not end the call.",
          },
          {
            ar: "يبلّغ مشرفه بالشكوى بعد المكالمة.",
            en: "Reports the complaint to his supervisor after the call.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبدأ بشرح سبب التأخير قبل أن يفرغ الموكّل.",
            en: "Starts explaining the delay before the client has finished.",
          },
          {
            ar: "يرفع صوته أو يقاطع بردّ فعل مماثل.",
            en: "Raises his voice or interrupts in kind.",
          },
        ],
        successCriteria: [
          {
            ar: "لم تُقطع المكالمة ولم تتحوّل إلى مواجهة.",
            en: "The call was not cut off and did not turn into a confrontation.",
          },
          {
            ar: "الشكوى وصلت إلى المشرف في اليوم نفسه.",
            en: "The complaint reached the supervisor the same day.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير حادثة مكتوب عن مكالمة صعبة.",
            en: "A written incident note about a difficult call.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يتّبع ترتيبًا ثابتًا: اسمع كاملًا، أقرّ بالأثر، اسأل عن الوقائع، ثم اقترح خطوة.",
          en: "Follows a fixed order: hear it out, acknowledge the impact, ask for the facts, then propose a step.",
        },
        observableBehaviors: [
          {
            ar: "يترك الموكّل يتكلّم دون مقاطعة حتى ينتهي.",
            en: "Lets the client speak without interruption until he finishes.",
          },
          {
            ar: "يعترف بأثر الأمر على الموكّل قبل مناقشة الأسباب.",
            en: "Acknowledges the impact on the client before discussing causes.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتذر عن كل شيء بلا تمييز فيقرّ بخطأ لم يقع.",
            en: "Apologises for everything indiscriminately and concedes a fault that did not occur.",
          },
          {
            ar: "ينتقل إلى الحلّ قبل أن يشعر الموكّل بأنه سُمِع.",
            en: "Jumps to a solution before the client feels heard.",
          },
        ],
        successCriteria: [
          {
            ar: "هدأ إيقاع المحادثة قبل مناقشة الحلّ.",
            en: "The pace of the conversation calmed before any solution was discussed.",
          },
          {
            ar: "الشكوى مسجّلة بوقائعها لا بانفعالها.",
            en: "The complaint is recorded by its facts, not its emotion.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر شكوى مكتوب بلغة محايدة.",
            en: "A complaint record written in neutral language.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يخرج من المحادثة بخطوة عملية بتاريخ، ويتابعها بنفسه حتى الإغلاق.",
          en: "Leaves the conversation with a practical dated step and follows it himself to closure.",
        },
        observableBehaviors: [
          {
            ar: "يعرض خطوة واحدة محدّدة بتاريخ بدل وعود عامة.",
            en: "Offers one specific step with a date instead of general promises.",
          },
          {
            ar: "يرسل تلخيصًا مكتوبًا للمحادثة في اليوم نفسه.",
            en: "Sends a written summary of the conversation the same day.",
          },
          {
            ar: "يميّز بين ما يستطيع تغييره وما لا يستطيع ويقوله صراحة.",
            en: "Distinguishes what he can change from what he cannot and says so plainly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعد بتعويض أو تخفيض أتعاب دون صلاحية.",
            en: "Promises compensation or a fee reduction without authority.",
          },
          {
            ar: "ينسى المتابعة فتتحوّل الشكوى إلى نزاع.",
            en: "Forgets the follow-up and the complaint becomes a dispute.",
          },
        ],
        successCriteria: [
          {
            ar: "الخطوة نُفّذت في تاريخها.",
            en: "The step was delivered on its date.",
          },
          {
            ar: "أُغلقت الشكوى بموافقة الموكّل كتابيًا.",
            en: "The complaint was closed with the client's written agreement.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ شكوى مغلقة مع تاريخ الفتح والإغلاق.",
            en: "A closed complaint record with its open and close dates.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يدير مواجهة حادّة أو تهديدًا بسحب التوكيل دون تنازل مهني.",
          en: "Handles a sharp confrontation or a threat to withdraw instructions without a professional concession.",
        },
        observableBehaviors: [
          {
            ar: "يسمّي الانفعال بلغة محايدة ويعيد المحادثة إلى الوقائع.",
            en: "Names the emotion neutrally and steers the conversation back to facts.",
          },
          {
            ar: "يعرض خيار إحالة الملف إلى زميل أو إنهاء التوكيل بطريقة منظّمة.",
            en: "Offers the option of transferring the matter to a colleague or ending the engagement in an orderly way.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقدّم تنازلًا مهنيًا لتهدئة الموكّل.",
            en: "Makes a professional concession to calm the client.",
          },
          {
            ar: "يستمرّ في محادثة فقدت جدواها بدل تحديد موعد لاحق.",
            en: "Continues a conversation that has stopped being useful instead of setting a later time.",
          },
        ],
        successCriteria: [
          {
            ar: "لم يُقدَّم أي تنازل يخالف الواجب المهني.",
            en: "No concession contrary to professional duty was made.",
          },
          {
            ar: "انتهت المحادثة بقرار واضح: استمرار أو إحالة أو إنهاء موثّق.",
            en: "The conversation ended in a clear decision: continue, transfer, or a documented ending.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة مقيّمة لمواجهة حادّة.",
            en: "An assessed simulation of a sharp confrontation.",
          },
          {
            ar: "توثيق القرار المتّخذ في الملف.",
            en: "Documentation of the decision taken, in the file.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يحلّل الشكاوى المتكرّرة ويعالج أسبابها في الإجراءات لا في الأشخاص.",
          en: "Analyses recurring complaints and fixes their causes in procedures rather than in individuals.",
        },
        observableBehaviors: [
          {
            ar: "يصنّف الشكاوى بحسب سببها الجذري ويعرضها فصليًا.",
            en: "Classifies complaints by root cause and reports them quarterly.",
          },
          {
            ar: "يعدّل إجراءً واحدًا على الأقل نتيجة التحليل.",
            en: "Changes at least one procedure as a result of the analysis.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعالج الحالة الفردية ويترك السبب قائمًا.",
            en: "Fixes the individual case and leaves the cause in place.",
          },
          {
            ar: "يخفي الشكاوى عن الفريق حفاظًا على المعنويات.",
            en: "Hides complaints from the team to protect morale.",
          },
        ],
        successCriteria: [
          {
            ar: "تكرار السبب الجذري الأول انخفض بعد التعديل.",
            en: "Recurrence of the top root cause fell after the change.",
          },
          {
            ar: "تصنيف الشكاوى موثّق ومتاح للفريق.",
            en: "The complaint classification is documented and available to the team.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير شكاوى فصلي مع قرار التعديل.",
            en: "A quarterly complaints report with the change decision.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يبني ثقافة تعتبر الشكوى معلومة لا تهديدًا، ويحمي من يبلّغ عنها.",
          en: "Builds a culture that treats a complaint as information rather than a threat, and protects whoever reports it.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد إجراء تصعيد واضحًا يعرفه كل موظّف في المكتب.",
            en: "Adopts a clear escalation procedure every member of the firm knows.",
          },
          {
            ar: "يدرّب الفريق على المحادثات الصعبة بمحاكاة سنوية مقيّمة.",
            en: "Trains the team on difficult conversations with an assessed annual simulation.",
          },
        ],
        commonMistakes: [
          {
            ar: "يربط الشكوى بتقييم أداء الفرد فيختفي الإبلاغ.",
            en: "Links complaints to individual appraisal, and reporting disappears.",
          },
          {
            ar: "يجعل التصعيد بطيئًا فيصل الموكّل إلى النقابة أوّلًا.",
            en: "Makes escalation so slow the client reaches the bar association first.",
          },
        ],
        successCriteria: [
          {
            ar: "متوسّط زمن إغلاق الشكوى انخفض خلال سنة.",
            en: "Average complaint closure time fell over a year.",
          },
          {
            ar: "كل موظّف يعرف إلى من يصعّد وخلال كم من الوقت.",
            en: "Every member of staff knows whom to escalate to and within what time.",
          },
        ],
        evidenceRequired: [
          {
            ar: "إجراء التصعيد المعتمد وسجلّ التدريب عليه.",
            en: "The adopted escalation procedure and its training log.",
          },
          {
            ar: "بيانات زمن إغلاق الشكاوى لسنة.",
            en: "A year of complaint closure time data.",
          },
        ],
      },
    ],
    sourceIds: [
      "src.your-brain-at-work",
      "src.ali-rise",
      "src.small-firm-roadmap",
      "src.managing-professional-service-firm",
    ],
    confidence: 0.92,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.active-listening", "skill.expectation-management"],
  },
  // -------------------------------------------------------------------------
  // dom.legal-english — Legal English for Client Communication
  // -------------------------------------------------------------------------
  {
    id: "skill.le-professional-introduction",
    domainId: "dom.legal-english",
    name: { ar: "التعريف بالنفس بالإنجليزية", en: "Introducing yourself professionally in English" },
    synonyms: ["self-introduction", "stating your role in English", "professional greeting"],
    definition: {
      ar: "تقديم النفس بالإنجليزية للموكّل: الاسم، الصفة، الدور في الملف، وسبب اللقاء، بجمل قصيرة وسجلّ مهني مفهوم.",
      en: "Introducing yourself to a client in English: name, position, role in the matter and purpose of the meeting, in short sentences and an intelligible professional register.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على تعريف المتدرّب بنفسه بالإنجليزية.",
          en: "No evidence has been collected yet on the learner's English self-introduction.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يعرّف بنفسه بكلمات قليلة ويتوقّف عند الاسم.",
          en: "Introduces himself in a few words and stops at the name.",
        },
        observableBehaviors: [
          {
            ar: "يقول اسمه واسم المكتب بجملة مفهومة.",
            en: "Says his name and the firm's name in an intelligible sentence.",
          },
          {
            ar: "يستخدم تحيّة مهنية مناسبة للوقت.",
            en: "Uses a professional greeting appropriate to the time of day.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترجم صيغة عربية حرفيًا فتخرج جملة غير مفهومة.",
            en: "Translates an Arabic formula word for word and produces an unintelligible sentence.",
          },
          {
            ar: "يهمل ذكر صفته فيظنّه الموكّل موظّف استقبال.",
            en: "Omits his position, so the client takes him for reception staff.",
          },
        ],
        successCriteria: [
          {
            ar: "فهم المستمع الاسم والمكتب من المرّة الأولى.",
            en: "The listener understood the name and the firm first time.",
          },
          {
            ar: "التحيّة مناسبة للسياق المهني.",
            en: "The greeting fits the professional context.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل قصير لتعريف بالنفس.",
            en: "A short recording of a self-introduction.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يقدّم تعريفًا من ثلاثة عناصر: الاسم، الصفة، الدور في الملف.",
          en: "Delivers a three-part introduction: name, position, role in the matter.",
        },
        observableBehaviors: [
          {
            ar: "يذكر صفته الوظيفية بمصطلح صحيح.",
            en: "States his position using the correct term.",
          },
          {
            ar: "يوضح دوره في الملف بجملة واحدة.",
            en: "Explains his role in the matter in one sentence.",
          },
          {
            ar: "ينطق اسمه ببطء كافٍ ويهجّئه عند الحاجة.",
            en: "Says his name slowly enough and spells it when needed.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم مسمّى وظيفيًا غير دقيق في السياق الإنجليزي.",
            en: "Uses a job title that is inaccurate in an English context.",
          },
          {
            ar: "يسرد كل مؤهّلاته فيطول التعريف بلا فائدة.",
            en: "Recites every qualification, making the introduction needlessly long.",
          },
        ],
        successCriteria: [
          {
            ar: "العناصر الثلاثة موجودة في أقلّ من ثلاثين ثانية.",
            en: "All three elements appear in under thirty seconds.",
          },
          {
            ar: "لم يطلب المستمع إعادة أي جزء.",
            en: "The listener did not ask for any part to be repeated.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل تعريف من ثلاثة عناصر مع تقييم وضوح.",
            en: "A recording of the three-part introduction with a clarity assessment.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يفتتح مكالمة أو اجتماعًا بالإنجليزية كاملًا: تعريف، سبب الاتصال، ومدّة متوقّعة.",
          en: "Opens a call or meeting fully in English: introduction, purpose of contact and expected length.",
        },
        observableBehaviors: [
          {
            ar: "يذكر سبب اللقاء بجملة واحدة قبل الدخول في التفاصيل.",
            en: "States the purpose of the meeting in one sentence before any detail.",
          },
          {
            ar: "يتحقّق من أن الوقت مناسب للمستمع.",
            en: "Checks that the time suits the listener.",
          },
          {
            ar: "يستخدم سجلًّا رسميًا مع موكّل جديد وأقلّ رسمية مع موكّل معروف.",
            en: "Uses a formal register with a new client and a lighter one with a familiar client.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم صيغًا شديدة الرسمية تبدو متكلّفة.",
            en: "Uses over-formal phrasing that sounds stilted.",
          },
          {
            ar: "يدخل في الموضوع قبل التأكّد من هوية المتحدّث.",
            en: "Starts on the substance before confirming who is on the line.",
          },
        ],
        successCriteria: [
          {
            ar: "الافتتاح تضمّن التعريف والسبب والمدّة.",
            en: "The opening covered introduction, purpose and length.",
          },
          {
            ar: "السجلّ مناسب لنوع العلاقة.",
            en: "The register matched the type of relationship.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل افتتاح مكالمة مقيّم بحسب معيار الإنجليزية المحكيّة.",
            en: "A recorded call opening assessed against the spoken Legal English rubric.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يعرّف بنفسه في سياقات صعبة: مكالمة جماعية، أو موكّل مؤسسي، أو اجتماع مع محامي الطرف الآخر.",
          en: "Introduces himself in demanding contexts: a conference call, an institutional client, or a meeting with opposing counsel.",
        },
        observableBehaviors: [
          {
            ar: "يعرّف بنفسه وبفريقه ويحدّد من سيتولّى كل جزء.",
            en: "Introduces himself and his team and states who will take which part.",
          },
          {
            ar: "يعدّل السجلّ حين ينضمّ طرف جديد إلى المكالمة.",
            en: "Adjusts the register when a new participant joins the call.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفترض أن الجميع يعرف من يتكلّم في مكالمة جماعية.",
            en: "Assumes everyone knows who is speaking on a conference call.",
          },
          {
            ar: "يستخدم اختصارات محلّية غير مفهومة دوليًا.",
            en: "Uses local abbreviations that mean nothing internationally.",
          },
        ],
        successCriteria: [
          {
            ar: "عرف كل المشاركين هوية المتحدّث ودوره.",
            en: "All participants knew who was speaking and in what role.",
          },
          {
            ar: "لم تُطلب إعادة أي معلومة تعريفية.",
            en: "No introductory information had to be repeated.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة مكالمة جماعية مقيّمة.",
            en: "An assessed conference-call simulation.",
          },
          {
            ar: "ملاحظات مقيّم على السجلّ اللغوي.",
            en: "Assessor notes on register.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضع صيغ تعريف موحّدة للمكتب بالإنجليزية ويدرّب الفريق عليها.",
          en: "Sets standard English introduction forms for the firm and trains the team on them.",
        },
        observableBehaviors: [
          {
            ar: "يكتب صيغًا معتمدة للمسمّيات الوظيفية بالإنجليزية.",
            en: "Writes approved English equivalents for the firm's job titles.",
          },
          {
            ar: "يراجع تسجيلات تدريبية ويعطي ملاحظات على الوضوح لا اللكنة.",
            en: "Reviews practice recordings and comments on clarity, never on accent.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقيّم اللكنة بدل الوضوح فيثبّط المتدرّبين.",
            en: "Grades accent instead of clarity and discourages learners.",
          },
          {
            ar: "يفرض صيغة واحدة لكل السياقات.",
            en: "Imposes one form for every context.",
          },
        ],
        successCriteria: [
          {
            ar: "المسمّيات الإنجليزية موحّدة في مراسلات المكتب.",
            en: "English job titles are consistent across the firm's correspondence.",
          },
          {
            ar: "الملاحظات التدريبية خالية من أي إشارة إلى اللكنة.",
            en: "Coaching notes contain no reference to accent.",
          },
        ],
        evidenceRequired: [
          {
            ar: "دليل المسمّيات المعتمد وسجلّ ملاحظات تدريبية.",
            en: "The approved titles guide and a coaching feedback log.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يقود برنامج الإنجليزية المهنية في المكتب ويجعل معايير الوضوح مكتوبة ومقيسة.",
          en: "Leads the firm's professional English programme and makes clarity standards written and measured.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد معيارًا مكتوبًا للوضوح والسجلّ لا يتضمّن اللكنة.",
            en: "Adopts a written clarity and register standard that excludes accent.",
          },
          {
            ar: "يقيس تقدّم الفريق بتقييمين سنويًا.",
            en: "Measures the team's progress with two assessments a year.",
          },
        ],
        commonMistakes: [
          {
            ar: "يربط الترقية بمستوى لغوي دون توفير تدريب.",
            en: "Ties promotion to a language level without providing training.",
          },
          {
            ar: "يقيس الحضور لا الأداء.",
            en: "Measures attendance rather than performance.",
          },
        ],
        successCriteria: [
          {
            ar: "المعيار معتمد ومطبّق على كل المستويات.",
            en: "The standard is adopted and applied at every level.",
          },
          {
            ar: "نتائج التقييم تُظهر تحسّنًا خلال سنة.",
            en: "Assessment results show improvement over a year.",
          },
        ],
        evidenceRequired: [
          {
            ar: "المعيار المكتوب ونتائج تقييمين.",
            en: "The written standard and the results of two assessments.",
          },
        ],
      },
    ],
    sourceIds: ["src.making-your-case", "src.introverted-leader", "src.game-changing-attorney"],
    confidence: 0.72,
    reviewStatus: "ai_suggested",
    languageTrack: true,
  },
  {
    id: "skill.le-welcoming-client",
    domainId: "dom.legal-english",
    name: { ar: "استقبال الموكّل بالإنجليزية", en: "Welcoming a client in English" },
    synonyms: ["small talk", "receiving a client", "opening courtesies"],
    definition: {
      ar: "استقبال الموكّل بالإنجليزية بعبارات ترحيب مناسبة ثقافيًا، وتهيئة الجوّ للقاء دون إطالة أو تكلّف.",
      en: "Receiving a client in English with culturally appropriate welcome language, settling the room without over-running or sounding forced.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على أسلوب المتدرّب في الاستقبال بالإنجليزية.",
          en: "No evidence has been collected yet on the learner's English welcome.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يستقبل بكلمة ترحيب واحدة ثم يصمت.",
          en: "Offers a single word of welcome and then falls silent.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم عبارة ترحيب مفهومة.",
            en: "Uses an intelligible welcome phrase.",
          },
          {
            ar: "يشير إلى مكان الجلوس بجملة واضحة.",
            en: "Indicates where to sit in a clear sentence.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم عبارة عامّية لا تناسب السياق المهني.",
            en: "Uses a colloquial phrase that does not fit a professional setting.",
          },
          {
            ar: "يترك صمتًا محرجًا لا يعرف كيف يملؤه.",
            en: "Leaves an awkward silence he does not know how to fill.",
          },
        ],
        successCriteria: [
          {
            ar: "الموكّل عرف أين يجلس ومتى يبدأ.",
            en: "The client knew where to sit and when to begin.",
          },
          {
            ar: "عبارة الترحيب مفهومة ومناسبة.",
            en: "The welcome phrase was intelligible and appropriate.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل استقبال قصير.",
            en: "A short recording of a welcome.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يستخدم ثلاث عبارات ترحيب مناسبة ويعرض ضيافة بسيطة بالإنجليزية.",
          en: "Uses three appropriate welcome phrases and offers simple hospitality in English.",
        },
        observableBehaviors: [
          {
            ar: "يسأل عن الرحلة أو الوصول بجملة قصيرة.",
            en: "Asks a short question about the journey or arrival.",
          },
          {
            ar: "يعرض الماء أو القهوة بصيغة مهذّبة.",
            en: "Offers water or coffee in a polite form.",
          },
        ],
        commonMistakes: [
          {
            ar: "يطيل الحديث الاجتماعي فيقلّص وقت الملف.",
            en: "Lets the small talk run and squeezes the time for the matter.",
          },
          {
            ar: "يسأل سؤالًا شخصيًا مبكرًا جدًّا.",
            en: "Asks a personal question far too early.",
          },
        ],
        successCriteria: [
          {
            ar: "الاستقبال لم يتجاوز دقيقتين.",
            en: "The welcome did not exceed two minutes.",
          },
          {
            ar: "العبارات مهذّبة ومناسبة ثقافيًا.",
            en: "The phrases were polite and culturally appropriate.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل استقبال مقيّم بحسب معيار السجلّ.",
            en: "A recorded welcome assessed against the register criterion.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "ينتقل بسلاسة من الترحيب إلى العمل بجملة انتقال واضحة.",
          en: "Moves smoothly from welcome to business with a clear transition sentence.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم جملة انتقال تعلن بدء العمل.",
            en: "Uses a transition sentence that signals the start of business.",
          },
          {
            ar: "يذكر مدّة اللقاء وجدوله بالإنجليزية.",
            en: "States the length and agenda of the meeting in English.",
          },
        ],
        commonMistakes: [
          {
            ar: "ينتقل فجأة فيبدو الترحيب مصطنعًا.",
            en: "Switches abruptly so the welcome seems artificial.",
          },
          {
            ar: "يخلط بين العربية والإنجليزية في الجملة الواحدة دون قصد.",
            en: "Mixes Arabic and English inside one sentence without meaning to.",
          },
        ],
        successCriteria: [
          {
            ar: "الانتقال إلى العمل واضح وغير مفاجئ.",
            en: "The move to business was clear and not abrupt.",
          },
          {
            ar: "الجدول والمدّة مذكوران بالإنجليزية.",
            en: "The agenda and length were stated in English.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل يتضمّن الترحيب وجملة الانتقال.",
            en: "A recording containing the welcome and the transition sentence.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يستقبل موكّلًا من ثقافة مختلفة أو مجموعة، ويضبط السجلّ حسب رسمية الموقف.",
          en: "Welcomes a client from a different culture, or a group, and calibrates register to the formality of the situation.",
        },
        observableBehaviors: [
          {
            ar: "يتحقّق من طريقة مخاطبة الموكّل المفضّلة ويستخدمها.",
            en: "Checks how the client prefers to be addressed and uses it.",
          },
          {
            ar: "يوزّع الانتباه على كل الحاضرين لا على المتحدّث الرئيسي فقط.",
            en: "Distributes attention across everyone present, not only the main speaker.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم الاسم الأول مع من يتوقّع اللقب.",
            en: "Uses a first name with someone who expects a title.",
          },
          {
            ar: "يفترض أن الرسمية الغربية تناسب كل موكّل أجنبي.",
            en: "Assumes Western formality suits every foreign client.",
          },
        ],
        successCriteria: [
          {
            ar: "طريقة المخاطبة صحيحة طوال اللقاء.",
            en: "The form of address was correct throughout.",
          },
          {
            ar: "تحدّث كل الحاضرين مرّة واحدة على الأقل.",
            en: "Everyone present spoke at least once.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة استقبال مجموعة مقيّمة.",
            en: "An assessed group-welcome simulation.",
          },
          {
            ar: "ملاحظات مقيّم على ملاءمة السجلّ.",
            en: "Assessor notes on the appropriateness of register.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضع بنك عبارات استقبال للمكتب ويدرّب الاستقبال والمحامين عليه.",
          en: "Builds a welcome phrase bank for the firm and trains reception and lawyers on it.",
        },
        observableBehaviors: [
          {
            ar: "يجمع عبارات معتمدة مصنّفة بحسب درجة الرسمية.",
            en: "Assembles approved phrases classified by level of formality.",
          },
          {
            ar: "يجرّب البنك على موكّلين ناطقين بالإنجليزية قبل اعتماده.",
            en: "Tests the bank with English-speaking clients before adopting it.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجمع عبارات من مصادر غير مهنية.",
            en: "Collects phrases from non-professional sources.",
          },
          {
            ar: "يحوّل البنك إلى نصّ يُحفظ حرفيًا.",
            en: "Turns the bank into a script to be memorised word for word.",
          },
        ],
        successCriteria: [
          {
            ar: "البنك مستخدم فعليًا في المكتب.",
            en: "The bank is actually used in the firm.",
          },
          {
            ar: "العبارات مصنّفة بحسب الرسمية.",
            en: "The phrases are classified by formality.",
          },
        ],
        evidenceRequired: [
          {
            ar: "بنك العبارات المعتمد.",
            en: "The adopted phrase bank.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل تجربة الاستقبال بالإنجليزية معيارًا مقيسًا في المكتب.",
          en: "Makes the English welcome experience a measured firm standard.",
        },
        observableBehaviors: [
          {
            ar: "يدرّب فريق الاستقبال ويقيّمه دوريًا.",
            en: "Trains reception staff and assesses them periodically.",
          },
          {
            ar: "يجمع ملاحظات موكّلين ناطقين بالإنجليزية عن أول تعامل.",
            en: "Collects feedback from English-speaking clients about first contact.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقيّم المحامين ويستثني الموظّفين.",
            en: "Assesses lawyers and exempts support staff.",
          },
          {
            ar: "يهمل تدريب من يردّ على الهاتف.",
            en: "Neglects to train whoever answers the phone.",
          },
        ],
        successCriteria: [
          {
            ar: "ملاحظات الموكّلين الناطقين بالإنجليزية موثّقة سنويًا.",
            en: "Feedback from English-speaking clients is documented yearly.",
          },
          {
            ar: "فريق الاستقبال مدرّب ومقيَّم.",
            en: "Reception staff are trained and assessed.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ تدريب فريق الاستقبال.",
            en: "The reception training log.",
          },
          {
            ar: "تقرير ملاحظات الموكّلين.",
            en: "The client feedback report.",
          },
        ],
      },
    ],
    sourceIds: ["src.68-power-moves", "src.lawyers-ceo", "src.client-centered-law-firm"],
    confidence: 0.68,
    reviewStatus: "ai_suggested",
    languageTrack: true,
    prerequisiteSkillIds: ["skill.le-professional-introduction"],
  },
  {
    id: "skill.le-background-questions",
    domainId: "dom.legal-english",
    name: { ar: "أسئلة الخلفية بالإنجليزية", en: "Asking background questions in English" },
    synonyms: ["fact-finding questions in English", "opening questions", "information gathering"],
    definition: {
      ar: "صياغة أسئلة الخلفية بالإنجليزية بترتيب مفهوم، مع اختيار الزمن الصحيح والصيغة المهذّبة التي لا تبدو استجوابًا.",
      en: "Framing background questions in English in a followable order, with the right tense and a polite form that does not sound like an interrogation.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على أسئلة الخلفية بالإنجليزية لدى المتدرّب.",
          en: "No evidence has been collected yet on the learner's English background questions.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يسأل أسئلة قصيرة مفهومة لكن أغلبها مغلق.",
          en: "Asks short intelligible questions, most of them closed.",
        },
        observableBehaviors: [
          {
            ar: "يسأل عن الاسم والتاريخ والمكان بجمل صحيحة.",
            en: "Asks about name, date and place in correct sentences.",
          },
          {
            ar: "يعيد السؤال ببطء عند عدم الفهم.",
            en: "Repeats the question slowly when not understood.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم الزمن الحاضر لوقائع ماضية.",
            en: "Uses the present tense for past events.",
          },
          {
            ar: "يصوغ السؤال بصيغة الأمر فيبدو حادًّا.",
            en: "Frames the question as a command and sounds abrupt.",
          },
        ],
        successCriteria: [
          {
            ar: "الوقائع الأساسية جُمعت بالإنجليزية.",
            en: "The basic facts were gathered in English.",
          },
          {
            ar: "الأسئلة مفهومة من المرّة الأولى في أغلبها.",
            en: "Most questions were understood first time.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نصّ مكتوب لعشرة أسئلة خلفية.",
            en: "A written set of ten background questions.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يستخدم صيغًا مهذّبة ويبدأ بسؤال مفتوح واحد على الأقل.",
          en: "Uses polite forms and opens with at least one open question.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم صيغة تمهيدية مهذّبة قبل السؤال الحسّاس.",
            en: "Uses a polite lead-in before a sensitive question.",
          },
          {
            ar: "يستخدم الأزمنة الماضية بشكل صحيح في سرد الوقائع.",
            en: "Uses past tenses correctly when covering events.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرط في التمهيد فيضيع السؤال.",
            en: "Over-pads the lead-in until the question disappears.",
          },
          {
            ar: "يستخدم مصطلحًا قانونيًا إنجليزيًا لا يفهمه الموكّل.",
            en: "Uses an English legal term the client does not know.",
          },
        ],
        successCriteria: [
          {
            ar: "سؤال مفتوح واحد على الأقل في بداية المقابلة.",
            en: "At least one open question at the start of the interview.",
          },
          {
            ar: "الأزمنة صحيحة في أغلب الأسئلة.",
            en: "Tenses are correct in most questions.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل مقابلة قصيرة مع تصحيح لغوي.",
            en: "A short interview recording with language corrections.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يدير مقابلة خلفية كاملة بالإنجليزية بترتيب منطقي ويتحقّق من الفهم أثناءها.",
          en: "Runs a full background interview in English in a logical order and checks comprehension as he goes.",
        },
        observableBehaviors: [
          {
            ar: "يجمّع الأسئلة في مجموعات موضوعية ويعلن الانتقال بينها.",
            en: "Groups questions by topic and announces the move between groups.",
          },
          {
            ar: "يلخّص كل مجموعة بجملة ويطلب التأكيد.",
            en: "Summarises each group in a sentence and asks for confirmation.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقفز بين الموضوعات فيرتبك الموكّل.",
            en: "Jumps between topics and confuses the client.",
          },
          {
            ar: "يفترض الفهم من إجابة قصيرة بنعم.",
            en: "Infers understanding from a short yes.",
          },
        ],
        successCriteria: [
          {
            ar: "الوقائع مرتّبة موضوعيًا في المحضر.",
            en: "The facts are grouped by topic in the record.",
          },
          {
            ar: "تأكيد الموكّل مسجّل بعد كل مجموعة.",
            en: "The client's confirmation is recorded after each group.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر مقابلة بالإنجليزية مقيّم بحسب المعيار المحكيّ.",
            en: "An English interview record assessed against the spoken rubric.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يستجلي وقائع حسّاسة بالإنجليزية دون أن يبدو متّهِمًا، ويتعامل مع لهجات مختلفة.",
          en: "Draws out sensitive facts in English without sounding accusatory, and copes with unfamiliar accents.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم صيغًا غير مباشرة للسؤال عن أمر محرج.",
            en: "Uses indirect forms to ask about something embarrassing.",
          },
          {
            ar: "يطلب الإعادة أو التوضيح بأدب حين لا يفهم اللهجة.",
            en: "Politely asks for repetition or clarification when an accent is unfamiliar.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتظاهر بالفهم فيسجّل واقعة خاطئة.",
            en: "Pretends to understand and records a wrong fact.",
          },
          {
            ar: "يستخدم صيغة شرطية توحي بالشكّ في صدق الموكّل.",
            en: "Uses a conditional form that implies doubt about the client's honesty.",
          },
        ],
        successCriteria: [
          {
            ar: "لا توجد واقعة مسجّلة على أساس فهم غير مؤكّد.",
            en: "No fact was recorded on the basis of uncertain comprehension.",
          },
          {
            ar: "الأسئلة الحسّاسة طُرحت وأُجيب عنها.",
            en: "The sensitive questions were asked and answered.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة مقابلة مع متحدّث بلهجة غير مألوفة.",
            en: "A simulated interview with a speaker of an unfamiliar accent.",
          },
          {
            ar: "تقييم مقيّم للوضوح والاحترام.",
            en: "An assessor's rating for clarity and respect.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضع أدلّة أسئلة بالإنجليزية حسب نوع الملف ويراجع مقابلات الزملاء.",
          en: "Builds English question guides by matter type and reviews colleagues' interviews.",
        },
        observableBehaviors: [
          {
            ar: "يضع دليل أسئلة إنجليزي لنوع ملف واحد ويختبره.",
            en: "Writes an English question guide for one matter type and tests it.",
          },
          {
            ar: "يعطي ملاحظات على صياغة الأسئلة لا على اللكنة.",
            en: "Gives feedback on question wording, not on accent.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترجم دليلًا عربيًا حرفيًا.",
            en: "Translates an Arabic guide word for word.",
          },
          {
            ar: "يهمل تحديث الدليل بعد تغيّر الإجراءات.",
            en: "Neglects to update the guide after procedures change.",
          },
        ],
        successCriteria: [
          {
            ar: "الدليل مستخدم من زميل آخر.",
            en: "The guide is used by another colleague.",
          },
          {
            ar: "ملاحظات المراجعة موثّقة وخالية من تقييم اللكنة.",
            en: "Review notes are documented and free of accent judgments.",
          },
        ],
        evidenceRequired: [
          {
            ar: "الدليل وسجلّ الملاحظات.",
            en: "The guide and the feedback log.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يعتمد معيار مقابلة بالإنجليزية للمكتب ويقيس أثره على جودة الوقائع.",
          en: "Adopts a firm-wide English interview standard and measures its effect on fact quality.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد معيارًا مكتوبًا للمقابلة بالإنجليزية.",
            en: "Adopts a written standard for English interviews.",
          },
          {
            ar: "يقيس حالات الوقائع الناقصة في الملفّات الإنجليزية.",
            en: "Measures incomplete-fact incidents in English-language matters.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض المعيار دون تدريب لغوي مرافق.",
            en: "Imposes the standard without accompanying language training.",
          },
          {
            ar: "يستخدم اللغة معيار ترقية بلا دعم.",
            en: "Uses language as a promotion criterion with no support offered.",
          },
        ],
        successCriteria: [
          {
            ar: "حالات الوقائع الناقصة انخفضت خلال سنة.",
            en: "Incomplete-fact incidents fell over a year.",
          },
          {
            ar: "كل محامٍ يعمل بالإنجليزية اجتاز تقييم المقابلة.",
            en: "Every lawyer working in English has passed the interview assessment.",
          },
        ],
        evidenceRequired: [
          {
            ar: "المعيار المعتمد وبيانات سنة.",
            en: "The adopted standard and a year of data.",
          },
          {
            ar: "سجلّ اجتياز التقييم.",
            en: "The assessment pass log.",
          },
        ],
      },
    ],
    sourceIds: ["src.maccarthy-cross-exam", "src.managing-professional-service-firm", "src.making-your-case"],
    confidence: 0.7,
    reviewStatus: "ai_suggested",
    languageTrack: true,
    prerequisiteSkillIds: ["skill.le-welcoming-client"],
  },
  {
    id: "skill.le-clarifying-facts",
    domainId: "dom.legal-english",
    name: { ar: "توضيح الوقائع بالإنجليزية", en: "Clarifying facts in English" },
    synonyms: ["checking understanding", "paraphrasing in English", "confirming details"],
    definition: {
      ar: "التأكّد من دقّة ما فُهم بالإنجليزية عبر إعادة الصياغة وطلب التأكيد، والتعامل مع الغموض دون إحراج الموكّل.",
      en: "Making sure what was understood in English is accurate, through paraphrase and confirmation, and handling ambiguity without embarrassing the client.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على توضيح الوقائع بالإنجليزية.",
          en: "No evidence has been collected yet on the learner's fact clarification in English.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يطلب الإعادة حين لا يفهم، دون إعادة صياغة.",
          en: "Asks for repetition when he does not understand, without paraphrasing.",
        },
        observableBehaviors: [
          {
            ar: "يقول إنه لم يفهم بدل التظاهر بالفهم.",
            en: "Says he did not understand instead of pretending he did.",
          },
          {
            ar: "يطلب تهجئة الأسماء والأرقام.",
            en: "Asks for names and numbers to be spelled out.",
          },
        ],
        commonMistakes: [
          {
            ar: "يكرّر طلب الإعادة بالصيغة نفسها ثلاث مرّات.",
            en: "Repeats the same request for repetition three times.",
          },
          {
            ar: "يسجّل رقمًا سمعه خطأ دون تأكيده.",
            en: "Records a misheard number without confirming it.",
          },
        ],
        successCriteria: [
          {
            ar: "الأسماء والأرقام مؤكّدة في المحضر.",
            en: "Names and numbers are confirmed in the record.",
          },
          {
            ar: "لم يُسجَّل ما لم يُفهم.",
            en: "Nothing was recorded that was not understood.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر يُظهر تأكيد الأرقام والأسماء.",
            en: "A record showing confirmation of numbers and names.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يعيد الصياغة بجملة قصيرة ويطلب تأكيدًا صريحًا.",
          en: "Paraphrases in a short sentence and asks for explicit confirmation.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم صيغة إعادة صياغة قياسية ثم يسأل عن صحّتها.",
            en: "Uses a standard paraphrase form and then asks whether it is right.",
          },
          {
            ar: "يفصل الوقائع عن الاستنتاجات في إعادة الصياغة.",
            en: "Separates facts from conclusions in the paraphrase.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعيد الكلمات نفسها بدل صياغتها بأسلوبه.",
            en: "Repeats the same words instead of restating them in his own.",
          },
          {
            ar: "يضيف في إعادة الصياغة معلومة لم تُذكر.",
            en: "Adds information to the paraphrase that was never said.",
          },
        ],
        successCriteria: [
          {
            ar: "كل واقعة جوهرية أُعيدت صياغتها وأُكّدت.",
            en: "Every material fact was paraphrased and confirmed.",
          },
          {
            ar: "لا إضافة في إعادة الصياغة.",
            en: "No addition appears in the paraphrase.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل يتضمّن ثلاث إعادات صياغة.",
            en: "A recording containing three paraphrases.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يتعامل مع الغموض والتناقض بالإنجليزية بلغة محايدة ويصل إلى رواية دقيقة.",
          en: "Handles ambiguity and contradiction in English in neutral language and arrives at an accurate account.",
        },
        observableBehaviors: [
          {
            ar: "يسمّي التناقض بصيغة محايدة ويطلب التوفيق بينهما.",
            en: "Names the contradiction in a neutral form and asks how the two fit together.",
          },
          {
            ar: "يستخدم أسئلة توضيح محدّدة بدل «هل يمكنك التوضيح؟».",
            en: "Uses specific clarifying questions rather than \"can you clarify?\".",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم صيغة تبدو اتّهامية بالإنجليزية دون قصد.",
            en: "Uses a form that sounds accusatory in English without meaning to.",
          },
          {
            ar: "يترك التناقض في المحضر بلا معالجة.",
            en: "Leaves the contradiction in the record unresolved.",
          },
        ],
        successCriteria: [
          {
            ar: "التناقضات معالجة أو مسجّلة صراحة كنقاط مفتوحة.",
            en: "Contradictions are resolved or expressly logged as open points.",
          },
          {
            ar: "لم يعترض الموكّل على أسلوب التوضيح.",
            en: "The client did not object to how clarification was sought.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر يوثّق معالجة تناقض واحد على الأقل.",
            en: "A record documenting the handling of at least one contradiction.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يوضّح الوقائع في مكالمة بلا صورة أو في وثيقة معقّدة بالإنجليزية.",
          en: "Clarifies facts on an audio-only call or inside a complex English document.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم التلخيص المرحلي في المكالمات الطويلة.",
            en: "Uses staged summaries in long calls.",
          },
          {
            ar: "يشير إلى بند أو سطر محدّد في الوثيقة عند التوضيح.",
            en: "Points to a specific clause or line in the document when clarifying.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتمد على الذاكرة في مكالمة طويلة.",
            en: "Relies on memory in a long call.",
          },
          {
            ar: "يفترض أن الموكّل يقرأ الوثيقة نفسها أمامه.",
            en: "Assumes the client has the same document open.",
          },
        ],
        successCriteria: [
          {
            ar: "محضر المكالمة مطابق لما أكّده الموكّل.",
            en: "The call record matches what the client confirmed.",
          },
          {
            ar: "الإحالات إلى الوثيقة دقيقة.",
            en: "References to the document are exact.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر مكالمة طويلة مع تأكيد مكتوب من الموكّل.",
            en: "A long-call record with the client's written confirmation.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضع صيغ توضيح معتمدة للمكتب ويدرّب عليها لتفادي سوء الفهم.",
          en: "Sets approved clarification forms for the firm and trains them to prevent misunderstanding.",
        },
        observableBehaviors: [
          {
            ar: "يوثّق صيغ إعادة الصياغة الأكثر فاعلية.",
            en: "Documents the most effective paraphrase forms.",
          },
          {
            ar: "يراجع محاضر المكالمات الإنجليزية بحثًا عن فجوات فهم.",
            en: "Reviews English call records for comprehension gaps.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفترض أن الصيغة الواحدة تصلح لكل الموكّلين.",
            en: "Assumes one form suits every client.",
          },
          {
            ar: "يراجع المحاضر ولا يعطي ملاحظات.",
            en: "Reviews the records without giving feedback.",
          },
        ],
        successCriteria: [
          {
            ar: "فجوات الفهم الموثّقة تراجعت.",
            en: "Documented comprehension gaps have declined.",
          },
          {
            ar: "الصيغ المعتمدة متاحة للفريق.",
            en: "The approved forms are available to the team.",
          },
        ],
        evidenceRequired: [
          {
            ar: "دليل الصيغ ونتائج مراجعة محاضر.",
            en: "The forms guide and the results of a record review.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل تأكيد الفهم شرطًا إجرائيًا في الملفّات الإنجليزية.",
          en: "Makes confirmation of understanding a procedural requirement in English-language matters.",
        },
        observableBehaviors: [
          {
            ar: "يشترط تأكيدًا مكتوبًا من الموكّل على ملخّص الوقائع الإنجليزي.",
            en: "Requires the client's written confirmation of the English statement of facts.",
          },
          {
            ar: "يراجع سنويًا حالات سوء الفهم اللغوي وأثرها.",
            en: "Reviews yearly the incidents of language misunderstanding and their impact.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجعل التأكيد إجراءً شكليًا بلا قراءة.",
            en: "Lets the confirmation become a formality nobody reads.",
          },
          {
            ar: "يهمل الملفّات ثنائية اللغة.",
            en: "Overlooks bilingual matters.",
          },
        ],
        successCriteria: [
          {
            ar: "كل ملف إنجليزي يحتوي على تأكيد مكتوب.",
            en: "Every English matter contains a written confirmation.",
          },
          {
            ar: "حالات سوء الفهم اللغوي مقيسة وتتراجع.",
            en: "Language misunderstanding incidents are measured and declining.",
          },
        ],
        evidenceRequired: [
          {
            ar: "الإجراء المعتمد وعيّنة تدقيق.",
            en: "The adopted procedure and an audit sample.",
          },
          {
            ar: "التقرير السنوي عن سوء الفهم.",
            en: "The annual misunderstanding report.",
          },
        ],
      },
    ],
    sourceIds: ["src.managing-professional-service-firm", "src.making-your-case", "src.legal-project-management"],
    confidence: 0.71,
    reviewStatus: "ai_suggested",
    languageTrack: true,
    prerequisiteSkillIds: ["skill.le-background-questions"],
  },
  {
    id: "skill.le-explaining-next-steps",
    domainId: "dom.legal-english",
    name: { ar: "شرح الخطوات التالية بالإنجليزية", en: "Explaining next steps in English" },
    synonyms: ["procedure explanation in English", "sequencing language", "process language"],
    definition: {
      ar: "شرح الإجراء القادم بالإنجليزية بترتيب زمني واضح، باستخدام روابط التسلسل وصيغ الالتزام الصحيحة.",
      en: "Explaining the coming procedure in English in clear chronological order, using sequencing links and the right forms of commitment.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على شرح المتدرّب للخطوات بالإنجليزية.",
          en: "No evidence has been collected yet on the learner's English explanation of next steps.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يذكر خطوة واحدة تالية بجملة بسيطة.",
          en: "Names one next step in a simple sentence.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم زمن المستقبل البسيط بشكل صحيح.",
            en: "Uses the simple future correctly.",
          },
          {
            ar: "يذكر من سينفّذ الخطوة.",
            en: "Says who will carry out the step.",
          },
        ],
        commonMistakes: [
          {
            ar: "يخلط بين صيغ المستقبل فيبدو الالتزام غير مؤكّد.",
            en: "Mixes future forms so the commitment sounds uncertain.",
          },
          {
            ar: "يترك التسلسل بلا روابط فتبدو الخطوات متزامنة.",
            en: "Leaves the sequence without links so the steps sound simultaneous.",
          },
        ],
        successCriteria: [
          {
            ar: "الخطوة التالية مفهومة ومحدّدة المسؤول.",
            en: "The next step is understood and its owner identified.",
          },
          {
            ar: "زمن الفعل صحيح.",
            en: "The verb tense is correct.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نصّ مكتوب لشرح خطوة واحدة.",
            en: "A written explanation of one step.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يشرح ثلاث خطوات مرتّبة بروابط تسلسل واضحة.",
          en: "Explains three ordered steps with clear sequencing links.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم روابط ترتيب صحيحة بين الخطوات.",
            en: "Uses correct ordering links between steps.",
          },
          {
            ar: "يربط كل خطوة بمهلة زمنية تقريبية.",
            en: "Attaches an approximate time frame to each step.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم مصطلحًا إجرائيًا إنجليزيًا بلا تعريف.",
            en: "Uses an English procedural term without defining it.",
          },
          {
            ar: "يخلط بين الخطوات التي على المكتب وتلك التي على الموكّل.",
            en: "Blurs which steps fall on the firm and which on the client.",
          },
        ],
        successCriteria: [
          {
            ar: "الخطوات الثلاث مرتّبة ومفهومة.",
            en: "The three steps are ordered and understood.",
          },
          {
            ar: "مسؤولية كل خطوة واضحة.",
            en: "Responsibility for each step is clear.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة إنجليزية تشرح ثلاث خطوات.",
            en: "An English message explaining three steps.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يشرح إجراءً كاملًا بالإنجليزية مع التمييز بين المؤكّد والمشروط.",
          en: "Explains a full procedure in English, distinguishing what is certain from what is conditional.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم الصيغ الشرطية للحالات غير المؤكّدة.",
            en: "Uses conditional forms for uncertain outcomes.",
          },
          {
            ar: "يتحقّق من الفهم بطلب إعادة صياغة الخطوة التالية.",
            en: "Checks understanding by asking for the next step to be said back.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم صيغة قاطعة لأمر مشروط.",
            en: "Uses a categorical form for something conditional.",
          },
          {
            ar: "يشرح الإجراء كاملًا بلا توقّف للتحقّق.",
            en: "Runs through the whole procedure without pausing to check.",
          },
        ],
        successCriteria: [
          {
            ar: "الشرط والاحتمال ظاهران في اللغة المستخدمة.",
            en: "Condition and likelihood are visible in the language used.",
          },
          {
            ar: "أعاد الموكّل صياغة الخطوة التالية صحيحة.",
            en: "The client restated the next step correctly.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل شرح إجراء مقيّم بحسب المعيار المحكيّ.",
            en: "A recorded procedure explanation assessed against the spoken rubric.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يشرح إجراءً معقّدًا أو تغيّرًا مفاجئًا في المسار بالإنجليزية ويجيب عن الأسئلة فورًا.",
          en: "Explains a complex procedure or a sudden change of course in English and answers questions on the spot.",
        },
        observableBehaviors: [
          {
            ar: "يبدأ بالخلاصة ثم يعطي التفصيل عند الطلب.",
            en: "Leads with the bottom line and gives detail on request.",
          },
          {
            ar: "يشرح سبب تغيّر المسار بلغة محايدة.",
            en: "Explains why the course changed in neutral language.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم مبنيًّا للمجهول يخفي المسؤولية.",
            en: "Uses passive forms that hide who is responsible.",
          },
          {
            ar: "يغرق الموكّل بالمصطلحات عند الضغط.",
            en: "Falls back on jargon under pressure.",
          },
        ],
        successCriteria: [
          {
            ar: "الموكّل فهم سبب التغيّر وأثره.",
            en: "The client understood the reason for the change and its effect.",
          },
          {
            ar: "لم تُستخدم صيغ تخفي المسؤولية.",
            en: "No responsibility-hiding forms were used.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة شرح تغيّر مسار مقيّمة.",
            en: "An assessed simulation of explaining a change of course.",
          },
          {
            ar: "الرسالة المكتوبة المرافقة.",
            en: "The accompanying written message.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضع نماذج إنجليزية لشرح الإجراءات المتكرّرة ويختبر وضوحها.",
          en: "Builds English templates for recurring procedure explanations and tests their clarity.",
        },
        observableBehaviors: [
          {
            ar: "ينشئ نماذج للإجراءات الخمسة الأكثر تكرارًا.",
            en: "Creates templates for the five most frequent procedures.",
          },
          {
            ar: "يختبر النموذج على قارئ غير قانوني ناطق بالإنجليزية.",
            en: "Tests the template on a non-lawyer English reader.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترجم النموذج العربي بلا تكييف.",
            en: "Translates the Arabic template without adapting it.",
          },
          {
            ar: "يهمل تحديث النموذج عند تغيّر الإجراء.",
            en: "Fails to update the template when the procedure changes.",
          },
        ],
        successCriteria: [
          {
            ar: "النماذج مستخدمة ومقيسة بعدد الرسائل.",
            en: "The templates are in use and measurable by message count.",
          },
          {
            ar: "اجتاز النموذج اختبار القارئ غير القانوني.",
            en: "The template passed the non-lawyer reader test.",
          },
        ],
        evidenceRequired: [
          {
            ar: "النماذج ونتائج اختبار الوضوح.",
            en: "The templates and the clarity test results.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يعتمد معيار وضوح للمراسلات الإنجليزية ويقيسه على مستوى المكتب.",
          en: "Adopts a clarity standard for English correspondence and measures it firm-wide.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد معيارًا مكتوبًا مع أمثلة قوية وضعيفة.",
            en: "Adopts a written standard with strong and weak examples.",
          },
          {
            ar: "يراجع عيّنة فصلية من المراسلات الإنجليزية.",
            en: "Reviews a quarterly sample of English correspondence.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقيس صحّة القواعد فقط ويهمل الوضوح.",
            en: "Measures grammatical correctness only and ignores clarity.",
          },
          {
            ar: "يستثني الشركاء من المراجعة.",
            en: "Exempts partners from the review.",
          },
        ],
        successCriteria: [
          {
            ar: "نتائج المراجعة تتحسّن على مدى فصلين.",
            en: "Review results improve across two quarters.",
          },
          {
            ar: "أسئلة الموكّلين التكرارية عن الإجراء تراجعت.",
            en: "Repeat client questions about the procedure have fallen.",
          },
        ],
        evidenceRequired: [
          {
            ar: "المعيار ونتائج مراجعتين.",
            en: "The standard and two review cycles' results.",
          },
        ],
      },
    ],
    sourceIds: ["src.making-your-case", "src.legal-project-management", "src.small-firm-roadmap"],
    confidence: 0.73,
    reviewStatus: "ai_suggested",
    languageTrack: true,
    prerequisiteSkillIds: ["skill.le-clarifying-facts"],
  },
  {
    id: "skill.le-dates-deadlines",
    domainId: "dom.legal-english",
    name: { ar: "التواريخ والمهل بالإنجليزية", en: "Dates and deadlines in English" },
    synonyms: ["time expressions", "deadline language", "scheduling in English"],
    definition: {
      ar: "التعبير عن التواريخ والمهل بالإنجليزية بصيغة لا تحتمل لبسًا، مع تمييز المهلة الحتمية من التقديرية.",
      en: "Expressing dates and deadlines in English in a form that leaves no ambiguity, and distinguishing a hard deadline from an estimate.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على تعامل المتدرّب مع التواريخ بالإنجليزية.",
          en: "No evidence has been collected yet on the learner's handling of dates in English.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يذكر التاريخ بصيغة قد تُقرأ بأكثر من طريقة.",
          en: "States a date in a form that can be read more than one way.",
        },
        observableBehaviors: [
          {
            ar: "يذكر اليوم والشهر والسنة.",
            en: "States day, month and year.",
          },
          {
            ar: "يستخدم أسماء الأشهر بالإنجليزية بشكل صحيح.",
            en: "Uses English month names correctly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يكتب التاريخ بأرقام فقط فيلتبس اليوم بالشهر.",
            en: "Writes the date in figures only, so day and month can be confused.",
          },
          {
            ar: "يهمل ذكر السنة في مهلة تمتدّ عبر رأس السنة.",
            en: "Omits the year on a deadline that crosses into January.",
          },
        ],
        successCriteria: [
          {
            ar: "اسم الشهر مكتوب بالحروف.",
            en: "The month is written in letters.",
          },
          {
            ar: "السنة مذكورة.",
            en: "The year is stated.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة تتضمّن تاريخًا واحدًا على الأقل.",
            en: "A message containing at least one date.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يفرّق بين المهلة الحتمية والتقديرية بلغة صريحة.",
          en: "Distinguishes a hard deadline from an estimate in explicit language.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم صيغة تدلّ على الإلزام في المهلة القانونية.",
            en: "Uses an obligation form for a statutory deadline.",
          },
          {
            ar: "يستخدم صيغة تقديرية للمدد غير الملزمة.",
            en: "Uses an estimating form for non-binding timings.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم الصيغة نفسها للمهلة القانونية والتقدير.",
            en: "Uses the same form for a statutory deadline and an estimate.",
          },
          {
            ar: "يستخدم تعبيرات مبهمة مثل «قريبًا» بالإنجليزية.",
            en: "Uses vague English expressions such as \"shortly\".",
          },
        ],
        successCriteria: [
          {
            ar: "المهل الملزمة مميّزة لغويًا في النصّ.",
            en: "Binding deadlines are linguistically marked in the text.",
          },
          {
            ar: "لا تعبير زمني مبهم في الرسالة.",
            en: "No vague time expression appears in the message.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة تتضمّن مهلة ملزمة وأخرى تقديرية.",
            en: "A message containing one binding deadline and one estimate.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يبني جدولًا زمنيًا إنجليزيًا كاملًا للملف ويشرحه شفهيًا.",
          en: "Builds a full English timeline for the matter and explains it aloud.",
        },
        observableBehaviors: [
          {
            ar: "يعرض التواريخ في جدول مرتّب تصاعديًا.",
            en: "Lays the dates out in ascending order in a table.",
          },
          {
            ar: "يذكر المنطقة الزمنية في المواعيد عبر الحدود.",
            en: "States the time zone for cross-border appointments.",
          },
        ],
        commonMistakes: [
          {
            ar: "يهمل المنطقة الزمنية في اجتماع دولي.",
            en: "Omits the time zone in an international meeting.",
          },
          {
            ar: "يخلط بين تاريخ الاستحقاق وتاريخ الإرسال.",
            en: "Confuses the due date with the send date.",
          },
        ],
        successCriteria: [
          {
            ar: "الجدول خالٍ من أي تاريخ ملتبس.",
            en: "The timeline contains no ambiguous date.",
          },
          {
            ar: "المناطق الزمنية مذكورة حيث تلزم.",
            en: "Time zones are stated wherever needed.",
          },
        ],
        evidenceRequired: [
          {
            ar: "جدول زمني إنجليزي لملف حقيقي.",
            en: "An English timeline for a real matter.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يبلّغ بتغيّر مهلة أو تأخير بالإنجليزية بلغة واضحة تحفظ الثقة.",
          en: "Communicates a changed deadline or a delay in English, in clear language that preserves confidence.",
        },
        observableBehaviors: [
          {
            ar: "يذكر التاريخ الجديد وسببه في الجملة الأولى.",
            en: "Gives the new date and its cause in the first sentence.",
          },
          {
            ar: "يبيّن أثر التغيير على بقيّة الجدول.",
            en: "Sets out the effect of the change on the rest of the timeline.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبدأ باعتذار طويل قبل ذكر التاريخ.",
            en: "Opens with a long apology before giving the date.",
          },
          {
            ar: "يغيّر تاريخًا واحدًا ويهمل تحديث ما يليه.",
            en: "Changes one date and leaves the following ones untouched.",
          },
        ],
        successCriteria: [
          {
            ar: "التاريخ الجديد في السطر الأول.",
            en: "The new date is in the first line.",
          },
          {
            ar: "الجدول محدّث بالكامل.",
            en: "The timeline is updated throughout.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة تغيير مهلة بالإنجليزية.",
            en: "An English deadline-change message.",
          },
          {
            ar: "الجدول المحدّث.",
            en: "The updated timeline.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يوحّد صيغة التواريخ في مراسلات المكتب الإنجليزية ويراقب الالتباس.",
          en: "Standardises date format across the firm's English correspondence and watches for ambiguity.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد صيغة تاريخ واحدة ويعمّمها.",
            en: "Adopts one date format and circulates it.",
          },
          {
            ar: "يراجع عيّنة مراسلات بحثًا عن تواريخ ملتبسة.",
            en: "Reviews a correspondence sample for ambiguous dates.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتمد صيغة تخالف عرف السوق الذي يخاطبه.",
            en: "Adopts a format that conflicts with the market being addressed.",
          },
          {
            ar: "يعمّم الصيغة دون تعديل النماذج.",
            en: "Circulates the format without updating the templates.",
          },
        ],
        successCriteria: [
          {
            ar: "صيغة التاريخ موحّدة في النماذج.",
            en: "The date format is consistent across the templates.",
          },
          {
            ar: "لا تواريخ ملتبسة في عيّنة المراجعة.",
            en: "No ambiguous dates in the review sample.",
          },
        ],
        evidenceRequired: [
          {
            ar: "دليل الصيغة ونتيجة مراجعة عيّنة.",
            en: "The format guide and a sample review result.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يربط المهل الإنجليزية بنظام التقويم في المكتب ويقيس الالتزام بها.",
          en: "Links English deadlines to the firm's calendar system and measures compliance.",
        },
        observableBehaviors: [
          {
            ar: "يشترط تسجيل كل مهلة في النظام باللغتين.",
            en: "Requires every deadline to be logged in the system in both languages.",
          },
          {
            ar: "يراجع شهريًا المهل الفائتة وأسبابها.",
            en: "Reviews missed deadlines and their causes monthly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتمد على تنبيهات فردية لا على النظام.",
            en: "Relies on individual reminders rather than the system.",
          },
          {
            ar: "يسجّل المهلة ولا يسجّل مسؤولها.",
            en: "Logs the deadline without logging its owner.",
          },
        ],
        successCriteria: [
          {
            ar: "لا مهلة في النظام بلا مسؤول وتاريخ.",
            en: "No deadline in the system lacks an owner and a date.",
          },
          {
            ar: "المهل الفائتة تراجعت خلال سنة.",
            en: "Missed deadlines fell over a year.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير النظام عن المهل.",
            en: "The system's deadline report.",
          },
          {
            ar: "محاضر المراجعة الشهرية.",
            en: "Minutes of the monthly review.",
          },
        ],
      },
    ],
    sourceIds: ["src.legal-project-management", "src.legal-ops-kpis", "src.governance-raci"],
    confidence: 0.7,
    reviewStatus: "ai_suggested",
    languageTrack: true,
    prerequisiteSkillIds: ["skill.le-explaining-next-steps"],
  },
  {
    id: "skill.le-managing-expectations",
    domainId: "dom.legal-english",
    name: { ar: "ضبط التوقّعات بالإنجليزية", en: "Managing expectations in English" },
    synonyms: ["hedging language", "qualifying statements", "risk language in English"],
    definition: {
      ar: "استخدام صيغ التحوّط والاحتمال بالإنجليزية للتعبير عن التقدير القانوني دون أن يُفهم منه وعد بالنتيجة.",
      en: "Using hedging and probability forms in English to express a legal assessment without it being heard as a promise of result.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على استخدام المتدرّب لصيغ التحوّط بالإنجليزية.",
          en: "No evidence has been collected yet on the learner's use of hedging forms in English.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يستخدم صيغة تحوّط واحدة يكرّرها في كل موضع.",
          en: "Uses one hedging form and repeats it everywhere.",
        },
        observableBehaviors: [
          {
            ar: "يتجنّب صيغ اليقين عند الحديث عن النتيجة.",
            en: "Avoids certainty forms when speaking about the outcome.",
          },
          {
            ar: "يميّز بين رأيه والوقائع بجملة فاصلة.",
            en: "Separates his opinion from the facts with a marker sentence.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم صيغة تحوّط ضعيفة فتبدو الرسالة بلا رأي.",
            en: "Uses a hedge so weak the message seems to have no view at all.",
          },
          {
            ar: "يستخدم تعبيرًا يُفهم بالإنجليزية كضمانة.",
            en: "Uses a phrase that reads as a guarantee in English.",
          },
        ],
        successCriteria: [
          {
            ar: "لا عبارة يقين حول النتيجة.",
            en: "No certainty phrase about the outcome.",
          },
          {
            ar: "الرأي مميّز عن الواقعة.",
            en: "Opinion is distinguished from fact.",
          },
        ],
        evidenceRequired: [
          {
            ar: "فقرة تقدير مكتوبة بالإنجليزية.",
            en: "A written English assessment paragraph.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يستخدم سلّم احتمال متدرّجًا بثلاث درجات على الأقل.",
          en: "Uses a graded probability scale with at least three levels.",
        },
        observableBehaviors: [
          {
            ar: "يميّز لغويًا بين المرجّح والمحتمل والبعيد.",
            en: "Marks the difference in language between likely, possible and remote.",
          },
          {
            ar: "يربط كل درجة بسببها.",
            en: "Ties each level to its reason.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم نسبًا مئوية بلا أساس.",
            en: "Attaches percentages with no basis.",
          },
          {
            ar: "يخلط بين درجات الاحتمال في الفقرة نفسها.",
            en: "Mixes probability levels inside the same paragraph.",
          },
        ],
        successCriteria: [
          {
            ar: "درجات الاحتمال متّسقة عبر الرسالة.",
            en: "Probability levels are consistent across the message.",
          },
          {
            ar: "كل درجة مقرونة بسبب.",
            en: "Each level is paired with a reason.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة تقدير تتضمّن ثلاث درجات احتمال.",
            en: "An assessment message containing three probability levels.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يكتب رسالة تقدير إنجليزية متكاملة: الوقائع، التقدير، المخاطر، والبدائل.",
          en: "Writes a complete English assessment message: facts, assessment, risks and options.",
        },
        observableBehaviors: [
          {
            ar: "يفصل الأقسام بعناوين قصيرة.",
            en: "Separates the sections with short headings.",
          },
          {
            ar: "يذكر أسوأ حالة بلغة واضحة غير مخفّفة.",
            en: "States the worst case in clear, unsoftened language.",
          },
        ],
        commonMistakes: [
          {
            ar: "يدفن المخاطرة في منتصف فقرة طويلة.",
            en: "Buries the risk in the middle of a long paragraph.",
          },
          {
            ar: "يستخدم صيغًا مهذّبة تخفّف المخاطرة حتى تختفي.",
            en: "Uses polite forms that soften the risk until it vanishes.",
          },
        ],
        successCriteria: [
          {
            ar: "المخاطر في قسم مستقلّ وواضح.",
            en: "Risks appear in their own clear section.",
          },
          {
            ar: "لا عبارة يمكن قراءتها كضمانة.",
            en: "No phrase can be read as a guarantee.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة تقدير مقيّمة بحسب معيار الكتابة الإنجليزية.",
            en: "An assessment message rated against the written Legal English rubric.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يضبط التوقّعات شفهيًا بالإنجليزية تحت ضغط موكّل يطلب يقينًا.",
          en: "Manages expectations aloud in English under pressure from a client demanding certainty.",
        },
        observableBehaviors: [
          {
            ar: "يعيد صياغة طلب اليقين ثم يبيّن حدوده.",
            en: "Restates the demand for certainty and then sets out its limits.",
          },
          {
            ar: "يعرض ما يمكن الالتزام به بلغة إيجابية.",
            en: "Offers what can be committed to, in positive language.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم النفي المتكرّر فتبدو الرسالة سلبية بالكامل.",
            en: "Uses repeated negatives so the message reads as wholly negative.",
          },
          {
            ar: "يتنازل لغويًا تحت الضغط فيقترب من الوعد.",
            en: "Softens the wording under pressure and edges towards a promise.",
          },
        ],
        successCriteria: [
          {
            ar: "الالتزام المعروض واضح ومحدّد.",
            en: "The commitment offered is clear and specific.",
          },
          {
            ar: "لم تصدر عبارة وعد بالنتيجة.",
            en: "No outcome-promise phrase was uttered.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة مقيّمة لطلب يقين بالإنجليزية.",
            en: "An assessed simulation of a demand for certainty in English.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضع دليل صيغ التحوّط المعتمدة للمكتب ويراجع رسائل التقدير.",
          en: "Writes the firm's approved hedging guide and reviews assessment letters.",
        },
        observableBehaviors: [
          {
            ar: "يجمع الصيغ المعتمدة والممنوعة في دليل واحد.",
            en: "Collects approved and prohibited forms in a single guide.",
          },
          {
            ar: "يراجع رسائل التقدير قبل الإرسال في الملفّات الكبيرة.",
            en: "Reviews assessment letters before they go out in major matters.",
          },
        ],
        commonMistakes: [
          {
            ar: "يمنع صيغًا دون تقديم بدائل.",
            en: "Bans forms without offering alternatives.",
          },
          {
            ar: "يراجع اللغة ويهمل صحّة التقدير.",
            en: "Reviews the language and ignores the soundness of the assessment.",
          },
        ],
        successCriteria: [
          {
            ar: "الدليل مستخدم في رسائل التقدير.",
            en: "The guide is used in assessment letters.",
          },
          {
            ar: "لا صيغة ممنوعة في عيّنة المراجعة.",
            en: "No prohibited form appears in the review sample.",
          },
        ],
        evidenceRequired: [
          {
            ar: "الدليل ونتيجة مراجعة عيّنة.",
            en: "The guide and a sample review result.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل لغة المخاطرة الإنجليزية سياسة مكتبية مقيسة ومربوطة بالمسؤولية المهنية.",
          en: "Makes English risk language a measured firm policy linked to professional liability.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد سياسة لغة المخاطرة ويدرّب عليها كل من يراسل بالإنجليزية.",
            en: "Adopts a risk-language policy and trains everyone who corresponds in English.",
          },
          {
            ar: "يراجع سنويًا الشكاوى المرتبطة بسوء فهم التقدير.",
            en: "Reviews yearly the complaints tied to a misread assessment.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتمد السياسة دون ربطها بمراجعة فعلية.",
            en: "Adopts the policy without tying it to a real review.",
          },
          {
            ar: "يعامل اللغة مسألة شكلية لا مسألة مسؤولية.",
            en: "Treats language as a formality rather than a liability question.",
          },
        ],
        successCriteria: [
          {
            ar: "لا شكوى سببها فهم التقدير كضمانة خلال سنتين.",
            en: "No complaint in two years caused by an assessment read as a guarantee.",
          },
          {
            ar: "كل مراسل بالإنجليزية مدرّب وموثّق تدريبه.",
            en: "Everyone corresponding in English is trained and the training is recorded.",
          },
        ],
        evidenceRequired: [
          {
            ar: "السياسة وسجلّ التدريب.",
            en: "The policy and the training log.",
          },
          {
            ar: "التقرير السنوي عن الشكاوى.",
            en: "The annual complaints report.",
          },
        ],
      },
    ],
    sourceIds: ["src.the-antidote", "src.making-your-case", "src.managing-professional-service-firm"],
    confidence: 0.75,
    reviewStatus: "ai_suggested",
    languageTrack: true,
    prerequisiteSkillIds: ["skill.le-explaining-next-steps"],
  },
  {
    id: "skill.le-client-update-writing",
    domainId: "dom.legal-english",
    name: { ar: "كتابة تحديثات الموكّل بالإنجليزية", en: "Writing client updates in English" },
    synonyms: ["email writing", "status update email", "professional correspondence"],
    definition: {
      ar: "كتابة رسالة تحديث إنجليزية قصيرة ومنظّمة: سطر موضوع دقيق، خلاصة أولى، ثم التفاصيل والمطلوب من الموكّل.",
      en: "Writing a short, organised English update: an accurate subject line, the bottom line first, then detail and what is needed from the client.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على كتابة المتدرّب للتحديثات بالإنجليزية.",
          en: "No evidence has been collected yet on the learner's English update writing.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يكتب رسالة مفهومة لكنها بلا بنية واضحة.",
          en: "Writes an intelligible message with no clear structure.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم تحيّة وخاتمة مهنيتين.",
            en: "Uses a professional greeting and sign-off.",
          },
          {
            ar: "يذكر رقم الملف أو مرجعه.",
            en: "Includes the matter number or reference.",
          },
        ],
        commonMistakes: [
          {
            ar: "يكتب سطر موضوع عامًّا مثل «تحديث».",
            en: "Writes a generic subject line such as \"update\".",
          },
          {
            ar: "يكتب فقرة واحدة طويلة بلا فواصل.",
            en: "Writes one long paragraph with no breaks.",
          },
        ],
        successCriteria: [
          {
            ar: "الرسالة مفهومة ومرجعها واضح.",
            en: "The message is intelligible and its reference is clear.",
          },
          {
            ar: "التحيّة والخاتمة مهنيتان.",
            en: "Greeting and sign-off are professional.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة تحديث إنجليزية واحدة.",
            en: "One English update message.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يبني الرسالة على ثلاثة أقسام: ما حدث، ما التالي، ما المطلوب.",
          en: "Builds the message on three sections: what happened, what is next, what is needed.",
        },
        observableBehaviors: [
          {
            ar: "يكتب سطر موضوع يتضمّن اسم الملف والموضوع.",
            en: "Writes a subject line carrying the matter name and the topic.",
          },
          {
            ar: "يستخدم نقاطًا قصيرة بدل الفقرات الطويلة.",
            en: "Uses short bullet points instead of long paragraphs.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضع المطلوب من الموكّل في آخر سطر فيُغفل.",
            en: "Puts the client's action item in the last line, where it gets missed.",
          },
          {
            ar: "يستخدم اختصارات داخلية لا يعرفها الموكّل.",
            en: "Uses internal abbreviations the client does not know.",
          },
        ],
        successCriteria: [
          {
            ar: "الأقسام الثلاثة ظاهرة.",
            en: "The three sections are visible.",
          },
          {
            ar: "المطلوب من الموكّل في الثلث الأول من الرسالة.",
            en: "The client's action appears in the first third of the message.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة تحديث ببنية ثلاثية.",
            en: "An update message with the three-part structure.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يكتب تحديثات موجزة ودقيقة بسجلّ مناسب، ويلائم الطول مع أهمّية الخبر.",
          en: "Writes concise, accurate updates in a fitting register, matching length to the weight of the news.",
        },
        observableBehaviors: [
          {
            ar: "يبدأ بالخلاصة في السطر الأول.",
            en: "Opens with the bottom line in the first sentence.",
          },
          {
            ar: "يبقي الرسالة الروتينية تحت مئة وخمسين كلمة.",
            en: "Keeps a routine update under one hundred and fifty words.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم سجلًّا رسميًا مفرطًا يبعد الموكّل.",
            en: "Uses an over-formal register that distances the client.",
          },
          {
            ar: "يرفق مستندات دون شرح ما فيها.",
            en: "Attaches documents without explaining what they contain.",
          },
        ],
        successCriteria: [
          {
            ar: "الخلاصة في السطر الأول.",
            en: "The bottom line is in the first sentence.",
          },
          {
            ar: "كل مرفق مشروح بجملة.",
            en: "Every attachment is explained in a sentence.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ثلاث رسائل مقيّمة بحسب معيار جودة المراسلة.",
            en: "Three messages assessed against the email-quality rubric.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يكتب رسالة إنجليزية في موقف حسّاس: خبر سيّئ، أو خطأ من المكتب، أو نزاع أتعاب.",
          en: "Writes an English message in a sensitive situation: bad news, a firm error, or a fee dispute.",
        },
        observableBehaviors: [
          {
            ar: "يذكر الخبر السيّئ في الجملة الأولى بلا تمهيد طويل.",
            en: "States the bad news in the first sentence with no long preamble.",
          },
          {
            ar: "يفصل الاعتذار عن الشرح عن الخطوة التصحيحية.",
            en: "Separates the apology from the explanation and from the corrective step.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم مبنيًّا للمجهول لإخفاء المسؤولية.",
            en: "Uses the passive to hide responsibility.",
          },
          {
            ar: "يعتذر بلا تحديد ما سيتغيّر.",
            en: "Apologises without saying what will change.",
          },
        ],
        successCriteria: [
          {
            ar: "الخبر السيّئ في السطر الأول.",
            en: "The bad news is in the first line.",
          },
          {
            ar: "خطوة تصحيحية محدّدة بتاريخ.",
            en: "A corrective step with a date is included.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة خبر سيّئ مقيّمة.",
            en: "An assessed bad-news message.",
          },
          {
            ar: "ملاحظات مراجع أقدم.",
            en: "A senior reviewer's notes.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضع نماذج مراسلات إنجليزية للمكتب ويراجع رسائل الزملاء قبل الإرسال.",
          en: "Creates English correspondence templates for the firm and reviews colleagues' messages before they go out.",
        },
        observableBehaviors: [
          {
            ar: "ينشئ نماذج لأنواع الرسائل الأكثر تكرارًا.",
            en: "Builds templates for the most frequent message types.",
          },
          {
            ar: "يعطي ملاحظات على البنية والوضوح لا على الأسلوب الشخصي.",
            en: "Gives feedback on structure and clarity, not personal style.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعيد كتابة رسالة الزميل بدل تعليمه.",
            en: "Rewrites the colleague's message instead of teaching him.",
          },
          {
            ar: "يجعل النموذج جامدًا لا يقبل التكييف.",
            en: "Makes the template rigid and unadaptable.",
          },
        ],
        successCriteria: [
          {
            ar: "النماذج مستخدمة فعليًا.",
            en: "The templates are actually used.",
          },
          {
            ar: "جودة الرسائل تحسّنت في عيّنة المراجعة.",
            en: "Message quality improved in the review sample.",
          },
        ],
        evidenceRequired: [
          {
            ar: "النماذج وسجلّ المراجعات.",
            en: "The templates and the review log.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يعتمد معيار مراسلات إنجليزية للمكتب ويقيسه ويحدّثه سنويًا.",
          en: "Adopts, measures and annually refreshes a firm standard for English correspondence.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد معيارًا مكتوبًا بأمثلة قوية وضعيفة.",
            en: "Adopts a written standard with strong and weak examples.",
          },
          {
            ar: "يقيس زمن الردّ وجودة الرسائل معًا.",
            en: "Measures response time and message quality together.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقيس السرعة وحدها فتتدهور الجودة.",
            en: "Measures speed alone and quality deteriorates.",
          },
          {
            ar: "يترك المعيار بلا تحديث سنوات.",
            en: "Leaves the standard unrevised for years.",
          },
        ],
        successCriteria: [
          {
            ar: "المعيار محدَّث سنويًا ومطبَّق على كل المستويات.",
            en: "The standard is refreshed yearly and applied at every level.",
          },
          {
            ar: "مؤشّرا السرعة والجودة يتحسّنان معًا.",
            en: "Speed and quality indicators improve together.",
          },
        ],
        evidenceRequired: [
          {
            ar: "المعيار المعتمد ونسخته المحدّثة.",
            en: "The adopted standard and its updated version.",
          },
          {
            ar: "بيانات المؤشّرين لسنة.",
            en: "A year of data on both indicators.",
          },
        ],
      },
    ],
    sourceIds: ["src.making-your-case", "src.small-firm-roadmap", "src.client-centered-law-firm", "src.lawyers-ceo"],
    confidence: 0.78,
    reviewStatus: "ai_suggested",
    languageTrack: true,
    prerequisiteSkillIds: ["skill.le-explaining-next-steps"],
  },
  {
    id: "skill.le-difficult-questions",
    domainId: "dom.legal-english",
    name: { ar: "الأسئلة الصعبة بالإنجليزية", en: "Handling difficult questions in English" },
    synonyms: ["responding under pressure", "declining politely", "buying time in English"],
    definition: {
      ar: "الإجابة بالإنجليزية عن أسئلة محرجة أو ضاغطة: قول «لا أعرف بعد»، وطلب وقت، ورفض طلب غير مناسب بلغة مهنية.",
      en: "Answering awkward or pressing questions in English: saying \"I do not know yet\", asking for time, and declining an inappropriate request in professional language.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على تعامل المتدرّب مع الأسئلة الصعبة بالإنجليزية.",
          en: "No evidence has been collected yet on how the learner handles difficult questions in English.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يرتبك أمام السؤال الصعب ويصمت أو يرتجل.",
          en: "Is thrown by a hard question and either freezes or improvises.",
        },
        observableBehaviors: [
          {
            ar: "يقرّ بأنه لا يملك الجواب بدل اختلاقه.",
            en: "Admits he does not have the answer rather than inventing one.",
          },
          {
            ar: "يعد بالعودة إلى السائل.",
            en: "Undertakes to come back to the questioner.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجيب بشيء غير دقيق تفاديًا للصمت.",
            en: "Gives an inaccurate answer to avoid silence.",
          },
          {
            ar: "يعد بالعودة بلا تحديد موعد.",
            en: "Promises to come back without naming a time.",
          },
        ],
        successCriteria: [
          {
            ar: "لم يصدر جواب غير دقيق.",
            en: "No inaccurate answer was given.",
          },
          {
            ar: "الوعد بالعودة موثّق.",
            en: "The undertaking to come back is recorded.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ملاحظات عن سؤال صعب وكيفية معالجته.",
            en: "Notes on a difficult question and how it was handled.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يستخدم صيغًا جاهزة لكسب الوقت وطلب التوضيح بأدب.",
          en: "Uses ready forms to buy time and to ask politely for clarification.",
        },
        observableBehaviors: [
          {
            ar: "يعيد صياغة السؤال قبل الإجابة.",
            en: "Restates the question before answering.",
          },
          {
            ar: "يحدّد موعدًا للعودة بالجواب.",
            en: "Names a time by which he will come back with the answer.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم صيغة كسب وقت متكرّرة فتبدو مراوغة.",
            en: "Repeats one time-buying form until it sounds evasive.",
          },
          {
            ar: "يعيد صياغة السؤال بصورة تغيّر معناه.",
            en: "Restates the question in a way that changes its meaning.",
          },
        ],
        successCriteria: [
          {
            ar: "إعادة الصياغة مطابقة للسؤال.",
            en: "The restatement matches the question.",
          },
          {
            ar: "موعد العودة محدّد ومُلتزم به.",
            en: "The return time is named and met.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل يتضمّن سؤالًا صعبًا واحدًا.",
            en: "A recording containing one difficult question.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يرفض بالإنجليزية طلبًا غير مناسب بلغة حازمة ومهذّبة تحفظ العلاقة.",
          en: "Declines an inappropriate request in English, firmly and politely, and keeps the relationship.",
        },
        observableBehaviors: [
          {
            ar: "يذكر سبب الرفض المهني بجملة واحدة.",
            en: "Gives the professional reason for the refusal in one sentence.",
          },
          {
            ar: "يعرض بديلًا ممكنًا بدل الرفض المجرّد.",
            en: "Offers a possible alternative instead of a bare refusal.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم صيغة لينة تُفهم موافقة.",
            en: "Uses a soft form that is heard as agreement.",
          },
          {
            ar: "يرفض بلغة حادّة تنهي المحادثة.",
            en: "Refuses in language sharp enough to end the conversation.",
          },
        ],
        successCriteria: [
          {
            ar: "الرفض مفهوم بلا لبس.",
            en: "The refusal is understood without ambiguity.",
          },
          {
            ar: "استمرّت المحادثة بعد الرفض.",
            en: "The conversation continued after the refusal.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة رفض طلب مقيّمة.",
            en: "An assessed simulation of declining a request.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يتعامل مع أسئلة عدائية أو استفزازية بالإنجليزية دون فقدان السجلّ المهني.",
          en: "Handles hostile or provocative questions in English without losing professional register.",
        },
        observableBehaviors: [
          {
            ar: "يفصل السؤال الموضوعي عن نبرته ويجيب عن الموضوع.",
            en: "Separates the substantive question from its tone and answers the substance.",
          },
          {
            ar: "يعيد ضبط قواعد المحادثة حين تتجاوز الحدّ.",
            en: "Resets the ground rules of the conversation when it crosses a line.",
          },
        ],
        commonMistakes: [
          {
            ar: "يردّ بالنبرة نفسها فيتصاعد الموقف.",
            en: "Answers in the same tone and the situation escalates.",
          },
          {
            ar: "يتجاهل السؤال كلّيًا فيبدو متهرّبًا.",
            en: "Ignores the question entirely and appears evasive.",
          },
        ],
        successCriteria: [
          {
            ar: "أُجيب عن الجوهر ولم تُجارَ النبرة.",
            en: "The substance was answered and the tone was not matched.",
          },
          {
            ar: "بقي السجلّ مهنيًا حتى النهاية.",
            en: "The register stayed professional to the end.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة سؤال عدائي مقيّمة.",
            en: "An assessed hostile-question simulation.",
          },
          {
            ar: "تقييم بحسب معيار المحادثة الصعبة.",
            en: "A rating against the difficult-conversation rubric.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني بنك صيغ للأسئلة الصعبة ويدرّب الفريق عليه بمحاكاة.",
          en: "Builds a phrase bank for difficult questions and trains the team on it through simulation.",
        },
        observableBehaviors: [
          {
            ar: "يجمع الأسئلة الصعبة المتكرّرة وصيغ الردّ عليها.",
            en: "Collects the recurring difficult questions and the forms used to answer them.",
          },
          {
            ar: "يدير جلسات محاكاة قصيرة للفريق.",
            en: "Runs short simulation sessions for the team.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحوّل البنك إلى إجابات محفوظة بلا تفكير.",
            en: "Lets the bank become memorised answers with no thinking.",
          },
          {
            ar: "يتجاهل الأسئلة الأخلاقية التي تحتاج قرارًا لا صيغة.",
            en: "Ignores the ethical questions that need a decision, not a phrase.",
          },
        ],
        successCriteria: [
          {
            ar: "البنك مستخدم في التدريب.",
            en: "The bank is used in training.",
          },
          {
            ar: "أداء الفريق تحسّن في المحاكاة التالية.",
            en: "Team performance improved in the next simulation.",
          },
        ],
        evidenceRequired: [
          {
            ar: "بنك الصيغ ونتائج جلستي محاكاة.",
            en: "The phrase bank and the results of two simulation sessions.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل التعامل مع الأسئلة الصعبة كفاءة مقيسة قبل السماح بالتعامل المباشر مع موكّل أجنبي.",
          en: "Makes handling difficult questions a measured competency gating direct contact with a foreign client.",
        },
        observableBehaviors: [
          {
            ar: "يشترط اجتياز تقييم قبل التعامل المباشر مع موكّل ناطق بالإنجليزية.",
            en: "Requires a pass before direct dealing with an English-speaking client.",
          },
          {
            ar: "يراجع الحوادث اللغوية الحسّاسة سنويًا.",
            en: "Reviews sensitive language incidents yearly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجعل التقييم عائقًا إداريًا بلا تدريب مرافق.",
            en: "Turns the assessment into an administrative barrier with no training behind it.",
          },
          {
            ar: "يقيّم اللكنة ضمن المعيار.",
            en: "Includes accent in the assessment criteria.",
          },
        ],
        successCriteria: [
          {
            ar: "المعيار خالٍ من تقييم اللكنة.",
            en: "The standard contains no accent criterion.",
          },
          {
            ar: "الحوادث اللغوية الحسّاسة تراجعت خلال سنة.",
            en: "Sensitive language incidents fell over a year.",
          },
        ],
        evidenceRequired: [
          {
            ar: "معيار التقييم وسجلّ الاجتياز.",
            en: "The assessment standard and the pass log.",
          },
          {
            ar: "تقرير الحوادث السنوي.",
            en: "The annual incident report.",
          },
        ],
      },
    ],
    sourceIds: ["src.your-brain-at-work", "src.how-to-argue-and-win", "src.the-antidote", "src.ali-rise"],
    confidence: 0.74,
    reviewStatus: "ai_suggested",
    languageTrack: true,
    prerequisiteSkillIds: ["skill.le-managing-expectations"],
  },
  {
    id: "skill.le-closing-meeting",
    domainId: "dom.legal-english",
    name: { ar: "إنهاء الاجتماع بالإنجليزية", en: "Closing a meeting in English" },
    synonyms: ["wrap-up language", "summarising in English", "meeting close"],
    definition: {
      ar: "إنهاء اللقاء بالإنجليزية بتلخيص واضح، وتأكيد الخطوات والمسؤوليات والتواريخ، وخاتمة مهنية.",
      en: "Ending a meeting in English with a clear summary, confirmation of steps, owners and dates, and a professional close.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على إنهاء المتدرّب للاجتماعات بالإنجليزية.",
          en: "No evidence has been collected yet on the learner's English meeting close.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "ينهي اللقاء بشكر وخاتمة دون تلخيص.",
          en: "Ends with thanks and a sign-off but no summary.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم خاتمة مهنية مناسبة.",
            en: "Uses an appropriate professional sign-off.",
          },
          {
            ar: "يذكر أنه سيرسل رسالة لاحقة.",
            en: "Mentions that a message will follow.",
          },
        ],
        commonMistakes: [
          {
            ar: "ينهي فجأة دون إشارة إلى الاقتراب من النهاية.",
            en: "Ends abruptly with no signal that the close is coming.",
          },
          {
            ar: "يستخدم خاتمة عامّية.",
            en: "Uses a colloquial sign-off.",
          },
        ],
        successCriteria: [
          {
            ar: "الخاتمة مهنية.",
            en: "The sign-off is professional.",
          },
          {
            ar: "الموكّل يعرف أن رسالة ستصل.",
            en: "The client knows a message is coming.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل قصير لخاتمة لقاء.",
            en: "A short recording of a meeting close.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يلخّص بالإنجليزية ثلاث نقاط قبل الخاتمة.",
          en: "Summarises three points in English before signing off.",
        },
        observableBehaviors: [
          {
            ar: "يستخدم صيغة تمهيد للتلخيص.",
            en: "Uses a lead-in form to signal the summary.",
          },
          {
            ar: "يعدّ النقاط بترتيب واضح.",
            en: "Enumerates the points in a clear order.",
          },
        ],
        commonMistakes: [
          {
            ar: "يلخّص ما قاله هو ويهمل ما قاله الموكّل.",
            en: "Summarises what he said and omits what the client said.",
          },
          {
            ar: "يطيل التلخيص حتى يعيد الاجتماع.",
            en: "Lets the summary run until it repeats the meeting.",
          },
        ],
        successCriteria: [
          {
            ar: "التلخيص لا يتجاوز دقيقة.",
            en: "The summary does not exceed one minute.",
          },
          {
            ar: "يتضمّن نقطة واحدة على الأقل من كلام الموكّل.",
            en: "It includes at least one point made by the client.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل تلخيص وخاتمة.",
            en: "A recording of a summary and close.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يؤكّد الخطوات ومسؤوليها وتواريخها بالإنجليزية ويطلب موافقة الموكّل.",
          en: "Confirms steps, owners and dates in English and asks for the client's agreement.",
        },
        observableBehaviors: [
          {
            ar: "يذكر لكل خطوة المسؤول والتاريخ.",
            en: "States the owner and date for each step.",
          },
          {
            ar: "يسأل صراحة إن كان هناك ما لم يُبحث.",
            en: "Asks explicitly whether anything was left uncovered.",
          },
        ],
        commonMistakes: [
          {
            ar: "يسأل «هل من شيء آخر؟» وهو يقف للمغادرة.",
            en: "Asks \"anything else?\" while already standing to leave.",
          },
          {
            ar: "يهمل تأكيد المسؤول عن خطوة تقع على الموكّل.",
            en: "Fails to confirm the owner of a step that falls on the client.",
          },
        ],
        successCriteria: [
          {
            ar: "كل خطوة مؤكّدة بمسؤول وتاريخ.",
            en: "Every step is confirmed with an owner and a date.",
          },
          {
            ar: "أُتيح للموكّل وقت لطرح ما تبقّى.",
            en: "The client was given time to raise anything remaining.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل خاتمة مقيّم مع محضر الخطوات.",
            en: "An assessed closing recording with the steps record.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "ينهي لقاءً متعدّد الأطراف أو انتهى بخلاف، بلغة إنجليزية تحفظ الاتفاق على ما اتُّفق عليه.",
          en: "Closes a multi-party meeting, or one that ended in disagreement, in English that preserves what was agreed.",
        },
        observableBehaviors: [
          {
            ar: "يفصل المتّفق عليه عن المعلّق بلغة محايدة.",
            en: "Separates agreed from open points in neutral language.",
          },
          {
            ar: "يحدّد موعدًا لمعاودة البحث في المعلّق.",
            en: "Fixes a time to return to the open points.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعلن اتفاقًا لم يقرّه كل الأطراف.",
            en: "Declares an agreement not endorsed by all parties.",
          },
          {
            ar: "ينهي اللقاء بلا موعد لاحق فيتوقّف الملف.",
            en: "Ends with no follow-up date and the matter stalls.",
          },
        ],
        successCriteria: [
          {
            ar: "لم يعترض أي طرف على المحضر.",
            en: "No party objected to the record.",
          },
          {
            ar: "للمعلّق موعد محدّد.",
            en: "The open points have a fixed date.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر إنجليزي لاجتماع متعدّد الأطراف.",
            en: "An English record of a multi-party meeting.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يوحّد صيغة محضر الاجتماع الإنجليزي في المكتب ويدرّب عليها.",
          en: "Standardises the firm's English meeting record and trains the team on it.",
        },
        observableBehaviors: [
          {
            ar: "يضع نموذج محضر إنجليزي موحّدًا.",
            en: "Creates a single English meeting-record template.",
          },
          {
            ar: "يراجع محاضر الزملاء ويعلّق على الدقّة.",
            en: "Reviews colleagues' records and comments on accuracy.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجعل المحضر مفصّلًا فلا يُقرأ.",
            en: "Makes the record so detailed nobody reads it.",
          },
          {
            ar: "يعمّم النموذج دون تدريب.",
            en: "Circulates the template without training.",
          },
        ],
        successCriteria: [
          {
            ar: "النموذج مستخدم في أغلب الاجتماعات الإنجليزية.",
            en: "The template is used in most English meetings.",
          },
          {
            ar: "المحاضر تُرسل خلال يوم عمل.",
            en: "Records are sent within one working day.",
          },
        ],
        evidenceRequired: [
          {
            ar: "النموذج وبيانات زمن الإرسال.",
            en: "The template and send-time data.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل محضر الاجتماع الإنجليزي جزءًا من نظام المسؤوليات ويقيس أثره.",
          en: "Makes the English meeting record part of the accountability system and measures its effect.",
        },
        observableBehaviors: [
          {
            ar: "يربط كل بند في المحضر بمهمّة في النظام.",
            en: "Links every item in the record to a task in the system.",
          },
          {
            ar: "يراجع شهريًا البنود التي لم تُنفّذ.",
            en: "Reviews unfulfilled items monthly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يوثّق البنود ولا يتابع تنفيذها.",
            en: "Records the items and never tracks delivery.",
          },
          {
            ar: "يضاعف التوثيق بلا فائدة عملية.",
            en: "Multiplies documentation with no practical benefit.",
          },
        ],
        successCriteria: [
          {
            ar: "كل بند مربوط بمهمّة ومسؤول.",
            en: "Every item is tied to a task and an owner.",
          },
          {
            ar: "نسبة البنود غير المنفّذة تراجعت.",
            en: "The share of unfulfilled items has fallen.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير النظام عن بنود المحاضر.",
            en: "The system report on record items.",
          },
          {
            ar: "محاضر المراجعة الشهرية.",
            en: "Minutes of the monthly review.",
          },
        ],
      },
    ],
    sourceIds: ["src.legal-project-management", "src.governance-raci", "src.ali-rise", "src.making-your-case"],
    confidence: 0.72,
    reviewStatus: "ai_suggested",
    languageTrack: true,
    prerequisiteSkillIds: ["skill.le-explaining-next-steps"],
  },
  // -------------------------------------------------------------------------
  // dom.negotiation-influence
  // -------------------------------------------------------------------------
  {
    id: "skill.negotiation",
    domainId: "dom.negotiation-influence",
    name: { ar: "التفاوض", en: "Negotiation" },
    synonyms: ["bargaining", "settlement discussions", "deal negotiation", "التسوية"],
    definition: {
      ar: "التحضير لمفاوضة بمعرفة مصلحة الموكّل وحدوده وبدائله، وإدارتها بحيث يُحفظ الاتفاق والعلاقة معًا.",
      en: "Preparing a negotiation by knowing the client's interest, limits and alternatives, and running it so that both the deal and the relationship survive.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على أداء المتدرّب في التفاوض.",
          en: "No evidence has been collected yet on the learner's negotiation performance.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يحضر جلسة التفاوض ويعرف موقف موكّله دون تحضير منظّم.",
          en: "Attends the negotiation knowing the client's position but without organised preparation.",
        },
        observableBehaviors: [
          {
            ar: "يعرض مطلب الموكّل بوضوح.",
            en: "States the client's demand clearly.",
          },
          {
            ar: "يدوّن عروض الطرف الآخر بدقّة.",
            en: "Records the other side's offers accurately.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفتتح برقم من عنده دون تفويض.",
            en: "Opens with a figure of his own without a mandate.",
          },
          {
            ar: "يتنازل مبكرًا لتفادي التوتّر.",
            en: "Concedes early to avoid friction.",
          },
        ],
        successCriteria: [
          {
            ar: "مطلب الموكّل مطروح كما هو.",
            en: "The client's demand was put as instructed.",
          },
          {
            ar: "عروض الطرف الآخر موثّقة.",
            en: "The other side's offers are documented.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر جلسة تفاوض.",
            en: "A negotiation session record.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يحضّر ورقة تفاوض: الهدف، الحدّ الأدنى المقبول، والبديل إن لم يُتّفق.",
          en: "Prepares a negotiation sheet: the goal, the walk-away point, and the alternative if no deal is reached.",
        },
        observableBehaviors: [
          {
            ar: "يكتب حدّ التنازل الأقصى قبل الجلسة ويحصل على تفويض به.",
            en: "Writes the maximum concession before the session and obtains a mandate for it.",
          },
          {
            ar: "يسجّل بديل الموكّل إن فشل الاتفاق.",
            en: "Records the client's alternative if no agreement is reached.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحدّد رقمًا بلا معرفة بديل الموكّل الواقعي.",
            en: "Fixes a figure without knowing the client's realistic alternative.",
          },
          {
            ar: "يكشف حدّه الأدنى في العرض الأول.",
            en: "Reveals his floor in the first offer.",
          },
        ],
        successCriteria: [
          {
            ar: "ورقة التفاوض مكتوبة ومعتمدة قبل الجلسة.",
            en: "The negotiation sheet is written and approved before the session.",
          },
          {
            ar: "لم يُتجاوز التفويض.",
            en: "The mandate was not exceeded.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ورقة تفاوض معتمدة من الموكّل.",
            en: "A client-approved negotiation sheet.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يفاوض على المصالح لا على المواقف، ويستكشف حلولًا تزيد قيمة الاتفاق للطرفين.",
          en: "Negotiates on interests rather than positions and explores solutions that add value for both sides.",
        },
        observableBehaviors: [
          {
            ar: "يسأل الطرف الآخر عن سبب تمسّكه ببند معيّن.",
            en: "Asks the other side why it is holding to a particular term.",
          },
          {
            ar: "يعرض بديلين مختلفي التركيب بالقيمة نفسها.",
            en: "Puts forward two differently structured options of equal value.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعامل كل بند كمساومة على رقم واحد.",
            en: "Treats every term as haggling over a single number.",
          },
          {
            ar: "يهمل توثيق ما اتُّفق عليه أثناء الجلسة.",
            en: "Neglects to record what was agreed during the session.",
          },
        ],
        successCriteria: [
          {
            ar: "الاتفاق يتضمّن بندًا لم يكن في العرض الأول.",
            en: "The agreement contains a term that was not in the opening offer.",
          },
          {
            ar: "محضر الاتفاق موقّع أو مؤكّد كتابيًا.",
            en: "The agreement record is signed or confirmed in writing.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر اتفاق مع مقارنة بالعرض الأول.",
            en: "An agreement record compared against the opening offer.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يفاوض تحت ضغط أو مع طرف عدائي، ويحمي العلاقة دون تنازل عن مصلحة الموكّل.",
          en: "Negotiates under pressure or with a hostile counterpart, protecting the relationship without conceding the client's interest.",
        },
        observableBehaviors: [
          {
            ar: "يسمّي التكتيك الضاغط بلغة محايدة بدل مجاراته.",
            en: "Names the pressure tactic in neutral language rather than matching it.",
          },
          {
            ar: "يطلب استراحة حين يقترب من تجاوز تفويضه.",
            en: "Calls a break when he is close to exceeding his mandate.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقبل شرطًا خارج التفويض بحجّة إنقاذ الاتفاق.",
            en: "Accepts a term outside the mandate to save the deal.",
          },
          {
            ar: "يحوّل الخلاف الموضوعي إلى مواجهة شخصية.",
            en: "Turns a substantive disagreement into a personal confrontation.",
          },
        ],
        successCriteria: [
          {
            ar: "لم يُتجاوز التفويض تحت الضغط.",
            en: "The mandate was not exceeded under pressure.",
          },
          {
            ar: "بقيت قناة التفاوض مفتوحة بعد الجلسة.",
            en: "The negotiation channel stayed open after the session.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة تفاوض مقيّمة.",
            en: "An assessed negotiation simulation.",
          },
          {
            ar: "تقرير للموكّل عن نتيجة الجلسة.",
            en: "A report to the client on the session outcome.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يقود مفاوضات معقّدة متعدّدة الأطراف ويوزّع الأدوار على فريقه.",
          en: "Leads complex multi-party negotiations and assigns roles across his team.",
        },
        observableBehaviors: [
          {
            ar: "يوزّع أدوار الفريق قبل الجلسة ويحدّد من يتكلّم في كل بند.",
            en: "Assigns team roles before the session and states who speaks on each term.",
          },
          {
            ar: "يبني خطّة تنازلات متدرّجة مربوطة بمقابل.",
            en: "Builds a staged concession plan, each step tied to something in return.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترك أعضاء الفريق يتحدّثون بلا تنسيق فتظهر تناقضات.",
            en: "Lets team members speak without coordination and contradictions appear.",
          },
          {
            ar: "يتنازل بلا مقابل لبناء حسن نيّة.",
            en: "Concedes without return to build goodwill.",
          },
        ],
        successCriteria: [
          {
            ar: "لا تناقض بين أعضاء الفريق في الجلسة.",
            en: "No contradiction between team members during the session.",
          },
          {
            ar: "كل تنازل مقابل مكسب موثّق.",
            en: "Every concession is matched by a documented gain.",
          },
        ],
        evidenceRequired: [
          {
            ar: "خطّة التفاوض وتوزيع الأدوار.",
            en: "The negotiation plan and role allocation.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع منهجية تفاوض للمكتب ويدرّب عليها ويقيس نتائج التسويات.",
          en: "Sets a firm negotiation methodology, trains it, and measures settlement outcomes.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد نموذج تحضير تفاوض إلزاميًا فوق حدّ قيمة معيّن.",
            en: "Makes a preparation template mandatory above a set value threshold.",
          },
          {
            ar: "يحلّل نتائج التسويات سنويًا مقارنة بالتقديرات الأولية.",
            en: "Analyses settlement outcomes yearly against the initial estimates.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقيس عدد التسويات لا جودتها بالنسبة للموكّل.",
            en: "Measures the number of settlements rather than their quality for the client.",
          },
          {
            ar: "يفرض المنهجية بلا تدريب عملي.",
            en: "Imposes the methodology without practical training.",
          },
        ],
        successCriteria: [
          {
            ar: "نتائج التسويات مقارنة بالتقديرات ومنشورة داخليًا.",
            en: "Settlement outcomes are benchmarked against estimates and shared internally.",
          },
          {
            ar: "كل مفاوض يجتاز تدريبًا موثّقًا.",
            en: "Every negotiator passes documented training.",
          },
        ],
        evidenceRequired: [
          {
            ar: "المنهجية المعتمدة وسجلّ التدريب.",
            en: "The adopted methodology and the training log.",
          },
          {
            ar: "تقرير سنوي عن نتائج التسويات.",
            en: "An annual settlement outcomes report.",
          },
        ],
      },
    ],
    sourceIds: ["src.tools-of-argument", "src.how-to-argue-and-win", "src.your-brain-at-work", "src.legal-analyst"],
    confidence: 0.86,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.active-listening"],
  },
  // -------------------------------------------------------------------------
  // dom.self-management
  // -------------------------------------------------------------------------
  {
    id: "skill.time-priority-management",
    domainId: "dom.self-management",
    name: { ar: "إدارة الوقت والأولويات", en: "Time and priority management" },
    synonyms: ["prioritisation", "workload management", "calendar discipline", "ترتيب الأولويات"],
    definition: {
      ar: "الاعتراف بأن الطاقة محدودة، واختيار ما لن يُنجَز بوعي، وحماية وقت العمل العميق للملفّات التي تستحقّه.",
      en: "Accepting that capacity is finite, choosing consciously what will not get done, and protecting deep-work time for the matters that deserve it.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على إدارة المتدرّب لوقته وأولوياته.",
          en: "No evidence has been collected yet on how the learner manages time and priorities.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يعمل بحسب ما يصل، والأولوية لمن يلحّ أكثر.",
          en: "Works on whatever arrives; priority goes to whoever pushes hardest.",
        },
        observableBehaviors: [
          {
            ar: "يحتفظ بقائمة مهامّ مكتوبة ولو غير مرتّبة.",
            en: "Keeps a written task list, even if unordered.",
          },
          {
            ar: "يسجّل المواعيد في تقويم واحد.",
            en: "Records appointments in a single calendar.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبدأ يومه بالبريد فيفقد الساعات الأولى.",
            en: "Starts the day with email and loses the first hours.",
          },
          {
            ar: "يقبل كل مهمّة جديدة بلا مراجعة لما هو قائم.",
            en: "Accepts every new task without reviewing what is already on.",
          },
        ],
        successCriteria: [
          {
            ar: "توجد قائمة مهامّ وتقويم واحد.",
            en: "A task list and a single calendar exist.",
          },
          {
            ar: "لم تفت مهلة معلومة.",
            en: "No known deadline was missed.",
          },
        ],
        evidenceRequired: [
          {
            ar: "لقطة من قائمة المهامّ والتقويم.",
            en: "A snapshot of the task list and calendar.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يرتّب مهامّ يومه بحسب المهلة والأثر، ويراجع تقويمه صباحًا.",
          en: "Orders the day's tasks by deadline and impact, and reviews the calendar each morning.",
        },
        observableBehaviors: [
          {
            ar: "يراجع التقويم في بداية كل يوم عمل.",
            en: "Reviews the calendar at the start of each working day.",
          },
          {
            ar: "يحدّد ثلاث مهامّ أساسية لليوم.",
            en: "Names three core tasks for the day.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضع عشر أولويات فلا تبقى أولوية.",
            en: "Sets ten priorities, so nothing is a priority.",
          },
          {
            ar: "يقدّر مدد المهامّ بتفاؤل دائم.",
            en: "Estimates task durations optimistically every time.",
          },
        ],
        successCriteria: [
          {
            ar: "المهامّ الثلاث محدّدة قبل بدء العمل.",
            en: "The three tasks are set before work begins.",
          },
          {
            ar: "مراجعة التقويم يومية وموثّقة.",
            en: "The calendar review is daily and recorded.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ أسبوع من المهامّ الثلاث اليومية.",
            en: "A week's log of the three daily tasks.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يحمي كتلة عمل عميق يوميًا ويقول لا صراحة لما لا يتّسع له وقته.",
          en: "Protects a daily block of deep work and says no explicitly to what will not fit.",
        },
        observableBehaviors: [
          {
            ar: "يحجز كتلة زمنية للعمل العميق ويحميها من الاجتماعات.",
            en: "Blocks a deep-work slot and defends it from meetings.",
          },
          {
            ar: "يعتذر عن مهمّة جديدة أو يتفاوض على موعدها بدل القبول الصامت.",
            en: "Declines a new task or negotiates its date instead of silently accepting.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحجز الكتلة ثم يتنازل عنها لأول طلب.",
            en: "Books the block and gives it up at the first request.",
          },
          {
            ar: "يعتذر بلا اقتراح بديل فيبدو غير متعاون.",
            en: "Declines without proposing an alternative and seems uncooperative.",
          },
        ],
        successCriteria: [
          {
            ar: "كتلة العمل العميق نُفّذت في أغلب أيام الأسبوع.",
            en: "The deep-work block happened on most days of the week.",
          },
          {
            ar: "كل رفض مصحوب باقتراح بديل.",
            en: "Every refusal came with an alternative proposal.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقويم أسبوعين يُظهر كتل العمل العميق.",
            en: "Two weeks of calendar showing the deep-work blocks.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يدير عبء عمل مزدحمًا بمهل متعارضة، ويتفاوض على الأولويات مع مشرفه والموكّل.",
          en: "Manages a heavy load with conflicting deadlines and negotiates priorities with supervisor and client.",
        },
        observableBehaviors: [
          {
            ar: "يعرض على مشرفه قائمة أولويات ويطلب حسم التعارض.",
            en: "Puts a priority list to his supervisor and asks for the conflict to be resolved.",
          },
          {
            ar: "يبلّغ الموكّل بتأجيل قبل وقوعه ويعرض تاريخًا جديدًا.",
            en: "Notifies the client of a postponement before it happens and offers a new date.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعمل ساعات إضافية بدل مواجهة التعارض.",
            en: "Works extra hours instead of surfacing the conflict.",
          },
          {
            ar: "يقرّر الأولوية بنفسه في أمر يخصّ الموكّل.",
            en: "Decides the priority alone on a question that belongs to the client.",
          },
        ],
        successCriteria: [
          {
            ar: "التعارض حُسم بقرار موثّق.",
            en: "The conflict was resolved by a documented decision.",
          },
          {
            ar: "لم تفت مهلة بلا إبلاغ مسبق.",
            en: "No deadline passed without prior notice.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مراسلة تُظهر عرض التعارض وحسمه.",
            en: "Correspondence showing the conflict raised and resolved.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يوازن طاقة فريقه لا وقته وحده، ويكشف الحمل الزائد قبل انفجاره.",
          en: "Balances the team's capacity, not just his own time, and surfaces overload before it breaks.",
        },
        observableBehaviors: [
          {
            ar: "يقيس عدد الملفّات النشطة لكل عضو في الفريق.",
            en: "Measures the number of active matters per team member.",
          },
          {
            ar: "يعيد توزيع العبء قبل أن تفوت مهلة.",
            en: "Redistributes load before a deadline is missed.",
          },
        ],
        commonMistakes: [
          {
            ar: "يوزّع بحسب عدد الملفّات لا بحسب تعقيدها.",
            en: "Allocates by matter count rather than by complexity.",
          },
          {
            ar: "يحمّل الأكفأ أكثر فيحترق.",
            en: "Loads the most capable person until they burn out.",
          },
        ],
        successCriteria: [
          {
            ar: "توزيع العبء موثّق ومراجَع دوريًا.",
            en: "Load allocation is documented and reviewed periodically.",
          },
          {
            ar: "لا حالة احتراق مرتبطة بسوء توزيع خلال الفترة.",
            en: "No burnout case tied to poor allocation in the period.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير توزيع الأعباء لفصل.",
            en: "A quarter's workload allocation report.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يعالج الأسباب المؤسسية للإفراط في العمل بدل مطالبة الأفراد بتنظيم أفضل.",
          en: "Tackles the institutional causes of overwork instead of asking individuals to organise better.",
        },
        observableBehaviors: [
          {
            ar: "يراجع أهداف الساعات ومعايير الاستجابة حين تنتج ضغطًا مزمنًا.",
            en: "Revisits hour targets and response standards when they produce chronic pressure.",
          },
          {
            ar: "يقيس مؤشّرات الطاقة والاحتراق ويعرضها على الشركاء.",
            en: "Measures capacity and burnout indicators and reports them to the partners.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقدّم دورات في إدارة الوقت بدل تعديل الأحمال.",
            en: "Offers time-management courses instead of adjusting workloads.",
          },
          {
            ar: "يكافئ الحضور الطويل فيثبّت السلوك نفسه.",
            en: "Rewards long hours and entrenches the same behaviour.",
          },
        ],
        successCriteria: [
          {
            ar: "مؤشّر واحد على الأقل من مؤشّرات الطاقة تحسّن خلال سنة.",
            en: "At least one capacity indicator improved over a year.",
          },
          {
            ar: "أحمال العمل موثّقة ومراجَعة على مستوى الشراكة.",
            en: "Workloads are documented and reviewed at partnership level.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير مؤشّرات الطاقة لسنة.",
            en: "A year of capacity indicator reporting.",
          },
          {
            ar: "قرار شراكة بتعديل حمل أو هدف.",
            en: "A partnership decision changing a load or a target.",
          },
        ],
      },
    ],
    sourceIds: ["src.four-thousand-weeks", "src.meditations-for-mortals", "src.your-brain-at-work", "src.68-power-moves", "src.small-firm-roadmap"],
    confidence: 0.95,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.emotional-intelligence",
    domainId: "dom.self-management",
    name: { ar: "الذكاء العاطفي", en: "Emotional intelligence" },
    synonyms: ["self-regulation", "reading the room", "empathy at work", "ضبط الانفعال"],
    definition: {
      ar: "ملاحظة انفعالك وانفعال من أمامك وتسميته، وضبط ردّ فعلك بحيث يخدم الملف لا اللحظة.",
      en: "Noticing and naming your own emotion and the other person's, and regulating your reaction so it serves the matter rather than the moment.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على وعي المتدرّب الانفعالي.",
          en: "No evidence has been collected yet on the learner's emotional awareness.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يلاحظ انفعاله بعد وقوعه لا أثناءه.",
          en: "Notices his emotion after the fact rather than during it.",
        },
        observableBehaviors: [
          {
            ar: "يذكر لاحقًا ما شعر به في موقف صعب.",
            en: "Can say afterwards what he felt in a difficult moment.",
          },
          {
            ar: "يعتذر حين يدرك أن ردّه كان حادًّا.",
            en: "Apologises when he realises his reaction was sharp.",
          },
        ],
        commonMistakes: [
          {
            ar: "يردّ على بريد مستفزّ فورًا.",
            en: "Replies to a provocative email immediately.",
          },
          {
            ar: "ينكر أن للانفعال أثرًا على قراره.",
            en: "Denies that emotion affected his decision.",
          },
        ],
        successCriteria: [
          {
            ar: "يستطيع تسمية انفعاله بعد الموقف.",
            en: "Can name the emotion after the event.",
          },
          {
            ar: "لم يتكرّر الردّ الحادّ في الأسبوع نفسه.",
            en: "The sharp reaction did not recur in the same week.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تأمّل مكتوب عن موقف صعب.",
            en: "A written reflection on a difficult situation.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يستخدم فاصلًا زمنيًا قبل الردّ في المواقف المشحونة.",
          en: "Uses a deliberate pause before responding in charged situations.",
        },
        observableBehaviors: [
          {
            ar: "يؤجّل الردّ على رسالة مستفزّة ساعة على الأقل.",
            en: "Holds a reply to a provocative message for at least an hour.",
          },
          {
            ar: "يسمّي انفعاله لنفسه قبل الردّ.",
            en: "Names his emotion to himself before replying.",
          },
        ],
        commonMistakes: [
          {
            ar: "يكتب الردّ الحادّ ثم يرسله بعد ساعة بلا تعديل.",
            en: "Writes the sharp reply and sends it an hour later unchanged.",
          },
          {
            ar: "يكبت الانفعال حتى ينفجر لاحقًا.",
            en: "Suppresses the emotion until it surfaces later.",
          },
        ],
        successCriteria: [
          {
            ar: "لا رسالة أُرسلت في لحظة انفعال.",
            en: "No message was sent in the heat of the moment.",
          },
          {
            ar: "الردود المؤجّلة مختلفة عن المسوّدة الأولى.",
            en: "Delayed replies differ from the first draft.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مقارنة بين مسوّدة وردّ نهائي.",
            en: "A comparison of a draft and the final reply.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يقرأ انفعال الطرف الآخر ويكيّف أسلوبه، ويسمّي المشاعر بلغة مهنية.",
          en: "Reads the other person's emotion, adapts his approach, and names feelings in professional language.",
        },
        observableBehaviors: [
          {
            ar: "يسمّي شعور الموكّل بجملة قصيرة ويتحقّق من صحّتها.",
            en: "Names the client's feeling in a short sentence and checks it.",
          },
          {
            ar: "يغيّر إيقاعه ونبرته حين يرتفع التوتّر.",
            en: "Changes pace and tone when tension rises.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفسّر الانفعال بدل وصفه فيبدو متعاليًا.",
            en: "Interprets the emotion instead of describing it and sounds condescending.",
          },
          {
            ar: "يستخدم التعاطف أداة إقناع لا فهم.",
            en: "Uses empathy as a persuasion device rather than for understanding.",
          },
        ],
        successCriteria: [
          {
            ar: "أكّد الطرف الآخر صحّة تسمية شعوره.",
            en: "The other person confirmed the naming of the feeling was right.",
          },
          {
            ar: "هبط التوتّر خلال المحادثة.",
            en: "Tension fell during the conversation.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة مقيّمة لمحادثة مشحونة.",
            en: "An assessed simulation of a charged conversation.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يحافظ على أداء ثابت في مواقف عالية الضغط ويحمي فريقه من انفعاله.",
          en: "Keeps performance steady in high-pressure situations and shields his team from his own state.",
        },
        observableBehaviors: [
          {
            ar: "يعلن حاجته إلى استراحة قصيرة بدل نقل التوتّر إلى الفريق.",
            en: "States he needs a short break rather than passing tension to the team.",
          },
          {
            ar: "يفصل نقد العمل عن نقد الشخص في لحظة غضب.",
            en: "Separates criticism of the work from criticism of the person in an angry moment.",
          },
        ],
        commonMistakes: [
          {
            ar: "يُظهر هدوءًا مصطنعًا فيفقد الفريق ثقته بصدقه.",
            en: "Performs an artificial calm and the team stops believing him.",
          },
          {
            ar: "يحمّل الفريق ضغط الموكّل كما هو.",
            en: "Passes the client's pressure to the team unfiltered.",
          },
        ],
        successCriteria: [
          {
            ar: "لا حادثة نقد شخصي في الفترة المقيَّمة.",
            en: "No personal-criticism incident in the assessed period.",
          },
          {
            ar: "الفريق يصف التواصل بالهادئ في استبيان.",
            en: "The team describes communication as calm in a survey.",
          },
        ],
        evidenceRequired: [
          {
            ar: "استبيان فريق عن مناخ العمل.",
            en: "A team survey on working climate.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يستخدم قراءة المشاعر في تصميم المحادثات الصعبة وإدارة التغيير.",
          en: "Uses emotional reading to design difficult conversations and manage change.",
        },
        observableBehaviors: [
          {
            ar: "يخطّط لمحادثة صعبة بتوقّع ردّ فعل الطرف الآخر.",
            en: "Plans a difficult conversation by anticipating the other side's reaction.",
          },
          {
            ar: "يشرح سبب التغيير قبل تفاصيله لتقليل مقاومة الفريق.",
            en: "Explains the reason for a change before its detail to reduce team resistance.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعالج المقاومة بالتكرار بدل الاستماع لسببها.",
            en: "Meets resistance with repetition instead of listening to its cause.",
          },
          {
            ar: "يفترض أن كل الفريق يتفاعل بالطريقة نفسها.",
            en: "Assumes the whole team reacts in the same way.",
          },
        ],
        successCriteria: [
          {
            ar: "المحادثة الصعبة انتهت باتفاق موثّق.",
            en: "The difficult conversation ended in a documented agreement.",
          },
          {
            ar: "تراجع مقاومة تغيير واحد على الأقل.",
            en: "Resistance to at least one change decreased.",
          },
        ],
        evidenceRequired: [
          {
            ar: "خطّة محادثة صعبة ونتيجتها.",
            en: "A difficult-conversation plan and its outcome.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يبني مناخًا يسمح بالخطأ والاعتراض ويقيسه بأدوات موضوعية.",
          en: "Builds a climate where error and dissent are possible, and measures it with objective tools.",
        },
        observableBehaviors: [
          {
            ar: "يجري استبيان أمان نفسي دوريًا ويعمل بنتائجه.",
            en: "Runs a periodic psychological safety survey and acts on the results.",
          },
          {
            ar: "يعترف علنًا بخطأ من عنده أمام الفريق.",
            en: "Admits an error of his own openly in front of the team.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجري الاستبيان ولا يعلن نتائجه.",
            en: "Runs the survey and never publishes the results.",
          },
          {
            ar: "يعاقب الاعتراض في الممارسة ويشجّعه في الخطاب.",
            en: "Punishes dissent in practice while encouraging it in speeches.",
          },
        ],
        successCriteria: [
          {
            ar: "نتائج الاستبيان تتحسّن خلال سنة.",
            en: "Survey results improve over a year.",
          },
          {
            ar: "الأخطاء تُبلَّغ مبكرًا في أغلب الحالات.",
            en: "Errors are reported early in most cases.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نتائج استبيانين متتاليين.",
            en: "Two consecutive survey results.",
          },
          {
            ar: "سجلّ الإبلاغ المبكر عن الأخطاء.",
            en: "The early error-reporting log.",
          },
        ],
      },
    ],
    sourceIds: ["src.your-brain-at-work", "src.ali-rise", "src.the-antidote", "src.introverted-leader"],
    confidence: 0.89,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.resilience",
    domainId: "dom.self-management",
    name: { ar: "الصلابة المهنية", en: "Professional resilience" },
    synonyms: ["bouncing back", "handling setbacks", "burnout prevention", "التعافي بعد الخسارة"],
    definition: {
      ar: "استعادة القدرة على العمل بعد خسارة أو خطأ أو ضغط طويل، بمعالجة الأثر بدل إنكاره أو الغرق فيه.",
      en: "Recovering the ability to work after a loss, an error or a long stretch of pressure, by processing the impact rather than denying it or drowning in it.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على تعامل المتدرّب مع الانتكاسات.",
          en: "No evidence has been collected yet on how the learner deals with setbacks.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يتأثّر بالخسارة أيامًا ويتراجع أداؤه دون أن يطلب دعمًا.",
          en: "Is affected by a loss for days and performance drops without him asking for support.",
        },
        observableBehaviors: [
          {
            ar: "يواصل الحضور والعمل بعد نتيجة سلبية.",
            en: "Keeps showing up and working after a negative result.",
          },
          {
            ar: "يذكر أثر الخسارة عند سؤاله.",
            en: "Acknowledges the impact of the loss when asked.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحمّل نفسه مسؤولية عوامل خارج سيطرته.",
            en: "Blames himself for factors outside his control.",
          },
          {
            ar: "يتجنّب مراجعة الملف الخاسر.",
            en: "Avoids reviewing the matter that was lost.",
          },
        ],
        successCriteria: [
          {
            ar: "لم يتوقّف العمل على الملفّات الأخرى.",
            en: "Work on other matters did not stop.",
          },
          {
            ar: "أثر الخسارة معترف به لا منكَر.",
            en: "The impact is acknowledged rather than denied.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تأمّل مكتوب بعد نتيجة سلبية.",
            en: "A written reflection after a negative result.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يفصل بين ما يتحمّل مسؤوليته وما لا يتحمّلها، ويطلب مراجعة من زميل.",
          en: "Separates what he is responsible for from what he is not, and asks a colleague for a review.",
        },
        observableBehaviors: [
          {
            ar: "يكتب قائمة بما كان يمكن تغييره وما لم يكن.",
            en: "Writes a list of what could have been changed and what could not.",
          },
          {
            ar: "يطلب رأي زميل في قراره الأصلي.",
            en: "Asks a colleague's view on his original decision.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحوّل المراجعة إلى جلد ذات.",
            en: "Turns the review into self-punishment.",
          },
          {
            ar: "ينسب الخسارة كلّها إلى القضاء أو الخصم.",
            en: "Attributes the loss entirely to the court or the opponent.",
          },
        ],
        successCriteria: [
          {
            ar: "المراجعة تتضمّن درسًا قابلًا للتطبيق.",
            en: "The review contains an applicable lesson.",
          },
          {
            ar: "تمّت المراجعة خلال أسبوعين من النتيجة.",
            en: "The review took place within two weeks of the result.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر مراجعة ملف خاسر.",
            en: "A review record for a lost matter.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يحافظ على أداء مستقرّ خلال فترات ضغط طويلة، ويحمي حدوده الشخصية.",
          en: "Keeps performance stable through long stretches of pressure and protects his personal limits.",
        },
        observableBehaviors: [
          {
            ar: "يحافظ على نوم وراحة أسبوعية حتى في ذروة العمل.",
            en: "Protects sleep and a weekly rest even at peak workload.",
          },
          {
            ar: "يطلب دعمًا قبل أن يفوت موعد لا بعده.",
            en: "Asks for support before a deadline is missed, not after.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتبر طلب المساعدة اعترافًا بالفشل.",
            en: "Treats asking for help as an admission of failure.",
          },
          {
            ar: "يعوّض التعب بمزيد من الساعات.",
            en: "Answers fatigue with more hours.",
          },
        ],
        successCriteria: [
          {
            ar: "لم يفت موعد بسبب إرهاق.",
            en: "No deadline was missed because of exhaustion.",
          },
          {
            ar: "طلب الدعم موثّق ومبكّر.",
            en: "The request for support is documented and early.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مراسلة تُظهر طلب دعم مبكّر.",
            en: "Correspondence showing an early request for support.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يتعافى من خطأ مهني جسيم بمعالجته علنًا داخل المكتب واستخلاص إجراء وقائي.",
          en: "Recovers from a serious professional error by addressing it openly inside the firm and producing a preventive measure.",
        },
        observableBehaviors: [
          {
            ar: "يبلّغ عن الخطأ فور اكتشافه دون تأخير.",
            en: "Reports the error as soon as it is discovered, without delay.",
          },
          {
            ar: "يقترح تعديل إجراء يمنع تكراره.",
            en: "Proposes a procedural change that prevents recurrence.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحاول تصحيح الخطأ سرًّا قبل الإبلاغ.",
            en: "Tries to fix the error quietly before reporting it.",
          },
          {
            ar: "يعتذر ولا يقترح تغييرًا.",
            en: "Apologises without proposing a change.",
          },
        ],
        successCriteria: [
          {
            ar: "الإبلاغ تمّ خلال أربع وعشرين ساعة من الاكتشاف.",
            en: "Reporting occurred within twenty-four hours of discovery.",
          },
          {
            ar: "الإجراء الوقائي معتمد.",
            en: "The preventive measure was adopted.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير حادثة والإجراء المعتمد بعدها.",
            en: "An incident report and the measure adopted after it.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يدعم زملاءه بعد الانتكاسات ويحوّل المراجعة إلى ممارسة جماعية بلا لوم.",
          en: "Supports colleagues after setbacks and turns review into a blameless collective practice.",
        },
        observableBehaviors: [
          {
            ar: "يدير جلسة مراجعة بعد ملف صعب بلغة تركّز على الإجراء.",
            en: "Runs a review session after a difficult matter, focused on process language.",
          },
          {
            ar: "يشارك أخطاءه الشخصية في الجلسة.",
            en: "Shares his own errors in the session.",
          },
        ],
        commonMistakes: [
          {
            ar: "يدير الجلسة كتحقيق فيصمت الفريق.",
            en: "Runs the session like an inquiry and the team goes quiet.",
          },
          {
            ar: "يجري الجلسة بعد شهور فتفقد قيمتها.",
            en: "Holds the session months later, so it loses value.",
          },
        ],
        successCriteria: [
          {
            ar: "الجلسة أنتجت تعديلًا إجرائيًا واحدًا على الأقل.",
            en: "The session produced at least one procedural change.",
          },
          {
            ar: "شارك أغلب الفريق بمداخلة.",
            en: "Most of the team contributed.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر جلسة مراجعة والقرار الناتج.",
            en: "The review session minutes and the resulting decision.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يعالج الاحتراق المهني كمسألة تنظيمية ويضع سياسات تحمي الطاقة على المدى الطويل.",
          en: "Treats burnout as an organisational issue and sets policies that protect capacity over the long term.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد سياسة إجازات وتغطية تضمن انقطاعًا حقيقيًا.",
            en: "Adopts a leave and cover policy that guarantees a real break.",
          },
          {
            ar: "يقيس مؤشّرات الاحتراق ويعرضها على الشراكة سنويًا.",
            en: "Measures burnout indicators and reports them to the partnership yearly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعلن سياسة إجازات ولا يوفّر تغطية فعلية.",
            en: "Announces a leave policy without providing real cover.",
          },
          {
            ar: "يعامل الاحتراق ضعفًا شخصيًا.",
            en: "Treats burnout as a personal weakness.",
          },
        ],
        successCriteria: [
          {
            ar: "نسبة الإجازات المستخدمة فعليًا مرتفعة ومقيسة.",
            en: "The proportion of leave actually taken is high and measured.",
          },
          {
            ar: "دوران الموظّفين المرتبط بالضغط تراجع.",
            en: "Pressure-related staff turnover has fallen.",
          },
        ],
        evidenceRequired: [
          {
            ar: "السياسة المعتمدة وبيانات استخدام الإجازات.",
            en: "The adopted policy and leave-usage data.",
          },
          {
            ar: "تقرير الدوران السنوي.",
            en: "The annual turnover report.",
          },
        ],
      },
    ],
    sourceIds: ["src.the-antidote", "src.meditations-for-mortals", "src.four-thousand-weeks", "src.small-firm-roadmap", "src.ali-rise"],
    confidence: 0.87,
    reviewStatus: "ai_suggested",
  },
  // -------------------------------------------------------------------------
  // dom.teamwork-leadership
  // -------------------------------------------------------------------------
  {
    id: "skill.delegation",
    domainId: "dom.teamwork-leadership",
    name: { ar: "التفويض", en: "Delegation" },
    synonyms: ["assigning work", "handing off tasks", "managing down", "توزيع المهامّ"],
    definition: {
      ar: "إسناد العمل بمخرج واضح وموعد ومستوى صلاحية محدّد، ومتابعة النتيجة دون إدارة تفصيلية خانقة.",
      en: "Assigning work with a clear deliverable, a date and a defined level of authority, then following the result without smothering micro-management.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على أسلوب المتدرّب في التفويض.",
          en: "No evidence has been collected yet on how the learner delegates.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يحتفظ بكل العمل لنفسه خوفًا من ضياع الجودة.",
          en: "Keeps all the work himself for fear of losing quality.",
        },
        observableBehaviors: [
          {
            ar: "يسند مهامّ إدارية بسيطة إلى السكرتاريا.",
            en: "Hands simple administrative tasks to support staff.",
          },
          {
            ar: "يشرح المطلوب شفهيًا عند الإسناد.",
            en: "Explains the requirement orally when assigning.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعيد إنجاز عمل فوّضه بدل تصحيحه.",
            en: "Redoes work he delegated instead of correcting it.",
          },
          {
            ar: "يسند المهمّة بلا موعد.",
            en: "Assigns the task with no date.",
          },
        ],
        successCriteria: [
          {
            ar: "مهمّة واحدة على الأقل أُسندت وأُنجزت.",
            en: "At least one task was assigned and completed.",
          },
          {
            ar: "المطلوب مفهوم لدى المكلَّف.",
            en: "The person assigned understood what was required.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة إسناد مهمّة واحدة.",
            en: "One task assignment message.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يفوّض مهامّ محدّدة بمخرج وموعد مكتوبين.",
          en: "Delegates defined tasks with a written deliverable and date.",
        },
        observableBehaviors: [
          {
            ar: "يكتب المخرج المطلوب بجملة واحدة.",
            en: "Writes the required deliverable in one sentence.",
          },
          {
            ar: "يحدّد موعدًا وسيطًا للمراجعة.",
            en: "Sets an interim review date.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفوّض المهمّة ويحتفظ بالقرار فيتعطّل العمل.",
            en: "Delegates the task but keeps the decision, and the work stalls.",
          },
          {
            ar: "يفترض معرفة المكلَّف بالسياق.",
            en: "Assumes the assignee knows the context.",
          },
        ],
        successCriteria: [
          {
            ar: "المخرج والموعد مكتوبان.",
            en: "Deliverable and date are in writing.",
          },
          {
            ar: "المراجعة الوسيطة تمّت في موعدها.",
            en: "The interim review happened on time.",
          },
        ],
        evidenceRequired: [
          {
            ar: "إسناد مكتوب مع موعد مراجعة.",
            en: "A written assignment with a review date.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يحدّد مستوى الصلاحية بوضوح: ينفّذ، أو ينفّذ ويبلّغ، أو يقترح وينتظر القرار.",
          en: "States the level of authority clearly: act, act and report, or recommend and wait.",
        },
        observableBehaviors: [
          {
            ar: "يذكر في الإسناد مستوى الصلاحية صراحة.",
            en: "States the level of authority explicitly in the assignment.",
          },
          {
            ar: "يعطي السياق: لمن هذا العمل ولماذا.",
            en: "Gives the context: who this work is for and why.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتدخّل في التفاصيل بعد منح الصلاحية.",
            en: "Intervenes in detail after granting authority.",
          },
          {
            ar: "يغيّر مستوى الصلاحية أثناء العمل بلا إبلاغ.",
            en: "Changes the level of authority mid-task without telling anyone.",
          },
        ],
        successCriteria: [
          {
            ar: "مستوى الصلاحية موثّق ولم يتغيّر بلا إبلاغ.",
            en: "The authority level is documented and did not change without notice.",
          },
          {
            ar: "المخرج سُلّم في موعده دون تدخّل تفصيلي.",
            en: "The deliverable arrived on time without detailed intervention.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ثلاثة إسنادات تُظهر مستويات صلاحية مختلفة.",
            en: "Three assignments showing different authority levels.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يفوّض عملًا معقّدًا أو حسّاسًا مع تدرّج في الاستقلالية، ويعالج الأخطاء بالتدريب لا بالسحب.",
          en: "Delegates complex or sensitive work with graduated autonomy, and answers errors with coaching rather than withdrawal.",
        },
        observableBehaviors: [
          {
            ar: "يزيد استقلالية المكلَّف تدريجيًا بحسب النتائج.",
            en: "Increases the assignee's autonomy step by step as results allow.",
          },
          {
            ar: "يراجع الخطأ مع المكلَّف ويحدّد ما سيتغيّر في المرّة القادمة.",
            en: "Reviews the error with the assignee and fixes what will change next time.",
          },
        ],
        commonMistakes: [
          {
            ar: "يسحب المهمّة عند أول خطأ فينهار التعلّم.",
            en: "Takes the task back at the first error and learning collapses.",
          },
          {
            ar: "يمنح استقلالية كاملة قبل جاهزية المكلَّف.",
            en: "Grants full autonomy before the assignee is ready.",
          },
        ],
        successCriteria: [
          {
            ar: "المكلَّف انتقل إلى مستوى صلاحية أعلى خلال الفترة.",
            en: "The assignee moved to a higher authority level during the period.",
          },
          {
            ar: "الأخطاء عولجت بمراجعة موثّقة.",
            en: "Errors were addressed with a documented review.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ تطوّر صلاحيات مكلَّف واحد.",
            en: "An authority-progression log for one assignee.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني مصفوفة مسؤوليات للفريق تحدّد المسؤول المعتمد لكل عملية.",
          en: "Builds a responsibility matrix for the team naming the accountable owner of each process.",
        },
        observableBehaviors: [
          {
            ar: "يضع مصفوفة تحدّد لكل عملية مسؤولًا معتمدًا واحدًا.",
            en: "Builds a matrix giving each process exactly one accountable owner.",
          },
          {
            ar: "يراجع المصفوفة عند كل تغيير في الفريق.",
            en: "Reviews the matrix at every change in the team.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضع أكثر من مسؤول معتمد لعملية واحدة.",
            en: "Assigns more than one accountable owner to a single process.",
          },
          {
            ar: "يبني المصفوفة ولا يُطلع عليها الفريق.",
            en: "Builds the matrix and never shows it to the team.",
          },
        ],
        successCriteria: [
          {
            ar: "كل عملية لها مسؤول معتمد واحد فقط.",
            en: "Every process has exactly one accountable owner.",
          },
          {
            ar: "المصفوفة متاحة للفريق ومحدّثة.",
            en: "The matrix is available to the team and up to date.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مصفوفة المسؤوليات المعتمدة.",
            en: "The adopted responsibility matrix.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يبني قدرة المكتب على العمل دون اعتماد على أشخاص بعينهم، ويقيس نضج التفويض.",
          en: "Builds a firm that can work without depending on particular individuals, and measures delegation maturity.",
        },
        observableBehaviors: [
          {
            ar: "يحدّد نقاط الاعتماد على شخص واحد ويعالجها بخطّة تعاقب.",
            en: "Identifies single-person dependencies and addresses them with a succession plan.",
          },
          {
            ar: "يقيس نسبة العمل الذي يمرّ إلزاميًا عبر شريك.",
            en: "Measures the share of work that must pass through a partner.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفوّض المهامّ ويحتفظ بكل القرارات.",
            en: "Delegates tasks and keeps every decision.",
          },
          {
            ar: "يقيس عدد المهامّ المفوّضة لا مستوى القرار المفوّض.",
            en: "Measures the number of tasks delegated rather than the level of decision delegated.",
          },
        ],
        successCriteria: [
          {
            ar: "نسبة الاختناق عند الشركاء تراجعت خلال سنة.",
            en: "The partner bottleneck rate fell over a year.",
          },
          {
            ar: "لكل عملية حرجة بديل مدرَّب.",
            en: "Every critical process has a trained backup.",
          },
        ],
        evidenceRequired: [
          {
            ar: "خطّة التعاقب وبيانات الاختناق.",
            en: "The succession plan and bottleneck data.",
          },
          {
            ar: "مصفوفة المسؤوليات على مستوى المكتب.",
            en: "The firm-level responsibility matrix.",
          },
        ],
      },
    ],
    sourceIds: ["src.managing-professional-service-firm", "src.governance-raci", "src.ali-rise", "src.lawyers-ceo", "src.built-to-sell"],
    confidence: 0.95,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.feedback",
    domainId: "dom.teamwork-leadership",
    name: { ar: "إعطاء الملاحظات وتلقّيها", en: "Giving and receiving feedback" },
    synonyms: ["performance conversations", "coaching feedback", "upward feedback", "التقييم البنّاء"],
    definition: {
      ar: "إعطاء ملاحظة محدّدة وقريبة زمنيًا من السلوك، وتلقّي الملاحظة بلا دفاع، بحيث يتحسّن العمل لا تُجرح العلاقة.",
      en: "Giving specific feedback close in time to the behaviour, and receiving it without defensiveness, so the work improves and the relationship is not damaged.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على تعامل المتدرّب مع الملاحظات.",
          en: "No evidence has been collected yet on the learner's handling of feedback.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يتلقّى الملاحظات بصمت أو دفاع، ولا يعطيها.",
          en: "Receives feedback in silence or defensively, and gives none.",
        },
        observableBehaviors: [
          {
            ar: "يستمع إلى الملاحظة حتى نهايتها.",
            en: "Listens to the feedback to the end.",
          },
          {
            ar: "يشكر مصدر الملاحظة.",
            en: "Thanks the person giving it.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبرّر فورًا قبل فهم الملاحظة.",
            en: "Justifies immediately before understanding the point.",
          },
          {
            ar: "يكتم اعتراضه ثم يتجاهل الملاحظة.",
            en: "Keeps his objection quiet and then ignores the feedback.",
          },
        ],
        successCriteria: [
          {
            ar: "لم تُقاطَع الملاحظة.",
            en: "The feedback was not interrupted.",
          },
          {
            ar: "طُبِّقت نقطة واحدة منها على الأقل.",
            en: "At least one point from it was applied.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تأمّل مكتوب عن ملاحظة تلقّاها.",
            en: "A written reflection on feedback received.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يعطي ملاحظة محدّدة عن سلوك واحد، ويسأل عن الملاحظات بدل انتظارها.",
          en: "Gives specific feedback on one behaviour and asks for feedback instead of waiting for it.",
        },
        observableBehaviors: [
          {
            ar: "يصف السلوك والأثر بجملتين بلا أحكام عامّة.",
            en: "Describes the behaviour and its effect in two sentences with no general judgment.",
          },
          {
            ar: "يطلب ملاحظة محدّدة بعد إنجاز مهمّة.",
            en: "Asks for specific feedback after finishing a task.",
          },
        ],
        commonMistakes: [
          {
            ar: "يخلط عدّة ملاحظات في محادثة واحدة.",
            en: "Bundles several points into one conversation.",
          },
          {
            ar: "يعطي الملاحظة بعد شهور من الحدث.",
            en: "Gives the feedback months after the event.",
          },
        ],
        successCriteria: [
          {
            ar: "الملاحظة تتناول سلوكًا واحدًا محدّدًا.",
            en: "The feedback addresses one specific behaviour.",
          },
          {
            ar: "أُعطيت خلال أسبوع من الحدث.",
            en: "It was given within a week of the event.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ ملاحظتين مع تاريخيهما.",
            en: "A log of two feedback instances with their dates.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يجري محادثة ملاحظات متوازنة تنتهي باتفاق على ما سيتغيّر ومتى يُراجَع.",
          en: "Holds a balanced feedback conversation that ends in agreement on what will change and when it will be reviewed.",
        },
        observableBehaviors: [
          {
            ar: "يطلب وجهة نظر الطرف الآخر قبل الخلاصة.",
            en: "Asks the other person's view before concluding.",
          },
          {
            ar: "يتّفق على تغيير محدّد وموعد لمراجعته.",
            en: "Agrees a specific change and a date to review it.",
          },
        ],
        commonMistakes: [
          {
            ar: "يغلّف الملاحظة بمديح حتى تضيع.",
            en: "Wraps the point in praise until it disappears.",
          },
          {
            ar: "يتّفق على تغيير بلا موعد مراجعة.",
            en: "Agrees a change with no review date.",
          },
        ],
        successCriteria: [
          {
            ar: "الاتفاق موثّق بتغيير وموعد.",
            en: "The agreement is documented with a change and a date.",
          },
          {
            ar: "المراجعة تمّت في موعدها.",
            en: "The review happened on schedule.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر محادثة ملاحظات ونتيجة المراجعة.",
            en: "A feedback conversation record and the review outcome.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يعطي ملاحظة صعبة إلى من هو أقدم منه أو إلى زميل مقاوم، بلغة تحفظ العلاقة.",
          en: "Gives hard feedback upwards or to a resistant colleague, in language that preserves the relationship.",
        },
        observableBehaviors: [
          {
            ar: "يطلب إذنًا بإعطاء الملاحظة ويحدّد موضوعها.",
            en: "Asks permission to give the feedback and names its subject.",
          },
          {
            ar: "يستند إلى وقائع موثّقة لا إلى انطباعات.",
            en: "Bases it on documented facts rather than impressions.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعطي الملاحظة أمام آخرين.",
            en: "Gives the feedback in front of others.",
          },
          {
            ar: "يتراجع عن الملاحظة عند أول اعتراض.",
            en: "Withdraws the point at the first objection.",
          },
        ],
        successCriteria: [
          {
            ar: "الملاحظة أُعطيت على انفراد وبوقائع.",
            en: "The feedback was given privately and with facts.",
          },
          {
            ar: "استمرّت علاقة العمل بعدها.",
            en: "The working relationship continued afterwards.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة ملاحظة صاعدة مقيّمة.",
            en: "An assessed upward-feedback simulation.",
          },
          {
            ar: "توثيق الوقائع المستند إليها.",
            en: "Documentation of the facts relied on.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني عادة ملاحظات مستمرّة في فريقه بدل التقييم السنوي وحده.",
          en: "Builds a habit of continuous feedback in his team rather than relying on the annual appraisal.",
        },
        observableBehaviors: [
          {
            ar: "يعقد جلسة ملاحظات قصيرة بعد كل ملف مهمّ.",
            en: "Holds a short feedback session after every significant matter.",
          },
          {
            ar: "يطلب ملاحظات عن نفسه من أعضاء الفريق علنًا.",
            en: "Asks the team for feedback on himself, openly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يطلب الملاحظات ولا يغيّر شيئًا فيتوقّف الفريق عن إعطائها.",
            en: "Asks for feedback, changes nothing, and the team stops giving it.",
          },
          {
            ar: "يجعل الجلسات طويلة فيتجنّبها الفريق.",
            en: "Makes the sessions long and the team avoids them.",
          },
        ],
        successCriteria: [
          {
            ar: "جلسات الملاحظات منتظمة وموثّقة.",
            en: "Feedback sessions are regular and documented.",
          },
          {
            ar: "تغيّر سلوك واحد على الأقل لدى القائد نفسه.",
            en: "At least one behaviour changed in the leader himself.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ جلسات الملاحظات لفصل.",
            en: "A quarter's feedback session log.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل الملاحظات نظامًا مؤسسيًا مرتبطًا بالتطوّر المهني لا بالعقاب.",
          en: "Makes feedback an institutional system tied to professional development rather than punishment.",
        },
        observableBehaviors: [
          {
            ar: "يفصل محادثة التطوير عن محادثة المكافأة.",
            en: "Separates the development conversation from the reward conversation.",
          },
          {
            ar: "يدرّب المشرفين على إعطاء الملاحظات ويقيّم أداءهم فيها.",
            en: "Trains supervisors in giving feedback and assesses them on it.",
          },
        ],
        commonMistakes: [
          {
            ar: "يربط كل ملاحظة بالمكافأة فيختفي الصدق.",
            en: "Ties every comment to reward and candour disappears.",
          },
          {
            ar: "يقيس عدد المحادثات لا أثرها.",
            en: "Measures the number of conversations rather than their effect.",
          },
        ],
        successCriteria: [
          {
            ar: "كل مشرف مدرَّب ومقيَّم على جودة الملاحظات.",
            en: "Every supervisor is trained and assessed on feedback quality.",
          },
          {
            ar: "استبيان الفريق يُظهر تحسّنًا في وضوح الملاحظات.",
            en: "The team survey shows improvement in feedback clarity.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نظام الملاحظات المعتمد وسجلّ التدريب.",
            en: "The adopted feedback system and the training log.",
          },
          {
            ar: "نتائج استبيان الفريق.",
            en: "Team survey results.",
          },
        ],
      },
    ],
    sourceIds: ["src.ali-rise", "src.managing-professional-service-firm", "src.your-brain-at-work", "src.fire-proof"],
    confidence: 0.93,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.emotional-intelligence"],
  },
  {
    id: "skill.teamwork",
    domainId: "dom.teamwork-leadership",
    name: { ar: "العمل ضمن فريق", en: "Working in a team" },
    synonyms: ["collaboration", "managing up", "cross-practice work", "التعاون المهني"],
    definition: {
      ar: "المساهمة في عمل جماعي بوضوح: معرفة دورك وحدوده، وإبلاغ المشرف بما يحتاج معرفته في وقته، ودعم زملائك.",
      en: "Contributing to shared work with clarity: knowing your role and its limits, telling your supervisor what he needs to know in time, and supporting colleagues.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على أداء المتدرّب ضمن فريق.",
          en: "No evidence has been collected yet on the learner's performance in a team.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "ينجز الجزء المسند إليه ولا يتابع الصورة الأوسع.",
          en: "Delivers his assigned part and does not follow the wider picture.",
        },
        observableBehaviors: [
          {
            ar: "يسلّم جزءه في الموعد.",
            en: "Delivers his part on time.",
          },
          {
            ar: "يحضر اجتماعات الفريق.",
            en: "Attends team meetings.",
          },
        ],
        commonMistakes: [
          {
            ar: "لا يبلّغ عن عائق إلّا بعد فوات الموعد.",
            en: "Reports a blocker only after the deadline has passed.",
          },
          {
            ar: "يفترض أن غيره يتابع الترابط بين الأجزاء.",
            en: "Assumes someone else is tracking how the parts fit together.",
          },
        ],
        successCriteria: [
          {
            ar: "الجزء المسند سُلّم في موعده.",
            en: "The assigned part was delivered on time.",
          },
          {
            ar: "الحضور منتظم.",
            en: "Attendance is regular.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ تسليم مهامّ لفريق.",
            en: "A team task delivery log.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يبلّغ عن العوائق مبكرًا ويوضّح ما يحتاجه من زملائه.",
          en: "Reports blockers early and states what he needs from colleagues.",
        },
        observableBehaviors: [
          {
            ar: "يبلّغ عن أي عائق خلال يوم من ظهوره.",
            en: "Reports a blocker within a day of it appearing.",
          },
          {
            ar: "يحدّد المطلوب من كل زميل بجملة واضحة.",
            en: "States what he needs from each colleague in a clear sentence.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبلّغ عن العائق دون اقتراح حلّ.",
            en: "Reports the blocker with no proposed solution.",
          },
          {
            ar: "يرسل طلبًا غامضًا فيتأخّر الردّ.",
            en: "Sends a vague request and the reply is delayed.",
          },
        ],
        successCriteria: [
          {
            ar: "كل عائق أُبلغ عنه خلال يوم.",
            en: "Every blocker was reported within a day.",
          },
          {
            ar: "الطلبات محدّدة وقابلة للتنفيذ.",
            en: "Requests are specific and actionable.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مراسلات تُظهر إبلاغًا مبكرًا عن عائق.",
            en: "Correspondence showing early blocker reporting.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يدير علاقته بمشرفه بمبادرة: يلخّص التقدّم، ويطرح خيارات لا مشكلات فقط.",
          en: "Manages the relationship with his supervisor proactively: summarises progress and brings options, not only problems.",
        },
        observableBehaviors: [
          {
            ar: "يرسل ملخّص تقدّم أسبوعيًا بلا طلب.",
            en: "Sends a weekly progress summary unprompted.",
          },
          {
            ar: "يعرض خيارين مع توصية عند طرح مشكلة.",
            en: "Presents two options with a recommendation when raising a problem.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبلّغ بكل التفاصيل فيضيع ما يهمّ المشرف.",
            en: "Reports every detail so what matters to the supervisor is lost.",
          },
          {
            ar: "ينتظر أن يُسأل عن التقدّم.",
            en: "Waits to be asked about progress.",
          },
        ],
        successCriteria: [
          {
            ar: "الملخّص الأسبوعي منتظم.",
            en: "The weekly summary is regular.",
          },
          {
            ar: "كل مشكلة مرفقة بخيارات.",
            en: "Every problem comes with options.",
          },
        ],
        evidenceRequired: [
          {
            ar: "أربعة ملخّصات تقدّم متتالية.",
            en: "Four consecutive progress summaries.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يدير الخلاف داخل الفريق بصورة منتجة ويحافظ على تقدّم العمل.",
          en: "Handles disagreement inside the team productively and keeps the work moving.",
        },
        observableBehaviors: [
          {
            ar: "يفصل الخلاف الموضوعي عن الأسلوب الشخصي.",
            en: "Separates substantive disagreement from personal style.",
          },
          {
            ar: "يقترح آلية حسم حين يتوقّف النقاش.",
            en: "Proposes a decision mechanism when discussion stalls.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتجنّب الخلاف فتُتّخذ قرارات ضعيفة.",
            en: "Avoids disagreement and weak decisions get taken.",
          },
          {
            ar: "يصعّد الخلاف إلى المشرف قبل محاولة الحلّ.",
            en: "Escalates to the supervisor before attempting a resolution.",
          },
        ],
        successCriteria: [
          {
            ar: "الخلاف حُسم بقرار موثّق.",
            en: "The disagreement was settled with a documented decision.",
          },
          {
            ar: "لم يتأخّر العمل بسبب الخلاف.",
            en: "The work was not delayed by the disagreement.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر يوثّق الخلاف وآلية حسمه.",
            en: "A record documenting the disagreement and how it was settled.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يجمع خبرات من تخصّصات مختلفة في الملف الواحد ويوزّع الأدوار بينها.",
          en: "Brings expertise from different practice areas into one matter and allocates roles between them.",
        },
        observableBehaviors: [
          {
            ar: "يحدّد متى يحتاج الملف إلى تخصّص آخر ويطلبه مبكرًا.",
            en: "Identifies when a matter needs another specialism and requests it early.",
          },
          {
            ar: "يضع خطّة تعاون تحدّد مخرج كل تخصّص.",
            en: "Sets a collaboration plan defining each specialism's deliverable.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستشير تخصّصًا آخر بعد اتّخاذ القرار.",
            en: "Consults another specialism after the decision is taken.",
          },
          {
            ar: "يترك حدود الأدوار غامضة فيتكرّر العمل.",
            en: "Leaves role boundaries vague and work is duplicated.",
          },
        ],
        successCriteria: [
          {
            ar: "خطّة التعاون مكتوبة قبل بدء العمل المشترك.",
            en: "The collaboration plan is written before the joint work begins.",
          },
          {
            ar: "لا ازدواج في العمل بين التخصّصات.",
            en: "No duplication of work between specialisms.",
          },
        ],
        evidenceRequired: [
          {
            ar: "خطّة تعاون لملف متعدّد التخصّصات.",
            en: "A collaboration plan for a multi-specialism matter.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يبني أنظمة تجعل التعاون سلوكًا افتراضيًا في المكتب لا استثناءً.",
          en: "Builds systems that make collaboration the default in the firm rather than an exception.",
        },
        observableBehaviors: [
          {
            ar: "يعدّل نظام الحوافز حين يعاقب مشاركة الملفّات.",
            en: "Changes the incentive system when it penalises sharing matters.",
          },
          {
            ar: "يقيس نسبة الملفّات التي شارك فيها أكثر من تخصّص.",
            en: "Measures the share of matters involving more than one specialism.",
          },
        ],
        commonMistakes: [
          {
            ar: "يطلب التعاون مع إبقاء حوافز فردية بحتة.",
            en: "Asks for collaboration while keeping purely individual incentives.",
          },
          {
            ar: "يقيس عدد الاجتماعات المشتركة لا نتائجها.",
            en: "Measures joint meetings rather than their results.",
          },
        ],
        successCriteria: [
          {
            ar: "نسبة الملفّات المشتركة ارتفعت خلال سنة.",
            en: "The share of joint matters rose over a year.",
          },
          {
            ar: "نظام الحوافز يعترف بالمساهمة المشتركة.",
            en: "The incentive system recognises joint contribution.",
          },
        ],
        evidenceRequired: [
          {
            ar: "بيانات الملفّات المشتركة لسنة.",
            en: "A year of joint-matter data.",
          },
          {
            ar: "قرار تعديل الحوافز.",
            en: "The incentive change decision.",
          },
        ],
      },
    ],
    sourceIds: ["src.ali-rise", "src.smarter-collaboration", "src.managing-professional-service-firm", "src.governance-raci"],
    confidence: 0.9,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.leadership-communication",
    domainId: "dom.teamwork-leadership",
    name: { ar: "تواصل القيادة", en: "Leadership communication" },
    synonyms: ["setting direction", "communicating change", "team briefing", "خطاب القيادة"],
    definition: {
      ar: "شرح الاتّجاه والقرار للفريق بلغة تجعل السبب مفهومًا والدور واضحًا، والإصغاء لما يعود من الفريق.",
      en: "Explaining direction and decisions to a team in language that makes the reason understood and the role clear, and listening to what comes back.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على تواصل المتدرّب القيادي.",
          en: "No evidence has been collected yet on the learner's leadership communication.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "ينقل القرار كما وصله دون شرح سببه.",
          en: "Passes the decision on as received, without explaining why.",
        },
        observableBehaviors: [
          {
            ar: "يبلّغ الفريق بالقرار في وقته.",
            en: "Tells the team about the decision in good time.",
          },
          {
            ar: "يحدّد من يتأثّر به.",
            en: "Identifies who is affected by it.",
          },
        ],
        commonMistakes: [
          {
            ar: "ينسب القرار إلى «الإدارة» ويتبرّأ منه.",
            en: "Attributes the decision to \"management\" and distances himself from it.",
          },
          {
            ar: "يبلّغ بالبريد أمرًا يستحقّ اجتماعًا.",
            en: "Announces by email something that deserved a meeting.",
          },
        ],
        successCriteria: [
          {
            ar: "وصل القرار إلى كل المعنيين.",
            en: "The decision reached everyone concerned.",
          },
          {
            ar: "لم يُعلم أحد بالقرار من مصدر خارجي.",
            en: "Nobody learned of it from an outside source.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة إبلاغ قرار إلى الفريق.",
            en: "A decision announcement message to the team.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يشرح سبب القرار وأثره على عمل كل عضو.",
          en: "Explains the reason for the decision and its effect on each person's work.",
        },
        observableBehaviors: [
          {
            ar: "يبدأ بالسبب قبل التفاصيل التنفيذية.",
            en: "Leads with the reason before the operational detail.",
          },
          {
            ar: "يحدّد ما سيتغيّر في عمل كل دور.",
            en: "States what changes in each role's work.",
          },
        ],
        commonMistakes: [
          {
            ar: "يشرح السبب بلغة إدارية عامّة.",
            en: "Explains the reason in generic management language.",
          },
          {
            ar: "يهمل ذكر ما لن يتغيّر فيزيد القلق.",
            en: "Omits what will not change, which raises anxiety.",
          },
        ],
        successCriteria: [
          {
            ar: "السبب مذكور قبل التفاصيل.",
            en: "The reason precedes the detail.",
          },
          {
            ar: "كل دور يعرف أثر القرار عليه.",
            en: "Every role knows how the decision affects it.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر اجتماع إبلاغ قرار.",
            en: "Minutes of a decision briefing.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يفتح المجال للأسئلة والاعتراض ويجيب بصدق عمّا لا يعرفه.",
          en: "Opens space for questions and objection, and answers honestly about what he does not know.",
        },
        observableBehaviors: [
          {
            ar: "يخصّص وقتًا للأسئلة في كل إعلان مهمّ.",
            en: "Sets aside time for questions at every significant announcement.",
          },
          {
            ar: "يقول «لا أعرف» ويحدّد متى سيعرف.",
            en: "Says \"I do not know\" and states when he will.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجيب عن كل سؤال ولو بمعلومة غير مؤكّدة.",
            en: "Answers every question, even with unverified information.",
          },
          {
            ar: "يعتبر الاعتراض تحدّيًا لسلطته.",
            en: "Treats objection as a challenge to his authority.",
          },
        ],
        successCriteria: [
          {
            ar: "طُرحت أسئلة فعلية في الاجتماع.",
            en: "Real questions were asked in the meeting.",
          },
          {
            ar: "الأسئلة المعلّقة أُجيب عنها لاحقًا في موعدها.",
            en: "Outstanding questions were answered later, on time.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة الأسئلة المعلّقة وتواريخ الإجابة.",
            en: "The list of outstanding questions and their answer dates.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يبلّغ بقرار غير شعبي أو خبر صعب دون فقدان ثقة الفريق.",
          en: "Communicates an unpopular decision or hard news without losing the team's trust.",
        },
        observableBehaviors: [
          {
            ar: "يذكر الخبر الصعب في البداية بلا تمهيد طويل.",
            en: "States the hard news at the start with no long preamble.",
          },
          {
            ar: "يتحمّل مسؤولية القرار بضمير المتكلّم.",
            en: "Owns the decision in the first person.",
          },
        ],
        commonMistakes: [
          {
            ar: "يخفّف الخبر حتى يُفهم عكسه.",
            en: "Softens the news until it is understood the other way round.",
          },
          {
            ar: "يعلن ثم يختفي عن الفريق أيامًا.",
            en: "Announces and then disappears from the team for days.",
          },
        ],
        successCriteria: [
          {
            ar: "الخبر في أول دقيقتين من الاجتماع.",
            en: "The news came in the first two minutes.",
          },
          {
            ar: "بقي القائد متاحًا للأسئلة بعد الإعلان.",
            en: "The leader stayed available for questions after the announcement.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة إعلان قرار صعب مقيّمة.",
            en: "An assessed simulation of a hard announcement.",
          },
          {
            ar: "استبيان فريق بعد الإعلان.",
            en: "A team survey after the announcement.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني إيقاع تواصل ثابتًا مع الفريق يربط العمل اليومي بالاتّجاه العام.",
          en: "Builds a steady communication rhythm linking day-to-day work to the overall direction.",
        },
        observableBehaviors: [
          {
            ar: "يعقد اجتماع اتّجاه دوريًا بجدول ثابت.",
            en: "Holds a regular direction meeting on a fixed agenda.",
          },
          {
            ar: "يعيد ربط كل مبادرة جديدة بالأولوية المعلنة.",
            en: "Ties every new initiative back to the stated priority.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعلن أولويات كثيرة فتفقد معناها.",
            en: "Announces so many priorities they lose meaning.",
          },
          {
            ar: "يلغي الاجتماع الدوري عند الانشغال.",
            en: "Cancels the regular meeting whenever busy.",
          },
        ],
        successCriteria: [
          {
            ar: "الاجتماع الدوري انعقد في أغلب مواعيده.",
            en: "The regular meeting was held on most of its scheduled dates.",
          },
          {
            ar: "أعضاء الفريق يذكرون الأولوية نفسها عند سؤالهم.",
            en: "Team members name the same priority when asked.",
          },
        ],
        evidenceRequired: [
          {
            ar: "جدول الاجتماعات ومحاضرها لفصل.",
            en: "The meeting schedule and minutes for a quarter.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يقود تغييرًا مؤسسيًا بالتواصل: يشرح، يستمع، يعدّل، ويقيس فهم الفريق.",
          en: "Leads institutional change through communication: explains, listens, adjusts, and measures the team's understanding.",
        },
        observableBehaviors: [
          {
            ar: "يقيس فهم الفريق للاتّجاه باستبيان دوري.",
            en: "Measures the team's understanding of direction with a periodic survey.",
          },
          {
            ar: "يعدّل خطّة التغيير علنًا بناءً على ما سمعه.",
            en: "Adjusts the change plan openly based on what he heard.",
          },
        ],
        commonMistakes: [
          {
            ar: "يكرّر الرسالة نفسها حين يواجه مقاومة.",
            en: "Repeats the same message when he meets resistance.",
          },
          {
            ar: "يعتبر الصمت قبولًا.",
            en: "Treats silence as acceptance.",
          },
        ],
        successCriteria: [
          {
            ar: "استبيان الفهم يُظهر تحسّنًا خلال سنة.",
            en: "The understanding survey improves over a year.",
          },
          {
            ar: "تعديل واحد على الأقل في الخطّة نتج عن ملاحظات الفريق.",
            en: "At least one plan change came from team feedback.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نتائج استبيانين وقرار التعديل.",
            en: "Two survey results and the amendment decision.",
          },
        ],
      },
    ],
    sourceIds: ["src.lawyers-ceo", "src.ali-rise", "src.your-brain-at-work", "src.introverted-leader", "src.fire-proof"],
    confidence: 0.85,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.feedback"],
  },
  // -------------------------------------------------------------------------
  // dom.communication (beyond plain explanation)
  // -------------------------------------------------------------------------
  {
    id: "skill.meeting-management",
    domainId: "dom.communication",
    name: { ar: "إدارة الاجتماعات", en: "Meeting management" },
    synonyms: ["chairing meetings", "agenda discipline", "running internal meetings", "ضبط الاجتماع"],
    definition: {
      ar: "عقد اجتماع له هدف وجدول ومدّة، وإدارته بحيث ينتهي بقرارات ومسؤوليات لا بمناقشة مفتوحة.",
      en: "Holding a meeting with a purpose, an agenda and a length, and running it so it ends in decisions and owners rather than open discussion.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على إدارة المتدرّب للاجتماعات.",
          en: "No evidence has been collected yet on the learner's meeting management.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يدعو إلى اجتماع دون جدول ويتركه يتمدّد.",
          en: "Calls a meeting without an agenda and lets it run over.",
        },
        observableBehaviors: [
          {
            ar: "يحدّد موعدًا ويدعو المعنيين.",
            en: "Sets a time and invites those concerned.",
          },
          {
            ar: "يدوّن ملاحظات أثناء الاجتماع.",
            en: "Takes notes during the meeting.",
          },
        ],
        commonMistakes: [
          {
            ar: "يدعو كل الفريق إلى نقاش يخصّ اثنين.",
            en: "Invites the whole team to a discussion that concerns two people.",
          },
          {
            ar: "ينهي الاجتماع بلا قرار.",
            en: "Ends the meeting without a decision.",
          },
        ],
        successCriteria: [
          {
            ar: "الاجتماع انعقد وحضره المعنيون.",
            en: "The meeting took place and the relevant people attended.",
          },
          {
            ar: "توجد ملاحظات مكتوبة.",
            en: "Written notes exist.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ملاحظات اجتماع واحد.",
            en: "Notes from one meeting.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يرسل جدولًا قبل الاجتماع ويلتزم بمدّته.",
          en: "Sends an agenda beforehand and keeps to the allotted time.",
        },
        observableBehaviors: [
          {
            ar: "يرسل الجدول قبل يوم عمل على الأقل.",
            en: "Sends the agenda at least one working day ahead.",
          },
          {
            ar: "يبدأ وينهي في الوقت المحدّد.",
            en: "Starts and ends on time.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضع في الجدول بنودًا أكثر من الوقت المتاح.",
            en: "Puts more items on the agenda than the time allows.",
          },
          {
            ar: "يرسل الجدول بلا تحديد المطلوب من كل بند.",
            en: "Sends the agenda without saying what each item requires.",
          },
        ],
        successCriteria: [
          {
            ar: "الجدول أُرسل مسبقًا.",
            en: "The agenda was circulated in advance.",
          },
          {
            ar: "الاجتماع انتهى في وقته.",
            en: "The meeting ended on time.",
          },
        ],
        evidenceRequired: [
          {
            ar: "جدول اجتماع مؤرّخ.",
            en: "A dated meeting agenda.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يميّز بين بند للقرار وبند للإحاطة، ويخرج بقرارات ومسؤولين وتواريخ.",
          en: "Distinguishes decision items from information items and leaves with decisions, owners and dates.",
        },
        observableBehaviors: [
          {
            ar: "يعلّم كل بند: قرار، أو نقاش، أو إحاطة.",
            en: "Labels each item: decision, discussion, or information.",
          },
          {
            ar: "يوثّق القرارات ومسؤوليها قبل نهاية الاجتماع.",
            en: "Records decisions and their owners before the meeting ends.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفتح نقاشًا في بند إحاطة فيضيع الوقت.",
            en: "Opens debate on an information item and time is lost.",
          },
          {
            ar: "يوثّق القرار بلا مسؤول.",
            en: "Records the decision with no owner.",
          },
        ],
        successCriteria: [
          {
            ar: "كل قرار له مسؤول وتاريخ.",
            en: "Every decision has an owner and a date.",
          },
          {
            ar: "المحضر أُرسل خلال يوم عمل.",
            en: "The minutes were sent within one working day.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر اجتماع بقرارات ومسؤولين.",
            en: "Minutes with decisions and owners.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يدير اجتماعًا خلافيًا أو متعدّد المصالح ويصل به إلى قرار.",
          en: "Chairs a contentious or multi-interest meeting and brings it to a decision.",
        },
        observableBehaviors: [
          {
            ar: "يعطي كل طرف وقتًا محدّدًا ويمنع الاستحواذ على النقاش.",
            en: "Gives each side a fixed time and prevents one voice dominating.",
          },
          {
            ar: "يعلن آلية الحسم قبل بدء النقاش.",
            en: "Announces the decision mechanism before the discussion starts.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترك النقاش مفتوحًا أملًا في إجماع لا يأتي.",
            en: "Leaves the discussion open hoping for a consensus that never comes.",
          },
          {
            ar: "يحسم بنفسه بعد إعلان آلية تشاركية.",
            en: "Decides alone after announcing a participatory mechanism.",
          },
        ],
        successCriteria: [
          {
            ar: "صدر قرار في الاجتماع نفسه.",
            en: "A decision was taken in the meeting itself.",
          },
          {
            ar: "تكلّم كل طرف معنيّ.",
            en: "Every interested party spoke.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر اجتماع خلافي وقراره.",
            en: "Minutes of a contentious meeting and its decision.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يراجع منظومة الاجتماعات في المكتب ويلغي ما لا يضيف قيمة.",
          en: "Reviews the firm's meeting system and cancels what adds no value.",
        },
        observableBehaviors: [
          {
            ar: "يحصي ساعات الاجتماعات ويقارنها بمخرجاتها.",
            en: "Counts meeting hours and compares them to their outputs.",
          },
          {
            ar: "يلغي أو يقصّر اجتماعًا دوريًا واحدًا على الأقل.",
            en: "Cancels or shortens at least one recurring meeting.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستبدل الاجتماع بتقارير مكتوبة أطول.",
            en: "Replaces the meeting with longer written reports.",
          },
          {
            ar: "يلغي اجتماعًا يحتاجه الفريق للتنسيق.",
            en: "Cancels a meeting the team needs for coordination.",
          },
        ],
        successCriteria: [
          {
            ar: "ساعات الاجتماعات انخفضت دون تراجع في التنسيق.",
            en: "Meeting hours fell without coordination suffering.",
          },
          {
            ar: "قرار الإلغاء موثّق بمبرّراته.",
            en: "The cancellation decision is documented with its reasons.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تحليل ساعات الاجتماعات قبل وبعد.",
            en: "A before-and-after analysis of meeting hours.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع معيار اجتماعات للمكتب يربط كل اجتماع بمخرج وقرار مسجّل في النظام.",
          en: "Sets a firm meeting standard tying every meeting to an output and a decision logged in the system.",
        },
        observableBehaviors: [
          {
            ar: "يمنع الدعوة إلى اجتماع بلا جدول ومخرج معلن.",
            en: "Bars any invitation without an agenda and a stated output.",
          },
          {
            ar: "يراجع سنويًا كلفة الاجتماعات مقارنة بقيمتها.",
            en: "Reviews annually the cost of meetings against their value.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض المعيار على الفرق ويستثني الشراكة.",
            en: "Imposes the standard on teams and exempts the partnership.",
          },
          {
            ar: "يقيس عدد المحاضر لا جودة القرارات.",
            en: "Measures minutes produced rather than decision quality.",
          },
        ],
        successCriteria: [
          {
            ar: "كل اجتماع في النظام له جدول ومخرج.",
            en: "Every meeting in the system has an agenda and an output.",
          },
          {
            ar: "كلفة الاجتماعات مقيسة سنويًا.",
            en: "Meeting cost is measured annually.",
          },
        ],
        evidenceRequired: [
          {
            ar: "المعيار المعتمد وتقرير الكلفة السنوي.",
            en: "The adopted standard and the annual cost report.",
          },
        ],
      },
    ],
    sourceIds: ["src.ali-rise", "src.your-brain-at-work", "src.legal-project-management", "src.fire-proof"],
    confidence: 0.84,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.presentation-skills",
    domainId: "dom.communication",
    name: { ar: "العرض والإلقاء", en: "Presentation and public speaking" },
    synonyms: ["public speaking", "client pitch", "seminar delivery", "الإلقاء المهني"],
    definition: {
      ar: "إعداد عرض مبنيّ على رسالة واحدة وتقديمه بوضوح أمام جمهور مهني، والتعامل مع أسئلته.",
      en: "Building a presentation around one message and delivering it clearly to a professional audience, and handling its questions.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على أداء المتدرّب في العرض.",
          en: "No evidence has been collected yet on the learner's presentation performance.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يقرأ من شرائح مكتظّة بالنصّ.",
          en: "Reads from slides crowded with text.",
        },
        observableBehaviors: [
          {
            ar: "يقدّم المحتوى كاملًا في الوقت المتاح.",
            en: "Delivers the full content within the time allowed.",
          },
          {
            ar: "يستخدم ترتيبًا منطقيًا للموضوعات.",
            en: "Uses a logical order for the topics.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضع فقرات كاملة على الشريحة.",
            en: "Puts whole paragraphs on the slide.",
          },
          {
            ar: "يدير ظهره للجمهور وهو يقرأ.",
            en: "Turns his back on the audience while reading.",
          },
        ],
        successCriteria: [
          {
            ar: "العرض انتهى في وقته.",
            en: "The presentation finished on time.",
          },
          {
            ar: "المحتوى مرتّب منطقيًا.",
            en: "The content is logically ordered.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ملفّ العرض المستخدم.",
            en: "The slide file used.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يبني العرض حول رسالة واحدة وثلاث نقاط داعمة.",
          en: "Builds the presentation around one message and three supporting points.",
        },
        observableBehaviors: [
          {
            ar: "يصرّح بالرسالة الأساسية في الدقيقة الأولى.",
            en: "States the core message in the first minute.",
          },
          {
            ar: "يقلّل النصّ على الشريحة إلى عنوان وفكرة.",
            en: "Cuts slide text to a heading and one idea.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضيف نقاطًا لأنها متوفّرة لا لأنها ضرورية.",
            en: "Adds points because they are available, not because they are needed.",
          },
          {
            ar: "يعتذر عن جودة العرض في البداية.",
            en: "Apologises for the presentation quality at the start.",
          },
        ],
        successCriteria: [
          {
            ar: "الرسالة الأساسية واضحة للجمهور.",
            en: "The core message is clear to the audience.",
          },
          {
            ar: "لا شريحة تحتوي أكثر من فكرة.",
            en: "No slide carries more than one idea.",
          },
        ],
        evidenceRequired: [
          {
            ar: "عرض بثلاث نقاط داعمة ورسالة واحدة.",
            en: "A deck with one message and three supporting points.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يقدّم بثقة ويتعامل مع أسئلة الجمهور دون خروج عن الوقت.",
          en: "Delivers with confidence and handles audience questions without overrunning.",
        },
        observableBehaviors: [
          {
            ar: "يحافظ على اتصال بصري مع الجمهور.",
            en: "Keeps eye contact with the audience.",
          },
          {
            ar: "يعيد صياغة السؤال قبل الإجابة عنه.",
            en: "Restates the question before answering it.",
          },
        ],
        commonMistakes: [
          {
            ar: "يطيل الإجابة عن سؤال واحد فيضيع باقي الأسئلة.",
            en: "Answers one question at such length the rest are lost.",
          },
          {
            ar: "يجيب عن سؤال لا يعرفه بمعلومة غير مؤكّدة.",
            en: "Answers a question he does not know with unverified information.",
          },
        ],
        successCriteria: [
          {
            ar: "أُجيب عن أغلب الأسئلة في الوقت المخصّص.",
            en: "Most questions were answered within the allotted time.",
          },
          {
            ar: "لم يُقدَّم جواب غير مؤكّد على أنه يقين.",
            en: "No unverified answer was presented as certain.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تسجيل عرض مع جلسة أسئلة.",
            en: "A recording of a presentation with its question session.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يقدّم أمام جمهور صعب أو في موقف تنافسي، ويكيّف العرض بحسب ردّ الفعل.",
          en: "Presents to a difficult audience or in a competitive pitch, adapting as the room reacts.",
        },
        observableBehaviors: [
          {
            ar: "يختصر أو يوسّع جزءًا بحسب انتباه الجمهور.",
            en: "Shortens or expands a section according to the room's attention.",
          },
          {
            ar: "يتعامل مع اعتراض علني بلغة هادئة.",
            en: "Handles a public objection in calm language.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتمسّك بالنصّ المعدّ رغم فقدان الجمهور.",
            en: "Sticks to the prepared script although the room is lost.",
          },
          {
            ar: "يجادل معترضًا أمام الجمهور.",
            en: "Argues with an objector in front of the audience.",
          },
        ],
        successCriteria: [
          {
            ar: "العرض عُدّل أثناءه بحسب الجمهور.",
            en: "The presentation was adapted live to the audience.",
          },
          {
            ar: "الاعتراض عولج دون تصعيد.",
            en: "The objection was handled without escalation.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محاكاة عرض تنافسي مقيّمة.",
            en: "An assessed competitive-pitch simulation.",
          },
          {
            ar: "ملاحظات مقيّم على التكيّف.",
            en: "Assessor notes on adaptation.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يصمّم عروض المكتب المتكرّرة ويدرّب زملاءه على تقديمها.",
          en: "Designs the firm's recurring presentations and coaches colleagues on delivering them.",
        },
        observableBehaviors: [
          {
            ar: "يضع قالب عرض موحّدًا للمكتب.",
            en: "Creates a single presentation template for the firm.",
          },
          {
            ar: "يجري بروفة مع الزميل ويعطي ملاحظتين محدّدتين.",
            en: "Runs a rehearsal with a colleague and gives two specific notes.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجعل القالب جامدًا فيقتل شخصية المقدّم.",
            en: "Makes the template so rigid it kills the presenter's own voice.",
          },
          {
            ar: "يركّز على الشرائح ويهمل التدريب على الإلقاء.",
            en: "Focuses on slides and neglects delivery practice.",
          },
        ],
        successCriteria: [
          {
            ar: "القالب مستخدم في المكتب.",
            en: "The template is in use across the firm.",
          },
          {
            ar: "كل عرض خارجي سبقته بروفة.",
            en: "Every external presentation was preceded by a rehearsal.",
          },
        ],
        evidenceRequired: [
          {
            ar: "القالب وسجلّ البروفات.",
            en: "The template and the rehearsal log.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يربط العروض بخطّة السمعة المهنية للمكتب ويقيس أثرها.",
          en: "Ties presentations to the firm's professional reputation plan and measures their effect.",
        },
        observableBehaviors: [
          {
            ar: "يختار المنصّات بحسب الجمهور المستهدف لا بحسب الدعوة.",
            en: "Chooses platforms by target audience rather than by whoever invites.",
          },
          {
            ar: "يقيس ما نتج عن كل ظهور من اتصالات أو توكيلات.",
            en: "Measures the enquiries or instructions each appearance produced.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقبل كل دعوة فيتبدّد الجهد.",
            en: "Accepts every invitation and the effort is dissipated.",
          },
          {
            ar: "يقيس عدد الحضور لا نوعه.",
            en: "Measures audience numbers rather than audience type.",
          },
        ],
        successCriteria: [
          {
            ar: "خطّة الظهور مكتوبة ومربوطة بجمهور مستهدف.",
            en: "The appearance plan is written and tied to a target audience.",
          },
          {
            ar: "أثر الظهور مقيس سنويًا.",
            en: "The effect of appearances is measured annually.",
          },
        ],
        evidenceRequired: [
          {
            ar: "خطّة الظهور السنوية.",
            en: "The annual appearance plan.",
          },
          {
            ar: "تقرير أثر الظهور.",
            en: "The appearance impact report.",
          },
        ],
      },
    ],
    sourceIds: ["src.making-your-case", "src.introverted-leader", "src.game-changing-attorney", "src.ultimate-associate-marketing"],
    confidence: 0.8,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.plain-explanation"],
  },
  {
    id: "skill.fee-conversations",
    domainId: "dom.client-relations",
    name: { ar: "الحديث عن الأتعاب", en: "Fee conversations" },
    synonyms: ["talking about money", "pricing discussion", "billing conversations", "مناقشة التسعير"],
    definition: {
      ar: "شرح الأتعاب وأساس احتسابها بوضوح قبل بدء العمل، ومناقشة الاعتراض عليها دون اعتذار ولا مواجهة.",
      en: "Explaining fees and how they are calculated clearly before work begins, and discussing objections without apology and without confrontation.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على تعامل المتدرّب مع حديث الأتعاب.",
          en: "No evidence has been collected yet on the learner's handling of fee conversations.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يتجنّب الحديث عن المال ويحيله إلى غيره.",
          en: "Avoids the money conversation and passes it to someone else.",
        },
        observableBehaviors: [
          {
            ar: "يوصل سؤال الأتعاب إلى الجهة المختصّة في المكتب.",
            en: "Passes the fee question to the right person in the firm.",
          },
          {
            ar: "لا يعطي رقمًا لا يملك صلاحيته.",
            en: "Does not give a figure he has no authority to give.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتذر عن مستوى الأتعاب قبل ذكرها.",
            en: "Apologises for the fee level before stating it.",
          },
          {
            ar: "يترك سؤال الكلفة بلا جواب حتى نهاية الملف.",
            en: "Leaves the cost question unanswered until the matter ends.",
          },
        ],
        successCriteria: [
          {
            ar: "سؤال الأتعاب وصل إلى المختصّ في يومه.",
            en: "The fee question reached the right person the same day.",
          },
          {
            ar: "لم يُعطَ رقم بلا صلاحية.",
            en: "No unauthorised figure was given.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مراسلة إحالة سؤال أتعاب.",
            en: "Correspondence referring a fee question.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يشرح أساس احتساب الأتعاب وما يشمله وما لا يشمله.",
          en: "Explains the basis of the fee and what it does and does not include.",
        },
        observableBehaviors: [
          {
            ar: "يفرّق بين الأتعاب والمصاريف والرسوم.",
            en: "Distinguishes fees, disbursements and official charges.",
          },
          {
            ar: "يسلّم عرض أتعاب مكتوبًا قبل بدء العمل.",
            en: "Delivers a written fee proposal before work starts.",
          },
        ],
        commonMistakes: [
          {
            ar: "يذكر رقمًا إجماليًا بلا بيان ما يشمله.",
            en: "States a lump figure without saying what it covers.",
          },
          {
            ar: "يبدأ العمل قبل توقيع اتفاق الأتعاب.",
            en: "Starts work before the fee agreement is signed.",
          },
        ],
        successCriteria: [
          {
            ar: "اتفاق الأتعاب موقّع قبل بدء العمل.",
            en: "The fee agreement is signed before work begins.",
          },
          {
            ar: "نطاق ما تشمله الأتعاب مكتوب.",
            en: "The scope of what the fee covers is in writing.",
          },
        ],
        evidenceRequired: [
          {
            ar: "عرض أتعاب مكتوب وموقّع.",
            en: "A written and signed fee proposal.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يربط الأتعاب بالقيمة والنطاق، ويبلّغ فورًا بأي عمل خارج النطاق قبل تنفيذه.",
          en: "Ties the fee to value and scope, and flags any out-of-scope work before doing it.",
        },
        observableBehaviors: [
          {
            ar: "يشرح ما يستفيده الموكّل مقابل الأتعاب لا عدد الساعات وحده.",
            en: "Explains what the client gets for the fee, not only the hours.",
          },
          {
            ar: "يطلب موافقة مكتوبة قبل أي عمل خارج النطاق.",
            en: "Seeks written approval before any out-of-scope work.",
          },
        ],
        commonMistakes: [
          {
            ar: "ينفّذ عملًا إضافيًا ثم يطالب بأتعابه.",
            en: "Does extra work and bills for it afterwards.",
          },
          {
            ar: "يشرح الأتعاب بلغة داخلية عن معدّلات الساعة.",
            en: "Explains the fee in internal language about hourly rates.",
          },
        ],
        successCriteria: [
          {
            ar: "لا فاتورة تتضمّن عملًا لم يُوافق عليه مسبقًا.",
            en: "No invoice contains work that was not approved in advance.",
          },
          {
            ar: "شرح القيمة موثّق في عرض الأتعاب.",
            en: "The value explanation is documented in the fee proposal.",
          },
        ],
        evidenceRequired: [
          {
            ar: "موافقة مكتوبة على عمل خارج النطاق.",
            en: "A written approval for out-of-scope work.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يدير اعتراضًا على الأتعاب أو طلب تخفيض دون تنازل غير مبرّر.",
          en: "Handles a fee objection or a discount request without an unjustified concession.",
        },
        observableBehaviors: [
          {
            ar: "يسأل عن سبب الاعتراض قبل الردّ عليه.",
            en: "Asks the reason for the objection before responding to it.",
          },
          {
            ar: "يعرض تعديل النطاق بدل تخفيض السعر عند الاقتضاء.",
            en: "Offers to change the scope rather than cut the price where appropriate.",
          },
        ],
        commonMistakes: [
          {
            ar: "يخفّض السعر فورًا لتفادي فقدان الموكّل.",
            en: "Cuts the price immediately to avoid losing the client.",
          },
          {
            ar: "يدافع عن السعر بشرح كلفة المكتب الداخلية.",
            en: "Defends the price by explaining the firm's internal costs.",
          },
        ],
        successCriteria: [
          {
            ar: "أي تخفيض مقابل تعديل نطاق موثّق.",
            en: "Any reduction is matched by a documented scope change.",
          },
          {
            ar: "استمرّت العلاقة أو انتهت بقرار موثّق.",
            en: "The relationship continued or ended with a documented decision.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مراسلة اعتراض على الأتعاب وردّها.",
            en: "A fee objection exchange and its resolution.",
          },
          {
            ar: "محاكاة مقيّمة لمناقشة أتعاب.",
            en: "An assessed fee-discussion simulation.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يصمّم نماذج تسعير مناسبة لأنواع الملفّات ويشرحها للمكتب والموكّلين.",
          en: "Designs pricing models suited to matter types and explains them to firm and clients.",
        },
        observableBehaviors: [
          {
            ar: "يضع بديلًا واحدًا على الأقل للتسعير بالساعة.",
            en: "Introduces at least one alternative to hourly pricing.",
          },
          {
            ar: "يختبر النموذج على عيّنة ملفّات قبل تعميمه.",
            en: "Tests the model on a sample of matters before rolling it out.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعمّم نموذجًا ثابتًا على ملفّات غير قابلة للتنبّؤ.",
            en: "Applies a fixed model to matters that cannot be predicted.",
          },
          {
            ar: "يسعّر بلا بيانات عن كلفة الإنجاز الفعلية.",
            en: "Prices without data on what delivery actually costs.",
          },
        ],
        successCriteria: [
          {
            ar: "النموذج مطبّق على نوع ملفّات محدّد ومقيس.",
            en: "The model is applied to a defined matter type and measured.",
          },
          {
            ar: "هامش الملفّات المسعّرة بالنموذج معروف.",
            en: "The margin on matters priced under the model is known.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نموذج التسعير وبيانات هامش لعيّنة.",
            en: "The pricing model and margin data for a sample.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع سياسة تسعير ووضوح مالي للمكتب ويقيس نزاعات الأتعاب.",
          en: "Sets a firm pricing and financial-transparency policy and measures fee disputes.",
        },
        observableBehaviors: [
          {
            ar: "يشترط عرض أتعاب مكتوبًا قبل فتح أي ملف.",
            en: "Requires a written fee proposal before any matter is opened.",
          },
          {
            ar: "يراجع سنويًا نزاعات الأتعاب وأسبابها.",
            en: "Reviews fee disputes and their causes yearly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستثني الموكّلين القدامى من السياسة.",
            en: "Exempts long-standing clients from the policy.",
          },
          {
            ar: "يعالج النزاع بالخصم بدل معالجة سببه.",
            en: "Settles disputes with discounts instead of fixing their cause.",
          },
        ],
        successCriteria: [
          {
            ar: "نزاعات الأتعاب تراجعت خلال سنة.",
            en: "Fee disputes fell over a year.",
          },
          {
            ar: "كل ملف مفتوح له عرض أتعاب موقّع.",
            en: "Every open matter has a signed fee proposal.",
          },
        ],
        evidenceRequired: [
          {
            ar: "السياسة المعتمدة وعيّنة تدقيق.",
            en: "The adopted policy and an audit sample.",
          },
          {
            ar: "تقرير نزاعات الأتعاب السنوي.",
            en: "The annual fee dispute report.",
          },
        ],
      },
    ],
    sourceIds: ["src.be-the-ceo", "src.managing-professional-service-firm", "src.they-ask-you-answer", "src.small-firm-roadmap", "src.legal-ops-kpis"],
    confidence: 0.9,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.expectation-management"],
  },
  // -------------------------------------------------------------------------
  // dom.firm-operations
  // -------------------------------------------------------------------------
  {
    id: "skill.matter-intake",
    domainId: "dom.firm-operations",
    name: { ar: "استقبال التوكيل وفتح الملف", en: "Matter intake and opening" },
    synonyms: ["client onboarding", "new matter opening", "conflict check", "قبول التوكيل"],
    definition: {
      ar: "تحويل استفسار إلى ملف مفتوح بطريقة منضبطة: فحص تعارض المصالح، تحديد النطاق، توثيق الوقائع، واتفاق أتعاب موقّع.",
      en: "Turning an enquiry into an opened matter in a disciplined way: conflict check, scope definition, documented facts and a signed fee agreement.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على انضباط المتدرّب في فتح الملفّات.",
          en: "No evidence has been collected yet on the learner's discipline in opening matters.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يفتح الملف بمعلومات ناقصة ويكملها لاحقًا.",
          en: "Opens the matter with incomplete information and fills it in later.",
        },
        observableBehaviors: [
          {
            ar: "يسجّل اسم الموكّل ونوع المسألة في النظام.",
            en: "Records the client's name and matter type in the system.",
          },
          {
            ar: "يحفظ المستندات الأولى في مكان واحد.",
            en: "Stores the first documents in one place.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبدأ العمل قبل فحص تعارض المصالح.",
            en: "Starts work before running the conflict check.",
          },
          {
            ar: "يعتمد على الذاكرة في بيانات الاتصال.",
            en: "Relies on memory for contact details.",
          },
        ],
        successCriteria: [
          {
            ar: "الملف مسجّل في النظام لا في مجلّد شخصي.",
            en: "The matter is recorded in the system, not a personal folder.",
          },
          {
            ar: "بيانات الاتصال موثّقة.",
            en: "Contact details are documented.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ فتح ملف واحد.",
            en: "One matter opening record.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يتّبع قائمة فتح ملف ثابتة تشمل فحص التعارض وتحديد النطاق.",
          en: "Follows a fixed opening checklist covering the conflict check and scope definition.",
        },
        observableBehaviors: [
          {
            ar: "يجري فحص تعارض المصالح ويوثّق نتيجته.",
            en: "Runs the conflict check and documents the result.",
          },
          {
            ar: "يكتب نطاق العمل في جملة أو جملتين.",
            en: "Writes the scope of work in one or two sentences.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفحص التعارض على اسم الموكّل فقط لا على كل الأطراف.",
            en: "Checks conflict against the client's name only, not all parties.",
          },
          {
            ar: "يكتب نطاقًا فضفاضًا يشمل كل شيء.",
            en: "Writes a scope so broad it covers everything.",
          },
        ],
        successCriteria: [
          {
            ar: "فحص التعارض موثّق قبل بدء العمل.",
            en: "The conflict check is documented before work begins.",
          },
          {
            ar: "النطاق مكتوب ومحدّد.",
            en: "The scope is written and specific.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة فتح ملف معبّأة بالكامل.",
            en: "A fully completed opening checklist.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يقرّر قبول التوكيل أو رفضه بمعايير واضحة ويوثّق القرار.",
          en: "Decides to accept or decline the instruction against clear criteria and documents the decision.",
        },
        observableBehaviors: [
          {
            ar: "يقيّم قدرة المكتب على تنفيذ العمل في الوقت المطلوب.",
            en: "Assesses whether the firm can deliver in the time required.",
          },
          {
            ar: "يوثّق سبب الرفض في الملفّات المرفوضة.",
            en: "Documents the reason for refusal in declined matters.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقبل كل توكيل يصل بلا تقييم للطاقة.",
            en: "Accepts every instruction that arrives without assessing capacity.",
          },
          {
            ar: "يرفض شفهيًا بلا توثيق فيتكرّر الطلب.",
            en: "Declines orally without a record, so the request comes back.",
          },
        ],
        successCriteria: [
          {
            ar: "قرار القبول أو الرفض موثّق بمبرّره.",
            en: "The accept or decline decision is documented with its reason.",
          },
          {
            ar: "الملفّات المقبولة ضمن طاقة المكتب.",
            en: "Accepted matters are within the firm's capacity.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قرارا قبول ورفض موثّقان.",
            en: "One documented acceptance and one documented refusal.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يتعامل مع توكيل معقّد أو عاجل دون التنازل عن ضوابط الفتح.",
          en: "Handles a complex or urgent instruction without waiving the opening controls.",
        },
        observableBehaviors: [
          {
            ar: "ينفّذ فحص تعارض سريعًا موثّقًا قبل أي إجراء عاجل.",
            en: "Runs a fast documented conflict check before any urgent step.",
          },
          {
            ar: "يوثّق التوكيل المؤقّت كتابيًا ولو بمراسلة قصيرة.",
            en: "Documents an interim engagement in writing, even in a short message.",
          },
        ],
        commonMistakes: [
          {
            ar: "يؤجّل التوثيق بحجّة العجلة.",
            en: "Postpones documentation on the ground of urgency.",
          },
          {
            ar: "يقبل توكيلًا عاجلًا خارج تخصّص المكتب.",
            en: "Accepts an urgent instruction outside the firm's competence.",
          },
        ],
        successCriteria: [
          {
            ar: "لا ملف عاجل بلا فحص تعارض موثّق.",
            en: "No urgent matter lacks a documented conflict check.",
          },
          {
            ar: "التوكيل المؤقّت موثّق خلال يوم.",
            en: "The interim engagement is documented within a day.",
          },
        ],
        evidenceRequired: [
          {
            ar: "توثيق ملف عاجل بكامل ضوابطه.",
            en: "Documentation of an urgent matter with all its controls.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يصمّم إجراء استقبال موحّدًا ويقيس تحويل الاستفسارات إلى ملفّات.",
          en: "Designs a single intake procedure and measures conversion from enquiry to matter.",
        },
        observableBehaviors: [
          {
            ar: "يوثّق إجراء الاستقبال خطوة بخطوة ويدرّب عليه.",
            en: "Documents the intake procedure step by step and trains on it.",
          },
          {
            ar: "يقيس نسبة الاستفسارات التي تتحوّل إلى توكيل وأسباب الفقد.",
            en: "Measures the enquiry-to-instruction conversion rate and the reasons for loss.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقيس عدد الاستفسارات دون سبب الفقد.",
            en: "Counts enquiries without recording why they were lost.",
          },
          {
            ar: "يجعل الإجراء طويلًا فيهرب منه الفريق.",
            en: "Makes the procedure so long the team works around it.",
          },
        ],
        successCriteria: [
          {
            ar: "نسبة التحويل مقيسة شهريًا.",
            en: "The conversion rate is measured monthly.",
          },
          {
            ar: "أسباب فقد الاستفسارات مصنّفة.",
            en: "Reasons for lost enquiries are classified.",
          },
        ],
        evidenceRequired: [
          {
            ar: "إجراء الاستقبال الموثّق وبيانات التحويل.",
            en: "The documented intake procedure and conversion data.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل الاستقبال بوّابة جودة للمكتب: لا ملف يُفتح خارج المعايير.",
          en: "Makes intake the firm's quality gate: no matter is opened outside the standards.",
        },
        observableBehaviors: [
          {
            ar: "يمنع فتح ملف في النظام بلا فحص تعارض ونطاق واتفاق أتعاب.",
            en: "Blocks matter opening in the system without a conflict check, scope and fee agreement.",
          },
          {
            ar: "يراجع سنويًا الملفّات التي كان يجب رفضها.",
            en: "Reviews yearly the matters that should have been declined.",
          },
        ],
        commonMistakes: [
          {
            ar: "يسمح باستثناءات للشركاء فتضيع البوّابة.",
            en: "Allows partner exceptions and the gate stops working.",
          },
          {
            ar: "يقيس عدد الملفّات المفتوحة لا جودتها.",
            en: "Measures matters opened rather than their quality.",
          },
        ],
        successCriteria: [
          {
            ar: "لا ملف مفتوح بلا العناصر الثلاثة.",
            en: "No matter is open without the three elements.",
          },
          {
            ar: "المراجعة السنوية أدّت إلى تعديل معايير القبول.",
            en: "The annual review led to a change in acceptance criteria.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ضوابط النظام وعيّنة تدقيق.",
            en: "The system controls and an audit sample.",
          },
          {
            ar: "محضر المراجعة السنوية.",
            en: "The annual review record.",
          },
        ],
      },
    ],
    sourceIds: ["src.fire-proof", "src.be-the-ceo", "src.small-firm-roadmap", "src.client-centered-law-firm", "src.governance-raci"],
    confidence: 0.92,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.file-organisation",
    domainId: "dom.firm-operations",
    name: { ar: "تنظيم الملف", en: "File organisation" },
    synonyms: ["document management", "matter file discipline", "record keeping", "حفظ المستندات"],
    definition: {
      ar: "حفظ كل ما يخصّ الملف في مكان واحد بتسمية متّسقة، بحيث يستطيع زميل غير مطّلع أن يتابعه خلال دقائق.",
      en: "Keeping everything about a matter in one place with consistent naming, so a colleague who has never seen it can pick it up in minutes.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على تنظيم المتدرّب لملفّاته.",
          en: "No evidence has been collected yet on how the learner organises files.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يحفظ المستندات في أماكن متفرّقة ويعرف مكانها بذاكرته.",
          en: "Stores documents in scattered places and finds them from memory.",
        },
        observableBehaviors: [
          {
            ar: "يحتفظ بنسخة من كل مستند صادر.",
            en: "Keeps a copy of every outgoing document.",
          },
          {
            ar: "يعرف مكان المستندات الأساسية.",
            en: "Knows where the key documents are.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحفظ مستندات على جهازه الشخصي.",
            en: "Stores documents on his personal device.",
          },
          {
            ar: "يسمّي الملفّات بأسماء غير دالّة.",
            en: "Names files with meaningless labels.",
          },
        ],
        successCriteria: [
          {
            ar: "لا مستند مفقود في الملفّات المراجَعة.",
            en: "No document is missing in the matters reviewed.",
          },
          {
            ar: "المستندات الأساسية متاحة عند الطلب.",
            en: "Key documents are available on request.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مراجعة محتوى ملف واحد.",
            en: "A review of one matter's contents.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يستخدم بنية مجلّدات وتسمية موحّدة في نظام المكتب.",
          en: "Uses a standard folder structure and naming convention in the firm's system.",
        },
        observableBehaviors: [
          {
            ar: "يسمّي المستند بالتاريخ والنوع والطرف.",
            en: "Names the document with date, type and party.",
          },
          {
            ar: "يحفظ كل شيء داخل نظام المكتب لا خارجه.",
            en: "Saves everything inside the firm's system, not outside it.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحفظ نسخًا متعدّدة بلا تمييز النسخة النهائية.",
            en: "Keeps several versions with no way to tell which is final.",
          },
          {
            ar: "يترك المرفقات في البريد دون نقلها إلى الملف.",
            en: "Leaves attachments in email without moving them into the file.",
          },
        ],
        successCriteria: [
          {
            ar: "التسمية متّسقة عبر الملف.",
            en: "Naming is consistent across the matter.",
          },
          {
            ar: "النسخة النهائية مميّزة بوضوح.",
            en: "The final version is clearly marked.",
          },
        ],
        evidenceRequired: [
          {
            ar: "لقطة من بنية ملف منظّم.",
            en: "A snapshot of an organised matter structure.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يبقي الملف جاهزًا للتسليم في أي لحظة: خلاصة، خطّ زمني، ومستندات مصنّفة.",
          en: "Keeps the matter handover-ready at any moment: a summary, a timeline and classified documents.",
        },
        observableBehaviors: [
          {
            ar: "يحدّث ورقة خلاصة الملف بعد كل تطوّر مهمّ.",
            en: "Updates the matter summary sheet after every significant development.",
          },
          {
            ar: "يحفظ محاضر المكالمات والاجتماعات في الملف.",
            en: "Files call and meeting records in the matter.",
          },
        ],
        commonMistakes: [
          {
            ar: "يوثّق المستندات ويهمل قرارات الموكّل الشفهية.",
            en: "Files documents and neglects the client's oral decisions.",
          },
          {
            ar: "يؤجّل التوثيق إلى نهاية الأسبوع.",
            en: "Defers filing to the end of the week.",
          },
        ],
        successCriteria: [
          {
            ar: "زميل غير مطّلع فهم وضع الملف خلال عشر دقائق.",
            en: "A colleague new to the matter understood its state within ten minutes.",
          },
          {
            ar: "خلاصة الملف محدّثة.",
            en: "The matter summary is current.",
          },
        ],
        evidenceRequired: [
          {
            ar: "اختبار تسليم ملف إلى زميل.",
            en: "A handover test to a colleague.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "ينظّم ملفًّا ضخمًا أو متعدّد الأطراف بحيث يبقى البحث فيه سريعًا.",
          en: "Organises a large or multi-party matter so searching it stays fast.",
        },
        observableBehaviors: [
          {
            ar: "يبني فهرسًا للمستندات الجوهرية في الملفّات الكبيرة.",
            en: "Builds an index of key documents in large matters.",
          },
          {
            ar: "يفصل مسارات الأطراف المختلفة داخل الملف.",
            en: "Separates the different parties' streams within the matter.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبني فهرسًا ولا يحدّثه.",
            en: "Builds an index and never updates it.",
          },
          {
            ar: "يفرط في التصنيف فيصعب الحفظ اليومي.",
            en: "Over-classifies until day-to-day filing becomes hard.",
          },
        ],
        successCriteria: [
          {
            ar: "أي مستند جوهري يُعثر عليه خلال دقيقتين.",
            en: "Any key document is found within two minutes.",
          },
          {
            ar: "الفهرس محدّث حتى تاريخه.",
            en: "The index is current.",
          },
        ],
        evidenceRequired: [
          {
            ar: "فهرس ملف كبير مع اختبار بحث.",
            en: "A large-matter index with a search test.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضع معيار تنظيم ملفّات للمكتب ويدقّق الالتزام به.",
          en: "Sets a firm file-organisation standard and audits compliance with it.",
        },
        observableBehaviors: [
          {
            ar: "يضع دليل تسمية وبنية موحّدًا ويدرّب عليه.",
            en: "Issues a naming and structure guide and trains on it.",
          },
          {
            ar: "يدقّق عيّنة ملفّات فصليًا.",
            en: "Audits a sample of matters quarterly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض معيارًا لا يناسب أنواع الملفّات كلّها.",
            en: "Imposes a standard that does not fit every matter type.",
          },
          {
            ar: "يدقّق ولا يعالج المخالفات.",
            en: "Audits without addressing the exceptions found.",
          },
        ],
        successCriteria: [
          {
            ar: "نسبة الالتزام مقيسة وتتحسّن.",
            en: "The compliance rate is measured and improving.",
          },
          {
            ar: "المخالفات المتكرّرة عولجت بتعديل الدليل أو التدريب.",
            en: "Recurring exceptions were addressed by amending the guide or the training.",
          },
        ],
        evidenceRequired: [
          {
            ar: "دليل التنظيم ونتائج تدقيقين.",
            en: "The organisation guide and two audit results.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يربط تنظيم الملفّات بحماية البيانات وسياسة الحفظ والإتلاف.",
          en: "Links file organisation to data protection and the retention and destruction policy.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد سياسة حفظ وإتلاف بمدد محدّدة لكل نوع مستند.",
            en: "Adopts a retention and destruction policy with defined periods per document type.",
          },
          {
            ar: "يضبط صلاحيات الوصول بحسب الدور لا بحسب الأقدمية.",
            en: "Sets access rights by role rather than by seniority.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحتفظ بكل شيء إلى الأبد تجنّبًا للقرار.",
            en: "Keeps everything for ever to avoid making a decision.",
          },
          {
            ar: "يمنح وصولًا واسعًا لتسهيل العمل.",
            en: "Grants broad access to make work easier.",
          },
        ],
        successCriteria: [
          {
            ar: "سياسة الحفظ مطبّقة ومقيسة.",
            en: "The retention policy is applied and measured.",
          },
          {
            ar: "صلاحيات الوصول مراجَعة سنويًا.",
            en: "Access rights are reviewed yearly.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سياسة الحفظ المعتمدة.",
            en: "The adopted retention policy.",
          },
          {
            ar: "تقرير مراجعة صلاحيات الوصول.",
            en: "The access rights review report.",
          },
        ],
      },
    ],
    sourceIds: ["src.modernize-your-law-firm", "src.small-firm-roadmap", "src.legal-ops-kpis", "src.governance-raci"],
    confidence: 0.88,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.workflow-design",
    domainId: "dom.firm-operations",
    name: { ar: "تصميم سير العمل", en: "Workflow design" },
    synonyms: ["process mapping", "standard operating procedures", "matter workflow", "الإجراءات المعيارية"],
    definition: {
      ar: "رسم خطوات إنجاز نوع من الملفّات، وتحديد من ينفّذ كل خطوة ومتى، بحيث تتكرّر النتيجة بغضّ النظر عن الشخص.",
      en: "Mapping the steps of a matter type and fixing who does each step and when, so the result repeats regardless of who is on it.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على تعامل المتدرّب مع سير العمل.",
          en: "No evidence has been collected yet on the learner's handling of workflow.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يعمل بحسب ما يتذكّره من المرّات السابقة.",
          en: "Works from what he remembers of previous times.",
        },
        observableBehaviors: [
          {
            ar: "ينجز الخطوات الأساسية للملف.",
            en: "Completes the basic steps of the matter.",
          },
          {
            ar: "يسأل زميلًا عن الخطوة التالية عند الشكّ.",
            en: "Asks a colleague about the next step when unsure.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفوّت خطوة إجرائية لأنها ليست مكتوبة.",
            en: "Misses a procedural step because it is not written down.",
          },
          {
            ar: "يعيد اختراع الترتيب في كل ملف.",
            en: "Reinvents the sequence in every matter.",
          },
        ],
        successCriteria: [
          {
            ar: "الخطوات الأساسية أُنجزت.",
            en: "The basic steps were completed.",
          },
          {
            ar: "لم تفت خطوة ذات مهلة.",
            en: "No step with a deadline was missed.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ خطوات ملف واحد.",
            en: "The step log of one matter.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يستخدم قائمة خطوات مكتوبة لنوع الملفّات المتكرّر.",
          en: "Uses a written step list for a recurring matter type.",
        },
        observableBehaviors: [
          {
            ar: "يتّبع قائمة خطوات ويؤشّر على المنجز منها.",
            en: "Follows a step list and ticks off what is done.",
          },
          {
            ar: "يقترح إضافة خطوة ناقصة إلى القائمة.",
            en: "Suggests adding a missing step to the list.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتّبع القائمة حرفيًا في ملف لا يناسبها.",
            en: "Follows the list literally in a matter it does not fit.",
          },
          {
            ar: "يؤشّر على الخطوة قبل إنجازها فعلًا.",
            en: "Ticks the step before it is actually done.",
          },
        ],
        successCriteria: [
          {
            ar: "القائمة مستخدمة ومؤشّرة بصدق.",
            en: "The list is used and ticked honestly.",
          },
          {
            ar: "اقتراح تحسين واحد على الأقل قُدّم.",
            en: "At least one improvement was proposed.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة خطوات معبّأة لملف حقيقي.",
            en: "A completed step list for a real matter.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يرسم سير عمل لنوع ملفّات: الخطوات، المسؤول، المهلة، والمخرج.",
          en: "Maps a workflow for a matter type: steps, owner, deadline and deliverable.",
        },
        observableBehaviors: [
          {
            ar: "يوثّق كل خطوة بمسؤول ومهلة ومخرج.",
            en: "Documents each step with an owner, a deadline and a deliverable.",
          },
          {
            ar: "يحدّد نقاط القرار التي تحتاج موافقة أقدم.",
            en: "Identifies the decision points needing senior approval.",
          },
        ],
        commonMistakes: [
          {
            ar: "يرسم السير كما يجب أن يكون لا كما يجري فعلًا.",
            en: "Maps the process as it should be rather than as it actually runs.",
          },
          {
            ar: "يضيف نقاط موافقة كثيرة فيتعطّل العمل.",
            en: "Adds so many approval points the work stalls.",
          },
        ],
        successCriteria: [
          {
            ar: "السير الموثّق مطابق للممارسة الفعلية.",
            en: "The documented workflow matches actual practice.",
          },
          {
            ar: "نقاط الموافقة محدّدة ومبرّرة.",
            en: "Approval points are identified and justified.",
          },
        ],
        evidenceRequired: [
          {
            ar: "خريطة سير عمل لنوع ملفّات واحد.",
            en: "A workflow map for one matter type.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يكتشف الاختناقات في سير العمل ويعالجها بقياس لا بانطباع.",
          en: "Finds bottlenecks in the workflow and fixes them with measurement rather than impression.",
        },
        observableBehaviors: [
          {
            ar: "يقيس زمن كل مرحلة ويحدّد الأطول.",
            en: "Measures the time of each stage and identifies the longest.",
          },
          {
            ar: "يجرّب تعديلًا واحدًا ويقيس أثره قبل تعميمه.",
            en: "Tests one change and measures its effect before rolling it out.",
          },
        ],
        commonMistakes: [
          {
            ar: "يغيّر عدّة عناصر معًا فلا يعرف الأثر.",
            en: "Changes several elements at once and cannot tell what worked.",
          },
          {
            ar: "يعالج الاختناق بزيادة الموارد لا بتبسيط الخطوة.",
            en: "Solves the bottleneck by adding resources rather than simplifying the step.",
          },
        ],
        successCriteria: [
          {
            ar: "زمن المرحلة الأطول انخفض بعد التعديل.",
            en: "The longest stage's time fell after the change.",
          },
          {
            ar: "التعديل موثّق مع بياناته.",
            en: "The change is documented with its data.",
          },
        ],
        evidenceRequired: [
          {
            ar: "بيانات زمن المراحل قبل وبعد.",
            en: "Stage-time data before and after.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يؤتمت الخطوات المتكرّرة بعد رسم السير، لا قبله.",
          en: "Automates repetitive steps after mapping the workflow, not before.",
        },
        observableBehaviors: [
          {
            ar: "يؤتمت خطوة واحدة ويقارن النتيجة بالطريقة اليدوية.",
            en: "Automates one step and compares the result with the manual method.",
          },
          {
            ar: "يبقي مسارًا يدويًا للحالات الاستثنائية.",
            en: "Keeps a manual path for exceptional cases.",
          },
        ],
        commonMistakes: [
          {
            ar: "يؤتمت إجراءً مشوّشًا فيصبح خطأً أسرع.",
            en: "Automates a broken process and makes the error faster.",
          },
          {
            ar: "يلغي المسار اليدوي فيتعطّل الاستثناء.",
            en: "Removes the manual path and exceptions get stuck.",
          },
        ],
        successCriteria: [
          {
            ar: "الخطوة المؤتمتة أسرع وأقلّ خطأ بالقياس.",
            en: "The automated step is measurably faster and less error-prone.",
          },
          {
            ar: "المسار اليدوي متاح وموثّق.",
            en: "The manual path is available and documented.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مقارنة أداء قبل وبعد الأتمتة.",
            en: "A before-and-after performance comparison.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل سير العمل موثّقًا لكل نوع ملفّات، ويربطه بمؤشّرات أداء تُراجع دوريًا.",
          en: "Ensures every matter type has a documented workflow tied to indicators reviewed periodically.",
        },
        observableBehaviors: [
          {
            ar: "يوثّق سير العمل لكل نوع ملفّات رئيسي في المكتب.",
            en: "Documents the workflow for every principal matter type in the firm.",
          },
          {
            ar: "يربط كل سير بمؤشّر زمن دورة ويراجعه فصليًا.",
            en: "Ties each workflow to a cycle-time indicator reviewed quarterly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يوثّق الإجراءات ولا يراجعها فتتقادم.",
            en: "Documents procedures and never revisits them, so they go stale.",
          },
          {
            ar: "يقيس زمن الدورة ويهمل جودة المخرج.",
            en: "Measures cycle time and ignores output quality.",
          },
        ],
        successCriteria: [
          {
            ar: "كل نوع ملفّات رئيسي له سير موثّق ومحدَّث.",
            en: "Every principal matter type has a documented, current workflow.",
          },
          {
            ar: "زمن الدورة يتحسّن دون تراجع في الجودة.",
            en: "Cycle time improves without a fall in quality.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مكتبة إجراءات المكتب.",
            en: "The firm's procedure library.",
          },
          {
            ar: "تقرير مؤشّرات زمن الدورة والجودة.",
            en: "The cycle-time and quality indicator report.",
          },
        ],
      },
    ],
    sourceIds: ["src.modernize-your-law-firm", "src.fire-proof", "src.legal-project-management", "src.legal-ops-kpis", "src.small-firm-roadmap"],
    confidence: 0.91,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.knowledge-management",
    domainId: "dom.firm-operations",
    name: { ar: "إدارة المعرفة", en: "Knowledge management" },
    synonyms: ["precedent bank", "know-how sharing", "template library", "بنك النماذج"],
    definition: {
      ar: "تحويل ما تعلّمه المكتب من كل ملف إلى نماذج ومذكّرات متاحة، بحيث لا يُعاد بناء العمل نفسه مرّتين.",
      en: "Turning what the firm learns from each matter into available templates and notes, so the same work is never built twice.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على مساهمة المتدرّب في إدارة المعرفة.",
          en: "No evidence has been collected yet on the learner's contribution to knowledge management.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يحتفظ بنماذجه لنفسه في مجلّد شخصي.",
          en: "Keeps his own templates in a personal folder.",
        },
        observableBehaviors: [
          {
            ar: "يحتفظ بنسخ من مذكّرات سابقة يستفيد منها.",
            en: "Keeps copies of earlier memoranda he reuses.",
          },
          {
            ar: "يشارك نموذجًا عند الطلب.",
            en: "Shares a template on request.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعيد استخدام نموذج قديم دون التحقّق من تحديثه القانوني.",
            en: "Reuses an old template without checking it is still legally current.",
          },
          {
            ar: "يخزّن النماذج خارج نظام المكتب.",
            en: "Stores templates outside the firm's system.",
          },
        ],
        successCriteria: [
          {
            ar: "النماذج المستخدمة محفوظة لا مؤقّتة.",
            en: "The templates used are stored, not ephemeral.",
          },
          {
            ar: "شارك نموذجًا واحدًا على الأقل.",
            en: "Shared at least one template.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة النماذج التي يستخدمها.",
            en: "A list of the templates he uses.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يودع النماذج والمذكّرات في مكتبة المكتب بتصنيف صحيح.",
          en: "Deposits templates and memoranda in the firm's library under the right classification.",
        },
        observableBehaviors: [
          {
            ar: "يرفع كل نموذج جديد إلى المكتبة مع وصف قصير.",
            en: "Uploads every new template to the library with a short description.",
          },
          {
            ar: "يذكر تاريخ آخر تحديث قانوني للنموذج.",
            en: "States the date the template was last legally checked.",
          },
        ],
        commonMistakes: [
          {
            ar: "يرفع نماذج بلا وصف فيتعذّر العثور عليها.",
            en: "Uploads templates with no description, so nobody finds them.",
          },
          {
            ar: "يرفع نسخة تحتوي بيانات موكّل.",
            en: "Uploads a version still containing client data.",
          },
        ],
        successCriteria: [
          {
            ar: "النماذج المودعة موصوفة ومجرّدة من بيانات الموكّلين.",
            en: "Deposited templates are described and stripped of client data.",
          },
          {
            ar: "تاريخ التحديث مذكور.",
            en: "The update date is stated.",
          },
        ],
        evidenceRequired: [
          {
            ar: "نموذجان مودعان في المكتبة.",
            en: "Two templates deposited in the library.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يكتب مذكّرة معرفة بعد كل ملف مهمّ تلخّص ما تعلّمه المكتب.",
          en: "Writes a knowledge note after each significant matter summarising what the firm learned.",
        },
        observableBehaviors: [
          {
            ar: "يكتب مذكّرة من صفحة واحدة عند إغلاق الملف.",
            en: "Writes a one-page note when the matter closes.",
          },
          {
            ar: "يحدّد في المذكّرة ما ينطبق على ملفّات مشابهة.",
            en: "States in the note what applies to similar matters.",
          },
        ],
        commonMistakes: [
          {
            ar: "يكتب سردًا للوقائع بدل الدرس القابل للتطبيق.",
            en: "Writes a narrative of the facts instead of the applicable lesson.",
          },
          {
            ar: "يؤجّل المذكّرة إلى ما بعد نسيان التفاصيل.",
            en: "Defers the note until the detail is forgotten.",
          },
        ],
        successCriteria: [
          {
            ar: "المذكّرة كُتبت خلال أسبوعين من الإغلاق.",
            en: "The note was written within two weeks of closure.",
          },
          {
            ar: "تتضمّن درسًا قابلًا للتطبيق.",
            en: "It contains an applicable lesson.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مذكّرتا معرفة مؤرّختان.",
            en: "Two dated knowledge notes.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يبني مكتبة نماذج لمجال ممارسة ويحدّثها عند تغيّر القانون.",
          en: "Builds a template library for a practice area and updates it when the law changes.",
        },
        observableBehaviors: [
          {
            ar: "يراجع نماذج مجاله عند صدور تعديل تشريعي.",
            en: "Reviews his area's templates when legislation changes.",
          },
          {
            ar: "يعلّم النماذج المتقادمة بوضوح قبل سحبها.",
            en: "Marks obsolete templates clearly before withdrawing them.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحتفظ بنماذج متقادمة في المكتبة.",
            en: "Leaves outdated templates in the library.",
          },
          {
            ar: "يبني مكتبة ضخمة بلا تصنيف مفيد.",
            en: "Builds a huge library with no useful classification.",
          },
        ],
        successCriteria: [
          {
            ar: "لا نموذج متقادم قيد الاستخدام.",
            en: "No outdated template is in use.",
          },
          {
            ar: "التحديث تمّ خلال شهر من التعديل التشريعي.",
            en: "The update was made within a month of the legislative change.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ تحديث المكتبة.",
            en: "The library update log.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يجعل مشاركة المعرفة جزءًا من دورة العمل لا نشاطًا إضافيًا.",
          en: "Makes knowledge sharing part of the work cycle rather than an extra activity.",
        },
        observableBehaviors: [
          {
            ar: "يجعل مذكّرة المعرفة خطوة في إجراء إغلاق الملف.",
            en: "Makes the knowledge note a step in the matter closing procedure.",
          },
          {
            ar: "يخصّص وقتًا شهريًا لعرض ما تعلّمه الفريق.",
            en: "Sets aside monthly time for the team to present what it learned.",
          },
        ],
        commonMistakes: [
          {
            ar: "يطلب مشاركة المعرفة دون تخصيص وقت لها.",
            en: "Asks for knowledge sharing without allocating time to it.",
          },
          {
            ar: "يكافئ من ينتج نماذج لا من يستخدمها ويحسّنها.",
            en: "Rewards template producers rather than those who use and improve them.",
          },
        ],
        successCriteria: [
          {
            ar: "نسبة الملفّات المغلقة بمذكّرة معرفة مرتفعة.",
            en: "A high share of closed matters carries a knowledge note.",
          },
          {
            ar: "الجلسة الشهرية منعقدة بانتظام.",
            en: "The monthly session runs regularly.",
          },
        ],
        evidenceRequired: [
          {
            ar: "إجراء الإغلاق المعدّل وبيانات المذكّرات.",
            en: "The amended closing procedure and knowledge note data.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يجعل معرفة المكتب أصلًا مستقلًّا عن الأشخاص وقابلًا للانتقال.",
          en: "Turns the firm's knowledge into an asset independent of individuals and capable of being handed on.",
        },
        observableBehaviors: [
          {
            ar: "يحدّد المعرفة الحرجة الموجودة في رأس شخص واحد ويوثّقها.",
            en: "Identifies critical knowledge held in one person's head and documents it.",
          },
          {
            ar: "يقيس استخدام المكتبة لا حجمها.",
            en: "Measures library usage rather than its size.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقيس عدد الوثائق ويهمل من يستخدمها.",
            en: "Counts documents and ignores who uses them.",
          },
          {
            ar: "يوثّق كل شيء فيصعب العثور على المهمّ.",
            en: "Documents everything until the important is unfindable.",
          },
        ],
        successCriteria: [
          {
            ar: "لا معرفة حرجة محصورة في شخص واحد.",
            en: "No critical knowledge is confined to a single person.",
          },
          {
            ar: "استخدام المكتبة مقيس ومتزايد.",
            en: "Library usage is measured and rising.",
          },
        ],
        evidenceRequired: [
          {
            ar: "خريطة المعرفة الحرجة.",
            en: "The critical knowledge map.",
          },
          {
            ar: "تقرير استخدام المكتبة.",
            en: "The library usage report.",
          },
        ],
      },
    ],
    sourceIds: ["src.built-to-sell", "src.managing-professional-service-firm", "src.modernize-your-law-firm", "src.smarter-collaboration"],
    confidence: 0.85,
    reviewStatus: "ai_suggested",
  },
  // -------------------------------------------------------------------------
  // dom.professional-judgment
  // -------------------------------------------------------------------------
  {
    id: "skill.quality-control",
    domainId: "dom.professional-judgment",
    name: { ar: "ضبط الجودة", en: "Quality control" },
    synonyms: ["review before release", "second pair of eyes", "error prevention", "المراجعة قبل الإصدار"],
    definition: {
      ar: "التأكّد قبل خروج أي عمل من صحّته ودقّته واكتماله، ومعالجة الخطأ حين يقع بمنطق الإجراء لا باللوم.",
      en: "Verifying that any work is correct, accurate and complete before it leaves, and dealing with errors through process rather than blame.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على ضبط المتدرّب لجودة عمله.",
          en: "No evidence has been collected yet on the learner's quality control.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يراجع عمله مرّة واحدة قبل الإرسال إن اتّسع الوقت.",
          en: "Reviews his work once before sending, if time allows.",
        },
        observableBehaviors: [
          {
            ar: "يقرأ المستند قبل إرساله.",
            en: "Reads the document before sending it.",
          },
          {
            ar: "يتحقّق من اسم المرسل إليه والمرفقات.",
            en: "Checks the addressee and the attachments.",
          },
        ],
        commonMistakes: [
          {
            ar: "يراجع فور الكتابة فلا يرى أخطاءه.",
            en: "Reviews immediately after writing and cannot see his own errors.",
          },
          {
            ar: "يعتمد على المدقّق الإملائي وحده.",
            en: "Relies on the spellchecker alone.",
          },
        ],
        successCriteria: [
          {
            ar: "لا خطأ في اسم المرسل إليه أو المرفق.",
            en: "No error in the addressee or the attachment.",
          },
          {
            ar: "تمّت قراءة المستند قبل الإرسال.",
            en: "The document was read before sending.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة تحقّق قبل الإرسال لمستند واحد.",
            en: "A pre-send checklist for one document.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يستخدم قائمة تحقّق ثابتة قبل إخراج أي عمل.",
          en: "Uses a fixed checklist before releasing any work.",
        },
        observableBehaviors: [
          {
            ar: "يتحقّق من الأرقام والتواريخ وأسماء الأطراف بندًا بندًا.",
            en: "Checks figures, dates and party names item by item.",
          },
          {
            ar: "يترك فاصلًا زمنيًا بين الكتابة والمراجعة.",
            en: "Leaves a gap between writing and reviewing.",
          },
        ],
        commonMistakes: [
          {
            ar: "يؤشّر على القائمة دون تنفيذها فعلًا.",
            en: "Ticks the checklist without actually doing it.",
          },
          {
            ar: "يراجع الشكل ويهمل صحّة المرجع القانوني.",
            en: "Reviews the form and neglects the accuracy of the legal reference.",
          },
        ],
        successCriteria: [
          {
            ar: "القائمة منفّذة وموثّقة.",
            en: "The checklist was carried out and recorded.",
          },
          {
            ar: "لا خطأ في الأرقام والتواريخ.",
            en: "No error in figures or dates.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة تحقّق معبّأة لمستند صادر.",
            en: "A completed checklist for an outgoing document.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يطلب مراجعة زميل للأعمال ذات المخاطر العالية ويستقبل ملاحظاته بلا دفاع.",
          en: "Asks a colleague to review high-risk work and receives the comments without defensiveness.",
        },
        observableBehaviors: [
          {
            ar: "يحدّد الأعمال التي تستوجب مراجعة ثانية ويطلبها مبكرًا.",
            en: "Identifies work that requires a second review and requests it early.",
          },
          {
            ar: "يوثّق ما عُدّل نتيجة المراجعة.",
            en: "Records what changed as a result of the review.",
          },
        ],
        commonMistakes: [
          {
            ar: "يطلب المراجعة قبل الموعد بساعة.",
            en: "Asks for the review an hour before the deadline.",
          },
          {
            ar: "يرفض ملاحظة دون مناقشة أساسها.",
            en: "Rejects a comment without discussing its basis.",
          },
        ],
        successCriteria: [
          {
            ar: "المراجعة تمّت قبل الموعد بوقت كافٍ.",
            en: "The review happened in good time before the deadline.",
          },
          {
            ar: "التعديلات موثّقة.",
            en: "The amendments are documented.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مستند بنسختين قبل وبعد المراجعة.",
            en: "A document in two versions, before and after review.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يكتشف الخطأ ويبلّغ عنه فورًا ويقود تصحيحه مع الموكّل.",
          en: "Detects an error, reports it at once, and leads its correction with the client.",
        },
        observableBehaviors: [
          {
            ar: "يبلّغ المشرف والموكّل بالخطأ الجوهري في يومه.",
            en: "Reports a material error to supervisor and client the same day.",
          },
          {
            ar: "يعرض خطّة تصحيح بتواريخ محدّدة.",
            en: "Puts forward a correction plan with fixed dates.",
          },
        ],
        commonMistakes: [
          {
            ar: "يصحّح الخطأ بصمت ويأمل ألّا يُكتشف.",
            en: "Corrects the error quietly and hopes it goes unnoticed.",
          },
          {
            ar: "يبلّغ بالخطأ بلا تقييم لأثره على الموكّل.",
            en: "Reports the error without assessing its effect on the client.",
          },
        ],
        successCriteria: [
          {
            ar: "الإبلاغ تمّ خلال يوم عمل من الاكتشاف.",
            en: "Reporting occurred within one working day of discovery.",
          },
          {
            ar: "خطّة التصحيح نُفّذت.",
            en: "The correction plan was carried out.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير خطأ وخطّة تصحيحه.",
            en: "An error report and its correction plan.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يصمّم نظام مراجعة متناسبًا مع المخاطر لا مراجعة شاملة لكل شيء.",
          en: "Designs a risk-proportionate review system rather than reviewing everything.",
        },
        observableBehaviors: [
          {
            ar: "يصنّف الأعمال بحسب المخاطر ويحدّد مستوى المراجعة لكل صنف.",
            en: "Classifies work by risk and sets the review level for each class.",
          },
          {
            ar: "يقيس معدّل الأخطاء المكتشفة قبل الإرسال وبعده.",
            en: "Measures the rate of errors caught before and after release.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفرض مراجعة مزدوجة على كل شيء فيتعطّل العمل.",
            en: "Imposes double review on everything and the work stalls.",
          },
          {
            ar: "يقيس الأخطاء ولا يحلّل أسبابها.",
            en: "Counts errors without analysing their causes.",
          },
        ],
        successCriteria: [
          {
            ar: "نسبة الأخطاء المكتشفة بعد الإرسال تراجعت.",
            en: "The rate of errors caught after release has fallen.",
          },
          {
            ar: "مستويات المراجعة موثّقة ومتناسبة.",
            en: "Review levels are documented and proportionate.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مصفوفة المخاطر ومستويات المراجعة.",
            en: "The risk and review-level matrix.",
          },
          {
            ar: "بيانات الأخطاء لفصلين.",
            en: "Two quarters of error data.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يبني ثقافة تعامل مع الخطأ كمعلومة، ويحوّل كل خطأ جوهري إلى تعديل إجرائي.",
          en: "Builds a culture that treats error as information, and turns every material error into a procedural change.",
        },
        observableBehaviors: [
          {
            ar: "يعقد مراجعة سبب جذري لكل خطأ جوهري.",
            en: "Holds a root-cause review for every material error.",
          },
          {
            ar: "يعلن نتائج المراجعة داخليًا بلا تسمية أفراد.",
            en: "Publishes the review findings internally without naming individuals.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعاقب الخطأ فيختفي الإبلاغ عنه.",
            en: "Punishes error and reporting disappears.",
          },
          {
            ar: "يجري المراجعة ولا يعدّل إجراءً.",
            en: "Holds the review and changes no procedure.",
          },
        ],
        successCriteria: [
          {
            ar: "كل خطأ جوهري أنتج تعديلًا إجرائيًا أو قرارًا مبرّرًا بعدمه.",
            en: "Every material error produced a procedural change or a reasoned decision not to make one.",
          },
          {
            ar: "الإبلاغ الطوعي عن الأخطاء ارتفع.",
            en: "Voluntary error reporting has risen.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ مراجعات السبب الجذري.",
            en: "The root-cause review log.",
          },
          {
            ar: "بيانات الإبلاغ الطوعي لسنة.",
            en: "A year of voluntary reporting data.",
          },
        ],
      },
    ],
    sourceIds: ["src.legal-ops-kpis", "src.managing-professional-service-firm", "src.the-antidote", "src.fire-proof", "src.ali-rise"],
    confidence: 0.9,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.decision-making",
    domainId: "dom.professional-judgment",
    name: { ar: "اتّخاذ القرار", en: "Decision-making" },
    synonyms: ["professional judgment", "advising under uncertainty", "risk assessment", "التقدير القانوني"],
    definition: {
      ar: "الوصول إلى قرار قابل للتبرير في وضع ناقص المعلومات، بتحديد الخيارات وكلفة الخطأ ومن يملك سلطة القرار.",
      en: "Reaching a defensible decision with incomplete information, by identifying the options, the cost of being wrong, and who owns the decision.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على أسلوب المتدرّب في اتّخاذ القرار.",
          en: "No evidence has been collected yet on how the learner takes decisions.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يؤجّل القرار انتظارًا لمعلومة كاملة لا تأتي.",
          en: "Postpones the decision waiting for complete information that never arrives.",
        },
        observableBehaviors: [
          {
            ar: "يجمع المعلومات المتاحة قبل القرار.",
            en: "Gathers the available information before deciding.",
          },
          {
            ar: "يستشير من هو أقدم منه.",
            en: "Consults a more senior colleague.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترك القرار للظرف فيُتّخذ بالتقادم.",
            en: "Leaves the decision to circumstance, so it is taken by default.",
          },
          {
            ar: "يستشير عدّة أشخاص بلا تحديد صاحب القرار.",
            en: "Consults several people without identifying who owns the decision.",
          },
        ],
        successCriteria: [
          {
            ar: "المعلومات المتاحة موثّقة.",
            en: "The available information is documented.",
          },
          {
            ar: "الاستشارة تمّت قبل انقضاء المهلة.",
            en: "The consultation happened before the deadline expired.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ملاحظة عن قرار مؤجّل وسببه.",
            en: "A note on a deferred decision and its reason.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يحدّد الخيارات المتاحة ويعرض إيجابيات وسلبيات كل منها.",
          en: "Identifies the available options and sets out the upside and downside of each.",
        },
        observableBehaviors: [
          {
            ar: "يكتب خيارين على الأقل قبل التوصية.",
            en: "Writes at least two options before recommending.",
          },
          {
            ar: "يذكر المعلومة الناقصة صراحة.",
            en: "States explicitly what information is missing.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعرض خيارًا واحدًا مغلّفًا كخيارين.",
            en: "Presents one option dressed up as two.",
          },
          {
            ar: "يخفي المعلومة الناقصة كي يبدو القرار متينًا.",
            en: "Hides the missing information to make the decision look solid.",
          },
        ],
        successCriteria: [
          {
            ar: "الخيارات مكتوبة مع إيجابياتها وسلبياتها.",
            en: "The options are written with their pros and cons.",
          },
          {
            ar: "الفجوة المعلوماتية معلنة.",
            en: "The information gap is stated.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مذكّرة خيارات لملف حقيقي.",
            en: "An options memorandum for a real matter.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يوصي بخيار محدّد مع تبريره وكلفة الخطأ، ويميّز قرار المحامي عن قرار الموكّل.",
          en: "Recommends a specific option with reasons and the cost of being wrong, and distinguishes the lawyer's decision from the client's.",
        },
        observableBehaviors: [
          {
            ar: "يذكر أثر الخيار الخاطئ على الموكّل.",
            en: "States the effect on the client if the option turns out wrong.",
          },
          {
            ar: "يحدّد أي القرارات تعود للموكّل وحده.",
            en: "Identifies which decisions belong to the client alone.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتّخذ قرارًا تجاريًا نيابة عن الموكّل.",
            en: "Takes a commercial decision on the client's behalf.",
          },
          {
            ar: "يوصي بلا ذكر ما يمكن أن يجعل التوصية خاطئة.",
            en: "Recommends without saying what could make the recommendation wrong.",
          },
        ],
        successCriteria: [
          {
            ar: "التوصية مسبّبة ومكتوبة.",
            en: "The recommendation is reasoned and in writing.",
          },
          {
            ar: "قرار الموكّل موثّق بموافقته.",
            en: "The client's decision is documented with his approval.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مذكّرة توصية وموافقة موكّل.",
            en: "A recommendation memorandum and the client's approval.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يقرّر تحت ضغط الوقت في وضع غامض، ويوثّق أساس قراره لحظتها.",
          en: "Decides under time pressure in an ambiguous situation and records the basis of the decision at the time.",
        },
        observableBehaviors: [
          {
            ar: "يوثّق ما كان معلومًا وقت القرار لا بعده.",
            en: "Records what was known at the time of the decision, not afterwards.",
          },
          {
            ar: "يحدّد نقطة مراجعة يعيد عندها تقييم القرار.",
            en: "Sets a review point at which the decision will be reassessed.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقرّر في لحظة إرهاق أو انفعال.",
            en: "Decides in a moment of fatigue or emotion.",
          },
          {
            ar: "يعيد كتابة أساس القرار بعد ظهور النتيجة.",
            en: "Rewrites the basis of the decision after the result is known.",
          },
        ],
        successCriteria: [
          {
            ar: "التوثيق مؤرّخ بتاريخ القرار.",
            en: "The record is dated on the day of the decision.",
          },
          {
            ar: "نقطة المراجعة محدّدة ونُفّذت.",
            en: "The review point is fixed and was carried out.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مذكّرة قرار مؤرّخة ونتيجة مراجعته.",
            en: "A dated decision memorandum and the outcome of its review.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضع معايير قرار للفريق تحدّد ما يُحسم محلّيًا وما يُصعّد.",
          en: "Sets decision criteria for the team defining what is settled locally and what is escalated.",
        },
        observableBehaviors: [
          {
            ar: "يوثّق حدود الصلاحية بالقيمة ونوع المخاطرة.",
            en: "Documents authority limits by value and risk type.",
          },
          {
            ar: "يراجع القرارات المصعّدة بحثًا عمّا كان يمكن حسمه محلّيًا.",
            en: "Reviews escalated decisions for what could have been settled locally.",
          },
        ],
        commonMistakes: [
          {
            ar: "يضع حدودًا ضيّقة فيتحوّل كل شيء إلى تصعيد.",
            en: "Sets limits so narrow that everything becomes an escalation.",
          },
          {
            ar: "يترك حدود الصلاحية شفهية.",
            en: "Leaves the authority limits unwritten.",
          },
        ],
        successCriteria: [
          {
            ar: "حدود الصلاحية موثّقة ومعروفة للفريق.",
            en: "Authority limits are documented and known to the team.",
          },
          {
            ar: "نسبة التصعيد غير الضروري تراجعت.",
            en: "Unnecessary escalation has fallen.",
          },
        ],
        evidenceRequired: [
          {
            ar: "وثيقة حدود الصلاحية.",
            en: "The authority limits document.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يبني ذاكرة قرارات للمكتب تُقارن فيها التوقّعات بالنتائج لتحسين التقدير.",
          en: "Builds a firm decision memory comparing forecasts to outcomes in order to improve judgment.",
        },
        observableBehaviors: [
          {
            ar: "يسجّل التقدير المتوقّع لكل قرار كبير ويقارنه بالنتيجة لاحقًا.",
            en: "Records the expected assessment for each major decision and compares it to the result later.",
          },
          {
            ar: "يعرض دروس المقارنة على الشراكة سنويًا.",
            en: "Presents the lessons of that comparison to the partnership yearly.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقيّم القرار بنتيجته وحدها متجاهلًا جودته وقت اتّخاذه.",
            en: "Judges the decision by its outcome alone, ignoring its quality at the time.",
          },
          {
            ar: "يسجّل القرارات ولا يعود إليها.",
            en: "Records the decisions and never returns to them.",
          },
        ],
        successCriteria: [
          {
            ar: "مقارنة التوقّع بالنتيجة تجري سنويًا.",
            en: "The forecast-versus-outcome comparison runs annually.",
          },
          {
            ar: "درس واحد على الأقل غيّر معيارًا للقرار.",
            en: "At least one lesson changed a decision criterion.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ القرارات ونتائجها.",
            en: "The decision and outcome log.",
          },
          {
            ar: "تقرير الدروس السنوي.",
            en: "The annual lessons report.",
          },
        ],
      },
    ],
    sourceIds: ["src.legal-analyst", "src.thinking-like-a-lawyer", "src.your-brain-at-work", "src.meditations-for-mortals", "src.tools-of-argument"],
    confidence: 0.87,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.professional-ethics",
    domainId: "dom.professional-judgment",
    name: { ar: "الأخلاقيات المهنية", en: "Professional ethics" },
    synonyms: ["conflicts of interest", "confidentiality", "duty to the court", "واجبات المحاماة"],
    definition: {
      ar: "الالتزام بواجبات المهنة حين تتعارض مع مصلحة آنية: السرّية، تعارض المصالح، الصدق أمام القضاء، وحدود ما يُطلب من المحامي.",
      en: "Holding to professional duty when it clashes with immediate interest: confidentiality, conflicts of interest, candour before the court, and the limits of what a lawyer may be asked to do.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على تعامل المتدرّب مع المواقف الأخلاقية.",
          en: "No evidence has been collected yet on the learner's handling of ethical situations.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يعرف القواعد الأساسية لكنه لا يتعرّف على المواقف التي تنطبق عليها.",
          en: "Knows the basic rules but does not recognise the situations they apply to.",
        },
        observableBehaviors: [
          {
            ar: "يمتنع عن مناقشة ملفّات الموكّلين في الأماكن العامّة.",
            en: "Refrains from discussing client matters in public places.",
          },
          {
            ar: "يسأل عند الشكّ بدل الاجتهاد.",
            en: "Asks when in doubt instead of improvising.",
          },
        ],
        commonMistakes: [
          {
            ar: "يشارك تفاصيل ملف مع زميل خارج الفريق.",
            en: "Shares matter detail with a colleague outside the team.",
          },
          {
            ar: "يعتبر تعارض المصالح مسألة شكلية.",
            en: "Treats conflict of interest as a formality.",
          },
        ],
        successCriteria: [
          {
            ar: "لا حادثة إفشاء في الفترة المقيَّمة.",
            en: "No disclosure incident in the assessed period.",
          },
          {
            ar: "طُرح سؤال أخلاقي واحد على الأقل على المشرف.",
            en: "At least one ethical question was put to the supervisor.",
          },
        ],
        evidenceRequired: [
          {
            ar: "إقرار موقّع بقواعد السرّية.",
            en: "A signed confidentiality undertaking.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يتعرّف على تعارض المصالح والسرّية في الحالات الواضحة ويصعّدها.",
          en: "Recognises conflicts and confidentiality issues in clear cases and escalates them.",
        },
        observableBehaviors: [
          {
            ar: "يطلب فحص تعارض قبل أي لقاء مع طرف جديد.",
            en: "Requests a conflict check before any meeting with a new party.",
          },
          {
            ar: "يحدّ من الوصول إلى مستندات الملف بحسب الحاجة.",
            en: "Limits access to matter documents on a need-to-know basis.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفحص التعارض بعد الاجتماع الأول.",
            en: "Runs the conflict check after the first meeting.",
          },
          {
            ar: "يشارك مستندات عبر قنوات غير آمنة.",
            en: "Shares documents through insecure channels.",
          },
        ],
        successCriteria: [
          {
            ar: "فحص التعارض سبق أي لقاء.",
            en: "The conflict check preceded any meeting.",
          },
          {
            ar: "المشاركة تمّت عبر قنوات المكتب المعتمدة.",
            en: "Sharing took place through the firm's approved channels.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ فحص تعارض مؤرّخ.",
            en: "A dated conflict check record.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يرفض طلبًا غير مشروع من موكّل ويشرح سبب الرفض بلغة مهنية.",
          en: "Refuses an improper client request and explains the refusal in professional language.",
        },
        observableBehaviors: [
          {
            ar: "يرفض تقديم مستند يعلم أنه غير صحيح.",
            en: "Refuses to put forward a document he knows to be untrue.",
          },
          {
            ar: "يوثّق الطلب والرفض في الملف.",
            en: "Documents both the request and the refusal in the file.",
          },
          {
            ar: "يمتنع عن استغلال عجز الطرف الآخر العملي عن متابعة الدعوى كأنّه ميزة إجرائية مشروعة.",
            en: "Refrains from treating the other side's practical inability to pursue the case as if it were a legitimate procedural advantage.",
          },
        ],
        commonMistakes: [
          {
            ar: "يرفض شفهيًا بلا توثيق.",
            en: "Refuses orally with no record.",
          },
          {
            ar: "يحيل الطلب إلى زميل بدل رفضه.",
            en: "Passes the request to a colleague instead of refusing it.",
          },
          {
            ar: "يعتبر أن واجبه ينحصر في كسب الموكّل، متجاهلاً أن التزامه يمتد إلى نزاهة الإجراء أمام القضاء.",
            en: "Treats his duty as limited to winning for the client, forgetting that it extends to the integrity of the process before the court.",
          },
        ],
        successCriteria: [
          {
            ar: "الرفض موثّق في الملف.",
            en: "The refusal is documented in the file.",
          },
          {
            ar: "الموكّل عرف الأساس المهني للرفض.",
            en: "The client was told the professional basis for the refusal.",
          },
          {
            ar: "تصرّفه أمام القضاء يحافظ على تكافؤ الفرص بين الطرفين ولو كلّفه ميزة تكتيكية.",
            en: "His conduct before the court preserves a level playing field between the parties, even at the cost of a tactical edge.",
          },
        ],
        evidenceRequired: [
          {
            ar: "توثيق طلب مرفوض وسببه.",
            en: "Documentation of a refused request and its reason.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يعالج موقفًا رماديًا لا تحسمه القاعدة الحرفية، ويصل إلى قرار قابل للدفاع عنه.",
          en: "Works through a grey situation the literal rule does not settle and reaches a defensible decision.",
        },
        observableBehaviors: [
          {
            ar: "يستشير مرجعًا مستقلًّا داخل المكتب أو خارجه.",
            en: "Consults an independent reference inside or outside the firm.",
          },
          {
            ar: "يوثّق تحليل الخيارات الأخلاقية لا القرار وحده.",
            en: "Documents the analysis of the ethical options, not just the decision.",
          },
          {
            ar: "حين يكتشف داخل علاقة مؤسّسية أمرًا مقلقًا أخلاقيًا، يثيره صراحة بدل بناء موقف يبدو مدافَعًا عنه فنّيًا لإرضاء الجهة الأعلى.",
            en: "On discovering something ethically troubling inside an institutional relationship, raises it openly rather than constructing a position that merely sounds technically defensible to please a superior or client.",
          },
        ],
        commonMistakes: [
          {
            ar: "يبرّر القرار بأنه شائع في السوق.",
            en: "Justifies the decision on the ground that it is common in the market.",
          },
          {
            ar: "يستشير من يعرف أنه سيوافقه.",
            en: "Consults someone he knows will agree with him.",
          },
          {
            ar: "يصوغ حجّة تبدو سليمة فنّيًا لتبرير ما يريده الموكّل المؤسّسي أصلاً، بدل مساءلة موقف الموكّل نفسه.",
            en: "Crafts an argument that merely sounds technically sound to justify what the institutional client already wants, instead of questioning the client's position itself.",
          },
        ],
        successCriteria: [
          {
            ar: "التحليل الأخلاقي موثّق ومستقلّ.",
            en: "The ethical analysis is documented and independent.",
          },
          {
            ar: "القرار قابل للتفسير أمام جهة مهنية.",
            en: "The decision can be explained to a professional body.",
          },
          {
            ar: "المسألة أُثيرت مع صاحب القرار المناسب قبل أن تتحوّل إلى مذكّرة أو رأي نهائي.",
            en: "The issue was raised with the appropriate decision-maker before it hardened into a memorandum or final opinion.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مذكّرة تحليل أخلاقي.",
            en: "An ethical analysis memorandum.",
          },
          {
            ar: "توثيق الاستشارة المستقلّة.",
            en: "Documentation of the independent consultation.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يضع ضوابط أخلاقية عملية في المكتب ويجعل التصعيد آمنًا.",
          en: "Puts practical ethical controls in place and makes escalation safe.",
        },
        observableBehaviors: [
          {
            ar: "يحدّد مرجعًا أخلاقيًا في المكتب يمكن سؤاله دون سلسلة إدارية.",
            en: "Names an ethics reference in the firm who can be asked outside the management chain.",
          },
          {
            ar: "يدرّب الفريق على حالات رمادية واقعية.",
            en: "Trains the team on realistic grey cases.",
          },
          {
            ar: "يدرّب الفريق على التمييز بين حجّة قانونية سليمة وحجّة صيغت فقط لإرضاء موكّل أو رئيس مؤسّسي.",
            en: "Trains the team to tell a genuinely sound legal argument apart from one drafted only to please an institutional client or superior.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتمد على النصّ النظامي بلا تدريب على تطبيقه.",
            en: "Relies on the regulatory text with no training in applying it.",
          },
          {
            ar: "يجعل التصعيد يمرّ عبر من قد يكون طرفًا في المشكلة.",
            en: "Routes escalation through the person who may be part of the problem.",
          },
          {
            ar: "يترك المحامين الأحدث وحدهم أمام ضغط موكّل مؤسّسي كبير دون مرجع يستشيرونه.",
            en: "Leaves junior lawyers alone under pressure from a large institutional client with no reference point to consult.",
          },
        ],
        successCriteria: [
          {
            ar: "مرجع أخلاقي معلن ومتاح.",
            en: "An ethics reference is named and available.",
          },
          {
            ar: "تدريب الحالات الرمادية منفّذ وموثّق.",
            en: "Grey-case training has been delivered and documented.",
          },
        ],
        evidenceRequired: [
          {
            ar: "إجراء التصعيد الأخلاقي وسجلّ التدريب.",
            en: "The ethics escalation procedure and the training log.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يحمي معايير المهنة حين تكلّف المكتب مالًا أو موكّلًا، ويجعل ذلك موقفًا معلنًا.",
          en: "Defends professional standards when they cost the firm money or a client, and makes that a stated position.",
        },
        observableBehaviors: [
          {
            ar: "ينهي علاقة بموكّل يصرّ على طلب غير مشروع ويوثّق ذلك.",
            en: "Ends a relationship with a client who insists on an improper request, and records it.",
          },
          {
            ar: "يراجع سنويًا الحوادث الأخلاقية ودروسها مع الشراكة.",
            en: "Reviews ethical incidents and their lessons yearly with the partnership.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستثني الموكّلين الكبار من المعايير.",
            en: "Exempts major clients from the standards.",
          },
          {
            ar: "يعالج الحادثة بصمت فلا يتعلّم منها أحد.",
            en: "Handles the incident quietly so nobody learns from it.",
          },
        ],
        successCriteria: [
          {
            ar: "قرار إنهاء واحد على الأقل موثّق بأساسه المهني.",
            en: "At least one termination decision is documented with its professional basis.",
          },
          {
            ar: "المراجعة السنوية أنتجت تعديلًا في السياسة أو التدريب.",
            en: "The annual review produced a change in policy or training.",
          },
        ],
        evidenceRequired: [
          {
            ar: "توثيق قرار إنهاء علاقة لأسباب مهنية.",
            en: "Documentation of a relationship ended for professional reasons.",
          },
          {
            ar: "محضر المراجعة الأخلاقية السنوية.",
            en: "Minutes of the annual ethics review.",
          },
        ],
      },
    ],
    sourceIds: [
      "src.rule-of-law",
      "src.managing-professional-service-firm",
      "src.the-antidote",
      "src.ali-rise",
      "src.governance-raci",
      "src.how-to-argue-and-win",
      "src.tools-of-argument",
    ],
    confidence: 0.88,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.avoiding-guarantees"],
  },
  {
    id: "skill.whole-matter-awareness",
    domainId: "dom.professional-judgment",
    name: { ar: "الإحاطة الكاملة بالملف", en: "Maintaining Whole-Matter Awareness" },
    synonyms: [
      "seeing the whole file",
      "avoiding task-tunnel vision",
      "الرؤية الكلية للملف",
      "matter-level context",
    ],
    definition: {
      ar: "الحفاظ على تصوّر كامل لملف الموكّل حتى حين يُكلَّف المحامي بجزء محدود منه فقط، بحيث لا يفوته ما لا يظهر إلا عند النظر إلى الملف مجتمعًا.",
      en: "Keeping a full picture of a client's matter even when assigned only a narrow slice of it, so nothing that becomes visible only at the whole-file level gets missed.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على قدرة المتدرّب على تكوين صورة شاملة للملف حين يُكلَّف بجزء منه فقط.",
          en: "No evidence has been collected yet on the learner's ability to hold a whole-matter picture when assigned only part of a file.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يدرك أن تجزئة العمل قد تُخفي الصورة الكاملة، لكنه ينفّذ مهمّته المحدّدة دون أن يسأل عمّا حولها.",
          en: "Recognises that splitting work into slices can hide the full picture, but carries out his own defined task without asking what surrounds it.",
        },
        observableBehaviors: [
          {
            ar: "ينفّذ المهمّة الموكلة إليه بدقّة ضمن حدودها المكتوبة.",
            en: "Executes the assigned task accurately within its written boundaries.",
          },
          {
            ar: "يسأل أحيانًا عن الغاية العامة من المهمّة دون أن يطلب الاطّلاع على الملف كاملاً.",
            en: "Sometimes asks about the task's general purpose without asking to see the whole file.",
          },
        ],
        commonMistakes: [
          {
            ar: "يفترض أن من كلّفه بالمهمّة رأى الصورة الكاملة، فلا داعي لسؤاله.",
            en: "Assumes whoever assigned the task already sees the full picture, so there is no need to ask.",
          },
          {
            ar: "يعتبر حدود المهمّة المكتوبة حدود مسؤوليته الوحيدة.",
            en: "Treats the written scope of the task as the entire boundary of his responsibility.",
          },
        ],
        successCriteria: [
          {
            ar: "المهمّة المحدّدة أُنجزت دون خطأ ضمن حدودها.",
            en: "The defined task was completed correctly within its boundaries.",
          },
          {
            ar: "طُرح سؤال واحد على الأقل عن سياق المهمّة الأوسع.",
            en: "At least one question was asked about the task's wider context.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير ذاتي عن مهمّة نُفّذت ضمن ملف مجزّأ.",
            en: "A self-report on a task carried out within a fragmented matter.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يطلب لمحة عامة عن الملف قبل بدء مهمّته الجزئية، ليعرف أين تقع حلقته ضمن السلسلة.",
          en: "Requests a brief overview of the matter before starting his slice of it, to know where his link sits in the chain.",
        },
        observableBehaviors: [
          {
            ar: "يقرأ ملخّص الملف أو آخر مذكّرة قبل بدء مهمّته.",
            en: "Reads the matter summary or the last memorandum before starting his task.",
          },
          {
            ar: "يسأل عمّن يتولّى الأجزاء الأخرى من الملف.",
            en: "Asks who is handling the other parts of the file.",
          },
          {
            ar: "يلاحظ حين تبدو مهمّته منفصلة عن هدف الملف المعلن.",
            en: "Notices when his task seems disconnected from the file's stated objective.",
          },
        ],
        commonMistakes: [
          {
            ar: "يكتفي بعنوان المهمّة دون قراءة أي سياق يسبقها.",
            en: "Settles for the task's title without reading any context that precedes it.",
          },
          {
            ar: "يفترض ثبات الصورة العامة للملف طوال مدّة عمله عليه.",
            en: "Assumes the matter's overall picture stays fixed for as long as he works on it.",
          },
        ],
        successCriteria: [
          {
            ar: "ملخّص الملف قُرئ وموثّق أنه قُرئ قبل بدء المهمّة.",
            en: "The matter summary was read, and reading it is recorded, before the task began.",
          },
          {
            ar: "يعرف اسم كل من يتولّى جزءًا آخر من الملف نفسه.",
            en: "Knows the name of everyone else handling a part of the same file.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ اطّلاع على ملخّص الملف قبل مهمّة موثّقة.",
            en: "A log showing the matter summary was reviewed before a documented task.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يربط بين مهمّته وأجزاء أخرى من الملف فيلاحظ تناقضًا أو مؤشّرًا لا يظهر إلا عند جمع الصورة، ويصعّده.",
          en: "Connects his task to other parts of the matter and spots an inconsistency or signal visible only once the picture is assembled, then escalates it.",
        },
        observableBehaviors: [
          {
            ar: "يقارن معطيات مهمّته بما ورد في أجزاء سابقة من الملف.",
            en: "Compares the facts of his task against what appeared in earlier parts of the file.",
          },
          {
            ar: "يبلّغ عن تناقض بين تعليمات تلقّاها وما يظهر في مستند آخر من الملف.",
            en: "Reports a contradiction between instructions received and what another document in the file shows.",
          },
          {
            ar: "يوثّق الملاحظة العابرة للمهام قبل أن تُنسى.",
            en: "Records the cross-task observation before it is forgotten.",
          },
        ],
        commonMistakes: [
          {
            ar: "يلاحظ التناقض ويكتفي بتصحيحه ضمن مهمّته دون إبلاغ أحد.",
            en: "Notices the inconsistency and simply fixes it within his own task without telling anyone.",
          },
          {
            ar: "يفترض أن التناقض مقصود لأن شخصًا أقدم راجعه.",
            en: "Assumes the inconsistency is deliberate because someone more senior reviewed it.",
          },
        ],
        successCriteria: [
          {
            ar: "الملاحظة العابرة للمهام وصلت إلى من يملك صورة الملف الكاملة.",
            en: "The cross-task observation reached whoever holds the full picture of the file.",
          },
          {
            ar: "التصعيد وثّق أساسه بدل الاكتفاء بإشارة شفهية.",
            en: "The escalation recorded its basis rather than relying on a verbal remark alone.",
          },
        ],
        evidenceRequired: [
          {
            ar: "رسالة تصعيد لتناقض لوحظ بين جزأين من الملف.",
            en: "An escalation message for an inconsistency noticed between two parts of the file.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يكتشف في ملف موزَّع على منصّة إدارة موحّدة مؤشّرًا أخلاقيًا أو استراتيجيًا لا يظهر إلا عند النظر إلى الملف كاملاً، رغم أن كل مهمّة فردية بدت سليمة.",
          en: "Detects, in a matter spread across a standardised management platform, an ethical or strategic signal that only appears when the file is seen whole, even though every individual task looked fine on its own.",
        },
        observableBehaviors: [
          {
            ar: "يخصّص وقتًا دوريًا لمراجعة الملف كاملاً لا مهامه المجزّأة فقط.",
            en: "Sets aside regular time to review the whole matter, not only his own sliced-off tasks.",
          },
          {
            ar: "يربط مؤشّرًا صغيرًا في مهمّته بنمط أوسع يظهر عبر عدّة مهام أخرى.",
            en: "Links a small signal in his own task to a wider pattern showing across several other tasks.",
          },
          {
            ar: "يطرح السؤال على صاحب الملف الكامل حتى حين تبدو مهمّته الفردية غير معنيّة.",
            en: "Raises the question with whoever owns the whole file, even when his own task seems unrelated to it.",
          },
        ],
        commonMistakes: [
          {
            ar: "يثق بأن تقسيم المنصّة للعمل يعني بالضرورة أن أحدًا آخر يراقب الصورة الكاملة.",
            en: "Trusts that the platform's division of work necessarily means someone else is watching the full picture.",
          },
          {
            ar: "يعتبر المؤشّر تفصيلاً هامشيًا لأنه خارج حدود مهمّته المكلَّف بها.",
            en: "Treats the signal as a minor detail because it falls outside the boundaries of his assigned task.",
          },
        ],
        successCriteria: [
          {
            ar: "الإشارة إلى المؤشّر وصلت مكتوبة إلى صاحب الملف الكامل قبل أن يفوت أوانها.",
            en: "The signal reached whoever owns the whole file, in writing, before it was too late to act on.",
          },
          {
            ar: "المراجعة الدورية للملف كاملاً موثّقة بتاريخ منتظم.",
            en: "The periodic whole-file review is documented on a regular schedule.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مذكّرة تصف المؤشّر الذي ظهر فقط عند جمع الملف.",
            en: "A memorandum describing the signal that appeared only once the file was assembled.",
          },
          {
            ar: "توثيق المراجعة الدورية للملف لفترة كاملة.",
            en: "Documentation of the periodic whole-file review across a full period.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يصمّم آلية مكتبية تضمن وجود صاحب ملف واحد يرى الصورة الكاملة، حتى حين تُوزَّع المهام على عدّة أشخاص أو منصّات.",
          en: "Designs a firm mechanism that guarantees one matter owner always sees the full picture, even when tasks are distributed across several people or platforms.",
        },
        observableBehaviors: [
          {
            ar: "يحدّد دورًا واضحًا لصاحب الملف يختلف عن أدوار منفّذي المهام الجزئية.",
            en: "Defines a clear matter-owner role, distinct from the roles of those executing individual task slices.",
          },
          {
            ar: "يفرض نقطة مراجعة دورية للملف كاملاً منفصلة عن مراجعة كل مهمّة على حدة.",
            en: "Requires a periodic whole-file review point, separate from the review of each individual task.",
          },
          {
            ar: "يقيس عدد المؤشّرات العابرة للمهام التي اكتُشفت بفضل هذه الآلية.",
            en: "Measures how many cross-task signals were caught thanks to this mechanism.",
          },
        ],
        commonMistakes: [
          {
            ar: "يوزّع دور صاحب الملف بين عدّة أشخاص فيغيب مركز المسؤولية.",
            en: "Splits the matter-owner role between several people, and accountability disappears.",
          },
          {
            ar: "يكتفي بمراجعة شكلية للملف الكامل دون وقت فعلي مخصّص لها.",
            en: "Settles for a nominal whole-file review with no real time actually set aside for it.",
          },
        ],
        successCriteria: [
          {
            ar: "كل ملف موزَّع على أكثر من شخص له صاحب ملف معلوم.",
            en: "Every matter distributed across more than one person has a named matter owner.",
          },
          {
            ar: "عدد المؤشّرات المكتشفة عبر المراجعة الدورية موثّق ومتزايد.",
            en: "The number of signals caught through the periodic review is documented and rising.",
          },
        ],
        evidenceRequired: [
          {
            ar: "وثيقة الدور ومواعيد المراجعة الدورية للملف.",
            en: "The role document and the schedule of periodic whole-file reviews.",
          },
          {
            ar: "سجلّ مؤشّرات اكتُشفت خلال فصلين.",
            en: "A log of signals caught over two quarters.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يعيد النظر في طريقة تجزئة العمل نفسها عبر المكتب أو المنصّة، ويجعل الحفاظ على الصورة الكاملة معيار تصميم لا استدراكًا لاحقًا.",
          en: "Rethinks how work is sliced up across the firm or platform in the first place, making whole-picture preservation a design criterion rather than an afterthought.",
        },
        observableBehaviors: [
          {
            ar: "يراجع سنويًا حوادث كادت تفوت بسبب تجزئة العمل ويستخلص منها تعديلاً في طريقة التوزيع.",
            en: "Reviews near-misses caused by task fragmentation yearly and draws a change in how work is distributed from them.",
          },
          {
            ar: "يشترط أن يتضمّن أي نظام أو منصّة جديدة لإدارة الملفّات آلية إحاطة كاملة لصاحب الملف.",
            en: "Requires that any new matter-management system or platform include a mechanism for the matter owner's full-picture visibility.",
          },
          {
            ar: "يدرّب قادة الفرق على التعرّف على الملفّات المعرّضة لخطر التجزئة قبل توزيعها.",
            en: "Trains team leads to recognise matters at risk of fragmentation before they are distributed.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعالج كل حادثة تجزئة على حدة دون تعديل بنية التوزيع نفسها.",
            en: "Handles each fragmentation incident individually without changing the distribution structure itself.",
          },
          {
            ar: "يثق بمنصّة إدارة ملفّات جديدة دون اختبار أثرها على وضوح الصورة الكاملة.",
            en: "Trusts a new matter-management platform without testing its effect on whole-picture clarity.",
          },
        ],
        successCriteria: [
          {
            ar: "حوادث فوات المؤشّرات بسبب التجزئة تراجعت على مدى سنة.",
            en: "Missed-signal incidents caused by fragmentation have fallen over a year.",
          },
          {
            ar: "كل منصّة أو نظام توزيع جديد يخضع لاختبار الإحاطة الكاملة قبل اعتماده.",
            en: "Every new distribution platform or system undergoes a whole-picture test before adoption.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير المراجعة السنوي لحوادث التجزئة وتعديلاته.",
            en: "The annual fragmentation-incident review report and its resulting changes.",
          },
          {
            ar: "معيار الإحاطة الكاملة المعتمد لأي نظام توزيع جديد.",
            en: "The adopted whole-picture criterion for any new distribution system.",
          },
        ],
      },
    ],
    sourceIds: ["src.legal-project-management"],
    confidence: 0.82,
    reviewStatus: "ai_suggested",
  },
  // -------------------------------------------------------------------------
  // dom.business-development
  // -------------------------------------------------------------------------
  {
    id: "skill.business-development",
    domainId: "dom.business-development",
    name: { ar: "تنمية العمل", en: "Business development" },
    synonyms: ["rainmaking", "client acquisition", "marketing yourself", "جلب التوكيلات"],
    definition: {
      ar: "بناء تدفّق منتظم من التوكيلات عبر عمل مخطّط ومقيس: من تخاطب، بماذا، وكم مرّة، دون وعود ولا مبالغة.",
      en: "Building a steady flow of instructions through planned, measured effort: whom you address, with what, and how often, without promises or overstatement.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على نشاط المتدرّب في تنمية العمل.",
          en: "No evidence has been collected yet on the learner's business development activity.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يعتبر تنمية العمل شأن الشركاء ولا يشارك فيها.",
          en: "Regards business development as the partners' business and takes no part in it.",
        },
        observableBehaviors: [
          {
            ar: "يحضر مناسبات مهنية عند دعوته.",
            en: "Attends professional events when invited.",
          },
          {
            ar: "يحتفظ ببيانات من يلتقيهم.",
            en: "Keeps the details of the people he meets.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجمع بطاقات ولا يتابع أحدًا.",
            en: "Collects cards and follows up with nobody.",
          },
          {
            ar: "يعتبر أن جودة العمل وحدها تجلب التوكيلات.",
            en: "Assumes good work alone brings instructions.",
          },
        ],
        successCriteria: [
          {
            ar: "قائمة اتصالات محفوظة ومنظّمة.",
            en: "A saved and organised contact list.",
          },
          {
            ar: "حضور مناسبة واحدة على الأقل في الفصل.",
            en: "Attendance at at least one event in the quarter.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة اتصالات محدّثة.",
            en: "An up-to-date contact list.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يتابع من يلتقيهم برسالة خلال أيام ويحافظ على قائمة اتصالات حيّة.",
          en: "Follows up the people he meets within days and keeps a live contact list.",
        },
        observableBehaviors: [
          {
            ar: "يرسل رسالة متابعة خلال ثلاثة أيام من اللقاء.",
            en: "Sends a follow-up message within three days of meeting.",
          },
          {
            ar: "يصنّف الاتصالات بحسب نوع العلاقة.",
            en: "Classifies contacts by relationship type.",
          },
        ],
        commonMistakes: [
          {
            ar: "يرسل رسالة عامّة لا تشير إلى ما دار في اللقاء.",
            en: "Sends a generic message with no reference to what was discussed.",
          },
          {
            ar: "يطلب العمل في أول تواصل.",
            en: "Asks for work at the very first contact.",
          },
        ],
        successCriteria: [
          {
            ar: "نسبة المتابعة خلال ثلاثة أيام مرتفعة.",
            en: "The three-day follow-up rate is high.",
          },
          {
            ar: "الاتصالات مصنّفة.",
            en: "Contacts are classified.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ثلاث رسائل متابعة مؤرّخة.",
            en: "Three dated follow-up messages.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يضع خطّة تنمية عمل سنوية بأنشطة محدّدة ووقت مخصّص لها.",
          en: "Sets an annual business development plan with defined activities and time set aside for them.",
        },
        observableBehaviors: [
          {
            ar: "يحجز في تقويمه وقتًا أسبوعيًا لتنمية العمل.",
            en: "Blocks weekly time in the calendar for business development.",
          },
          {
            ar: "يحدّد جمهورًا مستهدفًا واحدًا بدل «الجميع».",
            en: "Defines one target audience instead of \"everyone\".",
          },
        ],
        commonMistakes: [
          {
            ar: "يضع خطّة ولا يخصّص لها وقتًا فتُلغى.",
            en: "Writes a plan without allocating time, so it lapses.",
          },
          {
            ar: "يقلّد نشاط شريك دون ملاءمته لأسلوبه.",
            en: "Copies a partner's activity without adapting it to his own style.",
          },
        ],
        successCriteria: [
          {
            ar: "الوقت المخصّص نُفّذ في أغلب الأسابيع.",
            en: "The allocated time was used in most weeks.",
          },
          {
            ar: "الجمهور المستهدف محدّد كتابيًا.",
            en: "The target audience is defined in writing.",
          },
        ],
        evidenceRequired: [
          {
            ar: "خطّة سنوية وسجلّ وقت لفصل.",
            en: "An annual plan and a quarter's time log.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يحوّل العلاقة إلى توكيل: يعرض قدرات المكتب بلغة مشكلة الموكّل ويتابع حتى القرار.",
          en: "Converts a relationship into an instruction: presents the firm's capability in the language of the client's problem and follows through to a decision.",
        },
        observableBehaviors: [
          {
            ar: "يبدأ بسؤال عن مشكلة الموكّل قبل عرض الخدمة.",
            en: "Opens with a question about the client's problem before describing the service.",
          },
          {
            ar: "يقترح خطوة تالية محدّدة في نهاية كل لقاء.",
            en: "Proposes a specific next step at the end of each meeting.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعرض قائمة خدمات بدل حلّ لمشكلة.",
            en: "Presents a service list instead of a solution to a problem.",
          },
          {
            ar: "يبالغ في وصف نتائج سابقة.",
            en: "Overstates past results.",
          },
        ],
        successCriteria: [
          {
            ar: "لكل فرصة خطوة تالية بتاريخ.",
            en: "Every opportunity has a dated next step.",
          },
          {
            ar: "لا وعد بنتيجة في أي عرض.",
            en: "No outcome promise appears in any pitch.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ فرص مع خطواتها التالية.",
            en: "An opportunity log with next steps.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يبني منظومة تنمية عمل للفريق ويقيس مصادر التوكيلات.",
          en: "Builds a business development system for the team and measures where instructions come from.",
        },
        observableBehaviors: [
          {
            ar: "يقيس مصدر كل توكيل جديد.",
            en: "Records the source of every new instruction.",
          },
          {
            ar: "يوزّع أدوار تنمية العمل بحسب أسلوب كل عضو.",
            en: "Allocates business development roles according to each person's style.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستثمر في القناة الأعلى ضجيجًا لا الأعلى عائدًا.",
            en: "Invests in the noisiest channel rather than the highest-yielding one.",
          },
          {
            ar: "يفرض نمط نشاط واحدًا على الفريق كلّه.",
            en: "Imposes one activity style on the whole team.",
          },
        ],
        successCriteria: [
          {
            ar: "مصادر التوكيلات مقيسة ومعروضة دوريًا.",
            en: "Instruction sources are measured and reported periodically.",
          },
          {
            ar: "الاستثمار موجّه بحسب البيانات.",
            en: "Investment follows the data.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير مصادر التوكيلات لفصلين.",
            en: "Two quarters of instruction-source reporting.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يربط تنمية العمل باستراتيجية المكتب ويقيس عائدها لا نشاطها.",
          en: "Ties business development to firm strategy and measures its return rather than its activity.",
        },
        observableBehaviors: [
          {
            ar: "يحدّد أنواع الموكّلين التي يريدها المكتب ويرفض ما لا يناسبه.",
            en: "Defines the client types the firm wants and declines what does not fit.",
          },
          {
            ar: "يقيس عائد الاستثمار في كل قناة سنويًا.",
            en: "Measures the return on each channel annually.",
          },
        ],
        commonMistakes: [
          {
            ar: "ينمو بلا اختيار فيتعارض نوع العمل مع طاقة المكتب.",
            en: "Grows without selection until the work conflicts with the firm's capacity.",
          },
          {
            ar: "يقيس عدد الأنشطة لا التوكيلات الناتجة.",
            en: "Measures activities rather than the instructions they produce.",
          },
        ],
        successCriteria: [
          {
            ar: "معايير قبول الموكّلين مكتوبة ومطبّقة.",
            en: "Client acceptance criteria are written and applied.",
          },
          {
            ar: "عائد كل قناة معروف ومراجَع سنويًا.",
            en: "The return on each channel is known and reviewed annually.",
          },
        ],
        evidenceRequired: [
          {
            ar: "استراتيجية الموكّلين المعتمدة.",
            en: "The adopted client strategy.",
          },
          {
            ar: "تقرير العائد السنوي.",
            en: "The annual return report.",
          },
        ],
      },
    ],
    sourceIds: [
      "src.ultimate-associate-marketing",
      "src.game-changing-attorney",
      "src.rainmaker",
      "src.selling-the-invisible",
      "src.purple-cow",
      "src.jab-jab-right-hook",
      "src.be-the-ceo",
    ],
    confidence: 0.9,
    reviewStatus: "ai_suggested",
  },
  {
    id: "skill.relationship-building",
    domainId: "dom.business-development",
    name: { ar: "بناء العلاقات المهنية", en: "Professional relationship building" },
    synonyms: ["networking", "referral relationships", "staying in touch", "شبكة العلاقات"],
    definition: {
      ar: "بناء شبكة علاقات مهنية تدوم لأنها قائمة على فائدة متبادلة ومتابعة منتظمة، لا على طلب عند الحاجة.",
      en: "Building a professional network that lasts because it rests on mutual usefulness and regular contact, not on asking when you need something.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على شبكة علاقات المتدرّب المهنية.",
          en: "No evidence has been collected yet on the learner's professional network.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يتواصل مع معارفه عند الحاجة فقط.",
          en: "Contacts people he knows only when he needs something.",
        },
        observableBehaviors: [
          {
            ar: "يردّ على رسائل الزملاء والمعارف.",
            en: "Replies to messages from colleagues and acquaintances.",
          },
          {
            ar: "يحضر مناسبات مهنية أحيانًا.",
            en: "Attends professional events occasionally.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتواصل بعد سنة صمت بطلب.",
            en: "Makes contact after a year of silence with a request.",
          },
          {
            ar: "يقتصر تواصله على من هم في مستواه.",
            en: "Restricts contact to people at his own level.",
          },
        ],
        successCriteria: [
          {
            ar: "لا رسالة مهنية بلا ردّ.",
            en: "No professional message goes unanswered.",
          },
          {
            ar: "توجد قائمة معارف مهنية.",
            en: "A professional contact list exists.",
          },
        ],
        evidenceRequired: [
          {
            ar: "قائمة معارف مهنية.",
            en: "A professional contact list.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يتواصل بانتظام دون طلب، ويقدّم فائدة صغيرة قبل أن يطلب.",
          en: "Makes contact regularly without asking for anything, and gives a small usefulness before requesting one.",
        },
        observableBehaviors: [
          {
            ar: "يرسل معلومة مفيدة لمن قد تهمّه دون مقابل.",
            en: "Sends a useful piece of information to someone it may help, with nothing asked in return.",
          },
          {
            ar: "يتذكّر تفاصيل شخصية مهنية ويستخدمها بلطف.",
            en: "Remembers professional personal details and uses them tactfully.",
          },
        ],
        commonMistakes: [
          {
            ar: "يرسل محتوى عامًّا لكل القائمة.",
            en: "Sends generic content to the whole list.",
          },
          {
            ar: "يبالغ في التواصل فيصبح مزعجًا.",
            en: "Contacts so often it becomes intrusive.",
          },
        ],
        successCriteria: [
          {
            ar: "تواصل مفيد واحد على الأقل شهريًا.",
            en: "At least one useful contact a month.",
          },
          {
            ar: "التواصل شخصي لا جماعي.",
            en: "Contact is personal, not broadcast.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ تواصل لثلاثة أشهر.",
            en: "Three months of contact log.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يبني علاقات إحالة متبادلة مع مهنيين في تخصّصات مكمّلة.",
          en: "Builds mutual referral relationships with professionals in complementary specialisms.",
        },
        observableBehaviors: [
          {
            ar: "يحيل موكّلًا إلى مهني آخر حين يكون ذلك في مصلحة الموكّل.",
            en: "Refers a client to another professional when that serves the client's interest.",
          },
          {
            ar: "يتابع نتيجة الإحالة مع الموكّل.",
            en: "Follows up the outcome of the referral with the client.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحيل لتحصيل عمولة لا لمصلحة الموكّل.",
            en: "Refers for a commission rather than in the client's interest.",
          },
          {
            ar: "يحيل ولا يتحقّق من كفاءة من أحال إليه.",
            en: "Refers without checking the competence of the person referred to.",
          },
        ],
        successCriteria: [
          {
            ar: "الإحالة موثّقة ومصلحة الموكّل مبيّنة.",
            en: "The referral is documented with the client's interest stated.",
          },
          {
            ar: "نتيجة الإحالة معروفة.",
            en: "The outcome of the referral is known.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ إحالتين ونتيجتهما.",
            en: "A log of two referrals and their outcomes.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يحافظ على علاقة مع موكّل بعد إغلاق ملفّه، فيعود إليه أو يحيل غيره.",
          en: "Keeps a relationship with a client after the matter closes, so the client returns or refers others.",
        },
        observableBehaviors: [
          {
            ar: "يتواصل مع الموكّل بعد الإغلاق بمناسبة مهنية.",
            en: "Contacts the client after closure on a professional occasion.",
          },
          {
            ar: "يسأل الموكّل عن تجربته ويستخدم الجواب في التحسين.",
            en: "Asks the client about his experience and uses the answer to improve.",
          },
        ],
        commonMistakes: [
          {
            ar: "يختفي بعد إغلاق الملف.",
            en: "Disappears once the matter closes.",
          },
          {
            ar: "يتواصل بطلب توصية فقط.",
            en: "Makes contact only to ask for a recommendation.",
          },
        ],
        successCriteria: [
          {
            ar: "التواصل بعد الإغلاق منتظم وموثّق.",
            en: "Post-closure contact is regular and documented.",
          },
          {
            ar: "توكيل واحد على الأقل جاء من موكّل سابق.",
            en: "At least one instruction came from a former client.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ تواصل ما بعد الإغلاق.",
            en: "The post-closure contact log.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يدير محفظة علاقات للمكتب بأولويات واضحة ومسؤول لكل علاقة رئيسية.",
          en: "Manages a firm relationship portfolio with clear priorities and an owner for each key relationship.",
        },
        observableBehaviors: [
          {
            ar: "يحدّد لكل موكّل رئيسي مسؤول علاقة واحدًا.",
            en: "Assigns one relationship owner to each key client.",
          },
          {
            ar: "يضع خطّة تواصل سنوية لكل علاقة رئيسية.",
            en: "Sets an annual contact plan for each key relationship.",
          },
        ],
        commonMistakes: [
          {
            ar: "يترك العلاقات الكبيرة بلا مسؤول محدّد.",
            en: "Leaves major relationships without a named owner.",
          },
          {
            ar: "يركّز على الموكّلين الكبار ويهمل شبكة الإحالة.",
            en: "Focuses on large clients and neglects the referral network.",
          },
        ],
        successCriteria: [
          {
            ar: "كل علاقة رئيسية لها مسؤول وخطّة.",
            en: "Every key relationship has an owner and a plan.",
          },
          {
            ar: "الخطط منفّذة ومراجَعة.",
            en: "The plans are executed and reviewed.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محفظة العلاقات وخطط التواصل.",
            en: "The relationship portfolio and contact plans.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يبني سمعة المكتب كأصل جماعي لا كسمعة شخص، ويقيس متانة العلاقات.",
          en: "Builds the firm's reputation as a collective asset rather than one person's, and measures relationship strength.",
        },
        observableBehaviors: [
          {
            ar: "يُدخل زملاء آخرين في علاقاته الرئيسية تدريجيًا.",
            en: "Gradually brings other colleagues into his key relationships.",
          },
          {
            ar: "يقيس تركّز الإيرادات في عدد قليل من الموكّلين.",
            en: "Measures how concentrated revenue is in a few clients.",
          },
        ],
        commonMistakes: [
          {
            ar: "يحتكر العلاقة فتغادر بمغادرته.",
            en: "Monopolises the relationship, so it leaves when he does.",
          },
          {
            ar: "يهمل مخاطر التركّز حتى فقدان موكّل كبير.",
            en: "Ignores concentration risk until a large client is lost.",
          },
        ],
        successCriteria: [
          {
            ar: "لكل علاقة رئيسية جهة اتصال ثانية في المكتب.",
            en: "Every key relationship has a second point of contact in the firm.",
          },
          {
            ar: "تركّز الإيرادات مقيس ومراجَع سنويًا.",
            en: "Revenue concentration is measured and reviewed annually.",
          },
        ],
        evidenceRequired: [
          {
            ar: "خريطة جهات الاتصال للعلاقات الرئيسية.",
            en: "The contact map for key relationships.",
          },
          {
            ar: "تقرير تركّز الإيرادات.",
            en: "The revenue concentration report.",
          },
        ],
      },
    ],
    sourceIds: ["src.68-power-moves", "src.rainmaker", "src.smarter-collaboration", "src.ultimate-associate-marketing", "src.managing-professional-service-firm"],
    confidence: 0.89,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.trust-building"],
  },
  {
    id: "skill.commercial-awareness",
    domainId: "dom.business-development",
    name: { ar: "الوعي التجاري", en: "Commercial awareness" },
    synonyms: ["business acumen", "understanding the client's business", "market awareness", "فهم عمل الموكّل"],
    definition: {
      ar: "فهم كيف يكسب الموكّل ماله وما يقلقه تجاريًا، وربط الرأي القانوني بأثره على عمله لا بمتانته النظرية.",
      en: "Understanding how the client makes money and what worries him commercially, and tying the legal advice to its effect on his business rather than to its theoretical strength.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على الوعي التجاري لدى المتدرّب.",
          en: "No evidence has been collected yet on the learner's commercial awareness.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يعرف نشاط الموكّل بصورة عامّة ولا يربطه بالرأي القانوني.",
          en: "Knows the client's activity in general terms and does not connect it to the advice.",
        },
        observableBehaviors: [
          {
            ar: "يسأل عن مجال عمل الموكّل في اللقاء الأول.",
            en: "Asks what the client's business is in the first meeting.",
          },
          {
            ar: "يقرأ ما هو متاح عن نشاط الموكّل قبل اللقاء.",
            en: "Reads what is available about the client's activity before the meeting.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقدّم رأيًا صحيحًا قانونيًا مستحيلًا تجاريًا.",
            en: "Gives advice that is legally right and commercially impossible.",
          },
          {
            ar: "يجهل من هم منافسو الموكّل أو زبائنه.",
            en: "Does not know who the client's competitors or customers are.",
          },
        ],
        successCriteria: [
          {
            ar: "نشاط الموكّل موثّق في الملف.",
            en: "The client's activity is recorded in the file.",
          },
          {
            ar: "سؤال واحد على الأقل عن العمل طُرح.",
            en: "At least one question about the business was asked.",
          },
        ],
        evidenceRequired: [
          {
            ar: "ملاحظات عن نشاط الموكّل.",
            en: "Notes on the client's business.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يفهم مصدر دخل الموكّل وأثر الملف على عمله اليومي.",
          en: "Understands where the client's income comes from and how the matter affects his day-to-day operation.",
        },
        observableBehaviors: [
          {
            ar: "يسأل عن أثر النزاع على عمليات الموكّل.",
            en: "Asks how the dispute affects the client's operations.",
          },
          {
            ar: "يميّز بين ما هو عاجل تجاريًا وما هو عاجل قانونيًا.",
            en: "Distinguishes what is commercially urgent from what is legally urgent.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعامل كل ملف بالإيقاع نفسه.",
            en: "Treats every matter at the same pace.",
          },
          {
            ar: "يهمل كلفة تعطّل العمل في تقدير الخيارات.",
            en: "Ignores the cost of business disruption when weighing options.",
          },
        ],
        successCriteria: [
          {
            ar: "أثر الملف التجاري موثّق.",
            en: "The commercial impact of the matter is documented.",
          },
          {
            ar: "الأولوية مبنيّة على الأثر لا على الإجراء وحده.",
            en: "Priority is based on impact, not only on procedure.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مذكّرة تتضمّن الأثر التجاري.",
            en: "A memorandum including the commercial impact.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يصوغ الرأي القانوني بلغة القرار التجاري: الكلفة، المخاطرة، والوقت.",
          en: "Frames the advice in the language of a commercial decision: cost, risk and time.",
        },
        observableBehaviors: [
          {
            ar: "يقارن كلفة التقاضي بقيمة النزاع صراحة.",
            en: "Compares the cost of litigation to the value of the dispute explicitly.",
          },
          {
            ar: "يوصي أحيانًا بعدم التقاضي حين يكون ذلك الأنسب.",
            en: "Sometimes recommends not litigating when that is the better course.",
          },
        ],
        commonMistakes: [
          {
            ar: "يوصي بالمسار الأقوى قانونيًا بلا نظر إلى كلفته.",
            en: "Recommends the legally strongest route without regard to its cost.",
          },
          {
            ar: "يهمل أثر الوقت على قيمة النتيجة.",
            en: "Ignores the effect of time on the value of the outcome.",
          },
        ],
        successCriteria: [
          {
            ar: "المقارنة بين الكلفة والقيمة موثّقة.",
            en: "The cost-versus-value comparison is documented.",
          },
          {
            ar: "التوصية تشمل خيار عدم التصعيد حيث يصحّ.",
            en: "The recommendation includes the option of not escalating where appropriate.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مذكّرة توصية بمقارنة كلفة وقيمة.",
            en: "A recommendation memorandum with a cost-value comparison.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يستبق مخاطر الموكّل التجارية ويقترح ترتيبات وقائية قبل وقوع النزاع.",
          en: "Anticipates the client's commercial risks and proposes preventive arrangements before a dispute arises.",
        },
        observableBehaviors: [
          {
            ar: "يشير إلى بند تعاقدي متكرّر يسبّب نزاعات ويقترح تعديله.",
            en: "Points to a recurring contractual term that causes disputes and proposes changing it.",
          },
          {
            ar: "يراجع نماذج عقود الموكّل بمبادرة منه.",
            en: "Reviews the client's contract templates on his own initiative.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقترح تعديلات تعطّل عمل الموكّل التجاري.",
            en: "Proposes changes that obstruct the client's commercial operation.",
          },
          {
            ar: "ينتظر تكرار النزاع قبل الاقتراح.",
            en: "Waits for the dispute to recur before proposing anything.",
          },
        ],
        successCriteria: [
          {
            ar: "اقتراح وقائي واحد على الأقل اعتمده الموكّل.",
            en: "At least one preventive proposal was adopted by the client.",
          },
          {
            ar: "الاقتراح قابل للتطبيق دون تعطيل العمل.",
            en: "The proposal is workable without disrupting the business.",
          },
        ],
        evidenceRequired: [
          {
            ar: "اقتراح وقائي وقرار الموكّل عليه.",
            en: "A preventive proposal and the client's decision on it.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يفهم اقتصاد المكتب نفسه: كلفة الإنجاز، الهامش، وأثر التسعير على الطاقة.",
          en: "Understands the firm's own economics: cost to deliver, margin, and the effect of pricing on capacity.",
        },
        observableBehaviors: [
          {
            ar: "يعرف كلفة إنجاز نوع الملفّات الذي يديره.",
            en: "Knows the delivery cost of the matter type he runs.",
          },
          {
            ar: "يرفض عملًا هامشه سالب أو يعيد التفاوض عليه.",
            en: "Declines or renegotiates work with a negative margin.",
          },
        ],
        commonMistakes: [
          {
            ar: "يقيس النجاح بالإيراد لا بالهامش.",
            en: "Measures success by revenue rather than margin.",
          },
          {
            ar: "يقبل عملًا خاسرًا أملًا بعمل مستقبلي غير مؤكّد.",
            en: "Accepts loss-making work in the hope of uncertain future work.",
          },
        ],
        successCriteria: [
          {
            ar: "الهامش معروف لنوع الملفّات المدار.",
            en: "The margin is known for the matter type managed.",
          },
          {
            ar: "قرارات القبول تراعي الهامش.",
            en: "Acceptance decisions take margin into account.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تحليل هامش لنوع ملفّات.",
            en: "A margin analysis for a matter type.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يربط استراتيجية المكتب بتحوّلات السوق ويقرّر أين ينمو وأين ينسحب.",
          en: "Ties firm strategy to shifts in the market and decides where to grow and where to withdraw.",
        },
        observableBehaviors: [
          {
            ar: "يراجع سنويًا مجالات الممارسة بحسب الطلب والهامش.",
            en: "Reviews practice areas annually against demand and margin.",
          },
          {
            ar: "يقرّر الانسحاب من مجال لا يخدم استراتيجية المكتب.",
            en: "Decides to withdraw from an area that does not serve the firm's strategy.",
          },
        ],
        commonMistakes: [
          {
            ar: "يوسّع مجالات الممارسة بلا طاقة أو خبرة.",
            en: "Expands practice areas without capacity or expertise.",
          },
          {
            ar: "يحتفظ بمجال خاسر لأسباب عاطفية.",
            en: "Keeps a loss-making area for sentimental reasons.",
          },
        ],
        successCriteria: [
          {
            ar: "قرار توسّع أو انسحاب واحد مبنيّ على بيانات.",
            en: "At least one expansion or withdrawal decision was data-based.",
          },
          {
            ar: "مراجعة مجالات الممارسة سنوية وموثّقة.",
            en: "The practice-area review is annual and documented.",
          },
        ],
        evidenceRequired: [
          {
            ar: "محضر المراجعة الاستراتيجية السنوية.",
            en: "Minutes of the annual strategy review.",
          },
          {
            ar: "بيانات الطلب والهامش لكل مجال.",
            en: "Demand and margin data by practice area.",
          },
        ],
      },
    ],
    sourceIds: ["src.managing-professional-service-firm", "src.legal-analyst", "src.be-the-ceo", "src.legal-ops-kpis", "src.small-firm-roadmap"],
    confidence: 0.86,
    reviewStatus: "ai_suggested",
  },
  // -------------------------------------------------------------------------
  // dom.digital-ai
  // -------------------------------------------------------------------------
  {
    id: "skill.responsible-ai-use",
    domainId: "dom.digital-ai",
    name: { ar: "الاستخدام المسؤول للذكاء الاصطناعي", en: "Responsible use of AI" },
    synonyms: ["AI verification", "legal tech literacy", "data confidentiality in tools", "التحقّق من مخرجات الأدوات"],
    definition: {
      ar: "استخدام أدوات الذكاء الاصطناعي كمسوّدة أولى لا كمصدر: التحقّق من كل مرجع، حماية بيانات الموكّل، ومعرفة متى لا تُستخدم الأداة.",
      en: "Using AI tools as a first draft and never as a source: verifying every citation, protecting client data, and knowing when the tool should not be used at all.",
    },
    levels: [
      {
        level: 0,
        definition: {
          ar: "لم تُجمَع بعد أدلة على استخدام المتدرّب لأدوات الذكاء الاصطناعي.",
          en: "No evidence has been collected yet on the learner's use of AI tools.",
        },
        observableBehaviors: [],
        commonMistakes: [],
        successCriteria: [],
        evidenceRequired: [],
      },
      {
        level: 1,
        definition: {
          ar: "يستخدم الأداة أحيانًا دون فهم حدودها.",
          en: "Uses the tool occasionally without understanding its limits.",
        },
        observableBehaviors: [
          {
            ar: "يعرف أن مخرجات الأداة قد تكون خاطئة.",
            en: "Knows the tool's output may be wrong.",
          },
          {
            ar: "يستخدم الأداة في المهامّ العامّة لا في الرأي القانوني.",
            en: "Uses the tool for general tasks, not for legal advice.",
          },
        ],
        commonMistakes: [
          {
            ar: "يلصق نصًّا يتضمّن اسم الموكّل في أداة عامّة.",
            en: "Pastes text containing the client's name into a public tool.",
          },
          {
            ar: "يقبل مرجعًا قانونيًا من الأداة بلا تحقّق.",
            en: "Accepts a legal citation from the tool without checking it.",
          },
        ],
        successCriteria: [
          {
            ar: "لا بيانات موكّل في أداة غير معتمدة.",
            en: "No client data in a non-approved tool.",
          },
          {
            ar: "الأداة لم تُستخدم لإنتاج رأي نهائي.",
            en: "The tool was not used to produce a final opinion.",
          },
        ],
        evidenceRequired: [
          {
            ar: "إقرار بسياسة استخدام الأدوات.",
            en: "An acknowledgement of the tool usage policy.",
          },
        ],
      },
      {
        level: 2,
        definition: {
          ar: "يستخدم الأدوات المعتمدة في المكتب فقط ويجرّد البيانات قبل الإدخال.",
          en: "Uses only firm-approved tools and strips identifying data before input.",
        },
        observableBehaviors: [
          {
            ar: "يستبدل أسماء الأطراف برموز قبل إدخال النصّ.",
            en: "Replaces party names with placeholders before entering text.",
          },
          {
            ar: "يستخدم الأدوات المعتمدة داخل بيئة المكتب.",
            en: "Uses approved tools inside the firm's environment.",
          },
        ],
        commonMistakes: [
          {
            ar: "يجرّد الأسماء ويترك تفاصيل تكشف الهوية.",
            en: "Strips the names and leaves details that still identify the party.",
          },
          {
            ar: "يستخدم أداة شخصية لأنها أسرع.",
            en: "Uses a personal tool because it is faster.",
          },
        ],
        successCriteria: [
          {
            ar: "المدخلات مجرّدة من البيانات المعرّفة.",
            en: "Inputs are stripped of identifying data.",
          },
          {
            ar: "الأدوات المستخدمة ضمن القائمة المعتمدة.",
            en: "The tools used are on the approved list.",
          },
        ],
        evidenceRequired: [
          {
            ar: "مثال على نصّ مجرّد قبل الإدخال.",
            en: "An example of text stripped before input.",
          },
        ],
      },
      {
        level: 3,
        definition: {
          ar: "يتحقّق من كل مرجع ومعلومة في مخرجات الأداة من المصدر الأصلي قبل الاستخدام.",
          en: "Verifies every citation and fact in the tool's output against the original source before using it.",
        },
        observableBehaviors: [
          {
            ar: "يفتح النصّ التشريعي أو الحكم الأصلي للتحقّق.",
            en: "Opens the original legislative text or judgment to verify.",
          },
          {
            ar: "يوثّق في الملف أن المخرج تحقّق منه ومن راجعه.",
            en: "Records in the file that the output was verified and by whom.",
          },
        ],
        commonMistakes: [
          {
            ar: "يتحقّق من وجود المرجع لا من مضمونه.",
            en: "Checks the citation exists rather than what it says.",
          },
          {
            ar: "يستخدم صياغة الأداة كما هي في مستند رسمي.",
            en: "Uses the tool's wording as it is in a formal document.",
          },
        ],
        successCriteria: [
          {
            ar: "كل مرجع في المستند تحقّق منه من مصدره.",
            en: "Every citation in the document was verified at source.",
          },
          {
            ar: "التحقّق موثّق في الملف.",
            en: "The verification is recorded in the file.",
          },
        ],
        evidenceRequired: [
          {
            ar: "سجلّ تحقّق من مخرجات أداة في مستند حقيقي.",
            en: "A verification log for tool output in a real document.",
          },
        ],
      },
      {
        level: 4,
        definition: {
          ar: "يقرّر متى تُستخدم الأداة ومتى لا تُستخدم بحسب حساسية العمل ومخاطره.",
          en: "Decides when the tool is used and when it is not, according to the sensitivity and risk of the work.",
        },
        observableBehaviors: [
          {
            ar: "يمتنع عن استخدام الأداة في المسائل عالية الحساسية.",
            en: "Refrains from using the tool in highly sensitive matters.",
          },
          {
            ar: "يبلّغ الموكّل عند استخدام أدوات في عمله إن اقتضت السياسة ذلك.",
            en: "Tells the client when tools are used on his work, where policy requires it.",
          },
        ],
        commonMistakes: [
          {
            ar: "يستخدم الأداة في كل شيء لأنها متاحة.",
            en: "Uses the tool for everything because it is available.",
          },
          {
            ar: "يمتنع عن كل استخدام فيفقد كفاءة حقيقية.",
            en: "Refuses all use and loses real efficiency.",
          },
        ],
        successCriteria: [
          {
            ar: "قرار الاستخدام مبنيّ على تصنيف مخاطر موثّق.",
            en: "The usage decision rests on a documented risk classification.",
          },
          {
            ar: "الإفصاح تمّ حيث تقتضيه السياسة.",
            en: "Disclosure took place where policy required it.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تصنيف مخاطر الاستخدام لملف واحد.",
            en: "A usage risk classification for one matter.",
          },
        ],
      },
      {
        level: 5,
        definition: {
          ar: "يقيّم الأدوات قبل اعتمادها في المكتب ويقيس أثرها على الجودة والوقت.",
          en: "Evaluates tools before the firm adopts them and measures their effect on quality and time.",
        },
        observableBehaviors: [
          {
            ar: "يجرّب الأداة على عيّنة عمل حقيقي ويقارن النتيجة.",
            en: "Pilots the tool on a sample of real work and compares the result.",
          },
          {
            ar: "يفحص شروط حفظ البيانات لدى مزوّد الأداة.",
            en: "Checks the provider's data retention terms.",
          },
        ],
        commonMistakes: [
          {
            ar: "يعتمد الأداة بناءً على عرض المزوّد.",
            en: "Adopts the tool on the basis of the vendor's demonstration.",
          },
          {
            ar: "يقيس الوقت الموفّر ويهمل الأخطاء الناتجة.",
            en: "Measures time saved and ignores the errors produced.",
          },
        ],
        successCriteria: [
          {
            ar: "قرار الاعتماد مبنيّ على تجربة مقيسة.",
            en: "The adoption decision rests on a measured pilot.",
          },
          {
            ar: "شروط حماية البيانات موثّقة ومقبولة.",
            en: "Data protection terms are documented and acceptable.",
          },
        ],
        evidenceRequired: [
          {
            ar: "تقرير تجربة الأداة.",
            en: "The tool pilot report.",
          },
        ],
      },
      {
        level: 6,
        definition: {
          ar: "يضع سياسة استخدام الذكاء الاصطناعي في المكتب ويجعل المسؤولية المهنية عن المخرج واضحة.",
          en: "Sets the firm's AI usage policy and makes professional responsibility for the output unambiguous.",
        },
        observableBehaviors: [
          {
            ar: "يعتمد سياسة تنصّ على أن المسؤولية عن المخرج تقع على المحامي دائمًا.",
            en: "Adopts a policy stating that responsibility for the output always rests with the lawyer.",
          },
          {
            ar: "يدرّب الفريق ويراجع الالتزام دوريًا.",
            en: "Trains the team and reviews compliance periodically.",
          },
        ],
        commonMistakes: [
          {
            ar: "يمنع الاستخدام كلّيًا فينشأ استخدام غير معلن.",
            en: "Bans use outright and undeclared use appears.",
          },
          {
            ar: "يضع سياسة بلا آلية تحقّق.",
            en: "Sets a policy with no verification mechanism.",
          },
        ],
        successCriteria: [
          {
            ar: "السياسة معتمدة ومعروفة لكل الفريق.",
            en: "The policy is adopted and known to the whole team.",
          },
          {
            ar: "لا حادثة تسريب بيانات عبر أداة خلال سنة.",
            en: "No data leakage incident through a tool in a year.",
          },
        ],
        evidenceRequired: [
          {
            ar: "السياسة المعتمدة وسجلّ التدريب.",
            en: "The adopted policy and the training log.",
          },
          {
            ar: "تقرير مراجعة الالتزام.",
            en: "The compliance review report.",
          },
        ],
      },
    ],
    sourceIds: ["src.modernize-your-law-firm", "src.legal-ops-kpis", "src.lawyers-ceo", "src.rule-of-law"],
    confidence: 0.83,
    reviewStatus: "ai_suggested",
    prerequisiteSkillIds: ["skill.quality-control"],
  },
];
