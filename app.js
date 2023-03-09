const http = require("http");
const { readFileSync } = require("fs");

// [1] - provide more info to the browser
// [2] - deal with the request

// get files:

const homePage = readFileSync("./navbar-app/index.html"); // required upon initialisation
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;

  //hompage

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // about
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About</h1>");
    res.end();
  } 
  // styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
  } 
  // logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  // 404 - resource not found
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Ooops - page not found</h1>");
    res.end();
  }
});

server.listen(5001);
