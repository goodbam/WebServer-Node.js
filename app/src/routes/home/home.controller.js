"use strict";

const User = require("../../models/User");
const logger = require("../../config/logger");

const output = {
  home: (req, res) => {
    logger.info(`GET "/" 200 "->HOME"`);
    res.render("home/index");
  },
  login: (req, res) => {
    logger.info(`GET "/login" 200 "->LOGIN"`);
    res.render("home/login");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();

    if (response.err) {
      logger.error(
        `POST "/login" 200 Response: "{success: ${response.success}, ${response.err}}"`
      );
    } else {
      logger.info(
        `POST "/login" 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    }

    return res.json(response);
  },

  singUp: async (req, res) => {
    const user = new User(req.body);
    const response = await user.singUp();

    if (response.err) {
      logger.error(
        `POST "/sing-up" 200 Response: "{success: ${response.success}, ${response.err}}"`
      );
    } else {
      logger.info(
        `POST "/sing-up" 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    }

    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
