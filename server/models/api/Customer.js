const mongoose = require('mongoose');
const Fleet = require('./Fleet');
const User = require('./user');

const CustomerSchema = new mongoose.Schema({
    belongsToUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        default: '',
    },
    contact: {
        type: String,
        default: 'No contact name found',
    },
    email: {
        type: String,
        default: 'No email addresses found',
    },
    phone: {
        type: String,
        default: 'No phone number found',
    },
    street: {
        type: String,
        default: 'No street found',
    },
    city: {
        type: String,
        default: 'No city found',
    },
    state: {
        type: String,
        default: 'No state found',
    },
    zipcode: {
        type: String,
        default: 'No zipcode found',
    },
    dotInterval: {
        type: String,
        default: 'No specified DOT interval',
    },
});

module.exports = mongoose.model('Customer', CustomerSchema);