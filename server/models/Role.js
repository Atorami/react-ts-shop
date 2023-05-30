const mongoose = require("mongoose");

const { Schema } = mongoose;

const roleSchema = new Schema({
  value: { type: String, unique: true, default: "user" },
});

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
