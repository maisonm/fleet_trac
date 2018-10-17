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

