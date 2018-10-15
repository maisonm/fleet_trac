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

app.listen(port, (err) => {
    if (err) {
        console.info('ERROR: Server failed to start!', + err);
    }
    console.info(`****** Node server is running on ${port} ******`);
});
