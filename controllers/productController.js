const productDao = require('../dao/productDao');
const logger = require('../utils/logger');

exports.getAllProducts = async (req, res) => {
    logger.info("Getting all products");

    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const sort = req.query.sort || 'name';

        const result = await productDao.findWithPagination(page, limit, sort);
        logger.info("Successfully retrieved all products");
        
        res.status(200).json({
            success: true,
            data: result.products,
            pagination: result.pagination
        });
    } catch (error) {
        logger.error("Failed to get products", error);
        res.status(500).json('Failed to get Products !')
    }
}

exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    logger.info(`Getting product by ID: ${productId}`);
    
    try {
        const product = await productDao.findById(productId);

        if (!product) {
            logger.info(`Product not found with ID: ${productId}`);
            return res.status(404).json("Product Not Found");
        }
        
        logger.info(`Successfully retrieved product with ID: ${productId}`);
        res.status(200).json(product);
    } catch (error) {
        logger.error(`Failed to get product by ID: ${productId}`, error);
        res.status(500).json('Failed to get Product !');
    }
}

exports.createNewProduct = async (req, res) => {
    logger.info("Creating new product");
    try {
        const product = await productDao.newProduct(req.body);
        logger.info(`Successfully created product with ID: ${product._id}`);
        res.status(201).json(product);
    } catch (error) {
        logger.error("Failed to create product", error);
        res.status(500).json('Failed to create Product !');
    }
}

exports.updateProduct = async (req, res) => {
    const productId = req.params.id;
    logger.info(`Updating product with ID: ${productId}`);
    
    try {
        const product = await productDao.updateProduct(productId, req.body);

        if (!product) {
            logger.info(`Product not found for update with ID: ${productId}`);
            return res.status(404).json("Product Not Found");
        }
        
        logger.info(`Successfully updated product with ID: ${productId}`);
        res.status(200).json(product);
    } catch (error) {
        logger.error(`Failed to update product with ID: ${productId}`, error);
        res.status(500).json('Failed to update Product !');
    }
}

exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;
    logger.info(`Deleting product with ID: ${productId}`);
    
    try {
        const product = await productDao.deleteProduct(productId);

        if (!product) {
            logger.info(`Product not found for deletion with ID: ${productId}`);
            return res.status(404).json("Product Not Found");
        }
        
        logger.info(`Successfully deleted product with ID: ${productId}`);
        res.json("Deleted Successfully !");
    } catch (error) {
        logger.error(`Failed to delete product with ID: ${productId}`, error);
        res.status(500).json('Failed to delete Product !');
    }
}
