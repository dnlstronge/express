const http = require("http");


// [1] - provide more info to the browser
// [2] - deal with the request

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/") {
    res.writeHead(200, {"content-type":"text/html"})
    res.write(
            "<h1>Homepage</h1><div><p>Here you'll find cotten candy and rides and all sorts of surprises</p></div>")
    req.end()
        }
    if(url === "/about") {
    res.writeHead(200, {"content-type": "text/html"})
    res.write("<h1>About</h1>")
    res.end()
        }} 
   
    )

    
   

server.listen(5001)
