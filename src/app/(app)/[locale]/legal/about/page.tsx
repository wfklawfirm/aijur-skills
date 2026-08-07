import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { LegalPageShell } from "../legal-page-shell";
import { Card, CardBody } from "@/components/ui/card";
import pkg from "../../../../../../package.json";

/**
 * App Version + Licenses in one page — both required by the store
 * checklists, both simple factual/technical content rather than legal
 * prose, so combining them keeps the Legal index short without dropping
 * either requirement.
 *
 * The license list below is hand-verified against each package's own
 * published license (all long-established, unambiguous licenses — MIT,
 * Apache-2.0, ISC) since `license-checker`'s dependency tree doesn't run
 * under this project's Node version. Before store submission, re-verify
 * with an automated scanner (e.g. `npx license-checker-rseidelsohn
 * --production --summary`) as part of CI — see
 * `docs/MOBILE_STORE_CHECKLIST.md`.
 */
const LICENSES: { name: string; license: string }[] = [
  { name: "Next.js", license: "MIT" },
  { name: "React / React DOM", license: "MIT" },
  { name: "drizzle-orm", license: "Apache-2.0" },
  { name: "@libsql/client", license: "MIT" },
  { name: "framer-motion", license: "MIT" },
  { name: "lucide-react", license: "ISC" },
  { name: "zod", license: "MIT" },
  { name: "server-only", license: "MIT" },
  { name: "Capacitor (@capacitor/*)", license: "MIT" },
];

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <LegalPageShell locale={locale} title={dict.profile.appVersion} backHref={`/${locale}/legal`}>
      <Card>
        <CardBody className="space-y-1">
          <p className="text-section-title">{dict.brand.name}</p>
          <p className="text-supporting num">
            {locale === "ar" ? "الإصدار" : "Version"} {pkg.version}
          </p>
          <p className="text-supporting">
            {locale === "ar"
              ? "رقم إصدار المتجر (Android versionCode / iOS build) يُدار مركزيًا — انظر docs/MOBILE_STORE_CHECKLIST.md."
              : "The store build number (Android versionCode / iOS build) is centrally managed — see docs/MOBILE_STORE_CHECKLIST.md."}
          </p>
        </CardBody>
      </Card>

      <section className="space-y-2">
        <h2 className="text-section-title">{dict.profile.licenses}</h2>
        <Card>
          <CardBody className="divide-y divide-[var(--border)] p-0">
            {LICENSES.map((l) => (
              <div key={l.name} className="flex items-center justify-between px-4 py-3 text-[0.9375rem]">
                <span>{l.name}</span>
                <span className="text-supporting">{l.license}</span>
              </div>
            ))}
          </CardBody>
        </Card>
      </section>
    </LegalPageShell>
  );
}
