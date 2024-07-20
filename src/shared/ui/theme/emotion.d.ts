import { TbuttonVariant, TthemeId } from "@shared/type";

import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        [key in TthemeId]: {
            button: {
                [key in TbuttonVariant]: {
                    bgColor: string;
                    borderColor: string;
                    color: string;
                    bgColorHover: string;
                };
            };
        };
    }
}
