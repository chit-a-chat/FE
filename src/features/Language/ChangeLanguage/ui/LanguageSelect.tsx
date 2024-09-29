import { useRef, useState } from "react";

import i18n from "@features/i18n";

import { CountryFlag, Portal, Select } from "@shared/ui";
import { lightPalette } from "@shared/ui/theme/palette";

import { IconChevronDown } from "@tabler/icons-react";

import { LanguageSelectorContainer } from "./component/LanguageSelectContainer/LanguageSelectContainer";
import { LanguageSelectItem } from "./component/LanguageSelectItem/LanguageSelectItem";

/** i18n 적용 필요 */
export const LanguageSelect = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const language = i18n.language;
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
                                    i18n.changeLanguage("Korean");
                                }}
                            >
                                <LanguageSelectItem country="Korean" />
                            </Select.MenuItem>
                            <Select.MenuItem
                                onClick={() => {
                                    i18n.changeLanguage("English");
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
