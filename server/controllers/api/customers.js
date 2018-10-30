const User = require('../../models/api/user');
const Customer = require('../../models/api/Customer');
const Fleet = require('../../models/api/Fleet');
const mongoose = require('mongoose');

//Add Customer with a user._id to reference who the customer belongs too
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
                address: {
                    street: street,
                    city: city,
                    state: state,
                    zipcode: zipcode,
                },
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
    const { custid, equipmentid } = params;

    

}


exports.customer_remove_fleet = (req, res) => {
    const { params } = req;
    const { custid, equipmentid } = params;

    User.updateOne({ 'customer._id': custid }, { $pull: { 'customer.$.fleet': { _id: equipmentid } } }, { new: true }, (err) => {
        if (err)
            throw err;
        else 
            res.send({ success: 'Eqiupment ' + equipmentid + ' | has been deleted'});
    });
};


exports.customer_update = (req, res) => {
    const { params, body } = req;
    const { custid, userid } = params;
    const { name, email, phone, contact, street, 
        city, state, zipcode, dotInterval } = body;
    
        const updatedCustomer =
        {
            name: name,
            contact: contact,
            email: email,
            phone: phone,
            address: {
                street: street,
                city: city,
                state: state,
                zipcode: zipcode,
            },
            dotInterval: dotInterval,
        };


    User.updateOne( { 'customer._id': custid }, { $set: { 'customer.$': updatedCustomer }}, (err) => {
        if (err)
            throw err;
        else    
            User.findOne({ _id: userid }, (err, user) => {
                if (err)
                    throw err;
                else 
                    res.send(user);
            })
    });
};