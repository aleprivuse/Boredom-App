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


//create activity not visible to the user for now
export function addActivity(activity, category, duration) {
    db.prepare(`
        INSERT INTO Stuff (activity, category, duration)
        VALUES (?, ?, ?)
    `).run(activity, category, duration);

}
//delete file 
export function Delete(){
    db.prepare("DELETE FROM Stuff").run();

    console.log("all good")
}


//add shows the activites
export function getActivities() {
    return db.prepare("SELECT * FROM Stuff").all();
}


export default db