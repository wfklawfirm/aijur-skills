"use server";

import { db } from "@/lib/db";
import { analyticsEvents } from "@/lib/db/schema";
import { uid } from "@/lib/utils";

/**
 * The event names from the spec's analytics section. Kept as a closed union so
 * a typo in an event name fails typecheck instead of silently fragmenting a
 * funnel in the data.
 */
export type EventName =
  | "onboarding_started"
  | "onboarding_completed"
  | "diagnostic_completed"
  | "path_started"
  | "unit_started"
  | "unit_completed"
  | "activity_attempted"
  | "activity_passed"
  | "simulation_started"
  | "simulation_completed"
  | "voice_practice_completed"
  | "legal_english_review_completed"
  | "feedback_viewed"
  | "retry_started"
  | "mastery_changed"
  | "summary_saved"
  | "review_completed"
  | "weekly_goal_completed"
  | "subscription_started"
  | "assignment_completed";

export async function track(
  userId: string | null,
  organizationId: string | null,
  name: EventName,
  props?: Record<string, unknown>,
): Promise<void> {
  try {
    await db.insert(analyticsEvents).values({
      id: uid("evt"),
      userId,
      organizationId,
      name,
      props: props ?? null,
    });
  } catch {
    // Analytics must never break the product it is measuring.
  }
}
