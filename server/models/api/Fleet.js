const mongoose = require('mongoose');

const FleetSchema = new mongoose.Schema({
    unitType: {
        type: String,
        default: 'N/A'
    },
    unitNumber: {
        type: Number,
        default: 'N/A'
    },
    vinNumber: {
        type: Number,
        default: 'N/A'
    },
    make: {
        type: String,
        default: 'N/A'
    },
    model: {
        type: String,
        default: 'N/A'
    },
    dotDone: {
        type: String, //change to date
        default: 'NA'
    },
    dotDue: {
        type: String, //change to date
        default: 'NA'
    },
}) 

module.exports = mongoose.model('Fleet', FleetSchema);