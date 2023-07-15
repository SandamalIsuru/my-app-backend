const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: { type: String, required: false },
  fname: { type: String, required: false },
  lname: { type: String, required: false },
  salutation: { type: String, required: false },
  email: { type: String, required: false },
  avatar: { type: String, required: false },
  mobile: { type: String, required: false },
  address: { type: String, required: false },
  country: { type: String, required: false },
  postalCode: { type: String, required: false },
  nationality: { type: String, required: false },
  dob: { type: String, required: false },
  gender: { type: String, required: false },
  maritalStatus: { type: String, required: false },
  spouseSalutation: { type: String, required: false },
  spouseFName: { type: String, required: false },
  spouseLName: { type: String, required: false },
  salutation: { type: String, required: false },
  hobbiesAndInterests: { type: String, required: false },
  favoriteSports: { type: String, required: false },
  preferredMusicgenres: { type: String, required: false },
  preferredMovieOrTVshows: { type: String, required: false },
});

module.exports = mongoose.model("User", userSchema);
