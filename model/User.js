const mongoose = require("mongoose");

const { Schema } = mongoose;
const User = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    language: {
      type: String,
      require: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },

    motherLanguage: {
      type: String,
    },

    profilePicture: {
      type: String,
      data: Buffer,
      // (get: v=> `${root}${v}`)
    },
    nationality: {
      type: String,
    },
    country: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
