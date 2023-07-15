require("dotenv").config();
const mongoose = require("mongoose");
const dbUri = process.env.DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
