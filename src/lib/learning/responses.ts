import { z } from "zod";

/**
 * The wire format of a learner's answer, per activity kind. Every API boundary
 * validates against these before anything is stored or scored — an activity
 * response is untrusted input like any other.
 */

export const choiceResponse = z.object({ selected: z.array(z.string()).max(12) });
export const orderResponse = z.object({ order: z.array(z.string()).max(24) });
export const assignmentResponse = z.object({ assignments: z.record(z.string(), z.string()) });
export const matchResponse = z.object({ pairs: z.record(z.string(), z.string()) });
export const blankResponse = z.object({ answers: z.record(z.string(), z.number().int().min(0).max(9)) });
export const textResponse = z.object({ text: z.string().min(1).max(8000) });
export const branchResponse = z.object({ path: z.array(z.string()).max(24) });
export const selfRateResponse = z.object({
  selfRating: z.number().int().min(1).max(3),
  attempted: z.boolean().default(true),
});

export const activityResponseSchema = z.union([
  choiceResponse,
  orderResponse,
  assignmentResponse,
  matchResponse,
  blankResponse,
  textResponse,
  branchResponse,
  selfRateResponse,
]);

export type ActivityResponse = z.infer<typeof activityResponseSchema>;

export type ChoiceResponse = z.infer<typeof choiceResponse>;
export type OrderResponse = z.infer<typeof orderResponse>;
export type AssignmentResponse = z.infer<typeof assignmentResponse>;
export type MatchResponse = z.infer<typeof matchResponse>;
export type BlankResponse = z.infer<typeof blankResponse>;
export type TextResponse = z.infer<typeof textResponse>;
export type BranchResponse = z.infer<typeof branchResponse>;
export type SelfRateResponse = z.infer<typeof selfRateResponse>;
