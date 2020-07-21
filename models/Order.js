const {Schema, model} = require('mongoose');

const schema = new Schema({
    username: {type: String, required: true},
    secondName: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    area: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    supplierId: {type: String, required: true},
    paymentId: {type: String, required: true},
    products: [
        {
            imageId: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            article: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            fullPrice: {
                type: Number,
                required: true
            }
        }
    ]
})

module.exports = model('Order', schema);