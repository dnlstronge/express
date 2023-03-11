const express = require("express");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Home</h1><a href="/api/products">Products</a>`);
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return {
      id,
      name,
      image,
    };
  });
  res.json(newProducts);
});

app.get("/api/products/1", (req, res) => {
    const singleProduct = products.find((product) => product.id === 1)
    res.send(singleProduct)
})

app.listen(5001, () => {
  console.log("Listening on port 5001");
});
