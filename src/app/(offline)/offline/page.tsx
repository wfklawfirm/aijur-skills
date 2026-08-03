/** The service worker's fallback navigation target — see public/sw.js. */
export default function OfflinePage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "1.5rem",
        gap: "0.75rem",
        background: "#f7f8fa",
        color: "#111827",
      }}
    >
      <p style={{ fontSize: "1.375rem", fontWeight: 700 }}>لا يوجد اتصال بالإنترنت</p>
      <p style={{ color: "#64748b", maxWidth: 320 }}>
        الصفحات والوحدات التي فتحتها سابقًا ما زالت متاحة. أعد المحاولة عند عودة الاتصال.
      </p>
      <p style={{ fontSize: "1.125rem", fontWeight: 700, marginTop: "1rem" }}>You&rsquo;re offline</p>
      <p style={{ color: "#64748b", maxWidth: 320 }}>
        Pages and units you&rsquo;ve already opened are still available. Try again once you&rsquo;re back online.
      </p>
    </main>
  );
}
