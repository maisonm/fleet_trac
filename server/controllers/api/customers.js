const User = require('../../models/api/user');
const Customer = require('../../models/api/Customer');
const Fleet = require('../../models/api/Fleet');
const mongoose = require('mongoose');

//Create customer
exports.customer_add = (req, res) => {
    const { body, params } = req;
    const { name, email, phone, contact, street, 
    city, state, zipcode, dotInterval } = body;
    const { userid } = params;

        User.findOne({ _id: userid }, (err, user) => {
            if (err) {
                res.send({
                    status: 500,
                    message: 'Can not find the user with the provided user id!'
                });
            }
            const customer = new Customer({
                belongsToUser: user._id,
                name: name,
                contact: contact,
                email: email,
                phone: phone,
                street: street,
                city: city,
                state: state,
                zipcode: zipcode,
                dotInterval: dotInterval,
            });
                customer.save((err, customer) => {
                    const { name } = customer;
                    if (err)
                    res.send({
                        status: 500,
                        message: 'There was an issue saving the customer. A customer was not saved.'
                    });
                    else 
                    res.send({
                        status: 200,
                        message: `${name} has been saved!`
                    });
                });
        });
    };


//Get all Customers belonging to a User
exports.customer_get = (req, res) => {
    const { params } = req;
    const { userid } = params;

    Customer.find({ belongsToUser: userid }, (err, customers) => {
        if (err)
            res.send({
                status: 404,
                message: 'Customers not found!'
            });
        else    
            res.send({
                status: 200,
                customers
            });

    });
};

//Update Customer
exports.customer_update = (req, res) => {
    const { params, body } = req;
    const { custid } = params;

    Customer.findOneAndUpdate({ _id: custid }, body, {new: true}, (err, customer) => {
        if (err)
            res.send({
                status: 500,
            });
        else 
            res.send({
                status: 200,
                customer,
            });
     });
};

//Remove Customer 
exports.customer_remove = (req, res) => {
    const { params } = req;
    const { custid } = params;

    Customer.findByIdAndRemove({ _id: custid }, (err) => {

        if (err)
            res.send({
                status: 500,
                message: 'There was an issue finding the customer. A customer has been removed.'
            });
        else 
            res.send({ 
                status: 200,
                sucess: `Customer: ${custid} has been removed!` 
            });
    });
};


// **** FLEEEEEEEET ****


//Add fleet equipment under the Customer it belongs too
exports.customer_add_fleet = (req, res) => {
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

exports.customer_update_fleet = (req, res) => {
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


exports.customer_remove_fleet = (req, res) => {
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
    })
};


//Get all Customers belonging to a User
exports.customer_get_fleet = (req, res) => {
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