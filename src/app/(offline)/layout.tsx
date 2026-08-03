/**
 * A second, independent root for the `/offline` route (see the `(offline)`
 * route group). It must render with zero JS and zero network dependency, so it
 * stays outside the `(app)` root's providers, fonts and service-worker
 * registration entirely.
 */
export default function OfflineRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
