"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/form";
import { Callout } from "@/components/ui/feedback";
import { formatDate } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { addSubscriberNote } from "@/lib/actions/subscribers";

export function NotesPanel({
  subscriberId,
  notes,
  locale,
}: {
  subscriberId: string;
  notes: Array<{ id: string; body: string; authorName: string; createdAt: number }>;
  locale: Locale;
}) {
  const { dict } = useI18n();
  const d = dict.admin.subscriberDetail;
  const router = useRouter();
  const [body, setBody] = React.useState("");
  const [pending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | null>(null);

  function handleAdd() {
    if (!body.trim()) return;
    setError(null);
    startTransition(async () => {
      try {
        await addSubscriberNote(subscriberId, body);
        setBody("");
        router.refresh();
      } catch {
        setError(dict.common.errorBody);
      }
    });
  }

  return (
    <div className="space-y-3">
      {error && <Callout tone="negative">{error}</Callout>}
      {notes.length === 0 ? (
        <p className="text-supporting">{d.noNotes}</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {notes.map((n) => (
            <li key={n.id} className="border-b border-[var(--border)] pb-2 last:border-0">
              <p dir="auto">{n.body}</p>
              <p className="text-supporting">
                {n.authorName} — {formatDate(n.createdAt, locale)}
              </p>
            </li>
          ))}
        </ul>
      )}
      <div className="space-y-2">
        <Textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder={d.addNoteLabel} />
        <Button size="sm" variant="secondary" loading={pending} onClick={handleAdd} disabled={!body.trim()}>
          {d.addNoteCta}
        </Button>
      </div>
    </div>
  );
}
