"use strict";

/** Import */
const express = require("express");
const router = express.Router();

const ctrl = require("./home.controller");

// GET: localhost:3000/
router.get("/", ctrl.output.home);

// GET: localhost:3000/login
router.get("/login", ctrl.output.login);

// POST: localhost:3000/login
router.post("/login", ctrl.process.login);

// POST: localhost:3000/sing-up
router.post("/sing-up", ctrl.process.singUp);

/** Export */
module.exports = router;
