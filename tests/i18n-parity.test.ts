import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { ar } from "@/lib/i18n/dictionaries/ar";
import { en } from "@/lib/i18n/dictionaries/en";

/**
 * `en.ts` is typed against `Widen<typeof ar>`, so a missing or extra key is
 * already a compile error — `tsc --noEmit` is the primary guard here. This
 * test is the runtime backstop for what types can't catch: empty strings that
 * satisfy the type but leave a screen blank, and leaf values that don't
 * actually differ in shape (an array where a string was expected, etc).
 */

function leafPaths(obj: unknown, prefix = ""): string[] {
  if (typeof obj === "string") return [prefix];
  if (Array.isArray(obj)) {
    return obj.flatMap((v, i) => leafPaths(v, `${prefix}[${i}]`));
  }
  if (obj && typeof obj === "object") {
    return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) =>
      leafPaths(v, prefix ? `${prefix}.${k}` : k),
    );
  }
  return [prefix];
}

describe("i18n dictionary structural parity", () => {
  test("ar and en expose exactly the same set of leaf key paths", () => {
    const arPaths = new Set(leafPaths(ar));
    const enPaths = new Set(leafPaths(en));

    const missingFromEn = [...arPaths].filter((p) => !enPaths.has(p));
    const missingFromAr = [...enPaths].filter((p) => !arPaths.has(p));

    assert.deepEqual(missingFromEn, [], "every Arabic key must have an English counterpart");
    assert.deepEqual(missingFromAr, [], "every English key must have an Arabic counterpart (no orphans)");
  });

  test("no dictionary leaf is an empty or whitespace-only string", () => {
    function findBlanks(obj: unknown, prefix = ""): string[] {
      if (typeof obj === "string") return obj.trim().length === 0 ? [prefix] : [];
      if (Array.isArray(obj)) return obj.flatMap((v, i) => findBlanks(v, `${prefix}[${i}]`));
      if (obj && typeof obj === "object") {
        return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) =>
          findBlanks(v, prefix ? `${prefix}.${k}` : k),
        );
      }
      return [];
    }
    assert.deepEqual(findBlanks(ar), [], "ar.ts has no blank strings");
    assert.deepEqual(findBlanks(en), [], "en.ts has no blank strings");
  });

  test("the two dictionaries are not accidentally identical (a real translation exists)", () => {
    const arLeaves = leafPaths(ar).length;
    let identicalCount = 0;
    function walk(a: unknown, e: unknown) {
      if (typeof a === "string" && typeof e === "string") {
        if (a === e) identicalCount++;
        return;
      }
      if (Array.isArray(a) && Array.isArray(e)) {
        a.forEach((v, i) => walk(v, e[i]));
        return;
      }
      if (a && e && typeof a === "object" && typeof e === "object") {
        for (const k of Object.keys(a as Record<string, unknown>)) {
          walk((a as Record<string, unknown>)[k], (e as Record<string, unknown>)[k]);
        }
      }
    }
    walk(ar, en);
    // A handful of leaves are legitimately identical between ar/en (brand
    // names, numerals, ids used as display values) — but the two dictionaries
    // being *mostly* identical would mean English never got translated.
    assert.ok(
      identicalCount < arLeaves * 0.15,
      `${identicalCount}/${arLeaves} leaves are byte-identical between ar and en — translation looks incomplete`,
    );
  });
});
