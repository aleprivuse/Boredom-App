import express from 'express'

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