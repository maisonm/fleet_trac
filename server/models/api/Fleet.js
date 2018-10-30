const mongoose = require('mongoose');
const Customer = require('./Customer')

const FleetSchema = new mongoose.Schema({
    belongsToCustomer: {
        type: mongoose.Schema.Types.Object,
        ref: 'Customer',
        required: true,
    },
    unitType: {
        type: String,
        default: 'N/A',
        required: true,
    },
    unitNumber: {
        type: String,
        required: true,
    },
    vinNumber: {
        type: String,
    },
    make: {
        type: String,
        default: 'N/A'
    },
    year: {
        type: String,
        deault: 'N/A'
    },
    model: {
        type: String,
        default: 'N/A'
    },
    dotDone: {
        type: String, //change to date
        default: 'NA',
    },
    dotDue: {
        type: String, //change to date
        default: 'NA',
    },
}) 

module.exports = mongoose.model('Fleet', FleetSchema);