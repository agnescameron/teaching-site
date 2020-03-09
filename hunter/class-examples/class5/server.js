var express = require('express');
var app = express();
var path = require('path');

app.use(express.json()) 

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.get('/about', function(req, res) {
    res.send('<h1>About Page</h1><p>boo boo be doo</p>');
});

app.post('/login', function(req,res){
  var user=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user+", password is "+password);
  res.send(JSON.stringify("Hello "+user));
});

app.listen(8080);