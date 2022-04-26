//routes mtaa cosumer + freelancers a la fois
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();
const freelancerController = require("../controllers/freelancerController");

const auth = require("../middleware/auth");

//create competence
router.post(
  "/competences/create",
  jsonParser,
  [auth.verifyToken, auth.isUser],
  freelancerController.createCompetence
);

//all competences
router.post(
  "/competences",
  jsonParser,
  [auth.verifyToken, auth.isUser],
  freelancerController.allComptences
);

//afficher mes todos services
router.post(
  "/servicesTodo",
  jsonParser,
  [auth.verifyToken, auth.isUser],
  freelancerController.todoservices
);
router.get(
  "/currentUser",
  jsonParser,
  [auth.verifyToken],
  freelancerController.currentUser
);

module.exports = router;
