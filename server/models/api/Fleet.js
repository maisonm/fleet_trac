const mongoose = require('mongoose');
const Customer = require('./Customer')

const FleetSchema = new mongoose.Schema({
    belongsToCustomer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },

    unitType: {
        type: String,
        default: 'N/A',
    },
    unitNumber: {
        type: String,
        default: 'N/A',
    },
    vinNumber: {
        type: String,
        default: 'N/A',
    },
    make: {
        type: String,
        default: 'N/A'
    },
    model: {
        type: String,
        default: 'N/A',
    },
    year: {
        type: String,
        deault: 'N/A'
    },
    dotDone: {
        type: String,
        default: 'N/A',
    },
    dotDue: {
        type: String,
        default: 'N/A',
    }
}) 

module.exports = mongoose.model('Fleet', FleetSchema);