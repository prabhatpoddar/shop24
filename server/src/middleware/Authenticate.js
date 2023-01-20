const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    jwt.verify(token, process.env.CODE, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: "Invalid token",
          error: err,
          success: false,
        });
      } else {
        req.user.userId = result.userID;
        req.body.isAdmin = result.isAdmin;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "You are not Autherized" });
  }
};

const verifyUserAndAutherization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.body.userId === req.params.id || req.body.isAdmin === "admin") {
      next();
    } else {
      res.status(403).json({ message: "You are not Autherized to do that" });
    }
  });
};

const verifyEmployeeAndAutherization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (
      req.body.userId === req.params.id ||
      req.body.isAdmin == "admin" ||
      req.body.isAdmin === "employee"
    ) {
      next();
    } else {
      res.status(403).json({ message: "You are not Autherized to do that" });
    }
  });
};

module.exports = {
  verifyUserAndAutherization,
  verifyEmployeeAndAutherization,
};
