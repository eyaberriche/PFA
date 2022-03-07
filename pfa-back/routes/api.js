// routes mtaa lhajet l publiques
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

// create application/json parser
var jsonParser = bodyParser.json();
const apiController = require("../controllers/apiController");

router.post("/register", jsonParser, apiController.registerUser);
router.post("/login", jsonParser, apiController.logIn);

module.exports = router;
