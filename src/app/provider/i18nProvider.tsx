import { ReactNode, useEffect } from "react";

import i18n from "@features/i18n";

type I18nProviderProps = {
    children: ReactNode;
};

export const I18nProvider = ({ children }: I18nProviderProps) => {
    useEffect(() => {
        if (localStorage.getItem("language") === null) {
            localStorage.setItem("language", i18n.language);
        }
    }, []);

    return <>{children}</>;
};
