const asyncHandler = require("express-async-handler");

//@desc Register User
//@route GET /api/user/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "User Register" });
});

//@desc Login User
//@route GET /api/user/register
//@access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login Register" });
});

//@desc Current User
//@route GET /api/user/register
//@access public

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current Register" });
});

module.exports = { registerUser, loginUser, currentUser };
