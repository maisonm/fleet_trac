const User = require("../../models/api/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { JWT_KEY } = process.env;

exports.user_login = (req, res) => {
  const { body } = req;
  const { email, password } = body;

  User.find({ email: email }, (err, user) => {
    //Model.find returns an array of data matching the search criteria. In this this case the users array returned will always be 0 as only one user can match with the provided email.
    if (err)
      res.status(404).send({
        message: "There was an issue finding the user."
      });
    else if (user.length != 1)
      res.status(401).send({
        message: "Incorrect email or password provided."
      });

    bcrypt
      .compare(password, user[0].password)
      .then(response => {
        if (response)
          jwt.sign({ user }, JWT_KEY, { expiresIn: "1h" }, (err, userToken) => {
            if (err)
              return res.status(500).send({
                status: 500,
                message: "There was an issue signing a client token"
              });
            //Create new object with the returned user data saved to the db. This is to omit sending the client the entire returned user object which included the password
            let userObj = {
              companyName: user[0].companyName,
              email: user[0].email,
              _id: user[0]._id,
              registerDate: user[0].registerDate
            };
            return res.status(200).send({
              status: 200,
              userObj,
              userToken
            });
          });
        else
          res.status(401).send({
            message: "Incorrect email or password provided."
          });
      })
      .catch(err => {
        console.log(err);
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
      //Checks to make sure email has been used before. Email addresses can only be used once to create an account
    } else if (previousUsers.length > 0) {
      return res.status(403).send({
        status: 403,
        message: "Records show this email is linked to another account."
      });
    }
    //Bcrypt salt rounds set to 10
    const saltRounds = 10;

    //Encrypt user password with Bcrypt
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
          //Generate and sign a JWT Token to the user
          else
            jwt.sign(
              { user },
              JWT_KEY,
              { expiresIn: "1h" },
              (err, userToken) => {
                if (err)
                  return res.status(500).send({
                    status: 500,
                    message: "There was an issue signing a client token"
                  });
                //Create new object with the returned user data saved to the db. This is to omit sending the client the entire returned user object which included the password
                let userObj = {
                  companyName: user.companyName,
                  email: user.email,
                  _id: user._id,
                  registerDate: user.registerDate
                };
                return res.status(201).send({
                  status: 201,
                  user,
                  userToken
                });
              }
            );
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

(exports.user_update = verifyToken),
  (req, res) => {
    const { params, body } = req;
    const { userid } = params;

    User.findByIdAndUpdate(
      { _id: userid },
      body,
      { new: true },
      (err, user) => {
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
      }
    );
  };

//MAKE SURE TO WARN BEFORE REMOVING USER ACCOUNT!!!! NOT REVERSIBLE!!
(exports.user_remove = verifyToken),
  (req, res) => {
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

function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.status(403).send({
      status: 403,
      message: "Authentication token failed to verify."
    });
  }
}
