const router = require("express").Router();
const bcrypt = require("bcrypt");
require("dotenv").config();

const { verifyUserAndAutherization, verifyEmployeeAndAutherization } = require("../middleware/authenticate");
const UserModel = require("../models/user.model");

router.get("/", verifyEmployeeAndAutherization, async (req, res) => {
  const limit=req.query.limit  

  try {
    const users = await UserModel.find().limit(limit);
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", verifyUserAndAutherization, async (req, res) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 5);
  }
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/delete/:id", verifyUserAndAutherization, async (req, res) => {
  try {
    const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
