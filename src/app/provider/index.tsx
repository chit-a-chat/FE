import { ReactNode } from "react";

import { queryClient } from "@shared/lib";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { RootErrorBoundary } from "./RootErrorBoundary";
import { CustomThemeProvider } from "./customThemeProvider";

interface ProvidersProps {
    readonly children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <CustomThemeProvider>
            <QueryClientProvider client={queryClient}>
                <RootErrorBoundary>{children}</RootErrorBoundary>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </CustomThemeProvider>
    );
}
