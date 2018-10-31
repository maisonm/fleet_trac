const mongoose = require('mongoose');
const User = require('../../models/api/user');
const Customer = require('../../models/api/Customer');


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
