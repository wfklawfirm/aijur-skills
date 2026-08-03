"use client";

import * as React from "react";
import { useI18n } from "@/components/providers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/feedback";
import { decideIngestionSuggestion } from "@/lib/actions/admin";

type Decision = "accepted" | "edited" | "merged" | "rejected";

/**
 * Accept/Edit/Merge/Reject for one ingestion suggestion. No suggestion is
 * ever published automatically — every decision here just records a human
 * verdict; "accepted" still leaves an author to develop the draft.
 */
export function IngestionActions({ suggestionId }: { suggestionId: string }) {
  const { dict } = useI18n();
  const [decision, setDecision] = React.useState<Decision | null>(null);
  const [error, setError] = React.useState(false);
  const [pending, startTransition] = React.useTransition();

  function decide(next: Decision) {
    setError(false);
    startTransition(async () => {
      try {
        await decideIngestionSuggestion(suggestionId, next);
        setDecision(next);
      } catch {
        setError(true);
      }
    });
  }

  if (decision) {
    return <Badge tone="positive">{dict.admin[decisionLabelKey(decision)]}</Badge>;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button type="button" size="sm" variant="primary" disabled={pending} loading={pending} onClick={() => decide("accepted")}>
        {dict.admin.accept}
      </Button>
      <Button type="button" size="sm" variant="secondary" disabled={pending} onClick={() => decide("edited")}>
        {dict.admin.edit}
      </Button>
      <Button type="button" size="sm" variant="secondary" disabled={pending} onClick={() => decide("merged")}>
        {dict.admin.merge}
      </Button>
      <Button type="button" size="sm" variant="destructive" disabled={pending} onClick={() => decide("rejected")}>
        {dict.admin.reject}
      </Button>
      {error && <Callout tone="negative">{dict.common.errorBody}</Callout>}
    </div>
  );
}

function decisionLabelKey(decision: Decision): "accept" | "edit" | "merge" | "reject" {
  switch (decision) {
    case "accepted":
      return "accept";
    case "edited":
      return "edit";
    case "merged":
      return "merge";
    case "rejected":
      return "reject";
  }
}
