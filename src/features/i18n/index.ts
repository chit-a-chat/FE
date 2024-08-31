import { initReactI18next } from "react-i18next";

import i18n, { CustomTypeOptions } from "i18next";

import { en } from "./en/en.translation";
import { ko } from "./ko/ko.translation";

const defaultNS: keyof CustomTypeOptions["resources"] = "common";
const resources = { ko, en };

i18n.use(initReactI18next).init({
    lng: localStorage.getItem("language") || "ko",
    resources,
    defaultNS,
    fallbackLng: "ko",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
