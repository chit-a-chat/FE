import React from "react";

import ReactDOM from "react-dom/client";

import axios from "axios";

import { changeAxiosConfig } from "@shared/lib/axios/changeAxiosConfig";

import { Global } from "@emotion/react";

import { Providers } from "./provider";
import { AppRouter } from "./router";
import { globalStyle } from "./ui";

/** Mock Api 서버 실행(Service Worker 실행)
 * api 추가하는 곳 {@linkcode apiHandlers}
 * 서버 주소 도메인 주소 : 현재 프론트엔드가 띄어져 있는 주소
 */
if (import.meta.env.DEV) {
    /** api 워커 띄우기 (실제로는 public 폴더의 mockServiceWorker가 실행) */
    const { mockApiWorker: worker } = await import("./mock/mockApiWorker");
    await worker.start();
    axios.get("/examples/3").then((res) => {
        console.log(res, "api 테스트 완료");
    });
}
/** axios 설정 변경 */
changeAxiosConfig();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Providers>
            <Global styles={globalStyle} />
            <AppRouter />
        </Providers>
    </React.StrictMode>
);
