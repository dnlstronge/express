const express = require("express");
const app = express();
let { people } = require("./data");

// static assets:

app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json (more middleware)
app.use(express.json());
// - reads data
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
// just because URLs the same doesn't mean the route is as the methods are diff
// - adds data
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please enter a valid name" });
  } else {
    res.status(201).json({ success: true, person: name, msg: "SUCCESS" });
  }
});
app.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res
      .status(201)
      .json({ success: true, data: [...people, { id: 4, name: name }] });
  } else {
    return res
      .status(401)
      .json({ succes: false, msg: "Error: please enter a name" });
  }
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide user credentials");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params; // id specified from browser
  const { name } = req.body; // body - what you want to change to
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    res
    .status(404)
    .json({success: false, msg: `id: ${id} does not exist`});
  }
  const newPeople = people.map((person) => {
    if(person.id === Number(id)) {
      person.name = name
    }
    return person;
  })
  res.status(200).json({person})
})

app.listen(5005, () => {
  console.log("listening on port 5005");
});
