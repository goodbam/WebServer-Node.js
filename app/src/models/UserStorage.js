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
}

module.exports = UserStorage;
