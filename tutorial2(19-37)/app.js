var express = require("express"); // What are we passing here is function module. So, we need to an object to access all the methods available

var app = express(); // Var app is the object that has access to express function.

var bodyParser = require("body-parser"); //Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs"); // Setting Embedded Javascript(EJS) as a templating engine(view)
app.use("/assets", express.static("assets")); // styling with external css(MASIH BUGGED DATA CSSNYA KELUAR, CSS GA KE APPLY [FIXED])

app.get("/", (req, res) => {
  //   res.send("this is the homepage");
  res.render("index");
});

app.get("/contact", (req, res) => {
  //   res.send("this is the contact page");
  console.log(req.query);
  res.render("contact", { qs: req.query });
});

app.post("/contact", urlencodedParser, (req, res) => {
  //   res.send("this is the contact page");
  console.log(req.body);
  res.render("contact-success", { data: req.body });
});

app.get("/profile/:name", (req, res) => {
  var data = {
    age: "29",
    job: "ninja",
    hobby: ["Eating", "Fighting", "Coding"],
  };
  //   res.send("You are viewing the profile of " + req.params.name);
  res.render("profile.ejs", {
    person: req.params.name,
    data: data,
  });
}); //id is a dynamic parameter that can be changed with database

app.listen(3000);
