var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entrySchema = new Schema({
  program : {type : Schema.Types.ObjectId, ref:'Program'},
  exercises : [
    {
      exo_ref : {type : Schema.Types.ObjectId, ref:'exercise'},
      reps : [
        {
          val : Number,
          hits : Number
        }
      ]
    }
  ],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', entrySchema);
