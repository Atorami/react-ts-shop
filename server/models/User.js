const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, reqauired: true },
  roles: [{ type: String, ref: "Role" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
