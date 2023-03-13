const express = require("express");
const app = express();
let { people } = require("./data");

app.get("./api/people", (req, res) => {
  res.status(200).json({success: true})
})

app.listen(5005, () => {
  console.log("listening on port 5005");
});
