const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'suspended', 'deleted'],
        default: 'active'
    }
}, {
    timestamps: true
});

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;