import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "@pages/Home";
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
                    <main>
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
        {
            path: "/sign-in",
            element: (
                <Layout>
                    <main css={{ minHeight: 0 }}>
                        <SignIn />
                    </main>
                </Layout>
            ),
        },
        { path: "*", element: <Navigate to="/" replace /> },
    ]);

    return <RouterProvider router={router} />;
}
