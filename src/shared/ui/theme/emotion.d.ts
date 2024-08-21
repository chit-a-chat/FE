import { TButtonStatus, TButtonVariant } from "@shared/type";

import "@emotion/react";

import { TLightPalette } from "./palette";
import { TButtonShape, TSpacing } from "./theme";

declare module "@emotion/react" {
    export interface Theme {
        // TODO: theme mode에 따라 palette type 추가 2024.08.21. 김하늬
        palette: TLightPalette;
        bgColor: string;
        button: {
            shape: TButtonShape;
            color: {
                background: {
                    [key in TButtonStatus]?: {
                        [key in TButtonVariant]?: string;
                    };
                };
                border: {
                    [key in TButtonStatus]?: {
                        [key in TButtonVariant]?: string;
                    };
                };
                text: {
                    [key in TButtonStatus]?: {
                        [key in TButtonVariant]?: string;
                    };
                };
            };
        };
        spacing: TSpacing;
    }
}
