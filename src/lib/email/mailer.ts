import "server-only";

/**
 * Minimal transactional-email abstraction, shaped after the AI provider
 * chain (`src/lib/ai/provider.ts`): pick a provider from env, and always
 * have a zero-config fallback so the surrounding flow (password reset,
 * eventually email verification) is fully runnable with no external
 * account.
 *
 * Unlike the AI layer, there is no "offline but equally good" option here —
 * `console` really does just log the message instead of delivering it. That
 * is a deliberate scope cut, not an oversight: standing up and testing a
 * real transactional-email account (Resend/SES/Postmark/SMTP) isn't
 * something this session can verify end-to-end without live credentials,
 * and shipping an unverified integration would be worse than shipping a
 * clearly-labelled stub. `sendViaResend()` below is a real, correctly-shaped
 * implementation — set `EMAIL_PROVIDER=resend` and `RESEND_API_KEY` to use
 * it — but it has not been exercised against the live Resend API in this
 * environment. This limitation is called out in docs/SECURITY.md.
 */

export interface EmailMessage {
  to: string;
  subject: string;
  text: string;
}

export type EmailProviderName = "console" | "resend";

function sendViaConsole(msg: EmailMessage): void {
  // This *is* the delivery mechanism for the console provider — see the
  // module doc comment for why there's no default real-provider fallback.
  console.log(`[mailer:console] to=${msg.to} subject=${JSON.stringify(msg.subject)}\n${msg.text}`);
}

async function sendViaResend(msg: EmailMessage): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;
  const from = process.env.EMAIL_FROM ?? "AIJUR <no-reply@aijur.app>";
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [msg.to], subject: msg.subject, text: msg.text }),
    });
    return res.ok;
  } catch (err) {
    console.error("[mailer:resend] send failed", err);
    return false;
  }
}

/**
 * Best-effort, never throws. A send failure must not surface which emails
 * are registered accounts, so callers (password reset) treat this the same
 * way regardless of outcome — see the generic response in
 * `requestPasswordReset()`.
 */
export async function sendEmail(msg: EmailMessage): Promise<void> {
  const provider = (process.env.EMAIL_PROVIDER as EmailProviderName | undefined) ?? "console";
  if (provider === "resend") {
    const ok = await sendViaResend(msg);
    if (ok) return;
    // Fall through to console so the link is still recoverable in server
    // logs rather than silently vanishing on a misconfigured provider.
  }
  sendViaConsole(msg);
}
