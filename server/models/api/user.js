const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  companyName: {
    type: String,
    default: "N/A"
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: "N/A"
  },
  registerDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("User", UserSchema);
