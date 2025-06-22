const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema)

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
    }
}
