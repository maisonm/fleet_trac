const User = require("../../models/api/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//Salt then has password
//Store hash and salt

exports.user_login = (req, res) => {
  const { body } = req;
  const { email, password } = body;

  User.find({ email: email }, (err, user) => {
    if (err)
      res.status(404).send({
        message: "There was an issue finding the user."
      });
    else if (user.length != 1)
      res.status(401).send({
        message: "Incorrect email or password provided."
      });

    bcrypt
      .compare(password, user.password)
      .then(response => {
        if (response) res.send(user);
        else
          res.status(401).send({
            message: "Incorrect email or password provided."
          });
      })
      .catch(err => {
        res.status(500).send({
          message: "There was an issue validating the password on the server."
        });
      });
  });
};

exports.user_signup = (req, res) => {
  const { body } = req;
  const { companyName, password, email } = body;

  User.find({ email: email }, (err, previousUsers) => {
    if (err) {
      return res.status(400).send({
        status: 400,
        message: "There was an issue signing up."
      });
    } else if (previousUsers.length > 0) {
      return res.status(403).send({
        status: 403,
        message: "Records show this email is linked to another account."
      });
    }

    bcrypt
      .hash(password, saltRounds)
      .then(hash => {
        const newUser = new User({
          companyName: companyName,
          password: hash,
          email: email
        });
        newUser.save((err, user) => {
          if (err)
            return res.status(400).send({
              status: 400,
              message:
                "There was an issue saving the user. Nothing has been saved."
            });
          else
            return res.status(201).send({
              status: 201,
              user
            });
        });
      })
      .catch(err => {
        return res.status(500).send({
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
      res.status(404).send({
        status: 404,
        message:
          "There was an issue finding and updating the user on the server."
      });
    else
      res.status(201).send({
        status: 201,
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
      res.status(404).send({
        status: 404,
        message: "There was an issue finding and removing the user."
      });
    else
      res.status(200).send({
        status: 200,
        message: `User ${userid} has been removed from the database!`
      });
  });
};
