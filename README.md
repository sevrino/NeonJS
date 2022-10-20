<h1 align="center">
    <a href="https://discord.gg/PAC6dvw"><img src="http://i.imgur.com/VOKVy0m.jpg" width="256px" alt="Neon"></a>
  <br>
    Neon
  <br>
<h4 align="center">서버 관리를 위한 디스코드 봇</h4>

<p align="center">
<a href="https://discord.gg/PAC6dvw" target="_blank"><img src="https://img.shields.io/badge/discord-develop server-blue?logo=discord" alt="Discord">
</a>
<img src="https://img.shields.io/github/license/sevrino/neonbot" alt="license">
</p>

---

# 봇 사전 설정

## 봇 요구 사항

- Node.js v16.9.0 이상

## 초기 설정

- `npm i`를 입력해 모듈을 다운로드합니다.

## json 설정하기

- 봇을 다운로드 받으셨다면, config/config.json 파일을 만듭니다.

아래 예제를 보고 config/config.json 파일을 작성합니다.

```json
{
    "ver" : "v1.2.0",
    "clientId" : "clientid",
    "devGuildId" : "devGuildId",
    "devGuild" : "devGuild",
    "token": "token"
}
```
`clientId` : 디스코드 봇의 client id

`devGuildId` : 디스코드 개발 서버의 id

`devGuild` : 개발서버의 초대 링크(만료되지 않는 링크여야 합니다.)

`token` : 디스코드 봇의 토큰

## 봇 실행

- shell에서 `node index.js`를 입력합니다.

# 봇 사용법

## 기본적인 명령어

- /help : 봇의 사용법을 안내하는 도움말을 호출합니다.
- /ping : 봇의 지연율을 확인합니다.
- /invite : 봇의 초대 링크를 전송합니다.