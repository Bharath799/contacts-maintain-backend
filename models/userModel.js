const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please add register user name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: [true, "Email already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user Password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
