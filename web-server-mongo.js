var mysql = require('mysql');
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";




var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});


app.get('/get-courses', function (req, res) {
  //con.connect(function(err) {
    //if (err) throw err;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("testBase");
        dbo.collection("course").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
        });
      });
  
});


var server = app.listen(5000, function () {
    console.log('Node server is running..');
});