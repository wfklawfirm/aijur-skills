"use client";

import * as React from "react";
import { useI18n } from "@/components/providers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/feedback";
import { decideEvaluationReview } from "@/lib/actions/admin";

type Decision = "upheld" | "overturned";

/**
 * Uphold/Overturn for one AI-graded evaluation queued for human review.
 * There is no dedicated "uphold/overturn" copy in the dictionary, so this
 * reuses Accept (keep the AI's score as-is) and Reject (the AI's score does
 * not stand) — the closest existing keys for the same two outcomes.
 */
export function EvaluationActions({ evaluationId }: { evaluationId: string }) {
  const { dict } = useI18n();
  const [decision, setDecision] = React.useState<Decision | null>(null);
  const [error, setError] = React.useState(false);
  const [pending, startTransition] = React.useTransition();

  function decide(next: Decision) {
    setError(false);
    startTransition(async () => {
      try {
        await decideEvaluationReview(evaluationId, next);
        setDecision(next);
      } catch {
        setError(true);
      }
    });
  }

  if (decision) {
    return <Badge tone="positive">{decision === "upheld" ? dict.admin.accept : dict.admin.reject}</Badge>;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button type="button" size="sm" variant="primary" disabled={pending} loading={pending} onClick={() => decide("upheld")}>
        {dict.admin.accept}
      </Button>
      <Button type="button" size="sm" variant="destructive" disabled={pending} onClick={() => decide("overturned")}>
        {dict.admin.reject}
      </Button>
      {error && <Callout tone="negative">{dict.common.errorBody}</Callout>}
    </div>
  );
}
