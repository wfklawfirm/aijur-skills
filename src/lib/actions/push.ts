"use server";

import { requireUser } from "@/lib/auth/session";
import {
  listPushTokensForUserCore,
  registerPushTokenCore,
  unregisterPushTokenCore,
  type RegisterPushTokenInput,
} from "@/lib/actions/push-core";

export async function registerPushToken(input: RegisterPushTokenInput): Promise<void> {
  const user = await requireUser();
  await registerPushTokenCore(user, input);
}

export async function unregisterPushToken(token: string): Promise<void> {
  await unregisterPushTokenCore(token);
}

export async function listMyPushTokens() {
  const user = await requireUser();
  return listPushTokensForUserCore(user);
}
