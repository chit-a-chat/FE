import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { Explore } from "@pages/Explore";
import { Home } from "@pages/Home";
import { Matches } from "@pages/Matches/indes";
import { MyProfile } from "@pages/MyProfile";
import { Reviews } from "@pages/Reviews";
import { Setting } from "@pages/Setting";
import { SignIn } from "@pages/SignIn";

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
                    path: "explore",
                    element: <Explore />,
                },
                {
                    path: "matches",
                    element: <Matches />,
                },
                {
                    path: "community",
                    element: <div>community</div>,
                },
                {
                    path: "profile",
                    children: [
                        { index: true, element: <Navigate to="reviews" replace /> },
                        {
                            path: "reviews",
                            element: <Reviews />,
                        },
                        {
                            path: "my-profile",
                            element: <MyProfile />,
                        },
                        {
                            path: "setting",
                            element: <Setting />,
                        },
                        {
                            path: "*",
                            element: <Navigate to="reviews" replace />,
                        },
                    ],
                },
            ],
        },
        {
            path: "sign-in",
            element: (
                <Layout>
                    <SignIn />
                </Layout>
            ),
        },

        { path: "*", element: <Navigate to="/" replace /> },
    ]);

    return <RouterProvider router={router} />;
}
