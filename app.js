const express = require("express");
const app = express();
const logger = require("./logger")

// req => middleware => res


app.get("/", (req, res) => {
  res.send("Home");

});

app.get("/about", (req, res, next) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Home");

});

app.get("/api/items", (req, res, next) => {
  res.send("About");
});



app.listen(5005, () => {
  console.log("listening on port 5005");
});
