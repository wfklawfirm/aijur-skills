import type { ContentBundle } from "./types";
import { SOURCES } from "./sources/registry";
import { DOMAINS } from "./framework/domains";
import { SKILLS } from "./framework/skills";
import { RUBRICS } from "./framework/rubrics";
import { SCENARIOS } from "./scenarios";
import { PATHS } from "./paths";
import { DIAGNOSTICS } from "./diagnostics";

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
export { SOURCES, DOMAINS, SKILLS, RUBRICS, SCENARIOS, PATHS, DIAGNOSTICS };
