"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth/session";
import { sendEmail } from "@/lib/email/mailer";
import { appOrigin } from "@/lib/http/origin";
import type { Locale } from "@/lib/i18n/config";
import {
  addAdminNoteCore,
  bulkActionCore,
  changePlanCore,
  createPlanCore,
  createSubscriberCore,
  exportSubscribersCsvCore,
  getAdminSettingsCore,
  getDashboardKpisCore,
  getSubscriberDetailCore,
  grantLifetimeCore,
  hideSubscriberCore,
  cancelSubscriptionCore,
  listAdminsCore,
  listAuditLogCore,
  listPlansCore,
  listSubscribersCore,
  reactivateAccountCore,
  reactivateSubscriptionCore,
  resendInviteCore,
  setPlatformRoleCore,
  signOutAllSessionsCore,
  suspendAccountCore,
  suspendSubscriptionCore,
  updatePlanCore,
  updateAdminSettingsCore,
  updateSubscriberCore,
  updateSubscriptionPeriodCore,
  type AdminSettingsShape,
  type BulkActionResult,
  type CreateSubscriberInput,
  type PlanInput,
  type PlatformRole,
  type SubscriberListParams,
  type UpdatePeriodInput,
  type UpdateSubscriberInput,
} from "./subscribers-core";

// Note: types are NOT re-exported from here (same reason as `org.ts` /
// `platform-accounts.ts`) — consumers import types straight from
// `./subscribers-core`.

const LIST_PATH = "/[locale]/admin/subscribers";

function revalidateSubscribers() {
  revalidatePath(LIST_PATH, "layout");
}

async function sendInviteEmail(locale: Locale, to: string, name: string, resetToken: string): Promise<void> {
  try {
    const origin = await appOrigin();
    const link = `${origin}/${locale}/reset-password/${resetToken}`;
    const isAr = locale === "ar";
    await sendEmail({
      to,
      subject: isAr ? "تم إنشاء حسابك — AIJUR" : "Your AIJUR account was created",
      text: isAr
        ? `مرحبًا ${name}،\n\nأنشأنا لك حسابًا على AIJUR. اضغط على الرابط التالي لتعيين كلمة مرورك خلال ساعة واحدة:\n${link}`
        : `Hi ${name},\n\nAn AIJUR account was created for you. Use this link to set your password within the next hour:\n${link}`,
    });
  } catch (err) {
    console.error("[subscribers] failed to send invite email", err);
  }
}

export async function listPlatformSubscribers(params: SubscriberListParams) {
  const user = await requireUser();
  return listSubscribersCore(user, params);
}

export async function getPlatformSubscriberDetail(targetUserId: string) {
  const user = await requireUser();
  return getSubscriberDetailCore(user, targetUserId);
}

export async function createPlatformSubscriber(locale: Locale, input: CreateSubscriberInput): Promise<{ userId: string }> {
  const user = await requireUser();
  const { userId, resetToken } = await createSubscriberCore(user, input);
  await sendInviteEmail(locale, input.email.trim().toLowerCase(), input.name, resetToken);
  revalidateSubscribers();
  return { userId };
}

export async function updatePlatformSubscriber(targetUserId: string, input: UpdateSubscriberInput): Promise<void> {
  const user = await requireUser();
  await updateSubscriberCore(user, targetUserId, input);
  revalidateSubscribers();
}

export async function resendSubscriberInvite(locale: Locale, targetUserId: string, email: string, name: string): Promise<void> {
  const user = await requireUser();
  const { resetToken } = await resendInviteCore(user, targetUserId);
  await sendInviteEmail(locale, email, name, resetToken);
}

export async function signOutSubscriberSessions(targetUserId: string): Promise<void> {
  const user = await requireUser();
  await signOutAllSessionsCore(user, targetUserId);
}

export async function hidePlatformSubscriber(targetUserId: string, reason: string): Promise<void> {
  const user = await requireUser();
  await hideSubscriberCore(user, targetUserId, reason);
  revalidateSubscribers();
}

export async function updateSubscriptionPeriod(subscriptionId: string, input: UpdatePeriodInput) {
  const user = await requireUser();
  const result = await updateSubscriptionPeriodCore(user, subscriptionId, input);
  revalidateSubscribers();
  return result;
}

export async function changeSubscriptionPlan(subscriptionId: string, planId: string | null, reason?: string): Promise<void> {
  const user = await requireUser();
  await changePlanCore(user, subscriptionId, planId, reason);
  revalidateSubscribers();
}

export async function suspendSubscription(subscriptionId: string, reason: string): Promise<void> {
  const user = await requireUser();
  await suspendSubscriptionCore(user, subscriptionId, reason);
  revalidateSubscribers();
}

export async function reactivateSubscription(subscriptionId: string, reason?: string): Promise<void> {
  const user = await requireUser();
  await reactivateSubscriptionCore(user, subscriptionId, reason);
  revalidateSubscribers();
}

export async function cancelSubscription(subscriptionId: string, reason: string): Promise<void> {
  const user = await requireUser();
  await cancelSubscriptionCore(user, subscriptionId, reason);
  revalidateSubscribers();
}

export async function grantLifetimeAccess(subscriptionId: string, reason?: string): Promise<void> {
  const user = await requireUser();
  await grantLifetimeCore(user, subscriptionId, reason);
  revalidateSubscribers();
}

export async function suspendSubscriberAccount(targetUserId: string, reason: string): Promise<void> {
  const user = await requireUser();
  await suspendAccountCore(user, targetUserId, reason);
  revalidateSubscribers();
}

export async function reactivateSubscriberAccount(targetUserId: string): Promise<void> {
  const user = await requireUser();
  await reactivateAccountCore(user, targetUserId);
  revalidateSubscribers();
}

export async function addSubscriberNote(targetUserId: string, body: string): Promise<void> {
  const user = await requireUser();
  await addAdminNoteCore(user, targetUserId, body);
  revalidateSubscribers();
}

export async function bulkSubscriberAction(
  userIds: string[],
  action: "extend" | "suspend" | "reactivate" | "changePlan" | "tag",
  params: { amount?: number; unit?: "days" | "months" | "years"; planId?: string | null; reason?: string; tag?: string },
): Promise<BulkActionResult> {
  const user = await requireUser();
  const result = await bulkActionCore(user, userIds, action, params);
  revalidateSubscribers();
  return result;
}

export async function listPlatformAdmins() {
  const user = await requireUser();
  return listAdminsCore(user);
}

export async function setSubscriberPlatformRole(targetUserId: string, role: PlatformRole | null): Promise<void> {
  const user = await requireUser();
  await setPlatformRoleCore(user, targetUserId, role);
  revalidatePath("/[locale]/admin/admins", "page");
  revalidateSubscribers();
}

export async function listSubscriptionPlans() {
  const user = await requireUser();
  return listPlansCore(user);
}

export async function createSubscriptionPlan(input: PlanInput): Promise<string> {
  const user = await requireUser();
  const id = await createPlanCore(user, input);
  revalidatePath("/[locale]/admin/plans", "page");
  return id;
}

export async function updateSubscriptionPlan(planId: string, input: Partial<PlanInput> & { status?: "active" | "archived" }): Promise<void> {
  const user = await requireUser();
  await updatePlanCore(user, planId, input);
  revalidatePath("/[locale]/admin/plans", "page");
}

export async function getSubscribersDashboardKpis() {
  const user = await requireUser();
  return getDashboardKpisCore(user);
}

export async function exportSubscribersCsv(params: SubscriberListParams): Promise<string> {
  const user = await requireUser();
  return exportSubscribersCsvCore(user, params);
}

export async function listAdminActivityLog(params: { entityType?: string; page?: number; pageSize?: number }) {
  const user = await requireUser();
  return listAuditLogCore(user, params);
}

export async function getPlatformAdminSettings(): Promise<AdminSettingsShape> {
  const user = await requireUser();
  return getAdminSettingsCore(user);
}

export async function updatePlatformAdminSettings(patch: Partial<AdminSettingsShape>): Promise<AdminSettingsShape> {
  const user = await requireUser();
  const next = await updateAdminSettingsCore(user, patch);
  revalidatePath("/[locale]/admin/settings", "page");
  return next;
}
