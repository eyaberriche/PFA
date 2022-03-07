// crud mtaa liste a faire mta freelancers + cofnrim etc
var User = require("../models/user");
var Competence = require("../models/competence");
exports.createCompetence = async (req, res) => {
  const freelancer = await User.findById({ _id: req.body._id });
  let competence = new Competence({
    name: req.body.name,
    experience: req.body.experience,
    freelancer: freelancer._id,
  });
  await competence.save();
  freelancer.competences.push(competence);
  await freelancer.save();
  return res.json({ competence });
};
