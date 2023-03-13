const express = require("express");
const app = express();
let { people } = require("./data");


// static assets: 

app.use(express.static("./methods-public"))
// parse form data
app.use(express.urlencoded({extended: false}))


// - reads data
app.get("/api/people", (req, res) => {
  res.status(200).json({success: true, data: people})
})
// just because URLs the same doesn't mean the route is as the methods are diff
// - adds data
app.post("./api.people", (req, res) => {})

app.post("/login", (req, res) => {
  const { name } = req.body
  if(name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send("Please provide user credentials");
})

app.listen(5005, () => {
  console.log("listening on port 5005");
});
