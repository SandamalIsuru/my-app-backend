const mongoose = require("mongoose");

const additionalDetailsSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  mobile: { type: String, required: [true, "Mobile number is required"] },
  address: { type: String, required: [true, "Address is required"] },
  country: { type: String, required: [true, "Country is required"] },
  postalCode: { type: String, required: [true, "Postal code is required"] },
  nationality: { type: String, required: [true, "Nationality is required"] },
  dob: { type: Date, required: false },
  gender: { type: String, required: false },
  maritalStatus: { type: String, required: false },
});

module.exports = mongoose.model("AdditionalDetails", additionalDetailsSchema);
