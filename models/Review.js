const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {type: String, required: true},
    review: {type: String, required: true},
    rating: {type: Number, required: true},
    date: {type: Date, required: true, default: Date.now},
    productId: {type: String, required: true}
});

module.exports = model('Review', schema);