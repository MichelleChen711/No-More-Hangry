var mongoose = require('mongoose');

var Order = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    foodItem: {type: mongoose.Schema.Types.ObjectId, ref:'FoodItem'}
});

mongoose.model('Order', Order);
mongoose.connect('mongodb://localhost/hangryorderdb');