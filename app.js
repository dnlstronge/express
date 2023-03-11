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

app.get("/api/products/:productID", (req, res) => {
    // console.log(req)
    // console.log(req.params)
    const { productID } =  req.params
    const singleProduct = products.find((product) => product.id === Number(productID))
    res.send(singleProduct)
})

app.listen(5001, () => {
  console.log("Listening on port 5001");
});
