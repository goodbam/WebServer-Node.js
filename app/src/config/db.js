/** Imoport */
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "http://119.196.163.83:4808/",
  user: "test_user",
  password: "user1234",
  database: "ggduo_db",
});

db.connect();

module.exports = db;
