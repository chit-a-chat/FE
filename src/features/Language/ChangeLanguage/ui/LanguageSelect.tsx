import { useRef, useState } from "react";

import { CountryFlag, Portal, Select, TCountryName } from "@shared/ui";
import { lightPalette } from "@shared/ui/theme/palette";

import { IconChevronDown } from "@tabler/icons-react";

import { LanguageSelectorContainer } from "./component/LanguageSelectContainer/LanguageSelectContainer";
import { LanguageSelectItem } from "./component/LanguageSelectItem/LanguageSelectItem";

/** i18n 적용 필요 */
export const LanguageSelect = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [language, setLanguage] = useState<TCountryName>("English");
    const anchorContainer = useRef<HTMLDivElement>(null);
    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <LanguageSelectorContainer onClick={toggleOpen} ref={anchorContainer}>
            <CountryFlag isRound country={language} width="30px" height="30px" />
            {isOpen && (
                <Portal
                    zIndex={1}
                    anchorEl={anchorContainer.current}
                    position={{ right: "0", top: "calc(100% + 10px)" }}
                >
                    <Select>
                        <Select.MenuList>
                            <Select.MenuItem
                                onClick={() => {
                                    setLanguage("Korean");
                                }}
                            >
                                <LanguageSelectItem country="Korean" />
                            </Select.MenuItem>
                            <Select.MenuItem
                                onClick={() => {
                                    setLanguage("English");
                                }}
                            >
                                <LanguageSelectItem country="English" />
                            </Select.MenuItem>
                        </Select.MenuList>
                    </Select>
                </Portal>
            )}
            <IconChevronDown color={lightPalette.primary[5]} />
        </LanguageSelectorContainer>
    );
};
