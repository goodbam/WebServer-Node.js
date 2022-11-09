"use strict";

/** Import */
const express = require("express");
const router = express.Router();

const ctrl = require("./home.controller");

/** GET */
router.get("/", ctrl.output.home);

/** GET */
router.get("/login", ctrl.output.login);

/** POST */
router.post("/login", ctrl.process.login);

/** Export */
module.exports = router;
