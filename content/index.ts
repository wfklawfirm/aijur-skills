import type { ContentBundle } from "./types";
import { SOURCES } from "./sources/registry";
import { DOMAINS } from "./framework/domains";
import { SKILLS as CORE_SKILLS } from "./framework/skills";
import { NEGOTIATION_INFLUENCE_SKILLS } from "./framework/skills-negotiation-influence";
import { SELF_MANAGEMENT_SKILLS } from "./framework/skills-self-management";
import { TEAMWORK_LEADERSHIP_SKILLS } from "./framework/skills-teamwork-leadership";
import { BUSINESS_DEVELOPMENT_SKILLS } from "./framework/skills-business-development";
import { FIRM_OPERATIONS_SKILLS } from "./framework/skills-firm-operations";
import { RUBRICS as CORE_RUBRICS } from "./framework/rubrics";
import { NEGOTIATION_INFLUENCE_RUBRICS } from "./framework/rubrics-negotiation-influence";
import { SELF_MANAGEMENT_RUBRICS } from "./framework/rubrics-self-management";
import { TEAMWORK_LEADERSHIP_RUBRICS } from "./framework/rubrics-teamwork-leadership";
import { BUSINESS_DEVELOPMENT_RUBRICS } from "./framework/rubrics-business-development";
import { FIRM_OPERATIONS_RUBRICS } from "./framework/rubrics-firm-operations";
import { SCENARIOS as CORE_SCENARIOS } from "./scenarios";
import { NEGOTIATION_INFLUENCE_SCENARIOS } from "./scenarios-negotiation-influence";
import { SELF_MANAGEMENT_SCENARIOS } from "./scenarios-self-management";
import { TEAMWORK_LEADERSHIP_SCENARIOS } from "./scenarios-teamwork-leadership";
import { BUSINESS_DEVELOPMENT_SCENARIOS } from "./scenarios-business-development";
import { FIRM_OPERATIONS_SCENARIOS } from "./scenarios-firm-operations";
import { PATHS } from "./paths";
import { DIAGNOSTICS } from "./diagnostics";

// Each domain's extra skills/rubrics/scenarios live in their own
// "-negotiation-influence"-style companion file rather than being spliced
// into the (already very large) framework/skills.ts, framework/rubrics.ts,
// and scenarios/index.ts — smaller diffs, and each domain's content stays
// independently reviewable. This is where they're combined into the single
// bundle the seed script (scripts/seed.ts) reads from.
export const SKILLS = [
  ...CORE_SKILLS,
  ...NEGOTIATION_INFLUENCE_SKILLS,
  ...SELF_MANAGEMENT_SKILLS,
  ...TEAMWORK_LEADERSHIP_SKILLS,
  ...BUSINESS_DEVELOPMENT_SKILLS,
  ...FIRM_OPERATIONS_SKILLS,
];
export const RUBRICS = [
  ...CORE_RUBRICS,
  ...NEGOTIATION_INFLUENCE_RUBRICS,
  ...SELF_MANAGEMENT_RUBRICS,
  ...TEAMWORK_LEADERSHIP_RUBRICS,
  ...BUSINESS_DEVELOPMENT_RUBRICS,
  ...FIRM_OPERATIONS_RUBRICS,
];
export const SCENARIOS = [
  ...CORE_SCENARIOS,
  ...NEGOTIATION_INFLUENCE_SCENARIOS,
  ...SELF_MANAGEMENT_SCENARIOS,
  ...TEAMWORK_LEADERSHIP_SCENARIOS,
  ...BUSINESS_DEVELOPMENT_SCENARIOS,
  ...FIRM_OPERATIONS_SCENARIOS,
];

export const CONTENT: ContentBundle = {
  sources: SOURCES,
  domains: DOMAINS,
  skills: SKILLS,
  rubrics: RUBRICS,
  scenarios: SCENARIOS,
  paths: PATHS,
  diagnostics: DIAGNOSTICS,
};

export * from "./types";
export { SOURCES, DOMAINS, PATHS, DIAGNOSTICS };
