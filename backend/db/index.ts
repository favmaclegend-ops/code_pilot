// SQLite DB setup and session storage
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDB() {
  return open({
    filename: './backend/db/codepilot.sqlite',
    driver: sqlite3.Database
  });
}

export async function logSession(filePath: string, event: string) {
  const db = await openDB();
  await db.run('CREATE TABLE IF NOT EXISTS sessions (id INTEGER PRIMARY KEY, file TEXT, event TEXT, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)');
  await db.run('INSERT INTO sessions (file, event) VALUES (?, ?)', [filePath, event]);
}

export async function getSessions() {
  const db = await openDB();
  return db.all('SELECT * FROM sessions ORDER BY timestamp DESC LIMIT 50');
}
