const router = require("express").Router();
const UserModel = require("../models/user.model");

router.get("/", async (req, res) => {
  try {
    const users = await PostModel.find();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const user = new UserModel(payload);
    await user.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  const user = await UserModel.findOne({ _id: id });
  const userId_in_user = user.userID;
  const userId_Making_req = req.body.userID;
  try {
    if (userId_in_user !== userId_Making_req) {
      res.send({ msg: "You are Not Autherised" });
    } else {
      await UserModel.findByIdAndUpdate({ _id: id }, payload);
      res.send("Note Updated");
    }
  } catch (error) {
    res.send(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const post = await UserModel.findOne({ _id: id });
    const userId_in_Post = post.userID;
    const userId_Making_req = req.body.userID;
    try {
      if (userId_in_Post !== userId_Making_req) {
        res.send({ msg: "You are Not Autherised" });
      } else {
        await UserModel.findByIdAndDelete({ _id: id });
        res.send("Note Deleted");
      }
    } catch (error) {
      res.send(error);
    }
});

module.exports = router;
