const express = require("express");
const app = express();
const port = 5000;
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
//environment variables
require("dotenv").config();

// all routes
var apiRoutes = require("./routes/api");
var freelancerRoutes = require("./routes/freelancer");
var customerRoutes = require("./routes/customer");

//database
mongoose.connect(
  process.env.DB_CONECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (res, req) => {
    console.log("Connected Database Successfully");
  }
);

// use all routes
app.use("/", apiRoutes);
app.use("/freelancer", freelancerRoutes);
app.use("/customer", customerRoutes);

// Middleware
// some dependency=
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
