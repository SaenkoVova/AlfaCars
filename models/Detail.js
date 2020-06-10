const {Schema, model} = require('mongoose');

const schema = new Schema({
    title: {type: String, required: true},
    slag: {type: String, required: true},
    article: {type: String, required: true},
    producer: {type: String, required: true},
    quantity: {type: Number, required: true},
    reviewsQuantity: {type: Number, required: true},
    state: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    subDetailCategoryId: {type: String, required: true}
});

module.exports = model('Detail', schema);