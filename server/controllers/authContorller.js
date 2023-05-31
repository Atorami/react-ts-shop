const User = require("../models/User");
const Role = require("../models/Role");
const { json } = require("express");

class authContorller {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {}
  }

  async registration(req, res) {
    try {
      const { username, password } = req.body;
      const person = await User.findOne({ username });

      if (person) {
        return res.status(400).json({ message: "Пользователь уже существует" });
      } else {
        const userRole = await Role.findOne({ value: "user" });
        const user = new User({ username, password, roles: [userRole.value] });
        await user.save();

        return res.json({ message: "Пользователь зарегистрирован" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new authContorller();
