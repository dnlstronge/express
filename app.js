const express = require("express");
const app = express();

// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  res.send("testing 1..2....3") // terminate cycle or use next
};
// reference function after path, before req/res
// express passes req/res objects into middleware function but also needs "next" (above)

app.get("/", logger, (req, res) => {
  logger();
  res.send("Home");

});

app.get("/about", (req, res, next) => {
  logger();
  res.send("About");
});

app.listen(5005, () => {
  console.log("listening on port 5005");
});
