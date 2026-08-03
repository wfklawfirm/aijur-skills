"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signIn, type AuthFormState } from "@/lib/actions/auth";
import { useI18n } from "@/components/providers";
import { Field, Input } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/feedback";
import type { Locale } from "@/lib/i18n/config";

const initialState: AuthFormState = {};

export function SignInForm({ locale }: { locale: Locale }) {
  const { dict } = useI18n();
  const [state, formAction, pending] = useActionState(signIn, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="locale" value={locale} />

      {state.error && (
        <Callout tone="negative" title={dict.common.error}>
          {dict.auth.invalid}
        </Callout>
      )}

      <Field label={dict.auth.email} required error={state.fieldErrors?.email}>
        {(p) => <Input type="email" name="email" autoComplete="email" required {...p} />}
      </Field>

      <Field label={dict.auth.password} required error={state.fieldErrors?.password}>
        {(p) => <Input type="password" name="password" autoComplete="current-password" required {...p} />}
      </Field>

      <Button type="submit" variant="primary" block loading={pending}>
        {dict.auth.signInCta}
      </Button>

      <p className="text-supporting text-center">
        {dict.auth.noAccount}{" "}
        <Link
          href={`/${locale}/sign-up`}
          className="font-semibold text-[var(--color-brand)] underline underline-offset-4"
        >
          {dict.auth.signUp}
        </Link>
      </p>
    </form>
  );
}
