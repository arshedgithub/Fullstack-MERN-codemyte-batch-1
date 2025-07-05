const User = require('./../models/User');

exports.getAllUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const sort = req.query.sort || 'name';

        const result = await User.findWithPagination(page, limit, sort);
        res.status(200).json({
            success: true,
            data: result.users,
            pagination: result.pagination
        });
    } catch (error) {
        res.status(500).json('Failed to get Users !')
    }
}

exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
        res.status(404).json("User Not Found");
    }
    res.status(200).json(user);
}

exports.createNewUser = async (req, res) => {
    try {
        const user = await User.newUser(req.body);
        res.status(201).json(user)
    } catch (err) {
        console.log("Failed to create User !", err);
        res.status(500).json('Failed to create User !')
    }
}

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.updateUser(userId, req.body);

        if (!user) {
            res.status(404).json("User Not Found");
        }
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json('Failed to update User !')
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.deleteUser(userId);

        if (!user) {
            res.status(404).json("User Not Found");
        }
        res.json("Deleted Successful !")
    } catch (err) {
        res.status(500).json('Failed to delete User !')
    }
}
