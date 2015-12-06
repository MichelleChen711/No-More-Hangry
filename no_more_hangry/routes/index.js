//var apiKey = "58853fd73f3d6de89949c712b1666d2465a7e1e4";

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var passportLocalMongoose = require('passport-local-mongoose');
var session = require('express-session');

var Restaurant = mongoose.model('Restaurant');
var FoodItem = mongoose.model('FoodItem');
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
  console.log("LOG out this user: " + req.user);
  req.logout();
  res.redirect("/");
});

router.get('/about', function(req,res,next){
  res.render('about', {title: "About"}); 
});

router.get('/food', function(req,res,next){

  /**FoodItem.remove(function(err){
    console.log("done");
  });**/

  if(req.user){

    var minRating = 0;
    var maxPrice = 99.00;
    var zipcode = req.user.zipCode;
    
    if(req.user.minRating != undefined){
      console.log("has min rating");
      minRating = req.user.minRating;
    }
    if(req.user.maxPrice != undefined){
      console.log("has max price");
      maxPrice = req.user.maxPrice;
    }
     
    FoodItem.findOneRandom({"rating":{"$gte":minRating},"price":{"$lte":maxPrice}, "zipCode": zipcode},function(err,result){
      if(result){
        console.log(result);
        res.render('food', {user: req.user, food:result, imgPath:result.imgPath});
      }
      else{
        res.render('food', {message: "Sorry! We couldn't find anything that matches your preferences..."});
      }
    });
  }else{
    res.render('food');
  }
});

/**var count= 0;
router.get('/food', function(req,res,next){
  var rand = Math.random();
  console.log(rand);
  var minRating = 0;
  var maxPrice = 20.00;
  var zipcode = 10003;
  var foodArray = [];

  
  FoodItem.find({"rating":{"$gte":minRating},"price":{"$lte":maxPrice}, "zipCode": zipcode},function(err,foods,count){
    console.log(foods);
    for
  });


  FoodItem.findOne({"rating":{"$gte":minRating},"price":{"$lte":maxPrice}, "zipCode": zipcode, "random":{"$gte":rand} },function(err,food,count){
    if(count<1){
        count++;
        console.log(food.random);
        food.numViews ++;
        food.save(function(err,food,count){
          res.render('food', {food: food, imgPath: food.imgPath});
        });
      }
    else{
      FoodItem.findOne({"rating":{"$gte":minRating},"price":{"$lte":maxPrice}, "zipCode": zipcode, "random":{"$gte":rand} },function(err,food,count){
        if(food){
          count=0;
          console.log(food.random);
          food.numViews ++;
          food.save(function(err,food,count){
            res.render('food', {food: food, imgPath: food.imgPath});
          });
        }
        else{
          res.redirect("/food");
        }
      });
    } 
  });
});
**/

router.get('/add', function(req,res,next){
  res.render('add', {title: "Add to DB"});
});

router.post('/add', function(req,res){
  
  if(req.body.addFood){
    
    var newFood = new FoodItem({
      name: req.body.fName,
      price: req.body.fPrice,
      rating: req.body.fRating,
      numRatings: req.body.fNumRating,
      type: req.body.fType,
      restaurant: req.body.fRestaurant,
      zipCode: req.body.fZip,
      numViews: req.body.fNumView,
      numOrders: req.body.fNumOrder,
      imgPath: req.body.fImg
    });
    
    newFood.save(function(err, food, count){
      if(err){
        console.log(err);
      }
      else{
        console.log("Saved");
        console.log(food);
      }
    });
  }
});

module.exports = router;
