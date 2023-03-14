const express = require("express");
const app = express();
const people = require("./Routes/people")


// static assets:

app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json (more middleware)
app.use(express.json());
// api/people routes
app.use("/api/people", people)



app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide user credentials");
});

// test in postman => delete functions 
app.listen(5005, () => {
  console.log("listening on port 5005");
});
