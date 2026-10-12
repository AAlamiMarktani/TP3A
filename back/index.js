const express = require("express");
const app = express()

const port = 4000
 
app.get("/", (req, res) => {

app.listen(port, () => {
    console.log("Server tourne bien" + port)
})

