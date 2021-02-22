
var express = require('express');
var app = express();
var AWS = require('aws-sdk');
var AWSAccessKeyId   = process.env.AWSAccessKeyId;
var AWSSecretKey = process.env.AWSSecretKey;
var dynamodb = new AWS.DynamoDB();
AWS.config.update({accessKeyId: AWSAccessKeyId, secretAccessKey: AWSSecretKey, region: "eu-west-2"});


var express = require('express');
var app = express();

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "courseTable";


/*
var params = {
  TableName: table,
  Key:{
    "CourseID": 3

  }
};

console.log("Getting Items With ID 3...")
docClient.get(params, function(err, data) {
  if (err) {
      console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
  } else {
      console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
  }
});
*/
var CID = 9;
var params = {
  TableName:table,
  Item:{
    "CourseID" : CID,
    "CourseName" : "Frech Fries",
    "CourseRating"    : "Cheese",
    "CourseDate"     : "22-01-2019",
    "settings" : [{
      "stepID"      : "7",
      "stepDetail" : "clonk",
      "photoName"      : "heya",
      "photoAddress"  : "cool"
    },
    {
      "stepID"      : "5",
      "stepDetail" : "plot",
      "photoName"      : "foo",
      "photoAddress"  : "red"
    }
  ]
  
  }
};


app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.post('/submit-new-course', function (req, res) {
  var CID = 7;
  var params = {
    TableName:table,
    Item:{
      "CourseID" : CID,
      "CourseName" : "Frech Fries",
      "CourseRating"    : "Cheese",
      "CourseDate"     : "22-01-2019",
      "settings" : [{
        "stepID"      : "7",
        "stepDetail" : "clonk",
        "photoName"      : "heya",
        "photoAddress"  : "cool"
      },
      {
        "stepID"      : "5",
        "stepDetail" : "plot",
        "photoName"      : "foo",
        "photoAddress"  : "red"
      }
    ]
    
    }
  };
  
  console.log("Adding a new item...");
  docClient.put(params, function(err, data) {
      if (err) {
          console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
      }
  
  });


    
  res.send(' Submitted Successfully!');
});
app.get('/get-all', function (req, res) {

  docClient.scan(params, onScan);
  console.log("Getting ALL Items ...")
  function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        
        console.log("Scan succeeded.");
        console.log(JSON.stringify(data, null, 2));
          /*Get Indivual Items
          data.Items.forEach(function(course) {
            var string1 = "";
            var newObje = "";
            var longe1 = course.settings.length;
            for (var i=0; i < 2; i++) {
              if (i == 0){
              string1 += JSON.stringify(course.settings[i]);
            }
            else{
            string1 += ", " + JSON.stringify(course.settings[i]);}}
            console.log(
                 course.CourseID,
                 course.CourseName,
                 string1)
                 
         });
         */
          // continue scanning if we have more movies, because
          // scan can retrieve a maximum of 1MB of data
        if (typeof data.LastEvaluatedKey != "undefined") {
          console.log("Scanning for more...");
          params.ExclusiveStartKey = data.LastEvaluatedKey;
          docClient.scan(params, onScan);
          
        }
        res.send(JSON.stringify(data, null, 2));
    }
  }
  

  
});


var server = app.listen(5000, '127.0.0.1', function () {
    console.log('Node server is running..');
});
