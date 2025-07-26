const express = require('express');
const router = express.Router();

const userController = require('./../controllers/userController');
const { middl1, middl3, authMiddleware } = require('../middlewares/basic');
const { createUserDtoSchema } = require('../dto/createUserSchema');
const validateRequest = require('../middlewares/validateRequest');

// GET /api/users => all users 
router.get('/', middl1, userController.getAllUsers );

// GET /api/users/:id => relevant user 
router.get('/:id', userController.getUserById );

// POST /api/users => new user
router.post('/', validateRequest(createUserDtoSchema), userController.createNewUser );

// PUT /api/users/:id => edit user
router.put('/:id', userController.updateUser );

// DELETE /api/users/:id => delete user
router.delete('/:id', middl1, authMiddleware, middl3, userController.deleteUser );

module.exports = router;