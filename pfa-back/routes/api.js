// routes mtaa lhajet l publiques
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var authJwt = require("../middleware/auth");

var jsonParser = bodyParser.json();
const apiController = require("../controllers/apiController");

router.post("/register", jsonParser, apiController.registerUser);
router.post("/login", jsonParser, apiController.logIn);
router.post(
  "/category/create",
  jsonParser,
  [authJwt.verifyToken, authJwt.isAdmin],
  apiController.createCategroy
);

router.get("/category/all", jsonParser, apiController.allCategories);
router.get(
  "/category/freelancers/:id",
  jsonParser,
  apiController.allUsersByCategory
);

module.exports = router;
