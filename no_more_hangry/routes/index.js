var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var passportLocalMongoose = require('passport-local-mongoose');
var session = require('express-session');

//var Restaurant = require('./models/restaurant');
//var FoodItem = require('./models/foodItem');
var User = mongoose.model('User');
//var Order = require('./models/order');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'No More Hangry'});
});

router.post('/', function(req, res, next){
  
  if(req.body.signIn != undefined){
    //do client side stuff: create sign in form
    console.log("signin");
    passport.authenticate('local', function(err,user) {
      if(user) {
        req.logIn(user, function(err) {
          //res.redirect('/food');
          console.log("correct");
        });
      } else {
        res.render('index', {title: 'No More Hangry', message:'Your login or password is incorrect.'});
      }
    })(req, res, next);
  }
  else if(req.body.signUp != undefined){
    //do client side stuff: create sign up form
    console.log("signup");
    User.register(new User({username:req.body.username}),
        req.body.password, function(err,user){
      if(err){
        res.render('index',{title: 'No More Hangry', message: err.message});
        console.log(err);
      }else{
        passport.authenticate('local')(req,res,function(){
          //res.redirect("/food");
          console.log(user);
        });
      }
    });

  }
});

module.exports = router;
