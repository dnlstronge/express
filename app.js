const http = require("http");


// [1] - provide more info to the browser
// [2] - deal with the request

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type":"text/html"})
    res.write(
            "<h1>Homepage</h1><div><p>Here you'll find cotten candy and rides and all sorts of surprises</p></div>")
    res.end()
        })
   

server.listen(5001)
