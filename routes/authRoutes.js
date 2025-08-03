const express = require('express');
const router = express.Router();

const authController = require('./../controllers/authController');
const validateRequest = require('../middlewares/validateRequest');
const { registerSchema, loginSchema } = require('../dto/authSchemas');

// POST /api/auth/register => register new user
router.post('/register', validateRequest(registerSchema), authController.register);

// POST /api/auth/login => login user
router.post('/login', validateRequest(loginSchema), authController.login);

// POST /api/auth/logout => logout user (blacklists the token)
router.post('/logout', authController.logout);

module.exports = router; 