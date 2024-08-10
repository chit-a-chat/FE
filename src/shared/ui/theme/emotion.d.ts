import { TbuttonStatus, TbuttonVariant } from "@shared/type";

import "@emotion/react";

import { TButtonShape, TSpacing } from "./theme";

declare module "@emotion/react" {
    export interface Theme {
        bgColor: string;
        button: {
            shape: TButtonShape;
            color: {
                background: {
                    [key in TbuttonStatus]?: {
                        [key in TbuttonVariant]?: string;
                    };
                };
                border: {
                    [key in TbuttonStatus]?: {
                        [key in TbuttonVariant]?: string;
                    };
                };
                text: {
                    [key in TbuttonStatus]?: {
                        [key in TbuttonVariant]?: string;
                    };
                };
            };
        };
        spacing: TSpacing;
    }
}
