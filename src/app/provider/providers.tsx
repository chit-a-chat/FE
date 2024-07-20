import { ReactNode } from "react";

import { theme } from "@shared/ui";

import { ThemeProvider } from "@emotion/react";

import { RootErrorBoundary } from "./RootErrorBoundary";

interface ProvidersProps {
    readonly children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <ThemeProvider theme={theme}>
            <RootErrorBoundary>{children}</RootErrorBoundary>
        </ThemeProvider>
    );
}
