import { ReactNode } from "react";

import { theme } from "@shared/ui";

import { useThemeId } from "@app/lib";
import { ThemeProvider } from "@emotion/react";

interface CustomThemeProviderProps {
    readonly children: ReactNode;
}

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
    const [themeId] = useThemeId();

    return <ThemeProvider theme={theme[themeId]}>{children}</ThemeProvider>;
}
