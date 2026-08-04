import type { ContentBundle } from "./types";
import { SOURCES } from "./sources/registry";
import { DOMAINS } from "./framework/domains";
import { SKILLS as CORE_SKILLS } from "./framework/skills";
import { NEGOTIATION_INFLUENCE_SKILLS } from "./framework/skills-negotiation-influence";
import { RUBRICS as CORE_RUBRICS } from "./framework/rubrics";
import { NEGOTIATION_INFLUENCE_RUBRICS } from "./framework/rubrics-negotiation-influence";
import { SCENARIOS as CORE_SCENARIOS } from "./scenarios";
import { NEGOTIATION_INFLUENCE_SCENARIOS } from "./scenarios-negotiation-influence";
import { PATHS } from "./paths";
import { DIAGNOSTICS } from "./diagnostics";

// Each domain's extra skills/rubrics/scenarios live in their own
// "-negotiation-influence"-style companion file rather than being spliced
// into the (already very large) framework/skills.ts, framework/rubrics.ts,
// and scenarios/index.ts — smaller diffs, and each domain's content stays
// independently reviewable. This is where they're combined into the single
// bundle the seed script (scripts/seed.ts) reads from.
export const SKILLS = [...CORE_SKILLS, ...NEGOTIATION_INFLUENCE_SKILLS];
export const RUBRICS = [...CORE_RUBRICS, ...NEGOTIATION_INFLUENCE_RUBRICS];
export const SCENARIOS = [...CORE_SCENARIOS, ...NEGOTIATION_INFLUENCE_SCENARIOS];

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
