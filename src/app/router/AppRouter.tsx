import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import { HomePage } from "@pages";

export function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        { path: "*", element: <Navigate to="/" replace /> },
    ]);

    return <RouterProvider router={router} />;
}
