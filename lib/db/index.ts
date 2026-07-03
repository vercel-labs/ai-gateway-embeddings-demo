import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { env } from "@/lib/env.mjs";

export const db = drizzle(postgres(env.DATABASE_URL));

// Apply pending migrations once per instance so a fresh deploy works without a manual db:migrate
export function ensureMigrated() {
  return (migrationPromise ??= migrate(db, {
    migrationsFolder: "lib/db/migrations",
  }).catch((error) => {
    migrationPromise = null;
    throw error;
  }));
}

let migrationPromise: Promise<void> | null = null;
