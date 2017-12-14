//import orm.js into burger.js
var orm = require("../config/orm.js");

var callMe = {
    all: function(cb) {
        orm.all("burger", function(res) {
            cb(res);
        });
    },
    // This is doing the create  post reference CRUD.
    create: function(cols, vals, cb) {
        orm.create("burger", cols, vals, function(res) {
            cb(res);
        });
    },
    //breaking news and update on that burger
    update: function(objColVals, condtion, cb) {
        orm.update("burger", objColVals, condtion, function(res) {
            cb(res);
        });
    }
};

//peace I'm out Exporting bye Felicia
module.exportes = callMe;
