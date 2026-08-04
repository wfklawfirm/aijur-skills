import "server-only";
import { db } from "@/lib/db";
import { auditLog } from "@/lib/db/schema";
import { uid } from "@/lib/utils";
import type { SessionUser } from "./session";

/**
 * Audit logging for access-control denials — the `auditLog` table existed
 * in the schema since the foundation commit but nothing ever wrote to it
 * (`docs/SECURITY.md` §7, "Audit logging of permission denials: schema
 * exists, unused"). This is what wires it in, at the one place a denial is
 * unambiguously known: the moment `require_()`/`assertTenant()`/
 * `requireUser()` are about to throw `AuthError`.
 *
 * `requireUser()` is already `async` and every call site already awaits it,
 * so its call to this function is properly awaited too. `require_()` and
 * `assertTenant()` are synchronous and used at ~20+ call sites across every
 * action file — making them `async` would mean threading `await` through
 * all of them for a logging side-effect. They call this fire-and-forget
 * instead: the write races the response in the worst case, which is
 * acceptable for an audit trail (best-effort) but would not be acceptable
 * for anything that gates access itself — the actual `throw` in both
 * functions happens unconditionally, whether or not this write lands.
 */
export function logAccessDenial(
  user: SessionUser | null,
  code: "unauthenticated" | "forbidden",
  context: { permission?: string; organizationId?: string } = {},
): Promise<void> {
  return db
    .insert(auditLog)
    .values({
      id: uid("audit"),
      actorId: user?.id ?? null,
      organizationId: context.organizationId ?? user?.organization?.id ?? null,
      action: `auth.denied.${code}`,
      entityType: "auth",
      entityId: user?.id ?? "anonymous",
      meta: context.permission ? { permission: context.permission } : null,
    })
    .then(() => undefined)
    .catch((err: unknown) => {
      console.error("[audit] failed to log access denial", err);
    });
}
