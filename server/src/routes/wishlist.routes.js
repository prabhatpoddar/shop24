const router = require("express").Router();
const Wishlist = require("./../models/wishlist.model");
const UserModel = require("../models/user.model");
const { verifyToken } = require("../middleware/authenticate");

router.use(verifyToken);

router.get("/", async (req, res) => {
  let userId = req.user.userID;
  try {
    const items = await Wishlist.find({ userId }).populate({
      path: "userId",
      select: "fullName mobile",
    });
    res.send(items);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  const payload = req.body;
  payload.userId = req.user.userID;

  const checkitem = await Wishlist.find({
    userID: payload.userId,
    title: req.body.title,
  });
  console.log("checkitem:", checkitem);

  if (checkitem.length > 0) {
    res.send("Item already in your wishlist.");
    return;
  }

  try {
    const user = await Wishlist.create(payload);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  let userId = req.user.userID;
  const id = req.params.id;
  try {
    let item = await Wishlist.findByIdAndDelete({ _id: id, userId });
    res.send(item);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
