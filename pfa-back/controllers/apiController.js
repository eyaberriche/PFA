// lhajet l public kima login / sign up / affichage des profils
const jwt = require("jsonwebtoken");
var User = require("../models/user");
var bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    var userr = new User({
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      email: req.body.email,
      password: hash,
    });

    User.find({ email: req.body.email }, (err, users) => {
      if (err) {
        console.log("err in finding email ");
        res.json({ msg: "some error!" });
      }
      if (users.length != 0) {
        console.log("already user with this email");
        res.json({ msg: "already user exist with this email!" });
      } else {
        userr.save((error, registeredUser) => {
          if (error) {
            console.log(error);
            res.json({ msg: "some error!" });
          } else {
            let payload = { subject: registeredUser._id };
            let token = jwt.sign(payload, "secretkey");
            res.status(200).json({ token: token });
          }
        });
      }
    });
  });
};

exports.logIn = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err);
      res.json({ msg: "Somthing went wrong" });
    } else {
      if (!user) {
        res.json({ msg: "Invalid Email!!" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)

          .then((match) => {
            if (match) {
              console.log("login sucesssss");
              let payload = { subject: user._id, email: user.email };
              let token = jwt.sign(payload, "secretkey");
              res.status(200).json({
                token: token,
                email: user.email,
                lastname: user.lastname,
                firstname: user.firstname,
              });
            } else {
              console.log("incoreect passss");
              res.json({ msg: "Incorrect password!!" });
            }
          })
          .catch((err) => {
            console.log(err);
            res.json({ msg: "mochkla" });
          });
      }
    }
  });
};
