const mongoose = require("mongoose");

const db = async () => {
  try {
    const URI = process.env.MONGODB_URI;
    mongoose.set("strictQuery", true);
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit the application or handle the error appropriately
  }
};

module.exports = db;
