const User = require('../../models/api/user');

exports.user_login = (req, res) => {
    const { body } = req;
    const { username } = body;
    const { password } = body;

    User.find({
        username: username
    }, (err, users) => {
            if (err)
                throw err
            else if (users.length != 1)
                return res.send({ Error: 'Invalid username!' });
            
            const user = users[0];
            if (user.password != password)
                return res.send({ Error: 'Invalid password!' });
            else
                res.send(user);
        });

};

exports.user_signup = (req, res) => {
    const { body } = req;
    const { username } = body;
    const { password } = body;
    
        User.find({
            username: username
            }, (err, previousUsers) => {

                if(err){
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                } else if (previousUsers.length > 0) {
                    return res.send({
                    success: false,
                    message: 'Error: This username is taken' 
                    });
                }

                const newUser = new User();

                newUser.username = username;
                newUser.password = password;
                newUser.save((err, user) => {
                    if (err)
                        throw err;
                    else
                        res.send(user);
                });
        });
};

//MAKE SURE TO WARN BEFORE REMOVING USER ACCOUNT!!!! NOT REVERSIBLE!!
exports.user_remove = (req, res) => {
    const { params } = req;
    const { userid } = params;

    User.deleteOne({ _id: userid }, (err) => {
        if (err)
            throw err;
        res.send({
            userDeleted: true,
        });
       
    });

};