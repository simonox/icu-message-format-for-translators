var express = require('express');
var port = process.env.PORT || 3000;
var app = express.createServer();


app.configure(function() {
  app.use('/', express.static(__dirname + '/'));
  app.use('/images', express.static(__dirname + '/images'));
  app.use('/css', express.static(__dirname + '/css'));
  app.use('/lib', express.static(__dirname + '/lib'));
}).listen(port);