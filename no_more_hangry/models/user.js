var mongoose = require('mongoose'),
	passportLocalMongoose = require("passport-local-mongoose");

var User = new mongoose.Schema({
	username: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    zipCode: {type: Number, required: true},
    address: {type: String, required: true},
    paymentType: {type: String, required: true},
    maxPrice: {type: Number, required: false},
    minRating: {type: Number, required: false},
    orderedFood: Array
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
