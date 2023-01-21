const router = require("express").Router();
const Wishlist = require("./../models/wishlist.model");
const UserModel = require("../models/user.model");
router.get("/", async (req, res) => {
  try {
    const items = await Wishlist.find();
    res.send(items);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  const payload = req.body;
  const userId_Making_req = req.body.userID;
  payload.userId = userId_Making_req;
  try {
    const user = await Wishlist.create(payload);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let item = await Wishlist.findByIdAndDelete({ _id: id });
    res.send(item);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
