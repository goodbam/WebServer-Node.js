"use strict";

//** Import */
const app = require("../app");
const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log("www : 서버 가동");
});

// import { listen } from "../app";
// const PORT = 3000;

// listen(PORT, () => {
//   console.log("서버 가동");
// });
