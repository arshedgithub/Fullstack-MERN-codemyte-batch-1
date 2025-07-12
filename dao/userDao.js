const User = require("../models/User");
const logger = require("../utils/logger");

module.exports = {
    findAll: async () => {
        logger.info("Finding all users");
        try {
            const users = await User.find();
            logger.info(`Successfully found ${users.length} users`);
            return users;
        } catch (error) {
            logger.error("Error finding all users", error);
            throw error;
        }
    },
    
    findById: async (id) => {
        logger.info(`Finding user by ID: ${id}`);
        try {
            const user = await User.findById(id);
            if (user) {
                logger.info(`Successfully found user with ID: ${id}`);
            } else {
                logger.info(`User not found with ID: ${id}`);
            }
            return user;
        } catch (error) {
            logger.error(`Error finding user by ID: ${id}`, error);
            throw error;
        }
    },
    
    newUser: async (userData) => {
        logger.info("Creating new user", { email: userData.email });
        try {
            const user = new User(userData);
            const savedUser = await user.save();
            logger.info(`Successfully created user with ID: ${savedUser._id}`);
            return savedUser;
        } catch (error) {
            logger.error("Error creating new user", error);
            throw error;
        }
    },
    
    updateUser: async (id, updatedData) => {
        logger.info(`Updating user with ID: ${id}`);
        try {
            const user = await User.findByIdAndUpdate(id, updatedData);
            if (user) {
                logger.info(`Successfully updated user with ID: ${id}`);
            } else {
                logger.info(`User not found for update with ID: ${id}`);
            }
            return user;
        } catch (error) {
            logger.error(`Error updating user with ID: ${id}`, error);
            throw error;
        }
    },
    
    deleteUser: async (id) => {
        logger.info(`Deleting user with ID: ${id}`);
        try {
            const user = await User.findByIdAndDelete(id);
            if (user) {
                logger.info(`Successfully deleted user with ID: ${id}`);
            } else {
                logger.info(`User not found for deletion with ID: ${id}`);
            }
            return user;
        } catch (error) {
            logger.error(`Error deleting user with ID: ${id}`, error);
            throw error;
        }
    },

    findWithPagination: async (page = 1, limit = 10, sort = 'name') => {
        logger.info(`Finding users with pagination - page: ${page}, limit: ${limit}, sort: ${sort}`);
        try {
            const skip = (page - 1) * limit;

            const users = await User.find()
                .sort(sort)
                .skip(skip)
                .limit(parseInt(limit))

            const total = await User.countDocuments();
            const totalPages = Math.ceil(total/limit);

            logger.info(`Successfully retrieved ${users.length} users out of ${total} total users`);
            
            return {
                users,
                pagination: {
                    currentPage: parseInt(page),
                    totalPages,
                    totalItems: total,
                    itemPerPage: limit
                }
            }
        } catch (error) {
            logger.error("Error finding users with pagination", error);
            throw error;
        }
    }
}
