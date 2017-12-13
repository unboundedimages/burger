// source = https://codeforgeek.com/2015/01/nodejs-mysql-tutorial/
// and the sienfield exercise from class
var express = require('express')
var mysql = require('mysql');
var app = express();
var port = 8080;
var connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: 'burger_db'
});
//gang initiation connect yourself fool!
connection.connect(function(err) {
    if (!err) {
        console.log("we'z eating good " + "at table id " + connection.threadId);
    }
    else {
        console.log("hit the fan Charlie. " + "error connecting at: " + err.stack);
    }
});

module.exports = connection;
