import type { Metadata, Viewport } from "next";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import "../../globals.css";
import { LOCALE_META, isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { ConnectivityProvider, I18nProvider } from "@/components/providers";
import { RegisterServiceWorker } from "@/components/layout/register-sw";

const latin = Inter({
  subsets: ["latin"],
  variable: "--font-latin-src",
  display: "swap",
});

const arabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic-src",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AIJUR Skills",
    template: "%s · AIJUR Skills",
  },
  description:
    "Mobile-first professional, operational and language skills training for lawyers and law students.",
  manifest: "/manifest.webmanifest",
  applicationName: "AIJUR Skills",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "AIJUR Skills" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#15130f" },
  ],
  width: "device-width",
  initialScale: 1,
  // Zoom stays enabled. Locking it is the most common accessibility failure in
  // "app-like" web builds and it is never worth the visual tidiness.
  maximumScale: 5,
  viewportFit: "cover",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const meta = LOCALE_META[locale];
  const dict = getDictionary(locale);

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      className={`${latin.variable} ${arabic.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* The font vars from next/font are hashed names; map them onto the
            stable token names the stylesheet uses. */}
        <style>{`:root{--font-latin:var(--font-latin-src);--font-arabic:var(--font-arabic-src);}`}</style>
      </head>
      <body>
        <a href="#main" className="skip-link">
          {dict.a11y.skipToContent}
        </a>
        <I18nProvider locale={locale} dict={dict}>
          <ConnectivityProvider>{children}</ConnectivityProvider>
        </I18nProvider>
        <RegisterServiceWorker />
      </body>
    </html>
  );
}
