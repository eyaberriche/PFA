const mongoose = require("mongoose");
var bcrypt = require("bcrypt");
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
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

    picture: {
      data: Buffer,
      contentType: String,
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
  },
  { timestamp: true }
);
userSchema.plugin(require("mongoose-role"), {
  roles: ["user", "admin"],
  accessLevels: {
    user: ["user"],
    admin: ["admin"],
  },
});

userSchema.statics.hashPassword = function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
};

userSchema.methods.isValid = function (hashedpassword) {
  return bcrypt.compareSync(hashedpassword, this.password);
};

module.exports = mongoose.model("user", userSchema);
