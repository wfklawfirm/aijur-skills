import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/config";

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
