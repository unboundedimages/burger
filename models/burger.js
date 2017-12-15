//import orm.js into burger.js
var orm = require("../config/orm.js");

var callBacks = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // This is doing the create  post reference CRUD.
    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    //breaking news and update on that burger
    update: function(objColVals, condtion, cb) {
        orm.updateOne("burgers", objColVals, condtion, function(res) {
            cb(res);
        });
    }
};

//peace I'm out Exporting bye Felicia
module.exports = callBacks;
