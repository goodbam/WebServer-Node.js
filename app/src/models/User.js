"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const userStorage = new UserStorage();
    const body = this.body;
    const { id, psword } = await userStorage.getUserInfo(body.id);

    if (id) {
      if (id === body.id && psword === body.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디입니다." };
  }

  async singUp() {
    const userStorage = new UserStorage();
    const body = this.body;
    try {
      const response = await userStorage.save(body);
      console.log(response);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;
