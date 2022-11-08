"use strict";

/** Import */
const express = require("express");
const router = express.Router();

// http://localhost:3000/
router.get("/", (req, res) => {
  res.render("home/index");
});

// http://localhost:3000/api/user/all
router.get("api/user/all", (req, res) => {
  res.render("home/index");
});

// http://localhost:3000/login
router.get("/login", (req, res) => {
  res.render("home/login");
});

/** Export */
module.exports = router;
