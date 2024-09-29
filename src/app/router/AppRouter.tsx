import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import { HomePage } from "@pages/home";

import { RouterErrorBoundary } from "@app/provider";

import { DevRouter } from "./DevRouter";

export function AppRouter() {
    const router = createBrowserRouter([
        ...(import.meta.env.DEV ? DevRouter : []),
        {
            path: "/",
            element: <HomePage />,
            errorElement: <RouterErrorBoundary />,
            children: [
                {
                    path: "/explore",
                    element: <div>explore</div>,
                },
                {
                    path: "/matches",
                    element: <div>matches</div>,
                },
                {
                    path: "/community",
                    element: <div>community</div>,
                },
            ],
        },
        { path: "*", element: <Navigate to="/" replace /> },
    ]);

    return <RouterProvider router={router} />;
}
