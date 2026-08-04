"use server";

import { requireUser } from "@/lib/auth/session";
import {
  decideAdaptiveContentCore,
  getAdaptiveContentStatsCore,
  listAdaptiveContentReviewQueueCore,
} from "./adaptive-admin-core";

// Note: types are NOT re-exported from here -- a "use server" file's exports
// are all rewritten into RPC proxy references at build time, which fails for
// type-only exports (see org.ts for the same note). Consumers import
// `AdaptiveContentStats` straight from `./adaptive-admin-core` instead.

export async function getAdaptiveContentStats() {
  const user = await requireUser();
  return getAdaptiveContentStatsCore(user);
}

export async function listAdaptiveContentReviewQueue(limit = 25) {
  const user = await requireUser();
  return listAdaptiveContentReviewQueueCore(user, limit);
}

export async function decideAdaptiveContent(id: string, decision: "approved" | "rejected", note?: string): Promise<void> {
  const user = await requireUser();
  await decideAdaptiveContentCore(user, id, decision, note);
}
