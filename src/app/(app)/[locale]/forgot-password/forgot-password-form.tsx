"use client";

import { useActionState } from "react";
import Link from "next/link";
import { requestPasswordReset, type RequestResetState } from "@/lib/actions/password-reset";
import { useI18n } from "@/components/providers";
import { Field, Input } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/feedback";
import type { Locale } from "@/lib/i18n/config";

const initialState: RequestResetState = {};

export function ForgotPasswordForm({ locale }: { locale: Locale }) {
  const { dict } = useI18n();
  const [state, formAction, pending] = useActionState(requestPasswordReset, initialState);

  if (state.submitted) {
    return (
      <div className="space-y-5">
        <Callout tone="positive">{dict.auth.resetSubmitted}</Callout>
        <p className="text-center">
          <Link
            href={`/${locale}/sign-in`}
            className="font-semibold text-[var(--color-brand)] underline underline-offset-4"
          >
            {dict.auth.backToSignIn}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="locale" value={locale} />

      <Field label={dict.auth.email} required>
        {(p) => <Input type="email" name="email" autoComplete="email" required {...p} />}
      </Field>

      <Button type="submit" variant="primary" block loading={pending}>
        {dict.auth.requestResetCta}
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
