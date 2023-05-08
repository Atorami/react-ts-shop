const User = require("../models/User");
const Role = require("../models/Role");

class authContorller {
  async getUsers(req, res) {
    try {
      const userRole = new Role();
      const adminRole = new Role({ value: "admin" });
      await userRole.save();
      await adminRole.save();
    } catch (error) {}
  }

  async registration(req, res) {
    try {
    } catch (error) {}
  }

  async login(req, res) {
    try {
    } catch (error) {}
  }
}

module.exports = new authContorller();
