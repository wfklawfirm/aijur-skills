import "server-only";
import { cache } from "react";
import { and, asc, eq, inArray } from "drizzle-orm";
import type {
  Activity,
  ChapterDef,
  DiagnosticDef,
  DomainDef,
  PathDef,
  RubricDef,
  ScenarioDef,
  SkillDef,
  UnitDef,
} from "@content/types";
import { db } from "@/lib/db";
import {
  activities as activitiesTable,
  chapters as chaptersTable,
  diagnostics as diagnosticsTable,
  domains as domainsTable,
  paths as pathsTable,
  rubrics as rubricsTable,
  scenarios as scenariosTable,
  skills as skillsTable,
  units as unitsTable,
} from "@/lib/db/schema";

/**
 * Content is read from the database, not imported from `/content`.
 *
 * That is the whole point of Content Studio: unpublishing a unit has to remove
 * it from the app without a deploy. The files under `/content` are the *seed*
 * and the authoring source of truth; the database is what the runtime serves.
 *
 * `cache()` dedupes within a single request. Content changes rarely and is
 * small, so this is enough — no cross-request cache to invalidate on publish.
 */

const PUBLISHED = "published" as const;

export const getDomains = cache(async (): Promise<DomainDef[]> => {
  const rows = await db.select().from(domainsTable).orderBy(asc(domainsTable.order));
  return rows.map((r) => r.data as DomainDef);
});

export const getSkills = cache(async (): Promise<SkillDef[]> => {
  const rows = await db.select().from(skillsTable).where(eq(skillsTable.status, PUBLISHED));
  return rows.map((r) => r.data as SkillDef);
});

export const getSkillMap = cache(async (): Promise<Map<string, SkillDef>> => {
  const skills = await getSkills();
  return new Map(skills.map((s) => [s.id, s]));
});

export const getSkill = cache(async (id: string): Promise<SkillDef | null> => {
  const rows = await db.select().from(skillsTable).where(eq(skillsTable.id, id)).limit(1);
  return (rows[0]?.data as SkillDef | undefined) ?? null;
});

export const getRubric = cache(async (id: string): Promise<RubricDef | null> => {
  const rows = await db.select().from(rubricsTable).where(eq(rubricsTable.id, id)).limit(1);
  return (rows[0]?.data as RubricDef | undefined) ?? null;
});

export const getScenario = cache(async (id: string): Promise<ScenarioDef | null> => {
  const rows = await db
    .select()
    .from(scenariosTable)
    .where(and(eq(scenariosTable.id, id), eq(scenariosTable.status, PUBLISHED)))
    .limit(1);
  return (rows[0]?.data as ScenarioDef | undefined) ?? null;
});

export const getPaths = cache(async (): Promise<PathDef[]> => {
  const rows = await db.select().from(pathsTable).where(eq(pathsTable.status, PUBLISHED));
  const ids = rows.map((r) => r.id);
  if (ids.length === 0) return [];

  const [chapterRows, unitRows] = await Promise.all([
    db.select().from(chaptersTable).where(inArray(chaptersTable.pathId, ids)).orderBy(asc(chaptersTable.order)),
    db
      .select()
      .from(unitsTable)
      .where(and(inArray(unitsTable.pathId, ids), eq(unitsTable.status, PUBLISHED)))
      .orderBy(asc(unitsTable.order)),
  ]);

  return rows.map((row) => {
    const base = row.data as Omit<PathDef, "chapters" | "units">;
    return {
      ...base,
      chapters: chapterRows.filter((c) => c.pathId === row.id).map((c) => c.data as ChapterDef),
      // Unit *steps* are needed for the path view (to show length); activities
      // are not, so they stay out of this query.
      units: unitRows
        .filter((u) => u.pathId === row.id)
        .map((u) => ({ ...(u.data as Omit<UnitDef, "activities">), activities: [] as Activity[] })),
    };
  });
});

export const getPathBySlug = cache(async (slug: string): Promise<PathDef | null> => {
  const paths = await getPaths();
  return paths.find((p) => p.slug === slug) ?? null;
});

export const getPathById = cache(async (id: string): Promise<PathDef | null> => {
  const paths = await getPaths();
  return paths.find((p) => p.id === id) ?? null;
});

/** The full unit, activities included — used only by the player. */
export const getUnit = cache(async (id: string): Promise<UnitDef | null> => {
  const rows = await db
    .select()
    .from(unitsTable)
    .where(and(eq(unitsTable.id, id), eq(unitsTable.status, PUBLISHED)))
    .limit(1);
  const row = rows[0];
  if (!row) return null;

  const acts = await db
    .select()
    .from(activitiesTable)
    .where(and(eq(activitiesTable.unitId, id), eq(activitiesTable.status, PUBLISHED)));

  return {
    ...(row.data as Omit<UnitDef, "activities">),
    activities: acts.map((a) => a.data as Activity),
  };
});

export const getActivity = cache(async (id: string): Promise<Activity | null> => {
  const rows = await db.select().from(activitiesTable).where(eq(activitiesTable.id, id)).limit(1);
  return (rows[0]?.data as Activity | undefined) ?? null;
});

export const getDiagnostic = cache(async (id: string): Promise<DiagnosticDef | null> => {
  const rows = await db.select().from(diagnosticsTable).where(eq(diagnosticsTable.id, id)).limit(1);
  return (rows[0]?.data as DiagnosticDef | undefined) ?? null;
});

/** Prerequisite graph, keyed by skill — used by the unlock rules. */
export const getPrerequisiteMap = cache(async (): Promise<Map<string, string[]>> => {
  const skills = await getSkills();
  return new Map(skills.map((s) => [s.id, s.prerequisiteSkillIds ?? []]));
});

export const DEFAULT_DIAGNOSTIC_ID = "diag.placement.v1";
