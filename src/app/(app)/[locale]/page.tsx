import Link from "next/link";
import { redirect } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { getSessionUser } from "@/lib/auth/session";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PracticeIcon, ShieldIcon, GlobeIcon, UsersIcon } from "@/components/ui/icons";

export default async function LandingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;

  const user = await getSessionUser();
  if (user) redirect(`/${loc}/home`);

  const dict = getDictionary(loc);

  const pillars = [
    { icon: <PracticeIcon size={22} />, ...dict.landing.pillars.practice },
    { icon: <ShieldIcon size={22} />, ...dict.landing.pillars.evidence },
    { icon: <GlobeIcon size={22} />, ...dict.landing.pillars.bilingual },
  ];

  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-md flex-col gap-10 px-5 pb-14 pt-12">
      <header className="flex flex-col items-center gap-3 text-center">
        <Badge tone="brand">{dict.brand.name}</Badge>
        <p className="text-supporting max-w-xs">{dict.brand.slogan}</p>
      </header>

      <section className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-page-title">{dict.landing.heroTitle}</h1>
        <p className="text-supporting text-[0.9375rem] leading-relaxed">{dict.landing.heroBody}</p>
      </section>

      <div className="flex flex-col gap-3">
        <Link
          href={`/${loc}/sign-up`}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-control)] bg-[var(--color-brand)] px-5 text-[0.9375rem] font-semibold text-[var(--color-brand-contrast)] shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--color-brand-dark)] active:bg-[var(--color-brand-active)]"
        >
          {dict.landing.ctaPrimary}
        </Link>
        <Link
          href={`/${loc}/sign-in`}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-control)] border border-[var(--border-strong)] bg-[var(--surface)] px-5 text-[0.9375rem] font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--surface-muted)]"
        >
          {dict.landing.ctaSecondary}
        </Link>
      </div>

      <section className="flex flex-col gap-3">
        {pillars.map((pillar, i) => (
          <Card key={i}>
            <CardBody className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-[var(--color-brand)]">{pillar.icon}</span>
              <div className="min-w-0">
                <p className="text-section-title">{pillar.title}</p>
                <p className="text-supporting mt-1">{pillar.body}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </section>

      <Card className="bg-[var(--surface-muted)]">
        <CardBody className="flex items-start gap-3">
          <span className="mt-0.5 shrink-0 text-[var(--foreground-secondary)]">
            <UsersIcon size={22} />
          </span>
          <div className="min-w-0">
            <p className="text-section-title">{dict.landing.forOrgs}</p>
            <p className="text-supporting mt-1">{dict.landing.forOrgsBody}</p>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
