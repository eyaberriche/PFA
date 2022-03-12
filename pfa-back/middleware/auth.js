const jwt = require("jsonwebtoken");
const User = require("../models/user");

verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("unauthorized req");
  }
  let token = req.headers.authorization.split(" ")[1];
  // console.log(token);
  if (token == "null") {
    return res.status(401).send("unauthorized req");
  }
  // let payload = jwt.verify(token, "secretkey");
  jwt.verify(token, "secretkey", function (err, decodedToken) {
    if (err) {
      return res.status(401).send("unauthorized req");
    } else {
      // id de user connecté
      req.userId = decodedToken.id;
      next();
    }
  });
};

isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    console.log(user);
    if (user.role === "admin") {
      next();
      return;
    } else {
      res.status(403).send({ message: "Require Admin Role!" });
      return;
    }
  });
};
isUser = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    console.log(user);
    if (user.role === "user") {
      next();
      return;
    } else {
      res.status(403).send({ message: "Require User Role!" });
      return;
    }
  });
};
const authJwt = {
  verifyToken,
  isAdmin,
  isUser,
};
module.exports = authJwt;
