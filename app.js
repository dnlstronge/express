const express = require("express");
const app = express()
const path = require("path")


// [1] - adding to static assets
// [2] - SSR and template engine

// set up static and middleware
    app.use(express.static("./public"))

    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
    })

    app.all("*", (req, res) => {
        res.status(404).send("resource not found")
    })


    app.listen(5001, () => {
        console.log("server is listening on port 5001");
    });


/*
 useful: 
    -app.get
    -app.post
    -app.put
    -app.delete
    -app.all (works with user requests above)
    -app.use (resp for middleware)
    -app.listen

 */
