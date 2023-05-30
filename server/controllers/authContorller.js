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
    } catch (error) {}
  }

  async login(req, res) {
    try {
    } catch (error) {}
  }
}

module.exports = new authContorller();
