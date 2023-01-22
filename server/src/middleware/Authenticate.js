const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    jwt.verify(token, process.env.CODE, (err, result) => {
      if (err) res.status(401).json("Token is non Valid");

      req.user = result;
      next();
    });
  } else {
    res.status(401).json({ message: "You are not Autherized" });
  }
};

const verifyUserAndAutherization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.userID === req.params.id || req.user.isAdmin === "admin") {

      next();
    } else {
      res.status(403).json({ message: "You are not Autherized to do that" });
    }
  });
};

const verifyEmployeeAndAutherization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (
      req.user.userID === req.params.id ||
      req.user.isAdmin == "admin" ||
      req.user.isAdmin === "employee"
    ) {
      next();
    } else {
      res.status(403).json({ message: "You are not Autherized to do that" });
    }
  });
};

module.exports = {
  verifyToken,
  verifyUserAndAutherization,
  verifyEmployeeAndAutherization,
};
