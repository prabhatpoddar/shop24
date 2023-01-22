const router = require("express").Router();
const Bag = require("./../models/bag.model");
const Order = require("../models/order.model");
const { verifyToken } = require("../middleware/authenticate");

router.use(verifyToken);

router.get("/", async (req, res) => {
  let userId = req.user.userID;
  try {
    const items = await Order.find({ userId }).populate({
      path: "userId",
      select: "fullName mobile",
    });
    console.log(items);
    res.send(items);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  const payload = req.body;
  if (!payload.userId) {
    payload.userId = req.user.userID;
  }
  try {
    const user = await Order.create(payload);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
