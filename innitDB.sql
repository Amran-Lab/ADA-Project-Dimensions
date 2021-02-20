-- mysql -h 127.0.0.1 -P 3306 -u root -p(password)
CREATE DATABASE IF NOT EXISTS DIMENSIONS;

USE DIMENSIONS;
---------------------------------------------------------
CREATE TABLE Courses (

course_id INT(5) NOT NULL AUTO_INCREMENT,

course_name VARCHAR(20) NOT NULL,

course_type VARCHAR(10) NOT NULL,

course_date INT(8) NOT NULL,

course_rating INT(1) NULL,

PRIMARY KEY(course_id));
---------------------------------------------------------
CREATE TABLE Instruction (

instruction_id INT(5) NOT NULL AUTO_INCREMENT,

course_id VARCHAR(5) NOT NULL,

step VARCHAR(300) NOT NULL,

step_id INT(5) NULL,

photo_id INT(5) NULL,

PRIMARY KEY(instruction_id));

---------------------------------------------------------

CREATE TABLE Photos (

photo_id INT(5) NOT NULL AUTO_INCREMENT,

photo_name VARCHAR(20) NULL,

photo_address VARCHAR(300) NOT NULL,

PRIMARY KEY(photo_id));

---------------------------------------------------------

Insert into Courses (course_name,course_type,course_date,course_rating) VALUES ('Lasagne','Cooking','20121118','4');
Insert into Courses (course_name,course_type,course_date) VALUES ('Porridge','Cooking','20121118');
Insert into Courses (course_name,course_type,course_date,course_rating) VALUES ('Python','Software','20121118','5');
Insert into Courses (course_name,course_type,course_date) VALUES ('Php','Software','20121118');


Insert into Photos (photo_name,photo_address) VALUES ('cat','https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png');
Insert into Photos (photo_address) VALUES ('https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg');


INSERT INTO Instruction (course_id, step) SELECT course_id, 'Get Boiling Water' FROM Courses WHERE  course_id = 2;
INSERT INTO Instruction (course_id, step) SELECT course_id, 'Butter Sandwhich' FROM Courses WHERE  course_id = 1000;
INSERT INTO Instruction (course_id, step) SELECT course_id, 'Make Computer' FROM Courses WHERE  course_id = 3;

INSERT INTO Instruction (course_id, step, photo_id) SELECT course_id, 'True True',photo_id FROM Courses, Photos WHERE  course_id = 4 and photo_id = 1;
-- Test Cases Should Not ADD DATA
INSERT INTO Instruction (course_id, step, photo_id) SELECT course_id, 'True False',photo_id FROM Courses, Photos WHERE  course_id = 3 and photo_id = 5000;
INSERT INTO Instruction (course_id, step, photo_id) SELECT course_id, 'False True',photo_id FROM Courses, Photos WHERE  course_id = 1000 and photo_id = 2;
INSERT INTO Instruction (course_id, step, photo_id) SELECT course_id, 'False False',photo_id FROM Courses, Photos WHERE  course_id = 1000 and photo_id = 2;

INSERT INTO Instruction (course_id, step, photo_id) SELECT course_id, 'Make Mince',photo_id FROM Courses, Photos WHERE  course_id = 1 and photo_id = 2;




Select Instruction.instruction_id, Courses.course_name, Instruction.step, Instruction.step_id, Photos.photo_address
From Instruction
    LEFT JOIN Courses on Courses.course_id = Instruction.course_id
    LEFT JOIN Photos on Photos.photo_id = Instruction.photo_id
    ORDER BY instruction_id;
