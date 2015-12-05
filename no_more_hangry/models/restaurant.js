var mongoose = require('mongoose');

var Restaurant = new mongoose.Schema({
    name: {type: String, required: false},
    zipCode: {type: Number, required: true},
    //foodItems: [{type: Schema.ObjectId, ref:'FoodItem'}]
});

module.exports = mongoose.model('Restaurant', Restaurant);
