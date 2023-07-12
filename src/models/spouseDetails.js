const mongoose = require("mongoose");

const spouseDetailsSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  fname: { type: String, required: false },
  lname: { type: String, required: false },
  salutation: { type: String, required: false },
});

module.exports = mongoose.model("SpouseDetails", spouseDetailsSchema);
