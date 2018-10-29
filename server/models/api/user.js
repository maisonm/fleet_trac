const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: '',
    },
    registerDate: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('User', UserSchema);