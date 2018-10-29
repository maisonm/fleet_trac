const User = require('../../models/api/user');
const Customer = require('../../models/api/Customer');
const mongoose = require('mongoose');

exports.customer_add = (req, res) => {
    const { body, params } = req;
    const { name, email, phone, contact, street, 
    city, state, zipcode, dotInterval } = body;
    const { userid } = params;

        User.findOne({ _id: userid }, (err, user) => {
            if (err) {
                throw err;
            }
            const customer = new Customer({
                belongsTo: user._id,
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
                    if (err)
                        throw err;
                    else 
                        res.send({
                            user,
                            customer
                        });
                });
        });
    };

exports.customer_remove = (req, res) => {
    const { params } = req;
    const { custid } = params;

    Customer.findByIdAndRemove({ _id: custid }, (err) => {
        if (err)
            throw err;
        else 
            res.send({ sucess: 'Customer: ' + custid + ' has been removed' });
    });
};

exports.customer_add_fleet = (req, res) => {
    const { body, params } = req;
    const { custid } = params;
    const newEquipment = body;

    Customer.findByIdAndUpdate({ _id: custid }, { $push: { fleet: newEquipment }}, {new: true}, (err, customer) => {
        if (err) 
            throw err;
        else
            res.send({ 
                success: 'Equipment successfully added',
                customer
            });
    });
};

exports.customer_update_fleet = (req, res) => {
    const { body, params } = req;
    const { unitType, unitNumber, vinNumber,
    makeModel, dotDone, dotDue } = body;
    const { equipmentid } = params;

    const updatedEquipment = 
    {
        unitType: unitType,
        unitNumber: unitNumber,
        vinNumber: vinNumber,
        makeModel: makeModel,
        dotDone: dotDone,
        dotDue: dotDue,
    }

    User.updateOne({ 'customer.$.fleet': equipmentid }, { $set: { 'customer.$.fleet': { updatedEquipment } } }, (err) => {
        if (err)
            throw err;
        else 
            res.send('Success!!');
    });
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