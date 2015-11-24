var mongoose = require('mongoose');

var Restaurant = new mongoose.Schema({
    name: {type: String, required: false},
    zipCode: {type: Number, required: true}
});

mongoose.model('Restaurant', Restaurant);
