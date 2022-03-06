var mongoose = require("mongoose");
//environment variables
require("dotenv").config();
//database connection

function connectDb() {
  const uri = process.env.ATLAS_URI;
  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("Connected Database Successfully");
  });
}
module.exports = connectDb;
