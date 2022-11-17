# **실행 전 필수 셋팅**

1. **아래 작업을 진행하기 전에 Node가 설치되어 있어야합니다.**

   - Node 설치<br>
     ->[다운로드 사이트](https://nodejs.org/ko/download/)

   - Node 설치 확인 <br>
     ->명령 프롬프트 : node -v

2. **모듈 설치 하기**

   - 설치 경로로 이동<br>
     ->`cd` {사용자 경로}/WebServer-express/app

   - npm 설치<br>
     ->`npm` install

3. **환경 변수 설정**

   - {사용자 경로}/WebServer-express/app/.env 파일 생성

   - .env 파일을 열고 변수 등록<br>
     ->value 부분은 쌍따옴표 따로 묶지 않음<br>
     ->ex) SERVER_PORT = "127.0.0.1" (X)<br>
     ->ex) SERVER_PORT = 127.0.0.1 (O)<br>
     ->입력해야하는 필수 변수 목록<br>

     ```js
     SERVER_PORT = // 원하는 포트 번호

     DB_HOST = // DB IP 주소
     DB_PORT = // DB 접속 Port
     DB_USER = // DB 접속 계정
     DB_PASSWORD = // DB 접속 계정 비밀번호
     DB_DATABASE = // DB 이름
     ```

     <br/>

---

## DB 접속 테스트

1. db.js 파일 열고 코드 주석 해제

   - {사용자 경로}/app/src/config/db.js 파일 열기
   - 22~30번줄까지 주석 해제

2. db.js 파일 실행

   - `node` {사용자 경로}/app/src/config/db.js

3. 터미널에서 로그 확인
   - 실패 시 : "Error: 에러 메세지" 출력
   - 성공 시 : "DB 접속 성공" 출력
