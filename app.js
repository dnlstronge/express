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
    if(!singleProduct) {
        return res.status(404).send("Product does not exist")
    }
    res.json(singleProduct)
})

// more complex params example: 

app.get("/api/products/v1/query", (req, res) => {
   const {search, limit} = req.query
   let sortedProducts = [...products]

   if(search) {
    sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)
    })
   }
   if(limit) { 
    sortedProducts = sortedProducts.slice(0, Number(limit))
   }
   if(sortedProducts.length < 1) {
    
    return res.status(200).json({success: true, data: []})
   }
   return res.status(200).json(sortedProducts)
   
})

app.listen(5001, () => {
  console.log("Listening on port 5001");
});
