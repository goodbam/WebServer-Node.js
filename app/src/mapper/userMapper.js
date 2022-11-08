/** Import */
const db = require("../config/db");

function selectUserList() {
  db.query("SELECT * FROM test_user", (err, data) => {
    console.log(data);
  });
}

selectUserList();
console.log("mappper 실행");
