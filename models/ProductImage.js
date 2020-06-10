const { Schema, model } = require('mongoose');

const schema = new Schema({
    image: {type: String, required: true},
    productId: {type: String, required: true}
});

module.exports = model('ProductImage', schema);