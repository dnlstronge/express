const express = require("express");
const app = express();

// req => middleware => res

const logger = () => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
};
// reference function after path, before req/res

app.get("/", logger, (req, res) => {
  logger();
  res.send("Home");
});

app.get("/about", (req, res) => {
  logger();
  res.send("About");
});

app.listen(5005, () => {
  console.log("listening on port 5005");
});
