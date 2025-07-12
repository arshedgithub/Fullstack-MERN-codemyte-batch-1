const User = require("../models/User");

module.exports = {
    findAll: async () => await User.find(),
    findById: async (id) => await User.findById(id),
    newUser: async (userData) => {
        const user = new User(userData);
        return await user.save();
    },
    updateUser: async (id, updatedData) => {
       return await User.findByIdAndUpdate(id, updatedData)
    },
    deleteUser: async (id) => {
        return await User.findByIdAndDelete(id);
    },

    findWithPagination: async (page = 1, limit = 10, sort = 'name') => {
        const skip = (page - 1) * limit;

        const users = await User.find()
            .sort(sort)
            .skip(skip)
            .limit(parseInt(limit))

        const total = await User.countDocuments();
        const totalPages = Math.ceil(total/limit);

        return {
            users,
            pagination: {
                currentPage: parseInt(page),
                totalPages,
                totalItems: total,
                itemPerPage: limit
            }
        }
    }
}
