"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();

    return res.json(response);
  },

  singUp: async (req, res) => {
    const user = new User(req.body);
    const response = await user.singUp();

    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
