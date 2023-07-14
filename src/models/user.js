const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: { type: String, required: [true, "User id is required"] },
  fname: { type: String, required: [true, "First name is required"] },
  lname: { type: String, required: [true, "Last name is required"] },
  salutation: { type: String, required: [true, "Salutation is required"] },
  email: { type: String, required: [true, "Email is required"] },
  avatar: { type: String, required: false },
  mobile: { type: String, required: [true, "Mobile number is required"] },
  address: { type: String, required: [true, "Address is required"] },
  country: { type: String, required: [true, "Country is required"] },
  postalCode: { type: String, required: [true, "Postal code is required"] },
  nationality: { type: String, required: [true, "Nationality is required"] },
  dob: { type: Date, required: false },
  gender: { type: String, required: false },
  maritalStatus: { type: String, required: false },
  spouseFName: { type: String, required: false },
  spouseLName: { type: String, required: false },
  salutation: { type: String, required: false },
  hobbiesAndInterests: { type: String, required: false },
  favoriteSports: { type: String, required: false },
  preferredMusicgenres: { type: String, required: false },
  preferredMovieOrTVshows: { type: String, required: false },
});

module.exports = mongoose.model("User", userSchema);
