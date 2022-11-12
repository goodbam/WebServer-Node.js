"use strict";

const User = require("../../models/User");
const logger = require("../../config/logger");
// const { log } = require("winston");

const output = {
  home: (req, res) => {
    logger.info(`GET "/" 200 "-> HOME"`);
    res.render("home/index");
  },
  login: (req, res) => {
    logger.info(`GET "/login" 200 "-> LOGIN"`);
    res.render("home/login");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();

    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 400 : 200,
    };
    log(response, url);

    return res.status(url.status).json(response);
  },

  singUp: async (req, res) => {
    const user = new User(req.body);
    const response = await user.singUp();

    const url = {
      method: "POST",
      path: "/sing-up",
      status: response.err ? 500 : 201,
    };
    log(response, url);

    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};

const log = (response, url) => {
  if (response.err) {
    logger.error(
      `${url.method} "${url.path}" ${url.status} Response: ${response.success}, ${response.err}`
    );
  } else {
    logger.info(
      `${url.method} "${url.path}" ${url.status} Response: ${
        response.success
      }, ${response.msg || ""}`
    );
  }
};
