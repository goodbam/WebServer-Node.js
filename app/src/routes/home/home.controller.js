"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const psword = req.body.psword;
    console.log("home.controller->process.login : ", id, psword);

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);

      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인 실패",
    });
  },
};

const users = {
  id: ["user", "manager", "admin"],
  psword: ["1234", "4567", "1324"],
};

module.exports = {
  output,
  process,
};
