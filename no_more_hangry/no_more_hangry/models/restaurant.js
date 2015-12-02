var mongoose = require('mongoose');

var Restaurant = new mongoose.Schema({
    name: {type: String, required: false},
    zipCode: {type: Number, required: true}
});

module.exports = mongoose.model('Restaurant', Restaurant);
