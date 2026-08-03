import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

/**
 * A single libSQL client per process.
 *
 * `file:` URLs give a zero-setup local database — `npm run setup` and the app
 * runs. Pointing DATABASE_URL at a `libsql://` host (Turso, or self-hosted
 * sqld) moves the same schema and the same queries to a managed server without
 * a code change. The Postgres migration path is documented in
 * `docs/DATA_MODEL.md`; it is a dialect swap in `schema.ts`, not a rewrite.
 */

const url = process.env.DATABASE_URL ?? "file:./data/aijur.db";
const authToken = process.env.DATABASE_AUTH_TOKEN || undefined;

declare global {
  // eslint-disable-next-line no-var
  var __aijurDb: ReturnType<typeof buildDb> | undefined;
}

function buildDb() {
  const client = createClient({ url, authToken });
  return drizzle(client, { schema });
}

export const db = globalThis.__aijurDb ?? buildDb();

if (process.env.NODE_ENV !== "production") globalThis.__aijurDb = db;

export { schema };
export type Db = typeof db;
