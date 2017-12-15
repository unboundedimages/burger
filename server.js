var express = require("express");
//https://www.npmjs.com/package/method-override
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
// var expressHB = require("express-handlebars")
var app = express();
var port = 8080;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
