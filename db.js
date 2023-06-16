const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

const db = async (res) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    res.status(500).send("Failed to connect to MongoDB");
  }
};

module.exports = db;
