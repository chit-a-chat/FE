import { ReactNode } from "react";

import { ThemeProvider } from "@emotion/react";

import { theme } from "../ui";

interface ProvidersProps {
    readonly children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
