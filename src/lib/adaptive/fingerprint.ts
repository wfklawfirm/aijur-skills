/**
 * Novelty / repetition detection for the adaptive content engine.
 *
 * Scope note (read this before touching thresholds): this is a **lexical and
 * structural** similarity proxy, not true embedding-based semantic
 * similarity. The product runs with zero AI provider keys by default (see
 * src/lib/ai/provider.ts's offline fallback), so a generation-time call to
 * an external embedding API can't be a hard dependency for a core safety
 * mechanism -- if that call fails or is unavailable, novelty checking would
 * silently stop working. MinHash over word-shingles gives an offline-
 * computable, deterministic, testable approximation of "how much does this
 * text overlap with that one" and structural-key exact-match catches the
 * "same situation, different names" case the spec calls out explicitly.
 * True embedding similarity is a documented Phase 2 addition (see
 * docs/ADAPTIVE_ENGINE_ARCHITECTURE.md) for when a provider key is
 * configured, layered *on top of* this, not replacing it.
 */

const FNV_OFFSET = 0x811c9dc5;
const FNV_PRIME = 0x01000193;

/** FNV-1a, 32-bit. Deterministic, dependency-free, good enough distribution
 * for content fingerprinting (not a cryptographic hash, not meant to be). */
function fnv1a(str: string, seed: number = FNV_OFFSET): number {
  let hash = seed >>> 0;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, FNV_PRIME) >>> 0;
  }
  return hash >>> 0;
}

/** Sorted `key=value` join, hashed -- two dimension combinations produce the
 * same structural key iff every dimension value matches, regardless of key
 * order. This is the "same experience, different wording" detector. */
export function structuralKey(dimensions: Record<string, string>): string {
  const parts = Object.keys(dimensions)
    .sort()
    .map((k) => `${k}=${dimensions[k]}`);
  return fnv1a(parts.join("|")).toString(16).padStart(8, "0");
}

/** Lowercase, strip Arabic tashkeel + Latin diacritics + punctuation,
 * collapse whitespace. Deliberately simple (regex, no NLP library) -- this
 * only needs to be good enough that paraphrases with the same words still
 * shingle the same way, not linguistically perfect. */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[ً-ٰٟ]/g, "") // Arabic tashkeel/diacritics
    .replace(/[̀-ͯ]/g, "") // Latin combining diacritics
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordShingles(normalized: string, k = 2): string[] {
  const words = normalized.split(" ").filter(Boolean);
  if (words.length < k) return words.length > 0 ? [words.join(" ")] : [];
  const shingles: string[] = [];
  for (let i = 0; i <= words.length - k; i++) {
    shingles.push(words.slice(i, i + k).join(" "));
  }
  return shingles;
}

const NUM_HASHES = 16;

/** A MinHash-lite signature: for `NUM_HASHES` differently-seeded hash
 * functions, the minimum hash over the shingle set. Two texts with signature
 * agreement on N of 16 positions have an estimated Jaccard similarity of
 * N/16 -- a real, if approximate, technique (not a placeholder). */
export function textFingerprint(text: string): number[] {
  const shingles = wordShingles(normalizeText(text));
  if (shingles.length === 0) return new Array(NUM_HASHES).fill(0);
  const signature: number[] = [];
  for (let h = 0; h < NUM_HASHES; h++) {
    let min = 0xffffffff;
    for (const shingle of shingles) {
      const v = fnv1a(shingle, FNV_OFFSET ^ (h * 2654435761));
      if (v < min) min = v;
    }
    signature.push(min);
  }
  return signature;
}

/** Estimated Jaccard similarity in [0, 1] from two MinHash signatures. */
export function estimatedSimilarity(sigA: number[], sigB: number[]): number {
  if (sigA.length !== sigB.length || sigA.length === 0) return 0;
  let matches = 0;
  for (let i = 0; i < sigA.length; i++) {
    if (sigA[i] === sigB[i]) matches++;
  }
  return matches / sigA.length;
}

export interface ExposureFingerprint {
  structuralKey: string;
  textFingerprint: number[];
}

/**
 * Novelty score in [0, 1] -- 1 means "nothing like this was recently shown",
 * 0 means "this is effectively a repeat". A structural-key exact match
 * (same skill + hook type + role + counterparty + channel + tone + goal
 * combination) is floored at 0.6 similarity even if the wording differs,
 * per the spec's explicit "structural repetition" category -- wording
 * variety alone doesn't make a repeated situation feel new.
 */
export function noveltyScore(candidate: ExposureFingerprint, recent: ExposureFingerprint[]): number {
  if (recent.length === 0) return 1;
  let maxSimilarity = 0;
  for (const item of recent) {
    let similarity = estimatedSimilarity(candidate.textFingerprint, item.textFingerprint);
    if (item.structuralKey === candidate.structuralKey) {
      similarity = Math.max(similarity, 0.6);
    }
    if (similarity > maxSimilarity) maxSimilarity = similarity;
  }
  return Math.max(0, 1 - maxSimilarity);
}

/** Below this, content is rejected/regenerated rather than shown -- the
 * spec's "approved novelty threshold" (§9). Tuned, not derived: 0.45 means
 * "no recent item shares more than ~55% of its shingle signature", a
 * deliberately conservative bar since false negatives here (letting a near-
 * repeat through) are worse than false positives (regenerating once more). */
export const NOVELTY_THRESHOLD = 0.45;
