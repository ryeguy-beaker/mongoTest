var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds145359.mlab.com:45359/beakermongotest', function(err) {
  if (err) console.log(err);
});

var objects = require('./objects')(app);

app.listen('3000', function() {
  console.log('listening on PORT:3000');
});
