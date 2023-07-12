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
    const { fname, lname, salutation, email, avatar } = req.body;
    const user = new User({ fname, lname, salutation, email, avatar });
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
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res
        .status(404)
        .json({ error: `Cannot find any user with ID: ${id}` });
    }
    const updateUser = await User.findById(id);
    res.json(updateUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
