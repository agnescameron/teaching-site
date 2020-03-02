var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.send('<h1>hello world!</h1>');
});

app.get('/about', function(req, res) {
    res.send('<h1>About Page</h1><p>boo boo be doo</p>');
});

app.listen(8080);