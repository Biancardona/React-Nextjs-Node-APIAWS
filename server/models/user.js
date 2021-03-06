const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      max: 12,
      unique: true,
      index: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      max: 32,
      lowercase: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: String,
      default: "subscriber",
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
  { timestamps: true }
);
//timestamps second argument to automatically get created add and updated ad date whenevver there is user creater on the data base.
//virtual fiels
//usig regular function to use this keyword
userSchema
  .virtual("password")

  .set(function (password) {
    //create temporal variable called _password until we get the underscore password
    this._password = password;
    //generate salt
    this.salt = this.makeSalt();
    //encrypt password
    this.hashed_password = this.encryptPassword(password);
  })

  .get(function () {
    return this._password;
  });

//methods > authenticate, encryptPassword
userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) == this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", "this.salt")
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  //When we get the password, we also need to generate salt and populated in the list schema
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};
module.exports = mongoose.model("User", userSchema);
