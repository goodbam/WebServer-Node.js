"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const userStorage = new UserStorage();
    const body = this.body;

    try {
      const { Username, Password } = await userStorage.getUserInfo(body.id);

      if (Username) {
        if (Username === body.id && Password === body.psword) {
          return { success: true };
        }
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }

      return { success: false, msg: "존재하지 않는 아이디입니다." };
    } catch (err) {
      return { success: false, err: err };
    }
  }

  async singUp() {
    const userStorage = new UserStorage();
    const body = this.body;

    try {
      const response = await userStorage.save(body);

      return response;
    } catch (err) {
      return { success: false, err: err };
    }
  }
}

module.exports = User;
