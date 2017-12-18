var express = require("express");
//https://www.npmjs.com/package/method-override
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
// var expressHB = require("express-handlebars")
var app = express();
var port = process.env.PORT || 8080;
// Set Handlebars.
var exphbs = require("express-handlebars");
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));



app.use("/", routes);
app.listen(port);
