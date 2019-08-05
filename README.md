# react-js

## 순서

1. yarn: 자바스크립트 패키지 매니저
1. koa.js: 웹 프레임워크 선택
1. react.js: 웹 애플리케이션 자바스크립트 라이브러리
1. ... database, oauth2 login, redux pattern, tdd ... 계속

---

## 1. 자바스크립트 패키지 매니저

- [npm](https://www.npmjs.com)
- [yarn](https://yarnpkg.com/en/)

### yarn

#### macOS

##### Homebrew

```bash
brew install yarn
yarn --version
```

#### 세팅

```bash
yarn init

question name (react-js): Diary
# ... 생략
question entry point (index.js): server.js
# ... 생략
question private: ↵
```

#### 결과

`package.json`

```json
{
  "name": "Diary",
  "version": "1.0.0",
  "description": "Diary webpage",
  "main": "server.js",
  "repository": "https://github.com/rurumimic/react-js.git",
  "author": "Dodo <my@email.com>",
  "license": "MIT"
}
```

---

## 2. 웹 프레임워크

- [express.js](https://expressjs.com/ko/)
- [koa.js](https://koajs.com)

### koa.js

Koa requires node v7.6.0 or higher for ES2015 and async function support.

```bash
yarn add koa
```

koa.js 프레임워크 설치가 끝나고 디렉터리에 `node_modules 디렉터리`와 `yarn.lock`이 추가된 것이 보인다.

```bash
.
├── README.md
├── node_modules/
├── package.json
└── yarn.lock

1 directory, 3 files
```

### Node 서버 실행

최상위 디렉터리에 `server.js`를 작성한다.

```js
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started at port ` + port);
});
```

서버를 실행해본다.

```bash
yarn start

Server started at port 3000
```

브라우저로 [localhost:3000](//localhost:3000)에 접속해서 확인해보자.

---

## 3. React.js

[facebook/create-react-app](https://github.com/facebook/create-react-app)

리액트 클라이언트 앱을 쉽게 만들기 위해서 `create-react-app`을 사용한다.

앱 이름은 `client`라고 정한다.

```bash
cd create-react-app
yarn create react-app client
```

만들어진 `client` 앱을 통채로 프로젝트 디렉터리로 옮기거나 복사한다.

```bash
.
├── README.md
├── client/
├── node_modules/
├── package.json
├── server.js
└── yarn.lock
```

`client` 디렉터리로 들어가 리액트 앱을 시작하면, 자동으로 브라우저로 창이 열린다.

```bash
cd client
yarn start
```

---
