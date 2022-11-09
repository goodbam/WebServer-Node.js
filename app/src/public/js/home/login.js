"user strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login);

function login() {
  // 서버로 전달할 데이터
  const req = {
    id: id.value,
    psword: psword.value,
  };

  // 서버의 "/login" 경로로 전달
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req), // Type 변환 : Object -> String
  })
    .then((res) => {
      res.json();
    })
    .then(console.log); // .then((res) => {console.log(res)})와 같음
}
