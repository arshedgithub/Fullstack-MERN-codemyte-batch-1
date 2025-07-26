const { parse } = require('dotenv');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true,
        unique: true
    },
    cost: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    }
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
