const mongoose = require("mongoose");

const { Schema } = mongoose;

const Student = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  language: {
    motherLanguage: {
      type: String,
      required: true,
    },
  },
  desiredLanguage: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    // (get: v=> `${root}${v}`)
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  interests: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Student", Student);
