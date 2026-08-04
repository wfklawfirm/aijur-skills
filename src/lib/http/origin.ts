import "server-only";
import { headers } from "next/headers";

/**
 * Best-effort absolute origin for building links in outbound email (password
 * reset, email verification). Prefers `APP_URL` when set — recommended for
 * any deployment sitting behind a proxy/CDN that might rewrite `Host` — and
 * falls back to the current request's own `Host` header, which is exactly
 * right for local dev with no configuration at all.
 */
export async function appOrigin(): Promise<string> {
  if (process.env.APP_URL) return process.env.APP_URL.replace(/\/$/, "");
  const h = await headers();
  const proto = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("host") ?? "localhost:3000";
  return `${proto}://${host}`;
}
