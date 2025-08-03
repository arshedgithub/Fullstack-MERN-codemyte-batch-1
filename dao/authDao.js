const Auth = require("../models/Auth");
const User = require("../models/User");
const logger = require("../utils/logger");

module.exports = {
    // Register new user
    registerUser: async (userData) => {
        logger.info("Registering new user", { email: userData.email });
        try {
            // Create auth record first
            const authData = {
                username: userData.username,
                password: userData.password, // In real app, this should be hashed
                status: 'active'
            };
            
            const auth = new Auth(authData);
            const savedAuth = await auth.save();
            
            // Create user record
            const userRecord = {
                authId: savedAuth._id.toString(),
                username: userData.username,
                email: userData.email,
                firstname: userData.firstname,
                lastname: userData.lastname,
                age: userData.age,
                userType: userData.userType || 'user'
            };
            
            const user = new User(userRecord);
            const savedUser = await user.save();
            
            logger.info(`Successfully registered user with ID: ${savedUser._id}`);
            return { user: savedUser, auth: savedAuth };
        } catch (error) {
            logger.error("Error registering user", error);
            throw error;
        }
    },

    // Login user
    loginUser: async (username, password) => {
        logger.info("Attempting user login", { username });
        try {
            const auth = await Auth.findOne({ username, password, status: 'active' });
            if (!auth) {
                logger.info(`Login failed for username: ${username}`);
                return null;
            }
            
            const user = await User.findOne({ authId: auth._id.toString() });
            if (!user) {
                logger.info(`User not found for auth ID: ${auth._id}`);
                return null;
            }
            
            logger.info(`Successfully logged in user: ${username}`);
            return { user, auth };
        } catch (error) {
            logger.error("Error during login", error);
            throw error;
        }
    },

    // Find user by ID
    findUserById: async (userId) => {
        logger.info(`Finding user by ID: ${userId}`);
        try {
            const user = await User.findById(userId);
            if (user) {
                logger.info(`Successfully found user with ID: ${userId}`);
            } else {
                logger.info(`User not found with ID: ${userId}`);
            }
            return user;
        } catch (error) {
            logger.error(`Error finding user by ID: ${userId}`, error);
            throw error;
        }
    },

    // Update user status
    updateUserStatus: async (authId, status) => {
        logger.info(`Updating user status to: ${status} for auth ID: ${authId}`);
        try {
            const auth = await Auth.findByIdAndUpdate(authId, { status });
            if (auth) {
                logger.info(`Successfully updated user status to: ${status}`);
            } else {
                logger.info(`Auth not found for status update with ID: ${authId}`);
            }
            return auth;
        } catch (error) {
            logger.error(`Error updating user status for auth ID: ${authId}`, error);
            throw error;
        }
    }
}; 