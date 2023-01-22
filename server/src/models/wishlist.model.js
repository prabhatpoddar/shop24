const mongoose = require("mongoose");

const wishlistSechma = mongoose.Schema(
  {
    brand: String,
    title: String,
    size: String,
    quantity: Number,
    price: String,
    off_price: String,
    discount: String,
    img: String,
    userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  },
  { timestamps: false }
);

const Wishlist = mongoose.model("Wishlist", wishlistSechma);

module.exports = Wishlist;
