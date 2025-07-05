const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const sort = req.query.sort || 'name';

        const result = await Product.findWithPagination(page, limit, sort);
        res.status(200).json({
            success: true,
            data: result.products,
            pagination: result.pagination
        });
    } catch (error) {
        res.status(500).json('Failed to create Product !')
    }
}

exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
        res.status(404).json("Product Not Found");
    }
    res.status(200).json(product);
}

exports.createNewProduct = async (req, res) => {
    try {
        const product = await Product.newProduct(req.body);
        res.status(201).json(product)
    } catch (err) {
        console.log("Failed to create Product !", err);
        res.status(500).json('Failed to create Product !')
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.updateProduct(productId, req.body);

        if (!product) {
            res.status(404).json("Product Not Found");
        }
        res.status(201).json(product)
    } catch (err) {
        res.status(500).json('Failed to update Product !')
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.deleteProduct(productId);

        if (!product) {
            res.status(404).json("Product Not Found");
        }
        res.json("Deleted Successful !")
    } catch (err) {
        res.status(500).json('Failed to delete Product !')
    }
}
