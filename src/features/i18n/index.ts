import { initReactI18next } from "react-i18next";

import i18n from "i18next";

import { en } from "./en";
import { ko } from "./ko";

export const defaultNS = "translation";
export const resources = { ko, en };

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
