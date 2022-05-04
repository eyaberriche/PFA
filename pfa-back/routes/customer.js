var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var authJwt = require("../middleware/auth");

var jsonParser = bodyParser.json();
const customerController = require("../controllers/customerController");

//ajouter service
router.post(
  "/service/create",
  jsonParser,
  [authJwt.verifyToken, authJwt.isUser],
  customerController.createService
);

//afficher mes demandes
router.get(
  "/service/requested",
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
