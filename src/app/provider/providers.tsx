import { ReactNode } from "react";

import { queryClient } from "@shared/lib";
import { theme } from "@shared/ui";

import { useThemeId } from "@app/lib";
import { ThemeProvider } from "@emotion/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface ProvidersProps {
    readonly children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    const [themeId] = useThemeId();

    return (
        <ThemeProvider theme={theme[themeId]}>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ThemeProvider>
    );
}
