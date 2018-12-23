const mongoose = require('mongoose');
const Fleet = require('../../models/api/Fleet');
const Customer = require('../../models/api/Customer');

const jwt = require('jsonwebtoken');

//Add fleet equipment under the Customer it belongs too
exports.fleet_add = (req, res) => {
    const { body, params } = req;
    const { custid } = params;
    const { unitType, unitNumber, vinNumber, year, make, model,
    dotDone, dotDue } = body;

    
    jwt.verify(req.token, JWT_KEY, (err) => {
        if (err) 
            res.send({
                status: 500,
                message: 'Could not verify jwt token',
            });
        else 
        Customer.findOne({ _id: custid }, (err, customer) => {
            const { _id, belongsToUser } = customer;
    
            if (err) { 
                res.send({
                    status: 500,
                    message: 'Can not find the customer with the provided customer id!'
                });
            };
    
            const fleetEquipment = new Fleet({ 
                belongsToCustomer: _id,
                belongsToUser: belongsToUser,
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
                        equipment
                    });
            });
        });
    })
};

//Get all Fleets belonging to a single Customer
exports.fleet_get_all_customer = (req, res) => {
    const { params } = req;
    const { custid } = params;

        jwt.verify(req.token, JWT_KEY, (err) => {
            if (err) 
                res.send({
                    status: 500,
                    message: 'Could not verify jwt token',
                });
            else 
            Fleet.find({ belongsToCustomer: custid }, (err, fleets) => {
                if (err)
                    res.send({
                        status: 404,
                        message: 'Fleet not found!',
                    });
                else    
                    res.send({
                        status: 200,
                        fleets,
                    });
            });            
        })
    
};
//Get all Fleets belonging to all of a single User's customers
exports.fleet_get_all_user = (req, res) => {
    const { params } = req;
    const { userid } = params;
    const { JWT_KEY } = process.env;

    jwt.verify(req.token, JWT_KEY, (err) => {
        if (err) 
            res.send({
                status: 500,
                message: 'Could not verify jwt token',
            });
        else 
        Fleet.find({ belongsToUser: userid }, (err, fleets) => {
            if (err)
                res.send({
                    status: 404,
                    message: 'Fleet not found!',
                });
            else
                res.send({
                    status: 200,
                    fleets,
                });
        });
            
    })
};

//Update fleet equipment 
exports.fleet_update = (req, res) => {
    const { body, params } = req;
    const { unitType, unitNumber, vinNumber,
    make, model, dotDone, dotDue } = body;
    const { equipmentid } = params;

    jwt.verify(req.token, JWT_KEY, (err) => {
        if (err) 
            res.send({
                status: 500,
                message: 'Could not verify jwt token',
            });
        else 
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
            
    })


}

//Remove fleet equipment
exports.fleet_remove = (req, res) => {
    const { params } = req;
    const { equipmentid } = params;

    jwt.verify(req.token, JWT_KEY, (err) => {
        if (err) 
            res.send({
                status: 500,
                message: 'Could not verify jwt token',
            });
        else 

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
            
    })

};

