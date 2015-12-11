var mongoose = require('mongoose'),
	passportLocalMongoose = require("passport-local-mongoose");

var User = new mongoose.Schema({
	//username: {type: String, required: true},
    //password: {type: String, required: true},
    firstname: String,
    lastname:String,
    zipCode: Number,
    address: String,
    paymentType: String,
    maxPrice: Number,
    minRating: Number,
    orderedFood: Array,
    preferences: Array
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
