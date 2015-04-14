var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  twitter_handle : String
})

module.exports = mongoose.model('User', userSchema);
