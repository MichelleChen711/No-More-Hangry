var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//var Restaurant = mongoose.model('Restaurant');
//var FoodItem = mongoose.model('FoodItem');
//var User = mongoose.model('User');
//var Order = mongoose.model('Order');

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
