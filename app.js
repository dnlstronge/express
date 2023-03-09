const app = require("express")();
//const app = express()


/*
 useful: 
    -app.get
    -app.post
    -app.put
    -app.delete
    -app.all
    -app.use
    -app.listen

 */

    app.listen(5001, () => {
        console.log("server is listening on port 5001");
    });