const express = require("express");
const app = express();
const port = 3000;
var mongoose = require("mongoose");
//environment variables
require("dotenv").config();
//database connection

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected Database Successfully");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
