const mongoose = require("mongoose");

const { Schema } = mongoose;
const User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", User);
