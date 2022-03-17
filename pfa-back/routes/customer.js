var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var authJwt = require("../middleware/auth");

var jsonParser = bodyParser.json();
const customerController = require("../controllers/customerController");

//ajouter et envoyer service a la fois
router.post(
  "/service/create/:id",
  jsonParser,
  [authJwt.verifyToken, authJwt.isUser],
  customerController.createService
);

//enregistrer service
router.post(
  "/service/save/:id",
  jsonParser,
  [authJwt.verifyToken, authJwt.isUser],
  customerController.enregistrerService
);

//envoyer service déja enregistré
router.get(
  "/service/send/:id",
  jsonParser,
  [authJwt.verifyToken, authJwt.isUser],
  customerController.envoyerService
);
//afficher mes demandes
router.get(
  "/service/Requested",
  jsonParser,
  [authJwt.verifyToken, authJwt.isUser],
  customerController.demandesServices
);
//update service
router.put(
  "/service/update/:id",
  jsonParser,
  [authJwt.verifyToken, authJwt.isAdmin],
  customerController.updateService
);
//delete service
router.delete(
  "/service/delete/:id",
  jsonParser,
  [authJwt.verifyToken, authJwt.isAdmin],
  customerController.deleteService
);
module.exports = router;
