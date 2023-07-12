const mongoose = require("mongoose");

const personalPreferencesSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  hobbiesAndInterests: { type: String, required: false },
  favoriteSports: { type: String, required: false },
  preferredMusicgenres: { type: String, required: false },
  preferredMovieOrTVshows: { type: String, required: false },
});

module.exports = mongoose.model("PersonalPreferences", personalPreferencesSchema);
