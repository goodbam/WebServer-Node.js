"use strict";

const fs = require("fs").promises;

class UserStorage {
  #getUserInfo(id, data) {
    // 타입 변환 : json -> Object
    const users = JSON.parse(data);
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

  #getUsers(isAll, fields, data) {
    const users = JSON.parse(data);

    // 첫 번째 인수에 true가 오면 모든 field를 반환
    if (isAll) return users;

    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }

  /** 1. 첫 번째 인수에 true가 오면 모든 Field를 반환
   *  2. SELECT {field}, {field}, ... FROM users */
  getUsers(isAll, ...fields) {
    // 해당 경로에 파일을 읽어옴
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUsers(isAll, fields, data);
      })
      .catch((err) => console.error(err));
  }

  /** SELECT * FROM users WHERE id = {id} */
  getUserInfo(id) {
    // 해당 경로에 파일을 읽어옴
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(isAll, id, data);
      })
      .catch((err) => console.error(err));
  }

  async save(userInfo) {
    const users = await this.getUsers(true);

    // 데이터 확인
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }

    // 데이터 추가
    users.id.push(userInfo.id);
    users.psword.push(userInfo.psword);
    users.name.push(userInfo.name);

    // 데이터 저장
    fs.writeFile("./src/databases/users.json", JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;
