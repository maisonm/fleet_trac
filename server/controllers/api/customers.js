const User = require('../../models/api/user');

exports.customer_add = (req, res) => {
    const { body, params } = req;
    const { name, email, phone, contact, street, 
    city, state, zipcode, dotInterval } = body;
    const { id } = params;

    const newCustomer =
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

    User.findByIdAndUpdate(id, { $push: { customer: newCustomer } }, { new: true }, (err, user) => {
        if(err) { res.sendStatus(404); }
        res.send(user);
    });
};

exports.customer_add_fleet = (req, res) => {
    const { body, params } = req;
    const { unitType, unitNumber, vinNumber,
    makeModel, dotDone, dotDue } = body;
    const { id } = params;
    const { custid } = params;

    const newFleet = 
    {
        unitType: unitType,
        unitNumber: unitNumber,
        vinNumber: vinNumber,
        makeModel: makeModel,
        dotDone: dotDone,
        dotDue: dotDue,
    }

    User.update({ 'customer._id': custid }, 
    { 
        $push: {
            'customer.$.fleet': newFleet,
        }
    }, (err, user) => {
        if(err) { console.log(err) }
        res.send({
            success: 'Fleet added',
        });
    });
 
};
