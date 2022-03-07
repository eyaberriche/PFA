// routes mtaa lhajet l publiques
var express = require("express");
var router = express.Router();
const apiController = require("../controllers/apiController");

router.post("/register", apiController.registerUser);
router.post("/login", apiController.logIn);

module.exports = router;
