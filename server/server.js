const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config({ path: __dirname + '/.env' });

//API
const users = require('./routes/api/users');

//Mongoose connection
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI || process.env.MLAB_URL;
mongoose.connect(mongoDB, {useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', users);


// app.post('/user/register', (req, res, err) => {
//     const { body } = req;
//     const { username } = body;
//     const { password } = body;

//     if (err) {
//         res.sendStatus(404);
//     };

//         User.find({
//             username: username
//             }, (err, previousUsers) => {

//                 if(err){
//                     return res.send({
//                         success: false,
//                         message: 'Error: Server error'
//                     });
//                 } else if (previousUsers.length > 0) {
//                     return res.send({
//                     success: false,
//                     message: 'Error: This username is taken' 
//                     });
//                 }

//                 const newUser = new User();

//                 newUser.username = username;
//                 newUser.password = password;
//                 newUser.save((err, user) => {
//                     if(err){
//                         return res.send({
//                             success: false,
//                             message: 'Error: Server error'
//                         })
//                     }
//                     console.log('/user/register was a success');
//                 });
//         });
//     });

app.listen(port, (err) => {
    if(err) {
        console.info('ERROR: Server failed to start!', + err);
    }

    console.info(`****** Node server is running on ${port} ******`);
});








/*** Ending Notes ***/

// added new mongoDb connection
// set up index.js files in /models - /routes - /controllers
