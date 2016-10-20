var express = require('express');
var app = express();
var path = require('path');
var subdomain = require('express-subdomain');
var router = require('./router/router.js')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(subdomain('admin', router));
app.listen(8080);
