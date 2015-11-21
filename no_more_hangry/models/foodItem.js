var mongoose = require('mongoose');

var FoodItem = new mongoose.Schema({
    image: {type: String, required: false},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: Number, required: true},
    numRatings: {type: Number, required: true},
    type: {type: String, required: true},
    restaurant: {type: String, required: true},
    numViews: {type: Number, required: true},
    numOrders: {type: Number, required: true}
});

mongoose.model('FoodItem', FoodItem);
mongoose.connect('mongodb://localhost/hangryfooddb');