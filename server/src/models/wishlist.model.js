const mongoose = require("mongoose");

const wishlistSechma = mongoose.Schema(
  {},
  { timestamps: true, versionKey: true }
);

const Wishlist = mongoose.model("Wishlist", wishlistSechma);

module.exports = Wishlist;
