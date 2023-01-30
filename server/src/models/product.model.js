const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  rating: Number,
  ratingCount: String,
  seprator: String,
  imagehref: String,
  image: String,
  brand: String,
  size: String,
  discountedPrice: String,
  strike: String,
  discountPercentage: String,
  category: String,
  subcategory: String,
  color: String,
});

module.exports = mongoose.model("product", productSchema);;
