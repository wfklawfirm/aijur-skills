import { randomBytes, scrypt as scryptCb, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCb) as (
  password: string | Buffer,
  salt: string | Buffer,
  keylen: number,
  options: { N: number; r: number; p: number; maxmem: number },
) => Promise<Buffer>;

/**
 * scrypt from node:crypto — no native dependency to compile, and a memory-hard
 * KDF rather than a bare digest. Parameters are stored in the hash string so
 * they can be raised later without invalidating existing accounts.
 */
const N = 2 ** 15;
const r = 8;
const p = 1;
const KEYLEN = 64;
const MAXMEM = 128 * N * r * 2;

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const key = await scrypt(password.normalize("NFKC"), salt, KEYLEN, { N, r, p, maxmem: MAXMEM });
  return `scrypt$${N}$${r}$${p}$${salt.toString("base64")}$${key.toString("base64")}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const parts = stored.split("$");
  if (parts.length !== 6 || parts[0] !== "scrypt") return false;
  const [, nStr, rStr, pStr, saltB64, hashB64] = parts;
  const n = Number(nStr);
  const rr = Number(rStr);
  const pp = Number(pStr);
  if (!Number.isFinite(n) || !Number.isFinite(rr) || !Number.isFinite(pp)) return false;
  const salt = Buffer.from(saltB64 ?? "", "base64");
  const expected = Buffer.from(hashB64 ?? "", "base64");
  if (expected.length === 0) return false;
  const actual = await scrypt(password.normalize("NFKC"), salt, expected.length, {
    N: n,
    r: rr,
    p: pp,
    maxmem: 128 * n * rr * 2,
  });
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

/** Minimum bar, enforced server-side. The UI shows the same rules. */
export function passwordProblems(password: string): ("length" | "variety")[] {
  const problems: ("length" | "variety")[] = [];
  if (password.length < 10) problems.push("length");
  const classes = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].filter((re) => re.test(password));
  if (classes.length < 2) problems.push("variety");
  return problems;
}
