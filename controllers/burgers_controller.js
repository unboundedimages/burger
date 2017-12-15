//importing express and burger.js
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//create the 'router' for the app and export the 'router' at the end of the file.
// this portion goes out and listens for requests and retrieves the data
//there may be a possible ayshncronys issue with this get****



///had to add the router.get above to stop throwing a type error. asynch issue was confirmed
//it also did not like burgere.All and changed it to burger.selectAll on line 16
router.get("/index", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
//this portion creates. Post = create
//
router.post("burger/insertOne", function(req, res) {
        burger.insertOne(["burger_name", "devoured"], [req.body.name, false],
            function() {
                res.direct("/index");
            }
        );

    }

);
router.put("/burger/updateOne/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("under what condition ", condition);
    burger.updateOne({ devoured: req.body.devoured }, condition, function() {
        res.redirect("/index");
    });
});


module.exports = router;
