const mongoose = require("mongoose");

const { Schema } = mongoose;
const User = new Schema(
  {
    studentDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
