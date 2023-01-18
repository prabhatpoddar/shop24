const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const UserModel = require("../models/user.model");

router.get("/", (req, res) => {
  res.send("User");
});

router.post("/register", async (req, res) => {
  const { name, email, gender, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        console.log("err:", err);
      } else {
        const user = new UserModel({ name, email, gender, password: hash });
        await user.save();
        res.send(user);
      }
    });
  } catch (error) {
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, process.env.CODE);
          res.send({ msg: "Login Succesfully", token: token });
        } else {
          res.send("Wrong Credential");
        }
      });
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
