"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signUp, type AuthFormState } from "@/lib/actions/auth";
import { useI18n } from "@/components/providers";
import { Field, Input } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/feedback";
import type { Locale } from "@/lib/i18n/config";

const initialState: AuthFormState = {};

export function SignUpForm({ locale }: { locale: Locale }) {
  const { dict } = useI18n();
  const [state, formAction, pending] = useActionState(signUp, initialState);

  const errorMessage =
    state.error === "email_taken"
      ? dict.auth.emailTaken
      : state.error === "password_length"
        ? dict.auth.passwordLength
        : state.error === "password_variety"
          ? dict.auth.passwordVariety
          : state.error === "server_error"
            ? dict.errors.serverErrorBody
            : state.error === "rate_limited"
              ? dict.auth.rateLimited
              : state.error === "invalid"
                ? dict.auth.invalid
                : undefined;

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="locale" value={locale} />

      {errorMessage && (
        <Callout tone="negative" title={dict.common.error}>
          {errorMessage}
        </Callout>
      )}

      <Field label={dict.auth.name} required error={state.fieldErrors?.name}>
        {(p) => <Input type="text" name="name" autoComplete="name" required {...p} />}
      </Field>

      <Field label={dict.auth.email} required error={state.fieldErrors?.email}>
        {(p) => <Input type="email" name="email" autoComplete="email" required {...p} />}
      </Field>

      <Field
        label={dict.auth.password}
        required
        hint={`${dict.auth.passwordLength} ${dict.auth.passwordVariety}`}
        error={state.fieldErrors?.password}
      >
        {(p) => <Input type="password" name="password" autoComplete="new-password" required minLength={10} {...p} />}
      </Field>

      <Button type="submit" variant="primary" block loading={pending}>
        {dict.auth.signUpCta}
      </Button>

      <p className="text-supporting text-center">
        {dict.auth.haveAccount}{" "}
        <Link
          href={`/${locale}/sign-in`}
          className="font-semibold text-[var(--color-brand)] underline underline-offset-4"
        >
          {dict.auth.signIn}
        </Link>
      </p>
    </form>
  );
}
