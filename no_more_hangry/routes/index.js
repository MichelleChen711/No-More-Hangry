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
  
  if(req.body.login != undefined){
    //do client side stuff: create sign in form
    console.log("login");
    passport.authenticate('local', function(err,user) {
      if(user) {
        req.logIn(user, function(err) {
          //res.redirect('/food');
          console.log("Logged in " + user);
          res.render('index', {user: user, title: 'No More Hangry'});
        });
      } else {
        res.render('index', {title: 'No More Hangry', message: "Invalid username or password."});
      }
    })(req, res, next);
  }
  else if(req.body.register != undefined){
    //do client side stuff: create sign up form
    console.log("register");
    User.register(new User({
        username:req.body.username,
        name: req.body.nname,
        zipCode: req.body.zipCode,
        address: req.body.address,
        }),
        req.body.password, function(err,user){
      if(err){
        res.render('index',{title: 'No More Hangry', message: err.message});
        console.log(err);
      }
      else{
        passport.authenticate('local')(req,res,function(){
          //res.redirect("/food");
          console.log(user);
          res.render('index', {user: user, title: 'No More Hangry'});
        });
      }
    });

  }
});

router.get('/logout', function(req,res,next){
  req.logout();
  res.redirect("/");
});

module.exports = router;
