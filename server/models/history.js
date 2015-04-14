var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var historySchema = new Schema({
  entries:  [{type : Schema.Types.ObjectId, ref : 'Entry'}],
  programs : [{type : Schema.Types.ObjectId, ref : 'Program'}],
  _creator : {type : Schema.Types.ObjectId, ref : 'User'}
});

module.exports = mongoose.model('History', historySchema);
