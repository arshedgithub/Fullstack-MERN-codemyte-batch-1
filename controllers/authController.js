const authDao = require("../dao/authDao");
const logger = require("../utils/logger");
const { generateToken } = require("../middlewares/authMiddleware");

exports.register = async (req, res) => {
    logger.info("User registration request");
    try {
        const { username, password, email, firstname, lastname } = req.body;

        // Basic validation
        if (!username || !password || !email || !firstname || !lastname) {
            logger.info("Missing required fields for registration");
            return res.status(400).json({
                success: false,
                message: 'Missing Required Fields: username, password, email, firstname, lastname'
            });
        }

        const result = await authDao.registerUser(req.body);
        logger.info(`Successfully registered user: ${username}`);
        
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: {
                userId: result.user._id,
                username: result.user.username,
                email: result.user.email,
                firstname: result.user.firstname,
                lastname: result.user.lastname
            }
        });
    } catch (error) {
        logger.error("Failed to register user", error);
        res.status(500).json({
            success: false,
            message: 'Failed to register user'
        });
    }
};

exports.login = async (req, res) => {
    logger.info("User login request");
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            logger.info("Missing username or password for login");
            return res.status(400).json({
                success: false,
                message: 'Username and password are required'
            });
        }

        const result = await authDao.loginUser(username, password);
        
        if (!result) {
            logger.info(`Login failed for username: ${username}`);
            return res.status(401).json({
                success: false,
                message: 'Invalid username or password'
            });
        }

        // Generate JWT token
        const tokenData = {
            userId: result.user._id,
            username: result.user.username,
            userType: result.user.userType,
            email: result.user.email
        };
        
        const token = generateToken(tokenData);

        logger.info(`Successfully logged in user: ${username}`);
        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                token: token,
                user: {
                    userId: result.user._id,
                    username: result.user.username,
                    email: result.user.email,
                    firstname: result.user.firstname,
                    lastname: result.user.lastname,
                    userType: result.user.userType
                }
            }
        });
    } catch (error) {
        logger.error("Failed to login user", error);
        res.status(500).json({
            success: false,
            message: 'Failed to login'
        });
    }
};

exports.logout = async (req, res) => {
    logger.info("User logout request");
    try {
        const token = req.headers['authorization']?.replace('Bearer ', '') || req.headers['x-access-token'];
        
        if (!token) {
            logger.info("No JWT token provided for logout");
            return res.status(400).json({
                success: false,
                message: 'JWT token is required'
            });
        }

        // Add token to blacklist
        blacklistedTokens.add(token);
        logger.info(`Successfully logged out user and blacklisted token`);

        res.status(200).json({
            success: true,
            message: 'Logout successful'
        });
    } catch (error) {
        logger.error("Failed to logout user", error);
        res.status(500).json({
            success: false,
            message: 'Failed to logout'
        });
    }
};
