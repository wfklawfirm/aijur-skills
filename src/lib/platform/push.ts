import { PushNotifications, type Token, type PushNotificationSchema, type ActionPerformed } from "@capacitor/push-notifications";
import type { Locale } from "@/lib/i18n/config";
import { isNativePlatform, nativePlatformName } from "./capacitor";
import { DEVICE_STORAGE_KEYS, getDeviceValue, removeDeviceValue, setDeviceValue } from "./storage";
import { resolveDeepLinkUrl } from "./deep-links";
import { registerPushToken, unregisterPushToken } from "@/lib/actions/push";

/**
 * Registers the device listeners once (called from `NativeInit`). No-op on
 * web. Sends the resolved in-app path to `navigate` when a notification is
 * tapped -- reuses the exact same `resolveDeepLinkUrl()` the
 * `appUrlOpen`/Universal-Link handler uses (brief §20: one deep-link
 * resolver, not two).
 */
export function setupPushListeners(navigate: (href: string) => void, locale: Locale): void {
  if (!isNativePlatform()) return;

  void PushNotifications.addListener("registration", (token: Token) => {
    void setDeviceValue(DEVICE_STORAGE_KEYS.pushToken, token.value);
    const platform = nativePlatformName();
    if (platform === "ios" || platform === "android") {
      void registerPushToken({
        token: token.value,
        platform,
        locale,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      })
        .then(() => setDeviceValue(DEVICE_STORAGE_KEYS.pushTokenSynced, "true"))
        .catch(() => {
          // Best-effort -- a retry happens next time
          // `requestPushPermissionAndRegister()` runs (e.g. next app open).
        });
    }
  });

  void PushNotifications.addListener("registrationError", (err) => {
    console.warn("[push] registration failed", err);
  });

  // Foreground receipt -- deliberately no custom in-app banner here yet;
  // the OS-level notification already covers background delivery, and
  // brief §9 asks for no sensitive content in the notification body, which
  // this app doesn't send anyway (nothing sends real pushes yet -- see
  // docs/MOBILE_PUSH_NOTIFICATIONS.md).
  void PushNotifications.addListener("pushNotificationReceived", (_notification: PushNotificationSchema) => {
    // Intentionally empty for now.
  });

  void PushNotifications.addListener("pushNotificationActionPerformed", (action: ActionPerformed) => {
    const url = action.notification.data?.url as string | undefined;
    navigate(resolveDeepLinkUrl(url || "/", locale));
  });
}

/**
 * Only called from an explicit user action (Profile > Notifications >
 * Enable) -- brief §9: permission must be requested "at the right time
 * after explaining the benefit," never on launch. Returns a status the
 * caller renders directly, never silently swallowed.
 */
export async function requestPushPermissionAndRegister(): Promise<"granted" | "denied" | "unsupported"> {
  if (!isNativePlatform()) return "unsupported";

  try {
    const current = await PushNotifications.checkPermissions();
    let status = current.receive;
    if (status === "prompt" || status === "prompt-with-rationale") {
      const requested = await PushNotifications.requestPermissions();
      status = requested.receive;
    }
    if (status !== "granted") return "denied";
    await PushNotifications.register();
    return "granted";
  } catch {
    return "denied";
  }
}

/** Called on sign-out so a signed-out device stops being a valid push
 *  target for the account that just left it. */
export async function teardownPushOnSignOut(): Promise<void> {
  if (!isNativePlatform()) return;
  try {
    const token = await getDeviceValue(DEVICE_STORAGE_KEYS.pushToken);
    if (token) {
      await unregisterPushToken(token);
      await removeDeviceValue(DEVICE_STORAGE_KEYS.pushToken);
      await removeDeviceValue(DEVICE_STORAGE_KEYS.pushTokenSynced);
    }
  } catch {
    // Best-effort -- sign-out must never be blocked by this.
  }
}
