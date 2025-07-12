const express = require('express');
const router = express.Router();

const userController = require('./../controllers/userController')

// CRUD Operation 

// GET /api/users => all users 
router.get('/', middl1, middl2, middl3, userController.getAllUsers );

// GET /api/users/:id => relevant user 
router.get('/:id', userController.getUserById );

// POST /api/users => new user
router.post('/', validationRquest(createUserSchema), userController.createNewUser );

// PUT /api/users/:id => edit user
router.put('/:id', userController.updateUser );

// DELETE /api/users/:id => delete user
router.delete('/:id', userController.deleteUser );

function middl1(req, res, next) {
    console.log("middleware 1 called.");
    next();
}

function authMiddleware(req, res, next) {
    console.log("middleware 2 called.");
    if (req.body.user.role == "admin"){
        next();
    }
}

// validationRquest()

function middl3(req, res, next) {
    console.log("middleware 3 called.");
    next();
}

module.exports = router;