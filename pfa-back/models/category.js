const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  competences: [{ type: mongoose.Schema.Types.ObjectId, ref: "competence" }],
});

module.exports = mongoose.model("category", categorySchema);
