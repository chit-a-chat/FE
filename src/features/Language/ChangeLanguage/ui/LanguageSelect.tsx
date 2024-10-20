import i18n from "@features/i18n";

import { Select, TCountryName } from "@shared/ui";

import { Button } from "./LanguageSelect.Button";
import { Item } from "./LanguageSelect.Item";

const LanguageList: TCountryName[] = ["Korean", "English"];

export const LanguageSelect = () => {
    const language = i18n.language;

    return (
        <Select
            value={language}
            onChange={(e) => {
                const languageToUse = e.target.value;
                i18n.changeLanguage(languageToUse);
            }}
        >
            {/* 드롭다운 Trigger 영역 */}
            <Select.Contents>
                <LanguageSelect.Button value={language} />
            </Select.Contents>
            {/* 드롭다운 영역*/}
            <Select.MenuList>
                {LanguageList.map((aLanguage) => (
                    <Select.MenuItem key={`language-${aLanguage}`} value={aLanguage}>
                        <LanguageSelect.Item country={aLanguage} />
                    </Select.MenuItem>
                ))}
            </Select.MenuList>
        </Select>
    );
};

LanguageSelect.Item = Item;
LanguageSelect.Button = Button;
