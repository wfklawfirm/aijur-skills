import { Capacitor } from "@capacitor/core";

/**
 * The single place that answers "are we running inside the native shell?".
 * Every other platform module and every component that needs to branch on
 * native-vs-web imports this instead of calling `Capacitor.*` directly --
 * keeps the native-app conversion brief's "no scattered if(iOS)/if(Android)"
 * rule (§24) actually enforceable by convention.
 */
export function isNativePlatform(): boolean {
  return Capacitor.isNativePlatform();
}

export function nativePlatformName(): "ios" | "android" | "web" {
  return Capacitor.getPlatform() as "ios" | "android" | "web";
}

export function isIOS(): boolean {
  return nativePlatformName() === "ios";
}

export function isAndroid(): boolean {
  return nativePlatformName() === "android";
}
