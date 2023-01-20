const router = require("express").Router();
const bcrypt = require("bcrypt");
require("dotenv").config();

const { verifyUserAndAutherization } = require("../middleware/authenticate");
const UserModel = require("../models/user.model");

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
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

router.put("/:id", verifyUserAndAutherization, async (req, res) => {
 if(req.body.password){
   req.body.password = await bcrypt.hash(req.body.password, 5)
  res.send(req.body.password)
 }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const user = await UserModel.findOne({ _id: id });
  const userId_Making_req = req.body.userID;
  try {
    if (userId_in_Post !== userId_Making_req ) {
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
