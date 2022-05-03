// crud mtaa liste eli demanda fehom client + envoi etc
var Services = require("../models/service");
var User = require("../models/user");

//ajouter service et enovyer
exports.createService = async (req, res) => {
  const customer = await User.findById(req.userId);
  const freelancer = await User.findOne({ _id: req.body.freelancer });

  let service = new Services({
    name: req.body.name,
    creationDate: req.body.creationDate,
    customer: customer._id,
    namecostumer: customer.firstname + " " + customer.lastname,
    namefreelancer: freelancer.firstname + " " + freelancer.lastname,
    freelancer: freelancer._id,
    finalDate: req.body.finalDate,
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
  Services.find({ customer: customer._id }, function (err, services) {
    res.json({ services });
  });
};

//supprimer un service
exports.deleteService = (req, res) => {
  Services.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

//modifier ses services
exports.updateService = async (req, res) => {
  Services.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        creationDate: req.body.creationDate,
        finalDate: req.body.finalDate,
        price: req.body.price,
      },
    }
  )
    .then(() => {
      res.status(201).json({
        message: "updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
