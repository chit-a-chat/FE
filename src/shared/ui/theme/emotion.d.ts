import "@emotion/react";

import { TButton, TSpacing } from "./theme";

declare module "@emotion/react" {
    export interface Theme {
        bgColor: string;
        button: TButton;
        spacing: TSpacing;
    }
}
