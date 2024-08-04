import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";

import { RouterErrorBoundary } from "@app/provider/RouterErrorBoundary";
import { HomePage } from "@pages";

/** DEV환경에서 추가되는 router */
let DevRouter: RouteObject[];
if (import.meta.env.DEV) {
    const { DevRouter: DRouter } = await import("./DevRouter");
    DevRouter = DRouter;
}

export function AppRouter() {
    const router = createBrowserRouter([
        ...(import.meta.env.DEV ? DevRouter : []),
        {
            path: "/",
            element: <HomePage />,
            errorElement: <RouterErrorBoundary />,
        },
        { path: "*", element: <Navigate to="/" replace /> },
    ]);

    return <RouterProvider router={router} />;
}
