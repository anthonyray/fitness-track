var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
  name : String,
  trackedVariable : String
});

module.exports = mongoose.model('Exercise', exerciseSchema);
