// crud mtaa liste a faire mta freelancers + cofnrim etc
var User = require("../models/user");
var Competence = require("../models/competence");
var Category = require("../models/category");
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
    var competencesuser = [];
    competences.forEach(function (competence) {
      competencesuser.push(competence.name);
    });
    console.log(competencesuser);
    res.send(competencesuser);
  });
};
