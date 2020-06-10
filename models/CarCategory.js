const {Schema, model} = require('mongoose');

const schema = new Schema({
    originalTitle: {type: String, required: true},
    ukrTitle: {type: String, required: true},
    slag: {type: String, required: true},
    image: {type: String, required: true}
});


module.exports = model('CarCategory', schema);