import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  role: { type: String, default: "user" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
