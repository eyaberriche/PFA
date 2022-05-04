// crud mtaa liste a faire mta freelancers + cofnrim etc
var User = require("../models/user");
var Competence = require("../models/competence");
var Category = require("../models/category");
var Services = require("../models/service");

//afficher mes todo

exports.todoservices = async (req, res) => {
  const freelancer = await User.findOne({ _id: req.userId });
  Services.find({ freelancer: freelancer._id }, function (err, services) {
    res.json({ services });
  });
};

//modifier ses services
exports.confirmService = async (req, res) => {
  Services.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        confirmed: true,
      },
    },
    function (err, service) {
      if (err) {
        res.status(400).json({ msg: "Something wrong when updating data!" });
      } else {
        res.json({ service });
        console.log(service);
      }
    }
  );
};
