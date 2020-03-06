var express = require('express');
var app = express();
var path = require('path');

app.use(express.json());

app.get('/', function(req, res) {
	console.log('requested main page');
    res.sendfile('index.html');
});

app.get('/about', function(req, res) {
	console.log('requested about page');
    res.sendfile('about.html');
});

app.get('/woah', function(req, res) {
	console.log('requested woah');
    res.sendfile('woah.html');
});

app.post('/login', function(req,res){
  var user=req.body.user;
  console.log("fave animal = "+user);
  res.send(JSON.stringify("got username and password"));
});

//this has to go at the end
app.get('*', function(req, res) {
	console.log('woah, 404');
    res.end('<h1>page not here :3</h1>');
});

app.listen(8080, function(){console.log('hey, Im listening')});