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

  res.render('index', {user:req.user});
});

router.get('/login', function(req,res,next){
  res.render('login', {user:req.user, title: 'No More Hangry'}); 
});

router.post('/login', function(req, res, next){
  
  if(req.body.login != undefined){
    //do client side stuff: create sign in form
    console.log("login");
    passport.authenticate('local', function(err,user) {
      if(user) {
        req.logIn(user, function(err) {
          console.log("Logged in " + user);
          res.render('index', {user: user, title: 'No More Hangry'});
        });
      } else {
        res.render('login', {title: 'No More Hangry', message: "Invalid username or password."});
      }
    })(req, res, next);
  }
  else if(req.body.register != undefined){
    //do client side stuff: create sign up form
    console.log("register");
    User.register(new User({
        username:req.body.username,
        firstname: req.body.fname,
        lastname: req.body.lname,
        zipCode: req.body.zipCode,
        address: req.body.address,
        }),
        req.body.password, function(err,user){
      if(err){
        res.render('login',{title: 'No More Hangry', message: err.message});
        console.log(err);
      }
      else{
        passport.authenticate('local')(req,res,function(){
          console.log(user);
          res.render('index', {user: user});
        });
      }
    });

  }
});

router.get('/logout', function(req,res,next){
  console.log("LOG out this user: " + req.user);
  req.logout();
  res.redirect("/login");
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
    var zipcode = 0;
    
    //Has zipcode set
    if(req.user.zipCode != undefined){
      console.log("haszipcode");
      zipcode = req.user.zipCode;

      if(req.user.minRating != undefined){
        console.log("has min rating");
        minRating = req.user.minRating;
      }
      if(req.user.maxPrice != undefined){
        console.log("has max price");
        maxPrice = req.user.maxPrice;
      }
     
      FoodItem.findOneRandom({"rating":{"$gte":minRating},"price":{"$lte":maxPrice}, "zipCode": zipcode},function(err,food){
        if(food){
          food.numViews++
          food.save(function(err,food){
            res.render('food', {user: req.user, food:food, imgPath:food.imgPath});
          });
        }
        else{
          res.render('food', {message: "Sorry! We couldn't find anything that matches your preferences..."});
        }
      });
    //No zip code set
    }else{
      res.render('food',{noZip: true , user:req.user});
    }
  //No user  
  }else{
    res.render('food');
  }
});

router.post('/food', function(req,res,next){
  if(req.body.submitZip){
    User.findOne({"_id":req.user._id},function(err,user){
      user.zipCode = req.body.inputZip
      user.save(function(err,user){
        res.redirect("/food");
      });
    });
  }

  if(req.body.randomButton){
    res.redirect("/food");
  }
  else if(req.body.similarButton){
    
    if(req.user){

    var minRating = 0;
    var maxPrice = 99.00;
    var zipcode = 0;
    var foodType = req.body.foodType;
    //Has zipcode set
    if(req.user.zipCode != undefined){
      console.log("haszipcode");
      zipcode = req.user.zipCode;

      if(req.user.minRating != undefined){
        console.log("has min rating");
        minRating = req.user.minRating;
      }
      if(req.user.maxPrice != undefined){
        console.log("has max price");
        maxPrice = req.user.maxPrice;
      }
     
        FoodItem.findOneRandom({"rating":{"$gte":minRating},"price":{"$lte":maxPrice}, "zipCode": zipcode, "type":foodType},function(err,food){
          if(food){
            food.numViews++
            food.save(function(err,food){
              res.render('food', {user: req.user, food:food, imgPath:food.imgPath});
            });
          }
          else{
            res.render('food', {message: "Sorry! We couldn't find anything that matches your preferences..."});
          }
        });
      //No zip code set
      }else{
        res.render('food',{noZip: true , user:req.user});
      }
    //No user  
    }else{
      res.render('food');
    }
  }
  else if(req.body.orderButton){
    var tax = req.body.foodPrice * .08875;
    tax = Math.round(tax * 100) / 100
    var fee = 2.75;
    var total = Number(req.body.foodPrice) + tax + fee;
    total = Math.round(total * 100) / 100
    res.render('order',{user:req.user, foodImg: req.body.foodImg, foodName:req.body.foodName, foodPrice:req.body.foodPrice, foodId:req.body.foodId, tax:tax, fee:fee, total:total});
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

router.get('/settings', function(req,res,next){
  res.render("settings", {user:req.user});
});

router.post('/settings', function(req,res,next){
  if(req.body.editAccount){
    User.findOne({"_id":req.user._id},function(err,user){
      user.firstname = req.body.firstname;
      user.lastname = req.body.lastname;
      user.address = req.body.address;
      user.zipCode = req.body.zip;
      user.paymentType = req.body.payment;
      console.log(user);
      user.save(function(err,user){
        if(!err){
          console.log(user);
          res.redirect("/settings");
        }
      });
    });
  }
  if(req.body.editPreferences){
    User.findOne({"_id":req.user._id},function(err,user){
      user.maxPrice = req.body.maxPrice;
      user.minRating = req.body.minRating;
      user.save(function(err,user){
        if(!err){
          console.log(user);
          res.redirect("/settings");
        }
      });
    });
  }

});


module.exports = router;
