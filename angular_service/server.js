var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var STATIC_FOLDER = 'experiment';
var path = require('path');

app.use(express.static(path.join(__dirname, STATIC_FOLDER)));

http.listen(4000, function(){
  console.log('listening on localhost:4000  ......');
});
