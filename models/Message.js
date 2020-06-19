const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
    date: {type: String, required: true, default: Date.now}
});

module.exports = model('Message', schema);