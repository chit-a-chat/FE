import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { Explore } from "@pages/Explore";
import { Home } from "@pages/Home";
import { MyProfile } from "@pages/MyProfile";
import { Reviews } from "@pages/Reviews";
import { SignIn } from "@pages/SignIn";

import { Footer } from "@widgets/Foooter";
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
                    <main css={{ minHeight: 0 }}>
                        <Outlet />
                    </main>
                    <Footer />
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
                    element: <div>matches</div>,
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
                    <main css={{ minHeight: 0, maxHeight: "100vh" }}>
                        <SignIn />
                    </main>
                </Layout>
            ),
        },

        { path: "*", element: <Navigate to="/" replace /> },
    ]);

    return <RouterProvider router={router} />;
}
