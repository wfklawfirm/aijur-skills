import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/config";
import { MUTATING_METHODS, isSameOriginRequest } from "@/lib/auth/csrf";

const PUBLIC_FILE = /\.(?:svg|png|jpg|jpeg|gif|webp|ico|json|webmanifest|js|css|txt|xml)$/;

/**
 * Locale routing. Every page lives under `/[locale]`, so `dir`, fonts and
 * dictionary are resolved once at the layout and never guessed per-component.
 *
 * Order of preference: an explicit cookie the learner set > their browser's
 * Accept-Language > Arabic. Arabic is the default because this product is
 * Arabic-first, not because of where the request came from.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/sw.js" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Application-level CSRF guard — see src/lib/auth/csrf.ts for why this
  // exists alongside Next's own built-in Server Action Origin check.
  if (MUTATING_METHODS.has(request.method)) {
    const origin = request.headers.get("origin");
    if (!isSameOriginRequest(origin, request.nextUrl.origin)) {
      return NextResponse.json({ error: "cross_origin_request_blocked" }, { status: 403 });
    }
  }

  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const cookieLocale = request.cookies.get("aijur_locale")?.value;
  const headerLocale = request.headers
    .get("accept-language")
    ?.split(",")
    .map((part) => part.split(";")[0]?.trim().slice(0, 2).toLowerCase())
    .find((code) => LOCALES.some((l) => l === code));

  const locale =
    (LOCALES as readonly string[]).includes(cookieLocale ?? "")
      ? cookieLocale!
      : (headerLocale ?? DEFAULT_LOCALE);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
