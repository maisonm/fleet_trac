const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    contact: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    dotInterval: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);