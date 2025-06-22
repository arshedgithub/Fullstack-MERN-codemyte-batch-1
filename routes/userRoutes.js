const express = require('express');
const router = express.Router();

const userController = require('./../controllers/userController')

// CRUD Operation 

// GET /api/users => all users 
router.get('/', userController.getAllUsers );

// GET /api/users/:id => relevant user 
router.get('/:id', userController.getUserById );

// POST /api/users => new user
router.post('/', userController.createNewUser );

// PUT /api/users/:id => edit user
router.put('/:id', userController.updateUser );

// DELETE /api/users/:id => delete user
router.delete('/:id', userController.deleteUser );

module.exports = router;