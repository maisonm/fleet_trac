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
        fleet: [{
            unitType: {
                type: String,
                default: 'No type selected',
            },
            unitNumber: {
                type: String,
                default: 'No unit number provided',
            },
            vinNumber: {
                type: String,
                default: 'No vin number provided'
            },
            makeModel: {
                type: String,
                default: 'No make/model specified',
            },
            dotDone: {
                type: String,
                default: 'N/A',
            },
            dotDue: {
                type: String,
                default: 'N/A'
            }
        }]
    }]
});

module.exports = mongoose.model('User', UserSchema);