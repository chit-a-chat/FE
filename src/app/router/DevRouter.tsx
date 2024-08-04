import { RouteObject } from "react-router-dom";

import { ExampleFail, ExampleSuccess } from "@pages/Example";

export const DevRouter: RouteObject[] = [
    {
        path: "/example-success",
        element: <ExampleSuccess />,
    },
    {
        path: "/example-fail",
        element: <ExampleFail />,
    },
];
