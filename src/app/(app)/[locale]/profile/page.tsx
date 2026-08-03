import { notFound, redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { organizations, profiles } from "@/lib/db/schema";
import { getSessionUser } from "@/lib/auth/session";
import { getDictionary } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { AppHeader, BottomNav, Page, SectionTitle } from "@/components/layout/app-shell";
import { Card, CardBody } from "@/components/ui/card";
import { ProfileSettings } from "./profile-settings";

export default async function ProfilePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  const user = await getSessionUser();
  if (!user) redirect(`/${locale}/sign-in`);

  const [profileRows, orgRows] = await Promise.all([
    db.select().from(profiles).where(eq(profiles.userId, user.id)).limit(1),
    user.organization
      ? db.select().from(organizations).where(eq(organizations.id, user.organization.id)).limit(1)
      : Promise.resolve([] as (typeof organizations.$inferSelect)[]),
  ]);
  const profile = profileRows[0];
  const orgRow = orgRows[0];

  const organization =
    user.organization && orgRow
      ? {
          name: user.organization.name,
          managersSeeScores: orgRow.privacyPolicy?.managersSeeScores ?? false,
          managersSeeTranscripts: orgRow.privacyPolicy?.managersSeeTranscripts ?? false,
          retentionDays: orgRow.privacyPolicy?.retentionDays ?? 0,
        }
      : null;

  return (
    <>
      <AppHeader title={dict.profile.title} />
      <Page className="pb-24">
        <SectionTitle>{dict.profile.account}</SectionTitle>
        <Card>
          <CardBody className="space-y-1">
            <p dir="auto" className="text-[0.9375rem] font-semibold">
              {user.name}
            </p>
            <p dir="auto" className="text-supporting">
              {user.email}
            </p>
          </CardBody>
        </Card>

        <ProfileSettings
          locale={locale}
          weeklyMinutesGoal={profile?.weeklyMinutesGoal ?? 60}
          accessibility={profile?.accessibility ?? {}}
          aiConsentGranted={Boolean(profile?.aiProcessingConsentAt)}
          organization={organization}
        />
      </Page>
      <BottomNav showStudio={user.systemRole !== "learner"} />
    </>
  );
}
