var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  console.log("Request was made " + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  } else if (req.url === "/api/ninjas") {
    var ninjas = [
      {
        name: "Hosea",
        age: 20,
        Occupation: "Software Engineer",
      },
      {
        name: "Tirtajaya",
        age: 20,
        Occupation: "Backend Developer",
      },
    ];
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});

server.listen(3000, "127.0.0.1");
console.log("Server is active and running");
