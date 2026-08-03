/**
 * Seeds the content graph and a set of realistic demo accounts.
 *
 * Idempotent: every insert is an upsert keyed on the content id, so re-running
 * after editing a unit republishes that unit without wiping learner evidence.
 */
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

try {
  process.loadEnvFile(".env.local");
} catch {
  try {
    process.loadEnvFile(".env");
  } catch {
    // Defaults in db/index.ts cover local development.
  }
}

const url = process.env.DATABASE_URL ?? "file:./data/aijur.db";
if (url.startsWith("file:")) {
  const path = url.slice("file:".length);
  mkdirSync(dirname(path), { recursive: true });
}

const { db } = await import("../src/lib/db/index.js");
const s = await import("../src/lib/db/schema.js");
const { CONTENT } = await import("../content/index.js");
const { hashPassword } = await import("../src/lib/auth/password.js");
const { uid, DAY_MS } = await import("../src/lib/utils.js");

const now = Date.now();

function log(step: string, count: number) {
  console.log(`  ${step.padEnd(28)} ${String(count).padStart(5)}`);
}

console.log("\nAIJUR — seeding content\n");

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

await db
  .insert(s.sources)
  .values(
    CONTENT.sources.map((src) => ({
      id: src.id,
      title: src.title,
      author: src.author,
      year: src.year ?? null,
      language: src.language,
      publisher: src.publisher ?? null,
      kind: src.kind,
      usageRights: src.usageRights,
      analysisStatus: src.analysisStatus,
      reviewStatus: src.reviewStatus,
      domains: src.domains,
      sections: src.sections ?? null,
      notes: src.notes,
    })),
  )
  .onConflictDoNothing();
log("sources", CONTENT.sources.length);

await db
  .insert(s.domains)
  .values(CONTENT.domains.map((d) => ({ id: d.id, order: d.order, icon: d.icon, data: d })))
  .onConflictDoNothing();
log("domains", CONTENT.domains.length);

for (const skill of CONTENT.skills) {
  await db
    .insert(s.skills)
    .values({
      id: skill.id,
      domainId: skill.domainId,
      languageTrack: skill.languageTrack ?? false,
      confidence: skill.confidence,
      status: "published",
      data: skill,
    })
    .onConflictDoUpdate({
      target: s.skills.id,
      set: { data: skill, confidence: skill.confidence, updatedAt: now },
    });
}
log("skills", CONTENT.skills.length);

for (const rubric of CONTENT.rubrics) {
  await db
    .insert(s.rubrics)
    .values({ id: rubric.id, version: rubric.version, status: "published", data: rubric })
    .onConflictDoUpdate({ target: s.rubrics.id, set: { data: rubric, version: rubric.version } });
}
log("rubrics", CONTENT.rubrics.length);

for (const scenario of CONTENT.scenarios) {
  await db
    .insert(s.scenarios)
    .values({
      id: scenario.id,
      rubricId: scenario.rubricId,
      stage: scenario.stage,
      languageMode: scenario.languageMode,
      status: "published",
      version: scenario.contentVersion,
      data: scenario,
    })
    .onConflictDoUpdate({ target: s.scenarios.id, set: { data: scenario, updatedAt: now } });
}
log("scenarios", CONTENT.scenarios.length);

let unitCount = 0;
let activityCount = 0;
let termCount = 0;

for (const path of CONTENT.paths) {
  const { chapters, units, ...pathBase } = path;
  await db
    .insert(s.paths)
    .values({
      id: path.id,
      slug: path.slug,
      track: path.track,
      status: "published",
      pairedPathId: path.pairedPathId ?? null,
      data: pathBase,
    })
    .onConflictDoUpdate({ target: s.paths.id, set: { data: pathBase, updatedAt: now } });

  for (const chapter of chapters) {
    await db
      .insert(s.chapters)
      .values({ id: chapter.id, pathId: path.id, order: chapter.order, data: chapter })
      .onConflictDoUpdate({ target: s.chapters.id, set: { data: chapter } });
  }

  for (const unit of units) {
    const { activities, ...unitBase } = unit;
    await db
      .insert(s.units)
      .values({
        id: unit.id,
        pathId: path.id,
        chapterId: unit.chapterId,
        order: unit.order,
        primarySkillId: unit.primarySkillId,
        stage: unit.stage,
        targetLevel: unit.targetLevel,
        estimatedMinutes: unit.estimatedMinutes,
        status: "published",
        version: unit.contentVersion,
        data: unitBase,
      })
      .onConflictDoUpdate({ target: s.units.id, set: { data: unitBase, updatedAt: now } });
    unitCount++;

    for (const activity of activities) {
      const rubricId = "rubricId" in activity ? activity.rubricId : null;
      await db
        .insert(s.activities)
        .values({
          id: activity.id,
          unitId: unit.id,
          kind: activity.kind,
          skillId: activity.skillId,
          stage: activity.stage,
          rubricId: rubricId ?? null,
          status: "published",
          data: activity,
        })
        .onConflictDoUpdate({ target: s.activities.id, set: { data: activity } });
      activityCount++;
    }

    // The phrase bank on each Legal English summary card becomes reviewable
    // vocabulary — the same phrase the learner saw in context comes back later.
    for (const phrase of unit.summaryCard.phrases ?? []) {
      await db
        .insert(s.legalEnglishTerms)
        .values({
          id: uid("term"),
          term: phrase.en,
          register: phrase.register,
          meaningAr: phrase.ar,
          meaningEn: phrase.en,
          skillIds: [unit.primarySkillId],
          unitId: unit.id,
        })
        .onConflictDoNothing();
      termCount++;
    }
  }
}
log("paths", CONTENT.paths.length);
log("units", unitCount);
log("activities", activityCount);
log("legal english phrases", termCount);

for (const diagnostic of CONTENT.diagnostics) {
  await db
    .insert(s.diagnostics)
    .values({ id: diagnostic.id, status: "published", data: diagnostic })
    .onConflictDoUpdate({ target: s.diagnostics.id, set: { data: diagnostic } });
  for (const item of diagnostic.items) {
    await db
      .insert(s.activities)
      .values({
        id: item.activity.id,
        unitId: null,
        diagnosticId: diagnostic.id,
        kind: item.activity.kind,
        skillId: item.activity.skillId,
        stage: item.activity.stage,
        rubricId: "rubricId" in item.activity ? item.activity.rubricId : null,
        status: "published",
        data: item.activity,
      })
      .onConflictDoUpdate({ target: s.activities.id, set: { data: item.activity } });
  }
}
log("diagnostics", CONTENT.diagnostics.length);

// Content that is published must have passed every gate — record that history
// so the Studio's review queue reflects reality rather than starting empty.
const GATES = ["sme", "learning_design", "legal_english", "language", "accessibility", "qa"] as const;
for (const path of CONTENT.paths) {
  for (const unit of path.units) {
    for (const gate of GATES) {
      if (gate === "legal_english" && path.track !== "legal_english") continue;
      await db
        .insert(s.contentReviews)
        .values({
          id: `rev.${unit.id}.${gate}`,
          entityType: "unit",
          entityId: unit.id,
          gate,
          status: "approved",
          notes: "Seeded as approved for the demo build. Re-review before any production launch.",
          decidedAt: now,
        })
        .onConflictDoNothing();
    }
  }
}

await db
  .insert(s.featureFlags)
  .values([
    { key: "voice_simulation", enabled: true, description: "Browser speech input/output in simulations." },
    { key: "vision_activities", enabled: false, description: "Image-based office audit activities." },
    { key: "org_dashboard", enabled: true, description: "Organisation reporting surfaces." },
    { key: "certificates", enabled: false, description: "Certificate issuance on path completion." },
  ])
  .onConflictDoNothing();

// ---------------------------------------------------------------------------
// Demo accounts
// ---------------------------------------------------------------------------

const DEMO_PASSWORD = "AijurDemo2026!";
const passwordHash = await hashPassword(DEMO_PASSWORD);

const firmId = "org.demo-firm";
const universityId = "org.demo-university";

await db
  .insert(s.organizations)
  .values([
    {
      id: firmId,
      name: "مكتب الأصيل للمحاماة والاستشارات القانونية",
      slug: "al-aseel",
      kind: "law_firm",
      country: "LB",
      privacyPolicy: { managersSeeScores: true, managersSeeTranscripts: false, retentionDays: 730 },
    },
    {
      id: universityId,
      name: "كلية الحقوق — جامعة المشرق",
      slug: "mashreq-law",
      kind: "university",
      country: "JO",
      privacyPolicy: { managersSeeScores: true, managersSeeTranscripts: false, retentionDays: 1095 },
    },
  ])
  .onConflictDoNothing();

interface DemoUser {
  id: string;
  email: string;
  name: string;
  locale: "ar" | "en";
  systemRole: "learner" | "author" | "reviewer" | "admin";
  org?: { id: string; role: "owner" | "admin" | "manager" | "author" | "member" };
  profile: {
    country: string;
    careerStage: string;
    yearsExperience: number;
    goals: string[];
    englishSelfRating: number;
    weeklyMinutesGoal: number;
    practicePreference: "text" | "voice" | "both";
  };
  /** How far through the first path this learner is. */
  unitsDone: number;
}

const demoUsers: DemoUser[] = [
  {
    id: "user.nour",
    email: "nour@demo.aijur.ai",
    name: "نور الحاج",
    locale: "ar",
    systemRole: "learner",
    org: { id: universityId, role: "member" },
    profile: {
      country: "JO",
      careerStage: "student",
      yearsExperience: 0,
      goals: ["confidence", "english"],
      englishSelfRating: 2,
      weeklyMinutesGoal: 45,
      practicePreference: "text",
    },
    unitsDone: 2,
  },
  {
    id: "user.karim",
    email: "karim@demo.aijur.ai",
    name: "كريم عبد الله",
    locale: "ar",
    systemRole: "learner",
    org: { id: firmId, role: "member" },
    profile: {
      country: "LB",
      careerStage: "trainee",
      yearsExperience: 1,
      goals: ["confidence", "organised"],
      englishSelfRating: 3,
      weeklyMinutesGoal: 60,
      practicePreference: "both",
    },
    unitsDone: 4,
  },
  {
    id: "user.dana",
    email: "dana@demo.aijur.ai",
    name: "دانة الشمري",
    locale: "ar",
    systemRole: "learner",
    org: { id: firmId, role: "member" },
    profile: {
      country: "SA",
      careerStage: "junior",
      yearsExperience: 3,
      goals: ["negotiation", "english", "clients"],
      englishSelfRating: 4,
      weeklyMinutesGoal: 90,
      practicePreference: "voice",
    },
    unitsDone: 7,
  },
  {
    id: "user.samir",
    email: "samir@demo.aijur.ai",
    name: "سمير الخوري",
    locale: "ar",
    systemRole: "learner",
    org: { id: firmId, role: "manager" },
    profile: {
      country: "LB",
      careerStage: "manager",
      yearsExperience: 14,
      goals: ["leadership", "clients"],
      englishSelfRating: 4,
      weeklyMinutesGoal: 30,
      practicePreference: "text",
    },
    unitsDone: 1,
  },
  {
    id: "user.reem",
    email: "reem@demo.aijur.ai",
    name: "ريم قاسم",
    locale: "ar",
    systemRole: "reviewer",
    org: { id: firmId, role: "author" },
    profile: {
      country: "LB",
      careerStage: "experienced",
      yearsExperience: 9,
      goals: ["clients"],
      englishSelfRating: 5,
      weeklyMinutesGoal: 30,
      practicePreference: "text",
    },
    unitsDone: 0,
  },
  {
    id: "user.admin",
    email: "admin@demo.aijur.ai",
    name: "AIJUR Admin",
    locale: "en",
    systemRole: "admin",
    profile: {
      country: "LB",
      careerStage: "manager",
      yearsExperience: 12,
      goals: [],
      englishSelfRating: 5,
      weeklyMinutesGoal: 30,
      practicePreference: "text",
    },
    unitsDone: 0,
  },
];

const ccPath = CONTENT.paths.find((p) => p.track === "professional")!;
const orderedUnits = [...ccPath.units].sort((a, b) => a.order - b.order);

for (const u of demoUsers) {
  await db
    .insert(s.users)
    .values({
      id: u.id,
      email: u.email,
      passwordHash,
      name: u.name,
      locale: u.locale,
      systemRole: u.systemRole,
      emailVerifiedAt: now,
    })
    .onConflictDoNothing();

  await db
    .insert(s.profiles)
    .values({
      userId: u.id,
      country: u.profile.country,
      careerStage: u.profile.careerStage,
      yearsExperience: u.profile.yearsExperience,
      goals: u.profile.goals,
      focusSkillIds: [],
      englishSelfRating: u.profile.englishSelfRating,
      weeklyMinutesGoal: u.profile.weeklyMinutesGoal,
      practicePreference: u.profile.practicePreference,
      accessibility: {},
      onboardingCompletedAt: now - 20 * DAY_MS,
      diagnosticCompletedAt: u.unitsDone > 0 ? now - 20 * DAY_MS : null,
      aiProcessingConsentAt: now - 20 * DAY_MS,
    })
    .onConflictDoNothing();

  if (u.org) {
    await db
      .insert(s.memberships)
      .values({ id: `mem.${u.id}`, userId: u.id, organizationId: u.org.id, role: u.org.role })
      .onConflictDoNothing();
  }

  if (u.unitsDone === 0) continue;

  await db
    .insert(s.pathEnrollments)
    .values({ id: `enr.${u.id}`, userId: u.id, pathId: ccPath.id, source: "recommended" })
    .onConflictDoNothing();

  for (let i = 0; i < u.unitsDone && i < orderedUnits.length; i++) {
    const unit = orderedUnits[i]!;
    const daysAgo = (u.unitsDone - i) * 2;
    const at = now - daysAgo * DAY_MS;
    const scorable = unit.activities.filter((a) => a.kind !== "reflection");
    const maxScore = scorable.reduce((sum, a) => sum + (a.weight ?? 1), 0);
    // Later units score a little lower — the difficulty curve should be visible
    // in the demo data, not flattened into a wall of perfect scores.
    const ratio = 0.94 - i * 0.035;
    const score = Math.round(maxScore * ratio * 10) / 10;

    await db
      .insert(s.unitProgress)
      .values({
        id: `up.${u.id}.${unit.id}`,
        userId: u.id,
        unitId: unit.id,
        state: "completed",
        stepIndex: unit.steps.length - 1,
        score,
        maxScore,
        passed: true,
        startedAt: at,
        lastActiveAt: at,
        completedAt: at,
      })
      .onConflictDoNothing();

    await db
      .insert(s.masteryRecords)
      .values({
        id: `mas.${u.id}.${unit.primarySkillId}`,
        userId: u.id,
        skillId: unit.primarySkillId,
        level: ratio >= 0.85 ? unit.targetLevel : Math.max(1, unit.targetLevel - 1),
        confidence: Math.round(ratio * 90) / 100,
        evidenceCount: 2,
        rollingScore: ratio,
        consecutivePasses: 0,
        peakLevel: unit.targetLevel,
        lastAssessedAt: at,
      })
      .onConflictDoNothing();

    await db
      .insert(s.evidence)
      .values({
        id: uid("ev"),
        userId: u.id,
        skillId: unit.primarySkillId,
        kind: "attempt",
        refId: unit.id,
        level: unit.targetLevel,
        score: ratio,
        note: "Unit completed with a passing aggregate across its scorable activities.",
        createdAt: at,
      })
      .onConflictDoNothing();

    await db
      .insert(s.reviewSchedule)
      .values({
        id: `rev.${u.id}.${unit.primarySkillId}`,
        userId: u.id,
        skillId: unit.primarySkillId,
        unitId: unit.id,
        dueAt: at + (i < 2 ? 1 : 6) * DAY_MS,
        intervalDays: i < 2 ? 1 : 6,
        ease: 2.3,
        lapses: i === 1 ? 1 : 0,
        reason: i === 1 ? "error" : "spaced",
        lastReviewedAt: at,
      })
      .onConflictDoNothing();
  }

  // The unit after the last completed one is left in progress, so "resume where
  // you left off" has something real to resume.
  const nextUnit = orderedUnits[u.unitsDone];
  if (nextUnit) {
    await db
      .insert(s.unitProgress)
      .values({
        id: `up.${u.id}.${nextUnit.id}`,
        userId: u.id,
        unitId: nextUnit.id,
        state: "in_progress",
        stepIndex: 3,
        startedAt: now - DAY_MS,
        lastActiveAt: now - DAY_MS,
      })
      .onConflictDoNothing();
  }

  await db
    .insert(s.achievements)
    .values({
      id: `ach.${u.id}.first-unit`,
      userId: u.id,
      kind: "milestone",
      label: "first_unit_completed",
      earnedAt: now - u.unitsDone * 2 * DAY_MS,
    })
    .onConflictDoNothing();
}
log("demo users", demoUsers.length);
log("demo organisations", 2);

// An assignment so the organisation surfaces have real data.
await db
  .insert(s.assignments)
  .values({
    id: "assign.demo.1",
    organizationId: firmId,
    assignedById: "user.samir",
    targetType: "path",
    targetId: ccPath.id,
    userId: "user.karim",
    dueAt: now + 14 * DAY_MS,
  })
  .onConflictDoNothing();

console.log(`\nDone. Demo sign-in: nour@demo.aijur.ai / ${DEMO_PASSWORD}\n`);
process.exit(0);
