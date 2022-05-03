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
  [authJwt.verifyToken, authJwt.isUser],
  customerController.updateService
);
//delete service
router.delete(
  "/service/delete/:id",
  jsonParser,
  [authJwt.verifyToken, authJwt.isUser],
  customerController.deleteService
);
module.exports = router;
