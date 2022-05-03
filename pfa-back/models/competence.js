const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let compSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  experience: {
    type: String,
    required: true,
  },

  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("competence", compSchema);
