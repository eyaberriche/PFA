// lhajet l public kima login / sign up / affichage des profils
const jwt = require("jsonwebtoken");
var User = require("../models/user");
var Competence = require("../models/competence");
var Category = require("../models/category");
var bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    var userr = new User({
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      email: req.body.email,
      password: hash,
      role: "user",
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
            let payload = {
              subject: registeredUser._id,
              role: registeredUser.role,
            };
            let token = jwt.sign(payload, "secretkey");
            res.status(200).send({ token: token });
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
              let payload = {
                id: user._id,
                email: user.email,
                role: user.role,
              };
              let token = jwt.sign(payload, "secretkey");
              res.status(200).send({
                token: token,
                user,
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
//creer une category
exports.createCategroy = async (req, res) => {
  let category = new Category({
    name: req.body.name,
  });
  await category.save();
  return res.json(category);
};

//liste des categories
exports.allCategories = async (req, res) => {
  await Category.find({}, function (err, categories) {
    res.send(categories);
  });
};
//liste des utilisateurs par categorie
exports.allUsersByCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  var users = [];
  Competence.find({ category: category._id }, function (err, competences) {
    competences.forEach(async function (competence) {
      const user = await User.findOne({ _id: competence.freelancer });
      console.log(user);
      users.push(user);
    });

    res.send(users);
  });
};
