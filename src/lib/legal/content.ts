import "server-only";

/**
 * Content for the required legal/support pages (native app conversion
 * brief, privacy/permissions section — "Privacy Policy / Terms of Use /
 * Account & Data / Contact Support / App Version / Licenses" are all
 * mandatory before either app store will accept a listing).
 *
 * IMPORTANT — what this file is and isn't: the `privacy` and `terms`
 * sections below are a draft grounded in this codebase's actual, real data
 * practices (verified against `schema.ts`, `.env.example`, and the existing
 * AI-consent/org-visibility features already shipped in Profile) — not
 * generic filler and not invented marketing claims. They are NOT a
 * substitute for review by a licensed lawyer, and both pages render an
 * explicit banner saying so. Do not remove that banner before publishing.
 */

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPage {
  title: string;
  updated: string;
  reviewBanner: string;
  sections: LegalSection[];
}

const AR_UPDATED = "آخر تحديث: [FILL IN — تاريخ اعتماد النص من الجهة القانونية]";
const EN_UPDATED = "Last updated: [FILL IN — date this text is approved by counsel]";
const AR_REVIEW_BANNER =
  "هذا نص مسودة مبني على آلية عمل التطبيق الفعلية، وليس نصًا قانونيًا نهائيًا. يجب مراجعته من محامٍ مرخّص قبل نشر التطبيق على أي متجر.";
const EN_REVIEW_BANNER =
  "This is a draft grounded in how the app actually works today — it is not final legal text. It must be reviewed by a licensed lawyer before the app is published to any store.";

export const privacyPolicy: { ar: LegalPage; en: LegalPage } = {
  ar: {
    title: "سياسة الخصوصية",
    updated: AR_UPDATED,
    reviewBanner: AR_REVIEW_BANNER,
    sections: [
      {
        heading: "ما الذي نجمعه",
        paragraphs: [
          "معلومات الحساب: اسمك، بريدك الإلكتروني، وكلمة مرور مشفّرة (لا نخزّنها أبدًا كنص صريح).",
          "بيانات التعلّم: تقدّمك في الوحدات، درجاتك، سجلّات الإتقان، ونصوص إجاباتك وتمارين المحاكاة.",
          "التفضيلات: اللغة، إعدادات إمكانية الوصول، وهدفك الأسبوعي.",
          "عند استخدام التطبيق على الجوال: رمز إشعارات الدفع (push token) الخاص بجهازك ونظام التشغيل، إن فعّلت الإشعارات فقط.",
        ],
      },
      {
        heading: "كيف نستخدم بياناتك",
        paragraphs: [
          "لتشغيل ميزات التطبيق: عرض تقدّمك، تقييم إجاباتك، وتخصيص المحتوى.",
          "إذا وافقت صراحةً (يمكنك سحب الموافقة في أي وقت من صفحة حسابي)، نُرسل نصوص إجاباتك إلى مزوّد ذكاء اصطناعي خارجي (حاليًا Anthropic و/أو OpenAI، بحسب إعداد النظام) لغرض التقييم فقط — لا تُستخدم بياناتك لتدريب أي نموذج ذكاء اصطناعي.",
          "إذا كنت عضوًا في مؤسسة، قد يرى مديرو المؤسسة درجاتك أو نصوص إجاباتك بحسب سياسة الخصوصية التي حدّدتها مؤسستك — يظهر ذلك بوضوح في صفحة حسابي.",
        ],
      },
      {
        heading: "من يشارك بياناتك",
        paragraphs: [
          "مزوّد الذكاء الاصطناعي (فقط عند موافقتك، وفقط النص الذي تكتبه في التمارين).",
          "مزوّد إرسال البريد الإلكتروني (Resend) لإرسال روابط إعادة تعيين كلمة المرور وتأكيد البريد.",
          "لا نبيع بياناتك لأي طرف ثالث، ولا نستخدمها في الإعلانات.",
        ],
      },
      {
        heading: "حقوقك",
        paragraphs: [
          "يمكنك حذف حسابك نهائيًا من صفحة «حسابي» في أي وقت — هذا يحذف حسابك وكل أدلّة أدائك من قاعدة البيانات.",
          "يمكنك سحب موافقتك على معالجة الذكاء الاصطناعي دون حذف حسابك.",
          "[FILL IN — أضف هنا آلية طلب نسخة من بياناتك إن كانت مطلوبة في نطاقك القانوني، مثل الاتحاد الأوروبي].",
        ],
      },
      {
        heading: "التواصل",
        paragraphs: ["لأي استفسار حول الخصوصية: [FILL IN — بريد إلكتروني مخصص لطلبات الخصوصية]."],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: EN_UPDATED,
    reviewBanner: EN_REVIEW_BANNER,
    sections: [
      {
        heading: "What we collect",
        paragraphs: [
          "Account information: your name, email address, and a hashed password (never stored in plain text).",
          "Learning data: your unit progress, scores, mastery records, and the text of your answers and simulation exercises.",
          "Preferences: language, accessibility settings, and your weekly goal.",
          "On the mobile app only, and only if you enable notifications: a push-notification token tied to your device and OS.",
        ],
      },
      {
        heading: "How we use it",
        paragraphs: [
          "To run the app's core features: showing your progress, grading your answers, and personalizing content.",
          "If you explicitly opt in (withdrawable at any time from the Profile screen), the text of your answers is sent to an external AI provider (currently Anthropic and/or OpenAI, depending on configuration) for grading only — your data is never used to train any AI model.",
          "If you belong to an organization, your managers may see your scores or answer text depending on the privacy policy your organization has configured — this is shown transparently on your Profile screen.",
        ],
      },
      {
        heading: "Who we share it with",
        paragraphs: [
          "Our AI provider (only with your consent, and only the text you submit in exercises).",
          "Our email delivery provider (Resend), to send password-reset and email-verification links.",
          "We do not sell your data to any third party, and we do not use it for advertising.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You can permanently delete your account at any time from the Profile screen — this deletes your account and all of your performance evidence from the database.",
          "You can withdraw AI-processing consent without deleting your account.",
          "[FILL IN — add a data-export request mechanism here if required in your jurisdiction, e.g. the EU].",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["For any privacy question: [FILL IN — a real, monitored privacy contact email]."],
      },
    ],
  },
};

export const termsOfUse: { ar: LegalPage; en: LegalPage } = {
  ar: {
    title: "شروط الاستخدام",
    updated: AR_UPDATED,
    reviewBanner: AR_REVIEW_BANNER,
    sections: [
      {
        heading: "طبيعة الخدمة",
        paragraphs: [
          "AIJUR Skills منصّة تدريب على المهارات المهنية والعملية والقانونية عبر تمارين ومحاكاة تفاعلية.",
          "التقييمات المُولَّدة بالذكاء الاصطناعي هي أداة تدريبية للتغذية الراجعة فقط، ولا تُشكّل استشارة قانونية بأي شكل، ولا بديلاً عن استشارة محامٍ مرخّص أو عن الإشراف المهني.",
        ],
      },
      {
        heading: "حسابك",
        paragraphs: [
          "أنت مسؤول عن الحفاظ على سرّية كلمة مرورك.",
          "[FILL IN — سياسة إلغاء/تعليق الحساب المخالف للشروط، حسب سياسة الشركة].",
        ],
      },
      {
        heading: "الاشتراكات",
        paragraphs: [
          "[FILL IN — يجب استكمال هذا القسم فقط بعد أن يُقرَّر نموذج الاشتراك الفعلي (دعوة مؤسسية، منح إداري، أو شراء داخل التطبيق)، ووفق الشروط الحقيقية لذلك النموذج. لا تُنشر هذه الصفحة بادّعاء وجود عملية شراء لا تعمل فعليًا.]",
        ],
      },
      {
        heading: "الملكية الفكرية",
        paragraphs: ["كل محتوى المنصّة محمي بحقوق الملكية الفكرية لـ AIJUR أو مرخّصيها. [FILL IN — التفاصيل الكاملة]."],
      },
      {
        heading: "القانون الحاكم",
        paragraphs: ["[FILL IN — الاختصاص القضائي والقانون الحاكم]."],
      },
    ],
  },
  en: {
    title: "Terms of Use",
    updated: EN_UPDATED,
    reviewBanner: EN_REVIEW_BANNER,
    sections: [
      {
        heading: "What the service is",
        paragraphs: [
          "AIJUR Skills is a training platform for professional, operational, and legal skills through interactive exercises and simulations.",
          "AI-generated evaluations are a training feedback tool only. They do not constitute legal advice in any form, and are not a substitute for consulting a licensed lawyer or for professional supervision.",
        ],
      },
      {
        heading: "Your account",
        paragraphs: [
          "You are responsible for keeping your password confidential.",
          "[FILL IN — account suspension/termination policy for terms violations, per your company's actual policy].",
        ],
      },
      {
        heading: "Subscriptions",
        paragraphs: [
          "[FILL IN — this section must only be completed once the real subscription model is decided (institutional invite, admin-granted access, or in-app purchase), matching that model's actual terms. Do not publish this page claiming a purchase flow that doesn't actually work.]",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: ["All platform content is protected by AIJUR's or its licensors' intellectual property rights. [FILL IN — full details]."],
      },
      {
        heading: "Governing law",
        paragraphs: ["[FILL IN — governing law and jurisdiction]."],
      },
    ],
  },
};
