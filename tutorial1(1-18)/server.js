var http = require("http");
var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + "/readme.txt", "utf-8");
// var myWriteStream = fs.createWriteStream(__dirname + "/Writeme.txt");
// console.log(myWriteStream);

// Manual read and write stream.
// myReadStream.on("data", (chunk) => {
//   console.log("New Chunk Received!");
//   console.log(chunk);
//   Passing the data to Writeme.txt
//   myWriteStream.write(chunk);
// });

//Read and stream using pipes.
// myReadStream.pipe(myWriteStream);

var server = http.createServer((req, res) => {
  console.log("Request was made" + req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
  var myObj = {
    name: "Ryu",
    job: "Ninja",
    age: 29,
  };
  res.end(JSON.stringify(myObj));
  // var myWriteStream = fs.createWriteStream(__dirname + "/Writeme.txt");
  // myReadStream.pipe(res);
  // res.end("Hello there my bae");
});

server.listen(3000, "127.0.0.1");
console.log("Listening to port 3000");
