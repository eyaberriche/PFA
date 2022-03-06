const express = require("express");
const app = express();
const port = 5000;
var mongoose = require("mongoose");
//environment variables
require("dotenv").config();
//database connection

// Middleware
app.use(bodyParser.json());
mongoose.connect(
  process.env.DB_CONECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (res, req) => {
    console.log("Connected Database Successfully");
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
