const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// @desc    Register User
// @route   POST /api/user/register
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    userName,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.userName,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("User data not valid");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login user" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current user" });
});

module.exports = { registerUser, loginUser, currentUser };
