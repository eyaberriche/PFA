//routes mtaa cosumer + freelancers a la fois
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

// create application/json parser
var jsonParser = bodyParser.json();
const freelancerController = require("../controllers/freelancerController");
router.post("/competence", jsonParser, freelancerController.createCompetence);
router.get(
  "/competence/all/:id",
  jsonParser,
  freelancerController.allComptences
);

//afficher ses demandes
router.get(
    "/demande/all/:id",
    jsonParser,
    freelancerController.demandes
  );
module.exports = router;
