const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("category", categorySchema);
