const express = require("express");
const app = express();

// req => middleware => res

app.get("/", (req, res) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(5005, () => {
  console.log("listening on port 5005");
});
