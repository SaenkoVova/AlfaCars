const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    email: {type: String, required: true},
    name: {type: String, required: true},
    secondName: {type: String, required: true},
    phone: {type: String, required: true},
    country: {type: String, required: true},
    area: {type: String, required: true},
    city: {type: String, required: true},
    index: {type: String, required: false, default: null},
    address: {type: String, required: false, default: null},
    newsSubscription: {type: Boolean, required: true},
    password: {type: String, required: true},
    bookmarks: [{type: Types.ObjectId, ref: 'Detail'}]
});

module.exports = model('User', schema);