var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var session = require('express-session');

var Restaurant = require('./models/restaurant');
var FoodItem = require('./models/foodItem');
var User = require('./models/user');
var Order = require('./models/order');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'No More Hangry' });
});

router.post('/', function(req, res, next){
  console.log(req.body.signin);
  console.log(req.body.signup);
  if(req.body.signin != undefined){
    //do client side stuff: create sign in form
  }
  else{
    //do client side stuff: create sign up form
  }
});

module.exports = router;
