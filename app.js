const express = require("express");
const app = express();

// req => middleware => res

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/about", (req, res) => {
    res.send("About")
})

app.listen(5005, () => {
  console.log("listening on port 5005");
});
