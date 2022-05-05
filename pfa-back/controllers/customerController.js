// crud mtaa liste eli demanda fehom client + envoi etc
var Service = require("../models/service");
var User = require("../models/user");

//ajouter service et enovyer
exports.createService = async (req, res) => {
  const customer = await User.findById(req.userId);
  const freelancer = await User.findOne({ _id: req.body.freelancer });

  let service = new Service({
    name: req.body.name,
    creationDate: req.body.creationDate,
    customer: customer._id,
    emailcustomer: customer.email,
    emailfreelancer: freelancer.email,
    freelancer: freelancer._id,
    finalDate: req.body.finalDate,
    description: req.body.description,
    price: req.body.price,
  });
  console.log(service);
  await service.save();

  await customer.save();

  await freelancer.save();
  return res.json({ service });
};

//afficher mes demandes
exports.demandesServices = async (req, res) => {
  const customer = await User.findOne({ _id: req.userId });
  Service.find({ customer: customer._id }, function (err, services) {
    res.json({ services });
  });
};

//supprimer un service
exports.deleteService = (req, res) => {
  Service.findOneAndDelete({ _id: req.params.id }, function (err, service) {
    if (err) {
      res.status(400).json({
        error: err,
      });
    } else {
      res.status(200).json({
        service,
      });
    }
  });
};

//modifier ses services
exports.updateService = async (req, res) => {
  Service.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        creationDate: req.body.creationDate,
        finalDate: req.body.finalDate,
        price: req.body.price,
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
