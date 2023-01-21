const mongoose = require("mongoose");

const wishlistSechma = mongoose.Schema(
  {
    brand: String,
    title: String,
    size: String,
    quantity: String,
    price: String,
    off_price: String,
    discount: String,
    img: String,
    userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", wishlistSechma);

module.exports = Wishlist;
