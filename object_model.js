var mongoose = require('mongoose');

var objectSchema = mongoose.Schema({
  name: String,
  info: String
});

module.exports = mongoose.model('Object', objectSchema);
