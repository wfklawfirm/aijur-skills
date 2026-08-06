"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { exportSubscribersCsv } from "@/lib/actions/subscribers";
import type { SubscriberListParams } from "@/lib/actions/subscribers-core";

/**
 * CSV export has to be a client component: the server action returns the
 * CSV text (see `exportSubscribersCsvCore` — UTF-8 BOM-prefixed for correct
 * Arabic rendering in Excel), and turning that into a downloaded file is a
 * browser-only operation (`Blob` + a synthetic `<a download>` click).
 */
export function ExportCsvButton({
  params,
  label,
  exportingLabel,
}: {
  params: SubscriberListParams;
  label: string;
  exportingLabel: string;
}) {
  const [pending, startTransition] = React.useTransition();

  function handleClick() {
    startTransition(async () => {
      const csv = await exportSubscribersCsv(params);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
  }

  return (
    <Button type="button" variant="outline" size="sm" loading={pending} onClick={handleClick}>
      {pending ? exportingLabel : label}
    </Button>
  );
}
