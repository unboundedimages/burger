// source = https://codeforgeek.com/2015/01/nodejs-mysql-tutorial/
// and the sienfield exercise from class
// I still need to figure out JAW for hero
var express = require('express')
var mysql = require('mysql');
var app = express();
var port = 8080;
var connection = mysql.createConnection({
    host: "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "mjrxwd0bl48itzpt",
    password: "aq9g351xc9ynteh6",
    database: 'qre0rvfue853tsee'
});

//when deploying locally use below.
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: "root",
//     password: "",
//     database: 'burger_db'
// });





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
