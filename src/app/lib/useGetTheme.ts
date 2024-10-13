import { useEffect, useState } from "react";

import i18n from "@features/i18n";

import { theme, typoEnglish, typoKorean } from "@shared/ui";

export function useGetTheme() {
    const [currentTheme, setCurrentTheme] = useState(theme["light"]);

    useEffect(() => {
        const handleFontFamilyChange = (language: string) => {
            if (language === "English") {
                setCurrentTheme((prev) => ({
                    ...prev,
                    typo: typoKorean,
                }));
            } else {
                setCurrentTheme((prev) => ({ ...prev, typo: typoEnglish }));
            }
        };
        i18n.on("languageChanged", handleFontFamilyChange);

        return () => {
            i18n.off("languageChanged", handleFontFamilyChange);
        };
    }, []);
    return {
        theme: currentTheme,
    };
}
