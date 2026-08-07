import { Preferences } from "@capacitor/preferences";

/**
 * Device-local key/value storage for NON-SENSITIVE app state only --
 * push-notification token bookkeeping, sync flags. Deliberately NOT used
 * for anything session/auth-related: the real session lives in the
 * WebView's own httpOnly cookie jar (see `src/lib/auth/session.ts` and
 * `docs/MOBILE_APP_ARCHITECTURE.md` §2), unreadable by JavaScript on native
 * or web alike, which is a stronger guarantee than moving it into
 * JS-accessible storage would be. Never put a token, password, or any PII
 * through this module.
 */
export const DEVICE_STORAGE_KEYS = {
  pushToken: "push_token",
  pushTokenSynced: "push_token_synced",
} as const;

export type DeviceStorageKey = (typeof DEVICE_STORAGE_KEYS)[keyof typeof DEVICE_STORAGE_KEYS];

export async function getDeviceValue(key: DeviceStorageKey): Promise<string | null> {
  const { value } = await Preferences.get({ key });
  return value;
}

export async function setDeviceValue(key: DeviceStorageKey, value: string): Promise<void> {
  await Preferences.set({ key, value });
}

export async function removeDeviceValue(key: DeviceStorageKey): Promise<void> {
  await Preferences.remove({ key });
}

export async function clearDeviceState(): Promise<void> {
  await Promise.all(Object.values(DEVICE_STORAGE_KEYS).map((key) => Preferences.remove({ key })));
}
