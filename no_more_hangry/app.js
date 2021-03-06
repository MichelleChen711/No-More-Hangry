var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var sessionOptions = {
  secret: 'secret cookie thang (store this elsewhere!)',
  resave: true,
  saveUninitialized: true
};
app.use(session(sessionOptions));

var mongoose = require('mongoose');

//Mongoose
var Restaurant = require('./models/restaurant');
var FoodItem = require('./models/foodItem');
var User = require('./models/user');
var Order = require('./models/order');

var http = require('http').Server(app);
var port = process.env.PORT || 3000;
var passportLocalMongoose = require('passport-local-mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
//passport local using user model for authentication
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var routes = require('./routes/index');
var users = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:10111/hangrydb');
//mongoose.connect('mongodb://localhost/hangrydb');

app.use(function(req, res, next){
  res.locals.user = req.user;
  next();
});
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

//http.listen(port, function() {
//  console.log("Started listening on port", port);
//});


