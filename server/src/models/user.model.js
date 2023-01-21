const mongoose = require("mongoose");

const userSechma = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
    },
   
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      max: 50,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSechma);
