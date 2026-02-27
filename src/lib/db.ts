import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "counter.db");

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.exec(`
      CREATE TABLE IF NOT EXISTS counter (
        id INTEGER PRIMARY KEY CHECK (id = 1),
        count INTEGER NOT NULL DEFAULT 0
      );
      INSERT OR IGNORE INTO counter (id, count) VALUES (1, 0);
    `);
  }
  return db;
}

export function getCount(): number {
  const row = getDb().prepare("SELECT count FROM counter WHERE id = 1").get() as { count: number };
  return row.count;
}

export function incrementCount(): number {
  getDb().prepare("UPDATE counter SET count = count + 1 WHERE id = 1").run();
  return getCount();
}
