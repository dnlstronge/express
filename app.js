const express = require("express");
const app = express();
const logger = require("./logger")
const authorize = require("./authorize")


// demo using additional middleware functions
// to use multiple place in array in .use()


app.use([logger, authorize]) // note: executed in order of array

app.get("/", (req, res) => {
  res.send("Home");

});

app.get("/about", (req, res, next) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");

});

app.get("/api/items", (req, res, next) => {
  console.log(req.user)
  res.send("Items");
});



app.listen(5005, () => {
  console.log("listening on port 5005");
});


// notes: 

// req => middleware => res
// applies to all => invokes for any route but order matters here!
// this is why you would normally see .use at the top
// a path may also be sepcified in .use()
// in this case as "/api" is specified, it will apply to both products and items
// the path = base, if omitted applies to all