import React from "react";

import ReactDOM from "react-dom/client";

import { SetupWorker } from "msw/browser";

import { changeAxiosConfig } from "@shared/lib/axios/changeAxiosConfig";

import { GlobalStyle } from "./lib/globalStyle";
import { MockApiSetter } from "./mock";
import { Providers } from "./provider";
import { AppRouter } from "./router";

/** axios 설정 변경 */

async function initializeApp() {
    changeAxiosConfig();
    /** Mock Api 서버 실행(Service Worker 실행)
     * api 추가하는 곳 {@linkcode apiHandlers}
     * 서버 주소 도메인 주소 : 현재 프론트엔드가 띄어져 있는 주소
     */
    let worker: SetupWorker | null = null;
    if (import.meta.env.DEV) {
        /** api 워커 띄우기 (실제로는 public 폴더의 mockServiceWorker가 실행) */
        const { mockApiWorker } = await import("./mock/mockApiWorker");
        worker = mockApiWorker;
        await worker.start();
    }
    ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
            {/* 개발 툴 */}
            {import.meta.env.DEV && worker && <MockApiSetter worker={worker} />}
            <Providers>
                <GlobalStyle />
                <AppRouter />
            </Providers>
        </React.StrictMode>
    );
}

initializeApp();
