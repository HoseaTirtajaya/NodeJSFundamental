var events = require("events");
var util = require("util");

var Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("James");
var hiro = new Person("Hiro");
var ryan = new Person("Ryan");

var people = [james, hiro, ryan];

people.forEach((person) => {
  person.on("speak", (msg) => {
    console.log(person.name + " said: " + msg);
  });
});

// james.emit("speak", "Hey dude");
// hiro.emit("speak", "Lets play");
// ryan.emit("speak", "I love you");

//Reading and writing files.
var fs = require("fs");

// fs.readFile("./readme.txt", "utf-8", (err, data) => {
//   console.log(data);
//   fs.writeFile("Writeme.txt", data, () => {
//   });
// }); // fs.readFileSync(Synchronized method) fs.readFile(Asynchronous method)
// fs.writeFileSync("WriteMe.txt", readme);

// console.log(readme);

// console.log("test");

// fs.unlink("Writeme.txt", () => {});  DELETING DIRECTORY

// MAKING DIRECTORY
// fs.mkdir("stuff", () => {
//   fs.readFile("readme.txt", "utf-8", (err, data) => {
//     fs.writeFile("./stuff/Writeme.txt", data, () => {});
//   });
// });

//Deleting directory and file
fs.unlink("./stuff/Writeme.txt", () => {
  fs.rmdir("stuff", () => {});
});
