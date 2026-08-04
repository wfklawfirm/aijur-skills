"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth/session";
import { sendEmail } from "@/lib/email/mailer";
import { appOrigin } from "@/lib/http/origin";
import type { Locale } from "@/lib/i18n/config";
import {
  createAccountCore,
  listAccountsCore,
  setAccessExpiresAtCore,
  setAccountStatusCore,
  type AccountStatus,
  type PlatformAccount,
  type SystemRole,
} from "./platform-accounts-core";

// Note: types are NOT re-exported from here, same reason as `org.ts` — a
// "use server" file's exports are all rewritten into RPC proxy references by
// Next's build. Consumers import `PlatformAccount`/`SystemRole`/
// `AccountStatus` straight from `./platform-accounts-core` instead.

const REVALIDATE_PATH = "/[locale]/admin/accounts";

export async function listPlatformAccounts(search: string): Promise<PlatformAccount[]> {
  const user = await requireUser();
  return listAccountsCore(user, search);
}

/**
 * Creates the account, then best-effort emails the new owner a link to set
 * their own password — reusing the exact `/reset-password/[token]` page a
 * "forgot password" link would send them to (see `createAccountCore`'s doc
 * comment for why one flow honestly covers both cases). A mail-send failure
 * doesn't roll back the account: the platform owner can always resend by
 * triggering a real "forgot password" from the sign-in page using the same
 * email, which reaches the same account.
 */
export async function createPlatformAccount(
  locale: Locale,
  input: { email: string; name: string; systemRole: SystemRole; accessExpiresAt: number | null },
): Promise<{ email: string }> {
  const user = await requireUser();
  const { userId, resetToken } = await createAccountCore(user, input);

  try {
    const origin = await appOrigin();
    const link = `${origin}/${locale}/reset-password/${resetToken}`;
    const isAr = locale === "ar";
    await sendEmail({
      to: input.email.trim().toLowerCase(),
      subject: isAr ? "تم إنشاء حسابك — AIJUR" : "Your AIJUR account was created",
      text: isAr
        ? `مرحبًا ${input.name}،\n\nأنشأنا لك حسابًا على AIJUR. اضغط على الرابط التالي لتعيين كلمة مرورك خلال ساعة واحدة:\n${link}`
        : `Hi ${input.name},\n\nAn AIJUR account was created for you. Use this link to set your password within the next hour:\n${link}`,
    });
  } catch (err) {
    console.error("[createPlatformAccount] failed to send set-password email", err, { userId });
  }

  revalidatePath(REVALIDATE_PATH, "page");
  return { email: input.email.trim().toLowerCase() };
}

export async function setPlatformAccountStatus(targetUserId: string, status: AccountStatus): Promise<void> {
  const user = await requireUser();
  await setAccountStatusCore(user, targetUserId, status);
  revalidatePath(REVALIDATE_PATH, "page");
}

export async function extendPlatformAccess(targetUserId: string, expiresAt: number | null): Promise<void> {
  const user = await requireUser();
  await setAccessExpiresAtCore(user, targetUserId, expiresAt);
  revalidatePath(REVALIDATE_PATH, "page");
}
