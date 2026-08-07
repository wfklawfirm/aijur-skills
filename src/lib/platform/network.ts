import { Network } from "@capacitor/network";

/**
 * Real device network status on native (Wi-Fi/cellular/none), falling back
 * to `navigator.onLine` semantics on web via the same plugin (Capacitor's
 * web implementation of `@capacitor/network` wraps the browser APIs).
 * `src/components/providers.tsx`'s `ConnectivityProvider` is the one
 * consumer -- everything else reads connectivity from React context, never
 * `navigator.onLine` directly.
 */
export function watchNetworkStatus(onChange: (online: boolean) => void): () => void {
  let removeListener: (() => void) | undefined;
  let cancelled = false;

  void Network.getStatus().then((status) => {
    if (!cancelled) onChange(status.connected);
  });

  void Network.addListener("networkStatusChange", (status) => {
    onChange(status.connected);
  }).then((handle) => {
    if (cancelled) {
      void handle.remove();
    } else {
      removeListener = () => void handle.remove();
    }
  });

  return () => {
    cancelled = true;
    removeListener?.();
  };
}
