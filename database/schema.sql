-- Cloudflare D1 free database schema

CREATE TABLE IF NOT EXISTS users (
 id TEXT PRIMARY KEY,
 email TEXT UNIQUE NOT NULL,
 name TEXT,
 region TEXT,
 plan TEXT DEFAULT 'free',
 created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS opportunities (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 title TEXT NOT NULL,
 description TEXT,
 region TEXT,
 value TEXT,
 deadline TEXT
);

CREATE TABLE IF NOT EXISTS saved_opportunities (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 user_id TEXT NOT NULL,
 opportunity_id INTEGER NOT NULL,
 created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
