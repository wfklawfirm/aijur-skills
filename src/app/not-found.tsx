import Link from "next/link";

/**
 * Root-level fallback for paths outside both route groups (e.g. a raw
 * `/api/*` 404). The proxy sends every ordinary navigation into `/[locale]/...`
 * first, where the locale-aware not-found.tsx takes over — this one only ever
 * fires for edge cases that never reach that redirect.
 */
export default function RootNotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <main
          style={{
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            textAlign: "center",
            padding: "1.5rem",
          }}
        >
          <p style={{ fontSize: "1.375rem", fontWeight: 700 }}>الصفحة غير موجودة</p>
          <Link href="/ar/home" style={{ color: "#7a1832", fontWeight: 600 }}>
            العودة إلى الرئيسية · Back home
          </Link>
        </main>
      </body>
    </html>
  );
}
