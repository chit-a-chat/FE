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
