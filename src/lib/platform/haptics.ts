import { Haptics, ImpactStyle, NotificationType } from "@capacitor/haptics";
import { isNativePlatform } from "./capacitor";

/**
 * Best-effort only -- haptics are a polish detail, never something a flow
 * should depend on succeeding. Every call swallows its own errors.
 */
export async function hapticSuccess(): Promise<void> {
  if (!isNativePlatform()) return;
  try {
    await Haptics.notification({ type: NotificationType.Success });
  } catch {
    // ignore
  }
}

export async function hapticTap(): Promise<void> {
  if (!isNativePlatform()) return;
  try {
    await Haptics.impact({ style: ImpactStyle.Light });
  } catch {
    // ignore
  }
}
