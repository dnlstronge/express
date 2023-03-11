const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json()
})

app.listen(5001, () => {
    console.log("Listening on port 5001")
})