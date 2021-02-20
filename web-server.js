var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123",
  database: "DIMENSIONS"
});



var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.post('/submit-new-course', function (req, res) {
    var Cname = req.body.courseName;
    var CType = req.body.courseType;
    var CDate = req.body.courseDate;
    var CRating = req.body.courseRating;
    //con.connect(function(err) {
      //if (err) throw err;
      //console.log("Connected!");
      var sql = `Insert into Courses (course_name,course_type,course_date,course_rating) VALUES (${Cname},${CType},${CDate},${CRating});`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    //});

    
    res.send(name + ' Submitted Successfully!');
});
app.get('/submit-new', function (req, res) {
  //con.connect(function(err) {
    //if (err) throw err;
    con.query("Select Instruction.instruction_id, Courses.course_name, Instruction.step, Instruction.step_id, Photos.photo_address From Instruction LEFT JOIN Courses on Courses.course_id = Instruction.course_id LEFT JOIN Photos on Photos.photo_id = Instruction.photo_id ORDER BY instruction_id;", function (err, result, fields) {
      if (err) throw err;
      var DATA = result;
      res.send(result);
    });
  //});
  
});


var server = app.listen(5000, function () {
    console.log('Node server is running..');
});