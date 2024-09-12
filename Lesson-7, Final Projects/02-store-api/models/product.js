
const mongoose = require('mongoose')
const { Schema } = mongoose




const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided']
    },
    price: {
        type: Number,
        required: [true, 'product price must be provided']
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'centrogar', 'musimundo', 'amazon'],
            message: '{VALUE} is not supported...'
        },
    },
    createdAt: {
        type: String,
        default: new Date(),
    },
})


module.exports = mongoose.model('Product', productSchema)