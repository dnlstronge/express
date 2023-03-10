const app = require("express")();
//const app = express()


    app.get("/", (req, res) => {
        res.status(200).send("Homepage")
    });
    app.get("/about", (req, res) => {
        res.status(200).send("About me")
    })

    app.all("*", (req, res) => {
        res.status(404).send("<h1>Error - resource not found</h1>")
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
