import { ReactNode } from "react";

import { theme } from "@shared/ui";

import { ThemeProvider } from "@emotion/react";

interface ProvidersProps {
    readonly children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
