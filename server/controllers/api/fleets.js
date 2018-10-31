const mongoose = require('mongoose');
const Fleet = require('../../models/api/Fleet');
const Customer = require('../../models/api/Customer');

//Add fleet equipment under the Customer it belongs too
exports.fleet_add = (req, res) => {
    const { body, params } = req;
    const { custid } = params;
    const { unitType, unitNumber, vinNumber, year, make, model,
    dotDone, dotDue } = body;

    Customer.findOne({ _id: custid }, (err, customer) => {
        const { _id } = customer;

        if (err) { 
            res.send({
                status: 500,
                message: 'Can not find the customer with the provided customer id!'
            });
        };

        const fleetEquipment = new Fleet({ 
            belongsToCustomer: _id,
            unitType: unitType,
            unitNumber: unitNumber,
            vinNumber: vinNumber,
            year: year,
            make: make,
            model: model,
            dotDone: dotDone,
            dotDue: dotDue,
        }); 

        fleetEquipment.save((err, equipment) => {
            const { unitType } = equipment;

            if (err)
                res.send({
                    status: 500,
                    message: 'There was an error saving the equipment to the cusomter fleet!',
                });
            else 
                res.send({
                    status: 200,
                    message: `The ${unitType} was saved to the customers fleet.`
                });
        });
    });
};

//Get all Customers belonging to a User
exports.fleet_get = (req, res) => {
    const { params } = req;
    const { custid } = params;

    Fleet.find({ belongsToCustomer: custid }, (err, fleets) => {
        if (err)
            res.send({
                status: 404,
                message: 'Fleet equipment not found!',
            });
        else    
            res.send({
                status: 200,
                fleets,
            });
    });
};

//Update fleet equipment 
exports.fleet_update = (req, res) => {
    const { body, params } = req;
    const { unitType, unitNumber, vinNumber,
    make, model, dotDone, dotDue } = body;
    const { equipmentid } = params;

    Fleet.findOneAndUpdate({ _id: equipmentid }, body, {new: true}, (err, equipment) => {
        if (err)
            res.send({
                status: 500,
            });
        else 
            res.send({
                status: 200,
                equipment,
            });
    });
}

//Remove fleet equipment
exports.fleet_remove = (req, res) => {
    const { params } = req;
    const { equipmentid } = params;

    Fleet.deleteOne({ _id: equipmentid }, err => {
        if (err)
            res.send({
                status: 500,
                message: 'There was an error and the equipment could not be deleted!',
            })
        else    
            res.send({
                status: 200,
                message: `${equipmentid} has been removed!`,
            });
    });
};


