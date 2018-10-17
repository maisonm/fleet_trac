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
    customer: [{
        name: {
            type: String,
            default: '',
        },
        contact: {
            type: String,
            default: 'No contact name found'
        },
        email: {
            type: String,
            default: 'No email addresses found',
        },
        phone: {
            type: String,
            default: 'No phone number found',
        },
        address: {
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
                default: 'No state found'
            },
            zipcode: {
                type: String,
                default: 'No zipcode found'
            }
        },
        dotInterval: {
            type: String,
            default: 'No specified DOT interval'
        },
    }]
});

module.exports = mongoose.model('User', UserSchema);