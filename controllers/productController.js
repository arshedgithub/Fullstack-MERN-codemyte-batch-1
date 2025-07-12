const productDao = require('../dao/productDao');
const logger = require('../utils/logger');

exports.getAllProducts = async (req, res) => {
    logger.info("getting All Products");

    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const sort = req.query.sort || 'name';

        const result = await productDao.findWithPagination(page, limit, sort);
        logger.info("All Products retrieved succesfully", "produtController", "getAllProducts");
        res.status(200).json({
            success: true,
            data: result.products,
            pagination: result.pagination
        });
    } catch (error) {
        logger.error("Error in get All products", error);
        res.status(500).json('Failed to create Product !')
    }
}

exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    const product = await productDao.findById(productId);

    if (!product) {
        res.status(404).json("Product Not Found");
    }
    res.status(200).json(product);
}

exports.createNewProduct = async (req, res) => {
    try {
        const product = await productDao.newProduct(req.body);
        res.status(201).json(product)
    } catch (err) {
        console.log("Failed to create Product !", err);
        res.status(500).json('Failed to create Product !')
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productDao.updateProduct(productId, req.body);

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
        const product = await productDao.deleteProduct(productId);

        if (!product) {
            res.status(404).json("Product Not Found");
        }
        res.json("Deleted Successful !")
    } catch (err) {
        res.status(500).json('Failed to delete Product !')
    }
}
