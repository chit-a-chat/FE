import { useCallback, useEffect, useState } from "react";

import { theme } from "@shared/ui";

export function useTheme() {
    const getInitialThemeId = useCallback(() => {
        let themeId = window.localStorage.getItem("chit_a_chat_theme") as keyof typeof theme | null;
        const INVALID_THEME = themeId !== "light";

        if (!themeId || INVALID_THEME) {
            themeId = "light";
        }
        return themeId;
    }, []);

    const [themeId, setThemeId] = useState(getInitialThemeId());

    const toggleTheme = useCallback(() => {
        setThemeId("light");
    }, []);

    useEffect(() => {
        window.localStorage.setItem("chit_a_chat_theme", themeId);
    }, [themeId]);

    return {
        theme: theme[themeId],
        themeId,
        toggleTheme,
    };

    // const getInitialThemeId = useCallback(() => {
    //     let themeId = window.localStorage.getItem("app_theme") as TthemeId | null;
    //     const INVALID_THEME = themeId !== "light" && themeId !== "dark";

    //     if (!themeId || INVALID_THEME) {
    //         const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
    //         themeId = matches ? "dark" : "light";
    //     }

    //     return themeId;
    // }, []);

    // const [themeId, setThemeId] = useState(getInitialThemeId);

    // const toggleThemeId = useCallback(() => {
    //     setThemeId((prevThemeId) => (prevThemeId === "dark" ? "light" : "dark"));
    // }, []);

    // useEffect(() => {
    //     window.localStorage.setItem("app_theme", themeId);
    // }, [themeId]);

    // return [themeId, toggleThemeId];
}
