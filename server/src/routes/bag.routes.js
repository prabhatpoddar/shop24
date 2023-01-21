const router = require("express").Router();
const Bag = require("./../models/bag.model");
const UserModel = require("../models/user.model");
router.get("/", async (req, res) => {
  try {
    const items = await Bag.find();
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
    const user = await Bag.create(payload);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.patch("/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  const user = await UserModel.findOne({ _id: id });
  const userId_in_user = user.userID;
  const userId_Making_req = req.body.userID;
  try {
    if (userId_in_user !== userId_Making_req) {
      res.send({ msg: "You are Not Autherised" });
    } else {
      await Bag.findByIdAndUpdate({ _id: id }, payload, { new: true });
      res.send("item Updated");
    }
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const post = await UserModel.findOne({ _id: id });
  const userId_in_Post = post.userID;
  const userId_Making_req = req.body.userID;
  try {
    if (userId_in_Post !== userId_Making_req) {
      res.send({ msg: "You are Not Autherised" });
    } else {
      await Bag.findByIdAndDelete({ _id: id });
      res.send("item Deleted");
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
