import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "@pages/Home";

import { GNB } from "@widgets/GNB";

import { Layout } from "@shared/ui";

import { RouterErrorBoundary } from "@app/provider";

import { DevRouter } from "./DevRouter";

export function AppRouter() {
    const router = createBrowserRouter([
        ...(import.meta.env.DEV ? DevRouter : []),
        {
            path: "/",
            element: (
                <Layout>
                    <GNB />
                    <Outlet />
                </Layout>
            ),
            errorElement: <RouterErrorBoundary />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
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
