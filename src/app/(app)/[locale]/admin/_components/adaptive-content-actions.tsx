"use client";

import * as React from "react";
import { useI18n } from "@/components/providers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/feedback";
import { decideAdaptiveContent } from "@/lib/actions/adaptive-admin";

type Decision = "approved" | "rejected";

/** Approve/Reject for one adaptive-content item awaiting human review --
 * same shape as IngestionActions, since this is the same "AI-suggested
 * content, human decides" pattern applied to a different content type. */
export function AdaptiveContentActions({ contentId }: { contentId: string }) {
  const { dict } = useI18n();
  const [decision, setDecision] = React.useState<Decision | null>(null);
  const [error, setError] = React.useState(false);
  const [pending, startTransition] = React.useTransition();

  function decide(next: Decision) {
    setError(false);
    startTransition(async () => {
      try {
        await decideAdaptiveContent(contentId, next);
        setDecision(next);
      } catch {
        setError(true);
      }
    });
  }

  if (decision) {
    return <Badge tone={decision === "approved" ? "positive" : "negative"}>{decision === "approved" ? dict.admin.accept : dict.admin.reject}</Badge>;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button type="button" size="sm" variant="primary" disabled={pending} loading={pending} onClick={() => decide("approved")}>
        {dict.admin.accept}
      </Button>
      <Button type="button" size="sm" variant="destructive" disabled={pending} onClick={() => decide("rejected")}>
        {dict.admin.reject}
      </Button>
      {error && <Callout tone="negative">{dict.common.errorBody}</Callout>}
    </div>
  );
}
