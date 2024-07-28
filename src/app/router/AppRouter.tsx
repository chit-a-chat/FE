import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import { ExampleFail, ExampleSuccess } from "@pages/Example";

import { RouterErrorBoundary } from "@app/provider/RouterErrorBoundary";
import { HomePage } from "@pages";

export function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
            errorElement: <RouterErrorBoundary />,
        },
        {
            path: "/example-success",
            element: <ExampleSuccess />,
        },
        {
            path: "/example-fail",
            element: <ExampleFail />,
        },
        { path: "*", element: <Navigate to="/" replace /> },
    ]);

    return <RouterProvider router={router} />;
}
