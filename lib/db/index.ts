import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

export const db = drizzle(postgres(process.env.DATABASE_URL ?? ""));

export function ensureMigrated() {
  if (!process.env.DATABASE_URL) {
    return Promise.reject(
      new Error(
        "DATABASE_URL is not set — connect a Postgres database (the Neon integration provides it).",
      ),
    );
  }
  return (migrationPromise ??= migrate(db, {
    migrationsFolder: "lib/db/migrations",
  }).catch((error) => {
    migrationPromise = null;
    throw error;
  }));
}

let migrationPromise: Promise<void> | null = null;
