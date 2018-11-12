const User = require("../../models/api/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//Salt then has password
//Store hash and salt

exports.user_login = (req, res) => {
  const { body } = req;
  const { username } = body;
  const { password } = body;

  User.find({ username: username }, (err, user) => {
    if (err)
      res.send({
        status: 404,
        message: "There was an issue finding the user."
      });
    else if (users.length != 1)
      return res.send({
        status: 403,
        message: "Invalid username!"
      });

    bcrypt
      .compare(password, user.password)
      .then(response => {
        if (response)
          res.send({
            status: 200,
            user
          });
        else
          res.send({
            status: 403,
            message: "Invalid password!"
          });
      })
      .catch(err => {
        res.send({
          status: 500,
          message: "There was an issue validating the password on the server."
        });
      });
  });
};

exports.user_signup = (req, res) => {
  const { body } = req;
  const { username, password, email } = body;

  User.find({ username: username }, (err, previousUsers) => {
    if (err) {
      return res.send({
        status: 400,
        message: "There was an issue signing up."
      });
    } else if (previousUsers.length > 0) {
      return res.send({
        status: 400,
        message: "This username is taken. Choose another username"
      });
    }

    bcrypt
      .hash(password, saltRounds)
      .then(hash => {
        const newUser = new User({
          username: username,
          password: hash,
          email: email
        });
        console.log(`${hash}`);
        newUser.save((err, user) => {
          if (err)
            res.send({
              status: 400,
              message:
                "There was an issue saving the user. Nothing has been saved."
            });
          else
            res.send({
              status: 200,
              user
            });
        });
      })
      .catch(err => {
        res.send({
          status: 500,
          message: "There was an error encrypting the password!"
        });
      });
  });
};

exports.user_update = (req, res) => {
  const { params, body } = req;
  const { userid } = params;

  User.findByIdAndUpdate({ _id: userid }, body, { new: true }, (err, user) => {
    if (err)
      res.send({
        status: 404,
        message:
          "There was an issue finding and updating the user on the server."
      });
    else
      res.send({
        status: 200,
        user
      });
  });
};

//MAKE SURE TO WARN BEFORE REMOVING USER ACCOUNT!!!! NOT REVERSIBLE!!
exports.user_remove = (req, res) => {
  const { params } = req;
  const { userid } = params;

  User.deleteOne({ _id: userid }, err => {
    if (err)
      res.send({
        status: 404,
        message: "There was an issue finding and removing the user."
      });
    else
      res.send({
        status: 200,
        message: `User ${userid} has been removed from the database!`
      });
  });
};
