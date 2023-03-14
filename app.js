const express = require("express");
const app = express();
const people = require("./Routes/people")
const auth = require("./Routes/auth");


// static assets:

app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json (more middleware)
app.use(express.json());
// api/people routes
app.use("/api/people", people)
app.use("/login", auth);




// test in postman => delete functions 
app.listen(5005, () => {
  console.log("listening on port 5005");
});
