const User = require('../../models/api/user');

exports.user_login = (req, res) => {
    res.send({
        success: 'yes bitch'
    })
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
                    if(err){
                        return res.send({
                            success: false,
                            message: 'Error: Server error'
                        })
                    }
                    console.log('/user/register was a success');
                });
        });
};

