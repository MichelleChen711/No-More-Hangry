var mongoose = require('mongoose');
var random = require('mongoose-simple-random');

var FoodItem = new mongoose.Schema({
    image: {type: String, required: false},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: Number, required: true},
    numRatings: {type: Number, required: true},
    type: {type: String, required: true},
    restaurant: String,
    zipCode: Number,
    numViews: {type: Number, required: true},
    numOrders: {type: Number, required: true},
    imgPath: String,
});

FoodItem.plugin(random);

module.exports = mongoose.model('FoodItem', FoodItem);
