var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
  name : String,
  trackedVariable : String
});

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

var programSchema = new Schema({
  name : String,
  description : String,
  exercises : [{type : Schema.Types.ObjectId, ref:'Exercise'}]
})

var historySchema = new Schema({
  entries:  [entrySchema],
  programs : [programSchema],
  _creator : {type : Schema.Types.ObjectId, ref : 'User'}
});

var userSchema = new Schema({
  twitter_handle : String
})

/*
* Defining models
*/
var User  = mongoose.model('User', userSchema);
var Entry = mongoose.model('Entry', entrySchema);
var Exercise = mongoose.model('Exercise', exerciseSchema);
var History = mongoose.model('History', historySchema);
var Program = mongoose.model('Program', programSchema);

/*
* Instantiating models
*/

var user1 = new User({twitter_handle : "Antho"})

var ex1 = new Exercise({
  name : "Cardio",
  trackedVariable : "duration"
});

var ex2 = new Exercise({
  name : "Bench Press",
  trackedVariable : "weight"
});

var program1 = new Program({
  name : "Workout 1",
  description : "Given  by Thomas, this program is supposed to be a full body workout",
  exercises : [ex1._id,ex2._id]
})

var entry1 = new Entry({
  program : program1._id,
  exercises : [
    {
      exo_ref : ex1._id,
      reps : [
        {val : 20, hits : 1}
      ]
    },
    {
      exo_ref : ex2._id,
      reps : [
        {val : 30, hits : 10},
        {val : 35, hits : 10},
        {val : 35, hits : 10},
        {val : 30, hits : 10}
      ]
    },
  ]
})

var history1 = new History({
  entries :[entry1],
  programs : [program1],
  _creator : user1._id
})
