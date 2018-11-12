const express = require("express");
const router = express.Router();
const app = express();
const port = process.env.PORT || 8000;
const morgan = require("morgan");
require("dotenv").config({ path: __dirname + "/.env" });

//API
const users = require("./routes/api/users");
const customers = require("./routes/api/customers");
const fleets = require("./routes/api/fleets");

//Mongoose connection
const mongoose = require("mongoose");
const mongoDB = process.env.MONGODB_URI || process.env.MLAB_URL;
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));

//API routes
app.use("/users", users);
app.use("/customers", customers);
app.use("/fleets", fleets);

//Error Handling
app.use((req, res, next) => {
  const error = new Error("Route is not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  if (error) throw error;
});
//

app.listen(port, err => {
  if (err) console.info("ERROR: Server failed to start!", +err);
  else console.info(`****** Node server is running on ${port} ******`);
});
