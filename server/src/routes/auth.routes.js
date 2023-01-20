const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const UserModel = require("../models/user.model");

router.get("/", (req, res) => {
  res.send("Authenticated");
});

router.post("/register", async (req, res) => {
  const { fullName, mobile, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        console.log("err:", err);
      } else {
        const user = new UserModel({ fullName, mobile, email, password: hash });
        await user.save();
        res.status(201).json(user);
      }
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id ,isAdmin: user[0].isAdmin}, process.env.CODE);

          res.status(200).json({ msg: "Login Succesfully", token: token });
        } else {
          res.status(401).json({ message: "Wrong Credential" });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post("/loginbynumber", async (req, res) => {
  const { mobile } = req.body;
  try {
    const user = await UserModel.find({ mobile });
    if (user.length > 0) {
      const token = jwt.sign(
        { userID: user[0]._id, isAdmin: user[0].isAdmin },
        process.env.CODE
      );
      res.status(200).json({ msg: "Login Succesfully", token: token });
    } else {
      res.status(401).json({ msg: "User Dosen't Exist" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
