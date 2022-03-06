const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    index: { unique: true },
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  ispublic: {
    type: Boolean,
    default: false,
  },
  cv: {
    type: mongoose.Schema.Types.Mixed,
  },

  picture: {
    data: Buffer,
    contentType: String,
  },
  competences: [{ type: mongoose.Schema.Types.ObjectId, ref: "competence" }],
  servicesTodo: [{ type: mongoose.Schema.Types.ObjectId, ref: "service" }],
  servicesRequested: [{ type: mongoose.Schema.Types.ObjectId, ref: "service" }],
});

module.exports = mongoose.model("user", userSchema);
