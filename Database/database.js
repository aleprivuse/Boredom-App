import  Database  from "better-sqlite3";

const db = new Database("Database/data.db")

db.prepare(
    `CREATE TABLE IF NOT EXISTS Stuff(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    activity TEXT,
    category TEXT,
    duration INTEGER
    )`
).run()

