var express = require('express');
var router = express.Router();

var Program = require('../models/program');
var History = require('../models/history');
var Entry = require('../models/entry');
var Exercise = require('../models/exercise');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/programs', function(req,res){
  Program.find({}, function(err,programs){
    if (err) throw err;
    res.render('programs',{programs : programs})
  })
})

router.get('/histories/', function (req,res) {
  History.find({}, function (err,histories) {
    if (err) throw err;
    res.render('histories',{histories : histories})
  })
})
router.get('/history/:hist_id',function (req,res) {
  History
    .findById(req.params.hist_id)
    .populate('_creator')
    .populate('entries')
    .populate('programs')
    .exec(function (err,history) {
      if (err) throw err;
      console.log(history);
      res.render('history',history)
  })
})

module.exports = router;
