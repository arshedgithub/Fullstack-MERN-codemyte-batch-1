const userDao = require("../dao/userDao");
const logger = require("../utils/logger");

exports.getAllUsers = async (req, res) => {
    logger.info("Getting all users");
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const sort = req.query.sort || 'name';

        const result = await userDao.findWithPagination(page, limit, sort);
        logger.info("Successfully retrieved all users");

        res.status(200).json({
            success: true,
            data: result.users,
            pagination: result.pagination
        });
    } catch (error) {
        logger.error("Failed to get users", error);
        res.status(500).json('Failed to get Users !')
    }
}

exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    logger.info(`Getting user by ID: ${userId}`);
    
    try {
        const user = await userDao.findById(userId);

        if (!user) {
            logger.info(`User not found with ID: ${userId}`);
            return res.status(404).json("User Not Found");
        }
        
        logger.info(`Successfully retrieved user with ID: ${userId}`);
        res.status(200).json(user);
    } catch (error) {
        logger.error(`Failed to get user by ID: ${userId}`, error);
        res.status(500).json('Failed to get User !');
    }
}

exports.createNewUser = async (req, res) => {
    logger.info("Creating new user");
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            logger.info("Missing required fields for user creation");
            return res.status(400).json('Missing Required Fields');
        }

        const user = await userDao.newUser(req.body);
        logger.info(`Successfully created user with ID: ${user._id}`);
        res.status(201).json(user);
    } catch (error) {
        logger.error("Failed to create user", error);
        res.status(500).json('Failed to create User !');
    }
}

exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    logger.info(`Updating user with ID: ${userId}`);
    
    try {
        const user = await userDao.updateUser(userId, req.body);

        if (!user) {
            logger.info(`User not found for update with ID: ${userId}`);
            return res.status(404).json("User Not Found");
        }
        
        logger.info(`Successfully updated user with ID: ${userId}`);
        res.status(200).json(user);
    } catch (error) {
        logger.error(`Failed to update user with ID: ${userId}`, error);
        res.status(500).json('Failed to update User !');
    }
}

exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    logger.info(`Deleting user with ID: ${userId}`);
    
    try {
        const user = await userDao.deleteUser(userId);

        if (!user) {
            logger.info(`User not found for deletion with ID: ${userId}`);
            return res.status(404).json("User Not Found");
        }
        
        logger.info(`Successfully deleted user with ID: ${userId}`);
        res.json("Deleted Successfully !");
    } catch (error) {
        logger.error(`Failed to delete user with ID: ${userId}`, error);
        res.status(500).json('Failed to delete User !');
    }
}
