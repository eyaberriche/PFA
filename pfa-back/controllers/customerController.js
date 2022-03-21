// crud mtaa liste eli demanda fehom client + envoi etc
var Services = require("../models/service");
var User = require("../models/user");

//ajouter service et enovyer
exports.createService = async (req, res) => {
  const customer = await User.findById(req.userId);
  const freelancer = await User.findOne({ _id: req.params.id });

  let service = new Services({
    name: req.body.name,
    creationDate: req.body.creationDate,
    customer: customer._id,
    freelancer: freelancer._id,
    finalDate: req.body.finalDate,
    price: req.body.price,
  });
  console.log(service);
  await service.save();
  customer.servicesRequested.push(service);
  await customer.save();
  freelancer.servicesTodo.push(service);
  await freelancer.save();
  return res.json({ service });
};
//enregistrer service khw
exports.enregistrerService = async (req, res) => {
  const customer = await User.findById(req.userId);
  const freelancer = await User.findOne({ _id: req.params.id });

  let service = new Services({
    name: req.body.name,
    creationDate: req.body.creationDate,
    customer: customer._id,
    freelancer: freelancer._id,
    finalDate: req.body.finalDate,
    price: req.body.price,
  });
  console.log(service);
  await service.save();
  customer.servicesRequested.push(service);
  await customer.save();
  return res.json({ service });
};
//envoyer un service
exports.envoyerService = async (req, res) => {
  const service = await Services.findOne({ _id: req.params.id });
  const freelancer = await User.findOne({ _id: service.freelancer });
  freelancer.servicesTodo.push(service);
  await freelancer.save();
  return res.json({ freelancer });
};

//afficher mes demandes
exports.demandesServices = async (req, res) => {
  const customer = await User.findOne({ _id: req.userId });
  Services.find({ customer: customer._id }, function (err, services) {
    res.send(services);
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

