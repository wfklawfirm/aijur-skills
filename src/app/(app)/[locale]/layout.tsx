import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
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

/**
 * Noto Kufi Arabic (the original choice here) is a Kufic *display* face --
 * geometric, angular letterforms built for headlines and branding, not for
 * body/UI text. Used across every Arabic string in the app (buttons, form
 * labels, paragraphs), it read as unprofessional and made letters look
 * disconnected/blocky rather than the natural connected Naskh-style flow
 * readers expect from app UI text. IBM Plex Sans Arabic is a proper text
 * face -- part of IBM's multi-script Plex family, specifically designed to
 * pair with IBM Plex Sans (a modern grotesque very close in proportions and
 * x-height to Inter, used below for Latin) so Arabic and Latin runs read as
 * one consistent typographic voice rather than two mismatched systems.
 * Explicit `weight` list required: unlike Noto Sans Arabic, this family
 * isn't shipped as a single variable font by Google Fonts, and the app only
 * actually uses 400/500/600/700 (font-normal/medium/semibold/bold --
 * verified by grep across src/**\/*.tsx before picking this list).
 */
const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
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
