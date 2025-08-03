const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    authId: {
        type: String,
        ref: 'Auth',
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    userType: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;