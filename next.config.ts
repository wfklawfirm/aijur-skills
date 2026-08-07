import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  serverExternalPackages: ["@libsql/client"],
  // The e2e suite (playwright.config.ts) drives `next dev` via 127.0.0.1
  // rather than localhost; without this, Next's dev-origin protection
  // blocks the HMR websocket with a console warning on every test run.
  // Dev-only — has no effect on `next build`/`next start`.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(self), microphone=(self), geolocation=()" },
        ],
      },
      { source: "/sw.js", headers: [{ key: "Cache-Control", value: "no-cache, no-store, must-revalidate" }] },
      {
        // iOS Universal Links verification -- Apple's servers reject this
        // file if it isn't served as JSON (no .json extension in the URL,
        // so Next would otherwise serve it as text/plain via `public/`).
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
