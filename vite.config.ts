import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

const filesExclude = [/^mock\//, "src/app/router/DevRouter.tsx"];

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: "@emotion/react",
            babel: {
                plugins: ["@emotion/babel-plugin"],
            },
        }),
        tsconfigPaths(),
    ],
    build: {
        rollupOptions: {
            external: [...filesExclude],
        },
    },
});
