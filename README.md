# Chit-a-chat Frontend

## 프론트엔드 소개

## 기술 스택
| **구분**                             | 내용                                                 | 버전 |
| :----------------------------------- | :--------------------------------------------------- | :--- |
| **Language**                         | TypeScript                                           |  ^5.2.2    |
| **UI Framework**                     | React                                                |  ^18.3.1    |
| **Package Manager**                  | pnpm                                                 |  8.6.12    |
| **Runtime**                          | Node.js                                              |  18.16.1    |
| **Bundler**                          | Vite                                                 |  ^5.3.1    |
| **Transpiler**                       | SWC                                                  |   -   |
| **Client State Management**          | Zustand                                              |      |
| **Server State Management**          | TanStack Query (react query)                         |  ^5.51..15    |
| **CSS in JS**                        | Emotion (w/ Tailwind CSS)                            |  ^11.11.4    |
| **Linter**                           | ESLint                                               |  ^8.57.0    |
| **Formatter**                        | Prettier                                             |  3.3.3    |
| **HTTP Client**                      | Axios                                                |  ^1.7.2    |
| **Git hooks**                        | Husky                                                |  ^9.0.11    |
|                                      |                                                      |      |
| **아래는 추가 고려사항…**            |                                                      |      |
| **Testing** (Unit, Integration, E2E) | Vitest? Jest? Enzyme? React Testing Library? MTocha? |      |
| **Playground**                       | Storybook?                                           |      |
| **WebSocket**                        | 백엔드 합의                                          |      |

## 브렌치 네이밍 전략
main

- 배포 가능한 결과물

develop

- 배포 전 개발 브렌치

- 배포 가능한 지 유효성 체크 후 main으로 merge

feature/**,

- 프론트엔드, 백엔드 기능 구현 브렌치

hotfix/**

- main에서 분기되는 branch(배포 후, 급한 경우 사용)

- 버그 수정후에 develop,main에 모두 적용

## 커밋 메시지 구조
```bash
[{commit-type}] {title}
{body}
{footer}
------------------------------------
ex. 
[feat] 메인 배너 라우팅 변경
메인 배너의 라우팅 경로가 변경되어 수정 후 반영
close #13, resolve #14, #15, bugfix #16, #17
[QA-259], [QA-270]
```
커밋 타입(commit-type)

- feat: 새로운 기능 추가

- fix: 버그 수정

- docs : 문서 내용 변경

- style : 포멧, 세미클론 수정과 같은 스타일 관련 수정

- refactor : 리팩토링 코드

- test: 테스트 코드

- chore : build task 수정, 프로젝트 매니저 설정 수정 등

제목(title)

- 50자 이내로 작성

본문(body)

- 선택 사항

부연/자세한 설명

- 100자 미만 권장

꼬리말(footer)

- 선택 사항

- git issue 연결

- Jira 티켓 연동

## 시작 가이드

### 사전 요구사항

-   Node.js 18.16.1
-   PNPM 8.6.12

### 설치

```bash
git clone https://github.com/chit-a-chat/FE.git
# git clone git@github.com:chit-a-chat/FE.git
cd FE
```

### 실행

```bash
pnpm i
pnpm dev
```

### 빌드

```bash
pnpm build
```
