import { redirect } from "next/navigation";
import { getSessionUser, type SessionUser } from "@/lib/auth/session";
import { can } from "@/lib/auth/rbac";
import type { Locale } from "@/lib/i18n/config";

/**
 * Every Content Studio page (the studio index, skills, units, scenarios,
 * review-queue, sources, ingestion) needs the caller to actually be part of
 * the content team, not just signed in.
 *
 * `AdminLayout`'s own gate is deliberately broad — `content.author` OR
 * `org.members.manage`/`org.reports`, so an org admin/manager with no
 * content role can still reach `/admin/organization` — so it does NOT by
 * itself keep a plain learner or org member out of the content pages. Every
 * content-studio page calls this to re-check `content.author` specifically,
 * the same way `admin/organization/page.tsx` re-checks its own
 * `org.members.manage`/`org.reports` requirement rather than trusting the
 * layout gate alone.
 *
 * This is the redirect for a clean UX, not the actual security boundary —
 * every read/write function in `src/lib/actions/admin.ts` enforces the same
 * permission (or a stricter one, for evaluation data) on its own, so a
 * request that bypasses this page entirely (a direct Server Action call)
 * still gets rejected.
 */
export async function requireContentAuthorOrRedirect(loc: Locale): Promise<SessionUser> {
  const user = await getSessionUser();
  if (!user || !can(user, "content.author")) {
    redirect(`/${loc}/admin/organization`);
  }
  return user;
}
