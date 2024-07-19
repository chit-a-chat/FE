import React from "react";

import ReactDOM from "react-dom/client";

import { Global } from "@emotion/react";

import { Providers } from "./provider";
import { AppRouter } from "./router";
import { globalStyle } from "./ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Providers>
            <Global styles={globalStyle} />
            <AppRouter />
        </Providers>
    </React.StrictMode>
);
