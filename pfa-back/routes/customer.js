var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var authJwt = require("../middleware/auth");


var jsonParser = bodyParser.json();
const customerController = require("../controllers/customerController");

router.post("/service/:id", 
jsonParser, 
[authJwt.verifyToken, authJwt.isAdmin],
customerController.createService);

router.get(
  "/service/all/:id",
  jsonParser,
  [authJwt.verifyToken, authJwt.isAdmin],
  customerController.services
);

router.put(
    "/service/update/:id",
    jsonParser,
  [authJwt.verifyToken, authJwt.isAdmin],
    customerController.update_service
  );

  router.delete(
    "/service/delete/:id",
    jsonParser,
  [authJwt.verifyToken, authJwt.isAdmin],
    customerController.deleteServices
  );
module.exports = router;