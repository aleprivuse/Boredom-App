import express from 'express';
import * as db from "./Database/database.js";

const app = express();
const port = 4000;

// json pharser
app.use(express.json())

//using my Frontend folder
app.use(express.static("frontend"))

//starting server
app.listen(port, () => {
    console.log("it works")
})


//get all data and send the to the frontend in json file 
app.get("/activities", (req, res) => {
    const activities = db.getActivities();

    res.json(activities);
});





