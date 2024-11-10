import { initReactI18next } from "react-i18next";

import i18n, { CustomTypeOptions } from "i18next";

import { en } from "./en/en.translation";
import { ko } from "./ko/ko.translation";

const defaultNS: keyof CustomTypeOptions["resources"] = "common";
const resources = { Korean: ko, English: en };

i18n.use(initReactI18next).init({
    lng: "Korean",
    resources,
    defaultNS,
    fallbackLng: "Korean",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
