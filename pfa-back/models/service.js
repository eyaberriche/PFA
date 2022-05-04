const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
  },
  finalDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },

  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("service", serviceSchema);
