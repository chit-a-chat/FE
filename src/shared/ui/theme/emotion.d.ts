import { TbuttonStatus, TbuttonVariant } from "@shared/type";

import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        bgColor: string;
        button: {
            bgColor: {
                [key in TbuttonStatus]?: {
                    [key in TbuttonVariant]?: string;
                };
            };
            border: {
                [key in TbuttonStatus]?: {
                    [key in TbuttonVariant]?: string;
                };
            };
            color: {
                [key in TbuttonStatus]?: {
                    [key in TbuttonVariant]?: string;
                };
            };
            padding: {
                medium: string;
            };
            radius: {
                medium: string;
            };
            gap: {
                medium: string;
            };
        };
    }
}
