import { ReactNode } from "react";

import { queryClient } from "@shared/lib";

import { useGetTheme } from "@app/lib/useGetTheme";
import { ThemeProvider } from "@emotion/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { RootErrorBoundary } from "./RootErrorBoundary";
import { I18nProvider } from "./i18nProvider";

interface ProvidersProps {
    readonly children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    const { theme } = useGetTheme();

    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <I18nProvider>
                    <RootErrorBoundary>{children}</RootErrorBoundary>
                    <ReactQueryDevtools initialIsOpen={false} />
                </I18nProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
