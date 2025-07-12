const Product = require("../models/Product");
const logger = require("../utils/logger");

module.exports = {
    findAll: async () => {
        logger.info("Finding all products");
        try {
            const products = await Product.find();
            logger.info(`Successfully found ${products.length} products`);
            return products;
        } catch (error) {
            logger.error("Error finding all products", error);
            throw error;
        }
    },
    
    findById: async (id) => {
        logger.info(`Finding product by ID: ${id}`);
        try {
            const product = await Product.findById(id);
            if (product) {
                logger.info(`Successfully found product with ID: ${id}`);
            } else {
                logger.info(`Product not found with ID: ${id}`);
            }
            return product;
        } catch (error) {
            logger.error(`Error finding product by ID: ${id}`, error);
            throw error;
        }
    },
    
    newProduct: async (productData) => {
        logger.info("Creating new product", { name: productData.name });
        try {
            const product = new Product(productData);
            const savedProduct = await product.save();
            logger.info(`Successfully created product with ID: ${savedProduct._id}`);
            return savedProduct;
        } catch (error) {
            logger.error("Error creating new product", error);
            throw error;
        }
    },
    
    updateProduct: async (id, updatedData) => {
        logger.info(`Updating product with ID: ${id}`);
        try {
            const product = await Product.findByIdAndUpdate(id, updatedData);
            if (product) {
                logger.info(`Successfully updated product with ID: ${id}`);
            } else {
                logger.info(`Product not found for update with ID: ${id}`);
            }
            return product;
        } catch (error) {
            logger.error(`Error updating product with ID: ${id}`, error);
            throw error;
        }
    },
    
    deleteProduct: async (id) => {
        logger.info(`Deleting product with ID: ${id}`);
        try {
            const product = await Product.findByIdAndDelete(id);
            if (product) {
                logger.info(`Successfully deleted product with ID: ${id}`);
            } else {
                logger.info(`Product not found for deletion with ID: ${id}`);
            }
            return product;
        } catch (error) {
            logger.error(`Error deleting product with ID: ${id}`, error);
            throw error;
        }
    },

    findWithPagination: async (page = 1, limit = 10, sort = 'name') => {
        logger.info(`Finding products with pagination - page: ${page}, limit: ${limit}, sort: ${sort}`);
        try {
            const skip = (page - 1) * limit;

            const products = await Product.find()
                .sort(sort)
                .skip(skip)
                .limit(parseInt(limit))

            const total = await Product.countDocuments();
            const totalPages = Math.ceil(total/limit);

            logger.info(`Successfully retrieved ${products.length} products out of ${total} total products`);
            
            return {
                products,
                pagination: {
                    currentPage: parseInt(page),
                    totalPages,
                    totalItems: total,
                    itemPerPage: limit
                }
            }
        } catch (error) {
            logger.error("Error finding products with pagination", error);
            throw error;
        }
    }
}
