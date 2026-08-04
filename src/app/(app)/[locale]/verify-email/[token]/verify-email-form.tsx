"use client";

import { useActionState } from "react";
import Link from "next/link";
import { verifyEmail, type VerifyEmailState } from "@/lib/actions/email-verification";
import { useI18n } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/feedback";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/ar";

const initialState: VerifyEmailState = {};

function errorMessage(error: NonNullable<VerifyEmailState["error"]>, dict: Dictionary): string {
  switch (error) {
    case "invalid_token":
      return dict.auth.verifyInvalidToken;
    case "expired_token":
      return dict.auth.verifyExpiredToken;
    case "used_token":
      return dict.auth.verifyUsedToken;
  }
}

/**
 * Confirmation requires an explicit button click rather than verifying on
 * page load — a GET-only auto-verify is vulnerable to email-client link
 * scanners (Outlook Safe Links and similar) pre-fetching the URL and
 * burning the single-use token before the human ever sees it.
 */
export function VerifyEmailForm({ locale, token }: { locale: Locale; token: string }) {
  const { dict } = useI18n();
  const [state, formAction, pending] = useActionState(verifyEmail, initialState);

  if (state.done) {
    return (
      <div className="space-y-5">
        <Callout tone="positive">{dict.auth.verifySuccess}</Callout>
        <p className="text-center">
          <Link
            href={`/${locale}/home`}
            className="font-semibold text-[var(--color-brand)] underline underline-offset-4"
          >
            {dict.common.continue}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="token" value={token} />

      {state.error && <Callout tone="negative" title={dict.common.error}>{errorMessage(state.error, dict)}</Callout>}

      <Button type="submit" variant="primary" block loading={pending}>
        {dict.auth.verifyCta}
      </Button>

      <p className="text-supporting text-center">
        <Link
          href={`/${locale}/home`}
          className="font-semibold text-[var(--color-brand)] underline underline-offset-4"
        >
          {dict.common.cancel}
        </Link>
      </p>
    </form>
  );
}
