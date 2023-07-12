const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: { type: String, required: [true, "First name is required"] },
  lname: { type: String, required: [true, "Last name is required"] },
  salutation: { type: String, required: [true, "Salutation is required"] },
  email: { type: String, required: [true, "Email is required"] },
  avatar: { type: String, required: false },
});

module.exports = mongoose.model("User", userSchema);
