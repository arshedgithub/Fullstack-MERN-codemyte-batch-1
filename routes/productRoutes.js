const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')

// GET /api/products => all products 
router.get('/', productController.getAllProducts );

// GET /api/products/:id => relevant user 
router.get('/:id', productController.getProductById );

// POST /api/products => new user
router.post('/', productController.createNewProduct );

// PUT /api/products/:id => edit user
router.put('/:id', productController.updateProduct );

// DELETE /api/products/:id => delete user
router.delete('/:id', productController.deleteProduct );

module.exports = router;