## Installation and Setup Guide

1. Create a mysql database

    1.1 (My method) Install docker

    1.2 Install Docker Compose

    1.3 Run ```docker-compose up -d``` or use docker run on a mysql container

2. ```mysql -h 127.0.0.1 -P 3306 -u root -p(Your password)```

3. Copy InnitDB to initialise Database

4. Install Node 

5. ```npm install mysql --save``` Install mysql for node

6. ```npm install express --save``` Install express for node

7. ```node web-server.js``` To run web-server

8. ```curl localhost:5000/submit-new```

### Expected Outcome 
```
[
   {
      "instruction_id":1,
      "course_name":"Porridge",
      "step":"Get Boiling Water",
      "step_id":null,
      "photo_address":null
   },
   {
      "instruction_id":2,
      "course_name":"Python",
      "step":"Make Computer",
      "step_id":null,
      "photo_address":null
   },
   {
      "instruction_id":3,
      "course_name":"Php",
      "step":"True True",
      "step_id":null,
      "photo_address":"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
   },
   {
      "instruction_id":4,
      "course_name":"Lasagne",
      "step":"Make Mince",
      "step_id":null,
      "photo_address":"https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg"
   }
]
```