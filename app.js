const express = require("express");
const { products } = require("./data")

const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>Home</h1><a href="/api/products">Products</a>`)
})

app.listen(5001, () => {
    console.log("Listening on port 5001")
})