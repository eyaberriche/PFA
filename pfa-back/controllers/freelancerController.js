// crud mtaa liste a faire mta freelancers + cofnrim etc
var User = require("../models/user");
var Competence = require("../models/competence");
var Category = require("../models/category");
var Services = require("../models/service");

// creation d'une competence
exports.createCompetence = async (req, res) => {
  const freelancer = await User.findOne({ _id: req.body.freelancer });
  let competence = new Competence({
    name: req.body.name,
    experience: req.body.experience,
    freelancer: freelancer._id,
  });
  await competence.save();

  await freelancer.save();
  return res.json({ competence });
};

//liste des competences par freelancer id
exports.allComptences = async (req, res) => {
  const freelancer = await User.findOne({ _id: req.params.id });
  Competence.find({ freelancer: freelancer._id }, function (err, competences) {
    res.json(competences);
  });
};

//afficher mes todo

exports.todoservices = async (req, res) => {
  const freelancer = await User.findOne({ _id: req.userId });
  Services.find({ freelancer: freelancer._id }, function (err, services) {
    res.json({ services });
  });
};
