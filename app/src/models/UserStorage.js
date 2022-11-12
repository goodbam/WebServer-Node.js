"use strict";

const db = require("../config/db");

class UserStorage {
  /** SELECT * FROM users WHERE id = {id} */
  async getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM test_user WHERE Username = ?;";

      db.query(sql, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });
  }

  /** INSERT INTO test_user(Username, Password) VALUES(?, ?)} */
  async save(userInfo) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO test_user(Username, Password) VALUES(?, ?);";

      db.query(sql, [userInfo.id, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;
