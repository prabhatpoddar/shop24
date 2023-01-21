const router = require("express").Router();
const Bag = require("./../models/bag.model");
const UserModel = require("../models/user.model");
const { verifyToken } = require("../middleware/authenticate");

router.use(verifyToken);

router.get("/", async (req, res) => {
  let userId = req.user.userID;
  try {
    const items = await Bag.find({ userId }).populate({
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
  if (!payload.userId) {
    payload.userId = req.user.userID;
  }
  try {
    const user = await Bag.create(payload);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.patch("/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  payload.userId = req.user.userID;
  try {
    await Bag.findByIdAndUpdate({ _id: id }, payload, { new: true });
    res.send("item Updated");
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await Bag.findByIdAndDelete({ _id: id });
    res.send("item Deleted");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
