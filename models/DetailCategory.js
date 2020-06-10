const {Schema, model} = require('mongoose');

const schema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    slag: {type: String, required: true},
    carId: {type: String, required: true}
});

module.exports = model('DetailCategory', schema);