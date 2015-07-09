var express = require("express");
var bodyParser = require('body-parser');
var _ = require("underscore");
var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

//you can use the same users because the get and post are 2 different event
//listeners 
app.post("/users", function(req, res) {
    var newUser = req.body;

    users.push(newUser);
    res.json(newUser);

});

var users = [
  {
    id: 1,
    username: "bob",
    firstname: "Bob",
    lastname: "Jones",
    age: 35
  },
 
  {
    id: 2,
    username: "joe",
    firstname: "Joseph",
    lastname: "Smith",
    age: 23
  },

  {
    id: 3,
    username: "sandra",
    firstname: "Sandra",
    lastname: "Ramirez",
    age: 50
  }   
];

app.get("/users", function(req, res) {
    res.json(users);
});

//PUT a new object into the array
app.put("/users/:id", function(req, res) {
  var targetId = parseInt(req.params.id);

//find the users array matching the id
var targetUsers = _.findWhere(users, {id: targetId});

//Modify key value pairs in the array
targetUsers.id = req.body.id;
targetUsers.username = req.body.username;
targetUsers.firstname = req.body.firstname;
targetUsers.lastname = req.body.lastname;
targetUsers.age = req.body.age;

//send back edited object
res.json(targetUsers);

});

//Display the whole array
app.get("/users", function(req, res) {
  res.json(users);
});

//Delete user from the array
app.delete('/users/:id', function(req, res) {
  var targetId = parseInt(req.params.id);

//find user in the array matching the id
var targetUser = _.findWhere(users, {id:targetId});

//get the index of the user to be deleted
var index = users.indexOf(targetUser);

//remove the user from that index, only remove 1 user
users.splice(index, 1);

//send back deleted object
res.json(targetUser);

});


app.listen(5000);