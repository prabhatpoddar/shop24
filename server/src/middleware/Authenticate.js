const jwt = require("jsonwebtoken");
require("dotenv").config();
const useragent = require("express-useragent");

const authenticate = (req, res, next) => {
  const token = req.headers.auth;
  var source = req.headers["user-agent"];
  var ua = useragent.parse(source);

  if (token) {
    const decode = jwt.verify(token, process.env.code);
    if (decode) {
      const userID = decode.userID;
      req.body.userID = userID;
      req.body.device = ua.isMobile ? "Mobile" : "PC";
      next();
    } else {
      res.send("Login First");
    }
  } else {
    res.send("Login First");
  }
};
module.exports = authenticate;
