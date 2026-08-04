"use client";

import { useActionState } from "react";
import Link from "next/link";
import { resetPassword, type ResetPasswordState } from "@/lib/actions/password-reset";
import { useI18n } from "@/components/providers";
import { Field, Input } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/feedback";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/ar";

const initialState: ResetPasswordState = {};

function errorMessage(error: NonNullable<ResetPasswordState["error"]>, dict: Dictionary): string {
  switch (error) {
    case "invalid_token":
      return dict.auth.resetInvalidToken;
    case "expired_token":
      return dict.auth.resetExpiredToken;
    case "used_token":
      return dict.auth.resetUsedToken;
    case "password_length":
      return dict.auth.passwordLength;
    case "password_variety":
      return dict.auth.passwordVariety;
  }
}

export function ResetPasswordForm({ locale, token }: { locale: Locale; token: string }) {
  const { dict } = useI18n();
  const [state, formAction, pending] = useActionState(resetPassword, initialState);

  if (state.done) {
    return (
      <div className="space-y-5">
        <Callout tone="positive">{dict.auth.resetSuccess}</Callout>
        <p className="text-center">
          <Link
            href={`/${locale}/sign-in`}
            className="font-semibold text-[var(--color-brand)] underline underline-offset-4"
          >
            {dict.auth.signIn}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="token" value={token} />

      {state.error && <Callout tone="negative" title={dict.common.error}>{errorMessage(state.error, dict)}</Callout>}

      <Field label={dict.auth.newPassword} required hint={dict.auth.passwordVariety}>
        {(p) => <Input type="password" name="password" autoComplete="new-password" required {...p} />}
      </Field>

      <Button type="submit" variant="primary" block loading={pending}>
        {dict.auth.resetCta}
      </Button>

      <p className="text-supporting text-center">
        <Link
          href={`/${locale}/sign-in`}
          className="font-semibold text-[var(--color-brand)] underline underline-offset-4"
        >
          {dict.auth.backToSignIn}
        </Link>
      </p>
    </form>
  );
}
