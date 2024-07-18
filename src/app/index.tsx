import React from "react";

import ReactDOM from "react-dom/client";

import { Providers } from "./provider";
import { AppRouter } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Providers>
            <AppRouter />
        </Providers>
    </React.StrictMode>
);
