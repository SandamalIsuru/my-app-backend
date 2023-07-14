const User = require("../models/user");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const {
      userId,
      fname,
      lname,
      salutation,
      email,
      avatar,
      mobile,
      address,
      country,
      postalCode,
      nationality,
      dob,
      gender,
      maritalStatus,
      spouseFName,
      spouseLName,
      spouseSalutation,
      hobbiesAndInterests,
      favoriteSports,
      preferredMusicgenres,
      preferredMovieOrTVshows,
    } = req.body;
    const user = new User({
      userId,
      fname,
      lname,
      salutation,
      email,
      avatar,
      mobile,
      address,
      country,
      postalCode,
      nationality,
      dob,
      gender,
      maritalStatus,
      spouseFName,
      spouseLName,
      spouseSalutation,
      hobbiesAndInterests,
      favoriteSports,
      preferredMusicgenres,
      preferredMovieOrTVshows,
    });
    const query = {
      userId: userId,
    };
    const dbUser = await User.find(query);
    if (dbUser.length > 0) {
      return res
        .status(409)
        .json({ error: `User already exist with ID: ${userId}` });
    }
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const query = {
      userId: id,
    };
    const userToUpdate = {
      $set: req.body,
    };

    const options = {
      returnOriginal: false,
    };
    const result = await User.findOneAndUpdate(query, userToUpdate, options);
    if (!result) {
      return res
        .status(404)
        .json({ error: `Cannot find any user with ID: ${id}` });
    }
    const updateUser = await User.find(query);
    res.json(updateUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
