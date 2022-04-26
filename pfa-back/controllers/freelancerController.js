// crud mtaa liste a faire mta freelancers + cofnrim etc
var User = require("../models/user");
var Competence = require("../models/competence");
var Category = require("../models/category");
var Services = require("../models/service");

// creation d'une competence
exports.createCompetence = async (req, res) => {
  const freelancer = await User.findOne({ _id: req.body.freelancer });
  const category = await Category.findOne({ _id: req.body.category });
  let competence = new Competence({
    name: req.body.name,
    experience: req.body.experience,
    freelancer: freelancer._id,
    category: category._id,
  });
  await competence.save();
  freelancer.competences.push(competence);
  await freelancer.save();
  return res.json({ competence });
};

//liste des competences par freelancer id
exports.allComptences = async (req, res) => {
  const freelancer = await User.findOne({ _id: req.params.id });
  Competence.find({ freelancer: freelancer._id }, function (err, competences) {
    res.send(competences);
  });
};

//afficher mes todo

exports.todoservices = async (req, res) => {
  const freelancer = await User.findOne({ _id: req.userId });
  Services.find({ freelancer: freelancer._id }, function (err, todo) {
    res.send(todo);
  });
};
//get current user
exports.currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.json(user);
  } catch (error) {
    // console.log(err);
    return res.status(400).json({ msg: err.message });
  }
};
