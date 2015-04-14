var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res) {
  User.find({}, function(err,users){
      if (err) throw err;
      res.render('users', {users : users});
  });

});

module.exports = router;
