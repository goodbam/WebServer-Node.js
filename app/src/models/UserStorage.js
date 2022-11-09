"use strict";

class UserStorage {
  #users = {
    id: ["user", "manager", "admin"],
    psword: ["1234", "4567", "1324"],
    name: ["원빈", "이다정", "강동빈"],
  };

  getUsers(...fields) {
    const users = this.#users;

    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }

  /** SELECT * FROM users WHERE id = {id} */
  getUserInfo(id) {
    // User 테이블에 모든 정보를 가져옴
    const users = this.#users;
    // 매개 변수 id 값을 통해 User 테이블에서 해당 id를 찾으면 그 id에 인덱스 값을 반환
    const idx = users.id.indexOf(id);
    // User 테이블에 key 값을 List로 만듬 => [id, psword, name]
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.psword.push(userInfo.psword);

    return { success: true };
  }
}

module.exports = UserStorage;
