"use client";

import { useEffect } from "react";
import { useI18n } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { ErrorState } from "@/components/ui/feedback";

export default function LocaleError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { dict } = useI18n();

  useEffect(() => {
    // A real deployment ships this to an error-tracking sink; the console line
    // is the local-dev / self-hosted fallback so nothing is silently swallowed.
    console.error("[aijur:error-boundary]", error.digest ?? error.message, error);
  }, [error]);

  return (
    <main id="main" className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6">
      <div className="w-full max-w-sm">
        <ErrorState
          title={dict.errors.serverError}
          body={dict.errors.serverErrorBody}
          action={
            <Button variant="primary" onClick={reset}>
              {dict.common.retry}
            </Button>
          }
        />
      </div>
    </main>
  );
}
