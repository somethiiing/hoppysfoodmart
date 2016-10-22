var express = require('express');
var path = require('path');
var subdomain = require('express-subdomain');
// var router = require('./router/router.js');
var app = express();
var router = express.Router();

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/main/index.html'));
// });


app.get('*', function(req, res, next) {
  if(req.headers.host === 'admin.localhost:8080') {
    req.url = '/admin' + req.url;
  }
  next();
});

app.use('/', express.static(__dirname + '/main'));

app.use('/admin', express.static(__dirname + '/admin'));



app.use(subdomain('admin', router));

app.listen(8080);

console.log('Listening on port ' + 8080);