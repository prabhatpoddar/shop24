const mongoose = require("mongoose");

const orderSechma = mongoose.Schema(
  {
    amount: String,
    date: { type: Date, default: Date.now() },
    userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSechma);

module.exports = Order;
