const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    discount: {type: Number, required: true, default: 0}
});

module.exports = model('Suplier', schema);