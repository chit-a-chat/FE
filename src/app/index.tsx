import React from "react";

import ReactDOM from "react-dom/client";

import { changeAxiosConfig } from "@shared/lib/axios/changeAxiosConfig";

import { Global } from "@emotion/react";

import { globalStyle } from "./lib";
import { Providers } from "./provider";
import { AppRouter } from "./router";

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
