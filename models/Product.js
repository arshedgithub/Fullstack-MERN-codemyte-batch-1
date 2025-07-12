const { parse } = require('dotenv');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
