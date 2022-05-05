//routes mtaa cosumer + freelancers a la fois
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();
const freelancerController = require("../controllers/freelancerController");

const auth = require("../middleware/auth");

//confirm service
router.put(
  "/service/confirm/:id",
  jsonParser,
  [auth.verifyToken, auth.isUser],
  freelancerController.confirmService
);

//afficher mes todos services
router.get(
  "/service/todo",
  jsonParser,
  [auth.verifyToken, auth.isUser],
  freelancerController.todoservices
);

module.exports = router;
