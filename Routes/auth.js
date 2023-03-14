const express = require("express");
const auth = express.Router();

auth.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide user credentials");
});

module.exports = auth;
