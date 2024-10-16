import "i18next";

import { TCountryName } from "@shared/ui";

import { en } from "./en/en.translation";

type TResources = typeof en;
declare module "i18next" {
    interface CustomTypeOptions {
        /** 자동완성을 위한 정의 */
        resources: TResources;
    }
    interface i18n {
        language: TCountryName;
        changeLanguage(lng: TCountryName): Promise<void>;
    }
}
