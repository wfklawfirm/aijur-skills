"use client";

import * as React from "react";
import { useI18n } from "@/components/providers";
import { SectionTitle } from "@/components/layout/app-shell";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/feedback";
import { isNativePlatform } from "@/lib/platform/capacitor";
import { requestPushPermissionAndRegister } from "@/lib/platform/push";

/**
 * Native app conversion brief §تاسعاً: permission must be requested "في
 * الوقت المناسب بعد توضيح الفائدة" — this card IS that explanation, reached
 * by the learner opening Profile → Settings, never fired automatically on
 * launch. Renders nothing at all on the web build (`isNativePlatform()` is
 * false there) rather than showing a button that can't do anything —
 * brief §29's "ممنوع إنشاء أزرار لا تعمل".
 */
// `isNativePlatform()` differs between the server-rendered HTML (always
// "web" — no `window` there) and the real client environment, so it's read
// through `useSyncExternalStore` rather than `useState`+`useEffect`: this
// is the pattern React itself recommends for a client-only value that must
// stay consistent through hydration (no mismatch warning, no synchronous
// `setState` inside an effect, no throwaway first render).
const noopSubscribe = () => () => {};

export function NotificationSettings() {
  const { dict } = useI18n();
  const [status, setStatus] = React.useState<"idle" | "granted" | "denied" | "unsupported">("idle");
  const isNative = React.useSyncExternalStore(noopSubscribe, isNativePlatform, () => false);

  if (!isNative) return null;

  async function handleEnable() {
    const result = await requestPushPermissionAndRegister();
    setStatus(result);
  }

  return (
    <div>
      <SectionTitle>{dict.mobile.notificationsTitle}</SectionTitle>
      <Card>
        <CardBody className="space-y-3">
          <p className="text-supporting">{dict.mobile.notificationsBody}</p>
          {status === "granted" && <Callout tone="positive">{dict.mobile.notificationsEnabled}</Callout>}
          {status === "denied" && <Callout tone="negative">{dict.mobile.notificationsDenied}</Callout>}
          {status === "unsupported" && <Callout tone="info">{dict.mobile.notificationsUnsupported}</Callout>}
          {status !== "granted" && (
            <Button type="button" variant="secondary" onClick={handleEnable}>
              {dict.mobile.notificationsEnable}
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
